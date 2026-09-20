import { parseReleaseNotes } from './releaseNotes'
import { releaseMetadataByTag } from './metadata'
import type { FitDexRelease } from './types'

export type GitHubAsset = {
  name: string
  size: number
  browser_download_url: string
  content_type?: string
  digest?: string
}

export type GitHubRelease = {
  tag_name: string
  name?: string | null
  draft: boolean
  prerelease: boolean
  published_at: string | null
  html_url: string
  body?: string | null
  assets?: GitHubAsset[]
}

export function extractVersion(tagOrName: string): string | null {
  const match = /v?(\d+\.\d+\.\d+(?:-[a-zA-Z0-9.]+)?)/.exec(tagOrName)
  return match ? match[1] : null
}

export function extractSha256FromBody(body?: string | null): string | undefined {
  if (!body) return undefined
  // Look for 64-hex character string, either standalone or preceded by sha256/checksum
  const match = /(?:sha[-_]?256(?:[:\s=]+))?([a-fA-F0-9]{64})\b/.exec(body)
  return match ? match[1].toLowerCase() : undefined
}

export function extractVersionCodeFromBody(body?: string | null): number | undefined {
  if (!body) return undefined
  const match = /(?:versionCode|build(?:\s+number)?|build)[:\s]+(\d+)\b/i.exec(body)
  return match ? parseInt(match[1], 10) : undefined
}

export function findApkAsset(assets: GitHubAsset[] | undefined, version: string): GitHubAsset | undefined {
  if (!assets || assets.length === 0) return undefined

  // 1. Exact canonical match: fitdex.<version>.apk
  const exact = assets.find((a) => a.name.toLowerCase() === `fitdex.${version}.apk`.toLowerCase())
  if (exact) return exact

  // 2. Pattern match: fitdex.*.apk
  const namedMatch = assets.find((a) => /^fitdex.*\.apk$/i.test(a.name))
  if (namedMatch) return namedMatch

  // 3. Fallback: any .apk asset
  return assets.find((a) => a.name.toLowerCase().endsWith('.apk'))
}

export function findChecksumAsset(assets: GitHubAsset[] | undefined): GitHubAsset | undefined {
  if (!assets || assets.length === 0) return undefined
  return assets.find((a) => a.name.toLowerCase().endsWith('.sha256'))
}

export function normalizeGitHubReleases(rawReleases: unknown): FitDexRelease[] {
  if (!Array.isArray(rawReleases)) {
    return []
  }

  const normalized: FitDexRelease[] = []

  for (const raw of rawReleases) {
    if (!raw || typeof raw !== 'object') continue
    const item = raw as Partial<GitHubRelease>

    // 1. Filter out draft releases
    if (item.draft === true) continue

    // 2. Filter out prerelease builds for stable stream
    if (item.prerelease === true) continue

    // 3. Must have a valid tag name and publication date
    if (!item.tag_name || !item.published_at) continue

    const version = extractVersion(item.tag_name) || extractVersion(item.name || '')
    if (!version) continue

    const tag = item.tag_name.startsWith('v') ? item.tag_name : `v${version}`
    const apkAsset = findApkAsset(item.assets, version)
    const apkSha256 = apkAsset?.digest?.match(/^sha256:([a-fA-F0-9]{64})$/i)?.[1]?.toLowerCase()
    const sha256 = extractSha256FromBody(item.body) || apkSha256
    const versionCode = extractVersionCodeFromBody(item.body) ?? releaseMetadataByTag[tag]?.versionCode

    const release: FitDexRelease = {
      version,
      versionCode,
      tag,
      publishedAt: item.published_at,
      apkDownloadUrl: apkAsset?.browser_download_url,
      apkFileName: apkAsset?.name,
      apkSize: apkAsset?.size,
      sha256,
      githubReleaseUrl: item.html_url || `https://github.com/ArijitWayne/fitdex/releases/tag/${tag}`,
      releaseNotes: parseReleaseNotes(item.body || ''),
    }

    normalized.push(release)
  }

  // Sort descending by publishedAt (newest first)
  normalized.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

  return normalized
}
