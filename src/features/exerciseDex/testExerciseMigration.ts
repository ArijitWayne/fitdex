/// <reference types="node" />
import assert from 'node:assert/strict'
import type { Exercise, ExercisePreference, WorkoutExercise } from '../../data/models.ts'
import { builtInExercises, RETIRED_FITDEX_EXERCISE_SLUGS } from './exerciseData.ts'
import { LEGACY_EXERCISE_ID_MAP, LEGACY_EXERCISE_MIGRATIONS } from './legacyExerciseMigration.generated.ts'
import { migrateExercisePreferences, migrateWorkoutExerciseReferences } from './exerciseMigration.ts'

const timestamp = '2026-08-23T12:00:00.000Z'
const baseRecord = { createdAt: timestamp, updatedAt: timestamp }
const legacyExercise = {
  ...baseRecord,
  id: 'builtin-exercise:sprint-intervals',
  name: 'Sprint Intervals',
  aliases: [],
  category: 'Cardio',
  primaryMuscles: ['Cardiovascular System'],
  secondaryMuscles: [],
  muscleRegions: ['Running'],
  equipment: 'Other',
  trackingType: 'distance_duration',
  source: 'built-in',
  archived: false,
} satisfies Exercise
const legacyById = new Map([[legacyExercise.id, legacyExercise]])

const v4RetirementMap = Object.fromEntries(RETIRED_FITDEX_EXERCISE_SLUGS.map((slug) => [`builtin-exercise:${slug}`, null]))
const v4MigrationMap = { ...LEGACY_EXERCISE_ID_MAP, ...v4RetirementMap }

// A: a fresh v4 install seeds only demonstrated FitDex built-ins.
assert.equal(builtInExercises.length, 802)
assert.ok(builtInExercises.every((exercise) => exercise.source === 'built-in' && !exercise.archived))
assert.ok(builtInExercises.every((exercise) => exercise.mediaStatus === 'available'))

// B: the 812-entry inventory is reduced only by the nine v4 retirements.
assert.equal(builtInExercises.length + RETIRED_FITDEX_EXERCISE_SLUGS.length, 812)
assert.ok(builtInExercises.every((exercise) => exercise.categories?.length && exercise.primaryCategory === exercise.categories[0]))

// C: a history reference with a successor is remapped and keeps its old snapshot.
const mappedLegacyId = 'builtin-exercise:lat-pulldown'
const mappedWorkout: WorkoutExercise = { ...baseRecord, id: 'we:mapped', workoutId: 'workout:1', exerciseId: mappedLegacyId, order: 0 }
const mappedLegacyExercise = { ...legacyExercise, id: mappedLegacyId, name: 'Lat Pulldown', category: 'Back' } satisfies Exercise
const mappedResult = migrateWorkoutExerciseReferences([mappedWorkout], new Map([[mappedLegacyId, mappedLegacyExercise]]), LEGACY_EXERCISE_ID_MAP, timestamp)[0]
assert.equal(mappedResult.exerciseId, 'builtin-exercise:cable-lat-pulldown')
assert.equal(mappedResult.exerciseNameSnapshot, 'Lat Pulldown')

// D: a removed v3 exercise keeps its historical ID and gains a display snapshot.
const removedV3Exercise = { ...legacyExercise, id: 'builtin-exercise:spoto-press', name: 'Spoto Press', category: 'Chest' } satisfies Exercise
const removedWorkout: WorkoutExercise = { ...baseRecord, id: 'we:removed', workoutId: 'workout:1', exerciseId: removedV3Exercise.id, order: 1 }
const removedResult = migrateWorkoutExerciseReferences([removedWorkout], new Map([[removedV3Exercise.id, removedV3Exercise]]), v4MigrationMap, timestamp)[0]
assert.equal(removedResult.exerciseId, removedV3Exercise.id)
assert.equal(removedResult.exerciseNameSnapshot, removedV3Exercise.name)

// E: custom exercise references are untouched.
const customWorkout = { ...removedWorkout, id: 'we:custom', exerciseId: 'custom-exercise:mine' }
assert.deepEqual(migrateWorkoutExerciseReferences([customWorkout], legacyById, LEGACY_EXERCISE_ID_MAP, timestamp)[0], customWorkout)

// F: favourites/notes/tags move to the successor deterministically.
const mappedPreference: ExercisePreference = { ...baseRecord, id: `exercise-preference:${mappedLegacyId}`, exerciseId: mappedLegacyId, favourite: true, personalNotes: 'Keep elbows steady.', customTagIds: ['tag:pull'] }
const migratedPreference = migrateExercisePreferences([mappedPreference], LEGACY_EXERCISE_ID_MAP, timestamp)[0]
assert.equal(migratedPreference.exerciseId, 'builtin-exercise:cable-lat-pulldown')
assert.equal(migratedPreference.favourite, true)
assert.equal(migratedPreference.personalNotes, mappedPreference.personalNotes)

// G: a removed active favourite is deactivated without deleting its notes or tags.
const removedPreference: ExercisePreference = { ...baseRecord, id: `exercise-preference:${legacyExercise.id}`, exerciseId: legacyExercise.id, favourite: true, personalNotes: 'Historic pacing note.', customTagIds: ['tag:cardio'] }
const retiredPreference = migrateExercisePreferences([{ ...removedPreference, exerciseId: removedV3Exercise.id, id: `exercise-preference:${removedV3Exercise.id}` }], v4MigrationMap, timestamp)[0]
assert.equal(retiredPreference.favourite, false)
assert.equal(retiredPreference.personalNotes, removedPreference.personalNotes)
assert.deepEqual(retiredPreference.customTagIds, removedPreference.customTagIds)

// F: no v2 → v4 migration target can resolve to a retired v3 ID.
const activeIds = new Set(builtInExercises.map((exercise) => exercise.id))
assert.ok(LEGACY_EXERCISE_MIGRATIONS.every((migration) => !migration.successorId || activeIds.has(migration.successorId)))

import { CANONICAL_EXERCISE_ID_MIGRATIONS, CANONICAL_SLUG_MIGRATIONS } from './exerciseMigration.ts'
import { getExerciseContent } from './exerciseContent.ts'

// H: canonical typo migrations resolve old slug/ID references to valid active exercises.
for (const [oldSlug, targetSlug] of Object.entries(CANONICAL_SLUG_MIGRATIONS)) {
  assert.ok(activeIds.has(`builtin-exercise:${targetSlug}`), `Target slug ${targetSlug} must be an active exercise for ${oldSlug}`)
}

for (const [oldId, targetId] of Object.entries(CANONICAL_EXERCISE_ID_MIGRATIONS)) {
  assert.ok(activeIds.has(targetId), `Target ID ${targetId} must be an active exercise for ${oldId}`)
  const content = getExerciseContent(oldId)
  assert.ok(content, `Exercise content must resolve for ${oldId}`)
  assert.equal(content.exerciseId, targetId)
}

const fullMigrationMap = { ...v4MigrationMap, ...CANONICAL_EXERCISE_ID_MIGRATIONS }
const typoWorkout: WorkoutExercise = { ...baseRecord, id: 'we:typo-cossack', workoutId: 'workout:1', exerciseId: 'builtin-exercise:crossack-squat', order: 0 }
const migratedTypo = migrateWorkoutExerciseReferences([typoWorkout], legacyById, fullMigrationMap, timestamp)[0]
assert.equal(migratedTypo.exerciseId, 'builtin-exercise:cossack-squat')

