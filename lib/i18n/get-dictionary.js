import "server-only"

import { defaultLocale, isLocale } from "./config"

const dictionaries = {
  fa: () => import("./dictionaries/fa.json").then((m) => m.default),
  en: () => import("./dictionaries/en.json").then((m) => m.default),
}

export async function getDictionary(locale) {
  const key = isLocale(locale) ? locale : defaultLocale
  const loader = dictionaries[key] ?? dictionaries[defaultLocale]
  return loader()
}
