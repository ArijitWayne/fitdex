import { EXERCISE_MEDIA_BASE_URL } from './exerciseMediaConfig.ts'

export function canonicalExerciseVideoKey(mediaPath?: string) {
  if (!mediaPath || !mediaPath.startsWith('/exercises/') || !mediaPath.endsWith('.mp4')) return undefined
  const key = mediaPath.slice('/exercises/'.length)
  if (!key || key.includes('/') || key.includes('\\') || key.includes('..') || !/^[a-z0-9-]+\.mp4$/.test(key)) return undefined
  return key
}

export function resolveRemoteExerciseMediaUrl(mediaPath?: string, baseUrl = EXERCISE_MEDIA_BASE_URL) {
  const key = canonicalExerciseVideoKey(mediaPath)
  if (!key || !baseUrl) return undefined
  try {
    const base = new URL(baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`)
    if (base.protocol !== 'https:' && base.protocol !== 'http:') return undefined
    return new URL(encodeURIComponent(key), base).toString()
  } catch { return undefined }
}
