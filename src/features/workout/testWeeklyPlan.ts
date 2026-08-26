/// <reference types="node" />
import 'fake-indexeddb/auto'
import assert from 'node:assert/strict'
import Dexie from 'dexie'
import type { Workout } from '../../data/models.ts'
import { clearRoutineFromPlan, loadWeeklyPlan, saveWeeklyPlanDay, weekdayIdForLocalDateKey, weeklyPlanAssignmentLabel } from './weeklyPlan.ts'

await Dexie.delete('fitdex')
const { db, DATABASE_SCHEMA_VERSION } = await import('../../data/database.ts')
const routines = await import('./routineRepository.ts')
const workouts = await import('./workoutRepository.ts')
await db.open()
assert.equal(DATABASE_SCHEMA_VERSION, 6)
const timestamp = '2026-08-24T00:00:00.000Z'
await db.settings.put({ id: 'settings', displayName: 'Plan Tester', themeFamily: 'amazonians', brightness: 'dark', units: 'imperial', selectedAvatarId: 'avatar:test', createdAt: timestamp, updatedAt: timestamp })

let plan = await loadWeeklyPlan()
assert.equal(plan.configured, false)
assert.ok(Object.values(plan.days).every((day) => day.type === 'no_plan'))
plan = await saveWeeklyPlanDay('monday', { type: 'workout_day' })
plan = await saveWeeklyPlanDay('tuesday', { type: 'rest_day' })
plan = await saveWeeklyPlanDay('wednesday', { type: 'no_plan' })
assert.equal(plan.days.monday.type, 'workout_day')
assert.equal(plan.days.tuesday.type, 'rest_day')
assert.equal(plan.days.wednesday.type, 'no_plan')
assert.equal(weekdayIdForLocalDateKey('2026-08-24'), 'monday')

const routine = await routines.createRoutine('Routine A')
plan = await saveWeeklyPlanDay('thursday', { type: 'routine', routineId: routine.id })
assert.equal(weeklyPlanAssignmentLabel(plan.days.thursday, [routine]), 'Routine A')
const renamed = await routines.renameRoutine(routine, 'Push Day')
assert.equal(weeklyPlanAssignmentLabel(plan.days.thursday, [renamed]), 'Push Day', 'schedule resolves the live routine name')

const completed: Workout = { id: 'completed:scheduled', routineId: routine.id, routineNameSnapshot: 'Routine A', nameSnapshot: 'Routine A', status: 'completed', startedAt: '2026-08-24T18:20:00.000Z', completedAt: '2026-08-24T19:00:00.000Z', durationSeconds: 2400, createdAt: timestamp, updatedAt: timestamp }
await db.workouts.add(completed)
await routines.deleteRoutine(routine.id)
plan = await loadWeeklyPlan()
assert.equal(plan.days.thursday.type, 'no_plan', 'routine deletion clears its assignments safely')
assert.ok(await db.workouts.get(completed.id), 'routine deletion never rewrites completed history')
assert.equal(clearRoutineFromPlan({ monday: { type: 'routine', routineId: 'x' }, tuesday: { type: 'rest_day' } }, 'x')?.monday?.type, 'no_plan')

const crossMidnight: Workout = { id: 'completed:cross-midnight', nameSnapshot: 'Late Workout', status: 'completed', startedAt: '2026-08-24T18:20:00.000Z', completedAt: '2026-08-24T19:20:00.000Z', durationSeconds: 3600, createdAt: timestamp, updatedAt: timestamp }
await db.workouts.put(crossMidnight)
assert.ok((await workouts.getCompletedWorkoutsForStartDate('2026-08-24')).some((item) => item.workout.id === crossMidnight.id))
assert.equal((await workouts.getCompletedWorkoutsForStartDate('2026-08-25')).some((item) => item.workout.id === crossMidnight.id), false)

const active = await workouts.startEmptyWorkout('Active Snapshot')
await saveWeeklyPlanDay('friday', { type: 'workout_day' })
assert.equal((await db.workouts.get(active.workout.id))?.nameSnapshot, 'Active Snapshot', 'schedule editing does not mutate the active workout')
await workouts.discardWorkout(active.workout.id)

const settings = await db.settings.get('settings')
assert.equal(settings?.displayName, 'Plan Tester')
assert.equal(settings?.themeFamily, 'amazonians')
assert.equal(settings?.units, 'imperial')
assert.equal(settings?.selectedAvatarId, 'avatar:test')
db.close()
await Dexie.delete('fitdex')
console.log('Weekly Plan tests passed: four states, zero-routine planning, stable routine IDs, rename, delete cleanup, local-start ownership, history safety, and Settings preservation')
