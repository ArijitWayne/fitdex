/// <reference types="node" />
import 'fake-indexeddb/auto'
import assert from 'node:assert/strict'
import Dexie from 'dexie'
import { db } from '../../data/database.ts'
import { evaluateCalorieDay } from './nutritionTargetCalculator.ts'
import { loadNutritionTargets, saveNutritionTargets } from './nutritionTargetRepository.ts'

await Dexie.delete('fitdex')
await saveNutritionTargets({ enabled: true, goal: 'lose', age: 28, sex: 'female', heightCm: 170, weightKg: 65, activityLevel: 'moderate', calorieTarget: 1000, proteinTargetGrams: 120, calorieTargetSource: 'calculated' })
let targets = await loadNutritionTargets()
assert.equal(targets?.enabled, true)
assert.equal(targets?.calorieTarget, 1653)
assert.equal(targets?.proteinTargetGrams, 120)
assert.equal(evaluateCalorieDay(targets!, targets!.calorieTarget, 2189).targetCalories, 1653)
const firstSettings = await db.settings.get('settings')
assert.ok(firstSettings?.nutritionTargetsInitializedAt)
assert.ok(firstSettings?.nutritionTargetsEligibleFrom)
await saveNutritionTargets({ ...targets!, enabled: true, calorieTarget: 2150 })
targets = await loadNutritionTargets()
assert.equal(targets?.calorieTarget, 2150)
await saveNutritionTargets({ ...targets!, enabled: true, calorieTarget: 1000, calorieTargetSource: 'manual' })
targets = await loadNutritionTargets()
assert.equal(targets?.calorieTarget, 1653)
await saveNutritionTargets({ ...targets!, enabled: false })
assert.equal((await loadNutritionTargets())?.enabled, false)
await db.close()
await Dexie.delete('fitdex')
console.log('Nutrition target repository tests passed: safe cut targets persist, daily evaluation uses saved targets, and forward-only boundaries remain')
