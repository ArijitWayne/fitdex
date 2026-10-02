import type { Exercise, ExercisePreference, WorkoutExercise } from '../../data/models'

function mergeNotes(left?: string, right?: string) {
  if (!left) return right
  if (!right || left === right) return left
  return `${left}\n\n${right}`
}

/**
 * Canonical exercise slug and ID migrations to handle corrected typos while preserving
 * compatibility with persisted user data, routines, and historical references.
 */
export const CANONICAL_SLUG_MIGRATIONS: Readonly<Record<string, string>> = {
  'abdominal-vaccum': 'abdominal-vacuum',
  'air-bike': 'air-bicycle-crunch',
  'arm-circle': 'full-range-arm-circles',
  'arm-circles': 'arm-circles-at-shoulder-height',
  'cable-hip-abducction': 'cable-hip-abduction',
  'cable-seated-supine-grip-row': 'cable-seated-supinated-grip-row',
  'capitans-chair-straight-leg-raises': 'captains-chair-straight-leg-raises',
  'crossack-squat': 'cossack-squat',
  'dumbbell-deadlift-straight-legs': 'two-dumbbell-straight-leg-deadlift',
  'dumbbell-straight-leg-deadlift': 'single-dumbbell-straight-leg-deadlift',
  'hanging-knees-to-elbows-waist': 'hanging-knees-to-elbows',
  'kettelbell-clean': 'kettlebell-clean',
  'kettlebel-renegade-row': 'kettlebell-renegade-row',
  'lying-stright-leg-raise': 'lying-straight-leg-raise',
  'overhead-cable-triceps-exstension-bar': 'overhead-cable-triceps-extension-bar',
  'smith-machibe-glute-kickback': 'smith-machine-glute-kickback',
  'stabillity-ball-wall-squat': 'stability-ball-wall-squat',
  'stacionary-bike': 'stationary-bike',
  't-bar-chest-suported-row': 't-bar-chest-supported-row',
  'lying-cross-lateral-cable-fly': 'cable-lying-cross-lateral-raise',
  'standing-air-bike': 'standing-bicycle-crunch',
  'walking-cardio': 'walking',
  'bar-cable-biceps-curl': 'cable-biceps-curl',
}

