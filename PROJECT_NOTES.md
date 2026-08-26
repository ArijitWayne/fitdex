# FitDex Project Notes

This document is the living source of truth for FitDex product decisions, architecture, design direction, implementation status, constraints, and future phases. It distinguishes completed foundations from planned functionality; future work must not be read as already implemented.

## 1. Project identity

FitDex is a mobile-first personal fitness tracker with a retro RPG and pixel-game visual identity. Serious fitness tracking sits underneath a restrained gamification layer.

Core principles:

- Local-first and offline-first
- User-owned data
- Mobile-first, with responsive desktop support
- No required cloud account and no FitDex cloud sync
- Future Android APK packaging through Capacitor

Phones (Android and iPhone) are the primary platform. Desktop and Mac browsers are secondary targets for convenience and testing.

## 2. Current technology stack

- React
- TypeScript
- Vite
- Oxlint
- Dexie
- IndexedDB
- `vite-plugin-pwa`
- `lucide-react`
- Cloudflare Workers Static Assets / Wrangler

The architecture is PWA-first. Capacitor is planned for later Android packaging but is not installed.

## 3. Hosting and distribution

FitDex is configured for Cloudflare Workers Static Assets through `wrangler.jsonc`; the Worker serves the built application and its static assets. It is not a user-data backend: workout and food records remain in local Dexie/IndexedDB. R2 is not configured.

Planned distribution:

- Web/PWA
- Android APK downloadable directly from the FitDex website
- Optional Google Play distribution, not a requirement
- PWA-first distribution on iPhone

Core fitness data does not require a backend database.

## 4. Data ownership and portability

User fitness data is stored locally on the device through IndexedDB and Dexie. GitHub stores source code only. FitDex does not provide cloud sync.

Users can create a portable `.fitdex` backup and restore it on another device from Settings → Data & Storage. The browser downloads one JSON-based file; the user chooses where to keep or share it. A full V1 restore validates first and then replaces, rather than merges with, the current user-owned state.

Portable backups must preserve:

- Workouts, sets, routines, exercise metadata, and cardio
- Foods, meals, and nutrition history
- Measurements and PRs
- XP, level, quests, and plan streak
- Journal records
- Settings, appearance, and selected avatar
- Custom tags and categories

Implemented architecture:

- UUID-compatible stable IDs; no auto-increment IDs for user-owned records
- Database schema versioning and backup-format versioning
- Explicit compatibility and normalization for supported older database schemas
- Transactional, safe restore
- Optional Back Up Current Data First action before destructive confirmation
- Manual backups only

No cloud sync, backend, upload, encryption, or automatic backup scheduling is implemented. Backup files contain personal FitDex data and must be stored somewhere the user trusts. The exact V1 format and store boundary are documented in section 35.

## 5. Current database foundation

The Dexie foundation includes typed tables or models for at least:

- Settings
- Exercises, exercise preferences, and custom tags/categories
- Workout routines, workouts, workout exercises, and workout sets
- Cardio sessions
- Foods, daily nutrition/meals, and food entries
- Body measurements
- Achievements, quests, and XP history
- Journal/day records

Workout and Food business logic is implemented; other foundation models remain future-facing.

## 6. Main navigation

Approved primary navigation:

| Section | Icon |
| --- | --- |
| Home | House |
| Workout | Dumbbell |
| Food | Utensils |
| Progress | Increasing chart |
| Journal | Notebook |

Settings uses a gear and is accessed separately from the app header/settings control. Mobile uses bottom navigation; desktop uses a compact sidebar.

## 7. Visual design direction

FitDex is not a generic modern SaaS fitness app. Its approved language combines pixel-game influence, pixel sprites, crisp outlined panels, restrained pixel borders, game-like selection states, retro headings, readable modern body text, XP bars, structured fitness cards, and mobile-first usability.

Avoid copying Codédex, Pokémon, or Pokédex; fantasy scenery; excessive ornament; neon overload; large fantasy illustrations; excessive badges or trophies; and unapproved game systems. RPG styling is a visual and motivational layer over real fitness data.

## 8. Theme architecture

Theme family and brightness are independent settings:

- Family: Spartans or Amazonians
- Brightness: System, Light, or Dark
- Default: Spartans + System

System follows `prefers-color-scheme`. Both families are available to everyone. Four distinct token sets exist: Spartans Dark, Spartans Light, Amazonians Dark, and Amazonians Light. Light themes are not inverted dark themes; each family retains its identity at both brightness levels.

## 9. Spartans color system

**Spartans Dark:** near-black graphite background; black-steel/charcoal surfaces; petrol teal primary; muted forest or racing green secondary; steel/slate borders; antique bronze or muted gold XP accents; cool off-white text.

Overall feel: black iron + steel + petrol teal + green + bronze. The theme remains mostly neutral, with teal used as an accent rather than a large-surface flood.

**Spartans Light:** pale stone or soft ivory-grey background; light steel and cream surfaces; slate borders; deep petrol teal primary; muted green secondary; bronze/ochre XP; graphite text. It must remain unmistakably Spartan rather than becoming a generic white application.

## 10. Amazonians color system

**Amazonians Dark:** near-black charcoal/aubergine background; dark plum-charcoal surfaces; deep amethyst/plum primary; muted wine/berry secondary; copper or rose-bronze warm accents; warm gold XP; warm off-white text.

Overall feel: charcoal + aubergine + plum + amethyst + wine + copper. Avoid pink or magenta flooding.

**Amazonians Light:** warm ivory/off-white background; pale mauve-grey and warm-neutral surfaces; muted plum-grey borders; deep plum/amethyst primary; wine/berry secondary; copper/terracotta accents; amber/warm gold XP; dark plum-charcoal text.

## 11. Shared color rules

Approximate visual distribution:

- 70–80% neutral foundation
- 15–20% faction identity color
- 5–10% bronze, gold, or copper special accents

XP and rewards share a gold/bronze language across factions. Ordinary progress uses petrol teal for Spartans and plum/amethyst for Amazonians. Generic shared light or dark tokens must not erase faction differences.

## 12. Avatar system

Avatars are cosmetic personality identities. Their weapon is cosmetic, and avatar selection never changes workout programming. The archetype is the visible identity label; the tagline appears when an avatar is selected or tapped.

### Spartans

- **Aster — The Athlete:** “Move fast. Train hard. Stay versatile.” Bow & Arrow; no hood; Spartan armor/cape.
- **Leonidas — The Leader:** “Lead with discipline. Finish what you start.” Spear & Shield.
- **Brasidas — The Competitor:** “Chase the next challenge. Beat yesterday.” Sword & Shield.

### Amazonians

- **Artemis — The Explorer:** “Keep moving. Try more. Find what drives you.” Bow & Arrow; hooded Amazonian sprite.
- **Athena — The Strategist:** “Train with purpose. Track every move.” Sword & Shield.
- **Hippolyta — The Powerhouse:** “Build strength. Own the challenge.” Spear & Shield.

## 13. Avatar assets and portrait behavior

All six real PNG assets were supplied manually and currently exist:

```text
public/avatars/spartans/aster.png
public/avatars/spartans/leonidas.png
public/avatars/spartans/brasidas.png
public/avatars/amazonians/artemis.png
public/avatars/amazonians/athena.png
public/avatars/amazonians/hippolyta.png
```

Do not rename them without updating avatar configuration. `AvatarPortrait` behavior is:

- Loading: dimensionally stable neutral container
- Loaded: real PNG only
- Error: existing Art Pending fallback

The fallback must never render underneath transparent portions of a successfully loaded PNG.

The six source portraits were reduced from 1024 × 1536 RGBA PNGs (about 11 MB total) to 384 × 576 PNGs (about 1.6 MB total), still comfortably above their largest rendered size. The selected above-the-fold Home portrait is the only priority image: it loads eagerly with high fetch priority and explicit dimensions, while selector portraits remain lazy. The original delay was caused by multi-megabyte transfer/decode work combined with lazy-loading an above-the-fold image. No PWA rule change was required because the existing Workbox PNG glob already precaches all six portraits; exercise MP4s remain excluded.

## 14. Gamification scope

Gamification V1 is implemented with an idempotent XP ledger, 100 Levels, nine ranks, historical plan snapshots, Plan Streak protection, and 52 permanent Achievements. Rest Days preserve continuity but do not increase the numerical streak.

Do not add pets, animal companions, monsters, battles, inventory, fantasy currency, maps, collectible creatures, leaderboards, or social feeds without explicit approval.

## 15. Home screen direction

