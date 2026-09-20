import React, { useEffect, useRef, useState } from 'react';
import type { AppRelease } from './updaterModel';
import { fetchReleaseHistory, handoffApkDownload } from './updaterService';
import { APP_VERSION, APP_BUILD_NUMBER } from '../../appVersion';
import { useBackNavigation } from '../navigation/useBackNavigation';

interface ReleaseNotesModalProps {
  onClose: () => void;
}

type ReleaseSection = 'new' | 'improvements' | 'fixes';

const sectionHeadings: Record<ReleaseSection, string> = {
  new: "WHAT'S NEW",
  improvements: 'IMPROVEMENTS',
  fixes: 'FIXES',
};

function releaseSectionForHeading(line: string): ReleaseSection | null {
  const heading = line.replace(/^#{1,6}\s*/, '').replace(/:$/, '').trim().toUpperCase();
  if (heading === 'NEW' || heading === "WHAT'S NEW" || heading === 'WHATS NEW') return 'new';
  if (heading === 'IMPROVED' || heading === 'IMPROVEMENTS') return 'improvements';
  if (heading === 'FIXED' || heading === 'FIXES') return 'fixes';
  return null;
}

function splitReleaseNotes(notes: string) {
  const summary: string[] = [];
  const sections: Partial<Record<ReleaseSection, string[]>> = {};
  let currentSection: ReleaseSection | null = null;

  for (const line of notes.split('\n')) {
    const section = releaseSectionForHeading(line);
    if (section) {
      currentSection = section;
      sections[section] ??= [];
    } else if (/^#{1,6}\s+/.test(line)) {
      currentSection = null;
      summary.push(line.replace(/^#{1,6}\s*/, ''));
    } else if (currentSection) {
      sections[currentSection]?.push(line);
    } else {
      summary.push(line);
    }
  }

  return {
    summary: summary.join('\n').trim(),
    sections: (Object.keys(sectionHeadings) as ReleaseSection[])
      .map((section) => ({ section, content: sections[section]?.join('\n').trim() }))
      .filter((item): item is { section: ReleaseSection; content: string } => Boolean(item.content)),
  };
}

function formatPublishedDate(date: string): string {
  return new Date(date).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export const ReleaseNotesModal: React.FC<ReleaseNotesModalProps> = ({ onClose }) => {
  const [releases, setReleases] = useState<AppRelease[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [downloadingTag, setDownloadingTag] = useState<string | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useBackNavigation('release-notes-dialog', true, onClose, 100);

  useEffect(() => {
    closeButtonRef.current?.focus();
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    let active = true;
    fetchReleaseHistory().then((history) => {
      if (active) {
        setReleases(history);
        setLoading(false);
      }
    });
    return () => {
      active = false;
    };
  }, []);

  const downloadRelease = async (release: AppRelease) => {
    setDownloadingTag(release.tag);
    await handoffApkDownload(release);
    setDownloadingTag(null);
  };

  return (
    <div className="guide-backdrop active" role="presentation">
      <section
        className="update-details-dialog release-notes-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="notes-dialog-title"
      >
        <header className="guide-topline release-notes-header">
          <div className="guide-title-box">
            <span className="guide-eyebrow">SETTINGS / RELEASE NOTES</span>
            <strong id="notes-dialog-title">CHANGELOG ARCHIVE</strong>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            className="dialog-close-btn"
            onClick={onClose}
            aria-label="Close release notes"
          >
            ✕
          </button>
        </header>

        <div className="update-dialog-body release-archive-body">
          {loading ? (
            <div style={{ padding: '16px', textAlign: 'center', color: 'var(--color-text-muted)' }}>
              SCANNING RELEASE ARCHIVE...
            </div>
          ) : releases.length > 0 ? (
            releases.map((rel, index) => {
              const notes = splitReleaseNotes(rel.releaseNotes);
              return (
                <article className="retro-release-card" key={rel.tag}>
                  <header className="release-card-header">
                    <div className="release-card-version">
                      <strong>v{rel.version}</strong>
                      {rel.versionCode && <span className="release-badge">BUILD {rel.versionCode}</span>}
                      {index === 0 && <span className="release-badge latest">LATEST</span>}
                    </div>
                    <time className="release-date" dateTime={rel.publishedAt}>{formatPublishedDate(rel.publishedAt)}</time>
                  </header>

                  {notes.summary && <p className="release-card-summary">{notes.summary}</p>}

                  {notes.sections.map(({ section, content }) => (
                    <section className={`release-archive-section ${section}`} key={section}>
                      <h3>{sectionHeadings[section]}</h3>
                      <pre>{content}</pre>
                    </section>
                  ))}

                  {rel.apkDownloadUrl && (
                    <div className="release-card-actions">
                      <button
                        type="button"
                        className="cmd-btn primary compact"
                        onClick={() => void downloadRelease(rel)}
                        disabled={downloadingTag === rel.tag}
                      >
                        {downloadingTag === rel.tag
                          ? 'OPENING DOWNLOAD...'
                          : `DOWNLOAD APK${rel.apkSize ? ` (${(rel.apkSize / (1024 * 1024)).toFixed(1)} MB)` : ''}`}
                      </button>
                    </div>
                  )}
                </article>
              );
            })
          ) : (
            <article className="retro-release-card local-baseline-card">
              <header className="release-card-header">
                <div className="release-card-version">
                  <strong>v{APP_VERSION}</strong>
                  <span className="release-badge">BUILD {APP_BUILD_NUMBER}</span>
                  <span className="release-badge local">LOCAL BASELINE</span>
                  <span className="release-badge">PRE-RELEASE</span>
                </div>
              </header>
              <p className="release-card-summary">Initial local FitDex baseline. No public stable GitHub Release has been published yet.</p>
              <section className="release-archive-section new">
                <h3>INITIAL RELEASE</h3>
                <ul>
                  <li>Local-first workout engine and progression logging.</li>
                  <li>Exercise Dex, retro sound FX, and dual-faction themes.</li>
                  <li>Cold-launch boot vignette and background update engine.</li>
                </ul>
              </section>
            </article>
          )}
        </div>
      </section>
    </div>
  );
};
