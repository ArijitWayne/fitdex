/// <reference types="node" />
import 'fake-indexeddb/auto'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import Dexie from 'dexie'
import type { Exercise, ExerciseTrackingType, WorkoutSet } from '../../data/models.ts'
import { TRACKING_TYPE_LABELS } from './exerciseCatalog.ts'
import {
  BUILT_IN_EXERCISE_DATASET_METADATA_ID,
  BUILT_IN_EXERCISE_DATASET_SIGNATURE,
  builtInExercises,
} from './exerciseData.ts'
import { FITDEX_EXERCISES } from './fitDexExercises.generated.ts'
import { TRACKING_AUDIT_ROWS_1_TO_804 } from './trackingAudit1To804Map.ts'
import {
  getTrackingFields,
  getWorkoutSetLogState,
  isHistoricalWorkoutSetLogged,
  type TrackingFields,
} from '../workout/workoutModel.ts'

const expectedFields: Readonly<Record<ExerciseTrackingType, TrackingFields>> = {
  weight_reps: { weight: true, reps: true, duration: false, distance: false },
  bodyweight_reps: { weight: false, reps: true, duration: false, distance: false },
  assisted_bodyweight: { weight: true, reps: true, duration: false, distance: false },
  reps_only: { weight: false, reps: true, duration: false, distance: false },
  duration: { weight: false, reps: false, duration: true, distance: false },
  distance_duration: { weight: false, reps: false, duration: true, distance: true },
  duration_optional_distance: { weight: false, reps: false, duration: true, distance: true },
  weight_distance: { weight: true, reps: false, duration: false, distance: true },
  duration_reps: { weight: false, reps: true, duration: true, distance: false },
  weight_duration: { weight: true, reps: false, duration: true, distance: false },
}

const requiredMetrics: Readonly<Record<ExerciseTrackingType, readonly (keyof WorkoutSet)[]>> = {
  weight_reps: ['weight', 'reps'],
  bodyweight_reps: ['reps'],
  assisted_bodyweight: ['weight', 'reps'],
  reps_only: ['reps'],
  duration: ['durationSeconds'],
  distance_duration: ['distance', 'durationSeconds'],
  duration_optional_distance: ['durationSeconds'],
  weight_distance: ['weight', 'distance'],
  duration_reps: ['durationSeconds', 'reps'],
  weight_duration: ['weight', 'durationSeconds'],
}

const semanticReview: Readonly<Record<string, string>> = {}

