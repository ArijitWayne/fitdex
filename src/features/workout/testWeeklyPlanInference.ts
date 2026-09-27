/// <reference types="node" />
import 'fake-indexeddb/auto'
import assert from 'node:assert/strict'
import Dexie from 'dexie'
import type { Exercise, PlanDaySnapshot, Workout } from '../../data/models.ts'

await Dexie.delete('fitdex')
const { db } = await import('../../data/database.ts')
const { loadGamificationDashboard } = await import('../gamification/gamificationRepository.ts')
const routines = await import('./routineRepository.ts')
const workouts = await import('./workoutRepository.ts')
const { inferWeeklyPlanFromCompletedWorkout, loadWeeklyPlan, updateFutureWeekdayAssignment } = await import('./weeklyPlan.ts')
const { acknowledgeWeeklyPlanFeedback, listWeeklyPlanFeedback, resolveWeeklyPlanFeedback } = await import('./weeklyPlanFeedback.ts')
await db.open()

const exercise: Exercise = {
  id: 'exercise:plan-inference', name: 'Plan Inference Row', aliases: [], category: 'Back', categories: ['Back'], primaryCategory: 'Back',
  primaryMuscles: ['Back'], secondaryMuscles: [], muscleRegions: ['Back'], equipment: 'Cable', trackingType: 'reps_only', movementPattern: 'Horizontal Pull',
  source: 'custom', archived: false, createdAt: '2026-08-24T00:00:00.000Z', updatedAt: '2026-08-24T00:00:00.000Z',
}

async function reset() {
  await Promise.all([
    db.settings.clear(), db.workouts.clear(), db.workoutExercises.clear(), db.workoutSets.clear(), db.workoutRoutines.clear(), db.routineExercises.clear(), db.exercises.clear(),
    db.planDaySnapshots.clear(), db.streakFreezeEvents.clear(), db.streakPauses.clear(), db.planChangeEvents.clear(), db.xpEvents.clear(), db.achievementUnlocks.clear(),
  ])
  await db.exercises.put(exercise)
}

async function logAllSets(workoutId: string) {
  const detail = await workouts.getWorkoutDetail(workoutId)
  for (const set of detail.exercises.flatMap((entry) => entry.sets)) await workouts.updateWorkoutSet(set.id, { reps: 10 })
}

function completedWorkout(id: string, date: string, routineId?: string): Workout {
  return { id, routineId, routineNameSnapshot: routineId ? routineId : undefined, nameSnapshot: routineId ? 'Routine Workout' : 'Ad-hoc Workout', status: 'completed', startedAt: `${date}T09:00:00.000Z`, completedAt: `${date}T10:00:00.000Z`, durationSeconds: 3600, createdAt: `${date}T09:00:00.000Z`, updatedAt: `${date}T10:00:00.000Z` }
}

function snapshot(localDate: string, plannedType: PlanDaySnapshot['plannedType'], result: PlanDaySnapshot['result'], routineId?: string): PlanDaySnapshot {
  return { id: `plan-day:${localDate}`, localDate, plannedType, routineId, result, createdAt: `${localDate}T00:00:00.000Z`, updatedAt: `${localDate}T00:00:00.000Z` }
}

// Saved-routine completion learns stable routine identity after Part 1 records one success.
await reset()
const push = await routines.createRoutine('Push')
await routines.addExercisesToRoutine(push.id, [exercise])
const mondayStart = new Date('2026-08-24T09:00:00').getTime()
const routineSession = await workouts.startWorkoutFromRoutine(push.id, mondayStart)
await logAllSets(routineSession.workout.id)
const completedRoutine = await workouts.finishWorkout(routineSession.workout.id, new Date('2026-08-24T10:00:00').getTime())
let plan = await loadWeeklyPlan()
assert.deepEqual(plan.days.monday, { type: 'routine', routineId: push.id })
assert.equal((await loadGamificationDashboard('2026-08-24', false)).streak.current, 1)
assert.equal(await db.planDaySnapshots.where('result').equals('success').count(), 1, 'inference adds no second streak day')
let feedback = await listWeeklyPlanFeedback()
assert.equal(feedback.length, 1)
assert.equal(feedback[0].type, 'inferred_routine')
if (feedback[0].type === 'inferred_routine') {
  assert.equal(feedback[0].routineName, 'Push')
  assert.equal(feedback[0].streakBefore, 0)
  assert.equal(feedback[0].streakAfter, 1)
}
const settingsAfterInference = await db.settings.get('settings')
await inferWeeklyPlanFromCompletedWorkout(completedRoutine.workout)
assert.equal((await db.settings.get('settings'))?.updatedAt, settingsAfterInference?.updatedAt, 'reprocessing same workout performs no plan write')
await acknowledgeWeeklyPlanFeedback(feedback[0].id)
await inferWeeklyPlanFromCompletedWorkout(completedRoutine.workout)
assert.deepEqual(await listWeeklyPlanFeedback(), [], 'saved-routine result is not recreated after acknowledgement')

