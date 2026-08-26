import type { Exercise, ExerciseTrackingType, WorkoutSet } from '../../data/models.ts'
import { dateFromLocalDateKey } from '../../utils/localDate.ts'
import { displayDistanceFromKm, displayWeightFromKg, type UnitContext } from '../../utils/units.ts'
import type { ProgressWorkoutFact } from './progressModel.ts'
import { isHistoricalWorkoutSetLogged } from '../workout/workoutModel.ts'

export type PrMetricKind = 'weight' | 'weighted-reps' | 'set-volume' | 'reps' | 'duration' | 'distance' | 'assistance-reps'

export interface PersonalRecordMetric {
  key: string
  label: string
  kind: PrMetricKind
  value: number
  weight?: number
  reps?: number
  durationSeconds?: number
  distance?: number
  dateKey: string
  achievedAt: number
}

export interface ExercisePersonalRecords {
  exerciseId: string
  exerciseName: string
  aliases: string[]
  trackingType: ExerciseTrackingType
  metrics: PersonalRecordMetric[]
  lastPrDateKey: string
  lastPrAt: number
}

interface Candidate {
  set: WorkoutSet
  dateKey: string
  achievedAt: number
}

interface ExerciseCandidates {
  exerciseId: string
  exerciseName: string
  trackingType: ExerciseTrackingType
  latestAt: number
  candidates: Candidate[]
}

export function derivePersonalRecords(workouts: readonly ProgressWorkoutFact[], definitions: ReadonlyMap<string, Exercise | undefined> = new Map()) {
  const grouped = new Map<string, ExerciseCandidates>()
  for (const workout of workouts) {
    const achievedAt = Date.parse(workout.workout.completedAt ?? workout.workout.startedAt)
    for (const { exercise, sets } of workout.exercises) {
      const definition = definitions.get(exercise.exerciseId)
      const current = grouped.get(exercise.exerciseId)
      const trackingType = exercise.trackingTypeSnapshot ?? definition?.trackingType ?? current?.trackingType ?? 'reps_only'
      const completedSets = sets.filter((set) => isHistoricalWorkoutSetLogged(set, trackingType))
      if (!completedSets.length) continue
      const exerciseName = exercise.exerciseNameSnapshot ?? definition?.name ?? current?.exerciseName ?? 'Historical exercise'
      const next = current ?? { exerciseId: exercise.exerciseId, exerciseName, trackingType, latestAt: achievedAt, candidates: [] }
      if (achievedAt >= next.latestAt) {
        next.exerciseName = exerciseName
        next.trackingType = trackingType
        next.latestAt = achievedAt
      }
      next.candidates.push(...completedSets.map((set) => ({ set, dateKey: workout.dateKey, achievedAt })))
      grouped.set(exercise.exerciseId, next)
    }
  }

  const records: ExercisePersonalRecords[] = []
  for (const group of grouped.values()) {
    const metrics = metricsForTrackingType(group.trackingType, group.candidates)
    if (!metrics.length) continue
    const latest = metrics.reduce((result, metric) => metric.achievedAt > result.achievedAt ? metric : result)
    records.push({
      exerciseId: group.exerciseId,
      exerciseName: group.exerciseName,
      aliases: definitions.get(group.exerciseId)?.aliases ?? [],
      trackingType: group.trackingType,
      metrics,
      lastPrDateKey: latest.dateKey,
      lastPrAt: latest.achievedAt,
    })
  }
  return records.sort((left, right) => right.lastPrAt - left.lastPrAt || left.exerciseName.localeCompare(right.exerciseName))
}

export function searchPersonalRecords(records: readonly ExercisePersonalRecords[], query: string) {
  const normalized = query.trim().toLocaleLowerCase()
  if (!normalized) return [...records]
  return records.filter((record) => [record.exerciseName, ...record.aliases].some((name) => name.toLocaleLowerCase().includes(normalized)))
}

export function formatPersonalRecordMetric(metric: PersonalRecordMetric, units: UnitContext) {
  const weight = metric.weight === undefined ? undefined : displayWeightFromKg(metric.weight, units.preference)
  const distance = metric.distance === undefined ? undefined : displayDistanceFromKm(metric.distance, units.preference)
  switch (metric.kind) {
    case 'weight': return `${formatNumber(weight ?? metric.value)} ${units.weightLabel}`
    case 'weighted-reps': return `${formatNumber(weight ?? 0)} ${units.weightLabel} × ${metric.reps} reps`
    case 'set-volume': return `${formatNumber(weight ?? 0)} ${units.weightLabel} × ${metric.reps} = ${formatNumber(displayWeightFromKg(metric.value, units.preference))} ${units.weightLabel}`
    case 'reps': return `${formatNumber(metric.value)} reps`
    case 'duration': return formatRecordDuration(metric.durationSeconds ?? metric.value)
    case 'distance': return `${formatNumber(distance ?? metric.value)} ${units.distanceLabel}`
    case 'assistance-reps': return `${metric.reps} reps · ${formatNumber(weight ?? 0)} ${units.weightLabel} assistance`
  }
}

export function formatPersonalRecordDate(dateKey: string) {
  return new Intl.DateTimeFormat(undefined, { day: 'numeric', month: 'short', year: 'numeric' }).format(dateFromLocalDateKey(dateKey))
}

