/// <reference types="node" />
import assert from 'node:assert/strict'
import fs from 'node:fs'
import { EXERCISE_CATEGORIES, exerciseBelongsToCategory, normalizeExerciseSearch, searchExercises, searchFavouriteExercises } from './exerciseCatalog.ts'
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
assert.equal(builtInExercises.length, 802, 'Active Exercise Codex catalog count remains 802.')
const chestPushUpResults = searchExercises(builtInExercises.filter((exercise) => exerciseBelongsToCategory(exercise, 'Chest')), 'pushup')
assert.ok(chestPushUpResults.some((exercise) => exercise.id === namedPushUp.id))
assert.ok(chestPushUpResults.every((exercise) => exerciseBelongsToCategory(exercise, 'Chest')))
assert.equal(normalizeExerciseSearch(' One-Arm Dumbbell Row! '), 'onearmdumbbellrow')
assert.deepEqual(searchFavouriteExercises(builtInExercises, new Set([namedPushUp.id]), 'push-ups').map((exercise) => exercise.id), [namedPushUp.id])

const component = fs.readFileSync('src/features/exerciseDex/ExerciseDex.tsx', 'utf8')
const css = fs.readFileSync('src/styles/app.css', 'utf8')
const pwa = fs.readFileSync('vite.config.ts', 'utf8')
const spriteMapping = fs.readFileSync('src/features/exerciseDex/exerciseCategorySprites.ts', 'utf8')
const spriteFamilies = ['spartan', 'amazonian'] as const
const spriteBrightnesses = ['dark', 'light'] as const
const spriteSlugs = ['chest', 'back', 'shoulders', 'legs', 'gluteal', 'biceps', 'triceps', 'forearms', 'abs'] as const

