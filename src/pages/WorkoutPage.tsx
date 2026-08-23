import { ArrowDown, ArrowLeft, ArrowUp, BookOpen, ChevronRight, Dumbbell, Plus, Trash2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Panel } from '../components/ui/Panel'
import type { Exercise, RoutineExercise, Workout, WorkoutRoutine } from '../data/models'
import { ExerciseDex } from '../features/exerciseDex/ExerciseDex'
import { ensureBuiltInExercises } from '../features/exerciseDex/seedExercises'
import { ActiveWorkoutView, CompletedWorkoutDetail } from '../features/workout/WorkoutSessionViews'
import { addExercisesToRoutine, createRoutine, deleteRoutine, deleteRoutineItem, loadRoutines, renameRoutine, reorderRoutineItem, type RoutineWithItems, updateRoutineItemSets } from '../features/workout/routineRepository'
import { MAX_PLANNED_SETS, MIN_PLANNED_SETS } from '../features/workout/routineModel'
import { elapsedSeconds, formatDuration } from '../features/workout/workoutModel'
import { ActiveWorkoutExistsError, getActiveWorkout, listRecentWorkouts, startEmptyWorkout, startWorkoutFromRoutine, type WorkoutDetail, type WorkoutSummary } from '../features/workout/workoutRepository'
import { PageHeader } from './PageHeader'

type WorkoutView = 'hub' | 'library' | 'create' | 'routine' | 'picker' | 'start' | 'add-to-routine' | 'active' | 'history'

