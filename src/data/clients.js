/* ─────────────────────────────────────────────────────────────────────────
   PERSONALIZACIJA PO KLIJENTU

   Svaki klijent dobije svoj link: /demo/<slug>  (slug = ključ u CLIENTS objektu)
   Npr. "smile-design-kovac" → tvoj-site.vercel.app/demo/smile-design-kovac

   U svakom unosu navedeš SAMO ono što se razlikuje od BASE podataka.
   Sve ostalo (usluge, galerija, recenzije...) ostaje generičko i izgleda dobro.

   Važno za usklađenost teksta i slika:
   - gender: 'm' | 'f'  → bira fotografiju voditelja/ice i rod u tekstu
     ("Voditelj/Voditeljica ordinacije"). Vlastitu fotku postavi poljem `photo`.
   - cityIn / cityOf    → grad u padežima: "u Osijeku" / "iz Osijeka".
   - patients / years   → brojke u heroju, "O nama" i statistici (uvijek iste).
     highlight: 'years' | 'patients' → koja se od njih ističe u heroju.
   - team               → ostali članovi tima (umjesto generičkih placeholdera).
   ───────────────────────────────────────────────────────────────────────── */

import { pexels } from '../lib/img.js'

/* Stock fotografije provjerene da odgovaraju spolu i da na odjeći nema tuđeg imena/loga. */
const DOCTOR_PHOTOS = { m: pexels(6812464), f: pexels(5355864) }
const TEAM_PHOTOS = { m: pexels(6627836), f: pexels(19332236) }

const BASE = {
  name: 'DentArt',
  logoSub: 'Premium Studio',
  city: 'Osijek',
  cityIn: 'Osijeku',
  cityOf: 'Osijeka',
  // Hero
  heroBadge: 'Osijek · Otvoreno 6 dana tjedno',
  // Brojke (hero, "O nama", statistika, Google značka)
  patients: 2500,
  years: 15,
  highlight: 'years',
  rating: 4.9,
  reviewCount: 120,
  // O nama
  doctor: 'dr. med. dent. Marko Vuković',
  gender: 'm',
  bio: [
    'S više od 15 godina iskustva u estetskoj i rekonstruktivnoj stomatologiji, dr. Marko Vuković vodi DentArt Studio s misijom pružanja personalizirane skrbi svakome tko nam pokloni povjerenje.',
    'Diplomirao je na Stomatološkom fakultetu u Zagrebu, a usavršavao se u Beču i Parizu. Redovito pohađa međunarodne kongrese i u praksu uvodi najsuvremenije metode.',
  ],
  // Ostatak tima — generički placeholderi (zamijeni stvarnim timom po klijentu)
  team: [
    {
      name: 'dr. med. dent. Iva Marić',
      gender: 'f',
      role: 'Implantologija',
      detail: 'Usmjerena na zubne implantate i oralnu kirurgiju, uz naglasak na nježne i bezbolne tehnike.',
    },
    {
      name: 'dr. med. dent. Luka Novak',
      gender: 'm',
      role: 'Ortodoncija',
      detail: 'Invisalign i fiksni aparati — ravnanje zuba prilagođeno svakom pacijentu i njegovom ritmu života.',
    },
  ],
  // Kontakt + footer
  contact: {
    address: 'Kapucinska 20, 31000 Osijek',
    phone: '+385 31 123 456',
    phoneHref: '+38531123456',
    email: 'info@dentart.hr',
    hours: 'Pon–Sub: 8:00–20:00',
  },
}

