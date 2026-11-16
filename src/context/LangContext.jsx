import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { DEFAULT_LANG, TEXT } from '../lib/i18n.js'

// LangContext: reparte el idioma actual a TODA la página.
// - lang:   'en' | 'es'
// - T:      el objeto de textos de ese idioma (TEXT[lang])
// - toggle: cambia al otro idioma
// La elección se guarda en localStorage para que el visitante la recuerde.

const STORAGE_KEY = 'dallin-lang'
const LangContext = createContext(null)

// Lee la preferencia guardada; si no hay, usa el idioma por defecto.
function readStoredLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'en' || saved === 'es') return saved
  } catch {
    // Sin localStorage (modo privado / bloqueado): seguimos con el defecto.
  }
  return DEFAULT_LANG
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(readStoredLang)

  // Al cambiar de idioma: guardamos y avisamos al navegador (SEO + lectores).
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // Si no se puede guardar, no pasa nada: el idioma sigue funcionando.
    }
    document.documentElement.lang = lang
  }, [lang])

  const toggle = useCallback(
    () => setLang((current) => (current === 'en' ? 'es' : 'en')),
    [],
  )

  // useMemo: el valor solo se recrea si cambia lang (evita re-renders de más).
  const value = useMemo(
    () => ({ lang, setLang, toggle, T: TEXT[lang] }),
    [lang, toggle],
  )

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

// Hook para los componentes: const { T, lang, toggle } = useLang()
export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang debe usarse dentro de <LangProvider>')
  return ctx
}
