import Dexie from 'dexie'
import { db } from '../../data/database.ts'
import type { Exercise, Workout, WorkoutExercise, WorkoutSet } from '../../data/models.ts'
import { createId } from '../../utils/createId.ts'
import { getLocalDayTimestampRange } from '../../utils/localDate.ts'
import { DEFAULT_AD_HOC_SETS, calculateVolume, createPausedTimerState, createResumedTimerState, getFinalWorkoutDuration, isHistoricalWorkoutSetLogged, isWorkoutSetLogged, normalizeWorkoutName, validateWorkoutForFinish, type WorkoutFinishValidation } from './workoutModel.ts'
import { ensureGamificationInitialized, reconcileGamification } from '../gamification/gamificationRepository.ts'

export interface WorkoutExerciseDetail {
  exercise: WorkoutExercise
  sets: WorkoutSet[]
}

export interface WorkoutDetail {
  workout: Workout
  exercises: WorkoutExerciseDetail[]
}

export interface WorkoutSummary {
  workout: Workout
  exerciseCount: number
  completedSetCount: number
  totalSetCount: number
  volume: number
}

export class ActiveWorkoutExistsError extends Error {
  readonly activeWorkoutId: string

  constructor(activeWorkoutId: string) {
    super('A workout is already in progress.')
    this.activeWorkoutId = activeWorkoutId
  }
}

export class IncompleteWorkoutError extends Error {
  readonly validation: WorkoutFinishValidation

  constructor(validation: WorkoutFinishValidation) {
    super('Some exercises or sets are still empty or incomplete. Fill them in or delete them before saving the workout.')
    this.validation = validation
  }
}

export class CompletedWorkoutRequiredError extends Error {
  constructor() {
    super('Only completed workout history can be deleted here.')
  }
}

function createRecordId(prefix: string) {
  return `${prefix}:${createId()}`
}

function nowIso(now = Date.now()) {
  return new Date(now).toISOString()
}

function createWorkoutSet(workoutExerciseId: string, order: number, timestamp: string): WorkoutSet {
  return { id: createRecordId('workout-set'), workoutExerciseId, order, completed: false, createdAt: timestamp, updatedAt: timestamp }
}

async function assertNoActiveWorkout() {
  const active = await db.workouts.where('status').equals('active').first()
  if (active) throw new ActiveWorkoutExistsError(active.id)
}

export async function getActiveWorkout() {
  const workout = await db.workouts.where('status').equals('active').first()
  return workout ? getWorkoutDetail(workout.id) : undefined
}

export async function startWorkoutFromRoutine(routineId: string, now = Date.now()) {
  return db.transaction('rw', [db.workouts, db.workoutExercises, db.workoutSets, db.workoutRoutines, db.routineExercises, db.exercises], async () => {
    await assertNoActiveWorkout()
    const routine = await db.workoutRoutines.get(routineId)
    if (!routine) throw new Error('Routine not found.')
    const routineItems = await db.routineExercises.where('routineId').equals(routineId).sortBy('order')
    const definitions = await db.exercises.bulkGet(routineItems.map((item) => item.exerciseId))
    const definitionById = new Map(definitions.filter((item): item is Exercise => Boolean(item)).map((item) => [item.id, item]))
    const timestamp = nowIso(now)
    const workout: Workout = {
      id: createRecordId('workout'), routineId, routineNameSnapshot: routine.name, nameSnapshot: routine.name,
      status: 'active', startedAt: timestamp, timerState: 'running', accumulatedActiveSeconds: 0,
      lastResumedAt: timestamp, createdAt: timestamp, updatedAt: timestamp,
    }
    const exerciseRows: WorkoutExercise[] = routineItems.map((item, order) => {
      const definition = definitionById.get(item.exerciseId)
      return {
        id: createRecordId('workout-exercise'), workoutId: workout.id, exerciseId: item.exerciseId,
        exerciseNameSnapshot: definition?.name ?? item.exerciseNameSnapshot,
        exerciseCategorySnapshot: definition?.category,
        trackingTypeSnapshot: definition?.trackingType ?? 'reps_only',
        routineExerciseIdSnapshot: item.id, plannedSetsSnapshot: item.plannedSets,
        order, createdAt: timestamp, updatedAt: timestamp,
      }
    })
    const sets = exerciseRows.flatMap((exerciseRow, index) => Array.from(
      { length: routineItems[index].plannedSets },
      (_, order) => createWorkoutSet(exerciseRow.id, order, timestamp),
    ))
    await db.workouts.add(workout)
    if (exerciseRows.length) await db.workoutExercises.bulkAdd(exerciseRows)
    if (sets.length) await db.workoutSets.bulkAdd(sets)
    return getWorkoutDetail(workout.id)
  })
}

