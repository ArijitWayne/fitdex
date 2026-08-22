import type {
  CardioMetric,
  Exercise,
  ExerciseCategory,
  ExerciseEquipment,
  ExerciseTrackingType,
  MovementPattern,
} from '../../data/models'

const DATASET_TIMESTAMP = '2026-08-23T00:00:00.000Z'

export const FINAL_CURATION_EXCLUSIONS = [
  'Reverse-Grip Bench Press',
  'Tate Press',
  'Cuban Rotation',
  'Dumbbell Scaption Raise',
  'Donkey Calf Raise',
  'Reverse Hyperextension Hold',
  'Prone W Raise',
  'Rebounding',
] as const

const additionsByCategory = {
  Chest: [
    'Incline Cable Press', 'Single-Arm Dumbbell Bench Press', 'Dumbbell Floor Press', 'Barbell Floor Press', 'Plyometric Push-Up', 'Weighted Push-Up', 'Archer Push-Up',
    'Decline Machine Press', 'Smith Machine Decline Press', 'Dumbbell Fly', 'Incline Dumbbell Fly', 'Decline Dumbbell Fly', 'Cable Chest Press', 'Suspension Chest Press', 'Ring Push-Up', 'Ring Dip', 'Deficit Push-Up',
  ],
  Back: [
    'Half-Kneeling Single-Arm Lat Pulldown', 'Kneeling Cable Lat Prayer', 'Seal Row', 'Meadows Row', 'Barbell Shrug', 'Scapular Pull-Up',
    'Weighted Pull-Up', 'Weighted Chin-Up', 'Band-Assisted Pull-Up', 'Machine Pullover', 'Single-Arm Cable Row', 'High Row Machine', 'Suspension Row', 'Resistance Band Row', 'Resistance Band Lat Pulldown', 'Resistance Band Pull-Apart', 'Reverse Hyperextension', 'Dumbbell Shrug', 'Cable Shrug', 'Chest-Supported Machine Row', 'Seated Cable High Row', 'Barbell High Pull',
  ],
  Shoulders: [
    'Pike Push-Up', 'Handstand Push-Up', 'Barbell Upright Row', 'Cable Y Raise',
    'Single-Arm Landmine Press', 'Seated Dumbbell Shoulder Press', 'Band Internal Rotation', 'Cable Internal Rotation', 'Prone Y Raise', 'Prone T Raise', 'Serratus Push-Up', 'Leaning Dumbbell Lateral Raise', 'Single-Arm Cable Lateral Raise',
  ],
  Arms: [
    'Dumbbell Preacher Curl', 'Cable Hammer Curl', 'Zottman Curl', 'Dumbbell Skull Crusher', 'JM Press', 'Wrist Roller',
    'Machine Biceps Curl', 'Cable Preacher Curl', 'Suspension Biceps Curl', 'Incline Hammer Curl', 'Cable Reverse Curl', 'Cable Skull Crusher', 'Single-Arm Overhead Cable Triceps Extension', 'Machine Triceps Extension', 'Machine Dip', 'Suspension Triceps Extension', 'Bodyweight Triceps Extension', 'Dead Hang', 'Hand Gripper', 'Farmer Hold',
  ],
  Legs: [
    'Kettlebell Goblet Squat', 'Barbell Step-Up', 'Pistol Squat', 'Reverse Nordic Curl', 'Tibialis Raise', 'Curtsy Lunge',
    'Pendulum Squat', 'Front-Foot-Elevated Split Squat', 'Barbell Reverse Lunge', 'Barbell Walking Lunge', 'Barbell Glute Bridge', 'Machine Hip Thrust', 'Machine Glute Kickback', 'Frog Pump', 'B-Stance Hip Thrust', 'Resistance Band Hip Abduction', 'Side-Lying Hip Abduction', 'Clamshell', 'Cable Hip Adduction', 'Stiff-Leg Deadlift', 'Trap Bar Deadlift', 'Landmine Romanian Deadlift', 'Landmine Squat', 'Landmine Reverse Lunge', 'Dumbbell Split Squat', 'Barbell Bulgarian Split Squat', 'Single-Leg Lying Leg Curl', 'Single-Leg Seated Leg Curl', 'Slider Hamstring Curl', 'Suspension Hamstring Curl', 'Smith Machine Calf Raise', 'Seated Tibialis Raise',
  ],
  Core: [
    'Lying Leg Raise', 'Hollow Body Hold', 'Bear Plank', 'Plank Shoulder Tap', 'Weighted Sit-Up', 'Copenhagen Plank', 'Dragon Flag', 'V-Up',
    'Toes-to-Bar', 'Body Saw', 'Stability Ball Rollout', 'Stir the Pot', 'Long-Lever Plank', 'Cable Pallof Hold', 'Half-Kneeling Pallof Press', 'Suitcase March', 'L-Sit', 'Hanging Knee Raise with Twist', 'Cable Reverse Wood Chop', 'Decline Sit-Up', 'GHD Sit-Up',
  ],
  'Full Body': [
    'Turkish Get-Up', 'Medicine Ball Slam', 'Battle Rope Alternating Waves', 'Bear Crawl', 'Box Jump', 'Sandbag Clean', 'Renegade Row', 'Power Clean',
    'Barbell Snatch', 'Power Snatch', 'Clean and Jerk', 'Barbell Clean and Press', 'Kettlebell Snatch', 'Kettlebell Deadlift', 'Kettlebell Front Rack Carry', 'Kettlebell Push Press', 'Kettlebell Thruster', 'Dumbbell Clean', 'Dumbbell Snatch', 'Dumbbell Clean and Press', 'Trap Bar Carry', 'Overhead Carry', 'Front Rack Carry', 'Zercher Carry', 'Sandbag Carry', 'Sled Pull', 'Muscle-Up',
  ],
  Cardio: [
    'Recumbent Bike', 'Kickboxing', 'Circuit Training', 'HIIT Session', 'Battle Rope Intervals', 'Sled Drag Conditioning',
    'Hill Running', 'Treadmill Incline Running', 'Rucking', 'Mountain Biking', 'BikeErg', 'Hand Cycle', 'Outdoor Rowing', 'Kayaking', 'Canoeing', 'Vertical Climber', 'Stepper', 'Double Unders', 'Shadow Boxing', 'Shuttle Run', 'Mountain Climbers', 'Jumping Jacks', 'Freestyle Swimming', 'Breaststroke Swimming', 'Backstroke Swimming', 'Butterfly Swimming', 'Battle Rope Double Waves',
  ],
  Mobility: [
    'Cat-Cow', 'Deep Squat Pry', 'Ankle CAR', 'Shoulder CAR', 'Thoracic Extension on Foam Roller', 'Cossack Squat Mobility',
    'Scapular CAR', 'Wrist CAR', 'Neck CAR', 'Quadruped Thoracic Rotation', 'Prone Cobra', 'Half-Kneeling Hip Flexor Mobilization', 'Hip Airplane', 'Shin Box Transition', 'Banded Ankle Mobilization', 'Calf Rock', 'Hamstring Walkout', 'Half-Kneeling Adductor Mobilization', 'Sumo Squat Hold', 'Lateral Squat Shift', 'Bear Sit Rotation', 'Standing Hip CAR',
  ],
} as const satisfies Record<ExerciseCategory, readonly string[]>

