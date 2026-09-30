# DentArt Studio

Premium web stranica stomatološke ordinacije — sada kao pravi **React + Vite** projekt
(prije je sve bilo u jednom `index.html` preko in-browser Babela).

## Pokretanje

```bash
npm install      # instalacija (jednom)
npm run dev      # razvojni server na http://localhost:5173
npm run build    # produkcijski build u dist/
npm run preview  # pregled produkcijskog builda
```

## Struktura

```
index.html               Vite entry (meta/OG, favicon, fontovi, predučitavanje hero slike)
vite.config.js           + generira dist/demo/<slug>.html (naslov za pregled linka)
src/
  main.jsx               renderira aplikaciju + router
  App.jsx                rute: / (početna), /cijenik (lazy) i /demo/:slug
  styles/global.css      svi stilovi (varijable boja na vrhu u :root)
  styles/enhance.css     "wow" dodaci (kursor, zrno, tim, prije/poslije...)
  components/            dijeljene komponente (Navbar, Footer, FadeUp, Img, ...)
    Img.jsx              <img> sa srcset-om za Pexels slike (mobitel skida manju)
    PricingHeroCanvas.jsx 3D čestice na cjeniku (three.js, učitava se tek na /cijenik)
    ScrollToHash.jsx     glatko skrolanje na #sekciju kod navigacije
  sections/              sekcije početne stranice (Hero, Stats, Services, ...)
    cijenik/             komponente stranice cjenika
  lib/                   format.js (hrv. brojevi/datumi), img.js (Pexels URL-ovi)
  data/
    clients.js           default podaci + personalizirani demo klijenti
    pricing.js           SVI podaci o cijenama, paketima i FAQ-u
```

## Gdje što mijenjati

- **Doktor, kontakt, brojke, tim (po klijentu)** → `src/data/clients.js`
  (vidi tablicu polja u `DEMO_GUIDE.md`)
- **Cijene / paketi / FAQ** → `src/data/pricing.js` — paketi se prikazuju i na naslovnici
- **Usluge, recenzije, galerija** → podaci su na vrhu pripadajuće
  komponente u `src/sections/`
- **Boje i tipografija** → CSS varijable u `:root` na vrhu `src/styles/global.css`
- **Navigacija / linkovi** → `src/components/Navbar.jsx`
