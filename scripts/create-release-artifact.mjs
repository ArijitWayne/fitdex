import { copyFile, mkdir, readFile, stat, writeFile } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
export async function createReleaseArtifact({ root = projectRoot } = {}) {
  const packageJson = JSON.parse(await readFile(path.join(root, 'package.json'), 'utf8'))
  if (!packageJson.version) throw new Error('package.json must contain a version.')
  const apkSource = path.join(root, 'android', 'app', 'build', 'outputs', 'apk', 'release', 'app-release.apk')
  try {
    await stat(apkSource)
  } catch {
    throw new Error(`Signed release APK not found: ${apkSource}. Run npm run android:release after configuring signing credentials.`)
  }
  const outputDirectory = path.join(root, 'release-artifacts')
  const artifactName = `fitdex.${packageJson.version}.apk`
  const artifactPath = path.join(outputDirectory, artifactName)
  const checksumPath = `${artifactPath}.sha256`
  await mkdir(outputDirectory, { recursive: true })
  await copyFile(apkSource, artifactPath)
  const checksum = createHash('sha256').update(await readFile(artifactPath)).digest('hex')
  await writeFile(checksumPath, `${checksum}  ${artifactName}\n`, 'utf8')
  return { artifactName, artifactPath, checksumPath, checksum }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const result = await createReleaseArtifact()
    console.log(`Release artifact: ${result.artifactPath}`)
    console.log(`SHA-256: ${result.checksum}`)
  } catch (error) {
    console.error(error instanceof Error ? error.message : error)
    process.exitCode = 1
  }
}
