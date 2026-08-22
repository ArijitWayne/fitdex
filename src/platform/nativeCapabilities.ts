export interface FileTransferAdapter {
  exportFile(name: string, contents: Blob): Promise<void>
  importFile(acceptedTypes: string[]): Promise<File | null>
}

export interface HapticsAdapter {
  impact(style: 'light' | 'medium' | 'heavy'): Promise<void>
}

export interface NotificationsAdapter {
  requestPermission(): Promise<boolean>
}

export interface WakeLockAdapter {
  keepAwake(): Promise<() => Promise<void>>
}

// These contracts intentionally have no implementation in Phase 0. Future web
// and Capacitor adapters can live behind them without changing feature code.
