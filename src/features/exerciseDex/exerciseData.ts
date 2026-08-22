import type {
  Exercise,
  ExerciseCategory,
  ExerciseEquipment,
  ExerciseTrackingType,
  MovementPattern,
} from '../../data/models'
import { additionalBuiltInExercises, cardioMetricsFor, FINAL_ALIAS_ADDITIONS } from './exerciseDataV2Additions.ts'

export const BUILT_IN_EXERCISE_DATASET_VERSION = 2
export const BUILT_IN_EXERCISE_DATASET_METADATA_ID = 'built-in-exercise-dataset-version'

const DATASET_TIMESTAMP = '2026-08-23T00:00:00.000Z'

type CardioSubtype = NonNullable<Exercise['cardioSubtype']>
type Definition = readonly [
  name: string,
  region: string,
  equipment: ExerciseEquipment,
  trackingType: ExerciseTrackingType,
  primaryMuscle: string,
  secondaryMuscles?: readonly string[],
  movementPattern?: MovementPattern,
  aliases?: readonly string[],
  cardioSubtype?: CardioSubtype,
  instructions?: string,
]

function stableSlug(name: string) {
  return name
    .normalize('NFKD')
    .replace(/[’']/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase()
}

function createCategory(category: ExerciseCategory, definitions: readonly Definition[]): Exercise[] {
  return definitions.map(([name, region, equipment, trackingType, primaryMuscle, secondaryMuscles = [], movementPattern, aliases = [], cardioSubtype, instructions]) => ({
    id: `builtin-exercise:${stableSlug(name)}`,
    name,
    aliases: [...aliases],
    category,
    primaryMuscles: [primaryMuscle],
    secondaryMuscles: [...secondaryMuscles],
    muscleRegions: [region],
    equipment,
    trackingType,
    movementPattern,
    source: 'built-in',
    sourceId: stableSlug(name),
    archived: false,
    cardioSubtype,
    instructions,
    createdAt: DATASET_TIMESTAMP,
    updatedAt: DATASET_TIMESTAMP,
  }))
}

const chest = createCategory('Chest', [
  ['Barbell Bench Press', 'General', 'Barbell', 'weight_reps', 'General Chest', ['Triceps', 'Front Delts'], 'Horizontal Push', ['Bench Press']],
  ['Dumbbell Bench Press', 'General', 'Dumbbell', 'weight_reps', 'General Chest', ['Triceps', 'Front Delts'], 'Horizontal Push', ['Dumbbell Chest Press']],
  ['Incline Barbell Bench Press', 'Upper', 'Barbell', 'weight_reps', 'Upper Chest', ['Triceps', 'Front Delts'], 'Horizontal Push', ['Incline Bench Press']],
  ['Incline Dumbbell Bench Press', 'Upper', 'Dumbbell', 'weight_reps', 'Upper Chest', ['Triceps', 'Front Delts'], 'Horizontal Push', ['Incline Dumbbell Press']],
  ['Decline Barbell Bench Press', 'Lower', 'Barbell', 'weight_reps', 'Lower Chest', ['Triceps', 'Front Delts'], 'Horizontal Push', ['Decline Bench Press']],
  ['Decline Dumbbell Bench Press', 'Lower', 'Dumbbell', 'weight_reps', 'Lower Chest', ['Triceps'], 'Horizontal Push', ['Decline Dumbbell Press']],
  ['Machine Chest Press', 'General', 'Machine', 'weight_reps', 'General Chest', ['Triceps', 'Front Delts'], 'Horizontal Push'],
  ['Incline Machine Press', 'Upper', 'Machine', 'weight_reps', 'Upper Chest', ['Triceps', 'Front Delts'], 'Horizontal Push'],
  ['Smith Machine Bench Press', 'General', 'Smith Machine', 'weight_reps', 'General Chest', ['Triceps', 'Front Delts'], 'Horizontal Push'],
  ['Smith Machine Incline Press', 'Upper', 'Smith Machine', 'weight_reps', 'Upper Chest', ['Triceps', 'Front Delts'], 'Horizontal Push'],
  ['Cable Fly', 'General', 'Cable', 'weight_reps', 'General Chest', ['Front Delts'], 'Horizontal Push', ['Cable Crossover']],
  ['Low-to-High Cable Fly', 'Upper', 'Cable', 'weight_reps', 'Upper Chest', ['Front Delts'], 'Horizontal Push'],
  ['High-to-Low Cable Fly', 'Lower', 'Cable', 'weight_reps', 'Lower Chest', [], 'Horizontal Push'],
  ['Pec Deck', 'General', 'Machine', 'weight_reps', 'General Chest', ['Front Delts'], 'Horizontal Push', ['Machine Fly']],
  ['Push-Up', 'General', 'Bodyweight', 'bodyweight_reps', 'General Chest', ['Triceps', 'Front Delts'], 'Horizontal Push', ['Pushup']],
  ['Incline Push-Up', 'Lower', 'Bodyweight', 'bodyweight_reps', 'Lower Chest', ['Triceps'], 'Horizontal Push'],
  ['Decline Push-Up', 'Upper', 'Bodyweight', 'bodyweight_reps', 'Upper Chest', ['Triceps', 'Front Delts'], 'Horizontal Push'],
  ['Chest Dip', 'Lower', 'Bodyweight', 'bodyweight_reps', 'Lower Chest', ['Triceps', 'Front Delts'], 'Vertical Push'],
  ['Dumbbell Squeeze Press', 'General', 'Dumbbell', 'weight_reps', 'General Chest', ['Triceps'], 'Horizontal Push', ['Hex Press']],
  ['Single-Arm Cable Chest Press', 'General', 'Cable', 'weight_reps', 'General Chest', ['Triceps', 'Core'], 'Horizontal Push'],
  ['Resistance Band Chest Press', 'General', 'Resistance Band', 'weight_reps', 'General Chest', ['Triceps'], 'Horizontal Push'],
  ['Plate Pinch Press', 'General', 'Weight Plate', 'weight_reps', 'General Chest', ['Front Delts', 'Triceps'], 'Horizontal Push', ['Svend Press']],
])

const back = createCategory('Back', [
  ['Lat Pulldown', 'Lats', 'Cable', 'weight_reps', 'Lats', ['Biceps', 'Upper Back'], 'Vertical Pull', ['Lat Pull Down']],
  ['Neutral-Grip Lat Pulldown', 'Lats', 'Cable', 'weight_reps', 'Lats', ['Biceps'], 'Vertical Pull'],
  ['Wide-Grip Lat Pulldown', 'Lats', 'Cable', 'weight_reps', 'Lats', ['Upper Back', 'Biceps'], 'Vertical Pull'],
  ['Reverse-Grip Lat Pulldown', 'Lats', 'Cable', 'weight_reps', 'Lats', ['Biceps'], 'Vertical Pull', ['Underhand Lat Pulldown']],
  ['Pull-Up', 'Lats', 'Pull-Up Bar', 'bodyweight_reps', 'Lats', ['Biceps', 'Upper Back'], 'Vertical Pull', ['Pullup']],
  ['Chin-Up', 'Lats', 'Pull-Up Bar', 'bodyweight_reps', 'Lats', ['Biceps'], 'Vertical Pull', ['Chinup']],
  ['Neutral-Grip Pull-Up', 'Lats', 'Pull-Up Bar', 'bodyweight_reps', 'Lats', ['Biceps', 'Upper Back'], 'Vertical Pull'],
  ['Assisted Pull-Up', 'Lats', 'Machine', 'assisted_bodyweight', 'Lats', ['Biceps', 'Upper Back'], 'Vertical Pull'],
  ['Seated Cable Row', 'Upper Back', 'Cable', 'weight_reps', 'Upper Back', ['Lats', 'Biceps'], 'Horizontal Pull'],
  ['Wide-Grip Seated Cable Row', 'Upper Back', 'Cable', 'weight_reps', 'Upper Back', ['Rear Delts', 'Biceps'], 'Horizontal Pull'],
  ['Chest-Supported Dumbbell Row', 'Upper Back', 'Dumbbell', 'weight_reps', 'Upper Back', ['Lats', 'Biceps'], 'Horizontal Pull'],
  ['Chest-Supported T-Bar Row', 'Upper Back', 'Machine', 'weight_reps', 'Upper Back', ['Lats', 'Biceps'], 'Horizontal Pull'],
  ['Machine Row', 'Upper Back', 'Machine', 'weight_reps', 'Upper Back', ['Lats', 'Biceps'], 'Horizontal Pull'],
  ['Iso-Lateral Machine Row', 'Lats', 'Machine', 'weight_reps', 'Lats', ['Upper Back', 'Biceps'], 'Horizontal Pull'],
  ['Barbell Bent-Over Row', 'Upper Back', 'Barbell', 'weight_reps', 'Upper Back', ['Lats', 'Biceps', 'Lower Back'], 'Horizontal Pull', ['Barbell Row']],
  ['Pendlay Row', 'Upper Back', 'Barbell', 'weight_reps', 'Upper Back', ['Lats', 'Biceps', 'Lower Back'], 'Horizontal Pull'],
  ['Single-Arm Dumbbell Row', 'Lats', 'Dumbbell', 'weight_reps', 'Lats', ['Upper Back', 'Biceps'], 'Horizontal Pull', ['Dumbbell Row']],
  ['T-Bar Row', 'Upper Back', 'Landmine', 'weight_reps', 'Upper Back', ['Lats', 'Biceps'], 'Horizontal Pull'],
  ['Landmine Row', 'Upper Back', 'Landmine', 'weight_reps', 'Upper Back', ['Lats', 'Biceps'], 'Horizontal Pull'],
  ['Inverted Row', 'Upper Back', 'Bodyweight', 'bodyweight_reps', 'Upper Back', ['Lats', 'Biceps'], 'Horizontal Pull', ['Bodyweight Row']],
  ['Straight-Arm Pulldown', 'Lats', 'Cable', 'weight_reps', 'Lats', ['Triceps'], 'Extension'],
  ['Cable Pullover', 'Lats', 'Cable', 'weight_reps', 'Lats', ['General Chest'], 'Extension'],
  ['Dumbbell Pullover', 'Lats', 'Dumbbell', 'weight_reps', 'Lats', ['General Chest', 'Triceps'], 'Extension'],
  ['Rack Pull', 'Lower Back', 'Barbell', 'weight_reps', 'Lower Back', ['Glutes', 'Hamstrings', 'Traps'], 'Hinge'],
  ['45-Degree Back Extension', 'Lower Back', 'Machine', 'bodyweight_reps', 'Lower Back', ['Glutes', 'Hamstrings'], 'Extension', ['Hyperextension']],
  ['Barbell Good Morning', 'Lower Back', 'Barbell', 'weight_reps', 'Lower Back', ['Hamstrings', 'Glutes'], 'Hinge', ['Good Morning']],
])

const shoulders = createCategory('Shoulders', [
  ['Barbell Overhead Press', 'Front Delts', 'Barbell', 'weight_reps', 'Front Delts', ['Triceps', 'Side Delts'], 'Vertical Push', ['Military Press']],
  ['Seated Barbell Shoulder Press', 'Front Delts', 'Barbell', 'weight_reps', 'Front Delts', ['Triceps', 'Side Delts'], 'Vertical Push'],
  ['Dumbbell Shoulder Press', 'Front Delts', 'Dumbbell', 'weight_reps', 'Front Delts', ['Triceps', 'Side Delts'], 'Vertical Push'],
  ['Arnold Press', 'Front Delts', 'Dumbbell', 'weight_reps', 'Front Delts', ['Side Delts', 'Triceps'], 'Vertical Push'],
  ['Machine Shoulder Press', 'Front Delts', 'Machine', 'weight_reps', 'Front Delts', ['Triceps', 'Side Delts'], 'Vertical Push'],
  ['Smith Machine Shoulder Press', 'Front Delts', 'Smith Machine', 'weight_reps', 'Front Delts', ['Triceps', 'Side Delts'], 'Vertical Push'],
  ['Landmine Press', 'Front Delts', 'Landmine', 'weight_reps', 'Front Delts', ['Upper Chest', 'Triceps'], 'Vertical Push'],
  ['Dumbbell Front Raise', 'Front Delts', 'Dumbbell', 'weight_reps', 'Front Delts', [], 'Flexion'],
  ['Cable Front Raise', 'Front Delts', 'Cable', 'weight_reps', 'Front Delts', [], 'Flexion'],
  ['Dumbbell Lateral Raise', 'Side Delts', 'Dumbbell', 'weight_reps', 'Side Delts', [], 'Abduction', ['DB Lateral Raise', 'Side Raise']],
  ['Cable Lateral Raise', 'Side Delts', 'Cable', 'weight_reps', 'Side Delts', [], 'Abduction'],
  ['Machine Lateral Raise', 'Side Delts', 'Machine', 'weight_reps', 'Side Delts', [], 'Abduction'],
  ['Lean-Away Cable Lateral Raise', 'Side Delts', 'Cable', 'weight_reps', 'Side Delts', [], 'Abduction'],
  ['Dumbbell Rear Delt Fly', 'Rear Delts', 'Dumbbell', 'weight_reps', 'Rear Delts', ['Upper Back'], 'Horizontal Pull', ['Reverse Fly']],
  ['Reverse Pec Deck', 'Rear Delts', 'Machine', 'weight_reps', 'Rear Delts', ['Upper Back'], 'Horizontal Pull'],
  ['Cable Rear Delt Fly', 'Rear Delts', 'Cable', 'weight_reps', 'Rear Delts', ['Upper Back'], 'Horizontal Pull'],
  ['Face Pull', 'Rear Delts', 'Cable', 'weight_reps', 'Rear Delts', ['Rotator Cuff', 'Upper Back'], 'Horizontal Pull'],
  ['Band Face Pull', 'Rear Delts', 'Resistance Band', 'weight_reps', 'Rear Delts', ['Rotator Cuff', 'Upper Back'], 'Horizontal Pull'],
  ['Cable External Rotation', 'Rear Delts', 'Cable', 'weight_reps', 'Rotator Cuff', ['Rear Delts'], 'Rotation'],
  ['Band External Rotation', 'Rear Delts', 'Resistance Band', 'reps_only', 'Rotator Cuff', ['Rear Delts'], 'Rotation'],
])

const arms = createCategory('Arms', [
  ['Barbell Curl', 'Biceps', 'Barbell', 'weight_reps', 'Biceps', ['Forearms'], 'Flexion'],
  ['EZ-Bar Curl', 'Biceps', 'EZ Bar', 'weight_reps', 'Biceps', ['Forearms'], 'Flexion', ['EZ Curl']],
  ['Dumbbell Curl', 'Biceps', 'Dumbbell', 'weight_reps', 'Biceps', ['Forearms'], 'Flexion'],
  ['Alternating Dumbbell Curl', 'Biceps', 'Dumbbell', 'weight_reps', 'Biceps', ['Forearms'], 'Flexion'],
  ['Incline Dumbbell Curl', 'Biceps', 'Dumbbell', 'weight_reps', 'Biceps', ['Forearms'], 'Flexion'],
  ['Preacher Curl', 'Biceps', 'EZ Bar', 'weight_reps', 'Biceps', ['Brachialis'], 'Flexion'],
  ['Machine Preacher Curl', 'Biceps', 'Machine', 'weight_reps', 'Biceps', ['Brachialis'], 'Flexion'],
  ['Cable Curl', 'Biceps', 'Cable', 'weight_reps', 'Biceps', ['Forearms'], 'Flexion'],
  ['Bayesian Cable Curl', 'Biceps', 'Cable', 'weight_reps', 'Biceps', [], 'Flexion'],
  ['Spider Curl', 'Biceps', 'Dumbbell', 'weight_reps', 'Biceps', ['Brachialis'], 'Flexion'],
  ['Concentration Curl', 'Biceps', 'Dumbbell', 'weight_reps', 'Biceps', [], 'Flexion'],
  ['Hammer Curl', 'Biceps', 'Dumbbell', 'weight_reps', 'Brachialis', ['Biceps', 'Forearms'], 'Flexion'],
  ['Cross-Body Hammer Curl', 'Biceps', 'Dumbbell', 'weight_reps', 'Brachialis', ['Biceps', 'Forearms'], 'Flexion'],
  ['Reverse Curl', 'Biceps', 'EZ Bar', 'weight_reps', 'Brachialis', ['Forearms', 'Biceps'], 'Flexion'],
  ['Cable Triceps Pushdown', 'Triceps', 'Cable', 'weight_reps', 'Triceps', [], 'Extension', ['Triceps Pressdown']],
  ['Rope Triceps Pushdown', 'Triceps', 'Cable', 'weight_reps', 'Triceps', [], 'Extension'],
  ['Overhead Cable Triceps Extension', 'Triceps', 'Cable', 'weight_reps', 'Triceps', [], 'Extension'],
  ['Dumbbell Overhead Triceps Extension', 'Triceps', 'Dumbbell', 'weight_reps', 'Triceps', [], 'Extension'],
  ['EZ-Bar Skull Crusher', 'Triceps', 'EZ Bar', 'weight_reps', 'Triceps', [], 'Extension', ['Lying Triceps Extension']],
  ['Close-Grip Bench Press', 'Triceps', 'Barbell', 'weight_reps', 'Triceps', ['General Chest', 'Front Delts'], 'Horizontal Push'],
  ['Diamond Push-Up', 'Triceps', 'Bodyweight', 'bodyweight_reps', 'Triceps', ['General Chest'], 'Horizontal Push'],
  ['Bench Dip', 'Triceps', 'Bench', 'bodyweight_reps', 'Triceps', ['Lower Chest', 'Front Delts'], 'Vertical Push'],
  ['Cable Triceps Kickback', 'Triceps', 'Cable', 'weight_reps', 'Triceps', [], 'Extension'],
  ['Single-Arm Triceps Pushdown', 'Triceps', 'Cable', 'weight_reps', 'Triceps', [], 'Extension'],
  ['Dumbbell Wrist Curl', 'Forearms', 'Dumbbell', 'weight_reps', 'Forearms', [], 'Flexion'],
  ['Dumbbell Reverse Wrist Curl', 'Forearms', 'Dumbbell', 'weight_reps', 'Forearms', [], 'Extension'],
  ['Barbell Wrist Curl', 'Forearms', 'Barbell', 'weight_reps', 'Forearms', [], 'Flexion'],
  ['Plate Pinch Hold', 'Forearms', 'Weight Plate', 'duration', 'Forearms', ['Grip'], 'Carry'],
])

const legs = createCategory('Legs', [
  ['Back Squat', 'Quads', 'Barbell', 'weight_reps', 'Quadriceps', ['Glutes', 'Hamstrings', 'Core'], 'Squat', ['Barbell Back Squat']],
  ['Front Squat', 'Quads', 'Barbell', 'weight_reps', 'Quadriceps', ['Glutes', 'Core'], 'Squat'],
  ['Goblet Squat', 'Quads', 'Dumbbell', 'weight_reps', 'Quadriceps', ['Glutes', 'Core'], 'Squat'],
  ['Hack Squat', 'Quads', 'Machine', 'weight_reps', 'Quadriceps', ['Glutes'], 'Squat'],
  ['Smith Machine Squat', 'Quads', 'Smith Machine', 'weight_reps', 'Quadriceps', ['Glutes', 'Hamstrings'], 'Squat'],
  ['Belt Squat', 'Quads', 'Machine', 'weight_reps', 'Quadriceps', ['Glutes'], 'Squat'],
  ['Leg Press', 'Quads', 'Machine', 'weight_reps', 'Quadriceps', ['Glutes', 'Hamstrings'], 'Squat'],
  ['Single-Leg Press', 'Quads', 'Machine', 'weight_reps', 'Quadriceps', ['Glutes'], 'Squat'],
  ['Leg Extension', 'Quads', 'Machine', 'weight_reps', 'Quadriceps', [], 'Extension'],
  ['Single-Leg Extension', 'Quads', 'Machine', 'weight_reps', 'Quadriceps', [], 'Extension'],
  ['Sissy Squat', 'Quads', 'Bodyweight', 'bodyweight_reps', 'Quadriceps', [], 'Squat'],
  ['Wall Sit', 'Quads', 'Bodyweight', 'duration', 'Quadriceps', ['Glutes'], 'Squat'],
  ['Romanian Deadlift', 'Hamstrings', 'Barbell', 'weight_reps', 'Hamstrings', ['Glutes', 'Lower Back'], 'Hinge', ['RDL']],
  ['Dumbbell Romanian Deadlift', 'Hamstrings', 'Dumbbell', 'weight_reps', 'Hamstrings', ['Glutes', 'Lower Back'], 'Hinge', ['Dumbbell RDL']],
  ['Single-Leg Romanian Deadlift', 'Hamstrings', 'Dumbbell', 'weight_reps', 'Hamstrings', ['Glutes', 'Core'], 'Hinge', ['Single-Leg RDL']],
  ['Seated Leg Curl', 'Hamstrings', 'Machine', 'weight_reps', 'Hamstrings', [], 'Flexion'],
  ['Lying Leg Curl', 'Hamstrings', 'Machine', 'weight_reps', 'Hamstrings', [], 'Flexion'],
  ['Standing Single-Leg Curl', 'Hamstrings', 'Machine', 'weight_reps', 'Hamstrings', [], 'Flexion'],
  ['Nordic Hamstring Curl', 'Hamstrings', 'Bodyweight', 'bodyweight_reps', 'Hamstrings', ['Glutes'], 'Flexion', ['Nordic Curl']],
  ['Glute-Ham Raise', 'Hamstrings', 'Machine', 'bodyweight_reps', 'Hamstrings', ['Glutes', 'Lower Back'], 'Extension', ['GHR']],
  ['Barbell Hip Thrust', 'Glutes', 'Barbell', 'weight_reps', 'Glutes', ['Hamstrings'], 'Extension', ['Hip Thrust']],
  ['Dumbbell Hip Thrust', 'Glutes', 'Dumbbell', 'weight_reps', 'Glutes', ['Hamstrings'], 'Extension'],
  ['Glute Bridge', 'Glutes', 'Bodyweight', 'bodyweight_reps', 'Glutes', ['Hamstrings'], 'Extension'],
  ['Cable Pull-Through', 'Glutes', 'Cable', 'weight_reps', 'Glutes', ['Hamstrings'], 'Hinge'],
  ['Cable Glute Kickback', 'Glutes', 'Cable', 'weight_reps', 'Glutes', ['Hamstrings'], 'Extension'],
  ['Bulgarian Split Squat', 'Glutes', 'Dumbbell', 'weight_reps', 'Glutes', ['Quadriceps', 'Hamstrings'], 'Lunge', ['Rear-Foot-Elevated Split Squat']],
  ['Walking Lunge', 'Glutes', 'Dumbbell', 'weight_reps', 'Glutes', ['Quadriceps', 'Hamstrings'], 'Lunge'],
  ['Reverse Lunge', 'Glutes', 'Dumbbell', 'weight_reps', 'Glutes', ['Quadriceps', 'Hamstrings'], 'Lunge'],
  ['Forward Lunge', 'Quads', 'Dumbbell', 'weight_reps', 'Quadriceps', ['Glutes', 'Hamstrings'], 'Lunge'],
  ['Lateral Lunge', 'Glutes', 'Dumbbell', 'weight_reps', 'Glutes', ['Adductors', 'Quadriceps'], 'Lunge'],
  ['Step-Up', 'Glutes', 'Dumbbell', 'weight_reps', 'Glutes', ['Quadriceps', 'Hamstrings'], 'Lunge'],
  ['Machine Hip Abduction', 'Glutes', 'Machine', 'weight_reps', 'Abductors', ['Glutes'], 'Abduction'],
  ['Cable Hip Abduction', 'Glutes', 'Cable', 'weight_reps', 'Abductors', ['Glutes'], 'Abduction'],
  ['Machine Hip Adduction', 'Glutes', 'Machine', 'weight_reps', 'Adductors', [], 'Adduction'],
  ['Standing Calf Raise', 'Calves', 'Machine', 'weight_reps', 'Calves', [], 'Extension'],
  ['Seated Calf Raise', 'Calves', 'Machine', 'weight_reps', 'Calves', [], 'Extension'],
  ['Leg Press Calf Raise', 'Calves', 'Machine', 'weight_reps', 'Calves', [], 'Extension'],
  ['Single-Leg Calf Raise', 'Calves', 'Bodyweight', 'bodyweight_reps', 'Calves', [], 'Extension'],
])

const core = createCategory('Core', [
  ['Crunch', 'Abs', 'Bodyweight', 'bodyweight_reps', 'Abs', [], 'Flexion'],
  ['Cable Crunch', 'Abs', 'Cable', 'weight_reps', 'Abs', [], 'Flexion'],
  ['Machine Crunch', 'Abs', 'Machine', 'weight_reps', 'Abs', [], 'Flexion'],
  ['Reverse Crunch', 'Abs', 'Bodyweight', 'bodyweight_reps', 'Abs', [], 'Flexion'],
  ['Sit-Up', 'Abs', 'Bodyweight', 'bodyweight_reps', 'Abs', ['Hip Flexors'], 'Flexion'],
  ['Hanging Leg Raise', 'Abs', 'Pull-Up Bar', 'bodyweight_reps', 'Abs', ['Hip Flexors'], 'Flexion'],
  ['Hanging Knee Raise', 'Abs', 'Pull-Up Bar', 'bodyweight_reps', 'Abs', ['Hip Flexors'], 'Flexion'],
  ['Captain’s Chair Knee Raise', 'Abs', 'Machine', 'bodyweight_reps', 'Abs', ['Hip Flexors'], 'Flexion'],
  ['Ab Wheel Rollout', 'Stability', 'Other', 'bodyweight_reps', 'Abs', ['Core Stability', 'Lats'], 'Extension'],
  ['Plank', 'Stability', 'Bodyweight', 'duration', 'Core Stability', ['Abs', 'Glutes'], 'Anti-Rotation', ['Front Plank']],
  ['Side Plank', 'Obliques', 'Bodyweight', 'duration', 'Obliques', ['Core Stability', 'Glutes'], 'Anti-Rotation'],
  ['Dead Bug', 'Stability', 'Bodyweight', 'reps_only', 'Core Stability', ['Abs'], 'Anti-Rotation'],
  ['Bird Dog', 'Stability', 'Bodyweight', 'reps_only', 'Core Stability', ['Glutes', 'Lower Back'], 'Anti-Rotation'],
  ['Pallof Press', 'Stability', 'Cable', 'weight_reps', 'Core Stability', ['Obliques'], 'Anti-Rotation'],
  ['Band Pallof Press', 'Stability', 'Resistance Band', 'reps_only', 'Core Stability', ['Obliques'], 'Anti-Rotation'],
  ['Russian Twist', 'Obliques', 'Medicine Ball', 'reps_only', 'Obliques', ['Abs'], 'Rotation'],
  ['Cable Wood Chop', 'Obliques', 'Cable', 'weight_reps', 'Obliques', ['Abs'], 'Rotation'],
  ['Landmine Rotation', 'Obliques', 'Landmine', 'weight_reps', 'Obliques', ['Shoulders', 'Core Stability'], 'Rotation'],
  ['Bicycle Crunch', 'Obliques', 'Bodyweight', 'reps_only', 'Obliques', ['Abs'], 'Rotation'],
  ['Suitcase Carry', 'Stability', 'Dumbbell', 'weight_distance', 'Core Stability', ['Obliques', 'Forearms'], 'Carry'],
])

const fullBody = createCategory('Full Body', [
  ['Conventional Deadlift', 'All', 'Barbell', 'weight_reps', 'Posterior Chain', ['Quadriceps', 'Back', 'Forearms'], 'Hinge', ['Deadlift']],
  ['Sumo Deadlift', 'All', 'Barbell', 'weight_reps', 'Glutes', ['Hamstrings', 'Quadriceps', 'Adductors'], 'Hinge'],
  ['Kettlebell Swing', 'All', 'Kettlebell', 'weight_reps', 'Posterior Chain', ['Core', 'Shoulders'], 'Hinge'],
  ['Kettlebell Clean', 'All', 'Kettlebell', 'weight_reps', 'Full Body', ['Shoulders', 'Glutes', 'Core'], 'Hinge'],
  ['Kettlebell Clean and Press', 'All', 'Kettlebell', 'weight_reps', 'Full Body', ['Shoulders', 'Triceps', 'Glutes'], 'Vertical Push'],
  ['Barbell Clean', 'All', 'Barbell', 'weight_reps', 'Full Body', ['Glutes', 'Hamstrings', 'Traps'], 'Hinge', ['Power Clean']],
  ['Dumbbell Thruster', 'All', 'Dumbbell', 'weight_reps', 'Full Body', ['Quadriceps', 'Shoulders', 'Triceps'], 'Conditioning'],
  ['Barbell Thruster', 'All', 'Barbell', 'weight_reps', 'Full Body', ['Quadriceps', 'Shoulders', 'Triceps'], 'Conditioning'],
  ['Burpee', 'All', 'Bodyweight', 'reps_only', 'Full Body', ['Chest', 'Quadriceps', 'Core'], 'Conditioning'],
  ['Devil Press', 'All', 'Dumbbell', 'weight_reps', 'Full Body', ['Shoulders', 'Glutes', 'Chest'], 'Conditioning'],
  ['Farmer Carry', 'All', 'Dumbbell', 'weight_distance', 'Full Body', ['Forearms', 'Traps', 'Core'], 'Carry', ['Farmer’s Walk']],
  ['Sled Push', 'All', 'Sled', 'weight_distance', 'Full Body', ['Quadriceps', 'Glutes', 'Calves'], 'Conditioning'],
])

const cardio = createCategory('Cardio', [
  ['Outdoor Running', 'Running', 'Other', 'distance_duration', 'Cardiovascular System', ['Legs'], 'Locomotion', ['Road Running'], 'Running'],
  ['Treadmill Running', 'Running', 'Cardio Machine', 'distance_duration', 'Cardiovascular System', ['Legs'], 'Locomotion', [], 'Running'],
  ['Track Running', 'Running', 'Other', 'distance_duration', 'Cardiovascular System', ['Legs'], 'Locomotion', [], 'Running'],
  ['Trail Running', 'Running', 'Other', 'distance_duration', 'Cardiovascular System', ['Legs', 'Core'], 'Locomotion', [], 'Running'],
  ['Sprint Intervals', 'Running', 'Other', 'distance_duration', 'Cardiovascular System', ['Legs'], 'Conditioning', ['Sprints'], 'Running'],
  ['Outdoor Walking', 'Walking', 'Other', 'distance_duration', 'Cardiovascular System', ['Legs'], 'Locomotion', ['Walking'], 'Walking'],
  ['Treadmill Walking', 'Walking', 'Cardio Machine', 'distance_duration', 'Cardiovascular System', ['Legs'], 'Locomotion', [], 'Walking'],
  ['Incline Treadmill Walking', 'Walking', 'Cardio Machine', 'distance_duration', 'Cardiovascular System', ['Glutes', 'Calves'], 'Locomotion', ['Incline Walking'], 'Walking'],
  ['Hiking', 'Walking', 'Other', 'distance_duration', 'Cardiovascular System', ['Legs', 'Core'], 'Locomotion', [], 'Walking'],
  ['Outdoor Cycling', 'Cycling', 'Other', 'distance_duration', 'Cardiovascular System', ['Quadriceps', 'Glutes'], 'Locomotion', [], 'Cycling'],
  ['Stationary Bike', 'Cycling', 'Cardio Machine', 'distance_duration', 'Cardiovascular System', ['Quadriceps'], 'Locomotion', ['Exercise Bike'], 'Cycling'],
  ['Spin Bike', 'Cycling', 'Cardio Machine', 'distance_duration', 'Cardiovascular System', ['Quadriceps', 'Glutes'], 'Locomotion', [], 'Cycling'],
  ['Air Bike', 'Cycling', 'Cardio Machine', 'duration', 'Cardiovascular System', ['Full Body'], 'Conditioning', ['Assault Bike'], 'Cycling'],
  ['Rowing Machine', 'Rowing', 'Cardio Machine', 'distance_duration', 'Cardiovascular System', ['Back', 'Legs'], 'Locomotion', ['Indoor Rowing'], 'Rowing'],
  ['Elliptical', 'Machines', 'Cardio Machine', 'duration', 'Cardiovascular System', ['Legs'], 'Locomotion', ['Cross Trainer'], 'Machines'],
  ['Stair Climber', 'Machines', 'Cardio Machine', 'duration', 'Cardiovascular System', ['Glutes', 'Quadriceps', 'Calves'], 'Locomotion', ['StairMaster'], 'Machines'],
  ['Swimming', 'Conditioning', 'Other', 'distance_duration', 'Cardiovascular System', ['Full Body'], 'Locomotion', [], 'Conditioning'],
  ['Jump Rope', 'Conditioning', 'Other', 'duration_reps', 'Cardiovascular System', ['Calves', 'Shoulders'], 'Conditioning', ['Skipping Rope'], 'Conditioning'],
  ['SkiErg', 'Machines', 'Cardio Machine', 'distance_duration', 'Cardiovascular System', ['Lats', 'Triceps', 'Core'], 'Conditioning', ['Ski Ergometer'], 'Machines'],
  ['Heavy Bag Boxing', 'Conditioning', 'Other', 'duration', 'Cardiovascular System', ['Shoulders', 'Core'], 'Conditioning', ['Boxing'], 'Conditioning'],
])

const mobility = createCategory('Mobility', [
  ['Band Shoulder Dislocate', 'Upper Body', 'Resistance Band', 'reps_only', 'Shoulder Mobility', ['Chest'], 'Mobility', ['Band Pass-Through']],
  ['Wall Shoulder Slide', 'Upper Body', 'Bodyweight', 'reps_only', 'Shoulder Mobility', ['Upper Back'], 'Mobility', ['Wall Slide']],
  ['Scapular Wall Slide', 'Upper Body', 'Bodyweight', 'reps_only', 'Scapular Mobility', ['Shoulders', 'Upper Back'], 'Mobility'],
  ['Thread the Needle', 'Upper Body', 'Bodyweight', 'reps_only', 'Thoracic Mobility', ['Shoulders'], 'Rotation'],
  ['Open Book Rotation', 'Upper Body', 'Bodyweight', 'reps_only', 'Thoracic Mobility', ['Shoulders'], 'Rotation'],
  ['Half-Kneeling Thoracic Rotation', 'Upper Body', 'Bodyweight', 'reps_only', 'Thoracic Mobility', ['Core'], 'Rotation'],
  ['90/90 Hip Switch', 'Lower Body', 'Bodyweight', 'reps_only', 'Hip Mobility', ['Glutes'], 'Mobility', ['90-90 Hip Switch']],
  ['Hip CAR', 'Lower Body', 'Bodyweight', 'reps_only', 'Hip Mobility', ['Glutes'], 'Mobility', ['Hip Controlled Articular Rotation']],
  ['Adductor Rock Back', 'Lower Body', 'Bodyweight', 'reps_only', 'Hip Mobility', ['Adductors'], 'Mobility'],
  ['Knee-to-Wall Ankle Mobilization', 'Lower Body', 'Bodyweight', 'reps_only', 'Ankle Mobility', ['Calves'], 'Mobility'],
  ['World’s Greatest Stretch', 'Full Body', 'Bodyweight', 'reps_only', 'Full Body Mobility', ['Hips', 'Thoracic Spine', 'Hamstrings'], 'Mobility'],
  ['Inchworm to Cobra', 'Full Body', 'Bodyweight', 'reps_only', 'Full Body Mobility', ['Hamstrings', 'Shoulders', 'Spine'], 'Mobility'],
])

const versionOneBuiltInExercises: readonly Exercise[] = [
  ...chest,
  ...back,
  ...shoulders,
  ...arms,
  ...legs,
  ...core,
  ...fullBody,
  ...cardio,
  ...mobility,
]

export const builtInExercises: readonly Exercise[] = [
  ...versionOneBuiltInExercises,
  ...additionalBuiltInExercises,
].map((exercise) => {
  const aliases = exercise.name === 'Barbell Clean'
    ? exercise.aliases.filter((alias) => alias !== 'Power Clean')
    : exercise.aliases
  for (const [alias, canonicalName] of FINAL_ALIAS_ADDITIONS) {
    if (canonicalName === exercise.name && !aliases.includes(alias)) aliases.push(alias)
  }

  if (exercise.name === 'Barbell Good Morning') {
    return {
      ...exercise,
      aliases,
      category: 'Legs',
      muscleRegions: ['Hamstrings'],
      primaryMuscles: ['Hamstrings'],
      secondaryMuscles: ['Glutes', 'Spinal Erectors'],
      movementPattern: 'Hinge',
    }
  }
  if (exercise.name === 'Plate Pinch Hold') return { ...exercise, aliases, movementPattern: 'Isometric' }
  if (exercise.name === 'Barbell Clean') return { ...exercise, aliases, movementPattern: 'Olympic Lift / Explosive' }
  if (exercise.name === '45-Degree Back Extension') return { ...exercise, aliases, equipment: 'Back Extension Bench' }
  if (exercise.name === 'Stationary Bike' || exercise.name === 'Spin Bike') {
    return { ...exercise, aliases, trackingType: 'duration_optional_distance', supportedCardioMetrics: cardioMetricsFor(exercise.name) }
  }
  if (exercise.category === 'Cardio') return { ...exercise, aliases, supportedCardioMetrics: cardioMetricsFor(exercise.name) }
  return { ...exercise, aliases }
})
