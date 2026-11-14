/** Public GitHub discovery only. APK download and verification use their existing path. */
export const RELEASES_URL = 'https://api.github.com/repos/ArijitWayne/fitdex/releases'

export async function requestReleaseData(fetcher: typeof fetch = fetch): Promise<unknown[]> {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), 7000)
  try {
    let response: Response
    try {
      response = await fetcher(RELEASES_URL, {
        // Keep headers CORS-safelisted. GitHub rejects a script-set Cache-Control header.
        headers: { Accept: 'application/vnd.github+json' },
        cache: 'no-store',
        signal: controller.signal,
      })
    } catch {
      if (controller.signal.aborted) throw new Error('Release request timed out. Retry when connected.')
      throw new Error('Release network failure. Check connectivity, DNS, TLS or browser network restrictions, then retry.')
    }
    if (!response.ok) {
      if (response.status === 429 || (response.status === 403 && (response.headers.get('x-ratelimit-remaining') === '0' || response.headers.has('retry-after')))) {
        throw new Error(`Release API rate limited (HTTP ${response.status}). Retry later${response.headers.get('retry-after') ? `; Retry-After: ${response.headers.get('retry-after')}` : ''}.`)
      }
      throw new Error(`Release API HTTP failure (${response.status}). Retry later.`)
    }
    let data: unknown
    try { data = await response.json() } catch {
      if (controller.signal.aborted) throw new Error('Release request timed out while reading metadata. Retry.')
      throw new Error('Malformed release metadata: response is not valid JSON.')
    }
    if (!Array.isArray(data)) throw new Error('Malformed release metadata: expected a release list.')
    if (data.some(item => !item || typeof item !== 'object' || typeof item.tag_name !== 'string')) {
      throw new Error('Malformed release metadata: invalid release entry.')
    }
    return data
  } finally { clearTimeout(timer) }
}
