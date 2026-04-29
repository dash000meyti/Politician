"use client"

import { PanelLeft } from "lucide-react"

import { Button, SidebarTrigger, useSidebar } from "@/components/ui"

export function SidebarDemo() {
  const { toggleSidebar, state, isMobile, openMobile } = useSidebar()
  const isOpen = isMobile ? openMobile : state === "expanded"

  return (
    <div className="border-border bg-muted/30 flex flex-col gap-4 rounded-lg border p-6">
      <div className="space-y-1">
        <p className="text-foreground text-sm font-medium">
          Reuses the page-level Sidebar
        </p>
        <p className="text-muted-foreground max-w-prose text-sm">
          This demo doesn&apos;t mount its own{" "}
          <code className="bg-muted rounded px-1 py-0.5 font-mono text-[11px]">
            Sidebar
          </code>
          . It reads the same{" "}
          <code className="bg-muted rounded px-1 py-0.5 font-mono text-[11px]">
            SidebarProvider
          </code>{" "}
          context from{" "}
          <code className="bg-muted rounded px-1 py-0.5 font-mono text-[11px]">
            ShowcasePage
          </code>{" "}
          and toggles the &quot;On this page&quot; navigation.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Button
          onClick={toggleSidebar}
          variant="outline"
          size="sm"
          className="gap-2"
        >
          <PanelLeft className="size-4" />
          Toggle &quot;On this page&quot;
        </Button>

        <SidebarTrigger className="border-border h-8 w-8 border" />

        <span className="text-muted-foreground text-xs">
          State:{" "}
          <code className="bg-muted rounded px-1.5 py-0.5 font-mono text-[11px]">
            {isOpen ? "open" : "closed"}
          </code>
          <span className="mx-2 opacity-40">•</span>
          Shortcut:{" "}
          <kbd className="bg-muted rounded px-1.5 py-0.5 font-mono text-[11px]">
            ⌘ B
          </kbd>
        </span>
      </div>
    </div>
  )
}
