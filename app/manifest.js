export default function manifest() {
  return {
    name: "سید یاسر جبرائیلی",
    short_name: "یاسر جبرائیلی",
    description:
      "پژوهشگر اندیشه سیاسی و اقتصاد سیاسی؛ دبیرکل حزب تمدن نوین اسلامی و عضو هیئت علمی پژوهشگاه علوم انسانی و مطالعات فرهنگی. تمرکز او بر تحلیل سیاست‌های اقتصادی، حکمرانی پولی و مسیر توسعه در چارچوب انقلاب اسلامی است.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#7c5cff",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  }
}
