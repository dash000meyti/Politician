import { LightRays } from "@/components/ui/magic"

export function LightRaysDemoStart() {
  return (
    <div className="relative h-[300px] w-full max-w-2xl overflow-hidden rounded-xl border bg-background">
      <LightRays />
    </div>
  )
}

export function LightRaysDemo() {
  return (
    <div className="relative flex h-[500px] w-full max-w-2xl flex-col items-center justify-center overflow-hidden rounded-xl border bg-background">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-foreground">
        Light Rays
      </p>
      <LightRays count={9} blur={48} length="80vh" />
    </div>
  )
}
