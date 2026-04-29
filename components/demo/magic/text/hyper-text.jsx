import { HyperText } from "@/components/ui/magic"

export function HyperTextDemoStart() {
  return <HyperText>Hover Me!</HyperText>
}

export function HyperTextDemo() {
  return <HyperText className="text-4xl font-bold">Hover Me!</HyperText>
}

export function HyperTextDemoStartOnView() {
  return (
    <HyperText className="text-4xl font-bold" startOnView>
      Scroll into view
    </HyperText>
  )
}
