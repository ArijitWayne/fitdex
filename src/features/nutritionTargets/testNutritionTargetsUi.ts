/// <reference types="node" />
import assert from 'node:assert/strict'
import fs from 'node:fs'

const settings = fs.readFileSync('src/features/settings/SettingsPage.tsx', 'utf8')
const food = fs.readFileSync('src/pages/FoodPage.tsx', 'utf8')
const repository = fs.readFileSync('src/features/nutritionTargets/nutritionTargetRepository.ts', 'utf8')
const gamification = fs.readFileSync('src/features/gamification/gamificationRepository.ts', 'utf8')
const achievements = fs.readFileSync('src/features/gamification/achievementCatalog.ts', 'utf8')
const dailyTargetsCard = food.slice(food.indexOf('function DailyTargetsCard'), food.indexOf('function TargetsOffCard'))

assert.match(settings, /Nutrition Targets Codex/)
assert.match(settings, /Baseline Parameters/)
assert.match(settings, /Objective Directive/)
assert.match(settings, /Energy Accounting/)
assert.match(settings, /Daily Targets/)
assert.match(settings, /Daily Calorie Target/i)
assert.match(settings, /Daily Protein Target/i)
assert.match(settings, /Protein Target: Not Set/i)
assert.match(settings, /Recalculate/i)
assert.doesNotMatch(settings, /(?:carb|fat|fiber) target/i)
assert.match(settings, /Save Targets/)
// Confirm no internal TDEE multipliers leaked in options
assert.doesNotMatch(settings, /<option[^>]*>.*?·\s*1\.\d+/i)
// Confirm no decorative RECORD numbering
assert.doesNotMatch(settings, /RECORD\s*0[1-3]/i)
assert.match(settings, /NutritionTargetDraft/)
assert.match(settings, /NumericTargetInput/)
assert.match(settings, /value=\{draft\.age\}/)
assert.match(settings, /onChange=\{\(event\) => onChange\(event\.target\.value\)\}/)
assert.doesNotMatch(settings, /update\('age', Number\(event\.target\.value\)\)/)
assert.match(settings, /parseNutritionTargetDraft/)
assert.match(food, /Daily targets/)
assert.match(dailyTargetsCard, /TargetMetric label="Calories"/)
assert.match(dailyTargetsCard, /TargetMetric label="Protein"/)
assert.doesNotMatch(dailyTargetsCard, /TargetMetric label="(?:Carbs|Fat|Fiber)"/)
assert.match(food, /target-status-dialog/)
assert.match(food, /onOpenSettings/)
assert.match(repository, /nutritionTargetsInitializedAt/)
assert.match(repository, /nutritionTargetsEligibleFrom/)
assert.match(food, /liveQuery\(loadNutritionTargets\)/)
assert.doesNotMatch(gamification, /(?:carb|fat|fiber)_target/)
assert.doesNotMatch(achievements, /(?:carb|fat|fiber)-target/)
const appCss = fs.readFileSync('src/styles/app.css', 'utf8')

// Status badges fidelity
assert.match(settings, /proto-badge\s+\$\{targets\.calorieTargetSource === 'calculated' \? 'source-calc' : 'source-manual'\}/)
assert.match(settings, /proto-badge\s+\$\{isProteinUnset \? 'protein-unset' : proteinSource === 'calculated' \? 'source-calc' : 'source-manual'\}/)
assert.match(appCss, /\.proto-badge\s*\{[^}]*white-space:\s*nowrap/s)
assert.match(appCss, /\.proto-badge\.source-manual\s*\{[^}]*color:\s*var\(--color-warm-accent\)/s)
assert.match(appCss, /\.proto-badge\.source-manual\s*\{[^}]*border-color:\s*var\(--color-warm-accent\)/s)
assert.match(appCss, /\.proto-badge\.source-calc\s*\{[^}]*border-color:\s*var\(--color-primary\)/s)
assert.match(appCss, /\.proto-badge\.protein-unset\s*\{[^}]*background:\s*var\(--color-surface-raised\)/s)

// Energy accounting ledger row consistency
assert.match(settings, /<span className="v3-row-label">Basal Energy \(RMR\)<\/span>[\s\S]*?<strong[^>]*>\{rmr\} kcal<\/strong>/)
assert.match(settings, /<span className="v3-row-label">Estimated Maintenance \(TDEE\)<\/span>[\s\S]*?<strong[^>]*>\{tdee\} kcal<\/strong>/)
assert.match(settings, /<span className="v3-row-label">Goal Calorie Recommendation<\/span>[\s\S]*?<button[\s\S]*?className="recom-chip"[\s\S]*?>\s*Apply \{suggestions\.defaultTarget\} kcal\s*<\/button>/)
assert.match(settings, /<span className="v3-row-label">Calculated Protein Allocation<\/span>[\s\S]*?<strong[^>]*>\s*\{suggestedProtein\} g \(\{proteinMultiplier\} g\/kg\)\s*<\/strong>/)

// Ensure v3-row does not wrap and maintains single-line ledger contract
assert.doesNotMatch(appCss, /\.v3-row\s*\{[^}]*flex-wrap:\s*wrap/s)
assert.match(appCss, /\.v3-row\s*\{[^}]*padding:\s*7px 0;/s)
assert.match(appCss, /\.v3-ledger\s*\{[^}]*margin-bottom:\s*14px;/s)

// Audio SFX coverage assertions
assert.match(settings, /const \{ playEffect \} = useAudio\(\)/)
assert.match(settings, /onClick=\{\(\) => \{\s*playEffect\('select'\);\s*update\('enabled', true\)\s*\}\}/)
assert.match(settings, /onClick=\{\(\) => \{\s*playEffect\('select'\);\s*update\('enabled', false\)\s*\}\}/)
assert.match(settings, /onClick=\{\(\) => \{\s*playEffect\('select'\);\s*update\('goal', goal\)\s*\}\}/)
assert.match(settings, /onChange=\{\(event\) => \{\s*playEffect\('select'\)\s*update\('sex'/)
assert.match(settings, /onChange=\{\(event\) => \{\s*playEffect\('select'\)\s*const act = event\.target\.value/)
assert.match(settings, /onClick=\{\(\) => \{\s*playEffect\('select'\)\s*applyCalorie\(/)
assert.match(settings, /stepCalorie = \(delta: number\) => \{\s*playEffect\('select'\)/)
assert.match(settings, /stepProtein = \(delta: number\) => \{\s*playEffect\('select'\)/)
assert.match(settings, /await saveNutritionTargets\(\{ \.\.\.targets, \.\.\.parsed \}\)[\s\S]*?playEffect\('add'\)/)

// Containment assertions: Nutrition Codex sits directly in PageFrame without duplicate/rogue settings-detail-card outer border
assert.doesNotMatch(settings, /<section className="settings-detail-card nutrition-codex-container">/)
assert.match(settings, /<section className="nutrition-codex-container">/)
assert.match(appCss, /\.nutrition-codex-container\s*\{[^}]*width:\s*100%;/s)
assert.match(appCss, /\.nutrition-codex-container\s*\{[^}]*max-width:\s*100%;/s)
assert.match(appCss, /\.nutrition-codex-container\s*\{[^}]*box-sizing:\s*border-box;/s)

console.log('Nutrition targets UI assertions passed: V3 Nutrition Codex, clean activity dropdown, calorie/protein-only targets, tracked-only macros, Settings management, Food card, status detail, forward-only activation, select SFX, add SFX on save, and PageFrame containment')
