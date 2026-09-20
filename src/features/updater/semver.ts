/**
 * Strict Semantic Version parsing and comparison for FitDex.
 * Handles forms like "1.0.0", "v1.10.0", "2.0.0-rc.1".
 */

export interface ParsedSemver {
  major: number;
  minor: number;
  patch: number;
  prerelease?: string;
  raw: string;
}

export function parseSemver(versionStr: string): ParsedSemver | null {
  if (!versionStr || typeof versionStr !== 'string') return null;

  // Strip leading 'v' or 'V' and trim whitespace
  const clean = versionStr.trim().replace(/^v/i, '');

  // Match Major.Minor.Patch with optional -prerelease
  const match = clean.match(/^(\d+)\.(\d+)\.(\d+)(?:-([0-9A-Za-z.-]+))?$/);
  if (!match) return null;

  return {
    major: parseInt(match[1], 10),
    minor: parseInt(match[2], 10),
    patch: parseInt(match[3], 10),
    prerelease: match[4],
    raw: versionStr,
  };
}

/**
 * Compare two semver strings:
 * Returns:
 *   1 if a > b
 *  -1 if a < b
 *   0 if a == b
 *
 * Example:
 *   compareSemver("1.10.0", "1.9.9") === 1
 *   compareSemver("1.0.0", "1.0.0") === 0
 *   compareSemver("0.9.0", "1.0.0") === -1
 */
export function compareSemver(a: string, b: string): number {
  const parsedA = parseSemver(a);
  const parsedB = parseSemver(b);

  if (!parsedA && !parsedB) return 0;
  if (!parsedA) return -1;
  if (!parsedB) return 1;

  if (parsedA.major !== parsedB.major) {
    return parsedA.major > parsedB.major ? 1 : -1;
  }

  if (parsedA.minor !== parsedB.minor) {
    return parsedA.minor > parsedB.minor ? 1 : -1;
  }

  if (parsedA.patch !== parsedB.patch) {
    return parsedA.patch > parsedB.patch ? 1 : -1;
  }

  // Pre-release versions have lower precedence than normal versions
  if (parsedA.prerelease && !parsedB.prerelease) return -1;
  if (!parsedA.prerelease && parsedB.prerelease) return 1;
  if (parsedA.prerelease && parsedB.prerelease) {
    if (parsedA.prerelease !== parsedB.prerelease) {
      return parsedA.prerelease.localeCompare(parsedB.prerelease);
    }
  }

  return 0;
}

export interface VersionTarget {
  version: string;
  versionCode?: number;
}

/**
 * Determines whether candidate release is newer than current installed version.
 * 1. Strictly compares semver string.
 * 2. If semver is identical and both provide versionCode, candidate.versionCode > current.versionCode signals update.
 */
export function isNewerRelease(candidate: VersionTarget, current: VersionTarget): boolean {
  const semverComp = compareSemver(candidate.version, current.version);
  if (semverComp > 0) return true;
  if (semverComp < 0) return false;

  // Semver is identical: check versionCode tiebreaker if both present
  if (
    typeof candidate.versionCode === 'number' &&
    typeof current.versionCode === 'number'
  ) {
    return candidate.versionCode > current.versionCode;
  }

  return false;
}
