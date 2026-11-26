/* ============================================================
   CONFIG — alles wat je zelf moet invullen staat in dit bestand.
   Pas een waarde aan, sla op, klaar. Je hoeft nergens anders te zijn.
   ============================================================ */
window.SITE = {
  /* --- 1. PLACEHOLDERS: vul deze in ------------------------- */
  email: "nikitamasseling@gmail.com",                     // bijv. "hallo@nikitamasseling.com"
  kofiUrl: "KOFI_URL",                 // bijv. "https://ko-fi.com/nikitamasseling"
  instagramHandle: "JOUW_IG_NAAM",     // zonder @, bijv. "nikitamasseling"

  /* --- 2. Vaste links --------------------------------------- */
  tiktokHandle: "nikitamasseling",
  moaiUrl: "https://moaithebrand.com?sca_ref=12484037.cF4WWWBnthUSU",

  /* --- 3. Foto's: vervang de bestanden in /assets ----------- */
  images: {
    hero: "assets/hero.jpg",           // liggend, min. 2000px breed
    about: "assets/about.jpg",         // staand, jij + Bailey
    moai: "assets/moai.jpg"            // staand, jij op je sup
  },

  /* --- 4. Design: "editorial" | "kust" | "zonsondergang" | "zee" */
  design: "editorial",

  /* --- 5. Statistieken voor de mediakit --------------------- */
  stats: {
    date:      { nl: "26 nov 2026", en: "26 Nov 2026" },
    followers: { nl: "4.239",       en: "4,239" },
    likes:     { nl: "33,6K",       en: "33.6K" },
    topViews:  { nl: "184K",        en: "184K" }
  },

  /* --- 6. TikTok-video's ------------------------------------
     Video toevoegen: kopieer een regel en plak het nummer uit de
     TikTok-link (…/video/DIT_NUMMER) bij id.                    */
  videos: [
    { id: "7696551344705899809", views: { nl: "184K",  en: "184K"  },
      nl: "Een dagje met klusjes",            en: "A day of van chores" },
    { id: "7699129890343243040", views: { nl: "46K",   en: "46K"   },
      nl: "Kusthike naar een verborgen baai", en: "Coastal hike to a hidden bay" },
    { id: "7703204911265205536", views: { nl: "11,8K", en: "11.8K" },
      nl: "Walstroom testen",                 en: "Testing shore power" },
    { id: "7699842492828486944", views: { nl: "11,6K", en: "11.6K" },
      nl: "Regenachtige vanlife-dag",         en: "A rainy vanlife day" }
  ],

  /* --- 7. Instagram-posts -----------------------------------
     Plak hier 3 tot 6 links van je eigen posts of reels, bijv.
     "https://www.instagram.com/p/ABC123/",
     Laat je de lijst leeg, dan toont de site nette lege plekken. */
  instagramPosts: [
  ]
};