export async function startEmptyWorkout(name = 'Workout', now = Date.now()) {
  return db.transaction('rw', db.workouts, async () => {
    await assertNoActiveWorkout()
    const timestamp = nowIso(now)
    const workout: Workout = {
      id: createRecordId('workout'), nameSnapshot: normalizeWorkoutName(name), status: 'active',
      startedAt: timestamp, timerState: 'running', accumulatedActiveSeconds: 0,
      lastResumedAt: timestamp, createdAt: timestamp, updatedAt: timestamp,
    }
    await db.workouts.add(workout)
    return { workout, exercises: [] } satisfies WorkoutDetail
  })
}

export async function getWorkoutDetail(workoutId: string): Promise<WorkoutDetail> {
  const workout = await db.workouts.get(workoutId)
  if (!workout) throw new Error('Workout not found.')
  const exercises = await db.workoutExercises.where('workoutId').equals(workoutId).sortBy('order')
  const setRows = exercises.length ? await db.workoutSets.where('workoutExerciseId').anyOf(exercises.map((item) => item.id)).toArray() : []
  return {
    workout,
    exercises: exercises.map((exercise) => ({
      exercise,
      sets: setRows.filter((set) => set.workoutExerciseId === exercise.id).sort((left, right) => left.order - right.order),
    })),
  }
}

async function requireActiveWorkout(workoutId: string) {
  const workout = await db.workouts.get(workoutId)
  if (!workout || workout.status !== 'active') throw new Error('This workout is no longer active.')
  return workout
}

export async function renameActiveWorkout(workoutId: string, name: string) {
  await requireActiveWorkout(workoutId)
  await db.workouts.update(workoutId, { nameSnapshot: normalizeWorkoutName(name), updatedAt: nowIso() })
}

export async function updateWorkoutNotes(workoutId: string, notes: string) {
  await requireActiveWorkout(workoutId)
  await db.workouts.update(workoutId, { notes: notes.trim() || undefined, updatedAt: nowIso() })
}

export async function addExercisesToWorkout(workoutId: string, exercises: readonly Exercise[]) {
  await db.transaction('rw', db.workouts, db.workoutExercises, db.workoutSets, async () => {
    await requireActiveWorkout(workoutId)
    const current = await db.workoutExercises.where('workoutId').equals(workoutId).sortBy('order')
    const currentIds = new Set(current.map((item) => item.exerciseId))
    for (const exercise of exercises) if (currentIds.has(exercise.id)) throw new Error(`${exercise.name} is already in this workout.`)
    const timestamp = nowIso()
    const rows = exercises.map((exercise, index): WorkoutExercise => ({
      id: createRecordId('workout-exercise'), workoutId, exerciseId: exercise.id,
      exerciseNameSnapshot: exercise.name, exerciseCategorySnapshot: exercise.category,
      trackingTypeSnapshot: exercise.trackingType, plannedSetsSnapshot: DEFAULT_AD_HOC_SETS,
      order: current.length + index, createdAt: timestamp, updatedAt: timestamp,
    }))
    const sets = rows.flatMap((row) => Array.from({ length: DEFAULT_AD_HOC_SETS }, (_, order) => createWorkoutSet(row.id, order, timestamp)))
    if (rows.length) await db.workoutExercises.bulkAdd(rows)
    if (sets.length) await db.workoutSets.bulkAdd(sets)
    await db.workouts.update(workoutId, { updatedAt: timestamp })
  })
}

export async function updateWorkoutSet(setId: string, patch: Partial<Pick<WorkoutSet, 'weight' | 'reps' | 'durationSeconds' | 'distance' | 'notes' | 'completed'>>) {
  const set = await db.workoutSets.get(setId)
  if (!set) throw new Error('Set not found.')
  const exercise = await db.workoutExercises.get(set.workoutExerciseId)
  if (!exercise) throw new Error('Workout exercise not found.')
  await requireActiveWorkout(exercise.workoutId)
  for (const key of ['weight', 'durationSeconds', 'distance'] as const) {
    const value = patch[key]
    if (value !== undefined && (!Number.isFinite(value) || value < 0)) throw new Error('Values cannot be negative or invalid.')
  }
  if (patch.reps !== undefined && (!Number.isInteger(patch.reps) || patch.reps < 1)) throw new Error('Reps must be a positive whole number.')
  const next = { ...set, ...patch }
  const completed = isWorkoutSetLogged(next, exercise.trackingTypeSnapshot ?? 'reps_only')
  await db.workoutSets.update(setId, { ...patch, completed, updatedAt: nowIso() })
}

