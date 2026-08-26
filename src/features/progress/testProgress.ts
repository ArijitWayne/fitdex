/// <reference types="node" />
import 'fake-indexeddb/auto'
import assert from 'node:assert/strict'
import Dexie from 'dexie'
import type { FoodLogEntry, Workout, WorkoutExercise, WorkoutSet } from '../../data/models.ts'
import { getUnitContext } from '../../utils/units.ts'
import { buildNutritionTrend, buildVolumeTrend, buildWorkoutFrequencyTrend, calculateNutritionSummary, calculateTrainingSeconds, calculateTrainingVolume, calculateVolumeComparison, formatTrainingTime, getProgressPeriodRange } from './progressModel.ts'

await Dexie.delete('fitdex')
const { DATABASE_SCHEMA_VERSION, db } = await import('../../data/database.ts')
const { loadProgressSource } = await import('./progressRepository.ts')
await db.open()

assert.equal(DATABASE_SCHEMA_VERSION, 6)
assert.deepEqual(getProgressPeriodRange('7d', '2027-01-02'), { startDateKey: '2026-12-27', endDateKey: '2027-01-02', previousStartDateKey: '2026-12-20', previousEndDateKey: '2026-12-26' })
assert.equal(getProgressPeriodRange('30d', '2026-03-01').startDateKey, '2026-01-31')
assert.equal(getProgressPeriodRange('90d', '2026-03-01').startDateKey, '2025-12-02')
assert.deepEqual(getProgressPeriodRange('all', '2026-03-01'), { endDateKey: '2026-03-01' })

const createdAt = new Date(2026, 7, 1, 9).toISOString()
const recordTimes = { createdAt, updatedAt: createdAt }
const completedIso = (dateKey: string, hour = 12) => {
  const [year, month, day] = dateKey.split('-').map(Number)
  return new Date(year, month - 1, day, hour).toISOString()
}
function workout(id: string, dateKey: string, durationSeconds: number, status: Workout['status'] = 'completed'): Workout {
  const completedAt = completedIso(dateKey)
  return { id, nameSnapshot: id, status, startedAt: new Date(Date.parse(completedAt) - durationSeconds * 1000).toISOString(), completedAt, durationSeconds, ...recordTimes }
}
function exercise(id: string, workoutId: string): WorkoutExercise {
  return { id, workoutId, exerciseId: 'bench', exerciseNameSnapshot: 'Historical Bench', trackingTypeSnapshot: 'weight_reps', order: 0, ...recordTimes }
}
function set(id: string, workoutExerciseId: string, weight: number, reps: number, completed = true): WorkoutSet {
  return { id, workoutExerciseId, order: 0, weight, reps, completed, ...recordTimes }
}
function food(id: string, date: string, kcal?: number, protein?: number): FoodLogEntry {
  return { id, date, meal: 'breakfast', foodName: id, categoryName: 'Other', categoryKind: 'predefined', categoryId: 'other', kcal, protein, ...recordTimes }
}

await db.workouts.bulkAdd([
  workout('current-one', '2026-08-25', 58 * 60),
  workout('current-two', '2026-08-24', 32 * 60),
  workout('previous', '2026-08-17', 20 * 60),
  workout('active', '2026-08-25', 999, 'active'),
  workout('discarded', '2026-08-25', 999, 'discarded'),
])
await db.workoutExercises.bulkAdd([exercise('exercise-one', 'current-one'), exercise('exercise-two', 'current-two'), exercise('exercise-previous', 'previous'), exercise('exercise-active', 'active')])
await db.workoutSets.bulkAdd([
  set('set-one', 'exercise-one', 60, 10),
  set('set-two', 'exercise-one', 100, 10, false),
  set('set-three', 'exercise-two', 70, 5),
  set('set-previous', 'exercise-previous', 50, 10),
  set('set-active', 'exercise-active', 500, 10),
])
await db.foodLogEntries.bulkAdd([
  food('food-day-one', '2026-08-25', 2000, 120),
  food('food-day-two', '2026-08-24', 2400, 140),
  food('food-missing', '2026-08-24'),
  food('food-old', '2026-07-01', 9999, 999),
])
await db.settings.add({ id: 'settings', units: 'imperial', ...recordTimes })

