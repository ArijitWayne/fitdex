# FitDex Release Notes

## v2.0.0

Released: October 2, 2026  
Android versionCode: 6

### New Features

- **Unified Retro Handheld Shell**: Comprehensive UI modernization across Home, Workout, Food, Journal, Progress, and Settings inside a tactile shared page frame.
- **Standalone Exercise Codex**: Dedicated RPG Codex library with persistent search, theme-family muscle anatomy cards, and reference-first exercise detail records.
- **Journal Field Notes**: Symmetric dual-dimension daily activity ledger displaying completed workouts and logged meals with empty-state suppression.
- **Settings Command Hub**: Modular settings center with active avatar hero, evidence-based nutrition target calculators, and offline media controls.
- **Active Drag-and-Drop Reordering**: Dedicated touch-friendly exercise reordering engine for active workout sessions without mutating saved routine templates.

### Improvements

- **Refined 802-Movement Catalog**: Cleaned and validated the Exercise Dex catalog to 802 active canonical movements with comprehensive instructions and muscle targets.
- **Remote On-Demand Media Architecture**: Moved video demonstrations to remote CDN streaming with Android caching, drastically reducing APK and app installation size.
- **Exercise Detail Hierarchy**: Reordered Exercise Record structure to present verified facts (muscles, equipment, tracking method) directly before execution instructions.
- **Food & Nutrition Daily Hub**: Streamlined Goal-First daily overview with macronutrient bars, recent/frequent suggestions, and rapid one-tap Quick Log.
- **Workout & Routine Engine**: Refined active workout logger, separated set deletion controls with confirmation guards, and enhanced rest timer continuity.
- **Progress & Character Analytics**: Cleaned period comparisons (7D, 30D, 90D, All), accurate resistance volume tonnage metrics, and multi-metric Personal Record archives.
- **Faction-Aware Visual System**: Refined Spartan and Amazonian palettes, crisp typography, Style B Pixel Command tactile controls, and high-contrast Dark and Light modes.
- **Local-First Data Integrity**: Maintained 100% on-device Dexie persistence and full backward compatibility for `.fitdex` backup and restore archives.

### Fixes

- **Exercise Tracking Methods**: Fixed tracking-method mismatches and edge cases that previously prevented logging sets on specific exercise types.
- **Exercise Catalog & Media Cleanup**: Resolved catalog inconsistencies, duplicate aliases, broken slugs, and outdated demonstration links.
- **Workout Session Isolation**: Ensured active session reordering and set modifications remain strictly isolated to the active session without affecting saved routines.
- **Journal Activity Ledger Display**: Fixed empty meal card rendering on workout-only days by properly suppressing unpopulated meal groups.
- **Equipment & Instruction Fallbacks**: Fixed equipment typing and execution instruction fallbacks for custom and legacy exercises.
- **Navigation & Scroll Stability**: Resolved view-transition jitter and preserved viewport scroll position during in-page tab and filter switching.

### Release Info

- Version: 2.0.0
- Version Code: 6
- Package ID: com.fitdex.app
- Exercise Dex: 802 active movements
- APK: fitdex.2.0.0.apk
- SHA-256: 8ffb3d512c57db443a65757303abd228c34886164efc56d8316a32b98f647f67

### Upgrade Notice

FitDex 1.x is no longer supported. Upgrade to FitDex 2.0+ for the current Exercise Dex and tracking system.

---

## v1.1.1

Released: September 27, 2026
Android versionCode: 5

### FIXES

- Android updates now download directly inside FitDex instead of handing APK downloads off to the browser.
- Added reliable in-app download progress, SHA-256 verification, retry handling, and native Android installer launch.
- Improved handling for Android's "Install unknown apps" permission flow.

---

## v1.1.0

Released: September 27, 2026  
Android versionCode: 4

### RELEASE HIGHLIGHTS

Smarter Weekly Plans and streak handling pair with a stronger Active Workout experience. Reliability fixes protect XP and backup restoration from duplicate historical rewards.

### NEW

- Notifications V1: optional update, planned-workout, and calorie-target reminders with local scheduling, faction-aware branding, and custom FitDex category sounds.
- Weekly Plan learns from workouts completed on previously unplanned training days.
- Saved-routine workouts can assign that routine to the matching weekday.
- Ad-hoc workouts can establish a generic Workout Day without creating a routine.
- Open HOW TO PERFORM from an active workout exercise menu.
- Reorder active-workout exercises with drag and drop without changing saved routines.
- Open Exercise Notes directly from the exercise action menu.
- Delete individual workout sets from their set row.

### IMPROVEMENTS

- Weekly Plan now shows completed days more clearly.
- Unplanned-workout feedback explains automatic schedule updates.
- Rest Day workouts can count toward a dated streak without changing the recurring Rest Day.
- Timer guidance follows Start Timer, Pause Timer, then Rest Timer.
- Start Rest Timer directly and see its active state clearly.
- Active Workout controls and Sets Logged display work better on narrow screens.
- Exercise reorder uses a touch-friendly drag handle while page scrolling remains available.
- Exercise instructions return directly to the running workout and preserve continuity.
- Set deletion sits beside its set instead of in the exercise menu.
- Log and Delete have separate mobile touch areas.
- Weekly Plan edits no longer use an annual edit or streak-reset restriction.
- Personalized calorie targets apply a safe deficit floor clamped by maximum bodyweight-loss rate (approx 0.75%/week) while maintaining TDEE and surplus standards.

### FIXES

- Fixed completed historical workouts not receiving Plan Streak credit.
- Fixed repeated historical reconciliation crediting the same day more than once.
- Fixed backup restoration paths that could duplicate XP, levels, achievements, or personal-record rewards.
- Fixed restored historical workouts receiving fresh workout or personal-record XP.
- Fixed achievement reconciliation restoring unlocks with historical XP rewards.
- Fixed food reconciliation timestamps so repeated reconciliation remains deterministic.
- Fixed TAP COPY values disappearing after navigation or refresh.
- Fixed Active Workout set and progress controls distorting on narrow screens.
- Fixed Rest Timer guidance appearing outside intended onboarding sequence.
- Fixed active-workout exercise reorder persistence.
- Fixed per-set trash control overlapping Log control.
- Fixed HOW TO PERFORM fallback equipment typing for custom and legacy exercises.

---

## v1.0.0

Released: September 21, 2026  
Android versionCode: 3  
APK: `fitdex.1.0.0.apk`  
SHA-256: `cd97b77e97c79e9a0abebaee4e687cccf88d402566736a0f411c31e9a5638400`  
Release: [v1.0.0](https://github.com/ArijitWayne/fitdex/releases/tag/v1.0.0)

### NEW

- Build workout routines, log sets, track active training time, and use independent rest timers.
- Browse 802 exercises with instructions, muscle targets, and on-demand Android demonstrations.
- Log meals, nutrition targets, progress, personal records, journal entries, achievements, and RPG progression.
- Keep fitness data on-device with local storage and portable `.fitdex` backup and restore.
- Choose Spartan or Amazonian themes with light, dark, and system brightness modes.

### IMPROVEMENTS

- Added native splash, cold-start boot sequence, update checks, and adaptive faction launcher branding.
- Exercise MP4 files stay out of the APK and download only when requested.

### FIXES

- No separate fixes listed for this release.

<!-- Future releases: use Status or Released, Android versionCode, then NEW, IMPROVEMENTS, and FIXES. -->
