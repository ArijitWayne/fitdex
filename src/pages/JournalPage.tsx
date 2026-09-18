import { CalendarDays, ChevronDown, ChevronLeft, ChevronRight, ChevronUp, CircleHelp, Dumbbell, NotebookTabs, Utensils } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Panel } from '../components/ui/Panel'
import { FOOD_MEALS, type FoodLogEntry, type FoodMeal, type PredefinedFoodCategoryId } from '../data/models'
import { FoodCategoryIcon, MealIcon } from '../features/food/FoodIcons'
import { FOOD_MEAL_LABELS, nutritionTotals } from '../features/food/foodModel'
import {
  calculateJournalSummary,
  formatFoodStatus,
  formatJournalNumber,
  formatWorkoutStatus,
  groupFoodEntriesByMeal,
  journalMinutes,
  type JournalDay,
} from '../features/journal/journalModel'
import { getJournalDay } from '../features/journal/journalRepository'
import { CompletedWorkoutDetail } from '../features/workout/WorkoutSessionViews'
import type { WorkoutSummary } from '../features/workout/workoutRepository'
import { dateFromLocalDateKey, getLocalDateKey, isLocalToday, shiftLocalDateKey } from '../utils/localDate'
import { PageHeader } from './PageHeader'
import { GuideDialog, type GuideStep } from '../features/help/GuideDialog'
import { useAudio } from '../features/audio/useAudio'
import { useBackNavigation } from '../features/navigation/useBackNavigation'

const journalHelpSteps: readonly GuideStep[] = [
  {
    title: 'How Journal Works',
    sections: [
      { text: 'Journal is your read-only daily history. You do not create Journal entries manually.' },
      { label: 'Workout', text: 'Completed sessions appear automatically.' },
      { label: 'Food', text: 'FoodLogEntry meal history appears automatically.' },
      { text: 'Use the date controls to review previous days. Journal derives this view without owning duplicate records.' },
    ],
  },
]

function formatDate(dateKey: string) {
  return new Intl.DateTimeFormat(undefined, { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' }).format(dateFromLocalDateKey(dateKey))
}

function plural(value: number, singular: string) {
  return `${value} ${value === 1 ? singular : `${singular}s`}`
}

export function JournalPage() {
  const [date, setDate] = useState(() => getLocalDateKey())
  const [day, setDay] = useState<JournalDay>()
  const [error, setError] = useState('')
  const [workoutId, setWorkoutId] = useState<string>()
  const [helpOpen, setHelpOpen] = useState(false)
  const [openMeals, setOpenMeals] = useState<Record<string, boolean>>({})
  const { playEffect } = useAudio()
  const navigateBack = useBackNavigation('journal-subview', Boolean(workoutId), () => setWorkoutId(undefined))

  useEffect(() => {
    let current = true
    void getJournalDay(date)
      .then((result) => { if (current) setDay(result) })
      .catch((reason: unknown) => { if (current) setError(reason instanceof Error ? reason.message : 'Journal history could not be loaded.') })
    return () => { current = false }
  }, [date])

  const summary = useMemo(() => day ? calculateJournalSummary(day) : undefined, [day])
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
    setOpenMeals({})
    setDate((current) => shiftLocalDateKey(current, amount))
  }

  const sessionCount = summary ? summary.sessionCount : 0
  const foodItemCount = day ? day.foodEntries.length : 0
  const isLoaded = Boolean(day && !error)
  const isEmpty = isLoaded && sessionCount === 0 && foodItemCount === 0

  return (
    <div className="page-stack journal-page">
      <PageHeader eyebrow="Daily record" title="Journal" description="Your daily fitness history" action={<button className="page-help-button" type="button" onClick={() => { playEffect('select'); setHelpOpen(true) }}><CircleHelp size={18} aria-hidden="true" /> How Journal Works</button>} />

      <header className="journal-date-header">
        <button
          type="button"
          aria-label="Previous day"
          onClick={() => { playEffect('select'); navigate(-1) }}
        >
          <ChevronLeft aria-hidden="true" />
        </button>
        <div>
          <CalendarDays size={18} aria-hidden="true" />
          <strong>{formatDate(date)}</strong>
        </div>
        <button
          type="button"
          aria-label="Next day"
          onClick={() => { playEffect('select'); navigate(1) }}
        >
          <ChevronRight aria-hidden="true" />
        </button>
        {isLocalToday(date) ? <span className="journal-today">Today</span> : null}
      </header>

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
        <Panel className="journal-ledger-hero" eyebrow="Field log">
          <div className="journal-ledger-head">
            <span className="journal-log-mark" aria-hidden="true">
              <NotebookTabs size={22} />
            </span>
            <div>
              <h2 className="journal-ledger-head-title">{formatDate(date)}</h2>
              <p className="journal-ledger-head-desc">Activity captured from Workout and Food.</p>
            </div>
          </div>

          <div className="journal-summary-grid">
            <section className="journal-summary-stat" aria-labelledby="journal-workout-summary">
              <Dumbbell aria-hidden="true" />
              <div>
                <h3 id="journal-workout-summary" className="sr-only">Workout Summary</h3>
                <strong>{formatWorkoutStatus(sessionCount)}</strong>
                <span>{sessionCount > 0 ? `${plural(journalMinutes(summary.durationSeconds), 'min')} trained` : '0 min trained'}</span>
              </div>
            </section>
            <section className="journal-summary-stat" aria-labelledby="journal-nutrition-summary">
              <Utensils aria-hidden="true" />
              <div>
                <h3 id="journal-nutrition-summary" className="sr-only">Nutrition Summary</h3>
                <strong>{formatFoodStatus(foodItemCount)}</strong>
                <span>{foodItemCount > 0 ? `${formatJournalNumber(summary.kcal)} kcal · ${formatJournalNumber(summary.protein)} g protein` : '0 kcal · 0 g protein'}</span>
              </div>
            </section>
          </div>
        </Panel>
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
          <section className="journal-timeline" aria-labelledby="journal-timeline-title">
            <div className="journal-ledger-title-row">
              <p className="eyebrow" id="journal-timeline-title">Log entries</p>
              <span className="journal-ledger-subtitle">Read-only record</span>
            </div>

            <ol className="journal-ledger">
              {day?.workouts.map((workoutSummary) => (
                <JournalWorkoutRow
                  key={workoutSummary.workout.id}
                  summary={workoutSummary}
                  onOpen={() => {
                    playEffect('select')
                    setWorkoutId(workoutSummary.workout.id)
                  }}
                />
              ))}
              {populatedMeals.map((meal) => (
                <JournalMealRow
                  key={meal}
                  meal={meal}
                  entries={meals[meal]}
                  isOpen={Boolean(openMeals[meal])}
                  onToggle={() => {
                    playEffect('select')
                    setOpenMeals((current) => ({ ...current, [meal]: !current[meal] }))
                  }}
                />
              ))}
            </ol>
          </section>
        )
      ) : null}

      {helpOpen ? <GuideDialog eyebrow="Connected history" steps={journalHelpSteps} onClose={() => setHelpOpen(false)} /> : null}
    </div>
  )
}

