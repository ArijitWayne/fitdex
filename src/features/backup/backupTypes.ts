export const FITDEX_BACKUP_FORMAT = 'fitdex-backup' as const
export const FITDEX_BACKUP_FORMAT_VERSION = 1 as const
export const FITDEX_BACKUP_MIME_TYPE = 'application/x-fitdex-backup'
export const FITDEX_BACKUP_MAX_BYTES = 25 * 1024 * 1024
export const MINIMUM_COMPATIBLE_DATABASE_SCHEMA_VERSION = 2

export const BACKUP_STORE_NAMES = [
  'settings',
  'exercises',
  'exercisePreferences',
  'customTags',
  'workoutRoutines',
  'routineExercises',
  'workouts',
  'workoutExercises',
  'workoutSets',
  'cardioSessions',
  'foods',
  'dailyNutrition',
  'meals',
  'foodEntries',
  'rememberedFoods',
  'foodLogEntries',
  'customFoodCategories',
  'bodyMeasurements',
  'achievements',
  'quests',
  'xpHistory',
  'journalRecords',
  'xpEvents',
  'planDaySnapshots',
  'streakFreezeEvents',
  'streakPauses',
  'planChangeEvents',
  'achievementUnlocks',
] as const

export type BackupStoreName = (typeof BACKUP_STORE_NAMES)[number]
export type BackupRecord = Record<string, unknown> & { id: string }
export interface BackupLocalPreferences {
  themeFamily?: 'spartans' | 'amazonians'
  brightness?: 'system' | 'light' | 'dark'
  selectedAvatarId?: string
  onboardingComplete: boolean
}
export type BackupData = Record<BackupStoreName, BackupRecord[]> & { localPreferences: BackupLocalPreferences }

export interface FitDexBackup {
  format: typeof FITDEX_BACKUP_FORMAT
  formatVersion: typeof FITDEX_BACKUP_FORMAT_VERSION
  appVersion: string
  databaseSchemaVersion: number
  createdAt: string
  data: BackupData
}

declare const validatedBackup: unique symbol
export type ValidatedFitDexBackup = FitDexBackup & { readonly [validatedBackup]: true }

export interface BackupSummary {
  workoutCount: number
  foodLogCount: number
  routineCount: number
  achievementCount: number
}

export type BackupValidationCode = 'too-large' | 'invalid-json' | 'invalid-backup' | 'newer-format' | 'newer-schema' | 'older-schema'

export class BackupValidationError extends Error {
  readonly code: BackupValidationCode

  constructor(code: BackupValidationCode, message: string) {
    super(message)
    this.name = 'BackupValidationError'
    this.code = code
  }
}
