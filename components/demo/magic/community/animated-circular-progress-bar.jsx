import { AnimatedCircularProgressBar } from "@/components/ui/magic"

export function AnimatedCircularProgressBarDemoStart() {
  return (
    <AnimatedCircularProgressBar
      max={100}
      min={0}
      value={66}
      gaugePrimaryColor="rgb(79 70 229)"
      gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
    />
  )
}

export function AnimatedCircularProgressBarDemo() {
  return (
    <AnimatedCircularProgressBar
      max={100}
      min={0}
      value={66}
      gaugePrimaryColor="rgb(79 70 229)"
      gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
    />
  )
}

export function AnimatedCircularProgressBarDemoComplete() {
  return (
    <AnimatedCircularProgressBar
      max={100}
      min={0}
      value={100}
      gaugePrimaryColor="rgb(34 197 94)"
      gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
    />
  )
}
