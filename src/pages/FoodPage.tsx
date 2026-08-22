import { Panel } from '../components/ui/Panel'
import { PageHeader } from './PageHeader'

export function FoodPage() {
  return <div className="page-stack"><PageHeader eyebrow="Nutrition hub" title="Fuel Log" description="A focused home for meals, foods, and daily nutrition." /><div className="metric-grid"><Panel eyebrow="Daily energy" title="— kcal"><div className="meter"><span style={{ width: '0%' }} /></div></Panel><Panel eyebrow="Meals logged" title="0"><p className="muted">Nothing recorded today.</p></Panel></div><Panel className="empty-state"><span className="empty-glyph">◒</span><h2>Nutrition tracking is on the way</h2><p>Your foods and daily entries will remain private and local.</p></Panel></div>
}
