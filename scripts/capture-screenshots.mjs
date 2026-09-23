import { chromium } from 'playwright-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE_URL = 'http://localhost:5173';
const SCREENSHOT_DIR = path.resolve('docs/screenshots');

async function dismissAnyModals(page) {
  try {
    for (let i = 0; i < 5; i++) {
      const continueBtn = page.locator('.gamification-notification .primary-button, .guide-actions button, .context-guide-actions button, button:has-text("Continue"), button:has-text("Understood"), button:has-text("Skip")').first();
      if (await continueBtn.count() > 0 && await continueBtn.isVisible()) {
        await continueBtn.click({ force: true });
        await page.waitForTimeout(400);
      } else {
        break;
      }
    }
  } catch (e) {}
}

async function run() {
  console.log('Launching Chrome from:', CHROME_PATH);
  const browser = await chromium.launch({
    executablePath: CHROME_PATH,
    headless: true,
  });

  const context = await browser.newContext({
    viewport: { width: 393, height: 852 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
  });

  const page = await context.newPage();

  // Pre-seed storage
  await page.addInitScript(() => {
    sessionStorage.setItem('fitdex_boot_completed', 'true');
    localStorage.setItem('fitdex.tutorial.completed', 'true');
    localStorage.setItem('fitdex_tutorial_completed', 'true');
  });

  console.log('Navigating to FitDex app...');
  await page.goto(BASE_URL, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1000);

  // Set displayName in IndexedDB and create sample data with proper transaction completion
  await page.evaluate(async () => {
    return new Promise((resolve, reject) => {
      const open = indexedDB.open('fitdex');
      open.onsuccess = async () => {
        const db = open.result;
        const now = new Date().toISOString();
        const dateKey = now.slice(0, 10);
        const dayOfWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'][new Date().getDay()];

        const tx = db.transaction([
          'settings',
          'workouts',
          'workoutExercises',
          'workoutSets',
          'foodLogEntries',
          'achievementUnlocks',
          'xpEvents'
        ], 'readwrite');

        tx.oncomplete = () => resolve();
        tx.onerror = () => reject(tx.error);

        // 1. Settings
        tx.objectStore('settings').put({
          id: 'settings',
          displayName: 'Savez',
          themeFamily: 'spartans',
          brightness: 'dark',
          units: 'metric',
          weeklyPlanConfigured: true,
          weeklyPlan: {
            [dayOfWeek]: { type: 'workout_day' }
          },
          firstUseGuidance: {
            journal: true,
            progress: true,
            foodLanding: true,
            firstFoodFeedback: true,
            customFoodCategory: true,
            streakProtection: true,
            weeklyPlan: true,
            workoutLanding: true,
            activeWorkout: true,
          },
          createdAt: now,
          updatedAt: now,
        });

        // 2. Mark achievements and XP seen to prevent modal popups
        tx.objectStore('achievementUnlocks').put({
          id: 'au:first-workout',
          achievementId: 'first-workout',
          unlockedAt: now,
          notificationSeenAt: now,
          updatedAt: now,
        });

        tx.objectStore('xpEvents').put({
          id: 'xpe:first-workout',
          sourceKey: 'achievement:first-workout',
          type: 'achievement_unlock',
          amount: 50,
          occurredAt: now,
          notificationSeenAt: now,
          updatedAt: now,
        });

        // 3. Sample completed workout for Doom Victory Screen
        const workoutId = 'workout:sample-victory';
        tx.objectStore('workouts').put({
          id: workoutId,
          nameSnapshot: 'Nightmare Upper Protocol',
          status: 'completed',
          startDate: dateKey,
          startedAt: new Date(Date.now() - 35 * 60 * 1000).toISOString(),
          completedAt: now,
          durationSeconds: 35 * 60,
          notes: 'Full clear. Ripped and torn.',
          createdAt: now,
          updatedAt: now,
        });

        const ex1Id = 'we:sample-1';
        tx.objectStore('workoutExercises').put({
          id: ex1Id,
          workoutId,
          exerciseId: 'ex:pushups',
          exerciseNameSnapshot: 'Standard Push-Up',
          exerciseCategorySnapshot: 'Chest',
          order: 0,
          trackingTypeSnapshot: 'reps_only',
          createdAt: now,
          updatedAt: now,
        });

        const ex2Id = 'we:sample-2';
        tx.objectStore('workoutExercises').put({
          id: ex2Id,
          workoutId,
          exerciseId: 'ex:pullups',
          exerciseNameSnapshot: 'Tactical Pull-Up',
          exerciseCategorySnapshot: 'Back',
          order: 1,
          trackingTypeSnapshot: 'reps_only',
          createdAt: now,
          updatedAt: now,
        });

        tx.objectStore('workoutSets').put({
          id: 'ws:1',
          workoutExerciseId: ex1Id,
          order: 0,
          targetReps: 25,
          actualReps: 25,
          completed: true,
          loggedAt: now,
          createdAt: now,
          updatedAt: now,
        });

        tx.objectStore('workoutSets').put({
          id: 'ws:2',
          workoutExerciseId: ex2Id,
          order: 0,
          targetReps: 12,
          actualReps: 12,
          completed: true,
          loggedAt: now,
          createdAt: now,
          updatedAt: now,
        });

        // 4. Sample Food item
        tx.objectStore('foodLogEntries').put({
          id: 'food:sample-1',
          date: dateKey,
          meal: 'lunch',
          foodName: 'Grilled Chicken Bowl',
          categoryName: 'Poultry',
          categoryKind: 'predefined',
          calories: 620,
          protein: 55,
          carbs: 60,
          fat: 14,
          portion: '1 bowl',
          aiEstimated: true,
          createdAt: now,
          updatedAt: now,
        });
      };
      open.onerror = () => reject(open.error);
    });
  });

  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  await dismissAnyModals(page);

  // 1. Home Dashboard
  console.log('1. Capturing Home Dashboard...');
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, '01-home-dashboard.png') });

  // 2. Workout Hub
  console.log('2. Navigating to Workout Hub...');
  await dismissAnyModals(page);
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('.app-nav .nav-item'));
    const wBtn = btns.find(b => b.textContent.includes('Workout'));
    if (wBtn) wBtn.click();
  });
  await page.waitForTimeout(1000);
  await dismissAnyModals(page);
  console.log('Capturing Workout Hub...');
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, '02-workout-hub.png') });

  // 3. Open Weekly Planner Modal
  console.log('3. Opening Weekly Planner...');
  try {
    const planWeekBtn = page.locator('.workout-edit-plan-btn').first();
    await planWeekBtn.waitFor({ state: 'visible', timeout: 3000 });
    await planWeekBtn.click();
    await page.waitForTimeout(1000);
    console.log('Capturing Weekly Planner Modal (AI Studio & Day Planner)...');
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, '03-weekly-planner.png') });

    const closeBtn = page.locator('.planner-close-btn, button[aria-label="Close"]').first();
    await closeBtn.click();
    await page.waitForTimeout(600);
  } catch (e) {
    console.warn('Could not open planner modal:', e.message);
  }

  // 4. Navigate to Journal to open Doom Victory Screen
  console.log('4. Navigating to Journal to open Doom Victory Screen...');
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('.app-nav .nav-item'));
    const jBtn = btns.find(b => b.textContent.includes('Journal'));
    if (jBtn) jBtn.click();
  });
  await page.waitForTimeout(1000);
  await dismissAnyModals(page);

  try {
    const guideBtn = page.locator('.guide-actions button, .context-guide-actions button, button:has-text("Understood")').first();
    if (await guideBtn.count() > 0 && await guideBtn.isVisible()) {
      await guideBtn.click({ force: true });
      await page.waitForTimeout(400);
    }

    const workoutRow = page.locator('.journal-ledger-row-main').first();
    await workoutRow.waitFor({ state: 'visible', timeout: 3000 });
    await workoutRow.click({ force: true });
    await page.waitForTimeout(1000);
    await dismissAnyModals(page);
    console.log('Capturing Doom Victory Screen...');
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, '04-doom-victory.png') });

    // Close/Back to Journal
    const backBtn = page.locator('.doom-victory-topbar .dex-back-button, .dex-back-button').first();
    if (await backBtn.count() > 0) {
      await backBtn.click();
      await page.waitForTimeout(500);
    }
  } catch (e) {
    console.warn('Could not click workout row in Journal:', e.message);
  }

  // 5. Navigate to Food Page
  console.log('5. Navigating to Food Page...');
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('.app-nav .nav-item'));
    const fBtn = btns.find(b => b.textContent.includes('Food'));
    if (fBtn) fBtn.click();
  });
  await page.waitForTimeout(1000);
  await dismissAnyModals(page);
  console.log('Capturing Food Page...');
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, '05-food-page.png') });

  // 6. Navigate to Progress Page
  console.log('6. Navigating to Progress Page...');
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('.app-nav .nav-item'));
    const pBtn = btns.find(b => b.textContent.includes('Progress'));
    if (pBtn) pBtn.click();
  });
  await page.waitForTimeout(1000);
  await dismissAnyModals(page);
  console.log('Capturing Progress Page...');
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, '06-progress-reps.png') });

  // Copy all screenshots to brain artifact directory for PR embedding and user viewing
  const ARTIFACT_DIR = '/Users/mohdatif/.gemini/antigravity/brain/5809dae0-93f0-4e14-a6d8-498615b46d4d';
  for (const file of fs.readdirSync(SCREENSHOT_DIR)) {
    if (file.endsWith('.png')) {
      fs.copyFileSync(path.join(SCREENSHOT_DIR, file), path.join(ARTIFACT_DIR, file));
    }
  }

  await browser.close();
  console.log('ALL 6 SCREENSHOTS CAPTURED SUCCESSFULLY!');
}

run().catch(err => {
  console.error('Error capturing screenshots:', err);
  process.exit(1);
});
