# FitDex Phase 7 — Settings Production Audit

## Scope and method

Read-only audit of the current Settings surface and directly connected production code. The existing Graphify graph was queried; it was not rebuilt. Production source, schemas, repositories, providers, target calculators, Food consumers, gamification reconciliation, backup/restore, media management, and help/about surfaces were then inspected. Prototype work is isolated to `prototypes/settings-phase-7/`.

## Current architecture

- `SettingsPage` owns a hub plus local subviews: Profile, Nutrition Targets, Audio, Exercise Media, Backup & Restore, and About.
- Appearance controls, sound effects, guide entry points, and grouped navigation rows live on the hub.
- Display name, settings records, local preferences, nutrition targets, audio, and backups use existing repositories/providers. There is no account, authentication, or cloud settings layer.
- Back behavior is layered: dialogs close first, avatar selection returns to Profile, subviews return to the Settings hub, and the hub returns through app navigation history.
- Production persistence is split intentionally:
  - Dexie `SettingsRecord`: display name, units, weekly-plan flags, tutorial flags, audio, nutrition targets, and target eligibility timestamps.
  - Device storage: current theme family, brightness, selected avatar, and onboarding completion.
  - Backups combine database settings with these local preferences.

## Production settings inventory

| Area | Current capability | Persistence | Downstream effect |
|---|---|---|---|
| Theme family | Spartans / Amazonians | Device storage | Tokens, branding, favicon, Android launcher branding |
| Brightness | System / Light / Dark | Device storage | Document theme; System follows device color scheme |
| Display name | Required, trimmed, Unicode-safe, 1–24 characters | `SettingsRecord.displayName` | Home/profile greeting |
| Avatar | Six selectable avatars across both factions | Device storage | Profile identity; independent of theme family |
| Units | Metric / Imperial exists in model and consumers | `SettingsRecord.units` | Workout/progress weight and distance display/input |
| Sound effects | On / Off | `SettingsRecord.soundEffectsEnabled` | Selection, progress, and achievement cues |
| Battle music | Warrior / Hardened / Villain / None | `SettingsRecord.backgroundMusic` | Persistent looping background track |
| Nutrition targets | Enabled, goal, calculation profile, calorie and protein targets | Nested `SettingsRecord.nutritionTargets` | Food target UI and target XP eligibility |
| Gamification guide | Opens existing help | No new setting | Explains XP, streaks, achievements |
| Field Guide | Replays existing seven-topic tutorial | No reset mutation | Help/onboarding replay |
| Exercise media | Android download management | Native device storage | Offline exercise videos; excluded from backup |
| Backup & Restore | Local `.fitdex` export, validation, preview, replace restore | Download/upload | Portable local data transfer |
| About | Version, creator, local-first/privacy copy | None | Informational |

No production full-data reset action exists. The prototypes do not invent one. Workout preferences are mentioned in older planning notes but are not a current Settings capability; the prototypes do not invent them either.

## Key production UX findings

1. The hub mixes high-frequency appearance controls, identity, targets, guides, device media, and destructive restore entry points. Group labels help, but data operations should remain visibly separate.
2. Units are a real persisted capability with active downstream consumers, but the current Settings UI does not expose the preference. A single Metric/Imperial control is truthful; separate weight and distance preferences would not be.
3. Sound effects are on the hub while battle music is in a subview. Both persist through the same settings record, so presenting a unified Audio destination is clearer without changing semantics.
4. Theme and avatar are independent. The default avatar may be selected from the active family, but users can choose any avatar. UI must not imply that changing theme changes the selected avatar.
5. Nutrition defaults can appear in the hub/subview before a record has been saved. Food receives no target record until Save. The current summary can therefore look persisted when it is still only a draft default.
6. Exercise Media is genuinely Android-only. Browser UI must explain unavailability instead of showing active download controls.
7. Backup/restore is local-file based and replacement-oriented. It is neither sync nor an account recovery mechanism.

## Nutrition Targets — data model

The saved record contains:

- `enabled`
- `goal`: `lose`, `maintain`, or `gain`
- `age`
- `sex`: `male` or `female`
- `heightCm`
- `weightKg`
- `activityLevel`: sedentary, light, moderate, very, or extreme
- `calorieTarget`
- `proteinTargetGrams`
- `calorieTargetSource`: calculated or manual
- `updatedAt`

