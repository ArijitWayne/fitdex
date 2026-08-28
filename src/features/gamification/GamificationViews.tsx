import { ArrowLeft, CalendarClock, CircleHelp, Sparkles, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Panel } from '../../components/ui/Panel.tsx'
import type { PlanDaySnapshot } from '../../data/models.ts'
import { dateFromLocalDateKey, getLocalDateKey, shiftLocalDateKey } from '../../utils/localDate.ts'
import { GuideDialog } from '../help/GuideDialog.tsx'
import { ACHIEVEMENT_CATEGORIES, achievementById, type AchievementCategory } from './achievementCatalog.ts'
import { achievementAssetPath, MAX_PAUSE_DAYS, MAX_PAUSES_PER_ROLLING_YEAR, RANKS, rankAssetPath } from './gamificationConfig.ts'
import { GamificationBadge } from './GamificationBadge.tsx'
import { loadGamificationDashboard, loadPendingGamificationNotifications, markGamificationNotificationsSeen, planStreakPause, type GamificationDashboard } from './gamificationRepository.ts'
import { gamificationHelpSteps } from './gamificationHelp.ts'
import { useAudio } from '../audio/useAudio.ts'
import { evaluateGamificationAudioTransition } from '../audio/audioModel.ts'

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

export function XpRules() { return <Panel eyebrow="How you earn XP"><dl className="xp-rules"><div><dt>Planned Routine</dt><dd>+30</dd></div><div><dt>Workout Day</dt><dd>+30</dd></div><div><dt>Unplanned Workout</dt><dd>+20</dd></div><div><dt>New Personal Record</dt><dd>+15</dd></div><div><dt>Full Food Log</dt><dd>+5</dd></div><div className="is-dormant"><dt>Calorie Target</dt><dd>+5 · target setting required</dd></div><div className="is-dormant"><dt>Protein Target</dt><dd>+5 · target setting required</dd></div></dl></Panel> }

function RecentXp({ data }: { data: GamificationDashboard }) { return <Panel eyebrow="Recent XP">{data.xpEvents.length ? <ul className="recent-xp">{data.xpEvents.slice(0, 10).map((event) => <li key={event.id}><span><strong>{xpEventLabel(event)}</strong><small>{new Date(event.occurredAt).toLocaleString()}</small></span><b>+{event.amount}</b></li>)}</ul> : <p>No XP earned yet.</p>}</Panel> }

function xpEventLabel(event: GamificationDashboard['xpEvents'][number]) { if (event.type === 'personal_record') return `${event.metadata?.exerciseName ?? 'Exercise'} PR`; if (event.type === 'full_food_log') return 'All four meals logged'; return String(event.metadata?.name ?? event.type.replaceAll('_', ' ')) }

export function StreakDetailView({ data, onBack, onChanged }: { data: GamificationDashboard; onBack: () => void; onChanged: (data: GamificationDashboard) => void }) {
  const [pauseOpen, setPauseOpen] = useState(false)
  const today = getLocalDateKey()
  const weekStart = shiftLocalDateKey(today, -((dateFromLocalDateKey(today).getDay() + 6) % 7))
  const week = Array.from({ length: 7 }, (_, index) => { const date = shiftLocalDateKey(weekStart, index); return data.snapshots.find((snapshot) => snapshot.localDate === date) ?? data.planPreview[date] })
  return <div className="page-stack gamification-detail"><Subheader title="Plan Streak" onBack={onBack} /><Panel className="streak-hero" eyebrow="Current Plan Streak"><strong>{data.streak.current}</strong><span>Best · {data.streak.best}</span><small>successful planned training days</small></Panel><Panel eyebrow="This week"><ol className="streak-week">{week.map((snapshot, index) => { const date = shiftLocalDateKey(weekStart, index); return <li key={date}><strong>{new Intl.DateTimeFormat(undefined, { weekday: 'short' }).format(dateFromLocalDateKey(date)).toUpperCase()}</strong><span>{snapshotLabel(snapshot)}</span><em>{resultLabel(snapshot?.result)}</em></li> })}</ol></Panel><Panel eyebrow="Streak Freezes" title={`${data.freezeBalance} / 3 available`}><p>Automatically protects one missed planned training day. It does not add a streak day or XP.</p></Panel><Panel eyebrow="Travel / Sickness Pause" title="Protect an extended interruption"><p>Maximum {MAX_PAUSE_DAYS} days · {MAX_PAUSES_PER_ROLLING_YEAR} uses per rolling 12 months</p><strong>Pauses available: {data.pauseUsesRemaining} / {MAX_PAUSES_PER_ROLLING_YEAR}</strong><button className="secondary-button" type="button" disabled={!data.pauseUsesRemaining} onClick={() => setPauseOpen(true)}><CalendarClock size={17} aria-hidden="true" /> Plan a Pause</button></Panel>{pauseOpen ? <PauseDialog onClose={() => setPauseOpen(false)} onSaved={async () => { setPauseOpen(false); onChanged(await loadGamificationDashboard()) }} /> : null}</div>
}

