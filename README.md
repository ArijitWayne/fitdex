# FitDex

> A local-first fitness companion for workouts, nutrition logging, and a retro RPG-inspired interface.

FitDex is a mobile-first Progressive Web App for building routines, logging real workouts, and tracking food on your own device. It pairs practical fitness tools with original pixel-art styling—without requiring an account or storing personal workout or nutrition history in a FitDex cloud database.

## Features

### Exercise Dex

- Search **804** active built-in exercises across nine muscle categories.
- Browse verified demonstrations, FitDex-authored instructions, equipment, and tracking guidance.
- Use normalized local search for common punctuation and spacing variants.
- Keep a device-local favorites shortlist, filter it, and search within it.
- Explore themed category pixel art across all four visual themes.

### Workout & Routines

- Create reusable routines and set planned set counts.
- Plan a recurring week with optional Routine Days, open Workout Days, Rest Days, and No Plan days.
- Start from a routine or begin an empty workout.
- Resume or persistently pause one locally autosaved active session at a time; paused time is excluded from the frozen completed duration.
- Log reps, weight, duration, or distance as appropriate for each exercise.
- Review previous performance, use the rest timer, and keep completed workout history as read-only snapshots that can be permanently deleted with confirmation.
- Add or remove exercises from the same routine/workout picker; active set data is protected by confirmation.

### Food & Nutrition

- Log foods under Breakfast, Lunch, Supper, or Dinner.
- Enter calories, protein, carbohydrates, fat, fiber, sugar, saturated fat, and sodium manually.
- Browse dates, review meal and daily totals, and edit or delete individual entries.
- Switch one daily nutrition donut between macro-derived calorie contribution and actual logged calories by meal.
- Reuse remembered foods with their saved category and default nutrition values.
- Choose fixed pixel-art categories or create a custom category through Other with a personal accent color and one recolorable generic pixel icon.
- Learn each workflow through replayable Workout/Food guides and lightweight Journal/Progress help.

### Gamification

- Earn idempotent XP from completed training, genuine Personal Records, and fully logged nutrition days.
- Progress through 100 Levels and nine named Ranks while Lifetime XP remains local to the device.
- Build a plan-based streak with automatic Streak Freezes, Travel/Sickness Pauses, protected Weekly Plan changes, and 52 permanent Achievements.

### Local-first PWA

- Personal workout and food history live locally in IndexedDB through Dexie.
- No account is required and FitDex does not currently run a cloud database for that history.
- The app is installable and supports offline app-shell use after loading/installation as provided by the PWA.

### Themes & Pixel Art

- Original FitDex retro-RPG/pixel-game styling—not a Pokédex clone.
- Spartans Dark, Spartans Light, Amazonians Dark, and Amazonians Light.
- Theme-aware exercise category sprites and food icons.

## Local-first by design

FitDex keeps editable and historical data deliberately separate:

```text
Routines           → editable templates
Active workouts    → resumable local sessions
Completed workouts → historical snapshots
Remembered foods   → reusable local templates
Food log entries   → historical nutrition snapshots
```

Changing a routine, a remembered food, or a custom category does not rewrite past completed workouts or food logs. A portable `.fitdex` backup/restore flow is planned, but is not available yet—clearing browser or PWA data currently removes local history.

## Technology

| Technology | Purpose |
| --- | --- |
| React + TypeScript | Application UI and typed domain model |
| Vite | Development server and production build |
| Dexie + IndexedDB | Local persistence for user-owned data |
| vite-plugin-pwa / Workbox | Installable PWA and offline app shell |
| lucide-react | Interface icons and accessible fallbacks |
| Cloudflare Workers + Wrangler | Static-asset application deployment |

```text
Browser / installed PWA
          ↓
       React UI
          ↓
      Dexie / IndexedDB

Cloudflare Workers Static Assets serve the application and its static assets.
Personal workout and nutrition data stays on the device.
```

## Current status

**Implemented**

- Exercise Dex: dataset version 4, 804 active built-ins, 804 verified demonstrations, and written exercise content
- Routine building, active workout logging, autosave, rest timer, previous performance, and completed-workout history
- Food / Nutrition V1 with local food memory, date navigation, totals, categories, and custom categories
- Journal V1 with local-date navigation, completed-workout history, and four-meal Food history
- Progress + Personal Records V1 with local period trends, derived training volume, nutrition averages, and tracking-aware all-time PRs
- Home Dashboard V1 with real active/completed workout state, daily nutrition and activity, recent progress, and direct shortcuts
- Optional editable, device-local Display Name plus optimized priority loading for the selected Home avatar
- Local-first XP, 100 Levels, nine Ranks, Plan Streak protection, and 52 Achievements
- Dexie/IndexedDB persistence, PWA support, Cloudflare Workers Static Assets deployment, and four themes

**Planned / upcoming**

- Body tracking and measurements
- `.fitdex` backup/restore
- Onboarding/settings polish and broader device QA

## Screenshots

> Product screenshots and previews are coming soon.

## Getting started

Requires a current Node.js/npm installation.

```bash
git clone https://github.com/ArijitWayne/fitdex.git
cd fitdex
npm install
npm run dev
```

## Useful commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Type-check and create a production build |
| `npm run lint` | Run Oxlint |
| `npm run test:exercise-dex` | Check Exercise Dex UI/data contracts |
| `npm run test:exercise-favourites` | Check local Exercise Dex favorites |
| `npm run test:workout-sessions` | Check workout session behavior |
| `npm run test:weekly-plan` | Check recurring planning and schedule safety |
| `npm run test:food` | Check Food V1 repository behavior |
| `npm run test:food-breakdown` | Check macro and meal nutrition breakdown calculations |
| `npm run test:journal` | Check Journal daily queries, summaries, and snapshot behavior |
| `npm run test:progress` | Check Progress periods, aggregates, trends, and nutrition behavior |
| `npm run test:personal-records` | Check tracking-aware Personal Record rules |
| `npm run test:home` | Check Home greetings and derived workout, Food, activity, and recent-progress states |
| `npm run test:home-schedule` | Check schedule-aware Home behavior |
| `npm run test:guides` | Check tutorial content and seen-state persistence |
| `npm run test:home-ui` | Check Home navigation, profile/avatar integration, responsive contracts, and PWA asset policy |
| `npm run test:display-name` | Check local Display Name validation, editing, clearing, and persistence |

## Deployment

FitDex is configured for Cloudflare Workers Static Assets via `wrangler.jsonc`. Build with `npm run build`; Wrangler is the deployment tool. This deployment serves the app and its static assets only—FitDex does not store user workout or nutrition records in Cloudflare, and R2 is not configured.

FitDex is under active development. No license file is currently included in this repository.
