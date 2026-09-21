/// <reference types="node" />
import assert from 'node:assert/strict'
import { extractSetsAndReps, matchCatalogExercise, mapAiResponseToWeeklySchedule } from './routineParser.ts'
import { getAiProxyUrl, parseWorkoutSplitWithAi } from './aiService.ts'

// 1. Sets and Reps extraction
{
  const r1 = extractSetsAndReps('Barbell Bench Press 3x12')
  assert.equal(r1.sets, 3)
  assert.equal(r1.reps, '12')
  assert.equal(r1.cleanName, 'Barbell Bench Press')

  const r2 = extractSetsAndReps('Incline DB Press 4 sets of 8-10 reps')
  assert.equal(r2.sets, 4)
  assert.equal(r2.reps, '8-10')
  assert.equal(r2.cleanName, 'Incline DB Press')

  const r3 = extractSetsAndReps('Lateral Raises 3 x 15')
  assert.equal(r3.sets, 3)
  assert.equal(r3.reps, '15')
  assert.equal(r3.cleanName, 'Lateral Raises')
}

// 2. Exercise catalog matching
{
  const bench = matchCatalogExercise('Bench Press')
  assert.ok(bench, 'Bench Press should match an exercise')
  assert.match(bench.name, /Bench Press/i)

  const squat = matchCatalogExercise('Squats')
  assert.ok(squat, 'Squats should match an exercise')
  assert.match(squat.name, /Squat/i)

  const pullup = matchCatalogExercise('Pull-ups')
  assert.ok(pullup, 'Pull-ups should match an exercise')
  assert.match(pullup.name, /Pull/i)
}

// 3. Mapping Cloudflare Gemma 4 structured JSON output to Fitdex weekly schedule
{
  const mockGemma4Output = {
    monday: {
      title: 'Push Day',
      isRest: false,
      exercises: [
        { name: 'Incline Dumbbell Bench Press', sets: 4, reps: '8-10' },
        { name: 'Dumbbell Lateral Raise', sets: 3, reps: '15' },
        { name: 'Band Chest Fly', sets: 3, reps: '12' },
        { name: 'Cable Overhead Triceps Extension', sets: 3, reps: '12' },
      ],
    },
    tuesday: {
      title: 'Leg Day',
      isRest: false,
      exercises: [
        { name: 'Leg Press', sets: 4, reps: '10' },
        { name: 'Seated Leg Curl', sets: 3, reps: '12' },
        { name: 'Machine Calf Raises', sets: 4, reps: '15' },
        { name: 'Kneeling Cable Abs Crunches', sets: 3, reps: '15' },
      ],
    },
    wednesday: {
      title: 'Rest Day',
      isRest: true,
      exercises: [],
    },
    thursday: {
      title: 'Pull Day',
      isRest: false,
      exercises: [
        { name: 'Pull-Up', sets: 3, reps: 'to failure' },
        { name: 'Face Pull', sets: 3, reps: '15' },
        { name: 'Chest Supported Machine Row', sets: 3, reps: '10' },
        { name: 'Biceps Curl', sets: 3, reps: '12' },
      ],
    },
    friday: {
      title: 'Lower & Shoulders',
      isRest: false,
      exercises: [
        { name: 'Romanian Deadlift', sets: 4, reps: '8' },
        { name: 'Single-Leg Extension', sets: 3, reps: '12' },
        { name: 'Landmine Press', sets: 3, reps: '10' },
        { name: 'Triceps Extension', sets: 3, reps: '12' },
      ],
    },
    saturday: { title: 'Rest Day', isRest: true, exercises: [] },
    sunday: { title: 'Rest Day', isRest: true, exercises: [] },
  }

  const schedule = mapAiResponseToWeeklySchedule(mockGemma4Output)

  assert.equal(schedule.monday.isRestDay, false)
  assert.equal(schedule.monday.exercises.length, 4)
  assert.equal(schedule.monday.exercises[0].exerciseName, 'Incline Dumbbell Bench Press')
  assert.equal(schedule.monday.exercises[0].sets, 4)
  assert.equal(schedule.monday.exercises[0].reps, '8-10')
  assert.ok(schedule.monday.exercises[0].matchedExercise, 'Monday exercise 0 should match catalog')

  assert.equal(schedule.tuesday.isRestDay, false)
  assert.equal(schedule.tuesday.exercises.length, 4)
  assert.equal(schedule.tuesday.exercises[0].sets, 4)
  assert.equal(schedule.tuesday.exercises[0].reps, '10')

  assert.equal(schedule.wednesday.isRestDay, true)
  assert.equal(schedule.wednesday.exercises.length, 0)

  assert.equal(schedule.thursday.isRestDay, false)
  assert.equal(schedule.thursday.exercises.length, 4)
  assert.equal(schedule.thursday.exercises[0].sets, 3)
  assert.equal(schedule.thursday.exercises[0].reps, 'to failure')

  assert.equal(schedule.friday.isRestDay, false)
  assert.equal(schedule.friday.exercises.length, 4)
  assert.equal(schedule.friday.exercises[0].sets, 4)
  assert.equal(schedule.friday.exercises[0].reps, '8')

  assert.equal(schedule.saturday.isRestDay, true)
  assert.equal(schedule.sunday.isRestDay, true)
}

// 4. Missing Proxy URL guard
{
  const original = process.env.VITE_AI_PROXY_URL
  delete process.env.VITE_AI_PROXY_URL
  assert.equal(getAiProxyUrl(), '')
  await assert.rejects(
    async () => {
      await parseWorkoutSplitWithAi('Monday push')
    },
    /AI Proxy URL is not configured/
  )
  if (original) process.env.VITE_AI_PROXY_URL = original
}

console.log('AI and Routine Parser tests passed cleanly!')
