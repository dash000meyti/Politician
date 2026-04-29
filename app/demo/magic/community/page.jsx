import { ShowcasePage } from "@/components/showcase"

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
      {null}
    </ShowcasePage>
  )
}
