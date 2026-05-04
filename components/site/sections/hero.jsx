"use client"

import * as React from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ArrowRight, Mail } from "lucide-react"

import {
  Particles,
  AnimatedShinyText,
  ShimmerButton,
  RippleButton,
  BlurFade,
  BorderBeam,
  TextAnimate,
} from "@/components/ui/magic"
import { PersonaNameMark } from "../persona-name-mark"

export function Hero() {
  const router = useRouter()

  return (
    <section className="relative isolate overflow-hidden py-4 lg:py-12">
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

        <div className="order-2 flex flex-col items-center justify-center gap-6 text-center lg:order-1 lg:col-span-7 lg:items-start lg:text-left">
          <BlurFade delay={0.05} inView className=" hidden lg:block">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1 backdrop-blur">
              <span className="flex h-1.5 w-1.5 animate-pulse rounded-full bg-accent-2" />
              <AnimatedShinyText className="text-[11px] font-medium uppercase tracking-wider">
                تحلیل اقتصاد سیاسی، اندیشه انقلابی و مسیر تمدن اسلامی
              </AnimatedShinyText>
            </div>
          </BlurFade>

          <BlurFade delay={0.1} inView>
            <PersonaNameMark
              variant="hero"
              className="text-foreground"
              aria-label="سید یاسر جبرائیلی"
            />
          </BlurFade>

          <BlurFade delay={0.18} inView>
            <TextAnimate
              as="p"
              by="word"
              animation="blurInUp"
              className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0"
            >
              پژوهشگر اندیشه سیاسی و اقتصاد سیاسی؛ دبیرکل حزب تمدن نوین اسلامی و
              عضو هیئت علمی پژوهشگاه علوم انسانی و مطالعات فرهنگی. تمرکز او بر
              تحلیل سیاست‌های اقتصادی، حکمرانی پولی و مسیر توسعه در چارچوب
              انقلاب اسلامی است.
            </TextAnimate>
          </BlurFade>

          <BlurFade delay={0.28} inView>
            <div className="flex w-full flex-wrap items-center justify-center gap-3 lg:w-auto lg:justify-start">
              <ShimmerButton
                className="shadow-2xl"
                background="#7c5cff"
                onClick={() => router.push("/contact")}
              >
                <span className="flex items-center gap-2 px-2 text-sm font-medium text-white">
                  <Mail className="h-4 w-4" />
                  ارسال پیام
                </span>
              </ShimmerButton>
              <RippleButton
                rippleColor="#7c5cff"
                className="border-border/60"
                onClick={() => router.push("/content")}
              >
                <span className="flex items-center gap-2 text-sm font-medium">
                  آخرین فعالیت‌ها
                  <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                </span>
              </RippleButton>
            </div>
          </BlurFade>

          <BlurFade delay={0.4} inView>
            <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
              <span>دنبال کنید:</span>
              <div className="flex flex-wrap items-center gap-1.5">
                <a
                  href="https://jebraily.ir/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="rounded-full border border-border/60 bg-background/40 px-2.5 py-1 text-[10px] uppercase tracking-wider text-muted-foreground backdrop-blur transition-all hover:border-brand hover:text-foreground"
                >
                  X
                </a>
                <a
                  href="https://jebraily.ir/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-full border border-border/60 bg-background/40 px-2.5 py-1 text-[10px] uppercase tracking-wider text-muted-foreground backdrop-blur transition-all hover:border-brand hover:text-foreground"
                >
                  LinkedIn
                </a>
                <a
                  href="https://jebraily.ir/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Eitaa"
                  className="rounded-full border border-border/60 bg-background/40 px-2.5 py-1 text-[10px] uppercase tracking-wider text-muted-foreground backdrop-blur transition-all hover:border-brand hover:text-foreground"
                >
                  Eitaa
                </a>
                <a
                  href="https://jebraily.ir/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Bale"
                  className="rounded-full border border-border/60 bg-background/40 px-2.5 py-1 text-[10px] uppercase tracking-wider text-muted-foreground backdrop-blur transition-all hover:border-brand hover:text-foreground"
                >
                  Bale
                </a>
              </div>
            </div>
          </BlurFade>
        </div>

        <BlurFade delay={0.05} inView className="block lg:hidden w-full text-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1 backdrop-blur">
            <span className="flex h-1.5 w-1.5 animate-pulse rounded-full bg-accent-2" />
            <AnimatedShinyText className="text-[11px] font-medium uppercase tracking-wider">
              تحلیل اقتصاد سیاسی، اندیشه انقلابی و مسیر تمدن اسلامی
            </AnimatedShinyText>
          </div>
        </BlurFade>

        <div className="order-1 relative flex w-full items-center justify-center lg:order-2 lg:col-span-5">
          <BlurFade delay={0.2} inView>
            <div className="relative aspect-[4/5] flex w-full min-w-[300px] items-end justify-center">
              <div className="absolute inset-0 -z-10 rounded-[3rem] bg-gradient-to-br from-brand/30 via-accent-1/20 to-accent-3/20 blur-2xl" />
              <div className="relative flex h-full w-full items-end overflow-hidden rounded-[2.5rem]">
                <Image
                  src="/photo.png"
                  alt="پرتره‌ی سید یاسر جبرائیلی"
                  width={1024}
                  height={1024}
                  priority
                  sizes="(max-width: 1024px) 100vw, 100vw"
                  className="h-full w-full object-cover object-left"
                />
                <BorderBeam
                  size={90}
                  duration={8}
                  colorFrom="#7c5cff"
                  colorTo="#ff5e62"
                />
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  )
}
