import Link from "next/link"

import {
  MarqueeDemo,
  Marquee3D,
  MarqueeDemoVertical,
  TerminalStart,
  TerminalDemo,
  HeroVideoDialogStart,
  HeroVideoDialogDemo,
  HeroVideoDialogDemoTopInBottomOut,
  BentoStart,
  BentoDemo,
  AnimatedListStart,
  AnimatedListDemo,
  DockStart,
  DockDemo,
  TweetDemo,
  OrbitingCirclesStart,
  OrbitingCirclesDemo,
  AvatarCirclesStart,
  AvatarCirclesDemo,
  LensStart,
  LensDemo,
  LensDemoStatic,
  PointerStart,
  PointerDemo,
  SmoothCursorDemo,
  ProgressiveBlurStart,
  ProgressiveBlurDemo,
  DottedMapStart,
  DottedMapDemo,
  DottedMapDemoPulse,
} from '@/components/demo'

export function Spacing(value = 'bg-gray-200') {
  return <div className={`w-full h-1 ${value} my-4`} />
}

export default function DemoMagicComponentsPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Link className="text-blue-500" href="/demo/magic">Back</Link>
      <h1>Magic Components</h1>
      <Spacing value='bg-gray-400' />

      <h2>Marquee</h2>
      <Spacing />

      <h3>Marquee demo</h3>
      <MarqueeDemo />
      <Spacing />

      <h3>Marquee vertical</h3>
      <MarqueeDemoVertical />
      <Spacing />

      <h3>Marquee 3D</h3>
      <Marquee3D />
      <Spacing value='bg-gray-400' />

      <h2>Terminal</h2>
      <Spacing />

      <h3>Start</h3>
      <TerminalStart />
      <Spacing />

      <h3>Terminal demo</h3>
      <TerminalDemo />
      <Spacing value='bg-gray-400' />

      <h2>Hero Video Dialog</h2>
      <Spacing />

      <h3>Start</h3>
      <HeroVideoDialogStart />
      <Spacing />

      <h3>Hero Video Dialog demo</h3>
      <HeroVideoDialogDemo />
      <Spacing value='bg-gray-400' />

      <h3>Hero Video Dialog demo top in bottom out</h3>
      <HeroVideoDialogDemoTopInBottomOut />
      <Spacing value='bg-gray-400' />

      <h2>Bento Grid</h2>
      <Spacing />

      <h3>Start</h3>
      <BentoStart />
      <Spacing />

      <h3>Bento Grid demo</h3>
      <BentoDemo />
      <Spacing value='bg-gray-400' />

      <h2>Animated List</h2>
      <Spacing />

      <h3>Start</h3>
      <AnimatedListStart />
      <Spacing />

      <h3>Animated List demo</h3>
      <AnimatedListDemo />
      <Spacing value='bg-gray-400' />

      <h2>Dock</h2>
      <Spacing />

      <h3>Start</h3>
      <DockStart />
      <Spacing />

      <h3>Animated List demo</h3>
      <DockDemo />
      <Spacing value='bg-gray-400' />

      <h2>Tweet Card</h2>
      <Spacing />

      <h3>Tweet demo</h3>
      <TweetDemo />
      <Spacing value='bg-gray-400' />

      <h2>Orbiting Circles</h2>
      <Spacing />

      <h3>Start</h3>
      <OrbitingCirclesStart />
      <Spacing />

      <h3>Orbiting Circles</h3>
      <OrbitingCirclesDemo />
      <Spacing value='bg-gray-400' />

      <h2>Avatar Circles</h2>
      <Spacing />

      <h3>Start</h3>
      <AvatarCirclesStart />
      <Spacing />

      <h3>Avatar Circles Demo</h3>
      <AvatarCirclesDemo />
      <Spacing value='bg-gray-400' />

      <h2>Lens</h2>
      <Spacing />

      <h3>Start</h3>
      <LensStart />
      <Spacing />

      <h3>Lens Demo</h3>
      <LensDemo />
      <Spacing />

      <h3>Lens Demo Static</h3>
      <LensDemoStatic />
      <Spacing value='bg-gray-400' />

      <h2>Pointer</h2>
      <Spacing />

      <h3>Start</h3>
      <PointerStart />
      <Spacing />

      <h3>Pointer Demo</h3>
      <PointerDemo />
      <Spacing value='bg-gray-400' />

      <h2>Smooth Curso</h2>
      <Spacing />

      <h3>Smooth Cursor Demo // coment</h3>
      {/* <SmoothCursorDemo /> */}
      <Spacing value='bg-gray-400' />

      <h2>Progressive Blur</h2>
      <Spacing />

      <h3>Start</h3>
      <ProgressiveBlurStart />
      <Spacing value='bg-gray-400' />

      <h2>Dotted Map</h2>
      <Spacing />

      <h3>Start</h3>
      <DottedMapStart />
      <Spacing />

      <h3>Dotted Map Demo</h3>
      <DottedMapDemo />
      <Spacing />

      <h3>Dotted Map Demo Pulse</h3>
      <DottedMapDemoPulse />




    </div>
  )
}