import { ArrowLeft } from 'lucide-react'
import { useEffect, useState } from 'react'
import type { BackgroundMusicPreference, NutritionActivityLevel, NutritionGoal, NutritionSex, NutritionTargets } from '../../data/models'
import { brandingForTheme } from '../../branding/branding'
import { APP_VERSION } from '../../appVersion'
import type { BrightnessPreference, ThemeFamily } from '../../theme/theme'
import { useTheme } from '../../theme/useTheme'
import { AvatarPortrait } from '../avatar/AvatarPortrait'
import { AvatarSelector } from '../avatar/AvatarSelector'
import { useAvatar } from '../avatar/useAvatar'
import { useAudio } from '../audio/useAudio'
import { BackupSettings } from '../backup/BackupSettings'
import { ExerciseMediaSettings } from '../exerciseMedia/ExerciseMediaSettings'
import { listDownloadedExerciseMedia, supportsNativeExerciseMedia } from '../exerciseMedia/exerciseMediaStore'
import { GamificationHelpButton } from '../gamification/GamificationViews'
import { useBackNavigation } from '../navigation/useBackNavigation'
import { calculateRmr, calculateSuggestedCalorieTargets, calculateTdee } from '../nutritionTargets/nutritionTargetCalculator'
import { loadNutritionTargets, saveNutritionTargets } from '../nutritionTargets/nutritionTargetRepository'
import { displayNameLength, isValidDisplayName, limitDisplayNameInput, MAX_DISPLAY_NAME_LENGTH } from '../profile/displayNameModel'
import { useProfile } from '../profile/useProfile'
import { getLocalSettingsRecord, updateLocalSettings } from './settingsRepository'
import type { UnitPreference } from '../../utils/units'

const brightnessOptions: Array<{ value: BrightnessPreference; label: string }> = [
  { value: 'system', label: 'System' }, { value: 'light', label: 'Light' }, { value: 'dark', label: 'Dark' },
]
const familyOptions: Array<{ value: ThemeFamily; label: string }> = [
  { value: 'spartans', label: 'Spartan' }, { value: 'amazonians', label: 'Amazonian' },
]
const musicOptions: Array<{ value: BackgroundMusicPreference; label: string }> = [
  { value: 'warrior', label: 'Warrior' }, { value: 'hardened', label: 'Hardened' }, { value: 'villain', label: 'Villain' }, { value: 'none', label: 'None' },
]
const musicLabels = Object.fromEntries(musicOptions.map((option) => [option.value, option.label])) as Record<BackgroundMusicPreference, string>
const targetDefaults: Omit<NutritionTargets, 'updatedAt'> = { enabled: true, goal: 'lose', age: 30, sex: 'female', heightCm: 165, weightKg: 65, activityLevel: 'moderate', calorieTarget: 1800, proteinTargetGrams: 0, calorieTargetSource: 'calculated' }
type SettingsView = 'hub' | 'profile' | 'appearance' | 'units' | 'audio' | 'nutrition' | 'media' | 'backup' | 'about'
type NutritionTargetDraft = Record<'age' | 'heightCm' | 'weightKg' | 'calorieTarget' | 'proteinTargetGrams', string>

