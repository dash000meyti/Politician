"use client"

import * as React from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ArrowRight, Sparkles, Mail, ChevronDown } from "lucide-react"

import { useDictionary, useLocale } from "@/lib/i18n/dictionary-context"
import { persona } from "@/lib/persona"
import {
  Particles,
  AuroraText,
  TextAnimate,
  AnimatedShinyText,
  ShimmerButton,
  RippleButton,
  BlurFade,
  BorderBeam,
  WordRotate,
} from "@/components/ui/magic"
import { localized } from "../site-link"

export function Hero() {
  const dict = useDictionary()
  const locale = useLocale()
  const router = useRouter()
  const personaInfo = persona[locale] ?? persona.fa

  const rotatingWords =
    locale === "fa"
      ? ["شفافیت", "عدالت", "آینده", "مشارکت"]
      : ["transparency", "justice", "future", "participation"]

  return (
    <section className="relative isolate overflow-hidden pt-12 pb-24 sm:pt-20 sm:pb-32 lg:pt-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-background to-muted/40" />
      <div className="absolute inset-0 -z-10 opacity-70 bg-grid-fade">
        <Particles
          className="absolute inset-0"
          quantity={120}
          staticity={30}
          ease={50}
          color="#7c5cff"
          refresh={false}
        />
      </div>
      <div className="absolute -top-32 start-1/2 -z-10 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-brand/20 blur-3xl" />
      <div className="absolute end-0 top-1/3 -z-10 h-[280px] w-[280px] rounded-full bg-accent-1/15 blur-3xl" />

      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <div className="flex flex-col justify-center gap-6 lg:col-span-7">
          <BlurFade delay={0.05} inView>
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1 backdrop-blur">
              <span className="flex h-1.5 w-1.5 animate-pulse rounded-full bg-accent-2" />
              <AnimatedShinyText className="text-[11px] font-medium uppercase tracking-wider">
                {dict.hero.eyebrow}
              </AnimatedShinyText>
            </div>
          </BlurFade>

          <BlurFade delay={0.1} inView>
            <h1 className="font-title text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              <span className="font-oneTime">{personaInfo.name}</span>
              <br />
              <span className="inline-flex items-center gap-3 text-3xl sm:text-4xl lg:text-5xl">
                <AuroraText
                  colors={["#7c5cff", "#ff5e62", "#34d399", "#fbbf24"]}
                  speed={1.2}
                >
                  <WordRotate words={rotatingWords} duration={2200} />
                </AuroraText>
              </span>
            </h1>
          </BlurFade>

          <BlurFade delay={0.18} inView>
            <TextAnimate
              as="p"
              by="word"
              animation="blurInUp"
              className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {personaInfo.shortBio}
            </TextAnimate>
          </BlurFade>

          <BlurFade delay={0.28} inView>
            <div className="flex flex-wrap items-center gap-3">
              <ShimmerButton
                className="shadow-2xl"
                background="#7c5cff"
                onClick={() => router.push(localized("/contact", locale))}
              >
                <span className="flex items-center gap-2 px-2 text-sm font-medium text-white">
                  <Mail className="h-4 w-4" />
                  {dict.hero.ctaPrimary}
                </span>
              </ShimmerButton>
              <RippleButton
                rippleColor="#7c5cff"
                className="border-border/60"
                onClick={() => router.push(localized("/content", locale))}
              >
                <span className="flex items-center gap-2 text-sm font-medium">
                  {dict.hero.ctaSecondary}
                  <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                </span>
              </RippleButton>
            </div>
          </BlurFade>

          <BlurFade delay={0.4} inView>
            <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
              <span>{dict.actions.follow}:</span>
              <div className="flex flex-wrap items-center gap-1.5">
                {persona.social.slice(0, 5).map((s) => (
                  <a
                    key={s.id}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="rounded-full border border-border/60 bg-background/40 px-2.5 py-1 text-[10px] uppercase tracking-wider text-muted-foreground backdrop-blur transition-all hover:border-brand hover:text-foreground"
                  >
                    {s.id}
                  </a>
                ))}
              </div>
            </div>
          </BlurFade>
        </div>

        <div className="relative flex items-center justify-center lg:col-span-5">
          
          <BlurFade delay={0.2} inView>
            <div className="relative flex aspect-[4/5] w-full max-w-md items-end justify-center">
              <div className="absolute inset-0 -z-10 rounded-[3rem] bg-gradient-to-br from-brand/30 via-accent-1/20 to-accent-3/20 blur-2xl " />
              <div className="relative flex h-full w-full items-end overflow-hidden rounded-[2.5rem]">
                <Image
                  src={persona.hero.portrait}
                  alt={persona.hero.portraitAlt[locale] ?? persona.hero.portraitAlt.en}
                  width={1024}
                  height={1024}
                  priority
                  sizes="(max-width: 1024px) 80vw, 35vw"
                  className="h-full w-full object-cover object-left"
                />
                <BorderBeam
                  size={250}
                  duration={10}
                  colorFrom="#7c5cff"
                  colorTo="#ff5e62"
                />
              </div>
              <div className="absolute -end-2 top-12 flex flex-col items-end gap-1 rounded-2xl border border-border/60 bg-background/80 p-3 shadow-2xl backdrop-blur">
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  {locale === "fa" ? "هم‌اکنون" : "Now"}
                </span>
                <span className="font-title text-sm font-bold">
                  {locale === "fa" ? "کمپین فعال" : "Live campaign"}
                </span>
                <span className="text-xs text-accent-2">
                  ● {locale === "fa" ? "میثاق اشتغال" : "Employment pact"}
                </span>
              </div>
              <div className="absolute -start-2 bottom-16 flex items-center gap-2 rounded-2xl border border-border/60 bg-background/80 p-3 shadow-2xl backdrop-blur">
                <Sparkles className="h-4 w-4 text-brand" />
                <span className="text-xs font-medium">
                  {locale === "fa" ? "+۲۰ هزار حامی" : "20k+ supporters"}
                </span>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>

      <div className="mt-16 flex justify-center text-muted-foreground">
        <span className="inline-flex animate-bounce items-center gap-1.5 text-[10px] uppercase tracking-wider">
          <ChevronDown className="h-3 w-3" />
          {dict.hero.scroll}
        </span>
      </div>
    </section>
  )
}
