import { Dumbbell, Flame, Target, Utensils } from 'lucide-react'
import { Panel } from '../components/ui/Panel'
import { AvatarPortrait } from '../features/avatar/AvatarPortrait'
import { useAvatar } from '../features/avatar/useAvatar'
import { PageHeader } from './PageHeader'

const demoProgress = { level: 14, xp: 720, nextLevelXp: 900 }

export function HomePage() {
  const { selectedAvatar } = useAvatar()
  const xpPercent = Math.round((demoProgress.xp / demoProgress.nextLevelXp) * 100)

  return (
    <div className="page-stack home-page">
      <PageHeader eyebrow="Player status" title="Ready to train?" description="Your practical daily overview, with just enough RPG spirit." />

      <section className="player-card" data-faction={selectedAvatar.faction}>
        <div className="player-card-corner" aria-hidden="true" />
        <AvatarPortrait avatar={selectedAvatar} size="large" />
        <div className="player-identity">
          <p className="eyebrow">{selectedAvatar.archetype}</p>
          <h2>{selectedAvatar.name}</h2>
          <div className="player-level"><span>LV.</span><strong>{demoProgress.level}</strong></div>
        </div>
        <div className="player-xp">
          <div className="xp-label"><span>Experience</span><strong>{demoProgress.xp} / {demoProgress.nextLevelXp} XP</strong></div>
          <div className="xp-meter" role="progressbar" aria-label="Experience progress" aria-valuemin={0} aria-valuemax={demoProgress.nextLevelXp} aria-valuenow={demoProgress.xp}><span style={{ width: `${xpPercent}%` }} /></div>
        </div>
      </section>

      <div className="status-grid">
        <Panel className="status-panel">
          <div className="status-panel-heading"><Target size={19} aria-hidden="true" /><p className="eyebrow">Daily quest</p></div>
          <h2>Complete one workout</h2>
          <p className="muted">0 of 1 · Demo status</p>
          <div className="mini-meter"><span style={{ width: '6%' }} /></div>
        </Panel>
        <Panel className="status-panel">
          <div className="status-panel-heading"><Flame size={19} aria-hidden="true" /><p className="eyebrow">Plan streak</p></div>
          <h2>3 days</h2>
          <p className="muted">Placeholder until plans are active.</p>
        </Panel>
        <Panel className="status-panel nutrition-status">
          <div className="status-panel-heading"><Utensils size={19} aria-hidden="true" /><p className="eyebrow">Nutrition today</p></div>
          <div className="macro-grid">
            <div><strong>—</strong><span>Calories</span></div><div><strong>—g</strong><span>Protein</span></div><div><strong>—g</strong><span>Carbs</span></div><div><strong>—g</strong><span>Fat</span></div>
          </div>
        </Panel>
        <Panel className="status-panel">
          <div className="status-panel-heading"><Dumbbell size={19} aria-hidden="true" /><p className="eyebrow">Next workout</p></div>
          <h2>No session planned</h2>
          <p className="muted">Build local workout routines from the complete Exercise Dex.</p>
        </Panel>
      </div>
    </div>
  )
}
