import { useContext } from 'react'
import { AvatarContext } from './avatarContext'

export function useAvatar() {
  const context = useContext(AvatarContext)
  if (!context) throw new Error('useAvatar must be used within AvatarProvider')
  return context
}
