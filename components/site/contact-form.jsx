"use client"

import * as React from "react"
import { Send, Loader2 } from "lucide-react"
import { toast } from "sonner"

import { useDictionary, useLocale } from "@/lib/i18n/dictionary-context"
import {
  Button,
  Input,
  Label,
  Textarea,
} from "@/components/ui"

export function ContactForm() {
  const dict = useDictionary()
  const locale = useLocale()
  const [pending, setPending] = React.useState(false)

  async function onSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const payload = Object.fromEntries(formData.entries())
    setPending(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...payload, locale }),
      })
      if (!res.ok) throw new Error("Request failed")
      toast.success(dict.contact.form.success)
      e.currentTarget.reset()
    } catch (err) {
      toast.error(dict.contact.form.error)
    } finally {
      setPending(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">{dict.contact.form.name}</Label>
          <Input
            id="name"
            name="name"
            required
            placeholder={dict.contact.form.namePlaceholder}
            autoComplete="name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">{dict.contact.form.email}</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder={dict.contact.form.emailPlaceholder}
            autoComplete="email"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="subject">{dict.contact.form.subject}</Label>
        <Input
          id="subject"
          name="subject"
          required
          placeholder={dict.contact.form.subjectPlaceholder}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">{dict.contact.form.message}</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder={dict.contact.form.messagePlaceholder}
        />
      </div>

      <div className="flex justify-end">
        <Button
          type="submit"
          size="lg"
          disabled={pending}
          className="rounded-full"
        >
          {pending ? (
            <>
              <Loader2 className="me-2 h-4 w-4 animate-spin" />
              {dict.contact.form.sending}
            </>
          ) : (
            <>
              <Send className="me-2 h-4 w-4 rtl:rotate-180" />
              {dict.contact.form.submit}
            </>
          )}
        </Button>
      </div>
    </form>
  )
}
