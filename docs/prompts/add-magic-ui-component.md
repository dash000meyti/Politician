# Prompt — Add a Magic UI component

Copy and paste into Cursor, then fill in `<NAME>` and `<GROUP>`.

---

Add the Magic UI component **`<NAME>`** to the `<GROUP>` group in this starter.

Group must be one of: `components`, `special-effects`, `animations`, `text`,
`device`, `buttons`, `backgrounds`, `community`. Pick from the official
magicui.design category.

Follow these steps in order. Do not skip any.

1. **Install** with shadcn CLI:
   ```bash
   npx shadcn@latest add @magicui/<NAME>
   ```

2. **Locate the installed file.** It typically lands at
   `components/ui/<name>.jsx`. **Move it** to
   `components/ui/magic/<GROUP>/<name>.jsx`.
   - If shadcn pulled in helper files (e.g. extra hooks), put them next to it
     with kebab-case names.

3. **Re-export** from `components/ui/magic/<GROUP>/index.js`:
   ```js
   export * from "./<name>"
   ```

4. **Create the demo file** at `components/demo/magic/<GROUP>/<name>.jsx`. It
   must export at least:
   - `<Name>DemoStart` — minimal example, all props default.
   - `<Name>Demo` — canonical example from
     `https://magicui.design/docs/components/<name>`.
   - Optionally 1-3 more variants named `<Name>Demo<Modifier>` (e.g.
     `<Name>DemoVertical`).

   Do not add comments narrating what the code does. Imports come from
   `@/components/ui` only.

5. **Re-export** from `components/demo/magic/<GROUP>/index.js`:
   ```js
   export * from "./<name>"
   ```

6. **Add a `<ShowcaseSection>`** to `app/demo/magic/<GROUP>/page.jsx` with one
   `<ShowcaseVariant>` per export. Example:
   ```jsx
   <ShowcaseSection
     id="<name>"
     name="<Display Name>"
     description="<one-sentence summary from magicui.design>"
     docsUrl="https://magicui.design/docs/components/<name>"
     sourceFile="components/ui/magic/<GROUP>/<name>.jsx"
   >
     <ShowcaseVariant
       name="Default"
       exportName="<Name>Demo"
       sourceFile="components/demo/magic/<GROUP>/<name>.jsx"
     >
       <NameDemo />
     </ShowcaseVariant>
   </ShowcaseSection>
   ```

7. **Update `components/showcase/manifest.js`** — add `<name>` to the
   `magic/<GROUP>` group's `items` array.

8. **Update `docs/COMPONENT-CATALOG.md`** — mark `<name>` as installed.

9. **Run** `npm run audit:conventions` and `npm run build` and fix any issues
   they surface.

10. Do **not** create extra docs, tests, or wrappers unless I ask.

When done, summarize:
- Final paths of the UI file, demo file, and page edit.
- Variants exported.
- Anything notable about styling or required peer dependencies.
