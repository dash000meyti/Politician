import { ShowcaseBreadcrumbs } from "./breadcrumbs"
import { ShowcaseToc } from "./showcase-toc"
import { BackToTop } from "./back-to-top"
import { ThemeToggle } from "./theme-toggle"
import { CommandPalette } from "./command-palette"
import { MobileToc } from "./mobile-toc"
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

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-2">
            <MobileToc sections={sections} />
            <div className="flex min-w-0 flex-col gap-1">
              {crumbs?.length ? <ShowcaseBreadcrumbs items={crumbs} /> : null}
              <h1 className="truncate text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                {title}
              </h1>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            {group ? (
              <code className="hidden rounded-md border border-dashed border-border bg-muted px-2 py-1 font-mono text-[11px] text-muted-foreground sm:inline-block">
                {group}
              </code>
            ) : null}
            <CommandPalette />
            <ThemeToggle />
            {toolbar}
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[220px_minmax(0,1fr)] lg:px-8">
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <ShowcaseToc sections={sections} />
          </div>
        </aside>
        <main className="min-w-0 space-y-12">
          {description ? (
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
          ) : null}
          {sections.length === 0 ? (
            <EmptyState />
          ) : null}
          {children}
        </main>
      </div>

      <BackToTop />
    </div>
  )
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-muted/30 px-6 py-20 text-center">
      <p className="text-base font-medium text-foreground">No components installed yet</p>
      <p className="mt-2 max-w-md text-sm text-muted-foreground">
        Install Magic UI components for this category and add a{" "}
        <code className="rounded bg-muted px-1 py-0.5 font-mono text-[11px]">ShowcaseSection</code>{" "}
        block to populate this page.
      </p>
      <p className="mt-2 text-xs text-muted-foreground">
        See <code className="rounded bg-muted px-1 py-0.5 font-mono text-[11px]">docs/COMPONENT-CATALOG.md</code>.
      </p>
    </div>
  )
}
