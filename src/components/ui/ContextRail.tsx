import type { ReactNode } from 'react'

export function ContextRail({
  eyebrow = 'Field Intel',
  title,
  children,
  actions,
  footnote = 'Clears after real action, not page visit',
}: {
  eyebrow?: string
  title: string
  children: ReactNode
  actions?: ReactNode
  footnote?: string | null
}) {
  return (
    <aside className="context-rail" aria-label={title}>
      <div className="context-rail-body">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <div className="context-rail-copy">{children}</div>
        {footnote ? (
          <div className="context-rail-footnote">
            <span className="context-rail-dot" aria-hidden="true">●</span>
            <span>{footnote}</span>
          </div>
        ) : null}
      </div>
      {actions ? <div className="context-rail-actions">{actions}</div> : null}
    </aside>
  )
}
