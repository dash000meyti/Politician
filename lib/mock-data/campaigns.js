export const campaigns = [
  {
    id: "c1",
    icon: "Sparkles",
    color: "var(--accent-1)",
    progress: 78,
    target: 100,
    fa: {
      title: "شفافیت دارایی‌ها",
      summary: "کمپین انتشار عمومی دارایی مسئولان و گزارش سالانه‌ی آن.",
    },
    en: {
      title: "Asset transparency",
      summary: "Campaign for public disclosure of officials' assets and annual reporting.",
    },
  },
  {
    id: "c2",
    icon: "BookOpen",
    color: "var(--accent-2)",
    progress: 54,
    target: 100,
    fa: {
      title: "بازسازی مدارس روستایی",
      summary: "تأمین زیرساخت آموزشی استاندارد در ۲۴۰ مدرسه‌ی روستایی.",
    },
    en: {
      title: "Rural schools renewal",
      summary: "Standard learning infrastructure in 240 rural schools.",
    },
  },
  {
    id: "c3",
    icon: "Leaf",
    color: "var(--accent-3)",
    progress: 36,
    target: 100,
    fa: {
      title: "هوای پاک",
      summary: "گسترش شبکه‌ی شهروند-محور پایش کیفیت هوا و سیاست‌های اجرایی.",
    },
    en: {
      title: "Clean air",
      summary: "Expanding citizen-driven air-quality monitoring and policy enforcement.",
    },
  },
  {
    id: "c4",
    icon: "Users",
    color: "var(--brand)",
    progress: 92,
    target: 100,
    fa: {
      title: "میثاق اشتغال جوانان",
      summary: "ایجاد ۳۰۰هزار شغل پایدار با مشارکت بخش خصوصی.",
    },
    en: {
      title: "Youth employment pact",
      summary: "300,000 sustainable jobs in partnership with the private sector.",
    },
  },
]

export function getCampaigns(locale = "fa") {
  return campaigns.map((c) => ({
    ...c,
    title: c[locale]?.title ?? c.fa.title,
    summary: c[locale]?.summary ?? c.fa.summary,
  }))
}
