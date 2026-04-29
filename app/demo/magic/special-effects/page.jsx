import { ShowcasePage, ShowcaseSection, ShowcaseVariant } from "@/components/showcase"
import {
  AnimatedBeamDemo,
  AnimatedBeamDemoBidirectional,
  AnimatedBeamDemoMultiple,
  BorderBeamDemo,
  BorderBeamDemoComponent,
  ShineBorderDemo,
  ShineBorderDemoMonotone,
  MagicCardDemo,
  MagicCardDemoOrb,
  GlareHoverDemo,
  GlareHoverDemoAlerts,
  MeteorsDemo,
  ConfettiDemo,
  ConfettiDemoAngle,
  ConfettiDemoFireworks,
  ConfettiDemoSide,
  ConfettiDemoEmoji,
  ParticlesDemo,
  AnimatedThemeTogglerDemo,
} from "@/components/demo"

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Demo", href: "/demo" },
  { label: "Magic UI", href: "/demo/magic" },
  { label: "Special Effects" },
]

export default function DemoMagicSpecialEffectsPage() {
  return (
    <ShowcasePage
      title="Special Effects"
      group="magic/special-effects"
      crumbs={crumbs}
      description="Decorative motion effects: animated beams, glowing borders, magic cards, meteors, confetti, particles, and a theme toggler."
    >
      <ShowcaseSection
        id="animated-beam"
        name="Animated Beam"
        description="An animated beam of light traveling between two refs inside a container."
        docsUrl="https://magicui.design/docs/components/animated-beam"
        sourceFile="components/ui/magic/special-effects/animated-beam.jsx"
      >
        <ShowcaseVariant
          name="Default"
          exportName="AnimatedBeamDemo"
          sourceFile="components/demo/magic/special-effects/animated-beam.jsx"
        >
          <AnimatedBeamDemo />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Bidirectional"
          exportName="AnimatedBeamDemoBidirectional"
          sourceFile="components/demo/magic/special-effects/animated-beam.jsx"
        >
          <AnimatedBeamDemoBidirectional />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Multiple"
          exportName="AnimatedBeamDemoMultiple"
          sourceFile="components/demo/magic/special-effects/animated-beam.jsx"
        >
          <AnimatedBeamDemoMultiple />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="border-beam"
        name="Border Beam"
        description="A traveling beam of light around the border of a container."
        docsUrl="https://magicui.design/docs/components/border-beam"
        sourceFile="components/ui/magic/special-effects/border-beam.jsx"
      >
        <ShowcaseVariant
          name="Default"
          exportName="BorderBeamDemo"
          sourceFile="components/demo/magic/special-effects/border-beam.jsx"
        >
          <BorderBeamDemo />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Component variant"
          exportName="BorderBeamDemoComponent"
          sourceFile="components/demo/magic/special-effects/border-beam.jsx"
        >
          <BorderBeamDemoComponent />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="shine-border"
        name="Shine Border"
        description="A border with an animated shine sweeping along it."
        docsUrl="https://magicui.design/docs/components/shine-border"
        sourceFile="components/ui/magic/special-effects/shine-border.jsx"
      >
        <ShowcaseVariant
          name="Default"
          exportName="ShineBorderDemo"
          sourceFile="components/demo/magic/special-effects/shine-border.jsx"
        >
          <ShineBorderDemo />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Monotone"
          exportName="ShineBorderDemoMonotone"
          sourceFile="components/demo/magic/special-effects/shine-border.jsx"
        >
          <ShineBorderDemoMonotone />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="magic-card"
        name="Magic Card"
        description="A spotlight effect that follows the mouse on a card."
        docsUrl="https://magicui.design/docs/components/magic-card"
        sourceFile="components/ui/magic/special-effects/magic-card.jsx"
      >
        <ShowcaseVariant
          name="Default"
          exportName="MagicCardDemo"
          sourceFile="components/demo/magic/special-effects/magic-card.jsx"
        >
          <MagicCardDemo />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Orb"
          exportName="MagicCardDemoOrb"
          sourceFile="components/demo/magic/special-effects/magic-card.jsx"
        >
          <MagicCardDemoOrb />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="glare-hover"
        name="Glare Hover"
        description="A glare effect that follows the mouse pointer on hover."
        docsUrl="https://magicui.design/docs/components/glare-hover"
        sourceFile="components/ui/magic/special-effects/glare-hover.jsx"
      >
        <ShowcaseVariant
          name="Default"
          exportName="GlareHoverDemo"
          sourceFile="components/demo/magic/special-effects/glare-hover.jsx"
        >
          <GlareHoverDemo />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Alerts"
          exportName="GlareHoverDemoAlerts"
          sourceFile="components/demo/magic/special-effects/glare-hover.jsx"
        >
          <GlareHoverDemoAlerts />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="meteors"
        name="Meteors"
        description="Animated meteor shower background effect."
        docsUrl="https://magicui.design/docs/components/meteors"
        sourceFile="components/ui/magic/special-effects/meteors.jsx"
      >
        <ShowcaseVariant
          name="Default"
          exportName="MeteorsDemo"
          sourceFile="components/demo/magic/special-effects/meteors.jsx"
        >
          <MeteorsDemo />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="confetti"
        name="Confetti"
        description="Imperative confetti effects with multiple firing presets."
        docsUrl="https://magicui.design/docs/components/confetti"
        sourceFile="components/ui/magic/special-effects/confetti.jsx"
      >
        <ShowcaseVariant
          name="Default"
          exportName="ConfettiDemo"
          sourceFile="components/demo/magic/special-effects/confetti.jsx"
        >
          <ConfettiDemo />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Random Angle"
          exportName="ConfettiDemoAngle"
          sourceFile="components/demo/magic/special-effects/confetti.jsx"
        >
          <ConfettiDemoAngle />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Fireworks"
          exportName="ConfettiDemoFireworks"
          sourceFile="components/demo/magic/special-effects/confetti.jsx"
        >
          <ConfettiDemoFireworks />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Side cannons"
          exportName="ConfettiDemoSide"
          sourceFile="components/demo/magic/special-effects/confetti.jsx"
        >
          <ConfettiDemoSide />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Emoji"
          exportName="ConfettiDemoEmoji"
          sourceFile="components/demo/magic/special-effects/confetti.jsx"
        >
          <ConfettiDemoEmoji />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="particles"
        name="Particles"
        description="A configurable particle field background."
        docsUrl="https://magicui.design/docs/components/particles"
        sourceFile="components/ui/magic/special-effects/particles.jsx"
      >
        <ShowcaseVariant
          name="Default"
          exportName="ParticlesDemo"
          sourceFile="components/demo/magic/special-effects/particles.jsx"
        >
          <ParticlesDemo />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="animated-theme-toggler"
        name="Animated Theme Toggler"
        description="Animated dark/light theme toggle button."
        docsUrl="https://magicui.design/docs/components/animated-theme-toggler"
        sourceFile="components/ui/magic/special-effects/animated-theme-toggler.jsx"
      >
        <ShowcaseVariant
          name="Default"
          exportName="AnimatedThemeTogglerDemo"
          sourceFile="components/demo/magic/special-effects/animated-theme-toggler.jsx"
        >
          <AnimatedThemeTogglerDemo />
        </ShowcaseVariant>
      </ShowcaseSection>
    </ShowcasePage>
  )
}
