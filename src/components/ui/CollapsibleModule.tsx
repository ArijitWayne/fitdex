import { useId, useState, type ReactNode } from 'react'

export interface CollapsibleModuleProps {
  id?: string
  titleId?: string
  title: string
  badge?: ReactNode
  summary?: ReactNode
  defaultExpanded?: boolean
  children: ReactNode
  className?: string
  onToggle?: (expanded: boolean) => void
}

export function CollapsibleModule({
  id,
  titleId,
  title,
  badge,
  summary,
  defaultExpanded = false,
  children,
  className = '',
  onToggle,
}: CollapsibleModuleProps) {
  const generatedId = useId()
  const moduleId = id || generatedId
  const contentId = `${moduleId}-content`
  const headingId = titleId || `${moduleId}-title`
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)

  const handleToggle = () => {
    const next = !isExpanded
    setIsExpanded(next)
    onToggle?.(next)
  }

  return (
    <section className={`collapsible-module ${isExpanded ? 'is-expanded' : ''} ${className}`.trim()} aria-labelledby={headingId}>
      <button
        className="collapsible-trigger"
        type="button"
        aria-expanded={isExpanded}
        aria-controls={contentId}
        onClick={handleToggle}
      >
        <div className="collapsible-header-left">
          <div className="collapsible-title-row">
            <h3 className="collapsible-title" id={headingId}>{title}</h3>
            {badge ? <span className="collapsible-badge">{badge}</span> : null}
          </div>
          {summary ? <span className="collapsible-summary">{summary}</span> : null}
        </div>
        <span className="collapsible-disclosure" aria-hidden="true">
          ▶
        </span>
      </button>
      <div className="collapsible-body" id={contentId}>
        {children}
      </div>
    </section>
  )
}
