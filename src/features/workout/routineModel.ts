import type { Exercise, RoutineExercise, WorkoutRoutine } from '../../data/models'

export const DEFAULT_PLANNED_SETS = 3
export const MIN_PLANNED_SETS = 1
export const MAX_PLANNED_SETS = 20
export const MAX_ROUTINE_NAME_LENGTH = 80

export function normalizeRoutineName(name: string) {
  const normalized = name.trim().replace(/\s+/g, ' ')
  if (!normalized) throw new Error('Routine name is required.')
  if (normalized.length > MAX_ROUTINE_NAME_LENGTH) throw new Error(`Routine name must be ${MAX_ROUTINE_NAME_LENGTH} characters or fewer.`)
  return normalized
}

export function createRoutineRecord(name: string, timestamp: string, id: string): WorkoutRoutine {
  return {
    id,
    name: normalizeRoutineName(name),
    createdAt: timestamp,
    updatedAt: timestamp,
  }
}

export function renameRoutineRecord(routine: WorkoutRoutine, name: string, timestamp: string): WorkoutRoutine {
  return { ...routine, name: normalizeRoutineName(name), updatedAt: timestamp }
}

function withDeterministicOrder(items: readonly RoutineExercise[], timestamp: string) {
  return items.map((item, order) => item.order === order ? item : { ...item, order, updatedAt: timestamp })
}

export function addExerciseToRoutineItems(
  items: readonly RoutineExercise[],
  routineId: string,
  exercise: Exercise,
  timestamp: string,
  id: string,
) {
  if (items.some((item) => item.exerciseId === exercise.id)) throw new Error(`${exercise.name} is already in this routine.`)
  return [...items, {
    id,
    routineId,
    exerciseId: exercise.id,
    exerciseNameSnapshot: exercise.name,
    order: items.length,
    plannedSets: DEFAULT_PLANNED_SETS,
    createdAt: timestamp,
    updatedAt: timestamp,
  } satisfies RoutineExercise]
}

export function changeRoutineItemSets(items: readonly RoutineExercise[], itemId: string, plannedSets: number, timestamp: string) {
  if (!Number.isInteger(plannedSets) || plannedSets < MIN_PLANNED_SETS || plannedSets > MAX_PLANNED_SETS) {
    throw new Error(`Planned sets must be between ${MIN_PLANNED_SETS} and ${MAX_PLANNED_SETS}.`)
  }
  return items.map((item) => item.id === itemId ? { ...item, plannedSets, updatedAt: timestamp } : item)
}

export function moveRoutineItem(items: readonly RoutineExercise[], itemId: string, direction: -1 | 1, timestamp: string) {
  const ordered = [...items].sort((left, right) => left.order - right.order)
  const currentIndex = ordered.findIndex((item) => item.id === itemId)
  const nextIndex = currentIndex + direction
  if (currentIndex < 0 || nextIndex < 0 || nextIndex >= ordered.length) return ordered
  ;[ordered[currentIndex], ordered[nextIndex]] = [ordered[nextIndex], ordered[currentIndex]]
  return withDeterministicOrder(ordered, timestamp)
}

export function removeRoutineItem(items: readonly RoutineExercise[], itemId: string, timestamp: string) {
  return withDeterministicOrder(items.filter((item) => item.id !== itemId), timestamp)
}
