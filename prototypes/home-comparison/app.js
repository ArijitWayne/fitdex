import { renderDailyQuest } from './daily-quest.js'
import { renderHandheldCommand } from './handheld-command.js'
import { renderAdventurerCamp } from './adventurer-camp.js'

const variants = [renderDailyQuest, renderHandheldCommand, renderAdventurerCamp]
const stage = document.getElementById('stage')
const picker = document.querySelector('.proto-picker')
const highlight = picker.querySelector('.proto-picker-highlight')
const items = [...picker.querySelectorAll('.proto-picker-item:not(.proto-picker-replay)')]
const replay = picker.querySelector('.proto-picker-replay')
const familyPreview = document.getElementById('family-preview')
const brightnessPreview = document.getElementById('brightness-preview')
const toast = document.getElementById('prototype-toast')
let current = 0
let toastTimer

function moveHighlight() {
  const el = items[current]
  highlight.style.width = el.offsetWidth + 'px'
  highlight.style.transform = `translateX(${el.offsetLeft}px)`
}

function mount(i) {
  stage.innerHTML = ''
  requestAnimationFrame(() => { stage.innerHTML = variants[i]() })
}

function setActive(i) {
  if (i < 0 || i >= variants.length) return
  current = i
  items.forEach((el, j) => {
    el.toggleAttribute('data-active', j === i)
    if (j === i) el.setAttribute('aria-current', 'true')
    else el.removeAttribute('aria-current')
  })
  moveHighlight()
  const url = new URL(location)
  url.searchParams.set('v', i + 1)
  history.replaceState(null, '', url)
  mount(i)
}

items.forEach((el, i) => el.addEventListener('click', () => setActive(i)))
replay?.addEventListener('click', () => mount(current))
window.addEventListener('resize', moveHighlight)

document.addEventListener('keydown', (e) => {
  if (/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName) || e.target.isContentEditable) return
  if (e.metaKey || e.ctrlKey || e.altKey) return
  const num = parseInt(e.key, 10)
  if (num >= 1 && num <= variants.length) setActive(num - 1)
  else if (e.key === 'ArrowRight') setActive((current + 1) % variants.length)
  else if (e.key === 'ArrowLeft') setActive((current - 1 + variants.length) % variants.length)
  else if (e.key === 'r' || e.key === 'R') mount(current)
})

function showToast(message) {
  window.clearTimeout(toastTimer)
  toast.textContent = message
  toast.hidden = false
  toastTimer = window.setTimeout(() => { toast.hidden = true }, 1800)
}

stage.addEventListener('click', (event) => {
  const trigger = event.target.closest('[data-action]')
  if (!trigger) return
  const detailId = trigger.dataset.detail
  if (detailId) {
    const detail = stage.querySelector(`#${detailId}`)
    if (detail) {
      const opening = detail.hidden
      stage.querySelectorAll('.prototype-detail').forEach((item) => { item.hidden = true })
      detail.hidden = !opening
      stage.querySelectorAll('[data-detail]').forEach((item) => item.setAttribute('aria-expanded', String(item === trigger && opening)))
    }
  }
  showToast(trigger.dataset.action)
})

familyPreview.addEventListener('change', () => {
  document.documentElement.dataset.themeFamily = familyPreview.value
})

brightnessPreview.addEventListener('change', () => {
  document.documentElement.dataset.brightness = brightnessPreview.checked ? 'light' : 'dark'
})

const requestedVariant = (parseInt(new URLSearchParams(location.search).get('v'), 10) || 1) - 1
setActive(requestedVariant >= 0 && requestedVariant < variants.length ? requestedVariant : 0)
requestAnimationFrame(() => requestAnimationFrame(() => picker.setAttribute('data-ready', '')))
