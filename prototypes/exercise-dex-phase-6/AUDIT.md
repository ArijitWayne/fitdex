# FitDex Phase 6 — Exercise Dex Production Audit

## Scope and evidence

This audit covers the standalone Exercise Dex reached from Workout, its shared contextual Picker mode, Exercise Detail, category/search/favorite behavior, media resolution, shell, theme, audio, and Back contracts. Evidence came from current `dev` code, current production Markdown, and the existing `graphify-out/graph.json`. Production code wins where older notes differ.

No production files changed. Existing unrelated worktree changes remain untouched.

## Current production architecture

- `WorkoutPage` owns entry into the Workout subview called `library`. It renders `ExerciseDex` inside the real `AppShell` and supplies `onAddToRoutine`.
- `ExerciseDex` is the shared standalone browser and contextual Picker engine. Local component state owns current category, selected exercise, query, scope, pending Picker writes, and removal confirmation.
- `ensureBuiltInExercises` seeds/updates canonical built-ins. `db.exercises.toArray()` loads the local catalog. Archived exercises are removed before alphabetical display.
- `exerciseCatalog.ts` owns the fixed nine-category order, normalization, all-field search, favorites search, category membership, tracking labels, and currently dormant category subfilters.
- `exerciseFavouriteRepository.ts` stores favorites in independent `exercisePreferences` records. Existing personal notes and tag links survive favorite changes.
- `exerciseContent.ts` joins each active canonical exercise to generated FitDex-authored `How to perform`, `How it helps`, source provenance, and media metadata.
- `ExerciseDetail` renders the record header, favorite action, detail-only media, instruction sections, routine/Picker action when supplied, and metadata definition list.
- `exerciseMediaStore.ts` resolves playback and explicit Android downloads. Browser/PWA uses the canonical local `mediaPath`; native Android prefers a verified private download, then a configured remote URL while online, then unavailable.
- `AppShell` retains five primary destinations: Home, Workout, Food, Progress, Journal. Exercise Dex is a Workout subview, not a sixth destination.
- `useBackNavigation` registers Exercise Dex at priority 20. Detail closes before category; category returns to the index; Picker returns to its caller. App history remains below it.

## Production capability inventory

| Feature | Data source | Persistence | User actions | Current UI | Dependencies / edge cases |
| --- | --- | --- | --- | --- | --- |
| Catalog load | `builtInExercises` seeded into `db.exercises` | Dexie `exercises` | Wait/retry by revisit | Loading, ready, error panels | Archived rows filtered; load failure has neutral error |
| Category landing | `EXERCISE_CATEGORIES` + derived membership counts | None | Open category | 2-column cards; 3 columns at 700px; 1 below 375px | One exercise can belong to two categories; counts are derived |
| Anatomy art | `exerciseCategorySprites.ts` + 36 PNGs | Bundled asset | Select category | Pixel-art category cards | Family comes from theme, brightness from resolved theme; never avatar-driven |
| Search | `searchExercises` over loaded records | None | Type, clear, open result | Unified local field + compact rows | Instant; Unicode NFKD; ignores punctuation/spacing/case; singular fallback; no cloud |
| Search fields | Exercise record | None | Query | Name, alias, category/categories, primary/secondary muscles, equipment | Empty/punctuation-only query returns scope |
| Favorites browse | Catalog + favorite ID set | `exercisePreferences.favourite` | All/Favorites, search favorites | First-class two-way scope | Unknown/retired IDs do not render because current catalog resolves display |
| Favorite toggle | Selected exercise stable ID | `exercisePreferences` | Toggle from row or detail | 44px star action | Preserves `personalNotes`, `customTagIds`, and timestamps |
| Result rows | Filtered catalog | None | Open detail, toggle favorite | Compact `content | star | chevron` | Long names wrap; category view omits repeated category text |
| Detail header | Selected `Exercise` | None | Back, favorite | Back, eyebrow, name, category, star | Long names use `overflow-wrap:anywhere`; three-column header can feel crowded |
| Instructions | `getExerciseContent(id)` | Canonical generated source | Read | How to Perform + How it Helps cards | Absent content hides both sections |
| Metadata | `Exercise` | Canonical catalog | Read | Two-column definition list | Primary/secondary muscles, region, equipment, tracking, movement; cardio fields conditional; legacy `instructions` becomes Notes |
| Media playback | `ExerciseContent.mediaPath/mediaType` | Canonical metadata | Watch | Autoplay, muted, loop, inline, metadata preload | Loads only on detail; media error becomes unavailable |
| Browser/PWA media | `/exercises/<slug>.mp4` | Bundled deployment asset, excluded from precache | Watch | Same video frame | Not available offline unless HTTP cache happens to retain it; no download UI |
| Android remote media | Safe canonical filename + `VITE_EXERCISE_MEDIA_BASE_URL` | Environment configuration | Stream | Same video + native actions | Only when online; HTTP(S) base required; current code does not hardcode provider |
| Android offline media | Private `Directory.Data` file | File + lightweight localStorage metadata | Download/remove | Progress, available-offline status, removal | Stale metadata removed; no cancel API; outside Dexie backup |
| Standalone routine action | `WorkoutPage.onAddToRoutine` | Target routine repository after chooser | Add to routine | Full-width detail action | Opens existing routine chooser; standalone has no Added state |
| Contextual Picker | Same catalog + caller-owned ID set | Routine/workout repository | Add/remove; Done/Back | Compact rows with Add/Added | Favorites omitted by intent; write failure keeps truthful caller state |
| Duplicate prevention | `existingExerciseIds` + repository checks | Target repository | Add once/remove | Derived Added state | Already-added row cannot duplicate; active data removal may require confirmation |
| SFX | `AudioProvider` semantic effects | Existing audio preference | Navigate/select/add | No visual sound UI here | Navigation/category/detail uses `select`; successful repository add uses `add` in caller |
| Theme | Theme provider + semantic tokens | Existing Settings/local preference | Existing theme controls outside Dex | Four theme families/brightness combinations | Category anatomy follows family + brightness |
| Android Back | Central Back provider | In-memory handler stack | System Back/gesture or visual Back | Deepest subview closes first | Detail, category, Picker, app history, then exit at Home root |

