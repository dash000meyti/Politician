const cover = (id, q = "city,policy") =>
  `https://images.unsplash.com/photo-${id}?q=80&w=1280&auto=format&fit=crop`

export const articles = [
  {
    id: "n1",
    type: "news",
    slug: "transparency-bill-introduced",
    cover: cover("1529107386315-e1a2ed48a620"),
    publishedAt: "2026-04-22",
    pinned: true,
    tags: ["شفافیت", "قانون‌گذاری"],
    fa: {
      title: "ارائه‌ی لایحه‌ی شفافیت دارایی مسئولان",
      excerpt:
        "لایحه‌ای در راستای انتشار عمومی دارایی مسئولان و گزارش سالانه‌ی منابع، در دستور کار قرار گرفت.",
      body:
        "در نشست امروز کمیسیون شفافیت، پیش‌نویس لایحه‌ی انتشار دارایی مسئولان رونمایی شد. این لایحه شش محور اصلی دارد: ثبت دارایی پیش از مسئولیت، انتشار سالانه، الزام به ممیزی مستقل، شفافیت در درآمدهای جانبی، حق دسترسی شهروندان، و ضمانت‌های قضایی.",
      author: "آرمان رادمنش",
    },
    en: {
      title: "Officials' asset-transparency bill introduced",
      excerpt:
        "A bill on public disclosure of officials' assets and annual income reporting has been put on the agenda.",
      body:
        "In today's transparency commission session, the draft of the asset-disclosure bill was unveiled. The bill has six pillars: pre-office asset registration, annual disclosure, mandatory independent audit, transparency on side income, citizen access rights, and judicial guarantees.",
      author: "Arman Radmanesh",
    },
  },
  {
    id: "n2",
    type: "news",
    slug: "school-renovation-program",
    cover: cover("1503676260728-1c00da094a0b"),
    publishedAt: "2026-04-15",
    pinned: false,
    tags: ["آموزش", "زیرساخت"],
    fa: {
      title: "آغاز برنامه‌ی بازسازی مدارس مناطق محروم",
      excerpt:
        "اولین فاز برنامه‌ی پنج‌ساله‌ی بازسازی ۲۴۰ مدرسه آغاز شد.",
      body: "برنامه با همکاری بخش خصوصی، خیریه‌ها و دولت محلی اجرا می‌شود. هدف، استانداردسازی فضای آموزشی و افزایش کیفیت تدریس در مناطق کم‌برخوردار است.",
      author: "آرمان رادمنش",
    },
    en: {
      title: "School renovation program launched",
      excerpt:
        "The first phase of a five-year, 240-school renovation program has begun.",
      body: "Run jointly by the private sector, charities, and local government, the program aims to standardize learning spaces and improve teaching quality in under-served areas.",
      author: "Arman Radmanesh",
    },
  },
  {
    id: "n3",
    type: "news",
    slug: "open-data-portal-launch",
    cover: cover("1504384308090-c894fdcc538d"),
    publishedAt: "2026-04-08",
    pinned: true,
    tags: ["داده‌ی باز", "شفافیت"],
    fa: {
      title: "راه‌اندازی پورتال داده‌های باز شهرداری",
      excerpt:
        "بیش از ۸۰۰ مجموعه‌داده‌ی شهری برای استفاده‌ی عموم منتشر شد.",
      body: "پورتال جدید با API استاندارد و licensing باز در دسترس همگان قرار گرفت تا پژوهشگران، شرکت‌های فناوری و شهروندان بتوانند روی داده‌ها سرویس بسازند.",
      author: "تیم رسانه",
    },
    en: {
      title: "City open-data portal launched",
      excerpt:
        "More than 800 urban datasets are now publicly available.",
      body: "The new portal exposes a standard API and open licensing so researchers, tech companies, and citizens can build services on top of the data.",
      author: "Press team",
    },
  },
  {
    id: "n4",
    type: "news",
    slug: "town-hall-isfahan",
    cover: cover("1502920917128-1aa500764cbd"),
    publishedAt: "2026-03-28",
    pinned: false,
    tags: ["گفت‌وگوی عمومی"],
    fa: {
      title: "نشست گفت‌وگوی عمومی در اصفهان",
      excerpt:
        "بیش از ۱۲۰۰ شهروند در نشست عمومی هفته‌ی گذشته شرکت کردند.",
      body: "موضوعات اصلی نشست شامل آلودگی هوا، تخریب میراث، و کمبود فضای عمومی بود. متن کامل سؤالات و پاسخ‌ها به‌زودی منتشر می‌شود.",
      author: "آرمان رادمنش",
    },
    en: {
      title: "Town-hall meeting in Isfahan",
      excerpt:
        "Over 1,200 citizens joined last week's public dialogue.",
      body: "Main topics included air pollution, heritage damage, and a shortage of public space. A full Q&A transcript will be published soon.",
      author: "Arman Radmanesh",
    },
  },
  {
    id: "n5",
    type: "news",
    slug: "youth-employment-pact",
    cover: cover("1521737604893-d14cc237f11d"),
    publishedAt: "2026-03-20",
    pinned: false,
    tags: ["اشتغال", "جوانان"],
    fa: {
      title: "امضای میثاق ملی اشتغال جوانان",
      excerpt:
        "۲۲ نهاد دولتی و خصوصی به میثاق ملی اشتغال جوانان پیوستند.",
      body: "هدف میثاق ایجاد ۳۰۰هزار شغل پایدار در سه سال آینده است؛ با تمرکز بر صنایع دانش‌بنیان، گردشگری و کشاورزی هوشمند.",
      author: "آرمان رادمنش",
    },
    en: {
      title: "National youth-employment pact signed",
      excerpt:
        "22 public and private institutions joined the youth-employment pact.",
      body: "The pact aims to create 300,000 sustainable jobs over three years, focused on knowledge-based industries, tourism, and smart agriculture.",
      author: "Arman Radmanesh",
    },
  },
  {
    id: "n6",
    type: "news",
    slug: "air-quality-monitoring",
    cover: cover("1444703686981-a3abbc4d4fe3"),
    publishedAt: "2026-03-12",
    pinned: false,
    tags: ["محیط زیست"],
    fa: {
      title: "نصب ۴۰ سنسور پایش کیفیت هوا",
      excerpt:
        "شبکه‌ی شهروند-محور پایش کیفیت هوا با ۴۰ سنسور جدید گسترش یافت.",
      body: "داده‌های خام به‌صورت لحظه‌ای روی پورتال داده‌ی باز در دسترس است. شهروندان می‌توانند سنسور خانگی خود را به شبکه اضافه کنند.",
      author: "تیم پروژه",
    },
    en: {
      title: "40 air-quality sensors deployed",
      excerpt:
        "The citizen-driven air-quality network expanded with 40 new sensors.",
      body: "Raw data streams live on the open-data portal. Citizens can add their own home sensors to the network.",
      author: "Project team",
    },
  },

  {
    id: "v1",
    type: "video",
    slug: "vision-for-tehran-2030",
    cover: cover("1480714378408-67cf0d13bc1b"),
    publishedAt: "2026-04-18",
    pinned: true,
    tags: ["شهر", "آینده‌نگری"],
    duration: "12:34",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    fa: {
      title: "تهران ۱۴۱۰: روایتی از شهری زیست‌پذیر",
      excerpt:
        "ویدیوی اختصاصی درباره‌ی چشم‌انداز پنج‌ساله‌ی شهر تهران.",
      body: "این ویدیو در ۴ بخش به مسکن، حمل‌ونقل، فضای سبز و حکمرانی شهری می‌پردازد.",
      author: "تیم تولید",
    },
    en: {
      title: "Tehran 2030: a livable city manifesto",
      excerpt:
        "An exclusive video on a five-year vision for Tehran.",
      body: "Across four chapters, this video covers housing, transit, green space, and urban governance.",
      author: "Production team",
    },
  },
  {
    id: "v2",
    type: "video",
    slug: "town-hall-highlights",
    cover: cover("1505373877841-8d25f7d46678"),
    publishedAt: "2026-04-02",
    pinned: false,
    tags: ["گفت‌وگوی عمومی"],
    duration: "8:21",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    fa: {
      title: "نکات برتر گفت‌وگوی عمومی شیراز",
      excerpt: "خلاصه‌ای از بهترین لحظات نشست عمومی شیراز.",
      body: "از سؤالات شجاعانه‌ی شهروندان تا پاسخ‌های صریح؛ تماشای این ۸ دقیقه را از دست ندهید.",
      author: "تیم تولید",
    },
    en: {
      title: "Shiraz town-hall highlights",
      excerpt: "A summary of the best moments from the Shiraz public meeting.",
      body: "From bold citizen questions to candid replies — don't miss these eight minutes.",
      author: "Production team",
    },
  },
  {
    id: "v3",
    type: "video",
    slug: "open-data-explainer",
    cover: cover("1551288049-bebda4e38f71"),
    publishedAt: "2026-03-25",
    pinned: false,
    tags: ["داده‌ی باز"],
    duration: "5:48",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    fa: {
      title: "داده‌ی باز در ۵ دقیقه",
      excerpt: "چرا داده‌ی باز برای آینده‌ی دموکراسی حیاتی است؟",
      body: "توضیحی کوتاه و تصویری برای فعالان مدنی، روزنامه‌نگاران و توسعه‌دهندگان.",
      author: "تیم تولید",
    },
    en: {
      title: "Open data in 5 minutes",
      excerpt: "Why open data is vital for the future of democracy.",
      body: "A short, visual explainer for civic activists, journalists, and developers.",
      author: "Production team",
    },
  },
  {
    id: "v4",
    type: "video",
    slug: "interview-deutsche-welle",
    cover: cover("1485827404703-89b55fcc595e"),
    publishedAt: "2026-03-10",
    pinned: false,
    tags: ["مصاحبه"],
    duration: "22:10",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    fa: {
      title: "مصاحبه با Deutsche Welle",
      excerpt:
        "گفت‌وگو درباره‌ی نقش جامعه‌ی مدنی در سیاست‌گذاری منطقه‌ای.",
      body: "این مصاحبه‌ی ۲۲ دقیقه‌ای به موضوع مشارکت مدنی، فناوری و حکمرانی می‌پردازد.",
      author: "Deutsche Welle",
    },
    en: {
      title: "Interview with Deutsche Welle",
      excerpt:
        "A conversation on the role of civil society in regional policymaking.",
      body: "A 22-minute interview on civic participation, technology, and governance.",
      author: "Deutsche Welle",
    },
  },
  {
    id: "v5",
    type: "video",
    slug: "campus-talk-amsterdam",
    cover: cover("1517245386807-bb43f82c33c4"),
    publishedAt: "2026-02-28",
    pinned: false,
    tags: ["دانشگاه"],
    duration: "44:02",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    fa: {
      title: "سخنرانی در دانشگاه آمستردام",
      excerpt: "آینده‌ی حکمرانی شهری در عصر هوش مصنوعی.",
      body: "متن کامل سخنرانی به‌زودی در بخش مقالات منتشر خواهد شد.",
      author: "آرمان رادمنش",
    },
    en: {
      title: "Talk at the University of Amsterdam",
      excerpt: "The future of urban governance in the age of AI.",
      body: "A full transcript will be published soon in the articles section.",
      author: "Arman Radmanesh",
    },
  },

  {
    id: "b1",
    type: "book",
    slug: "city-and-citizen",
    cover: cover("1512820790803-83ca734da794"),
    publishedAt: "2025-09-01",
    pinned: true,
    tags: ["شهر", "حکمرانی"],
    pages: 312,
    publisher: "نشر شهر",
    buyUrl: "#",
    fa: {
      title: "شهر و شهروند: یک قرارداد جدید",
      excerpt:
        "بازخوانی رابطه‌ی شهر و شهروند در دوران فناوری‌های نوین.",
      body: "این کتاب در ۹ فصل به‌بررسی الگوهای جدید حکمرانی شهری در ۱۲ شهر جهان می‌پردازد و چارچوبی عملی برای بازطراحی این رابطه ارائه می‌کند.",
      author: "آرمان رادمنش",
    },
    en: {
      title: "City & Citizen: A New Contract",
      excerpt: "Reframing the city–citizen relationship in the age of new tech.",
      body: "Across nine chapters, the book studies emerging governance patterns in twelve world cities and offers a practical framework for redesigning the relationship.",
      author: "Arman Radmanesh",
    },
  },
  {
    id: "b2",
    type: "book",
    slug: "open-state",
    cover: cover("1495446815901-a7297e633e8d"),
    publishedAt: "2024-05-15",
    pinned: false,
    tags: ["شفافیت"],
    pages: 248,
    publisher: "نشر دولت باز",
    buyUrl: "#",
    fa: {
      title: "دولت باز",
      excerpt: "راهنمای عملی برای پیاده‌سازی شفافیت در نهادهای عمومی.",
      body: "از مفهوم تا اجرای واقعی؛ این کتاب درس‌آموخته‌های یک دهه‌ی فعالیت در حوزه‌ی شفافیت است.",
      author: "آرمان رادمنش",
    },
    en: {
      title: "Open State",
      excerpt: "A practical handbook for transparency in public institutions.",
      body: "From concept to real implementation; this book distills a decade of work on transparency.",
      author: "Arman Radmanesh",
    },
  },
  {
    id: "b3",
    type: "book",
    slug: "policy-in-public",
    cover: cover("1532153975070-2e9ab71f1b14"),
    publishedAt: "2023-02-20",
    pinned: false,
    tags: ["سیاست عمومی"],
    pages: 196,
    publisher: "نشر کاوش",
    buyUrl: "#",
    fa: {
      title: "سیاست‌گذاری در ملأ عام",
      excerpt: "چگونه سیاست خوب در فضای رسانه‌ی امروز ساخته می‌شود؟",
      body: "نقد و بررسی ۱۰ تجربه‌ی واقعی از سیاست‌گذاری در فضای رسانه‌ی اجتماعی.",
      author: "آرمان رادمنش",
    },
    en: {
      title: "Policy in Public",
      excerpt: "How is good policy made in today's media environment?",
      body: "A critical look at ten real cases of policymaking in the social-media era.",
      author: "Arman Radmanesh",
    },
  },
  {
    id: "b4",
    type: "book",
    slug: "second-republic-essays",
    cover: cover("1543002588-bfa74002ed7e"),
    publishedAt: "2022-08-01",
    pinned: false,
    tags: ["جستار"],
    pages: 168,
    publisher: "نشر آینده",
    buyUrl: "#",
    fa: {
      title: "جستارهای جمهوری دوم",
      excerpt: "مجموعه‌ای از جستارهای کوتاه درباره‌ی آینده‌ی ایران.",
      body: "۲۲ جستار کوتاه، با زبانی ادبی و قابل‌فهم برای مخاطب عمومی.",
      author: "آرمان رادمنش",
    },
    en: {
      title: "Essays for a Second Republic",
      excerpt: "Short essays on the future of Iran.",
      body: "Twenty-two short essays in a literary, accessible voice.",
      author: "Arman Radmanesh",
    },
  },

  {
    id: "e1",
    type: "event",
    slug: "town-hall-tehran-may",
    cover: cover("1517245386807-bb43f82c33c4"),
    publishedAt: "2026-04-25",
    pinned: true,
    tags: ["گفت‌وگوی عمومی"],
    eventDate: "2026-05-12",
    eventTime: "18:00",
    venue: { fa: "تالار وحدت، تهران", en: "Vahdat Hall, Tehran" },
    registerUrl: "#",
    fa: {
      title: "گفت‌وگوی عمومی تهران — اردیبهشت",
      excerpt:
        "نشست عمومی پاسخ به سؤالات شهروندان تهران، با محوریت زندگی روزمره.",
      body: "ثبت‌نام رایگان، ظرفیت محدود؛ دعوت می‌کنیم پرسش‌های خود را پیش از نشست در فرم آنلاین ارسال کنید.",
      author: "ستاد رسانه",
    },
    en: {
      title: "Tehran town-hall — May",
      excerpt: "A public Q&A session focused on everyday life in Tehran.",
      body: "Registration is free, capacity limited. Please submit questions through the online form ahead of the event.",
      author: "Press office",
    },
  },
  {
    id: "e2",
    type: "event",
    slug: "policy-bootcamp-summer",
    cover: cover("1488521787991-ed7bbaae773c"),
    publishedAt: "2026-04-12",
    pinned: false,
    tags: ["آموزش", "جوانان"],
    eventDate: "2026-07-08",
    eventTime: "09:00",
    venue: { fa: "دانشگاه تهران", en: "University of Tehran" },
    registerUrl: "#",
    fa: {
      title: "بوت‌کمپ تابستانه‌ی سیاست‌گذاری",
      excerpt:
        "۵ روز فشرده برای آشنایی جوانان با ابزارهای سیاست‌گذاری مدرن.",
      body: "اساتید بین‌المللی، کارگاه‌های عملی، و کار روی پروژه‌های واقعی.",
      author: "بنیاد شهر و شهروند",
    },
    en: {
      title: "Summer policy bootcamp",
      excerpt: "Five intensive days introducing youth to modern policy tools.",
      body: "International faculty, hands-on workshops, and real-world projects.",
      author: "City & Citizen Foundation",
    },
  },
  {
    id: "e3",
    type: "event",
    slug: "book-launch-city-citizen",
    cover: cover("1481627834876-b7833e8f5570"),
    publishedAt: "2026-04-01",
    pinned: false,
    tags: ["کتاب"],
    eventDate: "2026-05-25",
    eventTime: "17:30",
    venue: { fa: "موزه‌ی هنرهای معاصر", en: "Museum of Contemporary Art" },
    registerUrl: "#",
    fa: {
      title: "رونمایی نسخه‌ی انگلیسی «شهر و شهروند»",
      excerpt:
        "نسخه‌ی انگلیسی کتاب پرفروش «شهر و شهروند» رونمایی می‌شود.",
      body: "همراه با گفت‌وگوی پنل با حضور پژوهشگران بین‌المللی.",
      author: "نشر شهر",
    },
    en: {
      title: "City & Citizen — English edition launch",
      excerpt: "Launch of the English edition of the bestselling book.",
      body: "Includes a panel discussion with international researchers.",
      author: "Shahr Press",
    },
  },
  {
    id: "e4",
    type: "event",
    slug: "civic-tech-meetup",
    cover: cover("1531482615713-2afd69097998"),
    publishedAt: "2026-03-22",
    pinned: false,
    tags: ["فناوری مدنی"],
    eventDate: "2026-06-02",
    eventTime: "19:00",
    venue: { fa: "خانه‌ی نوآوری", en: "Innovation House" },
    registerUrl: "#",
    fa: {
      title: "ملاقات ماهانه‌ی فناوری مدنی",
      excerpt: "ملاقات ماهانه‌ی فعالان فناوری مدنی، توسعه‌دهندگان و طراحان.",
      body: "این ماه: ساخت ابزارهای دسترسی به داده‌ی باز.",
      author: "تیم رویداد",
    },
    en: {
      title: "Monthly civic-tech meetup",
      excerpt:
        "The monthly gathering of civic-tech activists, developers, and designers.",
      body: "This month: tools for accessing open data.",
      author: "Event team",
    },
  },
  {
    id: "e5",
    type: "event",
    slug: "transparency-summit",
    cover: cover("1492684223066-81342ee5ff30"),
    publishedAt: "2026-03-05",
    pinned: false,
    tags: ["شفافیت", "همایش"],
    eventDate: "2026-09-15",
    eventTime: "08:30",
    venue: { fa: "هتل اسپیناس پالاس", en: "Espinas Palace Hotel" },
    registerUrl: "#",
    fa: {
      title: "اجلاس ملی شفافیت ۱۴۰۵",
      excerpt:
        "بزرگ‌ترین اجلاس سالیانه‌ی شفافیت با حضور بیش از ۳۰ سخنران.",
      body: "سه روز محتوا، کارگاه‌های عملی، نمایشگاه پروژه‌ها و گفت‌وگوهای پنل.",
      author: "ستاد اجرایی",
    },
    en: {
      title: "National Transparency Summit 2026",
      excerpt:
        "The largest annual transparency summit with 30+ speakers.",
      body: "Three days of content, workshops, project expo, and panel discussions.",
      author: "Organizing committee",
    },
  },
]

