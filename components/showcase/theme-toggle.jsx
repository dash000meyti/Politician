"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui"
import { useMounted } from "@/hooks/use-mounted"

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const mounted = useMounted()

  const current = mounted ? (theme === "system" ? resolvedTheme : theme) : null
  const next = current === "dark" ? "light" : "dark"
  const label = mounted ? `Switch to ${next} theme` : "Toggle theme"

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(next)}
      aria-label={label}
      className="h-8 w-8"
    >
      {mounted && current === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </Button>
  )
}
