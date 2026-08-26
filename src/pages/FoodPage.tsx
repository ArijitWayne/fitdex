import { ArrowLeft, ChevronDown, ChevronLeft, ChevronRight, ChevronUp, CircleHelp, Pencil, Plus, Search, Trash2, X } from 'lucide-react'
import { type CSSProperties, useCallback, useEffect, useMemo, useState } from 'react'
import type { CustomFoodCategory, FoodLogEntry, FoodMeal, FoodNutrition, PredefinedFoodCategoryId, RememberedFood } from '../data/models'
import { FOOD_MEALS } from '../data/models'
import { CustomFoodCategoryIcon, FoodCategoryIcon, MealIcon } from '../features/food/FoodIcons'
import { addFoodLog, createCustomCategory, deleteCustomFoodCategory, deleteFoodLog, editFoodLog, getFrequentFoods, getRecentFoods, listCustomCategories, listFoodEntries, searchRememberedFoods, type FoodDraft } from '../features/food/foodRepository'
import { calculateMacroCalorieBreakdown, calculateMealCalorieBreakdown, categoryName, customCategoryCssColor, CUSTOM_CATEGORY_COLORS, dateFromKey, FOOD_MEAL_LABELS, normalizeDate, nutritionTotals, parseOptionalNutrition, PREDEFINED_FOOD_CATEGORIES, shiftDate, type NutritionBreakdown } from '../features/food/foodModel'
import { isLocalToday } from '../utils/localDate'
import { GuideDialog } from '../features/help/GuideDialog'
import { foodTutorialSteps } from '../features/help/tutorialSteps'
import { hasSeenTutorial, markTutorialSeen } from '../features/help/tutorialPreferences'

type View = { kind: 'overview' } | { kind: 'meal'; meal: FoodMeal } | { kind: 'add'; meal: FoodMeal; remembered?: RememberedFood; editing?: FoodLogEntry }
type NutritionStrings = Record<keyof Required<FoodNutrition>, string>
const emptyNutrition: NutritionStrings = { kcal: '', protein: '', carbs: '', fat: '', fiber: '', sugar: '', saturatedFat: '', sodium: '' }

