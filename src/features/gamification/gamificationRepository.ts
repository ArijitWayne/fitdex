import { db } from '../../data/database.ts'
import { FOOD_MEALS, WEEKDAY_IDS, type AchievementUnlock, type PlanDaySnapshot, type StreakPause, type WeeklyPlanAssignment, type Workout, type XpEvent, type XpEventType } from '../../data/models.ts'
import { createId } from '../../utils/createId.ts'
import { getLocalDateKey, shiftLocalDateKey } from '../../utils/localDate.ts'
import { derivePersonalRecords } from '../progress/personalRecords.ts'
import { loadProgressSource } from '../progress/progressRepository.ts'
import { getLocalSettingsRecord, updateLocalSettings } from '../settings/settingsRepository.ts'
import { calculateRmr, calculateTdee, evaluateCalorieDay, evaluateProteinDay } from '../nutritionTargets/nutritionTargetCalculator.ts'
import { isHistoricalWorkoutSetLogged } from '../workout/workoutModel.ts'
import { ACHIEVEMENTS, type AchievementDefinition, type AchievementProgressKey } from './achievementCatalog.ts'
import { INITIAL_FREEZE_BALANCE, MAX_FREEZE_BALANCE, MAX_PAUSE_DAYS, MAX_PAUSES_PER_ROLLING_YEAR, MAX_PROTECTED_PLAN_CHANGES_PER_ROLLING_YEAR, SUCCESSFUL_DAYS_PER_FREEZE, XP_REWARDS, levelForXp } from './gamificationConfig.ts'
import { deriveStreak, inclusiveDateDuration, totalXpFromAmounts } from './gamificationModel.ts'

const recordId = (prefix: string) => `${prefix}:${createId()}`
const iso = (now = new Date()) => now.toISOString()

export interface GamificationStats extends Record<AchievementProgressKey, number> {}

export interface GamificationDashboard {
  initializedAt: string
  progression: ReturnType<typeof levelForXp>
  xpEvents: XpEvent[]
  snapshots: PlanDaySnapshot[]
  streak: ReturnType<typeof deriveStreak>
  freezeBalance: number
  pauseUsesRemaining: number
  activePause?: StreakPause
  today?: PlanDaySnapshot
  planPreview: Record<string, Pick<PlanDaySnapshot, 'localDate' | 'plannedType' | 'routineId' | 'routineNameSnapshot' | 'result'>>
  unlocks: AchievementUnlock[]
  achievements: Array<{ definition: AchievementDefinition; unlocked?: AchievementUnlock; progress: number }>
  latestAchievement?: { definition: AchievementDefinition; unlocked: AchievementUnlock }
  protectedPlanChange: { available: boolean; usedAt?: string; nextAvailable?: string }
}

export async function ensureGamificationInitialized(now = new Date()) {
  let settings = await getLocalSettingsRecord()
  if (!settings?.gamificationInitializedAt) {
    const timestamp = iso(now)
    settings = await updateLocalSettings({ gamificationInitializedAt: timestamp })
  }
  if (!await db.streakFreezeEvents.where('sourceKey').equals('freeze:initial').first()) {
    const timestamp = settings.gamificationInitializedAt!
    await db.streakFreezeEvents.add({ id: 'freeze:initial', sourceKey: 'freeze:initial', amount: INITIAL_FREEZE_BALANCE, type: 'initial', occurredAt: timestamp, createdAt: timestamp, updatedAt: timestamp })
  }
  return settings.gamificationInitializedAt!
}

async function assignmentForDate(dateKey: string) {
  const [settings, routines] = await Promise.all([getLocalSettingsRecord(), db.workoutRoutines.toArray()])
  const date = new Date(`${dateKey}T12:00:00`)
  const weekday = WEEKDAY_IDS[(date.getDay() + 6) % 7]
  const assignment = settings?.weeklyPlan?.[weekday] ?? { type: 'no_plan' }
  if (assignment.type !== 'routine') return { assignment, routineName: undefined }
  const routine = routines.find((item) => item.id === assignment.routineId)
  return routine ? { assignment, routineName: routine.name } : { assignment: { type: 'no_plan' } as WeeklyPlanAssignment, routineName: undefined }
}

