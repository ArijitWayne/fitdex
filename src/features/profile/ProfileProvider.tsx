import { useEffect, useMemo, useState } from 'react'
import { ProfileContext, type ProfileContextValue } from './profileContext'
import { loadDisplayName, saveDisplayName as persistDisplayName } from './profileRepository'

export function ProfileProvider({ children }: { children: React.ReactNode }) {
  const [displayName, setDisplayName] = useState('')
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let current = true
    void loadDisplayName().then((name) => { if (current) { setDisplayName(name); setReady(true) } }).catch(() => { if (current) setReady(true) })
    return () => { current = false }
  }, [])

  const value = useMemo<ProfileContextValue>(() => ({
    displayName,
    ready,
    async saveDisplayName(value) {
      const saved = await persistDisplayName(value)
      setDisplayName(saved)
      return saved
    },
  }), [displayName, ready])

  return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
}
