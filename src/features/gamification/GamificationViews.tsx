import { ArrowLeft, CircleHelp, ShieldCheck, Sparkles, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Panel } from '../../components/ui/Panel.tsx'
import { ContextRail } from '../../components/ui/ContextRail.tsx'
import { dateFromLocalDateKey, getLocalDateKey, shiftLocalDateKey } from '../../utils/localDate.ts'
import { GuideDialog } from '../help/GuideDialog.tsx'
import { ACHIEVEMENT_CATEGORIES, achievementById, type AchievementCategory } from './achievementCatalog.ts'
import { achievementAssetPath, MAX_PAUSE_DAYS, MAX_PAUSES_PER_ROLLING_YEAR, RANKS, rankAssetPath, SUCCESSFUL_DAYS_PER_FREEZE, XP_REWARDS } from './gamificationConfig.ts'
import { GamificationBadge } from './GamificationBadge.tsx'
import { loadGamificationDashboard, loadPendingGamificationNotifications, markGamificationNotificationsSeen, planStreakPause, type GamificationDashboard } from './gamificationRepository.ts'
import { gamificationHelpSteps } from './gamificationHelp.ts'
import { useAudio } from '../audio/useAudio.ts'
import { evaluateGamificationAudioTransition } from '../audio/audioModel.ts'
import { acknowledgeFirstUse, loadFirstUseGuidance } from '../help/firstUseGuidance.ts'

import { useBackNavigation } from '../navigation/useBackNavigation.ts'

export function LevelProgress({ data, compact = false }: { data: GamificationDashboard; compact?: boolean }) {
  const { progression } = data
  const percent = progression.maxLevel ? 100 : Math.min(100, (progression.xpIntoLevel / progression.xpRequiredForNextLevel) * 100)
  return <div className={`level-progress${compact ? ' is-compact' : ''}`}>
    <GamificationBadge kind="rank" src={rankAssetPath(progression.rank)} label={`${progression.rank.name} rank emblem`} size={compact ? 'medium' : 'large'} />
    <div className="level-progress-copy"><p className="eyebrow">Level {progression.level}</p><h2>{progression.rank.name}</h2><p>{progression.totalXp.toLocaleString()} Lifetime XP</p><div className="gamification-progress" role="progressbar" aria-label={progression.maxLevel ? 'Maximum level reached' : `Level ${progression.level} XP progress`} aria-valuemin={0} aria-valuemax={progression.maxLevel ? 100 : progression.xpRequiredForNextLevel} aria-valuenow={progression.maxLevel ? 100 : progression.xpIntoLevel}><i style={{ width: `${percent}%` }} /></div><small>{progression.maxLevel ? 'MAX LEVEL' : `${progression.xpIntoLevel.toLocaleString()} / ${progression.xpRequiredForNextLevel.toLocaleString()} XP to Level ${progression.level + 1}`}</small></div>
  </div>
}

export function RankDetailView({ data, onBack }: { data: GamificationDashboard; onBack: () => void }) {
  return <div className="page-stack gamification-detail"><Subheader title="Level & Rank" onBack={onBack} /><Panel eyebrow="Your progress"><LevelProgress data={data} /></Panel><Panel eyebrow="Rank journey" title="Nine ranks · No divisions"><ol className="rank-journey">{RANKS.map((rank) => <li className={rank.id === data.progression.rank.id ? 'is-current' : ''} key={rank.id} aria-current={rank.id === data.progression.rank.id ? 'step' : undefined}><GamificationBadge kind="rank" src={rankAssetPath(rank)} label={`${rank.name} emblem`} size="small" locked={data.progression.level < rank.minLevel} /><span><strong>{rank.name}</strong><small>{rank.minLevel === rank.maxLevel ? `Level ${rank.minLevel}` : `Levels ${rank.minLevel}–${rank.maxLevel}`}</small></span>{rank.id === data.progression.rank.id ? <em>Current</em> : null}</li>)}</ol></Panel><XpRules /><RecentXp data={data} /></div>
}

export function XpRules() { return <Panel eyebrow="How you earn XP"><dl className="xp-rules"><div><dt>Planned Routine</dt><dd>+30</dd></div><div><dt>Workout Day</dt><dd>+30</dd></div><div><dt>Unplanned Workout</dt><dd>+20</dd></div><div><dt>New Personal Record</dt><dd>+15</dd></div><div><dt>Full Food Log</dt><dd>+5</dd></div><div><dt>Calorie Target</dt><dd>+5</dd></div><div><dt>Protein Target</dt><dd>+5</dd></div><div><dt>Achievement Unlocked</dt><dd>+50</dd></div></dl></Panel> }

