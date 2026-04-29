import { cn } from "@/lib/utils"
import { GridPattern } from "@/components/ui/magic"

export function GridPatternDemoStart() {
  return (
    <div className="relative h-[300px] w-full max-w-2xl overflow-hidden rounded-xl border bg-background">
      <GridPattern />
    </div>
  )
}

export function GridPatternDemo() {
  return (
    <div className="relative flex h-[400px] w-full max-w-2xl items-center justify-center overflow-hidden rounded-xl border bg-background p-20">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-foreground">
        Grid Pattern
      </p>
      <GridPattern
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
          [10, 10],
          [12, 15],
          [15, 10],
        ]}
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />
    </div>
  )
}

export function GridPatternDemoDashed() {
  return (
    <div className="relative h-[400px] w-full max-w-2xl overflow-hidden rounded-xl border bg-background">
      <GridPattern strokeDasharray="4 2" />
    </div>
  )
}
