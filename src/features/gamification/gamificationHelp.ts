import type { GuideStep } from '../help/GuideDialog.tsx'

export const gamificationHelpSteps: readonly GuideStep[] = [{
  title: 'How Gamification Works',
  sections: [
    {
      label: 'XP, Levels & Ranks',
      text: 'Fitness milestones earn Lifetime XP. Levels run from 1–100 across nine ranks from Recruit to Radiant. Level 100 is Radiant, and Lifetime XP continues to grow beyond Level 100.',
    },
    {
      label: 'How you earn XP',
      items: [
        { label: 'Planned Routine', value: '+30 XP', description: 'Complete scheduled training' },
        { label: 'Workout Day', value: '+30 XP', description: 'Complete any workout on a planned workout day' },
        { label: 'Unplanned Workout', value: '+20 XP', description: 'Complete a session outside plan' },
        { label: 'New Personal Record', value: '+15 XP', description: 'Set a qualifying PR' },
        { label: 'Full Food Log', value: '+5 XP', description: 'Log all four meals in a day' },
        { label: 'Calorie Target', value: '+5 XP', description: 'Meet daily calorie target' },
        { label: 'Protein Target', value: '+5 XP', description: 'Hit daily protein target' },
        { label: 'Achievement Unlocked', value: '+50 XP', description: 'Earn a milestone trophy reward' },
      ],
    },
    {
      label: 'Achievements',
      text: 'Achievements are permanent milestone rewards. When a NEW achievement unlocks, +50 XP is awarded once and stacks with the triggering activity. Previously unlocked achievements do not grant repeated XP.',
    },
    {
      label: 'Plan Streak',
      text: 'Only successful planned training days increase your streak. Rest Days and No Plan preserve it without increasing it.',
    },
    {
      label: 'Protection',
      text: 'A Streak Freeze automatically protects one missed planned training day. A Travel/Sickness Pause protects up to 7 days. Both preserve your streak without adding XP or progress.',
    },
    {
      label: 'Plan commitment',
      text: 'Initial setup is free. One material Weekly Plan change per rolling 12 months preserves your streak. A later material change requires confirmation and resets the current streak.',
    },
    {
      label: 'Daily Quests',
      text: 'Today’s plan supplies one contextual quest to keep your daily focus aligned with your goals.',
    },
  ],
}]