const typoPref: ExercisePreference = { ...baseRecord, id: 'exercise-preference:builtin-exercise:cable-hip-abducction', exerciseId: 'builtin-exercise:cable-hip-abducction', favourite: true, personalNotes: 'Glute medius cue', customTagIds: [] }
const migratedTypoPref = migrateExercisePreferences([typoPref], fullMigrationMap, timestamp)[0]
assert.equal(migratedTypoPref.exerciseId, 'builtin-exercise:cable-hip-abduction')
assert.equal(migratedTypoPref.id, 'exercise-preference:builtin-exercise:cable-hip-abduction')
assert.equal(migratedTypoPref.favourite, true)
assert.equal(migratedTypoPref.personalNotes, 'Glute medius cue')

const typoWorkout2: WorkoutExercise = { ...baseRecord, id: 'we:typo-kettlebel', workoutId: 'workout:1', exerciseId: 'builtin-exercise:kettlebel-renegade-row', order: 1 }
const migratedTypo2 = migrateWorkoutExerciseReferences([typoWorkout2], legacyById, fullMigrationMap, timestamp)[0]
assert.equal(migratedTypo2.exerciseId, 'builtin-exercise:kettlebell-renegade-row')

const typoWorkout3: WorkoutExercise = { ...baseRecord, id: 'we:typo-overhead-cable', workoutId: 'workout:1', exerciseId: 'builtin-exercise:overhead-cable-triceps-exstension-bar', order: 2 }
const migratedTypo3 = migrateWorkoutExerciseReferences([typoWorkout3], legacyById, fullMigrationMap, timestamp)[0]
assert.equal(migratedTypo3.exerciseId, 'builtin-exercise:overhead-cable-triceps-extension-bar')

const typoWorkout4: WorkoutExercise = { ...baseRecord, id: 'we:typo-stability-ball', workoutId: 'workout:1', exerciseId: 'builtin-exercise:stabillity-ball-wall-squat', order: 3 }
const migratedTypo4 = migrateWorkoutExerciseReferences([typoWorkout4], legacyById, fullMigrationMap, timestamp)[0]
assert.equal(migratedTypo4.exerciseId, 'builtin-exercise:stability-ball-wall-squat')

const typoWorkout5: WorkoutExercise = { ...baseRecord, id: 'we:typo-stacionary-bike', workoutId: 'workout:1', exerciseId: 'builtin-exercise:stacionary-bike', order: 4 }
const migratedTypo5 = migrateWorkoutExerciseReferences([typoWorkout5], legacyById, fullMigrationMap, timestamp)[0]
assert.equal(migratedTypo5.exerciseId, 'builtin-exercise:stationary-bike')

const typoWorkout6: WorkoutExercise = { ...baseRecord, id: 'we:typo-cable-supine', workoutId: 'workout:1', exerciseId: 'builtin-exercise:cable-seated-supine-grip-row', order: 5 }
const migratedTypo6 = migrateWorkoutExerciseReferences([typoWorkout6], legacyById, fullMigrationMap, timestamp)[0]
assert.equal(migratedTypo6.exerciseId, 'builtin-exercise:cable-seated-supinated-grip-row')

const typoWorkout7: WorkoutExercise = { ...baseRecord, id: 'we:typo-capitans-chair', workoutId: 'workout:1', exerciseId: 'builtin-exercise:capitans-chair-straight-leg-raises', order: 6 }
const migratedTypo7 = migrateWorkoutExerciseReferences([typoWorkout7], legacyById, fullMigrationMap, timestamp)[0]
assert.equal(migratedTypo7.exerciseId, 'builtin-exercise:captains-chair-straight-leg-raises')

// Batch 8 C specific checks
const sumoSquat = builtInExercises.find((e) => e.id === 'builtin-exercise:sumo-squat')!
assert.equal(sumoSquat.equipment, 'Bodyweight')
assert.equal(sumoSquat.trackingType, 'reps_only')

const sumoSquatStepbox = builtInExercises.find((e) => e.id === 'builtin-exercise:sumo-squat-off-stepbox')!
assert.equal(sumoSquatStepbox.trackingType, 'reps_only')

const tbarRow = builtInExercises.find((e) => e.id === 'builtin-exercise:t-bar-bent-over-row')!
assert.equal(tbarRow.equipment, 'Machine')

const swissBallPlank = builtInExercises.find((e) => e.id === 'builtin-exercise:swiss-ball-plank')!
assert.equal(swissBallPlank.equipment, 'Swiss Ball')

// Audit B Part 1 specific checks
const stretch9090 = builtInExercises.find((e) => e.id === 'builtin-exercise:90-to-90-stretch')!
assert.equal(stretch9090.name, '90/90 Stretch')
assert.deepEqual(stretch9090.categories, ['Legs', 'Gluteal'])
assert.deepEqual(stretch9090.primaryMuscles, ['Gluteus Maximus', 'Gluteus Medius', 'Adductors'])

const abWheel = builtInExercises.find((e) => e.id === 'builtin-exercise:ab-wheel-rollout')!
assert.equal(abWheel.equipment, 'Ab Wheel')
assert.deepEqual(abWheel.primaryMuscles, ['Upper Abs', 'Lower Abs', 'Obliques'])
assert.equal(abWheel.trackingType, 'bodyweight_reps')

const bulgarianBagLunges = builtInExercises.find((e) => e.id === 'builtin-exercise:bulgarian-bag-walking-lunges')!
assert.equal(bulgarianBagLunges.equipment, 'Bulgarian Bag')
assert.deepEqual(bulgarianBagLunges.categories, ['Legs', 'Gluteal'])

const backExt = builtInExercises.find((e) => e.id === 'builtin-exercise:back-extension')!
assert.deepEqual(backExt.categories, ['Back', 'Gluteal'])

const birdDog = builtInExercises.find((e) => e.id === 'builtin-exercise:bird-dog')!
assert.deepEqual(birdDog.categories, ['Abs', 'Back', 'Gluteal'])

const cleanAndJerk = builtInExercises.find((e) => e.id === 'builtin-exercise:clean-and-jerk')!
assert.deepEqual(cleanAndJerk.categories, ['Legs', 'Shoulders'])

const typoWorkout8: WorkoutExercise = { ...baseRecord, id: 'we:typo-kettelbell-clean', workoutId: 'workout:1', exerciseId: 'builtin-exercise:kettelbell-clean', order: 7 }
const migratedTypo8 = migrateWorkoutExerciseReferences([typoWorkout8], legacyById, fullMigrationMap, timestamp)[0]
assert.equal(migratedTypo8.exerciseId, 'builtin-exercise:kettlebell-clean')

const typoWorkout9: WorkoutExercise = { ...baseRecord, id: 'we:typo-lying-stright', workoutId: 'workout:1', exerciseId: 'builtin-exercise:lying-stright-leg-raise', order: 8 }
const migratedTypo9 = migrateWorkoutExerciseReferences([typoWorkout9], legacyById, fullMigrationMap, timestamp)[0]
assert.equal(migratedTypo9.exerciseId, 'builtin-exercise:lying-straight-leg-raise')

const typoWorkout10: WorkoutExercise = { ...baseRecord, id: 'we:typo-smith-machibe', workoutId: 'workout:1', exerciseId: 'builtin-exercise:smith-machibe-glute-kickback', order: 9 }
const migratedTypo10 = migrateWorkoutExerciseReferences([typoWorkout10], legacyById, fullMigrationMap, timestamp)[0]
assert.equal(migratedTypo10.exerciseId, 'builtin-exercise:smith-machine-glute-kickback')

