import { execFileSync } from 'node:child_process'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { artifactNames, createReleaseMetadata, nextVersion, parseVersion, parseVersionCode, releaseNotesTemplate, verifyArtifactChecksum } from './release-system.mjs'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const packagePath = path.join(root, 'package.json')
const lockPath = path.join(root, 'package-lock.json')
const gradlePath = path.join(root, 'android', 'app', 'build.gradle')
const artifactsPath = path.join(root, 'release-artifacts')
const expectedBranch = process.env.FITDEX_RELEASE_BRANCH || 'dev'

function command(command, args) {
  return execFileSync(command, args, { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim()
}

function usage() {
  return 'Usage: node scripts/prepare-release.mjs <patch|minor|major> [--dry-run] | --first-release [--dry-run]'
}

export function parsePrepareArguments(args) {
  const dryRun = args.includes('--dry-run')
  const firstRelease = args.includes('--first-release')
  const type = args.find((value) => ['patch', 'minor', 'major'].includes(value))
  const known = new Set(['--dry-run', '--first-release', 'patch', 'minor', 'major'])
  if (args.some((value) => !known.has(value)) || (firstRelease && type) || (!firstRelease && !type)) throw new Error(usage())
  return { dryRun, firstRelease, type }
}

export function assertReleaseBranchAndClean({ run = command, branch = expectedBranch, allowDirty = false } = {}) {
  if (run('git', ['branch', '--show-current']) !== branch) throw new Error(`Release preparation must run on ${branch}.`)
  if (!allowDirty && run('git', ['status', '--porcelain'])) throw new Error('Release preparation requires a clean Git working tree.')
}

export async function getReleasePlan({ firstRelease, type }) {
  const packageJson = JSON.parse(await readFile(packagePath, 'utf8'))
  const gradle = await readFile(gradlePath, 'utf8')
  const currentVersion = packageJson.version
  parseVersion(currentVersion)
  const currentVersionCode = parseVersionCode(gradle)
  const version = firstRelease ? currentVersion : nextVersion(currentVersion, type)
  const versionCode = currentVersionCode + 1
  const names = artifactNames(version)
  return { currentVersion, currentVersionCode, version, versionCode, tag: `v${version}`, ...names }
}

async function writePreparedVersions(plan) {
  const packageJson = JSON.parse(await readFile(packagePath, 'utf8'))
  const lockJson = JSON.parse(await readFile(lockPath, 'utf8'))
  packageJson.version = plan.version
  lockJson.version = plan.version
  lockJson.packages[''].version = plan.version
  const gradle = await readFile(gradlePath, 'utf8')
  await writeFile(packagePath, `${JSON.stringify(packageJson, null, 2)}\n`)
  await writeFile(lockPath, `${JSON.stringify(lockJson, null, 2)}\n`)
  await writeFile(gradlePath, gradle.replace(/versionCode\s+\d+/, `versionCode ${plan.versionCode}`))
}

function runValidation() {
  command('npm', ['run', 'lint'])
  command('npm', ['run', 'build'])
  command('npm', ['run', 'test:capacitor-android'])
}

async function writePreparedMetadata(plan) {
  const artifactPath = path.join(artifactsPath, plan.apk)
  const checksumPath = path.join(artifactsPath, plan.checksum)
  const sha256 = await verifyArtifactChecksum(artifactPath, checksumPath)
  const metadata = createReleaseMetadata({ version: plan.version, versionCode: plan.versionCode, sha256 })
  await mkdir(artifactsPath, { recursive: true })
  await writeFile(path.join(artifactsPath, 'release-notes.md'), releaseNotesTemplate(plan.version))
  await writeFile(path.join(artifactsPath, 'release.json'), `${JSON.stringify(metadata, null, 2)}\n`)
}

export async function prepareRelease(args = process.argv.slice(2)) {
  const options = parsePrepareArguments(args)
  assertReleaseBranchAndClean({ allowDirty: options.dryRun && process.env.FITDEX_RELEASE_ALLOW_DIRTY_DRY_RUN === '1' })
  const plan = await getReleasePlan(options)
  if (command('git', ['tag', '--list', plan.tag])) throw new Error(`Git tag already exists: ${plan.tag}`)
  if (options.dryRun) {
    runValidation()
    console.log(JSON.stringify({ mode: 'dry-run', action: 'prepare only; no version files, tags, releases, or uploads changed', ...plan }, null, 2))
    return plan
  }
  await writePreparedVersions(plan)
  runValidation()
  command('npm', ['run', 'android:release'])
  await writePreparedMetadata(plan)
  console.log(JSON.stringify({ mode: 'prepared', action: 'Run npm run release:publish to commit, tag, push, and publish.', ...plan }, null, 2))
  return plan
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  prepareRelease().catch((error) => {
    console.error(error instanceof Error ? error.message : error)
    process.exitCode = 1
  })
}
