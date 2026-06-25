import { useClient } from '../client/ClientContext.jsx'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import FloatCTA from '../components/FloatCTA.jsx'
import DemoBanner from '../components/DemoBanner.jsx'
import Hero from '../sections/Hero.jsx'
import Stats from '../sections/Stats.jsx'
import TrustedBy from '../sections/TrustedBy.jsx'
import Services from '../sections/Services.jsx'
import Process from '../sections/Process.jsx'
import About from '../sections/About.jsx'
import Team from '../sections/Team.jsx'
import BeforeAfter from '../sections/BeforeAfter.jsx'
import Gallery from '../sections/Gallery.jsx'
import Testimonials from '../sections/Testimonials.jsx'
import QuickBook from '../sections/QuickBook.jsx'
import Pricing from '../sections/Pricing.jsx'
import FaqHome from '../sections/FaqHome.jsx'
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
      <TrustedBy />
      <Services />
      <Process />
      <About />
      <Team />
      <BeforeAfter />
      <Gallery />
      <Testimonials />
      <QuickBook />
      <Pricing />
      <FaqHome />
      <CTAStrip />
      <Contact />
      <Footer />
    </>
  )
}
