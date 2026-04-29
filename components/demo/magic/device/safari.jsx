import { Safari } from "@/components/ui/magic"

const SAMPLE_IMAGE = "https://magicui.design/banner.png"

export function SafariDemoStart() {
  return <Safari url="magicui.design" className="w-full max-w-2xl" />
}

export function SafariDemo() {
  return (
    <Safari
      url="magicui.design"
      imageSrc={SAMPLE_IMAGE}
      className="w-full max-w-2xl"
    />
  )
}

export function SafariDemoSimple() {
  return (
    <Safari
      url="magicui.design"
      imageSrc={SAMPLE_IMAGE}
      mode="simple"
      className="w-full max-w-2xl"
    />
  )
}
