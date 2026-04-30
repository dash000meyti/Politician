"use client"

import * as React from "react"

export function HtmlDirection({ locale, dir }) {
  React.useEffect(() => {
    if (typeof document === "undefined") return
    const html = document.documentElement
    html.lang = locale
    html.dir = dir
  }, [locale, dir])
  return null
}
