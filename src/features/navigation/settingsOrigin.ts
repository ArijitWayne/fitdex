import type { AppDestination } from '../../types/navigation'
import type { WorkoutEntryView } from '../../pages/WorkoutPage'

export interface AppLocation {
  destination: AppDestination
  settingsOpen: boolean
  workoutEntry: WorkoutEntryView
  workoutTargetId?: string
  progressEntry: 'overview' | 'achievements'
}

export interface SettingsOrigin {
  location: AppLocation
  scrollTop: number
}

export function getAppScrollTop(): number {
  if (typeof window === 'undefined') return 0
  const main = document.querySelector('.app-main')
  const mainScroll = main ? main.scrollTop : 0
  return mainScroll || window.scrollY || document.documentElement?.scrollTop || document.body?.scrollTop || 0
}

export function restoreAppScroll(scrollTop: number): void {
  if (typeof window === 'undefined') return
  const main = document.querySelector('.app-main')
  if (main && main.scrollHeight > main.clientHeight) {
    main.scrollTop = scrollTop
  }
  window.scrollTo({ top: scrollTop, behavior: 'instant' })
  if (document.documentElement) document.documentElement.scrollTop = scrollTop
  if (document.body) document.body.scrollTop = scrollTop
}

export interface SettingsNavigationController {
  getOrigin: () => SettingsOrigin | null
  getPendingScrollRestore: () => number | null
  openSettings: (currentLocation: AppLocation) => void
  closeSettingsToOrigin: (_currentLocation?: AppLocation) => void
  toggleSettings: (currentLocation: AppLocation) => void
  resetOrigin: () => void
}

export function createSettingsNavigationManager(
  navigate: (next: AppLocation) => void,
  canGoBack: () => boolean,
  popLocation: () => void,
  rootLocation: AppLocation,
  readScrollTop: () => number = getAppScrollTop,
): SettingsNavigationController {
  let origin: SettingsOrigin | null = null
  let pendingScrollRestore: number | null = null

  return {
    getOrigin: () => origin,
    getPendingScrollRestore: () => pendingScrollRestore,
    openSettings(currentLocation: AppLocation) {
      if (!currentLocation.settingsOpen) {
        origin = {
          location: { ...currentLocation },
          scrollTop: readScrollTop(),
        }
        navigate({ ...currentLocation, settingsOpen: true })
      }
    },
    closeSettingsToOrigin(_currentLocation?: AppLocation) {
      const stored = origin
      origin = null

      if (stored) {
        pendingScrollRestore = stored.scrollTop
        if (canGoBack()) {
          popLocation()
        } else {
          navigate({ ...stored.location, settingsOpen: false })
        }
      } else {
        if (canGoBack()) {
          popLocation()
        } else {
          navigate({ ...rootLocation, settingsOpen: false })
        }
      }
    },
    toggleSettings(currentLocation: AppLocation) {
      if (!currentLocation.settingsOpen) {
        this.openSettings(currentLocation)
      } else {
        this.closeSettingsToOrigin(currentLocation)
      }
    },
    resetOrigin() {
      origin = null
    },
  }
}
