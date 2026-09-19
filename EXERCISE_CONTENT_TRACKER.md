# Exercise Content Tracker

This is the authoritative Phase 1I.1 checker for the active FitDex-derived built-in Exercise Dex. The previous 399-record / 186-media / 213-gap state is migration history, not the active catalog.

## Active snapshot

- Live crawl: 2026-08-23T10:32:26.633Z
- Built-in dataset version: 4
- Raw FitDex category-page entries: 824
- Active FitDex page identities after required slug deduplication and v4 retirement: 804
- Active canonical category memberships after v4 retirement: 805
- Content complete: 804 / 804
- Verified local media: 804 MP4; 0 GIF; 0 animated WebP
- Active FitDex pages with no media element: 0
- Declared source assets unavailable/broken: 0
- Local media: 695,871,888 bytes (663.64 MiB)
- Legacy v2 IDs mapped to v3 successors: 257
- Legacy v2 records retired without successor: 142
- New FitDex identities not represented by a mapped legacy record: 561

## Category crawl and canonical membership counts

| Category | Raw live page entries | Canonical memberships | Duplicate entries removed |
| --- | ---: | ---: | ---: |
| Chest | 103 | 99 | 1 |
| Back | 103 | 100 | 2 |
| Shoulders | 108 | 107 | 1 |
| Legs | 191 | 190 | 1 |
| Gluteal | 58 | 55 | 2 |
| Biceps | 56 | 54 | 0 |
| Triceps | 68 | 67 | 1 |
| Forearms | 30 | 29 | 1 |
| Abs | 107 | 104 | 1 |

FitDex’s raw page counters include 11 repeated slug/name pairs. Ten repeat inside one category; `split-squat-front-foot-elevated` repeats across Legs and Gluteal. Fetching every colliding URL showed one addressable page asset per slug, so FitDex follows the approved page-slug identity rule. Phase 1I.1 then retires the nine page identities without usable media, leaving 804 active canonical records and 805 active memberships.

## Duplicate FitDex page identities reconciled

| Canonical slug | Source record IDs collapsed | Categories retained | Selected page asset |
| --- | --- | --- | --- |
| `cable-neutral-grip-lat-pulldown` | `25472b18-efdc-438a-a2c2-ab72994be361`<br>`cc39d401-ea05-f723-0500-64bbe65b589d` | Back | [MP4](Local / CDN Media) |
| `dumbbell-seated-triceps-extension` | `9481d369-1493-4a72-b758-e0c1870c9b1d`<br>`c4aa256a-753d-4b96-88fc-5c52907c648a` | Triceps | [MP4](Local / CDN Media) |
| `dumbbell-single-leg-hip-thrust` | `0b59dd85-d65d-4e28-bad1-2a74fc204504`<br>`81c28cab-ffcc-44f7-8869-7e0979e5a145` | Gluteal | [MP4](Local / CDN Media) |
| `hip-thrust` | `5246f266-003c-7ce5-6be0-283f2136321e`<br>`7ce01b32-14e6-4185-b499-137ba4f99177` | Gluteal | [MP4](Local / CDN Media) |
| `machine-chest-press` | `81112d74-4711-4ddc-9145-a610bf8407c8`<br>`da6b09eb-e55d-42cd-988d-1454658c1a4f` | Chest | [MP4](Local / CDN Media) |
| `one-arm-cable-half-kneeling-lat-pulldown` | `6f1920ff-322b-43c3-8f4f-901be5cd3679`<br>`ed6f4b1d-e657-4a9d-993c-d06254b600e0` | Back | [MP4](Local / CDN Media) |
| `one-arm-cable-lateral-raise` | `0ea2687b-5d78-4041-8ad4-66a6a8848da1`<br>`9532a115-3b01-43cf-96bb-f8c07cee7089` | Shoulders | [MP4](Local / CDN Media) |
| `smith-calf-raises` | `78659ec5-a814-4734-9e3d-ee3e784b71b3`<br>`b7ec6aa3-d3da-4b35-974a-c50c7eb08794` | Legs | [MP4](Local / CDN Media) |
| `split-squat-front-foot-elevated` | `35cd3180-abe9-417b-aebb-816d8ff6392a`<br>`4050cda9-d73a-4b37-a97e-3beaa3615d2f` | Legs, Gluteal | [MP4](Local / CDN Media) |
| `unilateral-farmer-walk` | `8d0b122e-3029-4722-a56a-9b9aa76575bf`<br>`ed9b5a18-18d0-4d80-bb07-b67f0ad96663` | Forearms | [MP4](Local / CDN Media) |
| `v-up` | `67fa769c-8cc6-497a-b27e-5355bc085b3c`<br>`9181ee11-473b-4ea3-9435-31ff0ec7e39f` | Abs | [MP4](Local / CDN Media) |

## Removed in v4 — No FitDex Demonstration

- Alternate Biceps Curl
- Band Russian Twist
- Bottom up rotation
- Concentration Hammer Curl
- KAS Glute Bridge
- Kneeling Ring Push-Up
- Pull Around
- Spoto Press
- Standing Incline Band Chest Fly

Reason: FitDex page exists, but no usable demonstration media is provided. FitDex v4 requires a verified demonstration for every active built-in exercise. The corresponding built-in records are archived during seeding so workout-history snapshots remain displayable.

## Active canonical content/media inventory (804)

