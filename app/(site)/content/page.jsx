import { getArticles } from "@/lib/mock-data"
import { ContentFilter, ContentGrid } from "@/components/site"
import { SectionHeading } from "@/components/site/sections"

export async function generateMetadata() {
  return {
    title: "همه‌ی محتوا",
    description: "اخبار، ویدیوها، کتاب‌ها و رویدادها در یک‌جا.",
  }
}

export default async function ContentPage() {
  const articles = getArticles()

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <SectionHeading
        eyebrow="Library"
        title="همه‌ی محتوا"
        subtitle="اخبار، ویدیوها، کتاب‌ها و رویدادها در یک‌جا."
      />
      <div className="mt-8">
        <ContentFilter active="all" />
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
