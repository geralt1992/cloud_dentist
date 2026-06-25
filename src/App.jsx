import { Routes, Route, useParams } from 'react-router-dom'
import ScrollToHash from './components/ScrollToHash.jsx'
import SmoothScroll from './components/SmoothScroll.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import CursorFX from './components/CursorFX.jsx'
import { ClientProvider } from './client/ClientContext.jsx'
import { getClient } from './data/clients.js'
import Home from './pages/Home.jsx'
import Cijenik from './pages/Cijenik.jsx'

/* Personalizirana demo stranica za jednog klijenta: /demo/<slug> */
function DemoPage() {
  const { slug } = useParams()
  return (
    <ClientProvider client={getClient(slug)} isDemo>
      <Home />
    </ClientProvider>
  )
}

export default function App() {
  return (
    <ClientProvider>
      <SmoothScroll />
      <ScrollToHash />
      <ScrollProgress />
      <CursorFX />
      <div className="grain" aria-hidden="true" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cijenik" element={<Cijenik />} />
        <Route path="/demo/:slug" element={<DemoPage />} />
      </Routes>
    </ClientProvider>
  )
}
