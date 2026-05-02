import { ShowcasePage, ShowcaseSection, ShowcaseVariant } from "@/components/showcase"
import {
  TextAnimateDemoStart,
  TextAnimateDemo,
  TextAnimateDemoFade,
  TextAnimateDemoSlideUp,
  TextAnimateDemoScaleUp,
  TypingAnimationDemoStart,
  TypingAnimationDemo,
  LineShadowTextDemoStart,
  LineShadowTextDemo,
  AuroraTextDemoStart,
  AuroraTextDemo,
  VideoTextDemoStart,
  VideoTextDemo,
  NumberTickerDemoStart,
  NumberTickerDemo,
  NumberTickerDemoDecimal,
  NumberTickerDemoCountDown,
  AnimatedShinyTextDemoStart,
  AnimatedShinyTextDemo,
  AnimatedGradientTextDemoStart,
  AnimatedGradientTextDemo,
  TextRevealDemoStart,
  TextRevealDemo,
  DiaTextRevealDemoStart,
  DiaTextRevealDemo,
  DiaTextRevealDemoMulti,
  HyperTextDemoStart,
  HyperTextDemo,
  HyperTextDemoStartOnView,
  WordRotateDemoStart,
  WordRotateDemo,
  ScrollBasedVelocityDemoStart,
  ScrollBasedVelocityDemo,
  SparklesTextDemoStart,
  SparklesTextDemo,
  SparklesTextDemoColors,
  MorphingTextDemoStart,
  MorphingTextDemo,
  SpinningTextDemoStart,
  SpinningTextDemo,
  SpinningTextDemoReverse,
  SpinningTextDemoSlow,
  HighlighterDemoStart,
  HighlighterDemo,
  HighlighterDemoCircle,
  Text3DFlipDemoStart,
  Text3DFlipDemo,
  Text3DFlipDemoTop,
  Text3DFlipDemoCenter,
} from "@/components/demo"

