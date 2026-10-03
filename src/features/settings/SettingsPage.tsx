import { ArrowLeft, Bell, ChevronRight, CircleUserRound, HardDrive, Info, Palette, Ruler, Target, Volume2 } from 'lucide-react'
import { useEffect, useState, type ReactNode } from 'react'
import type { BackgroundMusicPreference, NotificationPreferences, NutritionActivityLevel, NutritionGoal, NutritionSex, NutritionTargets } from '../../data/models'
import { brandingForTheme } from '../../branding/branding'
import { supportsNativeAndroidLauncherBranding } from '../../branding/nativeBranding'
import { APP_VERSION, APP_BUILD_NUMBER } from '../../appVersion'
import { useUpdater } from '../updater/useUpdater'
import { UpdateDetailsModal } from '../updater/UpdateDetailsModal'
import { ReleaseNotesModal } from '../updater/ReleaseNotesModal'
import type { BrightnessPreference, ThemeFamily } from '../../theme/theme'
import { useTheme } from '../../theme/useTheme'
import { AvatarPortrait } from '../avatar/AvatarPortrait'
import { AvatarSelector } from '../avatar/AvatarSelector'
import { useAvatar } from '../avatar/useAvatar'
import { useAudio } from '../audio/useAudio'
import { CommandPageFrame } from '../../components/layout/CommandPageFrame'
import { BATTLE_MUSIC_LABELS, BattleMusicDeck } from '../../components/ui/BattleMusicDeck'
import { CollapsibleModule } from '../../components/ui/CollapsibleModule'
import { BackupSettings } from '../backup/BackupSettings'
import { ExerciseMediaSettings } from '../exerciseMedia/ExerciseMediaSettings'
import { listDownloadedExerciseMedia, supportsNativeExerciseMedia } from '../exerciseMedia/exerciseMediaStore'
import { GamificationHelpButton } from '../gamification/GamificationViews'
import { useBackNavigation } from '../navigation/useBackNavigation'
import { calculateProteinDerivedMetrics, calculateRmr, calculateSuggestedCalorieTargets, calculateSuggestedProteinTarget, calculateTdee } from '../nutritionTargets/nutritionTargetCalculator'
import { loadNutritionTargets, saveNutritionTargets } from '../nutritionTargets/nutritionTargetRepository'
import { displayNameLength, isValidDisplayName, limitDisplayNameInput, MAX_DISPLAY_NAME_LENGTH } from '../profile/displayNameModel'
import { useProfile } from '../profile/useProfile'
import { getLocalSettingsRecord, updateLocalSettings } from './settingsRepository'
import type { UnitPreference } from '../../utils/units'
import { formatReminderTime, notificationPermissionLabel, resolveNotificationPreferences } from '../notifications/notificationModel'
import { loadNotificationPreferences, saveNotificationPreferences } from '../notifications/notificationRepository'
import { currentNotificationPermission, requestNotificationPermission } from '../notifications/notificationDelivery'
import { reconcileNotificationSchedules } from '../notifications/notificationScheduler'

const brightnessOptions: Array<{ value: BrightnessPreference; label: string }> = [
  { value: 'system', label: 'System' }, { value: 'light', label: 'Light' }, { value: 'dark', label: 'Dark' },
]
const familyOptions: Array<{ value: ThemeFamily; label: string }> = [
  { value: 'spartans', label: 'Spartan' }, { value: 'amazonians', label: 'Amazonian' },
]
const targetDefaults: Omit<NutritionTargets, 'updatedAt'> = { enabled: true, goal: 'lose', age: 30, sex: 'female', heightCm: 165, weightKg: 65, activityLevel: 'moderate', calorieTarget: 1800, proteinTargetGrams: 0, calorieTargetSource: 'calculated' }
type SettingsView = 'hub' | 'profile' | 'appearance' | 'units' | 'audio' | 'notifications' | 'nutrition' | 'media' | 'backup' | 'about'
type NutritionTargetDraft = Record<'age' | 'heightCm' | 'weightKg' | 'calorieTarget' | 'proteinTargetGrams', string>

function FactionChangeDialog({ family, onCancel, onConfirm }: { family: ThemeFamily; onCancel: () => void; onConfirm: () => void }) {
  const destination = family === 'amazonians' ? 'AMAZONIAN' : 'SPARTAN'
  return <div className="guide-backdrop faction-change-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onCancel() }}><section className="faction-change-dialog" role="alertdialog" aria-modal="true" aria-labelledby="faction-change-title" aria-describedby="faction-change-description"><p className="eyebrow">FACTION CHANGE</p><h2 id="faction-change-title">SWITCH TO {destination} THEME?</h2><p id="faction-change-description">Changing faction will update your launcher icon.<br />FitDex will briefly relaunch to apply the change.</p><div className="faction-change-actions"><button className="secondary-button" type="button" onClick={onCancel}>CANCEL</button><button className="primary-button" type="button" onClick={onConfirm}>SWITCH &amp; RELAUNCH</button></div></section></div>
}

