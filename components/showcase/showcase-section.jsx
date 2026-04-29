import { slugify } from "./utils"
import { SourceLink } from "./source-link"

export function ShowcaseSection({
  id,
  name,
  description,
  docsUrl,
  sourceFile,
  status,
  children,
}) {
  const sectionId = id || slugify(name)
  return (
    <section
      id={sectionId}
      data-showcase-section={sectionId}
      className="scroll-mt-28 space-y-6 border-t border-border pt-12 first:border-t-0 first:pt-0"
    >
      <header className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-2xl font-semibold tracking-tight text-foreground">
              <a href={`#${sectionId}`} className="transition-colors hover:text-foreground/70">
                {name}
              </a>
            </h3>
            {status ? (
              <span className="rounded-md border border-border bg-muted px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                {status}
              </span>
            ) : null}
          </div>
          <SourceLink file={sourceFile} docsUrl={docsUrl} />
        </div>
        {description ? (
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">{description}</p>
        ) : null}
      </header>
      <div className="space-y-10">{children}</div>
    </section>
  )
}

ShowcaseSection.displayName = "ShowcaseSection"
