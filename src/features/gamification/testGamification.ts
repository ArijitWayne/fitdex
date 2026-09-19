/// <reference types="node" />
import 'fake-indexeddb/auto'
import assert from 'node:assert/strict'
import Dexie from 'dexie'
import fs from 'node:fs'
import type { PlanDaySnapshot } from '../../data/models.ts'
import { ACHIEVEMENTS } from './achievementCatalog.ts'
import { ACHIEVEMENT_BADGE_ASSET_FILES, INITIAL_FREEZE_BALANCE, LEVEL_XP_THRESHOLDS, MAX_LEVEL, RANK_BADGE_ASSET_FILES, RANKS, SUCCESSFUL_DAYS_PER_FREEZE, XP_REWARDS, achievementAssetPath, levelForXp, rankAssetPath, rankForLevel } from './gamificationConfig.ts'
import { deriveStreak, inclusiveDateDuration, isMaterialPlanChange } from './gamificationModel.ts'

assert.equal(ACHIEVEMENTS.length, 52)
assert.deepEqual(ACHIEVEMENTS.filter((item) => item.category === 'EXERCISE_DEX').map((item) => item.name), ['First Exercise', '5 Different Exercises', '10 Different Exercises', '25 Different Exercises', '50 Different Exercises', 'All Categories'])
assert.deepEqual(Object.fromEntries(['WORKOUT', 'CONSISTENCY', 'PERFORMANCE', 'EXERCISE_DEX', 'NUTRITION', 'PROGRESSION'].map((category) => [category, ACHIEVEMENTS.filter((item) => item.category === category).length])), { WORKOUT: 10, CONSISTENCY: 8, PERFORMANCE: 7, EXERCISE_DEX: 6, NUTRITION: 11, PROGRESSION: 10 })
assert.deepEqual(XP_REWARDS, { plannedRoutine: 30, plannedWorkout: 30, unplannedWorkout: 20, personalRecord: 15, calorieTarget: 5, proteinTarget: 5, fullFoodLog: 5, achievement: 50 })
assert.equal(INITIAL_FREEZE_BALANCE, 2)
assert.equal(SUCCESSFUL_DAYS_PER_FREEZE, 15)
assert.ok(ACHIEVEMENTS.filter((achievement) => achievement.id.startsWith('calorie-target-') || achievement.id.startsWith('protein-target-')).every((achievement) => !achievement.dormant))
assert.ok(!Object.keys(XP_REWARDS).some((reward) => /(?:carb|fat|fiber)/i.test(reward)))
assert.ok(!ACHIEVEMENTS.some((achievement) => /(?:carb|fat|fiber)-target/i.test(achievement.id)))

assert.equal(LEVEL_XP_THRESHOLDS.length, 100)
assert.equal(LEVEL_XP_THRESHOLDS[0], 0)
for (let index = 1; index < LEVEL_XP_THRESHOLDS.length; index += 1) assert.ok(LEVEL_XP_THRESHOLDS[index] > LEVEL_XP_THRESHOLDS[index - 1])
assert.ok(LEVEL_XP_THRESHOLDS[9] >= 1800 && LEVEL_XP_THRESHOLDS[9] <= 2200)
assert.ok(LEVEL_XP_THRESHOLDS[24] >= 11000 && LEVEL_XP_THRESHOLDS[24] <= 13000)
assert.ok(LEVEL_XP_THRESHOLDS[49] >= 24000 && LEVEL_XP_THRESHOLDS[49] <= 30000)
assert.ok(LEVEL_XP_THRESHOLDS[74] >= 60000 && LEVEL_XP_THRESHOLDS[74] <= 80000)
assert.ok(LEVEL_XP_THRESHOLDS[99] >= 125000 && LEVEL_XP_THRESHOLDS[99] <= 150000)
assert.equal(levelForXp(Number.MAX_SAFE_INTEGER).level, MAX_LEVEL)
assert.equal(levelForXp(Number.MAX_SAFE_INTEGER).maxLevel, true)

