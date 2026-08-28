/// <reference types="node" />
import 'fake-indexeddb/auto'
import assert from 'node:assert/strict'
import Dexie from 'dexie'
import { isValidDisplayName, limitDisplayNameInput, MAX_DISPLAY_NAME_LENGTH, normalizeDisplayName } from './displayNameModel.ts'
import { resolveProfileGate } from './profileGateModel.ts'

await Dexie.delete('fitdex')
const { DATABASE_SCHEMA_VERSION, db } = await import('../../data/database.ts')
const { loadDisplayName, saveDisplayName } = await import('./profileRepository.ts')
await db.open()

assert.equal(DATABASE_SCHEMA_VERSION, 7)
assert.equal(await loadDisplayName(), '')
assert.equal(isValidDisplayName(''), false)
assert.equal(isValidDisplayName('   '), false)
assert.equal(isValidDisplayName('A'), true)
assert.equal(normalizeDisplayName('   Arijit   '), 'Arijit')
assert.equal(normalizeDisplayName('José 山田'), 'José 山田')
assert.equal(normalizeDisplayName('🙂'.repeat(MAX_DISPLAY_NAME_LENGTH)), '🙂'.repeat(MAX_DISPLAY_NAME_LENGTH))
assert.equal(normalizeDisplayName('a'.repeat(MAX_DISPLAY_NAME_LENGTH)), 'a'.repeat(MAX_DISPLAY_NAME_LENGTH))
assert.equal(limitDisplayNameInput('a'.repeat(MAX_DISPLAY_NAME_LENGTH + 1)), 'a'.repeat(MAX_DISPLAY_NAME_LENGTH))
assert.throws(() => normalizeDisplayName('a'.repeat(MAX_DISPLAY_NAME_LENGTH + 1)), /24 characters or fewer/)
assert.throws(() => normalizeDisplayName('   '), /required/)
assert.equal(resolveProfileGate('', false), 'onboarding')
assert.equal(resolveProfileGate('', true), 'migration')
assert.equal(resolveProfileGate('Arijit', true), 'none')

const timestamp = '2026-08-25T00:00:00.000Z'
await db.settings.add({ id: 'settings', units: 'imperial', createdAt: timestamp, updatedAt: timestamp })
assert.equal(await saveDisplayName('   Arijit   '), 'Arijit')
assert.equal(await loadDisplayName(), 'Arijit')
assert.equal((await db.settings.get('settings'))?.units, 'imperial', 'saving a name preserves unrelated settings')
assert.equal(await saveDisplayName('Bruce'), 'Bruce')
assert.equal(await loadDisplayName(), 'Bruce')
await assert.rejects(() => saveDisplayName(''), /required/)
assert.equal(await loadDisplayName(), 'Bruce')
assert.equal(await saveDisplayName('山田'), '山田')

db.close()
await db.open()
assert.equal(await loadDisplayName(), '山田', 'Display Name survives database reopen')
await assert.rejects(() => saveDisplayName('🙂'.repeat(MAX_DISPLAY_NAME_LENGTH + 1)), /24 characters or fewer/)
assert.equal(await loadDisplayName(), '山田', 'rejected input does not replace the persisted name')

db.close()
await Dexie.delete('fitdex')
console.log('Display Name tests passed: required, trimmed, 24-character limited, migration-gated, settings-compatible, and reload-persistent')
