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

  // Critical fix: "cable crunches" must map to "Kneeling Cable Abs Crunches", NEVER "Cable Kneeling Side Crunch"
  const cableCrunches = matchCatalogExercise('cable crunches')
  assert.ok(cableCrunches, 'cable crunches should match an exercise')
  assert.equal(cableCrunches.sourceId, 'kneeling-cable-abs-crunches')
  assert.equal(cableCrunches.name, 'Kneeling Cable Abs Crunches')

  const cableCrunch = matchCatalogExercise('cable crunch')
  assert.ok(cableCrunch, 'cable crunch should match an exercise')
  assert.equal(cableCrunch.sourceId, 'kneeling-cable-abs-crunches')

  // Critical fix: "bayesian curls" and phonetic speech variants must map to "Bayesian Cable Curl"
  const bayesianCurls = matchCatalogExercise('bayesian curls')
  assert.ok(bayesianCurls, 'bayesian curls should match an exercise')
  assert.equal(bayesianCurls.sourceId, 'bayesian-cable-curl')
  assert.equal(bayesianCurls.name, 'Bayesian Cable Curl')

  const baysianCurl = matchCatalogExercise('baysian curl')
  assert.ok(baysianCurl, 'baysian curl should match an exercise')
  assert.equal(baysianCurl.sourceId, 'bayesian-cable-curl')

  const baisianCurls = matchCatalogExercise('baisian curls')
  assert.ok(baisianCurls, 'baisian curls should match an exercise')
  assert.equal(baisianCurls.sourceId, 'bayesian-cable-curl')
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

// 5. Calorie estimate resilience and non-food validation tests
{
  const { estimateCaloriesFromImage, sanitizeEstimate } = await import('./aiService.ts')
  assert.equal(typeof estimateCaloriesFromImage, 'function')
  assert.equal(typeof sanitizeEstimate, 'function')

  // Valid food payload
  const validFood = sanitizeEstimate({
    isFood: true,
    items: [{ name: 'Oatmeal with Blueberries', portion: '1 bowl', calories: 250 }],
    totalCalories: 250,
    totalProteinG: 8,
    totalCarbsG: 45,
    totalFatG: 4,
  })
  assert.equal(validFood.isFood, true)
  assert.equal(validFood.items.length, 1)
  assert.equal(validFood.items[0].name, 'Oatmeal with Blueberries')
  assert.equal(validFood.totalCalories, 250)
  assert.equal(validFood.unrecognizedReason, undefined)

  // Non-food payload (e.g. human hand or non-food object)
  const nonFood = sanitizeEstimate({
    isFood: false,
    unrecognizedReason: 'No edible food detected. The photo appears to show a human hand.',
    items: [],
    totalCalories: 0,
    totalProteinG: 0,
    totalCarbsG: 0,
    totalFatG: 0,
  })
  assert.equal(nonFood.isFood, false)
  assert.equal(nonFood.items.length, 0)
  assert.equal(nonFood.totalCalories, 0)
  assert.equal(nonFood.unrecognizedReason, 'No edible food detected. The photo appears to show a human hand.')

  // Hallucinated payload with isFood: false but items populated -> must be sanitized to empty
  const forcedClean = sanitizeEstimate({
    isFood: false,
    items: [{ name: 'Chicken', portion: '1 hand', calories: 200 }],
    totalCalories: 200,
  })
  assert.equal(forcedClean.isFood, false)
  assert.equal(forcedClean.items.length, 0)
  assert.equal(forcedClean.totalCalories, 0)
  assert.ok(forcedClean.unrecognizedReason)

  // Zero calories or empty items -> must be classified as not food
  const emptyEstimate = sanitizeEstimate({ items: [], totalCalories: 0 })
  assert.equal(emptyEstimate.isFood, false)
  assert.equal(emptyEstimate.items.length, 0)
  assert.ok(emptyEstimate.unrecognizedReason)

  // Dynamic meal classification and time extraction
  const lateNightMilk = sanitizeEstimate({
    isFood: true,
    foodName: 'Amul Lactose-Free Milk',
    mealType: 'Late Night Snack',
    time: '12:35 AM',
    items: [{ name: 'Amul Lactose-Free Milk', portion: '250ml', calories: 130 }],
    totalCalories: 130,
    totalProteinG: 8,
    totalCarbsG: 12,
    totalFatG: 5,
  })
  assert.equal(lateNightMilk.isFood, true)
  assert.equal(lateNightMilk.foodName, 'Amul Lactose-Free Milk')
  assert.equal(lateNightMilk.mealType, 'Late Night Snack')
  assert.equal(lateNightMilk.time, '12:35 AM')

  // Calorie reconciliation from item sums when model omits or drifts totalCalories
  const itemReconciled = sanitizeEstimate({
    isFood: true,
    items: [
      { name: 'Cooked Chicken Breast', portion: '150g', calories: 250 },
      { name: 'White Rice', portion: '1 cup', calories: 210 },
      { name: 'Olive Oil', portion: '1 tsp', calories: 45 },
    ],
    totalCalories: 0, // model forgot totalCalories
  })
  assert.equal(itemReconciled.isFood, true)
  assert.equal(itemReconciled.totalCalories, 505)

  // Atwater macro formula fallback: 4*P + 4*C + 9*F
  const macroFallback = sanitizeEstimate({
    isFood: true,
    items: [{ name: 'Protein Shake', portion: '1 shaker', calories: 0 }],
    totalCalories: 0,
    totalProteinG: 30, // 120 kcal
    totalCarbsG: 5,    // 20 kcal
    totalFatG: 2,      // 18 kcal
  })
  assert.equal(macroFallback.isFood, true)
  assert.equal(macroFallback.totalCalories, 158) // 30*4 + 5*4 + 2*9 = 158
}

// 6. Midnight & Late Night meal classification tests (never call 12 AM breakfast)
{
  const { inferMealFromTime, inferMealClassification, mapMealTypeToCanonicalMeal } = await import('../food/foodModel.ts')
  const midnightDate = new Date(2026, 8, 22, 0, 35) // 12:35 AM
  assert.notEqual(inferMealFromTime(midnightDate), 'breakfast', '12:35 AM must never be classified as breakfast')
  assert.equal(inferMealFromTime(midnightDate), 'dinner')
  assert.equal(inferMealClassification(midnightDate), 'Late Night Snack')
  assert.equal(mapMealTypeToCanonicalMeal('Late Night Snack', midnightDate), 'dinner')
}

console.log('AI and Routine Parser tests passed cleanly!')

