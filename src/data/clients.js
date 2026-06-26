/* ─────────────────────────────────────────────────────────────────────────
   PERSONALIZACIJA PO KLIJENTU

   Svaki klijent dobije svoj link: /demo/<slug>  (slug = ključ u CLIENTS objektu)
   Npr. "smile-design-kovac" → tvoj-site.vercel.app/demo/smile-design-kovac

   U svakom unosu navedeš SAMO ono što se razlikuje od DEFAULT_CLIENT-a.
   Sve ostalo (usluge, galerija, recenzije...) ostaje generičko i izgleda dobro.
   ───────────────────────────────────────────────────────────────────────── */

export const DEFAULT_CLIENT = {
  slug: 'dentart',
  name: 'DentArt',
  logoSub: 'Premium Studio',
  city: 'Zagreb',
  // Hero
  heroBadge: 'Osijek · Otvoreno 6 dana tjedno',
  // O nama
  doctor: 'Dr. Ana Kovač',
  yearsTag: '15+',
  yearsLabel: 'Godina iskustva',
  photo: 'https://images.pexels.com/photos/17792882/pexels-photo-17792882.jpeg?auto=compress&cs=tinysrgb&w=800',
  bio: [
    'S više od 15 godina iskustva u estetskoj i rekonstruktivnoj stomatologiji, dr. Ana Kovač vodi DentArt Studio s misijom pružanja personalizirane skrbi svakome tko nam pokloni povjerenje.',
    'Obrazovana na Stomatološkom fakultetu u Zagrebu i usavršena u Beču i Parizu, redovito pohađa međunarodne kongrese te uvodi najsuvremenije metode u svoju praksu.',
  ],
  // Kontakt + footer
  contact: {
    address: 'Ilica 45, 10000 Zagreb',
    phone: '+385 1 234 5678',
    phoneHref: '+38512345678',
    email: 'info@dentart.hr',
    hours: 'Pon–Sub: 8:00 – 20:00',
  },
}

export const CLIENTS = {
  // ───────── KLIJENT 1 — Smile Design Kovač ─────────
  // Izvor: https://smiledesign-kovac.hr/   → /demo/smile-design-kovac
  'smile-design-kovac': {
    name: 'Smile Design Kovač',
    logoSub: 'Stomatološka ordinacija',
    city: 'Osijek',
    heroBadge: 'Osijek · Više od 5.000 zadovoljnih pacijenata',
    doctor: 'dr. med. dent. Željko Kovač',
    yearsTag: '5000+',
    yearsLabel: 'Zadovoljnih pacijenata',
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
  'implantati-osijek': {
    name: 'Dentalni implantološki centar Osijek',
    logoSub: 'Implantologija i estetska stomatologija',
    city: 'Osijek',
    heroBadge: 'Osijek · Ocjena 4.7 ★ · Tim specijalista',
    doctor: 'Dr. Saša Đukić',
    yearsTag: '3000+',
    yearsLabel: 'Zadovoljnih pacijenata',
    bio: [
      'Tim Dentalnog implantološkog centra Osijek čine iskusni i profesionalni stručnjaci — dr. Saša Đukić, dr. Lorena Horvat i dr. Nikola Joakim Đitko — koji kontinuirano usavršavaju svoje znanje.',
      'Specijalizirani za implantologiju i estetsku stomatologiju, centar pruža cjelovitu skrb uz vrhunsku opremu i prosječnu ocjenu 4.7 zvjezdica zadovoljnih pacijenata.',
    ],
    contact: {
      address: 'Ul. Otokara Keršovanija 10A, 31000 Osijek',
      phone: '+385 31 495 025',
      phoneHref: '+38531495025',
      email: 'info@implantati-osijek.eu',
      hours: 'Radno vrijeme: ___', // nije navedeno na njihovoj stranici — provjeri
    },
  },

  // ───────── KLIJENT 3 — Dental Centar Pollak ─────────
  // Izvor: https://dental-pollak.hr/   → /demo/dental-pollak
  'dental-pollak': {
    name: 'Dental Centar Pollak',
    logoSub: 'Ortodoncija i estetska stomatologija',
    city: 'Osijek',
    heroBadge: 'Osijek · Specijalist ortodoncije',
    doctor: 'Dr. Darko Pollak',
    yearsTag: '20+',
    yearsLabel: 'Godina iskustva',
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
    city: 'Osijek',
    heroBadge: 'Osijek · Vaš osmijeh u sigurnim rukama',
    doctor: 'dr. med. dent. Andrea Malogorski Šimašek',
    // ženska doktorica → ženska fotografija (muška default ne odgovara)
    photo: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=800',
    yearsTag: '15+',
    yearsLabel: 'Godina iskustva',
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
    heroBadge: 'Đakovo · Implantati i estetska stomatologija',
    doctor: 'dr. med. dent. Ines Baždar Spajić',
    photo: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=800',
    yearsTag: '15+',
    yearsLabel: 'Godina iskustva',
    bio: [
      'Privatnu ordinaciju dentalne medicine u Đakovu vodi dr. med. dent. Ines Baždar Spajić, uz najsuvremenije tehnologije i materijale te individualan pristup svakom pacijentu.',
      'Ordinacija pokriva opću i estetsku stomatologiju te implantologiju, a uz brzu i jednostavnu ortopan snimku sve je na jednom mjestu — bez nepotrebnog čekanja i putovanja.',
    ],
    contact: {
      address: 'Ante Starčevića 8, 31400 Đakovo',
      phone: '+385 31 300 221', // s javnih imenika — provjeri
      phoneHref: '+38531300221',
      email: 'ordinacija_bazdar@yahoo.com',
      hours: 'Radno vrijeme: ___', // nije javno navedeno — provjeri
    },
  },

  // ───────── KLIJENT 6 — Ivan Francem (Đakovo) ─────────
  // Izvor: podaci klijenta + croatia-dental.eu + javni imenici → /demo/ivan-francem
  'ivan-francem': {
    name: 'Ordinacija dentalne medicine Ivan Francem',
    logoSub: 'Dentalna medicina · Đakovo',
    city: 'Đakovo',
    heroBadge: 'Đakovo · Cjelovita dentalna skrb na jednom mjestu',
    doctor: 'dr. med. dent. Ivan Francem',
    yearsTag: '15+',
    yearsLabel: 'Godina iskustva',
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

/* Vrati podatke klijenta po slugu, popunjene defaultima za sve što nije navedeno. */
export function getClient(slug) {
  const c = slug && CLIENTS[slug]
  if (!c) return DEFAULT_CLIENT
  return {
    ...DEFAULT_CLIENT,
    ...c,
    slug,
    contact: { ...DEFAULT_CLIENT.contact, ...(c.contact || {}) },
  }
}
