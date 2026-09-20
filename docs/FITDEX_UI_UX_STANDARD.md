# FitDex UI/UX Standard

This document records the canonical visual and interaction rules for FitDex. It standardizes product language, ergonomics, and behavior across all application features without forcing every screen into an identical layout.

For phase-by-phase implementation statuses, data derivations, and architectural specifications, see [PRODUCT_PHASES.md](PRODUCT_PHASES.md).

---

## 1. Core Design Character & Design Doctrine

FitDex is:
- **An All-in-One Fitness + Calorie Tracker**
- **A Gamified Fitness App**
- **A Retro 90s Handheld / Pixel-Era Experience**

The visual inspiration is rooted in the era of 8-bit/pixel games, 90s handheld consoles, classic RPG menus, old-school game manuals, collectible/indexed game systems, and Pokédex-like catalogue/discovery concepts (the name *FitDex* itself is conceptually inspired by a Pokédex as a structured, browsable compendium, without copying any copyrighted Pokémon assets, branding, characters, or trademarks).

---

### 1.1 The Permanent FitDex Design Doctrine

#### I. Permanent Design Question
Before approving ANY screen, component, prototype, or redesign, evaluate against these 6 criteria:
1. **Retro Game Utility**: Does this still feel like a tactile retro game utility?
2. **Ecosystem Fit**: Does this look like it belongs beside the established FitDex screens?
3. **Color Integrity**: Does it strictly use REAL FitDex production semantic theme tokens?
4. **Authentic Character**: Does it feel like a field manual / RPG menu / codex / quest system rather than a generic modern SaaS app?
5. **Phone-First Usability**: Does it preserve rock-solid phone-first ergonomics (320px–480px)?
6. **Substantive Nostalgia**: Does the retro character come from structural framing, typography, pixel assets, and status rails—not superficial gimmicks?

*If the answer to any of these is NO, the design has drifted and must be corrected.*

#### II. Visual Language
- **Panel Framing**: Strong visible panel borders (`--color-border`), subtle inset/outset framing, distinct section dividers, and console-like casing.
- **Status Readouts**: Compact, high-density telemetry displays, mono/technical values for weights/timers/calories, and crisp uppercase headers.
- **Geometry**: Square or mildly rounded frames (4px–12px radius max). Avoid soft floating cards, oversized border-radii (24px+), or pill-saturated layouts.
- **Controls**: Crisp geometric command buttons with defined borders, obvious active/selection states, and semantic primary highlights.
- **Prohibited Drift Patterns**: FitDex must NEVER be styled as:
  - A generic SaaS / B2B dashboard
  - An iOS Settings or Human Interface Guidelines clone
  - A Material You / Google Design clone
  - A soft pastel wellness / meditation app
  - A translucent glassmorphism / floating blur showcase
  - A modern fintech / neo-bank interface
  - A generic corporate gym tracker

#### III. Usability & Accessibility (Retro ≠ Bad UX)
Retro nostalgia must never compromise modern usability:
- **Body Typography**: High-contrast, readable modern sans-serif (`Inter`, system-ui) for all instructional and long-form text. Pixel fonts are strictly restricted to badges, icons, and display headers—never body copy.
- **Ergonomics**: 42px–44px minimum interactive touch targets across all buttons and controls.
- **Navigation & Clarity**: Clear linear navigation, zero artificial loading delays, obvious state indicators, and full ARIA accessibility.

#### IV. Authoritative Semantic Theme Color Doctrine
Prototypes and views must never invent independent color palettes or custom hex accents. Production tokens from `src/index.css` are universally authoritative:
- **Spartan Dark**: Near-charcoal background (`#121616`), dark graphite surfaces (`#181d1d`, `#1f2524`), **Teal primary accent** (`--color-primary: #2e9895`, text `#58b4af`), light neutral text (`#e8e8e2`), muted slate secondary (`#a7aeaa`). *Spartan primary is NEVER coral or orange.*
- **Spartan Light**: Pale stone background (`#f0e6d6`), ivory/slate surfaces (`#f4ebdd`, `#eae2d5`), **Teal primary accent** (`--color-primary: #1f8582`, text `#176864`), dark slate text (`#2e3230`).
- **Amazonian Dark**: Deep aubergine/charcoal background (`#1f171e`), dark plum surfaces (`#281c27`, `#31232f`), **Plum primary accent** (`--color-primary: #906390`, text `#bd91b7`), copper/wine details (`#bc7247`, `#9a4964`), light warm text (`#eee5df`).
- **Amazonian Light**: Warm ivory/cream background (`#f0e4d4`), cream/mauve surfaces (`#f4e9db`, `#ebe1d8`), **Plum primary accent** (`--color-primary: #785178`), dark plum text (`#352b31`).