function PauseDialog({ onClose, onSaved }: { onClose: () => void; onSaved: () => void }) {
  const today = getLocalDateKey()
  const [reason, setReason] = useState<'travel' | 'sickness'>('travel')
  const [startDate, setStartDate] = useState(today)
  const [endDate, setEndDate] = useState(today)
  const [error, setError] = useState('')
  const duration = Math.max(0, Math.round((dateFromLocalDateKey(endDate).getTime() - dateFromLocalDateKey(startDate).getTime()) / 86400000) + 1)
  return <div className="workout-finish-backdrop"><section className="panel pause-dialog" role="dialog" aria-modal="true" aria-labelledby="pause-title"><header><div><p className="eyebrow">Streak protection</p><h2 id="pause-title">Travel / Sickness Pause</h2></div><button type="button" aria-label="Close pause dialog" onClick={onClose}><X aria-hidden="true" /></button></header><fieldset><legend>Reason</legend><label><input type="radio" checked={reason === 'travel'} onChange={() => setReason('travel')} /> Travel</label><label><input type="radio" checked={reason === 'sickness'} onChange={() => setReason('sickness')} /> Sickness</label></fieldset><label><span>From</span><input type="date" min={today} value={startDate} onChange={(event) => setStartDate(event.target.value)} /></label><label><span>Until</span><input type="date" min={startDate} value={endDate} onChange={(event) => setEndDate(event.target.value)} /></label><p><strong>{duration} {duration === 1 ? 'day' : 'days'}</strong> · maximum 7</p><p>Your streak is protected but does not increase. XP and Daily Quest progress are paused. Your Weekly Plan stays unchanged.</p>{error ? <p className="form-error" role="alert">{error}</p> : null}<button className="secondary-button" type="button" onClick={onClose}>Cancel</button><button className="primary-button" type="button" onClick={() => void planStreakPause(reason, startDate, endDate).then(onSaved).catch((reasonValue: unknown) => setError(reasonValue instanceof Error ? reasonValue.message : 'Pause could not be saved.'))}>Plan Pause</button></section></div>
}

