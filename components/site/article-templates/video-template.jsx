"use client"

import * as React from "react"
import { Calendar, User, Clock } from "lucide-react"

import { useDictionary, useLocale } from "@/lib/i18n/dictionary-context"
import { BlurFade, HeroVideoDialog } from "@/components/ui/magic"
import { formatDate } from "../cards/article-card"

export function VideoTemplate({ article }) {
  const dict = useDictionary()
  const locale = useLocale()
  const date = formatDate(article.publishedAt, locale)

  return (
    <article className="mx-auto max-w-4xl">
      <BlurFade inView delay={0.05}>
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span className="rounded-full bg-accent-1/15 px-2.5 py-1 font-medium uppercase tracking-wider text-accent-1">
            {dict.content.types.video}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3 w-3" />
            <time dateTime={article.publishedAt}>{date}</time>
          </span>
          {article.duration && (
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3 w-3" />
              {article.duration}
            </span>
          )}
          <span className="inline-flex items-center gap-1.5">
            <User className="h-3 w-3" />
            {article.author}
          </span>
        </div>
      </BlurFade>

      <BlurFade inView delay={0.1}>
        <h1 className="mt-4 font-title text-3xl font-bold leading-tight text-balance sm:text-4xl">
          {article.title}
        </h1>
      </BlurFade>

      <BlurFade inView delay={0.18}>
        <div className="relative mt-8">
          <HeroVideoDialog
            animationStyle="from-center"
            videoSrc={article.videoUrl ?? "https://www.youtube.com/embed/dQw4w9WgXcQ"}
            thumbnailSrc={article.cover}
            thumbnailAlt={article.title}
            className="overflow-hidden rounded-2xl border border-border/60"
          />
        </div>
      </BlurFade>

      <BlurFade inView delay={0.25}>
        <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
          {article.excerpt}
        </p>
        <p className="mt-4 text-base leading-relaxed">{article.body}</p>
      </BlurFade>
    </article>
  )
}
