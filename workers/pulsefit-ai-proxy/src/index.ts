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
Voice dictation frequently misrecognizes exercise terminology. You MUST correct phonetic homophones and exact exercise mappings:
- "bayesian curl / bayesian curls / baysian / baisian" -> "Bayesian Cable Curl" (NEVER identify as "band curl" or generic curl)
- "cable crunch / cable crunches / rope crunch / rope crunches" -> "Kneeling Cable Abs Crunches" (NEVER identify as "Cable Kneeling Side Crunch")
- "tumble / tumble press" -> "dumbbell / dumbbell press"
- "leg breast / breast" -> "leg press / press"
- "face pools / pools" -> "face pull / pull"
- "bas and girls / girls" -> "biceps curls / curl"
- "bas" -> "biceps"
- "landline / landline press" -> "landmine / landmine press"
- "dead lift" -> "deadlift"
- "flies" -> "fly"
- "abs with cable" -> "Kneeling Cable Abs Crunches"

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

const SYSTEM_CALORIE_PROMPT = `You are an expert clinical dietitian, sports nutritionist, and computer vision food analyst for a fitness app.
A user has photographed an image expecting it to be a meal, snack, or drink.

STEP 1: FOOD VALIDATION (CRITICAL)
First, determine whether the photo actually contains edible food, a beverage, or a prepared meal.
- If the image depicts human body parts (hands, fingers, skin, face, arms, feet), clothes, pets, everyday non-food objects (phones, keys, remotes, laptops, furniture, gym equipment), or an empty/blurry scene with NO identifiable food:
  You MUST IMMEDIATELY classify it as NOT food.
  NEVER guess food on human hands, skin, or non-food objects (e.g., do NOT hallucinate "Grilled Chicken", "Meat", or "Bread" when looking at human fingers or skin).
  Set "isFood": false, provide a polite explanation in "unrecognizedReason", set "items": [], and set all totals to 0.

- Only if real, edible food or drink is clearly visible, set "isFood": true and proceed to Step 2.

STEP 2: FOOD RECOGNITION, MEAL CLASSIFICATION & ACCURATE NUTRITION ESTIMATION (ONLY IF FOOD IS PRESENT)
1. "foodName": A clear, concise title recognizing what this meal or beverage is (e.g. "Amul Lactose-Free Milk", "Grilled Chicken Breast with Jasmine Rice", "Dark Chocolate Snack", "Whey Protein Shake").
2. "mealType": A dynamic, context-aware meal classification based on the provided time:
   - "Late Night Snack" or "Midnight Snack" (food/drinks consumed 11:00 PM - 4:59 AM)
   - "Breakfast" (morning meal, 5:00 AM - 10:59 AM)
   - "Morning Snack" / "Brunch"
   - "Lunch" (midday meal, 11:00 AM - 2:59 PM)
   - "Afternoon Snack" / "Post-Workout Snack"
   - "Dinner" (evening meal, 6:00 PM - 10:59 PM)
   - "Beverage" / "Drink"
   CRITICAL TIME RULE: If the photo was captured past midnight or late at night (11:00 PM to 4:59 AM), NEVER call it "Breakfast". Eating a snack or drinking milk at 12 AM / midnight is a "Late Night Snack", "Midnight Snack", or "Snack".
3. "time": Return the formatted meal time string (e.g. "12:35 AM") based on the client local time provided in the request context.

4. PACKAGING & PORTION GROUNDING RULES:
   - If a commercial carton, bottle, can, or packaged item is visible (e.g. Amul milk, protein bar, yogurt cup, beverage can):
     * Check if package volume or net weight is visible (e.g. 200ml, 250ml, 500ml, 1L, 330ml, 50g, 100g).
     * If the user has poured a glass or cup, a standard drinking glass is ~200-250ml (do NOT charge the full 1000ml container unless they are drinking the whole carton).
     * If unopened or drinking directly from carton/bottle, use the container volume (e.g. 250ml tetra pack = 250ml).
   - If a plate or bowl is shown, estimate weight in grams using standard density benchmarks below.

5. STANDARD USDA NUTRITION DENSITY BENCHMARKS (USE THESE REALISTIC DENSITIES):
   - Milks & Dairy:
     * Whole milk (cow/buffalo): ~62-65 kcal per 100ml. Standard glass (250ml) = ~155 kcal (8g protein, 12g carbs, 8g fat).
     * Toned / 2% / Lactose-Free milk: ~50-52 kcal per 100ml. Standard glass (250ml) = ~130 kcal (8g protein, 12g carbs, 4.5g fat). Tetra pack (200ml) = ~104 kcal.
     * Skim / Non-fat milk: ~35 kcal per 100ml. Standard glass (250ml) = ~88 kcal (8.5g protein, 12g carbs, 0.5g fat).
     * Plain Greek yogurt (0% fat): ~59 kcal/100g (10g protein, 3.6g carbs, 0g fat). Whole Greek yogurt: ~100 kcal/100g.
     * Whey protein powder: 1 standard scoop (30g) = ~120 kcal (24g protein, 2g carbs, 1.5g fat).
     * Paneer / Indian Cottage Cheese: ~265 kcal/100g (18g protein, 4g carbs, 20g fat).
   - Meats & Proteins:
     * Cooked Chicken Breast (boneless, skinless): ~165 kcal per 100g (31g protein, 0g carbs, 3.6g fat). Palm-sized portion = ~150g (~250 kcal).
     * Cooked Chicken Thigh (skinless): ~209 kcal per 100g (26g protein, 0g carbs, 11g fat).
     * Cooked Lean Beef (90/10): ~215 kcal per 100g (26g protein, 0g carbs, 12g fat).
     * Cooked Salmon: ~206 kcal per 100g (22g protein, 0g carbs, 12g fat). Fillet = ~150g (~310 kcal).
     * Whole Egg (boiled/poached): ~72 kcal (6g protein, 0.5g carbs, 5g fat) per large egg.
     * Fried Egg (with 1 tsp oil/butter): ~115 kcal (6g protein, 0.5g carbs, 10g fat).
     * Tofu (firm): ~80 kcal per 100g (9g protein, 2g carbs, 5g fat).
   - Grains & Starches:
     * Cooked White/Brown Rice: ~130 kcal per 100g (2.7g protein, 28g carbs, 0.3g fat). 1 standard cooked cup (~160g) = ~210 kcal.
     * Cooked Pasta / Noodles: ~150 kcal per 100g (5g protein, 30g carbs, 1g fat). 1 cup (~140g) = ~210 kcal.
     * Roti / Chapati: 1 medium piece (40g) = ~115 kcal (3.5g protein, 20g carbs, 2.5g fat).
     * Bread: 1 standard slice (30g) = ~80 kcal (3g protein, 14g carbs, 1g fat).
     * Boiled/Baked Potato: ~87 kcal per 100g. Medium potato (~170g) = ~150 kcal.
     * Cooked Oatmeal (in water): ~70 kcal per 100g. 1 bowl (~240g) = ~165 kcal.
   - Hidden Cooking Oils & Fats (CRITICAL):
     * Cooking oil / Butter / Ghee = ~880-900 kcal per 100g.
     * 1 tablespoon (14g) = ~120 kcal (14g fat).
     * 1 teaspoon (5g) = ~45 kcal (5g fat).
     * For any sautéd, stir-fried, curry, or restaurant dish, ALWAYS account for 1-2 tsp (45-90 kcal) of cooking oil/butter.
   - Snacks & Common Foods:
     * Regular Pizza Slice: ~270 kcal (100g).
     * Cheeseburger: ~450-520 kcal.
     * Medium Banana: ~105 kcal (27g carbs).
     * Medium Apple: ~95 kcal (25g carbs).

6. ATWATER MACRO MATHEMATICAL INTEGRITY (THE 4-4-9 RULE):
   totalCalories MUST equal: Math.round(totalProteinG * 4 + totalCarbsG * 4 + totalFatG * 9).
   Ensure individual item calories in "items" sum up exactly to "totalCalories". Never output contradictory numbers.

STRICT JSON SCHEMA (WHEN FOOD IS DETECTED):
{
  "isFood": true,
  "foodName": "Amul Lactose-Free Milk",
  "mealType": "Late Night Snack",
  "time": "12:35 AM",
  "items": [ { "name": "Amul Lactose-Free Milk", "portion": "250ml", "calories": 130 } ],
  "totalCalories": 130,
  "totalProteinG": 8,
  "totalCarbsG": 12,
  "totalFatG": 5
}

STRICT JSON SCHEMA (WHEN NO FOOD IS DETECTED / BODY PART / OBJECT):
{
  "isFood": false,
  "unrecognizedReason": "No edible food detected. The photo appears to show a human hand or non-food object.",
  "items": [],
  "totalCalories": 0,
  "totalProteinG": 0,
  "totalCarbsG": 0,
  "totalFatG": 0
}`

