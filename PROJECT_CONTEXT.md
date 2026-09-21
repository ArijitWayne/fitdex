# FitDex (PulseFit) — Project Context & Agent Handoff Guide

This document captures the complete architectural, design, backend, data, and operational context of the FitDex / PulseFit project. Any AI agent or developer can use this guide to immediately understand the system and continue development seamlessly.

---

## 1. Project Overview & Identity

- **Application Name**: FitDex (branded as **PulseFit** on iOS / Apple platforms).
- **Bundle ID**: 
  - iOS: `com.mohdatif.pulsefit`
  - Android: `com.fitdex.app`
- **Primary Repository**: `https://github.com/ArijitWayne/fitdex.git`
- **Core Technology Stack**:
  - **Frontend**: React 19, TypeScript 5.8+, Vite 8+
  - **Mobile Shell**: Capacitor 8.5+ (iOS & Android)
  - **Local Database**: IndexedDB managed via Dexie (Schema Version 7)
  - **Icons & Visuals**: `lucide-react`, `canvas-confetti`
  - **Serverless AI**: Cloudflare Workers AI (`workers/pulsefit-ai-proxy/`)

---

## 2. Visual Design & Aesthetic Language

- **Retro-Tech / Cyberpunk Brutalism**:
  - High-contrast, sharp 90-degree square corners (`border-radius: 0`).
  - Solid 2px borders (`border: 2px solid var(--color-border)`).
  - Offset box drop shadows (`box-shadow: 2px 2px 0 var(--color-border-strong)`).
  - High-contrast square status badges (`[WORKOUT DAY]`, `[REST DAY]`, `[READY]`).
  - **No rounded buttons or soft circular pills** in core workout and navigation flows.
- **Typography (Nudista)**:
  - Font family: `Nudista`, loaded locally from `public/fonts/nudista/` and declared in `src/styles/nudista.css`.
  - Applied across headings, buttons, stats, and display elements via `var(--font-display, 'Nudista', -apple-system, sans-serif)`.
- **Viewport Zoom Prevention on iOS**:
  - `index.html` has `viewport-fit=cover, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no`.
  - All form controls (`input`, `textarea`, `select`) enforce `font-size: 16px` minimum to eliminate iOS Safari auto-zoom on focus.

---

## 3. Serverless AI Backend Architecture (`pulsefit-ai-proxy`)

The application has **no traditional database backend**; all user fitness data is 100% offline-first in IndexedDB. However, all AI routine parsing and split generation run through a dedicated Cloudflare Worker.

### Worker Details
- **Directory**: `workers/pulsefit-ai-proxy/`
- **Configuration**: `workers/pulsefit-ai-proxy/wrangler.toml` (uses `[ai] binding = "AI"`)
- **Live Endpoint**: `https://pulsefit-ai-proxy.pulsefit-ai-proxy.workers.dev`
- **Account**: Deployed under the user's Cloudflare account (`Md Atif`).
- **Free Tier**: 10,000 free AI neuron requests per day.
- **Models** (two purpose-picked models, no fallback chain):
  - **Text** (`/parse-split`, `/generate-split`): `@cf/meta/llama-3.3-70b-instruct-fp8-fast`. Has no thinking mode to fight, so it stays fast (~10-20s) on its own — Gemma 4 26B was tried here first but its thinking mode made it too slow for interactive use even with `enable_thinking: false` fighting it.
  - **Vision** (`/estimate-calories`): `@cf/meta/llama-3.2-11b-vision-instruct` — multimodal image input is a hard requirement for snap-to-calorie, and this model was both faster and more accurate than Gemma 4 26B on the same test photo (~9-12s; correctly identified tofu that Gemma misread as salmon). Uses Cloudflare's bespoke vision schema: plain-text `messages` plus a top-level `image` field (raw base64), not the OpenAI-style `image_url` content-part format. It also follows JSON-only formatting far more reliably when the schema/instructions sit in the `user` turn rather than `system` — with the schema in `system` it ignored the format and wrote markdown prose instead.
  - Cloudflare's Workers AI sometimes auto-parses a JSON-shaped completion into `response` as an object (leaving the raw string on `choices[0].message.content`) — the worker's content-resolution logic must treat `response` as either a string or an already-parsed object, never assume one or the other.
  - Free tier: 10,000 neurons/day, shared across every model on the account. Roughly 25 neurons per photo estimate, 60-170 neurons per text parse/generate depending on dictation length — realistic single-user daily use is a few hundred neurons, well under the free pool.