| FitDex ID | FitDex name | Categories | Source page | Source media | Type / status | Local path | Bytes | Copy |
| --- | --- | --- | --- | --- | --- | --- | ---: | --- |
| `builtin-exercise:90-to-90-stretch` | 90 To 90 Stretch | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/90-to-90-stretch.mp4` | 560956 | Ready |
| `builtin-exercise:ab-wheel-rollout` | Ab Wheel Rollout | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/ab-wheel-rollout.mp4` | 1405447 | Ready |
| `builtin-exercise:abdominal-crunches` | Abdominal Crunches | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/abdominal-crunches.mp4` | 924325 | Ready |
| `builtin-exercise:abdominal-vaccum` | Abdominal Vaccum | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/abdominal-vaccum.mp4` | 295825 | Ready |
| `builtin-exercise:air-bike` | Air Bike | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/air-bike.mp4` | 2381954 | Ready |
| `builtin-exercise:alternate-bent-over-dumbbell-reverse-fly` | Alternate Bent Over Dumbbell Reverse Fly | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/alternate-bent-over-dumbbell-reverse-fly.mp4` | 731408 | Ready |
| `builtin-exercise:alternate-dumbbell-hammer-curl` | Alternate Dumbbell Hammer Curl | Biceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/alternate-dumbbell-hammer-curl.mp4` | 1041893 | Ready |
| `builtin-exercise:alternate-renegade-row` | Alternate Renegade Row | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/alternate-renegade-row.mp4` | 2027846 | Ready |
| `builtin-exercise:anderson-squat` | Anderson Squat | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/anderson-squat.mp4` | 765469 | Ready |
| `builtin-exercise:ankle-taps` | Ankle Taps | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/ankle-taps.mp4` | 1315192 | Ready |
| `builtin-exercise:archer-push-up` | Archer Push-Up | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/archer-push-up.mp4` | 1270304 | Ready |
| `builtin-exercise:arm-blaster-biceps-dumbbell-curl` | Arm Blaster Biceps Dumbbell Curl | Biceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/arm-blaster-biceps-dumbbell-curl.mp4` | 642172 | Ready |
| `builtin-exercise:arm-circle` | Arm Circle | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/arm-circle.mp4` | 734846 | Ready |
| `builtin-exercise:arm-circles` | Arm Circles | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/arm-circles.mp4` | 707492 | Ready |
| `builtin-exercise:assault-air-bike` | Assault Air Bike | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/assault-air-bike.mp4` | 1050439 | Ready |
| `builtin-exercise:assisted-machine-dips` | Assisted Machine Dips | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/assisted-machine-dips.mp4` | 700450 | Ready |
| `builtin-exercise:assisted-pistol-squat` | Assisted Pistol Squat | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/assisted-pistol-squat.mp4` | 758477 | Ready |
| `builtin-exercise:assisted-pull-up` | Assisted Pull-Up | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/assisted-pull-up.mp4` | 669535 | Ready |
| `builtin-exercise:australian-pull-up-underhand-grip` | Australian Pull-Up Underhand Grip | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/australian-pull-up-underhand-grip.mp4` | 685705 | Ready |
| `builtin-exercise:b-stance-romanian-deadlift` | B Stance Romanian Deadlift | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/b-stance-romanian-deadlift.mp4` | 886591 | Ready |
| `builtin-exercise:back-extension` | Back Extension | Gluteal | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/back-extension.mp4` | 827632 | Ready |
| `builtin-exercise:back-extension-with-dumbbell` | Back Extension With Dumbbell | Gluteal | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/back-extension-with-dumbbell.mp4` | 770417 | Ready |
| `builtin-exercise:back-lever` | Back Lever | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/back-lever.mp4` | 627742 | Ready |
| `builtin-exercise:band-assisted-pull-up` | Band Assisted Pull Up | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/band-assisted-pull-up.mp4` | 712543 | Ready |
| `builtin-exercise:band-bench-chest-press` | Band Bench Chest Press | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/band-bench-chest-press.mp4` | 828062 | Ready |
| `builtin-exercise:band-bent-over-lat-pulldown` | Band Bent Over Lat Pulldown | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/band-bent-over-lat-pulldown.mp4` | 527193 | Ready |
| `builtin-exercise:band-biceps-curl` | Band Biceps Curl | Biceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/band-biceps-curl.mp4` | 646085 | Ready |
| `builtin-exercise:band-bicycle-crunches` | Band Bicycle Crunches | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/band-bicycle-crunches.mp4` | 809416 | Ready |
| `builtin-exercise:band-chest-fly` | Band Chest Fly | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/band-chest-fly.mp4` | 623083 | Ready |
| `builtin-exercise:band-half-kneeling-chop` | Band Half Kneeling Chop | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/band-half-kneeling-chop.mp4` | 589030 | Ready |
| `builtin-exercise:band-hammer-curl` | Band Hammer Curl | Biceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/band-hammer-curl.mp4` | 719574 | Ready |
| `builtin-exercise:band-high-anchor-wide-row` | Band High Anchor Wide Row | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/band-high-anchor-wide-row.mp4` | 570786 | Ready |
| `builtin-exercise:band-hip-abduction` | Band Hip Abduction | Gluteal | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/band-hip-abduction.mp4` | 542352 | Ready |
| `builtin-exercise:band-kneeling-twisting-crunch` | Band Kneeling Twisting Crunch | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/band-kneeling-twisting-crunch.mp4` | 670362 | Ready |
| `builtin-exercise:band-lateral-raise` | Band Lateral Raise | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/band-lateral-raise.mp4` | 769001 | Ready |
| `builtin-exercise:band-lying-clamshells` | Band Lying Clamshells | Gluteal | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/band-lying-clamshells.mp4` | 573707 | Ready |
| `builtin-exercise:band-lying-leg-curl` | Band Lying Leg Curl | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/band-lying-leg-curl.mp4` | 705958 | Ready |
| `builtin-exercise:band-pallof-press` | Band Pallof Press | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/band-pallof-press.mp4` | 550756 | Ready |
| `builtin-exercise:band-pass-through-shoulders` | Band Pass Through Shoulders | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/band-pass-through-shoulders.mp4` | 936070 | Ready |
| `builtin-exercise:band-pulldown-behind-neck` | Band Pulldown Behind Neck | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/band-pulldown-behind-neck.mp4` | 554077 | Ready |
| `builtin-exercise:band-reverse-hyperextension` | Band Reverse Hyperextension | Gluteal | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/band-reverse-hyperextension.mp4` | 1085808 | Ready |
| `builtin-exercise:band-shoulder-press` | Band Shoulder Press | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/band-shoulder-press.mp4` | 664947 | Ready |
| `builtin-exercise:band-squat` | Band Squat | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/band-squat.mp4` | 1011354 | Ready |
| `builtin-exercise:band-standing-balance-glute-kickback` | Band Standing Balance Glute Kickback | Gluteal | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/band-standing-balance-glute-kickback.mp4` | 655098 | Ready |
| `builtin-exercise:band-standing-crunches` | Band Standing Crunches | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/band-standing-crunches.mp4` | 731844 | Ready |
| `builtin-exercise:band-standing-side-bend` | Band Standing Side Bend | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/band-standing-side-bend.mp4` | 689416 | Ready |
| `builtin-exercise:band-standing-twisting-crunches` | Band Standing Twisting Crunches | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/band-standing-twisting-crunches.mp4` | 761604 | Ready |
| `builtin-exercise:band-triceps-pushdown` | Band Triceps Pushdown | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/band-triceps-pushdown.mp4` | 433901 | Ready |
| `builtin-exercise:band-twist-horizontal` | Band Twist (horizontal) | Abs | [Page](FitDex Exercise Catalog)) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/band-twist-horizontal.mp4` | 623149 | Ready |
| `builtin-exercise:band-upright-row` | Band Upright Row | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/band-upright-row.mp4` | 787122 | Ready |
| `builtin-exercise:band-warm-up-dynamic-shoulder-stretch` | Band Warm-Up Dynamic Shoulder Stretch | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/band-warm-up-dynamic-shoulder-stretch.mp4` | 748673 | Ready |
| `builtin-exercise:banded-face-pull` | Banded Face Pull | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/banded-face-pull.mp4` | 526822 | Ready |
| `builtin-exercise:bar-cable-biceps-curl` | Bar Cable Biceps Curl | Biceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/bar-cable-biceps-curl.mp4` | 556835 | Ready |
| `builtin-exercise:barbell-behind-neck-shoulder-press` | Barbell Behind Neck Shoulder Press | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/barbell-behind-neck-shoulder-press.mp4` | 637065 | Ready |
| `builtin-exercise:barbell-bench-press` | Barbell Bench Press | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/barbell-bench-press.mp4` | 824066 | Ready |
| `builtin-exercise:barbell-bench-press-with-chains` | Barbell Bench Press with Chains | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/barbell-bench-press-with-chains.mp4` | 1087585 | Ready |
| `builtin-exercise:barbell-bent-over-row` | Barbell Bent Over Row | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/barbell-bent-over-row.mp4` | 841967 | Ready |
| `builtin-exercise:barbell-bent-over-row-from-pin` | Barbell Bent Over Row From Pin | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/barbell-bent-over-row-from-pin.mp4` | 481974 | Ready |
| `builtin-exercise:barbell-bulgarian-squat` | Barbell Bulgarian Squat | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/barbell-bulgarian-squat.mp4` | 910627 | Ready |
| `builtin-exercise:barbell-calf-raise` | Barbell Calf Raise | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/barbell-calf-raise.mp4` | 712987 | Ready |
| `builtin-exercise:barbell-cossack-squat` | Barbell Cossack Squat | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/barbell-cossack-squat.mp4` | 2103501 | Ready |
| `builtin-exercise:barbell-drag-curl` | Barbell Drag Curl | Biceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/barbell-drag-curl.mp4` | 670826 | Ready |
| `builtin-exercise:barbell-floor-press` | Barbell Floor Press | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/barbell-floor-press.mp4` | 1110672 | Ready |
| `builtin-exercise:barbell-front-raise` | Barbell Front Raise | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/barbell-front-raise.mp4` | 896033 | Ready |
| `builtin-exercise:barbell-glute-bridge` | Barbell Glute Bridge | Gluteal | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/barbell-glute-bridge.mp4` | 1405922 | Ready |
| `builtin-exercise:barbell-good-morning` | Barbell Good Morning | Gluteal | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/barbell-good-morning.mp4` | 1032366 | Ready |
| `builtin-exercise:barbell-hack-squat` | Barbell Hack Squat | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/barbell-hack-squat.mp4` | 1038817 | Ready |
| `builtin-exercise:barbell-incline-wide-grip-row` | Barbell Incline Wide Grip Row | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/barbell-incline-wide-grip-row.mp4` | 654173 | Ready |
| `builtin-exercise:barbell-larsen-press` | Barbell Larsen Press | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/barbell-larsen-press.mp4` | 812376 | Ready |
| `builtin-exercise:barbell-narrow-grip-upright-row` | Barbell Narrow Grip Upright Row | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/barbell-narrow-grip-upright-row.mp4` | 628091 | Ready |
| `builtin-exercise:barbell-overhead-press` | Barbell Overhead Press | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/barbell-overhead-press.mp4` | 657623 | Ready |
| `builtin-exercise:barbell-overhead-squat` | Barbell Overhead Squat | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/barbell-overhead-squat.mp4` | 864896 | Ready |
| `builtin-exercise:barbell-preacher-curl` | Barbell Preacher Curl | Biceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/barbell-preacher-curl.mp4` | 844402 | Ready |
| `builtin-exercise:barbell-prone-incline-curl` | Barbell Prone Incline Curl | Biceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/barbell-prone-incline-curl.mp4` | 1004535 | Ready |
| `builtin-exercise:barbell-pullover` | Barbell Pullover | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/barbell-pullover.mp4` | 1152728 | Ready |
| `builtin-exercise:barbell-push-press` | Barbell Push Press | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/barbell-push-press.mp4` | 842135 | Ready |
| `builtin-exercise:barbell-rack-pull` | Barbell Rack Pull | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/barbell-rack-pull.mp4` | 874362 | Ready |
| `builtin-exercise:barbell-rear-delt-raise` | Barbell Rear Delt Raise | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/barbell-rear-delt-raise.mp4` | 596004 | Ready |
| `builtin-exercise:barbell-rear-delt-row` | Barbell Rear Delt Row | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/barbell-rear-delt-row.mp4` | 894473 | Ready |
| `builtin-exercise:barbell-rear-lunge-on-step` | Barbell Rear Lunge On Step | Gluteal | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/barbell-rear-lunge-on-step.mp4` | 871092 | Ready |
| `builtin-exercise:barbell-reverse-grip-bent-over-row` | Barbell Reverse Grip Bent Over Row | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/barbell-reverse-grip-bent-over-row.mp4` | 892840 | Ready |
| `builtin-exercise:barbell-reverse-grip-forearm-curl` | Barbell Reverse Grip Forearm Curl | Forearms | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/barbell-reverse-grip-forearm-curl.mp4` | 696911 | Ready |
| `builtin-exercise:barbell-reverse-lunges` | Barbell Reverse Lunges | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/barbell-reverse-lunges.mp4` | 970049 | Ready |
| `builtin-exercise:barbell-reverse-wrist-curl` | Barbell Reverse Wrist Curl | Forearms | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/barbell-reverse-wrist-curl.mp4` | 583954 | Ready |
| `builtin-exercise:barbell-rollout-kneeling` | Barbell Rollout - Kneeling | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/barbell-rollout-kneeling.mp4` | 1619979 | Ready |
| `builtin-exercise:barbell-shoulder-grip-upright-row` | Barbell Shoulder Grip Upright Row | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/barbell-shoulder-grip-upright-row.mp4` | 643835 | Ready |
| `builtin-exercise:barbell-shoulder-shrug` | Barbell Shoulder Shrug | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/barbell-shoulder-shrug.mp4` | 490357 | Ready |
| `builtin-exercise:barbell-shrug-behind-the-back` | Barbell Shrug Behind The Back | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/barbell-shrug-behind-the-back.mp4` | 471260 | Ready |
| `builtin-exercise:barbell-split-squat` | Barbell Split Squat | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/barbell-split-squat.mp4` | 866187 | Ready |
| `builtin-exercise:barbell-squat` | Barbell Squat | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/barbell-squat.mp4` | 959468 | Ready |
| `builtin-exercise:barbell-standing-back-wrist-curl` | Barbell Standing Back Wrist Curl | Forearms | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/barbell-standing-back-wrist-curl.mp4` | 448874 | Ready |
| `builtin-exercise:barbell-standing-twist` | Barbell Standing Twist | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/barbell-standing-twist.mp4` | 1540725 | Ready |
| `builtin-exercise:barbell-standing-wrist-curl` | Barbell Standing Wrist Curl | Forearms | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/barbell-standing-wrist-curl.mp4` | 418936 | Ready |
| `builtin-exercise:barbell-step-up` | Barbell Step-up | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/barbell-step-up.mp4` | 801366 | Ready |
| `builtin-exercise:barbell-straight-leg-deadlift` | Barbell Straight Leg Deadlift | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/barbell-straight-leg-deadlift.mp4` | 1083886 | Ready |
| `builtin-exercise:barbell-sumo-squat` | Barbell Sumo Squat | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/barbell-sumo-squat.mp4` | 1013359 | Ready |
| `builtin-exercise:barbell-thruster` | Barbell Thruster | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/barbell-thruster.mp4` | 909178 | Ready |
| `builtin-exercise:barbell-walking-lunges` | Barbell Walking Lunges | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/barbell-walking-lunges.mp4` | 825481 | Ready |
| `builtin-exercise:barbell-wall-curl` | Barbell Wall Curl | Biceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/barbell-wall-curl.mp4` | 670703 | Ready |
| `builtin-exercise:barbell-wide-grip-upright-row` | Barbell Wide Grip Upright Row | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/barbell-wide-grip-upright-row.mp4` | 612569 | Ready |
| `builtin-exercise:barbell-wrist-curl` | Barbell Wrist Curl | Forearms | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/barbell-wrist-curl.mp4` | 601759 | Ready |
| `builtin-exercise:bayesian-cable-curl` | Bayesian Cable Curl | Biceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/bayesian-cable-curl.mp4` | 588508 | Ready |
| `builtin-exercise:bayesian-cable-curl-face-away` | Bayesian Cable Curl (Face Away) | Biceps | [Page](FitDex Exercise Catalog)) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/bayesian-cable-curl-face-away.mp4` | 615889 | Ready |
| `builtin-exercise:bayesian-cable-curl-seated` | Bayesian Cable Curl Seated | Biceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/bayesian-cable-curl-seated.mp4` | 588532 | Ready |
| `builtin-exercise:bear-plank` | Bear Plank | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/bear-plank.mp4` | 774577 | Ready |
| `builtin-exercise:bench-front-squat` | Bench Front Squat | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/bench-front-squat.mp4` | 934821 | Ready |
| `builtin-exercise:bench-press-with-resistance-band` | Bench Press With Resistance Band | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/bench-press-with-resistance-band.mp4` | 804506 | Ready |
| `builtin-exercise:bent-arm-chest-stretch` | Bent Arm Chest Stretch | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/bent-arm-chest-stretch.mp4` | 391104 | Ready |
| `builtin-exercise:bent-over-dumbbell-lateral-raise` | Bent Over Dumbbell Lateral Raise | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/bent-over-dumbbell-lateral-raise.mp4` | 1069209 | Ready |
| `builtin-exercise:bent-over-kettlebell-row` | Bent Over Kettlebell Row | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/bent-over-kettlebell-row.mp4` | 680676 | Ready |
| `builtin-exercise:biceps-barbell-curl` | Biceps Barbell Curl | Biceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/biceps-barbell-curl.mp4` | 708752 | Ready |
| `builtin-exercise:bicycle-crunches` | Bicycle Crunches | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/bicycle-crunches.mp4` | 1799257 | Ready |
| `builtin-exercise:bird-dog` | Bird Dog | Gluteal | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/bird-dog.mp4` | 2128249 | Ready |
| `builtin-exercise:bird-dog-plank` | Bird Dog Plank | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/bird-dog-plank.mp4` | 1563790 | Ready |
| `builtin-exercise:bird-dog-push-up` | Bird Dog Push-Up | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/bird-dog-push-up.mp4` | 2279894 | Ready |
| `builtin-exercise:bodyweight-windmill` | Bodyweight Windmill | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/bodyweight-windmill.mp4` | 2890843 | Ready |
| `builtin-exercise:box-jumps` | Box Jumps | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/box-jumps.mp4` | 1057210 | Ready |
| `builtin-exercise:box-squat` | Box Squat | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/box-squat.mp4` | 924346 | Ready |
| `builtin-exercise:box-step-up` | Box step-up | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/box-step-up.mp4` | 1698736 | Ready |
| `builtin-exercise:broad-jump` | Broad Jump | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/broad-jump.mp4` | 2635181 | Ready |
| `builtin-exercise:bulgarian-bag-walking-lunges` | Bulgarian Bag Walking Lunges | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/bulgarian-bag-walking-lunges.mp4` | 1530277 | Ready |
| `builtin-exercise:bulgarian-jump-squat` | Bulgarian Jump Squat | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/bulgarian-jump-squat.mp4` | 834969 | Ready |
| `builtin-exercise:bulgarian-squat` | Bulgarian Squat | Gluteal | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/bulgarian-squat.mp4` | 734686 | Ready |
| `builtin-exercise:bulgarian-squat-smith` | Bulgarian Squat Smith | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/bulgarian-squat-smith.mp4` | 796542 | Ready |
| `builtin-exercise:burpee` | Burpee | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/burpee.mp4` | 1092801 | Ready |
| `builtin-exercise:butterfly-lean-forward-stretch` | Butterfly Lean Forward Stretch | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/butterfly-lean-forward-stretch.mp4` | 1945092 | Ready |
| `builtin-exercise:butterfly-stretch` | Butterfly Stretch | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/butterfly-stretch.mp4` | 797965 | Ready |
| `builtin-exercise:cable-bench-press` | Cable Bench Press | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/cable-bench-press.mp4` | 602389 | Ready |
| `builtin-exercise:cable-close-grip-lat-pulldown` | Cable Close Grip Lat Pulldown | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/cable-close-grip-lat-pulldown.mp4` | 641484 | Ready |
| `builtin-exercise:cable-cross-triceps-extension` | Cable Cross Triceps Extension | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/cable-cross-triceps-extension.mp4` | 591678 | Ready |
| `builtin-exercise:cable-double-arm-tricep-kickback` | Cable Double-Arm Tricep Kickback | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/cable-double-arm-tricep-kickback.mp4` | 593008 | Ready |
| `builtin-exercise:cable-face-pull` | Cable Face Pull | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/cable-face-pull.mp4` | 633492 | Ready |
| `builtin-exercise:cable-front-raise` | Cable Front Raise | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/cable-front-raise.mp4` | 729711 | Ready |
| `builtin-exercise:cable-hip-abducction` | Cable Hip Abducction | Gluteal | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/cable-hip-abducction.mp4` | 667260 | Ready |
| `builtin-exercise:cable-hip-adduction` | Cable Hip Adduction | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/cable-hip-adduction.mp4` | 621200 | Ready |
| `builtin-exercise:cable-horizontal-pallof-press` | Cable Horizontal Pallof Press | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/cable-horizontal-pallof-press.mp4` | 577625 | Ready |
| `builtin-exercise:cable-incline-skull-crusher` | Cable Incline Skull Crusher | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/cable-incline-skull-crusher.mp4` | 525943 | Ready |
| `builtin-exercise:cable-incline-y-raise-back-supported` | Cable Incline Y Raise Back Supported | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/cable-incline-y-raise-back-supported.mp4` | 813233 | Ready |
| `builtin-exercise:cable-kneeling-high-to-low-fly` | Cable Kneeling High To Low Fly | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/cable-kneeling-high-to-low-fly.mp4` | 946907 | Ready |
| `builtin-exercise:cable-kneeling-side-crunch` | Cable Kneeling Side Crunch | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/cable-kneeling-side-crunch.mp4` | 1431401 | Ready |
| `builtin-exercise:cable-lat-pulldown` | Cable Lat Pulldown | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/cable-lat-pulldown.mp4` | 640816 | Ready |
| `builtin-exercise:cable-lateral-raise` | Cable Lateral Raise | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/cable-lateral-raise.mp4` | 751016 | Ready |
| `builtin-exercise:cable-leaning-lateral-raise` | Cable Leaning Lateral Raise | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/cable-leaning-lateral-raise.mp4` | 624816 | Ready |
| `builtin-exercise:cable-middle-chest-fly` | Cable Middle Chest Fly | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/cable-middle-chest-fly.mp4` | 775835 | Ready |
| `builtin-exercise:cable-neutral-grip-lat-pulldown` | Cable Neutral Grip Lat Pulldown | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/cable-neutral-grip-lat-pulldown.mp4` | 642497 | Ready |
| `builtin-exercise:cable-overhead-triceps-extension` | Cable Overhead Triceps Extension | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/cable-overhead-triceps-extension.mp4` | 349593 | Ready |
| `builtin-exercise:cable-preacher-curl` | Cable Preacher Curl | Biceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/cable-preacher-curl.mp4` | 573820 | Ready |
| `builtin-exercise:cable-pull-through` | Cable Pull Through | Gluteal | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/cable-pull-through.mp4` | 804870 | Ready |
| `builtin-exercise:cable-rear-delt-fly-reverse-fly` | Cable Rear Delt Fly (Reverse Fly) | Shoulders | [Page](FitDex Exercise Catalog)) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/cable-rear-delt-fly-reverse-fly.mp4` | 575026 | Ready |
| `builtin-exercise:cable-reverse-grip-pulldown` | Cable Reverse Grip Pulldown | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/cable-reverse-grip-pulldown.mp4` | 620903 | Ready |
| `builtin-exercise:cable-romanian-deadlift` | Cable Romanian Deadlift | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/cable-romanian-deadlift.mp4` | 759279 | Ready |
| `builtin-exercise:cable-seated-rear-lateral-raise` | Cable Seated Rear Lateral Raise | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/cable-seated-rear-lateral-raise.mp4` | 711611 | Ready |
| `builtin-exercise:cable-seated-row-neutral-grip` | Cable Seated Row Neutral Grip | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/cable-seated-row-neutral-grip.mp4` | 608556 | Ready |
| `builtin-exercise:cable-seated-supine-grip-row` | Cable Seated Supine Grip Row | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/cable-seated-supine-grip-row.mp4` | 546265 | Ready |
| `builtin-exercise:cable-shrug` | Cable Shrug | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/cable-shrug.mp4` | 424882 | Ready |
| `builtin-exercise:cable-squatting-curl` | Cable Squatting Curl | Biceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/cable-squatting-curl.mp4` | 524355 | Ready |
| `builtin-exercise:cable-standing-wrist-roll` | Cable Standing Wrist Roll | Forearms | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/cable-standing-wrist-roll.mp4` | 557201 | Ready |
| `builtin-exercise:cable-step-up` | Cable Step Up | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/cable-step-up.mp4` | 1002949 | Ready |
| `builtin-exercise:cable-supinated-face-pull` | Cable Supinated Face Pull | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/cable-supinated-face-pull.mp4` | 663519 | Ready |
| `builtin-exercise:cable-terminal-knee-extension` | Cable Terminal Knee Extension | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/cable-terminal-knee-extension.mp4` | 441400 | Ready |
| `builtin-exercise:cable-thibaudeau-kayak-row` | Cable Thibaudeau Kayak Row | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/cable-thibaudeau-kayak-row.mp4` | 1299207 | Ready |
| `builtin-exercise:cable-triceps-pushdown` | Cable Triceps Pushdown | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/cable-triceps-pushdown.mp4` | 490297 | Ready |
| `builtin-exercise:cable-twist-horizontal` | Cable Twist (horizontal) | Abs | [Page](FitDex Exercise Catalog)) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/cable-twist-horizontal.mp4` | 768770 | Ready |
| `builtin-exercise:cable-twist-up-down` | Cable Twist (up down) | Abs | [Page](FitDex Exercise Catalog)) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/cable-twist-up-down.mp4` | 966178 | Ready |
| `builtin-exercise:cable-upright-row` | Cable Upright Row | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/cable-upright-row.mp4` | 500770 | Ready |
| `builtin-exercise:cable-wide-grip-behind-neck-pulldown` | Cable Wide Grip Behind Neck Pulldown | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/cable-wide-grip-behind-neck-pulldown.mp4` | 634601 | Ready |
| `builtin-exercise:cable-wrist-curl` | Cable Wrist Curl | Forearms | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/cable-wrist-curl.mp4` | 390267 | Ready |
| `builtin-exercise:cable-y-raise` | Cable Y Raise | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/cable-y-raise.mp4` | 967189 | Ready |
| `builtin-exercise:calf-leg-press` | Calf Leg Press | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/calf-leg-press.mp4` | 696425 | Ready |
| `builtin-exercise:california-press` | California Press | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/california-press.mp4` | 863470 | Ready |
| `builtin-exercise:capitans-chair-straight-leg-raises` | Capitan's Chair Straight Leg Raises | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/capitans-chair-straight-leg-raises.mp4` | 804995 | Ready |
| `builtin-exercise:captains-chair-knee-raises` | Captains Chair Knee Raises | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/captains-chair-knee-raises.mp4` | 543788 | Ready |
| `builtin-exercise:cat-cow` | Cat Cow | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/cat-cow.mp4` | 924999 | Ready |
| `builtin-exercise:chest-dips` | Chest Dips | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/chest-dips.mp4` | 733663 | Ready |
| `builtin-exercise:chest-supported-lateral-t-raise` | Chest Supported Lateral T Raise | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/chest-supported-lateral-t-raise.mp4` | 692778 | Ready |
| `builtin-exercise:chest-supported-machine-row` | Chest Supported Machine Row | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/chest-supported-machine-row.mp4` | 682376 | Ready |
| `builtin-exercise:childs-pose` | Child’s Pose | Gluteal | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/childs-pose.mp4` | 1485958 | Ready |
| `builtin-exercise:chin-up` | Chin-Up | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/chin-up.mp4` | 640728 | Ready |
| `builtin-exercise:clap-push-up` | Clap Push-Up | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/clap-push-up.mp4` | 1221154 | Ready |
| `builtin-exercise:clean-and-jerk` | Clean and Jerk | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/clean-and-jerk.mp4` | 1978857 | Ready |
| `builtin-exercise:clean-squat` | Clean Squat | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/clean-squat.mp4` | 1461263 | Ready |
| `builtin-exercise:close-grip-biceps-curl` | Close Grip Biceps Curl | Biceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/close-grip-biceps-curl.mp4` | 724278 | Ready |
| `builtin-exercise:close-grip-dumbbell-press` | Close Grip Dumbbell Press | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/close-grip-dumbbell-press.mp4` | 705991 | Ready |
| `builtin-exercise:close-grip-ez-bar-curl` | Close-grip EZ Bar Curl | Biceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/close-grip-ez-bar-curl.mp4` | 764127 | Ready |
| `builtin-exercise:close-grip-incline-dumbbell-bench-press` | Close Grip Incline Dumbbell Bench Press | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/close-grip-incline-dumbbell-bench-press.mp4` | 603430 | Ready |
| `builtin-exercise:close-grip-landmine-row` | Close Grip Landmine Row | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/close-grip-landmine-row.mp4` | 731154 | Ready |
| `builtin-exercise:close-grip-pull-up` | Close Grip Pull Up | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/close-grip-pull-up.mp4` | 758378 | Ready |
| `builtin-exercise:close-grip-push-up` | Close Grip Push-Up | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/close-grip-push-up.mp4` | 1528996 | Ready |
| `builtin-exercise:close-grip-smith-bench-press` | Close Grip Smith Bench Press | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/close-grip-smith-bench-press.mp4` | 489479 | Ready |
| `builtin-exercise:cobra-push-up` | Cobra Push-Up | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/cobra-push-up.mp4` | 1716168 | Ready |
| `builtin-exercise:crab-pose` | Crab Pose | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/crab-pose.mp4` | 1374505 | Ready |
| `builtin-exercise:cross-arms-push-up` | Cross Arms Push-Up | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/cross-arms-push-up.mp4` | 1068375 | Ready |
| `builtin-exercise:cross-body-one-arm-strength-press` | Cross Body One-Arm Strength Press | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/cross-body-one-arm-strength-press.mp4` | 525531 | Ready |
| `builtin-exercise:crossack-squat` | Crossack Squat | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/crossack-squat.mp4` | 1924505 | Ready |
| `builtin-exercise:cyclist-squat` | Cyclist Squat | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/cyclist-squat.mp4` | 907740 | Ready |
| `builtin-exercise:dead-bug` | Dead Bug | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dead-bug.mp4` | 2080512 | Ready |
| `builtin-exercise:dead-bug-with-ball` | Dead Bug with Ball | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dead-bug-with-ball.mp4` | 1413050 | Ready |
| `builtin-exercise:dead-hang` | Dead Hang | Forearms | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dead-hang.mp4` | 358544 | Ready |
| `builtin-exercise:deadlift` | Deadlift | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/deadlift.mp4` | 1175585 | Ready |
| `builtin-exercise:deadlift-from-blocks` | Deadlift from Blocks | Gluteal | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/deadlift-from-blocks.mp4` | 886332 | Ready |
| `builtin-exercise:decline-barbell-bench-press` | Decline Barbell Bench Press | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/decline-barbell-bench-press.mp4` | 610062 | Ready |
| `builtin-exercise:decline-barbell-french-press` | Decline Barbell French Press | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/decline-barbell-french-press.mp4` | 830191 | Ready |
| `builtin-exercise:decline-cable-chest-press` | Decline Cable Chest Press | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/decline-cable-chest-press.mp4` | 648583 | Ready |
| `builtin-exercise:decline-chest-press` | Decline Chest Press | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/decline-chest-press.mp4` | 897668 | Ready |
| `builtin-exercise:decline-crunch` | Decline Crunch | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/decline-crunch.mp4` | 849452 | Ready |
| `builtin-exercise:decline-diamond-push-up` | Decline Diamond Push-Up | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/decline-diamond-push-up.mp4` | 1217748 | Ready |
| `builtin-exercise:decline-dumbbell-bench-press` | Decline Dumbbell Bench Press | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/decline-dumbbell-bench-press.mp4` | 917312 | Ready |
| `builtin-exercise:decline-dumbbell-fly` | Decline Dumbbell Fly | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/decline-dumbbell-fly.mp4` | 1071857 | Ready |
| `builtin-exercise:decline-push-up` | Decline Push-Up | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/decline-push-up.mp4` | 973766 | Ready |
| `builtin-exercise:decline-smith-bench-press` | Decline Smith Bench Press | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/decline-smith-bench-press.mp4` | 651458 | Ready |
| `builtin-exercise:deep-push-up-on-parallel-bars` | Deep Push Up On Parallel Bars | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/deep-push-up-on-parallel-bars.mp4` | 1159315 | Ready |
| `builtin-exercise:deep-squat-to-wide-fold-with-foot-hold` | Deep Squat to Wide Fold with Foot Hold | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/deep-squat-to-wide-fold-with-foot-hold.mp4` | 1815008 | Ready |
| `builtin-exercise:deficit-deadlift` | Deficit Deadlift | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/deficit-deadlift.mp4` | 834714 | Ready |
| `builtin-exercise:diamond-push-up` | Diamond Push-Up | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/diamond-push-up.mp4` | 1184786 | Ready |
| `builtin-exercise:dip-shrugs` | Dip Shrugs | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dip-shrugs.mp4` | 434848 | Ready |
| `builtin-exercise:dips` | Dips | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dips.mp4` | 751355 | Ready |
| `builtin-exercise:donkey-kick` | Donkey Kick | Gluteal | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/donkey-kick.mp4` | 1447074 | Ready |
| `builtin-exercise:doorway-chest-stretch` | Doorway Chest Stretch | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/doorway-chest-stretch.mp4` | 511074 | Ready |
| `builtin-exercise:double-dumbbell-bent-over-row` | Double Dumbbell Bent Over Row | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/double-dumbbell-bent-over-row.mp4` | 764789 | Ready |
| `builtin-exercise:double-dumbbell-preacher-curl` | Double Dumbbell Preacher Curl | Biceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/double-dumbbell-preacher-curl.mp4` | 619130 | Ready |
| `builtin-exercise:downward-dog` | Downward Dog | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/downward-dog.mp4` | 1493650 | Ready |
| `builtin-exercise:dragon-flag` | Dragon Flag | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dragon-flag.mp4` | 711076 | Ready |
| `builtin-exercise:dumbbell-alternate-front-raise` | Dumbbell Alternate Front Raise | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-alternate-front-raise.mp4` | 443199 | Ready |
| `builtin-exercise:dumbbell-alternate-hammer-front-raise` | Dumbbell Alternate Hammer Front Raise | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-alternate-hammer-front-raise.mp4` | 820171 | Ready |
| `builtin-exercise:dumbbell-alternate-supinated-curl` | Dumbbell Alternate Supinated Curl | Biceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-alternate-supinated-curl.mp4` | 816715 | Ready |
| `builtin-exercise:dumbbell-bench-press` | Dumbbell Bench Press | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-bench-press.mp4` | 875441 | Ready |
| `builtin-exercise:dumbbell-bent-over-row` | Dumbbell Bent Over Row | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-bent-over-row.mp4` | 809901 | Ready |
| `builtin-exercise:dumbbell-biceps-curl` | Dumbbell Biceps Curl | Biceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-biceps-curl.mp4` | 635097 | Ready |
| `builtin-exercise:dumbbell-biceps-reverse-curl` | Dumbbell Biceps Reverse Curl | Forearms | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-biceps-reverse-curl.mp4` | 624685 | Ready |
| `builtin-exercise:dumbbell-bulgarian-squat` | Dumbbell Bulgarian Squat | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-bulgarian-squat.mp4` | 742451 | Ready |
| `builtin-exercise:dumbbell-chest-fly` | Dumbbell Chest Fly | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-chest-fly.mp4` | 1020722 | Ready |
| `builtin-exercise:dumbbell-concentration-curl` | Dumbbell Concentration Curl | Biceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-concentration-curl.mp4` | 582689 | Ready |
| `builtin-exercise:dumbbell-cossack-squat` | Dumbbell Cossack Squat | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-cossack-squat.mp4` | 1887146 | Ready |
| `builtin-exercise:dumbbell-cross-body-hammer-curl` | Dumbbell Cross Body Hammer Curl | Biceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-cross-body-hammer-curl.mp4` | 705548 | Ready |
| `builtin-exercise:dumbbell-cuban-rotation` | Dumbbell Cuban Rotation | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-cuban-rotation.mp4` | 483891 | Ready |
| `builtin-exercise:dumbbell-deadlift` | Dumbbell Deadlift | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-deadlift.mp4` | 931994 | Ready |
| `builtin-exercise:dumbbell-deadlift-straight-legs` | Dumbbell Deadlift Straight Legs | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-deadlift-straight-legs.mp4` | 1057409 | Ready |
| `builtin-exercise:dumbbell-deep-push-up` | Dumbbell Deep Push Up | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-deep-push-up.mp4` | 1314637 | Ready |
| `builtin-exercise:dumbbell-drag-curl` | Dumbbell Drag Curl | Biceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-drag-curl.mp4` | 1295480 | Ready |
| `builtin-exercise:dumbbell-farmer-carry` | Dumbbell Farmer Carry | Forearms | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-farmer-carry.mp4` | 359943 | Ready |
| `builtin-exercise:dumbbell-floor-chest-fly` | Dumbbell Floor Chest Fly | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-floor-chest-fly.mp4` | 1179238 | Ready |
| `builtin-exercise:dumbbell-front-raise` | Dumbbell Front Raise | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-front-raise.mp4` | 715070 | Ready |
| `builtin-exercise:dumbbell-goblet-squat` | Dumbbell Goblet Squat | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-goblet-squat.mp4` | 850429 | Ready |
| `builtin-exercise:dumbbell-half-kneeling-shoulder-press` | Dumbbell Half Kneeling Shoulder Press | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-half-kneeling-shoulder-press.mp4` | 602557 | Ready |
| `builtin-exercise:dumbbell-hammer-curl` | Dumbbell Hammer Curl | Biceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-hammer-curl.mp4` | 773801 | Ready |
| `builtin-exercise:dumbbell-hip-thrust` | Dumbbell Hip Thrust | Gluteal | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-hip-thrust.mp4` | 1162888 | Ready |
| `builtin-exercise:dumbbell-incline-alternate-supinated-curl` | Dumbbell Incline Alternate Supinated Curl | Biceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-incline-alternate-supinated-curl.mp4` | 697123 | Ready |
| `builtin-exercise:dumbbell-incline-chest-supported-lateral-raises` | Dumbbell Incline Chest Supported Lateral Raises | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-incline-chest-supported-lateral-raises.mp4` | 692778 | Ready |
| `builtin-exercise:dumbbell-incline-hammer-curl` | Dumbbell Incline Hammer Curl | Biceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-incline-hammer-curl.mp4` | 603338 | Ready |
| `builtin-exercise:dumbbell-incline-rear-lateral-t-raise` | Dumbbell Incline Rear Lateral T Raise | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-incline-rear-lateral-t-raise.mp4` | 725021 | Ready |
| `builtin-exercise:dumbbell-incline-t-raise` | Dumbbell Incline T Raise | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-incline-t-raise.mp4` | 764686 | Ready |
| `builtin-exercise:dumbbell-jump` | Dumbbell Jump | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-jump.mp4` | 699208 | Ready |
| `builtin-exercise:dumbbell-kelso-shrugs` | Dumbbell Kelso Shrugs | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-kelso-shrugs.mp4` | 593419 | Ready |
| `builtin-exercise:dumbbell-larsen-press` | Dumbbell Larsen Press | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-larsen-press.mp4` | 877408 | Ready |
| `builtin-exercise:dumbbell-lat-pullover` | Dumbbell Lat Pullover | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-lat-pullover.mp4` | 858749 | Ready |
| `builtin-exercise:dumbbell-lateral-raise` | Dumbbell Lateral Raise | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-lateral-raise.mp4` | 672283 | Ready |
| `builtin-exercise:dumbbell-low-to-high-fly` | Dumbbell Low to High Fly | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-low-to-high-fly.mp4` | 781301 | Ready |
| `builtin-exercise:dumbbell-lu-raises` | Dumbbell Lu Raises | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-lu-raises.mp4` | 837672 | Ready |
| `builtin-exercise:dumbbell-lunges` | Dumbbell Lunges | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-lunges.mp4` | 843122 | Ready |
| `builtin-exercise:dumbbell-lying-leg-curl` | Dumbbell Lying Leg Curl | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-lying-leg-curl.mp4` | 763130 | Ready |
| `builtin-exercise:dumbbell-lying-pronation` | Dumbbell Lying Pronation | Forearms | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-lying-pronation.mp4` | 666879 | Ready |
| `builtin-exercise:dumbbell-lying-triceps-extension` | Dumbbell Lying Triceps Extension | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-lying-triceps-extension.mp4` | 766517 | Ready |
| `builtin-exercise:dumbbell-neutral-grip-incline-bench-row` | Dumbbell Neutral Grip Incline Bench Row | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-neutral-grip-incline-bench-row.mp4` | 697200 | Ready |
| `builtin-exercise:dumbbell-poliquin-lateral-raise` | Dumbbell Poliquin Lateral Raise | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-poliquin-lateral-raise.mp4` | 914511 | Ready |
| `builtin-exercise:dumbbell-poliquin-press` | Dumbbell Poliquin Press | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-poliquin-press.mp4` | 924093 | Ready |
| `builtin-exercise:dumbbell-pullover-with-legs-raised` | Dumbbell Pullover with Legs Raised | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-pullover-with-legs-raised.mp4` | 833311 | Ready |
| `builtin-exercise:dumbbell-push-press` | Dumbbell Push Press | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-push-press.mp4` | 765101 | Ready |
| `builtin-exercise:dumbbell-rear-delt-row` | Dumbbell Rear Delt Row | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-rear-delt-row.mp4` | 738915 | Ready |
| `builtin-exercise:dumbbell-rear-lunge` | Dumbbell Rear Lunge | Gluteal | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-rear-lunge.mp4` | 1834344 | Ready |
| `builtin-exercise:dumbbell-reverse-lunge-off-step` | Dumbbell Reverse Lunge off Step | Gluteal | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-reverse-lunge-off-step.mp4` | 1299294 | Ready |
| `builtin-exercise:dumbbell-romanian-deadlift` | Dumbbell Romanian Deadlift | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-romanian-deadlift.mp4` | 862872 | Ready |
| `builtin-exercise:dumbbell-russian-twist` | Dumbbell Russian Twist | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-russian-twist.mp4` | 1736733 | Ready |
| `builtin-exercise:dumbbell-seal-row` | Dumbbell Seal Row | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-seal-row.mp4` | 731533 | Ready |
| `builtin-exercise:dumbbell-seated-alternate-hammer-curl` | Dumbbell Seated Alternate Hammer Curl | Biceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-seated-alternate-hammer-curl.mp4` | 745059 | Ready |
| `builtin-exercise:dumbbell-seated-bent-over-high-row` | Dumbbell Seated Bent Over High Row | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-seated-bent-over-high-row.mp4` | 1034124 | Ready |
| `builtin-exercise:dumbbell-seated-lateral-raise` | Dumbbell Seated Lateral Raise | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-seated-lateral-raise.mp4` | 655689 | Ready |
| `builtin-exercise:dumbbell-seated-triceps-extension` | Dumbbell Seated Triceps Extension | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-seated-triceps-extension.mp4` | 540337 | Ready |
| `builtin-exercise:dumbbell-shoulder-shrugs` | Dumbbell Shoulder Shrugs | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-shoulder-shrugs.mp4` | 482029 | Ready |
| `builtin-exercise:dumbbell-side-bridge` | Dumbbell Side Bridge | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-side-bridge.mp4` | 1483771 | Ready |
| `builtin-exercise:dumbbell-side-lunges` | Dumbbell Side Lunges | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-side-lunges.mp4` | 1108016 | Ready |
| `builtin-exercise:dumbbell-single-leg-hip-thrust` | Dumbbell Single Leg Hip Thrust | Gluteal | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-single-leg-hip-thrust.mp4` | 1295451 | Ready |
| `builtin-exercise:dumbbell-snatch` | Dumbbell Snatch | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-snatch.mp4` | 1189616 | Ready |
| `builtin-exercise:dumbbell-spider-curl` | Dumbbell Spider Curl | Biceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-spider-curl.mp4` | 774896 | Ready |
| `builtin-exercise:dumbbell-split-squat` | Dumbbell Split Squat | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-split-squat.mp4` | 676249 | Ready |
| `builtin-exercise:dumbbell-squat` | Dumbbell Squat | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-squat.mp4` | 1031209 | Ready |
| `builtin-exercise:dumbbell-standing-alternate-press` | Dumbbell Standing Alternate Press | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-standing-alternate-press.mp4` | 797309 | Ready |
| `builtin-exercise:dumbbell-standing-calf-raises` | Dumbbell Standing Calf Raises | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-standing-calf-raises.mp4` | 594135 | Ready |
| `builtin-exercise:dumbbell-standing-driver` | Dumbbell Standing Driver | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-standing-driver.mp4` | 663372 | Ready |
| `builtin-exercise:dumbbell-standing-reverse-wrist-curls` | Dumbbell Standing Reverse Wrist Curls | Forearms | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-standing-reverse-wrist-curls.mp4` | 413714 | Ready |
| `builtin-exercise:dumbbell-standing-side-bend` | Dumbbell Standing Side Bend | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-standing-side-bend.mp4` | 829228 | Ready |
| `builtin-exercise:dumbbell-standing-wrist-curl` | Dumbbell Standing Wrist Curl | Forearms | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-standing-wrist-curl.mp4` | 395831 | Ready |
| `builtin-exercise:dumbbell-step-up` | Dumbbell Step-Up | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-step-up.mp4` | 767183 | Ready |
| `builtin-exercise:dumbbell-straight-leg-deadlift` | Dumbbell Straight Leg Deadlift | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-straight-leg-deadlift.mp4` | 870318 | Ready |
| `builtin-exercise:dumbbell-sumo-squat` | Dumbbell Sumo Squat | Gluteal | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-sumo-squat.mp4` | 859489 | Ready |
| `builtin-exercise:dumbbell-supinated-preacher-curl` | Dumbbell Supinated Preacher Curl | Biceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-supinated-preacher-curl.mp4` | 749993 | Ready |
| `builtin-exercise:dumbbell-upright-row` | Dumbbell Upright Row | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-upright-row.mp4` | 761180 | Ready |
| `builtin-exercise:dumbbell-walking-lunges` | Dumbbell Walking Lunges | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/dumbbell-walking-lunges.mp4` | 1433705 | Ready |
| `builtin-exercise:elbow-out-chest-stretch` | Elbow Out Chest Stretch | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/elbow-out-chest-stretch.mp4` | 490193 | Ready |
| `builtin-exercise:elliptical-trainer` | Elliptical Trainer | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/elliptical-trainer.mp4` | 873184 | Ready |
| `builtin-exercise:ez-bar-biceps-curl` | EZ-Bar Biceps Curl | Biceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/ez-bar-biceps-curl.mp4` | 700836 | Ready |
| `builtin-exercise:ez-bar-preacher-curl` | EZ-Bar Preacher Curl | Biceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/ez-bar-preacher-curl.mp4` | 664474 | Ready |
| `builtin-exercise:ez-bar-reverse-grip-biceps-curl` | EZ-Bar Reverse Grip Biceps Curl | Forearms | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/ez-bar-reverse-grip-biceps-curl.mp4` | 655064 | Ready |
| `builtin-exercise:ez-bar-reverse-spider-curl` | EZ-Bar Reverse Spider Curl | Forearms | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/ez-bar-reverse-spider-curl.mp4` | 970366 | Ready |
| `builtin-exercise:ez-bar-seated-reverse-wrist-curl` | EZ-Bar Seated Reverse Wrist Curl | Forearms | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/ez-bar-seated-reverse-wrist-curl.mp4` | 579045 | Ready |
| `builtin-exercise:ez-bar-seated-triceps-extension` | EZ-Bar Seated Triceps Extension | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/ez-bar-seated-triceps-extension.mp4` | 572369 | Ready |
| `builtin-exercise:ez-bar-seated-wrist-curl` | EZ-Bar Seated Wrist Curl | Forearms | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/ez-bar-seated-wrist-curl.mp4` | 631184 | Ready |
| `builtin-exercise:ez-bar-spider-curl` | EZ-Bar Spider Curl | Biceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/ez-bar-spider-curl.mp4` | 914562 | Ready |
| `builtin-exercise:ez-bar-tricep-pushdown` | EZ-Bar Tricep Pushdown | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/ez-bar-tricep-pushdown.mp4` | 495620 | Ready |
| `builtin-exercise:farmer-walk` | Farmer Walk | Forearms | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/farmer-walk.mp4` | 359943 | Ready |
| `builtin-exercise:figure-4-stretch-on-chair` | Figure 4 Stretch on Chair | Gluteal | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/figure-4-stretch-on-chair.mp4` | 890891 | Ready |
| `builtin-exercise:finger-push-up` | Finger Push-Up | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/finger-push-up.mp4` | 1258269 | Ready |
| `builtin-exercise:flag` | Flag | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/flag.mp4` | 787928 | Ready |
| `builtin-exercise:floor-dumbbell-press` | Floor Dumbbell Press | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/floor-dumbbell-press.mp4` | 1144281 | Ready |
| `builtin-exercise:forward-band-monster-walk` | Forward Band Monster Walk | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/forward-band-monster-walk.mp4` | 861456 | Ready |
| `builtin-exercise:frog-crunch` | Frog Crunch | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/frog-crunch.mp4` | 2194213 | Ready |
| `builtin-exercise:frog-planche` | Frog Planche | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/frog-planche.mp4` | 652198 | Ready |
| `builtin-exercise:frog-pump` | Frog Pump | Gluteal | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/frog-pump.mp4` | 978490 | Ready |
| `builtin-exercise:front-lever` | Front Lever | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/front-lever.mp4` | 522895 | Ready |
| `builtin-exercise:front-lever-pull-up` | Front Lever Pull-Up | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/front-lever-pull-up.mp4` | 674298 | Ready |
| `builtin-exercise:front-squat` | Front Squat | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/front-squat.mp4` | 932396 | Ready |
| `builtin-exercise:full-planche` | Full Planche | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/full-planche.mp4` | 906884 | Ready |
| `builtin-exercise:full-planche-push-up` | Full Planche Push-Up | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/full-planche-push-up.mp4` | 1429754 | Ready |
| `builtin-exercise:glute-bridge` | Glute Bridge | Gluteal | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/glute-bridge.mp4` | 1080753 | Ready |
| `builtin-exercise:glute-bridge-on-bench` | Glute Bridge on Bench | Gluteal | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/glute-bridge-on-bench.mp4` | 834661 | Ready |
| `builtin-exercise:glute-bridge-single-leg` | Glute Bridge Single Leg | Gluteal | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/glute-bridge-single-leg.mp4` | 888772 | Ready |
| `builtin-exercise:glute-cable-kickback` | Glute Cable Kickback | Gluteal | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/glute-cable-kickback.mp4` | 704265 | Ready |
| `builtin-exercise:glute-ham-raise-1-2` | Glute-Ham Raise 1/2 | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/glute-ham-raise-1-2.mp4` | 860905 | Ready |
| `builtin-exercise:glute-machine-kickback` | Glute Machine Kickback | Gluteal | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/glute-machine-kickback.mp4` | 529690 | Ready |
| `builtin-exercise:glutes-roll` | Glutes Roll | Gluteal | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/glutes-roll.mp4` | 1104631 | Ready |
| `builtin-exercise:goblet-squat` | Goblet Squat | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/goblet-squat.mp4` | 990647 | Ready |
| `builtin-exercise:gorilla-row` | Gorilla Row | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/gorilla-row.mp4` | 1053230 | Ready |
| `builtin-exercise:half-kneeling-quad-stretch` | Half Kneeling Quad Stretch | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/half-kneeling-quad-stretch.mp4` | 522643 | Ready |
| `builtin-exercise:half-kneeling-shoulder-dumbbell-press` | Half Kneeling Shoulder Dumbbell Press | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/half-kneeling-shoulder-dumbbell-press.mp4` | 607128 | Ready |
| `builtin-exercise:half-squat` | Half Squat | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/half-squat.mp4` | 805058 | Ready |
| `builtin-exercise:hammer-grip-dumbbell-bench-press` | Hammer Grip Dumbbell Bench Press | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/hammer-grip-dumbbell-bench-press.mp4` | 789717 | Ready |
| `builtin-exercise:hand-gripper` | Hand Gripper | Forearms | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/hand-gripper.mp4` | 461733 | Ready |
| `builtin-exercise:handstand-hold` | Handstand Hold | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/handstand-hold.mp4` | 358503 | Ready |
| `builtin-exercise:handstand-push-up` | Handstand Push-Up | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/handstand-push-up.mp4` | 1186060 | Ready |
| `builtin-exercise:hang-power-clean` | Hang Power Clean | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/hang-power-clean.mp4` | 1296914 | Ready |
| `builtin-exercise:hanging-half-windmill` | Hanging Half Windmill | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/hanging-half-windmill.mp4` | 670569 | Ready |
| `builtin-exercise:hanging-knee-circles` | Hanging Knee Circles | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/hanging-knee-circles.mp4` | 1083138 | Ready |
| `builtin-exercise:hanging-knee-raises` | Hanging Knee Raises | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/hanging-knee-raises.mp4` | 835487 | Ready |
| `builtin-exercise:hanging-knee-to-chest` | Hanging Knee To Chest | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/hanging-knee-to-chest.mp4` | 752441 | Ready |
| `builtin-exercise:hanging-knees-to-elbows` | Hanging Knees to Elbows | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/hanging-knees-to-elbows.mp4` | 818131 | Ready |
| `builtin-exercise:hanging-knees-to-elbows-waist` | Hanging Knees to Elbows Waist | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/hanging-knees-to-elbows-waist.mp4` | 835487 | Ready |
| `builtin-exercise:hanging-leg-raise-to-bar` | Hanging Leg Raise To Bar | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/hanging-leg-raise-to-bar.mp4` | 819345 | Ready |
| `builtin-exercise:hanging-oblique-knee-raise` | Hanging Oblique Knee Raise | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/hanging-oblique-knee-raise.mp4` | 1079501 | Ready |
| `builtin-exercise:hanging-scapular-retractions` | Hanging Scapular Retractions | Forearms | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/hanging-scapular-retractions.mp4` | 580289 | Ready |
| `builtin-exercise:hanging-scissors-kicks` | Hanging Scissors Kicks | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/hanging-scissors-kicks.mp4` | 608651 | Ready |
| `builtin-exercise:hanging-straight-leg-raise` | Hanging Straight Leg Raise | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/hanging-straight-leg-raise.mp4` | 573508 | Ready |
| `builtin-exercise:happy-baby-pose` | Happy Baby Pose | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/happy-baby-pose.mp4` | 3918466 | Ready |
| `builtin-exercise:hercules-curl` | Hercules Curl | Biceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/hercules-curl.mp4` | 531649 | Ready |
| `builtin-exercise:high-bar-squat` | High-Bar Squat | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/high-bar-squat.mp4` | 1004821 | Ready |
| `builtin-exercise:high-low-cable-chest-fly` | High Low Cable Chest Fly | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/high-low-cable-chest-fly.mp4` | 731350 | Ready |
| `builtin-exercise:high-pulley-overhead-triceps-extension` | High Pulley Overhead Triceps Extension | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/high-pulley-overhead-triceps-extension.mp4` | 714158 | Ready |
| `builtin-exercise:high-to-low-band-woodchopper` | High To Low Band Woodchopper | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/high-to-low-band-woodchopper.mp4` | 1090218 | Ready |
| `builtin-exercise:hip-circles` | Hip Circles | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/hip-circles.mp4` | 874613 | Ready |
| `builtin-exercise:hip-hinge` | Hip Hinge | Gluteal | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/hip-hinge.mp4` | 796406 | Ready |
| `builtin-exercise:hip-thrust` | Hip Thrust | Gluteal | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/hip-thrust.mp4` | 1526882 | Ready |
| `builtin-exercise:hip-thrust-smith-machine` | Hip Thrust Smith Machine | Gluteal | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/hip-thrust-smith-machine.mp4` | 819378 | Ready |
| `builtin-exercise:hollow-body-hold` | Hollow Body Hold | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/hollow-body-hold.mp4` | 1085782 | Ready |
| `builtin-exercise:hopping-high-knee-tap` | Hopping High Knee Tap | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/hopping-high-knee-tap.mp4` | 978813 | Ready |
| `builtin-exercise:incline-barbell-bench-press` | Incline Barbell Bench Press | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/incline-barbell-bench-press.mp4` | 637693 | Ready |
| `builtin-exercise:incline-barbell-triceps-extension` | Incline Barbell Triceps Extension | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/incline-barbell-triceps-extension.mp4` | 566856 | Ready |
| `builtin-exercise:incline-bench-cable-fly` | Incline Bench Cable Fly | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/incline-bench-cable-fly.mp4` | 709496 | Ready |
| `builtin-exercise:incline-bench-dumbbell-wide-row` | Incline Bench Dumbbell Wide Row | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/incline-bench-dumbbell-wide-row.mp4` | 646895 | Ready |
| `builtin-exercise:incline-bench-leg-raises` | Incline Bench Leg Raises | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/incline-bench-leg-raises.mp4` | 736072 | Ready |
| `builtin-exercise:incline-cable-curl` | Incline Cable Curl | Biceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/incline-cable-curl.mp4` | 554607 | Ready |
| `builtin-exercise:incline-chest-supported-barbell-row` | Incline Chest Supported Barbell Row | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/incline-chest-supported-barbell-row.mp4` | 722679 | Ready |
| `builtin-exercise:incline-close-grip-push-up` | Incline Close Grip Push-Up | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/incline-close-grip-push-up.mp4` | 851239 | Ready |
| `builtin-exercise:incline-dumbbell-bench-press` | Incline Dumbbell Bench Press | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/incline-dumbbell-bench-press.mp4` | 619079 | Ready |
| `builtin-exercise:incline-dumbbell-chest-fly` | Incline Dumbbell Chest Fly | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/incline-dumbbell-chest-fly.mp4` | 728059 | Ready |
| `builtin-exercise:incline-dumbbell-triceps-extension` | Incline Dumbbell Triceps Extension | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/incline-dumbbell-triceps-extension.mp4` | 557095 | Ready |
| `builtin-exercise:incline-hammer-chest-press` | Incline Hammer Chest Press | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/incline-hammer-chest-press.mp4` | 834001 | Ready |
| `builtin-exercise:incline-neutral-grip-dumbbell-press` | Incline Neutral Grip Dumbbell Press | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/incline-neutral-grip-dumbbell-press.mp4` | 674186 | Ready |
| `builtin-exercise:incline-powell-raise` | Incline Powell Raise | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/incline-powell-raise.mp4` | 575765 | Ready |
| `builtin-exercise:incline-push-up` | Incline Push-Up | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/incline-push-up.mp4` | 862164 | Ready |
| `builtin-exercise:incline-twisting-sit-up` | Incline Twisting Sit Up | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/incline-twisting-sit-up.mp4` | 1915117 | Ready |
| `builtin-exercise:inverted-row-australian` | Inverted Row (Australian) | Back | [Page](FitDex Exercise Catalog)) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/inverted-row-australian.mp4` | 659463 | Ready |
| `builtin-exercise:inverted-shrug` | Inverted Shrug | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/inverted-shrug.mp4` | 527916 | Ready |
| `builtin-exercise:jack-push-up` | Jack Push-Up | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/jack-push-up.mp4` | 1092534 | Ready |
| `builtin-exercise:janda-sit-up` | Janda Sit Up | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/janda-sit-up.mp4` | 1342023 | Ready |
| `builtin-exercise:jefferson-curl` | Jefferson Curl | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/jefferson-curl.mp4` | 982277 | Ready |
| `builtin-exercise:jm-press` | JM Press | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/jm-press.mp4` | 803578 | Ready |
| `builtin-exercise:jump-rope` | Jump Rope | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/jump-rope.mp4` | 511120 | Ready |
| `builtin-exercise:jump-squat` | Jump Squat | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/jump-squat.mp4` | 784018 | Ready |
| `builtin-exercise:jumping-jacks` | Jumping Jacks | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/jumping-jacks.mp4` | 606726 | Ready |
| `builtin-exercise:katana-triceps-extension` | Katana Triceps Extension | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/katana-triceps-extension.mp4` | 619784 | Ready |
| `builtin-exercise:kettelbell-clean` | Kettelbell Clean | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/kettelbell-clean.mp4` | 983214 | Ready |
| `builtin-exercise:kettlebel-renegade-row` | Kettlebel Renegade Row | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/kettlebel-renegade-row.mp4` | 2001383 | Ready |
| `builtin-exercise:kettlebell-around-the-head-rotation` | Kettlebell Around the Head Rotation | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/kettlebell-around-the-head-rotation.mp4` | 957539 | Ready |
| `builtin-exercise:kettlebell-biceps-curl` | Kettlebell Biceps Curl | Biceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/kettlebell-biceps-curl.mp4` | 595097 | Ready |
| `builtin-exercise:kettlebell-clean-and-jerk` | Kettlebell Clean and Jerk | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/kettlebell-clean-and-jerk.mp4` | 958168 | Ready |
| `builtin-exercise:kettlebell-deadlift` | Kettlebell Deadlift | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/kettlebell-deadlift.mp4` | 1005237 | Ready |
| `builtin-exercise:kettlebell-goblet-squat` | Kettlebell Goblet Squat | Gluteal | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/kettlebell-goblet-squat.mp4` | 906922 | Ready |
| `builtin-exercise:kettlebell-one-arm-floor-press` | Kettlebell One Arm Floor Press | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/kettlebell-one-arm-floor-press.mp4` | 537486 | Ready |
| `builtin-exercise:kettlebell-rear-lunge` | Kettlebell Rear Lunge | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/kettlebell-rear-lunge.mp4` | 1335142 | Ready |
| `builtin-exercise:kettlebell-swing` | Kettlebell Swing | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/kettlebell-swing.mp4` | 690783 | Ready |
| `builtin-exercise:kettlebell-windmill` | Kettlebell Windmill | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/kettlebell-windmill.mp4` | 926977 | Ready |
| `builtin-exercise:kickboxing` | Kickboxing | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/kickboxing.mp4` | 687028 | Ready |
| `builtin-exercise:knee-close-grip-push-up` | Knee Close Grip Push-Up | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/knee-close-grip-push-up.mp4` | 1502579 | Ready |
| `builtin-exercise:knee-diamond-push-up` | Knee Diamond Push-Up | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/knee-diamond-push-up.mp4` | 1177403 | Ready |
| `builtin-exercise:knee-push-up` | Knee Push-Up | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/knee-push-up.mp4` | 1126869 | Ready |
| `builtin-exercise:knee-raise-ab-coaster` | Knee Raise Ab Coaster | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/knee-raise-ab-coaster.mp4` | 856441 | Ready |
| `builtin-exercise:knee-to-chest-stretch` | Knee To Chest Stretch | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/knee-to-chest-stretch.mp4` | 810880 | Ready |
| `builtin-exercise:knee-tuck-crunch` | Knee Tuck Crunch | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/knee-tuck-crunch.mp4` | 919735 | Ready |
| `builtin-exercise:kneeling-back-rotation-stretch` | Kneeling Back Rotation Stretch | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/kneeling-back-rotation-stretch.mp4` | 972026 | Ready |
| `builtin-exercise:kneeling-band-abs-crunches` | Kneeling Band Abs Crunches | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/kneeling-band-abs-crunches.mp4` | 750555 | Ready |
| `builtin-exercise:kneeling-cable-abs-crunches` | Kneeling Cable Abs Crunches | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/kneeling-cable-abs-crunches.mp4` | 819760 | Ready |
| `builtin-exercise:kneeling-cable-lat-pulldown` | Kneeling Cable Lat Pulldown | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/kneeling-cable-lat-pulldown.mp4` | 641690 | Ready |
| `builtin-exercise:kneeling-hamstring-stretch` | Kneeling Hamstring Stretch | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/kneeling-hamstring-stretch.mp4` | 984020 | Ready |
| `builtin-exercise:kneeling-resistance-band-glute-kickback` | Kneeling Resistance Band Glute Kickback | Gluteal | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/kneeling-resistance-band-glute-kickback.mp4` | 1269719 | Ready |
| `builtin-exercise:kneeling-wide-push-up` | Kneeling Wide Push-Up | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/kneeling-wide-push-up.mp4` | 1086241 | Ready |
| `builtin-exercise:knuckle-push-up` | Knuckle Push-Up | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/knuckle-push-up.mp4` | 1301351 | Ready |
| `builtin-exercise:korean-dip` | Korean Dip | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/korean-dip.mp4` | 654189 | Ready |
| `builtin-exercise:l-pull-up` | L Pull-Up | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/l-pull-up.mp4` | 716648 | Ready |
| `builtin-exercise:l-sit` | L-Sit | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/l-sit.mp4` | 1069948 | Ready |
| `builtin-exercise:landmine-lateral-raise` | Landmine Lateral Raise | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/landmine-lateral-raise.mp4` | 689009 | Ready |
| `builtin-exercise:landmine-press` | Landmine Press | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/landmine-press.mp4` | 657135 | Ready |
| `builtin-exercise:landmine-squat` | Landmine Squat | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/landmine-squat.mp4` | 897180 | Ready |
| `builtin-exercise:landmine-twist` | Landmine Twist | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/landmine-twist.mp4` | 1338250 | Ready |
| `builtin-exercise:lat-pulldown-machine` | Lat Pulldown Machine | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/lat-pulldown-machine.mp4` | 816155 | Ready |
| `builtin-exercise:lateral-monster-walk` | Lateral Monster Walk | Gluteal | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/lateral-monster-walk.mp4` | 2539188 | Ready |
| `builtin-exercise:lateral-to-front-raise` | Lateral to Front Raise | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/lateral-to-front-raise.mp4` | 773289 | Ready |
| `builtin-exercise:lean-planche` | Lean Planche | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/lean-planche.mp4` | 789606 | Ready |
| `builtin-exercise:leg-in-and-out` | Leg In and Out | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/leg-in-and-out.mp4` | 1471496 | Ready |
| `builtin-exercise:leg-press` | Leg Press | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/leg-press.mp4` | 843460 | Ready |
| `builtin-exercise:leg-press-wide-stance` | Leg Press Wide Stance | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/leg-press-wide-stance.mp4` | 866407 | Ready |
| `builtin-exercise:leg-swings` | Leg Swings | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/leg-swings.mp4` | 691594 | Ready |
| `builtin-exercise:lever-back-extension` | Lever Back Extension | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/lever-back-extension.mp4` | 747070 | Ready |
| `builtin-exercise:lever-high-row` | Lever High Row | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/lever-high-row.mp4` | 782039 | Ready |
| `builtin-exercise:lever-horizontal-leg-press` | Lever Horizontal Leg Press | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/lever-horizontal-leg-press.mp4` | 788441 | Ready |
| `builtin-exercise:lever-low-row` | Lever Low Row | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/lever-low-row.mp4` | 712025 | Ready |
| `builtin-exercise:lever-seated-hammer-grip-shoulder-press` | Lever Seated Hammer Grip Shoulder Press | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/lever-seated-hammer-grip-shoulder-press.mp4` | 800857 | Ready |
| `builtin-exercise:lizard-pose` | Lizard Pose | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/lizard-pose.mp4` | 561860 | Ready |
| `builtin-exercise:low-cable-horizontal-pallof-press` | Low Cable Horizontal Pallof Press | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/low-cable-horizontal-pallof-press.mp4` | 593741 | Ready |
| `builtin-exercise:low-cable-incline-bench-press` | Low Cable Incline Bench Press | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/low-cable-incline-bench-press.mp4` | 754141 | Ready |
| `builtin-exercise:low-high-cable-chest-fly` | Low High Cable Chest Fly | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/low-high-cable-chest-fly.mp4` | 817567 | Ready |
| `builtin-exercise:low-incline-dumbbell-fly` | Low Incline Dumbbell Fly | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/low-incline-dumbbell-fly.mp4` | 748477 | Ready |
| `builtin-exercise:lowbar-squat` | Lowbar Squat | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/lowbar-squat.mp4` | 960952 | Ready |
| `builtin-exercise:lunge-stretch` | Lunge Stretch | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/lunge-stretch.mp4` | 737261 | Ready |
| `builtin-exercise:lunges` | Lunges | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/lunges.mp4` | 1788478 | Ready |
| `builtin-exercise:lying-barbell-triceps-extension-skullcrusher` | Lying Barbell Triceps Extension (Skullcrusher) | Triceps | [Page](FitDex Exercise Catalog)) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/lying-barbell-triceps-extension-skullcrusher.mp4` | 749273 | Ready |
| `builtin-exercise:lying-butterfly-pose` | Lying Butterfly Pose | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/lying-butterfly-pose.mp4` | 1232278 | Ready |
| `builtin-exercise:lying-cable-face-pull` | Lying Cable Face Pull | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/lying-cable-face-pull.mp4` | 566908 | Ready |
| `builtin-exercise:lying-cable-fly` | Lying Cable Fly | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/lying-cable-fly.mp4` | 736050 | Ready |
| `builtin-exercise:lying-chest-press` | Lying Chest Press | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/lying-chest-press.mp4` | 960208 | Ready |
| `builtin-exercise:lying-cross-lateral-cable-fly` | Lying Cross Lateral Cable Fly | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/lying-cross-lateral-cable-fly.mp4` | 679594 | Ready |
| `builtin-exercise:lying-ez-bar-triceps-extension` | Lying EZ-Bar Triceps Extension | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/lying-ez-bar-triceps-extension.mp4` | 769916 | Ready |
| `builtin-exercise:lying-knee-to-chest-stretch` | Lying Knee To Chest Stretch | Gluteal | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/lying-knee-to-chest-stretch.mp4` | 1457880 | Ready |
| `builtin-exercise:lying-quadriceps-stretch` | Lying Quadriceps Stretch | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/lying-quadriceps-stretch.mp4` | 765124 | Ready |
| `builtin-exercise:lying-spinal-twist` | Lying Spinal Twist | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/lying-spinal-twist.mp4` | 1318637 | Ready |
| `builtin-exercise:lying-stright-leg-raise` | Lying Stright Leg Raise | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/lying-stright-leg-raise.mp4` | 1077363 | Ready |
| `builtin-exercise:machine-abdominal-crunches` | Machine Abdominal Crunches | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/machine-abdominal-crunches.mp4` | 1005415 | Ready |
| `builtin-exercise:machine-belt-squat` | Machine Belt Squat | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/machine-belt-squat.mp4` | 994819 | Ready |
| `builtin-exercise:machine-biceps-curl` | Machine Biceps Curl | Biceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/machine-biceps-curl.mp4` | 709079 | Ready |
| `builtin-exercise:machine-calf-raises` | Machine Calf Raises | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/machine-calf-raises.mp4` | 577770 | Ready |
| `builtin-exercise:machine-chest-fly` | Machine Chest Fly | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/machine-chest-fly.mp4` | 805600 | Ready |
| `builtin-exercise:machine-chest-press` | Machine Chest Press | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/machine-chest-press.mp4` | 866685 | Ready |
| `builtin-exercise:machine-chest-press-hammer-grip` | Machine Chest Press Hammer Grip | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/machine-chest-press-hammer-grip.mp4` | 951864 | Ready |
| `builtin-exercise:machine-hack-squat` | Machine Hack Squat | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/machine-hack-squat.mp4` | 1013128 | Ready |
| `builtin-exercise:machine-hip-thrust` | Machine Hip Thrust | Gluteal | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/machine-hip-thrust.mp4` | 1233382 | Ready |
| `builtin-exercise:machine-lateral-raise` | Machine Lateral Raise | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/machine-lateral-raise.mp4` | 747082 | Ready |
| `builtin-exercise:machine-lying-crunch` | Machine Lying Crunch | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/machine-lying-crunch.mp4` | 828705 | Ready |
| `builtin-exercise:machine-preacher-curl` | Machine Preacher Curl | Biceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/machine-preacher-curl.mp4` | 775214 | Ready |
| `builtin-exercise:machine-pullover` | Machine Pullover | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/machine-pullover.mp4` | 1140754 | Ready |
| `builtin-exercise:machine-reverse-flyes` | Machine Reverse Flyes | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/machine-reverse-flyes.mp4` | 844807 | Ready |
| `builtin-exercise:machine-reverse-hack-squat` | Machine Reverse Hack Squat | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/machine-reverse-hack-squat.mp4` | 988101 | Ready |
| `builtin-exercise:machine-shoulder-press` | Machine Shoulder Press | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/machine-shoulder-press.mp4` | 852179 | Ready |
| `builtin-exercise:machine-shrugs` | Machine Shrugs | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/machine-shrugs.mp4` | 456817 | Ready |
| `builtin-exercise:machine-triceps-extension` | Machine Triceps Extension | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/machine-triceps-extension.mp4` | 755026 | Ready |
| `builtin-exercise:med-ball-russian-twist` | Med Ball Russian twist | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/med-ball-russian-twist.mp4` | 1327947 | Ready |
| `builtin-exercise:medicine-ball-slam` | Medicine Ball Slam | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/medicine-ball-slam.mp4` | 535562 | Ready |
| `builtin-exercise:mini-band-glute-bridge` | Mini Band Glute Bridge | Gluteal | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/mini-band-glute-bridge.mp4` | 1005992 | Ready |
| `builtin-exercise:mountain-climber` | Mountain climber | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/mountain-climber.mp4` | 2437835 | Ready |
| `builtin-exercise:muscle-up` | Muscle-up | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/muscle-up.mp4` | 390589 | Ready |
| `builtin-exercise:narrow-grip-australian-pull-up-with-rings` | Narrow Grip Australian Pull-Up With Rings | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/narrow-grip-australian-pull-up-with-rings.mp4` | 1143809 | Ready |
| `builtin-exercise:narrow-stance-45-degree-leg-press` | Narrow Stance 45 Degree Leg Press | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/narrow-stance-45-degree-leg-press.mp4` | 861424 | Ready |
| `builtin-exercise:neck-curl` | Neck Curl | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/neck-curl.mp4` | 993367 | Ready |
| `builtin-exercise:neck-side-stretch` | Neck Side Stretch | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/neck-side-stretch.mp4` | 359454 | Ready |
| `builtin-exercise:negative-pull-up` | Negative Pull-Up | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/negative-pull-up.mp4` | 771498 | Ready |
| `builtin-exercise:negative-push-up` | Negative Push-Up | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/negative-push-up.mp4` | 1308274 | Ready |
| `builtin-exercise:nordic-hamstring-curl` | Nordic Hamstring Curl | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/nordic-hamstring-curl.mp4` | 1270063 | Ready |
| `builtin-exercise:one-arm-band-kneeling-lat-pulldown` | One-Arm Band Kneeling Lat Pulldown | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/one-arm-band-kneeling-lat-pulldown.mp4` | 505361 | Ready |
| `builtin-exercise:one-arm-cable-bent-over-lateral-raise` | One-Arm Cable Bent Over Lateral Raise | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/one-arm-cable-bent-over-lateral-raise.mp4` | 727805 | Ready |
| `builtin-exercise:one-arm-cable-biceps-curl` | One-Arm Cable Biceps Curl | Biceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/one-arm-cable-biceps-curl.mp4` | 490842 | Ready |
| `builtin-exercise:one-arm-cable-cross-body-triceps-extension` | One-Arm Cable Cross Body Triceps Extension | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/one-arm-cable-cross-body-triceps-extension.mp4` | 385193 | Ready |
| `builtin-exercise:one-arm-cable-fly` | One-Arm Cable Fly | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/one-arm-cable-fly.mp4` | 540787 | Ready |
| `builtin-exercise:one-arm-cable-front-raise` | One-Arm Cable Front Raise | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/one-arm-cable-front-raise.mp4` | 642493 | Ready |
| `builtin-exercise:one-arm-cable-half-kneeling-lat-pulldown` | One-Arm Cable Half-Kneeling Lat Pulldown | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/one-arm-cable-half-kneeling-lat-pulldown.mp4` | 584609 | Ready |
| `builtin-exercise:one-arm-cable-lateral-raise` | One-Arm Cable Lateral Raise | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/one-arm-cable-lateral-raise.mp4` | 531701 | Ready |
| `builtin-exercise:one-arm-cable-low-row` | One-Arm Cable Low Row | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/one-arm-cable-low-row.mp4` | 537797 | Ready |
| `builtin-exercise:one-arm-cable-pushdown` | One-Arm Cable Pushdown | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/one-arm-cable-pushdown.mp4` | 534485 | Ready |
| `builtin-exercise:one-arm-cable-rear-delt-fly` | One-Arm Cable Rear Delt Fly | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/one-arm-cable-rear-delt-fly.mp4` | 678319 | Ready |
| `builtin-exercise:one-arm-cable-row` | One-Arm Cable Row | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/one-arm-cable-row.mp4` | 818717 | Ready |
| `builtin-exercise:one-arm-cable-triceps-pushdown` | One-Arm Cable Triceps Pushdown | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/one-arm-cable-triceps-pushdown.mp4` | 534193 | Ready |
| `builtin-exercise:one-arm-chest-supported-row-machine` | One-Arm Chest Supported Row Machine | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/one-arm-chest-supported-row-machine.mp4` | 568757 | Ready |
| `builtin-exercise:one-arm-dumbbell-bench-press` | One-Arm Dumbbell Bench Press | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/one-arm-dumbbell-bench-press.mp4` | 782913 | Ready |
| `builtin-exercise:one-arm-dumbbell-bent-over-scapula-row` | One-Arm Dumbbell Bent Over Scapula Row | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/one-arm-dumbbell-bent-over-scapula-row.mp4` | 592331 | Ready |
| `builtin-exercise:one-arm-dumbbell-incline-bench-press` | One-Arm Dumbbell Incline Bench Press | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/one-arm-dumbbell-incline-bench-press.mp4` | 479098 | Ready |
| `builtin-exercise:one-arm-dumbbell-incline-lateral-raise` | One-Arm Dumbbell Incline Lateral Raise | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/one-arm-dumbbell-incline-lateral-raise.mp4` | 490920 | Ready |
| `builtin-exercise:one-arm-dumbbell-lateral-raise` | One-Arm Dumbbell Lateral Raise | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/one-arm-dumbbell-lateral-raise.mp4` | 457900 | Ready |
| `builtin-exercise:one-arm-dumbbell-preacher-curl` | One-Arm Dumbbell Preacher Curl | Biceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/one-arm-dumbbell-preacher-curl.mp4` | 529847 | Ready |
| `builtin-exercise:one-arm-dumbbell-reverse-wrist-curl` | One-Arm Dumbbell Reverse Wrist Curl | Forearms | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/one-arm-dumbbell-reverse-wrist-curl.mp4` | 454181 | Ready |
| `builtin-exercise:one-arm-dumbbell-seated-kickback` | One-Arm Dumbbell Seated Kickback | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/one-arm-dumbbell-seated-kickback.mp4` | 564404 | Ready |
| `builtin-exercise:one-arm-dumbbell-supination` | One-Arm Dumbbell Supination | Forearms | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/one-arm-dumbbell-supination.mp4` | 570068 | Ready |
| `builtin-exercise:one-arm-dumbbell-supported-bent-over-lateral-raise` | One-Arm Dumbbell Supported Bent Over Lateral Raise | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/one-arm-dumbbell-supported-bent-over-lateral-raise.mp4` | 583614 | Ready |
| `builtin-exercise:one-arm-hammer-cable-curl` | One-Arm Hammer Cable Curl | Biceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/one-arm-hammer-cable-curl.mp4` | 585464 | Ready |
| `builtin-exercise:one-arm-high-row-cable` | One-Arm High Row Cable | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/one-arm-high-row-cable.mp4` | 538305 | Ready |
| `builtin-exercise:one-arm-high-to-low-cable-fly` | One-Arm High-to-Low Cable Fly | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/one-arm-high-to-low-cable-fly.mp4` | 627569 | Ready |
| `builtin-exercise:one-arm-katana-triceps-overhead-extension` | One-Arm Katana Triceps Overhead Extension | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/one-arm-katana-triceps-overhead-extension.mp4` | 525693 | Ready |
| `builtin-exercise:one-arm-kettlebell-overhead-press` | One-Arm Kettlebell Overhead Press | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/one-arm-kettlebell-overhead-press.mp4` | 506250 | Ready |
| `builtin-exercise:one-arm-kettlebell-swing` | One-Arm Kettlebell Swing | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/one-arm-kettlebell-swing.mp4` | 882126 | Ready |
| `builtin-exercise:one-arm-landmine-bent-over-row` | One-Arm Landmine Bent Over Row | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/one-arm-landmine-bent-over-row.mp4` | 722292 | Ready |
| `builtin-exercise:one-arm-landmine-half-kneeling-shoulder-press` | One-Arm Landmine Half Kneeling Shoulder Press | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/one-arm-landmine-half-kneeling-shoulder-press.mp4` | 630787 | Ready |
| `builtin-exercise:one-arm-landmine-standing-shoulder-press` | One-Arm Landmine Standing Shoulder Press | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/one-arm-landmine-standing-shoulder-press.mp4` | 608539 | Ready |
| `builtin-exercise:one-arm-lat-pulldown` | One-Arm Lat Pulldown | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/one-arm-lat-pulldown.mp4` | 616463 | Ready |
| `builtin-exercise:one-arm-lever-high-row` | One-Arm Lever High Row | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/one-arm-lever-high-row.mp4` | 787667 | Ready |
| `builtin-exercise:one-arm-low-cable-seated-row` | One-Arm Low Cable Seated Row | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/one-arm-low-cable-seated-row.mp4` | 448414 | Ready |
| `builtin-exercise:one-arm-low-fly-dumbbell` | One-Arm Low Fly Dumbbell | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/one-arm-low-fly-dumbbell.mp4` | 578588 | Ready |
| `builtin-exercise:one-arm-low-to-high-cable-fly` | One-Arm Low-to-High Cable Fly | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/one-arm-low-to-high-cable-fly.mp4` | 642766 | Ready |
| `builtin-exercise:one-arm-machine-preacher-curl` | One-Arm Machine Preacher Curl | Biceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/one-arm-machine-preacher-curl.mp4` | 603036 | Ready |
| `builtin-exercise:one-arm-neutral-wrist-dumbbell-curl` | One-Arm Neutral Wrist Dumbbell Curl | Forearms | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/one-arm-neutral-wrist-dumbbell-curl.mp4` | 429022 | Ready |
| `builtin-exercise:one-arm-overhead-triceps-extension` | One-Arm Overhead Triceps Extension | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/one-arm-overhead-triceps-extension.mp4` | 402211 | Ready |
| `builtin-exercise:one-arm-preacher-hammer-curl` | One-Arm Preacher Hammer Curl | Biceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/one-arm-preacher-hammer-curl.mp4` | 592121 | Ready |
| `builtin-exercise:one-arm-push-up` | One-Arm Push-Up | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/one-arm-push-up.mp4` | 1139202 | Ready |
| `builtin-exercise:one-arm-rear-delt-fly` | One-Arm Rear Delt Fly | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/one-arm-rear-delt-fly.mp4` | 619347 | Ready |
| `builtin-exercise:one-arm-reverse-grip-triceps-cable-pushdown` | One-Arm Reverse Grip Triceps Cable Pushdown | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/one-arm-reverse-grip-triceps-cable-pushdown.mp4` | 482881 | Ready |
| `builtin-exercise:one-arm-seated-row` | One-Arm Seated Row | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/one-arm-seated-row.mp4` | 745744 | Ready |
| `builtin-exercise:one-arm-shoulder-press-dumbbell` | One-Arm Shoulder Press Dumbbell | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/one-arm-shoulder-press-dumbbell.mp4` | 461043 | Ready |
| `builtin-exercise:one-arm-straight-arm-cable-lat-pulldown` | One-Arm Straight-Arm Cable Lat Pulldown | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/one-arm-straight-arm-cable-lat-pulldown.mp4` | 494770 | Ready |
| `builtin-exercise:one-arm-triceps-cable-pushdown` | One-Arm Triceps Cable Pushdown | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/one-arm-triceps-cable-pushdown.mp4` | 457290 | Ready |
| `builtin-exercise:one-arm-wrist-curl-dumbbell` | One-Arm Wrist Curl Dumbbell | Forearms | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/one-arm-wrist-curl-dumbbell.mp4` | 464945 | Ready |
| `builtin-exercise:opposite-side-elbow-to-knee` | Opposite side elbow to knee | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/opposite-side-elbow-to-knee.mp4` | 1954979 | Ready |
| `builtin-exercise:overhead-band-triceps-extension` | Overhead Band Triceps Extension | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/overhead-band-triceps-extension.mp4` | 552266 | Ready |
| `builtin-exercise:overhead-cable-triceps-exstension-bar` | Overhead Cable Triceps Exstension (bar) | Triceps | [Page](FitDex Exercise Catalog)) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/overhead-cable-triceps-exstension-bar.mp4` | 570715 | Ready |
| `builtin-exercise:overhead-triceps-stretch` | Overhead Triceps Stretch | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/overhead-triceps-stretch.mp4` | 695610 | Ready |
| `builtin-exercise:pec-deck-chest-fly` | Pec Deck Chest Fly | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/pec-deck-chest-fly.mp4` | 729075 | Ready |
| `builtin-exercise:pendlay-row` | Pendlay Row | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/pendlay-row.mp4` | 1044707 | Ready |
| `builtin-exercise:pigeon-pose` | Pigeon Pose | Gluteal | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/pigeon-pose.mp4` | 1451360 | Ready |
| `builtin-exercise:pike-push-up` | Pike Push-Up | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/pike-push-up.mp4` | 1077204 | Ready |
| `builtin-exercise:pike-push-up-between-benches` | Pike Push-Up Between Benches | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/pike-push-up-between-benches.mp4` | 911726 | Ready |
| `builtin-exercise:pike-push-up-between-chairs` | Pike Push-Up Between Chairs | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/pike-push-up-between-chairs.mp4` | 999022 | Ready |
| `builtin-exercise:pike-push-up-on-bench` | Pike Push-Up On Bench | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/pike-push-up-on-bench.mp4` | 910999 | Ready |
| `builtin-exercise:pin-bench-press` | Pin Bench Press | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/pin-bench-press.mp4` | 590463 | Ready |
| `builtin-exercise:pin-front-squat` | Pin Front Squat | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/pin-front-squat.mp4` | 779275 | Ready |
| `builtin-exercise:pin-squat` | Pin Squat | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/pin-squat.mp4` | 765469 | Ready |
| `builtin-exercise:pistol-box-squat` | Pistol Box Squat | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/pistol-box-squat.mp4` | 907547 | Ready |
| `builtin-exercise:pistol-squat` | Pistol Squat | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/pistol-squat.mp4` | 925017 | Ready |
| `builtin-exercise:planche-dips` | Planche Dips | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/planche-dips.mp4` | 677462 | Ready |
| `builtin-exercise:planche-push-up` | Planche Push-Up | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/planche-push-up.mp4` | 1382662 | Ready |
| `builtin-exercise:plank` | Plank | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/plank.mp4` | 617141 | Ready |
| `builtin-exercise:plate-bus-driver` | Plate Bus Driver | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/plate-bus-driver.mp4` | 657857 | Ready |
| `builtin-exercise:plate-front-raise` | Plate Front Raise | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/plate-front-raise.mp4` | 647515 | Ready |
| `builtin-exercise:plate-front-raise-drive` | Plate Front Raise Drive | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/plate-front-raise-drive.mp4` | 1266352 | Ready |
| `builtin-exercise:plyo-side-lunge` | Plyo side lunge | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/plyo-side-lunge.mp4` | 2314234 | Ready |
| `builtin-exercise:pogo-jumps` | Pogo Jumps | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/pogo-jumps.mp4` | 451856 | Ready |
| `builtin-exercise:poliquin-flyes` | Poliquin Flyes | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/poliquin-flyes.mp4` | 974878 | Ready |
| `builtin-exercise:poliquin-step-up` | Poliquin Step-Up | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/poliquin-step-up.mp4` | 580546 | Ready |
| `builtin-exercise:powell-raise` | Powell Raise | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/powell-raise.mp4` | 546032 | Ready |
| `builtin-exercise:power-clean` | Power Clean | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/power-clean.mp4` | 1489915 | Ready |
| `builtin-exercise:preacher-hammer-curl` | Preacher Hammer Curl | Biceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/preacher-hammer-curl.mp4` | 792451 | Ready |
| `builtin-exercise:prone-lying-leg-curl` | Prone Lying Leg Curl | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/prone-lying-leg-curl.mp4` | 756961 | Ready |
| `builtin-exercise:prone-swimmer` | Prone Swimmer | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/prone-swimmer.mp4` | 1029908 | Ready |
| `builtin-exercise:prowler-sled` | Prowler Sled | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/prowler-sled.mp4` | 1515937 | Ready |
| `builtin-exercise:pull-up` | Pull-Up | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/pull-up.mp4` | 457621 | Ready |
| `builtin-exercise:pull-up-neutral-grip` | Pull-Up Neutral Grip | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/pull-up-neutral-grip.mp4` | 623050 | Ready |
| `builtin-exercise:pull-up-wide-grip` | Pull-Up Wide Grip | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/pull-up-wide-grip.mp4` | 632409 | Ready |
| `builtin-exercise:punching-bag-boxing` | Punching Bag Boxing | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/punching-bag-boxing.mp4` | 573184 | Ready |
| `builtin-exercise:push-up` | Push-Up | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/push-up.mp4` | 1185223 | Ready |
| `builtin-exercise:push-up-on-parallel-bars` | Push-Up on Parallel Bars | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/push-up-on-parallel-bars.mp4` | 1142856 | Ready |
| `builtin-exercise:rear-deltoid-stretch` | Rear Deltoid Stretch | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/rear-deltoid-stretch.mp4` | 627289 | Ready |
| `builtin-exercise:rear-lunge` | Rear Lunge | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/rear-lunge.mp4` | 1522109 | Ready |
| `builtin-exercise:resistance-band-hip-adduction` | Resistance Band Hip Adduction | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/resistance-band-hip-adduction.mp4` | 523566 | Ready |
| `builtin-exercise:resistance-band-push-up` | Resistance Band Push-Up | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/resistance-band-push-up.mp4` | 1282217 | Ready |
| `builtin-exercise:reverse-crunches` | Reverse Crunches | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/reverse-crunches.mp4` | 1132340 | Ready |
| `builtin-exercise:reverse-grip-cable-curl` | Reverse Grip Cable Curl | Forearms | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/reverse-grip-cable-curl.mp4` | 510502 | Ready |
| `builtin-exercise:reverse-hand-push-up` | Reverse Hand Push-Up | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/reverse-hand-push-up.mp4` | 1252856 | Ready |
| `builtin-exercise:reverse-nordic-curl` | Reverse Nordic Curl | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/reverse-nordic-curl.mp4` | 1100113 | Ready |
| `builtin-exercise:reverse-wrist-push-up` | Reverse Wrist Push-Up | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/reverse-wrist-push-up.mp4` | 1523759 | Ready |
| `builtin-exercise:ring-dips` | Ring Dips | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/ring-dips.mp4` | 891181 | Ready |
| `builtin-exercise:ring-face-pull` | Ring Face Pull | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/ring-face-pull.mp4` | 1055320 | Ready |
| `builtin-exercise:ring-leg-curl` | Ring Leg Curl | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/ring-leg-curl.mp4` | 1250150 | Ready |
| `builtin-exercise:ring-muscle-up` | Ring Muscle Up | Biceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/ring-muscle-up.mp4` | 762062 | Ready |
| `builtin-exercise:ring-pike` | Ring Pike | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/ring-pike.mp4` | 1324255 | Ready |
| `builtin-exercise:ring-push-up` | Ring Push-Up | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/ring-push-up.mp4` | 1227714 | Ready |
| `builtin-exercise:ring-triceps-extension` | Ring Triceps Extension | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/ring-triceps-extension.mp4` | 839204 | Ready |
| `builtin-exercise:rings-pull-up` | Rings Pull-Up | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/rings-pull-up.mp4` | 707774 | Ready |
| `builtin-exercise:rocking-frog` | Rocking Frog | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/rocking-frog.mp4` | 965383 | Ready |
| `builtin-exercise:rocking-half-frog-stretch` | Rocking Half Frog Stretch | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/rocking-half-frog-stretch.mp4` | 962911 | Ready |
| `builtin-exercise:roll-calves` | Roll Calves | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/roll-calves.mp4` | 1045355 | Ready |
| `builtin-exercise:roll-foot` | Roll Foot | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/roll-foot.mp4` | 377604 | Ready |
| `builtin-exercise:romanian-deadlift` | Romanian Deadlift | Gluteal | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/romanian-deadlift.mp4` | 960117 | Ready |
| `builtin-exercise:rope-cable-hammer-curl` | Rope Cable Hammer Curl | Biceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/rope-cable-hammer-curl.mp4` | 569698 | Ready |
| `builtin-exercise:rope-straight-arm-lat-pulldown` | Rope Straight-Arm Lat Pulldown | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/rope-straight-arm-lat-pulldown.mp4` | 677111 | Ready |
| `builtin-exercise:rope-triceps-pushdown` | Rope Triceps Pushdown | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/rope-triceps-pushdown.mp4` | 436979 | Ready |
| `builtin-exercise:rotary-calf-raise` | Rotary Calf Raise | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/rotary-calf-raise.mp4` | 613420 | Ready |
| `builtin-exercise:rotary-torso` | Rotary Torso | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/rotary-torso.mp4` | 1881798 | Ready |
| `builtin-exercise:rowing-machine` | Rowing Machine | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/rowing-machine.mp4` | 1049687 | Ready |
| `builtin-exercise:running` | Running | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/running.mp4` | 809502 | Ready |
| `builtin-exercise:saw-plank` | Saw Plank | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/saw-plank.mp4` | 914043 | Ready |
| `builtin-exercise:scapula-push-up` | Scapula Push-Up | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/scapula-push-up.mp4` | 753387 | Ready |
| `builtin-exercise:scissors` | Scissors | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/scissors.mp4` | 897065 | Ready |
| `builtin-exercise:seal-row` | Seal Row | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/seal-row.mp4` | 805424 | Ready |
| `builtin-exercise:seated-ab-cable-crunch` | Seated Ab Cable Crunch | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/seated-ab-cable-crunch.mp4` | 887535 | Ready |
| `builtin-exercise:seated-alternate-crunches` | Seated Alternate Crunches | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/seated-alternate-crunches.mp4` | 1469977 | Ready |
| `builtin-exercise:seated-arnold-dumbbell-press` | Seated Arnold Dumbbell Press | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/seated-arnold-dumbbell-press.mp4` | 787848 | Ready |
| `builtin-exercise:seated-band-hip-abduction` | Seated Band Hip Abduction | Gluteal | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/seated-band-hip-abduction.mp4` | 692326 | Ready |
| `builtin-exercise:seated-barbell-shoulder-press` | Seated Barbell Shoulder Press | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/seated-barbell-shoulder-press.mp4` | 735132 | Ready |
| `builtin-exercise:seated-barbell-twist` | Seated Barbell Twist | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/seated-barbell-twist.mp4` | 841115 | Ready |
| `builtin-exercise:seated-bent-over-dumbbell-lateral-raise` | Seated Bent Over Dumbbell Lateral Raise | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/seated-bent-over-dumbbell-lateral-raise.mp4` | 830273 | Ready |
| `builtin-exercise:seated-cable-chest-press` | Seated Cable Chest Press | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/seated-cable-chest-press.mp4` | 645384 | Ready |
| `builtin-exercise:seated-cable-fly` | Seated Cable Fly | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/seated-cable-fly.mp4` | 643329 | Ready |
| `builtin-exercise:seated-cable-horizontal-french-press` | Seated Cable Horizontal French Press | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/seated-cable-horizontal-french-press.mp4` | 630910 | Ready |
| `builtin-exercise:seated-cable-low-row-neutral-grip` | Seated Cable Low Row Neutral Grip | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/seated-cable-low-row-neutral-grip.mp4` | 623849 | Ready |
| `builtin-exercise:seated-cable-row` | Seated Cable Row | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/seated-cable-row.mp4` | 571259 | Ready |
| `builtin-exercise:seated-cable-wide-grip-row` | Seated Cable Wide Grip Row | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/seated-cable-wide-grip-row.mp4` | 602058 | Ready |
| `builtin-exercise:seated-cable-wrist-curl` | Seated Cable Wrist Curl | Forearms | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/seated-cable-wrist-curl.mp4` | 390149 | Ready |
| `builtin-exercise:seated-calf-raise` | Seated Calf Raise | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/seated-calf-raise.mp4` | 850168 | Ready |
| `builtin-exercise:seated-chest-clam` | Seated Chest Clam | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/seated-chest-clam.mp4` | 1304537 | Ready |
| `builtin-exercise:seated-cuban-press` | Seated Cuban Press | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/seated-cuban-press.mp4` | 1031815 | Ready |
| `builtin-exercise:seated-dip-machine` | Seated Dip Machine | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/seated-dip-machine.mp4` | 954533 | Ready |
| `builtin-exercise:seated-dumbbell-curl` | Seated Dumbbell Curl | Biceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/seated-dumbbell-curl.mp4` | 762129 | Ready |
| `builtin-exercise:seated-dumbbell-shoulder-press` | Seated Dumbbell Shoulder Press | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/seated-dumbbell-shoulder-press.mp4` | 606264 | Ready |
| `builtin-exercise:seated-dumbbell-shrugs` | Seated Dumbbell Shrugs | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/seated-dumbbell-shrugs.mp4` | 444727 | Ready |
| `builtin-exercise:seated-face-pull` | Seated Face Pull | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/seated-face-pull.mp4` | 696528 | Ready |
| `builtin-exercise:seated-figure-4-stretch` | Seated Figure 4 Stretch | Gluteal | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/seated-figure-4-stretch.mp4` | 1176643 | Ready |
| `builtin-exercise:seated-flutter-kick` | Seated Flutter Kick | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/seated-flutter-kick.mp4` | 895235 | Ready |
| `builtin-exercise:seated-forward-fold` | Seated Forward Fold | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/seated-forward-fold.mp4` | 1179986 | Ready |
| `builtin-exercise:seated-good-morning` | Seated Good Morning | Gluteal | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/seated-good-morning.mp4` | 888537 | Ready |
| `builtin-exercise:seated-hammer-curl` | Seated Hammer Curl | Biceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/seated-hammer-curl.mp4` | 748559 | Ready |
| `builtin-exercise:seated-hip-abduction` | Seated Hip Abduction | Gluteal | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/seated-hip-abduction.mp4` | 750406 | Ready |
| `builtin-exercise:seated-hip-adduction` | Seated Hip Adduction | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/seated-hip-adduction.mp4` | 709892 | Ready |
| `builtin-exercise:seated-incline-biceps-curl` | Seated Incline Biceps Curl | Biceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/seated-incline-biceps-curl.mp4` | 663487 | Ready |
| `builtin-exercise:seated-leg-curl` | Seated Leg Curl | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/seated-leg-curl.mp4` | 974707 | Ready |
| `builtin-exercise:seated-leg-extension-machine` | Seated Leg Extension Machine | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/seated-leg-extension-machine.mp4` | 817094 | Ready |
| `builtin-exercise:seated-leg-raise` | Seated Leg Raise | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/seated-leg-raise.mp4` | 937340 | Ready |
| `builtin-exercise:seated-machine-trunk-rotation` | Seated Machine Trunk Rotation | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/seated-machine-trunk-rotation.mp4` | 744224 | Ready |
| `builtin-exercise:seated-reverse-circle-crunches` | Seated Reverse Circle Crunches | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/seated-reverse-circle-crunches.mp4` | 1348758 | Ready |
| `builtin-exercise:seated-shoulder-external-rotation` | Seated Shoulder External Rotation | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/seated-shoulder-external-rotation.mp4` | 519046 | Ready |
| `builtin-exercise:seated-shoulder-press-neutral-grip` | Seated Shoulder Press Neutral Grip | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/seated-shoulder-press-neutral-grip.mp4` | 659623 | Ready |
| `builtin-exercise:seated-single-leg-curl` | Seated Single Leg Curl | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/seated-single-leg-curl.mp4` | 707806 | Ready |
| `builtin-exercise:seated-single-leg-hamstring-stretch` | Seated Single Leg Hamstring Stretch | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/seated-single-leg-hamstring-stretch.mp4` | 762706 | Ready |
| `builtin-exercise:seated-triceps-bench-dip` | Seated Triceps Bench Dip | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/seated-triceps-bench-dip.mp4` | 932018 | Ready |
| `builtin-exercise:shoulder-tap` | Shoulder Tap | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/shoulder-tap.mp4` | 1162412 | Ready |
| `builtin-exercise:shoulderstand-pose` | Shoulderstand Pose | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/shoulderstand-pose.mp4` | 1211306 | Ready |
| `builtin-exercise:side-crunch` | Side Crunch | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/side-crunch.mp4` | 1288094 | Ready |
| `builtin-exercise:side-leg-swings` | Side Leg Swings | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/side-leg-swings.mp4` | 661388 | Ready |
| `builtin-exercise:side-lunges` | Side Lunges | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/side-lunges.mp4` | 1736028 | Ready |
| `builtin-exercise:side-lying-hip-abduction` | Side Lying Hip Abduction | Gluteal | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/side-lying-hip-abduction.mp4` | 724699 | Ready |
| `builtin-exercise:side-lying-quadriceps-stretch` | Side Lying Quadriceps Stretch | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/side-lying-quadriceps-stretch.mp4` | 521261 | Ready |
| `builtin-exercise:side-plank` | Side Plank | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/side-plank.mp4` | 1169842 | Ready |
| `builtin-exercise:side-plank-clamshell` | Side Plank Clamshell | Gluteal | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/side-plank-clamshell.mp4` | 643995 | Ready |
| `builtin-exercise:side-plank-hip-abduction` | Side Plank Hip Abduction | Gluteal | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/side-plank-hip-abduction.mp4` | 992208 | Ready |
| `builtin-exercise:single-dumbbell-curl` | Single Dumbbell Curl | Biceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/single-dumbbell-curl.mp4` | 614541 | Ready |
| `builtin-exercise:single-leg-box-jump` | Single-Leg Box Jump | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/single-leg-box-jump.mp4` | 673746 | Ready |
| `builtin-exercise:single-leg-cable-leg-curl` | Single-Leg Cable Leg Curl | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/single-leg-cable-leg-curl.mp4` | 587389 | Ready |
| `builtin-exercise:single-leg-calf-raise` | Single-Leg Calf Raise | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/single-leg-calf-raise.mp4` | 527730 | Ready |
| `builtin-exercise:single-leg-calf-raise-with-dumbbell` | Single-Leg Calf Raise with Dumbbell | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/single-leg-calf-raise-with-dumbbell.mp4` | 560625 | Ready |
| `builtin-exercise:single-leg-deadlift` | Single-Leg Deadlift | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/single-leg-deadlift.mp4` | 1119165 | Ready |
| `builtin-exercise:single-leg-dumbbell-deadlift` | Single Leg Dumbbell Deadlift | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/single-leg-dumbbell-deadlift.mp4` | 1006823 | Ready |
| `builtin-exercise:single-leg-extension` | Single-Leg Extension | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/single-leg-extension.mp4` | 712933 | Ready |
| `builtin-exercise:single-leg-lying-curl` | Single-Leg Lying Curl | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/single-leg-lying-curl.mp4` | 488878 | Ready |
| `builtin-exercise:single-leg-press` | Single Leg Press | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/single-leg-press.mp4` | 763373 | Ready |
| `builtin-exercise:single-leg-romanian-deadlift` | Single Leg Romanian Deadlift | Gluteal | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/single-leg-romanian-deadlift.mp4` | 1006823 | Ready |
| `builtin-exercise:single-leg-seated-calf-machine-raise` | Single Leg Seated Calf Machine Raise | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/single-leg-seated-calf-machine-raise.mp4` | 631466 | Ready |
| `builtin-exercise:single-leg-seated-calf-raise-with-dumbbell` | Single-Leg Seated Calf Raise with Dumbbell | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/single-leg-seated-calf-raise-with-dumbbell.mp4` | 585798 | Ready |
| `builtin-exercise:single-leg-smith-calf-raise` | Single Leg Smith Calf Raise | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/single-leg-smith-calf-raise.mp4` | 525733 | Ready |
| `builtin-exercise:single-leg-weighted-glute-bridge` | Single Leg Weighted Glute Bridge | Gluteal | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/single-leg-weighted-glute-bridge.mp4` | 1153611 | Ready |
| `builtin-exercise:sissy-squat` | Sissy Squat | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/sissy-squat.mp4` | 897464 | Ready |
| `builtin-exercise:sit-up` | Sit Up | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/sit-up.mp4` | 1326797 | Ready |
| `builtin-exercise:sitting-twist` | Sitting Twist | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/sitting-twist.mp4` | 1606760 | Ready |
| `builtin-exercise:ski-ergometer` | Ski Ergometer | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/ski-ergometer.mp4` | 812277 | Ready |
| `builtin-exercise:sliding-leg-curl` | Sliding Leg Curl | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/sliding-leg-curl.mp4` | 1195437 | Ready |
| `builtin-exercise:smith-bench-press` | Smith Bench Press | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/smith-bench-press.mp4` | 573825 | Ready |
| `builtin-exercise:smith-bent-over-row` | Smith Bent Over Row | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/smith-bent-over-row.mp4` | 539541 | Ready |
| `builtin-exercise:smith-calf-raises` | Smith Calf Raises | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/smith-calf-raises.mp4` | 546645 | Ready |
| `builtin-exercise:smith-chair-squat` | Smith Chair Squat | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/smith-chair-squat.mp4` | 723257 | Ready |
| `builtin-exercise:smith-front-squat` | Smith Front Squat | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/smith-front-squat.mp4` | 794228 | Ready |
| `builtin-exercise:smith-hack-squat` | Smith Hack Squat | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/smith-hack-squat.mp4` | 913777 | Ready |
| `builtin-exercise:smith-incline-chest-press` | Smith Incline Chest Press | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/smith-incline-chest-press.mp4` | 631051 | Ready |
| `builtin-exercise:smith-kneeling-hip-thrust` | Smith Kneeling Hip Thrust | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/smith-kneeling-hip-thrust.mp4` | 657687 | Ready |
| `builtin-exercise:smith-machibe-glute-kickback` | Smith Machibe Glute Kickback | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/smith-machibe-glute-kickback.mp4` | 559772 | Ready |
| `builtin-exercise:smith-machine-good-morning` | Smith Machine Good Morning | Gluteal | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/smith-machine-good-morning.mp4` | 778519 | Ready |
| `builtin-exercise:smith-machine-upright-row` | Smith Machine Upright Row | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/smith-machine-upright-row.mp4` | 721021 | Ready |
| `builtin-exercise:smith-rear-lunge` | Smith Rear Lunge | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/smith-rear-lunge.mp4` | 833422 | Ready |
| `builtin-exercise:smith-romanian-deadlift` | Smith Romanian Deadlift | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/smith-romanian-deadlift.mp4` | 830771 | Ready |
| `builtin-exercise:smith-seated-behind-neck-press` | Smith Seated Behind Neck Press | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/smith-seated-behind-neck-press.mp4` | 645238 | Ready |
| `builtin-exercise:smith-seated-calf-raise` | Smith Seated Calf Raise | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/smith-seated-calf-raise.mp4` | 549972 | Ready |
| `builtin-exercise:smith-shoulder-press` | Smith Shoulder Press | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/smith-shoulder-press.mp4` | 594996 | Ready |
| `builtin-exercise:smith-shoulder-shrug` | Smith Shoulder Shrug | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/smith-shoulder-shrug.mp4` | 453258 | Ready |
| `builtin-exercise:smith-split-squat` | Smith Split Squat | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/smith-split-squat.mp4` | 659619 | Ready |
| `builtin-exercise:smith-squat` | Smith Squat | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/smith-squat.mp4` | 813516 | Ready |
| `builtin-exercise:smith-squat-to-bench` | Smith Squat To Bench | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/smith-squat-to-bench.mp4` | 824008 | Ready |
| `builtin-exercise:smith-zercher-squat` | Smith Zercher Squat | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/smith-zercher-squat.mp4` | 795660 | Ready |
| `builtin-exercise:snatch` | Snatch | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/snatch.mp4` | 1083191 | Ready |
| `builtin-exercise:snatch-pull` | Snatch Pull | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/snatch-pull.mp4` | 917337 | Ready |
| `builtin-exercise:spider-hammer-curl` | Spider Hammer Curl | Biceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/spider-hammer-curl.mp4` | 913317 | Ready |
| `builtin-exercise:split-squat` | Split Squat | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/split-squat.mp4` | 778681 | Ready |
| `builtin-exercise:split-squat-front-foot-elevated` | Split Squat Front Foot Elevated | Legs, Gluteal | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/split-squat-front-foot-elevated.mp4` | 808327 | Ready |
| `builtin-exercise:squat` | Squat | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/squat.mp4` | 957400 | Ready |
| `builtin-exercise:stability-ball-crunch` | Stability Ball Crunch | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/stability-ball-crunch.mp4` | 804571 | Ready |
| `builtin-exercise:stabillity-ball-wall-squat` | Stabillity Ball Wall Squat | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/stabillity-ball-wall-squat.mp4` | 729622 | Ready |
| `builtin-exercise:stacionary-bike` | Stacionary Bike | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/stacionary-bike.mp4` | 609937 | Ready |
| `builtin-exercise:stair-climber` | Stair Climber | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/stair-climber.mp4` | 569467 | Ready |
| `builtin-exercise:standing-air-bike` | Standing Air Bike | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/standing-air-bike.mp4` | 1469145 | Ready |
| `builtin-exercise:standing-cable-ab-crunch` | Standing Cable Ab Crunch | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/standing-cable-ab-crunch.mp4` | 1041905 | Ready |
| `builtin-exercise:standing-cable-chest-press` | Standing Cable Chest Press | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/standing-cable-chest-press.mp4` | 666270 | Ready |
| `builtin-exercise:standing-cable-low-chest-press` | Standing Cable Low Chest Press | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/standing-cable-low-chest-press.mp4` | 775593 | Ready |
| `builtin-exercise:standing-calf-raise` | Standing Calf Raise | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/standing-calf-raise.mp4` | 546688 | Ready |
| `builtin-exercise:standing-chest-opener` | Standing Chest Opener | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/standing-chest-opener.mp4` | 762075 | Ready |
| `builtin-exercise:standing-cuban-press` | Standing Cuban Press | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/standing-cuban-press.mp4` | 1173721 | Ready |
| `builtin-exercise:standing-downward-dog` | Standing Downward Dog | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/standing-downward-dog.mp4` | 805224 | Ready |
| `builtin-exercise:standing-dumbbell-shoulder-press` | Standing Dumbbell Shoulder Press | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/standing-dumbbell-shoulder-press.mp4` | 529993 | Ready |
| `builtin-exercise:standing-forward-bend` | Standing Forward Bend | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/standing-forward-bend.mp4` | 856941 | Ready |
| `builtin-exercise:standing-hip-abduction` | Standing Hip Abduction | Gluteal | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/standing-hip-abduction.mp4` | 995022 | Ready |
| `builtin-exercise:standing-leg-curl` | Standing Leg Curl | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/standing-leg-curl.mp4` | 621133 | Ready |
| `builtin-exercise:standing-one-dumbbell-french-press` | Standing One Dumbbell French Press | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/standing-one-dumbbell-french-press.mp4` | 450055 | Ready |
| `builtin-exercise:standing-overhead-barbell-triceps-extension` | Standing Overhead Barbell Triceps Extension | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/standing-overhead-barbell-triceps-extension.mp4` | 545669 | Ready |
| `builtin-exercise:standing-press-around` | Standing Press Around | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/standing-press-around.mp4` | 482662 | Ready |
| `builtin-exercise:standing-quadriceps-stretch` | Standing Quadriceps Stretch | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/standing-quadriceps-stretch.mp4` | 1324471 | Ready |
| `builtin-exercise:standing-russian-twist` | Standing Russian Twist | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/standing-russian-twist.mp4` | 1561360 | Ready |
| `builtin-exercise:standing-side-lat-stretch` | Standing Side Lat Stretch | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/standing-side-lat-stretch.mp4` | 712924 | Ready |
| `builtin-exercise:standing-tibialis-raise` | Standing Tibialis Raise | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/standing-tibialis-raise.mp4` | 444025 | Ready |
| `builtin-exercise:static-front-hold` | Static Front Hold | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/static-front-hold.mp4` | 1038011 | Ready |
| `builtin-exercise:straddle-planche` | Straddle Planche | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/straddle-planche.mp4` | 1498962 | Ready |
| `builtin-exercise:straight-arm-lat-pulldown` | Straight-Arm Lat Pulldown | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/straight-arm-lat-pulldown.mp4` | 681737 | Ready |
| `builtin-exercise:straight-bar-dips` | Straight Bar Dips | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/straight-bar-dips.mp4` | 660521 | Ready |
| `builtin-exercise:straight-leg-raise-on-dip-bars` | Straight Leg Raise on Dip Bars | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/straight-leg-raise-on-dip-bars.mp4` | 799919 | Ready |
| `builtin-exercise:sumo-deadlift` | Sumo Deadlift | Gluteal | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/sumo-deadlift.mp4` | 1203637 | Ready |
| `builtin-exercise:sumo-squat` | Sumo Squat | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/sumo-squat.mp4` | 908655 | Ready |
| `builtin-exercise:sumo-squat-off-stepbox` | Sumo Squat off Stepbox | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/sumo-squat-off-stepbox.mp4` | 958888 | Ready |
| `builtin-exercise:sumo-squat-with-smith` | Sumo Squat With Smith | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/sumo-squat-with-smith.mp4` | 756220 | Ready |
| `builtin-exercise:superman` | Superman | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/superman.mp4` | 1258404 | Ready |
| `builtin-exercise:superman-push-up` | Superman Push-Up | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/superman-push-up.mp4` | 916232 | Ready |
| `builtin-exercise:suspension-chest-fly` | Suspension Chest Fly | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/suspension-chest-fly.mp4` | 1125306 | Ready |
| `builtin-exercise:suspension-inverted-row` | Suspension Inverted Row | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/suspension-inverted-row.mp4` | 1337222 | Ready |
| `builtin-exercise:suspension-row` | Suspension Row | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/suspension-row.mp4` | 975659 | Ready |
| `builtin-exercise:suspension-triceps-extension` | Suspension Triceps Extension | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/suspension-triceps-extension.mp4` | 839204 | Ready |
| `builtin-exercise:suspension-v-ups` | Suspension V-Ups | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/suspension-v-ups.mp4` | 1379974 | Ready |
| `builtin-exercise:svend-press` | Svend Press | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/svend-press.mp4` | 542607 | Ready |
| `builtin-exercise:swiss-ball-leg-curl` | Swiss Ball Leg Curl | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/swiss-ball-leg-curl.mp4` | 949823 | Ready |
| `builtin-exercise:swiss-ball-plank` | Swiss Ball Plank | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/swiss-ball-plank.mp4` | 626185 | Ready |
| `builtin-exercise:t-bar-bent-over-row` | T-Bar Bent Over Row | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/t-bar-bent-over-row.mp4` | 793613 | Ready |
| `builtin-exercise:t-bar-chest-suported-row` | T-Bar Chest Suported Row | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/t-bar-chest-suported-row.mp4` | 667819 | Ready |
| `builtin-exercise:tate-press` | Tate Press | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/tate-press.mp4` | 776416 | Ready |
| `builtin-exercise:terminal-knee-extension` | Terminal Knee Extension | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/terminal-knee-extension.mp4` | 461195 | Ready |
| `builtin-exercise:toe-touches` | Toe Touches | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/toe-touches.mp4` | 2058230 | Ready |
| `builtin-exercise:toes-to-bar` | Toes To Bar | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/toes-to-bar.mp4` | 819345 | Ready |
| `builtin-exercise:trap-bar-deadlift` | Trap Bar Deadlift | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/trap-bar-deadlift.mp4` | 1183214 | Ready |
| `builtin-exercise:trap-bar-shrugs` | Trap Bar Shrugs | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/trap-bar-shrugs.mp4` | 523455 | Ready |
| `builtin-exercise:trap-y-raise` | Trap Y Raise | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/trap-y-raise.mp4` | 659484 | Ready |
| `builtin-exercise:treadmill-climbing` | Treadmill Climbing | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/treadmill-climbing.mp4` | 600687 | Ready |
| `builtin-exercise:treadmill-run` | Treadmill Run | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/treadmill-run.mp4` | 809539 | Ready |
| `builtin-exercise:triceps-cable-kickback` | Triceps Cable Kickback | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/triceps-cable-kickback.mp4` | 561863 | Ready |
| `builtin-exercise:triceps-cable-pushdown-reverse-grip` | Triceps Cable Pushdown Reverse Grip | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/triceps-cable-pushdown-reverse-grip.mp4` | 474208 | Ready |
| `builtin-exercise:triceps-push-up` | Triceps Push-Up | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/triceps-push-up.mp4` | 1248915 | Ready |
| `builtin-exercise:triceps-pushdown-v-bar` | Triceps Pushdown V-Bar | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/triceps-pushdown-v-bar.mp4` | 517575 | Ready |
| `builtin-exercise:trx-biceps-curl` | TRX Biceps Curl | Biceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/trx-biceps-curl.mp4` | 835398 | Ready |
| `builtin-exercise:trx-single-leg-bird-dog` | TRX Single Leg Bird Dog | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/trx-single-leg-bird-dog.mp4` | 1469412 | Ready |
| `builtin-exercise:tsunami-overhead-press` | Tsunami Overhead Press | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/tsunami-overhead-press.mp4` | 702626 | Ready |
| `builtin-exercise:turkish-get-up` | Turkish Get Up | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/turkish-get-up.mp4` | 2933718 | Ready |
| `builtin-exercise:underhand-triceps-extension` | Underhand Triceps Extension | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/underhand-triceps-extension.mp4` | 490548 | Ready |
| `builtin-exercise:unilateral-farmer-walk` | Unilateral Farmer Walk | Forearms | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/unilateral-farmer-walk.mp4` | 381003 | Ready |
| `builtin-exercise:upward-dog` | Upward Dog | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/upward-dog.mp4` | 1231974 | Ready |
| `builtin-exercise:v-sit-crunch` | V-Sit Crunch | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/v-sit-crunch.mp4` | 1164462 | Ready |
| `builtin-exercise:v-up` | V-Up | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/v-up.mp4` | 1510828 | Ready |
| `builtin-exercise:vertical-leg-press-smith-machine` | Vertical Leg Press Smith Machine | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/vertical-leg-press-smith-machine.mp4` | 594610 | Ready |
| `builtin-exercise:walking-cardio` | Walking Cardio | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/walking-cardio.mp4` | 759272 | Ready |
| `builtin-exercise:walking-lunges` | Walking Lunges | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/walking-lunges.mp4` | 1304911 | Ready |
| `builtin-exercise:wall-angel` | Wall Angel | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/wall-angel.mp4` | 451485 | Ready |
| `builtin-exercise:wall-sit` | Wall Sit | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/wall-sit.mp4` | 833632 | Ready |
| `builtin-exercise:weighted-ab-crunches` | Weighted Ab Crunches | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/weighted-ab-crunches.mp4` | 1026014 | Ready |
| `builtin-exercise:weighted-back-extension` | Weighted Back Extension | Gluteal | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/weighted-back-extension.mp4` | 792567 | Ready |
| `builtin-exercise:weighted-bench-dips` | Weighted Bench Dips | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/weighted-bench-dips.mp4` | 945194 | Ready |
| `builtin-exercise:weighted-chin-up` | Weighted Chin Up | Biceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/weighted-chin-up.mp4` | 671908 | Ready |
| `builtin-exercise:weighted-cossack-squat` | Weighted Cossack Squat | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/weighted-cossack-squat.mp4` | 1846059 | Ready |
| `builtin-exercise:weighted-dead-bug` | Weighted Dead Bug | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/weighted-dead-bug.mp4` | 1678669 | Ready |
| `builtin-exercise:weighted-decline-crunch` | Weighted Decline Crunch | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/weighted-decline-crunch.mp4` | 718627 | Ready |
| `builtin-exercise:weighted-dips` | Weighted Dips | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/weighted-dips.mp4` | 810153 | Ready |
| `builtin-exercise:weighted-glute-bridge` | Weighted Glute Bridge | Gluteal | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/weighted-glute-bridge.mp4` | 1075651 | Ready |
| `builtin-exercise:weighted-hanging-leg-raise` | Weighted Hanging Leg Raise | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/weighted-hanging-leg-raise.mp4` | 736988 | Ready |
| `builtin-exercise:weighted-hollow-body-hold` | Weighted Hollow Body Hold | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/weighted-hollow-body-hold.mp4` | 561027 | Ready |
| `builtin-exercise:weighted-muscle-up` | Weighted Muscle-Up | Triceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/weighted-muscle-up.mp4` | 394460 | Ready |
| `builtin-exercise:weighted-pistol-squat` | Weighted Pistol Squat | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/weighted-pistol-squat.mp4` | 839008 | Ready |
| `builtin-exercise:weighted-plank` | Weighted Plank | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/weighted-plank.mp4` | 579880 | Ready |
| `builtin-exercise:weighted-pull-up` | Weighted Pull-Up | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/weighted-pull-up.mp4` | 704261 | Ready |
| `builtin-exercise:weighted-push-up` | Weighted Push-Up | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/weighted-push-up.mp4` | 1270841 | Ready |
| `builtin-exercise:weighted-russian-twist` | Weighted Russian Twist | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/weighted-russian-twist.mp4` | 1351753 | Ready |
| `builtin-exercise:weighted-seated-calf-raise` | Weighted Seated Calf Raise | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/weighted-seated-calf-raise.mp4` | 688964 | Ready |
| `builtin-exercise:weighted-sissy-squat` | Weighted Sissy Squat | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/weighted-sissy-squat.mp4` | 896655 | Ready |
| `builtin-exercise:weighted-sit-up` | Weighted Sit Up | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/weighted-sit-up.mp4` | 966591 | Ready |
| `builtin-exercise:weighted-straight-arm-crunch` | Weighted Straight Arm Crunch | Abs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/weighted-straight-arm-crunch.mp4` | 893808 | Ready |
| `builtin-exercise:weighted-woodchopper` | Weighted Woodchopper | Shoulders | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/weighted-woodchopper.mp4` | 995247 | Ready |
| `builtin-exercise:wide-grip-chest-supported-row` | Wide Grip Chest Supported Row | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/wide-grip-chest-supported-row.mp4` | 787842 | Ready |
| `builtin-exercise:wide-grip-lat-pulldown` | Wide Grip Lat Pulldown | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/wide-grip-lat-pulldown.mp4` | 631522 | Ready |
| `builtin-exercise:wide-grip-rear-pull-up` | Wide Grip Rear Pull-Up | Back | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/wide-grip-rear-pull-up.mp4` | 782404 | Ready |
| `builtin-exercise:wide-grip-standing-barbell-curl` | Wide Grip Standing Barbell Curl | Biceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/wide-grip-standing-barbell-curl.mp4` | 691923 | Ready |
| `builtin-exercise:wide-hand-push-up` | Wide Hand Push-Up | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/wide-hand-push-up.mp4` | 1016065 | Ready |
| `builtin-exercise:worlds-greatest-stretch` | World’s Greatest Stretch | Chest | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/worlds-greatest-stretch.mp4` | 1093622 | Ready |
| `builtin-exercise:wrist-push-up` | Wrist Push-Up | Forearms | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/wrist-push-up.mp4` | 903661 | Ready |
| `builtin-exercise:wrist-roller` | Wrist Roller | Forearms | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/wrist-roller.mp4` | 673047 | Ready |
| `builtin-exercise:zercher-squat` | Zercher Squat | Legs | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/zercher-squat.mp4` | 926585 | Ready |
| `builtin-exercise:zottman-curl` | Zottman Curl | Biceps | [Page](FitDex Exercise Catalog) | [Asset](Local / CDN Media) | video/mp4 · available | `/exercises/zottman-curl.mp4` | 883663 | Ready |

