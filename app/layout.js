import { Geist, Geist_Mono, Vazirmatn } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui"
import { Toaster } from "@/components/ui"
import { DirectionProvider } from '@/components/ui'
import { AppProviders } from "@/components/providers"
import { persona } from "@/lib/persona"

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
  metadataBase: new URL(persona.site.url),
  title: {
    default: `${persona.fa.name} — ${persona.fa.title}`,
    template: `%s · ${persona.fa.name}`,
  },
  description: persona.fa.shortBio,
  applicationName: persona.fa.name,
  authors: [{ name: persona.fa.name }],
  keywords: persona.keywords,
  openGraph: {
    type: "website",
    locale: "fa_IR",
    siteName: persona.fa.name,
    title: `${persona.fa.name} — ${persona.fa.title}`,
    description: persona.fa.shortBio,
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
