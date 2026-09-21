import type { Exercise, WeekdayId } from '../../data/models.ts'
import { builtInExercises } from '../exerciseDex/exerciseData.ts'

export interface ParsedExerciseItem {
  raw: string
  matchedExercise?: Exercise
  exerciseName: string
  sets: number
  reps: string
}

export interface ParsedDayRoutine {
  day: WeekdayId
  dayLabel: string
  title: string
  isRestDay: boolean
  exercises: ParsedExerciseItem[]
}

export const WEEKDAYS_MAP: Array<{ id: WeekdayId; label: string; aliases: string[] }> = [
  { id: 'monday', label: 'Monday', aliases: ['monday', 'mon', 'day 1', 'day1'] },
  { id: 'tuesday', label: 'Tuesday', aliases: ['tuesday', 'tue', 'tues', 'day 2', 'day2'] },
  { id: 'wednesday', label: 'Wednesday', aliases: ['wednesday', 'wed', 'day 3', 'day3'] },
  { id: 'thursday', label: 'Thursday', aliases: ['thursday', 'thu', 'thur', 'thurs', 'day 4', 'day4'] },
  { id: 'friday', label: 'Friday', aliases: ['friday', 'fri', 'day 5', 'day5'] },
  { id: 'saturday', label: 'Saturday', aliases: ['saturday', 'sat', 'day 6', 'day6'] },
  { id: 'sunday', label: 'Sunday', aliases: ['sunday', 'sun', 'day 7', 'day7'] },
]

function normalizeString(str: string): string {
  return str.normalize('NFKD').replace(/[’']/g, '').replace(/[^a-zA-Z0-9]+/g, ' ').trim().toLowerCase()
}

export function stemWord(w: string): string {
  if (w.endsWith('ies')) return w.slice(0, -3) + 'y'
  if (w.endsWith('es') && (w.endsWith('presses') || w.endsWith('raises') || w.endsWith('crunches') || w.endsWith('extensions'))) return w.slice(0, -2)
  if (w.endsWith('s') && !w.endsWith('ss') && !w.endsWith('triceps') && !w.endsWith('biceps')) return w.slice(0, -1)
  if (w.endsWith('ing')) return w.slice(0, -3)
  return w
}

export function cleanSpokenExercise(input: string): string {
  return input
    .toLowerCase()
    .replace(/\btumble\b/g, 'dumbbell')
    .replace(/\bpools?\b/g, 'pull')
    .replace(/\bbreast\b/g, 'press')
    .replace(/\bgirls?\b/g, 'curl')
    .replace(/\bbas\b/g, 'biceps')
    .replace(/\blandline\b/g, 'landmine')
    .replace(/\bdead\s+lift\b/g, 'deadlift')
    .replace(/\bflies\b/g, 'fly')
    .replace(/\binclined\b/g, 'incline')
    .replace(/\bdeclined\b/g, 'decline')
    .replace(/\browing\b/g, 'row')
    .replace(/\btricep\b/g, 'triceps')
    .replace(/\bbicep\b/g, 'biceps')
    .replace(/\bagain\b/g, '')
    .replace(/\bthe\b/g, '')
    .replace(/\babs with cable\b/g, 'cable abs crunch')
    .replace(/^[\s\-*•0-9.)]+/, '')
    .trim()
}

/**
 * Matches an exercise string against Fitdex's 804 built-in exercise catalog.
 */
export function matchCatalogExercise(rawInput: string): Exercise | undefined {
  // Clean off sets, reps, numbers, bullets, brackets
  const cleaned = rawInput
    .replace(/^[\s\-*•0-9.)]+/, '')
    .replace(/(\d+)\s*(?:x|sets?|reps?|\*)\s*(\d+(?:-\d+)?)/gi, '')
    .replace(/\(.*?\)/g, '')
    .replace(/\[.*?\]/g, '')
    .trim()

  const normalized = normalizeString(cleaned)
  if (!normalized) return undefined

  // 1. Exact match on name
  let match = builtInExercises.find((ex) => normalizeString(ex.name) === normalized)
  if (match) return match

  // 2. Exact match on alias
  match = builtInExercises.find((ex) => ex.aliases?.some((alias) => normalizeString(alias) === normalized))
  if (match) return match

  // 3. Phonetically cleaned and stemmed match
  const spokenClean = cleanSpokenExercise(cleaned)
  const words = spokenClean.split(/\s+/).map(stemWord).filter((w) => w.length > 1)
  if (!words.length) return undefined

  // Exact match after phonetic cleaning & stemming
  for (const ex of builtInExercises) {
    const exClean = ex.name.toLowerCase().split(/\s+/).map(stemWord).join(' ')
    if (exClean === words.join(' ')) return ex
  }

  // 4. Token overlap scoring
  let best: Exercise | undefined
  let highestScore = 15 // minimum threshold

  for (const ex of builtInExercises) {
    const exNorm = normalizeString(ex.name)
    const exWords = exNorm.split(/\s+/).map(stemWord)

    let score = 0
    let matchedCount = 0
    for (const w of words) {
      if (exWords.includes(w)) {
        score += 20
        matchedCount++
      } else if (exNorm.includes(w)) {
        score += 10
        matchedCount++
      }
    }

    if (matchedCount === words.length) score += 40
    score -= Math.abs(exWords.length - words.length) * 2

    if (score > highestScore) {
      highestScore = score
      best = ex
    }
  }

  return best
}

