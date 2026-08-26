import { ArrowDown, ArrowLeft, ArrowUp, ChevronDown, ChevronRight, Pause, Play, Plus, RotateCcw, TimerReset, Trash2, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Panel } from '../../components/ui/Panel'
import { db } from '../../data/database'
import type { Exercise, ExerciseTrackingType, WorkoutSet } from '../../data/models'
import { displayDistanceFromKm, displayWeightFromKg, getUnitContext, storeDistanceAsKm, storeWeightAsKg, type UnitContext } from '../../utils/units.ts'
import { ExerciseDex } from '../exerciseDex/ExerciseDex'
import {
  DEFAULT_REST_SECONDS,
  calculateVolume,
  formatDuration,
  formatPreviousSet,
  getWorkoutSetLogState,
  hasMeaningfulWorkoutSetData,
  getWorkoutDuration,
  getTrackingFields,
  isHistoricalWorkoutSetLogged,
  isWorkoutTimerPaused,
  parseWorkoutNumber,
  validateWorkoutForFinish,
  type WorkoutFinishValidation,
  type WorkoutSetMetric,
} from './workoutModel'
import {
  addExercisesToWorkout,
  addWorkoutSet,
  deleteCompletedWorkout,
  discardWorkout,
  finishWorkout,
  getPreviousPerformance,
  getWorkoutDetail,
  IncompleteWorkoutError,
  pauseWorkout,
  removeWorkoutExercise,
  removeWorkoutSet,
  renameActiveWorkout,
  resumeWorkout,
  reorderWorkoutExercise,
  type WorkoutDetail,
  updateWorkoutNotes,
  updateWorkoutSet,
} from './workoutRepository'

const metricUnits = getUnitContext('metric')
type SetDraft = Partial<Record<WorkoutSetMetric, string>>

function displayWeight(value: number | undefined, units: UnitContext) {
  if (value === undefined) return ''
  return Number(displayWeightFromKg(value, units.preference).toFixed(2))
}

function storeWeight(value: number | undefined, units: UnitContext) {
  return value === undefined ? value : Number(storeWeightAsKg(value, units.preference).toFixed(4))
}

function displayDistance(value: number | undefined, units: UnitContext) {
  if (value === undefined) return ''
  return Number(displayDistanceFromKm(value, units.preference).toFixed(2))
}

