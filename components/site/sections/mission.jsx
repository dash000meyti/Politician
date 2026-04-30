"use client"

import * as React from "react"
import {
  Eye,
  Users,
  GraduationCap,
  Leaf,
  Briefcase,
  Scale,
} from "lucide-react"

import { useDictionary } from "@/lib/i18n/dictionary-context"
import { BlurFade, MagicCard } from "@/components/ui/magic"
import { SectionHeading } from "./section-heading"

const ICON = {
  Eye,
  Users,
  GraduationCap,
  Leaf,
  Briefcase,
  Scale,
}

export function Mission({ items }) {
  const dict = useDictionary()
  if (!items?.length) return null

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <SectionHeading
        align="center"
        eyebrow="Mission"
        title={dict.sections.mission.title}
        subtitle={dict.sections.mission.subtitle}
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((m, i) => {
          const Icon = ICON[m.icon] ?? Eye
          return (
            <BlurFade key={m.id} inView delay={0.1 + i * 0.05}>
              <MagicCard
                gradientColor="rgba(124, 92, 255, 0.18)"
                gradientFrom="#7c5cff"
                gradientTo="#ff5e62"
                className="h-full rounded-2xl"
              >
                <div className="flex h-full flex-col gap-4 p-6">
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-lg"
                    style={{
                      background:
                        "linear-gradient(135deg, #7c5cff 0%, #ff5e62 100%)",
                    }}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-title text-lg font-bold leading-tight">
                    {m.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {m.desc}
                  </p>
                </div>
              </MagicCard>
            </BlurFade>
          )
        })}
      </div>
    </section>
  )
}