// Ad-hoc completion learns generic Workout Day and creates no routine.
await reset()
const tuesdaySession = await workouts.startPreparedWorkout([exercise], 'Back Session', new Date('2026-08-25T09:00:00').getTime())
await logAllSets(tuesdaySession.workout.id)
await workouts.finishWorkout(tuesdaySession.workout.id, new Date('2026-08-25T10:00:00').getTime())
plan = await loadWeeklyPlan()
assert.deepEqual(plan.days.tuesday, { type: 'workout_day' })
assert.equal(await db.workoutRoutines.count(), 0)
feedback = await listWeeklyPlanFeedback()
assert.equal(feedback.length, 1)
assert.equal(feedback[0].type, 'inferred_workout_day')

// Normal planned success refreshes state without an inference/decision result.
await reset()
const planned = await routines.createRoutine('Planned Push')
await routines.addExercisesToRoutine(planned.id, [exercise])
await db.settings.put({ id: 'settings', weeklyPlanConfigured: true, weeklyPlanConfiguredAt: '2026-08-28T00:00:00.000Z', weeklyPlan: { friday: { type: 'routine', routineId: planned.id } }, createdAt: '2026-08-28T00:00:00.000Z', updatedAt: '2026-08-28T00:00:00.000Z' })
const plannedSession = await workouts.startWorkoutFromRoutine(planned.id, new Date('2026-08-28T09:00:00').getTime())
await logAllSets(plannedSession.workout.id)
await workouts.finishWorkout(plannedSession.workout.id, new Date('2026-08-28T10:00:00').getTime())
assert.equal((await db.planDaySnapshots.get('plan-day:2026-08-28'))?.result, 'success')
assert.deepEqual(await listWeeklyPlanFeedback(), [], 'normal planned completion opens no plan feedback')

// Rest Day completion asks first; KEEP preserves the recurring plan.
await reset()
const extra = await routines.createRoutine('Extra Pull')
await routines.addExercisesToRoutine(extra.id, [exercise])
await db.settings.put({ id: 'settings', weeklyPlanConfigured: true, weeklyPlanConfiguredAt: '2026-08-26T00:00:00.000Z', weeklyPlan: { wednesday: { type: 'rest_day' } }, createdAt: '2026-08-26T00:00:00.000Z', updatedAt: '2026-08-26T00:00:00.000Z' })
const restSession = await workouts.startWorkoutFromRoutine(extra.id, new Date('2026-08-26T09:00:00').getTime())
await logAllSets(restSession.workout.id)
await workouts.finishWorkout(restSession.workout.id, new Date('2026-08-26T10:00:00').getTime())
feedback = await listWeeklyPlanFeedback()
assert.equal(feedback[0]?.type, 'rest_day_decision')
if (feedback[0]?.type === 'rest_day_decision') {
  assert.equal(feedback[0].streakBefore, 0)
  assert.equal(feedback[0].streakAfter, 1)
}
assert.equal((await db.planDaySnapshots.get('plan-day:2026-08-26'))?.result, 'success', 'Rest Day workout credits the dated result')
assert.equal((await loadGamificationDashboard('2026-08-26', false)).streak.current, 1, 'Rest Day workout increments streak once')
assert.deepEqual((await loadWeeklyPlan()).days.wednesday, { type: 'rest_day' }, 'decision does not mutate before action')
const secondSameDayRestSession = await workouts.startWorkoutFromRoutine(extra.id, new Date('2026-08-26T11:00:00').getTime())
await logAllSets(secondSameDayRestSession.workout.id)
await workouts.finishWorkout(secondSameDayRestSession.workout.id, new Date('2026-08-26T12:00:00').getTime())
assert.equal((await listWeeklyPlanFeedback()).length, 1, 'multiple Rest Day workouts produce one decision')
assert.equal((await loadGamificationDashboard('2026-08-26', false)).streak.current, 1, 'multiple Rest Day workouts credit one date')
await resolveWeeklyPlanFeedback(feedback[0].id, 'keep')
assert.deepEqual((await loadWeeklyPlan()).days.wednesday, { type: 'rest_day' }, 'KEEP preserves Rest Day')
assert.equal((await db.planDaySnapshots.get('plan-day:2026-08-26'))?.result, 'success', 'KEEP does not undo credited Rest Day success')

