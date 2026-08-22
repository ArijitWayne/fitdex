import { useLayoutEffect, useMemo, useState } from 'react'
import { deviceStorage } from '../../platform/deviceStorage'
import { useTheme } from '../../theme/useTheme'
import { AvatarContext, type AvatarContextValue } from './avatarContext'
import { getAvatar, getDefaultAvatar, migrateAvatarId } from './avatars'

const SELECTED_AVATAR_STORAGE_KEY = 'fitdex.profile.avatar'

export function AvatarProvider({ children }: { children: React.ReactNode }) {
  const { family } = useTheme()
  const [selectedId, setSelectedId] = useState(() => {
    const saved = migrateAvatarId(deviceStorage.get(SELECTED_AVATAR_STORAGE_KEY))
    return getAvatar(saved)?.id ?? getDefaultAvatar(family).id
  })
  const selectedAvatar = getAvatar(selectedId) ?? getDefaultAvatar(family)

  useLayoutEffect(() => {
    deviceStorage.set(SELECTED_AVATAR_STORAGE_KEY, selectedAvatar.id)
  }, [selectedAvatar.id])

  const value = useMemo<AvatarContextValue>(
    () => ({
      selectedAvatar,
      selectAvatar(id) {
        if (getAvatar(id)) setSelectedId(id)
      },
    }),
    [selectedAvatar],
  )

  return <AvatarContext.Provider value={value}>{children}</AvatarContext.Provider>
}
