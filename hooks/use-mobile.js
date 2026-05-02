import * as React from "react"

const getServerSnapshot = () => false

export function useIsMobile(breakpoint = 768) {
  const mediaQuery = React.useMemo(
    () => `(max-width: ${breakpoint - 1}px)`,
    [breakpoint]
  )

  const subscribe = React.useCallback(
    (onChange) => {
      if (typeof window === "undefined") return () => {}
      const mql = window.matchMedia(mediaQuery)
      mql.addEventListener("change", onChange)
      return () => mql.removeEventListener("change", onChange)
    },
    [mediaQuery]
  )

  const getSnapshot = React.useCallback(() => {
    if (typeof window === "undefined") return false
    return window.matchMedia(mediaQuery).matches
  }, [mediaQuery])

  return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
