# FitDex UI/UX Standard

This document records the shared visual and interaction rules established by the Phase 1 Home and Settings work. It standardizes product language and behavior without forcing every screen into the same layout.

## Design Character

FitDex should feel focused, capable, and game-informed rather than decorative. Use restrained RPG cues, crisp geometry, clear state, and purposeful accents. Preserve theme tokens and approved brand assets; do not introduce one-off visual systems.

## Hierarchy

Each view needs one obvious primary purpose. Put identity and current state first, the primary action next, and supporting information after it. Reduce repeated headings, explanations, and competing calls to action.

## Containment

Use borders or filled surfaces to explain grouping, selection, or elevated state—not around every item. Prefer dividers, spacing, and alignment for routine structure. Nested panels should be exceptional.

## Mobile Canvas

Use the full safe mobile width with consistent edge insets. Avoid decorative side rails around the main app canvas. Mobile-only treatments belong at or below the established 700px breakpoint; desktop composition must remain intentional and independent.

## Typography

Use display type for concise identity, titles, and command labels. Use body type for explanations and data. Monospaced command language is appropriate where it reinforces the approved handheld-console identity. Keep labels short, readable, and scannable.

## Navigation

Primary navigation has five stable destinations: Home, Workout, Food, Progress, and Journal. The selected destination must be unmistakable without a large filled block. Preserve touch targets, safe-area spacing, navigation history, and centralized Android Back behavior.

## Rows and Lists

Rows should be compact, full-width, and separated primarily by dividers. Keep one clear label, one short state or summary, and one trailing affordance. Use a stronger selected treatment only when selection changes context.

## Buttons

One action per section should carry primary emphasis. Secondary actions should remain quieter. Interactive controls must preserve accessible names, visible keyboard focus, disabled states, and at least a 42–44px touch target where practical.

## Progressive Disclosure

Show essential state first and reveal configuration or detail on request. Expansion must be local, reversible, and preserve the user's saved preference. Do not hide the primary task behind disclosure.

## Empty States

State what is absent, why it matters, and the next useful action. Keep empty states compact on dashboard surfaces. Do not invent activity, sample progress, or false completion.

## Audio Interaction

Use existing SFX semantics and priority. Selection sounds accompany deliberate navigation or selection. Background music remains independent from branding and navigation; temporary pause must not overwrite the selected track preference.

## Theme Requirements

Theme family is the source of truth for global branding: Spartan themes use Spartan branding and Amazonian themes use Amazonian branding. Avatar faction never controls the global theme. Every UI change must remain legible across both families and light, dark, and system brightness modes.

## Future Phase Rule

Future phases should apply these principles to one bounded product area at a time. Preserve business logic, local data, navigation, audio, Android behavior, and desktop layouts unless the approved scope explicitly changes them. Validate responsive behavior and relevant feature tests before expanding the pattern.
