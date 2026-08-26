import type { FoodLogEntry, Workout, WorkoutExercise, WorkoutSet } from '../../data/models.ts'
import { dateFromLocalDateKey, getLocalDateKey, shiftLocalDateKey } from '../../utils/localDate.ts'
import { isHistoricalWorkoutSetLogged } from '../workout/workoutModel.ts'

export const PROGRESS_PERIODS = ['7d', '30d', '90d', 'all'] as const
export type ProgressPeriod = (typeof PROGRESS_PERIODS)[number]

export interface ProgressExerciseFact {
  exercise: WorkoutExercise
  sets: WorkoutSet[]
}

export interface ProgressWorkoutFact {
  workout: Workout
  dateKey: string
  exercises: ProgressExerciseFact[]
}

export interface ProgressPeriodRange {
  startDateKey?: string
  endDateKey: string
  previousStartDateKey?: string
  previousEndDateKey?: string
}

export interface TrendBucket {
  key: string
  label: string
  startDateKey: string
  endDateKey: string
  value: number
}

export interface NutritionSummary {
  loggedDays: number
  averageKcal: number
  averageProtein: number
}

const PERIOD_DAYS: Record<Exclude<ProgressPeriod, 'all'>, number> = { '7d': 7, '30d': 30, '90d': 90 }

export function getProgressPeriodRange(period: ProgressPeriod, referenceDateKey = getLocalDateKey()): ProgressPeriodRange {
  if (period === 'all') return { endDateKey: referenceDateKey }
  const days = PERIOD_DAYS[period]
  const startDateKey = shiftLocalDateKey(referenceDateKey, -(days - 1))
  return {
    startDateKey,
    endDateKey: referenceDateKey,
    previousStartDateKey: shiftLocalDateKey(startDateKey, -days),
    previousEndDateKey: shiftLocalDateKey(startDateKey, -1),
  }
}

export function dateKeyInRange(dateKey: string, startDateKey: string | undefined, endDateKey: string) {
  return (!startDateKey || dateKey >= startDateKey) && dateKey <= endDateKey
}

export function completedWorkoutDateKey(workout: Workout) {
  return getLocalDateKey(new Date(workout.completedAt ?? workout.startedAt))
}

export function calculateTrainingVolume(workouts: readonly ProgressWorkoutFact[]) {
  let total = 0
  for (const workout of workouts) {
    for (const { exercise, sets } of workout.exercises) {
      if (exercise.trackingTypeSnapshot !== 'weight_reps') continue
      for (const set of sets) {
        if (isHistoricalWorkoutSetLogged(set, 'weight_reps')) total += set.weight! * set.reps!
      }
    }
  }
  return total
}

export function calculateTrainingSeconds(workouts: readonly ProgressWorkoutFact[]) {
  return workouts.reduce((total, fact) => total + (isFiniteMetric(fact.workout.durationSeconds) ? fact.workout.durationSeconds : 0), 0)
}

export function formatTrainingTime(seconds: number) {
  const minutes = Math.round(Math.max(0, seconds) / 60)
  const hours = Math.floor(minutes / 60)
  const remaining = minutes % 60
  if (!hours) return `${minutes} min`
  return remaining ? `${hours}h ${remaining}m` : `${hours}h`
}

export function calculateVolumeComparison(current: number, previous: number, period: ProgressPeriod) {
  if (period === 'all') return { kind: 'omitted' as const }
  if (previous === 0) return { kind: 'no-previous' as const }
  return { kind: 'percent' as const, percent: ((current - previous) / previous) * 100 }
}

export function calculateNutritionSummary(entries: readonly FoodLogEntry[]): NutritionSummary {
  const byDate = groupFoodByDate(entries)
  let kcal = 0
  let protein = 0
  for (const dayEntries of byDate.values()) {
    for (const entry of dayEntries) {
      if (isFiniteMetric(entry.kcal)) kcal += entry.kcal
      if (isFiniteMetric(entry.protein)) protein += entry.protein
    }
  }
  const loggedDays = byDate.size
  return {
    loggedDays,
    averageKcal: loggedDays ? kcal / loggedDays : 0,
    averageProtein: loggedDays ? protein / loggedDays : 0,
  }
}

