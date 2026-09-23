import { ArrowLeft, Check, Dumbbell, Mic, Sparkles } from 'lucide-react'
import { useState } from 'react'
import type { WeekdayId } from '../../data/models.ts'
import { WEEKDAY_IDS } from '../../data/models.ts'
import { Panel } from '../../components/ui/Panel.tsx'
import { RetroLoader } from '../../components/ui/RetroLoader.tsx'
import { useSpeechRecognition } from '../ai/useSpeechRecognition.ts'
import { generateWeeklySplitWithAi, parseWorkoutSplitWithAi, type GenerateSplitParams } from '../ai/aiService.ts'
import { type ParsedDayRoutine, WEEKDAYS_MAP } from '../ai/routineParser.ts'
import { createRoutine, addExercisesToRoutine, type RoutineWithItems } from './routineRepository.ts'
import { emptyWeeklyPlanDays, saveWeeklyPlan, type WeeklyPlan } from './weeklyPlan.ts'
import { useAudio } from '../audio/useAudio.ts'

interface AiWorkoutStudioProps {
  currentPlan?: WeeklyPlan
  currentRoutines?: readonly RoutineWithItems[]
  onBack: () => void
  onPlanApplied?: () => Promise<void> | void
}

export function AiWorkoutStudio({ currentPlan, onBack, onPlanApplied }: AiWorkoutStudioProps) {
  const { playEffect } = useAudio()
  const [studioMode, setStudioMode] = useState<'generate' | 'dictate'>('generate')

  // Generator State
  const [goal, setGoal] = useState<GenerateSplitParams['goal']>('hypertrophy')
  const [splitStyle, setSplitStyle] = useState<GenerateSplitParams['splitStyle']>('ppl')
  const [daysPerWeek, setDaysPerWeek] = useState(5)
  const [customPrompt, setCustomPrompt] = useState('')

  // Dictation State
  const { isListening, transcript, startListening, stopListening, resetTranscript, supported } = useSpeechRecognition()
  const [notesText, setNotesText] = useState(`Monday: Flat Barbell Bench Press 4x8, Incline Dumbbell Bench Press 3x10, Cable Lateral Raise 3x15, Tricep Pushdown 3x12
Tuesday: Barbell Bent-Over Row 4x8, Wide-Grip Lat Pulldown 3x10, Incline Dumbbell Curl 3x12, Dumbbell Hammer Curl 3x12
Wednesday: Rest Day
Thursday: Barbell Back Squat 4x8, Romanian Deadlift 3x10, Leg Press 3x12, Standing Calf Raise 3x15
Friday: Overhead Barbell Press 4x8, Cable Lateral Raise 3x15, Dips 3x10, Cable Face Pull 3x15
Saturday: Rest Day
Sunday: Rest Day`)

  // Review State
  const [generating, setGenerating] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')
  const [previewSchedule, setPreviewSchedule] = useState<Record<WeekdayId, ParsedDayRoutine> | null>(null)
  const [applying, setApplying] = useState(false)

  // Voice toggle
  const handleVoiceToggle = () => {
    if (isListening) {
      stopListening()
    } else {
      resetTranscript()
      startListening()
    }
  }

  // When speech transcript updates, append to notesText
  if (transcript && isListening && !notesText.includes(transcript)) {
    setNotesText((prev) => (prev ? `${prev.trim()}\n${transcript}` : transcript))
    resetTranscript()
  }

  const handleGenerate = async () => {
    setGenerating(true)
    setStatusMessage('Generating optimal 7-day program using AI…')
    playEffect('select')

    try {
      const generated = await generateWeeklySplitWithAi({
        goal,
        splitStyle,
        daysPerWeek,
        customInstructions: customPrompt,
      })
      setPreviewSchedule(generated)
      setStatusMessage('Review your AI-generated 7-day schedule below.')
      playEffect('add')
    } catch (err) {
      setStatusMessage(err instanceof Error ? err.message : 'Failed to generate split')
    } finally {
      setGenerating(false)
    }
  }

  const handleParseNotes = async () => {
    setGenerating(true)
    setStatusMessage('Analyzing and matching exercises via Cloudflare Gemma 4…')
    playEffect('select')

    try {
      const parsed = await parseWorkoutSplitWithAi(notesText)
      setPreviewSchedule(parsed)
      setStatusMessage('Split parsed successfully! Review the 7 days below.')
      playEffect('add')
    } catch (err) {
      setStatusMessage(err instanceof Error ? err.message : 'Failed to parse notes')
    } finally {
      setGenerating(false)
    }
  }

  const handleApplyToSchedule = async () => {
    if (!previewSchedule) return
    setApplying(true)
    setStatusMessage('Applying routines to your weekly schedule…')
    playEffect('select')

    try {
      const newPlanDays: WeeklyPlan['days'] = currentPlan?.days ? { ...currentPlan.days } : emptyWeeklyPlanDays()

      for (const dayId of WEEKDAY_IDS) {
        const dayRoutine = previewSchedule[dayId]
        if (!dayRoutine || dayRoutine.isRestDay || !dayRoutine.exercises.length) {
          newPlanDays[dayId] = { type: 'rest_day' }
        } else {
          // Check if an existing routine matches this day name or create new
          const routineName = `${dayRoutine.dayLabel} - ${dayRoutine.title}`
          const routine = await createRoutine(routineName)

          for (const ex of dayRoutine.exercises) {
            if (ex.matchedExercise) {
              const repCount = parseInt(ex.reps, 10) || 12
              await addExercisesToRoutine(routine.id, [ex.matchedExercise], repCount)
            }
          }

          newPlanDays[dayId] = { type: 'routine', routineId: routine.id }
        }
      }

      await saveWeeklyPlan(newPlanDays, { confirmReset: true })
      playEffect('progress_complete')
      await onPlanApplied?.()
      onBack()
    } catch (err) {
      setStatusMessage(err instanceof Error ? err.message : 'Failed to apply schedule')
    } finally {
      setApplying(false)
    }
  }

  return (
    <div className="page-stack workout-page ai-studio-page">
      <Panel className="workout-flow-panel ai-studio-panel">
        <header className="ai-studio-header">
          <button className="dex-back-button" type="button" onClick={onBack} aria-label="Back to Workout Hub">
            <ArrowLeft size={20} aria-hidden="true" />
          </button>
          <div>
            <div className="ai-studio-eyebrow">
              <Sparkles size={14} /> <span>AI WORKOUT STUDIO</span>
              <span className="free-badge">Public Free AI</span>
            </div>
            <h2>Generate or Dictate Weekly Routine</h2>
            <p>Create a streamlined 1-routine-per-day split with intelligent exercise matching.</p>
          </div>
        </header>

        <div className="studio-mode-switcher">
          <button
            type="button"
            className={`studio-tab-btn ${studioMode === 'generate' ? 'is-active' : ''}`}
            onClick={() => { playEffect('select'); setStudioMode('generate') }}
          >
            <Sparkles size={16} /> Generate AI Split
          </button>
          <button
            type="button"
            className={`studio-tab-btn ${studioMode === 'dictate' ? 'is-active' : ''}`}
            onClick={() => { playEffect('select'); setStudioMode('dictate') }}
          >
            <Mic size={16} /> Voice &amp; Text Dictation
          </button>
        </div>

        {studioMode === 'generate' ? (
          <div className="studio-section studio-generator">
            <div className="studio-field">
              <label><strong>Goal</strong></label>
              <div className="chips-selector">
                {(['hypertrophy', 'strength', 'fat_loss', 'endurance'] as const).map((g) => (
                  <button
                    key={g}
                    type="button"
                    className={`chip-btn ${goal === g ? 'is-selected' : ''}`}
                    onClick={() => setGoal(g)}
                  >
                    {g === 'hypertrophy' ? 'Muscle Growth (Hypertrophy)' : g === 'strength' ? 'Raw Strength & Power' : g === 'fat_loss' ? 'Fat Loss & Conditioning' : 'Endurance & Mobility'}
                  </button>
                ))}
              </div>
            </div>

            <div className="studio-field">
              <label><strong>Split Style</strong></label>
              <div className="chips-selector">
                {(['ppl', 'upper_lower', 'bro_split', 'arnold', 'full_body'] as const).map((s) => (
                  <button
                    key={s}
                    type="button"
                    className={`chip-btn ${splitStyle === s ? 'is-selected' : ''}`}
                    onClick={() => setSplitStyle(s)}
                  >
                    {s === 'ppl' ? 'Push / Pull / Legs (PPL)' : s === 'upper_lower' ? 'Upper / Lower (4-Day)' : s === 'bro_split' ? '4-5 Day Bodypart Split' : s === 'arnold' ? 'Arnold Split' : 'Full Body 3x'}
                  </button>
                ))}
              </div>
            </div>

            <div className="studio-field">
              <label><strong>Training Frequency</strong></label>
              <div className="chips-selector">
                {[3, 4, 5, 6].map((days) => (
                  <button
                    key={days}
                    type="button"
                    className={`chip-btn ${daysPerWeek === days ? 'is-selected' : ''}`}
                    onClick={() => setDaysPerWeek(days)}
                  >
                    {days} Days / Week
                  </button>
                ))}
              </div>
            </div>

            <div className="studio-field">
              <label><strong>Custom Focus / Instructions (Optional)</strong></label>
              <input
                type="text"
                value={customPrompt}
                onChange={(e) => setCustomPrompt(e.target.value)}
                placeholder="e.g. Focus on upper chest and side delts, home dumbbells only"
                className="studio-input"
              />
            </div>

            <button
              type="button"
              className="primary-button studio-action-btn"
              disabled={generating}
              onClick={handleGenerate}
            >
              {generating ? <RetroLoader label="GENERATING SPLIT…" /> : <><Sparkles size={18} /> Generate 7-Day Program</>}
            </button>
          </div>
        ) : (
          <div className="studio-section studio-dictation">
            <div className="studio-dictation-mic-row">
              <button
                type="button"
                className={`dictation-mic-pill ${isListening ? 'is-listening' : ''}`}
                onClick={handleVoiceToggle}
              >
                <Mic size={20} className={isListening ? 'pulse' : ''} />
                <span>{isListening ? 'Listening… Tap to Stop' : supported ? 'Tap to Dictate with Voice' : 'Voice unsupported in browser'}</span>
              </button>
              <span className="dictation-hint">Or paste workout notes below</span>
            </div>

            <label className="studio-field">
              <strong>Workout Split Notes</strong>
              <textarea
                className="studio-textarea"
                rows={10}
                value={notesText}
                onChange={(e) => setNotesText(e.target.value)}
                placeholder="Monday: Bench Press 4x8, Incline DB Press 3x10&#10;Tuesday: Barbell Row 4x8, Pulldown 3x10&#10;Wednesday: Rest Day…"
              />
            </label>

            <button
              type="button"
              className="primary-button studio-action-btn"
              disabled={generating || !notesText.trim()}
              onClick={handleParseNotes}
            >
              {generating ? <RetroLoader label="PARSING SPLIT…" /> : <><Dumbbell size={18} /> Parse &amp; Match Exercises</>}
            </button>
          </div>
        )}

        {statusMessage ? <p className="studio-status-feedback">{statusMessage}</p> : null}

        {previewSchedule ? (
          <div className="studio-preview-container">
            <div className="studio-preview-head">
              <h3>7-Day Schedule Preview</h3>
              <button
                type="button"
                className="primary-button apply-schedule-btn"
                disabled={applying}
                onClick={handleApplyToSchedule}
              >
                {applying ? 'Applying Schedule…' : <><Check size={18} /> Apply to My Schedule</>}
              </button>
            </div>

            <div className="preview-days-grid">
              {WEEKDAYS_MAP.map(({ id, label }) => {
                const day = previewSchedule[id]
                const isRest = !day || day.isRestDay || !day.exercises.length
                return (
                  <article key={id} className={`preview-day-card ${isRest ? 'is-rest' : ''}`}>
                    <header className="preview-day-header">
                      <div>
                        <strong>{label}</strong>
                        <span className="preview-day-title">{isRest ? 'Rest Day' : day.title}</span>
                      </div>
                      <span className={`preview-tag ${isRest ? 'is-rest' : ''}`}>{isRest ? 'Recovery' : `${day.exercises.length} Exercises`}</span>
                    </header>
                    {!isRest ? (
                      <ul className="preview-exercise-list">
                        {day.exercises.map((ex, idx) => (
                          <li key={idx} className="preview-exercise-item">
                            <span className="ex-name">{ex.exerciseName}</span>
                            <span className="ex-sets-pill">{ex.sets} sets × {ex.reps} reps</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="preview-rest-copy">Active recovery &amp; muscle rest.</p>
                    )}
                  </article>
                )
              })}
            </div>
          </div>
        ) : null}
      </Panel>
    </div>
  )
}