#### V. Typography Doctrine
- **Display & Titles**: Condensed, strong uppercase (`--font-display`: Arial Narrow, Roboto Condensed, Impact, sans-serif) for titles, section headers, and game-menu commands.
- **Body Text**: Readable sans (`--font-body`: Inter, ui-sans-serif) with generous line-height (1.45–1.6) and strong contrast.
- **Numeric & Telemetry**: Monospaced font (`--font-mono`: ui-monospace, SF Mono, Menlo, Consolas) for timers, counters, set numbers, and step indices.

#### VI. Pixel Art & Asset Doctrine
- Original pixel artwork (avatars, anatomy charts, category sprites, meal icons) is central to FitDex identity.
- Use pixel assets purposefully in headers, hero badges, and category pickers.
- Never replace pixel artwork with generic vector clip art or flat SaaS illustrations.

#### VII. RPG Terminology Doctrine
- **Evocative Terms**: Use *Codex*, *Field Guide*, *Rank*, *XP*, *Mission*, *Record*, *Player Profile*, and *Quest* where they enhance character and motivation.
- **Literal Core Utilities**: Utility and data-management functions must remain crystal clear: *Backup*, *Restore*, *Calories*, *Protein*, *Units*, *Settings*, *Delete*, *Exercise Media*. Never obfuscate vital system controls with fantasy jargon.

#### VIII. Motion Doctrine
- Short, deliberate, crisp transitions (150ms–200ms cubic-bezier).
- Avoid floating springs, elastic physics, or continuous decorative rotations. Full support for `prefers-reduced-motion: reduce`.

#### IX. Phone-First Envelope
- Primary validation target is 320px–480px (360px, 375px, 390px, 412px, 430px). Every view must be compact, responsive, and 100% horizontal-scroll-free before desktop expansion.

---

### Public Website Console Foundation — Phase 5

The standalone `website/` public surface uses the approved **Console** direction only: Spartan Dark palette, teal technical grid, neutral high-contrast body text, rectangular panels, restrained corner radii, and hard offset shadows. It is not part of PWA AppShell and does not replace Cloudflare PWA or media Worker UX.

Website controls retain visible focus, 44px-scale touch targets, explicit property transitions, reduced-motion support, and mobile navigation. The desktop hero presents a transient three-state hover stack with fixed Active Workout, Home, and Personal Records cards: neutral, left hover, and right hover. Center hover and focus restore neutral; focus leaving the stack also restores neutral. Phones (<= 768px) intentionally show one readable Home screen. Lower screenshot cards retain restrained hover and keyboard focus depth. Production website never includes Editorial, Field Log, or variant-picker interfaces.

### 1.2 Retro Controls & Widgets Doctrine

FitDex interactive controls must feel like **tactile, rectangular, framed, game-command widgets** from the 8-bit/16-bit console and handheld era—never modern soft, floating, pill-shaped SaaS components.

#### I. Core Control Principles
- **Geometry**: Rectangular with crisp 0px–4px corner radii (`border-radius: 2px` to `4px` default). Never use 12px–24px rounded modern CTA corners or floating pill shapes unless semantically necessary.
- **Borders & Framing**: Strong, high-contrast borders (`1px` or `2px solid var(--color-border-strong)`).
- **Tactile Depth & Hard Shadows**: Use hard geometric block shadows (`box-shadow: 2px 2px 0 var(--color-border-strong)` or `3px 3px 0 var(--color-border-strong)`) or subtle top/left highlight bevels. Avoid soft, diffused CSS blur dropshadows.
- **Pressed & Active State**: Immediate, tactile response (~60–120ms transition). On `:active`, controls translate 1px–2px down/right (`transform: translate(2px, 2px)`) while offset shadows collapse, providing immediate physical click feedback.
- **Focus & Keyboard Navigation**: High-contrast outline (`2px solid var(--color-focus)` or inset highlight) with clear 2px offset.
- **Disabled State**: Reduced contrast, muted surface (`--color-surface-subtle`), zero active offset shadow, cursor `not-allowed`.

