import { ArrowLeft, Check } from 'lucide-react'
import { useEffect, useState } from 'react'
import type { BackgroundMusicPreference, NutritionActivityLevel, NutritionGoal, NutritionSex, NutritionTargets } from '../../data/models'
import { calculateRmr, calculateSuggestedCalorieTargets, calculateTdee } from '../nutritionTargets/nutritionTargetCalculator'
import { loadNutritionTargets, saveNutritionTargets } from '../nutritionTargets/nutritionTargetRepository'
import { AvatarPortrait } from '../avatar/AvatarPortrait'
import { AvatarSelector } from '../avatar/AvatarSelector'
import { useAvatar } from '../avatar/useAvatar'
import { displayNameLength, isValidDisplayName, limitDisplayNameInput, MAX_DISPLAY_NAME_LENGTH } from '../profile/displayNameModel'
import { useProfile } from '../profile/useProfile'
import { useTheme } from '../../theme/useTheme'
import type { BrightnessPreference, ThemeFamily } from '../../theme/theme'
import { GamificationHelpButton } from '../gamification/GamificationViews'
import { APP_VERSION } from '../../appVersion'
import { BackupSettings } from '../backup/BackupSettings'
import { ExerciseMediaSettings } from '../exerciseMedia/ExerciseMediaSettings'
import { useAudio } from '../audio/useAudio'

const brightnessOptions: Array<{ value: BrightnessPreference; label: string; hint: string }> = [
  { value: 'system', label: 'System', hint: 'Match this device' },
  { value: 'light', label: 'Light', hint: 'Always light' },
  { value: 'dark', label: 'Dark', hint: 'Always dark' },
]

const familyOptions: Array<{ value: ThemeFamily; label: string; hint: string }> = [
  { value: 'spartans', label: 'Spartans', hint: 'Steel • Petrol • Green • Bronze' },
  { value: 'amazonians', label: 'Amazonians', hint: 'Plum • Amethyst • Wine • Copper' },
]

