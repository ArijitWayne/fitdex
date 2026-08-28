import { UserRound } from 'lucide-react'
import { useRef, useState } from 'react'
import { displayNameLength, isValidDisplayName, limitDisplayNameInput, MAX_DISPLAY_NAME_LENGTH } from './displayNameModel'
import { useProfile } from './useProfile'
import { useAudio } from '../audio/useAudio'
import { useBackNavigation } from '../navigation/useBackNavigation'

export function RequiredDisplayNamePrompt({ initialOnboarding = false, onSaved }: { initialOnboarding?: boolean; onSaved?: () => void }) {
  const { saveDisplayName } = useProfile()
  const { playEffect } = useAudio()
  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  const [saving, setSaving] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  useBackNavigation('required-display-name', true, () => inputRef.current?.focus(), 110)

  const submit = () => {
    if (!isValidDisplayName(value)) { setError('Enter a Display Name from 1 to 24 characters.'); inputRef.current?.focus(); return }
    setSaving(true)
    setError('')
    void saveDisplayName(value).then(() => { playEffect('select'); onSaved?.() }).catch((reason: unknown) => setError(reason instanceof Error ? reason.message : 'Display Name could not be saved.')).finally(() => setSaving(false))
  }

  return <div className="onboarding-backdrop profile-name-backdrop" role="dialog" aria-modal="true" aria-labelledby="required-display-name-title">
    <section className="profile-name-prompt">
      <header><span className="tutorial-glyph" aria-hidden="true"><UserRound size={34} strokeWidth={1.75} /></span><p className="eyebrow">{initialOnboarding ? 'Initialize profile' : 'Before we continue'}</p><h1 id="required-display-name-title">What should FitDex call you?</h1><p>This name is stored only on this device and can be changed later in Settings.</p></header>
      <label htmlFor="required-display-name">Display Name <strong aria-hidden="true">Required</strong><input ref={inputRef} id="required-display-name" type="text" value={value} required maxLength={MAX_DISPLAY_NAME_LENGTH} autoComplete="nickname" autoFocus disabled={saving} onChange={(event) => { setValue(limitDisplayNameInput(event.target.value)); setError('') }} aria-describedby="required-display-name-count required-display-name-help" aria-invalid={Boolean(error) || (value.length > 0 && !isValidDisplayName(value))} placeholder="Enter your name…" /></label>
      <div className="profile-name-meta"><small id="required-display-name-help">Required · 1–24 characters</small><strong id="required-display-name-count" aria-live="polite">{displayNameLength(value)} / {MAX_DISPLAY_NAME_LENGTH}</strong></div>
      {error ? <p className="form-error" role="alert">{error}</p> : null}
      <button className="primary-button" type="button" disabled={saving || !isValidDisplayName(value)} onClick={submit}>{saving ? 'Saving…' : 'Continue →'}</button>
    </section>
  </div>
}
