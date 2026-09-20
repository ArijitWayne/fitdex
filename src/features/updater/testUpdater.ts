import assert from 'node:assert/strict';
import { compareSemver, isNewerRelease, parseSemver } from './semver.ts';
import {
  extractSha256FromBody,
  extractVersion,
  extractVersionCodeFromBody,
  findApkAsset,
  normalizeGitHubReleases,
  isValidReleaseDownloadUrl,
  type GitHubRelease,
} from './updaterModel.ts';

console.log('--- RUNNING PHASE 7 IN-APP UPDATER & BOOT TESTS ---');

// 1. Semantic Version Parsing
{
  const p1 = parseSemver('1.0.0');
  assert.equal(p1?.major, 1);
  assert.equal(p1?.minor, 0);
  assert.equal(p1?.patch, 0);

  const p2 = parseSemver('v1.10.2-alpha.1');
  assert.equal(p2?.major, 1);
  assert.equal(p2?.minor, 10);
  assert.equal(p2?.patch, 2);
  assert.equal(p2?.prerelease, 'alpha.1');

  assert.equal(parseSemver('invalid-string'), null);

  assert.equal(extractVersion('v1.0.0'), '1.0.0');
  assert.equal(extractVersion('fitdex-1.2.3'), '1.2.3');
  assert.equal(extractVersion('release'), null);
  console.log('✓ Semver parsing passed');
}

// 2. Semantic Version Comparison
{
  assert.equal(compareSemver('1.10.0', '1.9.9'), 1);
  assert.equal(compareSemver('1.9.9', '1.10.0'), -1);
  assert.equal(compareSemver('2.0.0', '1.99.99'), 1);
  assert.equal(compareSemver('1.0.0', '1.0.0'), 0);
  assert.equal(compareSemver('v1.0.0', '1.0.0'), 0);
  assert.equal(compareSemver('1.0.0-rc.1', '1.0.0'), -1);
  assert.equal(compareSemver('1.0.0', '1.0.0-rc.1'), 1);
  console.log('✓ Semver strict comparison passed');
}

// 3. Candidate Newer / Older / Same Version Detection
{
  const current = { version: '1.0.0', versionCode: 2 };

  // Same version, same build
  assert.equal(isNewerRelease({ version: '1.0.0', versionCode: 2 }, current), false);

  // Same version, higher build/versionCode
  assert.equal(isNewerRelease({ version: '1.0.0', versionCode: 3 }, current), true);

  // Same version, lower build/versionCode
  assert.equal(isNewerRelease({ version: '1.0.0', versionCode: 1 }, current), false);

  // Older version
  assert.equal(isNewerRelease({ version: '0.9.9', versionCode: 10 }, current), false);

  // Newer minor
  assert.equal(isNewerRelease({ version: '1.1.0' }, current), true);

  // Newer patch
  assert.equal(isNewerRelease({ version: '1.0.1' }, current), true);

  // Newer major
  assert.equal(isNewerRelease({ version: '2.0.0' }, current), true);
  console.log('✓ isNewerRelease comparison & versionCode tiebreaker passed');
}

// 4. Release Body Metadata Extraction
{
  const body1 = `
FitDex v1.0.1 Release
Build Number: 3
SHA-256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
- Added offline progression chart
- Fixed rep counter
`;
  assert.equal(
    extractSha256FromBody(body1),
    'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
  );
  assert.equal(extractVersionCodeFromBody(body1), 3);

  const body2 = 'versionCode: 45\nSHA256: AABBCCDDEEFF00112233445566778899AABBCCDDEEFF00112233445566778899';
  assert.equal(
    extractSha256FromBody(body2),
    'aabbccddeeff00112233445566778899aabbccddeeff00112233445566778899',
  );
  assert.equal(extractVersionCodeFromBody(body2), 45);

  assert.equal(extractSha256FromBody(''), undefined);
  assert.equal(extractVersionCodeFromBody(''), undefined);
  console.log('✓ Checksum & versionCode body parsing passed');
}

