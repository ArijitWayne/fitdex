# Contributing to FitDex

Thank you for your interest in contributing to FitDex!

FitDex is a source-available, local-first fitness tracker for Android and the web, blending serious strength and nutrition tracking with the aesthetics and progression of a retro handheld RPG.

---

## Code of Conduct

We are committed to providing a friendly, safe, and welcoming environment for all contributors. Please be respectful, constructive, and collaborative in all discussions and code reviews.

---

## Licensing Terms for Contributions

FitDex uses a split licensing model detailed in [LICENSING.md](LICENSING.md). When you submit a Pull Request or contribute code/documentation:

1. **Path-Specific Licensing:**
   - Contributions touching `src/**` or `android/**` are contributed under the [PolyForm Noncommercial License 1.0.0](LICENSES/PolyForm-Noncommercial-1.0.0.md).
   - Contributions touching `docs/**`, `scripts/**`, `.github/**`, or build configuration are contributed under the [MIT License](LICENSES/MIT.txt).
2. **Copyright Ownership:** Contributions do **not** transfer or assign copyright ownership to Arijit Bhaduri. You retain copyright over your original contributions.
3. **No Contributor License Agreement (CLA):** No separate CLA is required. By submitting a contribution, you confirm that you hold the necessary rights to license your submission under the respective license governing that path.
4. **Brand Assets Excluded:** The software licenses do not grant rights to FitDex brand names, faction crests, or avatar artwork. Do not submit third-party copyrighted artwork without explicit rights.

---

## Branching Strategy & PR Workflow

FitDex maintains a two-branch workflow:

- **`main`**: The locked, stable production release baseline. Direct commits and feature PRs to `main` are not permitted.
- **`dev`**: The active integration and development branch. All Pull Requests must target `dev`.

### Creating a Pull Request
1. Fork the repository on GitHub.
2. Clone your fork locally and check out the `dev` branch:
   ```bash
   git checkout dev
   git pull origin dev
   ```
3. Create a descriptive feature or bugfix branch:
   ```bash
   git checkout -b fix/workout-timer-zero-exercise
   # or
   git checkout -b feat/macro-target-presets
   ```
4. Commit your changes with clear, concise commit messages.
5. Push to your fork and open a Pull Request targeting **`dev`** on upstream `ArijitWayne/fitdex`.

---

## Development Setup

### Prerequisites
- **Node.js**: v20 or higher
- **npm**: v10 or higher
- **Android Studio** (optional, for native Android builds): Android SDK Platform 34+, Build Tools, JDK 17+

### Getting Started
```bash
# Install dependencies
npm install

# Start local development server with HMR
npm run dev
```

### Verification & Quality Gates
Before submitting any pull request, ensure all linters, typechecks, and automated tests pass:

```bash
# Run code linting
npm run lint

# Run TypeScript compilation and production build
npm run build

# Run core domain test suites
npm run test:workout-sessions
npm run test:workout-timer
npm run test:exercise-dex
npm run test:food
npm run test:nutrition-targets
npm run test:weekly-plan
npm run test:gamification
npm run test:navigation
```

---

## Architecture & Code Guidelines

### 1. Local-First & Privacy Non-Negotiable
- FitDex never requires user accounts or cloud databases.
- All user history (workouts, foods, weights, achievements) must be persisted in local IndexedDB via [Dexie](https://dexie.org/).
- Do not introduce telemetry, third-party user trackers, or remote analytics SDKs.

### 2. Separation of Templates vs. Historical Records
- Maintain strict architectural separation between mutable templates (routines, remembered foods) and immutable historical snapshots (completed workouts, daily food logs). Modifying a routine must never mutate past recorded workouts.

### 3. UI/UX & Retro Handheld Aesthetic
- FitDex adheres to strict visual design principles detailed in [docs/FITDEX_UI_UX_STANDARD.md](docs/FITDEX_UI_UX_STANDARD.md).
- Use Vanilla CSS and predefined design tokens from `src/styles/app.css` and `src/index.css`.
- Do not introduce Tailwind CSS or heavy component libraries.
- Always verify UI layouts in both **Spartan** (teal/stone) and **Amazonian** (plum/copper) themes, across both Light and Dark variants.
- Ensure high tactile responsiveness: crisp button borders, clear active/focus states, and accessible contrast ratios.

---

## Reporting Issues

### Bug Reports
When reporting bugs via GitHub Issues, please include:
- A clear, concise title.
- Android OS version or browser version.
- Exact reproduction steps.
- Expected behavior vs. actual behavior.
- Relevant screenshots or console logs if applicable.

### Feature Suggestions
We welcome suggestions that enhance FitDex's mission as a private, retro-inspired fitness tracker. When opening a feature request:
- Explain the real-world workout or nutrition problem you want to solve.
- Outline how the feature fits within a local-first, offline-capable architecture.
- Consider how it complements the retro RPG game-manual aesthetic.
