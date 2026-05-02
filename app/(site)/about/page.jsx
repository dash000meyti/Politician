import Image from "next/image"
import { GraduationCap, BookOpen, Briefcase, Award } from "lucide-react"

import { getRoadmap } from "@/lib/mock-data"
import { SectionHeading, Roadmap } from "@/components/site/sections"
import { BlurFade, NumberTicker } from "@/components/ui/magic"

export async function generateMetadata() {
  return {
    title: "بیوگرافی",
    description: "از کلاس درس تا تریبون مردم.",
  }
}

const ACHIEVEMENTS = [
  {
    icon: GraduationCap,
    value: 3,
    suffix: "",
    label: "مدرک دانشگاهی",
  },
  {
    icon: BookOpen,
    value: 4,
    suffix: "",
    label: "کتاب منتشرشده",
  },
  {
    icon: Briefcase,
    value: 16,
    suffix: "+",
    label: "سال فعالیت رسانه‌ای و اجرایی",
  },
  {
    icon: Award,
    value: 1,
    suffix: "",
    label: "عضویت هیئت علمی پژوهشگاه",
  },
]

export default async function AboutPage() {
  const roadmap = getRoadmap()

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <BlurFade inView delay={0.05}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-brand/20 to-accent-1/10">
              <Image
                src="/photo.png"
                alt="پرتره‌ی سید یاسر جبرائیلی"
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
            eyebrow="از کلاس درس تا تریبون مردم."
            title="بیوگرافی — سید یاسر جبرائیلی"
          />

          <BlurFade inView delay={0.2}>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                سید یاسر جبرائیلی، متولد ۱۳۶۳، دکترای اندیشه سیاسی از پژوهشگاه
                علوم انسانی و مطالعات فرهنگی و کارشناسی‌ارشد روابط بین‌الملل
                (گرایش اقتصاد سیاسی) از دانشگاه تهران است. در مسیر تحصیل، از
                آموزش زبان انگلیسی در دانشگاه تربیت دبیر شهید رجایی آغاز کرده و
                به پژوهش در بستر نظام جمهوری اسلامی ادامه داده است.
              </p>
              <p>
                او در حوزه رسانه و سیاست‌گذاری اقتصادی تجربه‌هایی چون معاونت
                پژوهش و آموزش خبرگزاری فارس، مشاور اقتصاد مقاومتی فرماندهی کل
                سپاه، ریاست مرکز ارزیابی و نظارت راهبردی اجرای سیاست‌های کلی
                نظام در مجمع تشخیص مصلحت نظام (۱۳۹۸–۱۴۰۳) و همکاری در تدوین
                برنامه اقتصادی دولت سیزدهم داشته است؛ اکنون دبیرکل حزب تمدن
                نوین اسلامی است.
              </p>
              <p>
                نوشتارها و سخنان او عمدتاً حول اقتصاد سیاسی ایران، بانک مرکزی و
                استقلال بودجه، نفت و نئولیبرالیسم، و جایگاه جوانان انقلابی در
                دولت‌سازی اسلامی است و در وب‌گاه شخصی منتشر می‌شود.
              </p>
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
                      {a.label}
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
