/// <reference types="node" />
import assert from 'node:assert/strict'
import { createId } from './createId.ts'

const uuidV4Pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

async function withCrypto<T>(cryptoValue: Crypto, action: () => T | Promise<T>) {
  const descriptor = Object.getOwnPropertyDescriptor(globalThis, 'crypto')
  Object.defineProperty(globalThis, 'crypto', { value: cryptoValue, configurable: true })
  try { return await action() }
  finally {
    if (descriptor) Object.defineProperty(globalThis, 'crypto', descriptor)
    else Reflect.deleteProperty(globalThis, 'crypto')
  }
}

function fallbackCrypto() {
  let seed = 0
  return {
    getRandomValues(values: Uint8Array) {
      values[0] = (seed >>> 24) & 0xff
      values[1] = (seed >>> 16) & 0xff
      values[2] = (seed >>> 8) & 0xff
      values[3] = seed & 0xff
      for (let index = 4; index < values.length; index += 1) values[index] = (seed * 29 + index) & 0xff
      seed += 1
      return values
    },
  } as unknown as Crypto
}

// A: native convenience API is preferred when present.
const nativeId = 'aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa'
await withCrypto({ randomUUID: () => nativeId } as unknown as Crypto, () => assert.equal(createId(), nativeId))

// B-C: Android/WebView-style getRandomValues-only fallback is UUID v4 shaped.
await withCrypto(fallbackCrypto(), () => {
  const id = createId()
  assert.match(id, uuidV4Pattern)
  assert.equal(id[14], '4')
  assert.match(id[19], /[89ab]/i)
})

// D: a reasonable fallback sample has no duplicates.
await withCrypto(fallbackCrypto(), () => {
  const ids = new Set(Array.from({ length: 512 }, () => createId()))
  assert.equal(ids.size, 512)
})

console.log('createId tests passed: randomUUID preference, getRandomValues UUID v4 fallback, format/version/variant, and uniqueness')
