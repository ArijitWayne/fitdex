/** Public GitHub release-body contract. Unknown/ambiguous status fails closed. */
export type ReleaseStatus = 'successful' | 'superseded' | 'failed' | 'unapproved'

export function getReleaseStatus(body?: string | null): ReleaseStatus {
  const lines = (body ?? '').split(/\r?\n/).filter(line => /^FitDex-Release-Status:/i.test(line.trim()))
  if (lines.length !== 1) return 'unapproved'
  const value = lines[0].trim().slice('FitDex-Release-Status:'.length).trim().toLowerCase()
  return value === 'successful' || value === 'superseded' || value === 'failed' ? value : 'unapproved'
}

export function isInstallableRelease(release: {
  releaseStatus?: string; version: string; versionCode?: number; apkFileName?: string;
  apkDownloadUrl?: string; sha256?: string; apkSize?: number; publishedAt: string;
}): boolean {
  return release.releaseStatus === 'successful'
    && Number.isInteger(release.versionCode) && (release.versionCode ?? 0) > 0
    && release.apkFileName === `fitdex.${release.version}.apk`
    && release.apkDownloadUrl === `https://github.com/ArijitWayne/fitdex/releases/download/v${release.version}/fitdex.${release.version}.apk`
    && /^[a-f0-9]{64}$/i.test(release.sha256 ?? '')
    && Number.isSafeInteger(release.apkSize) && (release.apkSize ?? 0) > 0
    && Number.isFinite(Date.parse(release.publishedAt))
}
