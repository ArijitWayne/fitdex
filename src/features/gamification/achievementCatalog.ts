export const ACHIEVEMENT_CATEGORIES = ['WORKOUT', 'CONSISTENCY', 'PERFORMANCE', 'EXERCISE_DEX', 'NUTRITION', 'PROGRESSION'] as const
export type AchievementCategory = (typeof ACHIEVEMENT_CATEGORIES)[number]
export type AchievementProgressKey = 'workouts' | 'trainingHours' | 'bestStreak' | 'plannedWeeks' | 'perfectMonths' | 'prEvents' | 'prExercises' | 'uniqueExercises' | 'exerciseCategories' | 'completeNutritionDays' | 'calorieTargetDays' | 'proteinTargetDays' | 'level'

export interface AchievementDefinition {
  id: string
  category: AchievementCategory
  name: string
  description: string
  progressKey: AchievementProgressKey
  target: number
  dormant?: boolean
}

const milestone = (category: AchievementCategory, id: string, name: string, description: string, progressKey: AchievementProgressKey, target: number, dormant = false): AchievementDefinition => ({ category, id, name, description, progressKey, target, dormant })

export const ACHIEVEMENTS: readonly AchievementDefinition[] = [
  milestone('WORKOUT', 'first-workout', 'First Workout', 'Complete 1 workout.', 'workouts', 1),
  ...[10, 50, 100, 250, 500].map((count) => milestone('WORKOUT', `${count}-workouts`, `${count} Workouts`, `Complete ${count} workouts.`, 'workouts', count)),
  ...[100, 250, 500, 1000].map((hours) => milestone('WORKOUT', `${hours}-hours-trained`, `${hours.toLocaleString()} Hours Trained`, `Complete ${hours.toLocaleString()} hours of active training.`, 'trainingHours', hours)),

  milestone('CONSISTENCY', 'first-planned-week', 'First Planned Week Completed', 'Complete every planned training obligation in one local week without protection.', 'plannedWeeks', 1),
  ...[7, 30, 100, 365].map((days) => milestone('CONSISTENCY', `${days}-day-plan-streak`, `${days} Planned Days`, `Reach a ${days} successful planned training-day streak.`, 'bestStreak', days)),
  milestone('CONSISTENCY', 'two-year-plan-streak', '2-Year Plan Streak', 'Reach 730 successful planned training days.', 'bestStreak', 730),
  milestone('CONSISTENCY', 'five-year-plan-streak', '5-Year Plan Streak', 'Reach 1,825 successful planned training days.', 'bestStreak', 1825),
  milestone('CONSISTENCY', 'perfect-month', 'Perfect Month', 'Complete every planned training obligation in a local month without a Freeze or Pause.', 'perfectMonths', 1),

  milestone('PERFORMANCE', 'first-pr', 'First PR', 'Set your first genuine Personal Record.', 'prEvents', 1),
  ...[10, 50, 100].map((count) => milestone('PERFORMANCE', `${count}-prs`, `${count} PRs`, `Set ${count} genuine Personal Records.`, 'prEvents', count)),
  ...[5, 20, 50].map((count) => milestone('PERFORMANCE', `pr-${count}-exercises`, `PR in ${count} Exercises`, `Set a PR in ${count} different exercises.`, 'prExercises', count)),

  milestone('EXERCISE_DEX', 'first-exercise', 'First Exercise', 'Perform an exercise in a completed workout.', 'uniqueExercises', 1),
  ...[5, 10, 25, 50].map((count) => milestone('EXERCISE_DEX', `${count}-different-exercises`, `${count} Different Exercises`, `Perform ${count} different exercises in completed workouts.`, 'uniqueExercises', count)),
  milestone('EXERCISE_DEX', 'all-categories', 'All Categories', 'Perform an exercise from every Exercise Dex category.', 'exerciseCategories', 9),

  milestone('NUTRITION', 'first-fully-logged-day', 'First Fully Logged Day', 'Log food in Breakfast, Lunch, Supper, and Dinner.', 'completeNutritionDays', 1),
  ...[7, 30, 100, 365].map((count) => milestone('NUTRITION', `${count}-complete-nutrition-days`, `${count} Complete Nutrition Days`, `Fully log all four meals on ${count} days.`, 'completeNutritionDays', count)),
  ...[7, 30, 100].map((count) => milestone('NUTRITION', `calorie-target-${count}`, `Calorie Target ${count} Times`, `Meet your calorie target ${count} times.`, 'calorieTargetDays', count)),
  ...[7, 30, 100].map((count) => milestone('NUTRITION', `protein-target-${count}`, `Protein Target ${count} Times`, `Meet your protein target ${count} times.`, 'proteinTargetDays', count)),

  ...[10, 25, 50, 75, 100].map((level) => milestone('PROGRESSION', `level-${level}`, level === 100 ? 'Level 100 / Radiant' : `Reach Level ${level}`, `Reach Level ${level}.`, 'level', level)),
  milestone('PROGRESSION', 'reach-veteran', 'Reach Veteran', 'Reach Level 28 and the Veteran rank.', 'level', 28),
  milestone('PROGRESSION', 'reach-warrior', 'Reach Warrior', 'Reach Level 43 and the Warrior rank.', 'level', 43),
  milestone('PROGRESSION', 'reach-immortal', 'Reach Immortal', 'Reach Level 73 and the Immortal rank.', 'level', 73),
  milestone('PROGRESSION', 'reach-legend', 'Reach Legend', 'Reach Level 88 and the Legend rank.', 'level', 88),
  milestone('PROGRESSION', 'reach-radiant', 'Reach Radiant', 'Reach Level 100 and the Radiant rank.', 'level', 100),
]

if (ACHIEVEMENTS.length !== 52) throw new Error(`Gamification catalog must contain exactly 52 achievements; found ${ACHIEVEMENTS.length}.`)

export const achievementById = new Map(ACHIEVEMENTS.map((achievement) => [achievement.id, achievement]))