export function SettingsPage({ onBack, onReplayTutorial }: { onBack: () => void; onReplayTutorial: () => void }) {
  const { family, brightness, setFamily, setBrightness } = useTheme()
  const { selectedAvatar } = useAvatar()
  const { displayName, ready: profileReady, saveDisplayName } = useProfile()
  const { ready: audioReady, soundEffectsEnabled, backgroundMusic, playEffect, setSoundEffectsEnabled, setBackgroundMusic } = useAudio()
  const [units, setUnits] = useState<UnitPreference>('metric')
  const [view, setView] = useState<SettingsView>('hub')
  const [choosingAvatar, setChoosingAvatar] = useState(false)
  const [nutritionSummary, setNutritionSummary] = useState<Omit<NutritionTargets, 'updatedAt'>>(targetDefaults)
  const [downloadCount, setDownloadCount] = useState<number>()

  useEffect(() => {
    void getLocalSettingsRecord().then((record) => {
      if (record?.units) setUnits(record.units)
    })
  }, [])

  useEffect(() => {
    void loadNutritionTargets().then((saved) => {
      if (saved) {
        const { updatedAt: _, ...rest } = saved
        setNutritionSummary(rest)
      }
    })
  }, [])

  useEffect(() => {
    if (supportsNativeExerciseMedia()) void listDownloadedExerciseMedia().then((downloads) => setDownloadCount(downloads.length))
  }, [view])

  const backToHub = () => {
    playEffect('select')
    if (choosingAvatar) setChoosingAvatar(false)
    else setView('hub')
  }

  useBackNavigation('settings-subview', view !== 'hub' || choosingAvatar, () => {
    if (choosingAvatar) setChoosingAvatar(false)
    else setView('hub')
  })

  const openView = (next: SettingsView) => {
    playEffect('select')
    setView(next)
  }

  const handleSetUnits = async (nextUnits: UnitPreference) => {
    playEffect('select')
    setUnits(nextUnits)
    await updateLocalSettings({ units: nextUnits })
  }

  if (choosingAvatar) {
    return (
      <div className="page-stack avatar-selection-page">
        <SettingsSubheader eyebrow="Settings / Profile" title="Choose your champion" description="Your champion is cosmetic and can be changed at any time." onBack={backToHub} />
        <AvatarSelector />
      </div>
    )
  }

  if (view === 'profile') {
    return (
      <div className="page-stack settings-page settings-detail-page">
        <SettingsSubheader eyebrow="Settings / Personalize" title="Display Name & Avatar" description="Local identity for this device. No account required." onBack={backToHub} />
        <section className="settings-detail-card">
          <DisplayNameForm key={profileReady ? 'profile-ready' : 'profile-loading'} displayName={displayName} ready={profileReady} onSave={saveDisplayName} />
          <div className="profile-avatar-row">
            <AvatarPortrait avatar={selectedAvatar} size="small" />
            <div>
              <strong>{selectedAvatar.name}</strong>
              <small>{selectedAvatar.archetype}</small>
            </div>
            <button className="secondary-button" type="button" onClick={() => { playEffect('select'); setChoosingAvatar(true) }}>
              Change avatar
            </button>
          </div>
        </section>
      </div>
    )
  }

  if (view === 'appearance') {
    return (
      <div className="page-stack settings-page settings-detail-page">
        <SettingsSubheader eyebrow="Settings / Personalize" title="Appearance" description="Theme family and brightness for FitDex." onBack={backToHub} />
        <section className="settings-detail-card">
          <fieldset className="settings-fieldset">
            <legend>Theme Family</legend>
            <div className="settings-segmented">
              {familyOptions.map((option) => (
                <button type="button" key={option.value} aria-pressed={family === option.value} onClick={() => { playEffect('select'); setFamily(option.value) }}>
                  {option.label}
                </button>
              ))}
            </div>
          </fieldset>
          <fieldset className="settings-fieldset">
            <legend>Brightness</legend>
            <div className="settings-segmented settings-segmented-three">
              {brightnessOptions.map((option) => (
                <button type="button" key={option.value} aria-pressed={brightness === option.value} onClick={() => { playEffect('select'); setBrightness(option.value) }}>
                  {option.label}
                </button>
              ))}
            </div>
          </fieldset>
          <p className="appearance-note">Theme family changes branding. Avatar remains your independent choice. “System” brightness follows the device setting.</p>
        </section>
      </div>
    )
  }

  if (view === 'units') {
    return (
      <div className="page-stack settings-page settings-detail-page">
        <SettingsSubheader eyebrow="Settings / Your System" title="Units" description="Measurement system for workouts and logging." onBack={backToHub} />
        <section className="settings-detail-card">
          <fieldset className="settings-fieldset">
            <legend>Measurement System</legend>
            <div className="settings-segmented">
              <button type="button" aria-pressed={units === 'metric'} onClick={() => void handleSetUnits('metric')}>
                Metric<br /><small>kg · km</small>
              </button>
              <button type="button" aria-pressed={units === 'imperial'} onClick={() => void handleSetUnits('imperial')}>
                Imperial<br /><small>lb · mi</small>
              </button>
            </div>
          </fieldset>
          <p className="appearance-note">Stored workout values stay canonical. This changes weight and distance display and entry.</p>
          <p className="appearance-note">Nutrition calculation inputs remain labelled in kilograms and centimetres in today’s data model.</p>
        </section>
      </div>
    )
  }

  if (view === 'audio') {
    return (
      <div className="page-stack settings-page settings-detail-page">
        <SettingsSubheader eyebrow="Settings / Your System" title="Audio" description="Sound effects and background music." onBack={backToHub} />
        <AudioSettings
          ready={audioReady}
          soundEffectsEnabled={soundEffectsEnabled}
          backgroundMusic={backgroundMusic}
          playEffect={playEffect}
          setSoundEffectsEnabled={setSoundEffectsEnabled}
          setBackgroundMusic={setBackgroundMusic}
        />
      </div>
    )
  }

  if (view === 'nutrition') {
    return (
      <div className="page-stack settings-page settings-detail-page">
        <SettingsSubheader eyebrow="Settings / Your System" title="Nutrition Targets" description="Set daily targets using your goal and calculation profile." onBack={backToHub} />
        <NutritionTargetsSettings onLoaded={setNutritionSummary} />
      </div>
    )
  }

  if (view === 'media') {
    return (
      <div className="page-stack settings-page settings-detail-page">
        <SettingsSubheader eyebrow="Settings / Data & Offline" title="Exercise Media" description="Manage exercise demonstrations saved for offline use." onBack={backToHub} />
        <div className="settings-detail">
          <ExerciseMediaSettings />
          {!supportsNativeExerciseMedia() ? (
            <section className="settings-detail-card">
              <p>Offline exercise downloads are available in the Android app.</p>
            </section>
          ) : null}
        </div>
      </div>
    )
  }

  if (view === 'backup') {
    return (
      <div className="page-stack settings-page settings-detail-page">
        <SettingsSubheader eyebrow="Settings / Data & Offline" title="Backup & Restore" description="Protect or restore your local FitDex data." onBack={backToHub} />
        <div className="settings-detail"><BackupSettings /></div>
      </div>
    )
  }

  if (view === 'about') {
    return <AboutSettings family={family} onBack={backToHub} />
  }

  return (
    <div className="page-stack settings-page settings-hub">
      <header className="page-header settings-header">
        <button className="back-button" type="button" onClick={() => { playEffect('select'); onBack() }} aria-label="Back to FitDex">
          <ArrowLeft size={21} strokeWidth={2} aria-hidden="true" />
        </button>
        <div>
          <p className="eyebrow">Settings Utility Hub</p>
          <h1>Settings</h1>
          <p>Identity and personalization lead; utilities remain one tap away.</p>
        </div>
      </header>

      <section className="settings-hero">
        <AvatarPortrait avatar={selectedAvatar} size="medium" priority />
        <div className="settings-hero-copy">
          <p className="eyebrow">Player profile</p>
          <h2>{displayName || 'Player'}</h2>
          <p>{selectedAvatar.name} · {selectedAvatar.archetype} · local profile</p>
        </div>
      </section>

      <div className="settings-status-stack">
        <div className="settings-status-card">
          <small>Theme</small>
          <strong>{family === 'spartans' ? 'Spartans' : 'Amazonians'}</strong>
        </div>
        <div className="settings-status-card">
          <small>Units</small>
          <strong>{units === 'imperial' ? 'Imperial' : 'Metric'}</strong>
        </div>
        <div className="settings-status-card">
          <small>Targets</small>
          <strong>{nutritionSummary.enabled ? 'On' : 'Off'}</strong>
        </div>
      </div>

      <div className="settings-hub-groups">
        <SettingsGroup label="Personalize">
          <SettingsRow
            title="Identity"
            description="Display name and six avatars"
            value={selectedAvatar.name}
            onClick={() => openView('profile')}
          />
          <SettingsRow
            title="Appearance"
            description="Theme family and brightness"
            value={`${family === 'spartans' ? 'Spartans' : 'Amazonians'} · ${brightness}`}
            onClick={() => openView('appearance')}
          />
        </SettingsGroup>

        <SettingsGroup label="Your System">
          <SettingsRow
            title="Nutrition Targets"
            description="Calculation profile and daily targets"
            value={
              !nutritionSummary.enabled
                ? 'Off'
                : Number(nutritionSummary.proteinTargetGrams) > 0
                  ? `${nutritionSummary.calorieTarget} kcal · ${nutritionSummary.proteinTargetGrams} g protein`
                  : `${nutritionSummary.calorieTarget} kcal · Protein unavailable`
            }
            onClick={() => openView('nutrition')}
          />
          <SettingsRow
            title="Units"
            description="Weight and distance"
            value={units === 'metric' ? 'kg / km' : 'lb / mi'}
            onClick={() => openView('units')}
          />
          <SettingsRow
            title="Audio"
            description="Sound effects and battle music"
            value={`${soundEffectsEnabled ? 'SFX on' : 'SFX off'} · ${musicLabels[backgroundMusic]}`}
            onClick={() => openView('audio')}
          />
        </SettingsGroup>

        <SettingsGroup label="Data & Help">
          <SettingsRow
            title="Backup & Restore"
            description="Export or replace local data"
            value="Local file"
            onClick={() => openView('backup')}
          />
          {supportsNativeExerciseMedia() ? (
            <SettingsRow
              title="Exercise Media"
              description="Android offline downloads"
              value={downloadCount === undefined ? 'Device only' : `${downloadCount} downloaded`}
              onClick={() => openView('media')}
            />
          ) : null}
          <SettingsRow
            title="Field Guide"
            description="Replay the product tour"
            value="Replay"
            onClick={() => { playEffect('select'); onReplayTutorial() }}
          />
          <GamificationHelpButton variant="settings-row" />
          <SettingsRow
            title="About FitDex"
            description="Version and privacy"
            value={`v${APP_VERSION}`}
            onClick={() => openView('about')}
          />
        </SettingsGroup>
      </div>
    </div>
  )
}

