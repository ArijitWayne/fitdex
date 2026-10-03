import { ChevronLeft, ChevronRight, CircleHelp } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Panel } from '../components/ui/Panel'
import { CommandPageFrame } from '../components/layout/CommandPageFrame'
import { CollapsibleModule } from '../components/ui/CollapsibleModule'
import { ContextRail } from '../components/ui/ContextRail'
import { FOOD_MEALS, type FoodMeal } from '../data/models'
import { FOOD_MEAL_LABELS, nutritionTotals } from '../features/food/foodModel'
import {
  calculateJournalSummary,
  formatExerciseSets,
  formatFoodStatus,
  formatJournalNumber,
  formatWorkoutStatus,
  groupFoodEntriesByMeal,
  journalMinutes,
  type JournalDay,
} from '../features/journal/journalModel'
import { getJournalDay, saveJournalNote } from '../features/journal/journalRepository'
import { CompletedWorkoutDetail } from '../features/workout/WorkoutSessionViews'
import { dateFromLocalDateKey, getLocalDateKey, isLocalToday, shiftLocalDateKey } from '../utils/localDate'
import { GuideDialog, type GuideStep } from '../features/help/GuideDialog'
import { useAudio } from '../features/audio/useAudio'
import { useBackNavigation } from '../features/navigation/useBackNavigation'
import { acknowledgeFirstUse, loadFirstUseGuidance } from '../features/help/firstUseGuidance'

function normalizeMealKey(meal: string): FoodMeal | undefined {
  const key = meal.toLowerCase().trim()
  if (key === 'breakfast' || key === 'lunch' || key === 'dinner' || key === 'supper') {
    return key as FoodMeal
  }
  return undefined
}

const journalHelpSteps: readonly GuideStep[] = [
  {
    title: 'How Journal Works',
    sections: [
      { text: 'Journal is your read-only daily history. Completed workouts and logged meals appear automatically.' },
      { label: 'Workout', text: 'Completed sessions with exercise sets appear automatically.' },
      { label: 'Food', text: 'FoodLogEntry meal history appears automatically.' },
      { label: 'Notes', text: 'Capture your thoughts, energy levels, or reflections for each day.' },
      { text: 'Use the date controls to review previous days. Journal derives this view without owning duplicate records.' },
    ],
  },
]

