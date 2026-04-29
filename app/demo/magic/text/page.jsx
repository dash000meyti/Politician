import { ShowcasePage } from "@/components/showcase"

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Demo", href: "/demo" },
  { label: "Magic UI", href: "/demo/magic" },
  { label: "Text Animations" },
]

export default function DemoMagicTextPage() {
  return (
    <ShowcasePage
      title="Text Animations"
      group="magic/text"
      crumbs={crumbs}
      description="Animated text effects: typing, sparkles, aurora, video, hyper, morphing, and more."
    >
      {null}
    </ShowcasePage>
  )
}
