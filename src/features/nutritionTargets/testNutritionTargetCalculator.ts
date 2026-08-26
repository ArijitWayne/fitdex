import assert from 'node:assert/strict'
import { ACTIVITY_FACTORS, CALORIE_SAFETY_FLOOR, calculateRmr, calculateSuggestedCalorieTargets, calculateTdee, evaluateCalorieDay, evaluateProteinDay } from './nutritionTargetCalculator.ts'

assert.equal(calculateRmr({ age: 30, sex: 'male', heightCm: 180, weightKg: 80 }), 1780)
assert.equal(calculateRmr({ age: 30, sex: 'female', heightCm: 165, weightKg: 60 }), 1320)
for (const [level, factor] of Object.entries(ACTIVITY_FACTORS)) assert.equal(calculateTdee(1000, level as keyof typeof ACTIVITY_FACTORS), Math.round(1000 * factor))
assert.deepEqual(calculateSuggestedCalorieTargets(2500, 'lose'), { moderate: 2000, higher: 1750, defaultTarget: 2000 })
assert.equal(calculateSuggestedCalorieTargets(2500, 'maintain').defaultTarget, 2500)
assert.equal(calculateSuggestedCalorieTargets(2500, 'gain').defaultTarget, 2750)
const lose = { goal: 'lose' as const, calorieTarget: 2000 }
assert.equal(evaluateCalorieDay(lose, 2000, 2500).achievementEligible, true)
assert.equal(evaluateCalorieDay(lose, 1750, 2500).achievementEligible, true)
assert.equal(evaluateCalorieDay(lose, 1600, 2500).status, 'below_target_outer')
assert.equal(evaluateCalorieDay(lose, 1600, 2500).achievementEligible, true)
assert.equal(evaluateCalorieDay(lose, 1499, 2500).status, 'too_far_below')
assert.equal(evaluateCalorieDay(lose, 900, 2500).status, 'below_safety_floor')
assert.equal(evaluateCalorieDay(lose, 2000, 3000).achievementEligible, true)
assert.equal(evaluateCalorieDay(lose, 1900, 3000).achievementEligible, false)
assert.equal(evaluateCalorieDay(lose, 2100, 2500).status, 'above_target')
const maintain = { goal: 'maintain' as const, calorieTarget: 2000 }
assert.equal(evaluateCalorieDay(maintain, 1800, 2000).achievementEligible, true)
assert.equal(evaluateCalorieDay(maintain, 1799, 2000).achievementEligible, false)
assert.equal(evaluateCalorieDay(maintain, 2201, 2000).achievementEligible, false)
const gain = { goal: 'gain' as const, calorieTarget: 2500 }
assert.equal(evaluateCalorieDay(gain, 2500, 2200).achievementEligible, true)
assert.equal(evaluateCalorieDay(gain, 2200, 2200).achievementEligible, false)
assert.equal(evaluateProteinDay(130, 130).achievementEligible, true)
assert.equal(evaluateProteinDay(130, 145).achievementEligible, true)
assert.equal(evaluateProteinDay(130, 129).achievementEligible, false)
assert.equal(CALORIE_SAFETY_FLOOR, 1000)
console.log('Nutrition target calculator tests passed: Mifflin–St Jeor, recommendations, safety-first calorie zones, and protein targets')
