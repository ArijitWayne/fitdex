/// <reference types="node" />
import assert from 'node:assert/strict'
import fs from 'node:fs'
import { formatFoodStatus, formatWorkoutStatus } from './journalModel.ts'

const page = fs.readFileSync('src/pages/JournalPage.tsx', 'utf8')
const css = fs.readFileSync('src/styles/app.css', 'utf8')
const repository = fs.readFileSync('src/features/journal/journalRepository.ts', 'utf8')
const database = fs.readFileSync('src/data/database.ts', 'utf8')

// Page Header & Date Navigation
assert.match(page, /title="Journal" description="Your daily fitness history"/)
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

// Empty Meal Suppression & Activity Visibility
assert.match(page, /FOOD_MEALS\.filter/)
assert.doesNotMatch(page, /No entries/)
assert.match(page, /No activity logged/)
assert.match(page, /Completed workouts and logged foods appear here automatically/)

// V3 Field Notes Ledger Hierarchy
assert.match(page, /journal-ledger-hero/)
assert.match(page, /journal-ledger/)
assert.match(page, /journal-ledger-entry/)
assert.match(page, /journal-ledger-row-main/)
assert.match(page, /journal-ledger-title/)
assert.match(page, /journal-ledger-meta/)
assert.match(page, /JournalWorkoutRow/)
assert.match(page, /JournalMealRow/)
assert.match(page, /journal-ledger-detail/)
assert.match(page, /FoodCategoryIcon/)
assert.match(page, /entry\.categoryKind === 'unresolved' \? 'Uncategorized'/)

// Workout Detail Subview Reuse & Back Navigation
assert.match(page, /<CompletedWorkoutDetail/)
assert.match(page, /useBackNavigation\('journal-subview'/)
assert.match(page, /How Journal Works[\s\S]*playEffect\('select'\)|playEffect\('select'\)[\s\S]*How Journal Works/)
assert.match(page, /How Journal Works/)
assert.match(page, /read-only daily history/)
assert.match(page, /Completed sessions appear automatically/)

// No Writable Flow or Unapproved Methods
assert.doesNotMatch(page, /editFoodLog|deleteFoodLog|toISOString/)
assert.match(repository, /getCompletedWorkoutsForDate\(dateKey\)/)
assert.match(repository, /listFoodEntries\(dateKey\)/)
assert.doesNotMatch(repository, /journalRecords|\.add\(|\.put\(/)
assert.match(database, /DATABASE_SCHEMA_VERSION = 7/)
assert.doesNotMatch(database, /journalDays|journalEntries|journalSummary/)

// CSS Architecture & Theme Tokens
assert.match(css, /\.journal-summary-grid \{[^}]*grid-template-columns: repeat\(2,/s)
assert.match(css, /@media\s*\(max-width:\s*374px\)[\s\S]*\.journal-summary-grid\s*\{[^}]*grid-template-columns:\s*1fr;\s*\}/s)
assert.match(css, /\.journal-ledger \{[^}]*var\(--color-border\)/s)
assert.match(css, /\.journal-ledger-entry \{[^}]*var\(--color-surface\)/s)
assert.match(css, /\.journal-ledger-hero \{[^}]*var\(--color-rpg-accent\)/s)
assert.doesNotMatch(css.match(/\/\* Journal V3[\s\S]*?(?=\/\* Progress)/)?.[0] ?? '', /#[0-9a-f]{3,8}/i)

console.log('Journal UI assertions passed: V3 Field Notes ledger, symmetric status, empty-meal suppression, detail reuse, responsive layout, and theme tokens')
