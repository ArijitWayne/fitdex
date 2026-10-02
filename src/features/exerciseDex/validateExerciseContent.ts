/// <reference types="node" />
import { EXERCISE_CONTENT } from './exerciseContent.ts'
import { ACTIVE_FITDEX_EXERCISES, builtInExercises } from './exerciseData.ts'

const allowedMediaTypes = new Set(['video/mp4', 'image/gif', 'image/webp'])
const records = Object.values(EXERCISE_CONTENT)
const canonicalIds = new Set(builtInExercises.map((exercise) => exercise.id))
const definitionById = new Map(ACTIVE_FITDEX_EXERCISES.map((definition) => [`builtin-exercise:${definition.slug}`, definition]))
const errors: string[] = []
const contentIds = new Set<string>()
const mediaPaths = new Map<string, string>()

if (records.length !== builtInExercises.length) errors.push(`Content count ${records.length} != canonical count ${builtInExercises.length}`)
if (records.length !== 802) errors.push(`Expected 802 active content records, got ${records.length}`)

for (const record of records) {
  if (contentIds.has(record.exerciseId)) errors.push(`Duplicate exerciseId: ${record.exerciseId}`)
  if (!canonicalIds.has(record.exerciseId)) errors.push(`Orphan content: ${record.exerciseId}`)
  contentIds.add(record.exerciseId)
  const definition = definitionById.get(record.exerciseId)
  if (!definition) continue
  if (record.matchQuality !== 'Exact') errors.push(`Canonical content match quality mismatch: ${record.exerciseId}`)

  const howToWords = record.howToPerform.trim().split(/\s+/).length
  const helpsWords = record.howItHelps.trim().split(/\s+/).length
  if (howToWords < 30 || howToWords > 100) errors.push(`How to perform length ${howToWords}: ${record.exerciseId}`)
  if (helpsWords < 15 || helpsWords > 60) errors.push(`How it helps length ${helpsWords}: ${record.exerciseId}`)
  if (/\b(?:tbd|todo|placeholder|coming soon)\b/i.test(`${record.howToPerform} ${record.howItHelps}`)) errors.push(`Placeholder copy: ${record.exerciseId}`)

  if (record.mediaStatus !== definition.mediaStatus) errors.push(`Media status mismatch: ${record.exerciseId}`)
  if (record.mediaStatus !== 'available') errors.push(`Active record has no verified media: ${record.exerciseId}`)

  if (!record.mediaPath || !record.mediaType) {
    errors.push(`Incomplete available media: ${record.exerciseId}`)
    continue
  }
  if (!allowedMediaTypes.has(record.mediaType)) errors.push(`Unsupported media type: ${record.exerciseId} / ${record.mediaType}`)
  const priorPath = mediaPaths.get(record.mediaPath)
  if (priorPath) errors.push(`Duplicate mediaPath: ${record.mediaPath} (${priorPath}, ${record.exerciseId})`)
  mediaPaths.set(record.mediaPath, record.exerciseId)

}

for (const exercise of builtInExercises) if (!contentIds.has(exercise.id)) errors.push(`Missing content: ${exercise.id}`)

if (errors.length) {
  console.error(errors.join('\n'))
  process.exitCode = 1
} else {
  console.log(`Exercise content valid: ${records.length} records, ${mediaPaths.size} unique remote media keys`)
}
