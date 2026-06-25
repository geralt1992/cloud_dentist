import { Routes, Route, useParams } from 'react-router-dom'
import ScrollToHash from './components/ScrollToHash.jsx'
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
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cijenik" element={<Cijenik />} />
        <Route path="/demo/:slug" element={<DemoPage />} />
      </Routes>
    </ClientProvider>
  )
}