Home Dashboard V1 is implemented as an honest, derived overview of existing local facts. Its compact hero shows the selected avatar, archetype, local-date-aware greeting, and date. An optional editable Display Name is stored in the existing Settings record and updates the greeting reactively; it is trimmed, Unicode-safe, limited to 30 characters, clearable, local-only, and requires neither an account nor a schema migration.

Dashboard sections are Today's Workout, Nutrition Today, Today's Activity, Recent Progress, and Quick Access. Workout state distinguishes an active resumable session, one or more completed sessions today, and a truthful empty state; direct actions enter Resume, Start Workout, or Exercise Dex through the existing Workout flow. Nutrition is derived from today's `FoodLogEntry` snapshots and shows calories, protein, and fixed four-meal logged/empty markers. Activity summarizes completed workouts, persisted training duration, logged food count, and protein. Recent Progress reuses the established PR rules and unit conversion, plus completed-workout count and training volume for the inclusive last seven local calendar days. Quick Access links to Exercise Dex, Journal, Progress, and Food.

Home creates no mutable analytics summary or PR rows. Its repository composes existing facts with the gamification event/snapshot repositories, so historical snapshots remain authoritative on Dexie schema version 7. A fully empty database produces explicit zero/empty states without seeded examples. Do not display fantasy combat statistics such as HP, STR, ATK, DEF, or Mana.

## 16. Workout system

Implemented functionality includes reusable routines, starting or resuming an active workout, previous-performance references beside matching exercises, all supported tracking modes, set editing, exercise replacement/reordering, a 90-second rest timer, and session notes. Active workouts are vertically scrollable with large phone-friendly controls and autosave locally as work progresses.

Completed-workout snapshots preserve the routine details and exercise identities used at the time of completion. Warm-up, drop, and failure-set metadata plus advanced exercise/set notes remain future extensions.

## 17. Exercise Dex

Exercise Dex is one universal library for everyone. There is no male/female classification, beginner/pro split, or duplication by user type. It is a Workout sub-view; the five primary navigation destinations remain unchanged.

Standalone Exercise Dex provides All/Favorites scope plus row and detail star controls. Favorites are local stable exercise IDs stored in the existing `exercisePreferences` records (`favourite: boolean`), preserving notes/tags and leaving Settings untouched; unknown or retired IDs are ignored safely when resolving the current catalog. Favorites search reuses the normalized catalog search. Contextual routine/workout pickers intentionally omit favorites and instead show only their target-specific Add/Added state. This adds no store or migration and keeps Dexie at version 6.

The current SmartWorkout-derived built-in catalog is dataset version 4 with **804 active canonical exercises** and 805 deduplicated category memberships. The active categories are Chest, Back, Shoulders, Legs, Gluteal, Biceps, Triceps, Forearms, and Abs; desktop/tablet uses the approved 3 × 3 card grid, with two columns on phones and one only on very narrow screens.

The data-driven membership counts are Chest 99, Back 100, Shoulders 107, Legs 190, Gluteal 55, Biceps 54, Triceps 67, Forearms 29, and Abs 104. `split-squat-front-foot-elevated` retains both Legs and Gluteal memberships, accounting for the one extra membership.

The model supports authoritative multi-category membership, stable SmartWorkout source slug/page/record IDs, source media status, reliable equipment options, FitDex tracking type/movement pattern, and historical category compatibility. Built-ins use stable canonical IDs while preserving compatibility with any older custom-exercise records.

Canonical built-in data and user state are deliberately separate. Favourites, personal notes, and custom-tag links live in `exercisePreferences`, so future canonical updates do not erase them. The current UI exposes a small persistent favourite control; a custom-exercise creator is not part of the supported product direction.

Search is local, instant, case-insensitive, whitespace-trimmed, and diacritic-normalized across names, aliases, categories, muscles, and equipment. Normalization supports common variants such as `pushup`/`push up`/`push-up` and `onearm`/`one arm`/`one-arm` in both the Dex and exercise pickers. Category counts are derived from loaded records. Muscle-category cards resolve lightweight theme-specific PNG sprites (Spartan and Amazonian, dark and light) and do not load exercise videos.

### Phase 1B catalog audit

The Phase 1B Exercise Catalog Audit is complete. `EXERCISE_CATALOG.md` is the master inventory and research file for included exercises, classification findings, aliases, exclusions, and expansion candidates. External exercise libraries were used only to discover and cross-check names, equipment, and classifications; no third-party prose or media was copied.

At the Phase 1B checkpoint the shipped dataset remained at 198 built-in exercises, version 1; research candidates were not automatically added.

### Phase 1C catalog resolution

Phase 1C resolved the seven existing-dataset findings and all 18 yellow candidates in `EXERCISE_CATALOG.md`. Its intermediate plan contained 62 canonical additions and 17 alias additions; Phase 1E supersedes that checkpoint.

### Phase 1D catalog-completeness research

Comprehensive resistance, cardio, conditioning, and mobility research produced a 407-record research-complete baseline: 198 existing records plus 209 candidates. The cardio modality and future tracking-field audit are documented in `EXERCISE_CATALOG.md`.

### Phase 1E final dataset integration

Phase 1E is complete. Eight lower-priority candidates were deliberately excluded from the 407-record research baseline, and 201 additions were integrated into built-in dataset version 2 for a final curated baseline of **399 exercises**: Chest 39, Back 47, Shoulders 33, Arms 48, Legs 71, Core 41, Full Body 39, Cardio 47, and Mobility 34.

The 91 approved aliases and seven existing-record corrections are integrated. Power Clean is a distinct canonical exercise; Dragon Flag is a canonical advanced Core exercise using reps-only tracking and the Isometric movement pattern. Equipment now includes Back Extension Bench, Trap Bar, Rings, Sandbag, and GHD. Movement-pattern taxonomy adds Isometric, Olympic Lift / Explosive, and Crawl. Cardio records expose a compact supported-metrics list while retaining one canonical record per modality and optional-distance indoor-bike tracking.

Dataset version 2 refreshes deterministic built-in metadata and adds missing built-ins without touching custom exercises or the separate favourites, personal notes, and custom-tag preference records. The validator and catalog audit enforce the 399-record category totals, 91 aliases, required canonical records, excluded-eight absence, and collision-free source state. At this Phase 1E checkpoint, exercise sprites, advanced custom-exercise UX, and workout logging were future work.

### Phase 1F historical content research

Phase 1F researched three 40-record written-content batches and a small set of external destinations across NASM, Catalyst Athletics, and MuscleWiki. Those counts are retained only as historical context; the mixed external-link approach is no longer the active content workflow.

### Phase 1G SmartWorkout exercise-media pilot

`EXERCISE_CONTENT_TRACKER.md` is now the authoritative checker for the SmartWorkout-first exercise-media migration. The first pilot integrates exactly 10 canonical exercises with locally stored SmartWorkout demonstrations, concise FitDex-authored instructions, and FitDex-authored “How it helps” copy. Media type is detected from each exact exercise page rather than assumed globally; FitDex supports MP4, GIF, and animated WebP sources.

All 10 current pilot pages expose HTML video elements with MP4 sources, so the pilot stores those actual MP4 assets without converting them to GIF. Exercise Detail renders MP4 through a lightweight muted, autoplaying, inline, looping video without visible controls; GIF or animated WebP is rendered as an image if encountered later. The text “Video not supported” inside a source page's video element is browser fallback text, not evidence that media is unavailable. If valid media is absent, the media area is omitted; exercises without content retain the existing metadata-only detail view.

The canonical dataset remains unchanged at 399 built-ins and dataset version 2. The remaining 389 exercises are deferred until this pilot is approved.

### Phase 1G SmartWorkout bulk Batch 1

Bulk Batch 1 processed the next 65 canonical exercises in dataset order, bringing the SmartWorkout research/content total to 75 records. Fifty-two Batch 1 records have verified local MP4 demonstrations; 13 have FitDex-authored written content without media because no exact or sufficiently equivalent SmartWorkout match was found. The tracker records those skipped mappings for later user review without changing the 399-record canonical library.

Exercise media remains local development storage under `public/exercises`, outside the JavaScript and CSS bundles and excluded from PWA precaching. After all 399 records are migrated and audited, the planned next architecture step is Cloudflare-hosted, on-demand media; that migration is not part of this phase.

### Phase 1G SmartWorkout bulk Batch 2

Bulk Batch 2 processed the next 65 canonical exercises, from Machine Preacher Curl through Hanging Leg Raise, bringing the running SmartWorkout research/content total to 140. Fifty-one records have verified local MP4 demonstrations; 13 have no exact or sufficiently equivalent SmartWorkout mapping and one has a confirmed page whose published MP4 source returns 404, so those 14 remain written-content-only without fabricated media.

