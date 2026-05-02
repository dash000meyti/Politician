import { getArticles, contentTypes } from "@/lib/mock-data"
import { notFound } from "next/navigation"
import { ContentFilter, ContentGrid } from "@/components/site"
import { SectionHeading } from "@/components/site/sections"

export async function generateStaticParams() {
  return contentTypes.map((type) => ({ type }))
}

export async function generateMetadata({ params }) {
  const { type } = await params
  if (!contentTypes.includes(type)) return {}
  return {
    title:
      type === "news"
        ? "خبر"
        : type === "video"
          ? "ویدیو"
          : type === "book"
            ? "کتاب"
            : "رویداد",
    description: "اخبار، ویدیوها، کتاب‌ها و رویدادها در یک‌جا.",
  }
}

export default async function ContentTypePage({ params }) {
  const { type } = await params
  if (!contentTypes.includes(type)) notFound()
  const articles = getArticles({ type })

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <SectionHeading
        eyebrow="همه‌ی محتوا"
        title={
          type === "news"
            ? "خبر"
            : type === "video"
              ? "ویدیو"
              : type === "book"
                ? "کتاب"
                : "رویداد"
        }
        subtitle="اخبار، ویدیوها، کتاب‌ها و رویدادها در یک‌جا."
      />
      <div className="mt-8">
        <ContentFilter active={type} />
      </div>
      <div className="mt-10">
        {articles.length ? (
          <ContentGrid articles={articles} />
        ) : (
          <p className="text-sm text-muted-foreground">
            هنوز محتوایی منتشر نشده.
          </p>
        )}
      </div>
    </div>
  )
}
