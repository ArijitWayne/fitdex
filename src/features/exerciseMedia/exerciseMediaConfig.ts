const viteEnv = (import.meta as ImportMeta & { env?: Record<string, string | undefined> }).env
export const EXERCISE_MEDIA_BASE_URL = viteEnv?.VITE_EXERCISE_MEDIA_BASE_URL?.trim() || undefined
export const EXERCISE_MEDIA_DIRECTORY = 'exercise-media'
export const EXERCISE_MEDIA_METADATA_KEY = 'fitdex.exercise-media.downloads.v1'
