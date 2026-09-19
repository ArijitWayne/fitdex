import type { ExerciseCategory } from '../../data/models.ts'
import { EXERCISE_CATEGORIES, normalizeExerciseSearch } from './exerciseCatalog.ts'
import { ACTIVE_FITDEX_EXERCISES, BUILT_IN_EXERCISE_DATASET_VERSION, builtInExercises } from './exerciseData.ts'
import { LEGACY_EXERCISE_MIGRATIONS } from './legacyExerciseMigration.generated.ts'
import {
  FITDEX_CANONICAL_MEMBERSHIP_TOTAL,
  FITDEX_CATEGORY_AUDIT,
  FITDEX_DUPLICATE_PAGE_IDENTITIES,
  FITDEX_RAW_MEMBERSHIP_TOTAL,
} from './fitDexExercises.generated.ts'

const counts = Object.fromEntries(EXERCISE_CATEGORIES.map((category) => [category, 0])) as Record<ExerciseCategory, number>
const canonicalNames = new Map<string, string[]>()
const aliases = new Map<string, string[]>()
const slugs = new Map<string, string[]>()
const activeMembershipCount = (category: ExerciseCategory) => ACTIVE_FITDEX_EXERCISES.reduce(
  (count, definition) => count + Number((definition.categories as readonly ExerciseCategory[]).includes(category)),
  0,
)

for (const exercise of builtInExercises) {
  for (const category of exercise.categories ?? []) counts[category] += 1
  const nameKey = normalizeExerciseSearch(exercise.name)
  canonicalNames.set(nameKey, [...(canonicalNames.get(nameKey) ?? []), exercise.name])
  if (exercise.sourceId) slugs.set(exercise.sourceId, [...(slugs.get(exercise.sourceId) ?? []), exercise.name])
  for (const alias of exercise.aliases) {
    const aliasKey = normalizeExerciseSearch(alias)
    aliases.set(aliasKey, [...(aliases.get(aliasKey) ?? []), exercise.name])
  }
}

const canonicalCollisions = [...canonicalNames.values()].filter((names) => names.length > 1)
const slugCollisions = [...slugs.values()].filter((names) => names.length > 1)
const aliasCollisions = [...aliases.values()].filter((targets) => new Set(targets).size > 1)
const aliasesMatchingCanonicalNames = [...aliases.keys()].filter((alias) => canonicalNames.has(alias))
const countMismatches = EXERCISE_CATEGORIES.filter((category) => counts[category] !== activeMembershipCount(category))
const mappedLegacy = LEGACY_EXERCISE_MIGRATIONS.filter((migration) => migration.successorId)
const retiredLegacy = LEGACY_EXERCISE_MIGRATIONS.filter((migration) => !migration.successorId)
const errors = canonicalCollisions.length + slugCollisions.length + aliasCollisions.length + aliasesMatchingCanonicalNames.length + countMismatches.length
  + Number(BUILT_IN_EXERCISE_DATASET_VERSION !== 4) + Number(LEGACY_EXERCISE_MIGRATIONS.length !== 399)

console.log(`# FitDex built-in dataset version ${BUILT_IN_EXERCISE_DATASET_VERSION}`)
console.log(`Current built-in canonical count: ${builtInExercises.length}`)
console.log(`Raw category entries: ${FITDEX_RAW_MEMBERSHIP_TOTAL}`)
console.log(`Source canonical memberships before v4 retirement: ${FITDEX_CANONICAL_MEMBERSHIP_TOTAL}`)
for (const category of EXERCISE_CATEGORIES) {
  const audit = FITDEX_CATEGORY_AUDIT[category]
  console.log(`- ${category}: ${counts[category]} canonical memberships (${audit.rawPageCount} raw entries)`)
}
console.log(`Duplicate identities reconciled: ${FITDEX_DUPLICATE_PAGE_IDENTITIES.length}`)
console.log(`Canonical-name collisions: ${canonicalCollisions.length}`)
console.log(`Active slug collisions: ${slugCollisions.length}`)
console.log(`Alias collisions: ${aliasCollisions.length + aliasesMatchingCanonicalNames.length}`)
console.log(`Legacy ID decisions: ${mappedLegacy.length} mapped, ${retiredLegacy.length} retired`)
console.log(`Catalog/source mismatch: ${errors}`)

if (errors) {
  for (const category of countMismatches) console.log(`- Count mismatch: ${category}`)
  for (const collision of canonicalCollisions) console.log(`- Canonical collision: ${collision.join(' / ')}`)
  for (const collision of slugCollisions) console.log(`- Slug collision: ${collision.join(' / ')}`)
  for (const collision of aliasCollisions) console.log(`- Alias collision: ${collision.join(' / ')}`)
  for (const alias of aliasesMatchingCanonicalNames) console.log(`- Alias shadows canonical name: ${alias}`)
  throw new Error(`Exercise catalog audit failed with ${errors} mismatch(es)`)
}
