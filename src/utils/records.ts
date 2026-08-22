export function createStableId() {
  return crypto.randomUUID()
}

export function nowIso() {
  return new Date().toISOString()
}
