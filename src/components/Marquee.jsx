const TECHS = [
  'JavaScript',
  'HTML5',
  'CSS3',
  'Node.js',
  'Express',
  'EJS',
  'Python',
  'C#',
  'SQL',
  'Git & GitHub',
]

// Marquee: cinta infinita de tecnologías (se duplica para el bucle).
export default function Marquee() {
  const row = [...TECHS, ...TECHS]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {row.map((t, i) => (
          <span key={i} style={{ display: 'contents' }}>
            <span>{t}</span>
            <i>✦</i>
          </span>
        ))}
      </div>
    </div>
  )
}
