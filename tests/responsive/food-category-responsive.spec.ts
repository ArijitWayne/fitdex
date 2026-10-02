import { expect, test, type Page } from '@playwright/test'
import fs from 'node:fs'

const portraitViewports = [
  [320, 568], [375, 667], [375, 812], [390, 844], [393, 852], [402, 874], [428, 926], [430, 932],
  [360, 640], [360, 720], [360, 780], [360, 800], [360, 806], [393, 851], [412, 915], [384, 854],
  [412, 919], [480, 960], [340, 720], [400, 860], [440, 932], [351, 800], [352, 800], [353, 800],
] as const
const landscapeViewports = [[568, 320], [667, 375], [800, 360]] as const
const screenshotViewports = new Set(['320x568', '360x800', '375x812', '390x844', '412x915', '430x932', '480x960'])
const screenshotDirectory = '/tmp/fitdex-food-category-responsive-qa'

interface LayoutResult {
  cardCount: number
  columns: number
  contentScrollable: boolean
  errors: string[]
}

async function inspectLayout(page: Page, state: 'empty' | 'populated'): Promise<LayoutResult> {
  return page.evaluate((currentState) => {
    const errors: string[] = []
    const rect = (element: Element) => element.getBoundingClientRect()
    const inside = (inner: DOMRect, outer: DOMRect, tolerance = 1) => inner.left >= outer.left - tolerance && inner.top >= outer.top - tolerance && inner.right <= outer.right + tolerance && inner.bottom <= outer.bottom + tolerance
    const overlaps = (left: DOMRect, right: DOMRect) => left.left < right.right - 0.5 && left.right > right.left + 0.5 && left.top < right.bottom - 0.5 && left.bottom > right.top + 0.5
    const modal = document.querySelector('.food-category-dialog')!
    const content = document.querySelector('.food-category-content') as HTMLElement
    const close = document.querySelector('[aria-label="Close category picker"]')!
    const standard = document.querySelector('.food-standard-categories')!
    const custom = document.querySelector('.food-custom-categories')!
    const create = document.querySelector('.food-create-category')!
    const cards = [...document.querySelectorAll('.category-grid > button')]
    const viewport = new DOMRect(0, 0, innerWidth, innerHeight)

    if (!inside(rect(modal), viewport)) errors.push('modal outside viewport')
    if (!inside(rect(close), rect(modal))) errors.push('close outside modal')
    if (rect(close).width < 44 || rect(close).height < 44) errors.push('close touch target below 44px')
    if (document.documentElement.scrollWidth > innerWidth + 1) errors.push('horizontal document overflow')
    if (getComputedStyle(document.body).overflow !== 'hidden') errors.push('background scroll not locked')
    if (rect(standard).bottom > rect(custom).top + 0.5) errors.push('standard overlaps custom')
    if (cards.length !== 16) errors.push(`expected 16 cards, found ${cards.length}`)

    for (const [index, card] of cards.entries()) {
      const cardRect = rect(card)
      const sprite = card.querySelector('.food-sprite')!
      const spriteRect = rect(sprite)
      const image = card.querySelector('img') as HTMLImageElement | null
      const label = card.querySelector('span:last-child') as HTMLElement
      if (cardRect.width <= 0 || cardRect.height < 54) errors.push(`card ${index} invalid size`)
      if (!inside(spriteRect, cardRect)) errors.push(`sprite ${index} outside card`)
      if (image && (!image.complete || image.naturalWidth <= 0 || !inside(rect(image), spriteRect))) errors.push(`image ${index} outside sprite or unloaded`)
      if (!inside(rect(label), cardRect) || label.scrollWidth > label.clientWidth + 1) errors.push(`label ${index} clipped`)
      for (let other = index + 1; other < cards.length; other += 1) if (overlaps(cardRect, rect(cards[other]))) errors.push(`cards ${index}/${other} overlap`)
    }

    const customContent = currentState === 'populated'
      ? document.querySelector('.food-custom-category-list')!
      : document.querySelector('.food-suggestion-empty')!
    if (rect(customContent).bottom > rect(create).top + 0.5) errors.push('custom content overlaps create')
    if (rect(create).height < 44) errors.push('create touch target below 44px')

    const rows = [...document.querySelectorAll('.custom-category-option')]
    if (currentState === 'populated' && rows.length !== 5) errors.push(`expected 5 custom rows, found ${rows.length}`)
    for (const [index, row] of rows.entries()) {
      const rowRect = rect(row)
      const deleteButton = row.querySelector('.custom-category-delete')!
      const name = row.querySelector('button:first-child span:last-child') as HTMLElement
      if (rowRect.height < 54) errors.push(`custom row ${index} below 54px`)
      if (!inside(rect(deleteButton), rowRect)) errors.push(`delete ${index} outside row`)
      if (rect(deleteButton).width < 44 || rect(deleteButton).height < 44) errors.push(`delete ${index} touch target below 44px`)
      if (!inside(rect(name), rowRect) || name.scrollWidth > name.clientWidth + 1) errors.push(`custom name ${index} clipped`)
      for (let other = index + 1; other < rows.length; other += 1) if (overlaps(rowRect, rect(rows[other]))) errors.push(`custom rows ${index}/${other} overlap`)
    }

    const columns = new Set(cards.map((card) => Math.round(rect(card).left))).size
    const contentScrollable = content.scrollHeight > content.clientHeight
    content.style.scrollBehavior = 'auto'
    content.scrollTop = content.scrollHeight
    const contentRect = rect(content)
    if (rect(create).bottom > contentRect.bottom + 1 || rect(create).top < contentRect.top - 1) errors.push('create unreachable after scroll')
    if (content.scrollTop + content.clientHeight < content.scrollHeight - 1) errors.push('content did not reach scroll end')
    return { cardCount: cards.length, columns, contentScrollable, errors }
  }, state)
}