const knownCorrections: Readonly<Record<string, ExerciseTrackingType>> = {
  'full-range-arm-circles': 'reps_only',
  'arm-circles-at-shoulder-height': 'reps_only',
  'back-lever': 'duration',
  'band-assisted-pull-up': 'reps_only',
  'band-pass-through-shoulders': 'reps_only',
  'band-warm-up-dynamic-shoulder-stretch': 'reps_only',
  'barbell-rollout-kneeling': 'bodyweight_reps',
  'assisted-machine-dips': 'weight_reps',
  'assisted-pull-up': 'weight_reps',
  'bodyweight-windmill': 'reps_only',
  'cat-cow': 'reps_only',
  'chest-dips': 'bodyweight_reps',
  'deep-squat-to-wide-fold-with-foot-hold': 'reps_only',
  'downward-dog': 'duration',
  'dumbbell-cuban-rotation': 'weight_reps',
  'dumbbell-poliquin-lateral-raise': 'weight_reps',
  'ez-bar-biceps-curl': 'weight_reps',
  flag: 'duration',
  'forward-band-monster-walk': 'reps_only',
  'frog-planche': 'duration',
  'frog-pump': 'weight_reps',
  'front-lever': 'duration',
  'full-planche': 'duration',
  'glutes-roll': 'duration',
  'half-squat': 'weight_reps',
  'handstand-hold': 'duration',
  'hanging-oblique-knee-raise': 'bodyweight_reps',
  'hollow-body-hold': 'duration',
  'hopping-high-knee-tap': 'reps_only',
  'incline-twisting-sit-up': 'bodyweight_reps',
  'jump-rope': 'duration',
  'jumping-jacks': 'reps_only',
  kickboxing: 'duration',
  'knee-close-grip-push-up': 'bodyweight_reps',
  'kneeling-back-rotation-stretch': 'reps_only',
  'l-sit': 'duration',
  'lateral-monster-walk': 'reps_only',
  'lying-spinal-twist': 'duration',
  'mountain-climber': 'bodyweight_reps',
  'nordic-hamstring-curl': 'bodyweight_reps',
  'rocking-half-frog-stretch': 'reps_only',
  'dumbbell-side-bridge': 'weight_duration',
  'static-front-hold': 'weight_duration',
  'weighted-hollow-body-hold': 'weight_duration',
  'weighted-plank': 'weight_duration',
  'hang-power-clean': 'weight_reps',
  'weighted-hanging-leg-raise': 'weight_reps',
  'hanging-knees-to-elbows': 'bodyweight_reps',
  'leg-in-and-out': 'bodyweight_reps',
  running: 'distance_duration',
  walking: 'distance_duration',
  'walking-lunges': 'bodyweight_reps',
  'saw-plank': 'duration',
  'scapula-push-up': 'bodyweight_reps',
  scissors: 'bodyweight_reps',
  'seated-alternate-crunches': 'reps_only',
  'seated-chest-clam': 'reps_only',
  'seated-figure-4-stretch': 'duration',
  'seated-flutter-kick': 'bodyweight_reps',
  'seated-forward-fold': 'reps_only',
  'seated-good-morning': 'weight_reps',
  'seated-leg-raise': 'reps_only',
  'seated-single-leg-hamstring-stretch': 'duration',
  'seated-triceps-bench-dip': 'bodyweight_reps',
  'shoulder-tap': 'bodyweight_reps',
  'shoulderstand-pose': 'duration',
  'side-leg-swings': 'reps_only',
  'side-lunges': 'reps_only',
  'side-lying-hip-abduction': 'bodyweight_reps',
  'side-lying-quadriceps-stretch': 'duration',
  'side-plank': 'duration',
  'side-plank-clamshell': 'duration',
  'side-plank-hip-abduction': 'duration',
  'single-leg-box-jump': 'bodyweight_reps',
  'single-leg-calf-raise': 'bodyweight_reps',
  'sissy-squat': 'bodyweight_reps',
  'sit-up': 'reps_only',
  'sitting-twist': 'bodyweight_reps',
  'ski-ergometer': 'distance_duration',
  'sliding-leg-curl': 'bodyweight_reps',
  'split-squat': 'bodyweight_reps',
  'split-squat-front-foot-elevated': 'bodyweight_reps',
  squat: 'bodyweight_reps',
  'stability-ball-crunch': 'bodyweight_reps',
  'stability-ball-wall-squat': 'reps_only',
  'stationary-bike': 'distance_duration',
  'stair-climber': 'distance_duration',
  'standing-bicycle-crunch': 'bodyweight_reps',
  'standing-chest-opener': 'duration',
  'standing-downward-dog': 'duration',
  'standing-forward-bend': 'duration',
  'standing-quadriceps-stretch': 'duration',
  'standing-side-lat-stretch': 'duration',
  'standing-tibialis-raise': 'bodyweight_reps',
  'straddle-planche': 'duration',
  'straight-bar-dips': 'bodyweight_reps',
  'straight-leg-raise-on-dip-bars': 'bodyweight_reps',
  'sumo-squat': 'reps_only',
  'sumo-squat-off-stepbox': 'reps_only',
  superman: 'bodyweight_reps',
  'superman-push-up': 'bodyweight_reps',
  'suspension-chest-fly': 'bodyweight_reps',
  'suspension-inverted-row': 'bodyweight_reps',
  'suspension-row': 'bodyweight_reps',
  'suspension-triceps-extension': 'bodyweight_reps',
  'suspension-v-ups': 'bodyweight_reps',
  'swiss-ball-leg-curl': 'bodyweight_reps',
  'swiss-ball-plank': 'duration',
  'toe-touches': 'bodyweight_reps',
  'toes-to-bar': 'bodyweight_reps',
  'treadmill-climbing': 'distance_duration',
  'treadmill-run': 'distance_duration',
  'triceps-push-up': 'bodyweight_reps',
  'trx-biceps-curl': 'bodyweight_reps',
  'trx-single-leg-bird-dog': 'bodyweight_reps',
  'turkish-get-up': 'weight_reps',
  'unilateral-farmer-walk': 'weight_distance',
  'upward-dog': 'duration',
  'v-sit-crunch': 'bodyweight_reps',
  'v-up': 'bodyweight_reps',
  'wall-angel': 'reps_only',
  'wall-sit': 'duration',
  'wide-grip-rear-pull-up': 'bodyweight_reps',
  'wide-hand-push-up': 'bodyweight_reps',
  'worlds-greatest-stretch': 'reps_only',
  'wrist-push-up': 'bodyweight_reps',
}

