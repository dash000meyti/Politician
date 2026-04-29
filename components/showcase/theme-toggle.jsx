"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui"
import { useMounted } from "@/hooks/use-mounted"

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const mounted = useMounted()

  const current = theme === "system" ? resolvedTheme : theme
  const next = current === "dark" ? "light" : "dark"

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} theme`}
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