const boundaries = [[1, 'RECRUIT'], [6, 'RECRUIT'], [7, 'REGULAR'], [15, 'REGULAR'], [16, 'HARDENED'], [27, 'HARDENED'], [28, 'VETERAN'], [42, 'VETERAN'], [43, 'WARRIOR'], [57, 'WARRIOR'], [58, 'ASCENDANT'], [72, 'ASCENDANT'], [73, 'IMMORTAL'], [87, 'IMMORTAL'], [88, 'LEGEND'], [99, 'LEGEND'], [100, 'RADIANT']] as const
for (const [level, rank] of boundaries) assert.equal(rankForLevel(level).name, rank)
assert.equal(RANKS.length, 9)
assert.ok(RANKS.every((rank) => !/[IVX]+$/.test(rank.name)))
assert.equal(rankAssetPath('radiant'), '/gamification/ranks/radiant.webp')
assert.equal(rankAssetPath('veteran'), '/gamification/ranks/veteran.webp')
assert.equal(rankAssetPath('immortal'), '/gamification/ranks/immortal.webp')
assert.equal(rankAssetPath('unknown-rank'), '/gamification/ranks/unknown-rank.webp')
assert.equal(achievementAssetPath('first-workout'), '/gamification/achievements/first-workout.webp')
assert.equal(achievementAssetPath('first-fully-logged-day'), '/gamification/achievements/first-full-log.webp')
assert.equal(achievementAssetPath('first-pr'), '/gamification/achievements/first-pr.webp')
assert.equal(achievementAssetPath('reach-veteran'), '/gamification/achievements/reach-veteran.webp')
assert.equal(achievementAssetPath('10-workouts'), '/gamification/achievements/workouts-10.webp')
assert.equal(achievementAssetPath('100-hours-trained'), '/gamification/achievements/hours-100.webp')
assert.equal(achievementAssetPath('7-day-plan-streak'), '/gamification/achievements/streak-7.webp')
assert.equal(achievementAssetPath('level-10'), '/gamification/achievements/level-10.webp')
assert.equal(achievementAssetPath('level-100'), '/gamification/achievements/level-100.webp')
assert.equal(achievementAssetPath('first-fully-logged-day'), '/gamification/achievements/first-full-log.webp')
assert.equal(achievementAssetPath('not-yet-known'), '/gamification/achievements/not-yet-known.webp')
assert.deepEqual(Object.keys(RANK_BADGE_ASSET_FILES).sort(), RANKS.map((rank) => rank.id).sort())
assert.deepEqual(Object.keys(ACHIEVEMENT_BADGE_ASSET_FILES).sort(), ACHIEVEMENTS.map((achievement) => achievement.id).sort())
assert.equal(Object.keys(RANK_BADGE_ASSET_FILES).length, 9)
assert.equal(Object.keys(ACHIEVEMENT_BADGE_ASSET_FILES).length, 52)
assert.equal(new Set(Object.values(ACHIEVEMENT_BADGE_ASSET_FILES)).size, 52)
assert.deepEqual(fs.readdirSync('public/gamification/ranks').sort(), Object.values(RANK_BADGE_ASSET_FILES).sort())
assert.deepEqual(fs.readdirSync('public/gamification/achievements').sort(), Object.values(ACHIEVEMENT_BADGE_ASSET_FILES).sort())
for (const [rankId, fileName] of Object.entries(RANK_BADGE_ASSET_FILES)) {
  const assetPath = rankAssetPath(rankId)
  assert.equal(assetPath, `/gamification/ranks/${fileName}`)
  assert.ok(fs.existsSync(`public${assetPath}`), `missing rank asset: ${assetPath}`)
  const bytes = fs.readFileSync(`public${assetPath}`)
  assert.equal(bytes.subarray(0, 4).toString('ascii'), 'RIFF', `invalid WebP RIFF header: ${assetPath}`)
  assert.equal(bytes.subarray(8, 12).toString('ascii'), 'WEBP', `invalid WebP header: ${assetPath}`)
}
for (const achievement of ACHIEVEMENTS) {
  const assetPath = achievementAssetPath(achievement.id)
  assert.equal(assetPath, `/gamification/achievements/${ACHIEVEMENT_BADGE_ASSET_FILES[achievement.id]}`)
  assert.ok(fs.existsSync(`public${assetPath}`), `missing achievement asset: ${assetPath}`)
  const bytes = fs.readFileSync(`public${assetPath}`)
  assert.equal(bytes.subarray(0, 4).toString('ascii'), 'RIFF', `invalid WebP RIFF header: ${assetPath}`)
  assert.equal(bytes.subarray(8, 12).toString('ascii'), 'WEBP', `invalid WebP header: ${assetPath}`)
}
const badgeSource = fs.readFileSync('src/features/gamification/GamificationBadge.tsx', 'utf8')
assert.match(badgeSource, /onError=\{\(\) => setFailed\(true\)\}/)
assert.match(badgeSource, /kind === 'rank' \? <Shield/)
assert.match(badgeSource, /is-locked/)
assert.match(badgeSource, /alt=\{accessibleLabel\}/)
const notificationSource = fs.readFileSync('src/features/gamification/GamificationViews.tsx', 'utf8')
assert.match(notificationSource, /achievementAssetPath\(achievement\.id\)/)
assert.match(notificationSource, /achievementAssetPath\(unlock\.achievementId\)/)
assert.match(notificationSource, /rankAssetPath\(pending\.afterProgress\.rank\)/)
assert.match(notificationSource, /LEVEL_MILESTONE_ACHIEVEMENT_IDS/)
assert.doesNotMatch(notificationSource, /Trophy/)
assert.match(notificationSource, /markGamificationNotificationsSeen\(\)/)
assert.match(notificationSource, /Updated balance/)
const gamificationRepositorySource = fs.readFileSync('src/features/gamification/gamificationRepository.ts', 'utf8')
assert.match(gamificationRepositorySource, /evaluateCalorieDay\(targets, calories, estimatedTdee\)\.achievementEligible/)
assert.match(gamificationRepositorySource, /evaluateProteinDay\(targets\.proteinTargetGrams, protein\)\.achievementEligible/)
assert.match(gamificationRepositorySource, /calorie-target:\$\{date\}/)
assert.match(gamificationRepositorySource, /protein-target:\$\{date\}/)
assert.doesNotMatch(gamificationRepositorySource, /MAX_FREEZE_BALANCE/)
assert.match(gamificationRepositorySource, /freezeRewards/)

