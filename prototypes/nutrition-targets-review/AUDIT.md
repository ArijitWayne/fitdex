# FITDEX NUTRITION TARGETS UX AUDIT & PROTOTYPE REVIEW
**Phase**: Settings / Nutrition Targets Subview  
**Status**: Review Only (No production edits)  
**Standard Reference**: [FITDEX_UI_UX_STANDARD.md](../../docs/FITDEX_UI_UX_STANDARD.md)

---

## 1. Current Production Implementation Audit

### 1.1 Source Files Traced
- **UI Screen**: `src/features/settings/SettingsPage.tsx` (`NutritionTargetsSettings`, lines 510–680)
- **Repository**: `src/features/nutritionTargets/nutritionTargetRepository.ts`
- **Calculator**: `src/features/nutritionTargets/nutritionTargetCalculator.ts`
- **Data Model**: `src/data/models.ts` (`NutritionTargets`, `NutritionGoal`, `NutritionSex`, `NutritionActivityLevel`, `CalorieTargetSource`)
- **Downstream Consumer**: `src/pages/FoodPage.tsx` (`DailyTargetsCard`, `target-status-dialog`, `liveQuery(loadNutritionTargets)`)
- **Gamification Eligibility**: `src/features/gamification/gamificationRepository.ts`, `src/features/gamification/achievementCatalog.ts`
- **Existing UI Tests**: `src/features/nutritionTargets/testNutritionTargetsUi.ts`, `testNutritionTargetCalculator.ts`

### 1.2 Current Data Model
```typescript
export type NutritionGoal = 'lose' | 'maintain' | 'gain'
export type NutritionSex = 'male' | 'female'
export type NutritionActivityLevel = 'sedentary' | 'light' | 'moderate' | 'very' | 'extreme'
export type CalorieTargetSource = 'calculated' | 'manual'

export interface NutritionTargets {
  enabled: boolean
  goal: NutritionGoal
  age: number              // 18–120 integer
  sex: NutritionSex        // 'male' | 'female'
  heightCm: number         // Positive number (always cm)
  weightKg: number         // Positive number (always kg)
  activityLevel: NutritionActivityLevel
  calorieTarget: number    // Positive number, safety floor >= 1000
  proteinTargetGrams: number // >= 0; 0 means unavailable
  calorieTargetSource: CalorieTargetSource
  updatedAt: string
}
```

### 1.3 Calculation Semantics
- **RMR (Resting Metabolic Rate)**: Mifflin–St Jeor equation:
  $$\text{RMR} = 10 \times \text{weightKg} + 6.25 \times \text{heightCm} - 5 \times \text{age} + (\text{male} ? 5 : -161)$$
- **TDEE (Total Daily Energy Expenditure)**:
  $$\text{TDEE} = \text{round}(\text{RMR} \times \text{ACTIVITY\_FACTORS}[\text{activityLevel}])$$
- **Suggested Calorie Targets**:
  - `lose`: Moderate = $\max(1000, \text{TDEE} - 500)$, Higher = $\max(1000, \text{TDEE} - 750)$
  - `maintain`: Target = $\text{TDEE}$
  - `gain`: Target = $\text{TDEE} + 250$
- **Calorie Safety Floor**: $1,000\text{ kcal}$ strictly enforced as minimum.

### 1.4 Activity Multipliers & Leaked UI
| Internal Key | Multiplier | Current Visible Label in Production | Proposed User-Facing Clean Label |
|---|---|---|---|
| `sedentary` | 1.2 | `Sedentary · 1.2` | **Sedentary** |
| `light` | 1.375 | `Lightly Active · 1.375` | **Lightly Active** |
| `moderate` | 1.55 | `Moderately Active · 1.55` | **Moderately Active** |
| `very` | 1.725 | `Very Active · 1.725` | **Very Active** |
| `extreme` | 1.9 | `Extremely Active · 1.9` | **Extremely Active** |

**Critical Observation**: Numeric multipliers (`1.2`, `1.375`, `1.55`, `1.725`, `1.9`) are calculation implementation artifacts that confuse users and look like developer debug strings. They must be stripped from all user-facing UI while keeping the internal arithmetic untouched.

### 1.5 UX Copy Proposals for Activity Levels
Production has zero helper descriptions for activity levels. The following concise, neutral copy is proposed:
- **Sedentary**: Desk job, little to no regular exercise
- **Lightly Active**: Light training or walking 1–3 days per week
- **Moderately Active**: Moderate training or exercise 3–5 days per week
- **Very Active**: Hard training or sports 6–7 days per week
- **Extremely Active**: Intense daily training, athlete schedule, or physical job

