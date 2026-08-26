import { ArrowLeft, ChevronRight, Plus, X } from 'lucide-react'
import { useState } from 'react'
import type { WeekdayId, WeeklyPlanAssignment } from '../../data/models.ts'
import { WEEKDAY_IDS } from '../../data/models.ts'
import { Panel } from '../../components/ui/Panel.tsx'
import type { RoutineWithItems } from './routineRepository.ts'
import { saveWeeklyPlanDay, WEEKDAY_LABELS, weeklyPlanAssignmentLabel, type WeeklyPlan } from './weeklyPlan.ts'

export function WeeklyPlanPanel({ plan, routines, onEdit }: { plan: WeeklyPlan; routines: readonly RoutineWithItems[]; onEdit: () => void }) {
  return <Panel className="workout-hub-section weekly-plan-panel" eyebrow="Weekly plan" title={plan.configured ? 'Your recurring week' : 'No workout plan yet'}>
    {plan.configured ? <div className="weekly-plan-list">{WEEKDAY_IDS.map((day) => <button type="button" key={day} onClick={onEdit}><strong>{WEEKDAY_LABELS[day].slice(0, 3)}</strong><span>{weeklyPlanAssignmentLabel(plan.days[day], routines.map((entry) => entry.routine))}</span><ChevronRight size={18} aria-hidden="true" /></button>)}</div> : <div className="workout-empty"><strong>No workout plan yet</strong><p>Set workout days, rest days, or assign routines when you create them.</p></div>}
    <button className="secondary-button" type="button" onClick={onEdit}>{plan.configured ? 'Edit Weekly Plan' : 'Set Weekly Plan'}</button>
  </Panel>
}

export function WeeklyPlanEditor({ plan, routines, onChanged, onBack, onCreateRoutine }: { plan: WeeklyPlan; routines: readonly RoutineWithItems[]; onChanged: (plan: WeeklyPlan) => void; onBack: () => void; onCreateRoutine: () => void }) {
  const [editingDay, setEditingDay] = useState<WeekdayId>()
  const [error, setError] = useState('')
  const save = async (assignment: WeeklyPlanAssignment) => {
    if (!editingDay) return
    try { setError(''); onChanged(await saveWeeklyPlanDay(editingDay, assignment)); setEditingDay(undefined) }
    catch (reason) { setError(reason instanceof Error ? reason.message : 'Weekly plan could not be saved.') }
  }
  return <div className="page-stack workout-page"><Panel className="workout-flow-panel weekly-plan-editor"><div className="workout-flow-heading"><button className="dex-back-button" type="button" onClick={onBack} aria-label="Back to Workout Hub"><ArrowLeft size={20} aria-hidden="true" /></button><div><p className="eyebrow">Recurring template</p><h2>Weekly Plan</h2><p>Choose an intention for each day. Routines are optional.</p></div></div><div className="weekly-plan-list">{WEEKDAY_IDS.map((day) => <button type="button" key={day} onClick={() => setEditingDay(day)}><strong>{WEEKDAY_LABELS[day].slice(0, 3)}</strong><span>{weeklyPlanAssignmentLabel(plan.days[day], routines.map((entry) => entry.routine))}</span><ChevronRight size={18} aria-hidden="true" /></button>)}</div>{error ? <p className="form-error" role="alert">{error}</p> : null}</Panel>
    {editingDay ? <div className="workout-finish-backdrop"><section className="panel weekly-day-dialog" role="dialog" aria-modal="true" aria-labelledby="weekly-day-title"><header><div><p className="eyebrow">Edit day</p><h2 id="weekly-day-title">{WEEKDAY_LABELS[editingDay]}</h2></div><button type="button" aria-label="Close day editor" onClick={() => setEditingDay(undefined)}><X aria-hidden="true" /></button></header><div className="weekly-day-options"><button type="button" onClick={() => void save({ type: 'workout_day' })}><span><strong>Workout Day</strong><small>Train without a fixed routine.</small></span></button><button type="button" onClick={() => void save({ type: 'rest_day' })}><span><strong>Rest Day</strong><small>Planned recovery.</small></span></button><button type="button" onClick={() => void save({ type: 'no_plan' })}><span><strong>No Plan</strong><small>Nothing scheduled.</small></span></button></div><section><p className="eyebrow">Saved routines</p>{routines.length ? <div className="weekly-day-options">{routines.map(({ routine, items }) => <button type="button" key={routine.id} onClick={() => void save({ type: 'routine', routineId: routine.id })}><span><strong>{routine.name}</strong><small>{items.length} {items.length === 1 ? 'exercise' : 'exercises'}</small></span></button>)}</div> : <div className="weekly-no-routines"><p>No routines yet.</p><p>You can still schedule a Workout Day and choose exercises when you train.</p><button className="secondary-button" type="button" onClick={onCreateRoutine}><Plus size={17} aria-hidden="true" /> Create Routine</button></div>}</section></section></div> : null}
  </div>
}
