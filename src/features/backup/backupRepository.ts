import type { FitDexDatabase } from '../../data/database.ts'
import { DATABASE_SCHEMA_VERSION, db } from '../../data/database.ts'
import type { KeyValueStorage } from '../../platform/deviceStorage.ts'
import { deviceStorage } from '../../platform/deviceStorage.ts'
import { BRIGHTNESS_STORAGE_KEY, THEME_FAMILY_STORAGE_KEY } from '../../theme/theme.ts'
import { SELECTED_AVATAR_STORAGE_KEY } from '../avatar/avatarStorage.ts'
import { TUTORIAL_COMPLETE_KEY } from '../onboarding/tutorialStorage.ts'
import { BACKUP_STORE_NAMES, FITDEX_BACKUP_FORMAT, FITDEX_BACKUP_FORMAT_VERSION, type BackupData, type BackupRecord, type FitDexBackup, type ValidatedFitDexBackup } from './backupTypes.ts'

export type ExternalPreferenceName = 'theme' | 'brightness' | 'selected avatar' | 'onboarding completion'
export interface RestoreFitDexBackupResult { externalPreferenceFailures: ExternalPreferenceName[] }

function collectLocalPreferences(storage: KeyValueStorage) {
  const themeFamily = storage.get(THEME_FAMILY_STORAGE_KEY)
  const brightness = storage.get(BRIGHTNESS_STORAGE_KEY)
  const selectedAvatarId = storage.get(SELECTED_AVATAR_STORAGE_KEY)
  return {
    themeFamily: themeFamily === 'spartans' || themeFamily === 'amazonians' ? themeFamily : undefined,
    brightness: brightness === 'system' || brightness === 'light' || brightness === 'dark' ? brightness : undefined,
    selectedAvatarId: selectedAvatarId || undefined,
    onboardingComplete: storage.get(TUTORIAL_COMPLETE_KEY) === 'true',
  }
}

function restoreLocalPreferences(backup: ValidatedFitDexBackup, storage: KeyValueStorage): ExternalPreferenceName[] {
  const preferences = backup.data.localPreferences
  const failures: ExternalPreferenceName[] = []
  for (const [name, key, value] of [['theme', THEME_FAMILY_STORAGE_KEY, preferences.themeFamily], ['brightness', BRIGHTNESS_STORAGE_KEY, preferences.brightness], ['selected avatar', SELECTED_AVATAR_STORAGE_KEY, preferences.selectedAvatarId]] as const) {
    try {
      const persisted = value ? storage.set(key, value) : storage.remove(key)
      if (!persisted) failures.push(name)
    } catch { failures.push(name) }
  }
  try {
    const persisted = preferences.onboardingComplete ? storage.set(TUTORIAL_COMPLETE_KEY, 'true') : storage.remove(TUTORIAL_COMPLETE_KEY)
    if (!persisted) failures.push('onboarding completion')
  } catch { failures.push('onboarding completion') }
  return failures
}

export async function collectBackupData(database: FitDexDatabase = db, storage: KeyValueStorage = deviceStorage): Promise<BackupData> {
  const entries = await Promise.all(BACKUP_STORE_NAMES.map(async (storeName) => {
    const rows = storeName === 'exercises'
      ? await database.exercises.where('source').equals('custom').toArray()
      : await database.table(storeName).toArray()
    return [storeName, rows] as const
  }))
  return { ...Object.fromEntries(entries), localPreferences: collectLocalPreferences(storage) } as BackupData
}

export async function createFitDexBackup(appVersion: string, now = new Date(), database: FitDexDatabase = db, storage: KeyValueStorage = deviceStorage): Promise<FitDexBackup> {
  return {
    format: FITDEX_BACKUP_FORMAT,
    formatVersion: FITDEX_BACKUP_FORMAT_VERSION,
    appVersion,
    databaseSchemaVersion: DATABASE_SCHEMA_VERSION,
    createdAt: now.toISOString(),
    data: await collectBackupData(database, storage),
  }
}

export async function restoreFitDexBackup(backup: ValidatedFitDexBackup, database: FitDexDatabase = db, storage: KeyValueStorage = deviceStorage): Promise<RestoreFitDexBackupResult> {
  const tables = BACKUP_STORE_NAMES.map((storeName) => database.table(storeName))
  await database.transaction('rw', tables, async () => {
    for (const storeName of BACKUP_STORE_NAMES) {
      const table = database.table(storeName)
      if (storeName === 'exercises') await database.exercises.where('source').equals('custom').delete()
      else await table.clear()
      const records = backup.data[storeName] as BackupRecord[]
      if (records.length) await table.bulkAdd(records)
    }
  })
  return { externalPreferenceFailures: restoreLocalPreferences(backup, storage) }
}
