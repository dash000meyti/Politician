import { RetroGrid } from "@/components/ui/magic"

export function RetroGridDemoStart() {
  return (
    <div className="relative flex h-[300px] w-full max-w-2xl items-center justify-center overflow-hidden rounded-xl border bg-background">
      <RetroGrid />
    </div>
  )
}

export function RetroGridDemo() {
  return (
    <div className="relative flex h-[400px] w-full max-w-2xl flex-col items-center justify-center overflow-hidden rounded-xl border bg-background">
      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
        Retro Grid
      </span>
      <RetroGrid />
    </div>
  )
}