The local development library now contains 113 verified MP4 files (85,158,588 bytes). Media remains outside JS/CSS bundles and PWA precaching; Cloudflare-hosted on-demand media remains the planned post-audit migration. The canonical library remains 399 records at dataset version 2; the next 259 records are deferred to later bulk batches.

### Phase 1G SmartWorkout bulk Batch 3

Bulk Batch 3 processed 65 canonical records, from Hanging Knee Raise through Archer Push-Up, bringing content coverage to 205. Twenty verified SmartWorkout MP4 demonstrations were added; records without a page-verified Exact or defensible Equivalent mapping retain FitDex-authored written content only. The canonical library remains unchanged, media remains excluded from PWA precaching, and Cloudflare-hosted on-demand media remains a future migration.

### Phase 1G SmartWorkout bulk Batch 4

Bulk Batch 4 processed 65 canonical records, from Decline Machine Press through Farmer Hold, bringing coverage to 270 of 399. Thirty-one verified MP4 demonstrations were added; No-Match and Variation-only records remain canonical with written content and pending user review rather than being removed or assigned weak media. Local development media totals 164 MP4s (131,292,640 bytes), remains outside PWA precaching, and will move to Cloudflare only after the full migration audit.

### Phase 1G SmartWorkout bulk Batch 5

Bulk Batch 5 adds 65 canonical written-content records, from Kettlebell Goblet Squat through Barbell Clean and Press, taking coverage to 335 of 399. Twenty-five page-verified SmartWorkout MP4 demonstrations were added; the remaining 40 are logged as No Match, remain canonical, and retain written content without forced media mappings. Canonical data remains unchanged and exercise media remains outside PWA precaching pending the future Cloudflare on-demand migration.

### Phase 1G SmartWorkout bulk Batch 6

Bulk Batch 6 adds written content coverage for the final 64 canonical exercises, bringing the centralized content layer to 399 of 399. No unverified media is attached; the remaining media gaps remain canonical, written-content-only, outside PWA precaching, and eligible for a later SmartWorkout media-gap audit before the planned Cloudflare on-demand migration.

### Phase 1H full content and media audit

The final audit confirms 399 unique canonical records and 399 unique content records. The active library has 186 verified MP4 demonstrations totaling 153,166,551 bytes, with no missing, duplicate-path, duplicate-source, or orphan media files. The 213 written-content-only records reconcile as 207 No Match, five Variation-only, and one valid Exact match whose declared MP4 returns HTTP 404. No GIF or animated WebP is currently active.

Later-batch boilerplate was replaced with canonical-metadata-aware copy covering equipment, movement pattern, and category-specific value. Exercise media remains static, excluded from PWA precaching, and loaded only by Exercise Detail. The consolidated media-gap review in `EXERCISE_CONTENT_TRACKER.md` is the authority for future user decisions; no canonical removal occurred. Cloudflare migration remains deferred until explicitly scheduled.

### Phase 1I SmartWorkout-aligned canonical rebuild

At the Phase 1I checkpoint, the legacy 399-record v2 catalog was superseded by 813 unique SmartWorkout page identities, 813 FitDex content records, and 804 verified MP4 demonstrations totaling 695,871,888 bytes; nine SmartWorkout pages provided no media element, and no declared source asset failed. Media stayed in `public/exercises/`, outside the JS/CSS bundles and PWA precache, and loaded only in the selected Exercise Detail. Cloudflare was not implemented and remained the planned later on-demand host.

All 399 legacy IDs have deterministic migration decisions: 257 map to a v3 successor and 142 retire without a high-confidence successor. The prior 213 non-media records reconcile as 71 mapped and 142 retired; every former media-backed record has a successor. Dexie/database and built-in dataset version 3 remap preferences and workout references, preserve old workout display snapshots, archive unmapped built-ins, deactivate obsolete favourites without deleting notes/tags, and leave custom exercises unchanged. `EXERCISE_CATALOG.md` documents the architecture; `EXERCISE_CONTENT_TRACKER.md` owns the exact active inventory and migration tables.

### Phase 1I.1 demonstrated-media requirement

Phase 1I.1 retires the nine SmartWorkout pages that provide no usable demonstration media. Dataset/database version 4 has 804 active built-ins, 804 content records, and 804 verified MP4 demonstrations; every active built-in now has verified media. Category memberships were recalculated, while the remaining page-slug IDs are unchanged. The v4 seed archives retired records, keeps workout history displayable through snapshots, deactivates retired active references safely, and leaves custom exercises unchanged. Exercise media remains outside PWA precaching and Cloudflare remains deferred.

### Phase 1K.1 local Workout Hub and routines

The Workout tab is now a functional local-first hub ordered as Today / Start Workout, Your Routines, Exercise Library, and Recent Workouts. Users can create, rename, reorder, edit planned sets, and delete routine templates; the existing Exercise Dex is reused for contextual routine picking and Exercise Detail can add an exercise directly to a routine. Built-ins use the supported stable-ID reference path; compatibility for historical custom-exercise records remains non-destructive. Duplicate exercise IDs are prevented within a routine, and no fake routines or workout history are seeded.

The built-in exercise dataset remains version 4 with 804 records. Dexie schema version 5 adds ordered `routineExercises` and snapshot/query fields on the existing workout-session tables. A routine is an editable template; a completed workout is an independent historical snapshot whose name, exercise order, tracking mode, and set/activity values must never change when its source routine is edited or deleted. Routines and active/completed sessions remain device-local and are included in `.fitdex` backups with routine exercises, session exercises, set logs, and cardio.

### Phase 1K.2 active workout logging and history

Active workouts now persist incrementally in the existing Dexie v5 `workouts`, `workoutExercises`, and `workoutSets` stores. FitDex permits one active session at a time, supports routine-derived snapshot sessions and empty/ad-hoc sessions, restores elapsed time from persisted timing state, and autosaves names, notes, exercise order, tracking-mode-specific values, derived logged-set compatibility state, and structural changes. Routine edits never rewrite an active or completed session.

Previous performance is matched by stable exercise ID and selects only the newest completed prior session; active and discarded sessions are ignored. Legacy completed workouts may retain incomplete rows and historical `completed` flags and remain readable without migration or rewriting. New finalization rules are stricter: every remaining exercise must contain at least one set row, every remaining row must be valid for its tracking type, and at least one logged set must exist overall. Users must fill or delete empty/incomplete rows and fill or remove empty exercises before saving. Discarded records retain `discarded` status but never appear in Recent Workouts or previous performance. Completed detail renders entirely from workout/exercise snapshots and raw set facts, so routine deletion, exercise renaming, or future retirement cannot erase history. Historical custom-exercise records remain readable through the same compatibility path. `.fitdex` backup includes all five workout/routine stores; Journal and Progress/PRs derive again from the restored facts. RPE and calorie estimation remain intentionally deferred.

### Workout timer and interaction correctness milestone

The active `Workout` record owns a persisted running/paused timer lifecycle without a new store or schema bump. New sessions store `timerState`, `accumulatedActiveSeconds`, and `lastResumedAt`; legacy active records with those optional fields missing remain compatible and are treated as running from `startedAt`. While running, displayed duration is the banked active seconds plus whole seconds since the last resume. Pausing banks that duration and freezes it; resuming starts a new running interval; finishing from either state persists the final active-only value to immutable `durationSeconds`. Starting Finish from a running workout banks a candidate duration before draft flush, validation, and confirmation. Invalid Finish resumes the originally running timer; canceling a valid confirmation also resumes from the cancellation time, excluding time spent in the Finish dialog. An originally paused workout stays paused through invalid or canceled Finish. No timer tick is written to IndexedDB—only start, pause, resume, and finish transitions persist. A running session includes background/device-lock wall time, while an explicitly paused session remains frozen across navigation, refresh, or PWA restart.

The rest countdown remains an independent in-memory control and continues under its existing behavior when the workout timer is paused. Because set logging no longer has a Complete button, each logged row exposes a separate explicit Rest action; merely typing through a valid state never starts or restarts the countdown. Home labels a paused session truthfully and opens the same active workout. Journal and Progress continue to consume completed `durationSeconds` snapshots only, so excluded pause time naturally carries into historical summaries and analytics.

