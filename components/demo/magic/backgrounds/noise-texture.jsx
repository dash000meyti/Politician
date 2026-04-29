import { NoiseTexture } from "@/components/ui/magic"

export function NoiseTextureDemoStart() {
  return (
    <div className="relative h-[300px] w-full max-w-2xl overflow-hidden rounded-xl border bg-background">
      <NoiseTexture />
    </div>
  )
}

export function NoiseTextureDemo() {
  return (
    <div className="relative flex h-[400px] w-full max-w-2xl items-center justify-center overflow-hidden rounded-xl border bg-background">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-foreground">
        Noise Texture
      </p>
      <NoiseTexture />
    </div>
  )
}

export function NoiseTextureDemoCoarse() {
  return (
    <div className="relative h-[400px] w-full max-w-2xl overflow-hidden rounded-xl border bg-background">
      <NoiseTexture frequency={0.7} octaves={4} slope={0.25} />
    </div>
  )
}
