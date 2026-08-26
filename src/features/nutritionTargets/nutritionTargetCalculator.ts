import type { NutritionActivityLevel, NutritionGoal, NutritionTargets } from '../../data/models.ts'

export const ACTIVITY_FACTORS: Record<NutritionActivityLevel, number> = { sedentary: 1.2, light: 1.375, moderate: 1.55, very: 1.725, extreme: 1.9 }
export const CALORIE_SAFETY_FLOOR = 1000

export type CalorieDayStatus = 'target_achieved' | 'below_target_outer' | 'too_far_below' | 'below_safety_floor' | 'above_target' | 'below_target'

export function calculateRmr({ age, sex, heightCm, weightKg }: Pick<NutritionTargets, 'age' | 'sex' | 'heightCm' | 'weightKg'>) {
  if (!Number.isFinite(age) || age < 18 || age > 120 || !Number.isFinite(heightCm) || heightCm <= 0 || !Number.isFinite(weightKg) || weightKg <= 0) throw new Error('Enter an age from 18 to 120 and positive height and weight values.')
  return Math.round((10 * weightKg) + (6.25 * heightCm) - (5 * age) + (sex === 'male' ? 5 : -161))
}

export function calculateTdee(rmr: number, activityLevel: NutritionActivityLevel) {
  if (!Number.isFinite(rmr) || rmr <= 0) throw new Error('A positive resting energy estimate is required.')
  return Math.round(rmr * ACTIVITY_FACTORS[activityLevel])
}

export function calculateSuggestedCalorieTargets(tdee: number, goal: NutritionGoal) {
  if (!Number.isFinite(tdee) || tdee <= 0) throw new Error('A positive maintenance estimate is required.')
  if (goal === 'lose') return { moderate: Math.max(CALORIE_SAFETY_FLOOR, tdee - 500), higher: Math.max(CALORIE_SAFETY_FLOOR, tdee - 750), defaultTarget: Math.max(CALORIE_SAFETY_FLOOR, tdee - 500) }
  const target = goal === 'gain' ? tdee + 250 : tdee
  return { moderate: target, higher: target, defaultTarget: target }
}

export function evaluateCalorieDay(targets: Pick<NutritionTargets, 'goal' | 'calorieTarget'>, consumedCalories: number, estimatedTdee: number) {
  const target = targets.calorieTarget
  if (!Number.isFinite(target) || target <= 0 || !Number.isFinite(consumedCalories) || consumedCalories < 0 || !Number.isFinite(estimatedTdee) || estimatedTdee <= 0) throw new Error('Valid calorie targets and totals are required.')
  const result = (status: CalorieDayStatus, achievementEligible: boolean) => ({ status, achievementEligible, consumedCalories, targetCalories: target, estimatedTdee, estimatedDeficit: Math.round(estimatedTdee - consumedCalories) })
  if (consumedCalories < CALORIE_SAFETY_FLOOR) return result('below_safety_floor', false)
  if (targets.goal === 'lose') {
    const deficit = estimatedTdee - consumedCalories
    if (deficit > 1000) return result('too_far_below', false)
    if (consumedCalories > target) return result('above_target', false)
    if (deficit > 750) return result('below_target_outer', true)
    return result('target_achieved', true)
  }
  if (consumedCalories < target * 0.9) return result('below_target', false)
  if (consumedCalories > target * 1.1) return result('above_target', false)
  return result('target_achieved', true)
}

export function evaluateProteinDay(proteinTargetGrams: number, loggedProteinGrams: number) {
  if (!Number.isFinite(proteinTargetGrams) || proteinTargetGrams < 0 || !Number.isFinite(loggedProteinGrams) || loggedProteinGrams < 0) throw new Error('Protein values must be non-negative.')
  return { achievementEligible: proteinTargetGrams > 0 && loggedProteinGrams >= proteinTargetGrams, targetGrams: proteinTargetGrams, loggedGrams: loggedProteinGrams }
}
