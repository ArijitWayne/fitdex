import { ArrowLeft, ChevronRight, Plus, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import type { WeekdayId, WeeklyPlanAssignment } from '../../data/models.ts'
import { WEEKDAY_IDS } from '../../data/models.ts'
import { Panel } from '../../components/ui/Panel.tsx'
import type { RoutineWithItems } from './routineRepository.ts'
import { PlanChangeConfirmationRequiredError, saveWeeklyPlan, WEEKDAY_LABELS, weeklyPlanAssignmentLabel, type WeeklyPlan } from './weeklyPlan.ts'
import { loadGamificationDashboard } from '../gamification/gamificationRepository.ts'

export function WeeklyPlanPanel({ plan, routines, onEdit }: { plan: WeeklyPlan; routines: readonly RoutineWithItems[]; onEdit: () => void }) {
  const [commitment, setCommitment] = useState<{ available: boolean; usedAt?: string; nextAvailable?: string }>()
  useEffect(() => { void loadGamificationDashboard().then((data) => setCommitment(data.protectedPlanChange)) }, [])
  return <Panel className="workout-hub-section weekly-plan-panel" eyebrow="Weekly plan" title={plan.configured ? 'Your recurring week' : 'No workout plan yet'}>
    {plan.configured ? <div className="weekly-plan-list">{WEEKDAY_IDS.map((day) => <button type="button" key={day} onClick={onEdit}><strong>{WEEKDAY_LABELS[day].slice(0, 3)}</strong><span>{weeklyPlanAssignmentLabel(plan.days[day], routines.map((entry) => entry.routine))}</span><ChevronRight size={18} aria-hidden="true" /></button>)}</div> : <div className="workout-empty"><strong>No workout plan yet</strong><p>Set workout days, rest days, or assign routines when you create them.</p></div>}
    {plan.configured && commitment ? <p className="weekly-plan-commitment"><strong>Plan Commitment</strong><br />Protected Plan Change: {commitment.available ? 'Available' : `Used ${new Date(commitment.usedAt!).toLocaleDateString()} · Next available ${new Date(commitment.nextAvailable!).toLocaleDateString()}`}</p> : null}
    <button className="secondary-button" type="button" onClick={onEdit}>{plan.configured ? 'Edit Weekly Plan' : 'Set Weekly Plan'}</button>
  </Panel>
}

export function WeeklyPlanEditor({ plan, routines, onChanged, onBack, onCreateRoutine }: { plan: WeeklyPlan; routines: readonly RoutineWithItems[]; onChanged: (plan: WeeklyPlan) => void; onBack: () => void; onCreateRoutine: () => void }) {
  const [editingDay, setEditingDay] = useState<WeekdayId>()
  const [days, setDays] = useState(plan.days)
  const [error, setError] = useState('')
  const [confirmReset, setConfirmReset] = useState(false)
  const choose = (assignment: WeeklyPlanAssignment) => {
    if (!editingDay) return
    setDays((current) => ({ ...current, [editingDay]: assignment }))
    setEditingDay(undefined)
  }
  const save = async (forceReset = false) => {
    try { setError(''); const saved = await saveWeeklyPlan(days, { confirmReset: forceReset }); onChanged(saved); setConfirmReset(false); onBack() }
    catch (reason) {
      if (reason instanceof PlanChangeConfirmationRequiredError) setConfirmReset(true)
      else setError(reason instanceof Error ? reason.message : 'Weekly plan could not be saved.')
    }
  }
  return <div className="page-stack workout-page"><Panel className="workout-flow-panel weekly-plan-editor"><div className="workout-flow-heading"><button className="dex-back-button" type="button" onClick={onBack} aria-label="Back to Workout Hub"><ArrowLeft size={20} aria-hidden="true" /></button><div><p className="eyebrow">Recurring template</p><h2>Weekly Plan</h2><p>Choose an intention for each day. Routines are optional.</p></div></div><div className="weekly-plan-list">{WEEKDAY_IDS.map((day) => <button type="button" key={day} onClick={() => setEditingDay(day)}><strong>{WEEKDAY_LABELS[day].slice(0, 3)}</strong><span>{weeklyPlanAssignmentLabel(days[day], routines.map((entry) => entry.routine))}</span><ChevronRight size={18} aria-hidden="true" /></button>)}</div><p className="weekly-plan-commitment"><strong>Plan commitment</strong> Initial setup is free. One material schedule change per rolling 12 months protects your streak; later changes require confirmation and reset only the current Plan Streak.</p><button className="primary-button" type="button" onClick={() => void save()}>Save Weekly Plan</button>{error ? <p className="form-error" role="alert">{error}</p> : null}</Panel>
    {editingDay ? <div className="workout-finish-backdrop"><section className="panel weekly-day-dialog" role="dialog" aria-modal="true" aria-labelledby="weekly-day-title"><header><div><p className="eyebrow">Edit day</p><h2 id="weekly-day-title">{WEEKDAY_LABELS[editingDay]}</h2></div><button type="button" aria-label="Close day editor" onClick={() => setEditingDay(undefined)}><X aria-hidden="true" /></button></header><div className="weekly-day-options"><button type="button" onClick={() => choose({ type: 'workout_day' })}><span><strong>Workout Day</strong><small>Train without a fixed routine.</small></span></button><button type="button" onClick={() => choose({ type: 'rest_day' })}><span><strong>Rest Day</strong><small>Planned recovery.</small></span></button><button type="button" onClick={() => choose({ type: 'no_plan' })}><span><strong>No Plan</strong><small>Nothing scheduled.</small></span></button></div><section><p className="eyebrow">Saved routines</p>{routines.length ? <div className="weekly-day-options">{routines.map(({ routine, items }) => <button type="button" key={routine.id} onClick={() => choose({ type: 'routine', routineId: routine.id })}><span><strong>{routine.name}</strong><small>{items.length} {items.length === 1 ? 'exercise' : 'exercises'}</small></span></button>)}</div> : <div className="weekly-no-routines"><p>No routines yet.</p><p>You can still schedule a Workout Day and choose exercises when you train.</p><button className="secondary-button" type="button" onClick={onCreateRoutine}><Plus size={17} aria-hidden="true" /> Create Routine</button></div>}</section></section></div> : null}
    {confirmReset ? <div className="workout-finish-backdrop"><section className="panel plan-change-dialog" role="alertdialog" aria-modal="true" aria-labelledby="plan-change-title"><p className="eyebrow">Plan commitment</p><h2 id="plan-change-title">Change Weekly Plan?</h2><p>You've already used your protected plan change for this rolling 12-month period. Changing your training schedule now will reset your current Plan Streak to 0.</p><p>This will not affect Lifetime XP, Level, Rank, Achievements, workout history, Personal Records, or Food history.</p><button className="secondary-button" type="button" autoFocus onClick={() => setConfirmReset(false)}>Keep Current Plan</button><button className="danger-button" type="button" onClick={() => void save(true)}>Change &amp; Reset Streak</button></section></div> : null}
  </div>
}
