import { useState } from 'react'
import { UserRound } from 'lucide-react'
import type { AvatarConfig } from './avatars'

type ImageStatus = 'loading' | 'loaded' | 'error'

export function AvatarPortrait({ avatar, size = 'medium' }: { avatar: AvatarConfig; size?: 'small' | 'medium' | 'large' }) {
  const [imageState, setImageState] = useState<{ assetPath: string; status: ImageStatus }>({
    assetPath: avatar.assetPath,
    status: 'loading',
  })
  const imageStatus = imageState.assetPath === avatar.assetPath ? imageState.status : 'loading'

  return (
    <span className={`avatar-portrait avatar-portrait-${size}`} data-faction={avatar.faction} data-image-status={imageStatus}>
      {imageStatus === 'error' && (
        <span className="avatar-fallback" aria-hidden="true"><UserRound strokeWidth={1.5} /><small>Art pending</small></span>
      )}
      {imageStatus !== 'error' && (
        <img
          className={imageStatus === 'loaded' ? 'is-loaded' : undefined}
          src={avatar.assetPath}
          alt={`${avatar.name} pixel avatar`}
          loading="lazy"
          onLoad={() => setImageState({ assetPath: avatar.assetPath, status: 'loaded' })}
          onError={() => setImageState({ assetPath: avatar.assetPath, status: 'error' })}
        />
      )}
    </span>
  )
}