Active set inputs use controlled local drafts with the existing save-on-blur persistence boundary. One tracking-aware helper classifies each row as empty, incomplete, or logged. All required valid data means logged automatically: weight plus reps for `weight_reps`, reps for bodyweight/reps-only, assistance plus reps for assisted bodyweight, duration for duration and optional-distance duration, distance plus duration, weight plus distance, or duration plus reps as appropriate. Counters derive from current drafts, so they update immediately when required values become valid or are cleared. Repository autosave mirrors this derived result into the retained legacy `completed` field for index/history compatibility; it is no longer a user-controlled completion action. Finish flushes current drafts before repository validation. Routine templates remain plans and are not subject to active-workout finalization validation. Previous performance still reads only prior completed sessions.

Active logging uses compact set cards: set number and previous performance share the header, compatible metric fields stay side-by-side at normal phone widths and stack at the 320 px robustness floor, and `Logged` / `Incomplete` / `Empty` appears in the same bottom strip as the explicit Rest and accessible icon-only Delete actions. Rest remains user-triggered and is never started merely by entering valid values. Exercise headers and reorder/remove controls retain their semantics, while the reduced sticky Finish/Discard bar and matching safe-area/navigation clearance let the final set scroll fully above all fixed actions.

Completed workout history can be permanently deleted from Recent Workouts or Completed Workout Detail only after an accessible irreversible-action confirmation. `deleteCompletedWorkout` rejects active or discarded sessions and uses one Dexie transaction over `workouts`, `workoutExercises`, and `workoutSets`: it resolves exercise snapshots through the existing `workoutId` index, resolves sets through their existing `workoutExerciseId` index, and removes exactly that completed session and its owned snapshots. The source routine, routine items, Exercise Dex definitions, Food history, other completed sessions, and an active session remain untouched. No store, index, migration, or cached history was added; schema remains v6. Home, Journal, Progress, Personal Records and their exercise count, and previous-performance lookup all query the remaining source snapshots, so deletion naturally recalculates them and the next-best PR or next-most-recent performance becomes visible.

Contextual Exercise Dex pickers persist a reversible `+ Add` / `✓ Added` toggle through the target repository. Routine removal changes only the template. Active-workout removal deletes only that session's exercise snapshot and owned sets; untouched empty rows may be removed immediately, while any incomplete or logged set (as determined by the shared tracking-aware classifier) requires a fixed accessible confirmation. Only after a successful write and target refresh does the row derive its next state from current routine/workout contents, so failures retain the truthful state and reopening reconstructs it. Standalone Exercise Dex has no Added state. A sticky contextual Back/Done bar preserves the routine/workout return path, while Workout Hub library navigation, routine Add Exercise, and active-workout Pause/Resume plus Add Exercise are available near the top. The sticky finish/discard bar and scroll content share safe-area/navigation height variables, with explicit bottom clearance so the final controls can scroll fully above it.

### Recurring Weekly Plan and connected help

The Workout hub owns one recurring local weekly template with stable Monday-through-Sunday keys. Every day remains explicitly one of `routine` (stable `routineId`), `workout_day`, `rest_day`, or `no_plan`; routines are optional, so a brand-new user can plan open training days and recovery without creating a template. The seven assignments and `weeklyPlanConfigured` remain non-indexed fields on the singleton Settings record and feed the v7 daily commitment snapshots. Missing data defaults to No Plan. Routine names and exercise counts resolve live by ID. Deleting a scheduled routine passes through Plan Commitment protection before clearing affected current-template assignments, while active/completed workouts and historical plan snapshots remain untouched.

Home remains derived from Settings, routines, active/completed workouts, and Food facts. Active workout is the highest-priority Today state. A Routine Day is satisfied only by a completed workout whose persisted source `routineId` matches; a different completed workout is shown as activity while the assigned routine remains pending. A generic Workout Day is satisfied by any completed workout whose local `startedAt` date is today. Rest Day remains planned recovery even when unplanned activity exists, and No Plan remains distinct from both. Cross-midnight workouts belong to their local start day for plan interpretation. Deleting the only matching completion naturally makes the routine pending again. The weekly plan is only a current recurring template: edits do not reconstruct or snapshot historical schedules, and no history, Journal, or Progress records are rewritten.

Workout provides a replayable 12-step How Workouts Work guide and Food provides a replayable 7-step How Food Works guide. Each auto-opens once when its optional Settings flag (`workoutTutorialSeen` or `foodTutorialSeen`) is absent, while page-level Help controls always allow replay. The shared lightweight dialog supplies modal semantics, focused step headings, Escape, Back/Next, Skip/Done, scroll containment, safe areas, and short-landscape behavior without a new dependency. Journal and Progress expose manual one-screen help only: Journal explains its completed-workout/FoodLogEntry-derived read-only model; Progress explains completed-workout and Food analytics, including Resistance Volume as weight × reps workload. Low-data Home explains that Workout and Food entries automatically feed Home, Journal, and Progress. No XP, streak, backup, notification, date override, or cache store is included.

### Phase 2B local-first Food V1

Food is a complete manual, offline nutrition logger with exactly four ordered meal identifiers: `breakfast`, `lunch`, `supper`, and `dinner`. It uses no external food database, nutrition API, barcode lookup, cloud persistence, account, targets, or seeded example entries. Users can browse any local calendar date (`YYYY-MM-DD`), view calculated daily and meal totals, open a meal, add a new or remembered food, edit that historical entry, and delete only that entry. Viewing a date never creates data.

The overview has one derived Nutrition Breakdown card with an accessible Macros/Meals segmented control and a CSS conic-gradient donut backed by a complete text legend. Macros uses only protein × 4, carbohydrates × 4, and fat × 9; entered daily kcal remains separately labeled and is never forced to match the macro-derived total. Meals uses actual `FoodLogEntry.kcal` snapshots in the locked Breakfast/Lunch/Supper/Dinner order and never fabricates missing calories from macros. Empty days and zero-macro days render intentional no-data states. No chart dependency, table, or schema migration is involved.

Dexie schema version 6 retains all v5 and legacy tables and adds three user-owned stores:

- `rememberedFoods`: unique normalized name, display name, category/default-nutrition values, usage count, last-use timestamp, and compact per-meal usage counts.
- `foodLogEntries`: date/meal indexed historical snapshots containing food name, predefined/custom category snapshot, and the eight optional nutrition facts.
- `customFoodCategories`: unique normalized reusable name, fixed accessible color token, and timestamps.

The locked predefined categories are Chicken, Eggs, Meat, Fish & Seafood, Dairy, Grains & Rice, Flour & Wheat, Fruits, Vegetables, Nuts & Seeds, Drinks, Supplements, Desserts / Snacks, Processed Foods, Junk Food, and Other. Flour & Wheat remains separate from Grains & Rice. Other creates a reusable custom category with one of these ten semantic color tokens: `amber`, `coral`, `crimson`, `plum`, `violet`, `blue`, `teal`, `green`, `olive`, or `slate`. One shared token-to-visible-color mapping drives picker swatches, the unsaved live preview, saved category rendering, and applicable historical fallback rendering. Predefined categories use fixed assets; custom categories share the single neutral bowl-style, mask-friendly `/food/categories/category-other.webp` base, dynamically recolored at runtime from the saved token (or neutral fallback when unavailable). Save is not required for the live preview, and saved colors persist across navigation and reload.

Only user-created custom categories are deletable; repository code also rejects predefined IDs. Deleting a custom category atomically deletes its `customFoodCategories` record and mapped remembered-food templates, but never historical `foodLogEntries`. Affected historical logs retain their food name, date, meal, and nutrition facts, become `Uncategorized`, and can be edited to assign a current predefined or custom category. Their historical custom color snapshot may still tint the generic orphan icon; it does not keep the deleted category active.

Food name normalization is Unicode-aware, case-insensitive, punctuation-tolerant, and whitespace-collapsing: examples such as `Chicken Breast`, `chicken breast`, `CHICKEN BREAST`, and `Chicken  Breast` map conservatively to one remembered-food lookup; approximate names are not merged. Empty search shows recent and frequent local foods, deterministically ranked by same-meal usage, recency, and frequency. Selecting one pre-fills its category and defaults, but edits for the current portion affect only the new historical snapshot and never silently rewrite the remembered template. The remembered-food search uses the unified FitDex field pattern: one outer field containing icon, input, and clear action, with outer `:focus-within` treatment and no nested visual borders.

Tracked facts are calories (`kcal`), protein, carbohydrates, fat, fiber, sugar, saturated fat (grams), and sodium (milligrams). Name and category are required; each nutrition value is independently optional. Blank remains unknown/absent, explicit zero remains zero, decimals are accepted, and negative, NaN, or non-finite values are rejected. Totals derive from raw entries and ignore missing facts rather than persisting invented zeros.

