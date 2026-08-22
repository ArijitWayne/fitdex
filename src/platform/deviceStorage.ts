export interface KeyValueStorage {
  get(key: string): string | null
  set(key: string, value: string): void
}

const memoryFallback = new Map<string, string>()

export const deviceStorage: KeyValueStorage = {
  get(key) {
    try {
      return window.localStorage.getItem(key)
    } catch {
      return memoryFallback.get(key) ?? null
    }
  },
  set(key, value) {
    try {
      window.localStorage.setItem(key, value)
    } catch {
      memoryFallback.set(key, value)
    }
  },
}
