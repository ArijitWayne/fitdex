/// <reference types="node" />
import assert from 'node:assert/strict'
import fs from 'node:fs'

const gradle = fs.readFileSync('android/app/build.gradle', 'utf8')
const gitignore = fs.readFileSync('.gitignore', 'utf8')
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'))
const helper = fs.readFileSync('scripts/create-release-artifact.mjs', 'utf8')
const template = fs.readFileSync('release-signing.properties.example', 'utf8')

for (const pattern of ['*.jks', '*.keystore', '*.p12', '*.pem', '*.key', 'release-signing.properties', 'release-artifacts/']) assert.match(gitignore, new RegExp(`^${pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`, 'm'))
assert.match(gradle, /release-signing\.properties/)
assert.match(gradle, /FITDEX_KEYSTORE_PATH/)
assert.match(gradle, /FITDEX_KEYSTORE_PASSWORD/)
assert.match(gradle, /FITDEX_KEY_ALIAS/)
assert.match(gradle, /FITDEX_KEY_PASSWORD/)
assert.match(gradle, /Release builds never use debug signing/)
assert.match(gradle, /signingConfig signingConfigs\.release/)
assert.equal(packageJson.scripts['android:release'], 'npm run android:sync && cd android && ./gradlew clean assembleRelease && cd .. && node scripts/create-release-artifact.mjs')
assert.equal(packageJson.scripts['release:artifact'], 'node scripts/create-release-artifact.mjs')
assert.match(helper, /fitdex\.\$\{packageJson\.version\}\.apk/)
assert.match(helper, /createHash\('sha256'\)/)
assert.match(helper, /app-release\.apk/)
assert.match(template, /storeFile=\/absolute\/path\/to\/fitdex-release\.jks/)
assert.match(template, /storePassword=CHANGE_ME/)
assert.match(template, /keyAlias=fitdex/)
assert.match(template, /keyPassword=CHANGE_ME/)
assert.equal(packageJson.version, '1.0.0')
assert.match(gradle, /versionCode 2/)

console.log('Android release-signing static tests passed: ignored secrets, local/CI configuration, fail-closed release signing, deterministic artifact naming, checksum, and version source.')
