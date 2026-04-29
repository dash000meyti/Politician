import { ShowcasePage, ShowcaseSection, ShowcaseVariant } from "@/components/showcase"
import {
  MarqueeDemo,
  MarqueeDemo3D,
  MarqueeDemoVertical,
  TerminalDemoStart,
  TerminalDemo,
  HeroVideoDialogDemoStart,
  HeroVideoDialogDemo,
  HeroVideoDialogDemoTopInBottomOut,
  BentoGridDemoStart,
  BentoGridDemo,
  AnimatedListDemoStart,
  AnimatedListDemo,
  DockDemoStart,
  DockDemo,
  TweetCardDemo,
  OrbitingCirclesDemoStart,
  OrbitingCirclesDemo,
  AvatarCirclesDemoStart,
  AvatarCirclesDemo,
  LensDemoStart,
  LensDemo,
  LensDemoStatic,
  PointerDemoStart,
  PointerDemo,
  ProgressiveBlurDemoStart,
  ProgressiveBlurDemo,
  ProgressiveBlurDemoTop,
  ProgressiveBlurDemoBoth,
  DottedMapDemoStart,
  DottedMapDemo,
  DottedMapDemoPulse,
} from "@/components/demo"

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Demo", href: "/demo" },
  { label: "Magic UI", href: "/demo/magic" },
  { label: "Components" },
]

