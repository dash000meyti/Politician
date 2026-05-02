import { Mail, MapPin, MessageCircle } from "lucide-react"

import { ContactForm } from "@/components/site"
import { SectionHeading } from "@/components/site/sections"
import { BlurFade } from "@/components/ui/magic"

export async function generateMetadata() {
  return {
    title: "ارتباط با من",
    description:
      "پیام شما خوانده می‌شود؛ پاسخ، در سریع‌ترین زمان ممکن.",
  }
}

export default async function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <SectionHeading
        eyebrow="راه‌های ارتباط"
        title="ارتباط با من"
        subtitle="پیام شما خوانده می‌شود؛ پاسخ، در سریع‌ترین زمان ممکن."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-12">
        <BlurFade inView delay={0.1} className="lg:col-span-7">
          <div className="rounded-3xl border border-border/60 bg-card p-6 shadow-sm sm:p-8">
            <ContactForm />
          </div>
        </BlurFade>

        <BlurFade inView delay={0.2} className="lg:col-span-5">
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border border-border/60 bg-card p-5">
              <Mail className="h-5 w-5 text-brand" />
              <div className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">
                ایمیل
              </div>
              <a
                href="mailto:contact@example.com"
                className="mt-1 block font-title text-base font-bold hover:text-brand"
              >
                contact@example.com
              </a>
            </div>

            <div className="rounded-2xl border border-border/60 bg-card p-5">
              <MapPin className="h-5 w-5 text-accent-1" />
              <div className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">
                دفتر
              </div>
              <p className="mt-1 font-title text-base font-bold leading-snug">
                ارتباط از طریق وب‌گاه رسمی — آدرس دفتر پس از تأیید درج می‌شود.
              </p>
            </div>

            <div className="rounded-2xl border border-border/60 bg-card p-5">
              <MessageCircle className="h-5 w-5 text-accent-2" />
              <div className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">
                شبکه‌های اجتماعی
              </div>
              <ul className="mt-3 grid grid-cols-3 gap-2">
                <li>
                  <a
                    href="https://jebraily.ir/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg border border-border/60 bg-background px-2 py-1.5 text-center text-[10px] font-medium uppercase tracking-wider text-muted-foreground transition hover:border-brand hover:text-foreground"
                  >
                    website
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </BlurFade>
      </div>
    </div>
  )
}
