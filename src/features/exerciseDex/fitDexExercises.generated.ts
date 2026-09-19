// FitDex built-in exercise catalog definitions.
// Stable canonical exercise inventory and anatomical taxonomy.
import type { ExerciseCategory } from "../../data/models.ts";
import type { FitDexCategoryAudit, FitDexExerciseDefinition } from "./fitDexExerciseTypes.ts";

export const FITDEX_CATALOG_GENERATED_AT = "2026-08-23T10:32:26.633Z";
export const FITDEX_RAW_MEMBERSHIP_TOTAL = 824;
export const FITDEX_CANONICAL_MEMBERSHIP_TOTAL = 814;
export const FITDEX_CATEGORY_AUDIT: Readonly<Record<ExerciseCategory, FitDexCategoryAudit>> = {
  "Chest": {
    "rawPageCount": 103,
    "canonicalMembershipCount": 102
  },
  "Back": {
    "rawPageCount": 103,
    "canonicalMembershipCount": 101
  },
  "Shoulders": {
    "rawPageCount": 108,
    "canonicalMembershipCount": 107
  },
  "Legs": {
    "rawPageCount": 191,
    "canonicalMembershipCount": 190
  },
  "Gluteal": {
    "rawPageCount": 58,
    "canonicalMembershipCount": 56
  },
  "Biceps": {
    "rawPageCount": 56,
    "canonicalMembershipCount": 56
  },
  "Triceps": {
    "rawPageCount": 68,
    "canonicalMembershipCount": 67
  },
  "Forearms": {
    "rawPageCount": 30,
    "canonicalMembershipCount": 29
  },
  "Abs": {
    "rawPageCount": 107,
    "canonicalMembershipCount": 106
  }
};

export const FITDEX_DUPLICATE_PAGE_IDENTITIES = [
  {
    "slug": "cable-neutral-grip-lat-pulldown"
  },
  {
    "slug": "dumbbell-seated-triceps-extension"
  },
  {
    "slug": "dumbbell-single-leg-hip-thrust"
  },
  {
    "slug": "hip-thrust"
  },
  {
    "slug": "machine-chest-press"
  },
  {
    "slug": "one-arm-cable-half-kneeling-lat-pulldown"
  },
  {
    "slug": "one-arm-cable-lateral-raise"
  },
  {
    "slug": "smith-calf-raises"
  },
  {
    "slug": "split-squat-front-foot-elevated"
  },
  {
    "slug": "unilateral-farmer-walk"
  },
  {
    "slug": "v-up"
  }
] as const;

