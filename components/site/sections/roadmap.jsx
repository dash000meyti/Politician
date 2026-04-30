"use client"

import * as React from "react"
import { Check, Clock, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { useDictionary } from "@/lib/i18n/dictionary-context"
import { BlurFade } from "@/components/ui/magic"
import { SectionHeading } from "./section-heading"

const STATUS_STYLE = {
  done: {
    icon: Check,
    chip: "bg-accent-2/15 text-accent-2 border-accent-2/30",
    dot: "bg-accent-2",
  },
  active: {
    icon: ArrowRight,
    chip: "bg-brand/15 text-brand border-brand/30",
    dot: "bg-brand animate-pulse",
  },
  upcoming: {
    icon: Clock,
    chip: "bg-muted text-muted-foreground border-border",
    dot: "bg-muted-foreground/40",
  },
}

export function Roadmap({ items }) {
  const dict = useDictionary()
  if (!items?.length) return null

  return (
    <section className="relative overflow-hidden border-y border-border/60 bg-muted/20 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Path"
          title={dict.sections.roadmap.title}
          subtitle={dict.sections.roadmap.subtitle}
        />

        <ol className="relative mt-14 space-y-6 ps-6 sm:ps-10">
          <span
            aria-hidden
            className="absolute inset-y-2 start-2 w-px bg-gradient-to-b from-brand via-accent-1 to-accent-2 sm:start-4"
          />
          {items.map((r, i) => {
            const style = STATUS_STYLE[r.status] ?? STATUS_STYLE.upcoming
            const Icon = style.icon
            return (
              <BlurFade key={r.id} inView delay={0.1 + i * 0.05}>
                <li className="relative flex gap-4">
                  <span
                    className={cn(
                      "absolute -start-[26px] flex h-4 w-4 items-center justify-center rounded-full ring-4 ring-background sm:-start-[34px]",
                      style.dot,
                    )}
                  />
                  <div className="flex-1 rounded-2xl border border-border/60 bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-title text-sm font-bold tabular-nums">
                        {r.year}
                      </span>
                      <span
                        className={cn(
                          "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider",
                          style.chip,
                        )}
                      >
                        <Icon className="h-3 w-3" />
                        {dict.sections.roadmap.status[r.status]}
                      </span>
                    </div>
                    <h3 className="mt-2 font-title text-base font-bold sm:text-lg">
                      {r.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {r.desc}
                    </p>
                  </div>
                </li>
              </BlurFade>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
