import type { FoodLogEntry, FoodMeal } from '../../data/models.ts'
import { FOOD_MEALS } from '../../data/models.ts'
import { nutritionTotals } from '../food/foodModel.ts'
import { dateFromLocalDateKey } from '../../utils/localDate.ts'

export function getGreetingPeriod(referenceDate = new Date()) {
  const hour = referenceDate.getHours()
  if (hour >= 5 && hour < 12) return 'Good morning'
  if (hour >= 12 && hour < 17) return 'Good afternoon'
  return 'Good evening'
}

export function formatHomeGreeting(displayName: string, referenceDate = new Date()) {
  const greeting = getGreetingPeriod(referenceDate)
  return displayName ? `${greeting}, ${displayName}` : greeting
}

export function formatHomeDate(dateKey: string) {
  return new Intl.DateTimeFormat(undefined, { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' }).format(dateFromLocalDateKey(dateKey))
}

export function summarizeTodayFood(entries: readonly FoodLogEntry[]) {
  const totals = nutritionTotals(entries)
  const mealLogged = Object.fromEntries(FOOD_MEALS.map((meal) => [meal, entries.some((entry) => entry.meal === meal)])) as Record<FoodMeal, boolean>
  return { itemCount: entries.length, kcal: totals.kcal ?? 0, protein: totals.protein ?? 0, mealLogged }
}
