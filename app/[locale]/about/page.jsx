import Image from "next/image"
import { notFound } from "next/navigation"
import { GraduationCap, BookOpen, Briefcase, Award } from "lucide-react"

import { isLocale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/get-dictionary"
import { getRoadmap } from "@/lib/mock-data"
import { persona } from "@/lib/persona"
import { SectionHeading, Roadmap } from "@/components/site/sections"
import { BlurFade, NumberTicker } from "@/components/ui/magic"

export async function generateMetadata({ params }) {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const dict = await getDictionary(locale)
  return { title: dict.about.title, description: dict.about.subtitle }
}

const ACHIEVEMENTS = [
  {
    icon: GraduationCap,
    value: 3,
    suffix: "",
    labelFa: "مدرک دانشگاهی",
    labelEn: "University degrees",
  },
  {
    icon: BookOpen,
    value: 4,
    suffix: "",
    labelFa: "کتاب منتشرشده",
    labelEn: "Published books",
  },
  {
    icon: Briefcase,
    value: 16,
    suffix: "+",
    labelFa: "سال فعالیت رسانه‌ای و اجرایی",
    labelEn: "Years in media & executive roles",
  },
  {
    icon: Award,
    value: 1,
    suffix: "",
    labelFa: "عضویت هیئت علمی پژوهشگاه",
    labelEn: "Research institute faculty role",
  },
]

export default async function AboutPage({ params }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const dict = await getDictionary(locale)
  const personaInfo = persona[locale]
  const roadmap = getRoadmap(locale)

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <BlurFade inView delay={0.05}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-brand/20 to-accent-1/10">
              <Image
                src={persona.hero.portrait}
                alt={persona.hero.portraitAlt[locale] ?? persona.hero.portraitAlt.fa}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                priority
              />
            </div>
          </BlurFade>
        </div>

        <div className="flex flex-col justify-center lg:col-span-7">
          <SectionHeading
            eyebrow={dict.about.subtitle}
            title={`${dict.about.title} — ${personaInfo.name}`}
          />

          <BlurFade inView delay={0.2}>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              {personaInfo.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </BlurFade>

          <BlurFade inView delay={0.3}>
            <dl className="mt-10 grid grid-cols-2 gap-3">
              {ACHIEVEMENTS.map((a, i) => {
                const Icon = a.icon
                return (
                  <div
                    key={i}
                    className="rounded-2xl border border-border/60 bg-card p-4"
                  >
                    <Icon className="h-4 w-4 text-brand" />
                    <dd className="mt-2 font-title text-2xl font-bold">
                      <NumberTicker value={a.value} className="!text-foreground" />
                      {a.suffix}
                    </dd>
                    <dt className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                      {locale === "fa" ? a.labelFa : a.labelEn}
                    </dt>
                  </div>
                )
              })}
            </dl>
          </BlurFade>
        </div>
      </div>

      <div className="mt-20">
        <Roadmap items={roadmap} />
      </div>
    </div>
  )
}