## Legacy v2 → v3 migration decisions (399)

Every former built-in ID has one deterministic decision. Exact/Equivalent successors remap preferences and workout references. Removed records remain archived for history; workout-exercise rows receive name/category snapshots.

| Legacy ID | Legacy name | Old category | Successor | Decision | Basis |
| --- | --- | --- | --- | --- | --- |
| `builtin-exercise:barbell-bench-press` | Barbell Bench Press | Chest | `builtin-exercise:barbell-bench-press` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:dumbbell-bench-press` | Dumbbell Bench Press | Chest | `builtin-exercise:dumbbell-bench-press` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:incline-barbell-bench-press` | Incline Barbell Bench Press | Chest | `builtin-exercise:incline-barbell-bench-press` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:incline-dumbbell-bench-press` | Incline Dumbbell Bench Press | Chest | `builtin-exercise:incline-dumbbell-bench-press` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:decline-barbell-bench-press` | Decline Barbell Bench Press | Chest | `builtin-exercise:decline-barbell-bench-press` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:decline-dumbbell-bench-press` | Decline Dumbbell Bench Press | Chest | `builtin-exercise:decline-dumbbell-bench-press` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:machine-chest-press` | Machine Chest Press | Chest | `builtin-exercise:machine-chest-press` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:incline-machine-press` | Incline Machine Press | Chest | `builtin-exercise:incline-hammer-chest-press` | Equivalent | reviewed canonical-name/setup equivalent in live FitDex inventory |
| `builtin-exercise:smith-machine-bench-press` | Smith Machine Bench Press | Chest | `builtin-exercise:smith-bench-press` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:smith-machine-incline-press` | Smith Machine Incline Press | Chest | `builtin-exercise:smith-incline-chest-press` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:cable-fly` | Cable Fly | Chest | `builtin-exercise:cable-middle-chest-fly` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:low-to-high-cable-fly` | Low-to-High Cable Fly | Chest | `builtin-exercise:low-high-cable-chest-fly` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:high-to-low-cable-fly` | High-to-Low Cable Fly | Chest | `builtin-exercise:high-low-cable-chest-fly` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:pec-deck` | Pec Deck | Chest | `builtin-exercise:pec-deck-chest-fly` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:push-up` | Push-Up | Chest | `builtin-exercise:push-up` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:incline-push-up` | Incline Push-Up | Chest | `builtin-exercise:incline-push-up` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:decline-push-up` | Decline Push-Up | Chest | `builtin-exercise:decline-push-up` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:chest-dip` | Chest Dip | Chest | `builtin-exercise:chest-dips` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:dumbbell-squeeze-press` | Dumbbell Squeeze Press | Chest | `builtin-exercise:close-grip-dumbbell-press` | Equivalent | reviewed canonical-name/setup equivalent in live FitDex inventory |
| `builtin-exercise:single-arm-cable-chest-press` | Single-Arm Cable Chest Press | Chest | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:resistance-band-chest-press` | Resistance Band Chest Press | Chest | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:plate-pinch-press` | Plate Pinch Press | Chest | `builtin-exercise:svend-press` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:lat-pulldown` | Lat Pulldown | Back | `builtin-exercise:cable-lat-pulldown` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:neutral-grip-lat-pulldown` | Neutral-Grip Lat Pulldown | Back | `builtin-exercise:cable-neutral-grip-lat-pulldown` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:wide-grip-lat-pulldown` | Wide-Grip Lat Pulldown | Back | `builtin-exercise:wide-grip-lat-pulldown` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:reverse-grip-lat-pulldown` | Reverse-Grip Lat Pulldown | Back | `builtin-exercise:cable-reverse-grip-pulldown` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:pull-up` | Pull-Up | Back | `builtin-exercise:pull-up` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:chin-up` | Chin-Up | Back | `builtin-exercise:chin-up` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:neutral-grip-pull-up` | Neutral-Grip Pull-Up | Back | `builtin-exercise:pull-up-neutral-grip` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:assisted-pull-up` | Assisted Pull-Up | Back | `builtin-exercise:assisted-pull-up` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:seated-cable-row` | Seated Cable Row | Back | `builtin-exercise:seated-cable-row` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:wide-grip-seated-cable-row` | Wide-Grip Seated Cable Row | Back | `builtin-exercise:seated-cable-wide-grip-row` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:chest-supported-dumbbell-row` | Chest-Supported Dumbbell Row | Back | `builtin-exercise:dumbbell-neutral-grip-incline-bench-row` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:chest-supported-t-bar-row` | Chest-Supported T-Bar Row | Back | `builtin-exercise:t-bar-chest-suported-row` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:machine-row` | Machine Row | Back | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:iso-lateral-machine-row` | Iso-Lateral Machine Row | Back | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:barbell-bent-over-row` | Barbell Bent-Over Row | Back | `builtin-exercise:barbell-bent-over-row` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:pendlay-row` | Pendlay Row | Back | `builtin-exercise:pendlay-row` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:single-arm-dumbbell-row` | Single-Arm Dumbbell Row | Back | `builtin-exercise:dumbbell-bent-over-row` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:t-bar-row` | T-Bar Row | Back | `builtin-exercise:t-bar-bent-over-row` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:landmine-row` | Landmine Row | Back | `builtin-exercise:close-grip-landmine-row` | Equivalent | reviewed canonical-name/setup equivalent in live FitDex inventory |
| `builtin-exercise:inverted-row` | Inverted Row | Back | `builtin-exercise:inverted-row-australian` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog) |
| `builtin-exercise:straight-arm-pulldown` | Straight-Arm Pulldown | Back | `builtin-exercise:straight-arm-lat-pulldown` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:cable-pullover` | Cable Pullover | Back | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:dumbbell-pullover` | Dumbbell Pullover | Back | `builtin-exercise:dumbbell-lat-pullover` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:rack-pull` | Rack Pull | Back | `builtin-exercise:barbell-rack-pull` | Equivalent | reviewed canonical-name/setup equivalent in live FitDex inventory |
| `builtin-exercise:45-degree-back-extension` | 45-Degree Back Extension | Back | `builtin-exercise:back-extension` | Equivalent | reviewed canonical-name/setup equivalent in live FitDex inventory |
| `builtin-exercise:barbell-good-morning` | Barbell Good Morning | Legs | `builtin-exercise:barbell-good-morning` | Exact | exact canonical slug/name in live FitDex inventory |
| `builtin-exercise:barbell-overhead-press` | Barbell Overhead Press | Shoulders | `builtin-exercise:barbell-overhead-press` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:seated-barbell-shoulder-press` | Seated Barbell Shoulder Press | Shoulders | `builtin-exercise:seated-barbell-shoulder-press` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:dumbbell-shoulder-press` | Dumbbell Shoulder Press | Shoulders | `builtin-exercise:standing-dumbbell-shoulder-press` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:arnold-press` | Arnold Press | Shoulders | `builtin-exercise:seated-arnold-dumbbell-press` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:machine-shoulder-press` | Machine Shoulder Press | Shoulders | `builtin-exercise:machine-shoulder-press` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:smith-machine-shoulder-press` | Smith Machine Shoulder Press | Shoulders | `builtin-exercise:smith-shoulder-press` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:landmine-press` | Landmine Press | Shoulders | `builtin-exercise:landmine-press` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:dumbbell-front-raise` | Dumbbell Front Raise | Shoulders | `builtin-exercise:dumbbell-front-raise` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:cable-front-raise` | Cable Front Raise | Shoulders | `builtin-exercise:cable-front-raise` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:dumbbell-lateral-raise` | Dumbbell Lateral Raise | Shoulders | `builtin-exercise:dumbbell-lateral-raise` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:cable-lateral-raise` | Cable Lateral Raise | Shoulders | `builtin-exercise:cable-lateral-raise` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:machine-lateral-raise` | Machine Lateral Raise | Shoulders | `builtin-exercise:machine-lateral-raise` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:lean-away-cable-lateral-raise` | Lean-Away Cable Lateral Raise | Shoulders | `builtin-exercise:cable-leaning-lateral-raise` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:dumbbell-rear-delt-fly` | Dumbbell Rear Delt Fly | Shoulders | `builtin-exercise:bent-over-dumbbell-lateral-raise` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:reverse-pec-deck` | Reverse Pec Deck | Shoulders | `builtin-exercise:machine-reverse-flyes` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:cable-rear-delt-fly` | Cable Rear Delt Fly | Shoulders | `builtin-exercise:cable-rear-delt-fly-reverse-fly` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog) |
| `builtin-exercise:face-pull` | Face Pull | Shoulders | `builtin-exercise:cable-face-pull` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:band-face-pull` | Band Face Pull | Shoulders | `builtin-exercise:banded-face-pull` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:cable-external-rotation` | Cable External Rotation | Shoulders | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:band-external-rotation` | Band External Rotation | Shoulders | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:barbell-curl` | Barbell Curl | Arms | `builtin-exercise:biceps-barbell-curl` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:ez-bar-curl` | EZ-Bar Curl | Arms | `builtin-exercise:ez-bar-biceps-curl` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:dumbbell-curl` | Dumbbell Curl | Arms | `builtin-exercise:dumbbell-biceps-curl` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:alternating-dumbbell-curl` | Alternating Dumbbell Curl | Arms | `builtin-exercise:dumbbell-alternate-supinated-curl` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:incline-dumbbell-curl` | Incline Dumbbell Curl | Arms | `builtin-exercise:seated-incline-biceps-curl` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:preacher-curl` | Preacher Curl | Arms | `builtin-exercise:ez-bar-preacher-curl` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:machine-preacher-curl` | Machine Preacher Curl | Arms | `builtin-exercise:machine-preacher-curl` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:cable-curl` | Cable Curl | Arms | `builtin-exercise:bar-cable-biceps-curl` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:bayesian-cable-curl` | Bayesian Cable Curl | Arms | `builtin-exercise:bayesian-cable-curl` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:spider-curl` | Spider Curl | Arms | `builtin-exercise:dumbbell-spider-curl` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:concentration-curl` | Concentration Curl | Arms | `builtin-exercise:dumbbell-concentration-curl` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:hammer-curl` | Hammer Curl | Arms | `builtin-exercise:dumbbell-hammer-curl` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:cross-body-hammer-curl` | Cross-Body Hammer Curl | Arms | `builtin-exercise:dumbbell-cross-body-hammer-curl` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:reverse-curl` | Reverse Curl | Arms | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:cable-triceps-pushdown` | Cable Triceps Pushdown | Arms | `builtin-exercise:cable-triceps-pushdown` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:rope-triceps-pushdown` | Rope Triceps Pushdown | Arms | `builtin-exercise:rope-triceps-pushdown` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:overhead-cable-triceps-extension` | Overhead Cable Triceps Extension | Arms | `builtin-exercise:cable-overhead-triceps-extension` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:dumbbell-overhead-triceps-extension` | Dumbbell Overhead Triceps Extension | Arms | `builtin-exercise:standing-one-dumbbell-french-press` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:ez-bar-skull-crusher` | EZ-Bar Skull Crusher | Arms | `builtin-exercise:lying-ez-bar-triceps-extension` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:close-grip-bench-press` | Close-Grip Bench Press | Arms | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:diamond-push-up` | Diamond Push-Up | Arms | `builtin-exercise:diamond-push-up` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:bench-dip` | Bench Dip | Arms | `builtin-exercise:seated-triceps-bench-dip` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:cable-triceps-kickback` | Cable Triceps Kickback | Arms | `builtin-exercise:triceps-cable-kickback` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:single-arm-triceps-pushdown` | Single-Arm Triceps Pushdown | Arms | `builtin-exercise:one-arm-triceps-cable-pushdown` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:dumbbell-wrist-curl` | Dumbbell Wrist Curl | Arms | `builtin-exercise:dumbbell-standing-wrist-curl` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:dumbbell-reverse-wrist-curl` | Dumbbell Reverse Wrist Curl | Arms | `builtin-exercise:dumbbell-standing-reverse-wrist-curls` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:barbell-wrist-curl` | Barbell Wrist Curl | Arms | `builtin-exercise:barbell-wrist-curl` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:plate-pinch-hold` | Plate Pinch Hold | Arms | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:back-squat` | Back Squat | Legs | `builtin-exercise:barbell-squat` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:front-squat` | Front Squat | Legs | `builtin-exercise:front-squat` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:goblet-squat` | Goblet Squat | Legs | `builtin-exercise:goblet-squat` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:hack-squat` | Hack Squat | Legs | `builtin-exercise:machine-hack-squat` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:smith-machine-squat` | Smith Machine Squat | Legs | `builtin-exercise:smith-squat` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:belt-squat` | Belt Squat | Legs | `builtin-exercise:machine-belt-squat` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:leg-press` | Leg Press | Legs | `builtin-exercise:leg-press` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:single-leg-press` | Single-Leg Press | Legs | `builtin-exercise:single-leg-press` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:leg-extension` | Leg Extension | Legs | `builtin-exercise:seated-leg-extension-machine` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:single-leg-extension` | Single-Leg Extension | Legs | `builtin-exercise:single-leg-extension` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:sissy-squat` | Sissy Squat | Legs | `builtin-exercise:sissy-squat` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:wall-sit` | Wall Sit | Legs | `builtin-exercise:wall-sit` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:romanian-deadlift` | Romanian Deadlift | Legs | `builtin-exercise:romanian-deadlift` | Exact | exact canonical slug/name in live FitDex inventory |
| `builtin-exercise:dumbbell-romanian-deadlift` | Dumbbell Romanian Deadlift | Legs | `builtin-exercise:dumbbell-romanian-deadlift` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:single-leg-romanian-deadlift` | Single-Leg Romanian Deadlift | Legs | `builtin-exercise:single-leg-dumbbell-deadlift` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:seated-leg-curl` | Seated Leg Curl | Legs | `builtin-exercise:seated-leg-curl` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:lying-leg-curl` | Lying Leg Curl | Legs | `builtin-exercise:prone-lying-leg-curl` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:standing-single-leg-curl` | Standing Single-Leg Curl | Legs | `builtin-exercise:standing-leg-curl` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:nordic-hamstring-curl` | Nordic Hamstring Curl | Legs | `builtin-exercise:nordic-hamstring-curl` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:glute-ham-raise` | Glute-Ham Raise | Legs | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:barbell-hip-thrust` | Barbell Hip Thrust | Legs | `builtin-exercise:hip-thrust` | Equivalent | exact legacy alias match: Hip Thrust |
| `builtin-exercise:dumbbell-hip-thrust` | Dumbbell Hip Thrust | Legs | `builtin-exercise:dumbbell-hip-thrust` | Exact | exact canonical slug/name in live FitDex inventory |
| `builtin-exercise:glute-bridge` | Glute Bridge | Legs | `builtin-exercise:glute-bridge` | Exact | exact canonical slug/name in live FitDex inventory |
| `builtin-exercise:cable-pull-through` | Cable Pull-Through | Legs | `builtin-exercise:cable-pull-through` | Exact | exact canonical slug/name in live FitDex inventory |
| `builtin-exercise:cable-glute-kickback` | Cable Glute Kickback | Legs | `builtin-exercise:glute-cable-kickback` | Equivalent | unique normalized word-order/synonym match in live FitDex inventory |
| `builtin-exercise:bulgarian-split-squat` | Bulgarian Split Squat | Legs | `builtin-exercise:dumbbell-bulgarian-squat` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:walking-lunge` | Walking Lunge | Legs | `builtin-exercise:dumbbell-walking-lunges` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:reverse-lunge` | Reverse Lunge | Legs | `builtin-exercise:rear-lunge` | Equivalent | reviewed canonical-name/setup equivalent in live FitDex inventory |
| `builtin-exercise:forward-lunge` | Forward Lunge | Legs | `builtin-exercise:dumbbell-lunges` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:lateral-lunge` | Lateral Lunge | Legs | `builtin-exercise:dumbbell-side-lunges` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:step-up` | Step-Up | Legs | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:machine-hip-abduction` | Machine Hip Abduction | Legs | `builtin-exercise:seated-hip-abduction` | Equivalent | reviewed canonical-name/setup equivalent in live FitDex inventory |
| `builtin-exercise:cable-hip-abduction` | Cable Hip Abduction | Legs | `builtin-exercise:cable-hip-abducction` | Equivalent | reviewed canonical-name/setup equivalent in live FitDex inventory |
| `builtin-exercise:machine-hip-adduction` | Machine Hip Adduction | Legs | `builtin-exercise:seated-hip-adduction` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:standing-calf-raise` | Standing Calf Raise | Legs | `builtin-exercise:standing-calf-raise` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:seated-calf-raise` | Seated Calf Raise | Legs | `builtin-exercise:seated-calf-raise` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:leg-press-calf-raise` | Leg Press Calf Raise | Legs | `builtin-exercise:calf-leg-press` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:single-leg-calf-raise` | Single-Leg Calf Raise | Legs | `builtin-exercise:single-leg-calf-raise` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:crunch` | Crunch | Core | `builtin-exercise:abdominal-crunches` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:cable-crunch` | Cable Crunch | Core | `builtin-exercise:kneeling-cable-abs-crunches` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:machine-crunch` | Machine Crunch | Core | `builtin-exercise:machine-abdominal-crunches` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:reverse-crunch` | Reverse Crunch | Core | `builtin-exercise:reverse-crunches` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:sit-up` | Sit-Up | Core | `builtin-exercise:sit-up` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:hanging-leg-raise` | Hanging Leg Raise | Core | `builtin-exercise:hanging-straight-leg-raise` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:hanging-knee-raise` | Hanging Knee Raise | Core | `builtin-exercise:hanging-knee-raises` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:captains-chair-knee-raise` | Captain’s Chair Knee Raise | Core | `builtin-exercise:captains-chair-knee-raises` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:ab-wheel-rollout` | Ab Wheel Rollout | Core | `builtin-exercise:ab-wheel-rollout` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:plank` | Plank | Core | `builtin-exercise:plank` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:side-plank` | Side Plank | Core | `builtin-exercise:side-plank` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:dead-bug` | Dead Bug | Core | `builtin-exercise:dead-bug` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:bird-dog` | Bird Dog | Core | `builtin-exercise:bird-dog` | Exact | exact canonical slug/name in live FitDex inventory |
| `builtin-exercise:pallof-press` | Pallof Press | Core | `builtin-exercise:cable-horizontal-pallof-press` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:band-pallof-press` | Band Pallof Press | Core | `builtin-exercise:band-pallof-press` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:russian-twist` | Russian Twist | Core | `builtin-exercise:med-ball-russian-twist` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:cable-wood-chop` | Cable Wood Chop | Core | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:landmine-rotation` | Landmine Rotation | Core | `builtin-exercise:landmine-twist` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:bicycle-crunch` | Bicycle Crunch | Core | `builtin-exercise:bicycle-crunches` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:suitcase-carry` | Suitcase Carry | Core | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:conventional-deadlift` | Conventional Deadlift | Full Body | `builtin-exercise:deadlift` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:sumo-deadlift` | Sumo Deadlift | Full Body | `builtin-exercise:sumo-deadlift` | Exact | exact canonical slug/name in live FitDex inventory |
| `builtin-exercise:kettlebell-swing` | Kettlebell Swing | Full Body | `builtin-exercise:kettlebell-swing` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:kettlebell-clean` | Kettlebell Clean | Full Body | `builtin-exercise:kettelbell-clean` | Equivalent | unique normalized word-order/synonym match in live FitDex inventory |
| `builtin-exercise:kettlebell-clean-and-press` | Kettlebell Clean and Press | Full Body | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:barbell-clean` | Barbell Clean | Full Body | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:dumbbell-thruster` | Dumbbell Thruster | Full Body | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:barbell-thruster` | Barbell Thruster | Full Body | `builtin-exercise:barbell-thruster` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:burpee` | Burpee | Full Body | `builtin-exercise:burpee` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:devil-press` | Devil Press | Full Body | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:farmer-carry` | Farmer Carry | Full Body | `builtin-exercise:dumbbell-farmer-carry` | Equivalent | reviewed canonical-name/setup equivalent in live FitDex inventory |
| `builtin-exercise:sled-push` | Sled Push | Full Body | `builtin-exercise:prowler-sled` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:outdoor-running` | Outdoor Running | Cardio | `builtin-exercise:running` | Equivalent | reviewed canonical-name/setup equivalent in live FitDex inventory |
| `builtin-exercise:treadmill-running` | Treadmill Running | Cardio | `builtin-exercise:treadmill-run` | Equivalent | reviewed canonical-name/setup equivalent in live FitDex inventory |
| `builtin-exercise:track-running` | Track Running | Cardio | `builtin-exercise:running` | Equivalent | reviewed canonical-name/setup equivalent in live FitDex inventory |
| `builtin-exercise:trail-running` | Trail Running | Cardio | `builtin-exercise:running` | Equivalent | reviewed canonical-name/setup equivalent in live FitDex inventory |
| `builtin-exercise:sprint-intervals` | Sprint Intervals | Cardio | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:outdoor-walking` | Outdoor Walking | Cardio | `builtin-exercise:walking-cardio` | Equivalent | reviewed canonical-name/setup equivalent in live FitDex inventory |
| `builtin-exercise:treadmill-walking` | Treadmill Walking | Cardio | `builtin-exercise:walking-cardio` | Equivalent | reviewed canonical-name/setup equivalent in live FitDex inventory |
| `builtin-exercise:incline-treadmill-walking` | Incline Treadmill Walking | Cardio | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:hiking` | Hiking | Cardio | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:outdoor-cycling` | Outdoor Cycling | Cardio | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:stationary-bike` | Stationary Bike | Cardio | `builtin-exercise:stacionary-bike` | Equivalent | unique normalized word-order/synonym match in live FitDex inventory |
| `builtin-exercise:spin-bike` | Spin Bike | Cardio | `builtin-exercise:stacionary-bike` | Equivalent | reviewed canonical-name/setup equivalent in live FitDex inventory |
| `builtin-exercise:air-bike` | Air Bike | Cardio | `builtin-exercise:air-bike` | Exact | exact canonical slug/name in live FitDex inventory |
| `builtin-exercise:rowing-machine` | Rowing Machine | Cardio | `builtin-exercise:rowing-machine` | Exact | exact canonical slug/name in live FitDex inventory |
| `builtin-exercise:elliptical` | Elliptical | Cardio | `builtin-exercise:elliptical-trainer` | Equivalent | reviewed canonical-name/setup equivalent in live FitDex inventory |
| `builtin-exercise:stair-climber` | Stair Climber | Cardio | `builtin-exercise:stair-climber` | Exact | exact canonical slug/name in live FitDex inventory |
| `builtin-exercise:swimming` | Swimming | Cardio | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:jump-rope` | Jump Rope | Cardio | `builtin-exercise:jump-rope` | Exact | exact canonical slug/name in live FitDex inventory |
| `builtin-exercise:skierg` | SkiErg | Cardio | `builtin-exercise:ski-ergometer` | Equivalent | exact legacy alias match: Ski Ergometer |
| `builtin-exercise:heavy-bag-boxing` | Heavy Bag Boxing | Cardio | `builtin-exercise:punching-bag-boxing` | Equivalent | reviewed canonical-name/setup equivalent in live FitDex inventory |
| `builtin-exercise:band-shoulder-dislocate` | Band Shoulder Dislocate | Mobility | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:wall-shoulder-slide` | Wall Shoulder Slide | Mobility | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:scapular-wall-slide` | Scapular Wall Slide | Mobility | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:thread-the-needle` | Thread the Needle | Mobility | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:open-book-rotation` | Open Book Rotation | Mobility | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:half-kneeling-thoracic-rotation` | Half-Kneeling Thoracic Rotation | Mobility | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:90-90-hip-switch` | 90/90 Hip Switch | Mobility | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:hip-car` | Hip CAR | Mobility | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:adductor-rock-back` | Adductor Rock Back | Mobility | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:knee-to-wall-ankle-mobilization` | Knee-to-Wall Ankle Mobilization | Mobility | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:worlds-greatest-stretch` | World’s Greatest Stretch | Mobility | `builtin-exercise:worlds-greatest-stretch` | Exact | exact canonical slug/name in live FitDex inventory |
| `builtin-exercise:inchworm-to-cobra` | Inchworm to Cobra | Mobility | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:incline-cable-press` | Incline Cable Press | Chest | `builtin-exercise:low-cable-incline-bench-press` | Equivalent | reviewed canonical-name/setup equivalent in live FitDex inventory |
| `builtin-exercise:single-arm-dumbbell-bench-press` | Single-Arm Dumbbell Bench Press | Chest | `builtin-exercise:one-arm-dumbbell-bench-press` | Equivalent | unique normalized word-order/synonym match in live FitDex inventory |
| `builtin-exercise:dumbbell-floor-press` | Dumbbell Floor Press | Chest | `builtin-exercise:floor-dumbbell-press` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:barbell-floor-press` | Barbell Floor Press | Chest | `builtin-exercise:barbell-floor-press` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:plyometric-push-up` | Plyometric Push-Up | Chest | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:weighted-push-up` | Weighted Push-Up | Chest | `builtin-exercise:weighted-push-up` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:archer-push-up` | Archer Push-Up | Chest | `builtin-exercise:archer-push-up` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:decline-machine-press` | Decline Machine Press | Chest | `builtin-exercise:decline-chest-press` | Equivalent | reviewed canonical-name/setup equivalent in live FitDex inventory |
| `builtin-exercise:smith-machine-decline-press` | Smith Machine Decline Press | Chest | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:dumbbell-fly` | Dumbbell Fly | Chest | `builtin-exercise:dumbbell-chest-fly` | Equivalent | reviewed canonical-name/setup equivalent in live FitDex inventory |
| `builtin-exercise:incline-dumbbell-fly` | Incline Dumbbell Fly | Chest | `builtin-exercise:incline-dumbbell-chest-fly` | Equivalent | reviewed canonical-name/setup equivalent in live FitDex inventory |
| `builtin-exercise:decline-dumbbell-fly` | Decline Dumbbell Fly | Chest | `builtin-exercise:decline-dumbbell-fly` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:cable-chest-press` | Cable Chest Press | Chest | `builtin-exercise:seated-cable-chest-press` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:suspension-chest-press` | Suspension Chest Press | Chest | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:ring-push-up` | Ring Push-Up | Chest | `builtin-exercise:ring-push-up` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:ring-dip` | Ring Dip | Chest | `builtin-exercise:ring-dips` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:deficit-push-up` | Deficit Push-Up | Chest | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:half-kneeling-single-arm-lat-pulldown` | Half-Kneeling Single-Arm Lat Pulldown | Back | `builtin-exercise:one-arm-cable-half-kneeling-lat-pulldown` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:kneeling-cable-lat-prayer` | Kneeling Cable Lat Prayer | Back | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:seal-row` | Seal Row | Back | `builtin-exercise:seal-row` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:meadows-row` | Meadows Row | Back | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:barbell-shrug` | Barbell Shrug | Back | `builtin-exercise:barbell-shoulder-shrug` | Equivalent | reviewed canonical-name/setup equivalent in live FitDex inventory |
| `builtin-exercise:scapular-pull-up` | Scapular Pull-Up | Back | `builtin-exercise:hanging-scapular-retractions` | Equivalent | reviewed canonical-name/setup equivalent in live FitDex inventory |
| `builtin-exercise:weighted-pull-up` | Weighted Pull-Up | Back | `builtin-exercise:weighted-pull-up` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:weighted-chin-up` | Weighted Chin-Up | Back | `builtin-exercise:weighted-chin-up` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:band-assisted-pull-up` | Band-Assisted Pull-Up | Back | `builtin-exercise:band-assisted-pull-up` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:machine-pullover` | Machine Pullover | Back | `builtin-exercise:machine-pullover` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:single-arm-cable-row` | Single-Arm Cable Row | Back | `builtin-exercise:one-arm-cable-row` | Equivalent | unique normalized word-order/synonym match in live FitDex inventory |
| `builtin-exercise:high-row-machine` | High Row Machine | Back | `builtin-exercise:lever-high-row` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:suspension-row` | Suspension Row | Back | `builtin-exercise:suspension-row` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:resistance-band-row` | Resistance Band Row | Back | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:resistance-band-lat-pulldown` | Resistance Band Lat Pulldown | Back | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:resistance-band-pull-apart` | Resistance Band Pull-Apart | Back | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:reverse-hyperextension` | Reverse Hyperextension | Back | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:dumbbell-shrug` | Dumbbell Shrug | Back | `builtin-exercise:dumbbell-shoulder-shrugs` | Equivalent | reviewed canonical-name/setup equivalent in live FitDex inventory |
| `builtin-exercise:cable-shrug` | Cable Shrug | Back | `builtin-exercise:cable-shrug` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:chest-supported-machine-row` | Chest-Supported Machine Row | Back | `builtin-exercise:chest-supported-machine-row` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:seated-cable-high-row` | Seated Cable High Row | Back | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:barbell-high-pull` | Barbell High Pull | Back | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:pike-push-up` | Pike Push-Up | Shoulders | `builtin-exercise:pike-push-up` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:handstand-push-up` | Handstand Push-Up | Shoulders | `builtin-exercise:handstand-push-up` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:barbell-upright-row` | Barbell Upright Row | Shoulders | `builtin-exercise:barbell-shoulder-grip-upright-row` | Equivalent | reviewed canonical-name/setup equivalent in live FitDex inventory |
| `builtin-exercise:cable-y-raise` | Cable Y Raise | Shoulders | `builtin-exercise:cable-y-raise` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:single-arm-landmine-press` | Single-Arm Landmine Press | Shoulders | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:seated-dumbbell-shoulder-press` | Seated Dumbbell Shoulder Press | Shoulders | `builtin-exercise:seated-dumbbell-shoulder-press` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:band-internal-rotation` | Band Internal Rotation | Shoulders | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:cable-internal-rotation` | Cable Internal Rotation | Shoulders | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:prone-y-raise` | Prone Y Raise | Shoulders | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:prone-t-raise` | Prone T Raise | Shoulders | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:serratus-push-up` | Serratus Push-Up | Shoulders | `builtin-exercise:scapula-push-up` | Equivalent | reviewed canonical-name/setup equivalent in live FitDex inventory |
| `builtin-exercise:leaning-dumbbell-lateral-raise` | Leaning Dumbbell Lateral Raise | Shoulders | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:single-arm-cable-lateral-raise` | Single-Arm Cable Lateral Raise | Shoulders | `builtin-exercise:one-arm-cable-lateral-raise` | Equivalent | unique normalized word-order/synonym match in live FitDex inventory |
| `builtin-exercise:dumbbell-preacher-curl` | Dumbbell Preacher Curl | Arms | `builtin-exercise:double-dumbbell-preacher-curl` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:cable-hammer-curl` | Cable Hammer Curl | Arms | `builtin-exercise:rope-cable-hammer-curl` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:zottman-curl` | Zottman Curl | Arms | `builtin-exercise:zottman-curl` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:dumbbell-skull-crusher` | Dumbbell Skull Crusher | Arms | `builtin-exercise:dumbbell-lying-triceps-extension` | Equivalent | reviewed canonical-name/setup equivalent in live FitDex inventory |
| `builtin-exercise:jm-press` | JM Press | Arms | `builtin-exercise:jm-press` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:wrist-roller` | Wrist Roller | Arms | `builtin-exercise:wrist-roller` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:machine-biceps-curl` | Machine Biceps Curl | Arms | `builtin-exercise:machine-biceps-curl` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:cable-preacher-curl` | Cable Preacher Curl | Arms | `builtin-exercise:cable-preacher-curl` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:suspension-biceps-curl` | Suspension Biceps Curl | Arms | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:incline-hammer-curl` | Incline Hammer Curl | Arms | `builtin-exercise:dumbbell-incline-hammer-curl` | Equivalent | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:cable-reverse-curl` | Cable Reverse Curl | Arms | `builtin-exercise:reverse-grip-cable-curl` | Equivalent | reviewed canonical-name/setup equivalent in live FitDex inventory |
| `builtin-exercise:cable-skull-crusher` | Cable Skull Crusher | Arms | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:single-arm-overhead-cable-triceps-extension` | Single-Arm Overhead Cable Triceps Extension | Arms | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:machine-triceps-extension` | Machine Triceps Extension | Arms | `builtin-exercise:machine-triceps-extension` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:machine-dip` | Machine Dip | Arms | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:suspension-triceps-extension` | Suspension Triceps Extension | Arms | `builtin-exercise:suspension-triceps-extension` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:bodyweight-triceps-extension` | Bodyweight Triceps Extension | Arms | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:dead-hang` | Dead Hang | Arms | `builtin-exercise:dead-hang` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:hand-gripper` | Hand Gripper | Arms | `builtin-exercise:hand-gripper` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:farmer-hold` | Farmer Hold | Arms | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:kettlebell-goblet-squat` | Kettlebell Goblet Squat | Legs | `builtin-exercise:kettlebell-goblet-squat` | Exact | exact canonical slug/name in live FitDex inventory |
| `builtin-exercise:barbell-step-up` | Barbell Step-Up | Legs | `builtin-exercise:barbell-step-up` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:pistol-squat` | Pistol Squat | Legs | `builtin-exercise:pistol-squat` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:reverse-nordic-curl` | Reverse Nordic Curl | Legs | `builtin-exercise:reverse-nordic-curl` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:tibialis-raise` | Tibialis Raise | Legs | `builtin-exercise:standing-tibialis-raise` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:curtsy-lunge` | Curtsy Lunge | Legs | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:pendulum-squat` | Pendulum Squat | Legs | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:front-foot-elevated-split-squat` | Front-Foot-Elevated Split Squat | Legs | `builtin-exercise:split-squat-front-foot-elevated` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:barbell-reverse-lunge` | Barbell Reverse Lunge | Legs | `builtin-exercise:barbell-reverse-lunges` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:barbell-walking-lunge` | Barbell Walking Lunge | Legs | `builtin-exercise:barbell-walking-lunges` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:barbell-glute-bridge` | Barbell Glute Bridge | Legs | `builtin-exercise:barbell-glute-bridge` | Exact | exact canonical slug/name in live FitDex inventory |
| `builtin-exercise:machine-hip-thrust` | Machine Hip Thrust | Legs | `builtin-exercise:machine-hip-thrust` | Exact | exact canonical slug/name in live FitDex inventory |
| `builtin-exercise:machine-glute-kickback` | Machine Glute Kickback | Legs | `builtin-exercise:glute-machine-kickback` | Equivalent | unique normalized word-order/synonym match in live FitDex inventory |
| `builtin-exercise:frog-pump` | Frog Pump | Legs | `builtin-exercise:frog-pump` | Exact | exact canonical slug/name in live FitDex inventory |
| `builtin-exercise:b-stance-hip-thrust` | B-Stance Hip Thrust | Legs | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:resistance-band-hip-abduction` | Resistance Band Hip Abduction | Legs | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:side-lying-hip-abduction` | Side-Lying Hip Abduction | Legs | `builtin-exercise:side-lying-hip-abduction` | Exact | exact canonical slug/name in live FitDex inventory |
| `builtin-exercise:clamshell` | Clamshell | Legs | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:cable-hip-adduction` | Cable Hip Adduction | Legs | `builtin-exercise:cable-hip-adduction` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:stiff-leg-deadlift` | Stiff-Leg Deadlift | Legs | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:trap-bar-deadlift` | Trap Bar Deadlift | Legs | `builtin-exercise:trap-bar-deadlift` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:landmine-romanian-deadlift` | Landmine Romanian Deadlift | Legs | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:landmine-squat` | Landmine Squat | Legs | `builtin-exercise:landmine-squat` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:landmine-reverse-lunge` | Landmine Reverse Lunge | Legs | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:dumbbell-split-squat` | Dumbbell Split Squat | Legs | `builtin-exercise:dumbbell-split-squat` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:barbell-bulgarian-split-squat` | Barbell Bulgarian Split Squat | Legs | `builtin-exercise:barbell-bulgarian-squat` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:single-leg-lying-leg-curl` | Single-Leg Lying Leg Curl | Legs | `builtin-exercise:single-leg-lying-curl` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:single-leg-seated-leg-curl` | Single-Leg Seated Leg Curl | Legs | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:slider-hamstring-curl` | Slider Hamstring Curl | Legs | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:suspension-hamstring-curl` | Suspension Hamstring Curl | Legs | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:smith-machine-calf-raise` | Smith Machine Calf Raise | Legs | `builtin-exercise:smith-calf-raises` | Equivalent | reviewed canonical-name/setup equivalent in live FitDex inventory |
| `builtin-exercise:seated-tibialis-raise` | Seated Tibialis Raise | Legs | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:lying-leg-raise` | Lying Leg Raise | Core | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:hollow-body-hold` | Hollow Body Hold | Core | `builtin-exercise:hollow-body-hold` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:bear-plank` | Bear Plank | Core | `builtin-exercise:bear-plank` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:plank-shoulder-tap` | Plank Shoulder Tap | Core | `builtin-exercise:shoulder-tap` | Equivalent | reviewed canonical-name/setup equivalent in live FitDex inventory |
| `builtin-exercise:weighted-sit-up` | Weighted Sit-Up | Core | `builtin-exercise:weighted-sit-up` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:copenhagen-plank` | Copenhagen Plank | Core | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:dragon-flag` | Dragon Flag | Core | `builtin-exercise:dragon-flag` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:v-up` | V-Up | Core | `builtin-exercise:v-up` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:toes-to-bar` | Toes-to-Bar | Core | `builtin-exercise:toes-to-bar` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:body-saw` | Body Saw | Core | `builtin-exercise:saw-plank` | Equivalent | reviewed canonical-name/setup equivalent in live FitDex inventory |
| `builtin-exercise:stability-ball-rollout` | Stability Ball Rollout | Core | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:stir-the-pot` | Stir the Pot | Core | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:long-lever-plank` | Long-Lever Plank | Core | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:cable-pallof-hold` | Cable Pallof Hold | Core | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:half-kneeling-pallof-press` | Half-Kneeling Pallof Press | Core | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:suitcase-march` | Suitcase March | Core | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:l-sit` | L-Sit | Core | `builtin-exercise:l-sit` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:hanging-knee-raise-with-twist` | Hanging Knee Raise with Twist | Core | `builtin-exercise:hanging-oblique-knee-raise` | Equivalent | reviewed canonical-name/setup equivalent in live FitDex inventory |
| `builtin-exercise:cable-reverse-wood-chop` | Cable Reverse Wood Chop | Core | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:decline-sit-up` | Decline Sit-Up | Core | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:ghd-sit-up` | GHD Sit-Up | Core | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:turkish-get-up` | Turkish Get-Up | Full Body | `builtin-exercise:turkish-get-up` | Exact | exact canonical slug/name in live FitDex inventory |
| `builtin-exercise:medicine-ball-slam` | Medicine Ball Slam | Full Body | `builtin-exercise:medicine-ball-slam` | Exact | exact canonical slug/name in live FitDex inventory |
| `builtin-exercise:battle-rope-alternating-waves` | Battle Rope Alternating Waves | Full Body | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:bear-crawl` | Bear Crawl | Full Body | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:box-jump` | Box Jump | Full Body | `builtin-exercise:box-jumps` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:sandbag-clean` | Sandbag Clean | Full Body | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:renegade-row` | Renegade Row | Full Body | `builtin-exercise:alternate-renegade-row` | Equivalent | reviewed canonical-name/setup equivalent in live FitDex inventory |
| `builtin-exercise:power-clean` | Power Clean | Full Body | `builtin-exercise:power-clean` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:barbell-snatch` | Barbell Snatch | Full Body | `builtin-exercise:snatch` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:power-snatch` | Power Snatch | Full Body | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:clean-and-jerk` | Clean and Jerk | Full Body | `builtin-exercise:clean-and-jerk` | Exact | verified Phase 1G source page: FitDex Exercise Catalog |
| `builtin-exercise:barbell-clean-and-press` | Barbell Clean and Press | Full Body | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:kettlebell-snatch` | Kettlebell Snatch | Full Body | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:kettlebell-deadlift` | Kettlebell Deadlift | Full Body | `builtin-exercise:kettlebell-deadlift` | Exact | exact canonical slug/name in live FitDex inventory |
| `builtin-exercise:kettlebell-front-rack-carry` | Kettlebell Front Rack Carry | Full Body | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:kettlebell-push-press` | Kettlebell Push Press | Full Body | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:kettlebell-thruster` | Kettlebell Thruster | Full Body | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:dumbbell-clean` | Dumbbell Clean | Full Body | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:dumbbell-snatch` | Dumbbell Snatch | Full Body | `builtin-exercise:dumbbell-snatch` | Exact | exact canonical slug/name in live FitDex inventory |
| `builtin-exercise:dumbbell-clean-and-press` | Dumbbell Clean and Press | Full Body | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:trap-bar-carry` | Trap Bar Carry | Full Body | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:overhead-carry` | Overhead Carry | Full Body | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:front-rack-carry` | Front Rack Carry | Full Body | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:zercher-carry` | Zercher Carry | Full Body | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:sandbag-carry` | Sandbag Carry | Full Body | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:sled-pull` | Sled Pull | Full Body | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:muscle-up` | Muscle-Up | Full Body | `builtin-exercise:muscle-up` | Exact | exact canonical slug/name in live FitDex inventory |
| `builtin-exercise:recumbent-bike` | Recumbent Bike | Cardio | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:kickboxing` | Kickboxing | Cardio | `builtin-exercise:kickboxing` | Exact | exact canonical slug/name in live FitDex inventory |
| `builtin-exercise:circuit-training` | Circuit Training | Cardio | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:hiit-session` | HIIT Session | Cardio | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:battle-rope-intervals` | Battle Rope Intervals | Cardio | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:sled-drag-conditioning` | Sled Drag Conditioning | Cardio | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:hill-running` | Hill Running | Cardio | `builtin-exercise:running` | Equivalent | reviewed canonical-name/setup equivalent in live FitDex inventory |
| `builtin-exercise:treadmill-incline-running` | Treadmill Incline Running | Cardio | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:rucking` | Rucking | Cardio | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:mountain-biking` | Mountain Biking | Cardio | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:bikeerg` | BikeErg | Cardio | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:hand-cycle` | Hand Cycle | Cardio | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:outdoor-rowing` | Outdoor Rowing | Cardio | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:kayaking` | Kayaking | Cardio | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:canoeing` | Canoeing | Cardio | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:vertical-climber` | Vertical Climber | Cardio | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:stepper` | Stepper | Cardio | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:double-unders` | Double Unders | Cardio | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:shadow-boxing` | Shadow Boxing | Cardio | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:shuttle-run` | Shuttle Run | Cardio | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:mountain-climbers` | Mountain Climbers | Cardio | `builtin-exercise:mountain-climber` | Equivalent | reviewed canonical-name/setup equivalent in live FitDex inventory |
| `builtin-exercise:jumping-jacks` | Jumping Jacks | Cardio | `builtin-exercise:jumping-jacks` | Exact | exact canonical slug/name in live FitDex inventory |
| `builtin-exercise:freestyle-swimming` | Freestyle Swimming | Cardio | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:breaststroke-swimming` | Breaststroke Swimming | Cardio | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:backstroke-swimming` | Backstroke Swimming | Cardio | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:butterfly-swimming` | Butterfly Swimming | Cardio | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:battle-rope-double-waves` | Battle Rope Double Waves | Cardio | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:cat-cow` | Cat-Cow | Mobility | `builtin-exercise:cat-cow` | Exact | exact canonical slug/name in live FitDex inventory |
| `builtin-exercise:deep-squat-pry` | Deep Squat Pry | Mobility | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:ankle-car` | Ankle CAR | Mobility | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:shoulder-car` | Shoulder CAR | Mobility | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:thoracic-extension-on-foam-roller` | Thoracic Extension on Foam Roller | Mobility | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:cossack-squat-mobility` | Cossack Squat Mobility | Mobility | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:scapular-car` | Scapular CAR | Mobility | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:wrist-car` | Wrist CAR | Mobility | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:neck-car` | Neck CAR | Mobility | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:quadruped-thoracic-rotation` | Quadruped Thoracic Rotation | Mobility | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:prone-cobra` | Prone Cobra | Mobility | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:half-kneeling-hip-flexor-mobilization` | Half-Kneeling Hip Flexor Mobilization | Mobility | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:hip-airplane` | Hip Airplane | Mobility | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:shin-box-transition` | Shin Box Transition | Mobility | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:banded-ankle-mobilization` | Banded Ankle Mobilization | Mobility | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:calf-rock` | Calf Rock | Mobility | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:hamstring-walkout` | Hamstring Walkout | Mobility | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:half-kneeling-adductor-mobilization` | Half-Kneeling Adductor Mobilization | Mobility | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:sumo-squat-hold` | Sumo Squat Hold | Mobility | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:lateral-squat-shift` | Lateral Squat Shift | Mobility | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:bear-sit-rotation` | Bear Sit Rotation | Mobility | — | Removed | No exact or high-confidence FitDex successor |
| `builtin-exercise:standing-hip-car` | Standing Hip CAR | Mobility | — | Removed | No exact or high-confidence FitDex successor |