### Worker Endpoints
1. `GET /health`: Health status check.
2. `POST /parse-split`:
   - Payload: `{ "text": "<spoken dictation or pasted text>" }`
   - Automatically corrects speech-to-text phonetic misrecognitions:
     - `tumble / tumble press` $\rightarrow$ `dumbbell / dumbbell press`
     - `leg breast / breast` $\rightarrow$ `leg press / press`
     - `face pools / pools` $\rightarrow$ `face pull / pull`
     - `bas and girls / girls` $\rightarrow$ `biceps curls / curl`
     - `landline / landline press` $\rightarrow$ `landmine / landmine press`
     - `abs with cable` $\rightarrow$ `cable abs crunch`
   - Explicitly extracts planned `sets` (integer) and `reps` (string) for each exercise.
   - Outputs strict 7-day JSON (`monday` through `sunday`).
3. `POST /generate-split`:
   - Payload: `{ goal, splitStyle, daysPerWeek, equipment, customInstructions }`
   - Generates evidence-based 7-day routine in the identical JSON schema with sets and reps.
4. `POST /estimate-calories`:
   - Payload: `{ "image": "<base64 or data URI>" }`
   - Identifies distinct food items in a snapped meal photo, estimates portion size/calories per item, and returns totals: `{ items: [{name, portion, calories}], totalCalories, totalProteinG, totalCarbsG, totalFatG }`.

### Client Configuration
- **Zero Hardcoded URLs**: The client reads the endpoint dynamically via `import.meta.env.VITE_AI_PROXY_URL` in `src/features/ai/aiService.ts`.
- Configured in `.env`:
  ```env
  VITE_AI_PROXY_URL=https://pulsefit-ai-proxy.pulsefit-ai-proxy.workers.dev
  ```

---

## 4. Workout Hub & Weekly Planner Architecture

### Workout Hub Layout (`src/pages/WorkoutPage.tsx`)
Consists of exactly three primary vertical sections:
1. **7-Day Day Strip Picker**:
   - Square character buttons (`M`, `T`, `W`, `T`, `F`, `S`, `S`).
   - Clean, centered weekday initials with **no dots or pips inside the squares**.
   - Rest days are visually distinguished by dashed square borders (`border-style: dashed; opacity: 0.65;`).
2. **Selected Day Workout Card**:
   - Displays status badge: `[WORKOUT DAY]` or `[REST DAY]`.
   - If no routine is scheduled, it directs the user: *"No workout planned. Click on the Plan Week button to plan your workout."* and presents a prominent full-width **"Plan Week"** button.
   - Confusing redundant buttons (like *"Start Open Workout"*) have been eliminated.
3. **Exercise Dex Section**:
   - Quick navigation into the 804 built-in exercise catalog.

### Full-Screen Weekly Planner (`src/features/workout/WeeklyPlannerModal.tsx`)
- Expands to **100% of the screen** (`position: fixed; inset: 0; width: 100vw; height: 100dvh;`).
- Square close button (`X`) matching the retro header style.
- Contains 3 modes, **all routed to Cloudflare Workers AI**:
  1. **Voice Dictation**: Uses Web Speech API (`useSpeechRecognition.ts`) for hands-free speech input, sent to `POST /parse-split`.
  2. **Paste Text**: Users can paste freeform workout splits from any app or note, sent to `POST /parse-split`.
  3. **Auto-Generate**: Select goal (hypertrophy, strength, etc.) and split style (PPL, Upper/Lower, etc.), sent to `POST /generate-split`.
### Simplified Workout Execution (`src/features/workout/WorkoutSessionViews.tsx`)
- **Checklist Flow**:
  - Each exercise presents a single retro checklist item with preset sets/reps and a high-contrast `[MARK DONE]` button.
  - Marking the final exercise Done automatically finishes the workout.
  - A prominent full-width **"Finish Workout"** button allows finalizing the workout at any point.
  - Skipped/unperformed exercises are gracefully handled by `completeActiveWorkout()` so validation never fails.
- **Cleaned Clutter**:
  - Dropdown menu contains only **Exercise Notes** and **Remove Exercise** (no set-by-set deletions or in-session reordering).
  - Eliminated `+ Add session notes` and `+ Add exercise` from active sessions.
  - Workout Hub accurately reflects `[COMPLETED]` status once finished with a direct **View Summary** action.

### Exercise Catalog Matching (`src/features/ai/routineParser.ts`)
- **804 Built-in Exercises** in `src/features/exerciseDex/exerciseData.ts`.
- `matchCatalogExercise()`:
  - Normalizes text, removes punctuation and sets/reps tokens.
  - Uses phonetic cleaning (`cleanSpokenExercise`) and morphological word stemming (`stemWord` for plurals like `flies` $\rightarrow$ `fly`, `curls` $\rightarrow$ `curl`, `raises` $\rightarrow$ `raise`).
  - Computes token overlap scores against catalog exercise names and aliases.
- **Fallback Custom Synthesis**: If an exercise is not in the catalog, `WeeklyPlannerModal.tsx` automatically synthesizes a valid `Exercise` record so no user exercise is ever lost.