function parseCalorieMarkdownFallback(text: string): any {
  // If the model output mentions no food, hand, fingers, skin, or non-food:
  if (/no\s*(?:food|edible|meal)|not\s*(?:a\s*)?food|hand|finger|skin|body\s*part|non-food|cannot\s*(?:identify|detect|find)\s*(?:any\s*)?food/i.test(text)) {
    return {
      isFood: false,
      unrecognizedReason: 'No edible food detected in the photo.',
      items: [],
      totalCalories: 0,
      totalProteinG: 0,
      totalCarbsG: 0,
      totalFatG: 0,
    }
  }

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

  if (items.length > 0 && totalCalories > 0) {
    return { isFood: true, items, totalCalories, totalProteinG, totalCarbsG, totalFatG }
  }

  return {
    isFood: false,
    unrecognizedReason: 'No edible food detected in the photo.',
    items: [],
    totalCalories: 0,
    totalProteinG: 0,
    totalCarbsG: 0,
    totalFatG: 0,
  }
}

function cleanJsonOutput(raw: any): any {
  let parsed: any = null

  if (typeof raw === 'object' && raw !== null) {
    if (raw.items || raw.monday || raw.totalCalories !== undefined || raw.isFood !== undefined) parsed = raw
    else if (raw.response && typeof raw.response === 'object') parsed = raw.response
  }

  if (!parsed) {
    const rawStr = typeof raw === 'string' ? raw : (raw?.response || raw?.choices?.[0]?.message?.content || '')
    let cleaned = String(rawStr || '').trim()

    // 1. Extract content within ```json ... ``` or ``` ... ``` if present
    const codeBlockMatch = cleaned.match(/```(?:json)?\s*([\s\S]*?)\s*```/)
    if (codeBlockMatch && codeBlockMatch[1]) {
      cleaned = codeBlockMatch[1].trim()
    }

    // 2. Direct JSON parse
    try {
      parsed = JSON.parse(cleaned)
    } catch {}

    // 3. Find outermost { ... }
    if (!parsed) {
      const firstBrace = cleaned.indexOf('{')
      const lastBrace = cleaned.lastIndexOf('}')
      const candidate = (firstBrace !== -1 && lastBrace > firstBrace)
        ? cleaned.slice(firstBrace, lastBrace + 1)
        : cleaned

      try {
        parsed = JSON.parse(candidate)
      } catch {}

      // 4. Sanitize candidate JSON (comments, trailing commas, numbers with units, single quotes, unquoted keys)
      if (!parsed) {
        const repaired = candidate
          .replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '$1')
          .replace(/,\s*([}\]])/g, '$1')
          .replace(/:\s*~?\s*(\d+(?:\.\d+)?)\s*(?:kcal|cal|calories|grams?|g|mg|oz)\b/gi, ': $1')
          .replace(/'([^'\\]*(?:\\.[^'\\]*)*)'/g, '"$1"')
          .replace(/([{,]\s*)([a-zA-Z_][a-zA-Z0-9_]*)\s*:/g, '$1"$2":')

        try {
          parsed = JSON.parse(repaired)
        } catch {}
      }
    }

    // 5. Fallback: Parse markdown list / prose if model responded without valid JSON
    if (!parsed) {
      const fallback = parseCalorieMarkdownFallback(rawStr)
      if (fallback) return fallback
      throw new Error('Unable to extract valid JSON from model response')
    }
  }

  // If this is a calorie response (has items or totalCalories or isFood), normalize isFood & reconcile calculations
  if (parsed && (Array.isArray(parsed.items) || parsed.totalCalories !== undefined || parsed.isFood !== undefined)) {
    const rawItems = Array.isArray(parsed.items) ? parsed.items : []
    const items = rawItems
      .map((it: any) => ({
        name: String(it?.name || '').trim(),
        portion: String(it?.portion || '').trim() || '1 serving',
        calories: Number(it?.calories) || 0,
      }))
      .filter((it: any) => it.name && it.calories > 0)

    let totalCalories = Number(parsed.totalCalories) || 0
    let totalProteinG = Math.max(0, Number(parsed.totalProteinG) || 0)
    let totalCarbsG = Math.max(0, Number(parsed.totalCarbsG) || 0)
    let totalFatG = Math.max(0, Number(parsed.totalFatG) || 0)

    const itemCalSum = items.reduce((s: number, i: any) => s + i.calories, 0)

    // Reconcile totalCalories with sum of individual items
    if (itemCalSum > 0) {
      if (totalCalories === 0 || Math.abs(totalCalories - itemCalSum) > 25) {
        totalCalories = itemCalSum
      }
    }

    // Macro-calorie integrity (Atwater calculation: 4*P + 4*C + 9*F)
    const macroCalories = Math.round(totalProteinG * 4 + totalCarbsG * 4 + totalFatG * 9)
    if (totalCalories === 0 && macroCalories > 0) {
      totalCalories = macroCalories
    }

    const isFood = parsed.isFood !== false && (items.length > 0 || totalCalories > 0)
    if (!isFood) {
      return {
        isFood: false,
        unrecognizedReason: parsed.unrecognizedReason || 'No edible food detected in the photo.',
        items: [],
        totalCalories: 0,
        totalProteinG: 0,
        totalCarbsG: 0,
        totalFatG: 0,
      }
    }

    return {
      isFood: true,
      foodName: typeof parsed.foodName === 'string' && parsed.foodName.trim() ? parsed.foodName.trim() : undefined,
      mealType: typeof parsed.mealType === 'string' && parsed.mealType.trim() ? parsed.mealType.trim() : undefined,
      time: typeof parsed.time === 'string' && parsed.time.trim() ? parsed.time.trim() : undefined,
      unrecognizedReason: undefined,
      items,
      totalCalories,
      totalProteinG,
      totalCarbsG,
      totalFatG,
    }
  }

  return parsed
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
async function estimateCaloriesFromImage(env: Env, imageDataUri: string, localTime?: string): Promise<any> {
  const rawBase64 = imageDataUri.replace(/^data:image\/\w+;base64,/, '')
  const timeContext = localTime ? `\n\nUSER CONTEXT:\nThe user snapped this photo at local time: ${localTime}. Use this time to accurately determine the "mealType" (e.g. past midnight / 12 AM is a "Late Night Snack" or "Midnight Snack", NEVER "Breakfast") and return "time": "${localTime}".` : ''
  const res = await env.AI.run(VISION_MODEL as any, {
    // Llama 3.2 11B Vision is optimized for a single user turn with the image.
    // Putting the entire prompt in the user turn avoids markdown prose drift.
    messages: [
      { role: 'system', content: 'You are an expert nutrition and meal classification assistant for a fitness app. You MUST first verify if the image contains actual edible food. If the image shows human body parts (hands, fingers, skin), animals, or non-food objects, you must return {"isFood": false, "unrecognizedReason": "...", "items": [], "totalCalories": 0, "totalProteinG": 0, "totalCarbsG": 0, "totalFatG": 0}. Respond with strict JSON only adhering to the schema — no markdown, no headings, no explanation.' },
      { role: 'user', content: SYSTEM_CALORIE_PROMPT + timeContext },
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
        const localTime = String(body.localTime || '').trim()
        if (!image) {
          return new Response(JSON.stringify({ error: 'Missing required field: image' }), {
            status: 400,
            headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
          })
        }

        const estimate = await estimateCaloriesFromImage(env, image, localTime)
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
