import { ShowcasePage, ShowcaseSection, ShowcaseVariant } from "@/components/showcase"
import {
  FlickeringGridDemoStart,
  FlickeringGridDemo,
  FlickeringGridDemoRounded,
  AnimatedGridPatternDemoStart,
  AnimatedGridPatternDemo,
  RetroGridDemoStart,
  RetroGridDemo,
  RippleDemoStart,
  RippleDemo,
  DotPatternDemoStart,
  DotPatternDemo,
  DotPatternDemoGlow,
  GridPatternDemoStart,
  GridPatternDemo,
  GridPatternDemoDashed,
  HexagonPatternDemoStart,
  HexagonPatternDemo,
  HexagonPatternDemoVertical,
  StripedPatternDemoStart,
  StripedPatternDemo,
  StripedPatternDemoRight,
  InteractiveGridPatternDemoStart,
  InteractiveGridPatternDemo,
  LightRaysDemoStart,
  LightRaysDemo,
  NoiseTextureDemoStart,
  NoiseTextureDemo,
  NoiseTextureDemoCoarse,
} from "@/components/demo"

const crumbs = [
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
      <ShowcaseSection
        id="flickering-grid"
        name="Flickering Grid"
        description="A canvas grid of squares that randomly flicker on and off."
        docsUrl="https://magicui.design/docs/components/flickering-grid"
        sourceFile="components/ui/magic/backgrounds/flickering-grid.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="FlickeringGridDemoStart"
          sourceFile="components/demo/magic/backgrounds/flickering-grid.jsx"
        >
          <FlickeringGridDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default"
          exportName="FlickeringGridDemo"
          sourceFile="components/demo/magic/backgrounds/flickering-grid.jsx"
        >
          <FlickeringGridDemo />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Rounded card"
          exportName="FlickeringGridDemoRounded"
          sourceFile="components/demo/magic/backgrounds/flickering-grid.jsx"
        >
          <FlickeringGridDemoRounded />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="animated-grid-pattern"
        name="Animated Grid Pattern"
        description="An SVG grid where random squares fade in and out over time."
        docsUrl="https://magicui.design/docs/components/animated-grid-pattern"
        sourceFile="components/ui/magic/backgrounds/animated-grid-pattern.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="AnimatedGridPatternDemoStart"
          sourceFile="components/demo/magic/backgrounds/animated-grid-pattern.jsx"
        >
          <AnimatedGridPatternDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default"
          exportName="AnimatedGridPatternDemo"
          sourceFile="components/demo/magic/backgrounds/animated-grid-pattern.jsx"
        >
          <AnimatedGridPatternDemo />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="retro-grid"
        name="Retro Grid"
        description="A WebGL-powered receding retro grid with parallax horizon."
        docsUrl="https://magicui.design/docs/components/retro-grid"
        sourceFile="components/ui/magic/backgrounds/retro-grid.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="RetroGridDemoStart"
          sourceFile="components/demo/magic/backgrounds/retro-grid.jsx"
        >
          <RetroGridDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default"
          exportName="RetroGridDemo"
          sourceFile="components/demo/magic/backgrounds/retro-grid.jsx"
        >
          <RetroGridDemo />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="ripple"
        name="Ripple"
        description="Concentric circles emanating outward from a center point."
        docsUrl="https://magicui.design/docs/components/ripple"
        sourceFile="components/ui/magic/backgrounds/ripple.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="RippleDemoStart"
          sourceFile="components/demo/magic/backgrounds/ripple.jsx"
        >
          <RippleDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default"
          exportName="RippleDemo"
          sourceFile="components/demo/magic/backgrounds/ripple.jsx"
        >
          <RippleDemo />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="dot-pattern"
        name="Dot Pattern"
        description="A dotted background pattern with optional glow animation."
        docsUrl="https://magicui.design/docs/components/dot-pattern"
        sourceFile="components/ui/magic/backgrounds/dot-pattern.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="DotPatternDemoStart"
          sourceFile="components/demo/magic/backgrounds/dot-pattern.jsx"
        >
          <DotPatternDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default"
          exportName="DotPatternDemo"
          sourceFile="components/demo/magic/backgrounds/dot-pattern.jsx"
        >
          <DotPatternDemo />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Glow"
          exportName="DotPatternDemoGlow"
          sourceFile="components/demo/magic/backgrounds/dot-pattern.jsx"
        >
          <DotPatternDemoGlow />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="grid-pattern"
        name="Grid Pattern"
        description="A static SVG grid pattern with optional highlighted squares."
        docsUrl="https://magicui.design/docs/components/grid-pattern"
        sourceFile="components/ui/magic/backgrounds/grid-pattern.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="GridPatternDemoStart"
          sourceFile="components/demo/magic/backgrounds/grid-pattern.jsx"
        >
          <GridPatternDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default"
          exportName="GridPatternDemo"
          sourceFile="components/demo/magic/backgrounds/grid-pattern.jsx"
        >
          <GridPatternDemo />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Dashed"
          exportName="GridPatternDemoDashed"
          sourceFile="components/demo/magic/backgrounds/grid-pattern.jsx"
        >
          <GridPatternDemoDashed />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="hexagon-pattern"
        name="Hexagon Pattern"
        description="A static hex tile pattern with horizontal or vertical orientation."
        docsUrl="https://magicui.design/docs/components/hexagon-pattern"
        sourceFile="components/ui/magic/backgrounds/hexagon-pattern.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="HexagonPatternDemoStart"
          sourceFile="components/demo/magic/backgrounds/hexagon-pattern.jsx"
        >
          <HexagonPatternDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default"
          exportName="HexagonPatternDemo"
          sourceFile="components/demo/magic/backgrounds/hexagon-pattern.jsx"
        >
          <HexagonPatternDemo />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Vertical"
          exportName="HexagonPatternDemoVertical"
          sourceFile="components/demo/magic/backgrounds/hexagon-pattern.jsx"
        >
          <HexagonPatternDemoVertical />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="striped-pattern"
        name="Striped Pattern"
        description="Diagonal stripe pattern, left- or right-facing."
        docsUrl="https://magicui.design/docs/components/striped-pattern"
        sourceFile="components/ui/magic/backgrounds/striped-pattern.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="StripedPatternDemoStart"
          sourceFile="components/demo/magic/backgrounds/striped-pattern.jsx"
        >
          <StripedPatternDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default"
          exportName="StripedPatternDemo"
          sourceFile="components/demo/magic/backgrounds/striped-pattern.jsx"
        >
          <StripedPatternDemo />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Right facing"
          exportName="StripedPatternDemoRight"
          sourceFile="components/demo/magic/backgrounds/striped-pattern.jsx"
        >
          <StripedPatternDemoRight />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="interactive-grid-pattern"
        name="Interactive Grid Pattern"
        description="A grid of cells that highlight individually on hover."
        docsUrl="https://magicui.design/docs/components/interactive-grid-pattern"
        sourceFile="components/ui/magic/backgrounds/interactive-grid-pattern.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="InteractiveGridPatternDemoStart"
          sourceFile="components/demo/magic/backgrounds/interactive-grid-pattern.jsx"
        >
          <InteractiveGridPatternDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default"
          exportName="InteractiveGridPatternDemo"
          sourceFile="components/demo/magic/backgrounds/interactive-grid-pattern.jsx"
        >
          <InteractiveGridPatternDemo />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="light-rays"
        name="Light Rays"
        description="Soft animated light rays sweeping across the container."
        docsUrl="https://magicui.design/docs/components/light-rays"
        sourceFile="components/ui/magic/backgrounds/light-rays.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="LightRaysDemoStart"
          sourceFile="components/demo/magic/backgrounds/light-rays.jsx"
        >
          <LightRaysDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default"
          exportName="LightRaysDemo"
          sourceFile="components/demo/magic/backgrounds/light-rays.jsx"
        >
          <LightRaysDemo />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="noise-texture"
        name="Noise Texture"
        description="An SVG fractal-noise overlay that adds film grain to a surface."
        docsUrl="https://magicui.design/docs/components/noise-texture"
        sourceFile="components/ui/magic/backgrounds/noise-texture.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="NoiseTextureDemoStart"
          sourceFile="components/demo/magic/backgrounds/noise-texture.jsx"
        >
          <NoiseTextureDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default"
          exportName="NoiseTextureDemo"
          sourceFile="components/demo/magic/backgrounds/noise-texture.jsx"
        >
          <NoiseTextureDemo />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Coarse"
          exportName="NoiseTextureDemoCoarse"
          sourceFile="components/demo/magic/backgrounds/noise-texture.jsx"
        >
          <NoiseTextureDemoCoarse />
        </ShowcaseVariant>
      </ShowcaseSection>
    </ShowcasePage>
  )
}
