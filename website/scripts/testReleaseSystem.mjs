import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { createServer } from 'vite'

// Spin up lightweight Vite instance to load TypeScript source directly
const viteServer = await createServer({
  root: new URL('..', import.meta.url).pathname,
  server: { middlewareMode: true, hmr: false, ws: false },
  appType: 'custom',
})

const {
  normalizeGitHubReleases,
  findApkAsset,
  extractSha256FromBody,
} = await viteServer.ssrLoadModule('/src/releases/normalize.ts')

const { parseReleaseNotes } = await viteServer.ssrLoadModule('/src/releases/releaseNotes.ts')

await viteServer.close()

// Load production source files for static verification
const mainSource = await readFile(new URL('../src/main.tsx', import.meta.url), 'utf8')
const changelogSource = await readFile(new URL('../src/ChangelogView.tsx', import.meta.url), 'utf8')
const cssSource = await readFile(new URL('../src/styles.css', import.meta.url), 'utf8')

console.log('Running FitDex Phase 6 Release Hub verification suite...')

// 1. Empty release list handling
const emptyResult = normalizeGitHubReleases([])
assert.deepEqual(emptyResult, [], 'Empty array of GitHub releases must normalize to empty array')
const nullResult = normalizeGitHubReleases(null)
assert.deepEqual(nullResult, [], 'Null releases input must normalize to empty array')

// 2. Draft releases ignored
const releasesWithDraft = [
  {
    tag_name: 'v1.0.0',
    draft: true,
    prerelease: false,
    published_at: '2026-10-01T12:00:00Z',
    html_url: 'https://github.com/ArijitWayne/fitdex/releases/tag/v1.0.0',
    body: 'Draft release notes',
  },
  {
    tag_name: 'v0.9.0',
    draft: false,
    prerelease: false,
    published_at: '2026-09-01T12:00:00Z',
    html_url: 'https://github.com/ArijitWayne/fitdex/releases/tag/v0.9.0',
    body: 'Stable release notes',
  },
]
const filteredDrafts = normalizeGitHubReleases(releasesWithDraft)
assert.equal(filteredDrafts.length, 1, 'Draft releases must be completely ignored')
assert.equal(filteredDrafts[0].version, '0.9.0', 'Only published non-draft release should remain')

// 3. Prerelease builds filtered from stable archive
const releasesWithPrerelease = [
  {
    tag_name: 'v1.0.0-rc.1',
    draft: false,
    prerelease: true,
    published_at: '2026-09-25T12:00:00Z',
    html_url: 'https://github.com/ArijitWayne/fitdex/releases/tag/v1.0.0-rc.1',
    body: 'RC build notes',
  },
  {
    tag_name: 'v0.9.5',
    draft: false,
    prerelease: false,
    published_at: '2026-09-15T12:00:00Z',
    html_url: 'https://github.com/ArijitWayne/fitdex/releases/tag/v0.9.5',
    body: 'Stable release notes',
  },
]
const filteredPrereleases = normalizeGitHubReleases(releasesWithPrerelease)
assert.equal(filteredPrereleases.length, 1, 'Prereleases must be filtered for stable stream')
assert.equal(filteredPrereleases[0].version, '0.9.5')

// 4. Newest stable release selected & 5. Reverse chronological ordering
const mockReleases = [
  {
    tag_name: 'v1.0.0',
    draft: false,
    prerelease: false,
    published_at: '2026-09-10T10:00:00Z',
    html_url: 'https://github.com/ArijitWayne/fitdex/releases/tag/v1.0.0',
    body: 'v1.0.0 notes',
  },
  {
    tag_name: 'v1.1.0',
    draft: false,
    prerelease: false,
    published_at: '2026-09-20T10:00:00Z',
    html_url: 'https://github.com/ArijitWayne/fitdex/releases/tag/v1.1.0',
    body: 'v1.1.0 notes',
  },
  {
    tag_name: 'v1.0.1',
    draft: false,
    prerelease: false,
    published_at: '2026-09-15T10:00:00Z',
    html_url: 'https://github.com/ArijitWayne/fitdex/releases/tag/v1.0.1',
    body: 'v1.0.1 notes',
  },
]
const ordered = normalizeGitHubReleases(mockReleases)
assert.equal(ordered.length, 3)
assert.equal(ordered[0].version, '1.1.0', 'Newest release must be first')
assert.equal(ordered[1].version, '1.0.1', 'Second newest release must be second')
assert.equal(ordered[2].version, '1.0.0', 'Oldest release must be last')

