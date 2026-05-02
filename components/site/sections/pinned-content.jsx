"use client"

import * as React from "react"

import { useDictionary } from "@/lib/i18n/dictionary-context"
import { BlurFade, BorderBeam } from "@/components/ui/magic"
import { ArticleCard } from "../cards/article-card"
import { SectionHeading } from "./section-heading"

export function PinnedContent({ articles }) {
  const dict = useDictionary()
  if (!articles?.length) return null

  const [featured, ...rest] = articles

  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <SectionHeading
        title={dict.sections.pinned.title}
        subtitle={dict.sections.pinned.subtitle}
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        <BlurFade inView delay={0.1} className="lg:col-span-2">
          <div className="relative h-full overflow-hidden rounded-2xl">
            <ArticleCard article={featured} featured className="h-full" />
            <BorderBeam
              size={300}
              duration={12}
              colorFrom="#7c5cff"
              colorTo="#34d399"
            />
          </div>
        </BlurFade>
        <div className="grid gap-5">
          {rest.slice(0, 2).map((a, i) => (
            <BlurFade key={a.id} inView delay={0.15 + i * 0.05}>
              <ArticleCard article={a} />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}