## Exercise data model

Current `Exercise` fields:

- Identity: `id`, `name`, `aliases`, `source`, optional source IDs/slugs/pages/record IDs.
- Classification: compatibility `category`, authoritative optional `categories`, optional `primaryCategory`, `muscleRegions`.
- Body/equipment: `primaryMuscles`, `secondaryMuscles`, `equipment`, optional `equipmentOptions`.
- Tracking: `trackingType`, optional `movementPattern`, optional `laterality`, optional cardio subtype/metrics.
- Content status: optional `mediaStatus`, legacy optional `instructions`, optional legacy `difficulty`.
- Lifecycle: `archived`, `createdAt`, `updatedAt`.

Current `ExerciseContent` adds `mediaPath`, `mediaType`, exact-match/source provenance, `howToPerform`, and `howItHelps`.

Current `ExercisePreference` adds device-local `favourite`, optional `personalNotes`, and `customTagIds`. Only favorite state is exposed in the current Dex UI. Notes/tags remain supported storage, not current standalone UI.

## Exercise Record audit

### Header

Current 44px Back and favorite actions are accessible and clear. Category context remains visible. At narrow widths, two fixed actions plus a long fluid title produce a compressed center column. `1.55rem`, `1.1` line-height, and unrestricted wrapping prevent overflow but can create awkward multi-line rhythm and excessive perceived header height. Better hierarchy uses a stable action row or tighter fluid title without shrinking below readable size.

### Media

Media preserves intrinsic ratio using `width:100%`, `height:auto`, `max-height:420px`, and `object-fit:contain`. It loads only on detail and avoids catalog cost. The frame has no explicit aspect ratio, so first layout depends on playback resolution and can shift. Loading and unavailable currently share the same unavailable message because `loading || unavailable` takes one branch. A bounded aspect-ratio frame with distinct loading feedback improves stability without changing playback architecture.

### Instructions

Copy is trustworthy and structured into two sections. `0.88rem/1.55` is readable, but the full panel width can make lines long on larger screens. The detail sequence puts both instruction cards before all metadata, so setup facts such as equipment and primary muscles sit below the fold. Compact verified facts should appear near media while full supporting metadata remains later.

### Metadata

Current two-column grid is complete and compact above 375px. At 320–374px, borders collapse but the grid itself remains two columns because the media query only removes vertical borders. Very long secondary-muscle lists can become dense. A real single-column narrow layout or prioritized summary plus complete list improves scanability.

### Actions

Favorite remains visible in header. Standalone detail can open the existing routine chooser through `onAddToRoutine`. Picker detail instead toggles Add/Added. Back uses the centralized contract. These roles must remain separate.

## Media architecture findings

- Every active built-in has a verified canonical MP4 path `/exercises/<slug>.mp4` and `video/mp4` type.
- Browser/PWA keeps local deployment paths and excludes MP4s from Workbox precache.
- Android packaging strips MP4s from copied app assets.
- Android playback priority is private verified download, configured remote stream when online, unavailable.
- `canonicalExerciseVideoKey` rejects nested paths, traversal, invalid extensions, and unsafe filenames.
- `VITE_EXERCISE_MEDIA_BASE_URL` is the only runtime host input. Current source does **not** hardcode `https://fitdex-media.fitdexapp.workers.dev/exercises`; that endpoint works only when supplied as deployment configuration.
- Current loading UI is indistinguishable from unavailable. Prototype separates them.
- Video errors degrade to the neutral unavailable state. Written instructions and metadata remain usable.

