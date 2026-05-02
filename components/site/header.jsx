"use client"

import * as React from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"
import { useDictionary, useLocale } from "@/lib/i18n/dictionary-context"
import { persona } from "@/lib/persona"
import { ThemeToggle } from "@/components/showcase/theme-toggle"
import { LocaleSwitcher } from "./locale-switcher"
import { MobileNav } from "./mobile-nav"
import { SiteLink } from "./site-link"

const NAV = [
  { href: "/", labelKey: "home" },
  { href: "/about", labelKey: "about" },
  { href: "/content", labelKey: "content" },
  { href: "/contact", labelKey: "contact" },
]

export function SiteHeader() {
  const dict = useDictionary()
  const locale = useLocale()
  const personaInfo = persona[locale] ?? persona.fa

  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <SiteLink
          href="/"
          className="group flex items-center gap-2 font-title text-base font-bold tracking-tight"
        >
          <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-brand to-accent-1 text-brand-foreground shadow-lg ring-1 ring-foreground/10">
            <Image
              src="/icon-192.png"
              alt="Brand icon"
              width={32}
              height={32}
              className="rounded-full"
            />
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-oneTime">{personaInfo.shortName}</span>
            <span className="mt-0.5 font-text text-[10px] font-normal text-muted-foreground">
              {personaInfo.role}
            </span>
          </span>
        </SiteLink>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <SiteLink
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              activeClassName="bg-muted text-foreground"
            >
              {dict.nav[item.labelKey]}
            </SiteLink>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <LocaleSwitcher />
          <ThemeToggle />
          <MobileNav nav={NAV} dict={dict} className="md:hidden" />
        </div>
      </div>
    </header>
  )
}