const typoWorkout11: WorkoutExercise = { ...baseRecord, id: 'we:typo-t-bar-chest', workoutId: 'workout:1', exerciseId: 'builtin-exercise:t-bar-chest-suported-row', order: 10 }
const migratedTypo11 = migrateWorkoutExerciseReferences([typoWorkout11], legacyById, fullMigrationMap, timestamp)[0]
assert.equal(migratedTypo11.exerciseId, 'builtin-exercise:t-bar-chest-supported-row')

// Audit B Part 2 specific checks
const ringMuscleUp = builtInExercises.find((e) => e.id === 'builtin-exercise:ring-muscle-up')!
assert.deepEqual(ringMuscleUp.categories, ['Back', 'Biceps', 'Chest', 'Triceps', 'Shoulders'])

const snatch = builtInExercises.find((e) => e.id === 'builtin-exercise:snatch')!
assert.deepEqual(snatch.categories, ['Legs', 'Gluteal', 'Shoulders', 'Back', 'Abs'])

const flag = builtInExercises.find((e) => e.id === 'builtin-exercise:flag')!
assert.deepEqual(flag.categories, ['Abs', 'Back', 'Shoulders'])

const turkishGetUp = builtInExercises.find((e) => e.id === 'builtin-exercise:turkish-get-up')!
assert.deepEqual(turkishGetUp.categories, ['Shoulders', 'Abs', 'Gluteal', 'Legs'])

const pullUp = builtInExercises.find((e) => e.id === 'builtin-exercise:pull-up')!
assert.ok(pullUp.secondaryMuscles.includes('Biceps'))
assert.ok(!pullUp.secondaryMuscles.includes('Triceps'))

const elliptical = builtInExercises.find((e) => e.id === 'builtin-exercise:elliptical-trainer')!
assert.equal(elliptical.equipment, 'Cardio Machine')
assert.equal(elliptical.trackingType, 'distance_duration')

const farmerWalk = builtInExercises.find((e) => e.id === 'builtin-exercise:farmer-walk')!
assert.deepEqual(farmerWalk.categories, ['Forearms', 'Legs', 'Abs'])
assert.equal(farmerWalk.trackingType, 'weight_distance')

const unilateralFarmerWalk = builtInExercises.find((e) => e.id === 'builtin-exercise:unilateral-farmer-walk')!
assert.deepEqual(unilateralFarmerWalk.categories, ['Forearms', 'Abs', 'Legs'])
assert.equal(unilateralFarmerWalk.trackingType, 'weight_distance')

// Tracking corrections verification
const dumbbellSideBridge = builtInExercises.find((e) => e.id === 'builtin-exercise:dumbbell-side-bridge')!
assert.equal(dumbbellSideBridge.trackingType, 'weight_duration')

const staticFrontHold = builtInExercises.find((e) => e.id === 'builtin-exercise:static-front-hold')!
assert.equal(staticFrontHold.trackingType, 'weight_duration')

const weightedHollowBodyHold = builtInExercises.find((e) => e.id === 'builtin-exercise:weighted-hollow-body-hold')!
assert.equal(weightedHollowBodyHold.trackingType, 'weight_duration')

const weightedPlank = builtInExercises.find((e) => e.id === 'builtin-exercise:weighted-plank')!
assert.equal(weightedPlank.trackingType, 'weight_duration')

const hangPowerClean = builtInExercises.find((e) => e.id === 'builtin-exercise:hang-power-clean')!
assert.equal(hangPowerClean.trackingType, 'weight_reps')
assert.deepEqual(hangPowerClean.categories, ['Legs', 'Gluteal'])

const weightedHangingLegRaise = builtInExercises.find((e) => e.id === 'builtin-exercise:weighted-hanging-leg-raise')!
assert.equal(weightedHangingLegRaise.trackingType, 'weight_reps')

const deadHang = builtInExercises.find((e) => e.id === 'builtin-exercise:dead-hang')!
assert.equal(deadHang.trackingType, 'duration')

// Type A Part 1 specific checks
const airBicycleCrunch = builtInExercises.find((e) => e.id === 'builtin-exercise:air-bicycle-crunch')!
assert.equal(airBicycleCrunch.name, 'Air Bicycle Crunch')
assert.deepEqual(airBicycleCrunch.equipmentOptions, ['Bodyweight'])
assert.deepEqual(airBicycleCrunch.categories, ['Abs'])
assert.equal(airBicycleCrunch.trackingType, 'bodyweight_reps')
assert.equal(airBicycleCrunch.laterality, 'alternating')

const armBlasterCurl = builtInExercises.find((e) => e.id === 'builtin-exercise:arm-blaster-biceps-dumbbell-curl')!
assert.equal(armBlasterCurl.laterality, 'bilateral')

const fullRangeArmCircles = builtInExercises.find((e) => e.id === 'builtin-exercise:full-range-arm-circles')!
const armCirclesShoulderHeight = builtInExercises.find((e) => e.id === 'builtin-exercise:arm-circles-at-shoulder-height')!
assert.equal(fullRangeArmCircles.name, 'Full-Range Arm Circles')
assert.equal(armCirclesShoulderHeight.name, 'Arm Circles at Shoulder Height')
assert.notEqual(fullRangeArmCircles.id, armCirclesShoulderHeight.id)

const bulgarianSquat = builtInExercises.find((e) => e.id === 'builtin-exercise:bulgarian-squat')!
assert.deepEqual(bulgarianSquat.equipmentOptions, ['Bench'])

const californiaPress = builtInExercises.find((e) => e.id === 'builtin-exercise:california-press')!
assert.deepEqual(californiaPress.equipmentOptions, ['Barbell', 'Bench'])
assert.equal(californiaPress.trackingType, 'weight_reps')

const deadBugBall = builtInExercises.find((e) => e.id === 'builtin-exercise:dead-bug-with-ball')!
assert.equal(deadBugBall.laterality, 'alternating')

const dbBicepsCurl = builtInExercises.find((e) => e.id === 'builtin-exercise:dumbbell-biceps-curl')!
assert.equal(dbBicepsCurl.laterality, 'bilateral')

const twoDbSldl = builtInExercises.find((e) => e.id === 'builtin-exercise:two-dumbbell-straight-leg-deadlift')!
const singleDbSldl = builtInExercises.find((e) => e.id === 'builtin-exercise:single-dumbbell-straight-leg-deadlift')!
assert.equal(twoDbSldl.name, 'Two-Dumbbell Straight-Leg Deadlift')
assert.equal(singleDbSldl.name, 'Single-Dumbbell Straight-Leg Deadlift')
assert.notEqual(twoDbSldl.id, singleDbSldl.id)
assert.equal(twoDbSldl.trackingType, 'weight_reps')
assert.equal(singleDbSldl.trackingType, 'weight_reps')

// Type A Part 1 migration tests
const typoWorkoutA1: WorkoutExercise = { ...baseRecord, id: 'we:typea-air-bike', workoutId: 'workout:1', exerciseId: 'builtin-exercise:air-bike', order: 11 }
const migratedA1 = migrateWorkoutExerciseReferences([typoWorkoutA1], legacyById, fullMigrationMap, timestamp)[0]
assert.equal(migratedA1.exerciseId, 'builtin-exercise:air-bicycle-crunch')

const typoWorkoutA2: WorkoutExercise = { ...baseRecord, id: 'we:typea-arm-circle', workoutId: 'workout:1', exerciseId: 'builtin-exercise:arm-circle', order: 12 }
const migratedA2 = migrateWorkoutExerciseReferences([typoWorkoutA2], legacyById, fullMigrationMap, timestamp)[0]
assert.equal(migratedA2.exerciseId, 'builtin-exercise:full-range-arm-circles')

