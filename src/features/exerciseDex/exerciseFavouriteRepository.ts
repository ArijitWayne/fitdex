import { db } from '../../data/database.ts'

export async function listFavouriteExerciseIds() {
  return new Set((await db.exercisePreferences.toArray()).filter((item) => item.favourite).map((item) => item.exerciseId))
}

export async function setExerciseFavourite(exerciseId: string, favourite: boolean) {
  const id = `exercise-preference:${exerciseId}`
  const existing = await db.exercisePreferences.get(id)
  const timestamp = new Date().toISOString()
  await db.exercisePreferences.put({
    id,
    exerciseId,
    favourite,
    personalNotes: existing?.personalNotes,
    customTagIds: existing?.customTagIds ?? [],
    createdAt: existing?.createdAt ?? timestamp,
    updatedAt: timestamp,
  })
}
