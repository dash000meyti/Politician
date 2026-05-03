"use client"

import * as React from "react"
import { Mail, MapPin } from "lucide-react"

import { Separator } from "@/components/ui"
import { SiteLink } from "./site-link"
import { SocialIcon } from "./social-icon"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative mt-4 border-t border-border/60 bg-muted/30">
      <div className="absolute inset-x-0 top-0 -translate-y-1/2">
        <div className="mx-auto h-px w-3/4 max-w-3xl bg-gradient-to-r from-transparent via-brand to-transparent opacity-60" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <div className="font-title text-lg font-bold">یاسر جبرائیلی</div>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            تحلیل و گفتار در بستر انقلاب اسلامی و اقتصاد سیاسی ایران.
          </p>
          <div className="mt-6 flex flex-col gap-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5" />
              <a
                href="mailto:contact@example.com"
                className="hover:text-foreground"
              >
                contact@example.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5" />
              <span>
                ارتباط از طریق وب‌گاه رسمی — آدرس دفتر پس از تأیید درج می‌شود.
              </span>
            </div>
          </div>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            لینک‌های سریع
          </div>
          <ul className="mt-4 flex flex-col gap-2 text-sm">
            <li>
              <SiteLink href="/" className="text-muted-foreground hover:text-foreground">
                صفحه اصلی
              </SiteLink>
            </li>
            <li>
              <SiteLink href="/about" className="text-muted-foreground hover:text-foreground">
                بیوگرافی
              </SiteLink>
            </li>
            <li>
              <SiteLink href="/content" className="text-muted-foreground hover:text-foreground">
                مطالب
              </SiteLink>
            </li>
            <li>
              <SiteLink href="/contact" className="text-muted-foreground hover:text-foreground">
                ارتباط با من
              </SiteLink>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            ما را دنبال کنید
          </div>
          <ul className="mt-4 grid grid-cols-3 gap-2">
            <li>
              <a
                href="https://jebraily.ir/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="وب‌گاه رسمی"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-background text-muted-foreground transition-colors hover:border-brand hover:text-foreground"
              >
                <SocialIcon name="website" size={14} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Separator />
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground sm:px-6 lg:px-8">
        <span>
          © {year} یاسر جبرائیلی. تمام حقوق محفوظ است.
        </span>
        <span>ساخته شده با Next.js، Tailwind و Magic UI.</span>
      </div>
    </footer>
  )
}
