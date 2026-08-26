export type UnitPreference = 'metric' | 'imperial'

export interface UnitContext {
  preference: UnitPreference
  weightLabel: 'kg' | 'lb'
  distanceLabel: 'km' | 'mi'
}

const KG_TO_LB = 2.2046226218
const KM_TO_MI = 0.6213711922

export function getUnitContext(preference: UnitPreference): UnitContext {
  return preference === 'imperial'
    ? { preference, weightLabel: 'lb', distanceLabel: 'mi' }
    : { preference, weightLabel: 'kg', distanceLabel: 'km' }
}

export function displayWeightFromKg(value: number, preference: UnitPreference) {
  return preference === 'imperial' ? value * KG_TO_LB : value
}

export function storeWeightAsKg(value: number, preference: UnitPreference) {
  return preference === 'imperial' ? value / KG_TO_LB : value
}

export function displayDistanceFromKm(value: number, preference: UnitPreference) {
  return preference === 'imperial' ? value * KM_TO_MI : value
}

export function storeDistanceAsKm(value: number, preference: UnitPreference) {
  return preference === 'imperial' ? value / KM_TO_MI : value
}