---

## 2. Identified UX & Visual Problems

1. **Leaked Multipliers**: Multiplier decimals (`· 1.2`, `· 1.55`) pollute dropdown options.
2. **Generic Form Layout**: Renders as a bland vertical stack without the tactile game-cartridge or console feel of the rest of FitDex.
3. **Weak Distinction Between Saved vs Draft**: Editing fields immediately changes the draft without indicating what is currently active on the Home/Food dashboard until "Save Targets" is pressed.
4. **Awkward 0g Protein Treatment**: Displays `0 g` as a target value in a numeric input, accompanied by a dominant warning note ("0 g means protein target is unavailable and no protein target XP is awarded"). Users perceive 0g as an active target rather than "Unset / Unavailable".
5. **Modern iOS Switch**: Toggle uses a standard circular sliding switch (`settings-switch-row`), clashing with the Style B Pixel Command doctrine.
6. **Native Browser Number Steppers**: Generic `<input type="number">` controls show tiny browser spinner arrows that are hard to tap on mobile and look inconsistent with retro UI.
7. **Buried Calculation Profile**: The profile (Age, Sex, Height, Weight, Activity) is tucked away inside an unstyled HTML `<details>` disclosure below the targets, disconnecting the inputs from the recommendations they produce.
8. **Unit Clarification**: Production stores `heightCm` and `weightKg` regardless of global units preference (`SettingsPage.tsx` has explicit disclaimer: *"Nutrition calculation inputs remain labelled in kilograms and centimetres in today’s data model"*).

---

## 3. Safe Visual Fixes (Phase 8 Prototype Pass)

1. **Clean Activity Dropdown**: Remove all multipliers from options; add contextual helper descriptions.
2. **Pixel Command Style B Controls**:
   - 0px border-radius
   - 2px solid semantic borders (`var(--color-border-strong)`)
   - 3px 3px hard geometric shadows (`box-shadow: 3px 3px 0 var(--color-border-strong)`)
   - Tactile active feedback (`transform: translate(2px, 2px); box-shadow: 1px 1px 0;`)
3. **Tactile Target Status Switch**: Replace iOS toggle with a framed retro binary selector `[ TARGETS: ON ] [ OFF ]`.
4. **Tactile Mode Selector for Goal**: Rectangular segmented cartridge for `LOSE | MAINTAIN | GAIN`.
5. **Terminal-Style Numeric Inputs**: Framed step-buttons `[ − ] [ 1,800 kcal ] [ + ]` with direct numeric entry.
6. **Protein "Not Set / Unavailable" State**: When protein target is 0, display an explicit "NOT SET" badge with an intuitive "Configure" or "+ Add Protein Target" toggle, clarifying that protein target XP is inactive until set.
7. **Recommendation Clarity**: Prominently display the estimated maintenance TDEE and one-click quick-apply chips (`Use 1,800 kcal`).

---

## 4. Semantic Changes Deferred (Zero Production Alterations)
- **Mifflin–St Jeor Formula**: Kept 100% intact.
- **Activity Multipliers (TDEE)**: Stored and calculated with identical values (`1.2`–`1.9`). Kept strictly internal.
- **Safety Floor**: Kept at $1,000\text{ kcal}$.
- **Stored Values**: Height remains `heightCm`, Weight remains `weightKg`, Protein unset remains stored as `0`.
- **XP Eligibility**: Forward-only boundaries (`nutritionTargetsInitializedAt`, `nutritionTargetsEligibleFrom`) preserved.
- **Goal-Sensitive Protein Modifiers**: In this prototype round, goal (Lose/Maintain/Gain) affects calorie deficit/surplus only. Goal-sensitive protein multipliers are deferred.

---

## 5. Protein Target Research

### 5.1 Evidence-Based Sports Nutrition Principles
- **General Adult Baseline (RDA)**:
  - $0.8\text{ g/kg/day}$ is the standard recommended dietary allowance established for sedentary healthy adults to prevent deficiency.
- **Regularly Exercising Individuals**:
  - Extensive sports nutrition literature (ISSN, ACSM, British Journal of Sports Medicine consensus statements) supports daily protein intakes between **$1.4\text{ and }2.0\text{ g/kg/day}$** for exercising individuals to optimize muscle protein synthesis, recovery, and lean mass preservation.