async function materializeSnapshots(initializedAt: string, todayDateKey: string) {
  const firstDate = getLocalDateKey(new Date(initializedAt))
  const latest = await db.planDaySnapshots.orderBy('localDate').last()
  let dateKey = latest ? shiftLocalDateKey(latest.localDate, 1) : firstDate
  while (dateKey <= todayDateKey) {
    const { assignment, routineName } = await assignmentForDate(dateKey)
    const timestamp = iso()
    const snapshot: PlanDaySnapshot = {
      id: `plan-day:${dateKey}`, localDate: dateKey, plannedType: assignment.type,
      routineId: assignment.type === 'routine' ? assignment.routineId : undefined,
      routineNameSnapshot: routineName, result: 'pending', createdAt: timestamp, updatedAt: timestamp,
    }
    await db.planDaySnapshots.put(snapshot)
    dateKey = shiftLocalDateKey(dateKey, 1)
  }
}

function pauseForDate(pauses: readonly StreakPause[], dateKey: string) {
  return pauses.find((pause) => pause.startDate <= dateKey && pause.endDate >= dateKey)
}

async function freezeBalance() {
  return Math.max(0, Math.min(MAX_FREEZE_BALANCE, totalXpFromAmounts((await db.streakFreezeEvents.toArray()).map((event) => event.amount))))
}

async function finalizePastSnapshots(todayDateKey: string) {
  const [pending, pauses] = await Promise.all([
    db.planDaySnapshots.where('result').equals('pending').filter((row) => row.localDate < todayDateKey).sortBy('localDate'),
    db.streakPauses.toArray(),
  ])
  for (const snapshot of pending) {
    const timestamp = iso()
    const pause = pauseForDate(pauses, snapshot.localDate)
    if (pause) {
      await db.planDaySnapshots.update(snapshot.id, { result: 'paused', pauseId: pause.id, finalizedAt: timestamp, updatedAt: timestamp })
      continue
    }
    if (snapshot.plannedType === 'rest_day' || snapshot.plannedType === 'no_plan') {
      await db.planDaySnapshots.update(snapshot.id, { result: snapshot.plannedType === 'rest_day' ? 'rest' : 'no_plan', finalizedAt: timestamp, updatedAt: timestamp })
      continue
    }
    const workouts = await completedWorkoutsOnStartDate(snapshot.localDate)
    const satisfying = snapshot.plannedType === 'routine'
      ? workouts.find((workout) => workout.routineId === snapshot.routineId)
      : workouts[0]
    if (satisfying) {
      await db.planDaySnapshots.update(snapshot.id, { result: 'success', satisfyingWorkoutId: satisfying.id, finalizedAt: timestamp, updatedAt: timestamp })
      const successful = await db.planDaySnapshots.where('result').equals('success').count()
      if (successful > 0 && successful % SUCCESSFUL_DAYS_PER_FREEZE === 0) {
        const sourceKey = `freeze:earned:${successful}`
        if (!await db.streakFreezeEvents.where('sourceKey').equals(sourceKey).first()) {
          const amount = await freezeBalance() < MAX_FREEZE_BALANCE ? 1 : 0
          await db.streakFreezeEvents.add({ id: sourceKey, sourceKey, amount, type: 'earned', localDate: snapshot.localDate, occurredAt: timestamp, createdAt: timestamp, updatedAt: timestamp })
        }
      }
      continue
    }
    if (await freezeBalance() > 0) {
      const sourceKey = `freeze:missed:${snapshot.localDate}`
      if (!await db.streakFreezeEvents.where('sourceKey').equals(sourceKey).first()) await db.streakFreezeEvents.add({ id: sourceKey, sourceKey, amount: -1, type: 'automatic_missed_plan', localDate: snapshot.localDate, occurredAt: timestamp, createdAt: timestamp, updatedAt: timestamp })
      await db.planDaySnapshots.update(snapshot.id, { result: 'frozen', finalizedAt: timestamp, updatedAt: timestamp })
    } else await db.planDaySnapshots.update(snapshot.id, { result: 'missed', finalizedAt: timestamp, updatedAt: timestamp })
  }
}

