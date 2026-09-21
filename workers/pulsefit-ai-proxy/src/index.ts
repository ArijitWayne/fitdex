export interface Env {
  AI: any
}

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

// Two purpose-picked models, no fallback chain, no shared "primary" across routes.
// TEXT_MODEL (workout parsing/generation): Llama 3.3 70B fp8-fast — no thinking
// mode to fight, proven fast (~10-18s) and accurate on real dictation in testing.
// Gemma 4 26B was tried here first but its thinking mode made it too slow for
// interactive use (15-25s+) even with chat_template_kwargs.enable_thinking=false
// fighting it; Llama needs no such workaround since it never reasons in the
// first place.
// VISION_MODEL (snap-to-calorie): Llama 3.2 11B Vision Instruct — multimodal
// image input is a hard requirement here, and this model is both fast (~9s)
// and was the more accurate of the candidates tested (correctly identified
// tofu that Gemma misread as salmon on the same test photo).
const TEXT_MODEL = '@cf/meta/llama-3.3-70b-instruct-fp8-fast'
const VISION_MODEL = '@cf/meta/llama-3.2-11b-vision-instruct'

const SYSTEM_PARSE_PROMPT = `You are an expert fitness program architect and routine parser.
Your task is to parse unstructured speech dictations, notes, or workout split text into a clean 7-day workout schedule (Monday through Sunday).

DIRECT OUTPUT ONLY:
Do NOT output chain-of-thought, reasoning, or thinking blocks. Output ONLY the raw JSON object.

CRITICAL PHONETIC & SPEECH ERROR CORRECTIONS:
Voice dictation frequently misrecognizes exercise terminology. You MUST correct phonetic homophones:
- "tumble / tumble press" -> "dumbbell / dumbbell press"
- "leg breast / breast" -> "leg press / press"
- "face pools / pools" -> "face pull / pull"
- "bas and girls / girls" -> "biceps curls / curl"
- "bas" -> "biceps"
- "landline / landline press" -> "landmine / landmine press"
- "dead lift" -> "deadlift"
- "flies" -> "fly"
- "abs with cable" -> "cable abs crunch"

SETS & REPS EXTRACTION REQUIREMENTS:
You MUST accurately detect and extract the planned sets and reps for each exercise:
- If sets and reps are specified (e.g. "4 sets of 10 reps", "3x12", "5x5", "3 sets to failure", "4 sets of 8-10 reps", "12 reps"), extract:
  "sets": integer (e.g. 4), "reps": string (e.g. "10", "8-10", "to failure").
- If only sets are mentioned (e.g. "4 sets of Bench Press"), set "sets": 4, "reps": "12".
- If only reps are mentioned (e.g. "Bench Press 10 reps"), set "sets": 3, "reps": "10".
- If neither is mentioned, default "sets": 3, "reps": "12".

RULES:
1. Divide the routine into Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.
2. If a day is described as a rest day (e.g. "Wednesday will be the rest of the day", "rest", "off day") or not mentioned, set "isRest": true and "exercises": [].
3. For each active day, provide an appropriate title (e.g. "Push Day", "Legs", "Upper Body") and populate the "exercises" array.
4. Output MUST strictly adhere to the JSON schema.

STRICT JSON SCHEMA:
{
  "monday": { "title": "Push Day", "isRest": false, "exercises": [ { "name": "Incline Dumbbell Bench Press", "sets": 3, "reps": "12" } ] },
  "tuesday": { "title": "Leg Day", "isRest": false, "exercises": [ ... ] },
  "wednesday": { "title": "Rest Day", "isRest": true, "exercises": [] },
  "thursday": { "title": "Pull Day", "isRest": false, "exercises": [ ... ] },
  "friday": { "title": "Upper Day", "isRest": false, "exercises": [ ... ] },
  "saturday": { "title": "Rest Day", "isRest": true, "exercises": [] },
  "sunday": { "title": "Rest Day", "isRest": true, "exercises": [] }
}`

const SYSTEM_GENERATE_PROMPT = `You are an elite strength & conditioning coach.
Generate an optimal, evidence-based 7-day workout routine schedule for Monday through Sunday.
Ensure rest days match the required training days per week.
Extract and include sets (number) and reps (string) for each exercise.
Output MUST be ONLY valid raw JSON adhering strictly to the schema with NO markdown code fences, NO explanation, and NO preamble.

STRICT JSON SCHEMA:
{
  "monday": { "title": "Push (Chest & Triceps)", "isRest": false, "exercises": [ { "name": "Barbell Bench Press", "sets": 3, "reps": "8-12" } ] },
  "tuesday": { "title": "Pull (Back & Biceps)", "isRest": false, "exercises": [ ... ] },
  "wednesday": { "title": "Rest / Recovery", "isRest": true, "exercises": [] },
  "thursday": { ... },
  "friday": { ... },
  "saturday": { ... },
  "sunday": { ... }
}`

