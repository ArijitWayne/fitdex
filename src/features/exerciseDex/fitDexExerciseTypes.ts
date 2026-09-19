import type {
  ExerciseCategory,
  ExerciseEquipment,
  ExerciseMediaStatus,
  ExerciseMediaType,
} from '../../data/models'

export interface FitDexExerciseDefinition {
  slug: string
  name: string
  categories: readonly ExerciseCategory[]
  equipment: readonly ExerciseEquipment[]
  primaryMuscles: readonly string[]
  secondaryMuscles: readonly string[]
  tags: readonly string[]
  mechanics?: string
  laterality?: string
  weightType?: string
  mediaStatus: ExerciseMediaStatus
  mediaType?: ExerciseMediaType
  mediaPath?: string
}

export interface FitDexCategoryAudit {
  rawPageCount: number
  canonicalMembershipCount: number
}
