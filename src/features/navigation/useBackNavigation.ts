import { useContext, useEffect, useLayoutEffect, useRef } from 'react'
import { BackNavigationContext } from './backNavigationContext'

export function useBackNavigation(id: string, active: boolean, handler: () => void, priority = 10) {
  const context = useContext(BackNavigationContext)
  if (!context) throw new Error('useBackNavigation must be used within BackNavigationProvider.')
  const handlerRef = useRef(handler)
  useLayoutEffect(() => { handlerRef.current = handler }, [handler])
  useEffect(() => {
    if (!active) return
    return context.registerBackHandler(id, priority, () => handlerRef.current())
  }, [active, context, id, priority])
  return context.navigateBack
}
