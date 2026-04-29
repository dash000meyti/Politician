import { CodeComparison } from "@/components/ui/magic"

const BEFORE = `export function Card({ children }) {
  return (
    <div className="rounded-md border p-4">
      {children}
    </div>
  )
}`

const AFTER = `import { cn } from "@/lib/utils"

export function Card({ children, className }) {
  return (
    <div
      className={cn(
        "rounded-xl border bg-card p-6 shadow-sm",
        className
      )}
    >
      {children}
    </div>
  )
}`

export function CodeComparisonDemoStart() {
  return (
    <CodeComparison
      beforeCode={BEFORE}
      afterCode={AFTER}
      language="tsx"
      filename="card.tsx"
      lightTheme="github-light"
      darkTheme="github-dark"
    />
  )
}

export function CodeComparisonDemo() {
  return (
    <CodeComparison
      beforeCode={BEFORE}
      afterCode={AFTER}
      language="tsx"
      filename="card.tsx"
      lightTheme="github-light"
      darkTheme="github-dark"
      highlightColor="rgba(101, 117, 133, .16)"
    />
  )
}
