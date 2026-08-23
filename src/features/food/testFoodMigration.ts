/// <reference types="node" />
import 'fake-indexeddb/auto'
import assert from 'node:assert/strict'
import Dexie from 'dexie'

const storesV5 = {
  settings: '&id, updatedAt', exercises: '&id, name, category, *categories, source, sourceId, trackingType, equipment, updatedAt',
  exercisePreferences: '&id, &exerciseId, updatedAt', systemMetadata: '&id, updatedAt', customTags: '&id, appliesTo, name, updatedAt',
  workoutRoutines: '&id, name, updatedAt', routineExercises: '&id, routineId, exerciseId, [routineId+order], &[routineId+exerciseId], updatedAt',
  workouts: '&id, routineId, status, startedAt, completedAt, [status+completedAt], updatedAt', workoutExercises: '&id, workoutId, exerciseId, [workoutId+order], [exerciseId+workoutId], updatedAt',
  workoutSets: '&id, workoutExerciseId, [workoutExerciseId+order], completed, updatedAt', cardioSessions: '&id, workoutId, activity, startedAt, updatedAt',
  foods: '&id, name, updatedAt', dailyNutrition: '&id, &date, updatedAt', meals: '&id, dailyNutritionId, order, updatedAt', foodEntries: '&id, mealId, foodId, updatedAt',
  bodyMeasurements: '&id, recordedAt, updatedAt', achievements: '&id, &key, unlockedAt, updatedAt', quests: '&id, status, completedAt, updatedAt',
  xpHistory: '&id, occurredAt, updatedAt', journalRecords: '&id, &date, updatedAt',
} as const

await Dexie.delete('fitdex')
const legacy = new Dexie('fitdex')
legacy.version(5).stores(storesV5)
await legacy.open()
const timestamp = '2026-08-23T12:00:00.000Z'
await legacy.table('settings').add({ id: 'settings', themeFamily: 'spartans', createdAt: timestamp, updatedAt: timestamp })
await legacy.table('workoutRoutines').add({ id: 'routine:kept', name: 'Keep me', createdAt: timestamp, updatedAt: timestamp })
await legacy.table('workouts').add({ id: 'workout:kept', nameSnapshot: 'Keep workout', status: 'completed', startedAt: timestamp, completedAt: timestamp, createdAt: timestamp, updatedAt: timestamp })
await legacy.table('foods').add({ id: 'legacy-food', name: 'Legacy placeholder food', createdAt: timestamp, updatedAt: timestamp })
legacy.close()

const { DATABASE_SCHEMA_VERSION, FitDexDatabase, db } = await import('../../data/database.ts')
assert.equal(DATABASE_SCHEMA_VERSION, 6)
await db.open()
assert.ok(db.tables.some((table) => table.name === 'rememberedFoods'))
assert.ok(db.tables.some((table) => table.name === 'foodLogEntries'))
assert.ok(db.tables.some((table) => table.name === 'customFoodCategories'))
assert.equal((await db.settings.get('settings'))?.themeFamily, 'spartans')
assert.equal((await db.workoutRoutines.get('routine:kept'))?.name, 'Keep me')
assert.equal((await db.workouts.get('workout:kept'))?.nameSnapshot, 'Keep workout')
assert.equal((await db.foods.get('legacy-food'))?.name, 'Legacy placeholder food')
db.close()

const fresh = new FitDexDatabase()
await fresh.open()
assert.equal(fresh.tables.length, Object.keys(storesV5).length + 3)
fresh.close()
await Dexie.delete('fitdex')
console.log('Food migration tests passed: v5 user data preserved, three v6 stores added, and fresh install opens')
