import { db } from '../../data/database.ts'
import { PREDEFINED_FOOD_CATEGORY_IDS, type CustomFoodCategory, type FoodLogEntry, type FoodMeal, type FoodNutrition, type PredefinedFoodCategoryId, type RememberedFood } from '../../data/models.ts'
import { createId } from '../../utils/createId.ts'
import { categoryName, normalizeFoodName, nutritionTotals, validateNutrition } from './foodModel.ts'
import { reconcileFoodGamification } from '../gamification/gamificationRepository.ts'

export interface FoodDraft extends FoodNutrition {
  name: string
  categoryId: PredefinedFoodCategoryId
  customCategoryId?: string
}

function recordId(prefix: string) { return `${prefix}:${createId()}` }
function nowIso() { return new Date().toISOString() }

export async function listFoodEntries(date: string) {
  return db.foodLogEntries.where('date').equals(date).sortBy('createdAt')
}

export async function listMealEntries(date: string, meal: FoodMeal) {
  return db.foodLogEntries.where('[date+meal]').equals([date, meal]).sortBy('createdAt')
}

export async function getDailyTotals(date: string) { return nutritionTotals(await listFoodEntries(date)) }
export async function getMealTotals(date: string, meal: FoodMeal) { return nutritionTotals(await listMealEntries(date, meal)) }

export async function getRememberedFood(id: string) { return db.rememberedFoods.get(id) }

export async function searchRememberedFoods(query: string, meal: FoodMeal, limit = 8) {
  const normalized = normalizeFoodName(query)
  const rows = normalized
    ? await db.rememberedFoods.filter((food) => food.normalizedName.includes(normalized)).toArray()
    : await db.rememberedFoods.orderBy('lastUsedAt').reverse().limit(40).toArray()
  return rows.sort((left, right) => {
    const mealDifference = (right.mealUsage[meal] ?? 0) - (left.mealUsage[meal] ?? 0)
    if (mealDifference) return mealDifference
    const recencyDifference = right.lastUsedAt.localeCompare(left.lastUsedAt)
    return recencyDifference || right.timesUsed - left.timesUsed || left.name.localeCompare(right.name)
  }).slice(0, limit)
}

export async function getRecentFoods(meal: FoodMeal, limit = 8) { return searchRememberedFoods('', meal, limit) }

export async function getFrequentFoods(meal: FoodMeal, limit = 8) {
  const rows = await db.rememberedFoods.orderBy('timesUsed').reverse().limit(40).toArray()
  return rows.sort((left, right) =>
    (right.mealUsage[meal] ?? 0) - (left.mealUsage[meal] ?? 0)
    || right.timesUsed - left.timesUsed
    || right.lastUsedAt.localeCompare(left.lastUsedAt),
  ).slice(0, limit)
}

async function resolveCategory(draft: FoodDraft) {
  if (draft.categoryId !== 'other' || !draft.customCategoryId) {
    return { categoryName: categoryName(draft.categoryId), categoryKind: 'predefined' as const }
  }
  const custom = await db.customFoodCategories.get(draft.customCategoryId)
  if (!custom) throw new Error('Custom category not found.')
  return {
    categoryName: custom.name, categoryKind: 'custom' as const, customCategoryId: custom.id,
    customCategoryName: custom.name, customCategoryColor: custom.color,
  }
}

function nutritionFrom(draft: FoodNutrition): FoodNutrition {
  const nutrition: FoodNutrition = {}
  for (const key of ['kcal', 'protein', 'carbs', 'fat', 'fiber', 'sugar', 'saturatedFat', 'sodium'] as const) {
    if (draft[key] !== undefined) nutrition[key] = draft[key]
  }
  return nutrition
}

export async function addFoodLog(date: string, meal: FoodMeal, draft: FoodDraft) {
  const name = draft.name.trim().replace(/\s+/g, ' ')
  const normalizedName = normalizeFoodName(name)
  if (!name || !normalizedName) throw new Error('Food name is required.')
  validateNutrition(draft)
  const entry = await db.transaction('rw', [db.foodLogEntries, db.rememberedFoods, db.customFoodCategories], async () => {
    const timestamp = nowIso()
    const category = await resolveCategory(draft)
    let remembered = await db.rememberedFoods.where('normalizedName').equals(normalizedName).first()
    if (remembered) {
      remembered = {
        ...remembered, timesUsed: remembered.timesUsed + 1, lastUsedAt: timestamp,
        mealUsage: { ...remembered.mealUsage, [meal]: (remembered.mealUsage[meal] ?? 0) + 1 }, updatedAt: timestamp,
      }
      await db.rememberedFoods.put(remembered)
    } else {
      remembered = {
        id: recordId('remembered-food'), name, normalizedName, categoryId: draft.categoryId,
        customCategoryId: category.customCategoryId, customCategoryName: category.customCategoryName,
        customCategoryColor: category.customCategoryColor, ...nutritionFrom(draft), timesUsed: 1, lastUsedAt: timestamp,
        mealUsage: { [meal]: 1 }, createdAt: timestamp, updatedAt: timestamp,
      }
      await db.rememberedFoods.add(remembered)
    }
    const entry: FoodLogEntry = {
      id: recordId('food-log'), date, meal, rememberedFoodId: remembered.id, foodName: name,
      categoryId: draft.categoryId, ...category, ...nutritionFrom(draft), createdAt: timestamp, updatedAt: timestamp,
    }
    await db.foodLogEntries.add(entry)
    return entry
  })
  await reconcileFoodGamification()
  return entry
}

