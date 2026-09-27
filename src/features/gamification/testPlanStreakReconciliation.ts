/// <reference types="node" />
import 'fake-indexeddb/auto'
import assert from 'node:assert/strict'
import Dexie from 'dexie'
import type { PlanDaySnapshot, SettingsRecord, Workout } from '../../data/models.ts'

await Dexie.delete('fitdex')
const { db } = await import('../../data/database.ts')
const { loadGamificationDashboard, reconcileGamification } = await import('./gamificationRepository.ts')
const { acknowledgeWeeklyPlanFeedback, listWeeklyPlanFeedback } = await import('../workout/weeklyPlanFeedback.ts')

const initializedAt = '2026-01-05T00:00:00.000Z'
const now = new Date('2026-01-10T12:00:00.000Z')
const timestamp = (date: string) => `${date}T12:00:00.000Z`

function workout(id: string, date: string, routineId?: string): Workout {
  return { id, routineId, nameSnapshot: routineId ? 'Saved Push' : 'Ad-hoc Workout', status: 'completed', startedAt: `${date}T09:00:00.000Z`, completedAt: `${date}T10:00:00.000Z`, durationSeconds: 3600, createdAt: timestamp(date), updatedAt: timestamp(date) }
}

function snapshot(localDate: string, plannedType: PlanDaySnapshot['plannedType'], result: PlanDaySnapshot['result'], routineId?: string): PlanDaySnapshot {
  return { id: `plan-day:${localDate}`, localDate, plannedType, routineId, result, createdAt: timestamp(localDate), updatedAt: timestamp(localDate) }
}

async function reset(settings: Partial<SettingsRecord> = {}) {
  await Promise.all([db.settings.clear(), db.workouts.clear(), db.planDaySnapshots.clear(), db.streakFreezeEvents.clear(), db.streakPauses.clear(), db.planChangeEvents.clear(), db.xpEvents.clear(), db.achievementUnlocks.clear(), db.workoutExercises.clear(), db.workoutSets.clear()])
  await db.settings.put({ id: 'settings', gamificationInitializedAt: initializedAt, createdAt: initializedAt, updatedAt: initializedAt, ...settings })
}

// v1.0.0 upgrade: current plan must not be projected onto pre-plan history.
await reset({ weeklyPlanConfigured: true, weeklyPlan: { monday: { type: 'workout_day' } } })
await db.workouts.put(workout('legacy:saved', '2026-01-05', 'routine:push'))
await reconcileGamification(now)
assert.equal((await db.planDaySnapshots.get('plan-day:2026-01-05'))?.plannedType, 'no_plan')
assert.equal((await db.planDaySnapshots.get('plan-day:2026-01-05'))?.result, 'success')
assert.equal((await loadGamificationDashboard('2026-01-10', false)).streak.current, 1, 'v1.0.0 0 → 1 upgrade')
assert.equal((await db.planDaySnapshots.get('plan-day:2026-01-06'))?.result, 'no_plan', 'no-plan day without workout remains neutral')
assert.ok((await db.settings.get('settings'))?.weeklyPlanConfiguredAt, 'legacy plan receives a forward-only activation boundary')

// A real multi-day repair produces one durable notice with the actual streak change.
await reset()
await db.workouts.bulkPut([workout('repair:one', '2026-01-05'), workout('repair:two', '2026-01-08')])
await reconcileGamification(now)
let feedback = await listWeeklyPlanFeedback()
assert.equal(feedback.length, 1)
assert.deepEqual(feedback[0], {
  id: 'weekly-plan-feedback:historical:2026-01-05,2026-01-08', type: 'historical_reconciliation',
  restoredDays: 2, streakBefore: 0, streakAfter: 2, createdAt: now.toISOString(),
})
await acknowledgeWeeklyPlanFeedback(feedback[0].id)
await reconcileGamification(now)
assert.deepEqual(await listWeeklyPlanFeedback(), [], 'acknowledged reconciliation feedback does not return on reload')

// Reconciliation is evidence based: repeated runs and multiple sessions never double-credit a date.
await reset()
await db.workouts.put(workout('legacy:saved', '2026-01-05', 'routine:push'))
await db.workouts.bulkPut([workout('legacy:ad-hoc', '2026-01-08'), workout('legacy:second-session', '2026-01-08')])
await reconcileGamification(now)
await reconcileGamification(now)
let dashboard = await loadGamificationDashboard('2026-01-10', false)
assert.equal(dashboard.streak.current, 2, 'two historical workout dates give two successes')
assert.equal(dashboard.streak.successfulPlannedDays, 2)
assert.equal((await db.planDaySnapshots.where('result').equals('success').count()), 2)

