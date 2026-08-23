import type {
  CardioMetric,
  Exercise,
  ExerciseCategory,
  ExerciseTrackingType,
  MovementPattern,
} from '../../data/models'
import { LEGACY_EXERCISE_MIGRATIONS } from './legacyExerciseMigration.generated.ts'
import { SMART_WORKOUT_CRAWLED_AT, SMART_WORKOUT_EXERCISES } from './smartWorkoutExercises.generated.ts'
import type { SmartWorkoutExerciseDefinition } from './smartWorkoutTypes.ts'

export const BUILT_IN_EXERCISE_DATASET_VERSION = 4
export const BUILT_IN_EXERCISE_DATASET_METADATA_ID = 'built-in-exercise-dataset-version'

/**
 * SmartWorkout pages are retained in the generated source inventory for audit
 * history, but v4 requires a verified demonstration for every active built-in.
 * These page-slug identities are therefore archived during the v3 → v4 seed.
 */
export const RETIRED_SMART_WORKOUT_SLUGS = [
  'alternate-biceps-curl',
  'band-russian-twist',
  'bottom-up-rotation',
  'concentration-hammer-curl',
  'kas-glute-bridge',
  'kneeling-ring-push-up',
  'pull-around',
  'spoto-press',
  'standing-incline-band-chest-fly',
] as const

const retiredSmartWorkoutSlugSet = new Set<string>(RETIRED_SMART_WORKOUT_SLUGS)
export const ACTIVE_SMART_WORKOUT_EXERCISES = SMART_WORKOUT_EXERCISES.filter(
  (definition) => !retiredSmartWorkoutSlugSet.has(definition.slug),
)

