import { ShowcasePage, ShowcaseSection, ShowcaseVariant } from "@/components/showcase"
import {
  SafariDemoStart,
  SafariDemo,
  SafariDemoSimple,
  IphoneDemoStart,
  IphoneDemo,
  AndroidDemoStart,
  AndroidDemo,
} from "@/components/demo"

const crumbs = [
  { label: "Demo", href: "/demo" },
  { label: "Magic UI", href: "/demo/magic" },
  { label: "Device Mocks" },
]

export default function DemoMagicDevicePage() {
  return (
    <ShowcasePage
      title="Device Mocks"
      group="magic/device"
      crumbs={crumbs}
      description="Safari, iPhone and Android device frames for screenshot mockups."
    >
      <ShowcaseSection
        id="safari"
        name="Safari"
        description="A macOS Safari window mock for desktop screenshots."
        docsUrl="https://magicui.design/docs/components/safari"
        sourceFile="components/ui/magic/device/safari.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="SafariDemoStart"
          sourceFile="components/demo/magic/device/safari.jsx"
        >
          <SafariDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default"
          exportName="SafariDemo"
          sourceFile="components/demo/magic/device/safari.jsx"
        >
          <SafariDemo />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Simple mode"
          exportName="SafariDemoSimple"
          sourceFile="components/demo/magic/device/safari.jsx"
        >
          <SafariDemoSimple />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="iphone"
        name="iPhone"
        description="An iPhone device frame for portrait mobile screenshots."
        docsUrl="https://magicui.design/docs/components/iphone"
        sourceFile="components/ui/magic/device/iphone.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="IphoneDemoStart"
          sourceFile="components/demo/magic/device/iphone.jsx"
        >
          <IphoneDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default"
          exportName="IphoneDemo"
          sourceFile="components/demo/magic/device/iphone.jsx"
        >
          <IphoneDemo />
        </ShowcaseVariant>
      </ShowcaseSection>

      <ShowcaseSection
        id="android"
        name="Android"
        description="A Pixel-style Android device frame for portrait mobile screenshots."
        docsUrl="https://magicui.design/docs/components/android"
        sourceFile="components/ui/magic/device/android.jsx"
      >
        <ShowcaseVariant
          name="Start (minimal)"
          exportName="AndroidDemoStart"
          sourceFile="components/demo/magic/device/android.jsx"
        >
          <AndroidDemoStart />
        </ShowcaseVariant>
        <ShowcaseVariant
          name="Default"
          exportName="AndroidDemo"
          sourceFile="components/demo/magic/device/android.jsx"
        >
          <AndroidDemo />
        </ShowcaseVariant>
      </ShowcaseSection>
    </ShowcasePage>
  )
}