// 5. APK Asset Resolution
{
  const assets = [
    { name: 'source.zip', size: 1000, browser_download_url: 'https://example.com/source.zip' },
    { name: 'fitdex.1.0.1.apk', size: 8500000, browser_download_url: 'https://github.com/ArijitWayne/fitdex/releases/download/v1.0.1/fitdex.1.0.1.apk' },
    { name: 'fitdex.sha256', size: 64, browser_download_url: 'https://example.com/fitdex.sha256' },
  ];

  const match = findApkAsset(assets, '1.0.1');
  assert.ok(match);
  assert.equal(match?.name, 'fitdex.1.0.1.apk');
  assert.equal(match?.browser_download_url, 'https://github.com/ArijitWayne/fitdex/releases/download/v1.0.1/fitdex.1.0.1.apk');

  // Fallback pattern match
  const fallbackAssets = [
    { name: 'fitdex-release-unsigned.apk', size: 8500000, browser_download_url: 'https://github.com/ArijitWayne/fitdex/releases/download/v1.0.2/fitdex-release.apk' },
  ];
  assert.equal(findApkAsset(fallbackAssets, '1.0.2')?.name, 'fitdex-release-unsigned.apk');
  console.log('✓ APK asset discovery passed');
}

// 6. Normalization: Prerelease, Draft, and Malformed Filtering
{
  const rawReleases: Partial<GitHubRelease>[] = [
    {
      tag_name: 'v1.1.0',
      draft: false,
      prerelease: false,
      published_at: '2026-10-01T12:00:00Z',
      body: 'Stable update\nversionCode: 4',
      assets: [{ name: 'fitdex.1.1.0.apk', size: 9000000, browser_download_url: 'https://github.com/ArijitWayne/fitdex/releases/download/v1.1.0/fitdex.1.1.0.apk' }],
    },
    {
      // Ignored: Prerelease
      tag_name: 'v1.2.0-beta.1',
      draft: false,
      prerelease: true,
      published_at: '2026-10-05T12:00:00Z',
      body: 'Beta release',
    },
    {
      // Ignored: Draft
      tag_name: 'v1.3.0',
      draft: true,
      prerelease: false,
      published_at: '2026-10-06T12:00:00Z',
      body: 'Draft release',
    },
    {
      // Ignored: Missing published_at
      tag_name: 'v1.4.0',
      draft: false,
      prerelease: false,
      published_at: null,
      body: 'Unpublished tag',
    },
    {
      // Ignored: Non-semver tag
      tag_name: 'nightly-build-2026',
      draft: false,
      prerelease: false,
      published_at: '2026-10-07T12:00:00Z',
      body: 'Nightly',
    },
  ];

  const normalized = normalizeGitHubReleases(rawReleases);
  assert.equal(normalized.length, 1);
  assert.equal(normalized[0].version, '1.1.0');
  assert.equal(normalized[0].versionCode, 4);
  assert.equal(normalized[0].apkFileName, 'fitdex.1.1.0.apk');
  console.log('✓ Release normalization & draft/prerelease filtering passed');
}

// 7. Security: Untrusted Download URL Rejection
{
  assert.equal(
    isValidReleaseDownloadUrl('https://github.com/ArijitWayne/fitdex/releases/download/v1.0.1/fitdex.1.0.1.apk'),
    true,
  );
  assert.equal(
    isValidReleaseDownloadUrl('https://github.com/ArijitWayne/fitdex/releases/tag/v1.0.1'),
    true,
  );
  assert.equal(
    isValidReleaseDownloadUrl('https://malicious-site.com/hacked-fitdex.apk'),
    false,
  );
  assert.equal(
    isValidReleaseDownloadUrl('https://evil-phishing.com/ArijitWayne/fitdex/releases/download/apk'),
    false,
  );
  assert.equal(isValidReleaseDownloadUrl(''), false);
  assert.equal(isValidReleaseDownloadUrl(null), false);
  console.log('✓ Untrusted download source rejected securely');
}

// 8. Empty public feed never fabricates the local baseline as a GitHub release
{
  const emptyNormalized = normalizeGitHubReleases([]);
  assert.deepEqual(emptyNormalized, []);

  const nullNormalized = normalizeGitHubReleases(null);
  assert.deepEqual(nullNormalized, []);

  assert.equal(emptyNormalized.length, 0);
  assert.equal(emptyNormalized[0], undefined);
  console.log('✓ Empty public feed preserves local baseline without fabricated release');
}

console.log('--- ALL PHASE 7 UPDATER TESTS PASSED SUCCESSFULLY ---');
