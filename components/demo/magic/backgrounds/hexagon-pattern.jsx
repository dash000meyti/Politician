import { cn } from "@/lib/utils"
import { HexagonPattern } from "@/components/ui/magic"

export function HexagonPatternDemoStart() {
  return (
    <div className="relative h-[300px] w-full max-w-2xl overflow-hidden rounded-xl border bg-background">
      <HexagonPattern />
    </div>
  )
}

export function HexagonPatternDemo() {
  return (
    <div className="relative flex h-[400px] w-full max-w-2xl items-center justify-center overflow-hidden rounded-xl border bg-background p-20">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-foreground">
        Hexagon Pattern
      </p>
      <HexagonPattern
        radius={32}
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
        )}
      />
    </div>
  )
}

export function HexagonPatternDemoVertical() {
  return (
    <div className="relative h-[400px] w-full max-w-2xl overflow-hidden rounded-xl border bg-background">
      <HexagonPattern direction="vertical" radius={28} />
    </div>
  )
}
