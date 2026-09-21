import { ArrowLeft, Check, Flame, MoreHorizontal, Pencil, Skull, Swords, Trash2, Trophy } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Panel } from '../../components/ui/Panel'
import { RetroLoader } from '../../components/ui/RetroLoader'
import { ContextRail } from '../../components/ui/ContextRail'
import { db } from '../../data/database'
import type { Exercise } from '../../data/models'
import { useAudio } from '../audio/useAudio'
import { useBackNavigation } from '../navigation/useBackNavigation'
import {
  DEFAULT_REST_SECONDS,
  formatDuration,
  getWorkoutSetLogState,
  hasMeaningfulWorkoutSetData,
} from './workoutModel'
import {
  completeActiveWorkout,
  deleteCompletedWorkout,
  discardWorkout,
  getWorkoutDetail,
  removeWorkoutExercise,
  renameActiveWorkout,
  toggleWorkoutExerciseComplete,
  type WorkoutDetail,
} from './workoutRepository'
import { acknowledgeFirstUse, loadFirstUseGuidance } from '../help/firstUseGuidance'

export function ActiveWorkoutView({ workoutId, onExit, onCompleted }: {
  workoutId: string
  onExit: () => void
  onCompleted: (workoutId: string) => void
}) {
  const { playEffect } = useAudio()
  const [detail, setDetail] = useState<WorkoutDetail>()
  const [exerciseEquipment, setExerciseEquipment] = useState<Map<string, string>>(new Map())
  const [currentExerciseId, setCurrentExerciseId] = useState<string>()
  const [openMenuExerciseId, setOpenMenuExerciseId] = useState<string>()
  const [isEditingTitle, setIsEditingTitle] = useState(false)
  const [rest, setRest] = useState<number>()
  const [confirmDiscard, setConfirmDiscard] = useState(false)
  const [feedback, setFeedback] = useState('')
  const [confirmExerciseRemovalId, setConfirmExerciseRemovalId] = useState<string>()
  const [expandedNotes, setExpandedNotes] = useState<Set<string>>(() => new Set())
  const [restGuidance, setRestGuidance] = useState(false)

  useBackNavigation('exercise-menu', Boolean(openMenuExerciseId), () => setOpenMenuExerciseId(undefined))

  async function refresh() {
    const next = await getWorkoutDetail(workoutId)
    setDetail(next)
    setCurrentExerciseId((current) => {
      const currentItem = next.exercises.find((item) => item.exercise.id === current)
      if (currentItem?.sets.some((set) => getWorkoutSetLogState(set, currentItem.exercise.trackingTypeSnapshot ?? 'reps_only') !== 'logged')) return current
      const firstIncomplete = next.exercises.find((item) => item.sets.some((set) => getWorkoutSetLogState(set, item.exercise.trackingTypeSnapshot ?? 'reps_only') !== 'logged'))
      return firstIncomplete?.exercise.id ?? currentItem?.exercise.id ?? next.exercises[0]?.exercise.id
    })
    const definitions = await db.exercises.bulkGet(next.exercises.map((item) => item.exercise.exerciseId))
    setExerciseEquipment(new Map(definitions.filter((exercise): exercise is Exercise => Boolean(exercise)).map((exercise) => [exercise.id, exercise.equipment])))
    return next
  }

  // The repository is the external source of truth; load its persisted snapshot when the session ID changes.
  // oxlint-disable react-hooks/exhaustive-deps, react/set-state-in-effect
  useEffect(() => {
    void refresh().catch((error: unknown) => setFeedback(error instanceof Error ? error.message : 'Workout could not be loaded.'))
    void loadFirstUseGuidance().then((guidance) => {
      setRestGuidance(!guidance.workoutRest)
    })
  }, [workoutId])
  // oxlint-enable react-hooks/exhaustive-deps, react/set-state-in-effect

  useEffect(() => {
    if (rest === undefined || rest <= 0) return
    const timer = window.setTimeout(() => setRest((current) => current === undefined || current <= 1 ? undefined : current - 1), 1000)
    return () => window.clearTimeout(timer)
  }, [rest])

  async function run(action: () => Promise<unknown>) {
    try { setFeedback(''); await action(); await refresh() }
    catch (error) { setFeedback(error instanceof Error ? error.message : 'Workout could not be updated.') }
  }

  function renderedExerciseHasData(workoutExerciseId: string) {
    const item = detail?.exercises.find((candidate) => candidate.exercise.id === workoutExerciseId)
    if (!item) return false
    return hasMeaningfulWorkoutSetData(item.sets, item.exercise.trackingTypeSnapshot ?? 'reps_only')
  }

  async function removeActiveExercise(workoutExerciseId: string) {
    await removeWorkoutExercise(workoutExerciseId)
  }

  async function handleFinishWorkout() {
    try {
      setFeedback('')
      await completeActiveWorkout(workoutId)
      playEffect('progress_complete')
      onCompleted(workoutId)
    } catch (error) {
      setFeedback(error instanceof Error ? error.message : 'Workout could not be completed.')
    }
  }

  /** Marking the last exercise done finishes the workout automatically. */
  async function toggleExerciseDone(workoutExerciseId: string, isDone: boolean, targetReps: number) {
    try {
      setFeedback('')
      await toggleWorkoutExerciseComplete(workoutExerciseId, isDone, targetReps)
      const next = await refresh()
      const allDone = isDone && next.exercises.length > 0 && next.exercises.every((entry) => entry.sets.length > 0 && entry.sets.every((set) => set.completed))
      if (allDone) {
        await handleFinishWorkout()
      }
    } catch (error) {
      setFeedback(error instanceof Error ? error.message : 'Workout could not be updated.')
    }
  }

  if (!detail) return <Panel><RetroLoader label="LOADING ACTIVE WORKOUT..." />{feedback ? <p role="alert">{feedback}</p> : null}</Panel>

  const allSets = detail.exercises.flatMap((item) => item.sets)
  const loggedSets = detail.exercises.reduce((total, item) => total + item.sets.filter((set) => getWorkoutSetLogState(set, item.exercise.trackingTypeSnapshot ?? 'reps_only') === 'logged').length, 0)
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
        <div className="stat-progress">
          <span>Sets Logged:</span>
          <strong aria-live="polite">{loggedSets} / {allSets.length}</strong>
          <span className="visually-hidden">{loggedSets}/{allSets.length} sets logged</span>
        </div>
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
    </header>

    {restGuidance && loggedSets > 0 ? <ContextRail eyebrow="Rest Timer" title="Rest timer" actions={<button className="secondary-button" type="button" onClick={acknowledgeRest}>Got it</button>}><p>Take a rest whenever you need one between sets. Use Start Rest when you're ready for a break.</p></ContextRail> : null}

    {detail.exercises.length ? <div className="active-exercise-list workout-feed">{detail.exercises.map((item, index) => {
      const isCurrent = currentExerciseId === item.exercise.id
      const loggedCount = item.sets.filter((set) => getWorkoutSetLogState(set, item.exercise.trackingTypeSnapshot ?? 'reps_only') === 'logged').length
      const isMenuOpen = openMenuExerciseId === item.exercise.id
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
                  <button type="button" role="menuitem" onClick={() => { setOpenMenuExerciseId(undefined); toggleExerciseNotes(item.exercise.id) }}><Pencil size={16} aria-hidden="true" /> {expandedNotes.has(item.exercise.id) ? 'Hide notes' : 'Exercise notes'}</button>
                  <button type="button" role="menuitem" className="danger-menu-item" onClick={() => { setOpenMenuExerciseId(undefined); if (renderedExerciseHasData(item.exercise.id)) setConfirmExerciseRemovalId(item.exercise.id); else void run(() => removeActiveExercise(item.exercise.id)) }}><Trash2 size={16} aria-hidden="true" /> Remove exercise</button>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div className="active-exercise-checklist-action">
          <div className="checklist-target-meta">
            <span className="checklist-target-pill">{item.sets.length} sets × {item.sets[0]?.reps || 12} reps</span>
            <span className="checklist-status-hint">{isComplete ? 'Completed' : 'Tap Done when sets finished'}</span>
          </div>
          <button
            type="button"
            className={`checklist-action-btn ${isComplete ? 'is-complete' : ''}`}
            aria-pressed={isComplete}
            aria-label={`${isComplete ? 'Completed' : 'Mark done'}: ${item.exercise.exerciseNameSnapshot ?? 'exercise'}`}
            onClick={(e) => {
              e.stopPropagation()
              const targetReps = item.sets[0]?.reps || 12
              playEffect(isComplete ? 'select' : 'progress_complete')
              void toggleExerciseDone(item.exercise.id, !isComplete, targetReps)
            }}
          >
            <Check size={16} strokeWidth={3} aria-hidden="true" />
            <span>{isComplete ? 'Done' : 'Mark Done'}</span>
          </button>
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
      </Panel>
    })}</div> : <Panel><p className="eyebrow">Empty workout</p><h2>No exercises in workout</h2><p>Plan your week from the Workout Hub.</p></Panel>}

    {feedback ? <p className="workout-feedback" role="status">{feedback}</p> : null}

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
      <button
        className="primary-button workout-action-main active-finish-btn"
        type="button"
        onClick={() => void handleFinishWorkout()}
      >
        <Check size={18} strokeWidth={3} aria-hidden="true" style={{ marginRight: 6 }} /> Finish Workout
      </button>
      <button className="text-button active-discard-button" type="button" onClick={() => setConfirmDiscard(true)}>
        Discard workout
      </button>
    </div>
    {confirmDiscard ? <div className="workout-finish-backdrop"><section className="panel workout-confirm" role="alertdialog" aria-modal="true" aria-labelledby="discard-workout-title"><h2 id="discard-workout-title">Discard workout?</h2><p>This session will not appear in history or previous performance.</p><button className="secondary-button" type="button" autoFocus onClick={() => setConfirmDiscard(false)}>Keep workout</button><button className="danger-button" type="button" onClick={() => void discardWorkout(workoutId).then(onExit)}>Discard</button></section></div> : null}
    {confirmExerciseRemovalId ? <div className="workout-finish-backdrop"><section className="panel workout-confirm exercise-remove-confirm" role="alertdialog" aria-modal="true" aria-labelledby="remove-active-exercise-title"><h2 id="remove-active-exercise-title">Remove exercise?</h2><p>This exercise contains entered workout data. Removing it will delete its sets from this active workout.</p><button className="secondary-button" type="button" autoFocus onClick={() => setConfirmExerciseRemovalId(undefined)}>Cancel</button><button className="danger-button" type="button" onClick={() => { const exerciseId = confirmExerciseRemovalId; setConfirmExerciseRemovalId(undefined); void run(() => removeActiveExercise(exerciseId)) }}>Remove</button></section></div> : null}
  </div>
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

const DOOM_VICTORY_BANTERS = [
  "RIP AND TEAR, UNTIL IT IS DONE! TODAY'S WORKOUT HAS BEEN ANNIHILATED.",
  "KNEE-DEEP IN THE IRON. THE DEMONS OF PROCRASTINATION HAVE BEEN PURGED.",
  "I'M TOO YOUNG TO DIE? NOT TODAY! YOU WALKED OUT OF THE ARENA VICTORIOUS.",
  "ULTRA-VIOLENCE CONQUERED! HELL'S GATES COULD NOT STOP YOUR PROGRESS.",
  "100% KILLS · 100% ITEMS · 100% SECRETS. ABSOLUTE CARNAGE IN THE GYM.",
  "THEY ARE RAGE, BRUTAL, WITHOUT MERCY. BUT YOU... YOU ARE STRONGER.",
  "SWEAT IS JUST DEMONIC WEAKNESS LEAVING THE BODY. MISSION ACCOMPLISHED!",
  "IDDQD ACTIVATED: INVULNERABLE TO FATIGUE. LEVEL CLEARED WITH HONOR.",
  "YOU HEAR THE DISTANT SCREAMS OF EXCUSES DYING. GAINS SECURED, SLAYER.",
  "NIGHTMARE DIFFICULTY UNLOCKED AND OBLITERATED. REST WELL, WARRIOR.",
]

function DoomConfetti() {
  const particles = useMemo(() => {
    const colors = [
      'var(--color-primary, #a855f7)',
      '#ffb000',
      '#ff3b30',
      '#39ff14',
      '#00e5ff',
      '#e0e7ff',
    ]
    return Array.from({ length: 28 }, (_, i) => ({
      id: i,
      left: `${(i * 3.4 + (i % 7) * 5) % 96}%`,
      delay: `${(i % 10) * 0.1}s`,
      duration: `${1.6 + (i % 5) * 0.3}s`,
      size: `${5 + (i % 4) * 3}px`,
      color: colors[i % colors.length],
      rotation: `${(i * 53) % 360}deg`,
    }))
  }, [])

  return (
    <div className="doom-confetti-container" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="doom-confetti-pixel"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            transform: `rotate(${p.rotation})`,
          }}
        />
      ))}
    </div>
  )
}

