/// <reference types="node" />
import assert from 'node:assert/strict'
import { mock } from 'node:test'
import { Capacitor } from '@capacitor/core'
import { deviceStorage } from '../../platform/deviceStorage.ts'
import { EXERCISE_MEDIA_BASE_URL, EXERCISE_MEDIA_METADATA_KEY } from './exerciseMediaConfig.ts'
import { canonicalExerciseVideoKey, resolveBrowserExerciseMediaPlayback, resolveRemoteExerciseMediaUrl } from './exerciseMediaResolver.ts'
import { downloadExerciseMedia, getExerciseMediaPlayback, listDownloadedExerciseMedia } from './exerciseMediaStore.ts'
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

const mediaPath = '/exercises/archer-push-up.mp4'
const remotePlayback = { source: 'https://fitdex-media.fitdexapp.workers.dev/exercises/archer-push-up.mp4', kind: 'remote' }
assert.deepEqual(resolveBrowserExerciseMediaPlayback(mediaPath, EXERCISE_MEDIA_BASE_URL), remotePlayback)
assert.deepEqual(resolveBrowserExerciseMediaPlayback(mediaPath, ''), { source: mediaPath, kind: 'local' })
assert.deepEqual(resolveBrowserExerciseMediaPlayback(mediaPath, 'invalid base'), { source: mediaPath, kind: 'local' })
assert.equal(resolveRemoteExerciseMediaUrl(mediaPath, 'http://localhost:8080/exercises'), 'http://localhost:8080/exercises/archer-push-up.mp4')
for (const base of ['', 'invalid base', 'ftp://media.example.com/exercises', 'javascript:alert(1)', 'file:///exercises']) {
  assert.equal(resolveRemoteExerciseMediaUrl(mediaPath, base), undefined)
}
for (const path of [undefined, '', '/exercises/../secret.mp4', '/exercises/nested/demo.mp4', '/other/demo.mp4', '/exercises/demo..mp4', '/exercises/demo\\.mp4', '/exercises/%2e%2e.mp4', '/exercises/DEMO.mp4', '/exercises/demo.webm', '/exercises/demo.mp4?x=1', 'https://example.com/exercises/demo.mp4']) {
  assert.equal(canonicalExerciseVideoKey(path), undefined)
  assert.equal(resolveRemoteExerciseMediaUrl(path), undefined)
  assert.deepEqual(resolveBrowserExerciseMediaPlayback(path), { kind: 'unavailable' })
  assert.deepEqual(resolveBrowserExerciseMediaPlayback(path, ''), { kind: 'unavailable' })
}

// Exercise the store entry point and native priority without a browser or device.
const originalOnline = Object.getOwnPropertyDescriptor(navigator, 'onLine')
let online = true
Object.defineProperty(navigator, 'onLine', { configurable: true, get: () => online })
try {
  mock.method(Capacitor, 'isNativePlatform', () => false)
  assert.deepEqual(await getExerciseMediaPlayback('archer-push-up', mediaPath), remotePlayback)
  assert.deepEqual(await getExerciseMediaPlayback('missing'), { kind: 'unavailable' })
  assert.deepEqual(await listDownloadedExerciseMedia(), [])
  await assert.rejects(downloadExerciseMedia('archer-push-up', mediaPath), /Offline exercise downloads are available in the FitDex app/)

  mock.method(Capacitor, 'isNativePlatform', () => true)
  online = true
  assert.deepEqual(await getExerciseMediaPlayback('archer-push-up', mediaPath), remotePlayback)
  online = false
  assert.deepEqual(await getExerciseMediaPlayback('archer-push-up', mediaPath), { kind: 'unavailable' })

  const record = { exerciseId: 'archer-push-up', videoKey: 'archer-push-up.mp4', localPath: 'exercise-media/archer-push-up.mp4', downloadedAt: '2026-11-14T00:00:00Z', sizeBytes: 100 }
  mock.method(deviceStorage, 'get', () => JSON.stringify([record]))
  const removeStale = mock.method(deviceStorage, 'set', () => true)
  // No native filesystem exists in Node: stale downloads must fall back safely.
  online = true
  assert.deepEqual(await getExerciseMediaPlayback(record.exerciseId, mediaPath), remotePlayback)
  assert.deepEqual(removeStale.mock.calls.at(-1)?.arguments, [EXERCISE_MEDIA_METADATA_KEY, '[]'])
  online = false
  assert.deepEqual(await getExerciseMediaPlayback(record.exerciseId, mediaPath), { kind: 'unavailable' })
} finally {
  mock.restoreAll()
  if (originalOnline) Object.defineProperty(navigator, 'onLine', originalOnline)
  else Reflect.deleteProperty(navigator, 'onLine')
}
const videoPaths = Object.values(EXERCISE_CONTENT).filter((content) => content.mediaType === 'video/mp4').map((content) => content.mediaPath)
assert.equal(videoPaths.length, 802)
assert.ok(videoPaths.every((path) => canonicalExerciseVideoKey(path)))
console.log('Exercise media assertions passed: browser remote/local resolution, safe paths, native playback priority, and native-only downloads.')
