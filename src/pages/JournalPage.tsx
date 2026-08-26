import { CalendarDays, ChevronLeft, ChevronRight, CircleHelp, Dumbbell, Utensils } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Panel } from '../components/ui/Panel'
import { FOOD_MEALS, type FoodLogEntry, type FoodMeal } from '../data/models'
import { FoodCategoryIcon, MealIcon } from '../features/food/FoodIcons'
import { FOOD_MEAL_LABELS, nutritionTotals } from '../features/food/foodModel'
import { calculateJournalSummary, formatJournalNumber, groupFoodEntriesByMeal, journalMinutes, type JournalDay } from '../features/journal/journalModel'
import { getJournalDay } from '../features/journal/journalRepository'
import { CompletedWorkoutDetail } from '../features/workout/WorkoutSessionViews'
import type { WorkoutSummary } from '../features/workout/workoutRepository'
import { dateFromLocalDateKey, getLocalDateKey, isLocalToday, shiftLocalDateKey } from '../utils/localDate'
import { PageHeader } from './PageHeader'
import { GuideDialog, type GuideStep } from '../features/help/GuideDialog'

const journalHelpSteps: readonly GuideStep[] = [{ title: 'How Journal Works', sections: [{ text: 'Journal is your read-only daily history. You do not create Journal entries manually.' }, { label: 'Workout', text: 'Completed sessions appear automatically.' }, { label: 'Food', text: 'FoodLogEntry meal history appears automatically.' }, { text: 'Use the date controls to review previous days. Journal derives this view without owning duplicate records.' }] }]

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

  useEffect(() => {
    let current = true
    void getJournalDay(date)
      .then((result) => { if (current) setDay(result) })
      .catch((reason: unknown) => { if (current) setError(reason instanceof Error ? reason.message : 'Journal history could not be loaded.') })
    return () => { current = false }
  }, [date])

  const summary = useMemo(() => day ? calculateJournalSummary(day) : undefined, [day])
  const meals = useMemo(() => groupFoodEntriesByMeal(day?.foodEntries ?? []), [day])

  if (workoutId) return <CompletedWorkoutDetail workoutId={workoutId} onBack={() => setWorkoutId(undefined)} onDeleted={() => { setDay((current) => current ? { ...current, workouts: current.workouts.filter((entry) => entry.workout.id !== workoutId) } : current); setWorkoutId(undefined) }} />

  const navigate = (amount: number) => {
    setDay(undefined)
    setError('')
    setDate((current) => shiftLocalDateKey(current, amount))
  }
  const empty = Boolean(day && !day.workouts.length && !day.foodEntries.length)

  return <div className="page-stack journal-page">
    <PageHeader eyebrow="Daily record" title="Journal" description="Your daily fitness history" action={<button className="page-help-button" type="button" onClick={() => setHelpOpen(true)}><CircleHelp size={18} aria-hidden="true" /> How Journal Works</button>} />

    <header className="journal-date-header">
      <button type="button" aria-label="Previous day" onClick={() => navigate(-1)}><ChevronLeft aria-hidden="true" /></button>
      <div><CalendarDays size={18} aria-hidden="true" /><strong>{formatDate(date)}</strong></div>
      <button type="button" aria-label="Next day" onClick={() => navigate(1)}><ChevronRight aria-hidden="true" /></button>
      {isLocalToday(date) ? <span className="journal-today">Today</span> : null}
    </header>

    <Panel className="journal-summary" eyebrow="Daily summary">
      {summary ? <div className="journal-summary-grid">
        <section aria-labelledby="journal-workout-summary"><Dumbbell aria-hidden="true" /><div><h2 id="journal-workout-summary">Workout</h2><strong>{plural(summary.sessionCount, 'session')}</strong><span>{plural(journalMinutes(summary.durationSeconds), 'min')}</span></div></section>
        <section aria-labelledby="journal-nutrition-summary"><Utensils aria-hidden="true" /><div><h2 id="journal-nutrition-summary">Nutrition</h2><strong>{formatJournalNumber(summary.kcal)} kcal</strong><span>{formatJournalNumber(summary.protein)} g protein</span></div></section>
      </div> : <p className="journal-loading" aria-live="polite">Loading daily history…</p>}
      {error ? <p className="form-error" role="alert">{error}</p> : null}
    </Panel>

    {empty ? <Panel className="journal-empty"><span className="empty-glyph" aria-hidden="true">▤</span><div><h2>No activity logged</h2><p>No completed workouts or food entries were recorded for this day.</p></div></Panel> : null}

    <section className="journal-timeline" aria-labelledby="journal-timeline-title">
      <p className="eyebrow" id="journal-timeline-title">Timeline</p>
      {day?.workouts.map((workout) => <JournalWorkoutCard key={workout.workout.id} summary={workout} onOpen={() => setWorkoutId(workout.workout.id)} />)}
      {FOOD_MEALS.map((meal) => <JournalMealSection key={meal} meal={meal} entries={meals[meal]} />)}
    </section>
    {helpOpen ? <GuideDialog eyebrow="Connected history" steps={journalHelpSteps} onClose={() => setHelpOpen(false)} /> : null}
  </div>
}

function JournalWorkoutCard({ summary, onOpen }: { summary: WorkoutSummary; onOpen: () => void }) {
  const duration = journalMinutes(summary.workout.durationSeconds ?? 0)
  return <article className="panel journal-workout-card">
    <div className="journal-section-heading"><span className="journal-section-icon"><Dumbbell aria-hidden="true" /></span><div><p className="eyebrow">Workout</p><h2>{summary.workout.nameSnapshot}</h2></div></div>
    <p className="journal-workout-meta">{plural(duration, 'min')} · {plural(summary.exerciseCount, 'exercise')}</p>
    <button className="secondary-button" type="button" onClick={onOpen}>View Workout <ChevronRight size={17} aria-hidden="true" /></button>
  </article>
}

function JournalMealSection({ meal, entries }: { meal: FoodMeal; entries: FoodLogEntry[] }) {
  const totals = nutritionTotals(entries)
  return <article className="panel journal-meal-card">
    <div className="journal-section-heading"><MealIcon meal={meal} /><div><p className="eyebrow">Meal</p><h2>{FOOD_MEAL_LABELS[meal]}</h2></div></div>
    {entries.length ? <>
      <ul className="journal-food-list">{entries.map((entry) => {
        const categoryLabel = entry.categoryKind === 'unresolved' ? 'Uncategorized' : entry.categoryName
        return <li key={entry.id}><FoodCategoryIcon categoryId={entry.categoryId ?? 'other'} label={categoryLabel} color={entry.customCategoryColor} /><span><strong>{entry.foodName}</strong>{entry.categoryKind === 'unresolved' ? <small>Uncategorized</small> : null}</span></li>
      })}</ul>
      <p className="journal-meal-total"><strong>{formatJournalNumber(totals.kcal ?? 0)} kcal</strong><span>·</span><strong>{formatJournalNumber(totals.protein ?? 0)} g protein</strong></p>
    </> : <p className="journal-no-entries">No entries</p>}
  </article>
}
