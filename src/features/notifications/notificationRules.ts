import type { NutritionTargets, WeeklyPlanAssignment } from '../../data/models.ts'
import type { NotificationPreferences } from '../../data/models.ts'
import { categoryEnabled, type NotificationCategory } from './notificationModel.ts'

export interface NotificationPayload {
  category: NotificationCategory
  title: string
  body: string
  dateKey?: string
}

export function updateNotificationEligible(preferences: NotificationPreferences, version: string, currentVersion: string) {
  return categoryEnabled(preferences, 'update') && version !== currentVersion && preferences.lastNotifiedUpdateVersion !== version
}

export function workoutNotificationEligible(preferences: NotificationPreferences, input: { assignment: WeeklyPlanAssignment; completed: boolean; dateKey: string }) {
  return categoryEnabled(preferences, 'workout')
    && input.assignment.type !== 'rest_day'
    && input.assignment.type !== 'no_plan'
    && !input.completed
    && preferences.lastWorkoutReminderDate !== input.dateKey
}

export function nutritionNotificationEligible(preferences: NotificationPreferences, input: { targets?: NutritionTargets; caloriesLogged: number; dateKey: string }) {
  const target = input.targets
  const remaining = target ? target.calorieTarget - input.caloriesLogged : 0
  return categoryEnabled(preferences, 'nutrition') && Boolean(target?.enabled) && remaining >= 100 && preferences.lastNutritionReminderDate !== input.dateKey
}

export function workoutNotificationPayload(assignment: WeeklyPlanAssignment, routineName?: string): NotificationPayload {
  const bodyName = routineName?.replace(/\s+day$/i, '') || 'Your workout'
  return assignment.type === 'routine'
    ? { category: 'workout', title: `${(routineName ?? 'Workout Day').toUpperCase()} TODAY`, body: `${bodyName} is planned for today. Ready when you are.` }
    : { category: 'workout', title: 'WORKOUT DAY TODAY', body: "You've got training planned for today." }
}

export function nutritionNotificationPayload(remaining: number): NotificationPayload {
  return { category: 'nutrition', title: 'CALORIES STILL TO GO', body: `${remaining} kcal remaining to reach today's target.` }
}

export function updateNotificationPayload(version: string): NotificationPayload {
  return { category: 'update', title: 'FITDEX UPDATE AVAILABLE', body: `v${version} is ready. Open FitDex to see what's new.` }
}
