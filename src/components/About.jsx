import Reveal from './Reveal.jsx'

const FACTS = [
  { label: '💻 Enfoque', value: 'Frontend · Backend · SQL' },
  { label: '📍 Base', value: 'Lima, Perú · remoto' },
  { label: '🎓 Estudios', value: 'BYU-Idaho · Ensign College · TestOut' },
  { label: '💬 Idiomas', value: 'Español nativo · Inglés profesional' },
]

export default function About() {
  return (
    <section className="section about" id="sobre-mi">
      <div className="wrap">
        <Reveal>
          <p className="kicker">Sobre mí</p>
        </Reveal>
        <Reveal>
          <h2 className="section__title">Desarrollador de software con base en IT</h2>
        </Reveal>
        <div className="about__grid">
          <Reveal>
            <div className="about__card">
              <p>
                Soy <strong>Dallin Romero</strong>, desarrollador de software: construyo
                para la web con <strong>JavaScript, Node.js, Python y C#</strong> —
                interfaces claras en el frontend y lógica ordenada en el backend, con
                bases de datos relacionales bien modeladas.
              </p>
              <p>
                Mi diferencial: años de <strong>soporte IT</strong> — diagnóstico de
                sistemas, redes y hardware —, así que debuggeo con método y entiendo
                lo que pasa bajo el capó. Formación en{' '}
                <strong>Software Development (BYU-Idaho)</strong>.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <ul className="about__facts">
              {FACTS.map((f) => (
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
