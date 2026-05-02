"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { ArrowRight } from "lucide-react"

import { useDictionary, useLocale } from "@/lib/i18n/dictionary-context"
import { BlurFade } from "@/components/ui/magic"
import { Button } from "@/components/ui"
import { ArticleCard } from "../cards/article-card"
import { VideoCard } from "../cards/video-card"
import { BookCard } from "../cards/book-card"
import { EventCard } from "../cards/event-card"
import { localized } from "../site-link"
import { SectionHeading } from "./section-heading"

const TYPES = ["news", "video", "book", "event"]

function CardForType({ type, article }) {
  if (type === "video") return <VideoCard article={article} />
  if (type === "book") return <BookCard article={article} />
  if (type === "event") return <EventCard article={article} />
  return <ArticleCard article={article} />
}

export function LatestByType({ data }) {
  const dict = useDictionary()
  const locale = useLocale()
  const router = useRouter()

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow={dict.actions.viewAll}
          title={dict.sections.latest.title}
          subtitle={dict.sections.latest.subtitle}
        />
        <Button
          variant="outline"
          className="rounded-full"
          onClick={() => router.push(localized("/content", locale))}
        >
          {dict.actions.viewAll}
          <ArrowRight className="ms-1.5 h-4 w-4 rtl:rotate-180" />
        </Button>
      </div>

      <BlurFade inView delay={0.2} className="mt-10">
        <div className="flex w-full flex-col gap-14 sm:gap-16">
          {TYPES.map((t) => {
            const items = (data[t] ?? []).slice(0, 3)
            if (items.length === 0) return null

            return (
              <div key={t}>
                <h3 className="font-title text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                  {dict.sections.latest.tabs[t]}
                </h3>
                <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((a, i) => (
                    <BlurFade key={a.id} inView delay={0.05 + i * 0.05}>
                      <CardForType type={t} article={a} />
                    </BlurFade>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </BlurFade>
    </section>
  )
}
