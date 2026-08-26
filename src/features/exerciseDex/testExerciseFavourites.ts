/// <reference types="node" />
import 'fake-indexeddb/auto'
import assert from 'node:assert/strict'
import Dexie from 'dexie'
import { builtInExercises } from './exerciseData.ts'
import { searchFavouriteExercises } from './exerciseCatalog.ts'

await Dexie.delete('fitdex')
const { db, DATABASE_SCHEMA_VERSION } = await import('../../data/database.ts')
const { listFavouriteExerciseIds, setExerciseFavourite } = await import('./exerciseFavouriteRepository.ts')
await db.open()
assert.equal(DATABASE_SCHEMA_VERSION, 7)

const archer = builtInExercises.find((exercise) => exercise.name === 'Archer Push-Up')
const band = builtInExercises.find((exercise) => exercise.name === 'Band Chest Fly')
const third = builtInExercises.find((exercise) => exercise.id !== archer?.id && exercise.id !== band?.id)
assert.ok(archer && band && third)
await db.exercises.bulkPut([archer, band, third])
const settings = { id: 'settings', displayName: 'Arijit', themeFamily: 'spartans' as const, brightness: 'dark' as const, units: 'imperial' as const, selectedAvatarId: 'avatar:one', createdAt: '2026-01-01T00:00:00.000Z', updatedAt: '2026-01-01T00:00:00.000Z' }
await db.settings.put(settings)

for (const exercise of [archer, band, third]) await setExerciseFavourite(exercise.id, true)
await db.exercisePreferences.put({ id: 'exercise-preference:unknown', exerciseId: 'unknown', favourite: true, personalNotes: 'keep', customTagIds: [], createdAt: settings.createdAt, updatedAt: settings.updatedAt })
let favourites = await listFavouriteExerciseIds()
assert.deepEqual(new Set(searchFavouriteExercises([archer, band, third], favourites, '').map((exercise) => exercise.id)), new Set([archer.id, band.id, third.id]))
assert.deepEqual(searchFavouriteExercises([archer, band, third], favourites, 'archer').map((exercise) => exercise.id), [archer.id])
assert.ok(favourites.has('unknown'), 'unknown stored IDs are safe and ignored by resolved catalog filtering')
await setExerciseFavourite(archer.id, false)
assert.equal((await listFavouriteExerciseIds()).has(archer.id), false)
await setExerciseFavourite(archer.id, true)
db.close()
await db.open()
favourites = await listFavouriteExerciseIds()
assert.ok(favourites.has(archer.id), 'favorite survives database reopen')
assert.deepEqual(await db.settings.get('settings'), settings, 'favorite writes do not touch settings')

db.close()
await Dexie.delete('fitdex')
console.log('Exercise favorites tests passed: toggle, multiple, normalized search, unknown IDs, persistence, and settings isolation')
