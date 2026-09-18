/// <reference types="node" />
import 'fake-indexeddb/auto'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import Dexie from 'dexie'
import { foodTutorialSteps, workoutTutorialSteps } from './tutorialSteps.ts'
import { gamificationHelpSteps } from '../gamification/gamificationHelp.ts'
import { hasCompletedTutorial, completeTutorial, TUTORIAL_COMPLETE_KEY } from '../onboarding/tutorialStorage.ts'
import { deviceStorage } from '../../platform/deviceStorage.ts'

await Dexie.delete('fitdex')
const { db } = await import('../../data/database.ts')
const { hasSeenTutorial, markTutorialSeen } = await import('./tutorialPreferences.ts')
await db.open()
const timestamp = '2026-08-24T00:00:00.000Z'
const settings = { id: 'settings', themeFamily: 'spartans' as const, brightness: 'light' as const, displayName: 'Guide Tester', units: 'metric' as const, selectedAvatarId: 'avatar:test', createdAt: timestamp, updatedAt: timestamp }
await db.settings.put(settings)
await db.exercisePreferences.put({ id: 'exercise-preference:test', exerciseId: 'exercise:test', favourite: true, customTagIds: [], createdAt: timestamp, updatedAt: timestamp })
assert.equal(await hasSeenTutorial('workout'), false)
assert.equal(await hasSeenTutorial('food'), false)
await markTutorialSeen('workout')
await markTutorialSeen('food')
assert.equal(await hasSeenTutorial('workout'), true)
assert.equal(await hasSeenTutorial('food'), true)
const saved = await db.settings.get('settings')
for (const key of ['themeFamily', 'brightness', 'displayName', 'units', 'selectedAvatarId'] as const) assert.equal(saved?.[key], settings[key])
assert.equal((await db.exercisePreferences.get('exercise-preference:test'))?.favourite, true)
assert.equal(workoutTutorialSteps.length, 12)
assert.equal(foodTutorialSteps.length, 8)
assert.equal(gamificationHelpSteps.length, 1)
assert.deepEqual(workoutTutorialSteps.map((step) => step.title), ['Welcome to Workouts', 'Routines Are Optional', 'Plan Your Week', 'Starting a Workout', 'Logging Sets', 'Previous Performance', 'Rest Timer', 'Workout Timer', 'Finishing a Workout', 'Workout History', 'Exercise Dex', 'Workouts on Home'])
assert.match(foodTutorialSteps[5].sections.map((section) => section.text).join(' '), /Protein × 4.*Carbs × 4.*Fat × 9/)

const dialog = fs.readFileSync('src/features/help/GuideDialog.tsx', 'utf8')
const workoutPage = fs.readFileSync('src/pages/WorkoutPage.tsx', 'utf8')
const foodPage = fs.readFileSync('src/pages/FoodPage.tsx', 'utf8')
const journal = fs.readFileSync('src/pages/JournalPage.tsx', 'utf8')
const progress = fs.readFileSync('src/pages/ProgressPage.tsx', 'utf8')
const homePage = fs.readFileSync('src/pages/HomePage.tsx', 'utf8')
const settingsPage = fs.readFileSync('src/features/settings/SettingsPage.tsx', 'utf8')
const onboarding = fs.readFileSync('src/features/onboarding/Onboarding.tsx', 'utf8')
const requiredName = fs.readFileSync('src/features/profile/RequiredDisplayNamePrompt.tsx', 'utf8')
const app = fs.readFileSync('src/app/App.tsx', 'utf8')
const exerciseDex = fs.readFileSync('src/features/exerciseDex/ExerciseDex.tsx', 'utf8')

const css = fs.readFileSync('src/styles/app.css', 'utf8')

