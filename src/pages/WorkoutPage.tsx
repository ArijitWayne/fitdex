import { ArrowLeft, BookOpen, ChevronRight, CircleHelp, Dumbbell, GripVertical, Pencil, Plus, Trash2, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Panel } from '../components/ui/Panel'
import { RetroLoader } from '../components/ui/RetroLoader'
import { ContextRail } from '../components/ui/ContextRail'
import { CommandPageFrame } from '../components/layout/CommandPageFrame'
import { CollapsibleModule } from '../components/ui/CollapsibleModule'
import type { Exercise, PlanDaySnapshot, RoutineExercise, WeekdayId, WeeklyPlanFeedback, WorkoutRoutine } from '../data/models'
import { ExerciseDex } from '../features/exerciseDex/ExerciseDex'
import { ensureBuiltInExercises } from '../features/exerciseDex/seedExercises'
import { ActiveWorkoutView, CompletedWorkoutDetail, WorkoutDeleteDialog } from '../features/workout/WorkoutSessionViews'
import { addExercisesToRoutine, createRoutine, deleteRoutine, loadRoutines, routineScheduledDays, saveRoutineEdits, type RoutineWithItems } from '../features/workout/routineRepository'
import { addExerciseToRoutineItems, MAX_PLANNED_SETS, MIN_PLANNED_SETS } from '../features/workout/routineModel'
import { formatDuration, getWorkoutDuration, getWorkoutSetLogState, isWorkoutTimerPaused, shouldReplaceActiveWorkout } from '../features/workout/workoutModel'
import { ActiveWorkoutExistsError, discardWorkout, getActiveWorkout, listRecentWorkouts, pauseWorkout, resumeWorkout, startEmptyWorkout, startPreparedWorkout, startWorkoutFromRoutine, type WorkoutDetail, type WorkoutSummary } from '../features/workout/workoutRepository'
import { GuideDialog } from '../features/help/GuideDialog'
import { markTutorialSeen } from '../features/help/tutorialPreferences'
import { workoutTutorialSteps } from '../features/help/tutorialSteps'
import { WeeklyPlanDayTile, WeeklyPlanEditor, WeeklyPlanFeedbackDialog, WEEKDAY_INITIALS, type WeeklyTileStateKey } from '../features/workout/WeeklyPlanViews'
import { emptyWeeklyPlanDays, loadWeeklyPlan, WEEKDAY_LABELS, weekdayIdForLocalDateKey, weeklyPlanAssignmentLabel, type WeeklyPlan } from '../features/workout/weeklyPlan'
import { acknowledgeWeeklyPlanFeedback, listWeeklyPlanFeedback, resolveWeeklyPlanFeedback } from '../features/workout/weeklyPlanFeedback'
import { useAudio } from '../features/audio/useAudio'
import { useBackNavigation } from '../features/navigation/useBackNavigation'
import { loadGamificationDashboard, type GamificationDashboard } from '../features/gamification/gamificationRepository'
import { WEEKDAY_IDS } from '../data/models'
import { getLocalDateKey, shiftLocalDateKey } from '../utils/localDate'
import { createId } from '../utils/createId'
import { acknowledgeFirstUse, loadFirstUseGuidance } from '../features/help/firstUseGuidance'

type WorkoutView = 'hub' | 'library' | 'create' | 'routine' | 'picker' | 'prepare' | 'prepare-picker' | 'start' | 'add-to-routine' | 'active' | 'history' | 'plan' | 'start-empty' | 'start-routine'
export type WorkoutEntryView = Extract<WorkoutView, 'hub' | 'library' | 'start' | 'active' | 'create' | 'plan' | 'start-empty' | 'start-routine' | 'history'>
type ReplacementIntent = { type: 'choose-routine' } | { type: 'open' } | { type: 'today' } | { type: 'routine'; routineId: string; routineName: string }
type RoutineDraft = { routineId: string; name: string; items: RoutineExercise[] }

