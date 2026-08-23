/// <reference types="node" />
import fs from 'node:fs'
import path from 'node:path'
import { EXERCISE_CONTENT } from './exerciseContent.ts'
import { ACTIVE_SMART_WORKOUT_EXERCISES, builtInExercises } from './exerciseData.ts'

const allowedMediaTypes = new Set(['video/mp4', 'image/gif', 'image/webp'])
const records = Object.values(EXERCISE_CONTENT)
const canonicalIds = new Set(builtInExercises.map((exercise) => exercise.id))
const definitionById = new Map(ACTIVE_SMART_WORKOUT_EXERCISES.map((definition) => [`builtin-exercise:${definition.slug}`, definition]))
const errors: string[] = []
const contentIds = new Set<string>()
const mediaPaths = new Map<string, string>()
const sourceAssets = new Map<string, string>()
const referencedFiles = new Set<string>()

function hasPlayableMp4Structure(buffer: Buffer) {
  const atoms = new Set<string>()
  let offset = 0
  while (offset + 8 <= buffer.length) {
    let size = buffer.readUInt32BE(offset)
    const type = buffer.subarray(offset + 4, offset + 8).toString()
    let headerSize = 8
    if (size === 1) {
      if (offset + 16 > buffer.length) return false
      const extendedSize = buffer.readBigUInt64BE(offset + 8)
      if (extendedSize > BigInt(Number.MAX_SAFE_INTEGER)) return false
      size = Number(extendedSize)
      headerSize = 16
    } else if (size === 0) {
      size = buffer.length - offset
    }
    if (size < headerSize || offset + size > buffer.length) return false
    atoms.add(type)
    offset += size
  }
  return atoms.has('ftyp') && atoms.has('moov') && atoms.has('mdat')
}

if (records.length !== builtInExercises.length) errors.push(`Content count ${records.length} != canonical count ${builtInExercises.length}`)
if (records.length !== 804) errors.push(`Expected 804 active content records, got ${records.length}`)

for (const record of records) {
  if (contentIds.has(record.exerciseId)) errors.push(`Duplicate exerciseId: ${record.exerciseId}`)
  if (!canonicalIds.has(record.exerciseId)) errors.push(`Orphan content: ${record.exerciseId}`)
  contentIds.add(record.exerciseId)
  const definition = definitionById.get(record.exerciseId)
  if (!definition) continue
  if (record.sourceSlug !== definition.sourceSlug || record.sourcePage !== definition.sourcePage) errors.push(`Source identity mismatch: ${record.exerciseId}`)
  if (record.sourceExerciseName !== definition.name || record.matchQuality !== 'Exact') errors.push(`Canonical source mismatch: ${record.exerciseId}`)

  const howToWords = record.howToPerform.trim().split(/\s+/).length
  const helpsWords = record.howItHelps.trim().split(/\s+/).length
  if (howToWords < 30 || howToWords > 100) errors.push(`How to perform length ${howToWords}: ${record.exerciseId}`)
  if (helpsWords < 15 || helpsWords > 60) errors.push(`How it helps length ${helpsWords}: ${record.exerciseId}`)
  if (/\b(?:tbd|todo|placeholder|coming soon)\b/i.test(`${record.howToPerform} ${record.howItHelps}`)) errors.push(`Placeholder copy: ${record.exerciseId}`)

  if (record.mediaStatus !== definition.mediaStatus) errors.push(`Media status mismatch: ${record.exerciseId}`)
  if (record.mediaStatus !== 'available') errors.push(`Active record has no verified media: ${record.exerciseId}`)

  if (!record.mediaPath || !record.mediaType || !record.sourceAssetUrl) {
    errors.push(`Incomplete available media: ${record.exerciseId}`)
    continue
  }
  if (!allowedMediaTypes.has(record.mediaType)) errors.push(`Unsupported media type: ${record.exerciseId} / ${record.mediaType}`)
  const priorPath = mediaPaths.get(record.mediaPath)
  if (priorPath) errors.push(`Duplicate mediaPath: ${record.mediaPath} (${priorPath}, ${record.exerciseId})`)
  mediaPaths.set(record.mediaPath, record.exerciseId)
  const priorAsset = sourceAssets.get(record.sourceAssetUrl)
  if (priorAsset) errors.push(`Duplicate sourceAssetUrl: ${record.sourceAssetUrl} (${priorAsset}, ${record.exerciseId})`)
  sourceAssets.set(record.sourceAssetUrl, record.exerciseId)

  const localFile = path.resolve(process.cwd(), 'public', record.mediaPath.replace(/^\//, ''))
  referencedFiles.add(path.basename(localFile))
  if (!fs.existsSync(localFile)) errors.push(`Missing local media: ${record.mediaPath}`)
  else if (fs.statSync(localFile).size === 0) errors.push(`Empty local media: ${record.mediaPath}`)
  else if (record.mediaType === 'video/mp4' && !hasPlayableMp4Structure(fs.readFileSync(localFile))) errors.push(`Invalid MP4 structure: ${record.mediaPath}`)
}

for (const exercise of builtInExercises) if (!contentIds.has(exercise.id)) errors.push(`Missing content: ${exercise.id}`)

const mediaDirectory = path.resolve(process.cwd(), 'public/exercises')
for (const filename of fs.readdirSync(mediaDirectory)) if (!referencedFiles.has(filename)) errors.push(`Orphan local media: ${filename}`)

if (errors.length) {
  console.error(errors.join('\n'))
  process.exitCode = 1
} else {
  console.log(`Exercise content valid: ${records.length} records, ${mediaPaths.size} verified local media files`)
}
