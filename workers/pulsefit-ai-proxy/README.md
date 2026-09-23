# PulseFit AI Proxy (Cloudflare Workers AI)

A lightweight, serverless AI proxy running Google's **Gemma 4 26B MoE** (`@cf/google/gemma-4-26b-a4b-it`) on Cloudflare Workers AI.

It provides structured JSON workout split generation and speech-to-text dictation parsing for the Fitdex / PulseFit application.

## Endpoints

- `GET /health`: Health check and model verification.
- `POST /parse-split`: Accepts `{ text: string }` and returns a structured 7-day schedule with phonetic error corrections.
- `POST /generate-split`: Accepts `{ goal, splitStyle, daysPerWeek, equipment, customInstructions }` and returns an optimal 7-day routine.

## Deployment

Deploying takes 30 seconds using Wrangler:

```bash
# 1. Log in to your Cloudflare account
npx wrangler login

# 2. Deploy to Cloudflare edge
npx wrangler deploy
```

Once deployed, copy the worker URL (e.g. `https://pulsefit-ai-proxy.<subdomain>.workers.dev`) and set it in your Fitdex `.env` file:

```env
VITE_AI_PROXY_URL=https://pulsefit-ai-proxy.<subdomain>.workers.dev
```
