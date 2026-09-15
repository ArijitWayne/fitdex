import { ChartNoAxesColumnIncreasing, Dumbbell, House, Moon, NotebookTabs, Settings, Sun, Utensils } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import type { AppDestination } from '../../types/navigation'
import { useAudio } from '../../features/audio/useAudio'
import { brandingForTheme } from '../../branding/branding'
import { useTheme } from '../../theme/useTheme'
import { useResolvedBrightness } from '../../theme/useResolvedBrightness'

const destinations: Array<{ id: AppDestination; icon: LucideIcon; label: string }> = [
  { id: 'home', icon: House, label: 'Home' },
  { id: 'workout', icon: Dumbbell, label: 'Workout' },
  { id: 'food', icon: Utensils, label: 'Food' },
  { id: 'progress', icon: ChartNoAxesColumnIncreasing, label: 'Progress' },
  { id: 'journal', icon: NotebookTabs, label: 'Journal' },
]

interface AppShellProps {
  children: React.ReactNode
  destination: AppDestination
  onNavigate: (destination: AppDestination) => void
  onOpenSettings: () => void
  settingsOpen: boolean
}

export function AppShell({ children, destination, onNavigate, onOpenSettings, settingsOpen }: AppShellProps) {
  const { playEffect } = useAudio()
  const { family } = useTheme()
  const branding = brandingForTheme(family)
  const [online, setOnline] = useState(() => typeof navigator === 'undefined' || navigator.onLine)
  useEffect(() => {
    const updateOnline = () => setOnline(navigator.onLine)
    window.addEventListener('online', updateOnline)
    window.addEventListener('offline', updateOnline)
    return () => { window.removeEventListener('online', updateOnline); window.removeEventListener('offline', updateOnline) }
  }, [])
  return (
    <div className="app-frame">
      <header className="app-header">
        <button className="wordmark" type="button" onClick={() => { playEffect('select'); onNavigate('home') }}>
          <picture>
            <source media="(min-width: 600px)" srcSet={branding.logo} />
            <img className="wordmark-image" src={branding.icon} alt="FitDex" />
          </picture>
          <span className="wordmark-mobile-name">FitDex</span>
        </button>
        {!online ? <div className="connectivity-status" role="status" aria-live="polite"><span aria-hidden="true">●</span> Offline</div> : null}
        {destination === 'home' && !settingsOpen ? <MobileHomeThemeControls /> : null}
        <button
          className={`icon-button ${settingsOpen ? 'is-active' : ''}`}
          type="button"
          aria-label="Open settings"
          aria-pressed={settingsOpen}
          onClick={() => { playEffect('select'); onOpenSettings() }}
        >
          <Settings size={21} strokeWidth={2} aria-hidden="true" />
        </button>
      </header>

      <div className="app-layout">
        <nav className="app-nav" aria-label="Primary navigation">
          {destinations.map((item) => (
            <button
              className={destination === item.id && !settingsOpen ? 'nav-item is-active' : 'nav-item'}
              type="button"
              key={item.id}
              aria-current={destination === item.id && !settingsOpen ? 'page' : undefined}
              onClick={() => { playEffect('select'); onNavigate(item.id) }}
            >
              <span className="nav-icon" aria-hidden="true"><item.icon size={22} strokeWidth={2} /></span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
        <main className="app-main">{children}</main>
      </div>
    </div>
  )
}

function MobileHomeThemeControls() {
  const { family, setFamily, setBrightness } = useTheme()
  const brightness = useResolvedBrightness()
  const { playEffect } = useAudio()
  const chooseFamily = (nextFamily: 'spartans' | 'amazonians') => {
    playEffect('select')
    setFamily(nextFamily)
  }
  const toggleBrightness = () => {
    playEffect('select')
    setBrightness(brightness === 'dark' ? 'light' : 'dark')
  }
  return <div className="mobile-home-theme-controls" role="group" aria-label="Home theme controls">
    <label className="mobile-home-faction">
      <span>Faction</span>
      <select aria-label="Faction" value={family} onChange={(event) => chooseFamily(event.target.value as 'spartans' | 'amazonians')}>
        <option value="spartans">Spartans</option>
        <option value="amazonians">Amazonians</option>
      </select>
    </label>
    <button type="button" aria-label={`Switch to ${brightness === 'dark' ? 'light' : 'dark'} mode`} onClick={toggleBrightness}>{brightness === 'dark' ? <Moon aria-hidden="true" /> : <Sun aria-hidden="true" />}</button>
  </div>
}
