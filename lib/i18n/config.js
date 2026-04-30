export const locales = ["fa", "en"]
export const defaultLocale = "fa"

export const direction = {
  fa: "rtl",
  en: "ltr",
}

export const localeNames = {
  fa: "فارسی",
  en: "English",
}

export function isLocale(value) {
  return locales.includes(value)
}

export function getDirection(locale) {
  return direction[locale] ?? "ltr"
}
