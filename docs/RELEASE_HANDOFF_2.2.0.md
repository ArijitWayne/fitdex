# FitDex v2.2.0 release handoff

Prepared from main at 1479f4515ad945439534c40d6063df7c9d0b8b41. The working tree was clean before preparation. No commit, tag, push, merge, GitHub publication, deployment, signing-key generation, or user-data migration was performed.

## Verified artifact

- APK: `release-artifacts/fitdex.2.2.0.apk`
- Bytes: 64102873
- SHA-256: `aa1c29e840e4d74b67ea2cab91bc0e03447ff12e2bdf58da710d4bad4fb0f1f7`
- Checksum: `release-artifacts/fitdex.2.2.0.apk.sha256`
- Package: `com.fitdex.app`
- versionName: `2.2.0`; versionCode: `10` (previously `2.1.0` / `9`).
- `apksigner verify --verbose --print-certs`: verified; one signer; APK Signature Scheme v2; RSA 4096.
- Signer certificate SHA-256: `09a4fc77fb3530ddf8da1cfc8d1b9dd995925fd66c106546099d817cce0b6322`.
- Certificate exactly matches local v2.1.0 APK. That APK SHA-256 matches the published v2.1.0 release: `a7f5feeb17063bc806fb6ae1ec75167df6ed193698efb5d9595d4e04778770e3`.
- `aapt dump badging` confirms package/version; minimum API 24, target API 36.
- Publication metadata: `release-artifacts/release.json` has null publication date/download URL intentionally. No release is claimed to exist.
- Publish notes: `release-artifacts/release-notes.md`; version-specific copy: `release-notes-v2.2.0.md`. Root `RELEASE_NOTES.md` retains earlier releases.

## Scope and source review

Completed UI modernization commit `1479f45` and web/PWA media compatibility commit `10cbb10` are present. Release notes cover application-wide modernization, Weekly Plan, workout completion/history, achievements, dialogs/navigation and media URL compatibility. Their production implementations are unchanged by preparation. Signing configuration, updater architecture, database, workout, nutrition and achievement business logic remain unchanged.

The three documented baseline failures were obsolete source assertions:

- Nutrition UI assertions required exact CSS whitespace and spaces around a child selector. Updated whitespace handling while retaining dimensions and layout requirements.
- Guide assertions expected an old grid and fixed-width child rule. Updated to the accepted centered flex layout and button minimum width.
- Notification assertions expected retired card classes. Updated to current master/category modules and labels, preserving behavior assertions.

Additional focused checks exposed a release-plan test pinned to 2.0.1/7 and navigation test pinned to a retired faction-specific Settings color. Those now check current release metadata and the shared theme token. Android metadata assertions target 2.2.0/10. No functional behavior was changed to satisfy tests.

### UI review (source inspection only)

| Before | After | Why |
| --- | --- | --- |
| FitDexInfo showed build 6 when published metadata lacked a build number | Known builds 9/10 are mapped; unknown build shows an em dash | Avoid presenting incorrect release information |
| Website fallback points to published v2.1.0 | Published fallback retained until v2.2.0 exists; live feed selects newer publication | Keep downloads working during release preparation |

No visual browser or device verification was performed. Existing Android and iOS installation walkthroughs and download flows are unchanged.

## FitDexInfo and updater compatibility

Both consumers use the existing GitHub release feed for `ArijitWayne/fitdex`. Publish a stable, non-draft `v2.2.0` release with canonical APK/checksum assets and the prepared notes. Both parsers read `versionCode: 10` and SHA-256 from those notes. The website also has the v2.2.0 build mapping. Synthetic fixtures passed through the actual app and website parsers verify URL, version, build, hash and rejection of draft/unpublished data. App comparison confirms 2.2.0/10 is newer than 2.1.0/9.

FitDexInfo's live feed selects the newest published stable release. Its five-minute cache can delay display; use its reload action or wait for cache expiration. On API failure, existing cached data or the last published v2.1.0 fallback can remain visible. This is intentional; an unpublished APK must not be advertised. After publication, optionally refresh the fallback in `website/src/main.tsx` from the actual release response, including its real `published_at`, APK size, digest and URL, then rebuild/redeploy the website. Do not invent a publication timestamp. This preparation does not deploy FitDexInfo.

## Validation

Passed commands:

```sh
npm run lint
npm run test:release-system
npm run test:updater
npm run test:notifications
npm run test:nutrition-targets-ui
npm run test:guides
npm run test:workout-ui
npm run test:weekly-plan
npm run test:weekly-plan-inference
npm run test:workout-sessions
npm run test:gamification
npm run test:plan-streak
npm run test:responsive-ui
npm run test:exercise-media
npm run test:capacitor-android
npm run test:android-release
npm run test:android-dist
npm run test:navigation
npm --prefix website run test:release
npm --prefix website run test:hero
npm run android:release
npm --prefix website run build
cd android
./gradlew testReleaseUnitTest lintRelease
```

`android:release` ran the existing root TypeScript build, Vite production build, Android distribution preparation, Capacitor sync, signed clean assembleRelease and canonical artifact creation. Website build ran its TypeScript build and Vite production build. Root TypeScript configuration does not enable strict mode; its existing checks passed. Website enables strict mode. Native test task passed its one example unit test; plugin unit tasks have no source. This is not device integration coverage.

Android lint succeeded with {"Warning": 46}. Review `android/app/build/reports/lint-results-release.html`; existing warnings are not resolved by this scoped release. Build also warns about Gradle 9-incompatible deprecated features, a large JavaScript chunk and mixed static/dynamic notification imports. No dependency upgrades were attempted.

`graphify update .` refreshed ignored local graph output; it reports partial extraction for three Gradle files. No graph files should be published. Focused failing tests were rerun after their corrections. No browser automation ran; responsive/UI checks are source/model checks, not visual proof.

## Outstanding manual release checks

1. Back up a real v2.1.0 installation. Install the signed v2.2.0 APK over it without uninstalling. Confirm retained routines, workout/food history, preferences, achievements and media cache. Also check a fresh install.
2. Check Android startup, back navigation, dialogs, Weekly Plan, workout completion/history and achievement presentation on narrow screens and both themes.
3. Verify native exercise videos and web/PWA videos on real browsers/devices. No automated browser check was performed.
4. After publication, test the existing in-app updater from v2.1.0: discover 2.2.0/10, download, checksum, unknown-source permission, installer handoff, resume and retained data. Fixture compatibility does not prove this end-to-end flow.
5. Verify FitDexInfo live latest/download/changelog and Android/iOS walkthroughs after publication and cache refresh. Confirm GitHub asset hash matches this handoff. Update the static fallback only from actual publication metadata if desired.

## Exact review and publication commands (NOT executed)

Complete manual APK checks first. Review every changed file and stop if unrelated changes appeared. The legacy `release:publish` wrapper assumes dev and exactly three version-file changes; do not use it for this handoff. These commands explicitly publish the reviewed main branch instead.

```sh
cd /Users/arijitbhaduri/Developer/fitdex
git status --short
git diff --check
git diff
(cd release-artifacts && shasum -a 256 -c fitdex.2.2.0.apk.sha256)
# Review remote state before any Git write; reconcile changes if necessary.
git fetch origin
git log --oneline HEAD..origin/main
git ls-remote --tags origin refs/tags/v2.2.0
# Proceed only if main has not diverged and v2.2.0 does not exist.
git add \
  RELEASE_NOTES.md \
  android/app/build.gradle \
  package-lock.json \
  package.json \
  scripts/testReleaseSystem.mjs \
  src/appVersion.ts \
  src/features/help/testGuides.ts \
  src/features/navigation/testSettingsNavigation.ts \
  src/features/notifications/testNotifications.ts \
  src/features/nutritionTargets/testNutritionTargetsUi.ts \
  src/features/updater/testUpdater.ts \
  src/testAndroidReleaseSigning.ts \
  src/testCapacitorAndroid.ts \
  website/scripts/testReleaseSystem.mjs \
  website/src/main.tsx \
  website/src/releases/metadata.ts \
  docs/RELEASE_HANDOFF_2.2.0.md
git diff --cached --check
git diff --cached
git commit -m "release: v2.2.0"
git tag -a v2.2.0 -m "FitDex v2.2.0"
git push origin main
git push origin v2.2.0
gh release create v2.2.0 \
  release-artifacts/fitdex.2.2.0.apk \
  release-artifacts/fitdex.2.2.0.apk.sha256 \
  --repo ArijitWayne/fitdex --verify-tag --latest \
  --title "FitDex v2.2.0" --notes-file release-artifacts/release-notes.md
gh release view v2.2.0 --repo ArijitWayne/fitdex
gh api repos/ArijitWayne/fitdex/releases/tags/v2.2.0 \
  --jq '{tag: .tag_name, published_at: .published_at, assets: [.assets[] | {name, size, digest, browser_download_url}]}'
```

Do not stage APKs, release-artifacts, signing files or credentials. Those remain ignored. If any application code changes after this build, rebuild and repeat artifact verification; update hashes and notes before publication.