export function WorkoutPage() {
  const [view, setView] = useState<WorkoutView>('hub')
  const [routines, setRoutines] = useState<RoutineWithItems[]>([])
  const [recentWorkouts, setRecentWorkouts] = useState<WorkoutSummary[]>([])
  const [activeWorkoutId, setActiveWorkoutId] = useState<string>()
  const [activeWorkout, setActiveWorkout] = useState<Workout>()
  const [historyWorkoutId, setHistoryWorkoutId] = useState<string>()
  const [selectedRoutineId, setSelectedRoutineId] = useState<string>()
  const [pickerSelection, setPickerSelection] = useState<Map<string, Exercise>>(new Map())
  const [pendingExercise, setPendingExercise] = useState<Exercise>()
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(true)
  const [hubNow, setHubNow] = useState(() => Date.now())

  async function refresh() {
    await ensureBuiltInExercises()
    const [nextRoutines, recent, active] = await Promise.all([loadRoutines(), listRecentWorkouts(), getActiveWorkout()])
    setRoutines(nextRoutines)
    setRecentWorkouts(recent)
    setActiveWorkoutId(active?.workout.id)
    setActiveWorkout(active?.workout)
    setLoading(false)
  }

  // Initial state is restored from IndexedDB; later mutations call refresh explicitly.
  // oxlint-disable-next-line react-hooks/exhaustive-deps, react/set-state-in-effect
  useEffect(() => { void refresh().catch(() => setLoading(false)) }, [])
  useEffect(() => { const timer = window.setInterval(() => setHubNow(Date.now()), 1000); return () => window.clearInterval(timer) }, [])
  const selectedRoutine = routines.find((entry) => entry.routine.id === selectedRoutineId)

  async function begin(action: () => Promise<WorkoutDetail>) {
    try {
      const detail = await action()
      setActiveWorkoutId(detail.workout.id)
      setActiveWorkout(detail.workout)
      setMessage('')
      setView('active')
    } catch (error) {
      if (error instanceof ActiveWorkoutExistsError) {
        setActiveWorkoutId(error.activeWorkoutId)
        setMessage('A workout is already in progress. Resume or discard it before starting another.')
        setView('hub')
      } else setMessage(error instanceof Error ? error.message : 'Workout could not be started.')
    }
  }

  function openRoutine(routineId: string) { setSelectedRoutineId(routineId); setMessage(''); setView('routine') }

  async function addPendingExercise(routineId: string) {
    if (!pendingExercise) return
    try { await addExercisesToRoutine(routineId, [pendingExercise]); setMessage(`${pendingExercise.name} added to routine.`); setPendingExercise(undefined); await refresh(); setView('library') }
    catch (error) { setMessage(error instanceof Error ? error.message : 'Exercise could not be added.') }
  }

  if (view === 'active' && activeWorkoutId) return <ActiveWorkoutView workoutId={activeWorkoutId} onExit={() => { void refresh(); setView('hub') }} onCompleted={(workoutId) => { setHistoryWorkoutId(workoutId); setActiveWorkoutId(undefined); setActiveWorkout(undefined); void refresh(); setView('history') }} />
  if (view === 'history' && historyWorkoutId) return <CompletedWorkoutDetail workoutId={historyWorkoutId} onBack={() => { void refresh(); setView('hub') }} />

  if (view === 'library') return <div className="page-stack workout-page"><ExerciseDex onAddToRoutine={(exercise) => { setPendingExercise(exercise); setMessage(''); setView('add-to-routine') }} /><button className="secondary-button workout-return" type="button" onClick={() => setView('hub')}>Back to Workout Hub</button>{message ? <p className="workout-feedback" role="status">{message}</p> : null}</div>

  if (view === 'picker' && selectedRoutine) {
    const disabledExerciseIds = new Set(selectedRoutine.items.map((item) => item.exerciseId))
    return <div className="page-stack workout-page"><ExerciseDex picker={{
      title: `Add exercises to ${selectedRoutine.routine.name}`,
      disabledExerciseIds,
      selectedExerciseIds: new Set(pickerSelection.keys()),
      onToggleExercise(exercise) { if (disabledExerciseIds.has(exercise.id)) return; setPickerSelection((current) => { const next = new Map(current); if (next.has(exercise.id)) next.delete(exercise.id); else next.set(exercise.id, exercise); return next }) },
      async onConfirm() { try { await addExercisesToRoutine(selectedRoutine.routine.id, [...pickerSelection.values()]); setPickerSelection(new Map()); await refresh(); setView('routine') } catch (error) { setMessage(error instanceof Error ? error.message : 'Exercises could not be added.') } },
      onCancel() { setPickerSelection(new Map()); setView('routine') },
    }} /></div>
  }

  if (view === 'routine' && selectedRoutine) return <RoutineEditor entry={selectedRoutine} message={message} onBack={() => setView('hub')} onChanged={refresh} onAddExercise={() => { setPickerSelection(new Map()); setMessage(''); setView('picker') }} onStart={() => void begin(() => startWorkoutFromRoutine(selectedRoutine.routine.id))} onDeleted={async () => { setSelectedRoutineId(undefined); await refresh(); setView('hub') }} />

  if (view === 'create') return <CreateRoutine onCancel={() => setView(pendingExercise ? 'add-to-routine' : 'hub')} onCreated={async (routine) => { if (pendingExercise) await addPendingExercise(routine.id); else { await refresh(); setSelectedRoutineId(routine.id); setView('routine') } }} />

  if (view === 'add-to-routine' && pendingExercise) return <div className="page-stack workout-page"><Panel className="workout-flow-panel"><FlowHeading title={`Add ${pendingExercise.name} to`} onBack={() => setView('library')} />{routines.length ? <div className="routine-choice-list">{routines.map(({ routine, items }) => <button type="button" key={routine.id} onClick={() => void addPendingExercise(routine.id)}><span><strong>{routine.name}</strong><small>{items.length} exercises</small></span><Plus size={18} aria-hidden="true" /></button>)}</div> : <WorkoutEmpty title="No routines yet" body="Create a routine, then this exercise will be added to it." />}<button className="secondary-button" type="button" onClick={() => setView('create')}>Create new routine</button>{message ? <p className="workout-feedback" role="status">{message}</p> : null}</Panel></div>

  if (view === 'start') return <StartWorkoutSelection routines={routines} onBack={() => setView('hub')} onStartRoutine={(id) => void begin(() => startWorkoutFromRoutine(id))} onStartEmpty={() => void begin(() => startEmptyWorkout())} />

  return <div className="page-stack workout-page"><PageHeader eyebrow="Training hub" title="Workout" description="Build routines, log active sessions, and review immutable local workout history." />{loading ? <Panel><p>Loading your local workout data…</p></Panel> : <div className="workout-hub-grid">
    <Panel className="workout-hub-section workout-today" eyebrow="Today" title={activeWorkoutId ? 'Workout in progress' : 'Start workout'}><p>{activeWorkout ? `${activeWorkout.nameSnapshot} · ${formatDuration(elapsedSeconds(activeWorkout.startedAt, hubNow))}` : routines.length ? 'Start from a routine or build an empty session.' : 'Start an empty workout or create your first routine.'}</p><button className="primary-button" type="button" onClick={() => setView(activeWorkoutId ? 'active' : 'start')}>{activeWorkoutId ? 'Resume workout' : 'Start workout'}</button>{message ? <p className="workout-feedback" role="status">{message}</p> : null}</Panel>
    <Panel className="workout-hub-section" eyebrow="Your routines" title={routines.length ? `${routines.length} saved` : 'No routines yet'}>{routines.length ? <div className="routine-card-list">{routines.map(({ routine, items }) => <button type="button" key={routine.id} onClick={() => openRoutine(routine.id)}><span><strong>{routine.name}</strong><small>{items.length} {items.length === 1 ? 'exercise' : 'exercises'}</small></span><ChevronRight size={19} aria-hidden="true" /></button>)}</div> : <WorkoutEmpty title="Build a reusable template" body="Create a routine from the Exercise Dex and plan its sets." />}<button className="secondary-button" type="button" onClick={() => setView('create')}><Plus size={17} aria-hidden="true" /> Create routine</button></Panel>
    <Panel className="workout-hub-section workout-library-card" eyebrow="Exercise library" title="804 exercises"><BookOpen size={30} aria-hidden="true" /><p>Browse categories, demonstrations, instructions, and add exercises to routines.</p><button className="secondary-button" type="button" onClick={() => { setMessage(''); setView('library') }}>Open Exercise Dex</button></Panel>
    <Panel className="workout-hub-section" eyebrow="Recent workouts" title={recentWorkouts.length ? 'Completed sessions' : 'No workouts recorded yet'}>{recentWorkouts.length ? <div className="recent-workout-list">{recentWorkouts.map((summary) => <button type="button" key={summary.workout.id} onClick={() => { setHistoryWorkoutId(summary.workout.id); setView('history') }}><span><strong>{summary.workout.nameSnapshot}</strong><small>{new Date(summary.workout.completedAt ?? summary.workout.startedAt).toLocaleDateString()} · {summary.exerciseCount} exercises · {summary.completedSetCount} sets · {formatDuration(summary.workout.durationSeconds ?? 0)}</small></span><ChevronRight size={18} aria-hidden="true" /></button>)}</div> : <WorkoutEmpty title="Your completed workouts will appear here" body="History is created only when you finish a real workout." />}</Panel>
  </div>}</div>
}

