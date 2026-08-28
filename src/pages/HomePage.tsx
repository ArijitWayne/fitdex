import { Award, BookOpen, ChartNoAxesColumnIncreasing, ChevronRight, Dumbbell, Flame, Music, NotebookTabs, Pause, Play, SkipBack, SkipForward, Utensils, Volume2, VolumeX } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Panel } from '../components/ui/Panel'
import { AvatarPortrait } from '../features/avatar/AvatarPortrait'
import { useAvatar } from '../features/avatar/useAvatar'
import { FOOD_MEAL_LABELS } from '../features/food/foodModel'
import { formatHomeDate, formatHomeGreeting } from '../features/home/homeModel'
import { loadHomeDashboard, type HomeDashboardData } from '../features/home/homeRepository'
import { formatPersonalRecordDate, formatPersonalRecordMetric } from '../features/progress/personalRecords'
import { formatTrainingTime } from '../features/progress/progressModel'
import { useProfile } from '../features/profile/useProfile'
import { getWorkoutDuration, isWorkoutTimerPaused } from '../features/workout/workoutModel'
import type { AppDestination } from '../types/navigation'
import { getLocalDateKey } from '../utils/localDate'
import { displayWeightFromKg } from '../utils/units'
import { WEEKDAY_IDS } from '../data/models'
import { WEEKDAY_LABELS, weeklyPlanAssignmentLabel } from '../features/workout/weeklyPlan'
import { GamificationBadge } from '../features/gamification/GamificationBadge'
import { LevelProgress, RankDetailView, StreakDetailView } from '../features/gamification/GamificationViews'
import { achievementAssetPath } from '../features/gamification/gamificationConfig'
import { useAudio } from '../features/audio/useAudio'
import { BACKGROUND_TRACK_ORDER, cycleBackgroundTrack } from '../features/audio/audioModel'
import { useBackNavigation } from '../features/navigation/useBackNavigation'

export type HomeWorkoutEntry = 'hub' | 'active' | 'start' | 'library' | 'create' | 'plan' | 'start-empty' | 'start-routine' | 'history'

