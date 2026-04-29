import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/magic"

export function ScrollBasedVelocityDemoStart() {
  return (
    <ScrollVelocityContainer className="w-full">
      <ScrollVelocityRow baseVelocity={5} direction={1} className="py-1">
        Magic UI
      </ScrollVelocityRow>
    </ScrollVelocityContainer>
  )
}

export function ScrollBasedVelocityDemo() {
  return (
    <ScrollVelocityContainer className="w-full">
      <ScrollVelocityRow
        baseVelocity={10}
        direction={1}
        className="py-2 text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
      >
        Magic UI&nbsp;
      </ScrollVelocityRow>
      <ScrollVelocityRow
        baseVelocity={10}
        direction={-1}
        className="py-2 text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
      >
        is awesome&nbsp;
      </ScrollVelocityRow>
    </ScrollVelocityContainer>
  )
}