function JournalWorkoutRow({ summary, onOpen }: { summary: WorkoutSummary; onOpen: () => void }) {
  const duration = journalMinutes(summary.workout.durationSeconds ?? 0)
  return (
    <li className="journal-ledger-entry">
      <button
        className="journal-ledger-row-main"
        type="button"
        onClick={onOpen}
        aria-label={`View ${summary.workout.nameSnapshot}`}
      >
        <span className="journal-mark" aria-hidden="true">
          <Dumbbell size={19} />
        </span>
        <span className="journal-ledger-copy">
          <strong className="journal-ledger-title">{summary.workout.nameSnapshot}</strong>
          <small className="journal-ledger-meta">
            {plural(duration, 'min')} · {plural(summary.exerciseCount, 'exercise')}
          </small>
        </span>
        <span className="journal-ledger-nav" aria-hidden="true">
          <ChevronRight size={18} />
        </span>
      </button>
    </li>
  )
}

function JournalMealRow({
  meal,
  entries,
  isOpen,
  onToggle,
}: {
  meal: FoodMeal
  entries: FoodLogEntry[]
  isOpen: boolean
  onToggle: () => void
}) {
  const totals = nutritionTotals(entries)
  const count = entries.length
  return (
    <li className={`journal-ledger-entry is-meal ${isOpen ? 'is-open' : ''}`}>
      <button
        className="journal-ledger-row-main"
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-label={`${isOpen ? 'Collapse' : 'Expand'} ${FOOD_MEAL_LABELS[meal]}`}
      >
        <span className="journal-mark journal-mark-warm" aria-hidden="true">
          <MealIcon meal={meal} />
        </span>
        <span className="journal-ledger-copy">
          <strong className="journal-ledger-title">{FOOD_MEAL_LABELS[meal]}</strong>
          <small className="journal-ledger-meta">
            {plural(count, 'item')} · {formatJournalNumber(totals.kcal ?? 0)} kcal · {formatJournalNumber(totals.protein ?? 0)} g protein
          </small>
        </span>
        <span className="journal-ledger-disclosure" aria-hidden="true">
          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </span>
      </button>

      {isOpen ? (
        <div className="journal-ledger-detail">
          <ul className="journal-ledger-food-list">
            {entries.map((entry) => {
              const categoryLabel = entry.categoryKind === 'unresolved' ? 'Uncategorized' : entry.categoryName
              const categoryId = (entry.categoryId as PredefinedFoodCategoryId) ?? 'other'
              return (
                <li key={entry.id} className="journal-ledger-food-item">
                  <span className="journal-ledger-food-mark" aria-hidden="true">
                    <FoodCategoryIcon categoryId={categoryId} label={categoryLabel} color={entry.customCategoryColor} />
                  </span>
                  <span className="journal-ledger-food-copy">
                    <strong>{entry.foodName}</strong>
                    <small>
                      {categoryLabel}
                      {entry.kcal !== undefined ? ` · ${formatJournalNumber(entry.kcal)} kcal` : ''}
                      {entry.protein !== undefined ? ` · ${formatJournalNumber(entry.protein)} g protein` : ''}
                    </small>
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      ) : null}
    </li>
  )
}
