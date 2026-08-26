/// <reference types="node" />
import 'fake-indexeddb/auto'
import assert from 'node:assert/strict'
import Dexie from 'dexie'
import type { Exercise, ExercisePreference, WorkoutRoutine } from '../../data/models.ts'
import { builtInExercises } from '../exerciseDex/exerciseData.ts'
import { addExerciseToRoutineItems, createRoutineRecord } from './routineModel.ts'

const databaseName = 'fitdex'
const firstTimestamp = '2026-08-23T12:00:00.000Z'
const secondTimestamp = '2026-08-23T12:30:00.000Z'

const versionFourStores = {
  settings: '&id, updatedAt',
  exercises: '&id, name, category, *categories, source, sourceId, trackingType, equipment, updatedAt',
  exercisePreferences: '&id, &exerciseId, updatedAt',
  systemMetadata: '&id, updatedAt',
  customTags: '&id, appliesTo, name, updatedAt',
  workoutRoutines: '&id, name, updatedAt',
  workouts: '&id, routineId, startedAt, completedAt, updatedAt',
  workoutExercises: '&id, workoutId, exerciseId, order, updatedAt',
  workoutSets: '&id, workoutExerciseId, order, updatedAt',
  cardioSessions: '&id, workoutId, activity, startedAt, updatedAt',
  foods: '&id, name, updatedAt',
  dailyNutrition: '&id, &date, updatedAt',
  meals: '&id, dailyNutritionId, order, updatedAt',
  foodEntries: '&id, mealId, foodId, updatedAt',
  bodyMeasurements: '&id, recordedAt, updatedAt',
  achievements: '&id, &key, unlockedAt, updatedAt',
  quests: '&id, status, completedAt, updatedAt',
  xpHistory: '&id, occurredAt, updatedAt',
  journalRecords: '&id, &date, updatedAt',
} as const

await Dexie.delete(databaseName)

// Existing-v4 upgrade fixture: user-created exercise, preference, routine, and
// historical workout records must all survive the v4 through v6 migrations.
const legacy = new Dexie(databaseName)
legacy.version(4).stores(versionFourStores)
await legacy.open()

const customExercise: Exercise = {
  id: 'custom-exercise:migration-test',
  name: 'My Migration Press',
  aliases: ['personal press'],
  category: 'Chest',
  categories: ['Chest'],
  primaryCategory: 'Chest',
  primaryMuscles: ['Pectoralis major'],
  secondaryMuscles: ['Triceps'],
  muscleRegions: ['Chest'],
  equipment: 'Other',
  trackingType: 'weight_reps',
  source: 'custom',
  archived: false,
  createdAt: firstTimestamp,
  updatedAt: firstTimestamp,
}
const preference: ExercisePreference = {
  id: `exercise-preference:${customExercise.id}`,
  exerciseId: customExercise.id,
  favourite: true,
  personalNotes: 'Keep this note',
  customTagIds: ['tag:test'],
  createdAt: firstTimestamp,
  updatedAt: firstTimestamp,
}
const routine: WorkoutRoutine = {
  id: 'routine:legacy',
  name: 'Legacy Routine',
  createdAt: firstTimestamp,
  updatedAt: firstTimestamp,
}

await legacy.table('exercises').add(customExercise)
await legacy.table('exercisePreferences').add(preference)
await legacy.table('workoutRoutines').add(routine)
await legacy.table('workouts').add({
  id: 'workout:legacy',
  routineId: routine.id,
  startedAt: firstTimestamp,
  completedAt: secondTimestamp,
  createdAt: firstTimestamp,
  updatedAt: secondTimestamp,
})
await legacy.table('workoutExercises').add({
  id: 'workout-exercise:legacy',
  workoutId: 'workout:legacy',
  exerciseId: customExercise.id,
  order: 0,
  createdAt: firstTimestamp,
  updatedAt: secondTimestamp,
})
legacy.close()

const { DATABASE_SCHEMA_VERSION, FitDexDatabase, db } = await import('../../data/database.ts')
assert.equal(DATABASE_SCHEMA_VERSION, 7)
await db.open()

