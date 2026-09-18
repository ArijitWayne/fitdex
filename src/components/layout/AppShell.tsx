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
  onToggleSettings?: () => void
  settingsOpen: boolean
}

export function AppShell({ children, destination, onNavigate, onOpenSettings, onToggleSettings, settingsOpen }: AppShellProps) {
  const { playEffect } = useAudio()
  const { family, setBrightness } = useTheme()
  const resolvedBrightness = useResolvedBrightness()
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
        <div className="header-actions">
          <button
            className="icon-button"
            type="button"
            aria-label={resolvedBrightness === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={() => {
              playEffect('select')
              setBrightness(resolvedBrightness === 'dark' ? 'light' : 'dark')
            }}
          >
            {resolvedBrightness === 'dark' ? <Sun size={20} strokeWidth={2} aria-hidden="true" /> : <Moon size={20} strokeWidth={2} aria-hidden="true" />}
          </button>
          <button
            className={`icon-button ${settingsOpen ? 'is-active' : ''}`}
            type="button"
            aria-label="Open settings"
            aria-pressed={settingsOpen}
            onClick={() => {
              playEffect('select')
              if (onToggleSettings) onToggleSettings()
              else onOpenSettings()
            }}
          >
            <Settings size={21} strokeWidth={2} aria-hidden="true" />
          </button>
        </div>
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
