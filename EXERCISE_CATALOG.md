# FitDex Exercise Catalog

## Canonical dataset

FitDex includes a comprehensive, built-in Exercise Dex dataset containing **804 unique canonical exercises** across nine muscle categories. FitDex authors and maintains tracking metadata, local persistence models, written execution instructions, migration behavior, and tactile UI presentation.

The active built-in dataset is version **4**. Every active built-in entry includes verified demonstration media. Canonical IDs follow the stable format `builtin-exercise:<slug>`. Category names do not enter IDs, ensuring category membership updates never alter canonical identity.

## Category breakdown

| Category | FitDex canonical memberships |
| --- | ---: |
| Chest | 99 |
| Back | 100 |
| Shoulders | 107 |
| Legs | 190 |
| Gluteal | 55 |
| Biceps | 54 |
| Triceps | 67 |
| Forearms | 29 |
| Abs | 104 |
| **Total** | **805** |

`split-squat-front-foot-elevated` is multi-category across Legs and Gluteal (yielding 804 unique exercises and 805 category memberships).

## Public taxonomy

The active built-in Exercise Dex categories are, in UI order: Chest, Back, Shoulders, Legs, Gluteal, Biceps, Triceps, Forearms, and Abs. Built-ins use authoritative `categories: ExerciseCategory[]` plus a stable first-membership `primaryCategory`. Search and filtering honor every membership without duplicating canonical records.

## Canonical metadata

Each definition centrally stores slug, category memberships, reliable equipment, summarized muscle metadata, tags/mechanics/laterality, media status/type, and deterministic local media path. Derived models add tracking type and movement pattern.

Tracking types:
- Bodyweight work uses `bodyweight_reps`
- Assisted work uses `assisted_bodyweight`
- Holds/stretches use `duration`
- Locomotion uses `distance_duration`
- Carries use `weight_distance`
- Loaded resistance work uses `weight_reps`

Aliases provide collision-free legacy names that resolve to mapped canonical exercises.

## Content and media

All 804 active records have FitDex-authored *How to perform* and *How it helps* guidance alongside verified demonstration media.

Demonstration media is addressed by canonical slug (`/exercises/<slug>.mp4`). In native Android builds, local video files are stripped from the packaged APK and resolved on-demand or downloaded selectively into private app storage.

## Legacy dataset migration

The legacy v2 catalog contained 399 built-ins. Upgrades to v4 map 257 legacy IDs to their exact/equivalent canonical successor, while 142 historical records are safely archived.

Upgrade behavior is fully idempotent: custom exercises remain untouched; mapped workout and favorite references move deterministically; retired workout records retain name and category snapshots.

## Validation guarantees

Automated validator commands enforce unique IDs/slugs/names, authoritative multi-category membership totals, complete instruction content, supported media types, valid MP4 containers, no missing or orphan files, deterministic legacy migration decisions, and collision-free aliases.
