"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"

import { Button } from "@/components/ui"
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
} from "@/components/ui"

import { manifest, flatManifest } from "./manifest"

export function CommandPalette() {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKey = (e) => {
      const isMac = typeof navigator !== "undefined" && /Mac/i.test(navigator.platform)
      const cmdOrCtrl = isMac ? e.metaKey : e.ctrlKey
      if (e.key.toLowerCase() === "k" && cmdOrCtrl) {
        e.preventDefault()
        setOpen((v) => !v)
      } else if (e.key === "/" && !cmdOrCtrl && !e.shiftKey && !e.altKey) {
        const tag = document.activeElement?.tagName
        if (tag === "INPUT" || tag === "TEXTAREA") return
        e.preventDefault()
        setOpen(true)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  const items = flatManifest()
  const grouped = manifest
    .filter((g) => g.items.length > 0)
    .map((g) => ({
      label: g.label,
      href: g.href,
      group: g.group,
      items: items.filter((it) => it.group === g.group),
    }))

  const onSelect = (href) => {
    setOpen(false)
    router.push(href)
  }

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setOpen(true)}
        className="hidden h-8 gap-2 px-2 text-xs text-muted-foreground sm:inline-flex"
        aria-label="Search components"
      >
        <Search className="h-3.5 w-3.5" />
        <span>Search</span>
        <kbd className="hidden items-center gap-0.5 rounded border border-border bg-muted px-1 font-mono text-[10px] font-medium text-muted-foreground sm:inline-flex">
          <span className="text-[10px]">⌘</span>K
        </kbd>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={() => setOpen(true)}
        className="h-8 w-8 sm:hidden"
        aria-label="Search components"
      >
        <Search className="h-4 w-4" />
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search components, categories…" />
        <CommandList>
          <CommandEmpty>No components found.</CommandEmpty>

          <CommandGroup heading="Categories">
            {manifest.map((g) => (
              <CommandItem
                key={`group-${g.group}`}
                value={`category ${g.label}`}
                onSelect={() => onSelect(g.href)}
              >
                <span className="text-foreground">{g.label}</span>
                <CommandShortcut>{g.items.length || "0"}</CommandShortcut>
              </CommandItem>
            ))}
          </CommandGroup>

          {grouped.map((g) => (
            <CommandGroup key={g.group} heading={g.label}>
              {g.items.map((it) => (
                <CommandItem
                  key={`${g.group}-${it.id}`}
                  value={`${g.label} ${it.name}`}
                  onSelect={() => onSelect(it.href)}
                >
                  <span>{it.name}</span>
                  <CommandShortcut>{it.id}</CommandShortcut>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  )
}
