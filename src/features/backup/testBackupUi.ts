/// <reference types="node" />
import assert from 'node:assert/strict'
import fs from 'node:fs'
import {
  FITDEX_BACKUP_ANDROID_ACCEPT,
  FITDEX_BACKUP_WEB_ACCEPT,
  parseFitDexBackup,
  readFitDexBackupFile,
  resolveBackupAccept,
} from './backupValidation.ts'
import { BackupValidationError } from './backupTypes.ts'

const settings = fs.readFileSync('src/features/settings/SettingsPage.tsx', 'utf8')
const ui = fs.readFileSync('src/features/backup/BackupSettings.tsx', 'utf8')
const repository = fs.readFileSync('src/features/backup/backupRepository.ts', 'utf8')
const validation = fs.readFileSync('src/features/backup/backupValidation.ts', 'utf8')
const serializer = fs.readFileSync('src/features/backup/backupSerializer.ts', 'utf8')
const css = fs.readFileSync('src/styles/app.css', 'utf8')

assert.match(settings, /<BackupSettings \/>/)
assert.doesNotMatch(settings, /Backup tools arrive in a future phase|Automatic Backups|Backup Frequency|Backup Location|Number of Backups Retained|SoonButton/)
assert.match(ui, /Protect your FitDex data with a portable backup/)
assert.match(ui, /> Create Backup</)
assert.match(ui, /Choose \.fitdex File/)
assert.match(ui, /Your data stays on your device unless you choose to save or share the backup elsewhere/)
assert.match(ui, /Exercise videos and built-in app assets are not included/)
assert.match(ui, /readFitDexBackupFile\(file\)/)
assert.match(ui, /Validated backup/)
assert.match(ui, /This will replace the FitDex data currently stored on this device/)
assert.match(ui, /role="alertdialog"/)
assert.match(ui, /Back Up Current Data First/)
assert.match(ui, /openCreate\(true\)/)
assert.match(ui, /createBackup\(dialog\.returnToRestore\)/)
assert.match(ui, /Replace & Restore/)
assert.match(ui, /Restore Complete/)
assert.match(ui, /externalPreferenceFailures/)
assert.match(ui, /Your FitDex data was restored, but this browser could not persist/)
assert.match(ui, /window\.location\.reload\(\)/)
assert.match(ui, /role=\{isError \? 'alert' : 'status'\}/)
assert.match(ui, /aria-modal="true"/)
assert.match(ui, /headingRef\.current\?\.focus\(\)/)
assert.match(ui, /event\.key === 'Escape'/)
assert.match(ui, /event\.key !== 'Tab'/)
assert.match(ui, /querySelectorAll<HTMLElement>/)
assert.match(ui, /accept=\{resolveBackupAccept\(\)\}/)
assert.match(ui, /import \{[^}]*resolveBackupAccept[^}]*\} from '\.\/backupValidation'/)

// Contract 1: Web/PWA keeps the FitDex/JSON accept filter
assert.equal(FITDEX_BACKUP_WEB_ACCEPT, '.fitdex,application/x-fitdex-backup,application/json')
assert.equal(resolveBackupAccept(false), '.fitdex,application/x-fitdex-backup,application/json')
assert.equal(resolveBackupAccept(), '.fitdex,application/x-fitdex-backup,application/json')

// Contract 2: Android native import permits generic MIME selection
assert.equal(FITDEX_BACKUP_ANDROID_ACCEPT, '*/*')
assert.equal(resolveBackupAccept(true), '*/*')

// Contract 3: Backup parsing remains content-based (JSON structure, format marker, schemaVersion, stores)
const validPayload = JSON.stringify({
  format: 'fitdex-backup',
  formatVersion: 1,
  appVersion: '1.0.0',
  databaseSchemaVersion: 7,
  createdAt: new Date().toISOString(),
  data: {
    localPreferences: { themeFamily: 'spartans', brightness: 'dark', selectedAvatarId: 'avatar:spartan-1', onboardingComplete: true },
    settings: [], exercises: [], exercisePreferences: [], customTags: [], workoutRoutines: [],
    routineExercises: [], workouts: [], workoutExercises: [], workoutSets: [], cardioSessions: [],
    foods: [], dailyNutrition: [], meals: [], foodEntries: [], rememberedFoods: [],
    foodLogEntries: [], customFoodCategories: [], bodyMeasurements: [], achievements: [],
    quests: [], xpHistory: [], journalRecords: [], xpEvents: [], planDaySnapshots: [],
    streakFreezeEvents: [], streakPauses: [], planChangeEvents: [], achievementUnlocks: [],
  },
})
const parsedFromContent = parseFitDexBackup(validPayload)
assert.equal(parsedFromContent.format, 'fitdex-backup')
assert.equal(parsedFromContent.formatVersion, 1)

