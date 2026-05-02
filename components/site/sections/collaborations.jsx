"use client"

import * as React from "react"
import Image from "next/image"

import { BlurFade, Marquee } from "@/components/ui/magic"
import { SectionHeading } from "./section-heading"

export function Collaborations({ items }) {
  if (!items?.length) return null

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <SectionHeading
        align="center"
        eyebrow="Together"
        title="همکاری‌ها"
        subtitle="در کنار سازمان‌ها و نهادهایی که به آینده باور دارند."
      />

      <BlurFade
        inView
        delay={0.2}
        className="mt-10"
      >
        <div
          className="relative isolate overflow-hidden rounded-2xl border border-border/60 bg-card py-6"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          }}
        >
          <Marquee className="[--duration:35s] [--gap:3rem]" pauseOnHover>
            {items.map((c) => (
              <div
                key={c.id}
                className="flex h-12 w-32 shrink-0 items-center justify-center grayscale opacity-70 transition hover:opacity-100 hover:grayscale-0"
                title={c.name}
              >
                <Image
                  src={c.logo}
                  alt={c.name}
                  width={120}
                  height={48}
                  className="h-10 w-auto object-contain"
                  unoptimized
                />
              </div>
            ))}
          </Marquee>
        </div>
      </BlurFade>
    </section>
  )
}
