import { createContext } from 'react'
import type { BackgroundMusicPreference } from '../../data/models'
import type { AudioEffect } from './audioModel'

export interface AudioContextValue {
  ready: boolean
  soundEffectsEnabled: boolean
  backgroundMusic: BackgroundMusicPreference
  backgroundMusicPaused: boolean
  playEffect: (effect: AudioEffect) => void
  setSoundEffectsEnabled: (enabled: boolean) => void
  setBackgroundMusic: (preference: BackgroundMusicPreference) => void
  pauseBackgroundMusic: () => void
  resumeBackgroundMusic: () => void
}

export const AudioContext = createContext<AudioContextValue | undefined>(undefined)
