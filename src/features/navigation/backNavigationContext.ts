import { createContext } from 'react'

export interface BackNavigationContextValue {
  registerBackHandler: (id: string, priority: number, handler: () => void) => () => void
  navigateBack: () => boolean
}

export const BackNavigationContext = createContext<BackNavigationContextValue | undefined>(undefined)
