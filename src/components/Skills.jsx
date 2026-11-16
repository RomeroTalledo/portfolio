import { motion } from 'framer-motion'
import { SKILLS } from '../data/profile.js'
import { useLang } from '../context/LangContext.jsx'
import TechIcon from './TechIcon.jsx'
import Reveal from './Reveal.jsx'

// Skills: tarjetas del stack con barra de nivel.
// La barra se anima con Framer Motion al entrar en pantalla.
export default function Skills() {
  const { T, lang } = useLang()

  return (
    <section className="section skills" id="habilidades">
      <div className="wrap">
        <Reveal>
          <p className="kicker">{T.skills.kicker}</p>
        </Reveal>
        <Reveal>
          <h2 className="section__title">{T.skills.title}</h2>
        </Reveal>
        <div className="skills__grid">
          {SKILLS.map((skill, i) => {
            // icon y pct son comunes; el texto lo elegimos por idioma.
            const s = skill[lang]
            return (
              <Reveal key={skill.icon} delay={(i % 3) * 0.12}>
                <article className="skill">
                  <div className="skill__head">
                    <span className="skill__icon">
                      <TechIcon name={skill.icon} />
                    </span>
                    <div>
                      <span className="skill__tag">{s.tag}</span>
                      <h3>{s.title}</h3>
                    </div>
                  </div>
                  <p>{s.desc}</p>
                  <div
                    className="bar"
                    role="progressbar"
                    aria-valuenow={skill.pct}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-label={s.title}
                  >
                    <motion.i
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.8, ease: [0.2, 0.8, 0.2, 1] }}
                    />
                  </div>
                  <span className="skill__pct">
                    {s.tech} · {skill.pct}%
                  </span>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
