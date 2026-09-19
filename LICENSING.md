# FitDex Licensing

Copyright © 2026 Arijit Bhaduri

FitDex is source-available software distributed under a split licensing model. Different parts of the repository are governed by different licenses and terms depending on their path and function.

---

## 1. Summary of Repository Paths and Licenses

| Area / Path | License | Summary |
| :--- | :--- | :--- |
| **Application & Core**<br>`src/**`<br>`android/**` | [PolyForm Noncommercial License 1.0.0](LICENSES/PolyForm-Noncommercial-1.0.0.md) | Source-available for personal, educational, and noncommercial use. Commercial use is not granted without separate permission. |
| **Documentation & Tooling**<br>`docs/**`<br>`scripts/**`<br>`.github/**`<br>`README.md`<br>`CONTRIBUTING.md`<br>`SECURITY.md`<br>Build & dev configuration (`vite.config.ts`, `capacitor.config.ts`, `tsconfig*.json`, etc.) | [MIT License](LICENSES/MIT.txt) | Permissive open-source license permitting use, modification, redistribution, and commercial reuse with attribution. |
| **Assets, Branding & Media**<br>`public/**`<br>`src/assets/**` | [Separate Asset Terms](ASSETS.md) | Excluded from software licenses. Original FitDex branding, faction artwork, avatars, and badge art are All Rights Reserved. Audio and third-party media subject to respective terms. |

---

## 2. Application & Core Code (`src/**`, `android/**`)

The core FitDex application logic and native integrations are licensed under the **PolyForm Noncommercial License 1.0.0**.

### Covered Scope
This coarse boundary covers all files under `src/**` and `android/**`, including but not limited to:
- FitDex application runtime and AppShell architecture
- Workout engine, active workout logger, workout timers, and rest timer
- Weekly training plan, streaks, streak freezes, and travel/sickness pause mechanics
- Gamification engine, XP calculations, player level progression, ranks, and achievements
- Food and nutrition tracking logic, meal codex, and macro-to-calorie calculator
- Progress analytics, period comparisons, and personal records (PR) engine
- Journal and daily activity log derivation
- Exercise Dex catalog viewer, search normalization, and local filtering
- Exercise demonstration media resolver and Android selective media downloader
- Local audio runtime and sound effect player
- Navigation history and centralized Android hardware back handling
- Data models, Dexie schema definitions, and IndexedDB repositories
- `.fitdex` backup export, validation, and restoration engine
- Design tokens, CSS themes, and component UI styles
- Android Capacitor shell configuration and native launcher icon switching

### Plain-Language Explanation of PolyForm Noncommercial 1.0.0
- **Source Visibility:** You are free to view, inspect, and study the complete source code.
- **Modification & Development:** You may modify, adapt, and build the software for personal, hobby, educational, or research purposes.
- **Redistribution:** You may redistribute copies or modifications solely for noncommercial purposes, provided all license notices and copyright statements are preserved.
- **Commercial Use Restriction:** PolyForm Noncommercial 1.0.0 does not grant permission for commercial purposes (including selling the software, offering it as a paid service, integrating it into commercial hardware/software, or using it to generate business revenue).
- **Commercial Inquiries:** Any commercial use outside the scope granted by PolyForm Noncommercial 1.0.0 requires a separate commercial license or explicit written permission from the copyright holder.

> [!IMPORTANT]
> This plain-language summary is provided for convenience. In the event of any discrepancy, the official standardized text in [LICENSES/PolyForm-Noncommercial-1.0.0.md](LICENSES/PolyForm-Noncommercial-1.0.0.md) controls.

---

## 3. Documentation & Tooling (MIT License)

Public documentation, scripts, workflow templates, and repository configuration files are licensed under the **MIT License**.

### Covered Scope
- Repository documentation (`docs/**`, `README.md`, `CONTRIBUTING.md`, `SECURITY.md`)
- Automation scripts and utility tools (`scripts/**`)
- GitHub Actions workflows and issue/PR templates (`.github/**`)
- Standard build, bundling, and toolchain configurations (`vite.config.ts`, `capacitor.config.ts`, `tsconfig*.json`, lint configurations)

### Plain-Language Explanation of MIT
- You may freely use, copy, modify, merge, publish, distribute, sublicense, and sell copies of MIT-covered documentation and tooling.
- You must retain the MIT copyright notice and permission notice in all copies or substantial portions of the material.

---

## 4. Branding, Artwork & Asset Terms

Software licenses (PolyForm and MIT) apply strictly to code and text. They do **not** grant rights to use FitDex branding, visual identity, or proprietary assets.

### FitDex Brand Identity
The following items are proprietary to the FitDex project:
- The **FitDex** project name and typography
- Official FitDex logos and crest emblems
- Spartan and Amazonian faction identity and custom UI sprites
- Character and champion avatar artwork
- Custom rank badges and achievement icons
- Official promotional and presentation graphics

```text
Copyright © 2026 Arijit Bhaduri.
All Rights Reserved unless otherwise stated.
```

### Fork & Derivative Application Branding Policy
If you fork the FitDex repository, build a derivative application, or redistribute modified versions under the terms of PolyForm Noncommercial 1.0.0:
- You **must** replace or remove the official FitDex logos, Spartan/Amazonian brand crests, and project emblems.
- You **must not** name your derivative project "FitDex" or use confusingly similar branding.
- You **must not** imply that your fork is endorsed by, affiliated with, or an official release of the FitDex project.

---

## 5. Exercise Demonstration Media

Exercise demonstration videos referenced by the Exercise Dex catalog (`mediaPath = /exercises/<slug>.mp4`) and delivered via remote CDN (`https://fitdex-media.fitdexapp.workers.dev`) are managed and distributed separately.

- Exercise demonstration media is **not** licensed under PolyForm Noncommercial 1.0.0 or the MIT License.
- Rights, licensing, and attribution may vary across individual exercise assets.
- For detailed asset classification, see [ASSETS.md](ASSETS.md).

---

## 6. Audio Assets

Sound effects (`public/audio/*.mp3`) and retro background music tracks (`public/audio/bgm-*.mp3`) bundled for application audio are subject to their respective creator terms and are classified under review in [ASSETS.md](ASSETS.md). They are not automatically licensed for separate distribution or commercial reuse under the software licenses.

---

## 7. Third-Party Dependencies

FitDex depends on external open-source libraries (such as React, Dexie.js, Capacitor, Lucide React, and Vite). Each dependency remains subject to its own respective open-source license (e.g., MIT, Apache 2.0, ISC, BSD). Refer to `package.json` and individual package distributions for upstream license notices.
