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
              const hasNotes = Boolean(
                rel.releaseNotes.new?.length ||
                rel.releaseNotes.improved?.length ||
                rel.releaseNotes.fixed?.length ||
                rel.releaseNotes.other?.length
              )

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
                        {isLatest && <span className="release-status">LATEST</span>}
                        {rel.versionCode && (
                          <span className="build-tag">BUILD {rel.versionCode}</span>
                        )}
                      </div>
                      <div className="entry-meta">
                        <time dateTime={rel.publishedAt}>{formatDate(rel.publishedAt)}</time>
                        <span className="meta-dot" aria-hidden="true">•</span>
                        <span>tag {rel.tag}</span>
                      </div>
                    </div>

                    <div className="entry-quick-actions">
                      <a
                        className="text-link"
                        href={rel.githubReleaseUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        GITHUB RELEASE ↗
                      </a>
                    </div>
                  </header>

                  {hasNotes && (
                    <div className="structured-notes">
                      {rel.releaseNotes.new && rel.releaseNotes.new.length > 0 && (
                        <div className="notes-group">
                          <h3 className="group-heading">
                            <span className="category-badge cat-new">NEW</span>
                            <span>WHAT&apos;S NEW</span>
                          </h3>
                          <ul className="notes-list">
                            {rel.releaseNotes.new.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {rel.releaseNotes.improved && rel.releaseNotes.improved.length > 0 && (
                        <div className="notes-group">
                          <h3 className="group-heading">
                            <span className="category-badge cat-imp">IMPROVED</span>
                            <span>IMPROVEMENTS</span>
                          </h3>
                          <ul className="notes-list">
                            {rel.releaseNotes.improved.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {rel.releaseNotes.fixed && rel.releaseNotes.fixed.length > 0 && (
                        <div className="notes-group">
                          <h3 className="group-heading">
                            <span className="category-badge cat-fix">FIXED</span>
                            <span>BUG FIXES</span>
                          </h3>
                          <ul className="notes-list">
                            {rel.releaseNotes.fixed.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {rel.releaseNotes.other && rel.releaseNotes.other.length > 0 && (
                        <div className="notes-group">
                          <h3 className="group-heading">
                            <span className="category-badge">OTHER</span>
                            <span>NOTES &amp; REVISIONS</span>
                          </h3>
                          <ul className="notes-list">
                            {rel.releaseNotes.other.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}

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
                        GITHUB RELEASE ↗
                      </a>
                    </div>

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