function SettingsSubheader({ eyebrow, title, description, onBack }: { eyebrow: string; title: string; description: string; onBack: () => void }) {
  return (
    <header className="page-header settings-header settings-subheader">
      <button className="back-button" type="button" onClick={onBack} aria-label="Back to Settings">
        <ArrowLeft size={21} strokeWidth={2} aria-hidden="true" />
      </button>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </header>
  )
}

function SettingsGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="settings-section">
      <h2 className="settings-section-title">{label}</h2>
      <div className="settings-panel">{children}</div>
    </section>
  )
}

function SettingsRow({ title, description, value, onClick }: { title: string; description: string; value: string; onClick: () => void }) {
  return (
    <button className="settings-row" type="button" onClick={onClick}>
      <span className="settings-row-copy">
        <strong>{title}</strong>
        <small>{description}</small>
      </span>
      <span className="settings-row-value">
        {value}
        <span className="settings-chev" aria-hidden="true">›</span>
      </span>
    </button>
  )
}

function AboutSettings({ family, onBack }: { family: ThemeFamily; onBack: () => void }) {
  const branding = brandingForTheme(family)
  return (
    <div className="page-stack settings-page settings-detail-page">
      <SettingsSubheader eyebrow="Settings / Data & Help" title="About FitDex" description="Retro RPG fitness tracking. Local by design." onBack={onBack} />
      <section className="settings-detail-card">
        <div className="about-row">
          <img className="about-app-icon" src={branding.icon} alt="FitDex" />
          <div>
            <strong>FitDex</strong>
            <small>Version {APP_VERSION}</small>
          </div>
        </div>
        <section className="about-copy" aria-label="About FitDex">
          <p>FitDex is a local-first fitness tracker for workouts, nutrition, progress tracking, and RPG-style progression.</p>
          <h3>Developed by</h3>
          <p>Arijit Bhaduri</p>
          <h3>Privacy &amp; Data</h3>
          <p>Your FitDex fitness data is stored locally on your device. FitDex does not require an account or FitDex cloud sync.</p>
        </section>
      </section>
    </div>
  )
}

