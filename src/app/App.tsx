import { useState } from 'react'
import { AppShell } from '../components/layout/AppShell'
import { AvatarProvider } from '../features/avatar/AvatarProvider'
import { Onboarding } from '../features/onboarding/Onboarding'
import { hasCompletedTutorial } from '../features/onboarding/tutorialStorage'
import { SettingsPage } from '../features/settings/SettingsPage'
import { FoodPage } from '../pages/FoodPage'
import { HomePage } from '../pages/HomePage'
import { JournalPage } from '../pages/JournalPage'
import { ProgressPage } from '../pages/ProgressPage'
import { WorkoutPage } from '../pages/WorkoutPage'
import { ThemeProvider } from '../theme/ThemeProvider'
import type { AppDestination } from '../types/navigation'

const pages: Record<AppDestination, React.ReactNode> = {
  home: <HomePage />,
  workout: <WorkoutPage />,
  food: <FoodPage />,
  progress: <ProgressPage />,
  journal: <JournalPage />,
}

function App() {
  const [destination, setDestination] = useState<AppDestination>('home')
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [tutorialOpen, setTutorialOpen] = useState(() => !hasCompletedTutorial())

  return (
    <ThemeProvider>
      <AvatarProvider>
        <AppShell
          destination={destination}
          onNavigate={(next) => {
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
          ) : (
            pages[destination]
          )}
        </AppShell>
        {tutorialOpen ? <Onboarding onClose={() => setTutorialOpen(false)} /> : null}
      </AvatarProvider>
    </ThemeProvider>
  )
}

export default App
