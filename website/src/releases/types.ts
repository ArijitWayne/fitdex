export type ReleaseNotes = {
  new?: string[]
  improved?: string[]
  fixed?: string[]
  other?: string[]
}

export type FitDexRelease = {
  version: string
  versionCode?: number
  tag: string
  publishedAt: string
  apkDownloadUrl?: string
  apkFileName?: string
  apkSize?: number
  sha256?: string
  githubReleaseUrl: string
  releaseNotes: ReleaseNotes
}

export type ReleaseFetchStatus = 'idle' | 'loading' | 'success' | 'error'

export type ReleaseState = {
  status: ReleaseFetchStatus
  releases: FitDexRelease[]
  latest: FitDexRelease | null
  error?: string
}
