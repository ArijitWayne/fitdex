/// <reference types="node" />
import assert from 'node:assert/strict'
import type { ExerciseTrackingType, WorkoutExercise, WorkoutSet } from '../../data/models.ts'
import { getMissingWorkoutSetFields, getWorkoutSetLogState, isHistoricalWorkoutSetLogged, isWorkoutSetLogged, validateWorkoutForFinish } from './workoutModel.ts'

const timestamp = '2026-08-25T10:00:00.000Z'
const baseSet = (patch: Partial<WorkoutSet> = {}): WorkoutSet => ({
  id: `set:${Math.random()}`, workoutExerciseId: 'occurrence:test', order: 0, completed: false,
  createdAt: timestamp, updatedAt: timestamp, ...patch,
})

const cases: Array<{ type: ExerciseTrackingType; incomplete: Partial<WorkoutSet>; logged: Partial<WorkoutSet> }> = [
  { type: 'weight_reps', incomplete: { weight: 10 }, logged: { weight: 10, reps: 12 } },
  { type: 'bodyweight_reps', incomplete: { reps: 0 }, logged: { reps: 12 } },
  { type: 'assisted_bodyweight', incomplete: { weight: 20 }, logged: { weight: 0, reps: 8 } },
  { type: 'reps_only', incomplete: { reps: 0 }, logged: { reps: 15 } },
  { type: 'duration', incomplete: { durationSeconds: 0 }, logged: { durationSeconds: 30 } },
  { type: 'distance_duration', incomplete: { distance: 5 }, logged: { distance: 5, durationSeconds: 1500 } },
  { type: 'duration_optional_distance', incomplete: { distance: 2 }, logged: { durationSeconds: 600 } },
  { type: 'weight_distance', incomplete: { weight: 40 }, logged: { weight: 40, distance: 0.1 } },
  { type: 'duration_reps', incomplete: { durationSeconds: 60 }, logged: { durationSeconds: 60, reps: 20 } },
]

for (const entry of cases) {
  assert.equal(getWorkoutSetLogState(baseSet(), entry.type), 'empty', `${entry.type} blank set`)
  assert.equal(getWorkoutSetLogState(baseSet(entry.incomplete), entry.type), 'incomplete', `${entry.type} partial/invalid set`)
  assert.equal(getWorkoutSetLogState(baseSet(entry.logged), entry.type), 'logged', `${entry.type} valid set`)
  assert.equal(isWorkoutSetLogged(baseSet(entry.logged), entry.type), true)
}

assert.equal(getWorkoutSetLogState(baseSet({ durationSeconds: 30, distance: 0 }), 'duration_optional_distance'), 'incomplete', 'an entered optional distance must be valid')
assert.deepEqual(getMissingWorkoutSetFields(baseSet({ weight: 10 }), 'weight_reps'), ['reps'])
assert.equal(isHistoricalWorkoutSetLogged(baseSet({ weight: 10, reps: 12, completed: false }), 'weight_reps'), false, 'legacy false flags remain excluded')
assert.equal(isHistoricalWorkoutSetLogged(baseSet({ weight: 10, reps: 12, completed: true }), 'weight_reps'), true)

const occurrence = (id: string, type: ExerciseTrackingType): WorkoutExercise => ({
  id, workoutId: 'workout:test', exerciseId: `exercise:${id}`, exerciseNameSnapshot: id,
  trackingTypeSnapshot: type, order: 0, createdAt: timestamp, updatedAt: timestamp,
})
const exercise = occurrence('Band Chest Fly', 'weight_reps')
const validSet = baseSet({ workoutExerciseId: exercise.id, weight: 10, reps: 12 })
const emptySet = baseSet({ workoutExerciseId: exercise.id, order: 1 })
const incompleteSet = baseSet({ workoutExerciseId: exercise.id, order: 2, weight: 12.5 })

assert.equal(validateWorkoutForFinish([]).valid, false, 'zero exercises block Finish')
let validation = validateWorkoutForFinish([{ exercise, sets: [] }])
assert.equal(validation.valid, false)
assert.equal(validation.issues[0].kind, 'zero-sets')
validation = validateWorkoutForFinish([{ exercise, sets: [validSet, emptySet] }])
assert.equal(validation.valid, false)
assert.equal(validation.loggedSetCount, 1)
assert.equal(validation.issues[0].kind, 'empty-set')
validation = validateWorkoutForFinish([{ exercise, sets: [validSet, incompleteSet] }])
assert.equal(validation.valid, false)
assert.deepEqual(validation.issues[0].missingFields, ['reps'])
validation = validateWorkoutForFinish([{ exercise, sets: [validSet] }])
assert.deepEqual(validation, { valid: true, loggedSetCount: 1, totalSetCount: 1, issues: [] })

console.log('Workout set logging tests passed: all tracking types, empty/incomplete/logged states, legacy compatibility, and strict Finish structure validation')
