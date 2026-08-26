/// <reference types="node" />
import assert from 'node:assert/strict'
import type { ExerciseTrackingType, Workout, WorkoutExercise, WorkoutSet } from '../../data/models.ts'
import { getUnitContext } from '../../utils/units.ts'
import { derivePersonalRecords, formatPersonalRecordMetric, searchPersonalRecords } from './personalRecords.ts'
import type { ProgressWorkoutFact } from './progressModel.ts'

const recordTimes = { createdAt: '2026-08-01T00:00:00.000Z', updatedAt: '2026-08-01T00:00:00.000Z' }

function fact(exerciseId: string, name: string, type: ExerciseTrackingType, dateKey: string, sets: Array<Partial<WorkoutSet> & { completed?: boolean }>): ProgressWorkoutFact {
  const completedAt = new Date(`${dateKey}T12:00:00`).toISOString()
  const workout: Workout = { id: `workout:${exerciseId}:${dateKey}`, nameSnapshot: 'PR Test', status: 'completed', startedAt: completedAt, completedAt, durationSeconds: 60, ...recordTimes }
  const exercise: WorkoutExercise = { id: `occurrence:${exerciseId}:${dateKey}`, workoutId: workout.id, exerciseId, exerciseNameSnapshot: name, trackingTypeSnapshot: type, order: 0, ...recordTimes }
  return { workout, dateKey, exercises: [{ exercise, sets: sets.map((set, order) => ({ id: `set:${exerciseId}:${dateKey}:${order}`, workoutExerciseId: exercise.id, order, completed: set.completed ?? true, ...recordTimes, ...set })) }] }
}

const history: ProgressWorkoutFact[] = [
  fact('bench', 'Bench Press Snapshot', 'weight_reps', '2026-08-20', [
    { weight: 60, reps: 10 }, { weight: 80, reps: 5 }, { weight: 75, reps: 8 }, { weight: 70, reps: 12 },
    { weight: 200, reps: 1, completed: false },
  ]),
  fact('bench', 'Bench Press Latest Snapshot', 'weight_reps', '2026-08-23', [{ weight: 80, reps: 5 }]),
  fact('similar-bench', 'Bench Press Machine', 'reps_only', '2026-08-21', [{ reps: 12 }, { reps: 18 }, { reps: 15 }]),
  fact('plank', 'Plank', 'duration', '2026-08-21', [{ durationSeconds: 30 }, { durationSeconds: 45 }, { durationSeconds: 40 }]),
  fact('run', 'Historical Run', 'distance_duration', '2026-08-22', [{ distance: 3, durationSeconds: 1200 }, { distance: 5, durationSeconds: 1900 }, { distance: 4.2, durationSeconds: 2100 }]),
  fact('assisted', 'Assisted Pull-Up', 'assisted_bodyweight', '2026-08-22', [{ reps: 10, weight: 50 }, { reps: 10, weight: 30 }, { reps: 8, weight: 20 }]),
  fact('bodyweight', 'Push-Up', 'bodyweight_reps', '2026-08-20', [{ reps: 20 }, { reps: 25 }]),
  fact('optional', 'Outdoor Cardio', 'duration_optional_distance', '2026-08-20', [{ durationSeconds: 600 }, { durationSeconds: 500, distance: 2 }]),
  fact('carry', 'Farmer Carry', 'weight_distance', '2026-08-20', [{ weight: 40, distance: 0.1 }, { weight: 60, distance: 0.05 }]),
  fact('circuit', 'Timed Circuit', 'duration_reps', '2026-08-20', [{ durationSeconds: 60, reps: 15 }, { durationSeconds: 45, reps: 20 }]),
  fact('unknown', 'Retired Historical Exercise', 'reps_only', '2026-08-24', [{ reps: 9 }]),
]

const definitions = new Map()
definitions.set('bench', { aliases: ['Barbell Bench'], name: 'Current renamed bench', trackingType: 'weight_reps' })
const records = derivePersonalRecords(history, definitions)
const byId = new Map(records.map((record) => [record.exerciseId, record]))

const bench = byId.get('bench')!
assert.equal(bench.exerciseName, 'Bench Press Latest Snapshot')
assert.equal(bench.metrics.find((metric) => metric.key === 'heaviest-weight')?.value, 80)
assert.equal(bench.metrics.find((metric) => metric.key === 'heaviest-weight')?.dateKey, '2026-08-23', 'exact ties prefer the latest occurrence')
assert.equal(bench.metrics.find((metric) => metric.key === 'best-reps-heavy')?.reps, 5)
assert.equal(bench.metrics.find((metric) => metric.key === 'best-set-volume')?.value, 840)
assert.equal(bench.metrics.some((metric) => /1rm/i.test(metric.label)), false)

assert.equal(byId.get('similar-bench')?.metrics[0].value, 18)
assert.equal(byId.get('bodyweight')?.metrics[0].value, 25)
assert.equal(byId.get('plank')?.metrics[0].value, 45)
assert.equal(byId.get('run')?.metrics.find((metric) => metric.key === 'longest-distance')?.value, 5)
assert.equal(byId.get('run')?.metrics.find((metric) => metric.key === 'longest-duration')?.value, 2100)
assert.equal(byId.get('optional')?.metrics.length, 2)
assert.equal(byId.get('carry')?.metrics.find((metric) => metric.key === 'heaviest-weight')?.value, 60)
assert.equal(byId.get('carry')?.metrics.find((metric) => metric.key === 'longest-distance')?.value, 0.1)
assert.equal(byId.get('circuit')?.metrics.find((metric) => metric.key === 'longest-duration')?.value, 60)
assert.equal(byId.get('circuit')?.metrics.find((metric) => metric.key === 'highest-reps')?.value, 20)

const assisted = byId.get('assisted')!
assert.equal(assisted.metrics.find((metric) => metric.key === 'highest-reps')?.value, 10)
assert.equal(assisted.metrics.find((metric) => metric.key === 'best-assisted-set')?.weight, 30, 'lower assistance wins when achieved reps tie')

assert.equal(byId.get('unknown')?.exerciseName, 'Retired Historical Exercise')
assert.equal(byId.has('bench'), true)
assert.equal(byId.has('similar-bench'), true, 'stable IDs keep similarly named exercises separate')
assert.equal(searchPersonalRecords(records, 'barbell').some((record) => record.exerciseId === 'bench'), true)
assert.equal(searchPersonalRecords(records, 'retired').some((record) => record.exerciseId === 'unknown'), true)

const volumeMetric = bench.metrics.find((metric) => metric.kind === 'set-volume')!
assert.match(formatPersonalRecordMetric(volumeMetric, getUnitContext('metric')), /840 kg/)
assert.match(formatPersonalRecordMetric(volumeMetric, getUnitContext('imperial')), /1,?851\.9 lb/)
const distanceMetric = byId.get('run')!.metrics.find((metric) => metric.kind === 'distance')!
assert.match(formatPersonalRecordMetric(distanceMetric, getUnitContext('imperial')), /3\.1 mi/)
assert.equal(volumeMetric.value, 840, 'unit display never mutates canonical kg values')

console.log('Personal Records tests passed: all tracking modes, stable IDs, snapshots, deterministic ties, assisted semantics, search, and unit display')
