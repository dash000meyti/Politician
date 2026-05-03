"use client"

import * as React from "react"
import {
  Sparkles,
  BookOpen,
  Leaf,
  Users,
  Scale,
  Briefcase,
  ArrowRight,
} from "lucide-react"

import {
  BlurFade,
  AnimatedCircularProgressBar,
  ShineBorder,
} from "@/components/ui/magic"
import { Button } from "@/components/ui"
import { SectionHeading } from "./section-heading"

const ICON = { Sparkles, BookOpen, Leaf, Users, Scale, Briefcase }
const COLOR_HEX = {
  Sparkles: "#ff5e62",
  BookOpen: "#34d399",
  Leaf: "#fbbf24",
  Users: "#7c5cff",
  Scale: "#7c5cff",
  Briefcase: "#34d399",
}

export function Campaigns({ items }) {
  if (!items?.length) return null

  return (
    <section className="relative overflow-hidden border-y border-border/60 bg-gradient-to-br from-muted/20 via-background to-muted/30 px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="کمپین‌های فعال"
          subtitle="هر کمپین یک گام به سمت تغییری ملموس است."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((c, i) => {
            const Icon = ICON[c.icon] ?? Sparkles
            const hex = COLOR_HEX[c.icon] ?? "#7c5cff"
            return (
              <BlurFade key={c.id} inView delay={0.1 + i * 0.05}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border/60 bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-xl">
                  <ShineBorder
                    borderWidth={1}
                    duration={12}
                    shineColor={[hex, "#7c5cff", "#ff5e62"]}
                  />

                  <div className="flex items-start justify-between">
                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-xl text-white shadow"
                      style={{ background: hex }}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="relative h-16 w-16">
                      <AnimatedCircularProgressBar
                        max={100}
                        min={0}
                        value={c.progress}
                        gaugePrimaryColor={hex}
                        gaugeSecondaryColor="rgba(120,120,120,0.15)"
                        className="!size-16 !text-xs"
                      />
                    </div>
                  </div>

                  <h3 className="mt-5 font-title text-base font-bold leading-snug">
                    {c.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-muted-foreground">
                    {c.summary}
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <div className="text-[11px] text-muted-foreground">
                      پیشرفت: {c.progress}%
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-7 px-2 text-[11px]"
                    >
                      حمایت می‌کنم
                      <ArrowRight className="ms-1 h-3 w-3 rtl:rotate-180" />
                    </Button>
                  </div>
                </div>
              </BlurFade>
            )
          })}
        </div>
      </div>
    </section>
  )
}
