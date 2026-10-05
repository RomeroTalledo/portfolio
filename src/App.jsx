import { useState } from 'react'
import { useRepos } from './hooks/useRepos.js'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Path from './components/Path.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import EmailModal from './components/EmailModal.jsx'
import Footer from './components/Footer.jsx'

// App.jsx es el "plano" de la página: ordena las secciones y guarda
// los 2 estados globales: los repos de GitHub y el modal del correo.
// useRepos se llama UNA sola vez aquí; Hero y Projects reciben los datos.
export default function App() {
  const { repos, loading, error } = useRepos()
  const [emailOpen, setEmailOpen] = useState(false)
  const openEmail = () => setEmailOpen(true)
  const closeEmail = () => setEmailOpen(false)

  return (
    <>
      <Navbar />
      <main>
        <Hero
          repoCount={repos.length}
          reposReady={!loading && !error}
          onEmail={openEmail}
        />
        <Marquee />
        <About />
        <Skills />
        <Path />
        <Projects repos={repos} loading={loading} error={error} />
        <Contact onEmail={openEmail} />
      </main>
      <Footer />
      <EmailModal open={emailOpen} onClose={closeEmail} />
    </>
  )
}
