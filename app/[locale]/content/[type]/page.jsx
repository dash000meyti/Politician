import { isLocale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/get-dictionary"
import { getArticles, contentTypes } from "@/lib/mock-data"
import { notFound } from "next/navigation"
import { ContentFilter, ContentGrid } from "@/components/site"
import { SectionHeading } from "@/components/site/sections"

export async function generateStaticParams() {
  const params = []
  for (const locale of ["fa", "en"]) {
    for (const type of contentTypes) {
      params.push({ locale, type })
    }
  }
  return params
}

export async function generateMetadata({ params }) {
  const { locale, type } = await params
  if (!isLocale(locale) || !contentTypes.includes(type)) return {}
  const dict = await getDictionary(locale)
  return {
    title: dict.content.types[type],
    description: dict.content.subtitle,
  }
}

export default async function ContentTypePage({ params }) {
  const { locale, type } = await params
  if (!isLocale(locale) || !contentTypes.includes(type)) notFound()
  const dict = await getDictionary(locale)
  const articles = getArticles({ locale, type })

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <SectionHeading
        eyebrow={dict.content.title}
        title={dict.content.types[type]}
        subtitle={dict.content.subtitle}
      />
      <div className="mt-8">
        <ContentFilter active={type} />
      </div>
      <div className="mt-10">
        {articles.length ? (
          <ContentGrid articles={articles} />
        ) : (
          <p className="text-sm text-muted-foreground">{dict.content.noResults}</p>
        )}
      </div>
    </div>
  )
}
