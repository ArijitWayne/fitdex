# FitDex Release Notes

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
- Browse 804 exercises with instructions, muscle targets, and on-demand Android demonstrations.
- Log meals, nutrition targets, progress, personal records, journal entries, achievements, and RPG progression.
- Keep fitness data on-device with local storage and portable `.fitdex` backup and restore.
- Choose Spartan or Amazonian themes with light, dark, and system brightness modes.

### IMPROVEMENTS

- Added native splash, cold-start boot sequence, update checks, and adaptive faction launcher branding.
- Exercise MP4 files stay out of the APK and download only when requested.

### FIXES

- No separate fixes listed for this release.

<!-- Future releases: use Status or Released, Android versionCode, then NEW, IMPROVEMENTS, and FIXES. -->
