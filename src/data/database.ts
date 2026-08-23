import Dexie, { type Table } from 'dexie'
import type {
  Achievement,
  BodyMeasurement,
  CardioSession,
  CustomTag,
  DailyNutrition,
  Exercise,
  ExercisePreference,
  Food,
  FoodEntry,
  FoodLogEntry,
  JournalRecord,
  Meal,
  RememberedFood,
  Quest,
  RoutineExercise,
  SettingsRecord,
  SystemMetadata,
  Workout,
  WorkoutExercise,
  WorkoutRoutine,
  WorkoutSet,
  XpHistoryEntry,
  CustomFoodCategory,
} from './models'

export const DATABASE_NAME = 'fitdex'
export const DATABASE_SCHEMA_VERSION = 6

const DATABASE_STORES_V4 = {
  settings: '&id, updatedAt',
  exercises: '&id, name, category, *categories, source, sourceId, trackingType, equipment, updatedAt',
  exercisePreferences: '&id, &exerciseId, updatedAt',
  systemMetadata: '&id, updatedAt',
  customTags: '&id, appliesTo, name, updatedAt',
  workoutRoutines: '&id, name, updatedAt',
  workouts: '&id, routineId, startedAt, completedAt, updatedAt',
  workoutExercises: '&id, workoutId, exerciseId, order, updatedAt',
  workoutSets: '&id, workoutExerciseId, order, updatedAt',
  cardioSessions: '&id, workoutId, activity, startedAt, updatedAt',
  foods: '&id, name, updatedAt',
  dailyNutrition: '&id, &date, updatedAt',
  meals: '&id, dailyNutritionId, order, updatedAt',
  foodEntries: '&id, mealId, foodId, updatedAt',
  bodyMeasurements: '&id, recordedAt, updatedAt',
  achievements: '&id, &key, unlockedAt, updatedAt',
  quests: '&id, status, completedAt, updatedAt',
  xpHistory: '&id, occurredAt, updatedAt',
  journalRecords: '&id, &date, updatedAt',
} as const

const DATABASE_STORES_V5 = {
  ...DATABASE_STORES_V4,
  routineExercises: '&id, routineId, exerciseId, [routineId+order], &[routineId+exerciseId], updatedAt',
  workouts: '&id, routineId, status, startedAt, completedAt, [status+completedAt], updatedAt',
  workoutExercises: '&id, workoutId, exerciseId, [workoutId+order], [exerciseId+workoutId], updatedAt',
  workoutSets: '&id, workoutExerciseId, [workoutExerciseId+order], completed, updatedAt',
} as const

const DATABASE_STORES = {
  ...DATABASE_STORES_V5,
  rememberedFoods: '&id, &normalizedName, lastUsedAt, timesUsed, updatedAt',
  foodLogEntries: '&id, date, meal, [date+meal], rememberedFoodId, createdAt, updatedAt',
  customFoodCategories: '&id, &normalizedName, name, updatedAt',
} as const

export class FitDexDatabase extends Dexie {
  settings!: Table<SettingsRecord, string>
  exercises!: Table<Exercise, string>
  exercisePreferences!: Table<ExercisePreference, string>
  systemMetadata!: Table<SystemMetadata, string>
  customTags!: Table<CustomTag, string>
  workoutRoutines!: Table<WorkoutRoutine, string>
  routineExercises!: Table<RoutineExercise, string>
  workouts!: Table<Workout, string>
  workoutExercises!: Table<WorkoutExercise, string>
  workoutSets!: Table<WorkoutSet, string>
  cardioSessions!: Table<CardioSession, string>
  foods!: Table<Food, string>
  dailyNutrition!: Table<DailyNutrition, string>
  meals!: Table<Meal, string>
  foodEntries!: Table<FoodEntry, string>
  rememberedFoods!: Table<RememberedFood, string>
  foodLogEntries!: Table<FoodLogEntry, string>
  customFoodCategories!: Table<CustomFoodCategory, string>
  bodyMeasurements!: Table<BodyMeasurement, string>
  achievements!: Table<Achievement, string>
  quests!: Table<Quest, string>
  xpHistory!: Table<XpHistoryEntry, string>
  journalRecords!: Table<JournalRecord, string>

