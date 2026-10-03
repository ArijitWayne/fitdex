import React, { useEffect, useMemo, useRef, useState } from 'react';
import type { AppRelease } from './updaterModel';
import { fetchReleaseHistory, handoffApkDownload } from './updaterService';
import { parseReleaseNotes, parseInlineMarkdown, type InlineToken } from './releaseNotesParser';
import { APP_VERSION, APP_BUILD_NUMBER } from '../../appVersion';
import { useBackNavigation } from '../navigation/useBackNavigation';

interface ReleaseNotesModalProps {
  onClose: () => void;
}

function renderTokens(tokens: InlineToken[]): React.ReactNode {
  return tokens.map((token, idx) => {
    if (token.type === 'bold') {
      return <strong key={idx}>{token.text}</strong>;
    }
    if (token.type === 'code') {
      return <code key={idx} className="inline-code">{token.text}</code>;
    }
    return <React.Fragment key={idx}>{token.text}</React.Fragment>;
  });
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

  const latestRelease: AppRelease = useMemo(() => {
    if (releases.length > 0) {
      return releases[0];
    }
    return {
      version: APP_VERSION,
      versionCode: APP_BUILD_NUMBER,
      tag: `v${APP_VERSION}`,
      publishedAt: new Date().toISOString(),
      githubReleaseUrl: 'https://github.com/ArijitWayne/fitdex',
      releaseNotes: `### WHAT'S NEW\n- Local-first workout engine and progression logging.\n- Exercise Dex, retro sound FX, and dual-faction themes.\n- Cold-launch boot vignette and background update engine.`,
    };
  }, [releases]);

  const parsedNotes = useMemo(() => {
    return parseReleaseNotes(latestRelease.releaseNotes);
  }, [latestRelease.releaseNotes]);

  const downloadRelease = async (release: AppRelease) => {
    setDownloadingTag(release.tag);
    await handoffApkDownload(release);
    setDownloadingTag(null);
  };

  const isBaseline = releases.length === 0 && !loading;

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
            <strong id="notes-dialog-title">LATEST RELEASE</strong>
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
            <div className="release-loading-state" style={{ padding: '24px', textAlign: 'center', color: 'var(--color-text-muted)' }}>
              SCANNING LATEST RELEASE...
            </div>
          ) : (
            <article className={`retro-release-card ${isBaseline ? 'local-baseline-card' : ''}`}>
              <header className="release-card-header">
                <div className="release-card-version">
                  <strong>v{latestRelease.version}</strong>
                  {latestRelease.versionCode ? <span className="release-badge">BUILD {latestRelease.versionCode}</span> : null}
                  <span className="release-badge latest">{isBaseline ? 'LOCAL BASELINE' : 'LATEST'}</span>
                </div>
                <time className="release-date" dateTime={latestRelease.publishedAt}>
                  {formatPublishedDate(latestRelease.publishedAt)}
                </time>
              </header>

              <div className="release-telemetry-grid">
                <div className="telemetry-item">
                  <span className="telemetry-label">VERSION</span>
                  <strong className="telemetry-val">{latestRelease.version}</strong>
                </div>
                {latestRelease.versionCode ? (
                  <div className="telemetry-item">
                    <span className="telemetry-label">BUILD</span>
                    <strong className="telemetry-val">{latestRelease.versionCode}</strong>
                  </div>
                ) : null}
                <div className="telemetry-item">
                  <span className="telemetry-label">PUBLISHED</span>
                  <span className="telemetry-val">{formatPublishedDate(latestRelease.publishedAt)}</span>
                </div>
                {latestRelease.apkSize ? (
                  <div className="telemetry-item">
                    <span className="telemetry-label">APK SIZE</span>
                    <span className="telemetry-val">{(latestRelease.apkSize / (1024 * 1024)).toFixed(1)} MB</span>
                  </div>
                ) : null}
              </div>

              {parsedNotes.summary.length > 0 ? (
                <div className="release-card-summary">
                  {parsedNotes.summary.map((paragraph, idx) => (
                    <p key={idx} className="release-summary-paragraph">
                      {renderTokens(parseInlineMarkdown(paragraph))}
                    </p>
                  ))}
                </div>
              ) : null}

              {parsedNotes.sections.length > 0 ? (
                <div className="release-sections-stack">
                  {parsedNotes.sections.map((section, sIdx) => (
                    <section className={`release-archive-section ${section.type}`} key={sIdx}>
                      <div className="release-section-header">
                        <span className={`release-section-tag tag-${section.type}`}>{section.title}</span>
                      </div>
                      {section.paragraphs.map((p, pIdx) => (
                        <p key={pIdx} className="release-note-paragraph">
                          {renderTokens(parseInlineMarkdown(p))}
                        </p>
                      ))}
                      {section.items.length > 0 ? (
                        <ul className="release-note-list">
                          {section.items.map((item, iIdx) => (
                            <li key={iIdx} className="release-note-item">
                              {renderTokens(parseInlineMarkdown(item))}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </section>
                  ))}
                </div>
              ) : null}

              {latestRelease.apkDownloadUrl ? (
                <div className="release-card-actions">
                  <button
                    type="button"
                    className="cmd-btn primary compact release-download-btn"
                    onClick={() => void downloadRelease(latestRelease)}
                    disabled={downloadingTag === latestRelease.tag}
                  >
                    {downloadingTag === latestRelease.tag
                      ? 'OPENING DOWNLOAD...'
                      : `DOWNLOAD APK${latestRelease.apkSize ? ` (${(latestRelease.apkSize / (1024 * 1024)).toFixed(1)} MB)` : ''}`}
                  </button>
                </div>
              ) : null}
            </article>
          )}
        </div>
      </section>
    </div>
  );
};
