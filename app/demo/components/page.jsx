import Link from "next/link"

import {
  AccordionStart,
  AccordionDemo,
  AccordionDemoMultipleDisabled,
  AccordionDemoRtl,
  AlertDemo,
  AlertDemoDestructive,
  AlertDemoAction,
  AlertDemoCustomColors,
  AlertDialogDemo,
  AlertDialogDemoSmall,
  AlertDialogDemoMedia,
  AlertDialogDemoSmallMedia,
  AlertDialogDemoDestructive,
  AspectRatioDemo,
  AvatarDemo,
  AvatarDemoBadge,
  AvatarDemoBadgeIcon,
  AvatarDemoGroup,
  AvatarDemoGroupCount,
  AvatarDemoGroupIcon,
  AvatarDemoSizes,
  BadgeDemo,
  BadgeDemoIcon,
  BadgeDemoColors,
  BreadcrumbDemo,
  BreadcrumbDemoSeparator,
  // BreadcrumbDemoDropdown,
} from "@/components/demo"

export function Spacing({ dark = false } = {}) {
  const bgClass = dark ? "bg-gray-400" : "bg-gray-100"
  return <div className={`w-full h-1 ${bgClass} my-4`} />
}

export default function DemoComponentsPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">

      <Link className="text-blue-500" href="/demo">Back</Link>

      <h1>Components</h1>
      <Spacing dark />

      <h2>Accordion</h2>
      <Spacing />

      <h3>start</h3>
      <AccordionStart />
      <Spacing />

      <h3>Accordiondemo</h3>
      <AccordionDemo />
      <Spacing />

      <h3>AccordionDemoMultipleDisabled</h3>
      <AccordionDemoMultipleDisabled />
      <Spacing />

      <h3>AccordionDemoRtl</h3>
      <AccordionDemoRtl />
      <Spacing dark />

      <h2>Alert</h2>
      <Spacing />

      <h3>AlertDemo</h3>
      <AlertDemo />
      <Spacing />

      <h3>AlertDemoDestructive</h3>
      <AlertDemoDestructive />
      <Spacing />

      <h3>AlertDemoAction</h3>
      <AlertDemoAction />
      <Spacing />

      <h3>AlertDemoCustomColors</h3>
      <AlertDemoCustomColors />
      <Spacing dark />

      <h2>Alert Dialog</h2>
      <Spacing />

      <h3>AlertDialogDemo</h3>
      <AlertDialogDemo />
      <Spacing />

      <h3>AlertDialogDemoSmall</h3>
      <AlertDialogDemoSmall />
      <Spacing />

      <h3>AlertDialogDemoMedia</h3>
      <AlertDialogDemoMedia />
      <Spacing />

      <h3>AlertDialogDemoSmallMedia</h3>
      <AlertDialogDemoSmallMedia />
      <Spacing />

      <h3>AlertDialogDemoDestructive</h3>
      <AlertDialogDemoDestructive />
      <Spacing dark />

      <h2>Aspect Ratio</h2>
      <Spacing />

      <h3>AspectRatioDemo</h3>
      <AspectRatioDemo />
      <Spacing dark />

      <h2>Avatar</h2>
      <Spacing />

      <h3>AvatarDemo</h3>
      <AvatarDemo />
      <Spacing />

      <h3>AvatarDemoBadge</h3>
      <AvatarDemoBadge />
      <Spacing />

      <h3>AvatarDemoBadgeIcon</h3>
      <AvatarDemoBadgeIcon />
      <Spacing />

      <h3>AvatarDemoGroup</h3>
      <AvatarDemoGroup />
      <Spacing />

      <h3>AvatarDemoGroupCount</h3>
      <AvatarDemoGroupCount />
      <Spacing />

      <h3>AvatarDemoGroupIcon</h3>
      <AvatarDemoGroupIcon />
      <Spacing />

      <h3>AvatarDemoSizes</h3>
      <AvatarDemoSizes />
      <Spacing dark />

      <h2>Badge</h2>
      <Spacing />

      <h3>BadgeDemo</h3>
      <BadgeDemo />
      <Spacing />

      <h3>BadgeDemoIcon</h3>
      <BadgeDemoIcon />
      <Spacing />

      <h3>BadgeDemoColors</h3>
      <BadgeDemoColors />
      <Spacing dark />

      <h2>Breadcrumb</h2>
      <Spacing />

      <h3>BreadcrumbDemo</h3>
      <BreadcrumbDemo />
      <Spacing />

      <h3>BreadcrumbDemoSeparator</h3>
      <BreadcrumbDemoSeparator />
      <Spacing />

      <h3>BreadcrumbDemoDropdown // coment</h3>
      {/* <BreadcrumbDemoDropdown /> */}
      <Spacing dark />






    </div>
  )
}