import { Mic, Sparkles, X, Check } from 'lucide-react'
import { useState, useEffect } from 'react'
import type { RoutineWithItems } from './routineRepository.ts'
import { useSpeechRecognition } from '../ai/useSpeechRecognition.ts'
import { extractSetsAndReps, matchCatalogExercise } from '../ai/routineParser.ts'
import { addExercisesToRoutine, deleteRoutineItem, updateRoutineItemSets, updateRoutineItemReps } from './routineRepository.ts'
import { useAudio } from '../audio/useAudio.ts'

interface VoiceDayEditorDialogProps {
  dayLabel: string
  routineEntry?: RoutineWithItems
  routineId?: string
  isRestDay: boolean
  onToggleRestDay: () => Promise<void>
  onEnsureRoutine?: () => Promise<string>
  onClose: () => void
  onChanged: () => Promise<void>
}

export function VoiceDayEditorDialog({
  dayLabel,
  routineEntry,
  routineId,
  isRestDay,
  onToggleRestDay,
  onEnsureRoutine,
  onClose,
  onChanged,
}: VoiceDayEditorDialogProps) {
  const { playEffect } = useAudio()
  const { isListening, transcript, startListening, stopListening, resetTranscript, supported } = useSpeechRecognition()
  const [commandText, setCommandText] = useState('')
  const [feedback, setFeedback] = useState('')
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    if (transcript) {
      setCommandText(transcript)
    }
  }, [transcript])

  const handleVoiceToggle = () => {
    if (isListening) {
      stopListening()
    } else {
      resetTranscript()
      setCommandText('')
      setFeedback('')
      startListening()
    }
  }

  const applyVoiceCommand = async () => {
    const text = commandText.trim()
    if (!text) return
    setBusy(true)
    setFeedback('')

    try {
      const lower = text.toLowerCase()

      // 1. Rest day toggle
      if (/rest day|make rest|set to rest|recovery/i.test(lower)) {
        if (!isRestDay) {
          await onToggleRestDay()
          playEffect('progress_complete')
          setFeedback(`Set ${dayLabel} as a Rest Day.`)
          await onChanged()
          setBusy(false)
          return
        }
      }

      let activeRoutineId = routineId
      if (!activeRoutineId && onEnsureRoutine && !isRestDay) {
        activeRoutineId = await onEnsureRoutine()
      }

      if (!activeRoutineId) {
        setFeedback('No active routine for this day. Switch from Rest Day first.')
        setBusy(false)
        return
      }

      // 2. Remove exercise command, e.g. "remove bench press"
      if (/remove|delete/i.test(lower) && routineEntry) {
        const removeTarget = lower.replace(/remove|delete/gi, '').trim()
        const matchedItem = routineEntry.items.find((item) =>
          item.exerciseNameSnapshot.toLowerCase().includes(removeTarget) ||
          removeTarget.includes(item.exerciseNameSnapshot.toLowerCase()),
        )
        if (matchedItem) {
          await deleteRoutineItem(activeRoutineId, matchedItem.id)
          playEffect('select')
          setFeedback(`Removed ${matchedItem.exerciseNameSnapshot}.`)
          await onChanged()
          setCommandText('')
          setBusy(false)
          return
        }
      }

      // 3. Add exercise or change sets/reps
      const { sets, reps, cleanName } = extractSetsAndReps(text)
      const matched = matchCatalogExercise(cleanName)

      if (matched) {
        // Check if already in routine
        const existing = routineEntry?.items.find((item) => item.exerciseId === matched.id)
        if (existing) {
          await updateRoutineItemSets(activeRoutineId, existing.id, sets)
          await updateRoutineItemReps(activeRoutineId, existing.id, parseInt(reps, 10) || 12)
          playEffect('add')
          setFeedback(`Updated ${matched.name} to ${sets} sets × ${reps} reps.`)
        } else {
          await addExercisesToRoutine(activeRoutineId, [matched], parseInt(reps, 10) || 12)
          if (sets !== 3 && routineEntry) {
            // refresh and update sets
            await onChanged()
          }
          playEffect('add')
          setFeedback(`Added ${matched.name} (${sets} sets × ${reps} reps).`)
        }
        await onChanged()
        setCommandText('')
      } else {
        setFeedback(`Could not identify exercise in: "${text}". Try saying "Add 3 sets of Incline Dumbbell Press".`)
      }
    } catch (err) {
      setFeedback(err instanceof Error ? err.message : 'Failed to apply voice command')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="workout-finish-backdrop" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <section className="panel voice-day-editor-modal" role="dialog" aria-modal="true" aria-labelledby="voice-editor-title">
        <header className="voice-modal-header">
          <div>
            <span className="eyebrow"><Sparkles size={13} style={{ display: 'inline', marginRight: 4 }} /> Voice Command</span>
            <h2 id="voice-editor-title">Edit {dayLabel} Routine</h2>
          </div>
          <button type="button" className="icon-btn close-btn" onClick={onClose} aria-label="Close voice editor">
            <X size={20} />
          </button>
        </header>

        <div className="voice-mic-container">
          <button
            type="button"
            className={`voice-mic-hero-btn ${isListening ? 'is-listening' : ''}`}
            onClick={handleVoiceToggle}
            aria-label={isListening ? 'Stop listening' : 'Start speaking command'}
          >
            {isListening ? <Mic size={36} className="mic-pulse-icon" /> : <Mic size={36} />}
          </button>
          <p className="voice-mic-status">
            {isListening ? 'Listening… speak your command now' : supported ? 'Tap microphone to speak' : 'Type your command below'}
          </p>
        </div>

        <div className="voice-input-box">
          <input
            type="text"
            className="voice-text-field"
            value={commandText}
            onChange={(e) => setCommandText(e.target.value)}
            placeholder="e.g. Add 3 sets of 12 reps Incline Dumbbell Press"
            disabled={busy}
          />
          <button
            type="button"
            className="primary-button voice-apply-btn"
            onClick={applyVoiceCommand}
            disabled={busy || !commandText.trim()}
          >
            <Check size={16} /> Apply
          </button>
        </div>

        {feedback ? <p className="voice-feedback-pill" role="status">{feedback}</p> : null}

        <div className="voice-suggestions-wrap">
          <span className="suggestions-label">Try saying:</span>
          <div className="suggestions-chips">
            <button type="button" onClick={() => setCommandText('Add 3 sets of 12 reps Incline Dumbbell Press')}>+ Incline DB Press 3x12</button>
            <button type="button" onClick={() => setCommandText('Add 4 sets of 10 reps Barbell Bench Press')}>+ Bench Press 4x10</button>
            <button type="button" onClick={() => setCommandText('Add 3 sets of 15 reps Cable Lateral Raise')}>+ Lateral Raise 3x15</button>
            <button type="button" onClick={() => setCommandText('Set to Rest Day')}>Set Rest Day</button>
          </div>
        </div>

        {routineEntry?.items.length ? (
          <div className="voice-current-routine-preview">
            <span className="preview-label">Current {dayLabel} exercises:</span>
            <div className="preview-exercise-list">
              {routineEntry.items.map((it) => (
                <div key={it.id} className="preview-exercise-chip">
                  <span>{it.exerciseNameSnapshot} ({it.plannedSets}x{it.targetReps ?? 12})</span>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </section>
    </div>
  )
}