export const FITDEX_EXERCISES: readonly FitDexExerciseDefinition[] = [
  {
    "slug": "90-to-90-stretch",
    "name": "90 To 90 Stretch",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Adductors",
      "Gluteus Maximus",
      "Gluteus Medius",
      "Quadriceps",
      "Sartorius"
    ],
    "secondaryMuscles": [],
    "tags": [
      "MOBILITY",
      "STRETCH",
      "WARMUP"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/90-to-90-stretch.mp4"
  },
  {
    "slug": "ab-wheel-rollout",
    "name": "Ab Wheel Rollout",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Upper Abs"
    ],
    "secondaryMuscles": [
      "Lower Abs",
      "Obliques"
    ],
    "tags": [
      "STRENGTH",
      "CORE",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/ab-wheel-rollout.mp4"
  },
  {
    "slug": "abdominal-crunches",
    "name": "Abdominal Crunches",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Upper Abs"
    ],
    "secondaryMuscles": [
      "Lower Abs",
      "Obliques"
    ],
    "tags": [
      "CORE"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/abdominal-crunches.mp4"
  },
  {
    "slug": "abdominal-vaccum",
    "name": "Abdominal Vaccum",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Lower Abs",
      "Upper Abs"
    ],
    "secondaryMuscles": [],
    "tags": [
      "CORE",
      "ISOMETRIC"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/abdominal-vaccum.mp4"
  },
  {
    "slug": "air-bike",
    "name": "Air Bike",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Obliques"
    ],
    "secondaryMuscles": [
      "Upper Abs",
      "Lower Abs"
    ],
    "tags": [
      "CARDIO",
      "CORE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "ALTERNATING",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/air-bike.mp4"
  },
  {
    "slug": "alternate-bent-over-dumbbell-reverse-fly",
    "name": "Alternate Bent Over Dumbbell Reverse Fly",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Rear Delts"
    ],
    "secondaryMuscles": [
      "Middle Traps",
      "Side Delts",
      "Lower Traps",
      "Upper Traps"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "ALTERNATING",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/alternate-bent-over-dumbbell-reverse-fly.mp4"
  },
  {
    "slug": "alternate-biceps-curl",
    "name": "Alternate Biceps Curl",
    "categories": [
      "Biceps"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "ALTERNATING",
    "weightType": "DUMBBELL",
    "mediaStatus": "not-provided"
  },
  {
    "slug": "alternate-dumbbell-hammer-curl",
    "name": "Alternate Dumbbell Hammer Curl",
    "categories": [
      "Biceps"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [
      "Brachioradialis"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "ALTERNATING",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/alternate-dumbbell-hammer-curl.mp4"
  },
  {
    "slug": "alternate-renegade-row",
    "name": "Alternate Renegade Row",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Lats",
      "Rear Delts"
    ],
    "secondaryMuscles": [
      "Lower Traps",
      "Middle Traps",
      "Infraspinatus",
      "Teres Minor",
      "Teres Major"
    ],
    "tags": [
      "STRENGTH",
      "CORE",
      "BALANCE",
      "FUNCTIONAL",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "ALTERNATING",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/alternate-renegade-row.mp4"
  },
  {
    "slug": "anderson-squat",
    "name": "Anderson Squat",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Barbell",
      "Other"
    ],
    "primaryMuscles": [
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Quadriceps",
      "Sartorius",
      "Adductors",
      "Spinal Erectors",
      "Gluteus Medius"
    ],
    "tags": [
      "STRENGTH",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/anderson-squat.mp4"
  },
  {
    "slug": "ankle-taps",
    "name": "Ankle Taps",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Obliques"
    ],
    "secondaryMuscles": [
      "Lower Abs",
      "Upper Abs"
    ],
    "tags": [
      "CORE",
      "MOBILITY",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "ALTERNATING",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/ankle-taps.mp4"
  },
  {
    "slug": "archer-push-up",
    "name": "Archer Push-Up",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Upper Chest",
      "Triceps",
      "Front Delts",
      "Serratus Anterior"
    ],
    "tags": [
      "STRENGTH",
      "PUSH",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/archer-push-up.mp4"
  },
  {
    "slug": "arm-blaster-biceps-dumbbell-curl",
    "name": "Arm Blaster Biceps Dumbbell Curl",
    "categories": [
      "Biceps"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [
      "Brachioradialis",
      "Forearm Flexors"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/arm-blaster-biceps-dumbbell-curl.mp4"
  },
  {
    "slug": "arm-circle",
    "name": "Arm Circle",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Front Delts",
      "Rear Delts",
      "Side Delts"
    ],
    "secondaryMuscles": [],
    "tags": [
      "MOBILITY",
      "WARMUP"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/arm-circle.mp4"
  },
  {
    "slug": "arm-circles",
    "name": "Arm Circles",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Front Delts",
      "Rear Delts",
      "Side Delts"
    ],
    "secondaryMuscles": [],
    "tags": [
      "MOBILITY",
      "WARMUP"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/arm-circles.mp4"
  },
  {
    "slug": "assault-air-bike",
    "name": "Assault Air Bike",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Mid Chest",
      "Lower Chest",
      "Front Delts",
      "Hamstrings",
      "Middle Traps"
    ],
    "tags": [
      "CARDIO",
      "FUNCTIONAL",
      "WARMUP"
    ],
    "mechanics": "COMPOUND",
    "laterality": "ALTERNATING",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/assault-air-bike.mp4"
  },
  {
    "slug": "assisted-machine-dips",
    "name": "Assisted Machine Dips",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Lower Chest",
      "Triceps"
    ],
    "secondaryMuscles": [
      "Front Delts",
      "Mid Chest",
      "Upper Chest",
      "Side Delts",
      "Serratus Anterior"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "ASSISTED_WEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/assisted-machine-dips.mp4"
  },
  {
    "slug": "assisted-pistol-squat",
    "name": "Assisted Pistol Squat",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Adductors",
      "Sartorius",
      "Gluteus Medius",
      "Hamstrings"
    ],
    "tags": [
      "STRENGTH",
      "BALANCE",
      "MOBILITY",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/assisted-pistol-squat.mp4"
  },
  {
    "slug": "assisted-pull-up",
    "name": "Assisted Pull-Up",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Machine",
      "Pull-Up Bar"
    ],
    "primaryMuscles": [
      "Lats"
    ],
    "secondaryMuscles": [
      "Infraspinatus",
      "Teres Major",
      "Teres Minor",
      "Brachioradialis",
      "Forearm Flexors"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "ASSISTED_WEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/assisted-pull-up.mp4"
  },
  {
    "slug": "australian-pull-up-underhand-grip",
    "name": "Australian Pull-Up Underhand Grip",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Pull-Up Bar"
    ],
    "primaryMuscles": [
      "Infraspinatus"
    ],
    "secondaryMuscles": [
      "Teres Minor",
      "Lower Traps",
      "Rear Delts",
      "Lats",
      "Teres Major"
    ],
    "tags": [
      "STRENGTH",
      "PULL",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/australian-pull-up-underhand-grip.mp4"
  },
  {
    "slug": "b-stance-romanian-deadlift",
    "name": "B Stance Romanian Deadlift",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Hamstrings",
      "Spinal Erectors",
      "Quadriceps",
      "Lower Abs",
      "Obliques"
    ],
    "tags": [
      "STRENGTH",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/b-stance-romanian-deadlift.mp4"
  },
  {
    "slug": "back-extension",
    "name": "Back Extension",
    "categories": [
      "Gluteal"
    ],
    "equipment": [
      "Bench"
    ],
    "primaryMuscles": [
      "Spinal Erectors"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Hamstrings"
    ],
    "tags": [
      "STRENGTH",
      "REHAB"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/back-extension.mp4"
  },
  {
    "slug": "back-extension-with-dumbbell",
    "name": "Back Extension With Dumbbell",
    "categories": [
      "Gluteal"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Spinal Erectors"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Hamstrings"
    ],
    "tags": [
      "STRENGTH",
      "CORE"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/back-extension-with-dumbbell.mp4"
  },
  {
    "slug": "back-lever",
    "name": "Back Lever",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Pull-Up Bar",
      "Rings"
    ],
    "primaryMuscles": [
      "Front Delts",
      "Lats"
    ],
    "secondaryMuscles": [
      "Infraspinatus",
      "Lower Chest",
      "Lower Traps",
      "Mid Chest",
      "Middle Traps"
    ],
    "tags": [
      "STRENGTH",
      "CORE",
      "ISOMETRIC",
      "BALANCE"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/back-lever.mp4"
  },
  {
    "slug": "band-assisted-pull-up",
    "name": "Band Assisted Pull Up",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Resistance Band",
      "Pull-Up Bar"
    ],
    "primaryMuscles": [
      "Lats"
    ],
    "secondaryMuscles": [
      "Lower Traps",
      "Teres Major",
      "Teres Minor",
      "Biceps",
      "Infraspinatus"
    ],
    "tags": [
      "STRENGTH",
      "PULL",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BAND",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/band-assisted-pull-up.mp4"
  },
  {
    "slug": "band-bench-chest-press",
    "name": "Band Bench Chest Press",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Resistance Band",
      "Bench"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Triceps",
      "Upper Chest",
      "Lower Chest",
      "Front Delts",
      "Serratus Anterior"
    ],
    "tags": [
      "STRENGTH",
      "PUSH",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BAND",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/band-bench-chest-press.mp4"
  },
  {
    "slug": "band-bent-over-lat-pulldown",
    "name": "Band Bent Over Lat Pulldown",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Resistance Band"
    ],
    "primaryMuscles": [
      "Lats"
    ],
    "secondaryMuscles": [
      "Teres Major",
      "Teres Minor",
      "Infraspinatus",
      "Lower Traps",
      "Rear Delts"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BAND",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/band-bent-over-lat-pulldown.mp4"
  },
  {
    "slug": "band-biceps-curl",
    "name": "Band Biceps Curl",
    "categories": [
      "Biceps"
    ],
    "equipment": [
      "Resistance Band"
    ],
    "primaryMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [
      "Brachioradialis"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BAND",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/band-biceps-curl.mp4"
  },
  {
    "slug": "band-bicycle-crunches",
    "name": "Band Bicycle Crunches",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Resistance Band"
    ],
    "primaryMuscles": [
      "Obliques"
    ],
    "secondaryMuscles": [
      "Upper Abs",
      "Sartorius",
      "Lower Abs"
    ],
    "tags": [
      "CORE",
      "FUNCTIONAL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "BAND",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/band-bicycle-crunches.mp4"
  },
  {
    "slug": "band-chest-fly",
    "name": "Band Chest Fly",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Resistance Band"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Upper Chest"
    ],
    "tags": [
      "STRENGTH",
      "PUSH",
      "FUNCTIONAL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BAND",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/band-chest-fly.mp4"
  },
  {
    "slug": "band-half-kneeling-chop",
    "name": "Band Half Kneeling Chop",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Resistance Band"
    ],
    "primaryMuscles": [
      "Obliques"
    ],
    "secondaryMuscles": [
      "Lats",
      "Teres Major",
      "Upper Abs",
      "Lower Abs",
      "Rear Delts"
    ],
    "tags": [
      "CORE",
      "FUNCTIONAL",
      "BALANCE"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "BAND",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/band-half-kneeling-chop.mp4"
  },
  {
    "slug": "band-hammer-curl",
    "name": "Band Hammer Curl",
    "categories": [
      "Biceps"
    ],
    "equipment": [
      "Resistance Band"
    ],
    "primaryMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [
      "Brachioradialis"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BAND",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/band-hammer-curl.mp4"
  },
  {
    "slug": "band-high-anchor-wide-row",
    "name": "Band High Anchor Wide Row",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Resistance Band"
    ],
    "primaryMuscles": [
      "Middle Traps"
    ],
    "secondaryMuscles": [
      "Rear Delts",
      "Infraspinatus",
      "Teres Minor",
      "Upper Traps",
      "Teres Major"
    ],
    "tags": [
      "STRENGTH",
      "PULL",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BAND",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/band-high-anchor-wide-row.mp4"
  },
  {
    "slug": "band-hip-abduction",
    "name": "Band Hip Abduction",
    "categories": [
      "Gluteal"
    ],
    "equipment": [
      "Resistance Band"
    ],
    "primaryMuscles": [
      "Gluteus Medius"
    ],
    "secondaryMuscles": [],
    "tags": [
      "MOBILITY",
      "REHAB",
      "WARMUP"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "BAND",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/band-hip-abduction.mp4"
  },
  {
    "slug": "band-kneeling-twisting-crunch",
    "name": "Band Kneeling Twisting Crunch",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Resistance Band"
    ],
    "primaryMuscles": [
      "Obliques",
      "Upper Abs"
    ],
    "secondaryMuscles": [
      "Lower Abs"
    ],
    "tags": [
      "CORE",
      "FUNCTIONAL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "ALTERNATING",
    "weightType": "BAND",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/band-kneeling-twisting-crunch.mp4"
  },
  {
    "slug": "band-lateral-raise",
    "name": "Band Lateral Raise",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Resistance Band"
    ],
    "primaryMuscles": [
      "Side Delts"
    ],
    "secondaryMuscles": [
      "Rear Delts",
      "Front Delts"
    ],
    "tags": [
      "STRENGTH",
      "MOBILITY",
      "REHAB"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BAND",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/band-lateral-raise.mp4"
  },
  {
    "slug": "band-lying-clamshells",
    "name": "Band Lying Clamshells",
    "categories": [
      "Gluteal"
    ],
    "equipment": [
      "Resistance Band"
    ],
    "primaryMuscles": [
      "Gluteus Medius"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus"
    ],
    "tags": [
      "MOBILITY",
      "REHAB",
      "WARMUP"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "BAND",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/band-lying-clamshells.mp4"
  },
  {
    "slug": "band-lying-leg-curl",
    "name": "Band Lying Leg Curl",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Resistance Band",
      "Bench"
    ],
    "primaryMuscles": [
      "Hamstrings"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "REHAB"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BAND",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/band-lying-leg-curl.mp4"
  },
  {
    "slug": "band-pallof-press",
    "name": "Band Pallof Press",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Resistance Band"
    ],
    "primaryMuscles": [
      "Obliques"
    ],
    "secondaryMuscles": [
      "Upper Abs",
      "Lower Abs",
      "Adductors",
      "Mid Chest",
      "Lower Chest"
    ],
    "tags": [
      "CORE",
      "FUNCTIONAL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "BAND",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/band-pallof-press.mp4"
  },
  {
    "slug": "band-pass-through-shoulders",
    "name": "Band Pass Through Shoulders",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Resistance Band"
    ],
    "primaryMuscles": [
      "Front Delts",
      "Upper Chest"
    ],
    "secondaryMuscles": [
      "Mid Chest",
      "Side Delts",
      "Lower Chest"
    ],
    "tags": [
      "MOBILITY",
      "STRETCH",
      "WARMUP"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/band-pass-through-shoulders.mp4"
  },
  {
    "slug": "band-pulldown-behind-neck",
    "name": "Band Pulldown Behind Neck",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Resistance Band"
    ],
    "primaryMuscles": [
      "Lats"
    ],
    "secondaryMuscles": [
      "Teres Major",
      "Lower Traps",
      "Teres Minor",
      "Infraspinatus"
    ],
    "tags": [
      "STRENGTH",
      "PULL",
      "MOBILITY"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BAND",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/band-pulldown-behind-neck.mp4"
  },
  {
    "slug": "band-reverse-hyperextension",
    "name": "Band Reverse Hyperextension",
    "categories": [
      "Gluteal"
    ],
    "equipment": [
      "Resistance Band"
    ],
    "primaryMuscles": [
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Gluteus Medius",
      "Hamstrings"
    ],
    "tags": [
      "STRENGTH",
      "REHAB",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/band-reverse-hyperextension.mp4"
  },
  {
    "slug": "band-russian-twist",
    "name": "Band Russian Twist",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Resistance Band"
    ],
    "primaryMuscles": [
      "Obliques"
    ],
    "secondaryMuscles": [
      "Lower Abs",
      "Upper Abs"
    ],
    "tags": [
      "CORE",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "ALTERNATING",
    "weightType": "BAND",
    "mediaStatus": "not-provided"
  },
  {
    "slug": "band-shoulder-press",
    "name": "Band Shoulder Press",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Resistance Band"
    ],
    "primaryMuscles": [
      "Front Delts"
    ],
    "secondaryMuscles": [
      "Side Delts",
      "Rear Delts",
      "Triceps"
    ],
    "tags": [
      "STRENGTH",
      "PUSH",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BAND",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/band-shoulder-press.mp4"
  },
  {
    "slug": "band-squat",
    "name": "Band Squat",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Resistance Band"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Sartorius",
      "Adductors",
      "Gluteus Medius",
      "Hamstrings"
    ],
    "tags": [
      "STRENGTH",
      "MOBILITY",
      "FUNCTIONAL",
      "WARMUP"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BAND",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/band-squat.mp4"
  },
  {
    "slug": "band-standing-balance-glute-kickback",
    "name": "Band Standing Balance Glute Kickback",
    "categories": [
      "Gluteal"
    ],
    "equipment": [
      "Resistance Band"
    ],
    "primaryMuscles": [
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Gluteus Medius"
    ],
    "tags": [
      "FUNCTIONAL",
      "STRENGTH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "BAND",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/band-standing-balance-glute-kickback.mp4"
  },
  {
    "slug": "band-standing-crunches",
    "name": "Band Standing Crunches",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Resistance Band"
    ],
    "primaryMuscles": [
      "Upper Abs"
    ],
    "secondaryMuscles": [
      "Lower Abs",
      "Obliques"
    ],
    "tags": [
      "CORE",
      "FUNCTIONAL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BAND",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/band-standing-crunches.mp4"
  },
  {
    "slug": "band-standing-side-bend",
    "name": "Band Standing Side Bend",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Resistance Band"
    ],
    "primaryMuscles": [
      "Obliques"
    ],
    "secondaryMuscles": [],
    "tags": [
      "MOBILITY",
      "CORE",
      "BALANCE"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "BAND",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/band-standing-side-bend.mp4"
  },
  {
    "slug": "band-standing-twisting-crunches",
    "name": "Band Standing Twisting Crunches",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Resistance Band"
    ],
    "primaryMuscles": [
      "Obliques"
    ],
    "secondaryMuscles": [
      "Upper Abs",
      "Lower Abs"
    ],
    "tags": [
      "CORE",
      "FUNCTIONAL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "ALTERNATING",
    "weightType": "BAND",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/band-standing-twisting-crunches.mp4"
  },
  {
    "slug": "band-triceps-pushdown",
    "name": "Band Triceps Pushdown",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Resistance Band"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BAND",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/band-triceps-pushdown.mp4"
  },
  {
    "slug": "band-twist-horizontal",
    "name": "Band Twist (horizontal)",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Resistance Band"
    ],
    "primaryMuscles": [
      "Obliques"
    ],
    "secondaryMuscles": [
      "Lower Abs",
      "Upper Abs"
    ],
    "tags": [
      "CORE",
      "MOBILITY",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "ALTERNATING",
    "weightType": "BAND",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/band-twist-horizontal.mp4"
  },
  {
    "slug": "band-upright-row",
    "name": "Band Upright Row",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Resistance Band"
    ],
    "primaryMuscles": [
      "Side Delts"
    ],
    "secondaryMuscles": [
      "Front Delts",
      "Rear Delts"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BAND",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/band-upright-row.mp4"
  },
  {
    "slug": "band-warm-up-dynamic-shoulder-stretch",
    "name": "Band Warm-Up Dynamic Shoulder Stretch",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Resistance Band"
    ],
    "primaryMuscles": [
      "Front Delts"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Mid Chest",
      "Upper Chest"
    ],
    "tags": [
      "MOBILITY",
      "STRETCH",
      "WARMUP"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/band-warm-up-dynamic-shoulder-stretch.mp4"
  },
  {
    "slug": "banded-face-pull",
    "name": "Banded Face Pull",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Resistance Band"
    ],
    "primaryMuscles": [
      "Rear Delts"
    ],
    "secondaryMuscles": [
      "Middle Traps",
      "Side Delts",
      "Lower Traps",
      "Upper Traps"
    ],
    "tags": [
      "STRENGTH",
      "PULL",
      "REHAB",
      "FUNCTIONAL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BAND",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/banded-face-pull.mp4"
  },
  {
    "slug": "bar-cable-biceps-curl",
    "name": "Bar Cable Biceps Curl",
    "categories": [
      "Biceps"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/bar-cable-biceps-curl.mp4"
  },
  {
    "slug": "barbell-behind-neck-shoulder-press",
    "name": "Barbell Behind Neck Shoulder Press",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Barbell"
    ],
    "primaryMuscles": [
      "Front Delts"
    ],
    "secondaryMuscles": [
      "Side Delts",
      "Triceps",
      "Rear Delts"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/barbell-behind-neck-shoulder-press.mp4"
  },
  {
    "slug": "barbell-bench-press",
    "name": "Barbell Bench Press",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Barbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Upper Chest",
      "Triceps",
      "Front Delts",
      "Serratus Anterior"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/barbell-bench-press.mp4"
  },
  {
    "slug": "barbell-bench-press-with-chains",
    "name": "Barbell Bench Press with Chains",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Barbell"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Upper Chest",
      "Triceps",
      "Front Delts",
      "Serratus Anterior"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/barbell-bench-press-with-chains.mp4"
  },
  {
    "slug": "barbell-bent-over-row",
    "name": "Barbell Bent Over Row",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Barbell"
    ],
    "primaryMuscles": [
      "Lower Traps"
    ],
    "secondaryMuscles": [
      "Infraspinatus",
      "Teres Minor",
      "Middle Traps",
      "Rear Delts",
      "Lats"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/barbell-bent-over-row.mp4"
  },
  {
    "slug": "barbell-bent-over-row-from-pin",
    "name": "Barbell Bent Over Row From Pin",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Barbell",
      "Other"
    ],
    "primaryMuscles": [
      "Lats"
    ],
    "secondaryMuscles": [
      "Teres Major",
      "Lower Traps",
      "Infraspinatus",
      "Teres Minor",
      "Middle Traps"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/barbell-bent-over-row-from-pin.mp4"
  },
  {
    "slug": "barbell-bulgarian-squat",
    "name": "Barbell Bulgarian Squat",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Barbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Adductors",
      "Sartorius",
      "Gluteus Medius",
      "Hamstrings"
    ],
    "tags": [
      "STRENGTH",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/barbell-bulgarian-squat.mp4"
  },
  {
    "slug": "barbell-calf-raise",
    "name": "Barbell Calf Raise",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Barbell"
    ],
    "primaryMuscles": [
      "Gastrocnemius"
    ],
    "secondaryMuscles": [
      "Soleus",
      "Tibialis Anterior"
    ],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/barbell-calf-raise.mp4"
  },
  {
    "slug": "barbell-cossack-squat",
    "name": "Barbell Cossack Squat",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Barbell"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Hamstrings",
      "Gluteus Maximus",
      "Gluteus Medius",
      "Adductors",
      "Sartorius"
    ],
    "tags": [
      "STRENGTH",
      "MOBILITY",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/barbell-cossack-squat.mp4"
  },
  {
    "slug": "barbell-drag-curl",
    "name": "Barbell Drag Curl",
    "categories": [
      "Biceps"
    ],
    "equipment": [
      "Barbell"
    ],
    "primaryMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [
      "Brachioradialis",
      "Forearm Flexors"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/barbell-drag-curl.mp4"
  },
  {
    "slug": "barbell-floor-press",
    "name": "Barbell Floor Press",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Barbell"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Forearm Extensors",
      "Serratus Anterior",
      "Upper Chest",
      "Triceps"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/barbell-floor-press.mp4"
  },
  {
    "slug": "barbell-front-raise",
    "name": "Barbell Front Raise",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Barbell"
    ],
    "primaryMuscles": [
      "Front Delts"
    ],
    "secondaryMuscles": [
      "Side Delts"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/barbell-front-raise.mp4"
  },
  {
    "slug": "barbell-glute-bridge",
    "name": "Barbell Glute Bridge",
    "categories": [
      "Gluteal"
    ],
    "equipment": [
      "Barbell"
    ],
    "primaryMuscles": [
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Quadriceps",
      "Gluteus Medius"
    ],
    "tags": [
      "STRENGTH",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/barbell-glute-bridge.mp4"
  },
  {
    "slug": "barbell-good-morning",
    "name": "Barbell Good Morning",
    "categories": [
      "Gluteal"
    ],
    "equipment": [
      "Barbell"
    ],
    "primaryMuscles": [
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Spinal Erectors",
      "Gluteus Medius",
      "Hamstrings"
    ],
    "tags": [
      "STRENGTH",
      "MOBILITY"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/barbell-good-morning.mp4"
  },
  {
    "slug": "barbell-hack-squat",
    "name": "Barbell Hack Squat",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Barbell"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Gluteus Medius",
      "Sartorius"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/barbell-hack-squat.mp4"
  },
  {
    "slug": "barbell-incline-wide-grip-row",
    "name": "Barbell Incline Wide Grip Row",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Barbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Middle Traps"
    ],
    "secondaryMuscles": [
      "Rear Delts",
      "Infraspinatus",
      "Lower Traps",
      "Upper Traps",
      "Teres Minor"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/barbell-incline-wide-grip-row.mp4"
  },
  {
    "slug": "barbell-larsen-press",
    "name": "Barbell Larsen Press",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Barbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Upper Chest",
      "Triceps",
      "Front Delts",
      "Serratus Anterior"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/barbell-larsen-press.mp4"
  },
  {
    "slug": "barbell-narrow-grip-upright-row",
    "name": "Barbell Narrow Grip Upright Row",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Barbell"
    ],
    "primaryMuscles": [
      "Side Delts"
    ],
    "secondaryMuscles": [
      "Front Delts"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/barbell-narrow-grip-upright-row.mp4"
  },
  {
    "slug": "barbell-overhead-press",
    "name": "Barbell Overhead Press",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Barbell"
    ],
    "primaryMuscles": [
      "Front Delts"
    ],
    "secondaryMuscles": [
      "Side Delts",
      "Triceps",
      "Upper Chest"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/barbell-overhead-press.mp4"
  },
  {
    "slug": "barbell-overhead-squat",
    "name": "Barbell Overhead Squat",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Barbell"
    ],
    "primaryMuscles": [
      "Quadriceps",
      "Sartorius"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "MOBILITY",
      "BALANCE",
      "FUNCTIONAL",
      "CORE"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/barbell-overhead-squat.mp4"
  },
  {
    "slug": "barbell-preacher-curl",
    "name": "Barbell Preacher Curl",
    "categories": [
      "Biceps"
    ],
    "equipment": [
      "Barbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/barbell-preacher-curl.mp4"
  },
  {
    "slug": "barbell-prone-incline-curl",
    "name": "Barbell Prone Incline Curl",
    "categories": [
      "Biceps"
    ],
    "equipment": [
      "Barbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/barbell-prone-incline-curl.mp4"
  },
  {
    "slug": "barbell-pullover",
    "name": "Barbell Pullover",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Barbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Lats"
    ],
    "secondaryMuscles": [
      "Teres Minor",
      "Serratus Anterior",
      "Teres Major",
      "Triceps",
      "Lower Chest"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/barbell-pullover.mp4"
  },
  {
    "slug": "barbell-push-press",
    "name": "Barbell Push Press",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Barbell"
    ],
    "primaryMuscles": [
      "Front Delts"
    ],
    "secondaryMuscles": [
      "Side Delts",
      "Quadriceps",
      "Upper Chest",
      "Gastrocnemius",
      "Soleus"
    ],
    "tags": [
      "STRENGTH",
      "EXPLOSIVE",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/barbell-push-press.mp4"
  },
  {
    "slug": "barbell-rack-pull",
    "name": "Barbell Rack Pull",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Barbell",
      "Other"
    ],
    "primaryMuscles": [
      "Spinal Erectors"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Gluteus Medius",
      "Hamstrings",
      "Upper Traps",
      "Middle Traps"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/barbell-rack-pull.mp4"
  },
  {
    "slug": "barbell-rear-delt-raise",
    "name": "Barbell Rear Delt Raise",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Barbell"
    ],
    "primaryMuscles": [
      "Rear Delts"
    ],
    "secondaryMuscles": [
      "Upper Traps",
      "Middle Traps",
      "Side Delts"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/barbell-rear-delt-raise.mp4"
  },
  {
    "slug": "barbell-rear-delt-row",
    "name": "Barbell Rear Delt Row",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Barbell"
    ],
    "primaryMuscles": [
      "Rear Delts"
    ],
    "secondaryMuscles": [
      "Middle Traps",
      "Lower Traps",
      "Upper Traps",
      "Infraspinatus",
      "Teres Major"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/barbell-rear-delt-row.mp4"
  },
  {
    "slug": "barbell-rear-lunge-on-step",
    "name": "Barbell Rear Lunge On Step",
    "categories": [
      "Gluteal"
    ],
    "equipment": [
      "Barbell",
      "Other"
    ],
    "primaryMuscles": [
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Quadriceps",
      "Gluteus Medius"
    ],
    "tags": [
      "STRENGTH",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "ALTERNATING",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/barbell-rear-lunge-on-step.mp4"
  },
  {
    "slug": "barbell-reverse-grip-bent-over-row",
    "name": "Barbell Reverse Grip Bent Over Row",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Barbell"
    ],
    "primaryMuscles": [
      "Lats"
    ],
    "secondaryMuscles": [
      "Middle Traps",
      "Infraspinatus",
      "Lower Traps",
      "Teres Minor",
      "Biceps"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/barbell-reverse-grip-bent-over-row.mp4"
  },
  {
    "slug": "barbell-reverse-grip-forearm-curl",
    "name": "Barbell Reverse Grip Forearm Curl",
    "categories": [
      "Forearms"
    ],
    "equipment": [
      "Barbell"
    ],
    "primaryMuscles": [
      "Brachioradialis"
    ],
    "secondaryMuscles": [
      "Forearm Extensors",
      "Biceps",
      "Forearm Flexors"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/barbell-reverse-grip-forearm-curl.mp4"
  },
  {
    "slug": "barbell-reverse-lunges",
    "name": "Barbell Reverse Lunges",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Barbell"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Gastrocnemius",
      "Soleus"
    ],
    "tags": [
      "STRENGTH",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "ALTERNATING",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/barbell-reverse-lunges.mp4"
  },
  {
    "slug": "barbell-reverse-wrist-curl",
    "name": "Barbell Reverse Wrist Curl",
    "categories": [
      "Forearms"
    ],
    "equipment": [
      "Barbell"
    ],
    "primaryMuscles": [
      "Forearm Extensors"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/barbell-reverse-wrist-curl.mp4"
  },
  {
    "slug": "barbell-rollout-kneeling",
    "name": "Barbell Rollout - Kneeling",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Barbell"
    ],
    "primaryMuscles": [
      "Lower Abs",
      "Upper Abs"
    ],
    "secondaryMuscles": [
      "Obliques",
      "Quadriceps"
    ],
    "tags": [
      "STRENGTH",
      "CORE"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/barbell-rollout-kneeling.mp4"
  },
  {
    "slug": "barbell-shoulder-grip-upright-row",
    "name": "Barbell Shoulder Grip Upright Row",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Barbell"
    ],
    "primaryMuscles": [
      "Side Delts"
    ],
    "secondaryMuscles": [
      "Front Delts",
      "Biceps",
      "Brachioradialis"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/barbell-shoulder-grip-upright-row.mp4"
  },
  {
    "slug": "barbell-shoulder-shrug",
    "name": "Barbell Shoulder Shrug",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Barbell"
    ],
    "primaryMuscles": [
      "Upper Traps"
    ],
    "secondaryMuscles": [
      "Middle Traps"
    ],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/barbell-shoulder-shrug.mp4"
  },
  {
    "slug": "barbell-shrug-behind-the-back",
    "name": "Barbell Shrug Behind The Back",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Barbell"
    ],
    "primaryMuscles": [
      "Upper Traps"
    ],
    "secondaryMuscles": [
      "Middle Traps"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/barbell-shrug-behind-the-back.mp4"
  },
  {
    "slug": "barbell-split-squat",
    "name": "Barbell Split Squat",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Barbell"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Sartorius",
      "Adductors",
      "Hamstrings",
      "Gluteus Medius"
    ],
    "tags": [
      "STRENGTH",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/barbell-split-squat.mp4"
  },
  {
    "slug": "barbell-squat",
    "name": "Barbell Squat",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Barbell"
    ],
    "primaryMuscles": [
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Quadriceps",
      "Sartorius",
      "Adductors",
      "Spinal Erectors",
      "Gluteus Medius"
    ],
    "tags": [
      "STRENGTH",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/barbell-squat.mp4"
  },
  {
    "slug": "barbell-standing-back-wrist-curl",
    "name": "Barbell Standing Back Wrist Curl",
    "categories": [
      "Forearms"
    ],
    "equipment": [
      "Barbell"
    ],
    "primaryMuscles": [
      "Forearm Flexors"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/barbell-standing-back-wrist-curl.mp4"
  },
  {
    "slug": "barbell-standing-twist",
    "name": "Barbell Standing Twist",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Barbell"
    ],
    "primaryMuscles": [
      "Obliques"
    ],
    "secondaryMuscles": [
      "Lower Abs",
      "Upper Abs"
    ],
    "tags": [
      "CORE",
      "MOBILITY",
      "FUNCTIONAL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/barbell-standing-twist.mp4"
  },
  {
    "slug": "barbell-standing-wrist-curl",
    "name": "Barbell Standing Wrist Curl",
    "categories": [
      "Forearms"
    ],
    "equipment": [
      "Barbell"
    ],
    "primaryMuscles": [
      "Forearm Flexors"
    ],
    "secondaryMuscles": [
      "Forearm Extensors"
    ],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/barbell-standing-wrist-curl.mp4"
  },
  {
    "slug": "barbell-step-up",
    "name": "Barbell Step-up",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Barbell",
      "Other"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/barbell-step-up.mp4"
  },
  {
    "slug": "barbell-straight-leg-deadlift",
    "name": "Barbell Straight Leg Deadlift",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Barbell"
    ],
    "primaryMuscles": [
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Hamstrings",
      "Spinal Erectors",
      "Forearm Flexors",
      "Adductors",
      "Brachioradialis"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/barbell-straight-leg-deadlift.mp4"
  },
  {
    "slug": "barbell-sumo-squat",
    "name": "Barbell Sumo Squat",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Barbell"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Gluteus Medius",
      "Sartorius",
      "Adductors",
      "Gastrocnemius"
    ],
    "tags": [
      "STRENGTH",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/barbell-sumo-squat.mp4"
  },
  {
    "slug": "barbell-thruster",
    "name": "Barbell Thruster",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Barbell"
    ],
    "primaryMuscles": [
      "Front Delts",
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Gastrocnemius",
      "Side Delts",
      "Sartorius",
      "Upper Chest"
    ],
    "tags": [
      "STRENGTH",
      "EXPLOSIVE",
      "PUSH",
      "FUNCTIONAL",
      "CARDIO"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/barbell-thruster.mp4"
  },
  {
    "slug": "barbell-walking-lunges",
    "name": "Barbell Walking Lunges",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Barbell"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Sartorius",
      "Gluteus Maximus",
      "Gluteus Medius",
      "Soleus"
    ],
    "tags": [
      "STRENGTH",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "ALTERNATING",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/barbell-walking-lunges.mp4"
  },
  {
    "slug": "barbell-wall-curl",
    "name": "Barbell Wall Curl",
    "categories": [
      "Biceps"
    ],
    "equipment": [
      "Barbell"
    ],
    "primaryMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [
      "Forearm Flexors",
      "Brachioradialis"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/barbell-wall-curl.mp4"
  },
  {
    "slug": "barbell-wide-grip-upright-row",
    "name": "Barbell Wide Grip Upright Row",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Barbell"
    ],
    "primaryMuscles": [
      "Side Delts"
    ],
    "secondaryMuscles": [
      "Front Delts"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/barbell-wide-grip-upright-row.mp4"
  },
  {
    "slug": "barbell-wrist-curl",
    "name": "Barbell Wrist Curl",
    "categories": [
      "Forearms"
    ],
    "equipment": [
      "Barbell"
    ],
    "primaryMuscles": [
      "Forearm Flexors"
    ],
    "secondaryMuscles": [
      "Forearm Extensors"
    ],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/barbell-wrist-curl.mp4"
  },
  {
    "slug": "bayesian-cable-curl",
    "name": "Bayesian Cable Curl",
    "categories": [
      "Biceps"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/bayesian-cable-curl.mp4"
  },
  {
    "slug": "bayesian-cable-curl-face-away",
    "name": "Bayesian Cable Curl (Face Away)",
    "categories": [
      "Biceps"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [
      "Brachioradialis",
      "Forearm Flexors"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/bayesian-cable-curl-face-away.mp4"
  },
  {
    "slug": "bayesian-cable-curl-seated",
    "name": "Bayesian Cable Curl Seated",
    "categories": [
      "Biceps"
    ],
    "equipment": [
      "Cable",
      "Bench"
    ],
    "primaryMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [
      "Brachioradialis"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/bayesian-cable-curl-seated.mp4"
  },
  {
    "slug": "bear-plank",
    "name": "Bear Plank",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Lower Abs",
      "Upper Abs"
    ],
    "secondaryMuscles": [
      "Obliques",
      "Quadriceps",
      "Gluteus Maximus",
      "Hamstrings"
    ],
    "tags": [
      "CORE",
      "ISOMETRIC",
      "FUNCTIONAL",
      "BALANCE"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/bear-plank.mp4"
  },
  {
    "slug": "bench-front-squat",
    "name": "Bench Front Squat",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Barbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Sartorius",
      "Spinal Erectors",
      "Adductors",
      "Gluteus Medius"
    ],
    "tags": [
      "STRENGTH",
      "FUNCTIONAL",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/bench-front-squat.mp4"
  },
  {
    "slug": "bench-press-with-resistance-band",
    "name": "Bench Press With Resistance Band",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Barbell",
      "Bench",
      "Resistance Band"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Upper Chest",
      "Triceps",
      "Front Delts",
      "Serratus Anterior"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/bench-press-with-resistance-band.mp4"
  },
  {
    "slug": "bent-arm-chest-stretch",
    "name": "Bent Arm Chest Stretch",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Lower Chest",
      "Mid Chest",
      "Serratus Anterior",
      "Upper Chest"
    ],
    "secondaryMuscles": [],
    "tags": [
      "MOBILITY",
      "STRETCH",
      "WARMUP"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/bent-arm-chest-stretch.mp4"
  },
  {
    "slug": "bent-over-dumbbell-lateral-raise",
    "name": "Bent Over Dumbbell Lateral Raise",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Rear Delts"
    ],
    "secondaryMuscles": [
      "Middle Traps",
      "Infraspinatus",
      "Lower Traps",
      "Upper Traps"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/bent-over-dumbbell-lateral-raise.mp4"
  },
  {
    "slug": "bent-over-kettlebell-row",
    "name": "Bent Over Kettlebell Row",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Kettlebell"
    ],
    "primaryMuscles": [
      "Lower Traps",
      "Teres Major"
    ],
    "secondaryMuscles": [
      "Infraspinatus",
      "Teres Minor",
      "Lats",
      "Rear Delts",
      "Brachioradialis"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "WEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/bent-over-kettlebell-row.mp4"
  },
  {
    "slug": "biceps-barbell-curl",
    "name": "Biceps Barbell Curl",
    "categories": [
      "Biceps"
    ],
    "equipment": [
      "Barbell"
    ],
    "primaryMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [
      "Brachioradialis"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/biceps-barbell-curl.mp4"
  },
  {
    "slug": "bicycle-crunches",
    "name": "Bicycle Crunches",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Obliques"
    ],
    "secondaryMuscles": [
      "Upper Abs",
      "Lower Abs"
    ],
    "tags": [
      "CORE",
      "FUNCTIONAL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "ALTERNATING",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/bicycle-crunches.mp4"
  },
  {
    "slug": "bird-dog",
    "name": "Bird Dog",
    "categories": [
      "Gluteal"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Spinal Erectors",
      "Infraspinatus",
      "Middle Traps",
      "Side Delts",
      "Hamstrings"
    ],
    "tags": [
      "CORE",
      "BALANCE",
      "FUNCTIONAL",
      "WARMUP"
    ],
    "mechanics": "COMPOUND",
    "laterality": "ALTERNATING",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/bird-dog.mp4"
  },
  {
    "slug": "bird-dog-plank",
    "name": "Bird Dog Plank",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Rear Delts",
      "Side Delts",
      "Triceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Upper Traps",
      "Lower Abs",
      "Middle Traps",
      "Obliques"
    ],
    "tags": [
      "CORE",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "ALTERNATING",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/bird-dog-plank.mp4"
  },
  {
    "slug": "bird-dog-push-up",
    "name": "Bird Dog Push-Up",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Triceps",
      "Lower Chest",
      "Upper Chest",
      "Front Delts",
      "Serratus Anterior"
    ],
    "tags": [
      "STRENGTH",
      "CORE",
      "BALANCE",
      "FUNCTIONAL",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "ALTERNATING",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/bird-dog-push-up.mp4"
  },
  {
    "slug": "bodyweight-windmill",
    "name": "Bodyweight Windmill",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Obliques"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Gluteus Medius",
      "Hamstrings",
      "Lower Abs",
      "Upper Abs"
    ],
    "tags": [
      "MOBILITY",
      "CORE",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "ALTERNATING",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/bodyweight-windmill.mp4"
  },
  {
    "slug": "bottom-up-rotation",
    "name": "Bottom up rotation",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Kettlebell"
    ],
    "primaryMuscles": [
      "Lower Abs"
    ],
    "secondaryMuscles": [
      "Obliques",
      "Upper Abs"
    ],
    "tags": [
      "CORE"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "not-provided"
  },
  {
    "slug": "box-jumps",
    "name": "Box Jumps",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Other"
    ],
    "primaryMuscles": [
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Quadriceps",
      "Sartorius",
      "Gluteus Medius",
      "Adductors"
    ],
    "tags": [
      "PLYOMETRIC",
      "EXPLOSIVE",
      "BALANCE",
      "FUNCTIONAL",
      "CARDIO"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/box-jumps.mp4"
  },
  {
    "slug": "box-squat",
    "name": "Box Squat",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Barbell",
      "Other"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Adductors",
      "Sartorius",
      "Gluteus Medius",
      "Hamstrings"
    ],
    "tags": [
      "STRENGTH",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/box-squat.mp4"
  },
  {
    "slug": "box-step-up",
    "name": "Box step-up",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Other"
    ],
    "primaryMuscles": [
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Quadriceps",
      "Sartorius",
      "Gluteus Medius",
      "Soleus",
      "Adductors"
    ],
    "tags": [
      "STRENGTH",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/box-step-up.mp4"
  },
  {
    "slug": "broad-jump",
    "name": "Broad Jump",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Sartorius",
      "Gastrocnemius",
      "Soleus",
      "Hamstrings"
    ],
    "tags": [
      "PLYOMETRIC",
      "EXPLOSIVE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/broad-jump.mp4"
  },
  {
    "slug": "bulgarian-bag-walking-lunges",
    "name": "Bulgarian Bag Walking Lunges",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Sartorius",
      "Adductors",
      "Hamstrings",
      "Gluteus Medius"
    ],
    "tags": [
      "STRENGTH",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "ALTERNATING",
    "weightType": "WEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/bulgarian-bag-walking-lunges.mp4"
  },
  {
    "slug": "bulgarian-jump-squat",
    "name": "Bulgarian Jump Squat",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Medius",
      "Gluteus Maximus"
    ],
    "tags": [
      "PLYOMETRIC",
      "EXPLOSIVE",
      "BALANCE"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/bulgarian-jump-squat.mp4"
  },
  {
    "slug": "bulgarian-squat",
    "name": "Bulgarian Squat",
    "categories": [
      "Gluteal"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Gluteus Medius",
      "Quadriceps",
      "Sartorius"
    ],
    "tags": [
      "STRENGTH",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/bulgarian-squat.mp4"
  },
  {
    "slug": "bulgarian-squat-smith",
    "name": "Bulgarian Squat Smith",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Smith Machine"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Gluteus Medius",
      "Sartorius"
    ],
    "tags": [
      "STRENGTH",
      "BALANCE"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/bulgarian-squat-smith.mp4"
  },
  {
    "slug": "burpee",
    "name": "Burpee",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Mid Chest",
      "Lower Chest",
      "Gluteus Maximus",
      "Triceps",
      "Upper Chest"
    ],
    "tags": [
      "PLYOMETRIC",
      "CARDIO",
      "FUNCTIONAL",
      "EXPLOSIVE",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/burpee.mp4"
  },
  {
    "slug": "butterfly-lean-forward-stretch",
    "name": "Butterfly Lean Forward Stretch",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Adductors"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Sartorius",
      "Spinal Erectors"
    ],
    "tags": [
      "STRETCH",
      "MOBILITY",
      "WARMUP"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/butterfly-lean-forward-stretch.mp4"
  },
  {
    "slug": "butterfly-stretch",
    "name": "Butterfly Stretch",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Adductors",
      "Sartorius"
    ],
    "secondaryMuscles": [],
    "tags": [
      "MOBILITY",
      "STRETCH",
      "WARMUP"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/butterfly-stretch.mp4"
  },
  {
    "slug": "cable-bench-press",
    "name": "Cable Bench Press",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Cable",
      "Bench"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Triceps",
      "Upper Chest",
      "Front Delts",
      "Serratus Anterior"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/cable-bench-press.mp4"
  },
  {
    "slug": "cable-close-grip-lat-pulldown",
    "name": "Cable Close Grip Lat Pulldown",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Lats"
    ],
    "secondaryMuscles": [
      "Teres Major",
      "Lower Traps",
      "Teres Minor",
      "Infraspinatus",
      "Brachioradialis"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/cable-close-grip-lat-pulldown.mp4"
  },
  {
    "slug": "cable-cross-triceps-extension",
    "name": "Cable Cross Triceps Extension",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/cable-cross-triceps-extension.mp4"
  },
  {
    "slug": "cable-double-arm-tricep-kickback",
    "name": "Cable Double-Arm Tricep Kickback",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/cable-double-arm-tricep-kickback.mp4"
  },
  {
    "slug": "cable-face-pull",
    "name": "Cable Face Pull",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Rear Delts"
    ],
    "secondaryMuscles": [
      "Middle Traps",
      "Infraspinatus",
      "Upper Traps"
    ],
    "tags": [
      "STRENGTH",
      "PULL",
      "REHAB",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/cable-face-pull.mp4"
  },
  {
    "slug": "cable-front-raise",
    "name": "Cable Front Raise",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Front Delts"
    ],
    "secondaryMuscles": [
      "Side Delts",
      "Serratus Anterior",
      "Upper Chest"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/cable-front-raise.mp4"
  },
  {
    "slug": "cable-hip-abducction",
    "name": "Cable Hip Abducction",
    "categories": [
      "Gluteal"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Gluteus Medius"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "MOBILITY",
      "REHAB",
      "BALANCE"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/cable-hip-abducction.mp4"
  },
  {
    "slug": "cable-hip-adduction",
    "name": "Cable Hip Adduction",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Adductors"
    ],
    "secondaryMuscles": [
      "Sartorius"
    ],
    "tags": [
      "STRENGTH",
      "MOBILITY"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/cable-hip-adduction.mp4"
  },
  {
    "slug": "cable-horizontal-pallof-press",
    "name": "Cable Horizontal Pallof Press",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Obliques"
    ],
    "secondaryMuscles": [
      "Front Delts",
      "Mid Chest",
      "Upper Abs",
      "Lower Abs",
      "Adductors"
    ],
    "tags": [
      "CORE",
      "FUNCTIONAL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/cable-horizontal-pallof-press.mp4"
  },
  {
    "slug": "cable-incline-skull-crusher",
    "name": "Cable Incline Skull Crusher",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Cable",
      "Bench"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/cable-incline-skull-crusher.mp4"
  },
  {
    "slug": "cable-incline-y-raise-back-supported",
    "name": "Cable Incline Y Raise Back Supported",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Cable",
      "Bench"
    ],
    "primaryMuscles": [
      "Side Delts"
    ],
    "secondaryMuscles": [
      "Rear Delts",
      "Middle Traps",
      "Upper Traps",
      "Front Delts",
      "Infraspinatus"
    ],
    "tags": [
      "STRENGTH",
      "FUNCTIONAL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/cable-incline-y-raise-back-supported.mp4"
  },
  {
    "slug": "cable-kneeling-high-to-low-fly",
    "name": "Cable Kneeling High To Low Fly",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Lower Chest"
    ],
    "secondaryMuscles": [
      "Mid Chest",
      "Serratus Anterior",
      "Front Delts",
      "Upper Chest",
      "Triceps"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/cable-kneeling-high-to-low-fly.mp4"
  },
  {
    "slug": "cable-kneeling-side-crunch",
    "name": "Cable Kneeling Side Crunch",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Obliques"
    ],
    "secondaryMuscles": [
      "Upper Abs",
      "Lower Abs"
    ],
    "tags": [
      "CORE"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/cable-kneeling-side-crunch.mp4"
  },
  {
    "slug": "cable-lat-pulldown",
    "name": "Cable Lat Pulldown",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Lats"
    ],
    "secondaryMuscles": [
      "Teres Major",
      "Teres Minor",
      "Brachioradialis",
      "Lower Traps",
      "Infraspinatus"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/cable-lat-pulldown.mp4"
  },
  {
    "slug": "cable-lateral-raise",
    "name": "Cable Lateral Raise",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Side Delts"
    ],
    "secondaryMuscles": [
      "Front Delts",
      "Rear Delts"
    ],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/cable-lateral-raise.mp4"
  },
  {
    "slug": "cable-leaning-lateral-raise",
    "name": "Cable Leaning Lateral Raise",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Side Delts"
    ],
    "secondaryMuscles": [
      "Rear Delts",
      "Serratus Anterior",
      "Front Delts",
      "Lower Chest",
      "Mid Chest"
    ],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/cable-leaning-lateral-raise.mp4"
  },
  {
    "slug": "cable-middle-chest-fly",
    "name": "Cable Middle Chest Fly",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Serratus Anterior",
      "Upper Chest",
      "Front Delts"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/cable-middle-chest-fly.mp4"
  },
  {
    "slug": "cable-neutral-grip-lat-pulldown",
    "name": "Cable Neutral Grip Lat Pulldown",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Lats"
    ],
    "secondaryMuscles": [
      "Rear Delts",
      "Lower Traps",
      "Teres Major",
      "Teres Minor",
      "Middle Traps"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/cable-neutral-grip-lat-pulldown.mp4"
  },
  {
    "slug": "cable-overhead-triceps-extension",
    "name": "Cable Overhead Triceps Extension",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/cable-overhead-triceps-extension.mp4"
  },
  {
    "slug": "cable-preacher-curl",
    "name": "Cable Preacher Curl",
    "categories": [
      "Biceps"
    ],
    "equipment": [
      "Cable",
      "Bench"
    ],
    "primaryMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [
      "Brachioradialis",
      "Forearm Flexors"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/cable-preacher-curl.mp4"
  },
  {
    "slug": "cable-pull-through",
    "name": "Cable Pull Through",
    "categories": [
      "Gluteal"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Spinal Erectors",
      "Hamstrings"
    ],
    "tags": [
      "STRENGTH",
      "PULL",
      "FUNCTIONAL",
      "CORE"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/cable-pull-through.mp4"
  },
  {
    "slug": "cable-rear-delt-fly-reverse-fly",
    "name": "Cable Rear Delt Fly (Reverse Fly)",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Rear Delts"
    ],
    "secondaryMuscles": [
      "Middle Traps",
      "Infraspinatus",
      "Lower Traps",
      "Side Delts"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/cable-rear-delt-fly-reverse-fly.mp4"
  },
  {
    "slug": "cable-reverse-grip-pulldown",
    "name": "Cable Reverse Grip Pulldown",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Teres Minor"
    ],
    "secondaryMuscles": [
      "Teres Major",
      "Lats",
      "Lower Traps",
      "Infraspinatus",
      "Biceps"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/cable-reverse-grip-pulldown.mp4"
  },
  {
    "slug": "cable-romanian-deadlift",
    "name": "Cable Romanian Deadlift",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Hamstrings"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Gluteus Medius",
      "Spinal Erectors"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/cable-romanian-deadlift.mp4"
  },
  {
    "slug": "cable-seated-rear-lateral-raise",
    "name": "Cable Seated Rear Lateral Raise",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Cable",
      "Bench"
    ],
    "primaryMuscles": [
      "Rear Delts"
    ],
    "secondaryMuscles": [
      "Side Delts",
      "Middle Traps",
      "Infraspinatus",
      "Lower Traps",
      "Teres Major"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/cable-seated-rear-lateral-raise.mp4"
  },
  {
    "slug": "cable-seated-row-neutral-grip",
    "name": "Cable Seated Row Neutral Grip",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Middle Traps"
    ],
    "secondaryMuscles": [
      "Rear Delts",
      "Infraspinatus",
      "Lower Traps",
      "Teres Minor",
      "Upper Traps"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/cable-seated-row-neutral-grip.mp4"
  },
  {
    "slug": "cable-seated-supine-grip-row",
    "name": "Cable Seated Supine Grip Row",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Cable",
      "Bench"
    ],
    "primaryMuscles": [
      "Infraspinatus",
      "Lats"
    ],
    "secondaryMuscles": [
      "Teres Major",
      "Teres Minor",
      "Lower Traps",
      "Middle Traps",
      "Biceps"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/cable-seated-supine-grip-row.mp4"
  },
  {
    "slug": "cable-shrug",
    "name": "Cable Shrug",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Upper Traps"
    ],
    "secondaryMuscles": [
      "Middle Traps",
      "Lower Traps"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/cable-shrug.mp4"
  },
  {
    "slug": "cable-squatting-curl",
    "name": "Cable Squatting Curl",
    "categories": [
      "Biceps"
    ],
    "equipment": [
      "Cable",
      "Bench"
    ],
    "primaryMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/cable-squatting-curl.mp4"
  },
  {
    "slug": "cable-standing-wrist-roll",
    "name": "Cable Standing Wrist Roll",
    "categories": [
      "Forearms"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Forearm Extensors"
    ],
    "secondaryMuscles": [
      "Forearm Flexors",
      "Brachioradialis",
      "Front Delts",
      "Biceps",
      "Side Delts"
    ],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/cable-standing-wrist-roll.mp4"
  },
  {
    "slug": "cable-step-up",
    "name": "Cable Step Up",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Cable",
      "Bench"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Adductors"
    ],
    "tags": [
      "STRENGTH",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/cable-step-up.mp4"
  },
  {
    "slug": "cable-supinated-face-pull",
    "name": "Cable Supinated Face Pull",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Rear Delts"
    ],
    "secondaryMuscles": [
      "Middle Traps",
      "Infraspinatus",
      "Upper Traps",
      "Biceps"
    ],
    "tags": [
      "STRENGTH",
      "PULL",
      "REHAB",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/cable-supinated-face-pull.mp4"
  },
  {
    "slug": "cable-terminal-knee-extension",
    "name": "Cable Terminal Knee Extension",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus"
    ],
    "tags": [
      "REHAB",
      "MOBILITY"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/cable-terminal-knee-extension.mp4"
  },
  {
    "slug": "cable-thibaudeau-kayak-row",
    "name": "Cable Thibaudeau Kayak Row",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Lats"
    ],
    "secondaryMuscles": [
      "Teres Major",
      "Teres Minor",
      "Obliques",
      "Serratus Anterior",
      "Infraspinatus"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/cable-thibaudeau-kayak-row.mp4"
  },
  {
    "slug": "cable-triceps-pushdown",
    "name": "Cable Triceps Pushdown",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/cable-triceps-pushdown.mp4"
  },
  {
    "slug": "cable-twist-horizontal",
    "name": "Cable Twist (horizontal)",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Obliques"
    ],
    "secondaryMuscles": [
      "Upper Abs",
      "Lower Abs"
    ],
    "tags": [
      "STRENGTH",
      "CORE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "ALTERNATING",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/cable-twist-horizontal.mp4"
  },
  {
    "slug": "cable-twist-up-down",
    "name": "Cable Twist (up down)",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Obliques"
    ],
    "secondaryMuscles": [
      "Adductors",
      "Gluteus Medius",
      "Upper Abs"
    ],
    "tags": [
      "CORE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "ALTERNATING",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/cable-twist-up-down.mp4"
  },
  {
    "slug": "cable-upright-row",
    "name": "Cable Upright Row",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Side Delts"
    ],
    "secondaryMuscles": [
      "Front Delts",
      "Rear Delts",
      "Upper Traps",
      "Middle Traps"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/cable-upright-row.mp4"
  },
  {
    "slug": "cable-wide-grip-behind-neck-pulldown",
    "name": "Cable Wide Grip Behind Neck Pulldown",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Lats"
    ],
    "secondaryMuscles": [
      "Lower Traps",
      "Brachioradialis",
      "Teres Major",
      "Infraspinatus",
      "Middle Traps"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/cable-wide-grip-behind-neck-pulldown.mp4"
  },
  {
    "slug": "cable-wrist-curl",
    "name": "Cable Wrist Curl",
    "categories": [
      "Forearms"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Forearm Flexors"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/cable-wrist-curl.mp4"
  },
  {
    "slug": "cable-y-raise",
    "name": "Cable Y Raise",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Side Delts"
    ],
    "secondaryMuscles": [
      "Rear Delts",
      "Middle Traps",
      "Upper Traps",
      "Front Delts",
      "Infraspinatus"
    ],
    "tags": [
      "STRENGTH",
      "FUNCTIONAL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/cable-y-raise.mp4"
  },
  {
    "slug": "calf-leg-press",
    "name": "Calf Leg Press",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Smith Machine"
    ],
    "primaryMuscles": [
      "Gastrocnemius",
      "Soleus"
    ],
    "secondaryMuscles": [
      "Tibialis Anterior"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/calf-leg-press.mp4"
  },
  {
    "slug": "california-press",
    "name": "California Press",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [
      "Lats",
      "Serratus Anterior",
      "Teres Major",
      "Lower Chest",
      "Teres Minor"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/california-press.mp4"
  },
  {
    "slug": "capitans-chair-straight-leg-raises",
    "name": "Capitan's Chair Straight Leg Raises",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Other"
    ],
    "primaryMuscles": [
      "Upper Abs"
    ],
    "secondaryMuscles": [
      "Lower Abs",
      "Obliques",
      "Quadriceps"
    ],
    "tags": [
      "STRENGTH",
      "CORE"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/capitans-chair-straight-leg-raises.mp4"
  },
  {
    "slug": "captains-chair-knee-raises",
    "name": "Captains Chair Knee Raises",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Other"
    ],
    "primaryMuscles": [
      "Upper Abs"
    ],
    "secondaryMuscles": [
      "Lower Abs",
      "Obliques"
    ],
    "tags": [
      "CORE"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/captains-chair-knee-raises.mp4"
  },
  {
    "slug": "cat-cow",
    "name": "Cat Cow",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Lower Abs",
      "Lower Traps",
      "Spinal Erectors",
      "Upper Abs"
    ],
    "secondaryMuscles": [],
    "tags": [
      "MOBILITY",
      "STRETCH",
      "WARMUP"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/cat-cow.mp4"
  },
  {
    "slug": "chest-dips",
    "name": "Chest Dips",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Other"
    ],
    "primaryMuscles": [
      "Lower Chest"
    ],
    "secondaryMuscles": [
      "Mid Chest",
      "Triceps",
      "Front Delts",
      "Upper Chest",
      "Serratus Anterior"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/chest-dips.mp4"
  },
  {
    "slug": "chest-supported-lateral-t-raise",
    "name": "Chest Supported Lateral T Raise",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Rear Delts"
    ],
    "secondaryMuscles": [
      "Side Delts",
      "Middle Traps",
      "Lower Traps"
    ],
    "tags": [
      "STRENGTH",
      "REHAB",
      "FUNCTIONAL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/chest-supported-lateral-t-raise.mp4"
  },
  {
    "slug": "chest-supported-machine-row",
    "name": "Chest Supported Machine Row",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Infraspinatus",
      "Teres Minor"
    ],
    "secondaryMuscles": [
      "Lower Traps",
      "Teres Major",
      "Lats",
      "Rear Delts",
      "Middle Traps"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/chest-supported-machine-row.mp4"
  },
  {
    "slug": "childs-pose",
    "name": "Child’s Pose",
    "categories": [
      "Gluteal"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Gluteus Maximus",
      "Lats"
    ],
    "secondaryMuscles": [],
    "tags": [
      "MOBILITY",
      "STRETCH",
      "WARMUP",
      "REHAB",
      "ISOMETRIC"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/childs-pose.mp4"
  },
  {
    "slug": "chin-up",
    "name": "Chin-Up",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Pull-Up Bar"
    ],
    "primaryMuscles": [
      "Lats",
      "Teres Major"
    ],
    "secondaryMuscles": [
      "Teres Minor",
      "Lower Traps",
      "Biceps",
      "Infraspinatus",
      "Middle Traps"
    ],
    "tags": [
      "STRENGTH",
      "PULL",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/chin-up.mp4"
  },
  {
    "slug": "clap-push-up",
    "name": "Clap Push-Up",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Upper Chest",
      "Triceps",
      "Front Delts",
      "Serratus Anterior"
    ],
    "tags": [
      "STRENGTH",
      "PLYOMETRIC",
      "EXPLOSIVE",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/clap-push-up.mp4"
  },
  {
    "slug": "clean-and-jerk",
    "name": "Clean and Jerk",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Barbell"
    ],
    "primaryMuscles": [
      "Front Delts",
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Side Delts",
      "Spinal Erectors",
      "Gluteus Maximus",
      "Hamstrings",
      "Lower Abs"
    ],
    "tags": [
      "STRENGTH",
      "EXPLOSIVE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/clean-and-jerk.mp4"
  },
  {
    "slug": "clean-squat",
    "name": "Clean Squat",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Barbell"
    ],
    "primaryMuscles": [
      "Spinal Erectors"
    ],
    "secondaryMuscles": [
      "Quadriceps",
      "Hamstrings",
      "Gluteus Maximus",
      "Lower Abs",
      "Sartorius"
    ],
    "tags": [
      "STRENGTH",
      "EXPLOSIVE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/clean-squat.mp4"
  },
  {
    "slug": "close-grip-biceps-curl",
    "name": "Close Grip Biceps Curl",
    "categories": [
      "Biceps"
    ],
    "equipment": [
      "Barbell"
    ],
    "primaryMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [
      "Forearm Flexors",
      "Brachioradialis"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/close-grip-biceps-curl.mp4"
  },
  {
    "slug": "close-grip-dumbbell-press",
    "name": "Close Grip Dumbbell Press",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Triceps",
      "Lower Chest",
      "Upper Chest",
      "Serratus Anterior"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/close-grip-dumbbell-press.mp4"
  },
  {
    "slug": "close-grip-ez-bar-curl",
    "name": "Close-grip EZ Bar Curl",
    "categories": [
      "Biceps"
    ],
    "equipment": [
      "EZ Bar"
    ],
    "primaryMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/close-grip-ez-bar-curl.mp4"
  },
  {
    "slug": "close-grip-incline-dumbbell-bench-press",
    "name": "Close Grip Incline Dumbbell Bench Press",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [
      "Serratus Anterior",
      "Front Delts",
      "Upper Chest",
      "Mid Chest",
      "Side Delts"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/close-grip-incline-dumbbell-bench-press.mp4"
  },
  {
    "slug": "close-grip-landmine-row",
    "name": "Close Grip Landmine Row",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Landmine",
      "Barbell"
    ],
    "primaryMuscles": [
      "Lats"
    ],
    "secondaryMuscles": [
      "Infraspinatus",
      "Lower Traps",
      "Teres Minor",
      "Teres Major",
      "Middle Traps"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/close-grip-landmine-row.mp4"
  },
  {
    "slug": "close-grip-pull-up",
    "name": "Close Grip Pull Up",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Pull-Up Bar"
    ],
    "primaryMuscles": [
      "Lats",
      "Teres Major"
    ],
    "secondaryMuscles": [
      "Teres Minor",
      "Infraspinatus",
      "Biceps",
      "Lower Traps",
      "Rear Delts"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/close-grip-pull-up.mp4"
  },
  {
    "slug": "close-grip-push-up",
    "name": "Close Grip Push-Up",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [
      "Mid Chest",
      "Lower Chest",
      "Upper Chest",
      "Front Delts",
      "Serratus Anterior"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/close-grip-push-up.mp4"
  },
  {
    "slug": "close-grip-smith-bench-press",
    "name": "Close Grip Smith Bench Press",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Smith Machine",
      "Bench"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [
      "Mid Chest",
      "Lower Chest",
      "Upper Chest",
      "Front Delts",
      "Serratus Anterior"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/close-grip-smith-bench-press.mp4"
  },
  {
    "slug": "cobra-push-up",
    "name": "Cobra Push-Up",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Triceps",
      "Upper Chest",
      "Front Delts",
      "Serratus Anterior"
    ],
    "tags": [
      "STRENGTH",
      "MOBILITY",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/cobra-push-up.mp4"
  },
  {
    "slug": "concentration-hammer-curl",
    "name": "Concentration Hammer Curl",
    "categories": [
      "Biceps"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [
      "Brachioradialis"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "not-provided"
  },
  {
    "slug": "crab-pose",
    "name": "Crab Pose",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Obliques",
      "Upper Abs"
    ],
    "secondaryMuscles": [
      "Lower Abs"
    ],
    "tags": [
      "MOBILITY",
      "STRETCH",
      "BALANCE",
      "ISOMETRIC"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/crab-pose.mp4"
  },
  {
    "slug": "cross-arms-push-up",
    "name": "Cross Arms Push-Up",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Mid Chest",
      "Upper Chest"
    ],
    "tags": [
      "STRENGTH",
      "PUSH",
      "CORE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/cross-arms-push-up.mp4"
  },
  {
    "slug": "cross-body-one-arm-strength-press",
    "name": "Cross Body One-Arm Strength Press",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Upper Chest",
      "Triceps",
      "Serratus Anterior"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/cross-body-one-arm-strength-press.mp4"
  },
  {
    "slug": "crossack-squat",
    "name": "Crossack Squat",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Adductors"
    ],
    "secondaryMuscles": [
      "Quadriceps",
      "Gluteus Maximus",
      "Hamstrings",
      "Sartorius",
      "Gluteus Medius"
    ],
    "tags": [
      "MOBILITY",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/crossack-squat.mp4"
  },
  {
    "slug": "cyclist-squat",
    "name": "Cyclist Squat",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Barbell"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Adductors",
      "Gluteus Medius",
      "Obliques",
      "Sartorius"
    ],
    "tags": [
      "STRENGTH",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/cyclist-squat.mp4"
  },
  {
    "slug": "dead-bug",
    "name": "Dead Bug",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Lower Abs"
    ],
    "secondaryMuscles": [
      "Upper Abs",
      "Obliques",
      "Adductors",
      "Sartorius"
    ],
    "tags": [
      "CORE",
      "MOTOR",
      "FUNCTIONAL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "ALTERNATING",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dead-bug.mp4"
  },
  {
    "slug": "dead-bug-with-ball",
    "name": "Dead Bug with Ball",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Medicine Ball"
    ],
    "primaryMuscles": [
      "Lower Abs"
    ],
    "secondaryMuscles": [
      "Upper Abs",
      "Obliques",
      "Adductors",
      "Sartorius"
    ],
    "tags": [
      "CORE",
      "MOTOR",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "WEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dead-bug-with-ball.mp4"
  },
  {
    "slug": "dead-hang",
    "name": "Dead Hang",
    "categories": [
      "Forearms"
    ],
    "equipment": [
      "Pull-Up Bar"
    ],
    "primaryMuscles": [
      "Forearm Flexors"
    ],
    "secondaryMuscles": [
      "Forearm Extensors",
      "Teres Minor",
      "Infraspinatus",
      "Lower Traps",
      "Lats"
    ],
    "tags": [
      "MOBILITY",
      "STRETCH",
      "ISOMETRIC"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dead-hang.mp4"
  },
  {
    "slug": "deadlift",
    "name": "Deadlift",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Barbell"
    ],
    "primaryMuscles": [
      "Gluteus Maximus",
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Spinal Erectors",
      "Hamstrings",
      "Gluteus Medius",
      "Forearm Extensors",
      "Forearm Flexors"
    ],
    "tags": [
      "STRENGTH",
      "PULL",
      "FUNCTIONAL",
      "CORE"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/deadlift.mp4"
  },
  {
    "slug": "deadlift-from-blocks",
    "name": "Deadlift from Blocks",
    "categories": [
      "Gluteal"
    ],
    "equipment": [
      "Barbell",
      "Other"
    ],
    "primaryMuscles": [
      "Spinal Erectors"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Quadriceps",
      "Hamstrings",
      "Gluteus Medius",
      "Forearm Extensors"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/deadlift-from-blocks.mp4"
  },
  {
    "slug": "decline-barbell-bench-press",
    "name": "Decline Barbell Bench Press",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Barbell",
      "Bench",
      "Other"
    ],
    "primaryMuscles": [
      "Lower Chest"
    ],
    "secondaryMuscles": [
      "Mid Chest",
      "Serratus Anterior",
      "Triceps",
      "Upper Chest"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/decline-barbell-bench-press.mp4"
  },
  {
    "slug": "decline-barbell-french-press",
    "name": "Decline Barbell French Press",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Barbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/decline-barbell-french-press.mp4"
  },
  {
    "slug": "decline-cable-chest-press",
    "name": "Decline Cable Chest Press",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Cable",
      "Bench"
    ],
    "primaryMuscles": [
      "Lower Chest"
    ],
    "secondaryMuscles": [
      "Mid Chest",
      "Triceps",
      "Serratus Anterior",
      "Upper Chest",
      "Front Delts"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/decline-cable-chest-press.mp4"
  },
  {
    "slug": "decline-chest-press",
    "name": "Decline Chest Press",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Lower Chest"
    ],
    "secondaryMuscles": [
      "Serratus Anterior",
      "Mid Chest",
      "Triceps",
      "Front Delts",
      "Upper Chest"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/decline-chest-press.mp4"
  },
  {
    "slug": "decline-crunch",
    "name": "Decline Crunch",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Bench"
    ],
    "primaryMuscles": [
      "Upper Abs"
    ],
    "secondaryMuscles": [
      "Lower Abs",
      "Obliques"
    ],
    "tags": [
      "CORE"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/decline-crunch.mp4"
  },
  {
    "slug": "decline-diamond-push-up",
    "name": "Decline Diamond Push-Up",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Bench"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Mid Chest",
      "Upper Chest",
      "Front Delts",
      "Side Delts"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/decline-diamond-push-up.mp4"
  },
  {
    "slug": "decline-dumbbell-bench-press",
    "name": "Decline Dumbbell Bench Press",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Lower Chest"
    ],
    "secondaryMuscles": [
      "Mid Chest",
      "Upper Chest",
      "Triceps",
      "Serratus Anterior"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/decline-dumbbell-bench-press.mp4"
  },
  {
    "slug": "decline-dumbbell-fly",
    "name": "Decline Dumbbell Fly",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Lower Chest"
    ],
    "secondaryMuscles": [
      "Mid Chest",
      "Upper Chest",
      "Front Delts"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/decline-dumbbell-fly.mp4"
  },
  {
    "slug": "decline-push-up",
    "name": "Decline Push-Up",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Other",
      "Bench"
    ],
    "primaryMuscles": [
      "Upper Chest"
    ],
    "secondaryMuscles": [
      "Mid Chest",
      "Triceps",
      "Lower Chest",
      "Front Delts",
      "Serratus Anterior"
    ],
    "tags": [
      "STRENGTH",
      "PUSH",
      "CORE"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/decline-push-up.mp4"
  },
  {
    "slug": "decline-smith-bench-press",
    "name": "Decline Smith Bench Press",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Smith Machine",
      "Bench"
    ],
    "primaryMuscles": [
      "Upper Chest"
    ],
    "secondaryMuscles": [
      "Mid Chest",
      "Triceps",
      "Lower Chest",
      "Front Delts"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/decline-smith-bench-press.mp4"
  },
  {
    "slug": "deep-push-up-on-parallel-bars",
    "name": "Deep Push Up On Parallel Bars",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Other"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Upper Chest",
      "Triceps",
      "Front Delts",
      "Serratus Anterior"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/deep-push-up-on-parallel-bars.mp4"
  },
  {
    "slug": "deep-squat-to-wide-fold-with-foot-hold",
    "name": "Deep Squat to Wide Fold with Foot Hold",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Gastrocnemius",
      "Gluteus Maximus",
      "Hamstrings"
    ],
    "secondaryMuscles": [],
    "tags": [
      "MOBILITY",
      "STRETCH",
      "BALANCE",
      "WARMUP"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/deep-squat-to-wide-fold-with-foot-hold.mp4"
  },
  {
    "slug": "deficit-deadlift",
    "name": "Deficit Deadlift",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Barbell",
      "Other"
    ],
    "primaryMuscles": [
      "Gluteus Maximus",
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Spinal Erectors",
      "Hamstrings",
      "Gluteus Medius",
      "Sartorius",
      "Forearm Extensors"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/deficit-deadlift.mp4"
  },
  {
    "slug": "diamond-push-up",
    "name": "Diamond Push-Up",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Mid Chest",
      "Upper Chest"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/diamond-push-up.mp4"
  },
  {
    "slug": "dip-shrugs",
    "name": "Dip Shrugs",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Other"
    ],
    "primaryMuscles": [
      "Upper Traps"
    ],
    "secondaryMuscles": [
      "Serratus Anterior",
      "Middle Traps"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dip-shrugs.mp4"
  },
  {
    "slug": "dips",
    "name": "Dips",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Other"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Front Delts",
      "Mid Chest",
      "Upper Chest",
      "Side Delts"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dips.mp4"
  },
  {
    "slug": "donkey-kick",
    "name": "Donkey Kick",
    "categories": [
      "Gluteal"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Gluteus Medius"
    ],
    "tags": [
      "STRENGTH",
      "MOBILITY",
      "FUNCTIONAL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/donkey-kick.mp4"
  },
  {
    "slug": "doorway-chest-stretch",
    "name": "Doorway Chest Stretch",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Lower Chest",
      "Mid Chest",
      "Serratus Anterior",
      "Upper Chest"
    ],
    "secondaryMuscles": [],
    "tags": [
      "MOBILITY",
      "STRETCH",
      "WARMUP"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/doorway-chest-stretch.mp4"
  },
  {
    "slug": "double-dumbbell-bent-over-row",
    "name": "Double Dumbbell Bent Over Row",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Lats"
    ],
    "secondaryMuscles": [
      "Teres Major",
      "Teres Minor",
      "Lower Traps",
      "Middle Traps",
      "Infraspinatus"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/double-dumbbell-bent-over-row.mp4"
  },
  {
    "slug": "double-dumbbell-preacher-curl",
    "name": "Double Dumbbell Preacher Curl",
    "categories": [
      "Biceps"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [
      "Forearm Flexors"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/double-dumbbell-preacher-curl.mp4"
  },
  {
    "slug": "downward-dog",
    "name": "Downward Dog",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Gastrocnemius",
      "Hamstrings",
      "Soleus"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Gluteus Medius"
    ],
    "tags": [
      "MOBILITY",
      "STRETCH",
      "BALANCE",
      "WARMUP"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/downward-dog.mp4"
  },
  {
    "slug": "dragon-flag",
    "name": "Dragon Flag",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Bench"
    ],
    "primaryMuscles": [
      "Upper Abs"
    ],
    "secondaryMuscles": [
      "Lower Abs",
      "Obliques",
      "Quadriceps"
    ],
    "tags": [
      "STRENGTH",
      "CORE",
      "ISOMETRIC"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dragon-flag.mp4"
  },
  {
    "slug": "dumbbell-alternate-front-raise",
    "name": "Dumbbell Alternate Front Raise",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Front Delts"
    ],
    "secondaryMuscles": [
      "Side Delts"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "ALTERNATING",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-alternate-front-raise.mp4"
  },
  {
    "slug": "dumbbell-alternate-hammer-front-raise",
    "name": "Dumbbell Alternate Hammer Front Raise",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Front Delts"
    ],
    "secondaryMuscles": [
      "Side Delts",
      "Upper Chest",
      "Mid Chest"
    ],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "ALTERNATING",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-alternate-hammer-front-raise.mp4"
  },
  {
    "slug": "dumbbell-alternate-supinated-curl",
    "name": "Dumbbell Alternate Supinated Curl",
    "categories": [
      "Biceps"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [
      "Brachioradialis"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "ALTERNATING",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-alternate-supinated-curl.mp4"
  },
  {
    "slug": "dumbbell-bench-press",
    "name": "Dumbbell Bench Press",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Triceps",
      "Upper Chest",
      "Front Delts",
      "Serratus Anterior"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-bench-press.mp4"
  },
  {
    "slug": "dumbbell-bent-over-row",
    "name": "Dumbbell Bent Over Row",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Lower Traps",
      "Teres Major"
    ],
    "secondaryMuscles": [
      "Infraspinatus",
      "Teres Minor",
      "Lats",
      "Middle Traps",
      "Rear Delts"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-bent-over-row.mp4"
  },
  {
    "slug": "dumbbell-biceps-curl",
    "name": "Dumbbell Biceps Curl",
    "categories": [
      "Biceps"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [
      "Brachioradialis",
      "Forearm Flexors",
      "Forearm Extensors"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-biceps-curl.mp4"
  },
  {
    "slug": "dumbbell-biceps-reverse-curl",
    "name": "Dumbbell Biceps Reverse Curl",
    "categories": [
      "Forearms"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Brachioradialis"
    ],
    "secondaryMuscles": [
      "Forearm Extensors",
      "Biceps"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-biceps-reverse-curl.mp4"
  },
  {
    "slug": "dumbbell-bulgarian-squat",
    "name": "Dumbbell Bulgarian Squat",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Medius",
      "Sartorius",
      "Gluteus Maximus"
    ],
    "tags": [
      "STRENGTH",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-bulgarian-squat.mp4"
  },
  {
    "slug": "dumbbell-chest-fly",
    "name": "Dumbbell Chest Fly",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Upper Chest",
      "Lower Chest",
      "Serratus Anterior"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-chest-fly.mp4"
  },
  {
    "slug": "dumbbell-concentration-curl",
    "name": "Dumbbell Concentration Curl",
    "categories": [
      "Biceps"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-concentration-curl.mp4"
  },
  {
    "slug": "dumbbell-cossack-squat",
    "name": "Dumbbell Cossack Squat",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Gluteus Medius",
      "Hamstrings",
      "Sartorius",
      "Adductors"
    ],
    "tags": [
      "STRENGTH",
      "MOBILITY",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-cossack-squat.mp4"
  },
  {
    "slug": "dumbbell-cross-body-hammer-curl",
    "name": "Dumbbell Cross Body Hammer Curl",
    "categories": [
      "Biceps"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [
      "Brachioradialis"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-cross-body-hammer-curl.mp4"
  },
  {
    "slug": "dumbbell-cuban-rotation",
    "name": "Dumbbell Cuban Rotation",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Rear Delts"
    ],
    "secondaryMuscles": [
      "Side Delts",
      "Front Delts",
      "Infraspinatus",
      "Teres Minor"
    ],
    "tags": [
      "STRENGTH",
      "MOBILITY",
      "REHAB",
      "WARMUP"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-cuban-rotation.mp4"
  },
  {
    "slug": "dumbbell-deadlift",
    "name": "Dumbbell Deadlift",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Spinal Erectors"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Hamstrings",
      "Gluteus Medius"
    ],
    "tags": [
      "STRENGTH",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-deadlift.mp4"
  },
  {
    "slug": "dumbbell-deadlift-straight-legs",
    "name": "Dumbbell Deadlift Straight Legs",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Spinal Erectors",
      "Hamstrings",
      "Forearm Flexors",
      "Gluteus Medius",
      "Forearm Extensors"
    ],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-deadlift-straight-legs.mp4"
  },
  {
    "slug": "dumbbell-deep-push-up",
    "name": "Dumbbell Deep Push Up",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Triceps",
      "Upper Chest",
      "Front Delts"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-deep-push-up.mp4"
  },
  {
    "slug": "dumbbell-drag-curl",
    "name": "Dumbbell Drag Curl",
    "categories": [
      "Biceps"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-drag-curl.mp4"
  },
  {
    "slug": "dumbbell-farmer-carry",
    "name": "Dumbbell Farmer Carry",
    "categories": [
      "Forearms"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Forearm Extensors",
      "Forearm Flexors"
    ],
    "secondaryMuscles": [
      "Brachioradialis",
      "Gastrocnemius",
      "Quadriceps",
      "Soleus",
      "Lower Abs"
    ],
    "tags": [
      "STRENGTH",
      "FUNCTIONAL",
      "CORE",
      "BALANCE"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-farmer-carry.mp4"
  },
  {
    "slug": "dumbbell-floor-chest-fly",
    "name": "Dumbbell Floor Chest Fly",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Upper Chest",
      "Front Delts",
      "Serratus Anterior",
      "Biceps"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-floor-chest-fly.mp4"
  },
  {
    "slug": "dumbbell-front-raise",
    "name": "Dumbbell Front Raise",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Front Delts"
    ],
    "secondaryMuscles": [
      "Side Delts",
      "Serratus Anterior",
      "Upper Chest"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-front-raise.mp4"
  },
  {
    "slug": "dumbbell-goblet-squat",
    "name": "Dumbbell Goblet Squat",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Gluteus Medius",
      "Sartorius"
    ],
    "tags": [
      "STRENGTH",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-goblet-squat.mp4"
  },
  {
    "slug": "dumbbell-half-kneeling-shoulder-press",
    "name": "Dumbbell Half Kneeling Shoulder Press",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Front Delts"
    ],
    "secondaryMuscles": [
      "Side Delts",
      "Rear Delts",
      "Triceps"
    ],
    "tags": [
      "STRENGTH",
      "BALANCE",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-half-kneeling-shoulder-press.mp4"
  },
  {
    "slug": "dumbbell-hammer-curl",
    "name": "Dumbbell Hammer Curl",
    "categories": [
      "Biceps"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [
      "Brachioradialis"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-hammer-curl.mp4"
  },
  {
    "slug": "dumbbell-hip-thrust",
    "name": "Dumbbell Hip Thrust",
    "categories": [
      "Gluteal"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Quadriceps",
      "Hamstrings",
      "Gluteus Medius",
      "Lower Abs",
      "Upper Abs"
    ],
    "tags": [
      "STRENGTH",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-hip-thrust.mp4"
  },
  {
    "slug": "dumbbell-incline-alternate-supinated-curl",
    "name": "Dumbbell Incline Alternate Supinated Curl",
    "categories": [
      "Biceps"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [
      "Brachioradialis",
      "Forearm Extensors",
      "Forearm Flexors"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "ALTERNATING",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-incline-alternate-supinated-curl.mp4"
  },
  {
    "slug": "dumbbell-incline-chest-supported-lateral-raises",
    "name": "Dumbbell Incline Chest Supported Lateral Raises",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Middle Traps"
    ],
    "secondaryMuscles": [
      "Rear Delts",
      "Infraspinatus",
      "Lower Traps",
      "Upper Traps",
      "Side Delts"
    ],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-incline-chest-supported-lateral-raises.mp4"
  },
  {
    "slug": "dumbbell-incline-hammer-curl",
    "name": "Dumbbell Incline Hammer Curl",
    "categories": [
      "Biceps"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [
      "Brachioradialis"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-incline-hammer-curl.mp4"
  },
  {
    "slug": "dumbbell-incline-rear-lateral-t-raise",
    "name": "Dumbbell Incline Rear Lateral T Raise",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Rear Delts"
    ],
    "secondaryMuscles": [
      "Middle Traps",
      "Lower Traps",
      "Infraspinatus",
      "Teres Minor",
      "Upper Traps"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-incline-rear-lateral-t-raise.mp4"
  },
  {
    "slug": "dumbbell-incline-t-raise",
    "name": "Dumbbell Incline T Raise",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Rear Delts"
    ],
    "secondaryMuscles": [
      "Side Delts",
      "Middle Traps",
      "Infraspinatus",
      "Teres Minor"
    ],
    "tags": [
      "STRENGTH",
      "MOBILITY",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-incline-t-raise.mp4"
  },
  {
    "slug": "dumbbell-jump",
    "name": "Dumbbell Jump",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Sartorius",
      "Adductors",
      "Gastrocnemius",
      "Gluteus Medius"
    ],
    "tags": [
      "PLYOMETRIC",
      "EXPLOSIVE",
      "BALANCE"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "WEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-jump.mp4"
  },
  {
    "slug": "dumbbell-kelso-shrugs",
    "name": "Dumbbell Kelso Shrugs",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Middle Traps"
    ],
    "secondaryMuscles": [
      "Upper Traps"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-kelso-shrugs.mp4"
  },
  {
    "slug": "dumbbell-larsen-press",
    "name": "Dumbbell Larsen Press",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Triceps",
      "Upper Chest",
      "Front Delts",
      "Serratus Anterior"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-larsen-press.mp4"
  },
  {
    "slug": "dumbbell-lat-pullover",
    "name": "Dumbbell Lat Pullover",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Teres Major"
    ],
    "secondaryMuscles": [
      "Lats",
      "Serratus Anterior",
      "Triceps",
      "Teres Minor",
      "Lower Chest"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-lat-pullover.mp4"
  },
  {
    "slug": "dumbbell-lateral-raise",
    "name": "Dumbbell Lateral Raise",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Side Delts"
    ],
    "secondaryMuscles": [
      "Front Delts",
      "Rear Delts"
    ],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-lateral-raise.mp4"
  },
  {
    "slug": "dumbbell-low-to-high-fly",
    "name": "Dumbbell Low to High Fly",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Upper Chest"
    ],
    "secondaryMuscles": [
      "Front Delts",
      "Mid Chest"
    ],
    "tags": [
      "STRENGTH",
      "WARMUP"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-low-to-high-fly.mp4"
  },
  {
    "slug": "dumbbell-lu-raises",
    "name": "Dumbbell Lu Raises",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Side Delts"
    ],
    "secondaryMuscles": [
      "Front Delts",
      "Rear Delts",
      "Upper Traps",
      "Middle Traps"
    ],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-lu-raises.mp4"
  },
  {
    "slug": "dumbbell-lunges",
    "name": "Dumbbell Lunges",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Gluteus Medius"
    ],
    "tags": [
      "STRENGTH",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "ALTERNATING",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-lunges.mp4"
  },
  {
    "slug": "dumbbell-lying-leg-curl",
    "name": "Dumbbell Lying Leg Curl",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Hamstrings"
    ],
    "secondaryMuscles": [
      "Gastrocnemius",
      "Soleus"
    ],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-lying-leg-curl.mp4"
  },
  {
    "slug": "dumbbell-lying-pronation",
    "name": "Dumbbell Lying Pronation",
    "categories": [
      "Forearms"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Forearm Extensors"
    ],
    "secondaryMuscles": [
      "Forearm Flexors",
      "Brachioradialis"
    ],
    "tags": [
      "REHAB"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-lying-pronation.mp4"
  },
  {
    "slug": "dumbbell-lying-triceps-extension",
    "name": "Dumbbell Lying Triceps Extension",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-lying-triceps-extension.mp4"
  },
  {
    "slug": "dumbbell-neutral-grip-incline-bench-row",
    "name": "Dumbbell Neutral Grip Incline Bench Row",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Lats"
    ],
    "secondaryMuscles": [
      "Infraspinatus",
      "Teres Major",
      "Teres Minor",
      "Lower Traps",
      "Rear Delts"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-neutral-grip-incline-bench-row.mp4"
  },
  {
    "slug": "dumbbell-poliquin-lateral-raise",
    "name": "Dumbbell Poliquin Lateral Raise",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Side Delts"
    ],
    "secondaryMuscles": [
      "Front Delts",
      "Rear Delts",
      "Biceps",
      "Brachioradialis",
      "Triceps"
    ],
    "tags": [
      "STRENGTH",
      "MOBILITY"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-poliquin-lateral-raise.mp4"
  },
  {
    "slug": "dumbbell-poliquin-press",
    "name": "Dumbbell Poliquin Press",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Upper Chest",
      "Lower Chest",
      "Triceps",
      "Serratus Anterior",
      "Front Delts"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-poliquin-press.mp4"
  },
  {
    "slug": "dumbbell-pullover-with-legs-raised",
    "name": "Dumbbell Pullover with Legs Raised",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Teres Major"
    ],
    "secondaryMuscles": [
      "Serratus Anterior",
      "Teres Minor",
      "Lats",
      "Infraspinatus",
      "Triceps"
    ],
    "tags": [
      "STRENGTH",
      "CORE",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-pullover-with-legs-raised.mp4"
  },
  {
    "slug": "dumbbell-push-press",
    "name": "Dumbbell Push Press",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Front Delts"
    ],
    "secondaryMuscles": [
      "Side Delts",
      "Quadriceps",
      "Lower Abs",
      "Triceps",
      "Upper Abs"
    ],
    "tags": [
      "STRENGTH",
      "EXPLOSIVE",
      "PUSH",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-push-press.mp4"
  },
  {
    "slug": "dumbbell-rear-delt-row",
    "name": "Dumbbell Rear Delt Row",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Rear Delts"
    ],
    "secondaryMuscles": [
      "Middle Traps",
      "Side Delts",
      "Lower Traps"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-rear-delt-row.mp4"
  },
  {
    "slug": "dumbbell-rear-lunge",
    "name": "Dumbbell Rear Lunge",
    "categories": [
      "Gluteal"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Gluteus Maximus",
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Medius"
    ],
    "tags": [
      "STRENGTH",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "ALTERNATING",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-rear-lunge.mp4"
  },
  {
    "slug": "dumbbell-reverse-lunge-off-step",
    "name": "Dumbbell Reverse Lunge off Step",
    "categories": [
      "Gluteal"
    ],
    "equipment": [
      "Dumbbell",
      "Other"
    ],
    "primaryMuscles": [
      "Gluteus Maximus",
      "Gluteus Medius",
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Hamstrings",
      "Soleus"
    ],
    "tags": [
      "STRENGTH",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "ALTERNATING",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-reverse-lunge-off-step.mp4"
  },
  {
    "slug": "dumbbell-romanian-deadlift",
    "name": "Dumbbell Romanian Deadlift",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Spinal Erectors"
    ],
    "secondaryMuscles": [
      "Hamstrings",
      "Gluteus Maximus",
      "Gluteus Medius",
      "Quadriceps",
      "Sartorius"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-romanian-deadlift.mp4"
  },
  {
    "slug": "dumbbell-russian-twist",
    "name": "Dumbbell Russian Twist",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Obliques"
    ],
    "secondaryMuscles": [
      "Lower Abs",
      "Upper Abs"
    ],
    "tags": [
      "CORE",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "ALTERNATING",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-russian-twist.mp4"
  },
  {
    "slug": "dumbbell-seal-row",
    "name": "Dumbbell Seal Row",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Lats"
    ],
    "secondaryMuscles": [
      "Lower Traps",
      "Teres Major",
      "Teres Minor",
      "Infraspinatus",
      "Middle Traps"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-seal-row.mp4"
  },
  {
    "slug": "dumbbell-seated-alternate-hammer-curl",
    "name": "Dumbbell Seated Alternate Hammer Curl",
    "categories": [
      "Biceps"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [
      "Brachioradialis",
      "Forearm Flexors",
      "Forearm Extensors"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "ALTERNATING",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-seated-alternate-hammer-curl.mp4"
  },
  {
    "slug": "dumbbell-seated-bent-over-high-row",
    "name": "Dumbbell Seated Bent Over High Row",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Rear Delts"
    ],
    "secondaryMuscles": [
      "Side Delts",
      "Middle Traps",
      "Infraspinatus",
      "Lower Traps",
      "Teres Major"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-seated-bent-over-high-row.mp4"
  },
  {
    "slug": "dumbbell-seated-lateral-raise",
    "name": "Dumbbell Seated Lateral Raise",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Side Delts"
    ],
    "secondaryMuscles": [
      "Front Delts",
      "Rear Delts"
    ],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-seated-lateral-raise.mp4"
  },
  {
    "slug": "dumbbell-seated-triceps-extension",
    "name": "Dumbbell Seated Triceps Extension",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-seated-triceps-extension.mp4"
  },
  {
    "slug": "dumbbell-shoulder-shrugs",
    "name": "Dumbbell Shoulder Shrugs",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Upper Traps"
    ],
    "secondaryMuscles": [
      "Middle Traps"
    ],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-shoulder-shrugs.mp4"
  },
  {
    "slug": "dumbbell-side-bridge",
    "name": "Dumbbell Side Bridge",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Obliques"
    ],
    "secondaryMuscles": [
      "Adductors",
      "Sartorius"
    ],
    "tags": [
      "CORE",
      "BALANCE",
      "ISOMETRIC"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-side-bridge.mp4"
  },
  {
    "slug": "dumbbell-side-lunges",
    "name": "Dumbbell Side Lunges",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Adductors",
      "Gluteus Maximus",
      "Gluteus Medius",
      "Sartorius"
    ],
    "tags": [
      "STRENGTH",
      "MOBILITY",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-side-lunges.mp4"
  },
  {
    "slug": "dumbbell-single-leg-hip-thrust",
    "name": "Dumbbell Single Leg Hip Thrust",
    "categories": [
      "Gluteal"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Gluteus Medius",
      "Obliques",
      "Quadriceps",
      "Lower Abs",
      "Upper Abs"
    ],
    "tags": [
      "STRENGTH",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-single-leg-hip-thrust.mp4"
  },
  {
    "slug": "dumbbell-snatch",
    "name": "Dumbbell Snatch",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Front Delts"
    ],
    "secondaryMuscles": [
      "Quadriceps",
      "Side Delts",
      "Gluteus Maximus",
      "Gluteus Medius",
      "Hamstrings"
    ],
    "tags": [
      "STRENGTH",
      "EXPLOSIVE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-snatch.mp4"
  },
  {
    "slug": "dumbbell-spider-curl",
    "name": "Dumbbell Spider Curl",
    "categories": [
      "Biceps"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [
      "Brachioradialis"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-spider-curl.mp4"
  },
  {
    "slug": "dumbbell-split-squat",
    "name": "Dumbbell Split Squat",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Gluteus Medius"
    ],
    "tags": [
      "STRENGTH",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-split-squat.mp4"
  },
  {
    "slug": "dumbbell-squat",
    "name": "Dumbbell Squat",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Gluteus Medius",
      "Sartorius"
    ],
    "tags": [
      "STRENGTH",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-squat.mp4"
  },
  {
    "slug": "dumbbell-standing-alternate-press",
    "name": "Dumbbell Standing Alternate Press",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Front Delts",
      "Side Delts"
    ],
    "secondaryMuscles": [
      "Rear Delts"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "ALTERNATING",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-standing-alternate-press.mp4"
  },
  {
    "slug": "dumbbell-standing-calf-raises",
    "name": "Dumbbell Standing Calf Raises",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Gastrocnemius"
    ],
    "secondaryMuscles": [
      "Soleus",
      "Tibialis Anterior"
    ],
    "tags": [
      "STRENGTH",
      "BALANCE"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-standing-calf-raises.mp4"
  },
  {
    "slug": "dumbbell-standing-driver",
    "name": "Dumbbell Standing Driver",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Front Delts"
    ],
    "secondaryMuscles": [
      "Side Delts",
      "Rear Delts"
    ],
    "tags": [
      "STRENGTH",
      "FUNCTIONAL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-standing-driver.mp4"
  },
  {
    "slug": "dumbbell-standing-reverse-wrist-curls",
    "name": "Dumbbell Standing Reverse Wrist Curls",
    "categories": [
      "Forearms"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Forearm Extensors"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-standing-reverse-wrist-curls.mp4"
  },
  {
    "slug": "dumbbell-standing-side-bend",
    "name": "Dumbbell Standing Side Bend",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Obliques"
    ],
    "secondaryMuscles": [],
    "tags": [
      "CORE"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-standing-side-bend.mp4"
  },
  {
    "slug": "dumbbell-standing-wrist-curl",
    "name": "Dumbbell Standing Wrist Curl",
    "categories": [
      "Forearms"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Forearm Flexors"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-standing-wrist-curl.mp4"
  },
  {
    "slug": "dumbbell-step-up",
    "name": "Dumbbell Step-Up",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Dumbbell",
      "Other"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Gluteus Medius"
    ],
    "tags": [
      "STRENGTH",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-step-up.mp4"
  },
  {
    "slug": "dumbbell-straight-leg-deadlift",
    "name": "Dumbbell Straight Leg Deadlift",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Spinal Erectors",
      "Hamstrings",
      "Forearm Flexors",
      "Gluteus Medius",
      "Forearm Extensors"
    ],
    "tags": [
      "STRENGTH",
      "MOBILITY",
      "BALANCE"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-straight-leg-deadlift.mp4"
  },
  {
    "slug": "dumbbell-sumo-squat",
    "name": "Dumbbell Sumo Squat",
    "categories": [
      "Gluteal"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Quadriceps",
      "Adductors",
      "Hamstrings",
      "Gluteus Medius",
      "Spinal Erectors"
    ],
    "tags": [
      "STRENGTH",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-sumo-squat.mp4"
  },
  {
    "slug": "dumbbell-supinated-preacher-curl",
    "name": "Dumbbell Supinated Preacher Curl",
    "categories": [
      "Biceps"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [
      "Brachioradialis",
      "Forearm Flexors"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-supinated-preacher-curl.mp4"
  },
  {
    "slug": "dumbbell-upright-row",
    "name": "Dumbbell Upright Row",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Side Delts"
    ],
    "secondaryMuscles": [
      "Front Delts",
      "Rear Delts",
      "Upper Traps",
      "Middle Traps"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-upright-row.mp4"
  },
  {
    "slug": "dumbbell-walking-lunges",
    "name": "Dumbbell Walking Lunges",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Sartorius",
      "Adductors",
      "Hamstrings",
      "Gluteus Medius"
    ],
    "tags": [
      "STRENGTH",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "ALTERNATING",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/dumbbell-walking-lunges.mp4"
  },
  {
    "slug": "elbow-out-chest-stretch",
    "name": "Elbow Out Chest Stretch",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Lower Chest",
      "Mid Chest",
      "Serratus Anterior",
      "Upper Chest"
    ],
    "secondaryMuscles": [],
    "tags": [
      "MOBILITY",
      "STRETCH",
      "WARMUP"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/elbow-out-chest-stretch.mp4"
  },
  {
    "slug": "elliptical-trainer",
    "name": "Elliptical Trainer",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Hamstrings",
      "Biceps",
      "Front Delts",
      "Gastrocnemius"
    ],
    "tags": [
      "CARDIO",
      "WARMUP"
    ],
    "mechanics": "COMPOUND",
    "laterality": "ALTERNATING",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/elliptical-trainer.mp4"
  },
  {
    "slug": "ez-bar-biceps-curl",
    "name": "EZ-Bar Biceps Curl",
    "categories": [
      "Biceps"
    ],
    "equipment": [
      "EZ Bar"
    ],
    "primaryMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [
      "Brachioradialis",
      "Forearm Flexors",
      "Forearm Extensors"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/ez-bar-biceps-curl.mp4"
  },
  {
    "slug": "ez-bar-preacher-curl",
    "name": "EZ-Bar Preacher Curl",
    "categories": [
      "Biceps"
    ],
    "equipment": [
      "EZ Bar"
    ],
    "primaryMuscles": [
      "Biceps",
      "Brachioradialis"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/ez-bar-preacher-curl.mp4"
  },
  {
    "slug": "ez-bar-reverse-grip-biceps-curl",
    "name": "EZ-Bar Reverse Grip Biceps Curl",
    "categories": [
      "Forearms"
    ],
    "equipment": [
      "EZ Bar"
    ],
    "primaryMuscles": [
      "Brachioradialis"
    ],
    "secondaryMuscles": [
      "Biceps",
      "Forearm Extensors",
      "Forearm Flexors"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/ez-bar-reverse-grip-biceps-curl.mp4"
  },
  {
    "slug": "ez-bar-reverse-spider-curl",
    "name": "EZ-Bar Reverse Spider Curl",
    "categories": [
      "Forearms"
    ],
    "equipment": [
      "EZ Bar",
      "Bench"
    ],
    "primaryMuscles": [
      "Brachioradialis"
    ],
    "secondaryMuscles": [
      "Biceps",
      "Forearm Flexors",
      "Forearm Extensors"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/ez-bar-reverse-spider-curl.mp4"
  },
  {
    "slug": "ez-bar-seated-reverse-wrist-curl",
    "name": "EZ-Bar Seated Reverse Wrist Curl",
    "categories": [
      "Forearms"
    ],
    "equipment": [
      "EZ Bar",
      "Bench"
    ],
    "primaryMuscles": [
      "Forearm Extensors"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/ez-bar-seated-reverse-wrist-curl.mp4"
  },
  {
    "slug": "ez-bar-seated-triceps-extension",
    "name": "EZ-Bar Seated Triceps Extension",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "EZ Bar",
      "Bench"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/ez-bar-seated-triceps-extension.mp4"
  },
  {
    "slug": "ez-bar-seated-wrist-curl",
    "name": "EZ-Bar Seated Wrist Curl",
    "categories": [
      "Forearms"
    ],
    "equipment": [
      "EZ Bar",
      "Bench"
    ],
    "primaryMuscles": [
      "Forearm Flexors"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/ez-bar-seated-wrist-curl.mp4"
  },
  {
    "slug": "ez-bar-spider-curl",
    "name": "EZ-Bar Spider Curl",
    "categories": [
      "Biceps"
    ],
    "equipment": [
      "EZ Bar",
      "Bench"
    ],
    "primaryMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [
      "Brachioradialis"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/ez-bar-spider-curl.mp4"
  },
  {
    "slug": "ez-bar-tricep-pushdown",
    "name": "EZ-Bar Tricep Pushdown",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "EZ Bar",
      "Cable"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/ez-bar-tricep-pushdown.mp4"
  },
  {
    "slug": "farmer-walk",
    "name": "Farmer Walk",
    "categories": [
      "Forearms"
    ],
    "equipment": [
      "Dumbbell",
      "Kettlebell",
      "Trap Bar"
    ],
    "primaryMuscles": [
      "Forearm Extensors",
      "Forearm Flexors"
    ],
    "secondaryMuscles": [
      "Brachioradialis",
      "Gastrocnemius",
      "Quadriceps",
      "Soleus",
      "Lower Abs"
    ],
    "tags": [
      "STRENGTH",
      "FUNCTIONAL",
      "CORE",
      "BALANCE"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/farmer-walk.mp4"
  },
  {
    "slug": "figure-4-stretch-on-chair",
    "name": "Figure 4 Stretch on Chair",
    "categories": [
      "Gluteal"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Gluteus Maximus",
      "Gluteus Medius"
    ],
    "secondaryMuscles": [],
    "tags": [
      "MOBILITY",
      "STRETCH",
      "REHAB",
      "BALANCE"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/figure-4-stretch-on-chair.mp4"
  },
  {
    "slug": "finger-push-up",
    "name": "Finger Push-Up",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Triceps",
      "Upper Chest",
      "Front Delts",
      "Serratus Anterior"
    ],
    "tags": [
      "STRENGTH",
      "BALANCE",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/finger-push-up.mp4"
  },
  {
    "slug": "flag",
    "name": "Flag",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Pull-Up Bar"
    ],
    "primaryMuscles": [
      "Obliques"
    ],
    "secondaryMuscles": [
      "Lats",
      "Infraspinatus",
      "Teres Major",
      "Teres Minor",
      "Gluteus Medius"
    ],
    "tags": [
      "STRENGTH",
      "CORE",
      "ISOMETRIC",
      "BALANCE"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/flag.mp4"
  },
  {
    "slug": "floor-dumbbell-press",
    "name": "Floor Dumbbell Press",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Upper Chest",
      "Triceps",
      "Front Delts",
      "Serratus Anterior"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/floor-dumbbell-press.mp4"
  },
  {
    "slug": "forward-band-monster-walk",
    "name": "Forward Band Monster Walk",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Resistance Band"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Medius",
      "Gluteus Maximus",
      "Sartorius"
    ],
    "tags": [
      "MOBILITY",
      "REHAB",
      "BALANCE",
      "FUNCTIONAL",
      "WARMUP"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BAND",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/forward-band-monster-walk.mp4"
  },
  {
    "slug": "frog-crunch",
    "name": "Frog Crunch",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Lower Abs"
    ],
    "secondaryMuscles": [
      "Upper Abs",
      "Obliques"
    ],
    "tags": [
      "CORE"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/frog-crunch.mp4"
  },
  {
    "slug": "frog-planche",
    "name": "Frog Planche",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Other"
    ],
    "primaryMuscles": [
      "Upper Chest"
    ],
    "secondaryMuscles": [
      "Front Delts",
      "Triceps",
      "Lower Abs",
      "Mid Chest",
      "Obliques"
    ],
    "tags": [
      "STRENGTH",
      "CORE",
      "BALANCE",
      "ISOMETRIC"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/frog-planche.mp4"
  },
  {
    "slug": "frog-pump",
    "name": "Frog Pump",
    "categories": [
      "Gluteal"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Gluteus Medius"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Hamstrings",
      "Quadriceps"
    ],
    "tags": [
      "STRENGTH",
      "FUNCTIONAL",
      "WARMUP"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/frog-pump.mp4"
  },
  {
    "slug": "front-lever",
    "name": "Front Lever",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Pull-Up Bar",
      "Rings"
    ],
    "primaryMuscles": [
      "Infraspinatus",
      "Teres Major",
      "Teres Minor"
    ],
    "secondaryMuscles": [
      "Lats",
      "Rear Delts",
      "Lower Traps",
      "Lower Abs",
      "Obliques"
    ],
    "tags": [
      "STRENGTH",
      "CORE",
      "ISOMETRIC"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/front-lever.mp4"
  },
  {
    "slug": "front-lever-pull-up",
    "name": "Front Lever Pull-Up",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Pull-Up Bar"
    ],
    "primaryMuscles": [
      "Infraspinatus"
    ],
    "secondaryMuscles": [
      "Teres Minor",
      "Lats",
      "Lower Traps",
      "Teres Major",
      "Forearm Flexors"
    ],
    "tags": [
      "STRENGTH",
      "CORE",
      "PULL",
      "ISOMETRIC"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/front-lever-pull-up.mp4"
  },
  {
    "slug": "front-squat",
    "name": "Front Squat",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Barbell",
      "Other"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Sartorius",
      "Spinal Erectors",
      "Adductors",
      "Gluteus Medius"
    ],
    "tags": [
      "STRENGTH",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/front-squat.mp4"
  },
  {
    "slug": "full-planche",
    "name": "Full Planche",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Other"
    ],
    "primaryMuscles": [
      "Front Delts"
    ],
    "secondaryMuscles": [
      "Side Delts",
      "Obliques",
      "Biceps",
      "Lower Abs",
      "Triceps"
    ],
    "tags": [
      "STRENGTH",
      "CORE",
      "BALANCE",
      "ISOMETRIC",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/full-planche.mp4"
  },
  {
    "slug": "full-planche-push-up",
    "name": "Full Planche Push-Up",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Other"
    ],
    "primaryMuscles": [
      "Front Delts",
      "Mid Chest",
      "Triceps"
    ],
    "secondaryMuscles": [
      "Side Delts",
      "Upper Chest",
      "Serratus Anterior",
      "Forearm Flexors",
      "Infraspinatus"
    ],
    "tags": [
      "STRENGTH",
      "CORE",
      "BALANCE",
      "ISOMETRIC",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/full-planche-push-up.mp4"
  },
  {
    "slug": "glute-bridge",
    "name": "Glute Bridge",
    "categories": [
      "Gluteal"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Gluteus Medius",
      "Hamstrings",
      "Quadriceps"
    ],
    "tags": [
      "STRENGTH",
      "CORE",
      "FUNCTIONAL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/glute-bridge.mp4"
  },
  {
    "slug": "glute-bridge-on-bench",
    "name": "Glute Bridge on Bench",
    "categories": [
      "Gluteal"
    ],
    "equipment": [
      "Bench"
    ],
    "primaryMuscles": [
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Hamstrings",
      "Gluteus Medius",
      "Quadriceps"
    ],
    "tags": [
      "STRENGTH",
      "CORE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/glute-bridge-on-bench.mp4"
  },
  {
    "slug": "glute-bridge-single-leg",
    "name": "Glute Bridge Single Leg",
    "categories": [
      "Gluteal"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Gluteus Maximus",
      "Gluteus Medius"
    ],
    "secondaryMuscles": [
      "Quadriceps",
      "Hamstrings"
    ],
    "tags": [
      "STRENGTH",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/glute-bridge-single-leg.mp4"
  },
  {
    "slug": "glute-cable-kickback",
    "name": "Glute Cable Kickback",
    "categories": [
      "Gluteal"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Hamstrings"
    ],
    "tags": [
      "STRENGTH",
      "FUNCTIONAL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/glute-cable-kickback.mp4"
  },
  {
    "slug": "glute-ham-raise-1-2",
    "name": "Glute-Ham Raise 1/2",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Hamstrings"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Gastrocnemius",
      "Spinal Erectors",
      "Lower Abs",
      "Obliques"
    ],
    "tags": [
      "STRENGTH",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/glute-ham-raise-1-2.mp4"
  },
  {
    "slug": "glute-machine-kickback",
    "name": "Glute Machine Kickback",
    "categories": [
      "Gluteal"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Gluteus Medius"
    ],
    "tags": [
      "STRENGTH",
      "FUNCTIONAL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/glute-machine-kickback.mp4"
  },
  {
    "slug": "glutes-roll",
    "name": "Glutes Roll",
    "categories": [
      "Gluteal"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [],
    "tags": [
      "MOBILITY",
      "STRETCH",
      "REHAB"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/glutes-roll.mp4"
  },
  {
    "slug": "goblet-squat",
    "name": "Goblet Squat",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Dumbbell",
      "Kettlebell"
    ],
    "primaryMuscles": [
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Quadriceps",
      "Sartorius",
      "Gluteus Medius",
      "Hamstrings",
      "Adductors"
    ],
    "tags": [
      "STRENGTH",
      "MOBILITY",
      "FUNCTIONAL",
      "REHAB"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/goblet-squat.mp4"
  },
  {
    "slug": "gorilla-row",
    "name": "Gorilla Row",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Lats"
    ],
    "secondaryMuscles": [
      "Infraspinatus",
      "Lower Traps",
      "Teres Major",
      "Teres Minor",
      "Middle Traps"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/gorilla-row.mp4"
  },
  {
    "slug": "half-kneeling-quad-stretch",
    "name": "Half Kneeling Quad Stretch",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "MOBILITY",
      "STRETCH",
      "WARMUP"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/half-kneeling-quad-stretch.mp4"
  },
  {
    "slug": "half-kneeling-shoulder-dumbbell-press",
    "name": "Half Kneeling Shoulder Dumbbell Press",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Side Delts"
    ],
    "secondaryMuscles": [
      "Front Delts",
      "Rear Delts"
    ],
    "tags": [
      "STRENGTH",
      "BALANCE",
      "PUSH",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/half-kneeling-shoulder-dumbbell-press.mp4"
  },
  {
    "slug": "half-squat",
    "name": "Half Squat",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Sartorius",
      "Adductors",
      "Hamstrings",
      "Spinal Erectors"
    ],
    "tags": [
      "STRENGTH",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/half-squat.mp4"
  },
  {
    "slug": "hammer-grip-dumbbell-bench-press",
    "name": "Hammer Grip Dumbbell Bench Press",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Upper Chest",
      "Triceps",
      "Serratus Anterior"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/hammer-grip-dumbbell-bench-press.mp4"
  },
  {
    "slug": "hand-gripper",
    "name": "Hand Gripper",
    "categories": [
      "Forearms"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Forearm Flexors"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/hand-gripper.mp4"
  },
  {
    "slug": "handstand-hold",
    "name": "Handstand Hold",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Front Delts",
      "Rear Delts",
      "Side Delts"
    ],
    "secondaryMuscles": [
      "Lower Traps",
      "Middle Traps",
      "Triceps",
      "Upper Traps",
      "Biceps"
    ],
    "tags": [
      "STRENGTH",
      "BALANCE",
      "ISOMETRIC",
      "FUNCTIONAL",
      "CORE"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/handstand-hold.mp4"
  },
  {
    "slug": "handstand-push-up",
    "name": "Handstand Push-Up",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Front Delts",
      "Side Delts"
    ],
    "secondaryMuscles": [
      "Triceps",
      "Obliques",
      "Rear Delts",
      "Teres Major",
      "Upper Chest"
    ],
    "tags": [
      "STRENGTH",
      "BALANCE",
      "FUNCTIONAL",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/handstand-push-up.mp4"
  },
  {
    "slug": "hang-power-clean",
    "name": "Hang Power Clean",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Barbell"
    ],
    "primaryMuscles": [
      "Spinal Erectors"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Hamstrings",
      "Brachioradialis",
      "Forearm Flexors",
      "Biceps"
    ],
    "tags": [
      "STRENGTH",
      "EXPLOSIVE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/hang-power-clean.mp4"
  },
  {
    "slug": "hanging-half-windmill",
    "name": "Hanging Half Windmill",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Pull-Up Bar"
    ],
    "primaryMuscles": [
      "Obliques"
    ],
    "secondaryMuscles": [
      "Lower Abs",
      "Upper Abs",
      "Forearm Extensors",
      "Forearm Flexors",
      "Brachioradialis"
    ],
    "tags": [
      "MOBILITY",
      "CORE",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "ALTERNATING",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/hanging-half-windmill.mp4"
  },
  {
    "slug": "hanging-knee-circles",
    "name": "Hanging Knee Circles",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Pull-Up Bar"
    ],
    "primaryMuscles": [
      "Obliques"
    ],
    "secondaryMuscles": [
      "Lower Abs",
      "Upper Abs",
      "Forearm Flexors",
      "Forearm Extensors"
    ],
    "tags": [
      "MOBILITY",
      "CORE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/hanging-knee-circles.mp4"
  },
  {
    "slug": "hanging-knee-raises",
    "name": "Hanging Knee Raises",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Pull-Up Bar"
    ],
    "primaryMuscles": [
      "Upper Abs"
    ],
    "secondaryMuscles": [
      "Lower Abs"
    ],
    "tags": [
      "CORE",
      "STRENGTH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/hanging-knee-raises.mp4"
  },
  {
    "slug": "hanging-knee-to-chest",
    "name": "Hanging Knee To Chest",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Pull-Up Bar"
    ],
    "primaryMuscles": [
      "Lower Abs"
    ],
    "secondaryMuscles": [
      "Upper Abs",
      "Adductors",
      "Forearm Flexors",
      "Obliques",
      "Forearm Extensors"
    ],
    "tags": [
      "CORE",
      "MOBILITY",
      "FUNCTIONAL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/hanging-knee-to-chest.mp4"
  },
  {
    "slug": "hanging-knees-to-elbows",
    "name": "Hanging Knees to Elbows",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Pull-Up Bar"
    ],
    "primaryMuscles": [
      "Upper Abs"
    ],
    "secondaryMuscles": [
      "Lower Abs",
      "Obliques",
      "Forearm Extensors",
      "Forearm Flexors",
      "Brachioradialis"
    ],
    "tags": [
      "STRENGTH",
      "CORE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/hanging-knees-to-elbows.mp4"
  },
  {
    "slug": "hanging-knees-to-elbows-waist",
    "name": "Hanging Knees to Elbows Waist",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Pull-Up Bar"
    ],
    "primaryMuscles": [
      "Lower Abs",
      "Upper Abs"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "CORE"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/hanging-knees-to-elbows-waist.mp4"
  },
  {
    "slug": "hanging-leg-raise-to-bar",
    "name": "Hanging Leg Raise To Bar",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Pull-Up Bar"
    ],
    "primaryMuscles": [
      "Upper Abs"
    ],
    "secondaryMuscles": [
      "Lower Abs",
      "Obliques"
    ],
    "tags": [
      "STRENGTH",
      "CORE"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/hanging-leg-raise-to-bar.mp4"
  },
  {
    "slug": "hanging-oblique-knee-raise",
    "name": "Hanging Oblique Knee Raise",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Pull-Up Bar"
    ],
    "primaryMuscles": [
      "Lower Abs",
      "Obliques"
    ],
    "secondaryMuscles": [
      "Upper Abs"
    ],
    "tags": [
      "CORE",
      "STRENGTH",
      "FUNCTIONAL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/hanging-oblique-knee-raise.mp4"
  },
  {
    "slug": "hanging-scapular-retractions",
    "name": "Hanging Scapular Retractions",
    "categories": [
      "Forearms"
    ],
    "equipment": [
      "Pull-Up Bar"
    ],
    "primaryMuscles": [
      "Forearm Flexors"
    ],
    "secondaryMuscles": [
      "Forearm Extensors",
      "Teres Minor",
      "Infraspinatus",
      "Lower Traps",
      "Lats"
    ],
    "tags": [
      "MOBILITY",
      "REHAB",
      "WARMUP",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/hanging-scapular-retractions.mp4"
  },
  {
    "slug": "hanging-scissors-kicks",
    "name": "Hanging Scissors Kicks",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Pull-Up Bar"
    ],
    "primaryMuscles": [
      "Upper Abs"
    ],
    "secondaryMuscles": [
      "Obliques",
      "Lower Abs",
      "Forearm Extensors",
      "Forearm Flexors",
      "Sartorius"
    ],
    "tags": [
      "CORE",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "ALTERNATING",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/hanging-scissors-kicks.mp4"
  },
  {
    "slug": "hanging-straight-leg-raise",
    "name": "Hanging Straight Leg Raise",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Pull-Up Bar"
    ],
    "primaryMuscles": [
      "Upper Abs"
    ],
    "secondaryMuscles": [
      "Lower Abs",
      "Brachioradialis",
      "Forearm Flexors",
      "Obliques"
    ],
    "tags": [
      "CORE",
      "STRENGTH",
      "FUNCTIONAL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/hanging-straight-leg-raise.mp4"
  },
  {
    "slug": "happy-baby-pose",
    "name": "Happy Baby Pose",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Gluteus Maximus",
      "Hamstrings"
    ],
    "secondaryMuscles": [],
    "tags": [
      "MOBILITY",
      "STRETCH",
      "REHAB",
      "WARMUP"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/happy-baby-pose.mp4"
  },
  {
    "slug": "hercules-curl",
    "name": "Hercules Curl",
    "categories": [
      "Biceps"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/hercules-curl.mp4"
  },
  {
    "slug": "high-bar-squat",
    "name": "High-Bar Squat",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Barbell",
      "Other"
    ],
    "primaryMuscles": [
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Quadriceps",
      "Sartorius",
      "Adductors",
      "Spinal Erectors",
      "Gluteus Medius"
    ],
    "tags": [
      "STRENGTH",
      "FUNCTIONAL",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/high-bar-squat.mp4"
  },
  {
    "slug": "high-low-cable-chest-fly",
    "name": "High Low Cable Chest Fly",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Lower Chest"
    ],
    "secondaryMuscles": [
      "Mid Chest",
      "Serratus Anterior",
      "Upper Chest"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/high-low-cable-chest-fly.mp4"
  },
  {
    "slug": "high-pulley-overhead-triceps-extension",
    "name": "High Pulley Overhead Triceps Extension",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/high-pulley-overhead-triceps-extension.mp4"
  },
  {
    "slug": "high-to-low-band-woodchopper",
    "name": "High To Low Band Woodchopper",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Resistance Band"
    ],
    "primaryMuscles": [
      "Obliques"
    ],
    "secondaryMuscles": [
      "Adductors",
      "Upper Abs"
    ],
    "tags": [
      "CORE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "BAND",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/high-to-low-band-woodchopper.mp4"
  },
  {
    "slug": "hip-circles",
    "name": "Hip Circles",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Adductors",
      "Gluteus Medius",
      "Sartorius"
    ],
    "secondaryMuscles": [],
    "tags": [
      "MOBILITY",
      "WARMUP"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/hip-circles.mp4"
  },
  {
    "slug": "hip-hinge",
    "name": "Hip Hinge",
    "categories": [
      "Gluteal"
    ],
    "equipment": [
      "Barbell",
      "Dumbbell",
      "Kettlebell"
    ],
    "primaryMuscles": [
      "Gluteus Maximus",
      "Gluteus Medius"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/hip-hinge.mp4"
  },
  {
    "slug": "hip-thrust",
    "name": "Hip Thrust",
    "categories": [
      "Gluteal"
    ],
    "equipment": [
      "Barbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Spinal Erectors",
      "Hamstrings",
      "Gluteus Medius",
      "Lower Abs",
      "Quadriceps"
    ],
    "tags": [
      "STRENGTH",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/hip-thrust.mp4"
  },
  {
    "slug": "hip-thrust-smith-machine",
    "name": "Hip Thrust Smith Machine",
    "categories": [
      "Gluteal"
    ],
    "equipment": [
      "Smith Machine",
      "Bench"
    ],
    "primaryMuscles": [
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Gluteus Medius",
      "Quadriceps",
      "Lower Abs",
      "Upper Abs",
      "Hamstrings"
    ],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/hip-thrust-smith-machine.mp4"
  },
  {
    "slug": "hollow-body-hold",
    "name": "Hollow Body Hold",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Upper Abs"
    ],
    "secondaryMuscles": [
      "Lower Abs",
      "Obliques",
      "Quadriceps"
    ],
    "tags": [
      "CORE",
      "ISOMETRIC"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/hollow-body-hold.mp4"
  },
  {
    "slug": "hopping-high-knee-tap",
    "name": "Hopping High Knee Tap",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Hip Flexors"
    ],
    "secondaryMuscles": [
      "Soleus",
      "Gastrocnemius",
      "Quadriceps"
    ],
    "tags": [
      "PLYOMETRIC",
      "CARDIO",
      "BALANCE",
      "EXPLOSIVE",
      "WARMUP"
    ],
    "mechanics": "COMPOUND",
    "laterality": "ALTERNATING",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/hopping-high-knee-tap.mp4"
  },
  {
    "slug": "incline-barbell-bench-press",
    "name": "Incline Barbell Bench Press",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Barbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Upper Chest"
    ],
    "secondaryMuscles": [
      "Mid Chest",
      "Triceps",
      "Front Delts",
      "Lower Chest",
      "Serratus Anterior"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/incline-barbell-bench-press.mp4"
  },
  {
    "slug": "incline-barbell-triceps-extension",
    "name": "Incline Barbell Triceps Extension",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Barbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/incline-barbell-triceps-extension.mp4"
  },
  {
    "slug": "incline-bench-cable-fly",
    "name": "Incline Bench Cable Fly",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Cable",
      "Bench"
    ],
    "primaryMuscles": [
      "Upper Chest"
    ],
    "secondaryMuscles": [
      "Front Delts"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/incline-bench-cable-fly.mp4"
  },
  {
    "slug": "incline-bench-dumbbell-wide-row",
    "name": "Incline Bench Dumbbell Wide Row",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Lats",
      "Teres Major"
    ],
    "secondaryMuscles": [
      "Infraspinatus",
      "Lower Traps",
      "Rear Delts",
      "Teres Minor",
      "Middle Traps"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/incline-bench-dumbbell-wide-row.mp4"
  },
  {
    "slug": "incline-bench-leg-raises",
    "name": "Incline Bench Leg Raises",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Bench"
    ],
    "primaryMuscles": [
      "Lower Abs",
      "Upper Abs"
    ],
    "secondaryMuscles": [
      "Obliques"
    ],
    "tags": [
      "CORE"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/incline-bench-leg-raises.mp4"
  },
  {
    "slug": "incline-cable-curl",
    "name": "Incline Cable Curl",
    "categories": [
      "Biceps"
    ],
    "equipment": [
      "Cable",
      "Bench"
    ],
    "primaryMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/incline-cable-curl.mp4"
  },
  {
    "slug": "incline-chest-supported-barbell-row",
    "name": "Incline Chest Supported Barbell Row",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Barbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Infraspinatus"
    ],
    "secondaryMuscles": [
      "Middle Traps",
      "Teres Minor",
      "Lats",
      "Rear Delts",
      "Lower Traps"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/incline-chest-supported-barbell-row.mp4"
  },
  {
    "slug": "incline-close-grip-push-up",
    "name": "Incline Close Grip Push-Up",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Other"
    ],
    "primaryMuscles": [
      "Lower Chest"
    ],
    "secondaryMuscles": [
      "Triceps",
      "Mid Chest",
      "Front Delts",
      "Upper Chest",
      "Serratus Anterior"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/incline-close-grip-push-up.mp4"
  },
  {
    "slug": "incline-dumbbell-bench-press",
    "name": "Incline Dumbbell Bench Press",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Upper Chest"
    ],
    "secondaryMuscles": [
      "Mid Chest",
      "Triceps",
      "Front Delts",
      "Lower Chest"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/incline-dumbbell-bench-press.mp4"
  },
  {
    "slug": "incline-dumbbell-chest-fly",
    "name": "Incline Dumbbell Chest Fly",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Upper Chest"
    ],
    "secondaryMuscles": [
      "Mid Chest",
      "Front Delts",
      "Lower Chest"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/incline-dumbbell-chest-fly.mp4"
  },
  {
    "slug": "incline-dumbbell-triceps-extension",
    "name": "Incline Dumbbell Triceps Extension",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/incline-dumbbell-triceps-extension.mp4"
  },
  {
    "slug": "incline-hammer-chest-press",
    "name": "Incline Hammer Chest Press",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Upper Chest"
    ],
    "secondaryMuscles": [
      "Mid Chest",
      "Front Delts",
      "Triceps",
      "Lower Chest",
      "Side Delts"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/incline-hammer-chest-press.mp4"
  },
  {
    "slug": "incline-neutral-grip-dumbbell-press",
    "name": "Incline Neutral Grip Dumbbell Press",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Upper Chest"
    ],
    "secondaryMuscles": [
      "Mid Chest",
      "Triceps",
      "Lower Chest",
      "Serratus Anterior"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/incline-neutral-grip-dumbbell-press.mp4"
  },
  {
    "slug": "incline-powell-raise",
    "name": "Incline Powell Raise",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Rear Delts"
    ],
    "secondaryMuscles": [
      "Middle Traps",
      "Side Delts",
      "Lower Traps",
      "Upper Traps",
      "Infraspinatus"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/incline-powell-raise.mp4"
  },
  {
    "slug": "incline-push-up",
    "name": "Incline Push-Up",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Bench",
      "Other"
    ],
    "primaryMuscles": [
      "Lower Chest"
    ],
    "secondaryMuscles": [
      "Mid Chest",
      "Triceps",
      "Front Delts",
      "Upper Chest",
      "Serratus Anterior"
    ],
    "tags": [
      "STRENGTH",
      "PUSH",
      "FUNCTIONAL",
      "WARMUP"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/incline-push-up.mp4"
  },
  {
    "slug": "incline-twisting-sit-up",
    "name": "Incline Twisting Sit Up",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Bench"
    ],
    "primaryMuscles": [
      "Obliques"
    ],
    "secondaryMuscles": [
      "Upper Abs",
      "Lower Abs"
    ],
    "tags": [
      "CORE",
      "STRENGTH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "ALTERNATING",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/incline-twisting-sit-up.mp4"
  },
  {
    "slug": "inverted-row-australian",
    "name": "Inverted Row (Australian)",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Pull-Up Bar"
    ],
    "primaryMuscles": [
      "Infraspinatus"
    ],
    "secondaryMuscles": [
      "Teres Minor",
      "Teres Major",
      "Lower Traps",
      "Lats",
      "Middle Traps"
    ],
    "tags": [
      "STRENGTH",
      "PULL",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/inverted-row-australian.mp4"
  },
  {
    "slug": "inverted-shrug",
    "name": "Inverted Shrug",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Pull-Up Bar"
    ],
    "primaryMuscles": [
      "Upper Traps"
    ],
    "secondaryMuscles": [
      "Middle Traps",
      "Forearm Flexors",
      "Serratus Anterior",
      "Upper Chest",
      "Forearm Extensors"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/inverted-shrug.mp4"
  },
  {
    "slug": "jack-push-up",
    "name": "Jack Push-Up",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Upper Chest",
      "Triceps",
      "Front Delts",
      "Serratus Anterior"
    ],
    "tags": [
      "STRENGTH",
      "PLYOMETRIC",
      "CORE",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/jack-push-up.mp4"
  },
  {
    "slug": "janda-sit-up",
    "name": "Janda Sit Up",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Bench"
    ],
    "primaryMuscles": [
      "Upper Abs"
    ],
    "secondaryMuscles": [
      "Lower Abs",
      "Obliques"
    ],
    "tags": [
      "CORE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/janda-sit-up.mp4"
  },
  {
    "slug": "jefferson-curl",
    "name": "Jefferson Curl",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Barbell"
    ],
    "primaryMuscles": [
      "Hamstrings"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Spinal Erectors",
      "Gluteus Medius"
    ],
    "tags": [
      "STRENGTH",
      "MOBILITY",
      "STRETCH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "WEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/jefferson-curl.mp4"
  },
  {
    "slug": "jm-press",
    "name": "JM Press",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Barbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [
      "Mid Chest",
      "Upper Chest",
      "Lower Chest",
      "Front Delts",
      "Serratus Anterior"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/jm-press.mp4"
  },
  {
    "slug": "jump-rope",
    "name": "Jump Rope",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Soleus"
    ],
    "secondaryMuscles": [
      "Gastrocnemius",
      "Quadriceps",
      "Tibialis Anterior",
      "Hamstrings",
      "Obliques"
    ],
    "tags": [
      "PLYOMETRIC",
      "CARDIO",
      "BALANCE",
      "WARMUP"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/jump-rope.mp4"
  },
  {
    "slug": "jump-squat",
    "name": "Jump Squat",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Gluteus Medius",
      "Sartorius",
      "Front Delts",
      "Hamstrings"
    ],
    "tags": [
      "PLYOMETRIC",
      "EXPLOSIVE",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/jump-squat.mp4"
  },
  {
    "slug": "jumping-jacks",
    "name": "Jumping Jacks",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Gastrocnemius",
      "Side Delts",
      "Soleus"
    ],
    "secondaryMuscles": [
      "Quadriceps",
      "Front Delts",
      "Adductors",
      "Hamstrings",
      "Lower Abs"
    ],
    "tags": [
      "PLYOMETRIC",
      "CARDIO",
      "WARMUP"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/jumping-jacks.mp4"
  },
  {
    "slug": "kas-glute-bridge",
    "name": "KAS Glute Bridge",
    "categories": [
      "Gluteal"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Gluteus Medius",
      "Quadriceps",
      "Hamstrings"
    ],
    "tags": [
      "STRENGTH",
      "FUNCTIONAL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "not-provided"
  },
  {
    "slug": "katana-triceps-extension",
    "name": "Katana Triceps Extension",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/katana-triceps-extension.mp4"
  },
  {
    "slug": "kettelbell-clean",
    "name": "Kettelbell Clean",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Kettlebell"
    ],
    "primaryMuscles": [
      "Spinal Erectors"
    ],
    "secondaryMuscles": [
      "Hamstrings",
      "Gluteus Maximus",
      "Sartorius",
      "Adductors",
      "Quadriceps"
    ],
    "tags": [
      "STRENGTH",
      "FUNCTIONAL",
      "BALANCE"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "WEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/kettelbell-clean.mp4"
  },
  {
    "slug": "kettlebel-renegade-row",
    "name": "Kettlebel Renegade Row",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Kettlebell"
    ],
    "primaryMuscles": [
      "Lats",
      "Teres Major",
      "Teres Minor"
    ],
    "secondaryMuscles": [
      "Infraspinatus",
      "Lower Traps",
      "Lower Abs",
      "Obliques",
      "Upper Abs"
    ],
    "tags": [
      "STRENGTH",
      "CORE",
      "BALANCE",
      "FUNCTIONAL",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/kettlebel-renegade-row.mp4"
  },
  {
    "slug": "kettlebell-around-the-head-rotation",
    "name": "Kettlebell Around the Head Rotation",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Kettlebell"
    ],
    "primaryMuscles": [
      "Front Delts",
      "Side Delts"
    ],
    "secondaryMuscles": [
      "Upper Traps",
      "Rear Delts",
      "Middle Traps",
      "Serratus Anterior"
    ],
    "tags": [
      "MOBILITY",
      "BALANCE",
      "FUNCTIONAL",
      "WARMUP"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "WEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/kettlebell-around-the-head-rotation.mp4"
  },
  {
    "slug": "kettlebell-biceps-curl",
    "name": "Kettlebell Biceps Curl",
    "categories": [
      "Biceps"
    ],
    "equipment": [
      "Kettlebell"
    ],
    "primaryMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [
      "Brachioradialis",
      "Forearm Flexors"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/kettlebell-biceps-curl.mp4"
  },
  {
    "slug": "kettlebell-clean-and-jerk",
    "name": "Kettlebell Clean and Jerk",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Kettlebell"
    ],
    "primaryMuscles": [
      "Front Delts"
    ],
    "secondaryMuscles": [
      "Side Delts",
      "Quadriceps",
      "Gluteus Maximus",
      "Spinal Erectors",
      "Hamstrings"
    ],
    "tags": [
      "STRENGTH",
      "EXPLOSIVE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "WEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/kettlebell-clean-and-jerk.mp4"
  },
  {
    "slug": "kettlebell-deadlift",
    "name": "Kettlebell Deadlift",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Kettlebell"
    ],
    "primaryMuscles": [
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Spinal Erectors",
      "Hamstrings",
      "Forearm Flexors",
      "Gluteus Medius",
      "Forearm Extensors"
    ],
    "tags": [
      "STRENGTH",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "WEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/kettlebell-deadlift.mp4"
  },
  {
    "slug": "kettlebell-goblet-squat",
    "name": "Kettlebell Goblet Squat",
    "categories": [
      "Gluteal"
    ],
    "equipment": [
      "Kettlebell"
    ],
    "primaryMuscles": [
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Gluteus Medius",
      "Hamstrings",
      "Quadriceps",
      "Sartorius"
    ],
    "tags": [
      "STRENGTH",
      "MOBILITY",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "WEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/kettlebell-goblet-squat.mp4"
  },
  {
    "slug": "kettlebell-one-arm-floor-press",
    "name": "Kettlebell One Arm Floor Press",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Kettlebell"
    ],
    "primaryMuscles": [
      "Lower Chest",
      "Mid Chest",
      "Serratus Anterior",
      "Upper Chest"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PUSH",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "WEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/kettlebell-one-arm-floor-press.mp4"
  },
  {
    "slug": "kettlebell-rear-lunge",
    "name": "Kettlebell Rear Lunge",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Kettlebell"
    ],
    "primaryMuscles": [
      "Gluteus Maximus",
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Medius"
    ],
    "tags": [
      "STRENGTH",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "WEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/kettlebell-rear-lunge.mp4"
  },
  {
    "slug": "kettlebell-swing",
    "name": "Kettlebell Swing",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Kettlebell"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Front Delts",
      "Side Delts",
      "Soleus",
      "Upper Traps"
    ],
    "tags": [
      "STRENGTH",
      "CARDIO",
      "EXPLOSIVE",
      "FUNCTIONAL",
      "CORE"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "WEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/kettlebell-swing.mp4"
  },
  {
    "slug": "kettlebell-windmill",
    "name": "Kettlebell Windmill",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Kettlebell"
    ],
    "primaryMuscles": [
      "Side Delts"
    ],
    "secondaryMuscles": [
      "Front Delts",
      "Obliques",
      "Rear Delts",
      "Spinal Erectors",
      "Gluteus Maximus"
    ],
    "tags": [
      "STRENGTH",
      "MOBILITY",
      "CORE",
      "BALANCE",
      "FUNCTIONAL",
      "STRETCH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "WEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/kettlebell-windmill.mp4"
  },
  {
    "slug": "kickboxing",
    "name": "Kickboxing",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Adductors",
      "Quadriceps",
      "Sartorius"
    ],
    "secondaryMuscles": [
      "Obliques",
      "Hamstrings",
      "Lower Abs",
      "Spinal Erectors",
      "Upper Abs"
    ],
    "tags": [
      "CARDIO",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "ALTERNATING",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/kickboxing.mp4"
  },
  {
    "slug": "knee-close-grip-push-up",
    "name": "Knee Close Grip Push-Up",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [
      "Mid Chest",
      "Lower Chest",
      "Upper Chest",
      "Front Delts",
      "Serratus Anterior"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/knee-close-grip-push-up.mp4"
  },
  {
    "slug": "knee-diamond-push-up",
    "name": "Knee Diamond Push-Up",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Mid Chest",
      "Upper Chest"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/knee-diamond-push-up.mp4"
  },
  {
    "slug": "knee-push-up",
    "name": "Knee Push-Up",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Upper Chest",
      "Triceps",
      "Serratus Anterior"
    ],
    "tags": [
      "STRENGTH",
      "PUSH",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/knee-push-up.mp4"
  },
  {
    "slug": "knee-raise-ab-coaster",
    "name": "Knee Raise Ab Coaster",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Lower Abs"
    ],
    "secondaryMuscles": [
      "Obliques",
      "Upper Abs"
    ],
    "tags": [
      "CORE",
      "STRENGTH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/knee-raise-ab-coaster.mp4"
  },
  {
    "slug": "knee-to-chest-stretch",
    "name": "Knee To Chest Stretch",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Gluteus Maximus",
      "Gluteus Medius",
      "Hamstrings"
    ],
    "secondaryMuscles": [],
    "tags": [
      "MOBILITY",
      "STRETCH",
      "WARMUP",
      "REHAB"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/knee-to-chest-stretch.mp4"
  },
  {
    "slug": "knee-tuck-crunch",
    "name": "Knee Tuck Crunch",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Upper Abs"
    ],
    "secondaryMuscles": [
      "Lower Abs",
      "Obliques"
    ],
    "tags": [
      "CORE",
      "STRENGTH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/knee-tuck-crunch.mp4"
  },
  {
    "slug": "kneeling-back-rotation-stretch",
    "name": "Kneeling Back Rotation Stretch",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Mid Chest",
      "Spinal Erectors"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Upper Chest",
      "Serratus Anterior",
      "Middle Traps"
    ],
    "tags": [
      "MOBILITY",
      "STRETCH",
      "WARMUP"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/kneeling-back-rotation-stretch.mp4"
  },
  {
    "slug": "kneeling-band-abs-crunches",
    "name": "Kneeling Band Abs Crunches",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Resistance Band"
    ],
    "primaryMuscles": [
      "Upper Abs"
    ],
    "secondaryMuscles": [
      "Lower Abs",
      "Obliques"
    ],
    "tags": [
      "CORE",
      "FUNCTIONAL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BAND",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/kneeling-band-abs-crunches.mp4"
  },
  {
    "slug": "kneeling-cable-abs-crunches",
    "name": "Kneeling Cable Abs Crunches",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Upper Abs"
    ],
    "secondaryMuscles": [
      "Lower Abs",
      "Obliques"
    ],
    "tags": [
      "STRENGTH",
      "CORE"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/kneeling-cable-abs-crunches.mp4"
  },
  {
    "slug": "kneeling-cable-lat-pulldown",
    "name": "Kneeling Cable Lat Pulldown",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Lats"
    ],
    "secondaryMuscles": [
      "Teres Major",
      "Lower Traps",
      "Teres Minor",
      "Infraspinatus",
      "Forearm Extensors"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/kneeling-cable-lat-pulldown.mp4"
  },
  {
    "slug": "kneeling-hamstring-stretch",
    "name": "Kneeling Hamstring Stretch",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Gastrocnemius",
      "Hamstrings",
      "Soleus"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRETCH",
      "MOBILITY",
      "WARMUP"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/kneeling-hamstring-stretch.mp4"
  },
  {
    "slug": "kneeling-resistance-band-glute-kickback",
    "name": "Kneeling Resistance Band Glute Kickback",
    "categories": [
      "Gluteal"
    ],
    "equipment": [
      "Resistance Band"
    ],
    "primaryMuscles": [
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Hamstrings",
      "Gluteus Medius"
    ],
    "tags": [
      "STRENGTH",
      "FUNCTIONAL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "BAND",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/kneeling-resistance-band-glute-kickback.mp4"
  },
  {
    "slug": "kneeling-ring-push-up",
    "name": "Kneeling Ring Push-Up",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Rings"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Triceps",
      "Upper Chest",
      "Serratus Anterior",
      "Front Delts"
    ],
    "tags": [
      "STRENGTH",
      "PUSH",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "not-provided"
  },
  {
    "slug": "kneeling-wide-push-up",
    "name": "Kneeling Wide Push-Up",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Upper Chest",
      "Triceps",
      "Serratus Anterior",
      "Front Delts"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/kneeling-wide-push-up.mp4"
  },
  {
    "slug": "knuckle-push-up",
    "name": "Knuckle Push-Up",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Upper Chest",
      "Triceps",
      "Front Delts",
      "Serratus Anterior"
    ],
    "tags": [
      "STRENGTH",
      "PUSH",
      "BALANCE"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/knuckle-push-up.mp4"
  },
  {
    "slug": "korean-dip",
    "name": "Korean Dip",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Other"
    ],
    "primaryMuscles": [
      "Lower Chest"
    ],
    "secondaryMuscles": [
      "Front Delts",
      "Mid Chest",
      "Triceps",
      "Upper Chest",
      "Serratus Anterior"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/korean-dip.mp4"
  },
  {
    "slug": "l-pull-up",
    "name": "L Pull-Up",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Pull-Up Bar"
    ],
    "primaryMuscles": [
      "Lats",
      "Teres Major"
    ],
    "secondaryMuscles": [
      "Infraspinatus",
      "Teres Minor",
      "Lower Traps",
      "Triceps",
      "Rear Delts"
    ],
    "tags": [
      "STRENGTH",
      "CORE",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/l-pull-up.mp4"
  },
  {
    "slug": "l-sit",
    "name": "L-Sit",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Other",
      "Pull-Up Bar"
    ],
    "primaryMuscles": [
      "Upper Abs"
    ],
    "secondaryMuscles": [
      "Lower Abs",
      "Forearm Extensors",
      "Forearm Flexors",
      "Obliques"
    ],
    "tags": [
      "STRENGTH",
      "CORE",
      "ISOMETRIC",
      "BALANCE"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/l-sit.mp4"
  },
  {
    "slug": "landmine-lateral-raise",
    "name": "Landmine Lateral Raise",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Landmine"
    ],
    "primaryMuscles": [
      "Side Delts"
    ],
    "secondaryMuscles": [
      "Rear Delts",
      "Serratus Anterior",
      "Front Delts",
      "Middle Traps",
      "Infraspinatus"
    ],
    "tags": [
      "STRENGTH",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/landmine-lateral-raise.mp4"
  },
  {
    "slug": "landmine-press",
    "name": "Landmine Press",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Landmine"
    ],
    "primaryMuscles": [
      "Front Delts"
    ],
    "secondaryMuscles": [
      "Side Delts",
      "Upper Chest",
      "Triceps",
      "Mid Chest",
      "Rear Delts"
    ],
    "tags": [
      "STRENGTH",
      "PUSH",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/landmine-press.mp4"
  },
  {
    "slug": "landmine-squat",
    "name": "Landmine Squat",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Landmine"
    ],
    "primaryMuscles": [
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Quadriceps",
      "Hamstrings",
      "Adductors",
      "Gluteus Medius",
      "Lower Abs"
    ],
    "tags": [
      "STRENGTH",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/landmine-squat.mp4"
  },
  {
    "slug": "landmine-twist",
    "name": "Landmine Twist",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Landmine"
    ],
    "primaryMuscles": [
      "Obliques"
    ],
    "secondaryMuscles": [
      "Side Delts",
      "Upper Abs",
      "Lower Abs",
      "Front Delts",
      "Brachioradialis"
    ],
    "tags": [
      "CORE",
      "FUNCTIONAL",
      "BALANCE"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/landmine-twist.mp4"
  },
  {
    "slug": "lat-pulldown-machine",
    "name": "Lat Pulldown Machine",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Lats"
    ],
    "secondaryMuscles": [
      "Teres Major",
      "Teres Minor",
      "Infraspinatus",
      "Lower Traps",
      "Brachioradialis"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/lat-pulldown-machine.mp4"
  },
  {
    "slug": "lateral-monster-walk",
    "name": "Lateral Monster Walk",
    "categories": [
      "Gluteal"
    ],
    "equipment": [
      "Resistance Band"
    ],
    "primaryMuscles": [
      "Gluteus Medius"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Adductors",
      "Sartorius",
      "Quadriceps"
    ],
    "tags": [
      "MOBILITY",
      "REHAB",
      "BALANCE",
      "FUNCTIONAL",
      "WARMUP"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BAND",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/lateral-monster-walk.mp4"
  },
  {
    "slug": "lateral-to-front-raise",
    "name": "Lateral to Front Raise",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Front Delts",
      "Side Delts"
    ],
    "secondaryMuscles": [
      "Rear Delts"
    ],
    "tags": [
      "STRENGTH",
      "FUNCTIONAL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/lateral-to-front-raise.mp4"
  },
  {
    "slug": "lean-planche",
    "name": "Lean Planche",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Other"
    ],
    "primaryMuscles": [
      "Front Delts",
      "Mid Chest",
      "Serratus Anterior",
      "Triceps",
      "Upper Chest"
    ],
    "secondaryMuscles": [
      "Biceps",
      "Lower Abs",
      "Lower Chest",
      "Upper Abs",
      "Spinal Erectors"
    ],
    "tags": [
      "STRENGTH",
      "CORE",
      "BALANCE",
      "ISOMETRIC",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/lean-planche.mp4"
  },
  {
    "slug": "leg-in-and-out",
    "name": "Leg In and Out",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Lower Abs",
      "Obliques",
      "Upper Abs"
    ],
    "secondaryMuscles": [],
    "tags": [
      "CORE",
      "MOBILITY",
      "BALANCE"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/leg-in-and-out.mp4"
  },
  {
    "slug": "leg-press",
    "name": "Leg Press",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Gluteus Medius",
      "Sartorius"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/leg-press.mp4"
  },
  {
    "slug": "leg-press-wide-stance",
    "name": "Leg Press Wide Stance",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Gluteus Medius"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/leg-press-wide-stance.mp4"
  },
  {
    "slug": "leg-swings",
    "name": "Leg Swings",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Hip Flexors"
    ],
    "secondaryMuscles": [
      "Hamstrings",
      "Gluteus Maximus"
    ],
    "tags": [
      "MOBILITY",
      "WARMUP",
      "BALANCE"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/leg-swings.mp4"
  },
  {
    "slug": "lever-back-extension",
    "name": "Lever Back Extension",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Spinal Erectors"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus"
    ],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/lever-back-extension.mp4"
  },
  {
    "slug": "lever-high-row",
    "name": "Lever High Row",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Teres Major"
    ],
    "secondaryMuscles": [
      "Teres Minor",
      "Infraspinatus",
      "Lower Traps",
      "Lats",
      "Rear Delts"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/lever-high-row.mp4"
  },
  {
    "slug": "lever-horizontal-leg-press",
    "name": "Lever Horizontal Leg Press",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Sartorius",
      "Gluteus Maximus",
      "Gluteus Medius"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/lever-horizontal-leg-press.mp4"
  },
  {
    "slug": "lever-low-row",
    "name": "Lever Low Row",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Teres Minor"
    ],
    "secondaryMuscles": [
      "Lats",
      "Infraspinatus",
      "Lower Traps",
      "Teres Major",
      "Side Delts"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/lever-low-row.mp4"
  },
  {
    "slug": "lever-seated-hammer-grip-shoulder-press",
    "name": "Lever Seated Hammer Grip Shoulder Press",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Front Delts"
    ],
    "secondaryMuscles": [
      "Side Delts",
      "Triceps"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/lever-seated-hammer-grip-shoulder-press.mp4"
  },
  {
    "slug": "lizard-pose",
    "name": "Lizard Pose",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Adductors",
      "Gluteus Maximus",
      "Hamstrings",
      "Hip Flexors",
      "Quadriceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "MOBILITY",
      "STRETCH",
      "BALANCE",
      "WARMUP"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/lizard-pose.mp4"
  },
  {
    "slug": "low-cable-horizontal-pallof-press",
    "name": "Low Cable Horizontal Pallof Press",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Obliques"
    ],
    "secondaryMuscles": [
      "Front Delts",
      "Upper Chest",
      "Mid Chest",
      "Upper Abs",
      "Lower Abs"
    ],
    "tags": [
      "STRENGTH",
      "CORE",
      "FUNCTIONAL",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/low-cable-horizontal-pallof-press.mp4"
  },
  {
    "slug": "low-cable-incline-bench-press",
    "name": "Low Cable Incline Bench Press",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Upper Chest"
    ],
    "secondaryMuscles": [
      "Mid Chest",
      "Lower Chest",
      "Triceps",
      "Brachioradialis",
      "Forearm Extensors"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/low-cable-incline-bench-press.mp4"
  },
  {
    "slug": "low-high-cable-chest-fly",
    "name": "Low High Cable Chest Fly",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Upper Chest"
    ],
    "secondaryMuscles": [
      "Mid Chest",
      "Front Delts",
      "Serratus Anterior"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/low-high-cable-chest-fly.mp4"
  },
  {
    "slug": "low-incline-dumbbell-fly",
    "name": "Low Incline Dumbbell Fly",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Upper Chest",
      "Front Delts"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/low-incline-dumbbell-fly.mp4"
  },
  {
    "slug": "lowbar-squat",
    "name": "Lowbar Squat",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Barbell",
      "Other"
    ],
    "primaryMuscles": [
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Quadriceps",
      "Sartorius",
      "Adductors",
      "Spinal Erectors",
      "Gluteus Medius"
    ],
    "tags": [
      "STRENGTH",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/lowbar-squat.mp4"
  },
  {
    "slug": "lunge-stretch",
    "name": "Lunge Stretch",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Hamstrings"
    ],
    "secondaryMuscles": [
      "Quadriceps"
    ],
    "tags": [
      "MOBILITY",
      "STRETCH",
      "BALANCE",
      "WARMUP"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/lunge-stretch.mp4"
  },
  {
    "slug": "lunges",
    "name": "Lunges",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Sartorius",
      "Soleus",
      "Adductors",
      "Hamstrings"
    ],
    "tags": [
      "STRENGTH",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "ALTERNATING",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/lunges.mp4"
  },
  {
    "slug": "lying-barbell-triceps-extension-skullcrusher",
    "name": "Lying Barbell Triceps Extension (Skullcrusher)",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Barbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/lying-barbell-triceps-extension-skullcrusher.mp4"
  },
  {
    "slug": "lying-butterfly-pose",
    "name": "Lying Butterfly Pose",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Adductors",
      "Sartorius"
    ],
    "secondaryMuscles": [],
    "tags": [
      "MOBILITY",
      "STRETCH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/lying-butterfly-pose.mp4"
  },
  {
    "slug": "lying-cable-face-pull",
    "name": "Lying Cable Face Pull",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Cable",
      "Bench"
    ],
    "primaryMuscles": [
      "Rear Delts"
    ],
    "secondaryMuscles": [
      "Middle Traps",
      "Infraspinatus",
      "Upper Traps"
    ],
    "tags": [
      "STRENGTH",
      "PULL",
      "REHAB",
      "FUNCTIONAL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/lying-cable-face-pull.mp4"
  },
  {
    "slug": "lying-cable-fly",
    "name": "Lying Cable Fly",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Cable",
      "Bench"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Upper Chest",
      "Serratus Anterior",
      "Front Delts"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/lying-cable-fly.mp4"
  },
  {
    "slug": "lying-chest-press",
    "name": "Lying Chest Press",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Bench"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Upper Chest",
      "Triceps",
      "Front Delts",
      "Serratus Anterior"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/lying-chest-press.mp4"
  },
  {
    "slug": "lying-cross-lateral-cable-fly",
    "name": "Lying Cross Lateral Cable Fly",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Cable",
      "Bench"
    ],
    "primaryMuscles": [
      "Side Delts"
    ],
    "secondaryMuscles": [
      "Front Delts",
      "Rear Delts"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/lying-cross-lateral-cable-fly.mp4"
  },
  {
    "slug": "lying-ez-bar-triceps-extension",
    "name": "Lying EZ-Bar Triceps Extension",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "EZ Bar",
      "Bench"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/lying-ez-bar-triceps-extension.mp4"
  },
  {
    "slug": "lying-knee-to-chest-stretch",
    "name": "Lying Knee To Chest Stretch",
    "categories": [
      "Gluteal"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [],
    "tags": [
      "MOBILITY",
      "STRETCH",
      "REHAB",
      "WARMUP"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/lying-knee-to-chest-stretch.mp4"
  },
  {
    "slug": "lying-quadriceps-stretch",
    "name": "Lying Quadriceps Stretch",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRETCH",
      "MOBILITY",
      "WARMUP"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/lying-quadriceps-stretch.mp4"
  },
  {
    "slug": "lying-spinal-twist",
    "name": "Lying Spinal Twist",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Obliques"
    ],
    "secondaryMuscles": [
      "Gluteus Medius",
      "Upper Abs",
      "Lower Abs"
    ],
    "tags": [
      "MOBILITY",
      "STRETCH",
      "REHAB",
      "WARMUP"
    ],
    "mechanics": "ISOLATION",
    "laterality": "ALTERNATING",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/lying-spinal-twist.mp4"
  },
  {
    "slug": "lying-stright-leg-raise",
    "name": "Lying Stright Leg Raise",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Upper Abs"
    ],
    "secondaryMuscles": [
      "Lower Abs",
      "Obliques",
      "Quadriceps",
      "Sartorius",
      "Adductors"
    ],
    "tags": [
      "CORE"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/lying-stright-leg-raise.mp4"
  },
  {
    "slug": "machine-abdominal-crunches",
    "name": "Machine Abdominal Crunches",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Upper Abs"
    ],
    "secondaryMuscles": [
      "Lower Abs",
      "Obliques"
    ],
    "tags": [
      "STRENGTH",
      "CORE"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/machine-abdominal-crunches.mp4"
  },
  {
    "slug": "machine-belt-squat",
    "name": "Machine Belt Squat",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Gluteus Medius"
    ],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/machine-belt-squat.mp4"
  },
  {
    "slug": "machine-biceps-curl",
    "name": "Machine Biceps Curl",
    "categories": [
      "Biceps"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/machine-biceps-curl.mp4"
  },
  {
    "slug": "machine-calf-raises",
    "name": "Machine Calf Raises",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Gastrocnemius",
      "Soleus"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/machine-calf-raises.mp4"
  },
  {
    "slug": "machine-chest-fly",
    "name": "Machine Chest Fly",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Upper Chest",
      "Serratus Anterior",
      "Front Delts"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/machine-chest-fly.mp4"
  },
  {
    "slug": "machine-chest-press",
    "name": "Machine Chest Press",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Upper Chest",
      "Triceps",
      "Front Delts",
      "Serratus Anterior"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/machine-chest-press.mp4"
  },
  {
    "slug": "machine-chest-press-hammer-grip",
    "name": "Machine Chest Press Hammer Grip",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Upper Chest"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Mid Chest",
      "Serratus Anterior"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/machine-chest-press-hammer-grip.mp4"
  },
  {
    "slug": "machine-hack-squat",
    "name": "Machine Hack Squat",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Gluteus Medius",
      "Spinal Erectors",
      "Sartorius",
      "Hamstrings"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/machine-hack-squat.mp4"
  },
  {
    "slug": "machine-hip-thrust",
    "name": "Machine Hip Thrust",
    "categories": [
      "Gluteal"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Gluteus Medius",
      "Quadriceps",
      "Lower Abs",
      "Upper Abs",
      "Hamstrings"
    ],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/machine-hip-thrust.mp4"
  },
  {
    "slug": "machine-lateral-raise",
    "name": "Machine Lateral Raise",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Side Delts"
    ],
    "secondaryMuscles": [
      "Front Delts",
      "Rear Delts"
    ],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/machine-lateral-raise.mp4"
  },
  {
    "slug": "machine-lying-crunch",
    "name": "Machine Lying Crunch",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Upper Abs"
    ],
    "secondaryMuscles": [
      "Lower Abs",
      "Obliques"
    ],
    "tags": [
      "CORE"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/machine-lying-crunch.mp4"
  },
  {
    "slug": "machine-preacher-curl",
    "name": "Machine Preacher Curl",
    "categories": [
      "Biceps"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [
      "Brachioradialis",
      "Forearm Flexors"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/machine-preacher-curl.mp4"
  },
  {
    "slug": "machine-pullover",
    "name": "Machine Pullover",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Lats"
    ],
    "secondaryMuscles": [
      "Teres Major",
      "Teres Minor",
      "Infraspinatus",
      "Triceps",
      "Lower Traps"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/machine-pullover.mp4"
  },
  {
    "slug": "machine-reverse-flyes",
    "name": "Machine Reverse Flyes",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Rear Delts"
    ],
    "secondaryMuscles": [
      "Middle Traps",
      "Lower Traps",
      "Side Delts",
      "Upper Traps",
      "Infraspinatus"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/machine-reverse-flyes.mp4"
  },
  {
    "slug": "machine-reverse-hack-squat",
    "name": "Machine Reverse Hack Squat",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Gluteus Medius",
      "Sartorius"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/machine-reverse-hack-squat.mp4"
  },
  {
    "slug": "machine-shoulder-press",
    "name": "Machine Shoulder Press",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Side Delts"
    ],
    "secondaryMuscles": [
      "Front Delts",
      "Upper Chest",
      "Triceps",
      "Serratus Anterior",
      "Rear Delts"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/machine-shoulder-press.mp4"
  },
  {
    "slug": "machine-shrugs",
    "name": "Machine Shrugs",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Upper Traps"
    ],
    "secondaryMuscles": [
      "Middle Traps",
      "Lower Traps"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/machine-shrugs.mp4"
  },
  {
    "slug": "machine-triceps-extension",
    "name": "Machine Triceps Extension",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/machine-triceps-extension.mp4"
  },
  {
    "slug": "med-ball-russian-twist",
    "name": "Med Ball Russian twist",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Medicine Ball"
    ],
    "primaryMuscles": [
      "Obliques"
    ],
    "secondaryMuscles": [
      "Lower Abs",
      "Upper Abs"
    ],
    "tags": [
      "CORE",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "ALTERNATING",
    "weightType": "WEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/med-ball-russian-twist.mp4"
  },
  {
    "slug": "medicine-ball-slam",
    "name": "Medicine Ball Slam",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Medicine Ball"
    ],
    "primaryMuscles": [
      "Front Delts"
    ],
    "secondaryMuscles": [
      "Lats",
      "Lower Abs",
      "Side Delts",
      "Upper Abs",
      "Teres Major"
    ],
    "tags": [
      "PLYOMETRIC",
      "EXPLOSIVE",
      "CARDIO",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "WEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/medicine-ball-slam.mp4"
  },
  {
    "slug": "mini-band-glute-bridge",
    "name": "Mini Band Glute Bridge",
    "categories": [
      "Gluteal"
    ],
    "equipment": [
      "Resistance Band"
    ],
    "primaryMuscles": [
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Gluteus Medius",
      "Hamstrings",
      "Quadriceps",
      "Sartorius"
    ],
    "tags": [
      "STRENGTH",
      "MOBILITY",
      "REHAB",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/mini-band-glute-bridge.mp4"
  },
  {
    "slug": "mountain-climber",
    "name": "Mountain climber",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Lower Abs",
      "Obliques"
    ],
    "secondaryMuscles": [
      "Upper Abs",
      "Quadriceps",
      "Gluteus Maximus",
      "Gluteus Medius",
      "Hamstrings"
    ],
    "tags": [
      "PLYOMETRIC",
      "CORE",
      "CARDIO",
      "FUNCTIONAL",
      "WARMUP"
    ],
    "mechanics": "COMPOUND",
    "laterality": "ALTERNATING",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/mountain-climber.mp4"
  },
  {
    "slug": "muscle-up",
    "name": "Muscle-up",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Pull-Up Bar",
      "Other"
    ],
    "primaryMuscles": [
      "Lats"
    ],
    "secondaryMuscles": [
      "Teres Major",
      "Infraspinatus",
      "Triceps",
      "Teres Minor",
      "Lower Chest"
    ],
    "tags": [
      "STRENGTH",
      "EXPLOSIVE",
      "PULL",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/muscle-up.mp4"
  },
  {
    "slug": "narrow-grip-australian-pull-up-with-rings",
    "name": "Narrow Grip Australian Pull-Up With Rings",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Rings"
    ],
    "primaryMuscles": [
      "Lats"
    ],
    "secondaryMuscles": [
      "Lower Traps",
      "Teres Major",
      "Infraspinatus",
      "Teres Minor",
      "Middle Traps"
    ],
    "tags": [
      "STRENGTH",
      "PULL",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/narrow-grip-australian-pull-up-with-rings.mp4"
  },
  {
    "slug": "narrow-stance-45-degree-leg-press",
    "name": "Narrow Stance 45 Degree Leg Press",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Gluteus Medius",
      "Sartorius",
      "Hamstrings"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/narrow-stance-45-degree-leg-press.mp4"
  },
  {
    "slug": "neck-curl",
    "name": "Neck Curl",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Bench"
    ],
    "primaryMuscles": [
      "Upper Traps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "REHAB"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "WEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/neck-curl.mp4"
  },
  {
    "slug": "neck-side-stretch",
    "name": "Neck Side Stretch",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Upper Traps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "MOBILITY",
      "STRETCH",
      "WARMUP"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/neck-side-stretch.mp4"
  },
  {
    "slug": "negative-pull-up",
    "name": "Negative Pull-Up",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Pull-Up Bar"
    ],
    "primaryMuscles": [
      "Lats"
    ],
    "secondaryMuscles": [
      "Teres Major",
      "Teres Minor",
      "Infraspinatus",
      "Lower Traps",
      "Middle Traps"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/negative-pull-up.mp4"
  },
  {
    "slug": "negative-push-up",
    "name": "Negative Push-Up",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Upper Chest",
      "Triceps",
      "Serratus Anterior"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/negative-push-up.mp4"
  },
  {
    "slug": "nordic-hamstring-curl",
    "name": "Nordic Hamstring Curl",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Hamstrings"
    ],
    "secondaryMuscles": [
      "Gastrocnemius",
      "Soleus"
    ],
    "tags": [
      "STRENGTH",
      "REHAB",
      "FUNCTIONAL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/nordic-hamstring-curl.mp4"
  },
  {
    "slug": "one-arm-band-kneeling-lat-pulldown",
    "name": "One-Arm Band Kneeling Lat Pulldown",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Resistance Band",
      "Bench"
    ],
    "primaryMuscles": [
      "Lats"
    ],
    "secondaryMuscles": [
      "Teres Major",
      "Lower Traps",
      "Teres Minor",
      "Infraspinatus",
      "Rear Delts"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "BAND",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/one-arm-band-kneeling-lat-pulldown.mp4"
  },
  {
    "slug": "one-arm-cable-bent-over-lateral-raise",
    "name": "One-Arm Cable Bent Over Lateral Raise",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Rear Delts"
    ],
    "secondaryMuscles": [
      "Middle Traps",
      "Side Delts",
      "Lower Traps",
      "Upper Traps",
      "Infraspinatus"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/one-arm-cable-bent-over-lateral-raise.mp4"
  },
  {
    "slug": "one-arm-cable-biceps-curl",
    "name": "One-Arm Cable Biceps Curl",
    "categories": [
      "Biceps"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [
      "Brachioradialis",
      "Triceps"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/one-arm-cable-biceps-curl.mp4"
  },
  {
    "slug": "one-arm-cable-cross-body-triceps-extension",
    "name": "One-Arm Cable Cross Body Triceps Extension",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/one-arm-cable-cross-body-triceps-extension.mp4"
  },
  {
    "slug": "one-arm-cable-fly",
    "name": "One-Arm Cable Fly",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Serratus Anterior",
      "Upper Chest",
      "Front Delts"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/one-arm-cable-fly.mp4"
  },
  {
    "slug": "one-arm-cable-front-raise",
    "name": "One-Arm Cable Front Raise",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Front Delts"
    ],
    "secondaryMuscles": [
      "Rear Delts",
      "Side Delts"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/one-arm-cable-front-raise.mp4"
  },
  {
    "slug": "one-arm-cable-half-kneeling-lat-pulldown",
    "name": "One-Arm Cable Half-Kneeling Lat Pulldown",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Lats"
    ],
    "secondaryMuscles": [
      "Teres Major",
      "Teres Minor",
      "Brachioradialis",
      "Infraspinatus",
      "Rear Delts"
    ],
    "tags": [
      "STRENGTH",
      "PULL",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/one-arm-cable-half-kneeling-lat-pulldown.mp4"
  },
  {
    "slug": "one-arm-cable-lateral-raise",
    "name": "One-Arm Cable Lateral Raise",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Side Delts"
    ],
    "secondaryMuscles": [
      "Front Delts",
      "Rear Delts"
    ],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/one-arm-cable-lateral-raise.mp4"
  },
  {
    "slug": "one-arm-cable-low-row",
    "name": "One-Arm Cable Low Row",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Lats"
    ],
    "secondaryMuscles": [
      "Teres Major",
      "Lower Traps",
      "Teres Minor",
      "Infraspinatus",
      "Biceps"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/one-arm-cable-low-row.mp4"
  },
  {
    "slug": "one-arm-cable-pushdown",
    "name": "One-Arm Cable Pushdown",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/one-arm-cable-pushdown.mp4"
  },
  {
    "slug": "one-arm-cable-rear-delt-fly",
    "name": "One-Arm Cable Rear Delt Fly",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Rear Delts"
    ],
    "secondaryMuscles": [
      "Middle Traps",
      "Side Delts"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/one-arm-cable-rear-delt-fly.mp4"
  },
  {
    "slug": "one-arm-cable-row",
    "name": "One-Arm Cable Row",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Cable",
      "Bench"
    ],
    "primaryMuscles": [
      "Lats"
    ],
    "secondaryMuscles": [
      "Infraspinatus",
      "Middle Traps",
      "Teres Major",
      "Lower Traps",
      "Rear Delts"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/one-arm-cable-row.mp4"
  },
  {
    "slug": "one-arm-cable-triceps-pushdown",
    "name": "One-Arm Cable Triceps Pushdown",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/one-arm-cable-triceps-pushdown.mp4"
  },
  {
    "slug": "one-arm-chest-supported-row-machine",
    "name": "One-Arm Chest Supported Row Machine",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Teres Minor"
    ],
    "secondaryMuscles": [
      "Infraspinatus",
      "Lower Traps",
      "Lats",
      "Teres Major",
      "Middle Traps"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/one-arm-chest-supported-row-machine.mp4"
  },
  {
    "slug": "one-arm-dumbbell-bench-press",
    "name": "One-Arm Dumbbell Bench Press",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Triceps",
      "Upper Chest",
      "Front Delts",
      "Serratus Anterior"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/one-arm-dumbbell-bench-press.mp4"
  },
  {
    "slug": "one-arm-dumbbell-bent-over-scapula-row",
    "name": "One-Arm Dumbbell Bent Over Scapula Row",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Lower Traps"
    ],
    "secondaryMuscles": [
      "Middle Traps",
      "Upper Traps"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/one-arm-dumbbell-bent-over-scapula-row.mp4"
  },
  {
    "slug": "one-arm-dumbbell-incline-bench-press",
    "name": "One-Arm Dumbbell Incline Bench Press",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Upper Chest"
    ],
    "secondaryMuscles": [
      "Mid Chest",
      "Triceps",
      "Front Delts",
      "Lower Chest"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/one-arm-dumbbell-incline-bench-press.mp4"
  },
  {
    "slug": "one-arm-dumbbell-incline-lateral-raise",
    "name": "One-Arm Dumbbell Incline Lateral Raise",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Side Delts"
    ],
    "secondaryMuscles": [
      "Front Delts",
      "Rear Delts"
    ],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/one-arm-dumbbell-incline-lateral-raise.mp4"
  },
  {
    "slug": "one-arm-dumbbell-lateral-raise",
    "name": "One-Arm Dumbbell Lateral Raise",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Side Delts"
    ],
    "secondaryMuscles": [
      "Front Delts",
      "Rear Delts",
      "Upper Traps",
      "Forearm Extensors"
    ],
    "tags": [
      "STRENGTH",
      "BALANCE"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/one-arm-dumbbell-lateral-raise.mp4"
  },
  {
    "slug": "one-arm-dumbbell-preacher-curl",
    "name": "One-Arm Dumbbell Preacher Curl",
    "categories": [
      "Biceps"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [
      "Brachioradialis",
      "Forearm Flexors",
      "Forearm Extensors"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/one-arm-dumbbell-preacher-curl.mp4"
  },
  {
    "slug": "one-arm-dumbbell-reverse-wrist-curl",
    "name": "One-Arm Dumbbell Reverse Wrist Curl",
    "categories": [
      "Forearms"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Forearm Extensors"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/one-arm-dumbbell-reverse-wrist-curl.mp4"
  },
  {
    "slug": "one-arm-dumbbell-seated-kickback",
    "name": "One-Arm Dumbbell Seated Kickback",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/one-arm-dumbbell-seated-kickback.mp4"
  },
  {
    "slug": "one-arm-dumbbell-supination",
    "name": "One-Arm Dumbbell Supination",
    "categories": [
      "Forearms"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Forearm Flexors"
    ],
    "secondaryMuscles": [
      "Forearm Extensors",
      "Brachioradialis"
    ],
    "tags": [
      "REHAB"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/one-arm-dumbbell-supination.mp4"
  },
  {
    "slug": "one-arm-dumbbell-supported-bent-over-lateral-raise",
    "name": "One-Arm Dumbbell Supported Bent Over Lateral Raise",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Rear Delts"
    ],
    "secondaryMuscles": [
      "Side Delts",
      "Middle Traps",
      "Infraspinatus",
      "Teres Minor",
      "Lower Traps"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/one-arm-dumbbell-supported-bent-over-lateral-raise.mp4"
  },
  {
    "slug": "one-arm-hammer-cable-curl",
    "name": "One-Arm Hammer Cable Curl",
    "categories": [
      "Biceps"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [
      "Brachioradialis"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/one-arm-hammer-cable-curl.mp4"
  },
  {
    "slug": "one-arm-high-row-cable",
    "name": "One-Arm High Row Cable",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Lats"
    ],
    "secondaryMuscles": [
      "Infraspinatus",
      "Teres Major",
      "Teres Minor",
      "Lower Traps",
      "Middle Traps"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/one-arm-high-row-cable.mp4"
  },
  {
    "slug": "one-arm-high-to-low-cable-fly",
    "name": "One-Arm High-to-Low Cable Fly",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Lower Chest"
    ],
    "secondaryMuscles": [
      "Mid Chest",
      "Serratus Anterior"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/one-arm-high-to-low-cable-fly.mp4"
  },
  {
    "slug": "one-arm-katana-triceps-overhead-extension",
    "name": "One-Arm Katana Triceps Overhead Extension",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/one-arm-katana-triceps-overhead-extension.mp4"
  },
  {
    "slug": "one-arm-kettlebell-overhead-press",
    "name": "One-Arm Kettlebell Overhead Press",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Kettlebell"
    ],
    "primaryMuscles": [
      "Front Delts"
    ],
    "secondaryMuscles": [
      "Side Delts",
      "Triceps",
      "Rear Delts"
    ],
    "tags": [
      "STRENGTH",
      "PUSH",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "WEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/one-arm-kettlebell-overhead-press.mp4"
  },
  {
    "slug": "one-arm-kettlebell-swing",
    "name": "One-Arm Kettlebell Swing",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Kettlebell"
    ],
    "primaryMuscles": [
      "Gluteus Maximus",
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Obliques",
      "Front Delts",
      "Hamstrings",
      "Side Delts",
      "Soleus"
    ],
    "tags": [
      "STRENGTH",
      "EXPLOSIVE",
      "CARDIO",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/one-arm-kettlebell-swing.mp4"
  },
  {
    "slug": "one-arm-landmine-bent-over-row",
    "name": "One-Arm Landmine Bent Over Row",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Landmine"
    ],
    "primaryMuscles": [
      "Lats",
      "Teres Major"
    ],
    "secondaryMuscles": [
      "Infraspinatus",
      "Teres Minor",
      "Middle Traps",
      "Lower Traps",
      "Rear Delts"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/one-arm-landmine-bent-over-row.mp4"
  },
  {
    "slug": "one-arm-landmine-half-kneeling-shoulder-press",
    "name": "One-Arm Landmine Half Kneeling Shoulder Press",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Barbell",
      "Landmine"
    ],
    "primaryMuscles": [
      "Front Delts"
    ],
    "secondaryMuscles": [
      "Side Delts",
      "Triceps",
      "Upper Chest"
    ],
    "tags": [
      "STRENGTH",
      "BALANCE",
      "FUNCTIONAL",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/one-arm-landmine-half-kneeling-shoulder-press.mp4"
  },
  {
    "slug": "one-arm-landmine-standing-shoulder-press",
    "name": "One-Arm Landmine Standing Shoulder Press",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Landmine"
    ],
    "primaryMuscles": [
      "Front Delts"
    ],
    "secondaryMuscles": [
      "Side Delts",
      "Triceps",
      "Upper Chest"
    ],
    "tags": [
      "STRENGTH",
      "PUSH",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/one-arm-landmine-standing-shoulder-press.mp4"
  },
  {
    "slug": "one-arm-lat-pulldown",
    "name": "One-Arm Lat Pulldown",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Lats",
      "Teres Major"
    ],
    "secondaryMuscles": [
      "Teres Minor",
      "Lower Traps",
      "Infraspinatus",
      "Middle Traps",
      "Rear Delts"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/one-arm-lat-pulldown.mp4"
  },
  {
    "slug": "one-arm-lever-high-row",
    "name": "One-Arm Lever High Row",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Lats"
    ],
    "secondaryMuscles": [
      "Teres Major",
      "Lower Traps",
      "Teres Minor",
      "Infraspinatus",
      "Middle Traps"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/one-arm-lever-high-row.mp4"
  },
  {
    "slug": "one-arm-low-cable-seated-row",
    "name": "One-Arm Low Cable Seated Row",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Cable",
      "Bench"
    ],
    "primaryMuscles": [
      "Lower Traps"
    ],
    "secondaryMuscles": [
      "Lats",
      "Teres Minor",
      "Infraspinatus",
      "Middle Traps",
      "Rear Delts"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/one-arm-low-cable-seated-row.mp4"
  },
  {
    "slug": "one-arm-low-fly-dumbbell",
    "name": "One-Arm Low Fly Dumbbell",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Upper Chest"
    ],
    "secondaryMuscles": [
      "Front Delts",
      "Biceps"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/one-arm-low-fly-dumbbell.mp4"
  },
  {
    "slug": "one-arm-low-to-high-cable-fly",
    "name": "One-Arm Low-to-High Cable Fly",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Upper Chest"
    ],
    "secondaryMuscles": [
      "Mid Chest",
      "Front Delts",
      "Lower Chest"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/one-arm-low-to-high-cable-fly.mp4"
  },
  {
    "slug": "one-arm-machine-preacher-curl",
    "name": "One-Arm Machine Preacher Curl",
    "categories": [
      "Biceps"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [
      "Brachioradialis"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/one-arm-machine-preacher-curl.mp4"
  },
  {
    "slug": "one-arm-neutral-wrist-dumbbell-curl",
    "name": "One-Arm Neutral Wrist Dumbbell Curl",
    "categories": [
      "Forearms"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Forearm Extensors"
    ],
    "secondaryMuscles": [
      "Brachioradialis",
      "Forearm Flexors"
    ],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/one-arm-neutral-wrist-dumbbell-curl.mp4"
  },
  {
    "slug": "one-arm-overhead-triceps-extension",
    "name": "One-Arm Overhead Triceps Extension",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/one-arm-overhead-triceps-extension.mp4"
  },
  {
    "slug": "one-arm-preacher-hammer-curl",
    "name": "One-Arm Preacher Hammer Curl",
    "categories": [
      "Biceps"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [
      "Brachioradialis",
      "Forearm Flexors",
      "Forearm Extensors"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/one-arm-preacher-hammer-curl.mp4"
  },
  {
    "slug": "one-arm-push-up",
    "name": "One-Arm Push-Up",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Triceps",
      "Upper Chest",
      "Front Delts",
      "Serratus Anterior"
    ],
    "tags": [
      "STRENGTH",
      "CORE",
      "BALANCE",
      "FUNCTIONAL",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/one-arm-push-up.mp4"
  },
  {
    "slug": "one-arm-rear-delt-fly",
    "name": "One-Arm Rear Delt Fly",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Rear Delts"
    ],
    "secondaryMuscles": [
      "Middle Traps",
      "Side Delts",
      "Front Delts"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/one-arm-rear-delt-fly.mp4"
  },
  {
    "slug": "one-arm-reverse-grip-triceps-cable-pushdown",
    "name": "One-Arm Reverse Grip Triceps Cable Pushdown",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/one-arm-reverse-grip-triceps-cable-pushdown.mp4"
  },
  {
    "slug": "one-arm-seated-row",
    "name": "One-Arm Seated Row",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Lats"
    ],
    "secondaryMuscles": [
      "Teres Major",
      "Teres Minor",
      "Infraspinatus",
      "Lower Traps",
      "Middle Traps"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/one-arm-seated-row.mp4"
  },
  {
    "slug": "one-arm-shoulder-press-dumbbell",
    "name": "One-Arm Shoulder Press Dumbbell",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Front Delts"
    ],
    "secondaryMuscles": [
      "Side Delts"
    ],
    "tags": [
      "STRENGTH",
      "PUSH",
      "BALANCE"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/one-arm-shoulder-press-dumbbell.mp4"
  },
  {
    "slug": "one-arm-straight-arm-cable-lat-pulldown",
    "name": "One-Arm Straight-Arm Cable Lat Pulldown",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Lats"
    ],
    "secondaryMuscles": [
      "Infraspinatus",
      "Teres Major",
      "Teres Minor",
      "Lower Traps",
      "Rear Delts"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/one-arm-straight-arm-cable-lat-pulldown.mp4"
  },
  {
    "slug": "one-arm-triceps-cable-pushdown",
    "name": "One-Arm Triceps Cable Pushdown",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/one-arm-triceps-cable-pushdown.mp4"
  },
  {
    "slug": "one-arm-wrist-curl-dumbbell",
    "name": "One-Arm Wrist Curl Dumbbell",
    "categories": [
      "Forearms"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Forearm Flexors"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/one-arm-wrist-curl-dumbbell.mp4"
  },
  {
    "slug": "opposite-side-elbow-to-knee",
    "name": "Opposite side elbow to knee",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Obliques"
    ],
    "secondaryMuscles": [
      "Upper Abs",
      "Lower Abs",
      "Gluteus Maximus",
      "Quadriceps",
      "Gluteus Medius"
    ],
    "tags": [
      "CORE",
      "MOBILITY",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "ALTERNATING",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/opposite-side-elbow-to-knee.mp4"
  },
  {
    "slug": "overhead-band-triceps-extension",
    "name": "Overhead Band Triceps Extension",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Resistance Band"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BAND",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/overhead-band-triceps-extension.mp4"
  },
  {
    "slug": "overhead-cable-triceps-exstension-bar",
    "name": "Overhead Cable Triceps Exstension (bar)",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/overhead-cable-triceps-exstension-bar.mp4"
  },
  {
    "slug": "overhead-triceps-stretch",
    "name": "Overhead Triceps Stretch",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRETCH",
      "MOBILITY",
      "WARMUP"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/overhead-triceps-stretch.mp4"
  },
  {
    "slug": "pec-deck-chest-fly",
    "name": "Pec Deck Chest Fly",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Upper Chest",
      "Serratus Anterior",
      "Front Delts"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/pec-deck-chest-fly.mp4"
  },
  {
    "slug": "pendlay-row",
    "name": "Pendlay Row",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Barbell"
    ],
    "primaryMuscles": [
      "Infraspinatus"
    ],
    "secondaryMuscles": [
      "Middle Traps",
      "Teres Major",
      "Lats",
      "Teres Minor",
      "Lower Traps"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/pendlay-row.mp4"
  },
  {
    "slug": "pigeon-pose",
    "name": "Pigeon Pose",
    "categories": [
      "Gluteal"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Gluteus Maximus",
      "Gluteus Medius",
      "Quadriceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "MOBILITY",
      "STRETCH",
      "REHAB"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/pigeon-pose.mp4"
  },
  {
    "slug": "pike-push-up",
    "name": "Pike Push-Up",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Side Delts"
    ],
    "secondaryMuscles": [
      "Front Delts",
      "Triceps",
      "Upper Chest",
      "Mid Chest"
    ],
    "tags": [
      "STRENGTH",
      "PUSH",
      "BALANCE"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/pike-push-up.mp4"
  },
  {
    "slug": "pike-push-up-between-benches",
    "name": "Pike Push-Up Between Benches",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Bench"
    ],
    "primaryMuscles": [
      "Side Delts"
    ],
    "secondaryMuscles": [
      "Front Delts",
      "Triceps",
      "Upper Chest"
    ],
    "tags": [
      "STRENGTH",
      "PUSH",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/pike-push-up-between-benches.mp4"
  },
  {
    "slug": "pike-push-up-between-chairs",
    "name": "Pike Push-Up Between Chairs",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Side Delts"
    ],
    "secondaryMuscles": [
      "Front Delts",
      "Triceps",
      "Upper Chest",
      "Mid Chest"
    ],
    "tags": [
      "STRENGTH",
      "BALANCE",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/pike-push-up-between-chairs.mp4"
  },
  {
    "slug": "pike-push-up-on-bench",
    "name": "Pike Push-Up On Bench",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Bench"
    ],
    "primaryMuscles": [
      "Side Delts"
    ],
    "secondaryMuscles": [
      "Front Delts",
      "Triceps",
      "Upper Chest"
    ],
    "tags": [
      "STRENGTH",
      "PUSH",
      "BALANCE"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/pike-push-up-on-bench.mp4"
  },
  {
    "slug": "pin-bench-press",
    "name": "Pin Bench Press",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Barbell",
      "Bench",
      "Other"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Upper Chest",
      "Triceps",
      "Front Delts",
      "Serratus Anterior"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/pin-bench-press.mp4"
  },
  {
    "slug": "pin-front-squat",
    "name": "Pin Front Squat",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Barbell",
      "Other"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Sartorius",
      "Spinal Erectors",
      "Adductors",
      "Gluteus Medius"
    ],
    "tags": [
      "STRENGTH",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/pin-front-squat.mp4"
  },
  {
    "slug": "pin-squat",
    "name": "Pin Squat",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Barbell",
      "Other"
    ],
    "primaryMuscles": [
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Quadriceps",
      "Sartorius",
      "Adductors",
      "Spinal Erectors",
      "Gluteus Medius"
    ],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/pin-squat.mp4"
  },
  {
    "slug": "pistol-box-squat",
    "name": "Pistol Box Squat",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Other"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Adductors",
      "Sartorius",
      "Gluteus Medius",
      "Hamstrings"
    ],
    "tags": [
      "STRENGTH",
      "BALANCE",
      "FUNCTIONAL",
      "MOBILITY"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/pistol-box-squat.mp4"
  },
  {
    "slug": "pistol-squat",
    "name": "Pistol Squat",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Adductors",
      "Sartorius",
      "Gluteus Medius",
      "Hamstrings"
    ],
    "tags": [
      "STRENGTH",
      "BALANCE",
      "MOBILITY",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/pistol-squat.mp4"
  },
  {
    "slug": "planche-dips",
    "name": "Planche Dips",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Other"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Front Delts",
      "Lower Chest",
      "Triceps",
      "Upper Chest",
      "Spinal Erectors"
    ],
    "tags": [
      "STRENGTH",
      "PUSH",
      "BALANCE"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/planche-dips.mp4"
  },
  {
    "slug": "planche-push-up",
    "name": "Planche Push-Up",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Other"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Front Delts",
      "Triceps",
      "Lower Chest",
      "Upper Chest",
      "Side Delts"
    ],
    "tags": [
      "STRENGTH",
      "CORE",
      "BALANCE",
      "FUNCTIONAL",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/planche-push-up.mp4"
  },
  {
    "slug": "plank",
    "name": "Plank",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Lower Abs",
      "Obliques",
      "Upper Abs"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Front Delts",
      "Quadriceps",
      "Triceps",
      "Gastrocnemius"
    ],
    "tags": [
      "CORE",
      "ISOMETRIC",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/plank.mp4"
  },
  {
    "slug": "plate-bus-driver",
    "name": "Plate Bus Driver",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Weight Plate"
    ],
    "primaryMuscles": [
      "Front Delts"
    ],
    "secondaryMuscles": [
      "Side Delts",
      "Rear Delts"
    ],
    "tags": [
      "CORE",
      "FUNCTIONAL",
      "MOBILITY"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "WEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/plate-bus-driver.mp4"
  },
  {
    "slug": "plate-front-raise",
    "name": "Plate Front Raise",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Weight Plate"
    ],
    "primaryMuscles": [
      "Front Delts"
    ],
    "secondaryMuscles": [
      "Side Delts"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "WEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/plate-front-raise.mp4"
  },
  {
    "slug": "plate-front-raise-drive",
    "name": "Plate Front Raise Drive",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Weight Plate"
    ],
    "primaryMuscles": [
      "Front Delts"
    ],
    "secondaryMuscles": [
      "Side Delts"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "WEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/plate-front-raise-drive.mp4"
  },
  {
    "slug": "plyo-side-lunge",
    "name": "Plyo side lunge",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Adductors",
      "Sartorius",
      "Obliques",
      "Lower Abs",
      "Upper Abs"
    ],
    "tags": [
      "PLYOMETRIC",
      "BALANCE",
      "FUNCTIONAL",
      "EXPLOSIVE"
    ],
    "mechanics": "COMPOUND",
    "laterality": "ALTERNATING",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/plyo-side-lunge.mp4"
  },
  {
    "slug": "pogo-jumps",
    "name": "Pogo Jumps",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Gastrocnemius"
    ],
    "secondaryMuscles": [
      "Quadriceps",
      "Soleus",
      "Tibialis Anterior"
    ],
    "tags": [
      "PLYOMETRIC",
      "EXPLOSIVE",
      "CARDIO",
      "BALANCE",
      "WARMUP"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/pogo-jumps.mp4"
  },
  {
    "slug": "poliquin-flyes",
    "name": "Poliquin Flyes",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Upper Chest",
      "Front Delts",
      "Side Delts",
      "Serratus Anterior"
    ],
    "tags": [
      "STRENGTH",
      "PUSH",
      "STRETCH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/poliquin-flyes.mp4"
  },
  {
    "slug": "poliquin-step-up",
    "name": "Poliquin Step-Up",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Dumbbell",
      "Other"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "BALANCE",
      "FUNCTIONAL",
      "REHAB"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "WEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/poliquin-step-up.mp4"
  },
  {
    "slug": "powell-raise",
    "name": "Powell Raise",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Rear Delts"
    ],
    "secondaryMuscles": [
      "Middle Traps",
      "Side Delts",
      "Infraspinatus",
      "Lower Traps",
      "Front Delts"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/powell-raise.mp4"
  },
  {
    "slug": "power-clean",
    "name": "Power Clean",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Barbell"
    ],
    "primaryMuscles": [
      "Spinal Erectors"
    ],
    "secondaryMuscles": [
      "Hamstrings",
      "Gluteus Maximus",
      "Quadriceps",
      "Lower Abs",
      "Sartorius"
    ],
    "tags": [
      "STRENGTH",
      "EXPLOSIVE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/power-clean.mp4"
  },
  {
    "slug": "preacher-hammer-curl",
    "name": "Preacher Hammer Curl",
    "categories": [
      "Biceps"
    ],
    "equipment": [
      "Machine",
      "Bench"
    ],
    "primaryMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [
      "Brachioradialis",
      "Forearm Flexors",
      "Forearm Extensors"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/preacher-hammer-curl.mp4"
  },
  {
    "slug": "prone-lying-leg-curl",
    "name": "Prone Lying Leg Curl",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Hamstrings"
    ],
    "secondaryMuscles": [
      "Gastrocnemius",
      "Soleus"
    ],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/prone-lying-leg-curl.mp4"
  },
  {
    "slug": "prone-swimmer",
    "name": "Prone Swimmer",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Middle Traps"
    ],
    "secondaryMuscles": [
      "Lower Traps",
      "Teres Major",
      "Teres Minor",
      "Upper Traps",
      "Lats"
    ],
    "tags": [
      "MOBILITY",
      "CORE",
      "FUNCTIONAL",
      "WARMUP"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/prone-swimmer.mp4"
  },
  {
    "slug": "prowler-sled",
    "name": "Prowler Sled",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Sled"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Sartorius",
      "Gluteus Maximus",
      "Gluteus Medius",
      "Gastrocnemius",
      "Soleus"
    ],
    "tags": [
      "STRENGTH",
      "CARDIO",
      "FUNCTIONAL",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "WEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/prowler-sled.mp4"
  },
  {
    "slug": "pull-around",
    "name": "Pull Around",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Lats"
    ],
    "secondaryMuscles": [
      "Teres Major",
      "Lower Traps",
      "Teres Minor",
      "Infraspinatus",
      "Middle Traps"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "not-provided"
  },
  {
    "slug": "pull-up",
    "name": "Pull-Up",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Pull-Up Bar"
    ],
    "primaryMuscles": [
      "Lats",
      "Teres Major"
    ],
    "secondaryMuscles": [
      "Lower Traps",
      "Infraspinatus",
      "Teres Minor",
      "Middle Traps",
      "Triceps"
    ],
    "tags": [
      "STRENGTH",
      "PULL",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/pull-up.mp4"
  },
  {
    "slug": "pull-up-neutral-grip",
    "name": "Pull-Up Neutral Grip",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Pull-Up Bar"
    ],
    "primaryMuscles": [
      "Lats"
    ],
    "secondaryMuscles": [
      "Lower Traps",
      "Teres Major",
      "Teres Minor",
      "Biceps",
      "Infraspinatus"
    ],
    "tags": [
      "STRENGTH",
      "PULL",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/pull-up-neutral-grip.mp4"
  },
  {
    "slug": "pull-up-wide-grip",
    "name": "Pull-Up Wide Grip",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Pull-Up Bar"
    ],
    "primaryMuscles": [
      "Lats"
    ],
    "secondaryMuscles": [
      "Teres Major",
      "Lower Traps",
      "Teres Minor",
      "Brachioradialis",
      "Forearm Extensors"
    ],
    "tags": [
      "STRENGTH",
      "PULL",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/pull-up-wide-grip.mp4"
  },
  {
    "slug": "punching-bag-boxing",
    "name": "Punching Bag Boxing",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Lower Chest",
      "Upper Chest"
    ],
    "secondaryMuscles": [
      "Mid Chest",
      "Serratus Anterior",
      "Front Delts",
      "Side Delts",
      "Triceps"
    ],
    "tags": [
      "CARDIO",
      "FUNCTIONAL",
      "EXPLOSIVE"
    ],
    "mechanics": "COMPOUND",
    "laterality": "ALTERNATING",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/punching-bag-boxing.mp4"
  },
  {
    "slug": "push-up",
    "name": "Push-Up",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Upper Chest",
      "Triceps",
      "Front Delts",
      "Serratus Anterior"
    ],
    "tags": [
      "STRENGTH",
      "CORE",
      "PUSH",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/push-up.mp4"
  },
  {
    "slug": "push-up-on-parallel-bars",
    "name": "Push-Up on Parallel Bars",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Other"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Upper Chest",
      "Triceps",
      "Front Delts",
      "Serratus Anterior"
    ],
    "tags": [
      "STRENGTH",
      "PUSH",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/push-up-on-parallel-bars.mp4"
  },
  {
    "slug": "rear-deltoid-stretch",
    "name": "Rear Deltoid Stretch",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Rear Delts"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRETCH",
      "MOBILITY",
      "REHAB",
      "WARMUP"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/rear-deltoid-stretch.mp4"
  },
  {
    "slug": "rear-lunge",
    "name": "Rear Lunge",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Gluteus Medius"
    ],
    "tags": [
      "STRENGTH",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "ALTERNATING",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/rear-lunge.mp4"
  },
  {
    "slug": "resistance-band-hip-adduction",
    "name": "Resistance Band Hip Adduction",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Resistance Band"
    ],
    "primaryMuscles": [
      "Adductors"
    ],
    "secondaryMuscles": [
      "Sartorius"
    ],
    "tags": [
      "STRENGTH",
      "MOBILITY",
      "REHAB",
      "FUNCTIONAL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "BAND",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/resistance-band-hip-adduction.mp4"
  },
  {
    "slug": "resistance-band-push-up",
    "name": "Resistance Band Push-Up",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Resistance Band"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Upper Chest",
      "Triceps",
      "Front Delts",
      "Serratus Anterior"
    ],
    "tags": [
      "STRENGTH",
      "PUSH",
      "FUNCTIONAL",
      "CORE"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BAND",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/resistance-band-push-up.mp4"
  },
  {
    "slug": "reverse-crunches",
    "name": "Reverse Crunches",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Upper Abs"
    ],
    "secondaryMuscles": [
      "Lower Abs",
      "Obliques"
    ],
    "tags": [
      "CORE"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/reverse-crunches.mp4"
  },
  {
    "slug": "reverse-grip-cable-curl",
    "name": "Reverse Grip Cable Curl",
    "categories": [
      "Forearms"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Brachioradialis"
    ],
    "secondaryMuscles": [
      "Forearm Extensors",
      "Biceps",
      "Forearm Flexors"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/reverse-grip-cable-curl.mp4"
  },
  {
    "slug": "reverse-hand-push-up",
    "name": "Reverse Hand Push-Up",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Mid Chest",
      "Triceps"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Upper Chest",
      "Front Delts",
      "Serratus Anterior",
      "Biceps"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/reverse-hand-push-up.mp4"
  },
  {
    "slug": "reverse-nordic-curl",
    "name": "Reverse Nordic Curl",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus"
    ],
    "tags": [
      "STRENGTH",
      "MOBILITY",
      "FUNCTIONAL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/reverse-nordic-curl.mp4"
  },
  {
    "slug": "reverse-wrist-push-up",
    "name": "Reverse Wrist Push-Up",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Forearm Extensors",
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Triceps",
      "Upper Chest",
      "Forearm Flexors",
      "Front Delts"
    ],
    "tags": [
      "STRENGTH",
      "MOBILITY",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/reverse-wrist-push-up.mp4"
  },
  {
    "slug": "ring-dips",
    "name": "Ring Dips",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Rings"
    ],
    "primaryMuscles": [
      "Lower Chest",
      "Serratus Anterior",
      "Triceps"
    ],
    "secondaryMuscles": [
      "Front Delts",
      "Mid Chest",
      "Upper Chest",
      "Side Delts"
    ],
    "tags": [
      "STRENGTH",
      "PUSH",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/ring-dips.mp4"
  },
  {
    "slug": "ring-face-pull",
    "name": "Ring Face Pull",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Rings"
    ],
    "primaryMuscles": [
      "Rear Delts"
    ],
    "secondaryMuscles": [
      "Middle Traps",
      "Infraspinatus",
      "Upper Traps"
    ],
    "tags": [
      "STRENGTH",
      "PULL",
      "REHAB",
      "FUNCTIONAL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/ring-face-pull.mp4"
  },
  {
    "slug": "ring-leg-curl",
    "name": "Ring Leg Curl",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Rings"
    ],
    "primaryMuscles": [
      "Hamstrings"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus"
    ],
    "tags": [
      "STRENGTH",
      "FUNCTIONAL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/ring-leg-curl.mp4"
  },
  {
    "slug": "ring-muscle-up",
    "name": "Ring Muscle Up",
    "categories": [
      "Biceps"
    ],
    "equipment": [
      "Rings"
    ],
    "primaryMuscles": [
      "Teres Major",
      "Teres Minor"
    ],
    "secondaryMuscles": [
      "Front Delts",
      "Serratus Anterior",
      "Triceps",
      "Lats",
      "Biceps"
    ],
    "tags": [
      "STRENGTH",
      "PULL",
      "FUNCTIONAL",
      "EXPLOSIVE"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/ring-muscle-up.mp4"
  },
  {
    "slug": "ring-pike",
    "name": "Ring Pike",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Rings"
    ],
    "primaryMuscles": [
      "Lower Abs"
    ],
    "secondaryMuscles": [
      "Upper Abs",
      "Hip Flexors",
      "Quadriceps",
      "Adductors",
      "Lats"
    ],
    "tags": [
      "CORE",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/ring-pike.mp4"
  },
  {
    "slug": "ring-push-up",
    "name": "Ring Push-Up",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Rings"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Triceps",
      "Upper Chest",
      "Serratus Anterior",
      "Front Delts"
    ],
    "tags": [
      "STRENGTH",
      "PUSH",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/ring-push-up.mp4"
  },
  {
    "slug": "ring-triceps-extension",
    "name": "Ring Triceps Extension",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Rings"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PUSH",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/ring-triceps-extension.mp4"
  },
  {
    "slug": "rings-pull-up",
    "name": "Rings Pull-Up",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Rings"
    ],
    "primaryMuscles": [
      "Lats"
    ],
    "secondaryMuscles": [
      "Teres Major",
      "Infraspinatus",
      "Lower Traps",
      "Teres Minor",
      "Biceps"
    ],
    "tags": [
      "STRENGTH",
      "PULL",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/rings-pull-up.mp4"
  },
  {
    "slug": "rocking-frog",
    "name": "Rocking Frog",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Adductors",
      "Gluteus Maximus",
      "Gluteus Medius",
      "Sartorius"
    ],
    "secondaryMuscles": [],
    "tags": [
      "MOBILITY",
      "STRETCH",
      "WARMUP"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/rocking-frog.mp4"
  },
  {
    "slug": "rocking-half-frog-stretch",
    "name": "Rocking Half Frog Stretch",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Adductors",
      "Hamstrings",
      "Sartorius"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus"
    ],
    "tags": [
      "MOBILITY",
      "STRETCH",
      "WARMUP"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/rocking-half-frog-stretch.mp4"
  },
  {
    "slug": "roll-calves",
    "name": "Roll Calves",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Gastrocnemius",
      "Soleus"
    ],
    "secondaryMuscles": [],
    "tags": [
      "MOBILITY",
      "STRETCH",
      "REHAB"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/roll-calves.mp4"
  },
  {
    "slug": "roll-foot",
    "name": "Roll Foot",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Tibialis Anterior"
    ],
    "secondaryMuscles": [],
    "tags": [
      "MOBILITY",
      "REHAB",
      "WARMUP"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/roll-foot.mp4"
  },
  {
    "slug": "romanian-deadlift",
    "name": "Romanian Deadlift",
    "categories": [
      "Gluteal"
    ],
    "equipment": [
      "Barbell"
    ],
    "primaryMuscles": [
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Spinal Erectors",
      "Hamstrings",
      "Gluteus Medius",
      "Forearm Flexors",
      "Quadriceps"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/romanian-deadlift.mp4"
  },
  {
    "slug": "rope-cable-hammer-curl",
    "name": "Rope Cable Hammer Curl",
    "categories": [
      "Biceps"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [
      "Brachioradialis",
      "Forearm Extensors",
      "Forearm Flexors"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/rope-cable-hammer-curl.mp4"
  },
  {
    "slug": "rope-straight-arm-lat-pulldown",
    "name": "Rope Straight-Arm Lat Pulldown",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Lats"
    ],
    "secondaryMuscles": [
      "Teres Major",
      "Teres Minor",
      "Rear Delts",
      "Infraspinatus",
      "Triceps"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/rope-straight-arm-lat-pulldown.mp4"
  },
  {
    "slug": "rope-triceps-pushdown",
    "name": "Rope Triceps Pushdown",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/rope-triceps-pushdown.mp4"
  },
  {
    "slug": "rotary-calf-raise",
    "name": "Rotary Calf Raise",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Soleus"
    ],
    "secondaryMuscles": [
      "Gastrocnemius"
    ],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/rotary-calf-raise.mp4"
  },
  {
    "slug": "rotary-torso",
    "name": "Rotary Torso",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Obliques"
    ],
    "secondaryMuscles": [
      "Lower Abs",
      "Upper Abs"
    ],
    "tags": [
      "STRENGTH",
      "CORE"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/rotary-torso.mp4"
  },
  {
    "slug": "rowing-machine",
    "name": "Rowing Machine",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Lats",
      "Lower Traps"
    ],
    "secondaryMuscles": [
      "Infraspinatus",
      "Teres Major",
      "Teres Minor",
      "Quadriceps",
      "Biceps"
    ],
    "tags": [
      "CARDIO",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/rowing-machine.mp4"
  },
  {
    "slug": "running",
    "name": "Running",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Cardio Machine"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gastrocnemius",
      "Gluteus Maximus",
      "Soleus",
      "Tibialis Anterior",
      "Obliques"
    ],
    "tags": [
      "CARDIO",
      "MOTOR",
      "FUNCTIONAL",
      "WARMUP"
    ],
    "mechanics": "COMPOUND",
    "laterality": "ALTERNATING",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/running.mp4"
  },
  {
    "slug": "saw-plank",
    "name": "Saw Plank",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Upper Abs",
      "Obliques",
      "Front Delts",
      "Lower Abs",
      "Quadriceps"
    ],
    "tags": [
      "CORE",
      "ISOMETRIC"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/saw-plank.mp4"
  },
  {
    "slug": "scapula-push-up",
    "name": "Scapula Push-Up",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Serratus Anterior"
    ],
    "secondaryMuscles": [
      "Middle Traps",
      "Lower Traps",
      "Upper Traps"
    ],
    "tags": [
      "MOBILITY",
      "REHAB",
      "WARMUP",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/scapula-push-up.mp4"
  },
  {
    "slug": "scissors",
    "name": "Scissors",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Lower Abs",
      "Upper Abs"
    ],
    "secondaryMuscles": [
      "Quadriceps"
    ],
    "tags": [
      "CORE",
      "MOBILITY",
      "BALANCE"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/scissors.mp4"
  },
  {
    "slug": "seal-row",
    "name": "Seal Row",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Barbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Middle Traps"
    ],
    "secondaryMuscles": [
      "Lower Traps",
      "Infraspinatus",
      "Teres Major",
      "Teres Minor",
      "Lats"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/seal-row.mp4"
  },
  {
    "slug": "seated-ab-cable-crunch",
    "name": "Seated Ab Cable Crunch",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Cable",
      "Bench"
    ],
    "primaryMuscles": [
      "Upper Abs"
    ],
    "secondaryMuscles": [
      "Lower Abs",
      "Obliques"
    ],
    "tags": [
      "STRENGTH",
      "CORE"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/seated-ab-cable-crunch.mp4"
  },
  {
    "slug": "seated-alternate-crunches",
    "name": "Seated Alternate Crunches",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Bench"
    ],
    "primaryMuscles": [
      "Upper Abs"
    ],
    "secondaryMuscles": [
      "Lower Abs",
      "Obliques"
    ],
    "tags": [
      "CORE",
      "FUNCTIONAL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "ALTERNATING",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/seated-alternate-crunches.mp4"
  },
  {
    "slug": "seated-arnold-dumbbell-press",
    "name": "Seated Arnold Dumbbell Press",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Front Delts"
    ],
    "secondaryMuscles": [
      "Side Delts",
      "Triceps",
      "Rear Delts"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/seated-arnold-dumbbell-press.mp4"
  },
  {
    "slug": "seated-band-hip-abduction",
    "name": "Seated Band Hip Abduction",
    "categories": [
      "Gluteal"
    ],
    "equipment": [
      "Resistance Band",
      "Bench"
    ],
    "primaryMuscles": [
      "Gluteus Medius"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "MOBILITY",
      "REHAB"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BAND",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/seated-band-hip-abduction.mp4"
  },
  {
    "slug": "seated-barbell-shoulder-press",
    "name": "Seated Barbell Shoulder Press",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Barbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Front Delts"
    ],
    "secondaryMuscles": [
      "Side Delts",
      "Triceps",
      "Upper Chest",
      "Mid Chest",
      "Rear Delts"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/seated-barbell-shoulder-press.mp4"
  },
  {
    "slug": "seated-barbell-twist",
    "name": "Seated Barbell Twist",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Barbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Obliques"
    ],
    "secondaryMuscles": [
      "Upper Abs",
      "Lower Abs"
    ],
    "tags": [
      "CORE",
      "FUNCTIONAL",
      "MOBILITY"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/seated-barbell-twist.mp4"
  },
  {
    "slug": "seated-bent-over-dumbbell-lateral-raise",
    "name": "Seated Bent Over Dumbbell Lateral Raise",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Rear Delts"
    ],
    "secondaryMuscles": [
      "Side Delts",
      "Infraspinatus",
      "Middle Traps",
      "Teres Major",
      "Teres Minor"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/seated-bent-over-dumbbell-lateral-raise.mp4"
  },
  {
    "slug": "seated-cable-chest-press",
    "name": "Seated Cable Chest Press",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Cable",
      "Bench"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Upper Chest",
      "Triceps",
      "Front Delts",
      "Serratus Anterior"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/seated-cable-chest-press.mp4"
  },
  {
    "slug": "seated-cable-fly",
    "name": "Seated Cable Fly",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Cable",
      "Bench"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Serratus Anterior",
      "Upper Chest",
      "Front Delts"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/seated-cable-fly.mp4"
  },
  {
    "slug": "seated-cable-horizontal-french-press",
    "name": "Seated Cable Horizontal French Press",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Cable",
      "Bench"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/seated-cable-horizontal-french-press.mp4"
  },
  {
    "slug": "seated-cable-low-row-neutral-grip",
    "name": "Seated Cable Low Row Neutral Grip",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Lats"
    ],
    "secondaryMuscles": [
      "Infraspinatus",
      "Lower Traps",
      "Teres Minor",
      "Teres Major",
      "Middle Traps"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/seated-cable-low-row-neutral-grip.mp4"
  },
  {
    "slug": "seated-cable-row",
    "name": "Seated Cable Row",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Middle Traps"
    ],
    "secondaryMuscles": [
      "Lats",
      "Lower Traps",
      "Infraspinatus",
      "Teres Major",
      "Teres Minor"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/seated-cable-row.mp4"
  },
  {
    "slug": "seated-cable-wide-grip-row",
    "name": "Seated Cable Wide Grip Row",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Lower Traps",
      "Middle Traps"
    ],
    "secondaryMuscles": [
      "Infraspinatus",
      "Teres Minor",
      "Teres Major",
      "Lats",
      "Rear Delts"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/seated-cable-wide-grip-row.mp4"
  },
  {
    "slug": "seated-cable-wrist-curl",
    "name": "Seated Cable Wrist Curl",
    "categories": [
      "Forearms"
    ],
    "equipment": [
      "Cable",
      "Bench"
    ],
    "primaryMuscles": [
      "Forearm Flexors"
    ],
    "secondaryMuscles": [
      "Brachioradialis"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/seated-cable-wrist-curl.mp4"
  },
  {
    "slug": "seated-calf-raise",
    "name": "Seated Calf Raise",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Soleus"
    ],
    "secondaryMuscles": [
      "Gastrocnemius"
    ],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/seated-calf-raise.mp4"
  },
  {
    "slug": "seated-chest-clam",
    "name": "Seated Chest Clam",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Lower Chest",
      "Mid Chest",
      "Upper Chest"
    ],
    "secondaryMuscles": [],
    "tags": [
      "MOBILITY",
      "STRETCH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/seated-chest-clam.mp4"
  },
  {
    "slug": "seated-cuban-press",
    "name": "Seated Cuban Press",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Front Delts"
    ],
    "secondaryMuscles": [
      "Side Delts",
      "Rear Delts",
      "Middle Traps",
      "Upper Traps"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/seated-cuban-press.mp4"
  },
  {
    "slug": "seated-dip-machine",
    "name": "Seated Dip Machine",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Mid Chest",
      "Front Delts",
      "Upper Chest",
      "Side Delts"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/seated-dip-machine.mp4"
  },
  {
    "slug": "seated-dumbbell-curl",
    "name": "Seated Dumbbell Curl",
    "categories": [
      "Biceps"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [
      "Brachioradialis",
      "Forearm Flexors",
      "Forearm Extensors"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/seated-dumbbell-curl.mp4"
  },
  {
    "slug": "seated-dumbbell-shoulder-press",
    "name": "Seated Dumbbell Shoulder Press",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Side Delts"
    ],
    "secondaryMuscles": [
      "Front Delts",
      "Rear Delts"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/seated-dumbbell-shoulder-press.mp4"
  },
  {
    "slug": "seated-dumbbell-shrugs",
    "name": "Seated Dumbbell Shrugs",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Upper Traps"
    ],
    "secondaryMuscles": [
      "Middle Traps",
      "Lower Traps"
    ],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/seated-dumbbell-shrugs.mp4"
  },
  {
    "slug": "seated-face-pull",
    "name": "Seated Face Pull",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Cable",
      "Bench"
    ],
    "primaryMuscles": [
      "Rear Delts"
    ],
    "secondaryMuscles": [
      "Middle Traps",
      "Infraspinatus",
      "Upper Traps"
    ],
    "tags": [
      "STRENGTH",
      "PULL",
      "REHAB",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/seated-face-pull.mp4"
  },
  {
    "slug": "seated-figure-4-stretch",
    "name": "Seated Figure 4 Stretch",
    "categories": [
      "Gluteal"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Gluteus Medius"
    ],
    "secondaryMuscles": [],
    "tags": [
      "MOBILITY",
      "STRETCH",
      "REHAB",
      "WARMUP"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/seated-figure-4-stretch.mp4"
  },
  {
    "slug": "seated-flutter-kick",
    "name": "Seated Flutter Kick",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Bench"
    ],
    "primaryMuscles": [
      "Upper Abs"
    ],
    "secondaryMuscles": [
      "Lower Abs",
      "Obliques"
    ],
    "tags": [
      "CORE",
      "CARDIO"
    ],
    "mechanics": "ISOLATION",
    "laterality": "ALTERNATING",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/seated-flutter-kick.mp4"
  },
  {
    "slug": "seated-forward-fold",
    "name": "Seated Forward Fold",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Gastrocnemius",
      "Hamstrings",
      "Soleus"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRETCH",
      "MOBILITY",
      "WARMUP"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/seated-forward-fold.mp4"
  },
  {
    "slug": "seated-good-morning",
    "name": "Seated Good Morning",
    "categories": [
      "Gluteal"
    ],
    "equipment": [
      "Barbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Spinal Erectors",
      "Gluteus Medius"
    ],
    "tags": [
      "STRENGTH",
      "MOBILITY",
      "CORE"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/seated-good-morning.mp4"
  },
  {
    "slug": "seated-hammer-curl",
    "name": "Seated Hammer Curl",
    "categories": [
      "Biceps"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [
      "Brachioradialis",
      "Forearm Extensors",
      "Forearm Flexors"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/seated-hammer-curl.mp4"
  },
  {
    "slug": "seated-hip-abduction",
    "name": "Seated Hip Abduction",
    "categories": [
      "Gluteal"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Gluteus Medius"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus"
    ],
    "tags": [
      "STRENGTH",
      "MOBILITY",
      "REHAB"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/seated-hip-abduction.mp4"
  },
  {
    "slug": "seated-hip-adduction",
    "name": "Seated Hip Adduction",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Adductors"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/seated-hip-adduction.mp4"
  },
  {
    "slug": "seated-incline-biceps-curl",
    "name": "Seated Incline Biceps Curl",
    "categories": [
      "Biceps"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/seated-incline-biceps-curl.mp4"
  },
  {
    "slug": "seated-leg-curl",
    "name": "Seated Leg Curl",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Hamstrings"
    ],
    "secondaryMuscles": [
      "Gastrocnemius"
    ],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/seated-leg-curl.mp4"
  },
  {
    "slug": "seated-leg-extension-machine",
    "name": "Seated Leg Extension Machine",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/seated-leg-extension-machine.mp4"
  },
  {
    "slug": "seated-leg-raise",
    "name": "Seated Leg Raise",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Bench"
    ],
    "primaryMuscles": [
      "Upper Abs"
    ],
    "secondaryMuscles": [
      "Lower Abs",
      "Obliques"
    ],
    "tags": [
      "CORE"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/seated-leg-raise.mp4"
  },
  {
    "slug": "seated-machine-trunk-rotation",
    "name": "Seated Machine Trunk Rotation",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Obliques"
    ],
    "secondaryMuscles": [
      "Upper Abs",
      "Lower Abs"
    ],
    "tags": [
      "STRENGTH",
      "CORE",
      "MOBILITY"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/seated-machine-trunk-rotation.mp4"
  },
  {
    "slug": "seated-reverse-circle-crunches",
    "name": "Seated Reverse Circle Crunches",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Bench"
    ],
    "primaryMuscles": [
      "Upper Abs"
    ],
    "secondaryMuscles": [
      "Lower Abs",
      "Obliques",
      "Adductors"
    ],
    "tags": [
      "CORE",
      "STRENGTH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/seated-reverse-circle-crunches.mp4"
  },
  {
    "slug": "seated-shoulder-external-rotation",
    "name": "Seated Shoulder External Rotation",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Rear Delts"
    ],
    "secondaryMuscles": [
      "Side Delts",
      "Front Delts"
    ],
    "tags": [
      "REHAB",
      "MOBILITY"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/seated-shoulder-external-rotation.mp4"
  },
  {
    "slug": "seated-shoulder-press-neutral-grip",
    "name": "Seated Shoulder Press Neutral Grip",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Front Delts"
    ],
    "secondaryMuscles": [
      "Side Delts",
      "Triceps"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/seated-shoulder-press-neutral-grip.mp4"
  },
  {
    "slug": "seated-single-leg-curl",
    "name": "Seated Single Leg Curl",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Hamstrings"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "REHAB"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/seated-single-leg-curl.mp4"
  },
  {
    "slug": "seated-single-leg-hamstring-stretch",
    "name": "Seated Single Leg Hamstring Stretch",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Hamstrings"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRETCH",
      "MOBILITY",
      "WARMUP"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/seated-single-leg-hamstring-stretch.mp4"
  },
  {
    "slug": "seated-triceps-bench-dip",
    "name": "Seated Triceps Bench Dip",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Bench"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [
      "Front Delts",
      "Lower Chest",
      "Mid Chest",
      "Upper Chest",
      "Serratus Anterior"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/seated-triceps-bench-dip.mp4"
  },
  {
    "slug": "shoulder-tap",
    "name": "Shoulder Tap",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Lower Chest",
      "Mid Chest",
      "Upper Chest"
    ],
    "secondaryMuscles": [
      "Front Delts",
      "Side Delts",
      "Lower Abs",
      "Obliques",
      "Triceps"
    ],
    "tags": [
      "CORE",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "ALTERNATING",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/shoulder-tap.mp4"
  },
  {
    "slug": "shoulderstand-pose",
    "name": "Shoulderstand Pose",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Lower Abs"
    ],
    "secondaryMuscles": [
      "Upper Abs",
      "Obliques"
    ],
    "tags": [
      "BALANCE",
      "CORE",
      "ISOMETRIC"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/shoulderstand-pose.mp4"
  },
  {
    "slug": "side-crunch",
    "name": "Side Crunch",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Bench"
    ],
    "primaryMuscles": [
      "Obliques"
    ],
    "secondaryMuscles": [
      "Upper Abs",
      "Lower Abs"
    ],
    "tags": [
      "CORE"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/side-crunch.mp4"
  },
  {
    "slug": "side-leg-swings",
    "name": "Side Leg Swings",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Adductors",
      "Gluteus Medius"
    ],
    "secondaryMuscles": [],
    "tags": [
      "MOBILITY",
      "WARMUP",
      "BALANCE"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/side-leg-swings.mp4"
  },
  {
    "slug": "side-lunges",
    "name": "Side Lunges",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Gluteus Medius",
      "Soleus",
      "Sartorius"
    ],
    "tags": [
      "STRENGTH",
      "MOBILITY",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/side-lunges.mp4"
  },
  {
    "slug": "side-lying-hip-abduction",
    "name": "Side Lying Hip Abduction",
    "categories": [
      "Gluteal"
    ],
    "equipment": [
      "Bench"
    ],
    "primaryMuscles": [
      "Gluteus Medius"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "MOBILITY",
      "REHAB"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/side-lying-hip-abduction.mp4"
  },
  {
    "slug": "side-lying-quadriceps-stretch",
    "name": "Side Lying Quadriceps Stretch",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRETCH",
      "MOBILITY",
      "REHAB",
      "WARMUP"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/side-lying-quadriceps-stretch.mp4"
  },
  {
    "slug": "side-plank",
    "name": "Side Plank",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Obliques"
    ],
    "secondaryMuscles": [
      "Lower Abs",
      "Upper Abs"
    ],
    "tags": [
      "CORE",
      "BALANCE",
      "ISOMETRIC"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/side-plank.mp4"
  },
  {
    "slug": "side-plank-clamshell",
    "name": "Side Plank Clamshell",
    "categories": [
      "Gluteal"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Gluteus Medius"
    ],
    "secondaryMuscles": [
      "Obliques",
      "Adductors",
      "Spinal Erectors",
      "Lower Abs",
      "Upper Abs"
    ],
    "tags": [
      "CORE",
      "BALANCE",
      "ISOMETRIC"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/side-plank-clamshell.mp4"
  },
  {
    "slug": "side-plank-hip-abduction",
    "name": "Side Plank Hip Abduction",
    "categories": [
      "Gluteal"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Gluteus Medius"
    ],
    "secondaryMuscles": [
      "Obliques"
    ],
    "tags": [
      "STRENGTH",
      "CORE",
      "BALANCE"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/side-plank-hip-abduction.mp4"
  },
  {
    "slug": "single-dumbbell-curl",
    "name": "Single Dumbbell Curl",
    "categories": [
      "Biceps"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/single-dumbbell-curl.mp4"
  },
  {
    "slug": "single-leg-box-jump",
    "name": "Single-Leg Box Jump",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Other"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gastrocnemius",
      "Soleus",
      "Gluteus Maximus",
      "Gluteus Medius",
      "Tibialis Anterior"
    ],
    "tags": [
      "PLYOMETRIC",
      "BALANCE",
      "EXPLOSIVE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/single-leg-box-jump.mp4"
  },
  {
    "slug": "single-leg-cable-leg-curl",
    "name": "Single-Leg Cable Leg Curl",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Hamstrings"
    ],
    "secondaryMuscles": [
      "Gastrocnemius",
      "Soleus"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/single-leg-cable-leg-curl.mp4"
  },
  {
    "slug": "single-leg-calf-raise",
    "name": "Single-Leg Calf Raise",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Gastrocnemius"
    ],
    "secondaryMuscles": [
      "Soleus"
    ],
    "tags": [
      "STRENGTH",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/single-leg-calf-raise.mp4"
  },
  {
    "slug": "single-leg-calf-raise-with-dumbbell",
    "name": "Single-Leg Calf Raise with Dumbbell",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Gastrocnemius"
    ],
    "secondaryMuscles": [
      "Soleus"
    ],
    "tags": [
      "STRENGTH",
      "BALANCE"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/single-leg-calf-raise-with-dumbbell.mp4"
  },
  {
    "slug": "single-leg-deadlift",
    "name": "Single-Leg Deadlift",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Dumbbell",
      "Kettlebell",
      "Barbell"
    ],
    "primaryMuscles": [
      "Spinal Erectors"
    ],
    "secondaryMuscles": [
      "Hamstrings",
      "Gluteus Maximus"
    ],
    "tags": [
      "STRENGTH",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/single-leg-deadlift.mp4"
  },
  {
    "slug": "single-leg-dumbbell-deadlift",
    "name": "Single Leg Dumbbell Deadlift",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Spinal Erectors"
    ],
    "secondaryMuscles": [
      "Hamstrings",
      "Gluteus Maximus",
      "Gluteus Medius"
    ],
    "tags": [
      "STRENGTH",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/single-leg-dumbbell-deadlift.mp4"
  },
  {
    "slug": "single-leg-extension",
    "name": "Single-Leg Extension",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Sartorius"
    ],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/single-leg-extension.mp4"
  },
  {
    "slug": "single-leg-lying-curl",
    "name": "Single-Leg Lying Curl",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Gluteus Maximus",
      "Gluteus Medius",
      "Hamstrings"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "BALANCE",
      "REHAB"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/single-leg-lying-curl.mp4"
  },
  {
    "slug": "single-leg-press",
    "name": "Single Leg Press",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Sartorius",
      "Hamstrings"
    ],
    "tags": [
      "STRENGTH",
      "PUSH",
      "BALANCE"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/single-leg-press.mp4"
  },
  {
    "slug": "single-leg-romanian-deadlift",
    "name": "Single Leg Romanian Deadlift",
    "categories": [
      "Gluteal"
    ],
    "equipment": [
      "Dumbbell",
      "Kettlebell",
      "Barbell"
    ],
    "primaryMuscles": [
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Hamstrings",
      "Gluteus Medius",
      "Spinal Erectors",
      "Lower Abs",
      "Obliques"
    ],
    "tags": [
      "STRENGTH",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/single-leg-romanian-deadlift.mp4"
  },
  {
    "slug": "single-leg-seated-calf-machine-raise",
    "name": "Single Leg Seated Calf Machine Raise",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Soleus"
    ],
    "secondaryMuscles": [
      "Gastrocnemius"
    ],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/single-leg-seated-calf-machine-raise.mp4"
  },
  {
    "slug": "single-leg-seated-calf-raise-with-dumbbell",
    "name": "Single-Leg Seated Calf Raise with Dumbbell",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Soleus"
    ],
    "secondaryMuscles": [
      "Gastrocnemius"
    ],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/single-leg-seated-calf-raise-with-dumbbell.mp4"
  },
  {
    "slug": "single-leg-smith-calf-raise",
    "name": "Single Leg Smith Calf Raise",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Smith Machine"
    ],
    "primaryMuscles": [
      "Gastrocnemius"
    ],
    "secondaryMuscles": [
      "Soleus"
    ],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/single-leg-smith-calf-raise.mp4"
  },
  {
    "slug": "single-leg-weighted-glute-bridge",
    "name": "Single Leg Weighted Glute Bridge",
    "categories": [
      "Gluteal"
    ],
    "equipment": [
      "Dumbbell",
      "Weight Plate"
    ],
    "primaryMuscles": [
      "Gluteus Maximus",
      "Gluteus Medius"
    ],
    "secondaryMuscles": [
      "Quadriceps",
      "Hamstrings"
    ],
    "tags": [
      "STRENGTH",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "WEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/single-leg-weighted-glute-bridge.mp4"
  },
  {
    "slug": "sissy-squat",
    "name": "Sissy Squat",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Sartorius",
      "Gluteus Maximus",
      "Gluteus Medius",
      "Lower Abs",
      "Obliques"
    ],
    "tags": [
      "STRENGTH",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/sissy-squat.mp4"
  },
  {
    "slug": "sit-up",
    "name": "Sit Up",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Upper Abs"
    ],
    "secondaryMuscles": [
      "Lower Abs",
      "Obliques",
      "Quadriceps"
    ],
    "tags": [
      "CORE"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/sit-up.mp4"
  },
  {
    "slug": "sitting-twist",
    "name": "Sitting Twist",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Obliques"
    ],
    "secondaryMuscles": [
      "Lower Abs",
      "Upper Abs"
    ],
    "tags": [
      "CORE",
      "MOBILITY"
    ],
    "mechanics": "ISOLATION",
    "laterality": "ALTERNATING",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/sitting-twist.mp4"
  },
  {
    "slug": "ski-ergometer",
    "name": "Ski Ergometer",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [
      "Infraspinatus",
      "Lats",
      "Lower Traps",
      "Teres Major",
      "Teres Minor"
    ],
    "tags": [
      "CARDIO",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "ALTERNATING",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/ski-ergometer.mp4"
  },
  {
    "slug": "sliding-leg-curl",
    "name": "Sliding Leg Curl",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Bench"
    ],
    "primaryMuscles": [
      "Hamstrings"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Gastrocnemius",
      "Lower Abs",
      "Obliques",
      "Spinal Erectors"
    ],
    "tags": [
      "STRENGTH",
      "MOBILITY",
      "REHAB"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/sliding-leg-curl.mp4"
  },
  {
    "slug": "smith-bench-press",
    "name": "Smith Bench Press",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Smith Machine",
      "Bench"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Serratus Anterior",
      "Upper Chest"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/smith-bench-press.mp4"
  },
  {
    "slug": "smith-bent-over-row",
    "name": "Smith Bent Over Row",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Smith Machine"
    ],
    "primaryMuscles": [
      "Lats"
    ],
    "secondaryMuscles": [
      "Lower Traps",
      "Infraspinatus",
      "Middle Traps",
      "Teres Major",
      "Teres Minor"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/smith-bent-over-row.mp4"
  },
  {
    "slug": "smith-calf-raises",
    "name": "Smith Calf Raises",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Smith Machine"
    ],
    "primaryMuscles": [
      "Gastrocnemius",
      "Soleus"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/smith-calf-raises.mp4"
  },
  {
    "slug": "smith-chair-squat",
    "name": "Smith Chair Squat",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Smith Machine"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Sartorius",
      "Adductors",
      "Hamstrings",
      "Spinal Erectors"
    ],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/smith-chair-squat.mp4"
  },
  {
    "slug": "smith-front-squat",
    "name": "Smith Front Squat",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Smith Machine"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Sartorius",
      "Spinal Erectors",
      "Adductors",
      "Gluteus Medius"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/smith-front-squat.mp4"
  },
  {
    "slug": "smith-hack-squat",
    "name": "Smith Hack Squat",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Smith Machine"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Gluteus Medius",
      "Sartorius"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/smith-hack-squat.mp4"
  },
  {
    "slug": "smith-incline-chest-press",
    "name": "Smith Incline Chest Press",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Smith Machine",
      "Bench"
    ],
    "primaryMuscles": [
      "Upper Chest"
    ],
    "secondaryMuscles": [
      "Mid Chest",
      "Triceps",
      "Lower Chest",
      "Front Delts"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/smith-incline-chest-press.mp4"
  },
  {
    "slug": "smith-kneeling-hip-thrust",
    "name": "Smith Kneeling Hip Thrust",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Smith Machine"
    ],
    "primaryMuscles": [
      "Gluteus Maximus",
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Medius"
    ],
    "tags": [
      "STRENGTH",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/smith-kneeling-hip-thrust.mp4"
  },
  {
    "slug": "smith-machibe-glute-kickback",
    "name": "Smith Machibe Glute Kickback",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Smith Machine"
    ],
    "primaryMuscles": [
      "Hamstrings"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/smith-machibe-glute-kickback.mp4"
  },
  {
    "slug": "smith-machine-good-morning",
    "name": "Smith Machine Good Morning",
    "categories": [
      "Gluteal"
    ],
    "equipment": [
      "Smith Machine"
    ],
    "primaryMuscles": [
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Spinal Erectors",
      "Gluteus Medius",
      "Hamstrings"
    ],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/smith-machine-good-morning.mp4"
  },
  {
    "slug": "smith-machine-upright-row",
    "name": "Smith Machine Upright Row",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Smith Machine"
    ],
    "primaryMuscles": [
      "Side Delts"
    ],
    "secondaryMuscles": [
      "Front Delts",
      "Rear Delts",
      "Brachioradialis"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/smith-machine-upright-row.mp4"
  },
  {
    "slug": "smith-rear-lunge",
    "name": "Smith Rear Lunge",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Smith Machine"
    ],
    "primaryMuscles": [
      "Gluteus Maximus",
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Medius"
    ],
    "tags": [
      "STRENGTH",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/smith-rear-lunge.mp4"
  },
  {
    "slug": "smith-romanian-deadlift",
    "name": "Smith Romanian Deadlift",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Smith Machine"
    ],
    "primaryMuscles": [
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Hamstrings",
      "Spinal Erectors",
      "Lower Abs",
      "Obliques",
      "Upper Abs"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/smith-romanian-deadlift.mp4"
  },
  {
    "slug": "smith-seated-behind-neck-press",
    "name": "Smith Seated Behind Neck Press",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Smith Machine"
    ],
    "primaryMuscles": [
      "Front Delts",
      "Side Delts"
    ],
    "secondaryMuscles": [
      "Upper Chest",
      "Triceps",
      "Rear Delts"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/smith-seated-behind-neck-press.mp4"
  },
  {
    "slug": "smith-seated-calf-raise",
    "name": "Smith Seated Calf Raise",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Smith Machine",
      "Bench"
    ],
    "primaryMuscles": [
      "Soleus"
    ],
    "secondaryMuscles": [
      "Gastrocnemius"
    ],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/smith-seated-calf-raise.mp4"
  },
  {
    "slug": "smith-shoulder-press",
    "name": "Smith Shoulder Press",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Smith Machine"
    ],
    "primaryMuscles": [
      "Front Delts"
    ],
    "secondaryMuscles": [
      "Side Delts",
      "Upper Chest",
      "Triceps"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/smith-shoulder-press.mp4"
  },
  {
    "slug": "smith-shoulder-shrug",
    "name": "Smith Shoulder Shrug",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Smith Machine"
    ],
    "primaryMuscles": [
      "Upper Traps"
    ],
    "secondaryMuscles": [
      "Middle Traps"
    ],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/smith-shoulder-shrug.mp4"
  },
  {
    "slug": "smith-split-squat",
    "name": "Smith Split Squat",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Smith Machine"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Gluteus Medius",
      "Soleus"
    ],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/smith-split-squat.mp4"
  },
  {
    "slug": "smith-squat",
    "name": "Smith Squat",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Smith Machine"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Gluteus Medius",
      "Sartorius"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/smith-squat.mp4"
  },
  {
    "slug": "smith-squat-to-bench",
    "name": "Smith Squat To Bench",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Smith Machine",
      "Bench"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Gluteus Medius"
    ],
    "tags": [
      "STRENGTH",
      "FUNCTIONAL",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/smith-squat-to-bench.mp4"
  },
  {
    "slug": "smith-zercher-squat",
    "name": "Smith Zercher Squat",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Smith Machine"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Gluteus Medius",
      "Sartorius"
    ],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/smith-zercher-squat.mp4"
  },
  {
    "slug": "snatch",
    "name": "Snatch",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Barbell"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Gluteus Medius",
      "Hamstrings",
      "Infraspinatus",
      "Lower Traps"
    ],
    "tags": [
      "STRENGTH",
      "EXPLOSIVE",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/snatch.mp4"
  },
  {
    "slug": "snatch-pull",
    "name": "Snatch Pull",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Barbell"
    ],
    "primaryMuscles": [
      "Gluteus Maximus",
      "Quadriceps",
      "Upper Traps"
    ],
    "secondaryMuscles": [
      "Hamstrings",
      "Side Delts",
      "Biceps",
      "Middle Traps",
      "Spinal Erectors"
    ],
    "tags": [
      "STRENGTH",
      "EXPLOSIVE",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/snatch-pull.mp4"
  },
  {
    "slug": "spider-hammer-curl",
    "name": "Spider Hammer Curl",
    "categories": [
      "Biceps"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [
      "Brachioradialis"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/spider-hammer-curl.mp4"
  },
  {
    "slug": "split-squat",
    "name": "Split Squat",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Barbell"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Sartorius",
      "Adductors",
      "Hamstrings",
      "Gluteus Medius"
    ],
    "tags": [
      "STRENGTH",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/split-squat.mp4"
  },
  {
    "slug": "split-squat-front-foot-elevated",
    "name": "Split Squat Front Foot Elevated",
    "categories": [
      "Legs",
      "Gluteal"
    ],
    "equipment": [
      "Other"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Gluteus Medius"
    ],
    "tags": [
      "STRENGTH",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/split-squat-front-foot-elevated.mp4"
  },
  {
    "slug": "spoto-press",
    "name": "Spoto Press",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Barbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Upper Chest",
      "Triceps",
      "Front Delts",
      "Serratus Anterior"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "not-provided"
  },
  {
    "slug": "squat",
    "name": "Squat",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Gluteus Medius",
      "Sartorius",
      "Gastrocnemius",
      "Soleus"
    ],
    "tags": [
      "STRENGTH",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/squat.mp4"
  },
  {
    "slug": "stability-ball-crunch",
    "name": "Stability Ball Crunch",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Upper Abs"
    ],
    "secondaryMuscles": [
      "Lower Abs",
      "Obliques"
    ],
    "tags": [
      "CORE",
      "BALANCE"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/stability-ball-crunch.mp4"
  },
  {
    "slug": "stabillity-ball-wall-squat",
    "name": "Stabillity Ball Wall Squat",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Gluteus Medius",
      "Gastrocnemius",
      "Soleus"
    ],
    "tags": [
      "STRENGTH",
      "BALANCE",
      "FUNCTIONAL",
      "REHAB"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/stabillity-ball-wall-squat.mp4"
  },
  {
    "slug": "stacionary-bike",
    "name": "Stacionary Bike",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Gluteus Medius",
      "Sartorius",
      "Hamstrings"
    ],
    "tags": [
      "CARDIO",
      "WARMUP"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/stacionary-bike.mp4"
  },
  {
    "slug": "stair-climber",
    "name": "Stair Climber",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Cardio Machine"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Gastrocnemius",
      "Soleus",
      "Hamstrings",
      "Gluteus Medius"
    ],
    "tags": [
      "CARDIO",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "ALTERNATING",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/stair-climber.mp4"
  },
  {
    "slug": "standing-air-bike",
    "name": "Standing Air Bike",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Hip Flexors"
    ],
    "secondaryMuscles": [
      "Obliques",
      "Upper Abs",
      "Lower Abs"
    ],
    "tags": [
      "CORE",
      "CARDIO",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "ALTERNATING",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/standing-air-bike.mp4"
  },
  {
    "slug": "standing-cable-ab-crunch",
    "name": "Standing Cable Ab Crunch",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Upper Abs"
    ],
    "secondaryMuscles": [
      "Lower Abs",
      "Obliques"
    ],
    "tags": [
      "STRENGTH",
      "CORE"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/standing-cable-ab-crunch.mp4"
  },
  {
    "slug": "standing-cable-chest-press",
    "name": "Standing Cable Chest Press",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Upper Chest",
      "Triceps",
      "Serratus Anterior",
      "Front Delts"
    ],
    "tags": [
      "STRENGTH",
      "PUSH",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/standing-cable-chest-press.mp4"
  },
  {
    "slug": "standing-cable-low-chest-press",
    "name": "Standing Cable Low Chest Press",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Lower Chest"
    ],
    "secondaryMuscles": [
      "Mid Chest",
      "Triceps",
      "Serratus Anterior",
      "Upper Chest",
      "Front Delts"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/standing-cable-low-chest-press.mp4"
  },
  {
    "slug": "standing-calf-raise",
    "name": "Standing Calf Raise",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Gastrocnemius"
    ],
    "secondaryMuscles": [
      "Soleus"
    ],
    "tags": [
      "STRENGTH",
      "BALANCE"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/standing-calf-raise.mp4"
  },
  {
    "slug": "standing-chest-opener",
    "name": "Standing Chest Opener",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Lower Chest",
      "Mid Chest",
      "Serratus Anterior",
      "Upper Chest"
    ],
    "secondaryMuscles": [],
    "tags": [
      "MOBILITY",
      "STRETCH",
      "WARMUP"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/standing-chest-opener.mp4"
  },
  {
    "slug": "standing-cuban-press",
    "name": "Standing Cuban Press",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Front Delts"
    ],
    "secondaryMuscles": [
      "Side Delts",
      "Brachioradialis",
      "Rear Delts",
      "Biceps",
      "Triceps"
    ],
    "tags": [
      "STRENGTH",
      "MOBILITY",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/standing-cuban-press.mp4"
  },
  {
    "slug": "standing-downward-dog",
    "name": "Standing Downward Dog",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Lower Chest"
    ],
    "secondaryMuscles": [
      "Mid Chest",
      "Serratus Anterior",
      "Teres Major",
      "Triceps",
      "Upper Chest"
    ],
    "tags": [
      "MOBILITY",
      "STRETCH",
      "BALANCE",
      "WARMUP"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/standing-downward-dog.mp4"
  },
  {
    "slug": "standing-dumbbell-shoulder-press",
    "name": "Standing Dumbbell Shoulder Press",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Front Delts"
    ],
    "secondaryMuscles": [
      "Side Delts",
      "Triceps",
      "Rear Delts"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/standing-dumbbell-shoulder-press.mp4"
  },
  {
    "slug": "standing-forward-bend",
    "name": "Standing Forward Bend",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Hamstrings"
    ],
    "secondaryMuscles": [],
    "tags": [
      "MOBILITY",
      "STRETCH",
      "BALANCE",
      "WARMUP"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/standing-forward-bend.mp4"
  },
  {
    "slug": "standing-hip-abduction",
    "name": "Standing Hip Abduction",
    "categories": [
      "Gluteal"
    ],
    "equipment": [
      "Resistance Band"
    ],
    "primaryMuscles": [
      "Gluteus Medius"
    ],
    "secondaryMuscles": [],
    "tags": [
      "MOBILITY",
      "BALANCE",
      "REHAB"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/standing-hip-abduction.mp4"
  },
  {
    "slug": "standing-incline-band-chest-fly",
    "name": "Standing Incline Band Chest Fly",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Resistance Band"
    ],
    "primaryMuscles": [
      "Upper Chest"
    ],
    "secondaryMuscles": [
      "Mid Chest"
    ],
    "tags": [
      "STRENGTH",
      "PUSH",
      "FUNCTIONAL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "BAND",
    "mediaStatus": "not-provided"
  },
  {
    "slug": "standing-leg-curl",
    "name": "Standing Leg Curl",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Hamstrings"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/standing-leg-curl.mp4"
  },
  {
    "slug": "standing-one-dumbbell-french-press",
    "name": "Standing One Dumbbell French Press",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/standing-one-dumbbell-french-press.mp4"
  },
  {
    "slug": "standing-overhead-barbell-triceps-extension",
    "name": "Standing Overhead Barbell Triceps Extension",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Barbell"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/standing-overhead-barbell-triceps-extension.mp4"
  },
  {
    "slug": "standing-press-around",
    "name": "Standing Press Around",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Upper Chest",
      "Lower Chest",
      "Serratus Anterior",
      "Triceps"
    ],
    "tags": [
      "STRENGTH",
      "PUSH",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/standing-press-around.mp4"
  },
  {
    "slug": "standing-quadriceps-stretch",
    "name": "Standing Quadriceps Stretch",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRETCH",
      "MOBILITY",
      "BALANCE",
      "WARMUP"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/standing-quadriceps-stretch.mp4"
  },
  {
    "slug": "standing-russian-twist",
    "name": "Standing Russian Twist",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Medicine Ball",
      "Dumbbell",
      "Kettlebell",
      "Weight Plate"
    ],
    "primaryMuscles": [
      "Obliques"
    ],
    "secondaryMuscles": [
      "Upper Abs",
      "Lower Abs"
    ],
    "tags": [
      "CORE",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "ALTERNATING",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/standing-russian-twist.mp4"
  },
  {
    "slug": "standing-side-lat-stretch",
    "name": "Standing Side Lat Stretch",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Lats",
      "Teres Major"
    ],
    "secondaryMuscles": [
      "Obliques"
    ],
    "tags": [
      "MOBILITY",
      "STRETCH",
      "WARMUP"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/standing-side-lat-stretch.mp4"
  },
  {
    "slug": "standing-tibialis-raise",
    "name": "Standing Tibialis Raise",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Tibialis Anterior"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/standing-tibialis-raise.mp4"
  },
  {
    "slug": "static-front-hold",
    "name": "Static Front Hold",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Dumbbell",
      "Kettlebell",
      "Weight Plate",
      "Medicine Ball"
    ],
    "primaryMuscles": [
      "Front Delts"
    ],
    "secondaryMuscles": [
      "Rear Delts",
      "Triceps",
      "Mid Chest",
      "Side Delts",
      "Upper Chest"
    ],
    "tags": [
      "CORE",
      "ISOMETRIC",
      "BALANCE"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/static-front-hold.mp4"
  },
  {
    "slug": "straddle-planche",
    "name": "Straddle Planche",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Other"
    ],
    "primaryMuscles": [
      "Front Delts"
    ],
    "secondaryMuscles": [
      "Side Delts",
      "Upper Chest",
      "Biceps",
      "Forearm Flexors",
      "Lats"
    ],
    "tags": [
      "STRENGTH",
      "CORE",
      "BALANCE",
      "ISOMETRIC"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/straddle-planche.mp4"
  },
  {
    "slug": "straight-arm-lat-pulldown",
    "name": "Straight-Arm Lat Pulldown",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Lats"
    ],
    "secondaryMuscles": [
      "Teres Major",
      "Lower Traps",
      "Infraspinatus",
      "Middle Traps",
      "Teres Minor"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/straight-arm-lat-pulldown.mp4"
  },
  {
    "slug": "straight-bar-dips",
    "name": "Straight Bar Dips",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Pull-Up Bar"
    ],
    "primaryMuscles": [
      "Lower Chest"
    ],
    "secondaryMuscles": [
      "Triceps",
      "Serratus Anterior",
      "Front Delts",
      "Mid Chest",
      "Side Delts"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/straight-bar-dips.mp4"
  },
  {
    "slug": "straight-leg-raise-on-dip-bars",
    "name": "Straight Leg Raise on Dip Bars",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Other"
    ],
    "primaryMuscles": [
      "Upper Abs"
    ],
    "secondaryMuscles": [
      "Lower Abs",
      "Obliques",
      "Serratus Anterior"
    ],
    "tags": [
      "STRENGTH",
      "CORE"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/straight-leg-raise-on-dip-bars.mp4"
  },
  {
    "slug": "sumo-deadlift",
    "name": "Sumo Deadlift",
    "categories": [
      "Gluteal"
    ],
    "equipment": [
      "Barbell",
      "Weight Plate"
    ],
    "primaryMuscles": [
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Adductors",
      "Gluteus Medius",
      "Hamstrings",
      "Quadriceps",
      "Spinal Erectors"
    ],
    "tags": [
      "STRENGTH",
      "PULL",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/sumo-deadlift.mp4"
  },
  {
    "slug": "sumo-squat",
    "name": "Sumo Squat",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Dumbbell",
      "Kettlebell",
      "Barbell"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Gluteus Medius",
      "Sartorius",
      "Adductors",
      "Gastrocnemius"
    ],
    "tags": [
      "STRENGTH",
      "MOBILITY",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/sumo-squat.mp4"
  },
  {
    "slug": "sumo-squat-off-stepbox",
    "name": "Sumo Squat off Stepbox",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Other"
    ],
    "primaryMuscles": [
      "Adductors",
      "Gluteus Maximus",
      "Gluteus Medius",
      "Hamstrings",
      "Sartorius"
    ],
    "secondaryMuscles": [
      "Quadriceps"
    ],
    "tags": [
      "STRENGTH",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "WEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/sumo-squat-off-stepbox.mp4"
  },
  {
    "slug": "sumo-squat-with-smith",
    "name": "Sumo Squat With Smith",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Smith Machine"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Medius",
      "Sartorius",
      "Adductors",
      "Gluteus Maximus",
      "Hamstrings"
    ],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/sumo-squat-with-smith.mp4"
  },
  {
    "slug": "superman",
    "name": "Superman",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Spinal Erectors"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Hamstrings",
      "Infraspinatus",
      "Rear Delts",
      "Upper Traps"
    ],
    "tags": [
      "CORE",
      "MOBILITY",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/superman.mp4"
  },
  {
    "slug": "superman-push-up",
    "name": "Superman Push-Up",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Rings"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Triceps",
      "Serratus Anterior",
      "Upper Chest",
      "Teres Major"
    ],
    "tags": [
      "STRENGTH",
      "PUSH",
      "CORE"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/superman-push-up.mp4"
  },
  {
    "slug": "suspension-chest-fly",
    "name": "Suspension Chest Fly",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Suspension Trainer"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Serratus Anterior",
      "Lower Chest",
      "Upper Chest",
      "Front Delts",
      "Triceps"
    ],
    "tags": [
      "STRENGTH",
      "FUNCTIONAL",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/suspension-chest-fly.mp4"
  },
  {
    "slug": "suspension-inverted-row",
    "name": "Suspension Inverted Row",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Suspension Trainer"
    ],
    "primaryMuscles": [
      "Lats"
    ],
    "secondaryMuscles": [
      "Teres Minor",
      "Middle Traps",
      "Teres Major",
      "Infraspinatus",
      "Lower Traps"
    ],
    "tags": [
      "STRENGTH",
      "PULL",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/suspension-inverted-row.mp4"
  },
  {
    "slug": "suspension-row",
    "name": "Suspension Row",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Suspension Trainer"
    ],
    "primaryMuscles": [
      "Lats"
    ],
    "secondaryMuscles": [
      "Teres Major",
      "Teres Minor",
      "Infraspinatus",
      "Lower Traps",
      "Rear Delts"
    ],
    "tags": [
      "STRENGTH",
      "PULL",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/suspension-row.mp4"
  },
  {
    "slug": "suspension-triceps-extension",
    "name": "Suspension Triceps Extension",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Suspension Trainer"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PUSH",
      "FUNCTIONAL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/suspension-triceps-extension.mp4"
  },
  {
    "slug": "suspension-v-ups",
    "name": "Suspension V-Ups",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Suspension Trainer"
    ],
    "primaryMuscles": [
      "Upper Abs"
    ],
    "secondaryMuscles": [
      "Lower Abs",
      "Quadriceps",
      "Obliques"
    ],
    "tags": [
      "CORE",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/suspension-v-ups.mp4"
  },
  {
    "slug": "svend-press",
    "name": "Svend Press",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Weight Plate"
    ],
    "primaryMuscles": [
      "Upper Chest"
    ],
    "secondaryMuscles": [
      "Front Delts",
      "Mid Chest",
      "Side Delts",
      "Lower Chest",
      "Triceps"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "WEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/svend-press.mp4"
  },
  {
    "slug": "swiss-ball-leg-curl",
    "name": "Swiss Ball Leg Curl",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Hamstrings"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Gluteus Medius"
    ],
    "tags": [
      "STRENGTH",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/swiss-ball-leg-curl.mp4"
  },
  {
    "slug": "swiss-ball-plank",
    "name": "Swiss Ball Plank",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Medicine Ball"
    ],
    "primaryMuscles": [
      "Lower Abs",
      "Obliques",
      "Upper Abs"
    ],
    "secondaryMuscles": [],
    "tags": [
      "CORE",
      "BALANCE",
      "ISOMETRIC"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/swiss-ball-plank.mp4"
  },
  {
    "slug": "t-bar-bent-over-row",
    "name": "T-Bar Bent Over Row",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Barbell",
      "Landmine"
    ],
    "primaryMuscles": [
      "Lats"
    ],
    "secondaryMuscles": [
      "Lower Traps",
      "Infraspinatus",
      "Middle Traps",
      "Teres Major",
      "Teres Minor"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/t-bar-bent-over-row.mp4"
  },
  {
    "slug": "t-bar-chest-suported-row",
    "name": "T-Bar Chest Suported Row",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Lower Traps",
      "Middle Traps"
    ],
    "secondaryMuscles": [
      "Infraspinatus",
      "Teres Major",
      "Rear Delts",
      "Teres Minor",
      "Upper Traps"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/t-bar-chest-suported-row.mp4"
  },
  {
    "slug": "tate-press",
    "name": "Tate Press",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/tate-press.mp4"
  },
  {
    "slug": "terminal-knee-extension",
    "name": "Terminal Knee Extension",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Resistance Band"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Sartorius"
    ],
    "tags": [
      "REHAB",
      "MOBILITY",
      "FUNCTIONAL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "BAND",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/terminal-knee-extension.mp4"
  },
  {
    "slug": "toe-touches",
    "name": "Toe Touches",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Upper Abs"
    ],
    "secondaryMuscles": [
      "Obliques",
      "Lower Abs",
      "Gluteus Maximus",
      "Front Delts",
      "Gluteus Medius"
    ],
    "tags": [
      "MOBILITY",
      "WARMUP"
    ],
    "mechanics": "ISOLATION",
    "laterality": "ALTERNATING",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/toe-touches.mp4"
  },
  {
    "slug": "toes-to-bar",
    "name": "Toes To Bar",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Pull-Up Bar"
    ],
    "primaryMuscles": [
      "Upper Abs"
    ],
    "secondaryMuscles": [
      "Lower Abs",
      "Obliques",
      "Forearm Extensors",
      "Forearm Flexors",
      "Brachioradialis"
    ],
    "tags": [
      "CORE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/toes-to-bar.mp4"
  },
  {
    "slug": "trap-bar-deadlift",
    "name": "Trap Bar Deadlift",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Trap Bar",
      "Weight Plate"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Spinal Erectors",
      "Hamstrings",
      "Gluteus Medius"
    ],
    "tags": [
      "STRENGTH",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/trap-bar-deadlift.mp4"
  },
  {
    "slug": "trap-bar-shrugs",
    "name": "Trap Bar Shrugs",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Trap Bar"
    ],
    "primaryMuscles": [
      "Upper Traps"
    ],
    "secondaryMuscles": [
      "Middle Traps",
      "Lower Traps"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/trap-bar-shrugs.mp4"
  },
  {
    "slug": "trap-y-raise",
    "name": "Trap Y Raise",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "primaryMuscles": [
      "Rear Delts"
    ],
    "secondaryMuscles": [
      "Upper Traps",
      "Middle Traps",
      "Side Delts",
      "Infraspinatus",
      "Teres Minor"
    ],
    "tags": [
      "STRENGTH",
      "MOBILITY",
      "REHAB",
      "FUNCTIONAL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/trap-y-raise.mp4"
  },
  {
    "slug": "treadmill-climbing",
    "name": "Treadmill Climbing",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Cardio Machine"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Gastrocnemius",
      "Hamstrings",
      "Soleus",
      "Tibialis Anterior"
    ],
    "tags": [
      "CARDIO",
      "MOTOR",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "ALTERNATING",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/treadmill-climbing.mp4"
  },
  {
    "slug": "treadmill-run",
    "name": "Treadmill Run",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Cardio Machine"
    ],
    "primaryMuscles": [
      "Soleus"
    ],
    "secondaryMuscles": [
      "Quadriceps",
      "Sartorius",
      "Tibialis Anterior",
      "Gastrocnemius",
      "Obliques"
    ],
    "tags": [
      "CARDIO",
      "WARMUP"
    ],
    "mechanics": "COMPOUND",
    "laterality": "ALTERNATING",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/treadmill-run.mp4"
  },
  {
    "slug": "triceps-cable-kickback",
    "name": "Triceps Cable Kickback",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "UNILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/triceps-cable-kickback.mp4"
  },
  {
    "slug": "triceps-cable-pushdown-reverse-grip",
    "name": "Triceps Cable Pushdown Reverse Grip",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/triceps-cable-pushdown-reverse-grip.mp4"
  },
  {
    "slug": "triceps-push-up",
    "name": "Triceps Push-Up",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Mid Chest",
      "Upper Chest"
    ],
    "tags": [
      "STRENGTH",
      "PUSH",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/triceps-push-up.mp4"
  },
  {
    "slug": "triceps-pushdown-v-bar",
    "name": "Triceps Pushdown V-Bar",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/triceps-pushdown-v-bar.mp4"
  },
  {
    "slug": "trx-biceps-curl",
    "name": "TRX Biceps Curl",
    "categories": [
      "Biceps"
    ],
    "equipment": [
      "Suspension Trainer"
    ],
    "primaryMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [
      "Forearm Flexors",
      "Brachioradialis"
    ],
    "tags": [
      "STRENGTH",
      "PULL",
      "FUNCTIONAL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/trx-biceps-curl.mp4"
  },
  {
    "slug": "trx-single-leg-bird-dog",
    "name": "TRX Single Leg Bird Dog",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Suspension Trainer"
    ],
    "primaryMuscles": [
      "Lower Abs",
      "Quadriceps",
      "Tibialis Anterior"
    ],
    "secondaryMuscles": [
      "Upper Abs",
      "Sartorius",
      "Obliques",
      "Side Delts",
      "Middle Traps"
    ],
    "tags": [
      "MOTOR",
      "BALANCE",
      "FUNCTIONAL",
      "CORE"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/trx-single-leg-bird-dog.mp4"
  },
  {
    "slug": "tsunami-overhead-press",
    "name": "Tsunami Overhead Press",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Barbell"
    ],
    "primaryMuscles": [
      "Front Delts"
    ],
    "secondaryMuscles": [
      "Side Delts",
      "Triceps",
      "Upper Chest"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/tsunami-overhead-press.mp4"
  },
  {
    "slug": "turkish-get-up",
    "name": "Turkish Get Up",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Kettlebell",
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Side Delts"
    ],
    "secondaryMuscles": [
      "Front Delts",
      "Sartorius",
      "Quadriceps",
      "Gluteus Maximus",
      "Forearm Flexors"
    ],
    "tags": [
      "STRENGTH",
      "MOBILITY",
      "CORE",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "WEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/turkish-get-up.mp4"
  },
  {
    "slug": "underhand-triceps-extension",
    "name": "Underhand Triceps Extension",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/underhand-triceps-extension.mp4"
  },
  {
    "slug": "unilateral-farmer-walk",
    "name": "Unilateral Farmer Walk",
    "categories": [
      "Forearms"
    ],
    "equipment": [
      "Dumbbell",
      "Kettlebell"
    ],
    "primaryMuscles": [
      "Forearm Extensors",
      "Forearm Flexors"
    ],
    "secondaryMuscles": [
      "Obliques",
      "Brachioradialis",
      "Quadriceps",
      "Gastrocnemius",
      "Soleus"
    ],
    "tags": [
      "STRENGTH",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/unilateral-farmer-walk.mp4"
  },
  {
    "slug": "upward-dog",
    "name": "Upward Dog",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Lower Abs",
      "Upper Abs"
    ],
    "secondaryMuscles": [
      "Obliques"
    ],
    "tags": [
      "MOBILITY",
      "STRETCH",
      "WARMUP"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/upward-dog.mp4"
  },
  {
    "slug": "v-sit-crunch",
    "name": "V-Sit Crunch",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Upper Abs"
    ],
    "secondaryMuscles": [
      "Lower Abs",
      "Obliques",
      "Quadriceps"
    ],
    "tags": [
      "CORE",
      "BALANCE"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/v-sit-crunch.mp4"
  },
  {
    "slug": "v-up",
    "name": "V-Up",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Lower Abs",
      "Upper Abs"
    ],
    "secondaryMuscles": [
      "Obliques"
    ],
    "tags": [
      "CORE",
      "BALANCE"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/v-up.mp4"
  },
  {
    "slug": "vertical-leg-press-smith-machine",
    "name": "Vertical Leg Press Smith Machine",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Smith Machine"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Gluteus Medius"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/vertical-leg-press-smith-machine.mp4"
  },
  {
    "slug": "walking-cardio",
    "name": "Walking Cardio",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Cardio Machine"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Hamstrings",
      "Gastrocnemius",
      "Soleus",
      "Gluteus Maximus",
      "Gluteus Medius"
    ],
    "tags": [
      "CARDIO",
      "WARMUP"
    ],
    "mechanics": "COMPOUND",
    "laterality": "ALTERNATING",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/walking-cardio.mp4"
  },
  {
    "slug": "walking-lunges",
    "name": "Walking Lunges",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Sartorius",
      "Adductors",
      "Hamstrings",
      "Gluteus Medius"
    ],
    "tags": [
      "STRENGTH",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "ALTERNATING",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/walking-lunges.mp4"
  },
  {
    "slug": "wall-angel",
    "name": "Wall Angel",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Front Delts"
    ],
    "secondaryMuscles": [
      "Serratus Anterior",
      "Side Delts",
      "Upper Traps",
      "Rear Delts"
    ],
    "tags": [
      "MOBILITY",
      "STRETCH",
      "REHAB",
      "WARMUP"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/wall-angel.mp4"
  },
  {
    "slug": "wall-sit",
    "name": "Wall Sit",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Gluteus Medius",
      "Hamstrings"
    ],
    "tags": [
      "STRENGTH",
      "ISOMETRIC"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/wall-sit.mp4"
  },
  {
    "slug": "weighted-ab-crunches",
    "name": "Weighted Ab Crunches",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Weight Plate"
    ],
    "primaryMuscles": [
      "Upper Abs"
    ],
    "secondaryMuscles": [
      "Lower Abs",
      "Obliques"
    ],
    "tags": [
      "STRENGTH",
      "CORE"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "WEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/weighted-ab-crunches.mp4"
  },
  {
    "slug": "weighted-back-extension",
    "name": "Weighted Back Extension",
    "categories": [
      "Gluteal"
    ],
    "equipment": [
      "Weight Plate"
    ],
    "primaryMuscles": [
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Spinal Erectors",
      "Hamstrings",
      "Gluteus Medius"
    ],
    "tags": [
      "STRENGTH",
      "CORE"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/weighted-back-extension.mp4"
  },
  {
    "slug": "weighted-bench-dips",
    "name": "Weighted Bench Dips",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Bench",
      "Weight Plate"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [
      "Front Delts",
      "Lower Chest",
      "Mid Chest",
      "Upper Chest",
      "Serratus Anterior"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/weighted-bench-dips.mp4"
  },
  {
    "slug": "weighted-chin-up",
    "name": "Weighted Chin Up",
    "categories": [
      "Biceps"
    ],
    "equipment": [
      "Pull-Up Bar",
      "Weight Plate"
    ],
    "primaryMuscles": [
      "Lats"
    ],
    "secondaryMuscles": [
      "Infraspinatus",
      "Teres Major",
      "Biceps",
      "Lower Traps",
      "Teres Minor"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/weighted-chin-up.mp4"
  },
  {
    "slug": "weighted-cossack-squat",
    "name": "Weighted Cossack Squat",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Hamstrings",
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Adductors",
      "Gluteus Maximus",
      "Sartorius",
      "Gluteus Medius"
    ],
    "tags": [
      "STRENGTH",
      "MOBILITY",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "WEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/weighted-cossack-squat.mp4"
  },
  {
    "slug": "weighted-dead-bug",
    "name": "Weighted Dead Bug",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Weight Plate"
    ],
    "primaryMuscles": [
      "Lower Abs",
      "Upper Abs"
    ],
    "secondaryMuscles": [
      "Obliques"
    ],
    "tags": [
      "CORE",
      "STRENGTH",
      "FUNCTIONAL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "WEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/weighted-dead-bug.mp4"
  },
  {
    "slug": "weighted-decline-crunch",
    "name": "Weighted Decline Crunch",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Weight Plate",
      "Bench"
    ],
    "primaryMuscles": [
      "Upper Abs"
    ],
    "secondaryMuscles": [
      "Lower Abs",
      "Obliques"
    ],
    "tags": [
      "STRENGTH",
      "CORE"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/weighted-decline-crunch.mp4"
  },
  {
    "slug": "weighted-dips",
    "name": "Weighted Dips",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Other",
      "Weight Plate"
    ],
    "primaryMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Mid Chest",
      "Front Delts",
      "Serratus Anterior",
      "Upper Chest"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/weighted-dips.mp4"
  },
  {
    "slug": "weighted-glute-bridge",
    "name": "Weighted Glute Bridge",
    "categories": [
      "Gluteal"
    ],
    "equipment": [
      "Barbell",
      "Weight Plate",
      "Bench"
    ],
    "primaryMuscles": [
      "Gluteus Maximus"
    ],
    "secondaryMuscles": [
      "Gluteus Medius",
      "Quadriceps",
      "Hamstrings"
    ],
    "tags": [
      "STRENGTH",
      "CORE"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/weighted-glute-bridge.mp4"
  },
  {
    "slug": "weighted-hanging-leg-raise",
    "name": "Weighted Hanging Leg Raise",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Pull-Up Bar",
      "Weight Plate"
    ],
    "primaryMuscles": [
      "Upper Abs"
    ],
    "secondaryMuscles": [
      "Lower Abs",
      "Obliques"
    ],
    "tags": [
      "STRENGTH",
      "CORE"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/weighted-hanging-leg-raise.mp4"
  },
  {
    "slug": "weighted-hollow-body-hold",
    "name": "Weighted Hollow Body Hold",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Weight Plate"
    ],
    "primaryMuscles": [
      "Obliques"
    ],
    "secondaryMuscles": [
      "Lower Abs",
      "Upper Abs"
    ],
    "tags": [
      "CORE",
      "ISOMETRIC"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "WEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/weighted-hollow-body-hold.mp4"
  },
  {
    "slug": "weighted-muscle-up",
    "name": "Weighted Muscle-Up",
    "categories": [
      "Triceps"
    ],
    "equipment": [
      "Rings",
      "Pull-Up Bar"
    ],
    "primaryMuscles": [
      "Lats"
    ],
    "secondaryMuscles": [
      "Teres Major",
      "Infraspinatus",
      "Teres Minor",
      "Triceps",
      "Middle Traps"
    ],
    "tags": [
      "STRENGTH",
      "EXPLOSIVE",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/weighted-muscle-up.mp4"
  },
  {
    "slug": "weighted-pistol-squat",
    "name": "Weighted Pistol Squat",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Dumbbell",
      "Kettlebell",
      "Weight Plate"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Adductors",
      "Sartorius",
      "Gluteus Medius",
      "Hamstrings"
    ],
    "tags": [
      "STRENGTH",
      "BALANCE",
      "FUNCTIONAL",
      "MOBILITY"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "WEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/weighted-pistol-squat.mp4"
  },
  {
    "slug": "weighted-plank",
    "name": "Weighted Plank",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Weight Plate"
    ],
    "primaryMuscles": [
      "Lower Abs",
      "Obliques",
      "Upper Abs"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Front Delts",
      "Quadriceps",
      "Triceps",
      "Gastrocnemius"
    ],
    "tags": [
      "STRENGTH",
      "CORE",
      "ISOMETRIC"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "WEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/weighted-plank.mp4"
  },
  {
    "slug": "weighted-pull-up",
    "name": "Weighted Pull-Up",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Pull-Up Bar",
      "Weight Plate"
    ],
    "primaryMuscles": [
      "Lats"
    ],
    "secondaryMuscles": [
      "Infraspinatus",
      "Teres Major",
      "Lower Traps",
      "Teres Minor",
      "Middle Traps"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/weighted-pull-up.mp4"
  },
  {
    "slug": "weighted-push-up",
    "name": "Weighted Push-Up",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Weight Plate"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Upper Chest",
      "Triceps",
      "Serratus Anterior"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/weighted-push-up.mp4"
  },
  {
    "slug": "weighted-russian-twist",
    "name": "Weighted Russian Twist",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Weight Plate",
      "Dumbbell",
      "Kettlebell",
      "Medicine Ball"
    ],
    "primaryMuscles": [
      "Obliques"
    ],
    "secondaryMuscles": [
      "Upper Abs",
      "Lower Abs"
    ],
    "tags": [
      "STRENGTH",
      "CORE",
      "BALANCE"
    ],
    "mechanics": "COMPOUND",
    "laterality": "ALTERNATING",
    "weightType": "WEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/weighted-russian-twist.mp4"
  },
  {
    "slug": "weighted-seated-calf-raise",
    "name": "Weighted Seated Calf Raise",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Soleus"
    ],
    "secondaryMuscles": [
      "Gastrocnemius"
    ],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "WEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/weighted-seated-calf-raise.mp4"
  },
  {
    "slug": "weighted-sissy-squat",
    "name": "Weighted Sissy Squat",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Dumbbell",
      "Kettlebell",
      "Weight Plate"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Sartorius",
      "Gluteus Maximus",
      "Gluteus Medius",
      "Lower Abs",
      "Obliques"
    ],
    "tags": [
      "STRENGTH",
      "BALANCE"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "WEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/weighted-sissy-squat.mp4"
  },
  {
    "slug": "weighted-sit-up",
    "name": "Weighted Sit Up",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Weight Plate",
      "Dumbbell",
      "Kettlebell",
      "Medicine Ball"
    ],
    "primaryMuscles": [
      "Lower Abs",
      "Obliques",
      "Upper Abs"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "CORE"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/weighted-sit-up.mp4"
  },
  {
    "slug": "weighted-straight-arm-crunch",
    "name": "Weighted Straight Arm Crunch",
    "categories": [
      "Abs"
    ],
    "equipment": [
      "Weight Plate"
    ],
    "primaryMuscles": [
      "Upper Abs"
    ],
    "secondaryMuscles": [
      "Lower Abs",
      "Obliques"
    ],
    "tags": [
      "STRENGTH",
      "CORE"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "WEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/weighted-straight-arm-crunch.mp4"
  },
  {
    "slug": "weighted-woodchopper",
    "name": "Weighted Woodchopper",
    "categories": [
      "Shoulders"
    ],
    "equipment": [
      "Dumbbell",
      "Kettlebell",
      "Medicine Ball",
      "Weight Plate",
      "Cable",
      "Landmine"
    ],
    "primaryMuscles": [
      "Obliques"
    ],
    "secondaryMuscles": [
      "Front Delts",
      "Rear Delts",
      "Side Delts",
      "Lower Abs",
      "Upper Abs"
    ],
    "tags": [
      "STRENGTH",
      "CORE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "WEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/weighted-woodchopper.mp4"
  },
  {
    "slug": "wide-grip-chest-supported-row",
    "name": "Wide Grip Chest Supported Row",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Machine"
    ],
    "primaryMuscles": [
      "Infraspinatus"
    ],
    "secondaryMuscles": [
      "Lower Traps",
      "Teres Minor",
      "Rear Delts",
      "Teres Major",
      "Middle Traps"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/wide-grip-chest-supported-row.mp4"
  },
  {
    "slug": "wide-grip-lat-pulldown",
    "name": "Wide Grip Lat Pulldown",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Cable"
    ],
    "primaryMuscles": [
      "Lats"
    ],
    "secondaryMuscles": [
      "Teres Major",
      "Infraspinatus",
      "Rear Delts",
      "Teres Minor",
      "Brachioradialis"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "MACHINE",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/wide-grip-lat-pulldown.mp4"
  },
  {
    "slug": "wide-grip-rear-pull-up",
    "name": "Wide Grip Rear Pull-Up",
    "categories": [
      "Back"
    ],
    "equipment": [
      "Pull-Up Bar"
    ],
    "primaryMuscles": [
      "Lats",
      "Teres Major"
    ],
    "secondaryMuscles": [
      "Infraspinatus",
      "Teres Minor",
      "Lower Traps",
      "Triceps",
      "Rear Delts"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/wide-grip-rear-pull-up.mp4"
  },
  {
    "slug": "wide-grip-standing-barbell-curl",
    "name": "Wide Grip Standing Barbell Curl",
    "categories": [
      "Biceps"
    ],
    "equipment": [
      "Barbell"
    ],
    "primaryMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/wide-grip-standing-barbell-curl.mp4"
  },
  {
    "slug": "wide-hand-push-up",
    "name": "Wide Hand Push-Up",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Mid Chest"
    ],
    "secondaryMuscles": [
      "Lower Chest",
      "Upper Chest",
      "Triceps",
      "Serratus Anterior",
      "Front Delts"
    ],
    "tags": [
      "STRENGTH",
      "PUSH"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/wide-hand-push-up.mp4"
  },
  {
    "slug": "worlds-greatest-stretch",
    "name": "World’s Greatest Stretch",
    "categories": [
      "Chest"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Infraspinatus",
      "Lower Chest",
      "Lower Traps",
      "Mid Chest",
      "Middle Traps",
      "Serratus Anterior",
      "Upper Chest"
    ],
    "secondaryMuscles": [
      "Spinal Erectors"
    ],
    "tags": [
      "MOBILITY",
      "STRETCH",
      "WARMUP",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "UNILATERAL",
    "weightType": "UNWEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/worlds-greatest-stretch.mp4"
  },
  {
    "slug": "wrist-push-up",
    "name": "Wrist Push-Up",
    "categories": [
      "Forearms"
    ],
    "equipment": [
      "Bodyweight"
    ],
    "primaryMuscles": [
      "Forearm Extensors"
    ],
    "secondaryMuscles": [
      "Forearm Flexors"
    ],
    "tags": [
      "STRENGTH",
      "MOBILITY",
      "BALANCE",
      "FUNCTIONAL"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BODYWEIGHT",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/wrist-push-up.mp4"
  },
  {
    "slug": "wrist-roller",
    "name": "Wrist Roller",
    "categories": [
      "Forearms"
    ],
    "equipment": [
      "Weight Plate"
    ],
    "primaryMuscles": [
      "Forearm Extensors"
    ],
    "secondaryMuscles": [
      "Forearm Flexors",
      "Brachioradialis",
      "Front Delts",
      "Biceps",
      "Side Delts"
    ],
    "tags": [
      "STRENGTH"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "WEIGHTED",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/wrist-roller.mp4"
  },
  {
    "slug": "zercher-squat",
    "name": "Zercher Squat",
    "categories": [
      "Legs"
    ],
    "equipment": [
      "Barbell"
    ],
    "primaryMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Gluteus Medius",
      "Sartorius"
    ],
    "tags": [
      "STRENGTH",
      "FUNCTIONAL",
      "CORE"
    ],
    "mechanics": "COMPOUND",
    "laterality": "BILATERAL",
    "weightType": "BARBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/zercher-squat.mp4"
  },
  {
    "slug": "zottman-curl",
    "name": "Zottman Curl",
    "categories": [
      "Biceps"
    ],
    "equipment": [
      "Dumbbell"
    ],
    "primaryMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [
      "Brachioradialis",
      "Forearm Flexors",
      "Forearm Extensors"
    ],
    "tags": [
      "STRENGTH",
      "PULL"
    ],
    "mechanics": "ISOLATION",
    "laterality": "BILATERAL",
    "weightType": "DUMBBELL",
    "mediaStatus": "available",
    "mediaType": "video/mp4",
    "mediaPath": "/exercises/zottman-curl.mp4"
  }
] as const;
