import type { FoodMeal, FoodNutrition, PredefinedFoodCategoryId } from '../../data/models.ts'

export const FOOD_MEAL_LABELS: Record<FoodMeal, string> = {
  breakfast: 'Breakfast', lunch: 'Lunch', supper: 'Supper', dinner: 'Dinner',
}

export const PREDEFINED_FOOD_CATEGORIES: ReadonlyArray<{ id: PredefinedFoodCategoryId; name: string }> = [
  { id: 'chicken', name: 'Chicken' },
  { id: 'eggs', name: 'Eggs' },
  { id: 'meat', name: 'Meat' },
  { id: 'fish-seafood', name: 'Fish & Seafood' },
  { id: 'dairy', name: 'Dairy' },
  { id: 'grains-rice', name: 'Grains & Rice' },
  { id: 'flour-wheat', name: 'Flour & Wheat' },
  { id: 'fruits', name: 'Fruits' },
  { id: 'vegetables', name: 'Vegetables' },
  { id: 'nuts-seeds', name: 'Nuts & Seeds' },
  { id: 'drinks', name: 'Drinks' },
  { id: 'supplements', name: 'Supplements' },
  { id: 'desserts-snacks', name: 'Desserts / Snacks' },
  { id: 'processed-foods', name: 'Processed Foods' },
  { id: 'junk-food', name: 'Junk Food' },
  { id: 'other', name: 'Other' },
]

export const CUSTOM_CATEGORY_COLORS = [
  'amber', 'coral', 'crimson', 'plum', 'violet', 'blue', 'teal', 'green', 'olive', 'slate',
] as const
export type CustomCategoryColor = (typeof CUSTOM_CATEGORY_COLORS)[number]

export function isCustomCategoryColor(value: string | undefined): value is CustomCategoryColor {
  return Boolean(value && (CUSTOM_CATEGORY_COLORS as readonly string[]).includes(value))
}

export function resolveCustomCategoryColor(value?: string): CustomCategoryColor | undefined {
  return isCustomCategoryColor(value) ? value : undefined
}

/** CSS value shared by custom-category swatches and every bowl-icon renderer. */
export function customCategoryCssColor(value?: string) {
  const token = resolveCustomCategoryColor(value)
  return token ? `var(--food-custom-${token})` : 'var(--color-metal)'
}

export const NUTRITION_FIELDS = ['kcal', 'protein', 'carbs', 'fat', 'fiber', 'sugar', 'saturatedFat', 'sodium'] as const
export type NutritionField = (typeof NUTRITION_FIELDS)[number]

export function normalizeFoodName(value: string) {
  return value.normalize('NFKC').trim().toLocaleLowerCase().replace(/[\p{P}\p{S}]+/gu, ' ').replace(/\s+/g, ' ')
}

export function normalizeDate(date: Date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

export function dateFromKey(date: string) {
  const [year, month, day] = date.split('-').map(Number)
  return new Date(year, month - 1, day)
}

export function shiftDate(date: string, amount: number) {
  const next = dateFromKey(date)
  next.setDate(next.getDate() + amount)
  return normalizeDate(next)
}

export function validateNutrition(nutrition: FoodNutrition) {
  for (const field of NUTRITION_FIELDS) {
    const value = nutrition[field]
    if (value !== undefined && (!Number.isFinite(value) || value < 0)) throw new Error('Nutrition values must be finite and cannot be negative.')
  }
}

export function nutritionTotals(rows: readonly FoodNutrition[]): FoodNutrition {
  const totals: FoodNutrition = {}
  for (const field of NUTRITION_FIELDS) {
    const values = rows.map((row) => row[field]).filter((value): value is number => value !== undefined)
    if (values.length) totals[field] = values.reduce((sum, value) => sum + value, 0)
  }
  return totals
}

export function parseOptionalNutrition(value: string): number | undefined {
  if (value.trim() === '') return undefined
  const parsed = Number(value)
  if (!Number.isFinite(parsed) || parsed < 0) throw new Error('Enter a valid non-negative number.')
  return parsed
}

export function categoryName(categoryId: PredefinedFoodCategoryId) {
  return PREDEFINED_FOOD_CATEGORIES.find((category) => category.id === categoryId)?.name ?? 'Other'
}
