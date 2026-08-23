import { db } from '../../data/database.ts'
import type { Exercise, RoutineExercise, WorkoutRoutine } from '../../data/models.ts'
import { createId } from '../../utils/createId.ts'
import {
  addExerciseToRoutineItems,
  changeRoutineItemSets,
  createRoutineRecord,
  moveRoutineItem,
  renameRoutineRecord,
  removeRoutineItem,
} from './routineModel.ts'

export interface RoutineWithItems {
  routine: WorkoutRoutine
  items: RoutineExercise[]
}

function createRecordId(prefix: string) {
  return `${prefix}:${createId()}`
}

export async function loadRoutines(): Promise<RoutineWithItems[]> {
  const [routines, items] = await Promise.all([
    db.workoutRoutines.orderBy('updatedAt').reverse().toArray(),
    db.routineExercises.toArray(),
  ])
  return routines.map((routine) => ({
    routine,
    items: items.filter((item) => item.routineId === routine.id).sort((left, right) => left.order - right.order),
  }))
}

export async function createRoutine(name: string) {
  const timestamp = new Date().toISOString()
  const routine = createRoutineRecord(name, timestamp, createRecordId('routine'))
  await db.workoutRoutines.add(routine)
  return routine
}

export async function renameRoutine(routine: WorkoutRoutine, name: string) {
  const updated = renameRoutineRecord(routine, name, new Date().toISOString())
  await db.workoutRoutines.put(updated)
  return updated
}

async function replaceRoutineItems(routineId: string, items: readonly RoutineExercise[]) {
  await db.transaction('rw', db.routineExercises, db.workoutRoutines, async () => {
    const existing = await db.routineExercises.where('routineId').equals(routineId).toArray()
    const nextIds = new Set(items.map((item) => item.id))
    const removedIds = existing.filter((item) => !nextIds.has(item.id)).map((item) => item.id)
    if (removedIds.length) await db.routineExercises.bulkDelete(removedIds)
    if (items.length) await db.routineExercises.bulkPut([...items])
    await db.workoutRoutines.update(routineId, { updatedAt: new Date().toISOString() })
  })
}

export async function addExercisesToRoutine(routineId: string, exercises: readonly Exercise[]) {
  const timestamp = new Date().toISOString()
  let items = await db.routineExercises.where('routineId').equals(routineId).sortBy('order')
  for (const exercise of exercises) {
    items = addExerciseToRoutineItems(items, routineId, exercise, timestamp, createRecordId('routine-exercise'))
  }
  await replaceRoutineItems(routineId, items)
}

export async function updateRoutineItemSets(routineId: string, itemId: string, plannedSets: number) {
  const timestamp = new Date().toISOString()
  const items = await db.routineExercises.where('routineId').equals(routineId).sortBy('order')
  await replaceRoutineItems(routineId, changeRoutineItemSets(items, itemId, plannedSets, timestamp))
}

export async function reorderRoutineItem(routineId: string, itemId: string, direction: -1 | 1) {
  const timestamp = new Date().toISOString()
  const items = await db.routineExercises.where('routineId').equals(routineId).sortBy('order')
  await replaceRoutineItems(routineId, moveRoutineItem(items, itemId, direction, timestamp))
}

export async function deleteRoutineItem(routineId: string, itemId: string) {
  const timestamp = new Date().toISOString()
  const items = await db.routineExercises.where('routineId').equals(routineId).sortBy('order')
  await replaceRoutineItems(routineId, removeRoutineItem(items, itemId, timestamp))
}

export async function deleteRoutine(routineId: string) {
  await db.transaction('rw', db.workoutRoutines, db.routineExercises, async () => {
    await db.routineExercises.where('routineId').equals(routineId).delete()
    await db.workoutRoutines.delete(routineId)
  })
}
