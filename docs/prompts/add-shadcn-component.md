# Prompt — Add a shadcn component

Copy and paste, fill in `<NAME>` (kebab-case slug from
`https://ui.shadcn.com/docs/components`).

---

Add the shadcn component **`<NAME>`** to this starter.

1. **Install** with the shadcn CLI:
   ```bash
   npx shadcn@latest add <NAME>
   ```
   Confirm it lands at `components/ui/<NAME>.jsx`. Do not move it.

2. **Re-export** from `components/ui/index.js` (alphabetical order):
   ```js
   export * from "./<NAME>"
   ```

3. **Add a demo file** at `components/demo/components/<NAME>.jsx` with at least
   `<Name>Demo`. Add `<Name>DemoStart` (minimal) and any meaningful variants
   shown in the shadcn docs as `<Name>Demo<Modifier>`. Imports come from
   `@/components/ui` only.

4. **Re-export** from `components/demo/components/index.js`.

5. **Add a section to `app/demo/components/page.jsx`** — append a new entry to
   the `sections` data array with:
   - `id` (kebab-case)
   - `name` (display label)
   - `slug` (used for the docs link)
   - `file` (kebab-case file name in `ui/` and `demo/components/`)
   - `description`
   - `variants: [{ name, exportName }]`

6. **Update `components/showcase/manifest.js`** — append `<NAME>` to the
   `components` group's `items` array.

7. Run `npm run audit:conventions` and `npm run build` and fix any issues.

When done, summarize the changes (paths and variant names).
