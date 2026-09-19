import { Award, CalendarCheck, ChartNoAxesColumnIncreasing, Dumbbell, Music, ShieldCheck, Sparkles, Utensils } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import type { LucideIcon } from 'lucide-react'
import { useTheme } from '../../theme/useTheme'
import type { ThemeFamily } from '../../theme/theme'
import { AvatarSelector } from '../avatar/AvatarSelector'
import { completeTutorial, hasCompletedTutorial } from './tutorialStorage'
import { useAudio } from '../audio/useAudio'
import { useBackNavigation } from '../navigation/useBackNavigation'
import { RequiredDisplayNamePrompt } from '../profile/RequiredDisplayNamePrompt'
import type { BrightnessPreference } from '../../theme/theme'
import type { NutritionActivityLevel, NutritionGoal, NutritionSex } from '../../data/models'
import { calculateRmr, calculateSuggestedCalorieTargets, calculateSuggestedProteinTarget, calculateTdee } from '../nutritionTargets/nutritionTargetCalculator'
import { saveNutritionTargets } from '../nutritionTargets/nutritionTargetRepository'
import { acknowledgeFirstUse } from '../help/firstUseGuidance'

interface TutorialSlide {
  icon: LucideIcon
  title: string
  body: string
  section: string
  path: string
}

const slides: TutorialSlide[] = [
  {
    icon: Sparkles,
    section: 'Home',
    title: 'Your Local Fitness Quest',
    body: 'Home connects today’s training, nutrition, plan, XP and recent progress without an account.',
    path: 'HOME → TODAY → QUICK ACCESS',
  },
  {
    icon: Dumbbell,
    section: 'Workout',
    title: 'Build Your Training',
    body: 'Build a one-off session or create reusable routines, then record tracking-specific sets and finish to save history.',
    path: 'WORKOUT → BUILD TODAY → EXERCISE DEX',
  },
  {
    icon: Utensils,
    section: 'Food',
    title: 'Track Your Fuel',
    body: 'Log food into Breakfast, Lunch, Supper and Dinner. Daily totals and nutrition trends derive from those entries.',
    path: 'FOOD → MEAL → ADD FOOD',
  },
  {
    icon: CalendarCheck,
    section: 'Weekly Plan & Streaks',
    title: 'Your Plan. Your Campaign.',
    body: 'FitDex can turn your week into training commitments. Routine, Workout, or Rest days protect streak continuity, and Plan Streaks measure adherence with built-in protection for missed days.',
    path: 'WORKOUT → WEEKLY PLAN → BUILD YOUR WEEK',
  },
  {
    icon: ChartNoAxesColumnIncreasing,
    section: 'Progress',
    title: 'Level Up With Facts',
    body: 'Completed activity powers Progress, personal records, XP and achievements from your real training and food records.',
    path: 'PROGRESS → CHARTS & RECORDS',
  },
  {
    icon: Award,
    section: 'Achievements',
    title: 'Forge Your Legacy',
    body: 'Unlock achievements and climb ranks through consistent workouts, PRs, and food tracking. All progress stays local.',
    path: 'PROGRESS → ACHIEVEMENTS',
  },
  {
    icon: Music,
    section: 'Battle Music',
    title: 'Focus Your Energy',
    body: 'Train with built-in 8-bit battle tracks like Warrior, Hardened, and Villain to fuel your sessions without leaving the app.',
    path: 'HOME → BATTLE MUSIC → SOUND TRACK',
  },
]

const styleOptions: Array<{ value: ThemeFamily; label: string }> = [
  { value: 'spartans', label: 'Spartans' },
  { value: 'amazonians', label: 'Amazonians' },
]

export function Onboarding({ onClose, requiresDisplayName = false, isFirstLaunch }: { onClose: () => void; requiresDisplayName?: boolean; isFirstLaunch?: boolean }) {
  const isFirstRun = isFirstLaunch ?? requiresDisplayName
  const isReplay = !isFirstRun && hasCompletedTutorial()
  if (isFirstRun) return <FirstLaunchMission onClose={onClose} />
  return <FieldGuide onClose={onClose} isReplay={isReplay} />
}

const modeOptions: Array<{ value: BrightnessPreference; label: string }> = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
]

