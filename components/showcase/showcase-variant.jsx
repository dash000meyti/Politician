import { readSourceFile, extractExport, buildUsageSnippet } from "./utils"
import { VariantTabs } from "./variant-tabs"

export async function ShowcaseVariant({
  name,
  exportName,
  sourceFile,
  importPath = "@/components/demo",
  propsTable,
  showCode = true,
  showUsage = true,
  children,
}) {
  let code = ""
  if (showCode && sourceFile) {
    const raw = await readSourceFile(sourceFile)
    code = extractExport(raw, exportName)
  }

  const usageSnippet =
    showUsage && exportName ? buildUsageSnippet({ exportName, importPath }) : ""

  return (
    <article className="space-y-3">
      <header className="flex flex-wrap items-baseline gap-2">
        <h4 className="text-sm font-medium text-foreground">{name}</h4>
        {exportName ? (
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[11px] text-muted-foreground">
            {exportName}
          </code>
        ) : null}
      </header>

      <VariantTabs
        preview={children}
        code={code}
        codeFilename={sourceFile}
        usageSnippet={usageSnippet}
        propsTable={propsTable}
      />
    </article>
  )
}

ShowcaseVariant.displayName = "ShowcaseVariant"
