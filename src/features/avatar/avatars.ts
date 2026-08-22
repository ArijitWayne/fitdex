export type AvatarFaction = 'spartans' | 'amazonians'

export interface AvatarConfig {
  id: string
  name: string
  faction: AvatarFaction
  assetPath: string
  archetype: string
  tagline: string
  weaponStyle?: string
  displayLabel?: string
}

export const AVATARS: readonly AvatarConfig[] = [
  { id: 'aster', name: 'Aster', faction: 'spartans', assetPath: '/avatars/spartans/aster.png', archetype: 'The Athlete', tagline: 'Move fast. Train hard. Stay versatile.', weaponStyle: 'Bow & Arrow', displayLabel: 'Spartan' },
  { id: 'leonidas', name: 'Leonidas', faction: 'spartans', assetPath: '/avatars/spartans/leonidas.png', archetype: 'The Leader', tagline: 'Lead with discipline. Finish what you start.', weaponStyle: 'Spear & Shield', displayLabel: 'Spartan' },
  { id: 'brasidas', name: 'Brasidas', faction: 'spartans', assetPath: '/avatars/spartans/brasidas.png', archetype: 'The Competitor', tagline: 'Chase the next challenge. Beat yesterday.', weaponStyle: 'Sword & Shield', displayLabel: 'Spartan' },
  { id: 'artemis', name: 'Artemis', faction: 'amazonians', assetPath: '/avatars/amazonians/artemis.png', archetype: 'The Explorer', tagline: 'Keep moving. Try more. Find what drives you.', weaponStyle: 'Bow & Arrow', displayLabel: 'Amazonian' },
  { id: 'athena', name: 'Athena', faction: 'amazonians', assetPath: '/avatars/amazonians/athena.png', archetype: 'The Strategist', tagline: 'Train with purpose. Track every move.', weaponStyle: 'Sword & Shield', displayLabel: 'Amazonian' },
  { id: 'hippolyta', name: 'Hippolyta', faction: 'amazonians', assetPath: '/avatars/amazonians/hippolyta.png', archetype: 'The Powerhouse', tagline: 'Build strength. Own the challenge.', weaponStyle: 'Spear & Shield', displayLabel: 'Amazonian' },
] as const

const historicalAvatarIds: Record<string, string> = {
  ajax: 'brasidas',
  hector: 'aster',
  lysander: 'brasidas',
  nyx: 'hippolyta',
  antiope: 'hippolyta',
}

export function getAvatar(id: string | null) {
  return AVATARS.find((avatar) => avatar.id === id)
}

export function migrateAvatarId(id: string | null) {
  if (!id) return null
  return historicalAvatarIds[id] ?? id
}

export function getDefaultAvatar(faction: AvatarFaction) {
  return faction === 'amazonians' ? getAvatar('artemis')! : getAvatar('leonidas')!
}
