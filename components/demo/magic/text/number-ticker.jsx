import { NumberTicker } from "@/components/ui/magic"

export function NumberTickerDemoStart() {
  return (
    <NumberTicker
      value={100}
      className="text-4xl font-bold tracking-tighter text-foreground"
    />
  )
}

export function NumberTickerDemo() {
  return (
    <NumberTicker
      value={100}
      className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-foreground"
    />
  )
}

export function NumberTickerDemoDecimal() {
  return (
    <NumberTicker
      value={99.9}
      decimalPlaces={2}
      className="text-5xl font-bold tracking-tighter text-foreground"
    />
  )
}

export function NumberTickerDemoCountDown() {
  return (
    <NumberTicker
      value={0}
      startValue={100}
      direction="down"
      className="text-5xl font-bold tracking-tighter text-foreground"
    />
  )
}
