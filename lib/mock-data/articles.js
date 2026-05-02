const cover = (id, q = "economy,books") =>
  `https://images.unsplash.com/photo-${id}?q=80&w=1280&auto=format&fit=crop`

export const articles = [
  {
    id: "n1",
    type: "news",
    slug: "fatf-minister-economy-remarks",
    cover: cover("1454160808839-40b25384aae1"),
    publishedAt: "2021-09-21",
    pinned: true,
    tags: ["FATF", "اقتصاد", "بانک"],
    fa: {
      title: "تأملی در اظهارات وزیر اقتصاد پیرامون FATF",
      excerpt:
        "نگاهی انتقادی به استدلال‌های مطرح‌شده درباره گروه ویژه اقدام مالی و محدودیت‌های بانکی ایران.",
      body:
        "در این یادداشت به پیوند میان تحریم‌های آمریکا، استانداردهای بین‌المللی و الزامات عملی برای نظام بانکی پرداخته می‌شود و از زاویه اقتصاد سیاسی به اظهارات اخیر در حوزه FATF بازمی‌گردد.",
      author: "سید یاسر جبرائیلی",
    },
    en: {
      title: "Reflections on the economy minister’s remarks on FATF",
      excerpt:
        "A critical look at arguments on the Financial Action Task Force and Iran’s banking constraints.",
      body:
        "This note examines the link between U.S. sanctions, international standards, and practical requirements for the banking system, revisiting recent statements on FATF from a political-economy perspective.",
      author: "Seyed Yaser Jebraeili",
    },
  },
  {
    id: "n2",
    type: "news",
    slug: "political-economy-central-banking",
    cover: cover("1611974785985-3441984e1694"),
    publishedAt: "2021-09-02",
    pinned: true,
    tags: ["بانک مرکزی", "مجلس"],
    fa: {
      title: "اقتصاد سیاسی بانکداری مرکزی",
      excerpt:
        "تحلیل طرح «استقلال بانک مرکزی» و پیامدهای ساختاری آن برای سیاست پولی و بودجه.",
      body:
        "پس از تصویب کلیات طرحی با عنوان مسئولیت، اهداف، ساختار و وظایف بانک مرکزی، این نوشتار به اقتصاد سیاسی استقلال نهاد پولی و رابطه آن با دولت و مجلس می‌پردازد.",
      author: "سید یاسر جبرائیلی",
    },
    en: {
      title: "The political economy of central banking",
      excerpt:
        "Analysis of the “central bank independence” bill and its structural implications for monetary and fiscal policy.",
      body:
        "After the Majlis approved the outlines of a bill on the central bank’s mandate, structure, and duties, this essay explores the political economy of monetary independence and its relationship to government and parliament.",
      author: "Seyed Yaser Jebraeili",
    },
  },
  {
    id: "n3",
    type: "news",
    slug: "youth-government-oil-budget",
    cover: cover("1554224154-22bbe7d7e14b"),
    publishedAt: "2021-03-02",
    pinned: false,
    tags: ["بودجه", "نفت", "جوانان"],
    fa: {
      title: "دولت جوان انقلابی و استقلال بودجه از نفت",
      excerpt:
        "بازخوانی بیانیه گام دوم و وابستگی اقتصاد ایران به درآمدهای نفتی.",
      body:
        "رهبر انقلاب یکی از عیوب اصلی اقتصاد را وابستگی به نفت برشمرده‌اند. این متن به راه‌های کاهش این وابستگی و نقش دولت جوان انقلابی در بازطراحی منابع بودجه می‌پردازد.",
      author: "سید یاسر جبرائیلی",
    },
    en: {
      title: "A revolutionary youth-led government and budget independence from oil",
      excerpt:
        "Revisiting the Second Step statement and Iran’s dependence on oil revenues.",
      body:
        "The Leader has cited oil dependence as a key economic weakness. This text discusses paths to reduce that dependence and the role of a revolutionary youth-led government in redesigning budget resources.",
      author: "Seyed Yaser Jebraeili",
    },
  },
  {
    id: "n4",
    type: "news",
    slug: "seven-notes-central-bank-independence",
    cover: cover("1563986768609-322f135952a3"),
    publishedAt: "2021-09-15",
    pinned: true,
    tags: ["بانک مرکزی", "نقد"],
    fa: {
      title: "نگرانی‌هایی که صدچندان شد…",
      excerpt:
        "پی‌نوشت پیرامون نقد «هفت نکته در نقد نظریه استقلال بانک مرکزی برای نجات اقتصاد ایران».",
      body:
        "در پی انتشار یادداشت هفت‌نکته‌ای درباره استقلال بانک مرکزی، این نوشتار به نقد واکنش‌ها و عمق نگرانی‌های مطرح‌شده درباره اجرای سیاست پولی می‌پردازد.",
      author: "سید یاسر جبرائیلی",
    },
    en: {
      title: "Concerns that grew many times over",
      excerpt:
        "A follow-up on the critique “seven notes on central bank independence theory for saving Iran’s economy.”",
      body:
        "Following a seven-point note on central bank independence, this article engages with reactions and the depth of concerns about monetary policy implementation.",
      author: "Seyed Yaser Jebraeili",
    },
  },
  {
    id: "n5",
    type: "news",
    slug: "neoliberalism-oil-production-structure",
    cover: cover("1526304019102-1128d7a1c703"),
    publishedAt: "2021-01-26",
    pinned: false,
    tags: ["نئولیبرالیسم", "تولید"],
    fa: {
      title: "رو قوی‌شو اگر راحت‌جهان طلبی",
      excerpt:
        "نقدی بر گزاره‌های مطرح درباره اقتصاد سیاسی ایران در یک میزگرد رسانه‌ای.",
      body:
        "روزنامه دنیای اقتصاد گزارشی از میزگردی با حضور اقتصاددانان منتشر کرده بود؛ این یادداشت به برخی گزاره‌های نادرست درباره ساختار تولید و نفت پاسخ می‌دهد.",
      author: "سید یاسر جبرائیلی",
    },
    en: {
      title: "Stand firm if you seek an easy world",
      excerpt:
        "A critique of claims about Iran’s political economy in a media roundtable.",
      body:
        "A national economic daily reported a roundtable with economists; this note responds to some inaccurate claims about production structure and oil.",
      author: "Seyed Yaser Jebraeili",
    },
  },
  {
    id: "n6",
    type: "news",
    slug: "seventh-plan-guidelines",
    cover: cover("1450101499293-c880a667978a"),
    publishedAt: "2020-11-25",
    pinned: false,
    tags: ["برنامه هفتم", "توسعه"],
    fa: {
      title: "خطوط راهنمای تدوین برنامه هفتم",
      excerpt:
        "نگاهی به عمر قانون برنامه ششم و الزامات برنامه‌ریزی پنج‌ساله بعدی.",
      body:
        "با پایان دوره برنامه ششم، تدوین برنامه هفتم نیازمند خطوط راهبردی روشن در حوزه‌های اقتصادی، اجتماعی و فناوری است؛ این نوشتار چارچوبی برای ورود به آن بحث ارائه می‌کند.",
      author: "سید یاسر جبرائیلی",
    },
    en: {
      title: "Guidelines for drafting the Seventh Development Plan",
      excerpt:
        "On the life cycle of the sixth development law and requirements for the next five-year plan.",
      body:
        "As the sixth plan cycle ends, drafting the seventh plan needs clear strategic lines across economic, social, and technology domains; this essay offers a framework for that debate.",
      author: "Seyed Yaser Jebraeili",
    },
  },

  {
    id: "v1",
    type: "video",
    slug: "debate-government-eleventh-term",
    cover: cover("1531482615713-2afd69097998"),
    publishedAt: "2017-05-10",
    pinned: false,
    tags: ["مناظره", "انتخابات"],
    duration: "—",
    fa: {
      title: "مناظره انتخاباتی — بررسی عملکرد چهار ساله دولت یازدهم",
      excerpt:
        "روایت تصویری از مناظره‌ای پیرامون عملکرد اقتصادی و سیاست دولت یازدهم.",
      body:
        "این بخش به‌صورت خلاصه به محورهای مناظره و استدلال‌های مطرح‌شده درباره رشد، بیکاری و برجام می‌پردازد؛ نسخه کامل در وب‌گاه رسمی قابل پیگیری است.",
      author: "سید یاسر جبرائیلی",
    },
    en: {
      title: "Electoral debate — four years of the eleventh administration",
      excerpt:
        "A video summary of a debate on economic performance and policy.",
      body:
        "This entry summarizes debate themes on growth, unemployment, and the nuclear deal; full material can be followed on the official website.",
      author: "Seyed Yaser Jebraeili",
    },
  },
  {
    id: "v2",
    type: "video",
    slug: "privatization-article-44",
    cover: cover("1542744173-05336fcc50ad"),
    publishedAt: "2020-06-30",
    pinned: false,
    tags: ["خصوصی‌سازی", "اصل ۴۴"],
    duration: "—",
    fa: {
      title: "دولت فرآیند خصوصی‌سازی را رها کرده است",
      excerpt:
        "تحلیل وضعیت اجرای سیاست‌های کلی اصل ۴۴ و موضع رهبری.",
      body:
        "گفتاری پیرامون رهاشدگی فرآیند خصوصی‌سازی و فاصله میان تصمیمات دولتی و انتظارات راهبردی نظام در این حوزه.",
      author: "سید یاسر جبرائیلی",
    },
    en: {
      title: "The government has abandoned the privatization process",
      excerpt:
        "Analysis of Article 44 policies and the Leader’s stance.",
      body:
        "Remarks on gaps in privatization implementation and the distance between cabinet decisions and systemic strategic expectations.",
      author: "Seyed Yaser Jebraeili",
    },
  },
  {
    id: "v3",
    type: "video",
    slug: "neoliberalism-oil-destruction",
    cover: cover("1551288049-bebda4e38f71"),
    publishedAt: "2017-05-05",
    pinned: false,
    tags: ["نفت", "نئولیبرالیسم"],
    duration: "—",
    fa: {
      title: "نئولیبرالیسم نفتی به دنبال تخریب ساختار تولید کشور است",
      excerpt:
        "تحلیل پیوند نفت، سیاست انرژی و آسیب به پایه‌های تولید ملی.",
      body:
        "این گفتار به استدلال‌های مربوط به الگوی مصرف و تولید در اقتصاد نفتی و خطر تضعیف بنیان‌های تولیدی می‌پردازد.",
      author: "سید یاسر جبرائیلی",
    },
    en: {
      title: "Oil neoliberalism seeks to erode national production",
      excerpt:
        "On oil, energy policy, and damage to domestic production foundations.",
      body:
        "This talk addresses arguments about consumption and production patterns in a rentier oil economy and risks to productive capacity.",
      author: "Seyed Yaser Jebraeili",
    },
  },
  {
    id: "v4",
    type: "video",
    slug: "youth-revolutionary-state-building",
    cover: cover("1522071820081-009f0129c71c"),
    publishedAt: "2021-08-01",
    pinned: true,
    tags: ["جوانان", "دولت"],
    duration: "—",
    fa: {
      title: "جوانان انقلابی و دولت‌سازی اسلامی",
      excerpt:
        "چارچوب نظری برای نقش نسل جوان در تحکیم نهادهای حکمرانی مبتنی بر ارزش‌های انقلاب.",
      body:
        "سخنرانی پیرامون جایگاه جوانان در بازتولید مشروعیت سیاسی و کارآمدی دولت در مسیر تمدن‌سازی اسلامی.",
      author: "سید یاسر جبرائیلی",
    },
    en: {
      title: "Revolutionary youth and Islamic state-building",
      excerpt:
        "A framework for young generations in consolidating governance rooted in revolutionary values.",
      body:
        "A lecture on youth, political legitimacy, and state effectiveness toward Islamic civilization-building.",
      author: "Seyed Yaser Jebraeili",
    },
  },
  {
    id: "v5",
    type: "video",
    slug: "us-elections-slavery-civil-war",
    cover: cover("1529107386315-e1a2ed48a620"),
    publishedAt: "2020-11-13",
    pinned: false,
    tags: ["تاریخ", "سیاست"],
    duration: "—",
    fa: {
      title: "برده‌داری، جنگ داخلی و انتخابات ۲۰۲۰ آمریکا",
      excerpt:
        "بازخوانی تاریخی برای فهم برخی ریشه‌های سیاسی معاصر ایالات متحده.",
      body:
        "تحلیلی آموزشی درباره جنگ داخلی آمریکا، لغو برده‌داری و بازتاب آن در سیاست رقابتی امروز.",
      author: "سید یاسر جبرائیلی",
    },
    en: {
      title: "Slavery, civil war, and the 2020 U.S. election",
      excerpt:
        "A historical lens on roots of contemporary American politics.",
      body:
        "An educational analysis of the U.S. Civil War, abolition, and echoes in today’s competitive politics.",
      author: "Seyed Yaser Jebraeili",
    },
  },

  {
    id: "b1",
    type: "book",
    slug: "government-and-market",
    cover: cover("1544947950-fa68a434cd4c"),
    publishedAt: "2019-06-01",
    pinned: true,
    tags: ["اقتصاد", "کتاب"],
    pages: 0,
    publisher: "کتاب فردا",
    buyUrl: "https://jebraily.ir/",
    fa: {
      title: "دولت و بازار",
      excerpt:
        "بحثی درباره مرز نقش دولت و بازار در اقتصاد ایران.",
      body:
        "کتابی در حوزه اقتصاد سیاسی که به تعارض‌ها و هم‌افزایی‌های دولت و بازار در بستر سیاست‌گذاری ایرانی می‌پردازد.",
      author: "سید یاسر جبرائیلی",
    },
    en: {
      title: "Government and Market",
      excerpt:
        "On the boundary between state and market in Iran’s economy.",
      body:
        "A political-economy volume on tensions and complementarities between government and market in Iranian policymaking.",
      author: "Seyed Yaser Jebraeili",
    },
  },
  {
    id: "b2",
    type: "book",
    slug: "former-united-states",
    cover: cover("1507842217343-dbb701771405"),
    publishedAt: "2009-01-01",
    pinned: false,
    tags: ["تاریخ", "آمریکا"],
    pages: 0,
    publisher: "ایرنا",
    buyUrl: "https://jebraily.ir/",
    fa: {
      title: "ایالات متحده سابق",
      excerpt:
        "نگاهی به تحولات ژئوپلیتیک و هویتی ابرقدرت قرن بیستم.",
      body:
        "اثری پژوهشی درباره بازتعریف قدرت آمریکا در نظم جهانی.",
      author: "سید یاسر جبرائیلی",
    },
    en: {
      title: "The Former United States",
      excerpt:
        "Geopolitical and identity shifts of the twentieth-century superpower.",
      body:
        "A research work on redefining American power in the world order.",
      author: "Seyed Yaser Jebraeili",
    },
  },
  {
    id: "b3",
    type: "book",
    slug: "illusion-of-secularism",
    cover: cover("1512820790803-83ca734da794"),
    publishedAt: "2012-01-01",
    pinned: false,
    tags: ["اندیشه", "سکولاریسم"],
    pages: 0,
    publisher: "انتشارات فارس",
    buyUrl: "https://jebraily.ir/",
    fa: {
      title: "سودای سکولاریسم",
      excerpt:
        "بررسی جریان‌های فکری سکولار در بستر انقلاب اسلامی.",
      body:
        "کتابی در حوزه اندیشه سیاسی معاصر ایران.",
      author: "سید یاسر جبرائیلی",
    },
    en: {
      title: "The Illusion of Secularism",
      excerpt:
        "Secular intellectual currents in the context of the Islamic Revolution.",
      body:
        "A work on contemporary Iranian political thought.",
      author: "Seyed Yaser Jebraeili",
    },
  },
  {
    id: "b4",
    type: "book",
    slug: "narrative-of-leadership",
    cover: cover("1495446815901-a7297e633e8d"),
    publishedAt: "2015-01-01",
    pinned: false,
    tags: ["رهبری", "انقلاب"],
    pages: 0,
    publisher: "—",
    buyUrl: "https://jebraily.ir/",
    fa: {
      title: "روایت رهبری",
      excerpt:
        "تأملی درباره جایگاه ولی‌فقیه در نظام مردم‌سالاری دینی.",
      body:
        "کتابی درباره اندیشه سیاسی اسلامی و نقش رهبری در جمهوری اسلامی.",
      author: "سید یاسر جبرائیلی",
    },
    en: {
      title: "The Narrative of Leadership",
      excerpt:
        "Reflections on the Supreme Leadership within religious democracy.",
      body:
        "A volume on Islamic political thought and leadership in the Islamic Republic.",
      author: "Seyed Yaser Jebraeili",
    },
  },

  {
    id: "e1",
    type: "event",
    slug: "book-discussion-government-market",
    cover: cover("1481627834876-b7833e8f5570"),
    publishedAt: "2024-03-01",
    pinned: true,
    tags: ["کتاب", "نشست"],
    eventDate: "2024-03-20",
    eventTime: "17:00",
    venue: { fa: "تهران — محل پس از اعلام", en: "Tehran — venue TBA" },
    registerUrl: "https://jebraily.ir/",
    fa: {
      title: "نشست نقد و بررسی کتاب «دولت و بازار»",
      excerpt:
        "گفت‌وگوی تخصصی با حضور اقتصاددانان و اندیشمندان سیاسی.",
      body:
        "ثبت‌نام از طریق وب‌گاه رسمی؛ جزئیات دقیق زمان و مکان اعلام خواهد شد.",
      author: "ستاد رویداد",
    },
    en: {
      title: "Panel discussion on Government and Market",
      excerpt:
        "A specialist dialogue with economists and political thinkers.",
      body:
        "Registration via the official website; exact time and venue will be announced.",
      author: "Events office",
    },
  },
  {
    id: "e2",
    type: "event",
    slug: "lecture-seventh-plan",
    cover: cover("1517245386807-bb43f82c33c4"),
    publishedAt: "2024-02-10",
    pinned: false,
    tags: ["برنامه", "دانشگاه"],
    eventDate: "2024-04-15",
    eventTime: "10:00",
    venue: { fa: "دانشگاه تهران", en: "University of Tehran" },
    registerUrl: "https://jebraily.ir/",
    fa: {
      title: "سخنرانی «برنامه هفتم و اقتصاد ملی»",
      excerpt:
        "ارائه چارچوب‌های راهبردی برای تدوین برنامه توسعه.",
      body:
        "نشست دانشجویی-تخصصی با محوریت اقتصاد سیاسی برنامه‌ریزی.",
      author: "انجمن علمی",
    },
    en: {
      title: "Lecture: the Seventh Plan and the national economy",
      excerpt:
        "Strategic framing for development-plan drafting.",
      body:
        "A student-specialist session on the political economy of planning.",
      author: "Student association",
    },
  },
  {
    id: "e3",
    type: "event",
    slug: "photo-gallery-opening",
    cover: cover("1503676260728-1c00da094a0b"),
    publishedAt: "2023-11-01",
    pinned: false,
    tags: ["رسانه"],
    eventDate: "2023-11-18",
    eventTime: "16:00",
    venue: { fa: "تهران", en: "Tehran" },
    registerUrl: "https://jebraily.ir/",
    fa: {
      title: "آلبوم تصاویر — رونمایی وب‌گاه",
      excerpt:
        "به‌روزرسانی بخش تصاویر وب‌گاه رسمی.",
      body:
        "معرفی مجموعه تصاویر مرتبط با سخنرانی‌ها و حضورهای عمومی.",
      author: "تیم رسانه",
    },
    en: {
      title: "Photo gallery — site update",
      excerpt:
        "Launch of the official site’s photo section.",
      body:
        "A collection of images from speeches and public appearances.",
      author: "Media team",
    },
  },
  {
    id: "e4",
    type: "event",
    slug: "central-bank-panel",
    cover: cover("1554224154-22bbe7d7e14b"),
    publishedAt: "2023-09-05",
    pinned: false,
    tags: ["بانک", "پنل"],
    eventDate: "2023-10-02",
    eventTime: "14:30",
    venue: { fa: "پژوهشگاه علوم انسانی", en: "Institute for Humanities and Cultural Studies" },
    registerUrl: "https://jebraily.ir/",
    fa: {
      title: "پنل «استقلال بانک مرکزی: فرصت یا ریسک؟»",
      excerpt:
        "بحث آکادمیک با حضور صاحب‌نظران حقوق عمومی و اقتصاد.",
      body:
        "نشست علمی در بستر پژوهشگاه؛ شرکت برای عموم با هماهنگی قبلی.",
      author: "پژوهشگاه",
    },
    en: {
      title: "Panel: central bank independence — opportunity or risk?",
      excerpt:
        "An academic debate with public law and economics scholars.",
      body:
        "Hosted at the research institute; attendance by prior arrangement.",
      author: "Institute",
    },
  },
  {
    id: "e5",
    type: "event",
    slug: "party-congress-youth",
    cover: cover("1521737604893-d14cc237f11d"),
    publishedAt: "2024-01-12",
    pinned: false,
    tags: ["حزب", "جوانان"],
    eventDate: "2024-06-10",
    eventTime: "09:00",
    venue: { fa: "تهران", en: "Tehran" },
    registerUrl: "https://jebraily.ir/",
    fa: {
      title: "همایش جوانان و آینده حزب تمدن نوین اسلامی",
      excerpt:
        "گردهمایی اعضا و فعالان استانی.",
      body:
        "محور: نقش جوانان در بسیج ایده‌های تمدنی در عرصه عمومی.",
      author: "دبیرخانه حزب",
    },
    en: {
      title: "Youth and the future of the New Islamic Civilization Party",
      excerpt:
        "A gathering of members and provincial activists.",
      body:
        "Theme: youth mobilizing civilizational ideas in the public sphere.",
      author: "Party secretariat",
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
