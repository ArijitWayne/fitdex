import { Capacitor, registerPlugin } from '@capacitor/core'
import type { BrandingFamily } from './branding'

interface LauncherBrandingPlugin {
  setLauncherBranding(options: { family: BrandingFamily }): Promise<void>
}

const LauncherBranding = registerPlugin<LauncherBrandingPlugin>('LauncherBranding')
let activeFamily: BrandingFamily | undefined

export async function syncNativeLauncherBranding(family: BrandingFamily) {
  if (!Capacitor.isNativePlatform() || Capacitor.getPlatform() !== 'android' || activeFamily === family) return
  activeFamily = family
  try {
    await LauncherBranding.setLauncherBranding({ family })
  } catch {
    if (activeFamily === family) activeFamily = undefined
    // Native launcher refresh is best-effort and must never affect FitDex itself.
  }
}

export function resetNativeLauncherBrandingForTests() {
  activeFamily = undefined
}
