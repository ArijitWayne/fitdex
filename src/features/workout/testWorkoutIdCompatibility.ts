/// <reference types="node" />
import 'fake-indexeddb/auto'
import assert from 'node:assert/strict'
import Dexie from 'dexie'
import { builtInExercises } from '../exerciseDex/exerciseData.ts'

const uuidV4Suffix = /:[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

async function withGetRandomValuesOnly<T>(action: () => Promise<T>) {
  const descriptor = Object.getOwnPropertyDescriptor(globalThis, 'crypto')
  let seed = 1
  const cryptoValue = {
    getRandomValues(values: Uint8Array) {
      for (let index = 0; index < values.length; index += 1) values[index] = (seed + index) & 0xff
      seed += 23
      return values
    },
  } as unknown as Crypto
  Object.defineProperty(globalThis, 'crypto', { value: cryptoValue, configurable: true })
  try { return await action() }
  finally {
    if (descriptor) Object.defineProperty(globalThis, 'crypto', descriptor)
    else Reflect.deleteProperty(globalThis, 'crypto')
  }
}

await Dexie.delete('fitdex')
const { db } = await import('../../data/database.ts')
const routines = await import('./routineRepository.ts')
const workouts = await import('./workoutRepository.ts')
await db.open()

const exercise = builtInExercises.find((item) => item.trackingType === 'weight_reps')
assert.ok(exercise)
await db.exercises.put(exercise)

await withGetRandomValuesOnly(async () => {
  // E: routine and routine-item IDs work without randomUUID().
  const routine = await routines.createRoutine('Fallback Routine')
  assert.match(routine.id, uuidV4Suffix)
  await routines.addExercisesToRoutine(routine.id, [exercise])
  const item = (await db.routineExercises.where('routineId').equals(routine.id).first())
  assert.match(item?.id ?? '', uuidV4Suffix)

  // F: workout, workout-exercise, and workout-set IDs use the same fallback.
  const session = await workouts.startWorkoutFromRoutine(routine.id)
  assert.match(session.workout.id, uuidV4Suffix)
  assert.match(session.exercises[0].exercise.id, uuidV4Suffix)
  assert.match(session.exercises[0].sets[0].id, uuidV4Suffix)
  await workouts.discardWorkout(session.workout.id)
})

db.close()
await Dexie.delete('fitdex')
console.log('Workout ID compatibility tests passed: routine and session creation succeed with getRandomValues-only Web Crypto')
