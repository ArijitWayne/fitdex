import { ArrowDown, ArrowLeft, ArrowUp, BookOpen, ChevronRight, CircleHelp, Dumbbell, Plus, Trash2, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Panel } from '../components/ui/Panel'
import { ContextRail } from '../components/ui/ContextRail'
import { PageFrame } from '../components/layout/PageFrame'
import type { Exercise, RoutineExercise, WorkoutRoutine } from '../data/models'
import { ExerciseDex } from '../features/exerciseDex/ExerciseDex'
import { ensureBuiltInExercises } from '../features/exerciseDex/seedExercises'
import { ActiveWorkoutView, CompletedWorkoutDetail, WorkoutDeleteDialog } from '../features/workout/WorkoutSessionViews'
import { addExercisesToRoutine, createRoutine, deleteRoutine, deleteRoutineItem, loadRoutines, renameRoutine, reorderRoutineItem, routineScheduledDays, type RoutineWithItems, updateRoutineItemSets } from '../features/workout/routineRepository'
import { MAX_PLANNED_SETS, MIN_PLANNED_SETS } from '../features/workout/routineModel'
import { formatDuration, getWorkoutDuration, getWorkoutSetLogState, isWorkoutTimerPaused } from '../features/workout/workoutModel'
import { ActiveWorkoutExistsError, discardWorkout, getActiveWorkout, listRecentWorkouts, pauseWorkout, resumeWorkout, startEmptyWorkout, startPreparedWorkout, startWorkoutFromRoutine, type WorkoutDetail, type WorkoutSummary } from '../features/workout/workoutRepository'
import { GuideDialog } from '../features/help/GuideDialog'
import { markTutorialSeen } from '../features/help/tutorialPreferences'
import { workoutTutorialSteps } from '../features/help/tutorialSteps'
import { WeeklyPlanEditor } from '../features/workout/WeeklyPlanViews'
import { emptyWeeklyPlanDays, loadWeeklyPlan, WEEKDAY_LABELS, weekdayIdForLocalDateKey, weeklyPlanAssignmentLabel, type WeeklyPlan } from '../features/workout/weeklyPlan'
import { PlanChangeConfirmationRequiredError } from '../features/workout/weeklyPlan'
import { useAudio } from '../features/audio/useAudio'
import { useBackNavigation } from '../features/navigation/useBackNavigation'
import { loadGamificationDashboard, type GamificationDashboard } from '../features/gamification/gamificationRepository'
import { WEEKDAY_IDS } from '../data/models'
import { getLocalDateKey, shiftLocalDateKey } from '../utils/localDate'
import { acknowledgeFirstUse, loadFirstUseGuidance } from '../features/help/firstUseGuidance'

type WorkoutView = 'hub' | 'library' | 'create' | 'routine' | 'picker' | 'prepare' | 'prepare-picker' | 'start' | 'add-to-routine' | 'active' | 'history' | 'plan' | 'start-empty' | 'start-routine'
export type WorkoutEntryView = Extract<WorkoutView, 'hub' | 'library' | 'start' | 'active' | 'create' | 'plan' | 'start-empty' | 'start-routine' | 'history'>
type ReplacementIntent = { type: 'choose-routine' } | { type: 'open' } | { type: 'today' } | { type: 'routine'; routineId: string; routineName: string }

