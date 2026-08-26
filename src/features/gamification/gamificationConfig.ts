export const XP_REWARDS = {
  plannedRoutine: 30,
  plannedWorkout: 30,
  unplannedWorkout: 20,
  personalRecord: 15,
  calorieTarget: 5,
  proteinTarget: 5,
  fullFoodLog: 5,
} as const

export const MAX_LEVEL = 100
export const INITIAL_FREEZE_BALANCE = 2
export const MAX_FREEZE_BALANCE = 3
export const SUCCESSFUL_DAYS_PER_FREEZE = 30
export const MAX_PAUSE_DAYS = 7
export const MAX_PAUSES_PER_ROLLING_YEAR = 2
export const MAX_PROTECTED_PLAN_CHANGES_PER_ROLLING_YEAR = 1

export const RANKS = [
  { id: 'recruit', name: 'RECRUIT', minLevel: 1, maxLevel: 6 },
  { id: 'regular', name: 'REGULAR', minLevel: 7, maxLevel: 15 },
  { id: 'hardened', name: 'HARDENED', minLevel: 16, maxLevel: 27 },
  { id: 'veteran', name: 'VETERAN', minLevel: 28, maxLevel: 42 },
  { id: 'warrior', name: 'WARRIOR', minLevel: 43, maxLevel: 57 },
  { id: 'ascendant', name: 'ASCENDANT', minLevel: 58, maxLevel: 72 },
  { id: 'immortal', name: 'IMMORTAL', minLevel: 73, maxLevel: 87 },
  { id: 'legend', name: 'LEGEND', minLevel: 88, maxLevel: 99 },
  { id: 'radiant', name: 'RADIANT', minLevel: 100, maxLevel: 100 },
] as const

export type Rank = (typeof RANKS)[number]

// Audited cumulative checkpoints. Values between anchors are interpolated to a
// deterministic 100-entry table so UI and tests never depend on scattered formulas.
const XP_ANCHORS = [
  [1, 0], [10, 2000], [25, 12000], [50, 27000], [75, 70000], [100, 140000],
] as const

export const LEVEL_XP_THRESHOLDS: readonly number[] = Array.from({ length: MAX_LEVEL }, (_, index) => {
  const level = index + 1
  const upperIndex = XP_ANCHORS.findIndex(([anchorLevel]) => anchorLevel >= level)
  if (upperIndex <= 0) return XP_ANCHORS[0][1]
  const [upperLevel, upperXp] = XP_ANCHORS[upperIndex]
  const [lowerLevel, lowerXp] = XP_ANCHORS[upperIndex - 1]
  const progress = (level - lowerLevel) / (upperLevel - lowerLevel)
  return Math.round((lowerXp + (upperXp - lowerXp) * progress) / 10) * 10
})

export function rankForLevel(level: number): Rank {
  const safeLevel = Math.max(1, Math.min(MAX_LEVEL, Math.floor(level)))
  return RANKS.find((rank) => safeLevel >= rank.minLevel && safeLevel <= rank.maxLevel) ?? RANKS[0]
}

export function levelForXp(totalXp: number) {
  const safeXp = Math.max(0, Math.floor(totalXp))
  let level = 1
  for (let index = 1; index < LEVEL_XP_THRESHOLDS.length; index += 1) {
    if (safeXp < LEVEL_XP_THRESHOLDS[index]) break
    level = index + 1
  }
  const threshold = LEVEL_XP_THRESHOLDS[level - 1]
  const nextThreshold = level === MAX_LEVEL ? undefined : LEVEL_XP_THRESHOLDS[level]
  return {
    totalXp: safeXp,
    level,
    rank: rankForLevel(level),
    xpIntoLevel: safeXp - threshold,
    xpRequiredForNextLevel: nextThreshold === undefined ? 0 : nextThreshold - threshold,
    xpRemainingForNextLevel: nextThreshold === undefined ? 0 : nextThreshold - safeXp,
    maxLevel: level === MAX_LEVEL,
  }
}

