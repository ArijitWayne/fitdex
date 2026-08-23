# Exercise Content Tracker

This is the authoritative Phase 1I.1 checker for the active SmartWorkout-derived built-in Exercise Dex. The previous 399-record / 186-media / 213-gap state is migration history, not the active catalog.

## Active snapshot

- Live crawl: 2026-08-23T10:32:26.633Z
- Built-in dataset version: 4
- Raw SmartWorkout category-page entries: 824
- Active SmartWorkout page identities after required slug deduplication and v4 retirement: 804
- Active canonical category memberships after v4 retirement: 805
- Content complete: 804 / 804
- Verified local media: 804 MP4; 0 GIF; 0 animated WebP
- Active SmartWorkout pages with no media element: 0
- Declared source assets unavailable/broken: 0
- Local media: 695,871,888 bytes (663.64 MiB)
- Legacy v2 IDs mapped to v3 successors: 257
- Legacy v2 records retired without successor: 142
- New SmartWorkout identities not represented by a mapped legacy record: 561

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

SmartWorkout’s raw page counters include 11 repeated slug/name pairs. Ten repeat inside one category; `split-squat-front-foot-elevated` repeats across Legs and Gluteal. Fetching every colliding URL showed one addressable page asset per slug, so FitDex follows the approved page-slug identity rule. Phase 1I.1 then retires the nine page identities without usable media, leaving 804 active canonical records and 805 active memberships.

## Duplicate SmartWorkout page identities reconciled

| Canonical slug | Source record IDs collapsed | Categories retained | Selected page asset |
| --- | --- | --- | --- |
| `cable-neutral-grip-lat-pulldown` | `25472b18-efdc-438a-a2c2-ab72994be361`<br>`cc39d401-ea05-f723-0500-64bbe65b589d` | Back | [MP4](https://api.smartworkout.app/asset/video/5cdf873a-c0f0-4182-bd8d-5d77fe5d8c23.mp4) |
| `dumbbell-seated-triceps-extension` | `9481d369-1493-4a72-b758-e0c1870c9b1d`<br>`c4aa256a-753d-4b96-88fc-5c52907c648a` | Triceps | [MP4](https://api.smartworkout.app/asset/video/5cd8faa4-bb41-4bb4-bbda-0aa6146f696b.mp4) |
| `dumbbell-single-leg-hip-thrust` | `0b59dd85-d65d-4e28-bad1-2a74fc204504`<br>`81c28cab-ffcc-44f7-8869-7e0979e5a145` | Gluteal | [MP4](https://api.smartworkout.app/asset/video/ec4bd299-a2f5-41ea-9eed-2fe4cfeca63f.mp4) |
| `hip-thrust` | `5246f266-003c-7ce5-6be0-283f2136321e`<br>`7ce01b32-14e6-4185-b499-137ba4f99177` | Gluteal | [MP4](https://api.smartworkout.app/asset/video/327ebb47-0e48-4e5f-af24-aca2819cf07f.mp4) |
| `machine-chest-press` | `81112d74-4711-4ddc-9145-a610bf8407c8`<br>`da6b09eb-e55d-42cd-988d-1454658c1a4f` | Chest | [MP4](https://api.smartworkout.app/asset/video/1ce6db8f-0aec-4a97-b43c-4ee15e506486.mp4) |
| `one-arm-cable-half-kneeling-lat-pulldown` | `6f1920ff-322b-43c3-8f4f-901be5cd3679`<br>`ed6f4b1d-e657-4a9d-993c-d06254b600e0` | Back | [MP4](https://api.smartworkout.app/asset/video/81cbd4a9-4c7c-4472-9594-64d0ec5ce5cf.mp4) |
| `one-arm-cable-lateral-raise` | `0ea2687b-5d78-4041-8ad4-66a6a8848da1`<br>`9532a115-3b01-43cf-96bb-f8c07cee7089` | Shoulders | [MP4](https://api.smartworkout.app/asset/video/42988dc5-536d-483f-a19e-c0871210d667.mp4) |
| `smith-calf-raises` | `78659ec5-a814-4734-9e3d-ee3e784b71b3`<br>`b7ec6aa3-d3da-4b35-974a-c50c7eb08794` | Legs | [MP4](https://api.smartworkout.app/asset/video/9d9d595a-6020-4948-b7cb-e2215d94ef25.mp4) |
| `split-squat-front-foot-elevated` | `35cd3180-abe9-417b-aebb-816d8ff6392a`<br>`4050cda9-d73a-4b37-a97e-3beaa3615d2f` | Legs, Gluteal | [MP4](https://api.smartworkout.app/asset/video/fc3eac85-3592-407e-becc-71c1301b1b3e.mp4) |
| `unilateral-farmer-walk` | `8d0b122e-3029-4722-a56a-9b9aa76575bf`<br>`ed9b5a18-18d0-4d80-bb07-b67f0ad96663` | Forearms | [MP4](https://api.smartworkout.app/asset/video/11baf506-4fb6-4333-9d0e-a13862654199.mp4) |
| `v-up` | `67fa769c-8cc6-497a-b27e-5355bc085b3c`<br>`9181ee11-473b-4ea3-9435-31ff0ec7e39f` | Abs | [MP4](https://api.smartworkout.app/asset/video/b056f73f-6295-4119-add2-010385f2457d.mp4) |

## Removed in v4 — No SmartWorkout Demonstration

- Alternate Biceps Curl
- Band Russian Twist
- Bottom up rotation
- Concentration Hammer Curl
- KAS Glute Bridge
- Kneeling Ring Push-Up
- Pull Around
- Spoto Press
- Standing Incline Band Chest Fly

Reason: SmartWorkout page exists, but no usable demonstration media is provided. FitDex v4 requires a verified demonstration for every active built-in exercise. The corresponding built-in records are archived during seeding so workout-history snapshots remain displayable.

## Active canonical content/media inventory (804)

| FitDex ID | SmartWorkout name | Categories | Source page | Source media | Type / status | Local path | Bytes | Copy |
| --- | --- | --- | --- | --- | --- | --- | ---: | --- |
| `builtin-exercise:90-to-90-stretch` | 90 To 90 Stretch | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/90-to-90-stretch) | [Asset](https://api.smartworkout.app/asset/video/78b343c4-cf54-4d33-aa3a-b9f76c86d533.mp4) | video/mp4 · available | `/exercises/90-to-90-stretch.mp4` | 560956 | Ready |
| `builtin-exercise:ab-wheel-rollout` | Ab Wheel Rollout | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/ab-wheel-rollout) | [Asset](https://api.smartworkout.app/asset/video/835d0511-4051-4a4c-88a0-a022b90dfe43.mp4) | video/mp4 · available | `/exercises/ab-wheel-rollout.mp4` | 1405447 | Ready |
| `builtin-exercise:abdominal-crunches` | Abdominal Crunches | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/abdominal-crunches) | [Asset](https://api.smartworkout.app/asset/video/b980df05-5c31-428d-85e2-4fd60362a453.mp4) | video/mp4 · available | `/exercises/abdominal-crunches.mp4` | 924325 | Ready |
| `builtin-exercise:abdominal-vaccum` | Abdominal Vaccum | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/abdominal-vaccum) | [Asset](https://api.smartworkout.app/asset/video/83a093ae-3f51-476f-a0ce-8244c0948e8c.mp4) | video/mp4 · available | `/exercises/abdominal-vaccum.mp4` | 295825 | Ready |
| `builtin-exercise:air-bike` | Air Bike | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/air-bike) | [Asset](https://api.smartworkout.app/asset/video/711f47e0-a60d-4c18-9d30-f18cea0f36f9.mp4) | video/mp4 · available | `/exercises/air-bike.mp4` | 2381954 | Ready |
| `builtin-exercise:alternate-bent-over-dumbbell-reverse-fly` | Alternate Bent Over Dumbbell Reverse Fly | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/alternate-bent-over-dumbbell-reverse-fly) | [Asset](https://api.smartworkout.app/asset/video/06daec78-0e2d-40ff-b974-778e7a5646ab.mp4) | video/mp4 · available | `/exercises/alternate-bent-over-dumbbell-reverse-fly.mp4` | 731408 | Ready |
| `builtin-exercise:alternate-dumbbell-hammer-curl` | Alternate Dumbbell Hammer Curl | Biceps | [Page](https://smartworkout.app/en/exercise-library/biceps/alternate-dumbbell-hammer-curl) | [Asset](https://api.smartworkout.app/asset/video/e24b7b60-919a-4cda-8e49-044144551388.mp4) | video/mp4 · available | `/exercises/alternate-dumbbell-hammer-curl.mp4` | 1041893 | Ready |
| `builtin-exercise:alternate-renegade-row` | Alternate Renegade Row | Back | [Page](https://smartworkout.app/en/exercise-library/back/alternate-renegade-row) | [Asset](https://api.smartworkout.app/asset/video/f6854155-c34a-42ec-9ab5-a4148670164a.mp4) | video/mp4 · available | `/exercises/alternate-renegade-row.mp4` | 2027846 | Ready |
| `builtin-exercise:anderson-squat` | Anderson Squat | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/anderson-squat) | [Asset](https://api.smartworkout.app/asset/video/32cb7e52-a070-4eff-8aa3-4a9abfbbc1ae.mp4) | video/mp4 · available | `/exercises/anderson-squat.mp4` | 765469 | Ready |
| `builtin-exercise:ankle-taps` | Ankle Taps | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/ankle-taps) | [Asset](https://api.smartworkout.app/asset/video/4af8a144-1fcf-4874-b65c-f0701180c46b.mp4) | video/mp4 · available | `/exercises/ankle-taps.mp4` | 1315192 | Ready |
| `builtin-exercise:archer-push-up` | Archer Push-Up | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/archer-push-up) | [Asset](https://api.smartworkout.app/asset/video/d6d078a4-e818-46f9-a1a2-33ce24b4ad6e.mp4) | video/mp4 · available | `/exercises/archer-push-up.mp4` | 1270304 | Ready |
| `builtin-exercise:arm-blaster-biceps-dumbbell-curl` | Arm Blaster Biceps Dumbbell Curl | Biceps | [Page](https://smartworkout.app/en/exercise-library/biceps/arm-blaster-biceps-dumbbell-curl) | [Asset](https://api.smartworkout.app/asset/video/4f94bd74-ba37-455d-93c3-dabc0d59cf33.mp4) | video/mp4 · available | `/exercises/arm-blaster-biceps-dumbbell-curl.mp4` | 642172 | Ready |
| `builtin-exercise:arm-circle` | Arm Circle | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/arm-circle) | [Asset](https://api.smartworkout.app/asset/video/b65dda81-6835-4edb-a6e9-8c5d057c1fd6.mp4) | video/mp4 · available | `/exercises/arm-circle.mp4` | 734846 | Ready |
| `builtin-exercise:arm-circles` | Arm Circles | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/arm-circles) | [Asset](https://api.smartworkout.app/asset/video/1271bd6d-3db2-4209-8106-a49f5639af68.mp4) | video/mp4 · available | `/exercises/arm-circles.mp4` | 707492 | Ready |
| `builtin-exercise:assault-air-bike` | Assault Air Bike | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/assault-air-bike) | [Asset](https://api.smartworkout.app/asset/video/f7f76a00-8794-478f-b596-4b690632b7df.mp4) | video/mp4 · available | `/exercises/assault-air-bike.mp4` | 1050439 | Ready |
| `builtin-exercise:assisted-machine-dips` | Assisted Machine Dips | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/assisted-machine-dips) | [Asset](https://api.smartworkout.app/asset/video/74667d62-246e-4489-b879-c9ac936057f6.mp4) | video/mp4 · available | `/exercises/assisted-machine-dips.mp4` | 700450 | Ready |
| `builtin-exercise:assisted-pistol-squat` | Assisted Pistol Squat | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/assisted-pistol-squat) | [Asset](https://api.smartworkout.app/asset/video/a7891e33-9847-4d55-a737-6f17c2ddcfc0.mp4) | video/mp4 · available | `/exercises/assisted-pistol-squat.mp4` | 758477 | Ready |
| `builtin-exercise:assisted-pull-up` | Assisted Pull-Up | Back | [Page](https://smartworkout.app/en/exercise-library/back/assisted-pull-up) | [Asset](https://api.smartworkout.app/asset/video/51ffe5a7-e431-4ab1-8f79-98c41856a8b7.mp4) | video/mp4 · available | `/exercises/assisted-pull-up.mp4` | 669535 | Ready |
| `builtin-exercise:australian-pull-up-underhand-grip` | Australian Pull-Up Underhand Grip | Back | [Page](https://smartworkout.app/en/exercise-library/back/australian-pull-up-underhand-grip) | [Asset](https://api.smartworkout.app/asset/video/775dd4d7-8c4f-4333-9ff0-a6297bbd06cd.mp4) | video/mp4 · available | `/exercises/australian-pull-up-underhand-grip.mp4` | 685705 | Ready |
| `builtin-exercise:b-stance-romanian-deadlift` | B Stance Romanian Deadlift | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/b-stance-romanian-deadlift) | [Asset](https://api.smartworkout.app/asset/video/ad7961a3-0d2b-45d0-937e-83b2b812d482.mp4) | video/mp4 · available | `/exercises/b-stance-romanian-deadlift.mp4` | 886591 | Ready |
| `builtin-exercise:back-extension` | Back Extension | Gluteal | [Page](https://smartworkout.app/en/exercise-library/gluteus/back-extension) | [Asset](https://api.smartworkout.app/asset/video/45ae7259-2425-4985-9979-4b1aa0f11df7.mp4) | video/mp4 · available | `/exercises/back-extension.mp4` | 827632 | Ready |
| `builtin-exercise:back-extension-with-dumbbell` | Back Extension With Dumbbell | Gluteal | [Page](https://smartworkout.app/en/exercise-library/gluteus/back-extension-with-dumbbell) | [Asset](https://api.smartworkout.app/asset/video/c809adda-ee2a-4280-b9c6-9ecf894835a6.mp4) | video/mp4 · available | `/exercises/back-extension-with-dumbbell.mp4` | 770417 | Ready |
| `builtin-exercise:back-lever` | Back Lever | Back | [Page](https://smartworkout.app/en/exercise-library/back/back-lever) | [Asset](https://api.smartworkout.app/asset/video/63d6d9ac-f615-4d45-8a82-45996974a718.mp4) | video/mp4 · available | `/exercises/back-lever.mp4` | 627742 | Ready |
| `builtin-exercise:band-assisted-pull-up` | Band Assisted Pull Up | Back | [Page](https://smartworkout.app/en/exercise-library/back/band-assisted-pull-up) | [Asset](https://api.smartworkout.app/asset/video/fa0d3433-ba9f-4e33-9f41-1daa10a84a63.mp4) | video/mp4 · available | `/exercises/band-assisted-pull-up.mp4` | 712543 | Ready |
| `builtin-exercise:band-bench-chest-press` | Band Bench Chest Press | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/band-bench-chest-press) | [Asset](https://api.smartworkout.app/asset/video/d563db4f-f311-485c-bcf7-c115e22a12ca.mp4) | video/mp4 · available | `/exercises/band-bench-chest-press.mp4` | 828062 | Ready |
| `builtin-exercise:band-bent-over-lat-pulldown` | Band Bent Over Lat Pulldown | Back | [Page](https://smartworkout.app/en/exercise-library/back/band-bent-over-lat-pulldown) | [Asset](https://api.smartworkout.app/asset/video/494fc248-87a5-4e26-9ebf-dc27f1e71ae4.mp4) | video/mp4 · available | `/exercises/band-bent-over-lat-pulldown.mp4` | 527193 | Ready |
| `builtin-exercise:band-biceps-curl` | Band Biceps Curl | Biceps | [Page](https://smartworkout.app/en/exercise-library/biceps/band-biceps-curl) | [Asset](https://api.smartworkout.app/asset/video/511f4fb3-13c8-4835-a91d-626bb2b469d2.mp4) | video/mp4 · available | `/exercises/band-biceps-curl.mp4` | 646085 | Ready |
| `builtin-exercise:band-bicycle-crunches` | Band Bicycle Crunches | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/band-bicycle-crunches) | [Asset](https://api.smartworkout.app/asset/video/7609f336-3372-4db7-b3e5-dd70634cd39e.mp4) | video/mp4 · available | `/exercises/band-bicycle-crunches.mp4` | 809416 | Ready |
| `builtin-exercise:band-chest-fly` | Band Chest Fly | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/band-chest-fly) | [Asset](https://api.smartworkout.app/asset/video/7d8a4a20-e873-4831-a6b4-a6a0b28a6cae.mp4) | video/mp4 · available | `/exercises/band-chest-fly.mp4` | 623083 | Ready |
| `builtin-exercise:band-half-kneeling-chop` | Band Half Kneeling Chop | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/band-half-kneeling-chop) | [Asset](https://api.smartworkout.app/asset/video/442d326f-92ed-48da-8b69-a0f0d6ff4244.mp4) | video/mp4 · available | `/exercises/band-half-kneeling-chop.mp4` | 589030 | Ready |
| `builtin-exercise:band-hammer-curl` | Band Hammer Curl | Biceps | [Page](https://smartworkout.app/en/exercise-library/biceps/band-hammer-curl) | [Asset](https://api.smartworkout.app/asset/video/5f18c6e4-1d2c-4c4a-b2fe-7bc0be4525f7.mp4) | video/mp4 · available | `/exercises/band-hammer-curl.mp4` | 719574 | Ready |
| `builtin-exercise:band-high-anchor-wide-row` | Band High Anchor Wide Row | Back | [Page](https://smartworkout.app/en/exercise-library/back/band-high-anchor-wide-row) | [Asset](https://api.smartworkout.app/asset/video/2612c1c3-30b3-4d16-9c9a-d77d9da258b7.mp4) | video/mp4 · available | `/exercises/band-high-anchor-wide-row.mp4` | 570786 | Ready |
| `builtin-exercise:band-hip-abduction` | Band Hip Abduction | Gluteal | [Page](https://smartworkout.app/en/exercise-library/gluteus/band-hip-abduction) | [Asset](https://api.smartworkout.app/asset/video/465b9349-3c5e-4107-b56f-5da23ba2e73d.mp4) | video/mp4 · available | `/exercises/band-hip-abduction.mp4` | 542352 | Ready |
| `builtin-exercise:band-kneeling-twisting-crunch` | Band Kneeling Twisting Crunch | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/band-kneeling-twisting-crunch) | [Asset](https://api.smartworkout.app/asset/video/adae5f93-01ec-42a9-988d-11d5a362dea6.mp4) | video/mp4 · available | `/exercises/band-kneeling-twisting-crunch.mp4` | 670362 | Ready |
| `builtin-exercise:band-lateral-raise` | Band Lateral Raise | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/band-lateral-raise) | [Asset](https://api.smartworkout.app/asset/video/ccc2c2e5-e9bc-4613-a40d-d8411e4872b0.mp4) | video/mp4 · available | `/exercises/band-lateral-raise.mp4` | 769001 | Ready |
| `builtin-exercise:band-lying-clamshells` | Band Lying Clamshells | Gluteal | [Page](https://smartworkout.app/en/exercise-library/gluteus/band-lying-clamshells) | [Asset](https://api.smartworkout.app/asset/video/295dfc97-9c8a-46e8-8a3d-33f9f52d842c.mp4) | video/mp4 · available | `/exercises/band-lying-clamshells.mp4` | 573707 | Ready |
| `builtin-exercise:band-lying-leg-curl` | Band Lying Leg Curl | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/band-lying-leg-curl) | [Asset](https://api.smartworkout.app/asset/video/c88cb36a-86e7-4460-877a-fb9e02d1821a.mp4) | video/mp4 · available | `/exercises/band-lying-leg-curl.mp4` | 705958 | Ready |
| `builtin-exercise:band-pallof-press` | Band Pallof Press | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/band-pallof-press) | [Asset](https://api.smartworkout.app/asset/video/f65e3ecc-bf7d-4a45-a604-dfe2e2fbc923.mp4) | video/mp4 · available | `/exercises/band-pallof-press.mp4` | 550756 | Ready |
| `builtin-exercise:band-pass-through-shoulders` | Band Pass Through Shoulders | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/band-pass-through-shoulders) | [Asset](https://api.smartworkout.app/asset/video/e31f0ad1-f6e3-49c2-92f1-fa74e2d62826.mp4) | video/mp4 · available | `/exercises/band-pass-through-shoulders.mp4` | 936070 | Ready |
| `builtin-exercise:band-pulldown-behind-neck` | Band Pulldown Behind Neck | Back | [Page](https://smartworkout.app/en/exercise-library/back/band-pulldown-behind-neck) | [Asset](https://api.smartworkout.app/asset/video/a82c5199-4f3e-43ca-a962-2fc78883059e.mp4) | video/mp4 · available | `/exercises/band-pulldown-behind-neck.mp4` | 554077 | Ready |
| `builtin-exercise:band-reverse-hyperextension` | Band Reverse Hyperextension | Gluteal | [Page](https://smartworkout.app/en/exercise-library/gluteus/band-reverse-hyperextension) | [Asset](https://api.smartworkout.app/asset/video/8d9c217e-2483-4509-ac1c-89c7f177bdff.mp4) | video/mp4 · available | `/exercises/band-reverse-hyperextension.mp4` | 1085808 | Ready |
| `builtin-exercise:band-shoulder-press` | Band Shoulder Press | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/band-shoulder-press) | [Asset](https://api.smartworkout.app/asset/video/18aee779-848b-4fcd-b36d-8c77649e36bf.mp4) | video/mp4 · available | `/exercises/band-shoulder-press.mp4` | 664947 | Ready |
| `builtin-exercise:band-squat` | Band Squat | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/band-squat) | [Asset](https://api.smartworkout.app/asset/video/5463018d-cf93-4170-819a-dd9a0d6f0a93.mp4) | video/mp4 · available | `/exercises/band-squat.mp4` | 1011354 | Ready |
| `builtin-exercise:band-standing-balance-glute-kickback` | Band Standing Balance Glute Kickback | Gluteal | [Page](https://smartworkout.app/en/exercise-library/gluteus/band-standing-balance-glute-kickback) | [Asset](https://api.smartworkout.app/asset/video/e672bc71-a92f-4189-8b4f-6977b0fab6b1.mp4) | video/mp4 · available | `/exercises/band-standing-balance-glute-kickback.mp4` | 655098 | Ready |
| `builtin-exercise:band-standing-crunches` | Band Standing Crunches | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/band-standing-crunches) | [Asset](https://api.smartworkout.app/asset/video/3fee3ea2-6e2a-41cc-a691-240c50de6372.mp4) | video/mp4 · available | `/exercises/band-standing-crunches.mp4` | 731844 | Ready |
| `builtin-exercise:band-standing-side-bend` | Band Standing Side Bend | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/band-standing-side-bend) | [Asset](https://api.smartworkout.app/asset/video/ab801dff-4918-460d-a184-1bdd68bb288a.mp4) | video/mp4 · available | `/exercises/band-standing-side-bend.mp4` | 689416 | Ready |
| `builtin-exercise:band-standing-twisting-crunches` | Band Standing Twisting Crunches | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/band-standing-twisting-crunches) | [Asset](https://api.smartworkout.app/asset/video/e20edacd-7025-41dc-9bd5-c6aafaf64f51.mp4) | video/mp4 · available | `/exercises/band-standing-twisting-crunches.mp4` | 761604 | Ready |
| `builtin-exercise:band-triceps-pushdown` | Band Triceps Pushdown | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/band-triceps-pushdown) | [Asset](https://api.smartworkout.app/asset/video/62a8f0d0-56a5-401c-a20e-5a39902bad3e.mp4) | video/mp4 · available | `/exercises/band-triceps-pushdown.mp4` | 433901 | Ready |
| `builtin-exercise:band-twist-horizontal` | Band Twist (horizontal) | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/band-twist-(horizontal)) | [Asset](https://api.smartworkout.app/asset/video/c213b508-6d89-4d6e-836f-b6dd20198d7c.mp4) | video/mp4 · available | `/exercises/band-twist-horizontal.mp4` | 623149 | Ready |
| `builtin-exercise:band-upright-row` | Band Upright Row | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/band-upright-row) | [Asset](https://api.smartworkout.app/asset/video/b64576d9-b2e6-4869-83e8-38f03349f26a.mp4) | video/mp4 · available | `/exercises/band-upright-row.mp4` | 787122 | Ready |
| `builtin-exercise:band-warm-up-dynamic-shoulder-stretch` | Band Warm-Up Dynamic Shoulder Stretch | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/band-warm-up-dynamic-shoulder-stretch) | [Asset](https://api.smartworkout.app/asset/video/fb552ef7-a0e9-44d5-bed1-d0192234d886.mp4) | video/mp4 · available | `/exercises/band-warm-up-dynamic-shoulder-stretch.mp4` | 748673 | Ready |
| `builtin-exercise:banded-face-pull` | Banded Face Pull | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/banded-face-pull) | [Asset](https://api.smartworkout.app/asset/video/221b5c57-a4cc-4f75-a28e-dcb11e92633a.mp4) | video/mp4 · available | `/exercises/banded-face-pull.mp4` | 526822 | Ready |
| `builtin-exercise:bar-cable-biceps-curl` | Bar Cable Biceps Curl | Biceps | [Page](https://smartworkout.app/en/exercise-library/biceps/bar-cable-biceps-curl) | [Asset](https://api.smartworkout.app/asset/video/067fd90e-7865-455c-abfe-b082dbe1daf8.mp4) | video/mp4 · available | `/exercises/bar-cable-biceps-curl.mp4` | 556835 | Ready |
| `builtin-exercise:barbell-behind-neck-shoulder-press` | Barbell Behind Neck Shoulder Press | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/barbell-behind-neck-shoulder-press) | [Asset](https://api.smartworkout.app/asset/video/a260d6a5-06a4-4be9-a739-4005484d4683.mp4) | video/mp4 · available | `/exercises/barbell-behind-neck-shoulder-press.mp4` | 637065 | Ready |
| `builtin-exercise:barbell-bench-press` | Barbell Bench Press | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/barbell-bench-press) | [Asset](https://api.smartworkout.app/asset/video/30f3160a-3a57-426a-a3b9-4eed573310f8.mp4) | video/mp4 · available | `/exercises/barbell-bench-press.mp4` | 824066 | Ready |
| `builtin-exercise:barbell-bench-press-with-chains` | Barbell Bench Press with Chains | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/barbell-bench-press-with-chains) | [Asset](https://api.smartworkout.app/asset/video/04001bdc-c78d-4d5b-9e7d-c53983b9087a.mp4) | video/mp4 · available | `/exercises/barbell-bench-press-with-chains.mp4` | 1087585 | Ready |
| `builtin-exercise:barbell-bent-over-row` | Barbell Bent Over Row | Back | [Page](https://smartworkout.app/en/exercise-library/back/barbell-bent-over-row) | [Asset](https://api.smartworkout.app/asset/video/101feeac-462a-48cc-9376-38a2077b9116.mp4) | video/mp4 · available | `/exercises/barbell-bent-over-row.mp4` | 841967 | Ready |
| `builtin-exercise:barbell-bent-over-row-from-pin` | Barbell Bent Over Row From Pin | Back | [Page](https://smartworkout.app/en/exercise-library/back/barbell-bent-over-row-from-pin) | [Asset](https://api.smartworkout.app/asset/video/cb9d90dc-949d-40a2-875e-ad8eea0d41dc.mp4) | video/mp4 · available | `/exercises/barbell-bent-over-row-from-pin.mp4` | 481974 | Ready |
| `builtin-exercise:barbell-bulgarian-squat` | Barbell Bulgarian Squat | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/barbell-bulgarian-squat) | [Asset](https://api.smartworkout.app/asset/video/ce85e41c-3a1c-4442-9506-38a27cd7414c.mp4) | video/mp4 · available | `/exercises/barbell-bulgarian-squat.mp4` | 910627 | Ready |
| `builtin-exercise:barbell-calf-raise` | Barbell Calf Raise | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/barbell-calf-raise) | [Asset](https://api.smartworkout.app/asset/video/06917492-58a0-4a7d-9efb-53c2fd92c4ba.mp4) | video/mp4 · available | `/exercises/barbell-calf-raise.mp4` | 712987 | Ready |
| `builtin-exercise:barbell-cossack-squat` | Barbell Cossack Squat | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/barbell-cossack-squat) | [Asset](https://api.smartworkout.app/asset/video/4e18d581-14e2-46d0-918f-b2fa9b40e5e5.mp4) | video/mp4 · available | `/exercises/barbell-cossack-squat.mp4` | 2103501 | Ready |
| `builtin-exercise:barbell-drag-curl` | Barbell Drag Curl | Biceps | [Page](https://smartworkout.app/en/exercise-library/biceps/barbell-drag-curl) | [Asset](https://api.smartworkout.app/asset/video/64fd3334-fd85-4118-9d1a-a408bcfffeb5.mp4) | video/mp4 · available | `/exercises/barbell-drag-curl.mp4` | 670826 | Ready |
| `builtin-exercise:barbell-floor-press` | Barbell Floor Press | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/barbell-floor-press) | [Asset](https://api.smartworkout.app/asset/video/8b18f8e1-e2d8-41b9-a5e5-692999b6c551.mp4) | video/mp4 · available | `/exercises/barbell-floor-press.mp4` | 1110672 | Ready |
| `builtin-exercise:barbell-front-raise` | Barbell Front Raise | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/barbell-front-raise) | [Asset](https://api.smartworkout.app/asset/video/951c8728-438b-48b2-83d6-c9422cc511d6.mp4) | video/mp4 · available | `/exercises/barbell-front-raise.mp4` | 896033 | Ready |
| `builtin-exercise:barbell-glute-bridge` | Barbell Glute Bridge | Gluteal | [Page](https://smartworkout.app/en/exercise-library/gluteus/barbell-glute-bridge) | [Asset](https://api.smartworkout.app/asset/video/b5b2db70-8b95-448f-a858-a4808cc4e141.mp4) | video/mp4 · available | `/exercises/barbell-glute-bridge.mp4` | 1405922 | Ready |
| `builtin-exercise:barbell-good-morning` | Barbell Good Morning | Gluteal | [Page](https://smartworkout.app/en/exercise-library/gluteus/barbell-good-morning) | [Asset](https://api.smartworkout.app/asset/video/3df96014-5ab8-4ce1-9ad7-d6d31e263f97.mp4) | video/mp4 · available | `/exercises/barbell-good-morning.mp4` | 1032366 | Ready |
| `builtin-exercise:barbell-hack-squat` | Barbell Hack Squat | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/barbell-hack-squat) | [Asset](https://api.smartworkout.app/asset/video/594dbe4c-f506-489f-b891-daf6538fa6d9.mp4) | video/mp4 · available | `/exercises/barbell-hack-squat.mp4` | 1038817 | Ready |
| `builtin-exercise:barbell-incline-wide-grip-row` | Barbell Incline Wide Grip Row | Back | [Page](https://smartworkout.app/en/exercise-library/back/barbell-incline-wide-grip-row) | [Asset](https://api.smartworkout.app/asset/video/28f1fe24-7ef7-47b4-a7a6-5e7b7b3cb5e6.mp4) | video/mp4 · available | `/exercises/barbell-incline-wide-grip-row.mp4` | 654173 | Ready |
| `builtin-exercise:barbell-larsen-press` | Barbell Larsen Press | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/barbell-larsen-press) | [Asset](https://api.smartworkout.app/asset/video/1c76c330-7f85-4b5e-a464-1d8bd9ac863e.mp4) | video/mp4 · available | `/exercises/barbell-larsen-press.mp4` | 812376 | Ready |
| `builtin-exercise:barbell-narrow-grip-upright-row` | Barbell Narrow Grip Upright Row | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/barbell-narrow-grip-upright-row) | [Asset](https://api.smartworkout.app/asset/video/00adea9e-0267-4a00-8f1a-02d749c6576c.mp4) | video/mp4 · available | `/exercises/barbell-narrow-grip-upright-row.mp4` | 628091 | Ready |
| `builtin-exercise:barbell-overhead-press` | Barbell Overhead Press | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/barbell-overhead-press) | [Asset](https://api.smartworkout.app/asset/video/eee45f5c-89a3-45a5-953d-c83cb7c6b817.mp4) | video/mp4 · available | `/exercises/barbell-overhead-press.mp4` | 657623 | Ready |
| `builtin-exercise:barbell-overhead-squat` | Barbell Overhead Squat | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/barbell-overhead-squat) | [Asset](https://api.smartworkout.app/asset/video/5f3c1824-528c-4b58-b660-f7b248ec6816.mp4) | video/mp4 · available | `/exercises/barbell-overhead-squat.mp4` | 864896 | Ready |
| `builtin-exercise:barbell-preacher-curl` | Barbell Preacher Curl | Biceps | [Page](https://smartworkout.app/en/exercise-library/biceps/barbell-preacher-curl) | [Asset](https://api.smartworkout.app/asset/video/0c14d042-5f2f-483e-a81d-e96f1803f5ac.mp4) | video/mp4 · available | `/exercises/barbell-preacher-curl.mp4` | 844402 | Ready |
| `builtin-exercise:barbell-prone-incline-curl` | Barbell Prone Incline Curl | Biceps | [Page](https://smartworkout.app/en/exercise-library/biceps/barbell-prone-incline-curl) | [Asset](https://api.smartworkout.app/asset/video/a424a5fe-3dce-4fe7-a98d-2d75c50fdbaa.mp4) | video/mp4 · available | `/exercises/barbell-prone-incline-curl.mp4` | 1004535 | Ready |
| `builtin-exercise:barbell-pullover` | Barbell Pullover | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/barbell-pullover) | [Asset](https://api.smartworkout.app/asset/video/e5628a22-980d-4a2d-ba67-8923508ac2e2.mp4) | video/mp4 · available | `/exercises/barbell-pullover.mp4` | 1152728 | Ready |
| `builtin-exercise:barbell-push-press` | Barbell Push Press | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/barbell-push-press) | [Asset](https://api.smartworkout.app/asset/video/5f36f500-8cfe-4c4f-a4ba-0ec33c72261e.mp4) | video/mp4 · available | `/exercises/barbell-push-press.mp4` | 842135 | Ready |
| `builtin-exercise:barbell-rack-pull` | Barbell Rack Pull | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/barbell-rack-pull) | [Asset](https://api.smartworkout.app/asset/video/0ff3c7df-bbc5-429d-b225-9a980c6c2712.mp4) | video/mp4 · available | `/exercises/barbell-rack-pull.mp4` | 874362 | Ready |
| `builtin-exercise:barbell-rear-delt-raise` | Barbell Rear Delt Raise | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/barbell-rear-delt-raise) | [Asset](https://api.smartworkout.app/asset/video/c40b0cfe-e3bc-4f4f-82db-a227b8ca30be.mp4) | video/mp4 · available | `/exercises/barbell-rear-delt-raise.mp4` | 596004 | Ready |
| `builtin-exercise:barbell-rear-delt-row` | Barbell Rear Delt Row | Back | [Page](https://smartworkout.app/en/exercise-library/back/barbell-rear-delt-row) | [Asset](https://api.smartworkout.app/asset/video/b08fc1c6-77bf-43ee-aae1-c06f999762fe.mp4) | video/mp4 · available | `/exercises/barbell-rear-delt-row.mp4` | 894473 | Ready |
| `builtin-exercise:barbell-rear-lunge-on-step` | Barbell Rear Lunge On Step | Gluteal | [Page](https://smartworkout.app/en/exercise-library/gluteus/barbell-rear-lunge-on-step) | [Asset](https://api.smartworkout.app/asset/video/6d9a7e82-6bb1-4687-9d77-ded32f7a58ee.mp4) | video/mp4 · available | `/exercises/barbell-rear-lunge-on-step.mp4` | 871092 | Ready |
| `builtin-exercise:barbell-reverse-grip-bent-over-row` | Barbell Reverse Grip Bent Over Row | Back | [Page](https://smartworkout.app/en/exercise-library/back/barbell-reverse-grip-bent-over-row) | [Asset](https://api.smartworkout.app/asset/video/cbedc9e5-2e62-44b1-8e9d-bc9261db5de4.mp4) | video/mp4 · available | `/exercises/barbell-reverse-grip-bent-over-row.mp4` | 892840 | Ready |
| `builtin-exercise:barbell-reverse-grip-forearm-curl` | Barbell Reverse Grip Forearm Curl | Forearms | [Page](https://smartworkout.app/en/exercise-library/forearms/barbell-reverse-grip-forearm-curl) | [Asset](https://api.smartworkout.app/asset/video/c85f9c74-1ba7-4df5-98aa-3e0f5f2abc15.mp4) | video/mp4 · available | `/exercises/barbell-reverse-grip-forearm-curl.mp4` | 696911 | Ready |
| `builtin-exercise:barbell-reverse-lunges` | Barbell Reverse Lunges | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/barbell-reverse-lunges) | [Asset](https://api.smartworkout.app/asset/video/b37670f8-1281-4c54-80d9-833a60760102.mp4) | video/mp4 · available | `/exercises/barbell-reverse-lunges.mp4` | 970049 | Ready |
| `builtin-exercise:barbell-reverse-wrist-curl` | Barbell Reverse Wrist Curl | Forearms | [Page](https://smartworkout.app/en/exercise-library/forearms/barbell-reverse-wrist-curl) | [Asset](https://api.smartworkout.app/asset/video/e800f525-c7ea-4236-a0f8-527fa049fa26.mp4) | video/mp4 · available | `/exercises/barbell-reverse-wrist-curl.mp4` | 583954 | Ready |
| `builtin-exercise:barbell-rollout-kneeling` | Barbell Rollout - Kneeling | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/barbell-rollout---kneeling) | [Asset](https://api.smartworkout.app/asset/video/d35b5147-f146-4796-8dce-b27745dc835b.mp4) | video/mp4 · available | `/exercises/barbell-rollout-kneeling.mp4` | 1619979 | Ready |
| `builtin-exercise:barbell-shoulder-grip-upright-row` | Barbell Shoulder Grip Upright Row | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/barbell-shoulder-grip-upright-row) | [Asset](https://api.smartworkout.app/asset/video/67366bdf-c624-4e65-8046-7204d48c1815.mp4) | video/mp4 · available | `/exercises/barbell-shoulder-grip-upright-row.mp4` | 643835 | Ready |
| `builtin-exercise:barbell-shoulder-shrug` | Barbell Shoulder Shrug | Back | [Page](https://smartworkout.app/en/exercise-library/back/barbell-shoulder-shrug) | [Asset](https://api.smartworkout.app/asset/video/eb03004d-95da-4439-a02a-f8735ca5655d.mp4) | video/mp4 · available | `/exercises/barbell-shoulder-shrug.mp4` | 490357 | Ready |
| `builtin-exercise:barbell-shrug-behind-the-back` | Barbell Shrug Behind The Back | Back | [Page](https://smartworkout.app/en/exercise-library/back/barbell-shrug-behind-the-back) | [Asset](https://api.smartworkout.app/asset/video/e72b6c0c-7465-4cba-90d7-2372f01c92da.mp4) | video/mp4 · available | `/exercises/barbell-shrug-behind-the-back.mp4` | 471260 | Ready |
| `builtin-exercise:barbell-split-squat` | Barbell Split Squat | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/barbell-split-squat) | [Asset](https://api.smartworkout.app/asset/video/320a0f49-c7b5-4635-be01-3985a4df84cd.mp4) | video/mp4 · available | `/exercises/barbell-split-squat.mp4` | 866187 | Ready |
| `builtin-exercise:barbell-squat` | Barbell Squat | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/barbell-squat) | [Asset](https://api.smartworkout.app/asset/video/ceb84676-82fe-4281-81b2-8aef624c83ba.mp4) | video/mp4 · available | `/exercises/barbell-squat.mp4` | 959468 | Ready |
| `builtin-exercise:barbell-standing-back-wrist-curl` | Barbell Standing Back Wrist Curl | Forearms | [Page](https://smartworkout.app/en/exercise-library/forearms/barbell-standing-back-wrist-curl) | [Asset](https://api.smartworkout.app/asset/video/94e02ebc-19ff-4884-9141-d5edac6f314c.mp4) | video/mp4 · available | `/exercises/barbell-standing-back-wrist-curl.mp4` | 448874 | Ready |
| `builtin-exercise:barbell-standing-twist` | Barbell Standing Twist | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/barbell-standing-twist) | [Asset](https://api.smartworkout.app/asset/video/661d2e49-9612-4f4c-9885-18d6c6fa37f7.mp4) | video/mp4 · available | `/exercises/barbell-standing-twist.mp4` | 1540725 | Ready |
| `builtin-exercise:barbell-standing-wrist-curl` | Barbell Standing Wrist Curl | Forearms | [Page](https://smartworkout.app/en/exercise-library/forearms/barbell-standing-wrist-curl) | [Asset](https://api.smartworkout.app/asset/video/8ac66913-d841-40fb-a1f1-57a76e24282c.mp4) | video/mp4 · available | `/exercises/barbell-standing-wrist-curl.mp4` | 418936 | Ready |
| `builtin-exercise:barbell-step-up` | Barbell Step-up | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/barbell-step-up) | [Asset](https://api.smartworkout.app/asset/video/31c9c173-599f-414b-bce4-ae32b7558e6a.mp4) | video/mp4 · available | `/exercises/barbell-step-up.mp4` | 801366 | Ready |
| `builtin-exercise:barbell-straight-leg-deadlift` | Barbell Straight Leg Deadlift | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/barbell-straight-leg-deadlift) | [Asset](https://api.smartworkout.app/asset/video/b07f6cbe-dd15-40c1-a5f6-1ef645d9777d.mp4) | video/mp4 · available | `/exercises/barbell-straight-leg-deadlift.mp4` | 1083886 | Ready |
| `builtin-exercise:barbell-sumo-squat` | Barbell Sumo Squat | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/barbell-sumo-squat) | [Asset](https://api.smartworkout.app/asset/video/0c449cf5-d33a-4276-a95a-4a563790904d.mp4) | video/mp4 · available | `/exercises/barbell-sumo-squat.mp4` | 1013359 | Ready |
| `builtin-exercise:barbell-thruster` | Barbell Thruster | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/barbell-thruster) | [Asset](https://api.smartworkout.app/asset/video/42744805-6e12-4cbb-b61b-fede5201b37e.mp4) | video/mp4 · available | `/exercises/barbell-thruster.mp4` | 909178 | Ready |
| `builtin-exercise:barbell-walking-lunges` | Barbell Walking Lunges | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/barbell-walking-lunges) | [Asset](https://api.smartworkout.app/asset/video/d8042d5e-0b53-4944-80ae-b8e7a7ab8896.mp4) | video/mp4 · available | `/exercises/barbell-walking-lunges.mp4` | 825481 | Ready |
| `builtin-exercise:barbell-wall-curl` | Barbell Wall Curl | Biceps | [Page](https://smartworkout.app/en/exercise-library/biceps/barbell-wall-curl) | [Asset](https://api.smartworkout.app/asset/video/a27b52d0-29a3-4e50-9aee-62267356cc3b.mp4) | video/mp4 · available | `/exercises/barbell-wall-curl.mp4` | 670703 | Ready |
| `builtin-exercise:barbell-wide-grip-upright-row` | Barbell Wide Grip Upright Row | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/barbell-wide-grip-upright-row) | [Asset](https://api.smartworkout.app/asset/video/fcd6e4b1-6ec5-4065-af19-6e715644c5ac.mp4) | video/mp4 · available | `/exercises/barbell-wide-grip-upright-row.mp4` | 612569 | Ready |
| `builtin-exercise:barbell-wrist-curl` | Barbell Wrist Curl | Forearms | [Page](https://smartworkout.app/en/exercise-library/forearms/barbell-wrist-curl) | [Asset](https://api.smartworkout.app/asset/video/171a5b06-0839-4a18-ad58-88e93756e6b3.mp4) | video/mp4 · available | `/exercises/barbell-wrist-curl.mp4` | 601759 | Ready |
| `builtin-exercise:bayesian-cable-curl` | Bayesian Cable Curl | Biceps | [Page](https://smartworkout.app/en/exercise-library/biceps/bayesian-cable-curl) | [Asset](https://api.smartworkout.app/asset/video/b2ec3a9e-1251-4f53-bbd2-a458f2cf1f19.mp4) | video/mp4 · available | `/exercises/bayesian-cable-curl.mp4` | 588508 | Ready |
| `builtin-exercise:bayesian-cable-curl-face-away` | Bayesian Cable Curl (Face Away) | Biceps | [Page](https://smartworkout.app/en/exercise-library/biceps/bayesian-cable-curl-(face-away)) | [Asset](https://api.smartworkout.app/asset/video/4111ad25-be51-42f9-aa08-323486c44cc0.mp4) | video/mp4 · available | `/exercises/bayesian-cable-curl-face-away.mp4` | 615889 | Ready |
| `builtin-exercise:bayesian-cable-curl-seated` | Bayesian Cable Curl Seated | Biceps | [Page](https://smartworkout.app/en/exercise-library/biceps/bayesian-cable-curl-seated) | [Asset](https://api.smartworkout.app/asset/video/dd6563a0-e8e8-4d3e-973a-ba9473f8423b.mp4) | video/mp4 · available | `/exercises/bayesian-cable-curl-seated.mp4` | 588532 | Ready |
| `builtin-exercise:bear-plank` | Bear Plank | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/bear-plank) | [Asset](https://api.smartworkout.app/asset/video/883470c9-f7a2-4eab-a185-c270dc8975da.mp4) | video/mp4 · available | `/exercises/bear-plank.mp4` | 774577 | Ready |
| `builtin-exercise:bench-front-squat` | Bench Front Squat | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/bench-front-squat) | [Asset](https://api.smartworkout.app/asset/video/6b184f47-cf2c-440d-8342-dc459d8611f9.mp4) | video/mp4 · available | `/exercises/bench-front-squat.mp4` | 934821 | Ready |
| `builtin-exercise:bench-press-with-resistance-band` | Bench Press With Resistance Band | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/bench-press-with-resistance-band) | [Asset](https://api.smartworkout.app/asset/video/ffb47556-bbe3-4055-ab01-a5c1dd93cf2c.mp4) | video/mp4 · available | `/exercises/bench-press-with-resistance-band.mp4` | 804506 | Ready |
| `builtin-exercise:bent-arm-chest-stretch` | Bent Arm Chest Stretch | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/bent-arm-chest-stretch) | [Asset](https://api.smartworkout.app/asset/video/82dd6c00-4236-4d7a-98fb-a140411f1ddc.mp4) | video/mp4 · available | `/exercises/bent-arm-chest-stretch.mp4` | 391104 | Ready |
| `builtin-exercise:bent-over-dumbbell-lateral-raise` | Bent Over Dumbbell Lateral Raise | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/bent-over-dumbbell-lateral-raise) | [Asset](https://api.smartworkout.app/asset/video/2ebdc867-f60b-4838-af95-cf69171be570.mp4) | video/mp4 · available | `/exercises/bent-over-dumbbell-lateral-raise.mp4` | 1069209 | Ready |
| `builtin-exercise:bent-over-kettlebell-row` | Bent Over Kettlebell Row | Back | [Page](https://smartworkout.app/en/exercise-library/back/bent-over-kettlebell-row) | [Asset](https://api.smartworkout.app/asset/video/87732c0a-5922-46b3-aa94-c0fa6a8f6b73.mp4) | video/mp4 · available | `/exercises/bent-over-kettlebell-row.mp4` | 680676 | Ready |
| `builtin-exercise:biceps-barbell-curl` | Biceps Barbell Curl | Biceps | [Page](https://smartworkout.app/en/exercise-library/biceps/biceps-barbell-curl) | [Asset](https://api.smartworkout.app/asset/video/85c25a54-be7e-40a6-a676-4e906f3985d1.mp4) | video/mp4 · available | `/exercises/biceps-barbell-curl.mp4` | 708752 | Ready |
| `builtin-exercise:bicycle-crunches` | Bicycle Crunches | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/bicycle-crunches) | [Asset](https://api.smartworkout.app/asset/video/fd4b37e5-41f9-430c-bfbb-481e4eb5631f.mp4) | video/mp4 · available | `/exercises/bicycle-crunches.mp4` | 1799257 | Ready |
| `builtin-exercise:bird-dog` | Bird Dog | Gluteal | [Page](https://smartworkout.app/en/exercise-library/gluteus/bird-dog) | [Asset](https://api.smartworkout.app/asset/video/5f6101d6-75bd-441c-bea8-4526f09b336c.mp4) | video/mp4 · available | `/exercises/bird-dog.mp4` | 2128249 | Ready |
| `builtin-exercise:bird-dog-plank` | Bird Dog Plank | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/bird-dog-plank) | [Asset](https://api.smartworkout.app/asset/video/1b1565ae-0669-46e4-bdf9-8d6841904aed.mp4) | video/mp4 · available | `/exercises/bird-dog-plank.mp4` | 1563790 | Ready |
| `builtin-exercise:bird-dog-push-up` | Bird Dog Push-Up | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/bird-dog-push-up) | [Asset](https://api.smartworkout.app/asset/video/320ee1df-5892-44a6-9497-c54388ba5c1a.mp4) | video/mp4 · available | `/exercises/bird-dog-push-up.mp4` | 2279894 | Ready |
| `builtin-exercise:bodyweight-windmill` | Bodyweight Windmill | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/bodyweight-windmill) | [Asset](https://api.smartworkout.app/asset/video/657823d2-0269-4a23-8a9d-06de4520e352.mp4) | video/mp4 · available | `/exercises/bodyweight-windmill.mp4` | 2890843 | Ready |
| `builtin-exercise:box-jumps` | Box Jumps | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/box-jumps) | [Asset](https://api.smartworkout.app/asset/video/e5d7fca6-f8f0-4fd9-a8d4-86d4e9f0404e.mp4) | video/mp4 · available | `/exercises/box-jumps.mp4` | 1057210 | Ready |
| `builtin-exercise:box-squat` | Box Squat | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/box-squat) | [Asset](https://api.smartworkout.app/asset/video/f49ae37e-88ad-4fcf-ae51-e3e888076b48.mp4) | video/mp4 · available | `/exercises/box-squat.mp4` | 924346 | Ready |
| `builtin-exercise:box-step-up` | Box step-up | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/box-step-up) | [Asset](https://api.smartworkout.app/asset/video/41edb925-db86-4bce-8ad6-cbea85768cd2.mp4) | video/mp4 · available | `/exercises/box-step-up.mp4` | 1698736 | Ready |
| `builtin-exercise:broad-jump` | Broad Jump | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/broad-jump) | [Asset](https://api.smartworkout.app/asset/video/05973ca1-7fbb-4aee-856c-9c444204a8f4.mp4) | video/mp4 · available | `/exercises/broad-jump.mp4` | 2635181 | Ready |
| `builtin-exercise:bulgarian-bag-walking-lunges` | Bulgarian Bag Walking Lunges | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/bulgarian-bag-walking-lunges) | [Asset](https://api.smartworkout.app/asset/video/3c831c1e-ee45-4dc8-9ad4-b8c00b35fca0.mp4) | video/mp4 · available | `/exercises/bulgarian-bag-walking-lunges.mp4` | 1530277 | Ready |
| `builtin-exercise:bulgarian-jump-squat` | Bulgarian Jump Squat | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/bulgarian-jump-squat) | [Asset](https://api.smartworkout.app/asset/video/f7eb1a15-61f3-4fe6-8ef4-4e5dbf57c3f6.mp4) | video/mp4 · available | `/exercises/bulgarian-jump-squat.mp4` | 834969 | Ready |
| `builtin-exercise:bulgarian-squat` | Bulgarian Squat | Gluteal | [Page](https://smartworkout.app/en/exercise-library/gluteus/bulgarian-squat) | [Asset](https://api.smartworkout.app/asset/video/8cad5448-7785-49be-98ff-35ee12ea952b.mp4) | video/mp4 · available | `/exercises/bulgarian-squat.mp4` | 734686 | Ready |
| `builtin-exercise:bulgarian-squat-smith` | Bulgarian Squat Smith | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/bulgarian-squat-smith) | [Asset](https://api.smartworkout.app/asset/video/c4f04b2a-4767-49a1-8699-3c3b61b53b55.mp4) | video/mp4 · available | `/exercises/bulgarian-squat-smith.mp4` | 796542 | Ready |
| `builtin-exercise:burpee` | Burpee | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/burpee) | [Asset](https://api.smartworkout.app/asset/video/8e97ea66-51cf-4f21-9de6-0528f591129d.mp4) | video/mp4 · available | `/exercises/burpee.mp4` | 1092801 | Ready |
| `builtin-exercise:butterfly-lean-forward-stretch` | Butterfly Lean Forward Stretch | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/butterfly-lean-forward-stretch) | [Asset](https://api.smartworkout.app/asset/video/0f334696-ffa7-419b-b505-ab2cf9c7e845.mp4) | video/mp4 · available | `/exercises/butterfly-lean-forward-stretch.mp4` | 1945092 | Ready |
| `builtin-exercise:butterfly-stretch` | Butterfly Stretch | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/butterfly-stretch) | [Asset](https://api.smartworkout.app/asset/video/a93bed96-d2b2-41bd-86b7-9fb14711a6ce.mp4) | video/mp4 · available | `/exercises/butterfly-stretch.mp4` | 797965 | Ready |
| `builtin-exercise:cable-bench-press` | Cable Bench Press | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/cable-bench-press) | [Asset](https://api.smartworkout.app/asset/video/f3454e00-4dac-4f89-84e8-af80e8386e86.mp4) | video/mp4 · available | `/exercises/cable-bench-press.mp4` | 602389 | Ready |
| `builtin-exercise:cable-close-grip-lat-pulldown` | Cable Close Grip Lat Pulldown | Back | [Page](https://smartworkout.app/en/exercise-library/back/cable-close-grip-lat-pulldown) | [Asset](https://api.smartworkout.app/asset/video/1bc93876-8995-48cf-ac81-d5df47e1e9f8.mp4) | video/mp4 · available | `/exercises/cable-close-grip-lat-pulldown.mp4` | 641484 | Ready |
| `builtin-exercise:cable-cross-triceps-extension` | Cable Cross Triceps Extension | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/cable-cross-triceps-extension) | [Asset](https://api.smartworkout.app/asset/video/bd97155f-d348-4a0f-9b59-78210312e476.mp4) | video/mp4 · available | `/exercises/cable-cross-triceps-extension.mp4` | 591678 | Ready |
| `builtin-exercise:cable-double-arm-tricep-kickback` | Cable Double-Arm Tricep Kickback | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/cable-double-arm-tricep-kickback) | [Asset](https://api.smartworkout.app/asset/video/e6705953-0cb3-42fe-8e03-d9daa430172e.mp4) | video/mp4 · available | `/exercises/cable-double-arm-tricep-kickback.mp4` | 593008 | Ready |
| `builtin-exercise:cable-face-pull` | Cable Face Pull | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/cable-face-pull) | [Asset](https://api.smartworkout.app/asset/video/782de101-95a5-47b3-bffa-82b124a7f3f9.mp4) | video/mp4 · available | `/exercises/cable-face-pull.mp4` | 633492 | Ready |
| `builtin-exercise:cable-front-raise` | Cable Front Raise | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/cable-front-raise) | [Asset](https://api.smartworkout.app/asset/video/1f8d830e-0023-4bb6-b778-deb8d598227f.mp4) | video/mp4 · available | `/exercises/cable-front-raise.mp4` | 729711 | Ready |
| `builtin-exercise:cable-hip-abducction` | Cable Hip Abducction | Gluteal | [Page](https://smartworkout.app/en/exercise-library/gluteus/cable-hip-abducction) | [Asset](https://api.smartworkout.app/asset/video/f9d31544-ca7f-4c1a-921f-c2698ee8b26f.mp4) | video/mp4 · available | `/exercises/cable-hip-abducction.mp4` | 667260 | Ready |
| `builtin-exercise:cable-hip-adduction` | Cable Hip Adduction | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/cable-hip-adduction) | [Asset](https://api.smartworkout.app/asset/video/75694192-2ab2-47af-a3be-c68dc401b852.mp4) | video/mp4 · available | `/exercises/cable-hip-adduction.mp4` | 621200 | Ready |
| `builtin-exercise:cable-horizontal-pallof-press` | Cable Horizontal Pallof Press | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/cable-horizontal-pallof-press) | [Asset](https://api.smartworkout.app/asset/video/55f64d35-6349-455d-840c-ceeb2a87f010.mp4) | video/mp4 · available | `/exercises/cable-horizontal-pallof-press.mp4` | 577625 | Ready |
| `builtin-exercise:cable-incline-skull-crusher` | Cable Incline Skull Crusher | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/cable-incline-skull-crusher) | [Asset](https://api.smartworkout.app/asset/video/16b6eb3b-c593-4e41-9f17-f90630f2ddf3.mp4) | video/mp4 · available | `/exercises/cable-incline-skull-crusher.mp4` | 525943 | Ready |
| `builtin-exercise:cable-incline-y-raise-back-supported` | Cable Incline Y Raise Back Supported | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/cable-incline-y-raise-back-supported) | [Asset](https://api.smartworkout.app/asset/video/38388e28-0819-4f2e-a1ec-5b030a2c7787.mp4) | video/mp4 · available | `/exercises/cable-incline-y-raise-back-supported.mp4` | 813233 | Ready |
| `builtin-exercise:cable-kneeling-high-to-low-fly` | Cable Kneeling High To Low Fly | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/cable-kneeling-high-to-low-fly) | [Asset](https://api.smartworkout.app/asset/video/fe26e4e4-5024-47bf-b476-266eb81ee6d7.mp4) | video/mp4 · available | `/exercises/cable-kneeling-high-to-low-fly.mp4` | 946907 | Ready |
| `builtin-exercise:cable-kneeling-side-crunch` | Cable Kneeling Side Crunch | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/cable-kneeling-side-crunch) | [Asset](https://api.smartworkout.app/asset/video/c6d00884-56cf-4526-9ed9-4161b98d659e.mp4) | video/mp4 · available | `/exercises/cable-kneeling-side-crunch.mp4` | 1431401 | Ready |
| `builtin-exercise:cable-lat-pulldown` | Cable Lat Pulldown | Back | [Page](https://smartworkout.app/en/exercise-library/back/cable-lat-pulldown) | [Asset](https://api.smartworkout.app/asset/video/4108d42f-8b09-4bc8-b7a9-d8d611d084ac.mp4) | video/mp4 · available | `/exercises/cable-lat-pulldown.mp4` | 640816 | Ready |
| `builtin-exercise:cable-lateral-raise` | Cable Lateral Raise | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/cable-lateral-raise) | [Asset](https://api.smartworkout.app/asset/video/08b97b98-1f46-4185-82a3-9a1fa6cec74f.mp4) | video/mp4 · available | `/exercises/cable-lateral-raise.mp4` | 751016 | Ready |
| `builtin-exercise:cable-leaning-lateral-raise` | Cable Leaning Lateral Raise | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/cable-leaning-lateral-raise) | [Asset](https://api.smartworkout.app/asset/video/3b719213-829c-4d3f-af36-e75152ff1fa1.mp4) | video/mp4 · available | `/exercises/cable-leaning-lateral-raise.mp4` | 624816 | Ready |
| `builtin-exercise:cable-middle-chest-fly` | Cable Middle Chest Fly | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/cable-middle-chest-fly) | [Asset](https://api.smartworkout.app/asset/video/44caa7ce-5e94-41e7-b0d0-5b3153a86b32.mp4) | video/mp4 · available | `/exercises/cable-middle-chest-fly.mp4` | 775835 | Ready |
| `builtin-exercise:cable-neutral-grip-lat-pulldown` | Cable Neutral Grip Lat Pulldown | Back | [Page](https://smartworkout.app/en/exercise-library/back/cable-neutral-grip-lat-pulldown) | [Asset](https://api.smartworkout.app/asset/video/5cdf873a-c0f0-4182-bd8d-5d77fe5d8c23.mp4) | video/mp4 · available | `/exercises/cable-neutral-grip-lat-pulldown.mp4` | 642497 | Ready |
| `builtin-exercise:cable-overhead-triceps-extension` | Cable Overhead Triceps Extension | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/cable-overhead-triceps-extension) | [Asset](https://api.smartworkout.app/asset/video/5047297f-ed82-4ebc-9e3c-f79effb1f596.mp4) | video/mp4 · available | `/exercises/cable-overhead-triceps-extension.mp4` | 349593 | Ready |
| `builtin-exercise:cable-preacher-curl` | Cable Preacher Curl | Biceps | [Page](https://smartworkout.app/en/exercise-library/biceps/cable-preacher-curl) | [Asset](https://api.smartworkout.app/asset/video/901d6b71-e16f-43e1-a2c0-598bd8d4b59f.mp4) | video/mp4 · available | `/exercises/cable-preacher-curl.mp4` | 573820 | Ready |
| `builtin-exercise:cable-pull-through` | Cable Pull Through | Gluteal | [Page](https://smartworkout.app/en/exercise-library/gluteus/cable-pull-through) | [Asset](https://api.smartworkout.app/asset/video/2d7d0c6f-8cd7-49c4-a2db-7140d77fa691.mp4) | video/mp4 · available | `/exercises/cable-pull-through.mp4` | 804870 | Ready |
| `builtin-exercise:cable-rear-delt-fly-reverse-fly` | Cable Rear Delt Fly (Reverse Fly) | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/cable-rear-delt-fly-(reverse-fly)) | [Asset](https://api.smartworkout.app/asset/video/8dfd61d2-bfec-457f-9681-54a43702cc56.mp4) | video/mp4 · available | `/exercises/cable-rear-delt-fly-reverse-fly.mp4` | 575026 | Ready |
| `builtin-exercise:cable-reverse-grip-pulldown` | Cable Reverse Grip Pulldown | Back | [Page](https://smartworkout.app/en/exercise-library/back/cable-reverse-grip-pulldown) | [Asset](https://api.smartworkout.app/asset/video/86b78084-018b-4c3c-be8e-3e2ddddc8a64.mp4) | video/mp4 · available | `/exercises/cable-reverse-grip-pulldown.mp4` | 620903 | Ready |
| `builtin-exercise:cable-romanian-deadlift` | Cable Romanian Deadlift | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/cable-romanian-deadlift) | [Asset](https://api.smartworkout.app/asset/video/f74dd58c-8915-4ae9-8073-b45716321ec2.mp4) | video/mp4 · available | `/exercises/cable-romanian-deadlift.mp4` | 759279 | Ready |
| `builtin-exercise:cable-seated-rear-lateral-raise` | Cable Seated Rear Lateral Raise | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/cable-seated-rear-lateral-raise) | [Asset](https://api.smartworkout.app/asset/video/09df2003-ca3b-4a84-9af2-48c8f0dadab5.mp4) | video/mp4 · available | `/exercises/cable-seated-rear-lateral-raise.mp4` | 711611 | Ready |
| `builtin-exercise:cable-seated-row-neutral-grip` | Cable Seated Row Neutral Grip | Back | [Page](https://smartworkout.app/en/exercise-library/back/cable-seated-row-neutral-grip) | [Asset](https://api.smartworkout.app/asset/video/0e61ea8c-8d21-445d-a882-1a8bf3a87245.mp4) | video/mp4 · available | `/exercises/cable-seated-row-neutral-grip.mp4` | 608556 | Ready |
| `builtin-exercise:cable-seated-supine-grip-row` | Cable Seated Supine Grip Row | Back | [Page](https://smartworkout.app/en/exercise-library/back/cable-seated-supine-grip-row) | [Asset](https://api.smartworkout.app/asset/video/c2a98bda-5862-460f-9a75-82698e5d4bd2.mp4) | video/mp4 · available | `/exercises/cable-seated-supine-grip-row.mp4` | 546265 | Ready |
| `builtin-exercise:cable-shrug` | Cable Shrug | Back | [Page](https://smartworkout.app/en/exercise-library/back/cable-shrug) | [Asset](https://api.smartworkout.app/asset/video/828981bf-726c-4948-96d8-31906a78d7ea.mp4) | video/mp4 · available | `/exercises/cable-shrug.mp4` | 424882 | Ready |
| `builtin-exercise:cable-squatting-curl` | Cable Squatting Curl | Biceps | [Page](https://smartworkout.app/en/exercise-library/biceps/cable-squatting-curl) | [Asset](https://api.smartworkout.app/asset/video/538bae6b-f014-425a-9c91-f12e80b53651.mp4) | video/mp4 · available | `/exercises/cable-squatting-curl.mp4` | 524355 | Ready |
| `builtin-exercise:cable-standing-wrist-roll` | Cable Standing Wrist Roll | Forearms | [Page](https://smartworkout.app/en/exercise-library/forearms/cable-standing-wrist-roll) | [Asset](https://api.smartworkout.app/asset/video/e61e69a3-e64a-480e-8b2d-a22eba3489ef.mp4) | video/mp4 · available | `/exercises/cable-standing-wrist-roll.mp4` | 557201 | Ready |
| `builtin-exercise:cable-step-up` | Cable Step Up | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/cable-step-up) | [Asset](https://api.smartworkout.app/asset/video/cb73ca3f-4535-432a-8db8-db9c065a9d8b.mp4) | video/mp4 · available | `/exercises/cable-step-up.mp4` | 1002949 | Ready |
| `builtin-exercise:cable-supinated-face-pull` | Cable Supinated Face Pull | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/cable-supinated-face-pull) | [Asset](https://api.smartworkout.app/asset/video/6c906e89-851b-4230-8d31-5e739273c968.mp4) | video/mp4 · available | `/exercises/cable-supinated-face-pull.mp4` | 663519 | Ready |
| `builtin-exercise:cable-terminal-knee-extension` | Cable Terminal Knee Extension | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/cable-terminal-knee-extension) | [Asset](https://api.smartworkout.app/asset/video/8e642c8a-3237-463e-bb6f-161bc3682f24.mp4) | video/mp4 · available | `/exercises/cable-terminal-knee-extension.mp4` | 441400 | Ready |
| `builtin-exercise:cable-thibaudeau-kayak-row` | Cable Thibaudeau Kayak Row | Back | [Page](https://smartworkout.app/en/exercise-library/back/cable-thibaudeau-kayak-row) | [Asset](https://api.smartworkout.app/asset/video/18481b4d-7f71-494c-9f68-ecc955f9fd2b.mp4) | video/mp4 · available | `/exercises/cable-thibaudeau-kayak-row.mp4` | 1299207 | Ready |
| `builtin-exercise:cable-triceps-pushdown` | Cable Triceps Pushdown | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/cable-triceps-pushdown) | [Asset](https://api.smartworkout.app/asset/video/8b06feb9-bf5c-4c77-a78e-9b00c1d78aa8.mp4) | video/mp4 · available | `/exercises/cable-triceps-pushdown.mp4` | 490297 | Ready |
| `builtin-exercise:cable-twist-horizontal` | Cable Twist (horizontal) | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/cable-twist-(horizontal)) | [Asset](https://api.smartworkout.app/asset/video/0a799781-595e-42b0-974d-a81408640c47.mp4) | video/mp4 · available | `/exercises/cable-twist-horizontal.mp4` | 768770 | Ready |
| `builtin-exercise:cable-twist-up-down` | Cable Twist (up down) | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/cable-twist-(up-down)) | [Asset](https://api.smartworkout.app/asset/video/2bbc0071-2c1d-4c70-9b53-dc723223ef02.mp4) | video/mp4 · available | `/exercises/cable-twist-up-down.mp4` | 966178 | Ready |
| `builtin-exercise:cable-upright-row` | Cable Upright Row | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/cable-upright-row) | [Asset](https://api.smartworkout.app/asset/video/bb2ceac3-d65c-4568-9c00-a2861b746dcb.mp4) | video/mp4 · available | `/exercises/cable-upright-row.mp4` | 500770 | Ready |
| `builtin-exercise:cable-wide-grip-behind-neck-pulldown` | Cable Wide Grip Behind Neck Pulldown | Back | [Page](https://smartworkout.app/en/exercise-library/back/cable-wide-grip-behind-neck-pulldown) | [Asset](https://api.smartworkout.app/asset/video/3f188bec-c383-416b-91b3-c814d035fbc4.mp4) | video/mp4 · available | `/exercises/cable-wide-grip-behind-neck-pulldown.mp4` | 634601 | Ready |
| `builtin-exercise:cable-wrist-curl` | Cable Wrist Curl | Forearms | [Page](https://smartworkout.app/en/exercise-library/forearms/cable-wrist-curl) | [Asset](https://api.smartworkout.app/asset/video/1aa353a2-35bf-49cb-a595-44d93c0f6975.mp4) | video/mp4 · available | `/exercises/cable-wrist-curl.mp4` | 390267 | Ready |
| `builtin-exercise:cable-y-raise` | Cable Y Raise | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/cable-y-raise) | [Asset](https://api.smartworkout.app/asset/video/39fab75e-ff70-4412-9188-8777dadf2d7f.mp4) | video/mp4 · available | `/exercises/cable-y-raise.mp4` | 967189 | Ready |
| `builtin-exercise:calf-leg-press` | Calf Leg Press | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/calf-leg-press) | [Asset](https://api.smartworkout.app/asset/video/9f24e3a4-490f-4dab-8ff7-d7d9c5b3fa34.mp4) | video/mp4 · available | `/exercises/calf-leg-press.mp4` | 696425 | Ready |
| `builtin-exercise:california-press` | California Press | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/california-press) | [Asset](https://api.smartworkout.app/asset/video/45e6f17a-fb24-421b-98cb-49c032a62892.mp4) | video/mp4 · available | `/exercises/california-press.mp4` | 863470 | Ready |
| `builtin-exercise:capitans-chair-straight-leg-raises` | Capitan's Chair Straight Leg Raises | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/capitan's-chair-straight-leg-raises) | [Asset](https://api.smartworkout.app/asset/video/7991982d-a69a-4220-95e5-df5676bb2a88.mp4) | video/mp4 · available | `/exercises/capitans-chair-straight-leg-raises.mp4` | 804995 | Ready |
| `builtin-exercise:captains-chair-knee-raises` | Captains Chair Knee Raises | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/captains-chair-knee-raises) | [Asset](https://api.smartworkout.app/asset/video/e994d983-956a-46d0-8492-966667f03313.mp4) | video/mp4 · available | `/exercises/captains-chair-knee-raises.mp4` | 543788 | Ready |
| `builtin-exercise:cat-cow` | Cat Cow | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/cat-cow) | [Asset](https://api.smartworkout.app/asset/video/c6f8e551-5517-4bfb-81f8-63b53cc072eb.mp4) | video/mp4 · available | `/exercises/cat-cow.mp4` | 924999 | Ready |
| `builtin-exercise:chest-dips` | Chest Dips | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/chest-dips) | [Asset](https://api.smartworkout.app/asset/video/fbf1e1b8-2f58-4847-b28b-7b6f387bb0d4.mp4) | video/mp4 · available | `/exercises/chest-dips.mp4` | 733663 | Ready |
| `builtin-exercise:chest-supported-lateral-t-raise` | Chest Supported Lateral T Raise | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/chest-supported-lateral-t-raise) | [Asset](https://api.smartworkout.app/asset/video/9e33a8d5-b378-43af-a7b9-c0806520b496.mp4) | video/mp4 · available | `/exercises/chest-supported-lateral-t-raise.mp4` | 692778 | Ready |
| `builtin-exercise:chest-supported-machine-row` | Chest Supported Machine Row | Back | [Page](https://smartworkout.app/en/exercise-library/back/chest-supported-machine-row) | [Asset](https://api.smartworkout.app/asset/video/452136c7-f3ef-4d04-8e91-2de2b9893b5b.mp4) | video/mp4 · available | `/exercises/chest-supported-machine-row.mp4` | 682376 | Ready |
| `builtin-exercise:childs-pose` | Child’s Pose | Gluteal | [Page](https://smartworkout.app/en/exercise-library/gluteus/child’s-pose) | [Asset](https://api.smartworkout.app/asset/video/2e9debc7-b8aa-497b-bbc3-054b52e09a50.mp4) | video/mp4 · available | `/exercises/childs-pose.mp4` | 1485958 | Ready |
| `builtin-exercise:chin-up` | Chin-Up | Back | [Page](https://smartworkout.app/en/exercise-library/back/chin-up) | [Asset](https://api.smartworkout.app/asset/video/eb90d7a1-2d23-42a3-ba2a-1ca5db10296c.mp4) | video/mp4 · available | `/exercises/chin-up.mp4` | 640728 | Ready |
| `builtin-exercise:clap-push-up` | Clap Push-Up | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/clap-push-up) | [Asset](https://api.smartworkout.app/asset/video/3eee6526-9f25-4102-be30-39d783599365.mp4) | video/mp4 · available | `/exercises/clap-push-up.mp4` | 1221154 | Ready |
| `builtin-exercise:clean-and-jerk` | Clean and Jerk | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/clean-and-jerk) | [Asset](https://api.smartworkout.app/asset/video/d15609c9-6194-4284-90c6-a58ae7675128.mp4) | video/mp4 · available | `/exercises/clean-and-jerk.mp4` | 1978857 | Ready |
| `builtin-exercise:clean-squat` | Clean Squat | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/clean-squat) | [Asset](https://api.smartworkout.app/asset/video/856db697-01dd-4a29-99c3-45c0f6cffc7d.mp4) | video/mp4 · available | `/exercises/clean-squat.mp4` | 1461263 | Ready |
| `builtin-exercise:close-grip-biceps-curl` | Close Grip Biceps Curl | Biceps | [Page](https://smartworkout.app/en/exercise-library/biceps/close-grip-biceps-curl) | [Asset](https://api.smartworkout.app/asset/video/1697d9aa-f9f3-43f8-a164-792beb19232c.mp4) | video/mp4 · available | `/exercises/close-grip-biceps-curl.mp4` | 724278 | Ready |
| `builtin-exercise:close-grip-dumbbell-press` | Close Grip Dumbbell Press | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/close-grip-dumbbell-press) | [Asset](https://api.smartworkout.app/asset/video/8ee8d887-754d-42eb-8207-6f1dc5cae6c7.mp4) | video/mp4 · available | `/exercises/close-grip-dumbbell-press.mp4` | 705991 | Ready |
| `builtin-exercise:close-grip-ez-bar-curl` | Close-grip EZ Bar Curl | Biceps | [Page](https://smartworkout.app/en/exercise-library/biceps/close-grip-ez-bar-curl) | [Asset](https://api.smartworkout.app/asset/video/5eac3e49-98b5-4d60-958f-074471e8d811.mp4) | video/mp4 · available | `/exercises/close-grip-ez-bar-curl.mp4` | 764127 | Ready |
| `builtin-exercise:close-grip-incline-dumbbell-bench-press` | Close Grip Incline Dumbbell Bench Press | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/close-grip-incline-dumbbell-bench-press) | [Asset](https://api.smartworkout.app/asset/video/162889d2-5093-4bbd-a206-9b7b4e2230a1.mp4) | video/mp4 · available | `/exercises/close-grip-incline-dumbbell-bench-press.mp4` | 603430 | Ready |
| `builtin-exercise:close-grip-landmine-row` | Close Grip Landmine Row | Back | [Page](https://smartworkout.app/en/exercise-library/back/close-grip-landmine-row) | [Asset](https://api.smartworkout.app/asset/video/40c302e4-6718-4884-a953-27acf43c9be5.mp4) | video/mp4 · available | `/exercises/close-grip-landmine-row.mp4` | 731154 | Ready |
| `builtin-exercise:close-grip-pull-up` | Close Grip Pull Up | Back | [Page](https://smartworkout.app/en/exercise-library/back/close-grip-pull-up) | [Asset](https://api.smartworkout.app/asset/video/f5fd5f13-bfb7-4f07-855f-cea18e5e42eb.mp4) | video/mp4 · available | `/exercises/close-grip-pull-up.mp4` | 758378 | Ready |
| `builtin-exercise:close-grip-push-up` | Close Grip Push-Up | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/close-grip-push-up) | [Asset](https://api.smartworkout.app/asset/video/4e2b04eb-1d5b-43a0-898a-c23d4ad8de63.mp4) | video/mp4 · available | `/exercises/close-grip-push-up.mp4` | 1528996 | Ready |
| `builtin-exercise:close-grip-smith-bench-press` | Close Grip Smith Bench Press | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/close-grip-smith-bench-press) | [Asset](https://api.smartworkout.app/asset/video/b56fc4c5-658a-4b82-9f07-b4e3a20f6f37.mp4) | video/mp4 · available | `/exercises/close-grip-smith-bench-press.mp4` | 489479 | Ready |
| `builtin-exercise:cobra-push-up` | Cobra Push-Up | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/cobra-push-up) | [Asset](https://api.smartworkout.app/asset/video/fd700ead-1da5-4d2e-8278-3b0e16873d40.mp4) | video/mp4 · available | `/exercises/cobra-push-up.mp4` | 1716168 | Ready |
| `builtin-exercise:crab-pose` | Crab Pose | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/crab-pose) | [Asset](https://api.smartworkout.app/asset/video/18211330-59ff-4f9e-b412-ab3466fc496b.mp4) | video/mp4 · available | `/exercises/crab-pose.mp4` | 1374505 | Ready |
| `builtin-exercise:cross-arms-push-up` | Cross Arms Push-Up | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/cross-arms-push-up) | [Asset](https://api.smartworkout.app/asset/video/2da07a82-c156-41ed-a6ee-c0a907126d02.mp4) | video/mp4 · available | `/exercises/cross-arms-push-up.mp4` | 1068375 | Ready |
| `builtin-exercise:cross-body-one-arm-strength-press` | Cross Body One-Arm Strength Press | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/cross-body-one-arm-strength-press) | [Asset](https://api.smartworkout.app/asset/video/db536c51-9fb9-4d9c-9eb7-5fdbfb52b7b1.mp4) | video/mp4 · available | `/exercises/cross-body-one-arm-strength-press.mp4` | 525531 | Ready |
| `builtin-exercise:crossack-squat` | Crossack Squat | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/crossack-squat) | [Asset](https://api.smartworkout.app/asset/video/4f3c74ad-a75a-4061-89b1-2a7ddf34b5b7.mp4) | video/mp4 · available | `/exercises/crossack-squat.mp4` | 1924505 | Ready |
| `builtin-exercise:cyclist-squat` | Cyclist Squat | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/cyclist-squat) | [Asset](https://api.smartworkout.app/asset/video/82aed196-41f3-4d53-8436-f7877f2cea92.mp4) | video/mp4 · available | `/exercises/cyclist-squat.mp4` | 907740 | Ready |
| `builtin-exercise:dead-bug` | Dead Bug | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/dead-bug) | [Asset](https://api.smartworkout.app/asset/video/644f8c6e-2c8c-44d6-b3fd-49be9ef13641.mp4) | video/mp4 · available | `/exercises/dead-bug.mp4` | 2080512 | Ready |
| `builtin-exercise:dead-bug-with-ball` | Dead Bug with Ball | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/dead-bug-with-ball) | [Asset](https://api.smartworkout.app/asset/video/a8a1599b-52d2-42e9-b148-9c75a658d9a8.mp4) | video/mp4 · available | `/exercises/dead-bug-with-ball.mp4` | 1413050 | Ready |
| `builtin-exercise:dead-hang` | Dead Hang | Forearms | [Page](https://smartworkout.app/en/exercise-library/forearms/dead-hang) | [Asset](https://api.smartworkout.app/asset/video/44e4330a-22c4-4a90-a84e-1751d2a49728.mp4) | video/mp4 · available | `/exercises/dead-hang.mp4` | 358544 | Ready |
| `builtin-exercise:deadlift` | Deadlift | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/deadlift) | [Asset](https://api.smartworkout.app/asset/video/97a01cea-2705-4d3b-b93d-193dfc57875f.mp4) | video/mp4 · available | `/exercises/deadlift.mp4` | 1175585 | Ready |
| `builtin-exercise:deadlift-from-blocks` | Deadlift from Blocks | Gluteal | [Page](https://smartworkout.app/en/exercise-library/gluteus/deadlift-from-blocks) | [Asset](https://api.smartworkout.app/asset/video/3d94287e-914f-41e7-96d2-ce75b5446186.mp4) | video/mp4 · available | `/exercises/deadlift-from-blocks.mp4` | 886332 | Ready |
| `builtin-exercise:decline-barbell-bench-press` | Decline Barbell Bench Press | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/decline-barbell-bench-press) | [Asset](https://api.smartworkout.app/asset/video/3d084e3c-1133-40c6-a618-fb4a2bac4ebc.mp4) | video/mp4 · available | `/exercises/decline-barbell-bench-press.mp4` | 610062 | Ready |
| `builtin-exercise:decline-barbell-french-press` | Decline Barbell French Press | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/decline-barbell-french-press) | [Asset](https://api.smartworkout.app/asset/video/3fbeb75c-a067-4be2-830d-cb1319440a97.mp4) | video/mp4 · available | `/exercises/decline-barbell-french-press.mp4` | 830191 | Ready |
| `builtin-exercise:decline-cable-chest-press` | Decline Cable Chest Press | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/decline-cable-chest-press) | [Asset](https://api.smartworkout.app/asset/video/c63817d5-8f9b-4d93-80c6-0639a56f2064.mp4) | video/mp4 · available | `/exercises/decline-cable-chest-press.mp4` | 648583 | Ready |
| `builtin-exercise:decline-chest-press` | Decline Chest Press | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/decline-chest-press) | [Asset](https://api.smartworkout.app/asset/video/a814e9e3-9f7a-4785-8a83-ff0cee912f9b.mp4) | video/mp4 · available | `/exercises/decline-chest-press.mp4` | 897668 | Ready |
| `builtin-exercise:decline-crunch` | Decline Crunch | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/decline-crunch) | [Asset](https://api.smartworkout.app/asset/video/d4a61221-9c27-4acd-8b69-6ca55de2a911.mp4) | video/mp4 · available | `/exercises/decline-crunch.mp4` | 849452 | Ready |
| `builtin-exercise:decline-diamond-push-up` | Decline Diamond Push-Up | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/decline-diamond-push-up) | [Asset](https://api.smartworkout.app/asset/video/e00634f2-4b6e-45e1-a15a-d40f6fa2fab3.mp4) | video/mp4 · available | `/exercises/decline-diamond-push-up.mp4` | 1217748 | Ready |
| `builtin-exercise:decline-dumbbell-bench-press` | Decline Dumbbell Bench Press | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/decline-dumbbell-bench-press) | [Asset](https://api.smartworkout.app/asset/video/c640c2f1-f5fe-4837-ab55-6ad404110306.mp4) | video/mp4 · available | `/exercises/decline-dumbbell-bench-press.mp4` | 917312 | Ready |
| `builtin-exercise:decline-dumbbell-fly` | Decline Dumbbell Fly | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/decline-dumbbell-fly) | [Asset](https://api.smartworkout.app/asset/video/1805d036-6125-4455-a2f1-d7e789457916.mp4) | video/mp4 · available | `/exercises/decline-dumbbell-fly.mp4` | 1071857 | Ready |
| `builtin-exercise:decline-push-up` | Decline Push-Up | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/decline-push-up) | [Asset](https://api.smartworkout.app/asset/video/a1aedffe-5731-4ede-815e-533668cc86c4.mp4) | video/mp4 · available | `/exercises/decline-push-up.mp4` | 973766 | Ready |
| `builtin-exercise:decline-smith-bench-press` | Decline Smith Bench Press | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/decline-smith-bench-press) | [Asset](https://api.smartworkout.app/asset/video/9ade43c0-728d-462c-8845-d0080e8cf37d.mp4) | video/mp4 · available | `/exercises/decline-smith-bench-press.mp4` | 651458 | Ready |
| `builtin-exercise:deep-push-up-on-parallel-bars` | Deep Push Up On Parallel Bars | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/deep-push-up-on-parallel-bars) | [Asset](https://api.smartworkout.app/asset/video/7b5d548e-b3c8-4dc8-b120-94363928e4af.mp4) | video/mp4 · available | `/exercises/deep-push-up-on-parallel-bars.mp4` | 1159315 | Ready |
| `builtin-exercise:deep-squat-to-wide-fold-with-foot-hold` | Deep Squat to Wide Fold with Foot Hold | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/deep-squat-to-wide-fold-with-foot-hold) | [Asset](https://api.smartworkout.app/asset/video/953b31d7-d930-4408-926b-45090c41250a.mp4) | video/mp4 · available | `/exercises/deep-squat-to-wide-fold-with-foot-hold.mp4` | 1815008 | Ready |
| `builtin-exercise:deficit-deadlift` | Deficit Deadlift | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/deficit-deadlift) | [Asset](https://api.smartworkout.app/asset/video/45112f12-de8c-429d-beb7-2767d31293ff.mp4) | video/mp4 · available | `/exercises/deficit-deadlift.mp4` | 834714 | Ready |
| `builtin-exercise:diamond-push-up` | Diamond Push-Up | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/diamond-push-up) | [Asset](https://api.smartworkout.app/asset/video/07f93f63-e9df-4c88-9e05-5cd48c85d6dd.mp4) | video/mp4 · available | `/exercises/diamond-push-up.mp4` | 1184786 | Ready |
| `builtin-exercise:dip-shrugs` | Dip Shrugs | Back | [Page](https://smartworkout.app/en/exercise-library/back/dip-shrugs) | [Asset](https://api.smartworkout.app/asset/video/cd4f6f25-2d25-41ba-aa80-703b36383753.mp4) | video/mp4 · available | `/exercises/dip-shrugs.mp4` | 434848 | Ready |
| `builtin-exercise:dips` | Dips | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/dips) | [Asset](https://api.smartworkout.app/asset/video/eafaaaad-47cb-430d-82fd-3f5d3f015f15.mp4) | video/mp4 · available | `/exercises/dips.mp4` | 751355 | Ready |
| `builtin-exercise:donkey-kick` | Donkey Kick | Gluteal | [Page](https://smartworkout.app/en/exercise-library/gluteus/donkey-kick) | [Asset](https://api.smartworkout.app/asset/video/316eb28f-c0b2-4a9c-80f7-1f7569302031.mp4) | video/mp4 · available | `/exercises/donkey-kick.mp4` | 1447074 | Ready |
| `builtin-exercise:doorway-chest-stretch` | Doorway Chest Stretch | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/doorway-chest-stretch) | [Asset](https://api.smartworkout.app/asset/video/c32386c7-01a4-4a0a-b7af-d58e3cb05805.mp4) | video/mp4 · available | `/exercises/doorway-chest-stretch.mp4` | 511074 | Ready |
| `builtin-exercise:double-dumbbell-bent-over-row` | Double Dumbbell Bent Over Row | Back | [Page](https://smartworkout.app/en/exercise-library/back/double-dumbbell-bent-over-row) | [Asset](https://api.smartworkout.app/asset/video/ba838003-01ea-4938-b0c8-8b8d7251e8fc.mp4) | video/mp4 · available | `/exercises/double-dumbbell-bent-over-row.mp4` | 764789 | Ready |
| `builtin-exercise:double-dumbbell-preacher-curl` | Double Dumbbell Preacher Curl | Biceps | [Page](https://smartworkout.app/en/exercise-library/biceps/double-dumbbell-preacher-curl) | [Asset](https://api.smartworkout.app/asset/video/0e7185a8-532a-400a-b79f-914968a0466f.mp4) | video/mp4 · available | `/exercises/double-dumbbell-preacher-curl.mp4` | 619130 | Ready |
| `builtin-exercise:downward-dog` | Downward Dog | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/downward-dog) | [Asset](https://api.smartworkout.app/asset/video/887e07da-82bf-41fa-9f57-1241fb789c2b.mp4) | video/mp4 · available | `/exercises/downward-dog.mp4` | 1493650 | Ready |
| `builtin-exercise:dragon-flag` | Dragon Flag | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/dragon-flag) | [Asset](https://api.smartworkout.app/asset/video/1b5c4294-0a50-4e62-b394-a89ceab6b6dc.mp4) | video/mp4 · available | `/exercises/dragon-flag.mp4` | 711076 | Ready |
| `builtin-exercise:dumbbell-alternate-front-raise` | Dumbbell Alternate Front Raise | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/dumbbell-alternate-front-raise) | [Asset](https://api.smartworkout.app/asset/video/822b1ddf-57d4-44b3-b930-06e934167318.mp4) | video/mp4 · available | `/exercises/dumbbell-alternate-front-raise.mp4` | 443199 | Ready |
| `builtin-exercise:dumbbell-alternate-hammer-front-raise` | Dumbbell Alternate Hammer Front Raise | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/dumbbell-alternate-hammer-front-raise) | [Asset](https://api.smartworkout.app/asset/video/2947dd5a-6b54-4d61-891a-852895fa5857.mp4) | video/mp4 · available | `/exercises/dumbbell-alternate-hammer-front-raise.mp4` | 820171 | Ready |
| `builtin-exercise:dumbbell-alternate-supinated-curl` | Dumbbell Alternate Supinated Curl | Biceps | [Page](https://smartworkout.app/en/exercise-library/biceps/dumbbell-alternate-supinated-curl) | [Asset](https://api.smartworkout.app/asset/video/279079ca-02fb-4775-ac1a-578138cfbdef.mp4) | video/mp4 · available | `/exercises/dumbbell-alternate-supinated-curl.mp4` | 816715 | Ready |
| `builtin-exercise:dumbbell-bench-press` | Dumbbell Bench Press | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/dumbbell-bench-press) | [Asset](https://api.smartworkout.app/asset/video/bb4a469e-f8bb-4667-8f65-2c4b4b2bba0d.mp4) | video/mp4 · available | `/exercises/dumbbell-bench-press.mp4` | 875441 | Ready |
| `builtin-exercise:dumbbell-bent-over-row` | Dumbbell Bent Over Row | Back | [Page](https://smartworkout.app/en/exercise-library/back/dumbbell-bent-over-row) | [Asset](https://api.smartworkout.app/asset/video/ef0f8115-83f3-4113-8eeb-ec93fa64456a.mp4) | video/mp4 · available | `/exercises/dumbbell-bent-over-row.mp4` | 809901 | Ready |
| `builtin-exercise:dumbbell-biceps-curl` | Dumbbell Biceps Curl | Biceps | [Page](https://smartworkout.app/en/exercise-library/biceps/dumbbell-biceps-curl) | [Asset](https://api.smartworkout.app/asset/video/295b152b-648d-44bd-a2ef-6235dc7b1b2b.mp4) | video/mp4 · available | `/exercises/dumbbell-biceps-curl.mp4` | 635097 | Ready |
| `builtin-exercise:dumbbell-biceps-reverse-curl` | Dumbbell Biceps Reverse Curl | Forearms | [Page](https://smartworkout.app/en/exercise-library/forearms/dumbbell-biceps-reverse-curl) | [Asset](https://api.smartworkout.app/asset/video/b4f1df3d-dc09-43cc-830c-8d91e96c4451.mp4) | video/mp4 · available | `/exercises/dumbbell-biceps-reverse-curl.mp4` | 624685 | Ready |
| `builtin-exercise:dumbbell-bulgarian-squat` | Dumbbell Bulgarian Squat | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/dumbbell-bulgarian-squat) | [Asset](https://api.smartworkout.app/asset/video/aed448e3-12d5-4612-a005-380fed7445c3.mp4) | video/mp4 · available | `/exercises/dumbbell-bulgarian-squat.mp4` | 742451 | Ready |
| `builtin-exercise:dumbbell-chest-fly` | Dumbbell Chest Fly | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/dumbbell-chest-fly) | [Asset](https://api.smartworkout.app/asset/video/02abf225-e430-4ba1-a15d-bf07a46959db.mp4) | video/mp4 · available | `/exercises/dumbbell-chest-fly.mp4` | 1020722 | Ready |
| `builtin-exercise:dumbbell-concentration-curl` | Dumbbell Concentration Curl | Biceps | [Page](https://smartworkout.app/en/exercise-library/biceps/dumbbell-concentration-curl) | [Asset](https://api.smartworkout.app/asset/video/69f4b2c0-5582-47a4-b901-9faacf963719.mp4) | video/mp4 · available | `/exercises/dumbbell-concentration-curl.mp4` | 582689 | Ready |
| `builtin-exercise:dumbbell-cossack-squat` | Dumbbell Cossack Squat | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/dumbbell-cossack-squat) | [Asset](https://api.smartworkout.app/asset/video/9671e832-7b4c-4f0e-801d-6cd6bf1bf232.mp4) | video/mp4 · available | `/exercises/dumbbell-cossack-squat.mp4` | 1887146 | Ready |
| `builtin-exercise:dumbbell-cross-body-hammer-curl` | Dumbbell Cross Body Hammer Curl | Biceps | [Page](https://smartworkout.app/en/exercise-library/biceps/dumbbell-cross-body-hammer-curl) | [Asset](https://api.smartworkout.app/asset/video/a56cea4c-b119-4d37-8d75-b8c8a72c9d33.mp4) | video/mp4 · available | `/exercises/dumbbell-cross-body-hammer-curl.mp4` | 705548 | Ready |
| `builtin-exercise:dumbbell-cuban-rotation` | Dumbbell Cuban Rotation | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/dumbbell-cuban-rotation) | [Asset](https://api.smartworkout.app/asset/video/8fd69878-d700-4068-ab50-63ab763f1ace.mp4) | video/mp4 · available | `/exercises/dumbbell-cuban-rotation.mp4` | 483891 | Ready |
| `builtin-exercise:dumbbell-deadlift` | Dumbbell Deadlift | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/dumbbell-deadlift) | [Asset](https://api.smartworkout.app/asset/video/1785fa76-dd12-4830-87df-689db7f50b3b.mp4) | video/mp4 · available | `/exercises/dumbbell-deadlift.mp4` | 931994 | Ready |
| `builtin-exercise:dumbbell-deadlift-straight-legs` | Dumbbell Deadlift Straight Legs | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/dumbbell-deadlift-straight-legs) | [Asset](https://api.smartworkout.app/asset/video/9815a488-3a41-4e57-a4d3-89b3296656df.mp4) | video/mp4 · available | `/exercises/dumbbell-deadlift-straight-legs.mp4` | 1057409 | Ready |
| `builtin-exercise:dumbbell-deep-push-up` | Dumbbell Deep Push Up | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/dumbbell-deep-push-up) | [Asset](https://api.smartworkout.app/asset/video/a940fd8f-929e-4101-af3b-8d44eda4d064.mp4) | video/mp4 · available | `/exercises/dumbbell-deep-push-up.mp4` | 1314637 | Ready |
| `builtin-exercise:dumbbell-drag-curl` | Dumbbell Drag Curl | Biceps | [Page](https://smartworkout.app/en/exercise-library/biceps/dumbbell-drag-curl) | [Asset](https://api.smartworkout.app/asset/video/8ed19307-5374-4f0f-b4c5-1bbce2c7b943.mp4) | video/mp4 · available | `/exercises/dumbbell-drag-curl.mp4` | 1295480 | Ready |
| `builtin-exercise:dumbbell-farmer-carry` | Dumbbell Farmer Carry | Forearms | [Page](https://smartworkout.app/en/exercise-library/forearms/dumbbell-farmer-carry) | [Asset](https://api.smartworkout.app/asset/video/a03d7da3-fdf6-4b10-8330-432b19579828.mp4) | video/mp4 · available | `/exercises/dumbbell-farmer-carry.mp4` | 359943 | Ready |
| `builtin-exercise:dumbbell-floor-chest-fly` | Dumbbell Floor Chest Fly | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/dumbbell-floor-chest-fly) | [Asset](https://api.smartworkout.app/asset/video/4228f43a-ccb4-43cc-8009-948d658282b8.mp4) | video/mp4 · available | `/exercises/dumbbell-floor-chest-fly.mp4` | 1179238 | Ready |
| `builtin-exercise:dumbbell-front-raise` | Dumbbell Front Raise | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/dumbbell-front-raise) | [Asset](https://api.smartworkout.app/asset/video/4b0a4152-c1d6-498e-a46b-440cbcc36c68.mp4) | video/mp4 · available | `/exercises/dumbbell-front-raise.mp4` | 715070 | Ready |
| `builtin-exercise:dumbbell-goblet-squat` | Dumbbell Goblet Squat | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/dumbbell-goblet-squat) | [Asset](https://api.smartworkout.app/asset/video/bb9fac7a-a129-4015-847a-f283ae9e3ade.mp4) | video/mp4 · available | `/exercises/dumbbell-goblet-squat.mp4` | 850429 | Ready |
| `builtin-exercise:dumbbell-half-kneeling-shoulder-press` | Dumbbell Half Kneeling Shoulder Press | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/dumbbell-half-kneeling-shoulder-press) | [Asset](https://api.smartworkout.app/asset/video/4f12bae7-9afe-48ef-85d2-116d65f9ff3b.mp4) | video/mp4 · available | `/exercises/dumbbell-half-kneeling-shoulder-press.mp4` | 602557 | Ready |
| `builtin-exercise:dumbbell-hammer-curl` | Dumbbell Hammer Curl | Biceps | [Page](https://smartworkout.app/en/exercise-library/biceps/dumbbell-hammer-curl) | [Asset](https://api.smartworkout.app/asset/video/42bee169-b8e8-4142-8707-dcb1f8267e31.mp4) | video/mp4 · available | `/exercises/dumbbell-hammer-curl.mp4` | 773801 | Ready |
| `builtin-exercise:dumbbell-hip-thrust` | Dumbbell Hip Thrust | Gluteal | [Page](https://smartworkout.app/en/exercise-library/gluteus/dumbbell-hip-thrust) | [Asset](https://api.smartworkout.app/asset/video/a72f7404-e861-484b-800f-ad61e25ffcf2.mp4) | video/mp4 · available | `/exercises/dumbbell-hip-thrust.mp4` | 1162888 | Ready |
| `builtin-exercise:dumbbell-incline-alternate-supinated-curl` | Dumbbell Incline Alternate Supinated Curl | Biceps | [Page](https://smartworkout.app/en/exercise-library/biceps/dumbbell-incline-alternate-supinated-curl) | [Asset](https://api.smartworkout.app/asset/video/a0cf9d35-9654-4208-8851-908e1b46992c.mp4) | video/mp4 · available | `/exercises/dumbbell-incline-alternate-supinated-curl.mp4` | 697123 | Ready |
| `builtin-exercise:dumbbell-incline-chest-supported-lateral-raises` | Dumbbell Incline Chest Supported Lateral Raises | Back | [Page](https://smartworkout.app/en/exercise-library/back/dumbbell-incline-chest-supported-lateral-raises) | [Asset](https://api.smartworkout.app/asset/video/1cedf10b-6334-4bca-a4b2-d131bcc1e7e1.mp4) | video/mp4 · available | `/exercises/dumbbell-incline-chest-supported-lateral-raises.mp4` | 692778 | Ready |
| `builtin-exercise:dumbbell-incline-hammer-curl` | Dumbbell Incline Hammer Curl | Biceps | [Page](https://smartworkout.app/en/exercise-library/biceps/dumbbell-incline-hammer-curl) | [Asset](https://api.smartworkout.app/asset/video/d0ac9935-5f39-4384-afb1-1f511e2c35a5.mp4) | video/mp4 · available | `/exercises/dumbbell-incline-hammer-curl.mp4` | 603338 | Ready |
| `builtin-exercise:dumbbell-incline-rear-lateral-t-raise` | Dumbbell Incline Rear Lateral T Raise | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/dumbbell-incline-rear-lateral-t-raise) | [Asset](https://api.smartworkout.app/asset/video/690a8f6a-5e32-4ac5-ae61-cf2b700ca4c4.mp4) | video/mp4 · available | `/exercises/dumbbell-incline-rear-lateral-t-raise.mp4` | 725021 | Ready |
| `builtin-exercise:dumbbell-incline-t-raise` | Dumbbell Incline T Raise | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/dumbbell-incline-t-raise) | [Asset](https://api.smartworkout.app/asset/video/6a593a24-996a-4a8d-b73c-e83a6f73cc43.mp4) | video/mp4 · available | `/exercises/dumbbell-incline-t-raise.mp4` | 764686 | Ready |
| `builtin-exercise:dumbbell-jump` | Dumbbell Jump | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/dumbbell-jump) | [Asset](https://api.smartworkout.app/asset/video/3b2c2e24-0bf8-46e9-a11f-462820243e9e.mp4) | video/mp4 · available | `/exercises/dumbbell-jump.mp4` | 699208 | Ready |
| `builtin-exercise:dumbbell-kelso-shrugs` | Dumbbell Kelso Shrugs | Back | [Page](https://smartworkout.app/en/exercise-library/back/dumbbell-kelso-shrugs) | [Asset](https://api.smartworkout.app/asset/video/1a69c113-7a8b-4e7a-ada7-295f8b62db23.mp4) | video/mp4 · available | `/exercises/dumbbell-kelso-shrugs.mp4` | 593419 | Ready |
| `builtin-exercise:dumbbell-larsen-press` | Dumbbell Larsen Press | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/dumbbell-larsen-press) | [Asset](https://api.smartworkout.app/asset/video/aa5076ef-fa6e-47bc-9e61-10a759bf9762.mp4) | video/mp4 · available | `/exercises/dumbbell-larsen-press.mp4` | 877408 | Ready |
| `builtin-exercise:dumbbell-lat-pullover` | Dumbbell Lat Pullover | Back | [Page](https://smartworkout.app/en/exercise-library/back/dumbbell-lat-pullover) | [Asset](https://api.smartworkout.app/asset/video/9615a139-577e-4dfa-a5d2-77200f3e3b5d.mp4) | video/mp4 · available | `/exercises/dumbbell-lat-pullover.mp4` | 858749 | Ready |
| `builtin-exercise:dumbbell-lateral-raise` | Dumbbell Lateral Raise | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/dumbbell-lateral-raise) | [Asset](https://api.smartworkout.app/asset/video/62ca1060-9268-4fa5-a167-0bc79fa10a3a.mp4) | video/mp4 · available | `/exercises/dumbbell-lateral-raise.mp4` | 672283 | Ready |
| `builtin-exercise:dumbbell-low-to-high-fly` | Dumbbell Low to High Fly | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/dumbbell-low-to-high-fly) | [Asset](https://api.smartworkout.app/asset/video/dcee9b22-f83b-4dd3-8246-e99d543042cc.mp4) | video/mp4 · available | `/exercises/dumbbell-low-to-high-fly.mp4` | 781301 | Ready |
| `builtin-exercise:dumbbell-lu-raises` | Dumbbell Lu Raises | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/dumbbell-lu-raises) | [Asset](https://api.smartworkout.app/asset/video/0cd0d3d3-33c2-4ff4-ac9a-2c591ae0700a.mp4) | video/mp4 · available | `/exercises/dumbbell-lu-raises.mp4` | 837672 | Ready |
| `builtin-exercise:dumbbell-lunges` | Dumbbell Lunges | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/dumbbell-lunges) | [Asset](https://api.smartworkout.app/asset/video/301f616a-681a-4c81-aa3a-8c58ce8f0299.mp4) | video/mp4 · available | `/exercises/dumbbell-lunges.mp4` | 843122 | Ready |
| `builtin-exercise:dumbbell-lying-leg-curl` | Dumbbell Lying Leg Curl | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/dumbbell-lying-leg-curl) | [Asset](https://api.smartworkout.app/asset/video/2ebf00ec-a427-4cbb-bbba-24977aec32ab.mp4) | video/mp4 · available | `/exercises/dumbbell-lying-leg-curl.mp4` | 763130 | Ready |
| `builtin-exercise:dumbbell-lying-pronation` | Dumbbell Lying Pronation | Forearms | [Page](https://smartworkout.app/en/exercise-library/forearms/dumbbell-lying-pronation) | [Asset](https://api.smartworkout.app/asset/video/7edeecef-6ab8-4dae-9860-cff466008288.mp4) | video/mp4 · available | `/exercises/dumbbell-lying-pronation.mp4` | 666879 | Ready |
| `builtin-exercise:dumbbell-lying-triceps-extension` | Dumbbell Lying Triceps Extension | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/dumbbell-lying-triceps-extension) | [Asset](https://api.smartworkout.app/asset/video/0362de59-d154-4177-8a06-086ec08261ff.mp4) | video/mp4 · available | `/exercises/dumbbell-lying-triceps-extension.mp4` | 766517 | Ready |
| `builtin-exercise:dumbbell-neutral-grip-incline-bench-row` | Dumbbell Neutral Grip Incline Bench Row | Back | [Page](https://smartworkout.app/en/exercise-library/back/dumbbell-neutral-grip-incline-bench-row) | [Asset](https://api.smartworkout.app/asset/video/eb33700d-4d13-444e-baa1-1f8fd884b762.mp4) | video/mp4 · available | `/exercises/dumbbell-neutral-grip-incline-bench-row.mp4` | 697200 | Ready |
| `builtin-exercise:dumbbell-poliquin-lateral-raise` | Dumbbell Poliquin Lateral Raise | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/dumbbell-poliquin-lateral-raise) | [Asset](https://api.smartworkout.app/asset/video/392d3cca-7632-44bc-8dd5-c23a1e2dbcf0.mp4) | video/mp4 · available | `/exercises/dumbbell-poliquin-lateral-raise.mp4` | 914511 | Ready |
| `builtin-exercise:dumbbell-poliquin-press` | Dumbbell Poliquin Press | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/dumbbell-poliquin-press) | [Asset](https://api.smartworkout.app/asset/video/56b80804-b9ed-4524-a2d7-948c51e2358b.mp4) | video/mp4 · available | `/exercises/dumbbell-poliquin-press.mp4` | 924093 | Ready |
| `builtin-exercise:dumbbell-pullover-with-legs-raised` | Dumbbell Pullover with Legs Raised | Back | [Page](https://smartworkout.app/en/exercise-library/back/dumbbell-pullover-with-legs-raised) | [Asset](https://api.smartworkout.app/asset/video/947e5dc4-ad95-497d-a378-d12a90e1453a.mp4) | video/mp4 · available | `/exercises/dumbbell-pullover-with-legs-raised.mp4` | 833311 | Ready |
| `builtin-exercise:dumbbell-push-press` | Dumbbell Push Press | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/dumbbell-push-press) | [Asset](https://api.smartworkout.app/asset/video/2a725fc8-be67-4061-b80e-783cb70f0d30.mp4) | video/mp4 · available | `/exercises/dumbbell-push-press.mp4` | 765101 | Ready |
| `builtin-exercise:dumbbell-rear-delt-row` | Dumbbell Rear Delt Row | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/dumbbell-rear-delt-row) | [Asset](https://api.smartworkout.app/asset/video/f39b2da9-656e-4cf7-9d99-dede2ee0a38f.mp4) | video/mp4 · available | `/exercises/dumbbell-rear-delt-row.mp4` | 738915 | Ready |
| `builtin-exercise:dumbbell-rear-lunge` | Dumbbell Rear Lunge | Gluteal | [Page](https://smartworkout.app/en/exercise-library/gluteus/dumbbell-rear-lunge) | [Asset](https://api.smartworkout.app/asset/video/9f892517-9887-4854-a8c9-f716dde7decc.mp4) | video/mp4 · available | `/exercises/dumbbell-rear-lunge.mp4` | 1834344 | Ready |
| `builtin-exercise:dumbbell-reverse-lunge-off-step` | Dumbbell Reverse Lunge off Step | Gluteal | [Page](https://smartworkout.app/en/exercise-library/gluteus/dumbbell-reverse-lunge-off-step) | [Asset](https://api.smartworkout.app/asset/video/39c19c16-74a3-47a5-8d63-81f3da358d05.mp4) | video/mp4 · available | `/exercises/dumbbell-reverse-lunge-off-step.mp4` | 1299294 | Ready |
| `builtin-exercise:dumbbell-romanian-deadlift` | Dumbbell Romanian Deadlift | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/dumbbell-romanian-deadlift) | [Asset](https://api.smartworkout.app/asset/video/b5ba96be-7920-4363-b1f7-885bf760d895.mp4) | video/mp4 · available | `/exercises/dumbbell-romanian-deadlift.mp4` | 862872 | Ready |
| `builtin-exercise:dumbbell-russian-twist` | Dumbbell Russian Twist | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/dumbbell-russian-twist) | [Asset](https://api.smartworkout.app/asset/video/5b03cb86-2014-46e2-bb10-8cd533212fa5.mp4) | video/mp4 · available | `/exercises/dumbbell-russian-twist.mp4` | 1736733 | Ready |
| `builtin-exercise:dumbbell-seal-row` | Dumbbell Seal Row | Back | [Page](https://smartworkout.app/en/exercise-library/back/dumbbell-seal-row) | [Asset](https://api.smartworkout.app/asset/video/cb909b1a-4be4-47c7-ba5d-ab789bb44ae3.mp4) | video/mp4 · available | `/exercises/dumbbell-seal-row.mp4` | 731533 | Ready |
| `builtin-exercise:dumbbell-seated-alternate-hammer-curl` | Dumbbell Seated Alternate Hammer Curl | Biceps | [Page](https://smartworkout.app/en/exercise-library/biceps/dumbbell-seated-alternate-hammer-curl) | [Asset](https://api.smartworkout.app/asset/video/309bc67b-631b-4d37-92a1-6ba12961d2b1.mp4) | video/mp4 · available | `/exercises/dumbbell-seated-alternate-hammer-curl.mp4` | 745059 | Ready |
| `builtin-exercise:dumbbell-seated-bent-over-high-row` | Dumbbell Seated Bent Over High Row | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/dumbbell-seated-bent-over-high-row) | [Asset](https://api.smartworkout.app/asset/video/2478ca0d-5b68-424c-8473-310bf31576ce.mp4) | video/mp4 · available | `/exercises/dumbbell-seated-bent-over-high-row.mp4` | 1034124 | Ready |
| `builtin-exercise:dumbbell-seated-lateral-raise` | Dumbbell Seated Lateral Raise | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/dumbbell-seated-lateral-raise) | [Asset](https://api.smartworkout.app/asset/video/4dd16830-39e0-47aa-8ae9-5f6c31b00d39.mp4) | video/mp4 · available | `/exercises/dumbbell-seated-lateral-raise.mp4` | 655689 | Ready |
| `builtin-exercise:dumbbell-seated-triceps-extension` | Dumbbell Seated Triceps Extension | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/dumbbell-seated-triceps-extension) | [Asset](https://api.smartworkout.app/asset/video/5cd8faa4-bb41-4bb4-bbda-0aa6146f696b.mp4) | video/mp4 · available | `/exercises/dumbbell-seated-triceps-extension.mp4` | 540337 | Ready |
| `builtin-exercise:dumbbell-shoulder-shrugs` | Dumbbell Shoulder Shrugs | Back | [Page](https://smartworkout.app/en/exercise-library/back/dumbbell-shoulder-shrugs) | [Asset](https://api.smartworkout.app/asset/video/e27d907f-ce86-45c5-ad37-edab75f4c66c.mp4) | video/mp4 · available | `/exercises/dumbbell-shoulder-shrugs.mp4` | 482029 | Ready |
| `builtin-exercise:dumbbell-side-bridge` | Dumbbell Side Bridge | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/dumbbell-side-bridge) | [Asset](https://api.smartworkout.app/asset/video/93c1ab4d-89c0-4e0f-b4b5-1c4c18133d9e.mp4) | video/mp4 · available | `/exercises/dumbbell-side-bridge.mp4` | 1483771 | Ready |
| `builtin-exercise:dumbbell-side-lunges` | Dumbbell Side Lunges | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/dumbbell-side-lunges) | [Asset](https://api.smartworkout.app/asset/video/ba3f0650-6d8b-4463-b188-d1239ac4614c.mp4) | video/mp4 · available | `/exercises/dumbbell-side-lunges.mp4` | 1108016 | Ready |
| `builtin-exercise:dumbbell-single-leg-hip-thrust` | Dumbbell Single Leg Hip Thrust | Gluteal | [Page](https://smartworkout.app/en/exercise-library/gluteus/dumbbell-single-leg-hip-thrust) | [Asset](https://api.smartworkout.app/asset/video/ec4bd299-a2f5-41ea-9eed-2fe4cfeca63f.mp4) | video/mp4 · available | `/exercises/dumbbell-single-leg-hip-thrust.mp4` | 1295451 | Ready |
| `builtin-exercise:dumbbell-snatch` | Dumbbell Snatch | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/dumbbell-snatch) | [Asset](https://api.smartworkout.app/asset/video/03578af9-3e67-49db-b5e6-406c15255a6e.mp4) | video/mp4 · available | `/exercises/dumbbell-snatch.mp4` | 1189616 | Ready |
| `builtin-exercise:dumbbell-spider-curl` | Dumbbell Spider Curl | Biceps | [Page](https://smartworkout.app/en/exercise-library/biceps/dumbbell-spider-curl) | [Asset](https://api.smartworkout.app/asset/video/45eb1b50-84e5-49b1-a119-80345b27a182.mp4) | video/mp4 · available | `/exercises/dumbbell-spider-curl.mp4` | 774896 | Ready |
| `builtin-exercise:dumbbell-split-squat` | Dumbbell Split Squat | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/dumbbell-split-squat) | [Asset](https://api.smartworkout.app/asset/video/46f59875-7d5f-4656-9767-189b41e05f2c.mp4) | video/mp4 · available | `/exercises/dumbbell-split-squat.mp4` | 676249 | Ready |
| `builtin-exercise:dumbbell-squat` | Dumbbell Squat | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/dumbbell-squat) | [Asset](https://api.smartworkout.app/asset/video/cd1b2803-4a4f-4672-809e-6bd9e726b5be.mp4) | video/mp4 · available | `/exercises/dumbbell-squat.mp4` | 1031209 | Ready |
| `builtin-exercise:dumbbell-standing-alternate-press` | Dumbbell Standing Alternate Press | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/dumbbell-standing-alternate-press) | [Asset](https://api.smartworkout.app/asset/video/09cfbb01-395b-4001-b94d-b5f9f9ca1cc4.mp4) | video/mp4 · available | `/exercises/dumbbell-standing-alternate-press.mp4` | 797309 | Ready |
| `builtin-exercise:dumbbell-standing-calf-raises` | Dumbbell Standing Calf Raises | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/dumbbell-standing-calf-raises) | [Asset](https://api.smartworkout.app/asset/video/2c1d9b96-6616-4813-83bf-71943b2ec41d.mp4) | video/mp4 · available | `/exercises/dumbbell-standing-calf-raises.mp4` | 594135 | Ready |
| `builtin-exercise:dumbbell-standing-driver` | Dumbbell Standing Driver | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/dumbbell-standing-driver) | [Asset](https://api.smartworkout.app/asset/video/e28b3802-820e-4d5d-9d54-ef0f52194aad.mp4) | video/mp4 · available | `/exercises/dumbbell-standing-driver.mp4` | 663372 | Ready |
| `builtin-exercise:dumbbell-standing-reverse-wrist-curls` | Dumbbell Standing Reverse Wrist Curls | Forearms | [Page](https://smartworkout.app/en/exercise-library/forearms/dumbbell-standing-reverse-wrist-curls) | [Asset](https://api.smartworkout.app/asset/video/62064a79-3e7b-49e9-95a4-1894412a6443.mp4) | video/mp4 · available | `/exercises/dumbbell-standing-reverse-wrist-curls.mp4` | 413714 | Ready |
| `builtin-exercise:dumbbell-standing-side-bend` | Dumbbell Standing Side Bend | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/dumbbell-standing-side-bend) | [Asset](https://api.smartworkout.app/asset/video/08ab9632-5bd0-4222-8381-225d1293f13c.mp4) | video/mp4 · available | `/exercises/dumbbell-standing-side-bend.mp4` | 829228 | Ready |
| `builtin-exercise:dumbbell-standing-wrist-curl` | Dumbbell Standing Wrist Curl | Forearms | [Page](https://smartworkout.app/en/exercise-library/forearms/dumbbell-standing-wrist-curl) | [Asset](https://api.smartworkout.app/asset/video/671aad72-9577-45f3-8ba5-41957dbc6189.mp4) | video/mp4 · available | `/exercises/dumbbell-standing-wrist-curl.mp4` | 395831 | Ready |
| `builtin-exercise:dumbbell-step-up` | Dumbbell Step-Up | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/dumbbell-step-up) | [Asset](https://api.smartworkout.app/asset/video/e9929636-da62-40f4-83f0-2819af76d507.mp4) | video/mp4 · available | `/exercises/dumbbell-step-up.mp4` | 767183 | Ready |
| `builtin-exercise:dumbbell-straight-leg-deadlift` | Dumbbell Straight Leg Deadlift | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/dumbbell-straight-leg-deadlift) | [Asset](https://api.smartworkout.app/asset/video/164b4f5e-deee-4000-bbd5-77b7f15d4c47.mp4) | video/mp4 · available | `/exercises/dumbbell-straight-leg-deadlift.mp4` | 870318 | Ready |
| `builtin-exercise:dumbbell-sumo-squat` | Dumbbell Sumo Squat | Gluteal | [Page](https://smartworkout.app/en/exercise-library/gluteus/dumbbell-sumo-squat) | [Asset](https://api.smartworkout.app/asset/video/eda567bf-ae70-4ae4-885c-fe8820613f96.mp4) | video/mp4 · available | `/exercises/dumbbell-sumo-squat.mp4` | 859489 | Ready |
| `builtin-exercise:dumbbell-supinated-preacher-curl` | Dumbbell Supinated Preacher Curl | Biceps | [Page](https://smartworkout.app/en/exercise-library/biceps/dumbbell-supinated-preacher-curl) | [Asset](https://api.smartworkout.app/asset/video/5615a074-10b6-4385-afc2-ca5c08c7cca0.mp4) | video/mp4 · available | `/exercises/dumbbell-supinated-preacher-curl.mp4` | 749993 | Ready |
| `builtin-exercise:dumbbell-upright-row` | Dumbbell Upright Row | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/dumbbell-upright-row) | [Asset](https://api.smartworkout.app/asset/video/1bc80757-1df3-47d7-baee-6be9e3b9f03c.mp4) | video/mp4 · available | `/exercises/dumbbell-upright-row.mp4` | 761180 | Ready |
| `builtin-exercise:dumbbell-walking-lunges` | Dumbbell Walking Lunges | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/dumbbell-walking-lunges) | [Asset](https://api.smartworkout.app/asset/video/d478be3b-f434-4b80-8fff-3eba57247ed5.mp4) | video/mp4 · available | `/exercises/dumbbell-walking-lunges.mp4` | 1433705 | Ready |
| `builtin-exercise:elbow-out-chest-stretch` | Elbow Out Chest Stretch | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/elbow-out-chest-stretch) | [Asset](https://api.smartworkout.app/asset/video/e6d86856-f18f-466b-8cdc-b3a48c9644f5.mp4) | video/mp4 · available | `/exercises/elbow-out-chest-stretch.mp4` | 490193 | Ready |
| `builtin-exercise:elliptical-trainer` | Elliptical Trainer | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/elliptical-trainer) | [Asset](https://api.smartworkout.app/asset/video/38a3a505-5577-4a0a-9a91-e44a7412b028.mp4) | video/mp4 · available | `/exercises/elliptical-trainer.mp4` | 873184 | Ready |
| `builtin-exercise:ez-bar-biceps-curl` | EZ-Bar Biceps Curl | Biceps | [Page](https://smartworkout.app/en/exercise-library/biceps/ez-bar-biceps-curl) | [Asset](https://api.smartworkout.app/asset/video/264a8706-fefc-4dce-a97c-433c4477e265.mp4) | video/mp4 · available | `/exercises/ez-bar-biceps-curl.mp4` | 700836 | Ready |
| `builtin-exercise:ez-bar-preacher-curl` | EZ-Bar Preacher Curl | Biceps | [Page](https://smartworkout.app/en/exercise-library/biceps/ez-bar-preacher-curl) | [Asset](https://api.smartworkout.app/asset/video/302e7d21-3ebe-4106-80bf-e22773b66ea5.mp4) | video/mp4 · available | `/exercises/ez-bar-preacher-curl.mp4` | 664474 | Ready |
| `builtin-exercise:ez-bar-reverse-grip-biceps-curl` | EZ-Bar Reverse Grip Biceps Curl | Forearms | [Page](https://smartworkout.app/en/exercise-library/forearms/ez-bar-reverse-grip-biceps-curl) | [Asset](https://api.smartworkout.app/asset/video/efced1a3-97b1-4175-b3cb-14d9c3701ff9.mp4) | video/mp4 · available | `/exercises/ez-bar-reverse-grip-biceps-curl.mp4` | 655064 | Ready |
| `builtin-exercise:ez-bar-reverse-spider-curl` | EZ-Bar Reverse Spider Curl | Forearms | [Page](https://smartworkout.app/en/exercise-library/forearms/ez-bar-reverse-spider-curl) | [Asset](https://api.smartworkout.app/asset/video/4593576d-b7be-4d3e-83a6-e5faa974485b.mp4) | video/mp4 · available | `/exercises/ez-bar-reverse-spider-curl.mp4` | 970366 | Ready |
| `builtin-exercise:ez-bar-seated-reverse-wrist-curl` | EZ-Bar Seated Reverse Wrist Curl | Forearms | [Page](https://smartworkout.app/en/exercise-library/forearms/ez-bar-seated-reverse-wrist-curl) | [Asset](https://api.smartworkout.app/asset/video/59305c82-c91a-421a-a6da-3ac6ccc78fab.mp4) | video/mp4 · available | `/exercises/ez-bar-seated-reverse-wrist-curl.mp4` | 579045 | Ready |
| `builtin-exercise:ez-bar-seated-triceps-extension` | EZ-Bar Seated Triceps Extension | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/ez-bar-seated-triceps-extension) | [Asset](https://api.smartworkout.app/asset/video/eb41c91c-9ed6-4d61-9e77-8963b224df91.mp4) | video/mp4 · available | `/exercises/ez-bar-seated-triceps-extension.mp4` | 572369 | Ready |
| `builtin-exercise:ez-bar-seated-wrist-curl` | EZ-Bar Seated Wrist Curl | Forearms | [Page](https://smartworkout.app/en/exercise-library/forearms/ez-bar-seated-wrist-curl) | [Asset](https://api.smartworkout.app/asset/video/c55080b2-fe0e-4cc3-9b9d-47a5f2797806.mp4) | video/mp4 · available | `/exercises/ez-bar-seated-wrist-curl.mp4` | 631184 | Ready |
| `builtin-exercise:ez-bar-spider-curl` | EZ-Bar Spider Curl | Biceps | [Page](https://smartworkout.app/en/exercise-library/biceps/ez-bar-spider-curl) | [Asset](https://api.smartworkout.app/asset/video/0c2106f4-0de3-4cdf-9c0c-6676929e8a4b.mp4) | video/mp4 · available | `/exercises/ez-bar-spider-curl.mp4` | 914562 | Ready |
| `builtin-exercise:ez-bar-tricep-pushdown` | EZ-Bar Tricep Pushdown | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/ez-bar-tricep-pushdown) | [Asset](https://api.smartworkout.app/asset/video/c00bb56c-4f78-4833-a488-6df479e49308.mp4) | video/mp4 · available | `/exercises/ez-bar-tricep-pushdown.mp4` | 495620 | Ready |
| `builtin-exercise:farmer-walk` | Farmer Walk | Forearms | [Page](https://smartworkout.app/en/exercise-library/forearms/farmer-walk) | [Asset](https://api.smartworkout.app/asset/video/b6d37450-7d81-4f16-bde4-92f75e2969cf.mp4) | video/mp4 · available | `/exercises/farmer-walk.mp4` | 359943 | Ready |
| `builtin-exercise:figure-4-stretch-on-chair` | Figure 4 Stretch on Chair | Gluteal | [Page](https://smartworkout.app/en/exercise-library/gluteus/figure-4-stretch-on-chair) | [Asset](https://api.smartworkout.app/asset/video/95d641ff-fa5a-4b70-abf3-e669b0ab7ffd.mp4) | video/mp4 · available | `/exercises/figure-4-stretch-on-chair.mp4` | 890891 | Ready |
| `builtin-exercise:finger-push-up` | Finger Push-Up | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/finger-push-up) | [Asset](https://api.smartworkout.app/asset/video/8fad7bad-4464-4e8f-8cce-4e2cc2e0f778.mp4) | video/mp4 · available | `/exercises/finger-push-up.mp4` | 1258269 | Ready |
| `builtin-exercise:flag` | Flag | Back | [Page](https://smartworkout.app/en/exercise-library/back/flag) | [Asset](https://api.smartworkout.app/asset/video/34bc7208-ce30-4e32-9ac1-b7d271f0cf37.mp4) | video/mp4 · available | `/exercises/flag.mp4` | 787928 | Ready |
| `builtin-exercise:floor-dumbbell-press` | Floor Dumbbell Press | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/floor-dumbbell-press) | [Asset](https://api.smartworkout.app/asset/video/d4d4942d-ab5e-4496-b15f-e55bcd5c99a9.mp4) | video/mp4 · available | `/exercises/floor-dumbbell-press.mp4` | 1144281 | Ready |
| `builtin-exercise:forward-band-monster-walk` | Forward Band Monster Walk | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/forward-band-monster-walk) | [Asset](https://api.smartworkout.app/asset/video/345c5a82-61eb-496b-a488-597f0da2f7e4.mp4) | video/mp4 · available | `/exercises/forward-band-monster-walk.mp4` | 861456 | Ready |
| `builtin-exercise:frog-crunch` | Frog Crunch | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/frog-crunch) | [Asset](https://api.smartworkout.app/asset/video/bfd5f760-da9c-4311-8a37-8d6b8c7c1d03.mp4) | video/mp4 · available | `/exercises/frog-crunch.mp4` | 2194213 | Ready |
| `builtin-exercise:frog-planche` | Frog Planche | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/frog-planche) | [Asset](https://api.smartworkout.app/asset/video/4701f532-aae4-49c7-a450-28b966feba6c.mp4) | video/mp4 · available | `/exercises/frog-planche.mp4` | 652198 | Ready |
| `builtin-exercise:frog-pump` | Frog Pump | Gluteal | [Page](https://smartworkout.app/en/exercise-library/gluteus/frog-pump) | [Asset](https://api.smartworkout.app/asset/video/f8321c51-8da2-4141-8eb8-4b5899cd4401.mp4) | video/mp4 · available | `/exercises/frog-pump.mp4` | 978490 | Ready |
| `builtin-exercise:front-lever` | Front Lever | Back | [Page](https://smartworkout.app/en/exercise-library/back/front-lever) | [Asset](https://api.smartworkout.app/asset/video/bc0c7cee-2b89-494b-a888-9b1b820141db.mp4) | video/mp4 · available | `/exercises/front-lever.mp4` | 522895 | Ready |
| `builtin-exercise:front-lever-pull-up` | Front Lever Pull-Up | Back | [Page](https://smartworkout.app/en/exercise-library/back/front-lever-pull-up) | [Asset](https://api.smartworkout.app/asset/video/29994634-51a7-490e-ade0-78bc4436d473.mp4) | video/mp4 · available | `/exercises/front-lever-pull-up.mp4` | 674298 | Ready |
| `builtin-exercise:front-squat` | Front Squat | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/front-squat) | [Asset](https://api.smartworkout.app/asset/video/d2337c8c-c8f0-4608-8ed5-156c293da825.mp4) | video/mp4 · available | `/exercises/front-squat.mp4` | 932396 | Ready |
| `builtin-exercise:full-planche` | Full Planche | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/full-planche) | [Asset](https://api.smartworkout.app/asset/video/ab288c63-7b82-4955-83b0-6d36fcb29ea2.mp4) | video/mp4 · available | `/exercises/full-planche.mp4` | 906884 | Ready |
| `builtin-exercise:full-planche-push-up` | Full Planche Push-Up | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/full-planche-push-up) | [Asset](https://api.smartworkout.app/asset/video/97d75736-ef32-4193-a46f-4671aac36e9a.mp4) | video/mp4 · available | `/exercises/full-planche-push-up.mp4` | 1429754 | Ready |
| `builtin-exercise:glute-bridge` | Glute Bridge | Gluteal | [Page](https://smartworkout.app/en/exercise-library/gluteus/glute-bridge) | [Asset](https://api.smartworkout.app/asset/video/f803258f-20c1-4aa2-aee4-f9e1a68fe469.mp4) | video/mp4 · available | `/exercises/glute-bridge.mp4` | 1080753 | Ready |
| `builtin-exercise:glute-bridge-on-bench` | Glute Bridge on Bench | Gluteal | [Page](https://smartworkout.app/en/exercise-library/gluteus/glute-bridge-on-bench) | [Asset](https://api.smartworkout.app/asset/video/cdefa0ab-30d9-42e9-869b-fdd0aa374304.mp4) | video/mp4 · available | `/exercises/glute-bridge-on-bench.mp4` | 834661 | Ready |
| `builtin-exercise:glute-bridge-single-leg` | Glute Bridge Single Leg | Gluteal | [Page](https://smartworkout.app/en/exercise-library/gluteus/glute-bridge-single-leg) | [Asset](https://api.smartworkout.app/asset/video/59811037-44cc-4ac1-95d0-3c2e7bd021d0.mp4) | video/mp4 · available | `/exercises/glute-bridge-single-leg.mp4` | 888772 | Ready |
| `builtin-exercise:glute-cable-kickback` | Glute Cable Kickback | Gluteal | [Page](https://smartworkout.app/en/exercise-library/gluteus/glute-cable-kickback) | [Asset](https://api.smartworkout.app/asset/video/9e81ed9f-200d-405e-976c-ac9592d9086d.mp4) | video/mp4 · available | `/exercises/glute-cable-kickback.mp4` | 704265 | Ready |
| `builtin-exercise:glute-ham-raise-1-2` | Glute-Ham Raise 1/2 | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/glute-ham-raise-1/2) | [Asset](https://api.smartworkout.app/asset/video/81216443-74ad-4c65-a054-3836dab548a5.mp4) | video/mp4 · available | `/exercises/glute-ham-raise-1-2.mp4` | 860905 | Ready |
| `builtin-exercise:glute-machine-kickback` | Glute Machine Kickback | Gluteal | [Page](https://smartworkout.app/en/exercise-library/gluteus/glute-machine-kickback) | [Asset](https://api.smartworkout.app/asset/video/efd17fd3-ef95-43c1-8eb7-7b10975766f3.mp4) | video/mp4 · available | `/exercises/glute-machine-kickback.mp4` | 529690 | Ready |
| `builtin-exercise:glutes-roll` | Glutes Roll | Gluteal | [Page](https://smartworkout.app/en/exercise-library/gluteus/glutes-roll) | [Asset](https://api.smartworkout.app/asset/video/dd29ea4c-5985-4a8b-ade9-9e1af9c89751.mp4) | video/mp4 · available | `/exercises/glutes-roll.mp4` | 1104631 | Ready |
| `builtin-exercise:goblet-squat` | Goblet Squat | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/goblet-squat) | [Asset](https://api.smartworkout.app/asset/video/bf7cdba1-f763-4816-8921-a10c86f7a026.mp4) | video/mp4 · available | `/exercises/goblet-squat.mp4` | 990647 | Ready |
| `builtin-exercise:gorilla-row` | Gorilla Row | Back | [Page](https://smartworkout.app/en/exercise-library/back/gorilla-row) | [Asset](https://api.smartworkout.app/asset/video/2006990a-8bbe-44ca-b959-9f24c7e4a5cd.mp4) | video/mp4 · available | `/exercises/gorilla-row.mp4` | 1053230 | Ready |
| `builtin-exercise:half-kneeling-quad-stretch` | Half Kneeling Quad Stretch | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/half-kneeling-quad-stretch) | [Asset](https://api.smartworkout.app/asset/video/9811921a-a1fd-47dd-956d-0b101242f966.mp4) | video/mp4 · available | `/exercises/half-kneeling-quad-stretch.mp4` | 522643 | Ready |
| `builtin-exercise:half-kneeling-shoulder-dumbbell-press` | Half Kneeling Shoulder Dumbbell Press | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/half-kneeling-shoulder-dumbbell-press) | [Asset](https://api.smartworkout.app/asset/video/c02e79fa-e9d4-48a0-bbf1-74e3df0c61cf.mp4) | video/mp4 · available | `/exercises/half-kneeling-shoulder-dumbbell-press.mp4` | 607128 | Ready |
| `builtin-exercise:half-squat` | Half Squat | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/half-squat) | [Asset](https://api.smartworkout.app/asset/video/d5a4c3aa-35fd-41e6-88fe-edc3d916845d.mp4) | video/mp4 · available | `/exercises/half-squat.mp4` | 805058 | Ready |
| `builtin-exercise:hammer-grip-dumbbell-bench-press` | Hammer Grip Dumbbell Bench Press | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/hammer-grip-dumbbell-bench-press) | [Asset](https://api.smartworkout.app/asset/video/4208805a-35b3-47da-a281-e3fcf76d3caa.mp4) | video/mp4 · available | `/exercises/hammer-grip-dumbbell-bench-press.mp4` | 789717 | Ready |
| `builtin-exercise:hand-gripper` | Hand Gripper | Forearms | [Page](https://smartworkout.app/en/exercise-library/forearms/hand-gripper) | [Asset](https://api.smartworkout.app/asset/video/5180cc87-9611-488d-b380-42d5cf3cfe9c.mp4) | video/mp4 · available | `/exercises/hand-gripper.mp4` | 461733 | Ready |
| `builtin-exercise:handstand-hold` | Handstand Hold | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/handstand-hold) | [Asset](https://api.smartworkout.app/asset/video/334e80db-a836-4a2e-a8a4-6e003280e4d4.mp4) | video/mp4 · available | `/exercises/handstand-hold.mp4` | 358503 | Ready |
| `builtin-exercise:handstand-push-up` | Handstand Push-Up | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/handstand-push-up) | [Asset](https://api.smartworkout.app/asset/video/91661081-fad1-4e62-8725-175f3f671a3b.mp4) | video/mp4 · available | `/exercises/handstand-push-up.mp4` | 1186060 | Ready |
| `builtin-exercise:hang-power-clean` | Hang Power Clean | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/hang-power-clean) | [Asset](https://api.smartworkout.app/asset/video/06cb104d-fc7d-49ae-aca0-54bd4fb7e713.mp4) | video/mp4 · available | `/exercises/hang-power-clean.mp4` | 1296914 | Ready |
| `builtin-exercise:hanging-half-windmill` | Hanging Half Windmill | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/hanging-half-windmill) | [Asset](https://api.smartworkout.app/asset/video/5d54f2c7-a08a-44b0-9837-f9173c4a7d80.mp4) | video/mp4 · available | `/exercises/hanging-half-windmill.mp4` | 670569 | Ready |
| `builtin-exercise:hanging-knee-circles` | Hanging Knee Circles | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/hanging-knee-circles) | [Asset](https://api.smartworkout.app/asset/video/9d3bd7f9-83ef-4311-9671-0420c8c30286.mp4) | video/mp4 · available | `/exercises/hanging-knee-circles.mp4` | 1083138 | Ready |
| `builtin-exercise:hanging-knee-raises` | Hanging Knee Raises | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/hanging-knee-raises) | [Asset](https://api.smartworkout.app/asset/video/13180fc4-ea8c-4813-8361-68da03eb24fc.mp4) | video/mp4 · available | `/exercises/hanging-knee-raises.mp4` | 835487 | Ready |
| `builtin-exercise:hanging-knee-to-chest` | Hanging Knee To Chest | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/hanging-knee-to-chest) | [Asset](https://api.smartworkout.app/asset/video/baeb8def-dfaa-46a9-998a-c6129cf21463.mp4) | video/mp4 · available | `/exercises/hanging-knee-to-chest.mp4` | 752441 | Ready |
| `builtin-exercise:hanging-knees-to-elbows` | Hanging Knees to Elbows | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/hanging-knees-to-elbows) | [Asset](https://api.smartworkout.app/asset/video/15b84a6b-99ac-4bd5-b1d8-7c98272a3ea5.mp4) | video/mp4 · available | `/exercises/hanging-knees-to-elbows.mp4` | 818131 | Ready |
| `builtin-exercise:hanging-knees-to-elbows-waist` | Hanging Knees to Elbows Waist | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/hanging-knees-to-elbows-waist) | [Asset](https://api.smartworkout.app/asset/video/590402ef-84ac-4b34-a389-c59dfc0b4b27.mp4) | video/mp4 · available | `/exercises/hanging-knees-to-elbows-waist.mp4` | 835487 | Ready |
| `builtin-exercise:hanging-leg-raise-to-bar` | Hanging Leg Raise To Bar | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/hanging-leg-raise-to-bar) | [Asset](https://api.smartworkout.app/asset/video/55da64aa-d53a-4314-96dd-db9dcf40977b.mp4) | video/mp4 · available | `/exercises/hanging-leg-raise-to-bar.mp4` | 819345 | Ready |
| `builtin-exercise:hanging-oblique-knee-raise` | Hanging Oblique Knee Raise | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/hanging-oblique-knee-raise) | [Asset](https://api.smartworkout.app/asset/video/cb5401d6-3354-4d9a-8cb6-e27b988a505f.mp4) | video/mp4 · available | `/exercises/hanging-oblique-knee-raise.mp4` | 1079501 | Ready |
| `builtin-exercise:hanging-scapular-retractions` | Hanging Scapular Retractions | Forearms | [Page](https://smartworkout.app/en/exercise-library/forearms/hanging-scapular-retractions) | [Asset](https://api.smartworkout.app/asset/video/e7366231-24ff-4313-b784-f702753f16b6.mp4) | video/mp4 · available | `/exercises/hanging-scapular-retractions.mp4` | 580289 | Ready |
| `builtin-exercise:hanging-scissors-kicks` | Hanging Scissors Kicks | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/hanging-scissors-kicks) | [Asset](https://api.smartworkout.app/asset/video/08c88cfe-e4b4-426a-b4f0-aeb09c6f76ac.mp4) | video/mp4 · available | `/exercises/hanging-scissors-kicks.mp4` | 608651 | Ready |
| `builtin-exercise:hanging-straight-leg-raise` | Hanging Straight Leg Raise | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/hanging-straight-leg-raise) | [Asset](https://api.smartworkout.app/asset/video/76633a51-aea1-4fa9-8d71-ac72bd79338a.mp4) | video/mp4 · available | `/exercises/hanging-straight-leg-raise.mp4` | 573508 | Ready |
| `builtin-exercise:happy-baby-pose` | Happy Baby Pose | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/happy-baby-pose) | [Asset](https://api.smartworkout.app/asset/video/8d83f6d0-7cd0-4cc0-b8d8-ac334249f099.mp4) | video/mp4 · available | `/exercises/happy-baby-pose.mp4` | 3918466 | Ready |
| `builtin-exercise:hercules-curl` | Hercules Curl | Biceps | [Page](https://smartworkout.app/en/exercise-library/biceps/hercules-curl) | [Asset](https://api.smartworkout.app/asset/video/e1c3abfb-dec6-4540-b591-3d843bb6d2c4.mp4) | video/mp4 · available | `/exercises/hercules-curl.mp4` | 531649 | Ready |
| `builtin-exercise:high-bar-squat` | High-Bar Squat | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/high-bar-squat) | [Asset](https://api.smartworkout.app/asset/video/841fe685-c0e5-42b6-9835-db738c0bfced.mp4) | video/mp4 · available | `/exercises/high-bar-squat.mp4` | 1004821 | Ready |
| `builtin-exercise:high-low-cable-chest-fly` | High Low Cable Chest Fly | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/high-low-cable-chest-fly) | [Asset](https://api.smartworkout.app/asset/video/9514aef8-30ff-4652-9524-9cf4633346db.mp4) | video/mp4 · available | `/exercises/high-low-cable-chest-fly.mp4` | 731350 | Ready |
| `builtin-exercise:high-pulley-overhead-triceps-extension` | High Pulley Overhead Triceps Extension | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/high-pulley-overhead-triceps-extension) | [Asset](https://api.smartworkout.app/asset/video/a10f25d3-573f-4f64-8df2-2acf5f2ea25b.mp4) | video/mp4 · available | `/exercises/high-pulley-overhead-triceps-extension.mp4` | 714158 | Ready |
| `builtin-exercise:high-to-low-band-woodchopper` | High To Low Band Woodchopper | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/high-to-low-band-woodchopper) | [Asset](https://api.smartworkout.app/asset/video/c899c33e-0594-4ea2-93e5-7bec1ab3bbb5.mp4) | video/mp4 · available | `/exercises/high-to-low-band-woodchopper.mp4` | 1090218 | Ready |
| `builtin-exercise:hip-circles` | Hip Circles | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/hip-circles) | [Asset](https://api.smartworkout.app/asset/video/a3991973-2fae-48ab-bb5d-1bf7a38e9c52.mp4) | video/mp4 · available | `/exercises/hip-circles.mp4` | 874613 | Ready |
| `builtin-exercise:hip-hinge` | Hip Hinge | Gluteal | [Page](https://smartworkout.app/en/exercise-library/gluteus/hip-hinge) | [Asset](https://api.smartworkout.app/asset/video/a17b800c-19d1-4b79-857a-79cbed8cbe85.mp4) | video/mp4 · available | `/exercises/hip-hinge.mp4` | 796406 | Ready |
| `builtin-exercise:hip-thrust` | Hip Thrust | Gluteal | [Page](https://smartworkout.app/en/exercise-library/gluteus/hip-thrust) | [Asset](https://api.smartworkout.app/asset/video/327ebb47-0e48-4e5f-af24-aca2819cf07f.mp4) | video/mp4 · available | `/exercises/hip-thrust.mp4` | 1526882 | Ready |
| `builtin-exercise:hip-thrust-smith-machine` | Hip Thrust Smith Machine | Gluteal | [Page](https://smartworkout.app/en/exercise-library/gluteus/hip-thrust-smith-machine) | [Asset](https://api.smartworkout.app/asset/video/6dc16915-265c-4719-ac62-5129510c04f6.mp4) | video/mp4 · available | `/exercises/hip-thrust-smith-machine.mp4` | 819378 | Ready |
| `builtin-exercise:hollow-body-hold` | Hollow Body Hold | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/hollow-body-hold) | [Asset](https://api.smartworkout.app/asset/video/8aaa0cc6-bd9d-4985-a811-e771bbf796c6.mp4) | video/mp4 · available | `/exercises/hollow-body-hold.mp4` | 1085782 | Ready |
| `builtin-exercise:hopping-high-knee-tap` | Hopping High Knee Tap | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/hopping-high-knee-tap) | [Asset](https://api.smartworkout.app/asset/video/998c09d5-6379-47a3-b4b3-c405673a84ee.mp4) | video/mp4 · available | `/exercises/hopping-high-knee-tap.mp4` | 978813 | Ready |
| `builtin-exercise:incline-barbell-bench-press` | Incline Barbell Bench Press | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/incline-barbell-bench-press) | [Asset](https://api.smartworkout.app/asset/video/d8c4f097-b27a-4178-ab88-ea69ae93ab97.mp4) | video/mp4 · available | `/exercises/incline-barbell-bench-press.mp4` | 637693 | Ready |
| `builtin-exercise:incline-barbell-triceps-extension` | Incline Barbell Triceps Extension | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/incline-barbell-triceps-extension) | [Asset](https://api.smartworkout.app/asset/video/df4ff23c-f84c-4a2b-826b-67858b06beef.mp4) | video/mp4 · available | `/exercises/incline-barbell-triceps-extension.mp4` | 566856 | Ready |
| `builtin-exercise:incline-bench-cable-fly` | Incline Bench Cable Fly | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/incline-bench-cable-fly) | [Asset](https://api.smartworkout.app/asset/video/88828613-9780-4e76-8fa3-208a5be4e452.mp4) | video/mp4 · available | `/exercises/incline-bench-cable-fly.mp4` | 709496 | Ready |
| `builtin-exercise:incline-bench-dumbbell-wide-row` | Incline Bench Dumbbell Wide Row | Back | [Page](https://smartworkout.app/en/exercise-library/back/incline-bench-dumbbell-wide-row) | [Asset](https://api.smartworkout.app/asset/video/3ff5debe-55a6-4138-a8ab-5116408c257a.mp4) | video/mp4 · available | `/exercises/incline-bench-dumbbell-wide-row.mp4` | 646895 | Ready |
| `builtin-exercise:incline-bench-leg-raises` | Incline Bench Leg Raises | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/incline-bench-leg-raises) | [Asset](https://api.smartworkout.app/asset/video/f003a9a4-fcb0-4f8c-9f62-de7680556166.mp4) | video/mp4 · available | `/exercises/incline-bench-leg-raises.mp4` | 736072 | Ready |
| `builtin-exercise:incline-cable-curl` | Incline Cable Curl | Biceps | [Page](https://smartworkout.app/en/exercise-library/biceps/incline-cable-curl) | [Asset](https://api.smartworkout.app/asset/video/613727d2-38d1-42a4-aa76-4058def099fb.mp4) | video/mp4 · available | `/exercises/incline-cable-curl.mp4` | 554607 | Ready |
| `builtin-exercise:incline-chest-supported-barbell-row` | Incline Chest Supported Barbell Row | Back | [Page](https://smartworkout.app/en/exercise-library/back/incline-chest-supported-barbell-row) | [Asset](https://api.smartworkout.app/asset/video/f1af846a-5df1-4bd7-be89-e1eb415031d0.mp4) | video/mp4 · available | `/exercises/incline-chest-supported-barbell-row.mp4` | 722679 | Ready |
| `builtin-exercise:incline-close-grip-push-up` | Incline Close Grip Push-Up | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/incline-close-grip-push-up) | [Asset](https://api.smartworkout.app/asset/video/c671d047-e0bd-4bc7-b601-460df461855b.mp4) | video/mp4 · available | `/exercises/incline-close-grip-push-up.mp4` | 851239 | Ready |
| `builtin-exercise:incline-dumbbell-bench-press` | Incline Dumbbell Bench Press | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/incline-dumbbell-bench-press) | [Asset](https://api.smartworkout.app/asset/video/5081d5c0-5262-45ba-a047-d3d652978d8a.mp4) | video/mp4 · available | `/exercises/incline-dumbbell-bench-press.mp4` | 619079 | Ready |
| `builtin-exercise:incline-dumbbell-chest-fly` | Incline Dumbbell Chest Fly | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/incline-dumbbell-chest-fly) | [Asset](https://api.smartworkout.app/asset/video/aec5c2b6-b5cb-44c9-bcaf-3e201a824590.mp4) | video/mp4 · available | `/exercises/incline-dumbbell-chest-fly.mp4` | 728059 | Ready |
| `builtin-exercise:incline-dumbbell-triceps-extension` | Incline Dumbbell Triceps Extension | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/incline-dumbbell-triceps-extension) | [Asset](https://api.smartworkout.app/asset/video/1c74a975-b210-4514-9421-48aceeb39f58.mp4) | video/mp4 · available | `/exercises/incline-dumbbell-triceps-extension.mp4` | 557095 | Ready |
| `builtin-exercise:incline-hammer-chest-press` | Incline Hammer Chest Press | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/incline-hammer-chest-press) | [Asset](https://api.smartworkout.app/asset/video/103ff85e-ab8f-404e-8adb-d04196937f6f.mp4) | video/mp4 · available | `/exercises/incline-hammer-chest-press.mp4` | 834001 | Ready |
| `builtin-exercise:incline-neutral-grip-dumbbell-press` | Incline Neutral Grip Dumbbell Press | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/incline-neutral-grip-dumbbell-press) | [Asset](https://api.smartworkout.app/asset/video/fe0fca73-f9f4-4627-9aae-c236916d2320.mp4) | video/mp4 · available | `/exercises/incline-neutral-grip-dumbbell-press.mp4` | 674186 | Ready |
| `builtin-exercise:incline-powell-raise` | Incline Powell Raise | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/incline-powell-raise) | [Asset](https://api.smartworkout.app/asset/video/7adc5966-ccdc-4fe7-ac44-9adf61232e13.mp4) | video/mp4 · available | `/exercises/incline-powell-raise.mp4` | 575765 | Ready |
| `builtin-exercise:incline-push-up` | Incline Push-Up | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/incline-push-up) | [Asset](https://api.smartworkout.app/asset/video/edc943ba-f227-4d12-9c96-3e8222618728.mp4) | video/mp4 · available | `/exercises/incline-push-up.mp4` | 862164 | Ready |
| `builtin-exercise:incline-twisting-sit-up` | Incline Twisting Sit Up | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/incline-twisting-sit-up) | [Asset](https://api.smartworkout.app/asset/video/85920430-bc75-4c95-919d-c031af9c2410.mp4) | video/mp4 · available | `/exercises/incline-twisting-sit-up.mp4` | 1915117 | Ready |
| `builtin-exercise:inverted-row-australian` | Inverted Row (Australian) | Back | [Page](https://smartworkout.app/en/exercise-library/back/inverted-row-(australian)) | [Asset](https://api.smartworkout.app/asset/video/664c116a-080b-41b1-b386-f26405cea34f.mp4) | video/mp4 · available | `/exercises/inverted-row-australian.mp4` | 659463 | Ready |
| `builtin-exercise:inverted-shrug` | Inverted Shrug | Back | [Page](https://smartworkout.app/en/exercise-library/back/inverted-shrug) | [Asset](https://api.smartworkout.app/asset/video/e32f659d-4105-4e85-a04c-bf376b6da5be.mp4) | video/mp4 · available | `/exercises/inverted-shrug.mp4` | 527916 | Ready |
| `builtin-exercise:jack-push-up` | Jack Push-Up | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/jack-push-up) | [Asset](https://api.smartworkout.app/asset/video/e95195f5-f331-4871-b0c2-eed87274e043.mp4) | video/mp4 · available | `/exercises/jack-push-up.mp4` | 1092534 | Ready |
| `builtin-exercise:janda-sit-up` | Janda Sit Up | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/janda-sit-up) | [Asset](https://api.smartworkout.app/asset/video/ecd15638-1053-4da9-ad07-9143ef378755.mp4) | video/mp4 · available | `/exercises/janda-sit-up.mp4` | 1342023 | Ready |
| `builtin-exercise:jefferson-curl` | Jefferson Curl | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/jefferson-curl) | [Asset](https://api.smartworkout.app/asset/video/1e41b9a4-43bf-4995-94c5-d12dbe32883a.mp4) | video/mp4 · available | `/exercises/jefferson-curl.mp4` | 982277 | Ready |
| `builtin-exercise:jm-press` | JM Press | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/jm-press) | [Asset](https://api.smartworkout.app/asset/video/18a33788-a323-47e8-8c34-53c12241682f.mp4) | video/mp4 · available | `/exercises/jm-press.mp4` | 803578 | Ready |
| `builtin-exercise:jump-rope` | Jump Rope | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/jump-rope) | [Asset](https://api.smartworkout.app/asset/video/41a04bcf-e0ef-40c5-bd4e-4499a4c281ad.mp4) | video/mp4 · available | `/exercises/jump-rope.mp4` | 511120 | Ready |
| `builtin-exercise:jump-squat` | Jump Squat | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/jump-squat) | [Asset](https://api.smartworkout.app/asset/video/7f64e722-a96b-4ae0-b3ed-8ae13841257b.mp4) | video/mp4 · available | `/exercises/jump-squat.mp4` | 784018 | Ready |
| `builtin-exercise:jumping-jacks` | Jumping Jacks | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/jumping-jacks) | [Asset](https://api.smartworkout.app/asset/video/86d085ff-785c-472b-94e7-94a4d28758cb.mp4) | video/mp4 · available | `/exercises/jumping-jacks.mp4` | 606726 | Ready |
| `builtin-exercise:katana-triceps-extension` | Katana Triceps Extension | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/katana-triceps-extension) | [Asset](https://api.smartworkout.app/asset/video/25d5f2cc-d1dc-4814-add6-c04d422394b4.mp4) | video/mp4 · available | `/exercises/katana-triceps-extension.mp4` | 619784 | Ready |
| `builtin-exercise:kettelbell-clean` | Kettelbell Clean | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/kettelbell-clean) | [Asset](https://api.smartworkout.app/asset/video/f00d4779-f6f0-439c-b4c3-ddbbc78b5777.mp4) | video/mp4 · available | `/exercises/kettelbell-clean.mp4` | 983214 | Ready |
| `builtin-exercise:kettlebel-renegade-row` | Kettlebel Renegade Row | Back | [Page](https://smartworkout.app/en/exercise-library/back/kettlebel-renegade-row) | [Asset](https://api.smartworkout.app/asset/video/36c1cc08-21ac-4c7b-8408-fb19693bcd11.mp4) | video/mp4 · available | `/exercises/kettlebel-renegade-row.mp4` | 2001383 | Ready |
| `builtin-exercise:kettlebell-around-the-head-rotation` | Kettlebell Around the Head Rotation | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/kettlebell-around-the-head-rotation) | [Asset](https://api.smartworkout.app/asset/video/c007c225-93f9-4c3a-ae2f-357dda1275a2.mp4) | video/mp4 · available | `/exercises/kettlebell-around-the-head-rotation.mp4` | 957539 | Ready |
| `builtin-exercise:kettlebell-biceps-curl` | Kettlebell Biceps Curl | Biceps | [Page](https://smartworkout.app/en/exercise-library/biceps/kettlebell-biceps-curl) | [Asset](https://api.smartworkout.app/asset/video/03b2ef35-080f-4305-a0e3-c1bb14caebc5.mp4) | video/mp4 · available | `/exercises/kettlebell-biceps-curl.mp4` | 595097 | Ready |
| `builtin-exercise:kettlebell-clean-and-jerk` | Kettlebell Clean and Jerk | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/kettlebell-clean-and-jerk) | [Asset](https://api.smartworkout.app/asset/video/e9b0e158-d142-4499-9c68-89cd63e8c621.mp4) | video/mp4 · available | `/exercises/kettlebell-clean-and-jerk.mp4` | 958168 | Ready |
| `builtin-exercise:kettlebell-deadlift` | Kettlebell Deadlift | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/kettlebell-deadlift) | [Asset](https://api.smartworkout.app/asset/video/67f07dcc-7ac6-4b77-bfc1-270e1befdbf2.mp4) | video/mp4 · available | `/exercises/kettlebell-deadlift.mp4` | 1005237 | Ready |
| `builtin-exercise:kettlebell-goblet-squat` | Kettlebell Goblet Squat | Gluteal | [Page](https://smartworkout.app/en/exercise-library/gluteus/kettlebell-goblet-squat) | [Asset](https://api.smartworkout.app/asset/video/9c1f8ba5-796d-4e11-882d-e769eae4a705.mp4) | video/mp4 · available | `/exercises/kettlebell-goblet-squat.mp4` | 906922 | Ready |
| `builtin-exercise:kettlebell-one-arm-floor-press` | Kettlebell One Arm Floor Press | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/kettlebell-one-arm-floor-press) | [Asset](https://api.smartworkout.app/asset/video/2b488d23-3813-4729-b1bd-cab6f1053f8a.mp4) | video/mp4 · available | `/exercises/kettlebell-one-arm-floor-press.mp4` | 537486 | Ready |
| `builtin-exercise:kettlebell-rear-lunge` | Kettlebell Rear Lunge | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/kettlebell-rear-lunge) | [Asset](https://api.smartworkout.app/asset/video/170ce9ca-67d8-4e99-b75a-91f92c70928a.mp4) | video/mp4 · available | `/exercises/kettlebell-rear-lunge.mp4` | 1335142 | Ready |
| `builtin-exercise:kettlebell-swing` | Kettlebell Swing | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/kettlebell-swing) | [Asset](https://api.smartworkout.app/asset/video/91af3147-3eda-47d5-9fcf-cb58713eb7a4.mp4) | video/mp4 · available | `/exercises/kettlebell-swing.mp4` | 690783 | Ready |
| `builtin-exercise:kettlebell-windmill` | Kettlebell Windmill | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/kettlebell-windmill) | [Asset](https://api.smartworkout.app/asset/video/7bb5a812-f0c3-42bc-99c3-595ca64efdf3.mp4) | video/mp4 · available | `/exercises/kettlebell-windmill.mp4` | 926977 | Ready |
| `builtin-exercise:kickboxing` | Kickboxing | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/kickboxing) | [Asset](https://api.smartworkout.app/asset/video/17ddef3e-7230-4232-aa61-70969f7575b5.mp4) | video/mp4 · available | `/exercises/kickboxing.mp4` | 687028 | Ready |
| `builtin-exercise:knee-close-grip-push-up` | Knee Close Grip Push-Up | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/knee-close-grip-push-up) | [Asset](https://api.smartworkout.app/asset/video/91525fb7-a6b4-4b9e-844c-dfa088d3a185.mp4) | video/mp4 · available | `/exercises/knee-close-grip-push-up.mp4` | 1502579 | Ready |
| `builtin-exercise:knee-diamond-push-up` | Knee Diamond Push-Up | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/knee-diamond-push-up) | [Asset](https://api.smartworkout.app/asset/video/c59c0ddb-a29e-4cdc-b760-11d01605085a.mp4) | video/mp4 · available | `/exercises/knee-diamond-push-up.mp4` | 1177403 | Ready |
| `builtin-exercise:knee-push-up` | Knee Push-Up | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/knee-push-up) | [Asset](https://api.smartworkout.app/asset/video/fff998bd-23b3-4735-ab7d-00a59df0e026.mp4) | video/mp4 · available | `/exercises/knee-push-up.mp4` | 1126869 | Ready |
| `builtin-exercise:knee-raise-ab-coaster` | Knee Raise Ab Coaster | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/knee-raise-ab-coaster) | [Asset](https://api.smartworkout.app/asset/video/1e4902a0-05fc-4ab0-8fcd-5e745eb096af.mp4) | video/mp4 · available | `/exercises/knee-raise-ab-coaster.mp4` | 856441 | Ready |
| `builtin-exercise:knee-to-chest-stretch` | Knee To Chest Stretch | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/knee-to-chest-stretch) | [Asset](https://api.smartworkout.app/asset/video/57e3218c-4482-438f-8177-2812406c9f8d.mp4) | video/mp4 · available | `/exercises/knee-to-chest-stretch.mp4` | 810880 | Ready |
| `builtin-exercise:knee-tuck-crunch` | Knee Tuck Crunch | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/knee-tuck-crunch) | [Asset](https://api.smartworkout.app/asset/video/04b6b7aa-fb63-4aee-9d87-e964666721b0.mp4) | video/mp4 · available | `/exercises/knee-tuck-crunch.mp4` | 919735 | Ready |
| `builtin-exercise:kneeling-back-rotation-stretch` | Kneeling Back Rotation Stretch | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/kneeling-back-rotation-stretch) | [Asset](https://api.smartworkout.app/asset/video/2ca62145-0acb-4a6f-8de5-657f9a538d72.mp4) | video/mp4 · available | `/exercises/kneeling-back-rotation-stretch.mp4` | 972026 | Ready |
| `builtin-exercise:kneeling-band-abs-crunches` | Kneeling Band Abs Crunches | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/kneeling-band-abs-crunches) | [Asset](https://api.smartworkout.app/asset/video/9443f9d6-ef9a-4a30-8869-5ca5e3f21c66.mp4) | video/mp4 · available | `/exercises/kneeling-band-abs-crunches.mp4` | 750555 | Ready |
| `builtin-exercise:kneeling-cable-abs-crunches` | Kneeling Cable Abs Crunches | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/kneeling-cable-abs-crunches) | [Asset](https://api.smartworkout.app/asset/video/4ca6d0de-4211-4c29-bfc0-41436e227111.mp4) | video/mp4 · available | `/exercises/kneeling-cable-abs-crunches.mp4` | 819760 | Ready |
| `builtin-exercise:kneeling-cable-lat-pulldown` | Kneeling Cable Lat Pulldown | Back | [Page](https://smartworkout.app/en/exercise-library/back/kneeling-cable-lat-pulldown) | [Asset](https://api.smartworkout.app/asset/video/5523d7d6-ed3e-463c-a7ea-2d7b4795ea19.mp4) | video/mp4 · available | `/exercises/kneeling-cable-lat-pulldown.mp4` | 641690 | Ready |
| `builtin-exercise:kneeling-hamstring-stretch` | Kneeling Hamstring Stretch | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/kneeling-hamstring-stretch) | [Asset](https://api.smartworkout.app/asset/video/c5aa8734-8668-4089-b902-64a94a538622.mp4) | video/mp4 · available | `/exercises/kneeling-hamstring-stretch.mp4` | 984020 | Ready |
| `builtin-exercise:kneeling-resistance-band-glute-kickback` | Kneeling Resistance Band Glute Kickback | Gluteal | [Page](https://smartworkout.app/en/exercise-library/gluteus/kneeling-resistance-band-glute-kickback) | [Asset](https://api.smartworkout.app/asset/video/e2471444-388e-4896-aa87-42efb47ad828.mp4) | video/mp4 · available | `/exercises/kneeling-resistance-band-glute-kickback.mp4` | 1269719 | Ready |
| `builtin-exercise:kneeling-wide-push-up` | Kneeling Wide Push-Up | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/kneeling-wide-push-up) | [Asset](https://api.smartworkout.app/asset/video/4d768221-a68a-489d-8422-a8db511d94bb.mp4) | video/mp4 · available | `/exercises/kneeling-wide-push-up.mp4` | 1086241 | Ready |
| `builtin-exercise:knuckle-push-up` | Knuckle Push-Up | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/knuckle-push-up) | [Asset](https://api.smartworkout.app/asset/video/cee320e7-68cd-4b50-86f8-ab7dea36a6b6.mp4) | video/mp4 · available | `/exercises/knuckle-push-up.mp4` | 1301351 | Ready |
| `builtin-exercise:korean-dip` | Korean Dip | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/korean-dip) | [Asset](https://api.smartworkout.app/asset/video/8882f5e4-8e0a-4d6a-8555-9614262afcac.mp4) | video/mp4 · available | `/exercises/korean-dip.mp4` | 654189 | Ready |
| `builtin-exercise:l-pull-up` | L Pull-Up | Back | [Page](https://smartworkout.app/en/exercise-library/back/l-pull-up) | [Asset](https://api.smartworkout.app/asset/video/5091ab03-7171-41b4-93cc-eca01e7d493f.mp4) | video/mp4 · available | `/exercises/l-pull-up.mp4` | 716648 | Ready |
| `builtin-exercise:l-sit` | L-Sit | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/l-sit) | [Asset](https://api.smartworkout.app/asset/video/29282a78-819d-409c-9fa5-b2734e2f8138.mp4) | video/mp4 · available | `/exercises/l-sit.mp4` | 1069948 | Ready |
| `builtin-exercise:landmine-lateral-raise` | Landmine Lateral Raise | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/landmine-lateral-raise) | [Asset](https://api.smartworkout.app/asset/video/570e7a91-759e-4b0f-8d2a-072b2e3350c3.mp4) | video/mp4 · available | `/exercises/landmine-lateral-raise.mp4` | 689009 | Ready |
| `builtin-exercise:landmine-press` | Landmine Press | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/landmine-press) | [Asset](https://api.smartworkout.app/asset/video/9a878d90-26a2-4663-acc4-cd7f0a99b7e9.mp4) | video/mp4 · available | `/exercises/landmine-press.mp4` | 657135 | Ready |
| `builtin-exercise:landmine-squat` | Landmine Squat | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/landmine-squat) | [Asset](https://api.smartworkout.app/asset/video/b236976c-f082-4b02-b47a-670d925d8d81.mp4) | video/mp4 · available | `/exercises/landmine-squat.mp4` | 897180 | Ready |
| `builtin-exercise:landmine-twist` | Landmine Twist | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/landmine-twist) | [Asset](https://api.smartworkout.app/asset/video/c85f1bc8-435b-464b-8a66-bc6cb6d3014c.mp4) | video/mp4 · available | `/exercises/landmine-twist.mp4` | 1338250 | Ready |
| `builtin-exercise:lat-pulldown-machine` | Lat Pulldown Machine | Back | [Page](https://smartworkout.app/en/exercise-library/back/lat-pulldown-machine) | [Asset](https://api.smartworkout.app/asset/video/f72099c0-fc80-45d0-b174-8fdbc03f7d57.mp4) | video/mp4 · available | `/exercises/lat-pulldown-machine.mp4` | 816155 | Ready |
| `builtin-exercise:lateral-monster-walk` | Lateral Monster Walk | Gluteal | [Page](https://smartworkout.app/en/exercise-library/gluteus/lateral-monster-walk) | [Asset](https://api.smartworkout.app/asset/video/57c46878-e761-48a4-a216-b3d345d56a24.mp4) | video/mp4 · available | `/exercises/lateral-monster-walk.mp4` | 2539188 | Ready |
| `builtin-exercise:lateral-to-front-raise` | Lateral to Front Raise | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/lateral-to-front-raise) | [Asset](https://api.smartworkout.app/asset/video/327a5be8-fa67-4555-8291-fbfad2b9fd53.mp4) | video/mp4 · available | `/exercises/lateral-to-front-raise.mp4` | 773289 | Ready |
| `builtin-exercise:lean-planche` | Lean Planche | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/lean-planche) | [Asset](https://api.smartworkout.app/asset/video/c67d256e-815d-4bb4-89df-a6eff0632d35.mp4) | video/mp4 · available | `/exercises/lean-planche.mp4` | 789606 | Ready |
| `builtin-exercise:leg-in-and-out` | Leg In and Out | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/leg-in-and-out) | [Asset](https://api.smartworkout.app/asset/video/baa54657-a374-4b05-ae76-6961022ef3d8.mp4) | video/mp4 · available | `/exercises/leg-in-and-out.mp4` | 1471496 | Ready |
| `builtin-exercise:leg-press` | Leg Press | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/leg-press) | [Asset](https://api.smartworkout.app/asset/video/8632c417-b02c-4dc4-8adb-eb1a02646ab9.mp4) | video/mp4 · available | `/exercises/leg-press.mp4` | 843460 | Ready |
| `builtin-exercise:leg-press-wide-stance` | Leg Press Wide Stance | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/leg-press-wide-stance) | [Asset](https://api.smartworkout.app/asset/video/b9dc9c07-54d1-41a6-a25a-5cff3e9be2d6.mp4) | video/mp4 · available | `/exercises/leg-press-wide-stance.mp4` | 866407 | Ready |
| `builtin-exercise:leg-swings` | Leg Swings | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/leg-swings) | [Asset](https://api.smartworkout.app/asset/video/6a8ed0fc-fc81-4b8e-b311-8fa64a17786b.mp4) | video/mp4 · available | `/exercises/leg-swings.mp4` | 691594 | Ready |
| `builtin-exercise:lever-back-extension` | Lever Back Extension | Back | [Page](https://smartworkout.app/en/exercise-library/back/lever-back-extension) | [Asset](https://api.smartworkout.app/asset/video/8ff73f6a-aa27-44c3-82a1-e0dc83dc1634.mp4) | video/mp4 · available | `/exercises/lever-back-extension.mp4` | 747070 | Ready |
| `builtin-exercise:lever-high-row` | Lever High Row | Back | [Page](https://smartworkout.app/en/exercise-library/back/lever-high-row) | [Asset](https://api.smartworkout.app/asset/video/7cfa395b-4476-4b5f-9e02-69edc3aecaea.mp4) | video/mp4 · available | `/exercises/lever-high-row.mp4` | 782039 | Ready |
| `builtin-exercise:lever-horizontal-leg-press` | Lever Horizontal Leg Press | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/lever-horizontal-leg-press) | [Asset](https://api.smartworkout.app/asset/video/1e80d7cd-efae-4b40-8254-1e57e48e9a53.mp4) | video/mp4 · available | `/exercises/lever-horizontal-leg-press.mp4` | 788441 | Ready |
| `builtin-exercise:lever-low-row` | Lever Low Row | Back | [Page](https://smartworkout.app/en/exercise-library/back/lever-low-row) | [Asset](https://api.smartworkout.app/asset/video/6c516964-9cfe-4217-a70e-f9267088708f.mp4) | video/mp4 · available | `/exercises/lever-low-row.mp4` | 712025 | Ready |
| `builtin-exercise:lever-seated-hammer-grip-shoulder-press` | Lever Seated Hammer Grip Shoulder Press | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/lever-seated-hammer-grip-shoulder-press) | [Asset](https://api.smartworkout.app/asset/video/8bc8c1fc-8a85-4313-a7dd-0297e4c328a4.mp4) | video/mp4 · available | `/exercises/lever-seated-hammer-grip-shoulder-press.mp4` | 800857 | Ready |
| `builtin-exercise:lizard-pose` | Lizard Pose | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/lizard-pose) | [Asset](https://api.smartworkout.app/asset/video/53d0ec3b-e618-4e94-9ccb-aaba16734295.mp4) | video/mp4 · available | `/exercises/lizard-pose.mp4` | 561860 | Ready |
| `builtin-exercise:low-cable-horizontal-pallof-press` | Low Cable Horizontal Pallof Press | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/low-cable-horizontal-pallof-press) | [Asset](https://api.smartworkout.app/asset/video/e84b6a2d-35b3-4fc4-aaf8-e4a11482f829.mp4) | video/mp4 · available | `/exercises/low-cable-horizontal-pallof-press.mp4` | 593741 | Ready |
| `builtin-exercise:low-cable-incline-bench-press` | Low Cable Incline Bench Press | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/low-cable-incline-bench-press) | [Asset](https://api.smartworkout.app/asset/video/2e44a1be-2421-4f9a-a706-ad09c60dc824.mp4) | video/mp4 · available | `/exercises/low-cable-incline-bench-press.mp4` | 754141 | Ready |
| `builtin-exercise:low-high-cable-chest-fly` | Low High Cable Chest Fly | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/low-high-cable-chest-fly) | [Asset](https://api.smartworkout.app/asset/video/3a7504dc-28f2-49ca-85c2-fb808c2e1607.mp4) | video/mp4 · available | `/exercises/low-high-cable-chest-fly.mp4` | 817567 | Ready |
| `builtin-exercise:low-incline-dumbbell-fly` | Low Incline Dumbbell Fly | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/low-incline-dumbbell-fly) | [Asset](https://api.smartworkout.app/asset/video/168d5fa2-455a-4bf2-9b1e-9a6dbe85a820.mp4) | video/mp4 · available | `/exercises/low-incline-dumbbell-fly.mp4` | 748477 | Ready |
| `builtin-exercise:lowbar-squat` | Lowbar Squat | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/lowbar-squat) | [Asset](https://api.smartworkout.app/asset/video/dd7de2a6-6559-4713-b29f-ad483a3af668.mp4) | video/mp4 · available | `/exercises/lowbar-squat.mp4` | 960952 | Ready |
| `builtin-exercise:lunge-stretch` | Lunge Stretch | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/lunge-stretch) | [Asset](https://api.smartworkout.app/asset/video/18f89a97-4a1b-4549-b556-298af4d7da42.mp4) | video/mp4 · available | `/exercises/lunge-stretch.mp4` | 737261 | Ready |
| `builtin-exercise:lunges` | Lunges | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/lunges) | [Asset](https://api.smartworkout.app/asset/video/ff14232b-8cf5-4d5f-baa6-3a464e6efe58.mp4) | video/mp4 · available | `/exercises/lunges.mp4` | 1788478 | Ready |
| `builtin-exercise:lying-barbell-triceps-extension-skullcrusher` | Lying Barbell Triceps Extension (Skullcrusher) | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/lying-barbell-triceps-extension-(skullcrusher)) | [Asset](https://api.smartworkout.app/asset/video/99998fe7-3d68-480b-b2e2-720fe74fc015.mp4) | video/mp4 · available | `/exercises/lying-barbell-triceps-extension-skullcrusher.mp4` | 749273 | Ready |
| `builtin-exercise:lying-butterfly-pose` | Lying Butterfly Pose | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/lying-butterfly-pose) | [Asset](https://api.smartworkout.app/asset/video/fcce0e2d-916f-43cb-a6e4-1181c65dc9fc.mp4) | video/mp4 · available | `/exercises/lying-butterfly-pose.mp4` | 1232278 | Ready |
| `builtin-exercise:lying-cable-face-pull` | Lying Cable Face Pull | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/lying-cable-face-pull) | [Asset](https://api.smartworkout.app/asset/video/1e4dadfd-a9dd-4771-a27b-669b3b5c4651.mp4) | video/mp4 · available | `/exercises/lying-cable-face-pull.mp4` | 566908 | Ready |
| `builtin-exercise:lying-cable-fly` | Lying Cable Fly | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/lying-cable-fly) | [Asset](https://api.smartworkout.app/asset/video/9efa8ada-44a1-4cc6-a808-6c71704992ab.mp4) | video/mp4 · available | `/exercises/lying-cable-fly.mp4` | 736050 | Ready |
| `builtin-exercise:lying-chest-press` | Lying Chest Press | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/lying-chest-press) | [Asset](https://api.smartworkout.app/asset/video/b5d8e176-d465-4f57-97ec-912fdcf2b000.mp4) | video/mp4 · available | `/exercises/lying-chest-press.mp4` | 960208 | Ready |
| `builtin-exercise:lying-cross-lateral-cable-fly` | Lying Cross Lateral Cable Fly | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/lying-cross-lateral-cable-fly) | [Asset](https://api.smartworkout.app/asset/video/8433a809-e3b3-421b-acbc-6ac8d2369b72.mp4) | video/mp4 · available | `/exercises/lying-cross-lateral-cable-fly.mp4` | 679594 | Ready |
| `builtin-exercise:lying-ez-bar-triceps-extension` | Lying EZ-Bar Triceps Extension | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/lying-ez-bar-triceps-extension) | [Asset](https://api.smartworkout.app/asset/video/4cafc40d-554d-4dcc-9d18-f2f6c6752dc1.mp4) | video/mp4 · available | `/exercises/lying-ez-bar-triceps-extension.mp4` | 769916 | Ready |
| `builtin-exercise:lying-knee-to-chest-stretch` | Lying Knee To Chest Stretch | Gluteal | [Page](https://smartworkout.app/en/exercise-library/gluteus/lying-knee-to-chest-stretch) | [Asset](https://api.smartworkout.app/asset/video/4f0d0450-0e72-47dc-80ab-df9b3fe6b566.mp4) | video/mp4 · available | `/exercises/lying-knee-to-chest-stretch.mp4` | 1457880 | Ready |
| `builtin-exercise:lying-quadriceps-stretch` | Lying Quadriceps Stretch | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/lying-quadriceps-stretch) | [Asset](https://api.smartworkout.app/asset/video/5e379c49-8da6-4d2b-9b42-613f5e87fc4c.mp4) | video/mp4 · available | `/exercises/lying-quadriceps-stretch.mp4` | 765124 | Ready |
| `builtin-exercise:lying-spinal-twist` | Lying Spinal Twist | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/lying-spinal-twist) | [Asset](https://api.smartworkout.app/asset/video/176dacdc-1c83-4066-b89d-379f1ed904a6.mp4) | video/mp4 · available | `/exercises/lying-spinal-twist.mp4` | 1318637 | Ready |
| `builtin-exercise:lying-stright-leg-raise` | Lying Stright Leg Raise | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/lying-stright-leg-raise) | [Asset](https://api.smartworkout.app/asset/video/869b2894-d82f-4f8a-b393-d658a2f6617d.mp4) | video/mp4 · available | `/exercises/lying-stright-leg-raise.mp4` | 1077363 | Ready |
| `builtin-exercise:machine-abdominal-crunches` | Machine Abdominal Crunches | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/machine-abdominal-crunches) | [Asset](https://api.smartworkout.app/asset/video/9cfb3911-1f0e-4377-bf77-57b509c1b924.mp4) | video/mp4 · available | `/exercises/machine-abdominal-crunches.mp4` | 1005415 | Ready |
| `builtin-exercise:machine-belt-squat` | Machine Belt Squat | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/machine-belt-squat) | [Asset](https://api.smartworkout.app/asset/video/92d0326f-da30-40f4-a872-25166fb02fa7.mp4) | video/mp4 · available | `/exercises/machine-belt-squat.mp4` | 994819 | Ready |
| `builtin-exercise:machine-biceps-curl` | Machine Biceps Curl | Biceps | [Page](https://smartworkout.app/en/exercise-library/biceps/machine-biceps-curl) | [Asset](https://api.smartworkout.app/asset/video/c3b131e2-1bf2-45ea-8398-1c69dbdf1ce7.mp4) | video/mp4 · available | `/exercises/machine-biceps-curl.mp4` | 709079 | Ready |
| `builtin-exercise:machine-calf-raises` | Machine Calf Raises | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/machine-calf-raises) | [Asset](https://api.smartworkout.app/asset/video/679ce80f-6359-4b23-8e21-b385445fc7fc.mp4) | video/mp4 · available | `/exercises/machine-calf-raises.mp4` | 577770 | Ready |
| `builtin-exercise:machine-chest-fly` | Machine Chest Fly | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/machine-chest-fly) | [Asset](https://api.smartworkout.app/asset/video/cbacfcac-1e0c-45f5-8003-463e2e92af4a.mp4) | video/mp4 · available | `/exercises/machine-chest-fly.mp4` | 805600 | Ready |
| `builtin-exercise:machine-chest-press` | Machine Chest Press | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/machine-chest-press) | [Asset](https://api.smartworkout.app/asset/video/1ce6db8f-0aec-4a97-b43c-4ee15e506486.mp4) | video/mp4 · available | `/exercises/machine-chest-press.mp4` | 866685 | Ready |
| `builtin-exercise:machine-chest-press-hammer-grip` | Machine Chest Press Hammer Grip | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/machine-chest-press-hammer-grip) | [Asset](https://api.smartworkout.app/asset/video/3244b1e1-06ca-4632-8c38-9c325835ba9d.mp4) | video/mp4 · available | `/exercises/machine-chest-press-hammer-grip.mp4` | 951864 | Ready |
| `builtin-exercise:machine-hack-squat` | Machine Hack Squat | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/machine-hack-squat) | [Asset](https://api.smartworkout.app/asset/video/2cbe0e3d-962f-4a51-a4ff-c9df0c1ff1d4.mp4) | video/mp4 · available | `/exercises/machine-hack-squat.mp4` | 1013128 | Ready |
| `builtin-exercise:machine-hip-thrust` | Machine Hip Thrust | Gluteal | [Page](https://smartworkout.app/en/exercise-library/gluteus/machine-hip-thrust) | [Asset](https://api.smartworkout.app/asset/video/a4fd5689-0e83-4c76-86a5-6210d445ccea.mp4) | video/mp4 · available | `/exercises/machine-hip-thrust.mp4` | 1233382 | Ready |
| `builtin-exercise:machine-lateral-raise` | Machine Lateral Raise | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/machine-lateral-raise) | [Asset](https://api.smartworkout.app/asset/video/269bac17-0419-4bcf-ade9-2ea9f50f4278.mp4) | video/mp4 · available | `/exercises/machine-lateral-raise.mp4` | 747082 | Ready |
| `builtin-exercise:machine-lying-crunch` | Machine Lying Crunch | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/machine-lying-crunch) | [Asset](https://api.smartworkout.app/asset/video/915f5116-ccc2-4bad-8f0a-bf8a281427b8.mp4) | video/mp4 · available | `/exercises/machine-lying-crunch.mp4` | 828705 | Ready |
| `builtin-exercise:machine-preacher-curl` | Machine Preacher Curl | Biceps | [Page](https://smartworkout.app/en/exercise-library/biceps/machine-preacher-curl) | [Asset](https://api.smartworkout.app/asset/video/adeb3342-c693-46f9-899c-77824d265e42.mp4) | video/mp4 · available | `/exercises/machine-preacher-curl.mp4` | 775214 | Ready |
| `builtin-exercise:machine-pullover` | Machine Pullover | Back | [Page](https://smartworkout.app/en/exercise-library/back/machine-pullover) | [Asset](https://api.smartworkout.app/asset/video/c0d47a85-1727-4c38-b01a-9d59fcee99d2.mp4) | video/mp4 · available | `/exercises/machine-pullover.mp4` | 1140754 | Ready |
| `builtin-exercise:machine-reverse-flyes` | Machine Reverse Flyes | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/machine-reverse-flyes) | [Asset](https://api.smartworkout.app/asset/video/8fbdcdbf-aec7-4d3a-8e45-b34615e25c4f.mp4) | video/mp4 · available | `/exercises/machine-reverse-flyes.mp4` | 844807 | Ready |
| `builtin-exercise:machine-reverse-hack-squat` | Machine Reverse Hack Squat | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/machine-reverse-hack-squat) | [Asset](https://api.smartworkout.app/asset/video/163a1ff0-9c1a-4d1c-8152-74af5899ddda.mp4) | video/mp4 · available | `/exercises/machine-reverse-hack-squat.mp4` | 988101 | Ready |
| `builtin-exercise:machine-shoulder-press` | Machine Shoulder Press | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/machine-shoulder-press) | [Asset](https://api.smartworkout.app/asset/video/2d1009a6-6a5b-402b-97ff-f30cb3677cce.mp4) | video/mp4 · available | `/exercises/machine-shoulder-press.mp4` | 852179 | Ready |
| `builtin-exercise:machine-shrugs` | Machine Shrugs | Back | [Page](https://smartworkout.app/en/exercise-library/back/machine-shrugs) | [Asset](https://api.smartworkout.app/asset/video/6e768e70-2b06-414e-a287-84656bb3b0a2.mp4) | video/mp4 · available | `/exercises/machine-shrugs.mp4` | 456817 | Ready |
| `builtin-exercise:machine-triceps-extension` | Machine Triceps Extension | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/machine-triceps-extension) | [Asset](https://api.smartworkout.app/asset/video/0fcf2043-dd4a-4582-b886-850671d55e1f.mp4) | video/mp4 · available | `/exercises/machine-triceps-extension.mp4` | 755026 | Ready |
| `builtin-exercise:med-ball-russian-twist` | Med Ball Russian twist | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/med-ball-russian-twist) | [Asset](https://api.smartworkout.app/asset/video/c5d39f15-cf79-441b-90ec-6c4a1eb29de7.mp4) | video/mp4 · available | `/exercises/med-ball-russian-twist.mp4` | 1327947 | Ready |
| `builtin-exercise:medicine-ball-slam` | Medicine Ball Slam | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/medicine-ball-slam) | [Asset](https://api.smartworkout.app/asset/video/1a9fa2c7-31ff-49c3-a0e6-821cd78aa2f4.mp4) | video/mp4 · available | `/exercises/medicine-ball-slam.mp4` | 535562 | Ready |
| `builtin-exercise:mini-band-glute-bridge` | Mini Band Glute Bridge | Gluteal | [Page](https://smartworkout.app/en/exercise-library/gluteus/mini-band-glute-bridge) | [Asset](https://api.smartworkout.app/asset/video/82830b77-6737-455f-b690-62f724d00027.mp4) | video/mp4 · available | `/exercises/mini-band-glute-bridge.mp4` | 1005992 | Ready |
| `builtin-exercise:mountain-climber` | Mountain climber | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/mountain-climber) | [Asset](https://api.smartworkout.app/asset/video/1ea4065d-8785-4c13-9fd5-a5bdf409b6b7.mp4) | video/mp4 · available | `/exercises/mountain-climber.mp4` | 2437835 | Ready |
| `builtin-exercise:muscle-up` | Muscle-up | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/muscle-up) | [Asset](https://api.smartworkout.app/asset/video/96a8c6af-7506-4513-8901-e9a8190c1ef9.mp4) | video/mp4 · available | `/exercises/muscle-up.mp4` | 390589 | Ready |
| `builtin-exercise:narrow-grip-australian-pull-up-with-rings` | Narrow Grip Australian Pull-Up With Rings | Back | [Page](https://smartworkout.app/en/exercise-library/back/narrow-grip-australian-pull-up-with-rings) | [Asset](https://api.smartworkout.app/asset/video/b5e7b51b-e8a8-46ec-9fcf-d3b03675c072.mp4) | video/mp4 · available | `/exercises/narrow-grip-australian-pull-up-with-rings.mp4` | 1143809 | Ready |
| `builtin-exercise:narrow-stance-45-degree-leg-press` | Narrow Stance 45 Degree Leg Press | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/narrow-stance-45-degree-leg-press) | [Asset](https://api.smartworkout.app/asset/video/c72723a9-3c0c-4e76-b824-7e12d8631f00.mp4) | video/mp4 · available | `/exercises/narrow-stance-45-degree-leg-press.mp4` | 861424 | Ready |
| `builtin-exercise:neck-curl` | Neck Curl | Back | [Page](https://smartworkout.app/en/exercise-library/back/neck-curl) | [Asset](https://api.smartworkout.app/asset/video/ab8b948f-2b47-4253-98a1-e01d75af17f6.mp4) | video/mp4 · available | `/exercises/neck-curl.mp4` | 993367 | Ready |
| `builtin-exercise:neck-side-stretch` | Neck Side Stretch | Back | [Page](https://smartworkout.app/en/exercise-library/back/neck-side-stretch) | [Asset](https://api.smartworkout.app/asset/video/f3475b7e-a710-4061-87e1-fc6e102bcaee.mp4) | video/mp4 · available | `/exercises/neck-side-stretch.mp4` | 359454 | Ready |
| `builtin-exercise:negative-pull-up` | Negative Pull-Up | Back | [Page](https://smartworkout.app/en/exercise-library/back/negative-pull-up) | [Asset](https://api.smartworkout.app/asset/video/cc92635f-b333-47fc-a0b0-87269e5399a5.mp4) | video/mp4 · available | `/exercises/negative-pull-up.mp4` | 771498 | Ready |
| `builtin-exercise:negative-push-up` | Negative Push-Up | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/negative-push-up) | [Asset](https://api.smartworkout.app/asset/video/84d6fe54-f78f-421a-928c-3268917892ea.mp4) | video/mp4 · available | `/exercises/negative-push-up.mp4` | 1308274 | Ready |
| `builtin-exercise:nordic-hamstring-curl` | Nordic Hamstring Curl | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/nordic-hamstring-curl) | [Asset](https://api.smartworkout.app/asset/video/3aace9d5-6339-4b94-a261-be5161edf60b.mp4) | video/mp4 · available | `/exercises/nordic-hamstring-curl.mp4` | 1270063 | Ready |
| `builtin-exercise:one-arm-band-kneeling-lat-pulldown` | One-Arm Band Kneeling Lat Pulldown | Back | [Page](https://smartworkout.app/en/exercise-library/back/one-arm-band-kneeling-lat-pulldown) | [Asset](https://api.smartworkout.app/asset/video/57451fbf-821a-4dbe-8dd4-c3761d0499d6.mp4) | video/mp4 · available | `/exercises/one-arm-band-kneeling-lat-pulldown.mp4` | 505361 | Ready |
| `builtin-exercise:one-arm-cable-bent-over-lateral-raise` | One-Arm Cable Bent Over Lateral Raise | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/one-arm-cable-bent-over-lateral-raise) | [Asset](https://api.smartworkout.app/asset/video/8c2423b5-7d32-4235-9c8b-2d214ad70819.mp4) | video/mp4 · available | `/exercises/one-arm-cable-bent-over-lateral-raise.mp4` | 727805 | Ready |
| `builtin-exercise:one-arm-cable-biceps-curl` | One-Arm Cable Biceps Curl | Biceps | [Page](https://smartworkout.app/en/exercise-library/biceps/one-arm-cable-biceps-curl) | [Asset](https://api.smartworkout.app/asset/video/eeb0b646-1ac9-4250-9207-432cc4aeb3df.mp4) | video/mp4 · available | `/exercises/one-arm-cable-biceps-curl.mp4` | 490842 | Ready |
| `builtin-exercise:one-arm-cable-cross-body-triceps-extension` | One-Arm Cable Cross Body Triceps Extension | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/one-arm-cable-cross-body-triceps-extension) | [Asset](https://api.smartworkout.app/asset/video/c18ff896-9af3-4b4e-a821-a5034c0b6e87.mp4) | video/mp4 · available | `/exercises/one-arm-cable-cross-body-triceps-extension.mp4` | 385193 | Ready |
| `builtin-exercise:one-arm-cable-fly` | One-Arm Cable Fly | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/one-arm-cable-fly) | [Asset](https://api.smartworkout.app/asset/video/d685bb1f-4c4d-42b7-bae9-52adb3ae6a13.mp4) | video/mp4 · available | `/exercises/one-arm-cable-fly.mp4` | 540787 | Ready |
| `builtin-exercise:one-arm-cable-front-raise` | One-Arm Cable Front Raise | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/one-arm-cable-front-raise) | [Asset](https://api.smartworkout.app/asset/video/d316ecca-558f-4579-83aa-9191bb1f869d.mp4) | video/mp4 · available | `/exercises/one-arm-cable-front-raise.mp4` | 642493 | Ready |
| `builtin-exercise:one-arm-cable-half-kneeling-lat-pulldown` | One-Arm Cable Half-Kneeling Lat Pulldown | Back | [Page](https://smartworkout.app/en/exercise-library/back/one-arm-cable-half-kneeling-lat-pulldown) | [Asset](https://api.smartworkout.app/asset/video/81cbd4a9-4c7c-4472-9594-64d0ec5ce5cf.mp4) | video/mp4 · available | `/exercises/one-arm-cable-half-kneeling-lat-pulldown.mp4` | 584609 | Ready |
| `builtin-exercise:one-arm-cable-lateral-raise` | One-Arm Cable Lateral Raise | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/one-arm-cable-lateral-raise) | [Asset](https://api.smartworkout.app/asset/video/42988dc5-536d-483f-a19e-c0871210d667.mp4) | video/mp4 · available | `/exercises/one-arm-cable-lateral-raise.mp4` | 531701 | Ready |
| `builtin-exercise:one-arm-cable-low-row` | One-Arm Cable Low Row | Back | [Page](https://smartworkout.app/en/exercise-library/back/one-arm-cable-low-row) | [Asset](https://api.smartworkout.app/asset/video/8f7ee107-e5d9-4556-84a1-e03e8edacffb.mp4) | video/mp4 · available | `/exercises/one-arm-cable-low-row.mp4` | 537797 | Ready |
| `builtin-exercise:one-arm-cable-pushdown` | One-Arm Cable Pushdown | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/one-arm-cable-pushdown) | [Asset](https://api.smartworkout.app/asset/video/19fc8063-2a01-4e3d-8bef-6171d3fa77b8.mp4) | video/mp4 · available | `/exercises/one-arm-cable-pushdown.mp4` | 534485 | Ready |
| `builtin-exercise:one-arm-cable-rear-delt-fly` | One-Arm Cable Rear Delt Fly | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/one-arm-cable-rear-delt-fly) | [Asset](https://api.smartworkout.app/asset/video/fe219f53-60db-412a-9141-4be90e0743ce.mp4) | video/mp4 · available | `/exercises/one-arm-cable-rear-delt-fly.mp4` | 678319 | Ready |
| `builtin-exercise:one-arm-cable-row` | One-Arm Cable Row | Back | [Page](https://smartworkout.app/en/exercise-library/back/one-arm-cable-row) | [Asset](https://api.smartworkout.app/asset/video/6374054c-8663-4847-82a9-b97716cadb15.mp4) | video/mp4 · available | `/exercises/one-arm-cable-row.mp4` | 818717 | Ready |
| `builtin-exercise:one-arm-cable-triceps-pushdown` | One-Arm Cable Triceps Pushdown | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/one-arm-cable-triceps-pushdown) | [Asset](https://api.smartworkout.app/asset/video/8d38b0fe-6ef2-4c20-9a68-16bf5787cbd5.mp4) | video/mp4 · available | `/exercises/one-arm-cable-triceps-pushdown.mp4` | 534193 | Ready |
| `builtin-exercise:one-arm-chest-supported-row-machine` | One-Arm Chest Supported Row Machine | Back | [Page](https://smartworkout.app/en/exercise-library/back/one-arm-chest-supported-row-machine) | [Asset](https://api.smartworkout.app/asset/video/2fd35a2b-ac9a-4a3b-8c68-47735e1e95d3.mp4) | video/mp4 · available | `/exercises/one-arm-chest-supported-row-machine.mp4` | 568757 | Ready |
| `builtin-exercise:one-arm-dumbbell-bench-press` | One-Arm Dumbbell Bench Press | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/one-arm-dumbbell-bench-press) | [Asset](https://api.smartworkout.app/asset/video/5ad0fcdc-a1cd-4d26-a219-d451352dc27f.mp4) | video/mp4 · available | `/exercises/one-arm-dumbbell-bench-press.mp4` | 782913 | Ready |
| `builtin-exercise:one-arm-dumbbell-bent-over-scapula-row` | One-Arm Dumbbell Bent Over Scapula Row | Back | [Page](https://smartworkout.app/en/exercise-library/back/one-arm-dumbbell-bent-over-scapula-row) | [Asset](https://api.smartworkout.app/asset/video/f1a7d50b-6a6e-46fb-9fe3-db6a742acd7a.mp4) | video/mp4 · available | `/exercises/one-arm-dumbbell-bent-over-scapula-row.mp4` | 592331 | Ready |
| `builtin-exercise:one-arm-dumbbell-incline-bench-press` | One-Arm Dumbbell Incline Bench Press | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/one-arm-dumbbell-incline-bench-press) | [Asset](https://api.smartworkout.app/asset/video/d0516cca-9186-4551-b164-994f0cacc5a1.mp4) | video/mp4 · available | `/exercises/one-arm-dumbbell-incline-bench-press.mp4` | 479098 | Ready |
| `builtin-exercise:one-arm-dumbbell-incline-lateral-raise` | One-Arm Dumbbell Incline Lateral Raise | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/one-arm-dumbbell-incline-lateral-raise) | [Asset](https://api.smartworkout.app/asset/video/5075da53-79db-48a1-b26d-800233a0e625.mp4) | video/mp4 · available | `/exercises/one-arm-dumbbell-incline-lateral-raise.mp4` | 490920 | Ready |
| `builtin-exercise:one-arm-dumbbell-lateral-raise` | One-Arm Dumbbell Lateral Raise | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/one-arm-dumbbell-lateral-raise) | [Asset](https://api.smartworkout.app/asset/video/96f2483b-893e-49d7-a94d-4a86cce11317.mp4) | video/mp4 · available | `/exercises/one-arm-dumbbell-lateral-raise.mp4` | 457900 | Ready |
| `builtin-exercise:one-arm-dumbbell-preacher-curl` | One-Arm Dumbbell Preacher Curl | Biceps | [Page](https://smartworkout.app/en/exercise-library/biceps/one-arm-dumbbell-preacher-curl) | [Asset](https://api.smartworkout.app/asset/video/01af56f1-0920-42dd-bb13-5b6bb683c1e0.mp4) | video/mp4 · available | `/exercises/one-arm-dumbbell-preacher-curl.mp4` | 529847 | Ready |
| `builtin-exercise:one-arm-dumbbell-reverse-wrist-curl` | One-Arm Dumbbell Reverse Wrist Curl | Forearms | [Page](https://smartworkout.app/en/exercise-library/forearms/one-arm-dumbbell-reverse-wrist-curl) | [Asset](https://api.smartworkout.app/asset/video/f3357eb8-2440-42ad-b5c2-b8cac7496724.mp4) | video/mp4 · available | `/exercises/one-arm-dumbbell-reverse-wrist-curl.mp4` | 454181 | Ready |
| `builtin-exercise:one-arm-dumbbell-seated-kickback` | One-Arm Dumbbell Seated Kickback | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/one-arm-dumbbell-seated-kickback) | [Asset](https://api.smartworkout.app/asset/video/83458bb0-4291-4106-839f-166dd1b0a0c9.mp4) | video/mp4 · available | `/exercises/one-arm-dumbbell-seated-kickback.mp4` | 564404 | Ready |
| `builtin-exercise:one-arm-dumbbell-supination` | One-Arm Dumbbell Supination | Forearms | [Page](https://smartworkout.app/en/exercise-library/forearms/one-arm-dumbbell-supination) | [Asset](https://api.smartworkout.app/asset/video/1f1604cb-328b-40eb-a4a0-ca44282fa4db.mp4) | video/mp4 · available | `/exercises/one-arm-dumbbell-supination.mp4` | 570068 | Ready |
| `builtin-exercise:one-arm-dumbbell-supported-bent-over-lateral-raise` | One-Arm Dumbbell Supported Bent Over Lateral Raise | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/one-arm-dumbbell-supported-bent-over-lateral-raise) | [Asset](https://api.smartworkout.app/asset/video/6ea6d8c6-4d88-4035-ac3c-cabc36b863ec.mp4) | video/mp4 · available | `/exercises/one-arm-dumbbell-supported-bent-over-lateral-raise.mp4` | 583614 | Ready |
| `builtin-exercise:one-arm-hammer-cable-curl` | One-Arm Hammer Cable Curl | Biceps | [Page](https://smartworkout.app/en/exercise-library/biceps/one-arm-hammer-cable-curl) | [Asset](https://api.smartworkout.app/asset/video/ac23cca5-fa5f-4968-a147-ca9769a13715.mp4) | video/mp4 · available | `/exercises/one-arm-hammer-cable-curl.mp4` | 585464 | Ready |
| `builtin-exercise:one-arm-high-row-cable` | One-Arm High Row Cable | Back | [Page](https://smartworkout.app/en/exercise-library/back/one-arm-high-row-cable) | [Asset](https://api.smartworkout.app/asset/video/1645ad51-28fd-4b2e-922f-8bd6246c56eb.mp4) | video/mp4 · available | `/exercises/one-arm-high-row-cable.mp4` | 538305 | Ready |
| `builtin-exercise:one-arm-high-to-low-cable-fly` | One-Arm High-to-Low Cable Fly | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/one-arm-high-to-low-cable-fly) | [Asset](https://api.smartworkout.app/asset/video/db9e7f28-0642-4cab-91c4-1ad6dde557a2.mp4) | video/mp4 · available | `/exercises/one-arm-high-to-low-cable-fly.mp4` | 627569 | Ready |
| `builtin-exercise:one-arm-katana-triceps-overhead-extension` | One-Arm Katana Triceps Overhead Extension | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/one-arm-katana-triceps-overhead-extension) | [Asset](https://api.smartworkout.app/asset/video/fff0da8d-8d65-456e-bf23-0666804f2266.mp4) | video/mp4 · available | `/exercises/one-arm-katana-triceps-overhead-extension.mp4` | 525693 | Ready |
| `builtin-exercise:one-arm-kettlebell-overhead-press` | One-Arm Kettlebell Overhead Press | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/one-arm-kettlebell-overhead-press) | [Asset](https://api.smartworkout.app/asset/video/6f0b219a-a3bc-436a-b40b-752905c17732.mp4) | video/mp4 · available | `/exercises/one-arm-kettlebell-overhead-press.mp4` | 506250 | Ready |
| `builtin-exercise:one-arm-kettlebell-swing` | One-Arm Kettlebell Swing | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/one-arm-kettlebell-swing) | [Asset](https://api.smartworkout.app/asset/video/390cc461-ae92-4030-ba59-9f253cc521f5.mp4) | video/mp4 · available | `/exercises/one-arm-kettlebell-swing.mp4` | 882126 | Ready |
| `builtin-exercise:one-arm-landmine-bent-over-row` | One-Arm Landmine Bent Over Row | Back | [Page](https://smartworkout.app/en/exercise-library/back/one-arm-landmine-bent-over-row) | [Asset](https://api.smartworkout.app/asset/video/c5d41922-e7bd-4e45-925a-bd72ccf6af7e.mp4) | video/mp4 · available | `/exercises/one-arm-landmine-bent-over-row.mp4` | 722292 | Ready |
| `builtin-exercise:one-arm-landmine-half-kneeling-shoulder-press` | One-Arm Landmine Half Kneeling Shoulder Press | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/one-arm-landmine-half-kneeling-shoulder-press) | [Asset](https://api.smartworkout.app/asset/video/b0619b94-ab4d-48b5-819a-3e3584554073.mp4) | video/mp4 · available | `/exercises/one-arm-landmine-half-kneeling-shoulder-press.mp4` | 630787 | Ready |
| `builtin-exercise:one-arm-landmine-standing-shoulder-press` | One-Arm Landmine Standing Shoulder Press | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/one-arm-landmine-standing-shoulder-press) | [Asset](https://api.smartworkout.app/asset/video/e86472b4-0880-4f2f-b46e-9a5b1888469c.mp4) | video/mp4 · available | `/exercises/one-arm-landmine-standing-shoulder-press.mp4` | 608539 | Ready |
| `builtin-exercise:one-arm-lat-pulldown` | One-Arm Lat Pulldown | Back | [Page](https://smartworkout.app/en/exercise-library/back/one-arm-lat-pulldown) | [Asset](https://api.smartworkout.app/asset/video/435cff62-b904-4149-b512-028033ac10d1.mp4) | video/mp4 · available | `/exercises/one-arm-lat-pulldown.mp4` | 616463 | Ready |
| `builtin-exercise:one-arm-lever-high-row` | One-Arm Lever High Row | Back | [Page](https://smartworkout.app/en/exercise-library/back/one-arm-lever-high-row) | [Asset](https://api.smartworkout.app/asset/video/bc9a797b-7146-4542-9a52-eb2811cbb4a7.mp4) | video/mp4 · available | `/exercises/one-arm-lever-high-row.mp4` | 787667 | Ready |
| `builtin-exercise:one-arm-low-cable-seated-row` | One-Arm Low Cable Seated Row | Back | [Page](https://smartworkout.app/en/exercise-library/back/one-arm-low-cable-seated-row) | [Asset](https://api.smartworkout.app/asset/video/b0b70c55-e720-403a-8a99-a1eef643aa75.mp4) | video/mp4 · available | `/exercises/one-arm-low-cable-seated-row.mp4` | 448414 | Ready |
| `builtin-exercise:one-arm-low-fly-dumbbell` | One-Arm Low Fly Dumbbell | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/one-arm-low-fly-dumbbell) | [Asset](https://api.smartworkout.app/asset/video/f3e26a21-190d-409d-893a-298e58c857ee.mp4) | video/mp4 · available | `/exercises/one-arm-low-fly-dumbbell.mp4` | 578588 | Ready |
| `builtin-exercise:one-arm-low-to-high-cable-fly` | One-Arm Low-to-High Cable Fly | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/one-arm-low-to-high-cable-fly) | [Asset](https://api.smartworkout.app/asset/video/ed8f531d-acde-4cc8-acc4-9796e34f42a3.mp4) | video/mp4 · available | `/exercises/one-arm-low-to-high-cable-fly.mp4` | 642766 | Ready |
| `builtin-exercise:one-arm-machine-preacher-curl` | One-Arm Machine Preacher Curl | Biceps | [Page](https://smartworkout.app/en/exercise-library/biceps/one-arm-machine-preacher-curl) | [Asset](https://api.smartworkout.app/asset/video/57ba28f4-8296-4810-a3f1-d282307c3ce6.mp4) | video/mp4 · available | `/exercises/one-arm-machine-preacher-curl.mp4` | 603036 | Ready |
| `builtin-exercise:one-arm-neutral-wrist-dumbbell-curl` | One-Arm Neutral Wrist Dumbbell Curl | Forearms | [Page](https://smartworkout.app/en/exercise-library/forearms/one-arm-neutral-wrist-dumbbell-curl) | [Asset](https://api.smartworkout.app/asset/video/40ec8b03-ff0f-4515-8c15-79da7fa1e5cc.mp4) | video/mp4 · available | `/exercises/one-arm-neutral-wrist-dumbbell-curl.mp4` | 429022 | Ready |
| `builtin-exercise:one-arm-overhead-triceps-extension` | One-Arm Overhead Triceps Extension | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/one-arm-overhead-triceps-extension) | [Asset](https://api.smartworkout.app/asset/video/790b5e86-1814-490e-85e4-6a38387db32a.mp4) | video/mp4 · available | `/exercises/one-arm-overhead-triceps-extension.mp4` | 402211 | Ready |
| `builtin-exercise:one-arm-preacher-hammer-curl` | One-Arm Preacher Hammer Curl | Biceps | [Page](https://smartworkout.app/en/exercise-library/biceps/one-arm-preacher-hammer-curl) | [Asset](https://api.smartworkout.app/asset/video/a8b129b7-e2c0-4716-954a-dda8daeb78a3.mp4) | video/mp4 · available | `/exercises/one-arm-preacher-hammer-curl.mp4` | 592121 | Ready |
| `builtin-exercise:one-arm-push-up` | One-Arm Push-Up | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/one-arm-push-up) | [Asset](https://api.smartworkout.app/asset/video/1ac58147-1cfd-40f2-9aa7-549d8b6e5365.mp4) | video/mp4 · available | `/exercises/one-arm-push-up.mp4` | 1139202 | Ready |
| `builtin-exercise:one-arm-rear-delt-fly` | One-Arm Rear Delt Fly | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/one-arm-rear-delt-fly) | [Asset](https://api.smartworkout.app/asset/video/46893e73-dd2a-4edb-b01f-f7ade86d2a81.mp4) | video/mp4 · available | `/exercises/one-arm-rear-delt-fly.mp4` | 619347 | Ready |
| `builtin-exercise:one-arm-reverse-grip-triceps-cable-pushdown` | One-Arm Reverse Grip Triceps Cable Pushdown | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/one-arm-reverse-grip-triceps-cable-pushdown) | [Asset](https://api.smartworkout.app/asset/video/339e99d5-03bb-4616-bca9-f3e24d144ba0.mp4) | video/mp4 · available | `/exercises/one-arm-reverse-grip-triceps-cable-pushdown.mp4` | 482881 | Ready |
| `builtin-exercise:one-arm-seated-row` | One-Arm Seated Row | Back | [Page](https://smartworkout.app/en/exercise-library/back/one-arm-seated-row) | [Asset](https://api.smartworkout.app/asset/video/a24c984e-1a96-4be3-ac64-a175dadb0a41.mp4) | video/mp4 · available | `/exercises/one-arm-seated-row.mp4` | 745744 | Ready |
| `builtin-exercise:one-arm-shoulder-press-dumbbell` | One-Arm Shoulder Press Dumbbell | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/one-arm-shoulder-press-dumbbell) | [Asset](https://api.smartworkout.app/asset/video/e9208fb6-7e31-4ce1-a9d9-d19bbed1e066.mp4) | video/mp4 · available | `/exercises/one-arm-shoulder-press-dumbbell.mp4` | 461043 | Ready |
| `builtin-exercise:one-arm-straight-arm-cable-lat-pulldown` | One-Arm Straight-Arm Cable Lat Pulldown | Back | [Page](https://smartworkout.app/en/exercise-library/back/one-arm-straight-arm-cable-lat-pulldown) | [Asset](https://api.smartworkout.app/asset/video/1bcaaf4e-af5f-4c76-af14-fb116c883891.mp4) | video/mp4 · available | `/exercises/one-arm-straight-arm-cable-lat-pulldown.mp4` | 494770 | Ready |
| `builtin-exercise:one-arm-triceps-cable-pushdown` | One-Arm Triceps Cable Pushdown | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/one-arm-triceps-cable-pushdown) | [Asset](https://api.smartworkout.app/asset/video/42918782-41b8-4d85-9b5e-1a0582156767.mp4) | video/mp4 · available | `/exercises/one-arm-triceps-cable-pushdown.mp4` | 457290 | Ready |
| `builtin-exercise:one-arm-wrist-curl-dumbbell` | One-Arm Wrist Curl Dumbbell | Forearms | [Page](https://smartworkout.app/en/exercise-library/forearms/one-arm-wrist-curl-dumbbell) | [Asset](https://api.smartworkout.app/asset/video/bf03dca1-be41-4535-827b-7121113da8a3.mp4) | video/mp4 · available | `/exercises/one-arm-wrist-curl-dumbbell.mp4` | 464945 | Ready |
| `builtin-exercise:opposite-side-elbow-to-knee` | Opposite side elbow to knee | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/opposite-side-elbow-to-knee) | [Asset](https://api.smartworkout.app/asset/video/799e957b-4400-4e75-a4af-f5f68e60bc9b.mp4) | video/mp4 · available | `/exercises/opposite-side-elbow-to-knee.mp4` | 1954979 | Ready |
| `builtin-exercise:overhead-band-triceps-extension` | Overhead Band Triceps Extension | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/overhead-band-triceps-extension) | [Asset](https://api.smartworkout.app/asset/video/809138b6-52e8-42ab-9b4d-7b1b2f220cfa.mp4) | video/mp4 · available | `/exercises/overhead-band-triceps-extension.mp4` | 552266 | Ready |
| `builtin-exercise:overhead-cable-triceps-exstension-bar` | Overhead Cable Triceps Exstension (bar) | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/overhead-cable-triceps-exstension-(bar)) | [Asset](https://api.smartworkout.app/asset/video/4a2ccbda-2b47-448a-985f-b57e36a24c11.mp4) | video/mp4 · available | `/exercises/overhead-cable-triceps-exstension-bar.mp4` | 570715 | Ready |
| `builtin-exercise:overhead-triceps-stretch` | Overhead Triceps Stretch | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/overhead-triceps-stretch) | [Asset](https://api.smartworkout.app/asset/video/7b1d0db3-9a6f-4602-826f-752475f3e91b.mp4) | video/mp4 · available | `/exercises/overhead-triceps-stretch.mp4` | 695610 | Ready |
| `builtin-exercise:pec-deck-chest-fly` | Pec Deck Chest Fly | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/pec-deck-chest-fly) | [Asset](https://api.smartworkout.app/asset/video/9515b29a-ad82-4b95-ae20-e8372579256d.mp4) | video/mp4 · available | `/exercises/pec-deck-chest-fly.mp4` | 729075 | Ready |
| `builtin-exercise:pendlay-row` | Pendlay Row | Back | [Page](https://smartworkout.app/en/exercise-library/back/pendlay-row) | [Asset](https://api.smartworkout.app/asset/video/9ee650ee-da32-4c46-94ea-1204b16ee962.mp4) | video/mp4 · available | `/exercises/pendlay-row.mp4` | 1044707 | Ready |
| `builtin-exercise:pigeon-pose` | Pigeon Pose | Gluteal | [Page](https://smartworkout.app/en/exercise-library/gluteus/pigeon-pose) | [Asset](https://api.smartworkout.app/asset/video/afce196e-d576-4b5c-87b1-c9dd97204b34.mp4) | video/mp4 · available | `/exercises/pigeon-pose.mp4` | 1451360 | Ready |
| `builtin-exercise:pike-push-up` | Pike Push-Up | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/pike-push-up) | [Asset](https://api.smartworkout.app/asset/video/e30b3f83-ac42-404a-9f1e-f4ab9da0e228.mp4) | video/mp4 · available | `/exercises/pike-push-up.mp4` | 1077204 | Ready |
| `builtin-exercise:pike-push-up-between-benches` | Pike Push-Up Between Benches | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/pike-push-up-between-benches) | [Asset](https://api.smartworkout.app/asset/video/18d18a5f-0715-4878-b9af-8823c041d269.mp4) | video/mp4 · available | `/exercises/pike-push-up-between-benches.mp4` | 911726 | Ready |
| `builtin-exercise:pike-push-up-between-chairs` | Pike Push-Up Between Chairs | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/pike-push-up-between-chairs) | [Asset](https://api.smartworkout.app/asset/video/6d505fd7-5436-48eb-b17f-4832a7381695.mp4) | video/mp4 · available | `/exercises/pike-push-up-between-chairs.mp4` | 999022 | Ready |
| `builtin-exercise:pike-push-up-on-bench` | Pike Push-Up On Bench | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/pike-push-up-on-bench) | [Asset](https://api.smartworkout.app/asset/video/b1903952-7b6a-4865-bdfa-05033c19f9ae.mp4) | video/mp4 · available | `/exercises/pike-push-up-on-bench.mp4` | 910999 | Ready |
| `builtin-exercise:pin-bench-press` | Pin Bench Press | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/pin-bench-press) | [Asset](https://api.smartworkout.app/asset/video/75a3fb07-2034-4dd8-8f1e-acb45105d12b.mp4) | video/mp4 · available | `/exercises/pin-bench-press.mp4` | 590463 | Ready |
| `builtin-exercise:pin-front-squat` | Pin Front Squat | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/pin-front-squat) | [Asset](https://api.smartworkout.app/asset/video/897e43d3-ded2-403f-815b-0ecad5d228c6.mp4) | video/mp4 · available | `/exercises/pin-front-squat.mp4` | 779275 | Ready |
| `builtin-exercise:pin-squat` | Pin Squat | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/pin-squat) | [Asset](https://api.smartworkout.app/asset/video/f632705a-a10d-4e48-9cd0-ae0944256913.mp4) | video/mp4 · available | `/exercises/pin-squat.mp4` | 765469 | Ready |
| `builtin-exercise:pistol-box-squat` | Pistol Box Squat | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/pistol-box-squat) | [Asset](https://api.smartworkout.app/asset/video/689f7f43-68bf-470f-a733-7597718ef52b.mp4) | video/mp4 · available | `/exercises/pistol-box-squat.mp4` | 907547 | Ready |
| `builtin-exercise:pistol-squat` | Pistol Squat | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/pistol-squat) | [Asset](https://api.smartworkout.app/asset/video/306eeb62-cf8d-492d-831f-53b98243af08.mp4) | video/mp4 · available | `/exercises/pistol-squat.mp4` | 925017 | Ready |
| `builtin-exercise:planche-dips` | Planche Dips | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/planche-dips) | [Asset](https://api.smartworkout.app/asset/video/c9e11a50-3f0a-4fce-a4cb-deb79ba7dec0.mp4) | video/mp4 · available | `/exercises/planche-dips.mp4` | 677462 | Ready |
| `builtin-exercise:planche-push-up` | Planche Push-Up | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/planche-push-up) | [Asset](https://api.smartworkout.app/asset/video/ceae4970-eabc-447e-a917-42f96888e7ff.mp4) | video/mp4 · available | `/exercises/planche-push-up.mp4` | 1382662 | Ready |
| `builtin-exercise:plank` | Plank | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/plank) | [Asset](https://api.smartworkout.app/asset/video/8e4dddcc-b7e2-4961-8e82-ef54774734fb.mp4) | video/mp4 · available | `/exercises/plank.mp4` | 617141 | Ready |
| `builtin-exercise:plate-bus-driver` | Plate Bus Driver | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/plate-bus-driver) | [Asset](https://api.smartworkout.app/asset/video/b3fa888f-f539-4bd1-a51b-d4c87627dc19.mp4) | video/mp4 · available | `/exercises/plate-bus-driver.mp4` | 657857 | Ready |
| `builtin-exercise:plate-front-raise` | Plate Front Raise | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/plate-front-raise) | [Asset](https://api.smartworkout.app/asset/video/353212ef-2c5c-4c1a-a0d2-f9cf466daf42.mp4) | video/mp4 · available | `/exercises/plate-front-raise.mp4` | 647515 | Ready |
| `builtin-exercise:plate-front-raise-drive` | Plate Front Raise Drive | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/plate-front-raise-drive) | [Asset](https://api.smartworkout.app/asset/video/f80b8b3f-58a4-4e7e-8c22-8269b6a7aa52.mp4) | video/mp4 · available | `/exercises/plate-front-raise-drive.mp4` | 1266352 | Ready |
| `builtin-exercise:plyo-side-lunge` | Plyo side lunge | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/plyo-side-lunge) | [Asset](https://api.smartworkout.app/asset/video/450e635c-15b7-4186-bf56-a5a39dc86c75.mp4) | video/mp4 · available | `/exercises/plyo-side-lunge.mp4` | 2314234 | Ready |
| `builtin-exercise:pogo-jumps` | Pogo Jumps | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/pogo-jumps) | [Asset](https://api.smartworkout.app/asset/video/6fdb44c7-988a-4dc4-b196-7c2ab75bc595.mp4) | video/mp4 · available | `/exercises/pogo-jumps.mp4` | 451856 | Ready |
| `builtin-exercise:poliquin-flyes` | Poliquin Flyes | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/poliquin-flyes) | [Asset](https://api.smartworkout.app/asset/video/3f9de872-5fd1-44cb-a0f9-99ee1faa226c.mp4) | video/mp4 · available | `/exercises/poliquin-flyes.mp4` | 974878 | Ready |
| `builtin-exercise:poliquin-step-up` | Poliquin Step-Up | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/poliquin-step-up) | [Asset](https://api.smartworkout.app/asset/video/44003b37-2dce-4a73-968e-14a62a63ea0d.mp4) | video/mp4 · available | `/exercises/poliquin-step-up.mp4` | 580546 | Ready |
| `builtin-exercise:powell-raise` | Powell Raise | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/powell-raise) | [Asset](https://api.smartworkout.app/asset/video/7ff60930-6e19-4c76-a671-a3db696cd993.mp4) | video/mp4 · available | `/exercises/powell-raise.mp4` | 546032 | Ready |
| `builtin-exercise:power-clean` | Power Clean | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/power-clean) | [Asset](https://api.smartworkout.app/asset/video/651038e5-362b-44e2-a8db-6462c8169e98.mp4) | video/mp4 · available | `/exercises/power-clean.mp4` | 1489915 | Ready |
| `builtin-exercise:preacher-hammer-curl` | Preacher Hammer Curl | Biceps | [Page](https://smartworkout.app/en/exercise-library/biceps/preacher-hammer-curl) | [Asset](https://api.smartworkout.app/asset/video/71f9eea8-23e6-4af4-870b-cfe70c978d98.mp4) | video/mp4 · available | `/exercises/preacher-hammer-curl.mp4` | 792451 | Ready |
| `builtin-exercise:prone-lying-leg-curl` | Prone Lying Leg Curl | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/prone-lying-leg-curl) | [Asset](https://api.smartworkout.app/asset/video/313e2366-3d66-41d3-b450-5b5b9664e6da.mp4) | video/mp4 · available | `/exercises/prone-lying-leg-curl.mp4` | 756961 | Ready |
| `builtin-exercise:prone-swimmer` | Prone Swimmer | Back | [Page](https://smartworkout.app/en/exercise-library/back/prone-swimmer) | [Asset](https://api.smartworkout.app/asset/video/88323fed-2484-4a9c-b0f3-6e859ffeee8c.mp4) | video/mp4 · available | `/exercises/prone-swimmer.mp4` | 1029908 | Ready |
| `builtin-exercise:prowler-sled` | Prowler Sled | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/prowler-sled) | [Asset](https://api.smartworkout.app/asset/video/34ce9ea2-b70c-4b34-ab0c-5bbd3a90d11d.mp4) | video/mp4 · available | `/exercises/prowler-sled.mp4` | 1515937 | Ready |
| `builtin-exercise:pull-up` | Pull-Up | Back | [Page](https://smartworkout.app/en/exercise-library/back/pull-up) | [Asset](https://api.smartworkout.app/asset/video/65f1e0f3-01e5-40dc-919e-682660b96575.mp4) | video/mp4 · available | `/exercises/pull-up.mp4` | 457621 | Ready |
| `builtin-exercise:pull-up-neutral-grip` | Pull-Up Neutral Grip | Back | [Page](https://smartworkout.app/en/exercise-library/back/pull-up-neutral-grip) | [Asset](https://api.smartworkout.app/asset/video/c936be21-faec-41eb-9b13-ef26812892ae.mp4) | video/mp4 · available | `/exercises/pull-up-neutral-grip.mp4` | 623050 | Ready |
| `builtin-exercise:pull-up-wide-grip` | Pull-Up Wide Grip | Back | [Page](https://smartworkout.app/en/exercise-library/back/pull-up-wide-grip) | [Asset](https://api.smartworkout.app/asset/video/3d88b4a8-4e3a-4b80-add3-beb55b2ddaa5.mp4) | video/mp4 · available | `/exercises/pull-up-wide-grip.mp4` | 632409 | Ready |
| `builtin-exercise:punching-bag-boxing` | Punching Bag Boxing | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/punching-bag-boxing) | [Asset](https://api.smartworkout.app/asset/video/8d12dabe-ce8c-49d2-a0d9-5a0080e2aeee.mp4) | video/mp4 · available | `/exercises/punching-bag-boxing.mp4` | 573184 | Ready |
| `builtin-exercise:push-up` | Push-Up | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/push-up) | [Asset](https://api.smartworkout.app/asset/video/04e5def2-7ed5-4847-b027-ac66bdc658d7.mp4) | video/mp4 · available | `/exercises/push-up.mp4` | 1185223 | Ready |
| `builtin-exercise:push-up-on-parallel-bars` | Push-Up on Parallel Bars | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/push-up-on-parallel-bars) | [Asset](https://api.smartworkout.app/asset/video/f1e128ff-2642-44cd-b553-6a73c59dda9b.mp4) | video/mp4 · available | `/exercises/push-up-on-parallel-bars.mp4` | 1142856 | Ready |
| `builtin-exercise:rear-deltoid-stretch` | Rear Deltoid Stretch | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/rear-deltoid-stretch) | [Asset](https://api.smartworkout.app/asset/video/34c6ed5e-15f3-47c0-8df1-53fad7011506.mp4) | video/mp4 · available | `/exercises/rear-deltoid-stretch.mp4` | 627289 | Ready |
| `builtin-exercise:rear-lunge` | Rear Lunge | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/rear-lunge) | [Asset](https://api.smartworkout.app/asset/video/acb48eac-f663-4849-8273-4456dca39451.mp4) | video/mp4 · available | `/exercises/rear-lunge.mp4` | 1522109 | Ready |
| `builtin-exercise:resistance-band-hip-adduction` | Resistance Band Hip Adduction | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/resistance-band-hip-adduction) | [Asset](https://api.smartworkout.app/asset/video/99abb674-b99e-4497-8bde-19bf7467fc7f.mp4) | video/mp4 · available | `/exercises/resistance-band-hip-adduction.mp4` | 523566 | Ready |
| `builtin-exercise:resistance-band-push-up` | Resistance Band Push-Up | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/resistance-band-push-up) | [Asset](https://api.smartworkout.app/asset/video/3ebf60e2-f818-4d32-9655-b07f780684cf.mp4) | video/mp4 · available | `/exercises/resistance-band-push-up.mp4` | 1282217 | Ready |
| `builtin-exercise:reverse-crunches` | Reverse Crunches | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/reverse-crunches) | [Asset](https://api.smartworkout.app/asset/video/a03e99ef-269f-476b-88c1-3c7599894aa1.mp4) | video/mp4 · available | `/exercises/reverse-crunches.mp4` | 1132340 | Ready |
| `builtin-exercise:reverse-grip-cable-curl` | Reverse Grip Cable Curl | Forearms | [Page](https://smartworkout.app/en/exercise-library/forearms/reverse-grip-cable-curl) | [Asset](https://api.smartworkout.app/asset/video/c25969fc-9193-4e12-a1d2-dbf1aeffc1ce.mp4) | video/mp4 · available | `/exercises/reverse-grip-cable-curl.mp4` | 510502 | Ready |
| `builtin-exercise:reverse-hand-push-up` | Reverse Hand Push-Up | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/reverse-hand-push-up) | [Asset](https://api.smartworkout.app/asset/video/5ce1c351-558a-4f7b-8459-877fe9e54fd6.mp4) | video/mp4 · available | `/exercises/reverse-hand-push-up.mp4` | 1252856 | Ready |
| `builtin-exercise:reverse-nordic-curl` | Reverse Nordic Curl | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/reverse-nordic-curl) | [Asset](https://api.smartworkout.app/asset/video/9c940613-f1ee-435e-8f81-b8895854ef48.mp4) | video/mp4 · available | `/exercises/reverse-nordic-curl.mp4` | 1100113 | Ready |
| `builtin-exercise:reverse-wrist-push-up` | Reverse Wrist Push-Up | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/reverse-wrist-push-up) | [Asset](https://api.smartworkout.app/asset/video/f5d0f893-be62-47b0-bef9-a87179120f8f.mp4) | video/mp4 · available | `/exercises/reverse-wrist-push-up.mp4` | 1523759 | Ready |
| `builtin-exercise:ring-dips` | Ring Dips | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/ring-dips) | [Asset](https://api.smartworkout.app/asset/video/3aa98cd7-48fe-4447-81fa-35f4427be512.mp4) | video/mp4 · available | `/exercises/ring-dips.mp4` | 891181 | Ready |
| `builtin-exercise:ring-face-pull` | Ring Face Pull | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/ring-face-pull) | [Asset](https://api.smartworkout.app/asset/video/8850cb10-49ed-422c-bb72-d1bb5a391988.mp4) | video/mp4 · available | `/exercises/ring-face-pull.mp4` | 1055320 | Ready |
| `builtin-exercise:ring-leg-curl` | Ring Leg Curl | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/ring-leg-curl) | [Asset](https://api.smartworkout.app/asset/video/1541f6b9-f896-4f78-8b35-26395243006b.mp4) | video/mp4 · available | `/exercises/ring-leg-curl.mp4` | 1250150 | Ready |
| `builtin-exercise:ring-muscle-up` | Ring Muscle Up | Biceps | [Page](https://smartworkout.app/en/exercise-library/biceps/ring-muscle-up) | [Asset](https://api.smartworkout.app/asset/video/04de6d2c-67a7-4363-91aa-bd7b3c44abca.mp4) | video/mp4 · available | `/exercises/ring-muscle-up.mp4` | 762062 | Ready |
| `builtin-exercise:ring-pike` | Ring Pike | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/ring-pike) | [Asset](https://api.smartworkout.app/asset/video/ebbcf538-652e-428d-a244-b1358f763670.mp4) | video/mp4 · available | `/exercises/ring-pike.mp4` | 1324255 | Ready |
| `builtin-exercise:ring-push-up` | Ring Push-Up | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/ring-push-up) | [Asset](https://api.smartworkout.app/asset/video/dad1b2b1-cb9f-4b6f-9725-2548443f1872.mp4) | video/mp4 · available | `/exercises/ring-push-up.mp4` | 1227714 | Ready |
| `builtin-exercise:ring-triceps-extension` | Ring Triceps Extension | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/ring-triceps-extension) | [Asset](https://api.smartworkout.app/asset/video/4ad1984a-585d-4916-ac92-13473261eff2.mp4) | video/mp4 · available | `/exercises/ring-triceps-extension.mp4` | 839204 | Ready |
| `builtin-exercise:rings-pull-up` | Rings Pull-Up | Back | [Page](https://smartworkout.app/en/exercise-library/back/rings-pull-up) | [Asset](https://api.smartworkout.app/asset/video/07b3da97-8101-4701-9932-f0ccdafec332.mp4) | video/mp4 · available | `/exercises/rings-pull-up.mp4` | 707774 | Ready |
| `builtin-exercise:rocking-frog` | Rocking Frog | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/rocking-frog) | [Asset](https://api.smartworkout.app/asset/video/47e66bbf-b52a-4510-9a98-80d6e0421da7.mp4) | video/mp4 · available | `/exercises/rocking-frog.mp4` | 965383 | Ready |
| `builtin-exercise:rocking-half-frog-stretch` | Rocking Half Frog Stretch | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/rocking-half-frog-stretch) | [Asset](https://api.smartworkout.app/asset/video/2d5cc9be-ac8c-45ae-821b-ee35a1937ab3.mp4) | video/mp4 · available | `/exercises/rocking-half-frog-stretch.mp4` | 962911 | Ready |
| `builtin-exercise:roll-calves` | Roll Calves | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/roll-calves) | [Asset](https://api.smartworkout.app/asset/video/da38e865-3b96-48a0-b4d3-767fe6ea1fee.mp4) | video/mp4 · available | `/exercises/roll-calves.mp4` | 1045355 | Ready |
| `builtin-exercise:roll-foot` | Roll Foot | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/roll-foot) | [Asset](https://api.smartworkout.app/asset/video/02470813-9726-427f-97b1-4de8a824714f.mp4) | video/mp4 · available | `/exercises/roll-foot.mp4` | 377604 | Ready |
| `builtin-exercise:romanian-deadlift` | Romanian Deadlift | Gluteal | [Page](https://smartworkout.app/en/exercise-library/gluteus/romanian-deadlift) | [Asset](https://api.smartworkout.app/asset/video/5fe03c5a-63ef-4cb9-9721-e7361ab7abe8.mp4) | video/mp4 · available | `/exercises/romanian-deadlift.mp4` | 960117 | Ready |
| `builtin-exercise:rope-cable-hammer-curl` | Rope Cable Hammer Curl | Biceps | [Page](https://smartworkout.app/en/exercise-library/biceps/rope-cable-hammer-curl) | [Asset](https://api.smartworkout.app/asset/video/d369166b-0da4-4264-a714-e4e63de71a69.mp4) | video/mp4 · available | `/exercises/rope-cable-hammer-curl.mp4` | 569698 | Ready |
| `builtin-exercise:rope-straight-arm-lat-pulldown` | Rope Straight-Arm Lat Pulldown | Back | [Page](https://smartworkout.app/en/exercise-library/back/rope-straight-arm-lat-pulldown) | [Asset](https://api.smartworkout.app/asset/video/efd0f686-d089-4924-9ea5-2a8408e7b2df.mp4) | video/mp4 · available | `/exercises/rope-straight-arm-lat-pulldown.mp4` | 677111 | Ready |
| `builtin-exercise:rope-triceps-pushdown` | Rope Triceps Pushdown | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/rope-triceps-pushdown) | [Asset](https://api.smartworkout.app/asset/video/5b3b82b1-8d1d-41e0-b6f7-37c0f3bbf7e9.mp4) | video/mp4 · available | `/exercises/rope-triceps-pushdown.mp4` | 436979 | Ready |
| `builtin-exercise:rotary-calf-raise` | Rotary Calf Raise | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/rotary-calf-raise) | [Asset](https://api.smartworkout.app/asset/video/1cbd5faf-3112-4aff-b9ba-226000014936.mp4) | video/mp4 · available | `/exercises/rotary-calf-raise.mp4` | 613420 | Ready |
| `builtin-exercise:rotary-torso` | Rotary Torso | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/rotary-torso) | [Asset](https://api.smartworkout.app/asset/video/917556dd-d0c0-44f6-86b1-862ed6a9fb86.mp4) | video/mp4 · available | `/exercises/rotary-torso.mp4` | 1881798 | Ready |
| `builtin-exercise:rowing-machine` | Rowing Machine | Back | [Page](https://smartworkout.app/en/exercise-library/back/rowing-machine) | [Asset](https://api.smartworkout.app/asset/video/530f6d88-7795-4bde-bd76-c95f480a8955.mp4) | video/mp4 · available | `/exercises/rowing-machine.mp4` | 1049687 | Ready |
| `builtin-exercise:running` | Running | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/running) | [Asset](https://api.smartworkout.app/asset/video/30555cfa-cc20-45ca-8055-07a22ef9fbc2.mp4) | video/mp4 · available | `/exercises/running.mp4` | 809502 | Ready |
| `builtin-exercise:saw-plank` | Saw Plank | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/saw-plank) | [Asset](https://api.smartworkout.app/asset/video/bad31854-ef98-4b52-9d65-ad81674be243.mp4) | video/mp4 · available | `/exercises/saw-plank.mp4` | 914043 | Ready |
| `builtin-exercise:scapula-push-up` | Scapula Push-Up | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/scapula-push-up) | [Asset](https://api.smartworkout.app/asset/video/832436df-9b3d-4873-9d1f-b399f2ff003f.mp4) | video/mp4 · available | `/exercises/scapula-push-up.mp4` | 753387 | Ready |
| `builtin-exercise:scissors` | Scissors | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/scissors) | [Asset](https://api.smartworkout.app/asset/video/934ab0d3-03a6-4be7-9c7b-7c6392a3a5fd.mp4) | video/mp4 · available | `/exercises/scissors.mp4` | 897065 | Ready |
| `builtin-exercise:seal-row` | Seal Row | Back | [Page](https://smartworkout.app/en/exercise-library/back/seal-row) | [Asset](https://api.smartworkout.app/asset/video/6c6603d9-c72c-46f8-81ac-ef77425475bd.mp4) | video/mp4 · available | `/exercises/seal-row.mp4` | 805424 | Ready |
| `builtin-exercise:seated-ab-cable-crunch` | Seated Ab Cable Crunch | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/seated-ab-cable-crunch) | [Asset](https://api.smartworkout.app/asset/video/93de91b8-220c-4325-83dd-9aacc43d46f7.mp4) | video/mp4 · available | `/exercises/seated-ab-cable-crunch.mp4` | 887535 | Ready |
| `builtin-exercise:seated-alternate-crunches` | Seated Alternate Crunches | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/seated-alternate-crunches) | [Asset](https://api.smartworkout.app/asset/video/77a673ce-4b7a-4f7c-ad26-d68d9920b500.mp4) | video/mp4 · available | `/exercises/seated-alternate-crunches.mp4` | 1469977 | Ready |
| `builtin-exercise:seated-arnold-dumbbell-press` | Seated Arnold Dumbbell Press | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/seated-arnold-dumbbell-press) | [Asset](https://api.smartworkout.app/asset/video/852a5e98-05f6-43cf-9c5b-ab4a1ac7b430.mp4) | video/mp4 · available | `/exercises/seated-arnold-dumbbell-press.mp4` | 787848 | Ready |
| `builtin-exercise:seated-band-hip-abduction` | Seated Band Hip Abduction | Gluteal | [Page](https://smartworkout.app/en/exercise-library/gluteus/seated-band-hip-abduction) | [Asset](https://api.smartworkout.app/asset/video/a0ed4817-1dbd-49fd-90ae-ca97c2f4ef46.mp4) | video/mp4 · available | `/exercises/seated-band-hip-abduction.mp4` | 692326 | Ready |
| `builtin-exercise:seated-barbell-shoulder-press` | Seated Barbell Shoulder Press | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/seated-barbell-shoulder-press) | [Asset](https://api.smartworkout.app/asset/video/1d1db66c-c992-4878-96a8-6581de5079e6.mp4) | video/mp4 · available | `/exercises/seated-barbell-shoulder-press.mp4` | 735132 | Ready |
| `builtin-exercise:seated-barbell-twist` | Seated Barbell Twist | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/seated-barbell-twist) | [Asset](https://api.smartworkout.app/asset/video/fd9ade9d-d982-4f3c-9a31-42103315bbac.mp4) | video/mp4 · available | `/exercises/seated-barbell-twist.mp4` | 841115 | Ready |
| `builtin-exercise:seated-bent-over-dumbbell-lateral-raise` | Seated Bent Over Dumbbell Lateral Raise | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/seated-bent-over-dumbbell-lateral-raise) | [Asset](https://api.smartworkout.app/asset/video/a4b7f356-3602-444e-8a36-492905895b6a.mp4) | video/mp4 · available | `/exercises/seated-bent-over-dumbbell-lateral-raise.mp4` | 830273 | Ready |
| `builtin-exercise:seated-cable-chest-press` | Seated Cable Chest Press | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/seated-cable-chest-press) | [Asset](https://api.smartworkout.app/asset/video/094a5e9b-b0e4-41fd-b1f4-9f8d02469a97.mp4) | video/mp4 · available | `/exercises/seated-cable-chest-press.mp4` | 645384 | Ready |
| `builtin-exercise:seated-cable-fly` | Seated Cable Fly | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/seated-cable-fly) | [Asset](https://api.smartworkout.app/asset/video/9439b214-486d-4113-9609-7d3aadc864b7.mp4) | video/mp4 · available | `/exercises/seated-cable-fly.mp4` | 643329 | Ready |
| `builtin-exercise:seated-cable-horizontal-french-press` | Seated Cable Horizontal French Press | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/seated-cable-horizontal-french-press) | [Asset](https://api.smartworkout.app/asset/video/2a980c2f-e8f8-4719-83a6-40c2e87cc26b.mp4) | video/mp4 · available | `/exercises/seated-cable-horizontal-french-press.mp4` | 630910 | Ready |
| `builtin-exercise:seated-cable-low-row-neutral-grip` | Seated Cable Low Row Neutral Grip | Back | [Page](https://smartworkout.app/en/exercise-library/back/seated-cable-low-row-neutral-grip) | [Asset](https://api.smartworkout.app/asset/video/766c2565-2c05-4f70-bc15-4181fe51649d.mp4) | video/mp4 · available | `/exercises/seated-cable-low-row-neutral-grip.mp4` | 623849 | Ready |
| `builtin-exercise:seated-cable-row` | Seated Cable Row | Back | [Page](https://smartworkout.app/en/exercise-library/back/seated-cable-row) | [Asset](https://api.smartworkout.app/asset/video/24dba583-9cfe-41ea-96bf-8de95ddb2ec7.mp4) | video/mp4 · available | `/exercises/seated-cable-row.mp4` | 571259 | Ready |
| `builtin-exercise:seated-cable-wide-grip-row` | Seated Cable Wide Grip Row | Back | [Page](https://smartworkout.app/en/exercise-library/back/seated-cable-wide-grip-row) | [Asset](https://api.smartworkout.app/asset/video/fc6ec290-0fd3-4133-9901-ce9facb094eb.mp4) | video/mp4 · available | `/exercises/seated-cable-wide-grip-row.mp4` | 602058 | Ready |
| `builtin-exercise:seated-cable-wrist-curl` | Seated Cable Wrist Curl | Forearms | [Page](https://smartworkout.app/en/exercise-library/forearms/seated-cable-wrist-curl) | [Asset](https://api.smartworkout.app/asset/video/5cfbf216-386b-4758-8f37-cdf95fa72e35.mp4) | video/mp4 · available | `/exercises/seated-cable-wrist-curl.mp4` | 390149 | Ready |
| `builtin-exercise:seated-calf-raise` | Seated Calf Raise | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/seated-calf-raise) | [Asset](https://api.smartworkout.app/asset/video/162f4ec1-4427-40b4-b330-c0ea48733bd4.mp4) | video/mp4 · available | `/exercises/seated-calf-raise.mp4` | 850168 | Ready |
| `builtin-exercise:seated-chest-clam` | Seated Chest Clam | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/seated-chest-clam) | [Asset](https://api.smartworkout.app/asset/video/1ee153d8-7136-4ded-aa79-416a16b00aa1.mp4) | video/mp4 · available | `/exercises/seated-chest-clam.mp4` | 1304537 | Ready |
| `builtin-exercise:seated-cuban-press` | Seated Cuban Press | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/seated-cuban-press) | [Asset](https://api.smartworkout.app/asset/video/a778189b-1ddf-47ec-8169-0f5335d26fb0.mp4) | video/mp4 · available | `/exercises/seated-cuban-press.mp4` | 1031815 | Ready |
| `builtin-exercise:seated-dip-machine` | Seated Dip Machine | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/seated-dip-machine) | [Asset](https://api.smartworkout.app/asset/video/c3ea9317-3cf5-4744-ab6d-3b1e356ef7d9.mp4) | video/mp4 · available | `/exercises/seated-dip-machine.mp4` | 954533 | Ready |
| `builtin-exercise:seated-dumbbell-curl` | Seated Dumbbell Curl | Biceps | [Page](https://smartworkout.app/en/exercise-library/biceps/seated-dumbbell-curl) | [Asset](https://api.smartworkout.app/asset/video/19601110-2040-4b30-b647-38d336e67b33.mp4) | video/mp4 · available | `/exercises/seated-dumbbell-curl.mp4` | 762129 | Ready |
| `builtin-exercise:seated-dumbbell-shoulder-press` | Seated Dumbbell Shoulder Press | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/seated-dumbbell-shoulder-press) | [Asset](https://api.smartworkout.app/asset/video/4b524c2d-e6f6-4f01-8057-04afd34a6ea0.mp4) | video/mp4 · available | `/exercises/seated-dumbbell-shoulder-press.mp4` | 606264 | Ready |
| `builtin-exercise:seated-dumbbell-shrugs` | Seated Dumbbell Shrugs | Back | [Page](https://smartworkout.app/en/exercise-library/back/seated-dumbbell-shrugs) | [Asset](https://api.smartworkout.app/asset/video/4f300cdf-5229-450c-b54f-659011a2b24f.mp4) | video/mp4 · available | `/exercises/seated-dumbbell-shrugs.mp4` | 444727 | Ready |
| `builtin-exercise:seated-face-pull` | Seated Face Pull | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/seated-face-pull) | [Asset](https://api.smartworkout.app/asset/video/eec8fe12-c37f-4a2a-9000-cc1462f77835.mp4) | video/mp4 · available | `/exercises/seated-face-pull.mp4` | 696528 | Ready |
| `builtin-exercise:seated-figure-4-stretch` | Seated Figure 4 Stretch | Gluteal | [Page](https://smartworkout.app/en/exercise-library/gluteus/seated-figure-4-stretch) | [Asset](https://api.smartworkout.app/asset/video/ba3a5039-28df-48ef-b44b-c18f89c05410.mp4) | video/mp4 · available | `/exercises/seated-figure-4-stretch.mp4` | 1176643 | Ready |
| `builtin-exercise:seated-flutter-kick` | Seated Flutter Kick | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/seated-flutter-kick) | [Asset](https://api.smartworkout.app/asset/video/7fafdbf1-dc16-455c-8f2e-542e0b6686f3.mp4) | video/mp4 · available | `/exercises/seated-flutter-kick.mp4` | 895235 | Ready |
| `builtin-exercise:seated-forward-fold` | Seated Forward Fold | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/seated-forward-fold) | [Asset](https://api.smartworkout.app/asset/video/69547e07-9b40-426a-9bfe-364647086835.mp4) | video/mp4 · available | `/exercises/seated-forward-fold.mp4` | 1179986 | Ready |
| `builtin-exercise:seated-good-morning` | Seated Good Morning | Gluteal | [Page](https://smartworkout.app/en/exercise-library/gluteus/seated-good-morning) | [Asset](https://api.smartworkout.app/asset/video/27a5d8a9-d2da-4ad2-ad3f-5a0445036ed3.mp4) | video/mp4 · available | `/exercises/seated-good-morning.mp4` | 888537 | Ready |
| `builtin-exercise:seated-hammer-curl` | Seated Hammer Curl | Biceps | [Page](https://smartworkout.app/en/exercise-library/biceps/seated-hammer-curl) | [Asset](https://api.smartworkout.app/asset/video/6e1bed1c-cbbc-4b8d-bedc-95e98afc5bad.mp4) | video/mp4 · available | `/exercises/seated-hammer-curl.mp4` | 748559 | Ready |
| `builtin-exercise:seated-hip-abduction` | Seated Hip Abduction | Gluteal | [Page](https://smartworkout.app/en/exercise-library/gluteus/seated-hip-abduction) | [Asset](https://api.smartworkout.app/asset/video/c62558bf-df0f-4f89-b476-7003a5bfabc6.mp4) | video/mp4 · available | `/exercises/seated-hip-abduction.mp4` | 750406 | Ready |
| `builtin-exercise:seated-hip-adduction` | Seated Hip Adduction | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/seated-hip-adduction) | [Asset](https://api.smartworkout.app/asset/video/a4b1cb57-543c-4cbc-880a-8277129d06b7.mp4) | video/mp4 · available | `/exercises/seated-hip-adduction.mp4` | 709892 | Ready |
| `builtin-exercise:seated-incline-biceps-curl` | Seated Incline Biceps Curl | Biceps | [Page](https://smartworkout.app/en/exercise-library/biceps/seated-incline-biceps-curl) | [Asset](https://api.smartworkout.app/asset/video/8b76c1d3-c2ca-4f5f-b01a-ee384e1ab289.mp4) | video/mp4 · available | `/exercises/seated-incline-biceps-curl.mp4` | 663487 | Ready |
| `builtin-exercise:seated-leg-curl` | Seated Leg Curl | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/seated-leg-curl) | [Asset](https://api.smartworkout.app/asset/video/1b19271e-8604-46d5-94a5-6e1fb99b125b.mp4) | video/mp4 · available | `/exercises/seated-leg-curl.mp4` | 974707 | Ready |
| `builtin-exercise:seated-leg-extension-machine` | Seated Leg Extension Machine | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/seated-leg-extension-machine) | [Asset](https://api.smartworkout.app/asset/video/10ec53eb-72f0-4335-b81c-8302db893bed.mp4) | video/mp4 · available | `/exercises/seated-leg-extension-machine.mp4` | 817094 | Ready |
| `builtin-exercise:seated-leg-raise` | Seated Leg Raise | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/seated-leg-raise) | [Asset](https://api.smartworkout.app/asset/video/9a715b23-65b7-4eb9-9943-1e0642f45ee8.mp4) | video/mp4 · available | `/exercises/seated-leg-raise.mp4` | 937340 | Ready |
| `builtin-exercise:seated-machine-trunk-rotation` | Seated Machine Trunk Rotation | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/seated-machine-trunk-rotation) | [Asset](https://api.smartworkout.app/asset/video/7d5ddf56-3bbc-4c6b-ad30-9771a3957e56.mp4) | video/mp4 · available | `/exercises/seated-machine-trunk-rotation.mp4` | 744224 | Ready |
| `builtin-exercise:seated-reverse-circle-crunches` | Seated Reverse Circle Crunches | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/seated-reverse-circle-crunches) | [Asset](https://api.smartworkout.app/asset/video/3689899e-a447-4e2a-a82e-965469c4687a.mp4) | video/mp4 · available | `/exercises/seated-reverse-circle-crunches.mp4` | 1348758 | Ready |
| `builtin-exercise:seated-shoulder-external-rotation` | Seated Shoulder External Rotation | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/seated-shoulder-external-rotation) | [Asset](https://api.smartworkout.app/asset/video/a682813c-b2be-44d2-9f83-d2fdcc337222.mp4) | video/mp4 · available | `/exercises/seated-shoulder-external-rotation.mp4` | 519046 | Ready |
| `builtin-exercise:seated-shoulder-press-neutral-grip` | Seated Shoulder Press Neutral Grip | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/seated-shoulder-press-neutral-grip) | [Asset](https://api.smartworkout.app/asset/video/3f390c7d-ccc9-4c71-9eed-2209f72fd8fa.mp4) | video/mp4 · available | `/exercises/seated-shoulder-press-neutral-grip.mp4` | 659623 | Ready |
| `builtin-exercise:seated-single-leg-curl` | Seated Single Leg Curl | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/seated-single-leg-curl) | [Asset](https://api.smartworkout.app/asset/video/e207b759-a36b-4eb6-aa2a-71a002685a7e.mp4) | video/mp4 · available | `/exercises/seated-single-leg-curl.mp4` | 707806 | Ready |
| `builtin-exercise:seated-single-leg-hamstring-stretch` | Seated Single Leg Hamstring Stretch | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/seated-single-leg-hamstring-stretch) | [Asset](https://api.smartworkout.app/asset/video/d3b31035-9680-437b-a9e3-3e8a03a95321.mp4) | video/mp4 · available | `/exercises/seated-single-leg-hamstring-stretch.mp4` | 762706 | Ready |
| `builtin-exercise:seated-triceps-bench-dip` | Seated Triceps Bench Dip | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/seated-triceps-bench-dip) | [Asset](https://api.smartworkout.app/asset/video/530df2f4-d7c1-4ca6-ba8a-b9b689fbf4d7.mp4) | video/mp4 · available | `/exercises/seated-triceps-bench-dip.mp4` | 932018 | Ready |
| `builtin-exercise:shoulder-tap` | Shoulder Tap | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/shoulder-tap) | [Asset](https://api.smartworkout.app/asset/video/6f080c8e-fe03-4783-bb2b-d816956111eb.mp4) | video/mp4 · available | `/exercises/shoulder-tap.mp4` | 1162412 | Ready |
| `builtin-exercise:shoulderstand-pose` | Shoulderstand Pose | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/shoulderstand-pose) | [Asset](https://api.smartworkout.app/asset/video/03a8d199-c270-4632-9ebb-2ba9f97714c7.mp4) | video/mp4 · available | `/exercises/shoulderstand-pose.mp4` | 1211306 | Ready |
| `builtin-exercise:side-crunch` | Side Crunch | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/side-crunch) | [Asset](https://api.smartworkout.app/asset/video/4ede9603-15f3-4af1-82e4-51c799dce69e.mp4) | video/mp4 · available | `/exercises/side-crunch.mp4` | 1288094 | Ready |
| `builtin-exercise:side-leg-swings` | Side Leg Swings | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/side-leg-swings) | [Asset](https://api.smartworkout.app/asset/video/58c24967-19cb-4ae5-a982-84d7e9c70bff.mp4) | video/mp4 · available | `/exercises/side-leg-swings.mp4` | 661388 | Ready |
| `builtin-exercise:side-lunges` | Side Lunges | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/side-lunges) | [Asset](https://api.smartworkout.app/asset/video/303e9fb8-4337-4855-be14-1ca06e5685de.mp4) | video/mp4 · available | `/exercises/side-lunges.mp4` | 1736028 | Ready |
| `builtin-exercise:side-lying-hip-abduction` | Side Lying Hip Abduction | Gluteal | [Page](https://smartworkout.app/en/exercise-library/gluteus/side-lying-hip-abduction) | [Asset](https://api.smartworkout.app/asset/video/0a5467d7-1cf0-4240-90dd-963fc3a02f55.mp4) | video/mp4 · available | `/exercises/side-lying-hip-abduction.mp4` | 724699 | Ready |
| `builtin-exercise:side-lying-quadriceps-stretch` | Side Lying Quadriceps Stretch | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/side-lying-quadriceps-stretch) | [Asset](https://api.smartworkout.app/asset/video/62486c58-a28d-46c6-9b08-26e6d173eb4d.mp4) | video/mp4 · available | `/exercises/side-lying-quadriceps-stretch.mp4` | 521261 | Ready |
| `builtin-exercise:side-plank` | Side Plank | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/side-plank) | [Asset](https://api.smartworkout.app/asset/video/f9ceb2e1-f7ba-4954-8cb7-78d6b60858fc.mp4) | video/mp4 · available | `/exercises/side-plank.mp4` | 1169842 | Ready |
| `builtin-exercise:side-plank-clamshell` | Side Plank Clamshell | Gluteal | [Page](https://smartworkout.app/en/exercise-library/gluteus/side-plank-clamshell) | [Asset](https://api.smartworkout.app/asset/video/e60685e7-de17-4427-b94c-612a06c56f55.mp4) | video/mp4 · available | `/exercises/side-plank-clamshell.mp4` | 643995 | Ready |
| `builtin-exercise:side-plank-hip-abduction` | Side Plank Hip Abduction | Gluteal | [Page](https://smartworkout.app/en/exercise-library/gluteus/side-plank-hip-abduction) | [Asset](https://api.smartworkout.app/asset/video/b69a962b-2f68-4bb6-ba46-1b722ba57b6f.mp4) | video/mp4 · available | `/exercises/side-plank-hip-abduction.mp4` | 992208 | Ready |
| `builtin-exercise:single-dumbbell-curl` | Single Dumbbell Curl | Biceps | [Page](https://smartworkout.app/en/exercise-library/biceps/single-dumbbell-curl) | [Asset](https://api.smartworkout.app/asset/video/ce242305-ce47-4129-8437-24d7fb78631d.mp4) | video/mp4 · available | `/exercises/single-dumbbell-curl.mp4` | 614541 | Ready |
| `builtin-exercise:single-leg-box-jump` | Single-Leg Box Jump | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/single-leg-box-jump) | [Asset](https://api.smartworkout.app/asset/video/130ca241-a71a-47a9-a116-df23353371af.mp4) | video/mp4 · available | `/exercises/single-leg-box-jump.mp4` | 673746 | Ready |
| `builtin-exercise:single-leg-cable-leg-curl` | Single-Leg Cable Leg Curl | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/single-leg-cable-leg-curl) | [Asset](https://api.smartworkout.app/asset/video/3dfb6125-e531-4536-84f3-c737e1e9ea89.mp4) | video/mp4 · available | `/exercises/single-leg-cable-leg-curl.mp4` | 587389 | Ready |
| `builtin-exercise:single-leg-calf-raise` | Single-Leg Calf Raise | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/single-leg-calf-raise) | [Asset](https://api.smartworkout.app/asset/video/c0dca8a0-f2b2-4053-b8e8-e5d838c913c9.mp4) | video/mp4 · available | `/exercises/single-leg-calf-raise.mp4` | 527730 | Ready |
| `builtin-exercise:single-leg-calf-raise-with-dumbbell` | Single-Leg Calf Raise with Dumbbell | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/single-leg-calf-raise-with-dumbbell) | [Asset](https://api.smartworkout.app/asset/video/883732d9-e87b-4440-ba3f-cec421177758.mp4) | video/mp4 · available | `/exercises/single-leg-calf-raise-with-dumbbell.mp4` | 560625 | Ready |
| `builtin-exercise:single-leg-deadlift` | Single-Leg Deadlift | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/single-leg-deadlift) | [Asset](https://api.smartworkout.app/asset/video/e19ce929-9375-47fc-8da8-a19ae38ed460.mp4) | video/mp4 · available | `/exercises/single-leg-deadlift.mp4` | 1119165 | Ready |
| `builtin-exercise:single-leg-dumbbell-deadlift` | Single Leg Dumbbell Deadlift | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/single-leg-dumbbell-deadlift) | [Asset](https://api.smartworkout.app/asset/video/b3afcd6d-2e91-4f77-8253-65574de589c3.mp4) | video/mp4 · available | `/exercises/single-leg-dumbbell-deadlift.mp4` | 1006823 | Ready |
| `builtin-exercise:single-leg-extension` | Single-Leg Extension | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/single-leg-extension) | [Asset](https://api.smartworkout.app/asset/video/9a8e775a-0093-49e4-b914-af2637dd67bb.mp4) | video/mp4 · available | `/exercises/single-leg-extension.mp4` | 712933 | Ready |
| `builtin-exercise:single-leg-lying-curl` | Single-Leg Lying Curl | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/single-leg-lying-curl) | [Asset](https://api.smartworkout.app/asset/video/78b831a4-0bd1-43cd-ba7b-98ddfe2d2fa7.mp4) | video/mp4 · available | `/exercises/single-leg-lying-curl.mp4` | 488878 | Ready |
| `builtin-exercise:single-leg-press` | Single Leg Press | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/single-leg-press) | [Asset](https://api.smartworkout.app/asset/video/354c350e-cfd2-4d62-b73a-b0e90132499f.mp4) | video/mp4 · available | `/exercises/single-leg-press.mp4` | 763373 | Ready |
| `builtin-exercise:single-leg-romanian-deadlift` | Single Leg Romanian Deadlift | Gluteal | [Page](https://smartworkout.app/en/exercise-library/gluteus/single-leg-romanian-deadlift) | [Asset](https://api.smartworkout.app/asset/video/a20d845c-3a0f-45f2-a3e0-826e0dd6c00c.mp4) | video/mp4 · available | `/exercises/single-leg-romanian-deadlift.mp4` | 1006823 | Ready |
| `builtin-exercise:single-leg-seated-calf-machine-raise` | Single Leg Seated Calf Machine Raise | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/single-leg-seated-calf-machine-raise) | [Asset](https://api.smartworkout.app/asset/video/92d6c057-a7e6-4ccc-8d37-2dd6a05f1fcf.mp4) | video/mp4 · available | `/exercises/single-leg-seated-calf-machine-raise.mp4` | 631466 | Ready |
| `builtin-exercise:single-leg-seated-calf-raise-with-dumbbell` | Single-Leg Seated Calf Raise with Dumbbell | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/single-leg-seated-calf-raise-with-dumbbell) | [Asset](https://api.smartworkout.app/asset/video/59f2e347-fb5b-4384-bb24-1c91293b3348.mp4) | video/mp4 · available | `/exercises/single-leg-seated-calf-raise-with-dumbbell.mp4` | 585798 | Ready |
| `builtin-exercise:single-leg-smith-calf-raise` | Single Leg Smith Calf Raise | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/single-leg-smith-calf-raise) | [Asset](https://api.smartworkout.app/asset/video/59c87ebc-8e70-4869-959a-25caaadb8663.mp4) | video/mp4 · available | `/exercises/single-leg-smith-calf-raise.mp4` | 525733 | Ready |
| `builtin-exercise:single-leg-weighted-glute-bridge` | Single Leg Weighted Glute Bridge | Gluteal | [Page](https://smartworkout.app/en/exercise-library/gluteus/single-leg-weighted-glute-bridge) | [Asset](https://api.smartworkout.app/asset/video/2f64506a-4cf9-4103-8705-c691fa6d4c2b.mp4) | video/mp4 · available | `/exercises/single-leg-weighted-glute-bridge.mp4` | 1153611 | Ready |
| `builtin-exercise:sissy-squat` | Sissy Squat | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/sissy-squat) | [Asset](https://api.smartworkout.app/asset/video/041bce67-9e26-4486-865f-e94ea7d4eb20.mp4) | video/mp4 · available | `/exercises/sissy-squat.mp4` | 897464 | Ready |
| `builtin-exercise:sit-up` | Sit Up | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/sit-up) | [Asset](https://api.smartworkout.app/asset/video/a718bf85-e487-49ee-9c84-9c198ca3b432.mp4) | video/mp4 · available | `/exercises/sit-up.mp4` | 1326797 | Ready |
| `builtin-exercise:sitting-twist` | Sitting Twist | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/sitting-twist) | [Asset](https://api.smartworkout.app/asset/video/7c798219-e8ec-4017-bfc4-b9aa10ef146b.mp4) | video/mp4 · available | `/exercises/sitting-twist.mp4` | 1606760 | Ready |
| `builtin-exercise:ski-ergometer` | Ski Ergometer | Back | [Page](https://smartworkout.app/en/exercise-library/back/ski-ergometer) | [Asset](https://api.smartworkout.app/asset/video/5bf8b087-7c80-45bb-8c90-3af403f0ddd8.mp4) | video/mp4 · available | `/exercises/ski-ergometer.mp4` | 812277 | Ready |
| `builtin-exercise:sliding-leg-curl` | Sliding Leg Curl | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/sliding-leg-curl) | [Asset](https://api.smartworkout.app/asset/video/57103c63-706f-4d7a-81b2-0415fac1727c.mp4) | video/mp4 · available | `/exercises/sliding-leg-curl.mp4` | 1195437 | Ready |
| `builtin-exercise:smith-bench-press` | Smith Bench Press | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/smith-bench-press) | [Asset](https://api.smartworkout.app/asset/video/9c1188ad-87fa-402f-9c6c-5e1e1a6f6ba4.mp4) | video/mp4 · available | `/exercises/smith-bench-press.mp4` | 573825 | Ready |
| `builtin-exercise:smith-bent-over-row` | Smith Bent Over Row | Back | [Page](https://smartworkout.app/en/exercise-library/back/smith-bent-over-row) | [Asset](https://api.smartworkout.app/asset/video/ba80d928-9cd6-4820-92fc-be91145c29cf.mp4) | video/mp4 · available | `/exercises/smith-bent-over-row.mp4` | 539541 | Ready |
| `builtin-exercise:smith-calf-raises` | Smith Calf Raises | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/smith-calf-raises) | [Asset](https://api.smartworkout.app/asset/video/9d9d595a-6020-4948-b7cb-e2215d94ef25.mp4) | video/mp4 · available | `/exercises/smith-calf-raises.mp4` | 546645 | Ready |
| `builtin-exercise:smith-chair-squat` | Smith Chair Squat | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/smith-chair-squat) | [Asset](https://api.smartworkout.app/asset/video/8fce8fa2-67a7-461d-901f-7c54d11c28df.mp4) | video/mp4 · available | `/exercises/smith-chair-squat.mp4` | 723257 | Ready |
| `builtin-exercise:smith-front-squat` | Smith Front Squat | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/smith-front-squat) | [Asset](https://api.smartworkout.app/asset/video/abc86c91-411a-4aed-8864-091077c5f2bd.mp4) | video/mp4 · available | `/exercises/smith-front-squat.mp4` | 794228 | Ready |
| `builtin-exercise:smith-hack-squat` | Smith Hack Squat | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/smith-hack-squat) | [Asset](https://api.smartworkout.app/asset/video/e9a49586-7e96-4373-9813-0d146426f3c6.mp4) | video/mp4 · available | `/exercises/smith-hack-squat.mp4` | 913777 | Ready |
| `builtin-exercise:smith-incline-chest-press` | Smith Incline Chest Press | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/smith-incline-chest-press) | [Asset](https://api.smartworkout.app/asset/video/e576a629-7546-4b4d-98a3-51f73340c6dc.mp4) | video/mp4 · available | `/exercises/smith-incline-chest-press.mp4` | 631051 | Ready |
| `builtin-exercise:smith-kneeling-hip-thrust` | Smith Kneeling Hip Thrust | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/smith-kneeling-hip-thrust) | [Asset](https://api.smartworkout.app/asset/video/5e50d81b-14b3-4101-afe0-5c47ddfe370c.mp4) | video/mp4 · available | `/exercises/smith-kneeling-hip-thrust.mp4` | 657687 | Ready |
| `builtin-exercise:smith-machibe-glute-kickback` | Smith Machibe Glute Kickback | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/smith-machibe-glute-kickback) | [Asset](https://api.smartworkout.app/asset/video/57f7f0c5-0355-43de-b1ad-5a065aba75d1.mp4) | video/mp4 · available | `/exercises/smith-machibe-glute-kickback.mp4` | 559772 | Ready |
| `builtin-exercise:smith-machine-good-morning` | Smith Machine Good Morning | Gluteal | [Page](https://smartworkout.app/en/exercise-library/gluteus/smith-machine-good-morning) | [Asset](https://api.smartworkout.app/asset/video/0dfbc34e-703c-43ba-ae9d-25f8a5e85443.mp4) | video/mp4 · available | `/exercises/smith-machine-good-morning.mp4` | 778519 | Ready |
| `builtin-exercise:smith-machine-upright-row` | Smith Machine Upright Row | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/smith-machine-upright-row) | [Asset](https://api.smartworkout.app/asset/video/13bd1488-1ec1-42ca-b5ce-d6f68a098e77.mp4) | video/mp4 · available | `/exercises/smith-machine-upright-row.mp4` | 721021 | Ready |
| `builtin-exercise:smith-rear-lunge` | Smith Rear Lunge | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/smith-rear-lunge) | [Asset](https://api.smartworkout.app/asset/video/e133134a-9818-418f-9031-03b425cb38db.mp4) | video/mp4 · available | `/exercises/smith-rear-lunge.mp4` | 833422 | Ready |
| `builtin-exercise:smith-romanian-deadlift` | Smith Romanian Deadlift | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/smith-romanian-deadlift) | [Asset](https://api.smartworkout.app/asset/video/3b4631d5-6ce6-4d34-aee5-c6f9e0fc8823.mp4) | video/mp4 · available | `/exercises/smith-romanian-deadlift.mp4` | 830771 | Ready |
| `builtin-exercise:smith-seated-behind-neck-press` | Smith Seated Behind Neck Press | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/smith-seated-behind-neck-press) | [Asset](https://api.smartworkout.app/asset/video/8a35b285-2540-48a8-9c08-88e5fa08b8ee.mp4) | video/mp4 · available | `/exercises/smith-seated-behind-neck-press.mp4` | 645238 | Ready |
| `builtin-exercise:smith-seated-calf-raise` | Smith Seated Calf Raise | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/smith-seated-calf-raise) | [Asset](https://api.smartworkout.app/asset/video/8d97d4cf-2337-498c-b8e7-19527e8a2ef2.mp4) | video/mp4 · available | `/exercises/smith-seated-calf-raise.mp4` | 549972 | Ready |
| `builtin-exercise:smith-shoulder-press` | Smith Shoulder Press | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/smith-shoulder-press) | [Asset](https://api.smartworkout.app/asset/video/8eb388e1-bcba-4008-a658-94173da9ac60.mp4) | video/mp4 · available | `/exercises/smith-shoulder-press.mp4` | 594996 | Ready |
| `builtin-exercise:smith-shoulder-shrug` | Smith Shoulder Shrug | Back | [Page](https://smartworkout.app/en/exercise-library/back/smith-shoulder-shrug) | [Asset](https://api.smartworkout.app/asset/video/ca048f3f-7813-4368-8c5e-942aadeb98ae.mp4) | video/mp4 · available | `/exercises/smith-shoulder-shrug.mp4` | 453258 | Ready |
| `builtin-exercise:smith-split-squat` | Smith Split Squat | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/smith-split-squat) | [Asset](https://api.smartworkout.app/asset/video/45e984df-f5ad-4b9e-ba00-3e5c32fb619d.mp4) | video/mp4 · available | `/exercises/smith-split-squat.mp4` | 659619 | Ready |
| `builtin-exercise:smith-squat` | Smith Squat | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/smith-squat) | [Asset](https://api.smartworkout.app/asset/video/4cf150a0-8e80-4df1-b113-6865c66bcabd.mp4) | video/mp4 · available | `/exercises/smith-squat.mp4` | 813516 | Ready |
| `builtin-exercise:smith-squat-to-bench` | Smith Squat To Bench | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/smith-squat-to-bench) | [Asset](https://api.smartworkout.app/asset/video/5a5deab3-1144-45f7-a3fc-c72187844f3a.mp4) | video/mp4 · available | `/exercises/smith-squat-to-bench.mp4` | 824008 | Ready |
| `builtin-exercise:smith-zercher-squat` | Smith Zercher Squat | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/smith-zercher-squat) | [Asset](https://api.smartworkout.app/asset/video/cb990a74-bb47-4c1e-b09d-da66b5e98429.mp4) | video/mp4 · available | `/exercises/smith-zercher-squat.mp4` | 795660 | Ready |
| `builtin-exercise:snatch` | Snatch | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/snatch) | [Asset](https://api.smartworkout.app/asset/video/f03197e6-375f-4bad-b34c-5dcf941c88d1.mp4) | video/mp4 · available | `/exercises/snatch.mp4` | 1083191 | Ready |
| `builtin-exercise:snatch-pull` | Snatch Pull | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/snatch-pull) | [Asset](https://api.smartworkout.app/asset/video/5788380a-7444-48dd-9714-e4c710075f44.mp4) | video/mp4 · available | `/exercises/snatch-pull.mp4` | 917337 | Ready |
| `builtin-exercise:spider-hammer-curl` | Spider Hammer Curl | Biceps | [Page](https://smartworkout.app/en/exercise-library/biceps/spider-hammer-curl) | [Asset](https://api.smartworkout.app/asset/video/c795f6c3-f7f3-49d4-b2f9-dd7769bc4715.mp4) | video/mp4 · available | `/exercises/spider-hammer-curl.mp4` | 913317 | Ready |
| `builtin-exercise:split-squat` | Split Squat | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/split-squat) | [Asset](https://api.smartworkout.app/asset/video/be7bd830-00ee-4786-92f6-f0b437dff54e.mp4) | video/mp4 · available | `/exercises/split-squat.mp4` | 778681 | Ready |
| `builtin-exercise:split-squat-front-foot-elevated` | Split Squat Front Foot Elevated | Legs, Gluteal | [Page](https://smartworkout.app/en/exercise-library/legs/split-squat-front-foot-elevated) | [Asset](https://api.smartworkout.app/asset/video/fc3eac85-3592-407e-becc-71c1301b1b3e.mp4) | video/mp4 · available | `/exercises/split-squat-front-foot-elevated.mp4` | 808327 | Ready |
| `builtin-exercise:squat` | Squat | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/squat) | [Asset](https://api.smartworkout.app/asset/video/2180a136-5fa4-4c98-a9ae-8477a89b9402.mp4) | video/mp4 · available | `/exercises/squat.mp4` | 957400 | Ready |
| `builtin-exercise:stability-ball-crunch` | Stability Ball Crunch | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/stability-ball-crunch) | [Asset](https://api.smartworkout.app/asset/video/4570a332-e04d-4652-a0a0-bf2e4b9234a6.mp4) | video/mp4 · available | `/exercises/stability-ball-crunch.mp4` | 804571 | Ready |
| `builtin-exercise:stabillity-ball-wall-squat` | Stabillity Ball Wall Squat | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/stabillity-ball-wall-squat) | [Asset](https://api.smartworkout.app/asset/video/ac08cf1b-b9d6-41a6-8282-b2b68cec3a25.mp4) | video/mp4 · available | `/exercises/stabillity-ball-wall-squat.mp4` | 729622 | Ready |
| `builtin-exercise:stacionary-bike` | Stacionary Bike | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/stacionary-bike) | [Asset](https://api.smartworkout.app/asset/video/5c370a4a-ad16-4679-b218-a25a4537bab1.mp4) | video/mp4 · available | `/exercises/stacionary-bike.mp4` | 609937 | Ready |
| `builtin-exercise:stair-climber` | Stair Climber | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/stair-climber) | [Asset](https://api.smartworkout.app/asset/video/6548fbeb-3ba0-4c6a-83a5-ef524cf046d5.mp4) | video/mp4 · available | `/exercises/stair-climber.mp4` | 569467 | Ready |
| `builtin-exercise:standing-air-bike` | Standing Air Bike | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/standing-air-bike) | [Asset](https://api.smartworkout.app/asset/video/020621d2-137e-4972-a5e3-86406a612da1.mp4) | video/mp4 · available | `/exercises/standing-air-bike.mp4` | 1469145 | Ready |
| `builtin-exercise:standing-cable-ab-crunch` | Standing Cable Ab Crunch | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/standing-cable-ab-crunch) | [Asset](https://api.smartworkout.app/asset/video/883749ad-f278-4d93-b235-226fb1b728a4.mp4) | video/mp4 · available | `/exercises/standing-cable-ab-crunch.mp4` | 1041905 | Ready |
| `builtin-exercise:standing-cable-chest-press` | Standing Cable Chest Press | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/standing-cable-chest-press) | [Asset](https://api.smartworkout.app/asset/video/ef96f9bc-745f-4096-a1c1-f5fdd71e94df.mp4) | video/mp4 · available | `/exercises/standing-cable-chest-press.mp4` | 666270 | Ready |
| `builtin-exercise:standing-cable-low-chest-press` | Standing Cable Low Chest Press | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/standing-cable-low-chest-press) | [Asset](https://api.smartworkout.app/asset/video/a6ab5a37-9332-4d22-95f0-f59cf333b5cd.mp4) | video/mp4 · available | `/exercises/standing-cable-low-chest-press.mp4` | 775593 | Ready |
| `builtin-exercise:standing-calf-raise` | Standing Calf Raise | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/standing-calf-raise) | [Asset](https://api.smartworkout.app/asset/video/e760851c-8843-42df-ab2f-0bc433ed2758.mp4) | video/mp4 · available | `/exercises/standing-calf-raise.mp4` | 546688 | Ready |
| `builtin-exercise:standing-chest-opener` | Standing Chest Opener | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/standing-chest-opener) | [Asset](https://api.smartworkout.app/asset/video/0edd8e70-9491-4019-b263-f7a5a14f6b96.mp4) | video/mp4 · available | `/exercises/standing-chest-opener.mp4` | 762075 | Ready |
| `builtin-exercise:standing-cuban-press` | Standing Cuban Press | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/standing-cuban-press) | [Asset](https://api.smartworkout.app/asset/video/9f763865-263a-4137-a426-a8874d9e2165.mp4) | video/mp4 · available | `/exercises/standing-cuban-press.mp4` | 1173721 | Ready |
| `builtin-exercise:standing-downward-dog` | Standing Downward Dog | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/standing-downward-dog) | [Asset](https://api.smartworkout.app/asset/video/81311858-3f0b-48e7-a043-87855e01e7a9.mp4) | video/mp4 · available | `/exercises/standing-downward-dog.mp4` | 805224 | Ready |
| `builtin-exercise:standing-dumbbell-shoulder-press` | Standing Dumbbell Shoulder Press | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/standing-dumbbell-shoulder-press) | [Asset](https://api.smartworkout.app/asset/video/a2e436e2-758d-41cb-9672-a813adde7526.mp4) | video/mp4 · available | `/exercises/standing-dumbbell-shoulder-press.mp4` | 529993 | Ready |
| `builtin-exercise:standing-forward-bend` | Standing Forward Bend | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/standing-forward-bend) | [Asset](https://api.smartworkout.app/asset/video/8e257bbf-4f81-44f5-8775-c95eb1c3ada1.mp4) | video/mp4 · available | `/exercises/standing-forward-bend.mp4` | 856941 | Ready |
| `builtin-exercise:standing-hip-abduction` | Standing Hip Abduction | Gluteal | [Page](https://smartworkout.app/en/exercise-library/gluteus/standing-hip-abduction) | [Asset](https://api.smartworkout.app/asset/video/4f239d80-8b4d-4c0b-af95-da9c526a549d.mp4) | video/mp4 · available | `/exercises/standing-hip-abduction.mp4` | 995022 | Ready |
| `builtin-exercise:standing-leg-curl` | Standing Leg Curl | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/standing-leg-curl) | [Asset](https://api.smartworkout.app/asset/video/be8cca5d-566c-492f-92a7-80e432da7ef5.mp4) | video/mp4 · available | `/exercises/standing-leg-curl.mp4` | 621133 | Ready |
| `builtin-exercise:standing-one-dumbbell-french-press` | Standing One Dumbbell French Press | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/standing-one-dumbbell-french-press) | [Asset](https://api.smartworkout.app/asset/video/1a9df420-28bd-40d6-a41d-52b1b9fd45e9.mp4) | video/mp4 · available | `/exercises/standing-one-dumbbell-french-press.mp4` | 450055 | Ready |
| `builtin-exercise:standing-overhead-barbell-triceps-extension` | Standing Overhead Barbell Triceps Extension | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/standing-overhead-barbell-triceps-extension) | [Asset](https://api.smartworkout.app/asset/video/d6aa7feb-97ae-43bb-9565-56003d80cf40.mp4) | video/mp4 · available | `/exercises/standing-overhead-barbell-triceps-extension.mp4` | 545669 | Ready |
| `builtin-exercise:standing-press-around` | Standing Press Around | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/standing-press-around) | [Asset](https://api.smartworkout.app/asset/video/b24e432c-7165-4c1f-a89a-ab5e71c05f14.mp4) | video/mp4 · available | `/exercises/standing-press-around.mp4` | 482662 | Ready |
| `builtin-exercise:standing-quadriceps-stretch` | Standing Quadriceps Stretch | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/standing-quadriceps-stretch) | [Asset](https://api.smartworkout.app/asset/video/70e949e3-e0c8-40b3-94d1-54bb2f3729c6.mp4) | video/mp4 · available | `/exercises/standing-quadriceps-stretch.mp4` | 1324471 | Ready |
| `builtin-exercise:standing-russian-twist` | Standing Russian Twist | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/standing-russian-twist) | [Asset](https://api.smartworkout.app/asset/video/c18fa21a-a51f-4809-8ac2-2fe04f267378.mp4) | video/mp4 · available | `/exercises/standing-russian-twist.mp4` | 1561360 | Ready |
| `builtin-exercise:standing-side-lat-stretch` | Standing Side Lat Stretch | Back | [Page](https://smartworkout.app/en/exercise-library/back/standing-side-lat-stretch) | [Asset](https://api.smartworkout.app/asset/video/3c53214a-7316-4933-bf75-83488a7e6af4.mp4) | video/mp4 · available | `/exercises/standing-side-lat-stretch.mp4` | 712924 | Ready |
| `builtin-exercise:standing-tibialis-raise` | Standing Tibialis Raise | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/standing-tibialis-raise) | [Asset](https://api.smartworkout.app/asset/video/caeac689-22e7-4507-9895-f81803a609e7.mp4) | video/mp4 · available | `/exercises/standing-tibialis-raise.mp4` | 444025 | Ready |
| `builtin-exercise:static-front-hold` | Static Front Hold | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/static-front-hold) | [Asset](https://api.smartworkout.app/asset/video/7fe38efc-2dbc-4108-853d-5ca57a80bef9.mp4) | video/mp4 · available | `/exercises/static-front-hold.mp4` | 1038011 | Ready |
| `builtin-exercise:straddle-planche` | Straddle Planche | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/straddle-planche) | [Asset](https://api.smartworkout.app/asset/video/7a83fd9b-36b8-4d53-a758-695f1de5f869.mp4) | video/mp4 · available | `/exercises/straddle-planche.mp4` | 1498962 | Ready |
| `builtin-exercise:straight-arm-lat-pulldown` | Straight-Arm Lat Pulldown | Back | [Page](https://smartworkout.app/en/exercise-library/back/straight-arm-lat-pulldown) | [Asset](https://api.smartworkout.app/asset/video/0e48f179-9c29-4921-b082-5dee57637c60.mp4) | video/mp4 · available | `/exercises/straight-arm-lat-pulldown.mp4` | 681737 | Ready |
| `builtin-exercise:straight-bar-dips` | Straight Bar Dips | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/straight-bar-dips) | [Asset](https://api.smartworkout.app/asset/video/f315f7c3-ca7c-4b39-b1a0-8ff9f64cab61.mp4) | video/mp4 · available | `/exercises/straight-bar-dips.mp4` | 660521 | Ready |
| `builtin-exercise:straight-leg-raise-on-dip-bars` | Straight Leg Raise on Dip Bars | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/straight-leg-raise-on-dip-bars) | [Asset](https://api.smartworkout.app/asset/video/0cb429b4-c12b-430a-b513-0cfbbdf6a9f2.mp4) | video/mp4 · available | `/exercises/straight-leg-raise-on-dip-bars.mp4` | 799919 | Ready |
| `builtin-exercise:sumo-deadlift` | Sumo Deadlift | Gluteal | [Page](https://smartworkout.app/en/exercise-library/gluteus/sumo-deadlift) | [Asset](https://api.smartworkout.app/asset/video/1d684df6-e4cb-44f9-9dab-9183bd016dd6.mp4) | video/mp4 · available | `/exercises/sumo-deadlift.mp4` | 1203637 | Ready |
| `builtin-exercise:sumo-squat` | Sumo Squat | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/sumo-squat) | [Asset](https://api.smartworkout.app/asset/video/2510a3d6-2777-4784-8a2e-ca15efd04241.mp4) | video/mp4 · available | `/exercises/sumo-squat.mp4` | 908655 | Ready |
| `builtin-exercise:sumo-squat-off-stepbox` | Sumo Squat off Stepbox | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/sumo-squat-off-stepbox) | [Asset](https://api.smartworkout.app/asset/video/7639e567-4f6e-465d-8e6f-5211de23ff61.mp4) | video/mp4 · available | `/exercises/sumo-squat-off-stepbox.mp4` | 958888 | Ready |
| `builtin-exercise:sumo-squat-with-smith` | Sumo Squat With Smith | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/sumo-squat-with-smith) | [Asset](https://api.smartworkout.app/asset/video/80a09dbc-6d4b-4dcf-b209-d24e200372f9.mp4) | video/mp4 · available | `/exercises/sumo-squat-with-smith.mp4` | 756220 | Ready |
| `builtin-exercise:superman` | Superman | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/superman) | [Asset](https://api.smartworkout.app/asset/video/6be7b85a-6751-4d54-ab7c-5bd8671160b5.mp4) | video/mp4 · available | `/exercises/superman.mp4` | 1258404 | Ready |
| `builtin-exercise:superman-push-up` | Superman Push-Up | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/superman-push-up) | [Asset](https://api.smartworkout.app/asset/video/fcabbb3a-e431-48e8-a2b7-175fd1fe3a89.mp4) | video/mp4 · available | `/exercises/superman-push-up.mp4` | 916232 | Ready |
| `builtin-exercise:suspension-chest-fly` | Suspension Chest Fly | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/suspension-chest-fly) | [Asset](https://api.smartworkout.app/asset/video/104f1fe6-5018-41bd-aea9-423736a98cb7.mp4) | video/mp4 · available | `/exercises/suspension-chest-fly.mp4` | 1125306 | Ready |
| `builtin-exercise:suspension-inverted-row` | Suspension Inverted Row | Back | [Page](https://smartworkout.app/en/exercise-library/back/suspension-inverted-row) | [Asset](https://api.smartworkout.app/asset/video/2aaa7550-ab33-430f-ba0e-7cd6b8e95f5b.mp4) | video/mp4 · available | `/exercises/suspension-inverted-row.mp4` | 1337222 | Ready |
| `builtin-exercise:suspension-row` | Suspension Row | Back | [Page](https://smartworkout.app/en/exercise-library/back/suspension-row) | [Asset](https://api.smartworkout.app/asset/video/73cbd3f6-28ef-457d-8750-06326aea4300.mp4) | video/mp4 · available | `/exercises/suspension-row.mp4` | 975659 | Ready |
| `builtin-exercise:suspension-triceps-extension` | Suspension Triceps Extension | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/suspension-triceps-extension) | [Asset](https://api.smartworkout.app/asset/video/77c3a42e-c7ed-4cee-b282-75b25cb5fe1c.mp4) | video/mp4 · available | `/exercises/suspension-triceps-extension.mp4` | 839204 | Ready |
| `builtin-exercise:suspension-v-ups` | Suspension V-Ups | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/suspension-v-ups) | [Asset](https://api.smartworkout.app/asset/video/9e715057-1cdf-4aec-837c-d1d66b01c082.mp4) | video/mp4 · available | `/exercises/suspension-v-ups.mp4` | 1379974 | Ready |
| `builtin-exercise:svend-press` | Svend Press | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/svend-press) | [Asset](https://api.smartworkout.app/asset/video/70418929-f916-4a2f-822b-f2c9ba8d21d5.mp4) | video/mp4 · available | `/exercises/svend-press.mp4` | 542607 | Ready |
| `builtin-exercise:swiss-ball-leg-curl` | Swiss Ball Leg Curl | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/swiss-ball-leg-curl) | [Asset](https://api.smartworkout.app/asset/video/92213380-e1af-43f7-ba78-e4b92ad18daa.mp4) | video/mp4 · available | `/exercises/swiss-ball-leg-curl.mp4` | 949823 | Ready |
| `builtin-exercise:swiss-ball-plank` | Swiss Ball Plank | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/swiss-ball-plank) | [Asset](https://api.smartworkout.app/asset/video/e62b2c61-8694-4e73-af05-02e24563b0ea.mp4) | video/mp4 · available | `/exercises/swiss-ball-plank.mp4` | 626185 | Ready |
| `builtin-exercise:t-bar-bent-over-row` | T-Bar Bent Over Row | Back | [Page](https://smartworkout.app/en/exercise-library/back/t-bar-bent-over-row) | [Asset](https://api.smartworkout.app/asset/video/7d9f7624-4684-4a80-a3ae-91ac7c3ebc6d.mp4) | video/mp4 · available | `/exercises/t-bar-bent-over-row.mp4` | 793613 | Ready |
| `builtin-exercise:t-bar-chest-suported-row` | T-Bar Chest Suported Row | Back | [Page](https://smartworkout.app/en/exercise-library/back/t-bar-chest-suported-row) | [Asset](https://api.smartworkout.app/asset/video/9e528c53-154a-49ac-98ac-763da1ff569d.mp4) | video/mp4 · available | `/exercises/t-bar-chest-suported-row.mp4` | 667819 | Ready |
| `builtin-exercise:tate-press` | Tate Press | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/tate-press) | [Asset](https://api.smartworkout.app/asset/video/9889d45d-1949-405f-a3fa-fddedeec7692.mp4) | video/mp4 · available | `/exercises/tate-press.mp4` | 776416 | Ready |
| `builtin-exercise:terminal-knee-extension` | Terminal Knee Extension | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/terminal-knee-extension) | [Asset](https://api.smartworkout.app/asset/video/2ec96550-cf88-42a7-bd11-cdbd4cb0565e.mp4) | video/mp4 · available | `/exercises/terminal-knee-extension.mp4` | 461195 | Ready |
| `builtin-exercise:toe-touches` | Toe Touches | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/toe-touches) | [Asset](https://api.smartworkout.app/asset/video/b91ad743-b140-4756-8088-75b681a36ec6.mp4) | video/mp4 · available | `/exercises/toe-touches.mp4` | 2058230 | Ready |
| `builtin-exercise:toes-to-bar` | Toes To Bar | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/toes-to-bar) | [Asset](https://api.smartworkout.app/asset/video/1d180d72-8b8e-4cef-a5df-9b9b5511c3a2.mp4) | video/mp4 · available | `/exercises/toes-to-bar.mp4` | 819345 | Ready |
| `builtin-exercise:trap-bar-deadlift` | Trap Bar Deadlift | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/trap-bar-deadlift) | [Asset](https://api.smartworkout.app/asset/video/221e7f28-672b-4b70-83b6-857053801b68.mp4) | video/mp4 · available | `/exercises/trap-bar-deadlift.mp4` | 1183214 | Ready |
| `builtin-exercise:trap-bar-shrugs` | Trap Bar Shrugs | Back | [Page](https://smartworkout.app/en/exercise-library/back/trap-bar-shrugs) | [Asset](https://api.smartworkout.app/asset/video/cea71d9f-fedb-4fb9-a3f2-197f7df52147.mp4) | video/mp4 · available | `/exercises/trap-bar-shrugs.mp4` | 523455 | Ready |
| `builtin-exercise:trap-y-raise` | Trap Y Raise | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/trap-y-raise) | [Asset](https://api.smartworkout.app/asset/video/cc55d692-cee9-4513-8d6f-c987fe4fcd14.mp4) | video/mp4 · available | `/exercises/trap-y-raise.mp4` | 659484 | Ready |
| `builtin-exercise:treadmill-climbing` | Treadmill Climbing | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/treadmill-climbing) | [Asset](https://api.smartworkout.app/asset/video/5fba5177-2460-49b1-9f3a-8f0da0bed7f0.mp4) | video/mp4 · available | `/exercises/treadmill-climbing.mp4` | 600687 | Ready |
| `builtin-exercise:treadmill-run` | Treadmill Run | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/treadmill-run) | [Asset](https://api.smartworkout.app/asset/video/2043f724-95d7-4756-a935-b47cd2533f00.mp4) | video/mp4 · available | `/exercises/treadmill-run.mp4` | 809539 | Ready |
| `builtin-exercise:triceps-cable-kickback` | Triceps Cable Kickback | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/triceps-cable-kickback) | [Asset](https://api.smartworkout.app/asset/video/9d5996b0-863a-4528-86ff-5669983903bd.mp4) | video/mp4 · available | `/exercises/triceps-cable-kickback.mp4` | 561863 | Ready |
| `builtin-exercise:triceps-cable-pushdown-reverse-grip` | Triceps Cable Pushdown Reverse Grip | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/triceps-cable-pushdown-reverse-grip) | [Asset](https://api.smartworkout.app/asset/video/1d6c89cb-98bb-48c4-9e04-7c91ccd5ab34.mp4) | video/mp4 · available | `/exercises/triceps-cable-pushdown-reverse-grip.mp4` | 474208 | Ready |
| `builtin-exercise:triceps-push-up` | Triceps Push-Up | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/triceps-push-up) | [Asset](https://api.smartworkout.app/asset/video/024873d2-7e67-4ffc-a9bf-84db47317bda.mp4) | video/mp4 · available | `/exercises/triceps-push-up.mp4` | 1248915 | Ready |
| `builtin-exercise:triceps-pushdown-v-bar` | Triceps Pushdown V-Bar | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/triceps-pushdown-v-bar) | [Asset](https://api.smartworkout.app/asset/video/7c60b873-fe00-4844-813a-23ef8811f019.mp4) | video/mp4 · available | `/exercises/triceps-pushdown-v-bar.mp4` | 517575 | Ready |
| `builtin-exercise:trx-biceps-curl` | TRX Biceps Curl | Biceps | [Page](https://smartworkout.app/en/exercise-library/biceps/trx-biceps-curl) | [Asset](https://api.smartworkout.app/asset/video/1b225b9a-779a-4ec6-8295-53affcd3b590.mp4) | video/mp4 · available | `/exercises/trx-biceps-curl.mp4` | 835398 | Ready |
| `builtin-exercise:trx-single-leg-bird-dog` | TRX Single Leg Bird Dog | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/trx-single-leg-bird-dog) | [Asset](https://api.smartworkout.app/asset/video/84b4a59e-1afd-4b09-b984-ee08cb2fb3d4.mp4) | video/mp4 · available | `/exercises/trx-single-leg-bird-dog.mp4` | 1469412 | Ready |
| `builtin-exercise:tsunami-overhead-press` | Tsunami Overhead Press | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/tsunami-overhead-press) | [Asset](https://api.smartworkout.app/asset/video/6b716a00-d183-42ce-b086-45e87bd44dca.mp4) | video/mp4 · available | `/exercises/tsunami-overhead-press.mp4` | 702626 | Ready |
| `builtin-exercise:turkish-get-up` | Turkish Get Up | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/turkish-get-up) | [Asset](https://api.smartworkout.app/asset/video/1d37e077-fe0f-4171-bb0c-6b7e1886a3ab.mp4) | video/mp4 · available | `/exercises/turkish-get-up.mp4` | 2933718 | Ready |
| `builtin-exercise:underhand-triceps-extension` | Underhand Triceps Extension | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/underhand-triceps-extension) | [Asset](https://api.smartworkout.app/asset/video/6d0ca6ea-70e8-47f6-9d76-6bd3e4254d22.mp4) | video/mp4 · available | `/exercises/underhand-triceps-extension.mp4` | 490548 | Ready |
| `builtin-exercise:unilateral-farmer-walk` | Unilateral Farmer Walk | Forearms | [Page](https://smartworkout.app/en/exercise-library/forearms/unilateral-farmer-walk) | [Asset](https://api.smartworkout.app/asset/video/11baf506-4fb6-4333-9d0e-a13862654199.mp4) | video/mp4 · available | `/exercises/unilateral-farmer-walk.mp4` | 381003 | Ready |
| `builtin-exercise:upward-dog` | Upward Dog | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/upward-dog) | [Asset](https://api.smartworkout.app/asset/video/c3bda199-faa2-4f67-8498-841e8a86d6c0.mp4) | video/mp4 · available | `/exercises/upward-dog.mp4` | 1231974 | Ready |
| `builtin-exercise:v-sit-crunch` | V-Sit Crunch | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/v-sit-crunch) | [Asset](https://api.smartworkout.app/asset/video/0facf142-2880-4bc1-9254-a5885aeb3891.mp4) | video/mp4 · available | `/exercises/v-sit-crunch.mp4` | 1164462 | Ready |
| `builtin-exercise:v-up` | V-Up | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/v-up) | [Asset](https://api.smartworkout.app/asset/video/b056f73f-6295-4119-add2-010385f2457d.mp4) | video/mp4 · available | `/exercises/v-up.mp4` | 1510828 | Ready |
| `builtin-exercise:vertical-leg-press-smith-machine` | Vertical Leg Press Smith Machine | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/vertical-leg-press-smith-machine) | [Asset](https://api.smartworkout.app/asset/video/b5c4e337-b22f-4c7f-94b2-266576749184.mp4) | video/mp4 · available | `/exercises/vertical-leg-press-smith-machine.mp4` | 594610 | Ready |
| `builtin-exercise:walking-cardio` | Walking Cardio | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/walking-cardio) | [Asset](https://api.smartworkout.app/asset/video/d49f25cb-9c15-4a47-9010-b6c67c714eea.mp4) | video/mp4 · available | `/exercises/walking-cardio.mp4` | 759272 | Ready |
| `builtin-exercise:walking-lunges` | Walking Lunges | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/walking-lunges) | [Asset](https://api.smartworkout.app/asset/video/388121d2-8286-4d6f-8e8e-9c74cb90dacc.mp4) | video/mp4 · available | `/exercises/walking-lunges.mp4` | 1304911 | Ready |
| `builtin-exercise:wall-angel` | Wall Angel | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/wall-angel) | [Asset](https://api.smartworkout.app/asset/video/95e65845-1451-4d21-a5d9-fa8b20996ad0.mp4) | video/mp4 · available | `/exercises/wall-angel.mp4` | 451485 | Ready |
| `builtin-exercise:wall-sit` | Wall Sit | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/wall-sit) | [Asset](https://api.smartworkout.app/asset/video/28b0adc7-9bff-49dc-9a4f-b546745a4345.mp4) | video/mp4 · available | `/exercises/wall-sit.mp4` | 833632 | Ready |
| `builtin-exercise:weighted-ab-crunches` | Weighted Ab Crunches | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/weighted-ab-crunches) | [Asset](https://api.smartworkout.app/asset/video/9cea72c3-788a-4768-961f-2464b5fff38e.mp4) | video/mp4 · available | `/exercises/weighted-ab-crunches.mp4` | 1026014 | Ready |
| `builtin-exercise:weighted-back-extension` | Weighted Back Extension | Gluteal | [Page](https://smartworkout.app/en/exercise-library/gluteus/weighted-back-extension) | [Asset](https://api.smartworkout.app/asset/video/66d21316-727a-4d60-b9c0-d3bab1c00bee.mp4) | video/mp4 · available | `/exercises/weighted-back-extension.mp4` | 792567 | Ready |
| `builtin-exercise:weighted-bench-dips` | Weighted Bench Dips | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/weighted-bench-dips) | [Asset](https://api.smartworkout.app/asset/video/fc7a0f6e-dcaa-4252-8c1a-065e1ea733a2.mp4) | video/mp4 · available | `/exercises/weighted-bench-dips.mp4` | 945194 | Ready |
| `builtin-exercise:weighted-chin-up` | Weighted Chin Up | Biceps | [Page](https://smartworkout.app/en/exercise-library/biceps/weighted-chin-up) | [Asset](https://api.smartworkout.app/asset/video/659693fb-f11e-4ee1-a6b2-3942adca3454.mp4) | video/mp4 · available | `/exercises/weighted-chin-up.mp4` | 671908 | Ready |
| `builtin-exercise:weighted-cossack-squat` | Weighted Cossack Squat | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/weighted-cossack-squat) | [Asset](https://api.smartworkout.app/asset/video/9ac962ba-977f-4b70-8be3-09347be531b8.mp4) | video/mp4 · available | `/exercises/weighted-cossack-squat.mp4` | 1846059 | Ready |
| `builtin-exercise:weighted-dead-bug` | Weighted Dead Bug | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/weighted-dead-bug) | [Asset](https://api.smartworkout.app/asset/video/402cba6a-63d1-4179-8c0a-e5d2ee40f3d1.mp4) | video/mp4 · available | `/exercises/weighted-dead-bug.mp4` | 1678669 | Ready |
| `builtin-exercise:weighted-decline-crunch` | Weighted Decline Crunch | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/weighted-decline-crunch) | [Asset](https://api.smartworkout.app/asset/video/176f118d-4de9-47b6-b93e-cb3aa1493f7b.mp4) | video/mp4 · available | `/exercises/weighted-decline-crunch.mp4` | 718627 | Ready |
| `builtin-exercise:weighted-dips` | Weighted Dips | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/weighted-dips) | [Asset](https://api.smartworkout.app/asset/video/00807615-ad39-4288-9b27-b33d9e3c7eb3.mp4) | video/mp4 · available | `/exercises/weighted-dips.mp4` | 810153 | Ready |
| `builtin-exercise:weighted-glute-bridge` | Weighted Glute Bridge | Gluteal | [Page](https://smartworkout.app/en/exercise-library/gluteus/weighted-glute-bridge) | [Asset](https://api.smartworkout.app/asset/video/03924d42-784a-4b17-9c6d-b3d63c22ac7c.mp4) | video/mp4 · available | `/exercises/weighted-glute-bridge.mp4` | 1075651 | Ready |
| `builtin-exercise:weighted-hanging-leg-raise` | Weighted Hanging Leg Raise | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/weighted-hanging-leg-raise) | [Asset](https://api.smartworkout.app/asset/video/af8b3a07-9947-401a-85a0-f726cf72363b.mp4) | video/mp4 · available | `/exercises/weighted-hanging-leg-raise.mp4` | 736988 | Ready |
| `builtin-exercise:weighted-hollow-body-hold` | Weighted Hollow Body Hold | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/weighted-hollow-body-hold) | [Asset](https://api.smartworkout.app/asset/video/e658baee-8487-4f4f-a976-8303dc4774a3.mp4) | video/mp4 · available | `/exercises/weighted-hollow-body-hold.mp4` | 561027 | Ready |
| `builtin-exercise:weighted-muscle-up` | Weighted Muscle-Up | Triceps | [Page](https://smartworkout.app/en/exercise-library/triceps/weighted-muscle-up) | [Asset](https://api.smartworkout.app/asset/video/ae178817-b0e1-4eaf-96aa-9228ca2c797b.mp4) | video/mp4 · available | `/exercises/weighted-muscle-up.mp4` | 394460 | Ready |
| `builtin-exercise:weighted-pistol-squat` | Weighted Pistol Squat | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/weighted-pistol-squat) | [Asset](https://api.smartworkout.app/asset/video/94bd5d78-efe8-41e7-9ae6-6656dc501b1d.mp4) | video/mp4 · available | `/exercises/weighted-pistol-squat.mp4` | 839008 | Ready |
| `builtin-exercise:weighted-plank` | Weighted Plank | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/weighted-plank) | [Asset](https://api.smartworkout.app/asset/video/7838d7a5-3db2-483e-9eb5-d0946c68cbd6.mp4) | video/mp4 · available | `/exercises/weighted-plank.mp4` | 579880 | Ready |
| `builtin-exercise:weighted-pull-up` | Weighted Pull-Up | Back | [Page](https://smartworkout.app/en/exercise-library/back/weighted-pull-up) | [Asset](https://api.smartworkout.app/asset/video/380148be-7a79-4a02-8a8b-4c82cf08afc6.mp4) | video/mp4 · available | `/exercises/weighted-pull-up.mp4` | 704261 | Ready |
| `builtin-exercise:weighted-push-up` | Weighted Push-Up | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/weighted-push-up) | [Asset](https://api.smartworkout.app/asset/video/44442a7f-b7c0-4ae4-afba-96adf71f1c22.mp4) | video/mp4 · available | `/exercises/weighted-push-up.mp4` | 1270841 | Ready |
| `builtin-exercise:weighted-russian-twist` | Weighted Russian Twist | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/weighted-russian-twist) | [Asset](https://api.smartworkout.app/asset/video/7b69b3b7-82b7-422a-886a-910e98e99ef3.mp4) | video/mp4 · available | `/exercises/weighted-russian-twist.mp4` | 1351753 | Ready |
| `builtin-exercise:weighted-seated-calf-raise` | Weighted Seated Calf Raise | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/weighted-seated-calf-raise) | [Asset](https://api.smartworkout.app/asset/video/16f48eef-91b8-4341-80d6-8be38aab50e6.mp4) | video/mp4 · available | `/exercises/weighted-seated-calf-raise.mp4` | 688964 | Ready |
| `builtin-exercise:weighted-sissy-squat` | Weighted Sissy Squat | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/weighted-sissy-squat) | [Asset](https://api.smartworkout.app/asset/video/59c69e5e-98ce-4844-ad03-97039bc82022.mp4) | video/mp4 · available | `/exercises/weighted-sissy-squat.mp4` | 896655 | Ready |
| `builtin-exercise:weighted-sit-up` | Weighted Sit Up | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/weighted-sit-up) | [Asset](https://api.smartworkout.app/asset/video/a3caa058-de3c-4f94-9890-fc860559bf3c.mp4) | video/mp4 · available | `/exercises/weighted-sit-up.mp4` | 966591 | Ready |
| `builtin-exercise:weighted-straight-arm-crunch` | Weighted Straight Arm Crunch | Abs | [Page](https://smartworkout.app/en/exercise-library/abs/weighted-straight-arm-crunch) | [Asset](https://api.smartworkout.app/asset/video/c014bfaf-4c7c-4d2d-9611-269045756e2a.mp4) | video/mp4 · available | `/exercises/weighted-straight-arm-crunch.mp4` | 893808 | Ready |
| `builtin-exercise:weighted-woodchopper` | Weighted Woodchopper | Shoulders | [Page](https://smartworkout.app/en/exercise-library/shoulders/weighted-woodchopper) | [Asset](https://api.smartworkout.app/asset/video/9b807b06-2a76-4bdb-b595-8f8473e11b90.mp4) | video/mp4 · available | `/exercises/weighted-woodchopper.mp4` | 995247 | Ready |
| `builtin-exercise:wide-grip-chest-supported-row` | Wide Grip Chest Supported Row | Back | [Page](https://smartworkout.app/en/exercise-library/back/wide-grip-chest-supported-row) | [Asset](https://api.smartworkout.app/asset/video/ea38494d-085e-4681-95f1-79730bd28c92.mp4) | video/mp4 · available | `/exercises/wide-grip-chest-supported-row.mp4` | 787842 | Ready |
| `builtin-exercise:wide-grip-lat-pulldown` | Wide Grip Lat Pulldown | Back | [Page](https://smartworkout.app/en/exercise-library/back/wide-grip-lat-pulldown) | [Asset](https://api.smartworkout.app/asset/video/6fff17b4-6a5a-4a89-a41c-6d25203cab15.mp4) | video/mp4 · available | `/exercises/wide-grip-lat-pulldown.mp4` | 631522 | Ready |
| `builtin-exercise:wide-grip-rear-pull-up` | Wide Grip Rear Pull-Up | Back | [Page](https://smartworkout.app/en/exercise-library/back/wide-grip-rear-pull-up) | [Asset](https://api.smartworkout.app/asset/video/e4176ece-488a-44df-8ca7-b51bb92a5378.mp4) | video/mp4 · available | `/exercises/wide-grip-rear-pull-up.mp4` | 782404 | Ready |
| `builtin-exercise:wide-grip-standing-barbell-curl` | Wide Grip Standing Barbell Curl | Biceps | [Page](https://smartworkout.app/en/exercise-library/biceps/wide-grip-standing-barbell-curl) | [Asset](https://api.smartworkout.app/asset/video/513c4873-55c4-4588-ab4d-044ccc0654f5.mp4) | video/mp4 · available | `/exercises/wide-grip-standing-barbell-curl.mp4` | 691923 | Ready |
| `builtin-exercise:wide-hand-push-up` | Wide Hand Push-Up | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/wide-hand-push-up) | [Asset](https://api.smartworkout.app/asset/video/1799afbc-3a7a-4035-ae34-b9fe9889daa6.mp4) | video/mp4 · available | `/exercises/wide-hand-push-up.mp4` | 1016065 | Ready |
| `builtin-exercise:worlds-greatest-stretch` | World’s Greatest Stretch | Chest | [Page](https://smartworkout.app/en/exercise-library/chest/world’s-greatest-stretch) | [Asset](https://api.smartworkout.app/asset/video/a9fe5358-5acd-41be-888f-08c2d4787f8c.mp4) | video/mp4 · available | `/exercises/worlds-greatest-stretch.mp4` | 1093622 | Ready |
| `builtin-exercise:wrist-push-up` | Wrist Push-Up | Forearms | [Page](https://smartworkout.app/en/exercise-library/forearms/wrist-push-up) | [Asset](https://api.smartworkout.app/asset/video/d9a6c488-ede0-4dcd-8611-0bd194e94614.mp4) | video/mp4 · available | `/exercises/wrist-push-up.mp4` | 903661 | Ready |
| `builtin-exercise:wrist-roller` | Wrist Roller | Forearms | [Page](https://smartworkout.app/en/exercise-library/forearms/wrist-roller) | [Asset](https://api.smartworkout.app/asset/video/6467e6f1-edbc-41f8-abab-b9961ad00992.mp4) | video/mp4 · available | `/exercises/wrist-roller.mp4` | 673047 | Ready |
| `builtin-exercise:zercher-squat` | Zercher Squat | Legs | [Page](https://smartworkout.app/en/exercise-library/legs/zercher-squat) | [Asset](https://api.smartworkout.app/asset/video/84d0a9e3-3355-4a94-bafc-4ca547d481bb.mp4) | video/mp4 · available | `/exercises/zercher-squat.mp4` | 926585 | Ready |
| `builtin-exercise:zottman-curl` | Zottman Curl | Biceps | [Page](https://smartworkout.app/en/exercise-library/biceps/zottman-curl) | [Asset](https://api.smartworkout.app/asset/video/7ff591e4-d0e1-4f8d-a368-3c5e17e86ba4.mp4) | video/mp4 · available | `/exercises/zottman-curl.mp4` | 883663 | Ready |

## Legacy v2 → v3 migration decisions (399)

Every former built-in ID has one deterministic decision. Exact/Equivalent successors remap preferences and workout references. Removed records remain archived for history; workout-exercise rows receive name/category snapshots.

| Legacy ID | Legacy name | Old category | Successor | Decision | Basis |
| --- | --- | --- | --- | --- | --- |
| `builtin-exercise:barbell-bench-press` | Barbell Bench Press | Chest | `builtin-exercise:barbell-bench-press` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/chest/barbell-bench-press |
| `builtin-exercise:dumbbell-bench-press` | Dumbbell Bench Press | Chest | `builtin-exercise:dumbbell-bench-press` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/chest/dumbbell-bench-press |
| `builtin-exercise:incline-barbell-bench-press` | Incline Barbell Bench Press | Chest | `builtin-exercise:incline-barbell-bench-press` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/chest/incline-barbell-bench-press |
| `builtin-exercise:incline-dumbbell-bench-press` | Incline Dumbbell Bench Press | Chest | `builtin-exercise:incline-dumbbell-bench-press` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/chest/incline-dumbbell-bench-press |
| `builtin-exercise:decline-barbell-bench-press` | Decline Barbell Bench Press | Chest | `builtin-exercise:decline-barbell-bench-press` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/chest/decline-barbell-bench-press |
| `builtin-exercise:decline-dumbbell-bench-press` | Decline Dumbbell Bench Press | Chest | `builtin-exercise:decline-dumbbell-bench-press` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/chest/decline-dumbbell-bench-press |
| `builtin-exercise:machine-chest-press` | Machine Chest Press | Chest | `builtin-exercise:machine-chest-press` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/chest/machine-chest-press |
| `builtin-exercise:incline-machine-press` | Incline Machine Press | Chest | `builtin-exercise:incline-hammer-chest-press` | Equivalent | reviewed canonical-name/setup equivalent in live SmartWorkout inventory |
| `builtin-exercise:smith-machine-bench-press` | Smith Machine Bench Press | Chest | `builtin-exercise:smith-bench-press` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/chest/smith-bench-press |
| `builtin-exercise:smith-machine-incline-press` | Smith Machine Incline Press | Chest | `builtin-exercise:smith-incline-chest-press` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/chest/smith-incline-chest-press |
| `builtin-exercise:cable-fly` | Cable Fly | Chest | `builtin-exercise:cable-middle-chest-fly` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/chest/cable-middle-chest-fly |
| `builtin-exercise:low-to-high-cable-fly` | Low-to-High Cable Fly | Chest | `builtin-exercise:low-high-cable-chest-fly` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/chest/low-high-cable-chest-fly |
| `builtin-exercise:high-to-low-cable-fly` | High-to-Low Cable Fly | Chest | `builtin-exercise:high-low-cable-chest-fly` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/chest/high-low-cable-chest-fly |
| `builtin-exercise:pec-deck` | Pec Deck | Chest | `builtin-exercise:pec-deck-chest-fly` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/chest/pec-deck-chest-fly |
| `builtin-exercise:push-up` | Push-Up | Chest | `builtin-exercise:push-up` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/chest/push-up |
| `builtin-exercise:incline-push-up` | Incline Push-Up | Chest | `builtin-exercise:incline-push-up` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/chest/incline-push-up |
| `builtin-exercise:decline-push-up` | Decline Push-Up | Chest | `builtin-exercise:decline-push-up` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/chest/decline-push-up |
| `builtin-exercise:chest-dip` | Chest Dip | Chest | `builtin-exercise:chest-dips` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/chest/chest-dips |
| `builtin-exercise:dumbbell-squeeze-press` | Dumbbell Squeeze Press | Chest | `builtin-exercise:close-grip-dumbbell-press` | Equivalent | reviewed canonical-name/setup equivalent in live SmartWorkout inventory |
| `builtin-exercise:single-arm-cable-chest-press` | Single-Arm Cable Chest Press | Chest | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:resistance-band-chest-press` | Resistance Band Chest Press | Chest | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:plate-pinch-press` | Plate Pinch Press | Chest | `builtin-exercise:svend-press` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/chest/svend-press |
| `builtin-exercise:lat-pulldown` | Lat Pulldown | Back | `builtin-exercise:cable-lat-pulldown` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/back/cable-lat-pulldown |
| `builtin-exercise:neutral-grip-lat-pulldown` | Neutral-Grip Lat Pulldown | Back | `builtin-exercise:cable-neutral-grip-lat-pulldown` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/back/cable-neutral-grip-lat-pulldown |
| `builtin-exercise:wide-grip-lat-pulldown` | Wide-Grip Lat Pulldown | Back | `builtin-exercise:wide-grip-lat-pulldown` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/back/wide-grip-lat-pulldown |
| `builtin-exercise:reverse-grip-lat-pulldown` | Reverse-Grip Lat Pulldown | Back | `builtin-exercise:cable-reverse-grip-pulldown` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/back/cable-reverse-grip-pulldown |
| `builtin-exercise:pull-up` | Pull-Up | Back | `builtin-exercise:pull-up` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/back/pull-up |
| `builtin-exercise:chin-up` | Chin-Up | Back | `builtin-exercise:chin-up` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/back/chin-up |
| `builtin-exercise:neutral-grip-pull-up` | Neutral-Grip Pull-Up | Back | `builtin-exercise:pull-up-neutral-grip` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/back/pull-up-neutral-grip |
| `builtin-exercise:assisted-pull-up` | Assisted Pull-Up | Back | `builtin-exercise:assisted-pull-up` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/back/assisted-pull-up |
| `builtin-exercise:seated-cable-row` | Seated Cable Row | Back | `builtin-exercise:seated-cable-row` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/back/seated-cable-row |
| `builtin-exercise:wide-grip-seated-cable-row` | Wide-Grip Seated Cable Row | Back | `builtin-exercise:seated-cable-wide-grip-row` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/back/seated-cable-wide-grip-row |
| `builtin-exercise:chest-supported-dumbbell-row` | Chest-Supported Dumbbell Row | Back | `builtin-exercise:dumbbell-neutral-grip-incline-bench-row` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/back/dumbbell-neutral-grip-incline-bench-row |
| `builtin-exercise:chest-supported-t-bar-row` | Chest-Supported T-Bar Row | Back | `builtin-exercise:t-bar-chest-suported-row` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/back/t-bar-chest-suported-row |
| `builtin-exercise:machine-row` | Machine Row | Back | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:iso-lateral-machine-row` | Iso-Lateral Machine Row | Back | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:barbell-bent-over-row` | Barbell Bent-Over Row | Back | `builtin-exercise:barbell-bent-over-row` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/back/barbell-bent-over-row |
| `builtin-exercise:pendlay-row` | Pendlay Row | Back | `builtin-exercise:pendlay-row` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/back/pendlay-row |
| `builtin-exercise:single-arm-dumbbell-row` | Single-Arm Dumbbell Row | Back | `builtin-exercise:dumbbell-bent-over-row` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/back/dumbbell-bent-over-row |
| `builtin-exercise:t-bar-row` | T-Bar Row | Back | `builtin-exercise:t-bar-bent-over-row` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/back/t-bar-bent-over-row |
| `builtin-exercise:landmine-row` | Landmine Row | Back | `builtin-exercise:close-grip-landmine-row` | Equivalent | reviewed canonical-name/setup equivalent in live SmartWorkout inventory |
| `builtin-exercise:inverted-row` | Inverted Row | Back | `builtin-exercise:inverted-row-australian` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/back/inverted-row-(australian) |
| `builtin-exercise:straight-arm-pulldown` | Straight-Arm Pulldown | Back | `builtin-exercise:straight-arm-lat-pulldown` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/back/straight-arm-lat-pulldown |
| `builtin-exercise:cable-pullover` | Cable Pullover | Back | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:dumbbell-pullover` | Dumbbell Pullover | Back | `builtin-exercise:dumbbell-lat-pullover` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/back/dumbbell-lat-pullover |
| `builtin-exercise:rack-pull` | Rack Pull | Back | `builtin-exercise:barbell-rack-pull` | Equivalent | reviewed canonical-name/setup equivalent in live SmartWorkout inventory |
| `builtin-exercise:45-degree-back-extension` | 45-Degree Back Extension | Back | `builtin-exercise:back-extension` | Equivalent | reviewed canonical-name/setup equivalent in live SmartWorkout inventory |
| `builtin-exercise:barbell-good-morning` | Barbell Good Morning | Legs | `builtin-exercise:barbell-good-morning` | Exact | exact canonical slug/name in live SmartWorkout inventory |
| `builtin-exercise:barbell-overhead-press` | Barbell Overhead Press | Shoulders | `builtin-exercise:barbell-overhead-press` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/shoulders/barbell-overhead-press |
| `builtin-exercise:seated-barbell-shoulder-press` | Seated Barbell Shoulder Press | Shoulders | `builtin-exercise:seated-barbell-shoulder-press` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/shoulders/seated-barbell-shoulder-press |
| `builtin-exercise:dumbbell-shoulder-press` | Dumbbell Shoulder Press | Shoulders | `builtin-exercise:standing-dumbbell-shoulder-press` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/shoulders/standing-dumbbell-shoulder-press |
| `builtin-exercise:arnold-press` | Arnold Press | Shoulders | `builtin-exercise:seated-arnold-dumbbell-press` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/shoulders/seated-arnold-dumbbell-press |
| `builtin-exercise:machine-shoulder-press` | Machine Shoulder Press | Shoulders | `builtin-exercise:machine-shoulder-press` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/shoulders/machine-shoulder-press |
| `builtin-exercise:smith-machine-shoulder-press` | Smith Machine Shoulder Press | Shoulders | `builtin-exercise:smith-shoulder-press` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/shoulders/smith-shoulder-press |
| `builtin-exercise:landmine-press` | Landmine Press | Shoulders | `builtin-exercise:landmine-press` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/shoulders/landmine-press |
| `builtin-exercise:dumbbell-front-raise` | Dumbbell Front Raise | Shoulders | `builtin-exercise:dumbbell-front-raise` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/shoulders/dumbbell-front-raise |
| `builtin-exercise:cable-front-raise` | Cable Front Raise | Shoulders | `builtin-exercise:cable-front-raise` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/shoulders/cable-front-raise |
| `builtin-exercise:dumbbell-lateral-raise` | Dumbbell Lateral Raise | Shoulders | `builtin-exercise:dumbbell-lateral-raise` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/shoulders/dumbbell-lateral-raise |
| `builtin-exercise:cable-lateral-raise` | Cable Lateral Raise | Shoulders | `builtin-exercise:cable-lateral-raise` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/shoulders/cable-lateral-raise |
| `builtin-exercise:machine-lateral-raise` | Machine Lateral Raise | Shoulders | `builtin-exercise:machine-lateral-raise` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/shoulders/machine-lateral-raise |
| `builtin-exercise:lean-away-cable-lateral-raise` | Lean-Away Cable Lateral Raise | Shoulders | `builtin-exercise:cable-leaning-lateral-raise` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/shoulders/cable-leaning-lateral-raise |
| `builtin-exercise:dumbbell-rear-delt-fly` | Dumbbell Rear Delt Fly | Shoulders | `builtin-exercise:bent-over-dumbbell-lateral-raise` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/shoulders/bent-over-dumbbell-lateral-raise |
| `builtin-exercise:reverse-pec-deck` | Reverse Pec Deck | Shoulders | `builtin-exercise:machine-reverse-flyes` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/shoulders/machine-reverse-flyes |
| `builtin-exercise:cable-rear-delt-fly` | Cable Rear Delt Fly | Shoulders | `builtin-exercise:cable-rear-delt-fly-reverse-fly` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/shoulders/cable-rear-delt-fly-(reverse-fly) |
| `builtin-exercise:face-pull` | Face Pull | Shoulders | `builtin-exercise:cable-face-pull` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/shoulders/cable-face-pull |
| `builtin-exercise:band-face-pull` | Band Face Pull | Shoulders | `builtin-exercise:banded-face-pull` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/shoulders/banded-face-pull |
| `builtin-exercise:cable-external-rotation` | Cable External Rotation | Shoulders | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:band-external-rotation` | Band External Rotation | Shoulders | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:barbell-curl` | Barbell Curl | Arms | `builtin-exercise:biceps-barbell-curl` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/biceps/biceps-barbell-curl |
| `builtin-exercise:ez-bar-curl` | EZ-Bar Curl | Arms | `builtin-exercise:ez-bar-biceps-curl` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/biceps/ez-bar-biceps-curl |
| `builtin-exercise:dumbbell-curl` | Dumbbell Curl | Arms | `builtin-exercise:dumbbell-biceps-curl` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/biceps/dumbbell-biceps-curl |
| `builtin-exercise:alternating-dumbbell-curl` | Alternating Dumbbell Curl | Arms | `builtin-exercise:dumbbell-alternate-supinated-curl` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/biceps/dumbbell-alternate-supinated-curl |
| `builtin-exercise:incline-dumbbell-curl` | Incline Dumbbell Curl | Arms | `builtin-exercise:seated-incline-biceps-curl` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/biceps/seated-incline-biceps-curl |
| `builtin-exercise:preacher-curl` | Preacher Curl | Arms | `builtin-exercise:ez-bar-preacher-curl` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/biceps/ez-bar-preacher-curl |
| `builtin-exercise:machine-preacher-curl` | Machine Preacher Curl | Arms | `builtin-exercise:machine-preacher-curl` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/biceps/machine-preacher-curl |
| `builtin-exercise:cable-curl` | Cable Curl | Arms | `builtin-exercise:bar-cable-biceps-curl` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/biceps/bar-cable-biceps-curl |
| `builtin-exercise:bayesian-cable-curl` | Bayesian Cable Curl | Arms | `builtin-exercise:bayesian-cable-curl` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/biceps/bayesian-cable-curl |
| `builtin-exercise:spider-curl` | Spider Curl | Arms | `builtin-exercise:dumbbell-spider-curl` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/biceps/dumbbell-spider-curl |
| `builtin-exercise:concentration-curl` | Concentration Curl | Arms | `builtin-exercise:dumbbell-concentration-curl` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/biceps/dumbbell-concentration-curl |
| `builtin-exercise:hammer-curl` | Hammer Curl | Arms | `builtin-exercise:dumbbell-hammer-curl` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/biceps/dumbbell-hammer-curl |
| `builtin-exercise:cross-body-hammer-curl` | Cross-Body Hammer Curl | Arms | `builtin-exercise:dumbbell-cross-body-hammer-curl` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/biceps/dumbbell-cross-body-hammer-curl |
| `builtin-exercise:reverse-curl` | Reverse Curl | Arms | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:cable-triceps-pushdown` | Cable Triceps Pushdown | Arms | `builtin-exercise:cable-triceps-pushdown` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/triceps/cable-triceps-pushdown |
| `builtin-exercise:rope-triceps-pushdown` | Rope Triceps Pushdown | Arms | `builtin-exercise:rope-triceps-pushdown` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/triceps/rope-triceps-pushdown |
| `builtin-exercise:overhead-cable-triceps-extension` | Overhead Cable Triceps Extension | Arms | `builtin-exercise:cable-overhead-triceps-extension` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/triceps/cable-overhead-triceps-extension |
| `builtin-exercise:dumbbell-overhead-triceps-extension` | Dumbbell Overhead Triceps Extension | Arms | `builtin-exercise:standing-one-dumbbell-french-press` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/triceps/standing-one-dumbbell-french-press |
| `builtin-exercise:ez-bar-skull-crusher` | EZ-Bar Skull Crusher | Arms | `builtin-exercise:lying-ez-bar-triceps-extension` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/triceps/lying-ez-bar-triceps-extension |
| `builtin-exercise:close-grip-bench-press` | Close-Grip Bench Press | Arms | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:diamond-push-up` | Diamond Push-Up | Arms | `builtin-exercise:diamond-push-up` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/triceps/diamond-push-up |
| `builtin-exercise:bench-dip` | Bench Dip | Arms | `builtin-exercise:seated-triceps-bench-dip` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/triceps/seated-triceps-bench-dip |
| `builtin-exercise:cable-triceps-kickback` | Cable Triceps Kickback | Arms | `builtin-exercise:triceps-cable-kickback` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/triceps/triceps-cable-kickback |
| `builtin-exercise:single-arm-triceps-pushdown` | Single-Arm Triceps Pushdown | Arms | `builtin-exercise:one-arm-triceps-cable-pushdown` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/triceps/one-arm-triceps-cable-pushdown |
| `builtin-exercise:dumbbell-wrist-curl` | Dumbbell Wrist Curl | Arms | `builtin-exercise:dumbbell-standing-wrist-curl` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/forearms/dumbbell-standing-wrist-curl |
| `builtin-exercise:dumbbell-reverse-wrist-curl` | Dumbbell Reverse Wrist Curl | Arms | `builtin-exercise:dumbbell-standing-reverse-wrist-curls` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/forearms/dumbbell-standing-reverse-wrist-curls |
| `builtin-exercise:barbell-wrist-curl` | Barbell Wrist Curl | Arms | `builtin-exercise:barbell-wrist-curl` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/forearms/barbell-wrist-curl |
| `builtin-exercise:plate-pinch-hold` | Plate Pinch Hold | Arms | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:back-squat` | Back Squat | Legs | `builtin-exercise:barbell-squat` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/barbell-squat |
| `builtin-exercise:front-squat` | Front Squat | Legs | `builtin-exercise:front-squat` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/front-squat |
| `builtin-exercise:goblet-squat` | Goblet Squat | Legs | `builtin-exercise:goblet-squat` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/goblet-squat |
| `builtin-exercise:hack-squat` | Hack Squat | Legs | `builtin-exercise:machine-hack-squat` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/machine-hack-squat |
| `builtin-exercise:smith-machine-squat` | Smith Machine Squat | Legs | `builtin-exercise:smith-squat` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/smith-squat |
| `builtin-exercise:belt-squat` | Belt Squat | Legs | `builtin-exercise:machine-belt-squat` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/machine-belt-squat |
| `builtin-exercise:leg-press` | Leg Press | Legs | `builtin-exercise:leg-press` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/leg-press |
| `builtin-exercise:single-leg-press` | Single-Leg Press | Legs | `builtin-exercise:single-leg-press` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/single-leg-press |
| `builtin-exercise:leg-extension` | Leg Extension | Legs | `builtin-exercise:seated-leg-extension-machine` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/seated-leg-extension-machine |
| `builtin-exercise:single-leg-extension` | Single-Leg Extension | Legs | `builtin-exercise:single-leg-extension` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/single-leg-extension |
| `builtin-exercise:sissy-squat` | Sissy Squat | Legs | `builtin-exercise:sissy-squat` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/sissy-squat |
| `builtin-exercise:wall-sit` | Wall Sit | Legs | `builtin-exercise:wall-sit` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/wall-sit |
| `builtin-exercise:romanian-deadlift` | Romanian Deadlift | Legs | `builtin-exercise:romanian-deadlift` | Exact | exact canonical slug/name in live SmartWorkout inventory |
| `builtin-exercise:dumbbell-romanian-deadlift` | Dumbbell Romanian Deadlift | Legs | `builtin-exercise:dumbbell-romanian-deadlift` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/dumbbell-romanian-deadlift |
| `builtin-exercise:single-leg-romanian-deadlift` | Single-Leg Romanian Deadlift | Legs | `builtin-exercise:single-leg-dumbbell-deadlift` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/single-leg-dumbbell-deadlift |
| `builtin-exercise:seated-leg-curl` | Seated Leg Curl | Legs | `builtin-exercise:seated-leg-curl` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/seated-leg-curl |
| `builtin-exercise:lying-leg-curl` | Lying Leg Curl | Legs | `builtin-exercise:prone-lying-leg-curl` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/prone-lying-leg-curl |
| `builtin-exercise:standing-single-leg-curl` | Standing Single-Leg Curl | Legs | `builtin-exercise:standing-leg-curl` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/standing-leg-curl |
| `builtin-exercise:nordic-hamstring-curl` | Nordic Hamstring Curl | Legs | `builtin-exercise:nordic-hamstring-curl` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/nordic-hamstring-curl |
| `builtin-exercise:glute-ham-raise` | Glute-Ham Raise | Legs | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:barbell-hip-thrust` | Barbell Hip Thrust | Legs | `builtin-exercise:hip-thrust` | Equivalent | exact legacy alias match: Hip Thrust |
| `builtin-exercise:dumbbell-hip-thrust` | Dumbbell Hip Thrust | Legs | `builtin-exercise:dumbbell-hip-thrust` | Exact | exact canonical slug/name in live SmartWorkout inventory |
| `builtin-exercise:glute-bridge` | Glute Bridge | Legs | `builtin-exercise:glute-bridge` | Exact | exact canonical slug/name in live SmartWorkout inventory |
| `builtin-exercise:cable-pull-through` | Cable Pull-Through | Legs | `builtin-exercise:cable-pull-through` | Exact | exact canonical slug/name in live SmartWorkout inventory |
| `builtin-exercise:cable-glute-kickback` | Cable Glute Kickback | Legs | `builtin-exercise:glute-cable-kickback` | Equivalent | unique normalized word-order/synonym match in live SmartWorkout inventory |
| `builtin-exercise:bulgarian-split-squat` | Bulgarian Split Squat | Legs | `builtin-exercise:dumbbell-bulgarian-squat` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/dumbbell-bulgarian-squat |
| `builtin-exercise:walking-lunge` | Walking Lunge | Legs | `builtin-exercise:dumbbell-walking-lunges` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/dumbbell-walking-lunges |
| `builtin-exercise:reverse-lunge` | Reverse Lunge | Legs | `builtin-exercise:rear-lunge` | Equivalent | reviewed canonical-name/setup equivalent in live SmartWorkout inventory |
| `builtin-exercise:forward-lunge` | Forward Lunge | Legs | `builtin-exercise:dumbbell-lunges` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/dumbbell-lunges |
| `builtin-exercise:lateral-lunge` | Lateral Lunge | Legs | `builtin-exercise:dumbbell-side-lunges` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/dumbbell-side-lunges |
| `builtin-exercise:step-up` | Step-Up | Legs | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:machine-hip-abduction` | Machine Hip Abduction | Legs | `builtin-exercise:seated-hip-abduction` | Equivalent | reviewed canonical-name/setup equivalent in live SmartWorkout inventory |
| `builtin-exercise:cable-hip-abduction` | Cable Hip Abduction | Legs | `builtin-exercise:cable-hip-abducction` | Equivalent | reviewed canonical-name/setup equivalent in live SmartWorkout inventory |
| `builtin-exercise:machine-hip-adduction` | Machine Hip Adduction | Legs | `builtin-exercise:seated-hip-adduction` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/seated-hip-adduction |
| `builtin-exercise:standing-calf-raise` | Standing Calf Raise | Legs | `builtin-exercise:standing-calf-raise` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/standing-calf-raise |
| `builtin-exercise:seated-calf-raise` | Seated Calf Raise | Legs | `builtin-exercise:seated-calf-raise` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/seated-calf-raise |
| `builtin-exercise:leg-press-calf-raise` | Leg Press Calf Raise | Legs | `builtin-exercise:calf-leg-press` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/calf-leg-press |
| `builtin-exercise:single-leg-calf-raise` | Single-Leg Calf Raise | Legs | `builtin-exercise:single-leg-calf-raise` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/single-leg-calf-raise |
| `builtin-exercise:crunch` | Crunch | Core | `builtin-exercise:abdominal-crunches` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/abs/abdominal-crunches |
| `builtin-exercise:cable-crunch` | Cable Crunch | Core | `builtin-exercise:kneeling-cable-abs-crunches` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/abs/kneeling-cable-abs-crunches |
| `builtin-exercise:machine-crunch` | Machine Crunch | Core | `builtin-exercise:machine-abdominal-crunches` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/abs/machine-abdominal-crunches |
| `builtin-exercise:reverse-crunch` | Reverse Crunch | Core | `builtin-exercise:reverse-crunches` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/abs/reverse-crunches |
| `builtin-exercise:sit-up` | Sit-Up | Core | `builtin-exercise:sit-up` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/abs/sit-up |
| `builtin-exercise:hanging-leg-raise` | Hanging Leg Raise | Core | `builtin-exercise:hanging-straight-leg-raise` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/abs/hanging-straight-leg-raise |
| `builtin-exercise:hanging-knee-raise` | Hanging Knee Raise | Core | `builtin-exercise:hanging-knee-raises` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/abs/hanging-knee-raises |
| `builtin-exercise:captains-chair-knee-raise` | Captain’s Chair Knee Raise | Core | `builtin-exercise:captains-chair-knee-raises` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/abs/captains-chair-knee-raises |
| `builtin-exercise:ab-wheel-rollout` | Ab Wheel Rollout | Core | `builtin-exercise:ab-wheel-rollout` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/abs/ab-wheel-rollout |
| `builtin-exercise:plank` | Plank | Core | `builtin-exercise:plank` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/abs/plank |
| `builtin-exercise:side-plank` | Side Plank | Core | `builtin-exercise:side-plank` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/abs/side-plank |
| `builtin-exercise:dead-bug` | Dead Bug | Core | `builtin-exercise:dead-bug` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/abs/dead-bug |
| `builtin-exercise:bird-dog` | Bird Dog | Core | `builtin-exercise:bird-dog` | Exact | exact canonical slug/name in live SmartWorkout inventory |
| `builtin-exercise:pallof-press` | Pallof Press | Core | `builtin-exercise:cable-horizontal-pallof-press` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/abs/cable-horizontal-pallof-press |
| `builtin-exercise:band-pallof-press` | Band Pallof Press | Core | `builtin-exercise:band-pallof-press` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/abs/band-pallof-press |
| `builtin-exercise:russian-twist` | Russian Twist | Core | `builtin-exercise:med-ball-russian-twist` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/abs/med-ball-russian-twist |
| `builtin-exercise:cable-wood-chop` | Cable Wood Chop | Core | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:landmine-rotation` | Landmine Rotation | Core | `builtin-exercise:landmine-twist` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/abs/landmine-twist |
| `builtin-exercise:bicycle-crunch` | Bicycle Crunch | Core | `builtin-exercise:bicycle-crunches` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/abs/bicycle-crunches |
| `builtin-exercise:suitcase-carry` | Suitcase Carry | Core | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:conventional-deadlift` | Conventional Deadlift | Full Body | `builtin-exercise:deadlift` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/deadlift |
| `builtin-exercise:sumo-deadlift` | Sumo Deadlift | Full Body | `builtin-exercise:sumo-deadlift` | Exact | exact canonical slug/name in live SmartWorkout inventory |
| `builtin-exercise:kettlebell-swing` | Kettlebell Swing | Full Body | `builtin-exercise:kettlebell-swing` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/kettlebell-swing |
| `builtin-exercise:kettlebell-clean` | Kettlebell Clean | Full Body | `builtin-exercise:kettelbell-clean` | Equivalent | unique normalized word-order/synonym match in live SmartWorkout inventory |
| `builtin-exercise:kettlebell-clean-and-press` | Kettlebell Clean and Press | Full Body | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:barbell-clean` | Barbell Clean | Full Body | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:dumbbell-thruster` | Dumbbell Thruster | Full Body | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:barbell-thruster` | Barbell Thruster | Full Body | `builtin-exercise:barbell-thruster` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/barbell-thruster |
| `builtin-exercise:burpee` | Burpee | Full Body | `builtin-exercise:burpee` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/burpee |
| `builtin-exercise:devil-press` | Devil Press | Full Body | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:farmer-carry` | Farmer Carry | Full Body | `builtin-exercise:dumbbell-farmer-carry` | Equivalent | reviewed canonical-name/setup equivalent in live SmartWorkout inventory |
| `builtin-exercise:sled-push` | Sled Push | Full Body | `builtin-exercise:prowler-sled` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/prowler-sled |
| `builtin-exercise:outdoor-running` | Outdoor Running | Cardio | `builtin-exercise:running` | Equivalent | reviewed canonical-name/setup equivalent in live SmartWorkout inventory |
| `builtin-exercise:treadmill-running` | Treadmill Running | Cardio | `builtin-exercise:treadmill-run` | Equivalent | reviewed canonical-name/setup equivalent in live SmartWorkout inventory |
| `builtin-exercise:track-running` | Track Running | Cardio | `builtin-exercise:running` | Equivalent | reviewed canonical-name/setup equivalent in live SmartWorkout inventory |
| `builtin-exercise:trail-running` | Trail Running | Cardio | `builtin-exercise:running` | Equivalent | reviewed canonical-name/setup equivalent in live SmartWorkout inventory |
| `builtin-exercise:sprint-intervals` | Sprint Intervals | Cardio | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:outdoor-walking` | Outdoor Walking | Cardio | `builtin-exercise:walking-cardio` | Equivalent | reviewed canonical-name/setup equivalent in live SmartWorkout inventory |
| `builtin-exercise:treadmill-walking` | Treadmill Walking | Cardio | `builtin-exercise:walking-cardio` | Equivalent | reviewed canonical-name/setup equivalent in live SmartWorkout inventory |
| `builtin-exercise:incline-treadmill-walking` | Incline Treadmill Walking | Cardio | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:hiking` | Hiking | Cardio | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:outdoor-cycling` | Outdoor Cycling | Cardio | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:stationary-bike` | Stationary Bike | Cardio | `builtin-exercise:stacionary-bike` | Equivalent | unique normalized word-order/synonym match in live SmartWorkout inventory |
| `builtin-exercise:spin-bike` | Spin Bike | Cardio | `builtin-exercise:stacionary-bike` | Equivalent | reviewed canonical-name/setup equivalent in live SmartWorkout inventory |
| `builtin-exercise:air-bike` | Air Bike | Cardio | `builtin-exercise:air-bike` | Exact | exact canonical slug/name in live SmartWorkout inventory |
| `builtin-exercise:rowing-machine` | Rowing Machine | Cardio | `builtin-exercise:rowing-machine` | Exact | exact canonical slug/name in live SmartWorkout inventory |
| `builtin-exercise:elliptical` | Elliptical | Cardio | `builtin-exercise:elliptical-trainer` | Equivalent | reviewed canonical-name/setup equivalent in live SmartWorkout inventory |
| `builtin-exercise:stair-climber` | Stair Climber | Cardio | `builtin-exercise:stair-climber` | Exact | exact canonical slug/name in live SmartWorkout inventory |
| `builtin-exercise:swimming` | Swimming | Cardio | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:jump-rope` | Jump Rope | Cardio | `builtin-exercise:jump-rope` | Exact | exact canonical slug/name in live SmartWorkout inventory |
| `builtin-exercise:skierg` | SkiErg | Cardio | `builtin-exercise:ski-ergometer` | Equivalent | exact legacy alias match: Ski Ergometer |
| `builtin-exercise:heavy-bag-boxing` | Heavy Bag Boxing | Cardio | `builtin-exercise:punching-bag-boxing` | Equivalent | reviewed canonical-name/setup equivalent in live SmartWorkout inventory |
| `builtin-exercise:band-shoulder-dislocate` | Band Shoulder Dislocate | Mobility | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:wall-shoulder-slide` | Wall Shoulder Slide | Mobility | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:scapular-wall-slide` | Scapular Wall Slide | Mobility | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:thread-the-needle` | Thread the Needle | Mobility | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:open-book-rotation` | Open Book Rotation | Mobility | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:half-kneeling-thoracic-rotation` | Half-Kneeling Thoracic Rotation | Mobility | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:90-90-hip-switch` | 90/90 Hip Switch | Mobility | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:hip-car` | Hip CAR | Mobility | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:adductor-rock-back` | Adductor Rock Back | Mobility | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:knee-to-wall-ankle-mobilization` | Knee-to-Wall Ankle Mobilization | Mobility | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:worlds-greatest-stretch` | World’s Greatest Stretch | Mobility | `builtin-exercise:worlds-greatest-stretch` | Exact | exact canonical slug/name in live SmartWorkout inventory |
| `builtin-exercise:inchworm-to-cobra` | Inchworm to Cobra | Mobility | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:incline-cable-press` | Incline Cable Press | Chest | `builtin-exercise:low-cable-incline-bench-press` | Equivalent | reviewed canonical-name/setup equivalent in live SmartWorkout inventory |
| `builtin-exercise:single-arm-dumbbell-bench-press` | Single-Arm Dumbbell Bench Press | Chest | `builtin-exercise:one-arm-dumbbell-bench-press` | Equivalent | unique normalized word-order/synonym match in live SmartWorkout inventory |
| `builtin-exercise:dumbbell-floor-press` | Dumbbell Floor Press | Chest | `builtin-exercise:floor-dumbbell-press` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/chest/floor-dumbbell-press |
| `builtin-exercise:barbell-floor-press` | Barbell Floor Press | Chest | `builtin-exercise:barbell-floor-press` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/chest/barbell-floor-press |
| `builtin-exercise:plyometric-push-up` | Plyometric Push-Up | Chest | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:weighted-push-up` | Weighted Push-Up | Chest | `builtin-exercise:weighted-push-up` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/chest/weighted-push-up |
| `builtin-exercise:archer-push-up` | Archer Push-Up | Chest | `builtin-exercise:archer-push-up` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/chest/archer-push-up |
| `builtin-exercise:decline-machine-press` | Decline Machine Press | Chest | `builtin-exercise:decline-chest-press` | Equivalent | reviewed canonical-name/setup equivalent in live SmartWorkout inventory |
| `builtin-exercise:smith-machine-decline-press` | Smith Machine Decline Press | Chest | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:dumbbell-fly` | Dumbbell Fly | Chest | `builtin-exercise:dumbbell-chest-fly` | Equivalent | reviewed canonical-name/setup equivalent in live SmartWorkout inventory |
| `builtin-exercise:incline-dumbbell-fly` | Incline Dumbbell Fly | Chest | `builtin-exercise:incline-dumbbell-chest-fly` | Equivalent | reviewed canonical-name/setup equivalent in live SmartWorkout inventory |
| `builtin-exercise:decline-dumbbell-fly` | Decline Dumbbell Fly | Chest | `builtin-exercise:decline-dumbbell-fly` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/chest/decline-dumbbell-fly |
| `builtin-exercise:cable-chest-press` | Cable Chest Press | Chest | `builtin-exercise:seated-cable-chest-press` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/chest/seated-cable-chest-press |
| `builtin-exercise:suspension-chest-press` | Suspension Chest Press | Chest | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:ring-push-up` | Ring Push-Up | Chest | `builtin-exercise:ring-push-up` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/chest/ring-push-up |
| `builtin-exercise:ring-dip` | Ring Dip | Chest | `builtin-exercise:ring-dips` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/triceps/ring-dips |
| `builtin-exercise:deficit-push-up` | Deficit Push-Up | Chest | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:half-kneeling-single-arm-lat-pulldown` | Half-Kneeling Single-Arm Lat Pulldown | Back | `builtin-exercise:one-arm-cable-half-kneeling-lat-pulldown` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/back/one-arm-cable-half-kneeling-lat-pulldown |
| `builtin-exercise:kneeling-cable-lat-prayer` | Kneeling Cable Lat Prayer | Back | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:seal-row` | Seal Row | Back | `builtin-exercise:seal-row` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/back/seal-row |
| `builtin-exercise:meadows-row` | Meadows Row | Back | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:barbell-shrug` | Barbell Shrug | Back | `builtin-exercise:barbell-shoulder-shrug` | Equivalent | reviewed canonical-name/setup equivalent in live SmartWorkout inventory |
| `builtin-exercise:scapular-pull-up` | Scapular Pull-Up | Back | `builtin-exercise:hanging-scapular-retractions` | Equivalent | reviewed canonical-name/setup equivalent in live SmartWorkout inventory |
| `builtin-exercise:weighted-pull-up` | Weighted Pull-Up | Back | `builtin-exercise:weighted-pull-up` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/back/weighted-pull-up |
| `builtin-exercise:weighted-chin-up` | Weighted Chin-Up | Back | `builtin-exercise:weighted-chin-up` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/biceps/weighted-chin-up |
| `builtin-exercise:band-assisted-pull-up` | Band-Assisted Pull-Up | Back | `builtin-exercise:band-assisted-pull-up` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/back/band-assisted-pull-up |
| `builtin-exercise:machine-pullover` | Machine Pullover | Back | `builtin-exercise:machine-pullover` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/back/machine-pullover |
| `builtin-exercise:single-arm-cable-row` | Single-Arm Cable Row | Back | `builtin-exercise:one-arm-cable-row` | Equivalent | unique normalized word-order/synonym match in live SmartWorkout inventory |
| `builtin-exercise:high-row-machine` | High Row Machine | Back | `builtin-exercise:lever-high-row` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/back/lever-high-row |
| `builtin-exercise:suspension-row` | Suspension Row | Back | `builtin-exercise:suspension-row` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/back/suspension-row |
| `builtin-exercise:resistance-band-row` | Resistance Band Row | Back | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:resistance-band-lat-pulldown` | Resistance Band Lat Pulldown | Back | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:resistance-band-pull-apart` | Resistance Band Pull-Apart | Back | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:reverse-hyperextension` | Reverse Hyperextension | Back | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:dumbbell-shrug` | Dumbbell Shrug | Back | `builtin-exercise:dumbbell-shoulder-shrugs` | Equivalent | reviewed canonical-name/setup equivalent in live SmartWorkout inventory |
| `builtin-exercise:cable-shrug` | Cable Shrug | Back | `builtin-exercise:cable-shrug` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/back/cable-shrug |
| `builtin-exercise:chest-supported-machine-row` | Chest-Supported Machine Row | Back | `builtin-exercise:chest-supported-machine-row` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/back/chest-supported-machine-row |
| `builtin-exercise:seated-cable-high-row` | Seated Cable High Row | Back | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:barbell-high-pull` | Barbell High Pull | Back | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:pike-push-up` | Pike Push-Up | Shoulders | `builtin-exercise:pike-push-up` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/shoulders/pike-push-up |
| `builtin-exercise:handstand-push-up` | Handstand Push-Up | Shoulders | `builtin-exercise:handstand-push-up` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/shoulders/handstand-push-up |
| `builtin-exercise:barbell-upright-row` | Barbell Upright Row | Shoulders | `builtin-exercise:barbell-shoulder-grip-upright-row` | Equivalent | reviewed canonical-name/setup equivalent in live SmartWorkout inventory |
| `builtin-exercise:cable-y-raise` | Cable Y Raise | Shoulders | `builtin-exercise:cable-y-raise` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/shoulders/cable-y-raise |
| `builtin-exercise:single-arm-landmine-press` | Single-Arm Landmine Press | Shoulders | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:seated-dumbbell-shoulder-press` | Seated Dumbbell Shoulder Press | Shoulders | `builtin-exercise:seated-dumbbell-shoulder-press` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/shoulders/seated-dumbbell-shoulder-press |
| `builtin-exercise:band-internal-rotation` | Band Internal Rotation | Shoulders | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:cable-internal-rotation` | Cable Internal Rotation | Shoulders | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:prone-y-raise` | Prone Y Raise | Shoulders | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:prone-t-raise` | Prone T Raise | Shoulders | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:serratus-push-up` | Serratus Push-Up | Shoulders | `builtin-exercise:scapula-push-up` | Equivalent | reviewed canonical-name/setup equivalent in live SmartWorkout inventory |
| `builtin-exercise:leaning-dumbbell-lateral-raise` | Leaning Dumbbell Lateral Raise | Shoulders | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:single-arm-cable-lateral-raise` | Single-Arm Cable Lateral Raise | Shoulders | `builtin-exercise:one-arm-cable-lateral-raise` | Equivalent | unique normalized word-order/synonym match in live SmartWorkout inventory |
| `builtin-exercise:dumbbell-preacher-curl` | Dumbbell Preacher Curl | Arms | `builtin-exercise:double-dumbbell-preacher-curl` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/biceps/double-dumbbell-preacher-curl |
| `builtin-exercise:cable-hammer-curl` | Cable Hammer Curl | Arms | `builtin-exercise:rope-cable-hammer-curl` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/biceps/rope-cable-hammer-curl |
| `builtin-exercise:zottman-curl` | Zottman Curl | Arms | `builtin-exercise:zottman-curl` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/biceps/zottman-curl |
| `builtin-exercise:dumbbell-skull-crusher` | Dumbbell Skull Crusher | Arms | `builtin-exercise:dumbbell-lying-triceps-extension` | Equivalent | reviewed canonical-name/setup equivalent in live SmartWorkout inventory |
| `builtin-exercise:jm-press` | JM Press | Arms | `builtin-exercise:jm-press` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/triceps/jm-press |
| `builtin-exercise:wrist-roller` | Wrist Roller | Arms | `builtin-exercise:wrist-roller` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/forearms/wrist-roller |
| `builtin-exercise:machine-biceps-curl` | Machine Biceps Curl | Arms | `builtin-exercise:machine-biceps-curl` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/biceps/machine-biceps-curl |
| `builtin-exercise:cable-preacher-curl` | Cable Preacher Curl | Arms | `builtin-exercise:cable-preacher-curl` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/biceps/cable-preacher-curl |
| `builtin-exercise:suspension-biceps-curl` | Suspension Biceps Curl | Arms | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:incline-hammer-curl` | Incline Hammer Curl | Arms | `builtin-exercise:dumbbell-incline-hammer-curl` | Equivalent | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/biceps/dumbbell-incline-hammer-curl |
| `builtin-exercise:cable-reverse-curl` | Cable Reverse Curl | Arms | `builtin-exercise:reverse-grip-cable-curl` | Equivalent | reviewed canonical-name/setup equivalent in live SmartWorkout inventory |
| `builtin-exercise:cable-skull-crusher` | Cable Skull Crusher | Arms | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:single-arm-overhead-cable-triceps-extension` | Single-Arm Overhead Cable Triceps Extension | Arms | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:machine-triceps-extension` | Machine Triceps Extension | Arms | `builtin-exercise:machine-triceps-extension` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/triceps/machine-triceps-extension |
| `builtin-exercise:machine-dip` | Machine Dip | Arms | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:suspension-triceps-extension` | Suspension Triceps Extension | Arms | `builtin-exercise:suspension-triceps-extension` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/triceps/suspension-triceps-extension |
| `builtin-exercise:bodyweight-triceps-extension` | Bodyweight Triceps Extension | Arms | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:dead-hang` | Dead Hang | Arms | `builtin-exercise:dead-hang` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/forearms/dead-hang |
| `builtin-exercise:hand-gripper` | Hand Gripper | Arms | `builtin-exercise:hand-gripper` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/forearms/hand-gripper |
| `builtin-exercise:farmer-hold` | Farmer Hold | Arms | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:kettlebell-goblet-squat` | Kettlebell Goblet Squat | Legs | `builtin-exercise:kettlebell-goblet-squat` | Exact | exact canonical slug/name in live SmartWorkout inventory |
| `builtin-exercise:barbell-step-up` | Barbell Step-Up | Legs | `builtin-exercise:barbell-step-up` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/barbell-step-up |
| `builtin-exercise:pistol-squat` | Pistol Squat | Legs | `builtin-exercise:pistol-squat` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/pistol-squat |
| `builtin-exercise:reverse-nordic-curl` | Reverse Nordic Curl | Legs | `builtin-exercise:reverse-nordic-curl` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/reverse-nordic-curl |
| `builtin-exercise:tibialis-raise` | Tibialis Raise | Legs | `builtin-exercise:standing-tibialis-raise` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/standing-tibialis-raise |
| `builtin-exercise:curtsy-lunge` | Curtsy Lunge | Legs | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:pendulum-squat` | Pendulum Squat | Legs | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:front-foot-elevated-split-squat` | Front-Foot-Elevated Split Squat | Legs | `builtin-exercise:split-squat-front-foot-elevated` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/split-squat-front-foot-elevated |
| `builtin-exercise:barbell-reverse-lunge` | Barbell Reverse Lunge | Legs | `builtin-exercise:barbell-reverse-lunges` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/barbell-reverse-lunges |
| `builtin-exercise:barbell-walking-lunge` | Barbell Walking Lunge | Legs | `builtin-exercise:barbell-walking-lunges` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/barbell-walking-lunges |
| `builtin-exercise:barbell-glute-bridge` | Barbell Glute Bridge | Legs | `builtin-exercise:barbell-glute-bridge` | Exact | exact canonical slug/name in live SmartWorkout inventory |
| `builtin-exercise:machine-hip-thrust` | Machine Hip Thrust | Legs | `builtin-exercise:machine-hip-thrust` | Exact | exact canonical slug/name in live SmartWorkout inventory |
| `builtin-exercise:machine-glute-kickback` | Machine Glute Kickback | Legs | `builtin-exercise:glute-machine-kickback` | Equivalent | unique normalized word-order/synonym match in live SmartWorkout inventory |
| `builtin-exercise:frog-pump` | Frog Pump | Legs | `builtin-exercise:frog-pump` | Exact | exact canonical slug/name in live SmartWorkout inventory |
| `builtin-exercise:b-stance-hip-thrust` | B-Stance Hip Thrust | Legs | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:resistance-band-hip-abduction` | Resistance Band Hip Abduction | Legs | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:side-lying-hip-abduction` | Side-Lying Hip Abduction | Legs | `builtin-exercise:side-lying-hip-abduction` | Exact | exact canonical slug/name in live SmartWorkout inventory |
| `builtin-exercise:clamshell` | Clamshell | Legs | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:cable-hip-adduction` | Cable Hip Adduction | Legs | `builtin-exercise:cable-hip-adduction` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/cable-hip-adduction |
| `builtin-exercise:stiff-leg-deadlift` | Stiff-Leg Deadlift | Legs | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:trap-bar-deadlift` | Trap Bar Deadlift | Legs | `builtin-exercise:trap-bar-deadlift` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/trap-bar-deadlift |
| `builtin-exercise:landmine-romanian-deadlift` | Landmine Romanian Deadlift | Legs | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:landmine-squat` | Landmine Squat | Legs | `builtin-exercise:landmine-squat` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/landmine-squat |
| `builtin-exercise:landmine-reverse-lunge` | Landmine Reverse Lunge | Legs | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:dumbbell-split-squat` | Dumbbell Split Squat | Legs | `builtin-exercise:dumbbell-split-squat` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/dumbbell-split-squat |
| `builtin-exercise:barbell-bulgarian-split-squat` | Barbell Bulgarian Split Squat | Legs | `builtin-exercise:barbell-bulgarian-squat` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/barbell-bulgarian-squat |
| `builtin-exercise:single-leg-lying-leg-curl` | Single-Leg Lying Leg Curl | Legs | `builtin-exercise:single-leg-lying-curl` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/single-leg-lying-curl |
| `builtin-exercise:single-leg-seated-leg-curl` | Single-Leg Seated Leg Curl | Legs | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:slider-hamstring-curl` | Slider Hamstring Curl | Legs | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:suspension-hamstring-curl` | Suspension Hamstring Curl | Legs | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:smith-machine-calf-raise` | Smith Machine Calf Raise | Legs | `builtin-exercise:smith-calf-raises` | Equivalent | reviewed canonical-name/setup equivalent in live SmartWorkout inventory |
| `builtin-exercise:seated-tibialis-raise` | Seated Tibialis Raise | Legs | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:lying-leg-raise` | Lying Leg Raise | Core | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:hollow-body-hold` | Hollow Body Hold | Core | `builtin-exercise:hollow-body-hold` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/abs/hollow-body-hold |
| `builtin-exercise:bear-plank` | Bear Plank | Core | `builtin-exercise:bear-plank` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/abs/bear-plank |
| `builtin-exercise:plank-shoulder-tap` | Plank Shoulder Tap | Core | `builtin-exercise:shoulder-tap` | Equivalent | reviewed canonical-name/setup equivalent in live SmartWorkout inventory |
| `builtin-exercise:weighted-sit-up` | Weighted Sit-Up | Core | `builtin-exercise:weighted-sit-up` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/abs/weighted-sit-up |
| `builtin-exercise:copenhagen-plank` | Copenhagen Plank | Core | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:dragon-flag` | Dragon Flag | Core | `builtin-exercise:dragon-flag` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/abs/dragon-flag |
| `builtin-exercise:v-up` | V-Up | Core | `builtin-exercise:v-up` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/abs/v-up |
| `builtin-exercise:toes-to-bar` | Toes-to-Bar | Core | `builtin-exercise:toes-to-bar` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/abs/toes-to-bar |
| `builtin-exercise:body-saw` | Body Saw | Core | `builtin-exercise:saw-plank` | Equivalent | reviewed canonical-name/setup equivalent in live SmartWorkout inventory |
| `builtin-exercise:stability-ball-rollout` | Stability Ball Rollout | Core | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:stir-the-pot` | Stir the Pot | Core | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:long-lever-plank` | Long-Lever Plank | Core | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:cable-pallof-hold` | Cable Pallof Hold | Core | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:half-kneeling-pallof-press` | Half-Kneeling Pallof Press | Core | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:suitcase-march` | Suitcase March | Core | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:l-sit` | L-Sit | Core | `builtin-exercise:l-sit` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/abs/l-sit |
| `builtin-exercise:hanging-knee-raise-with-twist` | Hanging Knee Raise with Twist | Core | `builtin-exercise:hanging-oblique-knee-raise` | Equivalent | reviewed canonical-name/setup equivalent in live SmartWorkout inventory |
| `builtin-exercise:cable-reverse-wood-chop` | Cable Reverse Wood Chop | Core | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:decline-sit-up` | Decline Sit-Up | Core | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:ghd-sit-up` | GHD Sit-Up | Core | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:turkish-get-up` | Turkish Get-Up | Full Body | `builtin-exercise:turkish-get-up` | Exact | exact canonical slug/name in live SmartWorkout inventory |
| `builtin-exercise:medicine-ball-slam` | Medicine Ball Slam | Full Body | `builtin-exercise:medicine-ball-slam` | Exact | exact canonical slug/name in live SmartWorkout inventory |
| `builtin-exercise:battle-rope-alternating-waves` | Battle Rope Alternating Waves | Full Body | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:bear-crawl` | Bear Crawl | Full Body | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:box-jump` | Box Jump | Full Body | `builtin-exercise:box-jumps` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/box-jumps |
| `builtin-exercise:sandbag-clean` | Sandbag Clean | Full Body | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:renegade-row` | Renegade Row | Full Body | `builtin-exercise:alternate-renegade-row` | Equivalent | reviewed canonical-name/setup equivalent in live SmartWorkout inventory |
| `builtin-exercise:power-clean` | Power Clean | Full Body | `builtin-exercise:power-clean` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/power-clean |
| `builtin-exercise:barbell-snatch` | Barbell Snatch | Full Body | `builtin-exercise:snatch` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/snatch |
| `builtin-exercise:power-snatch` | Power Snatch | Full Body | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:clean-and-jerk` | Clean and Jerk | Full Body | `builtin-exercise:clean-and-jerk` | Exact | verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/clean-and-jerk |
| `builtin-exercise:barbell-clean-and-press` | Barbell Clean and Press | Full Body | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:kettlebell-snatch` | Kettlebell Snatch | Full Body | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:kettlebell-deadlift` | Kettlebell Deadlift | Full Body | `builtin-exercise:kettlebell-deadlift` | Exact | exact canonical slug/name in live SmartWorkout inventory |
| `builtin-exercise:kettlebell-front-rack-carry` | Kettlebell Front Rack Carry | Full Body | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:kettlebell-push-press` | Kettlebell Push Press | Full Body | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:kettlebell-thruster` | Kettlebell Thruster | Full Body | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:dumbbell-clean` | Dumbbell Clean | Full Body | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:dumbbell-snatch` | Dumbbell Snatch | Full Body | `builtin-exercise:dumbbell-snatch` | Exact | exact canonical slug/name in live SmartWorkout inventory |
| `builtin-exercise:dumbbell-clean-and-press` | Dumbbell Clean and Press | Full Body | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:trap-bar-carry` | Trap Bar Carry | Full Body | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:overhead-carry` | Overhead Carry | Full Body | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:front-rack-carry` | Front Rack Carry | Full Body | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:zercher-carry` | Zercher Carry | Full Body | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:sandbag-carry` | Sandbag Carry | Full Body | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:sled-pull` | Sled Pull | Full Body | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:muscle-up` | Muscle-Up | Full Body | `builtin-exercise:muscle-up` | Exact | exact canonical slug/name in live SmartWorkout inventory |
| `builtin-exercise:recumbent-bike` | Recumbent Bike | Cardio | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:kickboxing` | Kickboxing | Cardio | `builtin-exercise:kickboxing` | Exact | exact canonical slug/name in live SmartWorkout inventory |
| `builtin-exercise:circuit-training` | Circuit Training | Cardio | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:hiit-session` | HIIT Session | Cardio | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:battle-rope-intervals` | Battle Rope Intervals | Cardio | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:sled-drag-conditioning` | Sled Drag Conditioning | Cardio | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:hill-running` | Hill Running | Cardio | `builtin-exercise:running` | Equivalent | reviewed canonical-name/setup equivalent in live SmartWorkout inventory |
| `builtin-exercise:treadmill-incline-running` | Treadmill Incline Running | Cardio | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:rucking` | Rucking | Cardio | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:mountain-biking` | Mountain Biking | Cardio | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:bikeerg` | BikeErg | Cardio | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:hand-cycle` | Hand Cycle | Cardio | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:outdoor-rowing` | Outdoor Rowing | Cardio | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:kayaking` | Kayaking | Cardio | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:canoeing` | Canoeing | Cardio | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:vertical-climber` | Vertical Climber | Cardio | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:stepper` | Stepper | Cardio | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:double-unders` | Double Unders | Cardio | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:shadow-boxing` | Shadow Boxing | Cardio | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:shuttle-run` | Shuttle Run | Cardio | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:mountain-climbers` | Mountain Climbers | Cardio | `builtin-exercise:mountain-climber` | Equivalent | reviewed canonical-name/setup equivalent in live SmartWorkout inventory |
| `builtin-exercise:jumping-jacks` | Jumping Jacks | Cardio | `builtin-exercise:jumping-jacks` | Exact | exact canonical slug/name in live SmartWorkout inventory |
| `builtin-exercise:freestyle-swimming` | Freestyle Swimming | Cardio | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:breaststroke-swimming` | Breaststroke Swimming | Cardio | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:backstroke-swimming` | Backstroke Swimming | Cardio | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:butterfly-swimming` | Butterfly Swimming | Cardio | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:battle-rope-double-waves` | Battle Rope Double Waves | Cardio | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:cat-cow` | Cat-Cow | Mobility | `builtin-exercise:cat-cow` | Exact | exact canonical slug/name in live SmartWorkout inventory |
| `builtin-exercise:deep-squat-pry` | Deep Squat Pry | Mobility | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:ankle-car` | Ankle CAR | Mobility | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:shoulder-car` | Shoulder CAR | Mobility | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:thoracic-extension-on-foam-roller` | Thoracic Extension on Foam Roller | Mobility | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:cossack-squat-mobility` | Cossack Squat Mobility | Mobility | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:scapular-car` | Scapular CAR | Mobility | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:wrist-car` | Wrist CAR | Mobility | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:neck-car` | Neck CAR | Mobility | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:quadruped-thoracic-rotation` | Quadruped Thoracic Rotation | Mobility | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:prone-cobra` | Prone Cobra | Mobility | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:half-kneeling-hip-flexor-mobilization` | Half-Kneeling Hip Flexor Mobilization | Mobility | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:hip-airplane` | Hip Airplane | Mobility | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:shin-box-transition` | Shin Box Transition | Mobility | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:banded-ankle-mobilization` | Banded Ankle Mobilization | Mobility | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:calf-rock` | Calf Rock | Mobility | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:hamstring-walkout` | Hamstring Walkout | Mobility | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:half-kneeling-adductor-mobilization` | Half-Kneeling Adductor Mobilization | Mobility | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:sumo-squat-hold` | Sumo Squat Hold | Mobility | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:lateral-squat-shift` | Lateral Squat Shift | Mobility | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:bear-sit-rotation` | Bear Sit Rotation | Mobility | — | Removed | No exact or high-confidence SmartWorkout successor |
| `builtin-exercise:standing-hip-car` | Standing Hip CAR | Mobility | — | Removed | No exact or high-confidence SmartWorkout successor |

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

## New SmartWorkout canonical exercises (561)

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
- Duplicate binary-content groups with distinct SmartWorkout source URLs: 7 (retained under deterministic canonical filenames)
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
