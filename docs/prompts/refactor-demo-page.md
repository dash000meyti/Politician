# Prompt — Refactor a legacy demo page to use ShowcasePage

Copy and paste, fill in `<PAGE_PATH>` (e.g. `app/demo/magic/components/page.jsx`).

---

Refactor the page at **`<PAGE_PATH>`** so it uses the showcase library.

1. Read the current page.
2. Identify each component group (was previously a `<h2>`) and each variant
   (was a `<h3>`).
3. Rewrite the page using `<ShowcasePage>`, `<ShowcaseSection>`, and
   `<ShowcaseVariant>` from `@/components/showcase`.
   - The page must NOT contain any `<h2>`, `<h3>`, or `Spacing` components.
   - Each `<ShowcaseSection>` requires `id`, `name`, `description`,
     `docsUrl`, and `sourceFile`.
   - Each `<ShowcaseVariant>` requires `name`, `exportName`, `sourceFile`.
4. Set `crumbs` correctly: starting with Home → Demo → … → current page (no
   href on the current page).
5. Order sections to match magicui.design (or shadcn docs) ordering for that
   category.
6. Run `npm run build` and fix any issues.

When done, summarize how many sections + variants are now on the page.
