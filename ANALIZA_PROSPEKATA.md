# Analiza prospekata — Osijek (stomatolozi)

> Materijal za cold outreach. Svaka sekcija ima: **demo link**, **provjerene slabosti**
> (sigurno za spomenuti), **provjeri prije spominjanja** (WebFetch nije pouzdan za ovo —
> otvori sam na mobitelu / kroz PageSpeed prije nego tvrdiš), i **pitch** (1–2 rečenice
> spremne za poruku).
>
> Zlatno pravilo: **ne nabrajaj im sve mane** u prvoj poruci — to vrijeđa. Spomeni
> 1 konkretnu stvar + pokaži demo. Ostatak analize je tvoja municija za razgovor.
>
> Brzina/težina stranice izmjerena `curl`-om (veličina HTML-a + vrijeme odgovora);
> za pravi "mobile score" pusti https://pagespeed.web.dev prije sastanka.

---

## 1. Smile Design Kovač
- **Web:** https://smiledesign-kovac.hr/
- **Demo:** `/demo/smile-design-kovac`
- **Dr.:** Željko Kovač · Šamačka 1, Osijek · +385 99 242 5261

**Provjereno (sigurno):**
- Stranica je tehnički OK — HTTPS ✓, ima `<title>` i meta description ✓, brza (HTML ~100 KB, odgovor ~0.09 s), responsive meta ✓.
- **Cjenik nije na naslovnici** — pacijent mora tražiti zasebnu "Cjenik" stranicu (transparentnost cijena = manje upita "koliko košta?").

**Provjeri prije spominjanja:**
- WebFetch je vidio dosta placeholder/lazy slika — *vjerojatno samo lazy-loading*, NE tvrdi da su slike loše dok ne pogledaš sam.
- Vizualni dojam ("zastarjelo") — subjektivno, otvori i procijeni.

**Pitch:** "Stranica vam dobro stoji tehnički, ali se cjenik i poziv na akciju gube — napravio sam prijedlog gdje pacijent u 3 sekunde vidi uslugu, cijenu i gumb 'Naruči se'."

---

## 2. Dentalni implantološki centar Osijek
- **Web:** https://implantati-osijek.eu/
- **Demo:** `/demo/implantati-osijek`
- **Tim:** dr. Saša Đukić, dr. Lorena Horvat, dr. Nikola Joakim Đitko · Ul. Otokara Keršovanija 10A · +385 31 495 025

**Provjereno (sigurno) — najslabiji od trojice za SEO:**
- **Nema meta description** — Google sam izvlači nasumičan tekst za rezultat pretrage (slabiji klik). Konkretna, dokaziva mana.
- **`<title>` je samo "Dentalni Implantološki centar Osijek – Početna"** — riječ "Početna" je bezvrijedna; nedostaju ključne riječi (implantati, zubar Osijek) za koje ih ljudi traže.
- **Radno vrijeme nije nigdje navedeno** — pacijent ne zna kad zvati (ostavljeno kao `___` u demo podacima).
- HTML ~174 KB (teže od konkurencije Kovač).

**Provjeri prije spominjanja:**
- Dizajn izgleda moderno (i WebFetch to potvrđuje) — NE napadaj izgled, fokus na SEO i radno vrijeme.
- Brzina — izmjeri PageSpeed (više slika = potencijalno sporo na mobitelu).

**Pitch:** "Imate odličan tim i recenzije 4.7, ali vas Google slabo prikazuje — fali meta opis i ključne riječi u naslovu, a radno vrijeme se uopće ne vidi. To su brze pobjede; pokazao sam na prijedlogu kako bi izgledalo."

---

## 3. Dental Centar Pollak
- **Web:** https://dental-pollak.hr/
- **Demo:** `/demo/dental-pollak`
- **Dr.:** Darko Pollak (specijalist ortodoncije) · Vukovarska 4a · +385 31 210 033

**Provjereno (sigurno):**
- SEO osnove postoje — `<title>` i meta description ✓ (bolje od Implantata).
- **Najteža i najsporija stranica od trojice** — HTML ~267 KB, odgovor ~1.0 s (Kovač 0.09 s, Implantati 0.06 s). Na mobilnoj mreži to se osjeti. Najjači argument ovdje.
- Cjenik link postoji ali **bez stvarnih cijena**.
- Ima dobre stvari (gumb "Naruči se", telefon u headeru, parking info, blog) — pošteno priznaj to.

**Provjeri prije spominjanja:**
- Placeholder slike tima — WebFetch javlja, ali provjeri (može biti lazy-load).
- Email nije bio čitljiv → u demo podacima je `info@dental-pollak.hr` kao pretpostavka — **provjeri prije slanja**.

**Pitch:** "Sadržajno ste najjači — blog, narudžba, parking. Ali stranica je teška i sporo se učita na mobitelu (gdje je većina pacijenata), pa se taj trud gubi. Prijedlog koji sam složio drži isti sadržaj, ali se otvara odmah."

---

## Sažetak — koji kut za koga
| Ordinacija | Glavna poluga u razgovoru |
|---|---|
| Smile Design Kovač | Cjenik/CTA skriveni — bolja konverzija posjetitelja |
| Implantati Osijek | SEO (nema meta opisa, slab title) + nema radnog vremena |
| Dental Pollak | Najsporija/najteža stranica — gubitak na mobitelu |

## ⚠️ Prije slanja provjeri ručno
- **Implantati:** radno vrijeme (`___` u clients.js).
- **Pollak:** email (pretpostavljen) — potvrdi pravi.
- Sve tri: brzo otvori demo na **svom mobitelu** da vidiš da izgleda ok.
- Pusti svaku stranicu kroz https://pagespeed.web.dev za tvrde brojke ako želiš jak argument.
