import { ArrowLeft, ChevronRight, Search, Star } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Panel } from '../../components/ui/Panel'
import { db } from '../../data/database'
import type { Exercise, ExerciseCategory } from '../../data/models'
import {
  CATEGORY_SUBFILTERS,
  EXERCISE_CATEGORIES,
  TRACKING_TYPE_LABELS,
  filterBySubfilter,
  searchExercises,
} from './exerciseCatalog'
import { ensureBuiltInExercises } from './seedExercises'

type LoadState = 'loading' | 'ready' | 'error'

export function ExerciseDex() {
  const [exercises, setExercises] = useState<Exercise[]>([])
  const [favourites, setFavourites] = useState<Set<string>>(new Set())
  const [loadState, setLoadState] = useState<LoadState>('loading')
  const [category, setCategory] = useState<ExerciseCategory | null>(null)
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null)
  const [query, setQuery] = useState('')
  const [subfilter, setSubfilter] = useState('All')

  useEffect(() => {
    let active = true

    async function load() {
      try {
        await ensureBuiltInExercises()
        const [exerciseRecords, preferenceRecords] = await Promise.all([
          db.exercises.toArray(),
          db.exercisePreferences.toArray(),
        ])
        if (!active) return
        setExercises(exerciseRecords.filter((exercise) => !exercise.archived).sort((left, right) => left.name.localeCompare(right.name)))
        setFavourites(new Set(preferenceRecords.filter((preference) => preference.favourite).map((preference) => preference.exerciseId)))
        setLoadState('ready')
      } catch {
        if (active) setLoadState('error')
      }
    }

    void load()
    return () => { active = false }
  }, [])

  const counts = useMemo(() => {
    const next = new Map<ExerciseCategory, number>(EXERCISE_CATEGORIES.map((item) => [item, 0]))
    for (const exercise of exercises) next.set(exercise.category, (next.get(exercise.category) ?? 0) + 1)
    return next
  }, [exercises])

  const categoryExercises = useMemo(
    () => category ? exercises.filter((exercise) => exercise.category === category) : [],
    [category, exercises],
  )
  const visibleExercises = useMemo(() => {
    const scope = category ? filterBySubfilter(categoryExercises, category, subfilter) : exercises
    return searchExercises(scope, query)
  }, [category, categoryExercises, exercises, query, subfilter])

  async function toggleFavourite(exerciseId: string) {
    const nextFavourite = !favourites.has(exerciseId)
    const id = `exercise-preference:${exerciseId}`
    const existing = await db.exercisePreferences.get(id)
    const timestamp = new Date().toISOString()
    await db.exercisePreferences.put({
      id,
      exerciseId,
      favourite: nextFavourite,
      personalNotes: existing?.personalNotes,
      customTagIds: existing?.customTagIds ?? [],
      createdAt: existing?.createdAt ?? timestamp,
      updatedAt: timestamp,
    })
    setFavourites((current) => {
      const next = new Set(current)
      if (nextFavourite) next.add(exerciseId)
      else next.delete(exerciseId)
      return next
    })
  }

  function openCategory(nextCategory: ExerciseCategory) {
    setCategory(nextCategory)
    setSubfilter('All')
    setQuery('')
  }

  function returnToIndex() {
    setCategory(null)
    setSubfilter('All')
    setQuery('')
  }

  if (loadState === 'loading') {
    return <Panel className="exercise-dex-state" eyebrow="Exercise Dex" title="Loading exercise library"><p>Preparing the local index…</p></Panel>
  }

  if (loadState === 'error') {
    return <Panel className="exercise-dex-state" eyebrow="Exercise Dex" title="Exercise library unavailable"><p>The local exercise index could not be opened on this device.</p></Panel>
  }

  if (selectedExercise) {
    return (
      <ExerciseDetail
        exercise={selectedExercise}
        favourite={favourites.has(selectedExercise.id)}
        onBack={() => setSelectedExercise(null)}
        onToggleFavourite={() => void toggleFavourite(selectedExercise.id)}
      />
    )
  }

  return (
    <Panel className="exercise-dex-panel">
      <div className="exercise-dex-heading">
        {category ? <button className="dex-back-button" type="button" onClick={returnToIndex} aria-label="Back to Exercise Dex categories"><ArrowLeft size={20} aria-hidden="true" /></button> : null}
        <div>
          <p className="eyebrow">Exercise Dex</p>
          <h2>{category ?? 'Exercise library'}</h2>
          <p>{category ? `${categoryExercises.length} exercises` : `${exercises.length} universal exercises`}</p>
        </div>
      </div>

      <label className="exercise-search">
        <span className="visually-hidden">{category ? `Search ${category} exercises` : 'Search all exercises'}</span>
        <Search size={19} aria-hidden="true" />
        <input
          type="search"
          value={query}
          placeholder={category ? `Search ${category.toLowerCase()} exercises…` : 'Search exercises…'}
          onChange={(event) => setQuery(event.target.value)}
        />
      </label>

      {category ? (
        <div className="exercise-filter-strip" aria-label={`${category} exercise filters`}>
          {CATEGORY_SUBFILTERS[category].map((filter) => (
            <button className={filter === subfilter ? 'exercise-filter is-selected' : 'exercise-filter'} type="button" key={filter} aria-pressed={filter === subfilter} onClick={() => setSubfilter(filter)}>{filter}</button>
          ))}
        </div>
      ) : null}

      {!category && !query.trim() ? (
        <div className="exercise-category-list">
          {EXERCISE_CATEGORIES.map((item) => (
            <button className="exercise-category-row" type="button" key={item} onClick={() => openCategory(item)}>
              <span><strong>{item}</strong><small>{counts.get(item) ?? 0} exercises</small></span>
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          ))}
        </div>
      ) : (
        <ExerciseRows exercises={visibleExercises} favourites={favourites} onSelect={setSelectedExercise} onToggleFavourite={(id) => void toggleFavourite(id)} />
      )}
    </Panel>
  )
}

