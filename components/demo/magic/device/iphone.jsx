import { Iphone } from "@/components/ui/magic"

const SAMPLE_IMAGE = "https://magicui.design/banner.png"

export function IphoneDemoStart() {
  return <Iphone className="w-[260px]" />
}

export function IphoneDemo() {
  return <Iphone className="w-[300px]" src={SAMPLE_IMAGE} />
}
