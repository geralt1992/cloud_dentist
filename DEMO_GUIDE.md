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

> Savjet: realnije izgleda ako za svaku ordinaciju ubaciš pravu fotografiju
> (polje `photo`) — npr. fasada ordinacije ili doktora s njihovog Facebooka/Googlea.

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
