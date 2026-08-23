import type { Exercise, ExerciseCategory, ExerciseTrackingType } from '../../data/models'

export const EXERCISE_CATEGORIES: readonly ExerciseCategory[] = [
  'Chest',
  'Back',
  'Shoulders',
  'Legs',
  'Gluteal',
  'Biceps',
  'Triceps',
  'Forearms',
  'Abs',
]

export const CATEGORY_SUBFILTERS: Record<ExerciseCategory, readonly string[]> = {
  Chest: ['All'],
  Back: ['All'],
  Shoulders: ['All'],
  Legs: ['All'],
  Gluteal: ['All'],
  Biceps: ['All'],
  Triceps: ['All'],
  Forearms: ['All'],
  Abs: ['All'],
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
  return value
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '')
}

function searchForms(value: string) {
  const normalized = normalizeExerciseSearch(value)
  if (!normalized) return []
  return normalized.endsWith('s') && !normalized.endsWith('ss') && normalized.length > 3
    ? [normalized, normalized.slice(0, -1)]
    : [normalized]
}

export function searchExercises(exercises: readonly Exercise[], query: string) {
  const queryForms = searchForms(query)
  if (!queryForms.length) return exercises

  return exercises.filter((exercise) => {
    const searchableText = normalizeExerciseSearch([
      exercise.name,
      ...exercise.aliases,
      exercise.category,
      ...(exercise.categories ?? []),
      ...exercise.primaryMuscles,
      ...exercise.secondaryMuscles,
      exercise.equipment,
    ].join(' '))
    return queryForms.some((form) => searchableText.includes(form))
  })
}

export function filterBySubfilter(exercises: readonly Exercise[], _category: ExerciseCategory, subfilter: string) {
  if (subfilter === 'All') return exercises
  return exercises.filter((exercise) => exercise.muscleRegions.includes(subfilter))
}

export function exerciseBelongsToCategory(exercise: Exercise, category: ExerciseCategory) {
  return exercise.categories?.includes(category) ?? exercise.category === category
}
