"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui"

import { CodeBlock } from "./code-block"

export function VariantTabs({
  preview,
  code,
  codeFilename,
  usageSnippet,
  propsTable,
}) {
  const hasCode = Boolean(code)
  const hasUsage = Boolean(usageSnippet)
  const hasProps = Array.isArray(propsTable) && propsTable.length > 0

  return (
    <Tabs defaultValue="preview" className="w-full">
      <TabsList>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        {hasCode ? <TabsTrigger value="code">Code</TabsTrigger> : null}
        {hasUsage ? <TabsTrigger value="usage">Usage</TabsTrigger> : null}
        {hasProps ? <TabsTrigger value="props">Props</TabsTrigger> : null}
      </TabsList>

      <TabsContent value="preview" className="mt-3">
        <div className="relative flex min-h-[260px] w-full items-center justify-center overflow-hidden rounded-lg border border-border bg-background p-6 [background-image:radial-gradient(circle_at_center,theme(colors.border)_1px,transparent_1px)] [background-size:18px_18px]">
          <div className="relative flex w-full items-center justify-center">{preview}</div>
        </div>
      </TabsContent>

      {hasCode ? (
        <TabsContent value="code" className="mt-3">
          <CodeBlock code={code} filename={codeFilename} />
        </TabsContent>
      ) : null}

      {hasUsage ? (
        <TabsContent value="usage" className="mt-3">
          <CodeBlock code={usageSnippet} />
        </TabsContent>
      ) : null}

      {hasProps ? (
        <TabsContent value="props" className="mt-3">
          <PropsTable rows={propsTable} />
        </TabsContent>
      ) : null}
    </Tabs>
  )
}

function PropsTable({ rows }) {
  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <table className="w-full border-collapse text-sm">
        <thead className="bg-muted/40 text-xs uppercase tracking-wider text-muted-foreground">
          <tr>
            <th className="px-3 py-2 text-left font-medium">Prop</th>
            <th className="px-3 py-2 text-left font-medium">Type</th>
            <th className="px-3 py-2 text-left font-medium">Default</th>
            <th className="px-3 py-2 text-left font-medium">Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name} className="border-t border-border">
              <td className="px-3 py-2 font-mono text-xs text-foreground">{r.name}</td>
              <td className="px-3 py-2 font-mono text-xs text-muted-foreground">{r.type}</td>
              <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                {r.default ?? "—"}
              </td>
              <td className="px-3 py-2 text-xs text-muted-foreground">{r.description ?? ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
