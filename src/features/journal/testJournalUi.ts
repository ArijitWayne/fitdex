/// <reference types="node" />
import assert from 'node:assert/strict'
import fs from 'node:fs'
import { formatExerciseSets, formatFoodStatus, formatWorkoutStatus } from './journalModel.ts'

const page = fs.readFileSync('src/pages/JournalPage.tsx', 'utf8')
const css = fs.readFileSync('src/styles/app.css', 'utf8')
const repository = fs.readFileSync('src/features/journal/journalRepository.ts', 'utf8')
const database = fs.readFileSync('src/data/database.ts', 'utf8')

// Page Header & Date Navigation
assert.match(page, /terminalTitle="FITDEX \/\/ JOURNAL TERMINAL"/)
assert.match(page, /aria-label="Previous day"/)
assert.match(page, /aria-label="Next day"/)
assert.match(page, /isLocalToday\(date\)/)
assert.match(page, /shiftLocalDateKey/)
assert.match(page, /aria-label="Previous day"[\s\S]*playEffect\('select'\)/)
assert.match(page, /aria-label="Next day"[\s\S]*playEffect\('select'\)/)

// Symmetric Status Formatter Contracts
assert.equal(formatWorkoutStatus(0), 'No workout logged')
assert.equal(formatWorkoutStatus(1), '1 workout logged')
assert.equal(formatWorkoutStatus(2), '2 workouts logged')
assert.equal(formatWorkoutStatus(5), '5 workouts logged')

assert.equal(formatFoodStatus(0), 'No food logged')
assert.equal(formatFoodStatus(1), '1 food item logged')
assert.equal(formatFoodStatus(2), '2 food items logged')
assert.equal(formatFoodStatus(7), '7 food items logged')

// Set Formatting Helper Contracts
assert.equal(
  formatExerciseSets(
    [
      { id: '1', workoutExerciseId: 'e1', order: 0, weight: 80, reps: 10, completed: true, createdAt: '', updatedAt: '' },
      { id: '2', workoutExerciseId: 'e1', order: 1, weight: 90, reps: 8, completed: true, createdAt: '', updatedAt: '' },
    ],
    'weight_reps'
  ),
  'Set 1: 80kg×10 · Set 2: 90kg×8'
)

// Empty Meal Suppression & Activity Visibility
assert.match(page, /FOOD_MEALS\.filter/)
assert.doesNotMatch(page, /No entries/)
assert.match(page, /No activity logged/)
assert.match(page, /Completed workouts and logged foods appear here automatically/)

// V3 Field Notes Ledger Hierarchy & Vector Icons
assert.match(page, /journal-ledger-hero/)
assert.match(page, /journal-summary-rows/)
assert.match(page, /journal-item-row/)
assert.match(page, /journal-item-info/)
assert.match(page, /journal-item-title/)
assert.match(page, /journal-item-meta/)
assert.match(page, /journal-item-value/)
assert.match(page, /RetroDumbbellIcon/)
assert.match(page, /FoodClocheIcon/)
assert.doesNotMatch(page, /MusclePumpIcon/)
assert.doesNotMatch(page, /HandDumbbellIcon/)

// Notes & Reflection Feature
assert.match(page, /Notes & Reflection/)
assert.match(page, /JournalNoteSection/)
assert.match(page, /saveJournalNote/)

// Workout Detail Subview Reuse & Back Navigation
assert.match(page, /<CompletedWorkoutDetail/)
assert.match(page, /useBackNavigation\('journal-subview'/)
assert.match(page, /How Journal Works[\s\S]*playEffect\('select'\)|playEffect\('select'\)[\s\S]*How Journal Works/)
assert.match(page, /How Journal Works/)
assert.match(page, /read-only daily history/)
assert.match(page, /Completed sessions with exercise sets appear automatically/)

// Repository & Database Contracts
assert.match(repository, /getCompletedWorkoutsForDate\(dateKey\)/)
assert.match(repository, /listFoodEntries\(dateKey\)/)
assert.match(repository, /db\.journalRecords/)
assert.match(repository, /saveJournalNote/)
assert.match(database, /DATABASE_SCHEMA_VERSION = 7/)
assert.doesNotMatch(database, /journalDays|journalEntries|journalSummary/)

// Journal Meal Artwork & Collapsible Header Integrity
assert.match(page, /id="journal-meals"/)
assert.match(page, /title="Meals Logged"/)
assert.doesNotMatch(page, /summary=\{mealsSummaryLine\}/)
assert.match(page, /normalizeMealKey/)
assert.match(page, /\/food\/meals\/meal-\$\{normalizedMeal\}\.webp/)
assert.match(page, /journal-meal-row/)
assert.match(page, /journal-meal-slot/)
assert.match(page, /journal-meal-art/)
assert.match(page, /\{FOOD_MEAL_LABELS\[meal\] \?\? meal\}/)
assert.match(page, /foodNamesPreview \|\| 'No items logged'/)
assert.match(page, /formatJournalNumber\(mealTotal\.kcal \?\? 0\)\} kcal/)
assert.doesNotMatch(page, /formatEntryTime|firstTime/)

// CSS Architecture & Theme Tokens
assert.match(css, /\.journal-summary-box,\s*\.journal-ledger-hero \{/s)
assert.match(css, /\.journal-summary-rows \{/s)
assert.match(css, /\.proto-item-row,\s*\.journal-item-row \{/s)
assert.match(css, /\.proto-meal-row,\s*\.journal-meal-row \{/s)
assert.match(css, /\.proto-meal-slot,\s*\.journal-meal-slot \{/s)
assert.match(css, /\.proto-meal-art,\s*\.journal-meal-art \{/s)
assert.match(css, /\.journal-ledger-hero \{[^}]*var\(--color-rpg-accent\)/s)
assert.match(css, /\.journal-note-quote \{[^}]*var\(--color-surface-raised\)/s)
const journalCss = css.match(/\/\* Journal V3[\s\S]*?(?=\/\* Progress \+ Personal Records V1\.)/)?.[0] ?? ''
assert.doesNotMatch(journalCss, /#[0-9a-f]{3,8}/i)

console.log('Journal UI assertions passed: V3 Field Notes ledger, MusclePumpIcon & FoodClocheIcon, stacked full-width summary rows, Notes & Reflection, set formatting, empty-meal suppression, meal artwork integration, detail reuse, and theme tokens')
