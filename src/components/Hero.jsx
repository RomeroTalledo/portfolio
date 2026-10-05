import { GITHUB_URL, LINKEDIN_URL, TYPING_LINES } from '../data/profile.js'
import { useTypewriter } from '../hooks/useTypewriter.js'
import { useCountUp } from '../hooks/useCountUp.js'
import TechCanvas from './TechCanvas.jsx'
import CodeWindow from './CodeWindow.jsx'
import Reveal from './Reveal.jsx'

const CHIPS = ['JS', 'Node', 'SQL', 'C#']

// Hero recibe el conteo REAL de repos (viene de App, que usa useRepos).
export default function Hero({ repoCount, reposReady, onEmail }) {
  const typed = useTypewriter(TYPING_LINES)
  const animatedCount = useCountUp(repoCount, reposReady)

  return (
    <section className="hero" id="inicio">
      <TechCanvas />
      <div className="hero__inner">
        <div className="hero__copy">
          <Reveal>
            <p className="hero__eyebrow">
              <span className="pulse-dot" /> Lima, Perú · Trabajo remoto
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="hero__title">Dallin Romero</h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="hero__role">Software Developer · Frontend + Backend</p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="hero__typing" aria-live="off">
              <span className="prompt">$</span> {typed}
              <span className="caret" />
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="hero__cta">
              <a href="#proyectos" className="btn btn--primary">
                Ver proyectos
              </a>
              <a href={GITHUB_URL} target="_blank" rel="noopener" className="btn btn--ghost">
                GitHub
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.5}>
            <div className="hero__social">
              <a href={GITHUB_URL} target="_blank" rel="noopener" aria-label="GitHub">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.35.95.1-.74.4-1.25.72-1.53-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.7 5.38-5.27 5.66.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                </svg>
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45z" />
                </svg>
              </a>
              <button type="button" onClick={onEmail} aria-label="Ver y copiar email" aria-haspopup="dialog">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 6L2 7" />
                </svg>
              </button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="hero__visual">
            <CodeWindow />
            <div className="chips" aria-hidden="true">
              {CHIPS.map((c, i) => (
                <span key={c} className={`chip c${i + 1}`}>
                  {c}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <div className="hero__stats">
        <Reveal>
          <div className="stat">
            {/* Contador REAL: proyectos visibles (sin cursos BYU) */}
            <strong>{reposReady ? animatedCount : '…'}</strong>
            <span>proyectos publicados</span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="stat">
            <strong>6</strong>
            <span>tecnologías</span>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="stat">
            <strong>2</strong>
            <span>roles en IT</span>
          </div>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="stat">
            <strong>3</strong>
            <span>estudios tech</span>
          </div>
        </Reveal>
      </div>
      <a className="scroll-hint" href="#sobre-mi" aria-label="Bajar a Sobre mí">
        ↓
      </a>
    </section>
  )
}
