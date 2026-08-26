import { readdir, rm, stat } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

async function listMp4Files(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name)
    if (entry.isDirectory()) files.push(...await listMp4Files(entryPath))
    else if (entry.isFile() && path.extname(entry.name).toLowerCase() === '.mp4') files.push(entryPath)
  }

  return files
}

export async function prepareAndroidDist({ distDir = path.join(projectRoot, 'dist') } = {}) {
  const exercisesDir = path.join(distDir, 'exercises')
  let files

  try {
    files = await listMp4Files(exercisesDir)
  } catch (error) {
    if (error && typeof error === 'object' && 'code' in error && error.code === 'ENOENT') {
      return { exercisesDir, removedFiles: 0, removedBytes: 0 }
    }
    throw new Error(`Could not inspect Android exercise media at ${exercisesDir}: ${error instanceof Error ? error.message : String(error)}`)
  }

  let removedBytes = 0
  for (const file of files) {
    removedBytes += (await stat(file)).size
    await rm(file)
  }

  return { exercisesDir, removedFiles: files.length, removedBytes }
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`
  const units = ['KB', 'MB', 'GB']
  let value = bytes / 1024
  let unit = 0
  while (value >= 1024 && unit < units.length - 1) {
    value /= 1024
    unit += 1
  }
  return `${value.toFixed(1)} ${units[unit]}`
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const result = await prepareAndroidDist()
    console.log(`Android dist prepared: removed ${result.removedFiles} exercise MP4 files (${formatBytes(result.removedBytes)}) from ${result.exercisesDir}`)
  } catch (error) {
    console.error(error instanceof Error ? error.message : error)
    process.exitCode = 1
  }
}