function storeDistance(value: number | undefined, units: UnitContext) {
  return value === undefined ? value : Number(storeDistanceAsKm(value, units.preference).toFixed(4))
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
  const [units, setUnits] = useState<UnitContext>(metricUnits)
  const [now, setNow] = useState(() => Date.now())
  const [rest, setRest] = useState<number>()
  const [confirmFinish, setConfirmFinish] = useState(false)
  const [confirmDiscard, setConfirmDiscard] = useState(false)
  const [finishValidation, setFinishValidation] = useState<WorkoutFinishValidation>()
  const [finishWasRunning, setFinishWasRunning] = useState(false)
  const [finishBusy, setFinishBusy] = useState(false)
  const [setDrafts, setSetDrafts] = useState<Map<string, SetDraft>>(new Map())
  const [feedback, setFeedback] = useState('')
  const [confirmExerciseRemovalId, setConfirmExerciseRemovalId] = useState<string>()
  const timerIsRunning = detail?.workout.status === 'active' && !isWorkoutTimerPaused(detail.workout)

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
      setUnits(getUnitContext(preference))
    })
  }, [workoutId])
  // oxlint-enable react-hooks/exhaustive-deps, react/set-state-in-effect

  useEffect(() => {
    if (!timerIsRunning) return
    const timer = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(timer)
  }, [timerIsRunning])

  useEffect(() => {
    if (rest === undefined || rest <= 0) return
    const timer = window.setTimeout(() => setRest((current) => current === undefined ? undefined : Math.max(0, current - 1)), 1000)
    return () => window.clearTimeout(timer)
  }, [rest])

  async function run(action: () => Promise<unknown>) {
    try { setFeedback(''); await action(); await refresh() }
    catch (error) { setFeedback(error instanceof Error ? error.message : 'Workout could not be updated.') }
  }

  function updateDraft(setId: string, field: WorkoutSetMetric, value: string) {
    setSetDrafts((current) => { const next = new Map(current); next.set(setId, { ...next.get(setId), [field]: value }); return next })
  }

  function clearDraftField(setId: string, field: WorkoutSetMetric, expectedValue: string) {
    setSetDrafts((current) => {
      const currentDraft = current.get(setId)
      if (!currentDraft || currentDraft[field] !== expectedValue) return current
      const next = new Map(current)
      const remaining = { ...currentDraft }
      delete remaining[field]
      if (Object.keys(remaining).length) next.set(setId, remaining)
      else next.delete(setId)
      return next
    })
  }

  async function persistCurrentDrafts() {
    const setById = new Map(detail?.exercises.flatMap((item) => item.sets).map((set) => [set.id, set]) ?? [])
    await Promise.all([...setDrafts].map(async ([setId, draft]) => {
      if (!setById.has(setId)) return
      await updateWorkoutSet(setId, createPersistedDraftPatch(draft, units))
    }))
    setSetDrafts(new Map())
    return getWorkoutDetail(workoutId)
  }

  async function beginFinishFlow() {
    if (finishBusy) return
    setFinishBusy(true)
    setFeedback('')
    setFinishValidation(undefined)
    const wasRunning = !isWorkoutTimerPaused(detail!.workout)
    let capturedRunningTimer = false
    try {
      if (wasRunning) {
        await pauseWorkout(workoutId, Date.now())
        capturedRunningTimer = true
      }
      const draftValidation = validateWorkoutForFinish(detail!.exercises.map((item) => ({ ...item, sets: item.sets.map((set) => applySetDraft(set, setDrafts.get(set.id))) })))
      if (!draftValidation.valid) {
        if (capturedRunningTimer) await resumeWorkout(workoutId, Date.now())
        await refresh()
        setFinishValidation(draftValidation)
        return
      }
      const next = await persistCurrentDrafts()
      const validation = validateWorkoutForFinish(next.exercises)
      if (!validation.valid) {
        if (capturedRunningTimer) await resumeWorkout(workoutId, Date.now())
        await refresh()
        setFinishValidation(validation)
        return
      }
      setDetail(next)
      setFinishWasRunning(wasRunning)
      setConfirmFinish(true)
    } catch (error) {
      if (capturedRunningTimer) {
        try { await resumeWorkout(workoutId, Date.now()) } catch { /* The original error remains authoritative. */ }
      }
      await refresh().catch(() => undefined)
      if (error instanceof IncompleteWorkoutError) setFinishValidation(error.validation)
      else setFeedback(error instanceof Error ? error.message : 'Workout could not be prepared for finishing.')
    } finally {
      setFinishBusy(false)
    }
  }

  async function cancelFinishFlow() {
    setConfirmFinish(false)
    if (finishWasRunning) await resumeWorkout(workoutId, Date.now())
    setFinishWasRunning(false)
    await refresh()
  }

  function renderedExerciseHasData(workoutExerciseId: string) {
    const item = detail?.exercises.find((candidate) => candidate.exercise.id === workoutExerciseId)
    if (!item) return false
    return hasMeaningfulWorkoutSetData(item.sets.map((set) => applySetDraft(set, setDrafts.get(set.id))), item.exercise.trackingTypeSnapshot ?? 'reps_only')
  }

  async function removeActiveExercise(workoutExerciseId: string) {
    const setIds = new Set(detail?.exercises.find((item) => item.exercise.id === workoutExerciseId)?.sets.map((set) => set.id) ?? [])
    await removeWorkoutExercise(workoutExerciseId)
    setSetDrafts((current) => new Map([...current].filter(([setId]) => !setIds.has(setId))))
    setFinishValidation(undefined)
  }

  if (!detail) return <Panel><p>Loading active workout…</p>{feedback ? <p role="alert">{feedback}</p> : null}</Panel>

  if (picker) {
    const existingExerciseIds = new Set(detail.exercises.map((item) => item.exercise.exerciseId))
    return <ExerciseDex picker={{
      title: "Add to today's workout",
      targetLabel: 'workout',
      existingExerciseIds,
      async onAddExercise(exercise: Exercise) { await addExercisesToWorkout(workoutId, [exercise]); await refresh() },
      async onRemoveExercise(exercise: Exercise) {
        const item = detail.exercises.find((candidate) => candidate.exercise.exerciseId === exercise.id)
        if (!item) return
        await removeActiveExercise(item.exercise.id)
        await refresh()
      },
      shouldConfirmRemoval(exercise: Exercise) {
        const item = detail.exercises.find((candidate) => candidate.exercise.exerciseId === exercise.id)
        return item ? renderedExerciseHasData(item.exercise.id) : false
      },
      onDone() { setPicker(false) },
    }} />
  }

  const allSets = detail.exercises.flatMap((item) => item.sets)
  const loggedSets = detail.exercises.reduce((total, item) => total + item.sets.filter((set) => getWorkoutSetLogState(applySetDraft(set, setDrafts.get(set.id)), item.exercise.trackingTypeSnapshot ?? 'reps_only') === 'logged').length, 0)
  const timerPaused = isWorkoutTimerPaused(detail.workout)

  return <div className="page-stack active-workout-page">
    <Panel className="active-workout-header">
      <button className="dex-back-button" type="button" onClick={onExit} aria-label="Back to Workout Hub"><ArrowLeft size={20} aria-hidden="true" /></button>
      <div>
        <p className="eyebrow">{timerPaused ? 'Workout paused' : 'Workout in progress'}</p>
        <input className="active-workout-name" aria-label="Workout name" maxLength={80} defaultValue={detail.workout.nameSnapshot} key={`${detail.workout.id}:${detail.workout.nameSnapshot}`} onBlur={(event) => void run(() => renameActiveWorkout(workoutId, event.target.value))} />
        <div className="active-workout-metrics"><strong>{formatDuration(getWorkoutDuration(detail.workout, now))}</strong><span>{detail.exercises.length} exercises</span><span aria-live="polite">{loggedSets}/{allSets.length} sets logged</span>{timerPaused ? <span>Timer is paused</span> : null}</div>
        <div className="active-workout-top-actions"><button className="secondary-button" type="button" aria-label={timerPaused ? 'Resume workout timer' : 'Pause workout timer'} onClick={() => void run(() => timerPaused ? resumeWorkout(workoutId) : pauseWorkout(workoutId))}>{timerPaused ? <Play size={17} aria-hidden="true" /> : <Pause size={17} aria-hidden="true" />}{timerPaused ? 'Resume' : 'Pause'}</button>{timerPaused ? <button className="primary-button" type="button" disabled={finishBusy} onClick={() => void beginFinishFlow()}>Finish workout</button> : null}<button className="primary-button" type="button" onClick={() => setPicker(true)}><Plus size={17} aria-hidden="true" /> Add exercise</button></div>
      </div>
    </Panel>

    {rest !== undefined ? <div className="rest-timer" role="timer"><span>Rest</span><strong>{formatDuration(rest).slice(3)}</strong><button type="button" onClick={() => setRest(DEFAULT_REST_SECONDS)}><RotateCcw size={16} aria-hidden="true" /> Reset</button><button type="button" onClick={() => setRest(undefined)}><X size={16} aria-hidden="true" /> Skip</button></div> : null}

    {detail.exercises.length ? <div className="active-exercise-list">{detail.exercises.map((item, index) => {
      const isOpen = expanded === item.exercise.id
      return <Panel className="active-exercise-card" key={item.exercise.id}>
        <button className="active-exercise-heading" type="button" aria-expanded={isOpen} onClick={() => setExpanded(isOpen ? undefined : item.exercise.id)}><span className="exercise-order">{index + 1}</span><span><strong>{item.exercise.exerciseNameSnapshot ?? 'Historical exercise'}</strong><small aria-live="polite">{item.sets.filter((set) => getWorkoutSetLogState(applySetDraft(set, setDrafts.get(set.id)), item.exercise.trackingTypeSnapshot ?? 'reps_only') === 'logged').length}/{item.sets.length} sets logged</small></span>{isOpen ? <ChevronDown size={20} aria-hidden="true" /> : <ChevronRight size={20} aria-hidden="true" />}</button>
        {isOpen ? <div className="active-exercise-body">
          <div className="active-exercise-actions"><button type="button" disabled={index === 0} onClick={() => void run(() => reorderWorkoutExercise(item.exercise.id, -1))}><ArrowUp size={16} aria-hidden="true" /> Up</button><button type="button" disabled={index === detail.exercises.length - 1} onClick={() => void run(() => reorderWorkoutExercise(item.exercise.id, 1))}><ArrowDown size={16} aria-hidden="true" /> Down</button><button type="button" onClick={() => renderedExerciseHasData(item.exercise.id) ? setConfirmExerciseRemovalId(item.exercise.id) : void run(() => removeActiveExercise(item.exercise.id))}><Trash2 size={16} aria-hidden="true" /> Remove</button></div>
          <div className="set-list">{item.sets.map((set, setIndex) => <ActiveSetRow key={set.id} set={set} draft={setDrafts.get(set.id)} setNumber={setIndex + 1} trackingType={item.exercise.trackingTypeSnapshot ?? 'reps_only'} previous={previous.get(item.exercise.exerciseId)?.[setIndex]} units={units} onDraftChange={(field, value) => updateDraft(set.id, field, value)} onDraftSaved={(field, value) => clearDraftField(set.id, field, value)} onSaved={refresh} onStartRest={() => setRest(DEFAULT_REST_SECONDS)} />)}</div>
          <button className="secondary-button add-set-button" type="button" onClick={() => void run(() => addWorkoutSet(item.exercise.id))}><Plus size={16} aria-hidden="true" /> Add set</button>
        </div> : null}
      </Panel>
    })}</div> : <Panel><p className="eyebrow">Empty workout</p><h2>Add your first exercise</h2><p>Use the complete Exercise Dex to build today’s session.</p></Panel>}

    <button className="primary-button active-add-exercise" type="button" onClick={() => setPicker(true)}><Plus size={18} aria-hidden="true" /> Add exercise</button>
    <label className="workout-notes"><span>Workout notes</span><textarea defaultValue={detail.workout.notes ?? ''} onBlur={(event) => void run(() => updateWorkoutNotes(workoutId, event.target.value))} placeholder="Optional session notes" /></label>
    {feedback ? <p className="workout-feedback" role="status">{feedback}</p> : null}
    <div className="active-workout-final-actions"><button className="text-button" type="button" onClick={() => setConfirmDiscard(true)}>Discard workout</button><button className="primary-button" type="button" disabled={finishBusy} onClick={() => void beginFinishFlow()}>{finishBusy ? 'Checking workout…' : 'Finish workout'}</button></div>
    {finishValidation ? <FinishValidationDialog validation={finishValidation} onClose={() => setFinishValidation(undefined)} /> : null}
    {confirmFinish ? <div className="workout-finish-backdrop"><section className="panel workout-confirm" role="dialog" aria-modal="true" aria-labelledby="finish-workout-title"><h2 id="finish-workout-title">Finish workout?</h2><p>{detail.exercises.length} exercises · {loggedSets} logged sets · {formatDuration(getWorkoutDuration(detail.workout, now))} training time</p><button className="secondary-button" type="button" autoFocus onClick={() => void cancelFinishFlow()}>Keep logging</button><button className="primary-button" type="button" onClick={() => void finishWorkout(workoutId).then(() => onCompleted(workoutId)).catch(async (error: unknown) => { setConfirmFinish(false); if (finishWasRunning) await resumeWorkout(workoutId, Date.now()).catch(() => undefined); setFinishWasRunning(false); await refresh().catch(() => undefined); if (error instanceof IncompleteWorkoutError) setFinishValidation(error.validation); else setFeedback(error instanceof Error ? error.message : 'Workout could not be finished.') })}>Finish and save</button></section></div> : null}
    {confirmDiscard ? <Panel className="workout-confirm"><h2>Discard workout?</h2><p>This session will not appear in history or previous performance.</p><button className="secondary-button" type="button" onClick={() => setConfirmDiscard(false)}>Keep workout</button><button className="danger-button" type="button" onClick={() => void discardWorkout(workoutId).then(onExit)}>Discard</button></Panel> : null}
    {confirmExerciseRemovalId ? <div className="workout-finish-backdrop"><section className="panel workout-confirm exercise-remove-confirm" role="alertdialog" aria-modal="true" aria-labelledby="remove-active-exercise-title"><h2 id="remove-active-exercise-title">Remove exercise?</h2><p>This exercise contains entered workout data. Removing it will delete its sets from this active workout.</p><button className="secondary-button" type="button" autoFocus onClick={() => setConfirmExerciseRemovalId(undefined)}>Cancel</button><button className="danger-button" type="button" onClick={() => { const exerciseId = confirmExerciseRemovalId; setConfirmExerciseRemovalId(undefined); void run(() => removeActiveExercise(exerciseId)) }}>Remove</button></section></div> : null}
  </div>
}

