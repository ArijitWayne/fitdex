import { createId } from './createId'

export function createStableId() {
  return createId()
}

export function nowIso() {
  return new Date().toISOString()
}
