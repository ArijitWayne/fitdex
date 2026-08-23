import type { ExerciseMediaStatus, ExerciseMediaType } from '../../data/models'
import { ACTIVE_SMART_WORKOUT_EXERCISES, builtInExercises } from './exerciseData.ts'
import { createExerciseCopy } from './exerciseContentCopy.ts'
import type { SmartWorkoutExerciseDefinition } from './smartWorkoutTypes.ts'

export type ExerciseContentMatchQuality = 'Exact'

export interface ExerciseContent {
  exerciseId: string
  sourceSlug: string
  mediaPath?: string
  mediaType?: ExerciseMediaType
  mediaStatus: ExerciseMediaStatus
  sourceName: 'SmartWorkout'
  sourcePage: string
  sourceAssetUrl?: string
  sourceExerciseName: string
  matchQuality: ExerciseContentMatchQuality
  howToPerform: string
  howItHelps: string
}

const exerciseById = new Map(builtInExercises.map((exercise) => [exercise.id, exercise]))

export const EXERCISE_CONTENT: Readonly<Record<string, ExerciseContent>> = Object.fromEntries(
  ACTIVE_SMART_WORKOUT_EXERCISES.map((sourceDefinition) => {
    const definition: SmartWorkoutExerciseDefinition = sourceDefinition
    const exerciseId = `builtin-exercise:${definition.slug}`
    const exercise = exerciseById.get(exerciseId)
    if (!exercise) throw new Error(`Missing canonical exercise for ${definition.slug}`)
    return [exerciseId, {
      exerciseId,
      sourceSlug: definition.sourceSlug,
      mediaPath: definition.mediaPath,
      mediaType: definition.mediaType,
      mediaStatus: definition.mediaStatus,
      sourceName: 'SmartWorkout',
      sourcePage: definition.sourcePage,
      sourceAssetUrl: definition.sourceAssetUrl,
      sourceExerciseName: definition.name,
      matchQuality: 'Exact',
      ...createExerciseCopy(exercise, definition),
    } satisfies ExerciseContent]
  }),
)

export function getExerciseContent(exerciseId: string) {
  return EXERCISE_CONTENT[exerciseId]
}
