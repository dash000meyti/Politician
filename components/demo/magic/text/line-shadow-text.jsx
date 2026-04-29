import { LineShadowText } from "@/components/ui/magic"

export function LineShadowTextDemoStart() {
  return (
    <h1 className="text-4xl font-semibold leading-none tracking-tighter">
      Ship{" "}
      <LineShadowText className="italic" shadowColor="black">
        Magic
      </LineShadowText>
    </h1>
  )
}

export function LineShadowTextDemo() {
  return (
    <h1 className="text-balance text-5xl font-semibold leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
      Ship{" "}
      <LineShadowText className="italic" shadowColor="white">
        Magic
      </LineShadowText>
    </h1>
  )
}
