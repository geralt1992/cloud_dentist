import { createContext, useContext } from 'react'
import { DEFAULT_CLIENT } from '../data/clients.js'

/* Drži podatke trenutnog "klijenta" (brand, doktor, kontakt...) i je li
   stranica u demo načinu (/demo/<slug>). Default = DentArt, normalan način. */
const ClientContext = createContext({ ...DEFAULT_CLIENT, isDemo: false })

export function ClientProvider({ client = DEFAULT_CLIENT, isDemo = false, children }) {
  return (
    <ClientContext.Provider value={{ ...client, isDemo }}>
      {children}
    </ClientContext.Provider>
  )
}

export const useClient = () => useContext(ClientContext)