async function reconcileFreezeMilestones() {
  const successful = await db.planDaySnapshots.where('result').equals('success').sortBy('localDate')
  for (let count = SUCCESSFUL_DAYS_PER_FREEZE; count <= successful.length; count += SUCCESSFUL_DAYS_PER_FREEZE) {
    const sourceKey = `freeze:earned:${count}`
    if (await db.streakFreezeEvents.where('sourceKey').equals(sourceKey).first()) continue
    const snapshot = successful[count - 1]
    const events = await db.streakFreezeEvents.toArray()
    const balanceAtMilestone = Math.max(0, Math.min(MAX_FREEZE_BALANCE, totalXpFromAmounts(events.filter((event) => !event.localDate || event.localDate <= snapshot.localDate).map((event) => event.amount))))
    const timestamp = snapshot.finalizedAt ?? iso()
    await db.streakFreezeEvents.add({ id: sourceKey, sourceKey, amount: balanceAtMilestone < MAX_FREEZE_BALANCE ? 1 : 0, type: 'earned', localDate: snapshot.localDate, occurredAt: timestamp, createdAt: timestamp, updatedAt: timestamp })
  }
}

async function completedWorkoutsOnStartDate(dateKey: string) {
  const all: Workout[] = await db.workouts.toArray()
  return all.filter((workout) => workout.status === 'completed' && getLocalDateKey(new Date(workout.startedAt)) === dateKey)
}

async function addXpEvent(type: XpEventType, amount: number, sourceKey: string, occurredAt: string, metadata?: Record<string, string | number | boolean | undefined>) {
  if (await db.xpEvents.where('sourceKey').equals(sourceKey).first()) return false
  await db.xpEvents.add({ id: sourceKey, type, amount, sourceKey, occurredAt, metadata, createdAt: iso(), updatedAt: iso() })
  return true
}

async function reconcileWorkoutXp(initializedAt: string, snapshots: readonly PlanDaySnapshot[]) {
  const workouts = (await db.workouts.where('status').equals('completed').toArray()).sort((left, right) => left.startedAt.localeCompare(right.startedAt))
  for (const workout of workouts.filter((item) => (item.completedAt ?? item.startedAt) >= initializedAt)) {
    const dateKey = getLocalDateKey(new Date(workout.startedAt))
    const plan = snapshots.find((snapshot) => snapshot.localDate === dateKey)
    const sameDay = workouts.filter((candidate) => getLocalDateKey(new Date(candidate.startedAt)) === dateKey)
    const plannedWinner = plan?.satisfyingWorkoutId ?? (plan?.plannedType === 'routine'
      ? sameDay.find((candidate) => candidate.routineId === plan.routineId)?.id
      : plan?.plannedType === 'workout_day' ? sameDay[0]?.id : undefined)
    const plannedRoutine = plan?.plannedType === 'routine' && plannedWinner === workout.id
    const plannedWorkout = plan?.plannedType === 'workout_day' && plannedWinner === workout.id
    const type = plannedRoutine ? 'planned_routine' : plannedWorkout ? 'planned_workout' : 'unplanned_workout'
    const amount = plannedRoutine ? XP_REWARDS.plannedRoutine : plannedWorkout ? XP_REWARDS.plannedWorkout : XP_REWARDS.unplannedWorkout
    await addXpEvent(type, amount, `workout:${workout.id}`, workout.completedAt ?? workout.startedAt, { workoutId: workout.id, name: workout.nameSnapshot, localDate: dateKey })
  }
}

function metricSignature(metric: { value: number; weight?: number; reps?: number; durationSeconds?: number; distance?: number }) {
  return [metric.value, metric.weight, metric.reps, metric.durationSeconds, metric.distance].join('|')
}