- **Strength / Power Training Context**:
  - Resistance-trained athletes and power-focused individuals generally sit toward the upper end of the spectrum ($1.6\text{–}2.0+\text{ g/kg/day}$).
- **Core Product Principle**:
  - Protein requirements are biologically driven by body mass and training stimulus, **not derived as a fixed percentage of total calories**. Total caloric intake adjusts for energy balance (deficit/surplus), while protein is anchored to body weight.
  - Calorie percentage is presented strictly as a secondary derived display metric.
- **Scope & Medical Disclaimer**:
  - These values represent general nutritional heuristics for healthy exercising adults and are not individualized medical or clinical prescriptions.

### 5.2 Research-Supported Range vs FitDex Product Mapping
We strictly distinguish between the broad academic research continuum and the discrete, actionable product heuristic proposed for FitDex.

```
RESEARCH-SUPPORTED CONTINUUM:
[ 0.8 g/kg (Sedentary RDA) ] ─── [ 1.2–1.4 g/kg (Endurance/Active) ] ─── [ 1.6–2.0+ g/kg (Strength/Hypertrophy) ]

FITDEX PROPOSED PRODUCT MAPPING:
Sedentary         ───> 0.8 g/kg
Lightly Active    ───> 1.2 g/kg
Moderately Active ───> 1.4 g/kg
Very Active       ───> 1.6 g/kg
Extremely Active  ───> 1.8 g/kg
```

### 5.3 Proposed Protein Target Model (FitDex Heuristic)
> [!IMPORTANT]
> **PROPOSED PROTEIN TARGET MODEL**: These multipliers are a **product logic proposal** for FitDex. They are NOT existing production logic. Production currently uses an unassisted, manual-only protein input.

| Activity Level | Proposed Protein Multiplier | Research Basis Context |
|---|---|---|
| **Sedentary** | `0.8 g/kg` | General adult baseline RDA |
| **Lightly Active** | `1.2 g/kg` | Initial threshold for recreationally active adults |
| **Moderately Active** | `1.4 g/kg` | Established sports nutrition baseline for consistent exercise (3–5 days/wk) |
| **Very Active** | `1.6 g/kg` | Substantial resistance or sports volume (6–7 days/wk) |
| **Extremely Active** | `1.8 g/kg` | High-frequency athletic training or physical labor |

### 5.4 Calculation Formulas
1. **Primary Protein Target (Grams)**:
   $$\text{proteinTargetGrams} = \text{round}(\text{weightKg} \times \text{proteinMultiplier})$$
2. **Protein Energy Contribution (Calories)**:
   $$\text{proteinCalories} = \text{proteinTargetGrams} \times 4\text{ kcal/g}$$
3. **Protein Share of Daily Calories (Percentage)**:
   $$\text{proteinPercentOfCalories} = \text{round}\left(\frac{\text{proteinCalories}}{\text{calorieTarget}} \times 100\right)$$

### 5.5 Calculation Example
- **User Attributes**: Weight $= 65\text{ kg}$, Activity Level $=$ *Moderately Active* (`1.4 g/kg`)
- **Calculated Protein**: $65 \times 1.4 = 91\text{ g/day}$
- **Protein Energy**: $91 \times 4 = 364\text{ kcal}$
- **Daily Calorie Target**: $1,800\text{ kcal}$
- **Derived Calorie Share**: $(364 / 1800) \times 100 = 20.2\% \approx 20\%$
- **User-Facing Presentation**:
  - Primary metric: **`91 g / day`**
  - Supporting metadata: `1.4 g/kg · 364 kcal · 20% of daily calories`

### 5.6 Calculated vs Manual States
- **Calculated**: Value dynamically synchronizes with `weightKg` and `activityLevel`. Tagged with `CALCULATED` badge.
- **Manual**: User types a custom gram override. State immediately switches to `MANUAL` badge. The value remains frozen and will not be silently overwritten.
- **Recalculate Action**: An explicit Style B Pixel Command button (`[ RECALCULATE ]` / `[ USE CALCULATED ]`) appears when in manual mode, allowing the user to restore the bodyweight-derived calculation at will.
- **Zero State ("NOT SET")**:
  - In production, `0 g` is stored to represent unset/unavailable, which confused users into thinking 0g was an active daily goal.
  - In the prototype, if inputs are missing or protein is unconfigured, the UI displays `PROTEIN TARGET: NOT SET` with supporting microcopy: *"Complete the calculation profile to generate a protein target. No protein-target XP awarded until configured."*

