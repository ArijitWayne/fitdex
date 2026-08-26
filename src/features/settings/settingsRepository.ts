import { db } from '../../data/database.ts'
import type { SettingsRecord } from '../../data/models.ts'

export const DEFAULT_SETTINGS_ID = 'settings'

export async function getLocalSettingsRecord() {
  return await db.settings.get(DEFAULT_SETTINGS_ID) ?? db.settings.toCollection().first()
}

export async function updateLocalSettings(patch: Partial<Omit<SettingsRecord, 'id' | 'createdAt' | 'updatedAt'>>) {
  const existing = await getLocalSettingsRecord()
  const timestamp = new Date().toISOString()
  const next: SettingsRecord = existing
    ? { ...existing, ...patch, updatedAt: timestamp }
    : { id: DEFAULT_SETTINGS_ID, ...patch, createdAt: timestamp, updatedAt: timestamp }
  await db.settings.put(next)
  return next
}
