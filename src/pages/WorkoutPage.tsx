import { Panel } from '../components/ui/Panel'
import { PageHeader } from './PageHeader'

export function WorkoutPage() {
  return <div className="page-stack"><PageHeader eyebrow="Training hub" title="Workout Dex" description="Build routines, record sets, and keep every session close at hand." /><Panel className="empty-state"><span className="empty-glyph">◆</span><h2>Your training log starts here</h2><p>Routine building and workout tracking arrive in a future phase.</p><button className="primary-button" type="button" disabled>Start workout · Soon</button></Panel></div>
}
