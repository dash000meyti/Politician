"use client"

import * as React from "react"
import { Mail, MapPin } from "lucide-react"

import { useDictionary, useLocale } from "@/lib/i18n/dictionary-context"
import { persona } from "@/lib/persona"
import { Separator } from "@/components/ui"
import { SiteLink } from "./site-link"
import { SocialIcon } from "./social-icon"

export function SiteFooter() {
  const dict = useDictionary()
  const locale = useLocale()
  const personaInfo = persona[locale] ?? persona.fa
  const year = new Date().getFullYear()

  return (
    <footer className="relative mt-24 border-t border-border/60 bg-muted/30">
      <div className="absolute inset-x-0 top-0 -translate-y-1/2">
        <div className="mx-auto h-px w-3/4 max-w-3xl bg-gradient-to-r from-transparent via-brand to-transparent opacity-60" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <div className="font-title text-lg font-bold">{personaInfo.shortName}</div>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            {dict.footer.tagline}
          </p>
          <div className="mt-6 flex flex-col gap-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5" />
              <a
                href={`mailto:${persona.contact.email}`}
                className="hover:text-foreground"
              >
                {persona.contact.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5" />
              <span>{persona.contact.office[locale] ?? persona.contact.office.en}</span>
            </div>
          </div>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {dict.footer.quickLinks}
          </div>
          <ul className="mt-4 flex flex-col gap-2 text-sm">
            <li><SiteLink href="/" className="text-muted-foreground hover:text-foreground">{dict.nav.home}</SiteLink></li>
            <li><SiteLink href="/about" className="text-muted-foreground hover:text-foreground">{dict.nav.about}</SiteLink></li>
            <li><SiteLink href="/content" className="text-muted-foreground hover:text-foreground">{dict.nav.content}</SiteLink></li>
            <li><SiteLink href="/contact" className="text-muted-foreground hover:text-foreground">{dict.nav.contact}</SiteLink></li>
          </ul>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {dict.footer.follow}
          </div>
          <ul className="mt-4 grid grid-cols-3 gap-2">
            {persona.social.map((s) => (
              <li key={s.id}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-background text-muted-foreground transition-colors hover:border-brand hover:text-foreground"
                >
                  <SocialIcon name={s.id} size={14} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Separator />
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground sm:px-6 lg:px-8">
        <span>
          © {year} {personaInfo.shortName}. {dict.footer.rights}
        </span>
        <span>{dict.footer.builtWith}</span>
      </div>
    </footer>
  )
}
