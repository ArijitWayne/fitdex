import { Capacitor, registerPlugin } from '@capacitor/core'
import type { BrandingFamily } from './branding'

interface LauncherBrandingPlugin {
  setLauncherBranding(options: { family: BrandingFamily; relaunch?: boolean }): Promise<void>
}

const LauncherBranding = registerPlugin<LauncherBrandingPlugin>('LauncherBranding')
let activeFamily: BrandingFamily | undefined

export function supportsNativeAndroidLauncherBranding() {
  return Capacitor.isNativePlatform()
    && Capacitor.getPlatform() === 'android'
    && Capacitor.isPluginAvailable('LauncherBranding')
}

export async function syncNativeLauncherBranding(family: BrandingFamily, relaunch = false) {
  if (!supportsNativeAndroidLauncherBranding() || activeFamily === family) return
  activeFamily = family
  try {
    if (relaunch) await LauncherBranding.setLauncherBranding({ family, relaunch: true })
    else await LauncherBranding.setLauncherBranding({ family })
  } catch {
    if (activeFamily === family) activeFamily = undefined
    // Native launcher refresh is best-effort and must never affect FitDex itself.
  }
}

export function resetNativeLauncherBrandingForTests() {
  activeFamily = undefined
}