/**
 * Extracts sets and reps from exercise lines (e.g. "3x12", "4 sets of 8-10 reps", "3 x 15")
 */
export function extractSetsAndReps(input: string): { sets: number; reps: string; cleanName: string } {
  let sets = 3
  let reps = '12'
  let cleanName = input.replace(/^[\s\-*•0-9.)]+/, '').trim()

  // Match patterns like "3x12", "3 x 8-10", "4 sets of 12 reps", "4 sets 10 reps"
  const pattern1 = /(\d+)\s*(?:x|\*|sets?(?:\s*of)?)\s*(\d+(?:-\d+)?)\s*(?:reps?)?/i
  const match1 = pattern1.exec(input)
  if (match1) {
    sets = Math.min(10, Math.max(1, parseInt(match1[1], 10)))
    reps = match1[2]
    cleanName = cleanName.replace(match1[0], '').trim()
  } else {
    // Check for "4 sets"
    const setsOnly = /(\d+)\s*sets?/i.exec(input)
    if (setsOnly) {
      sets = Math.min(10, Math.max(1, parseInt(setsOnly[1], 10)))
      cleanName = cleanName.replace(setsOnly[0], '').trim()
    }
    // Check for "12 reps"
    const repsOnly = /(\d+(?:-\d+)?)\s*reps?/i.exec(input)
    if (repsOnly) {
      reps = repsOnly[1]
      cleanName = cleanName.replace(repsOnly[0], '').trim()
    }
  }

  // Remove trailing commas, dashes, colons
  cleanName = cleanName.replace(/[:,\-–—\t]+$/, '').trim()

  return { sets, reps, cleanName: cleanName || input.trim() }
}

/**
 * Maps the structured 7-day JSON returned by Cloudflare Workers AI (Gemma 4)
 * into Fitdex's ParsedDayRoutine structures, linking exercises to the built-in catalog.
 */
export function mapAiResponseToWeeklySchedule(rawResponse: any): Record<WeekdayId, ParsedDayRoutine> {
  const result: Record<WeekdayId, ParsedDayRoutine> = {
    monday: { day: 'monday', dayLabel: 'Monday', title: 'Rest Day', isRestDay: true, exercises: [] },
    tuesday: { day: 'tuesday', dayLabel: 'Tuesday', title: 'Rest Day', isRestDay: true, exercises: [] },
    wednesday: { day: 'wednesday', dayLabel: 'Wednesday', title: 'Rest Day', isRestDay: true, exercises: [] },
    thursday: { day: 'thursday', dayLabel: 'Thursday', title: 'Rest Day', isRestDay: true, exercises: [] },
    friday: { day: 'friday', dayLabel: 'Friday', title: 'Rest Day', isRestDay: true, exercises: [] },
    saturday: { day: 'saturday', dayLabel: 'Saturday', title: 'Rest Day', isRestDay: true, exercises: [] },
    sunday: { day: 'sunday', dayLabel: 'Sunday', title: 'Rest Day', isRestDay: true, exercises: [] },
  }

  const daysObj = rawResponse?.days || rawResponse || {}

  for (const { id, label } of WEEKDAYS_MAP) {
    const dayData = daysObj[id]
    if (!dayData) continue

    const isRest = Boolean(dayData.isRest || dayData.isRestDay || !dayData.exercises || !dayData.exercises.length)
    if (isRest) {
      result[id] = {
        day: id,
        dayLabel: label,
        title: dayData.title || 'Rest Day',
        isRestDay: true,
        exercises: [],
      }
      continue
    }

    const exercises: ParsedExerciseItem[] = []
    if (Array.isArray(dayData.exercises)) {
      for (const ex of dayData.exercises) {
        if (!ex) continue
        const rawName = typeof ex === 'string' ? ex : (ex.name || ex.exerciseName || '')
        const sets = typeof ex === 'object' && ex.sets ? Number(ex.sets) : 3
        const reps = typeof ex === 'object' && ex.reps ? String(ex.reps) : '12'

        const matched = matchCatalogExercise(rawName)
        exercises.push({
          raw: `${rawName} ${sets}x${reps}`,
          matchedExercise: matched,
          exerciseName: matched ? matched.name : rawName,
          sets: isNaN(sets) || sets < 1 ? 3 : sets,
          reps: reps || '12',
        })
      }
    }

    result[id] = {
      day: id,
      dayLabel: label,
      title: dayData.title || `${label} Workout`,
      isRestDay: exercises.length === 0,
      exercises,
    }
  }

  return result
}

