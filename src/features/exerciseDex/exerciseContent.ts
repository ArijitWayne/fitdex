import type { ExerciseMediaStatus, ExerciseMediaType } from '../../data/models'
import { ACTIVE_FITDEX_EXERCISES, builtInExercises } from './exerciseData.ts'
import { createExerciseCopy } from './exerciseContentCopy.ts'
import type { FitDexExerciseDefinition } from './fitDexExerciseTypes.ts'

export type ExerciseContentMatchQuality = 'Exact'

export interface ExerciseContent {
  exerciseId: string
  mediaPath?: string
  mediaType?: ExerciseMediaType
  mediaStatus: ExerciseMediaStatus
  matchQuality: ExerciseContentMatchQuality
  howToPerform: string
  howItHelps: string
}

const exerciseById = new Map(builtInExercises.map((exercise) => [exercise.id, exercise]))

export const EXERCISE_CONTENT: Readonly<Record<string, ExerciseContent>> = Object.fromEntries(
  ACTIVE_FITDEX_EXERCISES.map((sourceDefinition) => {
    const definition: FitDexExerciseDefinition = sourceDefinition
    const exerciseId = `builtin-exercise:${definition.slug}`
    const exercise = exerciseById.get(exerciseId)
    if (!exercise) throw new Error(`Missing canonical exercise for ${definition.slug}`)
    return [exerciseId, {
      exerciseId,
      mediaPath: definition.mediaPath,
      mediaType: definition.mediaType,
      mediaStatus: definition.mediaStatus,
      matchQuality: 'Exact',
      ...createExerciseCopy(exercise, definition),
    } satisfies ExerciseContent]
  }),
)

export function getExerciseContent(exerciseId: string) {
  return EXERCISE_CONTENT[exerciseId]
}
