/// <reference types="node" />
import assert from 'node:assert/strict'
import fs from 'node:fs'
import {
  createSettingsNavigationManager,
  type AppLocation,
} from './settingsOrigin.ts'
import { createNavigationHistory } from './navigationHistory.ts'

const rootLocation: AppLocation = {
  destination: 'home',
  settingsOpen: false,
  workoutEntry: 'hub',
  progressEntry: 'overview',
}

// 1. Home → Settings → gear → Home
{
  let currentScroll = 120
  const history = createNavigationHistory(rootLocation)
  let activeLocation: AppLocation = rootLocation
  const manager = createSettingsNavigationManager(
    (next) => {
      history.navigate(next)
      activeLocation = next
    },
    () => history.canGoBack(),
    () => {
      const prior = history.back()
      if (prior) activeLocation = prior
    },
    rootLocation,
    () => currentScroll,
  )

  // From Home, open Settings via gear
  manager.toggleSettings(activeLocation)
  assert.equal(activeLocation.settingsOpen, true)
  assert.equal(activeLocation.destination, 'home')
  assert.equal(manager.getOrigin()?.scrollTop, 120)

  // Gear clicked again while in Settings -> closes to Home
  manager.toggleSettings(activeLocation)
  assert.equal(activeLocation.settingsOpen, false)
  assert.equal(activeLocation.destination, 'home')
  assert.equal(manager.getPendingScrollRestore(), 120)
  assert.equal(manager.getOrigin(), null)
}

// 2. Workout → Settings → gear → Workout
{
  let currentScroll = 340
  const workoutLocation: AppLocation = {
    destination: 'workout',
    settingsOpen: false,
    workoutEntry: 'hub',
    progressEntry: 'overview',
  }
  const history = createNavigationHistory(rootLocation)
  history.navigate(workoutLocation)
  let activeLocation: AppLocation = workoutLocation

  const manager = createSettingsNavigationManager(
    (next) => {
      history.navigate(next)
      activeLocation = next
    },
    () => history.canGoBack(),
    () => {
      const prior = history.back()
      if (prior) activeLocation = prior
    },
    rootLocation,
    () => currentScroll,
  )

  manager.toggleSettings(activeLocation)
  assert.equal(activeLocation.settingsOpen, true)
  assert.equal(activeLocation.destination, 'workout')

  manager.toggleSettings(activeLocation)
  assert.equal(activeLocation.settingsOpen, false)
  assert.equal(activeLocation.destination, 'workout')
  assert.equal(manager.getPendingScrollRestore(), 340)
}

// 3. Food → Settings → gear → Food
{
  let currentScroll = 450
  const foodLocation: AppLocation = {
    destination: 'food',
    settingsOpen: false,
    workoutEntry: 'hub',
    progressEntry: 'overview',
  }
  const history = createNavigationHistory(rootLocation)
  history.navigate(foodLocation)
  let activeLocation: AppLocation = foodLocation

  const manager = createSettingsNavigationManager(
    (next) => {
      history.navigate(next)
      activeLocation = next
    },
    () => history.canGoBack(),
    () => {
      const prior = history.back()
      if (prior) activeLocation = prior
    },
    rootLocation,
    () => currentScroll,
  )

  manager.toggleSettings(activeLocation)
  assert.equal(activeLocation.settingsOpen, true)
  assert.equal(activeLocation.destination, 'food')

  manager.toggleSettings(activeLocation)
  assert.equal(activeLocation.settingsOpen, false)
  assert.equal(activeLocation.destination, 'food')
  assert.equal(manager.getPendingScrollRestore(), 450)
}

// 4. Progress → Settings → gear → Progress
{
  let currentScroll = 210
  const progressLocation: AppLocation = {
    destination: 'progress',
    settingsOpen: false,
    workoutEntry: 'hub',
    progressEntry: 'achievements',
  }
  const history = createNavigationHistory(rootLocation)
  history.navigate(progressLocation)
  let activeLocation: AppLocation = progressLocation

  const manager = createSettingsNavigationManager(
    (next) => {
      history.navigate(next)
      activeLocation = next
    },
    () => history.canGoBack(),
    () => {
      const prior = history.back()
      if (prior) activeLocation = prior
    },
    rootLocation,
    () => currentScroll,
  )

  manager.toggleSettings(activeLocation)
  assert.equal(activeLocation.settingsOpen, true)
  assert.equal(activeLocation.destination, 'progress')
  assert.equal(activeLocation.progressEntry, 'achievements')

  manager.toggleSettings(activeLocation)
  assert.equal(activeLocation.settingsOpen, false)
  assert.equal(activeLocation.destination, 'progress')
  assert.equal(activeLocation.progressEntry, 'achievements')
  assert.equal(manager.getPendingScrollRestore(), 210)
}

