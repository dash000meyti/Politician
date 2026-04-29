import { CopyButton } from "./copy-button"

export function CodeBlock({ code, language = "jsx", filename, maxHeight = "480px" }) {
  const text = code ?? ""
  return (
    <div className="relative overflow-hidden rounded-lg border border-border bg-card">
      {filename ? (
        <div className="flex items-center justify-between gap-3 border-b border-border bg-muted/40 px-3 py-1.5 text-xs text-muted-foreground">
          <span className="truncate font-mono text-[11px]">{filename}</span>
          <CopyButton text={text} />
        </div>
      ) : (
        <div className="absolute right-2 top-2 z-10">
          <CopyButton text={text} />
        </div>
      )}
      <pre
        className="overflow-auto p-4 text-xs leading-relaxed"
        style={{ maxHeight }}
      >
        <code className={`language-${language} font-mono text-foreground`}>{text}</code>
      </pre>
    </div>
  )
}