// 6. APK asset detection
const assets = [
  { name: 'other-file.zip', size: 1000, browser_download_url: 'https://github.com/download/other.zip' },
  { name: 'fitdex.1.0.0.apk', size: 19293798, browser_download_url: 'https://github.com/download/fitdex.1.0.0.apk' },
  { name: 'fitdex.1.0.0.apk.sha256', size: 64, browser_download_url: 'https://github.com/download/checksum' },
]
const apkAsset = findApkAsset(assets, '1.0.0')
assert.ok(apkAsset, 'APK asset must be detected')
assert.equal(apkAsset.name, 'fitdex.1.0.0.apk')
assert.equal(apkAsset.browser_download_url, 'https://github.com/download/fitdex.1.0.0.apk')
assert.equal(apkAsset.size, 19293798)

// 7. Checksum detection from body
const bodyWithChecksum = `
# FitDex v1.0.0

SHA-256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
`
const extractedSha = extractSha256FromBody(bodyWithChecksum)
assert.equal(extractedSha, 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855')

// 8. Release notes category parsing (NEW, IMPROVED, FIXED)
const sampleNotes = `
# FitDex v1.0.0

## What's New
- Added 804 exercises to Exercise Codex
- Added tactical active workout rest timers

## Improvements
- Improved database indexing for exercise search
- Smoother transitions between workout sets

## Fixes
- Fixed plate calculator rounding for barbell exercises

## Notes
- First public release build.
`
const parsedNotes = parseReleaseNotes(sampleNotes)
assert.equal(parsedNotes.new?.length, 2, 'Should parse 2 What New items')
assert.equal(parsedNotes.improved?.length, 2, 'Should parse 2 Improvements')
assert.equal(parsedNotes.fixed?.length, 1, 'Should parse 1 Fix')
assert.equal(parsedNotes.other?.length, 1, 'Should parse 1 Note')
assert.equal(parsedNotes.new[0], 'Added 804 exercises to Exercise Codex')

// 9. Fallback 'other' notes when headings not recognized
const rawNotes = `This is a raw unstructured changelog.\nSecond line of changes.`
const parsedRaw = parseReleaseNotes(rawNotes)
assert.ok(parsedRaw.other && parsedRaw.other.length === 2, 'Uncategorized content must safely collect in other')

// 10. Malformed API response
const malformedInput = { error: 'Not found', message: 'Something went wrong' }
const malformedResult = normalizeGitHubReleases(malformedInput)
assert.deepEqual(malformedResult, [], 'Malformed API response must return empty array without crashing')

// 11. Missing APK behavior
const releaseNoApk = [
  {
    tag_name: 'v1.0.0',
    draft: false,
    prerelease: false,
    published_at: '2026-10-01T12:00:00Z',
    html_url: 'https://github.com/ArijitWayne/fitdex/releases/tag/v1.0.0',
    body: 'No APK attached',
    assets: [],
  },
]
const normNoApk = normalizeGitHubReleases(releaseNoApk)[0]
assert.equal(normNoApk.apkDownloadUrl, undefined, 'Missing APK asset must leave apkDownloadUrl undefined')

// 12. Missing checksum behavior
assert.equal(normNoApk.sha256, undefined, 'Missing checksum must not be fabricated')

// 13. Pre-release landing state present in main.tsx
assert.match(mainSource, /PUBLIC RELEASE COMING SOON/, 'Pre-release landing notice must exist in main.tsx')
assert.match(mainSource, /FitDex v1\.0\.0 is being prepared for its first public release/, 'Pre-release explanation must exist')

// 14. /changelog empty state in ChangelogView.tsx
assert.match(changelogSource, /NO PUBLIC RELEASES YET\./, 'Empty archive title must exist in ChangelogView.tsx')
assert.match(changelogSource, /RETURN HOME/, 'Return home action must exist in ChangelogView.tsx')

// 15. Zero demo/mock data in production files
assert.doesNotMatch(mainSource, /DEMO RELEASE DATA/, 'main.tsx must not contain DEMO RELEASE DATA')
assert.doesNotMatch(changelogSource, /DEMO RELEASE DATA/, 'ChangelogView.tsx must not contain DEMO RELEASE DATA')
assert.doesNotMatch(mainSource, /data-demo-apk/, 'main.tsx must not contain demo attributes')
assert.doesNotMatch(changelogSource, /data-demo-apk/, 'ChangelogView.tsx must not contain demo attributes')

// 16. Route presence & #latest assignment
assert.match(mainSource, /pathname === '\/changelog'/, 'Route for /changelog must be handled')
assert.match(changelogSource, /id=\{isLatest \? 'latest' : `tag-\$\{rel\.tag\}`\}/, 'Newest release must receive id="latest"')
assert.match(changelogSource, /DOWNLOAD APK/, 'Primary download button label must be DOWNLOAD APK')
assert.match(cssSource, /\.archive-stream \{ display:flex; flex-direction:column;/, 'Single-column stream must be enforced')

// 17. Hero content parity with approved prototype
assert.match(mainSource, /VIEW CHANGELOG/, 'Hero must contain VIEW CHANGELOG action')
assert.match(mainSource, /href="\/changelog"/, 'VIEW CHANGELOG must route to /changelog')
assert.doesNotMatch(mainSource, /<dd>Achievements<\/dd>/, 'Hero must no longer use Achievements metric')
assert.doesNotMatch(mainSource, /<dd>Named ranks<\/dd>/, 'Hero must no longer use Named ranks metric')
assert.match(mainSource, /<dt>804<\/dt><dd>EXERCISES<\/dd>/, 'Hero must contain 804 EXERCISES')
assert.match(mainSource, /<dt>LOCAL<\/dt><dd>FIRST STORAGE<\/dd>/, 'Hero must contain LOCAL FIRST STORAGE')
assert.match(mainSource, /<dt>\$0<\/dt><dd>FOREVER FREE<\/dd>/, 'Hero must contain $0 FOREVER FREE')
assert.doesNotMatch(mainSource, /LATEST RELEASE<\/a>/, 'Pre-release hero must not claim LATEST RELEASE as action')

// 18. Standalone screenshots section removed while contextual screenshots remain
assert.doesNotMatch(mainSource, /id="screenshots"/, 'Standalone screenshots section id="screenshots" must be absent')
assert.doesNotMatch(mainSource, /\['SCREENSHOTS',\s*'#screenshots'\]/, 'SCREENSHOTS nav link must be absent')
assert.doesNotMatch(mainSource, /<Gallery\s*\/>/, 'Gallery component invocation must be absent')
assert.doesNotMatch(mainSource, /function Gallery\(\)/, 'Gallery function definition must be absent')
assert.doesNotMatch(cssSource, /\.gallery\s*\{/, 'Standalone .gallery CSS selector must be absent')

assert.match(mainSource, /\/screenshots\/workout-hub\.png/, 'Workout hub contextual screenshot must remain')
assert.match(mainSource, /\/screenshots\/active-workout\.png/, 'Active workout contextual screenshot must remain')
assert.match(mainSource, /\/screenshots\/exercise-dex\.png/, 'Exercise dex contextual screenshot must remain')
assert.match(mainSource, /\/screenshots\/food\.png/, 'Food contextual screenshot must remain')
assert.match(mainSource, /\/screenshots\/progress-records\.png/, 'Progress contextual screenshot must remain')
assert.match(mainSource, /\/screenshots\/achievements\.png/, 'Achievements contextual screenshot must remain')

assert.match(mainSource, /id:\s*'home'[^}]*src:\s*'\/screenshots\/home\.png'/, 'Hero home screenshot asset must remain')
assert.match(mainSource, /id:\s*'workout'[^}]*src:\s*'\/screenshots\/active-workout\.png'/, 'Hero workout screenshot asset must remain')
assert.match(mainSource, /id:\s*'progress'[^}]*src:\s*'\/screenshots\/progress-records\.png'/, 'Hero progress screenshot asset must remain')

console.log('✓ All 18 FitDex Phase 6 release system, hero parity, and screenshot gallery cleanup invariants successfully verified.')
