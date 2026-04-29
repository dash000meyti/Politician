import { Text3DFlip } from "@/components/ui/magic"

export function Text3DFlipDemoStart() {
  return (
    <Text3DFlip className="text-3xl font-bold tracking-tighter">
      Hover me
    </Text3DFlip>
  )
}

export function Text3DFlipDemo() {
  return (
    <Text3DFlip
      as="h1"
      className="text-5xl font-bold tracking-tighter md:text-6xl"
    >
      Magic UI
    </Text3DFlip>
  )
}

export function Text3DFlipDemoTop() {
  return (
    <Text3DFlip
      rotateDirection="top"
      className="text-4xl font-bold tracking-tighter"
    >
      Top flip
    </Text3DFlip>
  )
}

export function Text3DFlipDemoCenter() {
  return (
    <Text3DFlip
      staggerFrom="center"
      className="text-4xl font-bold tracking-tighter"
    >
      Center stagger
    </Text3DFlip>
  )
}