export function WorkoutPage({ initialView = 'hub', initialRoutineId, initialWorkoutId }: { initialView?: WorkoutEntryView; initialRoutineId?: string; initialWorkoutId?: string }) {
  const { playEffect } = useAudio()
  const [view, setView] = useState<WorkoutView>(initialView)
  const [routines, setRoutines] = useState<RoutineWithItems[]>([])
  const [recentWorkouts, setRecentWorkouts] = useState<WorkoutSummary[]>([])
  const [activeWorkoutDetail, setActiveWorkoutDetail] = useState<WorkoutDetail>()
  const [historyWorkoutId, setHistoryWorkoutId] = useState<string | undefined>(initialWorkoutId)
  const [deleteWorkoutSummary, setDeleteWorkoutSummary] = useState<WorkoutSummary>()
  const [selectedRoutineId, setSelectedRoutineId] = useState<string>()
  const [pendingExercise, setPendingExercise] = useState<Exercise>()
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(true)
  const [hubNow, setHubNow] = useState(() => Date.now())
  const [weeklyPlan, setWeeklyPlan] = useState<WeeklyPlan>({ configured: false, days: emptyWeeklyPlanDays() })
  const [gamification, setGamification] = useState<GamificationDashboard>()
  const [tutorialOpen, setTutorialOpen] = useState(false)
  const [initialIntentHandled, setInitialIntentHandled] = useState(false)
  const [quickLaunchOpen, setQuickLaunchOpen] = useState(false)
  const [routineChooserOpen, setRoutineChooserOpen] = useState(false)
  const [replacementIntent, setReplacementIntent] = useState<ReplacementIntent>()
  const [showAllRoutines, setShowAllRoutines] = useState(false)
  const [showAllHistory, setShowAllHistory] = useState(false)
  const [preparedExercises, setPreparedExercises] = useState<Exercise[]>([])
  const [showWorkoutLanding, setShowWorkoutLanding] = useState(false)
  const overlayOpen = Boolean(replacementIntent) || routineChooserOpen || quickLaunchOpen
  const navigateBack = useBackNavigation('workout-subview', overlayOpen || view !== 'hub', () => {
    if (replacementIntent) setReplacementIntent(undefined)
    else if (routineChooserOpen) setRoutineChooserOpen(false)
    else if (quickLaunchOpen) setQuickLaunchOpen(false)
    else { void refresh(); setView('hub') }
  }, overlayOpen ? 20 : 10)

  async function refresh() {
    await ensureBuiltInExercises()
    const [nextRoutines, recent, active, nextPlan, nextGamification] = await Promise.all([loadRoutines(), listRecentWorkouts(), getActiveWorkout(), loadWeeklyPlan(), loadGamificationDashboard()])
    setRoutines(nextRoutines)
    setRecentWorkouts(recent)
    setActiveWorkoutDetail(active)
    setWeeklyPlan(nextPlan)
    setGamification(nextGamification)
    setLoading(false)
  }

  // Initial state is restored from IndexedDB; later mutations call refresh explicitly.
  // oxlint-disable-next-line react-hooks/exhaustive-deps, react/set-state-in-effect
  useEffect(() => { void refresh().catch(() => setLoading(false)) }, [])
  useEffect(() => { if (initialView === 'hub') void loadFirstUseGuidance().then((guidance) => setShowWorkoutLanding(!guidance.workoutLanding)) }, [initialView])
  const activeWorkout = activeWorkoutDetail?.workout
  const activeWorkoutId = activeWorkout?.id
  useEffect(() => {
    if (!activeWorkout || isWorkoutTimerPaused(activeWorkout)) return
    const timer = window.setInterval(() => setHubNow(Date.now()), 1000)
    return () => window.clearInterval(timer)
  }, [activeWorkout])
  const selectedRoutine = routines.find((entry) => entry.routine.id === selectedRoutineId)
  const hubTimerPaused = activeWorkout ? isWorkoutTimerPaused(activeWorkout) : false

  async function begin(action: () => Promise<WorkoutDetail>) {
    try {
      const detail = await action()
      playEffect('select')
      setActiveWorkoutDetail(detail)
      setMessage('')
      setView('active')
    } catch (error) {
      if (error instanceof ActiveWorkoutExistsError) {
        setMessage('A workout is already in progress. Resume or discard it before starting another.')
        await refresh()
        setView('hub')
      } else setMessage(error instanceof Error ? error.message : 'Workout could not be started.')
    }
  }

  // Home start intents use the same repository-backed creation paths as the Workout hub.
  // oxlint-disable react-hooks/exhaustive-deps, react/set-state-in-effect
  useEffect(() => {
    if (initialIntentHandled) return
    setInitialIntentHandled(true)
    if (initialView === 'start-empty') void begin(() => startEmptyWorkout())
    if (initialView === 'start-routine' && initialRoutineId) void begin(() => startWorkoutFromRoutine(initialRoutineId))
  }, [initialIntentHandled, initialRoutineId, initialView])
  // oxlint-enable react-hooks/exhaustive-deps, react/set-state-in-effect

  function closeTutorial() { setTutorialOpen(false); void markTutorialSeen('workout') }

  function openRoutine(routineId: string) { playEffect('select'); setSelectedRoutineId(routineId); setMessage(''); setView('routine') }

  const todayKey = getLocalDateKey(new Date(hubNow))
  const todayId = weekdayIdForLocalDateKey(todayKey)
  const todayAssignment = weeklyPlan.days[todayId]
  const todayRoutine = todayAssignment.type === 'routine' ? routines.find((entry) => entry.routine.id === todayAssignment.routineId) : undefined
  const hasTodayPlan = weeklyPlan.configured && (todayAssignment.type === 'routine' ? Boolean(todayRoutine) : todayAssignment.type === 'workout_day')

  const startToday = () => todayAssignment.type === 'routine'
    ? begin(() => startWorkoutFromRoutine(todayAssignment.routineId))
    : begin(() => startEmptyWorkout())

  function openQuickLaunch() { playEffect('select'); setQuickLaunchOpen(true) }
  function chooseRoutine() { playEffect('select'); setQuickLaunchOpen(false); setRoutineChooserOpen(true) }
  function requestReplacement(intent: ReplacementIntent) { playEffect('select'); setQuickLaunchOpen(false); setRoutineChooserOpen(false); setReplacementIntent(intent) }
  function startRoutineSafely(routineId: string) {
    const routineName = routines.find((entry) => entry.routine.id === routineId)?.routine.name ?? 'Routine'
    if (activeWorkoutId) { setView('hub'); requestReplacement({ type: 'routine', routineId, routineName }); return }
    void begin(() => startWorkoutFromRoutine(routineId))
  }
  function startOpenSafely() {
    if (activeWorkoutId) { setView('hub'); requestReplacement({ type: 'open' }); return }
    void begin(() => startEmptyWorkout())
  }

  async function confirmReplacement() {
    if (!replacementIntent || !activeWorkoutId) return
    const intent = replacementIntent
    try {
      await discardWorkout(activeWorkoutId)
      playEffect('select')
      setActiveWorkoutDetail(undefined)
      setReplacementIntent(undefined)
      if (intent.type === 'choose-routine') { await refresh(); setRoutineChooserOpen(true); return }
      if (intent.type === 'open') { await begin(() => startEmptyWorkout()); return }
      if (intent.type === 'today') { await startToday(); return }
      await begin(() => startWorkoutFromRoutine(intent.routineId))
    } catch (error) { setMessage(error instanceof Error ? error.message : 'Workout could not be replaced.'); setReplacementIntent(undefined) }
  }

  async function toggleHubTimer() {
    if (!activeWorkoutId || !activeWorkout) return
    try {
      playEffect('select')
      const detail = await (isWorkoutTimerPaused(activeWorkout) ? resumeWorkout(activeWorkoutId) : pauseWorkout(activeWorkoutId))
      setActiveWorkoutDetail(detail)
      setQuickLaunchOpen(false)
      setHubNow(Date.now())
    } catch (error) { setMessage(error instanceof Error ? error.message : 'Workout timer could not be updated.') }
  }

  async function addPendingExercise(routineId: string) {
    if (!pendingExercise) return
    try { await addExercisesToRoutine(routineId, [pendingExercise]); playEffect('add'); setMessage(`${pendingExercise.name} added to routine.`); setPendingExercise(undefined); await refresh(); setView('library') }
    catch (error) { setMessage(error instanceof Error ? error.message : 'Exercise could not be added.') }
  }

  const chooseFirstWorkoutPath = async (next: 'prepare' | 'create') => {
    await acknowledgeFirstUse('workoutLanding')
    setShowWorkoutLanding(false)
    playEffect('select')
    setView(next)
  }

  if (view === 'active' && activeWorkoutId) return <ActiveWorkoutView workoutId={activeWorkoutId} onExit={() => { void refresh(); setView('hub') }} onCompleted={(workoutId) => { setHistoryWorkoutId(workoutId); setActiveWorkoutDetail(undefined); void refresh(); setView('history') }} />
  if (view === 'history' && historyWorkoutId) return <CompletedWorkoutDetail workoutId={historyWorkoutId} onBack={() => { void navigateBack() }} onDeleted={() => { setRecentWorkouts((current) => current.filter((entry) => entry.workout.id !== historyWorkoutId)); setHistoryWorkoutId(undefined); setView('hub'); void refresh() }} />
  if (view === 'plan') return <WeeklyPlanEditor plan={weeklyPlan} routines={routines} onChanged={setWeeklyPlan} onBack={() => setView('hub')} onCreateRoutine={() => setView('create')} />

  if (view === 'prepare-picker') return <div className="page-stack workout-page"><ExerciseDex picker={{
    title: 'Build today’s workout', targetLabel: 'workout preparation', existingExerciseIds: new Set(preparedExercises.map((exercise) => exercise.id)),
    async onAddExercise(exercise) { setPreparedExercises((current) => [...current, exercise]); playEffect('add') },
    async onRemoveExercise(exercise) { setPreparedExercises((current) => current.filter((item) => item.id !== exercise.id)); playEffect('select') },
    onDone() { playEffect('select'); setView('prepare') },
  }} /></div>

  if (view === 'prepare') return <PreparedWorkout exercises={preparedExercises} onBack={() => setView('hub')} onAdd={() => setView('prepare-picker')} onRemove={(id) => setPreparedExercises((current) => current.filter((exercise) => exercise.id !== id))} onStart={() => void begin(() => startPreparedWorkout(preparedExercises))} />

  if (view === 'library') return <div className="page-stack workout-page"><div className="workout-library-toolbar"><button className="secondary-button" type="button" onClick={() => { playEffect('select'); setView('hub') }}><ArrowLeft size={18} aria-hidden="true" /> Back to Workout Hub</button></div><ExerciseDex onAddToRoutine={(exercise) => { setPendingExercise(exercise); setMessage(''); setView('add-to-routine') }} />{message ? <p className="workout-feedback" role="status">{message}</p> : null}</div>

  if (view === 'picker' && selectedRoutine) {
    const existingExerciseIds = new Set(selectedRoutine.items.map((item) => item.exerciseId))
    return <div className="page-stack workout-page"><ExerciseDex picker={{
      title: `Add exercises to ${selectedRoutine.routine.name}`,
      targetLabel: 'routine',
      existingExerciseIds,
      async onAddExercise(exercise) { await addExercisesToRoutine(selectedRoutine.routine.id, [exercise]); playEffect('add'); await refresh() },
      async onRemoveExercise(exercise) {
        const item = selectedRoutine.items.find((candidate) => candidate.exerciseId === exercise.id)
        if (!item) return
        await deleteRoutineItem(selectedRoutine.routine.id, item.id)
        await refresh()
      },
      onDone() { setView('routine') },
    }} /></div>
  }

  if (view === 'routine' && selectedRoutine) return <RoutineEditor entry={selectedRoutine} replacementOptions={routines.filter((candidate) => candidate.routine.id !== selectedRoutine.routine.id)} message={message} onBack={() => setView('hub')} onChanged={refresh} onAddExercise={() => { setMessage(''); setView('picker') }} onStart={() => startRoutineSafely(selectedRoutine.routine.id)} onDeleted={async () => { setSelectedRoutineId(undefined); await refresh(); setView('hub') }} />

  if (view === 'create') return <CreateRoutine onCancel={() => setView(pendingExercise ? 'add-to-routine' : 'hub')} onCreated={async (routine) => { playEffect('add'); if (pendingExercise) await addPendingExercise(routine.id); else { await refresh(); setSelectedRoutineId(routine.id); setView('routine') } }} />

  if (view === 'add-to-routine' && pendingExercise) return <div className="page-stack workout-page"><Panel className="workout-flow-panel"><FlowHeading title={`Add ${pendingExercise.name} to`} onBack={() => setView('library')} />{routines.length ? <div className="routine-choice-list">{routines.map(({ routine, items }) => <button type="button" key={routine.id} onClick={() => void addPendingExercise(routine.id)}><span><strong>{routine.name}</strong><small>{items.length} exercises</small></span><Plus size={18} aria-hidden="true" /></button>)}</div> : <WorkoutEmpty title="No routines yet" body="Create a routine, then this exercise will be added to it." />}<button className="secondary-button" type="button" onClick={() => setView('create')}>Create new routine</button>{message ? <p className="workout-feedback" role="status">{message}</p> : null}</Panel></div>

  if (view === 'start') return <StartWorkoutSelection routines={routines} onBack={() => setView('hub')} onStartRoutine={startRoutineSafely} onStartEmpty={startOpenSafely} />

  const headerDate = new Date(hubNow)
  const activeTotalSets = activeWorkoutDetail?.exercises.reduce((sum, item) => sum + item.sets.length, 0) ?? 0
  const activeLoggedSets = activeWorkoutDetail?.exercises.reduce((sum, item) => sum + item.sets.filter((set) => getWorkoutSetLogState(set, item.exercise.trackingTypeSnapshot ?? 'reps_only') === 'logged').length, 0) ?? 0
  const activeLoggedExercises = activeWorkoutDetail?.exercises.filter((item) => item.sets.some((set) => getWorkoutSetLogState(set, item.exercise.trackingTypeSnapshot ?? 'reps_only') === 'logged')).length ?? 0
  const plannedSets = todayRoutine?.items.reduce((sum, item) => sum + item.plannedSets, 0) ?? 0
  const weekStart = shiftLocalDateKey(todayKey, -WEEKDAY_IDS.indexOf(todayId))
  const visibleRoutines = showAllRoutines ? routines : routines.slice(0, 3)
  const visibleHistory = showAllHistory ? recentWorkouts : recentWorkouts.slice(0, 2)

  return <PageFrame className="workout-page workout-hub" data-variant="mission-stack">
    <header className="workout-hub-header">
      <div><p className="eyebrow">Training</p><h1>Workout Hub</h1></div>
      <div className="workout-hub-header-meta">
        {gamification ? <span className="workout-level-badge">Level {gamification.progression.level}</span> : null}
        <time dateTime={todayKey}>{headerDate.toLocaleDateString(undefined, { weekday: 'short' })}<br />{headerDate.toLocaleDateString(undefined, { day: '2-digit', month: 'short' })}</time>
        <button className="workout-hub-help cmd-icon-btn page-help-btn" type="button" aria-label="How Workouts Work" title="How Workouts Work" onClick={() => { playEffect('select'); setTutorialOpen(true) }}><CircleHelp size={18} aria-hidden="true" /></button>
      </div>
    </header>

    {loading ? <Panel><p>Loading your local workout data…</p></Panel> : <main className="workout-hub-stack">
      {showWorkoutLanding ? <ContextRail eyebrow="First workout" title="Choose how you want to train" actions={<><button className="primary-button" type="button" onClick={() => void chooseFirstWorkoutPath('prepare')}>Build Today</button><button className="secondary-button" type="button" onClick={() => void chooseFirstWorkoutPath('create')}>Create Routine</button></>}><p><strong>Build Today</strong> prepares a one-off session without saving a routine. <strong>Create Routine</strong> saves a reusable template. No workout or timer starts until you press Start Workout.</p></ContextRail> : null}
      <section className={`workout-mission-card${activeWorkout ? hubTimerPaused ? ' is-paused' : ' is-active' : ''}`} aria-labelledby="today-mission-title">
        <div className="workout-mission-core">
          <div className="workout-mission-top">
            <span className="workout-mission-label">{activeWorkout ? 'Workout in progress' : hasTodayPlan ? "Today's mission" : "Today's training"}</span>
            <span className={`workout-state-badge${activeWorkout ? hubTimerPaused ? ' is-paused' : ' is-active' : ''}`}>{activeWorkout ? <i aria-hidden="true" /> : null}{activeWorkout ? hubTimerPaused ? 'Paused' : 'Active' : hasTodayPlan ? `${WEEKDAY_LABELS[todayId].slice(0, 3)} · Planned` : todayAssignment.type === 'rest_day' ? 'Rest Day' : 'Open Slot'}</span>
          </div>
          <h2 id="today-mission-title">{activeWorkout?.nameSnapshot ?? todayRoutine?.routine.name ?? (hasTodayPlan ? 'Workout Day' : todayAssignment.type === 'rest_day' ? 'Recovery Day' : 'No workout planned')}</h2>
          <p>{activeWorkout ? hubTimerPaused ? 'Timer paused. Session data remains safe on this device.' : 'Live session · Continue where you left off.' : todayRoutine ? `${todayRoutine.items.length} ${todayRoutine.items.length === 1 ? 'exercise' : 'exercises'} ready to train.` : hasTodayPlan ? 'Build this planned session as you train.' : todayAssignment.type === 'rest_day' ? 'Recovery is part of the plan. Train only if you need to.' : 'Start open training now, or choose a saved routine.'}</p>
        </div>
        <div className="workout-mission-side">
          {activeWorkout ? <div className="workout-mission-stats">
            <div><span>Elapsed</span><strong>{formatDuration(getWorkoutDuration(activeWorkout, hubNow))}</strong></div>
            <div><span>Sets</span><strong>{activeLoggedSets} / {activeTotalSets}</strong></div>
            <div><span>Exercises</span><strong>{activeLoggedExercises} / {activeWorkoutDetail?.exercises.length ?? 0}</strong></div>
          </div> : todayRoutine ? <div className="workout-mission-stats is-two">
            <div><span>Exercises</span><strong>{todayRoutine.items.length}</strong></div>
            <div><span>Planned sets</span><strong>{plannedSets}</strong></div>
          </div> : null}
          <div className="workout-mission-actions">
            {activeWorkout ? <button className="primary-button" type="button" onClick={() => { playEffect('select'); setView('active') }}>Resume Workout</button> : hasTodayPlan ? <button className="primary-button" type="button" onClick={() => void startToday()}>Start Workout</button> : <button className="primary-button" type="button" onClick={() => void begin(() => startEmptyWorkout())}>Start Open Workout</button>}
            <button className="secondary-button" type="button" onClick={activeWorkout || hasTodayPlan ? openQuickLaunch : chooseRoutine}>{activeWorkout || hasTodayPlan ? 'Other Options' : 'Choose Routine'}</button>
          </div>
        </div>
        {message ? <p className="workout-feedback" role="status">{message}</p> : null}
      </section>

      <section className="workout-hub-panel workout-weekly-panel" aria-labelledby="weekly-plan-title">
        <div className="workout-section-head"><h2 id="weekly-plan-title">Weekly Plan</h2><button type="button" onClick={() => { playEffect('select'); setView('plan') }}>Edit Plan</button></div>
        <div className="workout-week-grid">{WEEKDAY_IDS.map((day, index) => {
          const assignment = weeklyPlan.days[day]
          const dateKey = shiftLocalDateKey(weekStart, index)
          const snapshot = gamification?.snapshots.find((item) => item.localDate === dateKey)
          const done = snapshot?.result === 'success'
          const rest = assignment.type === 'rest_day'
          return <div className={`workout-day-chip${day === todayId ? ' is-today' : ''}${done ? ' is-done' : ''}${rest ? ' is-rest' : ''}`} key={day}><strong>{WEEKDAY_LABELS[day].slice(0, 3)}</strong><span>{done ? '✓ ' : ''}{weeklyPlanAssignmentLabel(assignment, routines.map((entry) => entry.routine))}</span></div>
        })}</div>
      </section>

      <section className="workout-hub-panel" aria-labelledby="saved-routines-title">
        <div className="workout-section-head"><h2 id="saved-routines-title">Saved Routines</h2>{routines.length > 3 ? <button type="button" aria-expanded={showAllRoutines} onClick={() => { playEffect('select'); setShowAllRoutines((value) => !value) }}>{showAllRoutines ? 'Show Less' : 'View All'}</button> : null}</div>
        {visibleRoutines.length ? <div className="workout-hub-rows">{visibleRoutines.map(({ routine, items }) => <button type="button" key={routine.id} onClick={() => openRoutine(routine.id)}><span><strong>{routine.name}</strong><small>{items.length} {items.length === 1 ? 'exercise' : 'exercises'} · {items.reduce((sum, item) => sum + item.plannedSets, 0)} planned sets</small></span><ChevronRight size={18} aria-hidden="true" /></button>)}</div> : <WorkoutEmpty title="No routines yet" body="Create a routine, or start an open workout and build as you train." />}
        {!routines.length ? <button className="secondary-button workout-create-routine" type="button" onClick={() => setView('create')}><Plus size={17} aria-hidden="true" /> Create Routine</button> : null}
      </section>

      <button className="workout-dex-gateway" type="button" onClick={() => { playEffect('select'); setMessage(''); setView('library') }}><span className="workout-dex-icon"><BookOpen size={20} aria-hidden="true" /></span><span><strong>Exercise Dex</strong><small>804 moves · Browse exercises, favourites and categories</small></span><ChevronRight size={18} aria-hidden="true" /></button>

      <section className="workout-hub-panel" aria-labelledby="recent-workouts-title">
        <div className="workout-section-head"><h2 id="recent-workouts-title">Recent Workouts</h2>{recentWorkouts.length > 2 ? <button type="button" aria-expanded={showAllHistory} onClick={() => { playEffect('select'); setShowAllHistory((value) => !value) }}>{showAllHistory ? 'Show Less' : 'History'}</button> : null}</div>
        {visibleHistory.length ? <div className="workout-hub-rows recent-workout-list">{visibleHistory.map((summary) => <div className="recent-workout-row" key={summary.workout.id}><button className="recent-workout-view" type="button" onClick={() => { playEffect('select'); setHistoryWorkoutId(summary.workout.id); setView('history') }}><span><strong>{summary.workout.nameSnapshot}</strong><small>{new Date(summary.workout.completedAt ?? summary.workout.startedAt).toLocaleDateString()} · {summary.exerciseCount} exercises · {summary.completedSetCount} sets · {formatDuration(summary.workout.durationSeconds ?? 0)}</small></span><ChevronRight size={18} aria-hidden="true" /></button><button className="recent-workout-delete" type="button" aria-label={`Delete ${summary.workout.nameSnapshot} workout`} onClick={() => { playEffect('select'); setDeleteWorkoutSummary(summary) }}><Trash2 size={18} aria-hidden="true" /></button></div>)}</div> : <WorkoutEmpty title="No completed workouts yet" body="Finish a workout and it will appear here." />}
      </section>
    </main>}

    {quickLaunchOpen ? <div className="workout-hub-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setQuickLaunchOpen(false) }}><section className="workout-quick-sheet" role="dialog" aria-modal="true" aria-labelledby="workout-options-title">
      <header><div><p className="eyebrow">{activeWorkout ? 'Active session' : 'Quick launch'}</p><h2 id="workout-options-title">{activeWorkout ? 'Session Options' : 'Start Workout'}</h2></div><button type="button" aria-label="Close workout options" onClick={() => setQuickLaunchOpen(false)}><X aria-hidden="true" /></button></header>
      <div className="workout-quick-options">{activeWorkout ? <>
        <p>Current Workout</p>
        <button type="button" onClick={() => { playEffect('select'); setQuickLaunchOpen(false); setView('active') }}><span><strong>Resume Workout</strong><small>{activeWorkout.nameSnapshot} · {hubTimerPaused ? 'Paused' : 'In progress'}</small></span><ChevronRight aria-hidden="true" /></button>
        <button type="button" onClick={() => void toggleHubTimer()}><span><strong>{hubTimerPaused ? 'Resume Workout Timer' : 'Pause Workout Timer'}</strong><small>{hubTimerPaused ? `Timer paused at ${formatDuration(getWorkoutDuration(activeWorkout, hubNow))} · Session safe` : 'Pause timer without ending session'}</small></span><ChevronRight aria-hidden="true" /></button>
        <p className="is-danger">Start Something Else</p>
        <button className="is-destructive" type="button" onClick={() => requestReplacement({ type: 'choose-routine' })}><span><strong>Discard Current &amp; Choose Routine</strong><small>Abandons active session and opens routine picker</small></span><ChevronRight aria-hidden="true" /></button>
        <button className="is-destructive" type="button" onClick={() => requestReplacement({ type: 'open' })}><span><strong>Discard Current &amp; Open Workout</strong><small>Abandons active session and starts empty workout</small></span><ChevronRight aria-hidden="true" /></button>
      </> : <>
        {hasTodayPlan ? <button type="button" onClick={() => { setQuickLaunchOpen(false); void startToday() }}><span><strong>Today's Plan</strong><small>{todayRoutine?.routine.name ?? 'Workout Day'}{todayRoutine ? ` · ${todayRoutine.items.length} exercises` : ''}</small></span><ChevronRight aria-hidden="true" /></button> : null}
        <button type="button" onClick={chooseRoutine}><span><strong>Choose Routine</strong><small>Start from {routines.length} saved {routines.length === 1 ? 'routine' : 'routines'}</small></span><ChevronRight aria-hidden="true" /></button>
        <button type="button" onClick={() => { setQuickLaunchOpen(false); void begin(() => startEmptyWorkout()) }}><span><strong>Open Workout</strong><small>Build session as you train</small></span><ChevronRight aria-hidden="true" /></button>
      </>}</div>
    </section></div> : null}

    {routineChooserOpen ? <div className="workout-hub-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setRoutineChooserOpen(false) }}><section className="workout-quick-sheet" role="dialog" aria-modal="true" aria-labelledby="routine-chooser-title">
      <header><div><p className="eyebrow">Quick launch</p><h2 id="routine-chooser-title">Choose Routine</h2></div><button type="button" aria-label="Close routine chooser" onClick={() => setRoutineChooserOpen(false)}><X aria-hidden="true" /></button></header>
      {routines.length ? <div className="workout-quick-options">{routines.map(({ routine, items }) => <button type="button" key={routine.id} onClick={() => { setRoutineChooserOpen(false); if (activeWorkoutId) requestReplacement({ type: 'routine', routineId: routine.id, routineName: routine.name }); else void begin(() => startWorkoutFromRoutine(routine.id)) }}><span><strong>{routine.name}</strong><small>{items.length} exercises · {items.reduce((sum, item) => sum + item.plannedSets, 0)} planned sets</small></span><ChevronRight aria-hidden="true" /></button>)}</div> : <WorkoutEmpty title="No routines yet" body="Create a routine first, or start an open workout." />}
    </section></div> : null}

    {replacementIntent ? <div className="workout-hub-backdrop" role="presentation"><section className="workout-replace-dialog" role="alertdialog" aria-modal="true" aria-labelledby="replace-workout-title">
      <p className="eyebrow">Discard active workout?</p><h2 id="replace-workout-title">Start Something Else</h2><p>Discard “{activeWorkout?.nameSnapshot}”? In-progress sets and duration will be lost. This cannot be undone.</p>
      <div><button className="secondary-button" type="button" autoFocus onClick={() => setReplacementIntent(undefined)}>Keep Current Workout</button><button className="danger-button" type="button" onClick={() => void confirmReplacement()}>Discard &amp; {replacementIntent.type === 'choose-routine' ? 'Choose Routine' : replacementIntent.type === 'open' ? 'Start Open Workout' : replacementIntent.type === 'today' ? "Start Today's Plan" : `Start ${replacementIntent.routineName}`}</button></div>
    </section></div> : null}

    {deleteWorkoutSummary ? <WorkoutDeleteDialog workoutId={deleteWorkoutSummary.workout.id} workoutName={deleteWorkoutSummary.workout.nameSnapshot} onCancel={() => setDeleteWorkoutSummary(undefined)} onDeleted={() => { setRecentWorkouts((current) => current.filter((entry) => entry.workout.id !== deleteWorkoutSummary.workout.id)); setDeleteWorkoutSummary(undefined); void refresh() }} /> : null}
    {tutorialOpen ? <GuideDialog eyebrow="How Workouts Work" steps={workoutTutorialSteps} onClose={closeTutorial} /> : null}
  </PageFrame>
}

function FlowHeading({ title, onBack }: { title: string; onBack: () => void }) { const { playEffect } = useAudio(); return <div className="workout-flow-heading"><button className="dex-back-button" type="button" onClick={() => { playEffect('select'); onBack() }} aria-label="Back"><ArrowLeft size={20} aria-hidden="true" /></button><div><p className="eyebrow">Workout</p><h2>{title}</h2></div></div> }
function WorkoutEmpty({ title, body }: { title: string; body: string }) { return <div className="workout-empty"><strong>{title}</strong><p>{body}</p></div> }

function PreparedWorkout({ exercises, onBack, onAdd, onRemove, onStart }: { exercises: readonly Exercise[]; onBack: () => void; onAdd: () => void; onRemove: (id: string) => void; onStart: () => void }) {
  const { playEffect } = useAudio()
  return <div className="page-stack workout-page"><Panel className="workout-flow-panel"><FlowHeading title="Build Today" onBack={onBack} /><p>Prepare a one-off session. This list is temporary until you explicitly start the workout.</p>{exercises.length ? <ol className="routine-exercise-list">{exercises.map((exercise) => <li key={exercise.id}><div className="routine-exercise-copy"><strong>{exercise.name}</strong><small>{exercise.category} · 3 starting sets</small></div><button className="secondary-button" type="button" onClick={() => { playEffect('select'); onRemove(exercise.id) }} aria-label={`Remove ${exercise.name}`}><Trash2 size={16} aria-hidden="true" /></button></li>)}</ol> : <WorkoutEmpty title="No exercises selected" body="Open Exercise Dex and choose the movements for today." />}<button className="secondary-button" type="button" onClick={() => { playEffect('select'); onAdd() }}><Plus size={17} aria-hidden="true" /> Add from Exercise Dex</button><button className="primary-button" type="button" disabled={!exercises.length} onClick={onStart}><Dumbbell size={17} aria-hidden="true" /> Start Workout</button></Panel></div>
}

function StartWorkoutSelection({ routines, onBack, onStartRoutine, onStartEmpty }: { routines: readonly RoutineWithItems[]; onBack: () => void; onStartRoutine: (id: string) => void; onStartEmpty: () => void }) {
  return <div className="page-stack workout-page"><Panel className="workout-flow-panel"><FlowHeading title="Start workout" onBack={onBack} /><p className="eyebrow">From a routine</p>{routines.length ? <div className="routine-choice-list">{routines.map((entry) => <button type="button" key={entry.routine.id} onClick={() => onStartRoutine(entry.routine.id)}><span><strong>{entry.routine.name}</strong><small>{entry.items.length} exercises · {entry.items.reduce((sum, item) => sum + item.plannedSets, 0)} planned sets</small></span><ChevronRight size={18} aria-hidden="true" /></button>)}</div> : <WorkoutEmpty title="No routines yet" body="You can still start an empty workout and add exercises as you train." />}<button className="primary-button" type="button" onClick={onStartEmpty}>Start empty workout</button></Panel></div>
}

function CreateRoutine({ onCancel, onCreated }: { onCancel: () => void; onCreated: (routine: WorkoutRoutine) => void | Promise<void> }) {
  const [name, setName] = useState(''); const [error, setError] = useState('')
  return <div className="page-stack workout-page"><Panel className="workout-flow-panel"><FlowHeading title="Create routine" onBack={onCancel} /><form className="routine-form" onSubmit={(event) => { event.preventDefault(); void createRoutine(name).then(onCreated).catch((reason: unknown) => setError(reason instanceof Error ? reason.message : 'Routine could not be created.')) }}><label><span>Routine name</span><input value={name} maxLength={80} autoFocus onChange={(event) => setName(event.target.value)} placeholder="Push Day" /></label>{error ? <p className="form-error" role="alert">{error}</p> : null}<div className="routine-form-actions"><button className="secondary-button" type="button" onClick={onCancel}>Cancel</button><button className="primary-button" type="submit">Create</button></div></form></Panel></div>
}

function RoutineEditor({ entry, replacementOptions, message, onBack, onChanged, onAddExercise, onStart, onDeleted }: { entry: RoutineWithItems; replacementOptions: RoutineWithItems[]; message: string; onBack: () => void; onChanged: () => Promise<void>; onAddExercise: () => void; onStart: () => void; onDeleted: () => Promise<void> }) {
  const [name, setName] = useState(entry.routine.name); const [confirmDelete, setConfirmDelete] = useState(false); const [confirmPlanReset, setConfirmPlanReset] = useState(false); const [scheduledDays, setScheduledDays] = useState<string[]>([]); const [replacementId, setReplacementId] = useState(''); const [pendingReplacementId, setPendingReplacementId] = useState<string>(); const [feedback, setFeedback] = useState(message)
  async function run(action: () => Promise<unknown>, success?: string) { try { await action(); await onChanged(); if (success) setFeedback(success) } catch (error) { setFeedback(error instanceof Error ? error.message : 'Routine could not be updated.') } }
  async function removeRoutine(forceReset = false, replacementRoutineId?: string) { const resolvedReplacementId = forceReset && replacementRoutineId === undefined ? pendingReplacementId : replacementRoutineId; try { await deleteRoutine(entry.routine.id, { confirmPlanReset: forceReset, replacementRoutineId: resolvedReplacementId }); await onDeleted() } catch (error) { if (error instanceof PlanChangeConfirmationRequiredError) { setPendingReplacementId(resolvedReplacementId); setConfirmPlanReset(true) } else setFeedback(error instanceof Error ? error.message : 'Routine could not be deleted.') } }
  return <div className="page-stack workout-page"><Panel className="workout-flow-panel routine-editor"><FlowHeading title={entry.routine.name} onBack={onBack} /><button className="secondary-button routine-top-add" type="button" onClick={onAddExercise}><Plus size={17} aria-hidden="true" /> Add exercise</button><form className="routine-rename" onSubmit={(event) => { event.preventDefault(); void run(() => renameRoutine(entry.routine, name), 'Routine renamed.') }}><label><span className="visually-hidden">Routine name</span><input value={name} maxLength={80} onChange={(event) => setName(event.target.value)} /></label><button className="secondary-button" type="submit">Rename</button></form>{entry.items.length ? <ol className="routine-exercise-list">{entry.items.map((item, index) => <RoutineItemRow key={item.id} item={item} first={index === 0} last={index === entry.items.length - 1} onSets={(sets) => run(() => updateRoutineItemSets(entry.routine.id, item.id, sets))} onMove={(direction) => run(() => reorderRoutineItem(entry.routine.id, item.id, direction))} onRemove={() => run(() => deleteRoutineItem(entry.routine.id, item.id), 'Exercise removed from routine.')} />)}</ol> : <WorkoutEmpty title="No exercises yet" body="Add exercises from the existing Exercise Dex picker." />}<button className="secondary-button" type="button" onClick={onAddExercise}><Plus size={17} aria-hidden="true" /> Add exercise</button><button className="primary-button" type="button" onClick={onStart}><Dumbbell size={17} aria-hidden="true" /> Start workout</button>{feedback ? <p className="workout-feedback" role="status">{feedback}</p> : null}{confirmDelete ? <div className="routine-delete-confirm"><p>Delete this routine template? Completed workout snapshots will remain untouched.</p>{scheduledDays.length ? <><p><strong>Active plan affected:</strong> this routine is scheduled on {scheduledDays.join(', ')}. Continuing is treated as a material Plan Change.</p>{replacementOptions.length ? <div className="routine-replacement"><label><span>Replace Routine</span><select value={replacementId} onChange={(event) => setReplacementId(event.target.value)}><option value="">Choose a saved routine</option>{replacementOptions.map((candidate) => <option value={candidate.routine.id} key={candidate.routine.id}>{candidate.routine.name}</option>)}</select></label><button className="secondary-button" type="button" disabled={!replacementId} onClick={() => void removeRoutine(false, replacementId)}>Replace Routine &amp; Delete</button></div> : null}</> : null}<button className="secondary-button" type="button" onClick={() => setConfirmDelete(false)}>Keep routine</button><button className="danger-button" type="button" onClick={() => void removeRoutine(false, undefined)}>Continue as Plan Change</button></div> : <button className="text-button routine-delete-button" type="button" onClick={() => { setConfirmDelete(true); void routineScheduledDays(entry.routine.id).then(setScheduledDays) }}><Trash2 size={16} aria-hidden="true" /> Delete routine</button>}</Panel>{confirmPlanReset ? <div className="workout-finish-backdrop"><section className="panel plan-change-dialog" role="alertdialog" aria-modal="true" aria-labelledby="delete-plan-reset-title"><p className="eyebrow">Plan commitment</p><h2 id="delete-plan-reset-title">Delete &amp; reset streak?</h2><p>Your protected Plan Change has already been used. Deleting this scheduled routine will update the Weekly Plan and reset only your current Plan Streak.</p><button className="secondary-button" type="button" onClick={() => setConfirmPlanReset(false)}>Cancel</button><button className="danger-button" type="button" onClick={() => void removeRoutine(true)}>Delete &amp; Reset Streak</button></section></div> : null}</div>
}

function RoutineItemRow({ item, first, last, onSets, onMove, onRemove }: { item: RoutineExercise; first: boolean; last: boolean; onSets: (sets: number) => Promise<void>; onMove: (direction: -1 | 1) => Promise<void>; onRemove: () => Promise<void> }) {
  return <li><div className="routine-exercise-copy"><strong>{item.exerciseNameSnapshot}</strong><label><span>Planned sets</span><input type="number" min={MIN_PLANNED_SETS} max={MAX_PLANNED_SETS} value={item.plannedSets} onChange={(event) => void onSets(Number(event.target.value))} /></label></div><div className="routine-order-controls"><button type="button" disabled={first} onClick={() => void onMove(-1)} aria-label={`Move ${item.exerciseNameSnapshot} up`}><ArrowUp size={17} aria-hidden="true" /></button><button type="button" disabled={last} onClick={() => void onMove(1)} aria-label={`Move ${item.exerciseNameSnapshot} down`}><ArrowDown size={17} aria-hidden="true" /></button><button type="button" onClick={() => void onRemove()} aria-label={`Remove ${item.exerciseNameSnapshot}`}><Trash2 size={17} aria-hidden="true" /></button></div></li>
}
