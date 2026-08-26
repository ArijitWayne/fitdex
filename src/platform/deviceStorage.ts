export interface KeyValueStorage {
  get(key: string): string | null
  /** Returns whether the value was persisted to browser storage, not only memory. */
  set(key: string, value: string): boolean
  /** Returns whether removal was persisted to browser storage, not only memory. */
  remove(key: string): boolean
}

const memoryFallback = new Map<string, string>()

export const deviceStorage: KeyValueStorage = {
  get(key) {
    try {
      return window.localStorage.getItem(key) ?? memoryFallback.get(key) ?? null
    } catch {
      return memoryFallback.get(key) ?? null
    }
  },
  set(key, value) {
    memoryFallback.set(key, value)
    try {
      window.localStorage.setItem(key, value)
      return true
    } catch { return false }
  },
  remove(key) {
    memoryFallback.delete(key)
    try {
      window.localStorage.removeItem(key)
      return true
    } catch { return false }
  },
}