function valueOrDash(value?: number, unit = 'g') { return value === undefined ? '—' : `${Math.round(value * 10) / 10}${unit === 'kcal' ? ' ' : ''}${unit}` }
function formatDate(date: string) { return new Intl.DateTimeFormat(undefined, { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' }).format(dateFromKey(date)) }

function MacroStrip({ nutrition, secondary = false }: { nutrition: FoodNutrition; secondary?: boolean }) {
  const rows: Array<[keyof FoodNutrition, string, string]> = secondary
    ? [['fiber', 'Fiber', 'g'], ['sugar', 'Sugar', 'g'], ['saturatedFat', 'Sat. fat', 'g'], ['sodium', 'Sodium', 'mg']]
    : [['kcal', 'Energy', 'kcal'], ['protein', 'Protein', 'g'], ['carbs', 'Carbs', 'g'], ['fat', 'Fat', 'g']]
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

  return <section className="panel food-breakdown" aria-labelledby="nutrition-breakdown-title">
    <header><div><p className="eyebrow" id="nutrition-breakdown-title">Nutrition breakdown</p><h2>{mode === 'macros' ? 'Calorie contribution' : 'Calories by meal'}</h2></div><div className="food-breakdown-switch" role="group" aria-label="Nutrition breakdown view"><button type="button" aria-pressed={mode === 'macros'} onClick={() => setMode('macros')}>Macros</button><button type="button" aria-pressed={mode === 'meals'} onClick={() => setMode('meals')}>Meals</button></div></header>
    {!breakdown.totalKcal ? <p className="food-breakdown-empty">{emptyMessage}</p> : <div className="food-breakdown-body">
      <div className="food-donut" style={{ '--food-donut': nutritionGradient(breakdown) } as CSSProperties} role="img" aria-label={`${context}: ${Math.round(breakdown.totalKcal)} kilocalories. ${accessibleSummary}`}><div><strong>{Math.round(breakdown.totalKcal)}</strong><span>kcal</span><small>{context}</small></div></div>
      <div className="food-breakdown-legend">{breakdown.slices.map((slice, index) => <div key={slice.key}><i style={{ '--food-slice': breakdownColors[index] } as CSSProperties} aria-hidden="true" /><span><strong>{slice.label}</strong><small>{mode === 'macros' ? `${Math.round((slice.grams ?? 0) * 10) / 10} g · ` : ''}{Math.round(slice.kcal)} kcal · {Math.round(slice.percentage)}%</small></span></div>)}</div>
    </div>}
    {mode === 'macros' && entries.length ? <p className="food-breakdown-note">Daily logged total: <strong>{Math.round(totals.kcal ?? 0)} kcal</strong>. Macro split is calculated from logged protein, carbs, and fat.</p> : null}
  </section>
}

export function FoodPage() {
  const [date, setDate] = useState(() => normalizeDate(new Date()))
  const [entries, setEntries] = useState<FoodLogEntry[]>([])
  const [view, setView] = useState<View>({ kind: 'overview' })
  const [tutorialOpen, setTutorialOpen] = useState(false)
  const refresh = useCallback(async () => { setEntries(await listFoodEntries(date)) }, [date])
  useEffect(() => {
    let active = true
    void listFoodEntries(date).then((rows) => { if (active) setEntries(rows) })
    return () => { active = false }
  }, [date])
  useEffect(() => { void hasSeenTutorial('food').then((seen) => { if (!seen) setTutorialOpen(true) }) }, [])
  const totals = useMemo(() => nutritionTotals(entries), [entries])
  const navigateDate = (nextDate: string) => { setDate(nextDate); setEntries([]); setView({ kind: 'overview' }) }

  if (view.kind === 'add') return <FoodEditor date={date} meal={view.meal} remembered={view.remembered} editing={view.editing} onBack={() => setView({ kind: 'meal', meal: view.meal })} onSaved={async () => { await refresh(); setView({ kind: 'meal', meal: view.meal }) }} />
  if (view.kind === 'meal') return <MealDetail date={date} meal={view.meal} entries={entries.filter((entry) => entry.meal === view.meal)} onBack={() => setView({ kind: 'overview' })} onAdd={() => setView({ kind: 'add', meal: view.meal })} onEdit={(editing) => setView({ kind: 'add', meal: view.meal, editing })} onChanged={refresh} />

  return <div className="page-stack food-page">
    <header className="food-header"><div><p className="eyebrow">Nutrition hub</p><h1>Food</h1></div><button className="page-help-button" type="button" onClick={() => setTutorialOpen(true)}><CircleHelp size={18} aria-hidden="true" /> How Food Works</button><div className="food-date-nav"><button type="button" aria-label="Previous day" onClick={() => navigateDate(shiftDate(date, -1))}><ChevronLeft /></button><strong>{formatDate(date)}</strong><button type="button" aria-label="Next day" onClick={() => navigateDate(shiftDate(date, 1))}><ChevronRight /></button></div>{isLocalToday(date) ? <span className="food-today">Today</span> : null}</header>
    <section className="panel food-daily-totals" aria-labelledby="daily-totals"><p className="eyebrow" id="daily-totals">Daily totals</p><MacroStrip nutrition={totals} /><MacroStrip nutrition={totals} secondary /></section>
    <NutritionBreakdownCard key={date} entries={entries} totals={totals} />
    <section className="food-meal-list" aria-label="Meals">{FOOD_MEALS.map((meal) => { const mealEntries = entries.filter((entry) => entry.meal === meal); const mealTotals = nutritionTotals(mealEntries); return <article className="panel food-meal-card" key={meal}><button className="food-meal-open" type="button" onClick={() => setView({ kind: 'meal', meal })}><MealIcon meal={meal} /><span className="food-meal-title"><strong>{FOOD_MEAL_LABELS[meal]}</strong><small>{mealEntries.length} {mealEntries.length === 1 ? 'item' : 'items'}</small></span><ChevronRight aria-hidden="true" /></button><MacroStrip nutrition={mealTotals} />{!mealEntries.length ? <p className="food-empty">No foods logged.</p> : null}<button className="secondary-button food-add-button" type="button" onClick={() => setView({ kind: 'add', meal })}><Plus size={18} aria-hidden="true" /> Add Food</button></article> })}</section>
    {tutorialOpen ? <GuideDialog eyebrow="How Food Works" steps={foodTutorialSteps} onClose={() => { setTutorialOpen(false); void markTutorialSeen('food') }} /> : null}
  </div>
}

function MealDetail({ date, meal, entries, onBack, onAdd, onEdit, onChanged }: { date: string; meal: FoodMeal; entries: FoodLogEntry[]; onBack: () => void; onAdd: () => void; onEdit: (entry: FoodLogEntry) => void; onChanged: () => Promise<void> }) {
  const remove = async (entry: FoodLogEntry) => { if (!window.confirm(`Delete ${entry.foodName} from ${FOOD_MEAL_LABELS[meal]}?`)) return; await deleteFoodLog(entry.id); await onChanged() }
  return <div className="page-stack food-page"><header className="food-subheader"><button className="back-button" type="button" aria-label="Back to Food" onClick={onBack}><ArrowLeft /></button><MealIcon meal={meal} /><div><p className="eyebrow">{formatDate(date)}</p><h1>{FOOD_MEAL_LABELS[meal]}</h1></div></header><section className="panel"><p className="eyebrow">Meal totals</p><MacroStrip nutrition={nutritionTotals(entries)} /></section><section className="food-entry-list" aria-label={`${FOOD_MEAL_LABELS[meal]} entries`}>{entries.length ? entries.map((entry) => {
    const categoryLabel = entry.categoryKind === 'unresolved' ? 'Uncategorized' : entry.categoryName
    return <article className="panel food-entry" key={entry.id}><FoodCategoryIcon categoryId={entry.categoryId ?? 'other'} label={categoryLabel} color={entry.customCategoryColor} /><div className="food-entry-copy"><h2>{entry.foodName}</h2><p>{categoryLabel} · {valueOrDash(entry.kcal, 'kcal')} · {valueOrDash(entry.protein)}</p></div><div className="food-entry-actions"><button type="button" aria-label={`Edit ${entry.foodName}`} onClick={() => onEdit(entry)}><Pencil size={18} /></button><button type="button" aria-label={`Delete ${entry.foodName}`} onClick={() => void remove(entry)}><Trash2 size={18} /></button></div></article>
  }) : <div className="panel food-detail-empty"><MealIcon meal={meal} /><h2>No foods logged</h2><p>Add your first item to {FOOD_MEAL_LABELS[meal]}.</p></div>}</section><button className="primary-button food-sticky-add" type="button" onClick={onAdd}><Plus size={18} /> Add Food</button></div>
}

function FoodEditor({ date, meal, remembered, editing, onBack, onSaved }: { date: string; meal: FoodMeal; remembered?: RememberedFood; editing?: FoodLogEntry; onBack: () => void; onSaved: () => Promise<void> }) {
  const initial = editing ?? remembered
  const [stage, setStage] = useState<'suggestions' | 'details'>(initial ? 'details' : 'suggestions')
  const [query, setQuery] = useState(''); const [suggestions, setSuggestions] = useState<RememberedFood[]>([]); const [frequent, setFrequent] = useState<RememberedFood[]>([])
  const [name, setName] = useState(editing?.foodName ?? remembered?.name ?? ''); const [categoryId, setCategoryId] = useState<PredefinedFoodCategoryId>(initial?.categoryId ?? 'other'); const [customCategoryId, setCustomCategoryId] = useState(initial?.customCategoryId); const [customCategoryLabel, setCustomCategoryLabel] = useState(initial?.customCategoryName); const [customCategoryColor, setCustomCategoryColor] = useState(initial?.customCategoryColor)
  const [nutrition, setNutrition] = useState<NutritionStrings>(() => Object.fromEntries(Object.keys(emptyNutrition).map((key) => [key, initial?.[key as keyof FoodNutrition]?.toString() ?? ''])) as NutritionStrings)
  const [moreOpen, setMoreOpen] = useState(Boolean(initial && ['fiber', 'sugar', 'saturatedFat', 'sodium'].some((key) => initial[key as keyof FoodNutrition] !== undefined))); const [categoryOpen, setCategoryOpen] = useState(false); const [error, setError] = useState(''); const [saving, setSaving] = useState(false)
  useEffect(() => { if (stage !== 'suggestions') return; void (query ? searchRememberedFoods(query, meal) : getRecentFoods(meal)).then(setSuggestions); if (!query) void getFrequentFoods(meal).then(setFrequent) }, [query, meal, stage])
  const select = (food: RememberedFood) => { setName(food.name); setCategoryId(food.categoryId); setCustomCategoryId(food.customCategoryId); setCustomCategoryLabel(food.customCategoryName); setCustomCategoryColor(food.customCategoryColor); setNutrition(Object.fromEntries(Object.keys(emptyNutrition).map((key) => [key, food[key as keyof FoodNutrition]?.toString() ?? ''])) as NutritionStrings); setStage('details') }
  const save = async () => { setError(''); setSaving(true); try { const draft: FoodDraft = { name, categoryId, customCategoryId }; for (const key of Object.keys(nutrition) as Array<keyof FoodNutrition>) draft[key] = parseOptionalNutrition(nutrition[key]); if (editing) await editFoodLog(editing.id, draft); else await addFoodLog(date, meal, draft); await onSaved() } catch (reason) { setError(reason instanceof Error ? reason.message : 'Unable to save food.') } finally { setSaving(false) } }
  return <div className="page-stack food-page"><header className="food-subheader"><button className="back-button" type="button" aria-label="Go back" onClick={stage === 'details' && !initial ? () => setStage('suggestions') : onBack}><ArrowLeft /></button><div><p className="eyebrow">{editing ? 'Edit food' : 'Add food'} · {formatDate(date)}</p><h1>{FOOD_MEAL_LABELS[meal]}</h1></div></header>{stage === 'suggestions' ? <section className="food-suggestions"><label className="food-search"><Search size={19} aria-hidden="true" /><span className="sr-only">Search remembered foods</span><input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search foods you've logged" /><button type="button" aria-label="Clear search" onClick={() => setQuery('')}><X size={18} /></button></label><SuggestionGroup title={query ? 'Matches' : 'Recently eaten'} foods={suggestions} onSelect={select} empty={query ? 'No remembered foods match.' : 'No foods remembered yet.'} />{!query && frequent.length ? <SuggestionGroup title="Frequently eaten" foods={frequent} onSelect={select} /> : null}<button className="primary-button" type="button" onClick={() => { setName(query.trim()); setStage('details') }}><Plus size={18} /> Create new food</button></section> : <section className="panel food-form"><label className="field"><span>Food name <b>Required</b></span><input value={name} onChange={(event) => setName(event.target.value)} autoFocus={!initial} required /></label><div className="field"><span>Category <b>Required</b></span><button className="food-category-picker" type="button" onClick={() => setCategoryOpen(true)}><FoodCategoryIcon categoryId={categoryId} label={customCategoryLabel ?? categoryName(categoryId)} color={customCategoryColor} /><strong>{customCategoryLabel ?? categoryName(categoryId)}</strong><ChevronRight /></button></div><fieldset className="nutrition-fields"><legend>Core nutrition</legend><NutritionInput label="Calories" unit="kcal" value={nutrition.kcal} onChange={(value) => setNutrition({ ...nutrition, kcal: value })} /><NutritionInput label="Protein" unit="g" value={nutrition.protein} onChange={(value) => setNutrition({ ...nutrition, protein: value })} /><NutritionInput label="Carbohydrates" unit="g" value={nutrition.carbs} onChange={(value) => setNutrition({ ...nutrition, carbs: value })} /><NutritionInput label="Fat" unit="g" value={nutrition.fat} onChange={(value) => setNutrition({ ...nutrition, fat: value })} /></fieldset><button className="food-more-toggle" type="button" aria-expanded={moreOpen} onClick={() => setMoreOpen(!moreOpen)}>More nutrition {moreOpen ? <ChevronUp /> : <ChevronDown />}</button>{moreOpen ? <fieldset className="nutrition-fields"><legend>Additional nutrition</legend><NutritionInput label="Fiber" unit="g" value={nutrition.fiber} onChange={(value) => setNutrition({ ...nutrition, fiber: value })} /><NutritionInput label="Sugar" unit="g" value={nutrition.sugar} onChange={(value) => setNutrition({ ...nutrition, sugar: value })} /><NutritionInput label="Saturated Fat" unit="g" value={nutrition.saturatedFat} onChange={(value) => setNutrition({ ...nutrition, saturatedFat: value })} /><NutritionInput label="Sodium" unit="mg" value={nutrition.sodium} onChange={(value) => setNutrition({ ...nutrition, sodium: value })} /></fieldset> : null}{error ? <p className="form-error" role="alert">{error}</p> : null}<button className="primary-button" type="button" disabled={saving || !name.trim()} onClick={() => void save()}>{saving ? 'Saving…' : editing ? 'Save changes' : `Add to ${FOOD_MEAL_LABELS[meal]}`}</button></section>}{categoryOpen ? <CategoryDialog selectedId={categoryId} selectedCustomId={customCategoryId} onClose={() => setCategoryOpen(false)} onSelect={(id, customId, label, color) => { setCategoryId(id); setCustomCategoryId(customId); setCustomCategoryLabel(label); setCustomCategoryColor(color); setCategoryOpen(false) }} /> : null}</div>
}

function NutritionInput({ label, unit, value, onChange }: { label: string; unit: string; value: string; onChange: (value: string) => void }) { return <label className="nutrition-input"><span>{label}</span><span><input type="number" min="0" step="any" inputMode="decimal" value={value} onChange={(event) => onChange(event.target.value)} /><i>{unit}</i></span></label> }
function SuggestionGroup({ title, foods, onSelect, empty }: { title: string; foods: RememberedFood[]; onSelect: (food: RememberedFood) => void; empty?: string }) { return <section><p className="eyebrow">{title}</p>{foods.length ? <div className="food-suggestion-list">{foods.map((food) => <button type="button" key={food.id} onClick={() => onSelect(food)}><FoodCategoryIcon categoryId={food.categoryId} label={food.customCategoryName ?? categoryName(food.categoryId)} color={food.customCategoryColor} /><span><strong>{food.name}</strong><small>{food.customCategoryName ?? categoryName(food.categoryId)} · {valueOrDash(food.kcal, 'kcal')}</small></span><ChevronRight /></button>)}</div> : <p className="panel food-suggestion-empty">{empty}</p>}</section> }

function CategoryDialog({ selectedId, selectedCustomId, onClose, onSelect }: { selectedId: PredefinedFoodCategoryId; selectedCustomId?: string; onClose: () => void; onSelect: (id: PredefinedFoodCategoryId, customId?: string, label?: string, color?: string) => void }) {
  const [custom, setCustom] = useState<CustomFoodCategory[]>([])
  const [creating, setCreating] = useState(false)
  const [name, setName] = useState('')
  const [color, setColor] = useState<string>(CUSTOM_CATEGORY_COLORS[0])
  const [error, setError] = useState('')
  useEffect(() => { void listCustomCategories().then(setCustom) }, [])
  const create = async () => { try { const category = await createCustomCategory(name, color); onSelect('other', category.id, category.name, category.color) } catch (reason) { setError(reason instanceof Error ? reason.message : 'Unable to create category.') } }
  const remove = async (category: CustomFoodCategory) => {
    if (!window.confirm(`Delete ${category.name} category?\n\nThis deletes the custom category and remembered foods assigned to it. Food entries already logged in your history remain, but become Uncategorized and need a new category assigned.`)) return
    try {
      await deleteCustomFoodCategory(category.id)
      setCustom(await listCustomCategories())
      if (selectedCustomId === category.id) onSelect('other')
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'Unable to delete category.')
    }
  }
  return <div className="food-dialog-backdrop" role="presentation"><section className="food-dialog" role="dialog" aria-modal="true" aria-labelledby="category-title"><header><div><p className="eyebrow">Food category</p><h2 id="category-title">Select category</h2></div><button type="button" aria-label="Close category picker" onClick={onClose}><X /></button></header>{creating ? <div className="custom-category-form"><button className="text-button" type="button" onClick={() => setCreating(false)}><ChevronLeft /> Categories</button><label className="field"><span>Category name</span><input autoFocus value={name} onChange={(event) => setName(event.target.value)} /></label><div className="custom-category-preview" aria-live="polite"><CustomFoodCategoryIcon label={name.trim() || 'Custom category'} color={color} /><div><span className="eyebrow">Live icon preview</span><strong>{name.trim() || 'Custom category'}</strong><small>{color} accent</small></div></div><fieldset className="color-picker"><legend>Icon accent color</legend>{CUSTOM_CATEGORY_COLORS.map((item) => <label key={item} data-color={item} style={{ '--food-category-color': customCategoryCssColor(item) } as CSSProperties}><input type="radio" name="category-color" aria-label={`Icon accent color: ${item}`} checked={color === item} onChange={() => setColor(item)} /><span aria-hidden="true" /></label>)}</fieldset>{error ? <p className="form-error" role="alert">{error}</p> : null}<button className="primary-button" type="button" disabled={!name.trim()} onClick={() => void create()}>Save category</button></div> : <><div className="category-grid">{PREDEFINED_FOOD_CATEGORIES.filter((category) => category.id !== 'other').map((category) => <button className={selectedId === category.id ? 'is-selected' : ''} type="button" key={category.id} onClick={() => onSelect(category.id)}><FoodCategoryIcon categoryId={category.id} label={category.name} /><span>{category.name}</span></button>)}</div>{custom.length ? <section><p className="eyebrow">Your categories</p><div className="category-grid">{custom.map((category) => <div className="custom-category-option" key={category.id}><button className={selectedCustomId === category.id ? 'is-selected' : ''} type="button" onClick={() => onSelect('other', category.id, category.name, category.color)}><FoodCategoryIcon categoryId="other" label={category.name} color={category.color} /><span>{category.name}</span></button><button className="custom-category-delete" type="button" aria-label={`Delete ${category.name} category`} onClick={() => void remove(category)}><Trash2 size={15} /></button></div>)}</div></section> : null}{error ? <p className="form-error" role="alert">{error}</p> : null}<button className="secondary-button" type="button" onClick={() => setCreating(true)}><Plus size={18} /> Other / custom category</button></>}</section></div>
}