## Retired legacy built-ins without successor (142)

These IDs are not selectable in the v3 Exercise Dex. They are not deleted from existing IndexedDB data: seed migration archives the old exercise record, preserves preference notes/tags, deactivates an obsolete favourite, and keeps history displayable through snapshots.

- `builtin-exercise:single-arm-cable-chest-press` — Single-Arm Cable Chest Press (Chest)
- `builtin-exercise:resistance-band-chest-press` — Resistance Band Chest Press (Chest)
- `builtin-exercise:machine-row` — Machine Row (Back)
- `builtin-exercise:iso-lateral-machine-row` — Iso-Lateral Machine Row (Back)
- `builtin-exercise:cable-pullover` — Cable Pullover (Back)
- `builtin-exercise:cable-external-rotation` — Cable External Rotation (Shoulders)
- `builtin-exercise:band-external-rotation` — Band External Rotation (Shoulders)
- `builtin-exercise:reverse-curl` — Reverse Curl (Arms)
- `builtin-exercise:close-grip-bench-press` — Close-Grip Bench Press (Arms)
- `builtin-exercise:plate-pinch-hold` — Plate Pinch Hold (Arms)
- `builtin-exercise:glute-ham-raise` — Glute-Ham Raise (Legs)
- `builtin-exercise:step-up` — Step-Up (Legs)
- `builtin-exercise:cable-wood-chop` — Cable Wood Chop (Core)
- `builtin-exercise:suitcase-carry` — Suitcase Carry (Core)
- `builtin-exercise:kettlebell-clean-and-press` — Kettlebell Clean and Press (Full Body)
- `builtin-exercise:barbell-clean` — Barbell Clean (Full Body)
- `builtin-exercise:dumbbell-thruster` — Dumbbell Thruster (Full Body)
- `builtin-exercise:devil-press` — Devil Press (Full Body)
- `builtin-exercise:sprint-intervals` — Sprint Intervals (Cardio)
- `builtin-exercise:incline-treadmill-walking` — Incline Treadmill Walking (Cardio)
- `builtin-exercise:hiking` — Hiking (Cardio)
- `builtin-exercise:outdoor-cycling` — Outdoor Cycling (Cardio)
- `builtin-exercise:swimming` — Swimming (Cardio)
- `builtin-exercise:band-shoulder-dislocate` — Band Shoulder Dislocate (Mobility)
- `builtin-exercise:wall-shoulder-slide` — Wall Shoulder Slide (Mobility)
- `builtin-exercise:scapular-wall-slide` — Scapular Wall Slide (Mobility)
- `builtin-exercise:thread-the-needle` — Thread the Needle (Mobility)
- `builtin-exercise:open-book-rotation` — Open Book Rotation (Mobility)
- `builtin-exercise:half-kneeling-thoracic-rotation` — Half-Kneeling Thoracic Rotation (Mobility)
- `builtin-exercise:90-90-hip-switch` — 90/90 Hip Switch (Mobility)
- `builtin-exercise:hip-car` — Hip CAR (Mobility)
- `builtin-exercise:adductor-rock-back` — Adductor Rock Back (Mobility)
- `builtin-exercise:knee-to-wall-ankle-mobilization` — Knee-to-Wall Ankle Mobilization (Mobility)
- `builtin-exercise:inchworm-to-cobra` — Inchworm to Cobra (Mobility)
- `builtin-exercise:plyometric-push-up` — Plyometric Push-Up (Chest)
- `builtin-exercise:smith-machine-decline-press` — Smith Machine Decline Press (Chest)
- `builtin-exercise:suspension-chest-press` — Suspension Chest Press (Chest)
- `builtin-exercise:deficit-push-up` — Deficit Push-Up (Chest)
- `builtin-exercise:kneeling-cable-lat-prayer` — Kneeling Cable Lat Prayer (Back)
- `builtin-exercise:meadows-row` — Meadows Row (Back)
- `builtin-exercise:resistance-band-row` — Resistance Band Row (Back)
- `builtin-exercise:resistance-band-lat-pulldown` — Resistance Band Lat Pulldown (Back)
- `builtin-exercise:resistance-band-pull-apart` — Resistance Band Pull-Apart (Back)
- `builtin-exercise:reverse-hyperextension` — Reverse Hyperextension (Back)
- `builtin-exercise:seated-cable-high-row` — Seated Cable High Row (Back)
- `builtin-exercise:barbell-high-pull` — Barbell High Pull (Back)
- `builtin-exercise:single-arm-landmine-press` — Single-Arm Landmine Press (Shoulders)
- `builtin-exercise:band-internal-rotation` — Band Internal Rotation (Shoulders)
- `builtin-exercise:cable-internal-rotation` — Cable Internal Rotation (Shoulders)
- `builtin-exercise:prone-y-raise` — Prone Y Raise (Shoulders)
- `builtin-exercise:prone-t-raise` — Prone T Raise (Shoulders)
- `builtin-exercise:leaning-dumbbell-lateral-raise` — Leaning Dumbbell Lateral Raise (Shoulders)
- `builtin-exercise:suspension-biceps-curl` — Suspension Biceps Curl (Arms)
- `builtin-exercise:cable-skull-crusher` — Cable Skull Crusher (Arms)
- `builtin-exercise:single-arm-overhead-cable-triceps-extension` — Single-Arm Overhead Cable Triceps Extension (Arms)
- `builtin-exercise:machine-dip` — Machine Dip (Arms)
- `builtin-exercise:bodyweight-triceps-extension` — Bodyweight Triceps Extension (Arms)
- `builtin-exercise:farmer-hold` — Farmer Hold (Arms)
- `builtin-exercise:curtsy-lunge` — Curtsy Lunge (Legs)
- `builtin-exercise:pendulum-squat` — Pendulum Squat (Legs)
- `builtin-exercise:b-stance-hip-thrust` — B-Stance Hip Thrust (Legs)
- `builtin-exercise:resistance-band-hip-abduction` — Resistance Band Hip Abduction (Legs)
- `builtin-exercise:clamshell` — Clamshell (Legs)
- `builtin-exercise:stiff-leg-deadlift` — Stiff-Leg Deadlift (Legs)
- `builtin-exercise:landmine-romanian-deadlift` — Landmine Romanian Deadlift (Legs)
- `builtin-exercise:landmine-reverse-lunge` — Landmine Reverse Lunge (Legs)
- `builtin-exercise:single-leg-seated-leg-curl` — Single-Leg Seated Leg Curl (Legs)
- `builtin-exercise:slider-hamstring-curl` — Slider Hamstring Curl (Legs)
- `builtin-exercise:suspension-hamstring-curl` — Suspension Hamstring Curl (Legs)
- `builtin-exercise:seated-tibialis-raise` — Seated Tibialis Raise (Legs)
- `builtin-exercise:lying-leg-raise` — Lying Leg Raise (Core)
- `builtin-exercise:copenhagen-plank` — Copenhagen Plank (Core)
- `builtin-exercise:stability-ball-rollout` — Stability Ball Rollout (Core)
- `builtin-exercise:stir-the-pot` — Stir the Pot (Core)
- `builtin-exercise:long-lever-plank` — Long-Lever Plank (Core)
- `builtin-exercise:cable-pallof-hold` — Cable Pallof Hold (Core)
- `builtin-exercise:half-kneeling-pallof-press` — Half-Kneeling Pallof Press (Core)
- `builtin-exercise:suitcase-march` — Suitcase March (Core)
- `builtin-exercise:cable-reverse-wood-chop` — Cable Reverse Wood Chop (Core)
- `builtin-exercise:decline-sit-up` — Decline Sit-Up (Core)
- `builtin-exercise:ghd-sit-up` — GHD Sit-Up (Core)
- `builtin-exercise:battle-rope-alternating-waves` — Battle Rope Alternating Waves (Full Body)
- `builtin-exercise:bear-crawl` — Bear Crawl (Full Body)
- `builtin-exercise:sandbag-clean` — Sandbag Clean (Full Body)
- `builtin-exercise:power-snatch` — Power Snatch (Full Body)
- `builtin-exercise:barbell-clean-and-press` — Barbell Clean and Press (Full Body)
- `builtin-exercise:kettlebell-snatch` — Kettlebell Snatch (Full Body)
- `builtin-exercise:kettlebell-front-rack-carry` — Kettlebell Front Rack Carry (Full Body)
- `builtin-exercise:kettlebell-push-press` — Kettlebell Push Press (Full Body)
- `builtin-exercise:kettlebell-thruster` — Kettlebell Thruster (Full Body)
- `builtin-exercise:dumbbell-clean` — Dumbbell Clean (Full Body)
- `builtin-exercise:dumbbell-clean-and-press` — Dumbbell Clean and Press (Full Body)
- `builtin-exercise:trap-bar-carry` — Trap Bar Carry (Full Body)
- `builtin-exercise:overhead-carry` — Overhead Carry (Full Body)
- `builtin-exercise:front-rack-carry` — Front Rack Carry (Full Body)
- `builtin-exercise:zercher-carry` — Zercher Carry (Full Body)
- `builtin-exercise:sandbag-carry` — Sandbag Carry (Full Body)
- `builtin-exercise:sled-pull` — Sled Pull (Full Body)
- `builtin-exercise:recumbent-bike` — Recumbent Bike (Cardio)
- `builtin-exercise:circuit-training` — Circuit Training (Cardio)
- `builtin-exercise:hiit-session` — HIIT Session (Cardio)
- `builtin-exercise:battle-rope-intervals` — Battle Rope Intervals (Cardio)
- `builtin-exercise:sled-drag-conditioning` — Sled Drag Conditioning (Cardio)
- `builtin-exercise:treadmill-incline-running` — Treadmill Incline Running (Cardio)
- `builtin-exercise:rucking` — Rucking (Cardio)
- `builtin-exercise:mountain-biking` — Mountain Biking (Cardio)
- `builtin-exercise:bikeerg` — BikeErg (Cardio)
- `builtin-exercise:hand-cycle` — Hand Cycle (Cardio)
- `builtin-exercise:outdoor-rowing` — Outdoor Rowing (Cardio)
- `builtin-exercise:kayaking` — Kayaking (Cardio)
- `builtin-exercise:canoeing` — Canoeing (Cardio)
- `builtin-exercise:vertical-climber` — Vertical Climber (Cardio)
- `builtin-exercise:stepper` — Stepper (Cardio)
- `builtin-exercise:double-unders` — Double Unders (Cardio)
- `builtin-exercise:shadow-boxing` — Shadow Boxing (Cardio)
- `builtin-exercise:shuttle-run` — Shuttle Run (Cardio)
- `builtin-exercise:freestyle-swimming` — Freestyle Swimming (Cardio)
- `builtin-exercise:breaststroke-swimming` — Breaststroke Swimming (Cardio)
- `builtin-exercise:backstroke-swimming` — Backstroke Swimming (Cardio)
- `builtin-exercise:butterfly-swimming` — Butterfly Swimming (Cardio)
- `builtin-exercise:battle-rope-double-waves` — Battle Rope Double Waves (Cardio)
- `builtin-exercise:deep-squat-pry` — Deep Squat Pry (Mobility)
- `builtin-exercise:ankle-car` — Ankle CAR (Mobility)
- `builtin-exercise:shoulder-car` — Shoulder CAR (Mobility)
- `builtin-exercise:thoracic-extension-on-foam-roller` — Thoracic Extension on Foam Roller (Mobility)
- `builtin-exercise:cossack-squat-mobility` — Cossack Squat Mobility (Mobility)
- `builtin-exercise:scapular-car` — Scapular CAR (Mobility)
- `builtin-exercise:wrist-car` — Wrist CAR (Mobility)
- `builtin-exercise:neck-car` — Neck CAR (Mobility)
- `builtin-exercise:quadruped-thoracic-rotation` — Quadruped Thoracic Rotation (Mobility)
- `builtin-exercise:prone-cobra` — Prone Cobra (Mobility)
- `builtin-exercise:half-kneeling-hip-flexor-mobilization` — Half-Kneeling Hip Flexor Mobilization (Mobility)
- `builtin-exercise:hip-airplane` — Hip Airplane (Mobility)
- `builtin-exercise:shin-box-transition` — Shin Box Transition (Mobility)
- `builtin-exercise:banded-ankle-mobilization` — Banded Ankle Mobilization (Mobility)
- `builtin-exercise:calf-rock` — Calf Rock (Mobility)
- `builtin-exercise:hamstring-walkout` — Hamstring Walkout (Mobility)
- `builtin-exercise:half-kneeling-adductor-mobilization` — Half-Kneeling Adductor Mobilization (Mobility)
- `builtin-exercise:sumo-squat-hold` — Sumo Squat Hold (Mobility)
- `builtin-exercise:lateral-squat-shift` — Lateral Squat Shift (Mobility)
- `builtin-exercise:bear-sit-rotation` — Bear Sit Rotation (Mobility)
- `builtin-exercise:standing-hip-car` — Standing Hip CAR (Mobility)