#### II. Control Hierarchy & Primitives
1. **Primary Command Buttons** (`NEXT ›`, `DONE`, `ENTER FITDEX`, `SAVE`, `CONFIRM`):
   - Background: `--color-primary` (Teal for Spartans, Plum for Amazonians).
   - Text: `--color-on-primary` (high-contrast white or dark charcoal ink).
   - Framing: Solid border with hard offset block shadow.
   - Typography: Condensed uppercase display font (`--font-display`), bold weight, optional trailing arrow glyph (`›`).
2. **Secondary Command Buttons** (`BACK`, `CANCEL`, `CLOSE`, `SKIP`):
   - Background: `--color-surface-raised` or `--color-surface`.
   - Text: `--color-text` (primary readable foreground; never styled to look disabled).
   - Framing: Clear visible border matching panel chrome.
3. **Destructive Buttons** (`DELETE`, `RESET`):
   - Background: `--color-danger` or bordered surface with `--color-danger` text.
   - Preserves identical rectangular game-button geometry; literal, concise copy.
4. **Icon Buttons** (`?` Help, `⚙` Settings, `☀/☾` Light/Dark, `★` Favorites):
   - Square command frame (`min-height: 42px; min-width: 42px; border: 1px solid var(--color-border); border-radius: 4px`).
   - Tactile press translation (`translate(1px, 1px)`). Never floating circular bubbles.
5. **Segmented Controls & Mode Selectors** (`INDEX | FAVORITES`, `METRIC | IMPERIAL`):
   - Joined rectangular cartridge cells with internal dividers.
   - Active segment highlighted with semantic accent background or thick inset rail.
6. **Switches & Toggles** (`ON | OFF`):
   - Tactile boxed state switches or console-style toggles rather than generic iOS rounded switches.
7. **Checkboxes**:
   - Square box (`18px × 18px`, `border: 2px solid var(--color-border)`), filled with `--color-primary` and sharp checkmark glyph when checked.
8. **Radio & Option Rows**:
   - Framed horizontal option tiles or console list rows with visible active border and indicator (`> WARRIOR` or solid accent border).
9. **Inputs & Number Fields**:
   - Rectangular terminal entry fields with inset background (`--color-surface-subtle`), crisp border, readable sans or mono font (`--font-mono` for metrics/calories).
10. **Dropdowns & Selectors**:
    - Rectangular bordered fields with console-menu arrow glyph (`▼`).
11. **Modal Action Bars**:
    - Rigid bottom command bars (`BACK` left, `NEXT ›` right) with high-density spacing and rectangular buttons.
12. **Tactical Console Rails** (e.g., Home Consistency Rail):
    - Multi-cell shallow horizontal status consoles (48–52px height) with hairline vertical dividers (`--color-border`), dominant primary cell with subtle tint, secondary icon+metric cells with theme-safe vector glyphs (e.g. monochrome SVG snowflake), and trailing chevron indicator. Entire rail functions as a tactile interactive button opening deep-dive detail views.

#### III. Sound, Motion & Accessibility
- **SFX Pairing**: Visual press duration (60–120ms) matches the audio timing of bundled sound effects (`select.mp3`, `add.mp3`).
- **Reduced Motion**: Under `prefers-reduced-motion: reduce`, disable `transform` translations while maintaining color/border state transitions.
- **Accessibility Floor**: Minimum 42px–44px touch target bounds. Bevel/shadow depth is decorative reinforcement; state must always be conveyed through color contrast, text, and ARIA attributes.

---

## 2. Global Cross-Phase Engineering & Design Standards

### 2.1 Production Code Authority
Prototypes explore visual styling and interaction flow, but real production state models, repositories, database schemas, audio engines, and platform integrations are authoritative. A prototype must adapt to production reality, not the reverse.

### 2.2 Zero Functionality Loss During Redesigns
Visual polish passes must never strip existing capabilities, data attributes, error states, or user controls unless explicitly approved by a product decision. Existing useful functionality must always be preserved.

### 2.3 AppShell Authority & Shared Global Header
The global `AppShell` owns root layout chrome, header branding, global navigation, audio triggers, and safe-area boundaries. Individual feature views render within the shell's content area and must never invent, override, or replace global navigation or header elements.

**Global Top Bar Standard**:
- Left: FitDex theme emblem + `FITDEX` wordmark.
- Right: Light/Dark quick shortcut button + Settings gear action button.
- Center/Status: Connectivity indicator (shown only when offline).
- Faction selection (Spartans / Amazonians) lives strictly inside Settings → Appearance.
- Uniform visual language, dimensions, and padding across all primary pages (Home, Workout, Food, Progress, Journal, Exercise Dex, Settings).

