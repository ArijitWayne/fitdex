import { AlertCircle, Check, FileText, Mic, Sparkles, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import type { Exercise, WeekdayId } from '../../data/models.ts'
import { WEEKDAY_IDS } from '../../data/models.ts'
import { generateWeeklySplitWithAi, parseWorkoutSplitWithAi, type GenerateSplitParams } from '../ai/aiService.ts'
import type { ParsedDayRoutine } from '../ai/routineParser.ts'
import { useSpeechRecognition } from '../ai/useSpeechRecognition.ts'
import { useAudio } from '../audio/useAudio.ts'
import { createRoutine, addExercisesToRoutine } from './routineRepository.ts'
import { emptyWeeklyPlanDays, saveWeeklyPlan, WEEKDAY_LABELS, type WeeklyPlan } from './weeklyPlan.ts'

interface WeeklyPlannerModalProps {
  currentPlan?: WeeklyPlan
  onClose: () => void
  onApplied: () => Promise<void> | void
}

export function WeeklyPlannerModal({ currentPlan, onClose, onApplied }: WeeklyPlannerModalProps) {
  const { playEffect } = useAudio()
  const [mode, setMode] = useState<'dictate' | 'paste' | 'generate'>('dictate')

  // Dictate State
  const { isListening, transcript, startListening, stopListening, resetTranscript, supported: speechSupported } = useSpeechRecognition()
  const [voiceText, setVoiceText] = useState('')

  // Paste State
  const [pasteText, setPasteText] = useState('')

  // Generator State
  const [goal, setGoal] = useState<GenerateSplitParams['goal']>('hypertrophy')
  const [splitStyle, setSplitStyle] = useState<GenerateSplitParams['splitStyle']>('ppl')
  const [daysPerWeek, setDaysPerWeek] = useState(5)
  const [customPrompt, setCustomPrompt] = useState('')

  // Schedule Preview State
  const [previewSchedule, setPreviewSchedule] = useState<Record<WeekdayId, ParsedDayRoutine> | null>(null)
  const [loading, setLoading] = useState(false)
  const [applying, setApplying] = useState(false)
  const [feedback, setFeedback] = useState('')

  useEffect(() => {
    if (transcript) {
      setVoiceText(transcript)
    }
  }, [transcript])

  const parseAndSetSchedule = async (rawText: string) => {
    setLoading(true)
    setFeedback('Parsing routine via Cloudflare Gemma 4…')
    playEffect('select')

    try {
      const parsed = await parseWorkoutSplitWithAi(rawText)
      setPreviewSchedule(parsed)
      setFeedback('Parsed 7-day schedule via Cloudflare AI! Review below and tap Apply.')
      playEffect('progress_complete')
    } catch (err) {
      setFeedback(err instanceof Error ? err.message : 'Failed to parse workout split')
    } finally {
      setLoading(false)
    }
  }

  const handleVoiceToggle = () => {
    if (isListening) {
      stopListening()
      if (voiceText.trim()) {
        void parseAndSetSchedule(voiceText)
      }
    } else {
      resetTranscript()
      setVoiceText('')
      setFeedback('')
      startListening()
    }
  }

  const handleParsePaste = () => {
    if (!pasteText.trim()) {
      setFeedback('Please paste your workout split text first.')
      return
    }
    void parseAndSetSchedule(pasteText)
  }

  const handleGenerateAi = async () => {
    setLoading(true)
    setFeedback('Generating your full weekly split with Gemma 4 on Cloudflare…')
    playEffect('select')

    try {
      const generated = await generateWeeklySplitWithAi({
        goal,
        splitStyle,
        daysPerWeek,
        customInstructions: customPrompt,
      })

      setPreviewSchedule(generated)
      setFeedback('Generated 7-day split via Cloudflare AI! Review below and tap Apply.')
      playEffect('progress_complete')
    } catch (err) {
      setFeedback(err instanceof Error ? err.message : 'Failed to generate split')
    } finally {
      setLoading(false)
    }
  }

  const handleApplyToWeek = async () => {
    if (!previewSchedule) return
    setApplying(true)
    setFeedback('Applying routines to your weekly schedule…')
    playEffect('select')

    try {
      const newPlanDays: WeeklyPlan['days'] = currentPlan?.days ? { ...currentPlan.days } : emptyWeeklyPlanDays()

      for (const dayId of WEEKDAY_IDS) {
        const dayRoutine = previewSchedule[dayId]
        if (!dayRoutine || dayRoutine.isRestDay || !dayRoutine.exercises.length) {
          newPlanDays[dayId] = { type: 'rest_day' }
        } else {
          const routineName = `${dayRoutine.dayLabel} - ${dayRoutine.title}`
          const routine = await createRoutine(routineName)

          for (const ex of dayRoutine.exercises) {
            const exerciseToAdd: Exercise = ex.matchedExercise ?? {
              id: `custom-exercise:${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
              name: ex.exerciseName,
              aliases: [],
              category: 'Chest',
              categories: ['Chest'],
              primaryCategory: 'Chest',
              primaryMuscles: [],
              secondaryMuscles: [],
              muscleRegions: [],
              equipment: 'Bodyweight',
              equipmentOptions: ['Bodyweight'],
              trackingType: 'reps_only',
              movementPattern: 'Flexion',
              source: 'custom',
              archived: false,
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
            }
            await addExercisesToRoutine(routine.id, [exerciseToAdd], parseInt(ex.reps, 10) || 12)
          }
          newPlanDays[dayId] = { type: 'routine', routineId: routine.id }
        }
      }

      await saveWeeklyPlan(newPlanDays, { confirmReset: true })
      playEffect('progress_complete')
      await onApplied?.()
      onClose()
    } catch (err) {
      setFeedback(err instanceof Error ? err.message : 'Failed to apply schedule')
    } finally {
      setApplying(false)
    }
  }

  return (
    <div className="weekly-planner-overlay" role="presentation">
      <section className="weekly-planner-modal" role="dialog" aria-modal="true" aria-labelledby="weekly-planner-title">
        <header className="weekly-planner-modal-header">
          <div>
            <span className="eyebrow"><Sparkles size={13} style={{ display: 'inline', marginRight: 4 }} /> Weekly Workout Planner</span>
            <h2 id="weekly-planner-title">Plan Your Week at Once</h2>
          </div>
          <button
            type="button"
            className="cmd-icon-btn planner-close-btn"
            onClick={() => { playEffect('select'); onClose() }}
            aria-label="Close weekly planner"
            title="Close"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </header>

        <p className="weekly-planner-subtitle">
          Configure your entire Monday–Sunday schedule strictly into Workout Days and Rest Days.
        </p>

        <div className="weekly-planner-tabs">
          <button
            type="button"
            className={`planner-tab-btn ${mode === 'dictate' ? 'is-active' : ''}`}
            onClick={() => { playEffect('select'); setMode('dictate') }}
          >
            <Mic size={16} /> Dictate Split
          </button>
          <button
            type="button"
            className={`planner-tab-btn ${mode === 'paste' ? 'is-active' : ''}`}
            onClick={() => { playEffect('select'); setMode('paste') }}
          >
            <FileText size={16} /> Paste Text
          </button>
          <button
            type="button"
            className={`planner-tab-btn ${mode === 'generate' ? 'is-active' : ''}`}
            onClick={() => { playEffect('select'); setMode('generate') }}
          >
            <Sparkles size={16} /> Auto-Generate
          </button>
        </div>

        {/* DICTATE MODE */}
        {mode === 'dictate' ? (
          <div className="planner-mode-card">
            <div className="planner-dictate-box">
              <button
                type="button"
                className={`dictation-mic-pill ${isListening ? 'is-listening' : ''}`}
                onClick={handleVoiceToggle}
              >
                <Mic size={20} />
                {isListening ? 'Listening… Tap to Stop & Parse' : speechSupported ? 'Tap to Speak Your Split' : 'Type below'}
              </button>
              <textarea
                className="planner-text-area"
                value={voiceText}
                onChange={(e) => setVoiceText(e.target.value)}
                placeholder="Example: Monday is Push Day with 3 sets of Bench Press and 3 sets of Incline DB Press. Tuesday is Pull Day with 3 sets of Pull-Ups. Wednesday is Rest Day..."
              />
              <button
                type="button"
                className="secondary-button planner-parse-btn"
                onClick={() => parseAndSetSchedule(voiceText)}
                disabled={!voiceText.trim()}
              >
                <Check size={16} /> Parse Spoken Split
              </button>
            </div>
          </div>
        ) : null}

        {/* PASTE MODE */}
        {mode === 'paste' ? (
          <div className="planner-mode-card">
            <textarea
              className="planner-text-area paste-area"
              value={pasteText}
              onChange={(e) => setPasteText(e.target.value)}
              placeholder="Paste your workout split here:
Monday: Push Day - Incline Bench 3x12, Lateral Raise 3x15
Tuesday: Pull Day - Barbell Row 4x10, Lat Pulldown 3x12
Wednesday: Rest Day
Thursday: Leg Day - Squats 3x10, Leg Press 3x12
Friday: Upper Body - Bench 3x10, Pull-Ups 3x10
Saturday: Rest Day
Sunday: Rest Day"
            />
            <button
              type="button"
              className="primary-button planner-parse-btn"
              onClick={handleParsePaste}
              disabled={!pasteText.trim()}
            >
              <Check size={16} /> Parse Pasted Split
            </button>
          </div>
        ) : null}

        {/* AUTO-GENERATE MODE */}
        {mode === 'generate' ? (
          <div className="planner-mode-card">
            <div className="planner-generator-controls">
              <div className="control-group">
                <label>Primary Goal</label>
                <select value={goal} onChange={(e) => setGoal(e.target.value as GenerateSplitParams['goal'])}>
                  <option value="hypertrophy">Hypertrophy (Muscle Growth)</option>
                  <option value="strength">Strength (Heavy Compound)</option>
                  <option value="fat_loss">Fat Loss & Conditioning</option>
                  <option value="endurance">Endurance & Stamina</option>
                </select>
              </div>

              <div className="control-group">
                <label>Split Style</label>
                <select value={splitStyle} onChange={(e) => setSplitStyle(e.target.value as GenerateSplitParams['splitStyle'])}>
                  <option value="ppl">Push / Pull / Legs</option>
                  <option value="upper_lower">Upper / Lower Body</option>
                  <option value="full_body">Full Body</option>
                  <option value="bro_split">Body Part Split</option>
                </select>
              </div>

              <div className="control-group">
                <label>Training Days ({daysPerWeek} days)</label>
                <input
                  type="range"
                  min={3}
                  max={6}
                  value={daysPerWeek}
                  onChange={(e) => setDaysPerWeek(Number(e.target.value))}
                />
              </div>

              <div className="control-group">
                <label>Custom Focus (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g. Emphasize side delts and upper chest"
                  value={customPrompt}
                  onChange={(e) => setCustomPrompt(e.target.value)}
                />
              </div>

              <button
                type="button"
                className="primary-button planner-generate-btn"
                onClick={handleGenerateAi}
                disabled={loading}
              >
                <Sparkles size={16} /> {loading ? 'Generating 7-Day Split…' : 'Generate Weekly Split'}
              </button>
            </div>
          </div>
        ) : null}

        {feedback ? (
          <div className="planner-feedback-bar" role="status">
            <AlertCircle size={15} />
            <span>{feedback}</span>
          </div>
        ) : null}

        {/* 7-DAY PREVIEW GRID */}
        {previewSchedule ? (
          <div className="planner-preview-section">
            <div className="planner-preview-head">
              <h3>7-Day Schedule Preview</h3>
              <button
                type="button"
                className="primary-button apply-schedule-btn"
                onClick={handleApplyToWeek}
                disabled={applying}
              >
                <Check size={16} /> {applying ? 'Applying Schedule…' : 'Apply to Weekly Schedule'}
              </button>
            </div>

            <div className="planner-preview-grid">
              {WEEKDAY_IDS.map((dayId) => {
                const day = previewSchedule[dayId]
                const isRest = !day || day.isRestDay || !day.exercises.length
                return (
                  <div key={dayId} className={`planner-day-card ${isRest ? 'is-rest' : 'is-workout'}`}>
                    <div className="day-card-header">
                      <strong>{WEEKDAY_LABELS[dayId]}</strong>
                      <span className={`day-card-badge ${isRest ? 'badge-rest' : 'badge-workout'}`}>
                        {isRest ? 'Rest Day' : 'Workout Day'}
                      </span>
                    </div>
                    {isRest ? (
                      <p className="day-card-rest-text">Rest & Recovery</p>
                    ) : (
                      <>
                        <span className="day-routine-title">{day.title}</span>
                        <ul className="day-exercise-list">
                          {day.exercises.map((ex, idx) => (
                            <li key={idx}>
                              {ex.matchedExercise ? ex.matchedExercise.name : ex.exerciseName} ({ex.sets}×{ex.reps})
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ) : null}
      </section>
    </div>
  )
}