---

## 6. Multiplier Isolation: TDEE vs Protein
There are two distinct multiplier systems. They are isolated to prevent confusion:
1. **TDEE Activity Factor (Internal Calorie Model)**:
   - Factors: `1.2`, `1.375`, `1.55`, `1.725`, `1.9`
   - Role: Multiplies RMR to compute maintenance energy.
   - Visibility: **Strictly hidden** from user-facing dropdown.
2. **Protein Multiplier (Proposed Protein Model)**:
   - Multipliers: `0.8`, `1.2`, `1.4`, `1.6`, `1.8 g/kg`
   - Role: Multiplies body weight in kg to establish daily protein grams.
   - Visibility: **Hidden from dropdown options**; displayed only in the resulting metadata card (e.g., `1.4 g/kg`).

---

## 7. Prototype Direction Revisions

### Direction 1: V1 — Status Console
- Preserved high-density cockpit layout.
- Updated Daily Targets with bodyweight-derived protein calculation, calculated vs manual states, and `NOT SET` zero state.

### Direction 2: V2 — Training Profile (Top Hierarchy Redesign)
- **Problem Identified**: The previous top layout placed `TRAINING PROFILE // ATHLETE ATTRIBUTES` inside a massive, heavy-bordered block adjacent to the binary switch, creating competing visual anchors and excessive wording.
- **Approved Solution**:
  - Removed giant framed tab and slash-heavy label.
  - Implemented clean top section row:
    ```
    CALCULATION PROFILE                         [ ON ][ OFF ]
    ```
  - Left: Clean FitDex section heading.
  - Right: Style B Pixel Command `[ ON ][ OFF ]` binary switch.
- **Revised Hierarchy**:
  1. `CALCULATION PROFILE` + `[ ON ][ OFF ]`
  2. `SELECTED DIRECTIVE` (`LOSE` · Deficit | `MAINTAIN` · Equilibrium | `GAIN` · Surplus)
  3. `PHYSICAL SPECIFICATIONS` (Age, Sex, Height, Weight)
  4. `ACTIVITY` (Clean selector without leaked decimals)
  5. `ENERGY ACCOUNTING` (RMR, TDEE, Calorie Target + Protein grams, kcal, % share)
  6. `DAILY TARGETS` (Primary Calorie & Protein controls with recalculated actions)
  7. `SAVE TARGETS` (Command action button)

### Direction 3: V3 — Nutrition Codex (Record Terminology Cleanup)
- **Problem Identified**: Repetitive numbered ledger copy (`RECORD 01 // BASELINE PARAMETERS`, `RECORD 02 // ENERGY ACCOUNTING`, `RECORD 03 // DAILY TARGETS`) felt bloated and cluttered.
- **Approved Solution**:
  - Removed all `RECORD XX //` numbering prefixes from section titles.
  - Retained high-level `NUTRITION CODEX` identity.
  - Section titles simplified to:
    - **`BASELINE PARAMETERS`**
    - **`ENERGY ACCOUNTING`**
    - **`DAILY TARGETS`**
  - Codex identity maintained through tactile framing, typography, telemetry badges, and Pixel Command controls rather than decorative record stamps.

---

## 8. Verification & Fidelity Check
- [x] V2 top hierarchy replaced with clean `CALCULATION PROFILE` + `[ ON ][ OFF ]`.
- [x] V3 repetitive `RECORD 01..03` titles cleaned up.
- [x] Internal TDEE factors (`1.2`–`1.9`) strictly hidden from Activity dropdown.
- [x] Proposed protein multipliers (`0.8`–`1.8 g/kg`) applied based on body weight.
- [x] Derived protein kcal ($g \times 4$) and calorie % calculated dynamically.
- [x] `CALCULATED` vs `MANUAL` states with `[ RECALCULATE ]` command action.
- [x] Zero state clearly labeled `NOT SET` instead of `0 g`.
- [x] All 4 themes (Dark, Midnight, Warm Dark, Light) verified.
- [x] Responsive layout verified across 320, 340, 360, 375, 390, 412, 430, 480px.
- [x] **Zero production source files modified** (`src/`, `public/`, `android/`, `package.json` untouched).
- [x] **Zero Git commits or branch modifications**.
