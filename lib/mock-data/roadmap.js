export const roadmap = [
  {
    id: "r1",
    year: "۱۳۸۷",
    yearEn: "2008",
    status: "done",
    fa: {
      title: "شروع مسیر حرفه‌ای در رسانه",
      desc: "ورود به کیهان و ادامه فعالیت تحلیلی و خبری.",
    },
    en: {
      title: "Beginning a media career",
      desc: "Joining Kayhan and continuing analytical journalism.",
    },
  },
  {
    id: "r2",
    year: "۱۳۹۰",
    yearEn: "2011",
    status: "done",
    fa: {
      title: "معاون پژوهش و آموزش خبرگزاری فارس",
      desc: "رهبری بخش پژوهشی یکی از مهم‌ترین رسانه‌های کشور.",
    },
    en: {
      title: "VP for research and training at Fars News",
      desc: "Leading the research arm of a major national news agency.",
    },
  },
  {
    id: "r3",
    year: "۱۳۹۸",
    yearEn: "2019",
    status: "done",
    fa: {
      title: "ریاست مرکز ارزیابی و نظارت راهبردی مجمع تشخیص",
      desc: "نظارت بر اجرای سیاست‌های کلی نظام تا تیر ۱۴۰۳.",
    },
    en: {
      title: "Head of strategic monitoring at the Expediency Council",
      desc: "Oversight of implementation of general policies of the system through 2024.",
    },
  },
  {
    id: "r4",
    year: "۱۴۰۳",
    yearEn: "2024",
    status: "active",
    fa: {
      title: "دبیرکلی حزب تمدن نوین اسلامی",
      desc: "هم‌افزایی میان پژوهش، رسانه و کنش حزبی.",
    },
    en: {
      title: "Secretary-General of the New Islamic Civilization Party",
      desc: "Aligning research, media, and party action.",
    },
  },
  {
    id: "r5",
    year: "۱۴۰۴",
    yearEn: "2025",
    status: "upcoming",
    fa: {
      title: "توسعه وب‌گاه و آرشیو نوشتارها",
      desc: "بارگذاری منظم گفتارها، نوشتارها و منابع چندزبانه.",
    },
    en: {
      title: "Expanding the website and writings archive",
      desc: "Structured publication of speeches, essays, and multilingual resources.",
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