// Scenario 3 regression: historical workouts on Sep 23, Sep 24 with existing XP; streak 0 -> 2; XP/Level/Rank unchanged
await reset({ gamificationInitializedAt: '2026-09-20T00:00:00.000Z' })
await db.workouts.bulkPut([workout('scenario3:1', '2026-09-23'), workout('scenario3:2', '2026-09-24')])
await db.xpEvents.bulkPut([
  { id: 'workout:scenario3:1', sourceKey: 'workout:scenario3:1', type: 'unplanned_workout', amount: 20, occurredAt: '2026-09-23T10:00:00.000Z', createdAt: '2026-09-23T10:00:00.000Z', updatedAt: '2026-09-23T10:00:00.000Z' },
  { id: 'workout:scenario3:2', sourceKey: 'workout:scenario3:2', type: 'unplanned_workout', amount: 20, occurredAt: '2026-09-24T10:00:00.000Z', createdAt: '2026-09-24T10:00:00.000Z', updatedAt: '2026-09-24T10:00:00.000Z' },
])
dashboard = await loadGamificationDashboard('2026-09-25', false)
assert.equal(dashboard.streak.current, 0, 'Scenario 3: streak initially 0')
assert.equal(dashboard.progression.totalXp, 40, 'Scenario 3: initial XP is 40')
const initialLevel = dashboard.progression.level
const initialRank = dashboard.progression.rank.id
await reconcileGamification(new Date('2026-09-25T12:00:00.000Z'))
dashboard = await loadGamificationDashboard('2026-09-25', false)
assert.equal(dashboard.streak.current, 2, 'Scenario 3: streak repaired 0 -> 2')
assert.equal(dashboard.progression.totalXp, 40, 'Scenario 3: XP unchanged after reconciliation')
assert.equal(dashboard.progression.level, initialLevel, 'Scenario 3: Level unchanged after reconciliation')
assert.equal(dashboard.progression.rank.id, initialRank, 'Scenario 3: Rank unchanged after reconciliation')

// Current no-plan workouts, saved-routine and ad-hoc, become successful days immediately.
await reset()
await db.workouts.put(workout('today:saved', '2026-01-10', 'routine:push'))
await reconcileGamification(now)
assert.equal((await db.planDaySnapshots.get('plan-day:2026-01-10'))?.result, 'success')
await reset()
await db.workouts.put(workout('today:ad-hoc', '2026-01-10'))
await reconcileGamification(now)
assert.equal((await db.planDaySnapshots.get('plan-day:2026-01-10'))?.result, 'success')

// Historical Rest Day workouts are successful training dates while routine mismatch stays unsatisfied.
await reset({ weeklyPlanConfigured: true, weeklyPlanConfiguredAt: initializedAt, weeklyPlan: { monday: { type: 'workout_day' } } })
await db.workouts.bulkPut([workout('routine:mismatch', '2026-01-06'), workout('workout:valid', '2026-01-07'), workout('rest:extra', '2026-01-08')])
await db.planDaySnapshots.bulkPut([
  snapshot('2026-01-06', 'routine', 'pending', 'routine:expected'),
  snapshot('2026-01-07', 'workout_day', 'pending'),
  snapshot('2026-01-08', 'rest_day', 'pending'),
])
await reconcileGamification(now)
assert.notEqual((await db.planDaySnapshots.get('plan-day:2026-01-06'))?.result, 'success', 'routine mismatch remains unsatisfied')
assert.equal((await db.planDaySnapshots.get('plan-day:2026-01-07'))?.result, 'success', 'Workout Day accepts valid workout')
assert.equal((await db.planDaySnapshots.get('plan-day:2026-01-08'))?.result, 'success', 'Rest Day workout becomes one successful training date')
await db.workouts.put(workout('rest:second-session', '2026-01-08'))
await reconcileGamification(now)
assert.equal((await loadGamificationDashboard('2026-01-10', false)).snapshots.filter((row) => row.localDate === '2026-01-08' && row.result === 'success').length, 1, 'multiple Rest Day workouts stay one success')

// Pause remains authoritative over inferred no-plan success.
await reset()
await db.workouts.put(workout('pause:workout', '2026-01-09'))
await db.streakPauses.put({ id: 'pause:travel', reason: 'travel', startDate: '2026-01-09', endDate: '2026-01-09', createdAt: timestamp('2026-01-09'), updatedAt: timestamp('2026-01-09') })
await reconcileGamification(now)
assert.equal((await db.planDaySnapshots.get('plan-day:2026-01-09'))?.result, 'paused')

await reset()
await db.workouts.put(workout('pause:rest-workout', '2026-01-09'))
await db.planDaySnapshots.put(snapshot('2026-01-09', 'rest_day', 'pending'))
await db.streakPauses.put({ id: 'pause:rest-day', reason: 'travel', startDate: '2026-01-09', endDate: '2026-01-09', createdAt: timestamp('2026-01-09'), updatedAt: timestamp('2026-01-09') })
await reconcileGamification(now)
assert.equal((await db.planDaySnapshots.get('plan-day:2026-01-09'))?.result, 'paused', 'pause remains higher precedence than Rest Day success')

// Achievements continue consuming canonical derived streak state.
await reset()
await db.workouts.bulkPut(Array.from({ length: 7 }, (_, index) => workout(`achievement:${index}`, `2026-01-${String(index + 5).padStart(2, '0')}`)))
await reconcileGamification(new Date('2026-01-12T12:00:00.000Z'))
dashboard = await loadGamificationDashboard('2026-01-12', false)
assert.equal(dashboard.streak.best, 7)
assert.equal(await db.achievementUnlocks.where('achievementId').equals('7-day-plan-streak').count(), 1)

await db.close()
await Dexie.delete('fitdex')
console.log('Plan Streak reconciliation tests passed: no-plan success, legacy repair, plan boundary, idempotency, explicit-plan semantics, pause, and canonical achievements')
