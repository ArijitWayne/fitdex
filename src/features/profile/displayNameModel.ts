export const MAX_DISPLAY_NAME_LENGTH = 30

export function normalizeDisplayName(value: string) {
  const normalized = value.trim()
  if ([...normalized].length > MAX_DISPLAY_NAME_LENGTH) throw new Error(`Display Name must be ${MAX_DISPLAY_NAME_LENGTH} characters or fewer.`)
  return normalized
}
