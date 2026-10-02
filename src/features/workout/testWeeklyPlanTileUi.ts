/// <reference types="node" />
import assert from 'node:assert/strict'
import fs from 'node:fs'

const weeklyPlanViews = fs.readFileSync('src/features/workout/WeeklyPlanViews.tsx', 'utf8')
const workoutPage = fs.readFileSync('src/pages/WorkoutPage.tsx', 'utf8')
const homePage = fs.readFileSync('src/pages/HomePage.tsx', 'utf8')
const css = fs.readFileSync('src/styles/app.css', 'utf8')

// 1. Exact Day Labels: M T W T F S S
assert.match(weeklyPlanViews, /monday:\s*'M'/)
assert.match(weeklyPlanViews, /tuesday:\s*'T'/)
assert.match(weeklyPlanViews, /wednesday:\s*'W'/)
assert.match(weeklyPlanViews, /thursday:\s*'T'/)
assert.match(weeklyPlanViews, /friday:\s*'F'/)
assert.match(weeklyPlanViews, /saturday:\s*'S'/)
assert.match(weeklyPlanViews, /sunday:\s*'S'/)

// 2. Tile face renders ONLY the day initial and NO routine names or status words
assert.match(weeklyPlanViews, /<span className="wall-face-letter" aria-hidden="true">\{initial\}<\/span>/)
assert.doesNotMatch(weeklyPlanViews, /<small[^>]*>(?:DONE|PLAN|FREEZE|MISS|REST|TODAY)<\/small>/)
assert.doesNotMatch(weeklyPlanViews, /<span>\{label\}<\/span>/)

// 3. Option B Masonry Brick Wall SVG structure present
assert.match(weeklyPlanViews, /export function BrickWallTileSvg/)
assert.match(weeklyPlanViews, /COURSE 1/)
assert.match(weeklyPlanViews, /COURSE 2/)
assert.match(weeklyPlanViews, /COURSE 3/)
assert.match(weeklyPlanViews, /today-focus-rim/)

// 4. Semantic State classification in WorkoutPage.tsx
assert.match(workoutPage, /snapshot\?\.result === 'success'\)\s*stateKey = 'done'/)
assert.match(workoutPage, /snapshot\?\.result === 'frozen'\)\s*stateKey = 'freeze'/)
assert.match(workoutPage, /snapshot\?\.result === 'missed'\)\s*stateKey = 'miss'/)
assert.match(workoutPage, /snapshot\?\.result === 'rest' \|\| snapshot\?\.result === 'paused'\)\s*stateKey = 'rest'/)
assert.match(workoutPage, /snapshot\?\.result === 'no_plan'\)\s*stateKey = 'noplan'/)
assert.match(workoutPage, /assignment\.type === 'rest_day'\)\s*stateKey = 'rest'/)
assert.match(workoutPage, /assignment\.type === 'no_plan'\)\s*stateKey = 'noplan'/)

// 5. Today overlay does not replace state
assert.match(workoutPage, /today=\{isToday\}/)
assert.match(weeklyPlanViews, /is-today/)

// 6. Home page regression: Home page must NOT use WeeklyPlanDayTile
assert.doesNotMatch(homePage, /WeeklyPlanDayTile/)
assert.doesNotMatch(homePage, /BrickWallTileSvg/)
assert.doesNotMatch(homePage, /pixel-wall-tile/)

// 7. CSS grid and theme tokens
assert.match(css, /\.workout-week-grid\s*\{[^}]*grid-template-columns:\s*repeat\(7,\s*minmax\(0,\s*1fr\)\);/s)
assert.match(css, /\.pixel-wall-tile\s*\{/s)
assert.match(css, /--done-deep:/)
assert.match(css, /--plan-deep:/)
assert.match(css, /--freeze-deep:/)
assert.match(css, /--miss-deep:/)
assert.match(css, /--rest-deep:/)
assert.match(css, /--noplan-deep:/)
assert.match(css, /--wall-today-rim:/)

console.log('✓ Weekly Plan Retro Pixel Wall Tile UI tests passed.')
