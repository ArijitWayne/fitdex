import { listFoodEntries } from '../food/foodRepository.ts'
import { getCompletedWorkoutsForDate } from '../workout/workoutRepository.ts'
import type { JournalDay } from './journalModel.ts'

/** Journal is a derived read: no Journal records are created or updated. */
export async function getJournalDay(dateKey: string): Promise<JournalDay> {
  const [workouts, foodEntries] = await Promise.all([
    getCompletedWorkoutsForDate(dateKey),
    listFoodEntries(dateKey),
  ])
  return { workouts, foodEntries }
}
