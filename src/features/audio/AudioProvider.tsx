import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { BackgroundMusicPreference } from '../../data/models'
import { AudioContext } from './audioContext'
import { AUDIO_EFFECT_PATHS, BACKGROUND_MUSIC_PATHS, DEFAULT_AUDIO_PREFERENCES, highestPriorityEffect, type AudioEffect } from './audioModel'
import { loadAudioPreferences, saveBackgroundMusic, saveSoundEffectsEnabled } from './audioRepository'

const EFFECT_PRIORITY_WINDOW_MS = 80

function safelyPlay(audio: HTMLAudioElement, onBlocked?: () => void) {
  try {
    const result = audio.play()
    if (result) void result.catch(() => onBlocked?.())
  } catch { onBlocked?.() }
}

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false)
  const [soundEffectsEnabled, setSoundEffectsEnabledState] = useState(DEFAULT_AUDIO_PREFERENCES.soundEffectsEnabled)
  const [backgroundMusic, setBackgroundMusicState] = useState<BackgroundMusicPreference>(DEFAULT_AUDIO_PREFERENCES.backgroundMusic)
  const [backgroundMusicPaused, setBackgroundMusicPaused] = useState(false)
  const effectsRef = useRef<Map<AudioEffect, HTMLAudioElement>>(new Map())
  const bgmRef = useRef<HTMLAudioElement | undefined>(undefined)
  const pendingEffectsRef = useRef<AudioEffect[]>([])
  const effectTimerRef = useRef<number | undefined>(undefined)
  const bgmBlockedRef = useRef(false)
  const soundEffectsEnabledRef = useRef(soundEffectsEnabled)
  const backgroundMusicRef = useRef(backgroundMusic)
  const backgroundMusicPausedRef = useRef(backgroundMusicPaused)

  useEffect(() => { soundEffectsEnabledRef.current = soundEffectsEnabled }, [soundEffectsEnabled])
  useEffect(() => { backgroundMusicRef.current = backgroundMusic }, [backgroundMusic])
  useEffect(() => { backgroundMusicPausedRef.current = backgroundMusicPaused }, [backgroundMusicPaused])

  useEffect(() => {
    let current = true
    void loadAudioPreferences().then((preferences) => {
      if (!current) return
      setSoundEffectsEnabledState(preferences.soundEffectsEnabled)
      setBackgroundMusicState(preferences.backgroundMusic)
      setReady(true)
    }).catch(() => { if (current) setReady(true) })
    return () => { current = false }
  }, [])

  useEffect(() => {
    const effects = new Map<AudioEffect, HTMLAudioElement>()
    for (const [effect, path] of Object.entries(AUDIO_EFFECT_PATHS) as Array<[AudioEffect, string]>) {
      const audio = new Audio(path)
      audio.preload = 'auto'
      effects.set(effect, audio)
    }
    effectsRef.current = effects
    const bgm = new Audio()
    bgm.preload = 'auto'
    bgm.loop = true
    bgmRef.current = bgm
    return () => {
      if (effectTimerRef.current !== undefined) window.clearTimeout(effectTimerRef.current)
      for (const audio of effects.values()) audio.pause()
      bgm.pause()
      effectsRef.current.clear()
      bgmRef.current = undefined
    }
  }, [])

  const playEffect = useCallback((effect: AudioEffect) => {
    if (!soundEffectsEnabledRef.current) return
    pendingEffectsRef.current.push(effect)
    if (effectTimerRef.current !== undefined) return
    effectTimerRef.current = window.setTimeout(() => {
      effectTimerRef.current = undefined
      const selected = highestPriorityEffect(pendingEffectsRef.current)
      pendingEffectsRef.current = []
      if (!selected || !soundEffectsEnabledRef.current) return
      for (const audio of effectsRef.current.values()) { audio.pause(); audio.currentTime = 0 }
      const audio = effectsRef.current.get(selected)
      if (audio) safelyPlay(audio)
    }, EFFECT_PRIORITY_WINDOW_MS)
  }, [])

  const stopEffects = useCallback(() => {
    pendingEffectsRef.current = []
    if (effectTimerRef.current !== undefined) window.clearTimeout(effectTimerRef.current)
    effectTimerRef.current = undefined
    for (const audio of effectsRef.current.values()) { audio.pause(); audio.currentTime = 0 }
  }, [])

  const applyBackgroundMusic = useCallback((preference: BackgroundMusicPreference) => {
    const bgm = bgmRef.current
    if (!bgm) return
    if (preference === 'none') {
      bgm.pause()
      bgm.removeAttribute('src')
      bgm.load()
      bgmBlockedRef.current = false
      return
    }
    const nextSource = BACKGROUND_MUSIC_PATHS[preference]
    if (!bgm.src.endsWith(nextSource)) {
      bgm.pause()
      bgm.src = nextSource
      bgm.load()
    }
    if (!backgroundMusicPausedRef.current && document.visibilityState === 'visible') safelyPlay(bgm, () => { bgmBlockedRef.current = true })
  }, [])

  useEffect(() => { if (ready) applyBackgroundMusic(backgroundMusic) }, [applyBackgroundMusic, backgroundMusic, ready])

  useEffect(() => {
    const handleVisibility = () => {
      const bgm = bgmRef.current
      if (!bgm) return
      if (document.visibilityState === 'hidden') bgm.pause()
      else if (backgroundMusicRef.current !== 'none' && !backgroundMusicPausedRef.current) safelyPlay(bgm, () => { bgmBlockedRef.current = true })
    }
    const resumeBlockedMusic = () => {
      const bgm = bgmRef.current
      if (!bgmBlockedRef.current || !bgm || backgroundMusicRef.current === 'none' || backgroundMusicPausedRef.current || document.visibilityState !== 'visible') return
      bgmBlockedRef.current = false
      safelyPlay(bgm, () => { bgmBlockedRef.current = true })
    }
    document.addEventListener('visibilitychange', handleVisibility)
    window.addEventListener('pointerdown', resumeBlockedMusic)
    window.addEventListener('keydown', resumeBlockedMusic)
    return () => {
      document.removeEventListener('visibilitychange', handleVisibility)
      window.removeEventListener('pointerdown', resumeBlockedMusic)
      window.removeEventListener('keydown', resumeBlockedMusic)
    }
  }, [])

  const value = useMemo(() => ({
    ready,
    soundEffectsEnabled,
    backgroundMusic,
    backgroundMusicPaused,
    playEffect,
    setSoundEffectsEnabled(enabled: boolean) {
      setSoundEffectsEnabledState(enabled)
      if (!enabled) stopEffects()
      void saveSoundEffectsEnabled(enabled).catch(() => undefined)
    },
    setBackgroundMusic(preference: BackgroundMusicPreference) {
      backgroundMusicPausedRef.current = false
      setBackgroundMusicPaused(false)
      setBackgroundMusicState(preference)
      applyBackgroundMusic(preference)
      void saveBackgroundMusic(preference).catch(() => undefined)
    },
    pauseBackgroundMusic() {
      if (backgroundMusicRef.current === 'none') return
      backgroundMusicPausedRef.current = true
      setBackgroundMusicPaused(true)
      bgmRef.current?.pause()
    },
    resumeBackgroundMusic() {
      if (backgroundMusicRef.current === 'none') return
      backgroundMusicPausedRef.current = false
      setBackgroundMusicPaused(false)
      const bgm = bgmRef.current
      if (bgm && document.visibilityState === 'visible') safelyPlay(bgm, () => { bgmBlockedRef.current = true })
    },
  }), [applyBackgroundMusic, backgroundMusic, backgroundMusicPaused, playEffect, ready, soundEffectsEnabled, stopEffects])

  return <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
}
