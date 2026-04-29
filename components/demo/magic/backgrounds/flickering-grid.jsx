import { FlickeringGrid } from "@/components/ui/magic"

export function FlickeringGridDemoStart() {
  return (
    <div className="relative h-[300px] w-full max-w-2xl overflow-hidden rounded-xl border bg-background">
      <FlickeringGrid />
    </div>
  )
}

export function FlickeringGridDemo() {
  return (
    <div className="relative h-[400px] w-full max-w-2xl overflow-hidden rounded-xl border bg-background">
      <FlickeringGrid
        className="absolute inset-0 z-0 [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
      />
    </div>
  )
}

export function FlickeringGridDemoRounded() {
  return (
    <div className="relative h-[400px] w-full max-w-2xl overflow-hidden rounded-3xl border bg-background">
      <FlickeringGrid
        className="absolute inset-0 z-0 size-full"
        squareSize={4}
        gridGap={6}
        color="#60A5FA"
        maxOpacity={0.5}
        flickerChance={0.1}
        height={800}
        width={800}
      />
    </div>
  )
}
