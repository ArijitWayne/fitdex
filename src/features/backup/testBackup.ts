/// <reference types="node" />
import 'fake-indexeddb/auto'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import Dexie from 'dexie'
import { DATABASE_SCHEMA_VERSION, db } from '../../data/database.ts'
import type { Exercise } from '../../data/models.ts'
import type { KeyValueStorage } from '../../platform/deviceStorage.ts'
import { BRIGHTNESS_STORAGE_KEY, THEME_FAMILY_STORAGE_KEY } from '../../theme/theme.ts'
import { SELECTED_AVATAR_STORAGE_KEY } from '../avatar/avatarStorage.ts'
import { TUTORIAL_COMPLETE_KEY } from '../onboarding/tutorialStorage.ts'
import { collectBackupData, createFitDexBackup, restoreFitDexBackup } from './backupRepository.ts'
import { fitDexBackupFilename, serializeFitDexBackup, summarizeFitDexBackup } from './backupSerializer.ts'
import { BACKUP_STORE_NAMES, BackupValidationError, FITDEX_BACKUP_FORMAT, FITDEX_BACKUP_FORMAT_VERSION, FITDEX_BACKUP_MAX_BYTES, type BackupRecord, type BackupStoreName } from './backupTypes.ts'
import { parseFitDexBackup, readFitDexBackupFile, validateFitDexBackup } from './backupValidation.ts'

const timestamp = '2026-08-26T16:12:00.000Z'
const later = '2026-08-26T17:12:00.000Z'
const entity = (id: string, extra: Record<string, unknown> = {}): BackupRecord => ({ id, createdAt: timestamp, updatedAt: timestamp, ...extra })
const packageVersion = (JSON.parse(fs.readFileSync('package.json', 'utf8')) as { version: string }).version
const localValues = new Map<string, string>([[THEME_FAMILY_STORAGE_KEY, 'amazonians'], [BRIGHTNESS_STORAGE_KEY, 'dark'], [SELECTED_AVATAR_STORAGE_KEY, 'avatar:amazonian-1'], [TUTORIAL_COMPLETE_KEY, 'true']])
const storage: KeyValueStorage = { get: (key) => localValues.get(key) ?? null, set: (key, value) => { localValues.set(key, value); return true }, remove: (key) => { localValues.delete(key); return true } }

await db.close()
await Dexie.delete('fitdex')
await db.open()

const builtInExercise: Exercise = {
  id: 'built-in:test', name: 'Built-in Test', aliases: [], category: 'Chest', categories: ['Chest'], primaryCategory: 'Chest',
  primaryMuscles: ['Pectoralis major'], secondaryMuscles: [], muscleRegions: ['Chest'], equipment: 'Bodyweight',
  trackingType: 'bodyweight_reps', source: 'built-in', sourceId: 'built-in:test', archived: false, createdAt: timestamp, updatedAt: timestamp,
}
const customExercise: Exercise = {
  id: 'custom:test', name: 'My Test Move', aliases: [], category: 'Chest', categories: ['Chest'], primaryCategory: 'Chest',
  primaryMuscles: ['Pectoralis major'], secondaryMuscles: [], muscleRegions: ['Chest'], equipment: 'Bodyweight',
  trackingType: 'bodyweight_reps', source: 'custom', archived: false, createdAt: timestamp, updatedAt: timestamp,
}
await db.exercises.bulkAdd([builtInExercise, customExercise])
await db.systemMetadata.put({ id: 'built-in-exercise-dataset-version', value: '4', updatedAt: timestamp })

