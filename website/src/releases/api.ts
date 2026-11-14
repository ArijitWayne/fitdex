import { getReleaseStatus, isInstallableRelease } from '../../../shared/releasePolicy'
import { requestReleaseData } from './releaseRequest'
import { useEffect, useState, useCallback } from 'react'
import { normalizeGitHubReleases } from './normalize'
import type { FitDexRelease, ReleaseState } from './types'

// Approval is revalidated over the network; stored snapshots cannot promote a withdrawn release.
export async function fetchFitDexReleases(_bypassCache = false): Promise<FitDexRelease[]> {
  const json = await requestReleaseData()
  const releases = normalizeGitHubReleases(json)
  if (json.length && !releases.length && json.some(item => { const release = item as Record<string, unknown>; return getReleaseStatus(release.body as string) === 'successful' && !release.draft && !release.prerelease && release.published_at })) {
    throw new Error('Malformed release metadata: no valid published release could be read.')
  }
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
      const latest = releases.find(isInstallableRelease) ?? null
      setState({
        status: 'success',
        releases,
        latest,
      })
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Release information could not be retrieved right now.'
      setState(() => ({
        status: 'error',
        releases: [],
        latest: null,
        error: message,
      }))
    }
  }, [])

  useEffect(() => {
    let active = true
    const refresh = (bypass = false) => { void fetchFitDexReleases(bypass)
      .then((releases) => {
        if (!active) return
        const latest = releases.find(isInstallableRelease) ?? null
        setState({
          status: 'success',
          releases,
          latest,
        })
      })
      .catch((err) => {
        if (!active) return
        const message = err instanceof Error ? err.message : 'Release information could not be retrieved right now.'
        setState(() => ({
          status: 'error',
          releases: [],
          latest: null,
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
