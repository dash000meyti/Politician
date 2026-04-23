import Link from "next/link"

import {
  AccordionStart,
  AccordionDemo,
  AccordionDemoMultipleDisabled,
  AccordionDemoRtl,
} from "@/components/demo/components/accordion"

export function Spacing(value = 'bg-gray-200') {
  return <div className={`w-full h-1 ${value} my-4`} />
}

export default function DemoComponentsPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">

      <Link className="text-blue-500" href="/demo">Back</Link>

      <h1>Components</h1>
      <Spacing value='bg-gray-400' />

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
      <Spacing />

    </div>
  )
}