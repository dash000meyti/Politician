"use client"

import * as React from "react"
import Image from "next/image"
import { Play, Calendar } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui"
import { SiteLink } from "../site-link"
import { formatDate } from "./article-card"

export function VideoCard({ article, className }) {
  const date = formatDate(article.publishedAt)

  return (
    <SiteLink
      href={`/content/video/${article.slug}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-foreground/30 hover:shadow-2xl",
        className,
      )}
    >
      <div className="relative aspect-video w-full overflow-hidden bg-black">
        {article.aparatEmbedUrl ? (
          <iframe
            src={article.aparatEmbedUrl}
            title={article.title}
            allowFullScreen
            loading="lazy"
            className="pointer-events-none absolute inset-0 h-full w-full border-0 opacity-95 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
          />
        ) : (
          <Image
            src={article.cover}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
          />
        )}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-black shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-white">
            <Play className="h-5 w-5 fill-current ms-0.5" />
          </span>
        </div>
        {article.duration && (
          <Badge className="absolute bottom-3 inset-e-3 bg-black/70 text-white backdrop-blur">
            {article.duration}
          </Badge>
        )}
        <Badge variant="secondary" className="absolute inset-s-3 top-3 bg-background/80 backdrop-blur">
          ویدیو
        </Badge>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
          <Calendar className="h-3 w-3" />
          <time dateTime={article.publishedAt}>{date}</time>
        </div>
        <h3 className="line-clamp-2 font-title text-base font-bold leading-snug text-foreground transition-colors group-hover:text-brand">
          {article.title}
        </h3>
        <p className="line-clamp-2 text-xs text-muted-foreground">{article.excerpt}</p>
      </div>
    </SiteLink>
  )
}
