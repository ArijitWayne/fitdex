import type { FoodLogEntry, FoodMeal } from '../../data/models.ts'
import { FOOD_MEALS } from '../../data/models.ts'
import { nutritionTotals } from '../food/foodModel.ts'
import type { WorkoutSummary } from '../workout/workoutRepository.ts'

export interface JournalDay {
  workouts: WorkoutSummary[]
  foodEntries: FoodLogEntry[]
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
