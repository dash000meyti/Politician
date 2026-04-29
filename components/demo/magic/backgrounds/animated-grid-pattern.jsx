import { cn } from "@/lib/utils"
import { AnimatedGridPattern } from "@/components/ui/magic"

export function AnimatedGridPatternDemoStart() {
  return (
    <div className="relative h-[300px] w-full max-w-2xl overflow-hidden rounded-xl border bg-background">
      <AnimatedGridPattern />
    </div>
  )
}

export function AnimatedGridPatternDemo() {
  return (
    <div className="relative flex h-[400px] w-full max-w-2xl items-center justify-center overflow-hidden rounded-xl border bg-background p-20 md:shadow-xl">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-foreground">
        Animated Grid Pattern
      </p>
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />
    </div>
  )
}
