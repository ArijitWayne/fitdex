import { ArrowDown, ArrowLeft, ArrowUp, Check, ChevronDown, ChevronRight, Plus, RotateCcw, Trash2, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Panel } from '../../components/ui/Panel'
import { db } from '../../data/database'
import type { Exercise, ExerciseTrackingType, WorkoutSet } from '../../data/models'
import { ExerciseDex } from '../exerciseDex/ExerciseDex'
import {
  DEFAULT_REST_SECONDS,
  calculateVolume,
  elapsedSeconds,
  formatDuration,
  formatPreviousSet,
  getTrackingFields,
  isMeaningfulSet,
  parseWorkoutNumber,
} from './workoutModel'
import {
  addExercisesToWorkout,
  addWorkoutSet,
  discardWorkout,
  finishWorkout,
  getPreviousPerformance,
  getWorkoutDetail,
  removeWorkoutExercise,
  removeWorkoutSet,
  renameActiveWorkout,
  reorderWorkoutExercise,
  type WorkoutDetail,
  updateWorkoutNotes,
  updateWorkoutSet,
} from './workoutRepository'

interface UnitContext {
  preference: 'metric' | 'imperial'
  weightLabel: 'kg' | 'lb'
  distanceLabel: 'km' | 'mi'
}

const metricUnits: UnitContext = { preference: 'metric', weightLabel: 'kg', distanceLabel: 'km' }

function displayWeight(value: number | undefined, units: UnitContext) {
  if (value === undefined) return ''
  return units.preference === 'imperial' ? Number((value * 2.2046226218).toFixed(2)) : value
}

function storeWeight(value: number | undefined, units: UnitContext) {
  return value === undefined || units.preference === 'metric' ? value : Number((value / 2.2046226218).toFixed(4))
}

function displayDistance(value: number | undefined, units: UnitContext) {
  if (value === undefined) return ''
  return units.preference === 'imperial' ? Number((value * 0.6213711922).toFixed(2)) : value
}

function storeDistance(value: number | undefined, units: UnitContext) {
  return value === undefined || units.preference === 'metric' ? value : Number((value / 0.6213711922).toFixed(4))
}

