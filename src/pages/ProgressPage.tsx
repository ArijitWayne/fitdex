import { ArrowLeft, Award, ChevronRight, CircleHelp, Search, Utensils } from 'lucide-react'
import { type CSSProperties, useEffect, useMemo, useState } from 'react'
import { Panel } from '../components/ui/Panel'
import { CommandPageFrame } from '../components/layout/CommandPageFrame'
import { CollapsibleModule } from '../components/ui/CollapsibleModule'
import { ContextRail } from '../components/ui/ContextRail'
import {
  derivePersonalRecords,
  formatPersonalRecordDate,
  formatPersonalRecordMetric,
  getChapterForRecord,
  searchPersonalRecords,
  CANONICAL_CHAPTERS,
  type ChapterId,
  type ExercisePersonalRecords,
  type PersonalRecordMetric,
} from '../features/progress/personalRecords'
import { buildNutritionTrend, buildVolumeTrend, buildWorkoutFrequencyTrend, calculateNutritionSummary, calculateTrainingSeconds, calculateTrainingVolume, calculateVolumeComparison, formatTrainingTime, PROGRESS_PERIODS, type ProgressPeriod, type TrendBucket } from '../features/progress/progressModel'
import { loadProgressSource, type ProgressSourceData } from '../features/progress/progressRepository'
import { getLocalDateKey } from '../utils/localDate'
import { displayWeightFromKg } from '../utils/units'
import { GuideDialog, type GuideStep } from '../features/help/GuideDialog'
import { AchievementsView, RankDetailView } from '../features/gamification/GamificationViews'
import { GamificationBadge } from '../features/gamification/GamificationBadge'
import { rankAssetPath } from '../features/gamification/gamificationConfig'
import { loadGamificationDashboard, type GamificationDashboard } from '../features/gamification/gamificationRepository'
import { useAudio } from '../features/audio/useAudio'
import { useBackNavigation } from '../features/navigation/useBackNavigation'
import { acknowledgeFirstUse, loadFirstUseGuidance } from '../features/help/firstUseGuidance'

const PERIOD_LABELS: Record<ProgressPeriod, string> = { '7d': '7D', '30d': '30D', '90d': '90D', all: 'All' }
const progressHelpSteps: readonly GuideStep[] = [{ title: 'How Progress Works', sections: [{ text: 'Progress is calculated automatically from completed workouts and Food history. There is nothing extra to log here.' }, { label: 'Workout data', bullets: ['Workout count', 'Training time', 'Resistance Volume', 'Personal Records'] }, { label: 'Food data', bullets: ['Average calories', 'Average protein', 'Nutrition trends'] }, { label: 'Resistance Volume', text: 'Weight × reps across logged weight-based resistance sets. It is a workload measure, not a universal score of training quality.' }] }]
type TrendMode = 'workouts' | 'volume' | 'nutrition'

