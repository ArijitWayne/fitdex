import type { BrightnessPreference, LegacyThemeFamily, LegacyThemePreference, ThemeFamily } from '../theme/theme'

export interface EntityRecord {
  id: string
  createdAt: string
  updatedAt: string
}

export interface SettingsRecord extends EntityRecord {
  themeFamily?: ThemeFamily | LegacyThemeFamily
  brightness?: BrightnessPreference
  /** Retained temporarily so older exported settings remain readable. */
  theme?: LegacyThemePreference
  selectedAvatarId?: string
  units?: 'metric' | 'imperial'
}

export interface Exercise extends EntityRecord {
  name: string
  source: 'built-in' | 'custom'
  sourceId?: string
  notes?: string
}

export interface CustomTag extends EntityRecord {
  name: string
  appliesTo: 'exercise' | 'workout' | 'food' | 'journal'
}

export interface WorkoutRoutine extends EntityRecord {
  name: string
  notes?: string
}

export interface Workout extends EntityRecord {
  routineId?: string
  startedAt: string
  completedAt?: string
  notes?: string
}

export interface WorkoutExercise extends EntityRecord {
  workoutId: string
  exerciseId: string
  order: number
  notes?: string
}

export interface WorkoutSet extends EntityRecord {
  workoutExerciseId: string
  order: number
  reps?: number
  weight?: number
  completed: boolean
}

export interface CardioSession extends EntityRecord {
  workoutId?: string
  activity: string
  startedAt: string
  durationSeconds?: number
  distance?: number
}

export interface Food extends EntityRecord {
  name: string
  servingDescription?: string
}

export interface DailyNutrition extends EntityRecord {
  date: string
  notes?: string
}

export interface Meal extends EntityRecord {
  dailyNutritionId: string
  name: string
  order: number
}

export interface FoodEntry extends EntityRecord {
  mealId: string
  foodId: string
  servings: number
}

export interface BodyMeasurement extends EntityRecord {
  recordedAt: string
  weight?: number
  notes?: string
}

export interface Achievement extends EntityRecord {
  key: string
  unlockedAt?: string
}

export interface Quest extends EntityRecord {
  title: string
  status: 'active' | 'completed' | 'expired'
  completedAt?: string
}

export interface XpHistoryEntry extends EntityRecord {
  amount: number
  reason: string
  occurredAt: string
}

export interface JournalRecord extends EntityRecord {
  date: string
  body?: string
}
