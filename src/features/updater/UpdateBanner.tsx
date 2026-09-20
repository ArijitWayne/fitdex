import React from 'react';
import type { AppRelease } from './updaterModel';

interface UpdateBannerProps {
  release: AppRelease;
  onViewDetails: () => void;
  onDismiss: () => void;
}

export const UpdateBanner: React.FC<UpdateBannerProps> = ({
  release,
  onViewDetails,
  onDismiss,
}) => {
  return (
    <aside
      className="retro-update-banner is-active"
      role="region"
      aria-label="Application Update Notice"
    >
      <div className="update-banner-header">
        <span className="banner-tag">UPDATE DETECTED</span>
        <button
          type="button"
          className="cmd-btn secondary compact"
          onClick={onDismiss}
          aria-label="Dismiss update notification"
        >
          ✕
        </button>
      </div>

      <strong>FITDEX V{release.version} AVAILABLE</strong>
      <p>A new stable cartridge release has been published. Review notes or upgrade your APK.</p>

      <div className="update-banner-actions">
        <button
          type="button"
          className="cmd-btn primary compact"
          onClick={onViewDetails}
        >
          VIEW RELEASE DETAILS
        </button>
        <button
          type="button"
          className="cmd-btn secondary compact"
          onClick={onDismiss}
        >
          LATER
        </button>
      </div>
    </aside>
  );
};
