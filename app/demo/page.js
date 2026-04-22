import {
  MarqueeDemo,
  Marquee3D,
  MarqueeDemoVertical,
  TerminalDemo,
  TerminalDemoFit,
  HeroVideoDialogDemo,
  HeroVideoDialogDemoTopInBottomOut,
} from '@/components/demo'

export default function Home() {
  return (
    <>
      <h1>
        Components
      </h1>

      <div className='w-full h-1 bg-gray-400 my-4' />

      <h2>
        Marquee
      </h2>

      <div className='w-full h-1 bg-gray-200 my-4' />

      <h3>
        Marquee demo
      </h3>
      <MarqueeDemo />

      <div className='w-full h-1 bg-gray-200 my-4' />

      <h3>
        Marquee vertical
      </h3>
      <MarqueeDemoVertical />

      <div className='w-full h-1 bg-gray-200 my-4' />

      <h3>
        Marquee 3D
      </h3>
      <Marquee3D />

      <div className='w-full h-1 bg-gray-400 my-4' />

      <h2>
        Terminal
      </h2>

      <div className='w-full h-1 bg-gray-200 my-4' />

      <h3>
        Terminal demo
      </h3>
      <TerminalDemo />

      <div className='w-full h-1 bg-gray-200 my-4' />

      <h3>
        Terminal demo
      </h3>
      <TerminalDemoFit />

      <div className='w-full h-1 bg-gray-400 my-4' />

      <h2>
        Hero Video Dialog
      </h2>

      <div className='w-full h-1 bg-gray-200 my-4' />

      <h3>
        Hero Video Dialog demo
      </h3>
      <HeroVideoDialogDemo />

      <div className='w-full h-1 bg-gray-400 my-4' />

      <h3>
        Hero Video Dialog demo
      </h3>
      <HeroVideoDialogDemoTopInBottomOut />

    </>
  )
}