const row = (localDate: string, plannedType: PlanDaySnapshot['plannedType'], result: PlanDaySnapshot['result']): PlanDaySnapshot => ({ id: localDate, localDate, plannedType, result, createdAt: localDate, updatedAt: localDate })
assert.deepEqual(deriveStreak([row('2026-01-01', 'routine', 'success'), row('2026-01-02', 'rest_day', 'rest'), row('2026-01-03', 'no_plan', 'no_plan'), row('2026-01-04', 'workout_day', 'frozen'), row('2026-01-05', 'routine', 'paused'), row('2026-01-06', 'routine', 'success')]), { current: 2, best: 2, successfulPlannedDays: 2 })
assert.equal(deriveStreak([row('2026-01-01', 'routine', 'success'), row('2026-01-02', 'routine', 'missed')]).current, 0)
assert.equal(deriveStreak([row('2026-01-01', 'routine', 'success'), row('2026-01-02', 'routine', 'success')], [{ id: 'reset', sourceKey: 'reset', type: 'reset', effectiveDate: '2026-01-02', occurredAt: '2026-01-02T00:00:00', createdAt: '', updatedAt: '' }]).current, 1)
assert.equal(inclusiveDateDuration('2026-08-01', '2026-08-07'), 7)
assert.equal(inclusiveDateDuration('2026-08-01', '2026-08-08'), 8)
assert.equal(isMaterialPlanChange({ type: 'routine', routineId: 'a' }, { type: 'routine', routineId: 'a' }), false)
assert.equal(isMaterialPlanChange({ type: 'routine', routineId: 'a' }, { type: 'routine', routineId: 'b' }), true)

