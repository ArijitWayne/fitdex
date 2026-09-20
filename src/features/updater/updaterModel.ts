/**
 * FitDex In-App Updater Release Types and Normalization.
 * Compatible with Phase 6 published-release contract.
 */

export interface GitHubAsset {
  name: string;
  size: number;
  browser_download_url: string;
  content_type?: string;
}

export interface GitHubRelease {
  tag_name: string;
  name?: string | null;
  draft: boolean;
  prerelease: boolean;
  published_at: string | null;
  html_url: string;
  body?: string | null;
  assets?: GitHubAsset[];
}

export interface AppRelease {
  version: string;
  versionCode?: number;
  tag: string;
  publishedAt: string;
  apkDownloadUrl?: string;
  apkFileName?: string;
  apkSize?: number;
  sha256?: string;
  githubReleaseUrl: string;
  releaseNotes: string;
}

export type UpdateCheckStatus =
  | 'idle'
  | 'checking'
  | 'update-available'
  | 'up-to-date'
  | 'no-release'
  | 'offline'
  | 'error';

export interface UpdateCheckResult {
  status: UpdateCheckStatus;
  release?: AppRelease;
  currentVersion: string;
  currentBuild: number;
  error?: string;
  checkedAt: string;
}

export function isValidReleaseDownloadUrl(url?: string | null): boolean {
  if (!url || typeof url !== 'string') return false;
  return (
    url.startsWith('https://github.com/ArijitWayne/fitdex/releases/download/') ||
    url.startsWith('https://github.com/ArijitWayne/fitdex/releases/tag/') ||
    url.startsWith('https://github.com/ArijitWayne/fitdex/releases/')
  );
}

export function extractVersion(tagOrName: string): string | null {
  const match = /v?(\d+\.\d+\.\d+(?:-[a-zA-Z0-9.]+)?)/.exec(tagOrName);
  return match ? match[1] : null;
}

export function extractSha256FromBody(body?: string | null): string | undefined {
  if (!body) return undefined;
  const match = /(?:sha[-_]?256(?:[:\s=]+))?([a-fA-F0-9]{64})\b/.exec(body);
  return match ? match[1].toLowerCase() : undefined;
}

export function extractVersionCodeFromBody(body?: string | null): number | undefined {
  if (!body) return undefined;
  const match = /(?:versionCode|build(?:\s+number)?|build)[:\s]+(\d+)\b/i.exec(body);
  return match ? parseInt(match[1], 10) : undefined;
}

export function findApkAsset(
  assets: GitHubAsset[] | undefined,
  version: string,
): GitHubAsset | undefined {
  if (!assets || assets.length === 0) return undefined;

  // 1. Exact canonical match: fitdex.<version>.apk
  const exact = assets.find(
    (a) => a.name.toLowerCase() === `fitdex.${version}.apk`.toLowerCase(),
  );
  if (exact) return exact;

  // 2. Pattern match: fitdex.*.apk
  const namedMatch = assets.find((a) => /^fitdex.*\.apk$/i.test(a.name));
  if (namedMatch) return namedMatch;

  // 3. Fallback: any .apk asset
  return assets.find((a) => a.name.toLowerCase().endsWith('.apk'));
}

/**
 * Normalizes raw GitHub release array or single object into validated AppRelease array.
 * Strictly ignores:
 * - drafts
 * - prereleases
 * - items without published_at or tag_name
 * - items where semver cannot be extracted
 */
export function normalizeGitHubReleases(rawReleases: unknown): AppRelease[] {
  const list = Array.isArray(rawReleases)
    ? rawReleases
    : rawReleases && typeof rawReleases === 'object'
      ? [rawReleases]
      : [];

  const normalized: AppRelease[] = [];

  for (const raw of list) {
    if (!raw || typeof raw !== 'object') continue;
    const item = raw as Partial<GitHubRelease>;

    // 1. Filter out draft releases
    if (item.draft === true) continue;

    // 2. Filter out prerelease builds for stable stream
    if (item.prerelease === true) continue;

    // 3. Must have a valid tag name and publication date
    if (!item.tag_name || !item.published_at) continue;

    const version = extractVersion(item.tag_name) || extractVersion(item.name || '');
    if (!version) continue;

    const tag = item.tag_name.startsWith('v') ? item.tag_name : `v${version}`;
    const apkAsset = findApkAsset(item.assets, version);
    const sha256 = extractSha256FromBody(item.body);
    const versionCode = extractVersionCodeFromBody(item.body);

    normalized.push({
      version,
      versionCode,
      tag,
      publishedAt: item.published_at,
      apkDownloadUrl: apkAsset?.browser_download_url,
      apkFileName: apkAsset?.name,
      apkSize: apkAsset?.size,
      sha256,
      githubReleaseUrl:
        item.html_url || `https://github.com/ArijitWayne/fitdex/releases/tag/${tag}`,
      releaseNotes: item.body?.trim() || 'No detailed release notes provided.',
    });
  }

  // Sort descending by publishedAt (newest first)
  normalized.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  return normalized;
}