export const RANK_BADGE_ASSET_FILES: Record<Rank['id'], string> = {
  recruit: 'recruit.webp',
  regular: 'regular.webp',
  hardened: 'hardened.webp',
  veteran: 'veteran.webp',
  warrior: 'warrior.webp',
  ascendant: 'ascendant.webp',
  immortal: 'immortal.webp',
  legend: 'legend.webp',
  radiant: 'radiant.webp',
}

// Persistent achievement IDs are a data contract. Final artwork filenames are
// intentionally mapped rather than inferred so future asset naming never changes
// unlock identity or migration behavior.
export const ACHIEVEMENT_BADGE_ASSET_FILES: Record<string, string> = {
  'first-workout': 'first-workout.webp',
  '10-workouts': 'workouts-10.webp',
  '50-workouts': 'workouts-50.webp',
  '100-workouts': 'workouts-100.webp',
  '250-workouts': 'workouts-250.webp',
  '500-workouts': 'workouts-500.webp',
  '100-hours-trained': 'hours-100.webp',
  '250-hours-trained': 'hours-250.webp',
  '500-hours-trained': 'hours-500.webp',
  '1000-hours-trained': 'hours-1000.webp',
  'first-planned-week': 'first-planned-week.webp',
  '7-day-plan-streak': 'streak-7.webp',
  '30-day-plan-streak': 'streak-30.webp',
  '100-day-plan-streak': 'streak-100.webp',
  '365-day-plan-streak': 'streak-365.webp',
  'two-year-plan-streak': 'streak-2-years.webp',
  'five-year-plan-streak': 'streak-5-years.webp',
  'perfect-month': 'perfect-month.webp',
  'first-pr': 'first-pr.webp',
  '10-prs': 'prs-10.webp',
  '50-prs': 'prs-50.webp',
  '100-prs': 'prs-100.webp',
  'pr-5-exercises': 'pr-exercises-5.webp',
  'pr-20-exercises': 'pr-exercises-20.webp',
  'pr-50-exercises': 'pr-exercises-50.webp',
  'first-exercise': 'first-exercise.webp',
  '5-different-exercises': 'exercises-5.webp',
  '10-different-exercises': 'exercises-10.webp',
  '25-different-exercises': 'exercises-25.webp',
  '50-different-exercises': 'exercises-50.webp',
  'all-categories': 'all-categories.webp',
  'first-fully-logged-day': 'first-full-log.webp',
  '7-complete-nutrition-days': 'nutrition-days-7.webp',
  '30-complete-nutrition-days': 'nutrition-days-30.webp',
  '100-complete-nutrition-days': 'nutrition-days-100.webp',
  '365-complete-nutrition-days': 'nutrition-days-365.webp',
  'calorie-target-7': 'calorie-target-7.webp',
  'calorie-target-30': 'calorie-target-30.webp',
  'calorie-target-100': 'calorie-target-100.webp',
  'protein-target-7': 'protein-target-7.webp',
  'protein-target-30': 'protein-target-30.webp',
  'protein-target-100': 'protein-target-100.webp',
  'level-10': 'level-10.webp',
  'level-25': 'level-25.webp',
  'level-50': 'level-50.webp',
  'level-75': 'level-75.webp',
  'level-100': 'level-100.webp',
  'reach-veteran': 'reach-veteran.webp',
  'reach-warrior': 'reach-warrior.webp',
  'reach-immortal': 'reach-immortal.webp',
  'reach-legend': 'reach-legend.webp',
  'reach-radiant': 'reach-radiant.webp',
}

export function rankAssetPath(rank: Rank | string) {
  const id = typeof rank === 'string' ? rank : rank.id
  return `/gamification/ranks/${RANK_BADGE_ASSET_FILES[id as Rank['id']] ?? `${id}.webp`}`
}

export function achievementAssetPath(achievementId: string) {
  return `/gamification/achievements/${ACHIEVEMENT_BADGE_ASSET_FILES[achievementId] ?? `${achievementId}.webp`}`
}