**Appearance Terminology Standard**:
- **Faction**: Visual identity and branding family (`Spartans` / `Amazonians`).
- **Brightness**: Display luminance mode (`System` / `Light` / `Dark`).

### 2.4 Physical Phone QA Gate
Static tests, unit test suites, headless builds, and desktop browser inspect modes are necessary baselines, but they are insufficient for visual lock. Final approval requires hands-on review on physical phone hardware across light and dark modes.

### 2.5 Testing & Tooling Policy
Avoid default browser automation or heavy headless browsers during development. Use code inspection, targeted unit/integration tests, Oxlint, Vite build, Graphify, static responsive reasoning, and physical-phone verification.

### 2.6 Responsive Width Hierarchy & 320px Floor
All views must remain fully functional and layout-stable across the entire responsive width spectrum:
- **320px**: Robustness floor (no clipped buttons, overlapping text, or horizontal body scrolling).
- **340px – 360px**: Small mobile devices.
- **375px – 430px**: Primary mobile target envelope (iPhone SE, standard phones, modern Android flagships).
- **480px – 700px**: Phablets and compact tablets. Mobile-specific layouts apply at or below 700px.
- **700px – 980px+**: Tablets and desktop viewports. Sidebar navigation activates at 980px with bounded content widths.

### 2.7 Four Semantic Themes & No Feature-Specific Palettes
FitDex supports four first-party themes:
- `Spartan Dark`
- `Spartan Light`
- `Amazonian Dark`
- `Amazonian Light`

Views must strictly use semantic CSS variables (`--color-bg`, `--color-surface`, `--color-border`, `--color-text`, `--color-primary`, etc.). Never hardcode hex codes or invent feature-specific palettes (e.g., do not create an ungrounded green palette for Food; use existing semantic tokens).

### 2.8 Theme-Family Branding
Application branding follows the active theme family:
- **Spartan Themes**: Spartan crest emblem, Spartan full logo, deep charcoal launcher backgrounds.
- **Amazonian Themes**: Amazonian crest emblem, Amazonian full logo, deep plum launcher backgrounds.
- **Avatar Independence**: The user's selected avatar portrait does **not** control application branding or theme family.
- **Brightness Independence**: Switching between Dark and Light mode preserves the chosen family branding.

### 2.9 Local-First & User Privacy
All workouts, routines, foods, categories, achievements, and preferences reside strictly on the user's device in IndexedDB (via Dexie) and localStorage. There are no mandatory user accounts, remote databases, third-party analytics trackers, or hidden telemetry.

### 2.10 Centralized Android Back Handling
Android system Back and gesture navigation are managed centrally via `useAppBackButton` and the Capacitor App plugin:
- Active modals, dialogs, drawers, and nested subviews close first (deepest first).
- Top-level destinations pop through in-memory history back to Home.
- The app exits only when Back is triggered at the Home root.

### 2.11 Scroll Stability
In-page state updates, tab switches, period filter changes (e.g., 7D/30D/90D/All in Progress), and category toggles must **never** unexpectedly jump the viewport scroll to the top of the page. Only explicit navigation transitions between distinct subviews may reset scroll position.

### 2.12 Prototype Lifecycle
The former `prototypes/` workspace was a temporary exploratory sandbox and has been removed after approved decisions were migrated. Production code and production Markdown now retain the finalized designs, interaction contracts, and styling rules. Any future exploratory work remains disposable and must be migrated before deletion.

### 2.13 Guided First Use and Context Rails

- First launch uses a compact Mission Brief for identity and defaults (Welcome → Display Name → Faction → Mode → Avatar → Optional Nutrition Setup → Seven-topic Field Guide → Home).
- Context Rail must be mobile-native: inline contextual guidance occupying full usable content width with a 4px primary left accent rail, clear action buttons, and a footnote stating that guidance clears after real user actions, not page visits. It must never steal width with a desktop sidebar column, clip content, or cause horizontal page overflow. Guidance remains secondary to the actual task.
- Page mount, route visit, and scroll exposure never count as learning. Persist acknowledgement only after the user acts.
- Every interactive button and action introduced or modified in first-use guidance, onboarding, workout preparation, and dialogs must trigger exactly one appropriate semantic SFX (`select`, `add`, `progress_complete`, or `achievements_unlock`). Parallel audio systems and duplicate sound triggers are forbidden.
- Long-form Help (Field Guide and page guides) remains replayable after contextual teaching disappears.
- Streak protection uses exact wording "ROLLING 12 MONTHS" (never "calendar year") for Travel/Sickness Pause and protected material plan changes. Freeze economy provides initial balance = 2, +1 Freeze per 15 successful planned training days, unlimited balance, and durable idempotent reward dialogs.
- Consistency Deck (`StreakDetailView`) matches the approved tactical console prototype structure, omitting the redundant "THIS WEEK" schedule grid (which is housed in Workout Hub). All modules follow hard rectangular borders, compact console hierarchy, theme-adaptive vector icons, and direct native date controls with >=44px touch targets.


