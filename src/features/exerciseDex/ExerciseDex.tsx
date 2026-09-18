import { ArrowLeft, Check, ChevronRight, Plus, Search, Star } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Panel } from '../../components/ui/Panel'
import { db } from '../../data/database'
import type { Exercise, ExerciseCategory } from '../../data/models'
import { useTheme } from '../../theme/useTheme'
import { useResolvedBrightness } from '../../theme/useResolvedBrightness'
import { AvatarPortrait } from '../avatar/AvatarPortrait'
import { useAvatar } from '../avatar/useAvatar'
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
import { downloadExerciseMedia, getExerciseMediaPlayback, removeDownloadedExerciseMedia, supportsNativeExerciseMedia, type MediaPlayback } from '../exerciseMedia/exerciseMediaStore'
import { ensureBuiltInExercises } from './seedExercises'
import { listFavouriteExerciseIds, setExerciseFavourite } from './exerciseFavouriteRepository'
import { useAudio } from '../audio/useAudio'
import { useBackNavigation } from '../navigation/useBackNavigation'

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
  const { playEffect } = useAudio()
  const { selectedAvatar } = useAvatar()
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
    if (libraryScope === 'favourites') return searchFavouriteExercises(exercises, favourites, query)
    const scope = category ? filterBySubfilter(categoryExercises, category, subfilter) : exercises
    return searchExercises(scope, query)
  }, [category, categoryExercises, exercises, favourites, libraryScope, query, subfilter])

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
    playEffect('select')
    setCategory(nextCategory)
    setSubfilter('All')
    setQuery('')
  }

  function returnToIndex() {
    setCategory(null)
    setSubfilter('All')
    setQuery('')
  }

  const navigateBack = useBackNavigation('exercise-dex', Boolean(selectedExercise || category || picker), () => {
    if (selectedExercise) setSelectedExercise(null)
    else if (category) returnToIndex()
    else picker?.onDone()
  }, 20)

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
        onBack={() => { void navigateBack() }}
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
      {picker ? (
        <div className="exercise-picker-contextbar">
          <button className="dex-back-button" type="button" onClick={() => { void navigateBack() }} aria-label={`Back to ${picker.targetLabel}`}>
            <ArrowLeft size={20} aria-hidden="true" />
          </button>
          <strong>Back to {picker.targetLabel}</strong>
        </div>
      ) : null}

      {!picker && !category ? (
        <div className="exercise-codex-cover">
          <div className="exercise-codex-avatar-frame">
            <AvatarPortrait avatar={selectedAvatar} size="medium" priority />
          </div>
          <div className="exercise-codex-copy">
            <p className="eyebrow">FitDex field archive</p>
            <h1>Exercise Codex</h1>
            <p>Browse {exercises.length} verified records. Find a movement. Study its form. Carry it into training.</p>
          </div>
        </div>
      ) : (
        <div className="exercise-dex-heading">
          {category ? (
            <button className="dex-back-button" type="button" onClick={() => { void navigateBack() }} aria-label="Back to Exercise Dex categories">
              <ArrowLeft size={20} aria-hidden="true" />
            </button>
          ) : null}
          <div>
            <p className="eyebrow">{picker ? 'Exercise picker' : 'Exercise Dex'}</p>
            <h2>{category ?? picker?.title ?? 'Exercise library'}</h2>
            <p>{category ? `${categoryExercises.length} exercises` : `${exercises.length} universal exercises`}</p>
          </div>
        </div>
      )}

      <label className="exercise-search">
        <span className="visually-hidden">{category ? `Search ${category} exercises` : 'Search all exercises'}</span>
        <Search size={19} aria-hidden="true" />
        <input
          type="search"
          value={query}
          placeholder={category ? `Search ${category.toLowerCase()} exercises…` : picker ? 'Search exercises to add…' : 'Search exercises…'}
          onChange={(event) => setQuery(event.target.value)}
        />
        {query ? (
          <button className="exercise-search-clear" type="button" onClick={() => setQuery('')}>
            Clear
          </button>
        ) : null}
      </label>

      {!category ? (
        <div className="exercise-library-scope exercise-codex-tabs" role="group" aria-label="Exercise library scope">
          <button
            type="button"
            aria-pressed={libraryScope === 'all'}
            onClick={() => { playEffect('select'); setLibraryScope('all') }}
          >
            {picker ? 'All' : 'Index'}
          </button>
          <button
            type="button"
            aria-pressed={libraryScope === 'favourites'}
            onClick={() => { playEffect('select'); setLibraryScope('favourites') }}
          >
            <Star size={16} aria-hidden="true" /> Favorites
          </button>
        </div>
      ) : null}

      {category && CATEGORY_SUBFILTERS[category].length > 1 ? (
        <div className="exercise-filter-strip" aria-label={`${category} exercise filters`}>
          {CATEGORY_SUBFILTERS[category].map((filter) => (
            <button className={filter === subfilter ? 'exercise-filter is-selected' : 'exercise-filter'} type="button" key={filter} aria-pressed={filter === subfilter} onClick={() => { playEffect('select'); setSubfilter(filter) }}>{filter}</button>
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
        <ExerciseRows
          exercises={visibleExercises}
          favourites={favourites}
          onSelect={(exercise) => { playEffect('select'); setSelectedExercise(exercise) }}
          onToggleFavourite={(id) => void toggleFavourite(id)}
          picker={picker}
          pendingExerciseIds={pendingExerciseIds}
          onToggleExercise={togglePickerExercise}
          emptyMessage={libraryScope === 'favourites' && !favourites.size && !query ? 'No favorite exercises yet. Tap ☆ on an exercise to keep it here for quick access.' : undefined}
          category={category}
          libraryScope={libraryScope}
        />
      )}
      {pickerError ? <p className="workout-feedback exercise-picker-feedback" role="alert">{pickerError}</p> : null}
      {confirmRemoval ? <div className="workout-finish-backdrop"><section className="panel workout-confirm exercise-remove-confirm" role="alertdialog" aria-modal="true" aria-labelledby="remove-picker-exercise-title"><h2 id="remove-picker-exercise-title">Remove exercise?</h2><p>This exercise contains entered workout data. Removing it will delete its sets from this active workout.</p><button className="secondary-button" type="button" autoFocus onClick={() => setConfirmRemoval(undefined)}>Cancel</button><button className="danger-button" type="button" onClick={() => { const exercise = confirmRemoval; setConfirmRemoval(undefined); void persistPickerToggle(exercise) }}>Remove</button></section></div> : null}
    </Panel>
  )
}

function ExerciseRows({
  exercises,
  favourites,
  onSelect,
  onToggleFavourite,
  picker,
  pendingExerciseIds,
  onToggleExercise,
  emptyMessage,
  category,
  libraryScope,
}: {
  exercises: readonly Exercise[]
  favourites: ReadonlySet<string>
  onSelect: (exercise: Exercise) => void
  onToggleFavourite: (exerciseId: string) => void
  picker?: ExerciseDexPicker
  pendingExerciseIds: ReadonlySet<string>
  onToggleExercise: (exercise: Exercise) => void
  emptyMessage?: string
  category?: ExerciseCategory | null
  libraryScope?: 'all' | 'favourites'
}) {
  const sectionTitle = picker
    ? (category ? `${category} Exercises` : 'Exercises')
    : category
    ? `${category} Exercises`
    : libraryScope === 'favourites'
    ? 'Favorite Exercises'
    : 'Search Results'

  const sectionCountLabel = picker
    ? `${exercises.length} available`
    : category
    ? `${exercises.length} exercises`
    : libraryScope === 'favourites'
    ? `${exercises.length} saved`
    : `${exercises.length} ${exercises.length === 1 ? 'result' : 'results'}`

  if (!exercises.length) {
    return (
      <div className="exercise-list-empty-wrap">
        <div className="exercise-section-header panel-head">
          <h2>{sectionTitle}</h2>
          <span className="eyebrow">{sectionCountLabel}</span>
        </div>
        <p className="exercise-empty-result">{emptyMessage ?? 'No exercises match this search and filter.'}</p>
      </div>
    )
  }

  return (
    <div className="exercise-list-container" aria-live="polite">
      <div className="exercise-section-header panel-head">
        <h2>{sectionTitle}</h2>
        <span className="eyebrow">{sectionCountLabel}</span>
      </div>
      <div className="exercise-list">
        {exercises.map((exercise) => {
          const isFav = favourites.has(exercise.id)
          const isPending = pendingExerciseIds.has(exercise.id)

          return (
            <article className={picker ? 'exercise-row is-picker' : 'exercise-row'} key={exercise.id}>
              <button className="exercise-row-main" type="button" onClick={() => onSelect(exercise)}>
                <span className="exercise-row-info">
                  <strong>{exercise.name}</strong>
                  <small>
                    {picker
                      ? `${exercise.category} · ${exercise.equipment}`
                      : category
                      ? `${exercise.equipment} · ${TRACKING_TYPE_LABELS[exercise.trackingType]}`
                      : `${exercise.category} · ${exercise.equipment} · ${TRACKING_TYPE_LABELS[exercise.trackingType]}`}
                  </small>
                </span>
              </button>
              <button
                className={isFav ? 'btn-star exercise-favourite is-selected is-fav' : 'btn-star exercise-favourite'}
                type="button"
                aria-label={`${isFav ? 'Remove' : 'Add'} ${exercise.name} ${isFav ? 'from' : 'to'} favorites`}
                aria-pressed={isFav}
                onClick={() => onToggleFavourite(exercise.id)}
              >
                <Star size={18} fill={isFav ? 'currentColor' : 'none'} aria-hidden="true" />
              </button>
              {picker ? (
                <button
                  className={`btn-picker-add ${picker.existingExerciseIds.has(exercise.id) ? 'exercise-picker-toggle is-added' : 'exercise-picker-toggle'}`}
                  type="button"
                  disabled={isPending}
                  aria-label={`${picker.existingExerciseIds.has(exercise.id) ? 'Remove' : 'Add'} ${exercise.name} ${picker.existingExerciseIds.has(exercise.id) ? 'from' : 'to'} ${picker.targetLabel}`}
                  onClick={() => onToggleExercise(exercise)}
                >
                  {isPending ? (
                    <span>{picker.existingExerciseIds.has(exercise.id) ? 'Removing…' : 'Adding…'}</span>
                  ) : picker.existingExerciseIds.has(exercise.id) ? (
                    <>
                      <Check size={14} aria-hidden="true" strokeWidth={2.8} />
                      <span>Added</span>
                    </>
                  ) : (
                    <>
                      <Plus size={14} aria-hidden="true" strokeWidth={2.8} />
                      <span>Add</span>
                    </>
                  )}
                </button>
              ) : (
                <button
                  className="btn-row-nav"
                  type="button"
                  onClick={() => onSelect(exercise)}
                  aria-label={`View ${exercise.name} details`}
                >
                  <ChevronRight size={18} aria-hidden="true" />
                </button>
              )}
            </article>
          )
        })}
      </div>
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
    <Panel className="exercise-detail-panel exercise-record-sheet">
      <div className="exercise-detail-header">
        <button className="dex-back-button" type="button" onClick={onBack} aria-label="Back to exercise list"><ArrowLeft size={20} aria-hidden="true" /></button>
        <div>
          <p className="eyebrow">Exercise record</p>
          <h2>{exercise.name}</h2>
          <p className="exercise-detail-category">
            {exercise.categories?.join(' · ') ?? exercise.category}
            {exercise.movementPattern ? ` · ${exercise.movementPattern}` : ''}
          </p>
        </div>
        {!picker ? <button className={favourite ? 'exercise-favourite is-selected' : 'exercise-favourite'} type="button" onClick={onToggleFavourite} aria-label={`${favourite ? 'Remove' : 'Add'} ${exercise.name} ${favourite ? 'from' : 'to'} favorites`} aria-pressed={favourite}><Star size={19} fill={favourite ? 'currentColor' : 'none'} aria-hidden="true" /></button> : null}
      </div>
      {content?.mediaPath ? <ExerciseMedia key={content.mediaPath} exerciseId={exercise.id} exerciseName={exercise.name} mediaPath={content.mediaPath} mediaType={content.mediaType} /> : null}
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
      {content ? (
        <div className="exercise-detail-content">
          <section>
            <h3>How to perform</h3>
            <p>{content.howToPerform}</p>
          </section>
          {content.howItHelps ? (
            <section>
              <h3>How it helps</h3>
              <p>{content.howItHelps}</p>
            </section>
          ) : null}
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
    </Panel>
  )
}

function ExerciseMedia({ exerciseId, exerciseName, mediaPath, mediaType }: { exerciseId: string; exerciseName: string; mediaPath: string; mediaType?: string }) {
  const [playback, setPlayback] = useState<MediaPlayback>({ kind: 'unavailable' })
  const [loading, setLoading] = useState(true)
  const [downloading, setDownloading] = useState(false)
  const [progress, setProgress] = useState<{ bytes: number; totalBytes?: number }>()
  const [status, setStatus] = useState('')

  const refresh = () => {
    setLoading(true)
    void getExerciseMediaPlayback(exerciseId, mediaPath).then(setPlayback).catch(() => setPlayback({ kind: 'unavailable' })).finally(() => setLoading(false))
  }
  useEffect(() => {
    let active = true
    void getExerciseMediaPlayback(exerciseId, mediaPath).then((next) => { if (active) setPlayback(next) }).catch(() => { if (active) setPlayback({ kind: 'unavailable' }) }).finally(() => { if (active) setLoading(false) })
    return () => { active = false }
  }, [exerciseId, mediaPath])
  const download = () => {
    setDownloading(true); setProgress(undefined); setStatus('')
    void downloadExerciseMedia(exerciseId, mediaPath, setProgress).then(() => { setStatus('Available offline.'); refresh() }).catch(() => setStatus('Download could not be completed.')).finally(() => setDownloading(false))
  }
  const remove = () => { void removeDownloadedExerciseMedia(exerciseId).then(() => { setStatus('Download removed.'); refresh() }).catch(() => setStatus('Download could not be removed.')) }

  if (loading) {
    return (
      <figure className="exercise-detail-media exercise-detail-media-loading">
        <div className="exercise-media-loading-state">
          <span className="exercise-media-spinner" aria-hidden="true" />
          <p role="status">Loading exercise media…</p>
        </div>
      </figure>
    )
  }

  if (playback.kind === 'unavailable') {
    return <figure className="exercise-detail-media exercise-detail-media-unavailable"><p role="status">Exercise demonstration unavailable.</p></figure>
  }

  return (
    <figure className="exercise-detail-media">
      {mediaType === 'video/mp4' ? (
        <video
          src={playback.source}
          aria-label={`${exerciseName} exercise demonstration`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onError={() => setPlayback({ kind: 'unavailable' })}
        />
      ) : (
        <img src={playback.source} alt={`${exerciseName} exercise demonstration`} loading="lazy" onError={() => setPlayback({ kind: 'unavailable' })} />
      )}
      {supportsNativeExerciseMedia() && mediaType === 'video/mp4' ? <figcaption className="exercise-media-actions">{playback.kind === 'local' ? <><p role="status">✓ Available offline</p><button className="secondary-button" type="button" onClick={remove}>Remove download</button></> : <><p>Streams when played.</p><button className="secondary-button" type="button" disabled={downloading} onClick={download}>{downloading ? 'Downloading…' : 'Download for offline'}</button>{downloading && progress ? <progress value={progress.totalBytes ? progress.bytes : undefined} max={progress.totalBytes} aria-label="Exercise video download progress" /> : null}</>}{status ? <p role="status">{status}</p> : null}</figcaption> : null}
    </figure>
  )
}
