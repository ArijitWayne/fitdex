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

export type ExerciseCategory = 'Chest' | 'Back' | 'Shoulders' | 'Legs' | 'Gluteal' | 'Biceps' | 'Triceps' | 'Forearms' | 'Abs'

/** Kept only so existing custom exercises and historical snapshots remain readable. */
export type LegacyExerciseCategory = 'Chest' | 'Back' | 'Shoulders' | 'Arms' | 'Legs' | 'Core' | 'Full Body' | 'Cardio' | 'Mobility'
export type PersistedExerciseCategory = ExerciseCategory | LegacyExerciseCategory

export type ExerciseMediaType = 'video/mp4' | 'image/gif' | 'image/webp'
export type ExerciseMediaStatus = 'available' | 'not-provided' | 'source-unavailable'

export type ExerciseTrackingType =
  | 'weight_reps'
  | 'bodyweight_reps'
  | 'assisted_bodyweight'
  | 'reps_only'
  | 'duration'
  | 'distance_duration'
  | 'duration_optional_distance'
  | 'weight_distance'
  | 'duration_reps'

export type ExerciseEquipment =
  | 'Barbell'
  | 'Dumbbell'
  | 'EZ Bar'
  | 'Cable'
  | 'Machine'
  | 'Smith Machine'
  | 'Bodyweight'
  | 'Pull-Up Bar'
  | 'Bench'
  | 'Resistance Band'
  | 'Kettlebell'
  | 'Medicine Ball'
  | 'Suspension Trainer'
  | 'Weight Plate'
  | 'Landmine'
  | 'Sled'
  | 'Battle Rope'
  | 'Cardio Machine'
  | 'Other'
  | 'Back Extension Bench'
  | 'Trap Bar'
  | 'Rings'
  | 'Sandbag'
  | 'GHD'

export type MovementPattern =
  | 'Horizontal Push'
  | 'Vertical Push'
  | 'Horizontal Pull'
  | 'Vertical Pull'
  | 'Squat'
  | 'Hinge'
  | 'Lunge'
  | 'Carry'
  | 'Rotation'
  | 'Anti-Rotation'
  | 'Flexion'
  | 'Extension'
  | 'Abduction'
  | 'Adduction'
  | 'Locomotion'
  | 'Conditioning'
  | 'Mobility'
  | 'Isometric'
  | 'Olympic Lift / Explosive'
  | 'Crawl'

export type CardioMetric =
  | 'duration'
  | 'distance'
  | 'pace'
  | 'speed'
  | 'incline'
  | 'resistance'
  | 'watts'
  | 'cadence'
  | 'strokeRate'
  | 'heartRate'
  | 'calories'
  | 'rounds'
  | 'reps'
  | 'load'

export interface Exercise extends EntityRecord {
  name: string
  aliases: string[]
  /** Compatibility field. New built-ins also expose authoritative `categories`. */
  category: PersistedExerciseCategory
  categories?: ExerciseCategory[]
  primaryCategory?: ExerciseCategory
  primaryMuscles: string[]
  secondaryMuscles: string[]
  muscleRegions: string[]
  equipment: ExerciseEquipment
  trackingType: ExerciseTrackingType
  movementPattern?: MovementPattern
  source: 'built-in' | 'custom'
  sourceId?: string
  sourceSlug?: string
  sourcePage?: string
  sourceRecordIds?: string[]
  mediaStatus?: ExerciseMediaStatus
  equipmentOptions?: ExerciseEquipment[]
  archived: boolean
  instructions?: string
  difficulty?: 'beginner' | 'intermediate' | 'advanced'
  laterality?: 'bilateral' | 'unilateral' | 'alternating'
  cardioSubtype?: 'Running' | 'Walking' | 'Cycling' | 'Rowing' | 'Machines' | 'Conditioning'
  supportedCardioMetrics?: CardioMetric[]
}

export interface ExercisePreference extends EntityRecord {
  exerciseId: string
  favourite: boolean
  personalNotes?: string
  customTagIds: string[]
}

export interface SystemMetadata {
  id: string
  value: string
  updatedAt: string
}

export interface CustomTag extends EntityRecord {
  name: string
  appliesTo: 'exercise' | 'workout' | 'food' | 'journal'
}

export interface WorkoutRoutine extends EntityRecord {
  name: string
  notes?: string
}

export interface RoutineExercise extends EntityRecord {
  routineId: string
  exerciseId: string
  exerciseNameSnapshot: string
  order: number
  plannedSets: number
}

export interface Workout extends EntityRecord {
  routineId?: string
  routineNameSnapshot?: string
  nameSnapshot: string
  status: 'active' | 'completed' | 'discarded'
  startedAt: string
  completedAt?: string
  durationSeconds?: number
  notes?: string
}

export interface WorkoutExercise extends EntityRecord {
  workoutId: string
  exerciseId: string
  exerciseNameSnapshot?: string
  exerciseCategorySnapshot?: PersistedExerciseCategory
  trackingTypeSnapshot?: ExerciseTrackingType
  routineExerciseIdSnapshot?: string
  plannedSetsSnapshot?: number
  order: number
  notes?: string
}

export interface WorkoutSet extends EntityRecord {
  workoutExerciseId: string
  order: number
  reps?: number
  weight?: number
  durationSeconds?: number
  distance?: number
  notes?: string
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
