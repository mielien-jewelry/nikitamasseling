# nikitamasseling — persoonlijke site

Statische site: geen build-stap, geen dependencies. Open `index.html` of zet de map online.

| Bestand | Wat staat erin |
|---|---|
| `config.js` | **Alles wat je invult**: e-mail, Ko-fi, Instagram-naam, statistieken, video's, posts, design |
| `index.html` | Alle teksten (Nederlands en Engels staan steeds onder elkaar) |
| `styles.css` | Kleuren en vormgeving (kleuren staan bovenaan) |
| `assets/` | Foto's, favicon, deelafbeelding, fonts |

## Nog invullen

In `config.js`:

- `email` — nu `EMAIL`
- `kofiUrl` — nu `KOFI_URL`
- `instagramHandle` — nu `JOUW_IG_NAAM`
- `instagramPosts` — 3 tot 6 links naar eigen posts

In `assets/` (zelfde bestandsnaam houden, dan hoef je niets anders te doen):

- `hero.jpg` — liggend, minimaal 2000 px breed
- `about.jpg` — staand (4:5), jij en Bailey
- `moai.jpg` — staand (4:5), jij op je sup
- `og.jpg` — 1200 × 630 px, de afbeelding die je ziet als de link gedeeld wordt

Nakijken in `index.html`:

- Het "Over mij"-verhaal: klopt elk detail?
- De doelgroep in de mediakit: vul aan met echte cijfers uit TikTok Analytics (leeftijd, land, man/vrouw). Merken vragen daarom.
- `og:image` moet een volledige URL zijn zodra je domein vaststaat, bijv. `https://nikitamasseling.com/assets/og.jpg`.

## Video toevoegen

1. Open de video op TikTok en kopieer de link. Het lange nummer aan het eind is het id.
2. Kopieer in `config.js` een regel onder `videos` en vervang `id`, `views` en de twee titels.

## Instagram-post toevoegen

Plak de link van de post in `instagramPosts` in `config.js`:

```js
instagramPosts: [
  "https://www.instagram.com/p/ABC123/",
  "https://www.instagram.com/reel/XYZ789/"
]
```

## Design wisselen

Zet `design` in `config.js` op `"editorial"`, `"kust"`, `"zonsondergang"` of `"zee"`.
Snel bekijken zonder iets te wijzigen: zet `?design=kust` achter het adres.

## Een feed die zichzelf bijwerkt (optioneel)

Prijzen zijn een indicatie, controleer ze voor je iets afsluit.

| Optie | Kosten | Moeite | Let op |
|---|---|---|---|
| Handmatig (nu) | Gratis | 1 minuut per post | Geen cookies tot iemand tikt |
| Behold | Gratis voor 1 kleine feed, daarna circa $6–$12 per maand | Laag | Slaat je foto's op bij Behold; je hebt een creator- of bedrijfsaccount nodig |
| Elfsight / LightWidget | Gratis proefversie, daarna circa $5–$10 per maand of eenmalig | Laag | Laadt scripts van derden, dus mogelijk wél een cookiemelding nodig |
| Instagram API (Meta) | Gratis | Hoog | Meta-ontwikkelaarsaccount, token verloopt elke 60 dagen, je hebt een klein servertje nodig |

Mijn advies: blijf handmatig tot je merkt dat het je stoort. Daarna Behold.

## Eigen domein koppelen (bijv. nikitamasseling.com)

1. Koop het domein (circa €10–€15 per jaar), bijvoorbeeld bij TransIP, Cloudflare of Namecheap.
2. GitHub: repo → Settings → Pages → Custom domain → vul `nikitamasseling.com` in → Save.
3. Bij je domeinaanbieder, onder DNS:
   - vier `A`-records voor `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - één `CNAME`-record voor `www` naar `JOUW-GITHUB-NAAM.github.io`
4. Wacht tot GitHub "DNS check successful" toont (soms een uur) en vink **Enforce HTTPS** aan.
5. Pas `og:image` in `index.html` aan naar het nieuwe adres.

## Privacy

- Geen cookies, geen tracking, geen externe fonts.
- TikTok en Instagram laden pas na een tik op de video of post.
- De taalkeuze wordt alleen in de browser van de bezoeker onthouden.
- De site noemt alleen "Spanje", nooit een plaats. Houd dat ook zo in titels van video's.
