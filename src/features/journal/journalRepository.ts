import { db } from '../../data/database.ts'
import { nowIso } from '../../utils/records.ts'
import { listFoodEntries } from '../food/foodRepository.ts'
import { getCompletedWorkoutsForDate, getWorkoutDetail } from '../workout/workoutRepository.ts'
import type { JournalDay } from './journalModel.ts'

export async function getJournalDay(dateKey: string): Promise<JournalDay> {
  const [workoutSummaries, foodEntries, noteRecord] = await Promise.all([
    getCompletedWorkoutsForDate(dateKey),
    listFoodEntries(dateKey),
    db.journalRecords.where('date').equals(dateKey).first(),
  ])

  const workoutsWithDetails = await Promise.all(
    workoutSummaries.map(async (summary) => {
      try {
        const details = await getWorkoutDetail(summary.workout.id)
        return {
          ...summary,
          exerciseDetails: details.exercises,
        }
      } catch {
        return summary
      }
    })
  )

  return {
    workouts: workoutsWithDetails,
    foodEntries,
    note: noteRecord?.body,
  }
}

export async function saveJournalNote(dateKey: string, body: string): Promise<void> {
  const trimmed = body.trim()
  const existing = await db.journalRecords.where('date').equals(dateKey).first()
  if (!trimmed) {
    if (existing) {
      await db.journalRecords.delete(existing.id)
    }
    return
  }
  const now = nowIso()
  if (existing) {
    await db.journalRecords.update(existing.id, { body: trimmed, updatedAt: now })
  } else {
    await db.journalRecords.add({
      id: `journal:${dateKey}`,
      date: dateKey,
      body: trimmed,
      createdAt: now,
      updatedAt: now,
    })
  }
}