async function deriveHistoricalPrEvents() {
  const source = await loadProgressSource('all', getLocalDateKey())
  const result: Array<{ workoutId: string; exerciseId: string; exerciseName: string; metric: string; occurredAt: string; dateKey: string }> = []
  let prior: typeof source.allWorkouts = []
  let before = new Map<string, ReturnType<typeof derivePersonalRecords>[number]>()
  for (const workout of source.allWorkouts) {
    const afterRows = derivePersonalRecords([...prior, workout], source.definitions)
    const after = new Map(afterRows.map((record) => [record.exerciseId, record]))
    const occurredAt = workout.workout.completedAt ?? workout.workout.startedAt
    for (const record of afterRows) for (const metric of record.metrics) {
      const oldMetric = before.get(record.exerciseId)?.metrics.find((entry) => entry.key === metric.key)
      if (metric.achievedAt === Date.parse(occurredAt) && (!oldMetric || metricSignature(oldMetric) !== metricSignature(metric))) result.push({ workoutId: workout.workout.id, exerciseId: record.exerciseId, exerciseName: record.exerciseName, metric: metric.key, occurredAt, dateKey: workout.dateKey })
    }
    prior = [...prior, workout]
    before = after
  }
  return { events: result, source }
}

async function reconcilePrXp(initializedAt: string) {
  const { events } = await deriveHistoricalPrEvents()
  for (const event of events.filter((entry) => entry.occurredAt >= initializedAt)) await addXpEvent('personal_record', XP_REWARDS.personalRecord, `pr:${event.workoutId}:${event.exerciseId}:${event.metric}`, event.occurredAt, event)
}

async function reconcileFoodXp(initializedAt: string, pauses: readonly StreakPause[]) {
  const activationDate = getLocalDateKey(new Date(initializedAt))
  const entries = await db.foodLogEntries.where('date').aboveOrEqual(activationDate).toArray()
  const dates = [...new Set(entries.map((entry) => entry.date))]
  for (const date of dates) {
    if (pauseForDate(pauses, date)) continue
    const meals = new Set(entries.filter((entry) => entry.date === date).map((entry) => entry.meal))
    if (FOOD_MEALS.every((meal) => meals.has(meal))) await addXpEvent('full_food_log', XP_REWARDS.fullFoodLog, `full-food-log:${date}`, iso(), { localDate: date })
  }
  const settings = await getLocalSettingsRecord()
  const targets = settings?.nutritionTargets
  const targetInitializedAt = settings?.nutritionTargetsInitializedAt
  if (!targets?.enabled || !targetInitializedAt) return
  const targetActivationDate = getLocalDateKey(new Date(settings.nutritionTargetsEligibleFrom ?? targetInitializedAt))
  const estimatedTdee = calculateTdee(calculateRmr(targets), targets.activityLevel)
  for (const date of dates.filter((dateKey) => dateKey >= targetActivationDate)) {
    if (pauseForDate(pauses, date)) continue
    const dayEntries = entries.filter((entry) => entry.date === date)
    const calories = dayEntries.reduce((sum, entry) => sum + (entry.kcal ?? 0), 0)
    const protein = dayEntries.reduce((sum, entry) => sum + (entry.protein ?? 0), 0)
    const occurredAt = `${date}T12:00:00.000Z`
    if (evaluateCalorieDay(targets, calories, estimatedTdee).achievementEligible) await addXpEvent('calorie_target', XP_REWARDS.calorieTarget, `calorie-target:${date}`, occurredAt, { localDate: date, calories, target: targets.calorieTarget })
    if (evaluateProteinDay(targets.proteinTargetGrams, protein).achievementEligible) await addXpEvent('protein_target', XP_REWARDS.proteinTarget, `protein-target:${date}`, occurredAt, { localDate: date, protein, target: targets.proteinTargetGrams })
  }
}

function weekKey(dateKey: string) {
  const date = new Date(`${dateKey}T12:00:00`)
  const monday = shiftLocalDateKey(dateKey, -((date.getDay() + 6) % 7))
  return monday
}

