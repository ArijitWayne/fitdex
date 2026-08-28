import type { BackgroundMusicPreference } from '../../data/models'
import { getLocalSettingsRecord, updateLocalSettings } from '../settings/settingsRepository.ts'
import { resolveAudioPreferences } from './audioModel.ts'

export async function loadAudioPreferences() {
  return resolveAudioPreferences(await getLocalSettingsRecord())
}

export async function saveSoundEffectsEnabled(soundEffectsEnabled: boolean) {
  await updateLocalSettings({ soundEffectsEnabled })
}

export async function saveBackgroundMusic(backgroundMusic: BackgroundMusicPreference) {
  await updateLocalSettings({ backgroundMusic })
}
