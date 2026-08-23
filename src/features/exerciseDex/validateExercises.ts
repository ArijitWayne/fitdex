import type { ExerciseCategory, ExerciseEquipment, ExerciseTrackingType, MovementPattern } from '../../data/models.ts'
import { EXERCISE_CATEGORIES, normalizeExerciseSearch } from './exerciseCatalog.ts'
import { ACTIVE_SMART_WORKOUT_EXERCISES, builtInExercises, BUILT_IN_EXERCISE_DATASET_VERSION, RETIRED_SMART_WORKOUT_SLUGS } from './exerciseData.ts'
import { LEGACY_EXERCISE_MIGRATIONS } from './legacyExerciseMigration.generated.ts'
import { SMART_WORKOUT_EXERCISES } from './smartWorkoutExercises.generated.ts'

const trackingTypes = new Set<ExerciseTrackingType>([
  'weight_reps', 'bodyweight_reps', 'assisted_bodyweight', 'reps_only', 'duration',
  'distance_duration', 'duration_optional_distance', 'weight_distance', 'duration_reps',
])
const equipment = new Set<ExerciseEquipment>([
  'Barbell', 'Dumbbell', 'EZ Bar', 'Cable', 'Machine', 'Smith Machine', 'Bodyweight',
  'Pull-Up Bar', 'Bench', 'Resistance Band', 'Kettlebell', 'Medicine Ball',
  'Suspension Trainer', 'Weight Plate', 'Landmine', 'Sled', 'Battle Rope',
  'Cardio Machine', 'Other', 'Back Extension Bench', 'Trap Bar', 'Rings', 'Sandbag', 'GHD',
])
const movementPatterns = new Set<MovementPattern>([
  'Horizontal Push', 'Vertical Push', 'Horizontal Pull', 'Vertical Pull', 'Squat', 'Hinge', 'Lunge', 'Carry',
  'Rotation', 'Anti-Rotation', 'Flexion', 'Extension', 'Abduction', 'Adduction', 'Locomotion', 'Conditioning',
  'Mobility', 'Isometric', 'Olympic Lift / Explosive', 'Crawl',
])

const errors: string[] = []
const ids = new Set<string>()
const slugs = new Set<string>()
const names = new Map<string, string>()
const aliases = new Map<string, string>()
const counts = Object.fromEntries(EXERCISE_CATEGORIES.map((category) => [category, 0])) as Record<ExerciseCategory, number>
const activeMembershipCount = (category: ExerciseCategory) => ACTIVE_SMART_WORKOUT_EXERCISES.reduce(
  (count, definition) => count + Number((definition.categories as readonly ExerciseCategory[]).includes(category)),
  0,
)

if (BUILT_IN_EXERCISE_DATASET_VERSION !== 4) errors.push(`Expected dataset version 4, got ${BUILT_IN_EXERCISE_DATASET_VERSION}`)
if (builtInExercises.length !== 804) errors.push(`Expected 804 active built-ins, got ${builtInExercises.length}`)
if (builtInExercises.length !== ACTIVE_SMART_WORKOUT_EXERCISES.length) errors.push('Canonical/source inventory count mismatch')
if (RETIRED_SMART_WORKOUT_SLUGS.length !== 9) errors.push(`Expected 9 retired media-less pages, got ${RETIRED_SMART_WORKOUT_SLUGS.length}`)
if (SMART_WORKOUT_EXERCISES.filter((definition) => definition.mediaStatus !== 'available').some((definition) => !RETIRED_SMART_WORKOUT_SLUGS.includes(definition.slug as typeof RETIRED_SMART_WORKOUT_SLUGS[number]))) errors.push('A source page without verified media remains active')