function AudioSettings({
  ready,
  soundEffectsEnabled,
  backgroundMusic,
  playEffect,
  setSoundEffectsEnabled,
  setBackgroundMusic,
}: {
  ready: boolean
  soundEffectsEnabled: boolean
  backgroundMusic: BackgroundMusicPreference
  playEffect: (effect: 'select' | 'add' | 'achievement_unlock' | 'progress_complete') => void
  setSoundEffectsEnabled: (enabled: boolean) => Promise<void> | void
  setBackgroundMusic: (track: BackgroundMusicPreference) => Promise<void> | void
}) {
  return (
    <section className="settings-detail-card settings-audio">
      <label className="settings-switch-row">
        <span>
          <strong>Sound Effects</strong>
          <small>UI and progress sounds</small>
        </span>
        <input type="checkbox" role="switch" checked={soundEffectsEnabled} disabled={!ready} onChange={(event) => void setSoundEffectsEnabled(event.target.checked)} />
        <i aria-hidden="true" />
      </label>
      <fieldset disabled={!ready}>
        <legend>Background Music</legend>
        <div className="settings-radio-list">
          {musicOptions.map((option) => (
            <label key={option.value}>
              <input type="radio" name="background-music" value={option.value} checked={backgroundMusic === option.value} onChange={() => { playEffect('select'); void setBackgroundMusic(option.value) }} />
              <span>
                <strong>{option.label}</strong>
                <small>{option.value === 'none' ? 'Turn battle music off' : 'Loop across navigation'}</small>
              </span>
              <i aria-hidden="true" />
            </label>
          ))}
        </div>
      </fieldset>
      <p className="appearance-note">Sound effects and battle music follow you throughout FitDex.</p>
    </section>
  )
}

