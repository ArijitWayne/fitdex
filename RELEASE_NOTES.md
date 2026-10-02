# FitDex Release Notes

## v2.0.1

Released: October 2, 2026
Android versionCode: 7

### Fixes

- **Android Update Downloads:** Fixed an issue where updates could fail when the updater cache folder already existed.
- **Update Retry Reliability:** Retry Download now safely replaces incomplete update files before downloading again.

### Release Info

- Version: 2.0.1
- Version Code: 7
- Package ID: com.fitdex.app
- APK: fitdex.2.0.1.apk

---

## v2.0.0

Released: October 2, 2026
Android versionCode: 6

### New Features

- **Unified Retro Handheld Shell:** Redesigned the core app with a unified, tactile retro handheld interface across all screens.
- **Standalone Exercise Codex:** Added a dedicated codex library with fast search, muscle anatomy cards, and movement records.
- **Journal Field Notes:** Added a dual-dimension activity ledger showing completed workouts and logged meals side by side.
- **Settings Command Hub:** Added a centralized settings hub with avatar management, nutrition calculators, and media controls.
- **Active Drag-and-Drop Reordering:** Added drag-and-drop exercise reordering during active workouts without altering saved routines.

### Improvements

- **Refined 802-Movement Catalog:** Audited and standardized the exercise library to 802 movements with detailed execution instructions.
- **Remote On-Demand Media:** Streamlined demonstration videos through on-demand CDN streaming, significantly reducing app installation size.
- **Exercise Detail Hierarchy:** Restructured exercise record pages to highlight target muscles and tracking methods before instructions.
- **Food & Nutrition Daily Hub:** Streamlined the nutrition overview with macronutrient progress bars, quick logging, and smart suggestions.
- **Workout & Routine Engine:** Polished active session logging, rest timer continuity, and added confirmation guards for set deletion.
- **Progress & Character Analytics:** Enhanced tonnage calculations, period trend comparisons, and multi-metric personal record archives.
- **Faction-Aware Visual System:** Polished Spartan and Amazonian color themes, high-contrast dark and light modes, and tactile styling.
- **Local-First Data Integrity:** Maintained 100% on-device database persistence and seamless backup/restore compatibility.

### Fixes

- **Exercise Tracking Methods:** Resolved tracking-method mismatches that could prevent logging sets on specific movement types.
- **Exercise Catalog & Media Cleanup:** Fixed catalog inconsistencies, duplicate aliases, broken slugs, and outdated demonstration links.
- **Workout Session Isolation:** Prevented in-session exercise reordering and set adjustments from overwriting saved routine templates.
- **Journal Activity Ledger Display:** Fixed empty meal cards incorrectly appearing on workout-only days in the activity ledger.
- **Equipment & Instruction Fallbacks:** Corrected equipment classification and instruction fallbacks for legacy or custom exercises.
- **Navigation & Scroll Stability:** Fixed view-transition flicker and preserved scroll position when switching tabs and filters.

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
