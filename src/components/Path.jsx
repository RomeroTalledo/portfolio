import { EDUCATION, EXPERIENCE } from '../data/profile.js'
import { useLang } from '../context/LangContext.jsx'
import Reveal from './Reveal.jsx'

// Path: trayectoria en dos columnas (Experiencia IT / Educación tech).
// Las pestañas pedidas (Experiencia IT / Educación) llegan "más adelante".
export default function Path() {
  const { T, lang } = useLang()

  return (
    <section className="section path" id="trayectoria">
      <div className="wrap">
        <Reveal>
          <p className="kicker">{T.path.kicker}</p>
        </Reveal>
        <Reveal>
          <h2 className="section__title">{T.path.title}</h2>
        </Reveal>
        <div className="path__grid">
          <div>
            <Reveal>
              <h3 className="path__label">{T.path.experience}</h3>
            </Reveal>
            <ol className="timeline">
              {EXPERIENCE.map((item) => {
                const e = item[lang]
                return (
                  <Reveal key={item.place}>
                    <li>
                      <span className="t-dot" />
                      <div>
                        <strong>{e.title}</strong>
                        <em>{item.place}</em>
                        <p>{e.desc}</p>
                      </div>
                    </li>
                  </Reveal>
                )
              })}
            </ol>
          </div>
          <div>
            <Reveal>
              <h3 className="path__label">{T.path.education}</h3>
            </Reveal>
            <ol className="timeline">
              {EDUCATION.map((item) => {
                const e = item[lang]
                return (
                  <Reveal key={item.place}>
                    <li>
                      <span className="t-dot t-dot--alt" />
                      <div>
                        <strong>{e.title}</strong>
                        <em>{item.place}</em>
                        <p>{e.desc}</p>
                      </div>
                    </li>
                  </Reveal>
                )
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
