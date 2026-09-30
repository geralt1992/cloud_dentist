import { useEffect } from 'react'

/* Naslov kartice preglednika — prati ime klijenta (demo prikazuje njegovo ime, ne "DentArt"). */
export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title
  }, [title])
}
