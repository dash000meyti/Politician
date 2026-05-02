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
import { personJsonLd } from "@/lib/seo"
import Script from "next/script"

export default async function HomePage() {
  const pinned = {
    news: getArticles({ type: "news", limit: 1 })[0] ?? null,
    book: getArticles({ type: "book", limit: 1 })[0] ?? null,
    event: getArticles({ type: "event", limit: 1 })[0] ?? null,
    videos: getArticles({ type: "video", limit: 2 }),
  }
  const latestByType = {
    news: getArticles({ type: "news", limit: 3 }),
    video: getArticles({ type: "video", limit: 3 }),
    book: getArticles({ type: "book", limit: 3 }),
    event: getArticles({ type: "event", limit: 3 }),
  }

  const testimonials = getTestimonials()
  const campaigns = getCampaigns()
  const mission = getMission()
  const roadmap = getRoadmap()
  const collaborations = getCollaborations()

  const jsonLd = personJsonLd()

  return (
    <>
      <Hero />
      <PinnedContent items={pinned} />
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
      <Script id="home-jsonld" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>
    </>
  )
}
