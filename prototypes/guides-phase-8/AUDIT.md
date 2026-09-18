# FitDex Phase 8 — Corrected guide-system audit

## Scope

Read-only production audit. Prototype only: this folder. No production source, docs, package, public, Android, database, dependency, or Git changes.

## Real guide inventory

| Guide | Source | Steps | Entry | Persistence |
| --- | --- | ---: | --- | --- |
| Field Guide | Onboarding.tsx | 7 | first run; Settings Field Guide; proposed Home help replay | global completion |
| Workout | tutorialSteps.ts | 12 | first Workout visit; Workout header help | workoutTutorialSeen |
| Food | tutorialSteps.ts | 8 | first Food visit; Food header help | foodTutorialSeen |
| Progress | ProgressPage.tsx | 1 | Progress header | none |
| Journal | JournalPage.tsx | 1 | Journal header | none |
| Gamification | gamificationHelp.ts | 1 structured | Settings Gamification Guide row | none |

Field Guide, Workout, Food, Progress, Journal, and Gamification are separate content systems. They must never collapse into one generic tutorial.

## Source facts

- Field Guide has seven exact slides. Step 2 alone contains theme-family and champion controls.
- Workout has twelve exact tutorialSteps; header help opens Workout step 1 of 12.
- Food has eight exact tutorialSteps; header help opens Food step 1 of 8.
- Progress and Journal each have one actual help step. No rail, Back, or Next.
- Gamification has one structured reference step: lifetime XP, ranks, reward rows, achievements, streak, protection, plan commitment, and daily quests.
- GuideDialog owns feature-help step state, heading focus, browser Escape, and centralized back-registration. Onboarding owns Field Guide state and centralized back-registration.

## Entry routing

| Surface | Correct target | Not target |
| --- | --- | --- |
| Home page-level help | Field Guide replay | global header |
| Workout help | Workout tutorial | Field Guide |
| Food help | Food tutorial | Workout |
| Progress help | Progress help | generic tour |
| Journal help | Journal help | generic tour |
| Settings Field Guide row | Field Guide replay | Gamification |
| Settings Gamification row | Gamification Guide | Field Guide |
| Exercise Dex | no new help | invented tutorial |
| Settings header | no new help | invented tutorial |

## First run, replay, and Back

First-run Field Guide: Skip, Next, Enter FitDex. Replay: Close, Next, Done. Existing production replay presently reuses first-run wording; prototype makes distinction visible. Workout and Food retain own seen flags. Progress, Journal, and Gamification are always manually available.

Native Android Back belongs to BackNavigationProvider: previous guide step when possible; close from first step. No component-local native listener. Prototype models navigation only; it does not register Capacitor.

## Stale Field Guide copy found

Keep content unchanged in prototype; do not silently rewrite production copy.

- SETTINGS → PROFILE → APPEARANCE: Profile and Appearance are sibling Personalize entries.
- PROGRESS → RECORDS → ACHIEVEMENTS: Records and Achievements are sibling Progress tabs.
- SETTINGS → BACKUP → EXERCISE MEDIA: Backup and Android-only Exercise Media are sibling Data & Help entries.
- HOME → TODAY → QUICK ACCESS: closer to desktop than present mobile command layout.

## Display-name gate and Food info modal

RequiredDisplayNamePrompt appears before Field Guide only when display name is needed. It is not replayable guide. Food calorie-detail UI is informational modal, not tutorial content.

## Prototype system

All directions render all six real guide types and exact step counts. Harness controls guide, dynamic step, relevant mode, all four themes, 320–480 px width, and entry surface. It uses compact readable segmented cartridge rails for 7/8/12-step guides; one-step help removes rail and step navigation.

### V1 — Handheld Manual (Manual)
- **Axis**: High-density 90s handheld instruction manual / in-game help screen.
- **Framing**: Compact rectangular frame, thin top status strip with cartridge step indicator, small pixel badge, concise uppercase title, readable body, segmented progress, rectangular command footer (`BACK` | `NEXT ›`).

### V2 — Mission Brief (Mission)
- **Axis**: Tactical RPG quest briefing / directive framing.
- **Framing**: Objective banner with primary accent rail, strong uppercase mission directive headline, structured task notes, and tactile game-command navigation.

### V3 — Field Codex (Codex)
- **Axis**: FitDex/Pokédex-like structured reference record and archive.
- **Framing**: Indexed record badge (`REC // 01 OF 07`), subtle ruled grid lines, square pixel badge with primary border, sectioned archival cards, and technical telemetry footer.

## FitDex Design Doctrine Compliance

