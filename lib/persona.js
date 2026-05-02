export const persona = {
  fa: {
    name: "سید یاسر جبرائیلی",
    shortName: "یاسر جبرائیلی",
    title: "صدای کنش جمعی، برای ساخت بهتر تمدن ایران اسلامی",
    role: "دبیرکل حزب تمدن اسلامی",
    shortBio:
      "بیست سال در میدان آموزش، پژوهش و سیاست‌گذاری عمومی؛ با هدف ساختن آینده‌ای که در آن صدای هیچ شهروندی شنیده نشود، گم نشود.",
    bio: [
      "دکتر آرمان رادمنش، پژوهشگر و فعال سیاست عمومی، تحصیلات خود را در رشته‌ی حکمرانی و سیاست‌گذاری در دانشگاه‌های تهران و آمستردام به پایان رسانده است.",
      "او بنیان‌گذار بنیاد «شهر و شهروند» و سردبیر چندین نشریه‌ی تحلیلی در حوزه‌ی شهر، اقتصاد محلی و آموزش است.",
      "مأموریت او در دوره‌ی پیش‌رو، تبدیل ایده‌های تخصصی به سیاست‌های اجرایی و قابل‌اندازه‌گیری برای زندگی روزمره‌ی مردم است.",
    ],
    location: "تهران، ایران",
  },
  en: {
    name: "Seyed Yaser Jebraeili",
    shortName: "Yaser Jebraeili",
    title: "The voice of collective action for building a better Islamic Iranian civilization",
    role: "Secretary-General of the Islamic Civilization Party",
    shortBio:
      "Twenty years in education, research, and public policy — building a future where every citizen's voice is heard, not lost.",
    bio: [
      "Dr. Arman Radmanesh is a public-policy researcher and civic activist trained in governance and policy at the universities of Tehran and Amsterdam.",
      "He is the founder of the City & Citizen Foundation and the editor of several analytical journals on urban life, local economy, and education.",
      "His mission for the coming term is to translate expert ideas into concrete, measurable policies that improve the daily lives of people.",
    ],
    location: "Tehran, Iran",
  },
  hero: {
    portrait:
      "/photo.png",
    portraitAlt: {
      fa: "پرتره‌ی سید یاسر جبرائیلی",
      en: "Portrait of Yasir Jabarieli",
    },
  },
  brand: {
    primary: "oklch(0.55 0.22 264)",
    accent: "oklch(0.66 0.20 28)",
  },
  contact: {
    email: "hello@arman-radmanesh.example",
    office: {
      fa: "تهران، خیابان آزادی، ساختمان شهروند، طبقه ۳",
      en: "Tehran, Azadi St., Citizen Building, 3rd floor",
    },
  },
  social: [
    { id: "x", label: "X / Twitter", url: "https://x.com/" },
    { id: "instagram", label: "Instagram", url: "https://instagram.com/" },
    { id: "telegram", label: "Telegram", url: "https://t.me/" },
    { id: "youtube", label: "YouTube", url: "https://youtube.com/" },
    { id: "linkedin", label: "LinkedIn", url: "https://linkedin.com/" },
    { id: "github", label: "GitHub", url: "https://github.com/" },
  ],
  site: {
    url: "https://arman-radmanesh.example",
    twitter: "@arman_radmanesh",
  },
  keywords: [
    "آرمان رادمنش",
    "سیاست‌گذاری عمومی",
    "شفافیت",
    "Arman Radmanesh",
    "public policy",
    "transparency",
  ],
}

export function getPersona(locale = "fa") {
  return {
    ...persona[locale],
    hero: persona.hero,
    brand: persona.brand,
    social: persona.social,
    contact: {
      email: persona.contact.email,
      office: persona.contact.office[locale] ?? persona.contact.office.en,
    },
    site: persona.site,
  }
}
