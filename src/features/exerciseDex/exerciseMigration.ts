import type { Exercise, ExercisePreference, WorkoutExercise } from '../../data/models'

function mergeNotes(left?: string, right?: string) {
  if (!left) return right
  if (!right || left === right) return left
  return `${left}\n\n${right}`
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