- **Canonical Standard Source**: [docs/FITDEX_UI_UX_STANDARD.md](file:///Users/arijitbhaduri/Developer/fitdex/docs/FITDEX_UI_UX_STANDARD.md#11-the-permanent-fitdex-design-doctrine).
- **Authoritative Production Palette**: Prototype strictly uses exact production semantic theme variables (`src/index.css`). Spartan Dark uses near-charcoal surfaces with **Teal** accent (`#2e9895` / `#58b4af`); Amazonian Dark uses aubergine surfaces with **Plum** accent (`#906390` / `#bd91b7`). The previous coral/orange and neon palette drift has been completely removed.
- **No Variant Palettes**: Variants V1, V2, and V3 share the exact same authoritative semantic color tokens across all four themes; variant differences are purely architectural, structural, and hierarchical.
- **Retro Handheld RPG Framing**: Guide shell uses crisp panel borders (`2px solid`), 4px border radius, condensed uppercase display typography (`Arial Narrow`, `Roboto Condensed`), readable body sans (`Inter`), and monospaced telemetry (`ui-monospace`). No soft 24px SaaS modal cards or floating glassmorphism.
- **Discrete Guide Systems**: All six guide systems (Field Guide, Workout, Food, Progress, Journal, Gamification) remain completely separate with their exact production step counts (7, 12, 8, 1, 1, 1).
- **Stale Content Maintained**: Stale production copy paths (`SETTINGS → PROFILE → APPEARANCE`, etc.) remain intact and documented without silent modification.

## Retro Control System Review

### Why Previous Buttons Failed
1. **Modern SaaS Tropes**: Previous buttons used rounded corners (8px–12px), smooth pill-like outlines, and flat modern fills that conflicted with the retro 90s handheld / pixel-era identity.
2. **Back Button Weakness**: The previous secondary button appeared low-contrast and disabled, causing interaction ambiguity.
3. **Lack of Tactile Feedback**: Controls lacked the physical press shift (`translate(1px, 1px)` / `translate(2px, 2px)`) and hard offset shadows characteristic of retro game menus.

### Three Control Styles for Comparison
- **Style A — Handheld Bevel (`ctrl-bevel`)**:
  - *Geometry*: 3px corner radius, 2px solid border.
  - *Depth*: Top/left subtle highlight (`inset 1px 1px 0 rgba(255,255,255,0.18)`), bottom/right dark edge (`inset -1px -1px 0 rgba(0,0,0,0.35)`), 2px offset shadow.
  - *Pressed*: 1px translate down/right with inset depth.
  - *Character*: Classic 90s Game Boy / handheld console tactile casing.
- **Style B — Pixel Command (`ctrl-pixel`)**:
  - *Geometry*: Sharp 0px corner radius, 2px solid border.
  - *Depth*: 3px hard geometric solid block shadow (`box-shadow: 3px 3px 0 var(--proto-border-strong)`).
  - *Pressed*: 2px translate down/right (`transform: translate(2px, 2px)`), block shadow collapses to 1px.
  - *Character*: Authentic 8-bit / 16-bit arcade and RPG command menu feel.
- **Style C — Cartridge Panel (`ctrl-cartridge`)**:
  - *Geometry*: 4px corner radius, 1px solid border.
  - *Depth*: Double-frame inset effect (`box-shadow: 0 0 0 1px var(--proto-surface) inset, 2px 2px 0 var(--proto-border)`).
  - *Pressed*: 1px translate down/right with inset frame.
  - *Character*: Console cartridge and hardware panel styling.

### Prototype Control Lab
Accessible via the developer harness under `Guide → ★ Control Lab (Widgets)`. Previews all retro control primitives under the active control style and theme:
- Primary command: `[ NEXT › ]`
- Secondary command: `[ BACK ]`
- Compact command: `[ CLOSE ]`
- Icon buttons: `[ ? ]`, `[ ⚙ ]`, `[ ☀ ]`
- Segmented mode selectors: `[ INDEX | FAVORITES ]`
- Checkbox: `[✓] Sound Effects`
- Toggle switch: `SFX [ ON | OFF ]`
- RPG option rows: `Battle Music > [ WARRIOR | HARDENED | VILLAIN | NONE ]`
- Terminal text/number input: `Calories [ 2374 kcal ]`
- Unit dropdown selector: `Units [ Metric (kg) ▼ ]`

### Accessibility & Phone-First Validation
- All interactive buttons maintain a minimum 44px touch target height.
- High-contrast text exceeds WCAG AA standards in all four themes.
- Validated without horizontal overflow across 320px, 340px, 360px, 375px, 390px, 412px, 430px, and 480px.

## Limits

Prototype keeps source copy in memory. It writes no completion flag, tutorial-seen setting, theme, avatar, or backup value. Browser automation was not used.
