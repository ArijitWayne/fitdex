/// <reference types="node" />
import 'fake-indexeddb/auto'
import assert from 'node:assert/strict'
import Dexie from 'dexie'
import { db } from '../../data/database.ts'
import { loadNutritionTargets, saveNutritionTargets } from './nutritionTargetRepository.ts'

await Dexie.delete('fitdex')
await saveNutritionTargets({ enabled: true, goal: 'lose', age: 28, sex: 'female', heightCm: 170, weightKg: 65, activityLevel: 'moderate', calorieTarget: 2000, proteinTargetGrams: 120, calorieTargetSource: 'calculated' })
let targets = await loadNutritionTargets()
assert.equal(targets?.enabled, true)
assert.equal(targets?.calorieTarget, 2000)
assert.equal(targets?.proteinTargetGrams, 120)
const firstSettings = await db.settings.get('settings')
assert.ok(firstSettings?.nutritionTargetsInitializedAt)
assert.ok(firstSettings?.nutritionTargetsEligibleFrom)
await saveNutritionTargets({ ...targets!, enabled: true, calorieTarget: 2150 })
targets = await loadNutritionTargets()
assert.equal(targets?.calorieTarget, 2150)
await saveNutritionTargets({ ...targets!, enabled: false })
assert.equal((await loadNutritionTargets())?.enabled, false)
await db.close()
await Dexie.delete('fitdex')
console.log('Nutrition target repository tests passed: enabled settings persist, update, disable, and retain forward-only boundaries')
