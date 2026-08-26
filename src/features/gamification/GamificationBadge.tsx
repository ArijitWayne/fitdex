import { Award, Shield } from 'lucide-react'
import { useState } from 'react'

export function GamificationBadge({ src, label, kind, locked = false, size = 'medium' }: { src: string; label: string; kind: 'rank' | 'achievement'; locked?: boolean; size?: 'small' | 'medium' | 'large' }) {
  const [failed, setFailed] = useState(false)
  const accessibleLabel = `${label}${locked ? ', locked' : ''}`
  return <span className={`gamification-badge is-${kind} is-${size}${locked ? ' is-locked' : ''}`}>
    {!failed ? <img src={src} alt={accessibleLabel} onError={() => setFailed(true)} /> : <span role="img" aria-label={accessibleLabel}>{kind === 'rank' ? <Shield aria-hidden="true" /> : <Award aria-hidden="true" />}</span>}
  </span>
}
