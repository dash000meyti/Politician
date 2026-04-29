import { WordRotate } from "@/components/ui/magic"

export function WordRotateDemoStart() {
  return (
    <WordRotate
      className="text-4xl font-bold text-foreground"
      words={["Word", "Rotate"]}
    />
  )
}

export function WordRotateDemo() {
  return (
    <WordRotate
      className="text-4xl font-bold text-foreground"
      words={["Word", "Rotate", "Animation"]}
    />
  )
}
