import { APP_VERSION, APP_BUILD_NUMBER } from '../../appVersion';
import { isNewerRelease } from './semver';
import {
  type AppRelease,
  type UpdateCheckResult,
  normalizeGitHubReleases,
  isValidReleaseDownloadUrl,
} from './updaterModel';
import { Capacitor } from '@capacitor/core';

const GITHUB_RELEASES_API = 'https://api.github.com/repos/ArijitWayne/fitdex/releases';
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
    if (!cachedResult) cachedResult = offlineResult;
    return offlineResult;
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 7000);

  try {
    const response = await fetch(GITHUB_RELEASES_API, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (response.status === 404) {
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

    if (!response.ok) {
      throw new Error(`GitHub API returned status ${response.status}`);
    }

    const data = await response.json();
    const releases = normalizeGitHubReleases(data);

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

    const latest = releases[0];
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
    return result;
  } catch (err: unknown) {
    clearTimeout(timeoutId);

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

    // If we have a previously cached good result, don't overwrite with transient network error
    if (!cachedResult) {
      cachedResult = errorResult;
      lastCheckTime = now;
    }

    return errorResult;
  }
}

/**
 * Fetches all published stable releases for release notes display.
 */
export async function fetchReleaseHistory(): Promise<AppRelease[]> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 7000);

    const response = await fetch(GITHUB_RELEASES_API, {
      headers: { Accept: 'application/vnd.github.v3+json' },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) return [];
    const data = await response.json();
    return normalizeGitHubReleases(data);
  } catch {
    return [];
  }
}

/**
 * Handles APK download or install handoff safely.
 * Validates download URL originates from official repository releases.
 */
export async function handoffApkDownload(release: AppRelease): Promise<{ success: boolean; error?: string }> {
  const url = release.apkDownloadUrl || release.githubReleaseUrl;

  if (!url) {
    return { success: false, error: 'No download URL available for this release.' };
  }

  // Security check: must originate from official github.com/ArijitWayne/fitdex
  if (!isValidReleaseDownloadUrl(url)) {
    return { success: false, error: 'Untrusted download source rejected.' };
  }

  try {
    const isNative = Capacitor.isNativePlatform();

    if (isNative) {
      // In Android Capacitor context, open system browser / installer flow
      window.open(url, '_system');
      return { success: true };
    } else {
      // In PWA / web browser context, open download in new tab or trigger file save
      window.open(url, '_blank', 'noopener,noreferrer');
      return { success: true };
    }
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to launch installer.';
    return { success: false, error: message };
  }
}
