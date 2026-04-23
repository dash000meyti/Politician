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

      <h3>Accordion demo</h3>
      <AccordionDemo />
      <Spacing />

      <h3>Accordion demo multiple disabled</h3>
      <AccordionDemoMultipleDisabled />
      <Spacing />

      <h3>Accordion Demo Rtl</h3>
      <AccordionDemoRtl />
      <Spacing dark />

      <h2>Alert</h2>
      <Spacing />

      <h3>Alert Demo</h3>
      <AlertDemo />
      <Spacing />

      <h3>Alert Demo Destructive</h3>
      <AlertDemoDestructive />
      <Spacing />

      <h3>Alert Demo Action</h3>
      <AlertDemoAction />
      <Spacing />

      <h3>Alert Demo Custom Colors</h3>
      <AlertDemoCustomColors />
      <Spacing dark />

      <h2>Alert Dialog</h2>
      <Spacing />

      <h3>Alert Dialog Demo</h3>
      <AlertDialogDemo />
      <Spacing />

      <h3>Alert Dialog Demo Small</h3>
      <AlertDialogDemoSmall />
      <Spacing />

      <h3>Alert Dialog Demo Media</h3>
      <AlertDialogDemoMedia />
      <Spacing />

      <h3>Alert Dialog Demo Small Media</h3>
      <AlertDialogDemoSmallMedia />
      <Spacing />

      <h3>Alert Dialog Demo Destructive</h3>
      <AlertDialogDemoDestructive />
      <Spacing dark />







    </div>
  )
}