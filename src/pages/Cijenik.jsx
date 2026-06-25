import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import FloatCTA from '../components/FloatCTA.jsx'
import FadeUp from '../components/FadeUp.jsx'
import PriceHero from '../sections/cijenik/PriceHero.jsx'
import PriceTabs from '../sections/cijenik/PriceTabs.jsx'
import PriceTable from '../sections/cijenik/PriceTable.jsx'
import Packages from '../sections/cijenik/Packages.jsx'
import FAQ from '../sections/cijenik/FAQ.jsx'
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
  return (
    <>
      <FloatCTA threshold={400} />
      <Navbar />
      <PriceHero />
      <PriceContent />
      <FAQ />
      <section className="cta-strip">
        <div className="container">
          <FadeUp>
            <h2>
              Spremi se za osmijeh
              <br />
              koji mijenja sve
            </h2>
            <p>Zakaži besplatnu konzultaciju i saznaj točan plan i cijenu za tvoj slučaj.</p>
            <Link to="/#kontakt" className="btn btn-dark">
              Zakaži besplatnu konzultaciju →
            </Link>
          </FadeUp>
        </div>
      </section>
      <Footer />
    </>
  )
}