// 5. Journal → Settings → gear → Journal
{
  let currentScroll = 180
  const journalLocation: AppLocation = {
    destination: 'journal',
    settingsOpen: false,
    workoutEntry: 'hub',
    progressEntry: 'overview',
  }
  const history = createNavigationHistory(rootLocation)
  history.navigate(journalLocation)
  let activeLocation: AppLocation = journalLocation

  const manager = createSettingsNavigationManager(
    (next) => {
      history.navigate(next)
      activeLocation = next
    },
    () => history.canGoBack(),
    () => {
      const prior = history.back()
      if (prior) activeLocation = prior
    },
    rootLocation,
    () => currentScroll,
  )

  manager.toggleSettings(activeLocation)
  assert.equal(activeLocation.settingsOpen, true)
  assert.equal(activeLocation.destination, 'journal')

  manager.toggleSettings(activeLocation)
  assert.equal(activeLocation.settingsOpen, false)
  assert.equal(activeLocation.destination, 'journal')
  assert.equal(manager.getPendingScrollRestore(), 180)
}

// 6. Exercise Dex → Settings → gear → Exercise Dex
{
  let currentScroll = 520
  const exerciseDexLocation: AppLocation = {
    destination: 'workout',
    settingsOpen: false,
    workoutEntry: 'library',
    progressEntry: 'overview',
  }
  const history = createNavigationHistory(rootLocation)
  history.navigate(exerciseDexLocation)
  let activeLocation: AppLocation = exerciseDexLocation

  const manager = createSettingsNavigationManager(
    (next) => {
      history.navigate(next)
      activeLocation = next
    },
    () => history.canGoBack(),
    () => {
      const prior = history.back()
      if (prior) activeLocation = prior
    },
    rootLocation,
    () => currentScroll,
  )

  manager.toggleSettings(activeLocation)
  assert.equal(activeLocation.settingsOpen, true)
  assert.equal(activeLocation.workoutEntry, 'library')

  manager.toggleSettings(activeLocation)
  assert.equal(activeLocation.settingsOpen, false)
  assert.equal(activeLocation.destination, 'workout')
  assert.equal(activeLocation.workoutEntry, 'library')
  assert.equal(manager.getPendingScrollRestore(), 520)
}

// 7 & 8. origin scrollTop captured & restored
{
  let currentScroll = 680
  const history = createNavigationHistory(rootLocation)
  let activeLocation: AppLocation = rootLocation
  const manager = createSettingsNavigationManager(
    (next) => {
      history.navigate(next)
      activeLocation = next
    },
    () => history.canGoBack(),
    () => {
      const prior = history.back()
      if (prior) activeLocation = prior
    },
    rootLocation,
    () => currentScroll,
  )

  manager.openSettings(activeLocation)
  assert.equal(manager.getOrigin()?.scrollTop, 680, 'origin scrollTop captured')

  manager.closeSettingsToOrigin(activeLocation)
  assert.equal(manager.getPendingScrollRestore(), 680, 'origin scroll restored')
}

// 9. entering Settings subview does NOT replace origin
{
  let currentScroll = 290
  const workoutLocation: AppLocation = {
    destination: 'workout',
    settingsOpen: false,
    workoutEntry: 'hub',
    progressEntry: 'overview',
  }
  const history = createNavigationHistory(rootLocation)
  history.navigate(workoutLocation)
  let activeLocation: AppLocation = workoutLocation

  const manager = createSettingsNavigationManager(
    (next) => {
      history.navigate(next)
      activeLocation = next
    },
    () => history.canGoBack(),
    () => {
      const prior = history.back()
      if (prior) activeLocation = prior
    },
    rootLocation,
    () => currentScroll,
  )

  // Open settings
  manager.openSettings(activeLocation)
  const initialOrigin = manager.getOrigin()
  assert.equal(initialOrigin?.location.destination, 'workout')
  assert.equal(initialOrigin?.scrollTop, 290)

  // Attempting to openSettings while already inside Settings does not overwrite origin
  currentScroll = 999
  manager.openSettings(activeLocation)
  assert.equal(manager.getOrigin()?.location.destination, 'workout')
  assert.equal(manager.getOrigin()?.scrollTop, 290, 'origin was not overwritten by subview entry')
}

// 10 & 11. Nutrition Targets ‹ HUB vs global gear
{
  const settingsSource = fs.readFileSync('src/features/settings/SettingsPage.tsx', 'utf8')
  // Nutrition Targets uses SettingsSubheader with onBack={backToHub}
  assert.match(settingsSource, /title="Nutrition Targets"[\s\S]*?onBack=\{backToHub\}/)
  // SettingsSubheader renders ‹ HUB
  assert.match(settingsSource, /className="settings-hub-button"[\s\S]*?>\s*‹ HUB\s*<\/button>/)
  // Settings Hub itself retains back-button to FitDex
  assert.match(settingsSource, /className="back-button"[\s\S]*?aria-label="Back to FitDex"/)

  // Global gear from Nutrition Targets returns to original app page (Workout), not Settings hub
  let currentScroll = 310
  const workoutLocation: AppLocation = {
    destination: 'workout',
    settingsOpen: false,
    workoutEntry: 'hub',
    progressEntry: 'overview',
  }
  const history = createNavigationHistory(rootLocation)
  history.navigate(workoutLocation)
  let activeLocation: AppLocation = workoutLocation

  const manager = createSettingsNavigationManager(
    (next) => {
      history.navigate(next)
      activeLocation = next
    },
    () => history.canGoBack(),
    () => {
      const prior = history.back()
      if (prior) activeLocation = prior
    },
    rootLocation,
    () => currentScroll,
  )

  manager.openSettings(activeLocation)
  // Simulate clicking global gear while inside Nutrition Targets
  manager.toggleSettings(activeLocation)
  assert.equal(activeLocation.settingsOpen, false)
  assert.equal(activeLocation.destination, 'workout', 'returned directly to Workout, not Settings hub')
  assert.equal(manager.getPendingScrollRestore(), 310)
}

