/// <reference types="node" />
import 'fake-indexeddb/auto'
import assert from 'node:assert/strict'
import Dexie from 'dexie'
import type { Exercise, Workout } from '../../data/models.ts'
import { createPausedTimerState, createResumedTimerState, getFinalWorkoutDuration, getWorkoutDuration, isWorkoutTimerPaused } from './workoutModel.ts'

const at = (minutes: number) => Date.parse('2026-08-25T10:00:00.000Z') + minutes * 60_000
const baseWorkout: Workout = {
  id: 'workout:timer-unit', nameSnapshot: 'Timer test', status: 'active',
  startedAt: new Date(at(0)).toISOString(), timerState: 'running', accumulatedActiveSeconds: 600,
  lastResumedAt: new Date(at(0)).toISOString(), createdAt: new Date(at(0)).toISOString(), updatedAt: new Date(at(0)).toISOString(),
}

assert.equal(getWorkoutDuration(baseWorkout, at(5)), 900)
const paused = { ...baseWorkout, ...createPausedTimerState(baseWorkout, at(5)) }
assert.equal(paused.accumulatedActiveSeconds, 900)
assert.equal(isWorkoutTimerPaused(paused), true)
assert.equal(getWorkoutDuration(paused, at(15)), 900)
const resumed = { ...paused, ...createResumedTimerState(paused, at(15)) }
assert.equal(getWorkoutDuration(resumed, at(20)), 1200)
assert.equal(getFinalWorkoutDuration(resumed, at(20)), 1200)
assert.throws(() => createPausedTimerState({ ...baseWorkout, status: 'completed' }, at(5)), /active/)
assert.throws(() => createResumedTimerState(baseWorkout, at(5)), /already running/)

const completedSnapshot = { ...resumed, status: 'completed' as const, durationSeconds: 1200 }
assert.equal(getWorkoutDuration(completedSnapshot, at(40)), 1200)

await Dexie.delete('fitdex')
const { db, DATABASE_SCHEMA_VERSION } = await import('../../data/database.ts')
const repository = await import('./workoutRepository.ts')
await db.open()
assert.equal(DATABASE_SCHEMA_VERSION, 7)

const exercise: Exercise = {
  id: 'custom-exercise:timer-test', name: 'Timer Test Press', aliases: [], category: 'Chest', categories: ['Chest'], primaryCategory: 'Chest',
  primaryMuscles: ['Chest'], secondaryMuscles: [], muscleRegions: ['Chest'], equipment: 'Bodyweight', trackingType: 'reps_only',
  source: 'custom', archived: false, createdAt: new Date(at(0)).toISOString(), updatedAt: new Date(at(0)).toISOString(),
}
await db.exercises.add(exercise)

// 1. Start Open Workout with zero exercises: active workout exists, timer NOT running, elapsed active time = 0
const emptyOpen = await repository.startEmptyWorkout('Open Session', at(0))
assert.equal(emptyOpen.workout.status, 'active')
assert.equal(emptyOpen.workout.timerState, 'paused')
assert.equal(emptyOpen.workout.accumulatedActiveSeconds, 0)
assert.equal(emptyOpen.workout.lastResumedAt, undefined)
assert.equal(getWorkoutDuration(emptyOpen.workout, at(10)), 0)
assert.equal(isWorkoutTimerPaused(emptyOpen.workout, 0), true)

// 2 & 3. Attempting timer start with zero exercises: throws error, no timer transition
await assert.rejects(
  () => repository.resumeWorkout(emptyOpen.workout.id, at(10)),
  /Add at least one exercise to start your workout timer./
)
let emptyDetail = await repository.getWorkoutDetail(emptyOpen.workout.id)
assert.equal(emptyDetail.workout.timerState, 'paused')
assert.equal(getWorkoutDuration(emptyDetail.workout, at(10)), 0)

// 4 & 5. Adding first exercise: does NOT auto-start timer
await repository.addExercisesToWorkout(emptyOpen.workout.id, [exercise])
emptyDetail = await repository.getWorkoutDetail(emptyOpen.workout.id)
assert.equal(emptyDetail.exercises.length, 1)
assert.equal(emptyDetail.workout.timerState, 'paused')
assert.equal(getWorkoutDuration(emptyDetail.workout, at(15)), 0)

// 6. Explicit Start Timer after first exercise: timer begins running
await repository.resumeWorkout(emptyOpen.workout.id, at(15))
emptyDetail = await repository.getWorkoutDetail(emptyOpen.workout.id)
assert.equal(emptyDetail.workout.timerState, 'running')
assert.equal(getWorkoutDuration(emptyDetail.workout, at(20)), 300)
await repository.discardWorkout(emptyOpen.workout.id)

// Persistent timer tests with running session
const runningSession = await repository.startEmptyWorkout('Persistent Timer', at(0))
await repository.addExercisesToWorkout(runningSession.workout.id, [exercise])
await repository.resumeWorkout(runningSession.workout.id, at(0))
let detail = await repository.getWorkoutDetail(runningSession.workout.id)
for (const set of detail.exercises[0].sets) await repository.updateWorkoutSet(set.id, { reps: 8 })
await repository.pauseWorkout(runningSession.workout.id, at(5))

