import { SpinningText } from "@/components/ui/magic"

export function SpinningTextDemoStart() {
  return <SpinningText>learn more • earn more • grow more •</SpinningText>
}

export function SpinningTextDemo() {
  return (
    <SpinningText className="text-sm font-medium leading-none">
      learn more • earn more • grow more •
    </SpinningText>
  )
}

export function SpinningTextDemoReverse() {
  return (
    <SpinningText reverse className="text-sm">
      learn more • earn more • grow more •
    </SpinningText>
  )
}

export function SpinningTextDemoSlow() {
  return (
    <SpinningText duration={20} radius={6} className="text-sm">
      learn more • earn more • grow more •
    </SpinningText>
  )
}
