export type BootFaction = 'spartan' | 'amazonian';
export type BootWarriorIdentity = BootFaction;

export type WarriorFrame = 1 | 2 | 3 | 4;
export type BootFrame = WarriorFrame;

export type MeterLevel = 0 | 1 | 2 | 3 | 4;

export interface BootSequenceProps {
  faction: BootFaction;
  onComplete: () => void;
}
