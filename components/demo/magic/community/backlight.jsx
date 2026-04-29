import { Backlight } from "@/components/ui/magic"

export function BacklightDemoStart() {
  return (
    <Backlight className="rounded-2xl">
      <div className="rounded-2xl bg-gradient-to-br from-fuchsia-500 to-cyan-500 p-12 text-center text-2xl font-bold text-white">
        Backlight
      </div>
    </Backlight>
  )
}

export function BacklightDemo() {
  return (
    <Backlight blur={28} className="rounded-3xl">
      <div className="flex h-48 w-72 items-center justify-center rounded-3xl bg-gradient-to-br from-fuchsia-500 via-pink-500 to-orange-400 text-3xl font-bold text-white shadow-xl">
        Magic UI
      </div>
    </Backlight>
  )
}