// UPDATE uses the future-assignment API and leaves the historical Rest Day snapshot intact.
const secondRestSession = await workouts.startWorkoutFromRoutine(extra.id, new Date('2026-09-02T09:00:00').getTime())
await logAllSets(secondRestSession.workout.id)
await workouts.finishWorkout(secondRestSession.workout.id, new Date('2026-09-02T10:00:00').getTime())
feedback = await listWeeklyPlanFeedback()
assert.equal(feedback[0]?.type, 'rest_day_decision')
await resolveWeeklyPlanFeedback(feedback[0].id, 'update')
assert.deepEqual((await loadWeeklyPlan()).days.wednesday, { type: 'routine', routineId: extra.id })
assert.equal((await db.planDaySnapshots.get('plan-day:2026-09-02'))?.plannedType, 'rest_day')
assert.equal((await db.planDaySnapshots.get('plan-day:2026-09-02'))?.result, 'success', 'UPDATE preserves today’s credited Rest Day success')

// A different saved routine also waits for an explicit choice before changing future Fridays.
await reset()
const expectedRoutine = await routines.createRoutine('Push')
const completedDifferent = await routines.createRoutine('Pull')
await routines.addExercisesToRoutine(completedDifferent.id, [exercise])
await db.settings.put({ id: 'settings', weeklyPlanConfigured: true, weeklyPlanConfiguredAt: '2026-09-04T00:00:00.000Z', weeklyPlan: { friday: { type: 'routine', routineId: expectedRoutine.id } }, createdAt: '2026-09-04T00:00:00.000Z', updatedAt: '2026-09-04T00:00:00.000Z' })
const differentSession = await workouts.startWorkoutFromRoutine(completedDifferent.id, new Date('2026-09-04T09:00:00').getTime())
await logAllSets(differentSession.workout.id)
await workouts.finishWorkout(differentSession.workout.id, new Date('2026-09-04T10:00:00').getTime())
feedback = await listWeeklyPlanFeedback()
assert.equal(feedback[0]?.type, 'different_routine_decision')
assert.deepEqual((await loadWeeklyPlan()).days.friday, { type: 'routine', routineId: expectedRoutine.id })
await resolveWeeklyPlanFeedback(feedback[0].id, 'keep')
assert.deepEqual((await loadWeeklyPlan()).days.friday, { type: 'routine', routineId: expectedRoutine.id }, 'KEEP preserves the planned routine')
const secondDifferentSession = await workouts.startWorkoutFromRoutine(completedDifferent.id, new Date('2026-09-11T09:00:00').getTime())
await logAllSets(secondDifferentSession.workout.id)
await workouts.finishWorkout(secondDifferentSession.workout.id, new Date('2026-09-11T10:00:00').getTime())
feedback = await listWeeklyPlanFeedback()
assert.equal(feedback[0]?.type, 'different_routine_decision')
await resolveWeeklyPlanFeedback(feedback[0].id, 'update')
assert.deepEqual((await loadWeeklyPlan()).days.friday, { type: 'routine', routineId: completedDifferent.id })
assert.equal((await db.planDaySnapshots.get('plan-day:2026-09-11'))?.routineId, expectedRoutine.id, 'historical expected routine remains immutable')

