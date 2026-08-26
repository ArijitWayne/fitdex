/// <reference types="node" />
import assert from 'node:assert/strict'
import fs from 'node:fs'

const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8')) as { version: string; dependencies: Record<string, string>; devDependencies: Record<string, string>; scripts: Record<string, string> }
const capacitor = fs.readFileSync('capacitor.config.ts', 'utf8')
const vite = fs.readFileSync('vite.config.ts', 'utf8')
const main = fs.readFileSync('src/main.tsx', 'utf8')
const manifest = fs.readFileSync('android/app/src/main/AndroidManifest.xml', 'utf8')
const appGradle = fs.readFileSync('android/app/build.gradle', 'utf8')

assert.match(capacitor, /appId: 'com\.arijitbhaduri\.fitdex'/)
assert.match(capacitor, /appName: 'FitDex'/)
assert.match(capacitor, /webDir: 'dist'/)
assert.doesNotMatch(capacitor, /server:\s*\{/)
assert.equal(packageJson.dependencies['@capacitor/core'], '^8.5.0')
assert.equal(packageJson.devDependencies['@capacitor/cli'], '^8.5.0')
assert.equal(packageJson.devDependencies['@capacitor/android'], '^8.5.0')
assert.equal(packageJson.scripts['prepare:android-dist'], 'node scripts/prepare-android-dist.mjs')
assert.equal(packageJson.scripts['android:sync'], 'npm run build && npm run prepare:android-dist && npx cap sync android')
assert.match(packageJson.scripts['android:build'], /gradlew clean assembleDebug/)
assert.ok(fs.existsSync('android/app/src/main/AndroidManifest.xml'))
assert.match(manifest, /android:allowBackup="false"/)
assert.doesNotMatch(manifest, /usesCleartextTraffic="true"/)
assert.match(manifest, /orientation\|keyboardHidden\|keyboard\|screenSize/)
assert.match(appGradle, new RegExp(`versionName "${packageJson.version}"`))
assert.match(vite, /VitePWA\(/)
assert.match(vite, /injectRegister: false/)
assert.match(main, /Capacitor\.isNativePlatform\(\)/)
assert.match(main, /registerSW\(\{ immediate: true \}\)/)
assert.ok(fs.existsSync('public/pwa-icon.svg'))
const launcherForeground = fs.readFileSync('android/app/src/main/res/drawable/fitdex_launcher_foreground.xml', 'utf8')
const launcherIcon = fs.readFileSync('android/app/src/main/res/mipmap-anydpi-v26/ic_launcher.xml', 'utf8')
assert.match(launcherForeground, /FFD34D/)
assert.match(launcherForeground, /0B111B/)
assert.match(launcherIcon, /@drawable\/fitdex_launcher_foreground/)

console.log('Capacitor Android assertions passed: packaged dist config, matching v8 packages, Android shell, private backup policy, version alignment, browser-only PWA registration, and launcher assets')