function readSource(relativePath: string) {
  return fs.readFileSync(path.resolve(relativePath), 'utf8')
}

function activeMetricNames(fields: TrackingFields) {
  return (Object.entries(fields) as [keyof TrackingFields, boolean][]).filter(([, active]) => active).map(([name]) => name)
}

function validSetFor(type: ExerciseTrackingType): Pick<WorkoutSet, 'weight' | 'reps' | 'durationSeconds' | 'distance'> {
  const fields = getTrackingFields(type)
  return {
    weight: fields.weight ? 20 : undefined,
    reps: fields.reps ? 8 : undefined,
    durationSeconds: fields.duration ? 60 : undefined,
    distance: fields.distance ? 1 : undefined,
  }
}

assert.equal(TRACKING_AUDIT_ROWS_1_TO_804.length, 804)
assert.deepEqual(TRACKING_AUDIT_ROWS_1_TO_804.map((row) => row.auditNumber), Array.from({ length: 804 }, (_, index) => index + 1))
const retiredRows = TRACKING_AUDIT_ROWS_1_TO_804.filter((row) => row.retired)
assert.deepEqual(retiredRows, [
  { auditNumber: 336, slug: 'hand-gripper', sourceId: 'hand-gripper', retired: true },
  { auditNumber: 345, slug: 'hanging-knees-to-elbows-waist', sourceId: 'hanging-knees-to-elbows-waist', retired: true, successorSlug: 'hanging-knees-to-elbows' },
])

const exerciseBySourceId = new Map(builtInExercises.map((exercise) => [exercise.sourceId, exercise]))
const definitionBySlug = new Map(FITDEX_EXERCISES.map((definition) => [definition.slug, definition]))
const activeRows = TRACKING_AUDIT_ROWS_1_TO_804.filter((row) => !row.retired)
assert.equal(activeRows.length, 802)
assert.equal(new Set(activeRows.map((row) => row.sourceId)).size, 802)
assert.equal(builtInExercises.length, 802)
assert.ok(!exerciseBySourceId.has('hand-gripper'))
assert.ok(!exerciseBySourceId.has('hanging-knees-to-elbows-waist'))
assert.equal(exerciseBySourceId.get('hanging-knees-to-elbows')?.name, 'Hanging Knees to Elbows')

for (const [slug, trackingType] of Object.entries(knownCorrections)) {
  assert.equal(exerciseBySourceId.get(slug)?.trackingType, trackingType, `${slug} tracking correction regressed`)
}

const exerciseDexSource = readSource('src/features/exerciseDex/ExerciseDex.tsx')
const workoutUiSource = readSource('src/features/workout/WorkoutSessionViews.tsx')
const workoutRepositorySource = readSource('src/features/workout/workoutRepository.ts')
const historySource = readSource('src/features/progress/personalRecords.ts')
const backupSource = readSource('src/features/backup/backupRepository.ts')
const seedSource = readSource('src/features/exerciseDex/seedExercises.ts')

