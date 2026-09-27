import { db } from '../../data/database.ts'
import { brandingFamilyForTheme } from '../../branding/branding.ts'
import type { ThemeFamily } from '../../theme/theme.ts'
import { getLocalDateKey, getLocalDayTimestampRange } from '../../utils/localDate.ts'
import { getDailyTotals } from '../food/foodRepository.ts'
import { loadNutritionTargets } from '../nutritionTargets/nutritionTargetRepository.ts'
import { loadWeeklyPlan, weekdayIdForLocalDateKey } from '../workout/weeklyPlan.ts'
import { cancelAllScheduledNotifications, cancelScheduledNotification, deliverNotification } from './notificationDelivery.ts'
import { loadNotificationPreferences, saveNotificationPreferences } from './notificationRepository.ts'
import { nutritionNotificationEligible, nutritionNotificationPayload, updateNotificationPayload, workoutNotificationEligible, workoutNotificationPayload } from './notificationRules.ts'
import { categoryEnabled, type NotificationCategory } from './notificationModel.ts'

function todayAt(value: string, now: Date) {
  const [hour, minute] = value.split(':').map(Number)
  const result = new Date(now)
  result.setHours(hour, minute, 0, 0)
  return result
}

async function workoutCompletedToday(dateKey: string) {
  const range = getLocalDayTimestampRange(dateKey)
  return (await db.workouts.where('[status+completedAt]').between(['completed', new Date(range.startTimestamp).toISOString()], ['completed', new Date(range.endTimestamp).toISOString()], true, false).count()) > 0
}

export async function reconcileNotificationSchedules(family: ThemeFamily, now = new Date()) {
  const preferences = await loadNotificationPreferences()
  if (!preferences.enabled || preferences.permissionState !== 'granted') { await cancelAllScheduledNotifications(); return }
  const dateKey = getLocalDateKey(now)
  const plan = await loadWeeklyPlan()
  const assignment = plan.days[weekdayIdForLocalDateKey(dateKey)]
  const completed = await workoutCompletedToday(dateKey)
  const workoutAt = todayAt(preferences.workoutReminderTime, now)
  const routineName = assignment.type === 'routine' ? (await db.workoutRoutines.get(assignment.routineId))?.name : undefined
  if (workoutNotificationEligible(preferences, { assignment, completed, dateKey }) && workoutAt > now) await deliverNotification(workoutNotificationPayload(assignment, routineName), family, workoutAt)
  else await cancelScheduledNotification('workout')
  const targets = await loadNutritionTargets()
  const logged = (await getDailyTotals(dateKey)).kcal ?? 0
  const nutritionAt = todayAt(preferences.nutritionReminderTime, now)
  if (nutritionNotificationEligible(preferences, { targets, caloriesLogged: logged, dateKey }) && nutritionAt > now) await deliverNotification(nutritionNotificationPayload(targets!.calorieTarget - logged), family, nutritionAt)
  else await cancelScheduledNotification('nutrition')
}

export async function notifyUpdateAvailable(version: string, family: ThemeFamily) {
  const preferences = await loadNotificationPreferences()
  if (!categoryEnabled(preferences, 'update') || preferences.lastNotifiedUpdateVersion === version) return false
  await deliverNotification(updateNotificationPayload(version), family)
  await saveNotificationPreferences({ lastNotifiedUpdateVersion: version })
  return true
}

export async function sendDevelopmentNotification(category: NotificationCategory, family: ThemeFamily) {
  const payload = category === 'update' ? updateNotificationPayload('1.2.0') : category === 'workout' ? workoutNotificationPayload({ type: 'routine', routineId: 'test' }, 'Push Day') : nutritionNotificationPayload(620)
  await deliverNotification(payload, family)
  if (typeof Audio !== 'undefined') {
    const audio = new Audio(`/audio/${category === 'update' ? 'update_notification' : category === 'workout' ? 'morning_notification' : 'warning_notification'}.mp3`)
    void audio.play().catch(() => undefined)
  }
}

export { brandingFamilyForTheme }
