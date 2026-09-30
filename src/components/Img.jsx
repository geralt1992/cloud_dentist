import { withWidth, srcSetFor } from '../lib/img.js'

/* <img> sa srcset-om: preglednik sam bira najmanju sliku dovoljnu za ekran.
   `widths` = ponuđene širine, `sizes` = koliko je slika široka na stranici. */
export default function Img({ src, widths = [400, 800, 1200], sizes = '100vw', alt = '', ...rest }) {
  const srcSet = srcSetFor(src, widths)
  return (
    <img
      src={withWidth(src, widths[Math.min(1, widths.length - 1)])}
      srcSet={srcSet}
      sizes={srcSet ? sizes : undefined}
      alt={alt}
      decoding="async"
      {...rest}
    />
  )
}