export function WorkoutPage({ initialView = 'hub', initialRoutineId, initialWorkoutId }: { initialView?: WorkoutEntryView; initialRoutineId?: string; initialWorkoutId?: string }) {
  const { playEffect } = useAudio()
  const [view, setView] = useState<WorkoutView>(initialView)
  const [routines, setRoutines] = useState<RoutineWithItems[]>([])
  const [recentWorkouts, setRecentWorkouts] = useState<WorkoutSummary[]>([])
  const [activeWorkoutDetail, setActiveWorkoutDetail] = useState<WorkoutDetail>()
  const [historyWorkoutId, setHistoryWorkoutId] = useState<string | undefined>(initialWorkoutId)
  const [deleteWorkoutSummary, setDeleteWorkoutSummary] = useState<WorkoutSummary>()
  const [selectedRoutineId, setSelectedRoutineId] = useState<string>()
  const [routineDraft, setRoutineDraft] = useState<RoutineDraft>()
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
  const [selectedPlanDay, setSelectedPlanDay] = useState<WeekdayId>()
  const [planFeedback, setPlanFeedback] = useState<WeeklyPlanFeedback>()
  const overlayOpen = Boolean(planFeedback) || Boolean(replacementIntent) || routineChooserOpen || quickLaunchOpen
  const navigateBack = useBackNavigation('workout-subview', overlayOpen || view !== 'hub', () => {
    if (planFeedback) void keepPlanFeedback()
    else if (replacementIntent) setReplacementIntent(undefined)
    else if (routineChooserOpen) setRoutineChooserOpen(false)
    else if (quickLaunchOpen) setQuickLaunchOpen(false)
    else { void refresh(); setView('hub') }
  }, overlayOpen ? 20 : 10)

  async function refresh() {
    await ensureBuiltInExercises()
    const nextGamification = await loadGamificationDashboard()
    const [nextRoutines, recent, active, nextPlan, pendingFeedback] = await Promise.all([loadRoutines(), listRecentWorkouts(), getActiveWorkout(), loadWeeklyPlan(), listWeeklyPlanFeedback()])
    setRoutines(nextRoutines)
    setRecentWorkouts(recent)
    setActiveWorkoutDetail(active)
    setWeeklyPlan(nextPlan)
    setGamification(nextGamification)
    setPlanFeedback(pendingFeedback[0])
    setLoading(false)
  }

  async function viewFeedbackPlan() {
    if (!planFeedback) return
    await acknowledgeWeeklyPlanFeedback(planFeedback.id)
    setPlanFeedback(undefined)
    await refresh()
    setView('plan')
  }

  async function keepPlanFeedback() {
    if (!planFeedback) return
    await resolveWeeklyPlanFeedback(planFeedback.id, 'keep')
    setPlanFeedback(undefined)
    await refresh()
  }

  async function updatePlanFromFeedback() {
    if (!planFeedback) return
    try {
      await resolveWeeklyPlanFeedback(planFeedback.id, 'update')
      playEffect('add')
      setPlanFeedback(undefined)
      await refresh()
      setView('hub')
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Weekly Plan could not be updated.')
    }
  }

  const feedbackDialog = planFeedback ? <WeeklyPlanFeedbackDialog feedback={planFeedback} onViewPlan={() => void viewFeedbackPlan()} onDismiss={() => void keepPlanFeedback()} onUpdate={() => void updatePlanFromFeedback()} /> : null

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

  function openRoutine(routineId: string) { playEffect('select'); setSelectedRoutineId(routineId); setRoutineDraft(undefined); setMessage(''); setView('routine') }

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
  function startRoutineSafely(routineId: string, savedRoutineName?: string) {
    const routineName = savedRoutineName ?? routines.find((entry) => entry.routine.id === routineId)?.routine.name ?? 'Routine'
    if (activeWorkout && !shouldReplaceActiveWorkout(activeWorkout, routineId)) { setView('active'); return }
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
  if (view === 'history' && historyWorkoutId) return <><CompletedWorkoutDetail workoutId={historyWorkoutId} onBack={() => { void navigateBack() }} onDeleted={() => { setRecentWorkouts((current) => current.filter((entry) => entry.workout.id !== historyWorkoutId)); setHistoryWorkoutId(undefined); setView('hub'); void refresh() }} />{feedbackDialog}</>
  if (view === 'plan') return <WeeklyPlanEditor plan={weeklyPlan} routines={routines} onChanged={setWeeklyPlan} onBack={() => setView('hub')} onCreateRoutine={() => setView('create')} />

  if (view === 'prepare-picker') return <div className="page-stack workout-page"><ExerciseDex picker={{
    title: 'Build today’s workout', targetLabel: 'workout preparation', existingExerciseIds: new Set(preparedExercises.map((exercise) => exercise.id)),
    async onAddExercise(exercise) { setPreparedExercises((current) => [...current, exercise]); playEffect('add') },
    async onRemoveExercise(exercise) { setPreparedExercises((current) => current.filter((item) => item.id !== exercise.id)); playEffect('select') },
    onDone() { playEffect('select'); setView('prepare') },
  }} /></div>

  if (view === 'prepare') return <PreparedWorkout exercises={preparedExercises} onBack={() => setView('hub')} onAdd={() => setView('prepare-picker')} onRemove={(id) => setPreparedExercises((current) => current.filter((exercise) => exercise.id !== id))} onStart={() => void begin(() => startPreparedWorkout(preparedExercises))} />

  if (view === 'library') return <div className="page-stack workout-page"><ExerciseDex onBackToWorkoutHub={() => { playEffect('select'); setView('hub') }} onAddToRoutine={(exercise) => { setPendingExercise(exercise); setMessage(''); setView('add-to-routine') }} />{message ? <p className="workout-feedback" role="status">{message}</p> : null}</div>

  if (view === 'picker' && selectedRoutine) {
    const draft = routineDraft?.routineId === selectedRoutine.routine.id ? routineDraft : { routineId: selectedRoutine.routine.id, name: selectedRoutine.routine.name, items: selectedRoutine.items }
    const existingExerciseIds = new Set(draft.items.map((item) => item.exerciseId))
    return <div className="page-stack workout-page"><ExerciseDex picker={{
      title: `Add exercises to ${selectedRoutine.routine.name}`,
      targetLabel: 'routine',
      existingExerciseIds,
      async onAddExercise(exercise) {
        const items = addExerciseToRoutineItems(draft.items, selectedRoutine.routine.id, exercise, new Date().toISOString(), `routine-exercise:${createId()}`)
        setRoutineDraft({ ...draft, items }); playEffect('add')
      },
      async onRemoveExercise(exercise) {
        const item = draft.items.find((candidate) => candidate.exerciseId === exercise.id)
        if (!item) return
        setRoutineDraft({ ...draft, items: draft.items.filter((candidate) => candidate.id !== item.id) })
      },
      onDone() { setView('routine') },
    }} /></div>
  }

  if (view === 'routine' && selectedRoutine) return <RoutineEditor entry={selectedRoutine} draft={routineDraft?.routineId === selectedRoutine.routine.id ? routineDraft : undefined} replacementOptions={routines.filter((candidate) => candidate.routine.id !== selectedRoutine.routine.id)} message={message} onBack={() => { setRoutineDraft(undefined); setView('hub') }} onChanged={refresh} onDraftChange={setRoutineDraft} onCommitted={() => setRoutineDraft(undefined)} onAddExercise={() => { setMessage(''); setView('picker') }} onStart={(savedRoutineName) => startRoutineSafely(selectedRoutine.routine.id, savedRoutineName)} onDeleted={async () => { setRoutineDraft(undefined); setSelectedRoutineId(undefined); await refresh(); setView('hub') }} />

  if (view === 'create') return <CreateRoutine onCancel={() => setView(pendingExercise ? 'add-to-routine' : 'hub')} onCreated={async (routine) => { playEffect('add'); if (pendingExercise) await addPendingExercise(routine.id); else { await refresh(); setSelectedRoutineId(routine.id); setView('routine') } }} />

  if (view === 'add-to-routine' && pendingExercise) return <div className="page-stack workout-page"><Panel className="workout-flow-panel"><FlowHeading title={`Add ${pendingExercise.name} to`} onBack={() => setView('library')} />{routines.length ? <div className="routine-choice-list">{routines.map(({ routine, items }) => <button type="button" key={routine.id} onClick={() => void addPendingExercise(routine.id)}><span><strong>{routine.name}</strong><small>{items.length} exercises</small></span><Plus size={18} aria-hidden="true" /></button>)}</div> : <WorkoutEmpty title="No routines yet" body="Create a routine, then this exercise will be added to it." />}<button className="secondary-button" type="button" onClick={() => setView('create')}>Create new routine</button>{message ? <p className="workout-feedback" role="status">{message}</p> : null}</Panel></div>

  if (view === 'start') return <StartWorkoutSelection routines={routines} onBack={() => setView('hub')} onStartRoutine={startRoutineSafely} onStartEmpty={startOpenSafely} />

  const activeTotalSets = activeWorkoutDetail?.exercises.reduce((sum, item) => sum + item.sets.length, 0) ?? 0
  const activeLoggedSets = activeWorkoutDetail?.exercises.reduce((sum, item) => sum + item.sets.filter((set) => getWorkoutSetLogState(set, item.exercise.trackingTypeSnapshot ?? 'reps_only') === 'logged').length, 0) ?? 0
  const activeLoggedExercises = activeWorkoutDetail?.exercises.filter((item) => item.sets.some((set) => getWorkoutSetLogState(set, item.exercise.trackingTypeSnapshot ?? 'reps_only') === 'logged')).length ?? 0
  const plannedSets = todayRoutine?.items.reduce((sum, item) => sum + item.plannedSets, 0) ?? 0
  const weekStart = shiftLocalDateKey(todayKey, -WEEKDAY_IDS.indexOf(todayId))
  const visibleRoutines = showAllRoutines ? routines : routines.slice(0, 3)
  const visibleHistory = showAllHistory ? recentWorkouts : recentWorkouts.slice(0, 2)

  const routinesSummary = routines.length
    ? `${routines.map((r) => r.routine.name).slice(0, 3).join(', ')}${routines.length > 3 ? '…' : ''}`
    : 'No saved routines'
  const historySummary = recentWorkouts.length
    ? `Last: ${recentWorkouts[0].workout.nameSnapshot} · ${new Date(recentWorkouts[0].workout.completedAt ?? recentWorkouts[0].workout.startedAt).toLocaleDateString(undefined, { day: '2-digit', month: 'short' })}`
    : 'No completed workouts'

  return <CommandPageFrame className="workout-page workout-hub" terminalTitle="FITDEX // TRAINING TERMINAL" headerActions={<button className="workout-hub-help cmd-icon-btn page-help-btn" type="button" aria-label="How Workouts Work" title="How Workouts Work" onClick={() => { playEffect('select'); setTutorialOpen(true) }}><CircleHelp size={16} aria-hidden="true" /></button>}>
    {loading ? <Panel><RetroLoader label="LOADING WORKOUT DATA..." /></Panel> : <main className="workout-hub-stack" data-variant="mission-stack">
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

      <section className="workout-weekly-panel" aria-labelledby="weekly-plan-title">
        <div className="workout-section-head"><h2 id="weekly-plan-title">Weekly Plan</h2><button className="text-button" type="button" onClick={() => { playEffect('select'); setView('plan') }}>Edit Plan</button></div>
        <div className="workout-week-grid">{WEEKDAY_IDS.map((day, index) => {
          const assignment = weeklyPlan.days[day]
          const dateKey = shiftLocalDateKey(weekStart, index)
          const snapshot = gamification?.snapshots.find((item) => item.localDate === dateKey)
          const isToday = day === todayId
          const isPast = dateKey < todayKey

          let stateKey: WeeklyTileStateKey = 'noplan'
          if (snapshot?.result === 'success') stateKey = 'done'
          else if (snapshot?.result === 'frozen') stateKey = 'freeze'
          else if (snapshot?.result === 'missed') stateKey = 'miss'
          else if (snapshot?.result === 'rest' || snapshot?.result === 'paused') stateKey = 'rest'
          else if (snapshot?.result === 'no_plan') stateKey = 'noplan'
          else if (assignment.type === 'rest_day') stateKey = 'rest'
          else if (assignment.type === 'no_plan') stateKey = 'noplan'
          else if (assignment.type === 'routine' || assignment.type === 'workout_day') {
            stateKey = isPast ? 'miss' : 'plan'
          }

          const initial = WEEKDAY_INITIALS[day]
          const routineLabel = weeklyPlanAssignmentLabel(assignment, routines.map((entry) => entry.routine))
          const stateDesc = stateKey === 'done' ? 'completed'
            : stateKey === 'freeze' ? 'missed, streak freeze used'
            : stateKey === 'miss' ? 'missed'
            : stateKey === 'plan' ? 'planned'
            : stateKey === 'rest' ? 'rest day'
            : 'no plan'
          const accessibleLabel = `${WEEKDAY_LABELS[day]}${isToday ? ' (Today)' : ''}: ${routineLabel}, ${stateDesc}`

          return (
            <WeeklyPlanDayTile
              key={day}
              day={day}
              initial={initial}
              stateKey={stateKey}
              today={isToday}
              selected={selectedPlanDay === day}
              accessibleLabel={accessibleLabel}
              onClick={() => {
                playEffect('select')
                setSelectedPlanDay((curr?: WeekdayId) => curr === day ? undefined : day)
              }}
            />
          )
        })}</div>
        {selectedPlanDay ? (
          <div className="workout-plan-detail-card" role="region" aria-label="Selected day plan details">
            <div className="workout-plan-detail-header">
              <strong>{WEEKDAY_LABELS[selectedPlanDay]}{selectedPlanDay === todayId ? ' · Today' : ''}</strong>
              <small>{weeklyPlanAssignmentLabel(weeklyPlan.days[selectedPlanDay], routines.map((entry) => entry.routine))}</small>
            </div>
            <p className="workout-plan-detail-status">
              {getPlanDayStatusSummary(selectedPlanDay, weeklyPlan.days[selectedPlanDay], shiftLocalDateKey(weekStart, WEEKDAY_IDS.indexOf(selectedPlanDay)), todayKey, gamification?.snapshots.find((item) => item.localDate === shiftLocalDateKey(weekStart, WEEKDAY_IDS.indexOf(selectedPlanDay))))}
            </p>
          </div>
        ) : null}
      </section>

      <CollapsibleModule
        id="workout-routines"
        titleId="saved-routines-title"
        title="Saved Routines"
        badge={`${routines.length} ${routines.length === 1 ? 'Routine' : 'Routines'}`}
        summary={routinesSummary}
        defaultExpanded={false}
      >
        {visibleRoutines.length ? (
          <div className="workout-hub-rows">
            {visibleRoutines.map(({ routine, items }) => (
              <button type="button" key={routine.id} onClick={() => openRoutine(routine.id)}>
                <span>
                  <strong>{routine.name}</strong>
                  <small>
                    {items.length} {items.length === 1 ? 'exercise' : 'exercises'} ·{' '}
                    {items.reduce((sum, item) => sum + item.plannedSets, 0)} planned sets
                  </small>
                </span>
                <ChevronRight size={18} aria-hidden="true" />
              </button>
            ))}
          </div>
        ) : (
          <WorkoutEmpty title="No routines yet" body="Create a routine, or start an open workout and build as you train." />
        )}
        {routines.length > 3 ? (
          <button
            className="text-button"
            type="button"
            style={{ fontSize: '0.74rem', marginTop: '4px' }}
            onClick={() => {
              playEffect('select')
              setShowAllRoutines((value) => !value)
            }}
          >
            {showAllRoutines ? 'Show Less Routines' : `View All (${routines.length})`}
          </button>
        ) : null}
        <button
          className="secondary-button workout-create-routine"
          data-routine-add="routine-top-add"
          type="button"
          onClick={() => {
            playEffect('select')
            setView('create')
          }}
        >
          <Plus size={17} aria-hidden="true" /> Create Routine
        </button>
      </CollapsibleModule>

      <button className="workout-dex-gateway" type="button" onClick={() => { playEffect('select'); setMessage(''); setView('library') }}><span className="workout-dex-icon"><BookOpen size={20} aria-hidden="true" /></span><span><strong>Exercise Dex</strong><small>802 moves · Browse exercises, favourites and categories</small></span><ChevronRight size={18} aria-hidden="true" /></button>

      <CollapsibleModule
        id="workout-recent"
        titleId="recent-workouts-title"
        title="Recent Workouts"
        badge={`${recentWorkouts.length} Recent`}
        summary={historySummary}
        defaultExpanded={false}
      >
        {visibleHistory.length ? (
          <div className="workout-hub-rows recent-workout-list">
            {visibleHistory.map((summary) => (
              <div className="recent-workout-row" key={summary.workout.id}>
                <button
                  className="recent-workout-view"
                  type="button"
                  onClick={() => {
                    playEffect('select')
                    setHistoryWorkoutId(summary.workout.id)
                    setView('history')
                  }}
                >
                  <span>
                    <strong>{summary.workout.nameSnapshot}</strong>
                    <small>
                      {new Date(summary.workout.completedAt ?? summary.workout.startedAt).toLocaleDateString()} ·{' '}
                      {summary.exerciseCount} exercises · {summary.completedSetCount} sets ·{' '}
                      {formatDuration(summary.workout.durationSeconds ?? 0)}
                    </small>
                  </span>
                  <ChevronRight size={18} aria-hidden="true" />
                </button>
                <button
                  className="recent-workout-delete"
                  type="button"
                  aria-label={`Delete ${summary.workout.nameSnapshot} workout`}
                  onClick={() => {
                    playEffect('select')
                    setDeleteWorkoutSummary(summary)
                  }}
                >
                  <Trash2 size={18} aria-hidden="true" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <WorkoutEmpty title="No completed workouts yet" body="Finish a workout and it will appear here." />
        )}
        {recentWorkouts.length > 2 ? (
          <button
            className="text-button"
            type="button"
            style={{ fontSize: '0.74rem', marginTop: '4px' }}
            onClick={() => {
              playEffect('select')
              setShowAllHistory((value) => !value)
            }}
          >
            {showAllHistory ? 'Show Less History' : `View Full History (${recentWorkouts.length})`}
          </button>
        ) : null}
      </CollapsibleModule>
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
      <p className="eyebrow">Active workout</p><h2 id="replace-workout-title">Discard active workout?</h2><p>Start {replacementIntent.type === 'routine' ? replacementIntent.routineName : replacementIntent.type === 'choose-routine' ? 'another routine' : replacementIntent.type === 'open' ? 'an open workout' : "today's plan"}? Your current {activeWorkout?.nameSnapshot} session, in-progress sets, and duration will be discarded. Saved routines stay unchanged.</p>
      <div><button className="secondary-button" type="button" autoFocus onClick={() => setReplacementIntent(undefined)}>Keep Current Workout</button><button className="danger-button" type="button" onClick={() => void confirmReplacement()}>Discard &amp; {replacementIntent.type === 'choose-routine' ? 'Choose Routine' : replacementIntent.type === 'open' ? 'Start Open Workout' : replacementIntent.type === 'today' ? "Start Today's Plan" : `Start ${replacementIntent.routineName}`}</button></div>
    </section></div> : null}

    {deleteWorkoutSummary ? <WorkoutDeleteDialog workoutId={deleteWorkoutSummary.workout.id} workoutName={deleteWorkoutSummary.workout.nameSnapshot} onCancel={() => setDeleteWorkoutSummary(undefined)} onDeleted={() => { setRecentWorkouts((current) => current.filter((entry) => entry.workout.id !== deleteWorkoutSummary.workout.id)); setDeleteWorkoutSummary(undefined); void refresh() }} /> : null}
    {tutorialOpen ? <GuideDialog eyebrow="How Workouts Work" steps={workoutTutorialSteps} onClose={closeTutorial} /> : null}
    {feedbackDialog}
  </CommandPageFrame>
}

function FlowHeading({ title, onBack }: { title: string; onBack: () => void }) { const { playEffect } = useAudio(); return <div className="workout-flow-heading"><button className="dex-back-button" type="button" onClick={() => { playEffect('select'); onBack() }} aria-label="Back"><ArrowLeft size={20} aria-hidden="true" /></button><div><p className="eyebrow">Workout</p><h2>{title}</h2></div></div> }
function WorkoutEmpty({ title, body }: { title: string; body: string }) { return <div className="workout-empty"><strong>{title}</strong><p>{body}</p></div> }

function PreparedWorkout({ exercises, onBack, onAdd, onRemove, onStart }: { exercises: readonly Exercise[]; onBack: () => void; onAdd: () => void; onRemove: (id: string) => void; onStart: () => void }) {
  const { playEffect } = useAudio()
  return (
    <CommandPageFrame className="workout-page workout-prepared-flow" terminalTitle="FITDEX // TRAINING TERMINAL" terminalMeta="BUILD TODAY">
      <header className="workout-create-header">
        <button className="retro-workout-back" type="button" onClick={() => { playEffect('select'); onBack() }} aria-label="Back to Workout Hub">
          <ArrowLeft size={20} aria-hidden="true" />
          <span>Workout Hub</span>
        </button>
        <div>
          <p className="eyebrow">Workout Preparation</p>
          <h1>Build Today</h1>
          <p>Prepare a one-off session. This list is temporary until you explicitly start the workout.</p>
        </div>
      </header>
      <section className="workout-create-module workout-prepared-module">
        {exercises.length ? (
          <ol className="routine-exercise-list">
            {exercises.map((exercise) => (
              <li key={exercise.id}>
                <div className="routine-exercise-copy">
                  <strong>{exercise.name}</strong>
                  <small>{exercise.category} · 3 starting sets</small>
                </div>
                <button className="secondary-button" type="button" onClick={() => { playEffect('select'); onRemove(exercise.id) }} aria-label={`Remove ${exercise.name}`}>
                  <Trash2 size={16} aria-hidden="true" />
                </button>
              </li>
            ))}
          </ol>
        ) : (
          <WorkoutEmpty title="No exercises selected" body="Open Exercise Dex and choose the movements for today." />
        )}
        <div className="workout-prepared-actions">
          <button className="secondary-button" type="button" onClick={() => { playEffect('select'); onAdd() }}>
            <Plus size={17} aria-hidden="true" /> Add from Exercise Dex
          </button>
          <button className="primary-button" type="button" disabled={!exercises.length} onClick={onStart}>
            <Dumbbell size={17} aria-hidden="true" /> Start Workout
          </button>
        </div>
      </section>
    </CommandPageFrame>
  )
}

function StartWorkoutSelection({ routines, onBack, onStartRoutine, onStartEmpty }: { routines: readonly RoutineWithItems[]; onBack: () => void; onStartRoutine: (id: string) => void; onStartEmpty: () => void }) {
  return <div className="page-stack workout-page"><Panel className="workout-flow-panel"><FlowHeading title="Start workout" onBack={onBack} /><p className="eyebrow">From a routine</p>{routines.length ? <div className="routine-choice-list">{routines.map((entry) => <button type="button" key={entry.routine.id} onClick={() => onStartRoutine(entry.routine.id)}><span><strong>{entry.routine.name}</strong><small>{entry.items.length} exercises · {entry.items.reduce((sum, item) => sum + item.plannedSets, 0)} planned sets</small></span><ChevronRight size={18} aria-hidden="true" /></button>)}</div> : <WorkoutEmpty title="No routines yet" body="You can still start an empty workout and add exercises as you train." />}<button className="primary-button" type="button" onClick={onStartEmpty}>Start empty workout</button></Panel></div>
}

function CreateRoutine({ onCancel, onCreated }: { onCancel: () => void; onCreated: (routine: WorkoutRoutine) => void | Promise<void> }) {
  const [name, setName] = useState(''); const [error, setError] = useState('')
  return <CommandPageFrame className="workout-page workout-create-flow" terminalTitle="FITDEX // TRAINING TERMINAL" terminalMeta="ROUTINE BUILDER">
    <header className="workout-create-header">
      <button className="retro-workout-back" type="button" onClick={onCancel} aria-label="Back to Workout Hub"><ArrowLeft size={20} aria-hidden="true" /><span>Workout Hub</span></button>
      <div><h1>CREATE ROUTINE</h1><p>Reusable workout template.</p></div>
    </header>
    <section className="workout-create-module">
      <form className="routine-form routine-create-form" onSubmit={(event) => { event.preventDefault(); void createRoutine(name).then(onCreated).catch((reason: unknown) => setError(reason instanceof Error ? reason.message : 'Routine could not be created.')) }}>
        <label htmlFor="routine-name"><span>ROUTINE NAME</span><input id="routine-name" value={name} maxLength={80} autoFocus onChange={(event) => setName(event.target.value)} placeholder="Push Day" /></label>
        {error ? <p className="form-error" role="alert">{error}</p> : null}
        <div className="routine-create-actions"><button className="primary-button" type="submit">CREATE ROUTINE</button><button className="routine-create-cancel" type="button" onClick={onCancel}>Cancel</button></div>
      </form>
    </section>
  </CommandPageFrame>
}

function RoutineEditor({ entry, draft, replacementOptions, message, onBack, onChanged, onDraftChange, onCommitted, onAddExercise, onStart, onDeleted }: { entry: RoutineWithItems; draft?: RoutineDraft; replacementOptions: RoutineWithItems[]; message: string; onBack: () => void; onChanged: () => Promise<void>; onDraftChange: (draft: RoutineDraft) => void; onCommitted: () => void; onAddExercise: () => void; onStart: (savedRoutineName: string) => void; onDeleted: () => Promise<void> }) {
  const initialDraft = draft ?? { routineId: entry.routine.id, name: entry.routine.name, items: entry.items }
  const [name, setName] = useState(initialDraft.name)
  const [items, setItems] = useState(initialDraft.items)
  const [renameOpen, setRenameOpen] = useState(false)
  const [renameValue, setRenameValue] = useState(initialDraft.name)
  const [draggingId, setDraggingId] = useState<string>()
  const [insertion, setInsertion] = useState<{ id: string; before: boolean }>()
  const [saving, setSaving] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false); const [scheduledDays, setScheduledDays] = useState<string[]>([]); const [replacementId, setReplacementId] = useState(''); const [feedback, setFeedback] = useState(message)
  const dirty = name.trim() !== entry.routine.name || items.length !== entry.items.length || items.some((item, index) => item.id !== entry.items[index]?.id || item.plannedSets !== entry.items[index]?.plannedSets)

  useEffect(() => {
    const next = draft?.routineId === entry.routine.id ? draft : { routineId: entry.routine.id, name: entry.routine.name, items: entry.items }
    setName(next.name); setItems(next.items); setRenameValue(next.name)
  }, [draft, entry.items, entry.routine.id, entry.routine.name, entry.routine.updatedAt])

  function updateDraft(nextName: string, nextItems: RoutineExercise[]) { setName(nextName); setItems(nextItems); onDraftChange({ routineId: entry.routine.id, name: nextName, items: nextItems }) }
  function changeSets(itemId: string, delta: number) { updateDraft(name, items.map((item) => item.id === itemId ? { ...item, plannedSets: Math.max(MIN_PLANNED_SETS, Math.min(MAX_PLANNED_SETS, item.plannedSets + delta)) } : item)) }
  function removeItem(itemId: string) { updateDraft(name, items.filter((item) => item.id !== itemId)) }
  function commitRename() { const nextName = renameValue.trim() || name; updateDraft(nextName, items); setRenameOpen(false) }
  function dragMove(event: React.PointerEvent<HTMLButtonElement>) {
    if (!draggingId) return
    const target = document.elementFromPoint(event.clientX, event.clientY)?.closest<HTMLElement>('[data-routine-item]')
    if (!target || target.dataset.routineItem === draggingId) return
    const bounds = target.getBoundingClientRect()
    setInsertion({ id: target.dataset.routineItem!, before: event.clientY < bounds.top + bounds.height / 2 })
  }
  function finishDrag(event?: React.PointerEvent<HTMLButtonElement>) {
    if (event) { try { event.currentTarget.releasePointerCapture(event.pointerId) } catch { /* no-op */ } }
    if (draggingId && insertion) {
      const next = items.filter((item) => item.id !== draggingId)
      let targetIndex = next.findIndex((item) => item.id === insertion.id)
      if (targetIndex >= 0) next.splice(insertion.before ? targetIndex : targetIndex + 1, 0, items.find((item) => item.id === draggingId)!)
      updateDraft(name, next)
    }
    setDraggingId(undefined); setInsertion(undefined)
  }
  async function saveRoutine() {
    if (!dirty || saving) return true
    setSaving(true)
    try { await saveRoutineEdits(entry.routine, name, items); await onChanged(); onCommitted(); setFeedback('Routine saved.'); return true }
    catch (error) { setFeedback(error instanceof Error ? error.message : 'Routine could not be saved.'); return false }
    finally { setSaving(false) }
  }
  async function startRoutine() { if (dirty && !await saveRoutine()) return; onStart(name) }
  async function removeRoutine(replacementRoutineId?: string) { try { await deleteRoutine(entry.routine.id, { replacementRoutineId }); await onDeleted() } catch (error) { setFeedback(error instanceof Error ? error.message : 'Routine could not be deleted.') } }
  return <div className="page-stack workout-page"><Panel className="workout-flow-panel routine-editor">
    <div className="routine-editor-top"><button className="routine-editor-back" type="button" onClick={onBack}>← Workouts</button><span className={`routine-editor-status ${dirty ? 'is-dirty' : ''}`}><i aria-hidden="true" />{dirty ? 'Unsaved changes' : 'Routine saved'}</span></div>
    <section className="routine-identity" aria-label="Routine name"><p className="eyebrow">Workout</p><div><h1>{name}</h1><button className="routine-rename-toggle" type="button" onClick={() => { setRenameValue(name); setRenameOpen((open) => !open) }} aria-label="Rename routine"><Pencil size={15} aria-hidden="true" /></button></div>{renameOpen ? <form className="routine-rename-inline" onSubmit={(event) => { event.preventDefault(); commitRename() }}><label><span className="visually-hidden">Routine name</span><input value={renameValue} maxLength={80} autoFocus onChange={(event) => setRenameValue(event.target.value)} /></label><button type="button" onClick={() => setRenameOpen(false)}>Cancel</button><button type="submit">Confirm</button></form> : null}</section>
    <section className="routine-exercise-section"><header className="routine-exercise-heading"><h2>Exercises</h2></header>{items.length ? <ol className="routine-editor-list">{items.map((item, index) => <li key={item.id}>{insertion?.id === item.id && insertion.before ? <div className="routine-drop-slot">Drop exercise here</div> : null}<article className={`routine-editor-card ${draggingId === item.id ? 'is-dragging' : ''}`} data-routine-item={item.id}><button className="routine-drag-handle" type="button" aria-label={`Drag ${item.exerciseNameSnapshot}`} onPointerDown={(event) => { if (event.pointerType === 'mouse' && event.button !== 0) return; event.currentTarget.setPointerCapture(event.pointerId); setDraggingId(item.id); setInsertion(undefined) }} onPointerMove={dragMove} onPointerUp={finishDrag} onPointerCancel={finishDrag}><GripVertical size={18} aria-hidden="true" /></button><span className="routine-order-number">{index + 1}</span><div className="routine-editor-copy"><strong>{item.exerciseNameSnapshot}</strong></div><button className="routine-remove-item" type="button" onClick={() => removeItem(item.id)} aria-label={`Remove ${item.exerciseNameSnapshot}`}><Trash2 size={16} aria-hidden="true" /></button><div className="routine-sets-stepper"><span>Planned sets</span><div><button type="button" onClick={() => changeSets(item.id, -1)} disabled={item.plannedSets <= MIN_PLANNED_SETS} aria-label={`Decrease planned sets for ${item.exerciseNameSnapshot}`}>−</button><b>{item.plannedSets}</b><button type="button" onClick={() => changeSets(item.id, 1)} disabled={item.plannedSets >= MAX_PLANNED_SETS} aria-label={`Increase planned sets for ${item.exerciseNameSnapshot}`}>+</button></div></div></article>{insertion?.id === item.id && !insertion.before ? <div className="routine-drop-slot">Drop exercise here</div> : null}</li>)}</ol> : <section className="routine-empty-state"><Dumbbell size={22} aria-hidden="true" /><div><strong>No exercises yet</strong><p>Build routine from Exercise Dex.</p></div><button type="button" onClick={onAddExercise}>＋ Add Exercise</button></section>}<button className="routine-bottom-add" type="button" onClick={onAddExercise}><Plus size={17} aria-hidden="true" /> Add exercise from Dex</button></section>
    <footer className="routine-editor-actions"><button className="routine-save" type="button" disabled={!dirty || saving} onClick={() => void saveRoutine()}>{saving ? 'Saving…' : dirty ? 'Save routine' : 'Saved'}</button><button className="routine-start" type="button" onClick={() => void startRoutine()}><Dumbbell size={16} aria-hidden="true" />{dirty ? 'Save & start' : 'Start workout'}</button></footer>
    {feedback ? <p className="workout-feedback" role="status">{feedback}</p> : null}{confirmDelete ? <div className="routine-delete-confirm"><p>Delete this routine template? Completed workout snapshots remain untouched.</p>{scheduledDays.length ? <><p><strong>Weekly Plan:</strong> this routine is scheduled on {scheduledDays.join(', ')}. Replace it or clear those days.</p>{replacementOptions.length ? <div className="routine-replacement"><label><span>Replace Routine</span><select value={replacementId} onChange={(event) => setReplacementId(event.target.value)}><option value="">Choose a saved routine</option>{replacementOptions.map((candidate) => <option value={candidate.routine.id} key={candidate.routine.id}>{candidate.routine.name}</option>)}</select></label><button className="secondary-button" type="button" disabled={!replacementId} onClick={() => void removeRoutine(replacementId)}>Replace Routine &amp; Delete</button></div> : null}</> : null}<button className="secondary-button" type="button" onClick={() => setConfirmDelete(false)}>Keep routine</button><button className="danger-button" type="button" onClick={() => void removeRoutine()}>Clear Scheduled Days &amp; Delete</button></div> : <button className="text-button routine-delete-button" type="button" onClick={() => { setConfirmDelete(true); void routineScheduledDays(entry.routine.id).then(setScheduledDays) }}><Trash2 size={16} aria-hidden="true" /> Delete routine</button>}
  </Panel></div>
}

function getPlanDayStatusSummary(
  _day: WeekdayId,
  assignment: import('../data/models').WeeklyPlanAssignment,
  dateKey: string,
  todayKey: string,
  snapshot: PlanDaySnapshot | undefined
): string {
  const isPast = dateKey < todayKey

  if (snapshot?.result === 'success') {
    return 'Workout completed successfully.'
  }
  if (snapshot?.result === 'frozen') {
    return 'Workout missed · Streak freeze protected your streak.'
  }
  if (snapshot?.result === 'missed') {
    return 'Workout missed · Streak was not protected.'
  }
  if (snapshot?.result === 'rest' || assignment.type === 'rest_day' || snapshot?.result === 'paused') {
    return 'Planned recovery day · Rest preserves your streak.'
  }
  if (assignment.type === 'no_plan' || snapshot?.result === 'no_plan') {
    return 'No workout scheduled for this day.'
  }
  if (isPast) {
    return 'Workout missed.'
  }
  return 'Scheduled workout · Ready to train when you are.'
}
