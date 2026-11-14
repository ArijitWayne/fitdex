> Historical investigation. Its earlier APK hash and publication steps are superseded by [final publication readiness](RELEASE_PUBLICATION_2.2.1.md). Use the final notes and APK checksum.

# FitDex release discovery investigation and fix

## Result and limits

Prepared from clean main at `4723b73` after v2.2.0 publication. No Git write, publication or deployment was performed. Published v2.2.0 APK, tag, signing identity, installer, checksum verification and user data remain unchanged. Fixes are local and require the deployment/manual actions below.

Android has a confirmed deterministic CORS defect. FitDexInfo has independent stale-state and fallback defects; a single shared network cause was not established. The exact network/cache state in the reporting user's browser and Android device is unavailable without device inspection. This report distinguishes those limits from directly observed public HTTP/source evidence.

## Android: verified cause

- Exact discovery URL: `https://api.github.com/repos/ArijitWayne/fitdex/releases` (also used for release history).
- Both published local APK bundles (2.1.0 and 2.2.0) contain a script-set `Cache-Control: no-cache` header alongside Accept and fetch `cache: no-store`.
- `CapacitorHttp.enabled` is absent/false in both packaged configurations. Discovery uses WebView fetch, not native HTTP. Native APK transfer is a separate path and is unchanged.
- A real OPTIONS probe with `Origin: https://localhost`, GET and `Access-Control-Request-Headers: cache-control` returns HTTP 204, but GitHub's `Access-Control-Allow-Headers` does **not** include Cache-Control. This is a rejected CORS preflight even though the OPTIONS status is successful. WebView cannot expose the GET response, resulting in generic `Failed to fetch` before HTTP/JSON/release validation.
- The Android manifest already grants INTERNET. The destination is HTTPS. No missing permission or cleartext/TLS configuration change is needed.
- Real unauthenticated GET returned HTTP 200 at 2026-11-14 07:41 UTC, with `Access-Control-Allow-Origin: *`, rate limit 60 / remaining 55. DNS and TLS succeeded from this machine outside the filesystem/network sandbox. Device DNS/TLS failure cannot be ruled out without device logs, but is not needed to explain the deterministic blocked-header failure.
- Old timeout was 7 seconds and stopped before body parsing. Initial errors could be cached for five minutes. No automatic retry existed. New transport keeps the 7-second limit through JSON reading, sends only safelisted Accept, and retains fetch `cache: no-store` without a script-set Cache-Control header. Errors are categorized and are not cached as success.

### Second verified publication blocker

Live v2.2.0 is stable and published at `2026-11-14T07:34:57Z`. Its body contains only a generated Full Changelog link. It has one APK asset and no checksum asset. The APK asset digest is correct, but the existing Android normalizer reads SHA-256 and versionCode from release notes, not that digest. Running the actual Android normalizer against the captured public response returned version 2.2.0, versionCode null, SHA-256 null. Removing CORS alone would not make installation safe: required integrity metadata must also be restored.

The new checker reports malformed/incomplete metadata explicitly. It does not infer a successful update or weaken mandatory SHA-256 validation. The corrected v2.2.0 notes and checksum can be added to the existing release without replacing its APK or retagging it.

## FitDexInfo: independent findings

- Uses the same public GitHub releases URL, but previously sent X-GitHub-Api-Version rather than Cache-Control. A separate real OPTIONS probe confirms GitHub allows that header. Android's exact CORS defect therefore does not apply to FitDexInfo.
- Production at `https://fitdexinfo.vercel.app/` returned HTTP 200. It serves `assets/index-Cfb88GYc.js`. Its SHA-256 `23cfabc8464d74a8d5001dd1917a64ab9435cf7fc9fe87bf67eb8f4bcce1fca4` exactly matches the local pre-fix website build. There is no evidence of an obsolete deployed source bundle.
- Production Last-Modified was `2026-11-14T07:32:29Z`, before v2.2.0 publication at 07:34:57Z. The bundled emergency fallback was therefore still v2.1.0.
- Normalization can already select published v2.2.0: it reads build 10 from the known tag map and SHA-256 from the asset digest, unlike Android. Missing notes do not force the website to choose 2.1.0.
- Confirmed stale-state paths: the hook only fetched on mount/manual reload; a page opened before publication could retain 2.1.0 indefinitely. Its five-minute cache TTL did not schedule a mounted-page refresh. On failed refresh, the fetch layer silently returned even expired memory cache as success, concealing failure. On an initial network failure, the page displayed its v2.1.0 fallback.
- Without the user's session, we cannot identify which of those stale paths produced the reported screenshot. A fresh uncached successful API request should already select 2.2.0 in the deployed old build. No evidence supports a normalization failure, current public rate limit, or incorrect Vercel source revision.

Corrections: update fallback to the real published 2.2.0 URL/hash/date/build; stop converting failed refreshes into success; display categorized errors while retaining previous visible data; refresh on restored connectivity and tab visibility (subject to existing TTL). Manual reload bypasses cache. There is no render-driven retry, automatic retry loop or new polling interval. No new release service, native HTTP bridge, credential or dependency is introduced.

## Files changed

