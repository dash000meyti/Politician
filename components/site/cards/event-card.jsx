"use client"

import * as React from "react"
import Image from "next/image"
import { CalendarDays, Clock, MapPin } from "lucide-react"

import { cn } from "@/lib/utils"
import { useDictionary, useLocale } from "@/lib/i18n/dictionary-context"
import { Badge } from "@/components/ui"
import { SiteLink } from "../site-link"
import { formatDate } from "./article-card"

export function EventCard({ article, className }) {
  const dict = useDictionary()
  const locale = useLocale()
  const date = formatDate(article.eventDate, locale)
  const isUpcoming = article.eventDate
    ? new Date(article.eventDate) > new Date()
    : false

  return (
    <SiteLink
      href={`/content/event/${article.slug}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent-1/60 hover:shadow-2xl",
        className,
      )}
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          src={article.cover}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute start-3 top-3">
          <Badge className="bg-accent-1 text-white">
            {dict.content.types.event}
          </Badge>
        </div>
        {isUpcoming && (
          <Badge className="absolute end-3 top-3 bg-accent-2/90 text-white">
            ●
          </Badge>
        )}
        <div className="absolute bottom-3 start-3 end-3 flex items-end justify-between gap-3 text-white">
          <div className="flex flex-col">
            <span className="text-[11px] uppercase tracking-wider opacity-80">
              {dict.content.types.event}
            </span>
            <h3 className="line-clamp-2 font-title text-lg font-bold leading-tight">
              {article.title}
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="grid gap-2 text-xs text-muted-foreground sm:grid-cols-2">
          <div className="flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5 text-accent-1" />
            <time dateTime={article.eventDate}>{date}</time>
          </div>
          {article.eventTime && (
            <div className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-accent-1" />
              {article.eventTime}
            </div>
          )}
          {article.venue && (
            <div className="col-span-2 flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-accent-1" />
              <span className="line-clamp-1">{article.venue}</span>
            </div>
          )}
        </div>
        <p className="line-clamp-2 text-xs text-muted-foreground">{article.excerpt}</p>
      </div>
    </SiteLink>
  )
}
