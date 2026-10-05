import { EMAIL, GITHUB_URL, LINKEDIN_URL, PHONE } from '../data/profile.js'
import Reveal from './Reveal.jsx'

// Contact recibe onEmail desde App para abrir el modal de correo.
export default function Contact({ onEmail }) {
  return (
    <section className="section contact" id="contacto">
      <div className="wrap">
        <Reveal>
          <p className="kicker">Contacto</p>
        </Reveal>
        <Reveal>
          <h2 className="section__title">¿Hablamos?</h2>
        </Reveal>
        <Reveal>
          <p className="section__sub">¿Tienes un proyecto en mente? Respondo rápido.</p>
        </Reveal>
        <div className="contact__grid">
          <Reveal>
            <button type="button" className="contact__card" onClick={onEmail} aria-haspopup="dialog">
              <span className="contact__icon" aria-hidden="true">✉️</span>
              <strong>Email</strong>
              <span>{EMAIL}</span>
            </button>
          </Reveal>
          <Reveal delay={0.1}>
            <a className="contact__card" href={`tel:${PHONE.replace(/\s/g, '')}`}>
              <span className="contact__icon" aria-hidden="true">📞</span>
              <strong>Teléfono</strong>
              <span>{PHONE}</span>
            </a>
          </Reveal>
          <Reveal delay={0.2}>
            <a className="contact__card" href={LINKEDIN_URL} target="_blank" rel="noopener">
              <span className="contact__icon" aria-hidden="true">💼</span>
              <strong>LinkedIn</strong>
              <span>/in/dallin-e-romero</span>
            </a>
          </Reveal>
          <Reveal delay={0.3}>
            <a className="contact__card" href={GITHUB_URL} target="_blank" rel="noopener">
              <span className="contact__icon" aria-hidden="true">💻</span>
              <strong>GitHub</strong>
              <span>@RomeroTalledo</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
