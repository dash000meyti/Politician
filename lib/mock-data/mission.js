export const mission = [
  {
    id: "m1",
    icon: "Scale",
    color: "var(--accent-1)",
    fa: {
      title: "استقلال اقتصادی ملی",
      desc: "کاهش وابستگی به نفت و تک‌محصولی؛ تقویت تولید و زنجیره ارزش داخلی.",
    },
    en: {
      title: "National economic independence",
      desc: "Reducing oil and single-commodity dependence; strengthening domestic production and value chains.",
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
    en: {
      title: "Monetary and fiscal governance",
      desc: "Balancing central bank independence, transparency, and broad development goals.",
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
    en: {
      title: "Youth and Islamic state-building",
      desc: "Engaging the revolutionary generation in executive decision-making with a civilizational outlook.",
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
    en: {
      title: "Critique of neoliberal currents",
      desc: "Scholarly narrative against patterns that erode productive structure.",
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
    en: {
      title: "Islamic political thought",
      desc: "Renewing concepts of religious democracy and guardianship in contemporary politics.",
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
    en: {
      title: "A new Islamic civilization",
      desc: "Linking knowledge, ethics, and economy to advance Islamic Iranian civilization.",
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
