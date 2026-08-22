interface PanelProps {
  children: React.ReactNode
  className?: string
  eyebrow?: string
  title?: string
}

export function Panel({ children, className = '', eyebrow, title }: PanelProps) {
  return (
    <section className={`panel ${className}`.trim()}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      {title ? <h2>{title}</h2> : null}
      {children}
    </section>
  )
}
