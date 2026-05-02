import { ShowcasePage, ShowcaseSection, ShowcaseVariant } from "@/components/showcase"
import { BlurFadeDemo } from "@/components/demo"

const crumbs = [
  { label: "Demo", href: "/demo" },
  { label: "Magic UI", href: "/demo/magic" },
  { label: "Animations" },
]

export default function DemoMagicAnimationsPage() {
  return (
    <ShowcasePage
      title="Animations"
      group="magic/animations"
      crumbs={crumbs}
      description="In-view and entrance animations for any element."
    >
      <ShowcaseSection
        id="blur-fade"
        name="Blur Fade"
        description="A blur + fade entrance animation that triggers when the element scrolls into view."
        docsUrl="https://magicui.design/docs/components/blur-fade"
        sourceFile="components/ui/magic/animations/blur-fade.jsx"
      >
        <ShowcaseVariant
          name="Default"
          exportName="BlurFadeDemo"
          sourceFile="components/demo/magic/animations/blur-fade.jsx"
        >
          <BlurFadeDemo />
        </ShowcaseVariant>
      </ShowcaseSection>
    </ShowcasePage>
  )
}
