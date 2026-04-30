import { isLocale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/get-dictionary"
import { getArticles } from "@/lib/mock-data"
import { notFound } from "next/navigation"
import { ContentFilter, ContentGrid } from "@/components/site"
import { SectionHeading } from "@/components/site/sections"

export async function generateMetadata({ params }) {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const dict = await getDictionary(locale)
  return { title: dict.content.title, description: dict.content.subtitle }
}

export default async function ContentPage({ params }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const dict = await getDictionary(locale)
  const articles = getArticles({ locale })

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <SectionHeading
        eyebrow="Library"
        title={dict.content.title}
        subtitle={dict.content.subtitle}
      />
      <div className="mt-8">
        <ContentFilter active="all" />
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