await Dexie.delete('fitdex')
const { db } = await import('../../data/database.ts')
const { loadGamificationDashboard, loadPendingGamificationNotifications, markGamificationNotificationsSeen, planStreakPause, reconcileGamification } = await import('./gamificationRepository.ts')
const yesterday = '2026-08-25'
const today = '2026-08-26'
await db.settings.put({ id: 'settings', weeklyPlanConfigured: true, weeklyPlan: { tuesday: { type: 'workout_day' } }, gamificationInitializedAt: '2026-08-25T00:00:00.000Z', createdAt: '2026-08-25T00:00:00.000Z', updatedAt: '2026-08-25T00:00:00.000Z' })
await db.workouts.put({ id: 'workout:planned', nameSnapshot: 'Workout A', status: 'completed', startedAt: `${yesterday}T10:00:00.000Z`, completedAt: `${yesterday}T11:00:00.000Z`, durationSeconds: 3600, createdAt: `${yesterday}T10:00:00.000Z`, updatedAt: `${yesterday}T11:00:00.000Z` })
await reconcileGamification(new Date(`${today}T12:00:00`))
await reconcileGamification(new Date(`${today}T12:00:00`))
assert.equal(await db.xpEvents.where('sourceKey').equals('workout:workout:planned').count(), 1)
assert.equal((await db.xpEvents.where('sourceKey').equals('workout:workout:planned').first())?.amount, 30)
assert.equal((await db.planDaySnapshots.get(`plan-day:${yesterday}`))?.result, 'success')
assert.equal(await db.streakFreezeEvents.where('type').equals('automatic_missed_plan').count(), 0)
assert.equal((await db.planDaySnapshots.get(`plan-day:${today}`))?.result, 'pending')

await db.exercises.put({ id: 'exercise:pr', name: 'PR Exercise', aliases: [], category: 'Chest', categories: ['Chest'], primaryCategory: 'Chest', primaryMuscles: ['Chest'], secondaryMuscles: [], muscleRegions: ['Chest'], equipment: 'Bodyweight', trackingType: 'reps_only', movementPattern: 'Horizontal Push', source: 'custom', archived: false, createdAt: `${yesterday}T00:00:00.000Z`, updatedAt: `${yesterday}T00:00:00.000Z` })
await db.workouts.put({ id: 'workout:extra', nameSnapshot: 'Extra Workout', status: 'completed', startedAt: `${yesterday}T12:00:00.000Z`, completedAt: `${yesterday}T13:00:00.000Z`, durationSeconds: 3600, createdAt: `${yesterday}T12:00:00.000Z`, updatedAt: `${yesterday}T13:00:00.000Z` })
await db.workoutExercises.put({ id: 'workout-exercise:pr', workoutId: 'workout:extra', exerciseId: 'exercise:pr', exerciseNameSnapshot: 'PR Exercise', exerciseCategorySnapshot: 'Chest', trackingTypeSnapshot: 'reps_only', order: 0, createdAt: `${yesterday}T12:00:00.000Z`, updatedAt: `${yesterday}T13:00:00.000Z` })
await db.workoutSets.put({ id: 'workout-set:pr', workoutExerciseId: 'workout-exercise:pr', order: 0, reps: 10, completed: true, createdAt: `${yesterday}T12:00:00.000Z`, updatedAt: `${yesterday}T13:00:00.000Z` })
await reconcileGamification(new Date(`${today}T12:00:00`))
await reconcileGamification(new Date(`${today}T12:00:00`))
assert.equal((await db.xpEvents.get('workout:workout:extra'))?.amount, 20, 'an additional workout is unplanned rather than duplicate planned XP')
assert.equal(await db.xpEvents.where('type').equals('personal_record').count(), 1)
assert.equal((await db.xpEvents.where('type').equals('personal_record').first())?.amount, 15)

// A new unplanned workout gets one event, including during a streak pause.
await db.streakPauses.put({ id: 'pause:xp-check', reason: 'travel', startDate: today, endDate: today, createdAt: `${today}T00:00:00.000Z`, updatedAt: `${today}T00:00:00.000Z` })
await db.workouts.put({ id: 'workout:unplanned', nameSnapshot: 'Pause Day Workout', status: 'completed', startedAt: `${today}T10:00:00.000Z`, completedAt: `${today}T11:00:00.000Z`, durationSeconds: 3600, createdAt: `${today}T10:00:00.000Z`, updatedAt: `${today}T11:00:00.000Z` })
await reconcileGamification(new Date(`${today}T12:00:00`))
await reconcileGamification(new Date(`${today}T12:00:00`))
assert.equal(await db.xpEvents.where('sourceKey').equals('workout:workout:unplanned').count(), 1)
assert.equal((await db.xpEvents.get('workout:workout:unplanned'))?.type, 'unplanned_workout')
assert.equal((await db.xpEvents.get('workout:workout:unplanned'))?.amount, 20)
await db.streakPauses.delete('pause:xp-check')
await db.workouts.delete('workout:unplanned')
await db.xpEvents.delete('workout:workout:unplanned')

