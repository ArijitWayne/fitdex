import type { ReleaseHighlight, ReleaseNotes } from './types'

type CategoryKey = ReleaseHighlight['category']
type Section = CategoryKey | 'summary' | null

function cleanLine(raw: string): string {
  return raw
    .replace(/^[-*+]\s+/, '')
    .replace(/^\d+\.\s+/, '')
    .replace(/^#{1,6}\s+/, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[`*_]/g, '')
    .trim()
}

function detectSection(line: string): Section {
  const trimmed = cleanLine(line)
  if (!trimmed) return null

  const headingText = trimmed.replace(/:$/, '').toLowerCase()
  if (headingText === 'first public release' || headingText === 'summary') return 'summary'
  if (headingText === 'highlights') return 'new'

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

  if (headingText === 'android' || headingText.startsWith('android ')) return 'android'

  return null
}

export function parseReleaseNotes(bodyText: string): ReleaseNotes {
  if (!bodyText || !bodyText.trim()) {
    return {}
  }

  const lines = bodyText.split(/\r?\n/)
  const categories: Record<Exclude<CategoryKey, 'android'>, string[]> = {
    new: [],
    improved: [],
    fixed: [],
    other: [],
  }
  const highlights: ReleaseHighlight[] = []
  let currentSection: Section = null
  let summary: string | undefined

  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed) continue

    // Ignore top-level title header like "# FitDex v1.0.0" or "FitDex v1.0.0"
    if (/^#{1,2}\s+FitDex\s+v?\d+/i.test(trimmed)) {
      continue
    }

    const detected = detectSection(trimmed)
    if (detected) {
      currentSection = detected
      continue
    }

    const cleaned = cleanLine(trimmed)
    if (!cleaned) continue

    if (currentSection === 'summary') {
      summary ||= cleaned
      continue
    }

    const category = currentSection ?? 'other'
    const resolvedCategory = category === 'android' && /^Exercise MP4s are excluded/i.test(cleaned) ? 'improved' : category
    highlights.push({ category: resolvedCategory, text: cleaned })
    if (resolvedCategory !== 'android') categories[resolvedCategory].push(cleaned)
  }

  const result: ReleaseNotes = {}
  if (summary) result.summary = summary
  if (highlights.length > 0) result.highlights = highlights
  if (categories.new.length > 0) result.new = categories.new
  if (categories.improved.length > 0) result.improved = categories.improved
  if (categories.fixed.length > 0) result.fixed = categories.fixed
  if (categories.other.length > 0) result.other = categories.other

  if (!result.highlights && !result.summary) {
    const fallbackLines = lines.map((l) => cleanLine(l)).filter(Boolean)
    if (fallbackLines.length > 0) {
      result.other = fallbackLines
      result.highlights = fallbackLines.map((text) => ({ category: 'other', text }))
    }
  }

  return result
}
