# FitDex v2.2.1 final publication readiness

## Prepared result

Source started clean on main at `0a6183c`. This task adds bundled approval filtering, so the unpublished v2.2.1 APK was necessarily rebuilt. Earlier v2.2.1 hash `9f5ce1ec...` is obsolete; use only the artifact and notes below. No commit, push, tag, publication or deployment was performed.

- Version: 2.2.1; versionCode: 11; package: com.fitdex.app.
- APK: `release-artifacts/fitdex.2.2.1.apk`; 64103405 bytes.
- SHA-256: `28a41aef4f1241204f38c82503c4c589e69dc0af11cb6ad061cdb79002773dd0`.
- Checksum: `release-artifacts/fitdex.2.2.1.apk.sha256`.
- `apksigner verify --print-certs` passes. Signer certificate SHA-256 remains `09a4fc77fb3530ddf8da1cfc8d1b9dd995925fd66c106546099d817cce0b6322`.
- `aapt dump badging` confirms package, version and code.
- Public notes: `releases/v2.2.1.md`; all v2.2.0 user-facing improvements plus discovery/approval fixes and exact updater metadata.
- Published v2.2.0 APK remains byte-for-byte unchanged: `aa1c29e840e4d74b67ea2cab91bc0e03447ff12e2bdf58da710d4bad4fb0f1f7`.

## Approval behavior

`shared/releasePolicy.ts` is imported by both normalizers. Exactly one `FitDex-Release-Status: successful` field is required. Failed, superseded, missing, unknown and duplicate states fail closed. This policy works for future versions without per-version code edits.

Both in-app and website changelogs exclude unsuccessful/unapproved releases. Website archive Latest badges also use the approved installable selection instead of array position. The Android updater and FitDexInfo promotion select the first approved installable candidate, skipping newer candidates without valid APK/integrity metadata. Canonical GitHub APK name/URL, positive versionCode/size, SHA-256 and publication date are required. Existing actual download verification, checksum enforcement, FileProvider, permissions, cleanup, signing and user data implementations are untouched.

FitDexInfo no longer trusts persisted browser release approval. Each discovery request revalidates public status. Errors clear live promotion; the approved v2.1.0 fallback remains available, never v2.2.0 or an unpublished v2.2.1. A future unknown offline revocation cannot be discovered without connectivity; the reviewed fallback must be maintained if its status changes.

Local `releases/status-updates/v2.2.0.md` explicitly marks v2.2.0 superseded and unsuccessful, naming v2.2.1 as replacement. The remote record is not yet changed. Other status-update files annotate earlier successful stable releases so their history remains visible after fail-closed filtering. No historical record or APK is deleted.

## Validation

Passed: lint; test:release-discovery (both raw normalizers, successful/superseded/failed/unknown/missing/duplicate approval, invalid integrity candidate skipping, network recovery); test:updater; test:release-system; test:capacitor-android; test:android-release; website test:release; website test:hero; TypeScript and root production build via android:release; corrected website TypeScript and production build; git diff --check. Website import-extension failure from the first pass was corrected and the build passed afterward. Relevant existing source tests now explicitly annotate their historical successful fixtures; raw rejection tests separately exercise the actual fail-closed parsers.

Signed clean Android release build passed. Existing chunk-size/mixed-import and Gradle deprecation warnings remain. No browser automation or device installation ran. Physical-device in-place upgrade/data retention, updater download/install handoff, website visual/error states and post-publication discovery remain manual checks. Older affected installations need one manual APK upgrade.

## Exact publication steps (not executed)

First review, commit and push these new source changes manually. The existing pushed commit does not contain this policy. Create and push `v2.2.1` pointing to that reviewed final source commit; do not tag the earlier commit. Confirm the new APK includes this policy, and confirm no further bundled changes occurred after the build. Do not use the legacy publication wrapper, which assumes a different branch/file set.

```sh
cd /Users/arijitbhaduri/Developer/fitdex
git status --short
git diff --check
(cd release-artifacts && shasum -a 256 -c fitdex.2.2.1.apk.sha256)
# Review the notes and all status updates before executing remote writes.
gh release edit v1.0.0 --repo ArijitWayne/fitdex --notes-file releases/status-updates/v1.0.0.md
gh release edit v1.1.0 --repo ArijitWayne/fitdex --notes-file releases/status-updates/v1.1.0.md
gh release edit v1.1.1 --repo ArijitWayne/fitdex --notes-file releases/status-updates/v1.1.1.md
gh release edit v2.0.0 --repo ArijitWayne/fitdex --notes-file releases/status-updates/v2.0.0.md
gh release edit v2.0.1 --repo ArijitWayne/fitdex --notes-file releases/status-updates/v2.0.1.md
gh release edit v2.1.0 --repo ArijitWayne/fitdex --notes-file releases/status-updates/v2.1.0.md
gh release edit v2.2.0 --repo ArijitWayne/fitdex --notes-file releases/status-updates/v2.2.0.md
# Until the replacement is published, keep GitHub's Latest on the approved fallback.
gh release edit v2.1.0 --repo ArijitWayne/fitdex --latest
# After the reviewed final source has been committed/pushed and v2.2.1 tag pushed:
gh release create v2.2.1 \
  release-artifacts/fitdex.2.2.1.apk \
  release-artifacts/fitdex.2.2.1.apk.sha256 \
  --repo ArijitWayne/fitdex --verify-tag --latest \
  --title "FitDex v2.2.1" --notes-file releases/v2.2.1.md
# Verify public status and the exact assets after publication.
gh release view v2.2.1 --repo ArijitWayne/fitdex
gh api repos/ArijitWayne/fitdex/releases/tags/v2.2.1 \
  --jq '{tag: .tag_name, published_at: .published_at, body: .body, assets: [.assets[] | {name, size, digest, browser_download_url}]}'
gh api repos/ArijitWayne/fitdex/releases/tags/v2.2.0 --jq '{tag: .tag_name, body: .body, assets: [.assets[].name]}'
```

No upload to v2.2.0 is required. Never clobber its APK or retag it. The status updates preserve existing public bodies and only add explicit approval metadata. They were generated from the read-only GitHub inventory at preparation time; recheck for intervening edits before applying.

Deploy the reviewed website source to the existing FitDexInfo Vercel project after approval metadata is present. Verify live latest is 2.2.1, v2.2.0 is absent from approved changelogs, and simulated/API failure returns the approved fallback. Updating the fallback itself to 2.2.1 requires its real GitHub publication timestamp and a subsequent source review/deployment; do not invent that timestamp before publication.