## New FitDex canonical exercises (561)

These active v3 identities were not the successor target of any legacy v2 built-in.

- `builtin-exercise:90-to-90-stretch` — 90 To 90 Stretch (Legs)
- `builtin-exercise:abdominal-vaccum` — Abdominal Vaccum (Abs)
- `builtin-exercise:alternate-bent-over-dumbbell-reverse-fly` — Alternate Bent Over Dumbbell Reverse Fly (Shoulders)
- `builtin-exercise:alternate-dumbbell-hammer-curl` — Alternate Dumbbell Hammer Curl (Biceps)
- `builtin-exercise:anderson-squat` — Anderson Squat (Legs)
- `builtin-exercise:ankle-taps` — Ankle Taps (Abs)
- `builtin-exercise:arm-blaster-biceps-dumbbell-curl` — Arm Blaster Biceps Dumbbell Curl (Biceps)
- `builtin-exercise:arm-circle` — Arm Circle (Shoulders)
- `builtin-exercise:arm-circles` — Arm Circles (Shoulders)
- `builtin-exercise:assault-air-bike` — Assault Air Bike (Legs)
- `builtin-exercise:assisted-machine-dips` — Assisted Machine Dips (Triceps)
- `builtin-exercise:assisted-pistol-squat` — Assisted Pistol Squat (Legs)
- `builtin-exercise:australian-pull-up-underhand-grip` — Australian Pull-Up Underhand Grip (Back)
- `builtin-exercise:b-stance-romanian-deadlift` — B Stance Romanian Deadlift (Legs)
- `builtin-exercise:back-extension-with-dumbbell` — Back Extension With Dumbbell (Gluteal)
- `builtin-exercise:back-lever` — Back Lever (Back)
- `builtin-exercise:band-bench-chest-press` — Band Bench Chest Press (Chest)
- `builtin-exercise:band-bent-over-lat-pulldown` — Band Bent Over Lat Pulldown (Back)
- `builtin-exercise:band-biceps-curl` — Band Biceps Curl (Biceps)
- `builtin-exercise:band-bicycle-crunches` — Band Bicycle Crunches (Abs)
- `builtin-exercise:band-chest-fly` — Band Chest Fly (Chest)
- `builtin-exercise:band-half-kneeling-chop` — Band Half Kneeling Chop (Abs)
- `builtin-exercise:band-hammer-curl` — Band Hammer Curl (Biceps)
- `builtin-exercise:band-high-anchor-wide-row` — Band High Anchor Wide Row (Back)
- `builtin-exercise:band-hip-abduction` — Band Hip Abduction (Gluteal)
- `builtin-exercise:band-kneeling-twisting-crunch` — Band Kneeling Twisting Crunch (Abs)
- `builtin-exercise:band-lateral-raise` — Band Lateral Raise (Shoulders)
- `builtin-exercise:band-lying-clamshells` — Band Lying Clamshells (Gluteal)
- `builtin-exercise:band-lying-leg-curl` — Band Lying Leg Curl (Legs)
- `builtin-exercise:band-pass-through-shoulders` — Band Pass Through Shoulders (Shoulders)
- `builtin-exercise:band-pulldown-behind-neck` — Band Pulldown Behind Neck (Back)
- `builtin-exercise:band-reverse-hyperextension` — Band Reverse Hyperextension (Gluteal)
- `builtin-exercise:band-shoulder-press` — Band Shoulder Press (Shoulders)
- `builtin-exercise:band-squat` — Band Squat (Legs)
- `builtin-exercise:band-standing-balance-glute-kickback` — Band Standing Balance Glute Kickback (Gluteal)
- `builtin-exercise:band-standing-crunches` — Band Standing Crunches (Abs)
- `builtin-exercise:band-standing-side-bend` — Band Standing Side Bend (Abs)
- `builtin-exercise:band-standing-twisting-crunches` — Band Standing Twisting Crunches (Abs)
- `builtin-exercise:band-triceps-pushdown` — Band Triceps Pushdown (Triceps)
- `builtin-exercise:band-twist-horizontal` — Band Twist (horizontal) (Abs)
- `builtin-exercise:band-upright-row` — Band Upright Row (Shoulders)
- `builtin-exercise:band-warm-up-dynamic-shoulder-stretch` — Band Warm-Up Dynamic Shoulder Stretch (Chest)
- `builtin-exercise:barbell-behind-neck-shoulder-press` — Barbell Behind Neck Shoulder Press (Shoulders)
- `builtin-exercise:barbell-bench-press-with-chains` — Barbell Bench Press with Chains (Chest)
- `builtin-exercise:barbell-bent-over-row-from-pin` — Barbell Bent Over Row From Pin (Back)
- `builtin-exercise:barbell-calf-raise` — Barbell Calf Raise (Legs)
- `builtin-exercise:barbell-cossack-squat` — Barbell Cossack Squat (Legs)
- `builtin-exercise:barbell-drag-curl` — Barbell Drag Curl (Biceps)
- `builtin-exercise:barbell-front-raise` — Barbell Front Raise (Shoulders)
- `builtin-exercise:barbell-hack-squat` — Barbell Hack Squat (Legs)
- `builtin-exercise:barbell-incline-wide-grip-row` — Barbell Incline Wide Grip Row (Back)
- `builtin-exercise:barbell-larsen-press` — Barbell Larsen Press (Chest)
- `builtin-exercise:barbell-narrow-grip-upright-row` — Barbell Narrow Grip Upright Row (Shoulders)
- `builtin-exercise:barbell-overhead-squat` — Barbell Overhead Squat (Legs)
- `builtin-exercise:barbell-preacher-curl` — Barbell Preacher Curl (Biceps)
- `builtin-exercise:barbell-prone-incline-curl` — Barbell Prone Incline Curl (Biceps)
- `builtin-exercise:barbell-pullover` — Barbell Pullover (Chest)
- `builtin-exercise:barbell-push-press` — Barbell Push Press (Shoulders)
- `builtin-exercise:barbell-rear-delt-raise` — Barbell Rear Delt Raise (Shoulders)
- `builtin-exercise:barbell-rear-delt-row` — Barbell Rear Delt Row (Back)
- `builtin-exercise:barbell-rear-lunge-on-step` — Barbell Rear Lunge On Step (Gluteal)
- `builtin-exercise:barbell-reverse-grip-bent-over-row` — Barbell Reverse Grip Bent Over Row (Back)
- `builtin-exercise:barbell-reverse-grip-forearm-curl` — Barbell Reverse Grip Forearm Curl (Forearms)
- `builtin-exercise:barbell-reverse-wrist-curl` — Barbell Reverse Wrist Curl (Forearms)
- `builtin-exercise:barbell-rollout-kneeling` — Barbell Rollout - Kneeling (Abs)
- `builtin-exercise:barbell-shrug-behind-the-back` — Barbell Shrug Behind The Back (Back)
- `builtin-exercise:barbell-split-squat` — Barbell Split Squat (Legs)
- `builtin-exercise:barbell-standing-back-wrist-curl` — Barbell Standing Back Wrist Curl (Forearms)
- `builtin-exercise:barbell-standing-twist` — Barbell Standing Twist (Abs)
- `builtin-exercise:barbell-standing-wrist-curl` — Barbell Standing Wrist Curl (Forearms)
- `builtin-exercise:barbell-straight-leg-deadlift` — Barbell Straight Leg Deadlift (Legs)
- `builtin-exercise:barbell-sumo-squat` — Barbell Sumo Squat (Legs)
- `builtin-exercise:barbell-wall-curl` — Barbell Wall Curl (Biceps)
- `builtin-exercise:barbell-wide-grip-upright-row` — Barbell Wide Grip Upright Row (Shoulders)
- `builtin-exercise:bayesian-cable-curl-face-away` — Bayesian Cable Curl (Face Away) (Biceps)
- `builtin-exercise:bayesian-cable-curl-seated` — Bayesian Cable Curl Seated (Biceps)
- `builtin-exercise:bench-front-squat` — Bench Front Squat (Legs)
- `builtin-exercise:bench-press-with-resistance-band` — Bench Press With Resistance Band (Chest)
- `builtin-exercise:bent-arm-chest-stretch` — Bent Arm Chest Stretch (Chest)
- `builtin-exercise:bent-over-kettlebell-row` — Bent Over Kettlebell Row (Back)
- `builtin-exercise:bird-dog-plank` — Bird Dog Plank (Shoulders)
- `builtin-exercise:bird-dog-push-up` — Bird Dog Push-Up (Triceps)
- `builtin-exercise:bodyweight-windmill` — Bodyweight Windmill (Abs)
- `builtin-exercise:box-squat` — Box Squat (Legs)
- `builtin-exercise:box-step-up` — Box step-up (Legs)
- `builtin-exercise:broad-jump` — Broad Jump (Legs)
- `builtin-exercise:bulgarian-bag-walking-lunges` — Bulgarian Bag Walking Lunges (Legs)
- `builtin-exercise:bulgarian-jump-squat` — Bulgarian Jump Squat (Legs)
- `builtin-exercise:bulgarian-squat` — Bulgarian Squat (Gluteal)
- `builtin-exercise:bulgarian-squat-smith` — Bulgarian Squat Smith (Legs)
- `builtin-exercise:butterfly-lean-forward-stretch` — Butterfly Lean Forward Stretch (Legs)
- `builtin-exercise:butterfly-stretch` — Butterfly Stretch (Legs)
- `builtin-exercise:cable-bench-press` — Cable Bench Press (Chest)
- `builtin-exercise:cable-close-grip-lat-pulldown` — Cable Close Grip Lat Pulldown (Back)
- `builtin-exercise:cable-cross-triceps-extension` — Cable Cross Triceps Extension (Triceps)
- `builtin-exercise:cable-double-arm-tricep-kickback` — Cable Double-Arm Tricep Kickback (Triceps)
- `builtin-exercise:cable-incline-skull-crusher` — Cable Incline Skull Crusher (Triceps)
- `builtin-exercise:cable-incline-y-raise-back-supported` — Cable Incline Y Raise Back Supported (Shoulders)
- `builtin-exercise:cable-kneeling-high-to-low-fly` — Cable Kneeling High To Low Fly (Chest)
- `builtin-exercise:cable-kneeling-side-crunch` — Cable Kneeling Side Crunch (Abs)
- `builtin-exercise:cable-romanian-deadlift` — Cable Romanian Deadlift (Legs)
- `builtin-exercise:cable-seated-rear-lateral-raise` — Cable Seated Rear Lateral Raise (Shoulders)
- `builtin-exercise:cable-seated-row-neutral-grip` — Cable Seated Row Neutral Grip (Back)
- `builtin-exercise:cable-seated-supine-grip-row` — Cable Seated Supine Grip Row (Back)
- `builtin-exercise:cable-squatting-curl` — Cable Squatting Curl (Biceps)
- `builtin-exercise:cable-standing-wrist-roll` — Cable Standing Wrist Roll (Forearms)
- `builtin-exercise:cable-step-up` — Cable Step Up (Legs)
- `builtin-exercise:cable-supinated-face-pull` — Cable Supinated Face Pull (Shoulders)
- `builtin-exercise:cable-terminal-knee-extension` — Cable Terminal Knee Extension (Legs)
- `builtin-exercise:cable-thibaudeau-kayak-row` — Cable Thibaudeau Kayak Row (Back)
- `builtin-exercise:cable-twist-horizontal` — Cable Twist (horizontal) (Abs)
- `builtin-exercise:cable-twist-up-down` — Cable Twist (up down) (Abs)
- `builtin-exercise:cable-upright-row` — Cable Upright Row (Shoulders)
- `builtin-exercise:cable-wide-grip-behind-neck-pulldown` — Cable Wide Grip Behind Neck Pulldown (Back)
- `builtin-exercise:cable-wrist-curl` — Cable Wrist Curl (Forearms)
- `builtin-exercise:california-press` — California Press (Triceps)
- `builtin-exercise:capitans-chair-straight-leg-raises` — Capitan's Chair Straight Leg Raises (Abs)
- `builtin-exercise:chest-supported-lateral-t-raise` — Chest Supported Lateral T Raise (Shoulders)
- `builtin-exercise:childs-pose` — Child’s Pose (Gluteal)
- `builtin-exercise:clap-push-up` — Clap Push-Up (Chest)
- `builtin-exercise:clean-squat` — Clean Squat (Legs)
- `builtin-exercise:close-grip-biceps-curl` — Close Grip Biceps Curl (Biceps)
- `builtin-exercise:close-grip-ez-bar-curl` — Close-grip EZ Bar Curl (Biceps)
- `builtin-exercise:close-grip-incline-dumbbell-bench-press` — Close Grip Incline Dumbbell Bench Press (Triceps)
- `builtin-exercise:close-grip-pull-up` — Close Grip Pull Up (Back)
- `builtin-exercise:close-grip-push-up` — Close Grip Push-Up (Triceps)
- `builtin-exercise:close-grip-smith-bench-press` — Close Grip Smith Bench Press (Triceps)
- `builtin-exercise:cobra-push-up` — Cobra Push-Up (Triceps)
- `builtin-exercise:crab-pose` — Crab Pose (Abs)
- `builtin-exercise:cross-arms-push-up` — Cross Arms Push-Up (Triceps)
- `builtin-exercise:cross-body-one-arm-strength-press` — Cross Body One-Arm Strength Press (Chest)
- `builtin-exercise:crossack-squat` — Crossack Squat (Legs)
- `builtin-exercise:cyclist-squat` — Cyclist Squat (Legs)
- `builtin-exercise:dead-bug-with-ball` — Dead Bug with Ball (Abs)
- `builtin-exercise:deadlift-from-blocks` — Deadlift from Blocks (Gluteal)
- `builtin-exercise:decline-barbell-french-press` — Decline Barbell French Press (Triceps)
- `builtin-exercise:decline-cable-chest-press` — Decline Cable Chest Press (Chest)
- `builtin-exercise:decline-crunch` — Decline Crunch (Abs)
- `builtin-exercise:decline-diamond-push-up` — Decline Diamond Push-Up (Triceps)
- `builtin-exercise:decline-smith-bench-press` — Decline Smith Bench Press (Chest)
- `builtin-exercise:deep-push-up-on-parallel-bars` — Deep Push Up On Parallel Bars (Chest)
- `builtin-exercise:deep-squat-to-wide-fold-with-foot-hold` — Deep Squat to Wide Fold with Foot Hold (Legs)
- `builtin-exercise:deficit-deadlift` — Deficit Deadlift (Legs)
- `builtin-exercise:dip-shrugs` — Dip Shrugs (Back)
- `builtin-exercise:dips` — Dips (Triceps)
- `builtin-exercise:donkey-kick` — Donkey Kick (Gluteal)
- `builtin-exercise:doorway-chest-stretch` — Doorway Chest Stretch (Chest)
- `builtin-exercise:double-dumbbell-bent-over-row` — Double Dumbbell Bent Over Row (Back)
- `builtin-exercise:downward-dog` — Downward Dog (Legs)
- `builtin-exercise:dumbbell-alternate-front-raise` — Dumbbell Alternate Front Raise (Shoulders)
- `builtin-exercise:dumbbell-alternate-hammer-front-raise` — Dumbbell Alternate Hammer Front Raise (Shoulders)
- `builtin-exercise:dumbbell-biceps-reverse-curl` — Dumbbell Biceps Reverse Curl (Forearms)
- `builtin-exercise:dumbbell-cossack-squat` — Dumbbell Cossack Squat (Legs)
- `builtin-exercise:dumbbell-cuban-rotation` — Dumbbell Cuban Rotation (Shoulders)
- `builtin-exercise:dumbbell-deadlift` — Dumbbell Deadlift (Legs)
- `builtin-exercise:dumbbell-deadlift-straight-legs` — Dumbbell Deadlift Straight Legs (Legs)
- `builtin-exercise:dumbbell-deep-push-up` — Dumbbell Deep Push Up (Chest)
- `builtin-exercise:dumbbell-drag-curl` — Dumbbell Drag Curl (Biceps)
- `builtin-exercise:dumbbell-floor-chest-fly` — Dumbbell Floor Chest Fly (Chest)
- `builtin-exercise:dumbbell-goblet-squat` — Dumbbell Goblet Squat (Legs)
- `builtin-exercise:dumbbell-half-kneeling-shoulder-press` — Dumbbell Half Kneeling Shoulder Press (Shoulders)
- `builtin-exercise:dumbbell-incline-alternate-supinated-curl` — Dumbbell Incline Alternate Supinated Curl (Biceps)
- `builtin-exercise:dumbbell-incline-chest-supported-lateral-raises` — Dumbbell Incline Chest Supported Lateral Raises (Back)
- `builtin-exercise:dumbbell-incline-rear-lateral-t-raise` — Dumbbell Incline Rear Lateral T Raise (Shoulders)
- `builtin-exercise:dumbbell-incline-t-raise` — Dumbbell Incline T Raise (Shoulders)
- `builtin-exercise:dumbbell-jump` — Dumbbell Jump (Legs)
- `builtin-exercise:dumbbell-kelso-shrugs` — Dumbbell Kelso Shrugs (Back)
- `builtin-exercise:dumbbell-larsen-press` — Dumbbell Larsen Press (Chest)
- `builtin-exercise:dumbbell-low-to-high-fly` — Dumbbell Low to High Fly (Chest)
- `builtin-exercise:dumbbell-lu-raises` — Dumbbell Lu Raises (Shoulders)
- `builtin-exercise:dumbbell-lying-leg-curl` — Dumbbell Lying Leg Curl (Legs)
- `builtin-exercise:dumbbell-lying-pronation` — Dumbbell Lying Pronation (Forearms)
- `builtin-exercise:dumbbell-poliquin-lateral-raise` — Dumbbell Poliquin Lateral Raise (Shoulders)
- `builtin-exercise:dumbbell-poliquin-press` — Dumbbell Poliquin Press (Chest)
- `builtin-exercise:dumbbell-pullover-with-legs-raised` — Dumbbell Pullover with Legs Raised (Back)
- `builtin-exercise:dumbbell-push-press` — Dumbbell Push Press (Shoulders)
- `builtin-exercise:dumbbell-rear-delt-row` — Dumbbell Rear Delt Row (Shoulders)
- `builtin-exercise:dumbbell-rear-lunge` — Dumbbell Rear Lunge (Gluteal)
- `builtin-exercise:dumbbell-reverse-lunge-off-step` — Dumbbell Reverse Lunge off Step (Gluteal)
- `builtin-exercise:dumbbell-russian-twist` — Dumbbell Russian Twist (Abs)
- `builtin-exercise:dumbbell-seal-row` — Dumbbell Seal Row (Back)
- `builtin-exercise:dumbbell-seated-alternate-hammer-curl` — Dumbbell Seated Alternate Hammer Curl (Biceps)
- `builtin-exercise:dumbbell-seated-bent-over-high-row` — Dumbbell Seated Bent Over High Row (Shoulders)
- `builtin-exercise:dumbbell-seated-lateral-raise` — Dumbbell Seated Lateral Raise (Shoulders)
- `builtin-exercise:dumbbell-seated-triceps-extension` — Dumbbell Seated Triceps Extension (Triceps)
- `builtin-exercise:dumbbell-side-bridge` — Dumbbell Side Bridge (Abs)
- `builtin-exercise:dumbbell-single-leg-hip-thrust` — Dumbbell Single Leg Hip Thrust (Gluteal)
- `builtin-exercise:dumbbell-squat` — Dumbbell Squat (Legs)
- `builtin-exercise:dumbbell-standing-alternate-press` — Dumbbell Standing Alternate Press (Shoulders)
- `builtin-exercise:dumbbell-standing-calf-raises` — Dumbbell Standing Calf Raises (Legs)
- `builtin-exercise:dumbbell-standing-driver` — Dumbbell Standing Driver (Shoulders)
- `builtin-exercise:dumbbell-standing-side-bend` — Dumbbell Standing Side Bend (Abs)
- `builtin-exercise:dumbbell-step-up` — Dumbbell Step-Up (Legs)
- `builtin-exercise:dumbbell-straight-leg-deadlift` — Dumbbell Straight Leg Deadlift (Legs)
- `builtin-exercise:dumbbell-sumo-squat` — Dumbbell Sumo Squat (Gluteal)
- `builtin-exercise:dumbbell-supinated-preacher-curl` — Dumbbell Supinated Preacher Curl (Biceps)
- `builtin-exercise:dumbbell-upright-row` — Dumbbell Upright Row (Shoulders)
- `builtin-exercise:elbow-out-chest-stretch` — Elbow Out Chest Stretch (Chest)
- `builtin-exercise:ez-bar-reverse-grip-biceps-curl` — EZ-Bar Reverse Grip Biceps Curl (Forearms)
- `builtin-exercise:ez-bar-reverse-spider-curl` — EZ-Bar Reverse Spider Curl (Forearms)
- `builtin-exercise:ez-bar-seated-reverse-wrist-curl` — EZ-Bar Seated Reverse Wrist Curl (Forearms)
- `builtin-exercise:ez-bar-seated-triceps-extension` — EZ-Bar Seated Triceps Extension (Triceps)
- `builtin-exercise:ez-bar-seated-wrist-curl` — EZ-Bar Seated Wrist Curl (Forearms)
- `builtin-exercise:ez-bar-spider-curl` — EZ-Bar Spider Curl (Biceps)
- `builtin-exercise:ez-bar-tricep-pushdown` — EZ-Bar Tricep Pushdown (Triceps)
- `builtin-exercise:farmer-walk` — Farmer Walk (Forearms)
- `builtin-exercise:figure-4-stretch-on-chair` — Figure 4 Stretch on Chair (Gluteal)
- `builtin-exercise:finger-push-up` — Finger Push-Up (Chest)
- `builtin-exercise:flag` — Flag (Back)
- `builtin-exercise:forward-band-monster-walk` — Forward Band Monster Walk (Legs)
- `builtin-exercise:frog-crunch` — Frog Crunch (Abs)
- `builtin-exercise:frog-planche` — Frog Planche (Triceps)
- `builtin-exercise:front-lever` — Front Lever (Back)
- `builtin-exercise:front-lever-pull-up` — Front Lever Pull-Up (Back)
- `builtin-exercise:full-planche` — Full Planche (Shoulders)
- `builtin-exercise:full-planche-push-up` — Full Planche Push-Up (Triceps)
- `builtin-exercise:glute-bridge-on-bench` — Glute Bridge on Bench (Gluteal)
- `builtin-exercise:glute-bridge-single-leg` — Glute Bridge Single Leg (Gluteal)
- `builtin-exercise:glute-ham-raise-1-2` — Glute-Ham Raise 1/2 (Legs)
- `builtin-exercise:glutes-roll` — Glutes Roll (Gluteal)
- `builtin-exercise:gorilla-row` — Gorilla Row (Back)
- `builtin-exercise:half-kneeling-quad-stretch` — Half Kneeling Quad Stretch (Legs)
- `builtin-exercise:half-kneeling-shoulder-dumbbell-press` — Half Kneeling Shoulder Dumbbell Press (Shoulders)
- `builtin-exercise:half-squat` — Half Squat (Legs)
- `builtin-exercise:hammer-grip-dumbbell-bench-press` — Hammer Grip Dumbbell Bench Press (Chest)
- `builtin-exercise:handstand-hold` — Handstand Hold (Shoulders)
- `builtin-exercise:hang-power-clean` — Hang Power Clean (Legs)
- `builtin-exercise:hanging-half-windmill` — Hanging Half Windmill (Abs)
- `builtin-exercise:hanging-knee-circles` — Hanging Knee Circles (Abs)
- `builtin-exercise:hanging-knee-to-chest` — Hanging Knee To Chest (Abs)
- `builtin-exercise:hanging-knees-to-elbows` — Hanging Knees to Elbows (Abs)
- `builtin-exercise:hanging-knees-to-elbows-waist` — Hanging Knees to Elbows Waist (Abs)
- `builtin-exercise:hanging-leg-raise-to-bar` — Hanging Leg Raise To Bar (Abs)
- `builtin-exercise:hanging-scissors-kicks` — Hanging Scissors Kicks (Abs)
- `builtin-exercise:happy-baby-pose` — Happy Baby Pose (Legs)
- `builtin-exercise:hercules-curl` — Hercules Curl (Biceps)
- `builtin-exercise:high-bar-squat` — High-Bar Squat (Legs)
- `builtin-exercise:high-pulley-overhead-triceps-extension` — High Pulley Overhead Triceps Extension (Triceps)
- `builtin-exercise:high-to-low-band-woodchopper` — High To Low Band Woodchopper (Abs)
- `builtin-exercise:hip-circles` — Hip Circles (Legs)
- `builtin-exercise:hip-hinge` — Hip Hinge (Gluteal)
- `builtin-exercise:hip-thrust-smith-machine` — Hip Thrust Smith Machine (Gluteal)
- `builtin-exercise:hopping-high-knee-tap` — Hopping High Knee Tap (Legs)
- `builtin-exercise:incline-barbell-triceps-extension` — Incline Barbell Triceps Extension (Triceps)
- `builtin-exercise:incline-bench-cable-fly` — Incline Bench Cable Fly (Chest)
- `builtin-exercise:incline-bench-dumbbell-wide-row` — Incline Bench Dumbbell Wide Row (Back)
- `builtin-exercise:incline-bench-leg-raises` — Incline Bench Leg Raises (Abs)
- `builtin-exercise:incline-cable-curl` — Incline Cable Curl (Biceps)
- `builtin-exercise:incline-chest-supported-barbell-row` — Incline Chest Supported Barbell Row (Back)
- `builtin-exercise:incline-close-grip-push-up` — Incline Close Grip Push-Up (Triceps)
- `builtin-exercise:incline-dumbbell-triceps-extension` — Incline Dumbbell Triceps Extension (Triceps)
- `builtin-exercise:incline-neutral-grip-dumbbell-press` — Incline Neutral Grip Dumbbell Press (Chest)
- `builtin-exercise:incline-powell-raise` — Incline Powell Raise (Shoulders)
- `builtin-exercise:incline-twisting-sit-up` — Incline Twisting Sit Up (Abs)
- `builtin-exercise:inverted-shrug` — Inverted Shrug (Back)
- `builtin-exercise:jack-push-up` — Jack Push-Up (Chest)
- `builtin-exercise:janda-sit-up` — Janda Sit Up (Abs)
- `builtin-exercise:jefferson-curl` — Jefferson Curl (Legs)
- `builtin-exercise:jump-squat` — Jump Squat (Legs)
- `builtin-exercise:katana-triceps-extension` — Katana Triceps Extension (Triceps)
- `builtin-exercise:kettlebel-renegade-row` — Kettlebel Renegade Row (Back)
- `builtin-exercise:kettlebell-around-the-head-rotation` — Kettlebell Around the Head Rotation (Shoulders)
- `builtin-exercise:kettlebell-biceps-curl` — Kettlebell Biceps Curl (Biceps)
- `builtin-exercise:kettlebell-clean-and-jerk` — Kettlebell Clean and Jerk (Shoulders)
- `builtin-exercise:kettlebell-one-arm-floor-press` — Kettlebell One Arm Floor Press (Chest)
- `builtin-exercise:kettlebell-rear-lunge` — Kettlebell Rear Lunge (Legs)
- `builtin-exercise:kettlebell-windmill` — Kettlebell Windmill (Shoulders)
- `builtin-exercise:knee-close-grip-push-up` — Knee Close Grip Push-Up (Triceps)
- `builtin-exercise:knee-diamond-push-up` — Knee Diamond Push-Up (Triceps)
- `builtin-exercise:knee-push-up` — Knee Push-Up (Chest)
- `builtin-exercise:knee-raise-ab-coaster` — Knee Raise Ab Coaster (Abs)
- `builtin-exercise:knee-to-chest-stretch` — Knee To Chest Stretch (Legs)
- `builtin-exercise:knee-tuck-crunch` — Knee Tuck Crunch (Abs)
- `builtin-exercise:kneeling-back-rotation-stretch` — Kneeling Back Rotation Stretch (Chest)
- `builtin-exercise:kneeling-band-abs-crunches` — Kneeling Band Abs Crunches (Abs)
- `builtin-exercise:kneeling-cable-lat-pulldown` — Kneeling Cable Lat Pulldown (Back)
- `builtin-exercise:kneeling-hamstring-stretch` — Kneeling Hamstring Stretch (Legs)
- `builtin-exercise:kneeling-resistance-band-glute-kickback` — Kneeling Resistance Band Glute Kickback (Gluteal)
- `builtin-exercise:kneeling-wide-push-up` — Kneeling Wide Push-Up (Chest)
- `builtin-exercise:knuckle-push-up` — Knuckle Push-Up (Chest)
- `builtin-exercise:korean-dip` — Korean Dip (Chest)
- `builtin-exercise:l-pull-up` — L Pull-Up (Back)
- `builtin-exercise:landmine-lateral-raise` — Landmine Lateral Raise (Shoulders)
- `builtin-exercise:lat-pulldown-machine` — Lat Pulldown Machine (Back)
- `builtin-exercise:lateral-monster-walk` — Lateral Monster Walk (Gluteal)
- `builtin-exercise:lateral-to-front-raise` — Lateral to Front Raise (Shoulders)
- `builtin-exercise:lean-planche` — Lean Planche (Chest)
- `builtin-exercise:leg-in-and-out` — Leg In and Out (Abs)
- `builtin-exercise:leg-press-wide-stance` — Leg Press Wide Stance (Legs)
- `builtin-exercise:leg-swings` — Leg Swings (Legs)
- `builtin-exercise:lever-back-extension` — Lever Back Extension (Back)
- `builtin-exercise:lever-horizontal-leg-press` — Lever Horizontal Leg Press (Legs)
- `builtin-exercise:lever-low-row` — Lever Low Row (Back)
- `builtin-exercise:lever-seated-hammer-grip-shoulder-press` — Lever Seated Hammer Grip Shoulder Press (Shoulders)
- `builtin-exercise:lizard-pose` — Lizard Pose (Legs)
- `builtin-exercise:low-cable-horizontal-pallof-press` — Low Cable Horizontal Pallof Press (Abs)
- `builtin-exercise:low-incline-dumbbell-fly` — Low Incline Dumbbell Fly (Chest)
- `builtin-exercise:lowbar-squat` — Lowbar Squat (Legs)
- `builtin-exercise:lunge-stretch` — Lunge Stretch (Legs)
- `builtin-exercise:lunges` — Lunges (Legs)
- `builtin-exercise:lying-barbell-triceps-extension-skullcrusher` — Lying Barbell Triceps Extension (Skullcrusher) (Triceps)
- `builtin-exercise:lying-butterfly-pose` — Lying Butterfly Pose (Legs)
- `builtin-exercise:lying-cable-face-pull` — Lying Cable Face Pull (Shoulders)
- `builtin-exercise:lying-cable-fly` — Lying Cable Fly (Chest)
- `builtin-exercise:lying-chest-press` — Lying Chest Press (Chest)
- `builtin-exercise:lying-cross-lateral-cable-fly` — Lying Cross Lateral Cable Fly (Shoulders)
- `builtin-exercise:lying-knee-to-chest-stretch` — Lying Knee To Chest Stretch (Gluteal)
- `builtin-exercise:lying-quadriceps-stretch` — Lying Quadriceps Stretch (Legs)
- `builtin-exercise:lying-spinal-twist` — Lying Spinal Twist (Abs)
- `builtin-exercise:lying-stright-leg-raise` — Lying Stright Leg Raise (Abs)
- `builtin-exercise:machine-calf-raises` — Machine Calf Raises (Legs)
- `builtin-exercise:machine-chest-fly` — Machine Chest Fly (Chest)
- `builtin-exercise:machine-chest-press-hammer-grip` — Machine Chest Press Hammer Grip (Chest)
- `builtin-exercise:machine-lying-crunch` — Machine Lying Crunch (Abs)
- `builtin-exercise:machine-reverse-hack-squat` — Machine Reverse Hack Squat (Legs)
- `builtin-exercise:machine-shrugs` — Machine Shrugs (Back)
- `builtin-exercise:mini-band-glute-bridge` — Mini Band Glute Bridge (Gluteal)
- `builtin-exercise:narrow-grip-australian-pull-up-with-rings` — Narrow Grip Australian Pull-Up With Rings (Back)
- `builtin-exercise:narrow-stance-45-degree-leg-press` — Narrow Stance 45 Degree Leg Press (Legs)
- `builtin-exercise:neck-curl` — Neck Curl (Back)
- `builtin-exercise:neck-side-stretch` — Neck Side Stretch (Back)
- `builtin-exercise:negative-pull-up` — Negative Pull-Up (Back)
- `builtin-exercise:negative-push-up` — Negative Push-Up (Chest)
- `builtin-exercise:one-arm-band-kneeling-lat-pulldown` — One-Arm Band Kneeling Lat Pulldown (Back)
- `builtin-exercise:one-arm-cable-bent-over-lateral-raise` — One-Arm Cable Bent Over Lateral Raise (Shoulders)
- `builtin-exercise:one-arm-cable-biceps-curl` — One-Arm Cable Biceps Curl (Biceps)
- `builtin-exercise:one-arm-cable-cross-body-triceps-extension` — One-Arm Cable Cross Body Triceps Extension (Triceps)
- `builtin-exercise:one-arm-cable-fly` — One-Arm Cable Fly (Chest)
- `builtin-exercise:one-arm-cable-front-raise` — One-Arm Cable Front Raise (Shoulders)
- `builtin-exercise:one-arm-cable-low-row` — One-Arm Cable Low Row (Back)
- `builtin-exercise:one-arm-cable-pushdown` — One-Arm Cable Pushdown (Triceps)
- `builtin-exercise:one-arm-cable-rear-delt-fly` — One-Arm Cable Rear Delt Fly (Shoulders)
- `builtin-exercise:one-arm-cable-triceps-pushdown` — One-Arm Cable Triceps Pushdown (Triceps)
- `builtin-exercise:one-arm-chest-supported-row-machine` — One-Arm Chest Supported Row Machine (Back)
- `builtin-exercise:one-arm-dumbbell-bent-over-scapula-row` — One-Arm Dumbbell Bent Over Scapula Row (Back)
- `builtin-exercise:one-arm-dumbbell-incline-bench-press` — One-Arm Dumbbell Incline Bench Press (Chest)
- `builtin-exercise:one-arm-dumbbell-incline-lateral-raise` — One-Arm Dumbbell Incline Lateral Raise (Shoulders)
- `builtin-exercise:one-arm-dumbbell-lateral-raise` — One-Arm Dumbbell Lateral Raise (Shoulders)
- `builtin-exercise:one-arm-dumbbell-preacher-curl` — One-Arm Dumbbell Preacher Curl (Biceps)
- `builtin-exercise:one-arm-dumbbell-reverse-wrist-curl` — One-Arm Dumbbell Reverse Wrist Curl (Forearms)
- `builtin-exercise:one-arm-dumbbell-seated-kickback` — One-Arm Dumbbell Seated Kickback (Triceps)
- `builtin-exercise:one-arm-dumbbell-supination` — One-Arm Dumbbell Supination (Forearms)
- `builtin-exercise:one-arm-dumbbell-supported-bent-over-lateral-raise` — One-Arm Dumbbell Supported Bent Over Lateral Raise (Shoulders)
- `builtin-exercise:one-arm-hammer-cable-curl` — One-Arm Hammer Cable Curl (Biceps)
- `builtin-exercise:one-arm-high-row-cable` — One-Arm High Row Cable (Back)
- `builtin-exercise:one-arm-high-to-low-cable-fly` — One-Arm High-to-Low Cable Fly (Chest)
- `builtin-exercise:one-arm-katana-triceps-overhead-extension` — One-Arm Katana Triceps Overhead Extension (Triceps)
- `builtin-exercise:one-arm-kettlebell-overhead-press` — One-Arm Kettlebell Overhead Press (Shoulders)
- `builtin-exercise:one-arm-kettlebell-swing` — One-Arm Kettlebell Swing (Legs)
- `builtin-exercise:one-arm-landmine-bent-over-row` — One-Arm Landmine Bent Over Row (Back)
- `builtin-exercise:one-arm-landmine-half-kneeling-shoulder-press` — One-Arm Landmine Half Kneeling Shoulder Press (Shoulders)
- `builtin-exercise:one-arm-landmine-standing-shoulder-press` — One-Arm Landmine Standing Shoulder Press (Shoulders)
- `builtin-exercise:one-arm-lat-pulldown` — One-Arm Lat Pulldown (Back)
- `builtin-exercise:one-arm-lever-high-row` — One-Arm Lever High Row (Back)
- `builtin-exercise:one-arm-low-cable-seated-row` — One-Arm Low Cable Seated Row (Back)
- `builtin-exercise:one-arm-low-fly-dumbbell` — One-Arm Low Fly Dumbbell (Chest)
- `builtin-exercise:one-arm-low-to-high-cable-fly` — One-Arm Low-to-High Cable Fly (Chest)
- `builtin-exercise:one-arm-machine-preacher-curl` — One-Arm Machine Preacher Curl (Biceps)
- `builtin-exercise:one-arm-neutral-wrist-dumbbell-curl` — One-Arm Neutral Wrist Dumbbell Curl (Forearms)
- `builtin-exercise:one-arm-overhead-triceps-extension` — One-Arm Overhead Triceps Extension (Triceps)
- `builtin-exercise:one-arm-preacher-hammer-curl` — One-Arm Preacher Hammer Curl (Biceps)
- `builtin-exercise:one-arm-push-up` — One-Arm Push-Up (Chest)
- `builtin-exercise:one-arm-rear-delt-fly` — One-Arm Rear Delt Fly (Shoulders)
- `builtin-exercise:one-arm-reverse-grip-triceps-cable-pushdown` — One-Arm Reverse Grip Triceps Cable Pushdown (Triceps)
- `builtin-exercise:one-arm-seated-row` — One-Arm Seated Row (Back)
- `builtin-exercise:one-arm-shoulder-press-dumbbell` — One-Arm Shoulder Press Dumbbell (Shoulders)
- `builtin-exercise:one-arm-straight-arm-cable-lat-pulldown` — One-Arm Straight-Arm Cable Lat Pulldown (Back)
- `builtin-exercise:one-arm-wrist-curl-dumbbell` — One-Arm Wrist Curl Dumbbell (Forearms)
- `builtin-exercise:opposite-side-elbow-to-knee` — Opposite side elbow to knee (Abs)
- `builtin-exercise:overhead-band-triceps-extension` — Overhead Band Triceps Extension (Triceps)
- `builtin-exercise:overhead-cable-triceps-exstension-bar` — Overhead Cable Triceps Exstension (bar) (Triceps)
- `builtin-exercise:overhead-triceps-stretch` — Overhead Triceps Stretch (Triceps)
- `builtin-exercise:pigeon-pose` — Pigeon Pose (Gluteal)
- `builtin-exercise:pike-push-up-between-benches` — Pike Push-Up Between Benches (Shoulders)
- `builtin-exercise:pike-push-up-between-chairs` — Pike Push-Up Between Chairs (Shoulders)
- `builtin-exercise:pike-push-up-on-bench` — Pike Push-Up On Bench (Shoulders)
- `builtin-exercise:pin-bench-press` — Pin Bench Press (Chest)
- `builtin-exercise:pin-front-squat` — Pin Front Squat (Legs)
- `builtin-exercise:pin-squat` — Pin Squat (Legs)
- `builtin-exercise:pistol-box-squat` — Pistol Box Squat (Legs)
- `builtin-exercise:planche-dips` — Planche Dips (Chest)
- `builtin-exercise:planche-push-up` — Planche Push-Up (Triceps)
- `builtin-exercise:plate-bus-driver` — Plate Bus Driver (Shoulders)
- `builtin-exercise:plate-front-raise` — Plate Front Raise (Shoulders)
- `builtin-exercise:plate-front-raise-drive` — Plate Front Raise Drive (Shoulders)
- `builtin-exercise:plyo-side-lunge` — Plyo side lunge (Legs)
- `builtin-exercise:pogo-jumps` — Pogo Jumps (Legs)
- `builtin-exercise:poliquin-flyes` — Poliquin Flyes (Chest)
- `builtin-exercise:poliquin-step-up` — Poliquin Step-Up (Legs)
- `builtin-exercise:powell-raise` — Powell Raise (Shoulders)
- `builtin-exercise:preacher-hammer-curl` — Preacher Hammer Curl (Biceps)
- `builtin-exercise:prone-swimmer` — Prone Swimmer (Back)
- `builtin-exercise:pull-up-wide-grip` — Pull-Up Wide Grip (Back)
- `builtin-exercise:push-up-on-parallel-bars` — Push-Up on Parallel Bars (Chest)
- `builtin-exercise:rear-deltoid-stretch` — Rear Deltoid Stretch (Shoulders)
- `builtin-exercise:resistance-band-hip-adduction` — Resistance Band Hip Adduction (Legs)
- `builtin-exercise:resistance-band-push-up` — Resistance Band Push-Up (Chest)
- `builtin-exercise:reverse-hand-push-up` — Reverse Hand Push-Up (Triceps)
- `builtin-exercise:reverse-wrist-push-up` — Reverse Wrist Push-Up (Chest)
- `builtin-exercise:ring-face-pull` — Ring Face Pull (Shoulders)
- `builtin-exercise:ring-leg-curl` — Ring Leg Curl (Legs)
- `builtin-exercise:ring-muscle-up` — Ring Muscle Up (Biceps)
- `builtin-exercise:ring-pike` — Ring Pike (Abs)
- `builtin-exercise:ring-triceps-extension` — Ring Triceps Extension (Triceps)
- `builtin-exercise:rings-pull-up` — Rings Pull-Up (Back)
- `builtin-exercise:rocking-frog` — Rocking Frog (Legs)
- `builtin-exercise:rocking-half-frog-stretch` — Rocking Half Frog Stretch (Legs)
- `builtin-exercise:roll-calves` — Roll Calves (Legs)
- `builtin-exercise:roll-foot` — Roll Foot (Legs)
- `builtin-exercise:rope-straight-arm-lat-pulldown` — Rope Straight-Arm Lat Pulldown (Back)
- `builtin-exercise:rotary-calf-raise` — Rotary Calf Raise (Legs)
- `builtin-exercise:rotary-torso` — Rotary Torso (Abs)
- `builtin-exercise:scissors` — Scissors (Abs)
- `builtin-exercise:seated-ab-cable-crunch` — Seated Ab Cable Crunch (Abs)
- `builtin-exercise:seated-alternate-crunches` — Seated Alternate Crunches (Abs)
- `builtin-exercise:seated-band-hip-abduction` — Seated Band Hip Abduction (Gluteal)
- `builtin-exercise:seated-barbell-twist` — Seated Barbell Twist (Abs)
- `builtin-exercise:seated-bent-over-dumbbell-lateral-raise` — Seated Bent Over Dumbbell Lateral Raise (Shoulders)
- `builtin-exercise:seated-cable-fly` — Seated Cable Fly (Chest)
- `builtin-exercise:seated-cable-horizontal-french-press` — Seated Cable Horizontal French Press (Triceps)
- `builtin-exercise:seated-cable-low-row-neutral-grip` — Seated Cable Low Row Neutral Grip (Back)
- `builtin-exercise:seated-cable-wrist-curl` — Seated Cable Wrist Curl (Forearms)
- `builtin-exercise:seated-chest-clam` — Seated Chest Clam (Chest)
- `builtin-exercise:seated-cuban-press` — Seated Cuban Press (Shoulders)
- `builtin-exercise:seated-dip-machine` — Seated Dip Machine (Triceps)
- `builtin-exercise:seated-dumbbell-curl` — Seated Dumbbell Curl (Biceps)
- `builtin-exercise:seated-dumbbell-shrugs` — Seated Dumbbell Shrugs (Back)
- `builtin-exercise:seated-face-pull` — Seated Face Pull (Shoulders)
- `builtin-exercise:seated-figure-4-stretch` — Seated Figure 4 Stretch (Gluteal)
- `builtin-exercise:seated-flutter-kick` — Seated Flutter Kick (Abs)
- `builtin-exercise:seated-forward-fold` — Seated Forward Fold (Legs)
- `builtin-exercise:seated-good-morning` — Seated Good Morning (Gluteal)
- `builtin-exercise:seated-hammer-curl` — Seated Hammer Curl (Biceps)
- `builtin-exercise:seated-leg-raise` — Seated Leg Raise (Abs)
- `builtin-exercise:seated-machine-trunk-rotation` — Seated Machine Trunk Rotation (Abs)
- `builtin-exercise:seated-reverse-circle-crunches` — Seated Reverse Circle Crunches (Abs)
- `builtin-exercise:seated-shoulder-external-rotation` — Seated Shoulder External Rotation (Shoulders)
- `builtin-exercise:seated-shoulder-press-neutral-grip` — Seated Shoulder Press Neutral Grip (Shoulders)
- `builtin-exercise:seated-single-leg-curl` — Seated Single Leg Curl (Legs)
- `builtin-exercise:seated-single-leg-hamstring-stretch` — Seated Single Leg Hamstring Stretch (Legs)
- `builtin-exercise:shoulderstand-pose` — Shoulderstand Pose (Abs)
- `builtin-exercise:side-crunch` — Side Crunch (Abs)
- `builtin-exercise:side-leg-swings` — Side Leg Swings (Legs)
- `builtin-exercise:side-lunges` — Side Lunges (Legs)
- `builtin-exercise:side-lying-quadriceps-stretch` — Side Lying Quadriceps Stretch (Legs)
- `builtin-exercise:side-plank-clamshell` — Side Plank Clamshell (Gluteal)
- `builtin-exercise:side-plank-hip-abduction` — Side Plank Hip Abduction (Gluteal)
- `builtin-exercise:single-dumbbell-curl` — Single Dumbbell Curl (Biceps)
- `builtin-exercise:single-leg-box-jump` — Single-Leg Box Jump (Legs)
- `builtin-exercise:single-leg-cable-leg-curl` — Single-Leg Cable Leg Curl (Legs)
- `builtin-exercise:single-leg-calf-raise-with-dumbbell` — Single-Leg Calf Raise with Dumbbell (Legs)
- `builtin-exercise:single-leg-deadlift` — Single-Leg Deadlift (Legs)
- `builtin-exercise:single-leg-romanian-deadlift` — Single Leg Romanian Deadlift (Gluteal)
- `builtin-exercise:single-leg-seated-calf-machine-raise` — Single Leg Seated Calf Machine Raise (Legs)
- `builtin-exercise:single-leg-seated-calf-raise-with-dumbbell` — Single-Leg Seated Calf Raise with Dumbbell (Legs)
- `builtin-exercise:single-leg-smith-calf-raise` — Single Leg Smith Calf Raise (Legs)
- `builtin-exercise:single-leg-weighted-glute-bridge` — Single Leg Weighted Glute Bridge (Gluteal)
- `builtin-exercise:sitting-twist` — Sitting Twist (Abs)
- `builtin-exercise:sliding-leg-curl` — Sliding Leg Curl (Legs)
- `builtin-exercise:smith-bent-over-row` — Smith Bent Over Row (Back)
- `builtin-exercise:smith-chair-squat` — Smith Chair Squat (Legs)
- `builtin-exercise:smith-front-squat` — Smith Front Squat (Legs)
- `builtin-exercise:smith-hack-squat` — Smith Hack Squat (Legs)
- `builtin-exercise:smith-kneeling-hip-thrust` — Smith Kneeling Hip Thrust (Legs)
- `builtin-exercise:smith-machibe-glute-kickback` — Smith Machibe Glute Kickback (Legs)
- `builtin-exercise:smith-machine-good-morning` — Smith Machine Good Morning (Gluteal)
- `builtin-exercise:smith-machine-upright-row` — Smith Machine Upright Row (Shoulders)
- `builtin-exercise:smith-rear-lunge` — Smith Rear Lunge (Legs)
- `builtin-exercise:smith-romanian-deadlift` — Smith Romanian Deadlift (Legs)
- `builtin-exercise:smith-seated-behind-neck-press` — Smith Seated Behind Neck Press (Shoulders)
- `builtin-exercise:smith-seated-calf-raise` — Smith Seated Calf Raise (Legs)
- `builtin-exercise:smith-shoulder-shrug` — Smith Shoulder Shrug (Back)
- `builtin-exercise:smith-split-squat` — Smith Split Squat (Legs)
- `builtin-exercise:smith-squat-to-bench` — Smith Squat To Bench (Legs)
- `builtin-exercise:smith-zercher-squat` — Smith Zercher Squat (Legs)
- `builtin-exercise:snatch-pull` — Snatch Pull (Legs)
- `builtin-exercise:spider-hammer-curl` — Spider Hammer Curl (Biceps)
- `builtin-exercise:split-squat` — Split Squat (Legs)
- `builtin-exercise:squat` — Squat (Legs)
- `builtin-exercise:stability-ball-crunch` — Stability Ball Crunch (Abs)
- `builtin-exercise:stabillity-ball-wall-squat` — Stabillity Ball Wall Squat (Legs)
- `builtin-exercise:standing-air-bike` — Standing Air Bike (Abs)
- `builtin-exercise:standing-cable-ab-crunch` — Standing Cable Ab Crunch (Abs)
- `builtin-exercise:standing-cable-chest-press` — Standing Cable Chest Press (Chest)
- `builtin-exercise:standing-cable-low-chest-press` — Standing Cable Low Chest Press (Chest)
- `builtin-exercise:standing-chest-opener` — Standing Chest Opener (Chest)
- `builtin-exercise:standing-cuban-press` — Standing Cuban Press (Shoulders)
- `builtin-exercise:standing-downward-dog` — Standing Downward Dog (Chest)
- `builtin-exercise:standing-forward-bend` — Standing Forward Bend (Legs)
- `builtin-exercise:standing-hip-abduction` — Standing Hip Abduction (Gluteal)
- `builtin-exercise:standing-overhead-barbell-triceps-extension` — Standing Overhead Barbell Triceps Extension (Triceps)
- `builtin-exercise:standing-press-around` — Standing Press Around (Chest)
- `builtin-exercise:standing-quadriceps-stretch` — Standing Quadriceps Stretch (Legs)
- `builtin-exercise:standing-russian-twist` — Standing Russian Twist (Abs)
- `builtin-exercise:standing-side-lat-stretch` — Standing Side Lat Stretch (Back)
- `builtin-exercise:static-front-hold` — Static Front Hold (Shoulders)
- `builtin-exercise:straddle-planche` — Straddle Planche (Shoulders)
- `builtin-exercise:straight-bar-dips` — Straight Bar Dips (Chest)
- `builtin-exercise:straight-leg-raise-on-dip-bars` — Straight Leg Raise on Dip Bars (Abs)
- `builtin-exercise:sumo-squat` — Sumo Squat (Legs)
- `builtin-exercise:sumo-squat-off-stepbox` — Sumo Squat off Stepbox (Legs)
- `builtin-exercise:sumo-squat-with-smith` — Sumo Squat With Smith (Legs)
- `builtin-exercise:superman` — Superman (Legs)
- `builtin-exercise:superman-push-up` — Superman Push-Up (Chest)
- `builtin-exercise:suspension-chest-fly` — Suspension Chest Fly (Chest)
- `builtin-exercise:suspension-inverted-row` — Suspension Inverted Row (Back)
- `builtin-exercise:suspension-v-ups` — Suspension V-Ups (Abs)
- `builtin-exercise:swiss-ball-leg-curl` — Swiss Ball Leg Curl (Legs)
- `builtin-exercise:swiss-ball-plank` — Swiss Ball Plank (Abs)
- `builtin-exercise:tate-press` — Tate Press (Triceps)
- `builtin-exercise:terminal-knee-extension` — Terminal Knee Extension (Legs)
- `builtin-exercise:toe-touches` — Toe Touches (Abs)
- `builtin-exercise:trap-bar-shrugs` — Trap Bar Shrugs (Back)
- `builtin-exercise:trap-y-raise` — Trap Y Raise (Shoulders)
- `builtin-exercise:treadmill-climbing` — Treadmill Climbing (Legs)
- `builtin-exercise:triceps-cable-pushdown-reverse-grip` — Triceps Cable Pushdown Reverse Grip (Triceps)
- `builtin-exercise:triceps-push-up` — Triceps Push-Up (Triceps)
- `builtin-exercise:triceps-pushdown-v-bar` — Triceps Pushdown V-Bar (Triceps)
- `builtin-exercise:trx-biceps-curl` — TRX Biceps Curl (Biceps)
- `builtin-exercise:trx-single-leg-bird-dog` — TRX Single Leg Bird Dog (Abs)
- `builtin-exercise:tsunami-overhead-press` — Tsunami Overhead Press (Shoulders)
- `builtin-exercise:underhand-triceps-extension` — Underhand Triceps Extension (Triceps)
- `builtin-exercise:unilateral-farmer-walk` — Unilateral Farmer Walk (Forearms)
- `builtin-exercise:upward-dog` — Upward Dog (Abs)
- `builtin-exercise:v-sit-crunch` — V-Sit Crunch (Abs)
- `builtin-exercise:vertical-leg-press-smith-machine` — Vertical Leg Press Smith Machine (Legs)
- `builtin-exercise:walking-lunges` — Walking Lunges (Legs)
- `builtin-exercise:wall-angel` — Wall Angel (Shoulders)
- `builtin-exercise:weighted-ab-crunches` — Weighted Ab Crunches (Abs)
- `builtin-exercise:weighted-back-extension` — Weighted Back Extension (Gluteal)
- `builtin-exercise:weighted-bench-dips` — Weighted Bench Dips (Triceps)
- `builtin-exercise:weighted-cossack-squat` — Weighted Cossack Squat (Legs)
- `builtin-exercise:weighted-dead-bug` — Weighted Dead Bug (Abs)
- `builtin-exercise:weighted-decline-crunch` — Weighted Decline Crunch (Abs)
- `builtin-exercise:weighted-dips` — Weighted Dips (Triceps)
- `builtin-exercise:weighted-glute-bridge` — Weighted Glute Bridge (Gluteal)
- `builtin-exercise:weighted-hanging-leg-raise` — Weighted Hanging Leg Raise (Abs)
- `builtin-exercise:weighted-hollow-body-hold` — Weighted Hollow Body Hold (Abs)
- `builtin-exercise:weighted-muscle-up` — Weighted Muscle-Up (Triceps)
- `builtin-exercise:weighted-pistol-squat` — Weighted Pistol Squat (Legs)
- `builtin-exercise:weighted-plank` — Weighted Plank (Abs)
- `builtin-exercise:weighted-russian-twist` — Weighted Russian Twist (Abs)
- `builtin-exercise:weighted-seated-calf-raise` — Weighted Seated Calf Raise (Legs)
- `builtin-exercise:weighted-sissy-squat` — Weighted Sissy Squat (Legs)
- `builtin-exercise:weighted-straight-arm-crunch` — Weighted Straight Arm Crunch (Abs)
- `builtin-exercise:weighted-woodchopper` — Weighted Woodchopper (Shoulders)
- `builtin-exercise:wide-grip-chest-supported-row` — Wide Grip Chest Supported Row (Back)
- `builtin-exercise:wide-grip-rear-pull-up` — Wide Grip Rear Pull-Up (Back)
- `builtin-exercise:wide-grip-standing-barbell-curl` — Wide Grip Standing Barbell Curl (Biceps)
- `builtin-exercise:wide-hand-push-up` — Wide Hand Push-Up (Chest)
- `builtin-exercise:wrist-push-up` — Wrist Push-Up (Forearms)
- `builtin-exercise:zercher-squat` — Zercher Squat (Legs)