---

## 5. File & Directory Map

```
fitdex/
├── .env                              # VITE_AI_PROXY_URL and optional media CDN base URL
├── .env.example                      # Environment template
├── package.json                      # Scripts and dependencies
├── wrangler.jsonc                    # Static web hosting config (Cloudflare Workers Static Assets)
├── src/
│   ├── app/                          # Core App entry & router
│   ├── components/ui/                # Shared retro UI components (Button, Panel, Badges)
│   ├── data/
│   │   ├── database.ts               # Dexie IndexedDB database instance (Schema v7)
│   │   └── models.ts                 # Authoritative TypeScript data models
│   ├── features/
│   │   ├── ai/
│   │   │   ├── aiService.ts          # Client API caller for Cloudflare Worker
│   │   │   ├── routineParser.ts      # Catalog matcher, word stemmer, schema mapper
│   │   │   ├── useSpeechRecognition.ts # Web Speech API voice dictation hook
│   │   │   └── testAiParser.ts       # Automated tests for AI schema mapping & sets/reps
│   │   ├── exerciseDex/              # 804 built-in exercises catalog & video media
│   │   ├── food/                     # Nutrition logging & barcode features
│   │   ├── gamification/             # Streaks, XP, ranks, achievements
│   │   └── workout/
│   │       ├── WeeklyPlannerModal.tsx # Full-screen weekly planner modal
│   │       ├── weeklyPlan.ts         # 7-day schedule models and persistence
│   │       ├── routineRepository.ts  # Routine CRUD operations
│   │       ├── workoutRepository.ts  # Active workout session tracking
│   │       └── WorkoutSessionViews.tsx # Workout execution & checklist logging
│   ├── pages/
│   │   └── WorkoutPage.tsx           # Workout hub page
│   └── styles/
│       ├── app.css                   # Global styles and retro theme tokens
│       └── nudista.css               # Nudista font definitions
├── workers/
│   └── pulsefit-ai-proxy/            # Cloudflare Worker AI Proxy
│       ├── package.json
│       ├── wrangler.toml             # Worker deployment config with [ai] binding
│       ├── src/index.ts              # Worker routing, CORS, and model inference
│       └── README.md
└── ios/                              # Native Capacitor iOS project
    └── App/App.xcodeproj
```

---

## 6. Verification & Operational Commands

### Automated Test Suites
Run all automated test suites:
```bash
npm run test:ai-parser
npm run test:workout-ui
npm run test:weekly-plan
npm run test:workout-routines
npm run test:workout-sessions
```

### Production Build Verification
Full TypeScript typecheck and Vite production bundling:
```bash
npm run build
```

### Cloudflare Worker AI Deployment
To deploy or update the serverless AI proxy:
```bash
cd workers/pulsefit-ai-proxy
npx wrangler deploy --config wrangler.toml
```

### iOS Native Build & Deploy (Savez's iPhone)
Device ID: `95F2CF83-5C5B-54C0-B4D7-A461DE27F7FB`
Bundle ID: `com.mohdatif.pulsefit`

```bash
# 1. Sync web bundle to iOS
npm run prepare:android-dist && npx cap copy ios

# 2. Compile Xcode Debug build
xcodebuild -project ios/App/App.xcodeproj -scheme App -destination "id=95F2CF83-5C5B-54C0-B4D7-A461DE27F7FB" -configuration Debug build

# 3. Install to device
xcrun devicectl device install app --device 95F2CF83-5C5B-54C0-B4D7-A461DE27F7FB /Users/mohdatif/Library/Developer/Xcode/DerivedData/App-bkeikpytcobnphcdirucpaxtijaa/Build/Products/Debug-iphoneos/App.app

# 4. Launch on device
xcrun devicectl device process launch --device 95F2CF83-5C5B-54C0-B4D7-A461DE27F7FB com.mohdatif.pulsefit
```

---

## 7. Important Constraints & Conventions for Future Agents

1. **Local-First Integrity**: Never introduce a remote database for user workout/food records. Everything must persist in IndexedDB (`src/data/database.ts`).
2. **AI Proxy Pattern**: All AI features must route through the Cloudflare Worker via `VITE_AI_PROXY_URL`. Do not embed private API keys in client code.
3. **Square Brutalist Styling**: Preserve 90-degree square borders (`border-radius: 0;`), 2px solid outlines, and harsh retro dropshadows. Do not reintroduce rounded pills or bullet dots into the day strip.
4. **Sets & Reps Integrity**: Ensure exercise schemas continue to preserve `sets` (number) and `reps` (string) through parsing and routine creation.
5. **No Font Zoom**: Form inputs must remain at 16px font-size to prevent iOS Safari auto-zoom.
