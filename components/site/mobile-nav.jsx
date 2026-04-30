"use client"

import * as React from "react"
import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { useLocale } from "@/lib/i18n/dictionary-context"
import { persona } from "@/lib/persona"
import { Sheet, SheetContent, SheetTitle, SheetTrigger, Button, Separator } from "@/components/ui"
import { SiteLink } from "./site-link"

export function MobileNav({ nav, dict, className }) {
  const [open, setOpen] = React.useState(false)
  const locale = useLocale()
  const personaInfo = persona[locale] ?? persona.fa

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn("h-8 w-8", className)}
          aria-label={dict.nav.openMenu}
        >
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side={locale === "fa" ? "right" : "left"}
        className="flex w-[78%] flex-col gap-6 p-6 sm:max-w-sm"
      >
        <SheetTitle className="sr-only">{dict.nav.openMenu}</SheetTitle>
        <div className="flex flex-col gap-1.5">
          <span className="font-title text-lg font-bold">
            {personaInfo.shortName}
          </span>
          <span className="text-xs text-muted-foreground">
            {personaInfo.role}
          </span>
        </div>
        <Separator />
        <nav className="flex flex-1 flex-col gap-1">
          {nav.map((item) => (
            <SiteLink
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              activeClassName="bg-muted text-foreground"
            >
              {dict.nav[item.labelKey]}
            </SiteLink>
          ))}
        </nav>
        <div className="rounded-xl border border-border/60 bg-muted/40 p-4 text-xs text-muted-foreground">
          {dict.footer.tagline}
        </div>
      </SheetContent>
    </Sheet>
  )
}
