# Prompt — Audit naming + structure conventions

Copy and paste.

---

Audit this codebase against the conventions defined in
[docs/CONVENTIONS.md](../CONVENTIONS.md) and the rules in
[.cursor/rules/](../../.cursor/rules). Run the existing audit script first:

```bash
npm run audit:conventions
```

Then perform a manual check for issues the script can't catch:

1. **Magic UI grouping**: every file in `components/ui/magic/<group>/<name>.jsx`
   actually belongs to its group per
   [magicui.design/docs/components](https://magicui.design/docs/components).
2. **Mirroring**: each UI file has a matching demo file at
   `components/demo/magic/<group>/<name>.jsx`.
3. **Variant naming**: every export in `components/demo/...` matches
   `<ComponentName>Demo` or `<ComponentName>Demo<Modifier>` or
   `<ComponentName>DemoStart`.
4. **Index files**: every leaf folder has an `index.js` re-exporting each file.
5. **Page composition**: every page in `app/demo/...` uses `<ShowcasePage>` and
   `<ShowcaseSection>` (no raw `<h2>` / `<h3>` listings).
6. **Manifest**: the items in `components/showcase/manifest.js` cover everything
   actually installed (no missing entries, no stale ones).

Report findings as a markdown checklist with concrete fix suggestions. Do not
make changes without confirmation.
