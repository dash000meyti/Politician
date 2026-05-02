"use client"

import * as React from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ArrowRight } from "lucide-react"

import { useDictionary, useLocale } from "@/lib/i18n/dictionary-context"
import { persona } from "@/lib/persona"
import { BlurFade, NumberTicker } from "@/components/ui/magic"
import { Button } from "@/components/ui"
import { localized } from "../site-link"
import { SectionHeading } from "./section-heading"

const STATS = [
  { key: "yearsLabel", value: 20, suffix: "+" },
  { key: "eventsLabel", value: 320, suffix: "" },
  { key: "campaignsLabel", value: 12, suffix: "" },
  { key: "speechesLabel", value: 180, suffix: "+" },
]

export function BioSnapshot() {
  const dict = useDictionary()
  const locale = useLocale()
  const router = useRouter()
  const personaInfo = persona[locale] ?? persona.fa

  return (
    <section className="relative overflow-hidden border-y border-border/60 bg-muted/30 py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 opacity-50 bg-grid-fade">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, oklch(0.5 0 0 / 0.15) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <BlurFade inView delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-brand/20 to-accent-1/20">
              <Image
                src={persona.hero.portrait}
                alt={persona.hero.portraitAlt[locale] ?? persona.hero.portraitAlt.fa}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover mix-blend-luminosity opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/0 to-transparent" />
            </div>
          </BlurFade>
        </div>

        <div className="flex flex-col justify-center lg:col-span-7">
          <SectionHeading
            eyebrow={dict.sections.bio.subtitle}
            title={dict.sections.bio.title}
          />

          <BlurFade inView delay={0.2}>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              {personaInfo.bio.slice(0, 2).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </BlurFade>

          <BlurFade inView delay={0.3}>
            <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {STATS.map((s) => (
                <div
                  key={s.key}
                  className="rounded-2xl border border-border/60 bg-background/60 p-4 backdrop-blur"
                >
                  <dd className="font-title text-3xl font-bold text-foreground">
                    <NumberTicker
                      value={s.value}
                      className="!text-foreground"
                    />
                    {s.suffix}
                  </dd>
                  <dt className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                    {dict.sections.bio.stats[s.key]}
                  </dt>
                </div>
              ))}
            </dl>
          </BlurFade>

          <BlurFade inView delay={0.4}>
            <Button
              size="lg"
              className="mt-8 w-fit rounded-full"
              onClick={() => router.push(localized("/about", locale))}
            >
              {dict.sections.bio.cta}
              <ArrowRight className="ms-1.5 h-4 w-4 rtl:rotate-180" />
            </Button>
          </BlurFade>
        </div>
      </div>
    </section>
  )
}
