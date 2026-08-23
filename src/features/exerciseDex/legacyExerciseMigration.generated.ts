// Generated from the live SmartWorkout category payloads on 2026-08-23T10:32:26.633Z.
// Do not hand-edit individual records; recrawl and regenerate instead.
export interface LegacyExerciseMigration {
  legacyId: string
  legacyName: string
  legacyCategory: string
  successorId: string | null
  confidence: 'Exact' | 'Equivalent' | 'Removed'
  basis: string
}

export const LEGACY_EXERCISE_MIGRATIONS = [
  {
    "legacyId": "builtin-exercise:barbell-bench-press",
    "legacyName": "Barbell Bench Press",
    "legacyCategory": "Chest",
    "successorId": "builtin-exercise:barbell-bench-press",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/chest/barbell-bench-press"
  },
  {
    "legacyId": "builtin-exercise:dumbbell-bench-press",
    "legacyName": "Dumbbell Bench Press",
    "legacyCategory": "Chest",
    "successorId": "builtin-exercise:dumbbell-bench-press",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/chest/dumbbell-bench-press"
  },
  {
    "legacyId": "builtin-exercise:incline-barbell-bench-press",
    "legacyName": "Incline Barbell Bench Press",
    "legacyCategory": "Chest",
    "successorId": "builtin-exercise:incline-barbell-bench-press",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/chest/incline-barbell-bench-press"
  },
  {
    "legacyId": "builtin-exercise:incline-dumbbell-bench-press",
    "legacyName": "Incline Dumbbell Bench Press",
    "legacyCategory": "Chest",
    "successorId": "builtin-exercise:incline-dumbbell-bench-press",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/chest/incline-dumbbell-bench-press"
  },
  {
    "legacyId": "builtin-exercise:decline-barbell-bench-press",
    "legacyName": "Decline Barbell Bench Press",
    "legacyCategory": "Chest",
    "successorId": "builtin-exercise:decline-barbell-bench-press",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/chest/decline-barbell-bench-press"
  },
  {
    "legacyId": "builtin-exercise:decline-dumbbell-bench-press",
    "legacyName": "Decline Dumbbell Bench Press",
    "legacyCategory": "Chest",
    "successorId": "builtin-exercise:decline-dumbbell-bench-press",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/chest/decline-dumbbell-bench-press"
  },
  {
    "legacyId": "builtin-exercise:machine-chest-press",
    "legacyName": "Machine Chest Press",
    "legacyCategory": "Chest",
    "successorId": "builtin-exercise:machine-chest-press",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/chest/machine-chest-press"
  },
  {
    "legacyId": "builtin-exercise:incline-machine-press",
    "legacyName": "Incline Machine Press",
    "legacyCategory": "Chest",
    "successorId": "builtin-exercise:incline-hammer-chest-press",
    "confidence": "Equivalent",
    "basis": "reviewed canonical-name/setup equivalent in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:smith-machine-bench-press",
    "legacyName": "Smith Machine Bench Press",
    "legacyCategory": "Chest",
    "successorId": "builtin-exercise:smith-bench-press",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/chest/smith-bench-press"
  },
  {
    "legacyId": "builtin-exercise:smith-machine-incline-press",
    "legacyName": "Smith Machine Incline Press",
    "legacyCategory": "Chest",
    "successorId": "builtin-exercise:smith-incline-chest-press",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/chest/smith-incline-chest-press"
  },
  {
    "legacyId": "builtin-exercise:cable-fly",
    "legacyName": "Cable Fly",
    "legacyCategory": "Chest",
    "successorId": "builtin-exercise:cable-middle-chest-fly",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/chest/cable-middle-chest-fly"
  },
  {
    "legacyId": "builtin-exercise:low-to-high-cable-fly",
    "legacyName": "Low-to-High Cable Fly",
    "legacyCategory": "Chest",
    "successorId": "builtin-exercise:low-high-cable-chest-fly",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/chest/low-high-cable-chest-fly"
  },
  {
    "legacyId": "builtin-exercise:high-to-low-cable-fly",
    "legacyName": "High-to-Low Cable Fly",
    "legacyCategory": "Chest",
    "successorId": "builtin-exercise:high-low-cable-chest-fly",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/chest/high-low-cable-chest-fly"
  },
  {
    "legacyId": "builtin-exercise:pec-deck",
    "legacyName": "Pec Deck",
    "legacyCategory": "Chest",
    "successorId": "builtin-exercise:pec-deck-chest-fly",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/chest/pec-deck-chest-fly"
  },
  {
    "legacyId": "builtin-exercise:push-up",
    "legacyName": "Push-Up",
    "legacyCategory": "Chest",
    "successorId": "builtin-exercise:push-up",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/chest/push-up"
  },
  {
    "legacyId": "builtin-exercise:incline-push-up",
    "legacyName": "Incline Push-Up",
    "legacyCategory": "Chest",
    "successorId": "builtin-exercise:incline-push-up",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/chest/incline-push-up"
  },
  {
    "legacyId": "builtin-exercise:decline-push-up",
    "legacyName": "Decline Push-Up",
    "legacyCategory": "Chest",
    "successorId": "builtin-exercise:decline-push-up",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/chest/decline-push-up"
  },
  {
    "legacyId": "builtin-exercise:chest-dip",
    "legacyName": "Chest Dip",
    "legacyCategory": "Chest",
    "successorId": "builtin-exercise:chest-dips",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/chest/chest-dips"
  },
  {
    "legacyId": "builtin-exercise:dumbbell-squeeze-press",
    "legacyName": "Dumbbell Squeeze Press",
    "legacyCategory": "Chest",
    "successorId": "builtin-exercise:close-grip-dumbbell-press",
    "confidence": "Equivalent",
    "basis": "reviewed canonical-name/setup equivalent in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:single-arm-cable-chest-press",
    "legacyName": "Single-Arm Cable Chest Press",
    "legacyCategory": "Chest",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:resistance-band-chest-press",
    "legacyName": "Resistance Band Chest Press",
    "legacyCategory": "Chest",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:plate-pinch-press",
    "legacyName": "Plate Pinch Press",
    "legacyCategory": "Chest",
    "successorId": "builtin-exercise:svend-press",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/chest/svend-press"
  },
  {
    "legacyId": "builtin-exercise:lat-pulldown",
    "legacyName": "Lat Pulldown",
    "legacyCategory": "Back",
    "successorId": "builtin-exercise:cable-lat-pulldown",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/back/cable-lat-pulldown"
  },
  {
    "legacyId": "builtin-exercise:neutral-grip-lat-pulldown",
    "legacyName": "Neutral-Grip Lat Pulldown",
    "legacyCategory": "Back",
    "successorId": "builtin-exercise:cable-neutral-grip-lat-pulldown",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/back/cable-neutral-grip-lat-pulldown"
  },
  {
    "legacyId": "builtin-exercise:wide-grip-lat-pulldown",
    "legacyName": "Wide-Grip Lat Pulldown",
    "legacyCategory": "Back",
    "successorId": "builtin-exercise:wide-grip-lat-pulldown",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/back/wide-grip-lat-pulldown"
  },
  {
    "legacyId": "builtin-exercise:reverse-grip-lat-pulldown",
    "legacyName": "Reverse-Grip Lat Pulldown",
    "legacyCategory": "Back",
    "successorId": "builtin-exercise:cable-reverse-grip-pulldown",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/back/cable-reverse-grip-pulldown"
  },
  {
    "legacyId": "builtin-exercise:pull-up",
    "legacyName": "Pull-Up",
    "legacyCategory": "Back",
    "successorId": "builtin-exercise:pull-up",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/back/pull-up"
  },
  {
    "legacyId": "builtin-exercise:chin-up",
    "legacyName": "Chin-Up",
    "legacyCategory": "Back",
    "successorId": "builtin-exercise:chin-up",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/back/chin-up"
  },
  {
    "legacyId": "builtin-exercise:neutral-grip-pull-up",
    "legacyName": "Neutral-Grip Pull-Up",
    "legacyCategory": "Back",
    "successorId": "builtin-exercise:pull-up-neutral-grip",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/back/pull-up-neutral-grip"
  },
  {
    "legacyId": "builtin-exercise:assisted-pull-up",
    "legacyName": "Assisted Pull-Up",
    "legacyCategory": "Back",
    "successorId": "builtin-exercise:assisted-pull-up",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/back/assisted-pull-up"
  },
  {
    "legacyId": "builtin-exercise:seated-cable-row",
    "legacyName": "Seated Cable Row",
    "legacyCategory": "Back",
    "successorId": "builtin-exercise:seated-cable-row",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/back/seated-cable-row"
  },
  {
    "legacyId": "builtin-exercise:wide-grip-seated-cable-row",
    "legacyName": "Wide-Grip Seated Cable Row",
    "legacyCategory": "Back",
    "successorId": "builtin-exercise:seated-cable-wide-grip-row",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/back/seated-cable-wide-grip-row"
  },
  {
    "legacyId": "builtin-exercise:chest-supported-dumbbell-row",
    "legacyName": "Chest-Supported Dumbbell Row",
    "legacyCategory": "Back",
    "successorId": "builtin-exercise:dumbbell-neutral-grip-incline-bench-row",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/back/dumbbell-neutral-grip-incline-bench-row"
  },
  {
    "legacyId": "builtin-exercise:chest-supported-t-bar-row",
    "legacyName": "Chest-Supported T-Bar Row",
    "legacyCategory": "Back",
    "successorId": "builtin-exercise:t-bar-chest-suported-row",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/back/t-bar-chest-suported-row"
  },
  {
    "legacyId": "builtin-exercise:machine-row",
    "legacyName": "Machine Row",
    "legacyCategory": "Back",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:iso-lateral-machine-row",
    "legacyName": "Iso-Lateral Machine Row",
    "legacyCategory": "Back",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:barbell-bent-over-row",
    "legacyName": "Barbell Bent-Over Row",
    "legacyCategory": "Back",
    "successorId": "builtin-exercise:barbell-bent-over-row",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/back/barbell-bent-over-row"
  },
  {
    "legacyId": "builtin-exercise:pendlay-row",
    "legacyName": "Pendlay Row",
    "legacyCategory": "Back",
    "successorId": "builtin-exercise:pendlay-row",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/back/pendlay-row"
  },
  {
    "legacyId": "builtin-exercise:single-arm-dumbbell-row",
    "legacyName": "Single-Arm Dumbbell Row",
    "legacyCategory": "Back",
    "successorId": "builtin-exercise:dumbbell-bent-over-row",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/back/dumbbell-bent-over-row"
  },
  {
    "legacyId": "builtin-exercise:t-bar-row",
    "legacyName": "T-Bar Row",
    "legacyCategory": "Back",
    "successorId": "builtin-exercise:t-bar-bent-over-row",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/back/t-bar-bent-over-row"
  },
  {
    "legacyId": "builtin-exercise:landmine-row",
    "legacyName": "Landmine Row",
    "legacyCategory": "Back",
    "successorId": "builtin-exercise:close-grip-landmine-row",
    "confidence": "Equivalent",
    "basis": "reviewed canonical-name/setup equivalent in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:inverted-row",
    "legacyName": "Inverted Row",
    "legacyCategory": "Back",
    "successorId": "builtin-exercise:inverted-row-australian",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/back/inverted-row-(australian)"
  },
  {
    "legacyId": "builtin-exercise:straight-arm-pulldown",
    "legacyName": "Straight-Arm Pulldown",
    "legacyCategory": "Back",
    "successorId": "builtin-exercise:straight-arm-lat-pulldown",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/back/straight-arm-lat-pulldown"
  },
  {
    "legacyId": "builtin-exercise:cable-pullover",
    "legacyName": "Cable Pullover",
    "legacyCategory": "Back",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:dumbbell-pullover",
    "legacyName": "Dumbbell Pullover",
    "legacyCategory": "Back",
    "successorId": "builtin-exercise:dumbbell-lat-pullover",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/back/dumbbell-lat-pullover"
  },
  {
    "legacyId": "builtin-exercise:rack-pull",
    "legacyName": "Rack Pull",
    "legacyCategory": "Back",
    "successorId": "builtin-exercise:barbell-rack-pull",
    "confidence": "Equivalent",
    "basis": "reviewed canonical-name/setup equivalent in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:45-degree-back-extension",
    "legacyName": "45-Degree Back Extension",
    "legacyCategory": "Back",
    "successorId": "builtin-exercise:back-extension",
    "confidence": "Equivalent",
    "basis": "reviewed canonical-name/setup equivalent in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:barbell-good-morning",
    "legacyName": "Barbell Good Morning",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:barbell-good-morning",
    "confidence": "Exact",
    "basis": "exact canonical slug/name in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:barbell-overhead-press",
    "legacyName": "Barbell Overhead Press",
    "legacyCategory": "Shoulders",
    "successorId": "builtin-exercise:barbell-overhead-press",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/shoulders/barbell-overhead-press"
  },
  {
    "legacyId": "builtin-exercise:seated-barbell-shoulder-press",
    "legacyName": "Seated Barbell Shoulder Press",
    "legacyCategory": "Shoulders",
    "successorId": "builtin-exercise:seated-barbell-shoulder-press",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/shoulders/seated-barbell-shoulder-press"
  },
  {
    "legacyId": "builtin-exercise:dumbbell-shoulder-press",
    "legacyName": "Dumbbell Shoulder Press",
    "legacyCategory": "Shoulders",
    "successorId": "builtin-exercise:standing-dumbbell-shoulder-press",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/shoulders/standing-dumbbell-shoulder-press"
  },
  {
    "legacyId": "builtin-exercise:arnold-press",
    "legacyName": "Arnold Press",
    "legacyCategory": "Shoulders",
    "successorId": "builtin-exercise:seated-arnold-dumbbell-press",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/shoulders/seated-arnold-dumbbell-press"
  },
  {
    "legacyId": "builtin-exercise:machine-shoulder-press",
    "legacyName": "Machine Shoulder Press",
    "legacyCategory": "Shoulders",
    "successorId": "builtin-exercise:machine-shoulder-press",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/shoulders/machine-shoulder-press"
  },
  {
    "legacyId": "builtin-exercise:smith-machine-shoulder-press",
    "legacyName": "Smith Machine Shoulder Press",
    "legacyCategory": "Shoulders",
    "successorId": "builtin-exercise:smith-shoulder-press",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/shoulders/smith-shoulder-press"
  },
  {
    "legacyId": "builtin-exercise:landmine-press",
    "legacyName": "Landmine Press",
    "legacyCategory": "Shoulders",
    "successorId": "builtin-exercise:landmine-press",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/shoulders/landmine-press"
  },
  {
    "legacyId": "builtin-exercise:dumbbell-front-raise",
    "legacyName": "Dumbbell Front Raise",
    "legacyCategory": "Shoulders",
    "successorId": "builtin-exercise:dumbbell-front-raise",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/shoulders/dumbbell-front-raise"
  },
  {
    "legacyId": "builtin-exercise:cable-front-raise",
    "legacyName": "Cable Front Raise",
    "legacyCategory": "Shoulders",
    "successorId": "builtin-exercise:cable-front-raise",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/shoulders/cable-front-raise"
  },
  {
    "legacyId": "builtin-exercise:dumbbell-lateral-raise",
    "legacyName": "Dumbbell Lateral Raise",
    "legacyCategory": "Shoulders",
    "successorId": "builtin-exercise:dumbbell-lateral-raise",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/shoulders/dumbbell-lateral-raise"
  },
  {
    "legacyId": "builtin-exercise:cable-lateral-raise",
    "legacyName": "Cable Lateral Raise",
    "legacyCategory": "Shoulders",
    "successorId": "builtin-exercise:cable-lateral-raise",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/shoulders/cable-lateral-raise"
  },
  {
    "legacyId": "builtin-exercise:machine-lateral-raise",
    "legacyName": "Machine Lateral Raise",
    "legacyCategory": "Shoulders",
    "successorId": "builtin-exercise:machine-lateral-raise",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/shoulders/machine-lateral-raise"
  },
  {
    "legacyId": "builtin-exercise:lean-away-cable-lateral-raise",
    "legacyName": "Lean-Away Cable Lateral Raise",
    "legacyCategory": "Shoulders",
    "successorId": "builtin-exercise:cable-leaning-lateral-raise",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/shoulders/cable-leaning-lateral-raise"
  },
  {
    "legacyId": "builtin-exercise:dumbbell-rear-delt-fly",
    "legacyName": "Dumbbell Rear Delt Fly",
    "legacyCategory": "Shoulders",
    "successorId": "builtin-exercise:bent-over-dumbbell-lateral-raise",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/shoulders/bent-over-dumbbell-lateral-raise"
  },
  {
    "legacyId": "builtin-exercise:reverse-pec-deck",
    "legacyName": "Reverse Pec Deck",
    "legacyCategory": "Shoulders",
    "successorId": "builtin-exercise:machine-reverse-flyes",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/shoulders/machine-reverse-flyes"
  },
  {
    "legacyId": "builtin-exercise:cable-rear-delt-fly",
    "legacyName": "Cable Rear Delt Fly",
    "legacyCategory": "Shoulders",
    "successorId": "builtin-exercise:cable-rear-delt-fly-reverse-fly",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/shoulders/cable-rear-delt-fly-(reverse-fly)"
  },
  {
    "legacyId": "builtin-exercise:face-pull",
    "legacyName": "Face Pull",
    "legacyCategory": "Shoulders",
    "successorId": "builtin-exercise:cable-face-pull",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/shoulders/cable-face-pull"
  },
  {
    "legacyId": "builtin-exercise:band-face-pull",
    "legacyName": "Band Face Pull",
    "legacyCategory": "Shoulders",
    "successorId": "builtin-exercise:banded-face-pull",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/shoulders/banded-face-pull"
  },
  {
    "legacyId": "builtin-exercise:cable-external-rotation",
    "legacyName": "Cable External Rotation",
    "legacyCategory": "Shoulders",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:band-external-rotation",
    "legacyName": "Band External Rotation",
    "legacyCategory": "Shoulders",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:barbell-curl",
    "legacyName": "Barbell Curl",
    "legacyCategory": "Arms",
    "successorId": "builtin-exercise:biceps-barbell-curl",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/biceps/biceps-barbell-curl"
  },
  {
    "legacyId": "builtin-exercise:ez-bar-curl",
    "legacyName": "EZ-Bar Curl",
    "legacyCategory": "Arms",
    "successorId": "builtin-exercise:ez-bar-biceps-curl",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/biceps/ez-bar-biceps-curl"
  },
  {
    "legacyId": "builtin-exercise:dumbbell-curl",
    "legacyName": "Dumbbell Curl",
    "legacyCategory": "Arms",
    "successorId": "builtin-exercise:dumbbell-biceps-curl",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/biceps/dumbbell-biceps-curl"
  },
  {
    "legacyId": "builtin-exercise:alternating-dumbbell-curl",
    "legacyName": "Alternating Dumbbell Curl",
    "legacyCategory": "Arms",
    "successorId": "builtin-exercise:dumbbell-alternate-supinated-curl",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/biceps/dumbbell-alternate-supinated-curl"
  },
  {
    "legacyId": "builtin-exercise:incline-dumbbell-curl",
    "legacyName": "Incline Dumbbell Curl",
    "legacyCategory": "Arms",
    "successorId": "builtin-exercise:seated-incline-biceps-curl",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/biceps/seated-incline-biceps-curl"
  },
  {
    "legacyId": "builtin-exercise:preacher-curl",
    "legacyName": "Preacher Curl",
    "legacyCategory": "Arms",
    "successorId": "builtin-exercise:ez-bar-preacher-curl",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/biceps/ez-bar-preacher-curl"
  },
  {
    "legacyId": "builtin-exercise:machine-preacher-curl",
    "legacyName": "Machine Preacher Curl",
    "legacyCategory": "Arms",
    "successorId": "builtin-exercise:machine-preacher-curl",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/biceps/machine-preacher-curl"
  },
  {
    "legacyId": "builtin-exercise:cable-curl",
    "legacyName": "Cable Curl",
    "legacyCategory": "Arms",
    "successorId": "builtin-exercise:bar-cable-biceps-curl",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/biceps/bar-cable-biceps-curl"
  },
  {
    "legacyId": "builtin-exercise:bayesian-cable-curl",
    "legacyName": "Bayesian Cable Curl",
    "legacyCategory": "Arms",
    "successorId": "builtin-exercise:bayesian-cable-curl",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/biceps/bayesian-cable-curl"
  },
  {
    "legacyId": "builtin-exercise:spider-curl",
    "legacyName": "Spider Curl",
    "legacyCategory": "Arms",
    "successorId": "builtin-exercise:dumbbell-spider-curl",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/biceps/dumbbell-spider-curl"
  },
  {
    "legacyId": "builtin-exercise:concentration-curl",
    "legacyName": "Concentration Curl",
    "legacyCategory": "Arms",
    "successorId": "builtin-exercise:dumbbell-concentration-curl",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/biceps/dumbbell-concentration-curl"
  },
  {
    "legacyId": "builtin-exercise:hammer-curl",
    "legacyName": "Hammer Curl",
    "legacyCategory": "Arms",
    "successorId": "builtin-exercise:dumbbell-hammer-curl",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/biceps/dumbbell-hammer-curl"
  },
  {
    "legacyId": "builtin-exercise:cross-body-hammer-curl",
    "legacyName": "Cross-Body Hammer Curl",
    "legacyCategory": "Arms",
    "successorId": "builtin-exercise:dumbbell-cross-body-hammer-curl",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/biceps/dumbbell-cross-body-hammer-curl"
  },
  {
    "legacyId": "builtin-exercise:reverse-curl",
    "legacyName": "Reverse Curl",
    "legacyCategory": "Arms",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:cable-triceps-pushdown",
    "legacyName": "Cable Triceps Pushdown",
    "legacyCategory": "Arms",
    "successorId": "builtin-exercise:cable-triceps-pushdown",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/triceps/cable-triceps-pushdown"
  },
  {
    "legacyId": "builtin-exercise:rope-triceps-pushdown",
    "legacyName": "Rope Triceps Pushdown",
    "legacyCategory": "Arms",
    "successorId": "builtin-exercise:rope-triceps-pushdown",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/triceps/rope-triceps-pushdown"
  },
  {
    "legacyId": "builtin-exercise:overhead-cable-triceps-extension",
    "legacyName": "Overhead Cable Triceps Extension",
    "legacyCategory": "Arms",
    "successorId": "builtin-exercise:cable-overhead-triceps-extension",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/triceps/cable-overhead-triceps-extension"
  },
  {
    "legacyId": "builtin-exercise:dumbbell-overhead-triceps-extension",
    "legacyName": "Dumbbell Overhead Triceps Extension",
    "legacyCategory": "Arms",
    "successorId": "builtin-exercise:standing-one-dumbbell-french-press",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/triceps/standing-one-dumbbell-french-press"
  },
  {
    "legacyId": "builtin-exercise:ez-bar-skull-crusher",
    "legacyName": "EZ-Bar Skull Crusher",
    "legacyCategory": "Arms",
    "successorId": "builtin-exercise:lying-ez-bar-triceps-extension",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/triceps/lying-ez-bar-triceps-extension"
  },
  {
    "legacyId": "builtin-exercise:close-grip-bench-press",
    "legacyName": "Close-Grip Bench Press",
    "legacyCategory": "Arms",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:diamond-push-up",
    "legacyName": "Diamond Push-Up",
    "legacyCategory": "Arms",
    "successorId": "builtin-exercise:diamond-push-up",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/triceps/diamond-push-up"
  },
  {
    "legacyId": "builtin-exercise:bench-dip",
    "legacyName": "Bench Dip",
    "legacyCategory": "Arms",
    "successorId": "builtin-exercise:seated-triceps-bench-dip",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/triceps/seated-triceps-bench-dip"
  },
  {
    "legacyId": "builtin-exercise:cable-triceps-kickback",
    "legacyName": "Cable Triceps Kickback",
    "legacyCategory": "Arms",
    "successorId": "builtin-exercise:triceps-cable-kickback",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/triceps/triceps-cable-kickback"
  },
  {
    "legacyId": "builtin-exercise:single-arm-triceps-pushdown",
    "legacyName": "Single-Arm Triceps Pushdown",
    "legacyCategory": "Arms",
    "successorId": "builtin-exercise:one-arm-triceps-cable-pushdown",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/triceps/one-arm-triceps-cable-pushdown"
  },
  {
    "legacyId": "builtin-exercise:dumbbell-wrist-curl",
    "legacyName": "Dumbbell Wrist Curl",
    "legacyCategory": "Arms",
    "successorId": "builtin-exercise:dumbbell-standing-wrist-curl",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/forearms/dumbbell-standing-wrist-curl"
  },
  {
    "legacyId": "builtin-exercise:dumbbell-reverse-wrist-curl",
    "legacyName": "Dumbbell Reverse Wrist Curl",
    "legacyCategory": "Arms",
    "successorId": "builtin-exercise:dumbbell-standing-reverse-wrist-curls",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/forearms/dumbbell-standing-reverse-wrist-curls"
  },
  {
    "legacyId": "builtin-exercise:barbell-wrist-curl",
    "legacyName": "Barbell Wrist Curl",
    "legacyCategory": "Arms",
    "successorId": "builtin-exercise:barbell-wrist-curl",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/forearms/barbell-wrist-curl"
  },
  {
    "legacyId": "builtin-exercise:plate-pinch-hold",
    "legacyName": "Plate Pinch Hold",
    "legacyCategory": "Arms",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:back-squat",
    "legacyName": "Back Squat",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:barbell-squat",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/barbell-squat"
  },
  {
    "legacyId": "builtin-exercise:front-squat",
    "legacyName": "Front Squat",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:front-squat",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/front-squat"
  },
  {
    "legacyId": "builtin-exercise:goblet-squat",
    "legacyName": "Goblet Squat",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:goblet-squat",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/goblet-squat"
  },
  {
    "legacyId": "builtin-exercise:hack-squat",
    "legacyName": "Hack Squat",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:machine-hack-squat",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/machine-hack-squat"
  },
  {
    "legacyId": "builtin-exercise:smith-machine-squat",
    "legacyName": "Smith Machine Squat",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:smith-squat",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/smith-squat"
  },
  {
    "legacyId": "builtin-exercise:belt-squat",
    "legacyName": "Belt Squat",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:machine-belt-squat",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/machine-belt-squat"
  },
  {
    "legacyId": "builtin-exercise:leg-press",
    "legacyName": "Leg Press",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:leg-press",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/leg-press"
  },
  {
    "legacyId": "builtin-exercise:single-leg-press",
    "legacyName": "Single-Leg Press",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:single-leg-press",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/single-leg-press"
  },
  {
    "legacyId": "builtin-exercise:leg-extension",
    "legacyName": "Leg Extension",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:seated-leg-extension-machine",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/seated-leg-extension-machine"
  },
  {
    "legacyId": "builtin-exercise:single-leg-extension",
    "legacyName": "Single-Leg Extension",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:single-leg-extension",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/single-leg-extension"
  },
  {
    "legacyId": "builtin-exercise:sissy-squat",
    "legacyName": "Sissy Squat",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:sissy-squat",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/sissy-squat"
  },
  {
    "legacyId": "builtin-exercise:wall-sit",
    "legacyName": "Wall Sit",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:wall-sit",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/wall-sit"
  },
  {
    "legacyId": "builtin-exercise:romanian-deadlift",
    "legacyName": "Romanian Deadlift",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:romanian-deadlift",
    "confidence": "Exact",
    "basis": "exact canonical slug/name in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:dumbbell-romanian-deadlift",
    "legacyName": "Dumbbell Romanian Deadlift",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:dumbbell-romanian-deadlift",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/dumbbell-romanian-deadlift"
  },
  {
    "legacyId": "builtin-exercise:single-leg-romanian-deadlift",
    "legacyName": "Single-Leg Romanian Deadlift",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:single-leg-dumbbell-deadlift",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/single-leg-dumbbell-deadlift"
  },
  {
    "legacyId": "builtin-exercise:seated-leg-curl",
    "legacyName": "Seated Leg Curl",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:seated-leg-curl",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/seated-leg-curl"
  },
  {
    "legacyId": "builtin-exercise:lying-leg-curl",
    "legacyName": "Lying Leg Curl",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:prone-lying-leg-curl",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/prone-lying-leg-curl"
  },
  {
    "legacyId": "builtin-exercise:standing-single-leg-curl",
    "legacyName": "Standing Single-Leg Curl",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:standing-leg-curl",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/standing-leg-curl"
  },
  {
    "legacyId": "builtin-exercise:nordic-hamstring-curl",
    "legacyName": "Nordic Hamstring Curl",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:nordic-hamstring-curl",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/nordic-hamstring-curl"
  },
  {
    "legacyId": "builtin-exercise:glute-ham-raise",
    "legacyName": "Glute-Ham Raise",
    "legacyCategory": "Legs",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:barbell-hip-thrust",
    "legacyName": "Barbell Hip Thrust",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:hip-thrust",
    "confidence": "Equivalent",
    "basis": "exact legacy alias match: Hip Thrust"
  },
  {
    "legacyId": "builtin-exercise:dumbbell-hip-thrust",
    "legacyName": "Dumbbell Hip Thrust",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:dumbbell-hip-thrust",
    "confidence": "Exact",
    "basis": "exact canonical slug/name in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:glute-bridge",
    "legacyName": "Glute Bridge",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:glute-bridge",
    "confidence": "Exact",
    "basis": "exact canonical slug/name in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:cable-pull-through",
    "legacyName": "Cable Pull-Through",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:cable-pull-through",
    "confidence": "Exact",
    "basis": "exact canonical slug/name in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:cable-glute-kickback",
    "legacyName": "Cable Glute Kickback",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:glute-cable-kickback",
    "confidence": "Equivalent",
    "basis": "unique normalized word-order/synonym match in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:bulgarian-split-squat",
    "legacyName": "Bulgarian Split Squat",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:dumbbell-bulgarian-squat",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/dumbbell-bulgarian-squat"
  },
  {
    "legacyId": "builtin-exercise:walking-lunge",
    "legacyName": "Walking Lunge",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:dumbbell-walking-lunges",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/dumbbell-walking-lunges"
  },
  {
    "legacyId": "builtin-exercise:reverse-lunge",
    "legacyName": "Reverse Lunge",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:rear-lunge",
    "confidence": "Equivalent",
    "basis": "reviewed canonical-name/setup equivalent in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:forward-lunge",
    "legacyName": "Forward Lunge",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:dumbbell-lunges",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/dumbbell-lunges"
  },
  {
    "legacyId": "builtin-exercise:lateral-lunge",
    "legacyName": "Lateral Lunge",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:dumbbell-side-lunges",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/dumbbell-side-lunges"
  },
  {
    "legacyId": "builtin-exercise:step-up",
    "legacyName": "Step-Up",
    "legacyCategory": "Legs",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:machine-hip-abduction",
    "legacyName": "Machine Hip Abduction",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:seated-hip-abduction",
    "confidence": "Equivalent",
    "basis": "reviewed canonical-name/setup equivalent in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:cable-hip-abduction",
    "legacyName": "Cable Hip Abduction",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:cable-hip-abducction",
    "confidence": "Equivalent",
    "basis": "reviewed canonical-name/setup equivalent in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:machine-hip-adduction",
    "legacyName": "Machine Hip Adduction",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:seated-hip-adduction",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/seated-hip-adduction"
  },
  {
    "legacyId": "builtin-exercise:standing-calf-raise",
    "legacyName": "Standing Calf Raise",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:standing-calf-raise",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/standing-calf-raise"
  },
  {
    "legacyId": "builtin-exercise:seated-calf-raise",
    "legacyName": "Seated Calf Raise",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:seated-calf-raise",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/seated-calf-raise"
  },
  {
    "legacyId": "builtin-exercise:leg-press-calf-raise",
    "legacyName": "Leg Press Calf Raise",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:calf-leg-press",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/calf-leg-press"
  },
  {
    "legacyId": "builtin-exercise:single-leg-calf-raise",
    "legacyName": "Single-Leg Calf Raise",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:single-leg-calf-raise",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/single-leg-calf-raise"
  },
  {
    "legacyId": "builtin-exercise:crunch",
    "legacyName": "Crunch",
    "legacyCategory": "Core",
    "successorId": "builtin-exercise:abdominal-crunches",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/abs/abdominal-crunches"
  },
  {
    "legacyId": "builtin-exercise:cable-crunch",
    "legacyName": "Cable Crunch",
    "legacyCategory": "Core",
    "successorId": "builtin-exercise:kneeling-cable-abs-crunches",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/abs/kneeling-cable-abs-crunches"
  },
  {
    "legacyId": "builtin-exercise:machine-crunch",
    "legacyName": "Machine Crunch",
    "legacyCategory": "Core",
    "successorId": "builtin-exercise:machine-abdominal-crunches",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/abs/machine-abdominal-crunches"
  },
  {
    "legacyId": "builtin-exercise:reverse-crunch",
    "legacyName": "Reverse Crunch",
    "legacyCategory": "Core",
    "successorId": "builtin-exercise:reverse-crunches",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/abs/reverse-crunches"
  },
  {
    "legacyId": "builtin-exercise:sit-up",
    "legacyName": "Sit-Up",
    "legacyCategory": "Core",
    "successorId": "builtin-exercise:sit-up",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/abs/sit-up"
  },
  {
    "legacyId": "builtin-exercise:hanging-leg-raise",
    "legacyName": "Hanging Leg Raise",
    "legacyCategory": "Core",
    "successorId": "builtin-exercise:hanging-straight-leg-raise",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/abs/hanging-straight-leg-raise"
  },
  {
    "legacyId": "builtin-exercise:hanging-knee-raise",
    "legacyName": "Hanging Knee Raise",
    "legacyCategory": "Core",
    "successorId": "builtin-exercise:hanging-knee-raises",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/abs/hanging-knee-raises"
  },
  {
    "legacyId": "builtin-exercise:captains-chair-knee-raise",
    "legacyName": "Captain’s Chair Knee Raise",
    "legacyCategory": "Core",
    "successorId": "builtin-exercise:captains-chair-knee-raises",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/abs/captains-chair-knee-raises"
  },
  {
    "legacyId": "builtin-exercise:ab-wheel-rollout",
    "legacyName": "Ab Wheel Rollout",
    "legacyCategory": "Core",
    "successorId": "builtin-exercise:ab-wheel-rollout",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/abs/ab-wheel-rollout"
  },
  {
    "legacyId": "builtin-exercise:plank",
    "legacyName": "Plank",
    "legacyCategory": "Core",
    "successorId": "builtin-exercise:plank",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/abs/plank"
  },
  {
    "legacyId": "builtin-exercise:side-plank",
    "legacyName": "Side Plank",
    "legacyCategory": "Core",
    "successorId": "builtin-exercise:side-plank",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/abs/side-plank"
  },
  {
    "legacyId": "builtin-exercise:dead-bug",
    "legacyName": "Dead Bug",
    "legacyCategory": "Core",
    "successorId": "builtin-exercise:dead-bug",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/abs/dead-bug"
  },
  {
    "legacyId": "builtin-exercise:bird-dog",
    "legacyName": "Bird Dog",
    "legacyCategory": "Core",
    "successorId": "builtin-exercise:bird-dog",
    "confidence": "Exact",
    "basis": "exact canonical slug/name in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:pallof-press",
    "legacyName": "Pallof Press",
    "legacyCategory": "Core",
    "successorId": "builtin-exercise:cable-horizontal-pallof-press",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/abs/cable-horizontal-pallof-press"
  },
  {
    "legacyId": "builtin-exercise:band-pallof-press",
    "legacyName": "Band Pallof Press",
    "legacyCategory": "Core",
    "successorId": "builtin-exercise:band-pallof-press",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/abs/band-pallof-press"
  },
  {
    "legacyId": "builtin-exercise:russian-twist",
    "legacyName": "Russian Twist",
    "legacyCategory": "Core",
    "successorId": "builtin-exercise:med-ball-russian-twist",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/abs/med-ball-russian-twist"
  },
  {
    "legacyId": "builtin-exercise:cable-wood-chop",
    "legacyName": "Cable Wood Chop",
    "legacyCategory": "Core",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:landmine-rotation",
    "legacyName": "Landmine Rotation",
    "legacyCategory": "Core",
    "successorId": "builtin-exercise:landmine-twist",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/abs/landmine-twist"
  },
  {
    "legacyId": "builtin-exercise:bicycle-crunch",
    "legacyName": "Bicycle Crunch",
    "legacyCategory": "Core",
    "successorId": "builtin-exercise:bicycle-crunches",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/abs/bicycle-crunches"
  },
  {
    "legacyId": "builtin-exercise:suitcase-carry",
    "legacyName": "Suitcase Carry",
    "legacyCategory": "Core",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:conventional-deadlift",
    "legacyName": "Conventional Deadlift",
    "legacyCategory": "Full Body",
    "successorId": "builtin-exercise:deadlift",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/deadlift"
  },
  {
    "legacyId": "builtin-exercise:sumo-deadlift",
    "legacyName": "Sumo Deadlift",
    "legacyCategory": "Full Body",
    "successorId": "builtin-exercise:sumo-deadlift",
    "confidence": "Exact",
    "basis": "exact canonical slug/name in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:kettlebell-swing",
    "legacyName": "Kettlebell Swing",
    "legacyCategory": "Full Body",
    "successorId": "builtin-exercise:kettlebell-swing",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/kettlebell-swing"
  },
  {
    "legacyId": "builtin-exercise:kettlebell-clean",
    "legacyName": "Kettlebell Clean",
    "legacyCategory": "Full Body",
    "successorId": "builtin-exercise:kettelbell-clean",
    "confidence": "Equivalent",
    "basis": "unique normalized word-order/synonym match in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:kettlebell-clean-and-press",
    "legacyName": "Kettlebell Clean and Press",
    "legacyCategory": "Full Body",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:barbell-clean",
    "legacyName": "Barbell Clean",
    "legacyCategory": "Full Body",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:dumbbell-thruster",
    "legacyName": "Dumbbell Thruster",
    "legacyCategory": "Full Body",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:barbell-thruster",
    "legacyName": "Barbell Thruster",
    "legacyCategory": "Full Body",
    "successorId": "builtin-exercise:barbell-thruster",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/barbell-thruster"
  },
  {
    "legacyId": "builtin-exercise:burpee",
    "legacyName": "Burpee",
    "legacyCategory": "Full Body",
    "successorId": "builtin-exercise:burpee",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/burpee"
  },
  {
    "legacyId": "builtin-exercise:devil-press",
    "legacyName": "Devil Press",
    "legacyCategory": "Full Body",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:farmer-carry",
    "legacyName": "Farmer Carry",
    "legacyCategory": "Full Body",
    "successorId": "builtin-exercise:dumbbell-farmer-carry",
    "confidence": "Equivalent",
    "basis": "reviewed canonical-name/setup equivalent in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:sled-push",
    "legacyName": "Sled Push",
    "legacyCategory": "Full Body",
    "successorId": "builtin-exercise:prowler-sled",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/prowler-sled"
  },
  {
    "legacyId": "builtin-exercise:outdoor-running",
    "legacyName": "Outdoor Running",
    "legacyCategory": "Cardio",
    "successorId": "builtin-exercise:running",
    "confidence": "Equivalent",
    "basis": "reviewed canonical-name/setup equivalent in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:treadmill-running",
    "legacyName": "Treadmill Running",
    "legacyCategory": "Cardio",
    "successorId": "builtin-exercise:treadmill-run",
    "confidence": "Equivalent",
    "basis": "reviewed canonical-name/setup equivalent in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:track-running",
    "legacyName": "Track Running",
    "legacyCategory": "Cardio",
    "successorId": "builtin-exercise:running",
    "confidence": "Equivalent",
    "basis": "reviewed canonical-name/setup equivalent in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:trail-running",
    "legacyName": "Trail Running",
    "legacyCategory": "Cardio",
    "successorId": "builtin-exercise:running",
    "confidence": "Equivalent",
    "basis": "reviewed canonical-name/setup equivalent in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:sprint-intervals",
    "legacyName": "Sprint Intervals",
    "legacyCategory": "Cardio",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:outdoor-walking",
    "legacyName": "Outdoor Walking",
    "legacyCategory": "Cardio",
    "successorId": "builtin-exercise:walking-cardio",
    "confidence": "Equivalent",
    "basis": "reviewed canonical-name/setup equivalent in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:treadmill-walking",
    "legacyName": "Treadmill Walking",
    "legacyCategory": "Cardio",
    "successorId": "builtin-exercise:walking-cardio",
    "confidence": "Equivalent",
    "basis": "reviewed canonical-name/setup equivalent in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:incline-treadmill-walking",
    "legacyName": "Incline Treadmill Walking",
    "legacyCategory": "Cardio",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:hiking",
    "legacyName": "Hiking",
    "legacyCategory": "Cardio",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:outdoor-cycling",
    "legacyName": "Outdoor Cycling",
    "legacyCategory": "Cardio",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:stationary-bike",
    "legacyName": "Stationary Bike",
    "legacyCategory": "Cardio",
    "successorId": "builtin-exercise:stacionary-bike",
    "confidence": "Equivalent",
    "basis": "unique normalized word-order/synonym match in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:spin-bike",
    "legacyName": "Spin Bike",
    "legacyCategory": "Cardio",
    "successorId": "builtin-exercise:stacionary-bike",
    "confidence": "Equivalent",
    "basis": "reviewed canonical-name/setup equivalent in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:air-bike",
    "legacyName": "Air Bike",
    "legacyCategory": "Cardio",
    "successorId": "builtin-exercise:air-bike",
    "confidence": "Exact",
    "basis": "exact canonical slug/name in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:rowing-machine",
    "legacyName": "Rowing Machine",
    "legacyCategory": "Cardio",
    "successorId": "builtin-exercise:rowing-machine",
    "confidence": "Exact",
    "basis": "exact canonical slug/name in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:elliptical",
    "legacyName": "Elliptical",
    "legacyCategory": "Cardio",
    "successorId": "builtin-exercise:elliptical-trainer",
    "confidence": "Equivalent",
    "basis": "reviewed canonical-name/setup equivalent in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:stair-climber",
    "legacyName": "Stair Climber",
    "legacyCategory": "Cardio",
    "successorId": "builtin-exercise:stair-climber",
    "confidence": "Exact",
    "basis": "exact canonical slug/name in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:swimming",
    "legacyName": "Swimming",
    "legacyCategory": "Cardio",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:jump-rope",
    "legacyName": "Jump Rope",
    "legacyCategory": "Cardio",
    "successorId": "builtin-exercise:jump-rope",
    "confidence": "Exact",
    "basis": "exact canonical slug/name in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:skierg",
    "legacyName": "SkiErg",
    "legacyCategory": "Cardio",
    "successorId": "builtin-exercise:ski-ergometer",
    "confidence": "Equivalent",
    "basis": "exact legacy alias match: Ski Ergometer"
  },
  {
    "legacyId": "builtin-exercise:heavy-bag-boxing",
    "legacyName": "Heavy Bag Boxing",
    "legacyCategory": "Cardio",
    "successorId": "builtin-exercise:punching-bag-boxing",
    "confidence": "Equivalent",
    "basis": "reviewed canonical-name/setup equivalent in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:band-shoulder-dislocate",
    "legacyName": "Band Shoulder Dislocate",
    "legacyCategory": "Mobility",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:wall-shoulder-slide",
    "legacyName": "Wall Shoulder Slide",
    "legacyCategory": "Mobility",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:scapular-wall-slide",
    "legacyName": "Scapular Wall Slide",
    "legacyCategory": "Mobility",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:thread-the-needle",
    "legacyName": "Thread the Needle",
    "legacyCategory": "Mobility",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:open-book-rotation",
    "legacyName": "Open Book Rotation",
    "legacyCategory": "Mobility",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:half-kneeling-thoracic-rotation",
    "legacyName": "Half-Kneeling Thoracic Rotation",
    "legacyCategory": "Mobility",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:90-90-hip-switch",
    "legacyName": "90/90 Hip Switch",
    "legacyCategory": "Mobility",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:hip-car",
    "legacyName": "Hip CAR",
    "legacyCategory": "Mobility",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:adductor-rock-back",
    "legacyName": "Adductor Rock Back",
    "legacyCategory": "Mobility",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:knee-to-wall-ankle-mobilization",
    "legacyName": "Knee-to-Wall Ankle Mobilization",
    "legacyCategory": "Mobility",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:worlds-greatest-stretch",
    "legacyName": "World’s Greatest Stretch",
    "legacyCategory": "Mobility",
    "successorId": "builtin-exercise:worlds-greatest-stretch",
    "confidence": "Exact",
    "basis": "exact canonical slug/name in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:inchworm-to-cobra",
    "legacyName": "Inchworm to Cobra",
    "legacyCategory": "Mobility",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:incline-cable-press",
    "legacyName": "Incline Cable Press",
    "legacyCategory": "Chest",
    "successorId": "builtin-exercise:low-cable-incline-bench-press",
    "confidence": "Equivalent",
    "basis": "reviewed canonical-name/setup equivalent in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:single-arm-dumbbell-bench-press",
    "legacyName": "Single-Arm Dumbbell Bench Press",
    "legacyCategory": "Chest",
    "successorId": "builtin-exercise:one-arm-dumbbell-bench-press",
    "confidence": "Equivalent",
    "basis": "unique normalized word-order/synonym match in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:dumbbell-floor-press",
    "legacyName": "Dumbbell Floor Press",
    "legacyCategory": "Chest",
    "successorId": "builtin-exercise:floor-dumbbell-press",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/chest/floor-dumbbell-press"
  },
  {
    "legacyId": "builtin-exercise:barbell-floor-press",
    "legacyName": "Barbell Floor Press",
    "legacyCategory": "Chest",
    "successorId": "builtin-exercise:barbell-floor-press",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/chest/barbell-floor-press"
  },
  {
    "legacyId": "builtin-exercise:plyometric-push-up",
    "legacyName": "Plyometric Push-Up",
    "legacyCategory": "Chest",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:weighted-push-up",
    "legacyName": "Weighted Push-Up",
    "legacyCategory": "Chest",
    "successorId": "builtin-exercise:weighted-push-up",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/chest/weighted-push-up"
  },
  {
    "legacyId": "builtin-exercise:archer-push-up",
    "legacyName": "Archer Push-Up",
    "legacyCategory": "Chest",
    "successorId": "builtin-exercise:archer-push-up",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/chest/archer-push-up"
  },
  {
    "legacyId": "builtin-exercise:decline-machine-press",
    "legacyName": "Decline Machine Press",
    "legacyCategory": "Chest",
    "successorId": "builtin-exercise:decline-chest-press",
    "confidence": "Equivalent",
    "basis": "reviewed canonical-name/setup equivalent in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:smith-machine-decline-press",
    "legacyName": "Smith Machine Decline Press",
    "legacyCategory": "Chest",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:dumbbell-fly",
    "legacyName": "Dumbbell Fly",
    "legacyCategory": "Chest",
    "successorId": "builtin-exercise:dumbbell-chest-fly",
    "confidence": "Equivalent",
    "basis": "reviewed canonical-name/setup equivalent in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:incline-dumbbell-fly",
    "legacyName": "Incline Dumbbell Fly",
    "legacyCategory": "Chest",
    "successorId": "builtin-exercise:incline-dumbbell-chest-fly",
    "confidence": "Equivalent",
    "basis": "reviewed canonical-name/setup equivalent in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:decline-dumbbell-fly",
    "legacyName": "Decline Dumbbell Fly",
    "legacyCategory": "Chest",
    "successorId": "builtin-exercise:decline-dumbbell-fly",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/chest/decline-dumbbell-fly"
  },
  {
    "legacyId": "builtin-exercise:cable-chest-press",
    "legacyName": "Cable Chest Press",
    "legacyCategory": "Chest",
    "successorId": "builtin-exercise:seated-cable-chest-press",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/chest/seated-cable-chest-press"
  },
  {
    "legacyId": "builtin-exercise:suspension-chest-press",
    "legacyName": "Suspension Chest Press",
    "legacyCategory": "Chest",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:ring-push-up",
    "legacyName": "Ring Push-Up",
    "legacyCategory": "Chest",
    "successorId": "builtin-exercise:ring-push-up",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/chest/ring-push-up"
  },
  {
    "legacyId": "builtin-exercise:ring-dip",
    "legacyName": "Ring Dip",
    "legacyCategory": "Chest",
    "successorId": "builtin-exercise:ring-dips",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/triceps/ring-dips"
  },
  {
    "legacyId": "builtin-exercise:deficit-push-up",
    "legacyName": "Deficit Push-Up",
    "legacyCategory": "Chest",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:half-kneeling-single-arm-lat-pulldown",
    "legacyName": "Half-Kneeling Single-Arm Lat Pulldown",
    "legacyCategory": "Back",
    "successorId": "builtin-exercise:one-arm-cable-half-kneeling-lat-pulldown",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/back/one-arm-cable-half-kneeling-lat-pulldown"
  },
  {
    "legacyId": "builtin-exercise:kneeling-cable-lat-prayer",
    "legacyName": "Kneeling Cable Lat Prayer",
    "legacyCategory": "Back",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:seal-row",
    "legacyName": "Seal Row",
    "legacyCategory": "Back",
    "successorId": "builtin-exercise:seal-row",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/back/seal-row"
  },
  {
    "legacyId": "builtin-exercise:meadows-row",
    "legacyName": "Meadows Row",
    "legacyCategory": "Back",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:barbell-shrug",
    "legacyName": "Barbell Shrug",
    "legacyCategory": "Back",
    "successorId": "builtin-exercise:barbell-shoulder-shrug",
    "confidence": "Equivalent",
    "basis": "reviewed canonical-name/setup equivalent in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:scapular-pull-up",
    "legacyName": "Scapular Pull-Up",
    "legacyCategory": "Back",
    "successorId": "builtin-exercise:hanging-scapular-retractions",
    "confidence": "Equivalent",
    "basis": "reviewed canonical-name/setup equivalent in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:weighted-pull-up",
    "legacyName": "Weighted Pull-Up",
    "legacyCategory": "Back",
    "successorId": "builtin-exercise:weighted-pull-up",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/back/weighted-pull-up"
  },
  {
    "legacyId": "builtin-exercise:weighted-chin-up",
    "legacyName": "Weighted Chin-Up",
    "legacyCategory": "Back",
    "successorId": "builtin-exercise:weighted-chin-up",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/biceps/weighted-chin-up"
  },
  {
    "legacyId": "builtin-exercise:band-assisted-pull-up",
    "legacyName": "Band-Assisted Pull-Up",
    "legacyCategory": "Back",
    "successorId": "builtin-exercise:band-assisted-pull-up",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/back/band-assisted-pull-up"
  },
  {
    "legacyId": "builtin-exercise:machine-pullover",
    "legacyName": "Machine Pullover",
    "legacyCategory": "Back",
    "successorId": "builtin-exercise:machine-pullover",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/back/machine-pullover"
  },
  {
    "legacyId": "builtin-exercise:single-arm-cable-row",
    "legacyName": "Single-Arm Cable Row",
    "legacyCategory": "Back",
    "successorId": "builtin-exercise:one-arm-cable-row",
    "confidence": "Equivalent",
    "basis": "unique normalized word-order/synonym match in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:high-row-machine",
    "legacyName": "High Row Machine",
    "legacyCategory": "Back",
    "successorId": "builtin-exercise:lever-high-row",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/back/lever-high-row"
  },
  {
    "legacyId": "builtin-exercise:suspension-row",
    "legacyName": "Suspension Row",
    "legacyCategory": "Back",
    "successorId": "builtin-exercise:suspension-row",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/back/suspension-row"
  },
  {
    "legacyId": "builtin-exercise:resistance-band-row",
    "legacyName": "Resistance Band Row",
    "legacyCategory": "Back",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:resistance-band-lat-pulldown",
    "legacyName": "Resistance Band Lat Pulldown",
    "legacyCategory": "Back",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:resistance-band-pull-apart",
    "legacyName": "Resistance Band Pull-Apart",
    "legacyCategory": "Back",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:reverse-hyperextension",
    "legacyName": "Reverse Hyperextension",
    "legacyCategory": "Back",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:dumbbell-shrug",
    "legacyName": "Dumbbell Shrug",
    "legacyCategory": "Back",
    "successorId": "builtin-exercise:dumbbell-shoulder-shrugs",
    "confidence": "Equivalent",
    "basis": "reviewed canonical-name/setup equivalent in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:cable-shrug",
    "legacyName": "Cable Shrug",
    "legacyCategory": "Back",
    "successorId": "builtin-exercise:cable-shrug",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/back/cable-shrug"
  },
  {
    "legacyId": "builtin-exercise:chest-supported-machine-row",
    "legacyName": "Chest-Supported Machine Row",
    "legacyCategory": "Back",
    "successorId": "builtin-exercise:chest-supported-machine-row",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/back/chest-supported-machine-row"
  },
  {
    "legacyId": "builtin-exercise:seated-cable-high-row",
    "legacyName": "Seated Cable High Row",
    "legacyCategory": "Back",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:barbell-high-pull",
    "legacyName": "Barbell High Pull",
    "legacyCategory": "Back",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:pike-push-up",
    "legacyName": "Pike Push-Up",
    "legacyCategory": "Shoulders",
    "successorId": "builtin-exercise:pike-push-up",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/shoulders/pike-push-up"
  },
  {
    "legacyId": "builtin-exercise:handstand-push-up",
    "legacyName": "Handstand Push-Up",
    "legacyCategory": "Shoulders",
    "successorId": "builtin-exercise:handstand-push-up",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/shoulders/handstand-push-up"
  },
  {
    "legacyId": "builtin-exercise:barbell-upright-row",
    "legacyName": "Barbell Upright Row",
    "legacyCategory": "Shoulders",
    "successorId": "builtin-exercise:barbell-shoulder-grip-upright-row",
    "confidence": "Equivalent",
    "basis": "reviewed canonical-name/setup equivalent in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:cable-y-raise",
    "legacyName": "Cable Y Raise",
    "legacyCategory": "Shoulders",
    "successorId": "builtin-exercise:cable-y-raise",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/shoulders/cable-y-raise"
  },
  {
    "legacyId": "builtin-exercise:single-arm-landmine-press",
    "legacyName": "Single-Arm Landmine Press",
    "legacyCategory": "Shoulders",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:seated-dumbbell-shoulder-press",
    "legacyName": "Seated Dumbbell Shoulder Press",
    "legacyCategory": "Shoulders",
    "successorId": "builtin-exercise:seated-dumbbell-shoulder-press",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/shoulders/seated-dumbbell-shoulder-press"
  },
  {
    "legacyId": "builtin-exercise:band-internal-rotation",
    "legacyName": "Band Internal Rotation",
    "legacyCategory": "Shoulders",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:cable-internal-rotation",
    "legacyName": "Cable Internal Rotation",
    "legacyCategory": "Shoulders",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:prone-y-raise",
    "legacyName": "Prone Y Raise",
    "legacyCategory": "Shoulders",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:prone-t-raise",
    "legacyName": "Prone T Raise",
    "legacyCategory": "Shoulders",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:serratus-push-up",
    "legacyName": "Serratus Push-Up",
    "legacyCategory": "Shoulders",
    "successorId": "builtin-exercise:scapula-push-up",
    "confidence": "Equivalent",
    "basis": "reviewed canonical-name/setup equivalent in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:leaning-dumbbell-lateral-raise",
    "legacyName": "Leaning Dumbbell Lateral Raise",
    "legacyCategory": "Shoulders",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:single-arm-cable-lateral-raise",
    "legacyName": "Single-Arm Cable Lateral Raise",
    "legacyCategory": "Shoulders",
    "successorId": "builtin-exercise:one-arm-cable-lateral-raise",
    "confidence": "Equivalent",
    "basis": "unique normalized word-order/synonym match in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:dumbbell-preacher-curl",
    "legacyName": "Dumbbell Preacher Curl",
    "legacyCategory": "Arms",
    "successorId": "builtin-exercise:double-dumbbell-preacher-curl",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/biceps/double-dumbbell-preacher-curl"
  },
  {
    "legacyId": "builtin-exercise:cable-hammer-curl",
    "legacyName": "Cable Hammer Curl",
    "legacyCategory": "Arms",
    "successorId": "builtin-exercise:rope-cable-hammer-curl",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/biceps/rope-cable-hammer-curl"
  },
  {
    "legacyId": "builtin-exercise:zottman-curl",
    "legacyName": "Zottman Curl",
    "legacyCategory": "Arms",
    "successorId": "builtin-exercise:zottman-curl",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/biceps/zottman-curl"
  },
  {
    "legacyId": "builtin-exercise:dumbbell-skull-crusher",
    "legacyName": "Dumbbell Skull Crusher",
    "legacyCategory": "Arms",
    "successorId": "builtin-exercise:dumbbell-lying-triceps-extension",
    "confidence": "Equivalent",
    "basis": "reviewed canonical-name/setup equivalent in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:jm-press",
    "legacyName": "JM Press",
    "legacyCategory": "Arms",
    "successorId": "builtin-exercise:jm-press",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/triceps/jm-press"
  },
  {
    "legacyId": "builtin-exercise:wrist-roller",
    "legacyName": "Wrist Roller",
    "legacyCategory": "Arms",
    "successorId": "builtin-exercise:wrist-roller",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/forearms/wrist-roller"
  },
  {
    "legacyId": "builtin-exercise:machine-biceps-curl",
    "legacyName": "Machine Biceps Curl",
    "legacyCategory": "Arms",
    "successorId": "builtin-exercise:machine-biceps-curl",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/biceps/machine-biceps-curl"
  },
  {
    "legacyId": "builtin-exercise:cable-preacher-curl",
    "legacyName": "Cable Preacher Curl",
    "legacyCategory": "Arms",
    "successorId": "builtin-exercise:cable-preacher-curl",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/biceps/cable-preacher-curl"
  },
  {
    "legacyId": "builtin-exercise:suspension-biceps-curl",
    "legacyName": "Suspension Biceps Curl",
    "legacyCategory": "Arms",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:incline-hammer-curl",
    "legacyName": "Incline Hammer Curl",
    "legacyCategory": "Arms",
    "successorId": "builtin-exercise:dumbbell-incline-hammer-curl",
    "confidence": "Equivalent",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/biceps/dumbbell-incline-hammer-curl"
  },
  {
    "legacyId": "builtin-exercise:cable-reverse-curl",
    "legacyName": "Cable Reverse Curl",
    "legacyCategory": "Arms",
    "successorId": "builtin-exercise:reverse-grip-cable-curl",
    "confidence": "Equivalent",
    "basis": "reviewed canonical-name/setup equivalent in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:cable-skull-crusher",
    "legacyName": "Cable Skull Crusher",
    "legacyCategory": "Arms",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:single-arm-overhead-cable-triceps-extension",
    "legacyName": "Single-Arm Overhead Cable Triceps Extension",
    "legacyCategory": "Arms",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:machine-triceps-extension",
    "legacyName": "Machine Triceps Extension",
    "legacyCategory": "Arms",
    "successorId": "builtin-exercise:machine-triceps-extension",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/triceps/machine-triceps-extension"
  },
  {
    "legacyId": "builtin-exercise:machine-dip",
    "legacyName": "Machine Dip",
    "legacyCategory": "Arms",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:suspension-triceps-extension",
    "legacyName": "Suspension Triceps Extension",
    "legacyCategory": "Arms",
    "successorId": "builtin-exercise:suspension-triceps-extension",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/triceps/suspension-triceps-extension"
  },
  {
    "legacyId": "builtin-exercise:bodyweight-triceps-extension",
    "legacyName": "Bodyweight Triceps Extension",
    "legacyCategory": "Arms",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:dead-hang",
    "legacyName": "Dead Hang",
    "legacyCategory": "Arms",
    "successorId": "builtin-exercise:dead-hang",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/forearms/dead-hang"
  },
  {
    "legacyId": "builtin-exercise:hand-gripper",
    "legacyName": "Hand Gripper",
    "legacyCategory": "Arms",
    "successorId": "builtin-exercise:hand-gripper",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/forearms/hand-gripper"
  },
  {
    "legacyId": "builtin-exercise:farmer-hold",
    "legacyName": "Farmer Hold",
    "legacyCategory": "Arms",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:kettlebell-goblet-squat",
    "legacyName": "Kettlebell Goblet Squat",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:kettlebell-goblet-squat",
    "confidence": "Exact",
    "basis": "exact canonical slug/name in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:barbell-step-up",
    "legacyName": "Barbell Step-Up",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:barbell-step-up",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/barbell-step-up"
  },
  {
    "legacyId": "builtin-exercise:pistol-squat",
    "legacyName": "Pistol Squat",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:pistol-squat",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/pistol-squat"
  },
  {
    "legacyId": "builtin-exercise:reverse-nordic-curl",
    "legacyName": "Reverse Nordic Curl",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:reverse-nordic-curl",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/reverse-nordic-curl"
  },
  {
    "legacyId": "builtin-exercise:tibialis-raise",
    "legacyName": "Tibialis Raise",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:standing-tibialis-raise",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/standing-tibialis-raise"
  },
  {
    "legacyId": "builtin-exercise:curtsy-lunge",
    "legacyName": "Curtsy Lunge",
    "legacyCategory": "Legs",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:pendulum-squat",
    "legacyName": "Pendulum Squat",
    "legacyCategory": "Legs",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:front-foot-elevated-split-squat",
    "legacyName": "Front-Foot-Elevated Split Squat",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:split-squat-front-foot-elevated",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/split-squat-front-foot-elevated"
  },
  {
    "legacyId": "builtin-exercise:barbell-reverse-lunge",
    "legacyName": "Barbell Reverse Lunge",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:barbell-reverse-lunges",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/barbell-reverse-lunges"
  },
  {
    "legacyId": "builtin-exercise:barbell-walking-lunge",
    "legacyName": "Barbell Walking Lunge",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:barbell-walking-lunges",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/barbell-walking-lunges"
  },
  {
    "legacyId": "builtin-exercise:barbell-glute-bridge",
    "legacyName": "Barbell Glute Bridge",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:barbell-glute-bridge",
    "confidence": "Exact",
    "basis": "exact canonical slug/name in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:machine-hip-thrust",
    "legacyName": "Machine Hip Thrust",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:machine-hip-thrust",
    "confidence": "Exact",
    "basis": "exact canonical slug/name in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:machine-glute-kickback",
    "legacyName": "Machine Glute Kickback",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:glute-machine-kickback",
    "confidence": "Equivalent",
    "basis": "unique normalized word-order/synonym match in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:frog-pump",
    "legacyName": "Frog Pump",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:frog-pump",
    "confidence": "Exact",
    "basis": "exact canonical slug/name in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:b-stance-hip-thrust",
    "legacyName": "B-Stance Hip Thrust",
    "legacyCategory": "Legs",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:resistance-band-hip-abduction",
    "legacyName": "Resistance Band Hip Abduction",
    "legacyCategory": "Legs",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:side-lying-hip-abduction",
    "legacyName": "Side-Lying Hip Abduction",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:side-lying-hip-abduction",
    "confidence": "Exact",
    "basis": "exact canonical slug/name in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:clamshell",
    "legacyName": "Clamshell",
    "legacyCategory": "Legs",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:cable-hip-adduction",
    "legacyName": "Cable Hip Adduction",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:cable-hip-adduction",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/cable-hip-adduction"
  },
  {
    "legacyId": "builtin-exercise:stiff-leg-deadlift",
    "legacyName": "Stiff-Leg Deadlift",
    "legacyCategory": "Legs",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:trap-bar-deadlift",
    "legacyName": "Trap Bar Deadlift",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:trap-bar-deadlift",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/trap-bar-deadlift"
  },
  {
    "legacyId": "builtin-exercise:landmine-romanian-deadlift",
    "legacyName": "Landmine Romanian Deadlift",
    "legacyCategory": "Legs",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:landmine-squat",
    "legacyName": "Landmine Squat",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:landmine-squat",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/landmine-squat"
  },
  {
    "legacyId": "builtin-exercise:landmine-reverse-lunge",
    "legacyName": "Landmine Reverse Lunge",
    "legacyCategory": "Legs",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:dumbbell-split-squat",
    "legacyName": "Dumbbell Split Squat",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:dumbbell-split-squat",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/dumbbell-split-squat"
  },
  {
    "legacyId": "builtin-exercise:barbell-bulgarian-split-squat",
    "legacyName": "Barbell Bulgarian Split Squat",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:barbell-bulgarian-squat",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/barbell-bulgarian-squat"
  },
  {
    "legacyId": "builtin-exercise:single-leg-lying-leg-curl",
    "legacyName": "Single-Leg Lying Leg Curl",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:single-leg-lying-curl",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/single-leg-lying-curl"
  },
  {
    "legacyId": "builtin-exercise:single-leg-seated-leg-curl",
    "legacyName": "Single-Leg Seated Leg Curl",
    "legacyCategory": "Legs",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:slider-hamstring-curl",
    "legacyName": "Slider Hamstring Curl",
    "legacyCategory": "Legs",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:suspension-hamstring-curl",
    "legacyName": "Suspension Hamstring Curl",
    "legacyCategory": "Legs",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:smith-machine-calf-raise",
    "legacyName": "Smith Machine Calf Raise",
    "legacyCategory": "Legs",
    "successorId": "builtin-exercise:smith-calf-raises",
    "confidence": "Equivalent",
    "basis": "reviewed canonical-name/setup equivalent in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:seated-tibialis-raise",
    "legacyName": "Seated Tibialis Raise",
    "legacyCategory": "Legs",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:lying-leg-raise",
    "legacyName": "Lying Leg Raise",
    "legacyCategory": "Core",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:hollow-body-hold",
    "legacyName": "Hollow Body Hold",
    "legacyCategory": "Core",
    "successorId": "builtin-exercise:hollow-body-hold",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/abs/hollow-body-hold"
  },
  {
    "legacyId": "builtin-exercise:bear-plank",
    "legacyName": "Bear Plank",
    "legacyCategory": "Core",
    "successorId": "builtin-exercise:bear-plank",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/abs/bear-plank"
  },
  {
    "legacyId": "builtin-exercise:plank-shoulder-tap",
    "legacyName": "Plank Shoulder Tap",
    "legacyCategory": "Core",
    "successorId": "builtin-exercise:shoulder-tap",
    "confidence": "Equivalent",
    "basis": "reviewed canonical-name/setup equivalent in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:weighted-sit-up",
    "legacyName": "Weighted Sit-Up",
    "legacyCategory": "Core",
    "successorId": "builtin-exercise:weighted-sit-up",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/abs/weighted-sit-up"
  },
  {
    "legacyId": "builtin-exercise:copenhagen-plank",
    "legacyName": "Copenhagen Plank",
    "legacyCategory": "Core",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:dragon-flag",
    "legacyName": "Dragon Flag",
    "legacyCategory": "Core",
    "successorId": "builtin-exercise:dragon-flag",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/abs/dragon-flag"
  },
  {
    "legacyId": "builtin-exercise:v-up",
    "legacyName": "V-Up",
    "legacyCategory": "Core",
    "successorId": "builtin-exercise:v-up",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/abs/v-up"
  },
  {
    "legacyId": "builtin-exercise:toes-to-bar",
    "legacyName": "Toes-to-Bar",
    "legacyCategory": "Core",
    "successorId": "builtin-exercise:toes-to-bar",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/abs/toes-to-bar"
  },
  {
    "legacyId": "builtin-exercise:body-saw",
    "legacyName": "Body Saw",
    "legacyCategory": "Core",
    "successorId": "builtin-exercise:saw-plank",
    "confidence": "Equivalent",
    "basis": "reviewed canonical-name/setup equivalent in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:stability-ball-rollout",
    "legacyName": "Stability Ball Rollout",
    "legacyCategory": "Core",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:stir-the-pot",
    "legacyName": "Stir the Pot",
    "legacyCategory": "Core",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:long-lever-plank",
    "legacyName": "Long-Lever Plank",
    "legacyCategory": "Core",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:cable-pallof-hold",
    "legacyName": "Cable Pallof Hold",
    "legacyCategory": "Core",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:half-kneeling-pallof-press",
    "legacyName": "Half-Kneeling Pallof Press",
    "legacyCategory": "Core",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:suitcase-march",
    "legacyName": "Suitcase March",
    "legacyCategory": "Core",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:l-sit",
    "legacyName": "L-Sit",
    "legacyCategory": "Core",
    "successorId": "builtin-exercise:l-sit",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/abs/l-sit"
  },
  {
    "legacyId": "builtin-exercise:hanging-knee-raise-with-twist",
    "legacyName": "Hanging Knee Raise with Twist",
    "legacyCategory": "Core",
    "successorId": "builtin-exercise:hanging-oblique-knee-raise",
    "confidence": "Equivalent",
    "basis": "reviewed canonical-name/setup equivalent in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:cable-reverse-wood-chop",
    "legacyName": "Cable Reverse Wood Chop",
    "legacyCategory": "Core",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:decline-sit-up",
    "legacyName": "Decline Sit-Up",
    "legacyCategory": "Core",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:ghd-sit-up",
    "legacyName": "GHD Sit-Up",
    "legacyCategory": "Core",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:turkish-get-up",
    "legacyName": "Turkish Get-Up",
    "legacyCategory": "Full Body",
    "successorId": "builtin-exercise:turkish-get-up",
    "confidence": "Exact",
    "basis": "exact canonical slug/name in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:medicine-ball-slam",
    "legacyName": "Medicine Ball Slam",
    "legacyCategory": "Full Body",
    "successorId": "builtin-exercise:medicine-ball-slam",
    "confidence": "Exact",
    "basis": "exact canonical slug/name in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:battle-rope-alternating-waves",
    "legacyName": "Battle Rope Alternating Waves",
    "legacyCategory": "Full Body",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:bear-crawl",
    "legacyName": "Bear Crawl",
    "legacyCategory": "Full Body",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:box-jump",
    "legacyName": "Box Jump",
    "legacyCategory": "Full Body",
    "successorId": "builtin-exercise:box-jumps",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/box-jumps"
  },
  {
    "legacyId": "builtin-exercise:sandbag-clean",
    "legacyName": "Sandbag Clean",
    "legacyCategory": "Full Body",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:renegade-row",
    "legacyName": "Renegade Row",
    "legacyCategory": "Full Body",
    "successorId": "builtin-exercise:alternate-renegade-row",
    "confidence": "Equivalent",
    "basis": "reviewed canonical-name/setup equivalent in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:power-clean",
    "legacyName": "Power Clean",
    "legacyCategory": "Full Body",
    "successorId": "builtin-exercise:power-clean",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/power-clean"
  },
  {
    "legacyId": "builtin-exercise:barbell-snatch",
    "legacyName": "Barbell Snatch",
    "legacyCategory": "Full Body",
    "successorId": "builtin-exercise:snatch",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/snatch"
  },
  {
    "legacyId": "builtin-exercise:power-snatch",
    "legacyName": "Power Snatch",
    "legacyCategory": "Full Body",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:clean-and-jerk",
    "legacyName": "Clean and Jerk",
    "legacyCategory": "Full Body",
    "successorId": "builtin-exercise:clean-and-jerk",
    "confidence": "Exact",
    "basis": "verified Phase 1G source page: https://smartworkout.app/en/exercise-library/legs/clean-and-jerk"
  },
  {
    "legacyId": "builtin-exercise:barbell-clean-and-press",
    "legacyName": "Barbell Clean and Press",
    "legacyCategory": "Full Body",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:kettlebell-snatch",
    "legacyName": "Kettlebell Snatch",
    "legacyCategory": "Full Body",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:kettlebell-deadlift",
    "legacyName": "Kettlebell Deadlift",
    "legacyCategory": "Full Body",
    "successorId": "builtin-exercise:kettlebell-deadlift",
    "confidence": "Exact",
    "basis": "exact canonical slug/name in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:kettlebell-front-rack-carry",
    "legacyName": "Kettlebell Front Rack Carry",
    "legacyCategory": "Full Body",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:kettlebell-push-press",
    "legacyName": "Kettlebell Push Press",
    "legacyCategory": "Full Body",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:kettlebell-thruster",
    "legacyName": "Kettlebell Thruster",
    "legacyCategory": "Full Body",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:dumbbell-clean",
    "legacyName": "Dumbbell Clean",
    "legacyCategory": "Full Body",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:dumbbell-snatch",
    "legacyName": "Dumbbell Snatch",
    "legacyCategory": "Full Body",
    "successorId": "builtin-exercise:dumbbell-snatch",
    "confidence": "Exact",
    "basis": "exact canonical slug/name in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:dumbbell-clean-and-press",
    "legacyName": "Dumbbell Clean and Press",
    "legacyCategory": "Full Body",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:trap-bar-carry",
    "legacyName": "Trap Bar Carry",
    "legacyCategory": "Full Body",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:overhead-carry",
    "legacyName": "Overhead Carry",
    "legacyCategory": "Full Body",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:front-rack-carry",
    "legacyName": "Front Rack Carry",
    "legacyCategory": "Full Body",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:zercher-carry",
    "legacyName": "Zercher Carry",
    "legacyCategory": "Full Body",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:sandbag-carry",
    "legacyName": "Sandbag Carry",
    "legacyCategory": "Full Body",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:sled-pull",
    "legacyName": "Sled Pull",
    "legacyCategory": "Full Body",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:muscle-up",
    "legacyName": "Muscle-Up",
    "legacyCategory": "Full Body",
    "successorId": "builtin-exercise:muscle-up",
    "confidence": "Exact",
    "basis": "exact canonical slug/name in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:recumbent-bike",
    "legacyName": "Recumbent Bike",
    "legacyCategory": "Cardio",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:kickboxing",
    "legacyName": "Kickboxing",
    "legacyCategory": "Cardio",
    "successorId": "builtin-exercise:kickboxing",
    "confidence": "Exact",
    "basis": "exact canonical slug/name in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:circuit-training",
    "legacyName": "Circuit Training",
    "legacyCategory": "Cardio",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:hiit-session",
    "legacyName": "HIIT Session",
    "legacyCategory": "Cardio",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:battle-rope-intervals",
    "legacyName": "Battle Rope Intervals",
    "legacyCategory": "Cardio",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:sled-drag-conditioning",
    "legacyName": "Sled Drag Conditioning",
    "legacyCategory": "Cardio",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:hill-running",
    "legacyName": "Hill Running",
    "legacyCategory": "Cardio",
    "successorId": "builtin-exercise:running",
    "confidence": "Equivalent",
    "basis": "reviewed canonical-name/setup equivalent in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:treadmill-incline-running",
    "legacyName": "Treadmill Incline Running",
    "legacyCategory": "Cardio",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:rucking",
    "legacyName": "Rucking",
    "legacyCategory": "Cardio",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:mountain-biking",
    "legacyName": "Mountain Biking",
    "legacyCategory": "Cardio",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:bikeerg",
    "legacyName": "BikeErg",
    "legacyCategory": "Cardio",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:hand-cycle",
    "legacyName": "Hand Cycle",
    "legacyCategory": "Cardio",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:outdoor-rowing",
    "legacyName": "Outdoor Rowing",
    "legacyCategory": "Cardio",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:kayaking",
    "legacyName": "Kayaking",
    "legacyCategory": "Cardio",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:canoeing",
    "legacyName": "Canoeing",
    "legacyCategory": "Cardio",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:vertical-climber",
    "legacyName": "Vertical Climber",
    "legacyCategory": "Cardio",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:stepper",
    "legacyName": "Stepper",
    "legacyCategory": "Cardio",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:double-unders",
    "legacyName": "Double Unders",
    "legacyCategory": "Cardio",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:shadow-boxing",
    "legacyName": "Shadow Boxing",
    "legacyCategory": "Cardio",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:shuttle-run",
    "legacyName": "Shuttle Run",
    "legacyCategory": "Cardio",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:mountain-climbers",
    "legacyName": "Mountain Climbers",
    "legacyCategory": "Cardio",
    "successorId": "builtin-exercise:mountain-climber",
    "confidence": "Equivalent",
    "basis": "reviewed canonical-name/setup equivalent in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:jumping-jacks",
    "legacyName": "Jumping Jacks",
    "legacyCategory": "Cardio",
    "successorId": "builtin-exercise:jumping-jacks",
    "confidence": "Exact",
    "basis": "exact canonical slug/name in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:freestyle-swimming",
    "legacyName": "Freestyle Swimming",
    "legacyCategory": "Cardio",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:breaststroke-swimming",
    "legacyName": "Breaststroke Swimming",
    "legacyCategory": "Cardio",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:backstroke-swimming",
    "legacyName": "Backstroke Swimming",
    "legacyCategory": "Cardio",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:butterfly-swimming",
    "legacyName": "Butterfly Swimming",
    "legacyCategory": "Cardio",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:battle-rope-double-waves",
    "legacyName": "Battle Rope Double Waves",
    "legacyCategory": "Cardio",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:cat-cow",
    "legacyName": "Cat-Cow",
    "legacyCategory": "Mobility",
    "successorId": "builtin-exercise:cat-cow",
    "confidence": "Exact",
    "basis": "exact canonical slug/name in live SmartWorkout inventory"
  },
  {
    "legacyId": "builtin-exercise:deep-squat-pry",
    "legacyName": "Deep Squat Pry",
    "legacyCategory": "Mobility",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:ankle-car",
    "legacyName": "Ankle CAR",
    "legacyCategory": "Mobility",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:shoulder-car",
    "legacyName": "Shoulder CAR",
    "legacyCategory": "Mobility",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:thoracic-extension-on-foam-roller",
    "legacyName": "Thoracic Extension on Foam Roller",
    "legacyCategory": "Mobility",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:cossack-squat-mobility",
    "legacyName": "Cossack Squat Mobility",
    "legacyCategory": "Mobility",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:scapular-car",
    "legacyName": "Scapular CAR",
    "legacyCategory": "Mobility",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:wrist-car",
    "legacyName": "Wrist CAR",
    "legacyCategory": "Mobility",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:neck-car",
    "legacyName": "Neck CAR",
    "legacyCategory": "Mobility",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:quadruped-thoracic-rotation",
    "legacyName": "Quadruped Thoracic Rotation",
    "legacyCategory": "Mobility",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:prone-cobra",
    "legacyName": "Prone Cobra",
    "legacyCategory": "Mobility",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:half-kneeling-hip-flexor-mobilization",
    "legacyName": "Half-Kneeling Hip Flexor Mobilization",
    "legacyCategory": "Mobility",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:hip-airplane",
    "legacyName": "Hip Airplane",
    "legacyCategory": "Mobility",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:shin-box-transition",
    "legacyName": "Shin Box Transition",
    "legacyCategory": "Mobility",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:banded-ankle-mobilization",
    "legacyName": "Banded Ankle Mobilization",
    "legacyCategory": "Mobility",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:calf-rock",
    "legacyName": "Calf Rock",
    "legacyCategory": "Mobility",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:hamstring-walkout",
    "legacyName": "Hamstring Walkout",
    "legacyCategory": "Mobility",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:half-kneeling-adductor-mobilization",
    "legacyName": "Half-Kneeling Adductor Mobilization",
    "legacyCategory": "Mobility",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:sumo-squat-hold",
    "legacyName": "Sumo Squat Hold",
    "legacyCategory": "Mobility",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:lateral-squat-shift",
    "legacyName": "Lateral Squat Shift",
    "legacyCategory": "Mobility",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:bear-sit-rotation",
    "legacyName": "Bear Sit Rotation",
    "legacyCategory": "Mobility",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  },
  {
    "legacyId": "builtin-exercise:standing-hip-car",
    "legacyName": "Standing Hip CAR",
    "legacyCategory": "Mobility",
    "successorId": null,
    "confidence": "Removed",
    "basis": "No exact or high-confidence SmartWorkout successor"
  }
] as const satisfies readonly LegacyExerciseMigration[]

export const LEGACY_EXERCISE_ID_MAP: Readonly<Record<string, string | null>> = Object.fromEntries(
  LEGACY_EXERCISE_MIGRATIONS.map((migration) => [migration.legacyId, migration.successorId]),
)

export const LEGACY_RETIRED_EXERCISES = LEGACY_EXERCISE_MIGRATIONS.filter((migration) => !migration.successorId)