export function CompletedWorkoutDetail({ workoutId, onBack, onDeleted = onBack }: { workoutId: string; onBack: () => void; onDeleted?: () => void }) {
  const [detail, setDetail] = useState<WorkoutDetail>()
  const [error, setError] = useState('')
  const [confirmDelete, setConfirmDelete] = useState(false)
  const { playEffect } = useAudio()

  useEffect(() => {
    void getWorkoutDetail(workoutId)
      .then((loaded) => {
        setDetail(loaded)
        playEffect('progress_complete')
      })
      .catch((reason: unknown) => setError(reason instanceof Error ? reason.message : 'Workout could not be loaded.'))
  }, [workoutId, playEffect])

  const banter = useMemo(() => {
    if (!detail) return DOOM_VICTORY_BANTERS[0]
    let hash = 0
    for (let i = 0; i < workoutId.length; i++) hash = (hash * 31 + workoutId.charCodeAt(i)) | 0
    return DOOM_VICTORY_BANTERS[Math.abs(hash) % DOOM_VICTORY_BANTERS.length]
  }, [workoutId, detail])

  if (!detail) {
    return (
      <Panel>
        <button className="dex-back-button" type="button" onClick={onBack} aria-label="Back to Workout Hub">
          <ArrowLeft size={20} />
        </button>
        {error ? <p role="alert">{error}</p> : <RetroLoader label="DECRYPTING COMBAT ARCHIVES..." />}
      </Panel>
    )
  }

  const completedDate = new Date(detail.workout.completedAt ?? detail.workout.startedAt).toLocaleString()
  const durationFormatted = formatDuration(detail.workout.durationSeconds ?? 0)
  const exerciseCount = detail.exercises.length

  return (
    <div className="page-stack completed-workout-page doom-victory-page">
      <DoomConfetti />

      {/* Top Bar Navigation */}
      <header className="doom-victory-topbar">
        <button className="dex-back-button" type="button" onClick={onBack} aria-label="Back to Workout Hub">
          <ArrowLeft size={20} aria-hidden="true" />
        </button>
        <div className="doom-stamp-badge">
          <span className="doom-stamp-hazard">///</span>
          <span className="doom-stamp-text">LEVEL CLEARED</span>
          <span className="doom-stamp-hazard">///</span>
        </div>
      </header>

      {/* Hero Victory Card */}
      <section className="doom-hero-card">
        <div className="doom-slayer-badge" aria-hidden="true">
          <div className="doom-badge-glow" />
          <Skull size={44} className="doom-skull-icon" />
          <div className="doom-badge-stars">
            <Flame size={16} />
            <Trophy size={18} />
            <Flame size={16} />
          </div>
        </div>

        <p className="doom-eyebrow">MISSION ACCOMPLISHED</p>
        <h1 className="doom-workout-title">{detail.workout.nameSnapshot}</h1>
        <p className="doom-timestamp">{completedDate}</p>

        {/* Retro Game Stickers / Badges */}
        <div className="doom-stickers-row">
          <span className="doom-sticker is-primary"><Swords size={12} aria-hidden="true" /> DEMON SLAIN</span>
          <span className="doom-sticker is-accent"><Flame size={12} aria-hidden="true" /> ULTRA-VIOLENCE</span>
          <span className="doom-sticker is-success"><Check size={12} aria-hidden="true" /> 100% CLEARED</span>
        </div>

        {/* Doom Banter Speech Box */}
        <div className="doom-banter-card">
          <div className="doom-banter-header">
            <span className="doom-terminal-dot" />
            <span className="doom-banter-tag">COMBAT_LOG // SLAYER_COMMS</span>
          </div>
          <p className="doom-banter-quote">"{banter}"</p>
        </div>
      </section>

      {/* Clean High-Level Stats HUD */}
      <div className="doom-stats-grid">
        <div className="doom-stat-box">
          <span className="doom-stat-val">{durationFormatted}</span>
          <span className="doom-stat-lbl">DURATION</span>
        </div>
        <div className="doom-stat-box">
          <span className="doom-stat-val">{exerciseCount}</span>
          <span className="doom-stat-lbl">EXERCISES CONQUERED</span>
        </div>
      </div>

      {/* Conquered Exercise Log (Clean checklist, no sets or reps) */}
      <section className="doom-conquered-section">
        <div className="doom-section-header">
          <p className="eyebrow">CONQUERED TARGETS</p>
          <span className="doom-targets-count">{exerciseCount} / {exerciseCount} SLAIN</span>
        </div>
        <div className="doom-conquered-list">
          {detail.exercises.map((item, index) => (
            <div className="doom-conquered-item" key={item.exercise.id}>
              <span className="doom-item-index">{String(index + 1).padStart(2, '0')}</span>
              <span className="doom-item-name">{item.exercise.exerciseNameSnapshot ?? 'TARGET CLEARED'}</span>
              <span className="doom-item-check" aria-label="Completed">
                <Check size={14} strokeWidth={3} aria-hidden="true" />
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Action Buttons */}
      <div className="doom-action-stack">
        <button className="primary-button doom-hub-btn" type="button" onClick={onBack}>
          <Trophy size={18} aria-hidden="true" /> BACK TO TRAINING HUB
        </button>

        <button
          className="text-button completed-workout-delete doom-delete-btn"
          type="button"
          onClick={() => setConfirmDelete(true)}
        >
          <Trash2 size={16} aria-hidden="true" /> Delete workout
        </button>
      </div>

      {confirmDelete ? (
        <WorkoutDeleteDialog
          workoutId={workoutId}
          workoutName={detail.workout.nameSnapshot}
          onCancel={() => setConfirmDelete(false)}
          onDeleted={onDeleted}
        />
      ) : null}
    </div>
  )
}