export function HomePage({ onNavigate, onOpenWorkout, onOpenAchievements }: { onNavigate: (destination: AppDestination) => void; onOpenWorkout: (entry: HomeWorkoutEntry, targetId?: string) => void; onOpenAchievements?: () => void }) {
  const { selectedAvatar } = useAvatar()
  const { displayName } = useProfile()
  const { playEffect } = useAudio()
  const [data, setData] = useState<HomeDashboardData>()
  const [error, setError] = useState('')
  const [now, setNow] = useState(() => new Date())
  const [gamificationView, setGamificationView] = useState<'rank' | 'streak'>()
  useBackNavigation('home-subview', Boolean(gamificationView), () => setGamificationView(undefined))
  const todayDateKey = getLocalDateKey(now)

  useEffect(() => {
    let current = true
    void loadHomeDashboard(todayDateKey).then((result) => { if (current) setData(result) }).catch((reason: unknown) => { if (current) setError(reason instanceof Error ? reason.message : 'Home dashboard could not be loaded.') })
    return () => { current = false }
  }, [todayDateKey])

  useEffect(() => {
    if (!data?.activeWorkout || isWorkoutTimerPaused(data.activeWorkout.workout)) return
    const timer = window.setInterval(() => setNow(new Date()), 1000)
    return () => window.clearInterval(timer)
  }, [data?.activeWorkout])

  if (data && gamificationView === 'rank') return <RankDetailView data={data.gamification} onBack={() => setGamificationView(undefined)} />
  if (data && gamificationView === 'streak') return <StreakDetailView data={data.gamification} onBack={() => setGamificationView(undefined)} onChanged={(gamification) => setData({ ...data, gamification })} />

  return (
    <div className="page-stack home-page">
      <section className="home-hero" data-faction={selectedAvatar.faction}>
        <AvatarPortrait avatar={selectedAvatar} size="medium" priority />
        <div>
          <p className="eyebrow">FitDex · {selectedAvatar.archetype}</p>
          <h1>{formatHomeGreeting(displayName, now)}</h1>
          <time dateTime={todayDateKey}>{formatHomeDate(todayDateKey)}</time>
          <p>{data && !data.hasHistory ? 'Your fitness journey starts here.' : "Ready for today's training?"}</p>
        </div>
      </section>

      <HomeMusicController />

      {!data ? <Panel><p className="home-loading" aria-live="polite">Loading today’s dashboard…</p>{error ? <p className="form-error" role="alert">{error}</p> : null}</Panel> : <>
        <TodayWorkoutPanel data={data} now={now} onOpenWorkout={onOpenWorkout} />

        <Panel className="home-dashboard-panel home-gamification" eyebrow="Your progress">
          <button className="gamification-level-button" type="button" onClick={() => { playEffect('select'); setGamificationView('rank') }}><LevelProgress data={data.gamification} compact /><ChevronRight aria-hidden="true" /></button>
          <button className="home-streak-button" type="button" onClick={() => { playEffect('select'); setGamificationView('streak') }}><Flame aria-hidden="true" /><span><strong>{data.gamification.streak.current}</strong><small>Plan Streak</small></span><em>{data.gamification.freezeBalance} {data.gamification.freezeBalance === 1 ? 'Freeze' : 'Freezes'} available</em><ChevronRight aria-hidden="true" /></button>
          {data.gamification.latestAchievement ? <div className="home-latest-achievement"><GamificationBadge kind="achievement" size="small" src={achievementAssetPath(data.gamification.latestAchievement.definition.id)} label={data.gamification.latestAchievement.definition.name} /><span><small>Latest Achievement</small><strong>{data.gamification.latestAchievement.definition.name}</strong><em>Unlocked {new Date(data.gamification.latestAchievement.unlocked.unlockedAt).toLocaleDateString()}</em></span><button className="text-button" type="button" onClick={() => { playEffect('select'); if (onOpenAchievements) onOpenAchievements(); else onNavigate('progress') }}>View Achievements</button></div> : null}
        </Panel>

        <Panel className="home-dashboard-panel home-week-plan" eyebrow="This week" title={data.weeklyPlan.configured ? 'Recurring workout plan' : 'No workout plan yet'}>
          {data.weeklyPlan.configured ? <div className="home-week-grid">{WEEKDAY_IDS.map((day) => <span className={day === data.weekday ? 'is-today' : ''} key={day}><strong>{WEEKDAY_LABELS[day].slice(0, 3)}</strong><small>{weeklyPlanAssignmentLabel(data.weeklyPlan.days[day], data.routines.map((entry) => entry.routine))}</small></span>)}</div> : <p className="home-subtle-empty">Set workout days, rest days, or assign routines when you create them.</p>}
          <button className="secondary-button" type="button" onClick={() => { playEffect('select'); onOpenWorkout('plan') }}>Set Weekly Plan</button>
        </Panel>

        <Panel className="home-dashboard-panel home-nutrition" eyebrow="Nutrition today">
          <div className="home-nutrition-totals"><span><strong>{formatNumber(data.food.kcal)} kcal</strong><small>Calories</small></span><span><strong>{formatNumber(data.food.protein)} g</strong><small>Protein</small></span></div>
          <ul className="home-meal-status" aria-label="Meals with logged food">{data.mealOrder.map((meal) => <li key={meal} className={data.food.mealLogged[meal] ? 'is-logged' : ''}><span>{FOOD_MEAL_LABELS[meal]}</span><strong aria-label={data.food.mealLogged[meal] ? `${FOOD_MEAL_LABELS[meal]} has logged food` : `${FOOD_MEAL_LABELS[meal]} has no logged food`}>{data.food.mealLogged[meal] ? '✓ Logged' : '— None'}</strong></li>)}</ul>
          {!data.food.itemCount ? <p className="home-subtle-empty">No food logged today.</p> : null}
          <button className="secondary-button" type="button" onClick={() => { playEffect('select'); onNavigate('food') }}><Utensils size={17} aria-hidden="true" /> Log Food</button>
        </Panel>

        <Panel className="home-dashboard-panel" eyebrow="Today's activity">
          <div className="home-activity-grid"><ActivityMetric value={`${data.completedToday.length} completed`} label="Workouts" /><ActivityMetric value={formatTrainingTime(data.todayTrainingSeconds)} label="Training" /><ActivityMetric value={`${data.food.itemCount} ${data.food.itemCount === 1 ? 'item' : 'items'}`} label="Food" /><ActivityMetric value={`${formatNumber(data.food.protein)} g`} label="Protein" /></div>
        </Panel>

        <Panel className="home-dashboard-panel home-progress" eyebrow="Recent progress">
          {data.newestPr ? <div className="home-newest-pr"><Award aria-hidden="true" /><div><small>Newest PR</small><strong>{data.newestPr.exerciseName}</strong><span>{formatPersonalRecordMetric(data.newestPr.metrics[0], data.units)} · {formatPersonalRecordDate(data.newestPr.metrics[0].dateKey)}</span></div></div> : <p className="home-subtle-empty">No personal records yet. Complete measurable sets to establish one.</p>}
          <div className="home-seven-day"><span><strong>{data.last7WorkoutCount}</strong><small>Workouts · Last 7 days</small></span><span><strong>{formatNumber(displayWeightFromKg(data.last7VolumeKg, data.units.preference))} {data.units.weightLabel}</strong><small>Training volume</small></span></div>
          <button className="secondary-button" type="button" onClick={() => { playEffect('select'); onNavigate('progress') }}><ChartNoAxesColumnIncreasing size={17} aria-hidden="true" /> View Progress</button>
        </Panel>

        <Panel className="home-dashboard-panel" eyebrow="Quick access">
          <nav className="home-quick-access" aria-label="Home shortcuts"><button type="button" onClick={() => { playEffect('select'); onOpenWorkout('library') }}><BookOpen aria-hidden="true" /><span>Exercise Dex</span><ChevronRight aria-hidden="true" /></button><button type="button" onClick={() => { playEffect('select'); onNavigate('journal') }}><NotebookTabs aria-hidden="true" /><span>Journal</span><ChevronRight aria-hidden="true" /></button><button type="button" onClick={() => { playEffect('select'); onNavigate('progress') }}><ChartNoAxesColumnIncreasing aria-hidden="true" /><span>Progress</span><ChevronRight aria-hidden="true" /></button><button type="button" onClick={() => { playEffect('select'); onNavigate('food') }}><Utensils aria-hidden="true" /><span>Food</span><ChevronRight aria-hidden="true" /></button></nav>
        </Panel>
        {!data.hasHistory && !data.weeklyPlan.configured ? <Panel className="home-dashboard-panel home-connected-help" eyebrow="Your activity will appear here" title="Log once, see it everywhere"><p>Workouts and food you log automatically feed into Home, Journal and Progress.</p></Panel> : null}
      </>}
    </div>
  )
}

