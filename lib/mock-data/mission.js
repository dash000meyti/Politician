export const mission = [
  {
    id: "m1",
    icon: "Eye",
    color: "var(--accent-1)",
    fa: {
      title: "شفافیت رادیکال",
      desc: "اطلاعات عمومی، حق عمومی است. هر چیزی که در ملأ عام اتفاق می‌افتد، باید در ملأ عام دیده شود.",
    },
    en: {
      title: "Radical transparency",
      desc: "Public information is a public right. What happens in public must be seen in public.",
    },
  },
  {
    id: "m2",
    icon: "Users",
    color: "var(--brand)",
    fa: {
      title: "مشارکت شهروندی",
      desc: "تصمیم بدون شهروند، تصمیم نیست. ساختارهایی برای مشارکت واقعی، نه فرمالیته.",
    },
    en: {
      title: "Civic participation",
      desc: "A decision without citizens is no decision. Structures for real participation, not formality.",
    },
  },
  {
    id: "m3",
    icon: "GraduationCap",
    color: "var(--accent-2)",
    fa: {
      title: "آموزش رایگان و باکیفیت",
      desc: "یادگیری، حق هر کودک است؛ بدون توجه به جغرافیا و طبقه‌ی اقتصادی.",
    },
    en: {
      title: "Free, quality education",
      desc: "Learning is every child's right — regardless of geography or economic class.",
    },
  },
  {
    id: "m4",
    icon: "Leaf",
    color: "var(--accent-3)",
    fa: {
      title: "اقلیم و آینده",
      desc: "هر سیاست اقتصادی باید به محک اقلیم بسنجد. ۵۰ ساله می‌اندیشیم، نه ۵ ساله.",
    },
    en: {
      title: "Climate & future",
      desc: "Every economic policy must pass the climate test. We think in 50 years, not 5.",
    },
  },
  {
    id: "m5",
    icon: "Briefcase",
    color: "var(--accent-1)",
    fa: {
      title: "اقتصاد محلی",
      desc: "از کسب‌وکار کوچک محلی تا اکوسیستم نوآوری منطقه‌ای.",
    },
    en: {
      title: "Local economy",
      desc: "From small local businesses to regional innovation ecosystems.",
    },
  },
  {
    id: "m6",
    icon: "Scale",
    color: "var(--brand)",
    fa: {
      title: "عدالت اجتماعی",
      desc: "هیچ گروهی نباید نامرئی بماند. سیاست خوب، صدای حاشیه را بلند می‌کند.",
    },
    en: {
      title: "Social justice",
      desc: "No group should remain invisible. Good policy amplifies marginalized voices.",
    },
  },
]

export function getMission(locale = "fa") {
  return mission.map((m) => ({
    ...m,
    title: m[locale]?.title ?? m.fa.title,
    desc: m[locale]?.desc ?? m.fa.desc,
  }))
}
