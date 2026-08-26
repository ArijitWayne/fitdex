import { ArrowLeft, Award, CircleHelp, Clock3, Dumbbell, Search, TrendingUp, Utensils } from 'lucide-react'
import { type CSSProperties, useEffect, useMemo, useState } from 'react'
import { Panel } from '../components/ui/Panel'
import { derivePersonalRecords, formatPersonalRecordDate, formatPersonalRecordMetric, searchPersonalRecords, type ExercisePersonalRecords } from '../features/progress/personalRecords'
import { buildNutritionTrend, buildVolumeTrend, buildWorkoutFrequencyTrend, calculateNutritionSummary, calculateTrainingSeconds, calculateTrainingVolume, calculateVolumeComparison, formatTrainingTime, PROGRESS_PERIODS, type ProgressPeriod, type TrendBucket } from '../features/progress/progressModel'
import { loadProgressSource, type ProgressSourceData } from '../features/progress/progressRepository'
import { getLocalDateKey } from '../utils/localDate'
import { displayWeightFromKg } from '../utils/units'
import { PageHeader } from './PageHeader'
import { GuideDialog, type GuideStep } from '../features/help/GuideDialog'

const PERIOD_LABELS: Record<ProgressPeriod, string> = { '7d': '7D', '30d': '30D', '90d': '90D', all: 'All' }
const progressHelpSteps: readonly GuideStep[] = [{ title: 'How Progress Works', sections: [{ text: 'Progress is calculated automatically from completed workouts and Food history. There is nothing extra to log here.' }, { label: 'Workout data', bullets: ['Workout count', 'Training time', 'Resistance Volume', 'Personal Records'] }, { label: 'Food data', bullets: ['Average calories', 'Average protein', 'Nutrition trends'] }, { label: 'Resistance Volume', text: 'Weight × reps across logged weight-based resistance sets. It is a workload measure, not a universal score of training quality.' }] }]

