import { notFound } from "next/navigation"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

import { isLocale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/get-dictionary"
import { persona } from "@/lib/persona"
import {
  contentTypes,
  getArticleBySlug,
  getArticles,
  articles,
} from "@/lib/mock-data"
import {
  NewsTemplate,
  VideoTemplate,
  BookTemplate,
  EventTemplate,
} from "@/components/site/article-templates"
import { ContentGrid } from "@/components/site"

export async function generateStaticParams() {
  const params = []
  for (const locale of ["fa", "en"]) {
    for (const a of articles) {
      params.push({ locale, type: a.type, slug: a.slug })
    }
  }
  return params
}

export async function generateMetadata({ params }) {
  const { locale, type, slug } = await params
  if (!isLocale(locale) || !contentTypes.includes(type)) return {}
  const article = getArticleBySlug({ slug, type, locale })
  if (!article) return {}

  const url = `/${locale}/content/${type}/${slug}`
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: type === "video" ? "video.other" : "article",
      title: article.title,
      description: article.excerpt,
      url,
      images: article.cover ? [{ url: article.cover }] : [],
      publishedTime: article.publishedAt,
    },
  }
}

function TemplateForType({ type, article }) {
  if (type === "video") return <VideoTemplate article={article} />
  if (type === "book") return <BookTemplate article={article} />
  if (type === "event") return <EventTemplate article={article} />
  return <NewsTemplate article={article} />
}

export default async function ArticlePage({ params }) {
  const { locale, type, slug } = await params
  if (!isLocale(locale) || !contentTypes.includes(type)) notFound()
  const article = getArticleBySlug({ slug, type, locale })
  if (!article) notFound()
  const dict = await getDictionary(locale)
  const related = getArticles({ locale, type })
    .filter((a) => a.slug !== slug)
    .slice(0, 3)

  const personaInfo = persona[locale]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": type === "event" ? "Event" : type === "book" ? "Book" : "Article",
    headline: article.title,
    description: article.excerpt,
    image: article.cover,
    datePublished: article.publishedAt,
    author: {
      "@type": "Person",
      name: article.author ?? personaInfo.name,
    },
    inLanguage: locale,
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <Link
        href={`/${locale}/content/${type}`}
        className="mb-8 inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
      >
        <ChevronLeft className="h-3.5 w-3.5 rtl:rotate-180" />
        {dict.actions.back}
      </Link>

      <TemplateForType type={type} article={article} />

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="font-title text-2xl font-bold">
            {dict.content.related}
          </h2>
          <div className="mt-6">
            <ContentGrid articles={related} />
          </div>
        </section>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  )
}