---

## 3. UI Hierarchy & Structure

- **View Purpose**: Every screen must have one obvious primary purpose. Identity and current state come first, the primary action next, and supporting information or disclosures follow.
- **Containment & Borders**: Use borders or filled surfaces to signal grouping, selection, or elevated state—not around every single text node. Prefer dividers, spacing, and typographic weight for structure. Avoid deeply nested cards.
- **Typography**: Display type for concise identity, titles, and command labels; body type for descriptions and data. Monospaced numeric styling reinforces the handheld-console identity for timers, weights, and counts.
- **Touch Ergonomics**: Interactive controls must maintain a minimum touch target of 42–44px where practical, with visible keyboard focus indicators and clear disabled states. Never rely on long-press gestures for primary actions.

---

## 4. Phase-Specific UI Conventions

### 4.1 Workout & Exercise Dex
- **Zero-Exercise Timer Invariant**: An active workout may exist with zero exercises, but its timer must never run while empty. `Start Timer` is displayed in an unavailable state until at least one exercise exists; tapping it gives concise feedback (`ADD AN EXERCISE FIRST`). Adding an exercise enables `Start Timer` with theme-primary styling without auto-starting; the timer requires an explicit user tap. Resumed empty workouts cannot accrue active training time.
- **Picker Hierarchy**: Compact picker rows with clear primary exercise names, equipment badges, and direct selection toggles.
- **Anatomy Cards**: Distinctive masculine (Spartan) and feminine (Amazonian) muscle diagrams reflect the active theme family. Anatomy views must remain unflattened and central to the Dex experience.
- **Active Logging**: Prominent rest timer, clean Finish validation (rejecting zero completed sets), and confirmation dialogs when removing active exercises containing logged data.
- **Rank Nomenclature**: Name-based rank titles (Recruit to Radiant); never use Roman numerals.

### 4.2 Food & Nutrition
- **Goal-First Daily Hub**: Calories progress displayed first, Protein progress second, followed by the prominent `Log Food` CTA, compact meal overviews, and collapsible secondary nutrition disclosures.
- **Production Meal Art**: Fixed four-meal structure (Breakfast, Lunch, Supper, Dinner) using production WebP assets (`/food/meals/meal-*.webp`).
- **Discovery**: Compact tabbed or pill navigation for Recent, Frequent (repository-ranked), Search, and Quick Log (one-tap instant logging).
- **Simplicity**: No complex multi-unit dropdown conversions; direct manual entry of whole nutrient amounts.

### 4.3 Progress & Analytics
- **Character Sheet Layout**: Visual hero identity (Level, Rank badge, Lifetime XP) at top, period selector immediately below, followed by training attributes, CSS bar charts, compact PR preview, and nutrition averages.
- **Compact PR CTA**: "View All PRs" must remain a compact, full-width navigation row rather than an oversized decorative illustration.
- **Accessible Metrics**: Tonnage volume (`weight × reps` on completed resistance sets) clearly labeled as workload, not calories burned. No theoretical 1RM formulas or arbitrary fitness scores.

### 4.4 Journal & Activity Log (V3 Field Notes)
- **Symmetric Dual-Dimension Status**: Summary pill must always display both Workout status (`No workout logged` / `{N} workouts logged`) and Food status (`No food logged` / `{N} food items logged`) symmetrically.
- **Empty-Meal Suppression**: When no food is logged on a day, hide all four empty meal cards completely. Never render empty Breakfast/Lunch/Supper/Dinner chrome.
- **Field Notes Row Architecture**: Rigid `icon | content | action` structure:
  - **Content**: Exercise/meal title and metadata (duration, sets, kcal, protein) must sit on separate lines and never run together as raw concatenated text.
  - **Action**: Workout rows use a navigation chevron (`›`) opening read-only detail; meal rows use a disclosure chevron (`˅` / `˄`) to reveal nested food entries.
