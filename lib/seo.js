import { persona } from "./persona"
import { locales } from "./i18n/config"

/** URLs suitable for JSON-LD sameAs (non-empty path or official site root). */
export function sameAsUrls() {
  const base = persona.site.url.replace(/\/$/, "")
  return persona.social
    .map((s) => s.url?.trim())
    .filter(Boolean)
    .filter((url) => {
      try {
        const u = new URL(url)
        const path = u.pathname.replace(/\/$/, "") || "/"
        if (path !== "/" && path.length > 1) return true
        const origin = u.origin.replace(/\/$/, "")
        return origin === base
      } catch {
        return false
      }
    })
}

export function siteUrl(path = "/") {
  const base = persona.site.url.replace(/\/$/, "")
  return `${base}${path.startsWith("/") ? path : `/${path}`}`
}

export function buildMetadata({ locale = "fa", title, description, path, image } = {}) {
  const personaInfo = persona[locale] ?? persona.fa
  const finalTitle = title
    ? `${title} · ${personaInfo.shortName}`
    : `${personaInfo.name} — ${personaInfo.title}`
  const finalDescription = description ?? personaInfo.shortBio
  const url = siteUrl(path ?? `/${locale}`)
  const cover = image ?? persona.hero.portrait

  return {
    title: finalTitle,
    description: finalDescription,
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        locales.map((l) => [l, siteUrl(`/${l}`)]),
      ),
    },
    openGraph: {
      type: "website",
      locale: locale === "fa" ? "fa_IR" : "en_US",
      siteName: personaInfo.name,
      title: finalTitle,
      description: finalDescription,
      url,
      images: cover ? [{ url: cover }] : [],
    },
    twitter: {
      card: "summary_large_image",
      ...(persona.site.twitter
        ? { site: persona.site.twitter }
        : {}),
      title: finalTitle,
      description: finalDescription,
      images: cover ? [cover] : [],
    },
  }
}

export function personJsonLd(locale = "fa") {
  const p = persona[locale] ?? persona.fa
  const sameAs = sameAsUrls()
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: p.name,
    jobTitle: p.role,
    description: p.shortBio,
    image: persona.hero.portrait,
    url: siteUrl(`/${locale}`),
    ...(sameAs.length ? { sameAs } : {}),
  }
}
