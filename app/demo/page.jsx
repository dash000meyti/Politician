import Link from "next/link"

export default function DemoPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      
      <h1>Demo</h1>

      <h2>Components</h2>
      <Link className="text-blue-500" href="/demo/components">Components</Link>

      <h2>Magic</h2>
      <Link className="text-blue-500" href="/demo/magic">Magic</Link>

    </div>
  )
}