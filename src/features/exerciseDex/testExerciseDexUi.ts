/// <reference types="node" />
import assert from 'node:assert/strict'
import fs from 'node:fs'
import { EXERCISE_CATEGORIES, exerciseBelongsToCategory, normalizeExerciseSearch, searchExercises } from './exerciseCatalog.ts'
import { builtInExercises } from './exerciseData.ts'

assert.deepEqual(EXERCISE_CATEGORIES, [
  'Chest', 'Back', 'Shoulders',
  'Legs', 'Gluteal', 'Biceps',
  'Triceps', 'Forearms', 'Abs',
])

const multiCategory = builtInExercises.find((exercise) => exercise.sourceId === 'split-squat-front-foot-elevated')
assert.ok(multiCategory)
assert.equal(exerciseBelongsToCategory(multiCategory, 'Legs'), true)
assert.equal(exerciseBelongsToCategory(multiCategory, 'Gluteal'), true)
assert.equal(builtInExercises.filter((exercise) => exerciseBelongsToCategory(exercise, 'Legs')).filter((exercise) => exercise.id === multiCategory.id).length, 1)

const namedPushUp = builtInExercises.find((exercise) => exercise.name === 'Push-Up')
assert.ok(namedPushUp)
for (const query of ['pushup', 'push up', 'push-ups', 'PUSHUP']) {
  assert.ok(searchExercises(builtInExercises, query).some((exercise) => exercise.id === namedPushUp.id), `Expected ${query} to find Push-Up`)
}
const oneArmResults = searchExercises(builtInExercises, 'one arm').map((exercise) => exercise.id)
assert.ok(oneArmResults.length > 0)
assert.deepEqual(searchExercises(builtInExercises, 'one-arm').map((exercise) => exercise.id), oneArmResults)
assert.deepEqual(searchExercises(builtInExercises, 'onearm').map((exercise) => exercise.id), oneArmResults)
const aliasExercise = builtInExercises.find((exercise) => exercise.name === 'Abdominal Crunches')
assert.ok(aliasExercise)
assert.ok(searchExercises(builtInExercises, 'Crunch').some((exercise) => exercise.id === aliasExercise.id))
assert.equal(searchExercises(builtInExercises, '').length, builtInExercises.length)
assert.equal(searchExercises(builtInExercises, '--').length, builtInExercises.length)
const chestPushUpResults = searchExercises(builtInExercises.filter((exercise) => exerciseBelongsToCategory(exercise, 'Chest')), 'pushup')
assert.ok(chestPushUpResults.some((exercise) => exercise.id === namedPushUp.id))
assert.ok(chestPushUpResults.every((exercise) => exerciseBelongsToCategory(exercise, 'Chest')))
assert.equal(normalizeExerciseSearch(' One-Arm Dumbbell Row! '), 'onearmdumbbellrow')

const component = fs.readFileSync('src/features/exerciseDex/ExerciseDex.tsx', 'utf8')
const css = fs.readFileSync('src/styles/app.css', 'utf8')
const pwa = fs.readFileSync('vite.config.ts', 'utf8')
const spriteMapping = fs.readFileSync('src/features/exerciseDex/exerciseCategorySprites.ts', 'utf8')
const spriteFamilies = ['spartan', 'amazonian'] as const
const spriteBrightnesses = ['dark', 'light'] as const
const spriteSlugs = ['chest', 'back', 'shoulders', 'legs', 'gluteal', 'biceps', 'triceps', 'forearms', 'abs'] as const

assert.match(component, /className="exercise-category-grid"/)
assert.match(component, /<label className="exercise-search">/)
assert.match(component, /export interface ExerciseDexPicker/)
assert.match(component, /onAddToRoutine\?: \(exercise: Exercise\) => void/)
assert.match(component, /className=\{picker\.selectedExerciseIds\.has\(exercise\.id\) \? 'exercise-picker-toggle is-selected'/)
assert.match(component, />Add to routine<\/button>/)
assert.match(component, /!normalizeExerciseSearch\(query\)/)
assert.match(component, /className="exercise-category-sprite"/)
assert.match(component, /getExerciseCategorySprite\(item, family, resolvedBrightness\)/)
assert.doesNotMatch(component, /MuscleGroupArtwork|muscle-group-artwork|muscle-highlight/)
assert.match(spriteMapping, /spartans: 'spartan'/)
assert.match(spriteMapping, /amazonians: 'amazonian'/)
for (const category of EXERCISE_CATEGORIES) assert.match(spriteMapping, new RegExp(`${category}: '${category.toLowerCase()}'`))
for (const family of spriteFamilies) {
  for (const brightness of spriteBrightnesses) {
    for (const slug of spriteSlugs) {
      assert.ok(fs.existsSync(`public/exercise-categories/${family}/${brightness}/${slug}.png`))
    }
  }
}
assert.match(css, /\.exercise-category-grid \{[^}]*grid-template-columns: repeat\(2,/s)
assert.match(css, /@media \(min-width: 700px\)[\s\S]*\.exercise-category-grid \{ grid-template-columns: repeat\(3,/)
assert.match(css, /@media \(max-width: 374px\)[\s\S]*\.exercise-category-grid \{ grid-template-columns: 1fr;/)
assert.match(css, /\.exercise-category-sprite \{[^}]*object-fit: contain;[^}]*image-rendering: pixelated;/s)
assert.match(css, /\.exercise-search:focus-within \{ border-color: var\(--color-focus\); outline: 0; \}/)
assert.match(css, /\.exercise-search input:focus-visible \{ outline: 0; \}/)
assert.match(component, /<video[\s\S]*autoPlay[\s\S]*muted[\s\S]*loop[\s\S]*playsInline[\s\S]*preload="metadata"/)
assert.doesNotMatch(component.match(/function ExerciseRows[\s\S]*?function ExerciseDetail/)?.[0] ?? '', /<video|<img/)
assert.match(pwa, /globPatterns: \['\*\*\/\*\.\{js,css,html,svg,png,woff2\}'\]/)
assert.doesNotMatch(pwa, /mp4|gif|webp/)

console.log('Exercise Dex UI assertions passed: 36 themed category sprites, category order/grid breakpoints, multi-category filtering, detail-only media, and no media precache')
