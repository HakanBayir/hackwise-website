const FORM_URL = "https://forms.google.com/deneme"; // TODO: Google Forms linki

document.querySelectorAll("[data-apply]").forEach((el) => {
  el.setAttribute("href", FORM_URL);
  if (FORM_URL !== "#") {
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  }
});

const I18N = {
  tr: {
    "meta.title": "HackWise 2026 | Cyberwise × ODTÜ",
    "meta.desc": "HackWise 2026: Cyberwise ve ODTÜ iş birliğiyle düzenlenen; teknik oturumlar, uygulamalı çalışmalar ve yarışmalarla şekillenen bir günlük siber güvenlik buluşması. Ekim 2026, ODTÜ.",

    "nav.about": "Etkinlik",
    "nav.who": "Katılım",
    "nav.agenda": "Etkinlik Takvimi",

    "cta.apply": "Başvuru Yap",
    "cta.learn": "Etkinliği İncele",

    "hero.eyebrow": "Ekim 2026 · ODTÜ, Ankara",
    "hero.title1": "HackWise",
    "hero.title2": "2026",
    "hero.sub": "Siber güvenliğin farklı alanlarını aynı gün içinde buluşturan etkinlikte teknik konuşmalar, uygulamalı oturumlar, CTF ve yarışmalar ile kariyer sohbetleri yer alacak. Katılım ücretsiz, kontenjan sınırlı.",
    "hero.corner": "EKİM 2026",
    "hero.scroll": "KEŞFET",

    "meta.dateK": "Tarih",
    "meta.dateV": "Ekim 2026",
    "meta.dateS": "Kesin tarih yakında açıklanacak",

    "meta.placeK": "Yer",
    "meta.placeV": "ODTÜ Kampüsü",
    "meta.placeS": "Ankara",

    "meta.feeK": "Katılım",
    "meta.feeV": "Ücretsiz",
    "meta.feeS": "Ön başvuru gereklidir",

    "meta.seatK": "Kontenjan",
    "meta.seatV": "Sınırlı",
    "meta.seatS": "Başvuru ile katılım",

    "about.eyebrow": "Etkinlik Hakkında",
    "about.title": "Siber güvenlik, sahadaki deneyimiyle ODTÜ'de",
    "about.lead": "Cyberwise ve ODTÜ, siber güvenliğe ilgi duyan öğrencileri ve genç profesyonelleri kampüste bir araya getiriyor. Gün boyunca farklı uzmanlık alanlarından profesyoneller deneyimlerini paylaşacak; katılımcılar teknik oturumlarda güncel konuları dinlerken uygulamalı çalışmalar ve yarışmalarda bilgilerini sınayabilecek. Amacımız sektörü yalnızca anlatmak değil; birlikte düşünmek, denemek ve gerçek deneyimler üzerinden konuşmak.",
    "about.li1": "Farklı uzmanlık alanlarından teknik oturumlar",
    "about.li2": "Uygulamalı çalışmalar, canlı demolar ve yarışmalar",
    "about.li3": "Kariyer sohbetleri ve yeni bağlantılar",
    "about.visualLabel": "CYBERWISE × ODTÜ İŞ BİRLİĞİ",


    "topics.t1": "Tehdit İstihbaratı",
    "topics.d1": "Açık kaynaklardan dark web'e uzanan tehdit takibi; veri sızıntıları, saldırgan davranışları ve gerçek vakalar üzerinden incelenecek.",

    "topics.t2": "Sızma Testi & Red Team",
    "topics.d2": "Bir kurum saldırganın gözünden nasıl görünür? Keşif, ilk erişim ve güvenlik açıklarının istismarına uzanan süreç gerçekçi senaryolarla ele alınacak.",

    "topics.t3": "SOC & Mavi Takım",
    "topics.d3": "Bir güvenlik operasyon merkezinde olaylar nasıl izlenir, alarmlar nasıl önceliklendirilir ve doğru tespit nasıl geliştirilir? Mavi takımın günlük çalışma pratiğine yakından bakacağız.",

    "topics.t4": "Olay Müdahale & DFIR",
    "topics.d4": "Bir ihlalin ilk sinyalinden kök neden analizine kadar geçen süreç; müdahale, delil toplama ve adli analiz adımlarıyla anlatılacak.",

    "topics.t5": "GRC & Danışmanlık",
    "topics.d5": "Siber güvenliğin yönetişim tarafı; risk, uyum, denetim ve danışmanlık ekiplerinin kurumlarda nasıl çalıştığı ve bu alandaki kariyer yolları konuşulacak.",


    "who.eyebrow": "Katılım",
    "who.title": "Kimler katılabilir?",
    "who.lead": "Bölüm ya da deneyim seviyesi fark etmiyor. Siber güvenliğe duyulan ilgi ve merak yeterli.",

    "who.t1": "Öğrenciler",
    "who.d1": "Siber güvenliği yakından tanımak veya bu alanda kariyer yapmak isteyen lisans ve lisansüstü öğrencileri.",

    "who.t2": "Genç Profesyoneller",
    "who.d2": "Kariyerinin ilk yıllarında olan ve siber güvenlikte farklı uzmanlık alanlarını keşfetmek isteyen profesyoneller.",

    "who.t3": "Alan Değiştirmek İsteyenler",
    "who.d3": "Yazılım, sistem, ağ veya farklı bir teknik alandan siber güvenliğe geçmeyi düşünenler.",

    "agenda.eyebrow": "Gün Akışı",
    "agenda.title": "Etkinlik Takvimi",
    "agenda.lead": "Program, siber güvenliğin farklı disiplinlerini gerçek örnekler ve uygulamalar üzerinden ele alacak. Konuşmacılar ve kesin saatler etkinlik öncesinde paylaşılacaktır.",

    "agenda.g1": "Sabah",
    "agenda.g2": "Öğleden Sonra",
    "agenda.t1": "Kayıt & Karşılama",    "agenda.d1": "Katılımcı kaydı, yaka kartlarının teslimi ve etkinlik alanına giriş.",
    "agenda.t2": "Açılış",    "agenda.d2": "Cyberwise ve ODTÜ temsilcilerinin açılış konuşmaları.",
    "agenda.t3": "Teknik Oturumlar",    "agenda.d3": "Tehdit istihbaratı, sızma testi, SOC, olay müdahale ve güvenlik yönetişimi ekiplerinden sunumlar.",
    "agenda.t4": "Öğle Arası",    "agenda.d4": "Yemek ve serbest networking.",
    "agenda.t5": "Atölyeler & Yarışmalar",    "agenda.d5": "Katılımcıların doğrudan dahil olacağı uygulamalı oturumlar, CTF ve yarışma formatları. Paralel ilerler; seçim kayıt sırasında yapılacak.",
    "agenda.t6": "Kariyer Buluşması & Kapanış",    "agenda.d6": "Sektör profesyonelleriyle soru-cevap, kariyer sohbetleri ve networking ile günün kapanışı.",

    "apply.eyebrow": "Başvuru",
    "apply.title": "Etkinlikte yerini ayır",
    "apply.lead": "Kısa başvuru formunu doldurarak ön kaydını oluşturabilirsin. Kontenjan ve etkinlik programına ilişkin bilgilendirmeler e-posta üzerinden paylaşılacaktır.",
    "apply.btn": "Başvuru Formunu Aç",
    "apply.note": "Başvurular Google Forms üzerinden alınacaktır.",

    "footer.about": "Cyberwise ve ODTÜ iş birliğiyle düzenlenen bir günlük siber güvenlik buluşması. Ekim 2026, ODTÜ Kampüsü.",
    "footer.navTitle": "Sayfa",
    "footer.contactTitle": "İletişim",
    "footer.rights": "© 2026 Cyberwise × ODTÜ",
    "footer.tag": "EKİM 2026 · ANKARA"
  },

  en: {
    "meta.title": "HackWise 2026 | Cyberwise × METU",
    "meta.desc": "HackWise 2026: a one-day cybersecurity event presented by Cyberwise and METU, featuring technical sessions, hands-on activities and competitions. October 2026, METU.",

    "nav.about": "Event",
    "nav.who": "Attendance",
    "nav.agenda": "Schedule",

    "cta.apply": "Apply Now",
    "cta.learn": "Explore the Event",

    "hero.eyebrow": "October 2026 · METU, Ankara",
    "hero.title1": "HackWise",
    "hero.title2": "2026",
    "hero.sub": "A full day bringing together different areas of cybersecurity through technical talks, hands-on sessions, CTF challenges, competitions and career conversations. Attendance is free and capacity is limited.",
    "hero.corner": "OCTOBER 2026",
    "hero.scroll": "EXPLORE",

    "meta.dateK": "Date",
    "meta.dateV": "October 2026",
    "meta.dateS": "Exact date to be announced",

    "meta.placeK": "Venue",
    "meta.placeV": "METU Campus",
    "meta.placeS": "Ankara",

    "meta.feeK": "Admission",
    "meta.feeV": "Free",
    "meta.feeS": "Pre-registration required",

    "meta.seatK": "Capacity",
    "meta.seatV": "Limited",
    "meta.seatS": "Application required",

    "about.eyebrow": "About the Event",
    "about.title": "Cybersecurity experience meets the METU campus",
    "about.lead": "Cyberwise and METU are bringing together students and early-career professionals with an interest in cybersecurity. Throughout the day, practitioners from different fields will share their experience, while participants will have the opportunity to explore current topics, join hands-on sessions and test their skills in challenges and competitions. The aim is not only to talk about the industry, but to create a space for practical learning, open discussion and shared experience.",
    "about.li1": "Technical sessions across different security disciplines",
    "about.li2": "Hands-on activities, live demos and competitions",
    "about.li3": "Career conversations and new connections",
    "about.visualLabel": "CYBERWISE × METU COLLABORATION",


    "topics.t1": "Threat Intelligence",
    "topics.d1": "Threat monitoring across open sources and the dark web, explored through data leaks, attacker behavior and real-world cases.",

    "topics.t2": "Penetration Testing & Red Team",
    "topics.d2": "What does an organization look like from an attacker's point of view? The journey from reconnaissance and initial access to exploitation will be examined through realistic scenarios.",

    "topics.t3": "SOC & Blue Team",
    "topics.d3": "How are security events monitored, alerts prioritized and effective detections developed inside a security operations center? A closer look at the day-to-day work of a blue team.",

    "topics.t4": "Incident Response & DFIR",
    "topics.d4": "The response process from the first sign of a breach to root cause analysis, including evidence collection, containment and digital forensics.",

    "topics.t5": "GRC & Consulting",
    "topics.d5": "The governance side of cybersecurity, including risk, compliance, audit and consulting, as well as the career paths available in these fields.",


    "who.eyebrow": "Attendance",
    "who.title": "Who can attend?",
    "who.lead": "There is no department or experience-level requirement. An interest in cybersecurity is enough.",

    "who.t1": "Students",
    "who.d1": "Undergraduate and graduate students who want to explore cybersecurity or consider a career in the field.",

    "who.t2": "Early-Career Professionals",
    "who.d2": "Professionals in the first years of their careers who want to discover different cybersecurity disciplines and deepen their knowledge.",

    "who.t3": "Career Switchers",
    "who.d3": "People considering a move into cybersecurity from software, systems, networking or another technical field.",

    "agenda.eyebrow": "Schedule",
    "agenda.title": "Event Schedule",
    "agenda.lead": "The program explores different areas of cybersecurity through real examples and hands-on work. Speakers and final session times will be shared before the event.",

    "agenda.g1": "Morning",
    "agenda.g2": "Afternoon",
    "agenda.t1": "Registration & Welcome",    "agenda.d1": "Participant check-in, badge collection and access to the event area.",
    "agenda.t2": "Opening",    "agenda.d2": "Opening remarks from representatives of Cyberwise and METU.",
    "agenda.t3": "Technical Sessions",    "agenda.d3": "Talks covering threat intelligence, penetration testing, SOC operations, incident response and security governance.",
    "agenda.t4": "Lunch Break",    "agenda.d4": "Lunch and open networking.",
    "agenda.t5": "Workshops & Competitions",    "agenda.d5": "Hands-on sessions, CTF challenges and competition formats designed for active participation. They run in parallel; participants choose one during registration.",
    "agenda.t6": "Career Meetup & Closing",    "agenda.d6": "An open Q&A, career conversations and networking with industry professionals to close the day.",

    "apply.eyebrow": "Application",
    "apply.title": "Reserve your place",
    "apply.lead": "Complete the short application form to register your interest. Updates regarding capacity and the event program will be shared by email.",
    "apply.btn": "Open Application Form",
    "apply.note": "Applications will be collected through Google Forms.",

    "footer.about": "A one-day cybersecurity event presented by Cyberwise and METU. October 2026, METU Campus.",
    "footer.navTitle": "Page",
    "footer.contactTitle": "Contact",
    "footer.rights": "© 2026 Cyberwise × METU",
    "footer.tag": "OCTOBER 2026 · ANKARA"
  }
};

