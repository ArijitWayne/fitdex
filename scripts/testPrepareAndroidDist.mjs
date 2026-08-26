import assert from 'node:assert/strict'
import { mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import { prepareAndroidDist } from './prepare-android-dist.mjs'

const fixtureRoot = await mkdtemp(path.join(os.tmpdir(), 'fitdex-android-dist-'))

try {
  const exercisesDir = path.join(fixtureRoot, 'exercises', 'nested')
  await mkdir(exercisesDir, { recursive: true })
  await writeFile(path.join(fixtureRoot, 'exercises', 'demo.mp4'), 'video')
  await writeFile(path.join(exercisesDir, 'second.MP4'), 'more-video')
  await writeFile(path.join(fixtureRoot, 'exercises', 'keep.txt'), 'keep')

  const result = await prepareAndroidDist({ distDir: fixtureRoot })
  assert.equal(result.removedFiles, 2)
  assert.equal(result.removedBytes, 15)
  assert.equal(await readFile(path.join(fixtureRoot, 'exercises', 'keep.txt'), 'utf8'), 'keep')
  await assert.rejects(readFile(path.join(fixtureRoot, 'exercises', 'demo.mp4')))
  await assert.rejects(readFile(path.join(exercisesDir, 'second.MP4')))
  assert.deepEqual(await prepareAndroidDist({ distDir: path.join(fixtureRoot, 'missing') }), {
    exercisesDir: path.join(fixtureRoot, 'missing', 'exercises'),
    removedFiles: 0,
    removedBytes: 0,
  })
} finally {
  await rm(fixtureRoot, { recursive: true, force: true })
}

console.log('Android dist preparation assertions passed: exercise MP4 files are removed from a build-only copy and non-video assets remain.')