## MUST PRESERVE FROM PHASE 2

- 804-record real canonical catalog and stable IDs.
- Nine real categories and derived live counts.
- Compact standalone and Picker rows. No large video/result cards.
- First-class standalone favorites with row/detail toggles and local `exercisePreferences` persistence.
- Normalized local search across names, aliases, categories, muscles, and equipment.
- Category landing with theme-aware anatomy cards.
- Spartan family uses male anatomy; Amazonian family uses female anatomy. Theme family, never selected avatar, determines anatomy.
- Contextual Picker remains optimized for quick addition: content, favorite-independent context, Add/Added action.
- Duplicate prevention and truthful already-added state.
- Active-workout removal protects meaningful set data with confirmation.
- No long-press dependency. Primary actions retain 42–44px targets.
- Detail-only media loading; result rows never load demonstrations.
- Existing browser/Android media resolution and selective offline-download architecture.
- Existing Workout parent route, real AppShell, five-item bottom navigation, safe areas, and no Exercise Dex nav item.
- Central Android Back priority and caller return paths.
- Existing semantic SFX only: `select` for harmless navigation, `add` after successful creation/add.
- Four production semantic themes. No universal Dex palette.

## Current standalone UX

### Discovery

Search is fast and forgiving. Default landing makes search visible, then scope, then category grid. Favorite entries require switching scope; no saved preview exists. Nine 150px category cards make the index visually strong but long on phone screens.

### Learning

Detail has all essential factual content, but learning hierarchy is generic: media, two equal instruction cards, action, metadata. It lacks a concise bridge between demonstration and instructions.

### Favorites

Stars are visible, consistent, and persist independently. Favorite mode is first-class and searchable. Empty copy is honest. Accidental row-star toggles are possible but controls are separate and correctly labeled.

### Category browsing

Artwork is distinct and category counts are useful. Current subfilter infrastructure exists, but every category exposes only `All`, so the strip never adds value today. Category cards consume considerable vertical space before results.

### Search

Rows scan well and retain 44px star/navigation targets. Search results do not show matched-field rationale, which is acceptable because adding it would complicate compact rows. Punctuation-only input correctly returns the active scope.

### Detail page

Functionally complete. Main polish gaps: tight long-name header, layout shift while media resolves, no distinct loading state, important facts below instructions, and secondary-muscle density.

### Mobile density

- 320–340px: category landing becomes one long column; detail header is crowded; metadata needs true one-column layout.
- 360–390px: current UI is usable; long title still dominates top area.
- 412–480px: two-column anatomy cards work; media and instruction line length remain controlled enough.
- No current horizontal overflow was found in reviewed selectors, but long unbroken names rely on aggressive `overflow-wrap:anywhere`.

### Cross-phase consistency

Tokens, squared panels, display headings, compact rows, theme art, bottom navigation, and 44px actions match locked FitDex phases. Standalone detail is less purpose-shaped than newer Home/Workout/Food/Progress/Journal surfaces.

## Keep / improve / simplify / reorganize / defer

### KEEP

- Data, search, favorites, categories, anatomy mapping, compact rows, shell, Picker, Back, SFX, and media architecture.
- How to Perform and How it Helps wording.
- Detail-only autoplay/muted/loop/plays-inline media behavior.

### IMPROVE

- Long-name header hierarchy.
- Stable media frame and distinct loading/unavailable states.
- Instruction measure, rhythm, and visual priority.
- 320–340px metadata layout.
- Visible relationship between anatomy/category browsing and record learning.

### SIMPLIFY

- Reduce default landing scroll cost without removing anatomy.
- Avoid repeating equal-weight framing around every record section.
- Keep category subfilters absent while only `All` exists.

### REORGANIZE

- Place equipment, primary muscles, and tracking near media.
- Keep full secondary-muscle and movement metadata below primary instruction content.
- Preserve previous Dex view when detail closes.

### DEFER

- Personal notes UI, tag UI, substitutions, progression suggestions, coaching scores, difficulty display, injury risk, mastery/XP, PR history, and recommendations.
- New search backend, cloud account, media-provider coupling, automatic downloads, and new sound types.

## FUTURE / REQUIRES DATA CHANGE

- Curated recommendations or related-exercise graphs.
- Verified difficulty, technique risk, progression/regression, and contraindication metadata.
- Exercise-specific coaching cues beyond current generated copy.
- User-authored notes on record pages despite dormant preference storage; exposure needs explicit product design.
- Personal best/history panels on Exercise Detail.
- Rich media captions, poster frames, duration, or alternate camera angles.

