export const mission = [
  {
    id: "m1",
    icon: "Scale",
    color: "var(--accent-1)",
    fa: {
      title: "استقلال اقتصادی ملی",
      desc: "کاهش وابستگی به نفت و تک‌محصولی؛ تقویت تولید و زنجیره ارزش داخلی.",
    },
  },
  {
    id: "m2",
    icon: "Briefcase",
    color: "var(--brand)",
    fa: {
      title: "حکمرانی پولی و بودجه",
      desc: "تعادل میان استقلال بانک مرکزی، شفافیت و اهداف کلان توسعه.",
    },
  },
  {
    id: "m3",
    icon: "Users",
    color: "var(--accent-2)",
    fa: {
      title: "جوانان و دولت‌سازی اسلامی",
      desc: "ورود نسل انقلابی به تصمیم‌سازی اجرایی با رویکرد تمدنی.",
    },
  },
  {
    id: "m4",
    icon: "Eye",
    color: "var(--accent-3)",
    fa: {
      title: "نقد جریان نئولیبرالی",
      desc: "روایت‌سازی علمی در برابر الگوهای تخریب‌گر ساختار تولید.",
    },
  },
  {
    id: "m5",
    icon: "GraduationCap",
    color: "var(--accent-1)",
    fa: {
      title: "اندیشه سیاسی اسلامی",
      desc: "بازتولید مفاهیم مردم‌سالاری دینی و ولایت در سیاست معاصر.",
    },
  },
  {
    id: "m6",
    icon: "Sparkles",
    color: "var(--brand)",
    fa: {
      title: "تمدن نوین اسلامی",
      desc: "پیوند علم، اخلاق و اقتصاد در مسیر ارتقای تمدن ایران اسلامی.",
    },
  },
]

export function getMission() {
  return mission.map((m) => ({
    ...m,
    title: m.fa.title,
    desc: m.fa.desc,
  }))
}
