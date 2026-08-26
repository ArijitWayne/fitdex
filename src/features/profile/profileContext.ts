import { createContext } from 'react'

export interface ProfileContextValue {
  displayName: string
  ready: boolean
  saveDisplayName: (value: string) => Promise<string>
}

export const ProfileContext = createContext<ProfileContextValue | null>(null)
