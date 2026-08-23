import { useSyncExternalStore } from 'react'
import type { BrightnessPreference } from './theme'
import { useTheme } from './useTheme'

export type ResolvedBrightness = Exclude<BrightnessPreference, 'system'>

const darkSchemeQuery = '(prefers-color-scheme: dark)'

function subscribeToColorScheme(onChange: () => void) {
  const mediaQuery = window.matchMedia(darkSchemeQuery)
  mediaQuery.addEventListener('change', onChange)
  return () => mediaQuery.removeEventListener('change', onChange)
}

function getColorScheme(): ResolvedBrightness {
  return window.matchMedia(darkSchemeQuery).matches ? 'dark' : 'light'
}

function getServerColorScheme(): ResolvedBrightness {
  return 'light'
}

export function useResolvedBrightness() {
  const { brightness } = useTheme()
  const systemBrightness = useSyncExternalStore(subscribeToColorScheme, getColorScheme, getServerColorScheme)
  return brightness === 'system' ? systemBrightness : brightness
}
