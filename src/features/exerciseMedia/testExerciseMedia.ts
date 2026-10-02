/// <reference types="node" />
import assert from 'node:assert/strict'
import { EXERCISE_MEDIA_BASE_URL } from './exerciseMediaConfig.ts'
import { canonicalExerciseVideoKey, resolveRemoteExerciseMediaUrl } from './exerciseMediaResolver.ts'
import { EXERCISE_CONTENT } from '../exerciseDex/exerciseContent.ts'

assert.equal(canonicalExerciseVideoKey('/exercises/barbell-bench-press.mp4'), 'barbell-bench-press.mp4')
assert.equal(canonicalExerciseVideoKey('/exercises/../secret.mp4'), undefined)
assert.equal(canonicalExerciseVideoKey('/exercises/nested/demo.mp4'), undefined)
assert.equal(canonicalExerciseVideoKey('/other/demo.mp4'), undefined)
assert.equal(resolveRemoteExerciseMediaUrl('/exercises/barbell-bench-press.mp4', 'https://media.example.com/exercises/'), 'https://media.example.com/exercises/barbell-bench-press.mp4')
assert.equal(resolveRemoteExerciseMediaUrl('/exercises/barbell-bench-press.mp4', 'https://media.example.com/exercises'), 'https://media.example.com/exercises/barbell-bench-press.mp4')
assert.equal(resolveRemoteExerciseMediaUrl('/exercises/barbell-bench-press.mp4'), 'https://fitdex-media.fitdexapp.workers.dev/exercises/barbell-bench-press.mp4')
assert.equal(resolveRemoteExerciseMediaUrl('/exercises/../secret.mp4', 'https://media.example.com/exercises'), undefined)
assert.equal(EXERCISE_MEDIA_BASE_URL, 'https://fitdex-media.fitdexapp.workers.dev/exercises/')
const videoPaths = Object.values(EXERCISE_CONTENT).filter((content) => content.mediaType === 'video/mp4').map((content) => content.mediaPath)
assert.equal(videoPaths.length, 802)
assert.ok(videoPaths.every((path) => canonicalExerciseVideoKey(path)))
console.log('Exercise media resolver assertions passed: stable keys, safe paths, configured URLs, and unavailable configuration.')
