import { Highlighter } from "@/components/ui/magic"

export function HighlighterDemoStart() {
  return (
    <p className="text-2xl font-medium">
      The{" "}
      <Highlighter action="highlight" color="#FF9800">
        most important
      </Highlighter>{" "}
      thing about UI is the experience.
    </p>
  )
}

export function HighlighterDemo() {
  return (
    <p className="text-balance text-2xl font-medium leading-relaxed md:text-3xl">
      The{" "}
      <Highlighter action="underline" color="#FF9800">
        most important
      </Highlighter>{" "}
      part of any product is the{" "}
      <Highlighter action="highlight" color="#87CEFA">
        user experience
      </Highlighter>
      .
    </p>
  )
}

export function HighlighterDemoCircle() {
  return (
    <p className="text-2xl font-medium">
      Wrap a{" "}
      <Highlighter action="circle" color="#FF6B6B" strokeWidth={2}>
        keyword
      </Highlighter>{" "}
      to draw attention.
    </p>
  )
}
