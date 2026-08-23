// Generated from the live SmartWorkout category payloads on 2026-08-23T10:32:26.633Z.
// Do not hand-edit individual records; recrawl and regenerate instead.
import type { ExerciseCategory } from '../../data/models.ts'
import type { SmartWorkoutCategoryAudit, SmartWorkoutExerciseDefinition } from './smartWorkoutTypes.ts'

export const SMART_WORKOUT_CRAWLED_AT = "2026-08-23T10:32:26.633Z"
export const SMART_WORKOUT_RAW_MEMBERSHIP_TOTAL = 824
export const SMART_WORKOUT_CANONICAL_MEMBERSHIP_TOTAL = 814
export const SMART_WORKOUT_CATEGORY_AUDIT: Readonly<Record<ExerciseCategory, SmartWorkoutCategoryAudit>> = {
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
}

export const SMART_WORKOUT_DUPLICATE_PAGE_IDENTITIES = [
  {
    "slug": "cable-neutral-grip-lat-pulldown",
    "sourceRecordIds": [
      "25472b18-efdc-438a-a2c2-ab72994be361",
      "cc39d401-ea05-f723-0500-64bbe65b589d"
    ]
  },
  {
    "slug": "dumbbell-seated-triceps-extension",
    "sourceRecordIds": [
      "9481d369-1493-4a72-b758-e0c1870c9b1d",
      "c4aa256a-753d-4b96-88fc-5c52907c648a"
    ]
  },
  {
    "slug": "dumbbell-single-leg-hip-thrust",
    "sourceRecordIds": [
      "0b59dd85-d65d-4e28-bad1-2a74fc204504",
      "81c28cab-ffcc-44f7-8869-7e0979e5a145"
    ]
  },
  {
    "slug": "hip-thrust",
    "sourceRecordIds": [
      "5246f266-003c-7ce5-6be0-283f2136321e",
      "7ce01b32-14e6-4185-b499-137ba4f99177"
    ]
  },
  {
    "slug": "machine-chest-press",
    "sourceRecordIds": [
      "81112d74-4711-4ddc-9145-a610bf8407c8",
      "da6b09eb-e55d-42cd-988d-1454658c1a4f"
    ]
  },
  {
    "slug": "one-arm-cable-half-kneeling-lat-pulldown",
    "sourceRecordIds": [
      "6f1920ff-322b-43c3-8f4f-901be5cd3679",
      "ed6f4b1d-e657-4a9d-993c-d06254b600e0"
    ]
  },
  {
    "slug": "one-arm-cable-lateral-raise",
    "sourceRecordIds": [
      "0ea2687b-5d78-4041-8ad4-66a6a8848da1",
      "9532a115-3b01-43cf-96bb-f8c07cee7089"
    ]
  },
  {
    "slug": "smith-calf-raises",
    "sourceRecordIds": [
      "78659ec5-a814-4734-9e3d-ee3e784b71b3",
      "b7ec6aa3-d3da-4b35-974a-c50c7eb08794"
    ]
  },
  {
    "slug": "split-squat-front-foot-elevated",
    "sourceRecordIds": [
      "35cd3180-abe9-417b-aebb-816d8ff6392a",
      "4050cda9-d73a-4b37-a97e-3beaa3615d2f"
    ]
  },
  {
    "slug": "unilateral-farmer-walk",
    "sourceRecordIds": [
      "8d0b122e-3029-4722-a56a-9b9aa76575bf",
      "ed9b5a18-18d0-4d80-bb07-b67f0ad96663"
    ]
  },
  {
    "slug": "v-up",
    "sourceRecordIds": [
      "67fa769c-8cc6-497a-b27e-5355bc085b3c",
      "9181ee11-473b-4ea3-9435-31ff0ec7e39f"
    ]
  }
] as const

export const SMART_WORKOUT_EXERCISES = [
  {
    "slug": "90-to-90-stretch",
    "sourceSlug": "90-to-90-stretch",
    "sourceRecordIds": [
      "4c567ffb-4d07-417a-8142-f9d67088079e"
    ],
    "name": "90 To 90 Stretch",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/90-to-90-stretch",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/90-to-90-stretch"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/78b343c4-cf54-4d33-aa3a-b9f76c86d533.mp4",
    "mediaPath": "/exercises/90-to-90-stretch.mp4"
  },
  {
    "slug": "ab-wheel-rollout",
    "sourceSlug": "ab-wheel-rollout",
    "sourceRecordIds": [
      "149f6670-3321-4e86-a231-796f1c26a1a4"
    ],
    "name": "Ab Wheel Rollout",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/ab-wheel-rollout",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/ab-wheel-rollout"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/835d0511-4051-4a4c-88a0-a022b90dfe43.mp4",
    "mediaPath": "/exercises/ab-wheel-rollout.mp4"
  },
  {
    "slug": "abdominal-crunches",
    "sourceSlug": "abdominal-crunches",
    "sourceRecordIds": [
      "16c5b229-a90d-73da-ea41-638c0dbd8e57"
    ],
    "name": "Abdominal Crunches",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/abdominal-crunches",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/abdominal-crunches"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/b980df05-5c31-428d-85e2-4fd60362a453.mp4",
    "mediaPath": "/exercises/abdominal-crunches.mp4"
  },
  {
    "slug": "abdominal-vaccum",
    "sourceSlug": "abdominal-vaccum",
    "sourceRecordIds": [
      "ca246429-a81b-4377-a492-231b6ca8ec61"
    ],
    "name": "Abdominal Vaccum",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/abdominal-vaccum",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/abdominal-vaccum"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/83a093ae-3f51-476f-a0ce-8244c0948e8c.mp4",
    "mediaPath": "/exercises/abdominal-vaccum.mp4"
  },
  {
    "slug": "air-bike",
    "sourceSlug": "air-bike",
    "sourceRecordIds": [
      "7359f05e-8b81-449d-a741-8a1199116860"
    ],
    "name": "Air Bike",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/air-bike",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/air-bike"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/711f47e0-a60d-4c18-9d30-f18cea0f36f9.mp4",
    "mediaPath": "/exercises/air-bike.mp4"
  },
  {
    "slug": "alternate-bent-over-dumbbell-reverse-fly",
    "sourceSlug": "alternate-bent-over-dumbbell-reverse-fly",
    "sourceRecordIds": [
      "9e5a71b9-7cdb-4090-83bd-efa2f49a418f"
    ],
    "name": "Alternate Bent Over Dumbbell Reverse Fly",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/alternate-bent-over-dumbbell-reverse-fly",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/alternate-bent-over-dumbbell-reverse-fly"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/06daec78-0e2d-40ff-b974-778e7a5646ab.mp4",
    "mediaPath": "/exercises/alternate-bent-over-dumbbell-reverse-fly.mp4"
  },
  {
    "slug": "alternate-biceps-curl",
    "sourceSlug": "alternate-biceps-curl",
    "sourceRecordIds": [
      "fedc49a5-593a-47fb-86db-7efdc8e6a7fe"
    ],
    "name": "Alternate Biceps Curl",
    "categories": [
      "Biceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/biceps/alternate-biceps-curl",
    "sourcePages": {
      "Biceps": "https://smartworkout.app/en/exercise-library/biceps/alternate-biceps-curl"
    },
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
    "sourceSlug": "alternate-dumbbell-hammer-curl",
    "sourceRecordIds": [
      "d1c79bb9-e950-43b4-82a8-9b8003140b5e"
    ],
    "name": "Alternate Dumbbell Hammer Curl",
    "categories": [
      "Biceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/biceps/alternate-dumbbell-hammer-curl",
    "sourcePages": {
      "Biceps": "https://smartworkout.app/en/exercise-library/biceps/alternate-dumbbell-hammer-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/e24b7b60-919a-4cda-8e49-044144551388.mp4",
    "mediaPath": "/exercises/alternate-dumbbell-hammer-curl.mp4"
  },
  {
    "slug": "alternate-renegade-row",
    "sourceSlug": "alternate-renegade-row",
    "sourceRecordIds": [
      "85a22cf8-07b5-424a-bef6-637d9c5761dc"
    ],
    "name": "Alternate Renegade Row",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/alternate-renegade-row",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/alternate-renegade-row"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/f6854155-c34a-42ec-9ab5-a4148670164a.mp4",
    "mediaPath": "/exercises/alternate-renegade-row.mp4"
  },
  {
    "slug": "anderson-squat",
    "sourceSlug": "anderson-squat",
    "sourceRecordIds": [
      "03b44dbb-7517-432a-8906-17069ed494b2"
    ],
    "name": "Anderson Squat",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/anderson-squat",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/anderson-squat"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/32cb7e52-a070-4eff-8aa3-4a9abfbbc1ae.mp4",
    "mediaPath": "/exercises/anderson-squat.mp4"
  },
  {
    "slug": "ankle-taps",
    "sourceSlug": "ankle-taps",
    "sourceRecordIds": [
      "e7708c1b-2f41-4e99-b4c4-6f79f4c5fa1f"
    ],
    "name": "Ankle Taps",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/ankle-taps",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/ankle-taps"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/4af8a144-1fcf-4874-b65c-f0701180c46b.mp4",
    "mediaPath": "/exercises/ankle-taps.mp4"
  },
  {
    "slug": "archer-push-up",
    "sourceSlug": "archer-push-up",
    "sourceRecordIds": [
      "8dc5491f-a6ba-431f-bfe4-08e0ff285e4a"
    ],
    "name": "Archer Push-Up",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/archer-push-up",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/archer-push-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/d6d078a4-e818-46f9-a1a2-33ce24b4ad6e.mp4",
    "mediaPath": "/exercises/archer-push-up.mp4"
  },
  {
    "slug": "arm-blaster-biceps-dumbbell-curl",
    "sourceSlug": "arm-blaster-biceps-dumbbell-curl",
    "sourceRecordIds": [
      "65cd4e80-8f47-4aba-9ca5-0a12185359b8"
    ],
    "name": "Arm Blaster Biceps Dumbbell Curl",
    "categories": [
      "Biceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/biceps/arm-blaster-biceps-dumbbell-curl",
    "sourcePages": {
      "Biceps": "https://smartworkout.app/en/exercise-library/biceps/arm-blaster-biceps-dumbbell-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/4f94bd74-ba37-455d-93c3-dabc0d59cf33.mp4",
    "mediaPath": "/exercises/arm-blaster-biceps-dumbbell-curl.mp4"
  },
  {
    "slug": "arm-circle",
    "sourceSlug": "arm-circle",
    "sourceRecordIds": [
      "88d568f5-de3e-4be1-b97d-265e802c6c1a"
    ],
    "name": "Arm Circle",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/arm-circle",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/arm-circle"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/b65dda81-6835-4edb-a6e9-8c5d057c1fd6.mp4",
    "mediaPath": "/exercises/arm-circle.mp4"
  },
  {
    "slug": "arm-circles",
    "sourceSlug": "arm-circles",
    "sourceRecordIds": [
      "08cde7c0-5988-4190-b12b-b0b565d113f6"
    ],
    "name": "Arm Circles",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/arm-circles",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/arm-circles"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/1271bd6d-3db2-4209-8106-a49f5639af68.mp4",
    "mediaPath": "/exercises/arm-circles.mp4"
  },
  {
    "slug": "assault-air-bike",
    "sourceSlug": "assault-air-bike",
    "sourceRecordIds": [
      "d8ad3cbb-b306-4f3d-8b67-4577038925b7"
    ],
    "name": "Assault Air Bike",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/assault-air-bike",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/assault-air-bike"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/f7f76a00-8794-478f-b596-4b690632b7df.mp4",
    "mediaPath": "/exercises/assault-air-bike.mp4"
  },
  {
    "slug": "assisted-machine-dips",
    "sourceSlug": "assisted-machine-dips",
    "sourceRecordIds": [
      "9b6a6436-6251-481a-87b9-5d1fdea90599"
    ],
    "name": "Assisted Machine Dips",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/assisted-machine-dips",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/assisted-machine-dips"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/74667d62-246e-4489-b879-c9ac936057f6.mp4",
    "mediaPath": "/exercises/assisted-machine-dips.mp4"
  },
  {
    "slug": "assisted-pistol-squat",
    "sourceSlug": "assisted-pistol-squat",
    "sourceRecordIds": [
      "a5638dab-bc86-49ea-9940-f5423864f62b"
    ],
    "name": "Assisted Pistol Squat",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/assisted-pistol-squat",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/assisted-pistol-squat"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/a7891e33-9847-4d55-a737-6f17c2ddcfc0.mp4",
    "mediaPath": "/exercises/assisted-pistol-squat.mp4"
  },
  {
    "slug": "assisted-pull-up",
    "sourceSlug": "assisted-pull-up",
    "sourceRecordIds": [
      "b3ec93a9-729e-4e60-8944-d00b8a81f01f"
    ],
    "name": "Assisted Pull-Up",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/assisted-pull-up",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/assisted-pull-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/51ffe5a7-e431-4ab1-8f79-98c41856a8b7.mp4",
    "mediaPath": "/exercises/assisted-pull-up.mp4"
  },
  {
    "slug": "australian-pull-up-underhand-grip",
    "sourceSlug": "australian-pull-up-underhand-grip",
    "sourceRecordIds": [
      "7049688f-6c75-454f-80a7-28b0a805c6b4"
    ],
    "name": "Australian Pull-Up Underhand Grip",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/australian-pull-up-underhand-grip",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/australian-pull-up-underhand-grip"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/775dd4d7-8c4f-4333-9ff0-a6297bbd06cd.mp4",
    "mediaPath": "/exercises/australian-pull-up-underhand-grip.mp4"
  },
  {
    "slug": "b-stance-romanian-deadlift",
    "sourceSlug": "b-stance-romanian-deadlift",
    "sourceRecordIds": [
      "e657a4e4-a3b5-49da-95d5-a6a41db1272c"
    ],
    "name": "B Stance Romanian Deadlift",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/b-stance-romanian-deadlift",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/b-stance-romanian-deadlift"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/ad7961a3-0d2b-45d0-937e-83b2b812d482.mp4",
    "mediaPath": "/exercises/b-stance-romanian-deadlift.mp4"
  },
  {
    "slug": "back-extension",
    "sourceSlug": "back-extension",
    "sourceRecordIds": [
      "873096f4-e814-47bf-9e4a-02ac68f3ade5"
    ],
    "name": "Back Extension",
    "categories": [
      "Gluteal"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/gluteus/back-extension",
    "sourcePages": {
      "Gluteal": "https://smartworkout.app/en/exercise-library/gluteus/back-extension"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/45ae7259-2425-4985-9979-4b1aa0f11df7.mp4",
    "mediaPath": "/exercises/back-extension.mp4"
  },
  {
    "slug": "back-extension-with-dumbbell",
    "sourceSlug": "back-extension-with-dumbbell",
    "sourceRecordIds": [
      "bd67f53b-0829-458b-8368-3bd89972ebe0"
    ],
    "name": "Back Extension With Dumbbell",
    "categories": [
      "Gluteal"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/gluteus/back-extension-with-dumbbell",
    "sourcePages": {
      "Gluteal": "https://smartworkout.app/en/exercise-library/gluteus/back-extension-with-dumbbell"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/c809adda-ee2a-4280-b9c6-9ecf894835a6.mp4",
    "mediaPath": "/exercises/back-extension-with-dumbbell.mp4"
  },
  {
    "slug": "back-lever",
    "sourceSlug": "back-lever",
    "sourceRecordIds": [
      "d8467207-a5b3-4c53-a8e2-e798f1c47e86"
    ],
    "name": "Back Lever",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/back-lever",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/back-lever"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/63d6d9ac-f615-4d45-8a82-45996974a718.mp4",
    "mediaPath": "/exercises/back-lever.mp4"
  },
  {
    "slug": "band-assisted-pull-up",
    "sourceSlug": "band-assisted-pull-up",
    "sourceRecordIds": [
      "e0c03699-b927-4c57-933c-79020ffb2371"
    ],
    "name": "Band Assisted Pull Up",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/band-assisted-pull-up",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/band-assisted-pull-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/fa0d3433-ba9f-4e33-9f41-1daa10a84a63.mp4",
    "mediaPath": "/exercises/band-assisted-pull-up.mp4"
  },
  {
    "slug": "band-bench-chest-press",
    "sourceSlug": "band-bench-chest-press",
    "sourceRecordIds": [
      "6d3741e2-2457-4505-a63c-324dc272d77c"
    ],
    "name": "Band Bench Chest Press",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/band-bench-chest-press",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/band-bench-chest-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/d563db4f-f311-485c-bcf7-c115e22a12ca.mp4",
    "mediaPath": "/exercises/band-bench-chest-press.mp4"
  },
  {
    "slug": "band-bent-over-lat-pulldown",
    "sourceSlug": "band-bent-over-lat-pulldown",
    "sourceRecordIds": [
      "37f5a2d4-b453-4971-a504-90d55d0933f6"
    ],
    "name": "Band Bent Over Lat Pulldown",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/band-bent-over-lat-pulldown",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/band-bent-over-lat-pulldown"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/494fc248-87a5-4e26-9ebf-dc27f1e71ae4.mp4",
    "mediaPath": "/exercises/band-bent-over-lat-pulldown.mp4"
  },
  {
    "slug": "band-biceps-curl",
    "sourceSlug": "band-biceps-curl",
    "sourceRecordIds": [
      "01c5867e-2eb7-4f53-8b92-3a021d49cfea"
    ],
    "name": "Band Biceps Curl",
    "categories": [
      "Biceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/biceps/band-biceps-curl",
    "sourcePages": {
      "Biceps": "https://smartworkout.app/en/exercise-library/biceps/band-biceps-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/511f4fb3-13c8-4835-a91d-626bb2b469d2.mp4",
    "mediaPath": "/exercises/band-biceps-curl.mp4"
  },
  {
    "slug": "band-bicycle-crunches",
    "sourceSlug": "band-bicycle-crunches",
    "sourceRecordIds": [
      "d4ef05f4-fe04-46e3-bb14-d060df537e28"
    ],
    "name": "Band Bicycle Crunches",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/band-bicycle-crunches",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/band-bicycle-crunches"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/7609f336-3372-4db7-b3e5-dd70634cd39e.mp4",
    "mediaPath": "/exercises/band-bicycle-crunches.mp4"
  },
  {
    "slug": "band-chest-fly",
    "sourceSlug": "band-chest-fly",
    "sourceRecordIds": [
      "72a1cffa-0b27-4294-a558-d4f0580deb58"
    ],
    "name": "Band Chest Fly",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/band-chest-fly",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/band-chest-fly"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/7d8a4a20-e873-4831-a6b4-a6a0b28a6cae.mp4",
    "mediaPath": "/exercises/band-chest-fly.mp4"
  },
  {
    "slug": "band-half-kneeling-chop",
    "sourceSlug": "band-half-kneeling-chop",
    "sourceRecordIds": [
      "8ab5f69f-e824-4fcf-9357-4e08c225d060"
    ],
    "name": "Band Half Kneeling Chop",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/band-half-kneeling-chop",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/band-half-kneeling-chop"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/442d326f-92ed-48da-8b69-a0f0d6ff4244.mp4",
    "mediaPath": "/exercises/band-half-kneeling-chop.mp4"
  },
  {
    "slug": "band-hammer-curl",
    "sourceSlug": "band-hammer-curl",
    "sourceRecordIds": [
      "5d3e85c7-ad6f-4fa9-8b63-984f13c3b1ac"
    ],
    "name": "Band Hammer Curl",
    "categories": [
      "Biceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/biceps/band-hammer-curl",
    "sourcePages": {
      "Biceps": "https://smartworkout.app/en/exercise-library/biceps/band-hammer-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/5f18c6e4-1d2c-4c4a-b2fe-7bc0be4525f7.mp4",
    "mediaPath": "/exercises/band-hammer-curl.mp4"
  },
  {
    "slug": "band-high-anchor-wide-row",
    "sourceSlug": "band-high-anchor-wide-row",
    "sourceRecordIds": [
      "ab0c9102-2325-49a2-92ce-4c6ed35a119d"
    ],
    "name": "Band High Anchor Wide Row",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/band-high-anchor-wide-row",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/band-high-anchor-wide-row"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/2612c1c3-30b3-4d16-9c9a-d77d9da258b7.mp4",
    "mediaPath": "/exercises/band-high-anchor-wide-row.mp4"
  },
  {
    "slug": "band-hip-abduction",
    "sourceSlug": "band-hip-abduction",
    "sourceRecordIds": [
      "c1b44da7-2220-4a21-8164-ebc2abf9ba65"
    ],
    "name": "Band Hip Abduction",
    "categories": [
      "Gluteal"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/gluteus/band-hip-abduction",
    "sourcePages": {
      "Gluteal": "https://smartworkout.app/en/exercise-library/gluteus/band-hip-abduction"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/465b9349-3c5e-4107-b56f-5da23ba2e73d.mp4",
    "mediaPath": "/exercises/band-hip-abduction.mp4"
  },
  {
    "slug": "band-kneeling-twisting-crunch",
    "sourceSlug": "band-kneeling-twisting-crunch",
    "sourceRecordIds": [
      "ba4ae8e2-33f7-4d56-a37a-a2498b85e605"
    ],
    "name": "Band Kneeling Twisting Crunch",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/band-kneeling-twisting-crunch",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/band-kneeling-twisting-crunch"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/adae5f93-01ec-42a9-988d-11d5a362dea6.mp4",
    "mediaPath": "/exercises/band-kneeling-twisting-crunch.mp4"
  },
  {
    "slug": "band-lateral-raise",
    "sourceSlug": "band-lateral-raise",
    "sourceRecordIds": [
      "959aee3c-69de-4978-9332-2f6dbca6f4f9"
    ],
    "name": "Band Lateral Raise",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/band-lateral-raise",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/band-lateral-raise"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/ccc2c2e5-e9bc-4613-a40d-d8411e4872b0.mp4",
    "mediaPath": "/exercises/band-lateral-raise.mp4"
  },
  {
    "slug": "band-lying-clamshells",
    "sourceSlug": "band-lying-clamshells",
    "sourceRecordIds": [
      "e4022ea8-2ba8-46f2-8afb-9aa0b76bc6ef"
    ],
    "name": "Band Lying Clamshells",
    "categories": [
      "Gluteal"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/gluteus/band-lying-clamshells",
    "sourcePages": {
      "Gluteal": "https://smartworkout.app/en/exercise-library/gluteus/band-lying-clamshells"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/295dfc97-9c8a-46e8-8a3d-33f9f52d842c.mp4",
    "mediaPath": "/exercises/band-lying-clamshells.mp4"
  },
  {
    "slug": "band-lying-leg-curl",
    "sourceSlug": "band-lying-leg-curl",
    "sourceRecordIds": [
      "6c607284-0e60-4b4f-a656-9cafb87f4a9d"
    ],
    "name": "Band Lying Leg Curl",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/band-lying-leg-curl",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/band-lying-leg-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/c88cb36a-86e7-4460-877a-fb9e02d1821a.mp4",
    "mediaPath": "/exercises/band-lying-leg-curl.mp4"
  },
  {
    "slug": "band-pallof-press",
    "sourceSlug": "band-pallof-press",
    "sourceRecordIds": [
      "3453606c-f6b9-48b0-ac7e-c98595957a41"
    ],
    "name": "Band Pallof Press",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/band-pallof-press",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/band-pallof-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/f65e3ecc-bf7d-4a45-a604-dfe2e2fbc923.mp4",
    "mediaPath": "/exercises/band-pallof-press.mp4"
  },
  {
    "slug": "band-pass-through-shoulders",
    "sourceSlug": "band-pass-through-shoulders",
    "sourceRecordIds": [
      "6d2a3622-980f-4d8f-aa00-852652cdd1d5"
    ],
    "name": "Band Pass Through Shoulders",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/band-pass-through-shoulders",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/band-pass-through-shoulders"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/e31f0ad1-f6e3-49c2-92f1-fa74e2d62826.mp4",
    "mediaPath": "/exercises/band-pass-through-shoulders.mp4"
  },
  {
    "slug": "band-pulldown-behind-neck",
    "sourceSlug": "band-pulldown-behind-neck",
    "sourceRecordIds": [
      "773ab473-077f-4ddb-baae-fff41adeb0f0"
    ],
    "name": "Band Pulldown Behind Neck",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/band-pulldown-behind-neck",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/band-pulldown-behind-neck"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/a82c5199-4f3e-43ca-a962-2fc78883059e.mp4",
    "mediaPath": "/exercises/band-pulldown-behind-neck.mp4"
  },
  {
    "slug": "band-reverse-hyperextension",
    "sourceSlug": "band-reverse-hyperextension",
    "sourceRecordIds": [
      "c4c660f5-e07b-4ad8-a3a7-b887c3f8cc5e"
    ],
    "name": "Band Reverse Hyperextension",
    "categories": [
      "Gluteal"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/gluteus/band-reverse-hyperextension",
    "sourcePages": {
      "Gluteal": "https://smartworkout.app/en/exercise-library/gluteus/band-reverse-hyperextension"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/8d9c217e-2483-4509-ac1c-89c7f177bdff.mp4",
    "mediaPath": "/exercises/band-reverse-hyperextension.mp4"
  },
  {
    "slug": "band-russian-twist",
    "sourceSlug": "band-russian-twist",
    "sourceRecordIds": [
      "37fdb10c-13ce-4832-8730-0efc5dbb0eb2"
    ],
    "name": "Band Russian Twist",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/band-russian-twist",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/band-russian-twist"
    },
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
    "sourceSlug": "band-shoulder-press",
    "sourceRecordIds": [
      "046c9a3a-c89b-436a-ae57-f042aab8ad16"
    ],
    "name": "Band Shoulder Press",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/band-shoulder-press",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/band-shoulder-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/18aee779-848b-4fcd-b36d-8c77649e36bf.mp4",
    "mediaPath": "/exercises/band-shoulder-press.mp4"
  },
  {
    "slug": "band-squat",
    "sourceSlug": "band-squat",
    "sourceRecordIds": [
      "fe62e8fc-5b16-4bab-bf08-f1e70b550bee"
    ],
    "name": "Band Squat",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/band-squat",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/band-squat"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/5463018d-cf93-4170-819a-dd9a0d6f0a93.mp4",
    "mediaPath": "/exercises/band-squat.mp4"
  },
  {
    "slug": "band-standing-balance-glute-kickback",
    "sourceSlug": "band-standing-balance-glute-kickback",
    "sourceRecordIds": [
      "4f000517-83d7-4c0c-81b3-1af736e0f91c"
    ],
    "name": "Band Standing Balance Glute Kickback",
    "categories": [
      "Gluteal"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/gluteus/band-standing-balance-glute-kickback",
    "sourcePages": {
      "Gluteal": "https://smartworkout.app/en/exercise-library/gluteus/band-standing-balance-glute-kickback"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/e672bc71-a92f-4189-8b4f-6977b0fab6b1.mp4",
    "mediaPath": "/exercises/band-standing-balance-glute-kickback.mp4"
  },
  {
    "slug": "band-standing-crunches",
    "sourceSlug": "band-standing-crunches",
    "sourceRecordIds": [
      "3c0abf43-2156-49b3-b86b-556e1837f59f"
    ],
    "name": "Band Standing Crunches",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/band-standing-crunches",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/band-standing-crunches"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/3fee3ea2-6e2a-41cc-a691-240c50de6372.mp4",
    "mediaPath": "/exercises/band-standing-crunches.mp4"
  },
  {
    "slug": "band-standing-side-bend",
    "sourceSlug": "band-standing-side-bend",
    "sourceRecordIds": [
      "0d70c540-52d7-41d0-b32d-448e6d0033ae"
    ],
    "name": "Band Standing Side Bend",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/band-standing-side-bend",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/band-standing-side-bend"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/ab801dff-4918-460d-a184-1bdd68bb288a.mp4",
    "mediaPath": "/exercises/band-standing-side-bend.mp4"
  },
  {
    "slug": "band-standing-twisting-crunches",
    "sourceSlug": "band-standing-twisting-crunches",
    "sourceRecordIds": [
      "18610132-0355-4f53-82e5-73fdd3a4450e"
    ],
    "name": "Band Standing Twisting Crunches",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/band-standing-twisting-crunches",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/band-standing-twisting-crunches"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/e20edacd-7025-41dc-9bd5-c6aafaf64f51.mp4",
    "mediaPath": "/exercises/band-standing-twisting-crunches.mp4"
  },
  {
    "slug": "band-triceps-pushdown",
    "sourceSlug": "band-triceps-pushdown",
    "sourceRecordIds": [
      "edae8b8e-efd3-4b72-b7c2-000604d3319c"
    ],
    "name": "Band Triceps Pushdown",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/band-triceps-pushdown",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/band-triceps-pushdown"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/62a8f0d0-56a5-401c-a20e-5a39902bad3e.mp4",
    "mediaPath": "/exercises/band-triceps-pushdown.mp4"
  },
  {
    "slug": "band-twist-horizontal",
    "sourceSlug": "band-twist-(horizontal)",
    "sourceRecordIds": [
      "684999fc-af89-42cf-b915-97599db440b7"
    ],
    "name": "Band Twist (horizontal)",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/band-twist-(horizontal)",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/band-twist-(horizontal)"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/c213b508-6d89-4d6e-836f-b6dd20198d7c.mp4",
    "mediaPath": "/exercises/band-twist-horizontal.mp4"
  },
  {
    "slug": "band-upright-row",
    "sourceSlug": "band-upright-row",
    "sourceRecordIds": [
      "ac407cf0-cc32-47ea-a68f-bf21017a15d1"
    ],
    "name": "Band Upright Row",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/band-upright-row",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/band-upright-row"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/b64576d9-b2e6-4869-83e8-38f03349f26a.mp4",
    "mediaPath": "/exercises/band-upright-row.mp4"
  },
  {
    "slug": "band-warm-up-dynamic-shoulder-stretch",
    "sourceSlug": "band-warm-up-dynamic-shoulder-stretch",
    "sourceRecordIds": [
      "73fe2fc2-e53c-4fbc-b137-1d02540c56ee"
    ],
    "name": "Band Warm-Up Dynamic Shoulder Stretch",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/band-warm-up-dynamic-shoulder-stretch",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/band-warm-up-dynamic-shoulder-stretch"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/fb552ef7-a0e9-44d5-bed1-d0192234d886.mp4",
    "mediaPath": "/exercises/band-warm-up-dynamic-shoulder-stretch.mp4"
  },
  {
    "slug": "banded-face-pull",
    "sourceSlug": "banded-face-pull",
    "sourceRecordIds": [
      "9b1d4ec9-e0b9-415a-96c2-cf24f3bb9e77"
    ],
    "name": "Banded Face Pull",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/banded-face-pull",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/banded-face-pull"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/221b5c57-a4cc-4f75-a28e-dcb11e92633a.mp4",
    "mediaPath": "/exercises/banded-face-pull.mp4"
  },
  {
    "slug": "bar-cable-biceps-curl",
    "sourceSlug": "bar-cable-biceps-curl",
    "sourceRecordIds": [
      "06744582-2ff9-4495-bdfb-6d10c13048d4"
    ],
    "name": "Bar Cable Biceps Curl",
    "categories": [
      "Biceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/biceps/bar-cable-biceps-curl",
    "sourcePages": {
      "Biceps": "https://smartworkout.app/en/exercise-library/biceps/bar-cable-biceps-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/067fd90e-7865-455c-abfe-b082dbe1daf8.mp4",
    "mediaPath": "/exercises/bar-cable-biceps-curl.mp4"
  },
  {
    "slug": "barbell-behind-neck-shoulder-press",
    "sourceSlug": "barbell-behind-neck-shoulder-press",
    "sourceRecordIds": [
      "019a870f-c75a-96aa-addc-5bc492b68bc8"
    ],
    "name": "Barbell Behind Neck Shoulder Press",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/barbell-behind-neck-shoulder-press",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/barbell-behind-neck-shoulder-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/a260d6a5-06a4-4be9-a739-4005484d4683.mp4",
    "mediaPath": "/exercises/barbell-behind-neck-shoulder-press.mp4"
  },
  {
    "slug": "barbell-bench-press",
    "sourceSlug": "barbell-bench-press",
    "sourceRecordIds": [
      "dba6c9ac-e99c-4486-5c88-7ff4403c4608"
    ],
    "name": "Barbell Bench Press",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/barbell-bench-press",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/barbell-bench-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/30f3160a-3a57-426a-a3b9-4eed573310f8.mp4",
    "mediaPath": "/exercises/barbell-bench-press.mp4"
  },
  {
    "slug": "barbell-bench-press-with-chains",
    "sourceSlug": "barbell-bench-press-with-chains",
    "sourceRecordIds": [
      "781a637f-61a2-4fd9-adf6-2578f7bc1f45"
    ],
    "name": "Barbell Bench Press with Chains",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/barbell-bench-press-with-chains",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/barbell-bench-press-with-chains"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/04001bdc-c78d-4d5b-9e7d-c53983b9087a.mp4",
    "mediaPath": "/exercises/barbell-bench-press-with-chains.mp4"
  },
  {
    "slug": "barbell-bent-over-row",
    "sourceSlug": "barbell-bent-over-row",
    "sourceRecordIds": [
      "0c3e27ed-e95b-7611-a3e8-7dab63585d21"
    ],
    "name": "Barbell Bent Over Row",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/barbell-bent-over-row",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/barbell-bent-over-row"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/101feeac-462a-48cc-9376-38a2077b9116.mp4",
    "mediaPath": "/exercises/barbell-bent-over-row.mp4"
  },
  {
    "slug": "barbell-bent-over-row-from-pin",
    "sourceSlug": "barbell-bent-over-row-from-pin",
    "sourceRecordIds": [
      "227db3f3-d33f-4f86-b14f-56f32f12d62b"
    ],
    "name": "Barbell Bent Over Row From Pin",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/barbell-bent-over-row-from-pin",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/barbell-bent-over-row-from-pin"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/cb9d90dc-949d-40a2-875e-ad8eea0d41dc.mp4",
    "mediaPath": "/exercises/barbell-bent-over-row-from-pin.mp4"
  },
  {
    "slug": "barbell-bulgarian-squat",
    "sourceSlug": "barbell-bulgarian-squat",
    "sourceRecordIds": [
      "ff743dcc-509e-48dd-bacd-694771441e27"
    ],
    "name": "Barbell Bulgarian Squat",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/barbell-bulgarian-squat",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/barbell-bulgarian-squat"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/ce85e41c-3a1c-4442-9506-38a27cd7414c.mp4",
    "mediaPath": "/exercises/barbell-bulgarian-squat.mp4"
  },
  {
    "slug": "barbell-calf-raise",
    "sourceSlug": "barbell-calf-raise",
    "sourceRecordIds": [
      "085cfcf8-548d-44df-8e92-eb9936752382"
    ],
    "name": "Barbell Calf Raise",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/barbell-calf-raise",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/barbell-calf-raise"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/06917492-58a0-4a7d-9efb-53c2fd92c4ba.mp4",
    "mediaPath": "/exercises/barbell-calf-raise.mp4"
  },
  {
    "slug": "barbell-cossack-squat",
    "sourceSlug": "barbell-cossack-squat",
    "sourceRecordIds": [
      "c0163f74-9b9d-44f8-9ee9-78af5a3169cd"
    ],
    "name": "Barbell Cossack Squat",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/barbell-cossack-squat",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/barbell-cossack-squat"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/4e18d581-14e2-46d0-918f-b2fa9b40e5e5.mp4",
    "mediaPath": "/exercises/barbell-cossack-squat.mp4"
  },
  {
    "slug": "barbell-drag-curl",
    "sourceSlug": "barbell-drag-curl",
    "sourceRecordIds": [
      "b58d9bf9-6663-4eb7-917b-c1e3195b43f8"
    ],
    "name": "Barbell Drag Curl",
    "categories": [
      "Biceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/biceps/barbell-drag-curl",
    "sourcePages": {
      "Biceps": "https://smartworkout.app/en/exercise-library/biceps/barbell-drag-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/64fd3334-fd85-4118-9d1a-a408bcfffeb5.mp4",
    "mediaPath": "/exercises/barbell-drag-curl.mp4"
  },
  {
    "slug": "barbell-floor-press",
    "sourceSlug": "barbell-floor-press",
    "sourceRecordIds": [
      "07747821-38bb-4522-9f6b-b4ae4abf2282"
    ],
    "name": "Barbell Floor Press",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/barbell-floor-press",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/barbell-floor-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/8b18f8e1-e2d8-41b9-a5e5-692999b6c551.mp4",
    "mediaPath": "/exercises/barbell-floor-press.mp4"
  },
  {
    "slug": "barbell-front-raise",
    "sourceSlug": "barbell-front-raise",
    "sourceRecordIds": [
      "8a6508f0-65fa-4c20-9e1a-c8905b232b15"
    ],
    "name": "Barbell Front Raise",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/barbell-front-raise",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/barbell-front-raise"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/951c8728-438b-48b2-83d6-c9422cc511d6.mp4",
    "mediaPath": "/exercises/barbell-front-raise.mp4"
  },
  {
    "slug": "barbell-glute-bridge",
    "sourceSlug": "barbell-glute-bridge",
    "sourceRecordIds": [
      "7bb5b691-348a-4763-ba60-2ec25faf3965"
    ],
    "name": "Barbell Glute Bridge",
    "categories": [
      "Gluteal"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/gluteus/barbell-glute-bridge",
    "sourcePages": {
      "Gluteal": "https://smartworkout.app/en/exercise-library/gluteus/barbell-glute-bridge"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/b5b2db70-8b95-448f-a858-a4808cc4e141.mp4",
    "mediaPath": "/exercises/barbell-glute-bridge.mp4"
  },
  {
    "slug": "barbell-good-morning",
    "sourceSlug": "barbell-good-morning",
    "sourceRecordIds": [
      "2811badd-ff6d-946b-c36f-aae77cd6fa38"
    ],
    "name": "Barbell Good Morning",
    "categories": [
      "Gluteal"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/gluteus/barbell-good-morning",
    "sourcePages": {
      "Gluteal": "https://smartworkout.app/en/exercise-library/gluteus/barbell-good-morning"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/3df96014-5ab8-4ce1-9ad7-d6d31e263f97.mp4",
    "mediaPath": "/exercises/barbell-good-morning.mp4"
  },
  {
    "slug": "barbell-hack-squat",
    "sourceSlug": "barbell-hack-squat",
    "sourceRecordIds": [
      "6910eb66-b93d-4fbe-a3ac-a50d9152ddbb"
    ],
    "name": "Barbell Hack Squat",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/barbell-hack-squat",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/barbell-hack-squat"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/594dbe4c-f506-489f-b891-daf6538fa6d9.mp4",
    "mediaPath": "/exercises/barbell-hack-squat.mp4"
  },
  {
    "slug": "barbell-incline-wide-grip-row",
    "sourceSlug": "barbell-incline-wide-grip-row",
    "sourceRecordIds": [
      "ddc441a1-c226-4a9d-8035-40a484173f38"
    ],
    "name": "Barbell Incline Wide Grip Row",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/barbell-incline-wide-grip-row",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/barbell-incline-wide-grip-row"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/28f1fe24-7ef7-47b4-a7a6-5e7b7b3cb5e6.mp4",
    "mediaPath": "/exercises/barbell-incline-wide-grip-row.mp4"
  },
  {
    "slug": "barbell-larsen-press",
    "sourceSlug": "barbell-larsen-press",
    "sourceRecordIds": [
      "80d1410f-b7b0-4bb1-83f5-9fd2ea4b29f2"
    ],
    "name": "Barbell Larsen Press",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/barbell-larsen-press",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/barbell-larsen-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/1c76c330-7f85-4b5e-a464-1d8bd9ac863e.mp4",
    "mediaPath": "/exercises/barbell-larsen-press.mp4"
  },
  {
    "slug": "barbell-narrow-grip-upright-row",
    "sourceSlug": "barbell-narrow-grip-upright-row",
    "sourceRecordIds": [
      "68152684-1e2f-1ffb-39dc-fd1c741f63ac"
    ],
    "name": "Barbell Narrow Grip Upright Row",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/barbell-narrow-grip-upright-row",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/barbell-narrow-grip-upright-row"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/00adea9e-0267-4a00-8f1a-02d749c6576c.mp4",
    "mediaPath": "/exercises/barbell-narrow-grip-upright-row.mp4"
  },
  {
    "slug": "barbell-overhead-press",
    "sourceSlug": "barbell-overhead-press",
    "sourceRecordIds": [
      "247e913a-57cb-f102-d432-77de609ce049"
    ],
    "name": "Barbell Overhead Press",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/barbell-overhead-press",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/barbell-overhead-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/eee45f5c-89a3-45a5-953d-c83cb7c6b817.mp4",
    "mediaPath": "/exercises/barbell-overhead-press.mp4"
  },
  {
    "slug": "barbell-overhead-squat",
    "sourceSlug": "barbell-overhead-squat",
    "sourceRecordIds": [
      "fd6bf4b3-3d1e-4036-b4c0-e6fded490b43"
    ],
    "name": "Barbell Overhead Squat",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/barbell-overhead-squat",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/barbell-overhead-squat"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/5f3c1824-528c-4b58-b660-f7b248ec6816.mp4",
    "mediaPath": "/exercises/barbell-overhead-squat.mp4"
  },
  {
    "slug": "barbell-preacher-curl",
    "sourceSlug": "barbell-preacher-curl",
    "sourceRecordIds": [
      "9d80eba8-7872-41fc-879c-47632f253b44"
    ],
    "name": "Barbell Preacher Curl",
    "categories": [
      "Biceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/biceps/barbell-preacher-curl",
    "sourcePages": {
      "Biceps": "https://smartworkout.app/en/exercise-library/biceps/barbell-preacher-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/0c14d042-5f2f-483e-a81d-e96f1803f5ac.mp4",
    "mediaPath": "/exercises/barbell-preacher-curl.mp4"
  },
  {
    "slug": "barbell-prone-incline-curl",
    "sourceSlug": "barbell-prone-incline-curl",
    "sourceRecordIds": [
      "5ef57127-8673-4d29-a362-fdce93cd48f0"
    ],
    "name": "Barbell Prone Incline Curl",
    "categories": [
      "Biceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/biceps/barbell-prone-incline-curl",
    "sourcePages": {
      "Biceps": "https://smartworkout.app/en/exercise-library/biceps/barbell-prone-incline-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/a424a5fe-3dce-4fe7-a98d-2d75c50fdbaa.mp4",
    "mediaPath": "/exercises/barbell-prone-incline-curl.mp4"
  },
  {
    "slug": "barbell-pullover",
    "sourceSlug": "barbell-pullover",
    "sourceRecordIds": [
      "62df860b-c893-4883-a66c-9b7be6a6bd63"
    ],
    "name": "Barbell Pullover",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/barbell-pullover",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/barbell-pullover"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/e5628a22-980d-4a2d-ba67-8923508ac2e2.mp4",
    "mediaPath": "/exercises/barbell-pullover.mp4"
  },
  {
    "slug": "barbell-push-press",
    "sourceSlug": "barbell-push-press",
    "sourceRecordIds": [
      "19862249-cbd3-4104-bcc0-b5ad1c21bd73"
    ],
    "name": "Barbell Push Press",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/barbell-push-press",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/barbell-push-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/5f36f500-8cfe-4c4f-a4ba-0ec33c72261e.mp4",
    "mediaPath": "/exercises/barbell-push-press.mp4"
  },
  {
    "slug": "barbell-rack-pull",
    "sourceSlug": "barbell-rack-pull",
    "sourceRecordIds": [
      "6ded7b8d-f4db-421f-bc3e-827bd7c9df81"
    ],
    "name": "Barbell Rack Pull",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/barbell-rack-pull",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/barbell-rack-pull"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/0ff3c7df-bbc5-429d-b225-9a980c6c2712.mp4",
    "mediaPath": "/exercises/barbell-rack-pull.mp4"
  },
  {
    "slug": "barbell-rear-delt-raise",
    "sourceSlug": "barbell-rear-delt-raise",
    "sourceRecordIds": [
      "f46bcb1e-3eff-49d3-adee-000a1502fd8d"
    ],
    "name": "Barbell Rear Delt Raise",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/barbell-rear-delt-raise",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/barbell-rear-delt-raise"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/c40b0cfe-e3bc-4f4f-82db-a227b8ca30be.mp4",
    "mediaPath": "/exercises/barbell-rear-delt-raise.mp4"
  },
  {
    "slug": "barbell-rear-delt-row",
    "sourceSlug": "barbell-rear-delt-row",
    "sourceRecordIds": [
      "b4eb0459-9ad3-4a47-8add-4c80872785b7"
    ],
    "name": "Barbell Rear Delt Row",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/barbell-rear-delt-row",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/barbell-rear-delt-row"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/b08fc1c6-77bf-43ee-aae1-c06f999762fe.mp4",
    "mediaPath": "/exercises/barbell-rear-delt-row.mp4"
  },
  {
    "slug": "barbell-rear-lunge-on-step",
    "sourceSlug": "barbell-rear-lunge-on-step",
    "sourceRecordIds": [
      "50c17111-7979-4354-85cc-62df98b2d62a"
    ],
    "name": "Barbell Rear Lunge On Step",
    "categories": [
      "Gluteal"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/gluteus/barbell-rear-lunge-on-step",
    "sourcePages": {
      "Gluteal": "https://smartworkout.app/en/exercise-library/gluteus/barbell-rear-lunge-on-step"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/6d9a7e82-6bb1-4687-9d77-ded32f7a58ee.mp4",
    "mediaPath": "/exercises/barbell-rear-lunge-on-step.mp4"
  },
  {
    "slug": "barbell-reverse-grip-bent-over-row",
    "sourceSlug": "barbell-reverse-grip-bent-over-row",
    "sourceRecordIds": [
      "9df4db0a-a574-4f3c-b6da-6c289bd1c508"
    ],
    "name": "Barbell Reverse Grip Bent Over Row",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/barbell-reverse-grip-bent-over-row",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/barbell-reverse-grip-bent-over-row"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/cbedc9e5-2e62-44b1-8e9d-bc9261db5de4.mp4",
    "mediaPath": "/exercises/barbell-reverse-grip-bent-over-row.mp4"
  },
  {
    "slug": "barbell-reverse-grip-forearm-curl",
    "sourceSlug": "barbell-reverse-grip-forearm-curl",
    "sourceRecordIds": [
      "8662095d-cb00-1466-73f1-70394857c241"
    ],
    "name": "Barbell Reverse Grip Forearm Curl",
    "categories": [
      "Forearms"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/forearms/barbell-reverse-grip-forearm-curl",
    "sourcePages": {
      "Forearms": "https://smartworkout.app/en/exercise-library/forearms/barbell-reverse-grip-forearm-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/c85f9c74-1ba7-4df5-98aa-3e0f5f2abc15.mp4",
    "mediaPath": "/exercises/barbell-reverse-grip-forearm-curl.mp4"
  },
  {
    "slug": "barbell-reverse-lunges",
    "sourceSlug": "barbell-reverse-lunges",
    "sourceRecordIds": [
      "8abc41c2-862b-4c51-81df-3a8c341a03d6"
    ],
    "name": "Barbell Reverse Lunges",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/barbell-reverse-lunges",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/barbell-reverse-lunges"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/b37670f8-1281-4c54-80d9-833a60760102.mp4",
    "mediaPath": "/exercises/barbell-reverse-lunges.mp4"
  },
  {
    "slug": "barbell-reverse-wrist-curl",
    "sourceSlug": "barbell-reverse-wrist-curl",
    "sourceRecordIds": [
      "bf409651-d501-4f6f-b314-cd0cc5452063"
    ],
    "name": "Barbell Reverse Wrist Curl",
    "categories": [
      "Forearms"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/forearms/barbell-reverse-wrist-curl",
    "sourcePages": {
      "Forearms": "https://smartworkout.app/en/exercise-library/forearms/barbell-reverse-wrist-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/e800f525-c7ea-4236-a0f8-527fa049fa26.mp4",
    "mediaPath": "/exercises/barbell-reverse-wrist-curl.mp4"
  },
  {
    "slug": "barbell-rollout-kneeling",
    "sourceSlug": "barbell-rollout---kneeling",
    "sourceRecordIds": [
      "b445a407-9f2f-477b-afa6-9be25ecefc35"
    ],
    "name": "Barbell Rollout - Kneeling",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/barbell-rollout---kneeling",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/barbell-rollout---kneeling"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/d35b5147-f146-4796-8dce-b27745dc835b.mp4",
    "mediaPath": "/exercises/barbell-rollout-kneeling.mp4"
  },
  {
    "slug": "barbell-shoulder-grip-upright-row",
    "sourceSlug": "barbell-shoulder-grip-upright-row",
    "sourceRecordIds": [
      "85ee1bd7-ae5f-43ea-bef2-590f3e7e75ff"
    ],
    "name": "Barbell Shoulder Grip Upright Row",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/barbell-shoulder-grip-upright-row",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/barbell-shoulder-grip-upright-row"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/67366bdf-c624-4e65-8046-7204d48c1815.mp4",
    "mediaPath": "/exercises/barbell-shoulder-grip-upright-row.mp4"
  },
  {
    "slug": "barbell-shoulder-shrug",
    "sourceSlug": "barbell-shoulder-shrug",
    "sourceRecordIds": [
      "963e4937-5b35-480d-e91e-f8f53b2cc64e"
    ],
    "name": "Barbell Shoulder Shrug",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/barbell-shoulder-shrug",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/barbell-shoulder-shrug"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/eb03004d-95da-4439-a02a-f8735ca5655d.mp4",
    "mediaPath": "/exercises/barbell-shoulder-shrug.mp4"
  },
  {
    "slug": "barbell-shrug-behind-the-back",
    "sourceSlug": "barbell-shrug-behind-the-back",
    "sourceRecordIds": [
      "49d5a7b1-678a-4e88-848b-a6468864bf2d"
    ],
    "name": "Barbell Shrug Behind The Back",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/barbell-shrug-behind-the-back",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/barbell-shrug-behind-the-back"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/e72b6c0c-7465-4cba-90d7-2372f01c92da.mp4",
    "mediaPath": "/exercises/barbell-shrug-behind-the-back.mp4"
  },
  {
    "slug": "barbell-split-squat",
    "sourceSlug": "barbell-split-squat",
    "sourceRecordIds": [
      "7cf8467c-4519-487c-b41e-7d874d7d3a8f"
    ],
    "name": "Barbell Split Squat",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/barbell-split-squat",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/barbell-split-squat"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/320a0f49-c7b5-4635-be01-3985a4df84cd.mp4",
    "mediaPath": "/exercises/barbell-split-squat.mp4"
  },
  {
    "slug": "barbell-squat",
    "sourceSlug": "barbell-squat",
    "sourceRecordIds": [
      "145b65df-1575-4204-852c-0e3f24b29139"
    ],
    "name": "Barbell Squat",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/barbell-squat",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/barbell-squat"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/ceb84676-82fe-4281-81b2-8aef624c83ba.mp4",
    "mediaPath": "/exercises/barbell-squat.mp4"
  },
  {
    "slug": "barbell-standing-back-wrist-curl",
    "sourceSlug": "barbell-standing-back-wrist-curl",
    "sourceRecordIds": [
      "5ee4154e-6595-4f89-92bf-b36ad01d149f"
    ],
    "name": "Barbell Standing Back Wrist Curl",
    "categories": [
      "Forearms"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/forearms/barbell-standing-back-wrist-curl",
    "sourcePages": {
      "Forearms": "https://smartworkout.app/en/exercise-library/forearms/barbell-standing-back-wrist-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/94e02ebc-19ff-4884-9141-d5edac6f314c.mp4",
    "mediaPath": "/exercises/barbell-standing-back-wrist-curl.mp4"
  },
  {
    "slug": "barbell-standing-twist",
    "sourceSlug": "barbell-standing-twist",
    "sourceRecordIds": [
      "56f2585b-203d-4be6-9957-c52bcd9e4d73"
    ],
    "name": "Barbell Standing Twist",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/barbell-standing-twist",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/barbell-standing-twist"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/661d2e49-9612-4f4c-9885-18d6c6fa37f7.mp4",
    "mediaPath": "/exercises/barbell-standing-twist.mp4"
  },
  {
    "slug": "barbell-standing-wrist-curl",
    "sourceSlug": "barbell-standing-wrist-curl",
    "sourceRecordIds": [
      "2fc473c6-c392-4036-8fa8-fdf760cb65d2"
    ],
    "name": "Barbell Standing Wrist Curl",
    "categories": [
      "Forearms"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/forearms/barbell-standing-wrist-curl",
    "sourcePages": {
      "Forearms": "https://smartworkout.app/en/exercise-library/forearms/barbell-standing-wrist-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/8ac66913-d841-40fb-a1f1-57a76e24282c.mp4",
    "mediaPath": "/exercises/barbell-standing-wrist-curl.mp4"
  },
  {
    "slug": "barbell-step-up",
    "sourceSlug": "barbell-step-up",
    "sourceRecordIds": [
      "214c92ad-dfe0-40a9-a697-d492de526d44"
    ],
    "name": "Barbell Step-up",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/barbell-step-up",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/barbell-step-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/31c9c173-599f-414b-bce4-ae32b7558e6a.mp4",
    "mediaPath": "/exercises/barbell-step-up.mp4"
  },
  {
    "slug": "barbell-straight-leg-deadlift",
    "sourceSlug": "barbell-straight-leg-deadlift",
    "sourceRecordIds": [
      "6ee19894-3651-9c16-fdd7-39bfe1c755af"
    ],
    "name": "Barbell Straight Leg Deadlift",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/barbell-straight-leg-deadlift",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/barbell-straight-leg-deadlift"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/b07f6cbe-dd15-40c1-a5f6-1ef645d9777d.mp4",
    "mediaPath": "/exercises/barbell-straight-leg-deadlift.mp4"
  },
  {
    "slug": "barbell-sumo-squat",
    "sourceSlug": "barbell-sumo-squat",
    "sourceRecordIds": [
      "325e9215-4fa0-4fe6-b368-cf1ea2827d5b"
    ],
    "name": "Barbell Sumo Squat",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/barbell-sumo-squat",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/barbell-sumo-squat"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/0c449cf5-d33a-4276-a95a-4a563790904d.mp4",
    "mediaPath": "/exercises/barbell-sumo-squat.mp4"
  },
  {
    "slug": "barbell-thruster",
    "sourceSlug": "barbell-thruster",
    "sourceRecordIds": [
      "7132a06f-eea5-4cc1-bbf2-885b384c639c"
    ],
    "name": "Barbell Thruster",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/barbell-thruster",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/barbell-thruster"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/42744805-6e12-4cbb-b61b-fede5201b37e.mp4",
    "mediaPath": "/exercises/barbell-thruster.mp4"
  },
  {
    "slug": "barbell-walking-lunges",
    "sourceSlug": "barbell-walking-lunges",
    "sourceRecordIds": [
      "5df2c7d2-f24b-4fd4-a358-6155858b088e"
    ],
    "name": "Barbell Walking Lunges",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/barbell-walking-lunges",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/barbell-walking-lunges"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/d8042d5e-0b53-4944-80ae-b8e7a7ab8896.mp4",
    "mediaPath": "/exercises/barbell-walking-lunges.mp4"
  },
  {
    "slug": "barbell-wall-curl",
    "sourceSlug": "barbell-wall-curl",
    "sourceRecordIds": [
      "f0cc1e0a-c5a6-472c-bf62-6ac5056d34a3"
    ],
    "name": "Barbell Wall Curl",
    "categories": [
      "Biceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/biceps/barbell-wall-curl",
    "sourcePages": {
      "Biceps": "https://smartworkout.app/en/exercise-library/biceps/barbell-wall-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/a27b52d0-29a3-4e50-9aee-62267356cc3b.mp4",
    "mediaPath": "/exercises/barbell-wall-curl.mp4"
  },
  {
    "slug": "barbell-wide-grip-upright-row",
    "sourceSlug": "barbell-wide-grip-upright-row",
    "sourceRecordIds": [
      "5a4288af-d6e5-1b30-d668-4a6e3b55b399"
    ],
    "name": "Barbell Wide Grip Upright Row",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/barbell-wide-grip-upright-row",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/barbell-wide-grip-upright-row"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/fcd6e4b1-6ec5-4065-af19-6e715644c5ac.mp4",
    "mediaPath": "/exercises/barbell-wide-grip-upright-row.mp4"
  },
  {
    "slug": "barbell-wrist-curl",
    "sourceSlug": "barbell-wrist-curl",
    "sourceRecordIds": [
      "d9aea411-b71e-4105-ac8d-82746432c8f0"
    ],
    "name": "Barbell Wrist Curl",
    "categories": [
      "Forearms"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/forearms/barbell-wrist-curl",
    "sourcePages": {
      "Forearms": "https://smartworkout.app/en/exercise-library/forearms/barbell-wrist-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/171a5b06-0839-4a18-ad58-88e93756e6b3.mp4",
    "mediaPath": "/exercises/barbell-wrist-curl.mp4"
  },
  {
    "slug": "bayesian-cable-curl",
    "sourceSlug": "bayesian-cable-curl",
    "sourceRecordIds": [
      "0637306a-60ac-431c-89eb-f4a747ce6aa8"
    ],
    "name": "Bayesian Cable Curl",
    "categories": [
      "Biceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/biceps/bayesian-cable-curl",
    "sourcePages": {
      "Biceps": "https://smartworkout.app/en/exercise-library/biceps/bayesian-cable-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/b2ec3a9e-1251-4f53-bbd2-a458f2cf1f19.mp4",
    "mediaPath": "/exercises/bayesian-cable-curl.mp4"
  },
  {
    "slug": "bayesian-cable-curl-face-away",
    "sourceSlug": "bayesian-cable-curl-(face-away)",
    "sourceRecordIds": [
      "a2168c01-69e1-46a8-a4e2-902cb3ea166a"
    ],
    "name": "Bayesian Cable Curl (Face Away)",
    "categories": [
      "Biceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/biceps/bayesian-cable-curl-(face-away)",
    "sourcePages": {
      "Biceps": "https://smartworkout.app/en/exercise-library/biceps/bayesian-cable-curl-(face-away)"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/4111ad25-be51-42f9-aa08-323486c44cc0.mp4",
    "mediaPath": "/exercises/bayesian-cable-curl-face-away.mp4"
  },
  {
    "slug": "bayesian-cable-curl-seated",
    "sourceSlug": "bayesian-cable-curl-seated",
    "sourceRecordIds": [
      "757ae740-c2ef-4a8d-9199-fd48ea06dcc9"
    ],
    "name": "Bayesian Cable Curl Seated",
    "categories": [
      "Biceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/biceps/bayesian-cable-curl-seated",
    "sourcePages": {
      "Biceps": "https://smartworkout.app/en/exercise-library/biceps/bayesian-cable-curl-seated"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/dd6563a0-e8e8-4d3e-973a-ba9473f8423b.mp4",
    "mediaPath": "/exercises/bayesian-cable-curl-seated.mp4"
  },
  {
    "slug": "bear-plank",
    "sourceSlug": "bear-plank",
    "sourceRecordIds": [
      "bb9968cb-20e4-47bd-8f4b-4991ca622fc7"
    ],
    "name": "Bear Plank",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/bear-plank",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/bear-plank"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/883470c9-f7a2-4eab-a185-c270dc8975da.mp4",
    "mediaPath": "/exercises/bear-plank.mp4"
  },
  {
    "slug": "bench-front-squat",
    "sourceSlug": "bench-front-squat",
    "sourceRecordIds": [
      "dd3564b4-b057-4835-87ff-f87b619e07f5"
    ],
    "name": "Bench Front Squat",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/bench-front-squat",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/bench-front-squat"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/6b184f47-cf2c-440d-8342-dc459d8611f9.mp4",
    "mediaPath": "/exercises/bench-front-squat.mp4"
  },
  {
    "slug": "bench-press-with-resistance-band",
    "sourceSlug": "bench-press-with-resistance-band",
    "sourceRecordIds": [
      "cb600c65-e1d1-42fa-874f-9568e52c8c48"
    ],
    "name": "Bench Press With Resistance Band",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/bench-press-with-resistance-band",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/bench-press-with-resistance-band"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/ffb47556-bbe3-4055-ab01-a5c1dd93cf2c.mp4",
    "mediaPath": "/exercises/bench-press-with-resistance-band.mp4"
  },
  {
    "slug": "bent-arm-chest-stretch",
    "sourceSlug": "bent-arm-chest-stretch",
    "sourceRecordIds": [
      "e1964940-8d58-45ac-9edb-a63459417619"
    ],
    "name": "Bent Arm Chest Stretch",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/bent-arm-chest-stretch",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/bent-arm-chest-stretch"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/82dd6c00-4236-4d7a-98fb-a140411f1ddc.mp4",
    "mediaPath": "/exercises/bent-arm-chest-stretch.mp4"
  },
  {
    "slug": "bent-over-dumbbell-lateral-raise",
    "sourceSlug": "bent-over-dumbbell-lateral-raise",
    "sourceRecordIds": [
      "241b716d-5fcd-42ca-b987-5e78239d4ea2"
    ],
    "name": "Bent Over Dumbbell Lateral Raise",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/bent-over-dumbbell-lateral-raise",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/bent-over-dumbbell-lateral-raise"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/2ebdc867-f60b-4838-af95-cf69171be570.mp4",
    "mediaPath": "/exercises/bent-over-dumbbell-lateral-raise.mp4"
  },
  {
    "slug": "bent-over-kettlebell-row",
    "sourceSlug": "bent-over-kettlebell-row",
    "sourceRecordIds": [
      "2d243c0b-02d2-4e67-8a63-dca09e86b55a"
    ],
    "name": "Bent Over Kettlebell Row",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/bent-over-kettlebell-row",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/bent-over-kettlebell-row"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/87732c0a-5922-46b3-aa94-c0fa6a8f6b73.mp4",
    "mediaPath": "/exercises/bent-over-kettlebell-row.mp4"
  },
  {
    "slug": "biceps-barbell-curl",
    "sourceSlug": "biceps-barbell-curl",
    "sourceRecordIds": [
      "6f35ebb5-d31e-1ab7-310f-25b8cada0293"
    ],
    "name": "Biceps Barbell Curl",
    "categories": [
      "Biceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/biceps/biceps-barbell-curl",
    "sourcePages": {
      "Biceps": "https://smartworkout.app/en/exercise-library/biceps/biceps-barbell-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/85c25a54-be7e-40a6-a676-4e906f3985d1.mp4",
    "mediaPath": "/exercises/biceps-barbell-curl.mp4"
  },
  {
    "slug": "bicycle-crunches",
    "sourceSlug": "bicycle-crunches",
    "sourceRecordIds": [
      "465a9a4a-e854-4dba-be5b-51394c186eeb"
    ],
    "name": "Bicycle Crunches",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/bicycle-crunches",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/bicycle-crunches"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/fd4b37e5-41f9-430c-bfbb-481e4eb5631f.mp4",
    "mediaPath": "/exercises/bicycle-crunches.mp4"
  },
  {
    "slug": "bird-dog",
    "sourceSlug": "bird-dog",
    "sourceRecordIds": [
      "ed5e6c95-151e-46e2-9fbe-59ab50294ee3"
    ],
    "name": "Bird Dog",
    "categories": [
      "Gluteal"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/gluteus/bird-dog",
    "sourcePages": {
      "Gluteal": "https://smartworkout.app/en/exercise-library/gluteus/bird-dog"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/5f6101d6-75bd-441c-bea8-4526f09b336c.mp4",
    "mediaPath": "/exercises/bird-dog.mp4"
  },
  {
    "slug": "bird-dog-plank",
    "sourceSlug": "bird-dog-plank",
    "sourceRecordIds": [
      "f5269fe9-4c03-44b9-a57c-25649650d382"
    ],
    "name": "Bird Dog Plank",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/bird-dog-plank",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/bird-dog-plank"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/1b1565ae-0669-46e4-bdf9-8d6841904aed.mp4",
    "mediaPath": "/exercises/bird-dog-plank.mp4"
  },
  {
    "slug": "bird-dog-push-up",
    "sourceSlug": "bird-dog-push-up",
    "sourceRecordIds": [
      "5993086a-9f98-4a7f-9ff8-c870fa693f68"
    ],
    "name": "Bird Dog Push-Up",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/bird-dog-push-up",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/bird-dog-push-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/320ee1df-5892-44a6-9497-c54388ba5c1a.mp4",
    "mediaPath": "/exercises/bird-dog-push-up.mp4"
  },
  {
    "slug": "bodyweight-windmill",
    "sourceSlug": "bodyweight-windmill",
    "sourceRecordIds": [
      "0a75e037-9658-4706-a497-d7efe844e10b"
    ],
    "name": "Bodyweight Windmill",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/bodyweight-windmill",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/bodyweight-windmill"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/657823d2-0269-4a23-8a9d-06de4520e352.mp4",
    "mediaPath": "/exercises/bodyweight-windmill.mp4"
  },
  {
    "slug": "bottom-up-rotation",
    "sourceSlug": "bottom-up-rotation",
    "sourceRecordIds": [
      "b8bf5d99-8df7-4eb8-aa9d-8bac39d070b7"
    ],
    "name": "Bottom up rotation",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/bottom-up-rotation",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/bottom-up-rotation"
    },
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
    "sourceSlug": "box-jumps",
    "sourceRecordIds": [
      "5fb31854-bd36-4046-a30f-8e80462af9a1"
    ],
    "name": "Box Jumps",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/box-jumps",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/box-jumps"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/e5d7fca6-f8f0-4fd9-a8d4-86d4e9f0404e.mp4",
    "mediaPath": "/exercises/box-jumps.mp4"
  },
  {
    "slug": "box-squat",
    "sourceSlug": "box-squat",
    "sourceRecordIds": [
      "d5f7a5ea-8fa8-48c3-aa0d-7e539dd3ac1a"
    ],
    "name": "Box Squat",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/box-squat",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/box-squat"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/f49ae37e-88ad-4fcf-ae51-e3e888076b48.mp4",
    "mediaPath": "/exercises/box-squat.mp4"
  },
  {
    "slug": "box-step-up",
    "sourceSlug": "box-step-up",
    "sourceRecordIds": [
      "27149543-dc50-48eb-86f7-022e7ab1b591"
    ],
    "name": "Box step-up",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/box-step-up",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/box-step-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/41edb925-db86-4bce-8ad6-cbea85768cd2.mp4",
    "mediaPath": "/exercises/box-step-up.mp4"
  },
  {
    "slug": "broad-jump",
    "sourceSlug": "broad-jump",
    "sourceRecordIds": [
      "ab1ace4a-9520-4b39-bc9b-20f63d191e11"
    ],
    "name": "Broad Jump",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/broad-jump",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/broad-jump"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/05973ca1-7fbb-4aee-856c-9c444204a8f4.mp4",
    "mediaPath": "/exercises/broad-jump.mp4"
  },
  {
    "slug": "bulgarian-bag-walking-lunges",
    "sourceSlug": "bulgarian-bag-walking-lunges",
    "sourceRecordIds": [
      "35fe1fbc-aff9-4328-b105-c648d3e38a1b"
    ],
    "name": "Bulgarian Bag Walking Lunges",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/bulgarian-bag-walking-lunges",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/bulgarian-bag-walking-lunges"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/3c831c1e-ee45-4dc8-9ad4-b8c00b35fca0.mp4",
    "mediaPath": "/exercises/bulgarian-bag-walking-lunges.mp4"
  },
  {
    "slug": "bulgarian-jump-squat",
    "sourceSlug": "bulgarian-jump-squat",
    "sourceRecordIds": [
      "b119509d-00e5-45f4-b7a5-2aa4a5da4d0f"
    ],
    "name": "Bulgarian Jump Squat",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/bulgarian-jump-squat",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/bulgarian-jump-squat"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/f7eb1a15-61f3-4fe6-8ef4-4e5dbf57c3f6.mp4",
    "mediaPath": "/exercises/bulgarian-jump-squat.mp4"
  },
  {
    "slug": "bulgarian-squat",
    "sourceSlug": "bulgarian-squat",
    "sourceRecordIds": [
      "d4f99d40-b883-4371-8b5f-87fc11343709"
    ],
    "name": "Bulgarian Squat",
    "categories": [
      "Gluteal"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/gluteus/bulgarian-squat",
    "sourcePages": {
      "Gluteal": "https://smartworkout.app/en/exercise-library/gluteus/bulgarian-squat"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/8cad5448-7785-49be-98ff-35ee12ea952b.mp4",
    "mediaPath": "/exercises/bulgarian-squat.mp4"
  },
  {
    "slug": "bulgarian-squat-smith",
    "sourceSlug": "bulgarian-squat-smith",
    "sourceRecordIds": [
      "427c3808-4df4-4b0f-803b-de87e130a135"
    ],
    "name": "Bulgarian Squat Smith",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/bulgarian-squat-smith",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/bulgarian-squat-smith"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/c4f04b2a-4767-49a1-8699-3c3b61b53b55.mp4",
    "mediaPath": "/exercises/bulgarian-squat-smith.mp4"
  },
  {
    "slug": "burpee",
    "sourceSlug": "burpee",
    "sourceRecordIds": [
      "ba99f018-cb2a-48e9-b48b-57046f791ba7"
    ],
    "name": "Burpee",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/burpee",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/burpee"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/8e97ea66-51cf-4f21-9de6-0528f591129d.mp4",
    "mediaPath": "/exercises/burpee.mp4"
  },
  {
    "slug": "butterfly-lean-forward-stretch",
    "sourceSlug": "butterfly-lean-forward-stretch",
    "sourceRecordIds": [
      "fa63a3e9-9bb3-41be-89d3-f37d22d9eebf"
    ],
    "name": "Butterfly Lean Forward Stretch",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/butterfly-lean-forward-stretch",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/butterfly-lean-forward-stretch"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/0f334696-ffa7-419b-b505-ab2cf9c7e845.mp4",
    "mediaPath": "/exercises/butterfly-lean-forward-stretch.mp4"
  },
  {
    "slug": "butterfly-stretch",
    "sourceSlug": "butterfly-stretch",
    "sourceRecordIds": [
      "bd750d56-64a0-4e9f-87c9-b1408246238e"
    ],
    "name": "Butterfly Stretch",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/butterfly-stretch",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/butterfly-stretch"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/a93bed96-d2b2-41bd-86b7-9fb14711a6ce.mp4",
    "mediaPath": "/exercises/butterfly-stretch.mp4"
  },
  {
    "slug": "cable-bench-press",
    "sourceSlug": "cable-bench-press",
    "sourceRecordIds": [
      "f50fa620-42a2-4306-9289-3e801068e662"
    ],
    "name": "Cable Bench Press",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/cable-bench-press",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/cable-bench-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/f3454e00-4dac-4f89-84e8-af80e8386e86.mp4",
    "mediaPath": "/exercises/cable-bench-press.mp4"
  },
  {
    "slug": "cable-close-grip-lat-pulldown",
    "sourceSlug": "cable-close-grip-lat-pulldown",
    "sourceRecordIds": [
      "91df77ee-5ffe-4d59-b1e5-885862ec28c3"
    ],
    "name": "Cable Close Grip Lat Pulldown",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/cable-close-grip-lat-pulldown",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/cable-close-grip-lat-pulldown"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/1bc93876-8995-48cf-ac81-d5df47e1e9f8.mp4",
    "mediaPath": "/exercises/cable-close-grip-lat-pulldown.mp4"
  },
  {
    "slug": "cable-cross-triceps-extension",
    "sourceSlug": "cable-cross-triceps-extension",
    "sourceRecordIds": [
      "0f7bb383-5b6c-4065-8d63-21b9925d37f0"
    ],
    "name": "Cable Cross Triceps Extension",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/cable-cross-triceps-extension",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/cable-cross-triceps-extension"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/bd97155f-d348-4a0f-9b59-78210312e476.mp4",
    "mediaPath": "/exercises/cable-cross-triceps-extension.mp4"
  },
  {
    "slug": "cable-double-arm-tricep-kickback",
    "sourceSlug": "cable-double-arm-tricep-kickback",
    "sourceRecordIds": [
      "dea12dfc-58cb-482e-ad0e-3dba4c1f49f0"
    ],
    "name": "Cable Double-Arm Tricep Kickback",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/cable-double-arm-tricep-kickback",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/cable-double-arm-tricep-kickback"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/e6705953-0cb3-42fe-8e03-d9daa430172e.mp4",
    "mediaPath": "/exercises/cable-double-arm-tricep-kickback.mp4"
  },
  {
    "slug": "cable-face-pull",
    "sourceSlug": "cable-face-pull",
    "sourceRecordIds": [
      "5847de4c-699f-4a50-a7a8-3815f8ddaf49"
    ],
    "name": "Cable Face Pull",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/cable-face-pull",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/cable-face-pull"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/782de101-95a5-47b3-bffa-82b124a7f3f9.mp4",
    "mediaPath": "/exercises/cable-face-pull.mp4"
  },
  {
    "slug": "cable-front-raise",
    "sourceSlug": "cable-front-raise",
    "sourceRecordIds": [
      "0d99097d-9865-470d-823e-a6170baf0631"
    ],
    "name": "Cable Front Raise",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/cable-front-raise",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/cable-front-raise"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/1f8d830e-0023-4bb6-b778-deb8d598227f.mp4",
    "mediaPath": "/exercises/cable-front-raise.mp4"
  },
  {
    "slug": "cable-hip-abducction",
    "sourceSlug": "cable-hip-abducction",
    "sourceRecordIds": [
      "245e0727-1c35-4965-aa28-0456d8969828"
    ],
    "name": "Cable Hip Abducction",
    "categories": [
      "Gluteal"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/gluteus/cable-hip-abducction",
    "sourcePages": {
      "Gluteal": "https://smartworkout.app/en/exercise-library/gluteus/cable-hip-abducction"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/f9d31544-ca7f-4c1a-921f-c2698ee8b26f.mp4",
    "mediaPath": "/exercises/cable-hip-abducction.mp4"
  },
  {
    "slug": "cable-hip-adduction",
    "sourceSlug": "cable-hip-adduction",
    "sourceRecordIds": [
      "99704170-da3e-48e5-bb24-33f8193d2892"
    ],
    "name": "Cable Hip Adduction",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/cable-hip-adduction",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/cable-hip-adduction"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/75694192-2ab2-47af-a3be-c68dc401b852.mp4",
    "mediaPath": "/exercises/cable-hip-adduction.mp4"
  },
  {
    "slug": "cable-horizontal-pallof-press",
    "sourceSlug": "cable-horizontal-pallof-press",
    "sourceRecordIds": [
      "d0e78959-c1de-400c-a7fb-44c1015d5013"
    ],
    "name": "Cable Horizontal Pallof Press",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/cable-horizontal-pallof-press",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/cable-horizontal-pallof-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/55f64d35-6349-455d-840c-ceeb2a87f010.mp4",
    "mediaPath": "/exercises/cable-horizontal-pallof-press.mp4"
  },
  {
    "slug": "cable-incline-skull-crusher",
    "sourceSlug": "cable-incline-skull-crusher",
    "sourceRecordIds": [
      "0bc3273a-e419-43f3-a559-fa641860f75c"
    ],
    "name": "Cable Incline Skull Crusher",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/cable-incline-skull-crusher",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/cable-incline-skull-crusher"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/16b6eb3b-c593-4e41-9f17-f90630f2ddf3.mp4",
    "mediaPath": "/exercises/cable-incline-skull-crusher.mp4"
  },
  {
    "slug": "cable-incline-y-raise-back-supported",
    "sourceSlug": "cable-incline-y-raise-back-supported",
    "sourceRecordIds": [
      "a0b86085-81e0-4078-a297-68e3d6796c4e"
    ],
    "name": "Cable Incline Y Raise Back Supported",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/cable-incline-y-raise-back-supported",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/cable-incline-y-raise-back-supported"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/38388e28-0819-4f2e-a1ec-5b030a2c7787.mp4",
    "mediaPath": "/exercises/cable-incline-y-raise-back-supported.mp4"
  },
  {
    "slug": "cable-kneeling-high-to-low-fly",
    "sourceSlug": "cable-kneeling-high-to-low-fly",
    "sourceRecordIds": [
      "22223d93-39ce-4efc-a1f9-b008d4506834"
    ],
    "name": "Cable Kneeling High To Low Fly",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/cable-kneeling-high-to-low-fly",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/cable-kneeling-high-to-low-fly"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/fe26e4e4-5024-47bf-b476-266eb81ee6d7.mp4",
    "mediaPath": "/exercises/cable-kneeling-high-to-low-fly.mp4"
  },
  {
    "slug": "cable-kneeling-side-crunch",
    "sourceSlug": "cable-kneeling-side-crunch",
    "sourceRecordIds": [
      "412d4c49-4c4f-49c4-9d24-9cdd176000fa"
    ],
    "name": "Cable Kneeling Side Crunch",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/cable-kneeling-side-crunch",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/cable-kneeling-side-crunch"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/c6d00884-56cf-4526-9ed9-4161b98d659e.mp4",
    "mediaPath": "/exercises/cable-kneeling-side-crunch.mp4"
  },
  {
    "slug": "cable-lat-pulldown",
    "sourceSlug": "cable-lat-pulldown",
    "sourceRecordIds": [
      "2ade8d6c-c91a-430f-96fc-da1d0f696526"
    ],
    "name": "Cable Lat Pulldown",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/cable-lat-pulldown",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/cable-lat-pulldown"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/4108d42f-8b09-4bc8-b7a9-d8d611d084ac.mp4",
    "mediaPath": "/exercises/cable-lat-pulldown.mp4"
  },
  {
    "slug": "cable-lateral-raise",
    "sourceSlug": "cable-lateral-raise",
    "sourceRecordIds": [
      "aac60f2b-2a58-6e5c-a473-fa6b1954a997"
    ],
    "name": "Cable Lateral Raise",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/cable-lateral-raise",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/cable-lateral-raise"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/08b97b98-1f46-4185-82a3-9a1fa6cec74f.mp4",
    "mediaPath": "/exercises/cable-lateral-raise.mp4"
  },
  {
    "slug": "cable-leaning-lateral-raise",
    "sourceSlug": "cable-leaning-lateral-raise",
    "sourceRecordIds": [
      "badf5b19-a932-4d33-9618-467ff540f9c9"
    ],
    "name": "Cable Leaning Lateral Raise",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/cable-leaning-lateral-raise",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/cable-leaning-lateral-raise"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/3b719213-829c-4d3f-af36-e75152ff1fa1.mp4",
    "mediaPath": "/exercises/cable-leaning-lateral-raise.mp4"
  },
  {
    "slug": "cable-middle-chest-fly",
    "sourceSlug": "cable-middle-chest-fly",
    "sourceRecordIds": [
      "45b2f349-b237-4a59-95e5-dca57f979930"
    ],
    "name": "Cable Middle Chest Fly",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/cable-middle-chest-fly",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/cable-middle-chest-fly"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/44caa7ce-5e94-41e7-b0d0-5b3153a86b32.mp4",
    "mediaPath": "/exercises/cable-middle-chest-fly.mp4"
  },
  {
    "slug": "cable-neutral-grip-lat-pulldown",
    "sourceSlug": "cable-neutral-grip-lat-pulldown",
    "sourceRecordIds": [
      "25472b18-efdc-438a-a2c2-ab72994be361",
      "cc39d401-ea05-f723-0500-64bbe65b589d"
    ],
    "name": "Cable Neutral Grip Lat Pulldown",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/cable-neutral-grip-lat-pulldown",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/cable-neutral-grip-lat-pulldown"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/5cdf873a-c0f0-4182-bd8d-5d77fe5d8c23.mp4",
    "mediaPath": "/exercises/cable-neutral-grip-lat-pulldown.mp4"
  },
  {
    "slug": "cable-overhead-triceps-extension",
    "sourceSlug": "cable-overhead-triceps-extension",
    "sourceRecordIds": [
      "70ff9832-f356-4c83-91b7-aec7d55babe8"
    ],
    "name": "Cable Overhead Triceps Extension",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/cable-overhead-triceps-extension",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/cable-overhead-triceps-extension"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/5047297f-ed82-4ebc-9e3c-f79effb1f596.mp4",
    "mediaPath": "/exercises/cable-overhead-triceps-extension.mp4"
  },
  {
    "slug": "cable-preacher-curl",
    "sourceSlug": "cable-preacher-curl",
    "sourceRecordIds": [
      "f6a2b92e-ea1f-4671-91a9-7e4313451e61"
    ],
    "name": "Cable Preacher Curl",
    "categories": [
      "Biceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/biceps/cable-preacher-curl",
    "sourcePages": {
      "Biceps": "https://smartworkout.app/en/exercise-library/biceps/cable-preacher-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/901d6b71-e16f-43e1-a2c0-598bd8d4b59f.mp4",
    "mediaPath": "/exercises/cable-preacher-curl.mp4"
  },
  {
    "slug": "cable-pull-through",
    "sourceSlug": "cable-pull-through",
    "sourceRecordIds": [
      "918edf74-fb94-41ae-af46-7cebebd231ad"
    ],
    "name": "Cable Pull Through",
    "categories": [
      "Gluteal"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/gluteus/cable-pull-through",
    "sourcePages": {
      "Gluteal": "https://smartworkout.app/en/exercise-library/gluteus/cable-pull-through"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/2d7d0c6f-8cd7-49c4-a2db-7140d77fa691.mp4",
    "mediaPath": "/exercises/cable-pull-through.mp4"
  },
  {
    "slug": "cable-rear-delt-fly-reverse-fly",
    "sourceSlug": "cable-rear-delt-fly-(reverse-fly)",
    "sourceRecordIds": [
      "8829eb3f-8a44-45c4-8a1b-038acb0e257d"
    ],
    "name": "Cable Rear Delt Fly (Reverse Fly)",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/cable-rear-delt-fly-(reverse-fly)",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/cable-rear-delt-fly-(reverse-fly)"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/8dfd61d2-bfec-457f-9681-54a43702cc56.mp4",
    "mediaPath": "/exercises/cable-rear-delt-fly-reverse-fly.mp4"
  },
  {
    "slug": "cable-reverse-grip-pulldown",
    "sourceSlug": "cable-reverse-grip-pulldown",
    "sourceRecordIds": [
      "ace91b1e-8045-481d-8ab6-3a40f6593d8b"
    ],
    "name": "Cable Reverse Grip Pulldown",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/cable-reverse-grip-pulldown",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/cable-reverse-grip-pulldown"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/86b78084-018b-4c3c-be8e-3e2ddddc8a64.mp4",
    "mediaPath": "/exercises/cable-reverse-grip-pulldown.mp4"
  },
  {
    "slug": "cable-romanian-deadlift",
    "sourceSlug": "cable-romanian-deadlift",
    "sourceRecordIds": [
      "dfa728cb-aef6-4b05-aca6-f6a4384c0a48"
    ],
    "name": "Cable Romanian Deadlift",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/cable-romanian-deadlift",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/cable-romanian-deadlift"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/f74dd58c-8915-4ae9-8073-b45716321ec2.mp4",
    "mediaPath": "/exercises/cable-romanian-deadlift.mp4"
  },
  {
    "slug": "cable-seated-rear-lateral-raise",
    "sourceSlug": "cable-seated-rear-lateral-raise",
    "sourceRecordIds": [
      "b856f495-d868-4b6b-ac13-634bb99709b7"
    ],
    "name": "Cable Seated Rear Lateral Raise",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/cable-seated-rear-lateral-raise",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/cable-seated-rear-lateral-raise"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/09df2003-ca3b-4a84-9af2-48c8f0dadab5.mp4",
    "mediaPath": "/exercises/cable-seated-rear-lateral-raise.mp4"
  },
  {
    "slug": "cable-seated-row-neutral-grip",
    "sourceSlug": "cable-seated-row-neutral-grip",
    "sourceRecordIds": [
      "b767db5f-87e1-42cf-b4dd-25f9899e0722"
    ],
    "name": "Cable Seated Row Neutral Grip",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/cable-seated-row-neutral-grip",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/cable-seated-row-neutral-grip"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/0e61ea8c-8d21-445d-a882-1a8bf3a87245.mp4",
    "mediaPath": "/exercises/cable-seated-row-neutral-grip.mp4"
  },
  {
    "slug": "cable-seated-supine-grip-row",
    "sourceSlug": "cable-seated-supine-grip-row",
    "sourceRecordIds": [
      "c9c26dea-3563-47ab-b2bb-e93a3021cea1"
    ],
    "name": "Cable Seated Supine Grip Row",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/cable-seated-supine-grip-row",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/cable-seated-supine-grip-row"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/c2a98bda-5862-460f-9a75-82698e5d4bd2.mp4",
    "mediaPath": "/exercises/cable-seated-supine-grip-row.mp4"
  },
  {
    "slug": "cable-shrug",
    "sourceSlug": "cable-shrug",
    "sourceRecordIds": [
      "d919d4f3-6cb0-4e11-b70a-3788dcc0a371"
    ],
    "name": "Cable Shrug",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/cable-shrug",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/cable-shrug"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/828981bf-726c-4948-96d8-31906a78d7ea.mp4",
    "mediaPath": "/exercises/cable-shrug.mp4"
  },
  {
    "slug": "cable-squatting-curl",
    "sourceSlug": "cable-squatting-curl",
    "sourceRecordIds": [
      "4ad778f6-7416-4755-a17a-5449201a0360"
    ],
    "name": "Cable Squatting Curl",
    "categories": [
      "Biceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/biceps/cable-squatting-curl",
    "sourcePages": {
      "Biceps": "https://smartworkout.app/en/exercise-library/biceps/cable-squatting-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/538bae6b-f014-425a-9c91-f12e80b53651.mp4",
    "mediaPath": "/exercises/cable-squatting-curl.mp4"
  },
  {
    "slug": "cable-standing-wrist-roll",
    "sourceSlug": "cable-standing-wrist-roll",
    "sourceRecordIds": [
      "fa5a7a63-5bd3-4032-9116-acffb083597c"
    ],
    "name": "Cable Standing Wrist Roll",
    "categories": [
      "Forearms"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/forearms/cable-standing-wrist-roll",
    "sourcePages": {
      "Forearms": "https://smartworkout.app/en/exercise-library/forearms/cable-standing-wrist-roll"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/e61e69a3-e64a-480e-8b2d-a22eba3489ef.mp4",
    "mediaPath": "/exercises/cable-standing-wrist-roll.mp4"
  },
  {
    "slug": "cable-step-up",
    "sourceSlug": "cable-step-up",
    "sourceRecordIds": [
      "f138fba6-caa5-4541-b9fc-6b10b724d2d1"
    ],
    "name": "Cable Step Up",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/cable-step-up",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/cable-step-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/cb73ca3f-4535-432a-8db8-db9c065a9d8b.mp4",
    "mediaPath": "/exercises/cable-step-up.mp4"
  },
  {
    "slug": "cable-supinated-face-pull",
    "sourceSlug": "cable-supinated-face-pull",
    "sourceRecordIds": [
      "3ac761ff-672b-488c-bd22-3ded2b757e13"
    ],
    "name": "Cable Supinated Face Pull",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/cable-supinated-face-pull",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/cable-supinated-face-pull"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/6c906e89-851b-4230-8d31-5e739273c968.mp4",
    "mediaPath": "/exercises/cable-supinated-face-pull.mp4"
  },
  {
    "slug": "cable-terminal-knee-extension",
    "sourceSlug": "cable-terminal-knee-extension",
    "sourceRecordIds": [
      "f9ac9620-8a9e-46e4-bab1-64d7412a868e"
    ],
    "name": "Cable Terminal Knee Extension",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/cable-terminal-knee-extension",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/cable-terminal-knee-extension"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/8e642c8a-3237-463e-bb6f-161bc3682f24.mp4",
    "mediaPath": "/exercises/cable-terminal-knee-extension.mp4"
  },
  {
    "slug": "cable-thibaudeau-kayak-row",
    "sourceSlug": "cable-thibaudeau-kayak-row",
    "sourceRecordIds": [
      "6a4145f4-8ef2-43f7-a9e9-51159327623e"
    ],
    "name": "Cable Thibaudeau Kayak Row",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/cable-thibaudeau-kayak-row",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/cable-thibaudeau-kayak-row"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/18481b4d-7f71-494c-9f68-ecc955f9fd2b.mp4",
    "mediaPath": "/exercises/cable-thibaudeau-kayak-row.mp4"
  },
  {
    "slug": "cable-triceps-pushdown",
    "sourceSlug": "cable-triceps-pushdown",
    "sourceRecordIds": [
      "a97e86f2-1e9a-2d2a-1968-a886c9c3560a"
    ],
    "name": "Cable Triceps Pushdown",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/cable-triceps-pushdown",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/cable-triceps-pushdown"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/8b06feb9-bf5c-4c77-a78e-9b00c1d78aa8.mp4",
    "mediaPath": "/exercises/cable-triceps-pushdown.mp4"
  },
  {
    "slug": "cable-twist-horizontal",
    "sourceSlug": "cable-twist-(horizontal)",
    "sourceRecordIds": [
      "0ec75482-1934-4b86-84d2-46da9a89d67d"
    ],
    "name": "Cable Twist (horizontal)",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/cable-twist-(horizontal)",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/cable-twist-(horizontal)"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/0a799781-595e-42b0-974d-a81408640c47.mp4",
    "mediaPath": "/exercises/cable-twist-horizontal.mp4"
  },
  {
    "slug": "cable-twist-up-down",
    "sourceSlug": "cable-twist-(up-down)",
    "sourceRecordIds": [
      "265b1439-6005-4282-94f7-ab6f63e0e296"
    ],
    "name": "Cable Twist (up down)",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/cable-twist-(up-down)",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/cable-twist-(up-down)"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/2bbc0071-2c1d-4c70-9b53-dc723223ef02.mp4",
    "mediaPath": "/exercises/cable-twist-up-down.mp4"
  },
  {
    "slug": "cable-upright-row",
    "sourceSlug": "cable-upright-row",
    "sourceRecordIds": [
      "2f8af6f8-5cd3-821e-ec81-1314359d9cfc"
    ],
    "name": "Cable Upright Row",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/cable-upright-row",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/cable-upright-row"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/bb2ceac3-d65c-4568-9c00-a2861b746dcb.mp4",
    "mediaPath": "/exercises/cable-upright-row.mp4"
  },
  {
    "slug": "cable-wide-grip-behind-neck-pulldown",
    "sourceSlug": "cable-wide-grip-behind-neck-pulldown",
    "sourceRecordIds": [
      "1b067cc9-2501-41fc-97fe-cd35e92c3098"
    ],
    "name": "Cable Wide Grip Behind Neck Pulldown",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/cable-wide-grip-behind-neck-pulldown",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/cable-wide-grip-behind-neck-pulldown"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/3f188bec-c383-416b-91b3-c814d035fbc4.mp4",
    "mediaPath": "/exercises/cable-wide-grip-behind-neck-pulldown.mp4"
  },
  {
    "slug": "cable-wrist-curl",
    "sourceSlug": "cable-wrist-curl",
    "sourceRecordIds": [
      "d1613595-46fa-4f15-9467-807cb3b2b88c"
    ],
    "name": "Cable Wrist Curl",
    "categories": [
      "Forearms"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/forearms/cable-wrist-curl",
    "sourcePages": {
      "Forearms": "https://smartworkout.app/en/exercise-library/forearms/cable-wrist-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/1aa353a2-35bf-49cb-a595-44d93c0f6975.mp4",
    "mediaPath": "/exercises/cable-wrist-curl.mp4"
  },
  {
    "slug": "cable-y-raise",
    "sourceSlug": "cable-y-raise",
    "sourceRecordIds": [
      "f26239fc-4bed-4f4f-a788-0e08235259a7"
    ],
    "name": "Cable Y Raise",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/cable-y-raise",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/cable-y-raise"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/39fab75e-ff70-4412-9188-8777dadf2d7f.mp4",
    "mediaPath": "/exercises/cable-y-raise.mp4"
  },
  {
    "slug": "calf-leg-press",
    "sourceSlug": "calf-leg-press",
    "sourceRecordIds": [
      "187d7214-9b1e-4f2d-b028-f2aebd561d8b"
    ],
    "name": "Calf Leg Press",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/calf-leg-press",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/calf-leg-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/9f24e3a4-490f-4dab-8ff7-d7d9c5b3fa34.mp4",
    "mediaPath": "/exercises/calf-leg-press.mp4"
  },
  {
    "slug": "california-press",
    "sourceSlug": "california-press",
    "sourceRecordIds": [
      "c98e66c4-2657-4c42-bfbb-99425b312dd2"
    ],
    "name": "California Press",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/california-press",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/california-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/45e6f17a-fb24-421b-98cb-49c032a62892.mp4",
    "mediaPath": "/exercises/california-press.mp4"
  },
  {
    "slug": "capitans-chair-straight-leg-raises",
    "sourceSlug": "capitan's-chair-straight-leg-raises",
    "sourceRecordIds": [
      "765217dc-7f1f-4c1e-b4d3-2c195d7a696c"
    ],
    "name": "Capitan's Chair Straight Leg Raises",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/capitan's-chair-straight-leg-raises",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/capitan's-chair-straight-leg-raises"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/7991982d-a69a-4220-95e5-df5676bb2a88.mp4",
    "mediaPath": "/exercises/capitans-chair-straight-leg-raises.mp4"
  },
  {
    "slug": "captains-chair-knee-raises",
    "sourceSlug": "captains-chair-knee-raises",
    "sourceRecordIds": [
      "f8bff329-d28e-4a8a-b495-184fe80c7368"
    ],
    "name": "Captains Chair Knee Raises",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/captains-chair-knee-raises",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/captains-chair-knee-raises"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/e994d983-956a-46d0-8492-966667f03313.mp4",
    "mediaPath": "/exercises/captains-chair-knee-raises.mp4"
  },
  {
    "slug": "cat-cow",
    "sourceSlug": "cat-cow",
    "sourceRecordIds": [
      "e7f0998f-1ff9-4182-9063-6fea7af17f67"
    ],
    "name": "Cat Cow",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/cat-cow",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/cat-cow"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/c6f8e551-5517-4bfb-81f8-63b53cc072eb.mp4",
    "mediaPath": "/exercises/cat-cow.mp4"
  },
  {
    "slug": "chest-dips",
    "sourceSlug": "chest-dips",
    "sourceRecordIds": [
      "9e9c7445-89c9-4f3c-bd9c-fd27a6ae2e74"
    ],
    "name": "Chest Dips",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/chest-dips",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/chest-dips"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/fbf1e1b8-2f58-4847-b28b-7b6f387bb0d4.mp4",
    "mediaPath": "/exercises/chest-dips.mp4"
  },
  {
    "slug": "chest-supported-lateral-t-raise",
    "sourceSlug": "chest-supported-lateral-t-raise",
    "sourceRecordIds": [
      "bfc234b1-e2be-440e-9d4d-02a46e063de3"
    ],
    "name": "Chest Supported Lateral T Raise",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/chest-supported-lateral-t-raise",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/chest-supported-lateral-t-raise"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/9e33a8d5-b378-43af-a7b9-c0806520b496.mp4",
    "mediaPath": "/exercises/chest-supported-lateral-t-raise.mp4"
  },
  {
    "slug": "chest-supported-machine-row",
    "sourceSlug": "chest-supported-machine-row",
    "sourceRecordIds": [
      "763906d6-42c5-7f93-c42a-553bdcf8d6f2"
    ],
    "name": "Chest Supported Machine Row",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/chest-supported-machine-row",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/chest-supported-machine-row"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/452136c7-f3ef-4d04-8e91-2de2b9893b5b.mp4",
    "mediaPath": "/exercises/chest-supported-machine-row.mp4"
  },
  {
    "slug": "childs-pose",
    "sourceSlug": "child’s-pose",
    "sourceRecordIds": [
      "def5a3ce-9471-4cba-b1af-94cd85ff7e4c"
    ],
    "name": "Child’s Pose",
    "categories": [
      "Gluteal"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/gluteus/child’s-pose",
    "sourcePages": {
      "Gluteal": "https://smartworkout.app/en/exercise-library/gluteus/child’s-pose"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/2e9debc7-b8aa-497b-bbc3-054b52e09a50.mp4",
    "mediaPath": "/exercises/childs-pose.mp4"
  },
  {
    "slug": "chin-up",
    "sourceSlug": "chin-up",
    "sourceRecordIds": [
      "1df9fd37-4223-4015-865e-cd6f641f78df"
    ],
    "name": "Chin-Up",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/chin-up",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/chin-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/eb90d7a1-2d23-42a3-ba2a-1ca5db10296c.mp4",
    "mediaPath": "/exercises/chin-up.mp4"
  },
  {
    "slug": "clap-push-up",
    "sourceSlug": "clap-push-up",
    "sourceRecordIds": [
      "8b216853-6ddd-4846-97e1-8a7fc15040cc"
    ],
    "name": "Clap Push-Up",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/clap-push-up",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/clap-push-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/3eee6526-9f25-4102-be30-39d783599365.mp4",
    "mediaPath": "/exercises/clap-push-up.mp4"
  },
  {
    "slug": "clean-and-jerk",
    "sourceSlug": "clean-and-jerk",
    "sourceRecordIds": [
      "d60bf9ff-f74e-429c-afe1-cf5dec1b2ae6"
    ],
    "name": "Clean and Jerk",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/clean-and-jerk",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/clean-and-jerk"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/d15609c9-6194-4284-90c6-a58ae7675128.mp4",
    "mediaPath": "/exercises/clean-and-jerk.mp4"
  },
  {
    "slug": "clean-squat",
    "sourceSlug": "clean-squat",
    "sourceRecordIds": [
      "ab969cd9-46c9-4a4b-aeb8-fb18b3a812d2"
    ],
    "name": "Clean Squat",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/clean-squat",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/clean-squat"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/856db697-01dd-4a29-99c3-45c0f6cffc7d.mp4",
    "mediaPath": "/exercises/clean-squat.mp4"
  },
  {
    "slug": "close-grip-biceps-curl",
    "sourceSlug": "close-grip-biceps-curl",
    "sourceRecordIds": [
      "aa88e9ad-b55e-43d7-b3c2-d0b0fb81a9a9"
    ],
    "name": "Close Grip Biceps Curl",
    "categories": [
      "Biceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/biceps/close-grip-biceps-curl",
    "sourcePages": {
      "Biceps": "https://smartworkout.app/en/exercise-library/biceps/close-grip-biceps-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/1697d9aa-f9f3-43f8-a164-792beb19232c.mp4",
    "mediaPath": "/exercises/close-grip-biceps-curl.mp4"
  },
  {
    "slug": "close-grip-dumbbell-press",
    "sourceSlug": "close-grip-dumbbell-press",
    "sourceRecordIds": [
      "44a352b9-c532-4743-a47f-0d38aed169d2"
    ],
    "name": "Close Grip Dumbbell Press",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/close-grip-dumbbell-press",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/close-grip-dumbbell-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/8ee8d887-754d-42eb-8207-6f1dc5cae6c7.mp4",
    "mediaPath": "/exercises/close-grip-dumbbell-press.mp4"
  },
  {
    "slug": "close-grip-ez-bar-curl",
    "sourceSlug": "close-grip-ez-bar-curl",
    "sourceRecordIds": [
      "05993bed-9c87-4387-b2ac-e5fc7980152d"
    ],
    "name": "Close-grip EZ Bar Curl",
    "categories": [
      "Biceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/biceps/close-grip-ez-bar-curl",
    "sourcePages": {
      "Biceps": "https://smartworkout.app/en/exercise-library/biceps/close-grip-ez-bar-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/5eac3e49-98b5-4d60-958f-074471e8d811.mp4",
    "mediaPath": "/exercises/close-grip-ez-bar-curl.mp4"
  },
  {
    "slug": "close-grip-incline-dumbbell-bench-press",
    "sourceSlug": "close-grip-incline-dumbbell-bench-press",
    "sourceRecordIds": [
      "41af656c-31a9-495d-8d86-2582e07f0ac8"
    ],
    "name": "Close Grip Incline Dumbbell Bench Press",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/close-grip-incline-dumbbell-bench-press",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/close-grip-incline-dumbbell-bench-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/162889d2-5093-4bbd-a206-9b7b4e2230a1.mp4",
    "mediaPath": "/exercises/close-grip-incline-dumbbell-bench-press.mp4"
  },
  {
    "slug": "close-grip-landmine-row",
    "sourceSlug": "close-grip-landmine-row",
    "sourceRecordIds": [
      "d7984438-e687-43db-ab4b-273e8240438e"
    ],
    "name": "Close Grip Landmine Row",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/close-grip-landmine-row",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/close-grip-landmine-row"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/40c302e4-6718-4884-a953-27acf43c9be5.mp4",
    "mediaPath": "/exercises/close-grip-landmine-row.mp4"
  },
  {
    "slug": "close-grip-pull-up",
    "sourceSlug": "close-grip-pull-up",
    "sourceRecordIds": [
      "0a7f804c-c8b2-410f-aaf2-596f30494ee9"
    ],
    "name": "Close Grip Pull Up",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/close-grip-pull-up",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/close-grip-pull-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/f5fd5f13-bfb7-4f07-855f-cea18e5e42eb.mp4",
    "mediaPath": "/exercises/close-grip-pull-up.mp4"
  },
  {
    "slug": "close-grip-push-up",
    "sourceSlug": "close-grip-push-up",
    "sourceRecordIds": [
      "5d37f2ea-3a34-4db1-94ae-476306b7222e"
    ],
    "name": "Close Grip Push-Up",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/close-grip-push-up",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/close-grip-push-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/4e2b04eb-1d5b-43a0-898a-c23d4ad8de63.mp4",
    "mediaPath": "/exercises/close-grip-push-up.mp4"
  },
  {
    "slug": "close-grip-smith-bench-press",
    "sourceSlug": "close-grip-smith-bench-press",
    "sourceRecordIds": [
      "27ad6f30-088f-4665-88f0-9a0778b9d180"
    ],
    "name": "Close Grip Smith Bench Press",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/close-grip-smith-bench-press",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/close-grip-smith-bench-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/b56fc4c5-658a-4b82-9f07-b4e3a20f6f37.mp4",
    "mediaPath": "/exercises/close-grip-smith-bench-press.mp4"
  },
  {
    "slug": "cobra-push-up",
    "sourceSlug": "cobra-push-up",
    "sourceRecordIds": [
      "3a5a9586-380f-4bfa-aa70-429003734604"
    ],
    "name": "Cobra Push-Up",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/cobra-push-up",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/cobra-push-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/fd700ead-1da5-4d2e-8278-3b0e16873d40.mp4",
    "mediaPath": "/exercises/cobra-push-up.mp4"
  },
  {
    "slug": "concentration-hammer-curl",
    "sourceSlug": "concentration-hammer-curl",
    "sourceRecordIds": [
      "b866a8c1-4083-403a-9a68-ba6846f85a87"
    ],
    "name": "Concentration Hammer Curl",
    "categories": [
      "Biceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/biceps/concentration-hammer-curl",
    "sourcePages": {
      "Biceps": "https://smartworkout.app/en/exercise-library/biceps/concentration-hammer-curl"
    },
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
    "sourceSlug": "crab-pose",
    "sourceRecordIds": [
      "8a8beda5-c97c-4dad-b6c3-0d559584325d"
    ],
    "name": "Crab Pose",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/crab-pose",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/crab-pose"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/18211330-59ff-4f9e-b412-ab3466fc496b.mp4",
    "mediaPath": "/exercises/crab-pose.mp4"
  },
  {
    "slug": "cross-arms-push-up",
    "sourceSlug": "cross-arms-push-up",
    "sourceRecordIds": [
      "190a6523-03bb-4305-8a19-7ec55b680f15"
    ],
    "name": "Cross Arms Push-Up",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/cross-arms-push-up",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/cross-arms-push-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/2da07a82-c156-41ed-a6ee-c0a907126d02.mp4",
    "mediaPath": "/exercises/cross-arms-push-up.mp4"
  },
  {
    "slug": "cross-body-one-arm-strength-press",
    "sourceSlug": "cross-body-one-arm-strength-press",
    "sourceRecordIds": [
      "9e63f81b-fb83-44b7-8dda-895b64ca24b5"
    ],
    "name": "Cross Body One-Arm Strength Press",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/cross-body-one-arm-strength-press",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/cross-body-one-arm-strength-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/db536c51-9fb9-4d9c-9eb7-5fdbfb52b7b1.mp4",
    "mediaPath": "/exercises/cross-body-one-arm-strength-press.mp4"
  },
  {
    "slug": "crossack-squat",
    "sourceSlug": "crossack-squat",
    "sourceRecordIds": [
      "86bb0542-38ab-469b-b684-77f566141bb7"
    ],
    "name": "Crossack Squat",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/crossack-squat",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/crossack-squat"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/4f3c74ad-a75a-4061-89b1-2a7ddf34b5b7.mp4",
    "mediaPath": "/exercises/crossack-squat.mp4"
  },
  {
    "slug": "cyclist-squat",
    "sourceSlug": "cyclist-squat",
    "sourceRecordIds": [
      "e644b489-9a5e-4824-83fb-0b448b7c6a80"
    ],
    "name": "Cyclist Squat",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/cyclist-squat",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/cyclist-squat"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/82aed196-41f3-4d53-8436-f7877f2cea92.mp4",
    "mediaPath": "/exercises/cyclist-squat.mp4"
  },
  {
    "slug": "dead-bug",
    "sourceSlug": "dead-bug",
    "sourceRecordIds": [
      "30e47e2a-3241-4f73-8180-2d02ed3b2557"
    ],
    "name": "Dead Bug",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/dead-bug",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/dead-bug"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/644f8c6e-2c8c-44d6-b3fd-49be9ef13641.mp4",
    "mediaPath": "/exercises/dead-bug.mp4"
  },
  {
    "slug": "dead-bug-with-ball",
    "sourceSlug": "dead-bug-with-ball",
    "sourceRecordIds": [
      "5c3a0532-fe85-4225-8791-64b252bd4d40"
    ],
    "name": "Dead Bug with Ball",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/dead-bug-with-ball",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/dead-bug-with-ball"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/a8a1599b-52d2-42e9-b148-9c75a658d9a8.mp4",
    "mediaPath": "/exercises/dead-bug-with-ball.mp4"
  },
  {
    "slug": "dead-hang",
    "sourceSlug": "dead-hang",
    "sourceRecordIds": [
      "bcdc45cd-8548-4416-864f-fb0928b9da8a"
    ],
    "name": "Dead Hang",
    "categories": [
      "Forearms"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/forearms/dead-hang",
    "sourcePages": {
      "Forearms": "https://smartworkout.app/en/exercise-library/forearms/dead-hang"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/44e4330a-22c4-4a90-a84e-1751d2a49728.mp4",
    "mediaPath": "/exercises/dead-hang.mp4"
  },
  {
    "slug": "deadlift",
    "sourceSlug": "deadlift",
    "sourceRecordIds": [
      "20890a96-f92a-cfc8-3447-239d273136df"
    ],
    "name": "Deadlift",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/deadlift",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/deadlift"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/97a01cea-2705-4d3b-b93d-193dfc57875f.mp4",
    "mediaPath": "/exercises/deadlift.mp4"
  },
  {
    "slug": "deadlift-from-blocks",
    "sourceSlug": "deadlift-from-blocks",
    "sourceRecordIds": [
      "e39ba212-23da-494e-b136-42060c32e7ce"
    ],
    "name": "Deadlift from Blocks",
    "categories": [
      "Gluteal"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/gluteus/deadlift-from-blocks",
    "sourcePages": {
      "Gluteal": "https://smartworkout.app/en/exercise-library/gluteus/deadlift-from-blocks"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/3d94287e-914f-41e7-96d2-ce75b5446186.mp4",
    "mediaPath": "/exercises/deadlift-from-blocks.mp4"
  },
  {
    "slug": "decline-barbell-bench-press",
    "sourceSlug": "decline-barbell-bench-press",
    "sourceRecordIds": [
      "69e26a9b-29bd-c232-8614-7985c1a70c15"
    ],
    "name": "Decline Barbell Bench Press",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/decline-barbell-bench-press",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/decline-barbell-bench-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/3d084e3c-1133-40c6-a618-fb4a2bac4ebc.mp4",
    "mediaPath": "/exercises/decline-barbell-bench-press.mp4"
  },
  {
    "slug": "decline-barbell-french-press",
    "sourceSlug": "decline-barbell-french-press",
    "sourceRecordIds": [
      "c4144293-7b67-46de-a595-6c5953709954"
    ],
    "name": "Decline Barbell French Press",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/decline-barbell-french-press",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/decline-barbell-french-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/3fbeb75c-a067-4be2-830d-cb1319440a97.mp4",
    "mediaPath": "/exercises/decline-barbell-french-press.mp4"
  },
  {
    "slug": "decline-cable-chest-press",
    "sourceSlug": "decline-cable-chest-press",
    "sourceRecordIds": [
      "73928937-811c-4f7a-967e-517e9ea509d9"
    ],
    "name": "Decline Cable Chest Press",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/decline-cable-chest-press",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/decline-cable-chest-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/c63817d5-8f9b-4d93-80c6-0639a56f2064.mp4",
    "mediaPath": "/exercises/decline-cable-chest-press.mp4"
  },
  {
    "slug": "decline-chest-press",
    "sourceSlug": "decline-chest-press",
    "sourceRecordIds": [
      "833d7f7c-e6ab-4796-97c7-17ebb035d33d"
    ],
    "name": "Decline Chest Press",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/decline-chest-press",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/decline-chest-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/a814e9e3-9f7a-4785-8a83-ff0cee912f9b.mp4",
    "mediaPath": "/exercises/decline-chest-press.mp4"
  },
  {
    "slug": "decline-crunch",
    "sourceSlug": "decline-crunch",
    "sourceRecordIds": [
      "efda77ce-3d93-4efb-a581-cb8f7bc0df95"
    ],
    "name": "Decline Crunch",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/decline-crunch",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/decline-crunch"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/d4a61221-9c27-4acd-8b69-6ca55de2a911.mp4",
    "mediaPath": "/exercises/decline-crunch.mp4"
  },
  {
    "slug": "decline-diamond-push-up",
    "sourceSlug": "decline-diamond-push-up",
    "sourceRecordIds": [
      "d47b60ff-9291-4a4a-b40f-6d74281ff2ab"
    ],
    "name": "Decline Diamond Push-Up",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/decline-diamond-push-up",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/decline-diamond-push-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/e00634f2-4b6e-45e1-a15a-d40f6fa2fab3.mp4",
    "mediaPath": "/exercises/decline-diamond-push-up.mp4"
  },
  {
    "slug": "decline-dumbbell-bench-press",
    "sourceSlug": "decline-dumbbell-bench-press",
    "sourceRecordIds": [
      "c30468f2-024b-79d4-df35-0c937e391555"
    ],
    "name": "Decline Dumbbell Bench Press",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/decline-dumbbell-bench-press",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/decline-dumbbell-bench-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/c640c2f1-f5fe-4837-ab55-6ad404110306.mp4",
    "mediaPath": "/exercises/decline-dumbbell-bench-press.mp4"
  },
  {
    "slug": "decline-dumbbell-fly",
    "sourceSlug": "decline-dumbbell-fly",
    "sourceRecordIds": [
      "ed078081-f64f-41e6-b31d-230e8d75cf43"
    ],
    "name": "Decline Dumbbell Fly",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/decline-dumbbell-fly",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/decline-dumbbell-fly"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/1805d036-6125-4455-a2f1-d7e789457916.mp4",
    "mediaPath": "/exercises/decline-dumbbell-fly.mp4"
  },
  {
    "slug": "decline-push-up",
    "sourceSlug": "decline-push-up",
    "sourceRecordIds": [
      "532b36c4-7a06-47c9-8264-0fa7b9a4e39e"
    ],
    "name": "Decline Push-Up",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/decline-push-up",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/decline-push-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/a1aedffe-5731-4ede-815e-533668cc86c4.mp4",
    "mediaPath": "/exercises/decline-push-up.mp4"
  },
  {
    "slug": "decline-smith-bench-press",
    "sourceSlug": "decline-smith-bench-press",
    "sourceRecordIds": [
      "d24ca3f6-1a19-41c4-9240-1369823e8a56"
    ],
    "name": "Decline Smith Bench Press",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/decline-smith-bench-press",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/decline-smith-bench-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/9ade43c0-728d-462c-8845-d0080e8cf37d.mp4",
    "mediaPath": "/exercises/decline-smith-bench-press.mp4"
  },
  {
    "slug": "deep-push-up-on-parallel-bars",
    "sourceSlug": "deep-push-up-on-parallel-bars",
    "sourceRecordIds": [
      "2eeb0124-8dd0-4ef4-a089-8ea9f5956d6a"
    ],
    "name": "Deep Push Up On Parallel Bars",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/deep-push-up-on-parallel-bars",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/deep-push-up-on-parallel-bars"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/7b5d548e-b3c8-4dc8-b120-94363928e4af.mp4",
    "mediaPath": "/exercises/deep-push-up-on-parallel-bars.mp4"
  },
  {
    "slug": "deep-squat-to-wide-fold-with-foot-hold",
    "sourceSlug": "deep-squat-to-wide-fold-with-foot-hold",
    "sourceRecordIds": [
      "2c08c473-5a61-4860-ae61-72380ac9d979"
    ],
    "name": "Deep Squat to Wide Fold with Foot Hold",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/deep-squat-to-wide-fold-with-foot-hold",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/deep-squat-to-wide-fold-with-foot-hold"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/953b31d7-d930-4408-926b-45090c41250a.mp4",
    "mediaPath": "/exercises/deep-squat-to-wide-fold-with-foot-hold.mp4"
  },
  {
    "slug": "deficit-deadlift",
    "sourceSlug": "deficit-deadlift",
    "sourceRecordIds": [
      "114ad863-9971-40c3-8108-2a983fe656ae"
    ],
    "name": "Deficit Deadlift",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/deficit-deadlift",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/deficit-deadlift"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/45112f12-de8c-429d-beb7-2767d31293ff.mp4",
    "mediaPath": "/exercises/deficit-deadlift.mp4"
  },
  {
    "slug": "diamond-push-up",
    "sourceSlug": "diamond-push-up",
    "sourceRecordIds": [
      "0716159e-e991-422d-b4af-f88c38a00119"
    ],
    "name": "Diamond Push-Up",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/diamond-push-up",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/diamond-push-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/07f93f63-e9df-4c88-9e05-5cd48c85d6dd.mp4",
    "mediaPath": "/exercises/diamond-push-up.mp4"
  },
  {
    "slug": "dip-shrugs",
    "sourceSlug": "dip-shrugs",
    "sourceRecordIds": [
      "75add5d1-1906-4d70-b23a-998b632ce324"
    ],
    "name": "Dip Shrugs",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/dip-shrugs",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/dip-shrugs"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/cd4f6f25-2d25-41ba-aa80-703b36383753.mp4",
    "mediaPath": "/exercises/dip-shrugs.mp4"
  },
  {
    "slug": "dips",
    "sourceSlug": "dips",
    "sourceRecordIds": [
      "688d35de-f0ac-4a44-99e8-149ab5be3fa9"
    ],
    "name": "Dips",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/dips",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/dips"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/eafaaaad-47cb-430d-82fd-3f5d3f015f15.mp4",
    "mediaPath": "/exercises/dips.mp4"
  },
  {
    "slug": "donkey-kick",
    "sourceSlug": "donkey-kick",
    "sourceRecordIds": [
      "38c5072e-3103-4399-8006-ae63d52110e5"
    ],
    "name": "Donkey Kick",
    "categories": [
      "Gluteal"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/gluteus/donkey-kick",
    "sourcePages": {
      "Gluteal": "https://smartworkout.app/en/exercise-library/gluteus/donkey-kick"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/316eb28f-c0b2-4a9c-80f7-1f7569302031.mp4",
    "mediaPath": "/exercises/donkey-kick.mp4"
  },
  {
    "slug": "doorway-chest-stretch",
    "sourceSlug": "doorway-chest-stretch",
    "sourceRecordIds": [
      "976c168d-2968-4eb0-9ca0-eaf804f9ee6a"
    ],
    "name": "Doorway Chest Stretch",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/doorway-chest-stretch",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/doorway-chest-stretch"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/c32386c7-01a4-4a0a-b7af-d58e3cb05805.mp4",
    "mediaPath": "/exercises/doorway-chest-stretch.mp4"
  },
  {
    "slug": "double-dumbbell-bent-over-row",
    "sourceSlug": "double-dumbbell-bent-over-row",
    "sourceRecordIds": [
      "ff199fca-86ee-4407-a40b-bee06b8a8086"
    ],
    "name": "Double Dumbbell Bent Over Row",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/double-dumbbell-bent-over-row",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/double-dumbbell-bent-over-row"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/ba838003-01ea-4938-b0c8-8b8d7251e8fc.mp4",
    "mediaPath": "/exercises/double-dumbbell-bent-over-row.mp4"
  },
  {
    "slug": "double-dumbbell-preacher-curl",
    "sourceSlug": "double-dumbbell-preacher-curl",
    "sourceRecordIds": [
      "45be866e-26ae-4be7-9d53-bb0a0d7e5d19"
    ],
    "name": "Double Dumbbell Preacher Curl",
    "categories": [
      "Biceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/biceps/double-dumbbell-preacher-curl",
    "sourcePages": {
      "Biceps": "https://smartworkout.app/en/exercise-library/biceps/double-dumbbell-preacher-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/0e7185a8-532a-400a-b79f-914968a0466f.mp4",
    "mediaPath": "/exercises/double-dumbbell-preacher-curl.mp4"
  },
  {
    "slug": "downward-dog",
    "sourceSlug": "downward-dog",
    "sourceRecordIds": [
      "5526faf0-d734-42c9-a045-50b31aecd615"
    ],
    "name": "Downward Dog",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/downward-dog",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/downward-dog"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/887e07da-82bf-41fa-9f57-1241fb789c2b.mp4",
    "mediaPath": "/exercises/downward-dog.mp4"
  },
  {
    "slug": "dragon-flag",
    "sourceSlug": "dragon-flag",
    "sourceRecordIds": [
      "2e5461f9-54c1-426f-a2a5-a8dee9e1b751"
    ],
    "name": "Dragon Flag",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/dragon-flag",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/dragon-flag"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/1b5c4294-0a50-4e62-b394-a89ceab6b6dc.mp4",
    "mediaPath": "/exercises/dragon-flag.mp4"
  },
  {
    "slug": "dumbbell-alternate-front-raise",
    "sourceSlug": "dumbbell-alternate-front-raise",
    "sourceRecordIds": [
      "dc9adb9a-c16a-4447-a2f3-b148be1cc50c"
    ],
    "name": "Dumbbell Alternate Front Raise",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/dumbbell-alternate-front-raise",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/dumbbell-alternate-front-raise"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/822b1ddf-57d4-44b3-b930-06e934167318.mp4",
    "mediaPath": "/exercises/dumbbell-alternate-front-raise.mp4"
  },
  {
    "slug": "dumbbell-alternate-hammer-front-raise",
    "sourceSlug": "dumbbell-alternate-hammer-front-raise",
    "sourceRecordIds": [
      "76a20735-d6c9-7b27-c19e-6c2cf4a40bad"
    ],
    "name": "Dumbbell Alternate Hammer Front Raise",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/dumbbell-alternate-hammer-front-raise",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/dumbbell-alternate-hammer-front-raise"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/2947dd5a-6b54-4d61-891a-852895fa5857.mp4",
    "mediaPath": "/exercises/dumbbell-alternate-hammer-front-raise.mp4"
  },
  {
    "slug": "dumbbell-alternate-supinated-curl",
    "sourceSlug": "dumbbell-alternate-supinated-curl",
    "sourceRecordIds": [
      "71054169-cf36-c810-dca5-4413fe9a1327"
    ],
    "name": "Dumbbell Alternate Supinated Curl",
    "categories": [
      "Biceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/biceps/dumbbell-alternate-supinated-curl",
    "sourcePages": {
      "Biceps": "https://smartworkout.app/en/exercise-library/biceps/dumbbell-alternate-supinated-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/279079ca-02fb-4775-ac1a-578138cfbdef.mp4",
    "mediaPath": "/exercises/dumbbell-alternate-supinated-curl.mp4"
  },
  {
    "slug": "dumbbell-bench-press",
    "sourceSlug": "dumbbell-bench-press",
    "sourceRecordIds": [
      "986f0a86-2d1e-47c5-02c2-57659ac4e005"
    ],
    "name": "Dumbbell Bench Press",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/dumbbell-bench-press",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/dumbbell-bench-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/bb4a469e-f8bb-4667-8f65-2c4b4b2bba0d.mp4",
    "mediaPath": "/exercises/dumbbell-bench-press.mp4"
  },
  {
    "slug": "dumbbell-bent-over-row",
    "sourceSlug": "dumbbell-bent-over-row",
    "sourceRecordIds": [
      "4a808b86-385e-28a7-460b-aad50695af11"
    ],
    "name": "Dumbbell Bent Over Row",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/dumbbell-bent-over-row",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/dumbbell-bent-over-row"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/ef0f8115-83f3-4113-8eeb-ec93fa64456a.mp4",
    "mediaPath": "/exercises/dumbbell-bent-over-row.mp4"
  },
  {
    "slug": "dumbbell-biceps-curl",
    "sourceSlug": "dumbbell-biceps-curl",
    "sourceRecordIds": [
      "835d99fc-dcdb-38f2-ca92-48e87ba6f5b1"
    ],
    "name": "Dumbbell Biceps Curl",
    "categories": [
      "Biceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/biceps/dumbbell-biceps-curl",
    "sourcePages": {
      "Biceps": "https://smartworkout.app/en/exercise-library/biceps/dumbbell-biceps-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/295b152b-648d-44bd-a2ef-6235dc7b1b2b.mp4",
    "mediaPath": "/exercises/dumbbell-biceps-curl.mp4"
  },
  {
    "slug": "dumbbell-biceps-reverse-curl",
    "sourceSlug": "dumbbell-biceps-reverse-curl",
    "sourceRecordIds": [
      "c8a73206-c24b-46e7-9f38-b9e049a3afe5"
    ],
    "name": "Dumbbell Biceps Reverse Curl",
    "categories": [
      "Forearms"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/forearms/dumbbell-biceps-reverse-curl",
    "sourcePages": {
      "Forearms": "https://smartworkout.app/en/exercise-library/forearms/dumbbell-biceps-reverse-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/b4f1df3d-dc09-43cc-830c-8d91e96c4451.mp4",
    "mediaPath": "/exercises/dumbbell-biceps-reverse-curl.mp4"
  },
  {
    "slug": "dumbbell-bulgarian-squat",
    "sourceSlug": "dumbbell-bulgarian-squat",
    "sourceRecordIds": [
      "cf88eb6f-6101-49f1-a493-ef959eb12cb6"
    ],
    "name": "Dumbbell Bulgarian Squat",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/dumbbell-bulgarian-squat",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/dumbbell-bulgarian-squat"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/aed448e3-12d5-4612-a005-380fed7445c3.mp4",
    "mediaPath": "/exercises/dumbbell-bulgarian-squat.mp4"
  },
  {
    "slug": "dumbbell-chest-fly",
    "sourceSlug": "dumbbell-chest-fly",
    "sourceRecordIds": [
      "f52c9de8-8b5e-f4d0-efe9-27b858230898"
    ],
    "name": "Dumbbell Chest Fly",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/dumbbell-chest-fly",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/dumbbell-chest-fly"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/02abf225-e430-4ba1-a15d-bf07a46959db.mp4",
    "mediaPath": "/exercises/dumbbell-chest-fly.mp4"
  },
  {
    "slug": "dumbbell-concentration-curl",
    "sourceSlug": "dumbbell-concentration-curl",
    "sourceRecordIds": [
      "d01922bb-2606-4597-b0c0-352afe85ea8b"
    ],
    "name": "Dumbbell Concentration Curl",
    "categories": [
      "Biceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/biceps/dumbbell-concentration-curl",
    "sourcePages": {
      "Biceps": "https://smartworkout.app/en/exercise-library/biceps/dumbbell-concentration-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/69f4b2c0-5582-47a4-b901-9faacf963719.mp4",
    "mediaPath": "/exercises/dumbbell-concentration-curl.mp4"
  },
  {
    "slug": "dumbbell-cossack-squat",
    "sourceSlug": "dumbbell-cossack-squat",
    "sourceRecordIds": [
      "6b71cec6-7d3c-403f-bc1c-ed0787207ebe"
    ],
    "name": "Dumbbell Cossack Squat",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/dumbbell-cossack-squat",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/dumbbell-cossack-squat"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/9671e832-7b4c-4f0e-801d-6cd6bf1bf232.mp4",
    "mediaPath": "/exercises/dumbbell-cossack-squat.mp4"
  },
  {
    "slug": "dumbbell-cross-body-hammer-curl",
    "sourceSlug": "dumbbell-cross-body-hammer-curl",
    "sourceRecordIds": [
      "a4dfb157-1b04-4271-aa73-d122cd30acc8"
    ],
    "name": "Dumbbell Cross Body Hammer Curl",
    "categories": [
      "Biceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/biceps/dumbbell-cross-body-hammer-curl",
    "sourcePages": {
      "Biceps": "https://smartworkout.app/en/exercise-library/biceps/dumbbell-cross-body-hammer-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/a56cea4c-b119-4d37-8d75-b8c8a72c9d33.mp4",
    "mediaPath": "/exercises/dumbbell-cross-body-hammer-curl.mp4"
  },
  {
    "slug": "dumbbell-cuban-rotation",
    "sourceSlug": "dumbbell-cuban-rotation",
    "sourceRecordIds": [
      "3ba7a9b4-88ba-4390-9593-de658b6668e6"
    ],
    "name": "Dumbbell Cuban Rotation",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/dumbbell-cuban-rotation",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/dumbbell-cuban-rotation"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/8fd69878-d700-4068-ab50-63ab763f1ace.mp4",
    "mediaPath": "/exercises/dumbbell-cuban-rotation.mp4"
  },
  {
    "slug": "dumbbell-deadlift",
    "sourceSlug": "dumbbell-deadlift",
    "sourceRecordIds": [
      "f4528ef0-35e7-49de-a5b0-d1c2d03d97b3"
    ],
    "name": "Dumbbell Deadlift",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/dumbbell-deadlift",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/dumbbell-deadlift"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/1785fa76-dd12-4830-87df-689db7f50b3b.mp4",
    "mediaPath": "/exercises/dumbbell-deadlift.mp4"
  },
  {
    "slug": "dumbbell-deadlift-straight-legs",
    "sourceSlug": "dumbbell-deadlift-straight-legs",
    "sourceRecordIds": [
      "de8bc2c9-e7fc-4514-b6b5-f98f3e26cfa7"
    ],
    "name": "Dumbbell Deadlift Straight Legs",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/dumbbell-deadlift-straight-legs",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/dumbbell-deadlift-straight-legs"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/9815a488-3a41-4e57-a4d3-89b3296656df.mp4",
    "mediaPath": "/exercises/dumbbell-deadlift-straight-legs.mp4"
  },
  {
    "slug": "dumbbell-deep-push-up",
    "sourceSlug": "dumbbell-deep-push-up",
    "sourceRecordIds": [
      "fcaeb74b-a51b-4a0d-bf7d-f1e057539698"
    ],
    "name": "Dumbbell Deep Push Up",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/dumbbell-deep-push-up",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/dumbbell-deep-push-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/a940fd8f-929e-4101-af3b-8d44eda4d064.mp4",
    "mediaPath": "/exercises/dumbbell-deep-push-up.mp4"
  },
  {
    "slug": "dumbbell-drag-curl",
    "sourceSlug": "dumbbell-drag-curl",
    "sourceRecordIds": [
      "82a44bb7-594b-4b02-a196-2b05fce65bf4"
    ],
    "name": "Dumbbell Drag Curl",
    "categories": [
      "Biceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/biceps/dumbbell-drag-curl",
    "sourcePages": {
      "Biceps": "https://smartworkout.app/en/exercise-library/biceps/dumbbell-drag-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/8ed19307-5374-4f0f-b4c5-1bbce2c7b943.mp4",
    "mediaPath": "/exercises/dumbbell-drag-curl.mp4"
  },
  {
    "slug": "dumbbell-farmer-carry",
    "sourceSlug": "dumbbell-farmer-carry",
    "sourceRecordIds": [
      "9836a9dd-c3fc-465c-8ae3-4defcbccf9c1"
    ],
    "name": "Dumbbell Farmer Carry",
    "categories": [
      "Forearms"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/forearms/dumbbell-farmer-carry",
    "sourcePages": {
      "Forearms": "https://smartworkout.app/en/exercise-library/forearms/dumbbell-farmer-carry"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/a03d7da3-fdf6-4b10-8330-432b19579828.mp4",
    "mediaPath": "/exercises/dumbbell-farmer-carry.mp4"
  },
  {
    "slug": "dumbbell-floor-chest-fly",
    "sourceSlug": "dumbbell-floor-chest-fly",
    "sourceRecordIds": [
      "61e81b56-9baa-4959-9cd1-12103a45cd58"
    ],
    "name": "Dumbbell Floor Chest Fly",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/dumbbell-floor-chest-fly",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/dumbbell-floor-chest-fly"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/4228f43a-ccb4-43cc-8009-948d658282b8.mp4",
    "mediaPath": "/exercises/dumbbell-floor-chest-fly.mp4"
  },
  {
    "slug": "dumbbell-front-raise",
    "sourceSlug": "dumbbell-front-raise",
    "sourceRecordIds": [
      "0ad70853-bd66-45d1-bfa2-9f57c2c9fd5f"
    ],
    "name": "Dumbbell Front Raise",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/dumbbell-front-raise",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/dumbbell-front-raise"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/4b0a4152-c1d6-498e-a46b-440cbcc36c68.mp4",
    "mediaPath": "/exercises/dumbbell-front-raise.mp4"
  },
  {
    "slug": "dumbbell-goblet-squat",
    "sourceSlug": "dumbbell-goblet-squat",
    "sourceRecordIds": [
      "8081a73c-ad4d-48a6-830a-d94b5c4148bc"
    ],
    "name": "Dumbbell Goblet Squat",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/dumbbell-goblet-squat",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/dumbbell-goblet-squat"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/bb9fac7a-a129-4015-847a-f283ae9e3ade.mp4",
    "mediaPath": "/exercises/dumbbell-goblet-squat.mp4"
  },
  {
    "slug": "dumbbell-half-kneeling-shoulder-press",
    "sourceSlug": "dumbbell-half-kneeling-shoulder-press",
    "sourceRecordIds": [
      "62d8e1ae-e1fa-44f0-a2f0-8ad732d30942"
    ],
    "name": "Dumbbell Half Kneeling Shoulder Press",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/dumbbell-half-kneeling-shoulder-press",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/dumbbell-half-kneeling-shoulder-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/4f12bae7-9afe-48ef-85d2-116d65f9ff3b.mp4",
    "mediaPath": "/exercises/dumbbell-half-kneeling-shoulder-press.mp4"
  },
  {
    "slug": "dumbbell-hammer-curl",
    "sourceSlug": "dumbbell-hammer-curl",
    "sourceRecordIds": [
      "6b210054-5434-1bf3-923e-62e137c41216"
    ],
    "name": "Dumbbell Hammer Curl",
    "categories": [
      "Biceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/biceps/dumbbell-hammer-curl",
    "sourcePages": {
      "Biceps": "https://smartworkout.app/en/exercise-library/biceps/dumbbell-hammer-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/42bee169-b8e8-4142-8707-dcb1f8267e31.mp4",
    "mediaPath": "/exercises/dumbbell-hammer-curl.mp4"
  },
  {
    "slug": "dumbbell-hip-thrust",
    "sourceSlug": "dumbbell-hip-thrust",
    "sourceRecordIds": [
      "f549f56b-96d5-4eee-807b-427a437809df"
    ],
    "name": "Dumbbell Hip Thrust",
    "categories": [
      "Gluteal"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/gluteus/dumbbell-hip-thrust",
    "sourcePages": {
      "Gluteal": "https://smartworkout.app/en/exercise-library/gluteus/dumbbell-hip-thrust"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/a72f7404-e861-484b-800f-ad61e25ffcf2.mp4",
    "mediaPath": "/exercises/dumbbell-hip-thrust.mp4"
  },
  {
    "slug": "dumbbell-incline-alternate-supinated-curl",
    "sourceSlug": "dumbbell-incline-alternate-supinated-curl",
    "sourceRecordIds": [
      "89d00daa-f73b-4391-84d1-803ac433363e"
    ],
    "name": "Dumbbell Incline Alternate Supinated Curl",
    "categories": [
      "Biceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/biceps/dumbbell-incline-alternate-supinated-curl",
    "sourcePages": {
      "Biceps": "https://smartworkout.app/en/exercise-library/biceps/dumbbell-incline-alternate-supinated-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/a0cf9d35-9654-4208-8851-908e1b46992c.mp4",
    "mediaPath": "/exercises/dumbbell-incline-alternate-supinated-curl.mp4"
  },
  {
    "slug": "dumbbell-incline-chest-supported-lateral-raises",
    "sourceSlug": "dumbbell-incline-chest-supported-lateral-raises",
    "sourceRecordIds": [
      "e6a23c03-6fd4-41b7-8540-dac14e681294"
    ],
    "name": "Dumbbell Incline Chest Supported Lateral Raises",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/dumbbell-incline-chest-supported-lateral-raises",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/dumbbell-incline-chest-supported-lateral-raises"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/1cedf10b-6334-4bca-a4b2-d131bcc1e7e1.mp4",
    "mediaPath": "/exercises/dumbbell-incline-chest-supported-lateral-raises.mp4"
  },
  {
    "slug": "dumbbell-incline-hammer-curl",
    "sourceSlug": "dumbbell-incline-hammer-curl",
    "sourceRecordIds": [
      "4786d67b-4ca5-40b9-8d97-488d60317e6a"
    ],
    "name": "Dumbbell Incline Hammer Curl",
    "categories": [
      "Biceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/biceps/dumbbell-incline-hammer-curl",
    "sourcePages": {
      "Biceps": "https://smartworkout.app/en/exercise-library/biceps/dumbbell-incline-hammer-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/d0ac9935-5f39-4384-afb1-1f511e2c35a5.mp4",
    "mediaPath": "/exercises/dumbbell-incline-hammer-curl.mp4"
  },
  {
    "slug": "dumbbell-incline-rear-lateral-t-raise",
    "sourceSlug": "dumbbell-incline-rear-lateral-t-raise",
    "sourceRecordIds": [
      "eb8b2096-f9f0-4154-973b-35d9737d50da"
    ],
    "name": "Dumbbell Incline Rear Lateral T Raise",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/dumbbell-incline-rear-lateral-t-raise",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/dumbbell-incline-rear-lateral-t-raise"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/690a8f6a-5e32-4ac5-ae61-cf2b700ca4c4.mp4",
    "mediaPath": "/exercises/dumbbell-incline-rear-lateral-t-raise.mp4"
  },
  {
    "slug": "dumbbell-incline-t-raise",
    "sourceSlug": "dumbbell-incline-t-raise",
    "sourceRecordIds": [
      "36aff52a-c857-736a-ba6a-ccde6027fd61"
    ],
    "name": "Dumbbell Incline T Raise",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/dumbbell-incline-t-raise",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/dumbbell-incline-t-raise"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/6a593a24-996a-4a8d-b73c-e83a6f73cc43.mp4",
    "mediaPath": "/exercises/dumbbell-incline-t-raise.mp4"
  },
  {
    "slug": "dumbbell-jump",
    "sourceSlug": "dumbbell-jump",
    "sourceRecordIds": [
      "5e41d753-27dc-4af1-852f-1ae2eda678c6"
    ],
    "name": "Dumbbell Jump",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/dumbbell-jump",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/dumbbell-jump"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/3b2c2e24-0bf8-46e9-a11f-462820243e9e.mp4",
    "mediaPath": "/exercises/dumbbell-jump.mp4"
  },
  {
    "slug": "dumbbell-kelso-shrugs",
    "sourceSlug": "dumbbell-kelso-shrugs",
    "sourceRecordIds": [
      "23aaf86c-d27a-4464-88d0-e3f88bb1ba4c"
    ],
    "name": "Dumbbell Kelso Shrugs",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/dumbbell-kelso-shrugs",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/dumbbell-kelso-shrugs"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/1a69c113-7a8b-4e7a-ada7-295f8b62db23.mp4",
    "mediaPath": "/exercises/dumbbell-kelso-shrugs.mp4"
  },
  {
    "slug": "dumbbell-larsen-press",
    "sourceSlug": "dumbbell-larsen-press",
    "sourceRecordIds": [
      "5e119ca8-0a32-4a06-bf8c-37940087361d"
    ],
    "name": "Dumbbell Larsen Press",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/dumbbell-larsen-press",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/dumbbell-larsen-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/aa5076ef-fa6e-47bc-9e61-10a759bf9762.mp4",
    "mediaPath": "/exercises/dumbbell-larsen-press.mp4"
  },
  {
    "slug": "dumbbell-lat-pullover",
    "sourceSlug": "dumbbell-lat-pullover",
    "sourceRecordIds": [
      "e2b119ab-ec23-4688-9449-535340f3d4f9"
    ],
    "name": "Dumbbell Lat Pullover",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/dumbbell-lat-pullover",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/dumbbell-lat-pullover"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/9615a139-577e-4dfa-a5d2-77200f3e3b5d.mp4",
    "mediaPath": "/exercises/dumbbell-lat-pullover.mp4"
  },
  {
    "slug": "dumbbell-lateral-raise",
    "sourceSlug": "dumbbell-lateral-raise",
    "sourceRecordIds": [
      "ac965c65-7896-c2f8-4ab2-5bda19534b41"
    ],
    "name": "Dumbbell Lateral Raise",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/dumbbell-lateral-raise",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/dumbbell-lateral-raise"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/62ca1060-9268-4fa5-a167-0bc79fa10a3a.mp4",
    "mediaPath": "/exercises/dumbbell-lateral-raise.mp4"
  },
  {
    "slug": "dumbbell-low-to-high-fly",
    "sourceSlug": "dumbbell-low-to-high-fly",
    "sourceRecordIds": [
      "e15bca23-4fa2-4ca1-9c7f-f644e370e8c7"
    ],
    "name": "Dumbbell Low to High Fly",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/dumbbell-low-to-high-fly",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/dumbbell-low-to-high-fly"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/dcee9b22-f83b-4dd3-8246-e99d543042cc.mp4",
    "mediaPath": "/exercises/dumbbell-low-to-high-fly.mp4"
  },
  {
    "slug": "dumbbell-lu-raises",
    "sourceSlug": "dumbbell-lu-raises",
    "sourceRecordIds": [
      "ae0322ff-7913-4410-b8fb-4da942ec4783"
    ],
    "name": "Dumbbell Lu Raises",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/dumbbell-lu-raises",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/dumbbell-lu-raises"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/0cd0d3d3-33c2-4ff4-ac9a-2c591ae0700a.mp4",
    "mediaPath": "/exercises/dumbbell-lu-raises.mp4"
  },
  {
    "slug": "dumbbell-lunges",
    "sourceSlug": "dumbbell-lunges",
    "sourceRecordIds": [
      "eb59667f-202d-49ce-a517-34c0ecbc69d4"
    ],
    "name": "Dumbbell Lunges",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/dumbbell-lunges",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/dumbbell-lunges"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/301f616a-681a-4c81-aa3a-8c58ce8f0299.mp4",
    "mediaPath": "/exercises/dumbbell-lunges.mp4"
  },
  {
    "slug": "dumbbell-lying-leg-curl",
    "sourceSlug": "dumbbell-lying-leg-curl",
    "sourceRecordIds": [
      "e7a9f02b-6012-4ada-bf59-16ab85ee6b6d"
    ],
    "name": "Dumbbell Lying Leg Curl",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/dumbbell-lying-leg-curl",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/dumbbell-lying-leg-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/2ebf00ec-a427-4cbb-bbba-24977aec32ab.mp4",
    "mediaPath": "/exercises/dumbbell-lying-leg-curl.mp4"
  },
  {
    "slug": "dumbbell-lying-pronation",
    "sourceSlug": "dumbbell-lying-pronation",
    "sourceRecordIds": [
      "08ebb48f-60d2-44e9-91f9-930e37b8d841"
    ],
    "name": "Dumbbell Lying Pronation",
    "categories": [
      "Forearms"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/forearms/dumbbell-lying-pronation",
    "sourcePages": {
      "Forearms": "https://smartworkout.app/en/exercise-library/forearms/dumbbell-lying-pronation"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/7edeecef-6ab8-4dae-9860-cff466008288.mp4",
    "mediaPath": "/exercises/dumbbell-lying-pronation.mp4"
  },
  {
    "slug": "dumbbell-lying-triceps-extension",
    "sourceSlug": "dumbbell-lying-triceps-extension",
    "sourceRecordIds": [
      "83d39870-dd41-c0dc-5115-5067cb98c3dc"
    ],
    "name": "Dumbbell Lying Triceps Extension",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/dumbbell-lying-triceps-extension",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/dumbbell-lying-triceps-extension"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/0362de59-d154-4177-8a06-086ec08261ff.mp4",
    "mediaPath": "/exercises/dumbbell-lying-triceps-extension.mp4"
  },
  {
    "slug": "dumbbell-neutral-grip-incline-bench-row",
    "sourceSlug": "dumbbell-neutral-grip-incline-bench-row",
    "sourceRecordIds": [
      "8ed82d5b-8055-474e-9d6a-38bb83be1e02"
    ],
    "name": "Dumbbell Neutral Grip Incline Bench Row",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/dumbbell-neutral-grip-incline-bench-row",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/dumbbell-neutral-grip-incline-bench-row"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/eb33700d-4d13-444e-baa1-1f8fd884b762.mp4",
    "mediaPath": "/exercises/dumbbell-neutral-grip-incline-bench-row.mp4"
  },
  {
    "slug": "dumbbell-poliquin-lateral-raise",
    "sourceSlug": "dumbbell-poliquin-lateral-raise",
    "sourceRecordIds": [
      "b7f66997-117e-4893-acc6-6ad18adffdb1"
    ],
    "name": "Dumbbell Poliquin Lateral Raise",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/dumbbell-poliquin-lateral-raise",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/dumbbell-poliquin-lateral-raise"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/392d3cca-7632-44bc-8dd5-c23a1e2dbcf0.mp4",
    "mediaPath": "/exercises/dumbbell-poliquin-lateral-raise.mp4"
  },
  {
    "slug": "dumbbell-poliquin-press",
    "sourceSlug": "dumbbell-poliquin-press",
    "sourceRecordIds": [
      "68fd5792-ddb1-4b46-8842-3cd11b0d7e8b"
    ],
    "name": "Dumbbell Poliquin Press",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/dumbbell-poliquin-press",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/dumbbell-poliquin-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/56b80804-b9ed-4524-a2d7-948c51e2358b.mp4",
    "mediaPath": "/exercises/dumbbell-poliquin-press.mp4"
  },
  {
    "slug": "dumbbell-pullover-with-legs-raised",
    "sourceSlug": "dumbbell-pullover-with-legs-raised",
    "sourceRecordIds": [
      "c97aad0b-f9f1-4533-918a-fc23a466b854"
    ],
    "name": "Dumbbell Pullover with Legs Raised",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/dumbbell-pullover-with-legs-raised",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/dumbbell-pullover-with-legs-raised"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/947e5dc4-ad95-497d-a378-d12a90e1453a.mp4",
    "mediaPath": "/exercises/dumbbell-pullover-with-legs-raised.mp4"
  },
  {
    "slug": "dumbbell-push-press",
    "sourceSlug": "dumbbell-push-press",
    "sourceRecordIds": [
      "0349439c-c56e-4bd8-88b9-7bf9b00f3811"
    ],
    "name": "Dumbbell Push Press",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/dumbbell-push-press",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/dumbbell-push-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/2a725fc8-be67-4061-b80e-783cb70f0d30.mp4",
    "mediaPath": "/exercises/dumbbell-push-press.mp4"
  },
  {
    "slug": "dumbbell-rear-delt-row",
    "sourceSlug": "dumbbell-rear-delt-row",
    "sourceRecordIds": [
      "e9421df5-65a2-4fac-8dfa-bf2552e9f755"
    ],
    "name": "Dumbbell Rear Delt Row",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/dumbbell-rear-delt-row",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/dumbbell-rear-delt-row"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/f39b2da9-656e-4cf7-9d99-dede2ee0a38f.mp4",
    "mediaPath": "/exercises/dumbbell-rear-delt-row.mp4"
  },
  {
    "slug": "dumbbell-rear-lunge",
    "sourceSlug": "dumbbell-rear-lunge",
    "sourceRecordIds": [
      "87956366-b6ca-49aa-8fa5-3423c3787e94"
    ],
    "name": "Dumbbell Rear Lunge",
    "categories": [
      "Gluteal"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/gluteus/dumbbell-rear-lunge",
    "sourcePages": {
      "Gluteal": "https://smartworkout.app/en/exercise-library/gluteus/dumbbell-rear-lunge"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/9f892517-9887-4854-a8c9-f716dde7decc.mp4",
    "mediaPath": "/exercises/dumbbell-rear-lunge.mp4"
  },
  {
    "slug": "dumbbell-reverse-lunge-off-step",
    "sourceSlug": "dumbbell-reverse-lunge-off-step",
    "sourceRecordIds": [
      "127dc619-8078-4148-907b-e08a49f1676a"
    ],
    "name": "Dumbbell Reverse Lunge off Step",
    "categories": [
      "Gluteal"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/gluteus/dumbbell-reverse-lunge-off-step",
    "sourcePages": {
      "Gluteal": "https://smartworkout.app/en/exercise-library/gluteus/dumbbell-reverse-lunge-off-step"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/39c19c16-74a3-47a5-8d63-81f3da358d05.mp4",
    "mediaPath": "/exercises/dumbbell-reverse-lunge-off-step.mp4"
  },
  {
    "slug": "dumbbell-romanian-deadlift",
    "sourceSlug": "dumbbell-romanian-deadlift",
    "sourceRecordIds": [
      "ea0437ea-81fe-4d5e-aa72-cf592ae1c11d"
    ],
    "name": "Dumbbell Romanian Deadlift",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/dumbbell-romanian-deadlift",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/dumbbell-romanian-deadlift"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/b5ba96be-7920-4363-b1f7-885bf760d895.mp4",
    "mediaPath": "/exercises/dumbbell-romanian-deadlift.mp4"
  },
  {
    "slug": "dumbbell-russian-twist",
    "sourceSlug": "dumbbell-russian-twist",
    "sourceRecordIds": [
      "a3da9e1f-b976-4458-92f4-4af1264793fa"
    ],
    "name": "Dumbbell Russian Twist",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/dumbbell-russian-twist",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/dumbbell-russian-twist"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/5b03cb86-2014-46e2-bb10-8cd533212fa5.mp4",
    "mediaPath": "/exercises/dumbbell-russian-twist.mp4"
  },
  {
    "slug": "dumbbell-seal-row",
    "sourceSlug": "dumbbell-seal-row",
    "sourceRecordIds": [
      "5d175483-a70f-418a-8ee1-b4434087df4e"
    ],
    "name": "Dumbbell Seal Row",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/dumbbell-seal-row",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/dumbbell-seal-row"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/cb909b1a-4be4-47c7-ba5d-ab789bb44ae3.mp4",
    "mediaPath": "/exercises/dumbbell-seal-row.mp4"
  },
  {
    "slug": "dumbbell-seated-alternate-hammer-curl",
    "sourceSlug": "dumbbell-seated-alternate-hammer-curl",
    "sourceRecordIds": [
      "e6fa5387-c06a-4647-ae72-92357692edc6"
    ],
    "name": "Dumbbell Seated Alternate Hammer Curl",
    "categories": [
      "Biceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/biceps/dumbbell-seated-alternate-hammer-curl",
    "sourcePages": {
      "Biceps": "https://smartworkout.app/en/exercise-library/biceps/dumbbell-seated-alternate-hammer-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/309bc67b-631b-4d37-92a1-6ba12961d2b1.mp4",
    "mediaPath": "/exercises/dumbbell-seated-alternate-hammer-curl.mp4"
  },
  {
    "slug": "dumbbell-seated-bent-over-high-row",
    "sourceSlug": "dumbbell-seated-bent-over-high-row",
    "sourceRecordIds": [
      "890ca0c8-ff8d-4f2b-ad34-d9743118bfee"
    ],
    "name": "Dumbbell Seated Bent Over High Row",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/dumbbell-seated-bent-over-high-row",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/dumbbell-seated-bent-over-high-row"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/2478ca0d-5b68-424c-8473-310bf31576ce.mp4",
    "mediaPath": "/exercises/dumbbell-seated-bent-over-high-row.mp4"
  },
  {
    "slug": "dumbbell-seated-lateral-raise",
    "sourceSlug": "dumbbell-seated-lateral-raise",
    "sourceRecordIds": [
      "12838e78-2632-4e2b-87c9-3926e86a7e1a"
    ],
    "name": "Dumbbell Seated Lateral Raise",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/dumbbell-seated-lateral-raise",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/dumbbell-seated-lateral-raise"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/4dd16830-39e0-47aa-8ae9-5f6c31b00d39.mp4",
    "mediaPath": "/exercises/dumbbell-seated-lateral-raise.mp4"
  },
  {
    "slug": "dumbbell-seated-triceps-extension",
    "sourceSlug": "dumbbell-seated-triceps-extension",
    "sourceRecordIds": [
      "9481d369-1493-4a72-b758-e0c1870c9b1d",
      "c4aa256a-753d-4b96-88fc-5c52907c648a"
    ],
    "name": "Dumbbell Seated Triceps Extension",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/dumbbell-seated-triceps-extension",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/dumbbell-seated-triceps-extension"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/5cd8faa4-bb41-4bb4-bbda-0aa6146f696b.mp4",
    "mediaPath": "/exercises/dumbbell-seated-triceps-extension.mp4"
  },
  {
    "slug": "dumbbell-shoulder-shrugs",
    "sourceSlug": "dumbbell-shoulder-shrugs",
    "sourceRecordIds": [
      "61fb6b76-1d67-48f8-abba-bca2c60db1f9"
    ],
    "name": "Dumbbell Shoulder Shrugs",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/dumbbell-shoulder-shrugs",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/dumbbell-shoulder-shrugs"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/e27d907f-ce86-45c5-ad37-edab75f4c66c.mp4",
    "mediaPath": "/exercises/dumbbell-shoulder-shrugs.mp4"
  },
  {
    "slug": "dumbbell-side-bridge",
    "sourceSlug": "dumbbell-side-bridge",
    "sourceRecordIds": [
      "15f450f0-f4f1-4391-b59e-c79cd37956ac"
    ],
    "name": "Dumbbell Side Bridge",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/dumbbell-side-bridge",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/dumbbell-side-bridge"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/93c1ab4d-89c0-4e0f-b4b5-1c4c18133d9e.mp4",
    "mediaPath": "/exercises/dumbbell-side-bridge.mp4"
  },
  {
    "slug": "dumbbell-side-lunges",
    "sourceSlug": "dumbbell-side-lunges",
    "sourceRecordIds": [
      "850e7678-377e-475c-81d9-1f4f8c22d5a0"
    ],
    "name": "Dumbbell Side Lunges",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/dumbbell-side-lunges",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/dumbbell-side-lunges"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/ba3f0650-6d8b-4463-b188-d1239ac4614c.mp4",
    "mediaPath": "/exercises/dumbbell-side-lunges.mp4"
  },
  {
    "slug": "dumbbell-single-leg-hip-thrust",
    "sourceSlug": "dumbbell-single-leg-hip-thrust",
    "sourceRecordIds": [
      "0b59dd85-d65d-4e28-bad1-2a74fc204504",
      "81c28cab-ffcc-44f7-8869-7e0979e5a145"
    ],
    "name": "Dumbbell Single Leg Hip Thrust",
    "categories": [
      "Gluteal"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/gluteus/dumbbell-single-leg-hip-thrust",
    "sourcePages": {
      "Gluteal": "https://smartworkout.app/en/exercise-library/gluteus/dumbbell-single-leg-hip-thrust"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/ec4bd299-a2f5-41ea-9eed-2fe4cfeca63f.mp4",
    "mediaPath": "/exercises/dumbbell-single-leg-hip-thrust.mp4"
  },
  {
    "slug": "dumbbell-snatch",
    "sourceSlug": "dumbbell-snatch",
    "sourceRecordIds": [
      "bb8bde33-62a0-46c9-9bbf-d11b93374161"
    ],
    "name": "Dumbbell Snatch",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/dumbbell-snatch",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/dumbbell-snatch"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/03578af9-3e67-49db-b5e6-406c15255a6e.mp4",
    "mediaPath": "/exercises/dumbbell-snatch.mp4"
  },
  {
    "slug": "dumbbell-spider-curl",
    "sourceSlug": "dumbbell-spider-curl",
    "sourceRecordIds": [
      "174978b8-1b92-4700-96d0-98d1835628dd"
    ],
    "name": "Dumbbell Spider Curl",
    "categories": [
      "Biceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/biceps/dumbbell-spider-curl",
    "sourcePages": {
      "Biceps": "https://smartworkout.app/en/exercise-library/biceps/dumbbell-spider-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/45eb1b50-84e5-49b1-a119-80345b27a182.mp4",
    "mediaPath": "/exercises/dumbbell-spider-curl.mp4"
  },
  {
    "slug": "dumbbell-split-squat",
    "sourceSlug": "dumbbell-split-squat",
    "sourceRecordIds": [
      "30fec8f3-59a5-4d4f-9988-972018248c9f"
    ],
    "name": "Dumbbell Split Squat",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/dumbbell-split-squat",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/dumbbell-split-squat"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/46f59875-7d5f-4656-9767-189b41e05f2c.mp4",
    "mediaPath": "/exercises/dumbbell-split-squat.mp4"
  },
  {
    "slug": "dumbbell-squat",
    "sourceSlug": "dumbbell-squat",
    "sourceRecordIds": [
      "3f65c493-34ba-40ed-9098-b9ffc5e506b2"
    ],
    "name": "Dumbbell Squat",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/dumbbell-squat",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/dumbbell-squat"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/cd1b2803-4a4f-4672-809e-6bd9e726b5be.mp4",
    "mediaPath": "/exercises/dumbbell-squat.mp4"
  },
  {
    "slug": "dumbbell-standing-alternate-press",
    "sourceSlug": "dumbbell-standing-alternate-press",
    "sourceRecordIds": [
      "98055ba3-3b26-463f-8ed8-ef7f2811bede"
    ],
    "name": "Dumbbell Standing Alternate Press",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/dumbbell-standing-alternate-press",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/dumbbell-standing-alternate-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/09cfbb01-395b-4001-b94d-b5f9f9ca1cc4.mp4",
    "mediaPath": "/exercises/dumbbell-standing-alternate-press.mp4"
  },
  {
    "slug": "dumbbell-standing-calf-raises",
    "sourceSlug": "dumbbell-standing-calf-raises",
    "sourceRecordIds": [
      "9b56a5dd-d22c-40cc-a93c-05338cc45585"
    ],
    "name": "Dumbbell Standing Calf Raises",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/dumbbell-standing-calf-raises",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/dumbbell-standing-calf-raises"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/2c1d9b96-6616-4813-83bf-71943b2ec41d.mp4",
    "mediaPath": "/exercises/dumbbell-standing-calf-raises.mp4"
  },
  {
    "slug": "dumbbell-standing-driver",
    "sourceSlug": "dumbbell-standing-driver",
    "sourceRecordIds": [
      "c1af5fc6-a3be-4467-87f9-b4e8abb1f55e"
    ],
    "name": "Dumbbell Standing Driver",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/dumbbell-standing-driver",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/dumbbell-standing-driver"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/e28b3802-820e-4d5d-9d54-ef0f52194aad.mp4",
    "mediaPath": "/exercises/dumbbell-standing-driver.mp4"
  },
  {
    "slug": "dumbbell-standing-reverse-wrist-curls",
    "sourceSlug": "dumbbell-standing-reverse-wrist-curls",
    "sourceRecordIds": [
      "b2c6ca4b-db03-4553-8d9f-6e5e87bbd118"
    ],
    "name": "Dumbbell Standing Reverse Wrist Curls",
    "categories": [
      "Forearms"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/forearms/dumbbell-standing-reverse-wrist-curls",
    "sourcePages": {
      "Forearms": "https://smartworkout.app/en/exercise-library/forearms/dumbbell-standing-reverse-wrist-curls"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/62064a79-3e7b-49e9-95a4-1894412a6443.mp4",
    "mediaPath": "/exercises/dumbbell-standing-reverse-wrist-curls.mp4"
  },
  {
    "slug": "dumbbell-standing-side-bend",
    "sourceSlug": "dumbbell-standing-side-bend",
    "sourceRecordIds": [
      "9f9a7752-0ad7-44e9-a025-d68e9ac1a419"
    ],
    "name": "Dumbbell Standing Side Bend",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/dumbbell-standing-side-bend",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/dumbbell-standing-side-bend"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/08ab9632-5bd0-4222-8381-225d1293f13c.mp4",
    "mediaPath": "/exercises/dumbbell-standing-side-bend.mp4"
  },
  {
    "slug": "dumbbell-standing-wrist-curl",
    "sourceSlug": "dumbbell-standing-wrist-curl",
    "sourceRecordIds": [
      "4c88201a-d81c-4c88-b0e2-9b58a5f2e0b1"
    ],
    "name": "Dumbbell Standing Wrist Curl",
    "categories": [
      "Forearms"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/forearms/dumbbell-standing-wrist-curl",
    "sourcePages": {
      "Forearms": "https://smartworkout.app/en/exercise-library/forearms/dumbbell-standing-wrist-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/671aad72-9577-45f3-8ba5-41957dbc6189.mp4",
    "mediaPath": "/exercises/dumbbell-standing-wrist-curl.mp4"
  },
  {
    "slug": "dumbbell-step-up",
    "sourceSlug": "dumbbell-step-up",
    "sourceRecordIds": [
      "a63c8518-6ecd-44df-a7ce-20fc9957bc6a"
    ],
    "name": "Dumbbell Step-Up",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/dumbbell-step-up",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/dumbbell-step-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/e9929636-da62-40f4-83f0-2819af76d507.mp4",
    "mediaPath": "/exercises/dumbbell-step-up.mp4"
  },
  {
    "slug": "dumbbell-straight-leg-deadlift",
    "sourceSlug": "dumbbell-straight-leg-deadlift",
    "sourceRecordIds": [
      "8213817c-7777-4373-bbf6-654fac9db202"
    ],
    "name": "Dumbbell Straight Leg Deadlift",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/dumbbell-straight-leg-deadlift",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/dumbbell-straight-leg-deadlift"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/164b4f5e-deee-4000-bbd5-77b7f15d4c47.mp4",
    "mediaPath": "/exercises/dumbbell-straight-leg-deadlift.mp4"
  },
  {
    "slug": "dumbbell-sumo-squat",
    "sourceSlug": "dumbbell-sumo-squat",
    "sourceRecordIds": [
      "9f23fc45-85b5-4fb8-a6f5-615cd230928f"
    ],
    "name": "Dumbbell Sumo Squat",
    "categories": [
      "Gluteal"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/gluteus/dumbbell-sumo-squat",
    "sourcePages": {
      "Gluteal": "https://smartworkout.app/en/exercise-library/gluteus/dumbbell-sumo-squat"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/eda567bf-ae70-4ae4-885c-fe8820613f96.mp4",
    "mediaPath": "/exercises/dumbbell-sumo-squat.mp4"
  },
  {
    "slug": "dumbbell-supinated-preacher-curl",
    "sourceSlug": "dumbbell-supinated-preacher-curl",
    "sourceRecordIds": [
      "293c61e4-0955-4504-a40d-3b671498ad97"
    ],
    "name": "Dumbbell Supinated Preacher Curl",
    "categories": [
      "Biceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/biceps/dumbbell-supinated-preacher-curl",
    "sourcePages": {
      "Biceps": "https://smartworkout.app/en/exercise-library/biceps/dumbbell-supinated-preacher-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/5615a074-10b6-4385-afc2-ca5c08c7cca0.mp4",
    "mediaPath": "/exercises/dumbbell-supinated-preacher-curl.mp4"
  },
  {
    "slug": "dumbbell-upright-row",
    "sourceSlug": "dumbbell-upright-row",
    "sourceRecordIds": [
      "7074ca94-a20d-cfa8-7702-b59e4bd31ab9"
    ],
    "name": "Dumbbell Upright Row",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/dumbbell-upright-row",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/dumbbell-upright-row"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/1bc80757-1df3-47d7-baee-6be9e3b9f03c.mp4",
    "mediaPath": "/exercises/dumbbell-upright-row.mp4"
  },
  {
    "slug": "dumbbell-walking-lunges",
    "sourceSlug": "dumbbell-walking-lunges",
    "sourceRecordIds": [
      "6dd46aa0-9539-260b-8885-77d56241439b"
    ],
    "name": "Dumbbell Walking Lunges",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/dumbbell-walking-lunges",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/dumbbell-walking-lunges"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/d478be3b-f434-4b80-8fff-3eba57247ed5.mp4",
    "mediaPath": "/exercises/dumbbell-walking-lunges.mp4"
  },
  {
    "slug": "elbow-out-chest-stretch",
    "sourceSlug": "elbow-out-chest-stretch",
    "sourceRecordIds": [
      "ae4654cc-cd5b-4aef-81de-28e6eff721f7"
    ],
    "name": "Elbow Out Chest Stretch",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/elbow-out-chest-stretch",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/elbow-out-chest-stretch"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/e6d86856-f18f-466b-8cdc-b3a48c9644f5.mp4",
    "mediaPath": "/exercises/elbow-out-chest-stretch.mp4"
  },
  {
    "slug": "elliptical-trainer",
    "sourceSlug": "elliptical-trainer",
    "sourceRecordIds": [
      "a464ad90-8802-40ac-bf44-a414b1b504bd"
    ],
    "name": "Elliptical Trainer",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/elliptical-trainer",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/elliptical-trainer"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/38a3a505-5577-4a0a-9a91-e44a7412b028.mp4",
    "mediaPath": "/exercises/elliptical-trainer.mp4"
  },
  {
    "slug": "ez-bar-biceps-curl",
    "sourceSlug": "ez-bar-biceps-curl",
    "sourceRecordIds": [
      "5cd4a725-e9e7-4677-a24a-1b83ce5da740"
    ],
    "name": "EZ-Bar Biceps Curl",
    "categories": [
      "Biceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/biceps/ez-bar-biceps-curl",
    "sourcePages": {
      "Biceps": "https://smartworkout.app/en/exercise-library/biceps/ez-bar-biceps-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/264a8706-fefc-4dce-a97c-433c4477e265.mp4",
    "mediaPath": "/exercises/ez-bar-biceps-curl.mp4"
  },
  {
    "slug": "ez-bar-preacher-curl",
    "sourceSlug": "ez-bar-preacher-curl",
    "sourceRecordIds": [
      "38709d78-13c4-45d5-ac56-b42c86866412"
    ],
    "name": "EZ-Bar Preacher Curl",
    "categories": [
      "Biceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/biceps/ez-bar-preacher-curl",
    "sourcePages": {
      "Biceps": "https://smartworkout.app/en/exercise-library/biceps/ez-bar-preacher-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/302e7d21-3ebe-4106-80bf-e22773b66ea5.mp4",
    "mediaPath": "/exercises/ez-bar-preacher-curl.mp4"
  },
  {
    "slug": "ez-bar-reverse-grip-biceps-curl",
    "sourceSlug": "ez-bar-reverse-grip-biceps-curl",
    "sourceRecordIds": [
      "b03f3b8c-b957-4838-b198-eeda7a389132"
    ],
    "name": "EZ-Bar Reverse Grip Biceps Curl",
    "categories": [
      "Forearms"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/forearms/ez-bar-reverse-grip-biceps-curl",
    "sourcePages": {
      "Forearms": "https://smartworkout.app/en/exercise-library/forearms/ez-bar-reverse-grip-biceps-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/efced1a3-97b1-4175-b3cb-14d9c3701ff9.mp4",
    "mediaPath": "/exercises/ez-bar-reverse-grip-biceps-curl.mp4"
  },
  {
    "slug": "ez-bar-reverse-spider-curl",
    "sourceSlug": "ez-bar-reverse-spider-curl",
    "sourceRecordIds": [
      "91c42a1f-9c3c-4b39-8325-177d96e6c806"
    ],
    "name": "EZ-Bar Reverse Spider Curl",
    "categories": [
      "Forearms"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/forearms/ez-bar-reverse-spider-curl",
    "sourcePages": {
      "Forearms": "https://smartworkout.app/en/exercise-library/forearms/ez-bar-reverse-spider-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/4593576d-b7be-4d3e-83a6-e5faa974485b.mp4",
    "mediaPath": "/exercises/ez-bar-reverse-spider-curl.mp4"
  },
  {
    "slug": "ez-bar-seated-reverse-wrist-curl",
    "sourceSlug": "ez-bar-seated-reverse-wrist-curl",
    "sourceRecordIds": [
      "24143ad6-3b55-459f-bdac-b8721dd1e668"
    ],
    "name": "EZ-Bar Seated Reverse Wrist Curl",
    "categories": [
      "Forearms"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/forearms/ez-bar-seated-reverse-wrist-curl",
    "sourcePages": {
      "Forearms": "https://smartworkout.app/en/exercise-library/forearms/ez-bar-seated-reverse-wrist-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/59305c82-c91a-421a-a6da-3ac6ccc78fab.mp4",
    "mediaPath": "/exercises/ez-bar-seated-reverse-wrist-curl.mp4"
  },
  {
    "slug": "ez-bar-seated-triceps-extension",
    "sourceSlug": "ez-bar-seated-triceps-extension",
    "sourceRecordIds": [
      "305f4776-36d5-45a1-aae9-9671e419c430"
    ],
    "name": "EZ-Bar Seated Triceps Extension",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/ez-bar-seated-triceps-extension",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/ez-bar-seated-triceps-extension"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/eb41c91c-9ed6-4d61-9e77-8963b224df91.mp4",
    "mediaPath": "/exercises/ez-bar-seated-triceps-extension.mp4"
  },
  {
    "slug": "ez-bar-seated-wrist-curl",
    "sourceSlug": "ez-bar-seated-wrist-curl",
    "sourceRecordIds": [
      "8008ee41-c9d1-42a3-8ea5-773f9f954230"
    ],
    "name": "EZ-Bar Seated Wrist Curl",
    "categories": [
      "Forearms"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/forearms/ez-bar-seated-wrist-curl",
    "sourcePages": {
      "Forearms": "https://smartworkout.app/en/exercise-library/forearms/ez-bar-seated-wrist-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/c55080b2-fe0e-4cc3-9b9d-47a5f2797806.mp4",
    "mediaPath": "/exercises/ez-bar-seated-wrist-curl.mp4"
  },
  {
    "slug": "ez-bar-spider-curl",
    "sourceSlug": "ez-bar-spider-curl",
    "sourceRecordIds": [
      "9f11cb88-a5a3-49a9-b8b3-14d535803a6b"
    ],
    "name": "EZ-Bar Spider Curl",
    "categories": [
      "Biceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/biceps/ez-bar-spider-curl",
    "sourcePages": {
      "Biceps": "https://smartworkout.app/en/exercise-library/biceps/ez-bar-spider-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/0c2106f4-0de3-4cdf-9c0c-6676929e8a4b.mp4",
    "mediaPath": "/exercises/ez-bar-spider-curl.mp4"
  },
  {
    "slug": "ez-bar-tricep-pushdown",
    "sourceSlug": "ez-bar-tricep-pushdown",
    "sourceRecordIds": [
      "79e5f9db-193b-4458-8422-d444fa75336a"
    ],
    "name": "EZ-Bar Tricep Pushdown",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/ez-bar-tricep-pushdown",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/ez-bar-tricep-pushdown"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/c00bb56c-4f78-4833-a488-6df479e49308.mp4",
    "mediaPath": "/exercises/ez-bar-tricep-pushdown.mp4"
  },
  {
    "slug": "farmer-walk",
    "sourceSlug": "farmer-walk",
    "sourceRecordIds": [
      "2f471d53-3998-40e5-bfb3-542da8be66af"
    ],
    "name": "Farmer Walk",
    "categories": [
      "Forearms"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/forearms/farmer-walk",
    "sourcePages": {
      "Forearms": "https://smartworkout.app/en/exercise-library/forearms/farmer-walk"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/b6d37450-7d81-4f16-bde4-92f75e2969cf.mp4",
    "mediaPath": "/exercises/farmer-walk.mp4"
  },
  {
    "slug": "figure-4-stretch-on-chair",
    "sourceSlug": "figure-4-stretch-on-chair",
    "sourceRecordIds": [
      "51f6c2dd-f5ef-49ed-b10c-8538ac8330ac"
    ],
    "name": "Figure 4 Stretch on Chair",
    "categories": [
      "Gluteal"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/gluteus/figure-4-stretch-on-chair",
    "sourcePages": {
      "Gluteal": "https://smartworkout.app/en/exercise-library/gluteus/figure-4-stretch-on-chair"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/95d641ff-fa5a-4b70-abf3-e669b0ab7ffd.mp4",
    "mediaPath": "/exercises/figure-4-stretch-on-chair.mp4"
  },
  {
    "slug": "finger-push-up",
    "sourceSlug": "finger-push-up",
    "sourceRecordIds": [
      "eb35e6eb-4b33-4d2f-a100-99079c086284"
    ],
    "name": "Finger Push-Up",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/finger-push-up",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/finger-push-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/8fad7bad-4464-4e8f-8cce-4e2cc2e0f778.mp4",
    "mediaPath": "/exercises/finger-push-up.mp4"
  },
  {
    "slug": "flag",
    "sourceSlug": "flag",
    "sourceRecordIds": [
      "9d9a38ee-21ac-40ad-ad39-0cb2c09a4b88"
    ],
    "name": "Flag",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/flag",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/flag"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/34bc7208-ce30-4e32-9ac1-b7d271f0cf37.mp4",
    "mediaPath": "/exercises/flag.mp4"
  },
  {
    "slug": "floor-dumbbell-press",
    "sourceSlug": "floor-dumbbell-press",
    "sourceRecordIds": [
      "4eb45701-1c6d-46b7-a427-24f80a43837c"
    ],
    "name": "Floor Dumbbell Press",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/floor-dumbbell-press",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/floor-dumbbell-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/d4d4942d-ab5e-4496-b15f-e55bcd5c99a9.mp4",
    "mediaPath": "/exercises/floor-dumbbell-press.mp4"
  },
  {
    "slug": "forward-band-monster-walk",
    "sourceSlug": "forward-band-monster-walk",
    "sourceRecordIds": [
      "925b9508-e34a-44e1-b635-5d6f1b81b9d9"
    ],
    "name": "Forward Band Monster Walk",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/forward-band-monster-walk",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/forward-band-monster-walk"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/345c5a82-61eb-496b-a488-597f0da2f7e4.mp4",
    "mediaPath": "/exercises/forward-band-monster-walk.mp4"
  },
  {
    "slug": "frog-crunch",
    "sourceSlug": "frog-crunch",
    "sourceRecordIds": [
      "7d9e0403-7208-47e8-9488-b1bc85cb9bce"
    ],
    "name": "Frog Crunch",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/frog-crunch",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/frog-crunch"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/bfd5f760-da9c-4311-8a37-8d6b8c7c1d03.mp4",
    "mediaPath": "/exercises/frog-crunch.mp4"
  },
  {
    "slug": "frog-planche",
    "sourceSlug": "frog-planche",
    "sourceRecordIds": [
      "5e5e5c5f-0e1d-4827-b76d-c2f87d4ac410"
    ],
    "name": "Frog Planche",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/frog-planche",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/frog-planche"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/4701f532-aae4-49c7-a450-28b966feba6c.mp4",
    "mediaPath": "/exercises/frog-planche.mp4"
  },
  {
    "slug": "frog-pump",
    "sourceSlug": "frog-pump",
    "sourceRecordIds": [
      "c79993c0-52a1-4575-94f6-9e63c75453be"
    ],
    "name": "Frog Pump",
    "categories": [
      "Gluteal"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/gluteus/frog-pump",
    "sourcePages": {
      "Gluteal": "https://smartworkout.app/en/exercise-library/gluteus/frog-pump"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/f8321c51-8da2-4141-8eb8-4b5899cd4401.mp4",
    "mediaPath": "/exercises/frog-pump.mp4"
  },
  {
    "slug": "front-lever",
    "sourceSlug": "front-lever",
    "sourceRecordIds": [
      "e6e703e3-77f2-45e1-b211-3cf5aceb0d80"
    ],
    "name": "Front Lever",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/front-lever",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/front-lever"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/bc0c7cee-2b89-494b-a888-9b1b820141db.mp4",
    "mediaPath": "/exercises/front-lever.mp4"
  },
  {
    "slug": "front-lever-pull-up",
    "sourceSlug": "front-lever-pull-up",
    "sourceRecordIds": [
      "28ad1245-c026-45e9-b1db-34c169e6b8c3"
    ],
    "name": "Front Lever Pull-Up",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/front-lever-pull-up",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/front-lever-pull-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/29994634-51a7-490e-ade0-78bc4436d473.mp4",
    "mediaPath": "/exercises/front-lever-pull-up.mp4"
  },
  {
    "slug": "front-squat",
    "sourceSlug": "front-squat",
    "sourceRecordIds": [
      "49447a3b-1edb-5947-76e0-1a67e587cee5"
    ],
    "name": "Front Squat",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/front-squat",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/front-squat"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/d2337c8c-c8f0-4608-8ed5-156c293da825.mp4",
    "mediaPath": "/exercises/front-squat.mp4"
  },
  {
    "slug": "full-planche",
    "sourceSlug": "full-planche",
    "sourceRecordIds": [
      "47842d2f-f208-4c29-ad46-f54b54963d06"
    ],
    "name": "Full Planche",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/full-planche",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/full-planche"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/ab288c63-7b82-4955-83b0-6d36fcb29ea2.mp4",
    "mediaPath": "/exercises/full-planche.mp4"
  },
  {
    "slug": "full-planche-push-up",
    "sourceSlug": "full-planche-push-up",
    "sourceRecordIds": [
      "d8a5dc02-4460-4bb0-baba-2e12799b1988"
    ],
    "name": "Full Planche Push-Up",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/full-planche-push-up",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/full-planche-push-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/97d75736-ef32-4193-a46f-4671aac36e9a.mp4",
    "mediaPath": "/exercises/full-planche-push-up.mp4"
  },
  {
    "slug": "glute-bridge",
    "sourceSlug": "glute-bridge",
    "sourceRecordIds": [
      "6151909d-a462-46b8-a8dd-e418c243fba3"
    ],
    "name": "Glute Bridge",
    "categories": [
      "Gluteal"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/gluteus/glute-bridge",
    "sourcePages": {
      "Gluteal": "https://smartworkout.app/en/exercise-library/gluteus/glute-bridge"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/f803258f-20c1-4aa2-aee4-f9e1a68fe469.mp4",
    "mediaPath": "/exercises/glute-bridge.mp4"
  },
  {
    "slug": "glute-bridge-on-bench",
    "sourceSlug": "glute-bridge-on-bench",
    "sourceRecordIds": [
      "a408662a-d8a8-4d17-9544-fa2ce09356db"
    ],
    "name": "Glute Bridge on Bench",
    "categories": [
      "Gluteal"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/gluteus/glute-bridge-on-bench",
    "sourcePages": {
      "Gluteal": "https://smartworkout.app/en/exercise-library/gluteus/glute-bridge-on-bench"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/cdefa0ab-30d9-42e9-869b-fdd0aa374304.mp4",
    "mediaPath": "/exercises/glute-bridge-on-bench.mp4"
  },
  {
    "slug": "glute-bridge-single-leg",
    "sourceSlug": "glute-bridge-single-leg",
    "sourceRecordIds": [
      "fd0bc7ef-9983-4afc-b2c9-e1f9e273f566"
    ],
    "name": "Glute Bridge Single Leg",
    "categories": [
      "Gluteal"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/gluteus/glute-bridge-single-leg",
    "sourcePages": {
      "Gluteal": "https://smartworkout.app/en/exercise-library/gluteus/glute-bridge-single-leg"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/59811037-44cc-4ac1-95d0-3c2e7bd021d0.mp4",
    "mediaPath": "/exercises/glute-bridge-single-leg.mp4"
  },
  {
    "slug": "glute-cable-kickback",
    "sourceSlug": "glute-cable-kickback",
    "sourceRecordIds": [
      "66560c14-c119-4d53-b8ad-d075f2ccea2c"
    ],
    "name": "Glute Cable Kickback",
    "categories": [
      "Gluteal"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/gluteus/glute-cable-kickback",
    "sourcePages": {
      "Gluteal": "https://smartworkout.app/en/exercise-library/gluteus/glute-cable-kickback"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/9e81ed9f-200d-405e-976c-ac9592d9086d.mp4",
    "mediaPath": "/exercises/glute-cable-kickback.mp4"
  },
  {
    "slug": "glute-ham-raise-1-2",
    "sourceSlug": "glute-ham-raise-1/2",
    "sourceRecordIds": [
      "8dcc0b41-7486-485d-aa85-c09fa57537eb"
    ],
    "name": "Glute-Ham Raise 1/2",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/glute-ham-raise-1/2",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/glute-ham-raise-1/2"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/81216443-74ad-4c65-a054-3836dab548a5.mp4",
    "mediaPath": "/exercises/glute-ham-raise-1-2.mp4"
  },
  {
    "slug": "glute-machine-kickback",
    "sourceSlug": "glute-machine-kickback",
    "sourceRecordIds": [
      "98e32b35-8efa-4e40-bff6-d414f8297dd1"
    ],
    "name": "Glute Machine Kickback",
    "categories": [
      "Gluteal"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/gluteus/glute-machine-kickback",
    "sourcePages": {
      "Gluteal": "https://smartworkout.app/en/exercise-library/gluteus/glute-machine-kickback"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/efd17fd3-ef95-43c1-8eb7-7b10975766f3.mp4",
    "mediaPath": "/exercises/glute-machine-kickback.mp4"
  },
  {
    "slug": "glutes-roll",
    "sourceSlug": "glutes-roll",
    "sourceRecordIds": [
      "844fd563-697e-4abc-974f-5894f3c1d657"
    ],
    "name": "Glutes Roll",
    "categories": [
      "Gluteal"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/gluteus/glutes-roll",
    "sourcePages": {
      "Gluteal": "https://smartworkout.app/en/exercise-library/gluteus/glutes-roll"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/dd29ea4c-5985-4a8b-ade9-9e1af9c89751.mp4",
    "mediaPath": "/exercises/glutes-roll.mp4"
  },
  {
    "slug": "goblet-squat",
    "sourceSlug": "goblet-squat",
    "sourceRecordIds": [
      "7bdabdd2-8124-40d5-92b7-6038a087bc9b"
    ],
    "name": "Goblet Squat",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/goblet-squat",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/goblet-squat"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/bf7cdba1-f763-4816-8921-a10c86f7a026.mp4",
    "mediaPath": "/exercises/goblet-squat.mp4"
  },
  {
    "slug": "gorilla-row",
    "sourceSlug": "gorilla-row",
    "sourceRecordIds": [
      "35d975b5-dfd2-4bc1-b3f6-6cae96604d4a"
    ],
    "name": "Gorilla Row",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/gorilla-row",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/gorilla-row"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/2006990a-8bbe-44ca-b959-9f24c7e4a5cd.mp4",
    "mediaPath": "/exercises/gorilla-row.mp4"
  },
  {
    "slug": "half-kneeling-quad-stretch",
    "sourceSlug": "half-kneeling-quad-stretch",
    "sourceRecordIds": [
      "5bf3ca9d-6d66-49eb-be24-2fcb61b9bda5"
    ],
    "name": "Half Kneeling Quad Stretch",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/half-kneeling-quad-stretch",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/half-kneeling-quad-stretch"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/9811921a-a1fd-47dd-956d-0b101242f966.mp4",
    "mediaPath": "/exercises/half-kneeling-quad-stretch.mp4"
  },
  {
    "slug": "half-kneeling-shoulder-dumbbell-press",
    "sourceSlug": "half-kneeling-shoulder-dumbbell-press",
    "sourceRecordIds": [
      "65e0d493-ff1c-4492-a82a-109167974678"
    ],
    "name": "Half Kneeling Shoulder Dumbbell Press",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/half-kneeling-shoulder-dumbbell-press",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/half-kneeling-shoulder-dumbbell-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/c02e79fa-e9d4-48a0-bbf1-74e3df0c61cf.mp4",
    "mediaPath": "/exercises/half-kneeling-shoulder-dumbbell-press.mp4"
  },
  {
    "slug": "half-squat",
    "sourceSlug": "half-squat",
    "sourceRecordIds": [
      "0bcffb2d-f78d-48b8-a3d8-3b49f166a66f"
    ],
    "name": "Half Squat",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/half-squat",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/half-squat"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/d5a4c3aa-35fd-41e6-88fe-edc3d916845d.mp4",
    "mediaPath": "/exercises/half-squat.mp4"
  },
  {
    "slug": "hammer-grip-dumbbell-bench-press",
    "sourceSlug": "hammer-grip-dumbbell-bench-press",
    "sourceRecordIds": [
      "65500534-b8d9-4aee-a841-28b69a12cf58"
    ],
    "name": "Hammer Grip Dumbbell Bench Press",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/hammer-grip-dumbbell-bench-press",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/hammer-grip-dumbbell-bench-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/4208805a-35b3-47da-a281-e3fcf76d3caa.mp4",
    "mediaPath": "/exercises/hammer-grip-dumbbell-bench-press.mp4"
  },
  {
    "slug": "hand-gripper",
    "sourceSlug": "hand-gripper",
    "sourceRecordIds": [
      "eda6e2d1-4c13-43c3-b97c-bc22f5db2687"
    ],
    "name": "Hand Gripper",
    "categories": [
      "Forearms"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/forearms/hand-gripper",
    "sourcePages": {
      "Forearms": "https://smartworkout.app/en/exercise-library/forearms/hand-gripper"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/5180cc87-9611-488d-b380-42d5cf3cfe9c.mp4",
    "mediaPath": "/exercises/hand-gripper.mp4"
  },
  {
    "slug": "handstand-hold",
    "sourceSlug": "handstand-hold",
    "sourceRecordIds": [
      "fcbd7cf4-0be9-4c9f-8f10-fcb81de7a316"
    ],
    "name": "Handstand Hold",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/handstand-hold",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/handstand-hold"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/334e80db-a836-4a2e-a8a4-6e003280e4d4.mp4",
    "mediaPath": "/exercises/handstand-hold.mp4"
  },
  {
    "slug": "handstand-push-up",
    "sourceSlug": "handstand-push-up",
    "sourceRecordIds": [
      "9c1ee795-e406-4b2e-872b-d9c7edc487dd"
    ],
    "name": "Handstand Push-Up",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/handstand-push-up",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/handstand-push-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/91661081-fad1-4e62-8725-175f3f671a3b.mp4",
    "mediaPath": "/exercises/handstand-push-up.mp4"
  },
  {
    "slug": "hang-power-clean",
    "sourceSlug": "hang-power-clean",
    "sourceRecordIds": [
      "642e9efb-4dc4-41a7-8e84-56dcea274c86"
    ],
    "name": "Hang Power Clean",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/hang-power-clean",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/hang-power-clean"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/06cb104d-fc7d-49ae-aca0-54bd4fb7e713.mp4",
    "mediaPath": "/exercises/hang-power-clean.mp4"
  },
  {
    "slug": "hanging-half-windmill",
    "sourceSlug": "hanging-half-windmill",
    "sourceRecordIds": [
      "a65c12ab-688e-47bf-966c-994dcc71ec89"
    ],
    "name": "Hanging Half Windmill",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/hanging-half-windmill",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/hanging-half-windmill"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/5d54f2c7-a08a-44b0-9837-f9173c4a7d80.mp4",
    "mediaPath": "/exercises/hanging-half-windmill.mp4"
  },
  {
    "slug": "hanging-knee-circles",
    "sourceSlug": "hanging-knee-circles",
    "sourceRecordIds": [
      "79b4b650-53d9-4e87-8bd8-7143d3f7802d"
    ],
    "name": "Hanging Knee Circles",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/hanging-knee-circles",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/hanging-knee-circles"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/9d3bd7f9-83ef-4311-9671-0420c8c30286.mp4",
    "mediaPath": "/exercises/hanging-knee-circles.mp4"
  },
  {
    "slug": "hanging-knee-raises",
    "sourceSlug": "hanging-knee-raises",
    "sourceRecordIds": [
      "e9cd8dfe-d2be-42be-b259-d1d3fc671aa9"
    ],
    "name": "Hanging Knee Raises",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/hanging-knee-raises",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/hanging-knee-raises"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/13180fc4-ea8c-4813-8361-68da03eb24fc.mp4",
    "mediaPath": "/exercises/hanging-knee-raises.mp4"
  },
  {
    "slug": "hanging-knee-to-chest",
    "sourceSlug": "hanging-knee-to-chest",
    "sourceRecordIds": [
      "2a7a20b2-edc3-4565-8bdb-e7f56247ee26"
    ],
    "name": "Hanging Knee To Chest",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/hanging-knee-to-chest",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/hanging-knee-to-chest"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/baeb8def-dfaa-46a9-998a-c6129cf21463.mp4",
    "mediaPath": "/exercises/hanging-knee-to-chest.mp4"
  },
  {
    "slug": "hanging-knees-to-elbows",
    "sourceSlug": "hanging-knees-to-elbows",
    "sourceRecordIds": [
      "51e27022-23d5-4196-aa85-a3b2f1c213b4"
    ],
    "name": "Hanging Knees to Elbows",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/hanging-knees-to-elbows",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/hanging-knees-to-elbows"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/15b84a6b-99ac-4bd5-b1d8-7c98272a3ea5.mp4",
    "mediaPath": "/exercises/hanging-knees-to-elbows.mp4"
  },
  {
    "slug": "hanging-knees-to-elbows-waist",
    "sourceSlug": "hanging-knees-to-elbows-waist",
    "sourceRecordIds": [
      "5e34780b-d33a-4637-bd4c-2b282149bad7"
    ],
    "name": "Hanging Knees to Elbows Waist",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/hanging-knees-to-elbows-waist",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/hanging-knees-to-elbows-waist"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/590402ef-84ac-4b34-a389-c59dfc0b4b27.mp4",
    "mediaPath": "/exercises/hanging-knees-to-elbows-waist.mp4"
  },
  {
    "slug": "hanging-leg-raise-to-bar",
    "sourceSlug": "hanging-leg-raise-to-bar",
    "sourceRecordIds": [
      "806178d3-cc6d-4295-8263-a21ea9be34b7"
    ],
    "name": "Hanging Leg Raise To Bar",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/hanging-leg-raise-to-bar",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/hanging-leg-raise-to-bar"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/55da64aa-d53a-4314-96dd-db9dcf40977b.mp4",
    "mediaPath": "/exercises/hanging-leg-raise-to-bar.mp4"
  },
  {
    "slug": "hanging-oblique-knee-raise",
    "sourceSlug": "hanging-oblique-knee-raise",
    "sourceRecordIds": [
      "d53971e5-7438-4a9e-b041-0158b3142546"
    ],
    "name": "Hanging Oblique Knee Raise",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/hanging-oblique-knee-raise",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/hanging-oblique-knee-raise"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/cb5401d6-3354-4d9a-8cb6-e27b988a505f.mp4",
    "mediaPath": "/exercises/hanging-oblique-knee-raise.mp4"
  },
  {
    "slug": "hanging-scapular-retractions",
    "sourceSlug": "hanging-scapular-retractions",
    "sourceRecordIds": [
      "d723ed09-c017-4ea4-8f63-90c1a00cbb6a"
    ],
    "name": "Hanging Scapular Retractions",
    "categories": [
      "Forearms"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/forearms/hanging-scapular-retractions",
    "sourcePages": {
      "Forearms": "https://smartworkout.app/en/exercise-library/forearms/hanging-scapular-retractions"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/e7366231-24ff-4313-b784-f702753f16b6.mp4",
    "mediaPath": "/exercises/hanging-scapular-retractions.mp4"
  },
  {
    "slug": "hanging-scissors-kicks",
    "sourceSlug": "hanging-scissors-kicks",
    "sourceRecordIds": [
      "14046b3a-d435-4452-925e-511a8addfffb"
    ],
    "name": "Hanging Scissors Kicks",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/hanging-scissors-kicks",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/hanging-scissors-kicks"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/08c88cfe-e4b4-426a-b4f0-aeb09c6f76ac.mp4",
    "mediaPath": "/exercises/hanging-scissors-kicks.mp4"
  },
  {
    "slug": "hanging-straight-leg-raise",
    "sourceSlug": "hanging-straight-leg-raise",
    "sourceRecordIds": [
      "88d01eae-b72c-4649-8178-0be9633ec6d2"
    ],
    "name": "Hanging Straight Leg Raise",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/hanging-straight-leg-raise",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/hanging-straight-leg-raise"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/76633a51-aea1-4fa9-8d71-ac72bd79338a.mp4",
    "mediaPath": "/exercises/hanging-straight-leg-raise.mp4"
  },
  {
    "slug": "happy-baby-pose",
    "sourceSlug": "happy-baby-pose",
    "sourceRecordIds": [
      "f6468090-67cf-4fdc-ab45-49b41b28037b"
    ],
    "name": "Happy Baby Pose",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/happy-baby-pose",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/happy-baby-pose"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/8d83f6d0-7cd0-4cc0-b8d8-ac334249f099.mp4",
    "mediaPath": "/exercises/happy-baby-pose.mp4"
  },
  {
    "slug": "hercules-curl",
    "sourceSlug": "hercules-curl",
    "sourceRecordIds": [
      "94c146d4-89a6-457b-a2b3-6a409ab74d45"
    ],
    "name": "Hercules Curl",
    "categories": [
      "Biceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/biceps/hercules-curl",
    "sourcePages": {
      "Biceps": "https://smartworkout.app/en/exercise-library/biceps/hercules-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/e1c3abfb-dec6-4540-b591-3d843bb6d2c4.mp4",
    "mediaPath": "/exercises/hercules-curl.mp4"
  },
  {
    "slug": "high-bar-squat",
    "sourceSlug": "high-bar-squat",
    "sourceRecordIds": [
      "25cbefe9-8ebb-416a-8d6f-cbef5b14a585"
    ],
    "name": "High-Bar Squat",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/high-bar-squat",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/high-bar-squat"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/841fe685-c0e5-42b6-9835-db738c0bfced.mp4",
    "mediaPath": "/exercises/high-bar-squat.mp4"
  },
  {
    "slug": "high-low-cable-chest-fly",
    "sourceSlug": "high-low-cable-chest-fly",
    "sourceRecordIds": [
      "048f0d34-855e-4bff-ff32-a2d851a8757d"
    ],
    "name": "High Low Cable Chest Fly",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/high-low-cable-chest-fly",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/high-low-cable-chest-fly"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/9514aef8-30ff-4652-9524-9cf4633346db.mp4",
    "mediaPath": "/exercises/high-low-cable-chest-fly.mp4"
  },
  {
    "slug": "high-pulley-overhead-triceps-extension",
    "sourceSlug": "high-pulley-overhead-triceps-extension",
    "sourceRecordIds": [
      "706acd4f-c5f6-4aa7-95d2-af551214e447"
    ],
    "name": "High Pulley Overhead Triceps Extension",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/high-pulley-overhead-triceps-extension",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/high-pulley-overhead-triceps-extension"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/a10f25d3-573f-4f64-8df2-2acf5f2ea25b.mp4",
    "mediaPath": "/exercises/high-pulley-overhead-triceps-extension.mp4"
  },
  {
    "slug": "high-to-low-band-woodchopper",
    "sourceSlug": "high-to-low-band-woodchopper",
    "sourceRecordIds": [
      "8929de5f-b029-4ffd-a773-744cfc6ef113"
    ],
    "name": "High To Low Band Woodchopper",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/high-to-low-band-woodchopper",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/high-to-low-band-woodchopper"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/c899c33e-0594-4ea2-93e5-7bec1ab3bbb5.mp4",
    "mediaPath": "/exercises/high-to-low-band-woodchopper.mp4"
  },
  {
    "slug": "hip-circles",
    "sourceSlug": "hip-circles",
    "sourceRecordIds": [
      "883d8808-3994-4bdf-aef6-ef9413aee9be"
    ],
    "name": "Hip Circles",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/hip-circles",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/hip-circles"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/a3991973-2fae-48ab-bb5d-1bf7a38e9c52.mp4",
    "mediaPath": "/exercises/hip-circles.mp4"
  },
  {
    "slug": "hip-hinge",
    "sourceSlug": "hip-hinge",
    "sourceRecordIds": [
      "b805ce84-2b5c-4cd1-8bb3-a8cc53c44b49"
    ],
    "name": "Hip Hinge",
    "categories": [
      "Gluteal"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/gluteus/hip-hinge",
    "sourcePages": {
      "Gluteal": "https://smartworkout.app/en/exercise-library/gluteus/hip-hinge"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/a17b800c-19d1-4b79-857a-79cbed8cbe85.mp4",
    "mediaPath": "/exercises/hip-hinge.mp4"
  },
  {
    "slug": "hip-thrust",
    "sourceSlug": "hip-thrust",
    "sourceRecordIds": [
      "5246f266-003c-7ce5-6be0-283f2136321e",
      "7ce01b32-14e6-4185-b499-137ba4f99177"
    ],
    "name": "Hip Thrust",
    "categories": [
      "Gluteal"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/gluteus/hip-thrust",
    "sourcePages": {
      "Gluteal": "https://smartworkout.app/en/exercise-library/gluteus/hip-thrust"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/327ebb47-0e48-4e5f-af24-aca2819cf07f.mp4",
    "mediaPath": "/exercises/hip-thrust.mp4"
  },
  {
    "slug": "hip-thrust-smith-machine",
    "sourceSlug": "hip-thrust-smith-machine",
    "sourceRecordIds": [
      "442206c2-d2f1-413e-a73f-52b5dd819eb1"
    ],
    "name": "Hip Thrust Smith Machine",
    "categories": [
      "Gluteal"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/gluteus/hip-thrust-smith-machine",
    "sourcePages": {
      "Gluteal": "https://smartworkout.app/en/exercise-library/gluteus/hip-thrust-smith-machine"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/6dc16915-265c-4719-ac62-5129510c04f6.mp4",
    "mediaPath": "/exercises/hip-thrust-smith-machine.mp4"
  },
  {
    "slug": "hollow-body-hold",
    "sourceSlug": "hollow-body-hold",
    "sourceRecordIds": [
      "19189e1a-aef2-4924-9e8c-ee84c84ed434"
    ],
    "name": "Hollow Body Hold",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/hollow-body-hold",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/hollow-body-hold"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/8aaa0cc6-bd9d-4985-a811-e771bbf796c6.mp4",
    "mediaPath": "/exercises/hollow-body-hold.mp4"
  },
  {
    "slug": "hopping-high-knee-tap",
    "sourceSlug": "hopping-high-knee-tap",
    "sourceRecordIds": [
      "57512f6d-595f-47a5-ba01-9a8e8dfca5a6"
    ],
    "name": "Hopping High Knee Tap",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/hopping-high-knee-tap",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/hopping-high-knee-tap"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/998c09d5-6379-47a3-b4b3-c405673a84ee.mp4",
    "mediaPath": "/exercises/hopping-high-knee-tap.mp4"
  },
  {
    "slug": "incline-barbell-bench-press",
    "sourceSlug": "incline-barbell-bench-press",
    "sourceRecordIds": [
      "10544e2e-3765-1ba9-b753-c9ccd60b06d4"
    ],
    "name": "Incline Barbell Bench Press",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/incline-barbell-bench-press",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/incline-barbell-bench-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/d8c4f097-b27a-4178-ab88-ea69ae93ab97.mp4",
    "mediaPath": "/exercises/incline-barbell-bench-press.mp4"
  },
  {
    "slug": "incline-barbell-triceps-extension",
    "sourceSlug": "incline-barbell-triceps-extension",
    "sourceRecordIds": [
      "ce0a9a1a-5650-4f81-949f-78494cec69f7"
    ],
    "name": "Incline Barbell Triceps Extension",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/incline-barbell-triceps-extension",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/incline-barbell-triceps-extension"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/df4ff23c-f84c-4a2b-826b-67858b06beef.mp4",
    "mediaPath": "/exercises/incline-barbell-triceps-extension.mp4"
  },
  {
    "slug": "incline-bench-cable-fly",
    "sourceSlug": "incline-bench-cable-fly",
    "sourceRecordIds": [
      "fefbedf9-85f3-e418-eeae-4654e6cfbbfd"
    ],
    "name": "Incline Bench Cable Fly",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/incline-bench-cable-fly",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/incline-bench-cable-fly"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/88828613-9780-4e76-8fa3-208a5be4e452.mp4",
    "mediaPath": "/exercises/incline-bench-cable-fly.mp4"
  },
  {
    "slug": "incline-bench-dumbbell-wide-row",
    "sourceSlug": "incline-bench-dumbbell-wide-row",
    "sourceRecordIds": [
      "49297ec3-9ee7-444c-b83f-74be529eda62"
    ],
    "name": "Incline Bench Dumbbell Wide Row",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/incline-bench-dumbbell-wide-row",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/incline-bench-dumbbell-wide-row"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/3ff5debe-55a6-4138-a8ab-5116408c257a.mp4",
    "mediaPath": "/exercises/incline-bench-dumbbell-wide-row.mp4"
  },
  {
    "slug": "incline-bench-leg-raises",
    "sourceSlug": "incline-bench-leg-raises",
    "sourceRecordIds": [
      "2b86d658-a0cb-43ce-b782-77e927d3e72c"
    ],
    "name": "Incline Bench Leg Raises",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/incline-bench-leg-raises",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/incline-bench-leg-raises"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/f003a9a4-fcb0-4f8c-9f62-de7680556166.mp4",
    "mediaPath": "/exercises/incline-bench-leg-raises.mp4"
  },
  {
    "slug": "incline-cable-curl",
    "sourceSlug": "incline-cable-curl",
    "sourceRecordIds": [
      "9f9696a4-6a32-43b7-964e-0c8176bc971a"
    ],
    "name": "Incline Cable Curl",
    "categories": [
      "Biceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/biceps/incline-cable-curl",
    "sourcePages": {
      "Biceps": "https://smartworkout.app/en/exercise-library/biceps/incline-cable-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/613727d2-38d1-42a4-aa76-4058def099fb.mp4",
    "mediaPath": "/exercises/incline-cable-curl.mp4"
  },
  {
    "slug": "incline-chest-supported-barbell-row",
    "sourceSlug": "incline-chest-supported-barbell-row",
    "sourceRecordIds": [
      "ae74e375-7d6c-41d6-9e1c-3441ab97bca2"
    ],
    "name": "Incline Chest Supported Barbell Row",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/incline-chest-supported-barbell-row",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/incline-chest-supported-barbell-row"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/f1af846a-5df1-4bd7-be89-e1eb415031d0.mp4",
    "mediaPath": "/exercises/incline-chest-supported-barbell-row.mp4"
  },
  {
    "slug": "incline-close-grip-push-up",
    "sourceSlug": "incline-close-grip-push-up",
    "sourceRecordIds": [
      "2e084eac-88a9-4dfa-bb48-594966e87f7b"
    ],
    "name": "Incline Close Grip Push-Up",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/incline-close-grip-push-up",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/incline-close-grip-push-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/c671d047-e0bd-4bc7-b601-460df461855b.mp4",
    "mediaPath": "/exercises/incline-close-grip-push-up.mp4"
  },
  {
    "slug": "incline-dumbbell-bench-press",
    "sourceSlug": "incline-dumbbell-bench-press",
    "sourceRecordIds": [
      "61505ee2-7f37-fb06-2519-db3b9f20087d"
    ],
    "name": "Incline Dumbbell Bench Press",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/incline-dumbbell-bench-press",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/incline-dumbbell-bench-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/5081d5c0-5262-45ba-a047-d3d652978d8a.mp4",
    "mediaPath": "/exercises/incline-dumbbell-bench-press.mp4"
  },
  {
    "slug": "incline-dumbbell-chest-fly",
    "sourceSlug": "incline-dumbbell-chest-fly",
    "sourceRecordIds": [
      "80fd9286-0d64-becd-c2c2-83742b0c3974"
    ],
    "name": "Incline Dumbbell Chest Fly",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/incline-dumbbell-chest-fly",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/incline-dumbbell-chest-fly"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/aec5c2b6-b5cb-44c9-bcaf-3e201a824590.mp4",
    "mediaPath": "/exercises/incline-dumbbell-chest-fly.mp4"
  },
  {
    "slug": "incline-dumbbell-triceps-extension",
    "sourceSlug": "incline-dumbbell-triceps-extension",
    "sourceRecordIds": [
      "dbfc5012-170f-4db0-8b14-bc44f41c4da8"
    ],
    "name": "Incline Dumbbell Triceps Extension",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/incline-dumbbell-triceps-extension",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/incline-dumbbell-triceps-extension"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/1c74a975-b210-4514-9421-48aceeb39f58.mp4",
    "mediaPath": "/exercises/incline-dumbbell-triceps-extension.mp4"
  },
  {
    "slug": "incline-hammer-chest-press",
    "sourceSlug": "incline-hammer-chest-press",
    "sourceRecordIds": [
      "9dc6f0a7-0d13-4cdd-b511-fded663e0af1"
    ],
    "name": "Incline Hammer Chest Press",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/incline-hammer-chest-press",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/incline-hammer-chest-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/103ff85e-ab8f-404e-8adb-d04196937f6f.mp4",
    "mediaPath": "/exercises/incline-hammer-chest-press.mp4"
  },
  {
    "slug": "incline-neutral-grip-dumbbell-press",
    "sourceSlug": "incline-neutral-grip-dumbbell-press",
    "sourceRecordIds": [
      "6f75f48b-6a78-4882-b193-20e1e63f1df8"
    ],
    "name": "Incline Neutral Grip Dumbbell Press",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/incline-neutral-grip-dumbbell-press",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/incline-neutral-grip-dumbbell-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/fe0fca73-f9f4-4627-9aae-c236916d2320.mp4",
    "mediaPath": "/exercises/incline-neutral-grip-dumbbell-press.mp4"
  },
  {
    "slug": "incline-powell-raise",
    "sourceSlug": "incline-powell-raise",
    "sourceRecordIds": [
      "84cbac23-7756-4eb3-9363-cbb2f6347d8a"
    ],
    "name": "Incline Powell Raise",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/incline-powell-raise",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/incline-powell-raise"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/7adc5966-ccdc-4fe7-ac44-9adf61232e13.mp4",
    "mediaPath": "/exercises/incline-powell-raise.mp4"
  },
  {
    "slug": "incline-push-up",
    "sourceSlug": "incline-push-up",
    "sourceRecordIds": [
      "f43ad48c-6c21-4ab2-aa49-ee500c62355c"
    ],
    "name": "Incline Push-Up",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/incline-push-up",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/incline-push-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/edc943ba-f227-4d12-9c96-3e8222618728.mp4",
    "mediaPath": "/exercises/incline-push-up.mp4"
  },
  {
    "slug": "incline-twisting-sit-up",
    "sourceSlug": "incline-twisting-sit-up",
    "sourceRecordIds": [
      "76623fa9-5a18-4819-8412-a286f0846ae2"
    ],
    "name": "Incline Twisting Sit Up",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/incline-twisting-sit-up",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/incline-twisting-sit-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/85920430-bc75-4c95-919d-c031af9c2410.mp4",
    "mediaPath": "/exercises/incline-twisting-sit-up.mp4"
  },
  {
    "slug": "inverted-row-australian",
    "sourceSlug": "inverted-row-(australian)",
    "sourceRecordIds": [
      "bb084797-5b76-4f77-98cf-0e4019b3536f"
    ],
    "name": "Inverted Row (Australian)",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/inverted-row-(australian)",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/inverted-row-(australian)"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/664c116a-080b-41b1-b386-f26405cea34f.mp4",
    "mediaPath": "/exercises/inverted-row-australian.mp4"
  },
  {
    "slug": "inverted-shrug",
    "sourceSlug": "inverted-shrug",
    "sourceRecordIds": [
      "e29321c6-7817-48a4-b1af-1cec66a5adb3"
    ],
    "name": "Inverted Shrug",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/inverted-shrug",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/inverted-shrug"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/e32f659d-4105-4e85-a04c-bf376b6da5be.mp4",
    "mediaPath": "/exercises/inverted-shrug.mp4"
  },
  {
    "slug": "jack-push-up",
    "sourceSlug": "jack-push-up",
    "sourceRecordIds": [
      "23d0b626-14b7-4114-82d6-44e25eb5c551"
    ],
    "name": "Jack Push-Up",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/jack-push-up",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/jack-push-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/e95195f5-f331-4871-b0c2-eed87274e043.mp4",
    "mediaPath": "/exercises/jack-push-up.mp4"
  },
  {
    "slug": "janda-sit-up",
    "sourceSlug": "janda-sit-up",
    "sourceRecordIds": [
      "c7b3f81d-816a-4a45-a2e4-c819f4da0ea8"
    ],
    "name": "Janda Sit Up",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/janda-sit-up",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/janda-sit-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/ecd15638-1053-4da9-ad07-9143ef378755.mp4",
    "mediaPath": "/exercises/janda-sit-up.mp4"
  },
  {
    "slug": "jefferson-curl",
    "sourceSlug": "jefferson-curl",
    "sourceRecordIds": [
      "e0a530e6-e194-45dd-9d0e-e5334a6e5d32"
    ],
    "name": "Jefferson Curl",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/jefferson-curl",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/jefferson-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/1e41b9a4-43bf-4995-94c5-d12dbe32883a.mp4",
    "mediaPath": "/exercises/jefferson-curl.mp4"
  },
  {
    "slug": "jm-press",
    "sourceSlug": "jm-press",
    "sourceRecordIds": [
      "17d168cd-9745-60f3-f30f-7ec574eaf8a3"
    ],
    "name": "JM Press",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/jm-press",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/jm-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/18a33788-a323-47e8-8c34-53c12241682f.mp4",
    "mediaPath": "/exercises/jm-press.mp4"
  },
  {
    "slug": "jump-rope",
    "sourceSlug": "jump-rope",
    "sourceRecordIds": [
      "4479b851-d92c-4da6-b9b2-885f86680832"
    ],
    "name": "Jump Rope",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/jump-rope",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/jump-rope"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/41a04bcf-e0ef-40c5-bd4e-4499a4c281ad.mp4",
    "mediaPath": "/exercises/jump-rope.mp4"
  },
  {
    "slug": "jump-squat",
    "sourceSlug": "jump-squat",
    "sourceRecordIds": [
      "d8735b83-7498-47a4-a938-98220e625f71"
    ],
    "name": "Jump Squat",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/jump-squat",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/jump-squat"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/7f64e722-a96b-4ae0-b3ed-8ae13841257b.mp4",
    "mediaPath": "/exercises/jump-squat.mp4"
  },
  {
    "slug": "jumping-jacks",
    "sourceSlug": "jumping-jacks",
    "sourceRecordIds": [
      "bffdb15f-d630-44a1-9a20-d4dc864d6972"
    ],
    "name": "Jumping Jacks",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/jumping-jacks",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/jumping-jacks"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/86d085ff-785c-472b-94e7-94a4d28758cb.mp4",
    "mediaPath": "/exercises/jumping-jacks.mp4"
  },
  {
    "slug": "kas-glute-bridge",
    "sourceSlug": "kas-glute-bridge",
    "sourceRecordIds": [
      "9a5be8c6-af17-4585-8617-7f54f6088f01"
    ],
    "name": "KAS Glute Bridge",
    "categories": [
      "Gluteal"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/gluteus/kas-glute-bridge",
    "sourcePages": {
      "Gluteal": "https://smartworkout.app/en/exercise-library/gluteus/kas-glute-bridge"
    },
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
    "sourceSlug": "katana-triceps-extension",
    "sourceRecordIds": [
      "ba9e150f-19c0-46d6-a1f1-37b884fb5827"
    ],
    "name": "Katana Triceps Extension",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/katana-triceps-extension",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/katana-triceps-extension"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/25d5f2cc-d1dc-4814-add6-c04d422394b4.mp4",
    "mediaPath": "/exercises/katana-triceps-extension.mp4"
  },
  {
    "slug": "kettelbell-clean",
    "sourceSlug": "kettelbell-clean",
    "sourceRecordIds": [
      "91c1d821-bfc9-480e-8aac-7a290587388d"
    ],
    "name": "Kettelbell Clean",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/kettelbell-clean",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/kettelbell-clean"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/f00d4779-f6f0-439c-b4c3-ddbbc78b5777.mp4",
    "mediaPath": "/exercises/kettelbell-clean.mp4"
  },
  {
    "slug": "kettlebel-renegade-row",
    "sourceSlug": "kettlebel-renegade-row",
    "sourceRecordIds": [
      "b17fec92-bc5f-480d-912b-988a936065b3"
    ],
    "name": "Kettlebel Renegade Row",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/kettlebel-renegade-row",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/kettlebel-renegade-row"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/36c1cc08-21ac-4c7b-8408-fb19693bcd11.mp4",
    "mediaPath": "/exercises/kettlebel-renegade-row.mp4"
  },
  {
    "slug": "kettlebell-around-the-head-rotation",
    "sourceSlug": "kettlebell-around-the-head-rotation",
    "sourceRecordIds": [
      "3c8b1675-4705-4572-9855-3ee077946aa3"
    ],
    "name": "Kettlebell Around the Head Rotation",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/kettlebell-around-the-head-rotation",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/kettlebell-around-the-head-rotation"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/c007c225-93f9-4c3a-ae2f-357dda1275a2.mp4",
    "mediaPath": "/exercises/kettlebell-around-the-head-rotation.mp4"
  },
  {
    "slug": "kettlebell-biceps-curl",
    "sourceSlug": "kettlebell-biceps-curl",
    "sourceRecordIds": [
      "bbf624ab-4d11-497c-98ae-e68484a666bb"
    ],
    "name": "Kettlebell Biceps Curl",
    "categories": [
      "Biceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/biceps/kettlebell-biceps-curl",
    "sourcePages": {
      "Biceps": "https://smartworkout.app/en/exercise-library/biceps/kettlebell-biceps-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/03b2ef35-080f-4305-a0e3-c1bb14caebc5.mp4",
    "mediaPath": "/exercises/kettlebell-biceps-curl.mp4"
  },
  {
    "slug": "kettlebell-clean-and-jerk",
    "sourceSlug": "kettlebell-clean-and-jerk",
    "sourceRecordIds": [
      "74f431ee-7721-4f2e-808b-2c8bd51dc916"
    ],
    "name": "Kettlebell Clean and Jerk",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/kettlebell-clean-and-jerk",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/kettlebell-clean-and-jerk"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/e9b0e158-d142-4499-9c68-89cd63e8c621.mp4",
    "mediaPath": "/exercises/kettlebell-clean-and-jerk.mp4"
  },
  {
    "slug": "kettlebell-deadlift",
    "sourceSlug": "kettlebell-deadlift",
    "sourceRecordIds": [
      "9a7407e7-2e8f-41dc-b5f9-5690124b0ed2"
    ],
    "name": "Kettlebell Deadlift",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/kettlebell-deadlift",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/kettlebell-deadlift"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/67f07dcc-7ac6-4b77-bfc1-270e1befdbf2.mp4",
    "mediaPath": "/exercises/kettlebell-deadlift.mp4"
  },
  {
    "slug": "kettlebell-goblet-squat",
    "sourceSlug": "kettlebell-goblet-squat",
    "sourceRecordIds": [
      "c066f0d4-d8a3-4b0b-8abd-2112c600543b"
    ],
    "name": "Kettlebell Goblet Squat",
    "categories": [
      "Gluteal"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/gluteus/kettlebell-goblet-squat",
    "sourcePages": {
      "Gluteal": "https://smartworkout.app/en/exercise-library/gluteus/kettlebell-goblet-squat"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/9c1f8ba5-796d-4e11-882d-e769eae4a705.mp4",
    "mediaPath": "/exercises/kettlebell-goblet-squat.mp4"
  },
  {
    "slug": "kettlebell-one-arm-floor-press",
    "sourceSlug": "kettlebell-one-arm-floor-press",
    "sourceRecordIds": [
      "a1b16209-fba0-43f3-9ac1-d160bcca419a"
    ],
    "name": "Kettlebell One Arm Floor Press",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/kettlebell-one-arm-floor-press",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/kettlebell-one-arm-floor-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/2b488d23-3813-4729-b1bd-cab6f1053f8a.mp4",
    "mediaPath": "/exercises/kettlebell-one-arm-floor-press.mp4"
  },
  {
    "slug": "kettlebell-rear-lunge",
    "sourceSlug": "kettlebell-rear-lunge",
    "sourceRecordIds": [
      "7f462663-6e61-4769-b6e7-348881f9965d"
    ],
    "name": "Kettlebell Rear Lunge",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/kettlebell-rear-lunge",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/kettlebell-rear-lunge"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/170ce9ca-67d8-4e99-b75a-91f92c70928a.mp4",
    "mediaPath": "/exercises/kettlebell-rear-lunge.mp4"
  },
  {
    "slug": "kettlebell-swing",
    "sourceSlug": "kettlebell-swing",
    "sourceRecordIds": [
      "a457f1e5-43be-459c-8ff4-506218d01411"
    ],
    "name": "Kettlebell Swing",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/kettlebell-swing",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/kettlebell-swing"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/91af3147-3eda-47d5-9fcf-cb58713eb7a4.mp4",
    "mediaPath": "/exercises/kettlebell-swing.mp4"
  },
  {
    "slug": "kettlebell-windmill",
    "sourceSlug": "kettlebell-windmill",
    "sourceRecordIds": [
      "effc2800-2625-404d-8a56-3c42c67fa439"
    ],
    "name": "Kettlebell Windmill",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/kettlebell-windmill",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/kettlebell-windmill"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/7bb5a812-f0c3-42bc-99c3-595ca64efdf3.mp4",
    "mediaPath": "/exercises/kettlebell-windmill.mp4"
  },
  {
    "slug": "kickboxing",
    "sourceSlug": "kickboxing",
    "sourceRecordIds": [
      "75f8962c-e6d5-43d3-be0f-aa9b7ba645d6"
    ],
    "name": "Kickboxing",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/kickboxing",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/kickboxing"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/17ddef3e-7230-4232-aa61-70969f7575b5.mp4",
    "mediaPath": "/exercises/kickboxing.mp4"
  },
  {
    "slug": "knee-close-grip-push-up",
    "sourceSlug": "knee-close-grip-push-up",
    "sourceRecordIds": [
      "269cdd48-8c88-44c8-8c76-b6f2123131d0"
    ],
    "name": "Knee Close Grip Push-Up",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/knee-close-grip-push-up",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/knee-close-grip-push-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/91525fb7-a6b4-4b9e-844c-dfa088d3a185.mp4",
    "mediaPath": "/exercises/knee-close-grip-push-up.mp4"
  },
  {
    "slug": "knee-diamond-push-up",
    "sourceSlug": "knee-diamond-push-up",
    "sourceRecordIds": [
      "e367af44-824f-4bb4-aca4-ec43ec8ce2dd"
    ],
    "name": "Knee Diamond Push-Up",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/knee-diamond-push-up",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/knee-diamond-push-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/c59c0ddb-a29e-4cdc-b760-11d01605085a.mp4",
    "mediaPath": "/exercises/knee-diamond-push-up.mp4"
  },
  {
    "slug": "knee-push-up",
    "sourceSlug": "knee-push-up",
    "sourceRecordIds": [
      "e32b37fd-0bbd-4f6d-aa80-a3351bc01ffe"
    ],
    "name": "Knee Push-Up",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/knee-push-up",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/knee-push-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/fff998bd-23b3-4735-ab7d-00a59df0e026.mp4",
    "mediaPath": "/exercises/knee-push-up.mp4"
  },
  {
    "slug": "knee-raise-ab-coaster",
    "sourceSlug": "knee-raise-ab-coaster",
    "sourceRecordIds": [
      "8eeb3700-043a-401e-969e-f9d735aba6ed"
    ],
    "name": "Knee Raise Ab Coaster",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/knee-raise-ab-coaster",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/knee-raise-ab-coaster"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/1e4902a0-05fc-4ab0-8fcd-5e745eb096af.mp4",
    "mediaPath": "/exercises/knee-raise-ab-coaster.mp4"
  },
  {
    "slug": "knee-to-chest-stretch",
    "sourceSlug": "knee-to-chest-stretch",
    "sourceRecordIds": [
      "24c4eb14-d625-4ade-bc50-06e096df5e34"
    ],
    "name": "Knee To Chest Stretch",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/knee-to-chest-stretch",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/knee-to-chest-stretch"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/57e3218c-4482-438f-8177-2812406c9f8d.mp4",
    "mediaPath": "/exercises/knee-to-chest-stretch.mp4"
  },
  {
    "slug": "knee-tuck-crunch",
    "sourceSlug": "knee-tuck-crunch",
    "sourceRecordIds": [
      "02e00a0a-3cfc-445d-98b5-04a40b4ed741"
    ],
    "name": "Knee Tuck Crunch",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/knee-tuck-crunch",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/knee-tuck-crunch"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/04b6b7aa-fb63-4aee-9d87-e964666721b0.mp4",
    "mediaPath": "/exercises/knee-tuck-crunch.mp4"
  },
  {
    "slug": "kneeling-back-rotation-stretch",
    "sourceSlug": "kneeling-back-rotation-stretch",
    "sourceRecordIds": [
      "78a5c836-05ea-496a-80f5-382bf6405b91"
    ],
    "name": "Kneeling Back Rotation Stretch",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/kneeling-back-rotation-stretch",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/kneeling-back-rotation-stretch"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/2ca62145-0acb-4a6f-8de5-657f9a538d72.mp4",
    "mediaPath": "/exercises/kneeling-back-rotation-stretch.mp4"
  },
  {
    "slug": "kneeling-band-abs-crunches",
    "sourceSlug": "kneeling-band-abs-crunches",
    "sourceRecordIds": [
      "56e8e606-ddaa-48e9-98b5-1216ddf751ce"
    ],
    "name": "Kneeling Band Abs Crunches",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/kneeling-band-abs-crunches",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/kneeling-band-abs-crunches"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/9443f9d6-ef9a-4a30-8869-5ca5e3f21c66.mp4",
    "mediaPath": "/exercises/kneeling-band-abs-crunches.mp4"
  },
  {
    "slug": "kneeling-cable-abs-crunches",
    "sourceSlug": "kneeling-cable-abs-crunches",
    "sourceRecordIds": [
      "ef7a226a-8ebe-4ed3-b712-33a548503195"
    ],
    "name": "Kneeling Cable Abs Crunches",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/kneeling-cable-abs-crunches",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/kneeling-cable-abs-crunches"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/4ca6d0de-4211-4c29-bfc0-41436e227111.mp4",
    "mediaPath": "/exercises/kneeling-cable-abs-crunches.mp4"
  },
  {
    "slug": "kneeling-cable-lat-pulldown",
    "sourceSlug": "kneeling-cable-lat-pulldown",
    "sourceRecordIds": [
      "d1109e24-4610-4f9f-93b7-a37691e123bf"
    ],
    "name": "Kneeling Cable Lat Pulldown",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/kneeling-cable-lat-pulldown",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/kneeling-cable-lat-pulldown"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/5523d7d6-ed3e-463c-a7ea-2d7b4795ea19.mp4",
    "mediaPath": "/exercises/kneeling-cable-lat-pulldown.mp4"
  },
  {
    "slug": "kneeling-hamstring-stretch",
    "sourceSlug": "kneeling-hamstring-stretch",
    "sourceRecordIds": [
      "dc912b16-ab4f-4e66-abdf-a9a07234e2a9"
    ],
    "name": "Kneeling Hamstring Stretch",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/kneeling-hamstring-stretch",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/kneeling-hamstring-stretch"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/c5aa8734-8668-4089-b902-64a94a538622.mp4",
    "mediaPath": "/exercises/kneeling-hamstring-stretch.mp4"
  },
  {
    "slug": "kneeling-resistance-band-glute-kickback",
    "sourceSlug": "kneeling-resistance-band-glute-kickback",
    "sourceRecordIds": [
      "0c179dee-0e67-473f-84ce-02a48a1e0513"
    ],
    "name": "Kneeling Resistance Band Glute Kickback",
    "categories": [
      "Gluteal"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/gluteus/kneeling-resistance-band-glute-kickback",
    "sourcePages": {
      "Gluteal": "https://smartworkout.app/en/exercise-library/gluteus/kneeling-resistance-band-glute-kickback"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/e2471444-388e-4896-aa87-42efb47ad828.mp4",
    "mediaPath": "/exercises/kneeling-resistance-band-glute-kickback.mp4"
  },
  {
    "slug": "kneeling-ring-push-up",
    "sourceSlug": "kneeling-ring-push-up",
    "sourceRecordIds": [
      "70a233fc-676d-41bf-9d12-17acba3e004e"
    ],
    "name": "Kneeling Ring Push-Up",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/kneeling-ring-push-up",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/kneeling-ring-push-up"
    },
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
    "sourceSlug": "kneeling-wide-push-up",
    "sourceRecordIds": [
      "c1218a68-7bd6-4e47-9b9e-159dfab75ad5"
    ],
    "name": "Kneeling Wide Push-Up",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/kneeling-wide-push-up",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/kneeling-wide-push-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/4d768221-a68a-489d-8422-a8db511d94bb.mp4",
    "mediaPath": "/exercises/kneeling-wide-push-up.mp4"
  },
  {
    "slug": "knuckle-push-up",
    "sourceSlug": "knuckle-push-up",
    "sourceRecordIds": [
      "20995c61-3541-47c8-be8d-e1db17c6bffc"
    ],
    "name": "Knuckle Push-Up",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/knuckle-push-up",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/knuckle-push-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/cee320e7-68cd-4b50-86f8-ab7dea36a6b6.mp4",
    "mediaPath": "/exercises/knuckle-push-up.mp4"
  },
  {
    "slug": "korean-dip",
    "sourceSlug": "korean-dip",
    "sourceRecordIds": [
      "15c51d26-076f-4ceb-8702-c15fdf3cb937"
    ],
    "name": "Korean Dip",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/korean-dip",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/korean-dip"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/8882f5e4-8e0a-4d6a-8555-9614262afcac.mp4",
    "mediaPath": "/exercises/korean-dip.mp4"
  },
  {
    "slug": "l-pull-up",
    "sourceSlug": "l-pull-up",
    "sourceRecordIds": [
      "6683712d-bac9-4c1d-907d-d2df12e60ee1"
    ],
    "name": "L Pull-Up",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/l-pull-up",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/l-pull-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/5091ab03-7171-41b4-93cc-eca01e7d493f.mp4",
    "mediaPath": "/exercises/l-pull-up.mp4"
  },
  {
    "slug": "l-sit",
    "sourceSlug": "l-sit",
    "sourceRecordIds": [
      "0d4721f5-3941-4356-9666-4f210bb6b314"
    ],
    "name": "L-Sit",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/l-sit",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/l-sit"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/29282a78-819d-409c-9fa5-b2734e2f8138.mp4",
    "mediaPath": "/exercises/l-sit.mp4"
  },
  {
    "slug": "landmine-lateral-raise",
    "sourceSlug": "landmine-lateral-raise",
    "sourceRecordIds": [
      "9a222d45-d75c-4f48-9542-e97f8fd15833"
    ],
    "name": "Landmine Lateral Raise",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/landmine-lateral-raise",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/landmine-lateral-raise"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/570e7a91-759e-4b0f-8d2a-072b2e3350c3.mp4",
    "mediaPath": "/exercises/landmine-lateral-raise.mp4"
  },
  {
    "slug": "landmine-press",
    "sourceSlug": "landmine-press",
    "sourceRecordIds": [
      "d447c943-d6c5-488d-add7-a317b6855141"
    ],
    "name": "Landmine Press",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/landmine-press",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/landmine-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/9a878d90-26a2-4663-acc4-cd7f0a99b7e9.mp4",
    "mediaPath": "/exercises/landmine-press.mp4"
  },
  {
    "slug": "landmine-squat",
    "sourceSlug": "landmine-squat",
    "sourceRecordIds": [
      "9f0b1b6e-42e5-41a9-a210-2e324d4477dc"
    ],
    "name": "Landmine Squat",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/landmine-squat",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/landmine-squat"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/b236976c-f082-4b02-b47a-670d925d8d81.mp4",
    "mediaPath": "/exercises/landmine-squat.mp4"
  },
  {
    "slug": "landmine-twist",
    "sourceSlug": "landmine-twist",
    "sourceRecordIds": [
      "d0f8718c-b950-4960-80a5-cc057c225b84"
    ],
    "name": "Landmine Twist",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/landmine-twist",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/landmine-twist"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/c85f1bc8-435b-464b-8a66-bc6cb6d3014c.mp4",
    "mediaPath": "/exercises/landmine-twist.mp4"
  },
  {
    "slug": "lat-pulldown-machine",
    "sourceSlug": "lat-pulldown-machine",
    "sourceRecordIds": [
      "a0ef5e32-d928-45e1-b507-71bdaa06bf4c"
    ],
    "name": "Lat Pulldown Machine",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/lat-pulldown-machine",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/lat-pulldown-machine"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/f72099c0-fc80-45d0-b174-8fdbc03f7d57.mp4",
    "mediaPath": "/exercises/lat-pulldown-machine.mp4"
  },
  {
    "slug": "lateral-monster-walk",
    "sourceSlug": "lateral-monster-walk",
    "sourceRecordIds": [
      "c6028e5a-3df6-4a4d-b11b-13812ad4436f"
    ],
    "name": "Lateral Monster Walk",
    "categories": [
      "Gluteal"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/gluteus/lateral-monster-walk",
    "sourcePages": {
      "Gluteal": "https://smartworkout.app/en/exercise-library/gluteus/lateral-monster-walk"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/57c46878-e761-48a4-a216-b3d345d56a24.mp4",
    "mediaPath": "/exercises/lateral-monster-walk.mp4"
  },
  {
    "slug": "lateral-to-front-raise",
    "sourceSlug": "lateral-to-front-raise",
    "sourceRecordIds": [
      "332334b6-3d1e-4eec-be3b-3fcf6b297ca7"
    ],
    "name": "Lateral to Front Raise",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/lateral-to-front-raise",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/lateral-to-front-raise"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/327a5be8-fa67-4555-8291-fbfad2b9fd53.mp4",
    "mediaPath": "/exercises/lateral-to-front-raise.mp4"
  },
  {
    "slug": "lean-planche",
    "sourceSlug": "lean-planche",
    "sourceRecordIds": [
      "9de5f78f-fb0b-4bba-b42b-852a00388e9c"
    ],
    "name": "Lean Planche",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/lean-planche",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/lean-planche"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/c67d256e-815d-4bb4-89df-a6eff0632d35.mp4",
    "mediaPath": "/exercises/lean-planche.mp4"
  },
  {
    "slug": "leg-in-and-out",
    "sourceSlug": "leg-in-and-out",
    "sourceRecordIds": [
      "0fb71315-b620-4bef-8192-3ccae70dfa5b"
    ],
    "name": "Leg In and Out",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/leg-in-and-out",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/leg-in-and-out"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/baa54657-a374-4b05-ae76-6961022ef3d8.mp4",
    "mediaPath": "/exercises/leg-in-and-out.mp4"
  },
  {
    "slug": "leg-press",
    "sourceSlug": "leg-press",
    "sourceRecordIds": [
      "e17ca855-8185-fbc6-bb54-ab9c4334f0f7"
    ],
    "name": "Leg Press",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/leg-press",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/leg-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/8632c417-b02c-4dc4-8adb-eb1a02646ab9.mp4",
    "mediaPath": "/exercises/leg-press.mp4"
  },
  {
    "slug": "leg-press-wide-stance",
    "sourceSlug": "leg-press-wide-stance",
    "sourceRecordIds": [
      "38577caa-6c93-4a6f-bb44-57a8b7f92de9"
    ],
    "name": "Leg Press Wide Stance",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/leg-press-wide-stance",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/leg-press-wide-stance"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/b9dc9c07-54d1-41a6-a25a-5cff3e9be2d6.mp4",
    "mediaPath": "/exercises/leg-press-wide-stance.mp4"
  },
  {
    "slug": "leg-swings",
    "sourceSlug": "leg-swings",
    "sourceRecordIds": [
      "2f4d0681-8859-4795-9266-4028c6e0171f"
    ],
    "name": "Leg Swings",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/leg-swings",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/leg-swings"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/6a8ed0fc-fc81-4b8e-b311-8fa64a17786b.mp4",
    "mediaPath": "/exercises/leg-swings.mp4"
  },
  {
    "slug": "lever-back-extension",
    "sourceSlug": "lever-back-extension",
    "sourceRecordIds": [
      "c6fffa71-d76e-44b7-bc35-1aa2a90bdc69"
    ],
    "name": "Lever Back Extension",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/lever-back-extension",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/lever-back-extension"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/8ff73f6a-aa27-44c3-82a1-e0dc83dc1634.mp4",
    "mediaPath": "/exercises/lever-back-extension.mp4"
  },
  {
    "slug": "lever-high-row",
    "sourceSlug": "lever-high-row",
    "sourceRecordIds": [
      "b9b09cef-24a9-103d-0981-ba6076dd0bb6"
    ],
    "name": "Lever High Row",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/lever-high-row",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/lever-high-row"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/7cfa395b-4476-4b5f-9e02-69edc3aecaea.mp4",
    "mediaPath": "/exercises/lever-high-row.mp4"
  },
  {
    "slug": "lever-horizontal-leg-press",
    "sourceSlug": "lever-horizontal-leg-press",
    "sourceRecordIds": [
      "ccc8321a-3db5-40a3-b687-0cb47f4ee2c9"
    ],
    "name": "Lever Horizontal Leg Press",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/lever-horizontal-leg-press",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/lever-horizontal-leg-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/1e80d7cd-efae-4b40-8254-1e57e48e9a53.mp4",
    "mediaPath": "/exercises/lever-horizontal-leg-press.mp4"
  },
  {
    "slug": "lever-low-row",
    "sourceSlug": "lever-low-row",
    "sourceRecordIds": [
      "70b49da7-8fba-4c5e-bdf2-6035e72a2411"
    ],
    "name": "Lever Low Row",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/lever-low-row",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/lever-low-row"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/6c516964-9cfe-4217-a70e-f9267088708f.mp4",
    "mediaPath": "/exercises/lever-low-row.mp4"
  },
  {
    "slug": "lever-seated-hammer-grip-shoulder-press",
    "sourceSlug": "lever-seated-hammer-grip-shoulder-press",
    "sourceRecordIds": [
      "29e65c0c-5a3f-48e8-b423-cdbe9fef77fa"
    ],
    "name": "Lever Seated Hammer Grip Shoulder Press",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/lever-seated-hammer-grip-shoulder-press",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/lever-seated-hammer-grip-shoulder-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/8bc8c1fc-8a85-4313-a7dd-0297e4c328a4.mp4",
    "mediaPath": "/exercises/lever-seated-hammer-grip-shoulder-press.mp4"
  },
  {
    "slug": "lizard-pose",
    "sourceSlug": "lizard-pose",
    "sourceRecordIds": [
      "ae567a85-61b5-4329-a26f-3b1894e59f6d"
    ],
    "name": "Lizard Pose",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/lizard-pose",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/lizard-pose"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/53d0ec3b-e618-4e94-9ccb-aaba16734295.mp4",
    "mediaPath": "/exercises/lizard-pose.mp4"
  },
  {
    "slug": "low-cable-horizontal-pallof-press",
    "sourceSlug": "low-cable-horizontal-pallof-press",
    "sourceRecordIds": [
      "5170255c-cc48-41b6-9b26-a72669deab44"
    ],
    "name": "Low Cable Horizontal Pallof Press",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/low-cable-horizontal-pallof-press",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/low-cable-horizontal-pallof-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/e84b6a2d-35b3-4fc4-aaf8-e4a11482f829.mp4",
    "mediaPath": "/exercises/low-cable-horizontal-pallof-press.mp4"
  },
  {
    "slug": "low-cable-incline-bench-press",
    "sourceSlug": "low-cable-incline-bench-press",
    "sourceRecordIds": [
      "18d649a8-769d-4722-837f-556903fe81ba"
    ],
    "name": "Low Cable Incline Bench Press",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/low-cable-incline-bench-press",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/low-cable-incline-bench-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/2e44a1be-2421-4f9a-a706-ad09c60dc824.mp4",
    "mediaPath": "/exercises/low-cable-incline-bench-press.mp4"
  },
  {
    "slug": "low-high-cable-chest-fly",
    "sourceSlug": "low-high-cable-chest-fly",
    "sourceRecordIds": [
      "e5ada84d-4df0-4f12-ae4c-ec5dcd51d8b8"
    ],
    "name": "Low High Cable Chest Fly",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/low-high-cable-chest-fly",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/low-high-cable-chest-fly"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/3a7504dc-28f2-49ca-85c2-fb808c2e1607.mp4",
    "mediaPath": "/exercises/low-high-cable-chest-fly.mp4"
  },
  {
    "slug": "low-incline-dumbbell-fly",
    "sourceSlug": "low-incline-dumbbell-fly",
    "sourceRecordIds": [
      "30fcbd6b-3369-4772-bcfa-05d9b7d52be5"
    ],
    "name": "Low Incline Dumbbell Fly",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/low-incline-dumbbell-fly",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/low-incline-dumbbell-fly"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/168d5fa2-455a-4bf2-9b1e-9a6dbe85a820.mp4",
    "mediaPath": "/exercises/low-incline-dumbbell-fly.mp4"
  },
  {
    "slug": "lowbar-squat",
    "sourceSlug": "lowbar-squat",
    "sourceRecordIds": [
      "21d66377-bf72-4789-a246-c2e721e7d55c"
    ],
    "name": "Lowbar Squat",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/lowbar-squat",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/lowbar-squat"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/dd7de2a6-6559-4713-b29f-ad483a3af668.mp4",
    "mediaPath": "/exercises/lowbar-squat.mp4"
  },
  {
    "slug": "lunge-stretch",
    "sourceSlug": "lunge-stretch",
    "sourceRecordIds": [
      "4a5f1411-75cd-4485-bbcb-d408f76f0a93"
    ],
    "name": "Lunge Stretch",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/lunge-stretch",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/lunge-stretch"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/18f89a97-4a1b-4549-b556-298af4d7da42.mp4",
    "mediaPath": "/exercises/lunge-stretch.mp4"
  },
  {
    "slug": "lunges",
    "sourceSlug": "lunges",
    "sourceRecordIds": [
      "ed99f5c6-76b9-4d8b-9b29-e7e0ae3a6eb8"
    ],
    "name": "Lunges",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/lunges",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/lunges"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/ff14232b-8cf5-4d5f-baa6-3a464e6efe58.mp4",
    "mediaPath": "/exercises/lunges.mp4"
  },
  {
    "slug": "lying-barbell-triceps-extension-skullcrusher",
    "sourceSlug": "lying-barbell-triceps-extension-(skullcrusher)",
    "sourceRecordIds": [
      "44cde330-b5c8-1792-add2-adadcd806b55"
    ],
    "name": "Lying Barbell Triceps Extension (Skullcrusher)",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/lying-barbell-triceps-extension-(skullcrusher)",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/lying-barbell-triceps-extension-(skullcrusher)"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/99998fe7-3d68-480b-b2e2-720fe74fc015.mp4",
    "mediaPath": "/exercises/lying-barbell-triceps-extension-skullcrusher.mp4"
  },
  {
    "slug": "lying-butterfly-pose",
    "sourceSlug": "lying-butterfly-pose",
    "sourceRecordIds": [
      "1fcb8c2c-1f5c-4623-91b4-5f2f946ade06"
    ],
    "name": "Lying Butterfly Pose",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/lying-butterfly-pose",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/lying-butterfly-pose"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/fcce0e2d-916f-43cb-a6e4-1181c65dc9fc.mp4",
    "mediaPath": "/exercises/lying-butterfly-pose.mp4"
  },
  {
    "slug": "lying-cable-face-pull",
    "sourceSlug": "lying-cable-face-pull",
    "sourceRecordIds": [
      "46527a53-629e-4e6c-b4f4-986143756493"
    ],
    "name": "Lying Cable Face Pull",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/lying-cable-face-pull",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/lying-cable-face-pull"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/1e4dadfd-a9dd-4771-a27b-669b3b5c4651.mp4",
    "mediaPath": "/exercises/lying-cable-face-pull.mp4"
  },
  {
    "slug": "lying-cable-fly",
    "sourceSlug": "lying-cable-fly",
    "sourceRecordIds": [
      "8611358c-7253-0ade-e174-1eb8dfa6ee86"
    ],
    "name": "Lying Cable Fly",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/lying-cable-fly",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/lying-cable-fly"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/9efa8ada-44a1-4cc6-a808-6c71704992ab.mp4",
    "mediaPath": "/exercises/lying-cable-fly.mp4"
  },
  {
    "slug": "lying-chest-press",
    "sourceSlug": "lying-chest-press",
    "sourceRecordIds": [
      "af8dd3b8-63db-419d-9d80-ffb64e403898"
    ],
    "name": "Lying Chest Press",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/lying-chest-press",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/lying-chest-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/b5d8e176-d465-4f57-97ec-912fdcf2b000.mp4",
    "mediaPath": "/exercises/lying-chest-press.mp4"
  },
  {
    "slug": "lying-cross-lateral-cable-fly",
    "sourceSlug": "lying-cross-lateral-cable-fly",
    "sourceRecordIds": [
      "720a8f79-75aa-4d96-ae21-e94b863d7990"
    ],
    "name": "Lying Cross Lateral Cable Fly",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/lying-cross-lateral-cable-fly",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/lying-cross-lateral-cable-fly"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/8433a809-e3b3-421b-acbc-6ac8d2369b72.mp4",
    "mediaPath": "/exercises/lying-cross-lateral-cable-fly.mp4"
  },
  {
    "slug": "lying-ez-bar-triceps-extension",
    "sourceSlug": "lying-ez-bar-triceps-extension",
    "sourceRecordIds": [
      "27433624-9149-4eba-b527-9314b99d8a2c"
    ],
    "name": "Lying EZ-Bar Triceps Extension",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/lying-ez-bar-triceps-extension",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/lying-ez-bar-triceps-extension"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/4cafc40d-554d-4dcc-9d18-f2f6c6752dc1.mp4",
    "mediaPath": "/exercises/lying-ez-bar-triceps-extension.mp4"
  },
  {
    "slug": "lying-knee-to-chest-stretch",
    "sourceSlug": "lying-knee-to-chest-stretch",
    "sourceRecordIds": [
      "998e63e1-f6ec-4dae-a7b7-592d74954216"
    ],
    "name": "Lying Knee To Chest Stretch",
    "categories": [
      "Gluteal"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/gluteus/lying-knee-to-chest-stretch",
    "sourcePages": {
      "Gluteal": "https://smartworkout.app/en/exercise-library/gluteus/lying-knee-to-chest-stretch"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/4f0d0450-0e72-47dc-80ab-df9b3fe6b566.mp4",
    "mediaPath": "/exercises/lying-knee-to-chest-stretch.mp4"
  },
  {
    "slug": "lying-quadriceps-stretch",
    "sourceSlug": "lying-quadriceps-stretch",
    "sourceRecordIds": [
      "279742a1-3b38-489d-adf0-37a9290271d7"
    ],
    "name": "Lying Quadriceps Stretch",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/lying-quadriceps-stretch",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/lying-quadriceps-stretch"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/5e379c49-8da6-4d2b-9b42-613f5e87fc4c.mp4",
    "mediaPath": "/exercises/lying-quadriceps-stretch.mp4"
  },
  {
    "slug": "lying-spinal-twist",
    "sourceSlug": "lying-spinal-twist",
    "sourceRecordIds": [
      "c088bc9d-94ff-46ef-9f61-110a605c49d9"
    ],
    "name": "Lying Spinal Twist",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/lying-spinal-twist",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/lying-spinal-twist"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/176dacdc-1c83-4066-b89d-379f1ed904a6.mp4",
    "mediaPath": "/exercises/lying-spinal-twist.mp4"
  },
  {
    "slug": "lying-stright-leg-raise",
    "sourceSlug": "lying-stright-leg-raise",
    "sourceRecordIds": [
      "57ffa56b-3279-4b97-b660-5bd91ff26f1f"
    ],
    "name": "Lying Stright Leg Raise",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/lying-stright-leg-raise",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/lying-stright-leg-raise"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/869b2894-d82f-4f8a-b393-d658a2f6617d.mp4",
    "mediaPath": "/exercises/lying-stright-leg-raise.mp4"
  },
  {
    "slug": "machine-abdominal-crunches",
    "sourceSlug": "machine-abdominal-crunches",
    "sourceRecordIds": [
      "431ad34e-e714-4ef2-9f2f-b629359da2ff"
    ],
    "name": "Machine Abdominal Crunches",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/machine-abdominal-crunches",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/machine-abdominal-crunches"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/9cfb3911-1f0e-4377-bf77-57b509c1b924.mp4",
    "mediaPath": "/exercises/machine-abdominal-crunches.mp4"
  },
  {
    "slug": "machine-belt-squat",
    "sourceSlug": "machine-belt-squat",
    "sourceRecordIds": [
      "23d2096a-5a0c-41d7-adc2-698c8e8c60e2"
    ],
    "name": "Machine Belt Squat",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/machine-belt-squat",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/machine-belt-squat"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/92d0326f-da30-40f4-a872-25166fb02fa7.mp4",
    "mediaPath": "/exercises/machine-belt-squat.mp4"
  },
  {
    "slug": "machine-biceps-curl",
    "sourceSlug": "machine-biceps-curl",
    "sourceRecordIds": [
      "8abe4e5f-c746-4112-b6c7-33d1ec688256"
    ],
    "name": "Machine Biceps Curl",
    "categories": [
      "Biceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/biceps/machine-biceps-curl",
    "sourcePages": {
      "Biceps": "https://smartworkout.app/en/exercise-library/biceps/machine-biceps-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/c3b131e2-1bf2-45ea-8398-1c69dbdf1ce7.mp4",
    "mediaPath": "/exercises/machine-biceps-curl.mp4"
  },
  {
    "slug": "machine-calf-raises",
    "sourceSlug": "machine-calf-raises",
    "sourceRecordIds": [
      "c33a0ac1-5d07-d66c-fc7c-8360786726da"
    ],
    "name": "Machine Calf Raises",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/machine-calf-raises",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/machine-calf-raises"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/679ce80f-6359-4b23-8e21-b385445fc7fc.mp4",
    "mediaPath": "/exercises/machine-calf-raises.mp4"
  },
  {
    "slug": "machine-chest-fly",
    "sourceSlug": "machine-chest-fly",
    "sourceRecordIds": [
      "d62736b5-9f97-39cd-7596-1189d05863e9"
    ],
    "name": "Machine Chest Fly",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/machine-chest-fly",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/machine-chest-fly"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/cbacfcac-1e0c-45f5-8003-463e2e92af4a.mp4",
    "mediaPath": "/exercises/machine-chest-fly.mp4"
  },
  {
    "slug": "machine-chest-press",
    "sourceSlug": "machine-chest-press",
    "sourceRecordIds": [
      "81112d74-4711-4ddc-9145-a610bf8407c8",
      "da6b09eb-e55d-42cd-988d-1454658c1a4f"
    ],
    "name": "Machine Chest Press",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/machine-chest-press",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/machine-chest-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/1ce6db8f-0aec-4a97-b43c-4ee15e506486.mp4",
    "mediaPath": "/exercises/machine-chest-press.mp4"
  },
  {
    "slug": "machine-chest-press-hammer-grip",
    "sourceSlug": "machine-chest-press-hammer-grip",
    "sourceRecordIds": [
      "d04e4922-8aec-4584-9657-ceda935dc57e"
    ],
    "name": "Machine Chest Press Hammer Grip",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/machine-chest-press-hammer-grip",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/machine-chest-press-hammer-grip"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/3244b1e1-06ca-4632-8c38-9c325835ba9d.mp4",
    "mediaPath": "/exercises/machine-chest-press-hammer-grip.mp4"
  },
  {
    "slug": "machine-hack-squat",
    "sourceSlug": "machine-hack-squat",
    "sourceRecordIds": [
      "8ae59cb6-8a70-4eb6-b2b3-35abe8060f0f"
    ],
    "name": "Machine Hack Squat",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/machine-hack-squat",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/machine-hack-squat"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/2cbe0e3d-962f-4a51-a4ff-c9df0c1ff1d4.mp4",
    "mediaPath": "/exercises/machine-hack-squat.mp4"
  },
  {
    "slug": "machine-hip-thrust",
    "sourceSlug": "machine-hip-thrust",
    "sourceRecordIds": [
      "d61ba24e-4c00-4c61-9127-08db49a79c32"
    ],
    "name": "Machine Hip Thrust",
    "categories": [
      "Gluteal"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/gluteus/machine-hip-thrust",
    "sourcePages": {
      "Gluteal": "https://smartworkout.app/en/exercise-library/gluteus/machine-hip-thrust"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/a4fd5689-0e83-4c76-86a5-6210d445ccea.mp4",
    "mediaPath": "/exercises/machine-hip-thrust.mp4"
  },
  {
    "slug": "machine-lateral-raise",
    "sourceSlug": "machine-lateral-raise",
    "sourceRecordIds": [
      "e8e7d283-5748-9f5d-7fb6-c25feb431c96"
    ],
    "name": "Machine Lateral Raise",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/machine-lateral-raise",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/machine-lateral-raise"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/269bac17-0419-4bcf-ade9-2ea9f50f4278.mp4",
    "mediaPath": "/exercises/machine-lateral-raise.mp4"
  },
  {
    "slug": "machine-lying-crunch",
    "sourceSlug": "machine-lying-crunch",
    "sourceRecordIds": [
      "591883dc-8fce-4307-a13c-a767d15dcab8"
    ],
    "name": "Machine Lying Crunch",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/machine-lying-crunch",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/machine-lying-crunch"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/915f5116-ccc2-4bad-8f0a-bf8a281427b8.mp4",
    "mediaPath": "/exercises/machine-lying-crunch.mp4"
  },
  {
    "slug": "machine-preacher-curl",
    "sourceSlug": "machine-preacher-curl",
    "sourceRecordIds": [
      "f4a9afdd-ffc5-4eeb-ab69-81b8485e5282"
    ],
    "name": "Machine Preacher Curl",
    "categories": [
      "Biceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/biceps/machine-preacher-curl",
    "sourcePages": {
      "Biceps": "https://smartworkout.app/en/exercise-library/biceps/machine-preacher-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/adeb3342-c693-46f9-899c-77824d265e42.mp4",
    "mediaPath": "/exercises/machine-preacher-curl.mp4"
  },
  {
    "slug": "machine-pullover",
    "sourceSlug": "machine-pullover",
    "sourceRecordIds": [
      "4ba860b1-2e76-45b6-8023-c386bc56e65d"
    ],
    "name": "Machine Pullover",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/machine-pullover",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/machine-pullover"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/c0d47a85-1727-4c38-b01a-9d59fcee99d2.mp4",
    "mediaPath": "/exercises/machine-pullover.mp4"
  },
  {
    "slug": "machine-reverse-flyes",
    "sourceSlug": "machine-reverse-flyes",
    "sourceRecordIds": [
      "5ee2a3f3-0b7a-7527-b3ee-d7d87664862b"
    ],
    "name": "Machine Reverse Flyes",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/machine-reverse-flyes",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/machine-reverse-flyes"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/8fbdcdbf-aec7-4d3a-8e45-b34615e25c4f.mp4",
    "mediaPath": "/exercises/machine-reverse-flyes.mp4"
  },
  {
    "slug": "machine-reverse-hack-squat",
    "sourceSlug": "machine-reverse-hack-squat",
    "sourceRecordIds": [
      "a560bb3a-883e-444e-9a2d-bfddbfa457fc"
    ],
    "name": "Machine Reverse Hack Squat",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/machine-reverse-hack-squat",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/machine-reverse-hack-squat"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/163a1ff0-9c1a-4d1c-8152-74af5899ddda.mp4",
    "mediaPath": "/exercises/machine-reverse-hack-squat.mp4"
  },
  {
    "slug": "machine-shoulder-press",
    "sourceSlug": "machine-shoulder-press",
    "sourceRecordIds": [
      "6b0ffef6-8dd1-4b89-999a-a11d85d9e16f"
    ],
    "name": "Machine Shoulder Press",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/machine-shoulder-press",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/machine-shoulder-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/2d1009a6-6a5b-402b-97ff-f30cb3677cce.mp4",
    "mediaPath": "/exercises/machine-shoulder-press.mp4"
  },
  {
    "slug": "machine-shrugs",
    "sourceSlug": "machine-shrugs",
    "sourceRecordIds": [
      "2e701c8a-581a-4505-b4ba-c906102609e0"
    ],
    "name": "Machine Shrugs",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/machine-shrugs",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/machine-shrugs"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/6e768e70-2b06-414e-a287-84656bb3b0a2.mp4",
    "mediaPath": "/exercises/machine-shrugs.mp4"
  },
  {
    "slug": "machine-triceps-extension",
    "sourceSlug": "machine-triceps-extension",
    "sourceRecordIds": [
      "978b4e26-5150-4545-afb9-f61d2d6b1be9"
    ],
    "name": "Machine Triceps Extension",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/machine-triceps-extension",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/machine-triceps-extension"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/0fcf2043-dd4a-4582-b886-850671d55e1f.mp4",
    "mediaPath": "/exercises/machine-triceps-extension.mp4"
  },
  {
    "slug": "med-ball-russian-twist",
    "sourceSlug": "med-ball-russian-twist",
    "sourceRecordIds": [
      "31e7bf28-4c5d-4833-ae1f-069bcb913bbc"
    ],
    "name": "Med Ball Russian twist",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/med-ball-russian-twist",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/med-ball-russian-twist"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/c5d39f15-cf79-441b-90ec-6c4a1eb29de7.mp4",
    "mediaPath": "/exercises/med-ball-russian-twist.mp4"
  },
  {
    "slug": "medicine-ball-slam",
    "sourceSlug": "medicine-ball-slam",
    "sourceRecordIds": [
      "4ff906b4-b05c-4e2b-b20b-b55d2a60321a"
    ],
    "name": "Medicine Ball Slam",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/medicine-ball-slam",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/medicine-ball-slam"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/1a9fa2c7-31ff-49c3-a0e6-821cd78aa2f4.mp4",
    "mediaPath": "/exercises/medicine-ball-slam.mp4"
  },
  {
    "slug": "mini-band-glute-bridge",
    "sourceSlug": "mini-band-glute-bridge",
    "sourceRecordIds": [
      "2b9833cf-064b-4d42-815b-89c58352179a"
    ],
    "name": "Mini Band Glute Bridge",
    "categories": [
      "Gluteal"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/gluteus/mini-band-glute-bridge",
    "sourcePages": {
      "Gluteal": "https://smartworkout.app/en/exercise-library/gluteus/mini-band-glute-bridge"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/82830b77-6737-455f-b690-62f724d00027.mp4",
    "mediaPath": "/exercises/mini-band-glute-bridge.mp4"
  },
  {
    "slug": "mountain-climber",
    "sourceSlug": "mountain-climber",
    "sourceRecordIds": [
      "741a7466-96b2-4538-af13-15f45eed1ab7"
    ],
    "name": "Mountain climber",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/mountain-climber",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/mountain-climber"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/1ea4065d-8785-4c13-9fd5-a5bdf409b6b7.mp4",
    "mediaPath": "/exercises/mountain-climber.mp4"
  },
  {
    "slug": "muscle-up",
    "sourceSlug": "muscle-up",
    "sourceRecordIds": [
      "c7bc7acf-63e9-4749-a0e1-d130d759ed1d"
    ],
    "name": "Muscle-up",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/muscle-up",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/muscle-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/96a8c6af-7506-4513-8901-e9a8190c1ef9.mp4",
    "mediaPath": "/exercises/muscle-up.mp4"
  },
  {
    "slug": "narrow-grip-australian-pull-up-with-rings",
    "sourceSlug": "narrow-grip-australian-pull-up-with-rings",
    "sourceRecordIds": [
      "d41e66cc-4fff-4bd0-a15f-c83b2921c1b4"
    ],
    "name": "Narrow Grip Australian Pull-Up With Rings",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/narrow-grip-australian-pull-up-with-rings",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/narrow-grip-australian-pull-up-with-rings"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/b5e7b51b-e8a8-46ec-9fcf-d3b03675c072.mp4",
    "mediaPath": "/exercises/narrow-grip-australian-pull-up-with-rings.mp4"
  },
  {
    "slug": "narrow-stance-45-degree-leg-press",
    "sourceSlug": "narrow-stance-45-degree-leg-press",
    "sourceRecordIds": [
      "084947cf-098f-62f2-36b2-41547577e2b8"
    ],
    "name": "Narrow Stance 45 Degree Leg Press",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/narrow-stance-45-degree-leg-press",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/narrow-stance-45-degree-leg-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/c72723a9-3c0c-4e76-b824-7e12d8631f00.mp4",
    "mediaPath": "/exercises/narrow-stance-45-degree-leg-press.mp4"
  },
  {
    "slug": "neck-curl",
    "sourceSlug": "neck-curl",
    "sourceRecordIds": [
      "8ce2c948-a992-4ce9-b562-2e0ff86679c7"
    ],
    "name": "Neck Curl",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/neck-curl",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/neck-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/ab8b948f-2b47-4253-98a1-e01d75af17f6.mp4",
    "mediaPath": "/exercises/neck-curl.mp4"
  },
  {
    "slug": "neck-side-stretch",
    "sourceSlug": "neck-side-stretch",
    "sourceRecordIds": [
      "291593e2-7736-4028-9bf2-77192645930b"
    ],
    "name": "Neck Side Stretch",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/neck-side-stretch",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/neck-side-stretch"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/f3475b7e-a710-4061-87e1-fc6e102bcaee.mp4",
    "mediaPath": "/exercises/neck-side-stretch.mp4"
  },
  {
    "slug": "negative-pull-up",
    "sourceSlug": "negative-pull-up",
    "sourceRecordIds": [
      "f904b1f5-72a6-4f15-a37e-abba285cc604"
    ],
    "name": "Negative Pull-Up",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/negative-pull-up",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/negative-pull-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/cc92635f-b333-47fc-a0b0-87269e5399a5.mp4",
    "mediaPath": "/exercises/negative-pull-up.mp4"
  },
  {
    "slug": "negative-push-up",
    "sourceSlug": "negative-push-up",
    "sourceRecordIds": [
      "5f734d43-2eda-4fff-9399-f99a195b6ab3"
    ],
    "name": "Negative Push-Up",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/negative-push-up",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/negative-push-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/84d6fe54-f78f-421a-928c-3268917892ea.mp4",
    "mediaPath": "/exercises/negative-push-up.mp4"
  },
  {
    "slug": "nordic-hamstring-curl",
    "sourceSlug": "nordic-hamstring-curl",
    "sourceRecordIds": [
      "3be9dd6e-2749-aa93-a291-4cc48ad59b28"
    ],
    "name": "Nordic Hamstring Curl",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/nordic-hamstring-curl",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/nordic-hamstring-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/3aace9d5-6339-4b94-a261-be5161edf60b.mp4",
    "mediaPath": "/exercises/nordic-hamstring-curl.mp4"
  },
  {
    "slug": "one-arm-band-kneeling-lat-pulldown",
    "sourceSlug": "one-arm-band-kneeling-lat-pulldown",
    "sourceRecordIds": [
      "6f9c1398-a069-4318-92b1-7233ff9f0fe7"
    ],
    "name": "One-Arm Band Kneeling Lat Pulldown",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/one-arm-band-kneeling-lat-pulldown",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/one-arm-band-kneeling-lat-pulldown"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/57451fbf-821a-4dbe-8dd4-c3761d0499d6.mp4",
    "mediaPath": "/exercises/one-arm-band-kneeling-lat-pulldown.mp4"
  },
  {
    "slug": "one-arm-cable-bent-over-lateral-raise",
    "sourceSlug": "one-arm-cable-bent-over-lateral-raise",
    "sourceRecordIds": [
      "8a18f1cb-5ada-4456-8957-7eafa50d731d"
    ],
    "name": "One-Arm Cable Bent Over Lateral Raise",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/one-arm-cable-bent-over-lateral-raise",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/one-arm-cable-bent-over-lateral-raise"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/8c2423b5-7d32-4235-9c8b-2d214ad70819.mp4",
    "mediaPath": "/exercises/one-arm-cable-bent-over-lateral-raise.mp4"
  },
  {
    "slug": "one-arm-cable-biceps-curl",
    "sourceSlug": "one-arm-cable-biceps-curl",
    "sourceRecordIds": [
      "4ad95020-4064-49c7-9048-b4f69f1f36bc"
    ],
    "name": "One-Arm Cable Biceps Curl",
    "categories": [
      "Biceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/biceps/one-arm-cable-biceps-curl",
    "sourcePages": {
      "Biceps": "https://smartworkout.app/en/exercise-library/biceps/one-arm-cable-biceps-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/eeb0b646-1ac9-4250-9207-432cc4aeb3df.mp4",
    "mediaPath": "/exercises/one-arm-cable-biceps-curl.mp4"
  },
  {
    "slug": "one-arm-cable-cross-body-triceps-extension",
    "sourceSlug": "one-arm-cable-cross-body-triceps-extension",
    "sourceRecordIds": [
      "51cf698f-c598-4ac3-aa5f-d397fe4e4d69"
    ],
    "name": "One-Arm Cable Cross Body Triceps Extension",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/one-arm-cable-cross-body-triceps-extension",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/one-arm-cable-cross-body-triceps-extension"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/c18ff896-9af3-4b4e-a821-a5034c0b6e87.mp4",
    "mediaPath": "/exercises/one-arm-cable-cross-body-triceps-extension.mp4"
  },
  {
    "slug": "one-arm-cable-fly",
    "sourceSlug": "one-arm-cable-fly",
    "sourceRecordIds": [
      "229f5259-a671-48c4-acd0-dd109e3744ab"
    ],
    "name": "One-Arm Cable Fly",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/one-arm-cable-fly",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/one-arm-cable-fly"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/d685bb1f-4c4d-42b7-bae9-52adb3ae6a13.mp4",
    "mediaPath": "/exercises/one-arm-cable-fly.mp4"
  },
  {
    "slug": "one-arm-cable-front-raise",
    "sourceSlug": "one-arm-cable-front-raise",
    "sourceRecordIds": [
      "20afacad-4d93-423b-8d48-7fd05134b702"
    ],
    "name": "One-Arm Cable Front Raise",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/one-arm-cable-front-raise",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/one-arm-cable-front-raise"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/d316ecca-558f-4579-83aa-9191bb1f869d.mp4",
    "mediaPath": "/exercises/one-arm-cable-front-raise.mp4"
  },
  {
    "slug": "one-arm-cable-half-kneeling-lat-pulldown",
    "sourceSlug": "one-arm-cable-half-kneeling-lat-pulldown",
    "sourceRecordIds": [
      "6f1920ff-322b-43c3-8f4f-901be5cd3679",
      "ed6f4b1d-e657-4a9d-993c-d06254b600e0"
    ],
    "name": "One-Arm Cable Half-Kneeling Lat Pulldown",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/one-arm-cable-half-kneeling-lat-pulldown",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/one-arm-cable-half-kneeling-lat-pulldown"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/81cbd4a9-4c7c-4472-9594-64d0ec5ce5cf.mp4",
    "mediaPath": "/exercises/one-arm-cable-half-kneeling-lat-pulldown.mp4"
  },
  {
    "slug": "one-arm-cable-lateral-raise",
    "sourceSlug": "one-arm-cable-lateral-raise",
    "sourceRecordIds": [
      "0ea2687b-5d78-4041-8ad4-66a6a8848da1",
      "9532a115-3b01-43cf-96bb-f8c07cee7089"
    ],
    "name": "One-Arm Cable Lateral Raise",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/one-arm-cable-lateral-raise",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/one-arm-cable-lateral-raise"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/42988dc5-536d-483f-a19e-c0871210d667.mp4",
    "mediaPath": "/exercises/one-arm-cable-lateral-raise.mp4"
  },
  {
    "slug": "one-arm-cable-low-row",
    "sourceSlug": "one-arm-cable-low-row",
    "sourceRecordIds": [
      "138862a9-3d34-4aa7-86f0-13e35d16e12f"
    ],
    "name": "One-Arm Cable Low Row",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/one-arm-cable-low-row",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/one-arm-cable-low-row"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/8f7ee107-e5d9-4556-84a1-e03e8edacffb.mp4",
    "mediaPath": "/exercises/one-arm-cable-low-row.mp4"
  },
  {
    "slug": "one-arm-cable-pushdown",
    "sourceSlug": "one-arm-cable-pushdown",
    "sourceRecordIds": [
      "f6793159-6429-4e35-9b22-13b428ebd903"
    ],
    "name": "One-Arm Cable Pushdown",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/one-arm-cable-pushdown",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/one-arm-cable-pushdown"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/19fc8063-2a01-4e3d-8bef-6171d3fa77b8.mp4",
    "mediaPath": "/exercises/one-arm-cable-pushdown.mp4"
  },
  {
    "slug": "one-arm-cable-rear-delt-fly",
    "sourceSlug": "one-arm-cable-rear-delt-fly",
    "sourceRecordIds": [
      "e3a29945-88d3-4cb1-83b6-955074911dc4"
    ],
    "name": "One-Arm Cable Rear Delt Fly",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/one-arm-cable-rear-delt-fly",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/one-arm-cable-rear-delt-fly"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/fe219f53-60db-412a-9141-4be90e0743ce.mp4",
    "mediaPath": "/exercises/one-arm-cable-rear-delt-fly.mp4"
  },
  {
    "slug": "one-arm-cable-row",
    "sourceSlug": "one-arm-cable-row",
    "sourceRecordIds": [
      "b91720be-c6a9-4b87-b264-0e09f7e9053d"
    ],
    "name": "One-Arm Cable Row",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/one-arm-cable-row",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/one-arm-cable-row"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/6374054c-8663-4847-82a9-b97716cadb15.mp4",
    "mediaPath": "/exercises/one-arm-cable-row.mp4"
  },
  {
    "slug": "one-arm-cable-triceps-pushdown",
    "sourceSlug": "one-arm-cable-triceps-pushdown",
    "sourceRecordIds": [
      "a1569ae6-b56a-4769-bee6-682c7d17a110"
    ],
    "name": "One-Arm Cable Triceps Pushdown",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/one-arm-cable-triceps-pushdown",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/one-arm-cable-triceps-pushdown"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/8d38b0fe-6ef2-4c20-9a68-16bf5787cbd5.mp4",
    "mediaPath": "/exercises/one-arm-cable-triceps-pushdown.mp4"
  },
  {
    "slug": "one-arm-chest-supported-row-machine",
    "sourceSlug": "one-arm-chest-supported-row-machine",
    "sourceRecordIds": [
      "245a9e25-296f-4330-9fb6-82de62ebfaca"
    ],
    "name": "One-Arm Chest Supported Row Machine",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/one-arm-chest-supported-row-machine",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/one-arm-chest-supported-row-machine"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/2fd35a2b-ac9a-4a3b-8c68-47735e1e95d3.mp4",
    "mediaPath": "/exercises/one-arm-chest-supported-row-machine.mp4"
  },
  {
    "slug": "one-arm-dumbbell-bench-press",
    "sourceSlug": "one-arm-dumbbell-bench-press",
    "sourceRecordIds": [
      "bc2e032c-f9a5-4e27-8b29-b7b80bebcd97"
    ],
    "name": "One-Arm Dumbbell Bench Press",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/one-arm-dumbbell-bench-press",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/one-arm-dumbbell-bench-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/5ad0fcdc-a1cd-4d26-a219-d451352dc27f.mp4",
    "mediaPath": "/exercises/one-arm-dumbbell-bench-press.mp4"
  },
  {
    "slug": "one-arm-dumbbell-bent-over-scapula-row",
    "sourceSlug": "one-arm-dumbbell-bent-over-scapula-row",
    "sourceRecordIds": [
      "081d6aee-e878-4d7e-adda-925768ebf2bc"
    ],
    "name": "One-Arm Dumbbell Bent Over Scapula Row",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/one-arm-dumbbell-bent-over-scapula-row",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/one-arm-dumbbell-bent-over-scapula-row"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/f1a7d50b-6a6e-46fb-9fe3-db6a742acd7a.mp4",
    "mediaPath": "/exercises/one-arm-dumbbell-bent-over-scapula-row.mp4"
  },
  {
    "slug": "one-arm-dumbbell-incline-bench-press",
    "sourceSlug": "one-arm-dumbbell-incline-bench-press",
    "sourceRecordIds": [
      "7be164bf-92d9-4808-bbf4-2aa207d17205"
    ],
    "name": "One-Arm Dumbbell Incline Bench Press",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/one-arm-dumbbell-incline-bench-press",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/one-arm-dumbbell-incline-bench-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/d0516cca-9186-4551-b164-994f0cacc5a1.mp4",
    "mediaPath": "/exercises/one-arm-dumbbell-incline-bench-press.mp4"
  },
  {
    "slug": "one-arm-dumbbell-incline-lateral-raise",
    "sourceSlug": "one-arm-dumbbell-incline-lateral-raise",
    "sourceRecordIds": [
      "aa23e750-8055-4c34-9775-6548001cfc3e"
    ],
    "name": "One-Arm Dumbbell Incline Lateral Raise",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/one-arm-dumbbell-incline-lateral-raise",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/one-arm-dumbbell-incline-lateral-raise"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/5075da53-79db-48a1-b26d-800233a0e625.mp4",
    "mediaPath": "/exercises/one-arm-dumbbell-incline-lateral-raise.mp4"
  },
  {
    "slug": "one-arm-dumbbell-lateral-raise",
    "sourceSlug": "one-arm-dumbbell-lateral-raise",
    "sourceRecordIds": [
      "bd7b2836-8bd5-4dd6-8645-2bad2da1c2db"
    ],
    "name": "One-Arm Dumbbell Lateral Raise",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/one-arm-dumbbell-lateral-raise",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/one-arm-dumbbell-lateral-raise"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/96f2483b-893e-49d7-a94d-4a86cce11317.mp4",
    "mediaPath": "/exercises/one-arm-dumbbell-lateral-raise.mp4"
  },
  {
    "slug": "one-arm-dumbbell-preacher-curl",
    "sourceSlug": "one-arm-dumbbell-preacher-curl",
    "sourceRecordIds": [
      "e2e39ddc-24bd-2a3a-c3a7-aaa34ee19367"
    ],
    "name": "One-Arm Dumbbell Preacher Curl",
    "categories": [
      "Biceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/biceps/one-arm-dumbbell-preacher-curl",
    "sourcePages": {
      "Biceps": "https://smartworkout.app/en/exercise-library/biceps/one-arm-dumbbell-preacher-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/01af56f1-0920-42dd-bb13-5b6bb683c1e0.mp4",
    "mediaPath": "/exercises/one-arm-dumbbell-preacher-curl.mp4"
  },
  {
    "slug": "one-arm-dumbbell-reverse-wrist-curl",
    "sourceSlug": "one-arm-dumbbell-reverse-wrist-curl",
    "sourceRecordIds": [
      "f3410c98-ed27-4d72-a198-651f70330c20"
    ],
    "name": "One-Arm Dumbbell Reverse Wrist Curl",
    "categories": [
      "Forearms"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/forearms/one-arm-dumbbell-reverse-wrist-curl",
    "sourcePages": {
      "Forearms": "https://smartworkout.app/en/exercise-library/forearms/one-arm-dumbbell-reverse-wrist-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/f3357eb8-2440-42ad-b5c2-b8cac7496724.mp4",
    "mediaPath": "/exercises/one-arm-dumbbell-reverse-wrist-curl.mp4"
  },
  {
    "slug": "one-arm-dumbbell-seated-kickback",
    "sourceSlug": "one-arm-dumbbell-seated-kickback",
    "sourceRecordIds": [
      "7829c099-6ac4-4eb6-81a4-f6f182f0eafa"
    ],
    "name": "One-Arm Dumbbell Seated Kickback",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/one-arm-dumbbell-seated-kickback",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/one-arm-dumbbell-seated-kickback"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/83458bb0-4291-4106-839f-166dd1b0a0c9.mp4",
    "mediaPath": "/exercises/one-arm-dumbbell-seated-kickback.mp4"
  },
  {
    "slug": "one-arm-dumbbell-supination",
    "sourceSlug": "one-arm-dumbbell-supination",
    "sourceRecordIds": [
      "2c5c5e94-5091-4615-820e-ded247f917d6"
    ],
    "name": "One-Arm Dumbbell Supination",
    "categories": [
      "Forearms"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/forearms/one-arm-dumbbell-supination",
    "sourcePages": {
      "Forearms": "https://smartworkout.app/en/exercise-library/forearms/one-arm-dumbbell-supination"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/1f1604cb-328b-40eb-a4a0-ca44282fa4db.mp4",
    "mediaPath": "/exercises/one-arm-dumbbell-supination.mp4"
  },
  {
    "slug": "one-arm-dumbbell-supported-bent-over-lateral-raise",
    "sourceSlug": "one-arm-dumbbell-supported-bent-over-lateral-raise",
    "sourceRecordIds": [
      "9e7623dc-d10b-4816-a0f5-810a372a4e6a"
    ],
    "name": "One-Arm Dumbbell Supported Bent Over Lateral Raise",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/one-arm-dumbbell-supported-bent-over-lateral-raise",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/one-arm-dumbbell-supported-bent-over-lateral-raise"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/6ea6d8c6-4d88-4035-ac3c-cabc36b863ec.mp4",
    "mediaPath": "/exercises/one-arm-dumbbell-supported-bent-over-lateral-raise.mp4"
  },
  {
    "slug": "one-arm-hammer-cable-curl",
    "sourceSlug": "one-arm-hammer-cable-curl",
    "sourceRecordIds": [
      "b343e608-5d5f-4983-adba-b2045467c73d"
    ],
    "name": "One-Arm Hammer Cable Curl",
    "categories": [
      "Biceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/biceps/one-arm-hammer-cable-curl",
    "sourcePages": {
      "Biceps": "https://smartworkout.app/en/exercise-library/biceps/one-arm-hammer-cable-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/ac23cca5-fa5f-4968-a147-ca9769a13715.mp4",
    "mediaPath": "/exercises/one-arm-hammer-cable-curl.mp4"
  },
  {
    "slug": "one-arm-high-row-cable",
    "sourceSlug": "one-arm-high-row-cable",
    "sourceRecordIds": [
      "86229a51-11aa-4610-9d34-f27e2b4b7eea"
    ],
    "name": "One-Arm High Row Cable",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/one-arm-high-row-cable",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/one-arm-high-row-cable"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/1645ad51-28fd-4b2e-922f-8bd6246c56eb.mp4",
    "mediaPath": "/exercises/one-arm-high-row-cable.mp4"
  },
  {
    "slug": "one-arm-high-to-low-cable-fly",
    "sourceSlug": "one-arm-high-to-low-cable-fly",
    "sourceRecordIds": [
      "8c26f0f1-7a4a-4174-be6c-eab991b25992"
    ],
    "name": "One-Arm High-to-Low Cable Fly",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/one-arm-high-to-low-cable-fly",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/one-arm-high-to-low-cable-fly"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/db9e7f28-0642-4cab-91c4-1ad6dde557a2.mp4",
    "mediaPath": "/exercises/one-arm-high-to-low-cable-fly.mp4"
  },
  {
    "slug": "one-arm-katana-triceps-overhead-extension",
    "sourceSlug": "one-arm-katana-triceps-overhead-extension",
    "sourceRecordIds": [
      "427c150b-3c0d-4010-9476-0787cfc84514"
    ],
    "name": "One-Arm Katana Triceps Overhead Extension",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/one-arm-katana-triceps-overhead-extension",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/one-arm-katana-triceps-overhead-extension"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/fff0da8d-8d65-456e-bf23-0666804f2266.mp4",
    "mediaPath": "/exercises/one-arm-katana-triceps-overhead-extension.mp4"
  },
  {
    "slug": "one-arm-kettlebell-overhead-press",
    "sourceSlug": "one-arm-kettlebell-overhead-press",
    "sourceRecordIds": [
      "c64c25ff-7e50-422e-ba86-ac7e24ddf6e5"
    ],
    "name": "One-Arm Kettlebell Overhead Press",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/one-arm-kettlebell-overhead-press",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/one-arm-kettlebell-overhead-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/6f0b219a-a3bc-436a-b40b-752905c17732.mp4",
    "mediaPath": "/exercises/one-arm-kettlebell-overhead-press.mp4"
  },
  {
    "slug": "one-arm-kettlebell-swing",
    "sourceSlug": "one-arm-kettlebell-swing",
    "sourceRecordIds": [
      "5b2ee265-06ea-46a9-8011-a1e875e8eb64"
    ],
    "name": "One-Arm Kettlebell Swing",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/one-arm-kettlebell-swing",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/one-arm-kettlebell-swing"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/390cc461-ae92-4030-ba59-9f253cc521f5.mp4",
    "mediaPath": "/exercises/one-arm-kettlebell-swing.mp4"
  },
  {
    "slug": "one-arm-landmine-bent-over-row",
    "sourceSlug": "one-arm-landmine-bent-over-row",
    "sourceRecordIds": [
      "6b58e142-6ce7-4492-ac4f-197bd74ab148"
    ],
    "name": "One-Arm Landmine Bent Over Row",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/one-arm-landmine-bent-over-row",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/one-arm-landmine-bent-over-row"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/c5d41922-e7bd-4e45-925a-bd72ccf6af7e.mp4",
    "mediaPath": "/exercises/one-arm-landmine-bent-over-row.mp4"
  },
  {
    "slug": "one-arm-landmine-half-kneeling-shoulder-press",
    "sourceSlug": "one-arm-landmine-half-kneeling-shoulder-press",
    "sourceRecordIds": [
      "d1da7f1a-1aa7-4798-9a0d-a4eccf36ff5f"
    ],
    "name": "One-Arm Landmine Half Kneeling Shoulder Press",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/one-arm-landmine-half-kneeling-shoulder-press",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/one-arm-landmine-half-kneeling-shoulder-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/b0619b94-ab4d-48b5-819a-3e3584554073.mp4",
    "mediaPath": "/exercises/one-arm-landmine-half-kneeling-shoulder-press.mp4"
  },
  {
    "slug": "one-arm-landmine-standing-shoulder-press",
    "sourceSlug": "one-arm-landmine-standing-shoulder-press",
    "sourceRecordIds": [
      "603caf54-423d-4715-89ac-d1b4b499107a"
    ],
    "name": "One-Arm Landmine Standing Shoulder Press",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/one-arm-landmine-standing-shoulder-press",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/one-arm-landmine-standing-shoulder-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/e86472b4-0880-4f2f-b46e-9a5b1888469c.mp4",
    "mediaPath": "/exercises/one-arm-landmine-standing-shoulder-press.mp4"
  },
  {
    "slug": "one-arm-lat-pulldown",
    "sourceSlug": "one-arm-lat-pulldown",
    "sourceRecordIds": [
      "04035dba-efc3-4736-9b1b-bc4fd23d9695"
    ],
    "name": "One-Arm Lat Pulldown",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/one-arm-lat-pulldown",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/one-arm-lat-pulldown"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/435cff62-b904-4149-b512-028033ac10d1.mp4",
    "mediaPath": "/exercises/one-arm-lat-pulldown.mp4"
  },
  {
    "slug": "one-arm-lever-high-row",
    "sourceSlug": "one-arm-lever-high-row",
    "sourceRecordIds": [
      "eec04e96-7634-4586-8a5b-c5f333bdac6a"
    ],
    "name": "One-Arm Lever High Row",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/one-arm-lever-high-row",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/one-arm-lever-high-row"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/bc9a797b-7146-4542-9a52-eb2811cbb4a7.mp4",
    "mediaPath": "/exercises/one-arm-lever-high-row.mp4"
  },
  {
    "slug": "one-arm-low-cable-seated-row",
    "sourceSlug": "one-arm-low-cable-seated-row",
    "sourceRecordIds": [
      "272ee53c-baf9-4a84-a909-e7370543dd8a"
    ],
    "name": "One-Arm Low Cable Seated Row",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/one-arm-low-cable-seated-row",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/one-arm-low-cable-seated-row"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/b0b70c55-e720-403a-8a99-a1eef643aa75.mp4",
    "mediaPath": "/exercises/one-arm-low-cable-seated-row.mp4"
  },
  {
    "slug": "one-arm-low-fly-dumbbell",
    "sourceSlug": "one-arm-low-fly-dumbbell",
    "sourceRecordIds": [
      "418cf18f-68ac-4314-a2bd-036487e78a2e"
    ],
    "name": "One-Arm Low Fly Dumbbell",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/one-arm-low-fly-dumbbell",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/one-arm-low-fly-dumbbell"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/f3e26a21-190d-409d-893a-298e58c857ee.mp4",
    "mediaPath": "/exercises/one-arm-low-fly-dumbbell.mp4"
  },
  {
    "slug": "one-arm-low-to-high-cable-fly",
    "sourceSlug": "one-arm-low-to-high-cable-fly",
    "sourceRecordIds": [
      "cd126272-b650-475e-bd59-f58ebb1ad6f6"
    ],
    "name": "One-Arm Low-to-High Cable Fly",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/one-arm-low-to-high-cable-fly",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/one-arm-low-to-high-cable-fly"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/ed8f531d-acde-4cc8-acc4-9796e34f42a3.mp4",
    "mediaPath": "/exercises/one-arm-low-to-high-cable-fly.mp4"
  },
  {
    "slug": "one-arm-machine-preacher-curl",
    "sourceSlug": "one-arm-machine-preacher-curl",
    "sourceRecordIds": [
      "2b8538c5-03b4-4f4f-b178-11dd9b8ad4f3"
    ],
    "name": "One-Arm Machine Preacher Curl",
    "categories": [
      "Biceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/biceps/one-arm-machine-preacher-curl",
    "sourcePages": {
      "Biceps": "https://smartworkout.app/en/exercise-library/biceps/one-arm-machine-preacher-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/57ba28f4-8296-4810-a3f1-d282307c3ce6.mp4",
    "mediaPath": "/exercises/one-arm-machine-preacher-curl.mp4"
  },
  {
    "slug": "one-arm-neutral-wrist-dumbbell-curl",
    "sourceSlug": "one-arm-neutral-wrist-dumbbell-curl",
    "sourceRecordIds": [
      "09aed7e3-7a9c-4e38-81a6-bb7675692cbf"
    ],
    "name": "One-Arm Neutral Wrist Dumbbell Curl",
    "categories": [
      "Forearms"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/forearms/one-arm-neutral-wrist-dumbbell-curl",
    "sourcePages": {
      "Forearms": "https://smartworkout.app/en/exercise-library/forearms/one-arm-neutral-wrist-dumbbell-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/40ec8b03-ff0f-4515-8c15-79da7fa1e5cc.mp4",
    "mediaPath": "/exercises/one-arm-neutral-wrist-dumbbell-curl.mp4"
  },
  {
    "slug": "one-arm-overhead-triceps-extension",
    "sourceSlug": "one-arm-overhead-triceps-extension",
    "sourceRecordIds": [
      "f8ac9f43-116f-79ca-778a-76137bfe61da"
    ],
    "name": "One-Arm Overhead Triceps Extension",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/one-arm-overhead-triceps-extension",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/one-arm-overhead-triceps-extension"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/790b5e86-1814-490e-85e4-6a38387db32a.mp4",
    "mediaPath": "/exercises/one-arm-overhead-triceps-extension.mp4"
  },
  {
    "slug": "one-arm-preacher-hammer-curl",
    "sourceSlug": "one-arm-preacher-hammer-curl",
    "sourceRecordIds": [
      "77542def-76bd-40e3-a5af-4340f0672611"
    ],
    "name": "One-Arm Preacher Hammer Curl",
    "categories": [
      "Biceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/biceps/one-arm-preacher-hammer-curl",
    "sourcePages": {
      "Biceps": "https://smartworkout.app/en/exercise-library/biceps/one-arm-preacher-hammer-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/a8b129b7-e2c0-4716-954a-dda8daeb78a3.mp4",
    "mediaPath": "/exercises/one-arm-preacher-hammer-curl.mp4"
  },
  {
    "slug": "one-arm-push-up",
    "sourceSlug": "one-arm-push-up",
    "sourceRecordIds": [
      "32e2dcf3-923f-4aea-a276-a4c2f9236d43"
    ],
    "name": "One-Arm Push-Up",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/one-arm-push-up",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/one-arm-push-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/1ac58147-1cfd-40f2-9aa7-549d8b6e5365.mp4",
    "mediaPath": "/exercises/one-arm-push-up.mp4"
  },
  {
    "slug": "one-arm-rear-delt-fly",
    "sourceSlug": "one-arm-rear-delt-fly",
    "sourceRecordIds": [
      "876b0346-eb4e-4ca7-beda-b5825c8e622d"
    ],
    "name": "One-Arm Rear Delt Fly",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/one-arm-rear-delt-fly",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/one-arm-rear-delt-fly"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/46893e73-dd2a-4edb-b01f-f7ade86d2a81.mp4",
    "mediaPath": "/exercises/one-arm-rear-delt-fly.mp4"
  },
  {
    "slug": "one-arm-reverse-grip-triceps-cable-pushdown",
    "sourceSlug": "one-arm-reverse-grip-triceps-cable-pushdown",
    "sourceRecordIds": [
      "6d64b5dc-526f-40aa-ae4b-64fa40a41047"
    ],
    "name": "One-Arm Reverse Grip Triceps Cable Pushdown",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/one-arm-reverse-grip-triceps-cable-pushdown",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/one-arm-reverse-grip-triceps-cable-pushdown"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/339e99d5-03bb-4616-bca9-f3e24d144ba0.mp4",
    "mediaPath": "/exercises/one-arm-reverse-grip-triceps-cable-pushdown.mp4"
  },
  {
    "slug": "one-arm-seated-row",
    "sourceSlug": "one-arm-seated-row",
    "sourceRecordIds": [
      "d8e77fb2-ebb1-4e7c-8e93-fd397a8c290b"
    ],
    "name": "One-Arm Seated Row",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/one-arm-seated-row",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/one-arm-seated-row"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/a24c984e-1a96-4be3-ac64-a175dadb0a41.mp4",
    "mediaPath": "/exercises/one-arm-seated-row.mp4"
  },
  {
    "slug": "one-arm-shoulder-press-dumbbell",
    "sourceSlug": "one-arm-shoulder-press-dumbbell",
    "sourceRecordIds": [
      "1bf3fec3-3ec8-48b8-bb5c-7439876c7aab"
    ],
    "name": "One-Arm Shoulder Press Dumbbell",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/one-arm-shoulder-press-dumbbell",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/one-arm-shoulder-press-dumbbell"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/e9208fb6-7e31-4ce1-a9d9-d19bbed1e066.mp4",
    "mediaPath": "/exercises/one-arm-shoulder-press-dumbbell.mp4"
  },
  {
    "slug": "one-arm-straight-arm-cable-lat-pulldown",
    "sourceSlug": "one-arm-straight-arm-cable-lat-pulldown",
    "sourceRecordIds": [
      "2340824d-e207-4561-bdcd-8752070c06da"
    ],
    "name": "One-Arm Straight-Arm Cable Lat Pulldown",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/one-arm-straight-arm-cable-lat-pulldown",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/one-arm-straight-arm-cable-lat-pulldown"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/1bcaaf4e-af5f-4c76-af14-fb116c883891.mp4",
    "mediaPath": "/exercises/one-arm-straight-arm-cable-lat-pulldown.mp4"
  },
  {
    "slug": "one-arm-triceps-cable-pushdown",
    "sourceSlug": "one-arm-triceps-cable-pushdown",
    "sourceRecordIds": [
      "6e2c5d5f-0653-497d-a8a8-938d4a667686"
    ],
    "name": "One-Arm Triceps Cable Pushdown",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/one-arm-triceps-cable-pushdown",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/one-arm-triceps-cable-pushdown"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/42918782-41b8-4d85-9b5e-1a0582156767.mp4",
    "mediaPath": "/exercises/one-arm-triceps-cable-pushdown.mp4"
  },
  {
    "slug": "one-arm-wrist-curl-dumbbell",
    "sourceSlug": "one-arm-wrist-curl-dumbbell",
    "sourceRecordIds": [
      "12b4858c-6c84-43b4-964d-cfd590ff7958"
    ],
    "name": "One-Arm Wrist Curl Dumbbell",
    "categories": [
      "Forearms"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/forearms/one-arm-wrist-curl-dumbbell",
    "sourcePages": {
      "Forearms": "https://smartworkout.app/en/exercise-library/forearms/one-arm-wrist-curl-dumbbell"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/bf03dca1-be41-4535-827b-7121113da8a3.mp4",
    "mediaPath": "/exercises/one-arm-wrist-curl-dumbbell.mp4"
  },
  {
    "slug": "opposite-side-elbow-to-knee",
    "sourceSlug": "opposite-side-elbow-to-knee",
    "sourceRecordIds": [
      "cfddb90c-e434-43a8-8b05-d8556431d7f1"
    ],
    "name": "Opposite side elbow to knee",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/opposite-side-elbow-to-knee",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/opposite-side-elbow-to-knee"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/799e957b-4400-4e75-a4af-f5f68e60bc9b.mp4",
    "mediaPath": "/exercises/opposite-side-elbow-to-knee.mp4"
  },
  {
    "slug": "overhead-band-triceps-extension",
    "sourceSlug": "overhead-band-triceps-extension",
    "sourceRecordIds": [
      "cb57a584-6e5e-4305-891c-f06140dc8fd5"
    ],
    "name": "Overhead Band Triceps Extension",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/overhead-band-triceps-extension",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/overhead-band-triceps-extension"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/809138b6-52e8-42ab-9b4d-7b1b2f220cfa.mp4",
    "mediaPath": "/exercises/overhead-band-triceps-extension.mp4"
  },
  {
    "slug": "overhead-cable-triceps-exstension-bar",
    "sourceSlug": "overhead-cable-triceps-exstension-(bar)",
    "sourceRecordIds": [
      "a46311d5-71d4-4027-8876-c4419b110819"
    ],
    "name": "Overhead Cable Triceps Exstension (bar)",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/overhead-cable-triceps-exstension-(bar)",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/overhead-cable-triceps-exstension-(bar)"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/4a2ccbda-2b47-448a-985f-b57e36a24c11.mp4",
    "mediaPath": "/exercises/overhead-cable-triceps-exstension-bar.mp4"
  },
  {
    "slug": "overhead-triceps-stretch",
    "sourceSlug": "overhead-triceps-stretch",
    "sourceRecordIds": [
      "3efa8afc-e9ac-41a7-82af-6dccefc96e33"
    ],
    "name": "Overhead Triceps Stretch",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/overhead-triceps-stretch",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/overhead-triceps-stretch"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/7b1d0db3-9a6f-4602-826f-752475f3e91b.mp4",
    "mediaPath": "/exercises/overhead-triceps-stretch.mp4"
  },
  {
    "slug": "pec-deck-chest-fly",
    "sourceSlug": "pec-deck-chest-fly",
    "sourceRecordIds": [
      "6548ec6b-8ab8-4866-8b80-e2b412937051"
    ],
    "name": "Pec Deck Chest Fly",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/pec-deck-chest-fly",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/pec-deck-chest-fly"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/9515b29a-ad82-4b95-ae20-e8372579256d.mp4",
    "mediaPath": "/exercises/pec-deck-chest-fly.mp4"
  },
  {
    "slug": "pendlay-row",
    "sourceSlug": "pendlay-row",
    "sourceRecordIds": [
      "bbe9a0d9-509e-4362-b9e9-396e8b7c79c3"
    ],
    "name": "Pendlay Row",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/pendlay-row",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/pendlay-row"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/9ee650ee-da32-4c46-94ea-1204b16ee962.mp4",
    "mediaPath": "/exercises/pendlay-row.mp4"
  },
  {
    "slug": "pigeon-pose",
    "sourceSlug": "pigeon-pose",
    "sourceRecordIds": [
      "81a7dd83-e98c-405e-89b6-f9390fa16bb8"
    ],
    "name": "Pigeon Pose",
    "categories": [
      "Gluteal"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/gluteus/pigeon-pose",
    "sourcePages": {
      "Gluteal": "https://smartworkout.app/en/exercise-library/gluteus/pigeon-pose"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/afce196e-d576-4b5c-87b1-c9dd97204b34.mp4",
    "mediaPath": "/exercises/pigeon-pose.mp4"
  },
  {
    "slug": "pike-push-up",
    "sourceSlug": "pike-push-up",
    "sourceRecordIds": [
      "7a5662a2-c81d-4d1c-83c3-52441ad8e595"
    ],
    "name": "Pike Push-Up",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/pike-push-up",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/pike-push-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/e30b3f83-ac42-404a-9f1e-f4ab9da0e228.mp4",
    "mediaPath": "/exercises/pike-push-up.mp4"
  },
  {
    "slug": "pike-push-up-between-benches",
    "sourceSlug": "pike-push-up-between-benches",
    "sourceRecordIds": [
      "2a9fd936-4875-4004-bea8-6f4f78081174"
    ],
    "name": "Pike Push-Up Between Benches",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/pike-push-up-between-benches",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/pike-push-up-between-benches"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/18d18a5f-0715-4878-b9af-8823c041d269.mp4",
    "mediaPath": "/exercises/pike-push-up-between-benches.mp4"
  },
  {
    "slug": "pike-push-up-between-chairs",
    "sourceSlug": "pike-push-up-between-chairs",
    "sourceRecordIds": [
      "56c729a9-e650-4668-bd71-47eae8fc9efa"
    ],
    "name": "Pike Push-Up Between Chairs",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/pike-push-up-between-chairs",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/pike-push-up-between-chairs"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/6d505fd7-5436-48eb-b17f-4832a7381695.mp4",
    "mediaPath": "/exercises/pike-push-up-between-chairs.mp4"
  },
  {
    "slug": "pike-push-up-on-bench",
    "sourceSlug": "pike-push-up-on-bench",
    "sourceRecordIds": [
      "e58c666b-518c-488c-bac5-b58b6b1fbb62"
    ],
    "name": "Pike Push-Up On Bench",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/pike-push-up-on-bench",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/pike-push-up-on-bench"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/b1903952-7b6a-4865-bdfa-05033c19f9ae.mp4",
    "mediaPath": "/exercises/pike-push-up-on-bench.mp4"
  },
  {
    "slug": "pin-bench-press",
    "sourceSlug": "pin-bench-press",
    "sourceRecordIds": [
      "cbf0e055-72dc-4e3d-bd43-6055b2bd0bed"
    ],
    "name": "Pin Bench Press",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/pin-bench-press",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/pin-bench-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/75a3fb07-2034-4dd8-8f1e-acb45105d12b.mp4",
    "mediaPath": "/exercises/pin-bench-press.mp4"
  },
  {
    "slug": "pin-front-squat",
    "sourceSlug": "pin-front-squat",
    "sourceRecordIds": [
      "a62eced5-a72a-4f57-b1b2-5b0e4bf17475"
    ],
    "name": "Pin Front Squat",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/pin-front-squat",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/pin-front-squat"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/897e43d3-ded2-403f-815b-0ecad5d228c6.mp4",
    "mediaPath": "/exercises/pin-front-squat.mp4"
  },
  {
    "slug": "pin-squat",
    "sourceSlug": "pin-squat",
    "sourceRecordIds": [
      "17325fc8-61c6-4697-9fe1-17e7ece44254"
    ],
    "name": "Pin Squat",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/pin-squat",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/pin-squat"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/f632705a-a10d-4e48-9cd0-ae0944256913.mp4",
    "mediaPath": "/exercises/pin-squat.mp4"
  },
  {
    "slug": "pistol-box-squat",
    "sourceSlug": "pistol-box-squat",
    "sourceRecordIds": [
      "c2b72e25-1c85-43f3-9c95-5bd9431e34ac"
    ],
    "name": "Pistol Box Squat",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/pistol-box-squat",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/pistol-box-squat"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/689f7f43-68bf-470f-a733-7597718ef52b.mp4",
    "mediaPath": "/exercises/pistol-box-squat.mp4"
  },
  {
    "slug": "pistol-squat",
    "sourceSlug": "pistol-squat",
    "sourceRecordIds": [
      "03d73a15-6288-4c26-922f-dfc877f44128"
    ],
    "name": "Pistol Squat",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/pistol-squat",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/pistol-squat"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/306eeb62-cf8d-492d-831f-53b98243af08.mp4",
    "mediaPath": "/exercises/pistol-squat.mp4"
  },
  {
    "slug": "planche-dips",
    "sourceSlug": "planche-dips",
    "sourceRecordIds": [
      "2d677a46-52c9-4daa-a391-477823fd68e5"
    ],
    "name": "Planche Dips",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/planche-dips",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/planche-dips"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/c9e11a50-3f0a-4fce-a4cb-deb79ba7dec0.mp4",
    "mediaPath": "/exercises/planche-dips.mp4"
  },
  {
    "slug": "planche-push-up",
    "sourceSlug": "planche-push-up",
    "sourceRecordIds": [
      "492742c2-2f9d-403c-8212-3323acb46df2"
    ],
    "name": "Planche Push-Up",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/planche-push-up",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/planche-push-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/ceae4970-eabc-447e-a917-42f96888e7ff.mp4",
    "mediaPath": "/exercises/planche-push-up.mp4"
  },
  {
    "slug": "plank",
    "sourceSlug": "plank",
    "sourceRecordIds": [
      "5cd1538c-cc1e-8446-a4eb-70f868eb0005"
    ],
    "name": "Plank",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/plank",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/plank"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/8e4dddcc-b7e2-4961-8e82-ef54774734fb.mp4",
    "mediaPath": "/exercises/plank.mp4"
  },
  {
    "slug": "plate-bus-driver",
    "sourceSlug": "plate-bus-driver",
    "sourceRecordIds": [
      "7a4f1acb-f378-4229-8a37-e7f72ae6d3cd"
    ],
    "name": "Plate Bus Driver",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/plate-bus-driver",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/plate-bus-driver"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/b3fa888f-f539-4bd1-a51b-d4c87627dc19.mp4",
    "mediaPath": "/exercises/plate-bus-driver.mp4"
  },
  {
    "slug": "plate-front-raise",
    "sourceSlug": "plate-front-raise",
    "sourceRecordIds": [
      "a651bd8e-9d5d-40be-b1d9-766081a4b34a"
    ],
    "name": "Plate Front Raise",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/plate-front-raise",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/plate-front-raise"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/353212ef-2c5c-4c1a-a0d2-f9cf466daf42.mp4",
    "mediaPath": "/exercises/plate-front-raise.mp4"
  },
  {
    "slug": "plate-front-raise-drive",
    "sourceSlug": "plate-front-raise-drive",
    "sourceRecordIds": [
      "05047869-eeb1-4c65-948c-0d85715bacae"
    ],
    "name": "Plate Front Raise Drive",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/plate-front-raise-drive",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/plate-front-raise-drive"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/f80b8b3f-58a4-4e7e-8c22-8269b6a7aa52.mp4",
    "mediaPath": "/exercises/plate-front-raise-drive.mp4"
  },
  {
    "slug": "plyo-side-lunge",
    "sourceSlug": "plyo-side-lunge",
    "sourceRecordIds": [
      "9194fcea-dbc9-4db8-b448-96552077dbd1"
    ],
    "name": "Plyo side lunge",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/plyo-side-lunge",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/plyo-side-lunge"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/450e635c-15b7-4186-bf56-a5a39dc86c75.mp4",
    "mediaPath": "/exercises/plyo-side-lunge.mp4"
  },
  {
    "slug": "pogo-jumps",
    "sourceSlug": "pogo-jumps",
    "sourceRecordIds": [
      "be225aec-96d1-4dfb-9670-c9c6ccfddd99"
    ],
    "name": "Pogo Jumps",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/pogo-jumps",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/pogo-jumps"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/6fdb44c7-988a-4dc4-b196-7c2ab75bc595.mp4",
    "mediaPath": "/exercises/pogo-jumps.mp4"
  },
  {
    "slug": "poliquin-flyes",
    "sourceSlug": "poliquin-flyes",
    "sourceRecordIds": [
      "fc730971-57d7-458f-bc9a-6217c728fd83"
    ],
    "name": "Poliquin Flyes",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/poliquin-flyes",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/poliquin-flyes"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/3f9de872-5fd1-44cb-a0f9-99ee1faa226c.mp4",
    "mediaPath": "/exercises/poliquin-flyes.mp4"
  },
  {
    "slug": "poliquin-step-up",
    "sourceSlug": "poliquin-step-up",
    "sourceRecordIds": [
      "55c465c9-b72e-4a61-b8ed-d3f8502e0b79"
    ],
    "name": "Poliquin Step-Up",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/poliquin-step-up",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/poliquin-step-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/44003b37-2dce-4a73-968e-14a62a63ea0d.mp4",
    "mediaPath": "/exercises/poliquin-step-up.mp4"
  },
  {
    "slug": "powell-raise",
    "sourceSlug": "powell-raise",
    "sourceRecordIds": [
      "e14931b5-96ce-e1ed-4604-46958f33bd85"
    ],
    "name": "Powell Raise",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/powell-raise",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/powell-raise"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/7ff60930-6e19-4c76-a671-a3db696cd993.mp4",
    "mediaPath": "/exercises/powell-raise.mp4"
  },
  {
    "slug": "power-clean",
    "sourceSlug": "power-clean",
    "sourceRecordIds": [
      "25157430-0a7c-4079-a00d-51a846790596"
    ],
    "name": "Power Clean",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/power-clean",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/power-clean"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/651038e5-362b-44e2-a8db-6462c8169e98.mp4",
    "mediaPath": "/exercises/power-clean.mp4"
  },
  {
    "slug": "preacher-hammer-curl",
    "sourceSlug": "preacher-hammer-curl",
    "sourceRecordIds": [
      "ca1dbb25-9c6d-464b-95ca-a55d9b72395a"
    ],
    "name": "Preacher Hammer Curl",
    "categories": [
      "Biceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/biceps/preacher-hammer-curl",
    "sourcePages": {
      "Biceps": "https://smartworkout.app/en/exercise-library/biceps/preacher-hammer-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/71f9eea8-23e6-4af4-870b-cfe70c978d98.mp4",
    "mediaPath": "/exercises/preacher-hammer-curl.mp4"
  },
  {
    "slug": "prone-lying-leg-curl",
    "sourceSlug": "prone-lying-leg-curl",
    "sourceRecordIds": [
      "bdfbf8c4-7d96-f9bd-f441-523c1a434312"
    ],
    "name": "Prone Lying Leg Curl",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/prone-lying-leg-curl",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/prone-lying-leg-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/313e2366-3d66-41d3-b450-5b5b9664e6da.mp4",
    "mediaPath": "/exercises/prone-lying-leg-curl.mp4"
  },
  {
    "slug": "prone-swimmer",
    "sourceSlug": "prone-swimmer",
    "sourceRecordIds": [
      "73178ef7-4fe8-47df-9cb0-991d33cc66bf"
    ],
    "name": "Prone Swimmer",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/prone-swimmer",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/prone-swimmer"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/88323fed-2484-4a9c-b0f3-6e859ffeee8c.mp4",
    "mediaPath": "/exercises/prone-swimmer.mp4"
  },
  {
    "slug": "prowler-sled",
    "sourceSlug": "prowler-sled",
    "sourceRecordIds": [
      "75c7819c-7c7d-4c96-b9c2-aa45e20c4956"
    ],
    "name": "Prowler Sled",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/prowler-sled",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/prowler-sled"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/34ce9ea2-b70c-4b34-ab0c-5bbd3a90d11d.mp4",
    "mediaPath": "/exercises/prowler-sled.mp4"
  },
  {
    "slug": "pull-around",
    "sourceSlug": "pull-around",
    "sourceRecordIds": [
      "67f6aae7-5674-4e6e-9b39-1e4a0c956e5c"
    ],
    "name": "Pull Around",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/pull-around",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/pull-around"
    },
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
    "sourceSlug": "pull-up",
    "sourceRecordIds": [
      "04141712-a8e2-49df-9e46-ba6204ae5edf"
    ],
    "name": "Pull-Up",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/pull-up",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/pull-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/65f1e0f3-01e5-40dc-919e-682660b96575.mp4",
    "mediaPath": "/exercises/pull-up.mp4"
  },
  {
    "slug": "pull-up-neutral-grip",
    "sourceSlug": "pull-up-neutral-grip",
    "sourceRecordIds": [
      "71f484d7-0e4d-4251-9000-85b2f1e51435"
    ],
    "name": "Pull-Up Neutral Grip",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/pull-up-neutral-grip",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/pull-up-neutral-grip"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/c936be21-faec-41eb-9b13-ef26812892ae.mp4",
    "mediaPath": "/exercises/pull-up-neutral-grip.mp4"
  },
  {
    "slug": "pull-up-wide-grip",
    "sourceSlug": "pull-up-wide-grip",
    "sourceRecordIds": [
      "1f0ed45d-5c7d-7d28-1df8-5dac013c1c38"
    ],
    "name": "Pull-Up Wide Grip",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/pull-up-wide-grip",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/pull-up-wide-grip"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/3d88b4a8-4e3a-4b80-add3-beb55b2ddaa5.mp4",
    "mediaPath": "/exercises/pull-up-wide-grip.mp4"
  },
  {
    "slug": "punching-bag-boxing",
    "sourceSlug": "punching-bag-boxing",
    "sourceRecordIds": [
      "2a1d3932-f562-437a-a7d4-96539dff07a5"
    ],
    "name": "Punching Bag Boxing",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/punching-bag-boxing",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/punching-bag-boxing"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/8d12dabe-ce8c-49d2-a0d9-5a0080e2aeee.mp4",
    "mediaPath": "/exercises/punching-bag-boxing.mp4"
  },
  {
    "slug": "push-up",
    "sourceSlug": "push-up",
    "sourceRecordIds": [
      "6a602b98-88ce-feb2-ac46-4bc607125fd7"
    ],
    "name": "Push-Up",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/push-up",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/push-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/04e5def2-7ed5-4847-b027-ac66bdc658d7.mp4",
    "mediaPath": "/exercises/push-up.mp4"
  },
  {
    "slug": "push-up-on-parallel-bars",
    "sourceSlug": "push-up-on-parallel-bars",
    "sourceRecordIds": [
      "c9679a7c-9960-4d98-a130-1e919bfe1f74"
    ],
    "name": "Push-Up on Parallel Bars",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/push-up-on-parallel-bars",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/push-up-on-parallel-bars"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/f1e128ff-2642-44cd-b553-6a73c59dda9b.mp4",
    "mediaPath": "/exercises/push-up-on-parallel-bars.mp4"
  },
  {
    "slug": "rear-deltoid-stretch",
    "sourceSlug": "rear-deltoid-stretch",
    "sourceRecordIds": [
      "e5cef725-3790-4842-aa23-8701fd26f543"
    ],
    "name": "Rear Deltoid Stretch",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/rear-deltoid-stretch",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/rear-deltoid-stretch"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/34c6ed5e-15f3-47c0-8df1-53fad7011506.mp4",
    "mediaPath": "/exercises/rear-deltoid-stretch.mp4"
  },
  {
    "slug": "rear-lunge",
    "sourceSlug": "rear-lunge",
    "sourceRecordIds": [
      "a832b1f9-ffc0-43e6-80e4-2dea898f0f21"
    ],
    "name": "Rear Lunge",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/rear-lunge",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/rear-lunge"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/acb48eac-f663-4849-8273-4456dca39451.mp4",
    "mediaPath": "/exercises/rear-lunge.mp4"
  },
  {
    "slug": "resistance-band-hip-adduction",
    "sourceSlug": "resistance-band-hip-adduction",
    "sourceRecordIds": [
      "3ed15c03-1804-4a10-a975-43e21e7cb3d1"
    ],
    "name": "Resistance Band Hip Adduction",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/resistance-band-hip-adduction",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/resistance-band-hip-adduction"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/99abb674-b99e-4497-8bde-19bf7467fc7f.mp4",
    "mediaPath": "/exercises/resistance-band-hip-adduction.mp4"
  },
  {
    "slug": "resistance-band-push-up",
    "sourceSlug": "resistance-band-push-up",
    "sourceRecordIds": [
      "8b039cb0-a7cb-4ffa-9fa1-e6120abf7936"
    ],
    "name": "Resistance Band Push-Up",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/resistance-band-push-up",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/resistance-band-push-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/3ebf60e2-f818-4d32-9655-b07f780684cf.mp4",
    "mediaPath": "/exercises/resistance-band-push-up.mp4"
  },
  {
    "slug": "reverse-crunches",
    "sourceSlug": "reverse-crunches",
    "sourceRecordIds": [
      "9e5c1465-5ec1-40c0-8b50-2dd531666b82"
    ],
    "name": "Reverse Crunches",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/reverse-crunches",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/reverse-crunches"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/a03e99ef-269f-476b-88c1-3c7599894aa1.mp4",
    "mediaPath": "/exercises/reverse-crunches.mp4"
  },
  {
    "slug": "reverse-grip-cable-curl",
    "sourceSlug": "reverse-grip-cable-curl",
    "sourceRecordIds": [
      "c5e55508-8f59-4c68-a5b5-7f5b2b7df078"
    ],
    "name": "Reverse Grip Cable Curl",
    "categories": [
      "Forearms"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/forearms/reverse-grip-cable-curl",
    "sourcePages": {
      "Forearms": "https://smartworkout.app/en/exercise-library/forearms/reverse-grip-cable-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/c25969fc-9193-4e12-a1d2-dbf1aeffc1ce.mp4",
    "mediaPath": "/exercises/reverse-grip-cable-curl.mp4"
  },
  {
    "slug": "reverse-hand-push-up",
    "sourceSlug": "reverse-hand-push-up",
    "sourceRecordIds": [
      "fbf45029-6a73-423f-b6df-c6d494f8c2a9"
    ],
    "name": "Reverse Hand Push-Up",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/reverse-hand-push-up",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/reverse-hand-push-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/5ce1c351-558a-4f7b-8459-877fe9e54fd6.mp4",
    "mediaPath": "/exercises/reverse-hand-push-up.mp4"
  },
  {
    "slug": "reverse-nordic-curl",
    "sourceSlug": "reverse-nordic-curl",
    "sourceRecordIds": [
      "dabbc3d1-7cfc-4031-8224-9836ec7725e6"
    ],
    "name": "Reverse Nordic Curl",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/reverse-nordic-curl",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/reverse-nordic-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/9c940613-f1ee-435e-8f81-b8895854ef48.mp4",
    "mediaPath": "/exercises/reverse-nordic-curl.mp4"
  },
  {
    "slug": "reverse-wrist-push-up",
    "sourceSlug": "reverse-wrist-push-up",
    "sourceRecordIds": [
      "04bb3bb4-e60d-4122-b1a6-771c2a4a5b59"
    ],
    "name": "Reverse Wrist Push-Up",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/reverse-wrist-push-up",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/reverse-wrist-push-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/f5d0f893-be62-47b0-bef9-a87179120f8f.mp4",
    "mediaPath": "/exercises/reverse-wrist-push-up.mp4"
  },
  {
    "slug": "ring-dips",
    "sourceSlug": "ring-dips",
    "sourceRecordIds": [
      "82026f2f-2c3a-4a96-81ec-95cab56fd8fc"
    ],
    "name": "Ring Dips",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/ring-dips",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/ring-dips"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/3aa98cd7-48fe-4447-81fa-35f4427be512.mp4",
    "mediaPath": "/exercises/ring-dips.mp4"
  },
  {
    "slug": "ring-face-pull",
    "sourceSlug": "ring-face-pull",
    "sourceRecordIds": [
      "7f6833fb-34c3-4b13-bb42-61b8524a5c09"
    ],
    "name": "Ring Face Pull",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/ring-face-pull",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/ring-face-pull"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/8850cb10-49ed-422c-bb72-d1bb5a391988.mp4",
    "mediaPath": "/exercises/ring-face-pull.mp4"
  },
  {
    "slug": "ring-leg-curl",
    "sourceSlug": "ring-leg-curl",
    "sourceRecordIds": [
      "f8415c81-7b41-4102-9a98-5fadaabded3d"
    ],
    "name": "Ring Leg Curl",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/ring-leg-curl",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/ring-leg-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/1541f6b9-f896-4f78-8b35-26395243006b.mp4",
    "mediaPath": "/exercises/ring-leg-curl.mp4"
  },
  {
    "slug": "ring-muscle-up",
    "sourceSlug": "ring-muscle-up",
    "sourceRecordIds": [
      "2463cfae-b1dc-4f38-af0a-544002d6fbc2"
    ],
    "name": "Ring Muscle Up",
    "categories": [
      "Biceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/biceps/ring-muscle-up",
    "sourcePages": {
      "Biceps": "https://smartworkout.app/en/exercise-library/biceps/ring-muscle-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/04de6d2c-67a7-4363-91aa-bd7b3c44abca.mp4",
    "mediaPath": "/exercises/ring-muscle-up.mp4"
  },
  {
    "slug": "ring-pike",
    "sourceSlug": "ring-pike",
    "sourceRecordIds": [
      "5bf96492-da9d-4c59-a664-61f5091dae04"
    ],
    "name": "Ring Pike",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/ring-pike",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/ring-pike"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/ebbcf538-652e-428d-a244-b1358f763670.mp4",
    "mediaPath": "/exercises/ring-pike.mp4"
  },
  {
    "slug": "ring-push-up",
    "sourceSlug": "ring-push-up",
    "sourceRecordIds": [
      "bc1b689d-6228-43bd-8e9e-d135b1e55807"
    ],
    "name": "Ring Push-Up",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/ring-push-up",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/ring-push-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/dad1b2b1-cb9f-4b6f-9725-2548443f1872.mp4",
    "mediaPath": "/exercises/ring-push-up.mp4"
  },
  {
    "slug": "ring-triceps-extension",
    "sourceSlug": "ring-triceps-extension",
    "sourceRecordIds": [
      "47129c4d-735d-42da-897a-6346b2ec80ca"
    ],
    "name": "Ring Triceps Extension",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/ring-triceps-extension",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/ring-triceps-extension"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/4ad1984a-585d-4916-ac92-13473261eff2.mp4",
    "mediaPath": "/exercises/ring-triceps-extension.mp4"
  },
  {
    "slug": "rings-pull-up",
    "sourceSlug": "rings-pull-up",
    "sourceRecordIds": [
      "7cb4fd38-5ca9-4d65-a5df-f8a0b3288fbc"
    ],
    "name": "Rings Pull-Up",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/rings-pull-up",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/rings-pull-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/07b3da97-8101-4701-9932-f0ccdafec332.mp4",
    "mediaPath": "/exercises/rings-pull-up.mp4"
  },
  {
    "slug": "rocking-frog",
    "sourceSlug": "rocking-frog",
    "sourceRecordIds": [
      "b3e21bcc-e194-4323-a27c-7e960c617bea"
    ],
    "name": "Rocking Frog",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/rocking-frog",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/rocking-frog"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/47e66bbf-b52a-4510-9a98-80d6e0421da7.mp4",
    "mediaPath": "/exercises/rocking-frog.mp4"
  },
  {
    "slug": "rocking-half-frog-stretch",
    "sourceSlug": "rocking-half-frog-stretch",
    "sourceRecordIds": [
      "02be3155-246f-4620-be93-dbd682d3fbca"
    ],
    "name": "Rocking Half Frog Stretch",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/rocking-half-frog-stretch",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/rocking-half-frog-stretch"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/2d5cc9be-ac8c-45ae-821b-ee35a1937ab3.mp4",
    "mediaPath": "/exercises/rocking-half-frog-stretch.mp4"
  },
  {
    "slug": "roll-calves",
    "sourceSlug": "roll-calves",
    "sourceRecordIds": [
      "f1afe248-38b7-4489-8991-4d0acc5f4cd2"
    ],
    "name": "Roll Calves",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/roll-calves",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/roll-calves"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/da38e865-3b96-48a0-b4d3-767fe6ea1fee.mp4",
    "mediaPath": "/exercises/roll-calves.mp4"
  },
  {
    "slug": "roll-foot",
    "sourceSlug": "roll-foot",
    "sourceRecordIds": [
      "3a1fc73a-3f12-43bb-8f88-5e5b0d1443b8"
    ],
    "name": "Roll Foot",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/roll-foot",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/roll-foot"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/02470813-9726-427f-97b1-4de8a824714f.mp4",
    "mediaPath": "/exercises/roll-foot.mp4"
  },
  {
    "slug": "romanian-deadlift",
    "sourceSlug": "romanian-deadlift",
    "sourceRecordIds": [
      "bde8a221-1dd3-40ec-bf89-b26d8e991b77"
    ],
    "name": "Romanian Deadlift",
    "categories": [
      "Gluteal"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/gluteus/romanian-deadlift",
    "sourcePages": {
      "Gluteal": "https://smartworkout.app/en/exercise-library/gluteus/romanian-deadlift"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/5fe03c5a-63ef-4cb9-9721-e7361ab7abe8.mp4",
    "mediaPath": "/exercises/romanian-deadlift.mp4"
  },
  {
    "slug": "rope-cable-hammer-curl",
    "sourceSlug": "rope-cable-hammer-curl",
    "sourceRecordIds": [
      "f3bb1cb2-a42a-bb35-4e66-d7389eec88c1"
    ],
    "name": "Rope Cable Hammer Curl",
    "categories": [
      "Biceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/biceps/rope-cable-hammer-curl",
    "sourcePages": {
      "Biceps": "https://smartworkout.app/en/exercise-library/biceps/rope-cable-hammer-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/d369166b-0da4-4264-a714-e4e63de71a69.mp4",
    "mediaPath": "/exercises/rope-cable-hammer-curl.mp4"
  },
  {
    "slug": "rope-straight-arm-lat-pulldown",
    "sourceSlug": "rope-straight-arm-lat-pulldown",
    "sourceRecordIds": [
      "1a9dfa03-6633-4c8e-830e-1c5928b8c0d7"
    ],
    "name": "Rope Straight-Arm Lat Pulldown",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/rope-straight-arm-lat-pulldown",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/rope-straight-arm-lat-pulldown"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/efd0f686-d089-4924-9ea5-2a8408e7b2df.mp4",
    "mediaPath": "/exercises/rope-straight-arm-lat-pulldown.mp4"
  },
  {
    "slug": "rope-triceps-pushdown",
    "sourceSlug": "rope-triceps-pushdown",
    "sourceRecordIds": [
      "fe01e50a-b97c-4bb7-87f2-bed05cfa2445"
    ],
    "name": "Rope Triceps Pushdown",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/rope-triceps-pushdown",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/rope-triceps-pushdown"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/5b3b82b1-8d1d-41e0-b6f7-37c0f3bbf7e9.mp4",
    "mediaPath": "/exercises/rope-triceps-pushdown.mp4"
  },
  {
    "slug": "rotary-calf-raise",
    "sourceSlug": "rotary-calf-raise",
    "sourceRecordIds": [
      "5d7f0882-cb58-4a57-8a64-9c59fb4f81be"
    ],
    "name": "Rotary Calf Raise",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/rotary-calf-raise",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/rotary-calf-raise"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/1cbd5faf-3112-4aff-b9ba-226000014936.mp4",
    "mediaPath": "/exercises/rotary-calf-raise.mp4"
  },
  {
    "slug": "rotary-torso",
    "sourceSlug": "rotary-torso",
    "sourceRecordIds": [
      "0ad57432-b306-46f9-a486-635db0a1080c"
    ],
    "name": "Rotary Torso",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/rotary-torso",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/rotary-torso"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/917556dd-d0c0-44f6-86b1-862ed6a9fb86.mp4",
    "mediaPath": "/exercises/rotary-torso.mp4"
  },
  {
    "slug": "rowing-machine",
    "sourceSlug": "rowing-machine",
    "sourceRecordIds": [
      "7ce5e3ff-7276-41cd-8a14-41e33ab76ddc"
    ],
    "name": "Rowing Machine",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/rowing-machine",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/rowing-machine"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/530f6d88-7795-4bde-bd76-c95f480a8955.mp4",
    "mediaPath": "/exercises/rowing-machine.mp4"
  },
  {
    "slug": "running",
    "sourceSlug": "running",
    "sourceRecordIds": [
      "fb42b833-a9f4-4a13-8e57-78a95dc184c8"
    ],
    "name": "Running",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/running",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/running"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/30555cfa-cc20-45ca-8055-07a22ef9fbc2.mp4",
    "mediaPath": "/exercises/running.mp4"
  },
  {
    "slug": "saw-plank",
    "sourceSlug": "saw-plank",
    "sourceRecordIds": [
      "afe0d300-093b-44d2-b258-0d2a431954e4"
    ],
    "name": "Saw Plank",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/saw-plank",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/saw-plank"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/bad31854-ef98-4b52-9d65-ad81674be243.mp4",
    "mediaPath": "/exercises/saw-plank.mp4"
  },
  {
    "slug": "scapula-push-up",
    "sourceSlug": "scapula-push-up",
    "sourceRecordIds": [
      "41162b76-a99a-4188-88c3-7fd27abc78ce"
    ],
    "name": "Scapula Push-Up",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/scapula-push-up",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/scapula-push-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/832436df-9b3d-4873-9d1f-b399f2ff003f.mp4",
    "mediaPath": "/exercises/scapula-push-up.mp4"
  },
  {
    "slug": "scissors",
    "sourceSlug": "scissors",
    "sourceRecordIds": [
      "48d72616-f5df-4299-b159-93112687ec01"
    ],
    "name": "Scissors",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/scissors",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/scissors"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/934ab0d3-03a6-4be7-9c7b-7c6392a3a5fd.mp4",
    "mediaPath": "/exercises/scissors.mp4"
  },
  {
    "slug": "seal-row",
    "sourceSlug": "seal-row",
    "sourceRecordIds": [
      "7e2b3c1c-97db-405e-b9ca-e6ebdc5db673"
    ],
    "name": "Seal Row",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/seal-row",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/seal-row"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/6c6603d9-c72c-46f8-81ac-ef77425475bd.mp4",
    "mediaPath": "/exercises/seal-row.mp4"
  },
  {
    "slug": "seated-ab-cable-crunch",
    "sourceSlug": "seated-ab-cable-crunch",
    "sourceRecordIds": [
      "cb4adf67-8fc7-4fee-b077-0971132d0c9a"
    ],
    "name": "Seated Ab Cable Crunch",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/seated-ab-cable-crunch",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/seated-ab-cable-crunch"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/93de91b8-220c-4325-83dd-9aacc43d46f7.mp4",
    "mediaPath": "/exercises/seated-ab-cable-crunch.mp4"
  },
  {
    "slug": "seated-alternate-crunches",
    "sourceSlug": "seated-alternate-crunches",
    "sourceRecordIds": [
      "26f02fe3-fdeb-4e1d-97d4-5c39f4af9c0b"
    ],
    "name": "Seated Alternate Crunches",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/seated-alternate-crunches",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/seated-alternate-crunches"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/77a673ce-4b7a-4f7c-ad26-d68d9920b500.mp4",
    "mediaPath": "/exercises/seated-alternate-crunches.mp4"
  },
  {
    "slug": "seated-arnold-dumbbell-press",
    "sourceSlug": "seated-arnold-dumbbell-press",
    "sourceRecordIds": [
      "94c21e20-4a05-866d-b727-5c67cca61b47"
    ],
    "name": "Seated Arnold Dumbbell Press",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/seated-arnold-dumbbell-press",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/seated-arnold-dumbbell-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/852a5e98-05f6-43cf-9c5b-ab4a1ac7b430.mp4",
    "mediaPath": "/exercises/seated-arnold-dumbbell-press.mp4"
  },
  {
    "slug": "seated-band-hip-abduction",
    "sourceSlug": "seated-band-hip-abduction",
    "sourceRecordIds": [
      "38938cf9-f0b8-4894-9393-ce7ed9a4e28e"
    ],
    "name": "Seated Band Hip Abduction",
    "categories": [
      "Gluteal"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/gluteus/seated-band-hip-abduction",
    "sourcePages": {
      "Gluteal": "https://smartworkout.app/en/exercise-library/gluteus/seated-band-hip-abduction"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/a0ed4817-1dbd-49fd-90ae-ca97c2f4ef46.mp4",
    "mediaPath": "/exercises/seated-band-hip-abduction.mp4"
  },
  {
    "slug": "seated-barbell-shoulder-press",
    "sourceSlug": "seated-barbell-shoulder-press",
    "sourceRecordIds": [
      "f6b447b8-ddb6-a278-8b64-aa5ea715ef82"
    ],
    "name": "Seated Barbell Shoulder Press",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/seated-barbell-shoulder-press",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/seated-barbell-shoulder-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/1d1db66c-c992-4878-96a8-6581de5079e6.mp4",
    "mediaPath": "/exercises/seated-barbell-shoulder-press.mp4"
  },
  {
    "slug": "seated-barbell-twist",
    "sourceSlug": "seated-barbell-twist",
    "sourceRecordIds": [
      "f840c38e-9b55-493d-9350-eab5a6d67483"
    ],
    "name": "Seated Barbell Twist",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/seated-barbell-twist",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/seated-barbell-twist"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/fd9ade9d-d982-4f3c-9a31-42103315bbac.mp4",
    "mediaPath": "/exercises/seated-barbell-twist.mp4"
  },
  {
    "slug": "seated-bent-over-dumbbell-lateral-raise",
    "sourceSlug": "seated-bent-over-dumbbell-lateral-raise",
    "sourceRecordIds": [
      "a95a114d-0ac6-13ac-2650-6442fd9c85af"
    ],
    "name": "Seated Bent Over Dumbbell Lateral Raise",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/seated-bent-over-dumbbell-lateral-raise",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/seated-bent-over-dumbbell-lateral-raise"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/a4b7f356-3602-444e-8a36-492905895b6a.mp4",
    "mediaPath": "/exercises/seated-bent-over-dumbbell-lateral-raise.mp4"
  },
  {
    "slug": "seated-cable-chest-press",
    "sourceSlug": "seated-cable-chest-press",
    "sourceRecordIds": [
      "baf42461-446f-423b-aafc-551d90d7f03b"
    ],
    "name": "Seated Cable Chest Press",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/seated-cable-chest-press",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/seated-cable-chest-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/094a5e9b-b0e4-41fd-b1f4-9f8d02469a97.mp4",
    "mediaPath": "/exercises/seated-cable-chest-press.mp4"
  },
  {
    "slug": "seated-cable-fly",
    "sourceSlug": "seated-cable-fly",
    "sourceRecordIds": [
      "6ae119ae-5a82-47d2-b0c1-dc5a0ca91403"
    ],
    "name": "Seated Cable Fly",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/seated-cable-fly",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/seated-cable-fly"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/9439b214-486d-4113-9609-7d3aadc864b7.mp4",
    "mediaPath": "/exercises/seated-cable-fly.mp4"
  },
  {
    "slug": "seated-cable-horizontal-french-press",
    "sourceSlug": "seated-cable-horizontal-french-press",
    "sourceRecordIds": [
      "d59fcd68-dfec-409d-a72b-2be41be7c594"
    ],
    "name": "Seated Cable Horizontal French Press",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/seated-cable-horizontal-french-press",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/seated-cable-horizontal-french-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/2a980c2f-e8f8-4719-83a6-40c2e87cc26b.mp4",
    "mediaPath": "/exercises/seated-cable-horizontal-french-press.mp4"
  },
  {
    "slug": "seated-cable-low-row-neutral-grip",
    "sourceSlug": "seated-cable-low-row-neutral-grip",
    "sourceRecordIds": [
      "c6c9eeca-3ee1-4a8b-b34a-496b35c5dd53"
    ],
    "name": "Seated Cable Low Row Neutral Grip",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/seated-cable-low-row-neutral-grip",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/seated-cable-low-row-neutral-grip"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/766c2565-2c05-4f70-bc15-4181fe51649d.mp4",
    "mediaPath": "/exercises/seated-cable-low-row-neutral-grip.mp4"
  },
  {
    "slug": "seated-cable-row",
    "sourceSlug": "seated-cable-row",
    "sourceRecordIds": [
      "1a335136-840a-4499-9778-4ddef29a6771"
    ],
    "name": "Seated Cable Row",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/seated-cable-row",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/seated-cable-row"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/24dba583-9cfe-41ea-96bf-8de95ddb2ec7.mp4",
    "mediaPath": "/exercises/seated-cable-row.mp4"
  },
  {
    "slug": "seated-cable-wide-grip-row",
    "sourceSlug": "seated-cable-wide-grip-row",
    "sourceRecordIds": [
      "13a0a404-a40c-4565-b125-29a3c83a2bd6"
    ],
    "name": "Seated Cable Wide Grip Row",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/seated-cable-wide-grip-row",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/seated-cable-wide-grip-row"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/fc6ec290-0fd3-4133-9901-ce9facb094eb.mp4",
    "mediaPath": "/exercises/seated-cable-wide-grip-row.mp4"
  },
  {
    "slug": "seated-cable-wrist-curl",
    "sourceSlug": "seated-cable-wrist-curl",
    "sourceRecordIds": [
      "d271435e-ad73-4dab-a3a8-3c171781c4a4"
    ],
    "name": "Seated Cable Wrist Curl",
    "categories": [
      "Forearms"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/forearms/seated-cable-wrist-curl",
    "sourcePages": {
      "Forearms": "https://smartworkout.app/en/exercise-library/forearms/seated-cable-wrist-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/5cfbf216-386b-4758-8f37-cdf95fa72e35.mp4",
    "mediaPath": "/exercises/seated-cable-wrist-curl.mp4"
  },
  {
    "slug": "seated-calf-raise",
    "sourceSlug": "seated-calf-raise",
    "sourceRecordIds": [
      "3f273f1e-db4b-6f02-e083-92cb6227f20a"
    ],
    "name": "Seated Calf Raise",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/seated-calf-raise",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/seated-calf-raise"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/162f4ec1-4427-40b4-b330-c0ea48733bd4.mp4",
    "mediaPath": "/exercises/seated-calf-raise.mp4"
  },
  {
    "slug": "seated-chest-clam",
    "sourceSlug": "seated-chest-clam",
    "sourceRecordIds": [
      "d5b46a95-9ed5-418d-b48e-cdea52e602b4"
    ],
    "name": "Seated Chest Clam",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/seated-chest-clam",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/seated-chest-clam"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/1ee153d8-7136-4ded-aa79-416a16b00aa1.mp4",
    "mediaPath": "/exercises/seated-chest-clam.mp4"
  },
  {
    "slug": "seated-cuban-press",
    "sourceSlug": "seated-cuban-press",
    "sourceRecordIds": [
      "1b12da4f-fdea-458c-a3dc-d630bc297639"
    ],
    "name": "Seated Cuban Press",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/seated-cuban-press",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/seated-cuban-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/a778189b-1ddf-47ec-8169-0f5335d26fb0.mp4",
    "mediaPath": "/exercises/seated-cuban-press.mp4"
  },
  {
    "slug": "seated-dip-machine",
    "sourceSlug": "seated-dip-machine",
    "sourceRecordIds": [
      "ef115bce-70a8-4db5-b917-3e9fc3a89d5c"
    ],
    "name": "Seated Dip Machine",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/seated-dip-machine",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/seated-dip-machine"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/c3ea9317-3cf5-4744-ab6d-3b1e356ef7d9.mp4",
    "mediaPath": "/exercises/seated-dip-machine.mp4"
  },
  {
    "slug": "seated-dumbbell-curl",
    "sourceSlug": "seated-dumbbell-curl",
    "sourceRecordIds": [
      "200cb09a-11e5-4a94-a38f-9e0e2bd0096f"
    ],
    "name": "Seated Dumbbell Curl",
    "categories": [
      "Biceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/biceps/seated-dumbbell-curl",
    "sourcePages": {
      "Biceps": "https://smartworkout.app/en/exercise-library/biceps/seated-dumbbell-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/19601110-2040-4b30-b647-38d336e67b33.mp4",
    "mediaPath": "/exercises/seated-dumbbell-curl.mp4"
  },
  {
    "slug": "seated-dumbbell-shoulder-press",
    "sourceSlug": "seated-dumbbell-shoulder-press",
    "sourceRecordIds": [
      "5b2bdea5-ceee-a837-596c-fd2f6138ffff"
    ],
    "name": "Seated Dumbbell Shoulder Press",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/seated-dumbbell-shoulder-press",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/seated-dumbbell-shoulder-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/4b524c2d-e6f6-4f01-8057-04afd34a6ea0.mp4",
    "mediaPath": "/exercises/seated-dumbbell-shoulder-press.mp4"
  },
  {
    "slug": "seated-dumbbell-shrugs",
    "sourceSlug": "seated-dumbbell-shrugs",
    "sourceRecordIds": [
      "66a6068b-f1aa-40b8-9f56-0359cc0573b1"
    ],
    "name": "Seated Dumbbell Shrugs",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/seated-dumbbell-shrugs",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/seated-dumbbell-shrugs"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/4f300cdf-5229-450c-b54f-659011a2b24f.mp4",
    "mediaPath": "/exercises/seated-dumbbell-shrugs.mp4"
  },
  {
    "slug": "seated-face-pull",
    "sourceSlug": "seated-face-pull",
    "sourceRecordIds": [
      "3c28f1b2-7cb3-4c6a-9d73-64730de893e6"
    ],
    "name": "Seated Face Pull",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/seated-face-pull",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/seated-face-pull"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/eec8fe12-c37f-4a2a-9000-cc1462f77835.mp4",
    "mediaPath": "/exercises/seated-face-pull.mp4"
  },
  {
    "slug": "seated-figure-4-stretch",
    "sourceSlug": "seated-figure-4-stretch",
    "sourceRecordIds": [
      "4ec535de-1f4a-451a-9dc5-dab2920b51f4"
    ],
    "name": "Seated Figure 4 Stretch",
    "categories": [
      "Gluteal"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/gluteus/seated-figure-4-stretch",
    "sourcePages": {
      "Gluteal": "https://smartworkout.app/en/exercise-library/gluteus/seated-figure-4-stretch"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/ba3a5039-28df-48ef-b44b-c18f89c05410.mp4",
    "mediaPath": "/exercises/seated-figure-4-stretch.mp4"
  },
  {
    "slug": "seated-flutter-kick",
    "sourceSlug": "seated-flutter-kick",
    "sourceRecordIds": [
      "a8c695a1-a954-4b58-8924-ab0689b255c1"
    ],
    "name": "Seated Flutter Kick",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/seated-flutter-kick",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/seated-flutter-kick"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/7fafdbf1-dc16-455c-8f2e-542e0b6686f3.mp4",
    "mediaPath": "/exercises/seated-flutter-kick.mp4"
  },
  {
    "slug": "seated-forward-fold",
    "sourceSlug": "seated-forward-fold",
    "sourceRecordIds": [
      "dfc3bc3e-7669-43ae-9462-06084ccc46d0"
    ],
    "name": "Seated Forward Fold",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/seated-forward-fold",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/seated-forward-fold"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/69547e07-9b40-426a-9bfe-364647086835.mp4",
    "mediaPath": "/exercises/seated-forward-fold.mp4"
  },
  {
    "slug": "seated-good-morning",
    "sourceSlug": "seated-good-morning",
    "sourceRecordIds": [
      "ecd73905-fd43-458c-bc6e-288a83dafbb9"
    ],
    "name": "Seated Good Morning",
    "categories": [
      "Gluteal"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/gluteus/seated-good-morning",
    "sourcePages": {
      "Gluteal": "https://smartworkout.app/en/exercise-library/gluteus/seated-good-morning"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/27a5d8a9-d2da-4ad2-ad3f-5a0445036ed3.mp4",
    "mediaPath": "/exercises/seated-good-morning.mp4"
  },
  {
    "slug": "seated-hammer-curl",
    "sourceSlug": "seated-hammer-curl",
    "sourceRecordIds": [
      "769f188b-41a3-40e4-aec4-f5980417e786"
    ],
    "name": "Seated Hammer Curl",
    "categories": [
      "Biceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/biceps/seated-hammer-curl",
    "sourcePages": {
      "Biceps": "https://smartworkout.app/en/exercise-library/biceps/seated-hammer-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/6e1bed1c-cbbc-4b8d-bedc-95e98afc5bad.mp4",
    "mediaPath": "/exercises/seated-hammer-curl.mp4"
  },
  {
    "slug": "seated-hip-abduction",
    "sourceSlug": "seated-hip-abduction",
    "sourceRecordIds": [
      "c0d708f6-00ab-118f-9f7d-e13f27e5458b"
    ],
    "name": "Seated Hip Abduction",
    "categories": [
      "Gluteal"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/gluteus/seated-hip-abduction",
    "sourcePages": {
      "Gluteal": "https://smartworkout.app/en/exercise-library/gluteus/seated-hip-abduction"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/c62558bf-df0f-4f89-b476-7003a5bfabc6.mp4",
    "mediaPath": "/exercises/seated-hip-abduction.mp4"
  },
  {
    "slug": "seated-hip-adduction",
    "sourceSlug": "seated-hip-adduction",
    "sourceRecordIds": [
      "142bd4e5-6755-42e2-83ad-cbfcf6388dab"
    ],
    "name": "Seated Hip Adduction",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/seated-hip-adduction",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/seated-hip-adduction"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/a4b1cb57-543c-4cbc-880a-8277129d06b7.mp4",
    "mediaPath": "/exercises/seated-hip-adduction.mp4"
  },
  {
    "slug": "seated-incline-biceps-curl",
    "sourceSlug": "seated-incline-biceps-curl",
    "sourceRecordIds": [
      "d56a3927-61c7-4b1f-9b49-09310388103a"
    ],
    "name": "Seated Incline Biceps Curl",
    "categories": [
      "Biceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/biceps/seated-incline-biceps-curl",
    "sourcePages": {
      "Biceps": "https://smartworkout.app/en/exercise-library/biceps/seated-incline-biceps-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/8b76c1d3-c2ca-4f5f-b01a-ee384e1ab289.mp4",
    "mediaPath": "/exercises/seated-incline-biceps-curl.mp4"
  },
  {
    "slug": "seated-leg-curl",
    "sourceSlug": "seated-leg-curl",
    "sourceRecordIds": [
      "3ae8ee86-534c-0824-07b6-e9f105b97c1d"
    ],
    "name": "Seated Leg Curl",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/seated-leg-curl",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/seated-leg-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/1b19271e-8604-46d5-94a5-6e1fb99b125b.mp4",
    "mediaPath": "/exercises/seated-leg-curl.mp4"
  },
  {
    "slug": "seated-leg-extension-machine",
    "sourceSlug": "seated-leg-extension-machine",
    "sourceRecordIds": [
      "8fd1b9d5-ad0c-8fa5-da97-dcb248588ef5"
    ],
    "name": "Seated Leg Extension Machine",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/seated-leg-extension-machine",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/seated-leg-extension-machine"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/10ec53eb-72f0-4335-b81c-8302db893bed.mp4",
    "mediaPath": "/exercises/seated-leg-extension-machine.mp4"
  },
  {
    "slug": "seated-leg-raise",
    "sourceSlug": "seated-leg-raise",
    "sourceRecordIds": [
      "91bdce20-29e2-40df-9aa3-7b16adb396d7"
    ],
    "name": "Seated Leg Raise",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/seated-leg-raise",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/seated-leg-raise"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/9a715b23-65b7-4eb9-9943-1e0642f45ee8.mp4",
    "mediaPath": "/exercises/seated-leg-raise.mp4"
  },
  {
    "slug": "seated-machine-trunk-rotation",
    "sourceSlug": "seated-machine-trunk-rotation",
    "sourceRecordIds": [
      "8f86a994-5d86-423c-a395-55122f54de34"
    ],
    "name": "Seated Machine Trunk Rotation",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/seated-machine-trunk-rotation",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/seated-machine-trunk-rotation"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/7d5ddf56-3bbc-4c6b-ad30-9771a3957e56.mp4",
    "mediaPath": "/exercises/seated-machine-trunk-rotation.mp4"
  },
  {
    "slug": "seated-reverse-circle-crunches",
    "sourceSlug": "seated-reverse-circle-crunches",
    "sourceRecordIds": [
      "618813bd-86d3-4bed-9881-5d03342d37ae"
    ],
    "name": "Seated Reverse Circle Crunches",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/seated-reverse-circle-crunches",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/seated-reverse-circle-crunches"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/3689899e-a447-4e2a-a82e-965469c4687a.mp4",
    "mediaPath": "/exercises/seated-reverse-circle-crunches.mp4"
  },
  {
    "slug": "seated-shoulder-external-rotation",
    "sourceSlug": "seated-shoulder-external-rotation",
    "sourceRecordIds": [
      "77e949b2-df71-4560-b72c-f79eaa7966dc"
    ],
    "name": "Seated Shoulder External Rotation",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/seated-shoulder-external-rotation",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/seated-shoulder-external-rotation"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/a682813c-b2be-44d2-9f83-d2fdcc337222.mp4",
    "mediaPath": "/exercises/seated-shoulder-external-rotation.mp4"
  },
  {
    "slug": "seated-shoulder-press-neutral-grip",
    "sourceSlug": "seated-shoulder-press-neutral-grip",
    "sourceRecordIds": [
      "d37cc65e-3c18-4e39-8ea2-200c4f20e348"
    ],
    "name": "Seated Shoulder Press Neutral Grip",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/seated-shoulder-press-neutral-grip",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/seated-shoulder-press-neutral-grip"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/3f390c7d-ccc9-4c71-9eed-2209f72fd8fa.mp4",
    "mediaPath": "/exercises/seated-shoulder-press-neutral-grip.mp4"
  },
  {
    "slug": "seated-single-leg-curl",
    "sourceSlug": "seated-single-leg-curl",
    "sourceRecordIds": [
      "9202e88a-111c-40f8-8464-d567a7fff830"
    ],
    "name": "Seated Single Leg Curl",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/seated-single-leg-curl",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/seated-single-leg-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/e207b759-a36b-4eb6-aa2a-71a002685a7e.mp4",
    "mediaPath": "/exercises/seated-single-leg-curl.mp4"
  },
  {
    "slug": "seated-single-leg-hamstring-stretch",
    "sourceSlug": "seated-single-leg-hamstring-stretch",
    "sourceRecordIds": [
      "085df570-92e9-46b5-ad8c-fd6650a4a498"
    ],
    "name": "Seated Single Leg Hamstring Stretch",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/seated-single-leg-hamstring-stretch",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/seated-single-leg-hamstring-stretch"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/d3b31035-9680-437b-a9e3-3e8a03a95321.mp4",
    "mediaPath": "/exercises/seated-single-leg-hamstring-stretch.mp4"
  },
  {
    "slug": "seated-triceps-bench-dip",
    "sourceSlug": "seated-triceps-bench-dip",
    "sourceRecordIds": [
      "7c3c787d-e438-4f50-bde7-cc5843f84fdd"
    ],
    "name": "Seated Triceps Bench Dip",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/seated-triceps-bench-dip",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/seated-triceps-bench-dip"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/530df2f4-d7c1-4ca6-ba8a-b9b689fbf4d7.mp4",
    "mediaPath": "/exercises/seated-triceps-bench-dip.mp4"
  },
  {
    "slug": "shoulder-tap",
    "sourceSlug": "shoulder-tap",
    "sourceRecordIds": [
      "b31f3da6-b239-41c0-9662-f0a8996868c6"
    ],
    "name": "Shoulder Tap",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/shoulder-tap",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/shoulder-tap"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/6f080c8e-fe03-4783-bb2b-d816956111eb.mp4",
    "mediaPath": "/exercises/shoulder-tap.mp4"
  },
  {
    "slug": "shoulderstand-pose",
    "sourceSlug": "shoulderstand-pose",
    "sourceRecordIds": [
      "78f3c17f-0146-4bf6-a8f1-a45843f99ba3"
    ],
    "name": "Shoulderstand Pose",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/shoulderstand-pose",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/shoulderstand-pose"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/03a8d199-c270-4632-9ebb-2ba9f97714c7.mp4",
    "mediaPath": "/exercises/shoulderstand-pose.mp4"
  },
  {
    "slug": "side-crunch",
    "sourceSlug": "side-crunch",
    "sourceRecordIds": [
      "9a2d3693-68bc-4d44-852a-fbe16337f521"
    ],
    "name": "Side Crunch",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/side-crunch",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/side-crunch"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/4ede9603-15f3-4af1-82e4-51c799dce69e.mp4",
    "mediaPath": "/exercises/side-crunch.mp4"
  },
  {
    "slug": "side-leg-swings",
    "sourceSlug": "side-leg-swings",
    "sourceRecordIds": [
      "e0ef2970-5221-4b13-a4e6-b56a0af148f1"
    ],
    "name": "Side Leg Swings",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/side-leg-swings",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/side-leg-swings"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/58c24967-19cb-4ae5-a982-84d7e9c70bff.mp4",
    "mediaPath": "/exercises/side-leg-swings.mp4"
  },
  {
    "slug": "side-lunges",
    "sourceSlug": "side-lunges",
    "sourceRecordIds": [
      "7cd5b83e-c3b4-4198-9279-01a3a3df4f18"
    ],
    "name": "Side Lunges",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/side-lunges",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/side-lunges"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/303e9fb8-4337-4855-be14-1ca06e5685de.mp4",
    "mediaPath": "/exercises/side-lunges.mp4"
  },
  {
    "slug": "side-lying-hip-abduction",
    "sourceSlug": "side-lying-hip-abduction",
    "sourceRecordIds": [
      "793e9f35-ce3c-4d2d-87b8-5b6955ac5279"
    ],
    "name": "Side Lying Hip Abduction",
    "categories": [
      "Gluteal"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/gluteus/side-lying-hip-abduction",
    "sourcePages": {
      "Gluteal": "https://smartworkout.app/en/exercise-library/gluteus/side-lying-hip-abduction"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/0a5467d7-1cf0-4240-90dd-963fc3a02f55.mp4",
    "mediaPath": "/exercises/side-lying-hip-abduction.mp4"
  },
  {
    "slug": "side-lying-quadriceps-stretch",
    "sourceSlug": "side-lying-quadriceps-stretch",
    "sourceRecordIds": [
      "abefa761-e360-4522-b9cb-98982266c699"
    ],
    "name": "Side Lying Quadriceps Stretch",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/side-lying-quadriceps-stretch",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/side-lying-quadriceps-stretch"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/62486c58-a28d-46c6-9b08-26e6d173eb4d.mp4",
    "mediaPath": "/exercises/side-lying-quadriceps-stretch.mp4"
  },
  {
    "slug": "side-plank",
    "sourceSlug": "side-plank",
    "sourceRecordIds": [
      "aaed90b1-e560-4b16-8011-494f75522f3a"
    ],
    "name": "Side Plank",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/side-plank",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/side-plank"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/f9ceb2e1-f7ba-4954-8cb7-78d6b60858fc.mp4",
    "mediaPath": "/exercises/side-plank.mp4"
  },
  {
    "slug": "side-plank-clamshell",
    "sourceSlug": "side-plank-clamshell",
    "sourceRecordIds": [
      "dc62d95f-c818-41a6-b97a-b035983cd42a"
    ],
    "name": "Side Plank Clamshell",
    "categories": [
      "Gluteal"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/gluteus/side-plank-clamshell",
    "sourcePages": {
      "Gluteal": "https://smartworkout.app/en/exercise-library/gluteus/side-plank-clamshell"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/e60685e7-de17-4427-b94c-612a06c56f55.mp4",
    "mediaPath": "/exercises/side-plank-clamshell.mp4"
  },
  {
    "slug": "side-plank-hip-abduction",
    "sourceSlug": "side-plank-hip-abduction",
    "sourceRecordIds": [
      "59c152a9-7463-4c6d-888b-4a989399242e"
    ],
    "name": "Side Plank Hip Abduction",
    "categories": [
      "Gluteal"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/gluteus/side-plank-hip-abduction",
    "sourcePages": {
      "Gluteal": "https://smartworkout.app/en/exercise-library/gluteus/side-plank-hip-abduction"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/b69a962b-2f68-4bb6-ba46-1b722ba57b6f.mp4",
    "mediaPath": "/exercises/side-plank-hip-abduction.mp4"
  },
  {
    "slug": "single-dumbbell-curl",
    "sourceSlug": "single-dumbbell-curl",
    "sourceRecordIds": [
      "26268881-afd6-445d-9a8b-a149d8dafdaa"
    ],
    "name": "Single Dumbbell Curl",
    "categories": [
      "Biceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/biceps/single-dumbbell-curl",
    "sourcePages": {
      "Biceps": "https://smartworkout.app/en/exercise-library/biceps/single-dumbbell-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/ce242305-ce47-4129-8437-24d7fb78631d.mp4",
    "mediaPath": "/exercises/single-dumbbell-curl.mp4"
  },
  {
    "slug": "single-leg-box-jump",
    "sourceSlug": "single-leg-box-jump",
    "sourceRecordIds": [
      "ce8d4c15-8a34-441b-ac87-7b94dc57c220"
    ],
    "name": "Single-Leg Box Jump",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/single-leg-box-jump",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/single-leg-box-jump"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/130ca241-a71a-47a9-a116-df23353371af.mp4",
    "mediaPath": "/exercises/single-leg-box-jump.mp4"
  },
  {
    "slug": "single-leg-cable-leg-curl",
    "sourceSlug": "single-leg-cable-leg-curl",
    "sourceRecordIds": [
      "a34aa557-2803-46e5-8737-a6ff91d32045"
    ],
    "name": "Single-Leg Cable Leg Curl",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/single-leg-cable-leg-curl",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/single-leg-cable-leg-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/3dfb6125-e531-4536-84f3-c737e1e9ea89.mp4",
    "mediaPath": "/exercises/single-leg-cable-leg-curl.mp4"
  },
  {
    "slug": "single-leg-calf-raise",
    "sourceSlug": "single-leg-calf-raise",
    "sourceRecordIds": [
      "5bd74809-7a6d-4265-80f1-fc20144a7ebb"
    ],
    "name": "Single-Leg Calf Raise",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/single-leg-calf-raise",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/single-leg-calf-raise"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/c0dca8a0-f2b2-4053-b8e8-e5d838c913c9.mp4",
    "mediaPath": "/exercises/single-leg-calf-raise.mp4"
  },
  {
    "slug": "single-leg-calf-raise-with-dumbbell",
    "sourceSlug": "single-leg-calf-raise-with-dumbbell",
    "sourceRecordIds": [
      "2187784c-77b0-4106-9b6f-cd5938da82b8"
    ],
    "name": "Single-Leg Calf Raise with Dumbbell",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/single-leg-calf-raise-with-dumbbell",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/single-leg-calf-raise-with-dumbbell"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/883732d9-e87b-4440-ba3f-cec421177758.mp4",
    "mediaPath": "/exercises/single-leg-calf-raise-with-dumbbell.mp4"
  },
  {
    "slug": "single-leg-deadlift",
    "sourceSlug": "single-leg-deadlift",
    "sourceRecordIds": [
      "5ba385ff-a1f8-44d4-b3a9-f988d2a3ea75"
    ],
    "name": "Single-Leg Deadlift",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/single-leg-deadlift",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/single-leg-deadlift"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/e19ce929-9375-47fc-8da8-a19ae38ed460.mp4",
    "mediaPath": "/exercises/single-leg-deadlift.mp4"
  },
  {
    "slug": "single-leg-dumbbell-deadlift",
    "sourceSlug": "single-leg-dumbbell-deadlift",
    "sourceRecordIds": [
      "d15edf28-16b7-02a1-ef0a-1273df7fbee8"
    ],
    "name": "Single Leg Dumbbell Deadlift",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/single-leg-dumbbell-deadlift",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/single-leg-dumbbell-deadlift"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/b3afcd6d-2e91-4f77-8253-65574de589c3.mp4",
    "mediaPath": "/exercises/single-leg-dumbbell-deadlift.mp4"
  },
  {
    "slug": "single-leg-extension",
    "sourceSlug": "single-leg-extension",
    "sourceRecordIds": [
      "f509cfcd-6baf-4b6e-8210-1bf2b574efa5"
    ],
    "name": "Single-Leg Extension",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/single-leg-extension",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/single-leg-extension"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/9a8e775a-0093-49e4-b914-af2637dd67bb.mp4",
    "mediaPath": "/exercises/single-leg-extension.mp4"
  },
  {
    "slug": "single-leg-lying-curl",
    "sourceSlug": "single-leg-lying-curl",
    "sourceRecordIds": [
      "c72d1396-05a3-4254-a62e-dbbba9813472"
    ],
    "name": "Single-Leg Lying Curl",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/single-leg-lying-curl",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/single-leg-lying-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/78b831a4-0bd1-43cd-ba7b-98ddfe2d2fa7.mp4",
    "mediaPath": "/exercises/single-leg-lying-curl.mp4"
  },
  {
    "slug": "single-leg-press",
    "sourceSlug": "single-leg-press",
    "sourceRecordIds": [
      "430f3cd3-934c-496d-b4e0-40daceb5c166"
    ],
    "name": "Single Leg Press",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/single-leg-press",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/single-leg-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/354c350e-cfd2-4d62-b73a-b0e90132499f.mp4",
    "mediaPath": "/exercises/single-leg-press.mp4"
  },
  {
    "slug": "single-leg-romanian-deadlift",
    "sourceSlug": "single-leg-romanian-deadlift",
    "sourceRecordIds": [
      "45c3ad61-7849-4169-9f03-de68c12aa4b9"
    ],
    "name": "Single Leg Romanian Deadlift",
    "categories": [
      "Gluteal"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/gluteus/single-leg-romanian-deadlift",
    "sourcePages": {
      "Gluteal": "https://smartworkout.app/en/exercise-library/gluteus/single-leg-romanian-deadlift"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/a20d845c-3a0f-45f2-a3e0-826e0dd6c00c.mp4",
    "mediaPath": "/exercises/single-leg-romanian-deadlift.mp4"
  },
  {
    "slug": "single-leg-seated-calf-machine-raise",
    "sourceSlug": "single-leg-seated-calf-machine-raise",
    "sourceRecordIds": [
      "6215e01e-da84-4349-8967-2169e082f469"
    ],
    "name": "Single Leg Seated Calf Machine Raise",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/single-leg-seated-calf-machine-raise",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/single-leg-seated-calf-machine-raise"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/92d6c057-a7e6-4ccc-8d37-2dd6a05f1fcf.mp4",
    "mediaPath": "/exercises/single-leg-seated-calf-machine-raise.mp4"
  },
  {
    "slug": "single-leg-seated-calf-raise-with-dumbbell",
    "sourceSlug": "single-leg-seated-calf-raise-with-dumbbell",
    "sourceRecordIds": [
      "d9710b8d-882f-450b-978a-b342dce66e90"
    ],
    "name": "Single-Leg Seated Calf Raise with Dumbbell",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/single-leg-seated-calf-raise-with-dumbbell",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/single-leg-seated-calf-raise-with-dumbbell"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/59f2e347-fb5b-4384-bb24-1c91293b3348.mp4",
    "mediaPath": "/exercises/single-leg-seated-calf-raise-with-dumbbell.mp4"
  },
  {
    "slug": "single-leg-smith-calf-raise",
    "sourceSlug": "single-leg-smith-calf-raise",
    "sourceRecordIds": [
      "fa39a858-968d-4c38-ac0b-19c958c9dce6"
    ],
    "name": "Single Leg Smith Calf Raise",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/single-leg-smith-calf-raise",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/single-leg-smith-calf-raise"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/59c87ebc-8e70-4869-959a-25caaadb8663.mp4",
    "mediaPath": "/exercises/single-leg-smith-calf-raise.mp4"
  },
  {
    "slug": "single-leg-weighted-glute-bridge",
    "sourceSlug": "single-leg-weighted-glute-bridge",
    "sourceRecordIds": [
      "a8a21f5f-86b9-4898-b83f-b3c4bcb79a63"
    ],
    "name": "Single Leg Weighted Glute Bridge",
    "categories": [
      "Gluteal"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/gluteus/single-leg-weighted-glute-bridge",
    "sourcePages": {
      "Gluteal": "https://smartworkout.app/en/exercise-library/gluteus/single-leg-weighted-glute-bridge"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/2f64506a-4cf9-4103-8705-c691fa6d4c2b.mp4",
    "mediaPath": "/exercises/single-leg-weighted-glute-bridge.mp4"
  },
  {
    "slug": "sissy-squat",
    "sourceSlug": "sissy-squat",
    "sourceRecordIds": [
      "da1122db-5ae7-4a78-be7b-078f92bd5dda"
    ],
    "name": "Sissy Squat",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/sissy-squat",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/sissy-squat"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/041bce67-9e26-4486-865f-e94ea7d4eb20.mp4",
    "mediaPath": "/exercises/sissy-squat.mp4"
  },
  {
    "slug": "sit-up",
    "sourceSlug": "sit-up",
    "sourceRecordIds": [
      "57463e1d-1b6c-49c0-afa9-258a626a5b3b"
    ],
    "name": "Sit Up",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/sit-up",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/sit-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/a718bf85-e487-49ee-9c84-9c198ca3b432.mp4",
    "mediaPath": "/exercises/sit-up.mp4"
  },
  {
    "slug": "sitting-twist",
    "sourceSlug": "sitting-twist",
    "sourceRecordIds": [
      "0e833972-04f5-c0d4-c790-2400bfd748ca"
    ],
    "name": "Sitting Twist",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/sitting-twist",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/sitting-twist"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/7c798219-e8ec-4017-bfc4-b9aa10ef146b.mp4",
    "mediaPath": "/exercises/sitting-twist.mp4"
  },
  {
    "slug": "ski-ergometer",
    "sourceSlug": "ski-ergometer",
    "sourceRecordIds": [
      "8e408345-f873-4f50-82aa-65f99cd78af9"
    ],
    "name": "Ski Ergometer",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/ski-ergometer",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/ski-ergometer"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/5bf8b087-7c80-45bb-8c90-3af403f0ddd8.mp4",
    "mediaPath": "/exercises/ski-ergometer.mp4"
  },
  {
    "slug": "sliding-leg-curl",
    "sourceSlug": "sliding-leg-curl",
    "sourceRecordIds": [
      "01259ee3-bdff-47c4-b7dc-e5283ea89e01"
    ],
    "name": "Sliding Leg Curl",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/sliding-leg-curl",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/sliding-leg-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/57103c63-706f-4d7a-81b2-0415fac1727c.mp4",
    "mediaPath": "/exercises/sliding-leg-curl.mp4"
  },
  {
    "slug": "smith-bench-press",
    "sourceSlug": "smith-bench-press",
    "sourceRecordIds": [
      "5d581dce-e35e-45cc-94eb-f9bb8103a455"
    ],
    "name": "Smith Bench Press",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/smith-bench-press",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/smith-bench-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/9c1188ad-87fa-402f-9c6c-5e1e1a6f6ba4.mp4",
    "mediaPath": "/exercises/smith-bench-press.mp4"
  },
  {
    "slug": "smith-bent-over-row",
    "sourceSlug": "smith-bent-over-row",
    "sourceRecordIds": [
      "fcbf09e6-539f-4390-8434-d15d982d55d6"
    ],
    "name": "Smith Bent Over Row",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/smith-bent-over-row",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/smith-bent-over-row"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/ba80d928-9cd6-4820-92fc-be91145c29cf.mp4",
    "mediaPath": "/exercises/smith-bent-over-row.mp4"
  },
  {
    "slug": "smith-calf-raises",
    "sourceSlug": "smith-calf-raises",
    "sourceRecordIds": [
      "78659ec5-a814-4734-9e3d-ee3e784b71b3",
      "b7ec6aa3-d3da-4b35-974a-c50c7eb08794"
    ],
    "name": "Smith Calf Raises",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/smith-calf-raises",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/smith-calf-raises"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/9d9d595a-6020-4948-b7cb-e2215d94ef25.mp4",
    "mediaPath": "/exercises/smith-calf-raises.mp4"
  },
  {
    "slug": "smith-chair-squat",
    "sourceSlug": "smith-chair-squat",
    "sourceRecordIds": [
      "13cc32dc-dbee-4e85-b1e5-ee7fecdbb845"
    ],
    "name": "Smith Chair Squat",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/smith-chair-squat",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/smith-chair-squat"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/8fce8fa2-67a7-461d-901f-7c54d11c28df.mp4",
    "mediaPath": "/exercises/smith-chair-squat.mp4"
  },
  {
    "slug": "smith-front-squat",
    "sourceSlug": "smith-front-squat",
    "sourceRecordIds": [
      "b88ce237-ce60-4b9d-891d-a1d628983960"
    ],
    "name": "Smith Front Squat",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/smith-front-squat",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/smith-front-squat"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/abc86c91-411a-4aed-8864-091077c5f2bd.mp4",
    "mediaPath": "/exercises/smith-front-squat.mp4"
  },
  {
    "slug": "smith-hack-squat",
    "sourceSlug": "smith-hack-squat",
    "sourceRecordIds": [
      "61242c0e-4fdf-4e41-a4c8-f94caa17f568"
    ],
    "name": "Smith Hack Squat",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/smith-hack-squat",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/smith-hack-squat"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/e9a49586-7e96-4373-9813-0d146426f3c6.mp4",
    "mediaPath": "/exercises/smith-hack-squat.mp4"
  },
  {
    "slug": "smith-incline-chest-press",
    "sourceSlug": "smith-incline-chest-press",
    "sourceRecordIds": [
      "efa13a07-2158-4db6-9ebc-6e852ffa2aef"
    ],
    "name": "Smith Incline Chest Press",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/smith-incline-chest-press",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/smith-incline-chest-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/e576a629-7546-4b4d-98a3-51f73340c6dc.mp4",
    "mediaPath": "/exercises/smith-incline-chest-press.mp4"
  },
  {
    "slug": "smith-kneeling-hip-thrust",
    "sourceSlug": "smith-kneeling-hip-thrust",
    "sourceRecordIds": [
      "a73c52dc-e7cc-4775-8a59-5b2277bf9697"
    ],
    "name": "Smith Kneeling Hip Thrust",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/smith-kneeling-hip-thrust",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/smith-kneeling-hip-thrust"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/5e50d81b-14b3-4101-afe0-5c47ddfe370c.mp4",
    "mediaPath": "/exercises/smith-kneeling-hip-thrust.mp4"
  },
  {
    "slug": "smith-machibe-glute-kickback",
    "sourceSlug": "smith-machibe-glute-kickback",
    "sourceRecordIds": [
      "3dbb26db-032a-435d-9e0b-98c587fd4568"
    ],
    "name": "Smith Machibe Glute Kickback",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/smith-machibe-glute-kickback",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/smith-machibe-glute-kickback"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/57f7f0c5-0355-43de-b1ad-5a065aba75d1.mp4",
    "mediaPath": "/exercises/smith-machibe-glute-kickback.mp4"
  },
  {
    "slug": "smith-machine-good-morning",
    "sourceSlug": "smith-machine-good-morning",
    "sourceRecordIds": [
      "2d2291cc-8340-4667-80db-becf8e594b1b"
    ],
    "name": "Smith Machine Good Morning",
    "categories": [
      "Gluteal"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/gluteus/smith-machine-good-morning",
    "sourcePages": {
      "Gluteal": "https://smartworkout.app/en/exercise-library/gluteus/smith-machine-good-morning"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/0dfbc34e-703c-43ba-ae9d-25f8a5e85443.mp4",
    "mediaPath": "/exercises/smith-machine-good-morning.mp4"
  },
  {
    "slug": "smith-machine-upright-row",
    "sourceSlug": "smith-machine-upright-row",
    "sourceRecordIds": [
      "bbf7d889-640a-4032-ad12-7edceed931d3"
    ],
    "name": "Smith Machine Upright Row",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/smith-machine-upright-row",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/smith-machine-upright-row"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/13bd1488-1ec1-42ca-b5ce-d6f68a098e77.mp4",
    "mediaPath": "/exercises/smith-machine-upright-row.mp4"
  },
  {
    "slug": "smith-rear-lunge",
    "sourceSlug": "smith-rear-lunge",
    "sourceRecordIds": [
      "c49da46d-cb8f-4a5b-b948-94208d9880e5"
    ],
    "name": "Smith Rear Lunge",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/smith-rear-lunge",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/smith-rear-lunge"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/e133134a-9818-418f-9031-03b425cb38db.mp4",
    "mediaPath": "/exercises/smith-rear-lunge.mp4"
  },
  {
    "slug": "smith-romanian-deadlift",
    "sourceSlug": "smith-romanian-deadlift",
    "sourceRecordIds": [
      "eccb443f-5efd-46ae-b522-a4b8a4066ce2"
    ],
    "name": "Smith Romanian Deadlift",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/smith-romanian-deadlift",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/smith-romanian-deadlift"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/3b4631d5-6ce6-4d34-aee5-c6f9e0fc8823.mp4",
    "mediaPath": "/exercises/smith-romanian-deadlift.mp4"
  },
  {
    "slug": "smith-seated-behind-neck-press",
    "sourceSlug": "smith-seated-behind-neck-press",
    "sourceRecordIds": [
      "845e552e-35b7-8fd4-8ecb-6c03874085cd"
    ],
    "name": "Smith Seated Behind Neck Press",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/smith-seated-behind-neck-press",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/smith-seated-behind-neck-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/8a35b285-2540-48a8-9c08-88e5fa08b8ee.mp4",
    "mediaPath": "/exercises/smith-seated-behind-neck-press.mp4"
  },
  {
    "slug": "smith-seated-calf-raise",
    "sourceSlug": "smith-seated-calf-raise",
    "sourceRecordIds": [
      "a55493ee-d268-48fb-8a06-1d39576058ad"
    ],
    "name": "Smith Seated Calf Raise",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/smith-seated-calf-raise",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/smith-seated-calf-raise"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/8d97d4cf-2337-498c-b8e7-19527e8a2ef2.mp4",
    "mediaPath": "/exercises/smith-seated-calf-raise.mp4"
  },
  {
    "slug": "smith-shoulder-press",
    "sourceSlug": "smith-shoulder-press",
    "sourceRecordIds": [
      "ef258e02-3b95-4569-9993-b34fabd06cd0"
    ],
    "name": "Smith Shoulder Press",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/smith-shoulder-press",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/smith-shoulder-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/8eb388e1-bcba-4008-a658-94173da9ac60.mp4",
    "mediaPath": "/exercises/smith-shoulder-press.mp4"
  },
  {
    "slug": "smith-shoulder-shrug",
    "sourceSlug": "smith-shoulder-shrug",
    "sourceRecordIds": [
      "759db4cc-b963-4f53-b512-aadcfe301c4f"
    ],
    "name": "Smith Shoulder Shrug",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/smith-shoulder-shrug",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/smith-shoulder-shrug"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/ca048f3f-7813-4368-8c5e-942aadeb98ae.mp4",
    "mediaPath": "/exercises/smith-shoulder-shrug.mp4"
  },
  {
    "slug": "smith-split-squat",
    "sourceSlug": "smith-split-squat",
    "sourceRecordIds": [
      "691ccaf0-29e9-433a-a849-f27b306b9bea"
    ],
    "name": "Smith Split Squat",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/smith-split-squat",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/smith-split-squat"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/45e984df-f5ad-4b9e-ba00-3e5c32fb619d.mp4",
    "mediaPath": "/exercises/smith-split-squat.mp4"
  },
  {
    "slug": "smith-squat",
    "sourceSlug": "smith-squat",
    "sourceRecordIds": [
      "4abb70b5-85d7-4650-b5ab-b6e32bb37fd8"
    ],
    "name": "Smith Squat",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/smith-squat",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/smith-squat"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/4cf150a0-8e80-4df1-b113-6865c66bcabd.mp4",
    "mediaPath": "/exercises/smith-squat.mp4"
  },
  {
    "slug": "smith-squat-to-bench",
    "sourceSlug": "smith-squat-to-bench",
    "sourceRecordIds": [
      "930a2eec-3f54-4039-ba9b-1560f6774af0"
    ],
    "name": "Smith Squat To Bench",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/smith-squat-to-bench",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/smith-squat-to-bench"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/5a5deab3-1144-45f7-a3fc-c72187844f3a.mp4",
    "mediaPath": "/exercises/smith-squat-to-bench.mp4"
  },
  {
    "slug": "smith-zercher-squat",
    "sourceSlug": "smith-zercher-squat",
    "sourceRecordIds": [
      "baa210b0-158a-4191-acff-8d7db7928a05"
    ],
    "name": "Smith Zercher Squat",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/smith-zercher-squat",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/smith-zercher-squat"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/cb990a74-bb47-4c1e-b09d-da66b5e98429.mp4",
    "mediaPath": "/exercises/smith-zercher-squat.mp4"
  },
  {
    "slug": "snatch",
    "sourceSlug": "snatch",
    "sourceRecordIds": [
      "1dd0ba84-d102-4e5a-ad25-58ebfa8edf9f"
    ],
    "name": "Snatch",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/snatch",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/snatch"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/f03197e6-375f-4bad-b34c-5dcf941c88d1.mp4",
    "mediaPath": "/exercises/snatch.mp4"
  },
  {
    "slug": "snatch-pull",
    "sourceSlug": "snatch-pull",
    "sourceRecordIds": [
      "69711e18-790f-475f-a845-29932f24c730"
    ],
    "name": "Snatch Pull",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/snatch-pull",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/snatch-pull"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/5788380a-7444-48dd-9714-e4c710075f44.mp4",
    "mediaPath": "/exercises/snatch-pull.mp4"
  },
  {
    "slug": "spider-hammer-curl",
    "sourceSlug": "spider-hammer-curl",
    "sourceRecordIds": [
      "221e8991-90d5-4398-b7df-09a42bc95502"
    ],
    "name": "Spider Hammer Curl",
    "categories": [
      "Biceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/biceps/spider-hammer-curl",
    "sourcePages": {
      "Biceps": "https://smartworkout.app/en/exercise-library/biceps/spider-hammer-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/c795f6c3-f7f3-49d4-b2f9-dd7769bc4715.mp4",
    "mediaPath": "/exercises/spider-hammer-curl.mp4"
  },
  {
    "slug": "split-squat",
    "sourceSlug": "split-squat",
    "sourceRecordIds": [
      "7eafba6a-d96a-4484-bc61-a6b44d2fcdeb"
    ],
    "name": "Split Squat",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/split-squat",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/split-squat"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/be7bd830-00ee-4786-92f6-f0b437dff54e.mp4",
    "mediaPath": "/exercises/split-squat.mp4"
  },
  {
    "slug": "split-squat-front-foot-elevated",
    "sourceSlug": "split-squat-front-foot-elevated",
    "sourceRecordIds": [
      "35cd3180-abe9-417b-aebb-816d8ff6392a",
      "4050cda9-d73a-4b37-a97e-3beaa3615d2f"
    ],
    "name": "Split Squat Front Foot Elevated",
    "categories": [
      "Legs",
      "Gluteal"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/split-squat-front-foot-elevated",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/split-squat-front-foot-elevated",
      "Gluteal": "https://smartworkout.app/en/exercise-library/gluteus/split-squat-front-foot-elevated"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/fc3eac85-3592-407e-becc-71c1301b1b3e.mp4",
    "mediaPath": "/exercises/split-squat-front-foot-elevated.mp4"
  },
  {
    "slug": "spoto-press",
    "sourceSlug": "spoto-press",
    "sourceRecordIds": [
      "774184ce-93a6-4250-910c-ffcca26e601f"
    ],
    "name": "Spoto Press",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/spoto-press",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/spoto-press"
    },
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
    "sourceSlug": "squat",
    "sourceRecordIds": [
      "6ab50167-ffb3-bb30-1822-5de93c864367"
    ],
    "name": "Squat",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/squat",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/squat"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/2180a136-5fa4-4c98-a9ae-8477a89b9402.mp4",
    "mediaPath": "/exercises/squat.mp4"
  },
  {
    "slug": "stability-ball-crunch",
    "sourceSlug": "stability-ball-crunch",
    "sourceRecordIds": [
      "5574c68f-61a7-4dd5-beb3-f89fb4c4942f"
    ],
    "name": "Stability Ball Crunch",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/stability-ball-crunch",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/stability-ball-crunch"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/4570a332-e04d-4652-a0a0-bf2e4b9234a6.mp4",
    "mediaPath": "/exercises/stability-ball-crunch.mp4"
  },
  {
    "slug": "stabillity-ball-wall-squat",
    "sourceSlug": "stabillity-ball-wall-squat",
    "sourceRecordIds": [
      "c605879b-651d-4995-ae08-8ecd85182d71"
    ],
    "name": "Stabillity Ball Wall Squat",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/stabillity-ball-wall-squat",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/stabillity-ball-wall-squat"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/ac08cf1b-b9d6-41a6-8282-b2b68cec3a25.mp4",
    "mediaPath": "/exercises/stabillity-ball-wall-squat.mp4"
  },
  {
    "slug": "stacionary-bike",
    "sourceSlug": "stacionary-bike",
    "sourceRecordIds": [
      "1f8d0b3c-4924-403e-aea7-4ba4dd085553"
    ],
    "name": "Stacionary Bike",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/stacionary-bike",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/stacionary-bike"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/5c370a4a-ad16-4679-b218-a25a4537bab1.mp4",
    "mediaPath": "/exercises/stacionary-bike.mp4"
  },
  {
    "slug": "stair-climber",
    "sourceSlug": "stair-climber",
    "sourceRecordIds": [
      "2cc42ebe-22bc-4b27-9965-6e342ecd4c03"
    ],
    "name": "Stair Climber",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/stair-climber",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/stair-climber"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/6548fbeb-3ba0-4c6a-83a5-ef524cf046d5.mp4",
    "mediaPath": "/exercises/stair-climber.mp4"
  },
  {
    "slug": "standing-air-bike",
    "sourceSlug": "standing-air-bike",
    "sourceRecordIds": [
      "7292151f-5551-45bd-a5ca-512ce6ca2683"
    ],
    "name": "Standing Air Bike",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/standing-air-bike",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/standing-air-bike"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/020621d2-137e-4972-a5e3-86406a612da1.mp4",
    "mediaPath": "/exercises/standing-air-bike.mp4"
  },
  {
    "slug": "standing-cable-ab-crunch",
    "sourceSlug": "standing-cable-ab-crunch",
    "sourceRecordIds": [
      "b2e609bf-d783-4f44-8213-de75f13eb878"
    ],
    "name": "Standing Cable Ab Crunch",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/standing-cable-ab-crunch",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/standing-cable-ab-crunch"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/883749ad-f278-4d93-b235-226fb1b728a4.mp4",
    "mediaPath": "/exercises/standing-cable-ab-crunch.mp4"
  },
  {
    "slug": "standing-cable-chest-press",
    "sourceSlug": "standing-cable-chest-press",
    "sourceRecordIds": [
      "199d1583-7187-407d-b15e-87d74b6fa9d1"
    ],
    "name": "Standing Cable Chest Press",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/standing-cable-chest-press",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/standing-cable-chest-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/ef96f9bc-745f-4096-a1c1-f5fdd71e94df.mp4",
    "mediaPath": "/exercises/standing-cable-chest-press.mp4"
  },
  {
    "slug": "standing-cable-low-chest-press",
    "sourceSlug": "standing-cable-low-chest-press",
    "sourceRecordIds": [
      "09836cd3-2e26-4f4f-8147-8be5997661b5"
    ],
    "name": "Standing Cable Low Chest Press",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/standing-cable-low-chest-press",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/standing-cable-low-chest-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/a6ab5a37-9332-4d22-95f0-f59cf333b5cd.mp4",
    "mediaPath": "/exercises/standing-cable-low-chest-press.mp4"
  },
  {
    "slug": "standing-calf-raise",
    "sourceSlug": "standing-calf-raise",
    "sourceRecordIds": [
      "73517ab1-d5d8-4918-a526-df763e16cef7"
    ],
    "name": "Standing Calf Raise",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/standing-calf-raise",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/standing-calf-raise"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/e760851c-8843-42df-ab2f-0bc433ed2758.mp4",
    "mediaPath": "/exercises/standing-calf-raise.mp4"
  },
  {
    "slug": "standing-chest-opener",
    "sourceSlug": "standing-chest-opener",
    "sourceRecordIds": [
      "d29ecddd-e2bc-4d42-914b-7304975faa55"
    ],
    "name": "Standing Chest Opener",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/standing-chest-opener",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/standing-chest-opener"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/0edd8e70-9491-4019-b263-f7a5a14f6b96.mp4",
    "mediaPath": "/exercises/standing-chest-opener.mp4"
  },
  {
    "slug": "standing-cuban-press",
    "sourceSlug": "standing-cuban-press",
    "sourceRecordIds": [
      "85666015-efc0-4b27-bae5-5dbb6fefc5eb"
    ],
    "name": "Standing Cuban Press",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/standing-cuban-press",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/standing-cuban-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/9f763865-263a-4137-a426-a8874d9e2165.mp4",
    "mediaPath": "/exercises/standing-cuban-press.mp4"
  },
  {
    "slug": "standing-downward-dog",
    "sourceSlug": "standing-downward-dog",
    "sourceRecordIds": [
      "2aeaa882-143a-4f08-96c2-709627e3ae9d"
    ],
    "name": "Standing Downward Dog",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/standing-downward-dog",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/standing-downward-dog"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/81311858-3f0b-48e7-a043-87855e01e7a9.mp4",
    "mediaPath": "/exercises/standing-downward-dog.mp4"
  },
  {
    "slug": "standing-dumbbell-shoulder-press",
    "sourceSlug": "standing-dumbbell-shoulder-press",
    "sourceRecordIds": [
      "456473b0-442a-434b-8e07-b1a71872b489"
    ],
    "name": "Standing Dumbbell Shoulder Press",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/standing-dumbbell-shoulder-press",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/standing-dumbbell-shoulder-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/a2e436e2-758d-41cb-9672-a813adde7526.mp4",
    "mediaPath": "/exercises/standing-dumbbell-shoulder-press.mp4"
  },
  {
    "slug": "standing-forward-bend",
    "sourceSlug": "standing-forward-bend",
    "sourceRecordIds": [
      "183cf14a-3214-4b69-8047-c5ddb4fa0f08"
    ],
    "name": "Standing Forward Bend",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/standing-forward-bend",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/standing-forward-bend"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/8e257bbf-4f81-44f5-8775-c95eb1c3ada1.mp4",
    "mediaPath": "/exercises/standing-forward-bend.mp4"
  },
  {
    "slug": "standing-hip-abduction",
    "sourceSlug": "standing-hip-abduction",
    "sourceRecordIds": [
      "85c89a46-37b2-422a-b2bf-c3a5588463de"
    ],
    "name": "Standing Hip Abduction",
    "categories": [
      "Gluteal"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/gluteus/standing-hip-abduction",
    "sourcePages": {
      "Gluteal": "https://smartworkout.app/en/exercise-library/gluteus/standing-hip-abduction"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/4f239d80-8b4d-4c0b-af95-da9c526a549d.mp4",
    "mediaPath": "/exercises/standing-hip-abduction.mp4"
  },
  {
    "slug": "standing-incline-band-chest-fly",
    "sourceSlug": "standing-incline-band-chest-fly",
    "sourceRecordIds": [
      "8c156338-a875-4603-8a40-dfa7073933eb"
    ],
    "name": "Standing Incline Band Chest Fly",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/standing-incline-band-chest-fly",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/standing-incline-band-chest-fly"
    },
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
    "sourceSlug": "standing-leg-curl",
    "sourceRecordIds": [
      "4054edee-6167-40a5-b385-59e588bb451d"
    ],
    "name": "Standing Leg Curl",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/standing-leg-curl",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/standing-leg-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/be8cca5d-566c-492f-92a7-80e432da7ef5.mp4",
    "mediaPath": "/exercises/standing-leg-curl.mp4"
  },
  {
    "slug": "standing-one-dumbbell-french-press",
    "sourceSlug": "standing-one-dumbbell-french-press",
    "sourceRecordIds": [
      "2669bea0-d60b-48cf-a188-59349610a9e5"
    ],
    "name": "Standing One Dumbbell French Press",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/standing-one-dumbbell-french-press",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/standing-one-dumbbell-french-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/1a9df420-28bd-40d6-a41d-52b1b9fd45e9.mp4",
    "mediaPath": "/exercises/standing-one-dumbbell-french-press.mp4"
  },
  {
    "slug": "standing-overhead-barbell-triceps-extension",
    "sourceSlug": "standing-overhead-barbell-triceps-extension",
    "sourceRecordIds": [
      "ae0c15ed-95db-41e3-a99d-8289b6ccf2a5"
    ],
    "name": "Standing Overhead Barbell Triceps Extension",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/standing-overhead-barbell-triceps-extension",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/standing-overhead-barbell-triceps-extension"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/d6aa7feb-97ae-43bb-9565-56003d80cf40.mp4",
    "mediaPath": "/exercises/standing-overhead-barbell-triceps-extension.mp4"
  },
  {
    "slug": "standing-press-around",
    "sourceSlug": "standing-press-around",
    "sourceRecordIds": [
      "a2a907c5-ff12-4065-bd7d-bc85ac4523e2"
    ],
    "name": "Standing Press Around",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/standing-press-around",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/standing-press-around"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/b24e432c-7165-4c1f-a89a-ab5e71c05f14.mp4",
    "mediaPath": "/exercises/standing-press-around.mp4"
  },
  {
    "slug": "standing-quadriceps-stretch",
    "sourceSlug": "standing-quadriceps-stretch",
    "sourceRecordIds": [
      "2daa9660-5c47-48b6-aa22-cf6e37b411b1"
    ],
    "name": "Standing Quadriceps Stretch",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/standing-quadriceps-stretch",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/standing-quadriceps-stretch"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/70e949e3-e0c8-40b3-94d1-54bb2f3729c6.mp4",
    "mediaPath": "/exercises/standing-quadriceps-stretch.mp4"
  },
  {
    "slug": "standing-russian-twist",
    "sourceSlug": "standing-russian-twist",
    "sourceRecordIds": [
      "c7c5b6a3-7410-4ea8-9b96-98e9c00e7d46"
    ],
    "name": "Standing Russian Twist",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/standing-russian-twist",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/standing-russian-twist"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/c18fa21a-a51f-4809-8ac2-2fe04f267378.mp4",
    "mediaPath": "/exercises/standing-russian-twist.mp4"
  },
  {
    "slug": "standing-side-lat-stretch",
    "sourceSlug": "standing-side-lat-stretch",
    "sourceRecordIds": [
      "67388acd-390f-4322-b88b-ea5aa75a5ee4"
    ],
    "name": "Standing Side Lat Stretch",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/standing-side-lat-stretch",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/standing-side-lat-stretch"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/3c53214a-7316-4933-bf75-83488a7e6af4.mp4",
    "mediaPath": "/exercises/standing-side-lat-stretch.mp4"
  },
  {
    "slug": "standing-tibialis-raise",
    "sourceSlug": "standing-tibialis-raise",
    "sourceRecordIds": [
      "034b85f8-5cf8-4696-9351-f6c4a62f1880"
    ],
    "name": "Standing Tibialis Raise",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/standing-tibialis-raise",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/standing-tibialis-raise"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/caeac689-22e7-4507-9895-f81803a609e7.mp4",
    "mediaPath": "/exercises/standing-tibialis-raise.mp4"
  },
  {
    "slug": "static-front-hold",
    "sourceSlug": "static-front-hold",
    "sourceRecordIds": [
      "7405282a-c2f6-480a-bf83-5c97dc70cb99"
    ],
    "name": "Static Front Hold",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/static-front-hold",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/static-front-hold"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/7fe38efc-2dbc-4108-853d-5ca57a80bef9.mp4",
    "mediaPath": "/exercises/static-front-hold.mp4"
  },
  {
    "slug": "straddle-planche",
    "sourceSlug": "straddle-planche",
    "sourceRecordIds": [
      "1a6fdebd-5789-415d-9724-bda20c1c846e"
    ],
    "name": "Straddle Planche",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/straddle-planche",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/straddle-planche"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/7a83fd9b-36b8-4d53-a758-695f1de5f869.mp4",
    "mediaPath": "/exercises/straddle-planche.mp4"
  },
  {
    "slug": "straight-arm-lat-pulldown",
    "sourceSlug": "straight-arm-lat-pulldown",
    "sourceRecordIds": [
      "ca8fb6e9-2df5-4f97-83a0-d1595e894fba"
    ],
    "name": "Straight-Arm Lat Pulldown",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/straight-arm-lat-pulldown",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/straight-arm-lat-pulldown"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/0e48f179-9c29-4921-b082-5dee57637c60.mp4",
    "mediaPath": "/exercises/straight-arm-lat-pulldown.mp4"
  },
  {
    "slug": "straight-bar-dips",
    "sourceSlug": "straight-bar-dips",
    "sourceRecordIds": [
      "3f1cfc8c-a3e9-49db-b3d3-319d72fad15a"
    ],
    "name": "Straight Bar Dips",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/straight-bar-dips",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/straight-bar-dips"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/f315f7c3-ca7c-4b39-b1a0-8ff9f64cab61.mp4",
    "mediaPath": "/exercises/straight-bar-dips.mp4"
  },
  {
    "slug": "straight-leg-raise-on-dip-bars",
    "sourceSlug": "straight-leg-raise-on-dip-bars",
    "sourceRecordIds": [
      "1fac415a-983a-4610-bb36-6c8889314a76"
    ],
    "name": "Straight Leg Raise on Dip Bars",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/straight-leg-raise-on-dip-bars",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/straight-leg-raise-on-dip-bars"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/0cb429b4-c12b-430a-b513-0cfbbdf6a9f2.mp4",
    "mediaPath": "/exercises/straight-leg-raise-on-dip-bars.mp4"
  },
  {
    "slug": "sumo-deadlift",
    "sourceSlug": "sumo-deadlift",
    "sourceRecordIds": [
      "7f9f4a82-47b4-4aea-9cc5-1eb32ecd4bd2"
    ],
    "name": "Sumo Deadlift",
    "categories": [
      "Gluteal"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/gluteus/sumo-deadlift",
    "sourcePages": {
      "Gluteal": "https://smartworkout.app/en/exercise-library/gluteus/sumo-deadlift"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/1d684df6-e4cb-44f9-9dab-9183bd016dd6.mp4",
    "mediaPath": "/exercises/sumo-deadlift.mp4"
  },
  {
    "slug": "sumo-squat",
    "sourceSlug": "sumo-squat",
    "sourceRecordIds": [
      "8cc228e3-8daa-41c4-b1d0-cc89aee5aab6"
    ],
    "name": "Sumo Squat",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/sumo-squat",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/sumo-squat"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/2510a3d6-2777-4784-8a2e-ca15efd04241.mp4",
    "mediaPath": "/exercises/sumo-squat.mp4"
  },
  {
    "slug": "sumo-squat-off-stepbox",
    "sourceSlug": "sumo-squat-off-stepbox",
    "sourceRecordIds": [
      "eafc5a02-9cd9-4494-aca9-247ca14f87ee"
    ],
    "name": "Sumo Squat off Stepbox",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/sumo-squat-off-stepbox",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/sumo-squat-off-stepbox"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/7639e567-4f6e-465d-8e6f-5211de23ff61.mp4",
    "mediaPath": "/exercises/sumo-squat-off-stepbox.mp4"
  },
  {
    "slug": "sumo-squat-with-smith",
    "sourceSlug": "sumo-squat-with-smith",
    "sourceRecordIds": [
      "cb2d0f9b-8328-46a0-bbdb-6b13db28499d"
    ],
    "name": "Sumo Squat With Smith",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/sumo-squat-with-smith",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/sumo-squat-with-smith"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/80a09dbc-6d4b-4dcf-b209-d24e200372f9.mp4",
    "mediaPath": "/exercises/sumo-squat-with-smith.mp4"
  },
  {
    "slug": "superman",
    "sourceSlug": "superman",
    "sourceRecordIds": [
      "bd178421-8e50-40b1-a843-43b82b55c393"
    ],
    "name": "Superman",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/superman",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/superman"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/6be7b85a-6751-4d54-ab7c-5bd8671160b5.mp4",
    "mediaPath": "/exercises/superman.mp4"
  },
  {
    "slug": "superman-push-up",
    "sourceSlug": "superman-push-up",
    "sourceRecordIds": [
      "11cbfb54-8f47-47a4-9ff5-8c98188d4015"
    ],
    "name": "Superman Push-Up",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/superman-push-up",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/superman-push-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/fcabbb3a-e431-48e8-a2b7-175fd1fe3a89.mp4",
    "mediaPath": "/exercises/superman-push-up.mp4"
  },
  {
    "slug": "suspension-chest-fly",
    "sourceSlug": "suspension-chest-fly",
    "sourceRecordIds": [
      "759f1cc2-ab13-43ea-81b2-3ad0d361be37"
    ],
    "name": "Suspension Chest Fly",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/suspension-chest-fly",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/suspension-chest-fly"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/104f1fe6-5018-41bd-aea9-423736a98cb7.mp4",
    "mediaPath": "/exercises/suspension-chest-fly.mp4"
  },
  {
    "slug": "suspension-inverted-row",
    "sourceSlug": "suspension-inverted-row",
    "sourceRecordIds": [
      "3ba44e8d-8718-47f1-ba5f-1fd046cbb7b0"
    ],
    "name": "Suspension Inverted Row",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/suspension-inverted-row",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/suspension-inverted-row"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/2aaa7550-ab33-430f-ba0e-7cd6b8e95f5b.mp4",
    "mediaPath": "/exercises/suspension-inverted-row.mp4"
  },
  {
    "slug": "suspension-row",
    "sourceSlug": "suspension-row",
    "sourceRecordIds": [
      "21fbdca8-4263-4371-97ce-ba441356648c"
    ],
    "name": "Suspension Row",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/suspension-row",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/suspension-row"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/73cbd3f6-28ef-457d-8750-06326aea4300.mp4",
    "mediaPath": "/exercises/suspension-row.mp4"
  },
  {
    "slug": "suspension-triceps-extension",
    "sourceSlug": "suspension-triceps-extension",
    "sourceRecordIds": [
      "84622a26-9bac-4a4e-a6cc-fa52c220dd43"
    ],
    "name": "Suspension Triceps Extension",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/suspension-triceps-extension",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/suspension-triceps-extension"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/77c3a42e-c7ed-4cee-b282-75b25cb5fe1c.mp4",
    "mediaPath": "/exercises/suspension-triceps-extension.mp4"
  },
  {
    "slug": "suspension-v-ups",
    "sourceSlug": "suspension-v-ups",
    "sourceRecordIds": [
      "9c4894a4-9d5b-416e-8718-f957823c0ac0"
    ],
    "name": "Suspension V-Ups",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/suspension-v-ups",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/suspension-v-ups"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/9e715057-1cdf-4aec-837c-d1d66b01c082.mp4",
    "mediaPath": "/exercises/suspension-v-ups.mp4"
  },
  {
    "slug": "svend-press",
    "sourceSlug": "svend-press",
    "sourceRecordIds": [
      "47978a95-b7a5-4dcc-8034-9d301551f22c"
    ],
    "name": "Svend Press",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/svend-press",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/svend-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/70418929-f916-4a2f-822b-f2c9ba8d21d5.mp4",
    "mediaPath": "/exercises/svend-press.mp4"
  },
  {
    "slug": "swiss-ball-leg-curl",
    "sourceSlug": "swiss-ball-leg-curl",
    "sourceRecordIds": [
      "d455b2bc-feaa-4d9d-8d60-b8ae1ed7b109"
    ],
    "name": "Swiss Ball Leg Curl",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/swiss-ball-leg-curl",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/swiss-ball-leg-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/92213380-e1af-43f7-ba78-e4b92ad18daa.mp4",
    "mediaPath": "/exercises/swiss-ball-leg-curl.mp4"
  },
  {
    "slug": "swiss-ball-plank",
    "sourceSlug": "swiss-ball-plank",
    "sourceRecordIds": [
      "ad8cbff5-7fab-47f9-8332-447ef6785681"
    ],
    "name": "Swiss Ball Plank",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/swiss-ball-plank",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/swiss-ball-plank"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/e62b2c61-8694-4e73-af05-02e24563b0ea.mp4",
    "mediaPath": "/exercises/swiss-ball-plank.mp4"
  },
  {
    "slug": "t-bar-bent-over-row",
    "sourceSlug": "t-bar-bent-over-row",
    "sourceRecordIds": [
      "4867c4b9-6939-4a7f-ba29-282550b7c7e6"
    ],
    "name": "T-Bar Bent Over Row",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/t-bar-bent-over-row",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/t-bar-bent-over-row"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/7d9f7624-4684-4a80-a3ae-91ac7c3ebc6d.mp4",
    "mediaPath": "/exercises/t-bar-bent-over-row.mp4"
  },
  {
    "slug": "t-bar-chest-suported-row",
    "sourceSlug": "t-bar-chest-suported-row",
    "sourceRecordIds": [
      "59c89f64-4dd9-4590-b70b-4dfc1d395407"
    ],
    "name": "T-Bar Chest Suported Row",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/t-bar-chest-suported-row",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/t-bar-chest-suported-row"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/9e528c53-154a-49ac-98ac-763da1ff569d.mp4",
    "mediaPath": "/exercises/t-bar-chest-suported-row.mp4"
  },
  {
    "slug": "tate-press",
    "sourceSlug": "tate-press",
    "sourceRecordIds": [
      "3eade03a-3fd3-4a80-bb11-8e8391ca9732"
    ],
    "name": "Tate Press",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/tate-press",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/tate-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/9889d45d-1949-405f-a3fa-fddedeec7692.mp4",
    "mediaPath": "/exercises/tate-press.mp4"
  },
  {
    "slug": "terminal-knee-extension",
    "sourceSlug": "terminal-knee-extension",
    "sourceRecordIds": [
      "4241390f-1594-40a6-b067-f30b53b5b364"
    ],
    "name": "Terminal Knee Extension",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/terminal-knee-extension",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/terminal-knee-extension"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/2ec96550-cf88-42a7-bd11-cdbd4cb0565e.mp4",
    "mediaPath": "/exercises/terminal-knee-extension.mp4"
  },
  {
    "slug": "toe-touches",
    "sourceSlug": "toe-touches",
    "sourceRecordIds": [
      "a2cad050-a2b9-46e2-bdae-6198b1aaec21"
    ],
    "name": "Toe Touches",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/toe-touches",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/toe-touches"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/b91ad743-b140-4756-8088-75b681a36ec6.mp4",
    "mediaPath": "/exercises/toe-touches.mp4"
  },
  {
    "slug": "toes-to-bar",
    "sourceSlug": "toes-to-bar",
    "sourceRecordIds": [
      "6f6e176e-fe86-4e95-be39-55fb09d9fb5a"
    ],
    "name": "Toes To Bar",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/toes-to-bar",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/toes-to-bar"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/1d180d72-8b8e-4cef-a5df-9b9b5511c3a2.mp4",
    "mediaPath": "/exercises/toes-to-bar.mp4"
  },
  {
    "slug": "trap-bar-deadlift",
    "sourceSlug": "trap-bar-deadlift",
    "sourceRecordIds": [
      "7a939762-896c-461e-ad6a-88e7be837e7b"
    ],
    "name": "Trap Bar Deadlift",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/trap-bar-deadlift",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/trap-bar-deadlift"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/221e7f28-672b-4b70-83b6-857053801b68.mp4",
    "mediaPath": "/exercises/trap-bar-deadlift.mp4"
  },
  {
    "slug": "trap-bar-shrugs",
    "sourceSlug": "trap-bar-shrugs",
    "sourceRecordIds": [
      "ba67a5a7-7a06-49c2-92eb-9cf8dc8b9419"
    ],
    "name": "Trap Bar Shrugs",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/trap-bar-shrugs",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/trap-bar-shrugs"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/cea71d9f-fedb-4fb9-a3f2-197f7df52147.mp4",
    "mediaPath": "/exercises/trap-bar-shrugs.mp4"
  },
  {
    "slug": "trap-y-raise",
    "sourceSlug": "trap-y-raise",
    "sourceRecordIds": [
      "ac39bb5d-d66c-4660-85ac-3a4255acc5e7"
    ],
    "name": "Trap Y Raise",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/trap-y-raise",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/trap-y-raise"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/cc55d692-cee9-4513-8d6f-c987fe4fcd14.mp4",
    "mediaPath": "/exercises/trap-y-raise.mp4"
  },
  {
    "slug": "treadmill-climbing",
    "sourceSlug": "treadmill-climbing",
    "sourceRecordIds": [
      "47582674-26cc-49c2-a66f-06655b49ab34"
    ],
    "name": "Treadmill Climbing",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/treadmill-climbing",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/treadmill-climbing"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/5fba5177-2460-49b1-9f3a-8f0da0bed7f0.mp4",
    "mediaPath": "/exercises/treadmill-climbing.mp4"
  },
  {
    "slug": "treadmill-run",
    "sourceSlug": "treadmill-run",
    "sourceRecordIds": [
      "e9c8793b-9ae2-4428-a9af-24ce91ce8c99"
    ],
    "name": "Treadmill Run",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/treadmill-run",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/treadmill-run"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/2043f724-95d7-4756-a935-b47cd2533f00.mp4",
    "mediaPath": "/exercises/treadmill-run.mp4"
  },
  {
    "slug": "triceps-cable-kickback",
    "sourceSlug": "triceps-cable-kickback",
    "sourceRecordIds": [
      "c48984e5-3830-4cc5-9d99-d74066febb22"
    ],
    "name": "Triceps Cable Kickback",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/triceps-cable-kickback",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/triceps-cable-kickback"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/9d5996b0-863a-4528-86ff-5669983903bd.mp4",
    "mediaPath": "/exercises/triceps-cable-kickback.mp4"
  },
  {
    "slug": "triceps-cable-pushdown-reverse-grip",
    "sourceSlug": "triceps-cable-pushdown-reverse-grip",
    "sourceRecordIds": [
      "16e79f27-f9b4-4162-9de2-37fe0dde76d8"
    ],
    "name": "Triceps Cable Pushdown Reverse Grip",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/triceps-cable-pushdown-reverse-grip",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/triceps-cable-pushdown-reverse-grip"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/1d6c89cb-98bb-48c4-9e04-7c91ccd5ab34.mp4",
    "mediaPath": "/exercises/triceps-cable-pushdown-reverse-grip.mp4"
  },
  {
    "slug": "triceps-push-up",
    "sourceSlug": "triceps-push-up",
    "sourceRecordIds": [
      "68978b20-90bd-479a-98b4-311164673268"
    ],
    "name": "Triceps Push-Up",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/triceps-push-up",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/triceps-push-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/024873d2-7e67-4ffc-a9bf-84db47317bda.mp4",
    "mediaPath": "/exercises/triceps-push-up.mp4"
  },
  {
    "slug": "triceps-pushdown-v-bar",
    "sourceSlug": "triceps-pushdown-v-bar",
    "sourceRecordIds": [
      "9a3a896f-9adb-41f5-806b-7935e88caedf"
    ],
    "name": "Triceps Pushdown V-Bar",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/triceps-pushdown-v-bar",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/triceps-pushdown-v-bar"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/7c60b873-fe00-4844-813a-23ef8811f019.mp4",
    "mediaPath": "/exercises/triceps-pushdown-v-bar.mp4"
  },
  {
    "slug": "trx-biceps-curl",
    "sourceSlug": "trx-biceps-curl",
    "sourceRecordIds": [
      "5476b9ee-ef6e-4e87-a52e-753e5901bb39"
    ],
    "name": "TRX Biceps Curl",
    "categories": [
      "Biceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/biceps/trx-biceps-curl",
    "sourcePages": {
      "Biceps": "https://smartworkout.app/en/exercise-library/biceps/trx-biceps-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/1b225b9a-779a-4ec6-8295-53affcd3b590.mp4",
    "mediaPath": "/exercises/trx-biceps-curl.mp4"
  },
  {
    "slug": "trx-single-leg-bird-dog",
    "sourceSlug": "trx-single-leg-bird-dog",
    "sourceRecordIds": [
      "c8837562-afba-4d90-b0bb-31b0b17a0a7d"
    ],
    "name": "TRX Single Leg Bird Dog",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/trx-single-leg-bird-dog",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/trx-single-leg-bird-dog"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/84b4a59e-1afd-4b09-b984-ee08cb2fb3d4.mp4",
    "mediaPath": "/exercises/trx-single-leg-bird-dog.mp4"
  },
  {
    "slug": "tsunami-overhead-press",
    "sourceSlug": "tsunami-overhead-press",
    "sourceRecordIds": [
      "f29a4a3f-4309-4159-9ef1-369beea0eec2"
    ],
    "name": "Tsunami Overhead Press",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/tsunami-overhead-press",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/tsunami-overhead-press"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/6b716a00-d183-42ce-b086-45e87bd44dca.mp4",
    "mediaPath": "/exercises/tsunami-overhead-press.mp4"
  },
  {
    "slug": "turkish-get-up",
    "sourceSlug": "turkish-get-up",
    "sourceRecordIds": [
      "c9f28dee-814d-4cef-910a-6161ca46382d"
    ],
    "name": "Turkish Get Up",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/turkish-get-up",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/turkish-get-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/1d37e077-fe0f-4171-bb0c-6b7e1886a3ab.mp4",
    "mediaPath": "/exercises/turkish-get-up.mp4"
  },
  {
    "slug": "underhand-triceps-extension",
    "sourceSlug": "underhand-triceps-extension",
    "sourceRecordIds": [
      "b611633c-e2e5-402a-b4d6-7e758e2b35bb"
    ],
    "name": "Underhand Triceps Extension",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/underhand-triceps-extension",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/underhand-triceps-extension"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/6d0ca6ea-70e8-47f6-9d76-6bd3e4254d22.mp4",
    "mediaPath": "/exercises/underhand-triceps-extension.mp4"
  },
  {
    "slug": "unilateral-farmer-walk",
    "sourceSlug": "unilateral-farmer-walk",
    "sourceRecordIds": [
      "8d0b122e-3029-4722-a56a-9b9aa76575bf",
      "ed9b5a18-18d0-4d80-bb07-b67f0ad96663"
    ],
    "name": "Unilateral Farmer Walk",
    "categories": [
      "Forearms"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/forearms/unilateral-farmer-walk",
    "sourcePages": {
      "Forearms": "https://smartworkout.app/en/exercise-library/forearms/unilateral-farmer-walk"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/11baf506-4fb6-4333-9d0e-a13862654199.mp4",
    "mediaPath": "/exercises/unilateral-farmer-walk.mp4"
  },
  {
    "slug": "upward-dog",
    "sourceSlug": "upward-dog",
    "sourceRecordIds": [
      "a7384dbe-5d12-4cae-ac06-e479c71e855b"
    ],
    "name": "Upward Dog",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/upward-dog",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/upward-dog"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/c3bda199-faa2-4f67-8498-841e8a86d6c0.mp4",
    "mediaPath": "/exercises/upward-dog.mp4"
  },
  {
    "slug": "v-sit-crunch",
    "sourceSlug": "v-sit-crunch",
    "sourceRecordIds": [
      "6ecd75f3-0bf2-457e-a994-63b52cea84ce"
    ],
    "name": "V-Sit Crunch",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/v-sit-crunch",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/v-sit-crunch"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/0facf142-2880-4bc1-9254-a5885aeb3891.mp4",
    "mediaPath": "/exercises/v-sit-crunch.mp4"
  },
  {
    "slug": "v-up",
    "sourceSlug": "v-up",
    "sourceRecordIds": [
      "67fa769c-8cc6-497a-b27e-5355bc085b3c",
      "9181ee11-473b-4ea3-9435-31ff0ec7e39f"
    ],
    "name": "V-Up",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/v-up",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/v-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/b056f73f-6295-4119-add2-010385f2457d.mp4",
    "mediaPath": "/exercises/v-up.mp4"
  },
  {
    "slug": "vertical-leg-press-smith-machine",
    "sourceSlug": "vertical-leg-press-smith-machine",
    "sourceRecordIds": [
      "c6a3ceee-90a3-4f19-8e37-4630cb144391"
    ],
    "name": "Vertical Leg Press Smith Machine",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/vertical-leg-press-smith-machine",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/vertical-leg-press-smith-machine"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/b5c4e337-b22f-4c7f-94b2-266576749184.mp4",
    "mediaPath": "/exercises/vertical-leg-press-smith-machine.mp4"
  },
  {
    "slug": "walking-cardio",
    "sourceSlug": "walking-cardio",
    "sourceRecordIds": [
      "cd499966-2c32-4b4d-9bf6-440fcc3a84e4"
    ],
    "name": "Walking Cardio",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/walking-cardio",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/walking-cardio"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/d49f25cb-9c15-4a47-9010-b6c67c714eea.mp4",
    "mediaPath": "/exercises/walking-cardio.mp4"
  },
  {
    "slug": "walking-lunges",
    "sourceSlug": "walking-lunges",
    "sourceRecordIds": [
      "679a7c5d-76aa-4c2e-b43e-8e8915db63f7"
    ],
    "name": "Walking Lunges",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/walking-lunges",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/walking-lunges"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/388121d2-8286-4d6f-8e8e-9c74cb90dacc.mp4",
    "mediaPath": "/exercises/walking-lunges.mp4"
  },
  {
    "slug": "wall-angel",
    "sourceSlug": "wall-angel",
    "sourceRecordIds": [
      "fc6c96c9-4445-409c-afd9-f6d42d832492"
    ],
    "name": "Wall Angel",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/wall-angel",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/wall-angel"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/95e65845-1451-4d21-a5d9-fa8b20996ad0.mp4",
    "mediaPath": "/exercises/wall-angel.mp4"
  },
  {
    "slug": "wall-sit",
    "sourceSlug": "wall-sit",
    "sourceRecordIds": [
      "7ae2d1b0-a634-4374-86e8-a8c48f77e1ee"
    ],
    "name": "Wall Sit",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/wall-sit",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/wall-sit"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/28b0adc7-9bff-49dc-9a4f-b546745a4345.mp4",
    "mediaPath": "/exercises/wall-sit.mp4"
  },
  {
    "slug": "weighted-ab-crunches",
    "sourceSlug": "weighted-ab-crunches",
    "sourceRecordIds": [
      "cf64c96d-3e95-424d-8066-f0824463de81"
    ],
    "name": "Weighted Ab Crunches",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/weighted-ab-crunches",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/weighted-ab-crunches"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/9cea72c3-788a-4768-961f-2464b5fff38e.mp4",
    "mediaPath": "/exercises/weighted-ab-crunches.mp4"
  },
  {
    "slug": "weighted-back-extension",
    "sourceSlug": "weighted-back-extension",
    "sourceRecordIds": [
      "4cb4b1c0-7e5d-e804-d5ef-0fbe23f53914"
    ],
    "name": "Weighted Back Extension",
    "categories": [
      "Gluteal"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/gluteus/weighted-back-extension",
    "sourcePages": {
      "Gluteal": "https://smartworkout.app/en/exercise-library/gluteus/weighted-back-extension"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/66d21316-727a-4d60-b9c0-d3bab1c00bee.mp4",
    "mediaPath": "/exercises/weighted-back-extension.mp4"
  },
  {
    "slug": "weighted-bench-dips",
    "sourceSlug": "weighted-bench-dips",
    "sourceRecordIds": [
      "41662ae6-2248-41f7-a3fe-b870534c3fad"
    ],
    "name": "Weighted Bench Dips",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/weighted-bench-dips",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/weighted-bench-dips"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/fc7a0f6e-dcaa-4252-8c1a-065e1ea733a2.mp4",
    "mediaPath": "/exercises/weighted-bench-dips.mp4"
  },
  {
    "slug": "weighted-chin-up",
    "sourceSlug": "weighted-chin-up",
    "sourceRecordIds": [
      "78395663-8332-42cc-8aa7-d87f474bdb10"
    ],
    "name": "Weighted Chin Up",
    "categories": [
      "Biceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/biceps/weighted-chin-up",
    "sourcePages": {
      "Biceps": "https://smartworkout.app/en/exercise-library/biceps/weighted-chin-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/659693fb-f11e-4ee1-a6b2-3942adca3454.mp4",
    "mediaPath": "/exercises/weighted-chin-up.mp4"
  },
  {
    "slug": "weighted-cossack-squat",
    "sourceSlug": "weighted-cossack-squat",
    "sourceRecordIds": [
      "829f1936-4f5c-489f-a084-39bcba74332e"
    ],
    "name": "Weighted Cossack Squat",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/weighted-cossack-squat",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/weighted-cossack-squat"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/9ac962ba-977f-4b70-8be3-09347be531b8.mp4",
    "mediaPath": "/exercises/weighted-cossack-squat.mp4"
  },
  {
    "slug": "weighted-dead-bug",
    "sourceSlug": "weighted-dead-bug",
    "sourceRecordIds": [
      "51e5cf00-61bf-4289-bfc9-8551dac4e91c"
    ],
    "name": "Weighted Dead Bug",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/weighted-dead-bug",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/weighted-dead-bug"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/402cba6a-63d1-4179-8c0a-e5d2ee40f3d1.mp4",
    "mediaPath": "/exercises/weighted-dead-bug.mp4"
  },
  {
    "slug": "weighted-decline-crunch",
    "sourceSlug": "weighted-decline-crunch",
    "sourceRecordIds": [
      "11abe949-7bce-4971-95c0-f754772ee813"
    ],
    "name": "Weighted Decline Crunch",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/weighted-decline-crunch",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/weighted-decline-crunch"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/176f118d-4de9-47b6-b93e-cb3aa1493f7b.mp4",
    "mediaPath": "/exercises/weighted-decline-crunch.mp4"
  },
  {
    "slug": "weighted-dips",
    "sourceSlug": "weighted-dips",
    "sourceRecordIds": [
      "0935adff-a0ca-78d8-32f8-11f0f8d211f8"
    ],
    "name": "Weighted Dips",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/weighted-dips",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/weighted-dips"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/00807615-ad39-4288-9b27-b33d9e3c7eb3.mp4",
    "mediaPath": "/exercises/weighted-dips.mp4"
  },
  {
    "slug": "weighted-glute-bridge",
    "sourceSlug": "weighted-glute-bridge",
    "sourceRecordIds": [
      "748a1a5b-cbb1-48b0-96bd-7558f332cb48"
    ],
    "name": "Weighted Glute Bridge",
    "categories": [
      "Gluteal"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/gluteus/weighted-glute-bridge",
    "sourcePages": {
      "Gluteal": "https://smartworkout.app/en/exercise-library/gluteus/weighted-glute-bridge"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/03924d42-784a-4b17-9c6d-b3d63c22ac7c.mp4",
    "mediaPath": "/exercises/weighted-glute-bridge.mp4"
  },
  {
    "slug": "weighted-hanging-leg-raise",
    "sourceSlug": "weighted-hanging-leg-raise",
    "sourceRecordIds": [
      "cebcd0b9-f4ec-483e-b2cf-f759efd759f4"
    ],
    "name": "Weighted Hanging Leg Raise",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/weighted-hanging-leg-raise",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/weighted-hanging-leg-raise"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/af8b3a07-9947-401a-85a0-f726cf72363b.mp4",
    "mediaPath": "/exercises/weighted-hanging-leg-raise.mp4"
  },
  {
    "slug": "weighted-hollow-body-hold",
    "sourceSlug": "weighted-hollow-body-hold",
    "sourceRecordIds": [
      "8ea0e1cc-2f71-4868-a6eb-9a475f0ea8ae"
    ],
    "name": "Weighted Hollow Body Hold",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/weighted-hollow-body-hold",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/weighted-hollow-body-hold"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/e658baee-8487-4f4f-a976-8303dc4774a3.mp4",
    "mediaPath": "/exercises/weighted-hollow-body-hold.mp4"
  },
  {
    "slug": "weighted-muscle-up",
    "sourceSlug": "weighted-muscle-up",
    "sourceRecordIds": [
      "c48d3682-7b85-45cb-bbb6-731ca86f4a08"
    ],
    "name": "Weighted Muscle-Up",
    "categories": [
      "Triceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/triceps/weighted-muscle-up",
    "sourcePages": {
      "Triceps": "https://smartworkout.app/en/exercise-library/triceps/weighted-muscle-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/ae178817-b0e1-4eaf-96aa-9228ca2c797b.mp4",
    "mediaPath": "/exercises/weighted-muscle-up.mp4"
  },
  {
    "slug": "weighted-pistol-squat",
    "sourceSlug": "weighted-pistol-squat",
    "sourceRecordIds": [
      "d426fbe7-b7df-4671-8499-d2e4df127ec6"
    ],
    "name": "Weighted Pistol Squat",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/weighted-pistol-squat",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/weighted-pistol-squat"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/94bd5d78-efe8-41e7-9ae6-6656dc501b1d.mp4",
    "mediaPath": "/exercises/weighted-pistol-squat.mp4"
  },
  {
    "slug": "weighted-plank",
    "sourceSlug": "weighted-plank",
    "sourceRecordIds": [
      "73240447-5323-4b6d-99ce-cffbffb19a07"
    ],
    "name": "Weighted Plank",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/weighted-plank",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/weighted-plank"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/7838d7a5-3db2-483e-9eb5-d0946c68cbd6.mp4",
    "mediaPath": "/exercises/weighted-plank.mp4"
  },
  {
    "slug": "weighted-pull-up",
    "sourceSlug": "weighted-pull-up",
    "sourceRecordIds": [
      "04cc2a5a-b69d-4ef3-b6f8-3e6a6115403b"
    ],
    "name": "Weighted Pull-Up",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/weighted-pull-up",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/weighted-pull-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/380148be-7a79-4a02-8a8b-4c82cf08afc6.mp4",
    "mediaPath": "/exercises/weighted-pull-up.mp4"
  },
  {
    "slug": "weighted-push-up",
    "sourceSlug": "weighted-push-up",
    "sourceRecordIds": [
      "f511d489-bd64-4a83-8713-8445d53b1d8e"
    ],
    "name": "Weighted Push-Up",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/weighted-push-up",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/weighted-push-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/44442a7f-b7c0-4ae4-afba-96adf71f1c22.mp4",
    "mediaPath": "/exercises/weighted-push-up.mp4"
  },
  {
    "slug": "weighted-russian-twist",
    "sourceSlug": "weighted-russian-twist",
    "sourceRecordIds": [
      "a741580c-cf0a-49d6-a30d-5ee70ad9be0c"
    ],
    "name": "Weighted Russian Twist",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/weighted-russian-twist",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/weighted-russian-twist"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/7b69b3b7-82b7-422a-886a-910e98e99ef3.mp4",
    "mediaPath": "/exercises/weighted-russian-twist.mp4"
  },
  {
    "slug": "weighted-seated-calf-raise",
    "sourceSlug": "weighted-seated-calf-raise",
    "sourceRecordIds": [
      "12c994b1-6251-4d3e-96e6-8186ee6a0afd"
    ],
    "name": "Weighted Seated Calf Raise",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/weighted-seated-calf-raise",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/weighted-seated-calf-raise"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/16f48eef-91b8-4341-80d6-8be38aab50e6.mp4",
    "mediaPath": "/exercises/weighted-seated-calf-raise.mp4"
  },
  {
    "slug": "weighted-sissy-squat",
    "sourceSlug": "weighted-sissy-squat",
    "sourceRecordIds": [
      "06eba846-19b2-4802-88d2-e49c43184e13"
    ],
    "name": "Weighted Sissy Squat",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/weighted-sissy-squat",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/weighted-sissy-squat"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/59c69e5e-98ce-4844-ad03-97039bc82022.mp4",
    "mediaPath": "/exercises/weighted-sissy-squat.mp4"
  },
  {
    "slug": "weighted-sit-up",
    "sourceSlug": "weighted-sit-up",
    "sourceRecordIds": [
      "2f181b12-c156-48f8-bfb4-efc2ffc650dc"
    ],
    "name": "Weighted Sit Up",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/weighted-sit-up",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/weighted-sit-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/a3caa058-de3c-4f94-9890-fc860559bf3c.mp4",
    "mediaPath": "/exercises/weighted-sit-up.mp4"
  },
  {
    "slug": "weighted-straight-arm-crunch",
    "sourceSlug": "weighted-straight-arm-crunch",
    "sourceRecordIds": [
      "1aebfa21-78be-447d-abc5-366df35d3aef"
    ],
    "name": "Weighted Straight Arm Crunch",
    "categories": [
      "Abs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/abs/weighted-straight-arm-crunch",
    "sourcePages": {
      "Abs": "https://smartworkout.app/en/exercise-library/abs/weighted-straight-arm-crunch"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/c014bfaf-4c7c-4d2d-9611-269045756e2a.mp4",
    "mediaPath": "/exercises/weighted-straight-arm-crunch.mp4"
  },
  {
    "slug": "weighted-woodchopper",
    "sourceSlug": "weighted-woodchopper",
    "sourceRecordIds": [
      "70322856-de83-4f89-b6ab-71c40159d7ed"
    ],
    "name": "Weighted Woodchopper",
    "categories": [
      "Shoulders"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/shoulders/weighted-woodchopper",
    "sourcePages": {
      "Shoulders": "https://smartworkout.app/en/exercise-library/shoulders/weighted-woodchopper"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/9b807b06-2a76-4bdb-b595-8f8473e11b90.mp4",
    "mediaPath": "/exercises/weighted-woodchopper.mp4"
  },
  {
    "slug": "wide-grip-chest-supported-row",
    "sourceSlug": "wide-grip-chest-supported-row",
    "sourceRecordIds": [
      "337e4449-47d4-4482-9bed-47404f889db7"
    ],
    "name": "Wide Grip Chest Supported Row",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/wide-grip-chest-supported-row",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/wide-grip-chest-supported-row"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/ea38494d-085e-4681-95f1-79730bd28c92.mp4",
    "mediaPath": "/exercises/wide-grip-chest-supported-row.mp4"
  },
  {
    "slug": "wide-grip-lat-pulldown",
    "sourceSlug": "wide-grip-lat-pulldown",
    "sourceRecordIds": [
      "5b5ad96b-a5d1-a271-9b57-aa0dfda9d77b"
    ],
    "name": "Wide Grip Lat Pulldown",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/wide-grip-lat-pulldown",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/wide-grip-lat-pulldown"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/6fff17b4-6a5a-4a89-a41c-6d25203cab15.mp4",
    "mediaPath": "/exercises/wide-grip-lat-pulldown.mp4"
  },
  {
    "slug": "wide-grip-rear-pull-up",
    "sourceSlug": "wide-grip-rear-pull-up",
    "sourceRecordIds": [
      "1ded3dfe-6517-40db-909b-dc8b4b64d932"
    ],
    "name": "Wide Grip Rear Pull-Up",
    "categories": [
      "Back"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/back/wide-grip-rear-pull-up",
    "sourcePages": {
      "Back": "https://smartworkout.app/en/exercise-library/back/wide-grip-rear-pull-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/e4176ece-488a-44df-8ca7-b51bb92a5378.mp4",
    "mediaPath": "/exercises/wide-grip-rear-pull-up.mp4"
  },
  {
    "slug": "wide-grip-standing-barbell-curl",
    "sourceSlug": "wide-grip-standing-barbell-curl",
    "sourceRecordIds": [
      "8266ca36-8fae-4fa4-bebb-8c38a0301ac6"
    ],
    "name": "Wide Grip Standing Barbell Curl",
    "categories": [
      "Biceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/biceps/wide-grip-standing-barbell-curl",
    "sourcePages": {
      "Biceps": "https://smartworkout.app/en/exercise-library/biceps/wide-grip-standing-barbell-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/513c4873-55c4-4588-ab4d-044ccc0654f5.mp4",
    "mediaPath": "/exercises/wide-grip-standing-barbell-curl.mp4"
  },
  {
    "slug": "wide-hand-push-up",
    "sourceSlug": "wide-hand-push-up",
    "sourceRecordIds": [
      "c8749939-52da-4147-9e62-e6be2b23b6a5"
    ],
    "name": "Wide Hand Push-Up",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/wide-hand-push-up",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/wide-hand-push-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/1799afbc-3a7a-4035-ae34-b9fe9889daa6.mp4",
    "mediaPath": "/exercises/wide-hand-push-up.mp4"
  },
  {
    "slug": "worlds-greatest-stretch",
    "sourceSlug": "world’s-greatest-stretch",
    "sourceRecordIds": [
      "858eb1d3-8e27-4fc0-8582-5b70e37b4864"
    ],
    "name": "World’s Greatest Stretch",
    "categories": [
      "Chest"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/chest/world’s-greatest-stretch",
    "sourcePages": {
      "Chest": "https://smartworkout.app/en/exercise-library/chest/world’s-greatest-stretch"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/a9fe5358-5acd-41be-888f-08c2d4787f8c.mp4",
    "mediaPath": "/exercises/worlds-greatest-stretch.mp4"
  },
  {
    "slug": "wrist-push-up",
    "sourceSlug": "wrist-push-up",
    "sourceRecordIds": [
      "55772f28-ccb6-4f43-9293-5a63501271b7"
    ],
    "name": "Wrist Push-Up",
    "categories": [
      "Forearms"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/forearms/wrist-push-up",
    "sourcePages": {
      "Forearms": "https://smartworkout.app/en/exercise-library/forearms/wrist-push-up"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/d9a6c488-ede0-4dcd-8611-0bd194e94614.mp4",
    "mediaPath": "/exercises/wrist-push-up.mp4"
  },
  {
    "slug": "wrist-roller",
    "sourceSlug": "wrist-roller",
    "sourceRecordIds": [
      "789d1358-a903-4173-a4e0-986c8c2bc045"
    ],
    "name": "Wrist Roller",
    "categories": [
      "Forearms"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/forearms/wrist-roller",
    "sourcePages": {
      "Forearms": "https://smartworkout.app/en/exercise-library/forearms/wrist-roller"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/6467e6f1-edbc-41f8-abab-b9961ad00992.mp4",
    "mediaPath": "/exercises/wrist-roller.mp4"
  },
  {
    "slug": "zercher-squat",
    "sourceSlug": "zercher-squat",
    "sourceRecordIds": [
      "b9fc3c2b-b68b-4c94-bd08-2b28b7359bbb"
    ],
    "name": "Zercher Squat",
    "categories": [
      "Legs"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/legs/zercher-squat",
    "sourcePages": {
      "Legs": "https://smartworkout.app/en/exercise-library/legs/zercher-squat"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/84d0a9e3-3355-4a94-bafc-4ca547d481bb.mp4",
    "mediaPath": "/exercises/zercher-squat.mp4"
  },
  {
    "slug": "zottman-curl",
    "sourceSlug": "zottman-curl",
    "sourceRecordIds": [
      "01f198ca-a257-4bf8-9f34-24f1f1179376"
    ],
    "name": "Zottman Curl",
    "categories": [
      "Biceps"
    ],
    "sourcePage": "https://smartworkout.app/en/exercise-library/biceps/zottman-curl",
    "sourcePages": {
      "Biceps": "https://smartworkout.app/en/exercise-library/biceps/zottman-curl"
    },
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
    "sourceAssetUrl": "https://api.smartworkout.app/asset/video/7ff591e4-d0e1-4f8d-a368-3c5e17e86ba4.mp4",
    "mediaPath": "/exercises/zottman-curl.mp4"
  }
] as const satisfies readonly SmartWorkoutExerciseDefinition[]