const backgroundTrackLabels = { warrior: 'Warrior', hardened: 'Hardened', villain: 'Villain', none: 'No Music' } as const

function HomeMusicController() {
  const { ready, backgroundMusic, backgroundMusicPaused, setBackgroundMusic, pauseBackgroundMusic, resumeBackgroundMusic } = useAudio()
  const selectedTrack = backgroundMusic === 'none' ? undefined : backgroundMusic
  const changeTrack = (direction: -1 | 1) => setBackgroundMusic(cycleBackgroundTrack(backgroundMusic, direction))
  return <Panel className="home-music-controller" eyebrow="Battle Music">
    <div className="home-music-now"><Music aria-hidden="true" /><span><strong>{backgroundTrackLabels[backgroundMusic]}</strong><small>{backgroundMusic === 'none' ? 'Music is off' : backgroundMusicPaused ? 'Paused' : 'Looping locally'}</small></span>{backgroundMusic === 'none' ? <VolumeX aria-hidden="true" /> : <Volume2 aria-hidden="true" />}</div>
    <div className="home-music-controls">
      <button type="button" disabled={!ready || !selectedTrack} aria-label="Previous background track" onClick={() => changeTrack(-1)}><SkipBack aria-hidden="true" /></button>
      {backgroundMusic === 'none' ? <button type="button" disabled={!ready} aria-label="Turn background music on" onClick={() => setBackgroundMusic('warrior')}><Play aria-hidden="true" /></button> : <button type="button" disabled={!ready} aria-label={backgroundMusicPaused ? 'Resume background music' : 'Pause background music'} onClick={backgroundMusicPaused ? resumeBackgroundMusic : pauseBackgroundMusic}>{backgroundMusicPaused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}</button>}
      <button type="button" disabled={!ready || !selectedTrack} aria-label="Next background track" onClick={() => changeTrack(1)}><SkipForward aria-hidden="true" /></button>
      <button type="button" disabled={!ready || backgroundMusic === 'none'} aria-label="Turn background music off" onClick={() => setBackgroundMusic('none')}><VolumeX aria-hidden="true" /></button>
    </div>
    <div className="home-music-tracks" role="group" aria-label="Background music tracks">{BACKGROUND_TRACK_ORDER.map((track) => <button type="button" key={track} aria-pressed={backgroundMusic === track} onClick={() => setBackgroundMusic(track)}>{backgroundTrackLabels[track]}</button>)}</div>
  </Panel>
}

