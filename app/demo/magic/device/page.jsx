import { ShowcasePage } from "@/components/showcase"

const crumbs = [
  { label: "Home", href: "/" },
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
      {null}
    </ShowcasePage>
  )
}