function FlowHeading({ title, onBack }: { title: string; onBack: () => void }) { return <div className="workout-flow-heading"><button className="dex-back-button" type="button" onClick={onBack} aria-label="Back"><ArrowLeft size={20} aria-hidden="true" /></button><div><p className="eyebrow">Workout</p><h2>{title}</h2></div></div> }
function WorkoutEmpty({ title, body }: { title: string; body: string }) { return <div className="workout-empty"><strong>{title}</strong><p>{body}</p></div> }

function StartWorkoutSelection({ routines, onBack, onStartRoutine, onStartEmpty }: { routines: readonly RoutineWithItems[]; onBack: () => void; onStartRoutine: (id: string) => void; onStartEmpty: () => void }) {
  return <div className="page-stack workout-page"><Panel className="workout-flow-panel"><FlowHeading title="Start workout" onBack={onBack} /><p className="eyebrow">From a routine</p>{routines.length ? <div className="routine-choice-list">{routines.map((entry) => <button type="button" key={entry.routine.id} onClick={() => onStartRoutine(entry.routine.id)}><span><strong>{entry.routine.name}</strong><small>{entry.items.length} exercises · {entry.items.reduce((sum, item) => sum + item.plannedSets, 0)} planned sets</small></span><ChevronRight size={18} aria-hidden="true" /></button>)}</div> : <WorkoutEmpty title="No routines yet" body="You can still start an empty workout and add exercises as you train." />}<button className="primary-button" type="button" onClick={onStartEmpty}>Start empty workout</button></Panel></div>
}

function CreateRoutine({ onCancel, onCreated }: { onCancel: () => void; onCreated: (routine: WorkoutRoutine) => void | Promise<void> }) {
  const [name, setName] = useState(''); const [error, setError] = useState('')
  return <div className="page-stack workout-page"><Panel className="workout-flow-panel"><FlowHeading title="Create routine" onBack={onCancel} /><form className="routine-form" onSubmit={(event) => { event.preventDefault(); void createRoutine(name).then(onCreated).catch((reason: unknown) => setError(reason instanceof Error ? reason.message : 'Routine could not be created.')) }}><label><span>Routine name</span><input value={name} maxLength={80} autoFocus onChange={(event) => setName(event.target.value)} placeholder="Push Day" /></label>{error ? <p className="form-error" role="alert">{error}</p> : null}<div className="routine-form-actions"><button className="secondary-button" type="button" onClick={onCancel}>Cancel</button><button className="primary-button" type="submit">Create</button></div></form></Panel></div>
}

