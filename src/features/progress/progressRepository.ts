import Dexie from 'dexie'
import { db } from '../../data/database.ts'
import type { Exercise, FoodLogEntry, Workout } from '../../data/models.ts'
import { getUnitContext } from '../../utils/units.ts'
import { completedWorkoutDateKey, dateKeyInRange, getProgressPeriodRange, type ProgressPeriod, type ProgressWorkoutFact } from './progressModel.ts'

export interface ProgressSourceData {
  currentWorkouts: ProgressWorkoutFact[]
  previousWorkouts: ProgressWorkoutFact[]
  allWorkouts: ProgressWorkoutFact[]
  foodEntries: FoodLogEntry[]
  definitions: Map<string, Exercise | undefined>
  units: ReturnType<typeof getUnitContext>
  hasAnyHistory: boolean
}

/** Loads source snapshots only; Progress never creates or mutates analytics records. */
export async function loadProgressSource(period: ProgressPeriod, referenceDateKey: string): Promise<ProgressSourceData> {
  const range = getProgressPeriodRange(period, referenceDateKey)
  const [workouts, foodEntries, foodCount, settings] = await Promise.all([
    db.workouts.where('[status+completedAt]').between(['completed', Dexie.minKey], ['completed', Dexie.maxKey]).toArray(),
    loadFoodEntries(range.startDateKey, range.endDateKey),
    db.foodLogEntries.count(),
    db.settings.toArray(),
  ])
  const allWorkouts = await hydrateWorkoutFacts(workouts)
  const exerciseIds = [...new Set(allWorkouts.flatMap((workout) => workout.exercises.map(({ exercise }) => exercise.exerciseId)))]
  const definitionsList = exerciseIds.length ? await db.exercises.bulkGet(exerciseIds) : []
  const definitions = new Map(exerciseIds.map((id, index) => [id, definitionsList[index]]))
  const currentWorkouts = period === 'all'
    ? allWorkouts
    : allWorkouts.filter((workout) => dateKeyInRange(workout.dateKey, range.startDateKey, range.endDateKey))
  const previousWorkouts = range.previousStartDateKey && range.previousEndDateKey
    ? allWorkouts.filter((workout) => dateKeyInRange(workout.dateKey, range.previousStartDateKey, range.previousEndDateKey!))
    : []
  const preference = settings.find((setting) => setting.units)?.units ?? 'metric'
  return {
    currentWorkouts,
    previousWorkouts,
    allWorkouts,
    foodEntries,
    definitions,
    units: getUnitContext(preference),
    hasAnyHistory: allWorkouts.length > 0 || foodCount > 0,
  }
}

async function loadFoodEntries(startDateKey: string | undefined, endDateKey: string) {
  if (!startDateKey) return db.foodLogEntries.orderBy('date').toArray()
  return db.foodLogEntries.where('date').between(startDateKey, endDateKey, true, true).toArray()
}

async function hydrateWorkoutFacts(workouts: readonly Workout[]) {
  if (!workouts.length) return []
  const workoutIds = workouts.map((workout) => workout.id)
  const exercises = await db.workoutExercises.where('workoutId').anyOf(workoutIds).toArray()
  const exerciseIds = exercises.map((exercise) => exercise.id)
  const sets = exerciseIds.length ? await db.workoutSets.where('workoutExerciseId').anyOf(exerciseIds).toArray() : []
  const setsByExercise = new Map<string, typeof sets>()
  for (const set of sets) setsByExercise.set(set.workoutExerciseId, [...(setsByExercise.get(set.workoutExerciseId) ?? []), set])
  const exercisesByWorkout = new Map<string, typeof exercises>()
  for (const exercise of exercises) exercisesByWorkout.set(exercise.workoutId, [...(exercisesByWorkout.get(exercise.workoutId) ?? []), exercise])
  return workouts
    .map((workout): ProgressWorkoutFact => ({
      workout,
      dateKey: completedWorkoutDateKey(workout),
      exercises: (exercisesByWorkout.get(workout.id) ?? [])
        .sort((left, right) => left.order - right.order)
        .map((exercise) => ({ exercise, sets: (setsByExercise.get(exercise.id) ?? []).sort((left, right) => left.order - right.order) })),
    }))
    .sort((left, right) => (left.workout.completedAt ?? '').localeCompare(right.workout.completedAt ?? ''))
}
