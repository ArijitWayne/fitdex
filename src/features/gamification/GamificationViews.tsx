import { ArrowLeft, ChevronRight, CircleHelp, ShieldCheck, Sparkles, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Panel } from '../../components/ui/Panel.tsx'
import { CommandPageFrame } from '../../components/layout/CommandPageFrame.tsx'
import { ContextRail } from '../../components/ui/ContextRail.tsx'
import { dateFromLocalDateKey, getLocalDateKey, shiftLocalDateKey } from '../../utils/localDate.ts'
import { GuideDialog } from '../help/GuideDialog.tsx'
import { ACHIEVEMENT_CATEGORIES, achievementById, unlockedFirst, type AchievementCategory } from './achievementCatalog.ts'
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
  const { progression } = data
  const percent = progression.maxLevel ? 100 : Math.min(100, (progression.xpIntoLevel / progression.xpRequiredForNextLevel) * 100)
  const { playEffect } = useAudio()
  const [helpOpen, setHelpOpen] = useState(false)

  return <CommandPageFrame className="rank-detail-view" terminalTitle="FITDEX // GAMIFICATION" terminalMeta={`LV ${progression.level}`} headerActions={<button className="cmd-icon-btn" type="button" onClick={() => { playEffect('select'); setHelpOpen(true) }} aria-label="How Gamification Works" title="How Gamification Works"><CircleHelp size={15} aria-hidden="true" /></button>}>
    <header className="rank-detail-header">
      <button className="rank-detail-back" type="button" onClick={() => { playEffect('select'); onBack() }} aria-label="Back to Progress"><ArrowLeft size={16} aria-hidden="true" /><span>Progress</span></button>
      <div><h1>Level &amp; Rank</h1><p>Level {progression.level} · {progression.rank.name}</p></div>
    </header>

    <section className="rank-detail-module rank-detail-current" aria-labelledby="current-rank-title">
      <h2 id="current-rank-title">Current Rank</h2>
      <div className="rank-detail-current-body">
        <span className="rank-detail-current-badge"><GamificationBadge kind="rank" src={rankAssetPath(progression.rank)} label={`${progression.rank.name} rank emblem`} size="large" /></span>
        <div className="rank-detail-current-copy">
          <strong>{progression.rank.name} · Level {progression.level}</strong>
          <small>{progression.maxLevel ? `${progression.totalXp.toLocaleString()} XP · MAX LEVEL` : `${progression.totalXp.toLocaleString()} XP · ${progression.xpIntoLevel.toLocaleString()} / ${progression.xpRequiredForNextLevel.toLocaleString()} TO NEXT LEVEL`}</small>
          <div className="rank-detail-progress" role="progressbar" aria-label={progression.maxLevel ? 'Maximum level reached' : `Level ${progression.level} XP progress`} aria-valuemin={0} aria-valuemax={progression.maxLevel ? 100 : progression.xpRequiredForNextLevel} aria-valuenow={progression.maxLevel ? 100 : progression.xpIntoLevel}><i style={{ width: `${percent}%` }} /></div>
        </div>
      </div>
    </section>

    <section className="rank-detail-module rank-detail-journey" aria-labelledby="rank-journey-title">
      <h2 id="rank-journey-title">Rank Journey</h2>
      <ol className="rank-journey">{RANKS.map((rank) => {
        const isCurrent = rank.id === progression.rank.id
        const isFuture = progression.level < rank.minLevel
        return <li className={`${isCurrent ? 'is-current ' : ''}${isFuture ? 'is-future' : ''}`.trim()} key={rank.id} aria-current={isCurrent ? 'step' : undefined}>
          <GamificationBadge kind="rank" src={rankAssetPath(rank)} label={`${rank.name} emblem`} size="small" locked={isFuture} />
          <span><strong>{rank.name}</strong><small>{rank.minLevel === rank.maxLevel ? `Level ${rank.minLevel}` : `Levels ${rank.minLevel}–${rank.maxLevel}`}</small></span>
          {isCurrent ? <em>Current</em> : null}
        </li>
      })}</ol>
    </section>
    {helpOpen ? <GuideDialog eyebrow="Fitness consistency" steps={gamificationHelpSteps} onClose={() => setHelpOpen(false)} /> : null}
  </CommandPageFrame>
}

