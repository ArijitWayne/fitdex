import type { NotificationPermissionState, NotificationPreferences } from '../../data/models.ts'

export type NotificationCategory = 'update' | 'workout' | 'nutrition'

export const DEFAULT_NOTIFICATION_PREFERENCES: NotificationPreferences = {
  enabled: false,
  updateEnabled: true,
  workoutEnabled: true,
  workoutReminderTime: '07:00',
  nutritionEnabled: true,
  nutritionReminderTime: '21:00',
  permissionState: 'unrequested',
}

export const NOTIFICATION_CHANNELS: Record<NotificationCategory, string> = {
  update: 'fitdex_updates_v1',
  workout: 'fitdex_workout_v1',
  nutrition: 'fitdex_nutrition_v1',
}

export const NOTIFICATION_SOUND_PATHS: Record<NotificationCategory, string> = {
  update: '/audio/update_notification.mp3',
  workout: '/audio/morning_notification.mp3',
  nutrition: '/audio/warning_notification.mp3',
}

export function resolveNotificationPreferences(value?: Partial<NotificationPreferences>): NotificationPreferences {
  return { ...DEFAULT_NOTIFICATION_PREFERENCES, ...value }
}

export function categoryEnabled(preferences: NotificationPreferences, category: NotificationCategory) {
  return preferences.enabled && preferences.permissionState === 'granted' && preferences[`${category}Enabled` as 'updateEnabled' | 'workoutEnabled' | 'nutritionEnabled']
}

export function notificationPermissionLabel(permission: NotificationPermissionState) {
  if (permission === 'granted') return 'ALLOWED'
  if (permission === 'denied') return 'BLOCKED'
  if (permission === 'unsupported') return 'UNAVAILABLE'
  return permission === 'unrequested' ? 'NOT ENABLED' : 'OFF'
}

export function formatReminderTime(value: string) {
  const [rawHour = 0, rawMinute = 0] = value.split(':').map(Number)
  const period = rawHour >= 12 ? 'PM' : 'AM'
  return `${rawHour % 12 || 12}:${String(rawMinute).padStart(2, '0')} ${period}`
}
