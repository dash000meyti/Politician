"use client"

import * as React from "react"
import { ArticleCard } from "./cards/article-card"
import { VideoCard } from "./cards/video-card"
import { BookCard } from "./cards/book-card"
import { EventCard } from "./cards/event-card"
import { BlurFade } from "@/components/ui/magic"

function CardForType({ type, article }) {
  if (type === "video") return <VideoCard article={article} />
  if (type === "book") return <BookCard article={article} />
  if (type === "event") return <EventCard article={article} />
  return <ArticleCard article={article} />
}

export function ContentGrid({ articles }) {
  if (!articles?.length) return null
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((a, i) => (
        <BlurFade key={a.id} inView delay={Math.min(0.05 + i * 0.04, 0.4)}>
          <CardForType type={a.type} article={a} />
        </BlurFade>
      ))}
    </div>
  )
}
