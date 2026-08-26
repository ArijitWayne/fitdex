import { useState } from 'react'
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

function App() {
  const [destination, setDestination] = useState<AppDestination>('home')
  const [workoutEntry, setWorkoutEntry] = useState<WorkoutEntryView>('hub')
  const [workoutTargetId, setWorkoutTargetId] = useState<string>()
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [tutorialOpen, setTutorialOpen] = useState(() => !hasCompletedTutorial())
  const [progressEntry, setProgressEntry] = useState<'overview' | 'achievements'>('overview')

  return (
    <ThemeProvider>
      <AvatarProvider>
        <ProfileProvider>
          <AppShell
            destination={destination}
            onNavigate={(next) => {
              if (next === 'workout') setWorkoutEntry('hub')
              if (next === 'progress') setProgressEntry('overview')
              setDestination(next)
              setSettingsOpen(false)
            }}
            onOpenSettings={() => setSettingsOpen(true)}
            settingsOpen={settingsOpen}
          >
            {settingsOpen ? (
              <SettingsPage
                onBack={() => setSettingsOpen(false)}
                onReplayTutorial={() => setTutorialOpen(true)}
              />
            ) : destination === 'home' ? (
              <HomePage onNavigate={(next) => { if (next === 'progress') setProgressEntry('overview'); setDestination(next) }} onOpenAchievements={() => { setProgressEntry('achievements'); setDestination('progress') }} onOpenWorkout={(entry, targetId) => { setWorkoutEntry(entry); setWorkoutTargetId(targetId); setDestination('workout') }} />
            ) : destination === 'workout' ? (
              <WorkoutPage initialView={workoutEntry} initialRoutineId={workoutEntry === 'start-routine' ? workoutTargetId : undefined} initialWorkoutId={workoutEntry === 'history' ? workoutTargetId : undefined} />
            ) : destination === 'food' ? (
              <FoodPage />
            ) : destination === 'progress' ? (
              <ProgressPage initialView={progressEntry} />
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

export default App
