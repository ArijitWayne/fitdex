/// <reference types="node" />
import assert from 'node:assert/strict'
import { dateFromLocalDateKey, getLocalDateKey, getLocalDayTimestampRange, isLocalToday, shiftLocalDateKey } from './localDate.ts'

const reference = new Date(2026, 7, 25, 0, 30)
assert.equal(getLocalDateKey(reference), '2026-08-25')
assert.equal(isLocalToday('2026-08-24', reference), false)
assert.equal(isLocalToday('2026-08-25', reference), true)
assert.equal(isLocalToday('2026-08-26', reference), false)
assert.equal(shiftLocalDateKey('2026-08-25', -1), '2026-08-24')
assert.equal(shiftLocalDateKey('2026-08-25', 1), '2026-08-26')
assert.equal(getLocalDateKey(dateFromLocalDateKey('2026-08-25')), '2026-08-25')
const range = getLocalDayTimestampRange('2026-08-25')
assert.equal(range.endTimestamp > range.startTimestamp, true)
assert.throws(() => dateFromLocalDateKey('2026-02-30'))

console.log('Local date tests passed: local calendar keys and deterministic Today equality')