export const FINAL_ALIAS_ADDITIONS = new Map<string, string>([
  ['Seated Chest Press', 'Machine Chest Press'], ['Incline Smith Press', 'Smith Machine Incline Press'], ['Incline Bench Dumbbell Row', 'Chest-Supported Dumbbell Row'],
  ['Rope Pressdown', 'Rope Triceps Pushdown'], ['Cable Overhead Extension', 'Overhead Cable Triceps Extension'], ['Single-Leg Standing Hamstring Curl', 'Standing Single-Leg Curl'],
  ['Wall Squat Hold', 'Wall Sit'], ['Hanging Leg Tuck', 'Hanging Knee Raise'], ['Landmine Twist', 'Landmine Rotation'], ['Barbell Deadlift', 'Conventional Deadlift'],
  ['Heavy Bag Work', 'Heavy Bag Boxing'], ['Knee-to-Wall Ankle Dorsiflexion', 'Knee-to-Wall Ankle Mobilization'], ['World’s Greatest Mobility Drill', 'World’s Greatest Stretch'],
  ['Kroc Row', 'Single-Arm Dumbbell Row'], ['Drag Curl', 'Barbell Curl'], ['Jogging', 'Outdoor Running'], ['Arc Trainer', 'Elliptical'],
  ['TRX Chest Press', 'Suspension Chest Press'], ['Ring Chest Press', 'Ring Push-Up'], ['TRX Row', 'Suspension Row'], ['Band Row', 'Resistance Band Row'],
  ['Band Pulldown', 'Resistance Band Lat Pulldown'], ['Pull-Apart', 'Resistance Band Pull-Apart'], ['Rear Delt Machine', 'Reverse Pec Deck'],
  ['Landmine One-Arm Press', 'Single-Arm Landmine Press'], ['Triceps Extension Machine', 'Machine Triceps Extension'], ['Triceps Dip Machine', 'Machine Dip'],
  ['Grip Trainer', 'Hand Gripper'], ['Hex Bar Deadlift', 'Trap Bar Deadlift'], ['Lying Hamstring Curl', 'Lying Leg Curl'], ['TRX Hamstring Curl', 'Suspension Hamstring Curl'],
  ['Ruck March', 'Rucking'], ['Indoor Cycling', 'Spin Bike'], ['Stationary Erg Bike', 'BikeErg'], ['CrossFit Double Unders', 'Double Unders'],
  ['Shadowboxing', 'Shadow Boxing'], ['Jump Rope Double Under', 'Double Unders'],
])

