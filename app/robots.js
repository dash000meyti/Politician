import { persona } from "@/lib/persona"

export default function robots() {
  const base = persona.site.url.replace(/\/$/, "")
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/demo/"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  }
}
