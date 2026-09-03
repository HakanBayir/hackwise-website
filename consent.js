(function () {
  const CONSENT_KEY = "hw-consent";
  const GTM_ID = "GTM-54LCB7DB";
  const GA_ID = "G-ETG8F7BQ74";

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () {
    window.dataLayer.push(arguments);
  };
  const gtag = window.gtag;

  // Reklam izni istemiyoruz; bant yalnızca ölçüm için onay alıyor
  gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
  });

  const TEXT = {
    body: "Ziyaret istatistiklerini ölçmek için çerez kullanıyoruz. Reddedersen ölçüm yapılmaz.",
    accept: "Kabul et",
    decline: "Reddet",
    link: "Aydınlatma metni",
    href: "kvkk.html",
  };

  function readConsent() {
    try {
      return localStorage.getItem(CONSENT_KEY);
    } catch (e) {
      return null;
    }
  }

  function writeConsent(value) {
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch (e) {}
  }

  function loadAnalytics() {
    if (document.querySelector('script[src*="gtag/js"]')) return;
    const g = document.createElement("script");
    g.async = true;
    g.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
    document.head.appendChild(g);
    gtag("js", new Date());
    gtag("config", GA_ID);
  }

  function loadTagManager() {
    if (window.google_tag_manager) return;
    gtag("consent", "update", { analytics_storage: "granted" });
    loadAnalytics();
    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
      const f = d.getElementsByTagName(s)[0];
      const j = d.createElement(s);
      const dl = l != "dataLayer" ? "&l=" + l : "";
      j.async = true;
      j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, "script", "dataLayer", GTM_ID);
  }

  function showBanner() {
    const t = TEXT;
    const box = document.createElement("div");
    box.className = "consent";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-label", t.link);
    box.innerHTML =
      '<p class="consent-text"></p>' +
      '<div class="consent-actions">' +
      '<a class="consent-link" href=""></a>' +
      '<button type="button" class="btn-ghost" data-consent="declined"></button>' +
      '<button type="button" class="btn-primary" data-consent="accepted"></button>' +
      "</div>";
    document.body.appendChild(box);

    box.querySelector(".consent-text").textContent = t.body;
    box.querySelector(".consent-link").textContent = t.link;
    box.querySelector(".consent-link").href = t.href;
    box.querySelector('[data-consent="declined"]').textContent = t.decline;
    box.querySelector('[data-consent="accepted"]').textContent = t.accept;

    box.querySelectorAll("[data-consent]").forEach((btn) =>
      btn.addEventListener("click", () => {
        const choice = btn.getAttribute("data-consent");
        writeConsent(choice);
        box.remove();
        if (choice === "accepted") loadTagManager();
      })
    );
  }

  const saved = readConsent();
  if (saved === "accepted") {
    loadTagManager();
  } else if (saved !== "declined") {
    showBanner();
  }
})();
