import { App as CapacitorApp } from '@capacitor/app'
import { Capacitor, type PluginListenerHandle } from '@capacitor/core'
import { useCallback, useEffect, useMemo, useRef } from 'react'
import { useAudio } from '../audio/useAudio'
import { BackNavigationContext } from './backNavigationContext'

interface BackHandlerEntry { priority: number; order: number; handler: () => void }

export function BackNavigationProvider({ children }: { children: React.ReactNode }) {
  const handlersRef = useRef(new Map<string, BackHandlerEntry>())
  const orderRef = useRef(0)
  const { playEffect } = useAudio()

  const registerBackHandler = useCallback((id: string, priority: number, handler: () => void) => {
    const order = orderRef.current += 1
    handlersRef.current.set(id, { priority, order, handler })
    return () => {
      const current = handlersRef.current.get(id)
      if (current?.order === order) handlersRef.current.delete(id)
    }
  }, [])

  const navigateBack = useCallback(() => {
    const entry = [...handlersRef.current.values()].sort((left, right) => right.priority - left.priority || right.order - left.order)[0]
    if (!entry) return false
    playEffect('select')
    entry.handler()
    return true
  }, [playEffect])

  useEffect(() => {
    if (!Capacitor.isNativePlatform()) return
    let listener: PluginListenerHandle | undefined
    let active = true
    void CapacitorApp.addListener('backButton', () => {
      if (!navigateBack()) void CapacitorApp.exitApp()
    }).then((handle) => { if (active) listener = handle; else void handle.remove() })
    return () => { active = false; if (listener) void listener.remove() }
  }, [navigateBack])

  const value = useMemo(() => ({ registerBackHandler, navigateBack }), [navigateBack, registerBackHandler])
  return <BackNavigationContext.Provider value={value}>{children}</BackNavigationContext.Provider>
}
