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
  /** Optional local preference only; not an account or unique username. */
  displayName?: string
  units?: 'metric' | 'imperial'
  weeklyPlan?: Partial<Record<WeekdayId, WeeklyPlanAssignment>>
  weeklyPlanConfigured?: boolean
  workoutTutorialSeen?: boolean
  foodTutorialSeen?: boolean
  /** Local activation boundary. XP is intentionally not back-awarded before this instant. */
  gamificationInitializedAt?: string
  /** Optional for backward-compatible local settings and portable backups. */
  soundEffectsEnabled?: boolean
  backgroundMusic?: BackgroundMusicPreference
  nutritionTargets?: NutritionTargets
  /** Forward-only boundary; Food logged before this setup is never back-awarded. */
  nutritionTargetsInitializedAt?: string
  /** Latest forward-only activation boundary; prevents disabled periods back-awarding. */
  nutritionTargetsEligibleFrom?: string
}

export type BackgroundMusicPreference = 'warrior' | 'hardened' | 'villain' | 'none'

export type NutritionGoal = 'lose' | 'maintain' | 'gain'
export type NutritionSex = 'male' | 'female'
export type NutritionActivityLevel = 'sedentary' | 'light' | 'moderate' | 'very' | 'extreme'
export type CalorieTargetSource = 'calculated' | 'manual'

export interface NutritionTargets {
  enabled: boolean
  goal: NutritionGoal
  age: number
  sex: NutritionSex
  heightCm: number
  weightKg: number
  activityLevel: NutritionActivityLevel
  calorieTarget: number
  proteinTargetGrams: number
  calorieTargetSource: CalorieTargetSource
  updatedAt: string
}

export const WEEKDAY_IDS = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'] as const
export type WeekdayId = (typeof WEEKDAY_IDS)[number]
export type WeeklyPlanAssignment =
  | { type: 'routine'; routineId: string }
  | { type: 'workout_day' }
  | { type: 'rest_day' }
  | { type: 'no_plan' }

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
  /** Active-workout timer state. Missing values on legacy active records mean running. */
  timerState?: 'running' | 'paused'
  /** Whole active seconds banked before the current running interval. */
  accumulatedActiveSeconds?: number
  /** Start of the current running interval. */
  lastResumedAt?: string
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

export const FOOD_MEALS = ['breakfast', 'lunch', 'supper', 'dinner'] as const
export type FoodMeal = (typeof FOOD_MEALS)[number]

export const PREDEFINED_FOOD_CATEGORY_IDS = [
  'chicken', 'eggs', 'meat', 'fish-seafood', 'dairy', 'grains-rice', 'fruits',
  'flour-wheat', 'vegetables', 'nuts-seeds', 'drinks', 'supplements', 'desserts-snacks',
  'processed-foods', 'junk-food', 'other',
] as const
export type PredefinedFoodCategoryId = (typeof PREDEFINED_FOOD_CATEGORY_IDS)[number]

export interface FoodNutrition {
  kcal?: number
  protein?: number
  carbs?: number
  fat?: number
  fiber?: number
  sugar?: number
  saturatedFat?: number
  sodium?: number
}

export interface CustomFoodCategory extends EntityRecord {
  name: string
  normalizedName: string
  color: string
}

export interface RememberedFood extends EntityRecord, FoodNutrition {
  name: string
  normalizedName: string
  categoryId: PredefinedFoodCategoryId
  customCategoryId?: string
  customCategoryName?: string
  customCategoryColor?: string
  timesUsed: number
  lastUsedAt: string
  mealUsage: Partial<Record<FoodMeal, number>>
}

export interface FoodLogEntry extends EntityRecord, FoodNutrition {
  date: string
  meal: FoodMeal
  rememberedFoodId?: string
  foodName: string
  categoryId?: PredefinedFoodCategoryId
  categoryName: string
  categoryKind: 'predefined' | 'custom' | 'unresolved'
  customCategoryId?: string
  customCategoryName?: string
  customCategoryColor?: string
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

export type XpEventType = 'planned_routine' | 'planned_workout' | 'unplanned_workout' | 'personal_record' | 'calorie_target' | 'protein_target' | 'full_food_log'

export interface XpEvent extends EntityRecord {
  type: XpEventType
  amount: number
  occurredAt: string
  /** Globally unique business identity used to make awards idempotent. */
  sourceKey: string
  metadata?: Record<string, string | number | boolean | undefined>
  notificationSeenAt?: string
}

export type PlanDayType = 'routine' | 'workout_day' | 'rest_day' | 'no_plan'
export type PlanDayResult = 'pending' | 'success' | 'rest' | 'no_plan' | 'frozen' | 'paused' | 'missed'

export interface PlanDaySnapshot extends EntityRecord {
  localDate: string
  plannedType: PlanDayType
  routineId?: string
  routineNameSnapshot?: string
  result: PlanDayResult
  finalizedAt?: string
  satisfyingWorkoutId?: string
  pauseId?: string
}

export interface StreakFreezeEvent extends EntityRecord {
  sourceKey: string
  amount: number
  type: 'initial' | 'earned' | 'automatic_missed_plan'
  localDate?: string
  occurredAt: string
}

export interface StreakPause extends EntityRecord {
  reason: 'travel' | 'sickness'
  startDate: string
  endDate: string
}

export interface PlanChangeEvent extends EntityRecord {
  sourceKey: string
  type: 'protected' | 'reset'
  occurredAt: string
  effectiveDate: string
}

export interface AchievementUnlock extends EntityRecord {
  achievementId: string
  unlockedAt: string
  sourceKey?: string
  notificationSeenAt?: string
}

export interface JournalRecord extends EntityRecord {
  date: string
  body?: string
}