const typoWorkoutA3: WorkoutExercise = { ...baseRecord, id: 'we:typea-arm-circles', workoutId: 'workout:1', exerciseId: 'builtin-exercise:arm-circles', order: 13 }
const migratedA3 = migrateWorkoutExerciseReferences([typoWorkoutA3], legacyById, fullMigrationMap, timestamp)[0]
assert.equal(migratedA3.exerciseId, 'builtin-exercise:arm-circles-at-shoulder-height')

const typoWorkoutA4: WorkoutExercise = { ...baseRecord, id: 'we:typea-2db-sldl', workoutId: 'workout:1', exerciseId: 'builtin-exercise:dumbbell-deadlift-straight-legs', order: 14 }
const migratedA4 = migrateWorkoutExerciseReferences([typoWorkoutA4], legacyById, fullMigrationMap, timestamp)[0]
assert.equal(migratedA4.exerciseId, 'builtin-exercise:two-dumbbell-straight-leg-deadlift')

const typoWorkoutA5: WorkoutExercise = { ...baseRecord, id: 'we:typea-1db-sldl', workoutId: 'workout:1', exerciseId: 'builtin-exercise:dumbbell-straight-leg-deadlift', order: 15 }
const migratedA5 = migrateWorkoutExerciseReferences([typoWorkoutA5], legacyById, fullMigrationMap, timestamp)[0]
assert.equal(migratedA5.exerciseId, 'builtin-exercise:single-dumbbell-straight-leg-deadlift')

// Confirmed KEEP rows check
assert.ok(builtInExercises.some((e) => e.id === 'builtin-exercise:assisted-pistol-squat'))
assert.ok(builtInExercises.some((e) => e.id === 'builtin-exercise:back-lever'))
assert.ok(builtInExercises.some((e) => e.id === 'builtin-exercise:band-pass-through-shoulders'))
assert.ok(builtInExercises.some((e) => e.id === 'builtin-exercise:band-warm-up-dynamic-shoulder-stretch'))
assert.ok(builtInExercises.some((e) => e.id === 'builtin-exercise:barbell-reverse-grip-forearm-curl'))
assert.ok(builtInExercises.some((e) => e.id === 'builtin-exercise:crab-pose'))
assert.ok(builtInExercises.some((e) => e.id === 'builtin-exercise:cross-body-one-arm-strength-press'))

// Type A Part 2 specific checks
const dbLatPullover = builtInExercises.find((e) => e.id === 'builtin-exercise:dumbbell-lat-pullover')!
assert.equal(dbLatPullover.laterality, 'bilateral')
assert.deepEqual(dbLatPullover.primaryMuscles, ['Lats', 'Teres Major'])

const dbLyingLegCurl = builtInExercises.find((e) => e.id === 'builtin-exercise:dumbbell-lying-leg-curl')!
assert.equal(dbLyingLegCurl.laterality, 'bilateral')

const dbLyingTricepsExt = builtInExercises.find((e) => e.id === 'builtin-exercise:dumbbell-lying-triceps-extension')!
assert.equal(dbLyingTricepsExt.laterality, 'bilateral')

const dbPulloverLegsRaised = builtInExercises.find((e) => e.id === 'builtin-exercise:dumbbell-pullover-with-legs-raised')!
assert.deepEqual(dbPulloverLegsRaised.equipmentOptions, ['Dumbbell', 'Bench'])

const frogPlanche = builtInExercises.find((e) => e.id === 'builtin-exercise:frog-planche')!
assert.deepEqual(frogPlanche.categories, ['Shoulders', 'Triceps', 'Abs'])
assert.deepEqual(frogPlanche.primaryMuscles, ['Front Delts', 'Triceps'])

// #345 retired and migrated to #344
assert.equal(builtInExercises.some((e) => e.id === 'builtin-exercise:hanging-knees-to-elbows-waist'), false)
const hangingKneesToElbows = builtInExercises.find((e) => e.id === 'builtin-exercise:hanging-knees-to-elbows')!
assert.equal(hangingKneesToElbows.trackingType, 'bodyweight_reps')

const typoWorkoutA6: WorkoutExercise = { ...baseRecord, id: 'we:typea-knees-elbows-waist', workoutId: 'workout:1', exerciseId: 'builtin-exercise:hanging-knees-to-elbows-waist', order: 16 }
const migratedA6 = migrateWorkoutExerciseReferences([typoWorkoutA6], legacyById, fullMigrationMap, timestamp)[0]
assert.equal(migratedA6.exerciseId, 'builtin-exercise:hanging-knees-to-elbows')

const hipHinge = builtInExercises.find((e) => e.id === 'builtin-exercise:hip-hinge')!
assert.deepEqual(hipHinge.equipmentOptions, ['Other'])
assert.deepEqual(hipHinge.primaryMuscles, ['Gluteus Maximus', 'Hamstrings'])
assert.deepEqual(hipHinge.secondaryMuscles, ['Spinal Erectors', 'Adductors'])

const inclineHammerPress = builtInExercises.find((e) => e.id === 'builtin-exercise:incline-hammer-chest-press')!
assert.deepEqual(inclineHammerPress.equipmentOptions, ['Machine'])
assert.equal(inclineHammerPress.trackingType, 'weight_reps')

const kneelingBackRotStretch = builtInExercises.find((e) => e.id === 'builtin-exercise:kneeling-back-rotation-stretch')!
assert.equal(kneelingBackRotStretch.trackingType, 'reps_only')

const legInAndOut = builtInExercises.find((e) => e.id === 'builtin-exercise:leg-in-and-out')!
assert.deepEqual(legInAndOut.equipmentOptions, ['Bodyweight'])
assert.equal(legInAndOut.trackingType, 'bodyweight_reps')

const lungeStretch = builtInExercises.find((e) => e.id === 'builtin-exercise:lunge-stretch')!
assert.deepEqual(lungeStretch.primaryMuscles, ['Hip Flexors'])
assert.deepEqual(lungeStretch.secondaryMuscles, ['Quadriceps'])

const lyingChestPress = builtInExercises.find((e) => e.id === 'builtin-exercise:lying-chest-press')!
assert.deepEqual(lyingChestPress.equipmentOptions, ['Machine'])
assert.equal(lyingChestPress.trackingType, 'weight_reps')

// Type A Part 3 specific checks
const cableLyingCrossRaise = builtInExercises.find((e) => e.id === 'builtin-exercise:cable-lying-cross-lateral-raise')!
assert.equal(cableLyingCrossRaise.name, 'Cable Lying Cross Lateral Raise')
assert.deepEqual(cableLyingCrossRaise.equipmentOptions, ['Cable', 'Bench'])
assert.deepEqual(cableLyingCrossRaise.categories, ['Shoulders'])
assert.deepEqual(cableLyingCrossRaise.primaryMuscles, ['Side Delts'])
assert.deepEqual(cableLyingCrossRaise.secondaryMuscles, ['Front Delts', 'Rear Delts'])
assert.equal(cableLyingCrossRaise.trackingType, 'weight_reps')

const typoWorkoutA3_1: WorkoutExercise = { ...baseRecord, id: 'we:typea-lying-cross-fly', workoutId: 'workout:1', exerciseId: 'builtin-exercise:lying-cross-lateral-cable-fly', order: 17 }
const migratedA3_1 = migrateWorkoutExerciseReferences([typoWorkoutA3_1], legacyById, fullMigrationMap, timestamp)[0]
assert.equal(migratedA3_1.exerciseId, 'builtin-exercise:cable-lying-cross-lateral-raise')

