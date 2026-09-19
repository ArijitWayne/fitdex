import { createHash } from 'node:crypto'
import { readFile } from 'node:fs/promises'
import path from 'node:path'

export const releaseTypes = new Set(['patch', 'minor', 'major'])

export function parseVersion(value) {
  const match = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/.exec(value)
  if (!match) throw new Error(`Invalid semantic version: ${value}`)
  return match.slice(1).map(Number)
}

export function nextVersion(current, releaseType) {
  if (!releaseTypes.has(releaseType)) throw new Error(`Release type must be patch, minor, or major; got ${releaseType ?? 'nothing'}.`)
  const [major, minor, patch] = parseVersion(current)
  if (releaseType === 'patch') return `${major}.${minor}.${patch + 1}`
  if (releaseType === 'minor') return `${major}.${minor + 1}.0`
  return `${major + 1}.0.0`
}

export function parseVersionCode(gradle) {
  const match = gradle.match(/versionCode\s+(\d+)/)
  if (!match) throw new Error('Could not find Android versionCode.')
  return Number(match[1])
}

export function artifactNames(version) {
  parseVersion(version)
  const apk = `fitdex.${version}.apk`
  return { apk, checksum: `${apk}.sha256` }
}

export function createReleaseMetadata({ version, versionCode, sha256 = null, releaseNotes = 'release-notes.md' }) {
  const { apk, checksum } = artifactNames(version)
  if (!Number.isInteger(versionCode) || versionCode < 1) throw new Error('Android versionCode must be a positive integer.')
  return {
    version,
    versionCode,
    tag: `v${version}`,
    apk,
    apkDownloadUrl: null,
    checksum,
    sha256,
    releaseNotes,
    publishedAt: null,
  }
}

export async function readChecksum(checksumPath, artifactName) {
  const value = (await readFile(checksumPath, 'utf8')).trim()
  const match = /^([a-fA-F0-9]{64})\s+\*?(.+)$/.exec(value)
  if (!match || match[2] !== artifactName) throw new Error(`Invalid checksum file: ${checksumPath}`)
  return match[1].toLowerCase()
}

export async function verifyArtifactChecksum(artifactPath, checksumPath) {
  const expected = await readChecksum(checksumPath, path.basename(artifactPath))
  const actual = createHash('sha256').update(await readFile(artifactPath)).digest('hex')
  if (actual !== expected) throw new Error(`SHA-256 mismatch for ${artifactPath}`)
  return actual
}

export function releaseNotesTemplate(version) {
  return `# FitDex v${version}\n\n## What's New\n- Add reviewed user-facing changes before publishing.\n\n## Improvements\n- Add reviewed improvements before publishing.\n\n## Fixes\n- Add reviewed fixes before publishing.\n\n## Notes\n- Review this draft before publishing.\n`
}
