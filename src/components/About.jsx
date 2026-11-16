import { useLang } from '../context/LangContext.jsx'
import Bold from './Bold.jsx'
import Reveal from './Reveal.jsx'

export default function About() {
  const { T } = useLang()

  return (
    <section className="section about" id="sobre-mi">
      <div className="wrap">
        <Reveal>
          <p className="kicker">{T.about.kicker}</p>
        </Reveal>
        <Reveal>
          <h2 className="section__title">{T.about.title}</h2>
        </Reveal>
        <div className="about__grid">
          <Reveal>
            <div className="about__card">
              <p>
                <Bold text={T.about.p1} />
              </p>
              <p>
                <Bold text={T.about.p2} />
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <ul className="about__facts">
              {T.about.facts.map((f) => (
                <li key={f.label}>
                  <strong>{f.label}</strong>
                  <span>{f.value}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
