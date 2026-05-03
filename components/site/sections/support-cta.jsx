"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Heart, Sparkles } from "lucide-react"

import { BlurFade, WarpBackground, RainbowButton } from "@/components/ui/magic"

export function SupportCta() {
  const router = useRouter()

  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <BlurFade inView delay={0.1}>
        <WarpBackground
          className="overflow-hidden rounded-3xl border border-border/60 p-1"
          gridColor="oklch(0.5 0 0 / 0.18)"
          beamsPerSide={3}
          beamSize={5}
          beamDelayMax={3}
          beamDelayMin={0}
          beamDuration={3}
        >
          <div className="relative flex flex-col items-center gap-6 rounded-[1.4rem] bg-background/72 px-6 py-14 text-center sm:px-12 sm:py-20">

            <h2 className="font-title text-3xl font-bold leading-tight text-balance sm:text-4xl lg:text-5xl">
              آینده با حمایت شما ساخته می‌شود
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              هر مشارکت، چه کوچک چه بزرگ، یک قدم نزدیک‌تر به هدف است.
            </p>
            <RainbowButton
              size="lg"
              onClick={() => router.push("/contact")}
              className="px-8"
            >
              <Heart className="h-4 w-4" />
              حمایت مالی
            </RainbowButton>
          </div>
        </WarpBackground>
      </BlurFade>
    </section>
  )
}
