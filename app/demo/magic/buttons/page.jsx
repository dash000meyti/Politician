import { ShowcasePage, ShowcaseSection, ShowcaseVariant } from "@/components/showcase"
import {
  RainbowButtonDemoStart,
  RainbowButtonDemo,
  RainbowButtonDemoOutline,
  ShimmerButtonDemoStart,
  ShimmerButtonDemo,
  RippleButtonDemoStart,
  RippleButtonDemo,
} from "@/components/demo"

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
      <ShowcaseSection
        id="rainbow-button"
        name="Rainbow Button"
        description="A CTA button with an animated rainbow gradient border."
        docsUrl="https://magicui.design/docs/components/rainbow-button"
        sourceFile="components/ui/magic/buttons/rainbow-button.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="RainbowButtonDemoStart"
          sourceFile="components/demo/magic/buttons/rainbow-button.jsx"
        >
          <RainbowButtonDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default"
          exportName="RainbowButtonDemo"
          sourceFile="components/demo/magic/buttons/rainbow-button.jsx"
        >
          <RainbowButtonDemo />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Outline"
          exportName="RainbowButtonDemoOutline"
          sourceFile="components/demo/magic/buttons/rainbow-button.jsx"
        >
          <RainbowButtonDemoOutline />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="shimmer-button"
        name="Shimmer Button"
        description="A button with a continuous conic-gradient shimmer sweep around its border."
        docsUrl="https://magicui.design/docs/components/shimmer-button"
        sourceFile="components/ui/magic/buttons/shimmer-button.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="ShimmerButtonDemoStart"
          sourceFile="components/demo/magic/buttons/shimmer-button.jsx"
        >
          <ShimmerButtonDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default"
          exportName="ShimmerButtonDemo"
          sourceFile="components/demo/magic/buttons/shimmer-button.jsx"
        >
          <ShimmerButtonDemo />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="ripple-button"
        name="Ripple Button"
        description="A button with a Material-style ripple emanating from the click point."
        docsUrl="https://magicui.design/docs/components/ripple-button"
        sourceFile="components/ui/magic/buttons/ripple-button.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="RippleButtonDemoStart"
          sourceFile="components/demo/magic/buttons/ripple-button.jsx"
        >
          <RippleButtonDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default"
          exportName="RippleButtonDemo"
          sourceFile="components/demo/magic/buttons/ripple-button.jsx"
        >
          <RippleButtonDemo />
        </ShowcaseVariant>
      </ShowcaseSection>
    </ShowcasePage>
  )
}
