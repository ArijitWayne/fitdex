import React, { useEffect, useRef, useState } from 'react';
import type { AppRelease } from './updaterModel';
import { handoffApkDownload } from './updaterService';
import { APP_VERSION, APP_BUILD_NUMBER } from '../../appVersion';
import { useBackNavigation } from '../navigation/useBackNavigation';
import { Capacitor } from '@capacitor/core';

interface UpdateDetailsModalProps {
  release: AppRelease;
  onClose: () => void;
}

export const UpdateDetailsModal: React.FC<UpdateDetailsModalProps> = ({
  release,
  onClose,
}) => {
  const [downloading, setDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState<string | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useBackNavigation('update-details-dialog', true, onClose, 100);

  useEffect(() => {
    closeButtonRef.current?.focus();
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleDownload = async () => {
    setDownloading(true);
    setDownloadError(null);
    const result = await handoffApkDownload(release);
    if (!result.success && result.error) {
      setDownloadError(result.error);
    }
    setDownloading(false);
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

  return (
    <div className="guide-backdrop active" role="presentation">
      <section
        className="update-details-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="update-dialog-title"
      >
        <header className="guide-topline">
          <div className="guide-title-box">
            <span className="guide-eyebrow">CARTRIDGE UPGRADE</span>
            <strong id="update-dialog-title">FITDEX V{release.version}</strong>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            className="dialog-close-btn"
            onClick={onClose}
            aria-label="Close update details"
          >
            ✕
          </button>
        </header>

        <div className="update-meta-strip">
          <div className="update-meta-item">
            <span>INSTALLED:</span>
            <strong>v{APP_VERSION} (Build {APP_BUILD_NUMBER})</strong>
          </div>
          <div className="update-meta-item">
            <span>TARGET:</span>
            <strong>
              v{release.version}
              {release.versionCode ? ` (Build ${release.versionCode})` : ''}
            </strong>
          </div>
          <div className="update-meta-item">
            <span>DATE:</span>
            <span>{formattedDate}</span>
          </div>
          {apkSizeMb && (
            <div className="update-meta-item">
              <span>SIZE:</span>
              <span>{apkSizeMb}</span>
            </div>
          )}
        </div>

        <div className="update-dialog-body">
          <div>
            <div className="retro-group-heading">RELEASE NOTES & LOG</div>
            <pre className="update-release-notes">{release.releaseNotes}</pre>
          </div>

          {release.sha256 && (
            <div className="update-checksum-box">
              <small>SHA-256 VERIFICATION CHECKSUM</small>
              <code>{release.sha256}</code>
            </div>
          )}

          {downloadError && (
            <div
              style={{
                color: '#ff8a80',
                background: '#200c0a',
                border: '1px solid #c62828',
                padding: '6px 8px',
                fontSize: '0.72rem',
                fontFamily: 'monospace',
              }}
            >
              {downloadError}
            </div>
          )}
        </div>

        <footer className="update-dialog-footer">
          <button
            type="button"
            className="cmd-btn primary"
            onClick={handleDownload}
            disabled={downloading}
          >
            {downloading
              ? 'HANDING OFF TO INSTALLER...'
              : isNative
                ? 'DOWNLOAD & INSTALL APK'
                : 'DOWNLOAD ANDROID APK (.APK)'}
          </button>
          <button
            type="button"
            className="cmd-btn secondary"
            onClick={onClose}
          >
            DISMISS / CLOSE
          </button>
        </footer>
      </section>
    </div>
  );
};
