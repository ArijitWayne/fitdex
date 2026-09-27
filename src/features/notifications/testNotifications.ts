/// <reference types="node" />
import 'fake-indexeddb/auto'
import assert from 'node:assert/strict'
import Dexie from 'dexie'
import fs from 'node:fs'
import type { NutritionTargets, NotificationPreferences, WeeklyPlanAssignment } from '../../data/models.ts'
import { DEFAULT_NOTIFICATION_PREFERENCES, NOTIFICATION_CHANNELS, NOTIFICATION_SOUND_PATHS, categoryEnabled, resolveNotificationPreferences } from './notificationModel.ts'
import { loadNotificationPreferences, saveNotificationPreferences } from './notificationRepository.ts'
import { nutritionNotificationEligible, nutritionNotificationPayload, updateNotificationEligible, updateNotificationPayload, workoutNotificationEligible, workoutNotificationPayload } from './notificationRules.ts'

await Dexie.delete('fitdex')
const { db } = await import('../../data/database.ts')

assert.deepEqual(resolveNotificationPreferences(), DEFAULT_NOTIFICATION_PREFERENCES, 'legacy settings use intentional opt-in defaults')
let preferences = await loadNotificationPreferences()
assert.equal(preferences.enabled, false)
preferences = await saveNotificationPreferences({ enabled: true, permissionState: 'granted' })
assert.equal(preferences.enabled, true)
assert.equal(preferences.permissionState, 'granted')
preferences = await saveNotificationPreferences({ workoutEnabled: false, workoutReminderTime: '08:15' })
assert.equal(preferences.workoutEnabled, false)
assert.equal(preferences.nutritionEnabled, true, 'categories persist independently')
assert.equal(preferences.workoutReminderTime, '08:15')
preferences = await saveNotificationPreferences({ enabled: false, permissionState: 'unrequested' })
assert.equal(preferences.enabled, false, 'NOT NOW returns master switch to OFF')
assert.equal(preferences.permissionState, 'unrequested')

const active: NotificationPreferences = { ...preferences, enabled: true, permissionState: 'granted', updateEnabled: true, workoutEnabled: true, nutritionEnabled: true }
assert.equal(categoryEnabled(active, 'workout'), true)
assert.equal(updateNotificationEligible(active, '1.2.0', '1.1.0'), true)
assert.equal(updateNotificationEligible({ ...active, lastNotifiedUpdateVersion: '1.2.0' }, '1.2.0', '1.1.0'), false)
assert.equal(updateNotificationEligible(active, '1.1.0', '1.1.0'), false)
assert.equal(updateNotificationEligible({ ...active, updateEnabled: false }, '1.2.0', '1.1.0'), false)

const routine: WeeklyPlanAssignment = { type: 'routine', routineId: 'push' }
const workoutInput = { assignment: routine, completed: false, dateKey: '2026-09-27' }
assert.equal(workoutNotificationEligible(active, workoutInput), true)
assert.equal(workoutNotificationEligible(active, { ...workoutInput, assignment: { type: 'workout_day' } }), true)
assert.equal(workoutNotificationEligible(active, { ...workoutInput, assignment: { type: 'rest_day' } }), false)
assert.equal(workoutNotificationEligible(active, { ...workoutInput, assignment: { type: 'no_plan' } }), false)
assert.equal(workoutNotificationEligible(active, { ...workoutInput, completed: true }), false)
assert.equal(workoutNotificationEligible({ ...active, lastWorkoutReminderDate: workoutInput.dateKey }, workoutInput), false)
assert.deepEqual(workoutNotificationPayload(routine, 'Push Day'), { category: 'workout', title: 'PUSH DAY TODAY', body: 'Push is planned for today. Ready when you are.' })
assert.equal(workoutNotificationPayload({ type: 'workout_day' }).title, 'WORKOUT DAY TODAY')

