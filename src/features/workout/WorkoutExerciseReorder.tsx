import { GripVertical } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import type { WorkoutExercise, WorkoutSet } from '../../data/models'
import { applySetDraft, getWorkoutSetLogState, type SetDraft } from './workoutModel'
import { useAudio } from '../audio/useAudio'
import { useBackNavigation } from '../navigation/useBackNavigation'
import { CommandPageFrame } from '../../components/layout/CommandPageFrame'

export interface WorkoutExerciseReorderProps {
  workoutName: string
  exercises: Array<{ exercise: WorkoutExercise; sets: WorkoutSet[] }>
  setDrafts: Map<string, SetDraft>
  onDone: (orderedWorkoutExerciseIds: string[]) => Promise<void>
  onCancel: () => void
}

export function WorkoutExerciseReorder({
  workoutName,
  exercises,
  setDrafts,
  onDone,
  onCancel,
}: WorkoutExerciseReorderProps) {
  const { playEffect } = useAudio()
  const [draftOrder, setDraftOrder] = useState<string[]>(() => exercises.map((item) => item.exercise.id))
  const [isSaving, setIsSaving] = useState(false)
  const listRef = useRef<HTMLDivElement>(null)

  // Keep an updated memoized lookup of exercises by workoutExerciseId
  const exerciseMap = useMemo(() => new Map(exercises.map((item) => [item.exercise.id, item])), [exercises])

  useBackNavigation('workout-exercise-reorder', true, onCancel, 25)

  // Drag interaction setup
  useEffect(() => {
    const container = listRef.current
    if (!container) return

    let isDragging = false
    let activeCard: HTMLElement | null = null
    let activeId: string | null = null
    let startIndex = -1
    let currentIndex = -1
    let startPointerY = 0
    let cardHeight = 0
    let cardGap = 8
    let overlayEl: HTMLElement | null = null
    let cards: HTMLElement[] = []
    let itemBoundaries: number[] = []
    let activePointerId: number | null = null

    const handles = container.querySelectorAll<HTMLElement>('.reorder-drag-handle')

    function onHandlePointerDown(e: PointerEvent) {
      if (e.pointerType === 'mouse' && e.button !== 0) return
      e.stopPropagation()
      e.preventDefault()

      const handle = e.currentTarget as HTMLElement
      const card = handle.closest<HTMLElement>('.reorder-card')
      if (!card) return

      activePointerId = e.pointerId
      activeCard = card
      activeId = card.dataset.id ?? null
      if (!activeId) return

      startIndex = draftOrder.indexOf(activeId)
      currentIndex = startIndex
      startPointerY = e.clientY

      cards = Array.from(container!.querySelectorAll<HTMLElement>('.reorder-card'))
      const rect = card.getBoundingClientRect()
      cardHeight = rect.height

      if (cards.length > 1) {
        const r0 = cards[0].getBoundingClientRect()
        const r1 = cards[1].getBoundingClientRect()
        cardGap = Math.max(0, r1.top - r0.bottom)
      }

      const rects = cards.map((c, i) => {
        const r = c.getBoundingClientRect()
        return {
          index: i,
          id: c.dataset.id,
          top: r.top,
          bottom: r.bottom,
          mid: (r.top + r.bottom) / 2,
        }
      })

      itemBoundaries = []
      for (let i = 0; i < rects.length - 1; i++) {
        itemBoundaries.push((rects[i].mid + rects[i + 1].mid) / 2)
      }

      try {
        handle.setPointerCapture(activePointerId)
      } catch {
        // Pointer capture can throw in sandboxed environments, continue gracefully.
      }

      window.addEventListener('pointermove', onWindowPointerMove, { passive: false })
      window.addEventListener('pointerup', onWindowPointerUp)
      window.addEventListener('pointercancel', onWindowPointerCancel)
    }

    function onWindowPointerMove(e: PointerEvent) {
      if (e.cancelable) e.preventDefault()

      if (!isDragging) {
        const deltaY = Math.abs(e.clientY - startPointerY)
        if (deltaY > 3) {
          startDragging(e)
        } else {
          return
        }
      }

      if (isDragging && overlayEl) {
        updateDragging(e)
      }
    }

    function startDragging(e: PointerEvent) {
      isDragging = true
      playEffect('select')
      const rect = activeCard!.getBoundingClientRect()

      overlayEl = document.createElement('div')
      overlayEl.className = 'drag-overlay'
      overlayEl.style.width = `${rect.width}px`
      overlayEl.style.height = `${rect.height}px`
      overlayEl.style.left = `${rect.left}px`
      overlayEl.style.top = `${rect.top}px`

      const item = activeId ? exerciseMap.get(activeId) : undefined
      const exerciseName = item?.exercise.exerciseNameSnapshot ?? 'Exercise'
      const loggedCount = item
        ? item.sets.filter((s) => getWorkoutSetLogState(applySetDraft(s, setDrafts.get(s.id)), item.exercise.trackingTypeSnapshot ?? 'reps_only') === 'logged').length
        : 0
      const totalSets = item?.sets.length ?? 0

      overlayEl.innerHTML = `
        <div class="reorder-drag-handle">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="pointer-events: none;">
            <circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle>
            <circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle>
          </svg>
        </div>
        <span class="reorder-card-pos" id="overlayPos">${startIndex + 1}</span>
        <div class="reorder-card-info">
          <div class="reorder-card-name">${exerciseName}</div>
          <div class="reorder-card-sets">${loggedCount}/${totalSets} sets logged</div>
        </div>
        <span class="reorder-card-status ${loggedCount > 0 ? 'logged' : ''}">
          ${loggedCount > 0 ? `${loggedCount} logged` : '0 logged'}
        </span>
      `
      document.body.appendChild(overlayEl)

      activeCard!.classList.add('is-dragged-placeholder')
      const activeNameEl = activeCard!.querySelector('.reorder-card-name')
      if (activeNameEl) {
        activeNameEl.textContent = `[ ${exerciseName.toUpperCase()} DESTINATION ]`
      }

      document.body.style.userSelect = 'none'
      document.body.style.webkitUserSelect = 'none'

      updateDragging(e)
    }

    function updateDragging(e: PointerEvent) {
      if (!overlayEl) return

      const deltaY = e.clientY - startPointerY
      overlayEl.style.transform = `translate3d(0, ${deltaY}px, 0) scale(1.02)`

      const cursorY = e.clientY
      let targetIndex = 0
      while (targetIndex < itemBoundaries.length && cursorY >= itemBoundaries[targetIndex]) {
        targetIndex++
      }
      targetIndex = Math.max(0, Math.min(cards.length - 1, targetIndex))

      if (targetIndex !== currentIndex) {
        currentIndex = targetIndex
        applyDisplacement(startIndex, currentIndex)
        const overlayPos = overlayEl.querySelector('#overlayPos')
        if (overlayPos) overlayPos.textContent = String(currentIndex + 1)
      }
    }

    function applyDisplacement(fromIdx: number, toIdx: number) {
      const slotDistance = cardHeight + cardGap

      cards.forEach((cardEl, idx) => {
        let shift = 0
        let displayPos = idx + 1

        if (idx === fromIdx) {
          shift = (toIdx - fromIdx) * slotDistance
          displayPos = toIdx + 1
        } else if (fromIdx < toIdx) {
          if (idx > fromIdx && idx <= toIdx) {
            shift = -slotDistance
            displayPos = idx
          }
        } else if (fromIdx > toIdx) {
          if (idx >= toIdx && idx < fromIdx) {
            shift = slotDistance
            displayPos = idx + 2
          }
        }

        cardEl.style.transform = shift === 0 ? '' : `translate3d(0, ${shift}px, 0)`
        const posEl = cardEl.querySelector('.reorder-card-pos')
        if (posEl) posEl.textContent = String(displayPos)
      })
    }

    function onWindowPointerUp() {
      cleanupListeners()
      if (isDragging) {
        finishDrag()
      } else {
        resetDragState()
      }
    }

    function onWindowPointerCancel() {
      cleanupListeners()
      resetDragState()
    }

    function cleanupListeners() {
      window.removeEventListener('pointermove', onWindowPointerMove)
      window.removeEventListener('pointerup', onWindowPointerUp)
      window.removeEventListener('pointercancel', onWindowPointerCancel)
      if (activePointerId !== null) {
        try {
          const h = activeCard?.querySelector<HTMLElement>('.reorder-drag-handle')
          if (h) h.releasePointerCapture(activePointerId)
        } catch {
          // ignore
        }
        activePointerId = null
      }
    }

    function finishDrag() {
      if (!overlayEl || !activeCard) {
        resetDragState()
        return
      }

      const slotDistance = cardHeight + cardGap
      const finalShift = (currentIndex - startIndex) * slotDistance

      overlayEl.style.transition = 'transform 180ms cubic-bezier(0.2, 0, 0, 1)'
      overlayEl.style.transform = `translate3d(0, ${finalShift}px, 0) scale(1)`

      setTimeout(() => {
        if (startIndex !== currentIndex && startIndex >= 0 && currentIndex >= 0) {
          setDraftOrder((current) => {
            const next = [...current]
            const [moved] = next.splice(startIndex, 1)
            next.splice(currentIndex, 0, moved)
            return next
          })
        }
        resetDragState()
      }, 180)
    }

    function resetDragState() {
      isDragging = false
      if (overlayEl && overlayEl.parentNode) {
        overlayEl.parentNode.removeChild(overlayEl)
      }
      overlayEl = null

      if (activeCard) {
        activeCard.classList.remove('is-dragged-placeholder')
        const item = activeId ? exerciseMap.get(activeId) : undefined
        if (item) {
          const activeNameEl = activeCard.querySelector('.reorder-card-name')
          if (activeNameEl) activeNameEl.textContent = item.exercise.exerciseNameSnapshot ?? 'Exercise'
        }
        activeCard = null
      }

      activeId = null
      startIndex = -1
      currentIndex = -1
      document.body.style.userSelect = ''
      document.body.style.webkitUserSelect = ''

      if (cards) {
        cards.forEach((c) => {
          c.style.transform = ''
          const posEl = c.querySelector('.reorder-card-pos')
          if (posEl) posEl.textContent = String(Number(c.dataset.index) + 1)
        })
      }
    }

    handles.forEach((h) => {
      h.addEventListener('pointerdown', onHandlePointerDown)
    })

    return () => {
      handles.forEach((h) => {
        h.removeEventListener('pointerdown', onHandlePointerDown)
      })
      cleanupListeners()
      if (overlayEl && overlayEl.parentNode) {
        overlayEl.parentNode.removeChild(overlayEl)
      }
    }
  }, [draftOrder, exerciseMap, playEffect, setDrafts])

  async function handleDone() {
    setIsSaving(true)
    playEffect('select')
    try {
      await onDone(draftOrder)
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <CommandPageFrame
      className="workout-page active-workout-command-frame"
      terminalTitle="FITDEX // TRAINING TERMINAL"
      terminalMeta="REORDER"
    >
      <div className="active-workout-page reorder-view">
        <div className="active-workout-header">
          <div className="session-top-row">
            <button
              className="session-hub-link"
              type="button"
              onClick={() => { playEffect('select'); onCancel() }}
              aria-label="Cancel and back to workout"
            >
              ← Back
            </button>
            <span className="session-state-badge">
              <span>Reorder Mode</span>
            </span>
          </div>
          <div className="active-workout-title-row">
            <h1 className="active-workout-name-text">REORDER EXERCISES</h1>
          </div>
        </div>

        <div className="workout-continuity-strip" role="status">
          <span>WORKOUT IN PROGRESS</span>
          <strong>{workoutName}</strong>
        </div>

        <div className="reorder-header-pane">
          <p className="reorder-helper">Drag the handle to change the order for this workout.</p>
          <p className="reorder-subhelper">Changes apply to this workout only. Saved routine remains intact.</p>
        </div>

        <div className="reorder-scroll-container">
          <div className="reorder-list-area" id="reorderList" ref={listRef}>
            {draftOrder.map((id, index) => {
              const item = exerciseMap.get(id)
              if (!item) return null
              const exerciseName = item.exercise.exerciseNameSnapshot ?? 'Exercise'
              const loggedCount = item.sets.filter(
                (s) => getWorkoutSetLogState(applySetDraft(s, setDrafts.get(s.id)), item.exercise.trackingTypeSnapshot ?? 'reps_only') === 'logged'
              ).length
              const totalSets = item.sets.length

              return (
                <div
                  className="reorder-card"
                  key={id}
                  data-id={id}
                  data-index={index}
                >
                  <div
                    className="reorder-drag-handle"
                    data-handle="true"
                    aria-label={`Reorder ${exerciseName}`}
                    role="button"
                    tabIndex={0}
                  >
                    <GripVertical size={18} aria-hidden="true" />
                  </div>
                  <span className="reorder-card-pos">{index + 1}</span>
                  <div className="reorder-card-info">
                    <div className="reorder-card-name">{exerciseName}</div>
                    <div className="reorder-card-sets">{loggedCount}/{totalSets} sets logged</div>
                  </div>
                  <span className={`reorder-card-status ${loggedCount > 0 ? 'logged' : ''}`}>
                    {loggedCount > 0 ? `${loggedCount} logged` : '0 logged'}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        <div className="reorder-footer">
          <div className="reorder-actions">
            <button
              type="button"
              className="secondary-button btn-cancel"
              onClick={() => { playEffect('select'); onCancel() }}
              disabled={isSaving}
            >
              Cancel
            </button>
            <button
              type="button"
              className="primary-button btn-done"
              onClick={handleDone}
              disabled={isSaving}
            >
              {isSaving ? 'Saving…' : 'Done'}
            </button>
          </div>
        </div>
      </div>
    </CommandPageFrame>
  )
}
