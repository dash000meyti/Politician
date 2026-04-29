import { Button } from "@/components/ui"
import { CoolMode } from "@/components/ui/magic"

export function CoolModeDemoStart() {
  return (
    <CoolMode>
      <Button>Click me!</Button>
    </CoolMode>
  )
}

export function CoolModeDemo() {
  return (
    <CoolMode>
      <Button size="lg">Cool Mode</Button>
    </CoolMode>
  )
}

export function CoolModeDemoCustomParticles() {
  return (
    <CoolMode
      options={{
        particle:
          "https://cdn.magicui.design/x.png",
      }}
    >
      <Button variant="outline">Custom particle</Button>
    </CoolMode>
  )
}
