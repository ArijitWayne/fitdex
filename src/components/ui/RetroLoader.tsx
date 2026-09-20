interface RetroLoaderProps {
  label?: string
  className?: string
}

export function RetroLoader({ label = 'LOADING...', className = '' }: RetroLoaderProps) {
  return <span className={`retro-loader ${className}`.trim()} role="status" aria-live="polite"><span className="retro-loader-blocks" aria-hidden="true"><i /><i /><i /><i /></span><span>{label}</span></span>
}
