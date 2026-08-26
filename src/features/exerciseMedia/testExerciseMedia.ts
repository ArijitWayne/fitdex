/// <reference types="node" />
import assert from 'node:assert/strict'
import { canonicalExerciseVideoKey, resolveRemoteExerciseMediaUrl } from './exerciseMediaResolver.ts'
import { EXERCISE_CONTENT } from '../exerciseDex/exerciseContent.ts'

assert.equal(canonicalExerciseVideoKey('/exercises/barbell-bench-press.mp4'), 'barbell-bench-press.mp4')
assert.equal(canonicalExerciseVideoKey('/exercises/../secret.mp4'), undefined)
assert.equal(canonicalExerciseVideoKey('/exercises/nested/demo.mp4'), undefined)
assert.equal(canonicalExerciseVideoKey('/other/demo.mp4'), undefined)
assert.equal(resolveRemoteExerciseMediaUrl('/exercises/barbell-bench-press.mp4', 'https://media.example.com/exercises/'), 'https://media.example.com/exercises/barbell-bench-press.mp4')
assert.equal(resolveRemoteExerciseMediaUrl('/exercises/barbell-bench-press.mp4', 'https://media.example.com/exercises'), 'https://media.example.com/exercises/barbell-bench-press.mp4')
assert.equal(resolveRemoteExerciseMediaUrl('/exercises/barbell-bench-press.mp4', undefined), undefined)
assert.equal(resolveRemoteExerciseMediaUrl('/exercises/../secret.mp4', 'https://media.example.com/exercises'), undefined)
const videoPaths = Object.values(EXERCISE_CONTENT).filter((content) => content.mediaType === 'video/mp4').map((content) => content.mediaPath)
assert.equal(videoPaths.length, 804)
assert.ok(videoPaths.every((path) => canonicalExerciseVideoKey(path)))
console.log('Exercise media resolver assertions passed: stable keys, safe paths, configured URLs, and unavailable configuration.')
