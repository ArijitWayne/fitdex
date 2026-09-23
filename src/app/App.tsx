import { useLayoutEffect, useRef, useState } from 'react'
import { AppShell } from '../components/layout/AppShell'
import { AvatarProvider } from '../features/avatar/AvatarProvider'
import { Onboarding } from '../features/onboarding/Onboarding'
import { ProfileProvider } from '../features/profile/ProfileProvider'
import { hasCompletedTutorial } from '../features/onboarding/tutorialStorage'
import { SettingsPage } from '../features/settings/SettingsPage'
import { FoodPage } from '../pages/FoodPage'
import { HomePage } from '../pages/HomePage'
import { JournalPage } from '../pages/JournalPage'
import { ProgressPage } from '../pages/ProgressPage'
import { WorkoutPage } from '../pages/WorkoutPage'
import { ThemeProvider } from '../theme/ThemeProvider'
import type { AppDestination } from '../types/navigation'
import { GamificationNotificationDialog } from '../features/gamification/GamificationViews'
import { AudioProvider } from '../features/audio/AudioProvider'
import { BackNavigationProvider } from '../features/navigation/BackNavigationProvider'
import { createNavigationHistory } from '../features/navigation/navigationHistory'
import { useBackNavigation } from '../features/navigation/useBackNavigation'
import {
  getAppScrollTop,
  restoreAppScroll,
  type AppLocation,
  type SettingsOrigin,
} from '../features/navigation/settingsOrigin'
import { useProfile } from '../features/profile/useProfile'
import { RequiredDisplayNamePrompt } from '../features/profile/RequiredDisplayNamePrompt'
import { resolveProfileGate } from '../features/profile/profileGateModel'

import { useTheme } from '../theme/useTheme'
import { AppBootSequence } from '../features/boot/AppBootSequence'

const rootLocation: AppLocation = { destination: 'home', settingsOpen: false, workoutEntry: 'hub', progressEntry: 'overview' }

function App() {
  return <ThemeProvider><AvatarProvider><ProfileProvider><AppContent /></ProfileProvider></AvatarProvider></ThemeProvider>
}