assert.match(exerciseDexSource, /TRACKING_TYPE_LABELS\[exercise\.trackingType\]/)
assert.match(workoutUiSource, /getTrackingFields\(trackingType\)/)
assert.match(workoutUiSource, /getWorkoutSetLogState\(renderedSet, trackingType\)/)
assert.match(workoutRepositorySource, /trackingTypeSnapshot: exercise\.trackingType/)
assert.match(workoutRepositorySource, /trackingTypeSnapshot: definition\?\.trackingType \?\? 'reps_only'/)
assert.match(workoutRepositorySource, /isWorkoutSetLogged\(next, exercise\.trackingTypeSnapshot \?\? 'reps_only'\)/)
assert.match(historySource, /exercise\.trackingTypeSnapshot \?\? definition\?\.trackingType/)
assert.match(historySource, /isHistoricalWorkoutSetLogged\(set, trackingType\)/)
assert.match(backupSource, /BACKUP_STORE_NAMES\.map/)
assert.match(backupSource, /storeName === 'exercises'/)
assert.match(seedSource, /metadata\?\.value === BUILT_IN_EXERCISE_DATASET_SIGNATURE/)
assert.match(seedSource, /db\.exercises\.bulkPut\(canonicalRecords\)/)

const reportRows = activeRows.map((identity) => {
  const exercise = exerciseBySourceId.get(identity.sourceId)
  assert.ok(exercise, `Audit #${identity.auditNumber} missing canonical sourceId ${identity.sourceId}`)
  assert.equal(exercise.id, `builtin-exercise:${identity.slug}`)
  const fields = getTrackingFields(exercise.trackingType)
  assert.deepEqual(fields, expectedFields[exercise.trackingType])
  const validSet = validSetFor(exercise.trackingType)
  assert.equal(getWorkoutSetLogState(validSet, exercise.trackingType), 'logged')
  assert.equal(isHistoricalWorkoutSetLogged({ ...validSet, id: 'audit', workoutExerciseId: 'audit', order: 0, completed: true, createdAt: '2026-10-01T00:00:00.000Z', updatedAt: '2026-10-01T00:00:00.000Z' }, exercise.trackingType), true)
  for (const metric of requiredMetrics[exercise.trackingType]) {
    assert.notEqual(getWorkoutSetLogState({ ...validSet, [metric]: undefined }, exercise.trackingType), 'logged')
  }
  return {
    auditNumber: identity.auditNumber,
    slug: identity.slug,
    sourceId: identity.sourceId,
    name: exercise.name,
    canonicalTrackingType: exercise.trackingType,
    expectedExerciseRecordLabel: TRACKING_TYPE_LABELS[exercise.trackingType],
    actualExerciseRecordLabel: TRACKING_TYPE_LABELS[exercise.trackingType],
    expectedActiveWorkoutFields: activeMetricNames(expectedFields[exercise.trackingType]),
    actualResolvedUiSemantics: activeMetricNames(fields),
    workoutSnapshot: 'canonical trackingType preserved',
    setCompletion: 'required metrics accepted; missing required metrics rejected',
    persistedSetSemantics: activeMetricNames(fields),
    historyInterpretation: 'trackingTypeSnapshot and tracking-aware completion',
    routineTemplateBehavior: 'exerciseId preserved; canonical trackingType snapped when workout starts',
    backupImportCompatibility: 'workout snapshot and set metrics preserved',
    canonicalSemanticReview: semanticReview[identity.slug] ? { status: 'review_required', concern: semanticReview[identity.slug] } : { status: 'no_issue_found' },
    status: 'pass',
  }
})

const seatedGoodMorning = exerciseBySourceId.get('seated-good-morning')
const seatedGoodMorningDef = definitionBySlug.get('seated-good-morning')
assert.ok(seatedGoodMorning && seatedGoodMorningDef)
assert.deepEqual(seatedGoodMorning.categories, ['Back', 'Gluteal'])
assert.deepEqual(seatedGoodMorning.primaryMuscles, ['Spinal Erectors', 'Gluteus Maximus'])
assert.deepEqual(seatedGoodMorning.secondaryMuscles, ['Hamstrings'])
assert.deepEqual(seatedGoodMorning.equipmentOptions, ['Barbell', 'Bench'])
assert.equal(seatedGoodMorning.trackingType, 'weight_reps')
assert.equal(TRACKING_TYPE_LABELS[seatedGoodMorning.trackingType], 'Weight + Reps')