export function ProgressPage() {
  const { playEffect } = useAudio()
  const [period, setPeriod] = useState<ProgressPeriod>('30d')
  const [trend, setTrend] = useState<TrendMode>('volume')
  const [data, setData] = useState<ProgressSourceData>()
  const [error, setError] = useState('')
  const [recordsOpen, setRecordsOpen] = useState(false)
  const [helpOpen, setHelpOpen] = useState(false)
  const [detailView, setDetailView] = useState<'achievements' | 'rank'>()
  const [gamification, setGamification] = useState<GamificationDashboard>()
  const [showFirstUse, setShowFirstUse] = useState(false)
  const referenceDateKey = getLocalDateKey()
  const navigateBack = useBackNavigation('progress-subview', recordsOpen || detailView !== undefined, () => { setRecordsOpen(false); setDetailView(undefined) })
  useEffect(() => {
    let current = true
    void loadProgressSource(period, referenceDateKey).then((result) => { if (current) setData(result) }).catch((reason: unknown) => { if (current) setError(reason instanceof Error ? reason.message : 'Progress history could not be loaded.') })
    return () => { current = false }
  }, [period, referenceDateKey])
  useEffect(() => {
    let current = true
    const refreshGamification = (reconcile: boolean) => { void loadGamificationDashboard(referenceDateKey, reconcile).then((result) => { if (current) setGamification(result) }) }
    const handleGamificationChanged = () => refreshGamification(false)
    window.addEventListener('fitdex:gamification-changed', handleGamificationChanged)
    refreshGamification(true)
    return () => { current = false; window.removeEventListener('fitdex:gamification-changed', handleGamificationChanged) }
  }, [referenceDateKey])
  useEffect(() => { void loadFirstUseGuidance().then((guidance) => setShowFirstUse(!guidance.progress)) }, [])
  const records = useMemo(() => data ? derivePersonalRecords(data.allWorkouts, data.definitions) : [], [data])
  if (recordsOpen && data) return <PersonalRecordsView records={records} units={data.units} gamification={gamification} onBack={() => { void navigateBack() }} />
  if (detailView === 'achievements' && gamification) return <AchievementsView data={gamification} onBack={() => setDetailView(undefined)} />
  if (detailView === 'rank' && gamification) return <RankDetailView data={gamification} onBack={() => setDetailView(undefined)} />
  const selectPeriod = (next: ProgressPeriod) => { playEffect('select'); setData(undefined); setError(''); setPeriod(next) }
  const workoutCount = data?.currentWorkouts.length ?? 0
  const trainingSeconds = calculateTrainingSeconds(data?.currentWorkouts ?? [])
  const volumeKg = calculateTrainingVolume(data?.currentWorkouts ?? [])
  const previousVolumeKg = calculateTrainingVolume(data?.previousWorkouts ?? [])
  const comparison = calculateVolumeComparison(volumeKg, previousVolumeKg, period)
  const nutrition = calculateNutritionSummary(data?.foodEntries ?? [])
  const displayVolume = data ? displayWeightFromKg(volumeKg, data.units.preference) : 0
  const trends = { workouts: buildWorkoutFrequencyTrend(data?.currentWorkouts ?? [], period, referenceDateKey), volume: buildVolumeTrend(data?.currentWorkouts ?? [], period, referenceDateKey).map((bucket) => ({ ...bucket, value: data ? displayWeightFromKg(bucket.value, data.units.preference) : 0 })), nutrition: buildNutritionTrend(data?.foodEntries ?? [], period, referenceDateKey) }
  const trendMeta = trend === 'workouts' ? { title: workoutCount ? `${workoutCount} completed ${workoutCount === 1 ? 'workout' : 'workouts'}` : 'No completed training in this period', valueLabel: 'workouts', emptyText: 'No completed workouts in this period.', summary: 'Completed training sessions in this period.' } : trend === 'volume' ? { title: `${formatNumber(displayVolume)} ${data?.units.weightLabel ?? 'kg'} resistance volume`, valueLabel: data?.units.weightLabel ?? 'kg', emptyText: 'No completed weight-and-reps volume in this period.', summary: 'Total weight × reps across logged resistance sets.' } : { title: nutrition.loggedDays ? `${formatNumber(nutrition.averageKcal)} kcal average` : 'No food history in this period', valueLabel: 'average kcal', emptyText: 'Logged foods have no calorie values in this period.', summary: 'Averages use days with at least one food entry.' }

  return <CommandPageFrame className="page-stack progress-page" terminalTitle="FITDEX // PROGRESS" terminalMeta={`${gamification ? `LV ${gamification.progression.level} · ${gamification.progression.rank.name.toUpperCase()}` : 'STATS'}`} headerActions={<button className="page-help-button progress-help-button cmd-icon-btn" type="button" onClick={() => { playEffect('select'); setHelpOpen(true) }} aria-label="How Progress Works" title="How Progress Works"><CircleHelp size={16} aria-hidden="true" /></button>}>
    {showFirstUse ? <ContextRail
      title="Progress is derived, not another log"
      actions={<button className="secondary-button" type="button" onClick={() => { playEffect('select'); void acknowledgeFirstUse('progress'); setShowFirstUse(false) }}>Understood</button>}
    >
      <p>Completed workouts and Food history produce these stats, trends, records, XP, and achievements automatically. Resistance Volume measures weight × reps workload, not calorie burn. Change the period to inspect real history.</p>
    </ContextRail> : null}
    {gamification ? <CharacterHero data={gamification} onRank={() => { playEffect('select'); setDetailView('rank') }} onAchievements={() => { playEffect('select'); setDetailView('achievements') }} /> : null}
    <section className="progress-period" aria-labelledby="progress-period-title"><p className="eyebrow" id="progress-period-title">Period</p><div>{PROGRESS_PERIODS.map((item) => <button type="button" key={item} aria-pressed={period === item} className={period === item ? 'is-selected' : ''} onClick={() => selectPeriod(item)}>{PERIOD_LABELS[item]}</button>)}</div></section>
    {!data ? <Panel className="progress-state"><p className="progress-loading" aria-live="polite">{error ? 'Progress unavailable' : 'Loading progress…'}</p>{error ? <p className="form-error" role="alert">{error}</p> : null}</Panel> : !data.hasAnyHistory ? <section className="progress-empty" aria-labelledby="progress-empty-title"><span className="empty-glyph" aria-hidden="true">↗</span><div><h2 id="progress-empty-title">Start building your history</h2><p>Complete workouts and log meals to see progress here.</p></div></section> : <>
      {/* 1. TRAINING ATTRIBUTES (PRIMARY - ALWAYS VISIBLE 2x2 GRID) */}
      <section className="proto-panel-card progress-section progress-attributes" aria-labelledby="prog-attrs-heading">
        <div className="proto-card-top">
          <h3 className="proto-card-title" id="prog-attrs-heading">Training Stats ({PERIOD_LABELS[period]})</h3>
        </div>
        <p className="sr-only">Training attributes · Real progress stats</p>
        <div className="progress-attr-grid progress-attribute-list">
          <div className="progress-attr-cell progress-attribute">
            <span>Consistency</span>
            <strong>{workoutCount} {workoutCount === 1 ? 'Session' : 'Sessions'}</strong>
            <small>{workoutCount ? 'Completed workouts' : 'No sessions'}</small>
          </div>
          <div className="progress-attr-cell progress-attribute">
            <span>Training Time</span>
            <strong>{formatTrainingTime(trainingSeconds)}</strong>
            <small>{workoutCount ? `${formatTrainingTime(Math.round(trainingSeconds / workoutCount))} avg session` : 'Completed duration'}</small>
          </div>
          <div className="progress-attr-cell progress-attribute">
            <span>Resistance Vol</span>
            <strong>{formatNumber(displayVolume)} {data.units.weightLabel}</strong>
            <small>{comparison.kind === 'percent' ? `${comparison.percent >= 0 ? '+' : ''}${formatNumber(comparison.percent)}% vs prev` : comparison.kind === 'no-previous' ? 'No previous volume' : 'All-time total'}</small>
          </div>
          <div className="progress-attr-cell progress-attribute">
            <span>Record Book</span>
            <strong>{formatNumber(records.length)} {records.length === 1 ? 'Exercise' : 'Exercises'}</strong>
            <small>{records.length ? `${records.reduce((sum, r) => sum + r.metrics.length, 0)} total records` : 'Exercises with PRs'}</small>
          </div>
        </div>
      </section>

      {/* 2. LOGGED EVIDENCE / TRENDS (COLLAPSIBLE DRAWER) */}
      <CollapsibleModule
        id="progress-trends"
        title={`Volume Trend (${PERIOD_LABELS[period]})`}
        badge={`${PERIOD_LABELS[period]} Trend`}
        summary={trendMeta.title}
        defaultExpanded={true}
      >
        <div className="progress-trend-switch" role="group" aria-label="Progress trend">{(['workouts', 'volume', 'nutrition'] as const).map((item) => <button type="button" key={item} aria-pressed={trend === item} onClick={() => { playEffect('select'); setTrend(item) }}>{item}</button>)}</div>
        <SimpleBarChart buckets={trends[trend]} valueLabel={trendMeta.valueLabel} emptyText={trendMeta.emptyText} />
        <p className="progress-chart-summary">{trendMeta.summary}</p>
        {trend === 'volume' && comparison.kind === 'percent' ? <p className="progress-comparison">{comparison.percent >= 0 ? '+' : ''}{formatNumber(comparison.percent)}% vs previous period</p> : trend === 'volume' && comparison.kind === 'no-previous' ? <p className="progress-comparison">No previous volume</p> : null}
      </CollapsibleModule>

      {/* 3. PERSONAL RECORDS PREVIEW (COLLAPSIBLE DRAWER) */}
      <CollapsibleModule
        id="progress-prs"
        title="Personal Records"
        badge={`${records.length} ${records.length === 1 ? 'Record' : 'Records'}`}
        summary={records.slice(0, 3).map((r) => `${r.exerciseName.split(' ')[0]} ${formatPersonalRecordMetric(r.metrics[0], data.units)}`).join(' · ') || 'No valid records yet'}
        defaultExpanded={false}
      >
        {records.length ? (
          <div className="progress-pr-list">
            {records.slice(0, 3).map((record) => (
              <PrPreview
                key={record.exerciseId}
                record={record}
                units={data.units}
                onClick={() => {
                  playEffect('select')
                  setRecordsOpen(true)
                }}
              />
            ))}
          </div>
        ) : (
          <p className="progress-no-data">Complete measurable sets to establish personal records.</p>
        )}
        <button
          className="progress-pr-cta"
          type="button"
          onClick={() => {
            playEffect('select')
            setRecordsOpen(true)
          }}
        >
          <span>
            <Award size={18} aria-hidden="true" /> View All PRs
          </span>
          <ChevronRight size={16} aria-hidden="true" />
        </button>
      </CollapsibleModule>

      {/* 4. NUTRITION HISTORY (COLLAPSIBLE DRAWER) */}
      <CollapsibleModule
        id="progress-nutrition"
        title="Nutrition History"
        badge={`${nutrition.loggedDays} ${nutrition.loggedDays === 1 ? 'Day' : 'Days'}`}
        summary={nutrition.loggedDays ? `Avg ${formatNumber(nutrition.averageKcal)} kcal · ${formatNumber(nutrition.averageProtein)}g P` : 'No food history'}
        defaultExpanded={false}
      >
        {nutrition.loggedDays ? <div className="nutrition-average-grid progress-attr-grid">
          <div className="progress-attr-cell">
            <span>Average Calories</span>
            <strong>{formatNumber(nutrition.averageKcal)} kcal</strong>
            <small>Per logged day</small>
          </div>
          <div className="progress-attr-cell">
            <span>Average Protein</span>
            <strong>{formatNumber(nutrition.averageProtein)} g</strong>
            <small>Per logged day</small>
          </div>
        </div> : <div className="progress-no-data"><Utensils aria-hidden="true" /><p>Log meals in Food to see calorie and protein history.</p></div>}
      </CollapsibleModule>
    </>}
    {helpOpen ? <GuideDialog eyebrow="Connected insights" steps={progressHelpSteps} onClose={() => setHelpOpen(false)} /> : null}
  </CommandPageFrame>
}
function CharacterHero({ data, onRank, onAchievements }: { data: GamificationDashboard; onRank: () => void; onAchievements: () => void }) {
  const { playEffect } = useAudio()
  const { progression } = data
  const percent = progression.maxLevel ? 100 : Math.min(100, (progression.xpIntoLevel / progression.xpRequiredForNextLevel) * 100)
  return <section className="progress-hero-card progress-character-hero">
    <GamificationBadge kind="rank" src={rankAssetPath(progression.rank)} label={`${progression.rank.name} rank emblem`} />
    <div className="progress-hero-info progress-character-copy">
      <p className="eyebrow">Level {progression.level}</p>
      <h2>{progression.rank.name}</h2>
      <div className="food-bar-track gamification-progress" role="progressbar" aria-label={progression.maxLevel ? 'Maximum level reached' : `Level ${progression.level} XP progress`} aria-valuemin={0} aria-valuemax={progression.maxLevel ? 100 : progression.xpRequiredForNextLevel} aria-valuenow={progression.maxLevel ? 100 : progression.xpIntoLevel}>
        <div className="food-bar-fill" style={{ width: `${percent}%` }} />
      </div>
      <small>{progression.maxLevel ? 'MAX LEVEL' : `${progression.xpIntoLevel.toLocaleString()} / ${progression.xpRequiredForNextLevel.toLocaleString()} XP to Level ${progression.level + 1}`} · {progression.totalXp.toLocaleString()} Lifetime XP</small>
    </div>
    <div className="progress-character-actions">
      <button className="secondary-button" type="button" onClick={() => { playEffect('select'); onRank() }}>Rank Journey</button>
      <button className="secondary-button" type="button" onClick={() => { playEffect('select'); onAchievements() }}>Achievements</button>
    </div>
  </section>
}
function SimpleBarChart({ buckets, valueLabel, emptyText }: { buckets: TrendBucket[]; valueLabel: string; emptyText: string }) {
  const maximum = Math.max(0, ...buckets.map((bucket) => bucket.value))
  if (!buckets.length || maximum === 0) return <p className="progress-chart-empty">{emptyText}</p>
  return <div className="progress-chart" role="img" aria-label={buckets.map((bucket) => `${bucket.label}: ${formatNumber(bucket.value)} ${valueLabel}`).join('; ')}>
    {buckets.map((bucket) => {
      const isPeak = bucket.value > 0 && bucket.value === maximum
      return <div className={`progress-chart-column ${isPeak ? 'is-peak' : ''}`} key={bucket.key} aria-hidden="true">
        <span className="progress-chart-value">{formatCompact(bucket.value)}</span>
        <i style={{ '--progress-bar-height': `${Math.max(4, (bucket.value / maximum) * 100)}%` } as CSSProperties} />
        <small>{bucket.label}</small>
      </div>
    })}
  </div>
}
function PrPreview({ record, units, onClick }: { record: ExercisePersonalRecords; units: ProgressSourceData['units']; onClick?: () => void }) {
  const metric = record.metrics[0]
  return (
    <button
      type="button"
      className="proto-item-row progress-pr-card"
      onClick={onClick}
      aria-label={`View ${record.exerciseName} records`}
    >
      <div className="proto-item-info">
        <strong className="progress-pr-title">{record.exerciseName}</strong>
        <small className="progress-pr-meta">
          {metric.label} · {formatPersonalRecordDate(metric.dateKey)}
        </small>
      </div>
      <span className="proto-item-value progress-pr-value">{formatPersonalRecordMetric(metric, units)}</span>
    </button>
  )
}