function setLang(lang) {
  const dict = I18N[lang] || I18N.tr;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const val = dict[key];
    if (val == null) return;
    if (key === "meta.title") { document.title = val; return; }
    if (key === "meta.desc") { el.setAttribute("content", val); return; }
    el.textContent = val;
  });
  document.querySelectorAll(".lang-toggle button").forEach((b) =>
    b.classList.toggle("active", b.getAttribute("data-lang") === lang)
  );
  try { localStorage.setItem("cw-lang", lang); } catch (e) {}
}

document.querySelectorAll(".lang-toggle button").forEach((b) =>
  b.addEventListener("click", () => setLang(b.getAttribute("data-lang")))
);
let saved = "tr";
try { saved = localStorage.getItem("cw-lang") || "tr"; } catch (e) {}
setLang(saved);

const heroVideo = document.getElementById("hero-video");
if (heroVideo) {
  heroVideo.muted = true;
  heroVideo.play().catch(() => {});
  heroVideo.addEventListener("ended", () => {
    if (!heroVideo.duration) return;
    heroVideo.currentTime = Math.max(0, heroVideo.duration - 0.05);
    heroVideo.pause();
  });

  heroVideo.addEventListener("pause", () => {
    if (!heroVideo.ended && heroVideo.currentTime < heroVideo.duration - 0.1) {
      heroVideo.play().catch(() => {});
    }
  });
}

const navInner = document.getElementById("nav-inner");
const onScroll = () => navInner.classList.toggle("scrolled", window.scrollY > 8);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
menuBtn.addEventListener("click", () => mobileMenu.classList.toggle("open"));
mobileMenu.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => mobileMenu.classList.remove("open"))
);

const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