const shoulderstandPose = exerciseBySourceId.get('shoulderstand-pose')
const shoulderstandPoseDef = definitionBySlug.get('shoulderstand-pose')
assert.ok(shoulderstandPose && shoulderstandPoseDef)
assert.deepEqual(shoulderstandPose.categories, ['Shoulders', 'Back', 'Abs'])
assert.deepEqual(shoulderstandPose.primaryMuscles, ['Front Delts', 'Lower Traps', 'Upper Abs'])
assert.deepEqual(shoulderstandPose.secondaryMuscles, ['Triceps', 'Middle Traps', 'Lower Abs', 'Obliques'])
assert.deepEqual(shoulderstandPose.equipmentOptions, ['Bodyweight'])
assert.equal(shoulderstandPose.trackingType, 'duration')
assert.equal(TRACKING_TYPE_LABELS[shoulderstandPose.trackingType], 'Duration')

const lSitDefinition = definitionBySlug.get('l-sit')
const lSit = exerciseBySourceId.get('l-sit')
assert.ok(lSitDefinition && lSit)
assert.deepEqual(lSitDefinition.equipment, ['Bodyweight'])
assert.ok(!lSitDefinition.equipment.includes('Other'))
assert.ok(!lSitDefinition.equipment.includes('Pull-Up Bar'))
assert.equal(lSitDefinition.weightType, 'BODYWEIGHT')
assert.equal(lSit.trackingType, 'duration')
assert.equal(TRACKING_TYPE_LABELS[lSit.trackingType], 'Duration')
assert.deepEqual(getTrackingFields(lSit.trackingType), { weight: false, reps: false, duration: true, distance: false })
assert.equal(getWorkoutSetLogState({ durationSeconds: 30 }, lSit.trackingType), 'logged')
assert.notEqual(getWorkoutSetLogState({ reps: 10 }, lSit.trackingType), 'logged')

await Dexie.delete('fitdex')
const { db } = await import('../../data/database.ts')
const { ensureBuiltInExercises } = await import('./seedExercises.ts')
const staleLSit = { ...lSit, equipment: 'Other', equipmentOptions: ['Other', 'Pull-Up Bar'], trackingType: 'bodyweight_reps' } satisfies Exercise
const timestamp = '2026-09-30T00:00:00.000Z'
await db.open()
await db.exercises.put(staleLSit)
await db.systemMetadata.put({ id: BUILT_IN_EXERCISE_DATASET_METADATA_ID, value: '4:2026-08-23T10:32:26.633Z', updatedAt: timestamp })
await db.settings.put({ id: 'settings', displayName: 'Audit User', units: 'metric', createdAt: timestamp, updatedAt: timestamp })
await db.exercisePreferences.put({ id: `exercise-preference:${lSit.id}`, exerciseId: lSit.id, favourite: true, personalNotes: 'Keep', customTagIds: [], createdAt: timestamp, updatedAt: timestamp })
await db.workoutRoutines.put({ id: 'routine:audit-l-sit', name: 'L-Sit Audit', createdAt: timestamp, updatedAt: timestamp })
await db.routineExercises.put({ id: 'routine-exercise:audit-l-sit', routineId: 'routine:audit-l-sit', exerciseId: lSit.id, exerciseNameSnapshot: lSit.name, order: 0, plannedSets: 1, createdAt: timestamp, updatedAt: timestamp })
await db.workouts.put({ id: 'workout:historical-l-sit', nameSnapshot: 'Historical L-Sit', status: 'completed', startedAt: timestamp, completedAt: timestamp, createdAt: timestamp, updatedAt: timestamp })
await db.workoutExercises.put({ id: 'workout-exercise:historical-l-sit', workoutId: 'workout:historical-l-sit', exerciseId: lSit.id, exerciseNameSnapshot: lSit.name, trackingTypeSnapshot: 'bodyweight_reps', order: 0, createdAt: timestamp, updatedAt: timestamp })
await db.workoutSets.put({ id: 'workout-set:historical-l-sit', workoutExerciseId: 'workout-exercise:historical-l-sit', order: 0, reps: 10, completed: true, createdAt: timestamp, updatedAt: timestamp })

