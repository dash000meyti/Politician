# Conventions

## Files

- All component, demo, and showcase files use **kebab-case** with `.jsx`.
- One default-export-style component per file (named exports).
- File name matches the **primary** component name in PascalCase:
  `border-beam.jsx` exports `BorderBeam`.

## Components

- **PascalCase** named exports.
- Sub-components live in the same file, also PascalCase.
- Components that use hooks, browser-only APIs, or client-only libraries
  (motion, cmdk, etc.) start with `"use client"`.
- Server components are the default — only opt into client mode when
  necessary.

## Demo variants

Every UI component has a demo file at the mirrored path with one or more
**variants** that follow this pattern:

| Pattern | When to use |
|---------|-------------|
| `<Name>DemoStart` | Smallest possible example with all defaults. Optional. |
| `<Name>Demo` | The canonical demo (matches Magic UI / shadcn docs). **Required.** |
| `<Name>Demo<Modifier>` | Additional variants (e.g. `BorderBeamDemoComponent`, `ConfettiDemoFireworks`, `LensDemoStatic`). |

Anti-patterns (do not commit these):

```jsx
// ❌ missing the "Demo" segment
export function BorderBeamStart() { … }

// ❌ numbered variants
export function AnimatedBeamDemo2() { … }

// ❌ kebab or lowercase function names
export function border_beam_demo() { … }
```

## Imports

- Demo files import the UI component from `@/components/ui` (or
  `@/components/ui/magic` if needed). Never reach into private files.
- Pages import the showcase library from `@/components/showcase` and demos
  from `@/components/demo`.
- Shared utilities come from `@/lib/utils` (`cn`, etc.).

## Index files

Every leaf folder has an `index.js` that re-exports every file:

```js
export * from "./<name>"
```

Keep entries roughly alphabetical.

## Page composition

Demo pages compose `<ShowcasePage>` → `<ShowcaseSection>` → `<ShowcaseVariant>`
in that order. They never use raw `<h2>` / `<h3>` for component listings or
the legacy `<Spacing>` helper.

## Tailwind

- Tailwind 4 is configured via `app/globals.css`. Use design tokens
  (`bg-background`, `text-muted-foreground`, etc.) instead of raw colors.
- Avoid inline styles unless dynamic values are required.

## Comments

- Code should explain itself. Add comments only when intent is non-obvious.
- Do not narrate what the next line does.
