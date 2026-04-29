# Agent Guide — Magic UI Starter

This is a Next.js 16 + React 19 + Tailwind 4 + shadcn (`radix-nova`) + Magic UI
starter with a built-in component showcase at `/demo`.

## What this project is

- **Components installed** today: ~60 shadcn primitives + ~24 Magic UI
  components (across 3 of 8 categories).
- **Demo system**: every component has a demo file at `components/demo/...`
  with one or more variants. Pages under `app/demo/...` compose those variants
  with `<ShowcasePage>` / `<ShowcaseSection>` / `<ShowcaseVariant>`.
- **Goal**: be a clean starter where adding a new component is a small,
  predictable diff.

## Read these first

- [docs/STRUCTURE.md](docs/STRUCTURE.md) — folder layout
- [docs/CONVENTIONS.md](docs/CONVENTIONS.md) — naming and code style
- [docs/ADDING-COMPONENTS.md](docs/ADDING-COMPONENTS.md) — gold-path checklist
- [docs/DEMO-SYSTEM.md](docs/DEMO-SYSTEM.md) — how showcase pages are built
- [docs/COMPONENT-CATALOG.md](docs/COMPONENT-CATALOG.md) — install status of
  all Magic UI components
- [.cursor/rules/](.cursor/rules) — enforced rules (auto-attached by Cursor)

## Hard rules

1. **Folder structure is sacred.** When adding a Magic UI component, place it
   under the right group in `components/ui/magic/<group>/`. Do NOT leave it
   at `components/ui/<name>.jsx`.
2. **Naming**: kebab-case files, PascalCase components, `<Name>Demo` /
   `<Name>DemoStart` / `<Name>Demo<Modifier>` for variants.
3. **Always update three places** when adding a component:
   - `components/ui/.../index.js`
   - `components/demo/.../index.js`
   - the matching `app/demo/.../page.jsx`
4. **Demo pages MUST use `<ShowcasePage>`** — never raw `<h2>`/`<h3>` again.
5. **Don't install new dependencies** without justification. The starter ships
   with everything needed for the showcase.

## Commands

```bash
npm run dev                 # next dev (Turbopack)
npm run build               # production build
npm run lint
npm run scaffold:demo <group> <name>  # scaffold a new demo file
npm run scaffold:group <group>        # scaffold a new ui/demo group folder
npm run audit:conventions             # verify naming + structure
```

## Adding a Magic UI component (TL;DR)

```bash
npx shadcn@latest add @magicui/<name>
```

Then move the file under the right group, scaffold the demo, register exports,
and add a `<ShowcaseSection>` to the page. See
[docs/ADDING-COMPONENTS.md](docs/ADDING-COMPONENTS.md) for the full checklist.

## Helpful prompts

Ready-made prompt templates live in [docs/prompts/](docs/prompts/):

- `add-magic-ui-component.md`
- `add-shadcn-component.md`
- `refactor-demo-page.md`
- `audit-conventions.md`
