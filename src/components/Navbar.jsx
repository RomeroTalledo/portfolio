import { useEffect, useState } from 'react'
import { useLang } from '../context/LangContext.jsx'

export default function Navbar() {
  const { T, lang, toggle } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  // useEffect con scroll: cambia el fondo del nav al bajar.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`}>
      <a className="nav__brand" href="#inicio" aria-label={T.nav.home}>
        <span className="nav__logo">&lt;DR/&gt;</span>
      </a>
      <nav className={`nav__links${open ? ' open' : ''}`} aria-label={T.nav.ariaMain}>
        {T.nav.links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a href="#contacto" className="btn btn--small" onClick={() => setOpen(false)}>
          {T.nav.contact}
        </a>
      </nav>
      <div className="nav__end">
        {/* Selector EN / ES: muestra el idioma ACTIVO resaltado. */}
        <button
          type="button"
          className="lang-switch"
          onClick={toggle}
          aria-label={T.nav.switchLang}
          title={T.nav.switchLang}
        >
          <span className={lang === 'en' ? 'on' : ''} aria-hidden="true">EN</span>
          <span className={lang === 'es' ? 'on' : ''} aria-hidden="true">ES</span>
        </button>
        <button
          className="nav__toggle"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? T.nav.closeMenu : T.nav.openMenu}
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
