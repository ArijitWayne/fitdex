import type { ReleaseNotes } from './types'

type CategoryKey = 'new' | 'improved' | 'fixed' | 'other'

function cleanLine(raw: string): string {
  return raw
    .replace(/^[-*+]\s+/, '')
    .replace(/^\d+\.\s+/, '')
    .trim()
}

function detectHeadingCategory(line: string): CategoryKey | null {
  const trimmed = line.trim()
  if (!trimmed) return null

  // Match markdown headings (# H1, ## H2, ### H3, #### H4) or trailing colons
  const match = trimmed.match(/^(?:#{1,6}\s+)?(.+?):?$/)
  if (!match) return null

  const headingText = match[1].trim().toLowerCase()

  if (
    headingText === "what's new" ||
    headingText === 'new' ||
    headingText.startsWith("what's new") ||
    headingText.startsWith('new features') ||
    headingText === 'features'
  ) {
    return 'new'
  }

  if (
    headingText === 'improvements' ||
    headingText === 'improved' ||
    headingText.startsWith('improvement')
  ) {
    return 'improved'
  }

  if (
    headingText === 'fixes' ||
    headingText === 'fixed' ||
    headingText === 'bug fixes' ||
    headingText.startsWith('bug fix')
  ) {
    return 'fixed'
  }

  if (
    headingText === 'notes' ||
    headingText === 'other' ||
    headingText === 'misc' ||
    headingText.startsWith('other changes')
  ) {
    return 'other'
  }

  return null
}

export function parseReleaseNotes(bodyText: string): ReleaseNotes {
  if (!bodyText || !bodyText.trim()) {
    return {}
  }

  const lines = bodyText.split(/\r?\n/)
  const categories: Record<CategoryKey, string[]> = {
    new: [],
    improved: [],
    fixed: [],
    other: [],
  }

  let currentCategory: CategoryKey | null = null
  const uncategorizedLines: string[] = []

  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed) continue

    // Ignore top-level title header like "# FitDex v1.0.0" or "FitDex v1.0.0"
    if (/^#{1,2}\s+FitDex\s+v?\d+/i.test(trimmed)) {
      continue
    }

    const detected = detectHeadingCategory(trimmed)
    if (detected) {
      currentCategory = detected
      continue
    }

    const cleaned = cleanLine(trimmed)
    if (!cleaned) continue

    if (currentCategory) {
      categories[currentCategory].push(cleaned)
    } else {
      uncategorizedLines.push(cleaned)
    }
  }

  // If items were detected under categories, but some lines were at the top before any heading,
  // put those top lines in `other`.
  if (uncategorizedLines.length > 0) {
    categories.other.unshift(...uncategorizedLines)
  }

  const result: ReleaseNotes = {}
  if (categories.new.length > 0) result.new = categories.new
  if (categories.improved.length > 0) result.improved = categories.improved
  if (categories.fixed.length > 0) result.fixed = categories.fixed
  if (categories.other.length > 0) result.other = categories.other

  // Fallback: If nothing was parsed (e.g. unexpected structure), keep the original lines safely in other
  if (!result.new && !result.improved && !result.fixed && !result.other) {
    const fallbackLines = lines.map((l) => cleanLine(l)).filter(Boolean)
    if (fallbackLines.length > 0) {
      result.other = fallbackLines
    }
  }

  return result
}