for (const exercise of builtInExercises) {
  if (!/^builtin-exercise:[a-z0-9]+(?:-[a-z0-9]+)*$/.test(exercise.id)) errors.push(`Malformed ID: ${exercise.id}`)
  if (ids.has(exercise.id)) errors.push(`Duplicate ID: ${exercise.id}`)
  if (!exercise.sourceSlug || slugs.has(exercise.sourceSlug)) errors.push(`Missing or duplicate source slug: ${exercise.name} / ${exercise.sourceSlug}`)
  if (!exercise.categories?.length) errors.push(`Missing category memberships: ${exercise.name}`)
  if (exercise.category !== exercise.categories?.[0] || exercise.primaryCategory !== exercise.categories?.[0]) errors.push(`Primary category mismatch: ${exercise.name}`)
  if (exercise.categories?.some((category) => !EXERCISE_CATEGORIES.includes(category))) errors.push(`Invalid category membership: ${exercise.name}`)
  if (!trackingTypes.has(exercise.trackingType)) errors.push(`Invalid tracking type: ${exercise.name}`)
  if (!equipment.has(exercise.equipment) || exercise.equipmentOptions?.some((item) => !equipment.has(item))) errors.push(`Invalid equipment: ${exercise.name}`)
  if (!exercise.movementPattern || !movementPatterns.has(exercise.movementPattern)) errors.push(`Invalid movement pattern: ${exercise.name}`)
  if (!exercise.primaryMuscles.length) errors.push(`Missing primary muscles: ${exercise.name}`)
  if (exercise.source !== 'built-in' || exercise.archived) errors.push(`Invalid built-in state: ${exercise.name}`)
  if (exercise.sourceId !== exercise.id.replace('builtin-exercise:', '')) errors.push(`Source ID mismatch: ${exercise.name}`)
  if (!exercise.sourcePage?.startsWith('https://smartworkout.app/en/exercise-library/')) errors.push(`Invalid source page: ${exercise.name}`)

  const normalizedName = normalizeExerciseSearch(exercise.name)
  const priorName = names.get(normalizedName)
  if (priorName) errors.push(`Canonical-name collision: ${priorName} / ${exercise.name}`)
  names.set(normalizedName, exercise.name)

  for (const alias of exercise.aliases) {
    const normalizedAlias = normalizeExerciseSearch(alias)
    if (!normalizedAlias) errors.push(`Empty alias: ${exercise.name}`)
    const priorAlias = aliases.get(normalizedAlias)
    if (priorAlias && priorAlias !== exercise.name) errors.push(`Alias collision: ${alias} / ${priorAlias} / ${exercise.name}`)
    if (names.has(normalizedAlias)) errors.push(`Alias shadows canonical name: ${alias} / ${exercise.name}`)
    aliases.set(normalizedAlias, exercise.name)
  }

  ids.add(exercise.id)
  if (exercise.sourceSlug) slugs.add(exercise.sourceSlug)
  for (const category of exercise.categories ?? []) counts[category] += 1
}

for (const category of EXERCISE_CATEGORIES) {
  const expected = activeMembershipCount(category)
  if (counts[category] !== expected) errors.push(`Incorrect ${category} membership count: expected ${expected}, got ${counts[category]}`)
}

if (LEGACY_EXERCISE_MIGRATIONS.length !== 399) errors.push(`Expected 399 legacy migration decisions, got ${LEGACY_EXERCISE_MIGRATIONS.length}`)
for (const migration of LEGACY_EXERCISE_MIGRATIONS) {
  if (migration.successorId && !ids.has(migration.successorId)) errors.push(`Legacy mapping target missing: ${migration.legacyId} → ${migration.successorId}`)
}

if (errors.length) throw new Error(`Exercise dataset validation failed:\n${errors.join('\n')}`)

console.log(`Exercise dataset valid: ${builtInExercises.length} SmartWorkout-derived records, version ${BUILT_IN_EXERCISE_DATASET_VERSION}`)
console.log(counts)
console.log(`Legacy decisions: ${LEGACY_EXERCISE_MIGRATIONS.filter((item) => item.successorId).length} mapped, ${LEGACY_EXERCISE_MIGRATIONS.filter((item) => !item.successorId).length} retired`)
