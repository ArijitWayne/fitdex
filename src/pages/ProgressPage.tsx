import { Panel } from '../components/ui/Panel'
import { PageHeader } from './PageHeader'

export function ProgressPage() {
  return <div className="page-stack"><PageHeader eyebrow="Character stats" title="Progress" description="See the story your consistency tells over time." /><Panel className="chart-placeholder" eyebrow="Training trend" title="No history yet"><div className="chart-bars" aria-hidden="true">{[22, 35, 28, 54, 48, 70, 64].map((height, index) => <span key={index} style={{ height: `${height}%` }} />)}</div><p className="muted">Charts will wake up once there is activity to show.</p></Panel></div>
}
