# FitDex

FitDex is a mobile-first, local-first fitness-tracking PWA with a restrained retro-RPG interface. It runs on Android, iPhone, and desktop browsers, storing user-owned training data on the device through Dexie/IndexedDB rather than requiring an account or cloud sync.

## What exists now

### Exercise Dex

- Built-in Exercise Dex dataset version **4** with **804 active canonical exercises**.
- Every active exercise has a verified local MP4 demonstration, FitDex-authored **How to Perform** content, and **How it Helps** content.
- The nine categories are Chest, Back, Shoulders, Legs, Gluteal, Biceps, Triceps, Forearms, and Abs.
- Category memberships: Chest 99, Back 100, Shoulders 107, Legs 190, Gluteal 55, Biceps 54, Triceps 67, Forearms 29, Abs 104 — **805 memberships** total because one exercise belongs to both Legs and Gluteal.
- Canonical IDs use stable `builtin-exercise:<smartworkout-page-slug>` values. Search normalizes punctuation and spacing, so `pushup`, `push up`, `push-up`, `onearm`, `one arm`, and `one-arm` resolve consistently.
- The same Exercise Dex powers normal browsing, routine selection, and active-workout selection; built-in and custom exercises are supported in picker contexts.

### Exercise media and category sprites

- **804 verified MP4 files** currently live in `public/exercises/` and render only when the relevant Exercise Detail is open.
- Exercise media is intentionally excluded from the PWA precache and remains local development storage for now.
- Cloudflare/R2 media hosting is **not configured**. Production media delivery is future work.
- Category art dynamically resolves from the active Spartan/Amazonian family and light/dark brightness. There are nine sprites in each of the four sets:

```text
public/exercise-categories/
├── spartan/dark/ and spartan/light/
└── amazonian/dark/ and amazonian/light/
```

### Workout system

The Workout tab is the training hub:

```text
Workout
├── Today — Start or Resume Workout
├── Your Routines
├── Exercise Library
└── Recent Workouts
```

Routines are editable local templates with ordered exercise-ID references and planned set counts. A routine defaults to three sets per exercise, allows 1–20 sets, prevents duplicate exercise IDs, and supports built-in and custom exercises. Deleting a routine never deletes completed workout history.

FitDex supports persistent active workouts started from a routine or as an empty session. One active workout is allowed at a time; it can be resumed after navigation, refresh, browser restart, or PWA restart. Users can add, remove, and reorder exercises and sets, enter tracking-mode-specific values, mark sets complete, finish, or discard a session. Each mutation saves to IndexedDB immediately.

Supported tracking modes are `weight_reps`, `bodyweight_reps`, `assisted_bodyweight`, `reps_only`, `duration`, `distance_duration`, `duration_optional_distance`, `weight_distance`, and `duration_reps`. Values are stored canonically in kilograms, kilometres, and seconds; existing `settings.units` drives kg/lb and km/mi display/input conversion.

The historical model is deliberate:

```text
ROUTINE = editable template
ACTIVE WORKOUT = mutable in-progress snapshot
COMPLETED WORKOUT = immutable historical snapshot
```

Completed history stores workout/routine snapshots, exercise IDs/names/categories/tracking modes/order, timestamps, duration, and set/activity data. Later routine edits or deletion cannot rewrite the record. Previous performance matches stable exercise IDs and considers only prior completed workouts; active and discarded sessions are ignored. Recent Workouts contains real completed data only. Summary metrics include duration, exercise count, total/completed sets, and eligible resistance volume from completed `weight_reps` sets. Calories, RPE/RIR, and advanced exercise/set notes are intentionally not implemented; session-level notes and a lightweight 90-second resettable/skippable rest timer are available.

## Local-first data and ID compatibility

Dexie database schema version is **5**. Core workout stores are `workoutRoutines`, `routineExercises`, `workouts`, `workoutExercises`, and `workoutSets`; no FitDex cloud database, account-required storage, or workout cloud sync exists.

Persistent local IDs use `src/utils/createId.ts`: it prefers `globalThis.crypto.randomUUID()` and falls back to an RFC 4122 UUID v4 created with `globalThis.crypto.getRandomValues()` for Android/WebView environments that lack `randomUUID()`. It works offline, never uses `Math.random()`, and never regenerates existing IDs or canonical built-in exercise IDs.

Future `.fitdex` backup/restore must include routines, routine exercises, workouts, workout exercises, workout sets, and the rest of the user-owned FitDex state. Backup/restore is not implemented yet.

## Stack and local development

- React 19, TypeScript, Vite
- Dexie/IndexedDB
- `vite-plugin-pwa` / Workbox for installable offline app-shell support
- Oxlint

```bash
npm install
npm run dev
```

Useful checks:

```bash
npm run validate:exercises
npm run validate:exercise-content
npm run test:exercise-dex
npm run test:workout-sessions
npm run test:create-id
npm run build
npm run lint
```

## Next product work

1. Production deployment and Cloudflare setup from zero.
2. Appropriate Cloudflare R2/media delivery for heavy exercise videos.
3. Production PWA and real-device QA.
4. `.fitdex` backup/restore.
5. Journal integration and Progress/personal-record views.
6. XP, streak, and gamification features driven by real workout facts.
