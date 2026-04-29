import { cn } from "@/lib/utils"
import { StripedPattern } from "@/components/ui/magic"

export function StripedPatternDemoStart() {
  return (
    <div className="relative h-[300px] w-full max-w-2xl overflow-hidden rounded-xl border bg-background">
      <StripedPattern />
    </div>
  )
}

export function StripedPatternDemo() {
  return (
    <div className="relative flex h-[400px] w-full max-w-2xl items-center justify-center overflow-hidden rounded-xl border bg-background p-20">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-foreground">
        Striped Pattern
      </p>
      <StripedPattern
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)] text-foreground/30"
        )}
      />
    </div>
  )
}

export function StripedPatternDemoRight() {
  return (
    <div className="relative h-[400px] w-full max-w-2xl overflow-hidden rounded-xl border bg-background">
      <StripedPattern direction="right" />
    </div>
  )
}
