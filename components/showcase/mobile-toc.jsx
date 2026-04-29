"use client"

import { useState } from "react"
import { ListTree } from "lucide-react"

import { Button } from "@/components/ui"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui"

export function MobileToc({ sections }) {
  const [open, setOpen] = useState(false)

  if (!sections?.length) return null

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 lg:hidden"
          aria-label="Show on-page navigation"
        >
          <ListTree className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72 sm:w-80">
        <SheetHeader>
          <SheetTitle className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            On this page
          </SheetTitle>
        </SheetHeader>
        <nav className="mt-4 px-4 pb-6">
          <div className="space-y-0.5 border-l border-border">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className="-ml-px block truncate border-l border-transparent py-1.5 pl-3 text-sm text-muted-foreground hover:border-border hover:text-foreground"
              >
                {s.name}
              </a>
            ))}
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
