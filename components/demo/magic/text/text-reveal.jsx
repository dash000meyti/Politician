import { TextReveal } from "@/components/ui/magic"

export function TextRevealDemoStart() {
  return (
    <div className="h-[100vh] overflow-hidden rounded-xl border bg-background">
      <TextReveal>Magic UI will change the way you design.</TextReveal>
    </div>
  )
}

export function TextRevealDemo() {
  return (
    <div className="z-10 flex min-h-[16rem] items-center justify-center rounded-xl border bg-background">
      <TextReveal>Magic UI will change the way you design.</TextReveal>
    </div>
  )
}