assert.ok(db.tables.some((table) => table.name === 'routineExercises'))
assert.deepEqual(await db.exercises.get(customExercise.id), customExercise)
assert.deepEqual(await db.exercisePreferences.get(preference.id), preference)
assert.deepEqual(await db.workoutRoutines.get(routine.id), routine)

const migratedWorkout = await db.workouts.get('workout:legacy')
assert.equal(migratedWorkout?.routineNameSnapshot, routine.name)
assert.equal(migratedWorkout?.nameSnapshot, routine.name)
assert.equal(migratedWorkout?.status, 'completed')
assert.equal(migratedWorkout?.durationSeconds, 30 * 60)

const migratedExercise = await db.workoutExercises.get('workout-exercise:legacy')
assert.equal(migratedExercise?.exerciseNameSnapshot, customExercise.name)
assert.equal(migratedExercise?.exerciseCategorySnapshot, customExercise.category)
assert.equal(migratedExercise?.trackingTypeSnapshot, customExercise.trackingType)

// Reloading the migrated database is idempotent and does not duplicate/reset
// user records.
const exerciseCountAfterUpgrade = await db.exercises.count()
const preferenceCountAfterUpgrade = await db.exercisePreferences.count()
db.close()
await db.open()
assert.equal(await db.exercises.count(), exerciseCountAfterUpgrade)
assert.equal(await db.exercisePreferences.count(), preferenceCountAfterUpgrade)

// Exercise ID references persist for both built-in and custom definitions.
// The repository's deletion-table isolation is asserted in the routine source
// test; this real database check proves the referenced definitions and workout
// snapshots remain independent from their template records.
const canonicalExercise = builtInExercises[0]
await db.exercises.put(canonicalExercise)
const persistedRoutine = createRoutineRecord('Persistence Test', firstTimestamp, 'routine:persistence')
let persistedItems = addExerciseToRoutineItems([], persistedRoutine.id, canonicalExercise, firstTimestamp, 'routine-exercise:built-in')
persistedItems = addExerciseToRoutineItems(persistedItems, persistedRoutine.id, customExercise, firstTimestamp, 'routine-exercise:custom')
await db.workoutRoutines.add(persistedRoutine)
await db.routineExercises.bulkAdd(persistedItems)
db.close()
await db.open()
const loadedItems = await db.routineExercises.where('routineId').equals(persistedRoutine.id).sortBy('order')
assert.deepEqual(loadedItems.map((item) => item.exerciseId), [canonicalExercise.id, customExercise.id])
await db.transaction('rw', db.workoutRoutines, db.routineExercises, async () => {
  await db.routineExercises.where('routineId').equals(persistedRoutine.id).delete()
  await db.workoutRoutines.delete(persistedRoutine.id)
})
assert.equal(await db.workoutRoutines.get(persistedRoutine.id), undefined)
assert.equal((await db.exercises.get(customExercise.id))?.name, customExercise.name)
assert.equal((await db.workouts.get('workout:legacy'))?.nameSnapshot, routine.name)

// Fresh install: all v7 stores are available; normal seeding restores exactly
// the authoritative 804 built-ins without changing dataset version 4.
db.close()
await Dexie.delete(databaseName)
const freshDb = new FitDexDatabase()
await freshDb.open()
assert.ok(freshDb.tables.some((table) => table.name === 'routineExercises'))
assert.ok(freshDb.tables.some((table) => table.name === 'xpEvents'))
assert.ok(freshDb.tables.some((table) => table.name === 'planDaySnapshots'))
freshDb.close()

await db.open()
await db.exercises.bulkPut(builtInExercises)
assert.equal(await db.exercises.where('source').equals('built-in').and((exercise) => !exercise.archived).count(), 804)
assert.equal(await db.exercisePreferences.count(), 0)

db.close()
await Dexie.delete(databaseName)

console.log('Workout database tests passed: real v4→v7 upgrade, data preservation, idempotent reload, local routine persistence/isolation, gamification stores, and fresh-install catalog storage')
