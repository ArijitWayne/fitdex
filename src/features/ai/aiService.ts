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
  isFood: boolean
  unrecognizedReason?: string
  foodName?: string
  mealType?: string
  time?: string
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

export function sanitizeEstimate(raw: any, fallbackTime?: string): CalorieEstimate {
  const items: PhotoEstimatedItem[] = Array.isArray(raw?.items)
    ? raw.items
      .map((item: any) => ({
        name: String(item?.name || '').trim(),
        portion: String(item?.portion || '').trim() || '1 serving',
        calories: Number(item?.calories),
      }))
      .filter((item: PhotoEstimatedItem) => item.name && Number.isFinite(item.calories) && item.calories > 0)
    : []
  const toNonNegative = (value: unknown) => (Number.isFinite(Number(value)) && Number(value) >= 0 ? Number(value) : 0)
  let totalCalories = toNonNegative(raw?.totalCalories)
  const totalProteinG = toNonNegative(raw?.totalProteinG)
  const totalCarbsG = toNonNegative(raw?.totalCarbsG)
  const totalFatG = toNonNegative(raw?.totalFatG)

  const itemCalSum = items.reduce((s, it) => s + it.calories, 0)
  if (itemCalSum > 0) {
    if (totalCalories === 0 || Math.abs(totalCalories - itemCalSum) > 25) {
      totalCalories = itemCalSum
    }
  }

  const macroCalories = Math.round(totalProteinG * 4 + totalCarbsG * 4 + totalFatG * 9)
  if (totalCalories === 0 && macroCalories > 0) {
    totalCalories = macroCalories
  }

  // Strict isFood determination:
  // Must NOT be explicitly false, and MUST have detected items or calories > 0
  const isExplicitlyNotFood = raw?.isFood === false
  const isFood = !isExplicitlyNotFood && (items.length > 0 || totalCalories > 0)

  const unrecognizedReason = typeof raw?.unrecognizedReason === 'string' && raw.unrecognizedReason.trim()
    ? raw.unrecognizedReason.trim()
    : (!isFood ? 'FitDex could not recognize any edible food in this photo.' : undefined)

  const foodName = typeof raw?.foodName === 'string' && raw.foodName.trim() ? raw.foodName.trim() : undefined
  const mealType = typeof raw?.mealType === 'string' && raw.mealType.trim() ? raw.mealType.trim() : undefined
  const time = typeof raw?.time === 'string' && raw.time.trim() ? raw.time.trim() : fallbackTime

  return {
    isFood,
    unrecognizedReason,
    foodName: isFood ? foodName : undefined,
    mealType: isFood ? mealType : undefined,
    time: isFood ? time : undefined,
    items: isFood ? items : [],
    totalCalories: isFood ? totalCalories : 0,
    totalProteinG: isFood ? totalProteinG : 0,
    totalCarbsG: isFood ? totalCarbsG : 0,
    totalFatG: isFood ? totalFatG : 0,
  }
}

/**
 * Estimates calories, food classification, and macros from a snapped meal photo
 * using the Cloudflare Worker running Llama 3.2 11B Vision Instruct.
 */
export async function estimateCaloriesFromImage(imageDataUri: string, localTime?: string, retries = 1): Promise<CalorieEstimate> {
  const proxyUrl = getAiProxyUrl()
  if (!proxyUrl) {
    throw new Error('AI Proxy URL is not configured. Please specify VITE_AI_PROXY_URL in your .env file.')
  }
  if (!imageDataUri) {
    throw new Error('No photo provided to analyze.')
  }

  const effectiveTime = localTime || new Intl.DateTimeFormat(undefined, { hour: 'numeric', minute: '2-digit' }).format(new Date())

  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), 60000)

  try {
    const response = await fetch(`${proxyUrl}/estimate-calories`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ image: imageDataUri, localTime: effectiveTime }),
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

    return sanitizeEstimate(data.estimate, effectiveTime)
  } catch (err: any) {
    clearTimeout(timeoutId)
    if (retries > 0 && err.name !== 'AbortError') {
      console.warn('[PulseFit AI] Calorie estimation attempt failed, retrying...', err?.message || err)
      return estimateCaloriesFromImage(imageDataUri, localTime, retries - 1)
    }
    if (err.name === 'AbortError') {
      throw new Error('Calorie estimation timed out. Please check your network connection and try again.')
    }
    throw err
  }
}
