import { Capacitor } from '@capacitor/core'
import { Directory, Filesystem } from '@capacitor/filesystem'
import { FileTransfer } from '@capacitor/file-transfer'
import { deviceStorage } from '../../platform/deviceStorage'
import { EXERCISE_MEDIA_DIRECTORY, EXERCISE_MEDIA_METADATA_KEY } from './exerciseMediaConfig.ts'
import { canonicalExerciseVideoKey, resolveRemoteExerciseMediaUrl } from './exerciseMediaResolver.ts'

export interface DownloadedExerciseMedia { exerciseId: string; videoKey: string; localPath: string; downloadedAt: string; sizeBytes: number; mediaVersion?: string }
export interface MediaPlayback { source?: string; kind: 'local' | 'remote' | 'unavailable' }
export interface DownloadProgress { bytes: number; totalBytes?: number }

const isNativeMediaAvailable = () => Capacitor.isNativePlatform()
const filePathFor = (videoKey: string) => `${EXERCISE_MEDIA_DIRECTORY}/${videoKey}`

function readMetadata(): DownloadedExerciseMedia[] {
  try {
    const value: unknown = JSON.parse(deviceStorage.get(EXERCISE_MEDIA_METADATA_KEY) || '[]')
    return Array.isArray(value) ? value.filter((item): item is DownloadedExerciseMedia => !!item && typeof item === 'object' && typeof item.exerciseId === 'string' && typeof item.videoKey === 'string' && typeof item.localPath === 'string' && typeof item.downloadedAt === 'string' && typeof item.sizeBytes === 'number') : []
  } catch { return [] }
}
function writeMetadata(records: DownloadedExerciseMedia[]) { deviceStorage.set(EXERCISE_MEDIA_METADATA_KEY, JSON.stringify(records)) }
function removeRecord(exerciseId: string) { writeMetadata(readMetadata().filter((record) => record.exerciseId !== exerciseId)) }

async function localPlayback(record: DownloadedExerciseMedia) {
  try {
    const [info, uri] = await Promise.all([
      Filesystem.stat({ path: record.localPath, directory: Directory.Data }),
      Filesystem.getUri({ path: record.localPath, directory: Directory.Data }),
    ])
    if (!info.size) throw new Error('Downloaded media is empty')
    return Capacitor.convertFileSrc(uri.uri)
  } catch {
    removeRecord(record.exerciseId)
    return undefined
  }
}

export async function getExerciseMediaPlayback(exerciseId: string, mediaPath?: string): Promise<MediaPlayback> {
  if (isNativeMediaAvailable()) {
    const record = readMetadata().find((item) => item.exerciseId === exerciseId)
    if (record) {
      const source = await localPlayback(record)
      if (source) return { source, kind: 'local' }
    }
    if (navigator.onLine) {
      const source = resolveRemoteExerciseMediaUrl(mediaPath)
      if (source) return { source, kind: 'remote' }
    }
    return { kind: 'unavailable' }
  }
  return mediaPath ? { source: mediaPath, kind: 'local' } : { kind: 'unavailable' }
}

export async function listDownloadedExerciseMedia() {
  if (!isNativeMediaAvailable()) return [] as DownloadedExerciseMedia[]
  const valid: DownloadedExerciseMedia[] = []
  for (const record of readMetadata()) if (await localPlayback(record)) valid.push(record)
  if (valid.length !== readMetadata().length) writeMetadata(valid)
  return valid.sort((a, b) => b.downloadedAt.localeCompare(a.downloadedAt))
}

export async function downloadExerciseMedia(exerciseId: string, mediaPath: string, onProgress?: (progress: DownloadProgress) => void) {
  if (!isNativeMediaAvailable()) throw new Error('Offline exercise downloads are available in the FitDex app.')
  const videoKey = canonicalExerciseVideoKey(mediaPath)
  const remoteUrl = resolveRemoteExerciseMediaUrl(mediaPath)
  if (!videoKey || !remoteUrl) throw new Error('Exercise demonstration is not configured for download.')
  const localPath = filePathFor(videoKey)
  await Filesystem.mkdir({ path: EXERCISE_MEDIA_DIRECTORY, directory: Directory.Data, recursive: true })
  const destination = await Filesystem.getUri({ path: localPath, directory: Directory.Data })
  const listener = await FileTransfer.addListener('progress', (progress) => {
    if (progress.type === 'download' && progress.url === remoteUrl) onProgress?.({ bytes: progress.bytes, totalBytes: progress.lengthComputable ? progress.contentLength : undefined })
  })
  try {
    await FileTransfer.downloadFile({ url: remoteUrl, path: destination.uri, progress: true })
    const info = await Filesystem.stat({ path: localPath, directory: Directory.Data })
    if (!info.size) throw new Error('Downloaded media is empty.')
    const record: DownloadedExerciseMedia = { exerciseId, videoKey, localPath, downloadedAt: new Date().toISOString(), sizeBytes: info.size }
    writeMetadata([...readMetadata().filter((item) => item.exerciseId !== exerciseId), record])
    return record
  } catch (error) {
    await Filesystem.deleteFile({ path: localPath, directory: Directory.Data }).catch(() => undefined)
    throw error
  } finally { await listener.remove() }
}

export async function removeDownloadedExerciseMedia(exerciseId: string) {
  const record = readMetadata().find((item) => item.exerciseId === exerciseId)
  if (record && isNativeMediaAvailable()) await Filesystem.deleteFile({ path: record.localPath, directory: Directory.Data }).catch(() => undefined)
  removeRecord(exerciseId)
}

export async function removeAllDownloadedExerciseMedia() {
  const records = readMetadata()
  let failures = 0
  for (const record of records) {
    try { if (isNativeMediaAvailable()) await Filesystem.deleteFile({ path: record.localPath, directory: Directory.Data }) } catch { failures += 1 }
  }
  writeMetadata([])
  return { removed: records.length - failures, failures }
}

export function supportsNativeExerciseMedia() { return isNativeMediaAvailable() }
export function formatMediaBytes(bytes: number) { if (bytes < 1024) return `${bytes} B`; const units = ['KB', 'MB', 'GB']; let value = bytes / 1024; let unit = 0; while (value >= 1024 && unit < units.length - 1) { value /= 1024; unit += 1 }; return `${value.toFixed(value >= 10 || unit === 0 ? 0 : 1)} ${units[unit]}` }
