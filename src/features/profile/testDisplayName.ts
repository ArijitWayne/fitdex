/// <reference types="node" />
import 'fake-indexeddb/auto'
import assert from 'node:assert/strict'
import Dexie from 'dexie'
import { MAX_DISPLAY_NAME_LENGTH, normalizeDisplayName } from './displayNameModel.ts'

await Dexie.delete('fitdex')
const { DATABASE_SCHEMA_VERSION, db } = await import('../../data/database.ts')
const { loadDisplayName, saveDisplayName } = await import('./profileRepository.ts')
await db.open()

assert.equal(DATABASE_SCHEMA_VERSION, 7)
assert.equal(await loadDisplayName(), '')
assert.equal(normalizeDisplayName('   Arijit   '), 'Arijit')
assert.equal(normalizeDisplayName('José 山田'), 'José 山田')
assert.equal(normalizeDisplayName('🙂'.repeat(MAX_DISPLAY_NAME_LENGTH)), '🙂'.repeat(MAX_DISPLAY_NAME_LENGTH))
assert.throws(() => normalizeDisplayName('a'.repeat(MAX_DISPLAY_NAME_LENGTH + 1)), /30 characters or fewer/)

const timestamp = '2026-08-25T00:00:00.000Z'
await db.settings.add({ id: 'settings', units: 'imperial', createdAt: timestamp, updatedAt: timestamp })
assert.equal(await saveDisplayName('   Arijit   '), 'Arijit')
assert.equal(await loadDisplayName(), 'Arijit')
assert.equal((await db.settings.get('settings'))?.units, 'imperial', 'saving a name preserves unrelated settings')
assert.equal(await saveDisplayName('Bruce'), 'Bruce')
assert.equal(await loadDisplayName(), 'Bruce')
assert.equal(await saveDisplayName(''), '')
assert.equal(await loadDisplayName(), '')
assert.equal((await db.settings.get('settings'))?.displayName, undefined)
assert.equal(await saveDisplayName('山田'), '山田')

db.close()
await db.open()
assert.equal(await loadDisplayName(), '山田', 'Display Name survives database reopen')
await assert.rejects(() => saveDisplayName('🙂'.repeat(31)), /30 characters or fewer/)
assert.equal(await loadDisplayName(), '山田', 'rejected input does not replace the persisted name')

db.close()
await Dexie.delete('fitdex')
console.log('Display Name tests passed: optional, trimmed, editable, clearable, Unicode-safe, length-limited, settings-compatible, and reload-persistent')
