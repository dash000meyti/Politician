"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Newspaper, Video, BookOpen, Calendar, Layers } from "lucide-react"

import { cn } from "@/lib/utils"
import { useDictionary, useLocale } from "@/lib/i18n/dictionary-context"
import { localized } from "./site-link"

const TYPES = [
  { id: "all", icon: Layers, href: "/content" },
  { id: "news", icon: Newspaper, href: "/content/news" },
  { id: "video", icon: Video, href: "/content/video" },
  { id: "book", icon: BookOpen, href: "/content/book" },
  { id: "event", icon: Calendar, href: "/content/event" },
]

export function ContentFilter({ active = "all" }) {
  const dict = useDictionary()
  const locale = useLocale()
  const router = useRouter()

  return (
    <div className="flex flex-wrap items-center gap-2">
      {TYPES.map((t) => {
        const Icon = t.icon
        const isActive = t.id === active
        const label =
          t.id === "all"
            ? dict.content.filterAll
            : dict.content.types[t.id]
        return (
          <button
            key={t.id}
            type="button"
            onClick={() => router.push(localized(t.href, locale))}
            className={cn(
              "group inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all",
              isActive
                ? "border-foreground bg-foreground text-background shadow-sm"
                : "border-border bg-background text-muted-foreground hover:border-foreground/40 hover:text-foreground",
            )}
          >
            <Icon className="h-3.5 w-3.5" />
            {label}
          </button>
        )
      })}
    </div>
  )
}