// GuideDialog Mission Brief & Pixel Command assertions
assert.match(dialog, /role="dialog" aria-modal="true"/)
assert.match(dialog, /event\.key === 'Escape'/)
assert.match(dialog, />\s*Back\s*</)
assert.match(dialog, /last \? 'Done' : 'Next ›'/)
assert.match(dialog, /playEffect\('select'\)/)
assert.match(dialog, /useBackNavigation\('guide-dialog'/)
assert.match(dialog, /guide-objective-strip/)
assert.match(dialog, /cmd-btn primary/)
assert.match(dialog, /cmd-btn secondary/)

// Step 19 Static Fidelity Tests: Mission Brief V2 + Pixel Command Style B
// 1. No forced guide min-height
assert.doesNotMatch(css, /\.guide-dialog[^{]*\{[^}]*min-height:\s*[1-9]/)
assert.doesNotMatch(css, /\.onboarding-card[^{]*\{[^}]*min-height:\s*(?:min\(|[1-9])/i)
assert.match(css, /(?:\.guide-dialog|\.onboarding-card)[^{]*\{[^}]*height:\s*auto;/)
assert.match(css, /(?:\.guide-dialog|\.onboarding-card)[^{]*\{[^}]*min-height:\s*0;/)

// 2. No guide body flex-grow or vertical centering causing dead space
assert.doesNotMatch(css, /\.guide-content[^{]*\{[^}]*align-content:\s*center/i)
assert.doesNotMatch(css, /\.onboarding-content[^{]*\{[^}]*align-content:\s*center/i)
assert.doesNotMatch(css, /\.guide-content[^{]*\{[^}]*justify-content:\s*center/i)
assert.match(css, /(?:\.guide-content|\.onboarding-content)[^{]*\{[^}]*display:\s*block;/)

// 3. No full-width Next / no stretched CTA
assert.match(css, /(?:\.guide-actions|\.onboarding-actions)\s+\.cmd-btn\s*\{[^}]*flex:\s*0 0 auto;/)
assert.match(css, /(?:\.guide-actions|\.onboarding-actions)\s+\.cmd-btn\s*\{[^}]*width:\s*auto;/)
assert.match(css, /(?:\.guide-actions|\.onboarding-actions)\s+\.cmd-btn\s*\{[^}]*max-width:\s*max-content;/)
assert.match(css, /(?:\.guide-actions|\.onboarding-actions)\s+\.cmd-btn\.primary\s*\{[^}]*margin-left:\s*auto;/)
assert.doesNotMatch(css, /\.onboarding-actions[^{]*\{[^}]*grid-template-columns/)

// 4. Exact Pixel Command radius and shadow
assert.match(css, /(?:\.cmd-btn|\.cmd-icon-btn)[^{]*\{[^}]*border-radius:\s*0;/)
assert.match(css, /(?:\.cmd-btn|\.cmd-icon-btn)[^{]*\{[^}]*border:\s*2px solid var\(--color-border-strong\);/)
assert.match(css, /(?:\.cmd-btn|\.cmd-icon-btn)[^{]*\{[^}]*box-shadow:\s*3px 3px 0 var\(--color-border-strong\);/)
assert.match(css, /\.cmd-btn:not\(\[disabled\]\):active[^{]*\{[^}]*transform:\s*translate\(2px,\s*2px\);[^}]*box-shadow:\s*1px 1px 0/s)

// 5. Guide-actions space-between layout
assert.match(css, /(?:\.guide-actions|\.onboarding-actions)[^{]*\{[^}]*display:\s*flex;[^}]*justify-content:\s*space-between;/)

// 6. Compact title sizing (prototype matches 19px)
assert.match(css, /\.guide-objective-strip\s+h2[^{]*\{[^}]*font-size:\s*19px;/)

// 7. Compact objective padding & accent rail
assert.match(css, /\.guide-objective-strip[^{]*\{[^}]*padding:\s*14px;/)
assert.match(css, /\.guide-objective-strip[^{]*\{[^}]*border-left:\s*4px solid var\(--color-primary\);/)

// 8. No legacy center alignment
assert.doesNotMatch(css, /\.onboarding-content[^{]*\{[^}]*text-align:\s*center/i)
assert.doesNotMatch(css, /\.guide-content[^{]*\{[^}]*text-align:\s*center/i)
assert.match(css, /(?:\.guide-content|\.onboarding-content)[^{]*\{[^}]*text-align:\s*left;/)

// 9. No route-callout oversized width rule
assert.doesNotMatch(css, /\.tutorial-path[^{]*\{[^}]*width:\s*min\(100%,\s*470px\)/)
assert.doesNotMatch(css, /\.path-callout[^{]*\{[^}]*width:\s*min\(100%,\s*470px\)/)
assert.match(css, /(?:\.path-callout|\.tutorial-path)[^{]*\{[^}]*width:\s*auto;/)

// Onboarding Field Guide assertions
assert.match(onboarding, /FitDex Field Guide/)
assert.match(onboarding, /section: 'Home'/)
assert.match(onboarding, /section: 'Personalization'/)
assert.match(onboarding, /Build Your Training/)
assert.match(onboarding, /Explore 804 Exercises/)
assert.match(onboarding, /Track Your Fuel/)
assert.match(onboarding, /Progress & XP/)
assert.match(onboarding, /Offline & Settings/)
assert.match(onboarding, /Enter FitDex/)
assert.match(onboarding, /className="guide-progress"/)
assert.match(onboarding, /className="step-rail"/)
assert.match(dialog, /className="guide-progress"/)
assert.match(dialog, /className="step-rail"/)
assert.match(css, /\.step-rail button\s*\{[^}]*height:\s*6px;/s)
assert.doesNotMatch(css, /\.tutorial-dots button\s*\{[^}]*height:\s*28px/i)
assert.match(onboarding, /playEffect\('select'\)/)
assert.match(onboarding, /useBackNavigation\('field-guide'/)
assert.match(onboarding, /aria-label="Field Guide topics"/)
assert.match(onboarding, /isReplay/)

// Prompt & App Shell Gate assertions
assert.match(requiredName, /What should FitDex call you\?/)
assert.match(requiredName, /useBackNavigation\('required-display-name'/)
assert.match(requiredName, /Continue →/)
assert.match(app, /resolveProfileGate/)
assert.match(app, /<Onboarding requiresDisplayName/)
assert.match(app, /<RequiredDisplayNamePrompt \/>/)
assert.match(app, /onOpenFieldGuide=\{\(\) => setTutorialOpen\(true\)\}/)

// Page Contextual Help routing & Pixel Command assertions
assert.doesNotMatch(homePage, /FIELD UNIT/i)
assert.match(homePage, /onOpenFieldGuide/)
assert.match(homePage, /aria-label="FitDex Field Guide"/)
assert.match(homePage, /cmd-icon-btn.*home-help-btn/)
assert.match(workoutPage, /hasSeenTutorial\('workout'\)/)
assert.match(workoutPage, /How Workouts Work/)
assert.match(workoutPage, /workout-hub-help.*cmd-icon-btn/)
assert.match(foodPage, /hasSeenTutorial\('food'\)/)
assert.match(foodPage, /How Food Works/)
assert.match(foodPage, /workout-hub-help.*cmd-icon-btn/)
assert.match(journal, /How Journal Works/)
assert.match(journal, /page-help-button/)
assert.match(progress, /How Progress Works/)
assert.match(progress, /page-help-button/)
assert.match(progress, /Weight × reps across logged weight-based resistance sets/)

// Pixel Command help button CSS assertions
assert.match(css, /\.page-help-button\s*\{[^}]*box-shadow:\s*3px 3px 0/)
assert.match(css, /\.workout-hub-help\s*\{[^}]*box-shadow:\s*3px 3px 0/)

// Settings rows assertions
assert.match(settingsPage, /title="Field Guide"/)
assert.match(settingsPage, /GamificationHelpButton/)

// Exercise Dex has no empty guide action
assert.doesNotMatch(exerciseDex, /GuideDialog/)

// Gamification achievement +50 XP copy
const gamificationSections = gamificationHelpSteps[0].sections
const hasAchievementXp = gamificationSections.some((sec) =>
  (sec.text && sec.text.includes('+50 XP')) ||
  (sec.items && sec.items.some((item) => item.value === '+50 XP'))
)
assert.strictEqual(hasAchievementXp, true)

// Guide Action Consistency Assertions (Phase 8 UX Fix)
// 1. Field Guide top action says Skip
assert.match(onboarding, /<header className="onboarding-topline guide-topline">[\s\S]*?<button[\s\S]*?aria-label="Skip Field Guide"[\s\S]*?>\s*Skip\s*<\/button>/)
assert.doesNotMatch(onboarding, /isReplay \|\| lastSlide \? 'Close' : 'Skip'/)

// 2 & 3. Workout and Food top action says Skip
assert.equal(workoutTutorialSteps.length > 1, true)
assert.equal(foodTutorialSteps.length > 1, true)
assert.match(dialog, /\{!isSingle \? \(\s*<button[\s\S]*?aria-label="Skip guide"[\s\S]*?>\s*Skip\s*<\/button>\s*\) : null\}/)

// 4 & 5. Progress single-step guide has NO top Close button and exactly one visible Close action in footer
assert.match(progress, /steps=\{progressHelpSteps\}/)
const progressHelpBlock = progress.slice(progress.indexOf('progressHelpSteps:'), progress.indexOf('export function ProgressPage'))
assert.equal((progressHelpBlock.match(/title:/g) || []).length, 1)
assert.match(dialog, /const isSingle = steps\.length === 1/)
assert.match(dialog, /<header className="guide-topline">[\s\S]*?\{!isSingle \? \([\s\S]*?\) : null\}\s*<\/header>/)
assert.match(dialog, /<footer className="guide-actions">[\s\S]*?\{isSingle \? \(\s*<button[\s\S]*?>\s*Close\s*<\/button>\s*\) :/)

// 6 & 7. Journal single-step guide has NO top Close button and exactly one visible Close action
assert.match(journal, /steps=\{journalHelpSteps\}/)
const journalHelpBlock = journal.slice(journal.indexOf('journalHelpSteps:'), journal.indexOf('export function JournalPage'))
assert.equal((journalHelpBlock.match(/title:/g) || []).length, 1)

// 8 & 9. Gamification guide has NO top Close button and exactly one visible Close action
assert.equal(gamificationHelpSteps.length, 1)
const gamificationViews = fs.readFileSync('src/features/gamification/GamificationViews.tsx', 'utf8')
assert.match(gamificationViews, /steps=\{gamificationHelpSteps\}/)

// 10. Field Guide skip preserves first-run completion behavior
const initialTutorialCompleted = deviceStorage.get(TUTORIAL_COMPLETE_KEY)
deviceStorage.remove(TUTORIAL_COMPLETE_KEY)
assert.equal(hasCompletedTutorial(), false)
completeTutorial()
assert.equal(hasCompletedTutorial(), true)

// 11. Field Guide replay skip safely dismisses without resetting onboarding
assert.equal(hasCompletedTutorial(), true)
completeTutorial()
assert.equal(hasCompletedTutorial(), true)
if (initialTutorialCompleted !== null) deviceStorage.set(TUTORIAL_COMPLETE_KEY, initialTutorialCompleted)

// 12. Android Back & Escape behavior remains unchanged
assert.match(dialog, /useBackNavigation\('guide-dialog'/)
assert.match(dialog, /event\.key === 'Escape'/)
assert.match(onboarding, /useBackNavigation\('field-guide'/)

db.close()
await Dexie.delete('fitdex')
console.log('Guide tests passed: 12 Workout steps, 8 Food steps, 7 Field Guide steps, 1 Gamification step, Mission Brief & Pixel Command layout, replay mode, and page-level routing verified')
