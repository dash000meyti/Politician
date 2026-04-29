import { ShowcasePage, ShowcaseSection, ShowcaseVariant } from "@/components/showcase"
import {
  ShinyButtonDemoStart,
  ShinyButtonDemo,
  FileTreeDemoStart,
  FileTreeDemo,
  CodeComparisonDemoStart,
  CodeComparisonDemo,
  ScrollProgressDemoStart,
  ScrollProgressDemo,
  NeonGradientCardDemoStart,
  NeonGradientCardDemo,
  ComicTextDemoStart,
  ComicTextDemo,
  ComicTextDemoLarge,
  CoolModeDemoStart,
  CoolModeDemo,
  CoolModeDemoCustomParticles,
  PixelImageDemoStart,
  PixelImageDemo,
  PixelImageDemoMonochrome,
  PulsatingButtonDemoStart,
  PulsatingButtonDemo,
  PulsatingButtonDemoRipple,
  WarpBackgroundDemoStart,
  WarpBackgroundDemo,
  InteractiveHoverButtonDemoStart,
  InteractiveHoverButtonDemo,
  AnimatedCircularProgressBarDemoStart,
  AnimatedCircularProgressBarDemo,
  AnimatedCircularProgressBarDemoComplete,
  BacklightDemoStart,
  BacklightDemo,
} from "@/components/demo"

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Demo", href: "/demo" },
  { label: "Magic UI", href: "/demo/magic" },
  { label: "Community" },
]