  constructor() {
    super(DATABASE_NAME)
    this.version(2).stores({ ...DATABASE_STORES_V4, exercises: '&id, name, category, source, sourceId, trackingType, equipment, updatedAt' }).upgrade((transaction) => {
      return transaction.table<Exercise & { notes?: string }, string>('exercises').toCollection().modify((exercise) => {
        exercise.aliases ??= []
        exercise.category ??= 'Full Body'
        exercise.primaryMuscles ??= ['Other']
        exercise.secondaryMuscles ??= []
        exercise.muscleRegions ??= []
        exercise.equipment ??= 'Other'
        exercise.trackingType ??= 'reps_only'
        exercise.archived ??= false
        if (exercise.notes && !exercise.instructions) exercise.instructions = exercise.notes
        delete exercise.notes
      })
    })

    this.version(3).stores(DATABASE_STORES_V4).upgrade(async (transaction) => {
      const exercises = await transaction.table<Exercise, string>('exercises').toArray()
      const exerciseById = new Map(exercises.map((exercise) => [exercise.id, exercise]))
      await transaction.table<WorkoutExercise, string>('workoutExercises').toCollection().modify((workoutExercise) => {
        const exercise = exerciseById.get(workoutExercise.exerciseId)
        workoutExercise.exerciseNameSnapshot ??= exercise?.name
        workoutExercise.exerciseCategorySnapshot ??= exercise?.category
      })
    })

    // v4 changes the seeded built-in inventory only. Seeding archives retired
    // v3 records and migrates their active references after this schema step.
    this.version(4).stores(DATABASE_STORES_V4)

    // v5 adds routine items and snapshot-friendly workout indexes while
    // preserving and completing any early workout records already on-device.
    this.version(5).stores(DATABASE_STORES_V5).upgrade(async (transaction) => {
      const [routines, exercises] = await Promise.all([
        transaction.table<WorkoutRoutine, string>('workoutRoutines').toArray(),
        transaction.table<Exercise, string>('exercises').toArray(),
      ])
      const routineById = new Map(routines.map((routine) => [routine.id, routine]))
      const exerciseById = new Map(exercises.map((exercise) => [exercise.id, exercise]))

      await transaction.table<Workout & Partial<Pick<Workout, 'nameSnapshot' | 'status'>>, string>('workouts').toCollection().modify((workout) => {
        const routineName = workout.routineId ? routineById.get(workout.routineId)?.name : undefined
        workout.routineNameSnapshot ??= routineName
        workout.nameSnapshot ??= routineName ?? 'Workout'
        workout.status ??= workout.completedAt ? 'completed' : 'active'
        if (!workout.durationSeconds && workout.completedAt) {
          const durationMilliseconds = Date.parse(workout.completedAt) - Date.parse(workout.startedAt)
          if (Number.isFinite(durationMilliseconds) && durationMilliseconds >= 0) workout.durationSeconds = Math.round(durationMilliseconds / 1000)
        }
      })

      await transaction.table<WorkoutExercise, string>('workoutExercises').toCollection().modify((workoutExercise) => {
        const exercise = exerciseById.get(workoutExercise.exerciseId)
        workoutExercise.exerciseNameSnapshot ??= exercise?.name
        workoutExercise.exerciseCategorySnapshot ??= exercise?.category
        workoutExercise.trackingTypeSnapshot ??= exercise?.trackingType
      })
    })

    // v6 adds local-first Food V1 stores. Legacy nutrition placeholders remain
    // untouched so existing on-device data is never reset or discarded.
    this.version(DATABASE_SCHEMA_VERSION).stores(DATABASE_STORES)
  }
}

export const db = new FitDexDatabase()
