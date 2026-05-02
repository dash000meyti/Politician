export const campaigns = [
  {
    id: "c1",
    icon: "Scale",
    color: "var(--accent-1)",
    progress: 72,
    target: 100,
    fa: {
      title: "گفتار شفاف درباره FATF و بانکداری",
      summary: "مجموعه یادداشت‌ها و سخنرانی‌ها برای روشن‌سازی پیامدهای استانداردهای بین‌المللی.",
    },
  },
  {
    id: "c2",
    icon: "Briefcase",
    color: "var(--accent-2)",
    progress: 58,
    target: 100,
    fa: {
      title: "نقد طرح استقلال بانک مرکزی",
      summary: "پایش و نقد مداوم لوایح پولی و بودجه‌ای در مجلس و رسانه.",
    },
  },
  {
    id: "c3",
    icon: "Users",
    color: "var(--accent-3)",
    progress: 45,
    target: 100,
    fa: {
      title: "بسیج جوانان حزب تمدن نوین اسلامی",
      summary: "آموزش و شبکه‌سازی استانی برای مشارکت سیاسی-تمدنی.",
    },
  },
  {
    id: "c4",
    icon: "Leaf",
    color: "var(--brand)",
    progress: 64,
    target: 100,
    fa: {
      title: "استقلال بودجه از نفت",
      summary: "ترویج سیاست‌های مالی پایدار و کاهش اتکای بودجه به درآمد نفتی.",
    },
  },
]

export function getCampaigns() {
  return campaigns.map((c) => ({
    ...c,
    title: c.fa.title,
    summary: c.fa.summary,
  }))
}
