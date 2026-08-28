export interface NavigationHistory<T> {
  current: () => T
  navigate: (next: T) => boolean
  back: () => T | undefined
  canGoBack: () => boolean
  entries: () => readonly T[]
}

export function createNavigationHistory<T>(root: T, equal: (left: T, right: T) => boolean = (left, right) => JSON.stringify(left) === JSON.stringify(right)): NavigationHistory<T> {
  let active = root
  const previous: T[] = []
  return {
    current: () => active,
    navigate(next) {
      if (equal(active, next)) return false
      previous.push(active)
      active = next
      return true
    },
    back() {
      const prior = previous.pop()
      if (prior === undefined) return undefined
      active = prior
      return active
    },
    canGoBack: () => previous.length > 0,
    entries: () => [...previous],
  }
}
