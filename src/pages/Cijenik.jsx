import { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import FloatCTA from '../components/FloatCTA.jsx'
import PriceHero from '../sections/cijenik/PriceHero.jsx'
import PriceTabs from '../sections/cijenik/PriceTabs.jsx'
import PriceTable from '../sections/cijenik/PriceTable.jsx'
import Packages from '../sections/cijenik/Packages.jsx'
import FAQ from '../sections/cijenik/FAQ.jsx'
import CTAStrip from '../sections/CTAStrip.jsx'
import { useClient } from '../client/ClientContext.jsx'
import { useDocumentTitle } from '../lib/useDocumentTitle.js'
import { PRICE_DATA, TABS } from '../data/pricing.js'

const PACKAGES_TAB = TABS.length - 1 // zadnji tab je "Paketi"

function PriceContent() {
  const [tab, setTab] = useState(0)
  const section = PRICE_DATA[tab]

  return (
    <>
      <PriceTabs active={tab} onChange={setTab} />
      <div className="container">
        {tab === PACKAGES_TAB ? (
          <Packages />
        ) : (
          section && (
            <PriceTable
              key={tab}
              title={section.title}
              subtitle={section.subtitle}
              badge={section.badge}
              rows={section.rows}
            />
          )
        )}
      </div>
    </>
  )
}

export default function Cijenik() {
  const c = useClient()
  useDocumentTitle(`Cjenik | ${c.name}`)
  return (
    <>
      <FloatCTA threshold={400} />
      <Navbar />
      <PriceHero />
      <PriceContent />
      <FAQ />
      <CTAStrip
        title="Spremni za osmijeh"
        titleEm="koji mijenja sve?"
        text="Zakažite besplatnu konzultaciju i saznajte točan plan i cijenu za svoj slučaj."
      />
      <Footer />
    </>
  )
}
