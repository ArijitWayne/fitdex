import { FOOD_MEALS } from '../../data/models.ts'
import { listFoodEntries } from '../food/foodRepository.ts'
import { derivePersonalRecords } from '../progress/personalRecords.ts'
import { calculateTrainingSeconds, calculateTrainingVolume } from '../progress/progressModel.ts'
import { loadProgressSource } from '../progress/progressRepository.ts'
import { getActiveWorkout } from '../workout/workoutRepository.ts'
import { getCompletedWorkoutsForStartDate } from '../workout/workoutRepository.ts'
import { loadRoutines } from '../workout/routineRepository.ts'
import { loadWeeklyPlan, weekdayIdForLocalDateKey } from '../workout/weeklyPlan.ts'
import { summarizeTodayFood } from './homeModel.ts'

export async function loadHomeDashboard(todayDateKey: string) {
  const [activeWorkout, foodEntries, progress, routines, weeklyPlan, completedByStartDate] = await Promise.all([
    getActiveWorkout(),
    listFoodEntries(todayDateKey),
    loadProgressSource('7d', todayDateKey),
    loadRoutines(),
    loadWeeklyPlan(),
    getCompletedWorkoutsForStartDate(todayDateKey),
  ])
  const completedToday = progress.currentWorkouts.filter((workout) => workout.dateKey === todayDateKey)
  const personalRecords = derivePersonalRecords(progress.allWorkouts, progress.definitions)
  const weekday = weekdayIdForLocalDateKey(todayDateKey)
  const storedAssignment = weeklyPlan.days[weekday]
  const scheduledRoutine = storedAssignment.type === 'routine' ? routines.find((entry) => entry.routine.id === storedAssignment.routineId) : undefined
  const todayAssignment = storedAssignment.type === 'routine' && !scheduledRoutine ? { type: 'no_plan' as const } : storedAssignment
  return {
    todayDateKey,
    activeWorkout,
    completedToday,
    completedByStartDate,
    weeklyPlan,
    weekday,
    todayAssignment,
    scheduledRoutine,
    routines,
    foodEntries,
    food: summarizeTodayFood(foodEntries),
    todayTrainingSeconds: calculateTrainingSeconds(completedToday),
    newestPr: personalRecords[0],
    last7WorkoutCount: progress.currentWorkouts.length,
    last7VolumeKg: calculateTrainingVolume(progress.currentWorkouts),
    units: progress.units,
    hasHistory: progress.hasAnyHistory || Boolean(activeWorkout),
    mealOrder: FOOD_MEALS,
  }
}

export type HomeDashboardData = Awaited<ReturnType<typeof loadHomeDashboard>>
