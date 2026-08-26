import type { PlanChangeEvent, PlanDaySnapshot, WeeklyPlanAssignment } from '../../data/models.ts'
import { MAX_LEVEL, levelForXp } from './gamificationConfig.ts'

export function assignmentsEqual(left: WeeklyPlanAssignment, right: WeeklyPlanAssignment) {
  return left.type === right.type && (left.type !== 'routine' || (right.type === 'routine' && left.routineId === right.routineId))
}

export function isMaterialPlanChange(left: WeeklyPlanAssignment, right: WeeklyPlanAssignment) {
  return !assignmentsEqual(left, right)
}

export function deriveStreak(snapshots: readonly PlanDaySnapshot[], resets: readonly PlanChangeEvent[] = []) {
  const resetDates = new Set(resets.filter((event) => event.type === 'reset').map((event) => event.effectiveDate))
  let current = 0
  let best = 0
  let successfulPlannedDays = 0
  for (const snapshot of [...snapshots].sort((left, right) => left.localDate.localeCompare(right.localDate))) {
    if (resetDates.has(snapshot.localDate)) current = 0
    if (snapshot.result === 'success') {
      current += 1
      successfulPlannedDays += 1
      best = Math.max(best, current)
    } else if (snapshot.result === 'missed') current = 0
  }
  return { current, best, successfulPlannedDays }
}

export function totalXpFromAmounts(amounts: readonly number[]) {
  return amounts.reduce((total, amount) => total + (Number.isFinite(amount) ? amount : 0), 0)
}

export function crossedLevels(beforeXp: number, afterXp: number) {
  const before = levelForXp(beforeXp).level
  const after = levelForXp(afterXp).level
  return { before, after, crossed: after > before, maxLevel: after === MAX_LEVEL }
}

export function inclusiveDateDuration(startDate: string, endDate: string) {
  const [startYear, startMonth, startDay] = startDate.split('-').map(Number)
  const [endYear, endMonth, endDay] = endDate.split('-').map(Number)
  return Math.round((Date.UTC(endYear, endMonth - 1, endDay) - Date.UTC(startYear, startMonth - 1, startDay)) / 86400000) + 1
}