const crumbs = [
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
      <ShowcaseSection
        id="text-animate"
        name="Text Animate"
        description="Versatile text animation primitive with multiple animations and per-segment splitting."
        docsUrl="https://magicui.design/docs/components/text-animate"
        sourceFile="components/ui/magic/text/text-animate.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="TextAnimateDemoStart"
          sourceFile="components/demo/magic/text/text-animate.jsx"
        >
          <TextAnimateDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default (Blur in by character)"
          exportName="TextAnimateDemo"
          sourceFile="components/demo/magic/text/text-animate.jsx"
        >
          <TextAnimateDemo />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Fade in by line"
          exportName="TextAnimateDemoFade"
          sourceFile="components/demo/magic/text/text-animate.jsx"
        >
          <TextAnimateDemoFade />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Slide up by word"
          exportName="TextAnimateDemoSlideUp"
          sourceFile="components/demo/magic/text/text-animate.jsx"
        >
          <TextAnimateDemoSlideUp />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Scale up"
          exportName="TextAnimateDemoScaleUp"
          sourceFile="components/demo/magic/text/text-animate.jsx"
        >
          <TextAnimateDemoScaleUp />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="typing-animation"
        name="Typing Animation"
        description="A character-by-character typewriter animation."
        docsUrl="https://magicui.design/docs/components/typing-animation"
        sourceFile="components/ui/magic/text/typing-animation.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="TypingAnimationDemoStart"
          sourceFile="components/demo/magic/text/typing-animation.jsx"
        >
          <TypingAnimationDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default"
          exportName="TypingAnimationDemo"
          sourceFile="components/demo/magic/text/typing-animation.jsx"
        >
          <TypingAnimationDemo />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="line-shadow-text"
        name="Line Shadow Text"
        description="Text with an animated line-style shadow."
        docsUrl="https://magicui.design/docs/components/line-shadow-text"
        sourceFile="components/ui/magic/text/line-shadow-text.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="LineShadowTextDemoStart"
          sourceFile="components/demo/magic/text/line-shadow-text.jsx"
        >
          <LineShadowTextDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default"
          exportName="LineShadowTextDemo"
          sourceFile="components/demo/magic/text/line-shadow-text.jsx"
        >
          <LineShadowTextDemo />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="aurora-text"
        name="Aurora Text"
        description="A flowing aurora gradient applied to inline text."
        docsUrl="https://magicui.design/docs/components/aurora-text"
        sourceFile="components/ui/magic/text/aurora-text.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="AuroraTextDemoStart"
          sourceFile="components/demo/magic/text/aurora-text.jsx"
        >
          <AuroraTextDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default"
          exportName="AuroraTextDemo"
          sourceFile="components/demo/magic/text/aurora-text.jsx"
        >
          <AuroraTextDemo />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="video-text"
        name="Video Text"
        description="Text masked over a looping background video."
        docsUrl="https://magicui.design/docs/components/video-text"
        sourceFile="components/ui/magic/text/video-text.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="VideoTextDemoStart"
          sourceFile="components/demo/magic/text/video-text.jsx"
        >
          <VideoTextDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default"
          exportName="VideoTextDemo"
          sourceFile="components/demo/magic/text/video-text.jsx"
        >
          <VideoTextDemo />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="number-ticker"
        name="Number Ticker"
        description="Animated number counter that springs up to a target value."
        docsUrl="https://magicui.design/docs/components/number-ticker"
        sourceFile="components/ui/magic/text/number-ticker.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="NumberTickerDemoStart"
          sourceFile="components/demo/magic/text/number-ticker.jsx"
        >
          <NumberTickerDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default"
          exportName="NumberTickerDemo"
          sourceFile="components/demo/magic/text/number-ticker.jsx"
        >
          <NumberTickerDemo />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Decimal"
          exportName="NumberTickerDemoDecimal"
          sourceFile="components/demo/magic/text/number-ticker.jsx"
        >
          <NumberTickerDemoDecimal />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Count down"
          exportName="NumberTickerDemoCountDown"
          sourceFile="components/demo/magic/text/number-ticker.jsx"
        >
          <NumberTickerDemoCountDown />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="animated-shiny-text"
        name="Animated Shiny Text"
        description="Subtle shimmering reflection over text — great for badges."
        docsUrl="https://magicui.design/docs/components/animated-shiny-text"
        sourceFile="components/ui/magic/text/animated-shiny-text.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="AnimatedShinyTextDemoStart"
          sourceFile="components/demo/magic/text/animated-shiny-text.jsx"
        >
          <AnimatedShinyTextDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default"
          exportName="AnimatedShinyTextDemo"
          sourceFile="components/demo/magic/text/animated-shiny-text.jsx"
        >
          <AnimatedShinyTextDemo />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="animated-gradient-text"
        name="Animated Gradient Text"
        description="Text with an animated gradient sweep effect."
        docsUrl="https://magicui.design/docs/components/animated-gradient-text"
        sourceFile="components/ui/magic/text/animated-gradient-text.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="AnimatedGradientTextDemoStart"
          sourceFile="components/demo/magic/text/animated-gradient-text.jsx"
        >
          <AnimatedGradientTextDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default"
          exportName="AnimatedGradientTextDemo"
          sourceFile="components/demo/magic/text/animated-gradient-text.jsx"
        >
          <AnimatedGradientTextDemo />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="text-reveal"
        name="Text Reveal"
        description="Reveals text word-by-word as the user scrolls."
        docsUrl="https://magicui.design/docs/components/text-reveal"
        sourceFile="components/ui/magic/text/text-reveal.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="TextRevealDemoStart"
          sourceFile="components/demo/magic/text/text-reveal.jsx"
        >
          <TextRevealDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default"
          exportName="TextRevealDemo"
          sourceFile="components/demo/magic/text/text-reveal.jsx"
        >
          <TextRevealDemo />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="dia-text-reveal"
        name="Dia Text Reveal"
        description="Color-band text reveal animation inspired by Dia."
        docsUrl="https://magicui.design/docs/components/dia-text-reveal"
        sourceFile="components/ui/magic/text/dia-text-reveal.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="DiaTextRevealDemoStart"
          sourceFile="components/demo/magic/text/dia-text-reveal.jsx"
        >
          <DiaTextRevealDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default"
          exportName="DiaTextRevealDemo"
          sourceFile="components/demo/magic/text/dia-text-reveal.jsx"
        >
          <DiaTextRevealDemo />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Multi text"
          exportName="DiaTextRevealDemoMulti"
          sourceFile="components/demo/magic/text/dia-text-reveal.jsx"
        >
          <DiaTextRevealDemoMulti />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="hyper-text"
        name="Hyper Text"
        description="Random-character scramble that resolves to the target text."
        docsUrl="https://magicui.design/docs/components/hyper-text"
        sourceFile="components/ui/magic/text/hyper-text.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="HyperTextDemoStart"
          sourceFile="components/demo/magic/text/hyper-text.jsx"
        >
          <HyperTextDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default"
          exportName="HyperTextDemo"
          sourceFile="components/demo/magic/text/hyper-text.jsx"
        >
          <HyperTextDemo />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Start on view"
          exportName="HyperTextDemoStartOnView"
          sourceFile="components/demo/magic/text/hyper-text.jsx"
        >
          <HyperTextDemoStartOnView />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="word-rotate"
        name="Word Rotate"
        description="Cycles through a list of words with a fade/slide animation."
        docsUrl="https://magicui.design/docs/components/word-rotate"
        sourceFile="components/ui/magic/text/word-rotate.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="WordRotateDemoStart"
          sourceFile="components/demo/magic/text/word-rotate.jsx"
        >
          <WordRotateDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default"
          exportName="WordRotateDemo"
          sourceFile="components/demo/magic/text/word-rotate.jsx"
        >
          <WordRotateDemo />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="scroll-based-velocity"
        name="Scroll Based Velocity"
        description="Marquee rows that speed up and change direction with the scroll velocity."
        docsUrl="https://magicui.design/docs/components/scroll-based-velocity"
        sourceFile="components/ui/magic/text/scroll-based-velocity.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="ScrollBasedVelocityDemoStart"
          sourceFile="components/demo/magic/text/scroll-based-velocity.jsx"
        >
          <ScrollBasedVelocityDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default"
          exportName="ScrollBasedVelocityDemo"
          sourceFile="components/demo/magic/text/scroll-based-velocity.jsx"
        >
          <ScrollBasedVelocityDemo />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="sparkles-text"
        name="Sparkles Text"
        description="Text with twinkling sparkle particles around it."
        docsUrl="https://magicui.design/docs/components/sparkles-text"
        sourceFile="components/ui/magic/text/sparkles-text.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="SparklesTextDemoStart"
          sourceFile="components/demo/magic/text/sparkles-text.jsx"
        >
          <SparklesTextDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default"
          exportName="SparklesTextDemo"
          sourceFile="components/demo/magic/text/sparkles-text.jsx"
        >
          <SparklesTextDemo />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Custom colors"
          exportName="SparklesTextDemoColors"
          sourceFile="components/demo/magic/text/sparkles-text.jsx"
        >
          <SparklesTextDemoColors />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="morphing-text"
        name="Morphing Text"
        description="Smooth blur-morph transition between a list of words."
        docsUrl="https://magicui.design/docs/components/morphing-text"
        sourceFile="components/ui/magic/text/morphing-text.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="MorphingTextDemoStart"
          sourceFile="components/demo/magic/text/morphing-text.jsx"
        >
          <MorphingTextDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default"
          exportName="MorphingTextDemo"
          sourceFile="components/demo/magic/text/morphing-text.jsx"
        >
          <MorphingTextDemo />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="spinning-text"
        name="Spinning Text"
        description="Text laid out on a circle, rotating endlessly."
        docsUrl="https://magicui.design/docs/components/spinning-text"
        sourceFile="components/ui/magic/text/spinning-text.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="SpinningTextDemoStart"
          sourceFile="components/demo/magic/text/spinning-text.jsx"
        >
          <SpinningTextDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default"
          exportName="SpinningTextDemo"
          sourceFile="components/demo/magic/text/spinning-text.jsx"
        >
          <SpinningTextDemo />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Reverse"
          exportName="SpinningTextDemoReverse"
          sourceFile="components/demo/magic/text/spinning-text.jsx"
        >
          <SpinningTextDemoReverse />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Slow & wide"
          exportName="SpinningTextDemoSlow"
          sourceFile="components/demo/magic/text/spinning-text.jsx"
        >
          <SpinningTextDemoSlow />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="highlighter"
        name="Text Highlighter"
        description="Hand-drawn underline, highlight, or circle annotation that draws on inline text."
        docsUrl="https://magicui.design/docs/components/highlighter"
        sourceFile="components/ui/magic/text/highlighter.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="HighlighterDemoStart"
          sourceFile="components/demo/magic/text/highlighter.jsx"
        >
          <HighlighterDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default"
          exportName="HighlighterDemo"
          sourceFile="components/demo/magic/text/highlighter.jsx"
        >
          <HighlighterDemo />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Circle"
          exportName="HighlighterDemoCircle"
          sourceFile="components/demo/magic/text/highlighter.jsx"
        >
          <HighlighterDemoCircle />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="text-3d-flip"
        name="Text 3D Flip"
        description="Per-character 3D flip animation on hover, with configurable rotation direction and stagger."
        docsUrl="https://magicui.design/docs/components/text-3d-flip"
        sourceFile="components/ui/magic/text/text-3d-flip.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="Text3DFlipDemoStart"
          sourceFile="components/demo/magic/text/text-3d-flip.jsx"
        >
          <Text3DFlipDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default"
          exportName="Text3DFlipDemo"
          sourceFile="components/demo/magic/text/text-3d-flip.jsx"
        >
          <Text3DFlipDemo />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Top rotate"
          exportName="Text3DFlipDemoTop"
          sourceFile="components/demo/magic/text/text-3d-flip.jsx"
        >
          <Text3DFlipDemoTop />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Center stagger"
          exportName="Text3DFlipDemoCenter"
          sourceFile="components/demo/magic/text/text-3d-flip.jsx"
        >
          <Text3DFlipDemoCenter />
        </ShowcaseVariant>
      </ShowcaseSection>
    </ShowcasePage>
  )
}
