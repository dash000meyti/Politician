import {
  Hero,
  PinnedContent,
  BioSnapshot,
  LatestByType,
  Mission,
  Campaigns,
  Testimonials,
  Social,
  Collaborations,
  Roadmap,
  SupportCta,
  Closing,
} from "@/components/site/sections"
import {
  getArticles,
  getTestimonials,
  getCampaigns,
  getMission,
  getRoadmap,
  getCollaborations,
} from "@/lib/mock-data"
import { isLocale } from "@/lib/i18n/config"
import { personJsonLd } from "@/lib/seo"
import { notFound } from "next/navigation"

export default async function HomePage({ params }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  const pinned = getArticles({ locale, pinned: true, limit: 3 })
  const latestByType = {
    news: getArticles({ locale, type: "news", limit: 3 }),
    video: getArticles({ locale, type: "video", limit: 3 }),
    book: getArticles({ locale, type: "book", limit: 3 }),
    event: getArticles({ locale, type: "event", limit: 3 }),
  }

  const testimonials = getTestimonials(locale)
  const campaigns = getCampaigns(locale)
  const mission = getMission(locale)
  const roadmap = getRoadmap(locale)
  const collaborations = getCollaborations()

  const jsonLd = personJsonLd(locale)

  return (
    <>
      <Hero />
      <PinnedContent articles={pinned} />
      <BioSnapshot />
      <LatestByType data={latestByType} />
      <Mission items={mission} />
      <Campaigns items={campaigns} />
      <Testimonials items={testimonials} />
      <Social />
      <Collaborations items={collaborations} />
      <Roadmap items={roadmap} />
      <SupportCta />
      <Closing />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}
