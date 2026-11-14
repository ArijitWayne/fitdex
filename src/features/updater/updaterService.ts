import { getReleaseStatus, isInstallableRelease } from '../../../shared/releasePolicy.ts';
import { requestReleaseData } from './releaseRequest.ts';
import { APP_VERSION, APP_BUILD_NUMBER } from '../../appVersion.ts';
import { isNewerRelease } from './semver.ts';
import {
  type AppRelease,
  type UpdateCheckResult,
  normalizeGitHubReleases,
  isValidReleaseDownloadUrl,
} from './updaterModel.ts';
import { getLocalSettingsRecord } from '../settings/settingsRepository.ts';
import { notifyUpdateAvailable } from '../notifications/notificationScheduler.ts';
import {
  isNativeAndroid,
  downloadUpdateApk,
  verifyDownloadedApk,
  launchApkInstaller,
  cleanStaleUpdateApks,
  canInstallPackages,
  openInstallSettings,
  getUpdateArtifactPaths,
  type UpdateDownloadProgress,
} from './nativeAppInstaller.ts';

const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

let cachedResult: UpdateCheckResult | null = null;
let lastCheckTime = 0;

/**
 * Checks for updates against official published GitHub releases.
 * Non-blocking, cached, safe for background execution.
 */
export async function checkForUpdates(forceRefresh = false): Promise<UpdateCheckResult> {
  const now = Date.now();

  // Return session cached result if valid and not forcing refresh
  if (!forceRefresh && cachedResult && now - lastCheckTime < CACHE_TTL_MS) {
    return cachedResult;
  }

  // Quick offline check
  if (typeof navigator !== 'undefined' && !navigator.onLine) {
    const offlineResult: UpdateCheckResult = {
      status: 'offline',
      currentVersion: APP_VERSION,
      currentBuild: APP_BUILD_NUMBER,
      error: 'Device is offline. Connect to check for updates.',
      checkedAt: new Date().toISOString(),
    };
    return offlineResult;
  }

  try {
    const data = await requestReleaseData();
    const releases = normalizeGitHubReleases(data);

    if (releases.length === 0 && data.some(item => { const release = item as Record<string, unknown>; return getReleaseStatus(release.body as string) === 'successful' && !release.draft && !release.prerelease && release.published_at })) {
      throw new Error('Malformed release metadata: no valid published release could be read.');
    }
    if (releases.length === 0) {
      const noReleaseResult: UpdateCheckResult = {
        status: 'no-release',
        currentVersion: APP_VERSION,
        currentBuild: APP_BUILD_NUMBER,
        checkedAt: new Date().toISOString(),
      };
      cachedResult = noReleaseResult;
      lastCheckTime = now;
      return noReleaseResult;
    }

    const latest = releases.find(isInstallableRelease);
    if (!latest) {
      throw new Error('Malformed release metadata: no approved release has a valid official APK, SHA-256 and versionCode.');
    }
    const hasUpdate = isNewerRelease(
      { version: latest.version, versionCode: latest.versionCode },
      { version: APP_VERSION, versionCode: APP_BUILD_NUMBER },
    );

    const result: UpdateCheckResult = {
      status: hasUpdate ? 'update-available' : 'up-to-date',
      release: latest,
      currentVersion: APP_VERSION,
      currentBuild: APP_BUILD_NUMBER,
      checkedAt: new Date().toISOString(),
    };

    cachedResult = result;
    lastCheckTime = now;
    if (result.status === 'update-available' && result.release) {
      const family = (await getLocalSettingsRecord())?.themeFamily === 'amazonians' ? 'amazonians' : 'spartans'
      await notifyUpdateAvailable(result.release.version, family)
    }
    return result;
  } catch (err: unknown) {
    const isOffline = typeof navigator !== 'undefined' && !navigator.onLine;
    const errorMessage =
      err instanceof Error
        ? err.name === 'AbortError'
          ? 'Update check timed out.'
          : err.message
        : 'Unknown network error.';

    const errorResult: UpdateCheckResult = {
      status: isOffline ? 'offline' : 'error',
      currentVersion: APP_VERSION,
      currentBuild: APP_BUILD_NUMBER,
      error: errorMessage,
      checkedAt: new Date().toISOString(),
    };

    // Errors are never cached as successful discovery; the next check can retry.
    return errorResult;
  }
}

/**
 * Fetches all published stable releases for release notes display.
 */
export async function fetchReleaseHistory(): Promise<AppRelease[]> {
  // Preserve the history modal's existing empty-history fallback on failure.
  // The update checker reports the categorized discovery error to the user.
  try { return normalizeGitHubReleases(await requestReleaseData()); } catch { return []; }
}


/**
 * Handles APK download or install handoff safely.
 * For web/PWA: triggers direct file download in new tab.
 * For native Android: downloads via native streaming, checks SHA-256, and invokes package installer.
 */
export async function handoffApkDownload(
  release: AppRelease,
  onProgress?: (progress: UpdateDownloadProgress) => void,
  onStatusChange?: (status: 'downloading' | 'verifying' | 'launchingInstaller' | 'ready' | 'error') => void,
): Promise<{ success: boolean; error?: string; checksumMismatch?: boolean; installPermissionRequired?: boolean }> {
  const url = release.apkDownloadUrl || release.githubReleaseUrl;

  if (!url) {
    return { success: false, error: 'No download URL available for this release.' };
  }

  // Security check: must originate from official github.com/ArijitWayne/fitdex
  if (!isValidReleaseDownloadUrl(url)) {
    return { success: false, error: 'Untrusted download source rejected.' };
  }

  try {
    if (isNativeAndroid()) {
      let artifact;
      const expectedApkSize = release.apkSize;
      try {
        artifact = getUpdateArtifactPaths(release.version, release.versionCode);
      } catch {
        return { success: false, error: 'Release metadata has an invalid target version.' };
      }
      if (!release.sha256 || typeof expectedApkSize !== 'number' || !Number.isSafeInteger(expectedApkSize) || expectedApkSize <= 0) {
        return { success: false, error: 'Official release integrity metadata is incomplete. Installation was blocked.' };
      }
      onStatusChange?.('downloading');
      const downloadRes = await downloadUpdateApk(url, artifact, onProgress);
      if (!downloadRes.success || !downloadRes.localPath) {
        return { success: false, error: downloadRes.error || 'Failed to download update APK.' };
      }

      onStatusChange?.('verifying');
      const verifyRes = await verifyDownloadedApk(downloadRes.localPath, release.sha256);
      if (!verifyRes.sizeBytes || verifyRes.sizeBytes !== expectedApkSize || !verifyRes.matches) {
        await cleanStaleUpdateApks().catch(() => undefined);
        return {
          success: false,
          checksumMismatch: true,
          error: 'Downloaded APK failed integrity verification.',
        };
      }

      if (!await canInstallPackages()) {
        await openInstallSettings().catch(() => undefined);
        return {
          success: false,
          installPermissionRequired: true,
          error: 'Allow FitDex to install unknown apps, then retry the update.',
        };
      }

      onStatusChange?.('launchingInstaller');
      const installRes = await launchApkInstaller(downloadRes.localPath);
      if (!installRes.success) {
        return { success: false, error: installRes.error || 'Failed to launch installer.' };
      }

      return { success: true };
    } else {
      // In PWA / web browser context, open download in new tab or trigger file save
      window.open(url, '_blank', 'noopener,noreferrer');
      return { success: true };
    }
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to process update.';
    return { success: false, error: message };
  }
}