- **Icon Integrity**: Workouts use the canonical Lucide `Dumbbell` icon matching AppShell; meals use official production artwork.

### 4.5 Exercise Dex Standalone (V3 RPG Codex)
- **Selected Avatar Hero**: Archival hero cover (`FitDex field archive · Exercise Codex`) renders the user's selected character avatar portrait with pixel-art rendering. Application branding and anatomy sex remain strictly governed by the active theme family.
- **Permanent Search & Simplified Modes**: Persistent top search field with direct local query filtering. Navigation modes simplified to `Index` and `Favorites` (no redundant Search tab).
- **Theme-Family Anatomy Cards**: 9 muscle categories rendered with theme-family specific anatomy pixel art.
- **Exercise Record Information Hierarchy**:
  1. Header with responsive fluid title (wrapping cleanly on 320–374px).
  2. Bounded aspect-ratio (16:10) media frame with loading spinner and offline download actions (Android); no internal implementation chrome ("Loops muted").
  3. Verified facts / metadata card placed **above** execution instructions.
  4. "How to perform" canonical instructions.
  5. "How it helps" physiological development.
- **Picker Protection**: Contextual workout exercise picker remains strictly Phase 2 locked with fast Add/Added actions and duplicate prevention.

### 4.6 Settings & Preferences (V2 Profile / Loadout)
- **Player Profile Hero**: Prominently renders the user's active champion avatar (`AvatarPortrait` with pixel art rendering), required local `displayName`, archetype label, and direct `Change` trigger at the top of the Settings Hub.
- **3-Column Status Grid**: At-a-glance summary cards above setting categories: `Theme` (family + brightness), `Units` (Metric/Imperial), and `Targets` (Daily kcal + protein summary).
- **Grouped Category Cards**: Organized into `Personalize` (Display Name & Avatar, Appearance), `Your System` (Units, Audio, Nutrition Targets), and `Data & Help` (Exercise Media, Backup & Restore, Field Guide, Gamification Guide, About FitDex).
- **Inline Summary Badges**: Display verified current state inline in navigation rows (`Arijit · Leonidas`, `Spartan · Dark`, `Metric`, `SFX On · Warrior`, `1,800 kcal · Protein off`).
- **Unified Audio Entry**: Sound Effects switch and Background Music track options (`Warrior`, `Hardened`, `Villain`, `None`) consolidated in a dedicated subview.
- **Units Management**: Direct selection between Metric (`kg · km`) and Imperial (`lb · mi`) backed by `SettingsRecord.units` in Dexie.
- **Nutrition Targets — V3 Nutrition Codex**: Authoritative retro reference and configuration ledger using Style B Pixel Command controls (0px radius, 2px semantic borders, 3px hard block shadows). Structured into `Baseline Parameters` (clean fields with no decorative `RECORD 01` stamps, dropdown with hidden TDEE factors), `Energy Accounting` (RMR, TDEE, Calorie recommendations, and protein allocation), and `Daily Targets` (stepper inputs with direct typing, calculated/manual source badges, `NOT SET` zero state, and `g/day · g/kg · kcal · %` telemetry metadata).
- **Replacement-Only Restore**: Full `.fitdex` restore communicates literal replace-not-merge semantics with optional safety backup.

### 4.7 Primary Page Frame
- **Shared Enclosure**: Major FitDex surfaces present page-specific content within the retro handheld outer frame established by Home.
- **Shell Separation**: Global header and bottom navigation remain outside the page frame.
- **Scroll Ownership**: The frame grows with content and must not introduce fixed-height or nested-scroll containers.
- **Theme Fidelity**: Border, background, and shadow use semantic theme tokens across Spartan and Amazonian light/dark modes.

### 4.8 Public Screenshot & Brand Asset Pack
- **Authoritative Pack**: Nine approved physical-device Android screenshots stored in `public/screenshots/` (`home.png`, `workout-hub.png`, `active-workout.png`, `exercise-dex.png`, `food.png`, `journal.png`, `progress-overview.png`, `progress-records.png`, `achievements.png`).
- **Showcase Theme**: Captured in Spartan Dark mode from real production Android hardware (no prototypes or mockups).
- **Primary Showcase**: Six core screenshots embedded in `README.md` (Home, Workout Hub, Active Workout, Exercise Dex, Nutrition, Progress).
- **Secondary Gallery**: Three additional views (Progress Overview, Journal, Achievements) retained in repository for future website/gallery use.
- **Social Preview**: Configured manually in GitHub Repository Settings (intentionally not stored as an in-repo file).