export function ActiveWorkoutView({ workoutId, onExit, onCompleted }: {
  workoutId: string
  onExit: () => void
  onCompleted: (workoutId: string) => void
}) {
  const [detail, setDetail] = useState<WorkoutDetail>()
  const [previous, setPrevious] = useState<Map<string, WorkoutSet[]>>(new Map())
  const [expanded, setExpanded] = useState<string>()
  const [picker, setPicker] = useState(false)
  const [pickerSelection, setPickerSelection] = useState<Map<string, Exercise>>(new Map())
  const [units, setUnits] = useState<UnitContext>(metricUnits)
  const [now, setNow] = useState(() => Date.now())
  const [rest, setRest] = useState<number>()
  const [confirmFinish, setConfirmFinish] = useState(false)
  const [confirmDiscard, setConfirmDiscard] = useState(false)
  const [feedback, setFeedback] = useState('')

  async function refresh() {
    const next = await getWorkoutDetail(workoutId)
    setDetail(next)
    setExpanded((current) => current ?? next.exercises[0]?.exercise.id)
    const history = await Promise.all(next.exercises.map(async ({ exercise }) => [exercise.exerciseId, (await getPreviousPerformance(exercise.exerciseId, workoutId))?.sets ?? []] as const))
    setPrevious(new Map(history))
  }

  // The repository is the external source of truth; load its persisted snapshot when the session ID changes.
  // oxlint-disable react-hooks/exhaustive-deps, react/set-state-in-effect
  useEffect(() => {
    void refresh().catch((error: unknown) => setFeedback(error instanceof Error ? error.message : 'Workout could not be loaded.'))
    void db.settings.toArray().then((settings) => {
      const preference = settings.find((item) => item.units)?.units ?? 'metric'
      setUnits(preference === 'imperial' ? { preference, weightLabel: 'lb', distanceLabel: 'mi' } : metricUnits)
    })
  }, [workoutId])
  // oxlint-enable react-hooks/exhaustive-deps, react/set-state-in-effect

  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    if (rest === undefined || rest <= 0) return
    const timer = window.setTimeout(() => setRest((current) => current === undefined ? undefined : Math.max(0, current - 1)), 1000)
    return () => window.clearTimeout(timer)
  }, [rest])

  async function run(action: () => Promise<void>) {
    try { setFeedback(''); await action(); await refresh() }
    catch (error) { setFeedback(error instanceof Error ? error.message : 'Workout could not be updated.') }
  }

  if (!detail) return <Panel><p>Loading active workout…</p>{feedback ? <p role="alert">{feedback}</p> : null}</Panel>

  if (picker) {
    const disabled = new Set(detail.exercises.map((item) => item.exercise.exerciseId))
    return <ExerciseDex picker={{
      title: "Add to today's workout",
      disabledExerciseIds: disabled,
      selectedExerciseIds: new Set(pickerSelection.keys()),
      onToggleExercise(exercise) {
        if (disabled.has(exercise.id)) return
        setPickerSelection((current) => { const next = new Map(current); if (next.has(exercise.id)) next.delete(exercise.id); else next.set(exercise.id, exercise); return next })
      },
      onConfirm() { void run(() => addExercisesToWorkout(workoutId, [...pickerSelection.values()])).then(() => { setPickerSelection(new Map()); setPicker(false) }) },
      onCancel() { setPickerSelection(new Map()); setPicker(false) },
    }} />
  }

  const allSets = detail.exercises.flatMap((item) => item.sets)
  const completedSets = allSets.filter((item) => item.completed).length

  return <div className="page-stack active-workout-page">
    <Panel className="active-workout-header">
      <button className="dex-back-button" type="button" onClick={onExit} aria-label="Back to Workout Hub"><ArrowLeft size={20} aria-hidden="true" /></button>
      <div>
        <p className="eyebrow">Workout in progress</p>
        <input className="active-workout-name" aria-label="Workout name" maxLength={80} defaultValue={detail.workout.nameSnapshot} key={`${detail.workout.id}:${detail.workout.nameSnapshot}`} onBlur={(event) => void run(() => renameActiveWorkout(workoutId, event.target.value))} />
        <div className="active-workout-metrics"><strong>{formatDuration(elapsedSeconds(detail.workout.startedAt, now))}</strong><span>{detail.exercises.length} exercises</span><span>{completedSets}/{allSets.length} sets complete</span></div>
      </div>
    </Panel>

    {rest !== undefined ? <div className="rest-timer" role="timer"><span>Rest</span><strong>{formatDuration(rest).slice(3)}</strong><button type="button" onClick={() => setRest(DEFAULT_REST_SECONDS)}><RotateCcw size={16} aria-hidden="true" /> Reset</button><button type="button" onClick={() => setRest(undefined)}><X size={16} aria-hidden="true" /> Skip</button></div> : null}

    {detail.exercises.length ? <div className="active-exercise-list">{detail.exercises.map((item, index) => {
      const isOpen = expanded === item.exercise.id
      return <Panel className="active-exercise-card" key={item.exercise.id}>
        <button className="active-exercise-heading" type="button" aria-expanded={isOpen} onClick={() => setExpanded(isOpen ? undefined : item.exercise.id)}><span className="exercise-order">{index + 1}</span><span><strong>{item.exercise.exerciseNameSnapshot ?? 'Historical exercise'}</strong><small>{item.sets.filter((set) => set.completed).length}/{item.sets.length} sets</small></span>{isOpen ? <ChevronDown size={20} aria-hidden="true" /> : <ChevronRight size={20} aria-hidden="true" />}</button>
        {isOpen ? <div className="active-exercise-body">
          <div className="active-exercise-actions"><button type="button" disabled={index === 0} onClick={() => void run(() => reorderWorkoutExercise(item.exercise.id, -1))}><ArrowUp size={16} aria-hidden="true" /> Up</button><button type="button" disabled={index === detail.exercises.length - 1} onClick={() => void run(() => reorderWorkoutExercise(item.exercise.id, 1))}><ArrowDown size={16} aria-hidden="true" /> Down</button><button type="button" onClick={() => { if (!item.sets.some((set) => set.completed || isMeaningfulSet(set)) || window.confirm('Remove this exercise and its logged sets from the active workout?')) void run(() => removeWorkoutExercise(item.exercise.id)) }}><Trash2 size={16} aria-hidden="true" /> Remove</button></div>
          <div className="set-list">{item.sets.map((set, setIndex) => <ActiveSetRow key={`${set.id}:${set.updatedAt}`} set={set} setNumber={setIndex + 1} trackingType={item.exercise.trackingTypeSnapshot ?? 'reps_only'} previous={previous.get(item.exercise.exerciseId)?.[setIndex]} units={units} onSaved={refresh} onComplete={(completed) => { if (completed) setRest(DEFAULT_REST_SECONDS) }} />)}</div>
          <button className="secondary-button add-set-button" type="button" onClick={() => void run(() => addWorkoutSet(item.exercise.id))}><Plus size={16} aria-hidden="true" /> Add set</button>
        </div> : null}
      </Panel>
    })}</div> : <Panel><p className="eyebrow">Empty workout</p><h2>Add your first exercise</h2><p>Use the complete Exercise Dex to build today’s session.</p></Panel>}

    <button className="primary-button active-add-exercise" type="button" onClick={() => setPicker(true)}><Plus size={18} aria-hidden="true" /> Add exercise</button>
    <label className="workout-notes"><span>Workout notes</span><textarea defaultValue={detail.workout.notes ?? ''} onBlur={(event) => void run(() => updateWorkoutNotes(workoutId, event.target.value))} placeholder="Optional session notes" /></label>
    {feedback ? <p className="workout-feedback" role="status">{feedback}</p> : null}
    <div className="active-workout-final-actions"><button className="text-button" type="button" onClick={() => setConfirmDiscard(true)}>Discard workout</button><button className="primary-button" type="button" onClick={() => setConfirmFinish(true)}>Finish workout</button></div>
    {confirmFinish ? <Panel className="workout-confirm"><h2>Finish workout?</h2><p>{completedSets} completed sets will be saved. Incomplete draft rows remain visible in history but are not counted as completed.</p><button className="secondary-button" type="button" onClick={() => setConfirmFinish(false)}>Keep logging</button><button className="primary-button" type="button" onClick={() => void finishWorkout(workoutId).then(() => onCompleted(workoutId)).catch((error: unknown) => { setConfirmFinish(false); setFeedback(error instanceof Error ? error.message : 'Workout could not be finished.') })}>Finish and save</button></Panel> : null}
    {confirmDiscard ? <Panel className="workout-confirm"><h2>Discard workout?</h2><p>This session will not appear in history or previous performance.</p><button className="secondary-button" type="button" onClick={() => setConfirmDiscard(false)}>Keep workout</button><button className="danger-button" type="button" onClick={() => void discardWorkout(workoutId).then(onExit)}>Discard</button></Panel> : null}
  </div>
}

