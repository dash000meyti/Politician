"use client"

import * as React from "react"
import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetTitle, SheetTrigger, Button, Separator } from "@/components/ui"
import { SiteLink } from "./site-link"

export function MobileNav({ nav, className }) {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn("h-8 w-8", className)}
          aria-label="باز کردن منو"
        >
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="flex w-[78%] flex-col gap-6 p-6 sm:max-w-sm"
      >
        <SheetTitle className="sr-only">باز کردن منو</SheetTitle>
        <div className="flex flex-col gap-1.5">
          <span className="font-title text-lg font-bold">
            یاسر جبرائیلی
          </span>
          <span className="text-xs text-muted-foreground">
            دبیرکل حزب تمدن نوین اسلامی
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
              {item.label}
            </SiteLink>
          ))}
        </nav>
        <div className="rounded-xl border border-border/60 bg-muted/40 p-4 text-xs text-muted-foreground">
          تحلیل و گفتار در بستر انقلاب اسلامی و اقتصاد سیاسی ایران.
        </div>
      </SheetContent>
    </Sheet>
  )
}
