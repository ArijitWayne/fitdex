# FitDex

> A local-first fitness companion for workouts, nutrition logging, and a retro RPG-inspired interface.

FitDex is a mobile-first Progressive Web App for building routines, logging real workouts, and tracking food on your own device. It pairs practical fitness tools with original pixel-art styling—without requiring an account or storing personal workout or nutrition history in a FitDex cloud database.

## Features

### Exercise Dex

- Search **804** active built-in exercises across nine muscle categories.
- Browse verified demonstrations, FitDex-authored instructions, equipment, and tracking guidance.
- Use normalized local search for common punctuation and spacing variants.
- Explore themed category pixel art across all four visual themes.

### Workout & Routines

- Create reusable routines and set planned set counts.
- Start from a routine or begin an empty workout.
- Resume one locally autosaved active session at a time.
- Log reps, weight, duration, or distance as appropriate for each exercise.
- Review previous performance, use the rest timer, and keep completed workout history as read-only snapshots.

### Food & Nutrition

- Log foods under Breakfast, Lunch, Supper, or Dinner.
- Enter calories, protein, carbohydrates, fat, fiber, sugar, saturated fat, and sodium manually.
- Browse dates, review meal and daily totals, and edit or delete individual entries.
- Reuse remembered foods with their saved category and default nutrition values.
- Choose fixed pixel-art categories or create a custom category through Other with a personal accent color and one recolorable generic pixel icon.

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
- Dexie/IndexedDB persistence, PWA support, Cloudflare Workers Static Assets deployment, and four themes

**Planned / upcoming**

- Journal integration
- Progress, body tracking, and personal records
- Home dashboard refinement
- XP, levels, and streaks driven by real activity
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
| `npm run test:workout-sessions` | Check workout session behavior |
| `npm run test:food` | Check Food V1 repository behavior |

## Deployment

FitDex is configured for Cloudflare Workers Static Assets via `wrangler.jsonc`. Build with `npm run build`; Wrangler is the deployment tool. This deployment serves the app and its static assets only—FitDex does not store user workout or nutrition records in Cloudflare, and R2 is not configured.

FitDex is under active development. No license file is currently included in this repository.
