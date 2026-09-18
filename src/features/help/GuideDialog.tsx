import { useEffect, useRef, useState } from 'react'
import { useAudio } from '../audio/useAudio'
import { useBackNavigation } from '../navigation/useBackNavigation'

export interface GuideItemRow {
  label: string
  value?: string
  description?: string
}

export interface GuideSection {
  label?: string
  text?: string
  bullets?: readonly string[]
  items?: readonly GuideItemRow[]
}

export interface GuideStep {
  title: string
  sections: readonly GuideSection[]
}

export function GuideDialog({ eyebrow, steps, onClose }: { eyebrow: string; steps: readonly GuideStep[]; onClose: () => void }) {
  const [index, setIndex] = useState(0)
  const { playEffect } = useAudio()
  const headingRef = useRef<HTMLHeadingElement>(null)
  const isSingle = steps.length === 1
  const last = index === steps.length - 1
  const step = steps[index]
  const navigateBack = useBackNavigation('guide-dialog', true, () => { if (index > 0) setIndex((value) => value - 1); else onClose() }, 100)

  useEffect(() => { headingRef.current?.focus() }, [index])
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') navigateBack() }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [navigateBack])

  const directiveLabel = eyebrow.toUpperCase().includes('DIRECTIVE') || eyebrow.toUpperCase().includes('GUIDE') || eyebrow.toUpperCase().includes('REFERENCE')
    ? eyebrow.toUpperCase()
    : `${eyebrow.toUpperCase()} DIRECTIVE`

  return (
    <div className="guide-backdrop">
      <section className={`guide-dialog ${isSingle ? 'is-single' : ''}`} role="dialog" aria-modal="true" aria-labelledby="guide-title">
        <header className="guide-topline">
          <div className="guide-top-tag">
            <span>{eyebrow}</span>
          </div>
          {!isSingle ? (
            <button
              className="cmd-btn secondary compact"
              type="button"
              onClick={() => { playEffect('select'); onClose() }}
              aria-label="Skip guide"
            >
              Skip
            </button>
          ) : null}
        </header>

        {!isSingle ? (
          <div className="guide-progress">
            <div className="step-meta">
              <span>Step {index + 1} / {steps.length}</span>
              <span>{eyebrow}</span>
            </div>
            <div className="step-rail">
              {steps.map((_, stepIdx) => (
                <button
                  key={stepIdx}
                  type="button"
                  className={stepIdx === index ? 'active' : ''}
                  aria-label={`Step ${stepIdx + 1}`}
                  aria-current={stepIdx === index ? 'step' : undefined}
                  onClick={() => { playEffect('select'); setIndex(stepIdx) }}
                />
              ))}
            </div>
          </div>
        ) : null}

        <div className="guide-content">
          <div className="guide-objective-strip">
            <small>{directiveLabel}</small>
            <h2 id="guide-title" ref={headingRef} tabIndex={-1}>{step.title}</h2>
          </div>

          <div className="guide-sections-stack">
            {step.sections.map((section, sectionIndex) => (
              <section className="section-card" key={`${step.title}:${sectionIndex}`}>
                {section.label ? <h3>{section.label}</h3> : null}
                {section.text ? <p>{section.text}</p> : null}
                {section.items ? (
                  <div className="guide-item-grid">
                    {section.items.map((item) => (
                      <div key={item.label} className="guide-item-row">
                        <div className="guide-item-info">
                          <strong className="guide-item-label">{item.label}</strong>
                          {item.description ? <span className="guide-item-desc">{item.description}</span> : null}
                        </div>
                        {item.value ? <span className="guide-item-value">{item.value}</span> : null}
                      </div>
                    ))}
                  </div>
                ) : null}
                {section.bullets ? (
                  <ul>
                    {section.bullets.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </div>

        <footer className="guide-actions">
          {isSingle ? (
            <button className="cmd-btn primary" type="button" onClick={() => { playEffect('select'); onClose() }}>
              Close
            </button>
          ) : (
            <>
              <button
                className="cmd-btn secondary"
                type="button"
                disabled={index === 0}
                onClick={() => { void navigateBack() }}
              >
                Back
              </button>
              <button
                className="cmd-btn primary"
                type="button"
                onClick={() => { playEffect('select'); if (last) onClose(); else setIndex((value) => value + 1) }}
              >
                {last ? 'Done' : 'Next ›'}
              </button>
            </>
          )}
        </footer>
      </section>
    </div>
  )
}
