// oxlint-disable react/only-export-components -- exported format helpers shared between changelog view and tests.
import { useState } from 'react'
import type { ReleaseState } from './releases/types'

export function formatDate(isoString?: string | null): string {
  if (!isoString) return 'Available with public release'
  try {
    const date = new Date(isoString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  } catch {
    return isoString
  }
}

export function formatReleaseDate(isoString?: string | null): string {
  if (!isoString) return 'DATE UNAVAILABLE'
  try {
    return new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(new Date(isoString)).toUpperCase()
  } catch {
    return formatDate(isoString).toUpperCase()
  }
}

export function formatBytes(bytes?: number): string {
  if (!bytes || isNaN(bytes)) return ''
  const mb = bytes / (1024 * 1024)
  return `${mb.toFixed(1)} MB`
}

export function CopyButton({ text, label = 'COPY' }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text)
      } else {
        const textArea = document.createElement('textarea')
        textArea.value = text
        textArea.style.position = 'fixed'
        textArea.style.left = '-9999px'
        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()
        document.execCommand('copy')
        document.body.removeChild(textArea)
      }
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Graceful fallback without throwing
    }
  }

  return (
    <button
      type="button"
      className={`btn-copy ${copied ? 'copied' : ''}`}
      onClick={handleCopy}
      aria-label="Copy SHA-256 checksum to clipboard"
    >
      <span aria-hidden="true">⧉</span>
      <span className="copy-text">{copied ? 'COPIED ✓' : label}</span>
    </button>
  )
}

type ChangelogViewProps = {
  releaseState: ReleaseState & { reload: () => Promise<void> }
  onNavigate: (path: string) => void
}

