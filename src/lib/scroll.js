/* Dijeljena referenca na Lenis instancu, da je mogu koristiti i navigacija
   po hashu (ScrollToHash) i klikovi na sidrene linkove (SmartLink). */
export const scrollRef = { current: null }

/* Glatko skrolaj do elementa/vrha; fallback na native ako Lenis nije aktivan. */
export function smoothScrollTo(target, opts = {}) {
  const lenis = scrollRef.current
  if (lenis) {
    lenis.scrollTo(target, { offset: -78, duration: 1.2, ...opts })
  } else if (typeof target === 'number') {
    window.scrollTo(0, target)
  } else if (target && target.scrollIntoView) {
    target.scrollIntoView({ behavior: 'smooth' })
  }
}