export async function editFoodLog(id: string, draft: FoodDraft) {
  const name = draft.name.trim().replace(/\s+/g, ' ')
  if (!name) throw new Error('Food name is required.')
  validateNutrition(draft)
  const updated = await db.transaction('rw', [db.foodLogEntries, db.customFoodCategories], async () => {
    const existing = await db.foodLogEntries.get(id)
    if (!existing) throw new Error('Food entry not found.')
    const category = await resolveCategory(draft)
    const updated: FoodLogEntry = {
      ...existing, foodName: name, categoryId: draft.categoryId, ...category, ...nutritionFrom(draft), updatedAt: nowIso(),
    }
    if (category.categoryKind === 'predefined') {
      delete updated.customCategoryId
      delete updated.customCategoryName
      delete updated.customCategoryColor
    }
    for (const key of ['kcal', 'protein', 'carbs', 'fat', 'fiber', 'sugar', 'saturatedFat', 'sodium'] as const) {
      if (draft[key] === undefined) delete updated[key]
    }
    await db.foodLogEntries.put(updated)
    return updated
  })
  await reconcileFoodGamification()
  return updated
}

export async function deleteFoodLog(id: string) { await db.foodLogEntries.delete(id); await reconcileFoodGamification() }

export async function listCustomCategories() { return db.customFoodCategories.orderBy('name').toArray() }

export async function createCustomCategory(nameValue: string, color: string) {
  const name = nameValue.trim().replace(/\s+/g, ' ')
  const normalizedName = normalizeFoodName(name)
  if (!normalizedName) throw new Error('Category name is required.')
  const existing = await db.customFoodCategories.where('normalizedName').equals(normalizedName).first()
  if (existing) return existing
  const timestamp = nowIso()
  const category: CustomFoodCategory = { id: recordId('food-category'), name, normalizedName, color, createdAt: timestamp, updatedAt: timestamp }
  await db.customFoodCategories.add(category)
  return category
}

export async function updateCustomCategory(id: string, nameValue: string, color: string) {
  const existing = await db.customFoodCategories.get(id)
  if (!existing) throw new Error('Custom category not found.')
  const name = nameValue.trim().replace(/\s+/g, ' ')
  const normalizedName = normalizeFoodName(name)
  if (!normalizedName) throw new Error('Category name is required.')
  const duplicate = await db.customFoodCategories.where('normalizedName').equals(normalizedName).first()
  if (duplicate && duplicate.id !== id) throw new Error('A category with this name already exists.')
  const updated = { ...existing, name, normalizedName, color, updatedAt: nowIso() }
  await db.customFoodCategories.put(updated)
  return updated
}

export async function deleteCustomFoodCategory(id: string) {
  if ((PREDEFINED_FOOD_CATEGORY_IDS as readonly string[]).includes(id)) throw new Error('Predefined food categories cannot be deleted.')
  await db.transaction('rw', [db.customFoodCategories, db.rememberedFoods, db.foodLogEntries], async () => {
    const category = await db.customFoodCategories.get(id)
    if (!category) throw new Error('Custom category not found.')
    const rememberedFoods = await db.rememberedFoods.filter((food) => food.customCategoryId === id).toArray()
    const timestamp = nowIso()
    await db.foodLogEntries.filter((entry) => entry.customCategoryId === id).modify((entry) => {
      entry.categoryId = undefined
      entry.categoryName = 'Uncategorized'
      entry.categoryKind = 'unresolved'
      delete entry.customCategoryId
      delete entry.customCategoryName
      entry.updatedAt = timestamp
    })
    if (rememberedFoods.length) await db.rememberedFoods.bulkDelete(rememberedFoods.map((food) => food.id))
    await db.customFoodCategories.delete(id)
  })
}

export type { RememberedFood }
