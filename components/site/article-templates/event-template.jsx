"use client"

import * as React from "react"
import Image from "next/image"
import { CalendarDays, Clock, MapPin } from "lucide-react"

import { BlurFade } from "@/components/ui/magic"
import { Button } from "@/components/ui"
import { formatDate } from "../cards/article-card"

export function EventTemplate({ article }) {
  const eventDate = formatDate(article.eventDate)

  return (
    <article className="mx-auto max-w-5xl">
      <BlurFade inView delay={0.05}>
        <div className="relative aspect-[21/9] overflow-hidden rounded-3xl border border-border/60">
          <Image
            src={article.cover}
            alt={article.title}
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-10">
            <span className="rounded-full bg-accent-1 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider">
              رویداد
            </span>
            <h1 className="mt-3 font-title text-3xl font-bold leading-tight text-balance sm:text-5xl">
              {article.title}
            </h1>
          </div>
        </div>
      </BlurFade>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <BlurFade inView delay={0.15}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {article.excerpt}
            </p>
            <p className="mt-6 text-base leading-relaxed">{article.body}</p>
          </BlurFade>
        </div>

        <BlurFade inView delay={0.2}>
          <aside className="sticky top-24 flex flex-col gap-4 rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
            <div>
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                زمان
              </div>
              <div className="mt-1.5 flex items-center gap-2 font-title text-base font-semibold">
                <CalendarDays className="h-4 w-4 text-accent-1" />
                <time dateTime={article.eventDate}>{eventDate}</time>
              </div>
              {article.eventTime && (
                <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  {article.eventTime}
                </div>
              )}
            </div>

            {article.venue && (
              <div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  مکان
                </div>
                <div className="mt-1.5 flex items-start gap-2 font-title text-base font-semibold">
                  <MapPin className="h-4 w-4 text-accent-1 shrink-0 mt-0.5" />
                  <span>{article.venue}</span>
                </div>
              </div>
            )}

            {article.registerUrl && (
              <Button asChild size="lg" className="mt-2 rounded-full">
                <a
                  href={article.registerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ثبت‌نام
                </a>
              </Button>
            )}
          </aside>
        </BlurFade>
      </div>
    </article>
  )
}
