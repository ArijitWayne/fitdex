import type { CardioMetric, ExerciseCategory, ExerciseEquipment, ExerciseTrackingType, MovementPattern } from '../../data/models.ts'
import { EXERCISE_CATEGORIES, normalizeExerciseSearch } from './exerciseCatalog.ts'
import { builtInExercises } from './exerciseData.ts'
import { FINAL_CURATION_EXCLUSIONS } from './exerciseDataV2Additions.ts'

const trackingTypes = new Set<ExerciseTrackingType>([
  'weight_reps', 'bodyweight_reps', 'assisted_bodyweight', 'reps_only',
  'duration', 'distance_duration', 'duration_optional_distance', 'weight_distance', 'duration_reps',
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
const cardioMetrics = new Set<CardioMetric>([
  'duration', 'distance', 'pace', 'speed', 'incline', 'resistance', 'watts', 'cadence', 'strokeRate',
  'heartRate', 'calories', 'rounds', 'reps', 'load',
])
const expectedCounts: Record<ExerciseCategory, number> = {
  Chest: 39, Back: 47, Shoulders: 33, Arms: 48, Legs: 71, Core: 41, 'Full Body': 39, Cardio: 47, Mobility: 34,
}

const errors: string[] = []
const ids = new Set<string>()
const names = new Set<string>()
const normalizedNames = new Map<string, string>()
const aliases = new Map<string, string>()
const counts = Object.fromEntries(EXERCISE_CATEGORIES.map((category) => [category, 0])) as Record<ExerciseCategory, number>
const validRegions: Partial<Record<ExerciseCategory, ReadonlySet<string>>> = {
  Chest: new Set(['Upper', 'General', 'Lower']),
  Back: new Set(['Lats', 'Upper Back', 'Lower Back']),
  Shoulders: new Set(['Front Delts', 'Side Delts', 'Rear Delts']),
  Arms: new Set(['Biceps', 'Triceps', 'Forearms']),
  Legs: new Set(['Quads', 'Hamstrings', 'Glutes', 'Calves']),
  Core: new Set(['Abs', 'Obliques', 'Stability']),
  'Full Body': new Set(['All']),
  Cardio: new Set(['Running', 'Walking', 'Cycling', 'Rowing', 'Machines', 'Conditioning']),
  Mobility: new Set(['Upper Body', 'Lower Body', 'Full Body']),
}

for (const exercise of builtInExercises) {
  const normalizedName = exercise.name.trim().toLowerCase()
  if (!exercise.name.trim()) errors.push(`Empty name: ${exercise.id}`)
  if (exercise.name !== exercise.name.trim() || /\s{2,}/.test(exercise.name)) errors.push(`Malformed name whitespace: ${exercise.name}`)
  if (ids.has(exercise.id)) errors.push(`Duplicate ID: ${exercise.id}`)
  if (names.has(normalizedName)) errors.push(`Duplicate name: ${exercise.name}`)
  if (!/^builtin-exercise:[a-z0-9]+(?:-[a-z0-9]+)*$/.test(exercise.id)) errors.push(`Malformed ID: ${exercise.id}`)
  if (!EXERCISE_CATEGORIES.includes(exercise.category)) errors.push(`Invalid category: ${exercise.name}`)
  if (!trackingTypes.has(exercise.trackingType)) errors.push(`Invalid tracking type: ${exercise.name}`)
  if (!equipment.has(exercise.equipment)) errors.push(`Invalid equipment: ${exercise.name}`)
  if (exercise.movementPattern && !movementPatterns.has(exercise.movementPattern)) errors.push(`Invalid movement pattern: ${exercise.name}`)
  if (!exercise.primaryMuscles.length) errors.push(`Missing primary muscle: ${exercise.name}`)
  if (!exercise.muscleRegions.length) errors.push(`Missing muscle region: ${exercise.name}`)
  if (!exercise.muscleRegions.every((region) => validRegions[exercise.category]?.has(region))) errors.push(`Invalid region: ${exercise.name}`)
  if (exercise.category === 'Cardio' && !exercise.cardioSubtype) errors.push(`Missing cardio subtype: ${exercise.name}`)
  if (exercise.category === 'Cardio' && exercise.trackingType === 'weight_reps') errors.push(`Invalid cardio tracking: ${exercise.name}`)
  if (exercise.category === 'Cardio' && !exercise.supportedCardioMetrics?.includes('duration')) errors.push(`Missing cardio duration metric: ${exercise.name}`)
  if (exercise.category !== 'Cardio' && exercise.supportedCardioMetrics?.length) errors.push(`Metrics on non-cardio exercise: ${exercise.name}`)
  if (exercise.supportedCardioMetrics?.some((metric) => !cardioMetrics.has(metric))) errors.push(`Invalid cardio metric: ${exercise.name}`)
  if (exercise.source !== 'built-in' || exercise.archived) errors.push(`Invalid built-in state: ${exercise.name}`)
  if (exercise.sourceId !== exercise.id.replace('builtin-exercise:', '')) errors.push(`Source ID mismatch: ${exercise.name}`)
  const exerciseAliases = new Set<string>()
  for (const alias of exercise.aliases) {
    const normalizedAlias = normalizeExerciseSearch(alias)
    if (!normalizedAlias) errors.push(`Empty alias: ${exercise.name}`)
    if (alias !== alias.trim() || /\s{2,}/.test(alias)) errors.push(`Malformed alias whitespace: ${exercise.name} / ${alias}`)
    if (exerciseAliases.has(normalizedAlias)) errors.push(`Duplicate alias inside exercise: ${exercise.name} / ${alias}`)
    const priorExercise = aliases.get(normalizedAlias)
    if (priorExercise && priorExercise !== exercise.name) errors.push(`Duplicate alias "${alias}": ${priorExercise} / ${exercise.name}`)
    aliases.set(normalizedAlias, exercise.name)
    exerciseAliases.add(normalizedAlias)
  }
  const collisionKey = normalizeExerciseSearch(exercise.name).replace(/[^a-z0-9]/g, '')
  const priorNormalizedName = normalizedNames.get(collisionKey)
  if (priorNormalizedName) errors.push(`Normalized canonical-name collision: ${priorNormalizedName} / ${exercise.name}`)
  normalizedNames.set(collisionKey, exercise.name)
  ids.add(exercise.id)
  names.add(normalizedName)
  counts[exercise.category] += 1
}

for (const category of EXERCISE_CATEGORIES) {
  if (counts[category] !== expectedCounts[category]) errors.push(`Incorrect ${category} count: expected ${expectedCounts[category]}, got ${counts[category]}`)
}

if (builtInExercises.length !== 399) errors.push(`Incorrect total count: expected 399, got ${builtInExercises.length}`)
for (const [alias, canonicalName] of aliases) {
  if (names.has(alias)) errors.push(`Alias equals canonical name: ${alias} → ${canonicalName}`)
}
if (aliases.size !== 91) errors.push(`Incorrect alias count: expected 91, got ${aliases.size}`)

const dragonFlags = builtInExercises.filter((exercise) => exercise.name === 'Dragon Flag')
if (dragonFlags.length !== 1) errors.push(`Dragon Flag canonical count: expected 1, got ${dragonFlags.length}`)
const dragonFlag = dragonFlags[0]
if (dragonFlag && (dragonFlag.category !== 'Core' || dragonFlag.trackingType !== 'reps_only' || dragonFlag.movementPattern !== 'Isometric' || dragonFlag.difficulty !== 'advanced' || dragonFlag.id !== 'builtin-exercise:dragon-flag')) {
  errors.push('Dragon Flag metadata does not match the approved canonical classification')
}
if (aliases.has(normalizeExerciseSearch('Dragon Flag'))) errors.push('Dragon Flag incorrectly exists as an alias')

const powerClean = builtInExercises.filter((exercise) => exercise.name === 'Power Clean')
if (powerClean.length !== 1) errors.push(`Power Clean canonical count: expected 1, got ${powerClean.length}`)
const barbellClean = builtInExercises.find((exercise) => exercise.name === 'Barbell Clean')
if (barbellClean?.aliases.includes('Power Clean')) errors.push('Power Clean remains an alias of Barbell Clean')
for (const excludedName of FINAL_CURATION_EXCLUSIONS) {
  if (builtInExercises.some((exercise) => exercise.name === excludedName)) errors.push(`Final-curation exclusion integrated: ${excludedName}`)
}

if (errors.length) throw new Error(`Exercise dataset validation failed:\n${errors.join('\n')}`)

console.log(`Exercise dataset valid: ${builtInExercises.length} records`)
console.log(counts)
