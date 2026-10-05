import { useEffect, useState } from 'react'

const LINKS = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#habilidades', label: 'Stack' },
  { href: '#trayectoria', label: 'Trayectoria' },
  { href: '#proyectos', label: 'Proyectos' },
]

export default function Navbar() {
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
      <a className="nav__brand" href="#inicio" aria-label="Inicio">
        <span className="nav__logo">&lt;DR/&gt;</span>
      </a>
      <nav className={`nav__links${open ? ' open' : ''}`} aria-label="Navegación principal">
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a href="#contacto" className="btn btn--small" onClick={() => setOpen(false)}>
          Contáctame
        </a>
      </nav>
      <button
        className="nav__toggle"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={open}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  )
}
