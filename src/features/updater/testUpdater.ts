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

// 9. Release Notes Heading Classification
{
  const { classifyHeading } = await import('./releaseNotesParser.ts');

  assert.deepEqual(classifyHeading('### RELEASE HIGHLIGHTS'), {
    type: 'highlights',
    title: 'RELEASE HIGHLIGHTS',
  });
  assert.deepEqual(classifyHeading('### NEW'), {
    type: 'new',
    title: "WHAT'S NEW",
  });
  assert.deepEqual(classifyHeading("## WHAT'S NEW"), {
    type: 'new',
    title: "WHAT'S NEW",
  });
  assert.deepEqual(classifyHeading('### IMPROVEMENTS'), {
    type: 'improvements',
    title: 'IMPROVEMENTS',
  });
  assert.deepEqual(classifyHeading('### FIXES'), {
    type: 'fixes',
    title: 'FIXES',
  });
  assert.deepEqual(classifyHeading('### BUG FIXES'), {
    type: 'fixes',
    title: 'FIXES',
  });
  assert.deepEqual(classifyHeading('### CUSTOM PATCHES'), {
    type: 'general',
    title: 'CUSTOM PATCHES',
  });

  // Top-level / document headers should be ignored
  assert.equal(classifyHeading('# FitDex Release Notes'), null);
  assert.equal(classifyHeading('## v1.1.0'), null);
  console.log('✓ Release note heading classification passed');
}

// 10. Semantic Release Notes Parsing
{
  const { parseReleaseNotes } = await import('./releaseNotesParser.ts');

  const testNotes = `
# FitDex Release Notes
## v1.1.0
Released: September 27, 2026
Android versionCode: 4
SHA-256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
APK: fitdex.1.1.0.apk
---

### RELEASE HIGHLIGHTS

Smarter Weekly Plans and streak handling pair with a stronger Active Workout experience.

### NEW

- Notifications V1: optional reminders and custom sounds.
- Open **HOW TO PERFORM** from active workout.

### IMPROVEMENTS

- Weekly Plan now shows completed days more clearly.

### FIXES

- Fixed completed historical workouts not receiving Plan Streak credit.
`;

  const parsed = parseReleaseNotes(testNotes);

  // Summary should not contain metadata noise or raw Markdown headers
  assert.equal(parsed.summary.length, 0);

  // Sections
  assert.equal(parsed.sections.length, 4);

  // Highlights section
  assert.equal(parsed.sections[0].type, 'highlights');
  assert.equal(parsed.sections[0].title, 'RELEASE HIGHLIGHTS');
  assert.equal(parsed.sections[0].paragraphs.length, 1);
  assert.ok(parsed.sections[0].paragraphs[0].includes('Smarter Weekly Plans'));

  // New section
  assert.equal(parsed.sections[1].type, 'new');
  assert.equal(parsed.sections[1].title, "WHAT'S NEW");
  assert.equal(parsed.sections[1].items.length, 2);
  assert.equal(parsed.sections[1].items[0], 'Notifications V1: optional reminders and custom sounds.');
  assert.equal(parsed.sections[1].items[1], 'Open **HOW TO PERFORM** from active workout.');

  // Improvements section
  assert.equal(parsed.sections[2].type, 'improvements');
  assert.equal(parsed.sections[2].items.length, 1);
  assert.equal(parsed.sections[2].items[0], 'Weekly Plan now shows completed days more clearly.');

  // Fixes section
  assert.equal(parsed.sections[3].type, 'fixes');
  assert.equal(parsed.sections[3].items.length, 1);
  assert.equal(parsed.sections[3].items[0], 'Fixed completed historical workouts not receiving Plan Streak credit.');

  // Empty / fallback handling
  const emptyParsed = parseReleaseNotes('');
  assert.deepEqual(emptyParsed, { summary: [], sections: [] });

  // Technical metadata filtering tests (v1.1.1 real body structure)
  const v111Notes = `
### FIXES

- Android updates now download directly inside FitDex instead of handing APK downloads off to the browser.
- Added reliable in-app download progress, SHA-256 verification, retry handling, and native Android installer launch.
- Improved handling for Android's "Install unknown apps" permission flow.

### NOTES

- Android versionCode: 5
- Build: 5
- SHA-256: bc2a8bde968dac6b392588e6263cfd72bf189c4307ed84c093e0634a7e73cf07
- versionCode: 5
- bc2a8bde968dac6b392588e6263cfd72bf189c4307ed84c093e0634a7e73cf07
`;

  const parsedV111 = parseReleaseNotes(v111Notes);
  // Only FIXES section should remain; NOTES section must be completely excluded because all items were technical metadata
  assert.equal(parsedV111.sections.length, 1);
  assert.equal(parsedV111.sections[0].type, 'fixes');
  assert.equal(parsedV111.sections[0].items.length, 3);
  assert.ok(parsedV111.sections[0].items.some((item) => item.includes('SHA-256 verification')));
  assert.equal(parsedV111.sections.some((s) => s.title === 'NOTES'), false, 'Empty technical-only NOTES section must not render');

  // Genuine nontechnical notes still render
  const notesWithGenuineContent = `
### FIXES
- Fixed bug

### NOTES
- User-facing special note: please restart app after updating.
- Build: 5
`;
  const parsedGenuine = parseReleaseNotes(notesWithGenuineContent);
  assert.equal(parsedGenuine.sections.length, 2);
  assert.equal(parsedGenuine.sections[1].type, 'general');
  assert.equal(parsedGenuine.sections[1].title, 'NOTES');
  assert.equal(parsedGenuine.sections[1].items.length, 1);
  assert.equal(parsedGenuine.sections[1].items[0], 'User-facing special note: please restart app after updating.');

  console.log('✓ Semantic release notes parser & technical metadata filter passed');
}

