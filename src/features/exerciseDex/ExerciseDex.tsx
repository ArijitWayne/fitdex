import { ArrowLeft, Check, ChevronRight, Plus, Search, Star } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Panel } from '../../components/ui/Panel'
import { db } from '../../data/database'
import type { Exercise, ExerciseCategory } from '../../data/models'
import { useTheme } from '../../theme/useTheme'
import { useResolvedBrightness } from '../../theme/useResolvedBrightness'
import {
  CATEGORY_SUBFILTERS,
  EXERCISE_CATEGORIES,
  TRACKING_TYPE_LABELS,
  exerciseBelongsToCategory,
  filterBySubfilter,
  normalizeExerciseSearch,
  searchFavouriteExercises,
  searchExercises,
} from './exerciseCatalog'
import { getExerciseCategorySprite } from './exerciseCategorySprites'
import { getExerciseContent } from './exerciseContent'
import { ensureBuiltInExercises } from './seedExercises'
import { listFavouriteExerciseIds, setExerciseFavourite } from './exerciseFavouriteRepository'

type LoadState = 'loading' | 'ready' | 'error'

export interface ExerciseDexPicker {
  title: string
  targetLabel: string
  existingExerciseIds: ReadonlySet<string>
  onAddExercise: (exercise: Exercise) => Promise<void>
  onRemoveExercise: (exercise: Exercise) => Promise<void>
  shouldConfirmRemoval?: (exercise: Exercise) => boolean
  onDone: () => void
}

