import { Geist, Geist_Mono } from "next/font/google";
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

export const metadata = {
  title: "Magic UI Starter",
  description: "A Next.js + Tailwind + shadcn + Magic UI starter with a built-in component showcase.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AppProviders>
          <DirectionProvider>
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