function ActiveSetRow({ set, setNumber, trackingType, previous, units, onSaved, onComplete }: {
  set: WorkoutSet
  setNumber: number
  trackingType: ExerciseTrackingType
  previous?: WorkoutSet
  units: UnitContext
  onSaved: () => Promise<void>
  onComplete: (completed: boolean) => void
}) {
  const fields = getTrackingFields(trackingType)
  const [error, setError] = useState('')
  async function save(field: 'weight' | 'reps' | 'durationSeconds' | 'distance', raw: string) {
    try {
      let value = parseWorkoutNumber(raw, field)
      if (field === 'weight') value = storeWeight(value, units)
      if (field === 'distance') value = storeDistance(value, units)
      await updateWorkoutSet(set.id, { [field]: value })
      setError('')
      await onSaved()
    } catch (reason) { setError(reason instanceof Error ? reason.message : 'Invalid value.') }
  }
  async function toggleComplete() {
    try {
      const completed = !set.completed
      await updateWorkoutSet(set.id, { completed })
      setError('')
      await onSaved()
      onComplete(completed)
    } catch (reason) { setError(reason instanceof Error ? reason.message : 'Set could not be updated.') }
  }
  return <div className={set.completed ? 'active-set-row is-complete' : 'active-set-row'}>
    <strong className="set-number">{setNumber}</strong>
    <span className="previous-value"><small>Previous</small>{formatPreviousSet(previous, trackingType, units.weightLabel, units.distanceLabel)}</span>
    <div className="set-inputs">
      {fields.weight ? <label><span>{trackingType === 'assisted_bodyweight' ? 'Assistance' : 'Weight'} ({units.weightLabel})</span><input inputMode="decimal" type="number" min="0" step="any" defaultValue={displayWeight(set.weight, units)} onBlur={(event) => void save('weight', event.target.value)} /></label> : null}
      {fields.reps ? <label><span>Reps</span><input inputMode="numeric" type="number" min="1" step="1" defaultValue={set.reps ?? ''} onBlur={(event) => void save('reps', event.target.value)} /></label> : null}
      {fields.duration ? <label><span>Seconds</span><input inputMode="decimal" type="number" min="0" step="any" defaultValue={set.durationSeconds ?? ''} onBlur={(event) => void save('durationSeconds', event.target.value)} /></label> : null}
      {fields.distance ? <label><span>Distance ({units.distanceLabel})</span><input inputMode="decimal" type="number" min="0" step="any" defaultValue={displayDistance(set.distance, units)} onBlur={(event) => void save('distance', event.target.value)} /></label> : null}
    </div>
    <button className="set-complete-button" type="button" aria-label={`${set.completed ? 'Mark incomplete' : 'Complete'} set ${setNumber}`} aria-pressed={set.completed} onClick={() => void toggleComplete()}>{set.completed ? <Check size={20} aria-hidden="true" /> : <span>{setNumber}</span>}</button>
    <button className="set-remove-button" type="button" aria-label={`Remove set ${setNumber}`} onClick={() => void removeWorkoutSet(set.id).then(onSaved)}><Trash2 size={15} aria-hidden="true" /></button>
    {error ? <small className="set-error" role="alert">{error}</small> : null}
  </div>
}

