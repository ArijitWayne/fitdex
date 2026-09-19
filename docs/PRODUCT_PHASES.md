# FitDex Product Phases & Architecture Specification

This document is the permanent source of truth for FitDex product phase statuses, finalized UI/UX decisions, production architecture, data derivations, and deferred scope across Phases 1–9. The former prototype workspace was disposable; this document preserves all approved designs, interaction contracts, and constraints.

---

## 1. Phase Status Summary

| Phase | Area | Status | Selected Design Direction | Implementation Summary |
|---|---|---|---|---|
| **Phase 1** | Home & Global Shell | **COMPLETE / LOCKED** | Handheld RPG Console Identity | AppShell, responsive header, 4 themes, bottom nav, centralized Android Back, Display Name, local audio. |
| **Phase 2** | Workout & Exercise Dex | **COMPLETE / LOCKED** | Surgical Refinement + Compact Picker | Active workout engine, 804-exercise Dex v4, anatomy cards, routine CRUD, Weekly Plan, compact picker row hierarchy. |
| **Phase 3** | Food & Nutrition | **COMPLETE / LOCKED** | Goal-First (3A) + Compact (3B) | Daily Food Hub, compact meal cards, Recent/Frequent repository suggestions, Quick Log, custom categories, target guards. |
| **Phase 5** | Journal & Activity Log | **IMPLEMENTED / PHYSICAL QA PENDING** | V3 Field Notes | Read-only derived activity ledger (workouts + food), symmetric 2-dimension status, empty-meal suppression, chevron actions. |
| **Phase 6** | Exercise Dex Standalone | **IMPLEMENTED / PHYSICAL QA PENDING** | V3 RPG Codex | RPG Codex hero with selected character avatar, permanent search field, Index/Favorites tabs, theme-family anatomy cards, compact results, Exercise Record reordered (media → facts → How to Perform). |
| **Phase 7** | Settings | **IMPLEMENTED / PHYSICAL QA PENDING** | V2 — Profile / Loadout | Profile/Avatar hero, 3-column status grid (Theme, Units, Targets), grouped rows (Personalize, Your System, Data & Help), Units subview, unified Audio, Nutrition Targets with drafts, Android Media management, Backup & Restore replacement semantics, Field Guide replay, About. |
| **Phase 8** | Guides & Tutorials | **IMPLEMENTED / PHYSICAL QA PENDING** | V2 — Mission Brief + Style B Pixel Command | Field Guide (7 steps with replay mode + Home help button), Workout tutorial (12 steps), Food tutorial (8 steps), Progress help (1 step), Journal help (1 step), Gamification guide (+50 XP achievement reward), and Pixel Command retro tactile controls. |

---

## 2. Global Cross-Phase Engineering & UX Rules

