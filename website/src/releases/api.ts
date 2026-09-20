import { useEffect, useState, useCallback } from 'react'
import { normalizeGitHubReleases } from './normalize'
import type { FitDexRelease, ReleaseState } from './types'

const GITHUB_RELEASES_URL = 'https://api.github.com/repos/ArijitWayne/fitdex/releases'
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

  try {
    const response = await fetch(GITHUB_RELEASES_URL, {
      headers: {
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
      },
    })

    if (response.status === 403 || response.status === 429) {
      throw new Error('Release service rate limit reached. Please retry in a few moments.')
    }

    if (!response.ok) {
      throw new Error(`Failed to load releases (status ${response.status}).`)
    }

    const json = await response.json()
    const releases = normalizeGitHubReleases(json)
    setStoredCache(releases)
    return releases
  } catch (err) {
    // If request failed, check if we have any cached data (even stale)
    if (inMemoryCache?.releases) {
      return inMemoryCache.releases
    }
    throw err instanceof Error ? err : new Error('Unable to connect to release service.')
  }
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
    fetchFitDexReleases(false)
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

    return () => {
      active = false
    }
  }, [])

  const reload = useCallback(() => load(true), [load])

  return { ...state, reload }
}