export function AchievementsView({ data, onBack }: { data: GamificationDashboard; onBack?: () => void }) {
  const [category, setCategory] = useState<'ALL' | AchievementCategory>('ALL')
  const rows = data.achievements.filter((entry) => category === 'ALL' || entry.definition.category === category)
  const unlockedCount = data.unlocks.length
  return <div className="page-stack achievements-page">{onBack ? <Subheader title="Achievements" onBack={onBack} /> : null}<Panel eyebrow="Achievements" title={`${unlockedCount} / 52 unlocked`}><div className="gamification-progress" role="progressbar" aria-label="Achievement completion" aria-valuemin={0} aria-valuemax={52} aria-valuenow={unlockedCount}><i style={{ width: `${(unlockedCount / 52) * 100}%` }} /></div><p>{Math.round((unlockedCount / 52) * 100)}% complete</p></Panel><div className="achievement-filters" role="group" aria-label="Achievement category">{(['ALL', ...ACHIEVEMENT_CATEGORIES] as const).map((filter) => <button type="button" key={filter} aria-pressed={category === filter} onClick={() => setCategory(filter)}>{filter === 'EXERCISE_DEX' ? 'Exercise Dex' : titleCase(filter)}</button>)}</div><section className="achievement-grid" aria-label="Achievements">{rows.map(({ definition, unlocked, progress }) => { const value = Math.min(progress, definition.target); return <article className={`panel achievement-card${unlocked ? ' is-unlocked' : ' is-locked'}`} key={definition.id}><GamificationBadge kind="achievement" src={achievementAssetPath(definition.id)} label={definition.name} locked={!unlocked} /><div><p className="eyebrow">{titleCase(definition.category)}</p><h2>{definition.name}</h2><p>{definition.description}</p>{unlocked ? <small>Unlocked {new Date(unlocked.unlockedAt).toLocaleDateString()}</small> : definition.dormant ? <small>Locked · nutrition targets not configured</small> : <><div className="gamification-progress" role="progressbar" aria-label={`${definition.name} progress`} aria-valuemin={0} aria-valuemax={definition.target} aria-valuenow={value}><i style={{ width: `${(value / definition.target) * 100}%` }} /></div><small>{formatProgress(value)} / {formatProgress(definition.target)}</small></>}</div></article> })}</section></div>
}

export function GamificationNotificationDialog() {
  const [pending, setPending] = useState<Awaited<ReturnType<typeof loadPendingGamificationNotifications>>>()
  const playedTransitionRef = useRef('')
  const { playEffect } = useAudio()
  useEffect(() => {
    let current = true
    const refresh = (allowSound: boolean) => void loadPendingGamificationNotifications().then((value) => {
      if (!current || (!value.levelUp && !value.unlocks.length)) return
      setPending(value)
      const transition = evaluateGamificationAudioTransition(playedTransitionRef.current, { levelUp: value.levelUp, afterLevel: value.afterProgress.level, unlockIds: value.unlocks.map((unlock) => unlock.id) }, allowSound)
      playedTransitionRef.current = transition.signature
      if (transition.play) {
        playEffect('achievement_unlock')
      }
    })
    const handleGamificationChanged = () => refresh(true)
    refresh(false)
    window.addEventListener('fitdex:gamification-changed', handleGamificationChanged)
    return () => { current = false; window.removeEventListener('fitdex:gamification-changed', handleGamificationChanged) }
  }, [playEffect])
  if (!pending) return null
  const close = () => void markGamificationNotificationsSeen().then(() => setPending(undefined))
  const levelMilestoneId = levelMilestoneAchievementId(pending.beforeProgress.level, pending.afterProgress.level)
  return <div className="workout-finish-backdrop"><section className="panel gamification-notification" role="dialog" aria-modal="true" aria-labelledby="gamification-notification-title">{pending.rankUp ? <><GamificationBadge kind="rank" src={rankAssetPath(pending.afterProgress.rank)} label={`${pending.afterProgress.rank.name} rank badge`} size="large" /><p className="eyebrow">New Rank</p><h2 id="gamification-notification-title">{pending.afterProgress.rank.name}</h2><p>Level {pending.afterProgress.level}</p></> : pending.levelUp ? <>{levelMilestoneId ? <GamificationBadge kind="achievement" src={achievementAssetPath(levelMilestoneId)} label={`Level ${levelMilestoneId.slice(6)} achievement badge`} size="large" /> : <Sparkles aria-hidden="true" />}<p className="eyebrow">Level Up!</p><h2 id="gamification-notification-title">{pending.beforeProgress.level} → {pending.afterProgress.level}</h2><p>{levelMilestoneId ? `Level ${levelMilestoneId.slice(6)} milestone reached` : pending.afterProgress.rank.name}</p></> : <AchievementNotification unlocks={pending.unlocks} />}{pending.unlocks.length && (pending.rankUp || pending.levelUp) ? <AchievementUnlockList unlocks={pending.unlocks} /> : null}<button className="primary-button" type="button" autoFocus onClick={close}>Continue</button></section></div>
}

