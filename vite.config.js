import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { resolve } from 'node:path'
import { CLIENTS, getClient } from './src/data/clients.js'
import { pageTitle } from './src/lib/format.js'

/* Pregled linka (WhatsApp, e-mail, Messenger) ne pokreće JavaScript — čita samo <head>.
   Zato nakon builda za svaki demo nastaje dist/demo/<slug>.html: ista aplikacija, ali s
   imenom ordinacije u naslovu i opisu. Vercel ga (cleanUrls) poslužuje na /demo/<slug>. */
function demoPages() {
  let outDir
  const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
  const desc = esc(
    'Demo prijedlog — ovako bi mogla izgledati vaša nova web stranica: moderan dizajn, cjenik, recenzije i online naručivanje.'
  )
  return {
    name: 'demo-pages',
    apply: 'build',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir)
    },
    closeBundle() {
      const html = readFileSync(resolve(outDir, 'index.html'), 'utf8')
      mkdirSync(resolve(outDir, 'demo'), { recursive: true })
      for (const slug of Object.keys(CLIENTS)) {
        const c = getClient(slug)
        const title = esc(pageTitle(c))
        const page = html
          .replace(/<title>[^<]*<\/title>/, () => `<title>${title}</title>`)
          .replace(/(<meta name="description" content=")[^"]*/, (_, p) => p + desc)
          .replace(/(<meta property="og:title" content=")[^"]*/, (_, p) => p + title)
          .replace(/(<meta property="og:description" content=")[^"]*/, (_, p) => p + desc)
        writeFileSync(resolve(outDir, 'demo', `${slug}.html`), page)
      }
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), demoPages()],
})
