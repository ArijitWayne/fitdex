import { useLayoutEffect, useMemo, useState } from 'react'
import { deviceStorage } from '../platform/deviceStorage'
import { ThemeContext, type ThemeContextValue } from './themeContext'
import {
  BRIGHTNESS_STORAGE_KEY,
  LEGACY_THEME_STORAGE_KEY,
  THEME_FAMILY_STORAGE_KEY,
  type BrightnessPreference,
  type ThemeFamily,
} from './theme'

function readFamily(): ThemeFamily {
  const saved = deviceStorage.get(THEME_FAMILY_STORAGE_KEY)
  if (saved === 'spartans' || saved === 'amazonians') return saved

  const migrated: ThemeFamily = saved === 'ember' ? 'amazonians' : 'spartans'
  deviceStorage.set(THEME_FAMILY_STORAGE_KEY, migrated)
  return migrated
}

function readBrightness(): BrightnessPreference {
  const saved = deviceStorage.get(BRIGHTNESS_STORAGE_KEY)
  if (saved === 'light' || saved === 'dark' || saved === 'system') return saved

  const legacy = deviceStorage.get(LEGACY_THEME_STORAGE_KEY)
  const migrated = legacy === 'light' || legacy === 'dark' ? legacy : 'system'
  deviceStorage.set(BRIGHTNESS_STORAGE_KEY, migrated)
  return migrated
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [family, setFamilyState] = useState<ThemeFamily>(readFamily)
  const [brightness, setBrightnessState] = useState<BrightnessPreference>(readBrightness)

  useLayoutEffect(() => {
    document.documentElement.dataset.themeFamily = family
    document.documentElement.dataset.brightness = brightness
    document.documentElement.style.colorScheme = brightness === 'system' ? 'light dark' : brightness
  }, [family, brightness])

  const value = useMemo<ThemeContextValue>(
    () => ({
      family,
      brightness,
      setFamily(nextFamily) {
        deviceStorage.set(THEME_FAMILY_STORAGE_KEY, nextFamily)
        setFamilyState(nextFamily)
      },
      setBrightness(nextBrightness) {
        deviceStorage.set(BRIGHTNESS_STORAGE_KEY, nextBrightness)
        setBrightnessState(nextBrightness)
      },
    }),
    [family, brightness],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