function previewDraftNumber(value: string) {
  if (value.trim() === '') return undefined
  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : Number.NaN
}

function applySetDraft(set: WorkoutSet, draft: SetDraft | undefined): WorkoutSet {
  if (!draft) return set
  const next = { ...set }
  for (const field of Object.keys(draft) as WorkoutSetMetric[]) next[field] = previewDraftNumber(draft[field] ?? '')
  return next
}

function createPersistedDraftPatch(draft: SetDraft, units: UnitContext) {
  const patch: Partial<Pick<WorkoutSet, WorkoutSetMetric>> = {}
  for (const field of Object.keys(draft) as WorkoutSetMetric[]) {
    let value = parseWorkoutNumber(draft[field] ?? '', field)
    if (field === 'weight') value = storeWeight(value, units)
    if (field === 'distance') value = storeDistance(value, units)
    patch[field] = value
  }
  return patch
}

function ActiveSetRow({ set, draft, setNumber, trackingType, previous, units, onDraftChange, onDraftSaved, onSaved, onStartRest }: {
  set: WorkoutSet
  draft?: SetDraft
  setNumber: number
  trackingType: ExerciseTrackingType
  previous?: WorkoutSet
  units: UnitContext
  onDraftChange: (field: WorkoutSetMetric, value: string) => void
  onDraftSaved: (field: WorkoutSetMetric, value: string) => void
  onSaved: () => Promise<void>
  onStartRest: () => void
}) {
  const fields = getTrackingFields(trackingType)
  const [error, setError] = useState('')
  const renderedSet = applySetDraft(set, draft)
  const logState = getWorkoutSetLogState(renderedSet, trackingType)
  async function save(field: WorkoutSetMetric, raw: string) {
    try {
      let value = parseWorkoutNumber(raw, field)
      if (field === 'weight') value = storeWeight(value, units)
      if (field === 'distance') value = storeDistance(value, units)
      await updateWorkoutSet(set.id, { [field]: value })
      setError('')
      await onSaved()
      onDraftSaved(field, raw)
    } catch (reason) { setError(reason instanceof Error ? reason.message : 'Invalid value.') }
  }
  const valueFor = (field: WorkoutSetMetric, persisted: string | number) => draft?.[field] ?? String(persisted)
  return <div className={logState === 'logged' ? 'active-set-row is-logged' : logState === 'incomplete' ? 'active-set-row is-incomplete' : 'active-set-row'}>
    <div className="set-row-heading"><strong className="set-number"><span className="visually-hidden">Set </span>{setNumber}</strong><span className="previous-value"><small>Previous:</small> {formatPreviousSet(previous, trackingType, units.weightLabel, units.distanceLabel)}</span></div>
    <div className="set-inputs">
      {fields.weight ? <SetValueInput label={`${trackingType === 'assisted_bodyweight' ? 'Assistance' : 'Weight'} (${units.weightLabel})`} inputMode="decimal" min="0" step="any" value={valueFor('weight', displayWeight(set.weight, units))} onChange={(value) => onDraftChange('weight', value)} onSave={(value) => save('weight', value)} /> : null}
      {fields.reps ? <SetValueInput label="Reps" inputMode="numeric" min="1" step="1" value={valueFor('reps', set.reps ?? '')} onChange={(value) => onDraftChange('reps', value)} onSave={(value) => save('reps', value)} /> : null}
      {fields.duration ? <SetValueInput label="Seconds" inputMode="decimal" min="0" step="any" value={valueFor('durationSeconds', set.durationSeconds ?? '')} onChange={(value) => onDraftChange('durationSeconds', value)} onSave={(value) => save('durationSeconds', value)} /> : null}
      {fields.distance ? <SetValueInput label={`Distance (${units.distanceLabel})`} inputMode="decimal" min="0" step="any" value={valueFor('distance', displayDistance(set.distance, units))} onChange={(value) => onDraftChange('distance', value)} onSave={(value) => save('distance', value)} /> : null}
    </div>
    <div className="set-row-actions">
      <small className={`set-log-status is-${logState}`} aria-live="polite">{logState === 'logged' ? '✓ Logged' : logState === 'incomplete' ? '○ Incomplete' : '○ Empty'}</small>
      <div className="set-row-buttons">{logState === 'logged' ? <button className="set-rest-button" type="button" aria-label={`Start rest timer after set ${setNumber}`} onClick={onStartRest}><TimerReset size={16} aria-hidden="true" /><span>Rest</span></button> : null}<button className="set-remove-button" type="button" aria-label={`Delete set ${setNumber}`} onClick={() => void removeWorkoutSet(set.id).then(onSaved)}><Trash2 size={16} aria-hidden="true" /></button></div>
    </div>
    {error ? <small className="set-error" role="alert">{error}</small> : null}
  </div>
}

