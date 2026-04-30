"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { BlurFade } from "@/components/ui/magic"

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "start",
  className,
}) {
  return (
    <div
      className={cn(
        "flex max-w-3xl flex-col gap-3",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <BlurFade delay={0.05} inView>
          <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/60 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            {eyebrow}
          </span>
        </BlurFade>
      )}
      <BlurFade delay={0.1} inView>
        <h2 className="font-title text-3xl font-bold leading-tight text-balance sm:text-4xl">
          {title}
        </h2>
      </BlurFade>
      {subtitle && (
        <BlurFade delay={0.15} inView>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            {subtitle}
          </p>
        </BlurFade>
      )}
    </div>
  )
}
