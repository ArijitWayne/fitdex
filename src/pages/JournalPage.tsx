import { Panel } from '../components/ui/Panel'
import { PageHeader } from './PageHeader'

export function JournalPage() {
  return <div className="page-stack"><PageHeader eyebrow="Daily record" title="Journal" description="Keep the context behind every session, meal, and milestone." /><Panel className="empty-state"><span className="empty-glyph">▤</span><h2>A place for the whole day</h2><p>Daily notes and reflections will live here in a future phase.</p><button className="secondary-button" type="button" disabled>Write an entry · Soon</button></Panel></div>
}
