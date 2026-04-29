import { NeonGradientCard } from "@/components/ui/magic"

export function NeonGradientCardDemoStart() {
  return (
    <NeonGradientCard className="max-w-sm items-center justify-center text-center">
      <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-4xl font-bold leading-none tracking-tighter text-transparent">
        Neon Gradient Card
      </span>
    </NeonGradientCard>
  )
}

export function NeonGradientCardDemo() {
  return (
    <NeonGradientCard className="max-w-md items-center justify-center text-center">
      <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent">
        Neon Gradient Card
      </span>
    </NeonGradientCard>
  )
}
