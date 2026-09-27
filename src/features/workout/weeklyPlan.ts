import type { SettingsRecord, WeekdayId, WeeklyPlanAssignment, Workout, WorkoutRoutine } from '../../data/models.ts'
import { WEEKDAY_IDS } from '../../data/models.ts'
import { dateFromLocalDateKey } from '../../utils/localDate.ts'
import { getLocalSettingsRecord, updateLocalSettings } from '../settings/settingsRepository.ts'
import { getLocalDateKey } from '../../utils/localDate.ts'
import { ensureGamificationInitialized, reconcileGamification } from '../gamification/gamificationRepository.ts'
import { assignmentsEqual } from '../gamification/gamificationModel.ts'
import { db } from '../../data/database.ts'
import { reconcileNotificationSchedules } from '../notifications/notificationScheduler.ts'

export const WEEKDAY_LABELS: Record<WeekdayId, string> = {
  monday: 'Monday', tuesday: 'Tuesday', wednesday: 'Wednesday', thursday: 'Thursday',
  friday: 'Friday', saturday: 'Saturday', sunday: 'Sunday',
}

export interface WeeklyPlan {
  configured: boolean
  days: Record<WeekdayId, WeeklyPlanAssignment>
}

export interface WeeklyPlanInferenceResult {
  plan: WeeklyPlan
  weekday: WeekdayId
  assignment: Extract<WeeklyPlanAssignment, { type: 'routine' | 'workout_day' }>
  routineName?: string
}

export function emptyWeeklyPlanDays(): WeeklyPlan['days'] {
  return Object.fromEntries(WEEKDAY_IDS.map((day) => [day, { type: 'no_plan' }])) as WeeklyPlan['days']
}

export async function loadWeeklyPlan(): Promise<WeeklyPlan> {
  const settings = await getLocalSettingsRecord()
  return { configured: settings?.weeklyPlanConfigured ?? false, days: { ...emptyWeeklyPlanDays(), ...settings?.weeklyPlan } }
}

export async function saveWeeklyPlanDay(day: WeekdayId, assignment: WeeklyPlanAssignment) {
  return updateFutureWeekdayAssignment(day, assignment)
}

export async function updateFutureWeekdayAssignment(day: WeekdayId, assignment: WeeklyPlanAssignment, options: { now?: Date } = {}) {
  const current = await loadWeeklyPlan()
  const days = { ...current.days, [day]: assignment }
  return saveWeeklyPlan(days, options)
}

export async function assignRoutineToWeekday(day: WeekdayId, routineId: string, options: { now?: Date } = {}) {
  const routine = await db.workoutRoutines.get(routineId)
  if (!routine) throw new Error('Routine not found.')
  return updateFutureWeekdayAssignment(day, { type: 'routine', routineId }, options)
}

export async function assignWorkoutDayToWeekday(day: WeekdayId, options: { now?: Date } = {}) {
  return updateFutureWeekdayAssignment(day, { type: 'workout_day' }, options)
}

export async function saveWeeklyPlan(days: WeeklyPlan['days'], options: { now?: Date } = {}) {
  const now = options.now ?? new Date()
  await ensureGamificationInitialized(now)
  await reconcileGamification(now, { retrospective: true })
  const current = await loadWeeklyPlan()
  const material = WEEKDAY_IDS.some((day) => !assignmentsEqual(current.days[day], days[day]))
  if (!material) return current
  const settings = await getLocalSettingsRecord()
  await updateLocalSettings({
    weeklyPlan: days,
    weeklyPlanConfigured: true,
    weeklyPlanConfiguredAt: settings?.weeklyPlanConfiguredAt ?? now.toISOString(),
  })
  const todayDateKey = getLocalDateKey(now)
  const todaySnapshot = await db.planDaySnapshots.where('localDate').equals(todayDateKey).first()
  if (todaySnapshot?.result === 'pending') {
    const assignment = days[weekdayIdForLocalDateKey(todayDateKey)]
    const routine = assignment.type === 'routine' ? await db.workoutRoutines.get(assignment.routineId) : undefined
    await db.planDaySnapshots.update(todaySnapshot.id, {
      plannedType: assignment.type,
      routineId: assignment.type === 'routine' ? assignment.routineId : undefined,
      routineNameSnapshot: routine?.name,
      updatedAt: now.toISOString(),
    })
  }
  const saved = { configured: true, days } satisfies WeeklyPlan
  const family = (await getLocalSettingsRecord())?.themeFamily === 'amazonians' ? 'amazonians' : 'spartans'
  await reconcileNotificationSchedules(family, now)
  return saved
}

export async function inferWeeklyPlanFromCompletedWorkout(workout: Workout) {
  if (workout.status !== 'completed') return undefined
  const localDate = getLocalDateKey(new Date(workout.startedAt))
  const snapshot = await db.planDaySnapshots.get(`plan-day:${localDate}`)
  if (snapshot?.plannedType !== 'no_plan' || snapshot.result !== 'success') return undefined
  const weekday = weekdayIdForLocalDateKey(localDate)
  const current = await loadWeeklyPlan()
  if (current.days[weekday].type !== 'no_plan') return undefined
  const routine = workout.routineId ? await db.workoutRoutines.get(workout.routineId) : undefined
  const options = { now: new Date(workout.startedAt) }
  if (routine) {
    const plan = await assignRoutineToWeekday(weekday, routine.id, options)
    return { plan, weekday, assignment: { type: 'routine', routineId: routine.id }, routineName: routine.name } satisfies WeeklyPlanInferenceResult
  }
  const plan = await assignWorkoutDayToWeekday(weekday, options)
  return { plan, weekday, assignment: { type: 'workout_day' } } satisfies WeeklyPlanInferenceResult
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
