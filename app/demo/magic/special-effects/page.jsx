import Link from "next/link"

import {
  AnimatedBeamDemo,
  AnimatedBeamDemo2,
  AnimatedBeamDemoMultiple,
  BorderBeamDemo,
  BorderBeamDemoComponent,
  ShineBorderDemo,
  ShineBorderDemoMonotone,
  MagicCardDemo,
  MagicCardDemoOrb,
  GlareEffectsDemo,
  GlareEffectsDemoAlerts,
  MeteorDemo,
  ConfettiDemo,
  ConfettiDemoAngle,
  ConfettiDemoFireworks,
  ConfettiDemoSide,
  ConfettiDemoEmoji,
  ParticlesDemo,
  AnimatedThemeTogglerDemo,
  BlurFadeDemo,
} from '@/components/demo'

export function Spacing({ dark = false } = {}) {
  const bgClass = dark ? "bg-gray-400" : "bg-gray-100"
  return <div className={`w-full h-1 ${bgClass} my-4`} />
}

export default function DemoMagicSpecialEffectsPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">

      <Link className="text-blue-500" href="/demo/magic">Back</Link>

      <h1>Special Effects</h1>
      <Spacing dark />

      <h2>Animated Beam</h2>
      <Spacing />

      <h3>AnimatedBeamDemo</h3>
      <AnimatedBeamDemo />
      <Spacing />

      <h3>AnimatedBeamDemo2</h3>
      <AnimatedBeamDemo2 />
      <Spacing />

      <h3>AnimatedBeamDemoMultiple</h3>
      <AnimatedBeamDemoMultiple />
      <Spacing dark />

      <h2>Border Beam</h2>
      <Spacing />

      <h3>BorderBeamDemo</h3>
      <BorderBeamDemo />
      <Spacing />

      <h3>BorderBeamDemoComponent</h3>
      <BorderBeamDemoComponent />
      <Spacing dark />

      <h2>Shine Border</h2>
      <Spacing />

      <h3>ShineBorderDemo</h3>
      <ShineBorderDemo />
      <Spacing />

      <h3>ShineBorderDemoMonotone</h3>
      <ShineBorderDemoMonotone />
      <Spacing dark />

      <h2>Magic Card</h2>
      <Spacing />

      <h3>MagicCardDemo</h3>
      <MagicCardDemo />
      <Spacing />

      <h3>MagicCardDemoOrb</h3>
      <MagicCardDemoOrb />
      <Spacing dark />

      <h2>Glare Effects</h2>
      <Spacing />

      <h3>GlareEffectsDemo</h3>
      <GlareEffectsDemo />
      <Spacing />

      <h3>GlareEffectsDemoAlerts</h3>
      <GlareEffectsDemoAlerts />
      <Spacing dark />

      <h2>Meteor</h2>
      <Spacing />

      <h3>MeteorDemo</h3>
      <MeteorDemo />
      <Spacing dark />

      <h2>Meteor</h2>
      <Spacing />

      <h3>ConfettiDemo</h3>
      <ConfettiDemo />
      <Spacing />

      <h3>ConfettiDemoAngle</h3>
      <ConfettiDemoAngle />
      <Spacing />

      <h3>ConfettiDemoFireworks</h3>
      <ConfettiDemoFireworks />
      <Spacing />

      <h3>ConfettiDemoSide</h3>
      <ConfettiDemoSide />
      <Spacing />

      <h3>ConfettiDemoEmoji</h3>
      <ConfettiDemoEmoji />
      <Spacing dark />

      <h2>Particles</h2>
      <Spacing />

      <h3>ParticlesDemo</h3>
      <ParticlesDemo />
      <Spacing dark/>

      <h2>Animated Theme Toggler</h2>
      <Spacing />

      <h3>AnimatedThemeTogglerDemo</h3>
      <AnimatedThemeTogglerDemo />
      <Spacing dark/>

      <h2>Blur Fade</h2>
      <Spacing />

      <h3>BlurFadeDemo</h3>
      <BlurFadeDemo />
      <Spacing dark/>

    </div>
  )
}