export default function DemoMagicComponentsPage() {
  return (
    <ShowcasePage
      title="Magic UI Components"
      group="magic/components"
      crumbs={crumbs}
      description="General-purpose animated components: marquees, terminals, video dialogs, bento grids, docks, dotted maps, and more."
    >
      <ShowcaseSection
        id="marquee"
        name="Marquee"
        description="An infinite scrolling content row, horizontal or vertical, with optional pause-on-hover."
        docsUrl="https://magicui.design/docs/components/marquee"
        sourceFile="components/ui/magic/components/marquee.jsx"
      >
        <ShowcaseVariant
          name="Default"
          exportName="MarqueeDemo"
          sourceFile="components/demo/magic/components/marquee.jsx"
        >
          <MarqueeDemo />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Vertical"
          exportName="MarqueeDemoVertical"
          sourceFile="components/demo/magic/components/marquee.jsx"
        >
          <MarqueeDemoVertical />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="3D"
          exportName="MarqueeDemo3D"
          sourceFile="components/demo/magic/components/marquee.jsx"
        >
          <MarqueeDemo3D />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="terminal"
        name="Terminal"
        description="A typewriter-style terminal with animated lines."
        docsUrl="https://magicui.design/docs/components/terminal"
        sourceFile="components/ui/magic/components/terminal.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="TerminalDemoStart"
          sourceFile="components/demo/magic/components/terminal.jsx"
        >
          <TerminalDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default"
          exportName="TerminalDemo"
          sourceFile="components/demo/magic/components/terminal.jsx"
        >
          <TerminalDemo />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="hero-video-dialog"
        name="Hero Video Dialog"
        description="A thumbnail that opens a video in a dialog with multiple animation styles."
        docsUrl="https://magicui.design/docs/components/hero-video-dialog"
        sourceFile="components/ui/magic/components/hero-video-dialog.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="HeroVideoDialogDemoStart"
          sourceFile="components/demo/magic/components/hero-video-dialog.jsx"
        >
          <HeroVideoDialogDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default (from-center)"
          exportName="HeroVideoDialogDemo"
          sourceFile="components/demo/magic/components/hero-video-dialog.jsx"
        >
          <HeroVideoDialogDemo />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Top-in / Bottom-out"
          exportName="HeroVideoDialogDemoTopInBottomOut"
          sourceFile="components/demo/magic/components/hero-video-dialog.jsx"
        >
          <HeroVideoDialogDemoTopInBottomOut />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="bento-grid"
        name="Bento Grid"
        description="A bento-style feature grid with cards of varying sizes."
        docsUrl="https://magicui.design/docs/components/bento-grid"
        sourceFile="components/ui/magic/components/bento-grid.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="BentoGridDemoStart"
          sourceFile="components/demo/magic/components/bento-grid.jsx"
        >
          <BentoGridDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default"
          exportName="BentoGridDemo"
          sourceFile="components/demo/magic/components/bento-grid.jsx"
        >
          <BentoGridDemo />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="animated-list"
        name="Animated List"
        description="A list whose items animate in sequence."
        docsUrl="https://magicui.design/docs/components/animated-list"
        sourceFile="components/ui/magic/components/animated-list.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="AnimatedListDemoStart"
          sourceFile="components/demo/magic/components/animated-list.jsx"
        >
          <AnimatedListDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default"
          exportName="AnimatedListDemo"
          sourceFile="components/demo/magic/components/animated-list.jsx"
        >
          <AnimatedListDemo />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="dock"
        name="Dock"
        description="A macOS-style icon dock with hover magnification."
        docsUrl="https://magicui.design/docs/components/dock"
        sourceFile="components/ui/magic/components/dock.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="DockDemoStart"
          sourceFile="components/demo/magic/components/dock.jsx"
        >
          <DockDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default"
          exportName="DockDemo"
          sourceFile="components/demo/magic/components/dock.jsx"
        >
          <DockDemo />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="tweet-card"
        name="Tweet Card"
        description="A pre-styled tweet preview card from a tweet ID."
        docsUrl="https://magicui.design/docs/components/tweet-card"
        sourceFile="components/ui/magic/components/tweet-card.jsx"
      >
        <ShowcaseVariant
          name="Default"
          exportName="TweetCardDemo"
          sourceFile="components/demo/magic/components/tweet-card.jsx"
        >
          <TweetCardDemo />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="orbiting-circles"
        name="Orbiting Circles"
        description="Items orbiting around a center point on configurable radii."
        docsUrl="https://magicui.design/docs/components/orbiting-circles"
        sourceFile="components/ui/magic/components/orbiting-circles.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="OrbitingCirclesDemoStart"
          sourceFile="components/demo/magic/components/orbiting-circles.jsx"
        >
          <OrbitingCirclesDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default"
          exportName="OrbitingCirclesDemo"
          sourceFile="components/demo/magic/components/orbiting-circles.jsx"
        >
          <OrbitingCirclesDemo />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="avatar-circles"
        name="Avatar Circles"
        description="A clustered avatars stack with overflow count."
        docsUrl="https://magicui.design/docs/components/avatar-circles"
        sourceFile="components/ui/magic/components/avatar-circles.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="AvatarCirclesDemoStart"
          sourceFile="components/demo/magic/components/avatar-circles.jsx"
        >
          <AvatarCirclesDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default"
          exportName="AvatarCirclesDemo"
          sourceFile="components/demo/magic/components/avatar-circles.jsx"
        >
          <AvatarCirclesDemo />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="lens"
        name="Lens"
        description="A magnifying lens hover effect."
        docsUrl="https://magicui.design/docs/components/lens"
        sourceFile="components/ui/magic/components/lens.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="LensDemoStart"
          sourceFile="components/demo/magic/components/lens.jsx"
        >
          <LensDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default"
          exportName="LensDemo"
          sourceFile="components/demo/magic/components/lens.jsx"
        >
          <LensDemo />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Static"
          exportName="LensDemoStatic"
          sourceFile="components/demo/magic/components/lens.jsx"
        >
          <LensDemoStatic />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="pointer"
        name="Pointer"
        description="A custom mouse pointer overlay for a region."
        docsUrl="https://magicui.design/docs/components/pointer"
        sourceFile="components/ui/magic/components/pointer.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="PointerDemoStart"
          sourceFile="components/demo/magic/components/pointer.jsx"
        >
          <PointerDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default"
          exportName="PointerDemo"
          sourceFile="components/demo/magic/components/pointer.jsx"
        >
          <PointerDemo />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="smooth-cursor"
        name="Smooth Cursor"
        description="A spring-following custom cursor — currently disabled in this demo."
        docsUrl="https://magicui.design/docs/components/smooth-cursor"
        sourceFile="components/ui/magic/components/smooth-cursor.jsx"
        status="manually disabled"
      >
        {null}
      </ShowcaseSection>

      <ShowcaseSection
        id="progressive-blur"
        name="Progressive Blur"
        description="A smooth blur gradient effect for scrollable content, indicating more content above or below."
        docsUrl="https://magicui.design/docs/components/progressive-blur"
        sourceFile="components/ui/magic/components/progressive-blur.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="ProgressiveBlurDemoStart"
          sourceFile="components/demo/magic/components/progressive-blur.jsx"
        >
          <ProgressiveBlurDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default"
          exportName="ProgressiveBlurDemo"
          sourceFile="components/demo/magic/components/progressive-blur.jsx"
        >
          <ProgressiveBlurDemo />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Top"
          exportName="ProgressiveBlurDemoTop"
          sourceFile="components/demo/magic/components/progressive-blur.jsx"
        >
          <ProgressiveBlurDemoTop />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Both"
          exportName="ProgressiveBlurDemoBoth"
          sourceFile="components/demo/magic/components/progressive-blur.jsx"
        >
          <ProgressiveBlurDemoBoth />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="dotted-map"
        name="Dotted Map"
        description="A world map made of dots, with optional markers and pulse animation."
        docsUrl="https://magicui.design/docs/components/dotted-map"
        sourceFile="components/ui/magic/components/dotted-map.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="DottedMapDemoStart"
          sourceFile="components/demo/magic/components/dotted-map.jsx"
        >
          <DottedMapDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="With markers"
          exportName="DottedMapDemo"
          sourceFile="components/demo/magic/components/dotted-map.jsx"
        >
          <DottedMapDemo />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Pulse"
          exportName="DottedMapDemoPulse"
          sourceFile="components/demo/magic/components/dotted-map.jsx"
        >
          <DottedMapDemoPulse />
        </ShowcaseVariant>
      </ShowcaseSection>
    </ShowcasePage>
  )
}