export function ChangelogView({ releaseState, onNavigate }: ChangelogViewProps) {
  const { status, releases, error, reload } = releaseState

  return (
    <section className="section changelog-hero" id="top">
      <div className="shell">
        <header className="changelog-header-card">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a
              href="/"
              className="breadcrumb-link"
              onClick={(e) => {
                e.preventDefault()
                onNavigate('/')
              }}
            >
              HOME
            </a>
            <span className="sep" aria-hidden="true">/</span>
            <span className="cur" aria-current="page">CHANGELOG</span>
          </nav>

          <div className="changelog-title-row">
            <div>
              <p className="eyebrow">CHANGELOG // RELEASE ARCHIVE</p>
              <h1>FITDEX RELEASE HISTORY</h1>
              <p className="lede">Published FitDex application releases, newest first.</p>
            </div>
            <div className="archive-stats-box" aria-label="Release Archive Metrics">
              <div className="stat-cell">
                <span className="stat-num">{releases.length}</span>
                <span className="stat-lbl">PUBLISHED</span>
              </div>
              <div className="stat-cell">
                <span className="stat-num">{releases[0]?.version ? `v${releases[0].version}` : 'v1.0.0'}</span>
                <span className="stat-lbl">CURRENT</span>
              </div>
              <div className="stat-cell">
                <span className="stat-num">{status === 'loading' ? 'SYNCING' : status === 'error' ? 'OFFLINE' : 'STABLE'}</span>
                <span className="stat-lbl">CHANNEL</span>
              </div>
            </div>
          </div>

          <div className="technical-notice">
            <span className="notice-icon" aria-hidden="true">ℹ</span>
            <span>
              This archive reflects published FitDex application releases. Regular repository commits, documentation edits, and developer refactors do not appear here.
            </span>
          </div>
        </header>

        {status === 'loading' && (
          <div className="changelog-status-container" aria-live="polite">
            <div className="tactical-status-ticker">
              <span className="ticker-pulse" aria-hidden="true" />
              <span>SYNCING RELEASE REPOSITORY // CONNECTING TO GITHUB...</span>
            </div>
            <div className="skeleton-panel">
              <div className="skeleton-line h-lg w-40" />
              <div className="skeleton-line w-25" />
              <div className="skeleton-box" />
              <div className="skeleton-row">
                <div className="skeleton-btn" />
                <div className="skeleton-btn" />
              </div>
            </div>
          </div>
        )}

        {status === 'error' && (
          <div className="tactical-error-box" role="alert">
            <div className="error-header">
              <span className="error-symbol" aria-hidden="true">⚠</span>
              <span className="error-badge">DATA FEED OFFLINE</span>
              <span className="error-code">// CODE: GITHUB_API_SYNC_FAILED</span>
            </div>
            <h3>RELEASE DATA UNAVAILABLE</h3>
            <p className="muted">{error || 'Release information could not be retrieved right now.'}</p>
            <div className="error-actions">
              <button className="button" type="button" onClick={() => reload()}>
                RETRY SYNC ↻
              </button>
              <a
                className="button secondary"
                href="https://github.com/ArijitWayne/fitdex/releases"
                target="_blank"
                rel="noreferrer"
              >
                VIEW DIRECTLY ON GITHUB ↗
              </a>
            </div>
          </div>
        )}

        {status === 'success' && releases.length === 0 && (
          <div className="empty-archive-panel">
            <div className="empty-status-pill">PRE-RELEASE PHASE // NO PUBLIC RELEASES YET</div>
            <h2>NO PUBLIC RELEASES YET.</h2>
            <p className="lede">FitDex v1.0.0 is being prepared for its first public release.</p>
            <p className="muted">
              All public application versions, signed Android APK artifacts, and SHA-256 checksums will be archived chronologically in this stream once published to GitHub Releases.
            </p>
            <div className="empty-actions">
              <button
                className="button"
                type="button"
                onClick={() => onNavigate('/')}
              >
                RETURN HOME
              </button>
              <a
                className="button secondary"
                href="https://github.com/ArijitWayne/fitdex"
                target="_blank"
                rel="noreferrer"
              >
                VIEW REPOSITORY ON GITHUB ↗
              </a>
            </div>
          </div>
        )}

        {status === 'success' && releases.length > 0 && (
          <div className="archive-stream" aria-label="Chronological releases stream">
            {releases.map((rel, index) => {
              const isLatest = index === 0
              const highlights = (rel.releaseNotes.highlights ?? []).filter((highlight) => highlight.category !== 'other')
              const highlightGroups = ['new', 'improved', 'android', 'fixed'] as const
              const highlightGroupLabels = {
                new: 'NEW FEATURES',
                improved: 'IMPROVEMENTS',
                android: 'ANDROID',
                fixed: 'FIXES',
              } as const
              const isAndroidPackagingNote = (text: string) => /^Exercise MP4s are excluded/i.test(text)

              return (
                <article
                  key={rel.tag}
                  id={isLatest ? 'latest' : `tag-${rel.tag}`}
                  className={`release-entry ${isLatest ? 'latest-entry' : ''}`}
                >
                  <header className="entry-header">
                    <div>
                      <div className="version-row">
                        <span className="entry-version">v{rel.version}</span>
                        {isLatest && <span className="release-status">LATEST STABLE BUILD</span>}
                      </div>
                      <div className="entry-build-meta">
                        <span>BUILD {rel.versionCode ?? '—'}</span>
                        <span>ANDROID VERSIONCODE: {rel.versionCode ?? '—'}</span>
                      </div>
                    </div>
                    <div className="entry-published">
                      <span>PUBLISHED</span>
                      <time dateTime={rel.publishedAt}>{formatReleaseDate(rel.publishedAt)}</time>
                    </div>
                  </header>

                  <section className="release-highlights" aria-labelledby={`highlights-${rel.tag}`}>
                    <p className="eyebrow" id={`highlights-${rel.tag}`}>RELEASE HIGHLIGHTS</p>
                    {rel.releaseNotes.summary ? <p className="entry-summary">{rel.releaseNotes.summary}</p> : null}
                    {highlights.length > 0 ? <div className="highlight-groups">{highlightGroups.map((category) => {
                      const items = highlights.filter((highlight) => category === 'android'
                        ? highlight.category === 'android' || (highlight.category === 'improved' && isAndroidPackagingNote(highlight.text))
                        : highlight.category === category && !(category === 'improved' && isAndroidPackagingNote(highlight.text)))
                      if (items.length === 0) return null
                      return (
                        <section className="highlight-group" key={category} aria-label={highlightGroupLabels[category]}>
                          <h3 className="highlight-group-heading">
                            <span className={`category-badge cat-${category}`}>{category.toUpperCase()}</span>
                            {highlightGroupLabels[category]}
                          </h3>
                          <ul>
                            {items.map((highlight, highlightIndex) => <li key={`${category}:${highlightIndex}`}>{highlight.text}</li>)}
                          </ul>
                        </section>
                      )
                    })}</div> : <p className="entry-summary">Release details are available on GitHub.</p>}
                  </section>

                  <footer className="entry-footer">
                    <div className="action-row">
                      {rel.apkDownloadUrl ? (
                        <a
                          className="button download-btn"
                          href={rel.apkDownloadUrl}
                          aria-label={`Download APK ${rel.apkSize ? `(${formatBytes(rel.apkSize)})` : ''}`}
                        >
                          <span className="btn-primary-text">DOWNLOAD APK</span>
                          {rel.apkSize ? (
                            <span className="btn-meta-badge">{formatBytes(rel.apkSize)}</span>
                          ) : null}
                        </a>
                      ) : (
                        <a
                          className="button secondary"
                          href={rel.githubReleaseUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          VIEW RELEASE ON GITHUB
                        </a>
                      )}

                      <a
                        className="button secondary"
                        href={rel.githubReleaseUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        VIEW FULL CHANGELOG ↗
                      </a>
                      <a
                        className="text-link"
                        href={rel.githubReleaseUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        GITHUB RELEASE ↗
                      </a>
                    </div>

                    {rel.apkDownloadUrl && <p className="release-trust">SIGNED RELEASE // {rel.sha256 ? 'SHA-256 VERIFIED' : 'CHECKSUM AVAILABLE ON GITHUB'}</p>}

                    {rel.sha256 && (
                      <div className="checksum-block compact">
                        <div className="checksum-label-row">
                          <span className="checksum-title">SHA-256 CHECKSUM</span>
                          <span className="checksum-filename">{rel.apkFileName || `fitdex.${rel.version}.apk`}</span>
                        </div>
                        <div className="checksum-box">
                          <code className="checksum-hash">{rel.sha256}</code>
                          <CopyButton text={rel.sha256} />
                        </div>
                      </div>
                    )}
                  </footer>
                </article>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