function stableSlug(name: string) {
  return name.normalize('NFKD').replace(/[’']/g, '').replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-|-$/g, '').toLowerCase()
}

const equipmentOverrides = new Map<string, ExerciseEquipment>([
  ['Power Clean', 'Barbell'], ['Clean and Jerk', 'Barbell'], ['Front Rack Carry', 'Barbell'], ['Overhead Carry', 'Dumbbell'],
  ['Suitcase March', 'Dumbbell'], ['Wrist Roller', 'Other'], ['Hand Gripper', 'Other'], ['Box Jump', 'Other'],
  ['Stability Ball Rollout', 'Other'], ['Stir the Pot', 'Other'], ['Thoracic Extension on Foam Roller', 'Other'],
  ['Reverse Hyperextension', 'Machine'], ['Hand Cycle', 'Cardio Machine'],
])

const trackingOverrides = new Map<string, ExerciseTrackingType>([
  ['Battle Rope Alternating Waves', 'duration'], ['Bear Crawl', 'distance_duration'], ['Box Jump', 'reps_only'],
  ['Sled Pull', 'weight_distance'], ['Suitcase March', 'weight_distance'], ['Medicine Ball Slam', 'weight_reps'],
  ['Wrist Roller', 'reps_only'], ['Hand Gripper', 'reps_only'], ['Deep Squat Pry', 'duration'],
])

function equipmentFor(name: string, category: ExerciseCategory): ExerciseEquipment {
  const override = equipmentOverrides.get(name)
  if (override) return override
  if (/Trap Bar/.test(name)) return 'Trap Bar'
  if (/Ring/.test(name)) return 'Rings'
  if (/Sandbag/.test(name)) return 'Sandbag'
  if (/GHD/.test(name)) return 'GHD'
  if (/Back Extension/.test(name)) return 'Back Extension Bench'
  if (/Smith Machine/.test(name)) return 'Smith Machine'
  if (/Barbell|JM Press|Seal Row|Zercher/.test(name)) return 'Barbell'
  if (/Dumbbell|Farmer Hold|Renegade/.test(name)) return 'Dumbbell'
  if (/Cable|Pallof/.test(name)) return 'Cable'
  if (category === 'Cardio' && /Machine|Recumbent|Vertical Climber|Stepper|BikeErg|Treadmill/.test(name)) return 'Cardio Machine'
  if (/Machine|Pendulum/.test(name)) return 'Machine'
  if (/Resistance Band|Band-|Banded/.test(name)) return 'Resistance Band'
  if (/Kettlebell|Turkish/.test(name)) return 'Kettlebell'
  if (/Medicine Ball/.test(name)) return 'Medicine Ball'
  if (/Suspension/.test(name)) return 'Suspension Trainer'
  if (/Landmine|Meadows/.test(name)) return 'Landmine'
  if (/Sled/.test(name)) return 'Sled'
  if (/Battle Rope/.test(name)) return 'Battle Rope'
  if (/Weighted Push-Up|Weighted Sit-Up/.test(name)) return 'Weight Plate'
  if (/Pull-Up|Chin-Up|Dead Hang|Toes-to-Bar|Hanging|Muscle-Up|Scapular Pull-Up/.test(name)) return 'Pull-Up Bar'
  if (/Dragon Flag|Copenhagen Plank|Decline Sit-Up/.test(name)) return 'Bench'
  if (category === 'Cardio') return 'Other'
  return 'Bodyweight'
}

function regionFor(name: string, category: ExerciseCategory) {
  if (category === 'Chest') return /Incline/.test(name) ? 'Upper' : /Decline|Dip/.test(name) ? 'Lower' : 'General'
  if (category === 'Back') return /Reverse Hyper/.test(name) ? 'Lower Back' : /Pull-Up|Chin-Up|Pulldown|Pullover|Lat Prayer/.test(name) ? 'Lats' : 'Upper Back'
  if (category === 'Shoulders') return /Lateral|Upright/.test(name) ? 'Side Delts' : /Prone|Y Raise|Rotation/.test(name) ? 'Rear Delts' : 'Front Delts'
  if (category === 'Arms') return /Wrist|Hang|Grip|Farmer Hold/.test(name) ? 'Forearms' : /Triceps|Skull|JM Press|Dip/.test(name) ? 'Triceps' : 'Biceps'
  if (category === 'Legs') return /Calf|Tibialis/.test(name) ? 'Calves' : /Curl|Deadlift|Romanian|Nordic|Good Morning/.test(name) ? 'Hamstrings' : /Thrust|Bridge|Kickback|Abduction|Adduction|Clamshell|Lunge|Step-Up|Split Squat/.test(name) ? 'Glutes' : 'Quads'
  if (category === 'Core') return /Twist|Wood Chop/.test(name) ? 'Obliques' : /Hold|Plank|Pallof|March|L-Sit|Rollout|Body Saw|Stir|Dragon Flag/.test(name) ? 'Stability' : 'Abs'
  if (category === 'Full Body') return 'All'
  if (category === 'Cardio') {
    if (/Running|Shuttle Run/.test(name)) return 'Running'
    if (/Rucking/.test(name)) return 'Walking'
    if (/Bike|Cycl/.test(name)) return 'Cycling'
    if (/Rowing|Kayak|Canoe/.test(name)) return 'Rowing'
    if (/Climber|Stepper/.test(name)) return 'Machines'
    return 'Conditioning'
  }
  return /Shoulder|Scapular|Wrist|Neck|Thoracic|Cobra|Cat-Cow/.test(name) ? 'Upper Body' : /Hip|Ankle|Calf|Hamstring|Adductor|Squat|Shin|Cossack/.test(name) ? 'Lower Body' : 'Full Body'
}

function movementFor(name: string, category: ExerciseCategory): MovementPattern {
  if (name === 'Dragon Flag' || /Hold|Plank|L-Sit|Dead Hang|Farmer Hold|Pallof Hold/.test(name)) return 'Isometric'
  if (/Snatch|Clean|High Pull/.test(name)) return 'Olympic Lift / Explosive'
  if (/Bear Crawl/.test(name)) return 'Crawl'
  if (/Carry|March/.test(name)) return 'Carry'
  if (category === 'Chest') return /Dip/.test(name) ? 'Vertical Push' : 'Horizontal Push'
  if (category === 'Back') return /Pull-Up|Chin-Up|Pulldown|Pullover|Lat Prayer/.test(name) ? 'Vertical Pull' : 'Horizontal Pull'
  if (category === 'Shoulders') return /Press|Push-Up/.test(name) ? 'Vertical Push' : /Rotation/.test(name) ? 'Rotation' : 'Abduction'
  if (category === 'Arms') return /Triceps|Skull|JM Press|Dip|Extension/.test(name) ? 'Extension' : 'Flexion'
  if (category === 'Legs') return /Deadlift|Romanian|Thrust|Bridge|Good Morning/.test(name) ? 'Hinge' : /Lunge|Step-Up|Split Squat/.test(name) ? 'Lunge' : /Curl/.test(name) ? 'Flexion' : /Kickback|Calf|Tibialis|Nordic/.test(name) ? 'Extension' : /Abduction/.test(name) ? 'Abduction' : /Adduction/.test(name) ? 'Adduction' : 'Squat'
  if (category === 'Core') return /Twist|Wood Chop/.test(name) ? 'Rotation' : /Pallof/.test(name) ? 'Anti-Rotation' : /Rollout|Body Saw|Stir/.test(name) ? 'Extension' : 'Flexion'
  if (category === 'Full Body') return /Slam|Wave|Jump|Thruster|Sled|Renegade/.test(name) ? 'Conditioning' : 'Hinge'
  if (category === 'Cardio') return /Intervals|HIIT|Circuit|Rope|Climber|Mountain|Jumping|Double|Kickbox|Boxing|Sled/.test(name) ? 'Conditioning' : 'Locomotion'
  return 'Mobility'
}

function trackingFor(name: string, category: ExerciseCategory, equipment: ExerciseEquipment): ExerciseTrackingType {
  const override = trackingOverrides.get(name)
  if (override) return override
  if (name === 'Dragon Flag') return 'reps_only'
  if (category === 'Cardio') {
    if (/Double Unders|Jump Rope/.test(name)) return 'duration_reps'
    if (/Stationary Bike|Spin Bike|Recumbent Bike|BikeErg|Vertical Climber|Stepper/.test(name)) return 'duration_optional_distance'
    if (/Running|Rucking|Biking|Cycling|Rowing|Kayaking|Canoeing|Swimming|Shuttle/.test(name)) return 'distance_duration'
    if (/Sled/.test(name)) return 'weight_distance'
    return 'duration'
  }
  if (/Carry/.test(name)) return 'weight_distance'
  if (/Hold|Plank|Dead Hang|Farmer Hold|Sumo Squat Hold|Deep Squat Pry/.test(name)) return 'duration'
  if (category === 'Mobility') return 'reps_only'
  if (['Bodyweight', 'Pull-Up Bar', 'Rings', 'Bench', 'Suspension Trainer'].includes(equipment)) return 'bodyweight_reps'
  if (/Wrist Roller/.test(name)) return 'reps_only'
  return 'weight_reps'
}

function musclesFor(name: string, category: ExerciseCategory) {
  if (name === 'Dragon Flag') return { primary: ['Abs', 'Core'], secondary: ['Obliques', 'Hip Flexors', 'Lats'] }
  const primaryByCategory: Record<ExerciseCategory, string> = {
    Chest: 'General Chest', Back: 'Back', Shoulders: 'Delts', Arms: 'Arms', Legs: 'Legs', Core: 'Core', 'Full Body': 'Full Body', Cardio: 'Cardiovascular System', Mobility: 'Mobility',
  }
  const secondaryByCategory: Partial<Record<ExerciseCategory, string[]>> = {
    Chest: ['Triceps', 'Front Delts'], Back: ['Biceps', 'Forearms'], Shoulders: ['Triceps', 'Traps'], Arms: ['Forearms'], Legs: ['Glutes', 'Core'], Core: ['Hip Flexors'], 'Full Body': ['Core', 'Legs'], Cardio: ['Full Body'],
  }
  return { primary: [primaryByCategory[category]], secondary: secondaryByCategory[category] ?? [] }
}

export function cardioMetricsFor(name: string): CardioMetric[] {
  if (/Rowing Machine|SkiErg|BikeErg/.test(name)) return ['duration', 'distance', 'pace', 'watts', /BikeErg/.test(name) ? 'cadence' : 'strokeRate', 'calories', 'heartRate']
  if (/Treadmill.*Running|Incline Treadmill/.test(name)) return ['duration', 'distance', 'pace', 'speed', 'incline', 'heartRate', 'calories']
  if (/Running|Walking|Hiking|Rucking|Cycling|Biking|Rowing|Kayaking|Canoeing|Swimming/.test(name)) return ['duration', 'distance', 'pace', 'speed', 'heartRate', 'calories', ...(/Rucking/.test(name) ? ['load' as const] : [])]
  if (/Bike/.test(name)) return ['duration', 'distance', 'resistance', 'cadence', 'watts', 'heartRate', 'calories']
  if (/Jump Rope|Double Unders/.test(name)) return ['duration', 'reps', 'heartRate', 'calories']
  if (/Box|Kickbox|HIIT|Circuit|Battle Rope/.test(name)) return ['duration', 'rounds', 'heartRate', 'calories']
  if (/Sled/.test(name)) return ['duration', 'distance', 'load', 'rounds', 'heartRate', 'calories']
  return ['duration', 'distance', 'resistance', 'heartRate', 'calories']
}

function createExercise(name: string, category: ExerciseCategory): Exercise {
  const equipment = equipmentFor(name, category)
  const muscles = musclesFor(name, category)
  const cardioSubtype = category === 'Cardio' ? regionFor(name, category) as NonNullable<Exercise['cardioSubtype']> : undefined
  return {
    id: `builtin-exercise:${stableSlug(name)}`,
    name,
    aliases: [],
    category,
    primaryMuscles: muscles.primary,
    secondaryMuscles: muscles.secondary,
    muscleRegions: [regionFor(name, category)],
    equipment,
    trackingType: trackingFor(name, category, equipment),
    movementPattern: movementFor(name, category),
    source: 'built-in',
    sourceId: stableSlug(name),
    archived: false,
    difficulty: name === 'Dragon Flag' ? 'advanced' : undefined,
    cardioSubtype,
    supportedCardioMetrics: category === 'Cardio' ? cardioMetricsFor(name) : undefined,
    createdAt: DATASET_TIMESTAMP,
    updatedAt: DATASET_TIMESTAMP,
  }
}

export const additionalBuiltInExercises: readonly Exercise[] = Object.entries(additionsByCategory).flatMap(([category, names]) =>
  names.map((name) => createExercise(name, category as ExerciseCategory)),
)