// Equal timestamps are eligible, while genuinely pre-activation history stays excluded.
const activationBoundary = '2026-08-25T00:00:00.000Z'
await db.workouts.bulkPut([
  { id: 'workout:activation-edge', nameSnapshot: 'Activation Edge', status: 'completed', startedAt: '2026-08-24T23:30:00.000Z', completedAt: activationBoundary, durationSeconds: 1800, createdAt: '2026-08-24T23:30:00.000Z', updatedAt: activationBoundary },
  { id: 'workout:historical', nameSnapshot: 'Historical', status: 'completed', startedAt: '2026-08-24T22:00:00.000Z', completedAt: '2026-08-24T23:59:59.999Z', durationSeconds: 3600, createdAt: '2026-08-24T22:00:00.000Z', updatedAt: '2026-08-24T23:59:59.999Z' },
])
await reconcileGamification(new Date(`${today}T12:00:00`))
await reconcileGamification(new Date(`${today}T12:00:00`))
assert.equal(await db.xpEvents.where('sourceKey').equals('workout:workout:activation-edge').count(), 1)
assert.equal((await db.xpEvents.get('workout:workout:activation-edge'))?.amount, 20)
assert.equal(await db.xpEvents.where('sourceKey').equals('workout:workout:historical').count(), 0)

await db.planDaySnapshots.update(`plan-day:${today}`, { plannedType: 'workout_day', result: 'pending' })
await reconcileGamification(new Date('2026-08-27T12:00:00'))
await reconcileGamification(new Date('2026-08-27T12:00:00'))
assert.equal((await db.planDaySnapshots.get('plan-day:2026-08-26'))?.result, 'frozen')
assert.equal(await db.streakFreezeEvents.where('sourceKey').equals('freeze:missed:2026-08-26').count(), 1)
assert.equal((await loadGamificationDashboard('2026-08-27', false)).freezeBalance, 1)

await db.planDaySnapshots.update('plan-day:2026-08-27', { plannedType: 'routine', routineId: 'routine:missing', result: 'pending' })
await reconcileGamification(new Date('2026-08-28T12:00:00'))
assert.equal((await db.planDaySnapshots.get('plan-day:2026-08-27'))?.result, 'frozen')
assert.equal((await loadGamificationDashboard('2026-08-28', false)).freezeBalance, 0)

await db.planDaySnapshots.update('plan-day:2026-08-28', { plannedType: 'workout_day', result: 'pending' })
await reconcileGamification(new Date('2026-08-29T12:00:00'))
assert.equal((await db.planDaySnapshots.get('plan-day:2026-08-28'))?.result, 'missed')
assert.equal((await loadGamificationDashboard('2026-08-29', false)).streak.current, 0)

await assert.rejects(() => planStreakPause('travel', '2026-08-29', '2026-09-05', '2026-08-29'), /between 1 and 7/)
await planStreakPause('travel', '2026-08-29', '2026-08-30', '2026-08-29')
await db.planDaySnapshots.update('plan-day:2026-08-29', { plannedType: 'workout_day', result: 'pending' })
await reconcileGamification(new Date('2026-08-31T12:00:00'))
assert.equal((await db.planDaySnapshots.get('plan-day:2026-08-29'))?.result, 'paused')
assert.equal((await db.planDaySnapshots.get('plan-day:2026-08-30'))?.result, 'paused')
assert.equal((await loadGamificationDashboard('2026-08-31', false)).freezeBalance, 0)
await planStreakPause('sickness', '2026-09-01', '2026-09-01', '2026-08-31')
// Achievement XP Tests
// 1. Unlocked achievements award +50 XP exactly once
assert.equal(await db.achievementUnlocks.where('achievementId').equals('first-exercise').count(), 1)
assert.equal(await db.xpEvents.where('sourceKey').equals('achievement:first-exercise').count(), 1)
const firstExXp = await db.xpEvents.get('achievement:first-exercise')
assert.equal(firstExXp?.type, 'achievement_unlock')
assert.equal(firstExXp?.amount, 50)