function TodayWorkoutPanel({ data, now, onOpenWorkout }: { data: HomeDashboardData; now: Date; onOpenWorkout: (entry: HomeWorkoutEntry, targetId?: string) => void }) {
  if (data.activeWorkout) {
    const paused = isWorkoutTimerPaused(data.activeWorkout.workout)
    return <Panel className="home-dashboard-panel home-workout is-active" eyebrow={paused ? 'Workout paused' : "Today's workout"} title={data.activeWorkout.workout.nameSnapshot}><p>{formatActiveTime(getWorkoutDuration(data.activeWorkout.workout, now.getTime()), paused)} · {data.activeWorkout.exercises.length} {data.activeWorkout.exercises.length === 1 ? 'exercise' : 'exercises'}{data.completedToday.length ? ` · ${data.completedToday.length} already completed today` : ''}</p><button className="primary-button" type="button" onClick={() => onOpenWorkout('active')}><Dumbbell size={17} aria-hidden="true" /> {paused ? 'Open Paused Workout' : 'Resume Workout'}</button></Panel>
  }
  const assignment = data.todayAssignment
  if (assignment.type === 'routine' && data.scheduledRoutine) {
    const matching = data.completedByStartDate.find((summary) => summary.workout.routineId === assignment.routineId)
    const other = data.completedByStartDate.find((summary) => summary.workout.routineId !== assignment.routineId)
    if (matching) return <Panel className="home-dashboard-panel home-workout is-complete" eyebrow="Today's plan" title={data.scheduledRoutine.routine.name}><p>✓ Workout complete · {formatTrainingTime(matching.workout.durationSeconds ?? 0)} · {matching.completedSetCount} logged sets</p><button className="secondary-button" type="button" onClick={() => onOpenWorkout('history', matching.workout.id)}>View Workout</button></Panel>
    return <Panel className="home-dashboard-panel home-workout" eyebrow="Today's plan" title={data.scheduledRoutine.routine.name}><p>Scheduled for {WEEKDAY_LABELS[data.weekday]} · {data.scheduledRoutine.items.length} {data.scheduledRoutine.items.length === 1 ? 'exercise' : 'exercises'}{other ? `. ${other.workout.nameSnapshot} workout completed today; ${data.scheduledRoutine.routine.name} is still planned.` : ''}</p><button className="primary-button" type="button" onClick={() => onOpenWorkout('start-routine', assignment.routineId)}><Dumbbell size={17} aria-hidden="true" /> Start {data.scheduledRoutine.routine.name}</button></Panel>
  }
  if (assignment.type === 'workout_day') {
    const completed = data.completedByStartDate[0]
    return <Panel className={`home-dashboard-panel home-workout ${completed ? 'is-complete' : ''}`} eyebrow="Today's plan" title={completed ? 'Workout Day Complete' : 'Workout Day'}><p>{completed ? `${completed.workout.nameSnapshot} completed · ${formatTrainingTime(completed.workout.durationSeconds ?? 0)}` : 'No routine assigned. Choose exercises as you train.'}</p>{completed ? <button className="secondary-button" type="button" onClick={() => onOpenWorkout('history', completed.workout.id)}>View Workout</button> : <button className="primary-button" type="button" onClick={() => onOpenWorkout('start-empty')}><Dumbbell size={17} aria-hidden="true" /> Start Workout</button>}</Panel>
  }
  if (assignment.type === 'rest_day') return <Panel className="home-dashboard-panel home-workout" eyebrow="Today's plan" title="Rest Day"><p>Recovery is part of the plan.{data.completedByStartDate.length ? ` ${data.completedByStartDate.length} workout ${data.completedByStartDate.length === 1 ? 'was' : 'were'} completed today; the planned Rest Day remains unchanged.` : ''}</p></Panel>
  return <Panel className="home-dashboard-panel home-workout" eyebrow="Today's plan" title={data.weeklyPlan.configured ? 'No Plan' : 'No workout planned yet'}><p>{data.completedByStartDate.length ? `${data.completedByStartDate[0].workout.nameSnapshot} workout completed today. Nothing else is scheduled.` : data.routines.length ? 'Nothing scheduled for today. Start empty or choose a saved routine.' : 'You can start immediately or create a routine for repeated use.'}</p><div className="home-workout-actions"><button className="primary-button" type="button" onClick={() => onOpenWorkout('start-empty')}><Dumbbell size={17} aria-hidden="true" /> Start Workout</button>{!data.routines.length ? <button className="secondary-button" type="button" onClick={() => onOpenWorkout('create')}>Create Routine</button> : <button className="secondary-button" type="button" onClick={() => onOpenWorkout('start')}>Choose Routine</button>}</div></Panel>
}

function ActivityMetric({ value, label }: { value: string; label: string }) { return <span><strong>{value}</strong><small>{label}</small></span> }
function formatNumber(value: number) { return new Intl.NumberFormat(undefined, { maximumFractionDigits: 1 }).format(value) }
function formatActiveTime(seconds: number, paused = false) { const minutes = Math.floor(seconds / 60); const hours = Math.floor(minutes / 60); const duration = hours ? `${hours}h ${minutes % 60}m` : `${minutes} min`; return `${duration} ${paused ? 'active · timer paused' : 'elapsed'}` }
