import { useEffect, useId, useRef, type ReactNode } from 'react'

export function ContextRail({
  eyebrow = 'Field Intel',
  title,
  children,
  actions,
}: {
  eyebrow?: string
  title: string
  children: ReactNode
  actions?: ReactNode
}) {
  const titleId = useId()
  const descriptionId = useId()
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => { headingRef.current?.focus() }, [])

  return (
    <div className="guide-backdrop context-guide-backdrop" role="presentation">
      <section className="guide-dialog context-guide-dialog" role="dialog" aria-modal="true" aria-labelledby={titleId} aria-describedby={descriptionId}>
        <header className="guide-topline">
          <div className="guide-top-tag"><span>{eyebrow}</span></div>
        </header>
        <div className="guide-content">
          <div className="guide-objective-strip">
            <small>{eyebrow.toUpperCase()} DIRECTIVE</small>
            <h2 id={titleId} ref={headingRef} tabIndex={-1}>{title}</h2>
          </div>
          <div className="guide-sections-stack">
            <section className="section-card context-guide-copy" id={descriptionId}>
              {children}
            </section>
          </div>
        </div>
        {actions ? <footer className="guide-actions context-guide-actions">{actions}</footer> : null}
      </section>
    </div>
  )
}