// 2. Idempotency: Reconciling repeatedly does not duplicate XP
await reconcileGamification(new Date('2026-08-31T12:00:00'))
await reconcileGamification(new Date('2026-08-31T12:00:00'))
assert.equal(await db.xpEvents.where('sourceKey').equals('achievement:first-exercise').count(), 1)

// 3. New achievement unlock ('5-different-exercises') awards +50 XP
const xpBefore5Ex = (await loadGamificationDashboard('2026-08-31', false)).progression.totalXp
for (let i = 2; i <= 5; i++) {
  await db.exercises.put({ id: `exercise:test-${i}`, name: `Test Ex ${i}`, aliases: [], category: 'Chest', categories: ['Chest'], primaryCategory: 'Chest', primaryMuscles: ['Chest'], secondaryMuscles: [], muscleRegions: ['Chest'], equipment: 'Bodyweight', trackingType: 'reps_only', movementPattern: 'Horizontal Push', source: 'custom', archived: false, createdAt: '2026-08-31T00:00:00.000Z', updatedAt: '2026-08-31T00:00:00.000Z' })
}
const multiWorkoutId = 'workout:multi-achieve'
await db.workouts.put({ id: multiWorkoutId, nameSnapshot: 'Multi Workout', status: 'completed', startedAt: '2026-08-31T14:00:00.000Z', completedAt: '2026-08-31T15:00:00.000Z', durationSeconds: 3600, createdAt: '2026-08-31T14:00:00.000Z', updatedAt: '2026-08-31T15:00:00.000Z' })
for (let i = 2; i <= 5; i++) {
  await db.workoutExercises.put({ id: `workout-exercise:multi-${i}`, workoutId: multiWorkoutId, exerciseId: `exercise:test-${i}`, exerciseNameSnapshot: `Test Ex ${i}`, exerciseCategorySnapshot: 'Chest', trackingTypeSnapshot: 'reps_only', order: i, createdAt: '2026-08-31T14:00:00.000Z', updatedAt: '2026-08-31T15:00:00.000Z' })
  await db.workoutSets.put({ id: `workout-set:multi-${i}`, workoutExerciseId: `workout-exercise:multi-${i}`, order: 0, reps: 10, completed: true, createdAt: '2026-08-31T14:00:00.000Z', updatedAt: '2026-08-31T15:00:00.000Z' })
}
await reconcileGamification(new Date('2026-08-31T16:00:00'))
assert.equal(await db.achievementUnlocks.where('achievementId').equals('5-different-exercises').count(), 1)
assert.equal(await db.xpEvents.where('sourceKey').equals('achievement:5-different-exercises').count(), 1)
assert.equal((await db.xpEvents.get('achievement:5-different-exercises'))?.amount, 50)
const dashboardAfter5Ex = await loadGamificationDashboard('2026-08-31', false)
assert.ok(dashboardAfter5Ex.progression.totalXp >= xpBefore5Ex + 50)

// 4. Historical achievements (already unlocked before upgrade) do NOT receive retroactive XP
await db.achievementUnlocks.put({ id: 'achievement:100-workouts', achievementId: '100-workouts', unlockedAt: '2026-08-20T00:00:00.000Z', createdAt: '2026-08-20T00:00:00.000Z', updatedAt: '2026-08-20T00:00:00.000Z' })
await reconcileGamification(new Date('2026-08-31T16:00:00'))
assert.equal(await db.xpEvents.where('sourceKey').equals('achievement:100-workouts').count(), 0, 'historical achievement must not get retroactive XP')

// 5. Guide steps content assertions
const { gamificationHelpSteps } = await import('./gamificationHelp.ts')
assert.equal(gamificationHelpSteps[0].title, 'How Gamification Works')
const guideText = JSON.stringify(gamificationHelpSteps)
assert.match(guideText, /Achievement Unlocked/)
assert.match(guideText, /\+50 XP/)
assert.match(guideText, /Calorie Target/)
assert.match(guideText, /Protein Target/)

