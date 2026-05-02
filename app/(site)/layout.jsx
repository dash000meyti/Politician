import { SiteHeader, SiteFooter, DockNav } from "@/components/site"

export async function generateMetadata() {
  return {
    title: {
      default:
        "سید یاسر جبرائیلی — صدای کنش جمعی، برای ساخت بهتر تمدن ایران اسلامی",
      template: "%s · یاسر جبرائیلی",
    },
    description:
      "پژوهشگر اندیشه سیاسی و اقتصاد سیاسی؛ دبیرکل حزب تمدن نوین اسلامی و عضو هیئت علمی پژوهشگاه علوم انسانی و مطالعات فرهنگی. تمرکز او بر تحلیل سیاست‌های اقتصادی، حکمرانی پولی و مسیر توسعه در چارچوب انقلاب اسلامی است.",
    openGraph: {
      type: "website",
      locale: "fa_IR",
      siteName: "سید یاسر جبرائیلی",
      title:
        "سید یاسر جبرائیلی — صدای کنش جمعی، برای ساخت بهتر تمدن ایران اسلامی",
      description:
        "پژوهشگر اندیشه سیاسی و اقتصاد سیاسی؛ دبیرکل حزب تمدن نوین اسلامی و عضو هیئت علمی پژوهشگاه علوم انسانی و مطالعات فرهنگی. تمرکز او بر تحلیل سیاست‌های اقتصادی، حکمرانی پولی و مسیر توسعه در چارچوب انقلاب اسلامی است.",
    },
    alternates: {
      canonical: "/",
    },
  }
}

export default function SiteLayout({ children }) {
  return (
    <div dir="rtl" className="contents">
      <SiteHeader />
      <main id="main" className="flex-1">
        {children}
      </main>
      <SiteFooter />
      <div className="hidden md:block">
        <DockNav />
      </div>
    </div>
  )
}
