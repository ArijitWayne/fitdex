import { Capacitor, registerPlugin } from '@capacitor/core';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { FileTransfer } from '@capacitor/file-transfer';
import { isValidReleaseDownloadUrl } from './updaterModel.ts';

export interface AppInstallerPlugin {
  canRequestPackageInstalls(): Promise<{ canInstall: boolean }>;
  openInstallPermissionSettings(): Promise<void>;
  verifyApkChecksum(options: { path: string; expectedSha256?: string }): Promise<{
    matches: boolean;
    actualSha256: string;
    sizeBytes: number;
  }>;
  installApk(options: { path: string }): Promise<{ success: boolean }>;
}

export const AppInstaller = registerPlugin<AppInstallerPlugin>('AppInstaller');

export interface UpdateDownloadProgress {
  bytes: number;
  totalBytes?: number;
  percent: number;
}

export const UPDATER_CACHE_DIR = 'updates';
const UPDATER_FILE_PREFIX = 'fitdex-';
const UPDATER_FILE_PATTERN = /^fitdex-[0-9]+\.[0-9]+\.[0-9]+(?:-[a-zA-Z0-9.-]+)?(?:-[0-9]+)?\.apk(?:\.part)?$/;

export interface UpdateArtifactPaths {
  fileName: string;
  temporaryFileName: string;
  relativePath: string;
  temporaryRelativePath: string;
}

/** Returns updater-only cache paths. Release metadata controls version, never a remote filename. */
export function getUpdateArtifactPaths(version: string, versionCode?: number): UpdateArtifactPaths {
  if (!/^\d+\.\d+\.\d+(?:-[a-zA-Z0-9.-]+)?$/.test(version)) {
    throw new Error('Release version cannot be used for an update file name.');
  }
  if (versionCode !== undefined && (!Number.isInteger(versionCode) || versionCode < 1)) {
    throw new Error('Release versionCode cannot be used for an update file name.');
  }

  const suffix = versionCode === undefined ? version : `${version}-${versionCode}`;
  const fileName = `${UPDATER_FILE_PREFIX}${suffix}.apk`;
  return {
    fileName,
    temporaryFileName: `${fileName}.part`,
    relativePath: `${UPDATER_CACHE_DIR}/${fileName}`,
    temporaryRelativePath: `${UPDATER_CACHE_DIR}/${fileName}.part`,
  };
}

export function isNativeAndroid(): boolean {
  return Capacitor.isNativePlatform() && Capacitor.getPlatform() === 'android';
}

/**
 * Removes any temporary update APK files from previous download attempts.
 */
export async function cleanStaleUpdateApks(): Promise<void> {
  if (!Capacitor.isNativePlatform()) return;
  try {
    const entries = await Filesystem.readdir({ path: UPDATER_CACHE_DIR, directory: Directory.Cache });
    await Promise.all(entries.files
      .filter((entry) => entry.type === 'file' && UPDATER_FILE_PATTERN.test(entry.name))
      .map((entry) => Filesystem.deleteFile({
        path: `${UPDATER_CACHE_DIR}/${entry.name}`,
        directory: Directory.Cache,
      }).catch(() => undefined)));
  } catch {
    // No updater cache directory yet, or cache cleanup will be retried before download.
  }
}

/**
 * Helper to determine if a filesystem error represents an already existing directory.
 */
export function isDirectoryAlreadyExistsError(err: unknown): boolean {
  if (!err) return false;
  const message = err instanceof Error ? err.message : String(err);
  return (
    /already exists/i.test(message) ||
    (err as { code?: string })?.code === 'FILE_EXISTS' ||
    (err as { code?: string })?.code === 'DIR_EXISTS'
  );
}

/**
 * Ensures the updater cache directory exists.
 * Capacitor Filesystem mkdir throws on Android when the directory already exists.
 * This helper makes directory creation idempotent while preserving genuine filesystem errors.
 */
export async function ensureUpdatesDirectory(): Promise<void> {
  try {
    await Filesystem.mkdir({
      path: UPDATER_CACHE_DIR,
      directory: Directory.Cache,
      recursive: true,
    });
  } catch (err: unknown) {
    if (isDirectoryAlreadyExistsError(err)) {
      return;
    }

    try {
      const stat = await Filesystem.stat({
        path: UPDATER_CACHE_DIR,
        directory: Directory.Cache,
      });
      if (stat.type === 'directory') {
        return;
      }
    } catch {
      // stat failed or path is not a directory, surface original error
    }

    throw err;
  }
}