function completePeriods(snapshots: readonly PlanDaySnapshot[]) {
  const finalized = snapshots.filter((row) => row.result !== 'pending')
  const weeks = new Map<string, PlanDaySnapshot[]>()
  const months = new Map<string, PlanDaySnapshot[]>()
  for (const row of finalized) {
    weeks.set(weekKey(row.localDate), [...(weeks.get(weekKey(row.localDate)) ?? []), row])
    months.set(row.localDate.slice(0, 7), [...(months.get(row.localDate.slice(0, 7)) ?? []), row])
  }
  const obligationSucceeded = (rows: readonly PlanDaySnapshot[]) => rows.some((row) => row.result === 'success') && rows.every((row) => (row.result !== 'frozen' && row.result !== 'paused' && row.result !== 'missed') && (row.plannedType === 'rest_day' || row.plannedType === 'no_plan' || row.result === 'success'))
  const fullCalendarMonth = (rows: readonly PlanDaySnapshot[]) => {
    if (!rows.length) return false
    const sorted = [...rows].sort((left, right) => left.localDate.localeCompare(right.localDate))
    const [year, month] = sorted[0].localDate.split('-').map(Number)
    const daysInMonth = new Date(year, month, 0).getDate()
    return sorted.length === daysInMonth && sorted[0].localDate.endsWith('-01') && sorted.at(-1)?.localDate.endsWith(`-${String(daysInMonth).padStart(2, '0')}`)
  }
  return {
    plannedWeeks: [...weeks.values()].filter((rows) => rows.length === 7 && obligationSucceeded(rows)).length,
    perfectMonths: [...months.values()].filter((rows) => fullCalendarMonth(rows) && rows.every((row) => row.localDate < getLocalDateKey()) && obligationSucceeded(rows) && rows.every((row) => row.result !== 'frozen' && row.result !== 'paused')).length,
  }
}

async function deriveAchievementStats(snapshots: readonly PlanDaySnapshot[]) {
  const { events: prEvents, source } = await deriveHistoricalPrEvents()
  const uniqueExercises = new Set<string>()
  const categorySet = new Set<string>()
  const requiredCategories = new Set(['Chest', 'Back', 'Shoulders', 'Legs', 'Gluteal', 'Biceps', 'Triceps', 'Forearms', 'Abs'])
  for (const workout of source.allWorkouts) for (const { exercise, sets } of workout.exercises) if (sets.some((set) => isHistoricalWorkoutSetLogged(set, exercise.trackingTypeSnapshot ?? source.definitions.get(exercise.exerciseId)?.trackingType ?? 'reps_only'))) {
    uniqueExercises.add(exercise.exerciseId)
    const definition = source.definitions.get(exercise.exerciseId)
    for (const category of definition?.categories ?? (definition?.primaryCategory ? [definition.primaryCategory] : exercise.exerciseCategorySnapshot ? [exercise.exerciseCategorySnapshot] : [])) if (requiredCategories.has(category)) categorySet.add(category)
  }
  const food = await db.foodLogEntries.toArray()
  const mealSets = new Map<string, Set<string>>()
  for (const entry of food) mealSets.set(entry.date, new Set([...(mealSets.get(entry.date) ?? []), entry.meal]))
  const completeNutritionDays = [...mealSets.values()].filter((meals) => FOOD_MEALS.every((meal) => meals.has(meal))).length
  const xp = await db.xpEvents.toArray()
  const progression = levelForXp(totalXpFromAmounts(xp.map((event) => event.amount)))
  const streak = deriveStreak(snapshots, await db.planChangeEvents.toArray())
  const periods = completePeriods(snapshots)
  return {
    workouts: source.allWorkouts.length,
    trainingHours: source.allWorkouts.reduce((sum, fact) => sum + (fact.workout.durationSeconds ?? 0), 0) / 3600,
    bestStreak: streak.best,
    plannedWeeks: periods.plannedWeeks,
    perfectMonths: periods.perfectMonths,
    prEvents: prEvents.length,
    prExercises: new Set(prEvents.map((event) => event.exerciseId)).size,
    uniqueExercises: uniqueExercises.size,
    exerciseCategories: categorySet.size,
    completeNutritionDays,
    calorieTargetDays: xp.filter((event) => event.type === 'calorie_target').length,
    proteinTargetDays: xp.filter((event) => event.type === 'protein_target').length,
    level: progression.level,
  } satisfies GamificationStats
}

async function reconcileAchievements(snapshots: readonly PlanDaySnapshot[]) {
  const [stats, existing] = await Promise.all([deriveAchievementStats(snapshots), db.achievementUnlocks.toArray()])
  const existingIds = new Set(existing.map((unlock) => unlock.achievementId))
  const timestamp = iso()
  const rows = ACHIEVEMENTS.filter((definition) => !definition.dormant && stats[definition.progressKey] >= definition.target && !existingIds.has(definition.id)).map((definition): AchievementUnlock => ({ id: `achievement:${definition.id}`, achievementId: definition.id, unlockedAt: timestamp, createdAt: timestamp, updatedAt: timestamp }))
  if (rows.length) await db.achievementUnlocks.bulkAdd(rows)
}