function DisplayNameForm({ displayName, ready, onSave }: { displayName: string; ready: boolean; onSave: (value: string) => Promise<string> }) {
  const [value, setValue] = useState(displayName)
  const [status, setStatus] = useState('')
  const [saving, setSaving] = useState(false)

  return (
    <form
      className="display-name-form"
      onSubmit={(event) => {
        event.preventDefault()
        if (!isValidDisplayName(value)) {
          setStatus('Enter a Display Name from 1 to 24 characters.')
          return
        }
        setSaving(true)
        setStatus('')
        void onSave(value)
          .then((saved) => {
            setValue(saved)
            setStatus('Display Name saved.')
          })
          .catch((reason: unknown) => setStatus(reason instanceof Error ? reason.message : 'Display Name could not be saved.'))
          .finally(() => setSaving(false))
      }}
    >
      <label htmlFor="display-name">
        <span>Display Name <em aria-hidden="true">Required</em></span>
        <input
          id="display-name"
          value={value}
          disabled={!ready || saving}
          required
          maxLength={MAX_DISPLAY_NAME_LENGTH}
          onChange={(event) => setValue(limitDisplayNameInput(event.target.value))}
          autoComplete="nickname"
          aria-describedby="display-name-help display-name-count"
          aria-invalid={value.length > 0 && !isValidDisplayName(value)}
        />
      </label>
      <p id="display-name-help">Shown in your FitDex greeting. Stored only on this device.</p>
      <p className="display-name-count" id="display-name-count" aria-live="polite">
        {displayNameLength(value)} / {MAX_DISPLAY_NAME_LENGTH}
      </p>
      <button className="secondary-button" type="submit" disabled={!ready || saving || !isValidDisplayName(value)}>
        {saving ? 'Saving…' : 'Save Display Name'}
      </button>
      {status ? <p className={status.includes('could not') || status.includes('Enter') ? 'form-error' : 'display-name-status'} role="status">{status}</p> : null}
    </form>
  )
}

const draftFromTargets = (targets: Omit<NutritionTargets, 'updatedAt'>): NutritionTargetDraft => ({
  age: String(targets.age),
  heightCm: String(targets.heightCm),
  weightKg: String(targets.weightKg),
  calorieTarget: String(targets.calorieTarget),
  proteinTargetGrams: String(targets.proteinTargetGrams),
})

