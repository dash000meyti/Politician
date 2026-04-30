"use client"

import * as React from "react"

import { useDictionary } from "@/lib/i18n/dictionary-context"
import { BlurFade, TextReveal, SpinningText } from "@/components/ui/magic"

export function Closing() {
  const dict = useDictionary()

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <BlurFade inView delay={0.05}>
        <TextReveal className="!font-title !text-3xl sm:!text-5xl lg:!text-6xl">
          {dict.sections.closing.headline}
        </TextReveal>
      </BlurFade>

      <BlurFade inView delay={0.2} className="mt-12 flex justify-center">
        <div className="relative h-32 w-32">
          <SpinningText
            radius={5}
            duration={20}
            className="text-foreground"
          >
            {`${dict.sections.closing.signature} • ${dict.sections.closing.signature} • `}
          </SpinningText>
        </div>
      </BlurFade>
    </section>
  )
}
