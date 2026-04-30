import { notFound } from "next/navigation"
import { Mail, MapPin, MessageCircle } from "lucide-react"

import { isLocale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/get-dictionary"
import { persona } from "@/lib/persona"
import { ContactForm } from "@/components/site"
import { SectionHeading } from "@/components/site/sections"
import { BlurFade } from "@/components/ui/magic"

export async function generateMetadata({ params }) {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const dict = await getDictionary(locale)
  return { title: dict.contact.title, description: dict.contact.subtitle }
}

export default async function ContactPage({ params }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const dict = await getDictionary(locale)

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <SectionHeading
        eyebrow={dict.contact.channels.title}
        title={dict.contact.title}
        subtitle={dict.contact.subtitle}
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
                {dict.contact.channels.email}
              </div>
              <a
                href={`mailto:${persona.contact.email}`}
                className="mt-1 block font-title text-base font-bold hover:text-brand"
              >
                {persona.contact.email}
              </a>
            </div>

            <div className="rounded-2xl border border-border/60 bg-card p-5">
              <MapPin className="h-5 w-5 text-accent-1" />
              <div className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">
                {dict.contact.channels.office}
              </div>
              <p className="mt-1 font-title text-base font-bold leading-snug">
                {persona.contact.office[locale] ?? persona.contact.office.en}
              </p>
            </div>

            <div className="rounded-2xl border border-border/60 bg-card p-5">
              <MessageCircle className="h-5 w-5 text-accent-2" />
              <div className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">
                {dict.contact.channels.social}
              </div>
              <ul className="mt-3 grid grid-cols-3 gap-2">
                {persona.social.slice(0, 6).map((s) => (
                  <li key={s.id}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-lg border border-border/60 bg-background px-2 py-1.5 text-center text-[10px] font-medium uppercase tracking-wider text-muted-foreground transition hover:border-brand hover:text-foreground"
                    >
                      {s.id}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </BlurFade>
      </div>
    </div>
  )
}
