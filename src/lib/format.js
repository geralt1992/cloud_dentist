/* Hrvatski zapis brojeva: 2500 → "2.500", 4.9 → "4,9". */
export const fmtNum = (n) => Number(n).toLocaleString('hr-HR')

/* Naslov kartice / pregleda linka: "Smile Design Kovač · Osijek" (grad se ne ponavlja ako je već u imenu). */
export const pageTitle = (c) => (c.name.includes(c.city) ? c.name : `${c.name} · ${c.city}`)

/* "2026-10-15" (vrijednost <input type="date">) → "15. 10. 2026." */
export function fmtDate(iso) {
  const [y, m, d] = iso.split('-')
  return `${Number(d)}. ${Number(m)}. ${y}.`
}

/* Brojka koja se ističe u heroju i na fotografiji u "O nama" — ista kao u statistici. */
export function highlightStat(c) {
  return c.highlight === 'patients'
    ? { value: `${fmtNum(c.patients)}+`, label: 'Zadovoljnih pacijenata' }
    : { value: `${c.years}+`, label: 'Godina iskustva' }
}
