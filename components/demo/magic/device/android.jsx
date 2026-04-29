import { Android } from "@/components/ui/magic"

const SAMPLE_IMAGE = "https://magicui.design/banner.png"

export function AndroidDemoStart() {
  return <Android width={260} height={528} />
}

export function AndroidDemo() {
  return <Android width={300} height={609} src={SAMPLE_IMAGE} />
}
