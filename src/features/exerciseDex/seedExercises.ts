import { db } from '../../data/database'
import type { Exercise } from '../../data/models'
import {
  BUILT_IN_EXERCISE_DATASET_METADATA_ID,
  BUILT_IN_EXERCISE_DATASET_VERSION,
  builtInExercises,
} from './exerciseData'

let seedPromise: Promise<void> | undefined

async function seed() {
  await db.transaction('rw', db.exercises, db.systemMetadata, async () => {
    const metadata = await db.systemMetadata.get(BUILT_IN_EXERCISE_DATASET_METADATA_ID)
    const existingCanonical = await db.exercises.bulkGet(builtInExercises.map((exercise) => exercise.id))
    const canonicalSetIsComplete = existingCanonical.every(Boolean)

    if (metadata?.value === String(BUILT_IN_EXERCISE_DATASET_VERSION) && canonicalSetIsComplete) return

    const existingBuiltIns = await db.exercises.where('source').equals('built-in').toArray()
    const canonicalIds = new Set(builtInExercises.map((exercise) => exercise.id))
    const createdAtById = new Map(existingBuiltIns.map((exercise) => [exercise.id, exercise.createdAt]))
    const canonicalRecords: Exercise[] = builtInExercises.map((exercise) => ({
      ...exercise,
      createdAt: createdAtById.get(exercise.id) ?? exercise.createdAt,
    }))

    await db.exercises.bulkPut(canonicalRecords)

    const retiredRecords = existingBuiltIns
      .filter((exercise) => !canonicalIds.has(exercise.id) && !exercise.archived)
      .map((exercise) => ({ ...exercise, archived: true, updatedAt: new Date().toISOString() }))
    if (retiredRecords.length) await db.exercises.bulkPut(retiredRecords)

    await db.systemMetadata.put({
      id: BUILT_IN_EXERCISE_DATASET_METADATA_ID,
      value: String(BUILT_IN_EXERCISE_DATASET_VERSION),
      updatedAt: new Date().toISOString(),
    })
  })
}

export function ensureBuiltInExercises() {
  seedPromise ??= seed().catch((error: unknown) => {
    seedPromise = undefined
    throw error
  })
  return seedPromise
}
