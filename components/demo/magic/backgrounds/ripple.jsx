import { Ripple } from "@/components/ui/magic"

export function RippleDemoStart() {
  return (
    <div className="relative flex h-[300px] w-full max-w-2xl items-center justify-center overflow-hidden rounded-xl border bg-background">
      <Ripple />
    </div>
  )
}

export function RippleDemo() {
  return (
    <div className="relative flex h-[500px] w-full max-w-2xl flex-col items-center justify-center overflow-hidden rounded-xl border bg-background">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-foreground">
        Ripple
      </p>
      <Ripple />
    </div>
  )
}
