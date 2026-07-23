const FORM_URL = "https://forms.gle/BQjfW5U5mr8xZtsZ8";

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
    "meta.desc": "HackWise 2026: Cyberwise ve ODTÜ iş birliğiyle 3-4-5 Ekim'de ODTÜ kampüsünde düzenlenen üç günlük siber güvenlik etkinliği. Başvurular açık.",

    "nav.about": "Etkinlik",
    "nav.who": "Katılım",
    "nav.agenda": "Etkinlik Takvimi",

    "cta.apply": "Başvuru Yap",
    "cta.learn": "Etkinliği İncele",

    "hero.eyebrow": "3-4-5 Ekim 2026 · ODTÜ, Ankara",
    "hero.title1": "HackWise",
    "hero.title2": "2026",
    "hero.sub": "Siber güvenliğin farklı disiplinlerini bir araya getiren etkinlikte teknik konuşmalar, uygulamalı oturumlar, CTF'ler, yarışmalar ve kariyer sohbetleriyle dolu üç gün bizi bekliyor. 3-4-5 Ekim'de ODTÜ'de buluşuyoruz!",
    "hero.corner": "3-4-5 EKİM 2026",
    "hero.scroll": "KEŞFET",

    "meta.dateK": "Tarih",
    "meta.dateV": "3-4-5 Ekim 2026",
    "meta.dateS": "Cumartesi – Pazartesi, 3 gün",

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
    "about.title": "Cyberwise, sahadaki deneyimiyle ODTÜ'de",
    "about.lead": "Cyberwise ve ODTÜ, siber güvenliğe ilgi duyan öğrencileri ve genç profesyonelleri kampüste bir araya getiriyor. Üç gün boyunca farklı uzmanlık alanlarından profesyoneller deneyimlerini paylaşacak; katılımcılar teknik oturumlarda güncel konuları dinlerken uygulamalı çalışmalar ve yarışmalarda bilgilerini sınayabilecek. Amacımız sektörü yalnızca anlatmak değil; birlikte düşünmek, denemek ve gerçek deneyimler üzerinden konuşmak.",
    "about.li1": "Farklı uzmanlık alanlarından teknik oturumlar",
    "about.li2": "Uygulamalı çalışmalar, canlı demolar ve yarışmalar",
    "about.li3": "Kariyer sohbetleri ve yeni bağlantılar",
    "about.visualLabel": "CYBERWISE × ODTÜ İŞ BİRLİĞİ",

    "who.eyebrow": "Katılım",
    "who.title": "Kimler katılabilir?",

    "who.t1": "Öğrenciler",
    "who.d1": "Siber güvenliği yakından tanımak veya bu alanda kariyer yapmak isteyen üniversite öğrencileri.",

    "who.t2": "Genç Profesyoneller",
    "who.d2": "Siber güvenlikte farklı uzmanlık alanlarını keşfetmek isteyen profesyoneller.",

    "who.t3": "Alan Değiştirmek İsteyenler",
    "who.d3": "Yazılım, sistem, ağ veya farklı bir teknik alandan siber güvenliğe geçmeyi düşünenler.",

    "agenda.eyebrow": "Program",
    "agenda.title": "Etkinlik Takvimi",
    "agenda.soonTitle": "Program çok yakında",
    "agenda.soonDesc": "Üç günlük etkinlik akışı; oturumlar, atölyeler ve konuşmacılar netleştiğinde burada yayınlanacak. Başvuru yapanlar e-posta ile de bilgilendirilecek.",
    "agenda.soonD1": "3 Ekim Cumartesi",
    "agenda.soonD2": "4 Ekim Pazar",
    "agenda.soonD3": "5 Ekim Pazartesi",

    "apply.eyebrow": "Başvuru",
    "apply.title": "Etkinlikte yerini ayır",
    "apply.lead": "Kısa başvuru formunu doldurarak ön kaydını oluşturabilirsin. Kontenjan ve etkinlik programına ilişkin bilgilendirmeler e-posta üzerinden paylaşılacaktır.",
    "apply.btn": "Başvuru Formunu Aç",

    "footer.navTitle": "Sayfa",
    "footer.contactTitle": "İletişim",
    "footer.venue": "ODTÜ Kampüsü, Ankara",
    "footer.date": "3-4-5 Ekim 2026",
    "footer.rights": "© 2026 Cyberwise × ODTÜ · Tüm hakları saklıdır.",
    "footer.tag": "3-4-5 EKİM 2026 · ANKARA"
  },

  en: {
    "meta.title": "HackWise 2026 | Cyberwise × METU",
    "meta.desc": "HackWise 2026: a three-day cybersecurity event by Cyberwise and METU, October 3-4-5, 2026 at the METU campus. Applications are open.",

    "nav.about": "Event",
    "nav.who": "Attendance",
    "nav.agenda": "Schedule",

    "cta.apply": "Apply Now",
    "cta.learn": "Explore the Event",

    "hero.eyebrow": "October 3-4-5, 2026 · METU, Ankara",
    "hero.title1": "HackWise",
    "hero.title2": "2026",
    "hero.sub": "Three days packed with technical talks, hands-on sessions, CTFs, competitions and career conversations, bringing together different disciplines of cybersecurity. See you at METU on October 3-4-5!",
    "hero.corner": "OCTOBER 3-4-5, 2026",
    "hero.scroll": "EXPLORE",

    "meta.dateK": "Date",
    "meta.dateV": "October 3-4-5, 2026",
    "meta.dateS": "Saturday – Monday, 3 days",

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
    "about.title": "Cyberwise brings its field experience to METU",
    "about.lead": "Cyberwise and METU are bringing together students and early-career professionals with an interest in cybersecurity. Across three days, practitioners from different fields will share their experience, while participants will have the opportunity to explore current topics, join hands-on sessions and test their skills in challenges and competitions. The aim is not only to talk about the industry, but to create a space for practical learning, open discussion and shared experience.",
    "about.li1": "Technical sessions across different security disciplines",
    "about.li2": "Hands-on activities, live demos and competitions",
    "about.li3": "Career conversations and new connections",
    "about.visualLabel": "CYBERWISE × METU COLLABORATION",

    "who.eyebrow": "Attendance",
    "who.title": "Who can attend?",

    "who.t1": "Students",
    "who.d1": "University students who want to explore cybersecurity or consider a career in the field.",

    "who.t2": "Early-Career Professionals",
    "who.d2": "Professionals who want to discover different cybersecurity disciplines.",

    "who.t3": "Career Switchers",
    "who.d3": "People considering a move into cybersecurity from software, systems, networking or another technical field.",

    "agenda.eyebrow": "Program",
    "agenda.title": "Event Schedule",
    "agenda.soonTitle": "Program coming soon",
    "agenda.soonDesc": "The full three-day schedule will be published here once sessions, workshops and speakers are finalized. Applicants will also be notified by email.",
    "agenda.soonD1": "Saturday, Oct 3",
    "agenda.soonD2": "Sunday, Oct 4",
    "agenda.soonD3": "Monday, Oct 5",

    "apply.eyebrow": "Application",
    "apply.title": "Reserve your place",
    "apply.lead": "Complete the short application form to register your interest. Updates regarding capacity and the event program will be shared by email.",
    "apply.btn": "Open Application Form",

    "footer.navTitle": "Page",
    "footer.contactTitle": "Contact",
    "footer.venue": "METU Campus, Ankara",
    "footer.date": "October 3-4-5, 2026",
    "footer.rights": "© 2026 Cyberwise × METU · All rights reserved.",
    "footer.tag": "OCTOBER 3-4-5, 2026 · ANKARA"
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
