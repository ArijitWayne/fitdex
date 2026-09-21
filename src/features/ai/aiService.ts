import type { PhotoEstimatedItem, WeekdayId } from '../../data/models.ts'
import { mapAiResponseToWeeklySchedule, type ParsedDayRoutine } from './routineParser.ts'

export interface GenerateSplitParams {
  goal: 'hypertrophy' | 'strength' | 'fat_loss' | 'endurance'
  splitStyle: 'ppl' | 'upper_lower' | 'bro_split' | 'arnold' | 'full_body'
  daysPerWeek: number
  equipment?: 'full_gym' | 'dumbbells' | 'bodyweight'
  customInstructions?: string
}

export interface CalorieEstimate {
  items: PhotoEstimatedItem[]
  totalCalories: number
  totalProteinG: number
  totalCarbsG: number
  totalFatG: number
}

/**
 * Retrieves the Cloudflare AI Proxy URL from environment variables.
 * In development and production, this is configured via VITE_AI_PROXY_URL.
 */
export function getAiProxyUrl(): string {
  const env: any = (typeof import.meta !== 'undefined' && (import.meta as any).env) || (typeof process !== 'undefined' && process.env) || {}
  const url = (env.VITE_AI_PROXY_URL as string | undefined) || ''
  return url.trim().replace(/\/+$/, '')
}

/**
 * Parses unstructured speech-to-text dictations or pasted workout notes
 * using the Cloudflare Worker running Llama 3.3 70B fp8-fast.
 */
export async function parseWorkoutSplitWithAi(text: string): Promise<Record<WeekdayId, ParsedDayRoutine>> {
  const proxyUrl = getAiProxyUrl()
  if (!proxyUrl) {
    throw new Error('AI Proxy URL is not configured. Please specify VITE_AI_PROXY_URL in your .env file.')
  }

  const trimmedText = text.trim()
  if (!trimmedText) {
    throw new Error('No workout text provided to parse.')
  }

  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), 90000)

  try {
    const response = await fetch(`${proxyUrl}/parse-split`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: trimmedText }),
      signal: controller.signal,
    })

    clearTimeout(timeoutId)

    if (!response.ok) {
      const errBody = await response.json().catch(() => ({}))
      const msg = errBody?.details || errBody?.error || `HTTP ${response.status} from AI Proxy`
      throw new Error(`AI Parsing failed: ${msg}`)
    }

    const data = await response.json()
    if (!data?.days) {
      throw new Error('Invalid response structure received from AI Proxy.')
    }

    return mapAiResponseToWeeklySchedule(data.days)
  } catch (err: any) {
    clearTimeout(timeoutId)
    if (err.name === 'AbortError') {
      throw new Error('AI Proxy request timed out. Please check your network connection.')
    }
    throw err
  }
}

/**
 * Generates an optimal 7-day workout routine using the Cloudflare Worker
 * running Llama 3.3 70B fp8-fast.
 */
export async function generateWeeklySplitWithAi(params: GenerateSplitParams): Promise<Record<WeekdayId, ParsedDayRoutine>> {
  const proxyUrl = getAiProxyUrl()
  if (!proxyUrl) {
    throw new Error('AI Proxy URL is not configured. Please specify VITE_AI_PROXY_URL in your .env file.')
  }

  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), 90000)

  try {
    const response = await fetch(`${proxyUrl}/generate-split`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params),
      signal: controller.signal,
    })

    clearTimeout(timeoutId)

    if (!response.ok) {
      const errBody = await response.json().catch(() => ({}))
      const msg = errBody?.details || errBody?.error || `HTTP ${response.status} from AI Proxy`
      throw new Error(`AI Split Generation failed: ${msg}`)
    }

    const data = await response.json()
    if (!data?.days) {
      throw new Error('Invalid response structure received from AI Proxy.')
    }

    return mapAiResponseToWeeklySchedule(data.days)
  } catch (err: any) {
    clearTimeout(timeoutId)
    if (err.name === 'AbortError') {
      throw new Error('AI Proxy request timed out. Please check your network connection.')
    }
    throw err
  }
}

function sanitizeEstimate(raw: any): CalorieEstimate {
  const items: PhotoEstimatedItem[] = Array.isArray(raw?.items)
    ? raw.items
      .map((item: any) => ({
        name: String(item?.name || '').trim(),
        portion: String(item?.portion || '').trim(),
        calories: Number(item?.calories),
      }))
      .filter((item: PhotoEstimatedItem) => item.name && Number.isFinite(item.calories))
    : []
  const toNonNegative = (value: unknown) => (Number.isFinite(Number(value)) && Number(value) >= 0 ? Number(value) : 0)
  return {
    items,
    totalCalories: toNonNegative(raw?.totalCalories),
    totalProteinG: toNonNegative(raw?.totalProteinG),
    totalCarbsG: toNonNegative(raw?.totalCarbsG),
    totalFatG: toNonNegative(raw?.totalFatG),
  }
}

/**
 * Estimates calories and macros from a snapped meal photo using the Cloudflare
 * Worker running Llama 3.2 11B Vision Instruct.
 */
export async function estimateCaloriesFromImage(imageDataUri: string, retries = 1): Promise<CalorieEstimate> {
  const proxyUrl = getAiProxyUrl()
  if (!proxyUrl) {
    throw new Error('AI Proxy URL is not configured. Please specify VITE_AI_PROXY_URL in your .env file.')
  }
  if (!imageDataUri) {
    throw new Error('No photo provided to analyze.')
  }

  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), 60000)

  try {
    const response = await fetch(`${proxyUrl}/estimate-calories`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ image: imageDataUri }),
      signal: controller.signal,
    })

    clearTimeout(timeoutId)

    if (!response.ok) {
      const errBody = await response.json().catch(() => ({}))
      const msg = errBody?.details || errBody?.error || `HTTP ${response.status} from AI Proxy`
      throw new Error(`Calorie estimation failed: ${msg}`)
    }

    const data = await response.json()
    if (!data?.estimate) {
      throw new Error('Invalid response structure received from AI Proxy.')
    }

    return sanitizeEstimate(data.estimate)
  } catch (err: any) {
    clearTimeout(timeoutId)
    if (retries > 0 && err.name !== 'AbortError') {
      console.warn('[PulseFit AI] Calorie estimation attempt failed, retrying...', err?.message || err)
      return estimateCaloriesFromImage(imageDataUri, retries - 1)
    }
    if (err.name === 'AbortError') {
      throw new Error('Calorie estimation timed out. Please check your network connection and try again.')
    }
    throw err
  }
}
