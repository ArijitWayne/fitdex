import { ArrowDown, ArrowLeft, ArrowUp, MoreHorizontal, Pause, Pencil, Play, Plus, Trash2 } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Panel } from '../../components/ui/Panel'
import { RetroLoader } from '../../components/ui/RetroLoader'
import { ContextRail } from '../../components/ui/ContextRail'
import { db } from '../../data/database'
import type { Exercise, ExerciseTrackingType, WorkoutSet } from '../../data/models'
import { displayDistanceFromKm, displayWeightFromKg, getUnitContext, storeDistanceAsKm, storeWeightAsKg, type UnitContext } from '../../utils/units.ts'
import { ExerciseDex } from '../exerciseDex/ExerciseDex'
import { useAudio } from '../audio/useAudio'
import { useBackNavigation } from '../navigation/useBackNavigation'
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
import { acknowledgeFirstUse, loadFirstUseGuidance } from '../help/firstUseGuidance'

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
  const { playEffect } = useAudio()
  const [detail, setDetail] = useState<WorkoutDetail>()
  const [previous, setPrevious] = useState<Map<string, WorkoutSet[]>>(new Map())
  const [exerciseEquipment, setExerciseEquipment] = useState<Map<string, string>>(new Map())
  const [currentExerciseId, setCurrentExerciseId] = useState<string>()
  const [openMenuExerciseId, setOpenMenuExerciseId] = useState<string>()
  const [isEditingTitle, setIsEditingTitle] = useState(false)
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
  const [showSessionNotes, setShowSessionNotes] = useState(false)
  const [expandedNotes, setExpandedNotes] = useState<Set<string>>(() => new Set())
  const [timerGuidance, setTimerGuidance] = useState(false)
  const [restGuidance, setRestGuidance] = useState(false)
  const [timerNotice, setTimerNotice] = useState(false)
  const exerciseCount = detail?.exercises.length ?? 0
  const timerPaused = detail ? isWorkoutTimerPaused(detail.workout, exerciseCount) : true
  const timerHasStarted = Boolean(detail?.workout.timerState === 'running' || detail?.workout.lastResumedAt || (detail?.workout.accumulatedActiveSeconds ?? 0) > 0)
  const timerIsRunning = detail?.workout.status === 'active' && exerciseCount > 0 && !timerPaused

  useBackNavigation('exercise-menu', Boolean(openMenuExerciseId), () => setOpenMenuExerciseId(undefined))

  async function refresh() {
    const next = await getWorkoutDetail(workoutId)
    setDetail(next)
    setCurrentExerciseId((current) => {
      const currentItem = next.exercises.find((item) => item.exercise.id === current)
      if (currentItem?.sets.some((set) => getWorkoutSetLogState(applySetDraft(set, setDrafts.get(set.id)), currentItem.exercise.trackingTypeSnapshot ?? 'reps_only') !== 'logged')) return current
      const firstIncomplete = next.exercises.find((item) => item.sets.some((set) => getWorkoutSetLogState(applySetDraft(set, setDrafts.get(set.id)), item.exercise.trackingTypeSnapshot ?? 'reps_only') !== 'logged'))
      return firstIncomplete?.exercise.id ?? currentItem?.exercise.id ?? next.exercises[0]?.exercise.id
    })
    const history = await Promise.all(next.exercises.map(async ({ exercise }) => [exercise.exerciseId, (await getPreviousPerformance(exercise.exerciseId, workoutId))?.sets ?? []] as const))
    setPrevious(new Map(history))
    const definitions = await db.exercises.bulkGet(next.exercises.map((item) => item.exercise.exerciseId))
    setExerciseEquipment(new Map(definitions.filter((exercise): exercise is Exercise => Boolean(exercise)).map((exercise) => [exercise.id, exercise.equipment])))
  }

  // The repository is the external source of truth; load its persisted snapshot when the session ID changes.
  // oxlint-disable react-hooks/exhaustive-deps, react/set-state-in-effect
  useEffect(() => {
    void refresh().catch((error: unknown) => setFeedback(error instanceof Error ? error.message : 'Workout could not be loaded.'))
    void db.settings.toArray().then((settings) => {
      const preference = settings.find((item) => item.units)?.units ?? 'metric'
      setUnits(getUnitContext(preference))
    })
    void loadFirstUseGuidance().then((guidance) => {
      setTimerGuidance(!guidance.workoutTimer)
      setRestGuidance(!guidance.workoutRest)
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
    const timer = window.setTimeout(() => setRest((current) => current === undefined || current <= 1 ? undefined : current - 1), 1000)
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

  if (!detail) return <Panel><RetroLoader label="LOADING ACTIVE WORKOUT..." />{feedback ? <p role="alert">{feedback}</p> : null}</Panel>

  if (picker) {
    const existingExerciseIds = new Set(detail.exercises.map((item) => item.exercise.exerciseId))
    return <ExerciseDex picker={{
      title: "Add to today's workout",
      targetLabel: 'workout',
      existingExerciseIds,
      async onAddExercise(exercise: Exercise) { await addExercisesToWorkout(workoutId, [exercise]); playEffect('add'); setTimerNotice(false); await refresh() },
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
  const acknowledgeTimer = () => { playEffect('select'); setTimerGuidance(false); void acknowledgeFirstUse('workoutTimer') }
  const acknowledgeRest = () => { playEffect('select'); setRestGuidance(false); void acknowledgeFirstUse('workoutRest') }

  const toggleExerciseNotes = (exerciseId: string) => {
    setExpandedNotes((prev) => {
      const next = new Set(prev)
      if (next.has(exerciseId)) next.delete(exerciseId)
      else next.add(exerciseId)
      return next
    })
  }

  return <div className="page-stack active-workout-page">
    <header className="session-header active-workout-header">
      <div className="session-top-row">
        <button
          className="session-hub-link"
          type="button"
          onClick={() => { playEffect('select'); onExit() }}
          aria-label="Back to Workout Hub"
        >
          ← Training Hub
        </button>
        <span className={`session-state-badge ${timerPaused ? 'is-paused' : 'is-active'}`}>
          <span className="state-pulse" aria-hidden="true"></span>
          <span>{timerPaused ? 'Paused' : 'In Progress'}</span>
        </span>
      </div>

      <div className="session-title-wrap active-workout-title-row">
        {isEditingTitle ? (
          <form className="active-workout-name-form" onSubmit={(event) => { event.preventDefault(); setIsEditingTitle(false) }}>
            <input
              className="session-title-input active-workout-name"
              aria-label="Workout name"
              maxLength={80}
              autoFocus
              defaultValue={detail.workout.nameSnapshot}
              key={`${detail.workout.id}:${detail.workout.nameSnapshot}`}
              onBlur={(event) => {
                setIsEditingTitle(false)
                void run(() => renameActiveWorkout(workoutId, event.target.value))
              }}
            />
          </form>
        ) : (
          <>
            <h1 className="session-title active-workout-name-text">{detail.workout.nameSnapshot}</h1>
            <button
              className="session-edit-title active-workout-rename-btn text-button"
              type="button"
              onClick={() => { playEffect('select'); setIsEditingTitle(true) }}
            >
              Edit
            </button>
          </>
        )}
      </div>

      <div className="session-stats-bar">
        <div className="stat-duration">
          <span>Time</span>
          <strong>{formatDuration(getWorkoutDuration(detail.workout, now, exerciseCount))}</strong>
          <div className="active-workout-top-actions">
            {!timerHasStarted ? (
              <button
                className={`pause-toggle-btn ${exerciseCount > 0 ? 'is-start-ready' : 'is-unavailable'}`}
                type="button"
                aria-label={exerciseCount > 0 ? 'Start workout timer' : 'Start workout timer (add an exercise first)'}
                onClick={() => {
                  if (exerciseCount === 0) {
                    playEffect('select')
                    setTimerNotice(true)
                    return
                  }
                  playEffect('select')
                  setTimerNotice(false)
                  void run(() => resumeWorkout(workoutId))
                }}
              >
                <Play size={11} aria-hidden="true" />
                <span>START TIMER</span>
              </button>
            ) : (
              <button
                className="pause-toggle-btn secondary-button"
                type="button"
                aria-label={timerPaused ? 'Resume workout timer' : 'Pause workout timer'}
                onClick={() => {
                  if (timerPaused && exerciseCount === 0) {
                    playEffect('select')
                    setTimerNotice(true)
                    return
                  }
                  playEffect('select')
                  setTimerNotice(false)
                  void run(() => timerPaused ? resumeWorkout(workoutId) : pauseWorkout(workoutId))
                }}
              >
                {timerPaused ? <Play size={11} aria-hidden="true" /> : <Pause size={11} aria-hidden="true" />}
                <span>{timerPaused ? 'RESUME TIMER' : 'PAUSE'}</span>
              </button>
            )}
            {loggedSets > 0 ? (
              <button
                className="rest-toggle-btn secondary-button"
                type="button"
                onClick={() => { playEffect('select'); setRest(DEFAULT_REST_SECONDS) }}
              >
                Start Rest
              </button>
            ) : null}
          </div>
        </div>
        <div className="stat-progress">
          <span>Sets Logged:</span>
          <strong aria-live="polite">{loggedSets} / {allSets.length}</strong>
          <span className="visually-hidden">{loggedSets}/{allSets.length} sets logged</span>
        </div>
      </div>
    </header>

    {timerNotice ? (
      <div className="workout-feedback timer-attempt-feedback" role="alert">
        <div className="timer-attempt-content">
          <strong>ADD AN EXERCISE FIRST</strong>
          <p>Add at least one exercise to start your workout timer.</p>
        </div>
        <button
          type="button"
          className="text-button timer-attempt-dismiss"
          aria-label="Dismiss notice"
          onClick={() => { playEffect('select'); setTimerNotice(false) }}
        >
          ✕
        </button>
      </div>
    ) : null}

    {timerGuidance ? <ContextRail eyebrow="Workout Timer" title="Start the timer when you're ready" actions={<button className="secondary-button" type="button" onClick={acknowledgeTimer}>GOT IT</button>}><p>Your workout is ready. Start the timer when you begin training. If you need to stop training for a while, pause the timer. Resume it when you're ready to continue.</p></ContextRail> : null}
    {restGuidance && loggedSets > 0 ? <ContextRail eyebrow="Rest Timer" title="Rest timer" actions={<button className="secondary-button" type="button" onClick={acknowledgeRest}>Got it</button>}><p>Take a rest whenever you need one between sets. Your workout timer keeps running while the rest timer tracks your recovery. Use Start Rest when you're ready for a break.</p></ContextRail> : null}

    {detail.exercises.length ? <div className="active-exercise-list workout-feed">{detail.exercises.map((item, index) => {
      const isCurrent = currentExerciseId === item.exercise.id
      const unloggedIndex = item.sets.findIndex((s) => getWorkoutSetLogState(applySetDraft(s, setDrafts.get(s.id)), item.exercise.trackingTypeSnapshot ?? 'reps_only') !== 'logged')
      const activeSetIndex = unloggedIndex === -1 ? undefined : unloggedIndex
      const loggedCount = item.sets.filter((set) => getWorkoutSetLogState(applySetDraft(set, setDrafts.get(set.id)), item.exercise.trackingTypeSnapshot ?? 'reps_only') === 'logged').length
      const trackingType = item.exercise.trackingTypeSnapshot ?? 'reps_only'
      const isMenuOpen = openMenuExerciseId === item.exercise.id
      const fields = getTrackingFields(trackingType)
      const isDualMetric = [fields.weight, fields.reps, fields.duration, fields.distance].filter(Boolean).length > 1
      const isComplete = loggedCount === item.sets.length && item.sets.length > 0

      return <Panel className={isCurrent ? 'active-exercise-card is-current' : 'active-exercise-card'} key={item.exercise.id}>
        <div className="active-exercise-header-row exercise-block-header" onClick={() => setCurrentExerciseId(item.exercise.id)}>
          <span className="exercise-index exercise-order">{index + 1}</span>
          <div className="exercise-header-text">
            <div className="exercise-header-title active-exercise-heading">
              <strong className="exercise-name">{item.exercise.exerciseNameSnapshot ?? 'Historical exercise'}</strong>
            </div>
            {item.exercise.exerciseCategorySnapshot || exerciseEquipment.get(item.exercise.exerciseId) ? (
              <span className="exercise-tag">
                {[item.exercise.exerciseCategorySnapshot, exerciseEquipment.get(item.exercise.exerciseId)].filter(Boolean).join(' · ')}
              </span>
            ) : null}
          </div>
          <div className="exercise-header-meta">
            <span className={`set-count-pill ${isComplete ? 'is-complete' : ''}`} aria-live="polite">
              {loggedCount}/{item.sets.length} Sets
              <span className="visually-hidden"> sets logged</span>
            </span>
            <div className="active-exercise-menu-wrap">
              <button
                className="exercise-menu-trigger menu-trigger-btn"
                type="button"
                aria-label={`Options for ${item.exercise.exerciseNameSnapshot ?? 'exercise'}`}
                aria-expanded={isMenuOpen}
                onClick={(e) => { e.stopPropagation(); setOpenMenuExerciseId(isMenuOpen ? undefined : item.exercise.id) }}
              >
                <MoreHorizontal size={18} aria-hidden="true" />
              </button>
              {isMenuOpen ? (
                <div className="exercise-context-menu" role="menu" onClick={(e) => e.stopPropagation()}>
                  <button type="button" role="menuitem" disabled={index === 0} onClick={() => { setOpenMenuExerciseId(undefined); void run(() => reorderWorkoutExercise(item.exercise.id, -1)) }}><ArrowUp size={16} aria-hidden="true" /> Move up</button>
                  <button type="button" role="menuitem" disabled={index === detail.exercises.length - 1} onClick={() => { setOpenMenuExerciseId(undefined); void run(() => reorderWorkoutExercise(item.exercise.id, 1)) }}><ArrowDown size={16} aria-hidden="true" /> Move down</button>
                  <button type="button" role="menuitem" onClick={() => { setOpenMenuExerciseId(undefined); toggleExerciseNotes(item.exercise.id) }}><Pencil size={16} aria-hidden="true" /> {expandedNotes.has(item.exercise.id) ? 'Hide notes' : 'Exercise notes'}</button>
                  {item.sets.length > 0 ? (
                    <button type="button" role="menuitem" className="danger-menu-item" onClick={() => { setOpenMenuExerciseId(undefined); void removeWorkoutSet(item.sets[item.sets.length - 1].id).then(refresh) }}><Trash2 size={16} aria-hidden="true" /> Delete set {item.sets.length}</button>
                  ) : null}
                  <button type="button" role="menuitem" className="danger-menu-item" onClick={() => { setOpenMenuExerciseId(undefined); if (renderedExerciseHasData(item.exercise.id)) setConfirmExerciseRemovalId(item.exercise.id); else void run(() => removeActiveExercise(item.exercise.id)) }}><Trash2 size={16} aria-hidden="true" /> Remove exercise</button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="active-exercise-body set-table-wrap">
          <div className={`set-table-header ${isDualMetric ? 'dual-metric' : 'single-metric'}`}>
            <span>Set</span>
            <span>Previous</span>
            {fields.weight ? <span><span className="metric-label-long">{trackingType === 'assisted_bodyweight' ? 'Assist' : 'Weight'} ({units.weightLabel})</span><span className="metric-label-short">{units.weightLabel}</span></span> : null}
            {fields.reps ? <span>Reps</span> : null}
            {fields.duration ? <span>Time (s)</span> : null}
            {fields.distance ? <span>Dist ({units.distanceLabel})</span> : null}
            <span style={{ textAlign: 'center' }}>Log</span>
          </div>
          <div className="set-list">
            {item.sets.map((set, setIndex) => (
              <ActiveSetRow
                key={set.id}
                set={set}
                draft={setDrafts.get(set.id)}
                setNumber={setIndex + 1}
                trackingType={trackingType}
                previous={previous.get(item.exercise.exerciseId)?.[setIndex]}
                units={units}
                layoutClass={isDualMetric ? 'dual-metric' : 'single-metric'}
                isActiveSet={isCurrent && activeSetIndex !== undefined && setIndex === activeSetIndex}
                onDraftChange={(field, value) => updateDraft(set.id, field, value)}
                onDraftSaved={(field, value) => clearDraftField(set.id, field, value)}
                onSaved={refresh}
                onStartRest={() => setRest(DEFAULT_REST_SECONDS)}
              />
            ))}
          </div>
          <div className="exercise-footer-actions">
            <button className="add-set-btn add-set-button" type="button" onClick={(e) => { e.stopPropagation(); void run(async () => { await addWorkoutSet(item.exercise.id); playEffect('add') }) }}><Plus size={14} aria-hidden="true" /> Add Set</button>
            <button className="text-button note-toggle-btn" type="button" onClick={(e) => { e.stopPropagation(); playEffect('select'); toggleExerciseNotes(item.exercise.id) }}>{expandedNotes.has(item.exercise.id) ? 'Hide notes' : 'Notes'}</button>
          </div>
          {expandedNotes.has(item.exercise.id) ? (
            <div className="exercise-note-field is-visible">
              <textarea
                defaultValue={item.exercise.notes ?? ''}
                placeholder="Form notes, seat angle, bench notch…"
                onBlur={(e) => {
                  const val = e.target.value.trim()
                  void db.workoutExercises.update(item.exercise.id, { notes: val || undefined })
                }}
              />
            </div>
          ) : null}
        </div>
      </Panel>
    })}</div> : <Panel><p className="eyebrow">Empty workout</p><h2>Add your first exercise</h2><p>Use the complete Exercise Dex to build today’s session.</p></Panel>}

    <div className="workout-notes-section">
      <button
        type="button"
        className="text-button note-toggle-btn workout-notes-toggle"
        onClick={() => { playEffect('select'); setShowSessionNotes(!showSessionNotes) }}
      >
        <Pencil size={14} aria-hidden="true" /> {showSessionNotes || detail.workout.notes ? 'Workout notes' : '+ Add session notes'}
      </button>
      {showSessionNotes ? (
        <label className="workout-notes">
          <span className="visually-hidden">Workout notes</span>
          <textarea defaultValue={detail.workout.notes ?? ''} onBlur={(event) => void run(() => updateWorkoutNotes(workoutId, event.target.value))} placeholder="Optional session notes" />
        </label>
      ) : null}
    </div>
    {feedback ? <p className="workout-feedback" role="status">{feedback}</p> : null}
    <div className="active-workout-secondary-actions">
      <button className="text-button active-discard-button" type="button" onClick={() => setConfirmDiscard(true)}>Discard workout</button>
    </div>

    {rest !== undefined ? (
      <div className="rest-timer-dock" role="timer">
        <div className="rest-timer-pill">
          <span>⏱ Rest</span>
          <span className="rest-time-display">{formatDuration(rest).slice(3)}</span>
          <button type="button" className="timer-pill-btn" onClick={() => { playEffect('select'); setRest((current) => current === undefined ? undefined : current + 30) }}>+30s</button>
          <button type="button" className="timer-pill-btn" onClick={() => { playEffect('select'); setRest((current) => current === undefined || current <= 15 ? undefined : current - 15) }}>-15s</button>
          <button type="button" className="timer-pill-btn is-skip" aria-label="Dismiss rest timer" onClick={() => { playEffect('select'); setRest(undefined) }}>✕</button>
        </div>
      </div>
    ) : null}

    <div className="active-workout-final-actions session-bottom-bar">
      <button className="secondary-button btn-bottom-secondary" type="button" onClick={() => { playEffect('select'); setPicker(true) }}><Plus size={16} aria-hidden="true" /> Add exercise</button>
      <button className="primary-button btn-bottom-primary" type="button" disabled={finishBusy} onClick={() => void beginFinishFlow()}>{finishBusy ? 'Checking workout…' : 'Finish workout'}</button>
    </div>
    {finishValidation ? <FinishValidationDialog validation={finishValidation} onClose={() => setFinishValidation(undefined)} /> : null}
    {confirmFinish ? <div className="workout-finish-backdrop"><section className="panel workout-confirm" role="dialog" aria-modal="true" aria-labelledby="finish-workout-title"><h2 id="finish-workout-title">Finish workout?</h2><p>{detail.exercises.length} exercises · {loggedSets} logged sets · {formatDuration(getWorkoutDuration(detail.workout, now))} training time</p><button className="secondary-button" type="button" autoFocus onClick={() => void cancelFinishFlow()}>Keep logging</button><button className="primary-button" type="button" onClick={() => void finishWorkout(workoutId).then(() => { playEffect('progress_complete'); onCompleted(workoutId) }).catch(async (error: unknown) => { setConfirmFinish(false); if (finishWasRunning) await resumeWorkout(workoutId, Date.now()).catch(() => undefined); setFinishWasRunning(false); await refresh().catch(() => undefined); if (error instanceof IncompleteWorkoutError) setFinishValidation(error.validation); else setFeedback(error instanceof Error ? error.message : 'Workout could not be finished.') })}>Finish and save</button></section></div> : null}
    {confirmDiscard ? <div className="workout-finish-backdrop"><section className="panel workout-confirm" role="alertdialog" aria-modal="true" aria-labelledby="discard-workout-title"><h2 id="discard-workout-title">Discard workout?</h2><p>This session will not appear in history or previous performance.</p><button className="secondary-button" type="button" autoFocus onClick={() => setConfirmDiscard(false)}>Keep workout</button><button className="danger-button" type="button" onClick={() => void discardWorkout(workoutId).then(onExit)}>Discard</button></section></div> : null}
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

function ActiveSetRow({ set, draft, setNumber, trackingType, previous, units, layoutClass, isActiveSet, onDraftChange, onDraftSaved, onSaved, onStartRest }: {
  set: WorkoutSet
  draft?: SetDraft
  setNumber: number
  trackingType: ExerciseTrackingType
  previous?: WorkoutSet
  units: UnitContext
  layoutClass: 'dual-metric' | 'single-metric'
  isActiveSet?: boolean
  onDraftChange: (field: WorkoutSetMetric, value: string) => void
  onDraftSaved: (field: WorkoutSetMetric, value: string) => void
  onSaved: () => Promise<void>
  onStartRest: () => void
}) {
  const { playEffect } = useAudio()
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

  function handleCopyPrevious() {
    if (!previous || logState === 'logged') return
    const trackingFields = getTrackingFields(trackingType)
    if (trackingFields.weight && previous.weight !== undefined) {
      onDraftChange('weight', String(displayWeight(previous.weight, units)))
    }
    if (trackingFields.reps && previous.reps !== undefined) {
      onDraftChange('reps', String(previous.reps))
    }
    if (trackingFields.duration && previous.durationSeconds !== undefined) {
      onDraftChange('durationSeconds', String(previous.durationSeconds))
    }
    if (trackingFields.distance && previous.distance !== undefined) {
      onDraftChange('distance', String(displayDistance(previous.distance, units)))
    }
    playEffect('select')
  }

  const valueFor = (field: WorkoutSetMetric, persisted: string | number) => draft?.[field] ?? String(persisted)
  const previousFormatted = fields.weight && fields.reps && previous?.weight !== undefined && previous.reps !== undefined
    ? `${displayWeight(previous.weight, units)} × ${previous.reps}`
    : formatPreviousSet(previous, trackingType, units.weightLabel, units.distanceLabel)
  const rowClasses = [
    'active-set-row',
    'proto-set-row',
    layoutClass,
    logState === 'logged' ? 'is-logged' : logState === 'incomplete' ? 'is-incomplete' : '',
    isActiveSet ? 'is-active-set' : '',
  ].filter(Boolean).join(' ')

  return <div className={rowClasses}>
    <div className="set-row-heading set-num-badge">
      <span className="visually-hidden">Set </span>
      <strong className="set-number">{setNumber}</strong>
    </div>

    {previous ? (
      <button
        type="button"
        className="prev-copy-btn previous-copy-btn"
        onClick={handleCopyPrevious}
        disabled={logState === 'logged'}
        aria-label={`Copy previous performance (${previousFormatted}) to set ${setNumber}`}
        title={logState === 'logged' ? 'Completed sets cannot be overwritten' : 'Tap to copy previous values'}
      >
        <span className="prev-val previous-value">{previousFormatted}</span>
        <span className="prev-sub previous-copy-tag">Tap Copy</span>
      </button>
    ) : (
      <div className="prev-copy-btn is-empty">
        <span className="prev-val previous-value">{previous ? previousFormatted : '—'}</span>
      </div>
    )}

    {fields.weight ? (
      <SetValueInput
        label={`${trackingType === 'assisted_bodyweight' ? 'Assistance' : 'Weight'} (${units.weightLabel})`}
        placeholder={previous?.weight !== undefined ? String(displayWeight(previous.weight, units)) : undefined}
        inputMode="decimal"
        min="0"
        step="any"
        value={valueFor('weight', displayWeight(set.weight, units))}
        onChange={(value) => onDraftChange('weight', value)}
        onSave={(value) => save('weight', value)}
      />
    ) : null}
    {fields.reps ? (
      <SetValueInput
        label="Reps"
        placeholder={previous?.reps !== undefined ? String(previous.reps) : undefined}
        inputMode="numeric"
        min="1"
        step="1"
        value={valueFor('reps', set.reps ?? '')}
        onChange={(value) => onDraftChange('reps', value)}
        onSave={(value) => save('reps', value)}
      />
    ) : null}
    {fields.duration ? (
      <SetValueInput
        label="Seconds"
        placeholder={previous?.durationSeconds !== undefined ? String(previous.durationSeconds) : undefined}
        inputMode="decimal"
        min="0"
        step="any"
        value={valueFor('durationSeconds', set.durationSeconds ?? '')}
        onChange={(value) => onDraftChange('durationSeconds', value)}
        onSave={(value) => save('durationSeconds', value)}
      />
    ) : null}
    {fields.distance ? (
      <SetValueInput
        label={`Distance (${units.distanceLabel})`}
        placeholder={previous?.distance !== undefined ? String(displayDistance(previous.distance, units)) : undefined}
        inputMode="decimal"
        min="0"
        step="any"
        value={valueFor('distance', displayDistance(set.distance, units))}
        onChange={(value) => onDraftChange('distance', value)}
        onSave={(value) => save('distance', value)}
      />
    ) : null}

    <div className="set-row-actions">
      <button
        type="button"
        className={`set-action-btn ${logState === 'logged' ? 'is-logged' : ''}`}
        aria-label={logState === 'logged' ? `Set ${setNumber} logged · Start rest timer after set ${setNumber}` : `Set ${setNumber} ${logState}`}
        title={logState === 'logged' ? 'Set logged · Tap to start rest timer' : `Set ${setNumber} ${logState}`}
        onClick={() => {
          if (logState === 'logged') {
            playEffect('select')
            onStartRest()
          }
        }}
      >
        <span aria-hidden="true">{logState === 'logged' ? '✓' : '○'}</span>
        <span className="visually-hidden">
          {logState === 'logged' ? '✓ Logged' : logState === 'incomplete' ? '○ Incomplete' : '○ Empty'}
        </span>
      </button>
    </div>
    {error ? <small className="set-error" role="alert">{error}</small> : null}
  </div>
}

function SetValueInput({ label, placeholder, inputMode, min, step, value, onChange, onSave }: {
  label: string
  placeholder?: string
  inputMode: 'decimal' | 'numeric'
  min: string
  step: string
  value: string | number
  onChange: (value: string) => void
  onSave: (value: string) => Promise<void>
}) {
  return (
    <div className="proto-input-wrap">
      <label className="visually-hidden"><span>{label}</span></label>
      <input
        aria-label={label}
        className="proto-input"
        inputMode={inputMode}
        type="number"
        min={min}
        step={step}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onBlur={(event) => void onSave(event.target.value)}
      />
    </div>
  )
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
  if (!detail) return <Panel><button className="dex-back-button" type="button" onClick={onBack}><ArrowLeft size={20} /></button>{error ? <p role="alert">{error}</p> : <RetroLoader label="LOADING WORKOUT HISTORY..." />}</Panel>
  return <div className="page-stack completed-workout-page">
    <Panel className="completed-workout-header"><button className="dex-back-button" type="button" onClick={onBack} aria-label="Back to Workout Hub"><ArrowLeft size={20} aria-hidden="true" /></button><div><p className="eyebrow">Completed workout</p><h1>{detail.workout.nameSnapshot}</h1><p>{new Date(detail.workout.completedAt ?? detail.workout.startedAt).toLocaleString()}</p></div></Panel>
    <div className="completed-summary"><span><strong>{formatDuration(detail.workout.durationSeconds ?? 0)}</strong><small>Duration</small></span><span><strong>{detail.exercises.length}</strong><small>Exercises</small></span><span><strong>{loggedHistorySets.length}</strong><small>Logged sets</small></span>{calculateVolume(resistanceSets) > 0 ? <span><strong>{Number(displayWeightFromKg(calculateVolume(resistanceSets), units.preference).toFixed(1))}</strong><small>Resistance volume ({units.weightLabel})</small></span> : null}</div>
    {detail.exercises.map(({ exercise, sets: exerciseSets }, index) => { const trackingType = exercise.trackingTypeSnapshot ?? 'reps_only'; const logged = exerciseSets.filter((set) => isHistoricalWorkoutSetLogged(set, trackingType)); return <Panel className="history-exercise-card" key={exercise.id}><p className="eyebrow">Exercise {index + 1}</p><h2>{exercise.exerciseNameSnapshot ?? 'Historical exercise'}</h2><p>{logged.length}/{exerciseSets.length} sets logged</p><div className="history-set-list">{exerciseSets.map((set, setIndex) => { const setLogged = isHistoricalWorkoutSetLogged(set, trackingType); return <div className={setLogged ? 'history-set is-complete' : 'history-set'} key={set.id}><strong>Set {setIndex + 1}</strong>{set.weight !== undefined ? <span>{displayWeight(set.weight, units)} {units.weightLabel}</span> : null}{set.reps !== undefined ? <span>{set.reps} reps</span> : null}{set.durationSeconds !== undefined ? <span>{set.durationSeconds} sec</span> : null}{set.distance !== undefined ? <span>{displayDistance(set.distance, units)} {units.distanceLabel}</span> : null}<small>{setLogged ? 'Logged' : 'Legacy incomplete row'}</small></div> })}</div>{exercise.notes ? <p>{exercise.notes}</p> : null}</Panel> })}
    {detail.workout.notes ? <Panel eyebrow="Session notes"><p>{detail.workout.notes}</p></Panel> : null}
    <button className="text-button completed-workout-delete" type="button" onClick={() => setConfirmDelete(true)}><Trash2 size={17} aria-hidden="true" /> Delete workout</button>
    {confirmDelete ? <WorkoutDeleteDialog workoutId={workoutId} workoutName={detail.workout.nameSnapshot} onCancel={() => setConfirmDelete(false)} onDeleted={onDeleted} /> : null}
  </div>
}
