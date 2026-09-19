/// <reference types="node" />
import 'fake-indexeddb/auto'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import Dexie from 'dexie'
import { resolveProfileGate } from '../profile/profileGateModel.ts'
import { isValidDisplayName } from '../profile/displayNameModel.ts'
import { completeTutorial, hasCompletedTutorial, TUTORIAL_COMPLETE_KEY } from './tutorialStorage.ts'
import { deviceStorage } from '../../platform/deviceStorage.ts'
import { calculateRmr, calculateSuggestedCalorieTargets, calculateSuggestedProteinTarget, calculateTdee } from '../nutritionTargets/nutritionTargetCalculator.ts'

await Dexie.delete('fitdex')
const { db } = await import('../../data/database.ts')
const { acknowledgeFirstUse, loadFirstUseGuidance } = await import('../help/firstUseGuidance.ts')
const { saveNutritionTargets, loadNutritionTargets } = await import('../nutritionTargets/nutritionTargetRepository.ts')
await db.open()

const timestamp = '2026-09-19T00:00:00.000Z'

// Clean test slate
deviceStorage.remove(TUTORIAL_COMPLETE_KEY)
assert.equal(hasCompletedTutorial(), false, 'Fresh session starts with tutorial incomplete')

// -----------------------------------------------------------------------------
// 1. Brand-new user: Welcome → Name → Faction → Mode → Avatar → Nutrition intro
// -----------------------------------------------------------------------------
assert.equal(resolveProfileGate('', false), 'onboarding', 'Fresh user with empty name routes to onboarding')

// Inspect source code contracts
const onboardingSrc = fs.readFileSync('src/features/onboarding/Onboarding.tsx', 'utf8')
const appSrc = fs.readFileSync('src/app/App.tsx', 'utf8')
const cssSrc = fs.readFileSync('src/styles/app.css', 'utf8')