function NutritionTargetsSettings({ onLoaded }: { onLoaded: (targets: Omit<NutritionTargets, 'updatedAt'>) => void }) {
  const [targets, setTargets] = useState<Omit<NutritionTargets, 'updatedAt'>>(targetDefaults)
  const [draft, setDraft] = useState<NutritionTargetDraft>(() => draftFromTargets(targetDefaults))
  const [ready, setReady] = useState(false)
  const [status, setStatus] = useState('')

  useEffect(() => {
    void loadNutritionTargets().then((saved) => {
      if (saved) {
        const { updatedAt: _, ...rest } = saved
        setTargets(rest)
        setDraft(draftFromTargets(rest))
        onLoaded(rest)
      }
      setReady(true)
    })
  }, [onLoaded])

  const parsed = parseNutritionTargetDraft(draft)
  const rmr = parsed ? safeRmr({ ...targets, ...parsed }) : 0
  const tdee = rmr ? calculateTdee(rmr, targets.activityLevel) : 0
  const suggestions = tdee ? calculateSuggestedCalorieTargets(tdee, targets.goal) : undefined

  const update = <K extends keyof Omit<NutritionTargets, 'updatedAt'>>(key: K, value: Omit<NutritionTargets, 'updatedAt'>[K]) =>
    setTargets((current) => ({ ...current, [key]: value }))
  const setNumber = (key: keyof NutritionTargetDraft, value: string) =>
    setDraft((current) => ({ ...current, [key]: value }))
  const applyCalorie = (value: number, source: 'calculated' | 'manual') => {
    setNumber('calorieTarget', String(value))
    update('calorieTargetSource', source)
  }

  const save = async () => {
    if (!parsed) {
      setStatus('Enter an age from 18 to 120 and valid positive height, weight, and calorie target values.')
      return
    }
    try {
      await saveNutritionTargets({ ...targets, ...parsed })
      const saved = { ...targets, ...parsed }
      onLoaded(saved)
      setStatus('Nutrition targets saved. Food updates live.')
    } catch (reason) {
      setStatus(reason instanceof Error ? reason.message : 'Nutrition targets could not be saved.')
    }
  }

  if (!ready) return <section className="settings-detail-card"><p aria-live="polite">Loading targets…</p></section>

  return (
    <section className="settings-detail-card nutrition-target-settings">
      <label className="settings-switch-row">
        <span><strong>Nutrition Targets</strong><small>Use targets for daily guidance and target XP</small></span>
        <input type="checkbox" role="switch" checked={targets.enabled} onChange={(event) => update('enabled', event.target.checked)} />
        <i aria-hidden="true" />
      </label>
      {!targets.enabled ? (
        <p className="appearance-note">Targets are off. Re-enabling begins a new eligibility boundary; prior XP remains.</p>
      ) : null}
      <fieldset className="settings-fieldset">
        <legend>Goal</legend>
        <div className="settings-segmented settings-segmented-three">
          {(['lose', 'maintain', 'gain'] as NutritionGoal[]).map((goal) => (
            <button type="button" key={goal} aria-pressed={targets.goal === goal} onClick={() => update('goal', goal)}>
              {goal === 'lose' ? 'Lose' : goal === 'gain' ? 'Gain' : 'Maintain'}
            </button>
          ))}
        </div>
      </fieldset>
      <fieldset className="target-form">
        <legend>Daily targets</legend>
        <NumericTargetInput
          label="Daily calorie target"
          value={draft.calorieTarget}
          onChange={(value) => { setNumber('calorieTarget', value); update('calorieTargetSource', 'manual') }}
          min={1}
        />
        <NumericTargetInput
          label="Daily protein target (g)"
          value={draft.proteinTargetGrams}
          onChange={(value) => setNumber('proteinTargetGrams', value)}
          min={0}
          step="0.1"
          decimal
        />
        {Number(draft.proteinTargetGrams) === 0 ? (
          <p className="appearance-note">0 g means protein target is unavailable and no protein target XP is awarded.</p>
        ) : null}
      </fieldset>
      {suggestions ? (
        <section className="target-recommendation">
          <p className="eyebrow">Recommendation</p>
          <strong>Estimated maintenance ≈ {tdee} kcal/day</strong>
          <small>Estimated via Mifflin–St Jeor.</small>
          <div className="target-recommendation-actions">
            {targets.goal === 'lose' ? (
              <>
                <button type="button" className="text-button" onClick={() => applyCalorie(suggestions.moderate, 'calculated')}>
                  Moderate · {suggestions.moderate} kcal
                </button>
                <button type="button" className="text-button" onClick={() => applyCalorie(suggestions.higher, 'calculated')}>
                  Higher · {suggestions.higher} kcal
                </button>
              </>
            ) : (
              <button type="button" className="text-button" onClick={() => applyCalorie(suggestions.defaultTarget, 'calculated')}>
                Use {suggestions.defaultTarget} kcal
              </button>
            )}
          </div>
        </section>
      ) : null}
      <details className="settings-disclosure"><summary>Calculation Profile</summary>
        <fieldset className="target-form">
          <legend>My details</legend>
          <NumericTargetInput label="Age" value={draft.age} onChange={(value) => setNumber('age', value)} min={18} max={120} />
          <label>
            Sex
            <select value={targets.sex} onChange={(event) => update('sex', event.target.value as NutritionSex)}>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </label>
          <NumericTargetInput label="Height (cm)" value={draft.heightCm} onChange={(value) => setNumber('heightCm', value)} min={1} />
          <NumericTargetInput label="Weight (kg)" value={draft.weightKg} onChange={(value) => setNumber('weightKg', value)} min={1} step="0.1" decimal />
          <label>
            Activity
            <select value={targets.activityLevel} onChange={(event) => update('activityLevel', event.target.value as NutritionActivityLevel)}>
              <option value="sedentary">Sedentary · 1.2</option>
              <option value="light">Lightly Active · 1.375</option>
              <option value="moderate">Moderately Active · 1.55</option>
              <option value="very">Very Active · 1.725</option>
              <option value="extreme">Extremely Active · 1.9</option>
            </select>
          </label>
        </fieldset>
      </details>
      <p className="appearance-note">Calorie needs are estimates. FitDex is not medical advice.</p>
      <button className="primary-button settings-save" type="button" onClick={() => void save()}>Save Targets</button>
      {status ? <p className={status.includes('could') || status.includes('Enter') ? 'form-error' : 'display-name-status'} role="status">{status}</p> : null}
    </section>
  )
}

