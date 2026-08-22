import type { Exercise, ExerciseCategory, ExerciseTrackingType } from '../../data/models'

export const EXERCISE_CATEGORIES: readonly ExerciseCategory[] = [
  'Chest',
  'Back',
  'Shoulders',
  'Arms',
  'Legs',
  'Core',
  'Full Body',
  'Cardio',
  'Mobility',
]

export const CATEGORY_SUBFILTERS: Record<ExerciseCategory, readonly string[]> = {
  Chest: ['All', 'Upper', 'General', 'Lower'],
  Back: ['All', 'Lats', 'Upper Back', 'Lower Back'],
  Shoulders: ['All', 'Front Delts', 'Side Delts', 'Rear Delts'],
  Arms: ['All', 'Biceps', 'Triceps', 'Forearms'],
  Legs: ['All', 'Quads', 'Hamstrings', 'Glutes', 'Calves'],
  Core: ['All', 'Abs', 'Obliques', 'Stability'],
  'Full Body': ['All'],
  Cardio: ['All', 'Running', 'Walking', 'Cycling', 'Rowing', 'Machines', 'Conditioning'],
  Mobility: ['All', 'Upper Body', 'Lower Body', 'Full Body'],
}

export const TRACKING_TYPE_LABELS: Record<ExerciseTrackingType, string> = {
  weight_reps: 'Weight + Reps',
  bodyweight_reps: 'Bodyweight Reps',
  assisted_bodyweight: 'Assisted Reps',
  reps_only: 'Reps',
  duration: 'Duration',
  distance_duration: 'Distance + Time',
  duration_optional_distance: 'Time + Optional Distance',
  weight_distance: 'Weight + Distance',
  duration_reps: 'Time + Reps',
}

export function normalizeExerciseSearch(value: string) {
  return value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').trim().replace(/\s+/g, ' ').toLowerCase()
}

export function searchExercises(exercises: readonly Exercise[], query: string) {
  const normalizedQuery = normalizeExerciseSearch(query)
  if (!normalizedQuery) return exercises

  return exercises.filter((exercise) => normalizeExerciseSearch([
    exercise.name,
    ...exercise.aliases,
    exercise.category,
    ...exercise.primaryMuscles,
    ...exercise.secondaryMuscles,
    exercise.equipment,
  ].join(' ')).includes(normalizedQuery))
}

export function filterBySubfilter(exercises: readonly Exercise[], category: ExerciseCategory, subfilter: string) {
  if (subfilter === 'All') return exercises
  if (category === 'Cardio') return exercises.filter((exercise) => exercise.cardioSubtype === subfilter)
  return exercises.filter((exercise) => exercise.muscleRegions.includes(subfilter))
}
