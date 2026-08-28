import { isValidDisplayName } from './displayNameModel.ts'

export type ProfileGate = 'none' | 'onboarding' | 'migration'

export function resolveProfileGate(displayName: string, tutorialCompleted: boolean): ProfileGate {
  if (isValidDisplayName(displayName)) return 'none'
  return tutorialCompleted ? 'migration' : 'onboarding'
}
