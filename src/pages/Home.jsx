import { useClient } from '../client/ClientContext.jsx'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import FloatCTA from '../components/FloatCTA.jsx'
import DemoBanner from '../components/DemoBanner.jsx'
import Hero from '../sections/Hero.jsx'
import Stats from '../sections/Stats.jsx'
import Services from '../sections/Services.jsx'
import About from '../sections/About.jsx'
import Gallery from '../sections/Gallery.jsx'
import Testimonials from '../sections/Testimonials.jsx'
import Pricing from '../sections/Pricing.jsx'
import CTAStrip from '../sections/CTAStrip.jsx'
import Contact from '../sections/Contact.jsx'

export default function Home() {
  const { isDemo } = useClient()
  return (
    <>
      {isDemo ? <DemoBanner /> : <FloatCTA threshold={600} />}
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <Pricing />
      <CTAStrip />
      <Contact />
      <Footer />
    </>
  )
}
