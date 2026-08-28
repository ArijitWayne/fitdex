import { Download, Trash2, X } from 'lucide-react'
import { useEffect, useState, type ReactNode } from 'react'
import { builtInExercises } from '../exerciseDex/exerciseData'
import { formatMediaBytes, listDownloadedExerciseMedia, removeAllDownloadedExerciseMedia, removeDownloadedExerciseMedia, supportsNativeExerciseMedia, type DownloadedExerciseMedia } from './exerciseMediaStore'

const exerciseNames = new Map(builtInExercises.map((exercise) => [exercise.id, exercise.name]))

export function ExerciseMediaSettings() {
  const [downloads, setDownloads] = useState<DownloadedExerciseMedia[]>([])
  const [dialog, setDialog] = useState<'manage' | 'confirm'>()
  const [status, setStatus] = useState('')
  const refresh = () => { void listDownloadedExerciseMedia().then(setDownloads) }
  useEffect(refresh, [])
  if (!supportsNativeExerciseMedia()) return null
  const totalBytes = downloads.reduce((sum, item) => sum + item.sizeBytes, 0)
  const remove = (exerciseId: string) => { void removeDownloadedExerciseMedia(exerciseId).then(() => { setStatus('Download removed.'); refresh() }).catch(() => setStatus('Download could not be removed.')) }
  const removeAll = () => { void removeAllDownloadedExerciseMedia().then((result) => { setStatus(result.failures ? `${result.removed} downloads removed; ${result.failures} could not be removed.` : 'All exercise downloads removed.'); setDialog(undefined); refresh() }).catch(() => setStatus('Downloads could not be removed.')) }
  return <section className="settings-section exercise-media-settings" aria-labelledby="exercise-media-heading"><div className="settings-section-heading"><span>08</span><div><h2 id="exercise-media-heading">Exercise Media</h2><p>Download demonstrations you want available without an internet connection.</p></div></div><dl className="setting-list"><div><dt>Downloaded exercises</dt><dd>{downloads.length}</dd></div><div><dt>Storage used</dt><dd>{formatMediaBytes(totalBytes)}</dd></div></dl><div className="exercise-media-settings-actions"><button className="secondary-button" type="button" onClick={() => setDialog('manage')}><Download size={17} aria-hidden="true" /> Manage Downloads</button><button className="danger-button" type="button" disabled={!downloads.length} onClick={() => setDialog('confirm')}><Trash2 size={17} aria-hidden="true" /> Remove All Downloads</button></div>{status ? <p role="status" className="display-name-status">{status}</p> : null}{dialog === 'manage' ? <MediaDialog title="Downloaded exercise demonstrations" onClose={() => setDialog(undefined)}>{downloads.length ? <ul className="exercise-media-download-list">{downloads.map((item) => <li key={item.exerciseId}><span><strong>{exerciseNames.get(item.exerciseId) ?? item.videoKey}</strong><small>{formatMediaBytes(item.sizeBytes)}</small></span><button className="secondary-button" type="button" onClick={() => remove(item.exerciseId)}>Remove</button></li>)}</ul> : <p>No exercise demonstrations are downloaded.</p>}</MediaDialog> : null}{dialog === 'confirm' ? <MediaDialog title="Remove all exercise downloads?" onClose={() => setDialog(undefined)}><p>This removes {downloads.length} downloaded demonstrations and frees approximately {formatMediaBytes(totalBytes)}.</p><p>Exercise data, routines, and workout history are not affected.</p><div className="exercise-media-settings-actions"><button className="secondary-button" type="button" onClick={() => setDialog(undefined)}>Cancel</button><button className="danger-button" type="button" onClick={removeAll}>Remove All</button></div></MediaDialog> : null}</section>
}

function MediaDialog({ title, onClose, children }: { title: string; onClose: () => void; children: ReactNode }) { return <div className="workout-finish-backdrop"><section className="panel exercise-media-dialog" role="dialog" aria-modal="true" aria-labelledby="exercise-media-dialog-title"><header><h2 id="exercise-media-dialog-title">{title}</h2><button type="button" aria-label="Close" onClick={onClose}><X aria-hidden="true" /></button></header>{children}</section></div> }
