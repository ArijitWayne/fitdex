import type {
  CardioMetric,
  Exercise,
  ExerciseCategory,
  ExerciseTrackingType,
  MovementPattern,
} from '../../data/models'
import { LEGACY_EXERCISE_MIGRATIONS } from './legacyExerciseMigration.generated.ts'
import { FITDEX_CATALOG_GENERATED_AT, FITDEX_EXERCISES } from './fitDexExercises.generated.ts'
import type { FitDexExerciseDefinition } from './fitDexExerciseTypes.ts'

export const BUILT_IN_EXERCISE_DATASET_VERSION = 4
export const BUILT_IN_EXERCISE_DATASET_METADATA_ID = 'built-in-exercise-dataset-version'

/**
 * Historical non-demonstrated exercises archived during the v3 → v4 dataset seed.
 */
export const RETIRED_FITDEX_EXERCISE_SLUGS = [
  'alternate-biceps-curl',
  'band-russian-twist',
  'bottom-up-rotation',
  'concentration-hammer-curl',
  'hand-gripper',
  'kas-glute-bridge',
  'kneeling-ring-push-up',
  'pull-around',
  'spoto-press',
  'standing-incline-band-chest-fly',
] as const

const retiredFitDexExerciseSlugSet = new Set<string>(RETIRED_FITDEX_EXERCISE_SLUGS)
export const ACTIVE_FITDEX_EXERCISES = FITDEX_EXERCISES.filter(
  (definition) => !retiredFitDexExerciseSlugSet.has(definition.slug),
)

