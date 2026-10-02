declare const __FITDEX_APP_VERSION__: string

/** Build-time semantic version sourced directly from package.json by Vite. */
export const APP_VERSION = typeof __FITDEX_APP_VERSION__ !== 'undefined' ? __FITDEX_APP_VERSION__ : '2.0.1'

/** Current Android build number / versionCode. */
export const APP_BUILD_NUMBER = 7
