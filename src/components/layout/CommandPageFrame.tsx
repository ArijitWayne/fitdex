import type { ReactNode } from 'react'

export interface CommandPageFrameProps {
  terminalTitle: string
  terminalMeta?: ReactNode
  children: ReactNode
  className?: string
  headerActions?: ReactNode
}

export function CommandPageFrame({
  terminalTitle,
  terminalMeta,
  children,
  className = '',
  headerActions,
}: CommandPageFrameProps) {
  return (
    <div className={`fitdex-page-frame fitdex-command-frame ${className}`.trim()}>
      <header className="fitdex-command-status">
        <span className="fitdex-command-title">
          <i className="status-terminal-dot" aria-hidden="true" />
          {terminalTitle}
        </span>
        <div className="fitdex-command-status-right">
          {terminalMeta ? <span className="fitdex-command-meta">{terminalMeta}</span> : null}
          {headerActions ? <div className="fitdex-command-status-actions">{headerActions}</div> : null}
        </div>
      </header>
      <div className="fitdex-command-stack">{children}</div>
    </div>
  )
}
