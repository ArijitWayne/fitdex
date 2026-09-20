import { useState, useCallback, useEffect } from 'react';
import type { AppRelease, UpdateCheckResult, UpdateCheckStatus } from './updaterModel';
import { checkForUpdates, handoffApkDownload } from './updaterService';

export function useUpdater(autoCheck = false) {
  const [status, setStatus] = useState<UpdateCheckStatus>('idle');
  const [release, setRelease] = useState<AppRelease | undefined>(undefined);
  const [checking, setChecking] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [dismissed, setDismissed] = useState<boolean>(false);
  const [detailsOpen, setDetailsOpen] = useState<boolean>(false);

  const performCheck = useCallback(async (forceRefresh = false): Promise<UpdateCheckResult> => {
    setChecking(true);
    setError(undefined);

    const result = await checkForUpdates(forceRefresh);

    setStatus(result.status);
    setRelease(result.release);
    setError(result.error);
    setChecking(false);

    return result;
  }, []);

  const dismiss = useCallback(() => {
    setDismissed(true);
  }, []);

  const openDetails = useCallback(() => {
    setDetailsOpen(true);
  }, []);

  const closeDetails = useCallback(() => {
    setDetailsOpen(false);
  }, []);

  const download = useCallback(async () => {
    if (release) {
      await handoffApkDownload(release);
    }
  }, [release]);

  useEffect(() => {
    if (!autoCheck) return;
    let active = true;
    void checkForUpdates(false).then((result) => {
      if (!active) return;
      setStatus(result.status);
      setRelease(result.release);
      setError(result.error);
    });
    return () => {
      active = false;
    };
  }, [autoCheck]);

  return {
    status,
    release,
    checking,
    error,
    dismissed,
    detailsOpen,
    check: performCheck,
    dismiss,
    openDetails,
    closeDetails,
    download,
  };
}
