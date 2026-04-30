export const roadmap = [
  {
    id: "r1",
    year: "1402",
    yearEn: "2023",
    status: "done",
    fa: {
      title: "بنیان‌گذاری بنیاد شهر و شهروند",
      desc: "تأسیس بنیادی مستقل برای پژوهش و آموزش در حوزه‌ی حکمرانی شهری.",
    },
    en: {
      title: "City & Citizen Foundation founded",
      desc: "Independent foundation for urban-governance research and education.",
    },
  },
  {
    id: "r2",
    year: "1403",
    yearEn: "2024",
    status: "done",
    fa: {
      title: "انتشار کتاب «دولت باز»",
      desc: "راهنمای عملی پیاده‌سازی شفافیت در نهادهای عمومی منتشر شد.",
    },
    en: {
      title: "Open State book published",
      desc: "A practical handbook on transparency in public institutions.",
    },
  },
  {
    id: "r3",
    year: "1404",
    yearEn: "2025",
    status: "done",
    fa: {
      title: "راه‌اندازی پورتال داده‌ی باز",
      desc: "بیش از ۸۰۰ مجموعه‌داده‌ی شهری برای استفاده‌ی عموم منتشر شد.",
    },
    en: {
      title: "Open-data portal launched",
      desc: "800+ urban datasets made publicly available.",
    },
  },
  {
    id: "r4",
    year: "1405",
    yearEn: "2026",
    status: "active",
    fa: {
      title: "میثاق ملی اشتغال جوانان",
      desc: "هدف: ایجاد ۳۰۰هزار شغل پایدار در ۳ سال آینده.",
    },
    en: {
      title: "National youth-employment pact",
      desc: "Goal: 300,000 sustainable jobs in three years.",
    },
  },
  {
    id: "r5",
    year: "1406",
    yearEn: "2027",
    status: "upcoming",
    fa: {
      title: "اجلاس بین‌المللی حکمرانی شهری",
      desc: "میزبانی بزرگ‌ترین رویداد منطقه‌ای حکمرانی شهری در تهران.",
    },
    en: {
      title: "International urban-governance summit",
      desc: "Hosting the largest regional urban-governance event in Tehran.",
    },
  },
]

export function getRoadmap(locale = "fa") {
  return roadmap.map((r) => ({
    ...r,
    year: locale === "en" ? r.yearEn : r.year,
    title: r[locale]?.title ?? r.fa.title,
    desc: r[locale]?.desc ?? r.fa.desc,
  }))
}