function SetValueInput({ label, inputMode, min, step, value, onChange, onSave }: {
  label: string
  inputMode: 'decimal' | 'numeric'
  min: string
  step: string
  value: string | number
  onChange: (value: string) => void
  onSave: (value: string) => Promise<void>
}) {
  return <label><span>{label}</span><input inputMode={inputMode} type="number" min={min} step={step} value={value} onChange={(event) => onChange(event.target.value)} onBlur={(event) => void onSave(event.target.value)} /></label>
}

function FinishValidationDialog({ validation, onClose }: { validation: WorkoutFinishValidation; onClose: () => void }) {
  const emptySets = validation.issues.filter((issue) => issue.kind === 'empty-set').length
  const incompleteSets = validation.issues.filter((issue) => issue.kind === 'incomplete-set').length
  const zeroSetExercises = validation.issues.filter((issue) => issue.kind === 'zero-sets').length
  const summary = [emptySets ? `${emptySets} empty ${emptySets === 1 ? 'set' : 'sets'}` : '', incompleteSets ? `${incompleteSets} incomplete ${incompleteSets === 1 ? 'set' : 'sets'}` : '', zeroSetExercises ? `${zeroSetExercises} empty ${zeroSetExercises === 1 ? 'exercise' : 'exercises'}` : ''].filter(Boolean).join(' · ')
  return <div className="workout-finish-backdrop"><section className="panel workout-finish-validation" role="alertdialog" aria-modal="true" aria-labelledby="incomplete-workout-title"><p className="eyebrow">Finish blocked</p><h2 id="incomplete-workout-title">Incomplete workout</h2><p>Some exercises or sets are still empty or incomplete. Fill them in or delete them before saving the workout. Remove an exercise if you do not intend to log it.</p><p className="workout-validation-summary">{summary || 'Add at least one exercise with a logged set.'}</p><ul>{validation.issues.map((issue, index) => <li key={`${issue.exerciseId}:${issue.setNumber ?? 'exercise'}:${index}`}><strong>{issue.exerciseName}</strong><span>{issue.kind === 'zero-sets' ? 'Add and log a set, or remove this exercise.' : issue.kind === 'empty-set' ? `Set ${issue.setNumber} is empty — fill or delete it.` : `Set ${issue.setNumber} needs ${issue.missingFields?.join(' and ') || 'valid values'} — fill or delete it.`}</span></li>)}</ul><button className="primary-button" type="button" autoFocus onClick={onClose}>Return to workout</button></section></div>
}

