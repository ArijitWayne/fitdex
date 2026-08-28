export const MAX_DISPLAY_NAME_LENGTH = 24

export function displayNameLength(value: string) {
  return [...value].length
}

export function limitDisplayNameInput(value: string) {
  return [...value].slice(0, MAX_DISPLAY_NAME_LENGTH).join('')
}

export function isValidDisplayName(value: string) {
  const normalized = value.trim()
  return normalized.length > 0 && displayNameLength(normalized) <= MAX_DISPLAY_NAME_LENGTH
}

export function normalizeDisplayName(value: string) {
  const normalized = value.trim()
  if (!normalized) throw new Error('Display Name is required.')
  if (displayNameLength(normalized) > MAX_DISPLAY_NAME_LENGTH) throw new Error(`Display Name must be ${MAX_DISPLAY_NAME_LENGTH} characters or fewer.`)
  return normalized
}
