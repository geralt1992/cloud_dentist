/* Sve cijene su okvirne — uredi ovdje da promijeniš cjenik na stranici /cijenik. */

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
      { name: 'Sistematski pregled', desc: 'Kompletan pregled svih zuba, desni i mekih tkiva', duration: '45 min', price: '80€' },
      { name: 'Početni pregled', desc: 'Za nove pacijente — detaljna procjena s RTG snimkom', duration: '60 min', price: '120€', tag: 'popular' },
      { name: 'Kontrolni pregled', desc: 'Za redovite pacijente na 6-mj. kontroli', duration: '30 min', price: '50€' },
      { name: 'Rendgenski snimak (1)', desc: 'Digitalni periapikalni snimak jednog zuba', duration: '5 min', price: '15€' },
      { name: 'Ortopan snimak', desc: 'Panoramski snimak cijele čeljusti', duration: '10 min', price: '60€' },
      { name: 'CBCT 3D snimak', desc: 'Trodimenzionalni snimak za planiranje implantata', duration: '15 min', price: '150€', tag: 'new' },
      { name: 'Profesionalno čišćenje (scaling)', desc: 'Uklanjanje zubnog kamenca ultrazvučnim uređajem', duration: '60 min', price: '90€' },
      { name: 'Pjeskarenje i poliranje', desc: 'Air-flow tretman i poliranje svih površina', duration: '45 min', price: '70€' },
      { name: 'Lakiranjem fluorom', desc: 'Zaštita mineralima za prevenciju karijesa', duration: '20 min', price: '30€' },
    ],
  },
  // 1 — Estetika
  {
    title: 'Estetska stomatologija',
    subtitle: 'Od bijeljenja do kompletnog smile design-a — transformiramo osmijehe.',
    badge: 'Najpopularnije',
    rows: [
      { name: 'Bijeljenje (ordinacijsko)', desc: 'Zoom/Beyond bijeljenje — do 8 nijansi svjetlije', duration: '90 min', price: '350€', tag: 'popular' },
      { name: 'Bijeljenje (kućni kit)', desc: 'Individualne udlage + set gelova za 2 tjedna', duration: '—', price: '180€' },
      { name: 'Kombinirani protokol', desc: 'Ordinacijsko + kućno bijeljenje za maksimalni efekt', duration: '—', price: '480€', from: true },
      { name: 'Estetsko punjenje (kompozit)', desc: 'Bijelo punjenje jednog zuba — prednja regija', duration: '60 min', price: '120€' },
      { name: 'Estetsko punjenje (lateralni)', desc: 'Bijelo punjenje — bočni zub', duration: '45 min', price: '100€' },
      { name: 'Porculanski furnir', desc: 'Keramički furnir jednog zuba (laboratorij uključen)', duration: '2 posjete', price: '600€', from: true },
      { name: 'Kompozitni furnir', desc: 'Izravni kompozitni furnir — estetska alternativa', duration: '90 min', price: '280€', from: true },
      { name: 'Digital Smile Design', desc: '3D vizualizacija novog osmijeha prije bilo kojeg zahvata', duration: '60 min', price: '200€', tag: 'new' },
      { name: 'Diastema closure', desc: 'Zatvaranje razmaka između prednjih zuba kompozitom', duration: '90 min', price: '250€', from: true },
      { name: 'Gingivoplastika (laser)', desc: 'Korekcija linije desni za estetski osmijeh', duration: '60 min', price: '300€', from: true },
    ],
  },
  // 2 — Implantati
  {
    title: 'Implantati',
    subtitle: 'Trajno rješenje za izgubljene zube s doživotnom garancijom na titanijumski implantat.',
    badge: 'Trajna investicija',
    rows: [
      { name: 'Konzultacija i plan terapije', desc: 'Pregled, snimci i izrada individualnog plana', duration: '60 min', price: 'Besplatno' },
      { name: 'Implantat (Straumann/Nobel)', desc: 'Premium švicarski ili američki implantat', duration: '60 min', price: '900€', from: true, tag: 'popular' },
      { name: 'Implantat (ekonomski)', desc: 'Certifikovani europski implantat', duration: '60 min', price: '650€', from: true },
      { name: 'Krunica na implantatu (cirkon)', desc: 'Estetska cirkonska krunica — najljepši rezultat', duration: '2 posjete', price: '600€', from: true },
      { name: 'Krunica na implantatu (metal-keramika)', desc: 'Trajno rješenje po povoljnijoj cijeni', duration: '2 posjete', price: '400€', from: true },
      { name: 'Augmentacija kosti', desc: 'Nadoknada koštanog tkiva za ugradnju implantata', duration: '90 min', price: '500€', from: true },
      { name: 'Sinus lifting (zatvoreni)', desc: 'Podizanje dna sinusa za ugradnju implantata', duration: '90 min', price: '700€', from: true },
      { name: 'All-on-4 (jedna čeljust)', desc: '4 implantata + fiksna proteza — kompletno rješenje', duration: 'Više posjeta', price: '8000€', from: true },
      { name: 'All-on-6 (jedna čeljust)', desc: '6 implantata za maksimalnu stabilnost', duration: 'Više posjeta', price: '10500€', from: true },
    ],
  },
  // 3 — Ortodoncija
  {
    title: 'Ortodoncija',
    subtitle: 'Ispravna linija zuba za funkcionalan i estetski osmijeh — u svim godinama.',
    badge: 'Za sve dobi',
    rows: [
      { name: 'Ortodontska konzultacija', desc: 'Pregled, fotografije, modeli i plan terapije', duration: '60 min', price: '100€' },
      { name: 'Fiksni aparat (metalni)', desc: 'Klasični fiksni aparat — jedna čeljust', duration: 'Više posjeta', price: '1800€', from: true },
      { name: 'Fiksni aparat (keramički)', desc: 'Estetski prozirni nosači — jedna čeljust', duration: 'Više posjeta', price: '2400€', from: true },
      { name: 'Invisalign (Lite)', desc: 'Do 14 alignera za blage korekcije', duration: 'Više posjeta', price: '2500€', from: true, tag: 'popular' },
      { name: 'Invisalign (Comprehensive)', desc: 'Neograničen broj alignera za kompleksne slučajeve', duration: 'Više posjeta', price: '4500€', from: true },
      { name: 'Retainer (žičani)', desc: 'Fiksni retainer za održavanje rezultata', duration: '30 min', price: '150€' },
      { name: 'Retainer (prozirni, par)', desc: 'Dva prozirna retainera gornji + donji', duration: '—', price: '200€' },
      { name: 'Aktivacijski posjet', desc: 'Redovita aktivacija aparata svakih 4-6 tjedana', duration: '30 min', price: '40€' },
    ],
  },
  // 4 — Kirurgija
  {
    title: 'Oralna kirurgija',
    subtitle: 'Sve kirurške zahvate izvodimo uz lokalna anesteziju — bezbolno i sigurno.',
    badge: 'Bezbolno',
    rows: [
      { name: 'Ekstrakcija (jednostavna)', desc: 'Vađenje jednostavno pristupačnog zuba', duration: '20 min', price: '60€' },
      { name: 'Ekstrakcija (složena)', desc: 'Vađenje s komplikacijom ili ankilozom', duration: '45 min', price: '120€', from: true },
      { name: 'Umnjak (jednostavan)', desc: 'Vađenje potpuno niknutog umnjaka', duration: '30 min', price: '100€' },
      { name: 'Umnjak (impaktirani)', desc: 'Kirurško vađenje retiniranog umnjaka', duration: '60 min', price: '220€', from: true, tag: 'popular' },
      { name: 'Apikoektomija', desc: 'Kirurška resekcija vrha korijena zuba', duration: '60 min', price: '300€', from: true },
      { name: 'Gingivektomija', desc: 'Uklanjanje viška desnog tkiva', duration: '45 min', price: '200€', from: true },
      { name: 'Frenulektomija', desc: 'Uklanjanje frenuluma usne ili jezika', duration: '30 min', price: '180€' },
      { name: 'Sedacija (inhalacijska)', desc: 'Dušikov oksid za opuštanje anksioznih pacijenata', duration: '—', price: '80€', note: 'po posjeti' },
    ],
  },
  // 5 — Protetika
  {
    title: 'Protetika',
    subtitle: 'Nadoknada izgubljenih zuba i rekonstrukcija oštećenih — materijali najviše kvalitete.',
    badge: 'Premium materijali',
    rows: [
      { name: 'Cirkonska krunica', desc: 'Najčvršća i najestetskija krunica — bez metalne baze', duration: '2 posjete', price: '550€', from: true, tag: 'popular' },
      { name: 'Metal-keramička krunica', desc: 'Klasična krunica s metalnom bazom', duration: '2 posjete', price: '350€', from: true },
      { name: 'Privremena krunica', desc: 'Privremena PMMA krunica za zaštitu tijekom terapije', duration: '30 min', price: '80€' },
      { name: 'Inlay / Onlay (keramika)', desc: 'Laboratorijsko punjenje veće kavitete', duration: '2 posjete', price: '380€', from: true },
      { name: 'Totalna proteza', desc: 'Potpuna nadoknada za bezubu čeljust', duration: 'Više posjeta', price: '800€', from: true },
      { name: 'Parcijalna proteza (akrilna)', desc: 'Uklonljiva nadoknada manjeg broja zuba', duration: 'Više posjeta', price: '500€', from: true },
      { name: 'Parcijalna proteza (skeletonizirana)', desc: 'Metalna skeletna konstrukcija — dugotrajnija', duration: 'Više posjeta', price: '900€', from: true },
      { name: 'Reline proteze', desc: 'Podlaganje postojeće proteze za bolji nalijeganje', duration: '60 min', price: '150€', from: true },
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
    price: 'Od 180€',
    period: 'godišnje',
    feat: false,
    fs: [
      'Dva sistematska pregleda godišnje',
      'Profesionalno čišćenje (2×)',
      'Digitalni RTG snimci',
      'Plan preventivne terapije',
      'Popust 10% na sve ostale usluge',
    ],
  },
  {
    icon: '◈',
    nm: 'Premium',
    title: 'Kompletan osmijeh',
    price: 'Od 650€',
    period: 'godišnje',
    feat: true,
    fs: [
      'Sve iz Starter paketa',
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
    period: 'individualno',
    feat: false,
    fs: [
      'Sve iz Premium paketa',
      'Kompletni smile design i realizacija',
      'Implantati / furniri / krunice',
      'Ortodontska terapija uključena',
      'Doživotna garancija na radove',
      'VIP zakazivanje i kućni posjeti',
    ],
  },
]

export const COMPARE_ROWS = [
  ['Sistematski pregled (2×/god)', '✓', '✓', '✓'],
  ['Profesionalno čišćenje (2×)', '✓', '✓', '✓'],
  ['Digitalni RTG snimci', '✓', '✓', '✓'],
  ['Bijeljenje zuba', '—', '✓', '✓'],
  ['Estetska punjenja', '—', '2 kom', 'Neograničeno'],
  ['Digital Smile Design', '—', '✓', '✓'],
  ['Ortodontska terapija', '—', '—', '✓'],
  ['Implantati / Protetika', 'Popust 10%', 'Popust 15%', 'Uključeno'],
  ['Prioritetno zakazivanje', '—', '✓', 'VIP'],
  ['Garancija na radove', '1 godina', '3 godine', 'Doživotna'],
]

export const FAQ_ITEMS = [
  [
    'Kako se utvrđuje konačna cijena tretmana?',
    'Nakon inicijalnog pregleda i potrebnih snimaka, dr. Kovač sastavlja detaljan plan terapije s točnim cijenama za svaki zahvat. Nema skrivenih troškova — sve je definirano unaprijed pisanim predračunom.',
  ],
  [
    'Nudite li mogućnost obročnog plaćanja?',
    'Da, surađujemo s vodećim bankama i nudimo beskamatno obročno plaćanje do 24 rate za zahvate iznad 500€. Također prihvaćamo sve vrste platnih kartica i gotovinu.',
  ],
  [
    'Jesu li konzultacije besplatne?',
    'Inicijalna konzultacija za implantate i kompleksnu protetiku je u potpunosti besplatna. Za sistematski pregled naplaćuje se standardna naknada od 80€ koja se uračunava u cijenu terapije.',
  ],
  [
    'Postoji li garancija na radove?',
    'Sve protetske radove jamčimo minimalno godinu dana. Implantati Straumann/Nobel dolaze s doživotnom garancijom proizvođača. Elite paket uključuje doživotnu garanciju na sve naše radove.',
  ],
  [
    'Prihvaćate li dopunsko zdravstveno osiguranje?',
    'Da, surađujemo s većinom dopunskih zdravstvenih osiguranja. Preporučujemo da nas kontaktirate kako bismo provjerili pokriće vašeg osiguranja za planirani zahvat.',
  ],
  [
    'Koliko košta hitna stomatološka pomoć?',
    'Hitnu intervenciju (bol, lom, trauma) zbrinjavamo u roku 24h. Naknada za hitni pregled iznosi 100€, a ostali zahvati naplaćuju se prema standardnom cjeniku.',
  ],
]