`src/utils/localDate.ts` defines local calendar identity for conditional Today status using `getFullYear()`, `getMonth()`, and `getDate()` rather than UTC `toISOString()` conversion. Only the actual local current date receives the Food date status label; previous/next navigation uses local `YYYY-MM-DD` values. The permanent Workout Hub “Today” heading is a separate semantic section title, not a selected-date status.

Journal and Progress now group or aggregate these date/meal indexed facts without changing the schema. `.fitdex` backup/restore includes all three Food V1 stores and the retained legacy nutrition tables. Food pixel assets live under `public/food/` and resolve from `/food/meals/meal-{meal}.webp` and `/food/categories/category-{categoryId}.webp`; custom categories use the CSS-masked Other base above. Accessible Lucide fallbacks remain available; no emoji or scraped artwork ships.

### Android/WebView local-ID compatibility

Persistent local records now use the shared `createId()` utility. It prefers `globalThis.crypto.randomUUID()` and falls back offline to an RFC 4122 UUID v4 built with `globalThis.crypto.getRandomValues()` when Android/WebView environments do not expose `randomUUID()`. Existing stored IDs and canonical built-in IDs are unchanged through Dexie schema v6; no `Math.random()` fallback is used.

### Current Exercise Dex and workout milestone snapshot

The active Exercise Dex is built-in dataset version 4: 804 stable canonical IDs, 804 verified local MP4 demonstrations, and complete FitDex-authored How to Perform/How it Helps content. Category memberships total 805 because `split-squat-front-foot-elevated` belongs to both Legs and Gluteal: Chest 99, Back 100, Shoulders 107, Legs 190, Gluteal 55, Biceps 54, Triceps 67, Forearms 29, and Abs 104. Normalized search supports punctuation/spacing variants such as `pushup`/`push up`/`push-up` and `onearm`/`one arm`/`one-arm`; the Exercise Dex remains the shared browser and picker engine.

Demonstrations stay under `public/exercises/`, load only in Exercise Detail, and are excluded from PWA precaching. The dynamic category-sprite system has nine sprites in each Spartan Dark, Spartan Light, Amazonian Dark, and Amazonian Light set under `public/exercise-categories/`. The app is deployed through Cloudflare Workers Static Assets; R2 is not configured, and any separate media-hosting decision remains future work.

The Workout tab is the parent hub for Today (Start/Resume), Your Routines, Exercise Library, and Recent Workouts. Local schema v5 tables are `workoutRoutines`, `routineExercises`, `workouts`, `workoutExercises`, and `workoutSets`; there is no cloud database, account requirement, or workout sync. Routine items default to three planned sets (1–20 allowed), preserve an exercise-name snapshot and deterministic order, and reject duplicate exercise IDs. Canonical values are kilograms, kilometres, and seconds, with existing `settings.units` controlling kg/lb and km/mi display/input conversion. A lightweight 90-second rest timer is resettable/skippable; session notes are supported, while RPE/RIR, calorie estimation, and advanced exercise/set notes remain deferred.

## 18. Exercise-library direction and organization

FitDex’s supported exercise library is the 804 built-in Exercise Dex. Existing compatibility structures for older custom-exercise records remain non-destructive, but the product direction does not promote a custom-exercise creation workflow. Personal favourites, notes, and custom tags remain separate user-owned organization data.

These concepts remain separate:

- Muscle supports analytics
- Equipment supports filtering
- Personal tags support organization

## 19. Exercise tracking types

Implemented tracking types:

- `weight_reps` — Chest Press
- `bodyweight_reps` — Push-up
- `assisted_bodyweight` — Assisted Pull-Up
- `reps_only`
- `duration` — Plank
- `distance_duration` — Running
- `duration_optional_distance`
- `weight_distance` — Farmer Carry
- `duration_reps`

Supported equipment values are Barbell, Dumbbell, EZ Bar, Cable, Machine, Smith Machine, Bodyweight, Pull-Up Bar, Bench, Resistance Band, Kettlebell, Medicine Ball, Suspension Trainer, Weight Plate, Landmine, Sled, Battle Rope, Cardio Machine, and Other.

Optional movement-pattern metadata supports Horizontal Push, Vertical Push, Horizontal Pull, Vertical Pull, Squat, Hinge, Lunge, Carry, Rotation, Anti-Rotation, Flexion, Extension, Abduction, Adduction, Locomotion, Conditioning, and Mobility. Movement patterns are not a beginner-facing navigation requirement.

## 20. Cardio

Cardio is a core system, not an afterthought. The initial Exercise Dex includes running, walking, cycling, rowing, machine, and conditioning subtypes with duration- and distance-aware tracking rather than Weight + Reps. Future expansion can include additional outdoor, machine, aquatic, combat-sport, and conditioning activities.

Possible fields include duration, distance, pace, speed, incline, resistance, calories, and heart rate.

## 21. Nutrition

Food / Nutrition V1 is implemented as a manual local logger; the detailed source of truth is the Food V1 section above. Its fixed meal structure is Breakfast, Lunch, Supper, and Dinner, and it supports calories, protein, carbohydrates, fat, fiber, sugar, saturated fat, and sodium as individually optional values. Remembered foods, recent/frequent suggestions, fast manual entry, date navigation, and totals are implemented locally. External nutrition lookup, barcode scanning, cloud food sync, targets, cholesterol, and micronutrients are not implemented.

## 22. Progress

Progress + Personal Records V1 is implemented as a derived analytics layer over completed `Workout` / `WorkoutExercise` / `WorkoutSet` snapshots and `FoodLogEntry` snapshots. It creates no Progress or PR records, never rewrites history, and leaves Dexie at schema version 6. The repository fetches completed sessions, bulk-loads their exercise and set snapshots, and aggregates in memory without per-exercise IndexedDB queries. Active workouts, discarded workouts, routines, and incomplete sets never contribute.

Dashboard period filters are 7D, 30D, 90D, and All. Finite windows use inclusive local calendar dates ending today (today plus the prior 6, 29, or 89 local days), with equal-length immediately preceding windows for volume comparison. Seven-day charts use daily buckets, 30D uses six five-day buckets, 90D uses consecutive seven-day buckets with a final partial bucket, and All uses calendar months spanning the available source data. Charts are lightweight CSS bars backed by accessible text; no chart dependency or smoothing is used.

Overview workout count means completed sessions, including multiple sessions on one day. Training time sums persisted `durationSeconds`. Resistance volume sums `weight × reps` only for completed `weight_reps` sets with valid stored values. Current and previous period volume compare as a percentage; a zero previous total reports no previous volume, and All omits comparison. Canonical kg values remain unchanged, while the shared unit utility converts displayed weight/volume to lb and distance to mi for imperial settings.

Progress labels this metric Resistance Volume and explains it as “Total weight × reps across logged resistance sets.” It remains a workload/tonnage measure, not calories burned or a universal training-quality score.

PR identity is stable exercise ID, and the overview PR count means exercises with at least one valid all-time metric. Snapshot names keep retired or deleted exercises readable; current catalog aliases supplement full-view search when available. Preview records are sorted by the most recently achieved winning metric. Exact value ties prefer the latest completed occurrence, with metric-specific secondary rules where stated.

PR rules are explicit by tracking type:

- `weight_reps`: heaviest weight (ties prefer more reps), best reps at that heaviest weight, and best single-set `weight × reps` volume. Estimated 1RM is intentionally excluded.
- `bodyweight_reps` and `reps_only`: highest reps, without invented body weight.
- `assisted_bodyweight`: highest reps plus lowest assistance among sets achieving the best reps; more assistance is never treated as stronger.
- `duration`: longest duration.
- `distance_duration`: longest distance and longest duration; no pace record.
- `duration_optional_distance`: longest duration and longest present distance; missing distance is ignored.
- `weight_distance`: heaviest weight and longest distance as separate records.
- `duration_reps`: longest duration and highest reps as separate records.

Nutrition averages are calories and protein divided by days containing at least one `FoodLogEntry`, not by every calendar day in the selected period. Missing nutrient fields contribute nothing to that nutrient total, while the entry still makes its date a logged-food day. The nutrition chart shows average calories per logged day in each period bucket. Targets, compliance states, body measurements, body-fat estimates, AI recommendations, goals, estimated 1RM, XP, streaks, and social comparison remain outside V1.

## 23. Journal and history

Journal V1 is implemented as a derived, read-oriented daily history view. It queries completed `Workout` rows by the selected local completion day and reads `FoodLogEntry` rows by their indexed `YYYY-MM-DD` date; it does not create Journal copies or use the retained legacy `journalRecords` table. Dexie remains schema version 6.

