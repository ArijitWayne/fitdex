import { createContext } from 'react'
import type { AvatarConfig } from './avatars'

export interface AvatarContextValue {
  selectedAvatar: AvatarConfig
  selectAvatar: (id: string) => void
}

export const AvatarContext = createContext<AvatarContextValue | null>(null)