function RoutineEditor({ entry, message, onBack, onChanged, onAddExercise, onStart, onDeleted }: { entry: RoutineWithItems; message: string; onBack: () => void; onChanged: () => Promise<void>; onAddExercise: () => void; onStart: () => void; onDeleted: () => Promise<void> }) {
  const [name, setName] = useState(entry.routine.name); const [confirmDelete, setConfirmDelete] = useState(false); const [feedback, setFeedback] = useState(message)
  async function run(action: () => Promise<unknown>, success?: string) { try { await action(); await onChanged(); if (success) setFeedback(success) } catch (error) { setFeedback(error instanceof Error ? error.message : 'Routine could not be updated.') } }
  return <div className="page-stack workout-page"><Panel className="workout-flow-panel routine-editor"><FlowHeading title={entry.routine.name} onBack={onBack} /><form className="routine-rename" onSubmit={(event) => { event.preventDefault(); void run(() => renameRoutine(entry.routine, name), 'Routine renamed.') }}><label><span className="visually-hidden">Routine name</span><input value={name} maxLength={80} onChange={(event) => setName(event.target.value)} /></label><button className="secondary-button" type="submit">Rename</button></form>{entry.items.length ? <ol className="routine-exercise-list">{entry.items.map((item, index) => <RoutineItemRow key={item.id} item={item} first={index === 0} last={index === entry.items.length - 1} onSets={(sets) => run(() => updateRoutineItemSets(entry.routine.id, item.id, sets))} onMove={(direction) => run(() => reorderRoutineItem(entry.routine.id, item.id, direction))} onRemove={() => run(() => deleteRoutineItem(entry.routine.id, item.id), 'Exercise removed from routine.')} />)}</ol> : <WorkoutEmpty title="No exercises yet" body="Add exercises from the existing Exercise Dex picker." />}<button className="secondary-button" type="button" onClick={onAddExercise}><Plus size={17} aria-hidden="true" /> Add exercise</button><button className="primary-button" type="button" onClick={onStart}><Dumbbell size={17} aria-hidden="true" /> Start workout</button>{feedback ? <p className="workout-feedback" role="status">{feedback}</p> : null}{confirmDelete ? <div className="routine-delete-confirm"><p>Delete this routine template? Completed workout snapshots will remain untouched.</p><button className="secondary-button" type="button" onClick={() => setConfirmDelete(false)}>Keep routine</button><button className="danger-button" type="button" onClick={() => void deleteRoutine(entry.routine.id).then(onDeleted)}>Delete routine</button></div> : <button className="text-button routine-delete-button" type="button" onClick={() => setConfirmDelete(true)}><Trash2 size={16} aria-hidden="true" /> Delete routine</button>}</Panel></div>
}

function RoutineItemRow({ item, first, last, onSets, onMove, onRemove }: { item: RoutineExercise; first: boolean; last: boolean; onSets: (sets: number) => Promise<void>; onMove: (direction: -1 | 1) => Promise<void>; onRemove: () => Promise<void> }) {
  return <li><div className="routine-exercise-copy"><strong>{item.exerciseNameSnapshot}</strong><label><span>Planned sets</span><input type="number" min={MIN_PLANNED_SETS} max={MAX_PLANNED_SETS} value={item.plannedSets} onChange={(event) => void onSets(Number(event.target.value))} /></label></div><div className="routine-order-controls"><button type="button" disabled={first} onClick={() => void onMove(-1)} aria-label={`Move ${item.exerciseNameSnapshot} up`}><ArrowUp size={17} aria-hidden="true" /></button><button type="button" disabled={last} onClick={() => void onMove(1)} aria-label={`Move ${item.exerciseNameSnapshot} down`}><ArrowDown size={17} aria-hidden="true" /></button><button type="button" onClick={() => void onRemove()} aria-label={`Remove ${item.exerciseNameSnapshot}`}><Trash2 size={17} aria-hidden="true" /></button></div></li>
}