export function XpRules() { return <Panel eyebrow="How you earn XP"><dl className="xp-rules"><div><dt>Planned Routine</dt><dd>+30</dd></div><div><dt>Workout Day</dt><dd>+30</dd></div><div><dt>Unplanned Workout</dt><dd>+20</dd></div><div><dt>New Personal Record</dt><dd>+15</dd></div><div><dt>Full Food Log</dt><dd>+5</dd></div><div><dt>Calorie Target</dt><dd>+5</dd></div><div><dt>Protein Target</dt><dd>+5</dd></div><div><dt>Achievement Unlocked</dt><dd>+50</dd></div></dl></Panel> }

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
      <CommandPageFrame className="consistency-deck" terminalTitle="FITDEX // CONSISTENCY" terminalMeta="STREAK PROTECTION">
        <ConsistencyDeckHeader onBack={() => { playEffect('select'); onBack() }} />
        <ContextRail title="Streak protection" actions={<button className="primary-button" type="button" onClick={() => { playEffect('select'); void acknowledgeFirstUse('streakProtection'); setShowFirstUse(false) }}>View My Streak</button>}>
          <p>Freezes cover one missed planned day automatically. Travel / Sickness Pause protects 1–7 days without progress or Freeze use.</p>
        </ContextRail>
      </CommandPageFrame>
    )
  }
  const successfulCount = data.snapshots.filter((snapshot) => snapshot.result === 'success').length
  const nextFreezeProgress = successfulCount % SUCCESSFUL_DAYS_PER_FREEZE
  const nextFreezePercent = (nextFreezeProgress / SUCCESSFUL_DAYS_PER_FREEZE) * 100

  return (
    <CommandPageFrame className="consistency-deck" terminalTitle="FITDEX // CONSISTENCY" terminalMeta="STREAK PROTECTION">
      <ConsistencyDeckHeader onBack={() => { playEffect('select'); onBack() }} />

      <section className="consistency-streak-card">
        <p>CURRENT PLAN STREAK</p>
        <strong>{data.streak.current} {data.streak.current === 1 ? 'DAY' : 'DAYS'}</strong>
        <small>BEST · {data.streak.best} {data.streak.best === 1 ? 'DAY' : 'DAYS'}</small>
      </section>

      <section className="consistency-deck-module consistency-protection-card">
        <h2 className="consistency-deck-heading">FREEZE PROTECTION</h2>
        <article className="consistency-detail-card freeze-balance-card">
          <span className="consistency-card-icon"><FreezeSnowflakeIcon className="freeze-snowflake-icon" /></span>
          <span className="consistency-card-copy"><small>FREEZE BALANCE</small><strong>{data.freezeBalance} {data.freezeBalance === 1 ? 'FREEZE AVAILABLE' : 'FREEZES AVAILABLE'}</strong><p>Applied automatically after a missed planned day.</p></span>
          {data.freezeBalance > 0 ? <em className="consistency-ready-state">READY</em> : null}
        </article>
        <article className="consistency-detail-card next-freeze-card">
          <span className="consistency-card-icon"><ShieldCheck aria-hidden="true" /></span>
          <span className="consistency-card-copy"><small>NEXT FREEZE</small><strong>{nextFreezeProgress} / {SUCCESSFUL_DAYS_PER_FREEZE} successful days</strong></span>
          <span className="consistency-progress-value">{Math.round(nextFreezePercent)}%</span>
          <div className="consistency-freeze-progress" role="progressbar" aria-label="Progress to next Streak Freeze" aria-valuemin={0} aria-valuemax={SUCCESSFUL_DAYS_PER_FREEZE} aria-valuenow={nextFreezeProgress}><i style={{ width: `${nextFreezePercent}%` }} /></div>
          <small className="consistency-helper">+1 Freeze every {SUCCESSFUL_DAYS_PER_FREEZE} successful planned training days.</small>
        </article>
      </section>

      <section className="consistency-deck-module consistency-pause-section">
        <h2 className="consistency-deck-heading">TRAVEL / SICKNESS PAUSE</h2>
        {data.activePause ? (
          <div className="active-pause-card">
            <strong>{data.activePause.reason === 'travel' ? 'TRAVEL PAUSE ACTIVE' : 'SICKNESS PAUSE ACTIVE'}</strong>
            <p>{data.activePause.startDate} to {data.activePause.endDate}</p>
            <small>Streak protected. XP and daily mission progress are paused.</small>
          </div>
        ) : null}
        <article className="consistency-detail-card pause-allowance-card">
          <span className="consistency-card-icon"><ShieldCheck aria-hidden="true" /></span>
          <span className="consistency-card-copy"><small>PAUSE ALLOWANCE</small><strong>{data.pauseUsesRemaining} / {MAX_PAUSES_PER_ROLLING_YEAR} pauses available</strong><p>Protect 1–{MAX_PAUSE_DAYS} days for travel or sickness. No Freeze use. Plan Streak stays intact.</p></span>
          <span className="consistency-policy">Max {MAX_PAUSE_DAYS} days · rolling 12 months</span>
        </article>
        <button
          className="pause-action-btn"
          type="button"
          disabled={!data.pauseUsesRemaining}
          onClick={() => { playEffect('select'); setPauseOpen(true) }}
        >
          PLAN A PAUSE <span aria-hidden="true">›</span>
        </button>
      </section>

      {pauseOpen ? <PauseDialog onClose={() => setPauseOpen(false)} onSaved={async () => { setPauseOpen(false); onChanged(await loadGamificationDashboard()) }} /> : null}
    </CommandPageFrame>
  )
}

