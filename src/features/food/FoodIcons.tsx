import { Apple, Beef, Candy, Coffee, CookingPot, CupSoda, Drumstick, Egg, Fish, LeafyGreen, Milk, Nut, PackageOpen, Soup, UtensilsCrossed, Wheat } from 'lucide-react'
import type { ComponentType, CSSProperties } from 'react'
import type { FoodMeal, PredefinedFoodCategoryId } from '../../data/models.ts'
import { customCategoryCssColor, resolveCustomCategoryColor } from './foodModel.ts'

const mealFallbacks: Record<FoodMeal, ComponentType<{ size?: number; 'aria-hidden'?: boolean }>> = {
  breakfast: Coffee, lunch: UtensilsCrossed, supper: Soup, dinner: CookingPot,
}
const categoryFallbacks: Record<PredefinedFoodCategoryId, ComponentType<{ size?: number; 'aria-hidden'?: boolean }>> = {
  chicken: Drumstick, eggs: Egg, meat: Beef, 'fish-seafood': Fish, dairy: Milk,
  'grains-rice': Wheat, 'flour-wheat': Wheat, fruits: Apple, vegetables: LeafyGreen,
  'nuts-seeds': Nut, drinks: CupSoda, supplements: PackageOpen, 'desserts-snacks': Candy,
  'processed-foods': PackageOpen, 'junk-food': Candy, other: PackageOpen,
}

const CUSTOM_CATEGORY_ICON_ASSET_PATH = '/food/categories/category-other.webp'
function customCategoryMaskStyle(color?: string) {
  return {
    '--food-custom-icon': `url("${CUSTOM_CATEGORY_ICON_ASSET_PATH}")`,
    '--food-category-color': customCategoryCssColor(color),
  } as CSSProperties
}
function mealIconAssetPath(meal: FoodMeal) { return `/food/meals/meal-${meal}.webp` }
function predefinedCategoryIconAssetPath(categoryId: Exclude<PredefinedFoodCategoryId, 'other'>) {
  return `/food/categories/category-${categoryId}.webp`
}

function Sprite({ src, label, Fallback }: { src: string; label: string; Fallback: ComponentType<{ size?: number; 'aria-hidden'?: boolean }> }) {
  return <span className="food-sprite" role="img" aria-label={label}>
    <img src={src} alt="" onError={(event) => { event.currentTarget.hidden = true }} />
    <Fallback size={24} aria-hidden={true} />
  </span>
}

export function MealIcon({ meal }: { meal: FoodMeal }) {
  return <Sprite src={mealIconAssetPath(meal)} label={`${meal} meal`} Fallback={mealFallbacks[meal]} />
}

export function CustomFoodCategoryIcon({ label, color }: { label: string; color?: string }) {
  return <span className="food-sprite food-custom-sprite" style={customCategoryMaskStyle(color)} data-color={resolveCustomCategoryColor(color)} role="img" aria-label={`${label} category`}>
    <span className="food-custom-mask" aria-hidden="true" />
  </span>
}

export function FoodCategoryIcon({ categoryId, label, color }: { categoryId: PredefinedFoodCategoryId; label: string; color?: string }) {
  if (categoryId === 'other') return <CustomFoodCategoryIcon label={label} color={color} />
  return <Sprite src={predefinedCategoryIconAssetPath(categoryId)} label={`${label} category`} Fallback={categoryFallbacks[categoryId]} />
}
