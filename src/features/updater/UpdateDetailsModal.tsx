import React, { useEffect, useMemo, useRef, useState } from 'react';
import type { AppRelease } from './updaterModel';
import { handoffApkDownload } from './updaterService';
import { parseReleaseNotes, parseInlineMarkdown, type InlineToken } from './releaseNotesParser';
import { type UpdateDownloadProgress } from './nativeAppInstaller';
import { APP_VERSION, APP_BUILD_NUMBER } from '../../appVersion';
import { useBackNavigation } from '../navigation/useBackNavigation';
import { Capacitor } from '@capacitor/core';

interface UpdateDetailsModalProps {
  release: AppRelease;
  onClose: () => void;
}

type ModalUpdateState = 'idle' | 'downloading' | 'verifying' | 'launchingInstaller' | 'ready' | 'error' | 'checksum_error' | 'install_permission';

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

export const UpdateDetailsModal: React.FC<UpdateDetailsModalProps> = ({
  release,
  onClose,
}) => {
  const [updateState, setUpdateState] = useState<ModalUpdateState>('idle');
  const [downloadProgress, setDownloadProgress] = useState<UpdateDownloadProgress | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useBackNavigation('update-details-dialog', true, onClose, 100);

  useEffect(() => {
    closeButtonRef.current?.focus();
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (updateState !== 'downloading' && updateState !== 'verifying') {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, updateState]);

  const handleDownload = async () => {
    setUpdateState('downloading');
    setErrorMessage(null);
    setDownloadProgress(null);

    const result = await handoffApkDownload(
      release,
      (progress) => {
        setDownloadProgress(progress);
      },
      (status) => {
        setUpdateState(status);
      },
    );

    if (result.success) {
      if (Capacitor.isNativePlatform()) {
        setUpdateState('ready');
      } else {
        setUpdateState('idle');
      }
    } else {
      setErrorMessage(result.error || 'Update failed.');
      if (result.checksumMismatch) {
        setUpdateState('checksum_error');
      } else if (result.installPermissionRequired) {
        setUpdateState('install_permission');
      } else {
        setUpdateState('error');
      }
    }
  };

  const formattedDate = release.publishedAt
    ? new Date(release.publishedAt).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    : 'Unknown';

  const isNative = Capacitor.isNativePlatform();
  const apkSizeMb = release.apkSize
    ? `${(release.apkSize / (1024 * 1024)).toFixed(1)} MB`
    : null;

  const parsedNotes = useMemo(() => {
    return parseReleaseNotes(release.releaseNotes);
  }, [release.releaseNotes]);

  const isBusy = updateState === 'downloading' || updateState === 'verifying' || updateState === 'launchingInstaller';

  return (
    <div className="guide-backdrop active" role="presentation">
      <section
        className="update-details-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="update-dialog-title"
      >
        <header className="guide-topline update-dialog-header">
          <div className="guide-title-box">
            <span className="guide-eyebrow">CARTRIDGE UPGRADE</span>
            <strong id="update-dialog-title">FITDEX V{release.version}</strong>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            className="dialog-close-btn update-close-btn"
            onClick={onClose}
            disabled={isBusy}
            aria-label="Close update details"
          >
            ✕
          </button>
        </header>

        <div className="update-meta-grid">
          <div className="update-meta-card">
            <span className="update-meta-label">INSTALLED</span>
            <strong className="update-meta-value">v{APP_VERSION} (Build {APP_BUILD_NUMBER})</strong>
          </div>
          <div className="update-meta-card">
            <span className="update-meta-label">TARGET</span>
            <strong className="update-meta-value highlight">
              v{release.version}
              {release.versionCode ? ` (Build ${release.versionCode})` : ''}
            </strong>
          </div>
          <div className="update-meta-card">
            <span className="update-meta-label">PUBLISHED</span>
            <span className="update-meta-value">{formattedDate}</span>
          </div>
          {apkSizeMb && (
            <div className="update-meta-card">
              <span className="update-meta-label">APK SIZE</span>
              <span className="update-meta-value">{apkSizeMb}</span>
            </div>
          )}
        </div>

        <div className="update-dialog-body">
          {updateState === 'downloading' && (
            <div className="update-progress-panel" role="status" aria-live="polite">
              <div className="update-progress-header">
                <span className="update-progress-label">DOWNLOADING UPDATE</span>
                <strong className="update-progress-percent">
                  {downloadProgress ? `${downloadProgress.percent}%` : 'CONNECTING...'}
                </strong>
              </div>
              <div className="update-progress-track">
                <div
                  className="update-progress-fill"
                  style={{ width: `${downloadProgress ? downloadProgress.percent : 0}%` }}
                />
              </div>
              <div className="update-progress-meta">
                <span>
                  {downloadProgress?.bytes
                    ? `${(downloadProgress.bytes / (1024 * 1024)).toFixed(1)} MB${
                        downloadProgress.totalBytes
                          ? ` / ${(downloadProgress.totalBytes / (1024 * 1024)).toFixed(1)} MB`
                          : ''
                      }`
                    : 'Preparing stream...'}
                </span>
                <span>STREAMING TO DISK</span>
              </div>
            </div>
          )}

          {updateState === 'verifying' && (
            <div className="update-status-box verifying" role="status" aria-live="polite">
              <span className="update-status-icon" aria-hidden="true">🛡️</span>
              <div className="update-status-text">
                <strong>VERIFYING UPDATE INTEGRITY</strong>
                <p>Checking SHA-256 checksum against official release metadata...</p>
              </div>
            </div>
          )}

          {updateState === 'ready' && (
            <div className="update-status-box ready" role="status" aria-live="polite">
              <span className="update-status-icon" aria-hidden="true">✓</span>
              <div className="update-status-text">
                <strong>READY TO INSTALL</strong>
                <p>Android Package Installer opened. Confirm the update in the system dialog.</p>
              </div>
            </div>
          )}

          {updateState === 'launchingInstaller' && (
            <div className="update-status-box verifying" role="status" aria-live="polite">
              <div className="update-status-text">
                <strong>OPENING ANDROID INSTALLER</strong>
                <p>Preparing verified update for Android Package Installer.</p>
              </div>
            </div>
          )}

          {updateState === 'install_permission' && (
            <div className="update-error-banner" role="alert">
              <strong>INSTALL PERMISSION REQUIRED</strong>
              <p>Allow FitDex to install unknown apps in Android Settings. Then return and retry.</p>
            </div>
          )}

          {updateState === 'checksum_error' && (
            <div className="update-error-banner checksum-error" role="alert">
              <strong>UPDATE VERIFICATION FAILED</strong>
              <p>The downloaded APK does not pass official size and checksum checks. Installation was blocked.</p>
            </div>
          )}

          {updateState === 'error' && errorMessage && (
            <div className="update-error-banner" role="alert">
              <strong>UPDATE DOWNLOAD FAILED</strong>
              <p>{errorMessage}</p>
            </div>
          )}

          {parsedNotes.summary.length > 0 && (
            <div className="update-summary-box">
              {parsedNotes.summary.map((paragraph, idx) => (
                <p key={idx} className="update-release-paragraph">
                  {renderTokens(parseInlineMarkdown(paragraph))}
                </p>
              ))}
            </div>
          )}

          {parsedNotes.sections.length > 0 ? (
            <div className="update-sections-container">
              {parsedNotes.sections.map((section, sIdx) => (
                <section
                  key={sIdx}
                  className={`update-release-section section-${section.type}`}
                >
                  <div className="update-section-header">
                    <span className={`update-section-tag tag-${section.type}`}>
                      {section.title}
                    </span>
                  </div>

                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="update-release-paragraph">
                      {renderTokens(parseInlineMarkdown(p))}
                    </p>
                  ))}

                  {section.items.length > 0 && (
                    <ul className="update-release-list">
                      {section.items.map((item, iIdx) => (
                        <li key={iIdx} className="update-release-item">
                          {renderTokens(parseInlineMarkdown(item))}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>
          ) : (
            parsedNotes.summary.length === 0 && (
              <div className="update-release-empty">
                <p>No additional release notes provided for this version.</p>
              </div>
            )
          )}

          {release.sha256 && (
            <div className="update-checksum-box">
              <span className="update-checksum-label">SHA-256 VERIFICATION CHECKSUM</span>
              <code className="update-checksum-code">{release.sha256}</code>
            </div>
          )}
        </div>

        <footer className="update-dialog-footer">
          <button
            type="button"
            className="cmd-btn primary update-primary-btn"
            onClick={handleDownload}
            disabled={isBusy}
          >
            {updateState === 'downloading'
              ? `DOWNLOADING... ${downloadProgress ? `${downloadProgress.percent}%` : ''}`
              : updateState === 'verifying'
                ? 'VERIFYING CHECKSUM...'
                : updateState === 'ready'
                  ? 'RE-OPEN INSTALLER'
                  : updateState === 'error' || updateState === 'checksum_error'
                    ? 'RETRY DOWNLOAD'
                    : isNative
                      ? 'DOWNLOAD & INSTALL APK'
                      : 'DOWNLOAD ANDROID APK (.APK)'}
          </button>
          <button
            type="button"
            className="cmd-btn secondary update-secondary-btn"
            onClick={onClose}
            disabled={isBusy}
          >
            DISMISS / CLOSE
          </button>
        </footer>
      </section>
    </div>
  );
};
