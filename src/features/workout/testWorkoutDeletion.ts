/// <reference types="node" />
import 'fake-indexeddb/auto'
import assert from 'node:assert/strict'
import Dexie from 'dexie'
import type { FoodLogEntry, RoutineExercise, Workout, WorkoutExercise, WorkoutRoutine, WorkoutSet } from '../../data/models.ts'
import { getLocalDateKey } from '../../utils/localDate.ts'
import { builtInExercises } from '../exerciseDex/exerciseData.ts'

await Dexie.delete('fitdex')
const { DATABASE_SCHEMA_VERSION, db } = await import('../../data/database.ts')
const { derivePersonalRecords } = await import('../progress/personalRecords.ts')
const { calculateTrainingVolume } = await import('../progress/progressModel.ts')
const { loadProgressSource } = await import('../progress/progressRepository.ts')
const { loadHomeDashboard } = await import('../home/homeRepository.ts')
const { getJournalDay } = await import('../journal/journalRepository.ts')
const repository = await import('./workoutRepository.ts')
await db.open()

assert.equal(DATABASE_SCHEMA_VERSION, 7)
const definition = builtInExercises.find((exercise) => exercise.trackingType === 'weight_reps')!
assert.ok(definition)
await db.exercises.add(definition)

const today = new Date()
const dateKey = getLocalDateKey(today)
const at = (hour: number) => new Date(today.getFullYear(), today.getMonth(), today.getDate(), hour).toISOString()
const recordTimes = { createdAt: at(6), updatedAt: at(6) }
const routine: WorkoutRoutine = { id: 'routine:delete-safety', name: 'Routine A', ...recordTimes }
await db.workoutRoutines.add(routine)
const routineItem: RoutineExercise = { id: 'routine-exercise:delete-safety', routineId: routine.id, exerciseId: definition.id, exerciseNameSnapshot: definition.name, order: 0, plannedSets: 3, ...recordTimes }
await db.routineExercises.add(routineItem)

function workout(id: string, status: Workout['status'], hour: number, durationSeconds: number, routineId?: string): Workout {
  const completedAt = at(hour)
  return { id, nameSnapshot: id, status, routineId, startedAt: new Date(Date.parse(completedAt) - durationSeconds * 1000).toISOString(), completedAt: status === 'completed' ? completedAt : undefined, durationSeconds: status === 'completed' ? durationSeconds : undefined, ...recordTimes }
}

function occurrence(id: string, workoutId: string, exerciseId = definition.id): WorkoutExercise {
  return { id, workoutId, exerciseId, exerciseNameSnapshot: exerciseId === definition.id ? definition.name : 'Retired Historical Exercise', trackingTypeSnapshot: 'weight_reps', order: Number(id.slice(-1)) || 0, ...recordTimes }
}

function set(id: string, workoutExerciseId: string, order: number, weight: number): WorkoutSet {
  return { id, workoutExerciseId, order, weight, reps: 1, completed: true, ...recordTimes }
}

const workoutA = workout('workout:a', 'completed', 12, 3600, routine.id)
const workoutB = workout('workout:b', 'completed', 9, 1800)
const activeC = workout('workout:c', 'active', 14, 0)
await db.workouts.bulkAdd([workoutA, workoutB, activeC])

const exercisesA = [
  occurrence('occurrence:a1', workoutA.id),
  occurrence('occurrence:a2', workoutA.id, 'retired:unknown-a'),
  occurrence('occurrence:a3', workoutA.id, 'retired:unknown-b'),
]
const exerciseB = occurrence('occurrence:b1', workoutB.id)
const exerciseC = occurrence('occurrence:c1', activeC.id)
await db.workoutExercises.bulkAdd([...exercisesA, exerciseB, exerciseC])
const setsA = exercisesA.flatMap((exercise, exerciseIndex) => Array.from({ length: 3 }, (_, order) => set(`set:a${exerciseIndex}:${order}`, exercise.id, order, exerciseIndex === 0 ? 85 - order : 10)))
const setsB = [set('set:b:0', exerciseB.id, 0, 80)]
const setsC = [{ ...set('set:c:0', exerciseC.id, 0, 90), completed: false }]
await db.workoutSets.bulkAdd([...setsA, ...setsB, ...setsC])

const food: FoodLogEntry = { id: 'food:keep', date: dateKey, meal: 'breakfast', foodName: 'Oats', categoryId: 'grains-rice', categoryName: 'Grains & Rice', categoryKind: 'predefined', kcal: 300, protein: 12, ...recordTimes }
await db.foodLogEntries.add(food)

const before = await loadProgressSource('all', dateKey)
assert.equal(before.currentWorkouts.length, 2)
assert.equal(derivePersonalRecords(before.allWorkouts, before.definitions).find((entry) => entry.exerciseId === definition.id)?.metrics.find((metric) => metric.key === 'heaviest-weight')?.value, 85)
assert.equal((await repository.getPreviousPerformance(definition.id))?.workout.id, workoutA.id)

await assert.rejects(() => repository.deleteCompletedWorkout(activeC.id), repository.CompletedWorkoutRequiredError)
await repository.deleteCompletedWorkout(workoutA.id)

assert.equal(await db.workouts.get(workoutA.id), undefined)
assert.equal(await db.workoutExercises.where('workoutId').equals(workoutA.id).count(), 0)
assert.equal(await db.workoutSets.where('workoutExerciseId').anyOf(exercisesA.map((exercise) => exercise.id)).count(), 0)
assert.ok(await db.workoutRoutines.get(routine.id), 'source routine remains unchanged')
assert.deepEqual(await db.routineExercises.get(routineItem.id), routineItem, 'source routine item remains unchanged')
assert.ok(await db.exercises.get(definition.id), 'Exercise Dex definition remains')
assert.ok(await db.workouts.get(workoutB.id), 'other completed workout remains')
assert.equal(await db.workoutExercises.where('workoutId').equals(workoutB.id).count(), 1)
assert.equal(await db.workoutSets.where('workoutExerciseId').equals(exerciseB.id).count(), 1)
assert.ok(await db.workouts.get(activeC.id), 'active workout remains')
assert.equal(await db.workoutSets.where('workoutExerciseId').equals(exerciseC.id).count(), 1)
assert.ok(await db.foodLogEntries.get(food.id), 'Food history remains')

const progress = await loadProgressSource('all', dateKey)
assert.equal(progress.currentWorkouts.length, 1)
assert.equal(calculateTrainingVolume(progress.currentWorkouts), 80)
const records = derivePersonalRecords(progress.allWorkouts, progress.definitions)
assert.equal(records.find((entry) => entry.exerciseId === definition.id)?.metrics.find((metric) => metric.key === 'heaviest-weight')?.value, 80)
assert.equal(records.length, 1, 'PR exercise count is recalculated from remaining history')
assert.equal((await repository.getPreviousPerformance(definition.id))?.workout.id, workoutB.id)

const journal = await getJournalDay(dateKey)
assert.deepEqual(journal.workouts.map((entry) => entry.workout.id), [workoutB.id])
assert.deepEqual(journal.foodEntries.map((entry) => entry.id), [food.id])
const home = await loadHomeDashboard(dateKey)
assert.deepEqual(home.completedToday.map((entry) => entry.workout.id), [workoutB.id])
assert.equal(home.todayTrainingSeconds, 1800)
assert.equal(home.last7WorkoutCount, 1)
assert.equal(home.last7VolumeKg, 80)

db.close()
await Dexie.delete('fitdex')
console.log('Workout deletion tests passed: exact transactional ownership, completed-only protection, routine/Exercise/Food/other/active safety, and derived history recalculation')
