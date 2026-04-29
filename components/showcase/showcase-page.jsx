import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui"

import { ShowcaseBreadcrumbs } from "./breadcrumbs"
import { ShowcaseSidebar } from "./showcase-sidebar"
import { BackToTop } from "./back-to-top"
import { ThemeToggle } from "./theme-toggle"
import { CommandPalette } from "./command-palette"
import { collectSections } from "./utils"

export function ShowcasePage({
  title,
  description,
  group,
  crumbs,
  toolbar,
  children,
}) {
  const sections = collectSections(children)
  const hasSections = sections.length > 0

  return (
    <SidebarProvider defaultOpen={hasSections}>
      <ShowcaseSidebar sections={sections} />
      <SidebarInset className="bg-background min-h-screen">
        <header className="border-border bg-background/80 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 border-b backdrop-blur">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
            <div className="flex min-w-0 items-center gap-2">
              {hasSections ? (
                <SidebarTrigger
                  className="h-8 w-8"
                  aria-label="Toggle on-page navigation"
                />
              ) : null}
              <div className="flex min-w-0 flex-col gap-1">
                {crumbs?.length ? <ShowcaseBreadcrumbs items={crumbs} /> : null}
                <h1 className="text-foreground truncate text-lg font-semibold tracking-tight sm:text-xl">
                  {title}
                </h1>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              {group ? (
                <code className="border-border bg-muted text-muted-foreground hidden rounded-md border border-dashed px-2 py-1 font-mono text-[11px] sm:inline-block">
                  {group}
                </code>
              ) : null}
              <CommandPalette />
              <ThemeToggle />
              {toolbar}
            </div>
          </div>
        </header>

        <main className="mx-auto w-full max-w-5xl space-y-12 px-4 py-8 sm:px-6 lg:px-8">
          {description ? (
            <p className="text-muted-foreground max-w-2xl text-sm leading-relaxed">
              {description}
            </p>
          ) : null}
          {hasSections ? null : <EmptyState />}
          {children}
        </main>

        <BackToTop />
      </SidebarInset>
    </SidebarProvider>
  )
}

function EmptyState() {
  return (
    <div className="border-border bg-muted/30 flex flex-col items-center justify-center rounded-xl border border-dashed px-6 py-20 text-center">
      <p className="text-foreground text-base font-medium">
        No components installed yet
      </p>
      <p className="text-muted-foreground mt-2 max-w-md text-sm">
        Install Magic UI components for this category and add a{" "}
        <code className="bg-muted rounded px-1 py-0.5 font-mono text-[11px]">
          ShowcaseSection
        </code>{" "}
        block to populate this page.
      </p>
      <p className="text-muted-foreground mt-2 text-xs">
        See{" "}
        <code className="bg-muted rounded px-1 py-0.5 font-mono text-[11px]">
          docs/COMPONENT-CATALOG.md
        </code>
        .
      </p>
    </div>
  )
}