export async function addWorkoutSet(workoutExerciseId: string) {
  const exercise = await db.workoutExercises.get(workoutExerciseId)
  if (!exercise) throw new Error('Workout exercise not found.')
  await requireActiveWorkout(exercise.workoutId)
  const count = await db.workoutSets.where('workoutExerciseId').equals(workoutExerciseId).count()
  await db.workoutSets.add(createWorkoutSet(workoutExerciseId, count, nowIso()))
}

export async function removeWorkoutSet(setId: string) {
  const set = await db.workoutSets.get(setId)
  if (!set) return
  const exercise = await db.workoutExercises.get(set.workoutExerciseId)
  if (!exercise) return
  await requireActiveWorkout(exercise.workoutId)
  await db.transaction('rw', db.workoutSets, async () => {
    await db.workoutSets.delete(setId)
    const remaining = await db.workoutSets.where('workoutExerciseId').equals(set.workoutExerciseId).sortBy('order')
    await db.workoutSets.bulkPut(remaining.map((item, order) => ({ ...item, order, updatedAt: nowIso() })))
  })
}

export async function removeWorkoutExercise(workoutExerciseId: string) {
  const target = await db.workoutExercises.get(workoutExerciseId)
  if (!target) return
  await requireActiveWorkout(target.workoutId)
  await db.transaction('rw', db.workoutExercises, db.workoutSets, async () => {
    await db.workoutSets.where('workoutExerciseId').equals(workoutExerciseId).delete()
    await db.workoutExercises.delete(workoutExerciseId)
    const remaining = await db.workoutExercises.where('workoutId').equals(target.workoutId).sortBy('order')
    await db.workoutExercises.bulkPut(remaining.map((item, order) => ({ ...item, order, updatedAt: nowIso() })))
  })
}

export async function reorderWorkoutExercise(workoutExerciseId: string, direction: -1 | 1) {
  const target = await db.workoutExercises.get(workoutExerciseId)
  if (!target) return
  await requireActiveWorkout(target.workoutId)
  const rows = await db.workoutExercises.where('workoutId').equals(target.workoutId).sortBy('order')
  const index = rows.findIndex((item) => item.id === workoutExerciseId)
  const next = index + direction
  if (index < 0 || next < 0 || next >= rows.length) return
  ;[rows[index], rows[next]] = [rows[next], rows[index]]
  const timestamp = nowIso()
  await db.workoutExercises.bulkPut(rows.map((item, order) => ({ ...item, order, updatedAt: timestamp })))
}

export async function getPreviousPerformance(exerciseId: string, currentWorkoutId?: string) {
  const occurrences = await db.workoutExercises.where('exerciseId').equals(exerciseId).toArray()
  const workoutIds = [...new Set(occurrences.map((item) => item.workoutId))]
  const workouts = (await db.workouts.bulkGet(workoutIds)).filter((item): item is Workout => Boolean(item))
  const previous = workouts
    .filter((item) => item.status === 'completed' && item.id !== currentWorkoutId)
    .sort((left, right) => Date.parse(right.completedAt ?? right.startedAt) - Date.parse(left.completedAt ?? left.startedAt))[0]
  if (!previous) return undefined
  const occurrence = occurrences.find((item) => item.workoutId === previous.id)
  if (!occurrence) return undefined
  const sets = await db.workoutSets.where('workoutExerciseId').equals(occurrence.id).sortBy('order')
  return { workout: previous, exercise: occurrence, sets }
}

export async function pauseWorkout(workoutId: string, now = Date.now()) {
  const workout = await requireActiveWorkout(workoutId)
  await db.workouts.update(workoutId, { ...createPausedTimerState(workout, now), updatedAt: nowIso(now) })
  return getWorkoutDetail(workoutId)
}

export async function resumeWorkout(workoutId: string, now = Date.now()) {
  const workout = await requireActiveWorkout(workoutId)
  await db.workouts.update(workoutId, { ...createResumedTimerState(workout, now), updatedAt: nowIso(now) })
  return getWorkoutDetail(workoutId)
}

export async function finishWorkout(workoutId: string, now = Date.now()) {
  // Establish the forward-only XP boundary before the completed workout is
  // committed. If reconciliation fails after the save, a later retry can still
  // award this workout without making older history eligible.
  const preflight = await getWorkoutDetail(workoutId)
  if (preflight.workout.status !== 'active') throw new Error('This workout is no longer active.')
  const preflightValidation = validateWorkoutForFinish(preflight.exercises)
  if (!preflightValidation.valid) throw new IncompleteWorkoutError(preflightValidation)
  await ensureGamificationInitialized(new Date(now))

  const detail = await db.transaction('rw', db.workouts, db.workoutExercises, db.workoutSets, async () => {
    const detail = await getWorkoutDetail(workoutId)
    if (detail.workout.status !== 'active') throw new Error('This workout is no longer active.')
    const validation = validateWorkoutForFinish(detail.exercises)
    if (!validation.valid) throw new IncompleteWorkoutError(validation)
    const completedAt = nowIso(now)
    const sets = detail.exercises.flatMap((item) => item.sets)
    await db.workoutSets.bulkPut(sets.map((set) => ({ ...set, completed: true, updatedAt: completedAt })))
    await db.workouts.update(workoutId, {
      status: 'completed', completedAt, durationSeconds: getFinalWorkoutDuration(detail.workout, now),
      timerState: undefined, accumulatedActiveSeconds: undefined, lastResumedAt: undefined, updatedAt: completedAt,
    })
    return getWorkoutDetail(workoutId)
  })
  await reconcileGamification(new Date(now))
  return detail
}

