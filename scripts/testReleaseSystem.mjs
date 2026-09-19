import assert from 'node:assert/strict'
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import { artifactNames, createReleaseMetadata, nextVersion, parseVersionCode, releaseNotesTemplate, verifyArtifactChecksum } from './release-system.mjs'
import { assertReleaseBranchAndClean, getReleasePlan, parsePrepareArguments } from './prepare-release.mjs'

assert.equal(nextVersion('1.0.0', 'patch'), '1.0.1')
assert.equal(nextVersion('1.0.0', 'minor'), '1.1.0')
assert.equal(nextVersion('1.0.0', 'major'), '2.0.0')
assert.throws(() => nextVersion('1.0.0', 'auto'))
assert.deepEqual(parsePrepareArguments(['patch', '--dry-run']), { type: 'patch', dryRun: true, firstRelease: false })
assert.deepEqual(parsePrepareArguments(['--first-release', '--dry-run']), { type: undefined, dryRun: true, firstRelease: true })
assert.throws(() => parsePrepareArguments(['patch', '--first-release']))
assert.throws(() => assertReleaseBranchAndClean({ run: () => ' M package.json' }))
assert.throws(() => assertReleaseBranchAndClean({ run: (_command, args) => args[1] === '--show-current' ? 'main' : '' }))
assert.deepEqual(
  await getReleasePlan({ type: 'patch', firstRelease: false }),
  { currentVersion: '1.0.0', currentVersionCode: 2, version: '1.0.1', versionCode: 3, tag: 'v1.0.1', apk: 'fitdex.1.0.1.apk', checksum: 'fitdex.1.0.1.apk.sha256' },
)
assert.deepEqual(
  await getReleasePlan({ firstRelease: true }),
  { currentVersion: '1.0.0', currentVersionCode: 2, version: '1.0.0', versionCode: 3, tag: 'v1.0.0', apk: 'fitdex.1.0.0.apk', checksum: 'fitdex.1.0.0.apk.sha256' },
)
assert.equal(parseVersionCode('versionCode 2'), 2)
assert.deepEqual(artifactNames('1.0.1'), { apk: 'fitdex.1.0.1.apk', checksum: 'fitdex.1.0.1.apk.sha256' })
assert.deepEqual(createReleaseMetadata({ version: '1.0.1', versionCode: 3, sha256: 'a'.repeat(64) }), {
  version: '1.0.1', versionCode: 3, tag: 'v1.0.1', apk: 'fitdex.1.0.1.apk', apkDownloadUrl: null,
  checksum: 'fitdex.1.0.1.apk.sha256', sha256: 'a'.repeat(64), releaseNotes: 'release-notes.md', publishedAt: null,
})
assert.match(releaseNotesTemplate('1.0.1'), /# FitDex v1\.0\.1/)
const temp = await mkdtemp(path.join(os.tmpdir(), 'fitdex-release-test-'))
try {
  const artifact = path.join(temp, 'fitdex.1.0.1.apk')
  const checksum = `${artifact}.sha256`
  await writeFile(artifact, 'apk bytes')
  await writeFile(checksum, '9379cfb95416438572c33e2c2e03f1fdbdb10e4668cfbdb7bbd0e3049463ac33  fitdex.1.0.1.apk\n')
  const original = await readFile(artifact, 'utf8')
  assert.equal(await verifyArtifactChecksum(artifact, checksum), '9379cfb95416438572c33e2c2e03f1fdbdb10e4668cfbdb7bbd0e3049463ac33')
  assert.equal(await readFile(artifact, 'utf8'), original)
  await writeFile(checksum, `${'0'.repeat(64)}  fitdex.1.0.1.apk\n`)
  await assert.rejects(verifyArtifactChecksum(artifact, checksum))
} finally {
  await rm(temp, { recursive: true, force: true })
}
console.log('Release-system tests passed.')
