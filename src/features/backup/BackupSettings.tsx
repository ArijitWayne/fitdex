import { Download, Upload, X } from 'lucide-react'
import { useEffect, useRef, useState, type ReactNode, type RefObject } from 'react'
import { APP_VERSION } from '../../appVersion'
import { createFitDexBackup, restoreFitDexBackup } from './backupRepository'
import { downloadFitDexBackup, summarizeFitDexBackup } from './backupSerializer'
import { BackupValidationError, type BackupSummary, type ValidatedFitDexBackup } from './backupTypes'
import { readFitDexBackupFile } from './backupValidation'

type BackupDialogState =
  | { kind: 'create'; returnToRestore: boolean }
  | { kind: 'preview' }
  | { kind: 'confirm' }
  | { kind: 'complete'; summary: BackupSummary; externalPreferenceFailures: string[] }

const backupDateFormatter = new Intl.DateTimeFormat(undefined, { dateStyle: 'medium', timeStyle: 'short' })

function errorMessage(reason: unknown) {
  if (reason instanceof BackupValidationError) return reason.message
  console.error('FitDex backup operation failed', reason)
  return 'Restore failed — your current data was not changed.'
}

export function BackupSettings() {
  const [dialog, setDialog] = useState<BackupDialogState>()
  const [incoming, setIncoming] = useState<ValidatedFitDexBackup>()
  const [selectedFilename, setSelectedFilename] = useState('')
  const [status, setStatus] = useState('')
  const [isError, setIsError] = useState(false)
  const [busy, setBusy] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const createButtonRef = useRef<HTMLButtonElement>(null)
  const chooseButtonRef = useRef<HTMLButtonElement>(null)
  const lastTriggerRef = useRef<RefObject<HTMLButtonElement | null>>(createButtonRef)
  const hadDialogRef = useRef(false)

  useEffect(() => {
    if (dialog) hadDialogRef.current = true
    else if (hadDialogRef.current) {
      hadDialogRef.current = false
      window.setTimeout(() => lastTriggerRef.current.current?.focus(), 0)
    }
  }, [dialog])

  const openCreate = (returnToRestore = false) => {
    if (!returnToRestore) lastTriggerRef.current = createButtonRef
    setStatus('')
    setIsError(false)
    setDialog({ kind: 'create', returnToRestore })
  }

  const createBackup = async (returnToRestore: boolean) => {
    setBusy(true)
    setStatus('')
    setIsError(false)
    try {
      const backup = await createFitDexBackup(APP_VERSION)
      downloadFitDexBackup(backup)
      setStatus('Backup download started. Keep the .fitdex file somewhere you trust.')
      setDialog(returnToRestore && incoming ? { kind: 'confirm' } : undefined)
    } catch (reason) {
      console.error('FitDex backup creation failed', reason)
      setStatus('Backup could not be created. Your FitDex data was not changed.')
      setIsError(true)
    } finally { setBusy(false) }
  }

  const chooseFile = () => {
    lastTriggerRef.current = chooseButtonRef
    fileInputRef.current?.click()
  }

  const readFile = async (file?: File) => {
    if (!file) return
    setBusy(true)
    setStatus('')
    setIsError(false)
    try {
      const backup = await readFitDexBackupFile(file)
      setIncoming(backup)
      setSelectedFilename(file.name)
      setDialog({ kind: 'preview' })
    } catch (reason) {
      setIncoming(undefined)
      setSelectedFilename('')
      setStatus(errorMessage(reason))
      setIsError(true)
    } finally {
      setBusy(false)
      if (fileInputRef.current) fileInputRef.current.value = ''
    }
  }

  const cancelRestore = () => {
    setDialog(undefined)
    setIncoming(undefined)
    setSelectedFilename('')
  }

  const restore = async () => {
    if (!incoming) return
    setBusy(true)
    setStatus('')
    setIsError(false)
    try {
      const result = await restoreFitDexBackup(incoming)
      setDialog({ kind: 'complete', summary: summarizeFitDexBackup(incoming), externalPreferenceFailures: result.externalPreferenceFailures })
    } catch (reason) {
      console.error('FitDex restore failed', reason)
      setStatus('Restore failed — your current data was not changed.')
      setIsError(true)
      setDialog({ kind: 'confirm' })
    } finally { setBusy(false) }
  }

  const continueAfterRestore = () => window.location.reload()
  const summary = incoming ? summarizeFitDexBackup(incoming) : undefined

  return <section className="settings-section backup-settings" aria-labelledby="storage-heading">
    <div className="settings-section-heading"><span>07</span><div><h2 id="storage-heading">Data &amp; Storage</h2><p>Your device is the source of truth.</p></div></div>
    <section className="backup-action" aria-labelledby="backup-action-heading"><div><p className="eyebrow">Backup</p><h3 id="backup-action-heading">Protect your FitDex data with a portable backup.</h3></div><button ref={createButtonRef} className="secondary-button" type="button" disabled={busy} onClick={() => openCreate()}><Download size={18} aria-hidden="true" /> Create Backup</button></section>
    <section className="backup-action" aria-labelledby="restore-action-heading"><div><p className="eyebrow">Restore</p><h3 id="restore-action-heading">Restore your data from a FitDex backup.</h3></div><input ref={fileInputRef} className="sr-only" type="file" accept=".fitdex,application/x-fitdex-backup,application/json" aria-label="Choose .fitdex File" onChange={(event) => void readFile(event.target.files?.[0])} /><button ref={chooseButtonRef} className="secondary-button" type="button" disabled={busy} onClick={chooseFile}><Upload size={18} aria-hidden="true" /> {busy ? 'Reading backup…' : 'Choose .fitdex File'}</button></section>
    <p className="backup-privacy-note">Your data stays on your device unless you choose to save or share the backup elsewhere.</p>
    <p className="backup-security-note">Backup files contain your FitDex data. Store them somewhere you trust.</p>
    {status ? <p className={isError ? 'form-error' : 'display-name-status'} role={isError ? 'alert' : 'status'}>{status}</p> : null}

    {dialog?.kind === 'create' ? <BackupDialog title="Create FitDex Backup" eyebrow="Portable local backup" onClose={() => dialog.returnToRestore && incoming ? setDialog({ kind: 'confirm' }) : setDialog(undefined)}>
      <p>This backup includes your workouts, food logs, routines, progress, settings and gamification data.</p>
      <p>Exercise videos and built-in app assets are not included.</p>
      {status ? <p className={isError ? 'form-error' : 'display-name-status'} role={isError ? 'alert' : 'status'}>{status}</p> : null}
      <div className="backup-dialog-actions"><button className="secondary-button" type="button" disabled={busy} onClick={() => dialog.returnToRestore && incoming ? setDialog({ kind: 'confirm' }) : setDialog(undefined)}>Cancel</button><button className="primary-button" type="button" disabled={busy} onClick={() => void createBackup(dialog.returnToRestore)}>{busy ? 'Creating…' : 'Create Backup'}</button></div>
    </BackupDialog> : null}

    {dialog?.kind === 'preview' && incoming && summary ? <BackupDialog title="Restore FitDex" eyebrow="Validated backup" onClose={cancelRestore}>
      <dl className="backup-preview"><div><dt>File</dt><dd>{selectedFilename}</dd></div><div><dt>Backup created</dt><dd>{backupDateFormatter.format(new Date(incoming.createdAt))}</dd></div><div><dt>Backup version</dt><dd>{incoming.formatVersion}</dd></div></dl>
      <div className="backup-contains"><strong>Contains</strong><ul><li>{summary.workoutCount} completed workouts</li><li>{summary.foodLogCount} food entries</li><li>{summary.routineCount} routines &amp; weekly plan</li><li>Settings</li><li>{summary.achievementCount} achievements &amp; gamification progress</li></ul></div>
      <p>This will replace the FitDex data currently stored on this device.</p>
      <div className="backup-dialog-actions"><button className="secondary-button" type="button" onClick={cancelRestore}>Cancel</button><button className="primary-button" type="button" onClick={() => setDialog({ kind: 'confirm' })}>Restore</button></div>
    </BackupDialog> : null}

    {dialog?.kind === 'confirm' && incoming ? <BackupDialog title="Replace Current Data?" eyebrow="Final confirmation" role="alertdialog" onClose={() => setDialog({ kind: 'preview' })}>
      <p>This cannot be undone unless you create a backup of your current FitDex data first.</p>
      {status ? <p className={isError ? 'form-error' : 'display-name-status'} role={isError ? 'alert' : 'status'}>{status}</p> : null}
      <div className="backup-dialog-actions backup-dialog-actions-three"><button className="secondary-button" type="button" disabled={busy} onClick={() => setDialog({ kind: 'preview' })}>Cancel</button><button className="secondary-button" type="button" disabled={busy} onClick={() => openCreate(true)}>Back Up Current Data First</button><button className="danger-button" type="button" disabled={busy} onClick={() => void restore()}>{busy ? 'Restoring…' : 'Replace & Restore'}</button></div>
    </BackupDialog> : null}

    {dialog?.kind === 'complete' ? <BackupDialog title="Restore Complete" eyebrow="FitDex restored successfully" onClose={continueAfterRestore}>
      <dl className="backup-complete-summary"><div><dt>Completed workouts</dt><dd>{dialog.summary.workoutCount}</dd></div><div><dt>Food entries</dt><dd>{dialog.summary.foodLogCount}</dd></div><div><dt>Routines</dt><dd>{dialog.summary.routineCount}</dd></div><div><dt>Achievements</dt><dd>{dialog.summary.achievementCount}</dd></div></dl>
      <p>Continue to reload FitDex with the restored data.</p>
      {dialog.externalPreferenceFailures.length ? <p className="form-error" role="status">Your FitDex data was restored, but this browser could not persist: {dialog.externalPreferenceFailures.join(', ')}. Those display/setup preferences may keep their current values after reload.</p> : null}
      <div className="backup-dialog-actions"><button className="primary-button" type="button" onClick={continueAfterRestore}>Continue</button></div>
    </BackupDialog> : null}
  </section>
}

function BackupDialog({ title, eyebrow, role = 'dialog', onClose, children }: { title: string; eyebrow: string; role?: 'dialog' | 'alertdialog'; onClose: () => void; children: ReactNode }) {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const dialogRef = useRef<HTMLElement>(null)
  const titleId = `backup-dialog-${title.toLowerCase().replaceAll(/[^a-z0-9]+/g, '-')}`
  useEffect(() => { headingRef.current?.focus() }, [])
  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key !== 'Tab') return
      const focusable = Array.from(dialogRef.current?.querySelectorAll<HTMLElement>('button:not(:disabled), input:not(:disabled), [href], [tabindex]:not([tabindex="-1"])') ?? [])
      const first = focusable[0]; const last = focusable.at(-1)
      if (!first || !last) return
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])
  return <div className="backup-dialog-backdrop"><section ref={dialogRef} className="backup-dialog" role={role} aria-modal="true" aria-labelledby={titleId}><header><div><p className="eyebrow">{eyebrow}</p><h2 id={titleId} ref={headingRef} tabIndex={-1}>{title}</h2></div><button type="button" aria-label={`Close ${title}`} onClick={onClose}><X aria-hidden="true" /></button></header>{children}</section></div>
}
