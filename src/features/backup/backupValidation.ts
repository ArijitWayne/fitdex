import { DATABASE_SCHEMA_VERSION } from '../../data/database.ts'
import {
  BACKUP_STORE_NAMES,
  BackupValidationError,
  FITDEX_BACKUP_FORMAT,
  FITDEX_BACKUP_FORMAT_VERSION,
  FITDEX_BACKUP_MAX_BYTES,
  MINIMUM_COMPATIBLE_DATABASE_SCHEMA_VERSION,
  type BackupData,
  type BackupLocalPreferences,
  type BackupRecord,
  type BackupStoreName,
  type ValidatedFitDexBackup,
} from './backupTypes.ts'

const STORE_INTRODUCTION_VERSION: Record<BackupStoreName, number> = {
  settings: 2, exercises: 2, exercisePreferences: 2, customTags: 2, workoutRoutines: 2,
  routineExercises: 5, workouts: 2, workoutExercises: 2, workoutSets: 2, cardioSessions: 2,
  foods: 2, dailyNutrition: 2, meals: 2, foodEntries: 2, rememberedFoods: 6,
  foodLogEntries: 6, customFoodCategories: 6, bodyMeasurements: 2, achievements: 2,
  quests: 2, xpHistory: 2, journalRecords: 2, xpEvents: 7, planDaySnapshots: 7,
  streakFreezeEvents: 7, streakPauses: 7, planChangeEvents: 7, achievementUnlocks: 7,
}

const REQUIRED_STRING_FIELDS: Partial<Record<BackupStoreName, readonly string[]>> = {
  exercisePreferences: ['exerciseId'],
  workoutRoutines: ['name'],
  routineExercises: ['routineId', 'exerciseId'],
  workouts: ['nameSnapshot', 'status', 'startedAt'],
  workoutExercises: ['workoutId', 'exerciseId'],
  workoutSets: ['workoutExerciseId'],
  foodLogEntries: ['date', 'meal', 'foodName'],
  customFoodCategories: ['name', 'normalizedName'],
  xpEvents: ['sourceKey', 'type', 'occurredAt'],
  planDaySnapshots: ['localDate', 'plannedType', 'result'],
  streakFreezeEvents: ['sourceKey', 'type', 'occurredAt'],
  streakPauses: ['reason', 'startDate', 'endDate'],
  planChangeEvents: ['sourceKey', 'type', 'occurredAt', 'effectiveDate'],
  achievementUnlocks: ['achievementId', 'unlockedAt'],
}

const UNIQUE_KEYS: Partial<Record<BackupStoreName, readonly (readonly string[])[]>> = {
  exercisePreferences: [['exerciseId']],
  routineExercises: [['routineId', 'order'], ['routineId', 'exerciseId']],
  dailyNutrition: [['date']],
  rememberedFoods: [['normalizedName']],
  customFoodCategories: [['normalizedName']],
  xpEvents: [['sourceKey']],
  planDaySnapshots: [['localDate']],
  streakFreezeEvents: [['sourceKey']],
  planChangeEvents: [['sourceKey']],
  achievementUnlocks: [['achievementId']],
}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function fail(message: string): never {
  throw new BackupValidationError('invalid-backup', message)
}

function normalizeRecord(storeName: BackupStoreName, record: BackupRecord, schemaVersion: number): BackupRecord {
  const normalized = { ...record }
  if (storeName === 'exercises' && schemaVersion < 3) {
    normalized.aliases ??= []
    normalized.category ??= 'Full Body'
    normalized.primaryMuscles ??= ['Other']
    normalized.secondaryMuscles ??= []
    normalized.muscleRegions ??= []
    normalized.equipment ??= 'Other'
    normalized.trackingType ??= 'reps_only'
    normalized.archived ??= false
  }
  if (storeName === 'workouts' && schemaVersion < 5) {
    normalized.nameSnapshot ??= normalized.routineNameSnapshot ?? 'Workout'
    normalized.status ??= normalized.completedAt ? 'completed' : 'active'
  }
  return normalized
}

function validateRecord(storeName: BackupStoreName, value: unknown, schemaVersion: number): BackupRecord {
  if (!isObject(value) || typeof value.id !== 'string' || !value.id.trim()) fail(`The ${storeName} payload contains a record without a valid ID.`)
  const record = normalizeRecord(storeName, value as BackupRecord, schemaVersion)
  for (const timestamp of ['createdAt', 'updatedAt']) {
    if (typeof record[timestamp] !== 'string' || !Number.isFinite(Date.parse(record[timestamp] as string))) fail(`Record ${record.id} in ${storeName} has an invalid ${timestamp}.`)
  }
  for (const field of REQUIRED_STRING_FIELDS[storeName] ?? []) {
    if (typeof record[field] !== 'string' || !(record[field] as string).trim()) fail(`Record ${record.id} in ${storeName} has an invalid ${field}.`)
  }
  if (storeName === 'exercises' && record.source !== 'custom') fail('Backup exercise data may contain only user-created exercises.')
  return record
}