## Media integrity

- Verified files: 804
- Total: 695,871,888 bytes (663.64 MiB)
- Average: 865,512 bytes
- Smallest: `abdominal-vaccum.mp4` (295,825 bytes)
- Largest: `happy-baby-pose.mp4` (3,918,466 bytes)
- Missing files: 0
- Empty/invalid MP4 containers: 0
- Duplicate media paths: 0
- Duplicate source asset URLs: 0
- Duplicate binary-content groups with distinct FitDex source URLs: 7 (retained under deterministic canonical filenames)
- Orphan files after reconciliation: 0
- PWA exercise-media precache: disabled
- Media loading: selected Exercise Detail only

## Legacy/orphan media files removed (90)

These filenames were present in the Phase 1H local directory but are not referenced by any v3 canonical content record. Historical workout display uses text snapshots and does not depend on them.

- `alternating-dumbbell-curl.mp4`
- `arnold-press.mp4`
- `back-squat.mp4`
- `band-face-pull.mp4`
- `barbell-bulgarian-split-squat.mp4`
- `barbell-curl.mp4`
- `barbell-reverse-lunge.mp4`
- `barbell-snatch.mp4`
- `barbell-walking-lunge.mp4`
- `belt-squat.mp4`
- `bench-dip.mp4`
- `bicycle-crunch.mp4`
- `box-jump.mp4`
- `bulgarian-split-squat.mp4`
- `cable-chest-press.mp4`
- `cable-crunch.mp4`
- `cable-curl.mp4`
- `cable-fly.mp4`
- `cable-hammer-curl.mp4`
- `cable-rear-delt-fly.mp4`
- `cable-triceps-kickback.mp4`
- `captains-chair-knee-raise.mp4`
- `chest-dip.mp4`
- `chest-supported-dumbbell-row.mp4`
- `chest-supported-t-bar-row.mp4`
- `concentration-curl.mp4`
- `conventional-deadlift.mp4`
- `cross-body-hammer-curl.mp4`
- `crunch.mp4`
- `dumbbell-curl.mp4`
- `dumbbell-floor-press.mp4`
- `dumbbell-overhead-triceps-extension.mp4`
- `dumbbell-preacher-curl.mp4`
- `dumbbell-pullover.mp4`
- `dumbbell-rear-delt-fly.mp4`
- `dumbbell-reverse-wrist-curl.mp4`
- `dumbbell-shoulder-press.mp4`
- `dumbbell-wrist-curl.mp4`
- `ez-bar-curl.mp4`
- `ez-bar-skull-crusher.mp4`
- `face-pull.mp4`
- `forward-lunge.mp4`
- `front-foot-elevated-split-squat.mp4`
- `hack-squat.mp4`
- `half-kneeling-single-arm-lat-pulldown.mp4`
- `hammer-curl.mp4`
- `hanging-knee-raise.mp4`
- `hanging-leg-raise.mp4`
- `high-row-machine.mp4`
- `high-to-low-cable-fly.mp4`
- `incline-dumbbell-curl.mp4`
- `incline-hammer-curl.mp4`
- `inverted-row.mp4`
- `landmine-rotation.mp4`
- `lat-pulldown.mp4`
- `lateral-lunge.mp4`
- `lean-away-cable-lateral-raise.mp4`
- `leg-extension.mp4`
- `leg-press-calf-raise.mp4`
- `low-to-high-cable-fly.mp4`
- `lying-leg-curl.mp4`
- `machine-crunch.mp4`
- `machine-hip-adduction.mp4`
- `neutral-grip-lat-pulldown.mp4`
- `neutral-grip-pull-up.mp4`
- `overhead-cable-triceps-extension.mp4`
- `pallof-press.mp4`
- `pec-deck.mp4`
- `plate-pinch-press.mp4`
- `preacher-curl.mp4`
- `reverse-crunch.mp4`
- `reverse-grip-lat-pulldown.mp4`
- `reverse-pec-deck.mp4`
- `ring-dip.mp4`
- `russian-twist.mp4`
- `single-arm-dumbbell-row.mp4`
- `single-arm-triceps-pushdown.mp4`
- `single-leg-lying-leg-curl.mp4`
- `sled-push.mp4`
- `smith-machine-bench-press.mp4`
- `smith-machine-incline-press.mp4`
- `smith-machine-shoulder-press.mp4`
- `smith-machine-squat.mp4`
- `spider-curl.mp4`
- `standing-single-leg-curl.mp4`
- `straight-arm-pulldown.mp4`
- `t-bar-row.mp4`
- `tibialis-raise.mp4`
- `walking-lunge.mp4`
- `wide-grip-seated-cable-row.mp4`
