import { getLocalSettingsRecord, updateLocalSettings } from '../settings/settingsRepository.ts'

export type TutorialKind = 'workout' | 'food'

export async function hasSeenTutorial(kind: TutorialKind) {
  const settings = await getLocalSettingsRecord()
  return kind === 'workout' ? settings?.workoutTutorialSeen === true : settings?.foodTutorialSeen === true
}

export async function markTutorialSeen(kind: TutorialKind) {
  return updateLocalSettings(kind === 'workout' ? { workoutTutorialSeen: true } : { foodTutorialSeen: true })
}
