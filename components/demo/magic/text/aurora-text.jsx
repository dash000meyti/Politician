import { AuroraText } from "@/components/ui/magic"

export function AuroraTextDemoStart() {
  return (
    <h1 className="text-3xl font-bold tracking-tighter md:text-5xl">
      Ship <AuroraText>beautiful</AuroraText>
    </h1>
  )
}

export function AuroraTextDemo() {
  return (
    <h1 className="text-center text-4xl font-bold tracking-tighter md:text-6xl lg:text-7xl">
      Ship <AuroraText>beautiful</AuroraText> apps
    </h1>
  )
}
