/// <reference types="node" />
import assert from 'node:assert/strict'
import fs from 'node:fs'
import { createNavigationHistory } from './navigationHistory.ts'

const history = createNavigationHistory('home')
assert.equal(history.navigate('workout'), true)
assert.equal(history.navigate('workout'), false, 'duplicate destinations do not fill history')
assert.equal(history.navigate('exercise-dex'), true)
assert.deepEqual(history.entries(), ['home', 'workout'])
assert.equal(history.back(), 'workout')
assert.equal(history.back(), 'home')
assert.equal(history.back(), undefined, 'root Back does not fabricate a page')
assert.equal(history.canGoBack(), false)

const provider = fs.readFileSync('src/features/navigation/BackNavigationProvider.tsx', 'utf8')
assert.match(provider, /CapacitorApp\.addListener\('backButton'/)
assert.match(provider, /if \(!navigateBack\(\)\) void CapacitorApp\.exitApp\(\)/)
assert.match(provider, /listener\.remove\(\)/)
assert.match(provider, /playEffect\('select'\)/)

console.log('Navigation history tests passed: meaningful pushes, duplicate suppression, pop-without-push, root behavior, and Capacitor Back integration')
