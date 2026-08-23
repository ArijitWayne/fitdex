# FitDex Exercise Catalog

## Active canonical strategy

SmartWorkout is the built-in Exercise Dex source of truth as of Phase 1I.1. FitDex takes canonical display names, exercise-page identity, media identity, and muscle-category membership from the live English SmartWorkout exercise library; FitDex owns tracking metadata, local persistence, written guidance, migration behavior, and UI presentation.

The active built-in dataset is version **4** and contains **804 unique canonical exercises**. Every active built-in requires a verified SmartWorkout demonstration. IDs use `builtin-exercise:<normalized-smartworkout-page-slug>`; the remaining 804 IDs are unchanged from v3. Category names never enter IDs, so a category change does not alter identity. The exact inventory and source/media mapping is maintained in `EXERCISE_CONTENT_TRACKER.md`.

## Source crawl snapshot

| Category | Raw SmartWorkout entries | FitDex canonical memberships |
| --- | ---: | ---: |
| Chest | 103 | 99 |
| Back | 103 | 100 |
| Shoulders | 108 | 107 |
| Legs | 191 | 190 |
| Gluteal | 58 | 55 |
| Biceps | 56 | 54 |
| Triceps | 68 | 67 |
| Forearms | 30 | 29 |
| Abs | 107 | 104 |
| **Total** | **824** | **805** |

The live library root uses `/en/exercise-library/gluteus` (the supplied `/gluteal` path returns 404); FitDex still presents the approved user-facing label Gluteal. The source pages contain 11 repeated slug/name pairs. Because those repeats resolve to the same exercise-page URL and one selected page asset, they are not duplicated as canonical exercises. Of the 813 source page identities and 814 deduplicated memberships, nine pages without a demonstration are retired in v4, leaving 804 active identities and 805 active memberships. `split-squat-front-foot-elevated` is the current multi-category example (Legs and Gluteal).

## Public taxonomy

The only active built-in Exercise Dex categories are, in UI order: Chest, Back, Shoulders, Legs, Gluteal, Biceps, Triceps, Forearms, and Abs. Built-ins use authoritative `categories: ExerciseCategory[]` plus a stable first-membership `primaryCategory`/compatibility `category`. Search and filters honor every membership without duplicating the canonical record.

## Canonical metadata

Each SmartWorkout definition centrally stores source slug, all source record IDs collapsed into that page identity, source page(s), category memberships, reliable equipment, summarized muscle metadata, tags/mechanics/laterality, media status/type/source URL, and deterministic local media path. The derived FitDex exercise adds tracking type and movement pattern.

Tracking is not globally Weight + Reps: bodyweight work uses bodyweight reps, assisted work uses assisted reps, holds/stretches use duration, locomotion uses distance/time, carries use weight/distance, and externally loaded resistance work uses weight/reps.

Aliases are limited to collision-free legacy names that help users find a mapped v2 exercise. No legacy alias may shadow a v3 canonical name. Current validator results enforce zero canonical-name, active source-slug, alias, or alias-vs-canonical collisions.

## Content and media

All 804 active records have FitDex-authored How to perform and How it helps content and a verified MP4 demonstration. The nine SmartWorkout pages that provide no exercise-media element were retired from the active catalog in v4; their archived records preserve history. No GIF or animated WebP was encountered in this crawl, though both remain supported by the renderer.

Media is stored temporarily in `public/exercises/`, addressed by canonical slug, excluded from the PWA precache, and rendered only for the selected detail. Cloudflare remains a future on-demand hosting migration and was not implemented in Phase 1I.

## Version-2 migration

The legacy v2 catalog contained 399 built-ins, including 213 without usable media. Phase 1I treats all 399 as migration input rather than current canon: 257 old IDs have an explicit Exact/Equivalent successor; 142 have no high-confidence successor. The 213 previous non-media records reconcile as 71 mapped to a live SmartWorkout canonical identity plus 142 retired. All 186 previous media-backed records have a successor.

The Dexie schema and built-in dataset are version 4. Upgrade behavior is idempotent: the nine v3 media-less records are archived; custom exercises stay unchanged; mapped workout/favourite references move deterministically; retired workout rows retain name/category snapshots; notes and tags are preserved; retired favourites are deactivated without deleting their preference record. There are currently no implemented plan tables beyond the schema’s workout structures.

## Validation guarantees

The validation commands enforce unique IDs/slugs/names, authoritative multi-category membership totals, complete content, supported media types, valid local MP4 containers, no missing or orphan files, deterministic 399-entry legacy decisions, valid successor targets, and collision-free aliases. Migration tests cover fresh install, v2 replacement, mapped history, retired history snapshots, custom references, mapped favourites, retired favourites, and idempotence.

## Historical context

Dataset version 2’s 399 FitDex-curated records, nine older categories, and 91-alias count are retired historical baselines. They are not active v3 catalog requirements. Phase 1H ended with 186 MP4 assets and 213 written-only gaps; Phase 1I supersedes that catalog with the complete live SmartWorkout page inventory.
