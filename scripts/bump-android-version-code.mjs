import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const gradlePath = path.join(projectRoot, 'android', 'app', 'build.gradle')

export function bumpAndroidVersionCode() {
  const content = fs.readFileSync(gradlePath, 'utf8')
  const match = content.match(/versionCode\s+(\d+)/)
  if (!match) {
    throw new Error(`Could not find 'versionCode' in ${gradlePath}`)
  }
  const current = parseInt(match[1], 10)
  const next = current + 1
  const updated = content.replace(/versionCode\s+\d+/, `versionCode ${next}`)
  fs.writeFileSync(gradlePath, updated, 'utf8')
  return { current, next }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const { current, next } = bumpAndroidVersionCode()
    console.log(`Android versionCode incremented: ${current} -> ${next}`)
  } catch (error) {
    console.error(error instanceof Error ? error.message : error)
    process.exitCode = 1
  }
}