// Contract 4: Invalid files still fail validation (clear error, no crash)
const invalidTextFile = new File(['this is not json'], 'notes.txt', { type: 'text/plain' })
await assert.rejects(async () => readFitDexBackupFile(invalidTextFile), (err: unknown) => {
  assert.ok(err instanceof BackupValidationError)
  assert.equal(err.code, 'invalid-json')
  return true
})

const invalidJsonFile = new File([JSON.stringify({ hello: 'world' })], 'random.json', { type: 'application/json' })
await assert.rejects(async () => readFitDexBackupFile(invalidJsonFile), (err: unknown) => {
  assert.ok(err instanceof BackupValidationError)
  assert.equal(err.code, 'invalid-backup')
  return true
})

// Contract 5: Valid .fitdex contents still pass
const validFitdexFile = new File([validPayload], 'fitdex-demo.fitdex', { type: 'application/octet-stream' })
const parsedFitdexFile = await readFitDexBackupFile(validFitdexFile)
assert.equal(parsedFitdexFile.format, 'fitdex-backup')

// Contract 6: No file-extension-only trust is introduced:
// - A file with .fitdex extension but corrupted content MUST fail
const fakeFitdexFile = new File(['{ "corrupted": true }'], 'trojan.fitdex', { type: 'application/octet-stream' })
await assert.rejects(async () => readFitDexBackupFile(fakeFitdexFile), (err: unknown) => {
  assert.ok(err instanceof BackupValidationError)
  assert.equal(err.code, 'invalid-backup')
  return true
})

// - A file with generic/arbitrary extension but valid FitDex content MUST succeed
const genericExtFile = new File([validPayload], 'backup.bin', { type: 'application/octet-stream' })
const parsedGenericFile = await readFitDexBackupFile(genericExtFile)
assert.equal(parsedGenericFile.format, 'fitdex-backup')
assert.match(ui, /createFitDexBackup\(APP_VERSION\)/)
assert.match(ui, /exportFitDexBackup\(backup\)/)
assert.match(ui, /Your FitDex data is unchanged\. Please try again\./)
assert.doesNotMatch(ui, /Backup export cancelled/)
assert.match(serializer, /export async function exportFitDexBackup/)
assert.match(serializer, /FITDEX_BACKUP_DOCUMENTS_DIR = 'FitDex'/)
assert.match(serializer, /Filesystem\.writeFile/)
assert.match(serializer, /Directory\.Documents/)
assert.match(serializer, /recursive: true/)
assert.match(serializer, /new Blob/)
assert.match(serializer, /URL\.createObjectURL/)
assert.match(serializer, /link\.download = fitDexBackupFilename/)
assert.match(serializer, /URL\.revokeObjectURL/)
assert.match(repository, /database\.transaction\('rw', tables/)
assert.match(repository, /where\('source'\)\.equals\('custom'\)\.delete\(\)/)
assert.match(repository, /restoreLocalPreferences\(backup, storage\)/)
assert.match(validation, /file\.size > FITDEX_BACKUP_MAX_BYTES/)
assert.match(css, /\.backup-dialog \{[^}]*100dvh[^}]*overflow-y: auto[^}]*overscroll-behavior: contain/s)
assert.match(css, /@media \(max-width: 374px\)[\s\S]*\.backup-preview > div, \.backup-complete-summary > div \{ grid-template-columns: 1fr;/)
assert.match(css, /@media \(min-width: 600px\)[\s\S]*\.backup-dialog-actions-three \{ grid-template-columns: repeat\(3,/)
assert.doesNotMatch(ui, /Cloud backup|automatic backup|synced/i)

console.log('Backup UI assertions passed: existing Settings integration, create/download, Android native Documents/FitDex export, validated preview, double confirmation, safety backup, completion reload, responsive dialogs, and accessibility')


