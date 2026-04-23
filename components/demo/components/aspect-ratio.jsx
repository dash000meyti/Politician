import Image from "next/image"

import { AspectRatio } from "@/components/ui/aspect-ratio"

export function AspectRatioDemo() {
  return (
    <div className="w-full max-w-sm">
      <AspectRatio ratio={16 / 9} className="rounded-lg bg-muted">
        <Image
          src="/test.png"
          alt="Photo"
          fill
          className="w-full rounded-lg object-cover"
        />
      </AspectRatio>
    </div>
  )
}
