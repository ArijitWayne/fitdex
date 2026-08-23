/// <reference types="node" />
import assert from 'node:assert/strict'
import fs from 'node:fs'
import type { Exercise, Workout, WorkoutRoutine } from '../../data/models.ts'
import { DATABASE_SCHEMA_VERSION, db } from '../../data/database.ts'
import { builtInExercises, BUILT_IN_EXERCISE_DATASET_VERSION } from '../exerciseDex/exerciseData.ts'
import { exerciseBelongsToCategory, searchExercises } from '../exerciseDex/exerciseCatalog.ts'
import {
  addExerciseToRoutineItems,
  changeRoutineItemSets,
  createRoutineRecord,
  DEFAULT_PLANNED_SETS,
  MAX_PLANNED_SETS,
  MIN_PLANNED_SETS,
  moveRoutineItem,
  removeRoutineItem,
  renameRoutineRecord,
} from './routineModel.ts'

const firstTimestamp = '2026-08-23T12:00:00.000Z'
const secondTimestamp = '2026-08-23T12:05:00.000Z'

// A-C: create, persistable record shape, and rename.
const routine = createRoutineRecord('  Push   Day  ', firstTimestamp, 'routine:test')
assert.equal(routine.name, 'Push Day')
assert.deepEqual(JSON.parse(JSON.stringify(routine)), routine)
const renamed = renameRoutineRecord(routine, 'Upper Body', secondTimestamp)
assert.equal(renamed.name, 'Upper Body')
assert.equal(renamed.id, routine.id)

// D-E: canonical and custom exercise IDs use the same lightweight reference shape.
const canonical = builtInExercises.find((exercise) => exercise.name === 'Push-Up')
assert.ok(canonical)
let items = addExerciseToRoutineItems([], routine.id, canonical, firstTimestamp, 'routine-exercise:canonical')
assert.equal(items[0].exerciseId, canonical.id)
assert.equal(items[0].plannedSets, DEFAULT_PLANNED_SETS)
const customExercise: Exercise = {
  ...canonical,
  id: 'custom-exercise:test',
  name: 'My Custom Press',
  aliases: [],
  source: 'custom',
  sourceId: undefined,
  sourceSlug: undefined,
  sourcePage: undefined,
  sourceRecordIds: undefined,
  createdAt: firstTimestamp,
  updatedAt: firstTimestamp,
}
items = addExerciseToRoutineItems(items, routine.id, customExercise, firstTimestamp, 'routine-exercise:custom')
assert.equal(items[1].exerciseId, customExercise.id)

// F: duplicate exercise IDs are rejected within one routine.
assert.throws(() => addExerciseToRoutineItems(items, routine.id, canonical, firstTimestamp, 'routine-exercise:duplicate'), /already in this routine/)

// G: set-count bounds are enforced.
items = changeRoutineItemSets(items, items[0].id, MIN_PLANNED_SETS, secondTimestamp)
assert.equal(items[0].plannedSets, 1)
items = changeRoutineItemSets(items, items[0].id, MAX_PLANNED_SETS, secondTimestamp)
assert.equal(items[0].plannedSets, 20)
assert.throws(() => changeRoutineItemSets(items, items[0].id, 0, secondTimestamp), /between 1 and 20/)

// H-I: accessible move controls preserve deterministic order; removal only removes the item.
items = moveRoutineItem(items, items[1].id, -1, secondTimestamp)
assert.equal(items[0].exerciseId, customExercise.id)
assert.deepEqual(items.map((item) => item.order), [0, 1])
items = removeRoutineItem(items, items[0].id, secondTimestamp)
assert.equal(items.length, 1)
assert.equal(items[0].exerciseId, canonical.id)
assert.ok(builtInExercises.some((exercise) => exercise.id === canonical.id))

// J: routine deletion is isolated from immutable workout snapshots and exercise definitions.
const completedWorkout: Workout = {
  id: 'workout:history',
  routineId: routine.id,
  routineNameSnapshot: routine.name,
  nameSnapshot: routine.name,
  status: 'completed',
  startedAt: firstTimestamp,
  completedAt: secondTimestamp,
  createdAt: firstTimestamp,
  updatedAt: secondTimestamp,
}
const routinesAfterDelete: WorkoutRoutine[] = [routine].filter((record) => record.id !== routine.id)
assert.equal(routinesAfterDelete.length, 0)
assert.equal(completedWorkout.nameSnapshot, 'Push Day')
assert.ok(builtInExercises.some((exercise) => exercise.id === canonical.id))

// Database/migration readiness: v6 retains the v5 routine table and v4 catalog.
assert.equal(DATABASE_SCHEMA_VERSION, 6)
assert.equal(BUILT_IN_EXERCISE_DATASET_VERSION, 4)
assert.equal(builtInExercises.length, 804)
assert.ok(db.tables.some((table) => table.name === 'routineExercises'))
const databaseSource = fs.readFileSync('src/data/database.ts', 'utf8')
const repositorySource = fs.readFileSync('src/features/workout/routineRepository.ts', 'utf8')
assert.match(databaseSource, /this\.version\(4\)\.stores\(DATABASE_STORES_V4\)/)
assert.match(databaseSource, /this\.version\(5\)\.stores\(DATABASE_STORES_V5\)\.upgrade/)
assert.match(databaseSource, /this\.version\(DATABASE_SCHEMA_VERSION\)\.stores\(DATABASE_STORES\)/)
assert.match(databaseSource, /workout\.nameSnapshot \?\?=/)
assert.match(databaseSource, /workout\.status \?\?=/)
assert.match(databaseSource, /workoutExercise\.trackingTypeSnapshot \?\?=/)
assert.doesNotMatch(databaseSource, /deleteDatabase|\.clear\(\)/)
assert.match(repositorySource, /db\.workoutRoutines\.add\(routine\)/)
assert.match(repositorySource, /db\.routineExercises\.toArray\(\)/)
assert.match(repositorySource, /db\.transaction\('rw', db\.workoutRoutines, db\.routineExercises/)
assert.doesNotMatch(repositorySource.match(/export async function deleteRoutine[\s\S]*$/)?.[0] ?? '', /db\.workouts|db\.workoutExercises|db\.workoutSets|db\.exercises/)

// Picker reuse: normalized search and category membership remain the shared engine.
const pushForms = ['pushup', 'push up', 'push-up']
for (const query of pushForms) assert.ok(searchExercises(builtInExercises, query).some((exercise) => exercise.id === canonical.id))
const oneArmIds = searchExercises(builtInExercises, 'one arm').map((exercise) => exercise.id)
assert.deepEqual(searchExercises(builtInExercises, 'one-arm').map((exercise) => exercise.id), oneArmIds)
assert.deepEqual(searchExercises(builtInExercises, 'onearm').map((exercise) => exercise.id), oneArmIds)
assert.ok(searchExercises(builtInExercises.filter((exercise) => exerciseBelongsToCategory(exercise, 'Chest')), 'pushup').every((exercise) => exerciseBelongsToCategory(exercise, 'Chest')))

console.log('Workout routine tests passed: CRUD, canonical/custom references, duplicate guard, set bounds, reordering, history isolation, v6 schema readiness, and shared picker search')
