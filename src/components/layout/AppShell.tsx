import { ChartNoAxesColumnIncreasing, Dumbbell, House, NotebookTabs, Settings, Utensils } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import type { AppDestination } from '../../types/navigation'

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
        <button className="wordmark" type="button" onClick={() => onNavigate('home')}>
          <span className="wordmark-mark">FD</span>
          <span>FitDex</span>
        </button>
        {!online ? <div className="connectivity-status" role="status" aria-live="polite"><span aria-hidden="true">●</span> Offline</div> : null}
        <button
          className={`icon-button ${settingsOpen ? 'is-active' : ''}`}
          type="button"
          aria-label="Open settings"
          aria-pressed={settingsOpen}
          onClick={onOpenSettings}
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
              onClick={() => onNavigate(item.id)}
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