1. **Production Code is Authoritative**: Prototypes explore visual and interaction direction, but production state models, Dexie repositories, business logic, audio, and platform integrations remain the source of truth.
2. **Zero Functionality Loss During Redesigns**: Visual polish passes must never strip existing capabilities, data attributes, error states, or user controls unless explicitly decided by product requirements.
3. **AppShell Authority**: Feature views render inside the global `AppShell`. No feature or prototype may invent, override, or replace global navigation, header branding, or root layout chrome.
4. **Physical Phone QA Requirement**: Static tests, headless builds, and desktop browser checks are necessary but insufficient. Final visual and ergonomic locks require validation on physical mobile hardware.
5. **No Browser Automation by Default**: Rely on code inspection, unit/integration test suites, Oxlint, Vite build, Graphify, and physical-phone verification.
6. **Responsive Width Spectrum**: All layouts must gracefully handle viewports from the 320px robustness floor through 340, 360, 375, 390, 412, 430, 480px, and fluid tablet/desktop viewports. Primary phone envelope is 360–440 CSS px.
7. **Four Semantic Themes**: Every view must natively support `Spartan Dark`, `Spartan Light`, `Amazonian Dark`, and `Amazonian Light` using semantic CSS tokens (`--color-bg`, `--color-surface`, `--color-text`, `--color-border`, etc.). Never hardcode hex values or invent feature-specific color palettes.
8. **Branding Sourced from Theme Family**: Global branding follows the theme family: Spartan themes use Spartan crest/logo; Amazonian themes use Amazonian crest/logo. Avatar selection does not alter application branding. Brightness changes preserve family assets.
9. **Local-First & Privacy**: All personal fitness, nutrition, and gamification history lives strictly in local Dexie/IndexedDB and localStorage. No mandatory account, authentication, analytics tracker, or remote cloud database is used.
10. **Centralized Android Back Contract**: Android hardware back and gesture navigation are managed centrally by `useAppBackButton` and the Capacitor App plugin. Subviews close deepest-first; top-level history pops to Home; Back exits only at the Home root.
11. **Scroll Stability**: In-page filter, tab, period, or view-state changes must preserve viewport scroll position without teleporting the user to the top. Only full subview transitions reset scroll.
12. **Disposable Prototype Lifecycle**: Former prototype HTML and AUDIT files were scratchpads. Approved decisions were transferred into durable production Markdown and production code before the prototype workspace was removed.
13. **FitDex Design Doctrine Compliance**: All UI modernization phases, screens, and prototypes must strictly follow the canonical **FitDex Design Doctrine** defined in [FITDEX_UI_UX_STANDARD.md](FITDEX_UI_UX_STANDARD.md#11-the-permanent-fitdex-design-doctrine). Every design must embody the retro handheld / 90s pixel-era fitness RPG identity using authoritative production semantic tokens, crisp framing, and authentic game-menu character without drifting into generic SaaS or mobile card tropes.

### Android Release Signing — Phase 3 Complete

- **Secret Boundary**: Real signing material remains outside Git. Root `.gitignore` excludes keystores, PEM/key files, `release-signing.properties`, and generated `release-artifacts/`. `release-signing.properties.example` contains placeholders only.
- **Signing Sources**: Release signing reads ignored local properties or future-CI environment variables: `FITDEX_KEYSTORE_PATH`, `FITDEX_KEYSTORE_PASSWORD`, `FITDEX_KEY_ALIAS`, and `FITDEX_KEY_PASSWORD`.
- **Fail-Closed Release Build**: `assembleRelease` fails with a clear message if valid signing credentials are unavailable. Release never silently uses debug signing. Debug builds retain normal debug signing.
- **Artifact Contract**: `npm run android:release` performs existing sync, signed release assembly, and deterministic packaging into `release-artifacts/fitdex.<package.json version>.apk` with matching `.sha256` checksum.
- **Version Boundary**: This infrastructure phase keeps `versionName` from `package.json` at `1.0.0` and Android `versionCode` at `2`. Neither changes until deliberate release preparation.
- **Private Validation**: Local `npm run android:release` generated signed `fitdex.1.0.0.apk` and matching checksum. `apksigner` verified the FitDex release signer, and independent SHA-256 verification matched. No artifact is published or tracked.
- **Physical-Device QA**: Release installation, startup, backup/restore, Home, Workout, Food, Progress, Settings, Backup & Restore, close/reopen, and reboot relaunch passed. Preserve keystore and credentials in two trusted secure locations. Phase 3 is complete; no public `1.0.0` release, Git tag, or GitHub Release exists.

### GitHub Release Automation — Phase 4 COMPLETE / LOCKED

- **Deliberate Prepare Commands**: `npm run release:prepare:patch`, `release:prepare:minor`, and `release:prepare:major` choose SemVer explicitly. Their `release:patch`, `release:minor`, and `release:major` aliases prepare only; none publish implicitly.
- **First Public Release**: `npm run release:prepare:first` preserves `1.0.0` and increments Android `versionCode` only when deliberately preparing first distribution. Use `--dry-run` during Phase 4 validation; it does not change tracked files or create artifacts, tags, releases, commits, pushes, or uploads.
- **Prepare Boundary**: Non-dry prepare requires clean `dev`, updates package/lockfile and Gradle code, runs lint/build/Capacitor Android checks, invokes existing signed APK flow, then writes ignored local metadata and draft notes. It rejects wrong branch, dirty state, existing local tag, bad versions, missing signing material, unexpected APK names, and checksum mismatch.
- **Publish Boundary**: `npm run release:publish` separately validates prepared metadata and artifacts, checks local/remote tag absence and authenticated GitHub CLI, then commits, tags, pushes, releases, uploads APK/checksum, and verifies release. `npm run release:publish -- --dry-run` does not mutate state.
- **Consumer Contract**: ignored `release-artifacts/release.json` has `version`, `versionCode`, `tag`, `apk`, `apkDownloadUrl`, `checksum`, `sha256`, `releaseNotes`, and `publishedAt`. URLs and timestamps remain `null` before public release. `release-notes.md` is a reviewed template, never automated commit prose.
- **CI Compatibility**: Same scripts use existing `FITDEX_KEYSTORE_PATH`, `FITDEX_KEYSTORE_PASSWORD`, `FITDEX_KEY_ALIAS`, and `FITDEX_KEY_PASSWORD`; local and CI release logic do not diverge. No GitHub Actions release workflow exists or publishes on push.
- **Current Boundary**: Phase 4 dry-run and static validation complete. Public FitDex `v1.0.0` remains unpublished. Repository version remains `1.0.0`; Android `versionCode` remains `2`.

---

## 3. Phase 1 — Home & Global Shell (COMPLETE / LOCKED)

### 3.1 Design Character & Shell Structure
- **Retro RPG Handheld Identity**: Evokes a focused, tactile game device rather than a generic fitness utility or a direct Pokédex clone. Crisp geometry, restrained RPG cues, and purposeful accents.
- **Phone-First Canvas**: Main mobile content spans full width with consistent edge insets. Mobile treatments apply at or below 700px; desktop layout expands with intentional desktop navigation at 980px.
- **AppShell Components**:
  - **Header**: Canonical shared top bar displaying theme-family branding (`fitdex-icon-*.png` emblem + `FITDEX` wordmark on left), live offline pill when disconnected (`navigator.onLine === false`), Light/Dark quick shortcut, and Settings gear action on right. Faction selection lives strictly in Settings → Appearance.
  - **Bottom Navigation**: Five permanent destinations with distinct Lucide icons:
    - `House` → Home
    - `Dumbbell` → Workout
    - `Utensils` → Food
    - `ChartNoAxesColumnIncreasing` → Progress
    - `NotebookTabs` → Journal
  - **Settings & Help**: Global drawer/modal accessing profile, appearance, units, workout preferences, nutrition targets, audio, data storage, and the replayable Field Guide.

### 3.2 Display Name & Avatar System
- **Local Display Name**: Required 1–24 character string stored locally in Settings. Used for time-aware Home greetings ("Good morning, {name}").
- **Avatar System**: 6 finalized avatars. Avatars provide visual personalization and Home hero portraits. Avatar choice never changes theme family or branding assets.

### 3.3 Audio System
- **SFX**: Semantic local effects in `public/audio/`: `select.mp3` (navigation/selection), `add.mp3` (creation), `progress_complete.mp3` (workout completion/first food log), `achievements_unlock.mp3` (unlock/level up). Competing effects serialize by priority.
- **BGM**: 3 looping background tracks (Warrior, Hardened, Villain) plus No Music. Pause is temporary for the active session; Off persists No Music. Controlled via Home or Settings.

### 3.4 Public Repository Foundation & Split Licensing Architecture
- **Source-Available Classification**: FitDex is classified as source-available software with a three-part coarse split-licensing boundary:
  - **Core Application (`src/**`, `android/**`)**: Licensed under PolyForm Noncommercial License 1.0.0. Complete local engine, UI components, state management, and persistence are source-available for personal/noncommercial use. Commercial use requires explicit separate permission.
  - **Documentation & Tooling (`docs/**`, `scripts/**`, `.github/**`, `README.md`, `CONTRIBUTING.md`, `SECURITY.md`, build/dev configuration)**: Licensed under the permissive MIT License.
  - **Assets, Visual Branding & Demonstration Media (`public/**`, `src/assets/**`)**: Excluded from software licenses. FitDex logos, Spartan/Amazonian faction art, avatars, and achievement badges are All Rights Reserved (Copyright © 2026 Arijit Bhaduri). Exercise demonstration videos are distributed separately and subject to separate media terms. SFX/BGM audio is classified as rights review pending.

### 3.5 Home Consistency Rail & Consistency Deck UX
- **3-Cell Tactical Console Layout**: Positioned directly below the XP bar and above Active Command on mobile Home. Fixed 48–52px footprint (`height: 48px`, grid `1.25fr 1fr 1fr 20px`).
  - **Cell 1 (Primary)**: Current Plan Streak (`19 DAYS` / `PLAN STREAK`), tinted 8% primary background, bold accent text (`--color-primary-text`).
  - **Cell 2 (Secondary)**: Available Freezes (`❄ 2` / `FREEZES`), featuring a monochrome vector SVG snowflake with `stroke="currentColor"` inheriting `--color-primary-text` across all 4 themes.
  - **Cell 3 (Tertiary)**: Best Plan Streak (`19 DAYS` / `BEST`), muted text (`--color-text-muted`).
  - **Trailing Indicator**: Subtle chevron `›`.
- **Mobile Consistency Navigation**: Tapping the rail opens `StreakDetailView` (Consistency Deck) directly on mobile with compact header (`‹ Back to Home` / `CONSISTENCY DECK`).
- **Deck Structure & Parity**: Matches approved prototype structure. Redundant "THIS WEEK" schedule block is omitted from Consistency Deck (retained authoritatively in Workout Hub).
- **Freeze UX & Scalability**: Uncapped balance represented quantitatively (`❄ {N} AVAILABLE`), never generating N DOM cards per freeze. Automatic consumption on missed planned training days without manual action buttons. Real-time progress to next Freeze milestone (`{count % 15} / 15 successful planned training days toward next Freeze`).
- **Travel / Sickness Pause**: 1–7 days, maximum 2 uses per rolling 12 months. Surfaced active pause status with date range (`TRAVEL PAUSE ACTIVE` / `SICKNESS PAUSE ACTIVE`). Native date picker wired with direct `showPicker()` touch handlers and 48px targets on Android/mobile.
- **Weekly Plan Protection**: Communicates accurate rolling 12-month rule (first material plan modification is protected; subsequent warns and resets streak). Shows available/used status without claiming a "weekly" allowance.

---

## 4. Phase 2 — Workout & Exercise Dex (COMPLETE / LOCKED)

### 4.1 Architecture & Core Workflow
- **Routine Templates vs. Active Sessions vs. Completed Snapshots**:
  - `WorkoutRoutine`: Reusable workout template with planned exercises and set targets.
  - `Workout` (Active): Resumable, auto-saved local session. Paused time is tracked and strictly excluded from final `durationSeconds`.
  - `Workout` (Completed): Immutable historical snapshot with frozen exercise snapshots (`WorkoutExercise`) and set snapshots (`WorkoutSet`).
- **Clean Finish Validation**: A workout cannot be finished if it contains zero completed sets. Empty or abandoned exercises are safely handled or cleaned up before completion.
- **Weekly Plan**: Recurring weekly schedule with four day types: Routine Days (links to specific routine), Workout Days (open training), Rest Days, and No Plan days. Supports streak protection, automatic freezes, and travel pauses.

### 4.2 Exercise Dex & Exercise Picker
- **Dataset Version 4**: 804 active built-in exercises with verified local MP4 demonstrations and complete instructions.
- **Nine Muscle Categories**: Chest, Back, Shoulders, Legs, Gluteal, Biceps, Triceps, Forearms, and Abs. Each category features theme-aware pixel art sprites.
- **Anatomy Cards**: Distinctive masculine (Spartan) and feminine (Amazonian) muscle anatomy diagrams follow the active theme family (not user avatar). Anatomy views remain unflattened and central to the Dex experience.
- **Favorites System**: Independent local user-preference records (`exercisePreferences`). Supports instant toggling, filtering, and searching within favorites.
- **Picker Transplant & Row Hierarchy**:
  - Compact picker row hierarchy transplanted from approved Phase 2C design.
  - Direct exercise addition with duplicate prevention.
  - Set data protection: removing an exercise during an active session requires confirmation if sets contain logged data.
- **Naming & Ranks**:
  - Compact `LEVEL` naming convention.
  - Named ranks (Recruit through Radiant), never Roman numerals.

### 4.3 Historical Refinement Constraint
- A wholesale replacement/transplant of the Workout module was previously attempted and rejected because it degraded production UX.
- Future Workout changes must be **surgical and production-aware**, preserving all underlying session state machines, timers, rest timers, audio triggers, and Android Back integration.

---

## 5. Phase 3 — Food & Nutrition (COMPLETE / LOCKED)

### 5.1 Architecture & Design Selection
- **Selected Direction**: **Goal-First (Phase 3A) + Compact (Phase 3B)**.
- **Local-First Snapshot Isolation**:
  - `FoodLogEntry`: Immutable historical log entries preserving food name, calories, macros, category, and timestamp.
  - `RememberedFood`: Reusable local template for quick reuse. Updating or deleting a remembered food never retroactively modifies past `FoodLogEntry` snapshots.
- **Four Fixed Meals**: Breakfast, Lunch, Supper, and Dinner.

### 5.2 Daily Food Hub (Phase 3A Goal-First)
- **Visual Hierarchy**:
  1. Header with date navigation (Previous, Today, Next) and compact Level/Rank display.
  2. Calories First, Protein Second: Prominent daily progress toward targets with remaining or consumed metrics.
  3. Primary Action: Prominent `Log Food` CTA.
  4. Compact Meal Overview: Four structured meal cards displaying meal-specific calories, protein, item count, and production WebP artwork (`/food/meals/meal-*.webp`).
  5. Secondary Nutrition Disclosure: Expandable macro/micronutrient breakdown (carbs, fat, fiber, sugar, saturated fat, sodium).

### 5.3 Add Food & Discovery (Phase 3B Compact)
- **Discovery Modes**:
  - **Recent**: Chronologically recent unique foods logged by the user.
  - **Frequent**: Repository-backed suggestion query prioritizing:
    1. Meal-specific frequency (e.g., foods often logged under Breakfast).
    2. Total usage frequency across all meals.
    3. Recency of last log.
    4. Default bounded result limit without arbitrary minimum-frequency exclusion thresholds.
  - **Search**: Fast local client search across remembered foods and exercise-adjacent items.
  - **Quick Log**: Fast one-tap logging from remembered-food snapshots directly to the active meal via `addFoodLog()`, instantly triggering XP and achievement reconciliation with no intermediate form.
  - **Create New Food / Edit**: Full manual entry sheet.

### 5.4 Food Editor & Categories
- **Supported Fields**: Calories, Protein, Carbohydrates, Fat, Fiber, Sugar, Saturated Fat, Sodium.
- **No Serving Quantity / Unit Complexity**: FitDex uses simple per-entry logging. Avoids multi-unit dropdown conversion bugs.
- **Category System**: 16 predefined categories with pixel art icons plus custom categories based on an `Other` template with 10 selectable accent color tokens. Deleting a custom category marks past entries as Uncategorized without data loss.
- **Target Safety Guard**: Intake below 1,000 kcal never qualifies for deficit achievements or target XP. Protein targets require meeting or exceeding the goal without penalty for overage.
- **Intentionally Deferred to Phase 7**: Target storage schema refactoring, historical target recalculation, carbohydrate/fat target settings, custom calorie formulas, and dedicated Nutrition Targets subroutes.

---

## 6. Phase 4 — Progress & Analytics (COMPLETE / LOCKED)

### 6.1 Architecture & Design Selection
- **Selected Direction**: **V3 Character Sheet**.
- **Read-Only Derived Layer**: Progress creates no independent records and makes zero schema changes (Dexie v7). All data is aggregated on the fly in memory from completed `Workout`, `WorkoutExercise`, `WorkoutSet`, and `FoodLogEntry` snapshots.
- **Strict Viewport & Scroll Stability**: Changing period filters (7D, 30D, 90D, All), trend metrics, or achievement categories preserves scroll position without jumping to page top.

### 6.2 Character Sheet Hierarchy
1. **Character / Rank Hero**: Visual identity card displaying current Level (1–100), Rank title (Recruit to Radiant), official rank badge WebP (`/gamification/ranks/<rank>.webp`), Lifetime XP, and progress bar to next level.
2. **Period Selector**: 7D, 30D, 90D, and All. Finite windows end on the current local day; 7D/30D/90D compare against an equal immediately preceding window. All omits comparison.
3. **Training Attributes & Metrics**:
   - **Completed Workouts**: Total finished sessions in period.
   - **Training Time**: Sum of completed workout `durationSeconds` (excluding pause time).
   - **Resistance Volume**: Sum of `weight × reps` strictly for completed `weight_reps` sets. Explaining tonnage, not caloric burn.
4. **Trends & Charts**: Pure CSS bar charts with accessible textual equivalents. Workout frequency, resistance volume, and calorie intake trends.
5. **Nutrition Averages**: Average daily calories and protein calculated by dividing totals by **days with at least one food log**, not total calendar days.
6. **Personal Records (PRs)**:
   - Preview card showing recent PRs with a **compact navigation row CTA** ("View All PRs"), avoiding oversized decorative illustrations.
   - Comprehensive searchable PR archive supporting 6 metric families:
     - `weight_reps`: Heaviest weight, best reps at heaviest weight, best single-set volume (`weight × reps`).
     - `bodyweight_reps` & `reps_only`: Highest reps.
     - `assisted_bodyweight`: Highest reps with lowest assistance weight.
     - `duration`: Longest duration.
     - `distance_duration`: Longest distance and longest duration.
     - `duration_optional_distance`: Longest duration and longest distance.
     - `weight_distance`: Heaviest weight and longest distance.
     - `duration_reps`: Longest duration and highest reps.
7. **Gamification & Achievements Access**:
   - Access to Rank Journey (progression ladder) and 52 permanent achievements categorized by Workout, Consistency, Performance, Exercise Dex, Nutrition, and Progression. Each newly unlocked achievement awards +50 XP once via forward-only idempotent reconciliation.

### 6.3 Explicit Exclusions & Deferred Scope
- **NO Estimated 1RM**: FitDex records genuine accomplished lifts, not theoretical formulas.
- **NO Body Measurement UI in Progress**: `BodyMeasurement` exists in schema/backup contracts, but current Progress does not read or write it. Body-measurement tracking remains deferred future product work and is outside the current Phase 1–9 UI modernization roadmap unless explicitly introduced later.

---

## 7. Phase 5 — Journal & Activity Log (IMPLEMENTED — Physical QA Pending)

> [!IMPORTANT]
> **Status**: **IMPLEMENTED / PHYSICAL QA PENDING (V3 Field Notes)**.
> The production implementation is complete and verified with automated tests; awaiting user physical phone QA before final lock.

### 7.1 Core Architecture
- **Read-Only Derived Activity Ledger**: Journal is **not a writable notes application**. It owns no separate write flow and creates no `JournalRecord` rows (legacy `journalRecords` table remains dormant in schema solely for `.fitdex` backup compatibility).
- **Data Derivation**:
  - Source data: Authoritative completed `Workout` records matching the local completion date + `FoodLogEntry` records matching the local `YYYY-MM-DD` date.
  - Workout metrics: `workouts.length`, sum of `durationSeconds`, exercise count, set count.
  - Food metrics: `foodEntries.length`, sum of calories, sum of protein.
  - Session notes: User notes entered during workout logging are displayed read-only inside the workout detail view.

### 7.2 State Visibility Contract (Symmetric Reporting)
The daily summary status bar must **always report both Workout and Food dimensions symmetrically**, regardless of whether data exists:

- **Workout Status**:
  - `0` workouts: `No workout logged`
  - `1` workout: `1 workout logged`
  - `N` workouts: `N workouts logged`
- **Food Status**:
  - `0` food items: `No food logged`
  - `1` food item: `1 food item logged`
  - `N` food items: `N food items logged`

### 7.3 Activity Ledger Visibility & Empty-Meal Suppression
The activity list displays only genuine activity for the selected day:
- **Workout-Only Days**: Render completed workout rows. **Completely suppress all four empty meal cards**.
- **Food-Only Days**: Render populated meal groups. Do not display a fake or placeholder workout row.
- **Mixed Days**: Render completed workout rows and populated meal rows.
- **Empty Days**: Render a single neutral empty state ("No activity logged for this day"). Never render empty Breakfast/Lunch/Supper/Dinner chrome.

### 7.4 V3 Field Notes UI Structure
The layout follows the tactical Field Notes hierarchy:
1. **Day Identity**: Date selector with Previous Day, Next Day, and `Today` indicator.
2. **Symmetric Status Pill**: Dual-dimension workout and food status.
3. **Daily Activity Ledger**:
   - **Row Structure**: `icon | content (title + metadata) | action`
     - **Title & Metadata**: Title (e.g., workout name or meal name) and metadata (duration, exercises, sets, kcal, protein) must be rendered on separate vertical lines. Never concatenate them into an unstyled inline string.
     - **Workout Row Action**: Trailing navigation chevron (`›`) opening the read-only completed workout detail subview.
     - **Meal Row Action**: Trailing disclosure toggle (`˅` / `˄`) expanding nested food items logged under that meal.
     - **Nested Food Items**: Displayed cleanly indented under their parent meal row with food name, calories, and protein.
4. **Icons**:
   - Workout rows must use the canonical Lucide `Dumbbell` icon (matching AppShell and Workout Hub).
   - Meal rows use the production meal artwork and category icons.
5. **Workout Deletion**: Completed workout detail subview allows permanent workout deletion with confirmation, triggering recalculation of daily summaries, PRs, and Progress stats.
6. **Food Read-Only Policy**: Food items in Journal are display-only. Editing or adding food directs the user to the Food tab.

### 7.5 Deferred Journal Features
The following features are explicitly out of scope for Phase 5:
- Manual free-form journal notes / diary entries
- Mood, energy, or reflection ratings
- Tagging, favorites, and pinned entries
- Image / photo attachments
- Full-text archive search and multi-month calendar date-picker modal
- Inline food editing within Journal
- AI-generated workout commentary or coaching summaries

---

## 8. Phase 6 — Exercise Dex Standalone (IMPLEMENTED / PHYSICAL QA PENDING)

### 8.1 Architecture & Design Selection
- **Selected Direction**: **V3 — RPG Codex**.
- **Role Separation**: Standalone Exercise Dex focuses on browsing, searching, favoriting, and learning movements; the contextual Workout Exercise Picker remains strictly optimized for fast addition with duplicate prevention and Phase 2 locked row hierarchy.
- **Data Model & Media Continuity**: Full fidelity with the 804-exercise canonical catalog, 9 muscle categories, local `exercisePreferences` persistence for favorites, and remote/on-demand Cloudflare Workers CDN video resolver.

### 8.2 Standalone Landing & Codex Identity
1. **Exercise Codex Hero**:
   - Distinctive archival cover framing (`.exercise-codex-cover`).
   - Sourced directly from the user's **selected character avatar** (`AvatarPortrait` with pixel-art rendering).
   - Theme family vs. avatar boundary: Character avatar provides hero personal identity; theme family strictly controls application branding and anatomy sex.
2. **Permanent Search**: Always-visible search input directly below the hero. Instant local search across exercise name, alias, category, primary/secondary muscles, and equipment.
3. **Index / Favorites Navigation**: Simplified two-mode toggle (`Index` / `Favorites`). Dedicated "Search" tab removed as redundant with the persistent search bar.
4. **Browse Anatomy**: 9 muscle categories (`Chest`, `Back`, `Shoulders`, `Legs`, `Gluteal`, `Biceps`, `Triceps`, `Forearms`, `Abs`) rendered in a 3-column grid (2-column on narrow viewports). Anatomy cards are driven strictly by theme family (Spartan male / Amazonian female).
5. **Compact Result Rows**: Preserves approved Phase 2 density (`exercise name | metadata | star | chevron`) without oversized video cards.

### 8.3 Exercise Record / Detail Page Hierarchy
The Exercise Record uses the reference-first RPG Codex layout:
1. **Header**: Back button, eyebrow (`Exercise record`), category / movement pattern context, and responsive fluid `h2` title that wraps cleanly on narrow screens (320–374px).
2. **Media Frame**: Bounded aspect-ratio (16:10) video container with loading spinner, offline download controls (Android), and clean fallback without debug/implementation badges ("Loops muted").
3. **Exercise Facts / Metadata Card**: Positioned **immediately above** instructions so users absorb what the exercise is, trains, and requires before reading execution steps. Displays verified canonical fields only:
   - Primary Muscle
   - Secondary Muscles
   - Region
   - Equipment
   - Tracking Method
   - Movement Pattern (conditional)
   - Cardio Subtype (conditional)
   - Notes (conditional)
4. **How to Perform**: Canonical execution instructions with readable line-height and rhythm.
5. **How It Helps**: Supporting physiological context and target development.
6. **Actions**: Context-aware routine addition (`Add to routine` when standalone handler provided; `Add / Added` toggle when in Picker).

---

## 9. Phase 7 — Settings (IMPLEMENTED / PHYSICAL QA PENDING)

### 9.1 Design Character & Hierarchy
- **Locked Design**: **V2 — Profile / Loadout**.
- **Player Profile Hero**: Sits at the top of the Settings Utility Hub, displaying the user's active champion avatar (`AvatarPortrait` with 72px pixel art rendering), required local `displayName`, archetype label, and direct `Change` action.
- **3-Stat Status Grid**: At-a-glance summary cards above the setting categories:
  1. `Theme`: Active theme family & brightness mode (e.g. `Spartan · Dark`).
  2. `Units`: Measurement system (e.g. `Metric · kg, km` or `Imperial · lb, mi`).
  3. `Targets`: Nutrition target summary (e.g. `1,800 kcal · Protein off` or `Disabled`).
- **Grouped Category Rows**:
  1. **Personalize**:
     - `Display Name & Avatar`: Local identity for this device (no account required). All 6 canonical avatars (Spartans: Aster, Leonidas, Brasidas; Amazonians: Artemis, Athena, Hippolyta).
     - `Appearance`: Theme family (Spartans / Amazonians) and Brightness (Dark / Light / System).
  2. **Your System**:
     - `Units`: Canonical Metric (`kg · km`) vs. Imperial (`lb · mi`) preference backed by `SettingsRecord.units` in Dexie.
     - `Audio`: Sound Effects toggle (`select.mp3`, `add.mp3`, `achievements_unlock.mp3`, `progress_complete.mp3`) and Background Music track selection (`Warrior`, `Hardened`, `Villain`, `None`).
     - `Nutrition Targets`: Full daily goal and calculation profile management.
  3. **Data & Help**:
     - `Exercise Media` (conditional): Native Android offline video demonstration management.
     - `Backup & Restore`: Portable `.fitdex` export and safe replacement restore.
     - `Field Guide`: Replayable 7-topic tutorial.
     - `Gamification Guide`: XP rules, Levels, Ranks, and Streak semantics.
     - `About FitDex`: Version, developer credit, local-first data guarantee.

### 9.2 Nutrition Targets — V3 Nutrition Codex & Evidence-Based Protein Model
- **Layout Direction**: **V3 — Nutrition Codex**. Clean, authoritative retro ledger hierarchy:
  1. `Codex System · Calculation Profile` header bar with Style B Pixel Command `[ ENABLED ] [ DISABLED ]` toggle.
  2. `Baseline Parameters` (clean fields: Objective Directive `[ Lose | Maintain | Gain ]`, Age, Biological Sex, Height, Weight, Activity Index with concise description). No decorative numbered record stamps (`RECORD 01`).
  3. `Energy Accounting` (telemetrics card: RMR, TDEE, Goal Calorie Recommendation, and Calculated Protein Allocation). No `RECORD 02`.
  4. `Daily Targets` (Calorie target stepper, Protein target stepper with `CALCULATED`/`MANUAL`/`NOT SET` badges, protein sub-meta line `g/day · g/kg · kcal · % of calories`, and explicit `[ RECALCULATE ]` / `[ + Set Target ]` / `[ Unset ]` actions). No `RECORD 03`.
  5. `Save Targets` (Style B primary command action).
- **Activity Dropdown Cleaned**: Internal TDEE factors (`1.2`–`1.9`) strictly hidden from user-facing select options; clear descriptive helper text shown below.
- **Evidence-Based Protein Target Model**:
  - Primary formula: $\text{proteinTargetGrams} = \text{round}(\text{weightKg} \times \text{proteinMultiplier})$.
  - Proposed FitDex activity mapping: Sedentary $= 0.8\text{ g/kg}$, Lightly Active $= 1.2\text{ g/kg}$, Moderately Active $= 1.4\text{ g/kg}$, Very Active $= 1.6\text{ g/kg}$, Extremely Active $= 1.8\text{ g/kg}$.
  - Derived metrics: $\text{proteinCalories} = \text{grams} \times 4\text{ kcal}$, $\text{proteinPercentOfCalories} = \text{round}((\text{proteinCalories} / \text{calorieTarget}) \times 100)$.
  - Zero/Unavailable state renders as `PROTEIN TARGET: NOT SET` rather than a literal `0 g` target.
  - Manual overrides preserve their value without being silently overwritten when the profile changes; explicit recalculation command restores the calculated target.
- **Calorie Formulas & Boundaries Preserved**:
  - Mifflin–St Jeor calculation and internal TDEE factors (`1.20`–`1.90`) 100% preserved.
  - Goal adjustments (Lose $-500$/$-750$, Maintain TDEE, Gain $+250$) and $1,000\text{ kcal}$ safety floor preserved.
  - XP rules (+5 XP for calories, +5 XP for protein when target $> 0$) and forward-only eligibility boundaries (`nutritionTargetsInitializedAt`, `nutritionTargetsEligibleFrom`) preserved.
  - **Zero database schema changes** (`DATABASE_SCHEMA_VERSION = 7` intact); backup format 100% compatible.

---

---

## 10. Phase 8 — Guides & Tutorials (IMPLEMENTED / PHYSICAL QA PENDING)

### 10.1 Design Selection & Control System
- **Selected Layout Direction**: **V2 — Mission Brief**. Compact tactical mission brief presentation with objective strip, primary theme accent rail, technical path callouts (`PATH // SETTINGS → ...`), and segmented cartridge progress rail.
- **Selected Control System**: **Style B — Pixel Command**. Permanent FitDex command control style: 0px border-radius, 2px solid semantic border, 3px solid block offset shadow (no blur), 70ms tactile press translation `translate(2px, 2px)` with 1px shadow, uppercase condensed typography, and minimum 44px touch targets.

### 10.2 Guide Flows Preserved
1. **Field Guide (7 steps)**:
   - First-run onboarding: Mission Brief setup (Welcome, Display Name, Faction, Mode, Avatar, optional Nutrition Targets), followed by the preserved Field Guide and Home.
   - Replay mode (Settings → Field Guide & Home `?` action): `Close` / `Done` buttons, safe idempotent completion.
   - Stale navigation paths audited and corrected to current IA (`SETTINGS → PERSONALIZE → APPEARANCE`, `PROGRESS → ACHIEVEMENTS`, `SETTINGS → DATA & HELP → BACKUP`).
2. **Workout Tutorial (12 steps)**: Contextual help from Workout page opening 12-step structured tutorial with compact 12-segment progress rail.
3. **Food Tutorial (8 steps)**: Contextual help from Food page opening 8-step structured nutrition tutorial.
4. **Progress Help (1 step)**: Contextual help from Progress page with single-panel Mission Brief layout, progress rail omitted, single `Close` button.
5. **Journal Help (1 step)**: Contextual help from Journal page with single-panel Mission Brief layout, progress rail omitted, single `Close` button.
6. **Gamification Guide (1 structured step)**: Comprehensive single-guide covering Levels (1–100), 9 Ranks (Recruit to Radiant), XP sources, Plan Streak rules, Freeze/Pause protections, and the +50 XP achievement reward rule.
7. **Page Contextual Help Entry**: Home page now includes `?` button in hero action bar opening Field Guide in replay mode. Workout, Food, Progress, and Journal maintain their respective help buttons. Exercise Dex omits empty guide action.

---

## 11. Phase 9 — In Progress / Cross-App Consistency

- **Primary Page Frame**: Home's retro handheld enclosure is now shared by Workout, Food, Progress, Journal, Settings, and Nutrition Targets. Global header and bottom navigation remain outside it. Phase 9 remains in progress.
- **Settings Navigation Contract**: Settings subviews preserve their entry origin and return to the originating Settings surface, including contextual Nutrition Targets and other deep links; no app-shell history is bypassed.
- **Nutrition Codex Polish**: Nutrition Targets V3 retains Style B Pixel Command controls, semantic containment, and SFX coverage. These fixes passed physical visual review; broader physical phone QA remains the final gate for Phase 9.
- **QA Gate**: Automated validation and desktop checks do not replace physical-device review across supported phone widths and all four theme variants.
- **Guided First Use**: Acknowledged mobile-native inline Context Rails teach Workout choices/timer/rest, Weekly Plan and protection rules, Food discovery/targets/results/categories, and the derived Progress/Journal surfaces without stealing width with a desktop sidebar or causing horizontal overflow. Merely visiting does not persist learning. Every interactive control triggers semantic SFX (`select`, `add`, `progress_complete`, or `achievements_unlock`).
- **Workout Preparation Contract**: Build Today is transient component state backed by Exercise Dex. Only explicit Start Workout creates an active session, exercise snapshots, initial sets, and a running timer.
- **Freeze Economy Revision**: Initial balance remains 2; every 15 successful planned training days earns +1 with no cap. Rewards are durable, idempotent, and use the grouped FitDex notification and achievement SFX architecture.
- **Locked Boundaries**: Phase 8 and the seven-topic Field Guide remain intact. Travel/Sickness Pause (1-7 days, max 2 uses per rolling 12 months) and protected Plan Change semantics are unchanged. Monetization remains future documentation only.

### Deferred Product Work
- **Monetization Idea — Documentation Only**: A future phase may explore paid access or replenishment for Streak Freezes, Travel/Sickness Pauses, or additional protected Weekly Plan structural resets. No purchases, subscriptions, payment SDK, entitlement logic, premium flags, gates, or fake locked UI exist in the current product.
- **Body Tracking & Measurements**: `BodyMeasurement` exists in schema/backup contracts, but UI tracking remains deferred future product work and is outside the current Phase 1–9 UI modernization roadmap unless explicitly introduced later.
- **Native Polish**: Deep physical-device QA for Capacitor Android and iOS PWA, native share sheet backup export, and hardware audio focus management.

---

## 12. Public Release Phases

### Phase 1 — Public Repository Foundation & Split Licensing (COMPLETE / LOCKED)
- Source-available split licensing model (PolyForm Noncommercial 1.0.0 for core app/Android, MIT for docs/tooling, All Rights Reserved for branding/assets).
- Comprehensive public documentation, security policy, contribution guide, and developer workflows.

### Phase 2 — Screenshot & Brand Asset Pack (COMPLETE / LOCKED)
- Nine approved production screenshots captured on a physical Android device in Spartan Dark mode stored in `public/screenshots/`.
- Primary `README.md` showcase presents six core screenshots (Home, Workout Hub, Active Workout, Exercise Dex, Nutrition, Progress) in a 2-column layout.
- Three secondary screenshots (`progress-overview.png`, `journal.png`, `achievements.png`) retained for future gallery/documentation surfaces.
- GitHub social preview configured manually via GitHub repository settings.