const fixtures: Partial<Record<BackupStoreName, BackupRecord[]>> = {
  settings: [entity('settings', { displayName: 'Backup Tester', selectedAvatarId: 'avatar:amazonian-1', themeFamily: 'amazonians', brightness: 'dark', units: 'metric', weeklyPlanConfigured: true, weeklyPlan: { monday: { type: 'routine', routineId: 'routine:test' } }, nutritionTargets: { enabled: true, goal: 'maintain', age: 32, sex: 'female', heightCm: 168, weightKg: 66, activityLevel: 'moderate', calorieTarget: 2100, proteinTargetGrams: 120, calorieTargetSource: 'manual', updatedAt: timestamp }, nutritionTargetsInitializedAt: timestamp, nutritionTargetsEligibleFrom: timestamp })],
  exercisePreferences: [entity('exercise-preference:custom:test', { exerciseId: 'custom:test', favourite: true, personalNotes: 'Favourite', customTagIds: ['tag:test'] })],
  customTags: [entity('tag:test', { name: 'Power', appliesTo: 'exercise' })],
  workoutRoutines: [entity('routine:test', { name: 'Backup Routine', notes: 'Keep this' })],
  routineExercises: [entity('routine-exercise:test', { routineId: 'routine:test', exerciseId: 'custom:test', exerciseNameSnapshot: 'My Test Move', order: 0, plannedSets: 1 })],
  workouts: [entity('workout:completed', { routineId: 'routine:test', routineNameSnapshot: 'Backup Routine', nameSnapshot: 'Backup Routine', status: 'completed', startedAt: timestamp, completedAt: later, durationSeconds: 3600 }), entity('workout:active', { nameSnapshot: 'Active Backup Workout', status: 'active', startedAt: later, timerState: 'paused', accumulatedActiveSeconds: 120 })],
  workoutExercises: [entity('workout-exercise:test', { workoutId: 'workout:completed', exerciseId: 'custom:test', exerciseNameSnapshot: 'My Test Move', order: 0 })],
  workoutSets: [entity('workout-set:test', { workoutExerciseId: 'workout-exercise:test', order: 0, reps: 8, weight: 40, completed: true })],
  cardioSessions: [entity('cardio:test', { workoutId: 'workout:completed', activity: 'Running', startedAt: timestamp, durationSeconds: 600 })],
  foods: [entity('food:test', { name: 'Legacy food', servingDescription: '1 bowl' })],
  dailyNutrition: [entity('nutrition:2026-08-26', { date: '2026-08-26' })],
  meals: [entity('meal:test', { dailyNutritionId: 'nutrition:2026-08-26', name: 'Lunch', order: 1 })],
  foodEntries: [entity('food-entry:test', { mealId: 'meal:test', foodId: 'food:test', servings: 1 })],
  rememberedFoods: [entity('remembered:test', { name: 'Lentil Bowl', normalizedName: 'lentil bowl', categoryId: 'other', timesUsed: 2, lastUsedAt: timestamp, mealUsage: { lunch: 2 }, kcal: 420, protein: 24, fiber: 12 })],
  foodLogEntries: [entity('food-log:test', { date: '2026-08-26', meal: 'lunch', rememberedFoodId: 'remembered:test', foodName: 'Lentil Bowl', categoryName: 'Homemade', categoryKind: 'custom', customCategoryId: 'food-category:test', kcal: 420, protein: 24, fiber: 12 })],
  customFoodCategories: [entity('food-category:test', { name: 'Homemade', normalizedName: 'homemade', color: 'amber' })],
  bodyMeasurements: [entity('measurement:test', { recordedAt: timestamp, weight: 66 })],
  achievements: [entity('legacy-achievement:test', { key: 'legacy-achievement', unlockedAt: timestamp })],
  quests: [entity('quest:test', { title: 'Legacy quest', status: 'completed', completedAt: timestamp })],
  xpHistory: [entity('xp-history:test', { amount: 5, reason: 'Legacy XP', occurredAt: timestamp })],
  journalRecords: [entity('journal:2026-08-26', { date: '2026-08-26', body: 'Good session.' })],
  xpEvents: [entity('xp:test', { sourceKey: 'workout:completed', type: 'planned_routine', amount: 30, occurredAt: later })],
  planDaySnapshots: [entity('plan-day:2026-08-26', { localDate: '2026-08-26', plannedType: 'routine', routineId: 'routine:test', result: 'success', finalizedAt: later, satisfyingWorkoutId: 'workout:completed' })],
  streakFreezeEvents: [entity('freeze:initial', { sourceKey: 'freeze:initial', amount: 1, type: 'initial', occurredAt: timestamp })],
  streakPauses: [entity('pause:test', { reason: 'travel', startDate: '2026-09-01', endDate: '2026-09-02' })],
  planChangeEvents: [entity('plan-change:test', { sourceKey: 'plan-change:test', type: 'protected', occurredAt: timestamp, effectiveDate: '2026-08-26' })],
  achievementUnlocks: [entity('achievement:target', { achievementId: 'first-workout', unlockedAt: later, sourceKey: 'achievement:first-workout' })],
}