export async function discardWorkout(workoutId: string) {
  await requireActiveWorkout(workoutId)
  await db.workouts.update(workoutId, { status: 'discarded', updatedAt: nowIso() })
}

/** Permanently removes one completed session and only its owned snapshot rows. */
export async function deleteCompletedWorkout(workoutId: string) {
  await db.transaction('rw', db.workouts, db.workoutExercises, db.workoutSets, async () => {
    const workout = await db.workouts.get(workoutId)
    if (!workout || workout.status !== 'completed') throw new CompletedWorkoutRequiredError()
    const exercises = await db.workoutExercises.where('workoutId').equals(workoutId).toArray()
    const exerciseIds = exercises.map((exercise) => exercise.id)
    if (exerciseIds.length) await db.workoutSets.where('workoutExerciseId').anyOf(exerciseIds).delete()
    await db.workoutExercises.where('workoutId').equals(workoutId).delete()
    await db.workouts.delete(workoutId)
  })
}

export async function listRecentWorkouts(limit = 5): Promise<WorkoutSummary[]> {
  const workouts = await db.workouts.where('[status+completedAt]').between(['completed', Dexie.minKey], ['completed', Dexie.maxKey]).reverse().limit(limit).toArray()
  return summarizeWorkouts(workouts)
}

/** Reads only sessions completed within the selected local calendar day. */
export async function getCompletedWorkoutsForDate(dateKey: string): Promise<WorkoutSummary[]> {
  const { startTimestamp, endTimestamp } = getLocalDayTimestampRange(dateKey)
  const startIso = new Date(startTimestamp).toISOString()
  const endIso = new Date(endTimestamp).toISOString()
  const workouts = await db.workouts
    .where('[status+completedAt]')
    .between(['completed', startIso], ['completed', endIso], true, false)
    .toArray()
  return summarizeWorkouts(workouts.sort((left, right) => (left.completedAt ?? '').localeCompare(right.completedAt ?? '')))
}

/** Weekly-plan ownership follows the workout's local start date, including cross-midnight sessions. */
export async function getCompletedWorkoutsForStartDate(dateKey: string): Promise<WorkoutSummary[]> {
  const { startTimestamp, endTimestamp } = getLocalDayTimestampRange(dateKey)
  const workouts = await db.workouts.where('startedAt').between(new Date(startTimestamp).toISOString(), new Date(endTimestamp).toISOString(), true, false).toArray()
  return summarizeWorkouts(workouts.filter((workout) => workout.status === 'completed').sort((left, right) => left.startedAt.localeCompare(right.startedAt)))
}

async function summarizeWorkouts(workouts: Workout[]): Promise<WorkoutSummary[]> {
  if (!workouts.length) return []
  const exercises = await db.workoutExercises.where('workoutId').anyOf(workouts.map((item) => item.id)).toArray()
  const sets = exercises.length ? await db.workoutSets.where('workoutExerciseId').anyOf(exercises.map((item) => item.id)).toArray() : []
  return workouts.map((workout) => {
    const workoutExercises = exercises.filter((item) => item.workoutId === workout.id)
    const exerciseIds = new Set(workoutExercises.map((item) => item.id))
    const workoutSets = sets.filter((item) => exerciseIds.has(item.workoutExerciseId))
    const resistanceExerciseIds = new Set(workoutExercises.filter((item) => item.trackingTypeSnapshot === 'weight_reps').map((item) => item.id))
    return {
      workout, exerciseCount: workoutExercises.length,
      completedSetCount: workoutSets.filter((item) => {
        const exercise = workoutExercises.find((entry) => entry.id === item.workoutExerciseId)
        return isHistoricalWorkoutSetLogged(item, exercise?.trackingTypeSnapshot ?? 'reps_only')
      }).length,
      totalSetCount: workoutSets.length, volume: calculateVolume(workoutSets.filter((item) => resistanceExerciseIds.has(item.workoutExerciseId))),
    }
  })
}
