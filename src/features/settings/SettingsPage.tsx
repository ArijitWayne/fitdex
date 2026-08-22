import { ArrowLeft, Check } from 'lucide-react'
import { useState } from 'react'
import { AvatarPortrait } from '../avatar/AvatarPortrait'
import { AvatarSelector } from '../avatar/AvatarSelector'
import { useAvatar } from '../avatar/useAvatar'
import { useTheme } from '../../theme/useTheme'
import type { BrightnessPreference, ThemeFamily } from '../../theme/theme'

const brightnessOptions: Array<{ value: BrightnessPreference; label: string; hint: string }> = [
  { value: 'system', label: 'System', hint: 'Match this device' },
  { value: 'light', label: 'Light', hint: 'Always light' },
  { value: 'dark', label: 'Dark', hint: 'Always dark' },
]

const familyOptions: Array<{ value: ThemeFamily; label: string; hint: string }> = [
  { value: 'spartans', label: 'Spartans', hint: 'Steel • Petrol • Green • Bronze' },
  { value: 'amazonians', label: 'Amazonians', hint: 'Plum • Amethyst • Wine • Copper' },
]

function SoonButton({ children }: { children: React.ReactNode }) {
  return <button className="setting-action" type="button" disabled>{children}<span>Soon</span></button>
}

export function SettingsPage({ onBack, onReplayTutorial }: { onBack: () => void; onReplayTutorial: () => void }) {
  const { family, brightness, setFamily, setBrightness } = useTheme()
  const { selectedAvatar } = useAvatar()
  const [choosingAvatar, setChoosingAvatar] = useState(false)

  if (choosingAvatar) {
    return (
      <div className="page-stack avatar-selection-page">
        <header className="page-header settings-header">
          <button className="back-button" type="button" onClick={() => setChoosingAvatar(false)} aria-label="Back to settings"><ArrowLeft size={21} strokeWidth={2} aria-hidden="true" /></button>
          <div><p className="eyebrow">Profile / Avatar</p><h1>Choose your champion</h1><p>Your champion is cosmetic and can be changed at any time.</p></div>
        </header>
        <AvatarSelector />
      </div>
    )
  }

  return (
    <div className="page-stack settings-page">
      <header className="page-header settings-header">
        <button className="back-button" type="button" onClick={onBack} aria-label="Back to FitDex"><ArrowLeft size={21} strokeWidth={2} aria-hidden="true" /></button>
        <div><p className="eyebrow">System menu</p><h1>Settings</h1><p>Shape FitDex around the way you train.</p></div>
      </header>

      <section className="settings-section" aria-labelledby="appearance-heading">
        <div className="settings-section-heading"><span>01</span><div><h2 id="appearance-heading">Appearance</h2><p>Choose how FitDex looks on this device.</p></div></div>
        <fieldset className="appearance-group">
          <legend>Theme family</legend>
          <div className="family-picker">
            {familyOptions.map((option) => (
              <label className={family === option.value ? 'appearance-option family-option is-selected' : 'appearance-option family-option'} key={option.value}>
                <input type="radio" name="theme-family" value={option.value} checked={family === option.value} onChange={() => setFamily(option.value)} />
                <span className={`family-swatch family-swatch-${option.value}`} aria-hidden="true"><i /><i /><i /></span>
                <span className="option-copy"><strong>{option.label}</strong><small>{option.hint}</small></span>
                <span className="selection-mark" aria-hidden="true"><Check size={15} strokeWidth={3} /></span>
              </label>
            ))}
          </div>
        </fieldset>
        <fieldset className="appearance-group">
          <legend>Brightness</legend>
          <div className="brightness-picker">
            {brightnessOptions.map((option) => (
              <label className={brightness === option.value ? 'appearance-option brightness-option is-selected' : 'appearance-option brightness-option'} key={option.value}>
                <input type="radio" name="brightness" value={option.value} checked={brightness === option.value} onChange={() => setBrightness(option.value)} />
                <span className={`brightness-swatch brightness-swatch-${option.value}`} aria-hidden="true" />
                <span className="option-copy"><strong>{option.label}</strong><small>{option.hint}</small></span>
                <span className="selection-mark" aria-hidden="true"><Check size={15} strokeWidth={3} /></span>
              </label>
            ))}
          </div>
        </fieldset>
        <p className="appearance-note">Both styles are available to everyone. Brightness is selected independently.</p>
      </section>

      <section className="settings-section" aria-labelledby="profile-heading">
        <div className="settings-section-heading"><span>02</span><div><h2 id="profile-heading">Profile / Avatar</h2><p>Your cosmetic FitDex champion. No account required.</p></div></div>
        <div className="profile-avatar-row">
          <AvatarPortrait avatar={selectedAvatar} size="small" />
          <div><strong>{selectedAvatar.name}</strong><small>{selectedAvatar.archetype}</small></div>
          <button className="secondary-button" type="button" onClick={() => setChoosingAvatar(true)}>Change avatar</button>
        </div>
      </section>

      <SettingsPlaceholder number="03" title="Units" description="Measurement and display preferences." />
      <SettingsPlaceholder number="04" title="Workout Preferences" description="Defaults for training and rest periods." />
      <SettingsPlaceholder number="05" title="Nutrition" description="Daily targets and nutrition display." />
      <SettingsPlaceholder number="06" title="Gamification" description="XP, quests, and achievement preferences." />

      <section className="settings-section" aria-labelledby="storage-heading">
        <div className="settings-section-heading"><span>07</span><div><h2 id="storage-heading">Data &amp; Storage</h2><p>Your device is the source of truth. Backup tools arrive in a future phase.</p></div></div>
        <div className="settings-action-grid"><SoonButton>Create Backup</SoonButton><SoonButton>Restore Backup</SoonButton><SoonButton>Export My Data</SoonButton></div>
        <dl className="setting-list">
          <div><dt>Automatic Backups</dt><dd>Not configured</dd></div>
          <div><dt>Backup Frequency</dt><dd>Weekly</dd></div>
          <div><dt>Backup Location</dt><dd>Choose when available</dd></div>
          <div><dt>Number of Backups Retained</dt><dd>3</dd></div>
        </dl>
      </section>

      <SettingsPlaceholder number="08" title="Exercise Dex" description="Exercise library and custom categories." />

      <section className="settings-section" aria-labelledby="help-heading">
        <div className="settings-section-heading"><span>09</span><div><h2 id="help-heading">Help</h2><p>Return to the field guide whenever you need it.</p></div></div>
        <button className="setting-action" type="button" onClick={onReplayTutorial}>Replay tutorial<span>10 slides →</span></button>
      </section>

      <section className="settings-section" aria-labelledby="about-heading">
        <div className="settings-section-heading"><span>10</span><div><h2 id="about-heading">About FitDex</h2><p>Retro RPG energy. Modern fitness tracking. Local by design.</p></div></div>
        <div className="about-row"><span className="wordmark-mark">FD</span><div><strong>FitDex</strong><small>Phase 0 · Foundation</small></div></div>
      </section>
    </div>
  )
}

function SettingsPlaceholder({ number, title, description }: { number: string; title: string; description: string }) {
  return <section className="settings-section"><div className="settings-section-heading"><span>{number}</span><div><h2>{title}</h2><p>{description}</p></div></div><p className="coming-soon">Configuration coming in a future phase</p></section>
}
