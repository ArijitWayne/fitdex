import { ArrowLeft, BookOpen, Check, ChevronRight, CircleHelp, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Panel } from '../components/ui/Panel'
import { RetroLoader } from '../components/ui/RetroLoader'
import { PageFrame } from '../components/layout/PageFrame'
import { ExerciseDex } from '../features/exerciseDex/ExerciseDex'
import { ensureBuiltInExercises } from '../features/exerciseDex/seedExercises'
import { ActiveWorkoutView, CompletedWorkoutDetail } from '../features/workout/WorkoutSessionViews'
import { loadRoutines, type RoutineWithItems } from '../features/workout/routineRepository'
import { formatDuration, getWorkoutDuration, getWorkoutSetLogState } from '../features/workout/workoutModel'
import { ActiveWorkoutExistsError, discardWorkout, getActiveWorkout, getCompletedWorkoutsForStartDate, startEmptyWorkout, startWorkoutFromRoutine, type WorkoutDetail, type WorkoutSummary } from '../features/workout/workoutRepository'
import { GuideDialog } from '../features/help/GuideDialog'
import { markTutorialSeen } from '../features/help/tutorialPreferences'
import { workoutTutorialSteps } from '../features/help/tutorialSteps'
import { WeeklyPlanEditor } from '../features/workout/WeeklyPlanViews'
import { emptyWeeklyPlanDays, loadWeeklyPlan, WEEKDAY_LABELS, weekdayIdForLocalDateKey, type WeeklyPlan } from '../features/workout/weeklyPlan'
import { useAudio } from '../features/audio/useAudio'
import { useBackNavigation } from '../features/navigation/useBackNavigation'
import { loadGamificationDashboard, type GamificationDashboard } from '../features/gamification/gamificationRepository'
import { WEEKDAY_IDS, type WeekdayId } from '../data/models'
import { getLocalDateKey, shiftLocalDateKey } from '../utils/localDate'
import { WeeklyPlannerModal } from '../features/workout/WeeklyPlannerModal'

type WorkoutView = 'hub' | 'library' | 'start' | 'create' | 'active' | 'history' | 'plan' | 'start-empty' | 'start-routine'
export type WorkoutEntryView = Extract<WorkoutView, 'hub' | 'library' | 'start' | 'create' | 'active' | 'plan' | 'start-empty' | 'start-routine' | 'history'>

