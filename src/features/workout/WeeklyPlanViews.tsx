import { ArrowLeft, ChevronRight, Plus, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import type { WeekdayId, WeeklyPlanAssignment, WeeklyPlanFeedback } from '../../data/models.ts'
import { WEEKDAY_IDS } from '../../data/models.ts'
import { Panel } from '../../components/ui/Panel.tsx'
import { ContextRail } from '../../components/ui/ContextRail.tsx'
import type { RoutineWithItems } from './routineRepository.ts'
import { saveWeeklyPlan, WEEKDAY_LABELS, weeklyPlanAssignmentLabel, type WeeklyPlan } from './weeklyPlan.ts'
import { acknowledgeFirstUse, loadFirstUseGuidance } from '../help/firstUseGuidance.ts'
import { useAudio } from '../audio/useAudio.ts'

export function WeeklyPlanPanel({ plan, routines, onEdit }: { plan: WeeklyPlan; routines: readonly RoutineWithItems[]; onEdit: () => void }) {
  return <Panel className="workout-hub-section weekly-plan-panel" eyebrow="Weekly plan" title={plan.configured ? 'Your recurring week' : 'No workout plan yet'}>
    {plan.configured ? <div className="weekly-plan-list">{WEEKDAY_IDS.map((day) => <button type="button" key={day} onClick={onEdit}><strong>{WEEKDAY_LABELS[day].slice(0, 3)}</strong><span>{weeklyPlanAssignmentLabel(plan.days[day], routines.map((entry) => entry.routine))}</span><ChevronRight size={18} aria-hidden="true" /></button>)}</div> : <div className="workout-empty"><strong>No workout plan yet</strong><p>Set workout days, rest days, or assign routines when you create them.</p></div>}
    <button className="secondary-button" type="button" onClick={onEdit}>{plan.configured ? 'Edit Weekly Plan' : 'Set Weekly Plan'}</button>
  </Panel>
}

export type WeeklyTileStateKey = 'done' | 'plan' | 'freeze' | 'miss' | 'rest' | 'noplan'

export const WEEKDAY_INITIALS: Record<WeekdayId, string> = {
  monday: 'M',
  tuesday: 'T',
  wednesday: 'W',
  thursday: 'T',
  friday: 'F',
  saturday: 'S',
  sunday: 'S',
}

export function BrickWallTileSvg({ stateKey, isToday: _isToday }: { stateKey: WeeklyTileStateKey; isToday?: boolean }) {
  const p = stateKey === 'done' ? '--done'
    : stateKey === 'plan' ? '--plan'
    : stateKey === 'freeze' ? '--freeze'
    : stateKey === 'miss' ? '--miss'
    : stateKey === 'rest' ? '--rest'
    : stateKey === 'noplan' ? '--noplan'
    : '--wall-base'
  const isInactive = stateKey === 'noplan'

  return (
    <svg className="wall-svg" viewBox="0 0 48 54" preserveAspectRatio="none" aria-hidden="true">
      {/* Outer Mortar Foundation */}
      <rect x="1" y="2" width="46" height="51" fill={`var(${p}-shadow)`} />
      <rect x="1" y="1" width="46" height="50" fill={`var(${p}-mortar)`} />
      {/* COURSE 1 (Top Bricks) */}
      <rect x="3" y="3" width="18" height="13" fill={`var(${p}-mid)`} stroke={`var(${p}-mortar)`} strokeWidth="0.75" />
      <path d="M 3 3 L 21 3 L 21 5 L 5 5 L 5 16 L 3 16 Z" fill={`var(${p}-highlight)`} opacity={isInactive ? 0.2 : 0.45} />
      <rect x="23" y="3" width="22" height="13" fill={`var(${p}-mid)`} stroke={`var(${p}-mortar)`} strokeWidth="0.75" />
      <path d="M 23 3 L 45 3 L 45 5 L 25 5 L 25 16 L 23 16 Z" fill={`var(${p}-highlight)`} opacity={isInactive ? 0.2 : 0.45} />

      {/* COURSE 2 (Center Main Brick Plate for Letter) */}
      <rect x="3" y="18" width="42" height="18" fill={`var(${p}-light)`} stroke={`var(${p}-mortar)`} strokeWidth="0.75" />
      <path d="M 3 18 L 45 18 L 45 20 L 5 20 L 5 36 L 3 36 Z" fill={`var(${p}-highlight)`} opacity={isInactive ? 0.2 : 0.4} />
      <path d="M 45 18 L 45 36 L 3 36 L 5 34 L 43 34 L 43 20 Z" fill={`var(${p}-shadow)`} opacity={0.55} />

      {/* COURSE 3 (Bottom Bricks) */}
      <rect x="3" y="38" width="24" height="11" fill={`var(${p}-mid)`} stroke={`var(${p}-mortar)`} strokeWidth="0.75" />
      <path d="M 3 38 L 27 38 L 27 40 L 5 40 L 5 49 L 3 49 Z" fill={`var(${p}-highlight)`} opacity={isInactive ? 0.2 : 0.45} />
      <rect x="29" y="38" width="16" height="11" fill={`var(${p}-mid)`} stroke={`var(${p}-mortar)`} strokeWidth="0.75" />
      <path d="M 29 38 L 45 38 L 45 40 L 31 40 L 31 49 L 29 49 Z" fill={`var(${p}-highlight)`} opacity={isInactive ? 0.2 : 0.45} />

      {/* Outer Bevel Perimeter */}
      <rect x="2" y="2" width="44" height="48" fill="none" stroke={`var(${p}-mortar)`} strokeWidth="1" />

      {/* Inactive Tile Soft Mortar Hatch */}
      {isInactive ? (
        <rect x="3" y="3" width="42" height="46" fill="none" stroke="var(--noplan-mortar)" strokeWidth="1" strokeDasharray="2 2" opacity={0.5} />
      ) : null}

      {/* Today Focus Rim */}
      <rect className="today-focus-rim" x="1" y="1" width="46" height="50" rx="1" fill="none" stroke="transparent" strokeWidth="1.5" opacity={0} />
    </svg>
  )
}

export function WeeklyPlanDayTile({
  day: _day,
  initial,
  stateKey,
  today,
  selected,
  accessibleLabel,
  onClick,
}: {
  day: WeekdayId
  initial: string
  stateKey: WeeklyTileStateKey
  today: boolean
  selected?: boolean
  accessibleLabel: string
  onClick?: () => void
}) {
  const isNoPlan = stateKey === 'noplan'
  return (
    <button
      type="button"
      className={`pixel-wall-tile${isNoPlan ? ' state-noplan' : ''}${today ? ' is-today' : ''}${selected ? ' is-selected' : ''}`}
      onClick={onClick}
      aria-label={accessibleLabel}
      title={accessibleLabel}
    >
      <BrickWallTileSvg stateKey={stateKey} isToday={today} />
      <span className="wall-face-letter" aria-hidden="true">{initial}</span>
    </button>
  )
}

export function WeeklyPlanFeedbackDialog({ feedback, onViewPlan, onDismiss, onUpdate }: {
  feedback: WeeklyPlanFeedback
  onViewPlan: () => void
  onDismiss: () => void
  onUpdate: () => void
}) {
  const day = feedback.weekday ? WEEKDAY_LABELS[feedback.weekday] : undefined
  const streakGain = 'streakAfter' in feedback ? Math.max(0, feedback.streakAfter - feedback.streakBefore) : 0
  let eyebrow = 'Workout complete'
  let title = 'Workout saved.'
  let body = ''
  let status: string | undefined
  let primary = 'View Weekly Plan'
  let secondary: string | undefined = 'Not Now'
  let primaryAction = onViewPlan

  if (feedback.type === 'inferred_routine') {
    eyebrow = `Plan Streak +${streakGain}`
    title = `${feedback.routineName} complete.`
    body = `You trained on an unplanned day, so ${day} has been added to your Weekly Plan.\n\n${feedback.routineName} is now your ${day} routine.`
  } else if (feedback.type === 'inferred_workout_day') {
    eyebrow = `Plan Streak +${streakGain}`
    title = 'Workout complete.'
    body = `You trained on an unplanned day, so ${day} has been added to your Weekly Plan as a Workout Day.\n\nAny workout can complete this day. No routine was created.`
  } else if (feedback.type === 'historical_reconciliation') {
    eyebrow = 'Past training recognized'
    title = `${feedback.restoredDays} completed training ${feedback.restoredDays === 1 ? 'day' : 'days'} restored.`
    body = `Your Plan Streak has been updated: ${feedback.streakBefore} → ${feedback.streakAfter}.`
    secondary = undefined
  } else if (feedback.type === 'rest_day_decision') {
    eyebrow = 'Extra workout complete'
    title = 'You trained on a planned Rest Day.'
    status = `Plan Streak +${streakGain}`
    body = `Today's workout still counts toward your streak.\n\nDo you want future ${day}s to become ${feedback.routineName ? `${feedback.routineName} days` : 'Workout Days'}?`
    primary = `Update ${day}s`
    secondary = 'Keep Rest Day'
    primaryAction = onUpdate
  } else {
    title = `${feedback.completedRoutineName} complete.`
    body = `You trained ${feedback.completedRoutineName} instead of ${feedback.plannedRoutineName}. Use ${feedback.completedRoutineName} on future ${day}s?`
    primary = `Update ${day}s`
    secondary = `Keep ${feedback.plannedRoutineName}`
    primaryAction = onUpdate
  }

  return <div className="workout-finish-backdrop"><section className="panel weekly-plan-feedback-dialog" role="dialog" aria-modal="true" aria-labelledby="weekly-plan-feedback-title">
    <p className="eyebrow">{eyebrow}</p>
    {status ? <p className="weekly-plan-feedback-status">{status}</p> : null}
    <h2 id="weekly-plan-feedback-title">{title}</h2>
    <p>{body}</p>
    <div className="weekly-plan-feedback-actions">
      <button className="primary-button" type="button" autoFocus onClick={primaryAction}>{primary}</button>
      {secondary ? <button className="secondary-button" type="button" onClick={onDismiss}>{secondary}</button> : null}
    </div>
  </section></div>
}

export function WeeklyPlanEditor({ plan, routines, onChanged, onBack, onCreateRoutine }: { plan: WeeklyPlan; routines: readonly RoutineWithItems[]; onChanged: (plan: WeeklyPlan) => void; onBack: () => void; onCreateRoutine: () => void }) {
  const [editingDay, setEditingDay] = useState<WeekdayId>()
  const [days, setDays] = useState(plan.days)
  const [error, setError] = useState('')
  const [showFirstUse, setShowFirstUse] = useState(false)
  const { playEffect } = useAudio()
  useEffect(() => { void loadFirstUseGuidance().then((guidance) => setShowFirstUse(!guidance.weeklyPlan)) }, [])
  const choose = (assignment: WeeklyPlanAssignment) => {
    if (!editingDay) return
    playEffect('select')
    setDays((current) => ({ ...current, [editingDay]: assignment }))
    setEditingDay(undefined)
  }
  const save = async () => {
    try {
      setError('')
      const saved = await saveWeeklyPlan(days)
      await acknowledgeFirstUse('weeklyPlan')
      playEffect('add')
      onChanged(saved)
      onBack()
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'Weekly plan could not be saved.')
    }
  }
  if (showFirstUse) return <div className="page-stack workout-page"><ContextRail eyebrow="Weekly Plan" title="Your Weekly Plan defines training intentions" actions={<button className="primary-button" type="button" onClick={() => { playEffect('select'); void acknowledgeFirstUse('weeklyPlan'); setShowFirstUse(false) }}>Set My Plan</button>}><p>Routine and Workout days set training expectations. Rest Days preserve recovery. Completed No Plan workouts still count.</p></ContextRail></div>
  return <div className="page-stack workout-page"><Panel className="workout-flow-panel weekly-plan-editor"><div className="workout-flow-heading"><button className="dex-back-button" type="button" onClick={() => { playEffect('select'); onBack() }} aria-label="Back to Workout Hub"><ArrowLeft size={20} aria-hidden="true" /></button><div><p className="eyebrow">Recurring template</p><h2>Weekly Plan</h2><p>Choose an intention for each day. Routines are optional.</p></div></div><div className="weekly-plan-list">{WEEKDAY_IDS.map((day) => <button type="button" key={day} onClick={() => { playEffect('select'); setEditingDay(day) }}><strong>{WEEKDAY_LABELS[day].slice(0, 3)}</strong><span>{weeklyPlanAssignmentLabel(days[day], routines.map((entry) => entry.routine))}</span><ChevronRight size={18} aria-hidden="true" /></button>)}</div><p className="weekly-plan-commitment">Update your plan whenever your schedule changes. Past training results stay unchanged.</p><button className="primary-button" type="button" onClick={() => void save()}>Save Weekly Plan</button>{error ? <p className="form-error" role="alert">{error}</p> : null}</Panel>
    {editingDay ? <div className="workout-finish-backdrop"><section className="panel weekly-day-dialog" role="dialog" aria-modal="true" aria-labelledby="weekly-day-title"><header><div><p className="eyebrow">Edit day</p><h2 id="weekly-day-title">{WEEKDAY_LABELS[editingDay]}</h2></div><button type="button" aria-label="Close day editor" onClick={() => { playEffect('select'); setEditingDay(undefined) }}><X aria-hidden="true" /></button></header><div className="weekly-day-options"><button type="button" onClick={() => choose({ type: 'workout_day' })}><span><strong>Workout Day</strong><small>Train without a fixed routine.</small></span></button><button type="button" onClick={() => choose({ type: 'rest_day' })}><span><strong>Rest Day</strong><small>Planned recovery.</small></span></button><button type="button" onClick={() => choose({ type: 'no_plan' })}><span><strong>No Plan</strong><small>Nothing scheduled.</small></span></button></div><section><p className="eyebrow">Saved routines</p>{routines.length ? <div className="weekly-day-options">{routines.map(({ routine, items }) => <button type="button" key={routine.id} onClick={() => choose({ type: 'routine', routineId: routine.id })}><span><strong>{routine.name}</strong><small>{items.length} {items.length === 1 ? 'exercise' : 'exercises'}</small></span></button>)}</div> : <div className="weekly-no-routines"><p>No routines yet.</p><p>You can still schedule a Workout Day and choose exercises when you train.</p><button className="secondary-button" type="button" onClick={() => { playEffect('select'); onCreateRoutine() }}><Plus size={17} aria-hidden="true" /> Create Routine</button></div>}</section></section></div> : null}
  </div>
}
