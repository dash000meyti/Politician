import { persona } from "@/lib/persona"
import { locales } from "@/lib/i18n/config"
import { articles, contentTypes } from "@/lib/mock-data"

const STATIC_PATHS = ["", "/about", "/content", "/contact"]

export default function sitemap() {
  const base = persona.site.url.replace(/\/$/, "")
  const urls = []
  const now = new Date()

  for (const locale of locales) {
    for (const p of STATIC_PATHS) {
      urls.push({
        url: `${base}/${locale}${p}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: p === "" ? 1.0 : 0.7,
      })
    }
    for (const t of contentTypes) {
      urls.push({
        url: `${base}/${locale}/content/${t}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.6,
      })
    }
    for (const a of articles) {
      urls.push({
        url: `${base}/${locale}/content/${a.type}/${a.slug}`,
        lastModified: a.publishedAt ? new Date(a.publishedAt) : now,
        changeFrequency: "monthly",
        priority: a.pinned ? 0.9 : 0.5,
      })
    }
  }

  return urls
}
