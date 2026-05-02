import { Geist, Geist_Mono, Vazirmatn } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui"
import { Toaster } from "@/components/ui"
import { DirectionProvider } from '@/components/ui'
import { AppProviders } from "@/components/providers"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://jebraily.ir"),
  title: {
    default:
      "سید یاسر جبرائیلی — صدای کنش جمعی، برای ساخت بهتر تمدن ایران اسلامی",
    template: "%s · سید یاسر جبرائیلی",
  },
  description:
    "پژوهشگر اندیشه سیاسی و اقتصاد سیاسی؛ دبیرکل حزب تمدن نوین اسلامی و عضو هیئت علمی پژوهشگاه علوم انسانی و مطالعات فرهنگی. تمرکز او بر تحلیل سیاست‌های اقتصادی، حکمرانی پولی و مسیر توسعه در چارچوب انقلاب اسلامی است.",
  applicationName: "سید یاسر جبرائیلی",
  authors: [{ name: "سید یاسر جبرائیلی" }],
  keywords: [
    "یاسر جبرائیلی",
    "حزب تمدن نوین اسلامی",
    "اقتصاد سیاسی",
    "اندیشه سیاسی",
    "Iran",
  ],
  openGraph: {
    type: "website",
    locale: "fa_IR",
    siteName: "سید یاسر جبرائیلی",
    title:
      "سید یاسر جبرائیلی — صدای کنش جمعی، برای ساخت بهتر تمدن ایران اسلامی",
    description:
      "پژوهشگر اندیشه سیاسی و اقتصاد سیاسی؛ دبیرکل حزب تمدن نوین اسلامی و عضو هیئت علمی پژوهشگاه علوم انسانی و مطالعات فرهنگی. تمرکز او بر تحلیل سیاست‌های اقتصادی، حکمرانی پولی و مسیر توسعه در چارچوب انقلاب اسلامی است.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fa"
      dir="rtl"
      suppressHydrationWarning
      className={[
        geistSans.variable,
        geistMono.variable,
        vazirmatn.variable,
        "h-full antialiased",
      ].join(" ")}
    >
      <body className="min-h-full flex flex-col font-text">
        <AppProviders>
          <DirectionProvider dir="rtl">
            <TooltipProvider>
              {children}
              <Toaster />
            </TooltipProvider>
          </DirectionProvider>
        </AppProviders>
      </body>
    </html>
  );
}
