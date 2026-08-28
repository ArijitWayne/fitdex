/// <reference types="node" />
import 'fake-indexeddb/auto'
import assert from 'node:assert/strict'
import Dexie from 'dexie'
import type { Exercise, RoutineExercise, WorkoutRoutine } from '../../data/models.ts'
import { builtInExercises, BUILT_IN_EXERCISE_DATASET_VERSION } from '../exerciseDex/exerciseData.ts'
import { getTrackingFields, parseWorkoutNumber } from './workoutModel.ts'

await Dexie.delete('fitdex')
const { DATABASE_SCHEMA_VERSION, db } = await import('../../data/database.ts')
const repository = await import('./workoutRepository.ts')
await db.open()

assert.equal(DATABASE_SCHEMA_VERSION, 7)
assert.equal(BUILT_IN_EXERCISE_DATASET_VERSION, 4)
assert.equal(builtInExercises.length, 804)
assert.deepEqual(getTrackingFields('weight_reps'), { weight: true, reps: true, duration: false, distance: false })
assert.deepEqual(getTrackingFields('bodyweight_reps'), { weight: false, reps: true, duration: false, distance: false })
assert.deepEqual(getTrackingFields('assisted_bodyweight'), { weight: true, reps: true, duration: false, distance: false })
assert.deepEqual(getTrackingFields('reps_only'), { weight: false, reps: true, duration: false, distance: false })
assert.deepEqual(getTrackingFields('duration'), { weight: false, reps: false, duration: true, distance: false })
assert.deepEqual(getTrackingFields('distance_duration'), { weight: false, reps: false, duration: true, distance: true })
assert.deepEqual(getTrackingFields('duration_optional_distance'), { weight: false, reps: false, duration: true, distance: true })
assert.deepEqual(getTrackingFields('weight_distance'), { weight: true, reps: false, duration: false, distance: true })
assert.deepEqual(getTrackingFields('duration_reps'), { weight: false, reps: true, duration: true, distance: false })

const timestamp = '2026-08-23T10:00:00.000Z'
const strength = builtInExercises.find((exercise) => exercise.trackingType === 'weight_reps')
assert.ok(strength)
const custom: Exercise = {
  ...strength,
  id: 'custom-exercise:session-test',
  name: 'My Timed Carry',
  source: 'custom',
  aliases: [],
  trackingType: 'distance_duration',
  createdAt: timestamp,
  updatedAt: timestamp,
}
await db.exercises.bulkPut([strength, custom])

const routine: WorkoutRoutine = { id: 'routine:session-test', name: 'Snapshot Day', createdAt: timestamp, updatedAt: timestamp }
const routineItem: RoutineExercise = {
  id: 'routine-exercise:session-test', routineId: routine.id, exerciseId: strength.id,
  exerciseNameSnapshot: strength.name, order: 0, plannedSets: 2, createdAt: timestamp, updatedAt: timestamp,
}
await db.workoutRoutines.add(routine)
await db.routineExercises.add(routineItem)

// Start from routine: snapshot the template and create planned set rows.
const first = await repository.startWorkoutFromRoutine(routine.id)
assert.equal(first.workout.status, 'active')
assert.equal(first.workout.routineNameSnapshot, 'Snapshot Day')
assert.equal(first.exercises.length, 1)
assert.equal(first.exercises[0].exercise.exerciseId, strength.id)
assert.equal(first.exercises[0].exercise.exerciseNameSnapshot, strength.name)
assert.equal(first.exercises[0].exercise.trackingTypeSnapshot, strength.trackingType)
assert.equal(first.exercises[0].exercise.routineExerciseIdSnapshot, routineItem.id)
assert.equal(first.exercises[0].sets.length, 2)
assert.equal(await repository.getPreviousPerformance(strength.id, first.workout.id), undefined)

// Routine mutation after start cannot rewrite the active snapshot.
await db.workoutRoutines.update(routine.id, { name: 'Changed Template' })
await db.routineExercises.update(routineItem.id, { plannedSets: 8 })
const unchangedActive = await repository.getWorkoutDetail(first.workout.id)
assert.equal(unchangedActive.workout.nameSnapshot, 'Snapshot Day')
assert.equal(unchangedActive.exercises[0].sets.length, 2)

// A second active workout is rejected; active data survives repository reload.
await assert.rejects(() => repository.startEmptyWorkout(), repository.ActiveWorkoutExistsError)
assert.equal((await repository.getActiveWorkout())?.workout.id, first.workout.id)

// Numeric logging: decimals and blanks are valid; negatives/invalid reps fail.
assert.equal(parseWorkoutNumber('50.5', 'weight'), 50.5)
assert.equal(parseWorkoutNumber('', 'weight'), undefined)
assert.throws(() => parseWorkoutNumber('-1', 'distance'), /negative/)
assert.throws(() => parseWorkoutNumber('2.5', 'reps'), /whole number/)
const firstSet = first.exercises[0].sets[0]
await repository.updateWorkoutSet(firstSet.id, { weight: 50.5, reps: 10 })
let counterDetail = await repository.getWorkoutDetail(first.workout.id)
assert.equal(counterDetail.exercises[0].sets.filter((set) => set.completed).length, 1)
assert.equal(counterDetail.exercises.flatMap((item) => item.sets).filter((set) => set.completed).length, 1)
await repository.updateWorkoutSet(firstSet.id, { reps: undefined })
assert.equal((await db.workoutSets.get(firstSet.id))?.completed, false, 'clearing a required value automatically unlogs the set')
await repository.updateWorkoutSet(firstSet.id, { reps: 10 })
assert.equal((await db.workoutSets.get(firstSet.id))?.completed, true, 'restoring all required values automatically logs the set')
await assert.rejects(() => repository.updateWorkoutSet(firstSet.id, { weight: -1 }), /negative/)
await assert.rejects(() => repository.updateWorkoutSet(firstSet.id, { reps: 1.5 }), /whole number/)
await repository.updateWorkoutSet(first.exercises[0].sets[1].id, { weight: undefined, reps: undefined })
await assert.rejects(() => repository.finishWorkout(first.workout.id), repository.IncompleteWorkoutError, 'a remaining empty set blocks Finish')
assert.equal((await repository.getWorkoutDetail(first.workout.id)).workout.status, 'active')
await repository.updateWorkoutSet(first.exercises[0].sets[1].id, { weight: 45 })
await assert.rejects(() => repository.finishWorkout(first.workout.id), repository.IncompleteWorkoutError, 'a partially entered set blocks Finish')
await repository.updateWorkoutSet(first.exercises[0].sets[1].id, { reps: 8 })

