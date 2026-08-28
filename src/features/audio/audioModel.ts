import type { BackgroundMusicPreference } from '../../data/models'

export type AudioEffect = 'select' | 'add' | 'progress_complete' | 'achievement_unlock'

export const AUDIO_EFFECT_PATHS: Record<AudioEffect, string> = {
  select: '/audio/select.mp3',
  add: '/audio/add.mp3',
  achievement_unlock: '/audio/achievements_unlock.mp3',
  progress_complete: '/audio/progress_complete.mp3',
}

export const BACKGROUND_MUSIC_PATHS: Record<Exclude<BackgroundMusicPreference, 'none'>, string> = {
  warrior: '/audio/bgm1.mp3',
  hardened: '/audio/bgm2.mp3',
  villain: '/audio/bgm3.mp3',
}

export const DEFAULT_AUDIO_PREFERENCES = { soundEffectsEnabled: true, backgroundMusic: 'none' as const }
export const BACKGROUND_TRACK_ORDER = ['warrior', 'hardened', 'villain'] as const
export const AUDIO_EFFECT_PRIORITY: readonly AudioEffect[] = ['achievement_unlock', 'progress_complete', 'add', 'select']

export function resolveAudioPreferences(settings?: { soundEffectsEnabled?: boolean; backgroundMusic?: BackgroundMusicPreference }) {
  return {
    soundEffectsEnabled: settings?.soundEffectsEnabled ?? DEFAULT_AUDIO_PREFERENCES.soundEffectsEnabled,
    backgroundMusic: settings?.backgroundMusic ?? DEFAULT_AUDIO_PREFERENCES.backgroundMusic,
  }
}

export function highestPriorityEffect(effects: readonly AudioEffect[]) {
  return AUDIO_EFFECT_PRIORITY.find((effect) => effects.includes(effect))
}

export function cycleBackgroundTrack(current: BackgroundMusicPreference, direction: -1 | 1) {
  const currentIndex = BACKGROUND_TRACK_ORDER.indexOf(current === 'none' ? 'warrior' : current)
  return BACKGROUND_TRACK_ORDER[(currentIndex + direction + BACKGROUND_TRACK_ORDER.length) % BACKGROUND_TRACK_ORDER.length]
}

export function foodSaveEffect(editing: boolean, mealEntryCountBeforeAdd: number): AudioEffect | undefined {
  if (editing) return undefined
  return mealEntryCountBeforeAdd === 0 ? 'progress_complete' : 'add'
}

export function evaluateGamificationAudioTransition(previousSignature: string, transition: { levelUp: boolean; afterLevel: number; unlockIds: readonly string[] }, allowSound: boolean) {
  if (!transition.levelUp && !transition.unlockIds.length) return { signature: previousSignature, play: false }
  const signature = `${transition.afterLevel}:${[...transition.unlockIds].sort().join(',')}`
  return { signature, play: allowSound && signature !== previousSignature }
}