const targets: NutritionTargets = { enabled: true, goal: 'maintain', age: 30, sex: 'female', heightCm: 165, weightKg: 65, activityLevel: 'moderate', calorieTarget: 2000, proteinTargetGrams: 120, calorieTargetSource: 'manual', updatedAt: '2026-09-27T00:00:00.000Z' }
const nutritionInput = { targets, caloriesLogged: 1800, dateKey: '2026-09-27' }
assert.equal(nutritionNotificationEligible(active, nutritionInput), true, 'final persisted target drives remaining calories')
assert.equal(nutritionNotificationEligible(active, { ...nutritionInput, caloriesLogged: 2000 }), false)
assert.equal(nutritionNotificationEligible(active, { ...nutritionInput, caloriesLogged: 2001 }), false)
assert.equal(nutritionNotificationEligible(active, { ...nutritionInput, caloriesLogged: 1901 }), false)
assert.equal(nutritionNotificationEligible(active, { ...nutritionInput, targets: undefined }), false)
assert.equal(nutritionNotificationEligible({ ...active, lastNutritionReminderDate: nutritionInput.dateKey }, nutritionInput), false)
assert.deepEqual(nutritionNotificationPayload(620), { category: 'nutrition', title: 'CALORIES STILL TO GO', body: "620 kcal remaining to reach today's target." })
assert.deepEqual(updateNotificationPayload('1.2.0'), { category: 'update', title: 'FITDEX UPDATE AVAILABLE', body: "v1.2.0 is ready. Open FitDex to see what's new." })
assert.deepEqual(NOTIFICATION_CHANNELS, { update: 'fitdex_updates_v1', workout: 'fitdex_workout_v1', nutrition: 'fitdex_nutrition_v1' })
assert.deepEqual(NOTIFICATION_SOUND_PATHS, { update: '/audio/update_notification.mp3', workout: '/audio/morning_notification.mp3', nutrition: '/audio/warning_notification.mp3' })
const settings = fs.readFileSync('src/features/settings/SettingsPage.tsx', 'utf8')
const notificationSettings = settings.slice(settings.indexOf('function NotificationSettings'), settings.indexOf('function AudioSettings'))
assert.match(settings, /title="Notifications"/)
assert.match(settings, /Notify me when I have a workout planned for today\./)
assert.match(settings, /Notify me when my logged calories are still meaningfully below today's target\./)
assert.doesNotMatch(notificationSettings, /Notification sound|>PREVIEW<|sound picker/i)
assert.doesNotMatch(notificationSettings, /Notification testing/i)
assert.doesNotMatch(notificationSettings, /Send now/i)
assert.doesNotMatch(notificationSettings, /Schedule in 60 seconds/i)
assert.doesNotMatch(notificationSettings, /import\.meta\.env\.DEV/)
// Master card and category card containment assertions
assert.match(notificationSettings, /notification-master-card/)
assert.match(notificationSettings, /MASTER CONTROL/)
assert.match(notificationSettings, /notification-master-kicker/)
assert.match(notificationSettings, /notification-section-card/)
assert.match(notificationSettings, /group-heading notification-card-eyebrow/)
assert.match(notificationSettings, />APP</)
assert.match(notificationSettings, />WORKOUT</)
assert.match(notificationSettings, />NUTRITION</)
assert.match(notificationSettings, /REMINDER TIME/)

// Assert WHEN IT SENDS disclosure exists for all 3 categories with approved copy
const whenItSendsMatches = notificationSettings.match(/<summary>WHEN IT SENDS<\/summary>/g)
assert.equal(whenItSendsMatches?.length, 3, 'APP, WORKOUT, and NUTRITION must each have WHEN IT SENDS disclosure')
assert.match(notificationSettings, /Sends a notification when a newer stable release of FitDex is available for your device\./)
assert.match(notificationSettings, /Sends at your selected reminder time when today's Weekly Plan includes a workout that hasn't been completed yet\./)
assert.match(notificationSettings, /Sends at your selected reminder time when your logged calories are still meaningfully below today's target\. No reminder once your target is reached or exceeded\./)

assert.equal((await db.settings.get('settings'))?.notifications?.workoutReminderTime, '08:15')
db.close()
await Dexie.delete('fitdex')
console.log('Notification tests passed: preferences, permission states, rules, one-per-date guards, payloads, channels, sounds, and final persisted calorie target.')