export function ProgressPage() {
  const [period, setPeriod] = useState<ProgressPeriod>('30d')
  const [data, setData] = useState<ProgressSourceData>()
  const [error, setError] = useState('')
  const [recordsOpen, setRecordsOpen] = useState(false)
  const [helpOpen, setHelpOpen] = useState(false)
  const referenceDateKey = getLocalDateKey()

  useEffect(() => {
    let current = true
    void loadProgressSource(period, referenceDateKey)
      .then((result) => { if (current) setData(result) })
      .catch((reason: unknown) => { if (current) setError(reason instanceof Error ? reason.message : 'Progress history could not be loaded.') })
    return () => { current = false }
  }, [period, referenceDateKey])

  const records = useMemo(() => data ? derivePersonalRecords(data.allWorkouts, data.definitions) : [], [data])
  if (recordsOpen && data) return <PersonalRecordsView records={records} units={data.units} onBack={() => setRecordsOpen(false)} />

  const selectPeriod = (next: ProgressPeriod) => {
    setData(undefined)
    setError('')
    setPeriod(next)
  }
  const workoutCount = data?.currentWorkouts.length ?? 0
  const trainingSeconds = calculateTrainingSeconds(data?.currentWorkouts ?? [])
  const volumeKg = calculateTrainingVolume(data?.currentWorkouts ?? [])
  const previousVolumeKg = calculateTrainingVolume(data?.previousWorkouts ?? [])
  const comparison = calculateVolumeComparison(volumeKg, previousVolumeKg, period)
  const frequencyTrend = buildWorkoutFrequencyTrend(data?.currentWorkouts ?? [], period, referenceDateKey)
  const volumeTrend = buildVolumeTrend(data?.currentWorkouts ?? [], period, referenceDateKey)
  const nutrition = calculateNutritionSummary(data?.foodEntries ?? [])
  const nutritionTrend = buildNutritionTrend(data?.foodEntries ?? [], period, referenceDateKey)
  const displayVolume = data ? displayWeightFromKg(volumeKg, data.units.preference) : 0

  return <div className="page-stack progress-page">
    <PageHeader eyebrow="Character stats" title="Progress" description="See how your training is changing" action={<button className="page-help-button" type="button" onClick={() => setHelpOpen(true)}><CircleHelp size={18} aria-hidden="true" /> How Progress Works</button>} />

    <Panel className="progress-overview" eyebrow="Overview">
      <div className="progress-metric-grid">
        <ProgressMetric icon={<Dumbbell />} label="Workouts" value={formatNumber(workoutCount)} />
        <ProgressMetric icon={<Clock3 />} label="Training Time" value={formatTrainingTime(trainingSeconds)} />
        <ProgressMetric icon={<TrendingUp />} label="Resistance Volume" value={`${formatNumber(displayVolume)} ${data?.units.weightLabel ?? 'kg'}`} />
        <ProgressMetric icon={<Award />} label="PR Exercises" value={formatNumber(records.length)} />
      </div>
    </Panel>

    <section className="progress-period" aria-labelledby="progress-period-title">
      <p className="eyebrow" id="progress-period-title">Period</p>
      <div>{PROGRESS_PERIODS.map((item) => <button type="button" key={item} aria-pressed={period === item} className={period === item ? 'is-selected' : ''} onClick={() => selectPeriod(item)}>{PERIOD_LABELS[item]}</button>)}</div>
    </section>

    {!data ? <Panel><p className="progress-loading" aria-live="polite">Loading progress…</p>{error ? <p className="form-error" role="alert">{error}</p> : null}</Panel> : !data.hasAnyHistory ? <Panel className="progress-empty"><span className="empty-glyph" aria-hidden="true">↗</span><div><h2>Start building your history</h2><p>Complete workouts and log meals to see progress here.</p></div></Panel> : <>
      <Panel className="progress-section" eyebrow="Workout consistency" title={workoutCount ? `${workoutCount} completed ${workoutCount === 1 ? 'workout' : 'workouts'}` : 'No completed training in this period'}>
        <SimpleBarChart buckets={frequencyTrend} valueLabel="workouts" emptyText="No completed workouts in this period." />
        <p className="progress-chart-summary">{workoutCount} completed {workoutCount === 1 ? 'workout' : 'workouts'} in this period.</p>
      </Panel>

      <Panel className="progress-section" eyebrow="Resistance volume" title={`${formatNumber(displayVolume)} ${data.units.weightLabel}`}>
        <p className="progress-volume-help">Total weight × reps across logged resistance sets.</p>
        <SimpleBarChart buckets={volumeTrend.map((bucket) => ({ ...bucket, value: displayWeightFromKg(bucket.value, data.units.preference) }))} valueLabel={data.units.weightLabel} emptyText="No completed weight-and-reps volume in this period." />
        {comparison.kind === 'percent' ? <p className="progress-comparison">{comparison.percent >= 0 ? '+' : ''}{formatNumber(comparison.percent)}% vs previous period</p> : comparison.kind === 'no-previous' ? <p className="progress-comparison">No previous volume</p> : null}
      </Panel>

      <Panel className="progress-section progress-pr-preview" eyebrow="Personal records" title={records.length ? `${records.length} exercises with records` : 'No valid records yet'}>
        {records.length ? <div className="progress-pr-list">{records.slice(0, 4).map((record) => <PrPreview key={record.exerciseId} record={record} units={data.units} />)}</div> : <p className="progress-no-data">Complete measurable sets to establish personal records.</p>}
        <button className="secondary-button" type="button" onClick={() => setRecordsOpen(true)}>View All PRs <Award size={17} aria-hidden="true" /></button>
      </Panel>

      <Panel className="progress-section" eyebrow="Nutrition" title={nutrition.loggedDays ? `${nutrition.loggedDays} logged ${nutrition.loggedDays === 1 ? 'day' : 'days'}` : 'No food history in this period'}>
        {nutrition.loggedDays ? <><div className="nutrition-average-grid"><span><strong>{formatNumber(nutrition.averageKcal)} kcal</strong><small>Average Calories</small></span><span><strong>{formatNumber(nutrition.averageProtein)} g</strong><small>Average Protein</small></span></div><SimpleBarChart buckets={nutritionTrend} valueLabel="average kcal" emptyText="Logged foods have no calorie values in this period." /><p className="progress-chart-summary">Averages use days with at least one food entry.</p></> : <div className="progress-no-data"><Utensils aria-hidden="true" /><p>Log meals in Food to see calorie and protein history.</p></div>}
      </Panel>
    </>}
    {helpOpen ? <GuideDialog eyebrow="Connected insights" steps={progressHelpSteps} onClose={() => setHelpOpen(false)} /> : null}
  </div>
}