function normalizeName(value: string) {
  return value.normalize('NFKD').replace(/[’']/g, '').replace(/[^a-zA-Z0-9]+/g, ' ').trim().toLowerCase()
}

const canonicalNames = new Set(ACTIVE_SMART_WORKOUT_EXERCISES.map((definition) => normalizeName(definition.name)))
const candidateAliases = new Map<string, Set<string>>()
for (const migration of LEGACY_EXERCISE_MIGRATIONS) {
  if (!migration.successorId) continue
  const normalizedAlias = normalizeName(migration.legacyName)
  const successor = ACTIVE_SMART_WORKOUT_EXERCISES.find((definition) => `builtin-exercise:${definition.slug}` === migration.successorId)
  if (!successor || normalizedAlias === normalizeName(successor.name) || canonicalNames.has(normalizedAlias)) continue
  const targets = candidateAliases.get(normalizedAlias) ?? new Set<string>()
  targets.add(migration.successorId)
  candidateAliases.set(normalizedAlias, targets)
}

const legacyAliasesBySuccessor = new Map<string, string[]>()
for (const migration of LEGACY_EXERCISE_MIGRATIONS) {
  if (!migration.successorId || candidateAliases.get(normalizeName(migration.legacyName))?.size !== 1) continue
  const aliases = legacyAliasesBySuccessor.get(migration.successorId) ?? []
  if (!aliases.includes(migration.legacyName)) aliases.push(migration.legacyName)
  legacyAliasesBySuccessor.set(migration.successorId, aliases)
}

function trackingTypeFor(definition: SmartWorkoutExerciseDefinition): ExerciseTrackingType {
  const name = definition.name.toLowerCase()
  if (/farmer|walk|carry|sled|prowler/.test(name)) return definition.equipment.includes('Bodyweight') ? 'distance_duration' : 'weight_distance'
  if (/running|treadmill run|rowing machine|walking cardio|elliptical|stair climber|air bike|jump rope/.test(name)) return 'distance_duration'
  if (/hold|plank|hang|stretch|pose|mobility|mobilization|breathing|vaccum|vacuum|wall sit|lean planche/.test(name)) return 'duration'
  if (definition.weightType === 'ASSISTED_BODYWEIGHT') return 'assisted_bodyweight'
  if (definition.weightType === 'BODYWEIGHT' || definition.equipment.every((item) => ['Bodyweight', 'Pull-Up Bar', 'Bench', 'Rings', 'Other'].includes(item))) return 'bodyweight_reps'
  return 'weight_reps'
}

function movementPatternFor(definition: SmartWorkoutExerciseDefinition): MovementPattern {
  const name = definition.name.toLowerCase()
  if (/stretch|mobility|mobilization|rotation warm|warm-up|dislocate/.test(name) || definition.tags.includes('STRETCHING') || definition.tags.includes('MOBILITY')) return 'Mobility'
  if (/hold|plank|hang|vacuum|vaccum|lean planche/.test(name)) return 'Isometric'
  if (/carry|farmer|walk/.test(name)) return 'Carry'
  if (/clean|snatch|jerk|jump|explosive|clap|superman push/.test(name)) return 'Olympic Lift / Explosive'
  if (/lunge|split squat|step-up|step up/.test(name)) return 'Lunge'
  if (/deadlift|hip thrust|glute bridge|good morning|swing|pull-through|back extension/.test(name)) return 'Hinge'
  if (/squat|leg press|hack squat|wall sit/.test(name)) return 'Squat'
  if (/twist|rotation|wood|chop|windmill|russian/.test(name)) return 'Rotation'
  if (/pallof/.test(name)) return 'Anti-Rotation'
  if (definition.categories.includes('Abs')) return /rollout|body saw/.test(name) ? 'Extension' : 'Flexion'
  if (definition.tags.includes('PULL')) return /pull-up|pulldown|pull down|pullover/.test(name) ? 'Vertical Pull' : 'Horizontal Pull'
  if (definition.tags.includes('PUSH')) return definition.categories.includes('Shoulders') || /overhead|shoulder press|dip/.test(name) ? 'Vertical Push' : 'Horizontal Push'
  if (/curl/.test(name)) return 'Flexion'
  if (/extension|pushdown|kickback|calf raise/.test(name)) return 'Extension'
  if (/lateral raise|abduction/.test(name)) return 'Abduction'
  if (/adduction/.test(name)) return 'Adduction'
  return definition.mechanics === 'ISOLATION' ? 'Flexion' : 'Conditioning'
}

function cardioMetricsFor(definition: SmartWorkoutExerciseDefinition): CardioMetric[] | undefined {
  if (trackingTypeFor(definition) !== 'distance_duration') return undefined
  return ['duration', 'distance', 'pace', 'heartRate', 'calories']
}

function lateralityFor(definition: SmartWorkoutExerciseDefinition): Exercise['laterality'] {
  if (definition.laterality === 'UNILATERAL') return 'unilateral'
  if (/alternat/i.test(definition.name)) return 'alternating'
  return definition.laterality === 'BILATERAL' ? 'bilateral' : undefined
}

function createExercise(definition: SmartWorkoutExerciseDefinition): Exercise {
  const id = `builtin-exercise:${definition.slug}`
  const primaryCategory = definition.categories[0] as ExerciseCategory
  return {
    id,
    name: definition.name,
    aliases: legacyAliasesBySuccessor.get(id) ?? [],
    category: primaryCategory,
    categories: [...definition.categories],
    primaryCategory,
    primaryMuscles: [...definition.primaryMuscles],
    secondaryMuscles: [...definition.secondaryMuscles],
    muscleRegions: [...definition.categories],
    equipment: definition.equipment[0] ?? 'Bodyweight',
    equipmentOptions: [...definition.equipment],
    trackingType: trackingTypeFor(definition),
    movementPattern: movementPatternFor(definition),
    source: 'built-in',
    sourceId: definition.slug,
    sourceSlug: definition.sourceSlug,
    sourcePage: definition.sourcePage,
    sourceRecordIds: [...definition.sourceRecordIds],
    mediaStatus: definition.mediaStatus,
    archived: false,
    laterality: lateralityFor(definition),
    supportedCardioMetrics: cardioMetricsFor(definition),
    createdAt: SMART_WORKOUT_CRAWLED_AT,
    updatedAt: SMART_WORKOUT_CRAWLED_AT,
  }
}

export const builtInExercises: readonly Exercise[] = ACTIVE_SMART_WORKOUT_EXERCISES.map(createExercise)
