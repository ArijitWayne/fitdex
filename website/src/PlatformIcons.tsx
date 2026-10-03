type IosEcosystemGlyphProps = {
  className?: string
}

export function IosEcosystemGlyph({ className }: IosEcosystemGlyphProps) {
  const classes = ['ios-ecosystem-glyph', className].filter(Boolean).join(' ')

  return <svg className={classes} viewBox="0 0 32 32" aria-hidden="true" shapeRendering="crispEdges">
    <path fill="currentColor" d="M9 3h5v2h2v3h-5V6H9zM15 5h3v4h-3z" />
    <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M10 10h4V8h5v2h4v2h3v4h2v5h-2v4h-3v3h-4v2h-6v-2H9v-3H6v-4H4v-5h2v-4h4zM21 15h3v2h2v4h-2v2h-3z" />
  </svg>
}
