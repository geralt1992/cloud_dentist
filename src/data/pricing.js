/* Sve cijene su okvirne — uredi ovdje da promijeniš cjenik na stranici /cijenik.
   PACKAGES se prikazuju i na naslovnici (sekcija "Cjenik"), pa su nazivi i cijene uvijek isti. */
import { fmtNum } from '../lib/format.js'

// 8000 → "8.000 €" (nedjeljivi razmak da se € ne odvoji u novi red)
const eur = (n) => `${fmtNum(n)} €`

export const TABS = [
  'Pregled & Prevencija',
  'Estetika',
  'Implantati',
  'Ortodoncija',
  'Kirurgija',
  'Protetika',
  'Paketi',
]

/* Indeks u nizu odgovara indeksu taba (zadnji tab "Paketi" se renderira posebno => null). */
export const PRICE_DATA = [
  // 0 — Pregled & Prevencija
  {
    title: 'Pregled & Prevencija',
    subtitle: 'Redoviti pregledi i profesionalna prevencija temelj su zdravih zuba.',
    badge: 'Osnova zdravlja',
    rows: [
      { name: 'Prva konzultacija', desc: 'Upoznavanje, razgovor o vašim željama i okvirni plan terapije', duration: '30 min', price: 'Besplatno', tag: 'popular' },
      { name: 'Sistematski pregled', desc: 'Kompletan pregled svih zuba, desni i mekih tkiva', duration: '45 min', price: eur(80) },
      { name: 'Početni pregled', desc: 'Za nove pacijente — detaljna procjena s RTG snimkom', duration: '60 min', price: eur(120) },
      { name: 'Kontrolni pregled', desc: 'Za redovite pacijente na kontroli svakih 6 mjeseci', duration: '30 min', price: eur(50) },
      { name: 'Hitni pregled', desc: 'Bol, lom ili oteklina — pregled isti dan, najkasnije u roku od 24 sata', duration: '30 min', price: eur(100) },
      { name: 'Rendgenska snimka (1 zub)', desc: 'Digitalna periapikalna snimka jednog zuba', duration: '5 min', price: eur(15) },
      { name: 'Ortopan snimka', desc: 'Panoramska snimka obiju čeljusti', duration: '10 min', price: eur(60) },
      { name: 'CBCT 3D snimka', desc: 'Trodimenzionalna snimka za planiranje implantata', duration: '15 min', price: eur(150), tag: 'new' },
      { name: 'Uklanjanje zubnog kamenca', desc: 'Profesionalno čišćenje ultrazvučnim uređajem', duration: '60 min', price: eur(90) },
      { name: 'Pjeskarenje i poliranje', desc: 'Air-flow tretman i poliranje svih površina', duration: '45 min', price: eur(70) },
      { name: 'Fluoridacija', desc: 'Premazivanje zuba fluorom za prevenciju karijesa', duration: '20 min', price: eur(30) },
    ],
  },
  // 1 — Estetika
  {
    title: 'Estetska stomatologija',
    subtitle: 'Od bijeljenja do kompletnog smile designa — transformiramo osmijehe.',
    badge: 'Najpopularnije',
    rows: [
      { name: 'Bijeljenje u ordinaciji', desc: 'Profesionalno bijeljenje — do 8 nijansi svjetlije u jednoj posjeti', duration: '90 min', price: eur(350), tag: 'popular' },
      { name: 'Kućno bijeljenje', desc: 'Individualne udlage i set gelova za 2 tjedna', duration: '—', price: eur(180) },
      { name: 'Kombinirani protokol', desc: 'Bijeljenje u ordinaciji + kućno bijeljenje za maksimalan učinak', duration: '—', price: eur(480), from: true },
      { name: 'Estetsko punjenje (prednji zub)', desc: 'Bijelo kompozitno punjenje prednjeg zuba', duration: '60 min', price: eur(120) },
      { name: 'Estetsko punjenje (bočni zub)', desc: 'Bijelo kompozitno punjenje bočnog zuba', duration: '45 min', price: eur(100) },
      { name: 'Keramički furnir', desc: 'Keramička ljuskica za jedan zub (laboratorij uključen)', duration: '2 posjete', price: eur(600), from: true },
      { name: 'Kompozitni furnir', desc: 'Izravni kompozitni furnir — povoljnija estetska alternativa', duration: '90 min', price: eur(280), from: true },
      { name: 'Digital Smile Design', desc: '3D vizualizacija novog osmijeha prije bilo kojeg zahvata', duration: '60 min', price: eur(200), tag: 'new' },
      { name: 'Zatvaranje dijasteme', desc: 'Zatvaranje razmaka između prednjih zuba kompozitom', duration: '90 min', price: eur(250), from: true },
      { name: 'Gingivoplastika (laser)', desc: 'Laserska korekcija linije desni za skladniji osmijeh', duration: '60 min', price: eur(300), from: true },
    ],
  },
  // 2 — Implantati
  {
    title: 'Implantati',
    subtitle: 'Trajno rješenje za izgubljene zube — premium implantati dolaze s doživotnim jamstvom proizvođača.',
    badge: 'Trajna investicija',
    rows: [
      { name: 'Konzultacija i plan terapije', desc: 'Pregled, analiza snimaka i izrada individualnog plana', duration: '60 min', price: 'Besplatno' },
      { name: 'Implantat (Straumann / Nobel Biocare)', desc: 'Premium implantat vodećih svjetskih proizvođača', duration: '60 min', price: eur(900), from: true, tag: 'popular' },
      { name: 'Implantat (standardni)', desc: 'Certificirani europski implantat', duration: '60 min', price: eur(650), from: true },
      { name: 'Krunica na implantatu (cirkon)', desc: 'Estetska cirkonska krunica — najprirodniji izgled', duration: '2 posjete', price: eur(600), from: true },
      { name: 'Krunica na implantatu (metal-keramika)', desc: 'Trajno rješenje po povoljnijoj cijeni', duration: '2 posjete', price: eur(400), from: true },
      { name: 'Augmentacija kosti', desc: 'Nadoknada koštanog tkiva prije ugradnje implantata', duration: '90 min', price: eur(500), from: true },
      { name: 'Sinus lift (zatvoreni)', desc: 'Podizanje dna sinusa za ugradnju implantata', duration: '90 min', price: eur(700), from: true },
      { name: 'All-on-4 (jedna čeljust)', desc: '4 implantata + fiksni most — kompletno rješenje', duration: 'Više posjeta', price: eur(8000), from: true },
      { name: 'All-on-6 (jedna čeljust)', desc: '6 implantata za maksimalnu stabilnost', duration: 'Više posjeta', price: eur(10500), from: true },
    ],
  },
  // 3 — Ortodoncija
  {
    title: 'Ortodoncija',
    subtitle: 'Ravni zubi za funkcionalan i estetski osmijeh — u svim godinama.',
    badge: 'Za sve dobi',
    rows: [
      { name: 'Ortodontska dijagnostika', desc: 'Pregled, fotografije, 3D sken i plan terapije', duration: '60 min', price: eur(100) },
      { name: 'Fiksni aparat (metalni)', desc: 'Klasični fiksni aparat s metalnim bravicama — jedna čeljust', duration: 'Više posjeta', price: eur(1800), from: true },
      { name: 'Fiksni aparat (keramički)', desc: 'Estetske keramičke bravice — jedna čeljust', duration: 'Više posjeta', price: eur(2400), from: true },
      { name: 'Invisalign Lite', desc: 'Do 14 prozirnih alignera za blage korekcije', duration: 'Više posjeta', price: eur(2500), from: true, tag: 'popular' },
      { name: 'Invisalign Comprehensive', desc: 'Neograničen broj alignera za složenije slučajeve', duration: 'Više posjeta', price: eur(4500), from: true },
      { name: 'Retencijska žica', desc: 'Fiksni retainer za očuvanje rezultata', duration: '30 min', price: eur(150) },
      { name: 'Prozirni retaineri', desc: 'Par udlaga za gornju i donju čeljust', duration: '—', price: eur(200) },
      { name: 'Kontrola i aktivacija aparata', desc: 'Redovita kontrola svakih 4–6 tjedana', duration: '30 min', price: eur(40) },
    ],
  },
  // 4 — Kirurgija
  {
    title: 'Oralna kirurgija',
    subtitle: 'Sve kirurške zahvate izvodimo uz lokalnu anesteziju — bezbolno i sigurno.',
    badge: 'Bezbolno',
    rows: [
      { name: 'Vađenje zuba (jednostavno)', desc: 'Vađenje lako dostupnog zuba', duration: '20 min', price: eur(60) },
      { name: 'Vađenje zuba (složeno)', desc: 'Vađenje uz komplikacije ili srastanje zuba s kosti', duration: '45 min', price: eur(120), from: true },
      { name: 'Vađenje umnjaka (izniklog)', desc: 'Vađenje potpuno izniklog umnjaka', duration: '30 min', price: eur(100) },
      { name: 'Vađenje umnjaka (impaktiranog)', desc: 'Kirurško vađenje umnjaka zaostalog u kosti', duration: '60 min', price: eur(220), from: true, tag: 'popular' },
      { name: 'Apikoektomija', desc: 'Kirurško uklanjanje vrha korijena zuba', duration: '60 min', price: eur(300), from: true },
      { name: 'Gingivektomija', desc: 'Uklanjanje viška tkiva desni', duration: '45 min', price: eur(200), from: true },
      { name: 'Frenulektomija', desc: 'Uklanjanje prekratkog frenuluma usne ili jezika', duration: '30 min', price: eur(180) },
      { name: 'Sedacija (rajski plin)', desc: 'Dušikov oksidul za opuštanje anksioznih pacijenata', duration: '—', price: eur(80), note: 'po posjeti' },
    ],
  },
  // 5 — Protetika
  {
    title: 'Protetika',
    subtitle: 'Nadoknada izgubljenih i obnova oštećenih zuba — materijali najviše kvalitete.',
    badge: 'Premium materijali',
    rows: [
      { name: 'Cirkonska krunica', desc: 'Najčvršća i najestetskija krunica — bez metalne baze', duration: '2 posjete', price: eur(550), from: true, tag: 'popular' },
      { name: 'Metal-keramička krunica', desc: 'Klasična krunica s metalnom bazom', duration: '2 posjete', price: eur(350), from: true },
      { name: 'Privremena krunica', desc: 'Zaštita zuba tijekom izrade trajne krunice', duration: '30 min', price: eur(80) },
      { name: 'Inlay / onlay (keramika)', desc: 'Keramički ispun izrađen u laboratoriju za veća oštećenja zuba', duration: '2 posjete', price: eur(380), from: true },
      { name: 'Totalna proteza', desc: 'Potpuna nadoknada za bezubu čeljust', duration: 'Više posjeta', price: eur(800), from: true },
      { name: 'Djelomična proteza (akrilatna)', desc: 'Mobilna nadoknada nekoliko zuba', duration: 'Više posjeta', price: eur(500), from: true },
      { name: 'Djelomična proteza (skeletirana)', desc: 'Lagana metalna konstrukcija — stabilnija i trajnija', duration: 'Više posjeta', price: eur(900), from: true },
      { name: 'Podlaganje proteze', desc: 'Prilagodba postojeće proteze za bolje prianjanje', duration: '60 min', price: eur(150), from: true },
    ],
  },
  // 6 — Paketi (renderira se posebno kroz <Packages />)
  null,
]