for (const [storeName, records] of Object.entries(fixtures)) await db.table(storeName).bulkAdd(records)

const backup = await createFitDexBackup(packageVersion, new Date(timestamp), db, storage)
assert.equal(backup.format, FITDEX_BACKUP_FORMAT)
assert.equal(backup.formatVersion, FITDEX_BACKUP_FORMAT_VERSION)
assert.equal(backup.appVersion, packageVersion)
assert.equal(backup.databaseSchemaVersion, DATABASE_SCHEMA_VERSION)
assert.equal(backup.createdAt, timestamp)
assert.ok(Number.isFinite(Date.parse(backup.createdAt)))
assert.deepEqual(Object.keys(backup.data), [...BACKUP_STORE_NAMES, 'localPreferences'])
assert.deepEqual(backup.data.localPreferences, { themeFamily: 'amazonians', brightness: 'dark', selectedAvatarId: 'avatar:amazonian-1', onboardingComplete: true })
assert.deepEqual(backup.data.exercises.map((record) => record.id), ['custom:test'])
assert.ok(!('systemMetadata' in backup.data))
assert.ok(backup.data.workouts.some((record) => record.status === 'active'), 'Persisted active workouts must be backed up')

const serialized = serializeFitDexBackup(backup)
assert.deepEqual(JSON.parse(serialized), backup)
assert.ok(!serialized.includes('.mp4'))
assert.ok(!serialized.includes('/gamification/achievements/'))
assert.match(fitDexBackupFilename(new Date(timestamp)), /^fitdex-backup-\d{4}-\d{2}-\d{2}-\d{4}\.fitdex$/)
assert.deepEqual(summarizeFitDexBackup(backup), { workoutCount: 1, foodLogCount: 1, routineCount: 1, achievementCount: 1 })

const validated = parseFitDexBackup(serialized)
await db.settings.clear()
await db.settings.put({ id: 'settings', displayName: 'Replace me', createdAt: timestamp, updatedAt: timestamp })
await db.systemMetadata.put({ id: 'restore-sentinel', value: 'preserve', updatedAt: later })
localValues.set(THEME_FAMILY_STORAGE_KEY, 'spartans')
localValues.delete(SELECTED_AVATAR_STORAGE_KEY)
const restoreResult = await restoreFitDexBackup(validated, db, storage)
assert.deepEqual(restoreResult.externalPreferenceFailures, [])
assert.deepEqual(await collectBackupData(db, storage), backup.data)
assert.equal((await db.exercises.get('built-in:test'))?.source, 'built-in')
assert.equal((await db.exercises.get('custom:test'))?.name, 'My Test Move')
assert.equal((await db.systemMetadata.get('restore-sentinel'))?.value, 'preserve')

const originalSettings = await db.settings.get('settings')
const preferencesBeforeFailure = new Map(localValues)
const mutatedAfterValidation = parseFitDexBackup(serialized)
mutatedAfterValidation.data.settings.push({ ...mutatedAfterValidation.data.settings[0] })
await assert.rejects(() => restoreFitDexBackup(mutatedAfterValidation, db, storage))
assert.deepEqual(await db.settings.get('settings'), originalSettings, 'A transaction failure must roll back the clear and preserve current data')
assert.deepEqual(localValues, preferencesBeforeFailure, 'Local preferences must not change before the database transaction commits')

