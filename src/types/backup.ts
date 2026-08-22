import type { DATABASE_SCHEMA_VERSION } from '../data/database'

export const FITDEX_BACKUP_FORMAT = 'fitdex-portable-backup'
export const FITDEX_BACKUP_VERSION = 1
export const FITDEX_APP_VERSION = '0.0.0'

export interface BackupMetadata {
  format: typeof FITDEX_BACKUP_FORMAT
  backupVersion: typeof FITDEX_BACKUP_VERSION
  schemaVersion: typeof DATABASE_SCHEMA_VERSION
  appVersion: string
  createdAt: string
}

export interface FitDexBackup<Tables = Record<string, unknown[]>> {
  metadata: BackupMetadata
  tables: Tables
}
