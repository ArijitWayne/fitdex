import { type CSSProperties, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ArrowLeft, ChevronDown, ChevronLeft, ChevronRight, ChevronUp, CircleHelp, Pencil, Plus, Search, Trash2, X } from 'lucide-react'
import { liveQuery } from 'dexie'
import { CommandPageFrame } from '../components/layout/CommandPageFrame'
import { CollapsibleModule } from '../components/ui/CollapsibleModule'
import { ContextRail } from '../components/ui/ContextRail'
import { RetroLoader } from '../components/ui/RetroLoader'
import type { CustomFoodCategory, FoodLogEntry, FoodMeal, FoodNutrition, NutritionTargets, PredefinedFoodCategoryId, RememberedFood } from '../data/models'
import { CustomFoodCategoryIcon, FoodCategoryIcon, MealIcon } from '../features/food/FoodIcons'
import { addFoodLog, createCustomCategory, deleteCustomFoodCategory, deleteFoodLog, editFoodLog, getFrequentFoods, getRecentFoods, listCustomCategories, listFoodEntries, listMealEntries, searchRememberedFoods, updateRememberedFood, type FoodDraft } from '../features/food/foodRepository'
import { calculateMacroCalorieBreakdown, calculateMealCalorieBreakdown, categoryName, customCategoryCssColor, CUSTOM_CATEGORY_COLORS, dateFromKey, FOOD_MEAL_LABELS, normalizeDate, nutritionTotals, parseOptionalNutrition, PREDEFINED_FOOD_CATEGORIES, shiftDate, type NutritionBreakdown } from '../features/food/foodModel'
import { GuideDialog } from '../features/help/GuideDialog'
import { foodTutorialSteps } from '../features/help/tutorialSteps'
import { markTutorialSeen } from '../features/help/tutorialPreferences'
import { useAudio } from '../features/audio/useAudio'
import { foodSaveEffect } from '../features/audio/audioModel'
import { useBackNavigation } from '../features/navigation/useBackNavigation'
import { loadNutritionTargets } from '../features/nutritionTargets/nutritionTargetRepository'
import { calculateRmr, calculateTdee, evaluateCalorieDay, evaluateProteinDay } from '../features/nutritionTargets/nutritionTargetCalculator'
import { loadGamificationDashboard, type GamificationDashboard } from '../features/gamification/gamificationRepository'
import { isLocalToday } from '../utils/localDate'
import { acknowledgeFirstUse, loadFirstUseGuidance } from '../features/help/firstUseGuidance'

const CANONICAL_MEAL_ORDER: readonly FoodMeal[] = ['breakfast', 'lunch', 'dinner', 'supper'] as const

type View =
  | { kind: 'overview' }
  | { kind: 'meal'; meal: FoodMeal; notice?: string }
  | { kind: 'add'; meal: FoodMeal; editing?: FoodLogEntry }

type NutritionStrings = Record<keyof Required<FoodNutrition>, string>
type FormError = { field?: keyof NutritionStrings | 'name'; message: string }

const emptyNutrition: NutritionStrings = { kcal: '', protein: '', carbs: '', fat: '', fiber: '', sugar: '', saturatedFat: '', sodium: '' }
const nutritionKeys = Object.keys(emptyNutrition) as Array<keyof NutritionStrings>