const neckCurl = builtInExercises.find((e) => e.id === 'builtin-exercise:neck-curl')!
assert.deepEqual(neckCurl.equipmentOptions, ['Weight Plate', 'Bench'])
assert.equal(neckCurl.trackingType, 'weight_reps')

const nordicCurl = builtInExercises.find((e) => e.id === 'builtin-exercise:nordic-hamstring-curl')!
assert.deepEqual(nordicCurl.equipmentOptions, ['Bodyweight'])
assert.equal(nordicCurl.trackingType, 'bodyweight_reps')

const oneArmBandLat = builtInExercises.find((e) => e.id === 'builtin-exercise:one-arm-band-kneeling-lat-pulldown')!
assert.deepEqual(oneArmBandLat.equipmentOptions, ['Resistance Band'])
assert.equal(oneArmBandLat.trackingType, 'weight_reps')

const punchingBagBoxing = builtInExercises.find((e) => e.id === 'builtin-exercise:punching-bag-boxing')!
assert.deepEqual(punchingBagBoxing.equipmentOptions, ['Other'])
assert.deepEqual(punchingBagBoxing.categories, ['Shoulders', 'Triceps', 'Abs', 'Legs', 'Chest'])
assert.deepEqual(punchingBagBoxing.primaryMuscles, ['Front Delts', 'Triceps', 'Obliques'])
assert.deepEqual(punchingBagBoxing.secondaryMuscles, ['Mid Chest', 'Upper Abs', 'Quadriceps', 'Gluteus Maximus'])
assert.equal(punchingBagBoxing.trackingType, 'duration')

const reverseWristPushUp = builtInExercises.find((e) => e.id === 'builtin-exercise:reverse-wrist-push-up')!
assert.deepEqual(reverseWristPushUp.categories, ['Forearms'])
assert.deepEqual(reverseWristPushUp.primaryMuscles, ['Forearm Extensors', 'Forearm Flexors'])
assert.deepEqual(reverseWristPushUp.secondaryMuscles, ['Mid Chest', 'Triceps', 'Front Delts'])
assert.equal(reverseWristPushUp.trackingType, 'bodyweight_reps')

const rollCalves = builtInExercises.find((e) => e.id === 'builtin-exercise:roll-calves')!
assert.deepEqual(rollCalves.equipmentOptions, ['Foam Roller'])
assert.equal(rollCalves.trackingType, 'duration')

const rollFoot = builtInExercises.find((e) => e.id === 'builtin-exercise:roll-foot')!
assert.deepEqual(rollFoot.equipmentOptions, ['Foam Roller'])
assert.equal(rollFoot.trackingType, 'duration')

const running = builtInExercises.find((e) => e.id === 'builtin-exercise:running')!
assert.deepEqual(running.equipmentOptions, ['Bodyweight'])
assert.equal(running.trackingType, 'distance_duration')

const slidingLegCurl = builtInExercises.find((e) => e.id === 'builtin-exercise:sliding-leg-curl')!
assert.deepEqual(slidingLegCurl.equipmentOptions, ['Slider'])
assert.equal(slidingLegCurl.trackingType, 'bodyweight_reps')

const splitSquat = builtInExercises.find((e) => e.id === 'builtin-exercise:split-squat')!
assert.deepEqual(splitSquat.equipmentOptions, ['Bodyweight'])
assert.equal(splitSquat.trackingType, 'bodyweight_reps')

const standingBicycleCrunch = builtInExercises.find((e) => e.id === 'builtin-exercise:standing-bicycle-crunch')!
assert.equal(standingBicycleCrunch.name, 'Standing Bicycle Crunch')
assert.deepEqual(standingBicycleCrunch.equipmentOptions, ['Bodyweight'])
assert.deepEqual(standingBicycleCrunch.categories, ['Abs'])
assert.deepEqual(standingBicycleCrunch.primaryMuscles, ['Obliques', 'Upper Abs', 'Lower Abs'])
assert.deepEqual(standingBicycleCrunch.secondaryMuscles, ['Hip Flexors'])
assert.equal(standingBicycleCrunch.trackingType, 'bodyweight_reps')

const typoWorkoutA3_2: WorkoutExercise = { ...baseRecord, id: 'we:typea-standing-air-bike', workoutId: 'workout:1', exerciseId: 'builtin-exercise:standing-air-bike', order: 18 }
const migratedA3_2 = migrateWorkoutExerciseReferences([typoWorkoutA3_2], legacyById, fullMigrationMap, timestamp)[0]
assert.equal(migratedA3_2.exerciseId, 'builtin-exercise:standing-bicycle-crunch')

const supermanPushUp = builtInExercises.find((e) => e.id === 'builtin-exercise:superman-push-up')!
assert.deepEqual(supermanPushUp.equipmentOptions, ['Bodyweight'])
assert.equal(supermanPushUp.trackingType, 'bodyweight_reps')

const walking = builtInExercises.find((e) => e.id === 'builtin-exercise:walking')!
assert.equal(walking.name, 'Walking')
assert.deepEqual(walking.equipmentOptions, ['Bodyweight'])
assert.equal(walking.trackingType, 'distance_duration')

const typoWorkoutA3_3: WorkoutExercise = { ...baseRecord, id: 'we:typea-walking-cardio', workoutId: 'workout:1', exerciseId: 'builtin-exercise:walking-cardio', order: 19 }
const migratedA3_3 = migrateWorkoutExerciseReferences([typoWorkoutA3_3], legacyById, fullMigrationMap, timestamp)[0]
assert.equal(migratedA3_3.exerciseId, 'builtin-exercise:walking')

const walkingLunges = builtInExercises.find((e) => e.id === 'builtin-exercise:walking-lunges')!
assert.deepEqual(walkingLunges.equipmentOptions, ['Bodyweight'])
assert.equal(walkingLunges.trackingType, 'bodyweight_reps')

// Batch 1 Final Cleanup Checks
const cableBicepsCurl = builtInExercises.find((e) => e.id === 'builtin-exercise:cable-biceps-curl')!
assert.equal(cableBicepsCurl.name, 'Cable Biceps Curl')
assert.deepEqual(cableBicepsCurl.equipmentOptions, ['Cable'])
assert.deepEqual(cableBicepsCurl.categories, ['Biceps'])
assert.deepEqual(cableBicepsCurl.primaryMuscles, ['Biceps'])
assert.equal(cableBicepsCurl.trackingType, 'weight_reps')

const typoWorkoutB1_53: WorkoutExercise = { ...baseRecord, id: 'we:batch1-bar-cable-curl', workoutId: 'workout:1', exerciseId: 'builtin-exercise:bar-cable-biceps-curl', order: 20 }
const migratedB1_53 = migrateWorkoutExerciseReferences([typoWorkoutB1_53], legacyById, fullMigrationMap, timestamp)[0]
assert.equal(migratedB1_53.exerciseId, 'builtin-exercise:cable-biceps-curl')

const benchWithChains = builtInExercises.find((e) => e.id === 'builtin-exercise:barbell-bench-press-with-chains')!
assert.deepEqual(benchWithChains.equipmentOptions, ['Barbell', 'Bench', 'Chains'])
assert.equal(benchWithChains.trackingType, 'weight_reps')

const barbellPullover = builtInExercises.find((e) => e.id === 'builtin-exercise:barbell-pullover')!
assert.deepEqual(barbellPullover.categories, ['Back', 'Chest'])
assert.deepEqual(barbellPullover.primaryMuscles, ['Lats', 'Mid Chest'])
assert.deepEqual(barbellPullover.secondaryMuscles, ['Teres Major', 'Serratus Anterior', 'Triceps', 'Lower Chest'])
assert.equal(barbellPullover.trackingType, 'weight_reps')

