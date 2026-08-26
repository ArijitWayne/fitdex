import { deviceStorage } from '../../platform/deviceStorage.ts'

export const TUTORIAL_COMPLETE_KEY = 'fitdex.tutorial.completed'

export function hasCompletedTutorial() {
  return deviceStorage.get(TUTORIAL_COMPLETE_KEY) === 'true'
}

export function completeTutorial() {
  deviceStorage.set(TUTORIAL_COMPLETE_KEY, 'true')
}
