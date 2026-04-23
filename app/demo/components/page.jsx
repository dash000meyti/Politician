import Link from "next/link"

export function Spacing(value = 'bg-gray-200') {
  return <div className={`w-full h-1 ${value} my-4`} />
}

export default function DemoComponentsPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Link className="text-blue-500" href="/demo">Back</Link>
      <h1>Components</h1>
      <Spacing value='bg-gray-400' />

      <h2>Button</h2>
      <Spacing />

      <h3>Button demo</h3>
      {/* <ButtonDemo /> */}
      <Spacing />
    </div>
  )
}