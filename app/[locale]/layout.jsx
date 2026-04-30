import { notFound } from "next/navigation"

import { isLocale, getDirection, locales } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/get-dictionary"
import { DictionaryProvider } from "@/lib/i18n/dictionary-context"
import { HtmlDirection } from "@/lib/i18n/html-direction"
import { persona } from "@/lib/persona"
import { SiteHeader, SiteFooter, DockNav } from "@/components/site"

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }) {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const personaInfo = persona[locale]
  return {
    title: {
      default: `${personaInfo.name} — ${personaInfo.title}`,
      template: `%s · ${personaInfo.shortName}`,
    },
    description: personaInfo.shortBio,
    openGraph: {
      type: "website",
      locale: locale === "fa" ? "fa_IR" : "en_US",
      siteName: personaInfo.name,
      title: `${personaInfo.name} — ${personaInfo.title}`,
      description: personaInfo.shortBio,
    },
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
    },
  }
}

export default async function LocaleLayout({ params, children }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  const dictionary = await getDictionary(locale)
  const dir = getDirection(locale)

  return (
    <DictionaryProvider dictionary={dictionary} locale={locale}>
      <HtmlDirection locale={locale} dir={dir} />
      <div data-locale={locale} dir={dir} className="contents">
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <div className="hidden md:block">
          <DockNav />
        </div>
      </div>
    </DictionaryProvider>
  )
}