export function SettingsPage({ onBack, onReplayTutorial }: { onBack: () => void; onReplayTutorial: () => void }) {
  const { family, brightness, setFamily, setBrightness } = useTheme()
  const { selectedAvatar } = useAvatar()
  const { displayName, ready, saveDisplayName } = useProfile()
  const [choosingAvatar, setChoosingAvatar] = useState(false)
  const { playEffect } = useAudio()

  if (choosingAvatar) {
    return (
      <div className="page-stack avatar-selection-page">
        <header className="page-header settings-header">
          <button className="back-button" type="button" onClick={() => { playEffect('select'); setChoosingAvatar(false) }} aria-label="Back to settings"><ArrowLeft size={21} strokeWidth={2} aria-hidden="true" /></button>
          <div><p className="eyebrow">Profile / Avatar</p><h1>Choose your champion</h1><p>Your champion is cosmetic and can be changed at any time.</p></div>
        </header>
        <AvatarSelector />
      </div>
    )
  }

  return (
    <div className="page-stack settings-page">
      <header className="page-header settings-header">
        <button className="back-button" type="button" onClick={() => { playEffect('select'); onBack() }} aria-label="Back to FitDex"><ArrowLeft size={21} strokeWidth={2} aria-hidden="true" /></button>
        <div><p className="eyebrow">System menu</p><h1>Settings</h1><p>Shape FitDex around the way you train.</p></div>
      </header>

      <section className="settings-section" aria-labelledby="appearance-heading">
        <div className="settings-section-heading"><span>01</span><div><h2 id="appearance-heading">Appearance</h2><p>Choose how FitDex looks on this device.</p></div></div>
        <fieldset className="appearance-group">
          <legend>Theme family</legend>
          <div className="family-picker">
            {familyOptions.map((option) => (
              <label className={family === option.value ? 'appearance-option family-option is-selected' : 'appearance-option family-option'} key={option.value}>
                <input type="radio" name="theme-family" value={option.value} checked={family === option.value} onChange={() => { playEffect('select'); setFamily(option.value) }} />
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
                <input type="radio" name="brightness" value={option.value} checked={brightness === option.value} onChange={() => { playEffect('select'); setBrightness(option.value) }} />
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
        <div className="settings-section-heading"><span>02</span><div><h2 id="profile-heading">Profile</h2><p>Local preferences for how FitDex addresses you. No account required.</p></div></div>
        <DisplayNameForm key={ready ? 'profile-ready' : 'profile-loading'} displayName={displayName} ready={ready} onSave={saveDisplayName} />
        <div className="profile-avatar-row">
          <AvatarPortrait avatar={selectedAvatar} size="small" />
          <div><strong>{selectedAvatar.name}</strong><small>{selectedAvatar.archetype}</small></div>
          <button className="secondary-button" type="button" onClick={() => { playEffect('select'); setChoosingAvatar(true) }}>Change avatar</button>
        </div>
      </section>

      <SettingsPlaceholder number="03" title="Units" description="Measurement and display preferences." />
      <SettingsPlaceholder number="04" title="Workout Preferences" description="Defaults for training and rest periods." />
      <NutritionTargetsSettings />
      <section className="settings-section" aria-labelledby="gamification-heading"><div className="settings-section-heading"><span>06</span><div><h2 id="gamification-heading">Gamification</h2><p>XP, Levels, Ranks, Plan Streak protection, and Achievements stay local to this device.</p></div></div><GamificationHelpButton /></section>

      <AudioSettings />
      <ExerciseMediaSettings />
      <BackupSettings />

      <section className="settings-section" aria-labelledby="help-heading">
        <div className="settings-section-heading"><span>10</span><div><h2 id="help-heading">Help</h2><p>Return to the field guide whenever you need it.</p></div></div>
        <button className="setting-action" type="button" onClick={() => { playEffect('select'); onReplayTutorial() }}>Replay tutorial<span>7 topics →</span></button>
      </section>

      <section className="settings-section" aria-labelledby="about-heading">
        <div className="settings-section-heading"><span>11</span><div><h2 id="about-heading">About FitDex</h2><p>Retro RPG fitness tracking. Local by design.</p></div></div>
        <div className="about-row"><img className="about-app-icon" src="/pwa-icon.svg" alt="FitDex" /><div><strong>FitDex</strong><small>Version {APP_VERSION}</small></div></div>
        <section className="about-copy" aria-label="About FitDex"><p>FitDex is a local-first fitness tracker for workouts, nutrition, progress tracking, and RPG-style progression.</p><h3>Developed by</h3><p>Arijit Bhaduri</p><h3>Privacy &amp; Data</h3><p>Your FitDex fitness data is stored locally on your device. FitDex does not require an account or FitDex cloud sync.</p></section>
        <dl className="setting-list about-app-info"><div><dt>Version</dt><dd>{APP_VERSION}</dd></div></dl>
      </section>
    </div>
  )
}

const musicOptions: Array<{ value: BackgroundMusicPreference; label: string }> = [
  { value: 'warrior', label: 'Warrior' },
  { value: 'hardened', label: 'Hardened' },
  { value: 'villain', label: 'Villain' },
  { value: 'none', label: 'No Music' },
]

function AudioSettings() {
  const { ready, soundEffectsEnabled, backgroundMusic, setSoundEffectsEnabled, setBackgroundMusic } = useAudio()
  return <section className="settings-section audio-settings" aria-labelledby="audio-heading">
    <div className="settings-section-heading"><span>07</span><div><h2 id="audio-heading">Audio</h2><p>Choose local sounds for your FitDex experience.</p></div></div>
    <label className="audio-sfx-toggle"><span><strong>Sound Effects</strong><small>UI and progress sounds</small></span><input type="checkbox" checked={soundEffectsEnabled} disabled={!ready} onChange={(event) => setSoundEffectsEnabled(event.target.checked)} /><i aria-hidden="true">{soundEffectsEnabled ? 'ON' : 'OFF'}</i></label>
    <fieldset className="appearance-group audio-music-picker" disabled={!ready}><legend>Background Music</legend><div className="brightness-picker">
      {musicOptions.map((option) => <label className={backgroundMusic === option.value ? 'appearance-option audio-option is-selected' : 'appearance-option audio-option'} key={option.value}><input type="radio" name="background-music" value={option.value} checked={backgroundMusic === option.value} onChange={() => setBackgroundMusic(option.value)} /><span className="option-copy"><strong>{option.label}</strong></span><span className="selection-mark" aria-hidden="true"><Check size={15} strokeWidth={3} /></span></label>)}
    </div></fieldset>
  </section>
}

function DisplayNameForm({ displayName, ready, onSave }: { displayName: string; ready: boolean; onSave: (value: string) => Promise<string> }) {
  const [value, setValue] = useState(displayName)
  const [status, setStatus] = useState('')
  const [saving, setSaving] = useState(false)
  return <form className="display-name-form" onSubmit={(event) => {
    event.preventDefault()
    if (!isValidDisplayName(value)) { setStatus('Enter a Display Name from 1 to 24 characters.'); return }
    setSaving(true)
    setStatus('')
    void onSave(value).then((saved) => { setValue(saved); setStatus('Display Name saved.') }).catch((reason: unknown) => setStatus(reason instanceof Error ? reason.message : 'Display Name could not be saved.')).finally(() => setSaving(false))
  }}>
    <label htmlFor="display-name"><span>Display Name <em aria-hidden="true">Required</em></span><input id="display-name" value={value} disabled={!ready || saving} required maxLength={MAX_DISPLAY_NAME_LENGTH} onChange={(event) => setValue(limitDisplayNameInput(event.target.value))} autoComplete="nickname" aria-describedby="display-name-help display-name-count" aria-invalid={value.length > 0 && !isValidDisplayName(value)} /></label>
    <p id="display-name-help">Shown in your FitDex greeting. Stored only on this device.</p>
    <p className="display-name-count" id="display-name-count" aria-live="polite">{displayNameLength(value)} / {MAX_DISPLAY_NAME_LENGTH}</p>
    <button className="secondary-button" type="submit" disabled={!ready || saving || !isValidDisplayName(value)}>{saving ? 'Saving…' : 'Save Display Name'}</button>
    {status ? <p className={status.includes('could not') || status.includes('Enter') ? 'form-error' : 'display-name-status'} role="status">{status}</p> : null}
  </form>
}

function SettingsPlaceholder({ number, title, description }: { number: string; title: string; description: string }) {
  return <section className="settings-section"><div className="settings-section-heading"><span>{number}</span><div><h2>{title}</h2><p>{description}</p></div></div><p className="coming-soon">No preferences are available here yet.</p></section>
}

const targetDefaults: Omit<NutritionTargets, 'updatedAt'> = { enabled: true, goal: 'lose', age: 30, sex: 'female', heightCm: 165, weightKg: 65, activityLevel: 'moderate', calorieTarget: 1800, proteinTargetGrams: 0, calorieTargetSource: 'calculated' }
type NutritionTargetDraft = Record<'age' | 'heightCm' | 'weightKg' | 'calorieTarget' | 'proteinTargetGrams', string>
const draftFromTargets = (targets: Omit<NutritionTargets, 'updatedAt'>): NutritionTargetDraft => ({ age: String(targets.age), heightCm: String(targets.heightCm), weightKg: String(targets.weightKg), calorieTarget: String(targets.calorieTarget), proteinTargetGrams: String(targets.proteinTargetGrams) })

function NutritionTargetsSettings() {
  const [targets, setTargets] = useState<Omit<NutritionTargets, 'updatedAt'>>(targetDefaults)
  const [draft, setDraft] = useState<NutritionTargetDraft>(() => draftFromTargets(targetDefaults))
  const [ready, setReady] = useState(false); const [status, setStatus] = useState('')
  useEffect(() => { void loadNutritionTargets().then((saved) => { if (saved) { const { updatedAt: _, ...rest } = saved; setTargets(rest); setDraft(draftFromTargets(rest)) }; setReady(true) }) }, [])
  const parsed = parseNutritionTargetDraft(draft)
  const rmr = parsed ? safeRmr({ ...targets, ...parsed }) : 0; const tdee = rmr ? calculateTdee(rmr, targets.activityLevel) : 0; const suggestions = tdee ? calculateSuggestedCalorieTargets(tdee, targets.goal) : undefined
  const update = <K extends keyof Omit<NutritionTargets, 'updatedAt'>>(key: K, value: Omit<NutritionTargets, 'updatedAt'>[K]) => setTargets((current) => ({ ...current, [key]: value }))
  const setNumber = (key: keyof NutritionTargetDraft, value: string) => setDraft((current) => ({ ...current, [key]: value }))
  const applyCalorie = (value: number, source: 'calculated' | 'manual') => { setNumber('calorieTarget', String(value)); update('calorieTargetSource', source) }
  const save = async () => { if (!parsed) { setStatus('Enter an age from 18 to 120 and valid positive height, weight, and calorie target values.'); return } try { await saveNutritionTargets({ ...targets, ...parsed }); setStatus('Nutrition targets saved.') } catch (reason) { setStatus(reason instanceof Error ? reason.message : 'Nutrition targets could not be saved.') } }
  return <section className="settings-section nutrition-target-settings" aria-labelledby="nutrition-targets-heading"><div className="settings-section-heading"><span>05</span><div><h2 id="nutrition-targets-heading">Nutrition Targets</h2><p>Your targets are estimates. You can change them anytime.</p></div></div>{!ready ? <p>Loading targets…</p> : <><label className="target-toggle"><input type="checkbox" checked={targets.enabled} onChange={(event) => update('enabled', event.target.checked)} /><span>Enable Nutrition Targets</span></label><fieldset className="target-form"><legend>Set your goal</legend>{(['lose', 'maintain', 'gain'] as NutritionGoal[]).map((goal) => <label key={goal}><input type="radio" name="nutrition-goal" checked={targets.goal === goal} onChange={() => update('goal', goal)} /> {goal === 'lose' ? 'Lose Weight' : goal === 'gain' ? 'Gain Weight' : 'Maintain Weight'}</label>)}</fieldset><fieldset className="target-form"><legend>My details</legend><NumericTargetInput label="Age" value={draft.age} onChange={(value) => setNumber('age', value)} min={18} max={120} /><label>Sex<select value={targets.sex} onChange={(event) => update('sex', event.target.value as NutritionSex)}><option value="female">Female</option><option value="male">Male</option></select></label><NumericTargetInput label="Height (cm)" value={draft.heightCm} onChange={(value) => setNumber('heightCm', value)} min={1} /><NumericTargetInput label="Weight (kg)" value={draft.weightKg} onChange={(value) => setNumber('weightKg', value)} min={1} step="0.1" decimal /><label>Activity<select value={targets.activityLevel} onChange={(event) => update('activityLevel', event.target.value as NutritionActivityLevel)}><option value="sedentary">Sedentary</option><option value="light">Lightly Active</option><option value="moderate">Moderately Active</option><option value="very">Very Active</option><option value="extreme">Extremely Active</option></select></label></fieldset>{suggestions ? <section className="target-recommendation"><p className="eyebrow">Target recommendation</p><strong>Estimated maintenance ≈ {tdee} kcal/day</strong><small>This is an estimate.</small>{targets.goal === 'lose' ? <div><button type="button" className="secondary-button" onClick={() => applyCalorie(suggestions.moderate, 'calculated')}>Moderate deficit · {suggestions.moderate} kcal</button><button type="button" className="secondary-button" onClick={() => applyCalorie(suggestions.higher, 'calculated')}>Higher deficit · {suggestions.higher} kcal</button></div> : <button type="button" className="secondary-button" onClick={() => applyCalorie(suggestions.defaultTarget, 'calculated')}>Use suggestion · {suggestions.defaultTarget} kcal</button>}</section> : null}<fieldset className="target-form"><legend>Confirm targets</legend><NumericTargetInput label="Daily calorie target" value={draft.calorieTarget} onChange={(value) => { setNumber('calorieTarget', value); update('calorieTargetSource', 'manual') }} min={1} /><NumericTargetInput label="Daily protein target (g)" value={draft.proteinTargetGrams} onChange={(value) => setNumber('proteinTargetGrams', value)} min={0} step="0.1" decimal /></fieldset><p className="appearance-note">Calorie needs are estimates. FitDex is not medical advice.</p><button className="primary-button" type="button" onClick={() => void save()}>Save Targets</button>{status ? <p className={status.includes('could') || status.includes('Enter') ? 'form-error' : 'display-name-status'} role="status">{status}</p> : null}</>}</section>
}

function NumericTargetInput({ label, value, onChange, min, max, step = '1', decimal = false }: { label: string; value: string; onChange: (value: string) => void; min: number; max?: number; step?: string; decimal?: boolean }) { return <label>{label}<input type="number" inputMode={decimal ? 'decimal' : 'numeric'} min={min} max={max} step={step} value={value} onChange={(event) => onChange(event.target.value)} /></label> }
function parseNutritionTargetDraft(draft: NutritionTargetDraft) { const age = Number(draft.age); const heightCm = Number(draft.heightCm); const weightKg = Number(draft.weightKg); const calorieTarget = Number(draft.calorieTarget); const proteinTargetGrams = Number(draft.proteinTargetGrams); if (!draft.age || !draft.heightCm || !draft.weightKg || !draft.calorieTarget || !draft.proteinTargetGrams && draft.proteinTargetGrams !== '0' || !Number.isInteger(age) || age < 18 || age > 120 || !Number.isFinite(heightCm) || heightCm <= 0 || !Number.isFinite(weightKg) || weightKg <= 0 || !Number.isFinite(calorieTarget) || calorieTarget <= 0 || !Number.isFinite(proteinTargetGrams) || proteinTargetGrams < 0) return undefined; return { age, heightCm, weightKg, calorieTarget, proteinTargetGrams } }
function safeRmr(targets: Omit<NutritionTargets, 'updatedAt'>) { try { return calculateRmr(targets) } catch { return 0 } }
