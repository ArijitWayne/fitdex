import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { createServer } from 'vite'
const server = await createServer({ server: { middlewareMode: true, hmr: false, ws: false }, appType: 'custom' })
const originalFetch = globalThis.fetch
try {
  const app = await server.ssrLoadModule('/src/features/updater/releaseRequest.ts')
  const web = await server.ssrLoadModule('/website/src/releases/releaseRequest.ts')
  const api = await server.ssrLoadModule('/website/src/releases/api.ts')
  const appModel = await server.ssrLoadModule('/src/features/updater/updaterModel.ts')
  const webModel = await server.ssrLoadModule('/website/src/releases/normalize.ts')
  const hash = 'a'.repeat(64)
  const candidate = { tag_name: 'v2.2.0', draft: false, prerelease: false, published_at: '2026-11-14T07:34:57Z', body: `FitDex-Release-Status: successful\nversionCode: 10\nSHA-256: ${hash}`, assets: [{ name: 'fitdex.2.2.0.apk', size: 64102873, browser_download_url: 'https://github.com/ArijitWayne/fitdex/releases/download/v2.2.0/fitdex.2.2.0.apk' }] }
  for (const client of [app, web]) {
    let calls = 0
    await client.requestReleaseData(async (url, options) => {
      calls++
      assert.equal(url, 'https://api.github.com/repos/ArijitWayne/fitdex/releases')
      assert.deepEqual(Object.keys(options.headers), ['Accept'])
      assert.equal(options.cache, 'no-store')
      return Response.json([candidate])
    })
    assert.equal(calls, 1, 'Success must not trigger retries')
    await assert.rejects(client.requestReleaseData(async () => { throw new TypeError('Failed to fetch') }), /network failure/)
    for (const status of [404, 500, 403]) await assert.rejects(client.requestReleaseData(async () => new Response('', { status })), /HTTP failure/)
    for (const status of [403, 429]) await assert.rejects(client.requestReleaseData(async () => new Response('', { status, headers: { 'x-ratelimit-remaining': '0' } })), /rate limited/)
    await assert.rejects(client.requestReleaseData(async () => new Response('bad json')), /not valid JSON/)
    await assert.rejects(client.requestReleaseData(async () => Response.json({ message: 'bad' })), /expected a release list/)
    await assert.rejects(client.requestReleaseData(async () => Response.json([null])), /invalid release entry/)
    assert.deepEqual(await client.requestReleaseData(async () => Response.json([])), [], 'A previous failure must not prevent recovery')
  }
  // Real timeout path, without a browser or timers mocked around React.
  await assert.rejects(app.requestReleaseData((_url, options) => new Promise((_resolve, reject) => options.signal.addEventListener('abort', () => reject(new Error('aborted'))))), /timed out/)
  for (const model of [appModel, webModel]) {
    const selected = model.normalizeGitHubReleases([candidate])[0]
    assert.equal(selected.version, '2.2.0')
    assert.equal(selected.versionCode, 10)
    assert.equal(selected.sha256, hash)
  }
  const policy = await server.ssrLoadModule('/shared/releasePolicy.ts')
  for (const model of [appModel, webModel]) {
    for (const status of ['failed', 'superseded', 'unapproved']) {
      const rejected = { ...candidate, body: candidate.body.replace('successful', status) }
      assert.equal(model.normalizeGitHubReleases([rejected]).length, 0)
    }
    assert.equal(model.normalizeGitHubReleases([{ ...candidate, body: candidate.body.replace('FitDex-Release-Status: successful\n', '') }]).length, 0)
    assert.equal(model.normalizeGitHubReleases([{ ...candidate, body: candidate.body + '\nFitDex-Release-Status: failed' }]).length, 0)
    const invalid = { ...candidate, tag_name: 'v9.0.0', body: 'FitDex-Release-Status: successful', assets: [], published_at: '2027-01-01T00:00:00Z' }
    const releases = model.normalizeGitHubReleases([invalid, candidate])
    assert.equal(releases.find(policy.isInstallableRelease).version, '2.2.0', 'Skip a newer approved release without required integrity metadata')
    assert.equal(policy.isInstallableRelease({ ...releases.find(policy.isInstallableRelease), apkDownloadUrl: 'https://evil.example/app.apk' }), false)
  }
  // Website cache errors remain observable and recover on explicit retry.
  let calls = 0
  globalThis.fetch = async () => { calls++; return Response.json([candidate]) }
  assert.equal((await api.fetchFitDexReleases(true))[0].version, '2.2.0')
  await api.fetchFitDexReleases(false)
  assert.equal(calls, 2, 'Each discovery must revalidate approval instead of trusting stored status')
  globalThis.fetch = async () => { throw new TypeError('Failed to fetch') }
  await assert.rejects(api.fetchFitDexReleases(true), /network failure/, 'Cached data must not hide a failed refresh')
  globalThis.fetch = async () => Response.json([candidate])
  assert.equal((await api.fetchFitDexReleases(true))[0].version, '2.2.0')
  globalThis.fetch = async () => Response.json([{ ...candidate, body: candidate.body.replace('successful', 'superseded') }])
  assert.deepEqual(await api.fetchFitDexReleases(true), [], 'A revoked release must not remain in fresh cache')
  const service = await readFile('src/features/updater/updaterService.ts', 'utf8')
  assert.doesNotMatch(service, /cachedResult = errorResult/)
  assert.doesNotMatch(service, /Cache-Control/)
  console.log('Release discovery checks passed: safelisted headers, HTTP/rate/network/JSON errors, timeout, recovery, cache bypass and selection.')
} finally {
  globalThis.fetch = originalFetch
  await server.close()
}
