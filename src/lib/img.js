/* Pomoćnici za Pexels slike.
   Jedan URL → više širina (srcset), pa mobitel ne skida desktop verziju.
   Pexels sam šalje AVIF/WebP preglednicima koji ih podržavaju. */

export function pexels(id, w = 800) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`
}

const isPexels = (url) => typeof url === 'string' && url.startsWith('https://images.pexels.com/')

/* Isti Pexels URL sa zadanom širinom; ostali URL-ovi (npr. vlastita fotka klijenta) prolaze nepromijenjeni. */
export function withWidth(url, w) {
  if (!isPexels(url)) return url
  const u = new URL(url)
  u.searchParams.set('w', String(w))
  return u.toString()
}

export function srcSetFor(url, widths) {
  if (!isPexels(url)) return undefined
  return widths.map((w) => `${withWidth(url, w)} ${w}w`).join(', ')
}
