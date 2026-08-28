import { getLocalSettingsRecord, updateLocalSettings } from '../settings/settingsRepository.ts'
import { normalizeDisplayName } from './displayNameModel.ts'

export async function loadDisplayName() {
  return (await getLocalSettingsRecord())?.displayName ?? ''
}

export async function saveDisplayName(value: string) {
  const displayName = normalizeDisplayName(value)
  await updateLocalSettings({ displayName })
  return displayName
}
