"use client"

import * as React from "react"
import Image from "next/image"
import { Calendar, Tag, User } from "lucide-react"

import { useDictionary, useLocale } from "@/lib/i18n/dictionary-context"
import { BlurFade } from "@/components/ui/magic"
import { formatDate } from "../cards/article-card"

export function NewsTemplate({ article }) {
  const dict = useDictionary()
  const locale = useLocale()
  const date = formatDate(article.publishedAt, locale)

  return (
    <article className="mx-auto max-w-3xl">
      <BlurFade inView delay={0.05}>
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1 rounded-full border border-border/60 bg-muted px-2.5 py-1 font-medium uppercase tracking-wider">
            {dict.content.types.news}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3 w-3" />
            <time dateTime={article.publishedAt}>{date}</time>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <User className="h-3 w-3" />
            {article.author}
          </span>
        </div>
      </BlurFade>

      <BlurFade inView delay={0.1}>
        <h1 className="mt-4 font-title text-4xl font-bold leading-tight text-balance sm:text-5xl">
          {article.title}
        </h1>
      </BlurFade>

      <BlurFade inView delay={0.15}>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          {article.excerpt}
        </p>
      </BlurFade>

      <BlurFade inView delay={0.2}>
        <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl border border-border/60 bg-muted">
          <Image
            src={article.cover}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
            priority
          />
        </div>
      </BlurFade>

      <BlurFade inView delay={0.25}>
        <div className="prose prose-neutral dark:prose-invert mx-auto mt-10 max-w-none text-base leading-relaxed">
          <p>{article.body}</p>
        </div>
      </BlurFade>

      {article.tags?.length ? (
        <BlurFade inView delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center gap-2">
            <Tag className="h-4 w-4 text-muted-foreground" />
            {article.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border/60 bg-muted px-3 py-1 text-xs text-muted-foreground"
              >
                #{t}
              </span>
            ))}
          </div>
        </BlurFade>
      ) : null}
    </article>
  )
}
