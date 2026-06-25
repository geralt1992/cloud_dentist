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
index.html               Vite entry (fontovi + #root)
src/
  main.jsx               renderira aplikaciju + router
  App.jsx                rute: / (početna) i /cijenik
  styles/global.css      svi stilovi (varijable boja na vrhu u :root)
  components/            dijeljene komponente (Navbar, Footer, FadeUp, ...)
    HeroCanvas.jsx       3D animacija na početnoj (three.js)
    PricingHeroCanvas.jsx 3D čestice na cjeniku
    ScrollToHash.jsx     glatko skrolanje na #sekciju kod navigacije
  sections/              sekcije početne stranice (Hero, Stats, Services, ...)
    cijenik/             komponente stranice cjenika
  data/
    pricing.js           SVI podaci o cijenama, paketima i FAQ-u
```

## Gdje što mijenjati

- **Cijene / paketi / FAQ** → `src/data/pricing.js`
- **Usluge, recenzije, galerija, kontakt** → podaci su na vrhu pripadajuće
  komponente u `src/sections/`
- **Boje i tipografija** → CSS varijable u `:root` na vrhu `src/styles/global.css`
- **Navigacija / linkovi** → `src/components/Navbar.jsx`
