import Link from "next/link"

import { ShowcaseBreadcrumbs } from "@/components/showcase"
import { manifest } from "@/components/showcase/manifest"

const CATEGORY_META = [
  {
    id: "components",
    title: "Components",
    description:
      "Marquee, Terminal, Hero Video Dialog, Bento Grid, Animated List, Dock, Tweet Card, and more.",
  },
  {
    id: "special-effects",
    title: "Special Effects",
    description:
      "Animated Beam, Border Beam, Shine Border, Magic Card, Glare Hover, Meteors, Confetti, Particles, Theme Toggler.",
  },
  {
    id: "animations",
    title: "Animations",
    description: "Blur Fade and other in-view animation primitives.",
  },
  {
    id: "text",
    title: "Text Animations",
    description:
      "Text Animate, Typing Animation, Aurora Text, Sparkles Text, Number Ticker, Hyper Text, and more.",
  },
  {
    id: "device",
    title: "Device Mocks",
    description: "Safari, iPhone, Android device frames.",
  },
  {
    id: "buttons",
    title: "Buttons",
    description: "Rainbow Button, Shimmer Button, Ripple Button.",
  },
  {
    id: "backgrounds",
    title: "Backgrounds",
    description:
      "Flickering Grid, Animated Grid Pattern, Retro Grid, Ripple, Dot Pattern, Light Rays, and more.",
  },
  {
    id: "community",
    title: "Community",
    description:
      "File Tree, Code Comparison, Neon Gradient Card, Pulsating Button, Comic Text, Pixel Image, and more.",
  },
]

const categories = CATEGORY_META.map((c) => ({
  ...c,
  count: manifest.find((g) => g.group === `magic/${c.id}`)?.items.length ?? 0,
}))

export default function DemoMagicPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <ShowcaseBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Demo", href: "/demo" },
              { label: "Magic UI" },
            ]}
          />
          <Link
            href="/demo"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Back
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mb-10 max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Magic UI</h1>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Animated and effect-rich components from{" "}
            <a
              href="https://magicui.design/docs/components"
              className="underline-offset-4 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              magicui.design
            </a>
            . Eight categories grouped by purpose.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => {
            const empty = c.count === 0
            return (
              <Link
                key={c.id}
                href={`/demo/magic/${c.id}`}
                className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-5 transition-all hover:border-foreground/20 hover:shadow-md"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h2 className="text-base font-semibold tracking-tight">{c.title}</h2>
                  <code
                    className={`rounded-md px-2 py-0.5 font-mono text-[11px] ${
                      empty
                        ? "border border-dashed border-border bg-muted text-muted-foreground"
                        : "bg-foreground/90 text-background"
                    }`}
                  >
                    {c.count}
                  </code>
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground">{c.description}</p>
                <div className="mt-auto flex items-center justify-between pt-2 text-[11px]">
                  <span className="text-muted-foreground">
                    {empty ? "Not installed yet" : `${c.count} installed`}
                  </span>
                  <span className="font-medium text-foreground/70 transition-colors group-hover:text-foreground">
                    Open →
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </main>
    </div>
  )
}
