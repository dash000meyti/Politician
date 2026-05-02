export default function robots() {
  const base = "https://jebraily.ir".replace(/\/$/, "")
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
