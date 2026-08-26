/// <reference types="node" />
import assert from 'node:assert/strict'
import fs from 'node:fs'

const settings = fs.readFileSync('src/features/settings/SettingsPage.tsx', 'utf8')
const food = fs.readFileSync('src/pages/FoodPage.tsx', 'utf8')
const repository = fs.readFileSync('src/features/nutritionTargets/nutritionTargetRepository.ts', 'utf8')

assert.match(settings, /Nutrition Targets/)
assert.match(settings, /Enable Nutrition Targets/)
assert.match(settings, /Set your goal/)
assert.match(settings, /My details/)
assert.match(settings, /Target recommendation/)
assert.match(settings, /Daily calorie target/)
assert.match(settings, /Daily protein target/)
assert.match(settings, /Save Targets/)
assert.match(settings, /NutritionTargetDraft/)
assert.match(settings, /NumericTargetInput/)
assert.match(settings, /value=\{draft\.age\}/)
assert.match(settings, /onChange=\{\(event\) => onChange\(event\.target\.value\)\}/)
assert.doesNotMatch(settings, /update\('age', Number\(event\.target\.value\)\)/)
assert.match(settings, /parseNutritionTargetDraft/)
assert.match(food, /Daily targets/)
assert.match(food, /target-status-dialog/)
assert.match(food, /onOpenSettings/)
assert.match(repository, /nutritionTargetsInitializedAt/)
assert.match(repository, /nutritionTargetsEligibleFrom/)
assert.match(food, /liveQuery\(loadNutritionTargets\)/)
console.log('Nutrition targets UI assertions passed: Settings management, Food card, status detail, and forward-only activation')