export function WorkoutPage({ initialView = 'hub', initialRoutineId, initialWorkoutId }: { initialView?: WorkoutEntryView; initialRoutineId?: string; initialWorkoutId?: string }) {
  const { playEffect } = useAudio()
  const [view, setView] = useState<WorkoutView>(initialView)
  const [routines, setRoutines] = useState<RoutineWithItems[]>([])
  const [activeWorkoutDetail, setActiveWorkoutDetail] = useState<WorkoutDetail>()
  const [completedTodayWorkouts, setCompletedTodayWorkouts] = useState<WorkoutSummary[]>([])
  const [historyWorkoutId, setHistoryWorkoutId] = useState<string | undefined>(initialWorkoutId)
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(true)
  const [hubNow, setHubNow] = useState(() => Date.now())
  const [weeklyPlan, setWeeklyPlan] = useState<WeeklyPlan>({ configured: false, days: emptyWeeklyPlanDays() })
  const [gamification, setGamification] = useState<GamificationDashboard>()
  const [tutorialOpen, setTutorialOpen] = useState(false)
  const [initialIntentHandled, setInitialIntentHandled] = useState(false)
  const [plannerOpen, setPlannerOpen] = useState(false)
  const [selectedDay, setSelectedDay] = useState<WeekdayId>()

  const overlayOpen = plannerOpen
  const navigateBack = useBackNavigation('workout-subview', overlayOpen || view !== 'hub', () => {
    if (plannerOpen) setPlannerOpen(false)
    else { void refresh(); setView('hub') }
  }, overlayOpen ? 20 : 10)

  async function refresh() {
    await ensureBuiltInExercises()
    const nowKey = getLocalDateKey(new Date())
    const [nextRoutines, active, nextPlan, nextGamification, completedToday] = await Promise.all([
      loadRoutines(),
      getActiveWorkout(),
      loadWeeklyPlan(),
      loadGamificationDashboard(),
      getCompletedWorkoutsForStartDate(nowKey),
    ])
    setRoutines(nextRoutines)
    setActiveWorkoutDetail(active)
    setWeeklyPlan(nextPlan)
    setGamification(nextGamification)
    setCompletedTodayWorkouts(completedToday)
    setLoading(false)
  }

  // Initial state is restored from IndexedDB; later mutations call refresh explicitly.
  // oxlint-disable-next-line react-hooks/exhaustive-deps, react/set-state-in-effect
  useEffect(() => { void refresh().catch(() => setLoading(false)) }, [])
  const activeWorkout = activeWorkoutDetail?.workout
  const activeWorkoutId = activeWorkout?.id
  useEffect(() => {
    if (!activeWorkout) return
    const timer = window.setInterval(() => setHubNow(Date.now()), 1000)
    return () => window.clearInterval(timer)
  }, [activeWorkout])

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

  const todayKey = getLocalDateKey(new Date(hubNow))
  const todayId = weekdayIdForLocalDateKey(todayKey)
  const activeSelectedDay = selectedDay ?? todayId
  const selectedAssignment = weeklyPlan.days[activeSelectedDay]
  const selectedDayRoutine = selectedAssignment?.type === 'routine'
    ? routines.find((entry) => entry.routine.id === selectedAssignment.routineId)
    : undefined
  const isSelectedRest = selectedAssignment?.type === 'rest_day'
  const isSelectedToday = activeSelectedDay === todayId

  const startSelectedDay = () => selectedAssignment?.type === 'routine'
    ? begin(() => startWorkoutFromRoutine(selectedAssignment.routineId))
    : begin(() => startEmptyWorkout())

  // Home start intents use the same repository-backed creation paths as the Workout hub.
  // oxlint-disable react-hooks/exhaustive-deps, react/set-state-in-effect
  useEffect(() => {
    if (initialIntentHandled) return
    setInitialIntentHandled(true)
    if (initialView === 'start-empty') void begin(() => startEmptyWorkout())
    if (initialView === 'start-routine' && initialRoutineId) void begin(() => startWorkoutFromRoutine(initialRoutineId))
    if (initialView === 'start') void startSelectedDay()
  }, [initialIntentHandled, initialRoutineId, initialView])
  // oxlint-enable react-hooks/exhaustive-deps, react/set-state-in-effect

  function closeTutorial() { setTutorialOpen(false); void markTutorialSeen('workout') }

  if (view === 'active' && activeWorkoutId) return <ActiveWorkoutView workoutId={activeWorkoutId} onExit={() => { void refresh(); setView('hub') }} onCompleted={(workoutId) => { setHistoryWorkoutId(workoutId); setActiveWorkoutDetail(undefined); void refresh(); setView('history') }} />
  if (view === 'history' && historyWorkoutId) return <CompletedWorkoutDetail workoutId={historyWorkoutId} onBack={() => { void navigateBack() }} onDeleted={() => { setHistoryWorkoutId(undefined); setView('hub'); void refresh() }} />
  if (view === 'plan') return <WeeklyPlanEditor plan={weeklyPlan} routines={routines} onChanged={setWeeklyPlan} onBack={() => setView('hub')} onCreateRoutine={() => setPlannerOpen(true)} />

  if (view === 'library') return (
    <div className="page-stack workout-page">
      <div className="workout-library-toolbar">
        <button className="secondary-button" type="button" onClick={() => { playEffect('select'); setView('hub') }}>
          <ArrowLeft size={18} aria-hidden="true" /> Back to Workout Hub
        </button>
      </div>
      <ExerciseDex />
      {message ? <p className="workout-feedback" role="status">{message}</p> : null}
    </div>
  )

  const headerDate = new Date(hubNow)
  const activeTotalSets = activeWorkoutDetail?.exercises.reduce((sum, item) => sum + item.sets.length, 0) ?? 0
  const activeLoggedSets = activeWorkoutDetail?.exercises.reduce((sum, item) => sum + item.sets.filter((set) => getWorkoutSetLogState(set, item.exercise.trackingTypeSnapshot ?? 'reps_only') === 'logged').length, 0) ?? 0
  const activeLoggedExercises = activeWorkoutDetail?.exercises.filter((item) => item.sets.some((set) => getWorkoutSetLogState(set, item.exercise.trackingTypeSnapshot ?? 'reps_only') === 'logged')).length ?? 0
  const weekStart = shiftLocalDateKey(todayKey, -WEEKDAY_IDS.indexOf(todayId))

  const isCompletedToday = !activeWorkout && isSelectedToday && completedTodayWorkouts.length > 0
  const latestCompletedToday = completedTodayWorkouts[0]

  return <PageFrame className="workout-page workout-hub" data-variant="mission-stack">
    <header className="workout-hub-header">
      <div><p className="eyebrow">Training</p><h1>Workout Hub</h1></div>
      <div className="workout-hub-header-meta">
        {gamification ? <span className="workout-level-badge">Level {gamification.progression.level}</span> : null}
        <time dateTime={todayKey}>{headerDate.toLocaleDateString(undefined, { weekday: 'short' })}<br />{headerDate.toLocaleDateString(undefined, { day: '2-digit', month: 'short' })}</time>
        <button className="workout-hub-help cmd-icon-btn page-help-btn" type="button" aria-label="How Workouts Work" title="How Workouts Work" onClick={() => { playEffect('select'); setTutorialOpen(true) }}><CircleHelp size={18} aria-hidden="true" /></button>
      </div>
    </header>

    {loading ? <Panel><RetroLoader label="LOADING WORKOUT DATA..." /></Panel> : <main className="workout-hub-stack">
      {/* 1. TOP: Ultra-compact Weekly Schedule Day Picker (Single Row) */}
      <section className="workout-hub-panel workout-weekly-strip-panel" aria-labelledby="weekly-plan-title">
        <div className="workout-section-head">
          <h2 id="weekly-plan-title">Weekly Schedule</h2>
          <button type="button" className="workout-edit-plan-btn" onClick={() => { playEffect('select'); setPlannerOpen(true) }}>
            <Sparkles size={14} aria-hidden="true" /> Plan Week
          </button>
        </div>
        <div className="workout-week-strip-compact" role="tablist" aria-label="Days of the week">
          {WEEKDAY_IDS.map((day, index) => {
            const assignment = weeklyPlan.days[day]
            const dateKey = shiftLocalDateKey(weekStart, index)
            const snapshot = gamification?.snapshots.find((item) => item.localDate === dateKey)
            const done = snapshot?.result === 'success'
            const isRest = assignment.type === 'rest_day'
            const isSelected = day === activeSelectedDay
            const isToday = day === todayId

            return (
              <button
                type="button"
                key={day}
                role="tab"
                aria-selected={isSelected}
                className={`day-strip-pill${isSelected ? ' is-selected' : ''}${isToday ? ' is-today' : ''}${done ? ' is-done' : ''}${isRest ? ' is-rest' : ' is-workout'}`}
                onClick={() => { playEffect('select'); setSelectedDay(day) }}
                title={`${WEEKDAY_LABELS[day]}: ${isRest ? 'Rest Day' : 'Workout Day'}`}
              >
                <span className="day-strip-initial">{WEEKDAY_LABELS[day].slice(0, 1)}</span>
                <span className="day-strip-status-text visually-hidden">
                  {WEEKDAY_LABELS[day]} · {isRest ? 'Rest Day' : 'Workout Day'}{done ? ' · Done' : ''}
                </span>
              </button>
            )
          })}
        </div>
      </section>

      {/* 2. MIDDLE: Exercise Dex Compact Gateway */}
      <button className="workout-dex-gateway" type="button" onClick={() => { playEffect('select'); setMessage(''); setView('library') }}>
        <span className="workout-dex-icon"><BookOpen size={20} aria-hidden="true" /></span>
        <span><strong>Exercise Dex</strong><small>804 moves · Browse exercises, favourites and categories</small></span>
        <ChevronRight size={18} aria-hidden="true" />
      </button>

      {/* 3. BOTTOM: Consolidated Workout Section */}
      <section className={`workout-hub-panel workout-today-section${activeWorkout ? ' is-active' : isCompletedToday ? ' is-completed' : ''}`} aria-labelledby="today-mission-title">
        <div className="workout-section-top">
          <div className="workout-section-title-wrap">
            <span className="workout-mission-label">
              {activeWorkout ? 'Workout in progress' : isCompletedToday ? 'Today’s session finished' : isSelectedToday ? "Today's mission" : `${WEEKDAY_LABELS[activeSelectedDay]}'s Training`}
            </span>
            <span className={`workout-state-badge${activeWorkout ? ' is-active' : isCompletedToday ? ' is-done' : ''}`}>
              {activeWorkout ? <i aria-hidden="true" /> : null}
              {activeWorkout ? 'Active' : isCompletedToday ? 'Completed' : isSelectedRest ? 'Rest Day' : 'Workout Day'}
            </span>
          </div>
          <h2 id="today-mission-title">
            {activeWorkout?.nameSnapshot ?? (isCompletedToday ? latestCompletedToday.workout.nameSnapshot : (selectedDayRoutine?.routine.name ?? (isSelectedRest ? 'Recovery / Rest Day' : 'Workout Day')))}
          </h2>
          <p className="workout-section-desc">
            {activeWorkout
              ? 'Live session · Continue where you left off.'
              : isCompletedToday
                ? 'Session completed! Great work on crushing your training today.'
                : selectedDayRoutine
                  ? `${selectedDayRoutine.items.length} ${selectedDayRoutine.items.length === 1 ? 'exercise' : 'exercises'} scheduled for ${WEEKDAY_LABELS[activeSelectedDay]}.`
                  : isSelectedRest
                    ? 'Rest and recovery day. Muscles grow while you recover.'
                    : 'No workout planned. Click on the Plan Week button to plan your workout.'}
          </p>
        </div>

        {activeWorkout ? (
          <div className="workout-mission-stats">
            <div><span>Elapsed</span><strong>{formatDuration(getWorkoutDuration(activeWorkout, hubNow))}</strong></div>
            <div><span>Sets</span><strong>{activeLoggedSets} / {activeTotalSets}</strong></div>
            <div><span>Exercises</span><strong>{activeLoggedExercises} / {activeWorkoutDetail?.exercises.length ?? 0}</strong></div>
          </div>
        ) : isCompletedToday ? (
          <div className="workout-mission-stats">
            <div><span>Duration</span><strong>{formatDuration(latestCompletedToday.workout.durationSeconds ?? 0)}</strong></div>
            <div><span>Logged Sets</span><strong>{latestCompletedToday.completedSetCount}</strong></div>
            <div><span>Exercises</span><strong>{latestCompletedToday.exerciseCount}</strong></div>
          </div>
        ) : selectedDayRoutine && selectedDayRoutine.items.length ? (
          <div className="workout-preview-exercise-list">
            <ol className="routine-exercise-list preview-only">
              {selectedDayRoutine.items.map((item) => (
                <li key={item.id} className="preview-exercise-item">
                  <div className="routine-exercise-copy">
                    <strong>{item.exerciseNameSnapshot}</strong>
                    <small>{item.plannedSets} sets × {item.targetReps ?? 12} reps</small>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        ) : null}

        <div className="workout-today-actions">
          {activeWorkout ? (
            <>
              <button className="primary-button workout-action-main" type="button" onClick={() => { playEffect('select'); setView('active') }}>
                Resume Workout
              </button>
              <button
                className="secondary-button workout-action-sub is-destructive"
                type="button"
                onClick={async () => {
                  if (!activeWorkoutId) return
                  playEffect('select')
                  await discardWorkout(activeWorkoutId)
                  setActiveWorkoutDetail(undefined)
                  await refresh()
                }}
              >
                Discard Workout
              </button>
            </>
          ) : isCompletedToday ? (
            <>
              <button
                className="primary-button workout-action-main"
                type="button"
                onClick={() => {
                  playEffect('select')
                  setHistoryWorkoutId(latestCompletedToday.workout.id)
                  setView('history')
                }}
              >
                <Check size={16} aria-hidden="true" style={{ marginRight: 6 }} /> View Summary
              </button>
              <button
                className="secondary-button workout-action-sub"
                type="button"
                onClick={() => { playEffect('select'); setPlannerOpen(true) }}
              >
                Plan Week
              </button>
            </>
          ) : selectedDayRoutine ? (
            <button className="primary-button workout-action-main" type="button" onClick={() => void startSelectedDay()}>
              Start Workout
            </button>
          ) : !isSelectedRest ? (
            <button className="primary-button workout-action-main" type="button" onClick={() => { playEffect('select'); setPlannerOpen(true) }}>
              <Sparkles size={16} aria-hidden="true" style={{ marginRight: 6 }} /> Plan Week
            </button>
          ) : null}
        </div>

        {message ? <p className="workout-feedback" role="status">{message}</p> : null}
      </section>
    </main>}

    {plannerOpen ? (
      <WeeklyPlannerModal
        currentPlan={weeklyPlan}
        onClose={() => setPlannerOpen(false)}
        onApplied={async () => {
          await refresh()
          setPlannerOpen(false)
        }}
      />
    ) : null}
    {tutorialOpen ? <GuideDialog eyebrow="How Workouts Work" steps={workoutTutorialSteps} onClose={closeTutorial} /> : null}
  </PageFrame>
}
