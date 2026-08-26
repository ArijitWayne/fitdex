import type { ExerciseTrackingType, Workout, WorkoutExercise, WorkoutSet } from '../../data/models'
import { displayDistanceFromKm, displayWeightFromKg } from '../../utils/units.ts'

export const DEFAULT_AD_HOC_SETS = 3
export const DEFAULT_REST_SECONDS = 90
export const MAX_WORKOUT_NAME_LENGTH = 80

export interface TrackingFields {
  weight: boolean
  reps: boolean
  duration: boolean
  distance: boolean
}

export function getTrackingFields(type: ExerciseTrackingType): TrackingFields {
  return {
    weight: type === 'weight_reps' || type === 'assisted_bodyweight' || type === 'weight_distance',
    reps: type === 'weight_reps' || type === 'bodyweight_reps' || type === 'assisted_bodyweight' || type === 'reps_only' || type === 'duration_reps',
    duration: type === 'duration' || type === 'distance_duration' || type === 'duration_optional_distance' || type === 'duration_reps',
    distance: type === 'distance_duration' || type === 'duration_optional_distance' || type === 'weight_distance',
  }
}

export function normalizeWorkoutName(name: string) {
  const normalized = name.trim().replace(/\s+/g, ' ')
  if (!normalized) throw new Error('Workout name is required.')
  if (normalized.length > MAX_WORKOUT_NAME_LENGTH) throw new Error(`Workout name must be ${MAX_WORKOUT_NAME_LENGTH} characters or fewer.`)
  return normalized
}

export function parseWorkoutNumber(value: string, field: 'weight' | 'reps' | 'durationSeconds' | 'distance') {
  if (value.trim() === '') return undefined
  const parsed = Number(value)
  if (!Number.isFinite(parsed)) throw new Error('Enter a valid number.')
  if (parsed < 0) throw new Error('Values cannot be negative.')
  if (field === 'reps' && (!Number.isInteger(parsed) || parsed < 1)) throw new Error('Reps must be a positive whole number.')
  return parsed
}

export type WorkoutSetMetric = 'weight' | 'reps' | 'durationSeconds' | 'distance'
export type WorkoutSetLogState = 'empty' | 'incomplete' | 'logged'

const REQUIRED_SET_METRICS: Record<ExerciseTrackingType, readonly WorkoutSetMetric[]> = {
  weight_reps: ['weight', 'reps'],
  bodyweight_reps: ['reps'],
  assisted_bodyweight: ['weight', 'reps'],
  reps_only: ['reps'],
  duration: ['durationSeconds'],
  distance_duration: ['distance', 'durationSeconds'],
  duration_optional_distance: ['durationSeconds'],
  weight_distance: ['weight', 'distance'],
  duration_reps: ['durationSeconds', 'reps'],
}

const SET_METRIC_LABELS: Record<WorkoutSetMetric, string> = {
  weight: 'weight', reps: 'reps', durationSeconds: 'duration', distance: 'distance',
}

function relevantSetMetrics(type: ExerciseTrackingType) {
  const fields = getTrackingFields(type)
  return (Object.keys(SET_METRIC_LABELS) as WorkoutSetMetric[]).filter((metric) => fields[metric === 'durationSeconds' ? 'duration' : metric])
}

function isValidSetMetric(metric: WorkoutSetMetric, value: number | undefined, type: ExerciseTrackingType) {
  if (value === undefined || !Number.isFinite(value)) return false
  if (metric === 'reps') return Number.isInteger(value) && value > 0
  if (metric === 'weight' && type === 'assisted_bodyweight') return value >= 0
  return value > 0
}

/** The single tracking-aware source of truth for active set logging. */
export function getWorkoutSetLogState(set: Pick<WorkoutSet, WorkoutSetMetric>, type: ExerciseTrackingType): WorkoutSetLogState {
  const relevant = relevantSetMetrics(type)
  if (!relevant.some((metric) => set[metric] !== undefined)) return 'empty'
  const requiredValid = REQUIRED_SET_METRICS[type].every((metric) => isValidSetMetric(metric, set[metric], type))
  const optionalValid = relevant.filter((metric) => !REQUIRED_SET_METRICS[type].includes(metric)).every((metric) => set[metric] === undefined || isValidSetMetric(metric, set[metric], type))
  return requiredValid && optionalValid ? 'logged' : 'incomplete'
}

export function isWorkoutSetLogged(set: Pick<WorkoutSet, WorkoutSetMetric>, type: ExerciseTrackingType) {
  return getWorkoutSetLogState(set, type) === 'logged'
}

export function hasMeaningfulWorkoutSetData(sets: readonly Pick<WorkoutSet, WorkoutSetMetric>[], type: ExerciseTrackingType) {
  return sets.some((set) => getWorkoutSetLogState(set, type) !== 'empty')
}

/** Legacy `completed: false` remains an opt-out for existing immutable history. */
export function isHistoricalWorkoutSetLogged(set: WorkoutSet, type: ExerciseTrackingType) {
  return set.completed && isWorkoutSetLogged(set, type)
}

export function getMissingWorkoutSetFields(set: Pick<WorkoutSet, WorkoutSetMetric>, type: ExerciseTrackingType) {
  const missing = REQUIRED_SET_METRICS[type].filter((metric) => !isValidSetMetric(metric, set[metric], type))
  if (type === 'duration_optional_distance' && set.distance !== undefined && !isValidSetMetric('distance', set.distance, type)) missing.push('distance')
  return missing.map((metric) => SET_METRIC_LABELS[metric])
}

