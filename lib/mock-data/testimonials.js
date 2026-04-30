export const testimonials = [
  {
    id: "t1",
    avatar: "https://i.pravatar.cc/120?img=1",
    fa: { name: "مریم حسینی", role: "معلم", quote: "صدای ما در زنگ تفریح‌های مدرسه‌ی روستا، هم به این تریبون رسید." },
    en: { name: "Maryam Hosseini", role: "Teacher", quote: "Even our voices from a rural school recess made it to this tribune." },
  },
  {
    id: "t2",
    avatar: "https://i.pravatar.cc/120?img=12",
    fa: { name: "رضا کریمی", role: "راننده‌ی تاکسی", quote: "اولین باره که می‌بینم یک نماینده با ما هم می‌نشیند، نه فقط مقابل ما." },
    en: { name: "Reza Karimi", role: "Taxi driver", quote: "First time I see a representative sit with us, not opposite us." },
  },
  {
    id: "t3",
    avatar: "https://i.pravatar.cc/120?img=24",
    fa: { name: "نسترن مرادی", role: "روزنامه‌نگار", quote: "داده‌ی باز فقط یک شعار نبود؛ ما الان واقعاً به آن داده‌ها دسترسی داریم." },
    en: { name: "Nastaran Moradi", role: "Journalist", quote: "Open data wasn't just a slogan — we actually have access to that data now." },
  },
  {
    id: "t4",
    avatar: "https://i.pravatar.cc/120?img=33",
    fa: { name: "سهیل احمدی", role: "دانشجو", quote: "بوت‌کمپ سیاست‌گذاری زندگی حرفه‌ای من را عوض کرد." },
    en: { name: "Soheil Ahmadi", role: "Student", quote: "The policy bootcamp changed my professional life." },
  },
  {
    id: "t5",
    avatar: "https://i.pravatar.cc/120?img=45",
    fa: { name: "زهرا فتحی", role: "مادر سه فرزند", quote: "بازسازی مدرسه‌ی محله‌ی ما واقعاً اتفاق افتاد، نه فقط روی کاغذ." },
    en: { name: "Zahra Fathi", role: "Mother of three", quote: "The renovation of our neighborhood school actually happened — not just on paper." },
  },
  {
    id: "t6",
    avatar: "https://i.pravatar.cc/120?img=56",
    fa: { name: "آرش محمودی", role: "توسعه‌دهنده", quote: "API پورتال داده‌ی باز واقعاً کار می‌کند، استانداردش هم فوق‌العاده‌ست." },
    en: { name: "Arash Mahmoudi", role: "Developer", quote: "The open-data portal API actually works, and the standard is excellent." },
  },
  {
    id: "t7",
    avatar: "https://i.pravatar.cc/120?img=68",
    fa: { name: "مهسا رضایی", role: "مهندس محیط زیست", quote: "نصب سنسورهای کیفیت هوا، تفاوت قابل‌اندازه‌گیری در آگاهی عمومی ایجاد کرد." },
    en: { name: "Mahsa Rezaei", role: "Environmental engineer", quote: "Deploying air-quality sensors created a measurable shift in public awareness." },
  },
  {
    id: "t8",
    avatar: "https://i.pravatar.cc/120?img=72",
    fa: { name: "بهروز نقدی", role: "بازنشسته", quote: "اولین باره که حس می‌کنم تجربه‌ی ما هم برای کسی مهم است." },
    en: { name: "Behrooz Naghdi", role: "Retiree", quote: "For the first time, I feel our experience matters to someone." },
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
