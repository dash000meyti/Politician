"use client"

import * as React from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ArrowRight } from "lucide-react"

import { BlurFade, NumberTicker } from "@/components/ui/magic"
import { Button } from "@/components/ui"
import { SectionHeading } from "./section-heading"

const STATS = [
  { label: "سال فعالیت", value: 20, suffix: "+" },
  { label: "رویداد عمومی", value: 320, suffix: "" },
  { label: "کمپین فعال", value: 12, suffix: "" },
  { label: "سخنرانی", value: 180, suffix: "+" },
]

export function BioSnapshot() {
  const router = useRouter()

  return (
    <section className="relative overflow-hidden border-y border-border/60 bg-muted/30 px-4 py-12">
      <div className="absolute inset-0 -z-10 opacity-50 bg-grid-fade">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, oklch(0.5 0 0 / 0.15) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <BlurFade inView delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-brand/20 to-accent-1/20">
              <Image
                src="/portrait.png"
                alt="پرتره‌ی سید یاسر جبرائیلی"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover mix-blend-luminosity opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/0 to-transparent" />
            </div>
          </BlurFade>
        </div>

        <div className="flex flex-col justify-center lg:col-span-7">
          <SectionHeading
            eyebrow="از پژوهش و تدریس تا میدان سیاست‌گذاری اقتصادی."
            title="درباره‌ی سید یاسر جبرائیلی"
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
            </div>
          </BlurFade>

          <BlurFade inView delay={0.3}>
            <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-border/60 bg-background/60 p-4 backdrop-blur"
                >
                  <dd className="font-title text-3xl font-bold text-foreground">
                    <NumberTicker
                      value={s.value}
                      className="!text-foreground"
                    />
                    {s.suffix}
                  </dd>
                  <dt className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </dt>
                </div>
              ))}
            </dl>
          </BlurFade>

          <BlurFade inView delay={0.4}>
            <Button
              size="lg"
              className="mt-8 w-fit rounded-full"
              onClick={() => router.push("/about")}
            >
              بیوگرافی کامل
              <ArrowRight className="ms-1.5 h-4 w-4 rtl:rotate-180" />
            </Button>
          </BlurFade>
        </div>
      </div>
    </section>
  )
}
