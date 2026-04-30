"use client"

import * as React from "react"

import { useDictionary, useLocale } from "@/lib/i18n/dictionary-context"
import { persona } from "@/lib/persona"
import { BlurFade, OrbitingCircles, Ripple } from "@/components/ui/magic"
import { SocialIcon } from "../social-icon"
import { SectionHeading } from "./section-heading"

export function Social() {
  const dict = useDictionary()
  const locale = useLocale()
  const personaInfo = persona[locale] ?? persona.fa
  const inner = persona.social.slice(0, 3)
  const outer = persona.social.slice(3)

  return (
    <section className="relative overflow-hidden border-y border-border/60 bg-background py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="flex flex-col justify-center">
          <SectionHeading
            eyebrow="@"
            title={dict.sections.social.title}
            subtitle={dict.sections.social.subtitle}
          />
          <BlurFade inView delay={0.2} className="mt-6">
            <ul className="flex flex-wrap gap-2">
              {persona.social.map((s) => (
                <li key={s.id}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-background px-3 py-1.5 text-sm transition-all hover:-translate-y-0.5 hover:border-brand hover:shadow-md"
                  >
                    <SocialIcon
                      name={s.id}
                      size={13}
                      className="text-muted-foreground group-hover:text-brand"
                    />
                    <span className="text-xs font-medium">{s.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </BlurFade>
        </div>

        <div className="relative flex h-80 items-center justify-center sm:h-96">
          <Ripple
            mainCircleSize={120}
            mainCircleOpacity={0.16}
            numCircles={6}
          />
          <span className="absolute z-10 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-brand to-accent-1 text-xl font-bold text-white shadow-2xl">
            {personaInfo.shortName.charAt(0)}
          </span>
          <OrbitingCircles iconSize={36} radius={130} duration={20}>
            {inner.map((s) => (
              <a
                key={s.id}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-full w-full items-center justify-center rounded-full border border-border/60 bg-background shadow-md transition-transform hover:scale-110"
              >
                <SocialIcon name={s.id} size={14} />
              </a>
            ))}
          </OrbitingCircles>
          <OrbitingCircles
            iconSize={32}
            radius={185}
            duration={28}
            reverse
          >
            {outer.map((s) => (
              <a
                key={s.id}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-full w-full items-center justify-center rounded-full border border-border/60 bg-background shadow-md transition-transform hover:scale-110"
              >
                <SocialIcon name={s.id} size={13} />
              </a>
            ))}
          </OrbitingCircles>
        </div>
      </div>
    </section>
  )
}