function ExerciseRows({ exercises, favourites, onSelect, onToggleFavourite }: {
  exercises: readonly Exercise[]
  favourites: ReadonlySet<string>
  onSelect: (exercise: Exercise) => void
  onToggleFavourite: (exerciseId: string) => void
}) {
  if (!exercises.length) return <p className="exercise-empty-result">No exercises match this search and filter.</p>

  return (
    <div className="exercise-list" aria-live="polite">
      <p className="exercise-result-count">{exercises.length} {exercises.length === 1 ? 'result' : 'results'}</p>
      {exercises.map((exercise) => (
        <article className="exercise-row" key={exercise.id}>
          <button className="exercise-row-main" type="button" onClick={() => onSelect(exercise)}>
            <span><strong>{exercise.name}</strong><small>{exercise.equipment} · {TRACKING_TYPE_LABELS[exercise.trackingType]}</small></span>
            <ChevronRight size={20} aria-hidden="true" />
          </button>
          <button
            className={favourites.has(exercise.id) ? 'exercise-favourite is-selected' : 'exercise-favourite'}
            type="button"
            aria-label={`${favourites.has(exercise.id) ? 'Remove' : 'Add'} ${exercise.name} ${favourites.has(exercise.id) ? 'from' : 'to'} favourites`}
            aria-pressed={favourites.has(exercise.id)}
            onClick={() => onToggleFavourite(exercise.id)}
          >
            <Star size={18} fill={favourites.has(exercise.id) ? 'currentColor' : 'none'} aria-hidden="true" />
          </button>
        </article>
      ))}
    </div>
  )
}

function ExerciseDetail({ exercise, favourite, onBack, onToggleFavourite }: {
  exercise: Exercise
  favourite: boolean
  onBack: () => void
  onToggleFavourite: () => void
}) {
  return (
    <Panel className="exercise-detail-panel">
      <div className="exercise-detail-header">
        <button className="dex-back-button" type="button" onClick={onBack} aria-label="Back to exercise list"><ArrowLeft size={20} aria-hidden="true" /></button>
        <div><p className="eyebrow">Exercise record</p><h2>{exercise.name}</h2></div>
        <button className={favourite ? 'exercise-favourite is-selected' : 'exercise-favourite'} type="button" onClick={onToggleFavourite} aria-label={`${favourite ? 'Remove' : 'Add'} ${exercise.name} ${favourite ? 'from' : 'to'} favourites`} aria-pressed={favourite}><Star size={19} fill={favourite ? 'currentColor' : 'none'} aria-hidden="true" /></button>
      </div>
      <dl className="exercise-detail-list">
        <div><dt>Category</dt><dd>{exercise.category}</dd></div>
        <div><dt>Primary muscle</dt><dd>{exercise.primaryMuscles.join(', ')}</dd></div>
        <div><dt>Secondary muscles</dt><dd>{exercise.secondaryMuscles.length ? exercise.secondaryMuscles.join(', ') : 'None specified'}</dd></div>
        <div><dt>Region</dt><dd>{exercise.muscleRegions.join(', ')}</dd></div>
        <div><dt>Equipment</dt><dd>{exercise.equipment}</dd></div>
        <div><dt>Tracking method</dt><dd>{TRACKING_TYPE_LABELS[exercise.trackingType]}</dd></div>
        {exercise.movementPattern ? <div><dt>Movement pattern</dt><dd>{exercise.movementPattern}</dd></div> : null}
        {exercise.cardioSubtype ? <div><dt>Cardio type</dt><dd>{exercise.cardioSubtype}</dd></div> : null}
        {exercise.instructions ? <div className="exercise-detail-wide"><dt>Notes</dt><dd>{exercise.instructions}</dd></div> : null}
      </dl>
    </Panel>
  )
}