function AppContent() {
  const { family } = useTheme()
  const { displayName, ready: profileReady } = useProfile()
  const [bootCompleted, setBootCompleted] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem('fitdex_boot_completed') === 'true';
    } catch {
      return true; // Fail-safe recovery into app
    }
  })
  const historyRef = useRef(createNavigationHistory(rootLocation))
  const [location, setLocation] = useState(rootLocation)
  const [historyDepth, setHistoryDepth] = useState(0)
  const [tutorialCompleted, setTutorialCompleted] = useState(hasCompletedTutorial)
  const [tutorialOpen, setTutorialOpen] = useState(false)

  const settingsOriginRef = useRef<SettingsOrigin | null>(null)
  const pendingScrollRestoreRef = useRef<number | null>(null)

  const navigate = (next: AppLocation) => {
    if (historyRef.current.navigate(next)) { setHistoryDepth(historyRef.current.entries().length); setLocation(next) }
  }
  const navigateDestination = (destination: AppDestination) => {
    settingsOriginRef.current = null
    navigate({
      destination,
      settingsOpen: false,
      workoutEntry: destination === 'workout' ? 'hub' : location.workoutEntry,
      progressEntry: destination === 'progress' ? 'overview' : location.progressEntry,
    })
  }

  const openSettings = () => {
    if (!location.settingsOpen) {
      settingsOriginRef.current = {
        location: { ...location },
        scrollTop: getAppScrollTop(),
      }
      navigate({ ...location, settingsOpen: true })
    }
  }

  const closeSettingsToOrigin = () => {
    const origin = settingsOriginRef.current
    settingsOriginRef.current = null

    if (origin) {
      pendingScrollRestoreRef.current = origin.scrollTop
      if (historyRef.current.canGoBack()) {
        const popped = historyRef.current.back()
        if (popped && !popped.settingsOpen) {
          setHistoryDepth(historyRef.current.entries().length)
          setLocation(popped)
          return
        }
      }
      navigate({ ...origin.location, settingsOpen: false })
    } else {
      if (historyRef.current.canGoBack()) {
        const popped = historyRef.current.back()
        if (popped) {
          setHistoryDepth(historyRef.current.entries().length)
          setLocation(popped)
          return
        }
      }
      navigate({ ...rootLocation, settingsOpen: false })
    }
  }

  const toggleSettings = () => {
    if (!location.settingsOpen) {
      openSettings()
    } else {
      closeSettingsToOrigin()
    }
  }

  const popLocation = () => {
    if (location.settingsOpen) {
      closeSettingsToOrigin()
      return
    }
    const previous = historyRef.current.back()
    if (previous) { setHistoryDepth(historyRef.current.entries().length); setLocation(previous) }
  }
  useBackNavigation('app-history', historyDepth > 0, popLocation, 0)

  useLayoutEffect(() => {
    if (pendingScrollRestoreRef.current !== null && !location.settingsOpen) {
      const target = pendingScrollRestoreRef.current
      pendingScrollRestoreRef.current = null
      restoreAppScroll(target)
      requestAnimationFrame(() => {
        restoreAppScroll(target)
      })
    }
  }, [location])

  const profileGate = profileReady ? resolveProfileGate(displayName, tutorialCompleted) : 'none'

  if (!bootCompleted) {
    return (
      <AppBootSequence
        themeFamily={family}
        onComplete={() => {
          try {
            sessionStorage.setItem('fitdex_boot_completed', 'true')
          } catch {}
          setBootCompleted(true)
        }}
      />
    )
  }

  if (!profileReady) return <div className="profile-gate-loading" aria-live="polite">Loading FitDex…</div>

  return (
    <>
      <AppShell
        destination={location.destination}
        onNavigate={navigateDestination}
        onOpenSettings={openSettings}
        onToggleSettings={toggleSettings}
        settingsOpen={location.settingsOpen}
      >
        {location.settingsOpen ? (
          <SettingsPage
            onBack={closeSettingsToOrigin}
            onReplayTutorial={() => setTutorialOpen(true)}
          />
        ) : (
          <>
            <div className={`tab-page ${location.destination === 'home' ? 'is-active' : 'is-hidden'}`} style={{ display: location.destination === 'home' ? 'contents' : 'none' }}>
              <HomePage onNavigate={navigateDestination} onOpenAchievements={() => navigate({ ...location, destination: 'progress', settingsOpen: false, progressEntry: 'achievements' })} onOpenWorkout={(entry, targetId) => navigate({ ...location, destination: 'workout', settingsOpen: false, workoutEntry: entry, workoutTargetId: targetId })} onOpenFieldGuide={() => setTutorialOpen(true)} />
            </div>
            <div className={`tab-page ${location.destination === 'workout' ? 'is-active' : 'is-hidden'}`} style={{ display: location.destination === 'workout' ? 'contents' : 'none' }}>
              <WorkoutPage key={`workout:${location.workoutEntry ?? 'hub'}:${location.workoutTargetId ?? 'none'}`} initialView={location.workoutEntry} initialRoutineId={location.workoutEntry === 'start-routine' ? location.workoutTargetId : undefined} initialWorkoutId={location.workoutEntry === 'history' ? location.workoutTargetId : undefined} />
            </div>
            <div className={`tab-page ${location.destination === 'food' ? 'is-active' : 'is-hidden'}`} style={{ display: location.destination === 'food' ? 'contents' : 'none' }}>
              <FoodPage onOpenSettings={openSettings} />
            </div>
            <div className={`tab-page ${location.destination === 'progress' ? 'is-active' : 'is-hidden'}`} style={{ display: location.destination === 'progress' ? 'contents' : 'none' }}>
              <ProgressPage initialView={location.progressEntry} />
            </div>
            <div className={`tab-page ${location.destination === 'journal' ? 'is-active' : 'is-hidden'}`} style={{ display: location.destination === 'journal' ? 'contents' : 'none' }}>
              <JournalPage />
            </div>
          </>
        )}
      </AppShell>
      {profileGate === 'onboarding' ? <Onboarding requiresDisplayName onClose={() => { setTutorialCompleted(true); setTutorialOpen(false) }} /> : profileGate === 'migration' ? <RequiredDisplayNamePrompt /> : tutorialOpen ? <Onboarding onClose={() => setTutorialOpen(false)} /> : null}
      <GamificationNotificationDialog />
    </>
  )
}

function AppWithProviders() {
  return <AudioProvider><BackNavigationProvider><App /></BackNavigationProvider></AudioProvider>
}

export default AppWithProviders