type PrFilterCategory = 'all' | 'weight' | 'bodyweight_reps' | 'duration' | 'distance'
type PrSortOption = 'recent' | 'name'

function matchCategory(type: ExercisePersonalRecords['trackingType'], category: PrFilterCategory): boolean {
  if (category === 'all') return true
  if (category === 'weight') return type === 'weight_reps' || type === 'weight_distance' || type === 'weight_duration'
  if (category === 'bodyweight_reps') return type === 'bodyweight_reps' || type === 'reps_only' || type === 'assisted_bodyweight'
  if (category === 'duration') return type === 'duration' || type === 'duration_reps' || type === 'duration_optional_distance' || type === 'weight_duration' || type === 'distance_duration'
  if (category === 'distance') return type === 'distance_duration' || type === 'duration_optional_distance' || type === 'weight_distance'
  return true
}

function formatTrackingBadge(type: ExercisePersonalRecords['trackingType']): string {
  switch (type) {
    case 'weight_reps': return 'Weight & Reps'
    case 'bodyweight_reps': return 'Bodyweight'
    case 'assisted_bodyweight': return 'Assisted'
    case 'reps_only': return 'Reps Only'
    case 'duration': return 'Duration'
    case 'distance_duration': return 'Distance'
    case 'duration_optional_distance': return 'Duration / Dist'
    case 'weight_distance': return 'Weight + Dist'
    case 'duration_reps': return 'Duration + Reps'
    case 'weight_duration': return 'Weight + Time'
  }
}

