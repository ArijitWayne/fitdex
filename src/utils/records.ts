import { createId } from './createId.ts'

export function createStableId() {
  return createId()
}

export function nowIso() {
  return new Date().toISOString()
}
