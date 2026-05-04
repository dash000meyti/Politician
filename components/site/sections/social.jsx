"use client"

import { BlurFade, OrbitingCircles, Ripple } from "@/components/ui/magic"
import { SocialIcon } from "../social-icon"
import { SectionHeading } from "./section-heading"

export function Social() {
  return (
    <section className="relative overflow-hidden border-y border-border/60 bg-background px-4 py-4">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <SectionHeading
            title="در شبکه‌های اجتماعی"
            subtitle="ما را در همه‌جا دنبال کنید."
          />
          <BlurFade inView delay={0.2} className="mt-6">
            <ul className="flex flex-wrap gap-2">
              <li>
                <a
                  href="https://jebraily.ir/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-background px-3 py-1.5 text-sm transition-all hover:-translate-y-0.5 hover:border-brand hover:shadow-md"
                >
                  <SocialIcon
                    name="x"
                    size={13}
                    className="text-muted-foreground group-hover:text-brand"
                  />
                  <span className="text-xs font-medium">X</span>
                </a>
              </li>
              <li>
                <a
                  href="https://jebraily.ir/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-background px-3 py-1.5 text-sm transition-all hover:-translate-y-0.5 hover:border-brand hover:shadow-md"
                >
                  <SocialIcon
                    name="linkedin"
                    size={13}
                    className="text-muted-foreground group-hover:text-brand"
                  />
                  <span className="text-xs font-medium">LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://jebraily.ir/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-background px-3 py-1.5 text-sm transition-all hover:-translate-y-0.5 hover:border-brand hover:shadow-md"
                >
                  <SocialIcon
                    name="eitaa"
                    size={13}
                    className="text-muted-foreground group-hover:text-brand"
                  />
                  <span className="text-xs font-medium">Eitaa</span>
                </a>
              </li>
              <li>
                <a
                  href="https://jebraily.ir/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-background px-3 py-1.5 text-sm transition-all hover:-translate-y-0.5 hover:border-brand hover:shadow-md"
                >
                  <SocialIcon
                    name="bale"
                    size={13}
                    className="text-muted-foreground group-hover:text-brand"
                  />
                  <span className="text-xs font-medium">Bale</span>
                </a>
              </li>
            </ul>
          </BlurFade>
        </div>

        <div className="relative flex h-100 items-center justify-center">
          <Ripple
            mainCircleSize={110}
            mainCircleOpacity={0.40}
            numCircles={5}
          />
          <span className="absolute z-10 flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br from-brand to-accent-1 text-white shadow-2xl">
            دنبال کنید
          </span>
          <OrbitingCircles iconSize={40} radius={110} duration={10} path={false}>
            <a
              href="https://jebraily.ir/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="flex h-full w-full items-center justify-center rounded-full border border-border/60 bg-background shadow-md transition-transform hover:scale-110"
            >
              <SocialIcon name="x" size={14} />
            </a>
            <a
              href="https://jebraily.ir/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-full w-full items-center justify-center rounded-full border border-border/60 bg-background shadow-md transition-transform hover:scale-110"
            >
              <SocialIcon name="linkedin" size={14} />
            </a>
            <a
              href="https://jebraily.ir/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Eitaa"
              className="flex h-full w-full items-center justify-center rounded-full border border-border/60 bg-background shadow-md transition-transform hover:scale-110"
            >
              <SocialIcon name="eitaa" size={14} />
            </a>
            <a
              href="https://jebraily.ir/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Bale"
              className="flex h-full w-full items-center justify-center rounded-full border border-border/60 bg-background shadow-md transition-transform hover:scale-110"
            >
              <SocialIcon name="bale" size={14} />
            </a>
          </OrbitingCircles>
        </div>
      </div>
    </section>
  )
}