export function CompletedWorkoutDetail({ workoutId, onBack }: { workoutId: string; onBack: () => void }) {
  const [detail, setDetail] = useState<WorkoutDetail>()
  const [error, setError] = useState('')
  const [units, setUnits] = useState<UnitContext>(metricUnits)
  useEffect(() => {
    void getWorkoutDetail(workoutId).then(setDetail).catch((reason: unknown) => setError(reason instanceof Error ? reason.message : 'Workout could not be loaded.'))
    void db.settings.toArray().then((settings) => { const preference = settings.find((item) => item.units)?.units ?? 'metric'; setUnits(preference === 'imperial' ? { preference, weightLabel: 'lb', distanceLabel: 'mi' } : metricUnits) })
  }, [workoutId])
  const sets = useMemo(() => detail?.exercises.flatMap((item) => item.sets) ?? [], [detail])
  const resistanceSets = useMemo(() => detail?.exercises.filter((item) => item.exercise.trackingTypeSnapshot === 'weight_reps').flatMap((item) => item.sets) ?? [], [detail])
  if (!detail) return <Panel><button className="dex-back-button" type="button" onClick={onBack}><ArrowLeft size={20} /></button><p>{error || 'Loading workout history…'}</p></Panel>
  return <div className="page-stack completed-workout-page">
    <Panel className="completed-workout-header"><button className="dex-back-button" type="button" onClick={onBack} aria-label="Back to Workout Hub"><ArrowLeft size={20} aria-hidden="true" /></button><div><p className="eyebrow">Completed workout</p><h1>{detail.workout.nameSnapshot}</h1><p>{new Date(detail.workout.completedAt ?? detail.workout.startedAt).toLocaleString()}</p></div></Panel>
    <div className="completed-summary"><span><strong>{formatDuration(detail.workout.durationSeconds ?? 0)}</strong><small>Duration</small></span><span><strong>{detail.exercises.length}</strong><small>Exercises</small></span><span><strong>{sets.filter((set) => set.completed).length}</strong><small>Completed sets</small></span>{calculateVolume(resistanceSets) > 0 ? <span><strong>{Number((units.preference === 'imperial' ? calculateVolume(resistanceSets) * 2.2046226218 : calculateVolume(resistanceSets)).toFixed(1))}</strong><small>Resistance volume ({units.weightLabel})</small></span> : null}</div>
    {detail.exercises.map(({ exercise, sets: exerciseSets }, index) => <Panel className="history-exercise-card" key={exercise.id}><p className="eyebrow">Exercise {index + 1}</p><h2>{exercise.exerciseNameSnapshot ?? 'Historical exercise'}</h2><p>{exerciseSets.filter((set) => set.completed).length}/{exerciseSets.length} sets completed</p><div className="history-set-list">{exerciseSets.map((set, setIndex) => <div className={set.completed ? 'history-set is-complete' : 'history-set'} key={set.id}><strong>Set {setIndex + 1}</strong>{set.weight !== undefined ? <span>{displayWeight(set.weight, units)} {units.weightLabel}</span> : null}{set.reps !== undefined ? <span>{set.reps} reps</span> : null}{set.durationSeconds !== undefined ? <span>{set.durationSeconds} sec</span> : null}{set.distance !== undefined ? <span>{displayDistance(set.distance, units)} {units.distanceLabel}</span> : null}<small>{set.completed ? 'Completed' : 'Incomplete draft'}</small></div>)}</div>{exercise.notes ? <p>{exercise.notes}</p> : null}</Panel>)}
    {detail.workout.notes ? <Panel eyebrow="Session notes"><p>{detail.workout.notes}</p></Panel> : null}
  </div>
}
