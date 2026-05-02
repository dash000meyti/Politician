"use client"

import * as React from "react"

import { BlurFade, BorderBeam } from "@/components/ui/magic"
import { ArticleCard } from "../cards/article-card"
import { BookCard } from "../cards/book-card"
import { EventCard } from "../cards/event-card"
import { VideoCard } from "../cards/video-card"
import { SectionHeading } from "./section-heading"

export function PinnedContent({ items }) {
  const news = items?.news
  const book = items?.book
  const event = items?.event
  const videos = items?.videos ?? []

  if (!news && !book && !event && videos.length === 0) return null

  const [v1, v2] = videos

  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <SectionHeading
        title="محتوای ویژه"
        subtitle="گزیده‌ای از مهم‌ترین گفته‌ها، رویدادها و موضع‌گیری‌های اخیر."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-3 lg:grid-rows-2 lg:auto-rows-fr">
        {news ? (
          <BlurFade
            inView
            delay={0.1}
            className="min-h-0 lg:col-start-1 lg:row-start-1 lg:row-span-2"
          >
            <div className="relative flex h-full min-h-0 flex-col overflow-hidden rounded-2xl">
              <ArticleCard
                article={news}
                className="h-full min-h-0"
                imageClassName="lg:aspect-[3/4]"
              />
              <BorderBeam
                size={300}
                duration={12}
                colorFrom="#7c5cff"
                colorTo="#34d399"
              />
            </div>
          </BlurFade>
        ) : null}

        {book ? (
          <BlurFade
            inView
            delay={0.15}
            className="min-h-0 lg:col-start-2 lg:row-start-1"
          >
            <BookCard article={book} className="h-full min-h-0" />
          </BlurFade>
        ) : null}

        {event ? (
          <BlurFade
            inView
            delay={0.2}
            className="min-h-0 lg:col-start-3 lg:row-start-1"
          >
            <EventCard article={event} className="h-full min-h-0" />
          </BlurFade>
        ) : null}

        {v1 ? (
          <BlurFade
            inView
            delay={0.25}
            className="min-h-0 lg:col-start-2 lg:row-start-2"
          >
            <VideoCard article={v1} className="h-full min-h-0" />
          </BlurFade>
        ) : null}

        {v2 ? (
          <BlurFade
            inView
            delay={0.3}
            className="min-h-0 lg:col-start-3 lg:row-start-2"
          >
            <VideoCard article={v2} className="h-full min-h-0" />
          </BlurFade>
        ) : null}
      </div>
    </section>
  )
}