export function ExerciseDex({ picker, onAddToRoutine }: {
  picker?: ExerciseDexPicker
  onAddToRoutine?: (exercise: Exercise) => void
} = {}) {
  const { family } = useTheme()
  const resolvedBrightness = useResolvedBrightness()
  const [exercises, setExercises] = useState<Exercise[]>([])
  const [favourites, setFavourites] = useState<Set<string>>(new Set())
  const [loadState, setLoadState] = useState<LoadState>('loading')
  const [category, setCategory] = useState<ExerciseCategory | null>(null)
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null)
  const [query, setQuery] = useState('')
  const [subfilter, setSubfilter] = useState('All')
  const [pendingExerciseIds, setPendingExerciseIds] = useState<Set<string>>(new Set())
  const [pickerError, setPickerError] = useState('')
  const [libraryScope, setLibraryScope] = useState<'all' | 'favourites'>('all')
  const [confirmRemoval, setConfirmRemoval] = useState<Exercise>()

  useEffect(() => {
    let active = true

    async function load() {
      try {
        await ensureBuiltInExercises()
        const [exerciseRecords, favouriteIds] = await Promise.all([
          db.exercises.toArray(),
          listFavouriteExerciseIds(),
        ])
        if (!active) return
        setExercises(exerciseRecords.filter((exercise) => !exercise.archived).sort((left, right) => left.name.localeCompare(right.name)))
        setFavourites(favouriteIds)
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
    for (const exercise of exercises) {
      for (const item of EXERCISE_CATEGORIES) {
        if (exerciseBelongsToCategory(exercise, item)) next.set(item, (next.get(item) ?? 0) + 1)
      }
    }
    return next
  }, [exercises])

  const categoryExercises = useMemo(
    () => category ? exercises.filter((exercise) => exerciseBelongsToCategory(exercise, category)) : [],
    [category, exercises],
  )
  const visibleExercises = useMemo(() => {
    if (!picker && libraryScope === 'favourites') return searchFavouriteExercises(exercises, favourites, query)
    const scope = category ? filterBySubfilter(categoryExercises, category, subfilter) : exercises
    return searchExercises(scope, query)
  }, [category, categoryExercises, exercises, favourites, libraryScope, picker, query, subfilter])

  async function toggleFavourite(exerciseId: string) {
    const nextFavourite = !favourites.has(exerciseId)
    await setExerciseFavourite(exerciseId, nextFavourite)
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

  async function persistPickerToggle(exercise: Exercise) {
    if (!picker || pendingExerciseIds.has(exercise.id)) return
    const removing = picker.existingExerciseIds.has(exercise.id)
    setPickerError('')
    setPendingExerciseIds((current) => new Set(current).add(exercise.id))
    try {
      if (removing) await picker.onRemoveExercise(exercise)
      else await picker.onAddExercise(exercise)
    } catch (error) {
      setPickerError(error instanceof Error ? error.message : `Exercise could not be ${removing ? 'removed' : 'added'}.`)
    } finally {
      setPendingExerciseIds((current) => { const next = new Set(current); next.delete(exercise.id); return next })
    }
  }

  function togglePickerExercise(exercise: Exercise) {
    if (!picker) return
    if (picker.existingExerciseIds.has(exercise.id) && picker.shouldConfirmRemoval?.(exercise)) setConfirmRemoval(exercise)
    else void persistPickerToggle(exercise)
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
        picker={picker}
        pending={pendingExerciseIds.has(selectedExercise.id)}
        onToggleExercise={() => togglePickerExercise(selectedExercise)}
        onAddToRoutine={onAddToRoutine}
      />
    )
  }

  return (
    <Panel className={picker ? 'exercise-dex-panel is-picker' : 'exercise-dex-panel'}>
      {picker ? <div className="exercise-picker-contextbar"><button className="dex-back-button" type="button" onClick={picker.onDone} aria-label={`Back to ${picker.targetLabel}`}><ArrowLeft size={20} aria-hidden="true" /></button><strong>Back to {picker.targetLabel}</strong></div> : null}
      <div className="exercise-dex-heading">
        {category ? <button className="dex-back-button" type="button" onClick={returnToIndex} aria-label="Back to Exercise Dex categories"><ArrowLeft size={20} aria-hidden="true" /></button> : null}
        <div>
          <p className="eyebrow">{picker ? 'Exercise picker' : 'Exercise Dex'}</p>
          <h2>{category ?? picker?.title ?? 'Exercise library'}</h2>
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

      {!picker && !category ? <div className="exercise-library-scope" role="group" aria-label="Exercise library scope"><button type="button" aria-pressed={libraryScope === 'all'} onClick={() => setLibraryScope('all')}>All</button><button type="button" aria-pressed={libraryScope === 'favourites'} onClick={() => setLibraryScope('favourites')}><Star size={16} aria-hidden="true" /> Favorites</button></div> : null}

      {category && CATEGORY_SUBFILTERS[category].length > 1 ? (
        <div className="exercise-filter-strip" aria-label={`${category} exercise filters`}>
          {CATEGORY_SUBFILTERS[category].map((filter) => (
            <button className={filter === subfilter ? 'exercise-filter is-selected' : 'exercise-filter'} type="button" key={filter} aria-pressed={filter === subfilter} onClick={() => setSubfilter(filter)}>{filter}</button>
          ))}
        </div>
      ) : null}

      {!category && libraryScope === 'all' && !normalizeExerciseSearch(query) ? (
        <div className="exercise-category-grid">
          {EXERCISE_CATEGORIES.map((item) => (
            <button className="exercise-category-card" type="button" key={item} onClick={() => openCategory(item)}>
              <img
                className="exercise-category-sprite"
                src={getExerciseCategorySprite(item, family, resolvedBrightness)}
                alt=""
                aria-hidden="true"
                decoding="async"
              />
              <span><strong>{item}</strong><small>{counts.get(item) ?? 0} exercises</small></span>
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          ))}
        </div>
      ) : (
        <ExerciseRows exercises={visibleExercises} favourites={favourites} onSelect={setSelectedExercise} onToggleFavourite={(id) => void toggleFavourite(id)} picker={picker} pendingExerciseIds={pendingExerciseIds} onToggleExercise={togglePickerExercise} emptyMessage={!picker && libraryScope === 'favourites' && !favourites.size && !query ? 'No favorite exercises yet. Tap ☆ on an exercise to keep it here for quick access.' : undefined} />
      )}
      {pickerError ? <p className="workout-feedback exercise-picker-feedback" role="alert">{pickerError}</p> : null}
      {confirmRemoval ? <div className="workout-finish-backdrop"><section className="panel workout-confirm exercise-remove-confirm" role="alertdialog" aria-modal="true" aria-labelledby="remove-picker-exercise-title"><h2 id="remove-picker-exercise-title">Remove exercise?</h2><p>This exercise contains entered workout data. Removing it will delete its sets from this active workout.</p><button className="secondary-button" type="button" autoFocus onClick={() => setConfirmRemoval(undefined)}>Cancel</button><button className="danger-button" type="button" onClick={() => { const exercise = confirmRemoval; setConfirmRemoval(undefined); void persistPickerToggle(exercise) }}>Remove</button></section></div> : null}
    </Panel>
  )
}

function ExerciseRows({ exercises, favourites, onSelect, onToggleFavourite, picker, pendingExerciseIds, onToggleExercise, emptyMessage }: {
  exercises: readonly Exercise[]
  favourites: ReadonlySet<string>
  onSelect: (exercise: Exercise) => void
  onToggleFavourite: (exerciseId: string) => void
  picker?: ExerciseDexPicker
  pendingExerciseIds: ReadonlySet<string>
  onToggleExercise: (exercise: Exercise) => void
  emptyMessage?: string
}) {
  if (!exercises.length) return <p className="exercise-empty-result">{emptyMessage ?? 'No exercises match this search and filter.'}</p>

  return (
    <div className="exercise-list" aria-live="polite">
      <p className="exercise-result-count">{exercises.length} {exercises.length === 1 ? 'result' : 'results'}</p>
      {exercises.map((exercise) => (
        <article className="exercise-row" key={exercise.id}>
          <button className="exercise-row-main" type="button" onClick={() => onSelect(exercise)}>
            <span><strong>{exercise.name}</strong><small>{exercise.equipment} · {TRACKING_TYPE_LABELS[exercise.trackingType]}</small></span>
            <ChevronRight size={20} aria-hidden="true" />
          </button>
          {picker ? (
            <button
              className={picker.existingExerciseIds.has(exercise.id) ? 'exercise-picker-toggle is-added' : 'exercise-picker-toggle'}
              type="button"
              disabled={pendingExerciseIds.has(exercise.id)}
              aria-label={`${picker.existingExerciseIds.has(exercise.id) ? 'Remove' : 'Add'} ${exercise.name} ${picker.existingExerciseIds.has(exercise.id) ? 'from' : 'to'} ${picker.targetLabel}`}
              onClick={() => onToggleExercise(exercise)}
            >
              {pendingExerciseIds.has(exercise.id) ? <span>{picker.existingExerciseIds.has(exercise.id) ? 'Removing…' : 'Adding…'}</span> : picker.existingExerciseIds.has(exercise.id) ? <><Check size={17} aria-hidden="true" /><span>Added</span></> : <Plus size={18} aria-hidden="true" />}
            </button>
          ) : (
            <button
              className={favourites.has(exercise.id) ? 'exercise-favourite is-selected' : 'exercise-favourite'}
              type="button"
              aria-label={`${favourites.has(exercise.id) ? 'Remove' : 'Add'} ${exercise.name} ${favourites.has(exercise.id) ? 'from' : 'to'} favorites`}
              aria-pressed={favourites.has(exercise.id)}
              onClick={() => onToggleFavourite(exercise.id)}
            >
              <Star size={18} fill={favourites.has(exercise.id) ? 'currentColor' : 'none'} aria-hidden="true" />
            </button>
          )}
        </article>
      ))}
    </div>
  )
}

function ExerciseDetail({ exercise, favourite, onBack, onToggleFavourite, picker, pending, onToggleExercise, onAddToRoutine }: {
  exercise: Exercise
  favourite: boolean
  onBack: () => void
  onToggleFavourite: () => void
  picker?: ExerciseDexPicker
  pending: boolean
  onToggleExercise: () => void
  onAddToRoutine?: (exercise: Exercise) => void
}) {
  const content = getExerciseContent(exercise.id)

  return (
    <Panel className="exercise-detail-panel">
      <div className="exercise-detail-header">
        <button className="dex-back-button" type="button" onClick={onBack} aria-label="Back to exercise list"><ArrowLeft size={20} aria-hidden="true" /></button>
        <div><p className="eyebrow">Exercise record</p><h2>{exercise.name}</h2><p className="exercise-detail-category">{exercise.categories?.join(' · ') ?? exercise.category}</p></div>
        {!picker ? <button className={favourite ? 'exercise-favourite is-selected' : 'exercise-favourite'} type="button" onClick={onToggleFavourite} aria-label={`${favourite ? 'Remove' : 'Add'} ${exercise.name} ${favourite ? 'from' : 'to'} favorites`} aria-pressed={favourite}><Star size={19} fill={favourite ? 'currentColor' : 'none'} aria-hidden="true" /></button> : null}
      </div>
      {content?.mediaPath ? (
        <figure className="exercise-detail-media">
          {content.mediaType === 'video/mp4' ? (
            <video
              src={content.mediaPath}
              aria-label={`${exercise.name} exercise demonstration`}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          ) : (
            <img src={content.mediaPath} alt={`${exercise.name} exercise demonstration`} loading="lazy" />
          )}
        </figure>
      ) : null}
      {content ? (
        <div className="exercise-detail-content">
          <section>
            <h3>How to perform</h3>
            <p>{content.howToPerform}</p>
          </section>
          <section>
            <h3>How it helps</h3>
            <p>{content.howItHelps}</p>
          </section>
        </div>
      ) : null}
      {picker ? (
        <div className="exercise-detail-action">
          <button className={picker.existingExerciseIds.has(exercise.id) ? 'secondary-button' : 'primary-button'} type="button" disabled={pending} onClick={onToggleExercise}>
            {pending ? picker.existingExerciseIds.has(exercise.id) ? 'Removing…' : 'Adding…' : picker.existingExerciseIds.has(exercise.id) ? `✓ Added · Remove from ${picker.targetLabel}` : `Add to ${picker.targetLabel}`}
          </button>
        </div>
      ) : onAddToRoutine ? (
        <div className="exercise-detail-action"><button className="primary-button" type="button" onClick={() => onAddToRoutine(exercise)}>Add to routine</button></div>
      ) : null}
      <dl className="exercise-detail-list">
        <div><dt>Primary muscle</dt><dd>{exercise.primaryMuscles.join(', ')}</dd></div>
        <div><dt>Secondary muscles</dt><dd>{exercise.secondaryMuscles.length ? exercise.secondaryMuscles.join(', ') : 'None specified'}</dd></div>
        <div><dt>Region</dt><dd>{exercise.muscleRegions.join(', ')}</dd></div>
        <div><dt>Equipment</dt><dd>{exercise.equipmentOptions?.join(', ') ?? exercise.equipment}</dd></div>
        <div><dt>Tracking method</dt><dd>{TRACKING_TYPE_LABELS[exercise.trackingType]}</dd></div>
        {exercise.movementPattern ? <div><dt>Movement pattern</dt><dd>{exercise.movementPattern}</dd></div> : null}
        {exercise.cardioSubtype ? <div><dt>Cardio type</dt><dd>{exercise.cardioSubtype}</dd></div> : null}
        {exercise.instructions ? <div className="exercise-detail-wide"><dt>Notes</dt><dd>{exercise.instructions}</dd></div> : null}
      </dl>
    </Panel>
  )
}