/**
 * Downloads the APK directly from the GitHub asset URL to local cache storage.
 * Streams directly to disk without buffering the file in JS memory.
 */
export async function downloadUpdateApk(
  apkUrl: string,
  artifact: UpdateArtifactPaths,
  onProgress?: (progress: UpdateDownloadProgress) => void,
): Promise<{ success: boolean; localPath?: string; error?: string }> {
  if (!isNativeAndroid()) {
    return { success: false, error: 'Native update download is only supported on Android.' };
  }

  if (!isValidReleaseDownloadUrl(apkUrl)) {
    return { success: false, error: 'Untrusted download source rejected.' };
  }

  try {
    await ensureUpdatesDirectory();
    // Never treat an existing target or interrupted transfer as valid. Cleanup is
    // intentionally scoped to FitDex updater files only.
    await cleanStaleUpdateApks();
    await ensureUpdatesDirectory();

    const destination = await Filesystem.getUri({
      path: artifact.temporaryRelativePath,
      directory: Directory.Cache,
    });

    let reportedPercent = 0;
    const progressListener = await FileTransfer.addListener('progress', (event) => {
      if (event.type === 'download' && event.url === apkUrl) {
        const total = event.lengthComputable && event.contentLength > 0 ? event.contentLength : undefined;
        let pct = total ? Math.min(100, Math.max(0, Math.round((event.bytes / total) * 100))) : 0;
        if (pct < reportedPercent) pct = reportedPercent;
        reportedPercent = pct;

        onProgress?.({
          bytes: event.bytes,
          totalBytes: total,
          percent: pct,
        });
      }
    });

    try {
      await FileTransfer.downloadFile({
        url: apkUrl,
        path: destination.uri,
        progress: true,
      });

      const stat = await Filesystem.stat({
        path: artifact.temporaryRelativePath,
        directory: Directory.Cache,
      });

      if (!stat.size || stat.size === 0) {
        throw new Error('Downloaded APK file is empty.');
      }

      await Filesystem.deleteFile({ path: artifact.relativePath, directory: Directory.Cache }).catch(() => undefined);
      await Filesystem.rename({
        from: artifact.temporaryRelativePath,
        to: artifact.relativePath,
        directory: Directory.Cache,
      });

      const completed = await Filesystem.stat({ path: artifact.relativePath, directory: Directory.Cache });
      if (!completed.size || completed.size !== stat.size) {
        throw new Error('Downloaded APK could not be finalized.');
      }
      const completedUri = await Filesystem.getUri({ path: artifact.relativePath, directory: Directory.Cache });

      onProgress?.({
        bytes: completed.size,
        totalBytes: completed.size,
        percent: 100,
      });

      return { success: true, localPath: completedUri.uri };
    } finally {
      await progressListener.remove();
    }
  } catch (err: unknown) {
    await Filesystem.deleteFile({ path: artifact.temporaryRelativePath, directory: Directory.Cache }).catch(() => undefined);
    await Filesystem.deleteFile({ path: artifact.relativePath, directory: Directory.Cache }).catch(() => undefined);
    const message = err instanceof Error ? err.message : 'Download failed.';
    return { success: false, error: message };
  }
}

/**
 * Computes the SHA-256 checksum of the downloaded file using the native streaming hasher.
 */
export async function verifyDownloadedApk(
  path: string,
  expectedSha256?: string,
): Promise<{ matches: boolean; actualSha256: string; sizeBytes: number }> {
  if (!isNativeAndroid()) {
    return { matches: true, actualSha256: '', sizeBytes: 0 };
  }

  return AppInstaller.verifyApkChecksum({
    path,
    expectedSha256,
  });
}

/**
 * Checks if the app has permission to install unknown apps.
 */
export async function canInstallPackages(): Promise<boolean> {
  if (!isNativeAndroid()) return true;
  try {
    const result = await AppInstaller.canRequestPackageInstalls();
    return result.canInstall;
  } catch {
    return true;
  }
}

/**
 * Opens Android system settings for granting unknown app install permissions.
 */
export async function openInstallSettings(): Promise<void> {
  if (!isNativeAndroid()) return;
  await AppInstaller.openInstallPermissionSettings();
}

/**
 * Launches the native Android Package Installer for the downloaded and verified APK.
 */
export async function launchApkInstaller(
  path: string,
): Promise<{ success: boolean; error?: string }> {
  if (!isNativeAndroid()) {
    return { success: false, error: 'Package installer is only available on Android.' };
  }

  try {
    const result = await AppInstaller.installApk({ path });
    return { success: result.success };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to launch installer.';
    return { success: false, error: message };
  }
}
