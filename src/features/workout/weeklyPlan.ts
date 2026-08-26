import type { SettingsRecord, WeekdayId, WeeklyPlanAssignment, WorkoutRoutine } from '../../data/models.ts'
import { WEEKDAY_IDS } from '../../data/models.ts'
import { dateFromLocalDateKey } from '../../utils/localDate.ts'
import { getLocalSettingsRecord, updateLocalSettings } from '../settings/settingsRepository.ts'

export const WEEKDAY_LABELS: Record<WeekdayId, string> = {
  monday: 'Monday', tuesday: 'Tuesday', wednesday: 'Wednesday', thursday: 'Thursday',
  friday: 'Friday', saturday: 'Saturday', sunday: 'Sunday',
}

export interface WeeklyPlan {
  configured: boolean
  days: Record<WeekdayId, WeeklyPlanAssignment>
}

export function emptyWeeklyPlanDays(): WeeklyPlan['days'] {
  return Object.fromEntries(WEEKDAY_IDS.map((day) => [day, { type: 'no_plan' }])) as WeeklyPlan['days']
}

export async function loadWeeklyPlan(): Promise<WeeklyPlan> {
  const settings = await getLocalSettingsRecord()
  return { configured: settings?.weeklyPlanConfigured ?? false, days: { ...emptyWeeklyPlanDays(), ...settings?.weeklyPlan } }
}

export async function saveWeeklyPlanDay(day: WeekdayId, assignment: WeeklyPlanAssignment) {
  const current = await loadWeeklyPlan()
  const days = { ...current.days, [day]: assignment }
  await updateLocalSettings({ weeklyPlan: days, weeklyPlanConfigured: true })
  return { configured: true, days } satisfies WeeklyPlan
}

export function weekdayIdForLocalDateKey(dateKey: string): WeekdayId {
  const day = dateFromLocalDateKey(dateKey).getDay()
  return WEEKDAY_IDS[(day + 6) % 7]
}

export function weeklyPlanAssignmentLabel(assignment: WeeklyPlanAssignment, routines: readonly Pick<WorkoutRoutine, 'id' | 'name'>[]) {
  if (assignment.type === 'routine') return routines.find((routine) => routine.id === assignment.routineId)?.name ?? 'No Plan'
  if (assignment.type === 'workout_day') return 'Workout Day'
  if (assignment.type === 'rest_day') return 'Rest'
  return 'No Plan'
}

export function clearRoutineFromPlan(plan: SettingsRecord['weeklyPlan'], routineId: string) {
  if (!plan) return plan
  return Object.fromEntries(Object.entries(plan).map(([day, assignment]) => [day, assignment?.type === 'routine' && assignment.routineId === routineId ? { type: 'no_plan' } : assignment])) as SettingsRecord['weeklyPlan']
}
