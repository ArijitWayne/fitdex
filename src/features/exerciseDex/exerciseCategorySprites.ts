import type { ExerciseCategory } from '../../data/models'
import type { ThemeFamily } from '../../theme/theme'
import type { ResolvedBrightness } from '../../theme/useResolvedBrightness'

const CATEGORY_SPRITE_SLUGS: Readonly<Record<ExerciseCategory, string>> = {
  Chest: 'chest',
  Back: 'back',
  Shoulders: 'shoulders',
  Legs: 'legs',
  Gluteal: 'gluteal',
  Biceps: 'biceps',
  Triceps: 'triceps',
  Forearms: 'forearms',
  Abs: 'abs',
}

const SPRITE_FAMILY_DIRECTORIES: Readonly<Record<ThemeFamily, 'spartan' | 'amazonian'>> = {
  spartans: 'spartan',
  amazonians: 'amazonian',
}

export function getExerciseCategorySprite(
  category: ExerciseCategory,
  family: ThemeFamily,
  brightness: ResolvedBrightness,
) {
  return `/exercise-categories/${SPRITE_FAMILY_DIRECTORIES[family]}/${brightness}/${CATEGORY_SPRITE_SLUGS[category]}.png`
}