function ProgressMetric({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return <div className="progress-metric"><span aria-hidden="true">{icon}</span><div><strong>{value}</strong><small>{label}</small></div></div>
}

function SimpleBarChart({ buckets, valueLabel, emptyText }: { buckets: TrendBucket[]; valueLabel: string; emptyText: string }) {
  const maximum = Math.max(0, ...buckets.map((bucket) => bucket.value))
  if (!buckets.length || maximum === 0) return <p className="progress-chart-empty">{emptyText}</p>
  return <div className="progress-chart" role="img" aria-label={buckets.map((bucket) => `${bucket.label}: ${formatNumber(bucket.value)} ${valueLabel}`).join('; ')}>
    {buckets.map((bucket) => <div className="progress-chart-column" key={bucket.key} aria-hidden="true"><span className="progress-chart-value">{formatCompact(bucket.value)}</span><i style={{ '--progress-bar-height': `${Math.max(4, (bucket.value / maximum) * 100)}%` } as CSSProperties} /><small>{bucket.label}</small></div>)}
  </div>
}

function PrPreview({ record, units }: { record: ExercisePersonalRecords; units: ProgressSourceData['units'] }) {
  const metric = record.metrics[0]
  return <article><div><strong>{record.exerciseName}</strong><small>{metric.label}</small></div><span><strong>{formatPersonalRecordMetric(metric, units)}</strong><small>{formatPersonalRecordDate(metric.dateKey)}</small></span></article>
}

function PersonalRecordsView({ records, units, onBack }: { records: ExercisePersonalRecords[]; units: ProgressSourceData['units']; onBack: () => void }) {
  const [query, setQuery] = useState('')
  const filtered = useMemo(() => searchPersonalRecords(records, query), [records, query])
  return <div className="page-stack progress-page personal-records-page">
    <header className="progress-subheader"><button className="back-button" type="button" aria-label="Back to Progress" onClick={onBack}><ArrowLeft aria-hidden="true" /></button><div><p className="eyebrow">Progress archive</p><h1>Personal Records</h1><p>Your best logged performances</p></div></header>
    <label className="progress-search"><Search size={19} aria-hidden="true" /><span className="sr-only">Search personal records by exercise name</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search exercises…" /></label>
    <p className="progress-search-count" aria-live="polite">{filtered.length} {filtered.length === 1 ? 'exercise' : 'exercises'}</p>
    {filtered.length ? <section className="personal-record-list" aria-label="Exercise personal records">{filtered.map((record) => <article className="panel personal-record-card" key={record.exerciseId}><header><div><p className="eyebrow">{trackingLabel(record.trackingType)}</p><h2>{record.exerciseName}</h2></div><Award aria-hidden="true" /></header><dl>{record.metrics.map((metric) => <div key={metric.key}><dt>{metric.label}</dt><dd><strong>{formatPersonalRecordMetric(metric, units)}</strong><small>{formatPersonalRecordDate(metric.dateKey)}</small></dd></div>)}</dl><p>Last PR · {formatPersonalRecordDate(record.lastPrDateKey)}</p></article>)}</section> : <Panel className="progress-records-empty"><h2>{records.length ? 'No matching records' : 'No personal records yet'}</h2><p>{records.length ? 'Try another exercise name.' : 'Complete measurable workout sets to establish records.'}</p></Panel>}
  </div>
}

function trackingLabel(type: ExercisePersonalRecords['trackingType']) {
  return type.replaceAll('_', ' ')
}

function formatNumber(value: number) {
  return new Intl.NumberFormat(undefined, { maximumFractionDigits: 1 }).format(Number.isFinite(value) ? value : 0)
}

function formatCompact(value: number) {
  return new Intl.NumberFormat(undefined, { notation: value >= 10000 ? 'compact' : 'standard', maximumFractionDigits: 1 }).format(value)
}
