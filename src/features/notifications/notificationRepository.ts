import type { NotificationPreferences } from '../../data/models.ts'
import { getLocalSettingsRecord, updateLocalSettings } from '../settings/settingsRepository.ts'
import { resolveNotificationPreferences } from './notificationModel.ts'

export async function loadNotificationPreferences() {
  return resolveNotificationPreferences((await getLocalSettingsRecord())?.notifications)
}

export async function saveNotificationPreferences(patch: Partial<NotificationPreferences>) {
  const current = await loadNotificationPreferences()
  return resolveNotificationPreferences((await updateLocalSettings({ notifications: { ...current, ...patch } })).notifications)
}