const LEVEL_MILESTONE_ACHIEVEMENT_IDS = [[10, 'level-10'], [25, 'level-25'], [50, 'level-50'], [75, 'level-75'], [100, 'level-100']] as const

function levelMilestoneAchievementId(beforeLevel: number, afterLevel: number) {
  return LEVEL_MILESTONE_ACHIEVEMENT_IDS.filter(([level]) => level > beforeLevel && level <= afterLevel).at(-1)?.[1]
}

function AchievementNotification({ unlocks }: { unlocks: Awaited<ReturnType<typeof loadPendingGamificationNotifications>>['unlocks'] }) {
  const unlock = unlocks[0]
  const achievement = unlock ? achievementById.get(unlock.achievementId) : undefined
  if (!unlock || !achievement || unlocks.length !== 1) return <><p className="eyebrow">Achievements</p><h2 id="gamification-notification-title">{unlocks.length} Achievements Unlocked</h2><AchievementUnlockList unlocks={unlocks} /></>
  return <><GamificationBadge kind="achievement" src={achievementAssetPath(achievement.id)} label={`${achievement.name} achievement badge`} size="large" /><p className="eyebrow">Achievement Unlocked</p><h2 id="gamification-notification-title">{achievement.name}</h2></>
}

function AchievementUnlockList({ unlocks }: { unlocks: Awaited<ReturnType<typeof loadPendingGamificationNotifications>>['unlocks'] }) {
  return <ul className="gamification-notification-unlocks">{unlocks.map((unlock) => {
    const achievement = achievementById.get(unlock.achievementId)
    const name = achievement?.name ?? 'Unknown achievement'
    return <li key={unlock.id}><GamificationBadge kind="achievement" src={achievementAssetPath(unlock.achievementId)} label={`${name} achievement badge`} size="small" /><span>{name}</span></li>
  })}</ul>
}

export function GamificationHelpButton() { const [open, setOpen] = useState(false); return <><button className="page-help-button" type="button" onClick={() => setOpen(true)}><CircleHelp size={18} aria-hidden="true" /> How Gamification Works</button>{open ? <GuideDialog eyebrow="Fitness consistency" steps={gamificationHelpSteps} onClose={() => setOpen(false)} /> : null}</> }
function Subheader({ title, onBack }: { title: string; onBack: () => void }) { const { playEffect } = useAudio(); return <header className="progress-subheader"><button className="back-button" type="button" aria-label="Back" onClick={() => { playEffect('select'); onBack() }}><ArrowLeft aria-hidden="true" /></button><div><p className="eyebrow">Gamification</p><h1>{title}</h1></div></header> }
function snapshotLabel(snapshot?: Pick<PlanDaySnapshot, 'plannedType' | 'routineNameSnapshot'>) { if (!snapshot) return 'No snapshot'; if (snapshot.plannedType === 'routine') return snapshot.routineNameSnapshot ?? 'Routine'; if (snapshot.plannedType === 'workout_day') return 'Workout'; if (snapshot.plannedType === 'rest_day') return 'Rest'; return 'No Plan' }
function resultLabel(result?: PlanDaySnapshot['result']) { if (!result || result === 'pending') return 'Pending'; if (result === 'success') return '✓'; if (result === 'rest' || result === 'no_plan') return '—'; return titleCase(result) }
function titleCase(value: string) { return value.toLowerCase().replaceAll('_', ' ').replace(/(^|\s)\S/g, (letter) => letter.toUpperCase()) }
function formatProgress(value: number) { return Number.isInteger(value) ? value.toLocaleString() : value.toFixed(1) }