function RecentXp({ data }: { data: GamificationDashboard }) { return <Panel eyebrow="Recent XP">{data.xpEvents.length ? <ul className="recent-xp">{data.xpEvents.slice(0, 10).map((event) => <li key={event.id}><span><strong>{xpEventLabel(event)}</strong><small>{new Date(event.occurredAt).toLocaleString()}</small></span><b>+{event.amount}</b></li>)}</ul> : <p>No XP earned yet.</p>}</Panel> }

function xpEventLabel(event: GamificationDashboard['xpEvents'][number]) { if (event.type === 'personal_record') return `${event.metadata?.exerciseName ?? 'Exercise'} PR`; if (event.type === 'full_food_log') return 'All four meals logged'; if (event.type === 'achievement_unlock') return `Achievement: ${event.metadata?.name ?? 'Unlocked'}`; return String(event.metadata?.name ?? event.type.replaceAll('_', ' ')) }

export function FreezeSnowflakeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2v20" />
      <path d="M2 12h20" />
      <path d="m4.93 4.93 14.14 14.14" />
      <path d="m19.07 4.93-14.14 14.14" />
      <path d="m9 3 3 3 3-3" />
      <path d="m9 21 3-3 3 3" />
      <path d="m3 9 3 3-3 3" />
      <path d="m21 9-3 3 3 3" />
    </svg>
  )
}

