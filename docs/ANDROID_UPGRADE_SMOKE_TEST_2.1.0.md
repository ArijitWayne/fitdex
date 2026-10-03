# FitDex 2.0.1 to 2.1.0 Android Upgrade Smoke Test

Run this release gate on a physical Android device. Do not uninstall FitDex, clear app data, clear cache, or delete APK files.

## Release status

This test is prepared for v2.1.0 release candidate. Do not publish release metadata until signed APK, final APK size, SHA-256, and this device test are complete.

## Required artifacts

- Signed public FitDex `2.0.1` APK, installed over a clean device or test profile.
- Signed FitDex `2.1.0` APK with `versionCode 9`, published as GitHub Release asset and release notes containing its SHA-256, build number, and APK size.
- Same `com.fitdex.app` application ID and same release signing lineage for both artifacts.

## Upgrade path

1. Install signed `2.0.1`; launch FitDex.
2. Complete onboarding. Create profile data, a completed workout/history item, a Food record, and change at least one preference.
3. Capture screenshots or values for those records and Settings version/build.
4. Publish or expose only `v2.1.0`, `versionCode 9` release metadata with the signed APK asset.
5. Open FitDex update details. Confirm target is `v2.1.0 (Build 9)`.
6. Tap **DOWNLOAD & INSTALL APK**. Confirm fresh download, verification, and Android installer launch.
7. Accept Android installer update. Do not uninstall FitDex.
8. Reopen FitDex. Confirm version `2.1.0`, build `9`, profile/onboarding state, workout/history, Food record, and preferences remain unchanged.
9. Confirm no Android Settings cache/data action or manual APK deletion was needed.

## Failed-download retry

1. Start in-app update download, then disable network before it finishes.
2. Confirm FitDex reports download failure and does not open installer.
3. Restore network and tap **RETRY DOWNLOAD**.
4. Confirm a complete fresh download verifies and opens Android installer.
5. Install over `2.0.1`; repeat post-upgrade data checks above.

## Updater ownership checks

1. Confirm updater creates version-specific APK names in its own cache directory.
2. Confirm interrupted `.part` files never reach Android installer.
3. Confirm retry removes updater-owned stale or partial files, then starts fresh download without clearing FitDex cache or data.
4. Confirm installer launches only after downloaded APK size and SHA-256 match published release metadata.
5. Confirm only updater cache files are cleaned; profile, workouts, food logs, preferences, and backups remain untouched.

## Signing check

Run `apksigner verify --print-certs` against both signed APKs outside source control. Compare signer certificate SHA-256 digests. They must match or Android will reject update. Do not record keystore material in this repository.