export async function reconcileGamification(now = new Date()) {
  const initializedAt = await ensureGamificationInitialized(now)
  const todayDateKey = getLocalDateKey(now)
  await materializeSnapshots(initializedAt, todayDateKey)
  await finalizePastSnapshots(todayDateKey)
  await reconcileFreezeMilestones()
  const [snapshots, pauses] = await Promise.all([db.planDaySnapshots.orderBy('localDate').toArray(), db.streakPauses.toArray()])
  await reconcileWorkoutXp(initializedAt, snapshots)
  await reconcilePrXp(initializedAt)
  await reconcileFoodXp(initializedAt, pauses)
  await reconcileAchievements(snapshots)
  if (typeof window !== 'undefined') window.dispatchEvent(new CustomEvent('fitdex:gamification-changed'))
  return loadGamificationDashboard(todayDateKey, false)
}

export async function reconcileFoodGamification(now = new Date()) {
  const initializedAt = await ensureGamificationInitialized(now)
  const pauses = await db.streakPauses.toArray()
  await reconcileFoodXp(initializedAt, pauses)
  const snapshots = await db.planDaySnapshots.orderBy('localDate').toArray()
  await reconcileAchievements(snapshots)
  if (typeof window !== 'undefined') window.dispatchEvent(new CustomEvent('fitdex:gamification-changed'))
}

function dateOneYearBefore(dateKey: string) {
  const date = new Date(`${dateKey}T12:00:00`)
  date.setFullYear(date.getFullYear() - 1)
  return getLocalDateKey(date)
}

export async function loadGamificationDashboard(todayDateKey = getLocalDateKey(), reconcile = true): Promise<GamificationDashboard> {
  if (reconcile) return reconcileGamification(new Date(`${todayDateKey}T12:00:00`))
  const initializedAt = await ensureGamificationInitialized()
  const [xpEvents, snapshots, freezes, pauses, unlocks, changes] = await Promise.all([
    db.xpEvents.orderBy('occurredAt').reverse().toArray(), db.planDaySnapshots.orderBy('localDate').toArray(),
    db.streakFreezeEvents.toArray(), db.streakPauses.toArray(), db.achievementUnlocks.orderBy('unlockedAt').reverse().toArray(), db.planChangeEvents.orderBy('occurredAt').reverse().toArray(),
  ])
  const totalXp = totalXpFromAmounts(xpEvents.map((event) => event.amount))
  const stats = await deriveAchievementStats(snapshots)
  const unlockById = new Map(unlocks.map((unlock) => [unlock.achievementId, unlock]))
  const latest = unlocks[0]
  const cutoff = dateOneYearBefore(todayDateKey)
  const pauseUses = pauses.filter((pause) => pause.startDate >= cutoff && pause.startDate <= todayDateKey).length
  const protectedChange = changes.find((event) => event.type === 'protected' && getLocalDateKey(new Date(event.occurredAt)) >= cutoff)
  const weekStart = shiftLocalDateKey(todayDateKey, -((new Date(`${todayDateKey}T12:00:00`).getDay() + 6) % 7))
  const previewRows = await Promise.all(Array.from({ length: 7 }, async (_, index) => {
    const localDate = shiftLocalDateKey(weekStart, index)
    const { assignment, routineName } = await assignmentForDate(localDate)
    return { localDate, plannedType: assignment.type, routineId: assignment.type === 'routine' ? assignment.routineId : undefined, routineNameSnapshot: routineName, result: 'pending' as const }
  }))
  return {
    initializedAt, progression: levelForXp(totalXp), xpEvents, snapshots,
    streak: deriveStreak(snapshots, changes),
    freezeBalance: Math.max(0, Math.min(MAX_FREEZE_BALANCE, totalXpFromAmounts(freezes.map((event) => event.amount)))),
    pauseUsesRemaining: Math.max(0, MAX_PAUSES_PER_ROLLING_YEAR - pauseUses),
    activePause: pauses.find((pause) => pause.startDate <= todayDateKey && pause.endDate >= todayDateKey),
    today: snapshots.find((snapshot) => snapshot.localDate === todayDateKey),
    planPreview: Object.fromEntries(previewRows.map((row) => [row.localDate, row])),
    unlocks,
    achievements: ACHIEVEMENTS.map((definition) => ({ definition, unlocked: unlockById.get(definition.id), progress: stats[definition.progressKey] })),
    latestAchievement: latest ? { definition: ACHIEVEMENTS.find((definition) => definition.id === latest.achievementId)!, unlocked: latest } : undefined,
    protectedPlanChange: protectedChange ? { available: false, usedAt: protectedChange.occurredAt, nextAvailable: shiftYear(protectedChange.occurredAt) } : { available: true },
  }
}

