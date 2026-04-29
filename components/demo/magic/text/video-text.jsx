import { VideoText } from "@/components/ui/magic"

const SAMPLE_VIDEO =
  "https://cdn.magicui.design/bg.mp4"

export function VideoTextDemoStart() {
  return (
    <div className="relative h-32 w-full overflow-hidden">
      <VideoText src={SAMPLE_VIDEO}>OCEAN</VideoText>
    </div>
  )
}

export function VideoTextDemo() {
  return (
    <div className="relative h-[300px] w-full overflow-hidden">
      <VideoText src={SAMPLE_VIDEO}>MAGIC</VideoText>
    </div>
  )
}