const barbellRackPull = builtInExercises.find((e) => e.id === 'builtin-exercise:barbell-rack-pull')!
assert.deepEqual(barbellRackPull.categories, ['Back', 'Gluteal', 'Legs'])
assert.deepEqual(barbellRackPull.primaryMuscles, ['Spinal Erectors', 'Gluteus Maximus', 'Hamstrings'])
assert.deepEqual(barbellRackPull.secondaryMuscles, ['Upper Traps', 'Middle Traps', 'Lats', 'Forearm Flexors'])
assert.equal(barbellRackPull.trackingType, 'weight_reps')

// Seven tracking corrections
const fullArmCircles = builtInExercises.find((e) => e.id === 'builtin-exercise:full-range-arm-circles')!
assert.equal(fullArmCircles.trackingType, 'reps_only')

const shoulderArmCircles = builtInExercises.find((e) => e.id === 'builtin-exercise:arm-circles-at-shoulder-height')!
assert.equal(shoulderArmCircles.trackingType, 'reps_only')

const backLever = builtInExercises.find((e) => e.id === 'builtin-exercise:back-lever')!
assert.equal(backLever.trackingType, 'duration')

const bandAssistedPullUp = builtInExercises.find((e) => e.id === 'builtin-exercise:band-assisted-pull-up')!
assert.equal(bandAssistedPullUp.trackingType, 'reps_only')

const bandPassThrough = builtInExercises.find((e) => e.id === 'builtin-exercise:band-pass-through-shoulders')!
assert.equal(bandPassThrough.trackingType, 'reps_only')

const bandWarmUpShoulder = builtInExercises.find((e) => e.id === 'builtin-exercise:band-warm-up-dynamic-shoulder-stretch')!
assert.equal(bandWarmUpShoulder.trackingType, 'reps_only')

const barbellRolloutKneeling = builtInExercises.find((e) => e.id === 'builtin-exercise:barbell-rollout-kneeling')!
assert.equal(barbellRolloutKneeling.trackingType, 'bodyweight_reps')

// Assisted exercises confirmation
const assistedDips = builtInExercises.find((e) => e.id === 'builtin-exercise:assisted-machine-dips')!
assert.equal(assistedDips.trackingType, 'weight_reps')

const assistedPullUp = builtInExercises.find((e) => e.id === 'builtin-exercise:assisted-pull-up')!
assert.equal(assistedPullUp.trackingType, 'weight_reps')

// Batch 2 Final Cleanup Checks
const calfLegPress = builtInExercises.find((e) => e.id === 'builtin-exercise:calf-leg-press')!
assert.deepEqual(calfLegPress.equipmentOptions, ['Machine'])
assert.deepEqual(calfLegPress.categories, ['Legs'])
assert.deepEqual(calfLegPress.primaryMuscles, ['Gastrocnemius', 'Soleus'])
assert.deepEqual(calfLegPress.secondaryMuscles, [])
assert.equal(calfLegPress.trackingType, 'weight_reps')

const cobraPushUp = builtInExercises.find((e) => e.id === 'builtin-exercise:cobra-push-up')!
assert.deepEqual(cobraPushUp.equipmentOptions, ['Bodyweight'])
assert.deepEqual(cobraPushUp.categories, ['Chest', 'Triceps'])
assert.deepEqual(cobraPushUp.primaryMuscles, ['Mid Chest', 'Triceps'])
assert.deepEqual(cobraPushUp.secondaryMuscles, ['Front Delts', 'Upper Chest', 'Lower Chest', 'Serratus Anterior'])
assert.equal(cobraPushUp.trackingType, 'bodyweight_reps')

const bodyweightWindmill = builtInExercises.find((e) => e.id === 'builtin-exercise:bodyweight-windmill')!
assert.equal(bodyweightWindmill.trackingType, 'reps_only')

const catCow = builtInExercises.find((e) => e.id === 'builtin-exercise:cat-cow')!
assert.equal(catCow.trackingType, 'reps_only')

// Batch 3 Final Cleanup Checks
const deepSquatFold = builtInExercises.find((e) => e.id === 'builtin-exercise:deep-squat-to-wide-fold-with-foot-hold')!
assert.deepEqual(deepSquatFold.primaryMuscles, ['Hamstrings', 'Adductors'])
assert.deepEqual(deepSquatFold.secondaryMuscles, ['Gluteus Maximus', 'Gastrocnemius', 'Spinal Erectors'])
assert.equal(deepSquatFold.trackingType, 'reps_only')

const dipShrugs = builtInExercises.find((e) => e.id === 'builtin-exercise:dip-shrugs')!
assert.deepEqual(dipShrugs.primaryMuscles, ['Lower Traps', 'Serratus Anterior', 'Lats'])
assert.deepEqual(dipShrugs.secondaryMuscles, ['Middle Traps'])
assert.equal(dipShrugs.trackingType, 'bodyweight_reps')

const downwardDog = builtInExercises.find((e) => e.id === 'builtin-exercise:downward-dog')!
assert.deepEqual(downwardDog.categories, ['Back', 'Shoulders', 'Legs'])
assert.deepEqual(downwardDog.primaryMuscles, ['Hamstrings', 'Gastrocnemius', 'Lats'])
assert.deepEqual(downwardDog.secondaryMuscles, ['Front Delts', 'Triceps', 'Soleus', 'Spinal Erectors'])
assert.equal(downwardDog.trackingType, 'duration')

const cubanRotation = builtInExercises.find((e) => e.id === 'builtin-exercise:dumbbell-cuban-rotation')!
assert.deepEqual(cubanRotation.primaryMuscles, ['Infraspinatus', 'Teres Minor'])
assert.deepEqual(cubanRotation.secondaryMuscles, ['Rear Delts'])
assert.equal(cubanRotation.trackingType, 'weight_reps')

const poliquinRaise = builtInExercises.find((e) => e.id === 'builtin-exercise:dumbbell-poliquin-lateral-raise')!
assert.deepEqual(poliquinRaise.primaryMuscles, ['Side Delts'])
assert.deepEqual(poliquinRaise.secondaryMuscles, ['Front Delts'])
assert.equal(poliquinRaise.trackingType, 'weight_reps')

const ezBarCurl = builtInExercises.find((e) => e.id === 'builtin-exercise:ez-bar-biceps-curl')!
assert.deepEqual(ezBarCurl.equipmentOptions, ['EZ Bar'])
assert.equal(ezBarCurl.trackingType, 'weight_reps')

// Batch 4 Final Cleanup Checks
const b4_flag = builtInExercises.find((e) => e.id === 'builtin-exercise:flag')!
assert.equal(b4_flag.trackingType, 'duration')

const b4_frogPlanche = builtInExercises.find((e) => e.id === 'builtin-exercise:frog-planche')!
assert.equal(b4_frogPlanche.trackingType, 'duration')

const b4_frogPump = builtInExercises.find((e) => e.id === 'builtin-exercise:frog-pump')!
assert.deepEqual(b4_frogPump.equipmentOptions, ['Dumbbell'])
assert.deepEqual(b4_frogPump.primaryMuscles, ['Gluteus Maximus'])
assert.deepEqual(b4_frogPump.secondaryMuscles, ['Gluteus Medius', 'Hamstrings', 'Adductors'])
assert.equal(b4_frogPump.trackingType, 'weight_reps')