function formatDate(dateKey: string) {
  return new Intl.DateTimeFormat(undefined, { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' }).format(dateFromLocalDateKey(dateKey))
}

export function JournalPage() {
  const [date, setDate] = useState(() => getLocalDateKey())
  const [day, setDay] = useState<JournalDay>()
  const [error, setError] = useState('')
  const [workoutId, setWorkoutId] = useState<string>()
  const [helpOpen, setHelpOpen] = useState(false)
  const [showFirstUse, setShowFirstUse] = useState(false)
  const { playEffect } = useAudio()
  const navigateBack = useBackNavigation('journal-subview', Boolean(workoutId), () => setWorkoutId(undefined))

  useEffect(() => {
    let current = true
    void getJournalDay(date)
      .then((result) => { if (current) setDay(result) })
      .catch((reason: unknown) => { if (current) setError(reason instanceof Error ? reason.message : 'Journal history could not be loaded.') })
    return () => { current = false }
  }, [date])
  useEffect(() => { void loadFirstUseGuidance().then((guidance) => setShowFirstUse(!guidance.journal)) }, [])

  const summary = useMemo(() => (day ? calculateJournalSummary(day) : undefined), [day])
  const meals = useMemo(() => groupFoodEntriesByMeal(day?.foodEntries ?? []), [day])
  const populatedMeals = useMemo(() => FOOD_MEALS.filter((meal) => (meals[meal] ?? []).length > 0), [meals])

  if (workoutId) {
    return (
      <CompletedWorkoutDetail
        workoutId={workoutId}
        onBack={() => { void navigateBack() }}
        onDeleted={() => {
          setDay((current) => current ? { ...current, workouts: current.workouts.filter((entry) => entry.workout.id !== workoutId) } : current)
          setWorkoutId(undefined)
        }}
      />
    )
  }

  const navigate = (amount: number) => {
    setDay(undefined)
    setError('')
    setDate((current) => shiftLocalDateKey(current, amount))
  }

  const sessionCount = summary ? summary.sessionCount : 0
  const foodItemCount = day ? day.foodEntries.length : 0
  const isLoaded = Boolean(day && !error)
  const activityCount = sessionCount + (populatedMeals.length > 0 ? 1 : 0) + (day?.note ? 1 : 0)
  const isEmpty = isLoaded && sessionCount === 0 && foodItemCount === 0 && !day?.note

  const totalExercises = day?.workouts.reduce((sum, w) => sum + (w.exerciseDetails?.length ?? w.exerciseCount), 0) ?? 0
  const totalSets = day?.workouts.reduce((sum, w) => sum + w.totalSetCount, 0) ?? 0
  const totalVolume = day?.workouts.reduce((sum, w) => sum + w.volume, 0) ?? 0

  const workoutsSummaryLine = totalSets > 0
    ? `${totalSets} Sets${totalVolume > 0 ? ` · ${formatJournalNumber(totalVolume)} kg Total Volume` : ''}`
    : (day?.workouts.map((w) => w.workout.nameSnapshot).join(', ') || 'No workouts logged')

  return (
    <CommandPageFrame className="page-stack journal-page"
      terminalTitle="FITDEX // LOG ARCHIVE"
      headerActions={
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <button
            className="food-today-button journal-today-button"
            type="button"
            style={{ padding: '2px 6px', fontSize: '0.62rem', height: '22px' }}
            disabled={isLocalToday(date)}
            aria-label="Go to today"
            onClick={() => {
              playEffect('select')
              setDay(undefined)
              setError('')
              setDate(getLocalDateKey())
            }}
          >
            Today
          </button>
          <button
            className="page-help-button cmd-icon-btn"
            type="button"
            onClick={() => {
              playEffect('select')
              setHelpOpen(true)
            }}
            aria-label="How Journal Works"
            title="How Journal Works"
          >
            <CircleHelp size={16} aria-hidden="true" />
          </button>
        </div>
      }
    >
      {showFirstUse ? (
        <ContextRail
          title="Journal is your read-only daily record"
          actions={
            <button
              className="secondary-button"
              type="button"
              onClick={() => {
                playEffect('select')
                void acknowledgeFirstUse('journal')
                setShowFirstUse(false)
              }}
            >
              Understood
            </button>
          }
        >
          <p>
            Finished workouts and Food entries appear here automatically. Use the date controls to review history; there is no duplicate Journal entry to maintain.
          </p>
        </ContextRail>
      ) : null}

      <div className="food-date-nav journal-date-nav" style={{ margin: '0 0 4px' }}>
        <button
          type="button"
          aria-label="Previous day"
          onClick={() => {
            playEffect('select')
            navigate(-1)
          }}
        >
          <ChevronLeft />
        </button>
        <span>
          <strong>{formatDate(date)}</strong>
          <small>
            {activityCount === 0
              ? (isLocalToday(date) ? 'Today · No Activities' : 'No Activities Logged')
              : `${activityCount} ${activityCount === 1 ? 'Activity' : 'Activities'} Logged`}
          </small>
        </span>
        <button
          type="button"
          aria-label="Next day"
          onClick={() => {
            playEffect('select')
            navigate(1)
          }}
        >
          <ChevronRight />
        </button>
      </div>

      {!day && !error ? (
        <section className="panel journal-loading" role="status" aria-live="polite">
          <span className="empty-glyph" aria-hidden="true">…</span>
          <div>
            <h2>Loading daily history</h2>
            <p>Reading completed workouts and logged foods.</p>
          </div>
        </section>
      ) : null}

      {error ? (
        <section className="panel journal-error" role="alert">
          <span className="empty-glyph" aria-hidden="true">!</span>
          <div>
            <h2>Journal unavailable</h2>
            <p>{error}</p>
          </div>
        </section>
      ) : null}

      {isLoaded && summary ? (
        <section className="journal-summary-box journal-ledger-hero" aria-label="Day Activity Summary">
          <p className="sr-only">Field log</p>
          <div className="journal-summary-grid journal-summary-rows">
            <div className="journal-summary-row journal-summary-stat">
              <span className="journal-summary-icon" aria-hidden="true">
                <RetroDumbbellIcon size={18} />
              </span>
              <strong className="journal-summary-label">{sessionCount > 0 ? 'Completed Training' : 'Training Status'}</strong>
              <span className="journal-summary-value">
                {sessionCount > 0
                  ? `${day?.workouts.map((w) => w.workout.nameSnapshot).join(', ') ?? 'Workout'} (${journalMinutes(summary.durationSeconds)}m)`
                  : formatWorkoutStatus(sessionCount)}
              </span>
            </div>
            <div className="journal-summary-row journal-summary-stat">
              <span className="journal-summary-icon journal-summary-icon-warm" aria-hidden="true">
                <FoodClocheIcon size={18} />
              </span>
              <strong className="journal-summary-label">{foodItemCount > 0 ? 'Nutrition Logged' : 'Nutrition Status'}</strong>
              <span className="journal-summary-value">
                {foodItemCount > 0
                  ? `${formatJournalNumber(summary.kcal)} kcal · ${formatJournalNumber(summary.protein)}g Protein`
                  : formatFoodStatus(foodItemCount)}
              </span>
            </div>
          </div>
        </section>
      ) : null}

      {isLoaded ? (
        isEmpty ? (
          <Panel className="journal-empty">
            <span className="empty-glyph" aria-hidden="true">▤</span>
            <div>
              <h2>No activity logged</h2>
              <p>Completed workouts and logged foods appear here automatically.</p>
            </div>
          </Panel>
        ) : (
          <>
            {day?.workouts.length ? (
              <CollapsibleModule
                id="journal-workouts"
                title="Workout Breakdown"
                badge={`${totalExercises} ${totalExercises === 1 ? 'Exercise' : 'Exercises'}`}
                summary={workoutsSummaryLine}
                defaultExpanded={true}
              >
                <div className="journal-drawer-list">
                  {day.workouts.map((workoutSummary) => (
                    <div key={workoutSummary.workout.id} className="journal-workout-group">
                      {workoutSummary.exerciseDetails?.length ? (
                        workoutSummary.exerciseDetails.map((detail) => (
                          <button
                            key={detail.exercise.id}
                            type="button"
                            className="proto-item-row journal-item-row"
                            onClick={() => {
                              playEffect('select')
                              setWorkoutId(workoutSummary.workout.id)
                            }}
                            aria-label={`View ${detail.exercise.exerciseNameSnapshot}`}
                          >
                            <div className="proto-item-info journal-item-info">
                              <strong className="journal-item-title">{detail.exercise.exerciseNameSnapshot}</strong>
                              <small className="journal-item-meta">
                                {formatExerciseSets(detail.sets, detail.exercise.trackingTypeSnapshot ?? 'reps_only')}
                              </small>
                            </div>
                            <span className="proto-item-value journal-item-value">
                              {detail.sets.length} {detail.sets.length === 1 ? 'Set' : 'Sets'}
                            </span>
                          </button>
                        ))
                      ) : (
                        <button
                          type="button"
                          className="proto-item-row journal-item-row"
                          onClick={() => {
                            playEffect('select')
                            setWorkoutId(workoutSummary.workout.id)
                          }}
                          aria-label={`View ${workoutSummary.workout.nameSnapshot}`}
                        >
                          <div className="proto-item-info journal-item-info">
                            <strong className="journal-item-title">{workoutSummary.workout.nameSnapshot}</strong>
                            <small className="journal-item-meta">{journalMinutes(workoutSummary.workout.durationSeconds ?? 0)}m duration</small>
                          </div>
                          <span className="proto-item-value journal-item-value">
                            {workoutSummary.exerciseCount} {workoutSummary.exerciseCount === 1 ? 'Exercise' : 'Exercises'}
                          </span>
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </CollapsibleModule>
            ) : null}

            {populatedMeals.length ? (
              <CollapsibleModule
                id="journal-meals"
                title="Meals Logged"
                badge={`${populatedMeals.length} ${populatedMeals.length === 1 ? 'Meal' : 'Meals'}`}
                defaultExpanded={!day?.workouts.length}
              >
                <div className="journal-drawer-list">
                  {populatedMeals.map((meal) => {
                    const mealEntries = meals[meal] ?? []
                    const mealTotal = nutritionTotals(mealEntries)
                    const foodNamesPreview = mealEntries.map((e) => e.foodName).join(', ')
                    const normalizedMeal = normalizeMealKey(meal)
                    return (
                      <div key={meal} className="proto-meal-row journal-meal-row">
                        {normalizedMeal ? (
                          <div className="journal-meal-slot" aria-hidden="true">
                            <img
                              src={`/food/meals/meal-${normalizedMeal}.webp`}
                              alt=""
                              className="journal-meal-art"
                              loading="lazy"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none'
                              }}
                            />
                          </div>
                        ) : null}
                        <div className="proto-meal-info journal-meal-info">
                          <strong className="journal-item-title">{FOOD_MEAL_LABELS[meal] ?? meal}</strong>
                          <small className="journal-item-meta">{foodNamesPreview || 'No items logged'}</small>
                        </div>
                        <span className="proto-meal-value journal-meal-value">
                          {formatJournalNumber(mealTotal.kcal ?? 0)} kcal
                        </span>
                      </div>
                    )
                  })}
                </div>
              </CollapsibleModule>
            ) : null}

            <CollapsibleModule
              id="journal-notes"
              title="Notes & Reflection"
              badge={day?.note ? '1 Note' : 'No note'}
              summary={day?.note ? `"${day.note.length > 50 ? `${day.note.slice(0, 50)}…` : day.note}"` : 'Add reflection'}
              defaultExpanded={false}
            >
              <JournalNoteSection
                key={`${date}:${day?.note ?? ''}`}
                date={date}
                note={day?.note}
                onSave={async (newNote) => {
                  await saveJournalNote(date, newNote)
                  setDay((prev) => (prev ? { ...prev, note: newNote || undefined } : prev))
                }}
              />
            </CollapsibleModule>
          </>
        )
      ) : null}

      {helpOpen ? <GuideDialog eyebrow="Connected history" steps={journalHelpSteps} onClose={() => setHelpOpen(false)} /> : null}
    </CommandPageFrame>
  )
}

function JournalNoteSection({
  date: _date,
  note,
  onSave,
}: {
  date: string
  note?: string
  onSave: (note: string) => Promise<void>
}) {
  const [isEditing, setIsEditing] = useState(!note)
  const [draft, setDraft] = useState(note ?? '')
  const [isSaving, setIsSaving] = useState(false)
  const { playEffect } = useAudio()

  const handleSave = async () => {
    setIsSaving(true)
    playEffect('select')
    try {
      await onSave(draft)
      setIsEditing(false)
    } finally {
      setIsSaving(false)
    }
  }

  const handleClear = async () => {
    setIsSaving(true)
    playEffect('select')
    try {
      setDraft('')
      await onSave('')
      setIsEditing(true)
    } finally {
      setIsSaving(false)
    }
  }

  if (!isEditing && note) {
    return (
      <div className="journal-note-display">
        <p className="journal-note-quote">"{note}"</p>
        <button
          type="button"
          className="secondary-button journal-note-btn"
          onClick={() => {
            playEffect('select')
            setIsEditing(true)
          }}
        >
          + Edit Day Note
        </button>
      </div>
    )
  }

  return (
    <div className="journal-note-editor">
      <label htmlFor="journal-note-input" className="sr-only">
        Daily notes and reflections
      </label>
      <textarea
        id="journal-note-input"
        className="journal-note-textarea"
        placeholder="Write daily reflection, training notes, mindset, or energy levels..."
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        rows={3}
      />
      <div className="journal-note-actions">
        <button
          type="button"
          className="primary-button journal-note-btn"
          onClick={() => { void handleSave() }}
          disabled={isSaving}
        >
          {isSaving ? 'Saving…' : 'Save Note'}
        </button>
        {note ? (
          <button
            type="button"
            className="secondary-button journal-note-btn"
            onClick={() => {
              setDraft(note)
              setIsEditing(false)
            }}
            disabled={isSaving}
          >
            Cancel
          </button>
        ) : null}
        {note ? (
          <button
            type="button"
            className="ghost-button journal-note-btn journal-note-clear"
            onClick={() => { void handleClear() }}
            disabled={isSaving}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  )
}

function RetroDumbbellIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Outer weight plates */}
      <rect x="3" y="7.5" width="2.5" height="9" rx="0.75" fill="currentColor" fillOpacity="0.16" />
      {/* Inner weight plates */}
      <rect x="6.5" y="5" width="2.5" height="14" rx="0.75" fill="currentColor" fillOpacity="0.16" />
      {/* Central bar */}
      <path d="M9 12h6" strokeWidth="2.5" />
      {/* Knurled grip detail */}
      <path d="M12 10.5v3" strokeWidth="1.5" />
      {/* Right inner weight plates */}
      <rect x="15" y="5" width="2.5" height="14" rx="0.75" fill="currentColor" fillOpacity="0.16" />
      {/* Right outer weight plates */}
      <rect x="18.5" y="7.5" width="2.5" height="9" rx="0.75" fill="currentColor" fillOpacity="0.16" />
    </svg>
  )
}

function FoodClocheIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Retro cloche dome silhouette */}
      <path
        d="M4 17c0-4.4 3.6-8 8-8s8 3.6 8 8H4z"
        fill="currentColor"
        fillOpacity="0.16"
      />
      <circle cx="12" cy="5" r="1.5" fill="currentColor" />
      <path d="M12 6.5v2.5" />
      <path d="M4 17a8 8 0 0 1 16 0" />
      <path d="M2 18h20" />
      <path d="M5 18c.6 1.6 2.2 2.5 7 2.5s6.4-.9 7-2.5" strokeWidth="1.5" />
    </svg>
  )
}
