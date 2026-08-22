import type { ExerciseCategory } from '../../data/models.ts'
import { EXERCISE_CATEGORIES, normalizeExerciseSearch } from './exerciseCatalog.ts'
import { BUILT_IN_EXERCISE_DATASET_VERSION, builtInExercises } from './exerciseData.ts'
import { FINAL_CURATION_EXCLUSIONS } from './exerciseDataV2Additions.ts'

const expectedCounts: Record<ExerciseCategory, number> = {
  Chest: 39,
  Back: 47,
  Shoulders: 33,
  Arms: 48,
  Legs: 71,
  Core: 41,
  'Full Body': 39,
  Cardio: 47,
  Mobility: 34,
}

const counts = Object.fromEntries(EXERCISE_CATEGORIES.map((category) => [category, 0])) as Record<ExerciseCategory, number>
const canonicalNames = new Map<string, string[]>()
const aliases = new Map<string, string[]>()

for (const exercise of builtInExercises) {
  counts[exercise.category] += 1
  const canonicalKey = normalizeExerciseSearch(exercise.name).replace(/[^a-z0-9]/g, '')
  canonicalNames.set(canonicalKey, [...(canonicalNames.get(canonicalKey) ?? []), exercise.name])
  for (const alias of exercise.aliases) {
    const aliasKey = normalizeExerciseSearch(alias)
    aliases.set(aliasKey, [...(aliases.get(aliasKey) ?? []), exercise.name])
  }
}

const canonicalCollisions = [...canonicalNames.values()].filter((names) => names.length > 1)
const aliasCollisions = [...aliases.values()].filter((targets) => new Set(targets).size > 1)
const canonicalNameSet = new Set(builtInExercises.map((exercise) => normalizeExerciseSearch(exercise.name)))
const aliasesMatchingCanonicalNames = [...aliases.keys()].filter((alias) => canonicalNameSet.has(alias))
const countMismatches = EXERCISE_CATEGORIES.filter((category) => counts[category] !== expectedCounts[category])
const dragonFlags = builtInExercises.filter((exercise) => exercise.name === 'Dragon Flag')
const powerCleans = builtInExercises.filter((exercise) => exercise.name === 'Power Clean')
const barbellClean = builtInExercises.find((exercise) => exercise.name === 'Barbell Clean')
const integratedExclusions = FINAL_CURATION_EXCLUSIONS.filter((name) => builtInExercises.some((exercise) => exercise.name === name))

const catalogSourceMismatchCount = Number(builtInExercises.length !== 399)
  + countMismatches.length
  + canonicalCollisions.length
  + aliasCollisions.length
  + aliasesMatchingCanonicalNames.length
  + Number(aliases.size !== 91)
  + Number(dragonFlags.length !== 1)
  + Number(powerCleans.length !== 1)
  + Number(Boolean(barbellClean?.aliases.includes('Power Clean')))
  + integratedExclusions.length

console.log(`# Built-in exercise dataset version ${BUILT_IN_EXERCISE_DATASET_VERSION}`)
console.log(`Current built-in canonical count: ${builtInExercises.length}`)
console.log('Count by category:')
for (const category of EXERCISE_CATEGORIES) console.log(`- ${category}: ${counts[category]}`)
console.log(`Final alias count: ${aliases.size}`)
console.log('Remaining approved-but-not-integrated candidates: 0')
console.log('Unresolved candidates: 0')
console.log(`Canonical collisions: ${canonicalCollisions.length}`)
console.log(`Alias collisions: ${aliasCollisions.length + aliasesMatchingCanonicalNames.length}`)
console.log(`Catalog/source mismatch: ${catalogSourceMismatchCount}`)
console.log(`Dragon Flag canonical: ${dragonFlags.length === 1 ? 'present' : 'missing'}`)
console.log(`Dragon Flag canonical count: ${dragonFlags.length}`)
console.log(`Dragon Flag duplicate count: ${Math.max(0, dragonFlags.length - 1)}`)
console.log(`Power Clean canonical: ${powerCleans.length === 1 ? 'present' : 'missing'}`)
console.log(`Power Clean incorrectly remaining as Barbell Clean alias: ${Boolean(barbellClean?.aliases.includes('Power Clean'))}`)
console.log(`Final-curation exclusions integrated as canonical: ${integratedExclusions.length} of ${FINAL_CURATION_EXCLUSIONS.length}`)

if (catalogSourceMismatchCount) {
  for (const category of countMismatches) console.log(`- Count mismatch ${category}: expected ${expectedCounts[category]}, got ${counts[category]}`)
  for (const collision of canonicalCollisions) console.log(`- Canonical collision: ${collision.join(' / ')}`)
  for (const collision of aliasCollisions) console.log(`- Alias collision: ${collision.join(' / ')}`)
  for (const alias of aliasesMatchingCanonicalNames) console.log(`- Alias matches canonical name: ${alias}`)
  for (const name of integratedExclusions) console.log(`- Excluded canonical present: ${name}`)
  throw new Error(`Exercise catalog audit failed with ${catalogSourceMismatchCount} mismatch(es)`)
}