export const PACKAGES = [
  {
    icon: '✦',
    nm: 'Starter',
    title: 'Osnovna skrb',
    price: `Od ${eur(180)}`,
    period: 'godišnje',
    feat: false,
    fs: [
      'Dva sistematska pregleda godišnje',
      'Dva profesionalna čišćenja',
      'Digitalne RTG snimke',
      'Plan preventivne terapije',
      'Popust 10% na sve ostale usluge',
    ],
  },
  {
    icon: '◈',
    nm: 'Premium',
    title: 'Kompletan osmijeh',
    price: `Od ${eur(650)}`,
    period: 'godišnje',
    feat: true,
    fs: [
      'Sve iz paketa Starter',
      'Jedno profesionalno bijeljenje',
      'Dva estetska punjenja (kompozit)',
      'Prioritetno zakazivanje',
      'Popust 15% na protetiku i implantate',
      'Digital Smile Design konzultacija',
    ],
  },
  {
    icon: '◇',
    nm: 'Elite',
    title: 'Transformacija',
    price: 'Po dogovoru',
    period: 'individualni plan',
    feat: false,
    fs: [
      'Sve iz paketa Premium',
      'Kompletan smile design i realizacija',
      'Implantati, furniri i krunice',
      'Ortodontska terapija uključena',
      'Doživotno jamstvo na radove',
      'VIP termini i osobni koordinator',
    ],
  },
]

