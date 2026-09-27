import type { NutritionTargets } from '../../data/models.ts'
import { getLocalSettingsRecord, updateLocalSettings } from '../settings/settingsRepository.ts'
import { calculateRateBasedCalorieFloor, calculateRmr, calculateTdee } from './nutritionTargetCalculator.ts'

export async function loadNutritionTargets() { return (await getLocalSettingsRecord())?.nutritionTargets }

export async function saveNutritionTargets(input: Omit<NutritionTargets, 'updatedAt'>) {
  if (!Number.isFinite(input.calorieTarget) || input.calorieTarget <= 0 || !Number.isFinite(input.proteinTargetGrams) || input.proteinTargetGrams < 0) throw new Error('Enter valid calorie and protein targets.')
  const tdee = calculateTdee(calculateRmr(input), input.activityLevel)
  const calorieTarget = input.goal === 'lose'
    ? Math.round(Math.max(input.calorieTarget, calculateRateBasedCalorieFloor(tdee, input.weightKg)))
    : input.calorieTarget
  const timestamp = new Date().toISOString()
  const existing = await getLocalSettingsRecord()
  const enabledAgain = input.enabled && !existing?.nutritionTargets?.enabled
  const saved = await updateLocalSettings({ nutritionTargets: { ...input, calorieTarget, updatedAt: timestamp }, nutritionTargetsInitializedAt: input.enabled ? existing?.nutritionTargetsInitializedAt ?? timestamp : existing?.nutritionTargetsInitializedAt, nutritionTargetsEligibleFrom: enabledAgain ? timestamp : existing?.nutritionTargetsEligibleFrom })
  const { reconcileNotificationSchedules } = await import('../notifications/notificationScheduler.ts')
  await reconcileNotificationSchedules(saved.themeFamily === 'amazonians' ? 'amazonians' : 'spartans')
  return saved
}

export async function setNutritionTargetsEnabled(enabled: boolean) {
  const current = await loadNutritionTargets()
  if (!current) throw new Error('Set targets before enabling them.')
  return saveNutritionTargets({ ...current, enabled })
}
