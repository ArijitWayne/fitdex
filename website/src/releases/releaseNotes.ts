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

function detectSection(rawLine: string): Section {
  const rawTrimmed = rawLine.trim()
  if (!rawTrimmed) return null

  // Bullet items (e.g. "- Android updates...") are content lines, never section headings
  if (/^[-*+]\s+/.test(rawTrimmed) || /^\d+\.\s+/.test(rawTrimmed)) {
    return null
  }

  const isMarkdownHeader = /^#{1,6}\s+/.test(rawTrimmed)
  const trimmed = cleanLine(rawTrimmed)
  if (!trimmed) return null

  const headingText = trimmed.replace(/:$/, '').toLowerCase()
  if (headingText === 'first public release' || headingText === 'summary') return 'summary'
  if (headingText === 'highlights' || headingText === 'release highlights') return 'new'

  if (
    headingText === "what's new" ||
    headingText === 'new' ||
    headingText === 'new features' ||
    headingText === 'features'
  ) {
    return 'new'
  }

  if (
    headingText === 'improvements' ||
    headingText === 'improved' ||
    headingText === 'improvement'
  ) {
    return 'improved'
  }

  if (
    headingText === 'fixes' ||
    headingText === 'fixed' ||
    headingText === 'bug fixes' ||
    headingText === 'bug fix'
  ) {
    return 'fixed'
  }

  if (
    headingText === 'notes' ||
    headingText === 'other' ||
    headingText === 'misc' ||
    headingText === 'other changes' ||
    headingText === 'release notes'
  ) {
    return 'other'
  }

  if (headingText === 'android' || headingText === 'android platform') return 'android'

  if (isMarkdownHeader) {
    if (headingText.startsWith("what's new") || headingText.startsWith('new')) return 'new'
    if (headingText.startsWith('improvement')) return 'improved'
    if (headingText.startsWith('bug fix') || headingText.startsWith('fix')) return 'fixed'
    if (headingText.startsWith('other')) return 'other'
    if (headingText.startsWith('android')) return 'android'
  }

  return null
}

export function isTechnicalMetadataLine(line: string): boolean {
  const cleaned = cleanLine(line)
  if (!cleaned) return false

  return (
    /^(?:android\s+)?versioncode[:\s]+\d+$/i.test(cleaned) ||
    /^build(?:\s+number)?[:\s]+\d+$/i.test(cleaned) ||
    /^(?:sha[-_]?256(?:\s+checksum)?|checksum|sha)[:\s]+[a-f0-9]{32,64}$/i.test(cleaned) ||
    /^[a-f0-9]{64}$/i.test(cleaned) ||
    /^(?:package\s*(?:id|name)?|application\s*id)[:\s]+[a-z0-9._]+$/i.test(cleaned)
  )
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

    // Ignore standalone technical metadata lines from highlights and changelog lists
    if (isTechnicalMetadataLine(cleaned)) {
      continue
    }

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
    const fallbackLines = lines
      .map((l) => cleanLine(l))
      .filter((l) => Boolean(l) && !isTechnicalMetadataLine(l))
    if (fallbackLines.length > 0) {
      result.other = fallbackLines
      result.highlights = fallbackLines.map((text) => ({ category: 'other', text }))
    }
  }

  return result
}
