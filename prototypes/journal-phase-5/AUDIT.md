# FitDex Phase 5 — Journal Production Audit

## Architecture

- `JournalPage` owns selected local date, loading/error state, help, and completed-workout subview state.
- `getJournalDay(dateKey)` derives one day from completed workouts plus Food log entries. No Journal row is created or updated.
- `calculateJournalSummary` totals session count, duration, calories, and protein. `groupFoodEntriesByMeal` always returns Breakfast, Lunch, Supper, and Dinner groups.
- `CompletedWorkoutDetail` is reused from Workout. It shows session facts, exercise/set history, saved session notes, and confirmed workout deletion.
- AppShell owns five-destination navigation, offline status, settings access, theme branding, SFX, and app-level navigation history.
- Central Back handling closes workout detail before leaving Journal. GuideDialog registers higher-priority Back handling.

## Capability inventory

| Feature | Data source | Persistence | User actions | Current UI | Dependencies / edges |
| --- | --- | --- | --- | --- | --- |
| One-day history | Completed workouts + `foodLogEntries` | Source stores only | Previous/next day | Date stepper | Local date helpers; future dates allowed |
| Daily summary | Derived day data | None | Read | Workout and nutrition summary | Missing nutrition values become zero |
| Workout history | Completed workout records | Workout stores | Open detail | Workout cards | Active/discarded workouts excluded |
| Workout detail | Workout, exercises, sets, unit setting | Source stores | Back; request deletion | Existing detail subview | Loading/error; legacy incomplete sets |
| Workout deletion | Workout graph | Destructive source mutation | Confirm/cancel/delete | Existing alert dialog | Removes downstream Journal/Home/Progress/PR evidence |
| Session notes display | Completed workout snapshot | Workout row | Read only here | Detail panel | Notes were authored during active workout |
| Food history | `foodLogEntries` snapshots | Food store | Read | Four fixed meal sections | Missing meals remain visible as “No entries” |
| Food identity | Snapshot name/category | Food row | Read | Category icon + name | Deleted category can resolve as Uncategorized |
| Nutrition totals | Food snapshots | None | Read | Day and meal totals | Calories/protein only in Journal UI |
| Help | Static guide | None | Open/close | Guide dialog | Central Back + selection SFX |
| Theme/shell | Theme provider + AppShell | Existing settings/local prefs | Navigate/settings | Production shell | Four themes, offline-first |
| Legacy JournalRecord | `journalRecords` store | Included in backup/restore | None | Not rendered | Dormant compatibility store; must not imply note support |

## Explicitly absent

- No manual Journal entry creation.
- No Journal note editor.
- No editing or deleting Food from Journal.
- No archive list, calendar picker, search, filter, tags, favorites, pins, mood, reflections, or Journal XP.
- No liveQuery. Day reload occurs when date state changes.

## Must preserve

- Read-only derived history; no duplicate Journal persistence.
- Local-date previous/next navigation and Today identity.
- Loading, error, empty, food-only, workout-only, and mixed-day states.
- Multiple completed workouts.
- Daily session/time/calorie/protein summary.
- Four meal groups, food snapshot names, category icons, Uncategorized fallback, meal totals, and missing-meal state.
- Completed workout detail, units, exercise/set history, saved session notes, confirmed deletion, and Back behavior.
- Help, selection SFX, offline shell, five-tab navigation, settings access, themes, safe areas.
- Backup compatibility remains untouched, including dormant `journalRecords`.

## State Visibility & Activity Rules

- **Empty Meal Suppression**: When a day has no food logged (`foodItemCount === 0`), empty meal chrome (Breakfast, Lunch, Supper, Dinner) is suppressed from the activity body. Food state is communicated once in the daily summary.
- **Symmetric Status Language**: Both Workout and Food status are always communicated symmetrically across all states:
  - Workout: `No workout logged` / `1 workout logged` / `{N} workouts logged`
  - Food: `No food logged` / `1 food item logged` / `{N} food items logged`
- **Activity Body Truth**:
  - Workout-Only day: Renders only completed workout card(s). No empty meal placeholders.
  - Food-Only day: Renders only non-empty meal groups. No empty workout placeholder.
  - Mixed day: Renders workout card(s) and non-empty meal groups.
  - Empty day: Renders neutral empty state explanation ("Completed workouts and logged foods appear here automatically.").

## Demo Fixture Integrity Contract

- All prototype summary numbers are strictly derived from underlying fixture arrays (`demoWorkout` and `demoFoodEntries`).
- Workout detail fixture matches summary claims:
  - Duration: 52 min (3,120 seconds).
  - Exercises: 6 full exercises.
  - Logged sets: 18 logged sets (3 per exercise).
  - Notes: Read-only session notes preserved.
- Food detail fixture matches summary claims:
  - 7 items total across 4 meals (Breakfast 2, Lunch 2, Supper 1, Dinner 2).
  - Daily totals: 1,940 kcal, 143 g protein.
  - Per-meal totals sum exactly to their child items.

## Icon Parity Reference

- **Workout Icon**: Updated from legacy square barbell glyph to the official production Lucide `Dumbbell` icon (`M17.596 12.768a2 2 0...`). Used uniformly across activity cards, detail header, Field Notes ledger rows, and AppShell bottom navigation.
- **Journal Navigation Icon**: Verified with production Lucide `NotebookTabs`.
- **Food / Meal / Category Icons**: Sourced from production WebP sprites (`/food/meals/meal-*.webp` and `/food/categories/category-*.webp`).

## V3 Field Notes Layout Reconstruction

- Replaced brittle single-line grid with robust 3-column entry structure: `36px (mark) | minmax(0, 1fr) (copy) | 32px (action)`.
- Separated title (`.ledger-title`) and metadata (`.ledger-meta`) into discrete DOM elements with dedicated line-heights and word-breaking to eliminate text collisions.
- Vertically aligned navigation chevron (`›`) and disclosure chevrons (`˅` / `˄`).
- Encapsulated expanded meal contents (`.ledger-detail`) into a clean child container with nested indentation and category sprites.

## Prototype directions

1. **Quick Capture** — fastest review of data captured automatically. Compact current-day signal, then recent evidence.
2. **Daily Log** — strongest date anchoring. Explicit workout card and populated meal cards.
3. **Field Notes** — FitDex logbook personality with dense ledger rows, clear typography, and nested meal disclosure.

All three use identical production capability boundaries.
