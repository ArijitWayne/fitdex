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

The architecture is PWA-first. Capacitor is planned for later Android packaging but is not installed.

## 3. Hosting and distribution

Cloudflare Pages is the preferred web host because FitDex is primarily a static, local-first PWA.

Planned distribution:

- Web/PWA
- Android APK downloadable directly from the FitDex website
- Optional Google Play distribution, not a requirement
- PWA-first distribution on iPhone

Core fitness data does not require a backend database.

## 4. Data ownership and portability

User fitness data is stored locally on the device through IndexedDB and Dexie. GitHub stores source code only. FitDex does not provide cloud sync.

Users should eventually be able to create a portable `.fitdex` backup and restore it on another device. They choose where the file is stored, including local Files, Google Drive, iCloud Drive, OneDrive, Dropbox, a NAS, Mac, USB storage, or another provider. A full restore should make a new device reflect the prior FitDex state.

Portable backups must preserve:

- Workouts, sets, routines, custom exercises, exercise metadata, and cardio
- Foods, meals, and nutrition history
- Measurements and PRs
- XP, level, quests, and plan streak
- Journal records
- Settings, appearance, and selected avatar
- Custom tags and categories

Architecture requirements:

- UUID-compatible stable IDs; no auto-increment IDs for user-owned records
- Database schema versioning and backup-format versioning
- Migration support for older backups
- Transactional, safe restore
- An automatic safety backup before restore
- Manual backups and automatic local backups

No cloud sync is planned.

## 5. Current database foundation

The Dexie foundation includes typed tables or models for at least:

- Settings
- Exercises and custom tags/categories
- Workout routines, workouts, workout exercises, and workout sets
- Cardio sessions
- Foods, daily nutrition/meals, and food entries
- Body measurements
- Achievements, quests, and XP history
- Journal/day records

The schema foundation exists; full business logic is not implemented.

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

- Loading: clean neutral container
- Loaded: real PNG only
- Error: existing Art Pending fallback

The fallback must never render underneath transparent portions of a successfully loaded PNG.

## 14. Gamification scope

Approved gamification includes XP, level, a Daily Quest, later weekly quests, Plan Streak, workout completion, nutrition-target completion, and PR events. Scheduled rest days count positively toward adherence and Plan Streak.

Do not add pets, animal companions, monsters, battles, inventory, fantasy currency, maps, collectible creatures, leaderboards, or social feeds without explicit approval. Achievements exist in the data foundation, but an achievement-heavy UI is not approved.

## 15. Home screen direction

The approved foundation begins with a player/avatar card showing selected avatar, faction, avatar name, archetype, level, and XP bar. It is followed by Daily Quest, Plan Streak, Nutrition Today, and Next Workout.

Nutrition Today summarizes Calories, Protein, Carbohydrates, and Fat. Do not display fantasy combat statistics such as HP, STR, ATK, DEF, or Mana.

## 16. Workout system direction

Planned functionality:

- Templates/routines and starting a workout
- Previous performance beside the current set
- Weight, reps, sets, and workout duration
- Optional warm-up, drop, and failure sets
- Rest timer
- Exercise and set notes
- Add/remove sets and replace/reorder exercises
- Large phone-friendly controls with minimal typing

An active workout should be vertically scrollable rather than split across repeated page navigation.

## 17. Exercise Dex

The planned built-in library target is approximately 400–600+ exercises initially. Core categories are Chest, Back, Shoulders, Biceps, Triceps, Forearms, Quadriceps, Hamstrings, Glutes, Calves, Adductors, Core, Traps, Neck, Full Body, Cardio, and Mobility. Detailed sub-muscle tagging is planned.

Exercise metadata should support name, aliases, primary muscle, secondary muscles, subgroup, equipment, tracking type, movement pattern, instructions, difficulty, unilateral/bilateral, and built-in/custom status.

## 18. Custom exercises and organization

Users will be able to create custom exercises with a name, primary and secondary muscles, category, subcategory, equipment, tracking type, movement, personal tags, and notes. Users may also create organizational categories/tags.

These concepts remain separate:

- Muscle supports analytics
- Equipment supports filtering
- Personal tags support organization

## 19. Exercise tracking types

Intended types:

- `weight_reps` — Chest Press
- `bodyweight_reps` — Push-up
- `assisted_bodyweight` — Assisted Pull-Up
- `reps_only`
- `duration` — Plank
- `distance_duration` — Running
- `weight_distance` — Farmer Carry
- `duration_reps`

## 20. Cardio

Cardio is a core system, not an afterthought. Planned categories include outdoor, treadmill, track, and trail running; sprints and intervals; walking, incline treadmill, and hiking; outdoor cycling, stationary bike, spin bike, air bike, and recumbent bike; rowing; elliptical; StairMaster/stair climber; swimming; jump rope; SkiErg; boxing; kickboxing; HIIT; circuit training; and battle ropes.

Possible fields include duration, distance, pace, speed, incline, resistance, calories, and heart rate.

## 21. Nutrition

Exact meal structure: Breakfast, Lunch, Supper, and Dinner.

Core tracked nutrition is Calories, Protein, Carbohydrates, and Fat. Fibre, sugar, sodium, cholesterol, and micronutrients are possible later additions. The planned local food experience includes My Foods, frequent foods, and fast logging.

USDA FoodData Central, Open Food Facts, and later barcode scanning are possible external lookup sources. External lookup is not implemented.

## 22. Progress

Planned areas:

- **Body:** weight, waist, chest, biceps, thighs, shoulders, custom measurements, and later progress photos
- **Strength:** best set, highest weight, estimated 1RM, training volume, exercise history, and PRs
- **Nutrition:** average calories/protein, target adherence, and macro consistency

## 23. Journal and history

Journal is the full chronological fitness history. A day may include a workout, exercises/sets, cardio, nutrition and its four meals, macros, body weight, measurements, rest status, notes, and XP/quest outcome.

Planned day states are workout completed, planned rest, workout skipped, and unplanned workout.

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
- Exercise Dex
- Help
- About FitDex

Data & Storage placeholders include Create Backup, Restore Backup, Automatic Backups, Backup Frequency, Backup Location, Number of Backups Retained, and Export My Data. There is no cloud sync.

## 26. PWA and mobile requirements

- Installable PWA with a service worker and offline app shell
- Mobile safe-area handling
- Primary responsive target: 360–430 px
- Touch-friendly controls and responsive desktop layout
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
- [x] Platform-adapter boundaries
- [x] Initial theme system
- [x] Navigation icon correction using Lucide
- [x] Titan/Ember prototype replaced by finalized Spartans/Amazonians system
- [x] All four theme variants refined
- [x] Avatar system, selection UI, and persistence
- [x] Avatar roster finalized
- [x] Six real avatar PNGs added manually
- [x] Transparent-background fallback bug fixed in `AvatarPortrait`
- [x] Build, lint, TypeScript, and PWA checks passing

## 29. Current development status

**Current phase:** foundation and visual-system stabilization before feature implementation.

Major business features are not implemented. Likely next work:

1. Final visual QA
2. First manual Git commit
3. Exercise Dex architecture and browser UX
4. Exercise dataset
5. Workout logging

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
