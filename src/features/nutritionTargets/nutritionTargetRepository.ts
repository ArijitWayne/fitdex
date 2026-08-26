import type { NutritionTargets } from '../../data/models.ts'
import { getLocalSettingsRecord, updateLocalSettings } from '../settings/settingsRepository.ts'
import { calculateRmr, calculateTdee } from './nutritionTargetCalculator.ts'

export async function loadNutritionTargets() { return (await getLocalSettingsRecord())?.nutritionTargets }

export async function saveNutritionTargets(input: Omit<NutritionTargets, 'updatedAt'>) {
  if (!Number.isFinite(input.calorieTarget) || input.calorieTarget <= 0 || !Number.isFinite(input.proteinTargetGrams) || input.proteinTargetGrams < 0) throw new Error('Enter valid calorie and protein targets.')
  calculateRmr(input); calculateTdee(calculateRmr(input), input.activityLevel)
  const timestamp = new Date().toISOString()
  const existing = await getLocalSettingsRecord()
  const enabledAgain = input.enabled && !existing?.nutritionTargets?.enabled
  return updateLocalSettings({ nutritionTargets: { ...input, updatedAt: timestamp }, nutritionTargetsInitializedAt: input.enabled ? existing?.nutritionTargetsInitializedAt ?? timestamp : existing?.nutritionTargetsInitializedAt, nutritionTargetsEligibleFrom: enabledAgain ? timestamp : existing?.nutritionTargetsEligibleFrom })
}

export async function setNutritionTargetsEnabled(enabled: boolean) {
  const current = await loadNutritionTargets()
  if (!current) throw new Error('Set targets before enabling them.')
  return saveNutritionTargets({ ...current, enabled })
}
