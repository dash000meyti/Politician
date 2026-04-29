# Adding components

The same shape applies to both shadcn primitives and Magic UI components: every
component must have a UI file, a demo file, an index export, a showcase
section, and a manifest entry.

## Magic UI

```bash
npx shadcn@latest add @magicui/<name>
```

1. Move `components/ui/<name>.jsx` → `components/ui/magic/<group>/<name>.jsx`
   if shadcn dropped it at the wrong place. The 8 valid groups are:
   `components`, `special-effects`, `animations`, `text`, `device`,
   `buttons`, `backgrounds`, `community`.
2. Add `export * from "./<name>"` to
   `components/ui/magic/<group>/index.js`.
3. Create `components/demo/magic/<group>/<name>.jsx` with at least
   `<Name>Demo`. Add `<Name>DemoStart` for a minimal example, plus any extra
   variants from magicui.design.
4. Add `export * from "./<name>"` to
   `components/demo/magic/<group>/index.js`.
5. Add a `<ShowcaseSection>` with one `<ShowcaseVariant>` per export to
   `app/demo/magic/<group>/page.jsx`.
6. Append `<name>` to the matching group's `items` in
   `components/showcase/manifest.js` so it shows in the command palette.
7. Update `docs/COMPONENT-CATALOG.md` (mark as installed).
8. Run `npm run audit:conventions` and `npm run build`.

Or use the prompt template at
[docs/prompts/add-magic-ui-component.md](prompts/add-magic-ui-component.md).

## shadcn

```bash
npx shadcn@latest add <name>
```

1. Confirm it landed at `components/ui/<name>.jsx`.
2. Add `export * from "./<name>"` to `components/ui/index.js`.
3. Create `components/demo/components/<name>.jsx` with at least `<Name>Demo`,
   plus `<Name>DemoStart` if useful.
4. Add `export * from "./<name>"` to `components/demo/components/index.js`.
5. Append a new entry to the `sections` data array in
   `app/demo/components/page.jsx` with `id`, `name`, `slug`, `file`,
   `description`, and `variants`.
6. Append `<name>` to the `components` group's `items` in
   `components/showcase/manifest.js`.

Or use the prompt template at
[docs/prompts/add-shadcn-component.md](prompts/add-shadcn-component.md).

## Adding a new Magic UI category

If a brand-new Magic UI category appeared (or you want an extra one):

```bash
npm run scaffold:group <group-slug>
```

This creates `components/ui/magic/<group>/index.js`,
`components/demo/magic/<group>/index.js`, and
`app/demo/magic/<group>/page.jsx`. Then add the new group to:

- `components/ui/magic/index.js` (re-export it)
- `components/demo/magic/index.js`
- `components/showcase/manifest.js`
- `app/demo/magic/page.jsx` (list of category cards)
