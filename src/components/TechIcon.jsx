// TechIcon: los 6 iconos SVG de línea del stack original.
// `name` viene de cada habilidad en data/profile.js.
export default function TechIcon({ name }) {
  const common = {
    viewBox: '0 0 24 24',
    width: 26,
    height: 26,
    fill: 'none',
    stroke: '#0E7C5B',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  }
  switch (name) {
    case 'layout':
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      )
    case 'server':
      return (
        <svg {...common}>
          <rect x="2" y="3" width="20" height="7" rx="2" />
          <rect x="2" y="14" width="20" height="7" rx="2" />
          <path d="M6 6.5h.01M6 17.5h.01" />
        </svg>
      )
    case 'db':
      return (
        <svg {...common}>
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5" />
          <path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3" />
        </svg>
      )
    case 'code':
      return (
        <svg {...common}>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      )
    case 'git':
      return (
        <svg {...common}>
          <circle cx="6" cy="6" r="2.5" />
          <circle cx="6" cy="18" r="2.5" />
          <circle cx="18" cy="8" r="2.5" />
          <path d="M6 8.5v7M18 10.5c0 4-5 3.5-8 5" />
        </svg>
      )
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="2" />
          <path d="M8.5 8.5a5 5 0 0 0 0 7M15.5 8.5a5 5 0 0 1 0 7M5.6 5.6a9 9 0 0 0 0 12.8M18.4 5.6a9 9 0 0 1 0 12.8" />
        </svg>
      )
  }
}
