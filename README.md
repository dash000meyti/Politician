# Magic UI Starter

A Next.js 16 + React 19 + Tailwind 4 + shadcn (`radix-nova`) + Magic UI starter
with a built-in interactive component showcase at `/demo`.

## Features

- Pre-installed **shadcn** primitive set (~60 components)
- Pre-installed Magic UI selection across the **`components`**,
  **`special-effects`**, and **`animations`** categories
- Built-in **showcase** at `/demo`:
  - Sticky header with breadcrumbs, theme toggle, command palette
  - Per-component **Preview / Code / Usage / Props** tabs
  - Sidebar table of contents with scroll-spy
  - Mobile sheet TOC, back-to-top FAB, copy-code buttons
- Strict folder structure mirrored across `ui/magic/<group>/`,
  `demo/magic/<group>/`, and `app/demo/magic/<group>/`
- **Cursor rules** under `.cursor/rules/` and ready-to-use prompt templates
  under `docs/prompts/`
- Scaffolding scripts for new demos / groups + a conventions auditor

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to land on the starter
homepage. The component showcase lives at
[/demo](http://localhost:3000/demo).

## Adding a component

```bash
# Magic UI
npx shadcn@latest add @magicui/<name>

# shadcn
npx shadcn@latest add <name>
```

Then scaffold a demo and register it. See
[docs/ADDING-COMPONENTS.md](docs/ADDING-COMPONENTS.md) for the full checklist.

## Documentation

- [STRUCTURE](docs/STRUCTURE.md) — folder layout
- [CONVENTIONS](docs/CONVENTIONS.md) — naming and code style
- [ADDING-COMPONENTS](docs/ADDING-COMPONENTS.md) — gold-path checklist
- [DEMO-SYSTEM](docs/DEMO-SYSTEM.md) — how the showcase works
- [RULES-AND-PROMPTS](docs/RULES-AND-PROMPTS.md) — Cursor rules + prompt
  templates
- [COMPONENT-CATALOG](docs/COMPONENT-CATALOG.md) — Magic UI install status

## Tech stack

- Next.js 16 (App Router, Turbopack)
- React 19
- Tailwind CSS 4
- shadcn (`radix-nova` style)
- Magic UI registry: `components.json` is configured with
  `"@magicui": "https://magicui.design/r/{name}"`
- `next-themes`, `motion`, `cmdk`, `recharts`, `react-tweet`, `vaul`

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the dev server with Turbopack |
| `npm run build` | Production build |
| `npm run lint` | Run ESLint |
| `npm run scaffold:demo <group> <name>` | Scaffold a new demo file |
| `npm run scaffold:group <group>` | Scaffold a new ui/demo group folder |
| `npm run audit:conventions` | Verify naming + structure |

## License

This starter is open source under the MIT license. Magic UI components are
provided by [magicui.design](https://magicui.design); shadcn primitives by
[ui.shadcn.com](https://ui.shadcn.com). Their licenses apply to the respective
files.
