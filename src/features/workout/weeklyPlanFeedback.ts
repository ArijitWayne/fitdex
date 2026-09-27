import type { WeeklyPlan } from './weeklyPlan.ts'
import type { WeeklyPlanFeedback } from '../../data/models.ts'
import { getLocalSettingsRecord, updateLocalSettings } from '../settings/settingsRepository.ts'
import { assignRoutineToWeekday, assignWorkoutDayToWeekday } from './weeklyPlan.ts'

export async function listWeeklyPlanFeedback() {
  return (await getLocalSettingsRecord())?.weeklyPlanFeedback ?? []
}

export async function enqueueWeeklyPlanFeedback(feedback: WeeklyPlanFeedback) {
  const pending = await listWeeklyPlanFeedback()
  if (pending.some((item) => item.id === feedback.id)) return false
  await updateLocalSettings({ weeklyPlanFeedback: [...pending, feedback] })
  return true
}

export async function acknowledgeWeeklyPlanFeedback(id: string) {
  const pending = await listWeeklyPlanFeedback()
  if (!pending.some((item) => item.id === id)) return false
  await updateLocalSettings({ weeklyPlanFeedback: pending.filter((item) => item.id !== id) })
  return true
}

export async function resolveWeeklyPlanFeedback(id: string, action: 'update' | 'keep'): Promise<WeeklyPlan | undefined> {
  const feedback = (await listWeeklyPlanFeedback()).find((item) => item.id === id)
  if (!feedback) return undefined
  let plan: WeeklyPlan | undefined
  if (action === 'update' && feedback.type === 'rest_day_decision') {
    plan = feedback.routineId
      ? await assignRoutineToWeekday(feedback.weekday, feedback.routineId)
      : await assignWorkoutDayToWeekday(feedback.weekday)
  }
  if (action === 'update' && feedback.type === 'different_routine_decision') {
    plan = await assignRoutineToWeekday(feedback.weekday, feedback.completedRoutineId)
  }
  await acknowledgeWeeklyPlanFeedback(id)
  return plan
}
