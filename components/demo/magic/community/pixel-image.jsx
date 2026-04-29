import { PixelImage } from "@/components/ui/magic"

const SAMPLE_IMAGE = "https://magicui.design/banner.png"

export function PixelImageDemoStart() {
  return <PixelImage src={SAMPLE_IMAGE} grid="6x4" />
}

export function PixelImageDemo() {
  return <PixelImage src={SAMPLE_IMAGE} grid="8x8" />
}

export function PixelImageDemoMonochrome() {
  return <PixelImage src={SAMPLE_IMAGE} grid="8x3" grayscaleAnimation={false} />
}
