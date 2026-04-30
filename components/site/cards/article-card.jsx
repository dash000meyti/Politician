"use client"

import * as React from "react"
import Image from "next/image"
import { Calendar, ArrowRight, Pin } from "lucide-react"

import { cn } from "@/lib/utils"
import { useDictionary, useLocale } from "@/lib/i18n/dictionary-context"
import { Badge } from "@/components/ui"
import { SiteLink } from "../site-link"

export function ArticleCard({ article, className, featured = false }) {
  const dict = useDictionary()
  const locale = useLocale()
  const typeLabel = dict.content.types[article.type]
  const date = formatDate(article.publishedAt, locale)

  return (
    <SiteLink
      href={`/content/${article.type}/${article.slug}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-foreground/30 hover:shadow-2xl hover:shadow-black/10",
        featured && "md:flex-row md:items-stretch",
        className,
      )}
    >
      <div
        className={cn(
          "relative aspect-[16/10] w-full overflow-hidden bg-muted",
          featured && "md:aspect-auto md:h-auto md:w-1/2",
        )}
      >
        <Image
          src={article.cover}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-3">
          <Badge variant="secondary" className="bg-background/80 backdrop-blur">
            {typeLabel}
          </Badge>
          {article.pinned && (
            <Badge className="bg-brand text-brand-foreground">
              <Pin className="me-1 h-3 w-3" /> Pin
            </Badge>
          )}
        </div>
      </div>
      <div
        className={cn(
          "flex flex-1 flex-col gap-3 p-5",
          featured && "md:p-7",
        )}
      >
        <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
          <Calendar className="h-3 w-3" />
          <time dateTime={article.publishedAt}>{date}</time>
        </div>
        <h3
          className={cn(
            "line-clamp-2 font-title text-base font-bold leading-snug text-foreground transition-colors group-hover:text-brand",
            featured && "text-xl md:text-2xl",
          )}
        >
          {article.title}
        </h3>
        <p
          className={cn(
            "line-clamp-2 text-sm text-muted-foreground",
            featured && "line-clamp-3",
          )}
        >
          {article.excerpt}
        </p>
        <div className="mt-auto flex items-center justify-between pt-2">
          {article.tags?.length ? (
            <div className="flex flex-wrap gap-1.5">
              {article.tags.slice(0, 2).map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-muted px-2 py-0.5 text-[10px] text-muted-foreground"
                >
                  #{t}
                </span>
              ))}
            </div>
          ) : (
            <span />
          )}
          <span className="inline-flex items-center gap-1 text-xs font-medium text-foreground/70 transition-colors group-hover:text-brand">
            {dict.actions.readMore}
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" />
          </span>
        </div>
      </div>
    </SiteLink>
  )
}

export function formatDate(iso, locale = "fa") {
  if (!iso) return ""
  try {
    return new Intl.DateTimeFormat(locale === "fa" ? "fa-IR" : "en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(new Date(iso))
  } catch {
    return iso
  }
}