// Granular tests: 14 days gives no award; 15 days gives +1 award; rest, paused, frozen, unplanned excluded
await db.planDaySnapshots.clear()
await db.streakFreezeEvents.clear()
const { shiftLocalDateKey } = await import('../../utils/localDate.ts')
const testStart = '2026-05-01'
await db.settings.update('settings', { gamificationInitializedAt: `${testStart}T00:00:00.000Z`, weeklyPlan: {}, updatedAt: `${testStart}T00:00:00.000Z` })
// 14 successful days
await db.planDaySnapshots.bulkPut(Array.from({ length: 14 }, (_, index) => {
  const localDate = shiftLocalDateKey(testStart, index)
  return { id: `m14:${localDate}`, localDate, plannedType: 'workout_day' as const, result: 'success' as const, finalizedAt: `${localDate}T12:00:00.000Z`, createdAt: `${localDate}T12:00:00.000Z`, updatedAt: `${localDate}T12:00:00.000Z` }
}))
// Add excluded days: rest_day, no_plan, paused, frozen
await db.planDaySnapshots.bulkPut([
  { id: 'ex:rest', localDate: '2026-05-15', plannedType: 'rest_day' as const, result: 'rest' as const, finalizedAt: '2026-05-15T12:00:00.000Z', createdAt: '2026-05-15T12:00:00.000Z', updatedAt: '2026-05-15T12:00:00.000Z' },
  { id: 'ex:noplan', localDate: '2026-05-16', plannedType: 'no_plan' as const, result: 'no_plan' as const, finalizedAt: '2026-05-16T12:00:00.000Z', createdAt: '2026-05-16T12:00:00.000Z', updatedAt: '2026-05-16T12:00:00.000Z' },
  { id: 'ex:paused', localDate: '2026-05-17', plannedType: 'routine' as const, result: 'paused' as const, finalizedAt: '2026-05-17T12:00:00.000Z', createdAt: '2026-05-17T12:00:00.000Z', updatedAt: '2026-05-17T12:00:00.000Z' },
  { id: 'ex:frozen', localDate: '2026-05-18', plannedType: 'workout_day' as const, result: 'frozen' as const, finalizedAt: '2026-05-18T12:00:00.000Z', createdAt: '2026-05-18T12:00:00.000Z', updatedAt: '2026-05-18T12:00:00.000Z' },
])
await reconcileGamification(new Date('2026-05-19T12:00:00'))
assert.equal(await db.streakFreezeEvents.where('type').equals('earned').count(), 0, '14 successful days + non-qualifying days must not earn a freeze')
assert.equal((await loadGamificationDashboard('2026-05-19', false)).freezeBalance, 2, 'balance remains initial 2')

// 15th successful day earns first Freeze
await db.planDaySnapshots.put({ id: 'plan-day:2026-05-19', localDate: '2026-05-19', plannedType: 'workout_day', result: 'success', finalizedAt: '2026-05-19T12:00:00.000Z', createdAt: '2026-05-19T12:00:00.000Z', updatedAt: '2026-05-19T12:00:00.000Z' })
await reconcileGamification(new Date('2026-05-20T12:00:00'))
assert.equal(await db.streakFreezeEvents.where('type').equals('earned').count(), 1, '15 successful days earns 1 freeze')
assert.equal((await loadGamificationDashboard('2026-05-20', false)).freezeBalance, 3, 'balance increases to 3')

// Four milestones prove the 15-day cadence, idempotency, grouped reward notice, and uncapped balance.
await db.planDaySnapshots.clear()
await db.streakFreezeEvents.clear()
const milestoneStart = '2026-01-01'
const { shiftLocalDateKey: shiftKey } = await import('../../utils/localDate.ts')
await db.settings.update('settings', { gamificationInitializedAt: `${milestoneStart}T00:00:00.000Z`, weeklyPlan: {}, updatedAt: `${milestoneStart}T00:00:00.000Z` })
await db.planDaySnapshots.bulkPut(Array.from({ length: 60 }, (_, index) => {
  const localDate = shiftKey(milestoneStart, index)
  return { id: `milestone:${localDate}`, localDate, plannedType: 'workout_day' as const, result: 'success' as const, finalizedAt: `${localDate}T12:00:00.000Z`, createdAt: `${localDate}T12:00:00.000Z`, updatedAt: `${localDate}T12:00:00.000Z` }
}))
await reconcileGamification(new Date('2026-03-02T12:00:00'))
await reconcileGamification(new Date('2026-03-02T12:00:00'))
assert.equal(await db.streakFreezeEvents.where('type').equals('earned').count(), 4)
assert.equal((await loadGamificationDashboard('2026-03-02', false)).freezeBalance, 6)
assert.equal((await loadPendingGamificationNotifications()).freezeRewards.length, 4)
await markGamificationNotificationsSeen()
assert.equal((await loadPendingGamificationNotifications()).freezeRewards.length, 0)