export const contentTypes = ["news", "video", "book", "event"]

export function getArticles({ locale = "fa", type, limit, pinned } = {}) {
  let list = articles
  if (type) list = list.filter((a) => a.type === type)
  if (pinned !== undefined) list = list.filter((a) => a.pinned === pinned)
  list = [...list].sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt),
  )
  if (limit) list = list.slice(0, limit)
  return list.map((a) => normalizeArticle(a, locale))
}

export function getArticleBySlug({ slug, type, locale = "fa" }) {
  const a = articles.find(
    (x) => x.slug === slug && (type ? x.type === type : true),
  )
  if (!a) return null
  return normalizeArticle(a, locale)
}

export function normalizeArticle(article, locale = "fa") {
  const i18n = article[locale] ?? article.fa
  return {
    id: article.id,
    type: article.type,
    slug: article.slug,
    cover: article.cover,
    publishedAt: article.publishedAt,
    pinned: article.pinned,
    tags: article.tags,
    duration: article.duration,
    videoUrl: article.videoUrl,
    pages: article.pages,
    publisher: article.publisher,
    buyUrl: article.buyUrl,
    eventDate: article.eventDate,
    eventTime: article.eventTime,
    venue: article.venue
      ? article.venue[locale] ?? article.venue.en
      : undefined,
    registerUrl: article.registerUrl,
    title: i18n.title,
    excerpt: i18n.excerpt,
    body: i18n.body,
    author: i18n.author,
  }
}
