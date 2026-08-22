import { Check } from 'lucide-react'
import { AvatarPortrait } from './AvatarPortrait'
import { AVATARS, type AvatarFaction } from './avatars'
import { useAvatar } from './useAvatar'

const groups: Array<{ faction: AvatarFaction; label: string }> = [
  { faction: 'spartans', label: 'Spartans' },
  { faction: 'amazonians', label: 'Amazonians' },
]

export function AvatarSelector({ compact = false }: { compact?: boolean }) {
  const { selectedAvatar, selectAvatar } = useAvatar()

  return (
    <div className={compact ? 'avatar-selector is-compact' : 'avatar-selector'}>
      {groups.map((group) => (
        <fieldset className="avatar-group" key={group.faction}>
          <legend>{group.label}</legend>
          <div className="avatar-grid">
            {AVATARS.filter((avatar) => avatar.faction === group.faction).map((avatar) => (
              <label className={selectedAvatar.id === avatar.id ? 'avatar-option is-selected' : 'avatar-option'} key={avatar.id}>
                <input type="radio" name="avatar" value={avatar.id} checked={selectedAvatar.id === avatar.id} onChange={() => selectAvatar(avatar.id)} />
                <AvatarPortrait avatar={avatar} size={compact ? 'small' : 'medium'} />
                <span className="avatar-option-copy"><strong>{avatar.name}</strong><small>{avatar.archetype}</small></span>
                <span className="avatar-selected-mark" aria-hidden="true"><Check size={14} strokeWidth={3} /></span>
              </label>
            ))}
          </div>
        </fieldset>
      ))}
      <aside className="selected-avatar-detail" aria-live="polite" aria-label={`Selected avatar: ${selectedAvatar.name}`}>
        <p className="eyebrow">Selected champion</p>
        <div><strong>{selectedAvatar.name}</strong><span>{selectedAvatar.archetype}</span></div>
        <blockquote>“{selectedAvatar.tagline}”</blockquote>
      </aside>
    </div>
  )
}
