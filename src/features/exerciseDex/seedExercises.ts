import { db } from '../../data/database.ts'
import type { Exercise } from '../../data/models.ts'
import { LEGACY_EXERCISE_ID_MAP } from './legacyExerciseMigration.generated.ts'
import {
  CANONICAL_EXERCISE_ID_MIGRATIONS,
  migrateExercisePreferences,
  migrateWorkoutExerciseReferences,
} from './exerciseMigration.ts'
import {
  BUILT_IN_EXERCISE_DATASET_METADATA_ID,
  BUILT_IN_EXERCISE_DATASET_SIGNATURE,
  builtInExercises,
  RETIRED_FITDEX_EXERCISE_SLUGS,
} from './exerciseData.ts'

let seedPromise: Promise<void> | undefined

const activeReferenceMigrationMap: Readonly<Record<string, string | null>> = {
  ...LEGACY_EXERCISE_ID_MAP,
  ...Object.fromEntries(RETIRED_FITDEX_EXERCISE_SLUGS.map((slug) => [`builtin-exercise:${slug}`, null])),
  ...CANONICAL_EXERCISE_ID_MIGRATIONS,
}

async function seed() {
  await db.transaction('rw', db.exercises, db.exercisePreferences, db.workoutExercises, db.systemMetadata, async () => {
    const metadata = await db.systemMetadata.get(BUILT_IN_EXERCISE_DATASET_METADATA_ID)
    const existingCanonical = await db.exercises.bulkGet(builtInExercises.map((exercise) => exercise.id))
    const canonicalSetIsComplete = existingCanonical.every(Boolean)

    if (metadata?.value === BUILT_IN_EXERCISE_DATASET_SIGNATURE && canonicalSetIsComplete) return

    const existingBuiltIns = await db.exercises.where('source').equals('built-in').toArray()
    const legacyExerciseById = new Map(existingBuiltIns.map((exercise) => [exercise.id, exercise]))
    const canonicalIds = new Set(builtInExercises.map((exercise) => exercise.id))
    const createdAtById = new Map(existingBuiltIns.map((exercise) => [exercise.id, exercise.createdAt]))
    const canonicalRecords: Exercise[] = builtInExercises.map((exercise) => ({
      ...exercise,
      createdAt: createdAtById.get(exercise.id) ?? exercise.createdAt,
    }))

    const timestamp = new Date().toISOString()

    const workoutExercises = await db.workoutExercises.toArray()
    const migratedWorkoutExercises = migrateWorkoutExerciseReferences(
      workoutExercises,
      legacyExerciseById,
      activeReferenceMigrationMap,
      timestamp,
    )
    if (migratedWorkoutExercises.length) await db.workoutExercises.bulkPut(migratedWorkoutExercises)

    const preferences = await db.exercisePreferences.toArray()
    const migratedPreferences = migrateExercisePreferences(preferences, activeReferenceMigrationMap, timestamp)
    const migratedPreferenceIds = new Set(migratedPreferences.map((preference) => preference.id))
    const obsoletePreferenceIds = preferences.filter((preference) => !migratedPreferenceIds.has(preference.id)).map((preference) => preference.id)
    if (obsoletePreferenceIds.length) await db.exercisePreferences.bulkDelete(obsoletePreferenceIds)
    if (migratedPreferences.length) await db.exercisePreferences.bulkPut(migratedPreferences)

    await db.exercises.bulkPut(canonicalRecords)

    const retiredRecords = existingBuiltIns
      .filter((exercise) => !canonicalIds.has(exercise.id) && !exercise.archived)
      .map((exercise) => ({ ...exercise, archived: true, updatedAt: timestamp }))
    if (retiredRecords.length) await db.exercises.bulkPut(retiredRecords)

    await db.systemMetadata.put({
      id: BUILT_IN_EXERCISE_DATASET_METADATA_ID,
      value: BUILT_IN_EXERCISE_DATASET_SIGNATURE,
      updatedAt: timestamp,
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