export function WorkoutDeleteDialog({ workoutId, workoutName, onCancel, onDeleted }: { workoutId: string; workoutName: string; onCancel: () => void; onDeleted: () => void }) {
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape' && !busy) onCancel() }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [busy, onCancel])
  return <div className="workout-finish-backdrop"><section className="panel workout-confirm workout-delete-confirm" role="alertdialog" aria-modal="true" aria-labelledby="delete-workout-title" aria-describedby="delete-workout-warning">
    <p className="eyebrow">Completed history</p><h2 id="delete-workout-title">Delete workout?</h2>
    <p><strong>{workoutName}</strong></p>
    <p id="delete-workout-warning">This will permanently delete this completed workout and its logged exercises and sets. It will also be removed from Journal and recalculated out of Home, Progress, Personal Records, and previous performance. This cannot be undone.</p>
    {error ? <p className="form-error" role="alert">{error}</p> : null}
    <button className="secondary-button" type="button" autoFocus disabled={busy} onClick={onCancel}>Cancel</button>
    <button className="danger-button" type="button" disabled={busy} onClick={() => { setBusy(true); setError(''); void deleteCompletedWorkout(workoutId).then(onDeleted).catch((reason: unknown) => { setBusy(false); setError(reason instanceof Error ? reason.message : 'Workout could not be deleted.') }) }}>{busy ? 'Deleting…' : 'Delete'}</button>
  </section></div>
}