function shiftYear(timestamp: string) { const date = new Date(timestamp); date.setFullYear(date.getFullYear() + 1); return date.toISOString() }

export async function planStreakPause(reason: StreakPause['reason'], startDate: string, endDate: string, todayDateKey = getLocalDateKey()) {
  if (startDate < todayDateKey) throw new Error('A pause cannot start in the past.')
  const duration = inclusiveDateDuration(startDate, endDate)
  if (duration < 1 || duration > MAX_PAUSE_DAYS) throw new Error('A pause must be between 1 and 7 consecutive days.')
  const cutoff = dateOneYearBefore(startDate)
  const recent = await db.streakPauses.filter((pause) => pause.startDate >= cutoff && pause.startDate <= startDate).count()
  if (recent >= MAX_PAUSES_PER_ROLLING_YEAR) throw new Error('Both Travel / Sickness Pauses have been used in the rolling 12-month period.')
  const overlaps = await db.streakPauses.filter((pause) => pause.startDate <= endDate && pause.endDate >= startDate).count()
  if (overlaps) throw new Error('This date range overlaps an existing pause.')
  const timestamp = iso()
  const pause: StreakPause = { id: recordId('streak-pause'), reason, startDate, endDate, createdAt: timestamp, updatedAt: timestamp }
  await db.streakPauses.add(pause)
  return pause
}

export async function recordPlanChange(type: 'protected' | 'reset', effectiveDate = getLocalDateKey()) {
  const timestamp = iso()
  const sourceKey = `plan-change:${type}:${createId()}`
  await db.planChangeEvents.add({ id: sourceKey, sourceKey, type, occurredAt: timestamp, effectiveDate, createdAt: timestamp, updatedAt: timestamp })
}

export async function protectedChangesUsed(referenceDateKey = getLocalDateKey()) {
  const cutoff = dateOneYearBefore(referenceDateKey)
  return db.planChangeEvents.filter((event) => event.type === 'protected' && getLocalDateKey(new Date(event.occurredAt)) >= cutoff).count()
}

export function protectedPlanChangeLimit() { return MAX_PROTECTED_PLAN_CHANGES_PER_ROLLING_YEAR }

export async function loadPendingGamificationNotifications() {
  const [events, unlocks] = await Promise.all([
    db.xpEvents.orderBy('occurredAt').toArray(),
    db.achievementUnlocks.filter((unlock) => !unlock.notificationSeenAt).toArray(),
  ])
  const unseenXp = events.filter((event) => !event.notificationSeenAt)
  const total = totalXpFromAmounts(events.map((event) => event.amount))
  const before = total - totalXpFromAmounts(unseenXp.map((event) => event.amount))
  const beforeProgress = levelForXp(before)
  const afterProgress = levelForXp(total)
  return { unseenXp, unlocks, beforeProgress, afterProgress, levelUp: afterProgress.level > beforeProgress.level, rankUp: afterProgress.rank.id !== beforeProgress.rank.id }
}

export async function markGamificationNotificationsSeen() {
  const timestamp = iso()
  await db.transaction('rw', [db.xpEvents, db.achievementUnlocks], async () => {
    await db.xpEvents.filter((event) => !event.notificationSeenAt).modify({ notificationSeenAt: timestamp, updatedAt: timestamp })
    await db.achievementUnlocks.filter((unlock) => !unlock.notificationSeenAt).modify({ notificationSeenAt: timestamp, updatedAt: timestamp })
  })
}
