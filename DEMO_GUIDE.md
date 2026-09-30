# Vodič: personalizirani demo za cold outreach

Cilj: svakom prospektu poslati **gotov demo s njegovim imenom** na zasebnom linku.

## Kako radi

Jedan deploy poslužuje sve klijente. Svaki ima svoj link:

```
tvoj-site.vercel.app/demo/dr-maric
tvoj-site.vercel.app/demo/dr-horvat
tvoj-site.vercel.app/demo/poliklinika-osijek
```

Ništa se ne pregazi — dodavanje novog klijenta ne dira postojeće.
`tvoj-site.vercel.app/` ostaje neutralni DentArt predložak (bez demo trake).

## Što trebaš napraviti (10–15 min)

### 1. Upiši svoje podatke
`src/data/agency.js` → ime obrta, telefon, email (ide u traku na dnu demoa).

### 2. Upiši podatke 3 ordinacije
`src/data/clients.js` → za svaki unos zamijeni `___` pravim podacima koje nađeš
na netu (ime ordinacije, doktor, adresa, telefon, radno vrijeme).

Slug (ključ, npr. `dr-maric`) postaje dio linka. Promijeni ga u nešto čisto.

Polja o kojima ovisi usklađenost teksta i slika:

| Polje | Primjer | Što radi |
|---|---|---|
| `gender` | `'f'` ili `'m'` | **Obavezno.** Bira fotografiju (doktorica/doktor) i rod u tekstu ("Voditeljica/Voditelj ordinacije"). |
| `city`, `cityIn`, `cityOf` | `'Đakovo'`, `'Đakovu'`, `'Đakova'` | Grad u padežima ("u Đakovu"). Za Osijek ne treba ništa. |
| `patients`, `years` | `5000`, `20` | Brojke u heroju, "O nama" i statistici — uvijek iste na cijeloj stranici. |
| `highlight` | `'patients'` | Koja se brojka ističe u heroju (default: godine iskustva). |
| `rating`, `reviewCount` | `4.7`, `85` | Google ocjena (broj, ne tekst) — prikazuje se kao "4,7". |
| `team` | vidi `implantati-osijek` | Pravi članovi tima umjesto generičkih (svaki s `gender`). |
| `leadRole`, `leadDetail` | `'Specijalist ortodoncije'` | Uloga i opis voditelja u sekciji "Naš tim". |

Pregled linka (WhatsApp, e-mail) automatski pokazuje ime ordinacije — build za
svaki demo napravi `dist/demo/<slug>.html` s njihovim naslovom (vidi `vite.config.js`).

> Savjet: realnije izgleda ako za svaku ordinaciju ubaciš pravu fotografiju
> (polje `photo`) — npr. fasada ordinacije ili doktora s njihovog Facebooka/Googlea.
> Ako u `team` imaš dvije osobe istog spola, drugoj zadaj vlastiti `photo`
> (inače obje dobiju istu stock fotografiju).

### 3. Lokalno provjeri
```bash
npm run dev
```
Otvori `http://localhost:5173/demo/dr-maric` i pogledaj izgleda li dobro.

### 4. Deploy na Vercel
Pošto je auto-deploy već spojen na git:
```bash
git add -A
git commit -m "Dodani personalizirani demoi za osječke ordinacije"
git push
```
Vercel sam zbuilda i za par minuta su linkovi živi.

## Poruka za slanje (email / Instagram DM)

> **Predmet:** Mali poklon za [Ime ordinacije] 🦷
>
> Poštovani,
>
> Zovem se [tvoje ime], izrađujem web stranice za stomatološke ordinacije.
> Primijetio sam da [Ime ordinacije] ima sjajne recenzije, ali da web stranica
> ne odražava tu kvalitetu — pa sam vam, bez ikakve obaveze, već **izradio
> prijedlog** kako bi mogla izgledati:
>
> 👉 tvoj-site.vercel.app/demo/dr-maric
>
> Sve na njoj (ime, tekstovi) možemo prilagoditi. Ako vam se svidi, rado
> objasnim detalje — ako ne, slobodno zanemarite, demo je vaš za pogledati.
>
> Lijep pozdrav,
> [tvoje ime] · [telefon]

### Zašto ovo konvertira
- Već si **uložio trud** → reciprocitet, teže ignorirati.
- Vide **sebe** na lijepoj stranici → ne moraju ništa zamišljati.
- Nulti rizik za njih → "bez obaveze, demo je vaš".

## Mali etički/pravni savjet
- Stavi jasnu oznaku da je **demo prijedlog** (već je u traci na dnu) — da ne
  izgleda kao da si im "preuzeo" stranicu.
- Ne kopiraj njihov logo/zaštićene fotografije; koristi ime tvrtke (javni podatak)
  i neutralne/stock fotografije dok ne dobiješ pristanak.
- Ako traže da maknеš demo — makni unos iz `clients.js` i pushaj.
