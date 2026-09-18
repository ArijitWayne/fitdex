# FitDex UI/UX Standard

This document records the canonical visual and interaction rules for FitDex. It standardizes product language, ergonomics, and behavior across all application features without forcing every screen into an identical layout.

For phase-by-phase implementation statuses, data derivations, and architectural specifications, see [docs/PRODUCT_PHASES.md](file:///Users/arijitbhaduri/Developer/fitdex/docs/PRODUCT_PHASES.md).

---

## 1. Core Design Character

FitDex feels focused, capable, and game-informed rather than purely decorative. Use restrained RPG cues, crisp geometry, clear state, and purposeful accents. Preserve semantic theme tokens and approved brand assets; never introduce one-off visual systems or unvetted accent palettes.

---

## 2. Global Cross-Phase Engineering & Design Standards

### 2.1 Production Code Authority
Prototypes explore visual styling and interaction flow, but real production state models, repositories, database schemas, audio engines, and platform integrations are authoritative. A prototype must adapt to production reality, not the reverse.

### 2.2 Zero Functionality Loss During Redesigns
Visual polish passes must never strip existing capabilities, data attributes, error states, or user controls unless explicitly approved by a product decision. Existing useful functionality must always be preserved.

### 2.3 AppShell Authority
The global `AppShell` owns root layout chrome, header branding, global navigation, audio triggers, and safe-area boundaries. Individual feature views render within the shell's content area and must never invent, override, or replace global navigation or header elements.

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
Prototypes in `prototypes/` are temporary exploratory sandboxes. Once user-tested and approved, their design decisions, layout structures, and styling rules are transplanted into production code and documented in production Markdown. Prototypes are disposable and should be deleted cleanly.

---

## 3. UI Hierarchy & Structure

- **View Purpose**: Every screen must have one obvious primary purpose. Identity and current state come first, the primary action next, and supporting information or disclosures follow.
- **Containment & Borders**: Use borders or filled surfaces to signal grouping, selection, or elevated state—not around every single text node. Prefer dividers, spacing, and typographic weight for structure. Avoid deeply nested cards.
- **Typography**: Display type for concise identity, titles, and command labels; body type for descriptions and data. Monospaced numeric styling reinforces the handheld-console identity for timers, weights, and counts.
- **Touch Ergonomics**: Interactive controls must maintain a minimum touch target of 42–44px where practical, with visible keyboard focus indicators and clear disabled states. Never rely on long-press gestures for primary actions.

---

## 4. Phase-Specific UI Conventions

### 4.1 Workout & Exercise Dex
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
