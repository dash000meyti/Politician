import { ShowcasePage } from "@/components/showcase"

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Demo", href: "/demo" },
  { label: "Magic UI", href: "/demo/magic" },
  { label: "Buttons" },
]

export default function DemoMagicButtonsPage() {
  return (
    <ShowcasePage
      title="Buttons"
      group="magic/buttons"
      crumbs={crumbs}
      description="Decorative animated buttons: rainbow, shimmer, ripple, and more."
    >
      {null}
    </ShowcasePage>
  )
}