const source = await loadProgressSource('7d', '2026-08-25')
assert.equal(source.currentWorkouts.length, 2, 'multiple completed sessions count; active/discarded do not')
assert.equal(source.previousWorkouts.length, 1)
assert.equal(source.allWorkouts.length, 3)
assert.equal(calculateTrainingSeconds(source.currentWorkouts), 90 * 60)
assert.equal(formatTrainingTime(58 * 60), '58 min')
assert.equal(formatTrainingTime(134 * 60), '2h 14m')
assert.equal(calculateTrainingVolume(source.currentWorkouts), 950, 'completed weight_reps sets only')
assert.equal(calculateTrainingVolume(source.previousWorkouts), 500)
assert.equal(calculateTrainingVolume([{
  workout: workout('volume-example', '2026-08-25', 1),
  dateKey: '2026-08-25',
  exercises: [{ exercise: exercise('volume-exercise', 'volume-example'), sets: [
    set('volume-1', 'volume-exercise', 50, 10),
    set('volume-2', 'volume-exercise', 60, 8),
    set('volume-3', 'volume-exercise', 60, 8),
  ] }],
}]), 1460, 'resistance volume remains canonical weight × reps workload')
assert.equal(source.units.preference, 'imperial')
assert.deepEqual(source.units, getUnitContext('imperial'))

const nutrition = calculateNutritionSummary(source.foodEntries)
assert.deepEqual(nutrition, { loggedDays: 2, averageKcal: 2200, averageProtein: 130 })
assert.equal(buildNutritionTrend(source.foodEntries, '7d', '2026-08-25').length, 7)
assert.equal(buildWorkoutFrequencyTrend(source.currentWorkouts, '7d', '2026-08-25').reduce((sum, bucket) => sum + bucket.value, 0), 2)
assert.equal(buildVolumeTrend(source.currentWorkouts, '7d', '2026-08-25').reduce((sum, bucket) => sum + bucket.value, 0), 950)
assert.equal(buildWorkoutFrequencyTrend(source.currentWorkouts, '30d', '2026-08-25').length, 6)
assert.equal(buildWorkoutFrequencyTrend(source.currentWorkouts, '90d', '2026-08-25').length, 13)
assert.ok(buildWorkoutFrequencyTrend(source.allWorkouts, 'all', '2026-08-25').length >= 1)

assert.deepEqual(calculateVolumeComparison(110, 100, '7d'), { kind: 'percent', percent: 10 })
assert.deepEqual(calculateVolumeComparison(90, 100, '30d'), { kind: 'percent', percent: -10 })
assert.deepEqual(calculateVolumeComparison(100, 100, '90d'), { kind: 'percent', percent: 0 })
assert.deepEqual(calculateVolumeComparison(100, 0, '7d'), { kind: 'no-previous' })
assert.deepEqual(calculateVolumeComparison(100, 50, 'all'), { kind: 'omitted' })
assert.deepEqual(calculateNutritionSummary([]), { loggedDays: 0, averageKcal: 0, averageProtein: 0 })
assert.equal(Number.isFinite(calculateVolumeComparison(0, 0, '7d').kind === 'percent' ? calculateVolumeComparison(0, 0, '7d').percent : 0), true)

const allSource = await loadProgressSource('all', '2026-08-25')
assert.equal(allSource.foodEntries.length, 4)
assert.equal(allSource.hasAnyHistory, true)

db.close()
await Dexie.delete('fitdex')
console.log('Progress tests passed: local periods, completed-only counts, time, volume, trends, comparisons, nutrition averages, units, and empty safety')
