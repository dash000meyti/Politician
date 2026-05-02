export const persona = {
  fa: {
    name: "سید یاسر جبرائیلی",
    shortName: "یاسر جبرائیلی",
    title: "صدای کنش جمعی، برای ساخت بهتر تمدن ایران اسلامی",
    role: "دبیرکل حزب تمدن نوین اسلامی",
    shortBio:
      "پژوهشگر اندیشه سیاسی و اقتصاد سیاسی؛ دبیرکل حزب تمدن نوین اسلامی و عضو هیئت علمی پژوهشگاه علوم انسانی و مطالعات فرهنگی. تمرکز او بر تحلیل سیاست‌های اقتصادی، حکمرانی پولی و مسیر توسعه در چارچوب انقلاب اسلامی است.",
    bio: [
      "سید یاسر جبرائیلی، متولد ۱۳۶۳، دکترای اندیشه سیاسی از پژوهشگاه علوم انسانی و مطالعات فرهنگی و کارشناسی‌ارشد روابط بین‌الملل (گرایش اقتصاد سیاسی) از دانشگاه تهران است. در مسیر تحصیل، از آموزش زبان انگلیسی در دانشگاه تربیت دبیر شهید رجایی آغاز کرده و به پژوهش در بستر نظام جمهوری اسلامی ادامه داده است.",
      "او در حوزه رسانه و سیاست‌گذاری اقتصادی تجربه‌هایی چون معاونت پژوهش و آموزش خبرگزاری فارس، مشاور اقتصاد مقاومتی فرماندهی کل سپاه، ریاست مرکز ارزیابی و نظارت راهبردی اجرای سیاست‌های کلی نظام در مجمع تشخیص مصلحت نظام (۱۳۹۸–۱۴۰۳) و همکاری در تدوین برنامه اقتصادی دولت سیزدهم داشته است؛ اکنون دبیرکل حزب تمدن نوین اسلامی است.",
      "نوشتارها و سخنان او عمدتاً حول اقتصاد سیاسی ایران، بانک مرکزی و استقلال بودجه، نفت و نئولیبرالیسم، و جایگاه جوانان انقلابی در دولت‌سازی اسلامی است و در وب‌گاه شخصی منتشر می‌شود.",
    ],
    location: "تهران، ایران",
  },
  en: {
    name: "Seyed Yaser Jebraeili",
    shortName: "Yaser Jebraeili",
    title: "The voice of collective action for building a better Islamic Iranian civilization",
    role: "Secretary-General of the New Islamic Civilization Party",
    shortBio:
      "A scholar of political thought and political economy; Secretary-General of the New Islamic Civilization Party and a faculty member at the Institute for Humanities and Cultural Studies. His work focuses on economic policy, monetary governance, and development within the framework of the Islamic Revolution.",
    bio: [
      "Seyed Yaser Jebraeili (born 1984) holds a Ph.D. in political thought from the Institute for Humanities and Cultural Studies and an M.A. in international relations (political economy) from the University of Tehran, building on undergraduate studies in English language teaching at Shahid Rajaee Teacher Training University.",
      "His experience spans research and media leadership—including research and training roles at Fars News Agency, advisory work on resistance economy, heading the strategic monitoring center for implementation of general policies of the system at the Expediency Discernment Council (2019–2024), and contributions to the thirteenth administration’s economic program. He currently serves as Secretary-General of the New Islamic Civilization Party.",
      "His essays and speeches concentrate on Iran’s political economy, central banking and budget independence, oil and neoliberalism, and the role of revolutionary youth in Islamic state-building, published on his official website.",
    ],
    location: "Tehran, Iran",
  },
  hero: {
    portrait: "/photo.png",
    portraitAlt: {
      fa: "پرتره‌ی سید یاسر جبرائیلی",
      en: "Portrait of Seyed Yaser Jebraeili",
    },
  },
  brand: {
    primary: "oklch(0.55 0.22 264)",
    accent: "oklch(0.66 0.20 28)",
  },
  contact: {
    email: "contact@example.com",
    office: {
      fa: "ارتباط از طریق وب‌گاه رسمی — آدرس دفتر پس از تأیید درج می‌شود.",
      en: "Via the official website — office address to be confirmed.",
    },
  },
  social: [
    {
      id: "website",
      label: "وب‌گاه رسمی",
      url: "https://jebraily.ir/",
    },
  ],
  site: {
    url: "https://jebraily.ir",
    twitter: "",
  },
  keywords: [
    "یاسر جبرائیلی",
    "حزب تمدن نوین اسلامی",
    "اقتصاد سیاسی",
    "اندیشه سیاسی",
    "Yaser Jebraeili",
    "New Islamic Civilization Party",
    "political economy",
    "Iran",
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
