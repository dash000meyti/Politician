"use client"

import * as React from "react"
import Image from "next/image"
import { Quote } from "lucide-react"

import { cn } from "@/lib/utils"
import { BlurFade, Marquee } from "@/components/ui/magic"
import { SectionHeading } from "./section-heading"

function TestimonialCard({ t }) {
  return (
      <figure
      dir="rtl"
      className={cn(
        "relative mx-2 flex w-72 shrink-0 flex-col gap-3 rounded-2xl border border-border/60 bg-background p-5 shadow-sm sm:w-80",
      )}
    >
      <Quote className="h-4 w-4 text-brand opacity-60" />
      <blockquote className="text-sm leading-relaxed text-foreground/90">
        “{t.quote}”
      </blockquote>
      <figcaption className="mt-auto flex items-center gap-3">
        <div className="relative h-10 w-10 overflow-hidden rounded-full bg-muted">
          <Image
            src={t.avatar}
            alt={t.name}
            fill
            sizes="40px"
            className="object-cover"
          />
        </div>
        <div>
          <div className="text-sm font-semibold">{t.name}</div>
          <div className="text-[11px] text-muted-foreground">{t.role}</div>
        </div>
      </figcaption>
    </figure>
  )
}

export function Testimonials({ items }) {
  if (!items?.length) return null

  const half = Math.ceil(items.length / 2)
  const row1 = items.slice(0, half)
  const row2 = items.slice(half)

  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <SectionHeading
        align="center"
        title="نظر مخاطبین"
        subtitle="چیزی که مردم می‌گویند، اعتبار ما را می‌سازد."
      />

      <BlurFade inView delay={0.2} className="mt-12">
        <div
          dir="ltr"
          className="relative isolate w-full overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <Marquee className="[--duration:60s]" pauseOnHover repeat={6}>
            {row1.map((t) => (
              <TestimonialCard key={t.id} t={t} />
            ))}
          </Marquee>
          <Marquee
            className="mt-3 [--duration:75s]"
            pauseOnHover
            reverse
            repeat={6}
            animationDelay="calc(var(--duration) * -0.5)"
          >
            {row2.map((t) => (
              <TestimonialCard key={t.id} t={t} />
            ))}
          </Marquee>
        </div>
      </BlurFade>
    </section>
  )
}