- `android/app/build.gradle`
- `package-lock.json`
- `package.json`
- `src/appVersion.ts`
- `src/features/updater/testUpdater.ts`
- `src/features/updater/updaterService.ts`
- `src/testAndroidReleaseSigning.ts`
- `src/testCapacitorAndroid.ts`
- `website/scripts/testReleaseSystem.mjs`
- `website/src/main.tsx`
- `website/src/releases/api.ts`
- `scripts/testReleaseDiscovery.mjs`
- `src/features/updater/releaseRequest.ts`
- `website/src/releases/releaseRequest.ts`
- `docs/RELEASE_DISCOVERY_FIX_2.2.1.md`

The request helper is kept within each independently built frontend. Existing updater tests now assert the no-store contract at the helper. New focused tests exercise both implementations. Version metadata moves only the unpublished app source to 2.2.1/11. Website fallback intentionally remains at the actually published 2.2.0, not the unpublished patch.

## Validation

Passed:

- `npm run lint`
- `npm run test:release-discovery`: actual request helpers; safelisted request shape; one request on success; network, 403, 404, 429, 500, invalid JSON/list/entry and real timeout; recovery; website cache bypass/error propagation; actual app and website normalization.
- `npm run test:updater`, `npm run test:release-system`, `npm run test:capacitor-android`, `npm run test:android-release`.
- `npm --prefix website run test:release`, `npm --prefix website run test:hero`, `npm --prefix website run build`.
- `npm run android:release`: existing TypeScript build, Vite production build, Capacitor sync and signed clean release build. Rebuilt after preserving the history modal's existing failure fallback. Existing bundle-size, mixed-import and Gradle deprecation warnings remain.
- `git diff --check`.
- `graphify update .`: ignored local graph refreshed; Gradle parser limitations remain.
- APK `apksigner verify --verbose --print-certs` passes; `aapt dump badging` confirms `com.fitdex.app`, 2.2.1, code 11.

New unpublished APK: `release-artifacts/fitdex.2.2.1.apk` (64103229 bytes).
SHA-256: `9f5ce1ecfb54557bb63d766ad4285bf488691543a4b0f06bdcbd3695cb457fbf`.
Signer certificate SHA-256: `09a4fc77fb3530ddf8da1cfc8d1b9dd995925fd66c106546099d817cce0b6322`, matching the existing releases.
Published v2.2.0 local APK still hashes to `aa1c29e840e4d74b67ea2cab91bc0e03447ff12e2bdf58da710d4bad4fb0f1f7`, matching GitHub's asset digest.

Tests use Node/Vite SSR and HTTP probes, not browser automation. No physical-device success is claimed. UI event wiring is source-reviewed; actual tab/online behavior and visual error states remain manual checks.

## Required release/deployment actions (not executed)

1. Repair published v2.2.0 **notes and missing checksum asset only**, after reviewing these public files. Do not replace its APK or tag:

```sh
cd /Users/arijitbhaduri/Developer/fitdex
(cd release-artifacts && shasum -a 256 -c fitdex.2.2.0.apk.sha256)
gh release edit v2.2.0 --repo ArijitWayne/fitdex \
  --notes-file release-artifacts/release-notes-v2.2.0-corrected.md
gh release upload v2.2.0 --repo ArijitWayne/fitdex \
  release-artifacts/fitdex.2.2.0.apk.sha256
```

No `--clobber` is used. Stop if remote assets changed or the hash differs. These commands change release metadata/assets and require the user's separate publication action; they were not run.

2. Review and deploy the website changes through the existing FitDexInfo Vercel project. The updated production bundle must contain fallback 2.2.0, build 10 and the real publication timestamp. Test fresh load, manual reload, network failure, return to the tab and restored connectivity. Existing Android/iOS walkthroughs and download behavior are untouched.
3. Review/test the signed patch and publish a **new** stable v2.2.1/code 11 release through the existing manual Git/GitHub process. Use `release-artifacts/release-notes-v2.2.1.md` and canonical `fitdex.2.2.1.apk` / `.sha256` assets. Do not use the old publication wrapper with stale v2.2.0 preparation metadata. `discovery-fix-v2.2.1.json` records this unpublished patch separately.
4. Existing installed v2.1.0 and v2.2.0 cannot receive a bundled-header fix from the server. They need one manual installation of the fixed signed APK over the existing app. Restoring release notes helps integrity metadata but cannot remove their blocked request header. Making unmodified v2.1.0 automatically discover through this broken transport is impossible under the no-retag/no-updater-server-rewrite restrictions. Do not uninstall or clear storage.

## Physical-device checks still outstanding

- Upgrade v2.1.0 and v2.2.0 in place to 2.2.1, confirming retained local records/preferences.
- Inspect WebView/network logs if requests still fail: device DNS, TLS, VPN/filtering and actual origin can introduce additional failures.
- After repairing release notes, verify valid discovery against public data; check offline/retry/error messages and release history fallback.
- Verify download SHA-256/size checks, stale-file cleanup, install permission and FileProvider handoff on a future newer test/release. Their implementations are unchanged; current fixed 2.2.1 correctly treats a valid published 2.2.0 as older.
- Verify FitDexInfo production after deployment; no browser automated or physical-device checks were performed.
