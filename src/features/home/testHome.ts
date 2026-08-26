/// <reference types="node" />
import 'fake-indexeddb/auto'
import assert from 'node:assert/strict'
import Dexie from 'dexie'
import type { FoodLogEntry, Workout, WorkoutExercise, WorkoutSet } from '../../data/models.ts'
import { formatHomeGreeting, getGreetingPeriod, summarizeTodayFood } from './homeModel.ts'

const morning = new Date(2026, 7, 25, 5, 0)
const lateMorning = new Date(2026, 7, 25, 11, 59)
const afternoon = new Date(2026, 7, 25, 12, 0)
const evening = new Date(2026, 7, 25, 17, 0)
const beforeMorning = new Date(2026, 7, 25, 4, 59)
assert.equal(getGreetingPeriod(morning), 'Good morning')
assert.equal(getGreetingPeriod(lateMorning), 'Good morning')
assert.equal(getGreetingPeriod(afternoon), 'Good afternoon')
assert.equal(getGreetingPeriod(evening), 'Good evening')
assert.equal(getGreetingPeriod(beforeMorning), 'Good evening')
assert.equal(formatHomeGreeting('Arijit', morning), 'Good morning, Arijit')
assert.equal(formatHomeGreeting('', morning), 'Good morning')
assert.doesNotMatch(formatHomeGreeting('', morning), /,/)

await Dexie.delete('fitdex')
const { DATABASE_SCHEMA_VERSION, db } = await import('../../data/database.ts')
const { loadHomeDashboard } = await import('./homeRepository.ts')
await db.open()
assert.equal(DATABASE_SCHEMA_VERSION, 7)

const date = '2026-08-25'
const timestamp = new Date(2026, 7, 25, 8).toISOString()
const recordTimes = { createdAt: timestamp, updatedAt: timestamp }
const completedAt = (hour: number) => new Date(2026, 7, 25, hour).toISOString()
function workout(id: string, status: Workout['status'], hour: number, durationSeconds?: number): Workout {
  const completed = completedAt(hour)
  return { id, nameSnapshot: id, status, startedAt: new Date(Date.parse(completed) - (durationSeconds ?? 600) * 1000).toISOString(), completedAt: status === 'completed' ? completed : undefined, durationSeconds, ...recordTimes }
}
function exercise(id: string, workoutId: string): WorkoutExercise {
  return { id, workoutId, exerciseId: 'bench', exerciseNameSnapshot: 'Historical Bench Press', trackingTypeSnapshot: 'weight_reps', order: 0, ...recordTimes }
}
function set(id: string, workoutExerciseId: string, weight: number, reps: number, completed = true): WorkoutSet {
  return { id, workoutExerciseId, order: 0, weight, reps, completed, ...recordTimes }
}
function food(id: string, meal: FoodLogEntry['meal'], kcal?: number, protein?: number): FoodLogEntry {
  return { id, date, meal, foodName: id, categoryName: 'Other', categoryKind: 'predefined', categoryId: 'other', kcal, protein, ...recordTimes }
}

const empty = await loadHomeDashboard(date)
assert.equal(empty.activeWorkout, undefined)
assert.equal(empty.completedToday.length, 0)
assert.equal(empty.food.itemCount, 0)
assert.equal(empty.newestPr, undefined)
assert.equal(empty.hasHistory, false)

await db.workouts.add(workout('Active Push', 'active', 9))
await db.workoutExercises.add(exercise('active-exercise', 'Active Push'))
const activeOnly = await loadHomeDashboard(date)
assert.equal(activeOnly.activeWorkout?.workout.nameSnapshot, 'Active Push')
assert.equal(activeOnly.activeWorkout?.exercises.length, 1)
assert.equal(activeOnly.hasHistory, true)

await db.workouts.bulkAdd([workout('Morning Push', 'completed', 10, 58 * 60), workout('Evening Work', 'completed', 18, 32 * 60), workout('Discarded', 'discarded', 19, 999)])
await db.workoutExercises.bulkAdd([exercise('morning-exercise', 'Morning Push'), exercise('evening-exercise', 'Evening Work'), exercise('discarded-exercise', 'Discarded')])
await db.workoutSets.bulkAdd([
  set('morning-set', 'morning-exercise', 60, 10),
  set('morning-draft', 'morning-exercise', 100, 10, false),
  set('evening-set', 'evening-exercise', 70, 5),
  set('discarded-set', 'discarded-exercise', 500, 10),
])
await db.foodLogEntries.bulkAdd([
  food('Eggs', 'breakfast', 200, 20), food('Chicken Rice', 'lunch', 700, 50), food('Tea', 'supper'), food('Curry', 'dinner', 500, 30),
])

const combined = await loadHomeDashboard(date)
assert.ok(combined.activeWorkout, 'active and completed workouts can coexist; Home can prioritize Resume')
assert.equal(combined.completedToday.length, 2)
assert.equal(combined.todayTrainingSeconds, 90 * 60)
assert.equal(combined.food.itemCount, 4)
assert.equal(combined.food.kcal, 1400)
assert.equal(combined.food.protein, 100)
assert.deepEqual(combined.food.mealLogged, { breakfast: true, lunch: true, supper: true, dinner: true })
assert.equal(combined.last7WorkoutCount, 2)
assert.equal(combined.last7VolumeKg, 950)
assert.equal(combined.newestPr?.exerciseId, 'bench')
assert.equal(combined.newestPr?.metrics.find((metric) => metric.key === 'best-set-volume')?.value, 600, 'Home reuses Progress PR semantics')

await db.workouts.delete('Active Push')
await db.workoutExercises.delete('active-exercise')
const completedOnly = await loadHomeDashboard(date)
assert.equal(completedOnly.activeWorkout, undefined)
assert.equal(completedOnly.completedToday.length, 2)

const oneMeal = summarizeTodayFood([food('Only breakfast', 'breakfast', 250, 15)])
assert.equal(oneMeal.itemCount, 1)
assert.deepEqual(oneMeal.mealLogged, { breakfast: true, lunch: false, supper: false, dinner: false })

db.close()
await Dexie.delete('fitdex')
console.log('Home tests passed: greetings, empty state, active/completed combinations, multiple workouts, Food totals/meals, activity, and shared PR/7-day analytics')
