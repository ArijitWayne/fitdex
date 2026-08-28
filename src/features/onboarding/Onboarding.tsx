import { BookOpen, ChartNoAxesColumnIncreasing, Check, Dumbbell, Palette, ShieldCheck, Sparkles, Utensils, UserRound } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import type { LucideIcon } from 'lucide-react'
import { useTheme } from '../../theme/useTheme'
import type { ThemeFamily } from '../../theme/theme'
import { AvatarSelector } from '../avatar/AvatarSelector'
import { completeTutorial } from './tutorialStorage'
import { useAudio } from '../audio/useAudio'
import { useBackNavigation } from '../navigation/useBackNavigation'
import { RequiredDisplayNamePrompt } from '../profile/RequiredDisplayNamePrompt'

interface TutorialSlide {
  icon: LucideIcon
  title: string
  body: string
  section: string
  path: string
  kind?: 'personalization'
}

const slides: TutorialSlide[] = [
  { icon: Sparkles, section: 'Home', title: 'Your Local Fitness Quest', body: 'Home connects today’s training, nutrition, plan, XP and recent progress without an account.', path: 'HOME → TODAY → QUICK ACCESS' },
  { icon: Palette, section: 'Personalization', title: 'Choose Your Profile', body: 'Pick a theme and cosmetic champion. Both stay local and can be changed whenever you like.', path: 'SETTINGS → PROFILE → APPEARANCE', kind: 'personalization' },
  { icon: Dumbbell, section: 'Training', title: 'Build Your Training', body: 'Create reusable routines or start an empty workout, then record tracking-specific sets and finish to save history.', path: 'WORKOUT → ROUTINES → ADD EXERCISE' },
  { icon: BookOpen, section: 'Exercise Dex', title: 'Explore 804 Exercises', body: 'Browse categories, instructions and demonstrations. Android can selectively download exercise media for offline use.', path: 'WORKOUT → EXERCISE DEX' },
  { icon: Utensils, section: 'Nutrition', title: 'Track Your Fuel', body: 'Log food into Breakfast, Lunch, Supper and Dinner. Daily totals and nutrition trends derive from those entries.', path: 'FOOD → MEAL → ADD FOOD' },
  { icon: ChartNoAxesColumnIncreasing, section: 'Progress & XP', title: 'Level Up With Facts', body: 'Completed activity powers Progress, personal records, XP and achievements from your real training and food records.', path: 'PROGRESS → RECORDS → ACHIEVEMENTS' },
  { icon: UserRound, section: 'Offline & Settings', title: 'Keep Your Data Yours', body: 'Your data stays local, works offline and can be moved with a .fitdex backup. Android can selectively download exercise media.', path: 'SETTINGS → BACKUP → EXERCISE MEDIA' },
]

const styleOptions: Array<{ value: ThemeFamily; label: string; detail: string }> = [
  { value: 'spartans', label: 'Spartans', detail: 'Steel • Petrol • Green • Bronze' },
  { value: 'amazonians', label: 'Amazonians', detail: 'Plum • Amethyst • Wine • Copper' },
]

export function Onboarding({ onClose, requiresDisplayName = false }: { onClose: () => void; requiresDisplayName?: boolean }) {
  const [profileInitialized, setProfileInitialized] = useState(!requiresDisplayName)
  if (!profileInitialized) return <RequiredDisplayNamePrompt initialOnboarding onSaved={() => setProfileInitialized(true)} />
  return <FieldGuide onClose={onClose} />
}

function FieldGuide({ onClose }: { onClose: () => void }) {
  const [index, setIndex] = useState(0)
  const { family, setFamily } = useTheme()
  const { playEffect } = useAudio()
  const headingRef = useRef<HTMLHeadingElement>(null)
  const lastSlide = index === slides.length - 1
  const slide = slides[index]
  const SlideIcon = slide.icon

  useEffect(() => { headingRef.current?.focus() }, [index])

  function close() {
    completeTutorial()
    onClose()
  }
  const navigateBack = useBackNavigation('field-guide', true, () => { if (index > 0) setIndex((value) => value - 1); else close() }, 100)

  return (
    <div className="onboarding-backdrop" role="dialog" aria-modal="true" aria-labelledby="tutorial-title">
      <div className={`onboarding-card ${slide.kind ? 'has-controls' : ''}`}>
        <header className="onboarding-topline"><div><strong>FitDex Field Guide</strong><span>{slide.section}</span></div><span>{index + 1} / {slides.length}</span><button className="text-button" type="button" onClick={() => { playEffect('select'); close() }}>{lastSlide ? 'Close' : 'Skip'}</button></header>
        <nav className="tutorial-dots" aria-label="Field Guide topics">{slides.map((item, dotIndex) => <button type="button" className={dotIndex === index ? 'is-active' : ''} aria-current={dotIndex === index ? 'step' : undefined} aria-label={`${dotIndex + 1}: ${item.section}`} onClick={() => { playEffect('select'); setIndex(dotIndex) }} key={item.title}><span aria-hidden="true" /></button>)}</nav>
        <div className="onboarding-content">
          <div className="tutorial-glyph" aria-hidden="true"><SlideIcon size={36} strokeWidth={1.75} /></div>
          <p className="eyebrow">{slide.section}</p>
          <h1 id="tutorial-title" ref={headingRef} tabIndex={-1}>{slide.title}</h1>
          <p>{slide.body}</p>
          <div className="tutorial-path"><ShieldCheck size={17} aria-hidden="true" /><span>{slide.path}</span></div>
          {slide.kind === 'personalization' ? (
            <fieldset className="tutorial-style-picker">
              <legend className="sr-only">Theme family</legend>
              {styleOptions.map((option) => (
                <label className={family === option.value ? 'tutorial-style-option is-selected' : 'tutorial-style-option'} key={option.value}>
                  <input type="radio" name="tutorial-theme-family" checked={family === option.value} onChange={() => { playEffect('select'); setFamily(option.value) }} />
                  <span className={`family-swatch family-swatch-${option.value}`} aria-hidden="true"><i /><i /><i /></span>
                  <span><strong>{option.label}</strong><small>{option.detail}</small></span>
                  <Check size={17} aria-hidden="true" />
                </label>
              ))}
            </fieldset>
          ) : null}
          {slide.kind === 'personalization' ? <AvatarSelector compact /> : null}
        </div>
        <div className="onboarding-actions">
          <button className="secondary-button" type="button" disabled={index === 0} onClick={() => { void navigateBack() }}>← Back</button>
          <button className="primary-button" type="button" onClick={() => { playEffect('select'); if (lastSlide) close(); else setIndex((value) => value + 1) }}>{lastSlide ? 'Enter FitDex' : 'Next →'}</button>
        </div>
      </div>
    </div>
  )
}