The page provides previous/next local-calendar-day navigation, a `Today` badge only for the actual current local date, and daily summaries for completed-session count, persisted workout duration, calories, and protein. Multiple completed workouts on one day are supported. Workout cards use the persisted session name, duration, and workout-exercise snapshot count, and `View Workout` reuses the existing completed-workout detail component.

Food history is rendered in the fixed Breakfast, Lunch, Supper, Dinner order. Every meal remains visible, including subdued `No entries` states, and non-empty meals show food-name snapshots plus calorie/protein totals calculated from `FoodLogEntry` snapshot values. Deleted custom-category entries remain readable as Uncategorized without resolving the deleted category record. Food rows are read-only in Journal V1 because Food currently has no app-level route to a specific entry; editing remains in Food.

An entirely empty day shows honest zero summaries and an explicit no-activity state; food-only and workout-only days render their available source normally. The page uses existing theme tokens, panels, Food category/meal icon renderers, semantic controls, and responsive layouts. Manual notes, mood, photos, charts, measurements, PRs, XP, streaks, and derived day-state classifications remain future scope.

## 24. Tutorial and onboarding

The tutorial is first-run, skippable, locally persisted, and replayable through Settings > Help. Current concepts are Welcome to FitDex, Workout Dex, Track Your Fuel, Level Up, Progress, Your Data—Your Device, Backup & Restore, Choose Your Style, Choose Your Champion, and Ready. Keep onboarding concise.

## 25. Settings

Planned/current sections:

- Profile / Avatar
- Appearance
- Units
- Workout Preferences
- Nutrition
- Gamification
- Data & Storage
- Help
- About FitDex

Profile currently includes avatar selection and an optional editable local Display Name. Display Name is saved into the canonical existing Settings record, preserves all other settings fields, and can be cleared; it is presentation metadata rather than a fitness-history fact.

The stale Exercise Dex Settings placeholder is intentionally absent because Exercise Dex has no meaningful preferences yet. About FitDex uses the established PWA icon, user-facing product/local-first copy, developer credit for Arijit Bhaduri, and the build-time app version sourced from `package.json`.

Data & Storage provides Create Backup and Choose `.fitdex` File actions. Import validation leads to a preview, a separate replace confirmation, an optional Back Up Current Data First action, and a completion summary. The former automatic-backup/frequency/location/retention and generic export placeholders are removed. There is no cloud sync.

## 26. PWA and mobile requirements

- Installable PWA with a service worker and offline app shell

The header does not advertise service-worker readiness during ordinary use. It shows a compact, live `Offline` status only when the browser reports `navigator.onLine === false`, then hides it again on the `online` event; this status does not imply backup or cloud sync.
- Mobile-first, adaptive layouts driven by available logical viewport/window size rather than named devices
- 320 CSS px narrow robustness floor; primary phone optimization range is 360–440 CSS px
- Internal QA width classes: compact below 600, medium 600–839, expanded 840–1199, large 1200–1599, and extra large from 1600
- A small structural breakpoint set is preferred over device-specific rules: narrow-content corrections at 374/479/599, wider content at 700, and desktop sidebar navigation at 980
- Safe-area-aware header, content, bottom navigation, sticky workout actions, dialogs, and onboarding; dynamic viewport height is used where software keyboards and short landscapes matter
- Touch-friendly controls, wrapping long user/content names, contained chart scrolling, landscape-capable installed PWA behavior, and bounded tablet/desktop content widths
- Static responsive contracts supplement—but do not replace—real Android, iOS/Simulator, keyboard, zoom, and representative viewport visual QA
- Future Wake Lock, haptics, and notifications
- Platform-adapter boundaries for future Capacitor integration

## 27. Future Capacitor and Android APK

Planned path:

```text
React/Vite FitDex → Capacitor → Android project → signed APK → FitDex website download
```

The Android package ID must be chosen carefully, the signing key must be preserved securely, and direct distribution will require an APK update mechanism. The PWA and APK should share application code where practical. Capacitor must not be installed yet.

## 28. Completed implementation work

- [x] Vite React TypeScript project created
- [x] Oxlint selected
- [x] Git initialized manually
- [x] Phase 0 application foundation
- [x] Five-section app shell
- [x] Responsive mobile/desktop navigation
- [x] Settings and onboarding foundations
- [x] PWA setup
- [x] Dexie/IndexedDB foundation and typed initial schema
- [x] Stable ID utilities and backup metadata foundation
- [x] `.fitdex` Backup & Restore V1
- [x] Platform-adapter boundaries
- [x] Initial theme system
- [x] Navigation icon correction using Lucide
- [x] Titan/Ember prototype replaced by finalized Spartans/Amazonians system
- [x] All four theme variants refined
- [x] Avatar system, selection UI, and persistence
- [x] Avatar roster finalized
- [x] Six real avatar PNGs added manually
- [x] Transparent-background fallback bug fixed in `AvatarPortrait`
- [x] Universal Exercise Dex browsing, search, category filters, and detail view
- [x] Versioned SmartWorkout-derived built-in dataset with deterministic page-slug IDs
- [x] Separate persistent exercise favourite/user-preference records
- [x] Lightweight built-in dataset integrity validator
- [x] Phase 1B master Exercise Catalog audit and researched expansion backlog
- [x] Read-only catalog grouping/collision audit utility
- [x] Phase 1C catalog-resolution decisions and Phase 1D expansion audit
- [x] Phase 1D comprehensive catalog-completeness and cardio-modality research
- [x] Phase 1E curated 399-exercise dataset version 2 integration
- [x] Phase 1F historical Exercise Content Tracker research (three 40-record batches)
- [x] Phase 1G SmartWorkout exercise-media content pilot (10 records)
- [x] Phase 1G SmartWorkout Bulk Batch 1 and Batch 2 (130 additional records)
- [x] Phase 1G SmartWorkout migration content coverage (399 records)
- [x] Phase 1H full content/media integrity and gap audit
- [x] Phase 1I SmartWorkout-aligned v3 canonical rebuild and legacy-reference migration
- [x] Phase 1I.1 retirement of nine media-less SmartWorkout pages; v4 demonstrated-media catalog
- [x] Phase 1K.1 local Workout Hub, routine CRUD, reusable Exercise Dex picker, and v5 workout schema foundation
- [x] Phase 1K.2 active workout logging, persistent completed workout history, previous-performance lookup, and rest timer
- [x] Tracking-aware automatic set logging, strict clean-workout Finish validation, and captured pause/resume/Finish timing flow
- [x] Android/WebView Web-Crypto UUID v4 fallback for local persistent IDs
- [x] Phase 2B complete local-first Food V1, remembered foods, snapshots, categories, suggestions, and v6 schema
- [x] Journal V1 derived daily history from completed workout and FoodLogEntry snapshots, with no schema change
- [x] Progress + Personal Records V1 derived analytics, period trends, all-time PR rules, and no schema change
- [x] Home Dashboard V1 derived from real Workout, Food, and Progress facts, with direct navigation intents and no schema change
- [x] Optional editable local Display Name in Settings with reactive Home greeting
- [x] Six avatar PNGs resized for their render envelope, with priority Home loading and retained lazy selector loading
- [x] Build, lint, TypeScript, and PWA checks passing

## 29. Current development status

**Current milestone:** Exercise Dex dataset version 4 has 804 SmartWorkout-derived built-ins with verified local MP4 demonstrations and complete written content. Workout Hub, routines, persistent active logging, completed snapshot history, Food V1, Journal V1, Progress + Personal Records V1, Home Dashboard V1, Gamification V1, `.fitdex` Backup & Restore V1, editable local Display Name, optimized avatar delivery, and Android/WebView-compatible local ID generation are complete on Dexie schema version 7.

Likely next work:

1. Final PWA and real-device visual/device QA
2. Final rank and achievement artwork using the documented asset contract
3. Onboarding/settings polish
4. A future decision about separate exercise-media hosting and retired no-media exercises

This list is direction, not completed work.

## 30. Development workflow and Git safety

Codex may edit files and run validation. The user performs staging, commits, and pushes manually. Unless the user explicitly instructs otherwise, Codex must never run Git write operations, including:

- `git add`, `git commit`, or `git push`
- `git reset` or `git checkout`
- `git switch`, `git rebase`, or `git merge`

Read-only commands such as `git status`, `git diff`, and `git diff --check` are allowed.

## 31. Codex model guidance

The usual workflow is Sol + Low for scoped corrections and documentation, Sol + Medium for architecture or refactors, and Sol + High only for genuinely complex work. Avoid unnecessarily expensive reasoning levels.

