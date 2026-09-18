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

const rootLocation: AppLocation = { destination: 'home', settingsOpen: false, workoutEntry: 'hub', progressEntry: 'overview' }

function App() {
  return <ThemeProvider><AvatarProvider><ProfileProvider><AppContent /></ProfileProvider></AvatarProvider></ThemeProvider>
}

function AppContent() {
  const { displayName, ready: profileReady } = useProfile()
  const historyRef = useRef(createNavigationHistory(rootLocation))
  const [location, setLocation] = useState(rootLocation)
  const [historyDepth, setHistoryDepth] = useState(0)
  const [tutorialOpen, setTutorialOpen] = useState(() => !hasCompletedTutorial())

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

  const profileGate = profileReady ? resolveProfileGate(displayName, hasCompletedTutorial()) : 'none'

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
        ) : location.destination === 'home' ? (
          <HomePage onNavigate={navigateDestination} onOpenAchievements={() => navigate({ ...location, destination: 'progress', settingsOpen: false, progressEntry: 'achievements' })} onOpenWorkout={(entry, targetId) => navigate({ ...location, destination: 'workout', settingsOpen: false, workoutEntry: entry, workoutTargetId: targetId })} onOpenFieldGuide={() => setTutorialOpen(true)} />
        ) : location.destination === 'workout' ? (
          <WorkoutPage key={`workout:${location.workoutEntry}:${location.workoutTargetId ?? ''}`} initialView={location.workoutEntry} initialRoutineId={location.workoutEntry === 'start-routine' ? location.workoutTargetId : undefined} initialWorkoutId={location.workoutEntry === 'history' ? location.workoutTargetId : undefined} />
        ) : location.destination === 'food' ? (
          <FoodPage onOpenSettings={openSettings} />
        ) : location.destination === 'progress' ? (
          <ProgressPage key={`progress:${location.progressEntry}`} initialView={location.progressEntry} />
        ) : (
          <JournalPage />
        )}
      </AppShell>
      {profileGate === 'onboarding' ? <Onboarding requiresDisplayName onClose={() => setTutorialOpen(false)} /> : profileGate === 'migration' ? <RequiredDisplayNamePrompt /> : tutorialOpen ? <Onboarding onClose={() => setTutorialOpen(false)} /> : null}
      <GamificationNotificationDialog />
    </>
  )
}

function AppWithProviders() {
  return <AudioProvider><BackNavigationProvider><App /></BackNavigationProvider></AudioProvider>
}

export default AppWithProviders