export function SettingsPage({ onBack, onReplayTutorial, initialView }: { onBack: () => void; onReplayTutorial: () => void; initialView?: SettingsView }) {
  const { family, brightness, setFamily, setBrightness } = useTheme()
  const { selectedAvatar } = useAvatar()
  const { displayName, ready: profileReady, saveDisplayName } = useProfile()
  const { ready: audioReady, soundEffectsEnabled, backgroundMusic, playEffect, setSoundEffectsEnabled, setBackgroundMusic } = useAudio()
  const [units, setUnits] = useState<UnitPreference>('metric')
  const [unitsNoteVisible, setUnitsNoteVisible] = useState(false)
  const [view, setView] = useState<SettingsView>(initialView ?? 'hub')
  const [choosingAvatar, setChoosingAvatar] = useState(false)
  const [nutritionSummary, setNutritionSummary] = useState<Omit<NutritionTargets, 'updatedAt'>>(targetDefaults)
  const [downloadCount, setDownloadCount] = useState<number>()
  const [pendingFaction, setPendingFaction] = useState<ThemeFamily>()

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

  const requestFactionChange = (nextFamily: ThemeFamily) => {
    if (nextFamily === family) return
    playEffect('select')
    if (supportsNativeAndroidLauncherBranding()) {
      setPendingFaction(nextFamily)
      return
    }
    setFamily(nextFamily)
  }

  const confirmFactionChange = () => {
    if (!pendingFaction) return
    setFamily(pendingFaction, { relaunchNative: true })
    setPendingFaction(undefined)
  }

  useBackNavigation('faction-change-dialog', Boolean(pendingFaction), () => setPendingFaction(undefined))

  const handleSetUnits = async (nextUnits: UnitPreference) => {
    playEffect('select')
    setUnits(nextUnits)
    setUnitsNoteVisible(true)
    await updateLocalSettings({ units: nextUnits })
  }

  if (choosingAvatar) {
    return (
      <div className="fitdex-page-frame page-stack avatar-selection-page">
        <SettingsSubheader eyebrow="Settings / Profile" title="Choose your champion" description="Your champion is cosmetic and can be changed at any time." onBack={backToHub} />
        <AvatarSelector />
      </div>
    )
  }

  if (view === 'profile') {
    return (
      <div className="fitdex-page-frame page-stack settings-page settings-detail-page settings-modern-detail settings-profile-detail">
        <SettingsSubheader eyebrow="Settings / Personalize" title="Display Name & Avatar" description="Local identity for this device. No account required." onBack={backToHub} />
        <section className="settings-detail-card settings-profile-card">
          <DisplayNameForm key={profileReady ? 'profile-ready' : 'profile-loading'} displayName={displayName} ready={profileReady} onSave={saveDisplayName} />
          <div className="profile-avatar-row">
            <AvatarPortrait avatar={selectedAvatar} size="small" />
            <div className="profile-avatar-meta">
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
      <div className="fitdex-page-frame page-stack settings-page settings-detail-page settings-modern-detail settings-appearance-detail">
        <SettingsSubheader eyebrow="Settings / Personalize" title="Appearance" description="Faction and brightness for FitDex." onBack={backToHub} />
        <section className="settings-detail-card settings-appearance-card">
          <fieldset className="settings-fieldset">
            <legend>Faction</legend>
            <div className="settings-segmented">
              {familyOptions.map((option) => (
                <button type="button" key={option.value} aria-pressed={family === option.value} onClick={() => requestFactionChange(option.value)}>
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
          <p className="appearance-note">Faction changes visual identity and branding. Avatar remains your independent choice. “System” brightness follows the device setting.</p>
        </section>
        {pendingFaction ? <FactionChangeDialog family={pendingFaction} onCancel={() => setPendingFaction(undefined)} onConfirm={confirmFactionChange} /> : null}
      </div>
    )
  }

  if (view === 'units') {
    return (
      <div className="fitdex-page-frame page-stack settings-page settings-detail-page settings-modern-detail settings-units-detail">
        <SettingsSubheader eyebrow="Settings / Your System" title="Units" description="Measurement system for workouts and logging." onBack={backToHub} />
        <section className="settings-detail-card settings-units-card">
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
          {unitsNoteVisible ? <p className="appearance-note units-canonical-note" role="status">Stored workout values stay canonical. This changes weight and distance display and entry.</p> : null}
        </section>
      </div>
    )
  }

  if (view === 'audio') {
    return (
      <div className="fitdex-page-frame page-stack settings-page settings-detail-page settings-modern-detail settings-audio-detail">
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

  if (view === 'notifications') {
    return <NotificationSettings family={family} onBack={backToHub} />
  }

  if (view === 'nutrition') {
    return (
      <div className="fitdex-page-frame page-stack settings-page settings-detail-page settings-modern-detail nutrition-targets-detail">
        <div className="nutrition-control-bay-shell">
          <div className="nutrition-control-bay-screen">
            <NutritionTargetsHeader onBack={backToHub} />
            <NutritionTargetsSettings onLoaded={setNutritionSummary} />
          </div>
        </div>
      </div>
    )
  }

  if (view === 'media') {
    return (
      <div className="fitdex-page-frame page-stack settings-page settings-detail-page">
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
      <div className="fitdex-page-frame page-stack settings-page settings-detail-page settings-modern-detail settings-backup-detail">
        <SettingsSubheader eyebrow="Settings / Data & Offline" title="Backup & Restore" description="Protect or restore your local FitDex data." onBack={backToHub} />
        <BackupSettings />
      </div>
    )
  }

  if (view === 'about') {
    return <AboutSettings family={family} onBack={backToHub} />
  }

  const appearanceSummary = `Faction: ${family === 'spartans' ? 'Spartan' : 'Amazonian'} · Mode: ${brightness}`
  const unitsSummary = `${units === 'metric' ? 'Metric (kg/km)' : 'Imperial (lb/mi)'} · SFX ${soundEffectsEnabled ? 'On' : 'Off'} · ${BATTLE_MUSIC_LABELS[backgroundMusic]}`
  const nutritionSummaryText = !nutritionSummary.enabled
    ? 'Off'
    : Number(nutritionSummary.proteinTargetGrams) > 0
      ? `${nutritionSummary.calorieTarget} kcal · ${nutritionSummary.proteinTargetGrams}g protein`
      : `${nutritionSummary.calorieTarget} kcal · Calculated`

  return (
    <CommandPageFrame className="settings-page settings-hub"
      terminalTitle="FITDEX // SYSTEM TERMINAL"
      headerActions={
        <button
          className="back-button"
          type="button"
          onClick={() => {
            playEffect('select')
            onBack()
          }}
          aria-label="Back to FitDex"
          title="Back to FitDex"
        >
          <ArrowLeft size={16} aria-hidden="true" />
        </button>
      }
    >
      {/* 1. PLAYER IDENTITY HERO (PRIMARY - ALWAYS VISIBLE) */}
      <section className="settings-hero">
        <AvatarPortrait avatar={selectedAvatar} size="medium" priority />
        <div className="settings-hero-copy">
          <p className="eyebrow">Player profile</p>
          <h2>{displayName || 'Player'}</h2>
          <p>{selectedAvatar.name} · {selectedAvatar.archetype} · local profile</p>
        </div>
      </section>

      {/* 2. APPEARANCE & THEME (COLLAPSIBLE GROUP) */}
      <CollapsibleModule
        id="settings-appearance"
        title="Personalize &amp; Appearance"
        badge="Visuals"
        summary={appearanceSummary}
        defaultExpanded={true}
      >
          <SettingsRow
            icon={<CircleUserRound aria-hidden="true" />}
            title="Identity"
            description="Display name and avatar selection"
            value={selectedAvatar.name}
            onClick={() => openView('profile')}
          />
          <SettingsRow
            icon={<Palette aria-hidden="true" />}
            title="Appearance"
            description="Faction and brightness"
            value={`${family === 'spartans' ? 'Spartans' : 'Amazonians'} · ${brightness}`}
            onClick={() => openView('appearance')}
          />
      </CollapsibleModule>

      {/* 3. UNITS, AUDIO & SYSTEM (COLLAPSIBLE GROUP) */}
      <CollapsibleModule
        id="settings-system"
        title="Units, Audio &amp; Reminders"
        badge="System"
        summary={unitsSummary}
        defaultExpanded={false}
      >
          <SettingsRow
            icon={<Ruler aria-hidden="true" />}
            title="Units"
            description="Weight and distance measurement"
            value={units === 'metric' ? 'kg / km' : 'lb / mi'}
            onClick={() => openView('units')}
          />
          <SettingsRow
            icon={<Volume2 aria-hidden="true" />}
            title="Audio"
            description="Sound effects and battle music"
            value={`${soundEffectsEnabled ? 'SFX on' : 'SFX off'} · ${BATTLE_MUSIC_LABELS[backgroundMusic]}`}
            onClick={() => openView('audio')}
          />
          <SettingsRow
            icon={<Bell aria-hidden="true" />}
            title="Notifications"
            description="Workout, nutrition, and update reminders"
            value="Manage"
            onClick={() => openView('notifications')}
          />
      </CollapsibleModule>

      {/* 4. NUTRITION TARGETS (COLLAPSIBLE GROUP) */}
      <CollapsibleModule
        id="settings-nutrition"
        title="Nutrition Target Engine"
        badge="Profile"
        summary={nutritionSummaryText}
        defaultExpanded={false}
      >
          <SettingsRow
            icon={<Target aria-hidden="true" />}
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
      </CollapsibleModule>

      {/* 5. DATA, BACKUP & HELP (COLLAPSIBLE GROUP) */}
      <CollapsibleModule
        id="settings-data"
        title="Data &amp; App Information"
        badge={`v${APP_VERSION}`}
        summary="Local Storage · Backup · Guide"
        defaultExpanded={false}
      >
          <SettingsRow
            icon={<HardDrive aria-hidden="true" />}
            title="Backup &amp; Restore"
            description="Export or replace local data"
            value="Local file"
            onClick={() => openView('backup')}
          />
          {supportsNativeExerciseMedia() ? (
            <SettingsRow
              icon={<HardDrive aria-hidden="true" />}
              title="Exercise Media"
              description="Android offline downloads"
              value={downloadCount === undefined ? 'Device only' : `${downloadCount} downloaded`}
              onClick={() => openView('media')}
            />
          ) : null}
          <SettingsRow
            icon={<Info aria-hidden="true" />}
            title="Field Guide"
            description="Replay the product tour"
            value="Replay"
            onClick={() => {
              playEffect('select')
              onReplayTutorial()
            }}
          />
          <GamificationHelpButton variant="settings-row" />
          <SettingsRow
            icon={<Info aria-hidden="true" />}
            title="About FitDex"
            description="Version and privacy"
            value={`v${APP_VERSION}`}
            onClick={() => openView('about')}
          />
      </CollapsibleModule>
    </CommandPageFrame>
  )
}

function SettingsSubheader({ eyebrow, title, description, onBack }: { eyebrow: string; title: string; description: string; onBack: () => void }) {
  return (
    <header className="page-header settings-header settings-subheader">
      <button className="settings-hub-button back-command-key" type="button" onClick={onBack} aria-label="Back to Settings Hub">
        <ArrowLeft size={18} strokeWidth={2.5} aria-hidden="true" /><span>HUB</span>
      </button>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </header>
  )
}

function NutritionTargetsHeader({ onBack }: { onBack: () => void }) {
  return (
    <header className="nutrition-targets-header">
      <div className="nutrition-terminal-status">
        <button className="settings-hub-button back-command-key" type="button" onClick={onBack} aria-label="Back to Settings Hub"><ArrowLeft size={18} strokeWidth={2.5} aria-hidden="true" /><span>HUB</span></button>
        <span className="nutrition-terminal-title"><i className="status-terminal-dot" aria-hidden="true" />FITDEX // TARGET SYSTEM</span>
      </div>
      <div className="nutrition-targets-heading">
        <p className="eyebrow">Settings / Your System</p>
        <h1>NUTRITION TARGETS</h1>
        <p>Daily energy &amp; protein configuration.</p>
      </div>
    </header>
  )
}

function ControlBayStatus({ children, online = false }: { children: ReactNode; online?: boolean }) {
  return <span className={`control-bay-status${online ? ' is-online' : ''}`}><i aria-hidden="true" />{children}</span>
}

function SettingsRow({ icon, title, description, value, onClick }: { icon: ReactNode; title: string; description: string; value: string; onClick: () => void }) {
  return (
    <button className="settings-row" type="button" onClick={onClick}>
      <span className="settings-row-icon">{icon}</span>
      <span className="settings-row-copy">
        <strong>{title}</strong>
        <small>{description}</small>
      </span>
      <span className="settings-row-value">
        {value}
      </span>
      <ChevronRight className="settings-row-chevron" size={17} strokeWidth={2.25} aria-hidden="true" />
    </button>
  )
}

function AboutSettings({ family, onBack }: { family: ThemeFamily; onBack: () => void }) {
  const branding = brandingForTheme(family)
  const { status, release, checking, check, openDetails, detailsOpen, closeDetails } = useUpdater(false)
  const [notesOpen, setNotesOpen] = useState(false)
  const [manualMessage, setManualMessage] = useState<string | null>(null)

  const handleCheckUpdates = async () => {
    setManualMessage('Checking for updates...')
    const result = await check(true)
    if (result.status === 'up-to-date') {
      setManualMessage(`FitDex is up to date (v${APP_VERSION}).`)
    } else if (result.status === 'no-release') {
      setManualMessage(`NO UPDATE AVAILABLE\n\nYou're running FitDex v${APP_VERSION}.`)
    } else if (result.status === 'update-available') {
      setManualMessage(`Update v${result.release?.version} available!`)
    } else if (result.status === 'offline') {
      setManualMessage('Device is offline. Connect to check for updates.')
    } else if (result.status === 'error') {
      setManualMessage(result.error || 'Could not reach update server. Retry later.')
    }
  }

  return (
    <div className="fitdex-page-frame page-stack settings-page settings-detail-page settings-modern-detail settings-notifications-detail">
      <SettingsSubheader eyebrow="Settings / Data & Help" title="About FitDex" description="Retro RPG fitness tracking. Local by design." onBack={onBack} />
      <section className="settings-detail-card">
        <div className="about-row">
          <img className="about-app-icon" src={branding.icon} alt="FitDex" />
          <div>
            <strong>FitDex</strong>
            <small>Version {APP_VERSION} · Build {APP_BUILD_NUMBER}</small>
          </div>
        </div>
        <section className="about-copy" aria-label="About FitDex">
          <p>FitDex is a local-first fitness tracker for workouts, nutrition, progress tracking, and RPG-style progression.</p>

          <h3>System &amp; Updates</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', margin: '8px 0 16px' }}>
            <div className="update-settings-actions">
              <button
                type="button"
                className="cmd-btn primary compact"
                onClick={handleCheckUpdates}
                disabled={checking}
              >
                {checking ? 'CHECKING...' : 'CHECK FOR UPDATES'}
              </button>
              <button
                type="button"
                className="cmd-btn secondary compact"
                onClick={() => setNotesOpen(true)}
              >
                RELEASE NOTES
              </button>
            </div>

            {manualMessage && (
              <div
                style={{
                  font: '700 0.68rem var(--font-mono)',
                  color:
                    status === 'update-available'
                      ? 'var(--color-primary-text)'
                      : status === 'error'
                        ? '#ff8a80'
                        : 'var(--color-text-muted)',
                  background: 'var(--color-surface-subtle)',
                  padding: '6px 8px',
                  border: '1px solid var(--color-border)',
                  whiteSpace: 'pre-line',
                }}
              >
                {manualMessage}
                {status === 'update-available' && release && (
                  <button
                    type="button"
                    style={{
                      display: 'block',
                      marginTop: '4px',
                      background: 'none',
                      border: 'none',
                      color: 'var(--color-primary-text)',
                      textDecoration: 'underline',
                      font: 'inherit',
                      cursor: 'pointer',
                      padding: 0,
                    }}
                    onClick={openDetails}
                  >
                    View details &amp; download
                  </button>
                )}
              </div>
            )}
          </div>

          <h3>Developed by</h3>
          <p>Arijit Bhaduri</p>
          <h3>Privacy &amp; Data</h3>
          <p>Your FitDex fitness data is stored locally on your device. FitDex does not require an account or FitDex cloud sync.</p>
        </section>
      </section>

      {detailsOpen && release && (
        <UpdateDetailsModal release={release} onClose={closeDetails} />
      )}
      {notesOpen && (
        <ReleaseNotesModal onClose={() => setNotesOpen(false)} />
      )}
    </div>
  )
}

function NotificationSettings({ family, onBack }: { family: ThemeFamily; onBack: () => void }) {
  const { playEffect } = useAudio()
  const [preferences, setPreferences] = useState<NotificationPreferences>(resolveNotificationPreferences())
  const [ready, setReady] = useState(false)
  const [permissionOpen, setPermissionOpen] = useState(false)
  const [timeCategory, setTimeCategory] = useState<'workout' | 'nutrition'>()

  useEffect(() => {
    void loadNotificationPreferences().then((saved) => {
      const detected = currentNotificationPermission()
      const permissionState = detected === 'unrequested' ? saved.permissionState ?? detected : detected
      const next = { ...saved, permissionState, enabled: permissionState === 'denied' || permissionState === 'unsupported' ? false : saved.enabled }
      setPreferences(next)
      setReady(true)
    })
  }, [])

  const persist = async (patch: Partial<NotificationPreferences>) => {
    const next = await saveNotificationPreferences(patch)
    setPreferences(next)
    await reconcileNotificationSchedules(family)
  }

  const changeMaster = () => {
    playEffect('select')
    if (preferences.enabled) void persist({ enabled: false })
    else if (preferences.permissionState === 'granted') void persist({ enabled: true })
    else if (preferences.permissionState === 'denied' || preferences.permissionState === 'unsupported') void persist({ enabled: false })
    else setPermissionOpen(true)
  }

  const enableNotifications = async () => {
    playEffect('select')
    const permissionState = await requestNotificationPermission()
    setPermissionOpen(false)
    await persist({ enabled: permissionState === 'granted', permissionState })
  }

  const notNow = async () => {
    playEffect('select')
    setPermissionOpen(false)
    await persist({ enabled: false, permissionState: 'unrequested' })
  }

  const interactive = ready && preferences.enabled && preferences.permissionState === 'granted'
  const setCategory = (category: 'update' | 'workout' | 'nutrition', enabled: boolean) => {
    playEffect('select')
    void persist({ [category === 'update' ? 'updateEnabled' : category === 'workout' ? 'workoutEnabled' : 'nutritionEnabled']: enabled })
  }

  return (
    <div className="fitdex-page-frame page-stack settings-page settings-detail-page settings-modern-detail settings-notifications-detail notification-handheld-shell">
      <SettingsSubheader eyebrow="Settings / Your System" title="Notifications" description="Choose FitDex reminders for this device." onBack={onBack} />

      <main className="notification-screen">
        <section className="notification-master-module">
          <label className="notification-master-control">
            <span className="notification-master-copy">
            <small className="notification-master-kicker">MASTER CONTROL</small>
            <strong>Notifications</strong>
            <small>Controls all FitDex notification categories.</small>
            </span>
            <input type="checkbox" role="switch" checked={preferences.enabled} disabled={!ready || preferences.permissionState === 'unsupported'} onChange={changeMaster} />
            <i aria-hidden="true" />
          </label>
          <NotificationPermissionStatus preferences={preferences} onEnable={() => setPermissionOpen(true)} />
        </section>

        <div className={`notification-module-stack ${!interactive ? 'is-disabled' : ''}`} aria-disabled={!interactive}>
          <section className="notification-category-module">
            <header className="notification-module-label">APP</header>
          <NotificationCategoryRow
            title="New FitDex updates"
            helper="Notify me when a newer stable FitDex version is available."
            checked={preferences.updateEnabled}
            disabled={!interactive}
            onChange={(enabled) => setCategory('update', enabled)}
          />
            <details className="notification-disclosure">
            <summary>WHEN IT SENDS</summary>
            <p>Sends a notification when a newer stable release of FitDex is available for your device.</p>
          </details>
          </section>

          <section className="notification-category-module">
            <header className="notification-module-label">WORKOUT</header>
          <NotificationCategoryRow
            title="Today's planned workout"
            helper="Notify me when I have a workout planned for today."
            checked={preferences.workoutEnabled}
            disabled={!interactive}
            onChange={(enabled) => setCategory('workout', enabled)}
          />
          <ReminderTimeRow
            value={preferences.workoutReminderTime}
            disabled={!interactive || !preferences.workoutEnabled}
            onClick={() => { playEffect('select'); setTimeCategory('workout') }}
          />
            <details className="notification-disclosure">
            <summary>WHEN IT SENDS</summary>
            <p>Sends at your selected reminder time when today's Weekly Plan includes a workout that hasn't been completed yet.</p>
          </details>
          </section>

          <section className="notification-category-module">
            <header className="notification-module-label">NUTRITION</header>
          <NotificationCategoryRow
            title="Calories below daily target"
            helper="Notify me when my logged calories are still meaningfully below today's target."
            checked={preferences.nutritionEnabled}
            disabled={!interactive}
            onChange={(enabled) => setCategory('nutrition', enabled)}
          />
          <ReminderTimeRow
            value={preferences.nutritionReminderTime}
            disabled={!interactive || !preferences.nutritionEnabled}
            onClick={() => { playEffect('select'); setTimeCategory('nutrition') }}
          />
            <details className="notification-disclosure">
            <summary>WHEN IT SENDS</summary>
            <p>Sends at your selected reminder time when your logged calories are still meaningfully below today's target. No reminder once your target is reached or exceeded.</p>
          </details>
          </section>
        </div>
      </main>

      {permissionOpen ? (
        <div className="guide-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) void notNow() }}>
          <section className="faction-change-dialog notification-permission-dialog" role="dialog" aria-modal="true" aria-labelledby="notification-permission-title">
            <p className="eyebrow">Settings / Notifications</p>
            <h2 id="notification-permission-title">Enable notifications</h2>
            <p>FitDex can remind you about planned workouts, unfinished calorie targets, and new app updates.</p>
            <div className="faction-change-actions">
              <button className="secondary-button" type="button" onClick={() => void notNow()}>Not now</button>
              <button className="primary-button" type="button" onClick={() => void enableNotifications()}>Enable notifications</button>
            </div>
          </section>
        </div>
      ) : null}

      {timeCategory ? (
        <ReminderTimePicker
          category={timeCategory}
          value={timeCategory === 'workout' ? preferences.workoutReminderTime : preferences.nutritionReminderTime}
          onCancel={() => setTimeCategory(undefined)}
          onSave={(value) => {
            playEffect('select')
            setTimeCategory(undefined)
            void persist({ [timeCategory === 'workout' ? 'workoutReminderTime' : 'nutritionReminderTime']: value })
          }}
        />
      ) : null}
    </div>
  )
}

function NotificationPermissionStatus({ preferences, onEnable }: { preferences: NotificationPreferences; onEnable: () => void }) {
  if (preferences.permissionState === 'granted' || (preferences.permissionState === 'unrequested' && !preferences.enabled)) {
    return null
  }
  const isBlocked = preferences.permissionState === 'denied'
  const isUnavailable = preferences.permissionState === 'unsupported'
  const message = isBlocked
    ? 'Notifications are blocked by your browser or device. Enable them in system or browser settings.'
    : isUnavailable
      ? 'This browser or device does not support notifications.'
      : 'Permission has not been granted yet.'

  return (
    <div className={`notification-permission-status ${isBlocked || isUnavailable ? 'is-warning' : ''}`}>
      <div className="notification-permission-text">
        <strong>{notificationPermissionLabel(preferences.permissionState ?? 'unrequested')}</strong>
        <small>{message}</small>
      </div>
      {preferences.enabled && preferences.permissionState === 'unrequested' ? (
        <button type="button" className="secondary-button" onClick={onEnable}>Enable</button>
      ) : null}
    </div>
  )
}

function NotificationCategoryRow({ title, helper, checked, disabled, onChange }: { title: string; helper: string; checked: boolean; disabled: boolean; onChange: (enabled: boolean) => void }) {
  return (
    <label className="notification-setting-row notification-toggle-row">
      <span className="notification-setting-copy">
        <strong>{title}</strong>
        <small>{helper}</small>
      </span>
      <input type="checkbox" role="switch" checked={checked} disabled={disabled} onChange={(event) => onChange(event.target.checked)} />
      <i aria-hidden="true" />
    </label>
  )
}

function ReminderTimeRow({ value, disabled, onClick }: { value: string; disabled: boolean; onClick: () => void }) {
  return (
    <button type="button" className="notification-setting-row notification-reminder-row" disabled={disabled} onClick={onClick}>
      <span className="notification-time-label">REMINDER TIME</span>
      <span className="notification-time-end">
        <strong>{formatReminderTime(value)}</strong>
        <span className="settings-chev" aria-hidden="true">›</span>
      </span>
    </button>
  )
}

function ReminderTimePicker({ category, value, onCancel, onSave }: { category: 'workout' | 'nutrition'; value: string; onCancel: () => void; onSave: (value: string) => void }) {
  const { playEffect } = useAudio()
  const [rawHour, rawMinute] = value.split(':').map(Number)
  const [hour, setHour] = useState(rawHour % 12 || 12)
  const [minute, setMinute] = useState(String(rawMinute).padStart(2, '0'))
  const [period, setPeriod] = useState(rawHour >= 12 ? 'PM' : 'AM')
  useEffect(() => { const close = (event: KeyboardEvent) => { if (event.key === 'Escape') onCancel() }; window.addEventListener('keydown', close); return () => window.removeEventListener('keydown', close) }, [onCancel])
  const save = () => onSave(`${String((hour % 12) + (period === 'PM' ? 12 : 0)).padStart(2, '0')}:${minute}`)
  return <div className="guide-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onCancel() }}><section className="faction-change-dialog notification-time-dialog" role="dialog" aria-modal="true" aria-labelledby="notification-time-title"><p className="eyebrow">Settings / {category}</p><h2 id="notification-time-title">Set reminder time</h2><p className="notification-time-preview">{String(hour).padStart(2, '0')} : {minute} <b>{period}</b></p><div className="notification-time-fields"><label>Hour<select value={hour} onChange={(event) => { playEffect('select'); setHour(Number(event.target.value)) }}>{Array.from({ length: 12 }, (_, index) => index + 1).map((item) => <option key={item} value={item}>{String(item).padStart(2, '0')}</option>)}</select></label><label>Minute<select value={minute} onChange={(event) => { playEffect('select'); setMinute(event.target.value) }}>{['00', '15', '30', '45'].map((item) => <option key={item} value={item}>{item}</option>)}</select></label></div><div className="settings-segmented"><button type="button" aria-pressed={period === 'AM'} onClick={() => { playEffect('select'); setPeriod('AM') }}>AM</button><button type="button" aria-pressed={period === 'PM'} onClick={() => { playEffect('select'); setPeriod('PM') }}>PM</button></div><div className="faction-change-actions"><button className="secondary-button" type="button" onClick={() => { playEffect('select'); onCancel() }}>Cancel</button><button className="primary-button" type="button" onClick={save}>Set time</button></div></section></div>
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
      <BattleMusicDeck className="bgm-deck" name="background-music" value={backgroundMusic} disabled={!ready} onSelect={(track) => { playEffect('select'); void setBackgroundMusic(track) }} />
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
      <div className="display-name-info-row">
        <p id="display-name-help">Shown in your FitDex greeting. Stored only on this device.</p>
        <p className="display-name-count" id="display-name-count" aria-live="polite">
          {displayNameLength(value)} / {MAX_DISPLAY_NAME_LENGTH}
        </p>
      </div>
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

const ACTIVITY_INFO: Record<NutritionActivityLevel, { label: string; desc: string }> = {
  sedentary: { label: 'Sedentary', desc: 'Desk job, little to no regular exercise' },
  light: { label: 'Lightly Active', desc: 'Light training or walking 1–3 days per week' },
  moderate: { label: 'Moderately Active', desc: 'Moderate training or exercise 3–5 days per week' },
  very: { label: 'Very Active', desc: 'Hard training or sports 6–7 days per week' },
  extreme: { label: 'Extremely Active', desc: 'Intense daily training, athlete schedule, or physical job' },
}

function NutritionTargetsSettings({ onLoaded }: { onLoaded: (targets: Omit<NutritionTargets, 'updatedAt'>) => void }) {
  const { playEffect } = useAudio()
  const [targets, setTargets] = useState<Omit<NutritionTargets, 'updatedAt'>>(targetDefaults)
  const [draft, setDraft] = useState<NutritionTargetDraft>(() => draftFromTargets(targetDefaults))
  const [proteinSource, setProteinSource] = useState<'calculated' | 'manual'>('calculated')
  const [ready, setReady] = useState(false)
  const [status, setStatus] = useState('')

  useEffect(() => {
    void loadNutritionTargets().then((saved) => {
      if (saved) {
        const { updatedAt: _, ...rest } = saved
        setTargets(rest)
        setDraft(draftFromTargets(rest))
        onLoaded(rest)
        if (rest.proteinTargetGrams > 0) {
          const autoCalc = calculateSuggestedProteinTarget(rest.weightKg, rest.activityLevel)
          setProteinSource(rest.proteinTargetGrams === autoCalc ? 'calculated' : 'manual')
        }
      }
      setReady(true)
    })
  }, [onLoaded])

  const parsed = parseNutritionTargetDraft(draft)
  const rmr = parsed ? safeRmr({ ...targets, ...parsed }) : 0
  const tdee = rmr ? calculateTdee(rmr, targets.activityLevel) : 0
  const suggestions = tdee && parsed ? calculateSuggestedCalorieTargets(tdee, targets.goal, parsed.weightKg) : undefined

  const weightNum = Number(draft.weightKg)
  const suggestedProtein = Number.isFinite(weightNum) && weightNum > 0
    ? calculateSuggestedProteinTarget(weightNum, targets.activityLevel)
    : 0
  const currentProteinGrams = Number(draft.proteinTargetGrams) || 0
  const isProteinUnset = !draft.proteinTargetGrams || draft.proteinTargetGrams === '0' || currentProteinGrams === 0
  const currentCalorieTarget = Number(draft.calorieTarget) || 0
  const derived = calculateProteinDerivedMetrics(currentProteinGrams, currentCalorieTarget)

  const update = <K extends keyof Omit<NutritionTargets, 'updatedAt'>>(key: K, value: Omit<NutritionTargets, 'updatedAt'>[K]) =>
    setTargets((current) => ({ ...current, [key]: value }))
  const setNumber = (key: keyof NutritionTargetDraft, value: string) =>
    setDraft((current) => ({ ...current, [key]: value }))
  const applyCalorie = (value: number, source: 'calculated' | 'manual') => {
    setNumber('calorieTarget', String(value))
    update('calorieTargetSource', source)
  }

  const stepCalorie = (delta: number) => {
    playEffect('select')
    const current = Number(draft.calorieTarget) || 1800
    const next = Math.max(1000, current + delta)
    applyCalorie(next, 'manual')
  }

  const stepProtein = (delta: number) => {
    playEffect('select')
    const current = Number(draft.proteinTargetGrams) || 0
    const next = Math.max(0, current + delta)
    setNumber('proteinTargetGrams', String(next))
    setProteinSource('manual')
  }

  const save = async () => {
    if (!parsed) {
      setStatus('Enter an age from 18 to 120 and valid positive height, weight, and calorie target values.')
      return
    }
    try {
      const savedRecord = await saveNutritionTargets({ ...targets, ...parsed })
      const { updatedAt: _, ...saved } = savedRecord.nutritionTargets!
      onLoaded(saved)
      playEffect('add')
      setStatus('Nutrition targets saved. Food updates live.')
    } catch (reason) {
      setStatus(reason instanceof Error ? reason.message : 'Nutrition targets could not be saved.')
    }
  }

  if (!ready) return <section className="control-bay-targets"><p aria-live="polite">Loading targets…</p></section>

  return (
    <section className="control-bay-targets">
      <section className="control-bay-module control-bay-engine">
        <div className="control-bay-module-header">
          <span>Target Engine</span>
          <ControlBayStatus online={targets.enabled}>{targets.enabled ? 'Online' : 'Standby'}</ControlBayStatus>
        </div>
        <div className="control-bay-module-body control-bay-engine-body">
          <div className="control-bay-engine-readout">
            <strong>Target Calculation {targets.enabled ? 'Ready' : 'Paused'}</strong>
            <span>{targets.enabled && parsed ? 'Profile Valid' : targets.enabled ? 'Profile Incomplete' : 'Logging Active'}</span>
          </div>
          <div className="control-bay-key-bank control-bay-engine-bank" role="group" aria-label="Target Status">
            <button
              type="button"
              className={`control-bay-key ${targets.enabled ? 'active' : ''}`}
              onClick={() => { playEffect('select'); update('enabled', true) }}
              aria-pressed={targets.enabled}
            >
              ENABLED
            </button>
            <button
              type="button"
              className={`control-bay-key ${!targets.enabled ? 'active' : ''}`}
              onClick={() => { playEffect('select'); update('enabled', false) }}
              aria-pressed={!targets.enabled}
            >
              DISABLED
            </button>
          </div>
        </div>
      </section>

      {!targets.enabled ? (
        <p className="appearance-note">Targets are disabled. Re-enabling begins a new eligibility boundary; prior XP remains.</p>
      ) : null}

      {/* BASELINE PARAMETERS */}
      <CollapsibleModule
        id="nutrition-baseline"
        title="Baseline Parameters"
        badge={<ControlBayStatus>Operator Panel</ControlBayStatus>}
        defaultExpanded={false}
        className="control-bay-module control-bay-collapsible control-bay-baseline"
      >
        <div className="control-bay-module-body">
          <div className="control-bay-formula-readout">
            <span className="control-bay-label">Formula</span>
            <div><strong>Mifflin-St Jeor</strong><span>Standard</span></div>
          </div>

          <div className="control-bay-goal-mode">
            <span className="control-bay-label">Goal Mode</span>
            <div className="control-bay-key-cluster">
              <div className="cmd-segment-group control-bay-key-bank control-bay-physical-key-bank control-bay-goal-key-bank" role="group" aria-label="Objective Directive">
                {(['lose', 'maintain', 'gain'] as NutritionGoal[]).map((goal) => (
                  <button
                    type="button"
                    key={goal}
                    className={`cmd-segment-btn ${targets.goal === goal ? 'active' : ''}`}
                    aria-pressed={targets.goal === goal}
                    onClick={() => { playEffect('select'); update('goal', goal) }}
                  >
                    {goal === 'lose' ? 'Lose' : goal === 'gain' ? 'Gain' : 'Maintain'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="profile control-bay-profile-stack">
            <NumericTargetControl
              label="AGE"
              unit="YR"
              id="nutrition-age"
              value={draft.age}
              onStep={(delta) => {
                playEffect('select')
                const current = Number(draft.age) || 18
                const next = Math.max(18, Math.min(120, current + delta))
                setNumber('age', String(next))
              }}
            />
            <NumericTargetControl
              label="HEIGHT"
              unit="CM"
              id="nutrition-height"
              value={draft.heightCm}
              onStep={(delta) => {
                playEffect('select')
                const current = Number(draft.heightCm) || 168
                const next = Math.max(1, current + delta)
                setNumber('heightCm', String(next))
              }}
            />
            <NumericTargetControl
              label="WEIGHT"
              unit="KG"
              id="nutrition-weight"
              value={draft.weightKg}
              onStep={(delta) => {
                playEffect('select')
                const current = Number(draft.weightKg) || 64
                const next = Math.max(1, current + delta)
                setNumber('weightKg', String(next))
                if (proteinSource === 'calculated' && !isProteinUnset) {
                  setNumber('proteinTargetGrams', String(calculateSuggestedProteinTarget(next, targets.activityLevel)))
                }
              }}
            />
          </div>

          <div className="control-bay-sex-row">
            <span className="control-bay-label">Biological Sex</span>
            <div className="control-bay-key-cluster">
              <div className="cmd-segment-group control-bay-key-bank control-bay-physical-key-bank control-bay-sex-key-bank" role="group" aria-label="Biological Sex">
                {(['female', 'male'] as NutritionSex[]).map((sex) => <button type="button" key={sex} className={`cmd-segment-btn ${targets.sex === sex ? 'active' : ''}`} aria-pressed={targets.sex === sex} onClick={() => { playEffect('select'); update('sex', sex) }}>{sex}</button>)}
              </div>
            </div>
          </div>

          <div className="control-bay-activity">
            <label className="control-bay-label" htmlFor="nutrition-activity">Activity Index</label>
            <div className="control-bay-activity-readout">
              <div className="terminal-select-wrapper">
                <select
                  id="nutrition-activity"
                  className="terminal-select"
                  value={targets.activityLevel}
                  onChange={(event) => {
                    playEffect('select')
                    const act = event.target.value as NutritionActivityLevel
                    update('activityLevel', act)
                    const n = Number(draft.weightKg)
                    if (proteinSource === 'calculated' && Number.isFinite(n) && n > 0 && !isProteinUnset) {
                      setNumber('proteinTargetGrams', String(calculateSuggestedProteinTarget(n, act)))
                    }
                  }}
                >
                  {(Object.keys(ACTIVITY_INFO) as NutritionActivityLevel[]).map((level) => (
                    <option key={level} value={level}>{ACTIVITY_INFO[level].label}</option>
                  ))}
                </select>
                <span className="terminal-select-arrow" aria-hidden="true">▼</span>
              </div>
              <div className="field-help">
                {ACTIVITY_INFO[targets.activityLevel].desc}
              </div>
            </div>
          </div>
        </div>
      </CollapsibleModule>

      {/* ENERGY ACCOUNTING */}
      <CollapsibleModule
        id="nutrition-energy"
        title="Energy Accounting"
        badge={<ControlBayStatus>Telemetry</ControlBayStatus>}
        defaultExpanded={false}
        className="control-bay-module control-bay-collapsible control-bay-telemetry"
      >
        <div className="control-bay-module-body">
          <div className="control-bay-telemetry-grid">
            <div><span className="control-bay-label">RMR</span><strong>{rmr} <small>KCAL</small></strong></div>
            <div><span className="control-bay-label">TDEE</span><strong>{tdee} <small>KCAL</small></strong></div>
            <div className="is-goal"><span className="control-bay-label">Goal</span><strong>{suggestions?.defaultTarget ?? 0} <small>KCAL</small></strong></div>
            <div><span className="control-bay-label">Protein</span><strong>{suggestedProtein} <small>G</small></strong></div>
          </div>
          {suggestions ? <button type="button" className="recom-chip control-bay-apply-key" onClick={() => { playEffect('select'); applyCalorie(suggestions.defaultTarget, 'calculated') }}>Apply Calculated {suggestions.defaultTarget} kcal</button> : null}
        </div>
      </CollapsibleModule>

      {/* DAILY TARGETS */}
      <CollapsibleModule
        id="nutrition-daily"
        title="Daily Targets"
        badge={<ControlBayStatus>Program Panel</ControlBayStatus>}
        defaultExpanded={false}
        className="control-bay-module control-bay-collapsible control-bay-daily"
      >
        <div className="control-bay-module-body">
          <div className="control-bay-source-rail" aria-label="Daily target sources">
            <div className={`control-bay-source-cell ${targets.calorieTargetSource === 'calculated' ? 'source-calc' : 'source-manual'}`}>
              <b>CALORIES</b>
              <small>
                <span className="source-pip" aria-hidden="true">{targets.calorieTargetSource === 'calculated' ? '●' : '▪'}</span>
                {targets.calorieTargetSource.toUpperCase()}
              </small>
            </div>
            <div className={`control-bay-source-cell ${isProteinUnset ? 'protein-unset' : proteinSource === 'calculated' ? 'source-calc' : 'source-manual'}`}>
              <b>PROTEIN</b>
              <small>
                <span className="source-pip" aria-hidden="true">{isProteinUnset ? '○' : '●'}</span>
                {isProteinUnset ? 'NOT SET' : proteinSource.toUpperCase()}
              </small>
            </div>
          </div>
          <div className="control-bay-daily-calorie-deck" style={{ marginBottom: '14px', textAlign: 'center' }}>
            <span className="control-bay-label" style={{ display: 'block', marginBottom: '6px', textAlign: 'center' }}>Daily Calorie Target</span>
            <div className="target-programmer control-bay-calorie-stepper">
              <button type="button" className="calc-key stepper-btn" aria-label="Decrease calorie target" onClick={() => stepCalorie(-50)}>−</button>
              <input
                type="number"
                className="lcd-input stepper-input"
                aria-label="Daily calorie target"
                value={draft.calorieTarget}
                min={1}
                onChange={(event) => {
                  setNumber('calorieTarget', event.target.value)
                  update('calorieTargetSource', 'manual')
                }}
              />
              <button type="button" className="calc-key stepper-btn" aria-label="Increase calorie target" onClick={() => stepCalorie(50)}>+</button>
            </div>
          </div>

          <div>
            <div className="control-bay-protein-header">
              <span className="control-bay-label">Daily Protein Target</span>
              {!isProteinUnset && proteinSource === 'manual' ? (
                <button
                  type="button"
                  className="control-bay-protein-action is-recalc"
                  onClick={() => {
                    playEffect('select')
                    setNumber('proteinTargetGrams', String(suggestedProtein))
                    setProteinSource('calculated')
                  }}
                >
                  RECALCULATE ({suggestedProtein}g)
                </button>
              ) : !isProteinUnset ? (
                <button
                  type="button"
                  className="control-bay-protein-action is-unset"
                  onClick={() => {
                    playEffect('select')
                    setNumber('proteinTargetGrams', '0')
                    setProteinSource('manual')
                  }}
                >
                  UNSET
                </button>
              ) : null}
            </div>

            {isProteinUnset ? (
              <div className="codex-unset-card">
                <div>
                  <strong style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                    Protein Target: Not Set
                  </strong>
                  <span style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>
                    Complete profile to generate target. No protein-target XP awarded while unset.
                  </span>
                </div>
                <button
                  type="button"
                  className="cmd-btn compact primary"
                  onClick={() => {
                    playEffect('select')
                    setNumber('proteinTargetGrams', String(suggestedProtein))
                    setProteinSource('calculated')
                  }}
                >
                  + Set Target ({suggestedProtein}g)
                </button>
              </div>
            ) : (
              <>
                <div className="target-programmer control-bay-programmer">
                  <button type="button" className="calc-key stepper-btn" aria-label="Decrease protein target" onClick={() => stepProtein(-5)}>−</button>
                  <input
                    type="number"
                    className="lcd-input stepper-input"
                    aria-label="Daily protein target"
                    value={draft.proteinTargetGrams}
                    min={0}
                    step="0.1"
                    onChange={(event) => {
                      setNumber('proteinTargetGrams', event.target.value)
                      setProteinSource('manual')
                    }}
                  />
                  <button type="button" className="calc-key stepper-btn" aria-label="Increase protein target" onClick={() => stepProtein(5)}>+</button>
                </div>
                <div className="nutrition-sub-meta">
                  <span><strong>{currentProteinGrams} g / day</strong></span>
                  <span>·</span>
                  <span>{(currentProteinGrams / (Number(draft.weightKg) || 1)).toFixed(1)} g/kg</span>
                  <span>·</span>
                  <span>{derived.proteinCalories} kcal</span>
                  <span>·</span>
                  <span>{derived.proteinPercentOfCalories}% of calories</span>
                </div>
              </>
            )}
          </div>
        </div>
      </CollapsibleModule>

      <p className="proto-disclaimer control-bay-fine-print" style={{ fontSize: '11px', color: 'var(--color-text-muted)', margin: '8px 0 0', lineHeight: 1.4 }}>
        Estimates are for healthy adults and not medical prescriptions. FitDex is not medical advice.
      </p>
      <button className="cmd-btn primary settings-save control-bay-command" type="button" onClick={() => void save()}>
        Execute: Save Targets
      </button>
      {status ? (
        <p className={status.includes('could') || status.includes('Enter') ? 'form-error' : 'display-name-status'} role="status">
          {status}
        </p>
      ) : null}
    </section>
  )
}

function NumericTargetControl({
  label,
  unit,
  value,
  onStep,
  ariaLabel,
  id,
}: {
  label: string
  unit: string
  value: string | number
  onStep: (delta: -1 | 1) => void
  ariaLabel?: string
  id?: string
}) {
  return (
    <div className="calc-control control-bay-profile-control">
      <span className="display-label control-bay-label" id={id ? `${id}-label` : undefined}>{label}</span>
      <div className="calc-row control-bay-stepper">
        <button
          type="button"
          className="calc-key stepper-btn"
          aria-label={`Decrease ${label}`}
          onClick={() => onStep(-1)}
        >
          −
        </button>
        <output
          className="lcd"
          id={id}
          aria-labelledby={id ? `${id}-label` : undefined}
          aria-label={ariaLabel || `${label}: ${value} ${unit}`}
        >
          {value}<small>{unit}</small>
        </output>
        <button
          type="button"
          className="calc-key stepper-btn"
          aria-label={`Increase ${label}`}
          onClick={() => onStep(1)}
        >
          +
        </button>
      </div>
    </div>
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
