export const testimonials = [
  {
    id: "t1",
    avatar: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=200&auto=format&fit=crop",
    fa: {
      name: "خواننده نوشتارها",
      role: "مخاطب وب‌گاه",
      quote:
        "تحلیل‌های اقتصاد سیاسی اینجا برای درک بودجه و بانک مرکزی خیلی روشن‌تر از اخبار تک‌جمله‌ای است.",
    },
    en: {
      name: "A reader of the essays",
      role: "Site visitor",
      quote:
        "The political-economy analyses here make budget and central banking easier to follow than one-line headlines.",
    },
  },
  {
    id: "t2",
    avatar: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=200&auto=format&fit=crop",
    fa: {
      name: "دانشجوی روابط بین‌الملل",
      role: "مخاطب آکادمیک",
      quote:
        "پانویس‌ها و ارجاعات مفهومی به درد پایان‌نامه و کلاس‌های اقتصاد سیاسی می‌خورد.",
    },
    en: {
      name: "International relations student",
      role: "Academic reader",
      quote:
        "The conceptual footnotes help for coursework and theses in political economy.",
    },
  },
  {
    id: "t3",
    avatar: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=200&auto=format&fit=crop",
    fa: {
      name: "فعال استانی",
      role: "عضو تشکل",
      quote:
        "بحث‌های مربوط به جوانان و دولت‌سازی اسلامی برای جلسات تشکلی ما نقطه شروع خوبی است.",
    },
    en: {
      name: "Provincial activist",
      role: "Organization member",
      quote:
        "The youth and Islamic state-building themes are a solid starting point for our local discussions.",
    },
  },
  {
    id: "t4",
    avatar: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=200&auto=format&fit=crop",
    fa: {
      name: "محقق حوزه عمومی",
      role: "مستقل",
      quote:
        "حتی وقتی موافق نیستم، استدلال‌ها ساختاریافته است و می‌شود با آن وارد گفت‌وگو شد.",
    },
    en: {
      name: "Public-policy researcher",
      role: "Independent",
      quote:
        "Even when I disagree, the arguments are structured enough to engage with seriously.",
    },
  },
]

export function getTestimonials(locale = "fa") {
  return testimonials.map((t) => ({
    id: t.id,
    avatar: t.avatar,
    name: t[locale]?.name ?? t.fa.name,
    role: t[locale]?.role ?? t.fa.role,
    quote: t[locale]?.quote ?? t.fa.quote,
  }))
}
