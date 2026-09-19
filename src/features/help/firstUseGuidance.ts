import type { FirstUseGuidanceState } from '../../data/models.ts'
import { getLocalSettingsRecord, updateLocalSettings } from '../settings/settingsRepository.ts'

export type FirstUseGuidanceKey = keyof FirstUseGuidanceState

export async function loadFirstUseGuidance() {
  return (await getLocalSettingsRecord())?.firstUseGuidance ?? {}
}

export async function acknowledgeFirstUse<K extends FirstUseGuidanceKey>(key: K, value: FirstUseGuidanceState[K] = true as FirstUseGuidanceState[K]) {
  const settings = await getLocalSettingsRecord()
  return updateLocalSettings({ firstUseGuidance: { ...settings?.firstUseGuidance, [key]: value } })
}
