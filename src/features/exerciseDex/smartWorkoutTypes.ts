import type {
  ExerciseCategory,
  ExerciseEquipment,
  ExerciseMediaStatus,
  ExerciseMediaType,
} from '../../data/models'

export interface SmartWorkoutExerciseDefinition {
  slug: string
  sourceSlug: string
  sourceRecordIds: readonly string[]
  name: string
  categories: readonly ExerciseCategory[]
  sourcePage: string
  sourcePages: Readonly<Partial<Record<ExerciseCategory, string>>>
  equipment: readonly ExerciseEquipment[]
  primaryMuscles: readonly string[]
  secondaryMuscles: readonly string[]
  tags: readonly string[]
  mechanics?: string
  laterality?: string
  weightType?: string
  mediaStatus: ExerciseMediaStatus
  mediaType?: ExerciseMediaType
  sourceAssetUrl?: string
  mediaPath?: string
}

export interface SmartWorkoutCategoryAudit {
  rawPageCount: number
  canonicalMembershipCount: number
}