export default function DemoMagicCommunityPage() {
  return (
    <ShowcasePage
      title="Community"
      group="magic/community"
      crumbs={crumbs}
      description="Community-contributed Magic UI components: file tree, code comparison, neon gradient card, comic text, and more."
    >
      <ShowcaseSection
        id="shiny-button"
        name="Shiny Button"
        description="A button with a continuously animated highlight sweep."
        docsUrl="https://magicui.design/docs/components/shiny-button"
        sourceFile="components/ui/magic/community/shiny-button.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="ShinyButtonDemoStart"
          sourceFile="components/demo/magic/community/shiny-button.jsx"
        >
          <ShinyButtonDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default"
          exportName="ShinyButtonDemo"
          sourceFile="components/demo/magic/community/shiny-button.jsx"
        >
          <ShinyButtonDemo />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="file-tree"
        name="File Tree"
        description="A keyboard-accessible folder/file tree component."
        docsUrl="https://magicui.design/docs/components/file-tree"
        sourceFile="components/ui/magic/community/file-tree.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="FileTreeDemoStart"
          sourceFile="components/demo/magic/community/file-tree.jsx"
        >
          <FileTreeDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default"
          exportName="FileTreeDemo"
          sourceFile="components/demo/magic/community/file-tree.jsx"
        >
          <FileTreeDemo />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="code-comparison"
        name="Code Comparison"
        description="A before/after diff view that highlights code with Shiki."
        docsUrl="https://magicui.design/docs/components/code-comparison"
        sourceFile="components/ui/magic/community/code-comparison.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="CodeComparisonDemoStart"
          sourceFile="components/demo/magic/community/code-comparison.jsx"
        >
          <CodeComparisonDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default"
          exportName="CodeComparisonDemo"
          sourceFile="components/demo/magic/community/code-comparison.jsx"
        >
          <CodeComparisonDemo />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="scroll-progress"
        name="Scroll Progress"
        description="A thin gradient bar that grows with scroll progress."
        docsUrl="https://magicui.design/docs/components/scroll-progress"
        sourceFile="components/ui/magic/community/scroll-progress.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="ScrollProgressDemoStart"
          sourceFile="components/demo/magic/community/scroll-progress.jsx"
        >
          <ScrollProgressDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default"
          exportName="ScrollProgressDemo"
          sourceFile="components/demo/magic/community/scroll-progress.jsx"
        >
          <ScrollProgressDemo />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="neon-gradient-card"
        name="Neon Gradient Card"
        description="A card with a glowing animated neon gradient border."
        docsUrl="https://magicui.design/docs/components/neon-gradient-card"
        sourceFile="components/ui/magic/community/neon-gradient-card.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="NeonGradientCardDemoStart"
          sourceFile="components/demo/magic/community/neon-gradient-card.jsx"
        >
          <NeonGradientCardDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default"
          exportName="NeonGradientCardDemo"
          sourceFile="components/demo/magic/community/neon-gradient-card.jsx"
        >
          <NeonGradientCardDemo />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="comic-text"
        name="Comic Text"
        description="Comic-book style text with a halftone fill and skewed outline."
        docsUrl="https://magicui.design/docs/components/comic-text"
        sourceFile="components/ui/magic/community/comic-text.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="ComicTextDemoStart"
          sourceFile="components/demo/magic/community/comic-text.jsx"
        >
          <ComicTextDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default"
          exportName="ComicTextDemo"
          sourceFile="components/demo/magic/community/comic-text.jsx"
        >
          <ComicTextDemo />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Large"
          exportName="ComicTextDemoLarge"
          sourceFile="components/demo/magic/community/comic-text.jsx"
        >
          <ComicTextDemoLarge />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="cool-mode"
        name="Cool Mode"
        description="A wrapper that emits particle confetti on click for any child element."
        docsUrl="https://magicui.design/docs/components/cool-mode"
        sourceFile="components/ui/magic/community/cool-mode.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="CoolModeDemoStart"
          sourceFile="components/demo/magic/community/cool-mode.jsx"
        >
          <CoolModeDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default"
          exportName="CoolModeDemo"
          sourceFile="components/demo/magic/community/cool-mode.jsx"
        >
          <CoolModeDemo />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Custom particle"
          exportName="CoolModeDemoCustomParticles"
          sourceFile="components/demo/magic/community/cool-mode.jsx"
        >
          <CoolModeDemoCustomParticles />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="pixel-image"
        name="Pixel Image"
        description="An image revealed cell-by-cell from a pixelated grid."
        docsUrl="https://magicui.design/docs/components/pixel-image"
        sourceFile="components/ui/magic/community/pixel-image.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="PixelImageDemoStart"
          sourceFile="components/demo/magic/community/pixel-image.jsx"
        >
          <PixelImageDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default"
          exportName="PixelImageDemo"
          sourceFile="components/demo/magic/community/pixel-image.jsx"
        >
          <PixelImageDemo />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Monochrome"
          exportName="PixelImageDemoMonochrome"
          sourceFile="components/demo/magic/community/pixel-image.jsx"
        >
          <PixelImageDemoMonochrome />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="pulsating-button"
        name="Pulsating Button"
        description="A button that emits a softly pulsating ring."
        docsUrl="https://magicui.design/docs/components/pulsating-button"
        sourceFile="components/ui/magic/community/pulsating-button.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="PulsatingButtonDemoStart"
          sourceFile="components/demo/magic/community/pulsating-button.jsx"
        >
          <PulsatingButtonDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default"
          exportName="PulsatingButtonDemo"
          sourceFile="components/demo/magic/community/pulsating-button.jsx"
        >
          <PulsatingButtonDemo />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Ripple variant"
          exportName="PulsatingButtonDemoRipple"
          sourceFile="components/demo/magic/community/pulsating-button.jsx"
        >
          <PulsatingButtonDemoRipple />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="warp-background"
        name="Warp Background"
        description="A 3D perspective warp grid with falling beams."
        docsUrl="https://magicui.design/docs/components/warp-background"
        sourceFile="components/ui/magic/community/warp-background.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="WarpBackgroundDemoStart"
          sourceFile="components/demo/magic/community/warp-background.jsx"
        >
          <WarpBackgroundDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default"
          exportName="WarpBackgroundDemo"
          sourceFile="components/demo/magic/community/warp-background.jsx"
        >
          <WarpBackgroundDemo />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="interactive-hover-button"
        name="Interactive Hover Button"
        description="A pill button that swaps its label and grows a dot fill on hover."
        docsUrl="https://magicui.design/docs/components/interactive-hover-button"
        sourceFile="components/ui/magic/community/interactive-hover-button.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="InteractiveHoverButtonDemoStart"
          sourceFile="components/demo/magic/community/interactive-hover-button.jsx"
        >
          <InteractiveHoverButtonDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default"
          exportName="InteractiveHoverButtonDemo"
          sourceFile="components/demo/magic/community/interactive-hover-button.jsx"
        >
          <InteractiveHoverButtonDemo />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="animated-circular-progress-bar"
        name="Animated Circular Progress Bar"
        description="A radial progress meter with a smooth animated transition."
        docsUrl="https://magicui.design/docs/components/animated-circular-progress-bar"
        sourceFile="components/ui/magic/community/animated-circular-progress-bar.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="AnimatedCircularProgressBarDemoStart"
          sourceFile="components/demo/magic/community/animated-circular-progress-bar.jsx"
        >
          <AnimatedCircularProgressBarDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default"
          exportName="AnimatedCircularProgressBarDemo"
          sourceFile="components/demo/magic/community/animated-circular-progress-bar.jsx"
        >
          <AnimatedCircularProgressBarDemo />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Complete"
          exportName="AnimatedCircularProgressBarDemoComplete"
          sourceFile="components/demo/magic/community/animated-circular-progress-bar.jsx"
        >
          <AnimatedCircularProgressBarDemoComplete />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="backlight"
        name="Backlight"
        description="An SVG filter that applies a saturated backlight glow to its children."
        docsUrl="https://magicui.design/docs/components/backlight"
        sourceFile="components/ui/magic/community/backlight.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="BacklightDemoStart"
          sourceFile="components/demo/magic/community/backlight.jsx"
        >
          <BacklightDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default"
          exportName="BacklightDemo"
          sourceFile="components/demo/magic/community/backlight.jsx"
        >
          <BacklightDemo />
        </ShowcaseVariant>
      </ShowcaseSection>
    </ShowcasePage>
  )
}
