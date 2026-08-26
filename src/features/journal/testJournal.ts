/// <reference types="node" />
import 'fake-indexeddb/auto'
import assert from 'node:assert/strict'
import Dexie from 'dexie'
import type { FoodLogEntry, Workout, WorkoutExercise } from '../../data/models.ts'
import { getLocalDateKey } from '../../utils/localDate.ts'

await Dexie.delete('fitdex')
const { DATABASE_SCHEMA_VERSION, db } = await import('../../data/database.ts')
const { getJournalDay } = await import('./journalRepository.ts')
const { calculateJournalSummary, groupFoodEntriesByMeal, journalMinutes } = await import('./journalModel.ts')
await db.open()

assert.equal(DATABASE_SCHEMA_VERSION, 6)

const iso = (year: number, month: number, day: number, hour: number) => new Date(year, month - 1, day, hour).toISOString()
const recordTimes = { createdAt: iso(2026, 8, 25, 8), updatedAt: iso(2026, 8, 25, 8) }

function food(id: string, date: string, meal: FoodLogEntry['meal'], foodName: string, kcal?: number, protein?: number): FoodLogEntry {
  return { id, date, meal, foodName, categoryName: 'Snapshot category', categoryKind: 'predefined', categoryId: 'other', kcal, protein, ...recordTimes }
}

function workout(id: string, completedAt: string, nameSnapshot: string, durationSeconds: number, status: Workout['status'] = 'completed'): Workout {
  return { id, nameSnapshot, status, startedAt: new Date(Date.parse(completedAt) - durationSeconds * 1000).toISOString(), completedAt, durationSeconds, ...recordTimes }
}

function exercise(id: string, workoutId: string, name: string, order: number): WorkoutExercise {
  return { id, workoutId, exerciseId: `live:${id}`, exerciseNameSnapshot: name, order, ...recordTimes }
}

// Empty day exposes honest zero summaries and four predictable meal groups.
const emptyDay = await getJournalDay('2026-08-24')
assert.deepEqual(calculateJournalSummary(emptyDay), { sessionCount: 0, durationSeconds: 0, kcal: 0, protein: 0 })
assert.deepEqual(Object.keys(groupFoodEntriesByMeal(emptyDay.foodEntries)), ['breakfast', 'lunch', 'supper', 'dinner'])

// Food-only day sums snapshot facts, ignores missing values, and never reads remembered defaults.
await db.foodLogEntries.bulkAdd([
  food('food:eggs', '2026-08-25', 'breakfast', 'Eggs', 200, 20),
  food('food:rice', '2026-08-25', 'lunch', 'Chicken Rice', 700, 50),
  food('food:missing', '2026-08-25', 'supper', 'Tea'),
])
const rememberedTimestamp = iso(2026, 8, 25, 9)
await db.rememberedFoods.add({ id: 'remembered:eggs', name: 'Changed Eggs', normalizedName: 'changed eggs', categoryId: 'eggs', kcal: 999, protein: 999, timesUsed: 1, lastUsedAt: rememberedTimestamp, mealUsage: {}, createdAt: rememberedTimestamp, updatedAt: rememberedTimestamp })
const foodOnly = await getJournalDay('2026-08-25')
assert.deepEqual(calculateJournalSummary(foodOnly), { sessionCount: 0, durationSeconds: 0, kcal: 900, protein: 70 })
assert.deepEqual(groupFoodEntriesByMeal(foodOnly.foodEntries).breakfast.map((entry) => entry.foodName), ['Eggs'])

// Workout-only day reads completion date, canonical duration, and exercise snapshots.
const workoutOnlyCompleted = iso(2026, 8, 26, 12)
await db.workouts.bulkAdd([
  workout('workout:only', workoutOnlyCompleted, 'Snapshot Push', 58 * 60),
  workout('workout:active', iso(2026, 8, 26, 13), 'Active session', 10 * 60, 'active'),
  workout('workout:discarded', iso(2026, 8, 26, 14), 'Discarded session', 10 * 60, 'discarded'),
])
await db.workoutExercises.bulkAdd(Array.from({ length: 7 }, (_, index) => exercise(`only:${index}`, 'workout:only', `Historical exercise ${index + 1}`, index)))
const workoutOnly = await getJournalDay('2026-08-26')
assert.equal(workoutOnly.workouts.length, 1)
assert.equal(workoutOnly.workouts[0].workout.nameSnapshot, 'Snapshot Push')
assert.equal(workoutOnly.workouts[0].exerciseCount, 7)
assert.deepEqual(calculateJournalSummary(workoutOnly), { sessionCount: 1, durationSeconds: 58 * 60, kcal: 0, protein: 0 })
assert.equal(journalMinutes(calculateJournalSummary(workoutOnly).durationSeconds), 58)

// Mixed day supports multiple completed sessions and Food entries in multiple meals.
await db.workouts.bulkAdd([
  workout('workout:morning', iso(2026, 8, 27, 8), 'Morning Push', 20 * 60),
  workout('workout:evening', iso(2026, 8, 27, 18), 'Evening Cardio', 35 * 60),
])
await db.workoutExercises.bulkAdd([
  exercise('morning:1', 'workout:morning', 'Original Press Snapshot', 0),
  exercise('morning:2', 'workout:morning', 'Original Fly Snapshot', 1),
  exercise('evening:1', 'workout:evening', 'Original Run Snapshot', 0),
])
await db.foodLogEntries.bulkAdd([
  food('food:mixed-breakfast', '2026-08-27', 'breakfast', 'Banana snapshot', 100, 1),
  { ...food('food:orphan', '2026-08-27', 'dinner', 'Curry snapshot', 500, 29), categoryId: undefined, categoryName: 'Uncategorized', categoryKind: 'unresolved' },
])
const mixed = await getJournalDay('2026-08-27')
const mixedSummary = calculateJournalSummary(mixed)
assert.equal(mixed.workouts.length, 2)
assert.deepEqual(mixed.workouts.map((item) => item.workout.nameSnapshot), ['Morning Push', 'Evening Cardio'])
assert.deepEqual(mixed.workouts.map((item) => item.exerciseCount), [2, 1])
assert.deepEqual(mixedSummary, { sessionCount: 2, durationSeconds: 55 * 60, kcal: 600, protein: 30 })
assert.equal(groupFoodEntriesByMeal(mixed.foodEntries).dinner[0].categoryKind, 'unresolved')

// Local completion identity is derived from local fields, including near-midnight records.
const nearMidnight = new Date(2026, 7, 28, 23, 45)
await db.workouts.add(workout('workout:late', nearMidnight.toISOString(), 'Late Local Session', 15 * 60))
assert.equal((await getJournalDay(getLocalDateKey(nearMidnight))).workouts.some((item) => item.workout.id === 'workout:late'), true)

db.close()
await Dexie.delete('fitdex')
console.log('Journal tests passed: empty, food-only, workout-only, mixed, multiple workouts, local dates, snapshots, and orphaned categories')
