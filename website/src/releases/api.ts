import { requestReleaseData } from './releaseRequest'
import { useEffect, useState, useCallback } from 'react'
import { normalizeGitHubReleases } from './normalize'
import type { FitDexRelease, ReleaseState } from './types'

const CACHE_KEY = 'fitdex_release_cache_v1'
const CACHE_TTL_MS = 5 * 60 * 1000 // 5 minutes

type CachedData = {
  timestamp: number
  releases: FitDexRelease[]
}

let inMemoryCache: CachedData | null = null

function getStoredCache(): CachedData | null {
  if (inMemoryCache && Date.now() - inMemoryCache.timestamp < CACHE_TTL_MS) {
    return inMemoryCache
  }

  try {
    const raw = typeof window !== 'undefined' ? window.sessionStorage.getItem(CACHE_KEY) : null
    if (raw) {
      const parsed: CachedData = JSON.parse(raw)
      if (Date.now() - parsed.timestamp < CACHE_TTL_MS) {
        inMemoryCache = parsed
        return parsed
      }
    }
  } catch {
    // Ignore storage parse errors
  }

  return null
}

function setStoredCache(releases: FitDexRelease[]): void {
  const data: CachedData = {
    timestamp: Date.now(),
    releases,
  }
  inMemoryCache = data
  try {
    if (typeof window !== 'undefined') {
      window.sessionStorage.setItem(CACHE_KEY, JSON.stringify(data))
    }
  } catch {
    // Ignore quota or private browsing errors
  }
}

export async function fetchFitDexReleases(bypassCache = false): Promise<FitDexRelease[]> {
  if (!bypassCache) {
    const cached = getStoredCache()
    if (cached) {
      return cached.releases
    }
  }

  const json = await requestReleaseData()
  const releases = normalizeGitHubReleases(json)
  if (json.length && !releases.length && json.some(item => { const release = item as Record<string, unknown>; return !release.draft && !release.prerelease && release.published_at })) {
    throw new Error('Malformed release metadata: no valid published release could be read.')
  }
  setStoredCache(releases)
  return releases
}

export function useReleases(): ReleaseState & { reload: () => Promise<void> } {
  const [state, setState] = useState<ReleaseState>({
    status: 'loading',
    releases: [],
    latest: null,
  })

  const load = useCallback(async (bypass = false) => {
    setState((prev) => ({ ...prev, status: 'loading', error: undefined }))
    try {
      const releases = await fetchFitDexReleases(bypass)
      const latest = releases.length > 0 ? releases[0] : null
      setState({
        status: 'success',
        releases,
        latest,
      })
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Release information could not be retrieved right now.'
      setState((prev) => ({
        status: 'error',
        releases: prev.releases,
        latest: prev.latest,
        error: message,
      }))
    }
  }, [])

  useEffect(() => {
    let active = true
    const refresh = (bypass = false) => { void fetchFitDexReleases(bypass)
      .then((releases) => {
        if (!active) return
        const latest = releases.length > 0 ? releases[0] : null
        setState({
          status: 'success',
          releases,
          latest,
        })
      })
      .catch((err) => {
        if (!active) return
        const message = err instanceof Error ? err.message : 'Release information could not be retrieved right now.'
        setState((prev) => ({
          status: 'error',
          releases: prev.releases,
          latest: prev.latest,
          error: message,
        }))
      })

    }
    refresh()
    const onOnline = () => refresh(true)
    const onVisible = () => { if (document.visibilityState === 'visible') refresh() }
    window.addEventListener('online', onOnline)
    document.addEventListener('visibilitychange', onVisible)

    return () => {
      active = false
      window.removeEventListener('online', onOnline)
      document.removeEventListener('visibilitychange', onVisible)
    }
  }, [])

  const reload = useCallback(() => load(true), [load])

  return { ...state, reload }
}
