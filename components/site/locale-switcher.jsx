"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Languages } from "lucide-react"

import { cn } from "@/lib/utils"
import { locales, localeNames } from "@/lib/i18n/config"
import { useLocale } from "@/lib/i18n/dictionary-context"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Button,
} from "@/components/ui"

function swapLocaleInPath(pathname, current, next) {
  if (!pathname) return `/${next}`
  const segments = pathname.split("/")
  if (segments[1] === current) {
    segments[1] = next
    return segments.join("/") || `/${next}`
  }
  return `/${next}${pathname.startsWith("/") ? pathname : `/${pathname}`}`
}

export function LocaleSwitcher({ className }) {
  const locale = useLocale()
  const pathname = usePathname()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={cn("h-8 gap-1.5 px-2 text-xs font-medium", className)}
          aria-label="Switch language"
        >
          <Languages className="h-3.5 w-3.5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-18">
        {locales.map((l) => (
          <DropdownMenuItem key={l} asChild>
            <Link
              href={swapLocaleInPath(pathname, locale, l)}
              className={cn(
                "cursor-pointer text-sm",
                l === locale && "font-semibold",
                "flex justify-end"
              )}
            >
              {localeNames[l]}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