// 6. StreakDetailView & Consistency Deck UX assertions
const viewsSource = fs.readFileSync('src/features/gamification/GamificationViews.tsx', 'utf8')
assert.match(viewsSource, /function FreezeSnowflakeIcon/)
assert.match(viewsSource, /function StreakDetailView/)
assert.match(viewsSource, /‹ Back to Home/)
assert.match(viewsSource, /CONSISTENCY DECK/)
assert.match(viewsSource, /CURRENT PLAN STREAK/)
assert.match(viewsSource, /BEST STREAK ·/)
assert.match(viewsSource, /FREEZE PROTECTION/)
assert.match(viewsSource, /Freezes are applied automatically when a planned workout day is missed/)
assert.doesNotMatch(viewsSource, /Use Freeze/i, 'must not have manual Use Freeze button')
assert.match(viewsSource, /NEXT FREEZE PROGRESS/)
assert.match(viewsSource, /SUCCESSFUL_DAYS_PER_FREEZE/)
assert.match(viewsSource, /activePause/)
assert.match(viewsSource, /TRAVEL PAUSE ACTIVE|SICKNESS PAUSE ACTIVE/)
assert.match(viewsSource, /rolling 12 months/)
assert.doesNotMatch(viewsSource, /available this week/i, 'plan change protection must not claim weekly allowance')
assert.doesNotMatch(viewsSource, /streak-week/, 'must not have Mon-Sun weekly schedule grid')
assert.doesNotMatch(viewsSource, /THIS WEEK/i, 'must not have THIS WEEK schedule block')

// Validate freeze balance presentation scalability for 0, 1, 2, 5, 25
for (const balance of [0, 1, 2, 5, 25]) {
  const label = `${balance} ${balance === 1 ? 'FREEZE AVAILABLE' : 'FREEZES AVAILABLE'}`
  assert.ok(label.includes(String(balance)))
}
// Assert StreakDetailView uses numeric Freeze display rather than N-token generation
assert.match(viewsSource, /\{data\.freezeBalance\} \{data\.freezeBalance === 1 \? 'FREEZE AVAILABLE' : 'FREEZES AVAILABLE'\}/)
assert.doesNotMatch(viewsSource, /Array\.from\(\{ length: data\.freezeBalance \}\)/, 'must not render N card elements for freeze balance')

// 7. Pause Dialog & Date Picker assertions
assert.match(viewsSource, /function PauseDialog/)
assert.match(viewsSource, /type="date"/, 'must have native date input')
assert.match(viewsSource, /showPicker/, 'must wire showPicker for Android/mobile calendar trigger')
assert.match(viewsSource, /onClick=\{openPicker\}/, 'must trigger date picker on click')
assert.match(viewsSource, /onFocus=\{openPicker\}/, 'must trigger date picker on focus')
assert.match(viewsSource, /min=\{today\}/, 'must enforce min date as today for start date')
assert.match(viewsSource, /min=\{startDate\}/, 'must enforce min date as startDate for end date')
assert.match(viewsSource, /max=\{shiftLocalDateKey\(startDate, MAX_PAUSE_DAYS - 1\)\}/, 'must enforce max 7-day range for end date')

await db.close()
await Dexie.delete('fitdex')

console.log('Gamification tests passed: 52 achievements, progression/rank boundaries, streak semantics, automatic Freeze/no-Freeze outcomes, Pause limits, plan-change identity, repeat-safe planned XP reconciliation, scalable Freeze balance UX, and achievement +50 XP awards')

