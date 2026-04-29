export function SourceLink({ file, docsUrl }) {
  if (!file && !docsUrl) return null
  return (
    <div className="flex flex-wrap items-center gap-2 text-xs">
      {file ? (
        <span
          title={file}
          className="rounded-md border border-dashed border-border bg-muted px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
        >
          {file}
        </span>
      ) : null}
      {docsUrl ? (
        <a
          href={docsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/80 underline-offset-4 hover:text-foreground hover:underline"
        >
          Magic UI Docs ↗
        </a>
      ) : null}
    </div>
  )
}
