/// <reference types="node" />
import assert from 'node:assert/strict'
import type { Exercise, ExercisePreference, WorkoutExercise } from '../../data/models.ts'
import { builtInExercises, RETIRED_SMART_WORKOUT_SLUGS } from './exerciseData.ts'
import { LEGACY_EXERCISE_ID_MAP, LEGACY_EXERCISE_MIGRATIONS } from './legacyExerciseMigration.generated.ts'
import { migrateExercisePreferences, migrateWorkoutExerciseReferences } from './exerciseMigration.ts'

const timestamp = '2026-08-23T12:00:00.000Z'
const baseRecord = { createdAt: timestamp, updatedAt: timestamp }
const legacyExercise = {
  ...baseRecord,
  id: 'builtin-exercise:sprint-intervals',
  name: 'Sprint Intervals',
  aliases: [],
  category: 'Cardio',
  primaryMuscles: ['Cardiovascular System'],
  secondaryMuscles: [],
  muscleRegions: ['Running'],
  equipment: 'Other',
  trackingType: 'distance_duration',
  source: 'built-in',
  archived: false,
} satisfies Exercise
const legacyById = new Map([[legacyExercise.id, legacyExercise]])

const v4RetirementMap = Object.fromEntries(RETIRED_SMART_WORKOUT_SLUGS.map((slug) => [`builtin-exercise:${slug}`, null]))
const v4MigrationMap = { ...LEGACY_EXERCISE_ID_MAP, ...v4RetirementMap }

// A: a fresh v4 install seeds only demonstrated SmartWorkout-derived built-ins.
assert.equal(builtInExercises.length, 804)
assert.ok(builtInExercises.every((exercise) => exercise.source === 'built-in' && !exercise.archived))
assert.ok(builtInExercises.every((exercise) => exercise.mediaStatus === 'available'))

// B: the former 813-page source inventory is reduced only by the nine v4 retirements.
assert.equal(builtInExercises.length + RETIRED_SMART_WORKOUT_SLUGS.length, 813)
assert.ok(builtInExercises.every((exercise) => exercise.categories?.length && exercise.primaryCategory === exercise.categories[0]))

// C: a history reference with a successor is remapped and keeps its old snapshot.
const mappedLegacyId = 'builtin-exercise:lat-pulldown'
const mappedWorkout: WorkoutExercise = { ...baseRecord, id: 'we:mapped', workoutId: 'workout:1', exerciseId: mappedLegacyId, order: 0 }
const mappedLegacyExercise = { ...legacyExercise, id: mappedLegacyId, name: 'Lat Pulldown', category: 'Back' } satisfies Exercise
const mappedResult = migrateWorkoutExerciseReferences([mappedWorkout], new Map([[mappedLegacyId, mappedLegacyExercise]]), LEGACY_EXERCISE_ID_MAP, timestamp)[0]
assert.equal(mappedResult.exerciseId, 'builtin-exercise:cable-lat-pulldown')
assert.equal(mappedResult.exerciseNameSnapshot, 'Lat Pulldown')

// D: a removed v3 exercise keeps its historical ID and gains a display snapshot.
const removedV3Exercise = { ...legacyExercise, id: 'builtin-exercise:spoto-press', name: 'Spoto Press', category: 'Chest' } satisfies Exercise
const removedWorkout: WorkoutExercise = { ...baseRecord, id: 'we:removed', workoutId: 'workout:1', exerciseId: removedV3Exercise.id, order: 1 }
const removedResult = migrateWorkoutExerciseReferences([removedWorkout], new Map([[removedV3Exercise.id, removedV3Exercise]]), v4MigrationMap, timestamp)[0]
assert.equal(removedResult.exerciseId, removedV3Exercise.id)
assert.equal(removedResult.exerciseNameSnapshot, removedV3Exercise.name)

// E: custom exercise references are untouched.
const customWorkout = { ...removedWorkout, id: 'we:custom', exerciseId: 'custom-exercise:mine' }
assert.deepEqual(migrateWorkoutExerciseReferences([customWorkout], legacyById, LEGACY_EXERCISE_ID_MAP, timestamp)[0], customWorkout)

// F: favourites/notes/tags move to the successor deterministically.
const mappedPreference: ExercisePreference = { ...baseRecord, id: `exercise-preference:${mappedLegacyId}`, exerciseId: mappedLegacyId, favourite: true, personalNotes: 'Keep elbows steady.', customTagIds: ['tag:pull'] }
const migratedPreference = migrateExercisePreferences([mappedPreference], LEGACY_EXERCISE_ID_MAP, timestamp)[0]
assert.equal(migratedPreference.exerciseId, 'builtin-exercise:cable-lat-pulldown')
assert.equal(migratedPreference.favourite, true)
assert.equal(migratedPreference.personalNotes, mappedPreference.personalNotes)

// G: a removed active favourite is deactivated without deleting its notes or tags.
const removedPreference: ExercisePreference = { ...baseRecord, id: `exercise-preference:${legacyExercise.id}`, exerciseId: legacyExercise.id, favourite: true, personalNotes: 'Historic pacing note.', customTagIds: ['tag:cardio'] }
const retiredPreference = migrateExercisePreferences([{ ...removedPreference, exerciseId: removedV3Exercise.id, id: `exercise-preference:${removedV3Exercise.id}` }], v4MigrationMap, timestamp)[0]
assert.equal(retiredPreference.favourite, false)
assert.equal(retiredPreference.personalNotes, removedPreference.personalNotes)
assert.deepEqual(retiredPreference.customTagIds, removedPreference.customTagIds)

// F: no v2 → v4 migration target can resolve to a retired v3 ID.
const activeIds = new Set(builtInExercises.map((exercise) => exercise.id))
assert.ok(LEGACY_EXERCISE_MIGRATIONS.every((migration) => !migration.successorId || activeIds.has(migration.successorId)))

// Re-running the pure migration produces the same references.
assert.deepEqual(
  migrateWorkoutExerciseReferences([mappedResult, removedResult], legacyById, v4MigrationMap, timestamp),
  [mappedResult, removedResult],
)

console.log('Exercise migration tests passed: fresh v4, v3 retirement, history snapshots, active-reference cleanup, custom preservation, v2 targets, and idempotence')
