# Phase 4 Progress Production Audit

> **PHASE 4 APPROVED & LOCKED DESIGN: VARIANT 3 — CHARACTER SHEET**
> Authoritative reference for Phase 4 production implementation.
> Hierarchy: Character/Rank Hero → Period Filter → Training Attributes → Logged Evidence Trends → Personal Records → Nutrition → Rank Journey & Achievements.

## Current architecture

- `ProgressPage`: overview, period selection, loading/empty states, navigation to Records, Achievements, and Rank Journey.
- `progressRepository`: read-only Dexie projection from completed workouts, workout exercises/sets, food logs, exercise definitions, and unit preference.
- `progressModel`: period ranges, workout frequency, training time, weight-reps volume, prior-period comparison, nutrition averages, trend buckets.
- `personalRecords`: derives records for every production exercise tracking type and formats metric/unit/date output.
- `gamificationRepository` and `GamificationViews`: level/rank, achievements, rank journey, XP rules, recent XP.
- `useBackNavigation` and `useAudio`: centralized Back behavior and selection SFX.

## Capability inventory

| Feature | Data source | Calculation | Persistence | User actions | Edge cases |
| --- | --- | --- | --- | --- | --- |
| Period filter | Local date + workouts/food | 7D, 30D, 90D, All ranges | None | Select period | All has no previous comparison |
| Overview metrics | Completed workouts and sets | Count, duration sum, weight × reps volume, PR exercise count | Existing workout stores | Inspect | Invalid/incomplete sets excluded |
| Workout consistency | Completed workouts | Count per day/5-day/7-day/month bucket | Existing workout stores | Change period | Empty period |
| Resistance volume | Completed `weight_reps` sets | Weight × reps; current vs prior period | Existing workout stores | Change period | No prior volume; unit conversion |
| Nutrition | Food logs | Logged-day average calories/protein; calorie trend | Food log store | Change period | Missing nutrition values; no logged days |
| Personal records | Completed measurable sets | Tracking-type-specific best metrics | Existing workout stores | Preview, search, inspect full archive | Historical names; ties prefer latest; retired exercises retained |
| Level and rank | XP events | Level/rank thresholds and XP within level | Gamification stores | Open Rank Journey/help | Maximum level |
| Achievements | Achievement definitions/unlocks | 52-item progress | Gamification stores | Filter categories | Locked/dormant states |
| Help | Static guide | None | None | Open/close | Explains automatic calculation |
| Loading/empty/error | Repository result | `hasAnyHistory` and load result | None | Retry through period change | History can exist outside selected period |

`BodyMeasurement` exists in schema and backup contracts, but current Progress has no read/write flow for it. It is not a current user capability.

## MUST PRESERVE FROM PRODUCTION

- Automatic, read-only Progress; no duplicate logging flow.
- Overview, Records, Achievements navigation.
- Level/rank status, Rank Journey, gamification help.
- 7D, 30D, 90D, All periods.
- Completed workout count and training-time total.
- Canonical resistance volume and previous-period comparison.
- Workout-frequency, volume, and nutrition trends.
- Logged-day calorie/protein averages.
- Personal-record preview, complete archive, search, dates, units, and every tracking-type metric.
- Production loading, empty, insufficient-data, and error semantics.
- Production AppShell, five destinations, Progress active state.
- Theme tokens, unit preference, selection SFX, centralized Android Back.

## UX audit

### Keep

- Honest calculations and explanatory copy.
- Period scope, compact metric set, PR archive/search.
- Separate rank and achievement destinations.
- Explicit empty states and accessible chart summaries.

### Improve

- Current page makes Level, Overview, Period, and three charts compete before answering whether progress improved.
- Four summary metrics lack one clear primary finding.
- Repeated full-height chart cards create long mobile scroll.
- Workout count appears in summary, chart title, and chart footer.
- Bars communicate magnitude but make cross-metric reading and narrow-screen scanning harder.
- Rank/XP feels attached above analytics, not integrated with Progress identity.

### Simplify

- Reduce repeated counts and headings.
- Use one dominant trend at a time where hierarchy benefits.
- Keep secondary trends available without three equal giant charts.

### Reorganize

- Summary-First: current state and strongest change first.
- Timeline-First: range plus one central multi-track history.
- Character Sheet: rank identity plus compact real fitness attributes, then evidence.

### Defer

- Body-measurement logging/edit/delete.
- Exercise-specific time-series beyond record maxima.
- Goal recommendations, plateau detection, predictive insights.
- Any new readiness, strength, consistency, or composite score.

## Future / requires data-model or product work

- Active body-weight/measurement experience despite dormant schema store.
- PR event timeline rather than current derived maxima.
- Exercise trend history and estimated 1RM.
- Target/goal snapshots for historical comparisons.
- Automated coaching or plateau insights.
