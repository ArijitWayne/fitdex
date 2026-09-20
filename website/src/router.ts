import { useEffect, useState, useCallback } from 'react'

export type RoutePath = '/' | '/changelog'

function normalizePath(pathname: string): RoutePath {
  const clean = pathname.replace(/\/+$/, '')
  if (clean === '/changelog') return '/changelog'
  return '/'
}

export function useLocation() {
  const [pathname, setPathname] = useState<RoutePath>(() => {
    if (typeof window !== 'undefined') {
      return normalizePath(window.location.pathname)
    }
    return '/'
  })

  const [hash, setHash] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.hash
    }
    return ''
  })

  useEffect(() => {
    const handlePopState = () => {
      setPathname(normalizePath(window.location.pathname))
      setHash(window.location.hash)
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = useCallback((to: string) => {
    if (typeof window === 'undefined') return

    const [targetPath, targetHash] = to.split('#')
    const normalized = normalizePath(targetPath || window.location.pathname)
    const newHash = targetHash ? `#${targetHash}` : ''
    const fullUrl = `${normalized}${newHash}`

    if (window.location.pathname !== normalized || window.location.hash !== newHash) {
      window.history.pushState(null, '', fullUrl)
      setPathname(normalized)
      setHash(newHash)
    }

    if (newHash) {
      setTimeout(() => {
        const el = document.getElementById(newHash.slice(1))
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          el.classList.remove('anchor-highlight')
          void el.offsetWidth
          el.classList.add('anchor-highlight')
          setTimeout(() => el.classList.remove('anchor-highlight'), 2200)
        }
      }, 60)
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [])

  return { pathname, hash, navigate }
}
