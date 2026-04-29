import { DiaTextReveal } from "@/components/ui/magic"

export function DiaTextRevealDemoStart() {
  return (
    <DiaTextReveal
      text="Magic UI"
      className="text-5xl font-bold tracking-tighter"
    />
  )
}

export function DiaTextRevealDemo() {
  return (
    <DiaTextReveal
      text="Magic UI Components"
      className="text-6xl font-bold tracking-tighter md:text-7xl"
      duration={2}
      repeat
      repeatDelay={1}
    />
  )
}

export function DiaTextRevealDemoMulti() {
  return (
    <DiaTextReveal
      text={["Beautiful", "Magical", "Components"]}
      className="text-5xl font-bold tracking-tighter md:text-6xl"
      duration={1.5}
      repeat
      repeatDelay={0.5}
      fixedWidth
    />
  )
}