// Explicit assignments are never auto-overwritten, including mismatched routines and Rest Day.
await reset()
const expected = await routines.createRoutine('Expected')
const different = await routines.createRoutine('Different')
await db.settings.put({ id: 'settings', weeklyPlanConfigured: true, weeklyPlanConfiguredAt: '2026-08-24T00:00:00.000Z', weeklyPlan: { monday: { type: 'routine', routineId: expected.id }, tuesday: { type: 'workout_day' }, wednesday: { type: 'rest_day' } }, createdAt: '2026-08-24T00:00:00.000Z', updatedAt: '2026-08-24T00:00:00.000Z' })
const explicitCases = [
  { workout: completedWorkout('explicit:routine', '2026-08-24', different.id), row: snapshot('2026-08-24', 'routine', 'missed', expected.id) },
  { workout: completedWorkout('explicit:workout', '2026-08-25'), row: snapshot('2026-08-25', 'workout_day', 'success') },
  { workout: completedWorkout('explicit:rest', '2026-08-26'), row: snapshot('2026-08-26', 'rest_day', 'rest') },
]
await db.workouts.bulkPut(explicitCases.map((entry) => entry.workout))
await db.planDaySnapshots.bulkPut(explicitCases.map((entry) => entry.row))
for (const entry of explicitCases) await inferWeeklyPlanFromCompletedWorkout(entry.workout)
plan = await loadWeeklyPlan()
assert.deepEqual(plan.days.monday, { type: 'routine', routineId: expected.id })
assert.deepEqual(plan.days.tuesday, { type: 'workout_day' })
assert.deepEqual(plan.days.wednesday, { type: 'rest_day' })

// Explicit domain update changes current/future plan only. Legacy reset records remain readable but inert.
await db.planDaySnapshots.put(snapshot('2026-08-17', 'routine', 'success', expected.id))
await db.planChangeEvents.put({ id: 'legacy:reset', sourceKey: 'legacy:reset', type: 'reset', effectiveDate: '2026-08-17', occurredAt: '2026-08-17T12:00:00.000Z', createdAt: '2026-08-17T12:00:00.000Z', updatedAt: '2026-08-17T12:00:00.000Z' })
await db.streakFreezeEvents.put({ id: 'freeze:initial', sourceKey: 'freeze:initial', amount: 2, type: 'initial', occurredAt: '2026-08-17T12:00:00.000Z', createdAt: '2026-08-17T12:00:00.000Z', updatedAt: '2026-08-17T12:00:00.000Z' })
await db.streakPauses.put({ id: 'pause:legacy', reason: 'travel', startDate: '2026-09-14', endDate: '2026-09-15', createdAt: '2026-08-17T12:00:00.000Z', updatedAt: '2026-08-17T12:00:00.000Z' })
await updateFutureWeekdayAssignment('monday', { type: 'routine', routineId: different.id }, { now: new Date('2026-08-31T12:00:00') })
plan = await loadWeeklyPlan()
assert.deepEqual(plan.days.monday, { type: 'routine', routineId: different.id })
assert.equal((await db.planDaySnapshots.get('plan-day:2026-08-17'))?.routineId, expected.id, 'finalized history stays unchanged')
assert.equal(await db.planDaySnapshots.where('localDate').equals('2026-08-31').count(), 1, 'today keeps one snapshot')
assert.equal((await db.planDaySnapshots.get('plan-day:2026-08-31'))?.routineId, different.id, 'pending today uses edited assignment')
assert.equal(await db.planChangeEvents.count(), 1, 'editing creates no new policy event')
assert.equal((await loadGamificationDashboard('2026-08-31', false)).freezeBalance, 2, 'editing consumes no Freeze')
assert.equal(await db.streakPauses.count(), 1, 'editing does not change pause state')
assert.equal((await loadGamificationDashboard('2026-08-31', false)).streak.current, 1, 'legacy edit reset is ignored')
assert.equal((await loadGamificationDashboard('2026-09-07', false)).planPreview['2026-09-07'].routineId, different.id, 'future Monday uses updated routine reference')

await db.close()
await Dexie.delete('fitdex')
console.log('Weekly Plan inference tests passed: saved routine, ad-hoc, idempotency, safeguards, free edits, historical integrity, and live future references')