function metricsForTrackingType(type: ExerciseTrackingType, candidates: readonly Candidate[]): PersonalRecordMetric[] {
  switch (type) {
    case 'weight_reps': return weightRepsMetrics(candidates)
    case 'bodyweight_reps': return highestRepsMetric(candidates)
    case 'assisted_bodyweight': return assistedMetrics(candidates)
    case 'reps_only': return highestRepsMetric(candidates)
    case 'duration': return longestDurationMetric(candidates)
    case 'distance_duration': return [...longestDistanceMetric(candidates), ...longestDurationMetric(candidates)]
    case 'duration_optional_distance': return [...longestDurationMetric(candidates), ...longestDistanceMetric(candidates)]
    case 'weight_distance': return [...heaviestWeightMetric(candidates), ...longestDistanceMetric(candidates)]
    case 'duration_reps': return [...longestDurationMetric(candidates), ...highestRepsMetric(candidates)]
  }
}

function weightRepsMetrics(candidates: readonly Candidate[]) {
  const valid = candidates.filter(({ set }) => positive(set.weight) && positive(set.reps))
  const heaviest = best(valid, (left, right) => compare(left.set.weight!, right.set.weight!) || compare(left.set.reps!, right.set.reps!) || compare(left.achievedAt, right.achievedAt))
  if (!heaviest) return []
  const atHeaviest = valid.filter(({ set }) => set.weight === heaviest.set.weight)
  const bestReps = best(atHeaviest, (left, right) => compare(left.set.reps!, right.set.reps!) || compare(left.achievedAt, right.achievedAt))!
  const bestVolume = best(valid, (left, right) => compare(left.set.weight! * left.set.reps!, right.set.weight! * right.set.reps!) || compare(left.achievedAt, right.achievedAt))!
  return [
    metric('heaviest-weight', 'Heaviest Weight', 'weight', heaviest.set.weight!, heaviest, { weight: heaviest.set.weight, reps: heaviest.set.reps }),
    metric('best-reps-heavy', 'Best Reps at Heaviest Weight', 'weighted-reps', bestReps.set.reps!, bestReps, { weight: bestReps.set.weight, reps: bestReps.set.reps }),
    metric('best-set-volume', 'Best Set Volume', 'set-volume', bestVolume.set.weight! * bestVolume.set.reps!, bestVolume, { weight: bestVolume.set.weight, reps: bestVolume.set.reps }),
  ]
}

function highestRepsMetric(candidates: readonly Candidate[]) {
  const winner = best(candidates.filter(({ set }) => positive(set.reps)), (left, right) => compare(left.set.reps!, right.set.reps!) || compare(left.achievedAt, right.achievedAt))
  return winner ? [metric('highest-reps', 'Highest Reps', 'reps', winner.set.reps!, winner, { reps: winner.set.reps })] : []
}

function assistedMetrics(candidates: readonly Candidate[]) {
  const reps = highestRepsMetric(candidates)
  const valid = candidates.filter(({ set }) => positive(set.reps) && finiteNonNegative(set.weight))
  const winner = best(valid, (left, right) => compare(left.set.reps!, right.set.reps!) || compare(right.set.weight!, left.set.weight!) || compare(left.achievedAt, right.achievedAt))
  return winner ? [...reps, metric('best-assisted-set', 'Lowest Assistance at Best Reps', 'assistance-reps', winner.set.reps!, winner, { weight: winner.set.weight, reps: winner.set.reps })] : reps
}

function heaviestWeightMetric(candidates: readonly Candidate[]) {
  const winner = best(candidates.filter(({ set }) => positive(set.weight)), (left, right) => compare(left.set.weight!, right.set.weight!) || compare(left.achievedAt, right.achievedAt))
  return winner ? [metric('heaviest-weight', 'Heaviest Weight', 'weight', winner.set.weight!, winner, { weight: winner.set.weight })] : []
}

function longestDurationMetric(candidates: readonly Candidate[]) {
  const winner = best(candidates.filter(({ set }) => positive(set.durationSeconds)), (left, right) => compare(left.set.durationSeconds!, right.set.durationSeconds!) || compare(left.achievedAt, right.achievedAt))
  return winner ? [metric('longest-duration', 'Longest Duration', 'duration', winner.set.durationSeconds!, winner, { durationSeconds: winner.set.durationSeconds })] : []
}

function longestDistanceMetric(candidates: readonly Candidate[]) {
  const winner = best(candidates.filter(({ set }) => positive(set.distance)), (left, right) => compare(left.set.distance!, right.set.distance!) || compare(left.achievedAt, right.achievedAt))
  return winner ? [metric('longest-distance', 'Longest Distance', 'distance', winner.set.distance!, winner, { distance: winner.set.distance })] : []
}

function metric(key: string, label: string, kind: PrMetricKind, value: number, candidate: Candidate, fields: Partial<PersonalRecordMetric>): PersonalRecordMetric {
  return { key, label, kind, value, dateKey: candidate.dateKey, achievedAt: candidate.achievedAt, ...fields }
}

function best(candidates: readonly Candidate[], comparator: (left: Candidate, right: Candidate) => number) {
  return candidates.reduce<Candidate | undefined>((winner, candidate) => !winner || comparator(candidate, winner) > 0 ? candidate : winner, undefined)
}

function compare(left: number, right: number) { return left - right }
function positive(value: number | undefined): value is number { return value !== undefined && Number.isFinite(value) && value > 0 }
function finiteNonNegative(value: number | undefined): value is number { return value !== undefined && Number.isFinite(value) && value >= 0 }
function formatNumber(value: number) { return new Intl.NumberFormat(undefined, { maximumFractionDigits: 1 }).format(value) }

function formatRecordDuration(seconds: number) {
  const safe = Math.round(seconds)
  const hours = Math.floor(safe / 3600)
  const minutes = Math.floor((safe % 3600) / 60)
  const remainder = safe % 60
  if (hours) return `${hours}h${minutes ? ` ${minutes}m` : ''}`
  if (minutes) return `${minutes}m${remainder ? ` ${remainder}s` : ''}`
  return `${remainder}s`
}