function normalizeName(value: string) {
  return value.normalize('NFKD').replace(/[’']/g, '').replace(/[^a-zA-Z0-9]+/g, ' ').trim().toLowerCase()
}

const canonicalNames = new Set(ACTIVE_FITDEX_EXERCISES.map((definition) => normalizeName(definition.name)))
const candidateAliases = new Map<string, Set<string>>()
for (const migration of LEGACY_EXERCISE_MIGRATIONS) {
  if (!migration.successorId) continue
  const normalizedAlias = normalizeName(migration.legacyName)
  const successor = ACTIVE_FITDEX_EXERCISES.find((definition) => `builtin-exercise:${definition.slug}` === migration.successorId)
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

function trackingTypeFor(definition: FitDexExerciseDefinition): ExerciseTrackingType {
  const name = definition.name.toLowerCase()
  if (/farmer|walk|carry|sled|prowler/.test(name) && !/walking lunges|monster walk/.test(name)) return definition.equipment.includes('Bodyweight') ? 'distance_duration' : 'weight_distance'
  if (/running|treadmill|rowing machine|walking|elliptical|stair climber|air bike|ski ergometer|stationary bike/.test(name) && !/walking lunges|bicycle crunch/.test(name)) return 'distance_duration'
  if (definition.equipment.includes('Foam Roller') || (/hold|plank|side bridge|stretch|pose|mobility|mobilization|breathing|vaccum|vacuum|wall sit|lean planche|dead hang|boxing|back lever|(?:downward|upward) dog|^flag$|planche$|front lever$|glutes roll|jump rope|l-sit|spinal twist|chest opener|forward bend/.test(name) && !/hang power clean|weighted hanging leg raise|kneeling back rotation stretch|band warm-up dynamic shoulder stretch|deep squat to wide fold with foot hold|rocking half frog stretch|world.?s greatest stretch/.test(name))) {
    if (definition.weightType && !['BODYWEIGHT', 'UNWEIGHTED', 'ASSISTED_BODYWEIGHT'].includes(definition.weightType)) return 'weight_duration'
    return 'duration'
  }
  if (name === 'band-assisted pull-up' || name === 'wall angel' || /monster walk|world.?s greatest stretch/.test(name)) return 'reps_only'
  if (definition.weightType === 'ASSISTED_BODYWEIGHT') return 'assisted_bodyweight'
  if (definition.weightType === 'UNWEIGHTED') return 'reps_only'
  if (definition.weightType === 'BODYWEIGHT' || definition.equipment.every((item) => ['Bodyweight', 'Pull-Up Bar', 'Dip Bar', 'Bench', 'Rings', 'Swiss Ball', 'Ab Wheel', 'Other', 'Slider', 'Jump Rope'].includes(item))) return 'bodyweight_reps'
  return 'weight_reps'
}

function movementPatternFor(definition: FitDexExerciseDefinition): MovementPattern {
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

function cardioMetricsFor(definition: FitDexExerciseDefinition): CardioMetric[] | undefined {
  if (trackingTypeFor(definition) !== 'distance_duration') return undefined
  return ['duration', 'distance', 'pace', 'heartRate', 'calories']
}

function lateralityFor(definition: FitDexExerciseDefinition): Exercise['laterality'] {
  if (definition.laterality === 'UNILATERAL') return 'unilateral'
  if (definition.laterality === 'ALTERNATING' || /alternat/i.test(definition.name)) return 'alternating'
  return definition.laterality === 'BILATERAL' ? 'bilateral' : undefined
}

const TYPO_EXERCISE_ALIASES: Readonly<Record<string, readonly string[]>> = {
  'builtin-exercise:abdominal-vacuum': ['Abdominal Vaccum'],
  'builtin-exercise:air-bicycle-crunch': ['Air Bike'],
  'builtin-exercise:arm-circles-at-shoulder-height': ['Arm Circles'],
  'builtin-exercise:cable-hip-abduction': ['Cable Hip Abducction'],
  'builtin-exercise:cable-seated-supinated-grip-row': ['Cable Seated Supine Grip Row'],
  'builtin-exercise:captains-chair-straight-leg-raises': ["Capitan's Chair Straight Leg Raises"],
  'builtin-exercise:cossack-squat': ['Crossack Squat'],
  'builtin-exercise:full-range-arm-circles': ['Arm Circle'],
  'builtin-exercise:hanging-knees-to-elbows': ['Hanging Knees to Elbows Waist'],
  'builtin-exercise:kettlebell-clean': ['Kettelbell Clean'],
  'builtin-exercise:kettlebell-renegade-row': ['Kettlebel Renegade Row'],
  'builtin-exercise:lying-straight-leg-raise': ['Lying Stright Leg Raise'],
  'builtin-exercise:overhead-cable-triceps-extension-bar': ['Overhead Cable Triceps Exstension (bar)'],
  'builtin-exercise:single-dumbbell-straight-leg-deadlift': ['Dumbbell Straight Leg Deadlift'],
  'builtin-exercise:smith-machine-glute-kickback': ['Smith Machibe Glute Kickback'],
  'builtin-exercise:stability-ball-wall-squat': ['Stabillity Ball Wall Squat'],
  'builtin-exercise:stationary-bike': ['Stacionary Bike'],
  'builtin-exercise:t-bar-chest-supported-row': ['T-Bar Chest Suported Row'],
  'builtin-exercise:two-dumbbell-straight-leg-deadlift': ['Dumbbell Deadlift Straight Legs'],
}

function createExercise(definition: FitDexExerciseDefinition): Exercise {
  const id = `builtin-exercise:${definition.slug}`
  const primaryCategory = definition.categories[0] as ExerciseCategory
  return {
    id,
    name: definition.name,
    aliases: [
      ...(legacyAliasesBySuccessor.get(id) ?? []),
      ...(TYPO_EXERCISE_ALIASES[id] ?? []),
    ],
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
    mediaStatus: definition.mediaStatus,
    archived: false,
    laterality: lateralityFor(definition),
    supportedCardioMetrics: cardioMetricsFor(definition),
    createdAt: FITDEX_CATALOG_GENERATED_AT,
    updatedAt: FITDEX_CATALOG_GENERATED_AT,
  }
}

export const builtInExercises: readonly Exercise[] = ACTIVE_FITDEX_EXERCISES.map(createExercise)

function stableDatasetHash(value: string) {
  let hash = 0x811c9dc5
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index)
    hash = Math.imul(hash, 0x01000193)
  }
  return (hash >>> 0).toString(16).padStart(8, '0')
}

/** Changes whenever resolved canonical exercise data changes, including tracking rules. */
export const BUILT_IN_EXERCISE_DATASET_SIGNATURE = `${BUILT_IN_EXERCISE_DATASET_VERSION}:${stableDatasetHash(JSON.stringify(builtInExercises))}`
