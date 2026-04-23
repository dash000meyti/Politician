import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/magic"

export function TerminalStart() {
  return (
    <Terminal>
      <TypingAnimation>Line1 : TypingAnimation in Terminal</TypingAnimation>
      <TypingAnimation>Line2 : TypingAnimation in Terminal</TypingAnimation>
      <TypingAnimation>Line3 : TypingAnimation in Terminal</TypingAnimation>
      <AnimatedSpan>✔ Line4 : AnimatedSpan next TypingAnimation in Terminal.</AnimatedSpan>
      <AnimatedSpan>✔ Line5 : AnimatedSpan next TypingAnimation in Terminal.</AnimatedSpan>
      <AnimatedSpan>✔ Line6 : AnimatedSpan next TypingAnimation in Terminal.</AnimatedSpan>
    </Terminal>
  )
}

export function TerminalDemo() {
  return (
    <Terminal>
      <TypingAnimation>&gt; pnpm dlx shadcn@latest init</TypingAnimation>

      <AnimatedSpan className="text-green-500">
        ✔ Preflight checks.
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Verifying framework. Found Next.js.
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Validating Tailwind CSS.
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Validating import alias.
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Writing components.json.
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Checking registry.
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Updating tailwind.config.ts
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Updating app/globals.css
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Installing dependencies.
      </AnimatedSpan>

      <AnimatedSpan className="text-blue-500">
        <span>ℹ Updated 1 file:</span>
        <span className="pl-2">- lib/utils.ts</span>
      </AnimatedSpan>

      <TypingAnimation className="text-muted-foreground">
        Success! Project initialization completed.
      </TypingAnimation>

      <TypingAnimation className="text-muted-foreground">
        You may now add components.
      </TypingAnimation>
    </Terminal>
  )
}