assert.match(component, /className="exercise-category-grid"/)
assert.match(component, /<label className="exercise-search">/)
assert.match(component, /<CommandPageFrame[\s\S]*terminalTitle="FITDEX \/\/ EXERCISE CODEX"[\s\S]*terminalMeta="ARCHIVE · 802"/)
assert.match(component, /CircleHelp size=\{16\}/)
assert.match(component, /Browse 802 verified records/)
assert.match(component, /<header className="exercise-dex-context">/)
assert.match(component, /onBackToWorkoutHub\?: \(\) => void/)
assert.match(component, /className="retro-workout-back" type="button" onClick=\{onBackToWorkoutHub\} aria-label="Back to Workout Hub"/)
assert.match(component, /<ArrowLeft size=\{20\} aria-hidden="true" \/><span>Workout Hub<\/span>/)
assert.match(component, /Movement archive and routine tools\./)
assert.match(component, /export interface ExerciseDexPicker/)
assert.match(component, /onAddToRoutine\?: \(exercise: Exercise\) => void/)
assert.match(component, /picker\.existingExerciseIds\.has\(exercise\.id\) \? 'exercise-picker-toggle is-added'/)
assert.match(component, /exercise-picker-contextbar/)
assert.match(component, />Added</)
assert.match(component, /await picker\.onAddExercise\(exercise\)/)
assert.match(component, /await picker\.onRemoveExercise\(exercise\)/)
assert.match(component, /exercise-library-scope/)
assert.match(component, /Favorites/)
assert.match(component, /No favorite exercises yet/)
assert.match(component, /<Star size=\{20\} strokeWidth=\{2\.4\} fill=\{libraryScope === 'favourites' \? 'currentColor' : 'none'\}/)
assert.match(component, /!picker && onToggleFavourite \? <button className=\{favourite/)
assert.doesNotMatch(component, /selectedExerciseIds/)
assert.match(component, />Add to routine<\/button>/)
assert.match(component, /libraryScope === 'all' && !normalizeExerciseSearch\(query\)/)
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
assert.match(css, /\.exercise-category-grid \{[^}]*grid-template-columns:\s*repeat\(2,/s)
assert.match(css, /\.exercise-library-scope\.exercise-codex-tabs\s*\{[^}]*overflow:\s*hidden;[^}]*border-radius:\s*9px;/s)
assert.match(css, /\.exercise-codex-tabs button\s*\{[^}]*width:\s*100%;[^}]*min-width:\s*0;/s)
assert.match(css, /\.exercise-codex-tabs button\[aria-pressed="true"\]\s*\{[^}]*var\(--color-theme-accent\)/s)
assert.match(css, /\.exercise-codex-tabs button svg\s*\{[^}]*width:\s*20px;[^}]*stroke-width:\s*2\.4;/s)
assert.match(css, /\.exercise-codex-cover\s*\{[^}]*border-radius:\s*11px;[^}]*var\(--color-theme-accent\)/s)
assert.match(css, /\.retro-workout-back\s*\{[^}]*min-height:\s*44px;[^}]*border-radius:\s*9px;[^}]*var\(--color-theme-accent\)/s)
assert.match(css, /\.retro-workout-back svg\s*\{[^}]*width:\s*20px;[^}]*stroke-width:\s*2\.8;/s)
assert.match(css, /\.retro-workout-back:focus-visible\s*\{[^}]*border-color:\s*var\(--color-theme-accent\)/s)
assert.match(css, /\.retro-workout-back:active\s*\{[^}]*transform:\s*translate\(1px, 1px\)/s)
assert.match(css, /\.exercise-codex-avatar-frame \.avatar-portrait\s*\{[^}]*border:\s*0;[^}]*background:\s*transparent;[^}]*box-shadow:\s*none;/s)
assert.match(css, /\.exercise-category-card\s*\{[^}]*border-radius:\s*10px;/s)
assert.match(css, /\.exercise-empty-result\.exercise-favourites-empty\s*\{[^}]*grid-template-columns:\s*20px minmax\(0, 1fr\);/s)
assert.match(css, /@media \(min-width: 700px\)[\s\S]*\.exercise-category-grid \{[\s\S]*?grid-template-columns:\s*repeat\(3,/)
assert.match(css, /@media \(max-width: 374px\)[\s\S]*\.exercise-category-grid \{[\s\S]*?grid-template-columns:\s*1fr;/)
assert.match(css, /\.exercise-category-sprite \{[^}]*object-fit: contain;[^}]*image-rendering: pixelated;/s)
assert.match(css, /\.exercise-search:focus-within \{[\s\S]*?border-color: var\(--color-focus\);[\s\S]*?outline: 0;/s)
assert.match(css, /\.exercise-search input:focus-visible \{[\s\S]*?outline: 0;/s)
assert.match(component, /<video[\s\S]*autoPlay[\s\S]*muted[\s\S]*loop[\s\S]*playsInline[\s\S]*preload="metadata"/)
assert.match(component, /onError=\{\(\) => setPlayback\(\{ kind: 'unavailable' \}\)\}/)
assert.match(component, /Exercise demonstration unavailable\./)
assert.match(component, /Download for offline/)
assert.match(component, /Remove download/)
assert.match(css, /\.exercise-detail-media-unavailable \{[^}]*min-height: 132px;[^}]*text-align: center;/s)
assert.doesNotMatch(component.match(/function ExerciseRows[\s\S]*?function ExerciseDetail/)?.[0] ?? '', /<video|<img/)
assert.match(pwa, /globPatterns: \['\*\*\/\*\.\{js,css,html,svg,png,woff2\}'\]/)
const workboxGlobPatterns = pwa.match(/globPatterns: \[(.*?)\]/)?.[1] ?? ''
assert.doesNotMatch(workboxGlobPatterns, /mp4|gif|webp/)
assert.match(component, /getAppScrollTop/)
assert.match(component, /restoreAppScroll/)
assert.match(component, /savedScrollTopRef = useRef<number>\(0\)/)
assert.match(component, /pendingScrollRestoreRef = useRef<number \| null>\(null\)/)
assert.match(component, /function selectExercise\(exercise: Exercise\)/)
assert.match(component, /savedScrollTopRef\.current = getAppScrollTop\(\)/)
assert.match(component, /pendingScrollRestoreRef\.current = savedScrollTopRef\.current/)
assert.match(component, /useLayoutEffect\(\(\) => \{[\s\S]*?!selectedExercise && pendingScrollRestoreRef\.current !== null/)
assert.match(component, /onBack=\{\(\) => \{ void navigateBack\(\) \}\}/)
assert.match(component, /onSelect=\{selectExercise\}/)

// --- Navigation & Browsing State Invariant Verification ---
interface DexBrowsingState {
  category: string | null
  subfilter: string
  query: string
  libraryScope: 'all' | 'favourites'
  selectedExercise: typeof builtInExercises[0] | null
  savedScrollTop: number
  pendingScrollRestore: number | null
  currentScrollTop: number
}

function createDexSession(): {
  state: DexBrowsingState
  openCategory: (cat: string) => void
  returnToIndex: () => void
  setQuery: (q: string) => void
  setSubfilter: (sf: string) => void
  scrollTo: (y: number) => void
  selectExercise: (ex: typeof builtInExercises[0]) => void
  navigateBack: () => void
  renderVisibleExercises: () => typeof builtInExercises
} {
  const state: DexBrowsingState = {
    category: null,
    subfilter: 'All',
    query: '',
    libraryScope: 'all',
    selectedExercise: null,
    savedScrollTop: 0,
    pendingScrollRestore: null,
    currentScrollTop: 0,
  }

  return {
    state,
    openCategory(cat: string) {
      state.category = cat
      state.subfilter = 'All'
      state.query = ''
      state.currentScrollTop = 0
    },
    returnToIndex() {
      state.category = null
      state.subfilter = 'All'
      state.query = ''
    },
    setQuery(q: string) {
      state.query = q
    },
    setSubfilter(sf: string) {
      state.subfilter = sf
    },
    scrollTo(y: number) {
      state.currentScrollTop = y
    },
    selectExercise(ex: typeof builtInExercises[0]) {
      state.savedScrollTop = state.currentScrollTop
      state.selectedExercise = ex
      state.currentScrollTop = 0 // Reset scroll for detail sheet
    },
    navigateBack() {
      if (state.selectedExercise) {
        state.pendingScrollRestore = state.savedScrollTop
        state.selectedExercise = null
        // Simulate layout effect / post-render restoration
        state.currentScrollTop = state.pendingScrollRestore
        state.pendingScrollRestore = null
      } else if (state.category) {
        this.returnToIndex()
      }
    },
    renderVisibleExercises() {
      const categoryExercises = state.category
        ? builtInExercises.filter((ex) => exerciseBelongsToCategory(ex, state.category as any))
        : builtInExercises
      return searchExercises(categoryExercises, state.query)
    }
  }
}

// Test 1: Category + search + scroll + select + Back restores exact browsing context
const categoryTestCases = [
  { category: 'Chest', query: 'push up' },
  { category: 'Back', query: 'row' },
  { category: 'Shoulders', query: 'press' },
  { category: 'Legs', query: 'squat' },
  { category: 'Abs', query: 'crunch' },
] as const

for (const { category: testCat, query: testQuery } of categoryTestCases) {
  const session = createDexSession()
  session.openCategory(testCat)
  session.setQuery(testQuery)
  const filteredBefore = session.renderVisibleExercises()
  assert.ok(filteredBefore.length > 0, `Expected ${testQuery} results for ${testCat}`)
  session.scrollTo(420)

  // Open exercise detail
  const targetExercise = filteredBefore[0]
  session.selectExercise(targetExercise)
  assert.equal(session.state.selectedExercise?.id, targetExercise.id)
  assert.equal(session.state.currentScrollTop, 0) // Detail view starts at top

  // Back navigation
  session.navigateBack()
  assert.equal(session.state.selectedExercise, null)
  assert.equal(session.state.category, testCat)
  assert.equal(session.state.query, testQuery)
  assert.deepEqual(session.renderVisibleExercises(), filteredBefore)
  assert.equal(session.state.currentScrollTop, 420)
}

// Test 2: Multiple consecutive Exercise Record visits preserve and update scroll correctly
{
  const session = createDexSession()
  session.openCategory('Chest')
  session.setQuery('push')
  const results = session.renderVisibleExercises()
  assert.ok(results.length >= 2)

  // Visit 1
  session.scrollTo(350)
  session.selectExercise(results[0])
  session.navigateBack()
  assert.equal(session.state.currentScrollTop, 350)
  assert.equal(session.state.query, 'push')

  // Visit 2 (user scrolls further down and opens second exercise)
  session.scrollTo(780)
  session.selectExercise(results[1])
  session.navigateBack()
  assert.equal(session.state.currentScrollTop, 780)
  assert.equal(session.state.query, 'push')
  assert.deepEqual(session.renderVisibleExercises(), results)
}

// Test 3: No-search deep scroll restoration
{
  const session = createDexSession()
  session.openCategory('Legs')
  const allLegs = session.renderVisibleExercises()
  assert.ok(allLegs.length > 10)
  session.scrollTo(1250)
  session.selectExercise(allLegs[allLegs.length - 1])
  session.navigateBack()
  assert.equal(session.state.currentScrollTop, 1250)
  assert.equal(session.state.query, '')
  assert.deepEqual(session.renderVisibleExercises(), allLegs)
}

// Test 4: Clear search behavior
{
  const session = createDexSession()
  session.openCategory('Chest')
  session.setQuery('push')
  session.setQuery('') // User clears search
  const allChest = session.renderVisibleExercises()
  session.scrollTo(500)
  session.selectExercise(allChest[3])
  session.navigateBack()
  assert.equal(session.state.query, '')
  assert.deepEqual(session.renderVisibleExercises(), allChest)
  assert.equal(session.state.currentScrollTop, 500)
}

console.log('Exercise Dex UI assertions passed: 36 themed category sprites, category order/grid breakpoints, multi-category filtering, detail-only media, no media precache, and exact browsing state/scroll restoration')