// Add/remove sets, add/reorder/remove exercises, duplicate guard, and custom modes.
await repository.addWorkoutSet(first.exercises[0].exercise.id)
let active = await repository.getWorkoutDetail(first.workout.id)
assert.equal(active.exercises[0].sets.length, 3)
assert.equal(active.exercises.flatMap((item) => item.sets).length, 3)
await assert.rejects(() => repository.finishWorkout(first.workout.id), repository.IncompleteWorkoutError, 'a newly added empty set makes a clean workout ineligible')
await repository.removeWorkoutSet(active.exercises[0].sets[2].id)
assert.equal((await repository.getWorkoutDetail(first.workout.id)).exercises.flatMap((item) => item.sets).length, 2)
await repository.addExercisesToWorkout(first.workout.id, [custom])
await assert.rejects(() => repository.addExercisesToWorkout(first.workout.id, [custom]), /already in this workout/)
active = await repository.getWorkoutDetail(first.workout.id)
assert.equal(active.exercises.length, 2)
assert.equal(active.exercises.flatMap((item) => item.sets).length, 5)
await assert.rejects(() => repository.finishWorkout(first.workout.id), repository.IncompleteWorkoutError, 'an added exercise with empty sets blocks Finish')
const customRow = active.exercises.find((item) => item.exercise.exerciseId === custom.id)
assert.ok(customRow)
assert.equal(customRow.sets.length, 3)
await repository.updateWorkoutSet(customRow.sets[0].id, { durationSeconds: 90.5, distance: 1.25 })
await repository.reorderWorkoutExercise(customRow.exercise.id, -1)
assert.equal((await repository.getWorkoutDetail(first.workout.id)).exercises[0].exercise.exerciseId, custom.id)
await repository.removeWorkoutExercise(customRow.exercise.id)
assert.equal((await repository.getWorkoutDetail(first.workout.id)).exercises.length, 1)
assert.ok(await db.exercises.get(custom.id))

// Completion requires a clean remaining structure and mirrors validity into the legacy flag.
const completed = await repository.finishWorkout(first.workout.id)
assert.equal(completed.workout.status, 'completed')
assert.ok(completed.workout.completedAt)
const gamificationInitializedAt = (await db.settings.get('settings'))?.gamificationInitializedAt
assert.ok(gamificationInitializedAt)
assert.ok(gamificationInitializedAt <= completed.workout.completedAt)
assert.equal(await db.xpEvents.where('sourceKey').equals(`workout:${completed.workout.id}`).count(), 1)
assert.equal((await db.xpEvents.get(`workout:${completed.workout.id}`))?.amount, 20)
assert.ok(completed.workout.durationSeconds !== undefined)
assert.equal(completed.exercises[0].sets.filter((set) => set.completed).length, 2)
assert.equal(completed.exercises[0].sets.length, 2)

// Routine edits/deletion and live exercise renames cannot alter history.
await db.exercises.update(strength.id, { name: 'Renamed Live Exercise' })
await db.routineExercises.where('routineId').equals(routine.id).delete()
await db.workoutRoutines.delete(routine.id)
const history = await repository.getWorkoutDetail(first.workout.id)
assert.equal(history.workout.nameSnapshot, 'Snapshot Day')
assert.equal(history.exercises[0].exercise.exerciseNameSnapshot, strength.name)
assert.equal(history.exercises[0].sets[0].weight, 50.5)
const recentSummary = (await repository.listRecentWorkouts())[0]
assert.equal(recentSummary.workout.id, first.workout.id)
assert.equal(recentSummary.completedSetCount, 2)

// Previous performance matches by exercise ID and ignores active/discarded sessions.
const second = await repository.startEmptyWorkout('Second Session')
await repository.addExercisesToWorkout(second.workout.id, [strength])
const previousWhileActive = await repository.getPreviousPerformance(strength.id, second.workout.id)
assert.equal(previousWhileActive?.workout.id, first.workout.id)
assert.equal(previousWhileActive?.sets[0].reps, 10)
assert.equal(previousWhileActive?.sets[2], undefined)
await repository.discardWorkout(second.workout.id)
assert.equal((await repository.listRecentWorkouts()).length, 1)
assert.equal((await repository.getPreviousPerformance(strength.id))?.workout.id, first.workout.id)
assert.equal(await repository.getActiveWorkout(), undefined)

// Empty workouts cannot be completed and discard does not affect definitions.
const empty = await repository.startEmptyWorkout()
await assert.rejects(() => repository.finishWorkout(empty.workout.id), repository.IncompleteWorkoutError)
await repository.discardWorkout(empty.workout.id)
assert.ok(await db.exercises.get(strength.id))
assert.equal((await db.workouts.get(empty.workout.id))?.status, 'discarded')

db.close()
await Dexie.delete('fitdex')
console.log('Workout session tests passed: starts, snapshots, autosave, validation, active guard, custom logging, previous performance, completion, discard, and immutable history')