export const COMPARE_ROWS = [
  ['Sistematski pregled (2× godišnje)', '✓', '✓', '✓'],
  ['Profesionalno čišćenje (2×)', '✓', '✓', '✓'],
  ['Digitalne RTG snimke', '✓', '✓', '✓'],
  ['Bijeljenje zuba', '—', '✓', '✓'],
  ['Estetska punjenja', '—', '2 kom', 'Neograničeno'],
  ['Digital Smile Design', '—', '✓', '✓'],
  ['Ortodontska terapija', '—', '—', '✓'],
  ['Implantati / protetika', 'Popust 10%', 'Popust 15%', 'Uključeno'],
  ['Prioritetno zakazivanje', '—', '✓', 'VIP'],
  ['Jamstvo na radove', '1 godina', '3 godine', 'Doživotno'],
]

export const FAQ_ITEMS = [
  [
    'Kako se utvrđuje konačna cijena tretmana?',
    'Nakon pregleda i potrebnih snimaka izrađujemo detaljan plan terapije s točnom cijenom svakog zahvata. Nema skrivenih troškova — sve je unaprijed definirano pisanim predračunom.',
  ],
  [
    'Nudite li mogućnost obročnog plaćanja?',
    `Da. Zahvate iznad ${eur(500)} moguće je platiti u do 24 beskamatne rate. Prihvaćamo i sve vrste platnih kartica te gotovinu.`,
  ],
  [
    'Jesu li konzultacije besplatne?',
    'Da — prva konzultacija je besplatna i bez obveze, kao i konzultacija s planom terapije za implantate. Detaljni pregledi i snimke naplaćuju se prema cjeniku, a iznos pregleda uračunava se u cijenu terapije ako se za nju odlučite.',
  ],
  [
    'Postoji li jamstvo na radove?',
    'Na sve protetske radove dajemo jamstvo od najmanje godinu dana. Premium implantati (Straumann, Nobel Biocare) dolaze s doživotnim jamstvom proizvođača, a paket Elite uključuje doživotno jamstvo na sve naše radove.',
  ],
  [
    'Surađujete li s osiguravajućim kućama?',
    'Da, surađujemo s većinom osiguravajućih kuća koje nude dodatno zdravstveno osiguranje. Javite nam se i provjerit ćemo pokriće vaše police za planirani zahvat.',
  ],
  [
    'Koliko košta hitna stomatološka pomoć?',
    `Hitne slučajeve (bol, lom, trauma) nastojimo primiti isti dan, a najkasnije u roku od 24 sata. Hitni pregled iznosi ${eur(100)}, a ostali zahvati naplaćuju se prema standardnom cjeniku.`,
  ],
]