// Onboarding structure & titles
assert.match(onboardingSrc, /function FirstLaunchMission/)
assert.match(onboardingSrc, /const \[step, setStep\] = useState\(0\)/)
assert.match(onboardingSrc, /titles = \[\s*'Welcome to FitDex'/)
assert.match(onboardingSrc, /'Choose Your Faction'/)
assert.match(onboardingSrc, /'Choose Your Mode'/)
assert.doesNotMatch(onboardingSrc, /'Set Your Brightness'/)
assert.match(onboardingSrc, /'Choose Your Champion'/)
assert.match(onboardingSrc, /'Optional Nutrition Targets'/)

// Issue 1: Faction screen only renders faction names without color-description copy
assert.match(onboardingSrc, /\{ value: 'spartans', label: 'Spartans' \}/)
assert.match(onboardingSrc, /\{ value: 'amazonians', label: 'Amazonians' \}/)
assert.doesNotMatch(onboardingSrc, /Steel • Petrol/)
assert.doesNotMatch(onboardingSrc, /Plum • Amethyst/)

// Issue 2: Mode screen only renders Light and Dark, no Device option
assert.match(onboardingSrc, /const modeOptions: Array<\{ value: BrightnessPreference; label: string \}> = \[\s*\{ value: 'light', label: 'Light' \},\s*\{ value: 'dark', label: 'Dark' \},\s*\]/)
assert.doesNotMatch(onboardingSrc, /\{ value: 'system', label: 'Device' \}/)
assert.match(onboardingSrc, /Choose the look you want to start with\.\s*You can change it later in Settings\./)

// Verify Step 0 → Step 1 transition
assert.match(onboardingSrc, /step === 0 \? 'Begin Setup' : 'Continue'/)
assert.match(onboardingSrc, /if \(step === 1\) return <RequiredDisplayNamePrompt/)

// CRITICAL ROOT-CAUSE VERIFICATION:
// When Step 1 saves a valid display name, resolveProfileGate MUST NOT flip to 'none' while tutorial is incomplete!
assert.equal(isValidDisplayName('Warrior'), true)
assert.equal(
  resolveProfileGate('Warrior', false),
  'onboarding',
  'Saving display name in Step 1 MUST NOT dismiss onboarding while tutorial is incomplete'
)

// -----------------------------------------------------------------------------
// 2. Issue 3 & Issue 4: Responsive Stacked CTA Layout for 3-action footers
// -----------------------------------------------------------------------------
// Nutrition intro stacked hierarchy
assert.match(onboardingSrc, /step === 5 && nutritionPhase === 'intro'/)
assert.match(onboardingSrc, /<button className="cmd-btn primary mission-primary-btn"[\s\S]*?>Set My Targets<\/button>/)
assert.match(onboardingSrc, /<div className="mission-secondary-row">\s*<button className="cmd-btn secondary"[^>]*onClick=\{goBack\}>Back<\/button>\s*<button className="cmd-btn secondary"[^>]*onClick=\{[\s\S]*?skipNutrition[\s\S]*?\}>Skip for now<\/button>\s*<\/div>/)

// Nutrition result stacked hierarchy
assert.match(onboardingSrc, /step === 5 && nutritionPhase === 'result'/)
assert.match(onboardingSrc, /<button className="cmd-btn primary mission-primary-btn"[\s\S]*?>\{saving \? 'Saving…' : 'Use These Targets'\}<\/button>/)
assert.match(onboardingSrc, /<div className="mission-secondary-row">\s*<button className="cmd-btn secondary"[^>]*onClick=\{goBack\}>Back<\/button>\s*<button className="cmd-btn secondary"[^>]*onClick=\{[\s\S]*?setNutritionPhase\('entry'\)[\s\S]*?\}>Edit Details<\/button>\s*<\/div>/)

// CSS contracts: full-width primary CTA, 2-column secondary row, 44px touch targets
assert.match(cssSrc, /\.mission-actions-stacked \.cmd-btn\.mission-primary-btn\s*\{[^}]*width:\s*100%;/s)
assert.match(cssSrc, /\.mission-actions-stacked \.cmd-btn\.mission-primary-btn\s*\{[^}]*min-height:\s*44px;/s)
assert.match(cssSrc, /\.mission-actions-stacked \.mission-secondary-row\s*\{[^}]*grid-template-columns:\s*repeat\(2,\s*minmax\(0,\s*1fr\)\);/s)
assert.match(cssSrc, /\.mission-actions-stacked \.mission-secondary-row \.cmd-btn\s*\{[^}]*min-width:\s*0;/s)
assert.match(cssSrc, /\.mission-actions-stacked \.mission-secondary-row \.cmd-btn\s*\{[^}]*min-height:\s*44px;/s)

// -----------------------------------------------------------------------------
// 3. Brand-new user chooses Set My Targets: Nutrition entry → result → save → Field Guide
// -----------------------------------------------------------------------------
const profileInputs = { age: 30, sex: 'female' as const, heightCm: 165, weightKg: 65, activityLevel: 'moderate' as const }
const tdee = calculateTdee(calculateRmr(profileInputs), profileInputs.activityLevel)
const calorieTarget = calculateSuggestedCalorieTargets(tdee, 'maintain').defaultTarget
const proteinTargetGrams = calculateSuggestedProteinTarget(profileInputs.weightKg, profileInputs.activityLevel)

assert.ok(calorieTarget > 1500, 'Calculated calorie target is reasonable')
assert.ok(proteinTargetGrams > 50, 'Calculated protein target is reasonable')

await saveNutritionTargets({
  enabled: true,
  goal: 'maintain',
  ...profileInputs,
  calorieTarget,
  proteinTargetGrams,
  calorieTargetSource: 'calculated',
})
await acknowledgeFirstUse('nutritionSetup', 'completed')

const savedTargets = await loadNutritionTargets()
assert.equal(savedTargets?.enabled, true)
assert.equal(savedTargets?.calorieTarget, calorieTarget)
assert.equal(savedTargets?.proteinTargetGrams, proteinTargetGrams)
assert.equal((await loadFirstUseGuidance()).nutritionSetup, 'completed')

// -----------------------------------------------------------------------------
// 4. Brand-new user chooses Skip For Now: skip persisted → Field Guide
// -----------------------------------------------------------------------------
await db.settings.clear()
await acknowledgeFirstUse('nutritionSetup', 'skipped')
const skippedGuidance = await loadFirstUseGuidance()
assert.equal(skippedGuidance.nutritionSetup, 'skipped', 'Skip for now records skipped acknowledgement')
const emptyTargets = await loadNutritionTargets()
assert.equal(emptyTargets, undefined, 'Skipping targets leaves targets uninitialized without error')

// -----------------------------------------------------------------------------
// 5. Issue 5: Seven-Topic Field Guide (No Personalization duplication, Weekly Plan added)
// -----------------------------------------------------------------------------
// Exactly 7 topics in expected order
const expectedSections = [
  'Home',
  'Workout',
  'Food',
  'Weekly Plan & Streaks',
  'Progress',
  'Achievements',
  'Battle Music',
]
for (const section of expectedSections) {
  assert.match(onboardingSrc, new RegExp(`section:\\s*'${section.replace('&', '\\&')}'`))
}
assert.doesNotMatch(onboardingSrc, /section:\s*'Personalization'/, 'Personalization topic must be completely removed from Field Guide')

// Field Guide must NOT have avatar or theme selection controls
const fieldGuideBody = onboardingSrc.slice(onboardingSrc.indexOf('function FieldGuide'))
assert.doesNotMatch(fieldGuideBody, /<AvatarSelector/, 'Field Guide must not render AvatarSelector')
assert.doesNotMatch(fieldGuideBody, /tutorial-style-picker/, 'Field Guide must not render style picker')
assert.doesNotMatch(fieldGuideBody, /setFamily/, 'Field Guide must not mutate theme')

// SFX assertions on interactive actions
assert.match(onboardingSrc, /playEffect\('select'\)[^}]*setNutritionPhase\('entry'\)/)
assert.match(onboardingSrc, /playEffect\('add'\)[^}]*setStep\(6\)/)