## 32. Maintaining this document

Update `PROJECT_NOTES.md` whenever there is a meaningful change to architecture, product scope, design direction, database models, a major implementation phase, naming, the avatar roster, backup behavior, distribution strategy, or another significant technical decision.

Do not update it for trivial typo-only changes unless the typo affects this source of truth.

## 33. Gamification V1 architecture

Gamification is a local-first secondary layer over authoritative Workout, Food, Weekly Plan, Exercise Dex, and Progress facts. Dexie v7 adds six forward-only stores without rewriting existing history: `xpEvents` (`&sourceKey`, type, occurredAt), `planDaySnapshots` (`&localDate`, plannedType, result), `streakFreezeEvents` (`&sourceKey`, amount/type/date), `streakPauses` (start/end), `planChangeEvents` (`&sourceKey`, type/effectiveDate), and `achievementUnlocks` (`&achievementId`, unlockedAt). Settings stores only `gamificationInitializedAt`. Level, Rank, Lifetime XP, streak summaries, and live achievement progress remain derived.

### XP, Levels, and Ranks

XP source keys make reconciliation repeat-safe: `workout:<workoutId>`, `pr:<workoutId>:<exerciseId>:<metric>`, and `full-food-log:<localDate>`. Rewards are +30 for the first workout satisfying a planned Routine Day, +30 for the first workout satisfying a generic Workout Day, +20 for an unplanned or additional workout, +15 per genuine distinct PR metric, and +5 for all four meals. Calorie-target and protein-target event hooks remain dormant at +5 because nutrition targets do not yet exist. Deleting later source history never removes earned XP.

XP activates going forward at `gamificationInitializedAt`; older history is not silently back-awarded. Factual achievements may unlock from trustworthy existing history, using detection/initialization time where an exact unlock instant cannot be safely reconstructed. The deterministic 100-entry nonlinear threshold table is centrally generated from audited cumulative anchors: Level 1 = 0, Level 10 = 2,000, Level 25 = 12,000, Level 50 = 27,000, Level 75 = 70,000, and Level 100 = 140,000 XP. Level 100 is the display maximum; Lifetime XP continues.

Rank mapping has no divisions: Recruit 1–6, Regular 7–15, Hardened 16–27, Veteran 28–42, Warrior 43–57, Ascendant 58–72, Immortal 73–87, Legend 88–99, and Radiant 100. Final shared rank artwork is resolved explicitly from the nine files at `/gamification/ranks/<rank>.webp`. The reusable badge component attempts the final asset and falls back without layout shift to semantic CSS/Lucide emblems if an asset is unavailable; there are no temporary raster artworks, theme variants, locked variants, or I/II/III assets.

### Daily commitments and Plan Streak

On activation and every startup/resume reconciliation, FitDex materializes missing local calendar dates from the then-current recurring Weekly Plan. Each snapshot preserves Routine/Workout/Rest/No Plan type, stable routine ID, and routine-name snapshot. Past snapshots are immutable when the recurring plan changes. Reconciliation processes unresolved past dates chronologically; the current day remains Pending. Workout ownership uses local `startedAt`, including cross-midnight sessions.

A matching routine-ID completion or any completion on a generic Workout Day increments Plan Streak. Rest Day, No Plan, Freeze, and Travel/Sickness Pause preserve but do not increment it. A wrong-routine or missed training obligation automatically consumes one available Freeze; with no Freeze, current streak resets to zero. Freeze history is durable. Balance starts at 2, caps at 3, and earns one at each 30-successful-planned-training-day milestone when below cap. Frozen days add no successful day, Workout XP, quest completion, or consistency progress.

Travel/Sickness Pauses are 1–7 inclusive local days, may start today or in the future, and are limited to two uses in a rolling 12-month window rather than a calendar year. The Weekly Plan remains underneath. Paused dates preserve but do not increment streak, consume no Freeze, and award no Workout/Nutrition XP, Daily Quest, or consistency progress. Core correctness never depends on midnight execution or a server.

Weekly Plan is saved as one commitment. Initial setup is free. The first material structural change in a rolling 12-month period records a protected change and retains streak; later material changes require an explicit warning and record a current-streak reset. Changing a day type, routine identity, adding/removing training days, or clearing the plan is material. Routine rename/content/order/set/note edits are not. Deleting a scheduled routine warns and passes through the same protected-change/reset flow. A streak reset never touches XP, Level, Rank, achievements, workout/PR/Food history, or historical plan snapshots.

Daily Quest reuses the same plan-satisfaction rule: the scheduled routine (+30), a generic workout (+30), Recovery Day/no training quest, or Paused. It has no independent mutable progress.

### Achievements and badge assets

The catalog contains exactly 52 permanent, no-XP trophies: Workout 10, Consistency 8, Performance 7, Exercise Dex 6, Nutrition 11, and Progression 10. Exercise Dex milestones are exactly First Exercise, 5/10/25/50 Different Exercises, and All Categories. Unique stable IDs come only from completed workout snapshots and are deduplicated; unknown retired IDs can count uniquely. All Categories requires safely resolved participation across Chest, Back, Shoulders, Legs, Gluteal, Biceps, Triceps, Forearms, and Abs. Nutrition target milestones remain visible and dormant until targets exist; complete nutrition days require Breakfast, Lunch, Supper, and Dinner.

Unlock rows are permanent even when later history deletion lowers dynamic progress. New unlocks are grouped in one notification, and Level/Rank transitions are derived from unseen XP event boundaries so reloads do not repeat them. Home keeps today’s actual workout first, then compact Level/Rank, Plan Streak/Freeze, and optional latest-achievement surfaces. Progress provides Overview, Records, and Achievements navigation, rank journey, recent XP, transparent earning rules, category filters, accessible progress bars, and locked measurable progress. Settings links to the concise gamification guide.

The final 52 achievement WebPs live in `/gamification/achievements/`, alongside the nine rank emblems for 61 shared assets. A single explicit ID-to-filename resolver preserves persistent achievement IDs where they intentionally differ from artwork names (for example, `10-workouts` → `workouts-10.webp`); it is used by Home, Progress, and notifications. Achievement unlock notifications show the achievement badge, rank-up notifications show the rank badge, and level-up notifications use milestone achievement artwork only at Levels 10/25/50/75/100. The same artwork is reused in unlocked and locked states via opacity/grayscale, with generic semantic fallbacks only for missing or unknown assets.

Offline reconciliation and source-key uniqueness make repeated Home loads, database reopens, and catch-up passes idempotent. Existing completed history remains readable; achievement eligibility can derive from it, while XP begins only at activation. Completed-workout deletion recalculates current PRs and derived progress but does not revoke XP or unlocks.

## 34. Nutrition Targets V1

Nutrition Targets are optional local fields on the singleton Settings record, so Dexie remains at schema version 7. They store enabled state, Lose/Maintain/Gain goal, adult age/sex/height/weight/activity inputs, calorie target source, and calorie/protein targets. Food observes the saved settings reactively, rendering Daily Targets whenever targets are enabled with a valid calorie target. Numeric target controls retain empty string drafts while editing and validate only at calculation/save. A stable `nutritionTargetsInitializedAt` plus latest-enable boundary prevents historic Food logs and disabled intervals from being back-awarded; current settings are used when viewing historical Food dates in V1.

V1 deliberately limits targets to Calories and Protein. Carbs, Fat, and Fiber are tracked nutrition content for awareness; Fiber remains optional and is never a target or gamified. There are no carbohydrate, fat, or fiber target inputs, achievement IDs, XP events, or deeper micronutrient targets in V1.

FitDex estimates RMR with Mifflin–St Jeor and maintenance as RMR × activity factor: Sedentary 1.20, Lightly Active 1.375, Moderately Active 1.55, Very Active 1.725, and Extremely Active 1.90. Lose Weight recommends TDEE −500 by default or TDEE −750; Maintain recommends TDEE; Gain recommends TDEE +250. Users can always manually override targets. Calorie needs are estimates, not medical advice.

Daily Targets appears between Food Daily Totals and Nutrition Breakdown when enabled. It evaluates the selected local Food date from authoritative logged kcal/protein totals. Intake below 1,000 kcal never counts. Lose Weight counts only a 0–1,000 kcal estimated deficit, treating 751–1,000 as an eligible outer zone without bonus; deficits over 1,000, intake over target, and below-floor intake do not count. Maintain/Gain use a FitDex ±10% adherence band. Protein meets its target at or above the chosen grams with no penalty for exceeding it. Eligible dates award one idempotent +5 calorie and/or +5 protein event, never a multiplier; paused dates receive neither. The six existing target achievements now count those ledger events.