function valueOrDash(value?: number, unit = 'g') {
  return value === undefined ? '—' : `${Math.round(value * 10) / 10}${unit === 'kcal' ? ' ' : ''}${unit}`
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat(undefined, { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' }).format(dateFromKey(date))
}

function rememberedFoodDraft(food: RememberedFood): FoodDraft {
  const draft: FoodDraft = { name: food.name, categoryId: food.categoryId, customCategoryId: food.customCategoryId }
  for (const key of nutritionKeys) if (food[key] !== undefined) draft[key] = food[key]
  return draft
}

function MacroStrip({ nutrition, secondary = false }: { nutrition: FoodNutrition; secondary?: boolean }) {
  const rows: Array<[keyof FoodNutrition, string, string]> = secondary
    ? [['carbs', 'Carbs', 'g'], ['fat', 'Fat', 'g'], ['fiber', 'Fiber', 'g'], ['sugar', 'Sugar', 'g'], ['saturatedFat', 'Sat. fat', 'g'], ['sodium', 'Sodium', 'mg']]
    : [['kcal', 'Calories', 'kcal'], ['protein', 'Protein', 'g']]
  return <div className={secondary ? 'food-macros food-macros-secondary' : 'food-macros'}>{rows.map(([key, label, unit]) => <div key={key}><strong>{valueOrDash(nutrition[key], unit)}</strong><span>{label}</span></div>)}</div>
}

type BreakdownMode = 'macros' | 'meals'
const breakdownColors = ['var(--color-chart-1)', 'var(--color-chart-2)', 'var(--color-chart-3)', 'var(--color-chart-4)']

function nutritionGradient(breakdown: NutritionBreakdown) {
  if (!breakdown.totalKcal) return 'none'
  let cursor = 0
  const stops = breakdown.slices.flatMap((slice, index) => {
    const start = cursor
    cursor += slice.percentage
    return [`${breakdownColors[index]} ${start}%`, `${breakdownColors[index]} ${cursor}%`]
  })
  return `conic-gradient(${stops.join(', ')})`
}

function NutritionBreakdownCard({ entries, totals }: { entries: readonly FoodLogEntry[]; totals: FoodNutrition }) {
  const [mode, setMode] = useState<BreakdownMode>('macros')
  const breakdown = mode === 'macros' ? calculateMacroCalorieBreakdown(totals) : calculateMealCalorieBreakdown(entries)
  const emptyMessage = !entries.length ? 'No nutrition logged for this day.' : mode === 'macros' ? 'No macro data logged.' : 'No meal calories logged.'
  const context = mode === 'macros' ? 'Macro-derived contribution' : 'Daily logged total'
  const accessibleSummary = breakdown.slices.map((slice) => `${slice.label}: ${Math.round(slice.kcal)} kilocalories, ${Math.round(slice.percentage)} percent`).join('; ')

  return <section className="food-breakdown" aria-labelledby="nutrition-breakdown-title">
    <header><div><p className="eyebrow" id="nutrition-breakdown-title">Nutrition breakdown</p><h2>{mode === 'macros' ? 'Calorie contribution' : 'Calories by meal'}</h2></div><div className="food-breakdown-switch" role="group" aria-label="Nutrition breakdown view"><button type="button" aria-pressed={mode === 'macros'} onClick={() => setMode('macros')}>Macros</button><button type="button" aria-pressed={mode === 'meals'} onClick={() => setMode('meals')}>Meals</button></div></header>
    {!breakdown.totalKcal ? <p className="food-breakdown-empty">{emptyMessage}</p> : <div className="food-breakdown-body">
      <div className="food-donut" style={{ '--food-donut': nutritionGradient(breakdown) } as CSSProperties} role="img" aria-label={`${context}: ${Math.round(breakdown.totalKcal)} kilocalories. ${accessibleSummary}`}><div><strong>{Math.round(breakdown.totalKcal)}</strong><span>kcal</span><small>{context}</small></div></div>
      <div className="food-breakdown-legend">{breakdown.slices.map((slice, index) => <div key={slice.key}><i style={{ '--food-slice': breakdownColors[index] } as CSSProperties} aria-hidden="true" /><span><strong>{slice.label}</strong><small>{mode === 'macros' ? `${Math.round((slice.grams ?? 0) * 10) / 10} g · ` : ''}{Math.round(slice.kcal)} kcal · {Math.round(slice.percentage)}%</small></span></div>)}</div>
    </div>}
    {mode === 'macros' && entries.length ? <p className="food-breakdown-note">Daily logged total: <strong>{Math.round(totals.kcal ?? 0)} kcal</strong>. Macro split is calculated from logged protein, carbs, and fat.</p> : null}
  </section>
}

function TargetMetric({ label, current, target, unit, difference, status, semantic, onInfo }: { label: string; current: number; target: number; unit: string; difference: number; status: string; semantic?: 'success' | 'warning' | 'danger'; onInfo?: () => void }) {
  const usableTarget = Number.isFinite(target) && target > 0
  const percent = usableTarget ? Math.min(100, Math.max(0, (current / target) * 100)) : 0
  const differenceCopy = usableTarget ? difference >= 0 ? `${difference} ${unit} remaining` : `${Math.abs(difference)} ${unit} ${unit === 'g' ? 'over target' : 'over'}` : 'Target unavailable'
  return <div className={`food-target-cell daily-target-metric${semantic ? ` is-${semantic}` : ''}${usableTarget ? '' : ' is-unavailable'}`}>
    <div className="food-target-top">
      <p className="eyebrow">{label}</p>
      <b className="food-target-status-label">{status}</b>
    </div>
    <strong>{Math.round(current)}{usableTarget ? <small className="food-target-sub"> / {Math.round(target)} {unit}</small> : ` ${unit}`}</strong>
    <small className="food-target-diff">{differenceCopy}</small>
    {usableTarget ? <div className="food-bar-track gamification-progress" role="progressbar" aria-label={`${label}: ${Math.round(current)} of ${Math.round(target)} ${unit}`} aria-valuemin={0} aria-valuemax={target} aria-valuenow={current}><div className="food-bar-fill" style={{ width: `${percent}%` }} /></div> : <div className="food-bar-track gamification-progress is-unavailable" aria-hidden="true"><div className="food-bar-fill" /></div>}
    {onInfo ? <button className="daily-target-status" type="button" onClick={onInfo}>View calorie details</button> : null}
  </div>
}

function DailyTargetsCard({ targets, totals, onEdit, onLog }: { targets: NutritionTargets; totals: FoodNutrition; onEdit: () => void; onLog: () => void }) {
  const { playEffect } = useAudio()
  const [detailsOpen, setDetailsOpen] = useState(false)
  useBackNavigation('food-target-details', detailsOpen, () => setDetailsOpen(false), 40)
  const calories = totals.kcal ?? 0
  const protein = totals.protein ?? 0
  const tdee = calculateTdee(calculateRmr(targets), targets.activityLevel)
  const calorie = evaluateCalorieDay(targets, calories, tdee)
  const proteinTargetUsable = Number.isFinite(targets.proteinTargetGrams) && targets.proteinTargetGrams > 0
  const proteinDay = evaluateProteinDay(targets.proteinTargetGrams, protein)
  const calorieDifference = Math.round(targets.calorieTarget - calories)
  const proteinDifference = Math.round(targets.proteinTargetGrams - protein)
  const statusCopy: Record<typeof calorie.status, string> = { target_achieved: 'Within target range', below_target_outer: 'Below planned range', too_far_below: 'Below estimated needs', below_safety_floor: 'Below safety floor', above_target: 'Over target', below_target: 'In progress' }
  const calorieSemantic = calorie.status === 'target_achieved' ? 'success' : calorie.status === 'below_safety_floor' || calorie.status === 'too_far_below' ? 'danger' : calorie.status === 'above_target' || calorie.status === 'below_target_outer' ? 'warning' : undefined
  const proteinStatus = !proteinTargetUsable ? 'Target unavailable' : proteinDay.achievementEligible ? 'Target achieved' : 'In progress'

  return <>
    <section className="food-goal-command proto-primary-card" aria-labelledby="daily-targets-title">
      <div className="proto-card-top">
        <div className="proto-card-tag-wrap">
          <span className="proto-card-tag" id="daily-targets-title">Today's Nutrition</span>
          <span className="eyebrow sr-only">Daily command</span>
          <h2 className="sr-only">Calories and protein</h2>
        </div>
        <div className="proto-card-top-right">
          <span className={`proto-card-badge${calorieSemantic ? ` is-${calorieSemantic}` : ''}`}>
            {statusCopy[calorie.status]}
          </span>
          <button className="text-button food-edit-targets" type="button" onClick={() => { playEffect('select'); onEdit() }}>Edit</button>
        </div>
      </div>
      <div className="food-target-grid food-goal-grid">
        <TargetMetric label="Calories" current={calories} target={targets.calorieTarget} unit="kcal" difference={calorieDifference} status={statusCopy[calorie.status]} semantic={calorieSemantic} onInfo={() => { playEffect('select'); setDetailsOpen(true) }} />
        <TargetMetric label="Protein" current={protein} target={targets.proteinTargetGrams} unit="g" difference={proteinDifference} status={proteinStatus} semantic={proteinDay.achievementEligible ? 'success' : undefined} />
      </div>
      <button className="primary-button food-primary-log" type="button" onClick={onLog}><Plus size={16} aria-hidden="true" /> Log Food</button>
      <p className="food-goal-command-note">{calorie.status === 'above_target' ? 'Daily intake is above calorie target. Review the meal log for context.' : calories === 0 ? 'No food logged yet. Start with any meal.' : 'Calories and protein lead. Full nutrition stays available below.'}</p>
    </section>
    {detailsOpen ? <div className="food-dialog-backdrop"><section className="food-dialog target-status-dialog" role="dialog" aria-modal="true" aria-labelledby="target-status-title"><header><div><p className="eyebrow">Daily targets</p><h2 id="target-status-title">{statusCopy[calorie.status]}</h2></div><button type="button" aria-label="Close target details" onClick={() => { playEffect('select'); setDetailsOpen(false) }}><X /></button></header><dl className="target-detail-list"><div><dt>Your target</dt><dd>{targets.calorieTarget} kcal</dd></div><div><dt>You consumed</dt><dd>{Math.round(calories)} kcal</dd></div><div><dt>Estimated maintenance</dt><dd>≈ {tdee} kcal</dd></div>{targets.goal === 'lose' ? <div><dt>Estimated deficit</dt><dd>≈ {Math.round(calorie.estimatedDeficit)} kcal</dd></div> : null}</dl><p>{calorie.status === 'target_achieved' ? "You're within your planned calorie range for today." : calorie.status === 'below_target_outer' ? "You're below your planned target today. Staying closer to your planned intake is generally more consistent with your target." : calorie.status === 'too_far_below' ? 'Your logged intake is significantly below your estimated energy needs today. FitDex does not count this toward calorie-target progress.' : calorie.status === 'below_safety_floor' ? 'Your logged intake is very low today. FitDex does not count this toward calorie-target progress.' : "You're outside your calorie target range today. This does not count toward calorie-target progress."}</p><p className="muted">Calorie needs are estimates. FitDex is not medical advice.</p><button className="primary-button" type="button" onClick={() => { playEffect('select'); setDetailsOpen(false) }}>Continue</button></section></div> : null}
  </>
}

function TargetsOffCard({ totals, onLog }: { totals: FoodNutrition; onLog: () => void }) {
  return <section className="food-goal-command proto-primary-card is-targets-off" aria-labelledby="daily-logged-title"><header className="food-targets-off-header"><div><p className="eyebrow">Daily command</p><h2 id="daily-logged-title">Today's Nutrition Targets Are Off</h2></div><span className="food-targets-off-status">Targets off</span></header><p className="food-targets-off-copy">Targets are disabled. Logged totals still appear here.</p><MacroStrip nutrition={totals} /><button className="primary-button food-primary-log" type="button" onClick={onLog}><Plus size={16} aria-hidden="true" /> Log Food</button></section>
}

export function FoodPage({ onOpenSettings }: { onOpenSettings?: () => void }) {
  const { playEffect } = useAudio()
  const [date, setDate] = useState(() => normalizeDate(new Date()))
  const [entries, setEntries] = useState<FoodLogEntry[]>([])
  const [entriesLoading, setEntriesLoading] = useState(true)
  const [view, setView] = useState<View>({ kind: 'overview' })
  const [tutorialOpen, setTutorialOpen] = useState(false)
  const [targets, setTargets] = useState<NutritionTargets>()
  const [gamification, setGamification] = useState<GamificationDashboard>()
  const [showFoodLanding, setShowFoodLanding] = useState(false)
  const [showFirstFoodFeedback, setShowFirstFoodFeedback] = useState(false)
  useBackNavigation('food-subview', view.kind !== 'overview', () => { if (view.kind === 'add') setView({ kind: 'meal', meal: view.meal }); else if (view.kind === 'meal') setView({ kind: 'overview' }) })

  const refresh = useCallback(async () => {
    const [entriesResult, gamificationResult] = await Promise.all([listFoodEntries(date), loadGamificationDashboard()])
    setEntries(entriesResult)
    setGamification(gamificationResult)
  }, [date])
  useEffect(() => {
    let active = true
    void Promise.all([listFoodEntries(date), loadGamificationDashboard()]).then(([rows, game]) => {
      if (active) { setEntries(rows); setGamification(game); setEntriesLoading(false) }
    })
    return () => { active = false }
  }, [date])
  useEffect(() => { void loadFirstUseGuidance().then((guidance) => { setShowFoodLanding(!guidance.foodLanding); setShowFirstFoodFeedback(!guidance.firstFoodFeedback) }) }, [])
  useEffect(() => {
    const subscription = liveQuery(loadNutritionTargets).subscribe({ next: setTargets, error: () => setTargets(undefined) })
    return () => subscription.unsubscribe()
  }, [])

  const totals = useMemo(() => nutritionTotals(entries), [entries])
  const navigateDate = (nextDate: string) => { playEffect('select'); setEntriesLoading(true); setDate(nextDate); setView({ kind: 'overview' }) }
  const openAdd = (meal: FoodMeal) => { playEffect('select'); setView({ kind: 'add', meal }) }

  if (view.kind === 'add') return <FoodEditor date={date} meal={view.meal} editing={view.editing} onBack={() => { playEffect('select'); setView({ kind: 'meal', meal: view.meal }) }} onSaved={async (notice) => { await refresh(); setView({ kind: 'meal', meal: view.meal, notice }) }} />
  if (view.kind === 'meal') return <MealDetail date={date} meal={view.meal} entries={entries.filter((entry) => entry.meal === view.meal)} notice={view.notice} onBack={() => { playEffect('select'); setView({ kind: 'overview' }) }} onSelectMeal={(m) => { playEffect('select'); setView({ kind: 'meal', meal: m }) }} onAdd={() => openAdd(view.meal)} onEdit={(editing) => { playEffect('select'); setView({ kind: 'add', meal: view.meal, editing }) }} onOpenHelp={() => { playEffect('select'); setTutorialOpen(true) }} onChanged={refresh} />

  const macrosSummary = `${Math.round(totals.carbs ?? 0)}g C · ${Math.round(totals.protein ?? 0)}g P · ${Math.round(totals.fat ?? 0)}g F · ${Math.round(totals.kcal ?? 0)} kcal`
  const terminalDate = new Date()
  const terminalMeta = `${gamification ? `LV ${gamification.progression.level} · ` : ''}${terminalDate.toLocaleDateString(undefined, { weekday: 'short', day: '2-digit', month: 'short' }).replace(/,/g, '').toUpperCase()}`

  return (
    <CommandPageFrame className="page-stack food-page"
      data-food-design="goal-first"
      terminalTitle="FITDEX // NUTRITION"
      terminalMeta={terminalMeta}
      headerActions={
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <button
            className="food-today-button"
            type="button"
            style={{ padding: '2px 6px', fontSize: '0.62rem', height: '22px' }}
            disabled={isLocalToday(date)}
            onClick={() => navigateDate(normalizeDate(new Date()))}
          >
            Today
          </button>
          <button
            className="workout-hub-help cmd-icon-btn page-help-btn"
            type="button"
            aria-label="How Food Works"
            title="How Food Works"
            onClick={() => {
              playEffect('select')
              setTutorialOpen(true)
            }}
          >
            <CircleHelp size={16} aria-hidden="true" />
          </button>
        </div>
      }
    >
      <div className="food-date-nav" style={{ margin: '0 0 4px' }}>
        <button type="button" aria-label="Previous day" onClick={() => navigateDate(shiftDate(date, -1))}>
          <ChevronLeft />
        </button>
        <span>
          <strong>{formatDate(date)}</strong>
          <small>{isLocalToday(date) ? 'Today' : 'Selected day'}</small>
        </span>
        <button type="button" aria-label="Next day" onClick={() => navigateDate(shiftDate(date, 1))}>
          <ChevronRight />
        </button>
      </div>

      {entriesLoading ? (
        <section className="panel food-loading">
          <RetroLoader label="LOADING NUTRITION..." />
        </section>
      ) : (
        <>
          {showFoodLanding ? (
            <ContextRail
              title={targets?.enabled && targets.calorieTarget > 0 ? 'Log food against your targets' : 'Log food with or without targets'}
              actions={
                targets?.enabled && targets.calorieTarget > 0 ? (
                  <button
                    className="primary-button"
                    type="button"
                    onClick={() => {
                      playEffect('select')
                      void acknowledgeFirstUse('foodLanding')
                      setShowFoodLanding(false)
                      openAdd('breakfast')
                    }}
                  >
                    Log First Food
                  </button>
                ) : (
                  <>
                    <button
                      className="primary-button"
                      type="button"
                      onClick={() => {
                        playEffect('select')
                        void acknowledgeFirstUse('foodLanding')
                        setShowFoodLanding(false)
                        openAdd('breakfast')
                      }}
                    >
                      Log Without Targets
                    </button>
                    {onOpenSettings ? (
                      <button
                        className="secondary-button"
                        type="button"
                        onClick={() => {
                          playEffect('select')
                          void acknowledgeFirstUse('foodLanding')
                          setShowFoodLanding(false)
                          onOpenSettings()
                        }}
                      >
                        Set My Targets
                      </button>
                    ) : null}
                  </>
                )
              }
            >
              {targets?.enabled && targets.calorieTarget > 0 ? (
                <p>Calories and protein lead while full nutrition stays available below. Use Recent and Frequent for remembered foods, Search to find local entries, or Quick Log to reuse a saved snapshot.</p>
              ) : (
                <p>Food remains fully usable without targets. Log Breakfast, Lunch, Supper, or Dinner at any time. Use Recent and Frequent for remembered foods, Search to find local entries, or Quick Log.</p>
              )}
            </ContextRail>
          ) : null}

          {showFirstFoodFeedback && entries.length > 0 ? (
            <ContextRail
              eyebrow="Logged result"
              title="Your totals updated from real food data"
              actions={
                <button
                  className="secondary-button"
                  type="button"
                  onClick={() => {
                    playEffect('select')
                    void acknowledgeFirstUse('firstFoodFeedback')
                    setShowFirstFoodFeedback(false)
                  }}
                >
                  Understood
                </button>
              }
            >
              {targets?.enabled && targets.calorieTarget > 0 ? (
                <p>
                  {Math.round(totals.kcal ?? 0)} / {Math.round(targets.calorieTarget)} kcal · {Math.round(totals.protein ?? 0)} / {Math.round(targets.proteinTargetGrams)} g protein logged today. Add, edit, or delete entries and totals recalculate automatically.
                </p>
              ) : (
                <p>
                  {Math.round(totals.kcal ?? 0)} kcal · {Math.round(totals.protein ?? 0)} g protein logged today. Add, edit, or delete entries and totals recalculate automatically.
                </p>
              )}
            </ContextRail>
          ) : null}

          {/* 1. DAILY TARGETS & SUMMARY (PRIMARY - ALWAYS VISIBLE) */}
          {targets?.enabled && targets.calorieTarget > 0 ? <DailyTargetsCard targets={targets} totals={totals} onEdit={() => onOpenSettings?.()} onLog={() => openAdd('breakfast')} /> : <TargetsOffCard totals={totals} onLog={() => openAdd('breakfast')} />}

          {/* 2. MEALS LOGGING TILES (PRIMARY - ALWAYS VISIBLE) */}
          <section className="food-meals-section proto-panel-card" aria-labelledby="food-meals-title">
            <div className="proto-card-top">
              <span className="proto-card-tag" id="food-meals-title">{entries.length === 1 ? '1 Meal item logged' : `${entries.length} Meal items logged`}</span>
            </div>
            <div className="food-quick-log-grid food-meal-list">
              {CANONICAL_MEAL_ORDER.map((meal) => {
                const mealEntries = entries.filter((entry) => entry.meal === meal)
                const mealTotals = nutritionTotals(mealEntries)
                return (
                  <button
                    key={meal}
                    className="food-quick-btn food-meal-card"
                    type="button"
                    onClick={() => {
                      playEffect('select')
                      setView({ kind: 'meal', meal })
                    }}
                  >
                    <MealIcon meal={meal} />
                    <strong className="food-meal-name">{FOOD_MEAL_LABELS[meal]}</strong>
                    <small className="food-meal-stat">
                      {mealEntries.length ? `${Math.round(mealTotals.kcal ?? 0)} kcal` : '+ Log'}
                    </small>
                  </button>
                )
              })}
            </div>
          </section>

          {/* 3. NUTRITION BREAKDOWN & MACROS (COLLAPSIBLE DRAWER) */}
          <CollapsibleModule
            id="food-macros"
            title="Nutrition Details &amp; Macro Breakdown"
            badge="Macros"
            summary={macrosSummary}
            defaultExpanded={false}
          >
            <div className="food-nutrition-content">
              <div className="macro-pill-row">
                <div className="macro-pill">
                  <strong>{Math.round(totals.carbs ?? 0)}g</strong>
                  <span>Carbs {totals.kcal ? `(${Math.round(((totals.carbs ?? 0) * 4 / totals.kcal) * 100)}%)` : ''}</span>
                </div>
                <div className="macro-pill">
                  <strong>{Math.round(totals.protein ?? 0)}g</strong>
                  <span>Protein {totals.kcal ? `(${Math.round(((totals.protein ?? 0) * 4 / totals.kcal) * 100)}%)` : ''}</span>
                </div>
                <div className="macro-pill">
                  <strong>{Math.round(totals.fat ?? 0)}g</strong>
                  <span>Fat {totals.kcal ? `(${Math.round(((totals.fat ?? 0) * 9 / totals.kcal) * 100)}%)` : ''}</span>
                </div>
              </div>
              <div className="proto-item-row">
                <div className="proto-item-info">
                  <strong>Fiber &amp; Micronutrients</strong>
                  <small>Fiber: {Math.round(totals.fiber ?? 0)}g · Sugar: {Math.round(totals.sugar ?? 0)}g · Sodium: {Math.round(totals.sodium ?? 0)}mg</small>
                </div>
                <span className="proto-item-value">Details</span>
              </div>
              <MacroStrip nutrition={totals} secondary />
              <NutritionBreakdownCard key={date} entries={entries} totals={totals} />
            </div>
          </CollapsibleModule>

          {/* 4. TODAY'S LOGGED ITEMS (COLLAPSIBLE DRAWER) */}
          {entries.length > 0 ? (
            <CollapsibleModule
              id="food-logged-items"
              title="Today's Logged Items"
              badge={`${entries.length} ${entries.length === 1 ? 'Item' : 'Items'}`}
              summary={CANONICAL_MEAL_ORDER.map((m) => {
                const count = entries.filter((e) => e.meal === m).length
                return count ? `${FOOD_MEAL_LABELS[m]} (${count})` : null
              }).filter(Boolean).join(' · ') || 'No items'}
              defaultExpanded={false}
            >
              <div className="food-logged-list">
                {entries.map((entry) => (
                  <div
                    key={entry.id}
                    className="proto-item-row"
                    onClick={() => {
                      playEffect('select')
                      setView({ kind: 'add', meal: entry.meal, editing: entry })
                    }}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="proto-item-info">
                      <strong>{entry.foodName}</strong>
                      <small>{FOOD_MEAL_LABELS[entry.meal]} · {Math.round(entry.kcal ?? 0)} kcal · {Math.round(entry.protein ?? 0)}g P</small>
                    </div>
                    <span className="proto-item-value">Edit</span>
                  </div>
                ))}
              </div>
            </CollapsibleModule>
          ) : null}
        </>
      )}

      {tutorialOpen ? (
        <GuideDialog
          eyebrow="How Food Works"
          steps={foodTutorialSteps}
          onClose={() => {
            setTutorialOpen(false)
            void markTutorialSeen('food')
          }}
        />
      ) : null}
    </CommandPageFrame>
  )
}

function MealDetail({
  date,
  meal,
  entries,
  notice,
  onBack,
  onSelectMeal,
  onAdd,
  onEdit,
  onOpenHelp,
  onChanged,
}: {
  date: string
  meal: FoodMeal
  entries: FoodLogEntry[]
  notice?: string
  onBack: () => void
  onSelectMeal: (meal: FoodMeal) => void
  onAdd: () => void
  onEdit: (entry: FoodLogEntry) => void
  onOpenHelp?: () => void
  onChanged: () => Promise<void>
}) {
  const { playEffect } = useAudio()
  const [pendingDelete, setPendingDelete] = useState<FoodLogEntry>()
  useBackNavigation('food-entry-delete', Boolean(pendingDelete), () => setPendingDelete(undefined), 50)
  const totals = nutritionTotals(entries)
  const hasEntries = entries.length > 0
  const remove = async () => {
    if (!pendingDelete) return
    await deleteFoodLog(pendingDelete.id)
    setPendingDelete(undefined)
    await onChanged()
  }

  const formatKcal = hasEntries && totals.kcal !== undefined
    ? `${Math.round(totals.kcal)} KCAL`
    : (hasEntries ? '0 KCAL' : '— KCAL')
  const formatProtein = hasEntries && totals.protein !== undefined
    ? `${totals.protein.toFixed(1).replace(/\.0$/, '')}G PROTEIN`
    : (hasEntries ? '0G PROTEIN' : '— PROTEIN')
  const formatCarbs = hasEntries && totals.carbs !== undefined
    ? `${totals.carbs.toFixed(1).replace(/\.0$/, '')}g`
    : (hasEntries ? '0g' : '—')
  const formatFat = hasEntries && totals.fat !== undefined
    ? `${totals.fat.toFixed(1).replace(/\.0$/, '')}g`
    : (hasEntries ? '0g' : '—')
  const formatFiber = hasEntries && totals.fiber !== undefined
    ? `${totals.fiber.toFixed(1).replace(/\.0$/, '')}g`
    : (hasEntries ? '0g' : '—')
  const formatSugar = hasEntries && totals.sugar !== undefined
    ? `${totals.sugar.toFixed(1).replace(/\.0$/, '')}g`
    : '—'
  const formatSatFat = hasEntries && totals.saturatedFat !== undefined
    ? `${totals.saturatedFat.toFixed(1).replace(/\.0$/, '')}g`
    : '—'
  const formatSodium = hasEntries && totals.sodium !== undefined
    ? `${Math.round(totals.sodium)}mg`
    : '—'

  return (
    <CommandPageFrame
      className="page-stack food-page food-meal-detail"
      terminalTitle="FITDEX // FOOD LOG"
      terminalMeta={formatDate(date).toUpperCase()}
      headerActions={
        onOpenHelp ? (
          <button
            className="workout-hub-help cmd-icon-btn page-help-btn"
            type="button"
            aria-label="How Food Works"
            title="How Food Works"
            onClick={onOpenHelp}
          >
            <CircleHelp size={16} aria-hidden="true" />
          </button>
        ) : null
      }
    >
      <header className="proto-subhead">
        <button className="proto-back back-command-key" type="button" aria-label="Back to Food" onClick={onBack}>
          <ArrowLeft size={18} strokeWidth={2.5} aria-hidden="true" /><span>FOOD</span>
        </button>
        <div className="page-navigation-title-block"><h1>{FOOD_MEAL_LABELS[meal]}</h1><p>{formatDate(date)}</p></div>
      </header>

      {notice ? (
        <div className="food-success" role="status">
          <strong>{notice}</strong>
          <span>Stored nutrition snapshot logged unchanged.</span>
        </div>
      ) : null}

      <section className="proto-module is-primary is-wide food-meal-totals-module">
        <header className="proto-module-head">
          <h2>Meal totals</h2>
        </header>
        <div className="proto-module-body">
          <div className="proto-meal-head">
            <div className="proto-meal-slot">
              <img className="proto-meal-art" src={`/food/meals/meal-${meal}.webp`} alt="" />
            </div>
            <div className="proto-status">
              <strong>{formatKcal}</strong>
              <small>{formatProtein}</small>
            </div>
          </div>
          <div className="proto-data">
            <div><b>{formatCarbs}</b><small>CARBS</small></div>
            <div><b>{formatFat}</b><small>FAT</small></div>
            <div><b>{formatFiber}</b><small>FIBER</small></div>
          </div>
          <small className="proto-secondary-nutrients">
            Sugar {formatSugar} · Sat fat {formatSatFat} · Sodium {formatSodium}
          </small>
        </div>
      </section>

      <section className="proto-module is-wide food-meal-entries-module" aria-label={`${FOOD_MEAL_LABELS[meal]} entries`}>
        <header className="proto-module-head">
          <h2>{FOOD_MEAL_LABELS[meal]} entries</h2>
        </header>
        <div className="proto-module-body">
          <div className="proto-tabs food-meal-selector" role="group" aria-label="Meal">
            {CANONICAL_MEAL_ORDER.map((m) => (
              <button
                key={m}
                className={`proto-tab ${m === meal ? 'is-selected' : ''}`}
                type="button"
                onClick={() => onSelectMeal(m)}
              >
                {FOOD_MEAL_LABELS[m].toUpperCase()}
              </button>
            ))}
          </div>

          {hasEntries ? (
            <div className="proto-card-stack">
              {entries.map((entry) => {
                const categoryLabel = entry.categoryKind === 'unresolved' ? 'Uncategorized' : entry.categoryName
                const catId = entry.categoryId ?? 'other'
                const kcalStr = entry.kcal !== undefined ? `${Math.round(entry.kcal)} kcal` : '— kcal'
                const proteinStr = entry.protein !== undefined ? `${entry.protein.toFixed(1).replace(/\.0$/, '')}g protein` : '— protein'
                return (
                  <div key={entry.id} className="proto-record-card proto-food-entry-card">
                    <FoodCategoryIcon categoryId={catId} label={categoryLabel} color={entry.customCategoryColor} />
                    <span
                      className="proto-row-copy"
                      onClick={() => onEdit(entry)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') onEdit(entry)
                      }}
                    >
                      <b>{entry.foodName}</b>
                      <small>{categoryLabel} · {kcalStr} · {proteinStr}</small>
                    </span>
                    <div className="proto-food-entry-actions">
                      <button
                        className="proto-row-meta proto-food-edit-btn"
                        type="button"
                        aria-label={`Edit ${entry.foodName}`}
                        onClick={() => onEdit(entry)}
                      >
                        EDIT
                      </button>
                      <button
                        className="proto-food-delete-btn"
                        type="button"
                        aria-label={`Delete ${entry.foodName}`}
                        onClick={() => {
                          playEffect('select')
                          setPendingDelete(entry)
                        }}
                      >
                        <Trash2 size={13} aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="proto-meal-empty-state">
              <div className="proto-meal-empty-slot">
                <img className="proto-meal-empty-art" src={`/food/meals/meal-${meal}.webp`} alt="" />
              </div>
              <div className="proto-meal-empty-copy">
                <strong>NO FOOD LOGGED</strong>
                <small>Start logging your {FOOD_MEAL_LABELS[meal].toLowerCase()}.</small>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="proto-module is-wide food-meal-action-module">
        <header className="proto-module-head">
          <h2>Log food</h2>
        </header>
        <div className="proto-module-body">
          <button className="proto-primary food-add-action-btn" type="button" onClick={onAdd}>
            <Plus size={16} aria-hidden="true" /> Add Food
          </button>
        </div>
      </section>

      {pendingDelete ? (
        <div className="food-dialog-backdrop">
          <section className="food-dialog food-confirm-dialog food-entry-delete-dialog" role="alertdialog" aria-modal="true" aria-labelledby="delete-food-title">
            <header>
              <div>
                <p className="eyebrow">{FOOD_MEAL_LABELS[meal]} entry</p>
                <h2 id="delete-food-title">Delete Food Entry?</h2>
              </div>
            </header>
            <p>Remove “{pendingDelete.foodName}” from {FOOD_MEAL_LABELS[meal]}?</p>
            <div className="food-dialog-actions">
              <button className="secondary-button" type="button" onClick={() => { playEffect('select'); setPendingDelete(undefined) }}>
                Cancel
              </button>
              <button className="food-danger-button" type="button" onClick={() => { playEffect('select'); void remove() }}>
                Delete
              </button>
            </div>
          </section>
        </div>
      ) : null}
    </CommandPageFrame>
  )
}

function FoodEditor({ date, meal, editing, onBack, onSaved }: { date: string; meal: FoodMeal; editing?: FoodLogEntry; onBack: () => void; onSaved: (notice?: string) => Promise<void> }) {
  const { playEffect } = useAudio()
  const [stage, setStage] = useState<'suggestions' | 'details'>(editing ? 'details' : 'suggestions')
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState<RememberedFood[]>([])
  const [frequent, setFrequent] = useState<RememberedFood[]>([])
  const [suggestionsLoading, setSuggestionsLoading] = useState(!editing)
  const [rememberedSource, setRememberedSource] = useState<RememberedFood>()
  const [name, setName] = useState(editing?.foodName ?? '')
  const [categoryId, setCategoryId] = useState<PredefinedFoodCategoryId>(editing?.categoryId ?? 'other')
  const [customCategoryId, setCustomCategoryId] = useState(editing?.customCategoryId)
  const [customCategoryLabel, setCustomCategoryLabel] = useState(editing?.customCategoryName)
  const [customCategoryColor, setCustomCategoryColor] = useState(editing?.customCategoryColor)
  const [nutrition, setNutrition] = useState<NutritionStrings>(() => Object.fromEntries(nutritionKeys.map((key) => [key, editing?.[key]?.toString() ?? ''])) as NutritionStrings)
  const [moreOpen, setMoreOpen] = useState(false)
  const [categoryOpen, setCategoryOpen] = useState(false)
  const [error, setError] = useState<FormError>()
  const [saving, setSaving] = useState(false)
  const [quickLoggingId, setQuickLoggingId] = useState<string>()
  const previousStageRef = useRef(stage)

  const showSuggestions = () => {
    setSuggestionsLoading(true)
    setStage('suggestions')
  }

  useBackNavigation('food-editor', !categoryOpen, () => { if (stage === 'details' && !editing) showSuggestions(); else onBack() }, 20)
  useEffect(() => { if (previousStageRef.current !== stage) { previousStageRef.current = stage; playEffect('select') } }, [playEffect, stage])
  useEffect(() => {
    if (stage !== 'suggestions') return
    let active = true
    const load = query ? searchRememberedFoods(query, meal) : getRecentFoods(meal)
    void Promise.all([load, query ? Promise.resolve([]) : getFrequentFoods(meal)]).then(([nextSuggestions, nextFrequent]) => {
      if (!active) return
      setSuggestions(nextSuggestions)
      setFrequent(nextFrequent)
      setSuggestionsLoading(false)
    })
    return () => { active = false }
  }, [query, meal, stage])

  const recentIds = useMemo(() => new Set(suggestions.map((food) => food.id)), [suggestions])
  const uniqueFrequent = useMemo(() => frequent.filter((food) => !recentIds.has(food.id)), [frequent, recentIds])

  const updateQuery = (nextQuery: string) => {
    setSuggestionsLoading(true)
    setQuery(nextQuery)
  }

  const fillRemembered = (food: RememberedFood) => {
    playEffect('select')
    setRememberedSource(food)
    setName(food.name)
    setCategoryId(food.categoryId)
    setCustomCategoryId(food.customCategoryId)
    setCustomCategoryLabel(food.customCategoryName)
    setCustomCategoryColor(food.customCategoryColor)
    setNutrition(Object.fromEntries(nutritionKeys.map((key) => [key, food[key]?.toString() ?? ''])) as NutritionStrings)
    setMoreOpen(false)
    setError(undefined)
    setStage('details')
  }

  const startCreate = () => {
    setRememberedSource(undefined)
    setName(query.trim())
    setCategoryId('other')
    setCustomCategoryId(undefined)
    setCustomCategoryLabel(undefined)
    setCustomCategoryColor(undefined)
    setNutrition(emptyNutrition)
    setMoreOpen(false)
    setError(undefined)
    setStage('details')
  }

  const quickLog = async (food: RememberedFood) => {
    setError(undefined)
    setQuickLoggingId(food.id)
    try {
      const beforeCount = (await listMealEntries(date, meal)).length
      await addFoodLog(date, meal, rememberedFoodDraft(food))
      const effect = foodSaveEffect(false, beforeCount)
      if (effect) playEffect(effect)
      await onSaved(`${food.name} added to ${FOOD_MEAL_LABELS[meal]}`)
    } catch (reason) {
      setError({ message: reason instanceof Error ? reason.message : 'Unable to log food.' })
    } finally {
      setQuickLoggingId(undefined)
    }
  }

  const save = async () => {
    const trimmedName = name.trim()
    if (!trimmedName) { setError({ field: 'name', message: 'Food name is required.' }); return }
    const draft: FoodDraft = { name: trimmedName, categoryId, customCategoryId }
    for (const key of nutritionKeys) {
      try { draft[key] = parseOptionalNutrition(nutrition[key]) }
      catch { setError({ field: key, message: `${key === 'kcal' ? 'Calories' : key === 'saturatedFat' ? 'Saturated fat' : key.charAt(0).toUpperCase() + key.slice(1)} cannot be negative.` }); return }
    }
    setError(undefined)
    setSaving(true)
    try {
      if (editing) await editFoodLog(editing.id, draft)
      else if (rememberedSource) {
        const remembered = await updateRememberedFood(rememberedSource.id, draft)
        const beforeCount = (await listMealEntries(date, meal)).length
        await addFoodLog(date, meal, rememberedFoodDraft(remembered))
        const effect = foodSaveEffect(false, beforeCount)
        if (effect) playEffect(effect)
      }
      else {
        const beforeCount = (await listMealEntries(date, meal)).length
        await addFoodLog(date, meal, draft)
        const effect = foodSaveEffect(false, beforeCount)
        if (effect) playEffect(effect)
      }
      await onSaved(editing ? `${trimmedName} updated` : `${trimmedName} added to ${FOOD_MEAL_LABELS[meal]}`)
    } catch (reason) {
      setError({ message: reason instanceof Error ? reason.message : 'Unable to save food.' })
    } finally {
      setSaving(false)
    }
  }

  const updateNutrition = (key: keyof NutritionStrings, value: string) => {
    setNutrition((current) => ({ ...current, [key]: value }))
    if (error?.field === key) setError(undefined)
  }

  const editorBack = stage === 'details' && !editing ? showSuggestions : onBack
  const editorTitle = editing ? 'Edit Food' : rememberedSource ? 'Edit Details' : 'New Food'

  return <div className={`page-stack food-page food-editor-page${stage === 'suggestions' ? ' food-add-shell' : ' food-entry-shell'}`}>
    <header className="food-subheader"><button className="back-button" type="button" aria-label="Go back" onClick={editorBack}><ArrowLeft /></button><MealIcon meal={meal} /><div><p className="eyebrow">{stage === 'suggestions' ? 'Add Food' : editorTitle} · {formatDate(date)}</p><h1>{FOOD_MEAL_LABELS[meal]}</h1></div></header>
    {stage === 'suggestions' ? <section className="food-suggestions" aria-label={`Add food to ${FOOD_MEAL_LABELS[meal]}`}>
      <label className="search-box"><Search size={18} aria-hidden="true" /><span className="sr-only">Search remembered local foods</span><input id="food-search" type="search" autoFocus value={query} onChange={(event) => updateQuery(event.target.value)} placeholder="Search your foods..." />{query ? <button className="search-clear" type="button" aria-label="Clear search" onClick={() => updateQuery('')}><X size={17} /></button> : <span className="search-clear" aria-hidden="true" />}</label>
      <p className="local-note">Searches foods remembered on this device. No online food database.</p>
      {suggestionsLoading ? <p className="food-suggestion-empty" role="status">Loading remembered foods…</p> : query ? (
        suggestions.length ? <div className="food-groups"><SuggestionGroup title="Matches" foods={suggestions} meal={meal} quickLoggingId={quickLoggingId} onQuickLog={quickLog} onEdit={fillRemembered} /></div> : <section className="empty-results"><h2>No Matches Found</h2><p>No remembered local foods match “{query.trim() || 'Food'}”.</p><button className="secondary" type="button" onClick={startCreate}><Plus size={16} aria-hidden="true" /> Create “{query.trim() || 'Food'}”</button></section>
      ) : <div className="food-groups"><SuggestionGroup title="Recent" foods={suggestions} meal={meal} quickLoggingId={quickLoggingId} onQuickLog={quickLog} onEdit={fillRemembered} empty="No foods remembered yet." /><SuggestionGroup title="Frequent" foods={uniqueFrequent} meal={meal} quickLoggingId={quickLoggingId} onQuickLog={quickLog} onEdit={fillRemembered} /></div>}
      {error ? <p className="form-error" role="alert">{error.message}</p> : null}
      {!query ? <button className="food-create-new food-command-key" type="button" onClick={startCreate}><Plus size={18} aria-hidden="true" /> Create New Food</button> : null}
    </section> : <section className="panel food-form">
      <label className={`field${error?.field === 'name' ? ' is-invalid' : ''}`}><span>Food name <b>Required</b></span><input value={name} onChange={(event) => { setName(event.target.value); if (error?.field === 'name') setError(undefined) }} autoFocus={!editing && !rememberedSource} required aria-invalid={error?.field === 'name'} />{error?.field === 'name' ? <small className="field-error">{error.message}</small> : null}</label>
      <div className="field"><span>Category <b>Required</b></span><button className="food-category-picker" type="button" onClick={() => { playEffect('select'); setCategoryOpen(true) }}><FoodCategoryIcon categoryId={categoryId} label={customCategoryLabel ?? categoryName(categoryId)} color={customCategoryColor} /><span><strong>{customCategoryLabel ?? categoryName(categoryId)}</strong><small>Tap to select category</small></span><ChevronRight /></button></div>
      <fieldset className="nutrition-fields"><legend>Core nutrition</legend><NutritionInput field="kcal" label="Calories" unit="kcal" value={nutrition.kcal} error={error} onChange={updateNutrition} /><NutritionInput field="protein" label="Protein" unit="g" value={nutrition.protein} error={error} onChange={updateNutrition} /><NutritionInput field="carbs" label="Carbs" unit="g" value={nutrition.carbs} error={error} onChange={updateNutrition} /><NutritionInput field="fat" label="Fat" unit="g" value={nutrition.fat} error={error} onChange={updateNutrition} /></fieldset>
      <button className="food-more-toggle" type="button" aria-expanded={moreOpen} onClick={() => setMoreOpen(!moreOpen)}><span><strong>More Nutrition</strong><small>Fiber · Sugar · Sat. fat · Sodium</small></span>{moreOpen ? <ChevronUp /> : <ChevronDown />}</button>
      {moreOpen ? <fieldset className="nutrition-fields"><legend>Secondary nutrition</legend><NutritionInput field="fiber" label="Fiber" unit="g" value={nutrition.fiber} error={error} onChange={updateNutrition} /><NutritionInput field="sugar" label="Sugar" unit="g" value={nutrition.sugar} error={error} onChange={updateNutrition} /><NutritionInput field="saturatedFat" label="Saturated Fat" unit="g" value={nutrition.saturatedFat} error={error} onChange={updateNutrition} /><NutritionInput field="sodium" label="Sodium" unit="mg" value={nutrition.sodium} error={error} onChange={updateNutrition} /></fieldset> : null}
      {rememberedSource ? <p className="food-editor-note">Saved remembered-food defaults update. This creates a new {FOOD_MEAL_LABELS[meal]} snapshot.</p> : editing ? <p className="food-editor-note">Only this logged entry changes. Remembered defaults stay unchanged.</p> : null}
      {error && !error.field ? <p className="form-error" role="alert">{error.message}</p> : null}
      <div className="food-entry-actions"><button className="primary-button" type="button" disabled={saving} onClick={() => void save()}>{saving ? 'Saving…' : editing ? 'Save Changes' : `Add to ${FOOD_MEAL_LABELS[meal]}`}</button></div>
    </section>}
    {categoryOpen ? <CategoryDialog selectedId={categoryId} selectedCustomId={customCategoryId} onClose={() => setCategoryOpen(false)} onSelect={(id, customId, label, color) => { setCategoryId(id); setCustomCategoryId(customId); setCustomCategoryLabel(label); setCustomCategoryColor(color); setCategoryOpen(false) }} /> : null}
  </div>
}

function NutritionInput({ field, label, unit, value, error, onChange }: { field: keyof NutritionStrings; label: string; unit: string; value: string; error?: FormError; onChange: (field: keyof NutritionStrings, value: string) => void }) {
  const invalid = error?.field === field
  return <label className={`nutrition-input${invalid ? ' is-invalid' : ''}`}><span>{label}</span><span><input type="number" min="0" step="any" inputMode="decimal" value={value} onChange={(event) => onChange(field, event.target.value)} aria-invalid={invalid} /><i>{unit}</i></span>{invalid ? <small className="field-error">{error.message}</small> : null}</label>
}

function SuggestionGroup({ title, foods, meal, quickLoggingId, onQuickLog, onEdit, empty }: { title: string; foods: RememberedFood[]; meal: FoodMeal; quickLoggingId?: string; onQuickLog: (food: RememberedFood) => Promise<void>; onEdit: (food: RememberedFood) => void; empty?: string }) {
  if (!foods.length && !empty) return null
  return <section className="food-group"><div className="section-head"><h2>{title}</h2><span>{foods.length ? `${foods.length} foods` : ''}</span></div>{foods.length ? <div className="food-list compact-list">{foods.map((food) => {
    const categoryLabel = food.customCategoryName ?? categoryName(food.categoryId)
    return <article className="food-row" key={food.id}><button className="food-select" type="button" onClick={() => onEdit(food)} aria-label={`Edit details for ${food.name}`}><FoodCategoryIcon categoryId={food.categoryId} label={categoryLabel} color={food.customCategoryColor} /><span className="food-copy"><strong>{food.name}</strong><small>{categoryLabel} · {valueOrDash(food.kcal, 'kcal')} · {valueOrDash(food.protein)}</small></span></button><button className="quick-log" type="button" disabled={Boolean(quickLoggingId)} aria-label={`Quick log ${food.name} to ${FOOD_MEAL_LABELS[meal]}`} onClick={() => void onQuickLog(food)}>{quickLoggingId === food.id ? 'Logging…' : 'Quick Log'}</button><button className="edit-button" type="button" aria-label={`Edit details for ${food.name}`} onClick={() => onEdit(food)}><Pencil size={16} aria-hidden="true" /></button></article>
  })}</div> : empty ? <p className="food-suggestion-empty">{empty}</p> : null}</section>
}

function CategoryDialog({ selectedId, selectedCustomId, onClose, onSelect }: { selectedId: PredefinedFoodCategoryId; selectedCustomId?: string; onClose: () => void; onSelect: (id: PredefinedFoodCategoryId, customId?: string, label?: string, color?: string) => void }) {
  const { playEffect } = useAudio()
  const [custom, setCustom] = useState<CustomFoodCategory[]>([])
  const [creating, setCreating] = useState(false)
  const [name, setName] = useState('')
  const [color, setColor] = useState<string>(CUSTOM_CATEGORY_COLORS[0])
  const [error, setError] = useState('')
  const [pendingDelete, setPendingDelete] = useState<CustomFoodCategory>()
  const [showCustomHint, setShowCustomHint] = useState(false)
  useBackNavigation('food-category-delete', Boolean(pendingDelete), () => setPendingDelete(undefined), 70)
  useBackNavigation('food-category-create', creating && !pendingDelete, () => { setCreating(false); setError('') }, 60)
  useBackNavigation('food-category-sheet', !creating && !pendingDelete, onClose, 50)
  useEffect(() => { void listCustomCategories().then(setCustom); void loadFirstUseGuidance().then((guidance) => setShowCustomHint(!guidance.customFoodCategory)) }, [])
  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = previousOverflow }
  }, [])

  const create = async () => {
    setError('')
    try {
      const beforeIds = new Set((await listCustomCategories()).map((category) => category.id))
      const category = await createCustomCategory(name, color)
      if (!beforeIds.has(category.id)) playEffect('add')
      await acknowledgeFirstUse('customFoodCategory')
      onSelect('other', category.id, category.name, category.color)
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'Unable to create category.')
    }
  }

  const remove = async () => {
    if (!pendingDelete) return
    try {
      await deleteCustomFoodCategory(pendingDelete.id)
      setCustom(await listCustomCategories())
      if (selectedCustomId === pendingDelete.id) onSelect('other')
      setPendingDelete(undefined)
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'Unable to delete category.')
      setPendingDelete(undefined)
    }
  }

  const select = (id: PredefinedFoodCategoryId, customId?: string, label?: string, selectedColor?: string) => {
    playEffect('select')
    onSelect(id, customId, label, selectedColor)
  }

  return <div className="food-dialog-backdrop"><section className="food-dialog food-category-dialog" role="dialog" aria-modal="true" aria-labelledby="category-title">
    <header><div><p className="eyebrow">Food category</p><h2 id="category-title">{creating ? 'Create Category' : 'Select Category'}</h2></div><button type="button" aria-label="Close category picker" onClick={() => { playEffect('select'); onClose() }}><X /></button></header>
    <div className="food-category-content">
      {showCustomHint ? <ContextRail title="Custom categories are local labels" actions={<button className="secondary-button" type="button" onClick={() => { playEffect('select'); void acknowledgeFirstUse('customFoodCategory'); setShowCustomHint(false) }}>Got it</button>}><p>If predefined categories do not fit, create a reusable custom category with its own accent color. It organizes remembered foods; historical log snapshots remain preserved.</p></ContextRail> : null}
      {creating ? <div className="custom-category-form"><button className="text-button custom-category-back" type="button" onClick={() => { playEffect('select'); setCreating(false); setError('') }}><ChevronLeft /> Categories</button><label className={`field custom-category-name-field${error ? ' is-invalid' : ''}`}><span>Category name</span><input autoFocus value={name} onChange={(event) => { setName(event.target.value); setError('') }} /></label><div className="custom-category-preview" aria-live="polite"><CustomFoodCategoryIcon label={name.trim() || 'Custom category'} color={color} /><div><span className="eyebrow">Live icon preview</span><strong>{name.trim() || 'Custom category'}</strong><small>{color} accent</small></div></div><fieldset className="color-picker"><legend>Icon accent color</legend>{CUSTOM_CATEGORY_COLORS.map((item) => <label key={item} data-color={item} style={{ '--food-category-color': customCategoryCssColor(item) } as CSSProperties}><input type="radio" name="category-color" aria-label={`Icon accent color: ${item}`} checked={color === item} onChange={() => setColor(item)} /><span aria-hidden="true" /></label>)}</fieldset>{error ? <p className="form-error" role="alert">{error}</p> : null}<div className="custom-category-actions"><button className="primary-button food-command-key" type="button" disabled={!name.trim()} onClick={() => void create()}>Create Category</button><button className="secondary-button" type="button" onClick={() => { playEffect('select'); setCreating(false); setError('') }}>Cancel</button></div></div> : <>
        <section className="food-category-section food-standard-categories"><p className="eyebrow">Standard Categories</p><div className="category-grid">{PREDEFINED_FOOD_CATEGORIES.map((category) => <button className={selectedId === category.id && !selectedCustomId ? 'is-selected' : ''} type="button" key={category.id} onClick={() => select(category.id)}><FoodCategoryIcon categoryId={category.id} label={category.name} /><span>{category.name}</span></button>)}</div></section>
        <section className="food-category-section food-custom-categories"><p className="eyebrow">Custom Categories</p>{custom.length ? <div className="food-custom-category-list">{custom.map((category) => <div className="custom-category-option" key={category.id}><button className={selectedCustomId === category.id ? 'is-selected' : ''} type="button" onClick={() => select('other', category.id, category.name, category.color)}><FoodCategoryIcon categoryId="other" label={category.name} color={category.color} /><span>{category.name}</span></button><button className="custom-category-delete" type="button" aria-label={`Delete ${category.name} category`} onClick={() => { playEffect('select'); setPendingDelete(category) }}><Trash2 size={15} /></button></div>)}</div> : <p className="food-suggestion-empty">No custom categories.</p>}</section>
        {error ? <p className="form-error" role="alert">{error}</p> : null}<button className="secondary-button food-create-category food-command-key" type="button" onClick={() => { playEffect('select'); setCreating(true); setError('') }}><Plus size={16} strokeWidth={2.5} aria-hidden="true" /> Create Category</button>
      </>}
    </div>
  </section>{pendingDelete ? <section className="food-dialog food-confirm-dialog food-category-delete-dialog" role="alertdialog" aria-modal="true" aria-labelledby="delete-category-title"><header><div><p className="eyebrow">Custom category</p><h2 id="delete-category-title">Delete Category?</h2></div></header><p>“{pendingDelete.name}” will be removed.</p><p>Remembered foods in this category will also be removed. Historical food logs remain and become Uncategorized.</p><div className="food-dialog-actions"><button className="secondary-button" type="button" onClick={() => { playEffect('select'); setPendingDelete(undefined) }}>Cancel</button><button className="food-danger-button" type="button" onClick={() => { playEffect('select'); void remove() }}>Delete</button></div></section> : null}</div>
}
