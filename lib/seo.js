/** URLs suitable for JSON-LD sameAs (non-empty path or official site root). */
export function sameAsUrls() {
  const base = "https://jebraily.ir".replace(/\/$/, "")
  const social = [
    {
      id: "website",
      label: "وب‌گاه رسمی",
      url: "https://jebraily.ir/",
    },
  ]
  return social
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
  const base = "https://jebraily.ir".replace(/\/$/, "")
  return `${base}${path.startsWith("/") ? path : `/${path}`}`
}

export function buildMetadata({ title, description, path, image } = {}) {
  const finalTitle = title
    ? `${title} · یاسر جبرائیلی`
    : `سید یاسر جبرائیلی — صدای کنش جمعی، برای ساخت بهتر تمدن ایران اسلامی`
  const finalDescription =
    description ??
    "پژوهشگر اندیشه سیاسی و اقتصاد سیاسی؛ دبیرکل حزب تمدن نوین اسلامی و عضو هیئت علمی پژوهشگاه علوم انسانی و مطالعات فرهنگی. تمرکز او بر تحلیل سیاست‌های اقتصادی، حکمرانی پولی و مسیر توسعه در چارچوب انقلاب اسلامی است."
  const url = siteUrl(path ?? "/")
  const cover = image ?? "/photo.png"

  return {
    title: finalTitle,
    description: finalDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "fa_IR",
      siteName: "سید یاسر جبرائیلی",
      title: finalTitle,
      description: finalDescription,
      url,
      images: cover ? [{ url: cover }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: finalTitle,
      description: finalDescription,
      images: cover ? [cover] : [],
    },
  }
}

export function personJsonLd() {
  const sameAs = sameAsUrls()
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "سید یاسر جبرائیلی",
    jobTitle: "دبیرکل حزب تمدن نوین اسلامی",
    description:
      "پژوهشگر اندیشه سیاسی و اقتصاد سیاسی؛ دبیرکل حزب تمدن نوین اسلامی و عضو هیئت علمی پژوهشگاه علوم انسانی و مطالعات فرهنگی. تمرکز او بر تحلیل سیاست‌های اقتصادی، حکمرانی پولی و مسیر توسعه در چارچوب انقلاب اسلامی است.",
    image: "/photo.png",
    url: siteUrl("/"),
    ...(sameAs.length ? { sameAs } : {}),
  }
}