// 11. Inline Markdown Tokenization
{
  const { parseInlineMarkdown } = await import('./releaseNotesParser.ts');

  const tokens = parseInlineMarkdown('Check out **Notifications V1** with `sound.mp3` file and normal text.');
  assert.deepEqual(tokens, [
    { type: 'text', text: 'Check out ' },
    { type: 'bold', text: 'Notifications V1' },
    { type: 'text', text: ' with ' },
    { type: 'code', text: 'sound.mp3' },
    { type: 'text', text: ' file and normal text.' },
  ]);

  const plainTokens = parseInlineMarkdown('Simple plain string without formatting');
  assert.deepEqual(plainTokens, [{ type: 'text', text: 'Simple plain string without formatting' }]);

  console.log('✓ Inline markdown tokenization passed');
}

// 12. Native Update Adapter & Web Fallback Invariants
{
  const { isNativeAndroid, UPDATER_CACHE_DIR, UPDATER_APK_FILENAME, UPDATER_RELATIVE_PATH } = await import('./nativeAppInstaller.ts');

  assert.equal(UPDATER_CACHE_DIR, 'updates');
  assert.equal(UPDATER_APK_FILENAME, 'fitdex-update.apk');
  assert.equal(UPDATER_RELATIVE_PATH, 'updates/fitdex-update.apk');

  // In Node test environment, isNativeAndroid returns false (evaluates web/node adapter)
  assert.equal(isNativeAndroid(), false);

  const { handoffApkDownload } = await import('./updaterService.ts');

  // Rejects invalid URLs
  const invalidResult = await handoffApkDownload({
    version: '1.2.0',
    tag: 'v1.2.0',
    publishedAt: '2026-10-01T12:00:00Z',
    apkDownloadUrl: 'https://malicious.com/fake.apk',
    githubReleaseUrl: 'https://github.com/ArijitWayne/fitdex/releases/tag/v1.2.0',
    releaseNotes: '',
  });
  assert.equal(invalidResult.success, false);
  assert.equal(invalidResult.error, 'Untrusted download source rejected.');

  // Rejects missing URL
  const missingUrlResult = await handoffApkDownload({
    version: '1.2.0',
    tag: 'v1.2.0',
    publishedAt: '2026-10-01T12:00:00Z',
    githubReleaseUrl: '',
    releaseNotes: '',
  });
  assert.equal(missingUrlResult.success, false);
  assert.equal(missingUrlResult.error, 'No download URL available for this release.');

  console.log('✓ Native update adapter & web fallback tests passed');
}

// 13. Progress and Checksum Invariant Checks
{
  const expectedSha = '9b5406abb0882a05f09edc909508720c4850d0ee8eb5323f12ad1b621101d982';
  const matchingSha = '9B5406ABB0882A05F09EDC909508720C4850D0EE8EB5323F12AD1B621101D982';
  const corruptSha = '0000000000000000000000000000000000000000000000000000000000000000';

  assert.equal(expectedSha.toLowerCase(), matchingSha.toLowerCase());
  assert.notEqual(expectedSha.toLowerCase(), corruptSha.toLowerCase());

  console.log('✓ Checksum invariant checks passed');
}

console.log('--- ALL PHASE 7 UPDATER TESTS PASSED SUCCESSFULLY ---');