const b4_frontLever = builtInExercises.find((e) => e.id === 'builtin-exercise:front-lever')!
assert.equal(b4_frontLever.trackingType, 'duration')

const b4_fullPlanche = builtInExercises.find((e) => e.id === 'builtin-exercise:full-planche')!
assert.equal(b4_fullPlanche.trackingType, 'duration')

const b4_glutesRoll = builtInExercises.find((e) => e.id === 'builtin-exercise:glutes-roll')!
assert.equal(b4_glutesRoll.trackingType, 'duration')

const b4_halfSquat = builtInExercises.find((e) => e.id === 'builtin-exercise:half-squat')!
assert.deepEqual(b4_halfSquat.equipmentOptions, ['Barbell'])
assert.equal(b4_halfSquat.trackingType, 'weight_reps')

const b4_handstandHold = builtInExercises.find((e) => e.id === 'builtin-exercise:handstand-hold')!
assert.equal(b4_handstandHold.trackingType, 'duration')

const b4_hangingObliqueKneeRaise = builtInExercises.find((e) => e.id === 'builtin-exercise:hanging-oblique-knee-raise')!
assert.equal(b4_hangingObliqueKneeRaise.trackingType, 'bodyweight_reps')

const b4_hollowBodyHold = builtInExercises.find((e) => e.id === 'builtin-exercise:hollow-body-hold')!
assert.equal(b4_hollowBodyHold.trackingType, 'duration')

const b4_hoppingHighKneeTap = builtInExercises.find((e) => e.id === 'builtin-exercise:hopping-high-knee-tap')!
assert.equal(b4_hoppingHighKneeTap.trackingType, 'reps_only')

const b4_inclineTwistingSitUp = builtInExercises.find((e) => e.id === 'builtin-exercise:incline-twisting-sit-up')!
assert.equal(b4_inclineTwistingSitUp.trackingType, 'bodyweight_reps')

const b4_jumpRope = builtInExercises.find((e) => e.id === 'builtin-exercise:jump-rope')!
assert.deepEqual(b4_jumpRope.equipmentOptions, ['Jump Rope'])
assert.equal(b4_jumpRope.trackingType, 'duration')

const b4_jumpingJacks = builtInExercises.find((e) => e.id === 'builtin-exercise:jumping-jacks')!
assert.equal(b4_jumpingJacks.trackingType, 'reps_only')

const b4_kickboxing = builtInExercises.find((e) => e.id === 'builtin-exercise:kickboxing')!
assert.equal(b4_kickboxing.trackingType, 'duration')

// Batch 5 Final Cleanup Checks
const b5_kneelingHamstringStretch = builtInExercises.find((e) => e.id === 'builtin-exercise:kneeling-hamstring-stretch')!
assert.deepEqual(b5_kneelingHamstringStretch.primaryMuscles, ['Hamstrings'])
assert.deepEqual(b5_kneelingHamstringStretch.secondaryMuscles, ['Gastrocnemius', 'Soleus'])
assert.equal(b5_kneelingHamstringStretch.trackingType, 'duration')

const b5_machineChestPressHammer = builtInExercises.find((e) => e.id === 'builtin-exercise:machine-chest-press-hammer-grip')!
assert.deepEqual(b5_machineChestPressHammer.primaryMuscles, ['Mid Chest'])
assert.deepEqual(b5_machineChestPressHammer.secondaryMuscles, ['Upper Chest', 'Lower Chest', 'Front Delts', 'Triceps', 'Serratus Anterior'])
assert.equal(b5_machineChestPressHammer.trackingType, 'weight_reps')

const b5_machineShoulderPress = builtInExercises.find((e) => e.id === 'builtin-exercise:machine-shoulder-press')!
assert.deepEqual(b5_machineShoulderPress.primaryMuscles, ['Front Delts'])
assert.deepEqual(b5_machineShoulderPress.secondaryMuscles, ['Side Delts', 'Triceps', 'Upper Chest', 'Serratus Anterior'])
assert.equal(b5_machineShoulderPress.trackingType, 'weight_reps')

const b5_scapulaRow = builtInExercises.find((e) => e.id === 'builtin-exercise:one-arm-dumbbell-bent-over-scapula-row')!
assert.deepEqual(b5_scapulaRow.primaryMuscles, ['Lower Traps'])
assert.deepEqual(b5_scapulaRow.secondaryMuscles, ['Middle Traps', 'Upper Traps'])
assert.equal(b5_scapulaRow.trackingType, 'weight_reps')

const b5_lSit = builtInExercises.find((e) => e.id === 'builtin-exercise:l-sit')!
assert.equal(b5_lSit.trackingType, 'duration')

const b5_lyingSpinalTwist = builtInExercises.find((e) => e.id === 'builtin-exercise:lying-spinal-twist')!
assert.equal(b5_lyingSpinalTwist.trackingType, 'duration')

// Batch 6 Final Cleanup Checks
const b6_supination = builtInExercises.find((e) => e.id === 'builtin-exercise:one-arm-dumbbell-supination')!
assert.deepEqual(b6_supination.categories, ['Forearms', 'Biceps'])
assert.deepEqual(b6_supination.primaryMuscles, ['Biceps'])
assert.deepEqual(b6_supination.secondaryMuscles, ['Brachioradialis', 'Forearm Flexors'])
assert.equal(b6_supination.trackingType, 'weight_reps')

const b6_pigeonPose = builtInExercises.find((e) => e.id === 'builtin-exercise:pigeon-pose')!
assert.deepEqual(b6_pigeonPose.primaryMuscles, ['Gluteus Maximus', 'Gluteus Medius'])
assert.deepEqual(b6_pigeonPose.secondaryMuscles, ['Hip Flexors'])
assert.equal(b6_pigeonPose.trackingType, 'duration')

const b6_rockingHalfFrog = builtInExercises.find((e) => e.id === 'builtin-exercise:rocking-half-frog-stretch')!
assert.equal(b6_rockingHalfFrog.trackingType, 'reps_only')

const b6_prowlerSled = builtInExercises.find((e) => e.id === 'builtin-exercise:prowler-sled')!
assert.equal(b6_prowlerSled.trackingType, 'weight_distance')

// Audit 1-600 canonical tracking & retirement corrections
const chestDips = builtInExercises.find((e) => e.id === 'builtin-exercise:chest-dips')!
assert.ok(chestDips)
assert.deepEqual(chestDips.equipmentOptions, ['Dip Bar'])
assert.equal(chestDips.equipment, 'Dip Bar')
assert.equal(chestDips.trackingType, 'bodyweight_reps')
assert.deepEqual(chestDips.categories, ['Chest'])

const forwardBandMonsterWalk = builtInExercises.find((e) => e.id === 'builtin-exercise:forward-band-monster-walk')!
assert.ok(forwardBandMonsterWalk)
assert.deepEqual(forwardBandMonsterWalk.equipmentOptions, ['Resistance Band'])
assert.equal(forwardBandMonsterWalk.trackingType, 'reps_only')

const lateralMonsterWalk = builtInExercises.find((e) => e.id === 'builtin-exercise:lateral-monster-walk')!
assert.ok(lateralMonsterWalk)
assert.deepEqual(lateralMonsterWalk.equipmentOptions, ['Resistance Band'])
assert.equal(lateralMonsterWalk.trackingType, 'reps_only')

// Retired Hand Gripper assertions
assert.ok(!builtInExercises.some((e) => e.id === 'builtin-exercise:hand-gripper'))
assert.ok(RETIRED_FITDEX_EXERCISE_SLUGS.includes('hand-gripper'))

