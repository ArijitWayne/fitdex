/// <reference types="node" />
import 'fake-indexeddb/auto'
import assert from 'node:assert/strict'
import Dexie from 'dexie'
import type { Workout } from '../../data/models.ts'

await Dexie.delete('fitdex')
const { db } = await import('../../data/database.ts')
const { loadHomeDashboard } = await import('./homeRepository.ts')
const { createRoutine, deleteRoutine, renameRoutine } = await import('../workout/routineRepository.ts')
const { saveWeeklyPlanDay } = await import('../workout/weeklyPlan.ts')
const { deleteCompletedWorkout } = await import('../workout/workoutRepository.ts')
await db.open()
const monday = '2026-08-24'
const timestamp = '2026-08-24T00:00:00.000Z'

let home = await loadHomeDashboard(monday)
assert.equal(home.routines.length, 0)
assert.equal(home.weeklyPlan.configured, false)
assert.equal(home.todayAssignment.type, 'no_plan')

await saveWeeklyPlanDay('monday', { type: 'workout_day' })
home = await loadHomeDashboard(monday)
assert.equal(home.todayAssignment.type, 'workout_day')
assert.equal(home.routines.length, 0, 'Workout Day requires no routine')
await saveWeeklyPlanDay('monday', { type: 'rest_day' })
assert.equal((await loadHomeDashboard(monday)).todayAssignment.type, 'rest_day')
await saveWeeklyPlanDay('monday', { type: 'no_plan' })
assert.equal((await loadHomeDashboard(monday)).todayAssignment.type, 'no_plan')

const routine = await createRoutine('Routine A')
await saveWeeklyPlanDay('monday', { type: 'routine', routineId: routine.id })
home = await loadHomeDashboard(monday)
assert.equal(home.scheduledRoutine?.routine.name, 'Routine A')
await renameRoutine(routine, 'Push Day')
home = await loadHomeDashboard(monday)
assert.equal(home.scheduledRoutine?.routine.name, 'Push Day')

const other: Workout = { id: 'workout:other', routineId: 'routine:legs', routineNameSnapshot: 'Legs', nameSnapshot: 'Legs', status: 'completed', startedAt: '2026-08-24T08:00:00.000Z', completedAt: '2026-08-24T09:00:00.000Z', durationSeconds: 3600, createdAt: timestamp, updatedAt: timestamp }
await db.workouts.add(other)
home = await loadHomeDashboard(monday)
assert.equal(home.completedByStartDate.length, 1)
assert.equal(home.completedByStartDate.some((summary) => summary.workout.routineId === routine.id), false, 'a different workout does not satisfy Routine Day')

const matching: Workout = { id: 'workout:matching', routineId: routine.id, routineNameSnapshot: 'Push Day', nameSnapshot: 'Push Day', status: 'completed', startedAt: '2026-08-24T18:20:00.000Z', completedAt: '2026-08-24T19:20:00.000Z', durationSeconds: 3600, createdAt: timestamp, updatedAt: timestamp }
await db.workouts.add(matching)
home = await loadHomeDashboard(monday)
assert.ok(home.completedByStartDate.some((summary) => summary.workout.routineId === routine.id), 'matching stable routine ID satisfies Routine Day')
assert.equal((await loadHomeDashboard('2026-08-25')).completedByStartDate.some((summary) => summary.workout.id === matching.id), false, 'cross-midnight completion belongs to local start day')
await deleteCompletedWorkout(matching.id)
assert.equal((await loadHomeDashboard(monday)).completedByStartDate.some((summary) => summary.workout.routineId === routine.id), false, 'deletion recalculates satisfaction')

await saveWeeklyPlanDay('monday', { type: 'rest_day' })
home = await loadHomeDashboard(monday)
assert.equal(home.todayAssignment.type, 'rest_day')
assert.equal(home.completedByStartDate.length, 1, 'activity does not convert the Rest Day assignment')
await saveWeeklyPlanDay('monday', { type: 'routine', routineId: routine.id })
await deleteRoutine(routine.id)
home = await loadHomeDashboard(monday)
assert.equal(home.todayAssignment.type, 'no_plan')
assert.equal(home.completedByStartDate.length, 1, 'schedule edits and routine deletion preserve history')

db.close()
await Dexie.delete('fitdex')
console.log('Home schedule tests passed: zero-routine states, routine rename/matching, different workouts, Rest activity, cross-midnight ownership, deletion recalculation, and history safety')
