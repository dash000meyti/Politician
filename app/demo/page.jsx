import Link from "next/link"

import { ShowcaseBreadcrumbs, CommandPalette, ThemeToggle } from "@/components/showcase"

const categories = [
  {
    href: "/demo/components",
    title: "Components",
    description:
      "shadcn-style primitives: buttons, forms, dialogs, tables, charts, calendars, navigation, and more.",
    count: "60+",
    badge: "shadcn",
  },
  {
    href: "/demo/magic",
    title: "Magic UI",
    description:
      "Animated and effect-rich components from magicui.design — backgrounds, beams, marquees, terminals, particles, and more.",
    count: "24",
    badge: "magicui",
  },
]

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-background/80 supports-backdrop-filter:bg-background/60 sticky top-0 z-40 backdrop-blur border border-b-2">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex min-w-0 flex-col gap-1">
            <h1 className="text-foreground truncate text-lg font-semibold tracking-tight sm:text-xl">
              Demo UI
            </h1>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <CommandPalette />
            <ThemeToggle />
          </div>
        </div>
      </header>
      <div className="border-border border-b">
        <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
          <ShowcaseBreadcrumbs items={[{ label: "Demo" }]} />
        </div>
      </div>

      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mb-10 max-w-2xl">
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Interactive previews and code references for every component installed in this starter.
            Pick a category to browse variants, copy code, and see usage examples.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {categories.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-6 transition-all hover:border-foreground/20 hover:shadow-md"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h2 className="text-lg font-semibold tracking-tight">{c.title}</h2>
                <code className="rounded-md bg-muted px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                  {c.badge}
                </code>
              </div>
              <p className="text-sm text-muted-foreground">{c.description}</p>
              <div className="mt-auto flex items-center justify-between pt-2 text-xs">
                <span className="text-muted-foreground">{c.count} components</span>
                <span className="font-medium text-foreground/70 transition-colors group-hover:text-foreground">
                  Browse →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
