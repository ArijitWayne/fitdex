import { useRef, useState } from 'react'
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
import { WorkoutPage, type WorkoutEntryView } from '../pages/WorkoutPage'
import { ThemeProvider } from '../theme/ThemeProvider'
import type { AppDestination } from '../types/navigation'
import { GamificationNotificationDialog } from '../features/gamification/GamificationViews'
import { AudioProvider } from '../features/audio/AudioProvider'
import { BackNavigationProvider } from '../features/navigation/BackNavigationProvider'
import { createNavigationHistory } from '../features/navigation/navigationHistory'
import { useBackNavigation } from '../features/navigation/useBackNavigation'

interface AppLocation {
  destination: AppDestination
  settingsOpen: boolean
  workoutEntry: WorkoutEntryView
  workoutTargetId?: string
  progressEntry: 'overview' | 'achievements'
}

const rootLocation: AppLocation = { destination: 'home', settingsOpen: false, workoutEntry: 'hub', progressEntry: 'overview' }

function App() {
  const historyRef = useRef(createNavigationHistory(rootLocation))
  const [location, setLocation] = useState(rootLocation)
  const [historyDepth, setHistoryDepth] = useState(0)
  const [tutorialOpen, setTutorialOpen] = useState(() => !hasCompletedTutorial())

  const navigate = (next: AppLocation) => {
    if (historyRef.current.navigate(next)) { setHistoryDepth(historyRef.current.entries().length); setLocation(next) }
  }
  const navigateDestination = (destination: AppDestination) => navigate({
    destination,
    settingsOpen: false,
    workoutEntry: destination === 'workout' ? 'hub' : location.workoutEntry,
    progressEntry: destination === 'progress' ? 'overview' : location.progressEntry,
  })
  const popLocation = () => {
    const previous = historyRef.current.back()
    if (previous) { setHistoryDepth(historyRef.current.entries().length); setLocation(previous) }
  }
  useBackNavigation('app-history', historyDepth > 0, popLocation, 0)

  return (
    <ThemeProvider>
      <AvatarProvider>
        <ProfileProvider>
          <AppShell
            destination={location.destination}
            onNavigate={navigateDestination}
            onOpenSettings={() => navigate({ ...location, settingsOpen: true })}
            settingsOpen={location.settingsOpen}
          >
            {location.settingsOpen ? (
              <SettingsPage
                onBack={popLocation}
                onReplayTutorial={() => setTutorialOpen(true)}
              />
            ) : location.destination === 'home' ? (
              <HomePage onNavigate={navigateDestination} onOpenAchievements={() => navigate({ ...location, destination: 'progress', settingsOpen: false, progressEntry: 'achievements' })} onOpenWorkout={(entry, targetId) => navigate({ ...location, destination: 'workout', settingsOpen: false, workoutEntry: entry, workoutTargetId: targetId })} />
            ) : location.destination === 'workout' ? (
              <WorkoutPage key={`workout:${location.workoutEntry}:${location.workoutTargetId ?? ''}`} initialView={location.workoutEntry} initialRoutineId={location.workoutEntry === 'start-routine' ? location.workoutTargetId : undefined} initialWorkoutId={location.workoutEntry === 'history' ? location.workoutTargetId : undefined} />
            ) : location.destination === 'food' ? (
              <FoodPage onOpenSettings={() => navigate({ ...location, settingsOpen: true })} />
            ) : location.destination === 'progress' ? (
              <ProgressPage key={`progress:${location.progressEntry}`} initialView={location.progressEntry} />
            ) : (
              <JournalPage />
            )}
          </AppShell>
          {tutorialOpen ? <Onboarding onClose={() => setTutorialOpen(false)} /> : null}
          <GamificationNotificationDialog />
        </ProfileProvider>
      </AvatarProvider>
    </ThemeProvider>
  )
}

function AppWithProviders() {
  return <AudioProvider><BackNavigationProvider><App /></BackNavigationProvider></AudioProvider>
}

export default AppWithProviders