// Field Guide only renders when step >= 6
assert.match(onboardingSrc, /if \(step >= 6\) return <FieldGuide onClose=\{onClose\} \/>/)

// App.tsx must not initialize tutorialOpen to true, so Field Guide replay cannot preempt onboarding
assert.match(appSrc, /const \[tutorialOpen, setTutorialOpen\] = useState\(false\)/)
assert.match(appSrc, /const \[tutorialCompleted, setTutorialCompleted\] = useState\(hasCompletedTutorial\)/)
assert.match(appSrc, /resolveProfileGate\(displayName, tutorialCompleted\)/)

// -----------------------------------------------------------------------------
// 6. Returning existing user: does not re-enter full onboarding
// -----------------------------------------------------------------------------
completeTutorial()
assert.equal(hasCompletedTutorial(), true)
assert.equal(
  resolveProfileGate('ReturningWarrior', true),
  'none',
  'Returning user with completed tutorial and valid name bypasses onboarding completely'
)

// -----------------------------------------------------------------------------
// 7. Legacy user with older settings (no display name): does not replay full onboarding
// -----------------------------------------------------------------------------
assert.equal(
  resolveProfileGate('', true),
  'migration',
  'Legacy user with completed tutorial but missing name routes ONLY to migration prompt'
)
assert.notEqual(resolveProfileGate('', true), 'onboarding')

// -----------------------------------------------------------------------------
// 8. Legacy user with older settings (has display name, no nutritionSetup): loads Home normally
// -----------------------------------------------------------------------------
await db.settings.put({
  id: 'settings',
  displayName: 'LegacyLegend',
  themeFamily: 'spartans',
  brightness: 'dark',
  createdAt: timestamp,
  updatedAt: timestamp,
})
const legacySettings = await db.settings.get('settings')
assert.equal(legacySettings?.displayName, 'LegacyLegend')
assert.equal(legacySettings?.firstUseGuidance?.nutritionSetup, undefined, 'Legacy user has no nutritionSetup field')
assert.equal(
  resolveProfileGate(legacySettings.displayName!, true),
  'none',
  'Legacy user without nutritionSetup field is not forced into fresh onboarding'
)

// -----------------------------------------------------------------------------
// 9. After completing Field Guide: Home loads normally
// -----------------------------------------------------------------------------
assert.equal(hasCompletedTutorial(), true)
assert.equal(resolveProfileGate('LegacyLegend', hasCompletedTutorial()), 'none')

db.close()
await Dexie.delete('fitdex')
console.log('Targeted first-launch flow & onboarding gate tests passed successfully!')