The settings record also holds:

- `nutritionTargetsInitializedAt`: stable first-enabled setup time.
- `nutritionTargetsEligibleFrom`: latest enable boundary, reset when targets are re-enabled.

There are no carbohydrate, fat, or fibre targets, no target history/snapshots, no custom formula, and no link to Body Measurements. The weight used here is an independent calculation input.

## Nutrition Targets — defaults and validation

Unsaved draft defaults are enabled, lose, age 30, female, 165 cm, 65 kg, moderate activity, 1,800 kcal, 0 g protein, and calculated source.

Current validation:

- Age: integer, 18–120.
- Height and weight: finite and greater than 0; no upper bounds.
- Calories: finite and greater than 0.
- Protein: finite and 0 or greater. Decimals are accepted.
- Editing preserves empty drafts; validation occurs for calculation/save.
- Editing calories makes the source manual. Choosing a recommendation makes it calculated.
- Disabling still saves the complete target record and therefore still depends on valid fields.

Protein `0` is valid but means the protein target is unavailable: Food does not present it as an achievable target and no protein-target XP can be awarded.

## Nutrition Targets — calculation truth

Resting metabolic rate uses Mifflin–St Jeor and rounds the result:

`10 × kg + 6.25 × cm − 5 × age + (male ? 5 : −161)`

Estimated maintenance rounds RMR multiplied by the activity factor:

- Sedentary: 1.2
- Light: 1.375
- Moderate: 1.55
- Very active: 1.725
- Extreme: 1.9

Suggestions:

- Lose: maintenance −500; optional higher deficit maintenance −750; both floored at 1,000 kcal.
- Maintain: maintenance.
- Gain: maintenance +250.

The 1,000 kcal floor constrains calculated suggestions and daily XP evaluation. It does **not** currently constrain manual save validation. A user can save a manual target below 1,000 kcal, but intake below 1,000 kcal can never earn calorie-target XP. Aligning save validation with the safety floor is a product/semantic decision, not a visual cleanup.

## Food and gamification behavior

- Food subscribes live to the current target record. A save updates Food without an app restart.
- The currently selected historical Food date is evaluated using the **current** targets and calculation profile. No per-day target snapshot exists.
- If targets are off, Food hides the target evaluation card for every viewed date.
- Calorie target XP and protein target XP are separate idempotent +5 events keyed by date.
- Lose evaluation rejects intake below 1,000, more than 1,000 below maintenance, or above target. A 750–1,000 deficit may still be eligible as an outer band.
- Maintain/gain eligibility uses an inclusive ±10% band around the calorie target.
- Protein eligibility requires a target above 0 and logged protein at or above target.
- Paused dates do not receive Food target XP.
- Re-enabling targets starts a new eligibility boundary; disabled-period dates do not back-award.
- Already-awarded XP is never revoked when logs, targets, or enabled state later change.
- Target changes can make older eligible-period days newly qualify on a later reconciliation. Saving targets itself does not directly reconcile; a later Food mutation or dashboard load can.

This means the interface should avoid promising historically fixed targets or reversible XP. A truthful explanatory note is warranted near consequential target changes.

## Backup, restore, and media boundaries

- Export format: JSON `.fitdex`, MIME `application/x-fitdex-backup`, format version 1.
- Maximum accepted import size: 25 MB.
- Restore validates format, app/schema compatibility, and store structure before preview.
- Restore replaces user-owned database stores in a transaction. Built-in exercises are preserved; custom exercises are replaced.
- Backups include settings plus local theme, brightness, avatar, and onboarding preferences.
- Backups include workouts, food logs, routines, progress, settings, and gamification data.
- Backups exclude downloaded exercise videos and built-in assets.
- Restore preview exposes file metadata and record counts, followed by a final replacement confirmation.
- Failure copy correctly promises that current data was not changed.
- There is no cloud sync, account recovery, automatic backup, or encryption.

## Three prototype directions

### 1. System Panel

Optimizes scan speed and management. Compact grouped rows show current values. Preferences and guides occupy one column; Data & Offline stays visually separate. Nutrition is direct and form-led.

