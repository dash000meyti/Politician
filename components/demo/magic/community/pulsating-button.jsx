import { PulsatingButton } from "@/components/ui/magic"

export function PulsatingButtonDemoStart() {
  return <PulsatingButton>Pulsating Button</PulsatingButton>
}

export function PulsatingButtonDemo() {
  return <PulsatingButton>Pulsating Button</PulsatingButton>
}

export function PulsatingButtonDemoRipple() {
  return (
    <PulsatingButton variant="ripple" pulseColor="#0096ff">
      Ripple Pulse
    </PulsatingButton>
  )
}