function FirstLaunchMission({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(0)
  const [nutritionPhase, setNutritionPhase] = useState<'intro' | 'entry' | 'result'>('intro')
  const { family, brightness, setFamily, setBrightness } = useTheme()
  const { playEffect } = useAudio()
  const [goal, setGoal] = useState<NutritionGoal>('maintain')
  const [age, setAge] = useState('30')
  const [sex, setSex] = useState<NutritionSex>('female')
  const [heightCm, setHeightCm] = useState('165')
  const [weightKg, setWeightKg] = useState('65')
  const [activityLevel, setActivityLevel] = useState<NutritionActivityLevel>('moderate')
  const [nutritionError, setNutritionError] = useState('')
  const [saving, setSaving] = useState(false)

  useBackNavigation('first-launch-mission', step !== 1 && step < 6, () => {
    if (step === 5) {
      if (nutritionPhase === 'result') { playEffect('select'); setNutritionPhase('entry'); return }
      if (nutritionPhase === 'entry') { playEffect('select'); setNutritionPhase('intro'); return }
    }
    if (step > 0) { playEffect('select'); setStep((value) => value - 1) }
  }, 105)

  const advance = () => { playEffect('select'); setStep((value) => value + 1) }
  const goBack = () => {
    playEffect('select')
    if (step === 5) {
      if (nutritionPhase === 'result') { setNutritionPhase('entry'); return }
      if (nutritionPhase === 'entry') { setNutritionPhase('intro'); return }
    }
    setStep((value) => value - 1)
  }

  const values = { age: Number(age), sex, heightCm: Number(heightCm), weightKg: Number(weightKg), activityLevel }
  let calculated: { calorieTarget: number; proteinTargetGrams: number; tdee: number } | undefined
  try {
    const tdee = calculateTdee(calculateRmr(values), activityLevel)
    calculated = { tdee, calorieTarget: calculateSuggestedCalorieTargets(tdee, goal).defaultTarget, proteinTargetGrams: calculateSuggestedProteinTarget(values.weightKg, activityLevel) }
  } catch { calculated = undefined }

  const skipNutrition = async () => {
    playEffect('select')
    await acknowledgeFirstUse('nutritionSetup', 'skipped')
    setStep(6)
  }

  const saveNutrition = async () => {
    if (!calculated) { setNutritionError('Enter an age from 18 to 120 and positive height and weight values.'); return }
    setSaving(true); setNutritionError('')
    try {
      await saveNutritionTargets({ enabled: true, goal, ...values, calorieTarget: calculated.calorieTarget, proteinTargetGrams: calculated.proteinTargetGrams, calorieTargetSource: 'calculated' })
      await acknowledgeFirstUse('nutritionSetup', 'completed')
      playEffect('add')
      setStep(6)
    } catch (reason) {
      setNutritionError(reason instanceof Error ? reason.message : 'Nutrition targets could not be saved.')
    } finally {
      setSaving(false)
    }
  }

  if (step === 1) return <RequiredDisplayNamePrompt initialOnboarding onSaved={() => setStep(2)} />
  if (step >= 6) return <FieldGuide onClose={onClose} />

  const titles = [
    'Welcome to FitDex',
    '',
    'Choose Your Faction',
    'Choose Your Mode',
    'Choose Your Champion',
    nutritionPhase === 'intro' ? 'Optional Nutrition Targets' : nutritionPhase === 'entry' ? 'Build Your Nutrition Baseline' : 'Your Starting Targets',
  ]

  return <div className="onboarding-backdrop guide-backdrop" role="dialog" aria-modal="true" aria-labelledby="mission-brief-title">
    <section className="onboarding-card guide-dialog has-controls mission-brief">
      <header className="onboarding-topline guide-topline"><div className="guide-top-tag"><strong>Mission Brief</strong><span>Setup {step + 1} / 6</span></div></header>
      <div className="guide-progress"><div className="step-rail">{Array.from({ length: 6 }, (_, index) => <span key={index} className={index <= step ? 'active' : ''} />)}</div></div>
      <div className="onboarding-content guide-content">
        <div className="guide-objective-strip"><small>LOCAL-FIRST SETUP</small><h1 id="mission-brief-title">{titles[step]}</h1>
          {step === 0 ? <p>Set your identity and defaults now. Your data stays on this device, and every choice remains editable in Settings.</p> : null}
          {step === 2 ? <p>Your faction sets FitDex’s visual identity. It never changes features, rewards, or stored fitness data.</p> : null}
          {step === 3 ? <p>Choose the look you want to start with. You can change it later in Settings.</p> : null}
          {step === 4 ? <p>Your champion is cosmetic and can be changed whenever you like.</p> : null}
          {step === 5 && nutritionPhase === 'intro' ? <p>FitDex can estimate daily calorie and protein targets from a few profile details. Skip once if you prefer to log food without targets.</p> : null}
          {step === 5 && nutritionPhase === 'entry' ? <p>Uses the existing Mifflin–St Jeor calculation engine. Stored only on this device.</p> : null}
          {step === 5 && nutritionPhase === 'result' ? <p>Estimated from your profile and goal. These are starting values, not medical advice.</p> : null}
        </div>
        {step === 2 ? <div className="mission-choice-grid">{styleOptions.map((option) => <button type="button" className={`cmd-btn secondary${family === option.value ? ' primary' : ''}`} key={option.value} onClick={() => { playEffect('select'); setFamily(option.value) }}><strong>{option.label}</strong></button>)}</div> : null}
        {step === 3 ? <div className="mission-choice-grid">{modeOptions.map((option) => <button type="button" className={`cmd-btn secondary${brightness === option.value ? ' primary' : ''}`} key={option.value} onClick={() => { playEffect('select'); setBrightness(option.value) }}><strong>{option.label}</strong></button>)}</div> : null}
        {step === 4 ? <AvatarSelector compact /> : null}
        {step === 5 && nutritionPhase === 'intro' ? <div className="mission-nutrition-intro">
          <ul className="mission-nutrition-facts">
            <li>Food works fully with or without targets</li>
            <li>Change or disable anytime in Settings</li>
            <li>No repeated nags if you skip</li>
          </ul>
        </div> : null}
        {step === 5 && nutritionPhase === 'entry' ? <div className="mission-nutrition-grid">
          <label>Goal<select value={goal} onChange={(event) => setGoal(event.target.value as NutritionGoal)}><option value="lose">Lose</option><option value="maintain">Maintain</option><option value="gain">Gain</option></select></label>
          <label>Age<input type="number" min="18" max="120" value={age} onChange={(event) => setAge(event.target.value)} /></label>
          <label>Biological sex<select value={sex} onChange={(event) => setSex(event.target.value as NutritionSex)}><option value="female">Female</option><option value="male">Male</option></select></label>
          <label>Height (cm)<input type="number" min="1" value={heightCm} onChange={(event) => setHeightCm(event.target.value)} /></label>
          <label>Weight (kg)<input type="number" min="1" step="0.1" value={weightKg} onChange={(event) => setWeightKg(event.target.value)} /></label>
          <label>Activity<select value={activityLevel} onChange={(event) => setActivityLevel(event.target.value as NutritionActivityLevel)}><option value="sedentary">Sedentary</option><option value="light">Light</option><option value="moderate">Moderate</option><option value="very">Very active</option><option value="extreme">Extremely active</option></select></label>
          <small>Healthy-adult estimates, not medical advice. You can edit or disable targets in Settings.</small>
          {nutritionError ? <p className="form-error" role="alert">{nutritionError}</p> : null}
        </div> : null}
        {step === 5 && nutritionPhase === 'result' && calculated ? <div className="mission-nutrition-grid">
          <div className="mission-nutrition-result">
            <span>Maintenance<strong>{calculated.tdee} kcal</strong></span>
            <span>Daily target<strong>{calculated.calorieTarget} kcal</strong></span>
            <span>Protein<strong>{calculated.proteinTargetGrams} g</strong></span>
          </div>
          <small>Review your starting values. Tap Edit Details to adjust inputs or Use These Targets to finish.</small>
          {nutritionError ? <p className="form-error" role="alert">{nutritionError}</p> : null}
        </div> : null}
      </div>
      <footer className={`onboarding-actions guide-actions${step === 5 && (nutritionPhase === 'intro' || nutritionPhase === 'result') ? ' mission-actions-stacked' : ''}`}>
        {step === 5 && nutritionPhase === 'intro' ? (
          <>
            <button className="cmd-btn primary mission-primary-btn" type="button" onClick={() => { playEffect('select'); setNutritionPhase('entry') }}>Set My Targets</button>
            <div className="mission-secondary-row">
              <button className="cmd-btn secondary" type="button" onClick={goBack}>Back</button>
              <button className="cmd-btn secondary" type="button" onClick={() => void skipNutrition()}>Skip for now</button>
            </div>
          </>
        ) : step === 5 && nutritionPhase === 'result' ? (
          <>
            <button className="cmd-btn primary mission-primary-btn" type="button" disabled={saving || !calculated} onClick={() => void saveNutrition()}>{saving ? 'Saving…' : 'Use These Targets'}</button>
            <div className="mission-secondary-row">
              <button className="cmd-btn secondary" type="button" onClick={goBack}>Back</button>
              <button className="cmd-btn secondary" type="button" onClick={() => { playEffect('select'); setNutritionPhase('entry') }}>Edit Details</button>
            </div>
          </>
        ) : (
          <>
            {step > 0 ? <button className="cmd-btn secondary" type="button" onClick={goBack}>Back</button> : <span />}
            {step === 5 && nutritionPhase === 'entry' ? (
              <button className="cmd-btn primary" type="button" disabled={!calculated} onClick={() => { if (!calculated) { setNutritionError('Enter an age from 18 to 120 and positive height and weight values.'); return }; playEffect('select'); setNutritionError(''); setNutritionPhase('result') }}>Calculate Targets</button>
            ) : (
              <button className="cmd-btn primary" type="button" onClick={advance}>{step === 0 ? 'Begin Setup' : 'Continue'}</button>
            )}
          </>
        )}
      </footer>
    </section>
  </div>
}

function FieldGuide({ onClose, isReplay = false }: { onClose: () => void; isReplay?: boolean }) {
  const [index, setIndex] = useState(0)
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
      <div className="onboarding-card guide-dialog">
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