export const CLIENTS = {
  // ───────── KLIJENT 1 — Smile Design Kovač ─────────
  // Izvor: https://smiledesign-kovac.hr/   → /demo/smile-design-kovac
  'smile-design-kovac': {
    name: 'Smile Design Kovač',
    logoSub: 'Stomatološka ordinacija',
    heroBadge: 'Osijek · Estetska stomatologija i implantologija',
    doctor: 'dr. med. dent. Željko Kovač',
    gender: 'm',
    patients: 5000,
    highlight: 'patients',
    bio: [
      'Stomatološku ordinaciju Smile Design Kovač u Osijeku vodi dr. med. dent. Željko Kovač, spajajući inspiraciju, strast i individualan pristup svakom pacijentu.',
      'Uz modernu opremu i minimalno invazivan pristup, ordinacija pokriva sve — od estetske stomatologije i implantologije do dječje stomatologije — s više od 5.000 zadovoljnih pacijenata.',
    ],
    contact: {
      address: 'Šamačka 1, 31000 Osijek',
      phone: '+385 99 242 5261',
      phoneHref: '+385992425261',
      email: 'kontakt@smiledesign-kovac.hr',
      hours: 'Pon, Sri, Čet: 13:00–20:30 · Uto, Pet: 7:00–14:30',
    },
  },

  // ───────── KLIJENT 2 — Dentalni implantološki centar Osijek ─────────
  // Izvor: https://implantati-osijek.eu/   → /demo/implantati-osijek
  // Dr. Đukić je muškarac ("Tim s njim na čelu" na njihovoj stranici).
  'implantati-osijek': {
    name: 'Dentalni implantološki centar Osijek',
    logoSub: 'Implantologija i estetska stomatologija',
    heroBadge: 'Osijek · Iskusan tim stručnjaka',
    doctor: 'dr. med. dent. Saša Đukić',
    gender: 'm',
    leadRole: 'Voditelj centra',
    patients: 3000,
    highlight: 'patients',
    rating: 4.7,
    bio: [
      'Tim Dentalnog implantološkog centra Osijek čine iskusni i profesionalni stručnjaci — dr. Saša Đukić, dr. Lorena Horvat i dr. Nikola Joakim Đitko — koji kontinuirano usavršavaju svoje znanje.',
      'Specijaliziran za implantologiju i estetsku stomatologiju, centar pruža cjelovitu skrb uz vrhunsku opremu, a pacijenti ga u prosjeku ocjenjuju s 4,7 zvjezdica.',
    ],
    // stvarni tim s njihove stranice (uloge nisu navedene — provjeri)
    team: [
      {
        name: 'dr. med. dent. Lorena Horvat',
        gender: 'f',
        role: 'Doktorica dentalne medicine',
        detail: 'Implantologija i estetska stomatologija, uz individualan pristup svakom pacijentu.',
      },
      {
        name: 'dr. med. dent. Nikola Joakim Đitko',
        gender: 'm',
        role: 'Doktor dentalne medicine',
        detail: 'Moderna dentalna medicina — od preventive do složenih protetskih rješenja.',
      },
    ],
    contact: {
      address: 'Ul. Otokara Keršovanija 10A, 31000 Osijek',
      phone: '+385 31 495 025',
      phoneHref: '+38531495025',
      email: 'info@implantati-osijek.eu',
      hours: 'Pon, Sri, Pet: 7:00–14:30 · Uto, Čet: 13:00–20:30', // s mojausluga.hr — provjeri
    },
  },

  // ───────── KLIJENT 3 — Dental Centar Pollak ─────────
  // Izvor: https://dental-pollak.hr/   → /demo/dental-pollak
  'dental-pollak': {
    name: 'Dental Centar Pollak',
    logoSub: 'Ortodoncija i estetska stomatologija',
    heroBadge: 'Osijek · Specijalist ortodoncije',
    doctor: 'dr. med. dent. Darko Pollak',
    gender: 'm',
    leadRole: 'Specijalist ortodoncije',
    leadDetail: 'Ravni zubi i skladan zagriz uz dugogodišnje iskustvo i najmoderniju tehnologiju.',
    years: 20,
    bio: [
      'Dental Centar Pollak u Osijeku vodi dr. Darko Pollak, specijalist ortodoncije, spajajući dugogodišnje iskustvo, vrhunsku stručnost i najmoderniju tehnologiju.',
      'Od implantologije i estetske stomatologije do redovite skrbi — centar je posvećen bezbolnoj terapiji i izvrsnim rezultatima za svakog pacijenta.',
    ],
    contact: {
      address: 'Vukovarska 4a, 31000 Osijek',
      phone: '+385 31 210 033',
      phoneHref: '+38531210033',
      email: 'info@dental-pollak.hr', // nije bio čitljiv na stranici — provjeri
      hours: 'Pon, Sri: 14:00–20:00 · Uto, Čet, Pet: 8:00–15:00 · ostalo po dogovoru',
    },
  },

  // ───────── KLIJENT 4 — Andrea Malogorski Šimašek (Osijek) ─────────
  // Izvor: facebook.com/dental.malogorski + javni imenici → /demo/dental-malogorski
  'dental-malogorski': {
    name: 'Ordinacija dentalne medicine Andrea Malogorski Šimašek',
    logoSub: 'Dentalna medicina',
    heroBadge: 'Osijek · Vaš osmijeh u sigurnim rukama',
    doctor: 'dr. med. dent. Andrea Malogorski Šimašek',
    gender: 'f',
    bio: [
      'Ordinaciju dentalne medicine u Osijeku vodi dr. med. dent. Andrea Malogorski Šimašek, posvećena pažljivom i individualnom pristupu svakom pacijentu.',
      'Od redovite preventive i restaurativne stomatologije do estetskih zahvata — cilj je zdrav, prirodan i samouvjeren osmijeh u ugodnoj i opuštenoj atmosferi.',
    ],
    contact: {
      address: 'Park kralja Petra Krešimira IV 6, 31000 Osijek',
      phone: '+385 31 225 335', // s javnih imenika — provjeri
      phoneHref: '+38531225335',
      email: 'ordinacija.malogorski@gmail.com', // s weba — provjeri
      hours: 'Pon, Sri: 13:00–19:30 · Uto, Čet, Pet: 7:00–13:00',
    },
  },

  // ───────── KLIJENT 5 — Ines Baždar Spajić (Đakovo) ─────────
  // Izvor: podaci klijenta + javni imenici → /demo/bazdar-spajic
  'bazdar-spajic': {
    name: 'Privatna ordinacija dentalne medicine Ines Baždar Spajić',
    logoSub: 'Implantologija i estetska stomatologija',
    city: 'Đakovo',
    cityIn: 'Đakovu',
    cityOf: 'Đakova',
    heroBadge: 'Đakovo · Implantati i estetska stomatologija',
    doctor: 'dr. med. dent. Ines Baždar Spajić',
    gender: 'f',
    bio: [
      'Privatnu ordinaciju dentalne medicine u Đakovu vodi dr. med. dent. Ines Baždar Spajić, uz najsuvremenije tehnologije i materijale te individualan pristup svakom pacijentu.',
      'Ordinacija pokriva opću i estetsku stomatologiju te implantologiju, a uz brzu i jednostavnu ortopan snimku sve je na jednom mjestu — bez nepotrebnog čekanja i putovanja.',
    ],
    contact: {
      address: 'Ante Starčevića 8, 31400 Đakovo',
      phone: '+385 31 300 221', // s javnih imenika — provjeri
      phoneHref: '+38531300221',
      email: 'ordinacija_bazdar@yahoo.com',
      hours: 'Termini po dogovoru · nazovite nas', // pravo radno vrijeme nije javno — provjeri
    },
  },

  // ───────── KLIJENT 6 — Ivan Francem (Đakovo) ─────────
  // Izvor: podaci klijenta + croatia-dental.eu + javni imenici → /demo/ivan-francem
  'ivan-francem': {
    name: 'Ordinacija dentalne medicine Ivan Francem',
    logoSub: 'Dentalna medicina · Đakovo',
    city: 'Đakovo',
    cityIn: 'Đakovu',
    cityOf: 'Đakova',
    heroBadge: 'Đakovo · Cjelovita dentalna skrb na jednom mjestu',
    doctor: 'dr. med. dent. Ivan Francem',
    gender: 'm',
    bio: [
      'Ordinaciju dentalne medicine u srcu Đakova vodi dr. med. dent. Ivan Francem, pružajući visokokvalitetnu dentalnu skrb uz individualan pristup svakom pacijentu.',
      'Od protetike, ortodoncije i parodontologije do endodoncije, oralne kirurgije i estetskih zahvata (bijeljenje, pjeskarenje) — sve usluge dostupne su na jednom mjestu.',
    ],
    contact: {
      address: 'Ulica bana Jelačića 26a, 31400 Đakovo',
      phone: '+385 31 821 554', // s weba — provjeri
      phoneHref: '+38531821554',
      email: 'ivan@croatia-dental.eu',
      hours: 'Pon, Čet: 13:00–20:30 · Uto, Sri, Pet: 7:00–14:30',
    },
  },
}

/* Popuni fotografije prema spolu (ako nisu zadane ručno) — ime i slika uvijek se slažu. */
function finalize(c) {
  return {
    ...c,
    photo: c.photo || DOCTOR_PHOTOS[c.gender] || DOCTOR_PHOTOS.m,
    team: c.team.map((m) => ({ ...m, photo: m.photo || TEAM_PHOTOS[m.gender] || TEAM_PHOTOS.m })),
  }
}

export const DEFAULT_CLIENT = finalize({ ...BASE, slug: 'dentart' })

/* Vrati podatke klijenta po slugu, popunjene defaultima za sve što nije navedeno. */
export function getClient(slug) {
  const c = slug && CLIENTS[slug]
  if (!c) return DEFAULT_CLIENT
  return finalize({
    ...BASE,
    ...c,
    slug,
    contact: { ...BASE.contact, ...(c.contact || {}) },
  })
}
