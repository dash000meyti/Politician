import { MorphingText } from "@/components/ui/magic"

const TEXTS = [
  "Hello",
  "Morphing",
  "Text",
  "Animation",
  "Cool",
  "Magic UI",
]

export function MorphingTextDemoStart() {
  return <MorphingText texts={["Hello", "World"]} />
}

export function MorphingTextDemo() {
  return <MorphingText texts={TEXTS} />
}
