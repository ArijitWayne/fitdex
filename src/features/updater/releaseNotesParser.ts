export type ReleaseSectionType = 'highlights' | 'new' | 'improvements' | 'fixes' | 'general';

export interface ParsedReleaseSection {
  type: ReleaseSectionType;
  title: string;
  items: string[];
  paragraphs: string[];
}

export interface ParsedReleaseNotes {
  summary: string[];
  sections: ParsedReleaseSection[];
}

export interface InlineToken {
  type: 'text' | 'bold' | 'code';
  text: string;
}

const SECTION_TITLE_MAP: Record<ReleaseSectionType, string> = {
  highlights: 'RELEASE HIGHLIGHTS',
  new: "WHAT'S NEW",
  improvements: 'IMPROVEMENTS',
  fixes: 'FIXES',
  general: 'NOTES',
};

export function classifyHeading(headingText: string): { type: ReleaseSectionType; title: string } | null {
  const clean = headingText.replace(/^#{1,6}\s*/, '').replace(/:$/, '').trim();
  const upper = clean.toUpperCase();

  // Ignore document-level title or version tag headings
  if (/^(FITDEX\s+)?RELEASE\s+NOTES$/i.test(upper) || /^V?\d+\.\d+(\.\d+)?/i.test(upper)) {
    return null;
  }

  if (/^(RELEASE\s+)?HIGHLIGHTS?$/i.test(upper)) {
    return { type: 'highlights', title: SECTION_TITLE_MAP.highlights };
  }
  if (/^(WHAT'?S\s+NEW|WHATS\s+NEW|NEW(\s+FEATURES?)?)$/i.test(upper)) {
    return { type: 'new', title: SECTION_TITLE_MAP.new };
  }
  if (/^(IMPROVEMENTS?|ENHANCEMENTS?|IMPROVED)$/i.test(upper)) {
    return { type: 'improvements', title: SECTION_TITLE_MAP.improvements };
  }
  if (/^(BUG\s*FIXES|FIXES|FIXED)$/i.test(upper)) {
    return { type: 'fixes', title: SECTION_TITLE_MAP.fixes };
  }

  return { type: 'general', title: clean.toUpperCase() };
}

export function isMetadataOrNoiseLine(line: string): boolean {
  const trimmed = line.trim();
  if (!trimmed) return true;
  if (/^---+|^\*\*\*+$/.test(trimmed)) return true;

  const clean = trimmed
    .replace(/^[-*•]\s+/, '')
    .replace(/^\d+\.\s+/, '')
    .replace(/[`*_]/g, '')
    .trim();

  if (!clean) return true;

  return (
    /^(?:android\s+)?versioncode[:\s]+\d+$/i.test(clean) ||
    /^build(?:\s+number)?[:\s]+\d+$/i.test(clean) ||
    /^(?:sha[-_]?256(?:\s+checksum)?|checksum|sha)[:\s]+[a-f0-9]{32,64}$/i.test(clean) ||
    /^[a-f0-9]{64}$/i.test(clean) ||
    /^(?:package\s*(?:id|name)?|application\s*id)[:\s]+[a-z0-9._]+$/i.test(clean) ||
    /^(?:released|date|apk|release\s*url)[:\s]+.*$/i.test(clean)
  );
}

export function parseReleaseNotes(notes: string): ParsedReleaseNotes {
  if (!notes || !notes.trim()) {
    return { summary: [], sections: [] };
  }

  const lines = notes.split(/\r?\n/);
  const summary: string[] = [];
  const sections: ParsedReleaseSection[] = [];
  let currentSection: ParsedReleaseSection | null = null;

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) continue;

    // Check if line is a Markdown heading (e.g. ### NEW)
    if (/^#{1,6}\s+/.test(line)) {
      const heading = classifyHeading(line);
      if (heading) {
        currentSection = {
          type: heading.type,
          title: heading.title,
          items: [],
          paragraphs: [],
        };
        sections.push(currentSection);
      }
      continue;
    }

    // Skip metadata/noise headers (SHA-256, versionCode, etc.) as they are displayed in the metadata grid
    if (isMetadataOrNoiseLine(line)) {
      continue;
    }

    // Check if line is a bullet item
    if (/^[-*•]\s+/.test(line)) {
      const itemText = line.replace(/^[-*•]\s+/, '').trim();
      if (itemText) {
        if (!currentSection) {
          currentSection = {
            type: 'general',
            title: 'CHANGES',
            items: [],
            paragraphs: [],
          };
          sections.push(currentSection);
        }
        currentSection.items.push(itemText);
      }
      continue;
    }

    // Otherwise it's a paragraph
    if (currentSection) {
      currentSection.paragraphs.push(line);
    } else {
      summary.push(line);
    }
  }

  return {
    summary,
    sections: sections.filter((s) => s.items.length > 0 || s.paragraphs.length > 0),
  };
}

export function parseInlineMarkdown(text: string): InlineToken[] {
  const tokens: InlineToken[] = [];
  const regex = /(\*\*.*?\*\*|__.*?__|`.*?`)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      tokens.push({ type: 'text', text: text.substring(lastIndex, match.index) });
    }
    const token = match[0];
    if (token.startsWith('`') && token.endsWith('`')) {
      tokens.push({ type: 'code', text: token.slice(1, -1) });
    } else if ((token.startsWith('**') && token.endsWith('**')) || (token.startsWith('__') && token.endsWith('__'))) {
      tokens.push({ type: 'bold', text: token.slice(2, -2) });
    }
    lastIndex = match.index + token.length;
  }

  if (lastIndex < text.length) {
    tokens.push({ type: 'text', text: text.substring(lastIndex) });
  }

  return tokens.length > 0 ? tokens : [{ type: 'text', text }];
}

