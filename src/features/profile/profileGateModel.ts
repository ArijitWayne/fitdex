import { isValidDisplayName } from './displayNameModel.ts'

export type ProfileGate = 'none' | 'onboarding' | 'migration'

export function resolveProfileGate(displayName: string, tutorialCompleted: boolean): ProfileGate {
  if (!tutorialCompleted) return 'onboarding'
  if (!isValidDisplayName(displayName)) return 'migration'
  return 'none'
}
