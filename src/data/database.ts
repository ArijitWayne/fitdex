import Dexie, { type Table } from 'dexie'
import type {
  Achievement,
  BodyMeasurement,
  CardioSession,
  CustomTag,
  DailyNutrition,
  Exercise,
  Food,
  FoodEntry,
  JournalRecord,
  Meal,
  Quest,
  SettingsRecord,
  Workout,
  WorkoutExercise,
  WorkoutRoutine,
  WorkoutSet,
  XpHistoryEntry,
} from './models'

export const DATABASE_NAME = 'fitdex'
export const DATABASE_SCHEMA_VERSION = 1

export class FitDexDatabase extends Dexie {
  settings!: Table<SettingsRecord, string>
  exercises!: Table<Exercise, string>
  customTags!: Table<CustomTag, string>
  workoutRoutines!: Table<WorkoutRoutine, string>
  workouts!: Table<Workout, string>
  workoutExercises!: Table<WorkoutExercise, string>
  workoutSets!: Table<WorkoutSet, string>
  cardioSessions!: Table<CardioSession, string>
  foods!: Table<Food, string>
  dailyNutrition!: Table<DailyNutrition, string>
  meals!: Table<Meal, string>
  foodEntries!: Table<FoodEntry, string>
  bodyMeasurements!: Table<BodyMeasurement, string>
  achievements!: Table<Achievement, string>
  quests!: Table<Quest, string>
  xpHistory!: Table<XpHistoryEntry, string>
  journalRecords!: Table<JournalRecord, string>

  constructor() {
    super(DATABASE_NAME)
    this.version(DATABASE_SCHEMA_VERSION).stores({
      settings: '&id, updatedAt',
      exercises: '&id, name, source, sourceId, updatedAt',
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
    })
  }
}

export const db = new FitDexDatabase()
