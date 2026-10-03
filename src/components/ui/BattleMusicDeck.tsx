import type { BackgroundMusicPreference } from '../../data/models'

export const BATTLE_MUSIC_OPTIONS: ReadonlyArray<{ value: BackgroundMusicPreference; label: string; channel: string }> = [
  { value: 'warrior', label: 'Warrior', channel: '01' },
  { value: 'hardened', label: 'Hardened', channel: '02' },
  { value: 'villain', label: 'Villain', channel: '03' },
  { value: 'none', label: 'None', channel: '00' },
]

export const BATTLE_MUSIC_LABELS = Object.fromEntries(
  BATTLE_MUSIC_OPTIONS.map((option) => [option.value, option.label]),
) as Record<BackgroundMusicPreference, string>

export function AudioEqualizer() {
  return <span className="music-equalizer" aria-hidden="true"><i /><i /><i /></span>
}

function PixelMuteIcon() {
  return <svg className="music-mute-icon" viewBox="0 0 18 14" aria-hidden="true" shapeRendering="crispEdges"><path d="M1 5H4V3H7V2H9V12H7V11H4V9H1Z" fill="currentColor" /><path d="M11 3H13V5H11ZM15 3H17V5H15ZM13 5H15V7H13ZM11 7H13V9H11ZM15 7H17V9H15Z" fill="currentColor" /></svg>
}

export function BattleMusicDeck({ className = '', name, value, disabled = false, onSelect }: {
  className?: string
  name: string
  value: BackgroundMusicPreference
  disabled?: boolean
  onSelect: (track: BackgroundMusicPreference) => void
}) {
  return <fieldset className={`battle-music-deck ${className}`.trim()} disabled={disabled}>
    <legend className="battle-music-deck-heading"><span>BATTLE MUSIC</span><small>BGM DECK</small></legend>
    <div className="battle-music-channel-list">
      {BATTLE_MUSIC_OPTIONS.map((option) => {
        const selected = value === option.value
        const musicEnabled = option.value !== 'none'
        return <label key={option.value} className={`battle-music-channel${selected ? ' is-active' : ''}`}>
          <input type="radio" name={name} value={option.value} checked={selected} onChange={() => onSelect(option.value)} />
          <span className="battle-music-channel-number" aria-hidden="true">{option.channel}</span>
          <span className="battle-music-channel-copy"><strong>{option.label}</strong><small>{musicEnabled ? 'BGM CHANNEL' : 'MUSIC OFF'}</small></span>
          <span className="battle-music-channel-state" aria-hidden="true">{selected ? musicEnabled ? <><AudioEqualizer /><b>ACTIVE</b></> : <><PixelMuteIcon /><b>ACTIVE</b></> : <i className="battle-music-node" />}</span>
        </label>
      })}
    </div>
  </fieldset>
}
