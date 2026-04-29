"use client"

import { useState } from "react"

import { Button } from "@/components/ui"

export function CopyButton({ text, label = "Copy", className }) {
  const [copied, setCopied] = useState(false)

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(text || "")
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      const ta = document.createElement("textarea")
      ta.value = text || ""
      ta.style.position = "fixed"
      ta.style.top = "-9999px"
      document.body.appendChild(ta)
      ta.select()
      try {
        document.execCommand("copy")
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
      } catch {}
      document.body.removeChild(ta)
    }
  }

  return (
    <Button
      size="sm"
      variant="ghost"
      onClick={onCopy}
      aria-label={copied ? "Copied" : label}
      className={`h-7 px-2 text-[11px] font-medium ${className ?? ""}`}
    >
      {copied ? "Copied" : label}
    </Button>
  )
}