## 35. `.fitdex` Backup & Restore V1

The portable format is UTF-8 JSON saved with a `.fitdex` extension and custom `application/x-fitdex-backup` MIME type. V1 uses the exact top-level fields `format: "fitdex-backup"`, `formatVersion: 1`, build-time `appVersion`, `databaseSchemaVersion`, ISO `createdAt`, and `data`. Filenames use `fitdex-backup-YYYY-MM-DD-HHmm.fitdex`. A Blob/object URL and temporary download anchor provide a local browser/PWA download; the URL is revoked afterward. No network is involved.

`data` includes 28 authoritative user-state table payloads: `settings`, custom-source `exercises`, `exercisePreferences`, `customTags`, `workoutRoutines`, `routineExercises`, `workouts` (including a persisted active workout), `workoutExercises`, `workoutSets`, `cardioSessions`, `foods`, `dailyNutrition`, `meals`, `foodEntries`, `rememberedFoods`, `foodLogEntries`, `customFoodCategories`, `bodyMeasurements`, `achievements`, `quests`, `xpHistory`, `journalRecords`, `xpEvents`, `planDaySnapshots`, `streakFreezeEvents`, `streakPauses`, `planChangeEvents`, and `achievementUnlocks`. It also includes validated local preferences for theme family, brightness, selected avatar, and onboarding completion. Settings carries display name, weekly plan, tutorials, gamification boundary, and complete Nutrition Targets state.

Built-in exercise definitions, exercise MP4s, food/category art, avatars, badges, rank art, icons, fonts, other static application assets, and `systemMetadata` seeding state are excluded. During restore, shipped built-in exercise rows and system metadata remain in place; only custom-source exercise rows are replaced. Level, Rank, PR summaries, charts, journal summaries, and other derived views are not backed up because they are recomputed from restored authoritative facts. No IDs, timestamps, XP source keys, or achievement ledgers are regenerated or reconciled during restore.

Import is capped at 25 MB and checks size before reading. Validation requires valid non-empty JSON, the exact format marker, supported format version, non-empty app version, valid creation timestamp, integer compatible database schema version, an object `data` payload, expected arrays, valid non-empty primary IDs and timestamps, basic critical fields, custom-only exercise rows, singleton Settings, and no duplicate primary or important unique-index keys. A newer backup format or schema is rejected with explicit copy. Format V1 accepts database schemas 2 through current schema 7; missing stores are defaulted only when the declared older schema predates that store, and known legacy exercise/workout fields receive safe current defaults. Current-schema backups must contain every store payload. Validation failure never opens a write transaction.

Restore V1 is replace-not-merge. One Dexie `rw` transaction spans all 28 included tables: each user store is cleared and bulk-added from the validated payload, while custom exercises are deleted/reinserted without touching built-ins. Any IndexedDB write failure aborts and rolls back the entire transaction. Validated local-storage preferences are applied individually only after that transaction commits, so database failure cannot partially change them. Browser-storage persistence is explicitly best-effort: a failed theme, brightness, avatar, or onboarding write cannot turn a committed database restore into a reported rollback, and the completion dialog names preferences that may keep their current values after reload. The selected incoming backup remains in memory while Back Up Current Data First runs the normal download flow, and restore never continues automatically; the user must still choose Replace & Restore. On success, FitDex shows restored workout, food-entry, routine, and achievement counts, then reloads only when Continue is chosen so providers rebuild from finalized persisted state.

Settings contains no automatic-backup placeholder in V1. There is no scheduler, retention policy, encryption, backend, account, cloud sync, automatic upload, or guarantee that a previously downloaded file still exists. Future backup-format versions require an explicit normalizer; unknown newer versions are never restored best-effort. The Dexie schema remains version 7.

## 36. Capacitor Android shell V1

FitDex has a first-party Capacitor Android shell using Capacitor 8.5.0. Its permanent identity is `com.fitdex.app` / `FitDex`, and `capacitor.config.ts` packages the Vite `dist` output with no development-server URL. Android treats this as a different application from pre-release builds created under `com.arijitbhaduri.fitdex`; no package-ID data migration is required during pre-release development. Browser and installed-PWA behavior remains supported. Workbox registration is manual and limited to non-native platforms: the browser still receives the service worker and offline app shell, while Android loads the packaged bundle without a browser service-worker cache layer.

The Android module uses the generated baseline of min SDK 24, target/compile SDK 36, version code 1, and `versionName` 0.5.0 matching the web package. The application does not lock orientation. It keeps the default Capacitor back behavior, does not add StatusBar, Splash Screen, Network, Filesystem, Share, notification, or reminder plugins, and relies on existing CSS safe-area handling. Android 8+ adaptive launcher icons reuse the approved FitDex PWA mark as an Android vector; the standard Capacitor splash remains deliberately minimal.

The WebView continues to use browser-compatible IndexedDB/Dexie and local storage, so authoritative FitDex records remain local to that installation. Android OS auto backup/device-transfer backup is disabled with `android:allowBackup="false"`; `.fitdex` export/import is the explicit portable path. Normal Android updates are expected to retain app data, while uninstalling the app removes its local WebView storage unless the user has exported it first.

To keep Android APKs practical, `npm run android:sync` builds the normal browser/PWA `dist`, then runs `prepare:android-dist` before Capacitor copies assets. That build-only step removes only `.mp4` files below `dist/exercises`; it never changes `public/exercises`, exercise metadata, instructions, category art, or other non-video assets. The normal `npm run build` continues to include the local demos for browser/PWA use, and Workbox continues not to precache MP4s. Android V1 therefore shows a neutral “Exercise demonstration unavailable.” state if a packaged exercise video is requested, while all exercise detail content remains usable. Future demos should be delivered remotely/on-demand; no remote source or backend is configured yet, and the original source files remain available for a future media migration.

`.fitdex` restore uses the existing file input, which should use the Android WebView/system document picker but still needs real-device verification. Backup export currently uses the browser Blob/download-anchor flow; a WebView may not offer a predictable user-visible save location. Until a future deliberate Filesystem/Share integration is approved, users should verify that an exported file is accessible before relying on it. No cloud, device-transfer, or automatic backup claim is made. `navigator.onLine` remains the existing connectivity signal; no native network plugin was introduced.

Use `npm run android:sync` to build the web bundle and copy it into Android, and `npm run android:build` for a debug APK once Android Studio/SDK and a compatible JDK are installed. This repository's environment did not have a usable JDK, Android SDK, or Android Studio, so Gradle assembly requires local developer tooling. Future Android work should test persistence across force-close/reopen, Android back navigation, orientation/safe areas, offline launch after installation, file import/export behavior, upgrade retention, and notification delivery only when notifications are explicitly implemented.

## 37. Remote Exercise Media + Selective Offline Downloads V1

Every available built-in demonstration already owns a stable canonical `mediaPath` of `/exercises/<slug>.mp4`; the basename is the remote key and is validated against all 804 source videos. `VITE_EXERCISE_MEDIA_BASE_URL` is the sole configurable host setting. It is trimmed/validated as an HTTP(S) base and joined only to safe canonical filenames, never user-supplied URLs. Cloudflare R2 is the intended first host, but FitDex has no Cloudflare dependency, credentials, bucket, upload, backend, or account feature. The remote layout is `<base-url>/<canonical-filename>.mp4`; hosts need HTTPS, and browser streaming should support CORS and Range requests.

Android uses `@capacitor/filesystem` 8.1.3 and `@capacitor/file-transfer` 2.0.5. An explicit download writes directly to private `Directory.Data/exercise-media/<canonical-filename>.mp4`; MP4 bytes never enter Dexie or JS memory. Lightweight metadata (exercise ID, video key, relative local path, date, byte size, and a reserved media-version field) is device localStorage, not Dexie. This avoids a schema bump and is deliberately outside `.fitdex` backup/restore. Playback priority is verified local copy, then configured remote stream when online, then the neutral unavailable state. Stale metadata is removed if its file is absent.

Browser/PWA retains existing local demo playback and has no native download UI. Android can explicitly download one demo, shows native transfer progress when length is known, immediately prefers local playback, and can remove it. File Transfer 2 has no safe per-transfer cancellation API, so V1 does not fake Cancel. Settings → Exercise Media shows native-only count/storage, per-download management, and confirmation before removing all; fitness data is unaffected. `prepare:android-dist` still guarantees zero bundled MP4s. The 804 sources remain untouched for future CDN upload. V1 has no automatic first-play/routine/background downloads, Wi-Fi rules, quota, media hashing, or browser offline-video storage.
