import { cn } from "@/lib/utils"
import { DotPattern } from "@/components/ui/magic"

export function DotPatternDemoStart() {
  return (
    <div className="relative h-[300px] w-full max-w-2xl overflow-hidden rounded-xl border bg-background">
      <DotPattern />
    </div>
  )
}

export function DotPatternDemo() {
  return (
    <div className="relative flex h-[400px] w-full max-w-2xl items-center justify-center overflow-hidden rounded-xl border bg-background p-20">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-foreground">
        Dot Pattern
      </p>
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
      />
    </div>
  )
}

export function DotPatternDemoGlow() {
  return (
    <div className="relative h-[400px] w-full max-w-2xl overflow-hidden rounded-xl border bg-background">
      <DotPattern glow />
    </div>
  )
}
