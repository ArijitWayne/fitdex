import type { ThemeFamily } from '../theme/theme'

export type BrandingFamily = 'spartan' | 'amazonian'

export interface BrandingAssets {
  logo: string
  icon: string
}

export const BRANDING_ASSETS: Record<BrandingFamily, BrandingAssets> = {
  spartan: {
    logo: '/branding/fitdex-logo-spartan.png',
    icon: '/branding/fitdex-icon-spartan.png',
  },
  amazonian: {
    logo: '/branding/fitdex-logo-amazonian.png',
    icon: '/branding/fitdex-icon-amazonian.png',
  },
}

export function brandingFamilyForTheme(family: ThemeFamily): BrandingFamily {
  return family === 'amazonians' ? 'amazonian' : 'spartan'
}

export function brandingForTheme(family: ThemeFamily): BrandingAssets {
  return BRANDING_ASSETS[brandingFamilyForTheme(family)]
}

export function syncFavicon(brandingFamily: BrandingFamily, documentRef: Document | undefined = typeof document === 'undefined' ? undefined : document) {
  if (!documentRef) return
  const icon = BRANDING_ASSETS[brandingFamily].icon
  let link = documentRef.querySelector<HTMLLinkElement>('link[rel="icon"]')
  if (!link) {
    link = documentRef.createElement('link')
    link.rel = 'icon'
    documentRef.head.append(link)
  }
  link.type = 'image/png'
  link.href = icon
}
