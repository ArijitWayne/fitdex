# FitDex

FitDex is a mobile-first, offline-first fitness tracking PWA with a restrained retro RPG-inspired interface. It is designed for Android and iPhone first, with a responsive desktop shell that keeps content focused instead of stretching the phone layout.

## Stack

- React 19 and TypeScript
- Vite
- Dexie and IndexedDB for device-local structured data
- `vite-plugin-pwa` and Workbox for installation and offline app-shell support
- Oxlint

## Run locally

```bash
npm install
npm run dev
```

Production and quality checks:

```bash
npm run build
npm run lint
```

## Phase 0 status

Phase 0 establishes the application foundation only. It includes the responsive app shell, Home / Workout / Food / Progress / Journal placeholders, Settings, Spartans / Amazonians theme families with independent System / Light / Dark brightness, cosmetic pixel-avatar selection, first-run onboarding with replay, PWA configuration, and a typed IndexedDB schema. Workout, nutrition, progress, backup, and gamification business logic are intentionally not implemented yet.

## Local-first architecture

The local device is the source of truth. User fitness data will live in IndexedDB through Dexie; there is no account, backend database, cloud sync, or authentication. Stable UUIDs and timestamped records are used so data can later be moved safely between installations and through schema migrations.

Theme and tutorial completion use a small device-storage adapter because they are boot-time preferences. Future capabilities that may differ between the browser and a native wrapper—file transfer, haptics, notifications, and wake lock—have adapter contracts under `src/platform` without premature implementations.

The selected cosmetic avatar is also stored locally. The avatar catalog expects approved transparent pixel artwork under `public/avatars`; documented fallbacks keep the UI usable until those assets are supplied. Avatars have no gameplay, account, or social behavior.

## Backup philosophy

FitDex will use portable, versioned backup files so a restored device can reproduce workouts, routines, exercise customizations, nutrition, measurements, XP, achievements, quests, journal entries, and preferences. Phase 0 defines backup metadata and database boundaries only; Create Backup, Restore Backup, automatic backups, and data export are visible placeholders and do not yet perform any file operations.

## PWA icons

The current `favicon.svg`, `pwa-icon.svg`, and `pwa-maskable.svg` are deliberately simple **placeholder** FD marks. Final brand artwork and production PNG icon sizes should replace them in a later design phase.

## Future Android packaging

The PWA is structured so it can later be wrapped with Capacitor for Android APK distribution. Capacitor is not installed in Phase 0. Browser and future native-specific APIs should remain behind the small contracts in `src/platform`.
