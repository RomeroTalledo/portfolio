import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { LangProvider } from './context/LangContext.jsx'

// Punto de entrada: React toma el <div id="root"> del index.html
// y dibuja dentro nuestra <App />.
// LangProvider envuelve toda la app para que cualquier componente
// pueda leer el idioma con useLang().
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LangProvider>
      <App />
    </LangProvider>
  </StrictMode>,
)