export function CompletedWorkoutDetail({ workoutId, onBack, onDeleted = onBack }: { workoutId: string; onBack: () => void; onDeleted?: () => void }) {
  const [detail, setDetail] = useState<WorkoutDetail>()
  const [error, setError] = useState('')
  const [units, setUnits] = useState<UnitContext>(metricUnits)
  const [confirmDelete, setConfirmDelete] = useState(false)
  useEffect(() => {
    void getWorkoutDetail(workoutId).then(setDetail).catch((reason: unknown) => setError(reason instanceof Error ? reason.message : 'Workout could not be loaded.'))
    void db.settings.toArray().then((settings) => { const preference = settings.find((item) => item.units)?.units ?? 'metric'; setUnits(getUnitContext(preference)) })
  }, [workoutId])
  const loggedHistorySets = useMemo(() => detail?.exercises.flatMap((item) => item.sets.filter((set) => isHistoricalWorkoutSetLogged(set, item.exercise.trackingTypeSnapshot ?? 'reps_only'))) ?? [], [detail])
  const resistanceSets = useMemo(() => detail?.exercises.filter((item) => item.exercise.trackingTypeSnapshot === 'weight_reps').flatMap((item) => item.sets) ?? [], [detail])
  if (!detail) return <Panel><button className="dex-back-button" type="button" onClick={onBack}><ArrowLeft size={20} /></button><p>{error || 'Loading workout history…'}</p></Panel>
  return <div className="page-stack completed-workout-page">
    <Panel className="completed-workout-header"><button className="dex-back-button" type="button" onClick={onBack} aria-label="Back to Workout Hub"><ArrowLeft size={20} aria-hidden="true" /></button><div><p className="eyebrow">Completed workout</p><h1>{detail.workout.nameSnapshot}</h1><p>{new Date(detail.workout.completedAt ?? detail.workout.startedAt).toLocaleString()}</p></div></Panel>
    <div className="completed-summary"><span><strong>{formatDuration(detail.workout.durationSeconds ?? 0)}</strong><small>Duration</small></span><span><strong>{detail.exercises.length}</strong><small>Exercises</small></span><span><strong>{loggedHistorySets.length}</strong><small>Logged sets</small></span>{calculateVolume(resistanceSets) > 0 ? <span><strong>{Number(displayWeightFromKg(calculateVolume(resistanceSets), units.preference).toFixed(1))}</strong><small>Resistance volume ({units.weightLabel})</small></span> : null}</div>
    {detail.exercises.map(({ exercise, sets: exerciseSets }, index) => { const trackingType = exercise.trackingTypeSnapshot ?? 'reps_only'; const logged = exerciseSets.filter((set) => isHistoricalWorkoutSetLogged(set, trackingType)); return <Panel className="history-exercise-card" key={exercise.id}><p className="eyebrow">Exercise {index + 1}</p><h2>{exercise.exerciseNameSnapshot ?? 'Historical exercise'}</h2><p>{logged.length}/{exerciseSets.length} sets logged</p><div className="history-set-list">{exerciseSets.map((set, setIndex) => { const setLogged = isHistoricalWorkoutSetLogged(set, trackingType); return <div className={setLogged ? 'history-set is-complete' : 'history-set'} key={set.id}><strong>Set {setIndex + 1}</strong>{set.weight !== undefined ? <span>{displayWeight(set.weight, units)} {units.weightLabel}</span> : null}{set.reps !== undefined ? <span>{set.reps} reps</span> : null}{set.durationSeconds !== undefined ? <span>{set.durationSeconds} sec</span> : null}{set.distance !== undefined ? <span>{displayDistance(set.distance, units)} {units.distanceLabel}</span> : null}<small>{setLogged ? 'Logged' : 'Legacy incomplete row'}</small></div> })}</div>{exercise.notes ? <p>{exercise.notes}</p> : null}</Panel> })}
    {detail.workout.notes ? <Panel eyebrow="Session notes"><p>{detail.workout.notes}</p></Panel> : null}
    <button className="text-button completed-workout-delete" type="button" onClick={() => setConfirmDelete(true)}><Trash2 size={17} aria-hidden="true" /> Delete workout</button>
    {confirmDelete ? <WorkoutDeleteDialog workoutId={workoutId} workoutName={detail.workout.nameSnapshot} onCancel={() => setConfirmDelete(false)} onDeleted={onDeleted} /> : null}
  </div>
}
