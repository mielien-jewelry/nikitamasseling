/* Kleine helper-code. Inhoud aanpassen doe je in config.js en index.html. */
(function () {
  var S = window.SITE || {}, doc = document, root = doc.documentElement;
  var $$ = function (sel) { return Array.prototype.slice.call(doc.querySelectorAll(sel)); };
  var both = function (o) {
    return '<span lang="nl">' + o.nl + '</span><span lang="en">' + o.en + '</span>';
  };

  /* --- Links en foto's uit config.js ----------------------- */
  var links = {
    tiktok: "https://www.tiktok.com/@" + S.tiktokHandle,
    instagram: "https://www.instagram.com/" + S.instagramHandle,
    email: "mailto:" + S.email,
    kofi: S.kofiUrl,
    moai: S.moaiUrl
  };
  /* Nog niet ingevuld in config.js? Dan verbergen we de knop i.p.v. een dode link. */
  var missing = { email: S.email === "EMAIL", kofi: S.kofiUrl === "KOFI_URL", instagram: S.instagramHandle === "JOUW_IG_NAAM" };
  $$("[data-link]").forEach(function (a) {
    if (missing[a.dataset.link]) a.hidden = true; else a.href = links[a.dataset.link];
  });
  if (missing.kofi) doc.getElementById("steun").hidden = true;
  $$("[data-img]").forEach(function (img) {
    var src = S.images && S.images[img.dataset.img];
    if (src && img.getAttribute("src") !== src) img.src = src;
  });
  doc.getElementById("year").textContent = new Date().getFullYear();

  /* --- Taal ------------------------------------------------- */
  function setLang(lang) {
    root.lang = lang;
    try { localStorage.setItem("lang", lang); } catch (e) {}
    $$("[data-set-lang]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.setLang === lang));
    });
    $$("[data-stat]").forEach(function (el) {
      var v = S.stats && S.stats[el.dataset.stat];
      if (v) el.textContent = v[lang];
    });
    $$("img[data-alt-en]").forEach(function (img) {
      if (!img.dataset.altNl) img.dataset.altNl = img.alt;
      img.alt = lang === "en" ? img.dataset.altEn : img.dataset.altNl;
    });
  }
  $$("[data-set-lang]").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.dataset.setLang); });
  });
  setLang(root.lang === "en" ? "en" : "nl");

  /* --- TikTok: laadt pas na een klik (officiële TikTok-player) */
  var vlist = doc.getElementById("video-list");
  (S.videos || []).forEach(function (v, i) {
    var url = links.tiktok + "/video/" + v.id;
    var el = doc.createElement("article");
    el.className = "video reveal tone-" + (i % 4);
    el.innerHTML =
      '<button type="button" class="video__load">' +
        '<span class="video__views">' + both(v.views) + ' views</span>' +
        '<span class="video__play" aria-hidden="true"><svg viewBox="0 0 24 24"><path fill="currentColor" d="M8 5.5v13l11-6.5z"/></svg></span>' +
        '<span class="video__title">' + both(v) + '</span>' +
        '<span class="video__hint">' + both({ nl: "Tik om te laden van TikTok", en: "Tap to load from TikTok" }) + '</span>' +
      '</button>' +
      '<a class="video__ext" href="' + url + '" target="_blank" rel="noopener">' +
        both({ nl: "Open in TikTok", en: "Open in TikTok" }) + ' ↗</a>';
    el.querySelector("button").addEventListener("click", function () {
      var f = doc.createElement("iframe");
      f.src = "https://www.tiktok.com/player/v1/" + v.id + "?autoplay=1&music_info=1&description=1&rel=0";
      f.title = v[root.lang] || v.nl;
      f.allow = "autoplay; encrypted-media; fullscreen; picture-in-picture";
      f.allowFullscreen = true;
      this.replaceWith(f);
    });
    vlist.appendChild(el);
  });

  /* --- Instagram: zelfde principe (officiële Instagram-embed) */
  var ilist = doc.getElementById("insta-list");
  var posts = (S.instagramPosts || []).filter(function (u) { return /instagram\.com\/(p|reel|tv)\//.test(u); });
  var slots = posts.length ? posts : [null, null, null];
  var igIcon = '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5.5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>';
  slots.forEach(function (u, i) {
    var el = doc.createElement("div");
    el.className = "post reveal tone-" + (i % 4);
    if (!u) {
      el.classList.add("post--empty");
      el.innerHTML = igIcon + '<span>' + both({ nl: "Binnenkort een nieuwe post", en: "New post coming soon" }) + '</span>';
    } else {
      var clean = u.split("?")[0].replace(/\/?$/, "/");
      el.innerHTML = '<button type="button" class="post__load">' + igIcon +
        '<span>' + both({ nl: "Tik om post te laden", en: "Tap to load post" }) + '</span>' +
        '<small>' + both({ nl: "Laadt van Instagram", en: "Loads from Instagram" }) + '</small></button>';
      el.querySelector("button").addEventListener("click", function () {
        var f = doc.createElement("iframe");
        f.src = clean + "embed/";
        f.title = "Instagram-post " + (i + 1);
        f.allow = "encrypted-media";
        f.style.height = Math.round(el.clientWidth * 1.26 + 205) + "px";
        el.classList.add("post--loaded");
        this.replaceWith(f);
      });
    }
    ilist.appendChild(el);
  });

  /* --- Subtiele scroll-animaties ---------------------------- */
  var items = $$(".reveal");
  if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) {
    items.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    items.forEach(function (el) { io.observe(el); });
  }
})();
