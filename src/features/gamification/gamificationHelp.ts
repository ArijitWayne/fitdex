import type { GuideStep } from '../help/GuideDialog.tsx'

export const gamificationHelpSteps: readonly GuideStep[] = [{ title: 'How Gamification Works', sections: [
  { label: 'XP, Levels & Ranks', text: 'Fitness milestones earn Lifetime XP. Levels run from 1–100 across nine ranks; Level 100 is Radiant and Lifetime XP can keep growing.' },
  { label: 'How you earn XP', bullets: ['Planned Routine +30', 'Workout Day +30', 'Unplanned Workout +20', 'New Personal Record +15', 'Full Food Log +5', 'Calorie and Protein Targets +5 each when target settings become available'] },
  { label: 'Plan Streak', text: 'Only successful planned training days increase the number. Rest Days and No Plan preserve it without increasing it.' },
  { label: 'Protection', text: 'A Streak Freeze automatically protects one missed planned training day. A Travel/Sickness Pause protects up to 7 days. Both preserve the streak but add no successful day, XP, quest completion, or consistency progress.' },
  { label: 'Plan commitment', text: 'Initial setup is free. One material Weekly Plan change per rolling 12 months keeps your streak. A later material change needs confirmation and resets only the current streak.' },
  { label: 'Daily Quest & Achievements', text: 'Today’s plan supplies one contextual quest. Achievements are permanent trophies and do not add XP.' },
] }]
