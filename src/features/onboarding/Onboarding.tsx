import { ChartNoAxesColumnIncreasing, Check, Database, Dumbbell, Palette, RefreshCw, ShieldCheck, Sparkles, Utensils, UserRound } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import type { LucideIcon } from 'lucide-react'
import { useTheme } from '../../theme/useTheme'
import type { ThemeFamily } from '../../theme/theme'
import { AvatarSelector } from '../avatar/AvatarSelector'
import { completeTutorial } from './tutorialStorage'

interface TutorialSlide {
  icon: LucideIcon
  title: string
  body: string
  kind?: 'style' | 'avatar'
}

const slides: TutorialSlide[] = [
  { icon: Sparkles, title: 'Welcome to FitDex', body: 'A private fitness tracker with the focused spirit of a retro RPG.' },
  { icon: Palette, title: 'Choose Your Style', body: 'Pick a theme family. Brightness can always be changed separately.', kind: 'style' },
  { icon: UserRound, title: 'Choose Your Champion', body: 'Choose a cosmetic avatar for your FitDex profile.', kind: 'avatar' },
  { icon: Dumbbell, title: 'Your Workout Dex', body: 'Build routines and record strength or cardio sessions.' },
  { icon: Utensils, title: 'Track Your Fuel', body: 'Keep meals and nutrition alongside your training.' },
  { icon: ShieldCheck, title: 'Level Up', body: 'Consistency can earn XP and complete daily quests.' },
  { icon: ChartNoAxesColumnIncreasing, title: 'Your Progress', body: 'Follow measurements and training trends over time.' },
  { icon: Database, title: 'Your Data, Your Device', body: 'Your fitness records stay local and work offline.' },
  { icon: RefreshCw, title: 'Backup & Restore', body: 'Portable backups will make moving devices straightforward.' },
  { icon: Check, title: 'Ready', body: 'Your FitDex is ready. Train at your own pace.' },
]

const styleOptions: Array<{ value: ThemeFamily; label: string; detail: string }> = [
  { value: 'spartans', label: 'Spartans', detail: 'Steel • Petrol • Green • Bronze' },
  { value: 'amazonians', label: 'Amazonians', detail: 'Plum • Amethyst • Wine • Copper' },
]

export function Onboarding({ onClose }: { onClose: () => void }) {
  const [index, setIndex] = useState(0)
  const { family, setFamily } = useTheme()
  const headingRef = useRef<HTMLHeadingElement>(null)
  const lastSlide = index === slides.length - 1
  const slide = slides[index]
  const SlideIcon = slide.icon

  useEffect(() => { headingRef.current?.focus() }, [index])

  function close() {
    completeTutorial()
    onClose()
  }

  return (
    <div className="onboarding-backdrop" role="dialog" aria-modal="true" aria-labelledby="tutorial-title">
      <div className={`onboarding-card ${slide.kind ? 'has-controls' : ''}`}>
        <div className="onboarding-topline"><span>{String(index + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}</span><button className="text-button" type="button" onClick={close}>Skip</button></div>
        <div className="onboarding-content">
          <div className="tutorial-glyph" aria-hidden="true"><SlideIcon size={36} strokeWidth={1.75} /></div>
          <p className="eyebrow">FitDex field guide</p>
          <h1 id="tutorial-title" ref={headingRef} tabIndex={-1}>{slide.title}</h1>
          <p>{slide.body}</p>
          {slide.kind === 'style' ? (
            <fieldset className="tutorial-style-picker">
              <legend className="sr-only">Theme family</legend>
              {styleOptions.map((option) => (
                <label className={family === option.value ? 'tutorial-style-option is-selected' : 'tutorial-style-option'} key={option.value}>
                  <input type="radio" name="tutorial-theme-family" checked={family === option.value} onChange={() => setFamily(option.value)} />
                  <span className={`family-swatch family-swatch-${option.value}`} aria-hidden="true"><i /><i /><i /></span>
                  <span><strong>{option.label}</strong><small>{option.detail}</small></span>
                  <Check size={17} aria-hidden="true" />
                </label>
              ))}
            </fieldset>
          ) : null}
          {slide.kind === 'avatar' ? <AvatarSelector compact /> : null}
        </div>
        <div className="tutorial-dots" aria-label={`Slide ${index + 1} of ${slides.length}`}>{slides.map((item, dotIndex) => <span className={dotIndex === index ? 'is-active' : ''} key={item.title} />)}</div>
        <div className="onboarding-actions">
          <button className="secondary-button" type="button" disabled={index === 0} onClick={() => setIndex((value) => value - 1)}>Back</button>
          <button className="primary-button" type="button" onClick={() => lastSlide ? close() : setIndex((value) => value + 1)}>{lastSlide ? 'Finish' : 'Next'}</button>
        </div>
      </div>
    </div>
  )
}