function NumericTargetInput({ label, value, onChange, min, max, step = '1', decimal = false }: { label: string; value: string; onChange: (value: string) => void; min: number; max?: number; step?: string; decimal?: boolean }) {
  return (
    <label>
      {label}
      <input type="number" inputMode={decimal ? 'decimal' : 'numeric'} min={min} max={max} step={step} value={value} onChange={(event) => onChange(event.target.value)} />
    </label>
  )
}

function parseNutritionTargetDraft(draft: NutritionTargetDraft) {
  const age = Number(draft.age)
  const heightCm = Number(draft.heightCm)
  const weightKg = Number(draft.weightKg)
  const calorieTarget = Number(draft.calorieTarget)
  const proteinTargetGrams = Number(draft.proteinTargetGrams)
  if (!draft.age || !draft.heightCm || !draft.weightKg || !draft.calorieTarget || !draft.proteinTargetGrams && draft.proteinTargetGrams !== '0' || !Number.isInteger(age) || age < 18 || age > 120 || !Number.isFinite(heightCm) || heightCm <= 0 || !Number.isFinite(weightKg) || weightKg <= 0 || !Number.isFinite(calorieTarget) || calorieTarget <= 0 || !Number.isFinite(proteinTargetGrams) || proteinTargetGrams < 0) return undefined
  return { age, heightCm, weightKg, calorieTarget, proteinTargetGrams }
}

function safeRmr(targets: Omit<NutritionTargets, 'updatedAt'>) {
  try {
    return calculateRmr(targets)
  } catch {
    return 0
  }
}
