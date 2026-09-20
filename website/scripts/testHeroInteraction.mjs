import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

const source = await readFile(new URL('../src/main.tsx', import.meta.url), 'utf8')
const css = await readFile(new URL('../src/styles.css', import.meta.url), 'utf8')

// 1. state is neutral|left|right
assert.match(source, /type HeroHoverState = 'neutral' \| 'left' \| 'right'/, 'Hero must declare neutral|left|right hover state type.')
assert.match(source, /useState<HeroHoverState>\('neutral'\)/, 'Hero must initialize in neutral state.')

// 2. fixed hover overlay exists
assert.match(source, /className="hero-hover-zones"/, 'Fixed hover overlay container must exist.')
assert.match(source, /className="hero-hover-zone hero-hover-zone--left"/, 'Left hover zone must exist.')
assert.match(source, /className="hero-hover-zone hero-hover-zone--center"/, 'Center hover zone must exist.')
assert.match(source, /className="hero-hover-zone hero-hover-zone--right"/, 'Right hover zone must exist.')
assert.match(css, /\.hero-hover-zones \{ position:absolute; inset:0; z-index:30; display:flex; pointer-events:auto; \}/, 'Hover zones overlay must be fixed and positioned above cards.')

// 3. left zone sets left
assert.match(source, /hero-hover-zone--left" onPointerEnter=\{\(\) => setHoverState\('left'\)\}/, 'Left zone must set left hover state on pointer enter.')

// 4. center zone sets neutral
assert.match(source, /hero-hover-zone--center" onPointerEnter=\{\(\) => setHoverState\('neutral'\)\}/, 'Center zone must set neutral hover state on pointer enter.')

// 5. right zone sets right
assert.match(source, /hero-hover-zone--right" onPointerEnter=\{\(\) => setHoverState\('right'\)\}/, 'Right zone must set right hover state on pointer enter.')

// 6. whole hero pointerleave resets neutral
assert.match(source, /onPointerLeave=\{\(\) => setHoverState\('neutral'\)\}/, 'Whole hero onPointerLeave must reset hover state to neutral.')

// 7. moving hero cards are not primary pointer targets
assert.doesNotMatch(source, /<figure[^>]*onPointerEnter/, 'Hero cards must not attach primary pointerenter handlers.')
assert.match(css, /\.hero-shot[^{]*\{[^}]*pointer-events:none;/, 'Hero cards must have pointer-events:none on desktop.')

// 8. no carousel array permutation exists
assert.doesNotMatch(source, /activeId|CARD_ORDER|getCardRole|rotate\(|setCards\(|setCardOrder/, 'Carousel array permutation and activeId state must be absent.')
assert.match(source, /key=\{card\.id\}/, 'Hero cards must keep stable identity keys.')

// 9. CSS has explicit selectors for neutral/left/right
for (const selector of [
  '.hero-workout', '.hero-home', '.hero-progress',
  '.hero-screens[data-hover="right"] .hero-workout',
  '.hero-screens[data-hover="right"] .hero-home',
  '.hero-screens[data-hover="right"] .hero-progress',
  '.hero-screens[data-hover="left"] .hero-workout',
  '.hero-screens[data-hover="left"] .hero-home',
  '.hero-screens[data-hover="left"] .hero-progress',
]) {
  assert.ok(css.includes(selector), `Missing explicit selector: ${selector}`)
}
assert.match(css, /data-hover="right"\] \.hero-progress \{ z-index:12;[^}]*translate3d\(20%,-8px,105px\)/, 'Right hover must bring Progress forward in Z.')
assert.match(css, /data-hover="left"\] \.hero-workout \{ z-index:12;[^}]*translate3d\(-20%,-8px,105px\)/, 'Left hover must bring Workout forward in Z.')

// 10. reduced-motion does not erase transforms
const reducedMotionBlock = css.match(/@media \(prefers-reduced-motion:reduce\) \{([\s\S]*)$/)?.[1] ?? ''
assert.doesNotMatch(reducedMotionBlock, /\.hero-shot[^{]*\{[^}]*transform:none\s*!important/, 'Reduced motion must not erase card positions with transform:none !important.')

// 11. mobile disables hover overlay
const mobileBlock = css.match(/@media \(max-width:768px\) \{([\s\S]*?)(?:@media|\s*$)/)?.[1] ?? ''
assert.match(mobileBlock, /\.hero-hover-zones \{ display:none; \}/, 'Mobile must disable hover overlay.')
assert.match(mobileBlock, /\.hero-home \{ display:block/, 'Mobile must keep single Home screenshot.')

// Keyboard accessibility checks
assert.match(source, /onFocus=\{\(\) => setHoverState\(card\.hoverState\)\}/, 'Focus on cards must set hover state.')
assert.match(source, /onBlur=\{\(event\) => \{[\s\S]*setHoverState\('neutral'\)/, 'Blur leaving hero stack must reset neutral.')

console.log('All 11 hero fixed-zone interaction targeted checks passed.')
