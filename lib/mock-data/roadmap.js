export const roadmap = [
  {
    id: "r1",
    year: "۱۳۸۷",
    status: "done",
    fa: {
      title: "شروع مسیر حرفه‌ای در رسانه",
      desc: "ورود به کیهان و ادامه فعالیت تحلیلی و خبری.",
    },
  },
  {
    id: "r2",
    year: "۱۳۹۰",
    status: "done",
    fa: {
      title: "معاون پژوهش و آموزش خبرگزاری فارس",
      desc: "رهبری بخش پژوهشی یکی از مهم‌ترین رسانه‌های کشور.",
    },
  },
  {
    id: "r3",
    year: "۱۳۹۸",
    status: "done",
    fa: {
      title: "ریاست مرکز ارزیابی و نظارت راهبردی مجمع تشخیص",
      desc: "نظارت بر اجرای سیاست‌های کلی نظام تا تیر ۱۴۰۳.",
    },
  },
  {
    id: "r4",
    year: "۱۴۰۳",
    status: "active",
    fa: {
      title: "دبیرکلی حزب تمدن نوین اسلامی",
      desc: "هم‌افزایی میان پژوهش، رسانه و کنش حزبی.",
    },
  },
  {
    id: "r5",
    year: "۱۴۰۴",
    status: "upcoming",
    fa: {
      title: "توسعه وب‌گاه و آرشیو نوشتارها",
      desc: "بارگذاری منظم گفتارها، نوشتارها و منابع.",
    },
  },
]

export function getRoadmap() {
  return roadmap.map((r) => ({
    ...r,
    year: r.year,
    title: r.fa.title,
    desc: r.fa.desc,
  }))
}
