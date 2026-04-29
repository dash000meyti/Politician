import { ShowcasePage } from "@/components/showcase"

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Demo", href: "/demo" },
  { label: "Magic UI", href: "/demo/magic" },
  { label: "Backgrounds" },
]

export default function DemoMagicBackgroundsPage() {
  return (
    <ShowcasePage
      title="Backgrounds"
      group="magic/backgrounds"
      crumbs={crumbs}
      description="Decorative background patterns: flickering grid, ripple, dots, retro grid, light rays, and more."
    >
      {null}
    </ShowcasePage>
  )
}
