/// <reference types="node" />
import 'fake-indexeddb/auto'
import assert from 'node:assert/strict'
import Dexie from 'dexie'
import { builtInExercises } from '../exerciseDex/exerciseData.ts'
import { getWorkoutSetLogState, hasMeaningfulWorkoutSetData, validateWorkoutForFinish } from './workoutModel.ts'

await Dexie.delete('fitdex')
const { db } = await import('../../data/database.ts')
const routine = await import('./routineRepository.ts')
const workout = await import('./workoutRepository.ts')
await db.open()
const exerciseA = builtInExercises.find((exercise) => exercise.trackingType === 'weight_reps')!
const exerciseB = builtInExercises.find((exercise) => exercise.trackingType === 'weight_reps' && exercise.id !== exerciseA.id)!
await db.exercises.bulkPut([exerciseA, exerciseB])

const template = await routine.createRoutine('Toggle routine')
await routine.addExercisesToRoutine(template.id, [exerciseA, exerciseB])
let templateItems = (await routine.loadRoutines())[0].items
await routine.deleteRoutineItem(template.id, templateItems[0].id)
templateItems = (await routine.loadRoutines())[0].items
assert.deepEqual(templateItems.map((item) => item.exerciseId), [exerciseB.id], 'routine removal persists and preserves remaining order')

const active = await workout.startEmptyWorkout('Toggle workout')
await workout.addExercisesToWorkout(active.workout.id, [exerciseA])
let detail = await workout.getWorkoutDetail(active.workout.id)
let item = detail.exercises[0]
assert.equal(hasMeaningfulWorkoutSetData(item.sets, 'weight_reps'), false)
await workout.removeWorkoutExercise(item.exercise.id)
detail = await workout.getWorkoutDetail(active.workout.id)
assert.equal(detail.exercises.length, 0)
assert.equal((await db.workoutSets.toArray()).length, 0)

await workout.addExercisesToWorkout(active.workout.id, [exerciseA, exerciseB])
detail = await workout.getWorkoutDetail(active.workout.id)
const logged = detail.exercises[0]
await workout.updateWorkoutSet(logged.sets[0].id, { weight: 50, reps: 10 })
const incomplete = detail.exercises[1]
await workout.updateWorkoutSet(incomplete.sets[0].id, { weight: 25 })
detail = await workout.getWorkoutDetail(active.workout.id)
assert.equal(getWorkoutSetLogState(detail.exercises[0].sets[0], 'weight_reps'), 'logged')
assert.equal(getWorkoutSetLogState(detail.exercises[1].sets[0], 'weight_reps'), 'incomplete')
assert.equal(hasMeaningfulWorkoutSetData(detail.exercises[0].sets, 'weight_reps'), true)
assert.equal(hasMeaningfulWorkoutSetData(detail.exercises[1].sets, 'weight_reps'), true)
assert.equal(detail.exercises.length, 2, 'cancel behavior leaves repository untouched')
await workout.removeWorkoutExercise(detail.exercises[1].exercise.id)
detail = await workout.getWorkoutDetail(active.workout.id)
assert.equal(detail.exercises.length, 1)
assert.equal(validateWorkoutForFinish(detail.exercises).valid, false, 'remaining untouched rows still determine finish eligibility')
for (const set of detail.exercises[0].sets.slice(1)) await workout.updateWorkoutSet(set.id, { weight: 40, reps: 8 })
assert.equal(validateWorkoutForFinish((await workout.getWorkoutDetail(active.workout.id)).exercises).valid, true)

db.close()
await Dexie.delete('fitdex')
console.log('Contextual picker toggle tests passed: routine persistence, empty cleanup, logged/incomplete classification, counters, and finish recalculation')