await db.settings.put({ id: 'settings', displayName: 'Replace before preference failure', createdAt: timestamp, updatedAt: timestamp })
localValues.set(THEME_FAMILY_STORAGE_KEY, 'spartans')
const preferenceFailureStorage: KeyValueStorage = {
  get: storage.get,
  set(key, value) { if (key === THEME_FAMILY_STORAGE_KEY) return false; if (key === SELECTED_AVATAR_STORAGE_KEY) throw new Error('Simulated browser storage failure'); localValues.set(key, value); return true },
  remove: storage.remove,
}
const preferenceFailureResult = await restoreFitDexBackup(validated, db, preferenceFailureStorage)
assert.deepEqual(preferenceFailureResult.externalPreferenceFailures, ['theme', 'selected avatar'])
assert.equal((await db.settings.get('settings'))?.displayName, 'Backup Tester', 'A post-commit preference failure must not relabel or roll back the successful database restore')
assert.equal(localValues.get(THEME_FAMILY_STORAGE_KEY), 'spartans', 'A failed external preference keeps its current value')
assert.equal(localValues.get(BRIGHTNESS_STORAGE_KEY), 'dark', 'Other external preferences continue independently')

assert.throws(() => parseFitDexBackup(''), (error: unknown) => error instanceof BackupValidationError && error.code === 'invalid-json')
assert.throws(() => parseFitDexBackup('{bad json'), (error: unknown) => error instanceof BackupValidationError && error.code === 'invalid-json')
assert.throws(() => validateFitDexBackup({}), /format marker/)
assert.throws(() => validateFitDexBackup({ ...backup, format: 'wrong-format' }), /format marker/)
assert.throws(() => validateFitDexBackup({ ...backup, data: undefined }), /data is missing/)
assert.throws(() => validateFitDexBackup({ ...backup, formatVersion: 2 }), (error: unknown) => error instanceof BackupValidationError && error.code === 'newer-format')
assert.throws(() => validateFitDexBackup({ ...backup, databaseSchemaVersion: DATABASE_SCHEMA_VERSION + 1 }), (error: unknown) => error instanceof BackupValidationError && error.code === 'newer-schema')
assert.throws(() => validateFitDexBackup({ ...backup, data: { ...backup.data, workouts: {} } }), /workouts must be an array/)
assert.throws(() => validateFitDexBackup({ ...backup, data: { ...backup.data, settings: [backup.data.settings[0], backup.data.settings[0]] } }), /duplicate record IDs/)

const olderData = structuredClone(backup.data) as Record<string, unknown>
for (const storeName of ['xpEvents', 'planDaySnapshots', 'streakFreezeEvents', 'streakPauses', 'planChangeEvents', 'achievementUnlocks']) delete olderData[storeName]
const normalizedOlder = validateFitDexBackup({ ...backup, databaseSchemaVersion: 6, data: olderData })
assert.deepEqual(normalizedOlder.data.xpEvents, [])
assert.deepEqual(normalizedOlder.data.achievementUnlocks, [])

let oversizedRead = false
const oversizedFile = { size: FITDEX_BACKUP_MAX_BYTES + 1, text: async () => { oversizedRead = true; return serialized } } as File
await assert.rejects(() => readFitDexBackupFile(oversizedFile), (error: unknown) => error instanceof BackupValidationError && error.code === 'too-large')
assert.equal(oversizedRead, false, 'Oversized files must be rejected before reading/parsing')

db.close()
await Dexie.delete('fitdex')
console.log('Backup tests passed: v1 serialization, authoritative store coverage, custom/static boundaries, round trip, schema normalization, validation, size cap, replace semantics, and transaction rollback')