db.close()
await db.open()
detail = await repository.getWorkoutDetail(runningSession.workout.id)
assert.equal(isWorkoutTimerPaused(detail.workout), true)
assert.equal(getWorkoutDuration(detail.workout, at(15)), 300)

await repository.resumeWorkout(runningSession.workout.id, at(15))
db.close()
await db.open()
detail = await repository.getWorkoutDetail(runningSession.workout.id)
assert.equal(isWorkoutTimerPaused(detail.workout), false)
assert.equal(getWorkoutDuration(detail.workout, at(20)), 600)

const completed = await repository.finishWorkout(runningSession.workout.id, at(20))
assert.equal(completed.workout.durationSeconds, 600)
assert.equal(completed.workout.timerState, undefined)
assert.equal(completed.workout.accumulatedActiveSeconds, undefined)
assert.equal(completed.workout.lastResumedAt, undefined)
assert.equal(getWorkoutDuration(completed.workout, at(40)), 600)
await assert.rejects(() => repository.pauseWorkout(completed.workout.id, at(40)), /no longer active/)
await assert.rejects(() => repository.resumeWorkout(completed.workout.id, at(40)), /no longer active/)

const pausedFinish = await repository.startEmptyWorkout('Paused Finish', at(0))
await repository.addExercisesToWorkout(pausedFinish.workout.id, [exercise])
await repository.resumeWorkout(pausedFinish.workout.id, at(0))
detail = await repository.getWorkoutDetail(pausedFinish.workout.id)
await repository.updateWorkoutSet(detail.exercises[0].sets[0].id, { reps: 5 })
await repository.pauseWorkout(pausedFinish.workout.id, at(5))
await assert.rejects(() => repository.finishWorkout(pausedFinish.workout.id, at(35)), repository.IncompleteWorkoutError)
detail = await repository.getWorkoutDetail(pausedFinish.workout.id)
assert.equal(isWorkoutTimerPaused(detail.workout), true)
assert.equal(getWorkoutDuration(detail.workout, at(35)), 300)
for (const emptySet of detail.exercises[0].sets.slice(1)) await repository.removeWorkoutSet(emptySet.id)
const completedWhilePaused = await repository.finishWorkout(pausedFinish.workout.id, at(35))
assert.equal(completedWhilePaused.workout.durationSeconds, 300)

const invalidRunning = await repository.startEmptyWorkout('Invalid Running Finish', at(0))
await repository.addExercisesToWorkout(invalidRunning.workout.id, [exercise])
await repository.resumeWorkout(invalidRunning.workout.id, at(0))
detail = await repository.getWorkoutDetail(invalidRunning.workout.id)
await repository.updateWorkoutSet(detail.exercises[0].sets[0].id, { reps: 5 })
await assert.rejects(() => repository.finishWorkout(invalidRunning.workout.id, at(5)), repository.IncompleteWorkoutError)
detail = await repository.getWorkoutDetail(invalidRunning.workout.id)
assert.equal(detail.workout.status, 'active')
assert.equal(isWorkoutTimerPaused(detail.workout), false)
assert.equal(getWorkoutDuration(detail.workout, at(10)), 600, 'a rejected running Finish does not stop or lose active time')
await repository.discardWorkout(invalidRunning.workout.id)

// 8. Invalid legacy state: zero exercises + timerState running -> safely normalized to non-running, 0 wall time accrued
const legacyEmpty = await repository.startEmptyWorkout('Legacy Empty', at(0))
await db.workouts.update(legacyEmpty.workout.id, { timerState: 'running', accumulatedActiveSeconds: 0, lastResumedAt: new Date(at(0)).toISOString() })
db.close()
await db.open()
detail = await repository.getWorkoutDetail(legacyEmpty.workout.id)
assert.equal(detail.workout.timerState, 'paused')
assert.equal(getWorkoutDuration(detail.workout, at(7)), 0, 'empty legacy workout accrues no time')
await repository.discardWorkout(legacyEmpty.workout.id)

// 9. Legacy running workout with exercises preserves recovery elapsed time
const legacy = await repository.startEmptyWorkout('Legacy Running', at(0))
await repository.addExercisesToWorkout(legacy.workout.id, [exercise])
await db.workouts.update(legacy.workout.id, { timerState: undefined, accumulatedActiveSeconds: undefined, lastResumedAt: undefined })
db.close()
await db.open()
detail = await repository.getWorkoutDetail(legacy.workout.id)
assert.equal(getWorkoutDuration(detail.workout, at(7)), 420)
await repository.pauseWorkout(legacy.workout.id, at(7))
await repository.discardWorkout(legacy.workout.id)

db.close()
await Dexie.delete('fitdex')
console.log('Workout timer tests passed: running, persisted pause/resume, reload reconstruction, immutable finish, paused finish, legacy fallback, and guarded transitions')
