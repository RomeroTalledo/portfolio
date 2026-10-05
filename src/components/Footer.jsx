import { GITHUB_URL, LINKEDIN_URL } from '../data/profile.js'

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © 2026 <strong>Dallin Erick Romero Talledo</strong>
      </p>
      <p className="footer__links">
        <a href={GITHUB_URL} target="_blank" rel="noopener">
          GitHub
        </a>
        <span>·</span>
        <a href={LINKEDIN_URL} target="_blank" rel="noopener">
          LinkedIn
        </a>
      </p>
    </footer>
  )
}
