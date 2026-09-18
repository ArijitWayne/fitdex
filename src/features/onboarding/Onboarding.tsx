import { BookOpen, ChartNoAxesColumnIncreasing, Check, Dumbbell, Palette, ShieldCheck, Sparkles, Utensils, UserRound } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import type { LucideIcon } from 'lucide-react'
import { useTheme } from '../../theme/useTheme'
import type { ThemeFamily } from '../../theme/theme'
import { AvatarSelector } from '../avatar/AvatarSelector'
import { completeTutorial, hasCompletedTutorial } from './tutorialStorage'
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
  { icon: Palette, section: 'Personalization', title: 'Choose Your Profile', body: 'Pick a theme and cosmetic champion. Both stay local and can be changed whenever you like.', path: 'SETTINGS → PERSONALIZE → APPEARANCE', kind: 'personalization' },
  { icon: Dumbbell, section: 'Training', title: 'Build Your Training', body: 'Create reusable routines or start an empty workout, then record tracking-specific sets and finish to save history.', path: 'WORKOUT → ROUTINES → ADD EXERCISE' },
  { icon: BookOpen, section: 'Exercise Dex', title: 'Explore 804 Exercises', body: 'Browse categories, instructions and demonstrations. Android can selectively download exercise media for offline use.', path: 'WORKOUT → EXERCISE DEX' },
  { icon: Utensils, section: 'Nutrition', title: 'Track Your Fuel', body: 'Log food into Breakfast, Lunch, Supper and Dinner. Daily totals and nutrition trends derive from those entries.', path: 'FOOD → MEAL → ADD FOOD' },
  { icon: ChartNoAxesColumnIncreasing, section: 'Progress & XP', title: 'Level Up With Facts', body: 'Completed activity powers Progress, personal records, XP and achievements from your real training and food records.', path: 'PROGRESS → ACHIEVEMENTS' },
  { icon: UserRound, section: 'Offline & Settings', title: 'Keep Your Data Yours', body: 'Your data stays local, works offline and can be moved with a .fitdex backup. Android can selectively download exercise media.', path: 'SETTINGS → DATA & HELP → BACKUP' },
]

const styleOptions: Array<{ value: ThemeFamily; label: string; detail: string }> = [
  { value: 'spartans', label: 'Spartans', detail: 'Steel • Petrol • Green • Bronze' },
  { value: 'amazonians', label: 'Amazonians', detail: 'Plum • Amethyst • Wine • Copper' },
]

export function Onboarding({ onClose, requiresDisplayName = false }: { onClose: () => void; requiresDisplayName?: boolean }) {
  const [profileInitialized, setProfileInitialized] = useState(!requiresDisplayName)
  const isReplay = !requiresDisplayName && hasCompletedTutorial()
  if (!profileInitialized) return <RequiredDisplayNamePrompt initialOnboarding onSaved={() => setProfileInitialized(true)} />
  return <FieldGuide onClose={onClose} isReplay={isReplay} />
}

function FieldGuide({ onClose, isReplay = false }: { onClose: () => void; isReplay?: boolean }) {
  const [index, setIndex] = useState(0)
  const { family, setFamily } = useTheme()
  const { playEffect } = useAudio()
  const headingRef = useRef<HTMLHeadingElement>(null)
  const lastSlide = index === slides.length - 1
  const slide = slides[index]

  useEffect(() => { headingRef.current?.focus() }, [index])

  function close() {
    completeTutorial()
    onClose()
  }
  const navigateBack = useBackNavigation('field-guide', true, () => { if (index > 0) setIndex((value) => value - 1); else close() }, 100)

  return (
    <div className="onboarding-backdrop guide-backdrop" role="dialog" aria-modal="true" aria-labelledby="tutorial-title">
      <div className={`onboarding-card guide-dialog ${slide.kind ? 'has-controls' : ''}`}>
        <header className="onboarding-topline guide-topline">
          <div className="guide-top-tag">
            <strong>FitDex Field Guide</strong>
            <span>{slide.section}</span>
          </div>
          <button
            className="cmd-btn secondary compact"
            type="button"
            onClick={() => { playEffect('select'); close() }}
            aria-label="Skip Field Guide"
          >
            Skip
          </button>
        </header>

        <nav className="guide-progress" aria-label="Field Guide topics">
          <div className="step-meta">
            <span>Step {index + 1} / {slides.length}</span>
            <span>{slide.section}</span>
          </div>
          <div className="step-rail">
            {slides.map((item, dotIndex) => (
              <button
                key={item.title}
                type="button"
                className={dotIndex === index ? 'active' : ''}
                aria-current={dotIndex === index ? 'step' : undefined}
                aria-label={`Step ${dotIndex + 1}: ${item.section}`}
                onClick={() => { playEffect('select'); setIndex(dotIndex) }}
              />
            ))}
          </div>
        </nav>

        <div className="onboarding-content guide-content">
          <div className="guide-objective-strip">
            <small>FIELD OBJECTIVE // {slide.section.toUpperCase()}</small>
            <h1 id="tutorial-title" ref={headingRef} tabIndex={-1}>{slide.title}</h1>
            <p>{slide.body}</p>
          </div>

          <div className="tutorial-path path-callout">
            <ShieldCheck size={16} aria-hidden="true" />
            <span>{slide.path}</span>
          </div>

          {slide.kind === 'personalization' ? (
            <fieldset className="tutorial-style-picker">
              <legend className="sr-only">Faction allegiance</legend>
              <div className="chips-row" style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
                {styleOptions.map((option) => (
                  <button
                    type="button"
                    className={`cmd-btn secondary ${family === option.value ? 'primary' : ''}`}
                    style={{ flex: 1, minHeight: '44px', padding: '0 10px', fontSize: '12px' }}
                    key={option.value}
                    onClick={() => { playEffect('select'); setFamily(option.value) }}
                  >
                    {option.label} {family === option.value ? <Check size={14} style={{ marginLeft: '4px' }} aria-hidden="true" /> : null}
                  </button>
                ))}
              </div>
            </fieldset>
          ) : null}

          {slide.kind === 'personalization' ? <AvatarSelector compact /> : null}
        </div>

        <footer className="onboarding-actions guide-actions">
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
            onClick={() => { playEffect('select'); if (lastSlide) close(); else setIndex((value) => value + 1) }}
          >
            {lastSlide ? (isReplay ? 'Done' : 'Enter FitDex') : 'Next ›'}
          </button>
        </footer>
      </div>
    </div>
  )
}
