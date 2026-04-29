import { ScrollProgress } from "@/components/ui/magic"

export function ScrollProgressDemoStart() {
  return (
    <div className="relative h-[400px] w-full max-w-2xl overflow-y-auto rounded-xl border bg-card">
      <ScrollProgress className="absolute" />
      <div className="space-y-4 p-6">
        <h3 className="text-xl font-semibold">Scroll inside this box</h3>
        {Array.from({ length: 12 }).map((_, i) => (
          <p key={i} className="text-sm text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt mi quis quam interdum, eu pretium leo dignissim. Item {i + 1}.
          </p>
        ))}
      </div>
    </div>
  )
}

export function ScrollProgressDemo() {
  return (
    <div className="relative h-[500px] w-full max-w-2xl overflow-y-auto rounded-xl border bg-card">
      <ScrollProgress className="absolute" />
      <div className="space-y-4 p-6">
        <h2 className="text-2xl font-bold">Scroll Progress demo</h2>
        <p className="text-sm text-muted-foreground">
          The animated bar at the top of this card grows as you scroll the
          card&apos;s contents from top to bottom. In a real page you&apos;d
          place <code>{"<ScrollProgress />"}</code> at the page root and let it
          track the window scroll.
        </p>
        {Array.from({ length: 20 }).map((_, i) => (
          <p key={i} className="text-sm leading-relaxed">
            Section {i + 1} — duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident.
          </p>
        ))}
      </div>
    </div>
  )
}
