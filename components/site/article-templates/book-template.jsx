"use client"

import * as React from "react"
import Image from "next/image"
import { BookOpen, Calendar, Building2 } from "lucide-react"

import { useDictionary, useLocale } from "@/lib/i18n/dictionary-context"
import { BlurFade, BorderBeam } from "@/components/ui/magic"
import { Button } from "@/components/ui"
import { formatDate } from "../cards/article-card"

export function BookTemplate({ article }) {
  const dict = useDictionary()
  const locale = useLocale()
  const date = formatDate(article.publishedAt, locale)

  return (
    <article className="mx-auto max-w-5xl">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <BlurFade inView delay={0.1}>
            <div className="sticky top-24">
              <div className="relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden rounded-md shadow-2xl shadow-black/40">
                <Image
                  src={article.cover}
                  alt={article.title}
                  fill
                  sizes="320px"
                  className="object-cover"
                />
                <div className="absolute inset-y-0 start-0 w-1.5 bg-gradient-to-r from-black/40 to-transparent" />
                <BorderBeam
                  size={200}
                  duration={10}
                  colorFrom="#fbbf24"
                  colorTo="#7c5cff"
                />
              </div>
              {article.buyUrl && (
                <Button
                  asChild
                  size="lg"
                  className="mt-6 w-full rounded-full"
                >
                  <a
                    href={article.buyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BookOpen className="me-2 h-4 w-4" />
                    {dict.actions.buy}
                  </a>
                </Button>
              )}
            </div>
          </BlurFade>
        </div>

        <div className="lg:col-span-7">
          <BlurFade inView delay={0.05}>
            <span className="rounded-full bg-accent-3/15 px-2.5 py-1 text-xs font-medium uppercase tracking-wider text-accent-3">
              {dict.content.types.book}
            </span>
          </BlurFade>

          <BlurFade inView delay={0.1}>
            <h1 className="mt-4 font-title text-4xl font-bold leading-tight text-balance sm:text-5xl">
              {article.title}
            </h1>
          </BlurFade>

          <BlurFade inView delay={0.15}>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
              {article.publisher && (
                <span className="inline-flex items-center gap-1.5">
                  <Building2 className="h-3.5 w-3.5" />
                  {article.publisher}
                </span>
              )}
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                <time dateTime={article.publishedAt}>{date}</time>
              </span>
              {article.pages && (
                <span className="inline-flex items-center gap-1.5">
                  <BookOpen className="h-3.5 w-3.5" />
                  {article.pages} {locale === "fa" ? "صفحه" : "pages"}
                </span>
              )}
            </div>
          </BlurFade>

          <BlurFade inView delay={0.2}>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {article.excerpt}
            </p>
          </BlurFade>

          <BlurFade inView delay={0.25}>
            <p className="mt-6 text-base leading-relaxed">{article.body}</p>
          </BlurFade>
        </div>
      </div>
    </article>
  )
}