// 12. Direct Settings entry without origin uses safe fallback
{
  const history = createNavigationHistory(rootLocation)
  let activeLocation: AppLocation = {
    destination: 'home',
    settingsOpen: true,
    workoutEntry: 'hub',
    progressEntry: 'overview',
  }

  const manager = createSettingsNavigationManager(
    (next) => {
      history.navigate(next)
      activeLocation = next
    },
    () => history.canGoBack(),
    () => {
      const prior = history.back()
      if (prior) activeLocation = prior
    },
    rootLocation,
  )

  // Direct close when origin is null
  manager.closeSettingsToOrigin(activeLocation)
  assert.equal(activeLocation.settingsOpen, false)
  assert.equal(activeLocation.destination, 'home', 'safe fallback to rootLocation')
}

// 13. Android Back behavior remains centralized
{
  const appSource = fs.readFileSync('src/app/App.tsx', 'utf8')
  const settingsSource = fs.readFileSync('src/features/settings/SettingsPage.tsx', 'utf8')
  const providerSource = fs.readFileSync('src/features/navigation/BackNavigationProvider.tsx', 'utf8')

  // Subview has priority 10 back handler to hub
  assert.match(settingsSource, /useBackNavigation\('settings-subview',\s*view !== 'hub' \|\| choosingAvatar/)
  // Centralized Capacitor listener dispatches to highest priority handler
  assert.match(providerSource, /CapacitorApp\.addListener\('backButton'/)
  // App history handler at priority 0
  assert.match(appSource, /useBackNavigation\('app-history',\s*historyDepth > 0,\s*popLocation,\s*0\)/)
}

// 14. Repeated Settings toggling does not corrupt navigation history
{
  let currentScroll = 150
  const history = createNavigationHistory(rootLocation)
  const workoutLocation: AppLocation = {
    destination: 'workout',
    settingsOpen: false,
    workoutEntry: 'hub',
    progressEntry: 'overview',
  }
  history.navigate(workoutLocation)
  let activeLocation: AppLocation = workoutLocation

  const manager = createSettingsNavigationManager(
    (next) => {
      history.navigate(next)
      activeLocation = next
    },
    () => history.canGoBack(),
    () => {
      const prior = history.back()
      if (prior) activeLocation = prior
    },
    rootLocation,
    () => currentScroll,
  )

  const initialDepth = history.entries().length
  assert.equal(initialDepth, 1, 'starts at depth 1 (home in previous)')

  // Repeat toggle 5 times: Workout -> Settings -> Workout -> Settings -> Workout ...
  for (let i = 0; i < 5; i++) {
    manager.toggleSettings(activeLocation)
    assert.equal(activeLocation.settingsOpen, true)
    manager.toggleSettings(activeLocation)
    assert.equal(activeLocation.settingsOpen, false)
    assert.equal(activeLocation.destination, 'workout')
    assert.equal(history.entries().length, initialDepth, `depth preserved at iteration ${i + 1}`)
  }
}

// Visual & CSS contract checks
{
  const appCss = fs.readFileSync('src/styles/app.css', 'utf8')
  assert.match(appCss, /\.settings-hub-button\s*\{[^}]*border-radius:\s*0;/s)
  assert.match(appCss, /\.settings-hub-button\s*\{[^}]*border:\s*2px solid var\(--color-border-strong\);/s)
  assert.match(appCss, /\.settings-hub-button\s*\{[^}]*box-shadow:\s*3px 3px 0 var\(--color-border-strong\);/s)
  assert.match(appCss, /\.settings-hub-button\s*\{[^}]*min-height:\s*44px;/s)
  assert.match(appCss, /\.settings-hub-button\s*\{[^}]*text-transform:\s*uppercase;/s)
  assert.match(appCss, /\.settings-hub-button:active\s*\{[^}]*transform:\s*translate\(2px,\s*2px\);/s)
  assert.match(appCss, /\.settings-hub-button:active\s*\{[^}]*box-shadow:\s*1px 1px 0 var\(--color-border-strong\);/s)
}

console.log('Settings navigation & origin restore tests passed: 14/14 requirements verified.')
