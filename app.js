const FORMS = {
  konferans: "https://forms.cloud.microsoft/r/MTJLbHZYrH",
  hepsi: "https://forms.cloud.microsoft/r/4ta6b2QfYy",
};

window.dataLayer = window.dataLayer || [];
function track(event, params) {
  window.dataLayer.push(Object.assign({ event: event }, params));
  if (typeof window.gtag === "function") {
    window.gtag("event", event, params || {});
  }
}

document.querySelectorAll("[data-apply]").forEach((el) => {
  const kind = el.getAttribute("data-apply");
  const url = FORMS[kind];
  if (!url || url === "#") return;
  el.setAttribute("href", url);
  el.setAttribute("target", "_blank");
  el.setAttribute("rel", "noopener");
  el.addEventListener("click", () => track("apply_click", { apply_type: kind }));
});


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

const applyToggle = document.getElementById("apply-toggle");
const applyChoices = document.getElementById("apply-choices");
applyChoices.hidden = true;

function setApplyOpen(open) {
  applyChoices.hidden = !open;
  applyToggle.setAttribute("aria-expanded", open ? "true" : "false");
  if (open) track("apply_open");
}

applyToggle.addEventListener("click", () => setApplyOpen(applyChoices.hidden));

document.querySelectorAll("[data-apply-jump]").forEach((el) =>
  el.addEventListener("click", () => {
    setApplyOpen(true);
    document.getElementById("hazirlik").scrollIntoView({ behavior: "smooth", block: "center" });
  })
);

const schTabs = document.querySelectorAll(".sch-tabs .sch-day");
const schPanels = document.querySelectorAll(".sch-panel");

function selectDay(tab) {
  const day = tab.getAttribute("data-day");
  track("schedule_tab", { schedule_tab: day === "1" ? "egitim" : "konferans" });
  schTabs.forEach((t) => {
    const on = t === tab;
    t.classList.toggle("active", on);
    t.setAttribute("aria-selected", on ? "true" : "false");
  });
  schPanels.forEach((panel) => {
    panel.hidden = panel.getAttribute("data-day") !== day;
  });
}

schTabs.forEach((tab, i) => {
  tab.addEventListener("click", () => selectDay(tab));
  tab.addEventListener("keydown", (e) => {
    const step = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const next = schTabs[(i + step + schTabs.length) % schTabs.length];
    selectDay(next);
    next.focus();
  });
});

const navInner = document.getElementById("nav-inner");
const onScroll = () => navInner.classList.toggle("scrolled", window.scrollY > 8);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
menuBtn.addEventListener("click", () => mobileMenu.classList.toggle("open"));
mobileMenu.querySelectorAll("a, button").forEach((el) =>
  el.addEventListener("click", () => mobileMenu.classList.remove("open"))
);

// Hangi soruların merak edildiği ve hangi kanala gidildiği etkinlik sonrası inceleniyor
document.querySelectorAll(".faq-item").forEach((item) =>
  item.addEventListener("toggle", () => {
    if (!item.open) return;
    const q = item.querySelector("summary span");
    track("faq_open", { faq_question: q ? q.textContent.trim() : "" });
  })
);

document.querySelectorAll(".footer-social a").forEach((el) =>
  el.addEventListener("click", () =>
    track("social_click", { social_platform: (el.getAttribute("aria-label") || "").toLowerCase() })
  )
);

const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