export interface WorkoutFinishIssue {
  exerciseId: string
  exerciseName: string
  kind: 'zero-sets' | 'empty-set' | 'incomplete-set'
  setNumber?: number
  missingFields?: string[]
}

export interface WorkoutFinishValidation {
  valid: boolean
  loggedSetCount: number
  totalSetCount: number
  issues: WorkoutFinishIssue[]
}

export function validateWorkoutForFinish(exercises: readonly { exercise: Pick<WorkoutExercise, 'id' | 'exerciseNameSnapshot' | 'trackingTypeSnapshot'>; sets: readonly WorkoutSet[] }[]): WorkoutFinishValidation {
  const issues: WorkoutFinishIssue[] = []
  let loggedSetCount = 0
  let totalSetCount = 0
  for (const { exercise, sets } of exercises) {
    const exerciseName = exercise.exerciseNameSnapshot ?? 'Historical exercise'
    const trackingType = exercise.trackingTypeSnapshot ?? 'reps_only'
    totalSetCount += sets.length
    if (!sets.length) issues.push({ exerciseId: exercise.id, exerciseName, kind: 'zero-sets' })
    sets.forEach((set, index) => {
      const state = getWorkoutSetLogState(set, trackingType)
      if (state === 'logged') loggedSetCount += 1
      else issues.push({
        exerciseId: exercise.id,
        exerciseName,
        kind: state === 'empty' ? 'empty-set' : 'incomplete-set',
        setNumber: index + 1,
        missingFields: state === 'incomplete' ? getMissingWorkoutSetFields(set, trackingType) : undefined,
      })
    })
  }
  return { valid: exercises.length > 0 && loggedSetCount > 0 && issues.length === 0, loggedSetCount, totalSetCount, issues }
}

export function elapsedSeconds(startedAt: string, now = Date.now()) {
  const elapsed = now - Date.parse(startedAt)
  return Number.isFinite(elapsed) ? Math.max(0, Math.floor(elapsed / 1000)) : 0
}

export function isWorkoutTimerPaused(workout: Pick<Workout, 'status' | 'timerState'>) {
  return workout.status === 'active' && workout.timerState === 'paused'
}

function safeStoredSeconds(value: number | undefined) {
  return Number.isFinite(value) ? Math.max(0, Math.floor(value ?? 0)) : 0
}

/** Reconstructs the active duration without writing timer ticks to persistence. */
export function getWorkoutDuration(
  workout: Pick<Workout, 'status' | 'startedAt' | 'timerState' | 'accumulatedActiveSeconds' | 'lastResumedAt' | 'durationSeconds'>,
  now = Date.now(),
) {
  if (workout.status !== 'active') return safeStoredSeconds(workout.durationSeconds)
  const accumulated = safeStoredSeconds(workout.accumulatedActiveSeconds)
  if (workout.timerState === 'paused') return accumulated
  return accumulated + elapsedSeconds(workout.lastResumedAt ?? workout.startedAt, now)
}

export function createPausedTimerState(workout: Workout, now = Date.now()): Pick<Workout, 'timerState' | 'accumulatedActiveSeconds'> {
  if (workout.status !== 'active') throw new Error('Only an active workout timer can be paused.')
  if (workout.timerState === 'paused') throw new Error('Workout timer is already paused.')
  return { timerState: 'paused', accumulatedActiveSeconds: getWorkoutDuration(workout, now) }
}

export function createResumedTimerState(workout: Workout, now = Date.now()): Pick<Workout, 'timerState' | 'lastResumedAt'> {
  if (workout.status !== 'active') throw new Error('Only an active workout timer can be resumed.')
  if (workout.timerState !== 'paused') throw new Error('Workout timer is already running.')
  return { timerState: 'running', lastResumedAt: new Date(now).toISOString() }
}

export function getFinalWorkoutDuration(workout: Workout, now = Date.now()) {
  if (workout.status !== 'active') throw new Error('Only an active workout can be finished.')
  return getWorkoutDuration(workout, now)
}

export function formatDuration(seconds: number) {
  const safe = Math.max(0, Math.floor(seconds))
  const hours = Math.floor(safe / 3600)
  const minutes = Math.floor((safe % 3600) / 60)
  const remainder = safe % 60
  return [hours, minutes, remainder].map((part) => String(part).padStart(2, '0')).join(':')
}

export function calculateVolume(sets: readonly WorkoutSet[]) {
  return sets.reduce((total, set) => total + (isHistoricalWorkoutSetLogged(set, 'weight_reps') ? set.weight! * set.reps! : 0), 0)
}

export function formatPreviousSet(set: WorkoutSet | undefined, type: ExerciseTrackingType, weightUnit: 'kg' | 'lb', distanceUnit: 'km' | 'mi') {
  if (!set) return '—'
  const fields = getTrackingFields(type)
  const parts: string[] = []
  if (fields.weight && set.weight !== undefined) parts.push(`${Number(displayWeightFromKg(set.weight, weightUnit === 'lb' ? 'imperial' : 'metric').toFixed(2))} ${weightUnit}`)
  if (fields.reps && set.reps !== undefined) parts.push(`${set.reps} reps`)
  if (fields.duration && set.durationSeconds !== undefined) parts.push(`${set.durationSeconds} sec`)
  if (fields.distance && set.distance !== undefined) parts.push(`${Number(displayDistanceFromKm(set.distance, distanceUnit === 'mi' ? 'imperial' : 'metric').toFixed(2))} ${distanceUnit}`)
  return parts.length ? parts.join(' · ') : '—'
}