const SYSTEM_CALORIE_PROMPT = `You are a nutrition estimation assistant for a fitness app. A user has photographed a meal or snack.

TASK:
Identify every distinct food item visible in the photo. For each item, estimate a realistic portion size and its calories, using visual cues (plate/bowl/cup size, relative proportions) to judge quantity. Then compute totals across all items.

RULES:
1. List each distinct food separately — do not merge different foods into one line.
2. Portion estimates should read naturally (e.g. "150g", "1 cup", "2 slices", "1 medium").
3. Calories and macros are estimates from typical nutrition data for that food and portion — be reasonable, not overly precise.
4. If the photo contains no identifiable food, return an empty "items" array and zero totals.
5. Output MUST be ONLY raw JSON, no markdown code fences, no explanation, no preamble.

STRICT JSON SCHEMA:
{
  "items": [ { "name": "Grilled Chicken Breast", "portion": "150g", "calories": 250 } ],
  "totalCalories": 250,
  "totalProteinG": 40,
  "totalCarbsG": 5,
  "totalFatG": 8
}`

function parseCalorieMarkdownFallback(text: string): any {
  const items: Array<{ name: string; portion: string; calories: number }> = []
  const lines = text.split('\n').map((l) => l.trim()).filter(Boolean)

  for (const line of lines) {
    if (/total/i.test(line)) continue
    const calMatch = line.match(/(\d+)\s*(?:kcal|cal|calories)/i)
    if (calMatch) {
      const calories = parseInt(calMatch[1], 10)
      const name = line.replace(/^[*\-•\d.]+\s*/, '').split(/[:–-]/)[0].replace(/\([^)]+\)/, '').trim()
      const portionMatch = line.match(/\(([^)]+)\)/) || line.match(/(\d+\s*(?:g|oz|cup|slice|piece|medium|bowl|plate)s?)/i)
      const portion = portionMatch ? portionMatch[1].trim() : '1 serving'
      if (name && !Number.isNaN(calories)) {
        items.push({ name, portion, calories })
      }
    }
  }

  const totalCalMatch = text.match(/total\s*(?:calories)?[:\s]+~?\s*(\d+)/i) || text.match(/(\d+)\s*(?:kcal|calories)\s*(?:total)?/i)
  const proteinMatch = text.match(/protein[:\s]+~?\s*(\d+)\s*g/i) || text.match(/(\d+)\s*g\s*protein/i)
  const carbsMatch = text.match(/carbs?[:\s]+~?\s*(\d+)\s*g/i) || text.match(/(\d+)\s*g\s*carb/i)
  const fatMatch = text.match(/fat[:\s]+~?\s*(\d+)\s*g/i) || text.match(/(\d+)\s*g\s*fat/i)

  const totalCalories = totalCalMatch ? parseInt(totalCalMatch[1], 10) : items.reduce((s, i) => s + i.calories, 0)
  const totalProteinG = proteinMatch ? parseInt(proteinMatch[1], 10) : 0
  const totalCarbsG = carbsMatch ? parseInt(carbsMatch[1], 10) : 0
  const totalFatG = fatMatch ? parseInt(fatMatch[1], 10) : 0

  if (items.length > 0 || totalCalories > 0) {
    return { items, totalCalories, totalProteinG, totalCarbsG, totalFatG }
  }

  return null
}