export function StreakDetailView({ data, onBack, onChanged }: { data: GamificationDashboard; onBack: () => void; onChanged: (data: GamificationDashboard) => void }) {
  const { playEffect } = useAudio()
  const [pauseOpen, setPauseOpen] = useState(false)
  const [showFirstUse, setShowFirstUse] = useState(false)
  useEffect(() => { void loadFirstUseGuidance().then((guidance) => setShowFirstUse(!guidance.streakProtection)) }, [])
  if (showFirstUse) {
    return (
      <div className="page-stack gamification-detail">
        <div className="consistency-deck-header">
          <button className="consistency-deck-back-btn" type="button" onClick={() => { playEffect('select'); onBack() }}>
            ‹ Back to Home
          </button>
          <span className="consistency-deck-title">CONSISTENCY DECK</span>
        </div>
        <ContextRail title="Three kinds of streak protection" footnote="Clears after real action, not page visit" actions={<button className="primary-button" type="button" onClick={() => { playEffect('select'); void acknowledgeFirstUse('streakProtection'); setShowFirstUse(false) }}>View My Streak</button>}>
          <p>Freezes cover one missed planned day automatically. Travel / Sickness Pause protects 1–7 days without progress or Freeze use. Your first material plan change per rolling 12 months is protected.</p>
        </ContextRail>
      </div>
    )
  }
  const successfulCount = data.snapshots.filter((snapshot) => snapshot.result === 'success').length
  const nextFreezeProgress = successfulCount % SUCCESSFUL_DAYS_PER_FREEZE
  const nextFreezePercent = (nextFreezeProgress / SUCCESSFUL_DAYS_PER_FREEZE) * 100

  return (
    <div className="page-stack consistency-deck">
      <div className="consistency-deck-header">
        <button className="consistency-deck-back-btn" type="button" onClick={() => { playEffect('select'); onBack() }}>
          ‹ Back to Home
        </button>
        <span className="consistency-deck-title">CONSISTENCY DECK</span>
      </div>

      <div className="consistency-hero-box">
        <p className="consistency-hero-eyebrow">CURRENT PLAN STREAK</p>
        <strong className="consistency-hero-val">{data.streak.current}</strong>
        <span className="consistency-hero-meta">BEST STREAK · {data.streak.best} {data.streak.best === 1 ? 'DAY' : 'DAYS'}</span>
      </div>

      <section className="consistency-deck-section">
        <h2 className="consistency-deck-heading">FREEZE PROTECTION</h2>
        <div className="freeze-balance-row">
          <FreezeSnowflakeIcon className="freeze-snowflake-icon" />
          <strong>{data.freezeBalance} {data.freezeBalance === 1 ? 'FREEZE AVAILABLE' : 'FREEZES AVAILABLE'}</strong>
        </div>
        <p className="consistency-deck-copy">
          Freezes are applied automatically when a planned workout day is missed. Balance is unlimited and never expires.
        </p>
      </section>

      <section className="consistency-deck-section">
        <h2 className="consistency-deck-heading">NEXT FREEZE PROGRESS</h2>
        <div className="home-hero-xp" role="progressbar" aria-label="Progress to next Streak Freeze" aria-valuemin={0} aria-valuemax={SUCCESSFUL_DAYS_PER_FREEZE} aria-valuenow={nextFreezeProgress}>
          <i style={{ width: `${nextFreezePercent}%` }} />
        </div>
        <p className="consistency-deck-progress-meta">
          <strong>{nextFreezeProgress} / {SUCCESSFUL_DAYS_PER_FREEZE}</strong> successful planned training days toward next Freeze
        </p>
        <small className="consistency-deck-subcopy">
          +1 Freeze is earned every {SUCCESSFUL_DAYS_PER_FREEZE} successful planned training days.
        </small>
      </section>

      <section className="consistency-deck-section">
        <h2 className="consistency-deck-heading">TRAVEL / SICKNESS PAUSE</h2>
        {data.activePause ? (
          <div className="active-pause-card">
            <strong>{data.activePause.reason === 'travel' ? 'TRAVEL PAUSE ACTIVE' : 'SICKNESS PAUSE ACTIVE'}</strong>
            <p>{data.activePause.startDate} to {data.activePause.endDate}</p>
            <small>Streak is protected from interruptions. XP and daily mission progress are paused.</small>
          </div>
        ) : null}
        <p className="consistency-deck-copy">
          Protect 1–7 consecutive days for travel or sickness without losing the Plan Streak or consuming a Freeze.
        </p>
        <p className="consistency-deck-meta">
          Maximum {MAX_PAUSE_DAYS} days · {MAX_PAUSES_PER_ROLLING_YEAR} uses per rolling 12 months.
        </p>
        <p className="consistency-deck-allowance">
          Pauses available: {data.pauseUsesRemaining} / {MAX_PAUSES_PER_ROLLING_YEAR}
        </p>
        <button
          className="pause-action-btn"
          type="button"
          disabled={!data.pauseUsesRemaining}
          onClick={() => { playEffect('select'); setPauseOpen(true) }}
        >
          PLAN A PAUSE ›
        </button>
      </section>

      <section className="consistency-deck-section">
        <h2 className="consistency-deck-heading">WEEKLY PLAN PROTECTION</h2>
        <p className="consistency-deck-copy">
          1 material Weekly Plan change per rolling 12 months is protected. Later material changes require confirmation and reset the current Plan Streak.
        </p>
        {data.protectedPlanChange.available ? (
          <p className="consistency-deck-status is-available">
            ✓ 1 PROTECTED CHANGE AVAILABLE
          </p>
        ) : (
          <div className="consistency-deck-status is-used">
            <strong>PROTECTED CHANGE USED</strong>
            {data.protectedPlanChange.nextAvailable ? (
              <small>Next available {new Intl.DateTimeFormat(undefined, { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(data.protectedPlanChange.nextAvailable))}</small>
            ) : null}
          </div>
        )}
      </section>

      {pauseOpen ? <PauseDialog onClose={() => setPauseOpen(false)} onSaved={async () => { setPauseOpen(false); onChanged(await loadGamificationDashboard()) }} /> : null}
    </div>
  )
}

function PauseDialog({ onClose, onSaved }: { onClose: () => void; onSaved: () => void }) {
  const { playEffect } = useAudio()
  useBackNavigation('gamification-pause-dialog', true, onClose, 60)
  const today = getLocalDateKey()
  const [reason, setReason] = useState<'travel' | 'sickness'>('travel')
  const [startDate, setStartDate] = useState(today)
  const [endDate, setEndDate] = useState(today)
  const [error, setError] = useState('')

  const handleStartDateChange = (val: string) => {
    setStartDate(val)
    if (endDate < val) {
      setEndDate(val)
    } else {
      const diffDays = Math.round((dateFromLocalDateKey(endDate).getTime() - dateFromLocalDateKey(val).getTime()) / 86400000) + 1
      if (diffDays > MAX_PAUSE_DAYS) {
        setEndDate(shiftLocalDateKey(val, MAX_PAUSE_DAYS - 1))
      }
    }
  }

  const handleEndDateChange = (val: string) => {
    setEndDate(val)
  }

  const duration = Math.max(0, Math.round((dateFromLocalDateKey(endDate).getTime() - dateFromLocalDateKey(startDate).getTime()) / 86400000) + 1)
  const isValidDuration = duration >= 1 && duration <= MAX_PAUSE_DAYS
  const isValidDate = startDate >= today && endDate >= startDate

  const openPicker = (e: React.MouseEvent<HTMLInputElement> | React.FocusEvent<HTMLInputElement>) => {
    try {
      e.currentTarget.showPicker?.()
    } catch {}
  }

  return (
    <div className="workout-finish-backdrop">
      <section className="panel pause-dialog" role="dialog" aria-modal="true" aria-labelledby="pause-title">
        <header>
          <div>
            <p className="eyebrow">Streak protection</p>
            <h2 id="pause-title">Travel / Sickness Pause</h2>
          </div>
          <button type="button" aria-label="Close pause dialog" onClick={() => { playEffect('select'); onClose() }}>
            <X aria-hidden="true" />
          </button>
        </header>

        <fieldset className="pause-reason-fieldset">
          <legend>Reason</legend>
          <label className={reason === 'travel' ? 'is-selected' : ''}>
            <input type="radio" name="pause-reason" checked={reason === 'travel'} onChange={() => { playEffect('select'); setReason('travel') }} />
            <span>Travel</span>
          </label>
          <label className={reason === 'sickness' ? 'is-selected' : ''}>
            <input type="radio" name="pause-reason" checked={reason === 'sickness'} onChange={() => { playEffect('select'); setReason('sickness') }} />
            <span>Sickness</span>
          </label>
        </fieldset>

        <div className="pause-dates-grid">
          <label className="pause-date-field">
            <span>Start Date</span>
            <input
              type="date"
              min={today}
              value={startDate}
              onClick={openPicker}
              onFocus={openPicker}
              onChange={(event) => handleStartDateChange(event.target.value)}
              aria-label="Pause Start Date"
            />
          </label>
          <label className="pause-date-field">
            <span>End Date</span>
            <input
              type="date"
              min={startDate}
              max={shiftLocalDateKey(startDate, MAX_PAUSE_DAYS - 1)}
              value={endDate}
              onClick={openPicker}
              onFocus={openPicker}
              onChange={(event) => handleEndDateChange(event.target.value)}
              aria-label="Pause End Date"
            />
          </label>
        </div>

        <div className="pause-duration-badge">
          <strong>{duration} {duration === 1 ? 'day' : 'days'}</strong>
          <span>(maximum {MAX_PAUSE_DAYS} consecutive days)</span>
        </div>

        <p className="pause-explainer">
          Your streak is protected but does not increase. XP and Daily Quest progress are paused. Your Weekly Plan stays unchanged.
        </p>

        {error ? <p className="form-error" role="alert">{error}</p> : null}

        <div className="pause-dialog-actions">
          <button className="secondary-button" type="button" onClick={() => { playEffect('select'); onClose() }}>
            Cancel
          </button>
          <button
            className="primary-button"
            type="button"
            disabled={!isValidDuration || !isValidDate}
            onClick={() => void planStreakPause(reason, startDate, endDate).then(() => { playEffect('add'); onSaved() }).catch((reasonValue: unknown) => setError(reasonValue instanceof Error ? reasonValue.message : 'Pause could not be saved.'))}
          >
            Plan Pause
          </button>
        </div>
      </section>
    </div>
  )
}

export function AchievementsView({ data, onBack }: { data: GamificationDashboard; onBack?: () => void }) {
  const { playEffect } = useAudio()
  const [category, setCategory] = useState<'ALL' | AchievementCategory>('ALL')
  const rows = data.achievements.filter((entry) => category === 'ALL' || entry.definition.category === category)
  const unlockedCount = data.unlocks.length
  return <div className="page-stack achievements-page">{onBack ? <Subheader title="Achievements" onBack={onBack} /> : null}<Panel eyebrow="Achievements" title={`${unlockedCount} / 52 unlocked`}><div className="gamification-progress" role="progressbar" aria-label="Achievement completion" aria-valuemin={0} aria-valuemax={52} aria-valuenow={unlockedCount}><i style={{ width: `${(unlockedCount / 52) * 100}%` }} /></div><p>{Math.round((unlockedCount / 52) * 100)}% complete</p></Panel><div className="achievement-filters" role="group" aria-label="Achievement category">{(['ALL', ...ACHIEVEMENT_CATEGORIES] as const).map((filter) => <button type="button" key={filter} aria-pressed={category === filter} onClick={() => { playEffect('select'); setCategory(filter) }}>{filter === 'EXERCISE_DEX' ? 'Exercise Dex' : titleCase(filter)}</button>)}</div><section className="achievement-grid" aria-label="Achievements">{rows.map(({ definition, unlocked, progress }) => { const value = Math.min(progress, definition.target); return <article className={`panel achievement-card${unlocked ? ' is-unlocked' : ' is-locked'}`} key={definition.id}><GamificationBadge kind="achievement" src={achievementAssetPath(definition.id)} label={definition.name} locked={!unlocked} /><div><p className="eyebrow">{titleCase(definition.category)}</p><h2>{definition.name}</h2><p>{definition.description}</p>{unlocked ? <small>Unlocked {new Date(unlocked.unlockedAt).toLocaleDateString()}</small> : definition.dormant ? <small>Locked · nutrition targets not configured</small> : <><div className="gamification-progress" role="progressbar" aria-label={`${definition.name} progress`} aria-valuemin={0} aria-valuemax={definition.target} aria-valuenow={value}><i style={{ width: `${(value / definition.target) * 100}%` }} /></div><small>{formatProgress(value)} / {formatProgress(definition.target)}</small></>}</div></article> })}</section></div>
}

export function GamificationNotificationDialog() {
  const [pending, setPending] = useState<Awaited<ReturnType<typeof loadPendingGamificationNotifications>>>()
  const playedTransitionRef = useRef('')
  const { playEffect } = useAudio()
  const close = () => {
    playEffect('select')
    void markGamificationNotificationsSeen().then(() => setPending(undefined))
  }
  useBackNavigation('gamification-reward-dialog', Boolean(pending), close, 120)

  useEffect(() => {
    let current = true
    const refresh = (allowSound: boolean) => void loadPendingGamificationNotifications().then((value) => {
      if (!current || (!value.levelUp && !value.unlocks.length && !value.freezeRewards.length)) return
      setPending(value)
      const transition = evaluateGamificationAudioTransition(playedTransitionRef.current, { levelUp: value.levelUp, afterLevel: value.afterProgress.level, unlockIds: value.unlocks.map((unlock) => unlock.id) }, allowSound)
      playedTransitionRef.current = transition.signature
      if (transition.play) {
        playEffect('achievement_unlock')
      } else if (allowSound && value.freezeRewards.length) {
        playEffect('achievement_unlock')
      }
    })
    const handleGamificationChanged = () => refresh(true)
    refresh(false)
    window.addEventListener('fitdex:gamification-changed', handleGamificationChanged)
    return () => { current = false; window.removeEventListener('fitdex:gamification-changed', handleGamificationChanged) }
  }, [playEffect])
  if (!pending) return null
  const levelMilestoneId = levelMilestoneAchievementId(pending.beforeProgress.level, pending.afterProgress.level)
  return <div className="workout-finish-backdrop"><section className="panel gamification-notification" role="dialog" aria-modal="true" aria-labelledby="gamification-notification-title">{pending.rankUp ? <><GamificationBadge kind="rank" src={rankAssetPath(pending.afterProgress.rank)} label={`${pending.afterProgress.rank.name} rank badge`} size="large" /><p className="eyebrow">New Rank</p><h2 id="gamification-notification-title">{pending.afterProgress.rank.name}</h2><p>Level {pending.afterProgress.level}</p></> : pending.levelUp ? <>{levelMilestoneId ? <GamificationBadge kind="achievement" src={achievementAssetPath(levelMilestoneId)} label={`Level ${levelMilestoneId.slice(6)} achievement badge`} size="large" /> : <Sparkles aria-hidden="true" />}<p className="eyebrow">Level Up!</p><h2 id="gamification-notification-title">{pending.beforeProgress.level} → {pending.afterProgress.level}</h2><p>{levelMilestoneId ? `Level ${levelMilestoneId.slice(6)} milestone reached` : pending.afterProgress.rank.name}</p></> : pending.unlocks.length ? <AchievementNotification unlocks={pending.unlocks} /> : <><ShieldCheck aria-hidden="true" /><p className="eyebrow">FitDex Reward</p><h2 id="gamification-notification-title">Streak Freeze Earned</h2></>}{pending.unlocks.length && (pending.rankUp || pending.levelUp) ? <AchievementUnlockList unlocks={pending.unlocks} /> : null}{pending.freezeRewards.length ? <div className="freeze-reward-summary"><strong>+{pending.freezeRewards.length} Streak {pending.freezeRewards.length === 1 ? 'Freeze' : 'Freezes'}</strong><span>Updated balance: {pending.currentFreezeBalance}</span></div> : null}<button className="primary-button" type="button" autoFocus onClick={close}>Continue</button></section></div>
}

const LEVEL_MILESTONE_ACHIEVEMENT_IDS = [[10, 'level-10'], [25, 'level-25'], [50, 'level-50'], [75, 'level-75'], [100, 'level-100']] as const

function levelMilestoneAchievementId(beforeLevel: number, afterLevel: number) {
  return LEVEL_MILESTONE_ACHIEVEMENT_IDS.filter(([level]) => level > beforeLevel && level <= afterLevel).at(-1)?.[1]
}

function AchievementNotification({ unlocks }: { unlocks: Awaited<ReturnType<typeof loadPendingGamificationNotifications>>['unlocks'] }) {
  const unlock = unlocks[0]
  const achievement = unlock ? achievementById.get(unlock.achievementId) : undefined
  if (!unlock || !achievement || unlocks.length !== 1) return <><p className="eyebrow">Achievements</p><h2 id="gamification-notification-title">{unlocks.length} Achievements Unlocked</h2><p>+{unlocks.length * XP_REWARDS.achievement} XP</p><AchievementUnlockList unlocks={unlocks} /></>
  return <><GamificationBadge kind="achievement" src={achievementAssetPath(achievement.id)} label={`${achievement.name} achievement badge`} size="large" /><p className="eyebrow">Achievement Unlocked · +{XP_REWARDS.achievement} XP</p><h2 id="gamification-notification-title">{achievement.name}</h2></>
}

function AchievementUnlockList({ unlocks }: { unlocks: Awaited<ReturnType<typeof loadPendingGamificationNotifications>>['unlocks'] }) {
  return <ul className="gamification-notification-unlocks">{unlocks.map((unlock) => {
    const achievement = achievementById.get(unlock.achievementId)
    const name = achievement?.name ?? 'Unknown achievement'
    return <li key={unlock.id}><GamificationBadge kind="achievement" src={achievementAssetPath(unlock.achievementId)} label={`${name} achievement badge`} size="small" /><span>{name}</span><b style={{ color: 'var(--color-primary)' }}>+{XP_REWARDS.achievement} XP</b></li>
  })}</ul>
}

export function GamificationHelpButton({ variant = 'default' }: { variant?: 'default' | 'settings-row' }) { const [open, setOpen] = useState(false); const { playEffect } = useAudio(); return <><button className={variant === 'settings-row' ? 'settings-row' : 'page-help-button'} type="button" onClick={() => { playEffect('select'); setOpen(true) }}>{variant === 'settings-row' ? <><span className="settings-row-copy"><strong>Gamification Guide</strong><small>XP rules and progress</small></span><span className="settings-row-value">Open<span className="settings-chev" aria-hidden="true">›</span></span></> : <><CircleHelp size={18} aria-hidden="true" /> How Gamification Works</>}</button>{open ? <GuideDialog eyebrow="Fitness consistency" steps={gamificationHelpSteps} onClose={() => setOpen(false)} /> : null}</> }
function Subheader({ title, onBack }: { title: string; onBack: () => void }) { const { playEffect } = useAudio(); return <header className="progress-subheader"><button className="back-button" type="button" aria-label="Back" onClick={() => { playEffect('select'); onBack() }}><ArrowLeft aria-hidden="true" /></button><div><p className="eyebrow">Gamification</p><h1>{title}</h1></div></header> }
function titleCase(value: string) { return value.toLowerCase().replaceAll('_', ' ').replace(/(^|\s)\S/g, (letter) => letter.toUpperCase()) }
function formatProgress(value: number) { return Number.isInteger(value) ? value.toLocaleString() : value.toFixed(1) }

