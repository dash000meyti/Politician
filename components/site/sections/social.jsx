"use client"

import { BlurFade, OrbitingCircles, Ripple } from "@/components/ui/magic"
import { SocialIcon } from "../social-icon"
import { SectionHeading } from "./section-heading"

export function Social() {
  return (
    <section className="relative overflow-hidden border-y border-border/60 bg-background py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="flex flex-col justify-center">
          <SectionHeading
            eyebrow="@"
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
                    name="website"
                    size={13}
                    className="text-muted-foreground group-hover:text-brand"
                  />
                  <span className="text-xs font-medium">وب‌گاه رسمی</span>
                </a>
              </li>
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
            ی
          </span>
          <OrbitingCircles iconSize={36} radius={130} duration={20}>
            <a
              href="https://jebraily.ir/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="وب‌گاه رسمی"
              className="flex h-full w-full items-center justify-center rounded-full border border-border/60 bg-background shadow-md transition-transform hover:scale-110"
            >
              <SocialIcon name="website" size={14} />
            </a>
          </OrbitingCircles>
        </div>
      </div>
    </section>
  )
}
