import { execFileSync } from 'node:child_process'
import { access, readFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { artifactNames, parseVersion, parseVersionCode, verifyArtifactChecksum } from './release-system.mjs'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const artifactsPath = path.join(root, 'release-artifacts')
const expectedBranch = process.env.FITDEX_RELEASE_BRANCH || 'dev'

function command(commandName, args) {
  return execFileSync(commandName, args, { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim()
}

function remoteTagExists(tag) {
  try {
    return Boolean(command('git', ['ls-remote', '--exit-code', '--tags', 'origin', `refs/tags/${tag}`]))
  } catch (error) {
    if (error && typeof error === 'object' && error.status === 2) return false
    throw new Error(`Could not verify remote tag ${tag}.`)
  }
}

async function releaseFiles() {
  const packageJson = JSON.parse(await readFile(path.join(root, 'package.json'), 'utf8'))
  const metadata = JSON.parse(await readFile(path.join(artifactsPath, 'release.json'), 'utf8'))
  const gradle = await readFile(path.join(root, 'android', 'app', 'build.gradle'), 'utf8')
  parseVersion(packageJson.version)
  const names = artifactNames(packageJson.version)
  if (metadata.version !== packageJson.version || metadata.versionCode !== parseVersionCode(gradle) || metadata.tag !== `v${packageJson.version}` || metadata.apk !== names.apk || metadata.checksum !== names.checksum || metadata.publishedAt !== null) throw new Error('Prepared release metadata does not match current version files.')
  const apkPath = path.join(artifactsPath, names.apk)
  const checksumPath = path.join(artifactsPath, names.checksum)
  const notesPath = path.join(artifactsPath, 'release-notes.md')
  await Promise.all([access(apkPath), access(checksumPath), access(notesPath)])
  const sha256 = await verifyArtifactChecksum(apkPath, checksumPath)
  if (metadata.sha256 !== sha256) throw new Error('Prepared release metadata SHA-256 does not match APK.')
  return { metadata, apkPath, checksumPath, notesPath }
}

export async function publishRelease({ dryRun = process.argv.includes('--dry-run') } = {}) {
  if (command('git', ['branch', '--show-current']) !== expectedBranch) throw new Error(`Release publishing must run on ${expectedBranch}.`)
  const { metadata, apkPath, checksumPath, notesPath } = await releaseFiles()
  const changed = command('git', ['diff', '--name-only']).split('\n').filter(Boolean).sort()
  const expected = ['android/app/build.gradle', 'package-lock.json', 'package.json']
  if (JSON.stringify(changed) !== JSON.stringify(expected)) throw new Error('Publish requires only prepared version-file changes.')
  if (command('git', ['tag', '--list', metadata.tag])) throw new Error(`Git tag already exists: ${metadata.tag}`)
  if (dryRun) {
    console.log(JSON.stringify({ mode: 'dry-run', action: 'would commit, tag, push, create GitHub Release, and upload APK/checksum', tag: metadata.tag, apk: metadata.apk }, null, 2))
    return metadata
  }
  command('gh', ['auth', 'status'])
  if (remoteTagExists(metadata.tag)) throw new Error(`Remote tag already exists: ${metadata.tag}`)
  command('git', ['add', 'package.json', 'package-lock.json', 'android/app/build.gradle'])
  command('git', ['commit', '-m', `release: ${metadata.tag}`])
  command('git', ['tag', '-a', metadata.tag, '-m', `FitDex ${metadata.tag}`])
  command('git', ['push', 'origin', expectedBranch])
  command('git', ['push', 'origin', metadata.tag])
  command('gh', ['release', 'create', metadata.tag, apkPath, checksumPath, '--title', `FitDex ${metadata.tag}`, '--notes-file', notesPath])
  command('gh', ['release', 'view', metadata.tag])
  console.log(`Published ${metadata.tag}`)
  return metadata
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  publishRelease().catch((error) => {
    console.error(error instanceof Error ? error.message : error)
    process.exitCode = 1
  })
}
