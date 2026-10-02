import type { ExerciseTrackingType, FoodLogEntry, FoodMeal, WorkoutSet } from '../../data/models.ts'
import { FOOD_MEALS } from '../../data/models.ts'
import { nutritionTotals } from '../food/foodModel.ts'
import type { WorkoutExerciseDetail, WorkoutSummary } from '../workout/workoutRepository.ts'

export interface JournalWorkoutSummary extends WorkoutSummary {
  exerciseDetails?: WorkoutExerciseDetail[]
}

export interface JournalDay {
  workouts: JournalWorkoutSummary[]
  foodEntries: FoodLogEntry[]
  note?: string
}

export interface JournalSummary {
  sessionCount: number
  durationSeconds: number
  kcal: number
  protein: number
}

export function calculateJournalSummary(day: JournalDay): JournalSummary {
  const nutrition = nutritionTotals(day.foodEntries)
  return {
    sessionCount: day.workouts.length,
    durationSeconds: day.workouts.reduce((total, item) => total + (item.workout.durationSeconds ?? 0), 0),
    kcal: nutrition.kcal ?? 0,
    protein: nutrition.protein ?? 0,
  }
}

export function groupFoodEntriesByMeal(entries: readonly FoodLogEntry[]) {
  return Object.fromEntries(FOOD_MEALS.map((meal) => [meal, entries.filter((entry) => entry.meal === meal)])) as Record<FoodMeal, FoodLogEntry[]>
}

export function journalMinutes(seconds: number) {
  return Math.round(Math.max(0, seconds) / 60)
}

export function formatJournalNumber(value: number) {
  return new Intl.NumberFormat(undefined, { maximumFractionDigits: 1 }).format(value)
}

export function formatWorkoutStatus(count: number): string {
  if (count === 0) return 'No workout logged'
  if (count === 1) return '1 workout logged'
  return `${count} workouts logged`
}

export function formatFoodStatus(count: number): string {
  if (count === 0) return 'No food logged'
  if (count === 1) return '1 food item logged'
  return `${count} food items logged`
}

export function formatSetSummary(set: WorkoutSet, type: ExerciseTrackingType, setIndex: number): string {
  const prefix = `Set ${setIndex + 1}: `
  switch (type) {
    case 'weight_reps':
      return `${prefix}${set.weight !== undefined ? `${set.weight}kg×` : ''}${set.reps ?? 0}`
    case 'bodyweight_reps':
    case 'reps_only':
      return `${prefix}${set.reps ?? 0} reps`
    case 'assisted_bodyweight':
      return `${prefix}-${set.weight ?? 0}kg×${set.reps ?? 0}`
    case 'duration':
      return `${prefix}${set.durationSeconds ?? 0}s`
    case 'distance_duration':
      return `${prefix}${set.distance ?? 0}km in ${set.durationSeconds ?? 0}s`
    case 'weight_distance':
      return `${prefix}${set.weight ?? 0}kg · ${set.distance ?? 0}km`
    case 'weight_duration':
      return `${prefix}${set.weight ?? 0}kg · ${set.durationSeconds ?? 0}s`
    case 'duration_reps':
      return `${prefix}${set.durationSeconds ?? 0}s · ${set.reps ?? 0} reps`
    case 'duration_optional_distance':
      return `${prefix}${set.durationSeconds ?? 0}s${set.distance ? ` · ${set.distance}km` : ''}`
    default:
      if (set.weight !== undefined && set.reps !== undefined) return `${prefix}${set.weight}kg×${set.reps}`
      if (set.reps !== undefined) return `${prefix}${set.reps} reps`
      if (set.durationSeconds !== undefined) return `${prefix}${set.durationSeconds}s`
      return `${prefix}Done`
  }
}

export function formatExerciseSets(sets: readonly WorkoutSet[], type: ExerciseTrackingType): string {
  if (!sets.length) return 'No sets logged'
  return sets.map((set, index) => formatSetSummary(set, type, index)).join(' · ')
}
