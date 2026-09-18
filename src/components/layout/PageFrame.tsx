import type { ComponentPropsWithoutRef } from 'react'

type PageFrameProps = ComponentPropsWithoutRef<'div'>

export function PageFrame({ className = '', ...props }: PageFrameProps) {
  return <div className={`fitdex-page-frame ${className}`.trim()} {...props} />
}
