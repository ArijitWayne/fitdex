# FitDex Asset Inventory & Rights Notice

Copyright © 2026 Arijit Bhaduri

This document provides the authoritative classification of all non-code visual, audio, and demonstration media assets bundled with or referenced by the FitDex project.

Software licenses ([PolyForm Noncommercial 1.0.0](LICENSES/PolyForm-Noncommercial-1.0.0.md) and [MIT](LICENSES/MIT.txt)) apply strictly to software source code and documentation. They do **not** grant automatic license rights for separate reuse, redistribution, or commercial use of visual branding, character artwork, sound assets, or exercise demonstration videos.

---

## 1. Asset Classification Matrix

| Asset Group | Relative Path / Source | Rights Classification | Description & Terms |
| :--- | :--- | :--- | :--- |
| **FitDex Logos & Crests** | `public/branding/` | **All Rights Reserved** | Official FitDex logo wordmarks, Spartan crest, Amazonian crest, and brand symbols. Copyright © 2026 Arijit Bhaduri. |
| **Faction Themes & Sprites** | `public/branding/`, `public/exercise-categories/` | **All Rights Reserved** | Pixel-art faction emblems and themed sprite sheets. Copyright © 2026 Arijit Bhaduri. |
| **Champion Avatars** | `public/avatars/` | **All Rights Reserved** | 6 character avatar portraits (Alexander, Cassandra, Leonidas, Achilles, Hippolyta, Atalanta). Copyright © 2026 Arijit Bhaduri. |
| **Exercise Category Sprites** | `public/exercise-categories/` | **All Rights Reserved** | 36 themed anatomy cards and category icons for Spartan/Amazonian Light/Dark themes. Copyright © 2026 Arijit Bhaduri. |
| **Food Category Icons** | `public/food/` | **Rights review pending** | Meal and nutrition icons (Breakfast, Lunch, Supper, Dinner). Retained for application use. |
| **Gamification Art & Badges** | `public/gamification/` | **All Rights Reserved** | Ascending rank crests and 52 RPG achievement badges. Copyright © 2026 Arijit Bhaduri. |
| **PWA & App Launcher Icons** | `public/favicon.svg`<br>`public/pwa-icon.svg`<br>`public/pwa-maskable.svg`<br>`android/app/src/main/res/` | **All Rights Reserved** | Responsive web icons and dynamic Android adaptive launcher icon sets. Copyright © 2026 Arijit Bhaduri. |
| **Promotional & Showcase Art** | `src/assets/hero.png`<br>`docs/` showcase assets | **All Rights Reserved** | Product showcase, README hero graphics, and game-manual presentation mockups. Copyright © 2026 Arijit Bhaduri. |
| **Exercise Demonstration Videos** | `public/exercises/*.mp4`<br>`https://fitdex-media.fitdexapp.workers.dev` | **Separate media terms** | Exercise demonstration media is distributed separately and is not licensed under the FitDex software licenses. Rights may vary by individual asset. |
| **Sound Effects (SFX)** | `public/audio/select.mp3`<br>`public/audio/add.mp3`<br>`public/audio/achievements_unlock.mp3`<br>`public/audio/progress_complete.mp3` | **Rights review pending** | Semantic retro 8-bit sound effects bundled for application audio. Subject to respective creator terms. |
| **Background Music (BGM)** | `public/audio/bgm-warrior.mp3`<br>`public/audio/bgm-hardened.mp3`<br>`public/audio/bgm-villain.mp3` | **Rights review pending** | Looping retro RPG soundtrack pieces bundled for application audio. Subject to respective creator terms. |
| **Interface Icons (Lucide)** | React components via `lucide-react` | **Third-party / ISC License** | Standard UI iconography rendered via the upstream [Lucide](https://lucide.dev/) library. |

---

## 2. Branding & Artwork Policy

The FitDex project name, wordmarks, faction crests, character portraits, and badge art form the visual identity of the project.

- **Non-Transferable Rights:** Viewing or cloning the repository does not grant permission to use FitDex branding for third-party products, services, or public distributions.
- **Forks & Downstream Distributions:** Any public fork or derivative application must replace all official logos and emblems with distinct, non-confusing visual identity.

---

## 3. Exercise Demonstration Media Policy

The FitDex Exercise Dex catalogs 804 exercises with associated demonstration media referenced by deterministic path (`mediaPath = /exercises/<slug>.mp4`).

- Video media is hosted and streamed from a separate media distribution worker (`https://fitdex-media.fitdexapp.workers.dev`) and can optionally be cached locally within the Android app.
- Exercise demonstration media is not covered by the PolyForm Noncommercial 1.0.0 or MIT licenses.
- No historical provenance claims or third-party endorsements are made by this repository.

---

## 4. Audio Provenance & Rights Review

Audio files located in `public/audio/` provide acoustic tactile feedback and immersive retro background music for the application.

- Provenance records for individual sound effect and music samples are classified as **Rights review pending**.
- Audio assets are provided solely as integrated components of the FitDex application experience and may not be extracted, resold, or redistributed as standalone audio libraries.
