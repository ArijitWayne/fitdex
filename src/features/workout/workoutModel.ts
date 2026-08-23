import type { ExerciseTrackingType, WorkoutSet } from '../../data/models'

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

export function isMeaningfulSet(set: Pick<WorkoutSet, 'reps' | 'weight' | 'durationSeconds' | 'distance'>) {
  return set.reps !== undefined || set.weight !== undefined || set.durationSeconds !== undefined || set.distance !== undefined
}

export function elapsedSeconds(startedAt: string, now = Date.now()) {
  const elapsed = now - Date.parse(startedAt)
  return Number.isFinite(elapsed) ? Math.max(0, Math.floor(elapsed / 1000)) : 0
}

export function formatDuration(seconds: number) {
  const safe = Math.max(0, Math.floor(seconds))
  const hours = Math.floor(safe / 3600)
  const minutes = Math.floor((safe % 3600) / 60)
  const remainder = safe % 60
  return [hours, minutes, remainder].map((part) => String(part).padStart(2, '0')).join(':')
}

export function calculateVolume(sets: readonly WorkoutSet[]) {
  return sets.reduce((total, set) => total + (set.completed && set.weight !== undefined && set.reps !== undefined ? set.weight * set.reps : 0), 0)
}

export function formatPreviousSet(set: WorkoutSet | undefined, type: ExerciseTrackingType, weightUnit: 'kg' | 'lb', distanceUnit: 'km' | 'mi') {
  if (!set) return '—'
  const fields = getTrackingFields(type)
  const parts: string[] = []
  if (fields.weight && set.weight !== undefined) parts.push(`${weightUnit === 'lb' ? Number((set.weight * 2.2046226218).toFixed(2)) : set.weight} ${weightUnit}`)
  if (fields.reps && set.reps !== undefined) parts.push(`${set.reps} reps`)
  if (fields.duration && set.durationSeconds !== undefined) parts.push(`${set.durationSeconds} sec`)
  if (fields.distance && set.distance !== undefined) parts.push(`${distanceUnit === 'mi' ? Number((set.distance * 0.6213711922).toFixed(2)) : set.distance} ${distanceUnit}`)
  return parts.length ? parts.join(' · ') : '—'
}