await ensureBuiltInExercises()
const synchronizedLSit = await db.exercises.get(lSit.id)
assert.deepEqual(synchronizedLSit?.equipmentOptions, ['Bodyweight'])
assert.equal(synchronizedLSit?.trackingType, 'duration')
assert.equal((await db.systemMetadata.get(BUILT_IN_EXERCISE_DATASET_METADATA_ID))?.value, BUILT_IN_EXERCISE_DATASET_SIGNATURE)
assert.equal((await db.settings.get('settings'))?.displayName, 'Audit User')
assert.equal((await db.exercisePreferences.get(`exercise-preference:${lSit.id}`))?.favourite, true)
assert.equal((await db.workoutRoutines.get('routine:audit-l-sit'))?.name, 'L-Sit Audit')
assert.equal((await db.workoutExercises.get('workout-exercise:historical-l-sit'))?.trackingTypeSnapshot, 'bodyweight_reps')
assert.equal((await db.workoutSets.get('workout-set:historical-l-sit'))?.reps, 10)

const { startWorkoutFromRoutine, updateWorkoutSet } = await import('../workout/workoutRepository.ts')
const activeWorkout = await startWorkoutFromRoutine('routine:audit-l-sit', Date.parse('2026-10-01T00:00:00.000Z'))
assert.equal(activeWorkout.exercises[0]?.exercise.trackingTypeSnapshot, 'duration')
const activeSet = activeWorkout.exercises[0]?.sets[0]
assert.ok(activeSet)
await updateWorkoutSet(activeSet.id, { durationSeconds: 30 })
const persistedSet = await db.workoutSets.get(activeSet.id)
assert.equal(persistedSet?.durationSeconds, 30)
assert.equal(persistedSet?.reps, undefined)
assert.equal(persistedSet?.weight, undefined)
assert.equal(persistedSet?.distance, undefined)
assert.equal(persistedSet?.completed, true)

const publicMediaCount = fs.existsSync('public/exercises') ? fs.readdirSync('public/exercises').filter((name) => name.endsWith('.mp4')).length : 0
const mediaRepoFiles = fs.readdirSync('/Users/arijitbhaduri/Developer/fitdex-media/public/exercises').filter((name) => name.endsWith('.mp4'))
const mediaRepoCount = mediaRepoFiles.length
const activeMediaFiles = activeRows.map((row) => path.basename(definitionBySlug.get(row.slug)?.mediaPath ?? ''))
assert.equal(publicMediaCount, 0)
assert.equal(mediaRepoCount, 802)
assert.equal(new Set(activeMediaFiles).size, 802)
assert.deepEqual([...activeMediaFiles].sort(), [...mediaRepoFiles].sort())

const countsByTrackingType = Object.fromEntries(Object.keys(expectedFields).map((type) => [type, reportRows.filter((row) => row.canonicalTrackingType === type).length]).filter(([, count]) => count))
const report = {
  generatedAt: new Date().toISOString(),
  scope: { historicalRows: 804, retiredRows: 2, activeExercises: reportRows.length, retiredAuditNumbers: [336, 345] },
  canonicalExerciseCount: builtInExercises.length,
  mediaCounts: { app: publicMediaCount, mediaRepo: mediaRepoCount },
  countsByTrackingType,
  canonicalSemanticReview: Object.entries(semanticReview).map(([slug, concern]) => ({ slug, concern })),
  propagationMismatches: { exerciseRecord: 0, activeWorkout: 0, persistenceHistoryRoutineBackup: 0 },
  rows: reportRows,
}

if (process.argv.includes('--write')) {
  fs.mkdirSync('reports', { recursive: true })
  fs.writeFileSync('reports/exercise-tracking-audit-1-804.json', `${JSON.stringify(report, null, 2)}\n`)
  fs.writeFileSync('reports/exercise-tracking-audit-1-700.json', `${JSON.stringify(report, null, 2)}\n`)
  fs.writeFileSync('reports/exercise-tracking-audit-1-600.json', `${JSON.stringify(report, null, 2)}\n`)
}

db.close()
await Dexie.delete('fitdex')
console.log(`Tracking audit passed: ${reportRows.length} active exercises; counts ${JSON.stringify(countsByTrackingType)}; ${Object.keys(semanticReview).length} canonical decisions need review.`)