function validateUniqueKeys(storeName: BackupStoreName, records: readonly BackupRecord[]) {
  const primaryKeys = new Set<string>()
  for (const record of records) {
    if (primaryKeys.has(record.id)) fail(`The ${storeName} payload contains duplicate record IDs.`)
    primaryKeys.add(record.id)
  }
  for (const fields of UNIQUE_KEYS[storeName] ?? []) {
    const values = new Set<string>()
    for (const record of records) {
      const keyParts = fields.map((field) => record[field])
      if (keyParts.some((value) => value === undefined)) continue
      const key = JSON.stringify(keyParts)
      if (values.has(key)) fail(`The ${storeName} payload contains duplicate ${fields.join('/')} values.`)
      values.add(key)
    }
  }
}

function validateLocalPreferences(value: unknown): BackupLocalPreferences {
  if (!isObject(value)) fail('Invalid FitDex backup: localPreferences must be an object.')
  if (value.themeFamily !== undefined && value.themeFamily !== 'spartans' && value.themeFamily !== 'amazonians') fail('Invalid FitDex backup: themeFamily is not supported.')
  if (value.brightness !== undefined && value.brightness !== 'system' && value.brightness !== 'light' && value.brightness !== 'dark') fail('Invalid FitDex backup: brightness is not supported.')
  if (value.selectedAvatarId !== undefined && (typeof value.selectedAvatarId !== 'string' || !value.selectedAvatarId.trim())) fail('Invalid FitDex backup: selectedAvatarId is malformed.')
  if (typeof value.onboardingComplete !== 'boolean') fail('Invalid FitDex backup: onboardingComplete must be a boolean.')
  return { themeFamily: value.themeFamily, brightness: value.brightness, selectedAvatarId: value.selectedAvatarId, onboardingComplete: value.onboardingComplete } as BackupLocalPreferences
}

export function validateFitDexBackup(value: unknown): ValidatedFitDexBackup {
  if (!isObject(value)) fail('Invalid FitDex backup: the top-level value must be an object.')
  if (value.format !== FITDEX_BACKUP_FORMAT) fail('Invalid FitDex backup: the file format marker is missing or incorrect.')
  if (!Number.isInteger(value.formatVersion)) fail('Invalid FitDex backup: formatVersion must be an integer.')
  if ((value.formatVersion as number) > FITDEX_BACKUP_FORMAT_VERSION) throw new BackupValidationError('newer-format', 'This backup was created by a newer FitDex backup format and cannot be restored by this version.')
  if (value.formatVersion !== FITDEX_BACKUP_FORMAT_VERSION) fail('Unsupported FitDex backup version.')
  if (typeof value.appVersion !== 'string' || !value.appVersion.trim()) fail('Invalid FitDex backup: appVersion is missing.')
  if (typeof value.createdAt !== 'string' || !Number.isFinite(Date.parse(value.createdAt))) fail('Invalid FitDex backup: createdAt is not a valid date.')
  if (!Number.isInteger(value.databaseSchemaVersion)) fail('Invalid FitDex backup: databaseSchemaVersion must be an integer.')
  const schemaVersion = value.databaseSchemaVersion as number
  if (schemaVersion > DATABASE_SCHEMA_VERSION) throw new BackupValidationError('newer-schema', 'This backup uses a newer FitDex database schema and cannot be restored by this version.')
  if (schemaVersion < MINIMUM_COMPATIBLE_DATABASE_SCHEMA_VERSION) throw new BackupValidationError('older-schema', 'This backup uses an unsupported older FitDex database schema.')
  if (!isObject(value.data)) fail('Invalid FitDex backup: data is missing or malformed.')

  const data = { localPreferences: validateLocalPreferences(value.data.localPreferences) } as BackupData
  for (const storeName of BACKUP_STORE_NAMES) {
    const payload = value.data[storeName]
    if (payload === undefined && schemaVersion < STORE_INTRODUCTION_VERSION[storeName]) {
      data[storeName] = []
      continue
    }
    if (!Array.isArray(payload)) fail(`Invalid FitDex backup: ${storeName} must be an array.`)
    const records = payload.map((record) => validateRecord(storeName, record, schemaVersion))
    validateUniqueKeys(storeName, records)
    data[storeName] = records
  }
  if (data.settings.length > 1) fail('Invalid FitDex backup: Settings must contain at most one record.')

  return { format: FITDEX_BACKUP_FORMAT, formatVersion: FITDEX_BACKUP_FORMAT_VERSION, appVersion: value.appVersion, databaseSchemaVersion: schemaVersion, createdAt: value.createdAt, data } as ValidatedFitDexBackup
}

export function parseFitDexBackup(content: string): ValidatedFitDexBackup {
  if (new TextEncoder().encode(content).byteLength > FITDEX_BACKUP_MAX_BYTES) throw new BackupValidationError('too-large', 'This backup is too large. FitDex accepts files up to 25 MB.')
  if (!content.trim()) throw new BackupValidationError('invalid-json', 'Invalid FitDex backup: the file is empty.')
  let parsed: unknown
  try { parsed = JSON.parse(content) } catch { throw new BackupValidationError('invalid-json', 'Invalid FitDex backup: the file is not valid JSON.') }
  return validateFitDexBackup(parsed)
}

export async function readFitDexBackupFile(file: File): Promise<ValidatedFitDexBackup> {
  if (file.size > FITDEX_BACKUP_MAX_BYTES) throw new BackupValidationError('too-large', 'This backup is too large. FitDex accepts files up to 25 MB.')
  return parseFitDexBackup(await file.text())
}
