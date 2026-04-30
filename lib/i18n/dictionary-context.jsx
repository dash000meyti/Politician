"use client"

import * as React from "react"

const DictionaryContext = React.createContext(null)

export function DictionaryProvider({ dictionary, locale, children }) {
  const value = React.useMemo(
    () => ({ dictionary, locale }),
    [dictionary, locale],
  )
  return (
    <DictionaryContext.Provider value={value}>
      {children}
    </DictionaryContext.Provider>
  )
}

export function useDictionary() {
  const ctx = React.useContext(DictionaryContext)
  if (!ctx) {
    throw new Error("useDictionary must be used within a DictionaryProvider")
  }
  return ctx.dictionary
}

export function useLocale() {
  const ctx = React.useContext(DictionaryContext)
  if (!ctx) {
    throw new Error("useLocale must be used within a DictionaryProvider")
  }
  return ctx.locale
}

export function useT(path) {
  const dict = useDictionary()
  return resolve(dict, path)
}

export function resolve(dict, path) {
  if (!dict || !path) return ""
  return path.split(".").reduce((acc, key) => {
    if (acc && typeof acc === "object" && key in acc) return acc[key]
    return undefined
  }, dict)
}