function getPrimaryMetricShortLabel(metric: PersonalRecordMetric): string {
  switch (metric.kind) {
    case 'weight': return 'Heaviest'
    case 'reps': return 'Highest'
    case 'duration': return 'Longest'
    case 'distance': return 'Longest Dist'
    case 'weighted-reps': return 'Best Reps'
    case 'set-volume': return 'Best Volume'
    case 'assistance-reps': return 'Best Assisted'
    default: return metric.label
  }
}

// Chapter Body-Region Icons
function ChapterChestIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 6h3.5l4.5 3 4.5-3H20v4c0 4.5-3.5 8-8 9-4.5-1-8-4.5-8-9V6z" />
      <path d="M4 11c2.5 2 5 2 8 0" />
      <path d="M12 11c3 2 5.5 2 8 0" />
      <path d="M12 9v5" />
    </svg>
  )
}

function ChapterBackIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 6l3.5-2h11L21 6l-3.5 12H6.5L3 6z" />
      <path d="M12 4v14" />
      <path d="M5 9c2.5 2 5 3 7 3s4.5-1 7-3" />
      <path d="M6.5 13.5c2 1.5 4 2 5.5 2s3.5-.5 5.5-2" />
    </svg>
  )
}

function ChapterShouldersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 13V9a4 4 0 0 1 4-4h2.5l3.5 3 3.5-3H18a4 4 0 0 1 4 4v4" />
      <path d="M6 9a3 3 0 0 0-3 3" />
      <path d="M18 9a3 3 0 0 1 3 3" />
      <path d="M6.5 5.5l2.5 6.5" />
      <path d="M17.5 5.5l-2.5 6.5" />
      <path d="M9 12h6" />
    </svg>
  )
}

function ChapterLegsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 4h14l-1 7.5 1 8.5h-3.5l-1-7-2.5-4-2.5 4-1 7H5l1-8.5L5 4z" />
      <path d="M8.5 11.5h1" />
      <path d="M14.5 11.5h1" />
    </svg>
  )
}

function ChapterArmsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 13.5c0 3.5 2.5 5.5 6 5.5h4c3.3 0 6-2.5 6-6V9a2 2 0 0 0-2-2h-1.5" />
      <path d="M3 13.5c0-2.8 1.8-4.5 4.5-4.5 2.2 0 3.8 1.5 4.8 3.5" />
      <path d="M15.5 7V4.5a1.5 1.5 0 0 0-1.5-1.5h-1a1.5 1.5 0 0 0-1.5 1.5V7" />
      <path d="M7.5 9c1-2 2.8-3.5 5.5-3.5" />
    </svg>
  )
}

function ChapterCoreIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 3h14l-2 18H7L5 3z" />
      <path d="M12 3v18" />
      <path d="M6.5 7.5h11" />
      <path d="M7 12h10" />
      <path d="M7.5 16.5h9" />
    </svg>
  )
}

function ChapterCardioIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 7.65l.77.78L12 20.67l7.65-7.66.77-.78a5.4 5.4 0 0 0 0-7.65z" />
      <path d="M3.5 12h3.5l2-3.5 3 7 2-3.5h6.5" />
    </svg>
  )
}

function getChapterIcon(id: ChapterId) {
  switch (id) {
    case 'chest': return <ChapterChestIcon />
    case 'back': return <ChapterBackIcon />
    case 'shoulders': return <ChapterShouldersIcon />
    case 'legs': return <ChapterLegsIcon />
    case 'arms': return <ChapterArmsIcon />
    case 'core': return <ChapterCoreIcon />
    case 'cardio': return <ChapterCardioIcon />
  }
}

// PR Metric Type Icons
function PrWeightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 5v14M18 5v14M2 8v8M22 8v8M6 12h12M2 12H6M18 12h4" />
    </svg>
  )
}

function PrRepsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 12a8 8 0 0 1 14.93-4M20 12a8 8 0 0 1-14.93 4" />
      <path d="M19 4v4h-4M5 20v-4h4" />
      <path d="M10 9.5v5M14 9.5v5" />
    </svg>
  )
}

function PrDurationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="13" r="8" />
      <path d="M12 9v4l2.5 2.5" />
      <path d="M10 2h4M12 2v3M19 6l-1.5 1.5" />
    </svg>
  )
}

function PrDistanceIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="6" cy="18" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <path d="M8.5 18H13a4 4 0 0 0 4-4V9.5" />
      <path d="M15.5 6H11a4 4 0 0 0-4 4v4.5" />
    </svg>
  )
}

function getRecordMetricIcon(record: ExercisePersonalRecords) {
  const primaryMetric = record.metrics[0]
  if (!primaryMetric) return <PrWeightIcon />
  const kind = primaryMetric.kind
  if (kind === 'weight' || kind === 'weighted-reps' || kind === 'set-volume') return <PrWeightIcon />
  if (kind === 'reps' || kind === 'assistance-reps') return <PrRepsIcon />
  if (kind === 'duration') return <PrDurationIcon />
  if (kind === 'distance') return <PrDistanceIcon />
  const type = record.trackingType
  if (type === 'weight_reps' || type === 'weight_distance' || type === 'weight_duration') return <PrWeightIcon />
  if (type === 'bodyweight_reps' || type === 'reps_only' || type === 'assisted_bodyweight') return <PrRepsIcon />
  if (type === 'duration' || type === 'duration_reps') return <PrDurationIcon />
  if (type === 'distance_duration' || type === 'duration_optional_distance') return <PrDistanceIcon />
  return <PrWeightIcon />
}

const FILTER_LABELS: Record<PrFilterCategory, string> = {
  all: 'All',
  weight: 'Weight Dimension',
  bodyweight_reps: 'Bodyweight / Reps',
  duration: 'Duration Dimension',
  distance: 'Distance Dimension',
}

const prRecordHelpSteps: readonly GuideStep[] = [
  {
    title: 'Personal Records (Record Book)',
    sections: [
      {
        text: 'Personal Records are derived automatically from your best verified workout sets across all tracked exercises.',
      },
      {
        label: 'Chapters',
        text: 'Exercises are grouped by body region. Tap any chapter to expand its personal records. Only one chapter expands at a time to keep browsing focused.',
      },
      {
        label: 'Milestones & Search',
        bullets: [
          'Type in Search to find any exercise record across all chapters.',
          'Tap any multi-record card to view supporting bests (e.g. Best Set Volume, Best Reps at Heaviest Weight).',
          'Use Filter / Sort to isolate specific tracking dimensions like Weight, Reps, Duration, or Distance.',
        ],
      },
    ],
  },
]

