/// <reference types="node" />
import assert from 'node:assert/strict'
import type { FoodLogEntry } from '../../data/models.ts'
import { calculateMacroCalorieBreakdown, calculateMealCalorieBreakdown } from './foodModel.ts'

const macros = calculateMacroCalorieBreakdown({ kcal: 2200, protein: 100, carbs: 200, fat: 50 })
assert.deepEqual(macros.slices.map((slice) => slice.kcal), [400, 800, 450])
assert.equal(macros.totalKcal, 1650)
assert.ok(Math.abs(macros.slices.reduce((sum, slice) => sum + slice.percentage, 0) - 100) < 0.0001)
assert.notEqual(macros.totalKcal, 2200, 'manual kcal remains independent from macro-derived energy')

const timestamp = '2026-08-26T00:00:00.000Z'
const entry = (meal: FoodLogEntry['meal'], kcal?: number): FoodLogEntry => ({
  id: `food:${meal}`, date: '2026-08-26', meal, foodName: meal, categoryName: 'Other', categoryKind: 'predefined', kcal,
  createdAt: timestamp, updatedAt: timestamp,
})
const meals = calculateMealCalorieBreakdown([entry('breakfast', 500), entry('lunch', 800), entry('supper', 200), entry('dinner', 500)])
assert.equal(meals.totalKcal, 2000)
assert.deepEqual(meals.slices.map((slice) => Math.round(slice.percentage)), [25, 40, 10, 25])
assert.equal(calculateMealCalorieBreakdown([entry('breakfast')]).totalKcal, 0, 'missing kcal is not fabricated from macros')
for (const breakdown of [calculateMacroCalorieBreakdown({}), calculateMealCalorieBreakdown([])]) {
  assert.equal(breakdown.totalKcal, 0)
  assert.ok(breakdown.slices.every((slice) => Number.isFinite(slice.percentage) && slice.percentage === 0))
}

console.log('Food nutrition breakdown tests passed: 4/4/9 macros, actual meal kcal, mismatch preservation, and zero-safe percentages')
