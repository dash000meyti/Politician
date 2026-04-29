import { cn } from "@/lib/utils"
import { InteractiveGridPattern } from "@/components/ui/magic"

export function InteractiveGridPatternDemoStart() {
  return (
    <div className="relative h-[300px] w-full max-w-2xl overflow-hidden rounded-xl border bg-background">
      <InteractiveGridPattern />
    </div>
  )
}

export function InteractiveGridPatternDemo() {
  return (
    <div className="relative flex h-[500px] w-full max-w-2xl flex-col items-center justify-center overflow-hidden rounded-xl border bg-background">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-foreground">
        Interactive
      </p>
      <InteractiveGridPattern
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />
    </div>
  )
}
