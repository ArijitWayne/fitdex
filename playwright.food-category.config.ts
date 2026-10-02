import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './tests/responsive',
  testMatch: 'food-category-responsive.spec.ts',
  timeout: 120_000,
  fullyParallel: false,
  reporter: 'line',
  use: {
    baseURL: 'http://127.0.0.1:4178',
    browserName: 'chromium',
    colorScheme: 'dark',
    locale: 'en-US',
    reducedMotion: 'no-preference',
  },
  webServer: {
    command: 'npm run dev -- --host 127.0.0.1 --port 4178 --strictPort',
    url: 'http://127.0.0.1:4178/tests/fixtures/food-category.html',
    reuseExistingServer: false,
    timeout: 120_000,
  },
})
