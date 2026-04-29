import { TextAnimate } from "@/components/ui/magic"

export function TextAnimateDemoStart() {
  return <TextAnimate>Animating this text by word</TextAnimate>
}

export function TextAnimateDemo() {
  return (
    <TextAnimate animation="blurInUp" by="character" once>
      Blur in by character
    </TextAnimate>
  )
}

export function TextAnimateDemoFade() {
  return (
    <TextAnimate animation="fadeIn" by="line" as="p" once>
      Fading in by line as it scrolls into view
    </TextAnimate>
  )
}

export function TextAnimateDemoSlideUp() {
  return (
    <TextAnimate animation="slideUp" by="word" once>
      Slide up by word as it scrolls into view
    </TextAnimate>
  )
}

export function TextAnimateDemoScaleUp() {
  return (
    <TextAnimate animation="scaleUp" by="text" as="h1" once className="text-3xl font-bold">
      Scale up animation
    </TextAnimate>
  )
}
