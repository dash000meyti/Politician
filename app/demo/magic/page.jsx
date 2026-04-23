import Link from "next/link"

export default function DemoMagicPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Link className="text-blue-500" href="/demo">Back</Link>
      <h1>Magic</h1>
      <h2>Components</h2>
      <Link className="text-blue-500" href="/demo/magic/components">Magic Components</Link>
    </div>
  )
}