function PersonalRecordsView({
  records,
  units,
  gamification,
  onBack,
}: {
  records: ExercisePersonalRecords[]
  units: ProgressSourceData['units']
  gamification?: GamificationDashboard
  onBack: () => void
}) {
  const { playEffect } = useAudio()
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<PrFilterCategory>('all')
  const [sort, setSort] = useState<PrSortOption>('recent')
  const [openChapterId, setOpenChapterId] = useState<ChapterId | null>(null)
  const [expandedIds, setExpandedIds] = useState<Set<string>>(() => new Set())
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)
  const [helpOpen, setHelpOpen] = useState(false)

  const toggleExpanded = (exerciseId: string) => {
    playEffect('select')
    setExpandedIds((prev) => {
      const next = new Set(prev)
      if (next.has(exerciseId)) {
        next.delete(exerciseId)
      } else {
        next.add(exerciseId)
      }
      return next
    })
  }

  const handleChapterToggle = (chapterId: ChapterId) => {
    playEffect('select')
    setOpenChapterId((prev) => (prev === chapterId ? null : chapterId))
  }

  // Chapter aggregation
  const chaptersWithRecords = useMemo(() => {
    return CANONICAL_CHAPTERS.map((chapter) => {
      const chapterRecords = records.filter((r) => getChapterForRecord(r) === chapter.id)
      const matchingFilter = chapterRecords.filter((r) => matchCategory(r.trackingType, category))
      if (sort === 'name') {
        matchingFilter.sort((a, b) => a.exerciseName.localeCompare(b.exerciseName))
      } else {
        matchingFilter.sort((a, b) => b.lastPrAt - a.lastPrAt || a.exerciseName.localeCompare(b.exerciseName))
      }
      return {
        ...chapter,
        records: matchingFilter,
        totalCount: matchingFilter.length,
        latestRecord: matchingFilter[0] as ExercisePersonalRecords | undefined,
      }
    })
  }, [records, category, sort])

  const totalFilteredExercises = useMemo(() => {
    return chaptersWithRecords.reduce((sum, ch) => sum + ch.records.length, 0)
  }, [chaptersWithRecords])

  const totalFilteredRecords = useMemo(() => {
    return chaptersWithRecords.reduce((sum, ch) => sum + ch.records.reduce((rSum, r) => rSum + r.metrics.length, 0), 0)
  }, [chaptersWithRecords])

  const overallLatestRecord = useMemo(() => {
    const allMatching = chaptersWithRecords.flatMap((ch) => ch.records)
    if (!allMatching.length) return null
    return allMatching.reduce((latest, r) => (r.lastPrAt > latest.lastPrAt ? r : latest), allMatching[0])
  }, [chaptersWithRecords])

  // Flat search results mode
  const isSearchActive = query.trim().length > 0
  const searchResults = useMemo(() => {
    if (!isSearchActive) return []
    const searched = searchPersonalRecords(records, query)
    const filtered = searched.filter((r) => matchCategory(r.trackingType, category))
    if (sort === 'name') {
      return [...filtered].sort((a, b) => a.exerciseName.localeCompare(b.exerciseName))
    }
    return [...filtered].sort((a, b) => b.lastPrAt - a.lastPrAt || a.exerciseName.localeCompare(b.exerciseName))
  }, [records, query, category, sort, isSearchActive])

  function renderRecordItem(record: ExercisePersonalRecords) {
    const primaryMetric = record.metrics[0]
    const supportingMetrics = record.metrics.slice(1)
    const hasSupporting = supportingMetrics.length > 0
    const isExpanded = expandedIds.has(record.exerciseId)
    const drawerId = `pr-drawer-${record.exerciseId}`

    return (
      <article
        className={`pr-card ${hasSupporting ? 'is-expandable' : 'is-static'} ${isExpanded ? 'is-expanded' : ''}`}
        key={record.exerciseId}
        data-name={record.exerciseName.toLowerCase()}
      >
        {hasSupporting ? (
          <button
            type="button"
            className="pr-card-main"
            onClick={() => toggleExpanded(record.exerciseId)}
            aria-expanded={isExpanded}
            aria-controls={drawerId}
            aria-label={`${record.exerciseName} record, ${isExpanded ? 'collapse details' : 'expand supporting records'}`}
          >
            <div className="pr-badge-slot" aria-hidden="true">
              {getRecordMetricIcon(record)}
            </div>
            <div className="pr-card-info">
              <strong className="pr-card-title">{record.exerciseName}</strong>
              <div className="pr-card-meta">
                <span className="pr-tag-badge">{formatTrackingBadge(record.trackingType)}</span>
                <span>{formatPersonalRecordDate(primaryMetric.dateKey)}</span>
              </div>
            </div>
            <div className="pr-card-right">
              <div className="pr-primary-value-block">
                <span className="pr-primary-value">{formatPersonalRecordMetric(primaryMetric, units)}</span>
                <span className="pr-primary-label">{getPrimaryMetricShortLabel(primaryMetric)}</span>
              </div>
              <span className="pr-chevron" aria-hidden="true">
                ▶
              </span>
            </div>
          </button>
        ) : (
          <div className="pr-card-main">
            <div className="pr-badge-slot" aria-hidden="true">
              {getRecordMetricIcon(record)}
            </div>
            <div className="pr-card-info">
              <strong className="pr-card-title">{record.exerciseName}</strong>
              <div className="pr-card-meta">
                <span className="pr-tag-badge">{formatTrackingBadge(record.trackingType)}</span>
                <span>{formatPersonalRecordDate(primaryMetric.dateKey)}</span>
              </div>
            </div>
            <div className="pr-card-right">
              <div className="pr-primary-value-block">
                <span className="pr-primary-value">{formatPersonalRecordMetric(primaryMetric, units)}</span>
                <span className="pr-primary-label">{getPrimaryMetricShortLabel(primaryMetric)}</span>
              </div>
            </div>
          </div>
        )}

        {hasSupporting && isExpanded ? (
          <div className="pr-card-drawer" id={drawerId}>
            <span className="pr-drawer-eyebrow">Supporting Record Milestones</span>
            <div className="pr-submetric-grid">
              {supportingMetrics.map((metric) => (
                <div className="pr-submetric-chip" key={metric.key}>
                  <div className="pr-submetric-chip-label">
                    <strong>{metric.label}</strong>
                    <small>{formatPersonalRecordDate(metric.dateKey)}</small>
                  </div>
                  <span className="pr-submetric-chip-val">{formatPersonalRecordMetric(metric, units)}</span>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </article>
    )
  }

  const terminalMetaText = gamification
    ? `LV ${gamification.progression.level} · ${gamification.progression.rank.name.toUpperCase()}`
    : 'RECORD BOOK'

  return (
    <CommandPageFrame
      className="page-stack progress-page personal-records-page"
      terminalTitle="FITDEX // RECORD BOOK"
      terminalMeta={terminalMetaText}
      headerActions={
        <button
          className="page-help-button progress-help-button cmd-icon-btn"
          type="button"
          onClick={() => {
            playEffect('select')
            setHelpOpen(true)
          }}
          aria-label="How Personal Records Work"
          title="How Personal Records Work"
        >
          <CircleHelp size={16} aria-hidden="true" />
        </button>
      }
    >
      <header className="progress-subheader">
        <button
          className="back-button"
          type="button"
          aria-label="Back to Progress"
          onClick={() => {
            playEffect('select')
            onBack()
          }}
        >
          <ArrowLeft aria-hidden="true" />
        </button>
        <div>
          <p className="eyebrow">Progress archive</p>
          <h1>Personal Records</h1>
          <p>Record Book · All-Time Bests</p>
        </div>
      </header>

      {/* Lightweight Metadata Strip */}
      <div className="pr-meta-strip" aria-label="Personal Records Summary">
        <span>
          <strong>{totalFilteredExercises}</strong> Exercises · <strong>{totalFilteredRecords}</strong> Records
        </span>
        <span>
          Latest · <strong>{overallLatestRecord ? formatPersonalRecordDate(overallLatestRecord.lastPrDateKey) : '—'}</strong>
        </span>
      </div>

      {/* Search & Filter / Sort Controls */}
      <section className="pr-index-controls" aria-label="Search and filter records">
        <div className="pr-search-bar">
          <Search size={15} className="pr-search-icon" aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search exercises by name…"
            aria-label="Search personal records by exercise name"
          />
        </div>

        <button
          type="button"
          className={`pr-filter-trigger-btn ${category !== 'all' || sort !== 'recent' ? 'has-filter' : ''}`}
          onClick={() => {
            playEffect('select')
            setIsFilterModalOpen(true)
          }}
          aria-label="Open Filter and Sort Options"
        >
          <span>⚙ Filter / Sort</span>
        </button>
      </section>

      {/* Active Filter Pill */}
      {category !== 'all' ? (
        <div className="pr-active-filter-row" aria-live="polite">
          <span className="pr-active-pill">
            <span>Filter: {FILTER_LABELS[category]}</span>
            <button
              type="button"
              className="pr-pill-remove"
              onClick={() => {
                playEffect('select')
                setCategory('all')
              }}
              aria-label="Clear filter"
            >
              ×
            </button>
          </span>
          <span style={{ color: 'var(--color-text-muted)' }}>{totalFilteredExercises} exercises match</span>
        </div>
      ) : null}

      {/* Main Content: Search Results vs. C2 Chapter Accordion Index */}
      {isSearchActive ? (
        <section className="personal-record-list" aria-label={`Search matches for ${query}`}>
          <div className="pr-list-meta-row" style={{ padding: '0 2px' }}>
            <span className="progress-search-count" aria-live="polite">
              Showing <strong>{searchResults.length}</strong> {searchResults.length === 1 ? 'match' : 'matches'} for &ldquo;{query}&rdquo;
            </span>
          </div>
          {searchResults.length ? (
            searchResults.map((record) => renderRecordItem(record))
          ) : (
            <Panel className="progress-records-empty">
              <h2>No matching records</h2>
              <p>Try searching for a different exercise name or clearing active filters.</p>
            </Panel>
          )}
        </section>
      ) : totalFilteredExercises > 0 ? (
        <section className="pr-chapter-list" aria-label="Exercise category chapters">
          {chaptersWithRecords
            .filter((ch) => ch.records.length > 0)
            .map((chapter) => {
              const isOpen = openChapterId === chapter.id
              const chapterBodyId = `chapter-body-${chapter.id}`

              return (
                <article className={`pr-chapter-card ${isOpen ? 'is-open' : ''}`} key={chapter.id} id={`chapter-card-${chapter.id}`}>
                  <button
                    type="button"
                    className="pr-chapter-header"
                    onClick={() => handleChapterToggle(chapter.id)}
                    aria-expanded={isOpen}
                    aria-controls={chapterBodyId}
                    aria-label={`${chapter.name} chapter, ${chapter.records.length} exercises, ${isOpen ? 'collapse chapter' : 'expand chapter'}`}
                  >
                    <div className="pr-chapter-icon-slot" aria-hidden="true">
                      {getChapterIcon(chapter.id)}
                    </div>
                    <div className="pr-chapter-info">
                      <div className="pr-chapter-title-row">
                        <span className="pr-chapter-name">{chapter.name}</span>
                        <span className="pr-chapter-count-badge">{chapter.records.length}</span>
                      </div>
                      {chapter.latestRecord ? (
                        <span className="pr-chapter-latest">
                          Latest · {chapter.latestRecord.exerciseName} ·{' '}
                          <strong>{formatPersonalRecordMetric(chapter.latestRecord.metrics[0], units)}</strong>
                        </span>
                      ) : null}
                    </div>
                    <span className="pr-chapter-chevron" aria-hidden="true">
                      ▶
                    </span>
                  </button>

                  {isOpen ? (
                    <div className="pr-chapter-accordion-body" id={chapterBodyId}>
                      {chapter.records.map((record) => renderRecordItem(record))}
                    </div>
                  ) : null}
                </article>
              )
            })}
        </section>
      ) : records.length ? (
        <Panel className="progress-records-empty">
          <h2>No matching records</h2>
          <p>No exercises match the selected filter. Change or clear active filters.</p>
        </Panel>
      ) : (
        <Panel className="progress-records-empty">
          <h2>No personal records yet</h2>
          <p>Complete measurable workout sets to establish records.</p>
        </Panel>
      )}

      {/* Filter / Sort Bottom Sheet Modal */}
      <div
        className={`proto-modal-backdrop ${isFilterModalOpen ? 'is-open' : ''}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setIsFilterModalOpen(false)
          }
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Filter and Sort Personal Records"
      >
        <div className="proto-filter-sheet">
          <div className="proto-sheet-header">
            <h3>Filter &amp; Sort</h3>
            <button
              type="button"
              className="proto-sheet-close"
              onClick={() => setIsFilterModalOpen(false)}
              aria-label="Close Filter Settings"
            >
              ✕
            </button>
          </div>

          <div className="proto-sheet-section">
            <span className="proto-sheet-label">Filter Dimension</span>
            <div className="proto-sheet-options" role="radiogroup" aria-label="Filter dimension">
              {(
                [
                  { key: 'all', label: 'All' },
                  { key: 'weight', label: 'Weight' },
                  { key: 'bodyweight_reps', label: 'Bodyweight / Reps' },
                  { key: 'duration', label: 'Duration' },
                  { key: 'distance', label: 'Distance' },
                ] as const
              ).map((opt) => (
                <button
                  type="button"
                  key={opt.key}
                  className={`proto-sheet-opt-btn ${category === opt.key ? 'active' : ''}`}
                  onClick={() => {
                    playEffect('select')
                    setCategory(opt.key)
                  }}
                  role="radio"
                  aria-checked={category === opt.key}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div className="proto-sheet-section">
            <span className="proto-sheet-label">Sort Order (Within Chapters &amp; Search)</span>
            <div className="proto-sheet-options" role="radiogroup" aria-label="Sort order">
              <button
                type="button"
                className={`proto-sheet-opt-btn ${sort === 'recent' ? 'active' : ''}`}
                onClick={() => {
                  playEffect('select')
                  setSort('recent')
                }}
                role="radio"
                aria-checked={sort === 'recent'}
              >
                Latest PR Date
              </button>
              <button
                type="button"
                className={`proto-sheet-opt-btn ${sort === 'name' ? 'active' : ''}`}
                onClick={() => {
                  playEffect('select')
                  setSort('name')
                }}
                role="radio"
                aria-checked={sort === 'name'}
              >
                Alphabetical (A–Z)
              </button>
            </div>
          </div>

          <button
            type="button"
            className="pr-filter-trigger-btn"
            style={{ width: '100%', justifyContent: 'center', minHeight: '38px', marginTop: '6px' }}
            onClick={() => setIsFilterModalOpen(false)}
          >
            Apply Settings
          </button>
        </div>
      </div>

      {helpOpen ? <GuideDialog eyebrow="Record book insights" steps={prRecordHelpSteps} onClose={() => setHelpOpen(false)} /> : null}
    </CommandPageFrame>
  )
}

function formatNumber(value: number) { return new Intl.NumberFormat(undefined, { maximumFractionDigits: 1 }).format(Number.isFinite(value) ? value : 0) }
function formatCompact(value: number) { return new Intl.NumberFormat(undefined, { notation: value >= 10000 ? 'compact' : 'standard', maximumFractionDigits: 1 }).format(value) }
