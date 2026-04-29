import { SparklesText } from "@/components/ui/magic"

export function SparklesTextDemoStart() {
  return <SparklesText className="text-4xl">Magic UI</SparklesText>
}

export function SparklesTextDemo() {
  return <SparklesText>Magic UI</SparklesText>
}

export function SparklesTextDemoColors() {
  return (
    <SparklesText colors={{ first: "#A07CFE", second: "#FE8FB5" }}>
      Sparkles
    </SparklesText>
  )
}
