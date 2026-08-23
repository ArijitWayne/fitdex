/// <reference types="node" />
import assert from 'node:assert/strict'
import { getLocalDateKey, isLocalToday } from './localDate.ts'

const reference = new Date(2026, 7, 23, 0, 30)
assert.equal(getLocalDateKey(reference), '2026-08-23')
assert.equal(isLocalToday('2026-08-22', reference), false)
assert.equal(isLocalToday('2026-08-23', reference), true)
assert.equal(isLocalToday('2026-08-24', reference), false)

console.log('Local date tests passed: local calendar keys and deterministic Today equality')
