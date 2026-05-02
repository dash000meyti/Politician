"use client"

import * as React from "react"
import Image from "next/image"
import { BookOpen } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui"
import { SiteLink } from "../site-link"

export function BookCard({ article, className }) {
  return (
    <SiteLink
      href={`/content/book/${article.slug}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-b from-card to-muted/30 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-2xl",
        className,
      )}
    >
      <Badge variant="secondary" className="self-start">
        کتاب
      </Badge>
      <div className="relative my-4 mx-auto aspect-[3/4] w-32 overflow-hidden rounded-md shadow-2xl shadow-black/40 transition-transform duration-500 group-hover:rotate-1 group-hover:scale-105">
        <Image
          src={article.cover}
          alt={article.title}
          fill
          sizes="160px"
          className="object-cover"
        />
        <div className="absolute inset-y-0 start-0 w-1.5 bg-gradient-to-r from-black/40 to-transparent" />
      </div>
      <h3 className="text-center font-title text-base font-bold leading-snug text-foreground transition-colors group-hover:text-brand">
        {article.title}
      </h3>
      {article.publisher && (
        <p className="mt-1 text-center text-[11px] text-muted-foreground">
          {article.publisher}
          {article.pages ? ` · ${article.pages}p` : ""}
        </p>
      )}
      <p className="mt-3 line-clamp-2 text-center text-xs text-muted-foreground">
        {article.excerpt}
      </p>
      <div className="mt-4 inline-flex items-center justify-center gap-1.5 self-center rounded-full bg-foreground px-3 py-1.5 text-[11px] font-medium text-background transition-transform group-hover:scale-105">
        <BookOpen className="h-3 w-3" />
        مطالعه‌ی بیشتر
      </div>
    </SiteLink>
  )
}
