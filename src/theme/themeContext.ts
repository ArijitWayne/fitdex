import { createContext } from 'react'
import type { BrightnessPreference, ThemeFamily } from './theme'

export interface ThemeContextValue {
  family: ThemeFamily
  brightness: BrightnessPreference
  setFamily: (family: ThemeFamily, options?: { relaunchNative?: boolean }) => void
  setBrightness: (brightness: BrightnessPreference) => void
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)