export const CANONICAL_EXERCISE_ID_MIGRATIONS: Readonly<Record<string, string>> = {
  'builtin-exercise:abdominal-vaccum': 'builtin-exercise:abdominal-vacuum',
  'builtin-exercise:air-bike': 'builtin-exercise:air-bicycle-crunch',
  'builtin-exercise:arm-circle': 'builtin-exercise:full-range-arm-circles',
  'builtin-exercise:arm-circles': 'builtin-exercise:arm-circles-at-shoulder-height',
  'builtin-exercise:cable-hip-abducction': 'builtin-exercise:cable-hip-abduction',
  'builtin-exercise:cable-seated-supine-grip-row': 'builtin-exercise:cable-seated-supinated-grip-row',
  'builtin-exercise:capitans-chair-straight-leg-raises': 'builtin-exercise:captains-chair-straight-leg-raises',
  'builtin-exercise:crossack-squat': 'builtin-exercise:cossack-squat',
  'builtin-exercise:dumbbell-deadlift-straight-legs': 'builtin-exercise:two-dumbbell-straight-leg-deadlift',
  'builtin-exercise:dumbbell-straight-leg-deadlift': 'builtin-exercise:single-dumbbell-straight-leg-deadlift',
  'builtin-exercise:hanging-knees-to-elbows-waist': 'builtin-exercise:hanging-knees-to-elbows',
  'builtin-exercise:kettelbell-clean': 'builtin-exercise:kettlebell-clean',
  'builtin-exercise:kettlebel-renegade-row': 'builtin-exercise:kettlebell-renegade-row',
  'builtin-exercise:lying-stright-leg-raise': 'builtin-exercise:lying-straight-leg-raise',
  'builtin-exercise:overhead-cable-triceps-exstension-bar': 'builtin-exercise:overhead-cable-triceps-extension-bar',
  'builtin-exercise:smith-machibe-glute-kickback': 'builtin-exercise:smith-machine-glute-kickback',
  'builtin-exercise:stabillity-ball-wall-squat': 'builtin-exercise:stability-ball-wall-squat',
  'builtin-exercise:stacionary-bike': 'builtin-exercise:stationary-bike',
  'builtin-exercise:t-bar-chest-suported-row': 'builtin-exercise:t-bar-chest-supported-row',
  'builtin-exercise:lying-cross-lateral-cable-fly': 'builtin-exercise:cable-lying-cross-lateral-raise',
  'builtin-exercise:standing-air-bike': 'builtin-exercise:standing-bicycle-crunch',
  'builtin-exercise:walking-cardio': 'builtin-exercise:walking',
  'builtin-exercise:bar-cable-biceps-curl': 'builtin-exercise:cable-biceps-curl',
  'abdominal-vaccum': 'builtin-exercise:abdominal-vacuum',
  'air-bike': 'builtin-exercise:air-bicycle-crunch',
  'arm-circle': 'builtin-exercise:full-range-arm-circles',
  'arm-circles': 'builtin-exercise:arm-circles-at-shoulder-height',
  'cable-hip-abducction': 'builtin-exercise:cable-hip-abduction',
  'cable-seated-supine-grip-row': 'builtin-exercise:cable-seated-supinated-grip-row',
  'capitans-chair-straight-leg-raises': 'builtin-exercise:captains-chair-straight-leg-raises',
  'crossack-squat': 'builtin-exercise:cossack-squat',
  'dumbbell-deadlift-straight-legs': 'builtin-exercise:two-dumbbell-straight-leg-deadlift',
  'dumbbell-straight-leg-deadlift': 'builtin-exercise:single-dumbbell-straight-leg-deadlift',
  'hanging-knees-to-elbows-waist': 'builtin-exercise:hanging-knees-to-elbows',
  'kettelbell-clean': 'builtin-exercise:kettlebell-clean',
  'kettlebel-renegade-row': 'builtin-exercise:kettlebell-renegade-row',
  'lying-stright-leg-raise': 'builtin-exercise:lying-straight-leg-raise',
  'overhead-cable-triceps-exstension-bar': 'builtin-exercise:overhead-cable-triceps-extension-bar',
  'smith-machibe-glute-kickback': 'builtin-exercise:smith-machine-glute-kickback',
  'stabillity-ball-wall-squat': 'builtin-exercise:stability-ball-wall-squat',
  'stacionary-bike': 'builtin-exercise:stationary-bike',
  't-bar-chest-suported-row': 'builtin-exercise:t-bar-chest-supported-row',
  'lying-cross-lateral-cable-fly': 'builtin-exercise:cable-lying-cross-lateral-raise',
  'standing-air-bike': 'builtin-exercise:standing-bicycle-crunch',
  'walking-cardio': 'builtin-exercise:walking',
  'bar-cable-biceps-curl': 'builtin-exercise:cable-biceps-curl',
}

export function migrateWorkoutExerciseReferences(
  records: readonly WorkoutExercise[],
  legacyExerciseById: ReadonlyMap<string, Exercise>,
  legacyIdMap: Readonly<Record<string, string | null>>,
  updatedAt: string,
) {
  return records.map((record) => {
    if (!Object.hasOwn(legacyIdMap, record.exerciseId)) return record
    const legacyExercise = legacyExerciseById.get(record.exerciseId)
    return {
      ...record,
      exerciseId: legacyIdMap[record.exerciseId] ?? record.exerciseId,
      exerciseNameSnapshot: record.exerciseNameSnapshot ?? legacyExercise?.name,
      exerciseCategorySnapshot: record.exerciseCategorySnapshot ?? legacyExercise?.category,
      updatedAt,
    }
  })
}

export function migrateExercisePreferences(
  records: readonly ExercisePreference[],
  legacyIdMap: Readonly<Record<string, string | null>>,
  updatedAt: string,
) {
  const migrated = new Map<string, ExercisePreference>()
  for (const record of records) {
    if (!Object.hasOwn(legacyIdMap, record.exerciseId)) {
      migrated.set(record.id, record)
      continue
    }

    const successorId = legacyIdMap[record.exerciseId]
    if (!successorId) {
      migrated.set(record.id, { ...record, favourite: false, updatedAt })
      continue
    }

    const id = `exercise-preference:${successorId}`
    const existing = migrated.get(id)
    migrated.set(id, {
      ...record,
      id,
      exerciseId: successorId,
      favourite: record.favourite || Boolean(existing?.favourite),
      personalNotes: mergeNotes(existing?.personalNotes, record.personalNotes),
      customTagIds: [...new Set([...(existing?.customTagIds ?? []), ...record.customTagIds])],
      createdAt: existing && existing.createdAt < record.createdAt ? existing.createdAt : record.createdAt,
      updatedAt,
    })
  }
  return [...migrated.values()]
}