export function buildWorkoutFrequencyTrend(workouts: readonly ProgressWorkoutFact[], period: ProgressPeriod, referenceDateKey: string) {
  const buckets = createBuckets(period, referenceDateKey, workouts.map((workout) => workout.dateKey))
  return buckets.map((bucket) => ({ ...bucket, value: workouts.filter((workout) => dateKeyInRange(workout.dateKey, bucket.startDateKey, bucket.endDateKey)).length }))
}

export function buildVolumeTrend(workouts: readonly ProgressWorkoutFact[], period: ProgressPeriod, referenceDateKey: string) {
  const buckets = createBuckets(period, referenceDateKey, workouts.map((workout) => workout.dateKey))
  return buckets.map((bucket) => ({ ...bucket, value: calculateTrainingVolume(workouts.filter((workout) => dateKeyInRange(workout.dateKey, bucket.startDateKey, bucket.endDateKey))) }))
}

/** Bucket values are average calories across logged-food days in that bucket. */
export function buildNutritionTrend(entries: readonly FoodLogEntry[], period: ProgressPeriod, referenceDateKey: string) {
  const buckets = createBuckets(period, referenceDateKey, entries.map((entry) => entry.date))
  return buckets.map((bucket) => {
    const bucketEntries = entries.filter((entry) => dateKeyInRange(entry.date, bucket.startDateKey, bucket.endDateKey))
    return { ...bucket, value: calculateNutritionSummary(bucketEntries).averageKcal }
  })
}

export function createBuckets(period: ProgressPeriod, referenceDateKey: string, sourceDateKeys: readonly string[]): TrendBucket[] {
  if (period === 'all') return createMonthlyBuckets(sourceDateKeys)
  const range = getProgressPeriodRange(period, referenceDateKey)
  const chunkDays = period === '7d' ? 1 : period === '30d' ? 5 : 7
  const buckets: TrendBucket[] = []
  let start = range.startDateKey!
  while (start <= range.endDateKey) {
    const end = minDateKey(shiftLocalDateKey(start, chunkDays - 1), range.endDateKey)
    buckets.push({ key: start, label: bucketLabel(start, end, chunkDays === 1), startDateKey: start, endDateKey: end, value: 0 })
    start = shiftLocalDateKey(end, 1)
  }
  return buckets
}

function createMonthlyBuckets(sourceDateKeys: readonly string[]) {
  if (!sourceDateKeys.length) return []
  const earliest = sourceDateKeys.reduce((minimum, key) => key < minimum ? key : minimum)
  const latest = sourceDateKeys.reduce((maximum, key) => key > maximum ? key : maximum)
  const cursor = dateFromLocalDateKey(`${earliest.slice(0, 7)}-01`)
  const lastMonth = latest.slice(0, 7)
  const buckets: TrendBucket[] = []
  while (getLocalDateKey(cursor).slice(0, 7) <= lastMonth) {
    const start = getLocalDateKey(cursor)
    const endDate = new Date(cursor.getFullYear(), cursor.getMonth() + 1, 0)
    const end = getLocalDateKey(endDate)
    buckets.push({ key: start.slice(0, 7), label: new Intl.DateTimeFormat(undefined, { month: 'short', year: '2-digit' }).format(cursor), startDateKey: start, endDateKey: end, value: 0 })
    cursor.setMonth(cursor.getMonth() + 1)
  }
  return buckets
}

function bucketLabel(start: string, end: string, singleDay: boolean) {
  const options: Intl.DateTimeFormatOptions = singleDay ? { weekday: 'short' } : { day: 'numeric', month: 'short' }
  return new Intl.DateTimeFormat(undefined, options).format(dateFromLocalDateKey(singleDay ? start : end))
}

function groupFoodByDate(entries: readonly FoodLogEntry[]) {
  const result = new Map<string, FoodLogEntry[]>()
  for (const entry of entries) result.set(entry.date, [...(result.get(entry.date) ?? []), entry])
  return result
}

function minDateKey(left: string, right: string) {
  return left < right ? left : right
}

function isFiniteMetric(value: number | undefined): value is number {
  return value !== undefined && Number.isFinite(value)
}