function ConsistencyDeckHeader({ onBack }: { onBack: () => void }) {
  return (
    <header className="consistency-deck-header">
      <button className="consistency-deck-back-btn back-command-key" type="button" onClick={onBack}><ArrowLeft size={18} strokeWidth={2.5} aria-hidden="true" /><span>HOME</span></button>
      <div className="page-navigation-title-block"><h1>CONSISTENCY DECK</h1><p>Plan protection and recovery.</p></div>
    </header>
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
    } catch { }
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
  const [helpOpen, setHelpOpen] = useState(false)
  const rows = unlockedFirst(data.achievements.filter((entry) => category === 'ALL' || entry.definition.category === category))
  const unlockedCount = data.unlocks.length
  const total = data.achievements.length
  const completionPercent = total ? Math.round((unlockedCount / total) * 100) : 0

  return <CommandPageFrame className="achievement-archive-page" terminalTitle="FITDEX // GAMIFICATION" terminalMeta={`${unlockedCount} / ${total}`} headerActions={<button className="cmd-icon-btn" type="button" onClick={() => { playEffect('select'); setHelpOpen(true) }} aria-label="How Gamification Works" title="How Gamification Works"><CircleHelp size={15} aria-hidden="true" /></button>}>
    <header className="achievement-archive-header">
      {onBack ? <button className="achievement-archive-back" type="button" onClick={() => { playEffect('select'); onBack() }} aria-label="Back to Progress"><ArrowLeft size={16} aria-hidden="true" /><span>Progress</span></button> : null}
      <div><h1>Achievements</h1><p>{unlockedCount} unlocked · {completionPercent}% complete.</p></div>
    </header>

    <section className="achievement-archive-progress" aria-labelledby="achievement-progress-title">
      <h2 id="achievement-progress-title">Archive Progress</h2>
      <div className="achievement-archive-progress-body">
        <strong>{unlockedCount} / {total}</strong>
        <small>Keep building your record</small>
        <div className="achievement-archive-meter" role="progressbar" aria-label="Achievement completion" aria-valuemin={0} aria-valuemax={total} aria-valuenow={unlockedCount}><i style={{ width: `${completionPercent}%` }} /></div>
        <div className="achievement-filters" role="group" aria-label="Achievement category">{(['ALL', ...ACHIEVEMENT_CATEGORIES] as const).map((filter) => <button type="button" key={filter} aria-pressed={category === filter} onClick={() => { playEffect('select'); setCategory(filter) }}>{filter === 'EXERCISE_DEX' ? 'Exercise Dex' : titleCase(filter)}</button>)}</div>
      </div>
    </section>

    <section className="achievement-archive-module" aria-labelledby="achievement-archive-title">
      <h2 id="achievement-archive-title">Achievement Archive</h2>
      <div className="achievement-grid" aria-label="Achievements">{rows.map(({ definition, unlocked, progress }) => {
        const value = Math.min(progress, definition.target)
        const status = unlocked ? new Date(unlocked.unlockedAt).toLocaleDateString() : definition.dormant ? 'Locked' : `${formatProgress(value)} / ${formatProgress(definition.target)}`
        return <article className={`achievement-card${unlocked ? ' is-unlocked' : ' is-locked'}`} key={definition.id}>
          <GamificationBadge kind="achievement" src={achievementAssetPath(definition.id)} label={definition.name} locked={!unlocked} />
          <div className="achievement-card-copy"><h3>{definition.name}</h3><p><span>{titleCase(definition.category)}</span> · {definition.description}</p>{!unlocked && !definition.dormant ? <div className="achievement-card-meter" role="progressbar" aria-label={`${definition.name} progress`} aria-valuemin={0} aria-valuemax={definition.target} aria-valuenow={value}><i style={{ width: `${(value / definition.target) * 100}%` }} /></div> : null}</div>
          <small className="achievement-card-status">{status}</small>
        </article>
      })}</div>
    </section>
    {helpOpen ? <GuideDialog eyebrow="Fitness consistency" steps={gamificationHelpSteps} onClose={() => setHelpOpen(false)} /> : null}
  </CommandPageFrame>
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

export function GamificationHelpButton({ variant = 'default' }: { variant?: 'default' | 'settings-row' }) { const [open, setOpen] = useState(false); const { playEffect } = useAudio(); return <><button className={variant === 'settings-row' ? 'settings-row' : 'page-help-button'} type="button" onClick={() => { playEffect('select'); setOpen(true) }}>{variant === 'settings-row' ? <><span className="settings-row-icon"><CircleHelp size={20} aria-hidden="true" /></span><span className="settings-row-copy"><strong>Gamification Guide</strong><small>XP rules and progress</small></span><span className="settings-row-value">Open</span><ChevronRight className="settings-row-chevron" size={17} strokeWidth={2.25} aria-hidden="true" /></> : <><CircleHelp size={18} aria-hidden="true" /> How Gamification Works</>}</button>{open ? <GuideDialog eyebrow="Fitness consistency" steps={gamificationHelpSteps} onClose={() => setOpen(false)} /> : null}</> }
function titleCase(value: string) { return value.toLowerCase().replaceAll('_', ' ').replace(/(^|\s)\S/g, (letter) => letter.toUpperCase()) }
function formatProgress(value: number) { return Number.isInteger(value) ? value.toLocaleString() : value.toFixed(1) }