function cleanJsonOutput(raw: any): any {
  if (typeof raw === 'object' && raw !== null) {
    if (raw.items || raw.monday || raw.totalCalories !== undefined) return raw
    if (raw.response && typeof raw.response === 'object') return raw.response
  }

  const rawStr = typeof raw === 'string' ? raw : (raw?.response || raw?.choices?.[0]?.message?.content || '')
  let cleaned = String(rawStr || '').trim()

  // 1. Extract content within ```json ... ``` or ``` ... ``` if present
  const codeBlockMatch = cleaned.match(/```(?:json)?\s*([\s\S]*?)\s*```/)
  if (codeBlockMatch && codeBlockMatch[1]) {
    cleaned = codeBlockMatch[1].trim()
  }

  // 2. Direct JSON parse
  try {
    return JSON.parse(cleaned)
  } catch {}

  // 3. Find outermost { ... }
  const firstBrace = cleaned.indexOf('{')
  const lastBrace = cleaned.lastIndexOf('}')
  const candidate = (firstBrace !== -1 && lastBrace > firstBrace)
    ? cleaned.slice(firstBrace, lastBrace + 1)
    : cleaned

  try {
    return JSON.parse(candidate)
  } catch {}

  // 4. Sanitize candidate JSON (comments, trailing commas, numbers with units, single quotes, unquoted keys)
  const repaired = candidate
    .replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '$1')
    .replace(/,\s*([}\]])/g, '$1')
    .replace(/:\s*~?\s*(\d+(?:\.\d+)?)\s*(?:kcal|cal|calories|grams?|g|mg|oz)\b/gi, ': $1')
    .replace(/'([^'\\]*(?:\\.[^'\\]*)*)'/g, '"$1"')
    .replace(/([{,]\s*)([a-zA-Z_][a-zA-Z0-9_]*)\s*:/g, '$1"$2":')

  try {
    return JSON.parse(repaired)
  } catch {}

  // 5. Fallback: Parse markdown list / prose if model responded without valid JSON
  const fallback = parseCalorieMarkdownFallback(rawStr)
  if (fallback) return fallback

  throw new Error('Unable to extract valid JSON from model response')
}

// When the completion looks like JSON, Workers AI parses `response` into an object
// directly (leaving the raw string on `choices[0].message.content`) — content can
// legitimately be a string OR an already-parsed object, never assume either.
function isEmptyModelContent(content: unknown): boolean {
  if (content === null || content === undefined) return true
  return typeof content === 'string' && content.trim().length <= 10
}

async function runModel(env: Env, messages: any[]): Promise<any> {
  const res = await env.AI.run(TEXT_MODEL as any, {
    messages,
    max_tokens: 3000,
    temperature: 0.1,
  })

  const content =
    res?.response ??
    res?.choices?.[0]?.message?.content ??
    (typeof res === 'string' ? res : null)

  if (isEmptyModelContent(content)) {
    throw new Error('AI model returned an empty response. Please try again.')
  }

  return cleanJsonOutput(content)
}

// llama-3.2-11b-vision-instruct uses Cloudflare's bespoke vision schema: plain-text
// messages plus a top-level `image` field (raw base64, no data-URI prefix) — not
// the OpenAI-style image_url content-part format some other Workers AI models use.
async function estimateCaloriesFromImage(env: Env, imageDataUri: string): Promise<any> {
  const rawBase64 = imageDataUri.replace(/^data:image\/\w+;base64,/, '')
  const res = await env.AI.run(VISION_MODEL as any, {
    // Llama 3.2 11B Vision is optimized for a single user turn with the image.
    // Putting the entire prompt in the user turn avoids markdown prose drift.
    messages: [
      { role: 'system', content: 'You are a nutrition estimation assistant for a fitness app. Respond with strict JSON only — no markdown, no headings, no explanation.' },
      { role: 'user', content: SYSTEM_CALORIE_PROMPT },
    ],
    image: rawBase64,
    max_tokens: 2048,
    temperature: 0.1,
  })

  const content =
    res?.response ??
    res?.choices?.[0]?.message?.content ??
    (typeof res === 'string' ? res : null)

  if (isEmptyModelContent(content)) {
    throw new Error('AI model returned an empty response. Please try again.')
  }

  return cleanJsonOutput(content)
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS_HEADERS })
    }

    const url = new URL(request.url)

    // Health check
    if (request.method === 'GET' && (url.pathname === '/' || url.pathname === '/health')) {
      return new Response(
        JSON.stringify({ status: 'ok', service: 'pulsefit-ai-proxy', textModel: TEXT_MODEL, visionModel: VISION_MODEL }),
        { headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } }
      )
    }

    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      })
    }

    try {
      const body = (await request.json().catch(() => ({}))) as any

      if (url.pathname === '/parse-split') {
        const text = String(body.text || '').trim()
        if (!text) {
          return new Response(JSON.stringify({ error: 'Missing required field: text' }), {
            status: 400,
            headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
          })
        }

        const messages = [
          { role: 'system', content: SYSTEM_PARSE_PROMPT },
          { role: 'user', content: `Please parse this workout dictation into the required JSON schema, extracting all exercises, sets, and reps:\n\n${text}` },
        ]

        const parsedData = await runModel(env, messages)
        return new Response(JSON.stringify({ success: true, days: parsedData }), {
          headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
        })
      }

      if (url.pathname === '/generate-split') {
        const goal = body.goal || 'hypertrophy'
        const splitStyle = body.splitStyle || 'ppl'
        const daysPerWeek = Number(body.daysPerWeek) || 5
        const equipment = body.equipment || 'full_gym'
        const customInstructions = body.customInstructions || ''

        const userPrompt = `Requirements:
- Goal: ${goal.toUpperCase()}
- Split Style: ${splitStyle.toUpperCase()}
- Active Training Days: ${daysPerWeek} (the other ${7 - daysPerWeek} days must be rest days)
- Equipment: ${equipment}
${customInstructions ? `- Custom Notes: ${customInstructions}` : ''}`

        const messages = [
          { role: 'system', content: SYSTEM_GENERATE_PROMPT },
          { role: 'user', content: userPrompt },
        ]

        const generatedData = await runModel(env, messages)
        return new Response(JSON.stringify({ success: true, days: generatedData }), {
          headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
        })
      }

      if (url.pathname === '/estimate-calories') {
        const image = String(body.image || '').trim()
        if (!image) {
          return new Response(JSON.stringify({ error: 'Missing required field: image' }), {
            status: 400,
            headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
          })
        }

        const estimate = await estimateCaloriesFromImage(env, image)
        return new Response(JSON.stringify({ success: true, estimate }), {
          headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
        })
      }

      return new Response(JSON.stringify({ error: `Not found: ${url.pathname}` }), {
        status: 404,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      })
    } catch (err: any) {
      console.error('[PulseFit AI Error]:', err)
      return new Response(
        JSON.stringify({ error: 'AI processing failed', details: err?.message || String(err) }),
        { status: 500, headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } }
      )
    }
  },
}