## Prototype directions

1. **Discovery First** — Search leads with immediate Favorites scope access. Anatomy becomes a compact horizontal gateway. Detail puts media and three key facts before instructions. Best when users usually know what they want. Cost: anatomy has less visual weight.
2. **Training Manual** — Anatomy and learning promise lead. Categories form a dense manual index. Detail numbers the two existing instruction sections and keeps both close to media. Best when exercise education is primary. Cost: slightly slower direct lookup.
3. **RPG Codex** — FitDex record identity leads. Anatomy forms the codex index; detail uses an archival record frame and verified factual metadata only. Best when brand distinction matters. Cost: more decorative framing and slightly lower density.

## Prototype Refinements (IA, Labels, Media Chrome, V3 Codex Simplification)

- **Single Search Results Heading**: Eliminated duplicate page-level and section-level headings. The page header displays the neutral Dex search identity (`Exercise Dex` / `Search`), while the single compact `Search Results` heading with result count sits directly above the result list.
- **Clean Media Product UI**: Removed all internal implementation labels (`Demonstration · loops muted`) from the Exercise Record media container. Media loops and plays muted silently through native video attributes without visible debug badges. Loading and fallback states use neutral product-facing copy (`Loading exercise media…`, `Exercise media unavailable.`).
- **Favorites as Sole Saved Concept**: Removed fragmented terminology (`Saved exercises`, `Saved for quick access`, `Saved index`, `Bookmarked`, `Pinned`). `Favorites` is the only persistent saved-exercise concept across scope tabs, section headers, row star actions, and record views.
- **Landing Hierarchy (Option B)**: Removed redundant favorite preview rows on landing screens for V1 and V2, letting the first-class `Favorites` scope toggle provide direct, non-duplicative access across all three prototype variants.
- **V3 Tab Simplification (Search Tab Removed)**: Removed redundant dedicated `Search` tab in V3 RPG Codex. V3 tabs are simplified to `INDEX` and `FAVORITES`. The search input field sits permanently above the tabs and executes inline searches immediately across index and favorites without entering a separate mode.
- **V3 Selected Avatar Hero**: Replaced back anatomy artwork in the V3 Exercise Codex hero cover with the user's selected FitDex avatar (`aster`, `leonidas`, `brasidas` for Spartans; `artemis`, `athena`, `hippolyta` for Amazonians). Browse Anatomy category cards remain strictly driven by theme family (Spartan male / Amazonian female), preserving the clean architectural separation between personal character avatar identity and system branding/anatomy sex.
- **V3 Detail Hierarchy Refinement**: Reordered V3 Exercise Record content so the verified exercise facts/metadata card (`Primary muscle`, `Secondary muscles`, `Region`, `Equipment`, `Tracking method`, `Movement pattern`) immediately follows media and precedes `How to perform`. Users first absorb what the exercise is and requires before reading execution steps.

## Production fidelity matrix

| Contract | Discovery First | Training Manual | RPG Codex |
| --- | --- | --- | --- |
| Real AppShell proportions and five-item nav | Preserved | Preserved | Preserved |
| Workout remains active parent destination | Preserved | Preserved | Preserved |
| 804 catalog / real nine categories / real counts | Preserved | Preserved | Preserved |
| Theme-family anatomy + four themes | Preserved | Preserved | Preserved |
| Search and Favorites first-class | Preserved | Preserved | Preserved |
| Compact result rows | Preserved | Preserved | Preserved |
| Row/detail favorite states | Preserved | Preserved | Preserved |
| Long-name Exercise Record | Included | Included | Included |
| Verified real metadata only | Included | Included | Included |
| Exact generated representative instruction copy | Included | Included | Included |
| Detail-only media | Preserved | Preserved | Preserved |
| Media loading and unavailable states | Explicit | Explicit | Explicit |
| Standalone Add to routine path | Represented | Represented | Represented |
| Previous-view Back behavior | Represented | Represented | Represented |
| Picker redesign | None | None | None |
| Fake stats/recommendations | None | None | None |

## Prototype controls and static contracts

- `?v=1`, `?v=2`, `?v=3` select directions and persist through reload.
- Keys `1–3` and Left/Right switch instantly. No replay control appears because direction changes have no entrance animation.
- Theme control covers Spartan Dark/Light and Amazonian Dark/Light.
- Width control covers 320, 340, 360, 375, 390, 412, 430, and 480px.
- State control covers landing, search results, favorites populated/empty, no results, detail, media loading, and media unavailable.
- Search, scope, categories, rows, detail Back, favorite toggles, and Add to routine simulation respond.
- Prototype holds state in memory only. It does not write Dexie, localStorage, production source, or media.