// Hand Gripper historical snapshot and preference preservation without replacement
const handGripperLegacyId = 'builtin-exercise:hand-gripper'
const handGripperWorkout: WorkoutExercise = { ...baseRecord, id: 'we:hg', workoutId: 'workout:hg', exerciseId: handGripperLegacyId, order: 0 }
const handGripperLegacyExercise = { ...legacyExercise, id: handGripperLegacyId, name: 'Hand Gripper', category: 'Forearms' } satisfies Exercise
const migratedHgWorkout = migrateWorkoutExerciseReferences([handGripperWorkout], new Map([[handGripperLegacyId, handGripperLegacyExercise]]), v4MigrationMap, timestamp)[0]
assert.equal(migratedHgWorkout.exerciseId, handGripperLegacyId)
assert.equal(migratedHgWorkout.exerciseNameSnapshot, 'Hand Gripper')
assert.equal(migratedHgWorkout.exerciseCategorySnapshot, 'Forearms')

const handGripperPref: ExercisePreference = { ...baseRecord, id: `exercise-preference:${handGripperLegacyId}`, exerciseId: handGripperLegacyId, favourite: true, personalNotes: 'Historic grip note.', customTagIds: ['tag:grip'] }
const migratedHgPref = migrateExercisePreferences([handGripperPref], v4MigrationMap, timestamp)[0]
assert.equal(migratedHgPref.id, `exercise-preference:${handGripperLegacyId}`)
assert.equal(migratedHgPref.exerciseId, handGripperLegacyId)
assert.equal(migratedHgPref.favourite, false)
assert.equal(migratedHgPref.personalNotes, 'Historic grip note.')
// Batch 7 Metadata & Tracking Assertions
const b7_seatedGoodMorning = builtInExercises.find((e) => e.id === 'builtin-exercise:seated-good-morning')!
assert.ok(b7_seatedGoodMorning)
assert.deepEqual(b7_seatedGoodMorning.categories, ['Back', 'Gluteal'])
assert.deepEqual(b7_seatedGoodMorning.primaryMuscles, ['Spinal Erectors', 'Gluteus Maximus'])
assert.deepEqual(b7_seatedGoodMorning.secondaryMuscles, ['Hamstrings'])
assert.deepEqual(b7_seatedGoodMorning.equipmentOptions, ['Barbell', 'Bench'])
assert.equal(b7_seatedGoodMorning.trackingType, 'weight_reps')

const b7_shoulderstandPose = builtInExercises.find((e) => e.id === 'builtin-exercise:shoulderstand-pose')!
assert.ok(b7_shoulderstandPose)
assert.deepEqual(b7_shoulderstandPose.categories, ['Shoulders', 'Back', 'Abs'])
assert.deepEqual(b7_shoulderstandPose.primaryMuscles, ['Front Delts', 'Lower Traps', 'Upper Abs'])
assert.deepEqual(b7_shoulderstandPose.secondaryMuscles, ['Triceps', 'Middle Traps', 'Lower Abs', 'Obliques'])
assert.deepEqual(b7_shoulderstandPose.equipmentOptions, ['Bodyweight'])
assert.equal(b7_shoulderstandPose.trackingType, 'duration')

const b7_skiErgometer = builtInExercises.find((e) => e.id === 'builtin-exercise:ski-ergometer')!
assert.ok(b7_skiErgometer)
assert.equal(b7_skiErgometer.trackingType, 'distance_duration')
assert.deepEqual(b7_skiErgometer.supportedCardioMetrics, ['duration', 'distance', 'pace', 'heartRate', 'calories'])

const b7_seatedChestClam = builtInExercises.find((e) => e.id === 'builtin-exercise:seated-chest-clam')!
assert.equal(b7_seatedChestClam.trackingType, 'reps_only')

const b7_seatedForwardFold = builtInExercises.find((e) => e.id === 'builtin-exercise:seated-forward-fold')!
assert.equal(b7_seatedForwardFold.trackingType, 'reps_only')

const b7_sidePlankClamshell = builtInExercises.find((e) => e.id === 'builtin-exercise:side-plank-clamshell')!
assert.equal(b7_sidePlankClamshell.trackingType, 'duration')

const b7_sidePlankHipAbduction = builtInExercises.find((e) => e.id === 'builtin-exercise:side-plank-hip-abduction')!
assert.equal(b7_sidePlankHipAbduction.trackingType, 'duration')
// Batch 8 Tracking Assertions
const b8_stationaryBike = builtInExercises.find((e) => e.id === 'builtin-exercise:stationary-bike')!
assert.ok(b8_stationaryBike)
assert.equal(b8_stationaryBike.trackingType, 'distance_duration')
assert.deepEqual(b8_stationaryBike.supportedCardioMetrics, ['duration', 'distance', 'pace', 'heartRate', 'calories'])

const b8_stairClimber = builtInExercises.find((e) => e.id === 'builtin-exercise:stair-climber')!
assert.ok(b8_stairClimber)
assert.equal(b8_stairClimber.trackingType, 'distance_duration')

const b8_standingChestOpener = builtInExercises.find((e) => e.id === 'builtin-exercise:standing-chest-opener')!
assert.ok(b8_standingChestOpener)
assert.equal(b8_standingChestOpener.trackingType, 'duration')

const b8_standingForwardBend = builtInExercises.find((e) => e.id === 'builtin-exercise:standing-forward-bend')!
assert.ok(b8_standingForwardBend)
assert.equal(b8_standingForwardBend.trackingType, 'duration')

const b8_treadmillClimbing = builtInExercises.find((e) => e.id === 'builtin-exercise:treadmill-climbing')!
assert.ok(b8_treadmillClimbing)
assert.equal(b8_treadmillClimbing.trackingType, 'distance_duration')

const b8_wallAngel = builtInExercises.find((e) => e.id === 'builtin-exercise:wall-angel')!
assert.ok(b8_wallAngel)
assert.equal(b8_wallAngel.trackingType, 'reps_only')

const b8_worldsGreatestStretch = builtInExercises.find((e) => e.id === 'builtin-exercise:worlds-greatest-stretch')!
assert.ok(b8_worldsGreatestStretch)
assert.equal(b8_worldsGreatestStretch.trackingType, 'reps_only')

const b8_unilateralFarmerWalk = builtInExercises.find((e) => e.id === 'builtin-exercise:unilateral-farmer-walk')!
assert.ok(b8_unilateralFarmerWalk)
assert.equal(b8_unilateralFarmerWalk.trackingType, 'weight_distance')

const b8_staticFrontHold = builtInExercises.find((e) => e.id === 'builtin-exercise:static-front-hold')!
assert.ok(b8_staticFrontHold)
assert.equal(b8_staticFrontHold.trackingType, 'weight_duration')

const b8_weightedHollowBodyHold = builtInExercises.find((e) => e.id === 'builtin-exercise:weighted-hollow-body-hold')!
assert.ok(b8_weightedHollowBodyHold)
assert.equal(b8_weightedHollowBodyHold.trackingType, 'weight_duration')

const b8_weightedPlank = builtInExercises.find((e) => e.id === 'builtin-exercise:weighted-plank')!
assert.ok(b8_weightedPlank)
assert.equal(b8_weightedPlank.trackingType, 'weight_duration')

console.log('Exercise migration tests passed: fresh v4, v3 retirement, history snapshots, active-reference cleanup, custom preservation, v2 targets, canonical typo migrations, Audit B Part 1 & Part 2, Type A Part 1 & Part 2 & Part 3, Batch 1–Batch 8 Final Cleanup, and canonical #174/#314/#423/#336 audit resolutions')
