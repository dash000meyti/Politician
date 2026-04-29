import Link from "next/link"
import { ArrowRight, BookOpen, Sparkles, Wrench } from "lucide-react"

import { Button } from "@/components/ui"
import { ThemeToggle } from "@/components/showcase"

const links = [
  {
    href: "/demo",
    title: "Component Showcase",
    description: "Browse every shadcn primitive and Magic UI component installed in the starter.",
    icon: Sparkles,
  },
  {
    href: "/demo/components",
    title: "shadcn Components",
    description: "60+ accessible primitives — buttons, forms, dialogs, tables, charts, and more.",
    icon: Wrench,
  },
  {
    href: "/demo/magic",
    title: "Magic UI",
    description: "Animated, effect-rich components from magicui.design across 8 categories.",
    icon: Sparkles,
  },
]

const docs = [
  { href: "https://nextjs.org/docs", label: "Next.js" },
  { href: "https://ui.shadcn.com/docs/components", label: "shadcn" },
  { href: "https://magicui.design/docs/components", label: "Magic UI" },
  { href: "https://tailwindcss.com/docs", label: "Tailwind" },
]

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            magic ui starter
          </span>
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/magicuidesign/magicui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              GitHub ↗
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-4 py-16 sm:px-6 sm:py-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            <Sparkles className="h-3 w-3" />
            Next.js 16 · React 19 · Tailwind 4
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            A starter for everything you build next.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            shadcn + Magic UI, pre-installed and pre-organized, with a built-in
            interactive showcase, AI rules, prompt templates, and scaffolding
            scripts. Clone, browse, build.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <Link href="/demo">
                Open the showcase
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="https://github.com/magicuidesign/magicui" target="_blank">
                <BookOpen className="mr-1.5 h-4 w-4" />
                Magic UI docs
              </Link>
            </Button>
          </div>
        </div>

        <section className="mt-20 grid gap-4 sm:mt-24 sm:grid-cols-3">
          {links.map((l) => {
            const Icon = l.icon
            return (
              <Link
                key={l.href}
                href={l.href}
                className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-5 transition-all hover:border-foreground/20 hover:shadow-md"
              >
                <Icon className="h-5 w-5 text-foreground/70" />
                <div>
                  <h2 className="text-base font-semibold">{l.title}</h2>
                  <p className="mt-1.5 text-sm text-muted-foreground">{l.description}</p>
                </div>
                <span className="mt-auto pt-2 text-xs font-medium text-foreground/70 transition-colors group-hover:text-foreground">
                  Open →
                </span>
              </Link>
            )
          })}
        </section>

        <section className="mt-20 sm:mt-24">
          <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Documentation
          </h2>
          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            {docs.map((d) => (
              <a
                key={d.href}
                href={d.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 underline-offset-4 transition-colors hover:text-foreground hover:underline"
              >
                {d.label} ↗
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-6 text-xs text-muted-foreground sm:px-6">
          <span>
            Built with{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              Next.js
            </a>
            ,{" "}
            <a
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              shadcn
            </a>
            , and{" "}
            <a
              href="https://magicui.design"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              Magic UI
            </a>
            .
          </span>
          <Link href="/demo" className="hover:text-foreground">
            Showcase →
          </Link>
        </div>
      </footer>
    </div>
  )
}
