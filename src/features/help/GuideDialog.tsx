import { useEffect, useRef, useState } from 'react'
import { useAudio } from '../audio/useAudio'
import { useBackNavigation } from '../navigation/useBackNavigation'

export interface GuideSection {
  label?: string
  text?: string
  bullets?: readonly string[]
}

export interface GuideStep {
  title: string
  sections: readonly GuideSection[]
}

export function GuideDialog({ eyebrow, steps, onClose }: { eyebrow: string; steps: readonly GuideStep[]; onClose: () => void }) {
  const [index, setIndex] = useState(0)
  const { playEffect } = useAudio()
  const headingRef = useRef<HTMLHeadingElement>(null)
  const last = index === steps.length - 1
  const step = steps[index]
  const navigateBack = useBackNavigation('guide-dialog', true, () => { if (index > 0) setIndex((value) => value - 1); else onClose() }, 100)

  useEffect(() => { headingRef.current?.focus() }, [index])
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') navigateBack() }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [navigateBack])

  return <div className="guide-backdrop"><section className="guide-dialog" role="dialog" aria-modal="true" aria-labelledby="guide-title">
    <div className="guide-topline"><span>{index + 1} / {steps.length}</span><button className="text-button" type="button" onClick={() => { playEffect('select'); onClose() }}>{steps.length > 1 ? 'Skip' : 'Close'}</button></div>
    <div className="guide-content"><p className="eyebrow">{eyebrow}</p><h2 id="guide-title" ref={headingRef} tabIndex={-1}>{step.title}</h2>{step.sections.map((section, sectionIndex) => <section key={`${step.title}:${sectionIndex}`}>{section.label ? <h3>{section.label}</h3> : null}{section.text ? <p>{section.text}</p> : null}{section.bullets ? <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul> : null}</section>)}</div>
    <div className="guide-actions"><button className="secondary-button" type="button" disabled={index === 0} onClick={() => { void navigateBack() }}>Back</button><button className="primary-button" type="button" onClick={() => { playEffect('select'); if (last) onClose(); else setIndex((value) => value + 1) }}>{last ? 'Done' : 'Next'}</button></div>
  </section></div>
}
