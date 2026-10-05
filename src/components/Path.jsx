import { EDUCATION, EXPERIENCE } from '../data/profile.js'
import Reveal from './Reveal.jsx'

// Path: trayectoria en dos columnas (Experiencia IT / Educación tech).
// Las pestañas pedidas (Experiencia IT / Educación) llegan "más adelante".
export default function Path() {
  return (
    <section className="section path" id="trayectoria">
      <div className="wrap">
        <Reveal>
          <p className="kicker">Trayectoria</p>
        </Reveal>
        <Reveal>
          <h2 className="section__title">Experiencia IT + desarrollo de software</h2>
        </Reveal>
        <div className="path__grid">
          <div>
            <Reveal>
              <h3 className="path__label">💼 Experiencia IT</h3>
            </Reveal>
            <ol className="timeline">
              {EXPERIENCE.map((e) => (
                <Reveal key={e.title}>
                  <li>
                    <span className="t-dot" />
                    <div>
                      <strong>{e.title}</strong>
                      <em>{e.place}</em>
                      <p>{e.desc}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
          <div>
            <Reveal>
              <h3 className="path__label">🎓 Educación tech</h3>
            </Reveal>
            <ol className="timeline">
              {EDUCATION.map((e) => (
                <Reveal key={e.title}>
                  <li>
                    <span className="t-dot t-dot--alt" />
                    <div>
                      <strong>{e.title}</strong>
                      <em>{e.place}</em>
                      <p>{e.desc}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