### 2. Profile Loadout

Leads with the local player identity, avatar, and personalization status. Settings remain literal, but the hierarchy begins with “who I am” before system utilities. Nutrition gives the goal and recommendation more visual weight.

### 3. RPG System Codex

Uses the strongest restrained FitDex system framing: numbered records, status language, and codex structure. Consequential labels remain literal: Nutrition Targets, Backup & Restore, Replace current data, and Units are never renamed as fantasy actions.

All three directions expose the same capability set and share the same complete nutrition-target state machine. Differences are hierarchy, density, framing, and emphasis—not fabricated product capability.

## Safe implementation changes

These can be implemented without changing storage or product semantics:

- Reorder and regroup Settings destinations.
- Add visible current-value summaries.
- Move sound effects and battle music into one Audio destination while preserving fields.
- Expose the existing combined Metric/Imperial preference.
- Clarify that avatar and theme are independent.
- Clarify draft-versus-saved nutrition state.
- Improve validation placement, unavailable protein copy, and Android-only media messaging.
- Separate Data & Offline from personalization/help.
- Preserve layered back, focus, Escape, and confirmation behavior while restyling.

## Product decisions required

These should not be smuggled into a UI implementation:

- Reject or warn on manual calorie targets below 1,000 kcal.
- Create historical nutrition-target snapshots instead of applying current targets to old dates.
- Reconcile gamification immediately after target changes.
- Decide whether previously awarded target XP should ever be revoked.
- Add carbohydrate, fat, fibre, or calculated protein targets.
- Connect nutrition weight to Body Measurements.
- Add separate weight and distance unit preferences.
- Add account, cloud sync, automatic backup, encryption, or a full-data reset action.
- Convert Settings subviews into dedicated routes instead of the current local view state.

## Recommended interaction rules

- Use instant state changes for toggles, radios, and segmented controls; reserve motion for small transform/opacity feedback.
- Maintain at least 44 px targets, strong focus rings, native form semantics, and reduced-motion support.
- Keep one primary action per transactional surface.
- Require a final alert-style confirmation before restore replacement.
- Do not use optimistic success copy for backup or restore failures.
- Let Back close the most local layer first.
- Keep critical copy concrete. “Restore and replace” is better than themed euphemisms.

## Prototype limitations

The prototype is a self-contained interaction model. It uses in-memory state and a validated demo backup fixture; it does not read or mutate IndexedDB, device storage, native downloads, or real files. It intentionally demonstrates production capabilities and failure/confirmation states without performing data operations.

## Color system alignment (Production semantic tokens)

The prototype was corrected to eliminate variant-specific and prototype-local color drift (such as arbitrary orange Spartan Dark accents), strictly matching production semantic tokens across all four themes:

- **Spartan Dark**: Near-black iron/graphite surface (`#121616`, `#1f2524`, `#282f2e`), muted steel borders (`#606a66`), light neutral text (`#e8e8e2`), muted text (`#a7aeaa`), and canonical teal/petrol primary accent (`#2e9895`, text `#58b4af`, soft `#213331`, on-accent `#101716`).
- **Spartan Light**: Warm stone/ivory surface (`#f0e6d6`, `#eae2d5`, `#f8efe2`), stone borders (`#979b92`), dark charcoal text (`#2e3230`), and canonical teal/petrol primary accent (`#1f8582`, soft `#d1ded9`, on-accent `#ffffff`).
- **Amazonian Dark**: Deep aubergine/charcoal surface (`#1f171e`, `#31232f`, `#3a2937`), plum borders (`#79616f`), light warm text (`#eee5df`), and canonical purple/plum primary accent (`#906390`, text `#bd91b7`, soft `#493246`, on-accent `#21151f`).
- **Amazonian Light**: Warm ivory/cream surface (`#f0e4d4`, `#ebe1d8`, `#f7ede0`), mauve-grey borders (`#9f898e`), dark plum text (`#352b31`), and canonical plum primary accent (`#785178`, soft `#e2d3dc`, on-accent `#ffffff`).

All three prototype directions (V1 System Panel, V2 Profile Loadout, V3 RPG System Codex) share this exact semantic palette; variant differentiation is purely structural and hierarchical.