test('Food Category modal survives full phone viewport matrix', async ({ page }) => {
  fs.mkdirSync(screenshotDirectory, { recursive: true })
  const results: Array<{ state: string; viewport: string; columns: number; scrollable: boolean }> = []
  for (const state of ['empty', 'populated'] as const) {
    for (const [width, height] of [...portraitViewports, ...landscapeViewports]) {
      await page.setViewportSize({ width, height })
      await page.goto(`/tests/fixtures/food-category.html?state=${state}`)
      await expect(page.getByRole('dialog', { name: 'Select Category' })).toBeVisible()
      if (screenshotViewports.has(`${width}x${height}`)) await page.screenshot({ path: `${screenshotDirectory}/${state}-${width}x${height}-top.png` })
      const result = await inspectLayout(page, state)
      expect(result.errors, `${state} ${width}x${height}`).toEqual([])
      if (height >= width && width < 700) expect(result.columns, `${state} ${width}x${height} columns`).toBe(width < 352 ? 1 : 2)
      results.push({ state, viewport: `${width}x${height}`, columns: result.columns, scrollable: result.contentScrollable })
      if (screenshotViewports.has(`${width}x${height}`)) await page.screenshot({ path: `${screenshotDirectory}/${state}-${width}x${height}-bottom.png` })
    }
  }
  expect(results).toHaveLength((portraitViewports.length + landscapeViewports.length) * 2)

  for (const family of ['spartans', 'amazonians'] as const) {
    for (const brightness of ['light', 'dark'] as const) {
      await page.setViewportSize({ width: 360, height: 800 })
      await page.goto('/tests/fixtures/food-category.html?state=populated')
      await page.evaluate(({ family: themeFamily, brightness: themeBrightness }) => {
        document.documentElement.dataset.themeFamily = themeFamily
        document.documentElement.dataset.brightness = themeBrightness
      }, { family, brightness })
      await page.waitForTimeout(250)
      const result = await inspectLayout(page, 'populated')
      expect(result.errors, `${family} ${brightness}`).toEqual([])
      await page.screenshot({ path: `${screenshotDirectory}/theme-${family}-${brightness}-360x800.png` })
    }
  }
})
